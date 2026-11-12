<h1 id="knock-api">Knock API v1.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Base URLs:

* <a href="https://api.knock.app">https://api.knock.app</a>

# Authentication

- HTTP Authentication, scheme: bearer

<h1 id="knock-api-audiences">Audiences</h1>

An Audience is a segment of users.

## List members

<a id="opIdlistAudienceMembers"></a>

> Code samples

```bash
curl https://api.knock.app/v1/audiences/string/members \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/audiences/{key}/members`

Returns a paginated list of members for the specified audience.

<h3 id="list-members-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|key|path|string|true|The key of the audience.|

> Example responses

> 200 Response

```json
{
  "entries": [
    {
      "__typename": "AudienceMember",
      "added_at": "1993-06-10T14:30:00Z",
      "tenant": "ingen_isla_nublar",
      "user": {
        "__typename": "User",
        "created_at": null,
        "email": "alan.grant@dig.site.mt",
        "id": "dr_grant",
        "name": "Dr. Alan Grant",
        "updated_at": "1993-06-09T08:15:00Z"
      },
      "user_id": "dr_grant"
    }
  ],
  "page_info": {
    "__typename": "PageInfo",
    "after": null,
    "before": null,
    "page_size": 25
  }
}
```

<h3 id="list-members-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[ListAudienceMembersResponse](#schemalistaudiencemembersresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

## Add members

<a id="opIdaddAudienceMembers"></a>

> Code samples

```bash
curl https://api.knock.app/v1/audiences/string/members \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "members": [
      {
        "tenant": "ingen_isla_nublar",
        "user": {
          "email": "ellie@ingen.net",
          "id": "dr_sattler",
          "name": "Dr. Ellie Sattler"
        }
      }
    ]
  }'
```

`POST /v1/audiences/{key}/members`

Adds one or more members to the specified audience.

> Body parameter

```json
{
  "members": [
    {
      "tenant": "ingen_isla_nublar",
      "user": {
        "email": "ellie@ingen.net",
        "id": "dr_sattler",
        "name": "Dr. Ellie Sattler"
      }
    }
  ]
}
```

<h3 id="add-members-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|key|path|string|true|The key of the audience.|
|create_audience|query|boolean|false|Create the audience if it does not exist.|
|body|body|[AddAudienceMembersRequest](#schemaaddaudiencemembersrequest)|true|Params|
|» members|body|[[AudienceMemberRequest](#schemaaudiencememberrequest)]|true|A list of audience members to add. You can add up to 1,000 members per request.|

<h3 id="add-members-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

## Remove members

<a id="opIdremoveAudienceMembers"></a>

> Code samples

```bash
curl https://api.knock.app/v1/audiences/string/members \
  -X DELETE \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "members": [
      {
        "tenant": "ingen_isla_nublar",
        "user": {
          "email": "ellie@ingen.net",
          "id": "dr_sattler",
          "name": "Dr. Ellie Sattler"
        }
      }
    ]
  }'
```

`DELETE /v1/audiences/{key}/members`

Removes one or more members from the specified audience.

> Body parameter

```json
{
  "members": [
    {
      "tenant": "ingen_isla_nublar",
      "user": {
        "email": "ellie@ingen.net",
        "id": "dr_sattler",
        "name": "Dr. Ellie Sattler"
      }
    }
  ]
}
```

<h3 id="remove-members-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|key|path|string|true|The key of the audience.|
|body|body|[RemoveAudienceMembersRequest](#schemaremoveaudiencemembersrequest)|true|Params|
|» members|body|[[AudienceMemberRequest](#schemaaudiencememberrequest)]|true|A list of audience members to remove. You can remove up to 1,000 members per request.|

<h3 id="remove-members-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

<h1 id="knock-api-bulk-operations">Bulk operations</h1>

A bulk operation is a set of changes applied across zero or more records triggered via a call to the Knock API and performed asynchronously.

## Get bulk operation

<a id="opIdgetBulkOperation"></a>

> Code samples

```bash
curl https://api.knock.app/v1/bulk_operations/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/bulk_operations/{id}`

Retrieves a bulk operation (if it exists) and displays the current state of it.

<h3 id="get-bulk-operation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string(uuid)|true|The ID of the bulk operation to retrieve.|

> Example responses

> 200 Response

```json
{
  "__typename": "BulkOperation",
  "completed_at": null,
  "error_count": 0,
  "error_items": [],
  "estimated_total_rows": 1000,
  "failed_at": null,
  "id": "123e4567-e89b-12d3-a456-426614174000",
  "inserted_at": "2024-05-22T12:00:00Z",
  "name": "Bulk operation name",
  "processed_rows": 0,
  "progress_path": "https://api.switchboard.com/v1/bulk_operations/123e4567-e89b-12d3-a456-426614174000",
  "started_at": null,
  "status": "processing",
  "success_count": 0,
  "updated_at": "2024-05-22T12:00:00Z"
}
```

<h3 id="get-bulk-operation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[BulkOperation](#schemabulkoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

<h1 id="knock-api-channel-data">Channel data</h1>

Channel data is data that is specific to a recipient and a channel, like push tokens, or one or more Slack connections.

## Get channel data

<a id="opIdgetUserChannelData"></a>

> Code samples

```bash
curl https://api.knock.app/v1/users/string/channel_data/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/users/{user_id}/channel_data/{channel_id}`

Retrieves the channel data for a specific user and channel ID.

<h3 id="get-channel-data-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|user_id|path|string|true|The unique identifier of the user.|
|channel_id|path|string(uuid)|true|The unique identifier for the channel.|

> Example responses

> 200 Response

```json
{
  "__typename": "ChannelData",
  "channel_id": "123e4567-e89b-12d3-a456-426614174000",
  "data": {
    "devices": [
      {
        "locale": null,
        "timezone": null,
        "token": "device_1"
      }
    ],
    "tokens": [
      "push_token_1"
    ]
  }
}
```

<h3 id="get-channel-data-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[ChannelData](#schemachanneldata)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

## Set channel data

<a id="opIdsetUserChannelData"></a>

> Code samples

```bash
curl https://api.knock.app/v1/users/string/channel_data/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "data": {
      "tokens": [
        "push_token_1"
      ]
    }
  }'
```

`PUT /v1/users/{user_id}/channel_data/{channel_id}`

Updates or creates channel data for a specific user and channel ID. If no user exists in the current environment for the given `user_id`, Knock will create the user entry as part of this request.

> Body parameter

```json
{
  "data": {
    "tokens": [
      "push_token_1"
    ]
  }
}
```

<h3 id="set-channel-data-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|user_id|path|string|true|The unique identifier of the user.|
|channel_id|path|string(uuid)|true|The unique identifier for the channel.|
|body|body|[ChannelDataRequest](#schemachanneldatarequest)|true|Params|
|» data|body|object|true|Channel data for a given channel type.|
|» » *oneOf*|body|[PushChannelDataTokensOnly](#schemapushchanneldatatokensonly)|false|Push channel data.|
|» » *oneOf*|body|[PushChannelDataDevicesOnly](#schemapushchanneldatadevicesonly)|false|Push channel data.|
|» » *oneOf*|body|[AWSSNSPushChannelDataTargetARNsOnly](#schemaawssnspushchanneldatatargetarnsonly)|false|AWS SNS push channel data.|
|» » *oneOf*|body|[AWSSNSPushChannelDataDevicesOnly](#schemaawssnspushchanneldatadevicesonly)|false|AWS SNS push channel data.|
|» » *oneOf*|body|[OneSignalChannelDataPlayerIdsOnly](#schemaonesignalchanneldataplayeridsonly)|false|OneSignal channel data.|
|» » *oneOf*|body|[SlackChannelData](#schemaslackchanneldata)|false|Slack channel data.|
|» » *oneOf*|body|[MsTeamsChannelData](#schemamsteamschanneldata)|false|Microsoft Teams channel data.|
|» » *oneOf*|body|[DiscordChannelData](#schemadiscordchanneldata)|false|Discord channel data.|

> Example responses

> 200 Response

```json
{
  "__typename": "ChannelData",
  "channel_id": "123e4567-e89b-12d3-a456-426614174000",
  "data": {
    "devices": [
      {
        "locale": null,
        "timezone": null,
        "token": "device_1"
      }
    ],
    "tokens": [
      "push_token_1"
    ]
  }
}
```

<h3 id="set-channel-data-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[ChannelData](#schemachanneldata)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

## Unset channel data

<a id="opIdunsetUserChannelData"></a>

> Code samples

```bash
curl https://api.knock.app/v1/users/string/channel_data/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /v1/users/{user_id}/channel_data/{channel_id}`

Deletes channel data for a specific user and channel ID.

<h3 id="unset-channel-data-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|user_id|path|string|true|The unique identifier of the user.|
|channel_id|path|string(uuid)|true|The unique identifier for the channel.|

<h3 id="unset-channel-data-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

## Get channel data

<a id="opIdgetObjectChannelData"></a>

> Code samples

```bash
curl https://api.knock.app/v1/objects/string/string/channel_data/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/objects/{collection}/{object_id}/channel_data/{channel_id}`

Returns the channel data for the specified object and channel.

<h3 id="get-channel-data-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|object_id|path|string|true|Unique identifier for the object.|
|collection|path|string|true|The collection this object belongs to.|
|channel_id|path|string(uuid)|true|The unique identifier for the channel.|

> Example responses

> 200 Response

```json
{
  "__typename": "ChannelData",
  "channel_id": "123e4567-e89b-12d3-a456-426614174000",
  "data": {
    "devices": [
      {
        "locale": null,
        "timezone": null,
        "token": "device_1"
      }
    ],
    "tokens": [
      "push_token_1"
    ]
  }
}
```

<h3 id="get-channel-data-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[ChannelData](#schemachanneldata)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

## Set channel data

<a id="opIdsetObjectChannelData"></a>

> Code samples

```bash
curl https://api.knock.app/v1/objects/string/string/channel_data/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "data": {
      "tokens": [
        "push_token_1"
      ]
    }
  }'
```

`PUT /v1/objects/{collection}/{object_id}/channel_data/{channel_id}`

Sets the channel data for the specified object and channel. If no object exists in the current environment for the given `collection` and `object_id`, Knock will create the object as part of this request.

> Body parameter

```json
{
  "data": {
    "tokens": [
      "push_token_1"
    ]
  }
}
```

<h3 id="set-channel-data-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|object_id|path|string|true|Unique identifier for the object.|
|collection|path|string|true|The collection this object belongs to.|
|channel_id|path|string(uuid)|true|The unique identifier for the channel.|
|body|body|[ChannelDataRequest](#schemachanneldatarequest)|true|Params|
|» data|body|object|true|Channel data for a given channel type.|
|» » *oneOf*|body|[PushChannelDataTokensOnly](#schemapushchanneldatatokensonly)|false|Push channel data.|
|» » *oneOf*|body|[PushChannelDataDevicesOnly](#schemapushchanneldatadevicesonly)|false|Push channel data.|
|» » *oneOf*|body|[AWSSNSPushChannelDataTargetARNsOnly](#schemaawssnspushchanneldatatargetarnsonly)|false|AWS SNS push channel data.|
|» » *oneOf*|body|[AWSSNSPushChannelDataDevicesOnly](#schemaawssnspushchanneldatadevicesonly)|false|AWS SNS push channel data.|
|» » *oneOf*|body|[OneSignalChannelDataPlayerIdsOnly](#schemaonesignalchanneldataplayeridsonly)|false|OneSignal channel data.|
|» » *oneOf*|body|[SlackChannelData](#schemaslackchanneldata)|false|Slack channel data.|
|» » *oneOf*|body|[MsTeamsChannelData](#schemamsteamschanneldata)|false|Microsoft Teams channel data.|
|» » *oneOf*|body|[DiscordChannelData](#schemadiscordchanneldata)|false|Discord channel data.|

> Example responses

> 200 Response

```json
{
  "__typename": "ChannelData",
  "channel_id": "123e4567-e89b-12d3-a456-426614174000",
  "data": {
    "devices": [
      {
        "locale": null,
        "timezone": null,
        "token": "device_1"
      }
    ],
    "tokens": [
      "push_token_1"
    ]
  }
}
```

<h3 id="set-channel-data-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[ChannelData](#schemachanneldata)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

## Unset channel data

<a id="opIdunsetObjectChannelData"></a>

> Code samples

```bash
curl https://api.knock.app/v1/objects/string/string/channel_data/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /v1/objects/{collection}/{object_id}/channel_data/{channel_id}`

Unsets the channel data for the specified object and channel.

<h3 id="unset-channel-data-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|object_id|path|string|true|Unique identifier for the object.|
|collection|path|string|true|The collection this object belongs to.|
|channel_id|path|string(uuid)|true|The unique identifier for the channel.|

<h3 id="unset-channel-data-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

<h1 id="knock-api-messages">Messages</h1>

A message sent to a single recipient on a channel.

## List messages

<a id="opIdlistMessages"></a>

> Code samples

```bash
curl https://api.knock.app/v1/messages \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/messages`

Returns a paginated list of messages for the current environment.

<h3 id="list-messages-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|after|query|string|false|The cursor to fetch entries after.|
|before|query|string|false|The cursor to fetch entries before.|
|page_size|query|integer|false|The number of items per page (defaults to 50).|
|tenant|query|string|false|Limits the results to items with the corresponding tenant.|
|channel_id|query|string|false|Limits the results to items with the corresponding channel ID.|
|status|query|[string]|false|Limits the results to messages with the given delivery status.|
|engagement_status|query|[string]|false|Limits the results to messages with the given engagement status.|
|message_ids|query|[string]|false|Limits the results to only the message IDs given (max 50). Note: when using this option, the results will be subject to any other filters applied to the query.|
|workflow_categories|query|[string]|false|Limits the results to messages related to any of the provided categories.|
|source|query|string|false|Limits the results to messages triggered by the given workflow key.|
|workflow_run_id|query|string(uuid)|false|Limits the results to messages associated with the top-level workflow run ID returned by the workflow trigger request.|
|workflow_recipient_run_id|query|string(uuid)|false|Limits the results to messages for a specific recipient's workflow run.|
|trigger_data|query|string|false|Limits the results to only messages that were generated with the given data. See [trigger data filtering](/api-reference/overview/trigger-data-filtering) for more information.|
|inserted_at.gt|query|string|false|Limits the results to items inserted after the given date.|
|inserted_at.gte|query|string|false|Limits the results to items inserted after or on the given date.|
|inserted_at.lt|query|string|false|Limits the results to items inserted before the given date.|
|inserted_at.lte|query|string|false|Limits the results to items inserted before or on the given date.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|status|queued|
|status|sent|
|status|delivered|
|status|delivery_attempted|
|status|undelivered|
|status|not_sent|
|status|bounced|
|engagement_status|seen|
|engagement_status|unseen|
|engagement_status|read|
|engagement_status|unread|
|engagement_status|archived|
|engagement_status|unarchived|
|engagement_status|link_clicked|
|engagement_status|interacted|

> Example responses

> 200 Response

```json
{
  "items": [
    {
      "__typename": "Message",
      "actors": [
        "mr_arnold",
        "mr_muldoon"
      ],
      "archived_at": null,
      "channel_id": "123e4567-e89b-12d3-a456-426614174000",
      "clicked_at": null,
      "data": {
        "affected_areas": [
          "visitor_center",
          "raptor_pen",
          "trex_paddock"
        ],
        "attraction_id": "paddock_rex_01",
        "evacuation_protocol": "active",
        "message": "Life finds a way",
        "severity": "critical",
        "system_status": "fences_failing"
      },
      "engagement_statuses": [
        "read",
        "seen"
      ],
      "id": "2w3YUpTTOxuDvZFji8OMsKrG176",
      "inserted_at": "1993-06-11T21:15:00Z",
      "interacted_at": null,
      "link_clicked_at": null,
      "metadata": {
        "external_id": "123e4567-e89b-12d3-a456-426614174000"
      },
      "read_at": "1993-06-11T21:30:00Z",
      "recipient": "dr_grant",
      "recipient_snapshot": {
        "email": "user@example.com",
        "name": "John Doe"
      },
      "scheduled_at": null,
      "seen_at": "1993-06-11T21:29:45Z",
      "source": {
        "__typename": "NotificationSource",
        "branch_path": [
          {
            "branch_id": "123e4567-e89b-12d3-a456-426614174000",
            "step_ref": "experiment",
            "step_type": "random_cohort"
          }
        ],
        "categories": [
          "security",
          "emergency"
        ],
        "key": "security-breach-alert",
        "step_ref": "alert_step_1",
        "version_id": "123e4567-e89b-12d3-a456-426614174000",
        "workflow_recipient_run_id": "def01234-a56b-78c9-d012-345678901bcd",
        "workflow_run_id": "789e0123-f45a-67b8-c901-234567890abc"
      },
      "status": "sent",
      "tenant": "ingen_isla_nublar",
      "updated_at": "1993-06-11T21:30:05Z",
      "workflow": "security-breach-alert"
    }
  ],
  "page_info": {
    "__typename": "PageInfo",
    "after": null,
    "before": null,
    "page_size": 25
  }
}
```

<h3 id="list-messages-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[ListMessagesResponse](#schemalistmessagesresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

## Mark message as interacted

<a id="opIdmarkMessageInteracted"></a>

> Code samples

```bash
curl https://api.knock.app/v1/messages/1jNaXzB2RZX3LY8wVQnfCKyPnv7/interacted \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "metadata": {
      "key": "value"
    }
  }'
```

`PUT /v1/messages/{message_id}/interacted`

Marks a message as `interacted` with by the user. This can include any user action on the message, with optional metadata about the specific interaction. Cannot include more than 5 key-value pairs, must not contain nested data. Read more about message engagement statuses [here](/send-notifications/message-statuses#engagement-status).

> Body parameter

```json
{
  "metadata": {
    "key": "value"
  }
}
```

<h3 id="mark-message-as-interacted-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|message_id|path|string|true|The unique identifier for the message.|
|body|body|[MessageInteractedRequest](#schemamessageinteractedrequest)|false|Params|
|» metadata|body|object|false|Metadata about the interaction.|

> Example responses

> 200 Response

```json
{
  "__typename": "Message",
  "actors": [
    "user_123"
  ],
  "archived_at": null,
  "channel_id": "123e4567-e89b-12d3-a456-426614174000",
  "clicked_at": null,
  "data": {
    "foo": "bar"
  },
  "engagement_statuses": [
    "seen",
    "interacted"
  ],
  "id": "1jNaXzB2RZX3LY8wVQnfCKyPnv7",
  "inserted_at": "2021-01-01T00:00:00Z",
  "interacted_at": "2025-01-01T00:03:00Z",
  "link_clicked_at": null,
  "metadata": {
    "external_id": "123e4567-e89b-12d3-a456-426614174000"
  },
  "read_at": null,
  "recipient": "user_123",
  "scheduled_at": null,
  "seen_at": "2025-01-01T00:01:00Z",
  "source": {
    "__typename": "NotificationSource",
    "categories": [
      "collaboration"
    ],
    "key": "comment-created",
    "step_ref": "email_step_1",
    "version_id": "123e4567-e89b-12d3-a456-426614174000"
  },
  "status": "sent",
  "tenant": "tenant_123",
  "updated_at": "2021-01-01T00:00:00Z",
  "workflow": "comment-created"
}
```

<h3 id="mark-message-as-interacted-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="mark-message-as-interacted-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|__typename|string|true|none|The typename of the schema.|
|actors|[[RecipientReference](#schemarecipientreference)]|false|none|One or more actors that are associated with this message. Note: this is a list that can contain up to 10 actors if the message is produced from a [batch](/designing-workflows/batch-function).|
|archived_at|string(date-time) \| null|false|none|Timestamp when the message was archived.|
|channel|object|false|none|A configured channel, which is a way to route messages to a provider.|
|» created_at|string(date-time)|true|none|The timestamp of when the channel was created.|
|» id|string|true|none|The unique identifier for the channel.|
|» key|string \| null|false|none|Unique identifier for the channel within a project (immutable once created).|
|» name|string \| null|false|none|The human-readable name of the channel.|
|» provider|string|true|none|The ID of the provider that this channel uses to deliver messages.|
|» type|string|true|none|The type of channel, determining what kind of messages it can send.|
|» updated_at|string(date-time)|true|none|The timestamp of when the channel was last updated.|
|channel_id|string(uuid)|true|none|**Deprecated.** Deprecated, use channel.id instead.|
|clicked_at|string(date-time) \| null|false|none|Timestamp when the message was clicked.|
|data|object \| null|false|none|Data associated with the message’s workflow run. Includes the workflow trigger request’s `data` payload merged with any additional data returned by a [fetch function](/designing-workflows/fetch-function). For messages produced after a [batch step](/designing-workflows/batch-function), includes the payload `data` from the most-recent trigger request (the final `activity` in the batch).|
|engagement_statuses|[string]|true|none|A list of engagement statuses.|
|id|string|true|none|The unique identifier for the message.|
|inserted_at|string(date-time)|true|none|Timestamp when the resource was created.|
|interacted_at|string(date-time) \| null|false|none|Timestamp when the message was interacted with.|
|link_clicked_at|string(date-time) \| null|false|none|Timestamp when a link in the message was clicked.|
|metadata|object \| null|false|none|The metadata associated with the message.|
|read_at|string(date-time) \| null|false|none|Timestamp when the message was read.|
|recipient|[RecipientReference](#schemarecipientreference)|true|none|A reference to a recipient, either a user identifier (string) or an object reference (ID, collection).|
|recipient_snapshot|object \| null|false|none|The destination the message was delivered to, captured at send time. Email channels carry `email`/`name`; chat channels carry the destination `channel_id` or `user_id`, or `via_incoming_webhook`. Null when no snapshot was captured.|
|» channel_id|string \| null|false|none|The chat channel the message was delivered to (chat channels)|
|» email|string \| null|false|none|The email address the message was delivered to (email channels)|
|» name|string \| null|false|none|The recipient name at send time (email channels)|
|» user_id|string \| null|false|none|The chat user the message was direct-messaged to (chat channels)|
|» via_incoming_webhook|boolean \| null|false|none|Whether the chat message was delivered via an incoming webhook|
|scheduled_at|string(date-time) \| null|false|none|Timestamp when the message was scheduled to be sent.|
|seen_at|string(date-time) \| null|false|none|Timestamp when the message was seen.|
|source|object|true|none|The workflow or guide that triggered the message.|
|» __typename|string|true|none|none|
|» branch_path|[object]|false|none|The branch ancestry of the step that generated the message, outermost first. Each segment is the branching step and the branch taken. Omitted when the step is not nested under a branch.|
|» » branch_id|string(uuid)|true|none|The ID of the branch taken.|
|» » step_ref|string|true|none|The reference of the branching step.|
|» » step_type|string|true|none|The type of the branching step.|
|» categories|[string]|true|none|The categories associated with the message.|
|» key|string|true|none|The key of the workflow or guide that triggered the message.|
|» step_ref|string \| null|false|none|The step reference for the step in the workflow that generated the message.|
|» type|string|false|none|Whether this message was generated from a workflow, broadcast, or guide.|
|» version_id|string(uuid)|true|none|The ID of the version of the workflow or guide that triggered the message.|
|» workflow_recipient_run_id|string(uuid) \| null|false|none|The unique identifier for the workflow recipient run that generated this message. Only present for workflow/broadcast messages.|
|» workflow_run_id|string(uuid) \| null|false|none|The unique identifier for the workflow run that generated this message. Only present for workflow/broadcast messages.|
|status|string|true|none|The message delivery status.|
|tenant|string \| null|false|none|The ID of the `tenant` associated with the message. Only present when a `tenant` is provided on a workflow trigger request.|
|updated_at|string(date-time)|true|none|The timestamp when the resource was last updated.|
|workflow|string \| null|false|none|**Deprecated.** The key of the workflow that generated the message.|

#### Enumerated Values

|Property|Value|
|---|---|
|» type|email|
|» type|in_app|
|» type|in_app_feed|
|» type|in_app_guide|
|» type|sms|
|» type|push|
|» type|chat|
|» type|http|
|engagement_statuses|seen|
|engagement_statuses|read|
|engagement_statuses|interacted|
|engagement_statuses|link_clicked|
|engagement_statuses|archived|
|» type|broadcast|
|» type|workflow|
|» type|guide|
|status|queued|
|status|sent|
|status|delivered|
|status|delivery_attempted|
|status|undelivered|
|status|not_sent|
|status|bounced|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

## List events

<a id="opIdlistMessageEvents"></a>

> Code samples

```bash
curl https://api.knock.app/v1/messages/string/events \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/messages/{message_id}/events`

Returns a paginated list of events for the specified message.

<h3 id="list-events-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|message_id|path|string|true|The ID of the message to fetch events for.|
|after|query|string|false|The cursor to fetch entries after.|
|before|query|string|false|The cursor to fetch entries before.|
|page_size|query|integer|false|The number of items per page (defaults to 50).|

> Example responses

> 200 Response

```json
{
  "items": [
    {
      "__typename": "MessageEvent",
      "data": null,
      "id": "2FVHPWxRqNuXQ9krvNP5A6Z4qXe",
      "inserted_at": "2021-01-01T00:00:00Z",
      "recipient": "user_123",
      "type": "message.sent"
    }
  ],
  "page_info": {
    "__typename": "PageInfo",
    "after": null,
    "before": null,
    "page_size": 25
  }
}
```

<h3 id="list-events-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[ListMessageEventsResponse](#schemalistmessageeventsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

## List user messages

<a id="opIdlistMessagesForUser"></a>

> Code samples

```bash
curl https://api.knock.app/v1/users/user-123/messages \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/users/{user_id}/messages`

Returns a paginated list of messages for a specific user. Messages are sorted with the most recent ones appearing first. Messages outside the account's retention window will not be included in the results.

<h3 id="list-user-messages-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|after|query|string|false|The cursor to fetch entries after.|
|before|query|string|false|The cursor to fetch entries before.|
|page_size|query|integer|false|The number of items per page (defaults to 50).|
|tenant|query|string|false|Limits the results to items with the corresponding tenant.|
|channel_id|query|string|false|Limits the results to items with the corresponding channel ID.|
|status|query|[string]|false|Limits the results to messages with the given delivery status.|
|engagement_status|query|[string]|false|Limits the results to messages with the given engagement status.|
|message_ids|query|[string]|false|Limits the results to only the message IDs given (max 50). Note: when using this option, the results will be subject to any other filters applied to the query.|
|workflow_categories|query|[string]|false|Limits the results to messages related to any of the provided categories.|
|source|query|string|false|Limits the results to messages triggered by the given workflow key.|
|workflow_run_id|query|string(uuid)|false|Limits the results to messages associated with the top-level workflow run ID returned by the workflow trigger request.|
|workflow_recipient_run_id|query|string(uuid)|false|Limits the results to messages for a specific recipient's workflow run.|
|trigger_data|query|string|false|Limits the results to only messages that were generated with the given data. See [trigger data filtering](/api-reference/overview/trigger-data-filtering) for more information.|
|inserted_at.gt|query|string|false|Limits the results to items inserted after the given date.|
|inserted_at.gte|query|string|false|Limits the results to items inserted after or on the given date.|
|inserted_at.lt|query|string|false|Limits the results to items inserted before the given date.|
|inserted_at.lte|query|string|false|Limits the results to items inserted before or on the given date.|
|user_id|path|string|true|The user ID to list messages for.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|status|queued|
|status|sent|
|status|delivered|
|status|delivery_attempted|
|status|undelivered|
|status|not_sent|
|status|bounced|
|engagement_status|seen|
|engagement_status|unseen|
|engagement_status|read|
|engagement_status|unread|
|engagement_status|archived|
|engagement_status|unarchived|
|engagement_status|link_clicked|
|engagement_status|interacted|

> Example responses

> 200 Response

```json
{
  "items": [
    {
      "__typename": "Message",
      "actors": [
        "mr_arnold",
        "mr_muldoon"
      ],
      "archived_at": null,
      "channel_id": "123e4567-e89b-12d3-a456-426614174000",
      "clicked_at": null,
      "data": {
        "affected_areas": [
          "visitor_center",
          "raptor_pen",
          "trex_paddock"
        ],
        "attraction_id": "paddock_rex_01",
        "evacuation_protocol": "active",
        "message": "Life finds a way",
        "severity": "critical",
        "system_status": "fences_failing"
      },
      "engagement_statuses": [
        "read",
        "seen"
      ],
      "id": "2w3YUpTTOxuDvZFji8OMsKrG176",
      "inserted_at": "1993-06-11T21:15:00Z",
      "interacted_at": null,
      "link_clicked_at": null,
      "metadata": {
        "external_id": "123e4567-e89b-12d3-a456-426614174000"
      },
      "read_at": "1993-06-11T21:30:00Z",
      "recipient": "dr_grant",
      "recipient_snapshot": {
        "email": "user@example.com",
        "name": "John Doe"
      },
      "scheduled_at": null,
      "seen_at": "1993-06-11T21:29:45Z",
      "source": {
        "__typename": "NotificationSource",
        "branch_path": [
          {
            "branch_id": "123e4567-e89b-12d3-a456-426614174000",
            "step_ref": "experiment",
            "step_type": "random_cohort"
          }
        ],
        "categories": [
          "security",
          "emergency"
        ],
        "key": "security-breach-alert",
        "step_ref": "alert_step_1",
        "version_id": "123e4567-e89b-12d3-a456-426614174000",
        "workflow_recipient_run_id": "def01234-a56b-78c9-d012-345678901bcd",
        "workflow_run_id": "789e0123-f45a-67b8-c901-234567890abc"
      },
      "status": "sent",
      "tenant": "ingen_isla_nublar",
      "updated_at": "1993-06-11T21:30:05Z",
      "workflow": "security-breach-alert"
    }
  ],
  "page_info": {
    "__typename": "PageInfo",
    "after": null,
    "before": null,
    "page_size": 25
  }
}
```

<h3 id="list-user-messages-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[ListMessagesResponse](#schemalistmessagesresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

## Get message content

<a id="opIdgetMessageContents"></a>

> Code samples

```bash
curl https://api.knock.app/v1/messages/string/content \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/messages/{message_id}/content`

Returns the fully rendered contents of a message, where the response depends on which channel the message was sent through.

<h3 id="get-message-content-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|message_id|path|string|true|The ID of the message to fetch contents of.|

> Example responses

> 200 Response

```json
{
  "__typename": "MessageContent",
  "data": {
    "__typename": "MessageSmsContent",
    "body": "URGENT: Power failure detected in perimeter fencing. Backup generators failed to engage. Technical team dispatched. Maintain lockdown protocols.",
    "to": "+15553982647"
  },
  "inserted_at": "1993-06-11T20:30:00Z",
  "message_id": "2w3YUpTTOxuDvZFji8OMsKrG176"
}
```

<h3 id="get-message-content-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[MessageContents](#schemamessagecontents)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

## List activities

<a id="opIdlistMessageActivities"></a>

> Code samples

```bash
curl https://api.knock.app/v1/messages/string/activities \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/messages/{message_id}/activities`

Returns a paginated list of activities for the specified message.

<h3 id="list-activities-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|message_id|path|string|true|The ID of the message to fetch activities for.|
|trigger_data|query|string|false|The trigger data to filter activities by.|
|after|query|string|false|The cursor to fetch entries after.|
|before|query|string|false|The cursor to fetch entries before.|
|page_size|query|integer|false|The number of items per page (defaults to 50).|

> Example responses

> 200 Response

```json
{
  "items": [
    {
      "__typename": "Activity",
      "actor": null,
      "data": {
        "foo": "bar"
      },
      "id": "2FVHPWxRqNuXQ9krvNP5A6Z4qXe",
      "inserted_at": "2024-01-01T00:00:00Z",
      "recipient": {
        "__typename": "User",
        "avatar": null,
        "created_at": null,
        "email": "jane@ingen.net",
        "id": "jane",
        "name": "Jane Doe",
        "phone_number": null,
        "timezone": null,
        "updated_at": "2024-05-22T12:00:00Z"
      },
      "updated_at": "2024-01-01T00:00:00Z"
    }
  ],
  "page_info": {
    "__typename": "PageInfo",
    "after": null,
    "before": null,
    "page_size": 25
  }
}
```

<h3 id="list-activities-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[ListActivitiesResponse](#schemalistactivitiesresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

## List messages

<a id="opIdlistMessagesForObject"></a>

> Code samples

```bash
curl https://api.knock.app/v1/objects/projects/project-123/messages \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/objects/{collection}/{id}/messages`

Returns a paginated list of messages for a specific object in the given collection. Allows filtering by message status and provides various sorting options.

<h3 id="list-messages-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|after|query|string|false|The cursor to fetch entries after.|
|before|query|string|false|The cursor to fetch entries before.|
|page_size|query|integer|false|The number of items per page (defaults to 50).|
|tenant|query|string|false|Limits the results to items with the corresponding tenant.|
|channel_id|query|string|false|Limits the results to items with the corresponding channel ID.|
|status|query|[string]|false|Limits the results to messages with the given delivery status.|
|engagement_status|query|[string]|false|Limits the results to messages with the given engagement status.|
|message_ids|query|[string]|false|Limits the results to only the message IDs given (max 50). Note: when using this option, the results will be subject to any other filters applied to the query.|
|workflow_categories|query|[string]|false|Limits the results to messages related to any of the provided categories.|
|source|query|string|false|Limits the results to messages triggered by the given workflow key.|
|workflow_run_id|query|string(uuid)|false|Limits the results to messages associated with the top-level workflow run ID returned by the workflow trigger request.|
|workflow_recipient_run_id|query|string(uuid)|false|Limits the results to messages for a specific recipient's workflow run.|
|trigger_data|query|string|false|Limits the results to only messages that were generated with the given data. See [trigger data filtering](/api-reference/overview/trigger-data-filtering) for more information.|
|inserted_at.gt|query|string|false|Limits the results to items inserted after the given date.|
|inserted_at.gte|query|string|false|Limits the results to items inserted after or on the given date.|
|inserted_at.lt|query|string|false|Limits the results to items inserted before the given date.|
|inserted_at.lte|query|string|false|Limits the results to items inserted before or on the given date.|
|collection|path|string|true|The collection this object belongs to.|
|id|path|string|true|Unique identifier for the object.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|status|queued|
|status|sent|
|status|delivered|
|status|delivery_attempted|
|status|undelivered|
|status|not_sent|
|status|bounced|
|engagement_status|seen|
|engagement_status|unseen|
|engagement_status|read|
|engagement_status|unread|
|engagement_status|archived|
|engagement_status|unarchived|
|engagement_status|link_clicked|
|engagement_status|interacted|

> Example responses

> 200 Response

```json
{
  "items": [
    {
      "__typename": "Message",
      "actors": [
        "mr_arnold",
        "mr_muldoon"
      ],
      "archived_at": null,
      "channel_id": "123e4567-e89b-12d3-a456-426614174000",
      "clicked_at": null,
      "data": {
        "affected_areas": [
          "visitor_center",
          "raptor_pen",
          "trex_paddock"
        ],
        "attraction_id": "paddock_rex_01",
        "evacuation_protocol": "active",
        "message": "Life finds a way",
        "severity": "critical",
        "system_status": "fences_failing"
      },
      "engagement_statuses": [
        "read",
        "seen"
      ],
      "id": "2w3YUpTTOxuDvZFji8OMsKrG176",
      "inserted_at": "1993-06-11T21:15:00Z",
      "interacted_at": null,
      "link_clicked_at": null,
      "metadata": {
        "external_id": "123e4567-e89b-12d3-a456-426614174000"
      },
      "read_at": "1993-06-11T21:30:00Z",
      "recipient": "dr_grant",
      "recipient_snapshot": {
        "email": "user@example.com",
        "name": "John Doe"
      },
      "scheduled_at": null,
      "seen_at": "1993-06-11T21:29:45Z",
      "source": {
        "__typename": "NotificationSource",
        "branch_path": [
          {
            "branch_id": "123e4567-e89b-12d3-a456-426614174000",
            "step_ref": "experiment",
            "step_type": "random_cohort"
          }
        ],
        "categories": [
          "security",
          "emergency"
        ],
        "key": "security-breach-alert",
        "step_ref": "alert_step_1",
        "version_id": "123e4567-e89b-12d3-a456-426614174000",
        "workflow_recipient_run_id": "def01234-a56b-78c9-d012-345678901bcd",
        "workflow_run_id": "789e0123-f45a-67b8-c901-234567890abc"
      },
      "status": "sent",
      "tenant": "ingen_isla_nublar",
      "updated_at": "1993-06-11T21:30:05Z",
      "workflow": "security-breach-alert"
    }
  ],
  "page_info": {
    "__typename": "PageInfo",
    "after": null,
    "before": null,
    "page_size": 25
  }
}
```

<h3 id="list-messages-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[ListMessagesResponse](#schemalistmessagesresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

## Mark messages as archived

<a id="opIdbatchMarkMessagesAsArchived"></a>

> Code samples

```bash
curl https://api.knock.app/v1/messages/batch/archived \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "message_ids": [
      "2w3YUpTTOxuDvZFji8OMsKrG176",
      "2w3YVRbPXMIh8Zq6oBFcVDA5xes"
    ]
  }'
```

`POST /v1/messages/batch/archived`

Marks the given messages as archived. Archived messages are hidden from the default message list in the feed but can still be accessed and unarchived later.

> Body parameter

```json
{
  "message_ids": [
    "2w3YUpTTOxuDvZFji8OMsKrG176",
    "2w3YVRbPXMIh8Zq6oBFcVDA5xes"
  ]
}
```

<h3 id="mark-messages-as-archived-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[BatchMessagesStatusRequest](#schemabatchmessagesstatusrequest)|true|Params|
|» message_ids|body|[string]|true|The message IDs to update the status of.|

> Example responses

> 200 Response

```json
[
  {
    "__typename": "Message",
    "actors": [
      "user_123"
    ],
    "archived_at": "2025-01-01T00:04:00Z",
    "channel_id": "123e4567-e89b-12d3-a456-426614174000",
    "clicked_at": null,
    "data": {
      "foo": "bar"
    },
    "engagement_statuses": [
      "seen",
      "archived"
    ],
    "id": "1jNaXzB2RZX3LY8wVQnfCKyPnv7",
    "inserted_at": "2021-01-01T00:00:00Z",
    "interacted_at": null,
    "link_clicked_at": null,
    "metadata": {
      "external_id": "123e4567-e89b-12d3-a456-426614174000"
    },
    "read_at": null,
    "recipient": "user_123",
    "scheduled_at": null,
    "seen_at": "2025-01-01T00:01:00Z",
    "source": {
      "__typename": "NotificationSource",
      "categories": [
        "collaboration"
      ],
      "key": "comment-created",
      "version_id": "123e4567-e89b-12d3-a456-426614174000"
    },
    "status": "sent",
    "tenant": "tenant_123",
    "updated_at": "2021-01-01T00:00:00Z",
    "workflow": "comment-created"
  }
]
```

<h3 id="mark-messages-as-archived-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="mark-messages-as-archived-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|
|» __typename|string|true|none|The typename of the schema.|
|» actors|[[RecipientReference](#schemarecipientreference)]|false|none|One or more actors that are associated with this message. Note: this is a list that can contain up to 10 actors if the message is produced from a [batch](/designing-workflows/batch-function).|
|» archived_at|string(date-time) \| null|false|none|Timestamp when the message was archived.|
|» channel|object|false|none|A configured channel, which is a way to route messages to a provider.|
|» » created_at|string(date-time)|true|none|The timestamp of when the channel was created.|
|» » id|string|true|none|The unique identifier for the channel.|
|» » key|string \| null|false|none|Unique identifier for the channel within a project (immutable once created).|
|» » name|string \| null|false|none|The human-readable name of the channel.|
|» » provider|string|true|none|The ID of the provider that this channel uses to deliver messages.|
|» » type|string|true|none|The type of channel, determining what kind of messages it can send.|
|» » updated_at|string(date-time)|true|none|The timestamp of when the channel was last updated.|
|» channel_id|string(uuid)|true|none|**Deprecated.** Deprecated, use channel.id instead.|
|» clicked_at|string(date-time) \| null|false|none|Timestamp when the message was clicked.|
|» data|object \| null|false|none|Data associated with the message’s workflow run. Includes the workflow trigger request’s `data` payload merged with any additional data returned by a [fetch function](/designing-workflows/fetch-function). For messages produced after a [batch step](/designing-workflows/batch-function), includes the payload `data` from the most-recent trigger request (the final `activity` in the batch).|
|» engagement_statuses|[string]|true|none|A list of engagement statuses.|
|» id|string|true|none|The unique identifier for the message.|
|» inserted_at|string(date-time)|true|none|Timestamp when the resource was created.|
|» interacted_at|string(date-time) \| null|false|none|Timestamp when the message was interacted with.|
|» link_clicked_at|string(date-time) \| null|false|none|Timestamp when a link in the message was clicked.|
|» metadata|object \| null|false|none|The metadata associated with the message.|
|» read_at|string(date-time) \| null|false|none|Timestamp when the message was read.|
|» recipient|[RecipientReference](#schemarecipientreference)|true|none|A reference to a recipient, either a user identifier (string) or an object reference (ID, collection).|
|» recipient_snapshot|object \| null|false|none|The destination the message was delivered to, captured at send time. Email channels carry `email`/`name`; chat channels carry the destination `channel_id` or `user_id`, or `via_incoming_webhook`. Null when no snapshot was captured.|
|» » channel_id|string \| null|false|none|The chat channel the message was delivered to (chat channels)|
|» » email|string \| null|false|none|The email address the message was delivered to (email channels)|
|» » name|string \| null|false|none|The recipient name at send time (email channels)|
|» » user_id|string \| null|false|none|The chat user the message was direct-messaged to (chat channels)|
|» » via_incoming_webhook|boolean \| null|false|none|Whether the chat message was delivered via an incoming webhook|
|» scheduled_at|string(date-time) \| null|false|none|Timestamp when the message was scheduled to be sent.|
|» seen_at|string(date-time) \| null|false|none|Timestamp when the message was seen.|
|» source|object|true|none|The workflow or guide that triggered the message.|
|» » __typename|string|true|none|none|
|» » branch_path|[object]|false|none|The branch ancestry of the step that generated the message, outermost first. Each segment is the branching step and the branch taken. Omitted when the step is not nested under a branch.|
|» » » branch_id|string(uuid)|true|none|The ID of the branch taken.|
|» » » step_ref|string|true|none|The reference of the branching step.|
|» » » step_type|string|true|none|The type of the branching step.|
|» » categories|[string]|true|none|The categories associated with the message.|
|» » key|string|true|none|The key of the workflow or guide that triggered the message.|
|» » step_ref|string \| null|false|none|The step reference for the step in the workflow that generated the message.|
|» » type|string|false|none|Whether this message was generated from a workflow, broadcast, or guide.|
|» » version_id|string(uuid)|true|none|The ID of the version of the workflow or guide that triggered the message.|
|» » workflow_recipient_run_id|string(uuid) \| null|false|none|The unique identifier for the workflow recipient run that generated this message. Only present for workflow/broadcast messages.|
|» » workflow_run_id|string(uuid) \| null|false|none|The unique identifier for the workflow run that generated this message. Only present for workflow/broadcast messages.|
|» status|string|true|none|The message delivery status.|
|» tenant|string \| null|false|none|The ID of the `tenant` associated with the message. Only present when a `tenant` is provided on a workflow trigger request.|
|» updated_at|string(date-time)|true|none|The timestamp when the resource was last updated.|
|» workflow|string \| null|false|none|**Deprecated.** The key of the workflow that generated the message.|

#### Enumerated Values

|Property|Value|
|---|---|
|» » type|email|
|» » type|in_app|
|» » type|in_app_feed|
|» » type|in_app_guide|
|» » type|sms|
|» » type|push|
|» » type|chat|
|» » type|http|
|» engagement_statuses|seen|
|» engagement_statuses|read|
|» engagement_statuses|interacted|
|» engagement_statuses|link_clicked|
|» engagement_statuses|archived|
|» » type|broadcast|
|» » type|workflow|
|» » type|guide|
|» status|queued|
|» status|sent|
|» status|delivered|
|» status|delivery_attempted|
|» status|undelivered|
|» status|not_sent|
|» status|bounced|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

## Mark messages as unarchived

<a id="opIdbatchMarkMessagesAsUnarchived"></a>

> Code samples

```bash
curl https://api.knock.app/v1/messages/batch/unarchived \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "message_ids": [
      "2w3YUpTTOxuDvZFji8OMsKrG176",
      "2w3YVRbPXMIh8Zq6oBFcVDA5xes"
    ]
  }'
```

`POST /v1/messages/batch/unarchived`

Marks the given messages as unarchived. This reverses the `archived` state. Archived messages are hidden from the default message list in the feed but can still be accessed and unarchived later.

> Body parameter

```json
{
  "message_ids": [
    "2w3YUpTTOxuDvZFji8OMsKrG176",
    "2w3YVRbPXMIh8Zq6oBFcVDA5xes"
  ]
}
```

<h3 id="mark-messages-as-unarchived-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[BatchMessagesStatusRequest](#schemabatchmessagesstatusrequest)|true|Params|
|» message_ids|body|[string]|true|The message IDs to update the status of.|

> Example responses

> 200 Response

```json
[
  {
    "__typename": "Message",
    "actors": [
      "user_123"
    ],
    "archived_at": null,
    "channel_id": "123e4567-e89b-12d3-a456-426614174000",
    "clicked_at": null,
    "data": {
      "foo": "bar"
    },
    "engagement_statuses": [
      "seen"
    ],
    "id": "1jNaXzB2RZX3LY8wVQnfCKyPnv7",
    "inserted_at": "2021-01-01T00:00:00Z",
    "interacted_at": null,
    "link_clicked_at": null,
    "metadata": {
      "external_id": "123e4567-e89b-12d3-a456-426614174000"
    },
    "read_at": null,
    "recipient": "user_123",
    "scheduled_at": null,
    "seen_at": "2025-01-01T00:01:00Z",
    "source": {
      "__typename": "NotificationSource",
      "categories": [
        "collaboration"
      ],
      "key": "comment-created",
      "version_id": "123e4567-e89b-12d3-a456-426614174000"
    },
    "status": "sent",
    "tenant": "tenant_123",
    "updated_at": "2021-01-01T00:00:00Z",
    "workflow": "comment-created"
  }
]
```

<h3 id="mark-messages-as-unarchived-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="mark-messages-as-unarchived-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|
|» __typename|string|true|none|The typename of the schema.|
|» actors|[[RecipientReference](#schemarecipientreference)]|false|none|One or more actors that are associated with this message. Note: this is a list that can contain up to 10 actors if the message is produced from a [batch](/designing-workflows/batch-function).|
|» archived_at|string(date-time) \| null|false|none|Timestamp when the message was archived.|
|» channel|object|false|none|A configured channel, which is a way to route messages to a provider.|
|» » created_at|string(date-time)|true|none|The timestamp of when the channel was created.|
|» » id|string|true|none|The unique identifier for the channel.|
|» » key|string \| null|false|none|Unique identifier for the channel within a project (immutable once created).|
|» » name|string \| null|false|none|The human-readable name of the channel.|
|» » provider|string|true|none|The ID of the provider that this channel uses to deliver messages.|
|» » type|string|true|none|The type of channel, determining what kind of messages it can send.|
|» » updated_at|string(date-time)|true|none|The timestamp of when the channel was last updated.|
|» channel_id|string(uuid)|true|none|**Deprecated.** Deprecated, use channel.id instead.|
|» clicked_at|string(date-time) \| null|false|none|Timestamp when the message was clicked.|
|» data|object \| null|false|none|Data associated with the message’s workflow run. Includes the workflow trigger request’s `data` payload merged with any additional data returned by a [fetch function](/designing-workflows/fetch-function). For messages produced after a [batch step](/designing-workflows/batch-function), includes the payload `data` from the most-recent trigger request (the final `activity` in the batch).|
|» engagement_statuses|[string]|true|none|A list of engagement statuses.|
|» id|string|true|none|The unique identifier for the message.|
|» inserted_at|string(date-time)|true|none|Timestamp when the resource was created.|
|» interacted_at|string(date-time) \| null|false|none|Timestamp when the message was interacted with.|
|» link_clicked_at|string(date-time) \| null|false|none|Timestamp when a link in the message was clicked.|
|» metadata|object \| null|false|none|The metadata associated with the message.|
|» read_at|string(date-time) \| null|false|none|Timestamp when the message was read.|
|» recipient|[RecipientReference](#schemarecipientreference)|true|none|A reference to a recipient, either a user identifier (string) or an object reference (ID, collection).|
|» recipient_snapshot|object \| null|false|none|The destination the message was delivered to, captured at send time. Email channels carry `email`/`name`; chat channels carry the destination `channel_id` or `user_id`, or `via_incoming_webhook`. Null when no snapshot was captured.|
|» » channel_id|string \| null|false|none|The chat channel the message was delivered to (chat channels)|
|» » email|string \| null|false|none|The email address the message was delivered to (email channels)|
|» » name|string \| null|false|none|The recipient name at send time (email channels)|
|» » user_id|string \| null|false|none|The chat user the message was direct-messaged to (chat channels)|
|» » via_incoming_webhook|boolean \| null|false|none|Whether the chat message was delivered via an incoming webhook|
|» scheduled_at|string(date-time) \| null|false|none|Timestamp when the message was scheduled to be sent.|
|» seen_at|string(date-time) \| null|false|none|Timestamp when the message was seen.|
|» source|object|true|none|The workflow or guide that triggered the message.|
|» » __typename|string|true|none|none|
|» » branch_path|[object]|false|none|The branch ancestry of the step that generated the message, outermost first. Each segment is the branching step and the branch taken. Omitted when the step is not nested under a branch.|
|» » » branch_id|string(uuid)|true|none|The ID of the branch taken.|
|» » » step_ref|string|true|none|The reference of the branching step.|
|» » » step_type|string|true|none|The type of the branching step.|
|» » categories|[string]|true|none|The categories associated with the message.|
|» » key|string|true|none|The key of the workflow or guide that triggered the message.|
|» » step_ref|string \| null|false|none|The step reference for the step in the workflow that generated the message.|
|» » type|string|false|none|Whether this message was generated from a workflow, broadcast, or guide.|
|» » version_id|string(uuid)|true|none|The ID of the version of the workflow or guide that triggered the message.|
|» » workflow_recipient_run_id|string(uuid) \| null|false|none|The unique identifier for the workflow recipient run that generated this message. Only present for workflow/broadcast messages.|
|» » workflow_run_id|string(uuid) \| null|false|none|The unique identifier for the workflow run that generated this message. Only present for workflow/broadcast messages.|
|» status|string|true|none|The message delivery status.|
|» tenant|string \| null|false|none|The ID of the `tenant` associated with the message. Only present when a `tenant` is provided on a workflow trigger request.|
|» updated_at|string(date-time)|true|none|The timestamp when the resource was last updated.|
|» workflow|string \| null|false|none|**Deprecated.** The key of the workflow that generated the message.|

#### Enumerated Values

|Property|Value|
|---|---|
|» » type|email|
|» » type|in_app|
|» » type|in_app_feed|
|» » type|in_app_guide|
|» » type|sms|
|» » type|push|
|» » type|chat|
|» » type|http|
|» engagement_statuses|seen|
|» engagement_statuses|read|
|» engagement_statuses|interacted|
|» engagement_statuses|link_clicked|
|» engagement_statuses|archived|
|» » type|broadcast|
|» » type|workflow|
|» » type|guide|
|» status|queued|
|» status|sent|
|» status|delivered|
|» status|delivery_attempted|
|» status|undelivered|
|» status|not_sent|
|» status|bounced|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

## Mark message as seen

<a id="opIdmarkMessageSeen"></a>

> Code samples

```bash
curl https://api.knock.app/v1/messages/1jNaXzB2RZX3LY8wVQnfCKyPnv7/seen \
  -X PUT \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`PUT /v1/messages/{message_id}/seen`

Marks a message as `seen`. This indicates that the user has viewed the message in their feed or inbox. Read more about message engagement statuses [here](/send-notifications/message-statuses#engagement-status).

<h3 id="mark-message-as-seen-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|message_id|path|string|true|The unique identifier for the message.|

> Example responses

> 200 Response

```json
{
  "__typename": "Message",
  "actors": [
    "user_123"
  ],
  "archived_at": null,
  "channel_id": "123e4567-e89b-12d3-a456-426614174000",
  "clicked_at": null,
  "data": {
    "foo": "bar"
  },
  "engagement_statuses": [
    "seen"
  ],
  "id": "1jNaXzB2RZX3LY8wVQnfCKyPnv7",
  "inserted_at": "2021-01-01T00:00:00Z",
  "interacted_at": null,
  "link_clicked_at": null,
  "metadata": {
    "external_id": "123e4567-e89b-12d3-a456-426614174000"
  },
  "read_at": null,
  "recipient": "user_123",
  "scheduled_at": null,
  "seen_at": "2025-01-01T00:01:00Z",
  "source": {
    "__typename": "NotificationSource",
    "categories": [
      "collaboration"
    ],
    "key": "comment-created",
    "step_ref": "email_step_1",
    "version_id": "123e4567-e89b-12d3-a456-426614174000"
  },
  "status": "sent",
  "tenant": "tenant_123",
  "updated_at": "2021-01-01T00:00:00Z",
  "workflow": "comment-created"
}
```

<h3 id="mark-message-as-seen-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="mark-message-as-seen-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|__typename|string|true|none|The typename of the schema.|
|actors|[[RecipientReference](#schemarecipientreference)]|false|none|One or more actors that are associated with this message. Note: this is a list that can contain up to 10 actors if the message is produced from a [batch](/designing-workflows/batch-function).|
|archived_at|string(date-time) \| null|false|none|Timestamp when the message was archived.|
|channel|object|false|none|A configured channel, which is a way to route messages to a provider.|
|» created_at|string(date-time)|true|none|The timestamp of when the channel was created.|
|» id|string|true|none|The unique identifier for the channel.|
|» key|string \| null|false|none|Unique identifier for the channel within a project (immutable once created).|
|» name|string \| null|false|none|The human-readable name of the channel.|
|» provider|string|true|none|The ID of the provider that this channel uses to deliver messages.|
|» type|string|true|none|The type of channel, determining what kind of messages it can send.|
|» updated_at|string(date-time)|true|none|The timestamp of when the channel was last updated.|
|channel_id|string(uuid)|true|none|**Deprecated.** Deprecated, use channel.id instead.|
|clicked_at|string(date-time) \| null|false|none|Timestamp when the message was clicked.|
|data|object \| null|false|none|Data associated with the message’s workflow run. Includes the workflow trigger request’s `data` payload merged with any additional data returned by a [fetch function](/designing-workflows/fetch-function). For messages produced after a [batch step](/designing-workflows/batch-function), includes the payload `data` from the most-recent trigger request (the final `activity` in the batch).|
|engagement_statuses|[string]|true|none|A list of engagement statuses.|
|id|string|true|none|The unique identifier for the message.|
|inserted_at|string(date-time)|true|none|Timestamp when the resource was created.|
|interacted_at|string(date-time) \| null|false|none|Timestamp when the message was interacted with.|
|link_clicked_at|string(date-time) \| null|false|none|Timestamp when a link in the message was clicked.|
|metadata|object \| null|false|none|The metadata associated with the message.|
|read_at|string(date-time) \| null|false|none|Timestamp when the message was read.|
|recipient|[RecipientReference](#schemarecipientreference)|true|none|A reference to a recipient, either a user identifier (string) or an object reference (ID, collection).|
|recipient_snapshot|object \| null|false|none|The destination the message was delivered to, captured at send time. Email channels carry `email`/`name`; chat channels carry the destination `channel_id` or `user_id`, or `via_incoming_webhook`. Null when no snapshot was captured.|
|» channel_id|string \| null|false|none|The chat channel the message was delivered to (chat channels)|
|» email|string \| null|false|none|The email address the message was delivered to (email channels)|
|» name|string \| null|false|none|The recipient name at send time (email channels)|
|» user_id|string \| null|false|none|The chat user the message was direct-messaged to (chat channels)|
|» via_incoming_webhook|boolean \| null|false|none|Whether the chat message was delivered via an incoming webhook|
|scheduled_at|string(date-time) \| null|false|none|Timestamp when the message was scheduled to be sent.|
|seen_at|string(date-time) \| null|false|none|Timestamp when the message was seen.|
|source|object|true|none|The workflow or guide that triggered the message.|
|» __typename|string|true|none|none|
|» branch_path|[object]|false|none|The branch ancestry of the step that generated the message, outermost first. Each segment is the branching step and the branch taken. Omitted when the step is not nested under a branch.|
|» » branch_id|string(uuid)|true|none|The ID of the branch taken.|
|» » step_ref|string|true|none|The reference of the branching step.|
|» » step_type|string|true|none|The type of the branching step.|
|» categories|[string]|true|none|The categories associated with the message.|
|» key|string|true|none|The key of the workflow or guide that triggered the message.|
|» step_ref|string \| null|false|none|The step reference for the step in the workflow that generated the message.|
|» type|string|false|none|Whether this message was generated from a workflow, broadcast, or guide.|
|» version_id|string(uuid)|true|none|The ID of the version of the workflow or guide that triggered the message.|
|» workflow_recipient_run_id|string(uuid) \| null|false|none|The unique identifier for the workflow recipient run that generated this message. Only present for workflow/broadcast messages.|
|» workflow_run_id|string(uuid) \| null|false|none|The unique identifier for the workflow run that generated this message. Only present for workflow/broadcast messages.|
|status|string|true|none|The message delivery status.|
|tenant|string \| null|false|none|The ID of the `tenant` associated with the message. Only present when a `tenant` is provided on a workflow trigger request.|
|updated_at|string(date-time)|true|none|The timestamp when the resource was last updated.|
|workflow|string \| null|false|none|**Deprecated.** The key of the workflow that generated the message.|

#### Enumerated Values

|Property|Value|
|---|---|
|» type|email|
|» type|in_app|
|» type|in_app_feed|
|» type|in_app_guide|
|» type|sms|
|» type|push|
|» type|chat|
|» type|http|
|engagement_statuses|seen|
|engagement_statuses|read|
|engagement_statuses|interacted|
|engagement_statuses|link_clicked|
|engagement_statuses|archived|
|» type|broadcast|
|» type|workflow|
|» type|guide|
|status|queued|
|status|sent|
|status|delivered|
|status|delivery_attempted|
|status|undelivered|
|status|not_sent|
|status|bounced|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

## Mark message as unseen

<a id="opIdmarkMessageUnseen (2)"></a>

> Code samples

```bash
curl https://api.knock.app/v1/messages/1jNaXzB2RZX3LY8wVQnfCKyPnv7/seen \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /v1/messages/{message_id}/seen`

Marks a message as `unseen`. This reverses the `seen` state. Read more about message engagement statuses [here](/send-notifications/message-statuses#engagement-status).

<h3 id="mark-message-as-unseen-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|message_id|path|string|true|The unique identifier for the message.|

> Example responses

> 200 Response

```json
{
  "__typename": "Message",
  "actors": [
    "user_123"
  ],
  "archived_at": null,
  "channel_id": "123e4567-e89b-12d3-a456-426614174000",
  "clicked_at": null,
  "data": {
    "foo": "bar"
  },
  "engagement_statuses": [],
  "id": "1jNaXzB2RZX3LY8wVQnfCKyPnv7",
  "inserted_at": "2021-01-01T00:00:00Z",
  "interacted_at": null,
  "link_clicked_at": null,
  "metadata": {
    "external_id": "123e4567-e89b-12d3-a456-426614174000"
  },
  "read_at": null,
  "recipient": "user_123",
  "scheduled_at": null,
  "seen_at": null,
  "source": {
    "__typename": "NotificationSource",
    "categories": [
      "collaboration"
    ],
    "key": "comment-created",
    "step_ref": "email_step_1",
    "version_id": "123e4567-e89b-12d3-a456-426614174000"
  },
  "status": "sent",
  "tenant": "tenant_123",
  "updated_at": "2021-01-01T00:00:00Z",
  "workflow": "comment-created"
}
```

<h3 id="mark-message-as-unseen-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="mark-message-as-unseen-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|__typename|string|true|none|The typename of the schema.|
|actors|[[RecipientReference](#schemarecipientreference)]|false|none|One or more actors that are associated with this message. Note: this is a list that can contain up to 10 actors if the message is produced from a [batch](/designing-workflows/batch-function).|
|archived_at|string(date-time) \| null|false|none|Timestamp when the message was archived.|
|channel|object|false|none|A configured channel, which is a way to route messages to a provider.|
|» created_at|string(date-time)|true|none|The timestamp of when the channel was created.|
|» id|string|true|none|The unique identifier for the channel.|
|» key|string \| null|false|none|Unique identifier for the channel within a project (immutable once created).|
|» name|string \| null|false|none|The human-readable name of the channel.|
|» provider|string|true|none|The ID of the provider that this channel uses to deliver messages.|
|» type|string|true|none|The type of channel, determining what kind of messages it can send.|
|» updated_at|string(date-time)|true|none|The timestamp of when the channel was last updated.|
|channel_id|string(uuid)|true|none|**Deprecated.** Deprecated, use channel.id instead.|
|clicked_at|string(date-time) \| null|false|none|Timestamp when the message was clicked.|
|data|object \| null|false|none|Data associated with the message’s workflow run. Includes the workflow trigger request’s `data` payload merged with any additional data returned by a [fetch function](/designing-workflows/fetch-function). For messages produced after a [batch step](/designing-workflows/batch-function), includes the payload `data` from the most-recent trigger request (the final `activity` in the batch).|
|engagement_statuses|[string]|true|none|A list of engagement statuses.|
|id|string|true|none|The unique identifier for the message.|
|inserted_at|string(date-time)|true|none|Timestamp when the resource was created.|
|interacted_at|string(date-time) \| null|false|none|Timestamp when the message was interacted with.|
|link_clicked_at|string(date-time) \| null|false|none|Timestamp when a link in the message was clicked.|
|metadata|object \| null|false|none|The metadata associated with the message.|
|read_at|string(date-time) \| null|false|none|Timestamp when the message was read.|
|recipient|[RecipientReference](#schemarecipientreference)|true|none|A reference to a recipient, either a user identifier (string) or an object reference (ID, collection).|
|recipient_snapshot|object \| null|false|none|The destination the message was delivered to, captured at send time. Email channels carry `email`/`name`; chat channels carry the destination `channel_id` or `user_id`, or `via_incoming_webhook`. Null when no snapshot was captured.|
|» channel_id|string \| null|false|none|The chat channel the message was delivered to (chat channels)|
|» email|string \| null|false|none|The email address the message was delivered to (email channels)|
|» name|string \| null|false|none|The recipient name at send time (email channels)|
|» user_id|string \| null|false|none|The chat user the message was direct-messaged to (chat channels)|
|» via_incoming_webhook|boolean \| null|false|none|Whether the chat message was delivered via an incoming webhook|
|scheduled_at|string(date-time) \| null|false|none|Timestamp when the message was scheduled to be sent.|
|seen_at|string(date-time) \| null|false|none|Timestamp when the message was seen.|
|source|object|true|none|The workflow or guide that triggered the message.|
|» __typename|string|true|none|none|
|» branch_path|[object]|false|none|The branch ancestry of the step that generated the message, outermost first. Each segment is the branching step and the branch taken. Omitted when the step is not nested under a branch.|
|» » branch_id|string(uuid)|true|none|The ID of the branch taken.|
|» » step_ref|string|true|none|The reference of the branching step.|
|» » step_type|string|true|none|The type of the branching step.|
|» categories|[string]|true|none|The categories associated with the message.|
|» key|string|true|none|The key of the workflow or guide that triggered the message.|
|» step_ref|string \| null|false|none|The step reference for the step in the workflow that generated the message.|
|» type|string|false|none|Whether this message was generated from a workflow, broadcast, or guide.|
|» version_id|string(uuid)|true|none|The ID of the version of the workflow or guide that triggered the message.|
|» workflow_recipient_run_id|string(uuid) \| null|false|none|The unique identifier for the workflow recipient run that generated this message. Only present for workflow/broadcast messages.|
|» workflow_run_id|string(uuid) \| null|false|none|The unique identifier for the workflow run that generated this message. Only present for workflow/broadcast messages.|
|status|string|true|none|The message delivery status.|
|tenant|string \| null|false|none|The ID of the `tenant` associated with the message. Only present when a `tenant` is provided on a workflow trigger request.|
|updated_at|string(date-time)|true|none|The timestamp when the resource was last updated.|
|workflow|string \| null|false|none|**Deprecated.** The key of the workflow that generated the message.|

#### Enumerated Values

|Property|Value|
|---|---|
|» type|email|
|» type|in_app|
|» type|in_app_feed|
|» type|in_app_guide|
|» type|sms|
|» type|push|
|» type|chat|
|» type|http|
|engagement_statuses|seen|
|engagement_statuses|read|
|engagement_statuses|interacted|
|engagement_statuses|link_clicked|
|engagement_statuses|archived|
|» type|broadcast|
|» type|workflow|
|» type|guide|
|status|queued|
|status|sent|
|status|delivered|
|status|delivery_attempted|
|status|undelivered|
|status|not_sent|
|status|bounced|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

## Archive message

<a id="opIdarchiveMessage"></a>

> Code samples

```bash
curl https://api.knock.app/v1/messages/1jNaXzB2RZX3LY8wVQnfCKyPnv7/archived \
  -X PUT \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`PUT /v1/messages/{message_id}/archived`

Archives a message for the user. Archived messages are hidden from the default message list in the feed but can still be accessed and unarchived later.

<h3 id="archive-message-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|message_id|path|string|true|The unique identifier for the message.|

> Example responses

> 200 Response

```json
{
  "__typename": "Message",
  "actors": [
    "user_123"
  ],
  "archived_at": "2025-01-01T00:04:00Z",
  "channel_id": "123e4567-e89b-12d3-a456-426614174000",
  "clicked_at": null,
  "data": {
    "foo": "bar"
  },
  "engagement_statuses": [
    "seen",
    "archived"
  ],
  "id": "1jNaXzB2RZX3LY8wVQnfCKyPnv7",
  "inserted_at": "2021-01-01T00:00:00Z",
  "interacted_at": null,
  "link_clicked_at": null,
  "metadata": {
    "external_id": "123e4567-e89b-12d3-a456-426614174000"
  },
  "read_at": null,
  "recipient": "user_123",
  "scheduled_at": null,
  "seen_at": "2025-01-01T00:01:00Z",
  "source": {
    "__typename": "NotificationSource",
    "categories": [
      "collaboration"
    ],
    "key": "comment-created",
    "step_ref": "email_step_1",
    "version_id": "123e4567-e89b-12d3-a456-426614174000"
  },
  "status": "sent",
  "tenant": "tenant_123",
  "updated_at": "2021-01-01T00:00:00Z",
  "workflow": "comment-created"
}
```

<h3 id="archive-message-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="archive-message-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|__typename|string|true|none|The typename of the schema.|
|actors|[[RecipientReference](#schemarecipientreference)]|false|none|One or more actors that are associated with this message. Note: this is a list that can contain up to 10 actors if the message is produced from a [batch](/designing-workflows/batch-function).|
|archived_at|string(date-time) \| null|false|none|Timestamp when the message was archived.|
|channel|object|false|none|A configured channel, which is a way to route messages to a provider.|
|» created_at|string(date-time)|true|none|The timestamp of when the channel was created.|
|» id|string|true|none|The unique identifier for the channel.|
|» key|string \| null|false|none|Unique identifier for the channel within a project (immutable once created).|
|» name|string \| null|false|none|The human-readable name of the channel.|
|» provider|string|true|none|The ID of the provider that this channel uses to deliver messages.|
|» type|string|true|none|The type of channel, determining what kind of messages it can send.|
|» updated_at|string(date-time)|true|none|The timestamp of when the channel was last updated.|
|channel_id|string(uuid)|true|none|**Deprecated.** Deprecated, use channel.id instead.|
|clicked_at|string(date-time) \| null|false|none|Timestamp when the message was clicked.|
|data|object \| null|false|none|Data associated with the message’s workflow run. Includes the workflow trigger request’s `data` payload merged with any additional data returned by a [fetch function](/designing-workflows/fetch-function). For messages produced after a [batch step](/designing-workflows/batch-function), includes the payload `data` from the most-recent trigger request (the final `activity` in the batch).|
|engagement_statuses|[string]|true|none|A list of engagement statuses.|
|id|string|true|none|The unique identifier for the message.|
|inserted_at|string(date-time)|true|none|Timestamp when the resource was created.|
|interacted_at|string(date-time) \| null|false|none|Timestamp when the message was interacted with.|
|link_clicked_at|string(date-time) \| null|false|none|Timestamp when a link in the message was clicked.|
|metadata|object \| null|false|none|The metadata associated with the message.|
|read_at|string(date-time) \| null|false|none|Timestamp when the message was read.|
|recipient|[RecipientReference](#schemarecipientreference)|true|none|A reference to a recipient, either a user identifier (string) or an object reference (ID, collection).|
|recipient_snapshot|object \| null|false|none|The destination the message was delivered to, captured at send time. Email channels carry `email`/`name`; chat channels carry the destination `channel_id` or `user_id`, or `via_incoming_webhook`. Null when no snapshot was captured.|
|» channel_id|string \| null|false|none|The chat channel the message was delivered to (chat channels)|
|» email|string \| null|false|none|The email address the message was delivered to (email channels)|
|» name|string \| null|false|none|The recipient name at send time (email channels)|
|» user_id|string \| null|false|none|The chat user the message was direct-messaged to (chat channels)|
|» via_incoming_webhook|boolean \| null|false|none|Whether the chat message was delivered via an incoming webhook|
|scheduled_at|string(date-time) \| null|false|none|Timestamp when the message was scheduled to be sent.|
|seen_at|string(date-time) \| null|false|none|Timestamp when the message was seen.|
|source|object|true|none|The workflow or guide that triggered the message.|
|» __typename|string|true|none|none|
|» branch_path|[object]|false|none|The branch ancestry of the step that generated the message, outermost first. Each segment is the branching step and the branch taken. Omitted when the step is not nested under a branch.|
|» » branch_id|string(uuid)|true|none|The ID of the branch taken.|
|» » step_ref|string|true|none|The reference of the branching step.|
|» » step_type|string|true|none|The type of the branching step.|
|» categories|[string]|true|none|The categories associated with the message.|
|» key|string|true|none|The key of the workflow or guide that triggered the message.|
|» step_ref|string \| null|false|none|The step reference for the step in the workflow that generated the message.|
|» type|string|false|none|Whether this message was generated from a workflow, broadcast, or guide.|
|» version_id|string(uuid)|true|none|The ID of the version of the workflow or guide that triggered the message.|
|» workflow_recipient_run_id|string(uuid) \| null|false|none|The unique identifier for the workflow recipient run that generated this message. Only present for workflow/broadcast messages.|
|» workflow_run_id|string(uuid) \| null|false|none|The unique identifier for the workflow run that generated this message. Only present for workflow/broadcast messages.|
|status|string|true|none|The message delivery status.|
|tenant|string \| null|false|none|The ID of the `tenant` associated with the message. Only present when a `tenant` is provided on a workflow trigger request.|
|updated_at|string(date-time)|true|none|The timestamp when the resource was last updated.|
|workflow|string \| null|false|none|**Deprecated.** The key of the workflow that generated the message.|

#### Enumerated Values

|Property|Value|
|---|---|
|» type|email|
|» type|in_app|
|» type|in_app_feed|
|» type|in_app_guide|
|» type|sms|
|» type|push|
|» type|chat|
|» type|http|
|engagement_statuses|seen|
|engagement_statuses|read|
|engagement_statuses|interacted|
|engagement_statuses|link_clicked|
|engagement_statuses|archived|
|» type|broadcast|
|» type|workflow|
|» type|guide|
|status|queued|
|status|sent|
|status|delivered|
|status|delivery_attempted|
|status|undelivered|
|status|not_sent|
|status|bounced|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

## Unarchive message

<a id="opIdunarchiveMessage (2)"></a>

> Code samples

```bash
curl https://api.knock.app/v1/messages/1jNaXzB2RZX3LY8wVQnfCKyPnv7/archived \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /v1/messages/{message_id}/archived`

Removes a message from the archived state, making it visible in the default message list in the feed again.

<h3 id="unarchive-message-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|message_id|path|string|true|The unique identifier for the message.|

> Example responses

> 200 Response

```json
{
  "__typename": "Message",
  "actors": [
    "user_123"
  ],
  "archived_at": null,
  "channel_id": "123e4567-e89b-12d3-a456-426614174000",
  "clicked_at": null,
  "data": {
    "foo": "bar"
  },
  "engagement_statuses": [
    "seen"
  ],
  "id": "1jNaXzB2RZX3LY8wVQnfCKyPnv7",
  "inserted_at": "2021-01-01T00:00:00Z",
  "interacted_at": null,
  "link_clicked_at": null,
  "metadata": {
    "external_id": "123e4567-e89b-12d3-a456-426614174000"
  },
  "read_at": null,
  "recipient": "user_123",
  "scheduled_at": null,
  "seen_at": "2025-01-01T00:01:00Z",
  "source": {
    "__typename": "NotificationSource",
    "categories": [
      "collaboration"
    ],
    "key": "comment-created",
    "step_ref": "email_step_1",
    "version_id": "123e4567-e89b-12d3-a456-426614174000"
  },
  "status": "sent",
  "tenant": "tenant_123",
  "updated_at": "2021-01-01T00:00:00Z",
  "workflow": "comment-created"
}
```

<h3 id="unarchive-message-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="unarchive-message-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|__typename|string|true|none|The typename of the schema.|
|actors|[[RecipientReference](#schemarecipientreference)]|false|none|One or more actors that are associated with this message. Note: this is a list that can contain up to 10 actors if the message is produced from a [batch](/designing-workflows/batch-function).|
|archived_at|string(date-time) \| null|false|none|Timestamp when the message was archived.|
|channel|object|false|none|A configured channel, which is a way to route messages to a provider.|
|» created_at|string(date-time)|true|none|The timestamp of when the channel was created.|
|» id|string|true|none|The unique identifier for the channel.|
|» key|string \| null|false|none|Unique identifier for the channel within a project (immutable once created).|
|» name|string \| null|false|none|The human-readable name of the channel.|
|» provider|string|true|none|The ID of the provider that this channel uses to deliver messages.|
|» type|string|true|none|The type of channel, determining what kind of messages it can send.|
|» updated_at|string(date-time)|true|none|The timestamp of when the channel was last updated.|
|channel_id|string(uuid)|true|none|**Deprecated.** Deprecated, use channel.id instead.|
|clicked_at|string(date-time) \| null|false|none|Timestamp when the message was clicked.|
|data|object \| null|false|none|Data associated with the message’s workflow run. Includes the workflow trigger request’s `data` payload merged with any additional data returned by a [fetch function](/designing-workflows/fetch-function). For messages produced after a [batch step](/designing-workflows/batch-function), includes the payload `data` from the most-recent trigger request (the final `activity` in the batch).|
|engagement_statuses|[string]|true|none|A list of engagement statuses.|
|id|string|true|none|The unique identifier for the message.|
|inserted_at|string(date-time)|true|none|Timestamp when the resource was created.|
|interacted_at|string(date-time) \| null|false|none|Timestamp when the message was interacted with.|
|link_clicked_at|string(date-time) \| null|false|none|Timestamp when a link in the message was clicked.|
|metadata|object \| null|false|none|The metadata associated with the message.|
|read_at|string(date-time) \| null|false|none|Timestamp when the message was read.|
|recipient|[RecipientReference](#schemarecipientreference)|true|none|A reference to a recipient, either a user identifier (string) or an object reference (ID, collection).|
|recipient_snapshot|object \| null|false|none|The destination the message was delivered to, captured at send time. Email channels carry `email`/`name`; chat channels carry the destination `channel_id` or `user_id`, or `via_incoming_webhook`. Null when no snapshot was captured.|
|» channel_id|string \| null|false|none|The chat channel the message was delivered to (chat channels)|
|» email|string \| null|false|none|The email address the message was delivered to (email channels)|
|» name|string \| null|false|none|The recipient name at send time (email channels)|
|» user_id|string \| null|false|none|The chat user the message was direct-messaged to (chat channels)|
|» via_incoming_webhook|boolean \| null|false|none|Whether the chat message was delivered via an incoming webhook|
|scheduled_at|string(date-time) \| null|false|none|Timestamp when the message was scheduled to be sent.|
|seen_at|string(date-time) \| null|false|none|Timestamp when the message was seen.|
|source|object|true|none|The workflow or guide that triggered the message.|
|» __typename|string|true|none|none|
|» branch_path|[object]|false|none|The branch ancestry of the step that generated the message, outermost first. Each segment is the branching step and the branch taken. Omitted when the step is not nested under a branch.|
|» » branch_id|string(uuid)|true|none|The ID of the branch taken.|
|» » step_ref|string|true|none|The reference of the branching step.|
|» » step_type|string|true|none|The type of the branching step.|
|» categories|[string]|true|none|The categories associated with the message.|
|» key|string|true|none|The key of the workflow or guide that triggered the message.|
|» step_ref|string \| null|false|none|The step reference for the step in the workflow that generated the message.|
|» type|string|false|none|Whether this message was generated from a workflow, broadcast, or guide.|
|» version_id|string(uuid)|true|none|The ID of the version of the workflow or guide that triggered the message.|
|» workflow_recipient_run_id|string(uuid) \| null|false|none|The unique identifier for the workflow recipient run that generated this message. Only present for workflow/broadcast messages.|
|» workflow_run_id|string(uuid) \| null|false|none|The unique identifier for the workflow run that generated this message. Only present for workflow/broadcast messages.|
|status|string|true|none|The message delivery status.|
|tenant|string \| null|false|none|The ID of the `tenant` associated with the message. Only present when a `tenant` is provided on a workflow trigger request.|
|updated_at|string(date-time)|true|none|The timestamp when the resource was last updated.|
|workflow|string \| null|false|none|**Deprecated.** The key of the workflow that generated the message.|

#### Enumerated Values

|Property|Value|
|---|---|
|» type|email|
|» type|in_app|
|» type|in_app_feed|
|» type|in_app_guide|
|» type|sms|
|» type|push|
|» type|chat|
|» type|http|
|engagement_statuses|seen|
|engagement_statuses|read|
|engagement_statuses|interacted|
|engagement_statuses|link_clicked|
|engagement_statuses|archived|
|» type|broadcast|
|» type|workflow|
|» type|guide|
|status|queued|
|status|sent|
|status|delivered|
|status|delivery_attempted|
|status|undelivered|
|status|not_sent|
|status|bounced|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

## Mark message as unread

<a id="opIdmarkMessageUnread (2)"></a>

> Code samples

```bash
curl https://api.knock.app/v1/messages/1jNaXzB2RZX3LY8wVQnfCKyPnv7/unread \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /v1/messages/{message_id}/unread`

Marks a message as `unread`. This reverses the `read` state. Read more about message engagement statuses [here](/send-notifications/message-statuses#engagement-status).

<h3 id="mark-message-as-unread-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|message_id|path|string|true|The unique identifier for the message.|

> Example responses

> 200 Response

```json
{
  "__typename": "Message",
  "actors": [
    "user_123"
  ],
  "archived_at": null,
  "channel_id": "123e4567-e89b-12d3-a456-426614174000",
  "clicked_at": null,
  "data": {
    "foo": "bar"
  },
  "engagement_statuses": [
    "seen"
  ],
  "id": "1jNaXzB2RZX3LY8wVQnfCKyPnv7",
  "inserted_at": "2021-01-01T00:00:00Z",
  "interacted_at": null,
  "link_clicked_at": null,
  "metadata": {
    "external_id": "123e4567-e89b-12d3-a456-426614174000"
  },
  "read_at": null,
  "recipient": "user_123",
  "scheduled_at": null,
  "seen_at": "2025-01-01T00:01:00Z",
  "source": {
    "__typename": "NotificationSource",
    "categories": [
      "collaboration"
    ],
    "key": "comment-created",
    "step_ref": "email_step_1",
    "version_id": "123e4567-e89b-12d3-a456-426614174000"
  },
  "status": "sent",
  "tenant": "tenant_123",
  "updated_at": "2021-01-01T00:00:00Z",
  "workflow": "comment-created"
}
```

<h3 id="mark-message-as-unread-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="mark-message-as-unread-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|__typename|string|true|none|The typename of the schema.|
|actors|[[RecipientReference](#schemarecipientreference)]|false|none|One or more actors that are associated with this message. Note: this is a list that can contain up to 10 actors if the message is produced from a [batch](/designing-workflows/batch-function).|
|archived_at|string(date-time) \| null|false|none|Timestamp when the message was archived.|
|channel|object|false|none|A configured channel, which is a way to route messages to a provider.|
|» created_at|string(date-time)|true|none|The timestamp of when the channel was created.|
|» id|string|true|none|The unique identifier for the channel.|
|» key|string \| null|false|none|Unique identifier for the channel within a project (immutable once created).|
|» name|string \| null|false|none|The human-readable name of the channel.|
|» provider|string|true|none|The ID of the provider that this channel uses to deliver messages.|
|» type|string|true|none|The type of channel, determining what kind of messages it can send.|
|» updated_at|string(date-time)|true|none|The timestamp of when the channel was last updated.|
|channel_id|string(uuid)|true|none|**Deprecated.** Deprecated, use channel.id instead.|
|clicked_at|string(date-time) \| null|false|none|Timestamp when the message was clicked.|
|data|object \| null|false|none|Data associated with the message’s workflow run. Includes the workflow trigger request’s `data` payload merged with any additional data returned by a [fetch function](/designing-workflows/fetch-function). For messages produced after a [batch step](/designing-workflows/batch-function), includes the payload `data` from the most-recent trigger request (the final `activity` in the batch).|
|engagement_statuses|[string]|true|none|A list of engagement statuses.|
|id|string|true|none|The unique identifier for the message.|
|inserted_at|string(date-time)|true|none|Timestamp when the resource was created.|
|interacted_at|string(date-time) \| null|false|none|Timestamp when the message was interacted with.|
|link_clicked_at|string(date-time) \| null|false|none|Timestamp when a link in the message was clicked.|
|metadata|object \| null|false|none|The metadata associated with the message.|
|read_at|string(date-time) \| null|false|none|Timestamp when the message was read.|
|recipient|[RecipientReference](#schemarecipientreference)|true|none|A reference to a recipient, either a user identifier (string) or an object reference (ID, collection).|
|recipient_snapshot|object \| null|false|none|The destination the message was delivered to, captured at send time. Email channels carry `email`/`name`; chat channels carry the destination `channel_id` or `user_id`, or `via_incoming_webhook`. Null when no snapshot was captured.|
|» channel_id|string \| null|false|none|The chat channel the message was delivered to (chat channels)|
|» email|string \| null|false|none|The email address the message was delivered to (email channels)|
|» name|string \| null|false|none|The recipient name at send time (email channels)|
|» user_id|string \| null|false|none|The chat user the message was direct-messaged to (chat channels)|
|» via_incoming_webhook|boolean \| null|false|none|Whether the chat message was delivered via an incoming webhook|
|scheduled_at|string(date-time) \| null|false|none|Timestamp when the message was scheduled to be sent.|
|seen_at|string(date-time) \| null|false|none|Timestamp when the message was seen.|
|source|object|true|none|The workflow or guide that triggered the message.|
|» __typename|string|true|none|none|
|» branch_path|[object]|false|none|The branch ancestry of the step that generated the message, outermost first. Each segment is the branching step and the branch taken. Omitted when the step is not nested under a branch.|
|» » branch_id|string(uuid)|true|none|The ID of the branch taken.|
|» » step_ref|string|true|none|The reference of the branching step.|
|» » step_type|string|true|none|The type of the branching step.|
|» categories|[string]|true|none|The categories associated with the message.|
|» key|string|true|none|The key of the workflow or guide that triggered the message.|
|» step_ref|string \| null|false|none|The step reference for the step in the workflow that generated the message.|
|» type|string|false|none|Whether this message was generated from a workflow, broadcast, or guide.|
|» version_id|string(uuid)|true|none|The ID of the version of the workflow or guide that triggered the message.|
|» workflow_recipient_run_id|string(uuid) \| null|false|none|The unique identifier for the workflow recipient run that generated this message. Only present for workflow/broadcast messages.|
|» workflow_run_id|string(uuid) \| null|false|none|The unique identifier for the workflow run that generated this message. Only present for workflow/broadcast messages.|
|status|string|true|none|The message delivery status.|
|tenant|string \| null|false|none|The ID of the `tenant` associated with the message. Only present when a `tenant` is provided on a workflow trigger request.|
|updated_at|string(date-time)|true|none|The timestamp when the resource was last updated.|
|workflow|string \| null|false|none|**Deprecated.** The key of the workflow that generated the message.|

#### Enumerated Values

|Property|Value|
|---|---|
|» type|email|
|» type|in_app|
|» type|in_app_feed|
|» type|in_app_guide|
|» type|sms|
|» type|push|
|» type|chat|
|» type|http|
|engagement_statuses|seen|
|engagement_statuses|read|
|engagement_statuses|interacted|
|engagement_statuses|link_clicked|
|engagement_statuses|archived|
|» type|broadcast|
|» type|workflow|
|» type|guide|
|status|queued|
|status|sent|
|status|delivered|
|status|delivery_attempted|
|status|undelivered|
|status|not_sent|
|status|bounced|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

## Mark messages as interacted

<a id="opIdbatchMarkMessagesAsInteracted"></a>

> Code samples

```bash
curl https://api.knock.app/v1/messages/batch/interacted \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "message_ids": [
      "1jNaXzB2RZX3LY8wVQnfCKyPnv7"
    ],
    "metadata": {
      "key": "value"
    }
  }'
```

`POST /v1/messages/batch/interacted`

Marks the given messages as interacted with by the user. This can include any user action on the message, with optional metadata about the specific interaction. Cannot include more than 5 key-value pairs, must not contain nested data. Read more about message engagement statuses [here](/send-notifications/message-statuses#engagement-status).

> Body parameter

```json
{
  "message_ids": [
    "1jNaXzB2RZX3LY8wVQnfCKyPnv7"
  ],
  "metadata": {
    "key": "value"
  }
}
```

<h3 id="mark-messages-as-interacted-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[BatchMessagesInteractedRequest](#schemabatchmessagesinteractedrequest)|true|Params|
|» message_ids|body|[string]|true|The message IDs to batch mark as interacted with.|
|» metadata|body|object \| null|false|Metadata about the interaction.|

> Example responses

> 200 Response

```json
[
  {
    "__typename": "Message",
    "actors": [
      "user_123"
    ],
    "archived_at": null,
    "channel_id": "123e4567-e89b-12d3-a456-426614174000",
    "clicked_at": null,
    "data": {
      "foo": "bar"
    },
    "engagement_statuses": [
      "seen",
      "interacted"
    ],
    "id": "1jNaXzB2RZX3LY8wVQnfCKyPnv7",
    "inserted_at": "2021-01-01T00:00:00Z",
    "interacted_at": "2025-01-01T00:03:00Z",
    "link_clicked_at": null,
    "metadata": {
      "external_id": "123e4567-e89b-12d3-a456-426614174000"
    },
    "read_at": null,
    "recipient": "user_123",
    "scheduled_at": null,
    "seen_at": "2025-01-01T00:01:00Z",
    "source": {
      "__typename": "NotificationSource",
      "categories": [
        "collaboration"
      ],
      "key": "comment-created",
      "version_id": "123e4567-e89b-12d3-a456-426614174000"
    },
    "status": "sent",
    "tenant": "tenant_123",
    "updated_at": "2021-01-01T00:00:00Z",
    "workflow": "comment-created"
  }
]
```

<h3 id="mark-messages-as-interacted-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="mark-messages-as-interacted-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|
|» __typename|string|true|none|The typename of the schema.|
|» actors|[[RecipientReference](#schemarecipientreference)]|false|none|One or more actors that are associated with this message. Note: this is a list that can contain up to 10 actors if the message is produced from a [batch](/designing-workflows/batch-function).|
|» archived_at|string(date-time) \| null|false|none|Timestamp when the message was archived.|
|» channel|object|false|none|A configured channel, which is a way to route messages to a provider.|
|» » created_at|string(date-time)|true|none|The timestamp of when the channel was created.|
|» » id|string|true|none|The unique identifier for the channel.|
|» » key|string \| null|false|none|Unique identifier for the channel within a project (immutable once created).|
|» » name|string \| null|false|none|The human-readable name of the channel.|
|» » provider|string|true|none|The ID of the provider that this channel uses to deliver messages.|
|» » type|string|true|none|The type of channel, determining what kind of messages it can send.|
|» » updated_at|string(date-time)|true|none|The timestamp of when the channel was last updated.|
|» channel_id|string(uuid)|true|none|**Deprecated.** Deprecated, use channel.id instead.|
|» clicked_at|string(date-time) \| null|false|none|Timestamp when the message was clicked.|
|» data|object \| null|false|none|Data associated with the message’s workflow run. Includes the workflow trigger request’s `data` payload merged with any additional data returned by a [fetch function](/designing-workflows/fetch-function). For messages produced after a [batch step](/designing-workflows/batch-function), includes the payload `data` from the most-recent trigger request (the final `activity` in the batch).|
|» engagement_statuses|[string]|true|none|A list of engagement statuses.|
|» id|string|true|none|The unique identifier for the message.|
|» inserted_at|string(date-time)|true|none|Timestamp when the resource was created.|
|» interacted_at|string(date-time) \| null|false|none|Timestamp when the message was interacted with.|
|» link_clicked_at|string(date-time) \| null|false|none|Timestamp when a link in the message was clicked.|
|» metadata|object \| null|false|none|The metadata associated with the message.|
|» read_at|string(date-time) \| null|false|none|Timestamp when the message was read.|
|» recipient|[RecipientReference](#schemarecipientreference)|true|none|A reference to a recipient, either a user identifier (string) or an object reference (ID, collection).|
|» recipient_snapshot|object \| null|false|none|The destination the message was delivered to, captured at send time. Email channels carry `email`/`name`; chat channels carry the destination `channel_id` or `user_id`, or `via_incoming_webhook`. Null when no snapshot was captured.|
|» » channel_id|string \| null|false|none|The chat channel the message was delivered to (chat channels)|
|» » email|string \| null|false|none|The email address the message was delivered to (email channels)|
|» » name|string \| null|false|none|The recipient name at send time (email channels)|
|» » user_id|string \| null|false|none|The chat user the message was direct-messaged to (chat channels)|
|» » via_incoming_webhook|boolean \| null|false|none|Whether the chat message was delivered via an incoming webhook|
|» scheduled_at|string(date-time) \| null|false|none|Timestamp when the message was scheduled to be sent.|
|» seen_at|string(date-time) \| null|false|none|Timestamp when the message was seen.|
|» source|object|true|none|The workflow or guide that triggered the message.|
|» » __typename|string|true|none|none|
|» » branch_path|[object]|false|none|The branch ancestry of the step that generated the message, outermost first. Each segment is the branching step and the branch taken. Omitted when the step is not nested under a branch.|
|» » » branch_id|string(uuid)|true|none|The ID of the branch taken.|
|» » » step_ref|string|true|none|The reference of the branching step.|
|» » » step_type|string|true|none|The type of the branching step.|
|» » categories|[string]|true|none|The categories associated with the message.|
|» » key|string|true|none|The key of the workflow or guide that triggered the message.|
|» » step_ref|string \| null|false|none|The step reference for the step in the workflow that generated the message.|
|» » type|string|false|none|Whether this message was generated from a workflow, broadcast, or guide.|
|» » version_id|string(uuid)|true|none|The ID of the version of the workflow or guide that triggered the message.|
|» » workflow_recipient_run_id|string(uuid) \| null|false|none|The unique identifier for the workflow recipient run that generated this message. Only present for workflow/broadcast messages.|
|» » workflow_run_id|string(uuid) \| null|false|none|The unique identifier for the workflow run that generated this message. Only present for workflow/broadcast messages.|
|» status|string|true|none|The message delivery status.|
|» tenant|string \| null|false|none|The ID of the `tenant` associated with the message. Only present when a `tenant` is provided on a workflow trigger request.|
|» updated_at|string(date-time)|true|none|The timestamp when the resource was last updated.|
|» workflow|string \| null|false|none|**Deprecated.** The key of the workflow that generated the message.|

#### Enumerated Values

|Property|Value|
|---|---|
|» » type|email|
|» » type|in_app|
|» » type|in_app_feed|
|» » type|in_app_guide|
|» » type|sms|
|» » type|push|
|» » type|chat|
|» » type|http|
|» engagement_statuses|seen|
|» engagement_statuses|read|
|» engagement_statuses|interacted|
|» engagement_statuses|link_clicked|
|» engagement_statuses|archived|
|» » type|broadcast|
|» » type|workflow|
|» » type|guide|
|» status|queued|
|» status|sent|
|» status|delivered|
|» status|delivery_attempted|
|» status|undelivered|
|» status|not_sent|
|» status|bounced|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

## Mark message as unseen

<a id="opIdmarkMessageUnseen"></a>

> Code samples

```bash
curl https://api.knock.app/v1/messages/1jNaXzB2RZX3LY8wVQnfCKyPnv7/unseen \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /v1/messages/{message_id}/unseen`

Marks a message as `unseen`. This reverses the `seen` state. Read more about message engagement statuses [here](/send-notifications/message-statuses#engagement-status).

<h3 id="mark-message-as-unseen-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|message_id|path|string|true|The unique identifier for the message.|

> Example responses

> 200 Response

```json
{
  "__typename": "Message",
  "actors": [
    "user_123"
  ],
  "archived_at": null,
  "channel_id": "123e4567-e89b-12d3-a456-426614174000",
  "clicked_at": null,
  "data": {
    "foo": "bar"
  },
  "engagement_statuses": [],
  "id": "1jNaXzB2RZX3LY8wVQnfCKyPnv7",
  "inserted_at": "2021-01-01T00:00:00Z",
  "interacted_at": null,
  "link_clicked_at": null,
  "metadata": {
    "external_id": "123e4567-e89b-12d3-a456-426614174000"
  },
  "read_at": null,
  "recipient": "user_123",
  "scheduled_at": null,
  "seen_at": null,
  "source": {
    "__typename": "NotificationSource",
    "categories": [
      "collaboration"
    ],
    "key": "comment-created",
    "step_ref": "email_step_1",
    "version_id": "123e4567-e89b-12d3-a456-426614174000"
  },
  "status": "sent",
  "tenant": "tenant_123",
  "updated_at": "2021-01-01T00:00:00Z",
  "workflow": "comment-created"
}
```

<h3 id="mark-message-as-unseen-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="mark-message-as-unseen-1-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|__typename|string|true|none|The typename of the schema.|
|actors|[[RecipientReference](#schemarecipientreference)]|false|none|One or more actors that are associated with this message. Note: this is a list that can contain up to 10 actors if the message is produced from a [batch](/designing-workflows/batch-function).|
|archived_at|string(date-time) \| null|false|none|Timestamp when the message was archived.|
|channel|object|false|none|A configured channel, which is a way to route messages to a provider.|
|» created_at|string(date-time)|true|none|The timestamp of when the channel was created.|
|» id|string|true|none|The unique identifier for the channel.|
|» key|string \| null|false|none|Unique identifier for the channel within a project (immutable once created).|
|» name|string \| null|false|none|The human-readable name of the channel.|
|» provider|string|true|none|The ID of the provider that this channel uses to deliver messages.|
|» type|string|true|none|The type of channel, determining what kind of messages it can send.|
|» updated_at|string(date-time)|true|none|The timestamp of when the channel was last updated.|
|channel_id|string(uuid)|true|none|**Deprecated.** Deprecated, use channel.id instead.|
|clicked_at|string(date-time) \| null|false|none|Timestamp when the message was clicked.|
|data|object \| null|false|none|Data associated with the message’s workflow run. Includes the workflow trigger request’s `data` payload merged with any additional data returned by a [fetch function](/designing-workflows/fetch-function). For messages produced after a [batch step](/designing-workflows/batch-function), includes the payload `data` from the most-recent trigger request (the final `activity` in the batch).|
|engagement_statuses|[string]|true|none|A list of engagement statuses.|
|id|string|true|none|The unique identifier for the message.|
|inserted_at|string(date-time)|true|none|Timestamp when the resource was created.|
|interacted_at|string(date-time) \| null|false|none|Timestamp when the message was interacted with.|
|link_clicked_at|string(date-time) \| null|false|none|Timestamp when a link in the message was clicked.|
|metadata|object \| null|false|none|The metadata associated with the message.|
|read_at|string(date-time) \| null|false|none|Timestamp when the message was read.|
|recipient|[RecipientReference](#schemarecipientreference)|true|none|A reference to a recipient, either a user identifier (string) or an object reference (ID, collection).|
|recipient_snapshot|object \| null|false|none|The destination the message was delivered to, captured at send time. Email channels carry `email`/`name`; chat channels carry the destination `channel_id` or `user_id`, or `via_incoming_webhook`. Null when no snapshot was captured.|
|» channel_id|string \| null|false|none|The chat channel the message was delivered to (chat channels)|
|» email|string \| null|false|none|The email address the message was delivered to (email channels)|
|» name|string \| null|false|none|The recipient name at send time (email channels)|
|» user_id|string \| null|false|none|The chat user the message was direct-messaged to (chat channels)|
|» via_incoming_webhook|boolean \| null|false|none|Whether the chat message was delivered via an incoming webhook|
|scheduled_at|string(date-time) \| null|false|none|Timestamp when the message was scheduled to be sent.|
|seen_at|string(date-time) \| null|false|none|Timestamp when the message was seen.|
|source|object|true|none|The workflow or guide that triggered the message.|
|» __typename|string|true|none|none|
|» branch_path|[object]|false|none|The branch ancestry of the step that generated the message, outermost first. Each segment is the branching step and the branch taken. Omitted when the step is not nested under a branch.|
|» » branch_id|string(uuid)|true|none|The ID of the branch taken.|
|» » step_ref|string|true|none|The reference of the branching step.|
|» » step_type|string|true|none|The type of the branching step.|
|» categories|[string]|true|none|The categories associated with the message.|
|» key|string|true|none|The key of the workflow or guide that triggered the message.|
|» step_ref|string \| null|false|none|The step reference for the step in the workflow that generated the message.|
|» type|string|false|none|Whether this message was generated from a workflow, broadcast, or guide.|
|» version_id|string(uuid)|true|none|The ID of the version of the workflow or guide that triggered the message.|
|» workflow_recipient_run_id|string(uuid) \| null|false|none|The unique identifier for the workflow recipient run that generated this message. Only present for workflow/broadcast messages.|
|» workflow_run_id|string(uuid) \| null|false|none|The unique identifier for the workflow run that generated this message. Only present for workflow/broadcast messages.|
|status|string|true|none|The message delivery status.|
|tenant|string \| null|false|none|The ID of the `tenant` associated with the message. Only present when a `tenant` is provided on a workflow trigger request.|
|updated_at|string(date-time)|true|none|The timestamp when the resource was last updated.|
|workflow|string \| null|false|none|**Deprecated.** The key of the workflow that generated the message.|

#### Enumerated Values

|Property|Value|
|---|---|
|» type|email|
|» type|in_app|
|» type|in_app_feed|
|» type|in_app_guide|
|» type|sms|
|» type|push|
|» type|chat|
|» type|http|
|engagement_statuses|seen|
|engagement_statuses|read|
|engagement_statuses|interacted|
|engagement_statuses|link_clicked|
|engagement_statuses|archived|
|» type|broadcast|
|» type|workflow|
|» type|guide|
|status|queued|
|status|sent|
|status|delivered|
|status|delivery_attempted|
|status|undelivered|
|status|not_sent|
|status|bounced|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

## Mark message as read

<a id="opIdmarkMessageRead"></a>

> Code samples

```bash
curl https://api.knock.app/v1/messages/1jNaXzB2RZX3LY8wVQnfCKyPnv7/read \
  -X PUT \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`PUT /v1/messages/{message_id}/read`

Marks a message as `read`. This indicates that the user has read the message content. Read more about message engagement statuses [here](/send-notifications/message-statuses#engagement-status).

<h3 id="mark-message-as-read-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|message_id|path|string|true|The unique identifier for the message.|

> Example responses

> 200 Response

```json
{
  "__typename": "Message",
  "actors": [
    "user_123"
  ],
  "archived_at": null,
  "channel_id": "123e4567-e89b-12d3-a456-426614174000",
  "clicked_at": null,
  "data": {
    "foo": "bar"
  },
  "engagement_statuses": [
    "seen",
    "read"
  ],
  "id": "1jNaXzB2RZX3LY8wVQnfCKyPnv7",
  "inserted_at": "2021-01-01T00:00:00Z",
  "interacted_at": null,
  "link_clicked_at": null,
  "metadata": {
    "external_id": "123e4567-e89b-12d3-a456-426614174000"
  },
  "read_at": "2025-01-01T00:02:00Z",
  "recipient": "user_123",
  "scheduled_at": null,
  "seen_at": "2025-01-01T00:01:00Z",
  "source": {
    "__typename": "NotificationSource",
    "categories": [
      "collaboration"
    ],
    "key": "comment-created",
    "step_ref": "email_step_1",
    "version_id": "123e4567-e89b-12d3-a456-426614174000"
  },
  "status": "sent",
  "tenant": "tenant_123",
  "updated_at": "2021-01-01T00:00:00Z",
  "workflow": "comment-created"
}
```

<h3 id="mark-message-as-read-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="mark-message-as-read-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|__typename|string|true|none|The typename of the schema.|
|actors|[[RecipientReference](#schemarecipientreference)]|false|none|One or more actors that are associated with this message. Note: this is a list that can contain up to 10 actors if the message is produced from a [batch](/designing-workflows/batch-function).|
|archived_at|string(date-time) \| null|false|none|Timestamp when the message was archived.|
|channel|object|false|none|A configured channel, which is a way to route messages to a provider.|
|» created_at|string(date-time)|true|none|The timestamp of when the channel was created.|
|» id|string|true|none|The unique identifier for the channel.|
|» key|string \| null|false|none|Unique identifier for the channel within a project (immutable once created).|
|» name|string \| null|false|none|The human-readable name of the channel.|
|» provider|string|true|none|The ID of the provider that this channel uses to deliver messages.|
|» type|string|true|none|The type of channel, determining what kind of messages it can send.|
|» updated_at|string(date-time)|true|none|The timestamp of when the channel was last updated.|
|channel_id|string(uuid)|true|none|**Deprecated.** Deprecated, use channel.id instead.|
|clicked_at|string(date-time) \| null|false|none|Timestamp when the message was clicked.|
|data|object \| null|false|none|Data associated with the message’s workflow run. Includes the workflow trigger request’s `data` payload merged with any additional data returned by a [fetch function](/designing-workflows/fetch-function). For messages produced after a [batch step](/designing-workflows/batch-function), includes the payload `data` from the most-recent trigger request (the final `activity` in the batch).|
|engagement_statuses|[string]|true|none|A list of engagement statuses.|
|id|string|true|none|The unique identifier for the message.|
|inserted_at|string(date-time)|true|none|Timestamp when the resource was created.|
|interacted_at|string(date-time) \| null|false|none|Timestamp when the message was interacted with.|
|link_clicked_at|string(date-time) \| null|false|none|Timestamp when a link in the message was clicked.|
|metadata|object \| null|false|none|The metadata associated with the message.|
|read_at|string(date-time) \| null|false|none|Timestamp when the message was read.|
|recipient|[RecipientReference](#schemarecipientreference)|true|none|A reference to a recipient, either a user identifier (string) or an object reference (ID, collection).|
|recipient_snapshot|object \| null|false|none|The destination the message was delivered to, captured at send time. Email channels carry `email`/`name`; chat channels carry the destination `channel_id` or `user_id`, or `via_incoming_webhook`. Null when no snapshot was captured.|
|» channel_id|string \| null|false|none|The chat channel the message was delivered to (chat channels)|
|» email|string \| null|false|none|The email address the message was delivered to (email channels)|
|» name|string \| null|false|none|The recipient name at send time (email channels)|
|» user_id|string \| null|false|none|The chat user the message was direct-messaged to (chat channels)|
|» via_incoming_webhook|boolean \| null|false|none|Whether the chat message was delivered via an incoming webhook|
|scheduled_at|string(date-time) \| null|false|none|Timestamp when the message was scheduled to be sent.|
|seen_at|string(date-time) \| null|false|none|Timestamp when the message was seen.|
|source|object|true|none|The workflow or guide that triggered the message.|
|» __typename|string|true|none|none|
|» branch_path|[object]|false|none|The branch ancestry of the step that generated the message, outermost first. Each segment is the branching step and the branch taken. Omitted when the step is not nested under a branch.|
|» » branch_id|string(uuid)|true|none|The ID of the branch taken.|
|» » step_ref|string|true|none|The reference of the branching step.|
|» » step_type|string|true|none|The type of the branching step.|
|» categories|[string]|true|none|The categories associated with the message.|
|» key|string|true|none|The key of the workflow or guide that triggered the message.|
|» step_ref|string \| null|false|none|The step reference for the step in the workflow that generated the message.|
|» type|string|false|none|Whether this message was generated from a workflow, broadcast, or guide.|
|» version_id|string(uuid)|true|none|The ID of the version of the workflow or guide that triggered the message.|
|» workflow_recipient_run_id|string(uuid) \| null|false|none|The unique identifier for the workflow recipient run that generated this message. Only present for workflow/broadcast messages.|
|» workflow_run_id|string(uuid) \| null|false|none|The unique identifier for the workflow run that generated this message. Only present for workflow/broadcast messages.|
|status|string|true|none|The message delivery status.|
|tenant|string \| null|false|none|The ID of the `tenant` associated with the message. Only present when a `tenant` is provided on a workflow trigger request.|
|updated_at|string(date-time)|true|none|The timestamp when the resource was last updated.|
|workflow|string \| null|false|none|**Deprecated.** The key of the workflow that generated the message.|

#### Enumerated Values

|Property|Value|
|---|---|
|» type|email|
|» type|in_app|
|» type|in_app_feed|
|» type|in_app_guide|
|» type|sms|
|» type|push|
|» type|chat|
|» type|http|
|engagement_statuses|seen|
|engagement_statuses|read|
|engagement_statuses|interacted|
|engagement_statuses|link_clicked|
|engagement_statuses|archived|
|» type|broadcast|
|» type|workflow|
|» type|guide|
|status|queued|
|status|sent|
|status|delivered|
|status|delivery_attempted|
|status|undelivered|
|status|not_sent|
|status|bounced|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

## Mark message as unread

<a id="opIdmarkMessageUnread"></a>

> Code samples

```bash
curl https://api.knock.app/v1/messages/1jNaXzB2RZX3LY8wVQnfCKyPnv7/read \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /v1/messages/{message_id}/read`

Marks a message as `unread`. This reverses the `read` state. Read more about message engagement statuses [here](/send-notifications/message-statuses#engagement-status).

<h3 id="mark-message-as-unread-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|message_id|path|string|true|The unique identifier for the message.|

> Example responses

> 200 Response

```json
{
  "__typename": "Message",
  "actors": [
    "user_123"
  ],
  "archived_at": null,
  "channel_id": "123e4567-e89b-12d3-a456-426614174000",
  "clicked_at": null,
  "data": {
    "foo": "bar"
  },
  "engagement_statuses": [
    "seen"
  ],
  "id": "1jNaXzB2RZX3LY8wVQnfCKyPnv7",
  "inserted_at": "2021-01-01T00:00:00Z",
  "interacted_at": null,
  "link_clicked_at": null,
  "metadata": {
    "external_id": "123e4567-e89b-12d3-a456-426614174000"
  },
  "read_at": null,
  "recipient": "user_123",
  "scheduled_at": null,
  "seen_at": "2025-01-01T00:01:00Z",
  "source": {
    "__typename": "NotificationSource",
    "categories": [
      "collaboration"
    ],
    "key": "comment-created",
    "step_ref": "email_step_1",
    "version_id": "123e4567-e89b-12d3-a456-426614174000"
  },
  "status": "sent",
  "tenant": "tenant_123",
  "updated_at": "2021-01-01T00:00:00Z",
  "workflow": "comment-created"
}
```

<h3 id="mark-message-as-unread-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="mark-message-as-unread-1-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|__typename|string|true|none|The typename of the schema.|
|actors|[[RecipientReference](#schemarecipientreference)]|false|none|One or more actors that are associated with this message. Note: this is a list that can contain up to 10 actors if the message is produced from a [batch](/designing-workflows/batch-function).|
|archived_at|string(date-time) \| null|false|none|Timestamp when the message was archived.|
|channel|object|false|none|A configured channel, which is a way to route messages to a provider.|
|» created_at|string(date-time)|true|none|The timestamp of when the channel was created.|
|» id|string|true|none|The unique identifier for the channel.|
|» key|string \| null|false|none|Unique identifier for the channel within a project (immutable once created).|
|» name|string \| null|false|none|The human-readable name of the channel.|
|» provider|string|true|none|The ID of the provider that this channel uses to deliver messages.|
|» type|string|true|none|The type of channel, determining what kind of messages it can send.|
|» updated_at|string(date-time)|true|none|The timestamp of when the channel was last updated.|
|channel_id|string(uuid)|true|none|**Deprecated.** Deprecated, use channel.id instead.|
|clicked_at|string(date-time) \| null|false|none|Timestamp when the message was clicked.|
|data|object \| null|false|none|Data associated with the message’s workflow run. Includes the workflow trigger request’s `data` payload merged with any additional data returned by a [fetch function](/designing-workflows/fetch-function). For messages produced after a [batch step](/designing-workflows/batch-function), includes the payload `data` from the most-recent trigger request (the final `activity` in the batch).|
|engagement_statuses|[string]|true|none|A list of engagement statuses.|
|id|string|true|none|The unique identifier for the message.|
|inserted_at|string(date-time)|true|none|Timestamp when the resource was created.|
|interacted_at|string(date-time) \| null|false|none|Timestamp when the message was interacted with.|
|link_clicked_at|string(date-time) \| null|false|none|Timestamp when a link in the message was clicked.|
|metadata|object \| null|false|none|The metadata associated with the message.|
|read_at|string(date-time) \| null|false|none|Timestamp when the message was read.|
|recipient|[RecipientReference](#schemarecipientreference)|true|none|A reference to a recipient, either a user identifier (string) or an object reference (ID, collection).|
|recipient_snapshot|object \| null|false|none|The destination the message was delivered to, captured at send time. Email channels carry `email`/`name`; chat channels carry the destination `channel_id` or `user_id`, or `via_incoming_webhook`. Null when no snapshot was captured.|
|» channel_id|string \| null|false|none|The chat channel the message was delivered to (chat channels)|
|» email|string \| null|false|none|The email address the message was delivered to (email channels)|
|» name|string \| null|false|none|The recipient name at send time (email channels)|
|» user_id|string \| null|false|none|The chat user the message was direct-messaged to (chat channels)|
|» via_incoming_webhook|boolean \| null|false|none|Whether the chat message was delivered via an incoming webhook|
|scheduled_at|string(date-time) \| null|false|none|Timestamp when the message was scheduled to be sent.|
|seen_at|string(date-time) \| null|false|none|Timestamp when the message was seen.|
|source|object|true|none|The workflow or guide that triggered the message.|
|» __typename|string|true|none|none|
|» branch_path|[object]|false|none|The branch ancestry of the step that generated the message, outermost first. Each segment is the branching step and the branch taken. Omitted when the step is not nested under a branch.|
|» » branch_id|string(uuid)|true|none|The ID of the branch taken.|
|» » step_ref|string|true|none|The reference of the branching step.|
|» » step_type|string|true|none|The type of the branching step.|
|» categories|[string]|true|none|The categories associated with the message.|
|» key|string|true|none|The key of the workflow or guide that triggered the message.|
|» step_ref|string \| null|false|none|The step reference for the step in the workflow that generated the message.|
|» type|string|false|none|Whether this message was generated from a workflow, broadcast, or guide.|
|» version_id|string(uuid)|true|none|The ID of the version of the workflow or guide that triggered the message.|
|» workflow_recipient_run_id|string(uuid) \| null|false|none|The unique identifier for the workflow recipient run that generated this message. Only present for workflow/broadcast messages.|
|» workflow_run_id|string(uuid) \| null|false|none|The unique identifier for the workflow run that generated this message. Only present for workflow/broadcast messages.|
|status|string|true|none|The message delivery status.|
|tenant|string \| null|false|none|The ID of the `tenant` associated with the message. Only present when a `tenant` is provided on a workflow trigger request.|
|updated_at|string(date-time)|true|none|The timestamp when the resource was last updated.|
|workflow|string \| null|false|none|**Deprecated.** The key of the workflow that generated the message.|

#### Enumerated Values

|Property|Value|
|---|---|
|» type|email|
|» type|in_app|
|» type|in_app_feed|
|» type|in_app_guide|
|» type|sms|
|» type|push|
|» type|chat|
|» type|http|
|engagement_statuses|seen|
|engagement_statuses|read|
|engagement_statuses|interacted|
|engagement_statuses|link_clicked|
|engagement_statuses|archived|
|» type|broadcast|
|» type|workflow|
|» type|guide|
|status|queued|
|status|sent|
|status|delivered|
|status|delivery_attempted|
|status|undelivered|
|status|not_sent|
|status|bounced|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

## Mark messages as unseen

<a id="opIdbatchMarkMessagesAsUnseen"></a>

> Code samples

```bash
curl https://api.knock.app/v1/messages/batch/unseen \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "message_ids": [
      "2w3YUpTTOxuDvZFji8OMsKrG176",
      "2w3YVRbPXMIh8Zq6oBFcVDA5xes"
    ]
  }'
```

`POST /v1/messages/batch/unseen`

Marks the given messages as `unseen`. This reverses the `seen` state. Read more about message engagement statuses [here](/send-notifications/message-statuses#engagement-status).

> Body parameter

```json
{
  "message_ids": [
    "2w3YUpTTOxuDvZFji8OMsKrG176",
    "2w3YVRbPXMIh8Zq6oBFcVDA5xes"
  ]
}
```

<h3 id="mark-messages-as-unseen-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[BatchMessagesStatusRequest](#schemabatchmessagesstatusrequest)|true|Params|
|» message_ids|body|[string]|true|The message IDs to update the status of.|

> Example responses

> 200 Response

```json
[
  {
    "__typename": "Message",
    "actors": [
      "user_123"
    ],
    "archived_at": null,
    "channel_id": "123e4567-e89b-12d3-a456-426614174000",
    "clicked_at": null,
    "data": {
      "foo": "bar"
    },
    "engagement_statuses": [],
    "id": "1jNaXzB2RZX3LY8wVQnfCKyPnv7",
    "inserted_at": "2021-01-01T00:00:00Z",
    "interacted_at": null,
    "link_clicked_at": null,
    "metadata": {
      "external_id": "123e4567-e89b-12d3-a456-426614174000"
    },
    "read_at": null,
    "recipient": "user_123",
    "scheduled_at": null,
    "seen_at": null,
    "source": {
      "__typename": "NotificationSource",
      "categories": [
        "collaboration"
      ],
      "key": "comment-created",
      "version_id": "123e4567-e89b-12d3-a456-426614174000"
    },
    "status": "sent",
    "tenant": "tenant_123",
    "updated_at": "2021-01-01T00:00:00Z",
    "workflow": "comment-created"
  }
]
```

<h3 id="mark-messages-as-unseen-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="mark-messages-as-unseen-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|
|» __typename|string|true|none|The typename of the schema.|
|» actors|[[RecipientReference](#schemarecipientreference)]|false|none|One or more actors that are associated with this message. Note: this is a list that can contain up to 10 actors if the message is produced from a [batch](/designing-workflows/batch-function).|
|» archived_at|string(date-time) \| null|false|none|Timestamp when the message was archived.|
|» channel|object|false|none|A configured channel, which is a way to route messages to a provider.|
|» » created_at|string(date-time)|true|none|The timestamp of when the channel was created.|
|» » id|string|true|none|The unique identifier for the channel.|
|» » key|string \| null|false|none|Unique identifier for the channel within a project (immutable once created).|
|» » name|string \| null|false|none|The human-readable name of the channel.|
|» » provider|string|true|none|The ID of the provider that this channel uses to deliver messages.|
|» » type|string|true|none|The type of channel, determining what kind of messages it can send.|
|» » updated_at|string(date-time)|true|none|The timestamp of when the channel was last updated.|
|» channel_id|string(uuid)|true|none|**Deprecated.** Deprecated, use channel.id instead.|
|» clicked_at|string(date-time) \| null|false|none|Timestamp when the message was clicked.|
|» data|object \| null|false|none|Data associated with the message’s workflow run. Includes the workflow trigger request’s `data` payload merged with any additional data returned by a [fetch function](/designing-workflows/fetch-function). For messages produced after a [batch step](/designing-workflows/batch-function), includes the payload `data` from the most-recent trigger request (the final `activity` in the batch).|
|» engagement_statuses|[string]|true|none|A list of engagement statuses.|
|» id|string|true|none|The unique identifier for the message.|
|» inserted_at|string(date-time)|true|none|Timestamp when the resource was created.|
|» interacted_at|string(date-time) \| null|false|none|Timestamp when the message was interacted with.|
|» link_clicked_at|string(date-time) \| null|false|none|Timestamp when a link in the message was clicked.|
|» metadata|object \| null|false|none|The metadata associated with the message.|
|» read_at|string(date-time) \| null|false|none|Timestamp when the message was read.|
|» recipient|[RecipientReference](#schemarecipientreference)|true|none|A reference to a recipient, either a user identifier (string) or an object reference (ID, collection).|
|» recipient_snapshot|object \| null|false|none|The destination the message was delivered to, captured at send time. Email channels carry `email`/`name`; chat channels carry the destination `channel_id` or `user_id`, or `via_incoming_webhook`. Null when no snapshot was captured.|
|» » channel_id|string \| null|false|none|The chat channel the message was delivered to (chat channels)|
|» » email|string \| null|false|none|The email address the message was delivered to (email channels)|
|» » name|string \| null|false|none|The recipient name at send time (email channels)|
|» » user_id|string \| null|false|none|The chat user the message was direct-messaged to (chat channels)|
|» » via_incoming_webhook|boolean \| null|false|none|Whether the chat message was delivered via an incoming webhook|
|» scheduled_at|string(date-time) \| null|false|none|Timestamp when the message was scheduled to be sent.|
|» seen_at|string(date-time) \| null|false|none|Timestamp when the message was seen.|
|» source|object|true|none|The workflow or guide that triggered the message.|
|» » __typename|string|true|none|none|
|» » branch_path|[object]|false|none|The branch ancestry of the step that generated the message, outermost first. Each segment is the branching step and the branch taken. Omitted when the step is not nested under a branch.|
|» » » branch_id|string(uuid)|true|none|The ID of the branch taken.|
|» » » step_ref|string|true|none|The reference of the branching step.|
|» » » step_type|string|true|none|The type of the branching step.|
|» » categories|[string]|true|none|The categories associated with the message.|
|» » key|string|true|none|The key of the workflow or guide that triggered the message.|
|» » step_ref|string \| null|false|none|The step reference for the step in the workflow that generated the message.|
|» » type|string|false|none|Whether this message was generated from a workflow, broadcast, or guide.|
|» » version_id|string(uuid)|true|none|The ID of the version of the workflow or guide that triggered the message.|
|» » workflow_recipient_run_id|string(uuid) \| null|false|none|The unique identifier for the workflow recipient run that generated this message. Only present for workflow/broadcast messages.|
|» » workflow_run_id|string(uuid) \| null|false|none|The unique identifier for the workflow run that generated this message. Only present for workflow/broadcast messages.|
|» status|string|true|none|The message delivery status.|
|» tenant|string \| null|false|none|The ID of the `tenant` associated with the message. Only present when a `tenant` is provided on a workflow trigger request.|
|» updated_at|string(date-time)|true|none|The timestamp when the resource was last updated.|
|» workflow|string \| null|false|none|**Deprecated.** The key of the workflow that generated the message.|

#### Enumerated Values

|Property|Value|
|---|---|
|» » type|email|
|» » type|in_app|
|» » type|in_app_feed|
|» » type|in_app_guide|
|» » type|sms|
|» » type|push|
|» » type|chat|
|» » type|http|
|» engagement_statuses|seen|
|» engagement_statuses|read|
|» engagement_statuses|interacted|
|» engagement_statuses|link_clicked|
|» engagement_statuses|archived|
|» » type|broadcast|
|» » type|workflow|
|» » type|guide|
|» status|queued|
|» status|sent|
|» status|delivered|
|» status|delivery_attempted|
|» status|undelivered|
|» status|not_sent|
|» status|bounced|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

## Mark messages as unread

<a id="opIdbatchMarkMessagesAsUnread"></a>

> Code samples

```bash
curl https://api.knock.app/v1/messages/batch/unread \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "message_ids": [
      "2w3YUpTTOxuDvZFji8OMsKrG176",
      "2w3YVRbPXMIh8Zq6oBFcVDA5xes"
    ]
  }'
```

`POST /v1/messages/batch/unread`

Marks the given messages as `unread`. This reverses the `read` state. Read more about message engagement statuses [here](/send-notifications/message-statuses#engagement-status).

> Body parameter

```json
{
  "message_ids": [
    "2w3YUpTTOxuDvZFji8OMsKrG176",
    "2w3YVRbPXMIh8Zq6oBFcVDA5xes"
  ]
}
```

<h3 id="mark-messages-as-unread-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[BatchMessagesStatusRequest](#schemabatchmessagesstatusrequest)|true|Params|
|» message_ids|body|[string]|true|The message IDs to update the status of.|

> Example responses

> 200 Response

```json
[
  {
    "__typename": "Message",
    "actors": [
      "user_123"
    ],
    "archived_at": null,
    "channel_id": "123e4567-e89b-12d3-a456-426614174000",
    "clicked_at": null,
    "data": {
      "foo": "bar"
    },
    "engagement_statuses": [
      "seen"
    ],
    "id": "1jNaXzB2RZX3LY8wVQnfCKyPnv7",
    "inserted_at": "2021-01-01T00:00:00Z",
    "interacted_at": null,
    "link_clicked_at": null,
    "metadata": {
      "external_id": "123e4567-e89b-12d3-a456-426614174000"
    },
    "read_at": null,
    "recipient": "user_123",
    "scheduled_at": null,
    "seen_at": "2025-01-01T00:01:00Z",
    "source": {
      "__typename": "NotificationSource",
      "categories": [
        "collaboration"
      ],
      "key": "comment-created",
      "version_id": "123e4567-e89b-12d3-a456-426614174000"
    },
    "status": "sent",
    "tenant": "tenant_123",
    "updated_at": "2021-01-01T00:00:00Z",
    "workflow": "comment-created"
  }
]
```

<h3 id="mark-messages-as-unread-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="mark-messages-as-unread-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|
|» __typename|string|true|none|The typename of the schema.|
|» actors|[[RecipientReference](#schemarecipientreference)]|false|none|One or more actors that are associated with this message. Note: this is a list that can contain up to 10 actors if the message is produced from a [batch](/designing-workflows/batch-function).|
|» archived_at|string(date-time) \| null|false|none|Timestamp when the message was archived.|
|» channel|object|false|none|A configured channel, which is a way to route messages to a provider.|
|» » created_at|string(date-time)|true|none|The timestamp of when the channel was created.|
|» » id|string|true|none|The unique identifier for the channel.|
|» » key|string \| null|false|none|Unique identifier for the channel within a project (immutable once created).|
|» » name|string \| null|false|none|The human-readable name of the channel.|
|» » provider|string|true|none|The ID of the provider that this channel uses to deliver messages.|
|» » type|string|true|none|The type of channel, determining what kind of messages it can send.|
|» » updated_at|string(date-time)|true|none|The timestamp of when the channel was last updated.|
|» channel_id|string(uuid)|true|none|**Deprecated.** Deprecated, use channel.id instead.|
|» clicked_at|string(date-time) \| null|false|none|Timestamp when the message was clicked.|
|» data|object \| null|false|none|Data associated with the message’s workflow run. Includes the workflow trigger request’s `data` payload merged with any additional data returned by a [fetch function](/designing-workflows/fetch-function). For messages produced after a [batch step](/designing-workflows/batch-function), includes the payload `data` from the most-recent trigger request (the final `activity` in the batch).|
|» engagement_statuses|[string]|true|none|A list of engagement statuses.|
|» id|string|true|none|The unique identifier for the message.|
|» inserted_at|string(date-time)|true|none|Timestamp when the resource was created.|
|» interacted_at|string(date-time) \| null|false|none|Timestamp when the message was interacted with.|
|» link_clicked_at|string(date-time) \| null|false|none|Timestamp when a link in the message was clicked.|
|» metadata|object \| null|false|none|The metadata associated with the message.|
|» read_at|string(date-time) \| null|false|none|Timestamp when the message was read.|
|» recipient|[RecipientReference](#schemarecipientreference)|true|none|A reference to a recipient, either a user identifier (string) or an object reference (ID, collection).|
|» recipient_snapshot|object \| null|false|none|The destination the message was delivered to, captured at send time. Email channels carry `email`/`name`; chat channels carry the destination `channel_id` or `user_id`, or `via_incoming_webhook`. Null when no snapshot was captured.|
|» » channel_id|string \| null|false|none|The chat channel the message was delivered to (chat channels)|
|» » email|string \| null|false|none|The email address the message was delivered to (email channels)|
|» » name|string \| null|false|none|The recipient name at send time (email channels)|
|» » user_id|string \| null|false|none|The chat user the message was direct-messaged to (chat channels)|
|» » via_incoming_webhook|boolean \| null|false|none|Whether the chat message was delivered via an incoming webhook|
|» scheduled_at|string(date-time) \| null|false|none|Timestamp when the message was scheduled to be sent.|
|» seen_at|string(date-time) \| null|false|none|Timestamp when the message was seen.|
|» source|object|true|none|The workflow or guide that triggered the message.|
|» » __typename|string|true|none|none|
|» » branch_path|[object]|false|none|The branch ancestry of the step that generated the message, outermost first. Each segment is the branching step and the branch taken. Omitted when the step is not nested under a branch.|
|» » » branch_id|string(uuid)|true|none|The ID of the branch taken.|
|» » » step_ref|string|true|none|The reference of the branching step.|
|» » » step_type|string|true|none|The type of the branching step.|
|» » categories|[string]|true|none|The categories associated with the message.|
|» » key|string|true|none|The key of the workflow or guide that triggered the message.|
|» » step_ref|string \| null|false|none|The step reference for the step in the workflow that generated the message.|
|» » type|string|false|none|Whether this message was generated from a workflow, broadcast, or guide.|
|» » version_id|string(uuid)|true|none|The ID of the version of the workflow or guide that triggered the message.|
|» » workflow_recipient_run_id|string(uuid) \| null|false|none|The unique identifier for the workflow recipient run that generated this message. Only present for workflow/broadcast messages.|
|» » workflow_run_id|string(uuid) \| null|false|none|The unique identifier for the workflow run that generated this message. Only present for workflow/broadcast messages.|
|» status|string|true|none|The message delivery status.|
|» tenant|string \| null|false|none|The ID of the `tenant` associated with the message. Only present when a `tenant` is provided on a workflow trigger request.|
|» updated_at|string(date-time)|true|none|The timestamp when the resource was last updated.|
|» workflow|string \| null|false|none|**Deprecated.** The key of the workflow that generated the message.|

#### Enumerated Values

|Property|Value|
|---|---|
|» » type|email|
|» » type|in_app|
|» » type|in_app_feed|
|» » type|in_app_guide|
|» » type|sms|
|» » type|push|
|» » type|chat|
|» » type|http|
|» engagement_statuses|seen|
|» engagement_statuses|read|
|» engagement_statuses|interacted|
|» engagement_statuses|link_clicked|
|» engagement_statuses|archived|
|» » type|broadcast|
|» » type|workflow|
|» » type|guide|
|» status|queued|
|» status|sent|
|» status|delivered|
|» status|delivery_attempted|
|» status|undelivered|
|» status|not_sent|
|» status|bounced|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

## Mark messages as seen

<a id="opIdbatchMarkMessagesAsSeen"></a>

> Code samples

```bash
curl https://api.knock.app/v1/messages/batch/seen \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "message_ids": [
      "2w3YUpTTOxuDvZFji8OMsKrG176",
      "2w3YVRbPXMIh8Zq6oBFcVDA5xes"
    ]
  }'
```

`POST /v1/messages/batch/seen`

Marks the given messages as `seen`. This indicates that the user has viewed the message in their feed or inbox. Read more about message engagement statuses [here](/send-notifications/message-statuses#engagement-status).

> Body parameter

```json
{
  "message_ids": [
    "2w3YUpTTOxuDvZFji8OMsKrG176",
    "2w3YVRbPXMIh8Zq6oBFcVDA5xes"
  ]
}
```

<h3 id="mark-messages-as-seen-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[BatchMessagesStatusRequest](#schemabatchmessagesstatusrequest)|true|Params|
|» message_ids|body|[string]|true|The message IDs to update the status of.|

> Example responses

> 200 Response

```json
[
  {
    "__typename": "Message",
    "actors": [
      "user_123"
    ],
    "archived_at": null,
    "channel_id": "123e4567-e89b-12d3-a456-426614174000",
    "clicked_at": null,
    "data": {
      "foo": "bar"
    },
    "engagement_statuses": [
      "seen"
    ],
    "id": "1jNaXzB2RZX3LY8wVQnfCKyPnv7",
    "inserted_at": "2021-01-01T00:00:00Z",
    "interacted_at": null,
    "link_clicked_at": null,
    "metadata": {
      "external_id": "123e4567-e89b-12d3-a456-426614174000"
    },
    "read_at": null,
    "recipient": "user_123",
    "scheduled_at": null,
    "seen_at": "2025-01-01T00:01:00Z",
    "source": {
      "__typename": "NotificationSource",
      "categories": [
        "collaboration"
      ],
      "key": "comment-created",
      "version_id": "123e4567-e89b-12d3-a456-426614174000"
    },
    "status": "sent",
    "tenant": "tenant_123",
    "updated_at": "2021-01-01T00:00:00Z",
    "workflow": "comment-created"
  }
]
```

<h3 id="mark-messages-as-seen-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="mark-messages-as-seen-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|
|» __typename|string|true|none|The typename of the schema.|
|» actors|[[RecipientReference](#schemarecipientreference)]|false|none|One or more actors that are associated with this message. Note: this is a list that can contain up to 10 actors if the message is produced from a [batch](/designing-workflows/batch-function).|
|» archived_at|string(date-time) \| null|false|none|Timestamp when the message was archived.|
|» channel|object|false|none|A configured channel, which is a way to route messages to a provider.|
|» » created_at|string(date-time)|true|none|The timestamp of when the channel was created.|
|» » id|string|true|none|The unique identifier for the channel.|
|» » key|string \| null|false|none|Unique identifier for the channel within a project (immutable once created).|
|» » name|string \| null|false|none|The human-readable name of the channel.|
|» » provider|string|true|none|The ID of the provider that this channel uses to deliver messages.|
|» » type|string|true|none|The type of channel, determining what kind of messages it can send.|
|» » updated_at|string(date-time)|true|none|The timestamp of when the channel was last updated.|
|» channel_id|string(uuid)|true|none|**Deprecated.** Deprecated, use channel.id instead.|
|» clicked_at|string(date-time) \| null|false|none|Timestamp when the message was clicked.|
|» data|object \| null|false|none|Data associated with the message’s workflow run. Includes the workflow trigger request’s `data` payload merged with any additional data returned by a [fetch function](/designing-workflows/fetch-function). For messages produced after a [batch step](/designing-workflows/batch-function), includes the payload `data` from the most-recent trigger request (the final `activity` in the batch).|
|» engagement_statuses|[string]|true|none|A list of engagement statuses.|
|» id|string|true|none|The unique identifier for the message.|
|» inserted_at|string(date-time)|true|none|Timestamp when the resource was created.|
|» interacted_at|string(date-time) \| null|false|none|Timestamp when the message was interacted with.|
|» link_clicked_at|string(date-time) \| null|false|none|Timestamp when a link in the message was clicked.|
|» metadata|object \| null|false|none|The metadata associated with the message.|
|» read_at|string(date-time) \| null|false|none|Timestamp when the message was read.|
|» recipient|[RecipientReference](#schemarecipientreference)|true|none|A reference to a recipient, either a user identifier (string) or an object reference (ID, collection).|
|» recipient_snapshot|object \| null|false|none|The destination the message was delivered to, captured at send time. Email channels carry `email`/`name`; chat channels carry the destination `channel_id` or `user_id`, or `via_incoming_webhook`. Null when no snapshot was captured.|
|» » channel_id|string \| null|false|none|The chat channel the message was delivered to (chat channels)|
|» » email|string \| null|false|none|The email address the message was delivered to (email channels)|
|» » name|string \| null|false|none|The recipient name at send time (email channels)|
|» » user_id|string \| null|false|none|The chat user the message was direct-messaged to (chat channels)|
|» » via_incoming_webhook|boolean \| null|false|none|Whether the chat message was delivered via an incoming webhook|
|» scheduled_at|string(date-time) \| null|false|none|Timestamp when the message was scheduled to be sent.|
|» seen_at|string(date-time) \| null|false|none|Timestamp when the message was seen.|
|» source|object|true|none|The workflow or guide that triggered the message.|
|» » __typename|string|true|none|none|
|» » branch_path|[object]|false|none|The branch ancestry of the step that generated the message, outermost first. Each segment is the branching step and the branch taken. Omitted when the step is not nested under a branch.|
|» » » branch_id|string(uuid)|true|none|The ID of the branch taken.|
|» » » step_ref|string|true|none|The reference of the branching step.|
|» » » step_type|string|true|none|The type of the branching step.|
|» » categories|[string]|true|none|The categories associated with the message.|
|» » key|string|true|none|The key of the workflow or guide that triggered the message.|
|» » step_ref|string \| null|false|none|The step reference for the step in the workflow that generated the message.|
|» » type|string|false|none|Whether this message was generated from a workflow, broadcast, or guide.|
|» » version_id|string(uuid)|true|none|The ID of the version of the workflow or guide that triggered the message.|
|» » workflow_recipient_run_id|string(uuid) \| null|false|none|The unique identifier for the workflow recipient run that generated this message. Only present for workflow/broadcast messages.|
|» » workflow_run_id|string(uuid) \| null|false|none|The unique identifier for the workflow run that generated this message. Only present for workflow/broadcast messages.|
|» status|string|true|none|The message delivery status.|
|» tenant|string \| null|false|none|The ID of the `tenant` associated with the message. Only present when a `tenant` is provided on a workflow trigger request.|
|» updated_at|string(date-time)|true|none|The timestamp when the resource was last updated.|
|» workflow|string \| null|false|none|**Deprecated.** The key of the workflow that generated the message.|

#### Enumerated Values

|Property|Value|
|---|---|
|» » type|email|
|» » type|in_app|
|» » type|in_app_feed|
|» » type|in_app_guide|
|» » type|sms|
|» » type|push|
|» » type|chat|
|» » type|http|
|» engagement_statuses|seen|
|» engagement_statuses|read|
|» engagement_statuses|interacted|
|» engagement_statuses|link_clicked|
|» engagement_statuses|archived|
|» » type|broadcast|
|» » type|workflow|
|» » type|guide|
|» status|queued|
|» status|sent|
|» status|delivered|
|» status|delivery_attempted|
|» status|undelivered|
|» status|not_sent|
|» status|bounced|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

## Mark messages as read

<a id="opIdbatchMarkMessagesAsRead"></a>

> Code samples

```bash
curl https://api.knock.app/v1/messages/batch/read \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "message_ids": [
      "2w3YUpTTOxuDvZFji8OMsKrG176",
      "2w3YVRbPXMIh8Zq6oBFcVDA5xes"
    ]
  }'
```

`POST /v1/messages/batch/read`

Marks the given messages as `read`. Read more about message engagement statuses [here](/send-notifications/message-statuses#engagement-status).

> Body parameter

```json
{
  "message_ids": [
    "2w3YUpTTOxuDvZFji8OMsKrG176",
    "2w3YVRbPXMIh8Zq6oBFcVDA5xes"
  ]
}
```

<h3 id="mark-messages-as-read-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[BatchMessagesStatusRequest](#schemabatchmessagesstatusrequest)|true|Params|
|» message_ids|body|[string]|true|The message IDs to update the status of.|

> Example responses

> 200 Response

```json
[
  {
    "__typename": "Message",
    "actors": [
      "user_123"
    ],
    "archived_at": null,
    "channel_id": "123e4567-e89b-12d3-a456-426614174000",
    "clicked_at": null,
    "data": {
      "foo": "bar"
    },
    "engagement_statuses": [
      "seen",
      "read"
    ],
    "id": "1jNaXzB2RZX3LY8wVQnfCKyPnv7",
    "inserted_at": "2021-01-01T00:00:00Z",
    "interacted_at": null,
    "link_clicked_at": null,
    "metadata": {
      "external_id": "123e4567-e89b-12d3-a456-426614174000"
    },
    "read_at": "2025-01-01T00:02:00Z",
    "recipient": "user_123",
    "scheduled_at": null,
    "seen_at": "2025-01-01T00:01:00Z",
    "source": {
      "__typename": "NotificationSource",
      "categories": [
        "collaboration"
      ],
      "key": "comment-created",
      "version_id": "123e4567-e89b-12d3-a456-426614174000"
    },
    "status": "sent",
    "tenant": "tenant_123",
    "updated_at": "2021-01-01T00:00:00Z",
    "workflow": "comment-created"
  }
]
```

<h3 id="mark-messages-as-read-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="mark-messages-as-read-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|
|» __typename|string|true|none|The typename of the schema.|
|» actors|[[RecipientReference](#schemarecipientreference)]|false|none|One or more actors that are associated with this message. Note: this is a list that can contain up to 10 actors if the message is produced from a [batch](/designing-workflows/batch-function).|
|» archived_at|string(date-time) \| null|false|none|Timestamp when the message was archived.|
|» channel|object|false|none|A configured channel, which is a way to route messages to a provider.|
|» » created_at|string(date-time)|true|none|The timestamp of when the channel was created.|
|» » id|string|true|none|The unique identifier for the channel.|
|» » key|string \| null|false|none|Unique identifier for the channel within a project (immutable once created).|
|» » name|string \| null|false|none|The human-readable name of the channel.|
|» » provider|string|true|none|The ID of the provider that this channel uses to deliver messages.|
|» » type|string|true|none|The type of channel, determining what kind of messages it can send.|
|» » updated_at|string(date-time)|true|none|The timestamp of when the channel was last updated.|
|» channel_id|string(uuid)|true|none|**Deprecated.** Deprecated, use channel.id instead.|
|» clicked_at|string(date-time) \| null|false|none|Timestamp when the message was clicked.|
|» data|object \| null|false|none|Data associated with the message’s workflow run. Includes the workflow trigger request’s `data` payload merged with any additional data returned by a [fetch function](/designing-workflows/fetch-function). For messages produced after a [batch step](/designing-workflows/batch-function), includes the payload `data` from the most-recent trigger request (the final `activity` in the batch).|
|» engagement_statuses|[string]|true|none|A list of engagement statuses.|
|» id|string|true|none|The unique identifier for the message.|
|» inserted_at|string(date-time)|true|none|Timestamp when the resource was created.|
|» interacted_at|string(date-time) \| null|false|none|Timestamp when the message was interacted with.|
|» link_clicked_at|string(date-time) \| null|false|none|Timestamp when a link in the message was clicked.|
|» metadata|object \| null|false|none|The metadata associated with the message.|
|» read_at|string(date-time) \| null|false|none|Timestamp when the message was read.|
|» recipient|[RecipientReference](#schemarecipientreference)|true|none|A reference to a recipient, either a user identifier (string) or an object reference (ID, collection).|
|» recipient_snapshot|object \| null|false|none|The destination the message was delivered to, captured at send time. Email channels carry `email`/`name`; chat channels carry the destination `channel_id` or `user_id`, or `via_incoming_webhook`. Null when no snapshot was captured.|
|» » channel_id|string \| null|false|none|The chat channel the message was delivered to (chat channels)|
|» » email|string \| null|false|none|The email address the message was delivered to (email channels)|
|» » name|string \| null|false|none|The recipient name at send time (email channels)|
|» » user_id|string \| null|false|none|The chat user the message was direct-messaged to (chat channels)|
|» » via_incoming_webhook|boolean \| null|false|none|Whether the chat message was delivered via an incoming webhook|
|» scheduled_at|string(date-time) \| null|false|none|Timestamp when the message was scheduled to be sent.|
|» seen_at|string(date-time) \| null|false|none|Timestamp when the message was seen.|
|» source|object|true|none|The workflow or guide that triggered the message.|
|» » __typename|string|true|none|none|
|» » branch_path|[object]|false|none|The branch ancestry of the step that generated the message, outermost first. Each segment is the branching step and the branch taken. Omitted when the step is not nested under a branch.|
|» » » branch_id|string(uuid)|true|none|The ID of the branch taken.|
|» » » step_ref|string|true|none|The reference of the branching step.|
|» » » step_type|string|true|none|The type of the branching step.|
|» » categories|[string]|true|none|The categories associated with the message.|
|» » key|string|true|none|The key of the workflow or guide that triggered the message.|
|» » step_ref|string \| null|false|none|The step reference for the step in the workflow that generated the message.|
|» » type|string|false|none|Whether this message was generated from a workflow, broadcast, or guide.|
|» » version_id|string(uuid)|true|none|The ID of the version of the workflow or guide that triggered the message.|
|» » workflow_recipient_run_id|string(uuid) \| null|false|none|The unique identifier for the workflow recipient run that generated this message. Only present for workflow/broadcast messages.|
|» » workflow_run_id|string(uuid) \| null|false|none|The unique identifier for the workflow run that generated this message. Only present for workflow/broadcast messages.|
|» status|string|true|none|The message delivery status.|
|» tenant|string \| null|false|none|The ID of the `tenant` associated with the message. Only present when a `tenant` is provided on a workflow trigger request.|
|» updated_at|string(date-time)|true|none|The timestamp when the resource was last updated.|
|» workflow|string \| null|false|none|**Deprecated.** The key of the workflow that generated the message.|

#### Enumerated Values

|Property|Value|
|---|---|
|» » type|email|
|» » type|in_app|
|» » type|in_app_feed|
|» » type|in_app_guide|
|» » type|sms|
|» » type|push|
|» » type|chat|
|» » type|http|
|» engagement_statuses|seen|
|» engagement_statuses|read|
|» engagement_statuses|interacted|
|» engagement_statuses|link_clicked|
|» engagement_statuses|archived|
|» » type|broadcast|
|» » type|workflow|
|» » type|guide|
|» status|queued|
|» status|sent|
|» status|delivered|
|» status|delivery_attempted|
|» status|undelivered|
|» status|not_sent|
|» status|bounced|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

## Batch get message contents

<a id="opIdbatchGetMessageContents"></a>

> Code samples

```bash
curl 'https://api.knock.app/v1/messages/batch/content?message_ids=string' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/messages/batch/content`

Get the contents of multiple messages in a single request.

<h3 id="batch-get-message-contents-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|message_ids|query|[string]|true|The IDs of the messages to fetch contents of.|

> Example responses

> 200 Response

```json
[
  {
    "__typename": "MessageContent",
    "data": {
      "__typename": "MessageSmsContent",
      "body": "URGENT: Power failure detected in perimeter fencing. Backup generators failed to engage. Technical team dispatched. Maintain lockdown protocols.",
      "to": "+15553982647"
    },
    "inserted_at": "1993-06-11T20:30:00Z",
    "message_id": "2w3YUpTTOxuDvZFji8OMsKrG176"
  }
]
```

<h3 id="batch-get-message-contents-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="batch-get-message-contents-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[MessageContents](#schemamessagecontents)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

## List delivery logs

<a id="opIdlistMessageDeliveryLogs"></a>

> Code samples

```bash
curl https://api.knock.app/v1/messages/string/delivery_logs \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/messages/{message_id}/delivery_logs`

Returns a paginated list of delivery logs for the specified message.

<h3 id="list-delivery-logs-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|message_id|path|string|true|The ID of the message to fetch delivery logs for.|
|after|query|string|false|The cursor to fetch entries after.|
|before|query|string|false|The cursor to fetch entries before.|
|page_size|query|integer|false|The number of items per page (defaults to 50).|

> Example responses

> 200 Response

```json
{
  "items": [
    {
      "__typename": "MessageDeliveryLog",
      "environment_id": "123e4567-e89b-12d3-a456-426614174000",
      "id": "2FVHPWxRqNuXQ9krvNP5A6Z4qXe",
      "inserted_at": "2021-01-01T00:00:00Z",
      "request": {
        "body": {
          "html_content": "<html></html>"
        },
        "headers": {
          "Content-Type": "application/json"
        },
        "host": "localhost",
        "method": "GET",
        "path": "/",
        "query": "?foo=bar"
      },
      "response": {
        "body": {
          "success": true
        },
        "headers": {
          "Content-Type": "application/json"
        },
        "status": 200
      },
      "service_name": "Postmark"
    }
  ],
  "page_info": {
    "__typename": "PageInfo",
    "after": null,
    "before": null,
    "page_size": 25
  }
}
```

<h3 id="list-delivery-logs-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[ListMessageDeliveryLogsResponse](#schemalistmessagedeliverylogsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

## Get message

<a id="opIdgetMessage"></a>

> Code samples

```bash
curl https://api.knock.app/v1/messages/1jNaXzB2RZX3LY8wVQnfCKyPnv7 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/messages/{message_id}`

Retrieves a specific message by its ID.

<h3 id="get-message-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|message_id|path|string|true|The unique identifier for the message.|

> Example responses

> 200 Response

```json
{
  "__typename": "Message",
  "actors": [
    "mr_arnold",
    "mr_muldoon"
  ],
  "archived_at": null,
  "channel_id": "123e4567-e89b-12d3-a456-426614174000",
  "clicked_at": null,
  "data": {
    "affected_areas": [
      "visitor_center",
      "raptor_pen",
      "trex_paddock"
    ],
    "attraction_id": "paddock_rex_01",
    "evacuation_protocol": "active",
    "message": "Life finds a way",
    "severity": "critical",
    "system_status": "fences_failing"
  },
  "engagement_statuses": [
    "read",
    "seen"
  ],
  "id": "2w3YUpTTOxuDvZFji8OMsKrG176",
  "inserted_at": "1993-06-11T21:15:00Z",
  "interacted_at": null,
  "link_clicked_at": null,
  "metadata": {
    "external_id": "123e4567-e89b-12d3-a456-426614174000"
  },
  "read_at": "1993-06-11T21:30:00Z",
  "recipient": "dr_grant",
  "recipient_snapshot": {
    "email": "user@example.com",
    "name": "John Doe"
  },
  "scheduled_at": null,
  "seen_at": "1993-06-11T21:29:45Z",
  "source": {
    "__typename": "NotificationSource",
    "branch_path": [
      {
        "branch_id": "123e4567-e89b-12d3-a456-426614174000",
        "step_ref": "experiment",
        "step_type": "random_cohort"
      }
    ],
    "categories": [
      "security",
      "emergency"
    ],
    "key": "security-breach-alert",
    "step_ref": "alert_step_1",
    "version_id": "123e4567-e89b-12d3-a456-426614174000",
    "workflow_recipient_run_id": "def01234-a56b-78c9-d012-345678901bcd",
    "workflow_run_id": "789e0123-f45a-67b8-c901-234567890abc"
  },
  "status": "sent",
  "tenant": "ingen_isla_nublar",
  "updated_at": "1993-06-11T21:30:05Z",
  "workflow": "security-breach-alert"
}
```

<h3 id="get-message-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[Message](#schemamessage)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

## Bulk update message statuses for channel

<a id="opIdbulkUpdateMessagesForChannel"></a>

> Code samples

```bash
curl https://api.knock.app/v1/channels/497f6eca-6276-4993-bfeb-53cbbbba6f08/messages/bulk/seen \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "archived": "include",
    "delivery_status": "delivered",
    "engagement_status": "seen",
    "has_tenant": true,
    "newer_than": "2024-01-01T00:00:00Z",
    "older_than": "2024-01-01T00:00:00Z",
    "recipient_ids": [
      "recipient1",
      "recipient2"
    ],
    "tenants": [
      "tenant1",
      "tenant2"
    ],
    "trigger_data": "{\"key\":\"value\"}",
    "workflows": [
      "workflow1",
      "workflow2"
    ]
  }'
```

`POST /v1/channels/{channel_id}/messages/bulk/{action}`

Bulk update the status of messages for a specific channel. The channel is specified by the `channel_id` parameter. The action to perform is specified by the `action` parameter, where the action is a status change action (e.g. `archive`, `unarchive`).

> Body parameter

```json
{
  "archived": "include",
  "delivery_status": "delivered",
  "engagement_status": "seen",
  "has_tenant": true,
  "newer_than": "2024-01-01T00:00:00Z",
  "older_than": "2024-01-01T00:00:00Z",
  "recipient_ids": [
    "recipient1",
    "recipient2"
  ],
  "tenants": [
    "tenant1",
    "tenant2"
  ],
  "trigger_data": "{\"key\":\"value\"}",
  "workflows": [
    "workflow1",
    "workflow2"
  ]
}
```

<h3 id="bulk-update-message-statuses-for-channel-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|channel_id|path|string(uuid)|true|The ID of the channel to update messages for.|
|action|path|string|true|The target status to be applied to the messages.|
|body|body|[BulkUpdateMessagesForChannelRequest](#schemabulkupdatemessagesforchannelrequest)|true|Params|
|» archived|body|string|false|Limits the results to messages with the given archived status.|
|» delivery_status|body|string|false|Limits the results to messages with the given delivery status.|
|» engagement_status|body|string|false|Limits the results to messages with the given engagement status.|
|» has_tenant|body|boolean|false|Limits the results to messages that have a tenant or not.|
|» newer_than|body|string(date-time)|false|Limits the results to messages inserted after the given date.|
|» older_than|body|string(date-time)|false|Limits the results to messages inserted before the given date.|
|» recipient_ids|body|[string]|false|Limits the results to messages with the given recipient IDs.|
|» tenants|body|[string]|false|Limits the results to messages with the given tenant IDs.|
|» trigger_data|body|string|false|Limits the results to only messages that were generated with the given data. See [trigger data filtering](/api-reference/overview/trigger-data-filtering) for more information.|
|» workflows|body|[string]|false|Limits the results to messages with the given workflow keys.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|action|seen|
|action|unseen|
|action|read|
|action|unread|
|action|archived|
|action|unarchived|
|action|interacted|
|action|archive|
|action|unarchive|
|action|delete|
|» archived|exclude|
|» archived|include|
|» archived|only|
|» delivery_status|queued|
|» delivery_status|sent|
|» delivery_status|delivered|
|» delivery_status|delivery_attempted|
|» delivery_status|undelivered|
|» delivery_status|not_sent|
|» delivery_status|bounced|
|» engagement_status|seen|
|» engagement_status|unseen|
|» engagement_status|read|
|» engagement_status|unread|
|» engagement_status|archived|
|» engagement_status|unarchived|
|» engagement_status|link_clicked|
|» engagement_status|interacted|

> Example responses

> 200 Response

```json
{
  "__typename": "BulkOperation",
  "completed_at": null,
  "error_count": 0,
  "error_items": [],
  "estimated_total_rows": 1000,
  "failed_at": null,
  "id": "123e4567-e89b-12d3-a456-426614174000",
  "inserted_at": "2024-05-22T12:00:00Z",
  "name": "Bulk operation name",
  "processed_rows": 0,
  "progress_path": "https://api.switchboard.com/v1/bulk_operations/123e4567-e89b-12d3-a456-426614174000",
  "started_at": null,
  "status": "processing",
  "success_count": 0,
  "updated_at": "2024-05-22T12:00:00Z"
}
```

<h3 id="bulk-update-message-statuses-for-channel-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[BulkOperation](#schemabulkoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

## Unarchive message

<a id="opIdunarchiveMessage"></a>

> Code samples

```bash
curl https://api.knock.app/v1/messages/1jNaXzB2RZX3LY8wVQnfCKyPnv7/unarchived \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /v1/messages/{message_id}/unarchived`

Removes a message from the archived state, making it visible in the default message list in the feed again.

<h3 id="unarchive-message-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|message_id|path|string|true|The unique identifier for the message.|

> Example responses

> 200 Response

```json
{
  "__typename": "Message",
  "actors": [
    "user_123"
  ],
  "archived_at": null,
  "channel_id": "123e4567-e89b-12d3-a456-426614174000",
  "clicked_at": null,
  "data": {
    "foo": "bar"
  },
  "engagement_statuses": [
    "seen"
  ],
  "id": "1jNaXzB2RZX3LY8wVQnfCKyPnv7",
  "inserted_at": "2021-01-01T00:00:00Z",
  "interacted_at": null,
  "link_clicked_at": null,
  "metadata": {
    "external_id": "123e4567-e89b-12d3-a456-426614174000"
  },
  "read_at": null,
  "recipient": "user_123",
  "scheduled_at": null,
  "seen_at": "2025-01-01T00:01:00Z",
  "source": {
    "__typename": "NotificationSource",
    "categories": [
      "collaboration"
    ],
    "key": "comment-created",
    "step_ref": "email_step_1",
    "version_id": "123e4567-e89b-12d3-a456-426614174000"
  },
  "status": "sent",
  "tenant": "tenant_123",
  "updated_at": "2021-01-01T00:00:00Z",
  "workflow": "comment-created"
}
```

<h3 id="unarchive-message-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="unarchive-message-1-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|__typename|string|true|none|The typename of the schema.|
|actors|[[RecipientReference](#schemarecipientreference)]|false|none|One or more actors that are associated with this message. Note: this is a list that can contain up to 10 actors if the message is produced from a [batch](/designing-workflows/batch-function).|
|archived_at|string(date-time) \| null|false|none|Timestamp when the message was archived.|
|channel|object|false|none|A configured channel, which is a way to route messages to a provider.|
|» created_at|string(date-time)|true|none|The timestamp of when the channel was created.|
|» id|string|true|none|The unique identifier for the channel.|
|» key|string \| null|false|none|Unique identifier for the channel within a project (immutable once created).|
|» name|string \| null|false|none|The human-readable name of the channel.|
|» provider|string|true|none|The ID of the provider that this channel uses to deliver messages.|
|» type|string|true|none|The type of channel, determining what kind of messages it can send.|
|» updated_at|string(date-time)|true|none|The timestamp of when the channel was last updated.|
|channel_id|string(uuid)|true|none|**Deprecated.** Deprecated, use channel.id instead.|
|clicked_at|string(date-time) \| null|false|none|Timestamp when the message was clicked.|
|data|object \| null|false|none|Data associated with the message’s workflow run. Includes the workflow trigger request’s `data` payload merged with any additional data returned by a [fetch function](/designing-workflows/fetch-function). For messages produced after a [batch step](/designing-workflows/batch-function), includes the payload `data` from the most-recent trigger request (the final `activity` in the batch).|
|engagement_statuses|[string]|true|none|A list of engagement statuses.|
|id|string|true|none|The unique identifier for the message.|
|inserted_at|string(date-time)|true|none|Timestamp when the resource was created.|
|interacted_at|string(date-time) \| null|false|none|Timestamp when the message was interacted with.|
|link_clicked_at|string(date-time) \| null|false|none|Timestamp when a link in the message was clicked.|
|metadata|object \| null|false|none|The metadata associated with the message.|
|read_at|string(date-time) \| null|false|none|Timestamp when the message was read.|
|recipient|[RecipientReference](#schemarecipientreference)|true|none|A reference to a recipient, either a user identifier (string) or an object reference (ID, collection).|
|recipient_snapshot|object \| null|false|none|The destination the message was delivered to, captured at send time. Email channels carry `email`/`name`; chat channels carry the destination `channel_id` or `user_id`, or `via_incoming_webhook`. Null when no snapshot was captured.|
|» channel_id|string \| null|false|none|The chat channel the message was delivered to (chat channels)|
|» email|string \| null|false|none|The email address the message was delivered to (email channels)|
|» name|string \| null|false|none|The recipient name at send time (email channels)|
|» user_id|string \| null|false|none|The chat user the message was direct-messaged to (chat channels)|
|» via_incoming_webhook|boolean \| null|false|none|Whether the chat message was delivered via an incoming webhook|
|scheduled_at|string(date-time) \| null|false|none|Timestamp when the message was scheduled to be sent.|
|seen_at|string(date-time) \| null|false|none|Timestamp when the message was seen.|
|source|object|true|none|The workflow or guide that triggered the message.|
|» __typename|string|true|none|none|
|» branch_path|[object]|false|none|The branch ancestry of the step that generated the message, outermost first. Each segment is the branching step and the branch taken. Omitted when the step is not nested under a branch.|
|» » branch_id|string(uuid)|true|none|The ID of the branch taken.|
|» » step_ref|string|true|none|The reference of the branching step.|
|» » step_type|string|true|none|The type of the branching step.|
|» categories|[string]|true|none|The categories associated with the message.|
|» key|string|true|none|The key of the workflow or guide that triggered the message.|
|» step_ref|string \| null|false|none|The step reference for the step in the workflow that generated the message.|
|» type|string|false|none|Whether this message was generated from a workflow, broadcast, or guide.|
|» version_id|string(uuid)|true|none|The ID of the version of the workflow or guide that triggered the message.|
|» workflow_recipient_run_id|string(uuid) \| null|false|none|The unique identifier for the workflow recipient run that generated this message. Only present for workflow/broadcast messages.|
|» workflow_run_id|string(uuid) \| null|false|none|The unique identifier for the workflow run that generated this message. Only present for workflow/broadcast messages.|
|status|string|true|none|The message delivery status.|
|tenant|string \| null|false|none|The ID of the `tenant` associated with the message. Only present when a `tenant` is provided on a workflow trigger request.|
|updated_at|string(date-time)|true|none|The timestamp when the resource was last updated.|
|workflow|string \| null|false|none|**Deprecated.** The key of the workflow that generated the message.|

#### Enumerated Values

|Property|Value|
|---|---|
|» type|email|
|» type|in_app|
|» type|in_app_feed|
|» type|in_app_guide|
|» type|sms|
|» type|push|
|» type|chat|
|» type|http|
|engagement_statuses|seen|
|engagement_statuses|read|
|engagement_statuses|interacted|
|engagement_statuses|link_clicked|
|engagement_statuses|archived|
|» type|broadcast|
|» type|workflow|
|» type|guide|
|status|queued|
|status|sent|
|status|delivered|
|status|delivery_attempted|
|status|undelivered|
|status|not_sent|
|status|bounced|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

<h1 id="knock-api-objects">Objects</h1>

An object represents a resource in your system that you want to map into Knock.

## Get an object

<a id="opIdgetObject"></a>

> Code samples

```bash
curl https://api.knock.app/v1/objects/string/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/objects/{collection}/{id}`

Retrieves a specific object by its ID from the specified collection. Returns the object with all its properties.

<h3 id="get-an-object-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|collection|path|string|true|The collection this object belongs to.|
|id|path|string|true|Unique identifier for the object.|

> Example responses

> 200 Response

```json
{
  "__typename": "Object",
  "collection": "assets",
  "created_at": null,
  "id": "specimen_25",
  "properties": {
    "classification": "Theropod",
    "config": {
      "biz": "baz",
      "foo": "bar"
    },
    "name": "Velociraptor",
    "status": "contained"
  },
  "updated_at": "2024-05-22T12:00:00Z"
}
```

<h3 id="get-an-object-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[Object](#schemaobject)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

## Set an object

<a id="opIdsetObject"></a>

> Code samples

```bash
curl https://api.knock.app/v1/objects/string/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "channel_data": {
      "97c5837d-c65c-4d54-aa39-080eeb81c69d": {
        "tokens": [
          "push_token_123"
        ]
      }
    },
    "description": "My product description",
    "locale": "en-US",
    "name": "My product",
    "preferences": {
      "default": {
        "channel_types": {
          "email": true
        },
        "workflows": {
          "dinosaurs-loose": {
            "channel_types": {
              "email": true
            }
          }
        }
      }
    },
    "price": 100,
    "timezone": "America/New_York"
  }'
```

`PUT /v1/objects/{collection}/{id}`

Creates a new object or updates an existing one in the specified collection. This operation is used to identify objects with their properties, as well as optional preferences and channel data.

> Body parameter

```json
{
  "channel_data": {
    "97c5837d-c65c-4d54-aa39-080eeb81c69d": {
      "tokens": [
        "push_token_123"
      ]
    }
  },
  "description": "My product description",
  "locale": "en-US",
  "name": "My product",
  "preferences": {
    "default": {
      "channel_types": {
        "email": true
      },
      "workflows": {
        "dinosaurs-loose": {
          "channel_types": {
            "email": true
          }
        }
      }
    }
  },
  "price": 100,
  "timezone": "America/New_York"
}
```

<h3 id="set-an-object-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|collection|path|string|true|The collection this object belongs to.|
|id|path|string|true|Unique identifier for the object.|
|body|body|[SetObjectRequest](#schemasetobjectrequest)|true|Params|
|» channel_data|body|[InlineChannelDataRequest](#schemainlinechanneldatarequest)|false|A request to set channel data for a type of channel inline.|
|» locale|body|string \| null|false|The locale of the object. Used for [message localization](/concepts/translations).|
|» name|body|string \| null|false|An optional name for the object.|
|» preferences|body|[InlinePreferenceSetRequest](#schemainlinepreferencesetrequest)|false|Inline set preferences for a recipient, where the key is the preference set id. Preferences that are set inline will be merged into any existing preferences rather than replacing them.|
|» timezone|body|string \| null|false|The timezone of the object. Must be a valid [tz database time zone string](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones). Used for [recurring schedules](/concepts/schedules#scheduling-workflows-with-recurring-schedules-for-recipients).|

> Example responses

> 200 Response

```json
{
  "__typename": "Object",
  "collection": "assets",
  "created_at": null,
  "id": "specimen_25",
  "properties": {
    "classification": "Theropod",
    "config": {
      "biz": "baz",
      "foo": "bar"
    },
    "name": "Velociraptor",
    "status": "contained"
  },
  "updated_at": "2024-05-22T12:00:00Z"
}
```

<h3 id="set-an-object-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[Object](#schemaobject)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

## Delete an object

<a id="opIddeleteObject"></a>

> Code samples

```bash
curl https://api.knock.app/v1/objects/string/string \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /v1/objects/{collection}/{id}`

Permanently removes an object from the specified collection. This operation cannot be undone.

<h3 id="delete-an-object-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|collection|path|string|true|The collection this object belongs to.|
|id|path|string|true|Unique identifier for the object.|

<h3 id="delete-an-object-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

## Update categories in preference set

<a id="opIdupdateObjectPreferenceCategories"></a>

> Code samples

```bash
curl 'https://api.knock.app/v1/objects/{collection}/{object_id}/preferences/{id}/categories' \
  -X PUT \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`PUT /v1/objects/{collection}/{object_id}/preferences/{id}/categories`

<aside class="warning">
This operation is deprecated
</aside>

Updates the category preferences for an object's preference set.

> Example responses

> 200 Response

```json
{
  "categories": {
    "marketing": false,
    "transactional": {
      "channel_types": {
        "email": false
      }
    }
  },
  "channel_types": {
    "email": true,
    "push": false,
    "sms": {
      "conditions": [
        {
          "argument": "US",
          "operator": "equal_to",
          "variable": "recipient.country_code"
        }
      ]
    }
  },
  "commercial_subscribed": true,
  "id": "default",
  "workflows": null
}
```

<h3 id="update-categories-in-preference-set-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[PreferenceSet](#schemapreferenceset)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

## Bulk delete objects

<a id="opIdbulkDeleteObjects"></a>

> Code samples

```bash
curl https://api.knock.app/v1/objects/string/bulk/delete \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "object_ids": [
      "obj_123",
      "obj_456",
      "obj_789"
    ]
  }'
```

`POST /v1/objects/{collection}/bulk/delete`

Bulk deletes objects from the specified collection.

> Body parameter

```json
{
  "object_ids": [
    "obj_123",
    "obj_456",
    "obj_789"
  ]
}
```

<h3 id="bulk-delete-objects-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|collection|path|string|true|The collection this object belongs to.|
|body|body|[BulkDeleteObjectsRequest](#schemabulkdeleteobjectsrequest)|true|Params|
|» object_ids|body|[string]|true|List of object IDs to delete.|

> Example responses

> 200 Response

```json
{
  "__typename": "BulkOperation",
  "completed_at": null,
  "error_count": 0,
  "error_items": [],
  "estimated_total_rows": 1000,
  "failed_at": null,
  "id": "123e4567-e89b-12d3-a456-426614174000",
  "inserted_at": "2024-05-22T12:00:00Z",
  "name": "Bulk operation name",
  "processed_rows": 0,
  "progress_path": "https://api.switchboard.com/v1/bulk_operations/123e4567-e89b-12d3-a456-426614174000",
  "started_at": null,
  "status": "processing",
  "success_count": 0,
  "updated_at": "2024-05-22T12:00:00Z"
}
```

<h3 id="bulk-delete-objects-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[BulkOperation](#schemabulkoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

## Update a category preference

<a id="opIdupdateObjectPreferenceCategory"></a>

> Code samples

```bash
curl 'https://api.knock.app/v1/objects/{collection}/{object_id}/preferences/{id}/categories/{key}' \
  -X PUT \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`PUT /v1/objects/{collection}/{object_id}/preferences/{id}/categories/{key}`

<aside class="warning">
This operation is deprecated
</aside>

Updates a specific category preference for an object's preference set. Deprecated.

> Example responses

> 200 Response

```json
{
  "categories": {
    "marketing": false,
    "transactional": {
      "channel_types": {
        "email": false
      }
    }
  },
  "channel_types": {
    "email": true,
    "push": false,
    "sms": {
      "conditions": [
        {
          "argument": "US",
          "operator": "equal_to",
          "variable": "recipient.country_code"
        }
      ]
    }
  },
  "commercial_subscribed": true,
  "id": "default",
  "workflows": null
}
```

<h3 id="update-a-category-preference-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[PreferenceSet](#schemapreferenceset)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

## List preference sets

<a id="opIdlistObjectPreferenceSets"></a>

> Code samples

```bash
curl https://api.knock.app/v1/objects/string/string/preferences \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/objects/{collection}/{object_id}/preferences`

Returns a paginated list of preference sets for the specified object.

<h3 id="list-preference-sets-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|object_id|path|string|true|Unique identifier for the object.|
|collection|path|string|true|The collection this object belongs to.|

> Example responses

> 200 Response

```json
[
  {
    "categories": {
      "marketing": false,
      "transactional": {
        "channel_types": {
          "email": false
        }
      }
    },
    "channel_types": {
      "email": true,
      "push": false,
      "sms": {
        "conditions": [
          {
            "argument": "US",
            "operator": "equal_to",
            "variable": "recipient.country_code"
          }
        ]
      }
    },
    "commercial_subscribed": true,
    "id": "default",
    "workflows": null
  }
]
```

<h3 id="list-preference-sets-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="list-preference-sets-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[PreferenceSet](#schemapreferenceset)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

## Update workflows in preference set

<a id="opIdupdateObjectPreferenceWorkflows"></a>

> Code samples

```bash
curl 'https://api.knock.app/v1/objects/{collection}/{object_id}/preferences/{id}/workflows' \
  -X PUT \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`PUT /v1/objects/{collection}/{object_id}/preferences/{id}/workflows`

<aside class="warning">
This operation is deprecated
</aside>

Updates the workflow preferences for an object's preference set.

> Example responses

> 200 Response

```json
{
  "categories": {
    "marketing": false,
    "transactional": {
      "channel_types": {
        "email": false
      }
    }
  },
  "channel_types": {
    "email": true,
    "push": false,
    "sms": {
      "conditions": [
        {
          "argument": "US",
          "operator": "equal_to",
          "variable": "recipient.country_code"
        }
      ]
    }
  },
  "commercial_subscribed": true,
  "id": "default",
  "workflows": null
}
```

<h3 id="update-workflows-in-preference-set-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[PreferenceSet](#schemapreferenceset)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

## Bulk delete subscriptions

<a id="opIdbulkDeleteSubscriptions"></a>

> Code samples

```bash
curl https://api.knock.app/v1/objects/projects/bulk/subscriptions/delete \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "subscriptions": [
      {
        "id": "subscribed-to-object-1",
        "recipients": [
          {
            "collection": "projects",
            "id": "subscriber-project-1"
          },
          "subscriber-user-1"
        ]
      },
      {
        "id": "subscribed-to-object-2",
        "recipients": [
          "subscriber-user-2"
        ]
      }
    ]
  }'
```

`POST /v1/objects/{collection}/bulk/subscriptions/delete`

Delete subscriptions for many objects in a single collection type. If a subscription for an object in the collection doesn't exist, it will be skipped.

> Body parameter

```json
{
  "subscriptions": [
    {
      "id": "subscribed-to-object-1",
      "recipients": [
        {
          "collection": "projects",
          "id": "subscriber-project-1"
        },
        "subscriber-user-1"
      ]
    },
    {
      "id": "subscribed-to-object-2",
      "recipients": [
        "subscriber-user-2"
      ]
    }
  ]
}
```

<h3 id="bulk-delete-subscriptions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|collection|path|string|true|The collection this object belongs to.|
|body|body|[BulkDeleteSubscriptionsRequest](#schemabulkdeletesubscriptionsrequest)|true|Params|
|» subscriptions|body|[object]|true|A nested list of subscriptions.|
|» » id|body|string|true|Unique identifier for the object.|
|» » recipients|body|[[RecipientReference](#schemarecipientreference)]|true|The recipients of the subscription. You can subscribe up to 100 recipients to an object at a time.|

> Example responses

> 200 Response

```json
{
  "__typename": "BulkOperation",
  "completed_at": null,
  "error_count": 0,
  "error_items": [],
  "estimated_total_rows": 1000,
  "failed_at": null,
  "id": "123e4567-e89b-12d3-a456-426614174000",
  "inserted_at": "2024-05-22T12:00:00Z",
  "name": "Bulk operation name",
  "processed_rows": 0,
  "progress_path": "https://api.switchboard.com/v1/bulk_operations/123e4567-e89b-12d3-a456-426614174000",
  "started_at": null,
  "status": "processing",
  "success_count": 0,
  "updated_at": "2024-05-22T12:00:00Z"
}
```

<h3 id="bulk-delete-subscriptions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[BulkOperation](#schemabulkoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

## List objects in a collection

<a id="opIdlistObjects"></a>

> Code samples

```bash
curl https://api.knock.app/v1/objects/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/objects/{collection}`

Returns a paginated list of objects from the specified collection. Optionally includes preference data for the objects.

<h3 id="list-objects-in-a-collection-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|after|query|string|false|The cursor to fetch entries after.|
|before|query|string|false|The cursor to fetch entries before.|
|page_size|query|integer|false|The number of items per page (defaults to 50).|
|collection|path|string|true|The collection this object belongs to.|
|include|query|[string]|false|Includes preferences of the objects in the response.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|include|preferences|

> Example responses

> 200 Response

```json
{
  "entries": [
    {
      "__typename": "Object",
      "collection": "assets",
      "created_at": null,
      "id": "specimen_25",
      "properties": {
        "classification": "Theropod",
        "config": {
          "biz": "baz",
          "foo": "bar"
        },
        "name": "Velociraptor",
        "status": "contained"
      },
      "updated_at": "2024-05-22T12:00:00Z"
    }
  ],
  "page_info": {
    "__typename": "PageInfo",
    "after": null,
    "before": null,
    "page_size": 25
  }
}
```

<h3 id="list-objects-in-a-collection-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[ListObjectsResponse](#schemalistobjectsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

## Update a channel type preference

<a id="opIdupdateObjectPreferenceChannelType"></a>

> Code samples

```bash
curl 'https://api.knock.app/v1/objects/{collection}/{object_id}/preferences/{id}/channel_types/{type}' \
  -X PUT \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`PUT /v1/objects/{collection}/{object_id}/preferences/{id}/channel_types/{type}`

<aside class="warning">
This operation is deprecated
</aside>

Updates a specific channel type preference for an object's preference set.

> Example responses

> 200 Response

```json
{
  "categories": {
    "marketing": false,
    "transactional": {
      "channel_types": {
        "email": false
      }
    }
  },
  "channel_types": {
    "email": true,
    "push": false,
    "sms": {
      "conditions": [
        {
          "argument": "US",
          "operator": "equal_to",
          "variable": "recipient.country_code"
        }
      ]
    }
  },
  "commercial_subscribed": true,
  "id": "default",
  "workflows": null
}
```

<h3 id="update-a-channel-type-preference-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[PreferenceSet](#schemapreferenceset)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

## Update channel types in preference set

<a id="opIdupdateObjectPreferenceChannelTypes"></a>

> Code samples

```bash
curl 'https://api.knock.app/v1/objects/{collection}/{object_id}/preferences/{id}/channel_types' \
  -X PUT \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`PUT /v1/objects/{collection}/{object_id}/preferences/{id}/channel_types`

<aside class="warning">
This operation is deprecated
</aside>

Updates the channel type preferences for an object's preference set.

> Example responses

> 200 Response

```json
{
  "categories": {
    "marketing": false,
    "transactional": {
      "channel_types": {
        "email": false
      }
    }
  },
  "channel_types": {
    "email": true,
    "push": false,
    "sms": {
      "conditions": [
        {
          "argument": "US",
          "operator": "equal_to",
          "variable": "recipient.country_code"
        }
      ]
    }
  },
  "commercial_subscribed": true,
  "id": "default",
  "workflows": null
}
```

<h3 id="update-channel-types-in-preference-set-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[PreferenceSet](#schemapreferenceset)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

## Update a workflow preference

<a id="opIdupdateObjectPreferenceWorkflow"></a>

> Code samples

```bash
curl 'https://api.knock.app/v1/objects/{collection}/{object_id}/preferences/{id}/workflows/{key}' \
  -X PUT \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`PUT /v1/objects/{collection}/{object_id}/preferences/{id}/workflows/{key}`

<aside class="warning">
This operation is deprecated
</aside>

Updates a specific workflow preference for an object's preference set.

> Example responses

> 200 Response

```json
{
  "categories": {
    "marketing": false,
    "transactional": {
      "channel_types": {
        "email": false
      }
    }
  },
  "channel_types": {
    "email": true,
    "push": false,
    "sms": {
      "conditions": [
        {
          "argument": "US",
          "operator": "equal_to",
          "variable": "recipient.country_code"
        }
      ]
    }
  },
  "commercial_subscribed": true,
  "id": "default",
  "workflows": null
}
```

<h3 id="update-a-workflow-preference-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[PreferenceSet](#schemapreferenceset)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

## Get object preference set

<a id="opIdgetObjectPreferenceSet"></a>

> Code samples

```bash
curl https://api.knock.app/v1/objects/string/string/preferences/default \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/objects/{collection}/{object_id}/preferences/{id}`

Returns the preference set for the specified object and preference set `id`.

<h3 id="get-object-preference-set-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|object_id|path|string|true|Unique identifier for the object.|
|collection|path|string|true|The collection this object belongs to.|
|id|path|string|true|Unique identifier for the preference set.|

> Example responses

> 200 Response

```json
{
  "categories": {
    "marketing": false,
    "transactional": {
      "channel_types": {
        "email": false
      }
    }
  },
  "channel_types": {
    "email": true,
    "push": false,
    "sms": {
      "conditions": [
        {
          "argument": "US",
          "operator": "equal_to",
          "variable": "recipient.country_code"
        }
      ]
    }
  },
  "commercial_subscribed": true,
  "id": "default",
  "workflows": null
}
```

<h3 id="get-object-preference-set-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[PreferenceSet](#schemapreferenceset)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

## Update a preference set

<a id="opIdupdateObjectPreferenceSet"></a>

> Code samples

```bash
curl https://api.knock.app/v1/objects/string/string/preferences/default \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "__persistence_strategy__": "merge",
    "categories": {
      "marketing": false,
      "transactional": {
        "channel_types": {
          "email": false
        }
      }
    },
    "channel_types": {
      "email": true
    },
    "channels": {
      "2f641633-95d3-4555-9222-9f1eb7888a80": {
        "conditions": [
          {
            "argument": "US",
            "operator": "equal_to",
            "variable": "recipient.country_code"
          }
        ]
      },
      "aef6e715-df82-4ab6-b61e-b743e249f7b6": true
    },
    "commercial_subscribed": true,
    "workflows": {
      "dinosaurs-loose": {
        "channel_types": {
          "email": false
        }
      }
    }
  }'
```

`PUT /v1/objects/{collection}/{object_id}/preferences/{id}`

Sets preferences within the given preference set. By default, this is a destructive operation and will replace any existing preferences with the preferences given. Use '__persistence_strategy': 'merge' to merge with existing preferences instead. If no object exists in the current environment for the given `:collection` and `:object_id`, Knock will create the object as part of this request. The preference set `:id` can be either `default` or a `tenant.id`. Learn more about [per-tenant preferences](/preferences/tenant-preferences).

> Body parameter

```json
{
  "__persistence_strategy__": "merge",
  "categories": {
    "marketing": false,
    "transactional": {
      "channel_types": {
        "email": false
      }
    }
  },
  "channel_types": {
    "email": true
  },
  "channels": {
    "2f641633-95d3-4555-9222-9f1eb7888a80": {
      "conditions": [
        {
          "argument": "US",
          "operator": "equal_to",
          "variable": "recipient.country_code"
        }
      ]
    },
    "aef6e715-df82-4ab6-b61e-b743e249f7b6": true
  },
  "commercial_subscribed": true,
  "workflows": {
    "dinosaurs-loose": {
      "channel_types": {
        "email": false
      }
    }
  }
}
```

<h3 id="update-a-preference-set-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|object_id|path|string|true|Unique identifier for the object.|
|collection|path|string|true|The collection this object belongs to.|
|id|path|string|true|Unique identifier for the preference set.|
|body|body|[PreferenceSetRequest](#schemapreferencesetrequest)|true|Params|
|» __persistence_strategy__|body|string|false|Controls how the preference set is persisted. 'replace' will completely replace the preference set, 'merge' will merge with existing preferences.|
|» categories|body|object \| object \| null|false|An object where the key is the category and the values are the preference settings for that category.|
|» » *anyOf*|body|object|false|An object where the key is the category and the values are the preference settings for that category.|
|» » **additionalProperties**|body|[PreferenceSetWorkflowCategorySetting](#schemapreferencesetworkflowcategorysetting)|false|Workflow or category preferences within a preference set|
|» » *anyOf*|body|object \| null|false|none|
|» channel_types|body|[PreferenceSetChannelTypes](#schemapreferencesetchanneltypes) \| object \| null|false|An object where the key is the channel type and the values are the preference settings for that channel type.|
|» » *anyOf*|body|[PreferenceSetChannelTypes](#schemapreferencesetchanneltypes)|false|Channel type preferences.|
|» » *anyOf*|body|object \| null|false|none|
|» channels|body|[PreferenceSetChannels](#schemapreferencesetchannels) \| object \| null|false|An object where the key is the channel ID and the values are the preference settings for that channel ID.|
|» » *anyOf*|body|[PreferenceSetChannels](#schemapreferencesetchannels)|false|Channel preferences.|
|» » *anyOf*|body|object \| null|false|none|
|» commercial_subscribed|body|boolean \| [PreferenceSetCommercialSubscribedSetting](#schemapreferencesetcommercialsubscribedsetting) \| object \| null|false|Whether the recipient is subscribed to commercial communications. When false, the recipient will not receive commercial workflow notifications. Can also be set to a settings object with conditions that are evaluated at notification send time.|
|» » *anyOf*|body|boolean|false|none|
|» » *anyOf*|body|[PreferenceSetCommercialSubscribedSetting](#schemapreferencesetcommercialsubscribedsetting)|false|A set of settings for the commercial subscribed preference. Currently, this can only be a list of conditions to apply.|
|» » *anyOf*|body|object \| null|false|none|
|» workflows|body|object \| object \| null|false|An object where the key is the workflow key and the values are the preference settings for that workflow.|
|» » *anyOf*|body|object|false|An object where the key is the workflow key and the values are the preference settings for that workflow.|
|» » **additionalProperties**|body|[PreferenceSetWorkflowCategorySetting](#schemapreferencesetworkflowcategorysetting)|false|Workflow or category preferences within a preference set|
|» » *anyOf*|body|object \| null|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» __persistence_strategy__|merge|
|» __persistence_strategy__|replace|

> Example responses

> 200 Response

```json
{
  "categories": {
    "marketing": false,
    "transactional": {
      "channel_types": {
        "email": false
      }
    }
  },
  "channel_types": {
    "email": true,
    "push": false,
    "sms": {
      "conditions": [
        {
          "argument": "US",
          "operator": "equal_to",
          "variable": "recipient.country_code"
        }
      ]
    }
  },
  "commercial_subscribed": true,
  "id": "default",
  "workflows": null
}
```

<h3 id="update-a-preference-set-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[PreferenceSet](#schemapreferenceset)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

## Delete object preference set

<a id="opIddeleteObjectPreferenceSet"></a>

> Code samples

```bash
curl https://api.knock.app/v1/objects/string/string/preferences/default \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /v1/objects/{collection}/{object_id}/preferences/{id}`

Unsets the preference set for the object, removing it entirely.

<h3 id="delete-object-preference-set-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|object_id|path|string|true|Unique identifier for the object.|
|collection|path|string|true|The collection this object belongs to.|
|id|path|string|true|Unique identifier for the preference set.|

<h3 id="delete-object-preference-set-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

## Bulk set objects

<a id="opIdbulkSetObjects"></a>

> Code samples

```bash
curl https://api.knock.app/v1/objects/string/bulk/set \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "objects": [
      {
        "id": "project_1",
        "name": "My project"
      }
    ]
  }'
```

`POST /v1/objects/{collection}/bulk/set`

Bulk sets up to 1,000 objects at a time in the specified collection.

> Body parameter

```json
{
  "objects": [
    {
      "id": "project_1",
      "name": "My project"
    }
  ]
}
```

<h3 id="bulk-set-objects-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|collection|path|string|true|The collection this object belongs to.|
|body|body|[BulkSetObjectsRequest](#schemabulksetobjectsrequest)|true|Params|
|» objects|body|[[BulkSetObjectRequest](#schemabulksetobjectrequest)]|true|A list of objects.|

> Example responses

> 200 Response

```json
{
  "__typename": "BulkOperation",
  "completed_at": null,
  "error_count": 0,
  "error_items": [],
  "estimated_total_rows": 1000,
  "failed_at": null,
  "id": "123e4567-e89b-12d3-a456-426614174000",
  "inserted_at": "2024-05-22T12:00:00Z",
  "name": "Bulk operation name",
  "processed_rows": 0,
  "progress_path": "https://api.switchboard.com/v1/bulk_operations/123e4567-e89b-12d3-a456-426614174000",
  "started_at": null,
  "status": "processing",
  "success_count": 0,
  "updated_at": "2024-05-22T12:00:00Z"
}
```

<h3 id="bulk-set-objects-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[BulkOperation](#schemabulkoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

## Create schedules in bulk

<a id="opIdbulkCreateSchedules"></a>

> Code samples

```bash
curl https://api.knock.app/v1/schedules/bulk/create \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "schedules": [
      {
        "data": {
          "key": "value"
        },
        "ending_at": null,
        "recipient": "dnedry",
        "repeats": [
          {
            "__typename": "ScheduleRepeat",
            "day_of_month": null,
            "days": [
              "mon",
              "tue",
              "wed",
              "thu",
              "fri",
              "sat",
              "sun"
            ],
            "frequency": "daily",
            "hours": null,
            "interval": 1,
            "minutes": null
          }
        ],
        "scheduled_at": null,
        "tenant": "acme_corp",
        "workflow": "comment-created"
      },
      {
        "data": {
          "key": "value"
        },
        "ending_at": null,
        "recipient": "esattler",
        "repeats": [
          {
            "__typename": "ScheduleRepeat",
            "day_of_month": null,
            "days": [
              "mon",
              "tue",
              "wed",
              "thu",
              "fri",
              "sat",
              "sun"
            ],
            "frequency": "daily",
            "hours": null,
            "interval": 1,
            "minutes": null
          }
        ],
        "scheduled_at": null,
        "tenant": "acme_corp",
        "workflow": "comment-created"
      }
    ]
  }'
```

`POST /v1/schedules/bulk/create`

Bulk creates up to 1,000 schedules at a time. This endpoint also handles [inline identifications](/managing-recipients/identifying-recipients#inline-identifying-recipients) for the `actor`, `recipient`, and `tenant` fields.

> Body parameter

```json
{
  "schedules": [
    {
      "data": {
        "key": "value"
      },
      "ending_at": null,
      "recipient": "dnedry",
      "repeats": [
        {
          "__typename": "ScheduleRepeat",
          "day_of_month": null,
          "days": [
            "mon",
            "tue",
            "wed",
            "thu",
            "fri",
            "sat",
            "sun"
          ],
          "frequency": "daily",
          "hours": null,
          "interval": 1,
          "minutes": null
        }
      ],
      "scheduled_at": null,
      "tenant": "acme_corp",
      "workflow": "comment-created"
    },
    {
      "data": {
        "key": "value"
      },
      "ending_at": null,
      "recipient": "esattler",
      "repeats": [
        {
          "__typename": "ScheduleRepeat",
          "day_of_month": null,
          "days": [
            "mon",
            "tue",
            "wed",
            "thu",
            "fri",
            "sat",
            "sun"
          ],
          "frequency": "daily",
          "hours": null,
          "interval": 1,
          "minutes": null
        }
      ],
      "scheduled_at": null,
      "tenant": "acme_corp",
      "workflow": "comment-created"
    }
  ]
}
```

<h3 id="create-schedules-in-bulk-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[BulkCreateSchedulesRequest](#schemabulkcreateschedulesrequest)|true|Schedule bulk creation request|
|» schedules|body|[object]|true|A list of schedules.|
|» » actor|body|object|false|A map of properties describing a user or an object to identify in Knock and mark as who or what performed the action.|
|» » » *oneOf*|body|[RecipientRequest](#schemarecipientrequest)|false|Specifies a recipient in a request. This can either be a user identifier (string), an inline user request (object), or an inline object request, which is determined by the presence of a `collection` property.|
|» » » *oneOf*|body|object \| null|false|none|
|» » data|body|object \| null|false|An optional map of data to pass into the workflow execution. There is a 10MB limit on the size of the full `data` payload. Any individual string value greater than 1024 bytes in length will be [truncated](/developer-tools/api-logs#log-truncation) in your logs.|
|» » ending_at|body|string(date-time) \| null|false|The ending date and time for the schedule.|
|» » recipient|body|[RecipientRequest](#schemarecipientrequest)|false|Specifies a recipient in a request. This can either be a user identifier (string), an inline user request (object), or an inline object request, which is determined by the presence of a `collection` property.|
|» » repeats|body|[[ScheduleRepeatRule](#schemaschedulerepeatrule)]|false|The repeat rule for the schedule.|
|» » scheduled_at|body|string(date-time) \| null|false|The starting date and time for the schedule.|
|» » tenant|body|[InlineTenantRequest](#schemainlinetenantrequest) \| object \| null|false|The tenant to trigger the workflow for. Triggering with a tenant will use any tenant-level overrides associated with the tenant object, and all messages produced from workflow runs will be tagged with the tenant.|
|» » » *anyOf*|body|[InlineTenantRequest](#schemainlinetenantrequest)|false|An request to set a tenant inline.|
|» » » *anyOf*|body|object \| null|false|none|
|» » workflow|body|string|true|The key of the workflow.|

> Example responses

> 200 Response

```json
{
  "__typename": "BulkOperation",
  "completed_at": null,
  "error_count": 0,
  "error_items": [],
  "estimated_total_rows": 1000,
  "failed_at": null,
  "id": "123e4567-e89b-12d3-a456-426614174000",
  "inserted_at": "2024-05-22T12:00:00Z",
  "name": "Bulk operation name",
  "processed_rows": 0,
  "progress_path": "https://api.switchboard.com/v1/bulk_operations/123e4567-e89b-12d3-a456-426614174000",
  "started_at": null,
  "status": "processing",
  "success_count": 0,
  "updated_at": "2024-05-22T12:00:00Z"
}
```

<h3 id="create-schedules-in-bulk-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[BulkOperation](#schemabulkoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

## Bulk add subscriptions

<a id="opIdbulkAddSubscriptions"></a>

> Code samples

```bash
curl https://api.knock.app/v1/objects/projects/bulk/subscriptions/add \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "subscriptions": [
      {
        "id": "project-1",
        "properties": null,
        "recipients": [
          {
            "id": "user_1"
          }
        ]
      }
    ]
  }'
```

`POST /v1/objects/{collection}/bulk/subscriptions/add`

Add subscriptions for all objects in a single collection. If a subscription for an object in the collection already exists, it will be updated. This endpoint also handles [inline identifications](/managing-recipients/identifying-recipients#inline-identifying-recipients) for the `recipient` field.

> Body parameter

```json
{
  "subscriptions": [
    {
      "id": "project-1",
      "properties": null,
      "recipients": [
        {
          "id": "user_1"
        }
      ]
    }
  ]
}
```

<h3 id="bulk-add-subscriptions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|collection|path|string|true|The collection this object belongs to.|
|body|body|[BulkUpsertSubscriptionsRequest](#schemabulkupsertsubscriptionsrequest)|true|Params|
|» subscriptions|body|[object]|true|A nested list of subscriptions.|
|» » id|body|string|true|Unique identifier for the object.|
|» » properties|body|object \| null|false|The custom properties associated with the subscription relationship.|
|» » recipients|body|[[RecipientRequest](#schemarecipientrequest)]|true|The recipients of the subscription. You can subscribe up to 100 recipients to an object at a time.|

> Example responses

> 200 Response

```json
{
  "__typename": "BulkOperation",
  "completed_at": null,
  "error_count": 0,
  "error_items": [],
  "estimated_total_rows": 1000,
  "failed_at": null,
  "id": "123e4567-e89b-12d3-a456-426614174000",
  "inserted_at": "2024-05-22T12:00:00Z",
  "name": "Bulk operation name",
  "processed_rows": 0,
  "progress_path": "https://api.switchboard.com/v1/bulk_operations/123e4567-e89b-12d3-a456-426614174000",
  "started_at": null,
  "status": "processing",
  "success_count": 0,
  "updated_at": "2024-05-22T12:00:00Z"
}
```

<h3 id="bulk-add-subscriptions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[BulkOperation](#schemabulkoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

<h1 id="knock-api-providers">Providers</h1>

A provider represents a third-party service that Knock integrates with and is configured via a channel.

## List channels

<a id="opIdlistChannelsForMsTeamsProvider"></a>

> Code samples

```bash
curl 'https://api.knock.app/v1/providers/ms-teams/string/channels?ms_teams_tenant_object=%7B%22collection%22%3A%22projects%22%2C%22object_id%22%3A%22project_123%22%7D&team_id=string' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/providers/ms-teams/{channel_id}/channels`

List the Microsoft Teams channels within a team. By default, archived and private channels are excluded from the results.

<h3 id="list-channels-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|channel_id|path|string|true|The ID of the Knock Microsoft Teams channel to get channels for.|
|ms_teams_tenant_object|query|string|true|A JSON encoded string containing the Microsoft Teams tenant object reference.|
|team_id|query|string|true|Microsoft Teams team ID.|
|query_options.$filter|query|string|false|[OData param](https://learn.microsoft.com/en-us/graph/query-parameters) passed to the Microsoft Graph API to filter channels.|
|query_options.$select|query|string|false|[OData param](https://learn.microsoft.com/en-us/graph/query-parameters) passed to the Microsoft Graph API to select specific properties.|

> Example responses

> 200 Response

```json
{
  "ms_teams_channels": [
    {
      "displayName": "General",
      "id": "channel-id-1"
    }
  ]
}
```

<h3 id="list-channels-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[ChannelsForMsTeamsProviderResponse](#schemachannelsformsteamsproviderresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

## Revoke access

<a id="opIdslackProviderRevokeAccess"></a>

> Code samples

```bash
curl 'https://api.knock.app/v1/providers/slack/string/revoke_access?access_token_object=%7B%22collection%22%3A%22projects%22%2C%22object_id%22%3A%22project_123%22%7D' \
  -X PUT \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`PUT /v1/providers/slack/{channel_id}/revoke_access`

Revoke access for a Slack channel.

<h3 id="revoke-access-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|channel_id|path|string|true|The ID of the Knock Slack channel to revoke access for.|
|access_token_object|query|string|true|A JSON encoded string containing the access token object reference.|

> Example responses

> 200 Response

```json
{
  "ok": "ok"
}
```

> 403 Response

```json
{
  "code": "authorization",
  "message": "Access token not set.",
  "status": 403,
  "type": "authentication_error"
}
```

<h3 id="revoke-access-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|403|Forbidden|Forbidden|Inline|

<h3 id="revoke-access-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|string|false|none|OK response.|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|true|none|The error code.|
|message|string|true|none|The error message.|
|status|integer|true|none|The HTTP status code.|
|type|string|true|none|The error type.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

## Check auth

<a id="opIdmsTeamsProviderAuthCheck"></a>

> Code samples

```bash
curl 'https://api.knock.app/v1/providers/ms-teams/string/auth_check?ms_teams_tenant_object=%7B%22collection%22%3A%22projects%22%2C%22object_id%22%3A%22project_123%22%7D' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/providers/ms-teams/{channel_id}/auth_check`

Check if a connection to Microsoft Teams has been authorized for a given Microsoft Teams tenant object.

<h3 id="check-auth-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|channel_id|path|string|true|The ID of the Knock Microsoft Teams channel to check.|
|ms_teams_tenant_object|query|string|true|A JSON encoded string containing the Microsoft Teams tenant object reference.|

> Example responses

> 200 Response

```json
{
  "connection": {
    "ms_teams_tenant_id": "a Microsoft Teams tenant ID",
    "ok": true
  }
}
```

<h3 id="check-auth-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[MsTeamsAuthCheckResponse](#schemamsteamsauthcheckresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

## Revoke access

<a id="opIdmsTeamsProviderRevokeAccess"></a>

> Code samples

```bash
curl 'https://api.knock.app/v1/providers/ms-teams/string/revoke_access?ms_teams_tenant_object=%7B%22collection%22%3A%22projects%22%2C%22object_id%22%3A%22project_123%22%7D' \
  -X PUT \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`PUT /v1/providers/ms-teams/{channel_id}/revoke_access`

Remove a Microsoft Entra tenant ID from a Microsoft Teams tenant object.

<h3 id="revoke-access-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|channel_id|path|string|true|The ID of the Knock Microsoft Teams channel to revoke access for.|
|ms_teams_tenant_object|query|string|true|A JSON encoded string containing the Microsoft Teams tenant object reference.|

> Example responses

> 200 Response

```json
{
  "ok": "ok"
}
```

> 403 Response

```json
{
  "code": "authorization",
  "message": "Access token not set.",
  "status": 403,
  "type": "authentication_error"
}
```

<h3 id="revoke-access-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|403|Forbidden|Forbidden|Inline|

<h3 id="revoke-access-1-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|string|false|none|OK response.|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|true|none|The error code.|
|message|string|true|none|The error message.|
|status|integer|true|none|The HTTP status code.|
|type|string|true|none|The error type.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

## List teams

<a id="opIdlistTeamsForMsTeamsProvider"></a>

> Code samples

```bash
curl 'https://api.knock.app/v1/providers/ms-teams/string/teams?ms_teams_tenant_object=%7B%22collection%22%3A%22projects%22%2C%22object_id%22%3A%22project_123%22%7D' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/providers/ms-teams/{channel_id}/teams`

Get a list of teams belonging to the Microsoft Entra tenant. By default, archived and private channels are excluded from the results.

<h3 id="list-teams-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|channel_id|path|string|true|The ID of the Knock Microsoft Teams channel to get teams for.|
|ms_teams_tenant_object|query|string|true|A JSON encoded string containing the Microsoft Teams tenant object reference.|
|query_options.$filter|query|string|false|[OData param](https://learn.microsoft.com/en-us/graph/query-parameters) passed to the Microsoft Graph API to filter teams.|
|query_options.$select|query|string|false|[OData param](https://learn.microsoft.com/en-us/graph/query-parameters) passed to the Microsoft Graph API to select fields on a team.|
|query_options.$top|query|integer|false|[OData param](https://learn.microsoft.com/en-us/graph/query-parameters) passed to the Microsoft Graph API to limit the number of teams returned.|
|query_options.$skiptoken|query|string|false|[OData param](https://learn.microsoft.com/en-us/graph/query-parameters) passed to the Microsoft Graph API to retrieve the next page of results.|

> Example responses

> 200 Response

```json
{
  "ms_teams_teams": [
    {
      "displayName": "Engineering Team",
      "id": "team-id-1"
    }
  ],
  "skip_token": "token-for-next-page"
}
```

<h3 id="list-teams-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[TeamsForMsTeamsProviderResponse](#schemateamsformsteamsproviderresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

## Check auth

<a id="opIdslackProviderAuthCheck"></a>

> Code samples

```bash
curl 'https://api.knock.app/v1/providers/slack/string/auth_check?access_token_object=%7B%22collection%22%3A%22projects%22%2C%22object_id%22%3A%22project_123%22%7D' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/providers/slack/{channel_id}/auth_check`

Check if a Slack channel is authenticated.

<h3 id="check-auth-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|channel_id|path|string|true|The ID of the Knock Slack channel to check.|
|access_token_object|query|string|true|A JSON encoded string containing the access token object reference.|

> Example responses

> 200 Response

```json
{
  "connection": {
    "ok": true
  }
}
```

<h3 id="check-auth-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[SlackAuthCheckResponse](#schemaslackauthcheckresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

## List channels

<a id="opIdlistChannelsForSlackProvider"></a>

> Code samples

```bash
curl 'https://api.knock.app/v1/providers/slack/string/channels?access_token_object=%7B%22collection%22%3A%22projects%22%2C%22object_id%22%3A%22project_123%22%7D' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/providers/slack/{channel_id}/channels`

List Slack channels for a Slack workspace.

<h3 id="list-channels-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|channel_id|path|string|true|The ID of the Knock Slack channel to get channels for.|
|access_token_object|query|string|true|A JSON encoded string containing the access token object reference.|
|query_options.cursor|query|string|false|Paginate through collections of data by setting the cursor parameter to a next_cursor attribute returned by a previous request's response_metadata. Default value fetches the first "page" of the collection.|
|query_options.limit|query|integer|false|The maximum number of channels to return. Defaults to 200.|
|query_options.exclude_archived|query|boolean|false|Set to true to exclude archived channels from the list. Defaults to `true` when not explicitly provided.|
|query_options.types|query|string|false|Mix and match channel types by providing a comma-separated list of any combination of public_channel, private_channel, mpim, im. Defaults to `"public_channel,private_channel"`. If the user's Slack ID is unavailable, this option is ignored and only public channels are returned.|
|query_options.team_id|query|string|false|Encoded team ID (T1234) to list channels in, required if org token is used.|

> Example responses

> 200 Response

```json
{
  "next_cursor": null,
  "slack_channels": [
    {
      "context_team_id": "T01234567890",
      "id": "C01234567890",
      "is_im": false,
      "is_private": false,
      "name": "general"
    }
  ]
}
```

> 403 Response

```json
{
  "code": "authorization",
  "message": "Access token not set.",
  "status": 403,
  "type": "authentication_error"
}
```

<h3 id="list-channels-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[ChannelsForSlackProviderResponse](#schemachannelsforslackproviderresponse)|
|403|Forbidden|Forbidden|Inline|

<h3 id="list-channels-1-responseschema">Response Schema</h3>

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|true|none|The error code.|
|message|string|true|none|The error message.|
|status|integer|true|none|The HTTP status code.|
|type|string|true|none|The error type.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

<h1 id="knock-api-schedules">Schedules</h1>

A schedule is a per-recipient, timezone-aware configuration for when to invoke a workflow.

## List user schedules

<a id="opIdlistUserSchedules"></a>

> Code samples

```bash
curl https://api.knock.app/v1/users/string/schedules \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/users/{user_id}/schedules`

Returns a paginated list of schedules for a specific user, in descending order.

<h3 id="list-user-schedules-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|user_id|path|string|true|The user ID to list schedules for.|
|workflow|query|string|false|The workflow key to filter schedules for.|
|tenant|query|string|false|The tenant ID to filter schedules for.|
|after|query|string|false|The cursor to fetch entries after.|
|before|query|string|false|The cursor to fetch entries before.|
|page_size|query|integer|false|The number of items per page (defaults to 50).|

> Example responses

> 200 Response

```json
{
  "entries": [
    {
      "__typename": "Schedule",
      "actor": null,
      "data": null,
      "id": "123e4567-e89b-12d3-a456-426614174000",
      "inserted_at": "2021-01-01T00:00:00Z",
      "last_occurrence_at": null,
      "next_occurrence_at": null,
      "recipient": {
        "__typename": "User",
        "avatar": null,
        "created_at": null,
        "email": "jane@ingen.net",
        "id": "jane",
        "name": "Jane Doe",
        "phone_number": null,
        "timezone": null,
        "updated_at": "2024-05-22T12:00:00Z"
      },
      "repeats": [
        {
          "__typename": "ScheduleRepeat",
          "day_of_month": null,
          "days": [
            "mon",
            "tue",
            "wed",
            "thu",
            "fri",
            "sat",
            "sun"
          ],
          "frequency": "daily",
          "hours": null,
          "interval": 1,
          "minutes": null
        }
      ],
      "tenant": null,
      "updated_at": "2021-01-01T00:00:00Z",
      "workflow": "workflow_123"
    }
  ],
  "page_info": {
    "__typename": "PageInfo",
    "after": null,
    "before": null,
    "page_size": 25
  }
}
```

<h3 id="list-user-schedules-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[ListSchedulesResponse](#schemalistschedulesresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

## List schedules

<a id="opIdlistSchedules"></a>

> Code samples

```bash
curl 'https://api.knock.app/v1/schedules?workflow=string' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/schedules`

Returns a paginated list of schedules for the current environment, filtered by workflow and optionally by recipients and tenant.

<h3 id="list-schedules-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|workflow|query|string|true|Filter by workflow key.|
|recipients[]|query|[[RecipientReference](#schemarecipientreference)]|false|Filter by recipient references.|
|tenant|query|string|false|Filter by tenant ID.|
|after|query|string|false|The cursor to fetch entries after.|
|before|query|string|false|The cursor to fetch entries before.|
|page_size|query|integer|false|The number of items per page (defaults to 50).|

> Example responses

> 200 Response

```json
{
  "entries": [
    {
      "__typename": "Schedule",
      "actor": null,
      "data": null,
      "id": "123e4567-e89b-12d3-a456-426614174000",
      "inserted_at": "2021-01-01T00:00:00Z",
      "last_occurrence_at": null,
      "next_occurrence_at": null,
      "recipient": {
        "__typename": "User",
        "avatar": null,
        "created_at": null,
        "email": "jane@ingen.net",
        "id": "jane",
        "name": "Jane Doe",
        "phone_number": null,
        "timezone": null,
        "updated_at": "2024-05-22T12:00:00Z"
      },
      "repeats": [
        {
          "__typename": "ScheduleRepeat",
          "day_of_month": null,
          "days": [
            "mon",
            "tue",
            "wed",
            "thu",
            "fri",
            "sat",
            "sun"
          ],
          "frequency": "daily",
          "hours": null,
          "interval": 1,
          "minutes": null
        }
      ],
      "tenant": null,
      "updated_at": "2021-01-01T00:00:00Z",
      "workflow": "workflow_123"
    }
  ],
  "page_info": {
    "__typename": "PageInfo",
    "after": null,
    "before": null,
    "page_size": 25
  }
}
```

<h3 id="list-schedules-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[ListSchedulesResponse](#schemalistschedulesresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

## Update schedules

<a id="opIdupdateSchedules"></a>

> Code samples

```bash
curl https://api.knock.app/v1/schedules \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "actor": null,
    "data": {
      "key": "value"
    },
    "ending_at": null,
    "repeats": [
      {
        "__typename": "ScheduleRepeat",
        "day_of_month": null,
        "days": [
          "mon",
          "tue",
          "wed",
          "thu",
          "fri",
          "sat",
          "sun"
        ],
        "frequency": "daily",
        "hours": null,
        "interval": 1,
        "minutes": null
      }
    ],
    "schedule_ids": [
      "123e4567-e89b-12d3-a456-426614174000"
    ],
    "scheduled_at": null,
    "tenant": "acme_corp"
  }'
```

`PUT /v1/schedules`

Updates one or more existing schedules with new timing, data, or other properties. All specified schedule IDs will be updated with the same values. This endpoint also handles [inline identifications](/managing-recipients/identifying-recipients#inline-identifying-recipients) for the `actor`, `recipient`, and `tenant` fields.

> Body parameter

```json
{
  "actor": null,
  "data": {
    "key": "value"
  },
  "ending_at": null,
  "repeats": [
    {
      "__typename": "ScheduleRepeat",
      "day_of_month": null,
      "days": [
        "mon",
        "tue",
        "wed",
        "thu",
        "fri",
        "sat",
        "sun"
      ],
      "frequency": "daily",
      "hours": null,
      "interval": 1,
      "minutes": null
    }
  ],
  "schedule_ids": [
    "123e4567-e89b-12d3-a456-426614174000"
  ],
  "scheduled_at": null,
  "tenant": "acme_corp"
}
```

<h3 id="update-schedules-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[UpdateSchedulesRequest](#schemaupdateschedulesrequest)|true|Params|
|» actor|body|[RecipientReference](#schemarecipientreference) \| object \| null|false|A map of properties describing a user or an object to identify in Knock and mark as who or what performed the action.|
|» » *oneOf*|body|[RecipientReference](#schemarecipientreference)|false|A reference to a recipient, either a user identifier (string) or an object reference (ID, collection).|
|» » *oneOf*|body|object \| null|false|none|
|» data|body|object \| null|false|An optional map of data to pass into the workflow execution. There is a 10MB limit on the size of the full `data` payload. Any individual string value greater than 1024 bytes in length will be [truncated](/developer-tools/api-logs#log-truncation) in your logs.|
|» ending_at|body|string(date-time) \| null|false|The ending date and time for the schedule.|
|» repeats|body|[[ScheduleRepeatRule](#schemaschedulerepeatrule)]|false|The repeat rule for the schedule.|
|» schedule_ids|body|[string(uuid)]|true|A list of schedule IDs.|
|» scheduled_at|body|string(date-time) \| null|false|The starting date and time for the schedule.|
|» tenant|body|[InlineTenantRequest](#schemainlinetenantrequest) \| object \| null|false|The tenant to trigger the workflow for. Triggering with a tenant will use any tenant-level overrides associated with the tenant object, and all messages produced from workflow runs will be tagged with the tenant.|
|» » *anyOf*|body|[InlineTenantRequest](#schemainlinetenantrequest)|false|An request to set a tenant inline.|
|» » *anyOf*|body|object \| null|false|none|

> Example responses

> 200 Response

```json
[
  {
    "__typename": "Schedule",
    "actor": null,
    "data": null,
    "id": "123e4567-e89b-12d3-a456-426614174000",
    "inserted_at": "2021-01-01T00:00:00Z",
    "last_occurrence_at": null,
    "next_occurrence_at": null,
    "recipient": {
      "__typename": "User",
      "avatar": null,
      "created_at": null,
      "email": "jane@ingen.net",
      "id": "jane",
      "name": "Jane Doe",
      "phone_number": null,
      "timezone": null,
      "updated_at": "2024-05-22T12:00:00Z"
    },
    "repeats": [
      {
        "__typename": "ScheduleRepeat",
        "day_of_month": null,
        "days": [
          "mon",
          "tue",
          "wed",
          "thu",
          "fri",
          "sat",
          "sun"
        ],
        "frequency": "daily",
        "hours": null,
        "interval": 1,
        "minutes": null
      }
    ],
    "tenant": null,
    "updated_at": "2021-01-01T00:00:00Z",
    "workflow": "workflow_123"
  }
]
```

<h3 id="update-schedules-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[SchedulesResponse](#schemaschedulesresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

## Create schedules

<a id="opIdcreateSchedules"></a>

> Code samples

```bash
curl https://api.knock.app/v1/schedules \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "data": {
      "key": "value"
    },
    "ending_at": null,
    "recipients": [
      "user_123"
    ],
    "repeats": [
      {
        "__typename": "ScheduleRepeat",
        "day_of_month": null,
        "days": [
          "mon",
          "tue",
          "wed",
          "thu",
          "fri",
          "sat",
          "sun"
        ],
        "frequency": "daily",
        "hours": null,
        "interval": 1,
        "minutes": null
      }
    ],
    "scheduled_at": null,
    "tenant": "acme_corp",
    "workflow": "comment-created"
  }'
```

`POST /v1/schedules`

Creates one or more schedules for a workflow with the specified recipients, timing, and data. Schedules can be one-time or recurring. This endpoint also handles [inline identifications](/managing-recipients/identifying-recipients#inline-identifying-recipients) for the `actor`, `recipient`, and `tenant` fields.

> Body parameter

```json
{
  "data": {
    "key": "value"
  },
  "ending_at": null,
  "recipients": [
    "user_123"
  ],
  "repeats": [
    {
      "__typename": "ScheduleRepeat",
      "day_of_month": null,
      "days": [
        "mon",
        "tue",
        "wed",
        "thu",
        "fri",
        "sat",
        "sun"
      ],
      "frequency": "daily",
      "hours": null,
      "interval": 1,
      "minutes": null
    }
  ],
  "scheduled_at": null,
  "tenant": "acme_corp",
  "workflow": "comment-created"
}
```

<h3 id="create-schedules-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[CreateSchedulesRequest](#schemacreateschedulesrequest)|true|Params|
|» actor|body|object|false|A map of properties describing a user or an object to identify in Knock and mark as who or what performed the action.|
|» » *oneOf*|body|[RecipientRequest](#schemarecipientrequest)|false|Specifies a recipient in a request. This can either be a user identifier (string), an inline user request (object), or an inline object request, which is determined by the presence of a `collection` property.|
|» » *oneOf*|body|object \| null|false|none|
|» data|body|object \| null|false|An optional map of data to pass into the workflow execution. There is a 10MB limit on the size of the full `data` payload. Any individual string value greater than 1024 bytes in length will be [truncated](/developer-tools/api-logs#log-truncation) in your logs.|
|» ending_at|body|string(date-time) \| null|false|The ending date and time for the schedule.|
|» recipients|body|[[RecipientRequest](#schemarecipientrequest)]|true|The recipients to set the schedule for. Limited to 100 recipients per request.|
|» repeats|body|[[ScheduleRepeatRule](#schemaschedulerepeatrule)]|false|The repeat rule for the schedule.|
|» scheduled_at|body|string(date-time) \| null|false|The starting date and time for the schedule.|
|» tenant|body|[InlineTenantRequest](#schemainlinetenantrequest) \| object \| null|false|The tenant to trigger the workflow for. Triggering with a tenant will use any tenant-level overrides associated with the tenant object, and all messages produced from workflow runs will be tagged with the tenant.|
|» » *anyOf*|body|[InlineTenantRequest](#schemainlinetenantrequest)|false|An request to set a tenant inline.|
|» » *anyOf*|body|object \| null|false|none|
|» workflow|body|string|true|The key of the workflow.|

> Example responses

> 200 Response

```json
[
  {
    "__typename": "Schedule",
    "actor": null,
    "data": null,
    "id": "123e4567-e89b-12d3-a456-426614174000",
    "inserted_at": "2021-01-01T00:00:00Z",
    "last_occurrence_at": null,
    "next_occurrence_at": null,
    "recipient": {
      "__typename": "User",
      "avatar": null,
      "created_at": null,
      "email": "jane@ingen.net",
      "id": "jane",
      "name": "Jane Doe",
      "phone_number": null,
      "timezone": null,
      "updated_at": "2024-05-22T12:00:00Z"
    },
    "repeats": [
      {
        "__typename": "ScheduleRepeat",
        "day_of_month": null,
        "days": [
          "mon",
          "tue",
          "wed",
          "thu",
          "fri",
          "sat",
          "sun"
        ],
        "frequency": "daily",
        "hours": null,
        "interval": 1,
        "minutes": null
      }
    ],
    "tenant": null,
    "updated_at": "2021-01-01T00:00:00Z",
    "workflow": "workflow_123"
  }
]
```

<h3 id="create-schedules-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[SchedulesResponse](#schemaschedulesresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

## Delete schedules

<a id="opIddeleteSchedules"></a>

> Code samples

```bash
curl https://api.knock.app/v1/schedules \
  -X DELETE \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "schedule_ids": [
      "123e4567-e89b-12d3-a456-426614174000"
    ]
  }'
```

`DELETE /v1/schedules`

Permanently deletes one or more schedules identified by the provided schedule IDs. This operation cannot be undone.

> Body parameter

```json
{
  "schedule_ids": [
    "123e4567-e89b-12d3-a456-426614174000"
  ]
}
```

<h3 id="delete-schedules-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[DeleteSchedulesRequest](#schemadeleteschedulesrequest)|true|Params|
|» schedule_ids|body|[string]|true|A list of schedule IDs.|

> Example responses

> 200 Response

```json
[
  {
    "__typename": "Schedule",
    "actor": null,
    "data": null,
    "id": "123e4567-e89b-12d3-a456-426614174000",
    "inserted_at": "2021-01-01T00:00:00Z",
    "last_occurrence_at": null,
    "next_occurrence_at": null,
    "recipient": {
      "__typename": "User",
      "avatar": null,
      "created_at": null,
      "email": "jane@ingen.net",
      "id": "jane",
      "name": "Jane Doe",
      "phone_number": null,
      "timezone": null,
      "updated_at": "2024-05-22T12:00:00Z"
    },
    "repeats": [
      {
        "__typename": "ScheduleRepeat",
        "day_of_month": null,
        "days": [
          "mon",
          "tue",
          "wed",
          "thu",
          "fri",
          "sat",
          "sun"
        ],
        "frequency": "daily",
        "hours": null,
        "interval": 1,
        "minutes": null
      }
    ],
    "tenant": null,
    "updated_at": "2021-01-01T00:00:00Z",
    "workflow": "workflow_123"
  }
]
```

<h3 id="delete-schedules-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[SchedulesResponse](#schemaschedulesresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

## List object schedules

<a id="opIdlistObjectSchedules"></a>

> Code samples

```bash
curl https://api.knock.app/v1/objects/string/string/schedules \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/objects/{collection}/{id}/schedules`

Returns a paginated list of schedules for an object.

<h3 id="list-object-schedules-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The ID of the object to list schedules for.|
|collection|path|string|true|The collection of the object to list schedules for.|
|tenant|query|string|false|Filter schedules by tenant id.|
|workflow|query|string|false|Filter schedules by workflow id.|
|after|query|string|false|The cursor to fetch entries after.|
|before|query|string|false|The cursor to fetch entries before.|
|page_size|query|integer|false|The number of items per page (defaults to 50).|

> Example responses

> 200 Response

```json
{
  "entries": [
    {
      "__typename": "Schedule",
      "actor": null,
      "data": null,
      "id": "123e4567-e89b-12d3-a456-426614174000",
      "inserted_at": "2021-01-01T00:00:00Z",
      "last_occurrence_at": null,
      "next_occurrence_at": null,
      "recipient": {
        "__typename": "User",
        "avatar": null,
        "created_at": null,
        "email": "jane@ingen.net",
        "id": "jane",
        "name": "Jane Doe",
        "phone_number": null,
        "timezone": null,
        "updated_at": "2024-05-22T12:00:00Z"
      },
      "repeats": [
        {
          "__typename": "ScheduleRepeat",
          "day_of_month": null,
          "days": [
            "mon",
            "tue",
            "wed",
            "thu",
            "fri",
            "sat",
            "sun"
          ],
          "frequency": "daily",
          "hours": null,
          "interval": 1,
          "minutes": null
        }
      ],
      "tenant": null,
      "updated_at": "2021-01-01T00:00:00Z",
      "workflow": "workflow_123"
    }
  ],
  "page_info": {
    "__typename": "PageInfo",
    "after": null,
    "before": null,
    "page_size": 25
  }
}
```

<h3 id="list-object-schedules-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[ListSchedulesResponse](#schemalistschedulesresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

<h1 id="knock-api-subscriptions">Subscriptions</h1>

A subscription represents a connection between a recipient and an object, used to represent a list.

## List user subscriptions

<a id="opIdlistSubscriptionsForUser"></a>

> Code samples

```bash
curl https://api.knock.app/v1/users/string/subscriptions \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/users/{user_id}/subscriptions`

Retrieves a paginated list of subscriptions for a specific user, in descending order.

<h3 id="list-user-subscriptions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|user_id|path|string|true|The user ID to list subscriptions for.|
|include|query|[string]|false|Associated resources to include in the response.|
|objects[]|query|[[RecipientReference](#schemarecipientreference)]|false|Only returns subscriptions for the specified object references.|
|after|query|string|false|The cursor to fetch entries after.|
|before|query|string|false|The cursor to fetch entries before.|
|page_size|query|integer|false|The number of items per page (defaults to 50).|

#### Enumerated Values

|Parameter|Value|
|---|---|
|include|preferences|

> Example responses

> 200 Response

```json
{
  "entries": [
    {
      "__typename": "Subscription",
      "inserted_at": "2021-01-01T00:00:00Z",
      "object": {
        "__typename": "Object",
        "collection": "assets",
        "created_at": null,
        "id": "specimen_25",
        "properties": {
          "classification": "Theropod",
          "config": {
            "biz": "baz",
            "foo": "bar"
          },
          "name": "Velociraptor",
          "status": "contained"
        },
        "updated_at": "2024-05-22T12:00:00Z"
      },
      "recipient": {
        "__typename": "User",
        "avatar": null,
        "created_at": null,
        "email": "jane@ingen.net",
        "id": "jane",
        "name": "Jane Doe",
        "phone_number": null,
        "timezone": null,
        "updated_at": "2024-05-22T12:00:00Z"
      },
      "updated_at": "2021-01-01T00:00:00Z"
    }
  ],
  "page_info": {
    "__typename": "PageInfo",
    "after": null,
    "before": null,
    "page_size": 25
  }
}
```

<h3 id="list-user-subscriptions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[ListSubscriptionsResponse](#schemalistsubscriptionsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

## List subscriptions

<a id="opIdlistSubscriptionsForObject"></a>

> Code samples

```bash
curl https://api.knock.app/v1/objects/string/string/subscriptions \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/objects/{collection}/{object_id}/subscriptions`

List subscriptions for an object. Either list the recipients that subscribe to the provided object, or list the objects that the provided object is subscribed to. Determined by the `mode` query parameter.

<h3 id="list-subscriptions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|mode|query|string|false|Mode of the request. `recipient` to list the objects that the provided object is subscribed to, `object` to list the recipients that subscribe to the provided object.|
|include|query|[string]|false|Additional fields to include in the response.|
|recipients[]|query|[[RecipientReference](#schemarecipientreference)]|false|Recipients to filter by (only used if mode is `object`).|
|objects[]|query|[[ObjectReference](#schemaobjectreference)]|false|Objects to filter by (only used if mode is `recipient`).|
|object_id|path|string|true|Unique identifier for the object.|
|collection|path|string|true|The collection this object belongs to.|
|after|query|string|false|The cursor to fetch entries after.|
|before|query|string|false|The cursor to fetch entries before.|
|page_size|query|integer|false|The number of items per page (defaults to 50).|

#### Enumerated Values

|Parameter|Value|
|---|---|
|mode|recipient|
|mode|object|
|include|preferences|

> Example responses

> 200 Response

```json
{
  "entries": [
    {
      "__typename": "Subscription",
      "inserted_at": "2021-01-01T00:00:00Z",
      "object": {
        "__typename": "Object",
        "collection": "assets",
        "created_at": null,
        "id": "specimen_25",
        "properties": {
          "classification": "Theropod",
          "config": {
            "biz": "baz",
            "foo": "bar"
          },
          "name": "Velociraptor",
          "status": "contained"
        },
        "updated_at": "2024-05-22T12:00:00Z"
      },
      "recipient": {
        "__typename": "User",
        "avatar": null,
        "created_at": null,
        "email": "jane@ingen.net",
        "id": "jane",
        "name": "Jane Doe",
        "phone_number": null,
        "timezone": null,
        "updated_at": "2024-05-22T12:00:00Z"
      },
      "updated_at": "2021-01-01T00:00:00Z"
    }
  ],
  "page_info": {
    "__typename": "PageInfo",
    "after": null,
    "before": null,
    "page_size": 25
  }
}
```

<h3 id="list-subscriptions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[ListSubscriptionsResponse](#schemalistsubscriptionsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

## Add subscriptions

<a id="opIdaddSubscriptionsForObject"></a>

> Code samples

```bash
curl https://api.knock.app/v1/objects/string/string/subscriptions \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "properties": {
      "key": "value"
    },
    "recipients": [
      "user_1",
      "user_2"
    ]
  }'
```

`POST /v1/objects/{collection}/{object_id}/subscriptions`

Add subscriptions for an object. If a subscription already exists, it will be updated. This endpoint also handles [inline identifications](/managing-recipients/identifying-recipients#inline-identifying-recipients) for the `recipient`.

> Body parameter

```json
{
  "properties": {
    "key": "value"
  },
  "recipients": [
    "user_1",
    "user_2"
  ]
}
```

<h3 id="add-subscriptions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|object_id|path|string|true|Unique identifier for the object.|
|collection|path|string|true|The collection this object belongs to.|
|body|body|[UpsertSubscriptionsRequest](#schemaupsertsubscriptionsrequest)|true|Params|
|» properties|body|object \| null|false|The custom properties associated with the subscription relationship.|
|» recipients|body|[[RecipientRequest](#schemarecipientrequest)]|true|The recipients of the subscription. You can subscribe up to 100 recipients to an object at a time.|

> Example responses

> 200 Response

```json
[
  {
    "__typename": "Subscription",
    "inserted_at": "2021-01-01T00:00:00Z",
    "object": {
      "__typename": "Object",
      "collection": "assets",
      "created_at": null,
      "id": "specimen_25",
      "properties": {
        "classification": "Theropod",
        "config": {
          "biz": "baz",
          "foo": "bar"
        },
        "name": "Velociraptor",
        "status": "contained"
      },
      "updated_at": "2024-05-22T12:00:00Z"
    },
    "recipient": {
      "__typename": "User",
      "avatar": null,
      "created_at": null,
      "email": "jane@ingen.net",
      "id": "jane",
      "name": "Jane Doe",
      "phone_number": null,
      "timezone": null,
      "updated_at": "2024-05-22T12:00:00Z"
    },
    "updated_at": "2021-01-01T00:00:00Z"
  }
]
```

<h3 id="add-subscriptions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[SubscriptionsResponse](#schemasubscriptionsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

## Delete subscriptions

<a id="opIddeleteSubscriptionsForObject"></a>

> Code samples

```bash
curl https://api.knock.app/v1/objects/string/string/subscriptions \
  -X DELETE \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "recipients": [
      "user_123"
    ]
  }'
```

`DELETE /v1/objects/{collection}/{object_id}/subscriptions`

Delete subscriptions for the specified recipients from an object. Returns the list of deleted subscriptions.

> Body parameter

```json
{
  "recipients": [
    "user_123"
  ]
}
```

<h3 id="delete-subscriptions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|object_id|path|string|true|Unique identifier for the object.|
|collection|path|string|true|The collection this object belongs to.|
|body|body|[DeleteSubscriptionsRequest](#schemadeletesubscriptionsrequest)|true|Params|
|» recipients|body|[[RecipientReference](#schemarecipientreference)]|true|The recipients of the subscription. You can subscribe up to 100 recipients to an object at a time.|

> Example responses

> 200 Response

```json
[
  {
    "__typename": "Subscription",
    "inserted_at": "2021-01-01T00:00:00Z",
    "object": {
      "__typename": "Object",
      "collection": "assets",
      "created_at": null,
      "id": "specimen_25",
      "properties": {
        "classification": "Theropod",
        "config": {
          "biz": "baz",
          "foo": "bar"
        },
        "name": "Velociraptor",
        "status": "contained"
      },
      "updated_at": "2024-05-22T12:00:00Z"
    },
    "recipient": {
      "__typename": "User",
      "avatar": null,
      "created_at": null,
      "email": "jane@ingen.net",
      "id": "jane",
      "name": "Jane Doe",
      "phone_number": null,
      "timezone": null,
      "updated_at": "2024-05-22T12:00:00Z"
    },
    "updated_at": "2021-01-01T00:00:00Z"
  }
]
```

<h3 id="delete-subscriptions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[SubscriptionsResponse](#schemasubscriptionsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

<h1 id="knock-api-tenants">Tenants</h1>

A tenant represents a top-level entity from your system, like a company, organization, account, or workspace.

## List tenants

<a id="opIdlistTenants"></a>

> Code samples

```bash
curl https://api.knock.app/v1/tenants \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/tenants`

List tenants for the current environment.

<h3 id="list-tenants-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|tenant_id|query|string|false|Filter tenants by ID.|
|name|query|string|false|Filter tenants by name.|
|after|query|string|false|The cursor to fetch entries after.|
|before|query|string|false|The cursor to fetch entries before.|
|page_size|query|integer|false|The number of items per page (defaults to 50).|

> Example responses

> 200 Response

```json
{
  "entries": [
    {
      "__typename": "Tenant",
      "id": "tenant_jp123",
      "name": "Jurassic Park",
      "settings": {
        "branding": {
          "dark_icon_url": "https://example.com/trex_silhouette_icon_dark.png",
          "dark_logo_url": "https://example.com/amber_fossil_logo_dark.png",
          "dark_primary_color": "#FFFFFF",
          "dark_primary_color_contrast": "#000000",
          "icon_url": "https://example.com/trex_silhouette_icon.png",
          "logo_url": "https://example.com/amber_fossil_logo.png",
          "primary_color": "#DF1A22",
          "primary_color_contrast": "#FFDE00"
        },
        "preference_set": {
          "categories": {
            "safety": {
              "channel_types": {
                "email": true,
                "push": true
              }
            }
          },
          "channel_types": {
            "email": true,
            "in_app_feed": true,
            "push": true
          },
          "id": "default",
          "workflows": {
            "park_alert": {
              "channel_types": {
                "email": true,
                "push": true
              }
            }
          }
        }
      }
    }
  ],
  "page_info": {
    "__typename": "PageInfo",
    "after": null,
    "before": null,
    "page_size": 25
  }
}
```

<h3 id="list-tenants-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[ListTenantsResponse](#schemalisttenantsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

## Bulk set tenants

<a id="opIdbulkSetTenants"></a>

> Code samples

```bash
curl https://api.knock.app/v1/tenants/bulk/set \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "tenants": [
      {
        "id": "tenant_1",
        "name": "Acme Corp, Inc."
      }
    ]
  }'
```

`POST /v1/tenants/bulk/set`

Set or update up to 1,000 tenants in a single operation.

> Body parameter

```json
{
  "tenants": [
    {
      "id": "tenant_1",
      "name": "Acme Corp, Inc."
    }
  ]
}
```

<h3 id="bulk-set-tenants-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[BulkSetTenantsRequest](#schemabulksettenantsrequest)|true|Params|
|» tenants|body|[[InlineTenantRequest](#schemainlinetenantrequest)]|true|The tenants to be upserted.|

> Example responses

> 200 Response

```json
{
  "__typename": "BulkOperation",
  "completed_at": null,
  "error_count": 0,
  "error_items": [],
  "estimated_total_rows": 1000,
  "failed_at": null,
  "id": "123e4567-e89b-12d3-a456-426614174000",
  "inserted_at": "2024-05-22T12:00:00Z",
  "name": "Bulk operation name",
  "processed_rows": 0,
  "progress_path": "https://api.switchboard.com/v1/bulk_operations/123e4567-e89b-12d3-a456-426614174000",
  "started_at": null,
  "status": "processing",
  "success_count": 0,
  "updated_at": "2024-05-22T12:00:00Z"
}
```

<h3 id="bulk-set-tenants-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[BulkOperation](#schemabulkoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

## Bulk delete tenants

<a id="opIdbulkDeleteTenants"></a>

> Code samples

```bash
curl 'https://api.knock.app/v1/tenants/bulk/delete?tenant_ids=string' \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /v1/tenants/bulk/delete`

Delete up to 1,000 tenants at a time in a single operation. This operation cannot be undone.

<h3 id="bulk-delete-tenants-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|tenant_ids|query|[string]|true|The IDs of the tenants to delete.|

> Example responses

> 200 Response

```json
{
  "__typename": "BulkOperation",
  "completed_at": null,
  "error_count": 0,
  "error_items": [],
  "estimated_total_rows": 1000,
  "failed_at": null,
  "id": "123e4567-e89b-12d3-a456-426614174000",
  "inserted_at": "2024-05-22T12:00:00Z",
  "name": "Bulk operation name",
  "processed_rows": 0,
  "progress_path": "https://api.switchboard.com/v1/bulk_operations/123e4567-e89b-12d3-a456-426614174000",
  "started_at": null,
  "status": "processing",
  "success_count": 0,
  "updated_at": "2024-05-22T12:00:00Z"
}
```

<h3 id="bulk-delete-tenants-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[BulkOperation](#schemabulkoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

## Get a tenant

<a id="opIdgetTenant"></a>

> Code samples

```bash
curl https://api.knock.app/v1/tenants/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/tenants/{id}`

Get a tenant by ID.

<h3 id="get-a-tenant-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The unique identifier for the tenant.|
|resolve_full_preference_settings|query|boolean|false|When true, merges environment-level default preferences into the tenant's `settings.preference_set` field before returning the response. Defaults to false.|

> Example responses

> 200 Response

```json
{
  "__typename": "Tenant",
  "id": "tenant_jp123",
  "name": "Jurassic Park",
  "settings": {
    "branding": {
      "dark_icon_url": "https://example.com/trex_silhouette_icon_dark.png",
      "dark_logo_url": "https://example.com/amber_fossil_logo_dark.png",
      "dark_primary_color": "#FFFFFF",
      "dark_primary_color_contrast": "#000000",
      "icon_url": "https://example.com/trex_silhouette_icon.png",
      "logo_url": "https://example.com/amber_fossil_logo.png",
      "primary_color": "#DF1A22",
      "primary_color_contrast": "#FFDE00"
    },
    "preference_set": {
      "categories": {
        "safety": {
          "channel_types": {
            "email": true,
            "push": true
          }
        }
      },
      "channel_types": {
        "email": true,
        "in_app_feed": true,
        "push": true
      },
      "id": "default",
      "workflows": {
        "park_alert": {
          "channel_types": {
            "email": true,
            "push": true
          }
        }
      }
    }
  }
}
```

<h3 id="get-a-tenant-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[Tenant](#schematenant)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

## Set a tenant

<a id="opIdsetTenant"></a>

> Code samples

```bash
curl https://api.knock.app/v1/tenants/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "name": "Jurassic Park",
    "settings": {
      "branding": {
        "icon_url": "https://example.com/trex_silhouette_icon.png",
        "logo_url": "https://example.com/amber_fossil_logo.png",
        "primary_color": "#DF1A22",
        "primary_color_contrast": "#FFDE00"
      }
    }
  }'
```

`PUT /v1/tenants/{id}`

Sets a tenant within an environment, performing an upsert operation. Any existing properties will be merged with the incoming properties.

> Body parameter

```json
{
  "name": "Jurassic Park",
  "settings": {
    "branding": {
      "icon_url": "https://example.com/trex_silhouette_icon.png",
      "logo_url": "https://example.com/amber_fossil_logo.png",
      "primary_color": "#DF1A22",
      "primary_color_contrast": "#FFDE00"
    }
  }
}
```

<h3 id="set-a-tenant-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The unique identifier for the tenant.|
|resolve_full_preference_settings|query|boolean|false|When true, merges environment-level default preferences into the tenant's `settings.preference_set` field before returning the response. Defaults to false.|
|body|body|[SetTenantRequest](#schemasettenantrequest)|true|Tenant|
|» channel_data|body|object \| null \| [InlineChannelDataRequest](#schemainlinechanneldatarequest)|false|The channel data for the tenant.|
|» » *oneOf*|body|object \| null|false|none|
|» » *oneOf*|body|[InlineChannelDataRequest](#schemainlinechanneldatarequest)|false|A request to set channel data for a type of channel inline.|
|» name|body|string \| null|false|An optional name for the tenant.|
|» settings|body|object|false|The settings for the tenant. Includes branding and preference set.|
|» » branding|body|object|false|The branding for the tenant.|
|» » » icon_url|body|string \| null|false|The icon URL for the tenant. Must point to a valid image with an image MIME type.|
|» » » logo_url|body|string \| null|false|The logo URL for the tenant. Must point to a valid image with an image MIME type.|
|» » » primary_color|body|string \| null|false|The primary color for the tenant, provided as a hex value.|
|» » » primary_color_contrast|body|string \| null|false|The primary color contrast for the tenant, provided as a hex value.|
|» » preference_set|body|object \| null \| [PreferenceSetRequest](#schemapreferencesetrequest)|false|The preference set for the tenant. Used to override the default preference set.|
|» » » *oneOf*|body|object \| null|false|none|
|» » » *oneOf*|body|[PreferenceSetRequest](#schemapreferencesetrequest)|false|A request to set a preference set for a recipient.|

> Example responses

> 200 Response

```json
{
  "__typename": "Tenant",
  "created_at": "1993-05-24T08:30:00Z",
  "id": "ingen_isla_nublar",
  "name": "Jurassic Park",
  "settings": {
    "branding": {
      "icon_url": "https://example.com/trex_silhouette_icon.png",
      "logo_url": "https://example.com/amber_fossil_logo.png",
      "primary_color": "#DF1A22",
      "primary_color_contrast": "#FFDE00"
    }
  },
  "updated_at": "1993-06-11T15:45:00Z"
}
```

<h3 id="set-a-tenant-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[SetTenantResponse](#schemasettenantresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

## Delete a tenant

<a id="opIddeleteTenant"></a>

> Code samples

```bash
curl https://api.knock.app/v1/tenants/string \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /v1/tenants/{id}`

Delete a tenant and all associated data. This operation cannot be undone.

<h3 id="delete-a-tenant-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The unique identifier for the tenant.|

<h3 id="delete-a-tenant-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

<h1 id="knock-api-users">Users</h1>

A user is an individual from your system, represented in Knock. They are most commonly a recipient of a notification.

## Update channel types in preference set

<a id="opIdupdateUserPreferenceChannelTypes"></a>

> Code samples

```bash
curl 'https://api.knock.app/v1/users/{user_id}/preferences/{id}/channel_types' \
  -X PUT \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`PUT /v1/users/{user_id}/preferences/{id}/channel_types`

<aside class="warning">
This operation is deprecated
</aside>

Updates the channel types in a specific user preference set. This operation is deprecated.

> Example responses

> 200 Response

```json
{
  "categories": {
    "marketing": false,
    "transactional": {
      "channel_types": {
        "email": false
      }
    }
  },
  "channel_types": {
    "email": true,
    "push": false,
    "sms": {
      "conditions": [
        {
          "argument": "US",
          "operator": "equal_to",
          "variable": "recipient.country_code"
        }
      ]
    }
  },
  "commercial_subscribed": true,
  "id": "default",
  "workflows": null
}
```

<h3 id="update-channel-types-in-preference-set-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[PreferenceSet](#schemapreferenceset)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

## Update channel type in preference set

<a id="opIdupdateUserPreferenceChannelType"></a>

> Code samples

```bash
curl 'https://api.knock.app/v1/users/{user_id}/preferences/{id}/channel_types/{type}' \
  -X PUT \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`PUT /v1/users/{user_id}/preferences/{id}/channel_types/{type}`

<aside class="warning">
This operation is deprecated
</aside>

Updates a single channel type in a specific user preference set. This operation is deprecated.

> Example responses

> 200 Response

```json
{
  "categories": {
    "marketing": false,
    "transactional": {
      "channel_types": {
        "email": false
      }
    }
  },
  "channel_types": {
    "email": true,
    "push": false,
    "sms": {
      "conditions": [
        {
          "argument": "US",
          "operator": "equal_to",
          "variable": "recipient.country_code"
        }
      ]
    }
  },
  "commercial_subscribed": true,
  "id": "default",
  "workflows": null
}
```

<h3 id="update-channel-type-in-preference-set-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[PreferenceSet](#schemapreferenceset)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

## Update workflows in preference set

<a id="opIdupdateUserPreferenceWorkflows"></a>

> Code samples

```bash
curl 'https://api.knock.app/v1/users/{user_id}/preferences/{id}/workflows' \
  -X PUT \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`PUT /v1/users/{user_id}/preferences/{id}/workflows`

<aside class="warning">
This operation is deprecated
</aside>

Updates the workflows in a specific user preference set. This operation is deprecated.

> Example responses

> 200 Response

```json
{
  "categories": {
    "marketing": false,
    "transactional": {
      "channel_types": {
        "email": false
      }
    }
  },
  "channel_types": {
    "email": true,
    "push": false,
    "sms": {
      "conditions": [
        {
          "argument": "US",
          "operator": "equal_to",
          "variable": "recipient.country_code"
        }
      ]
    }
  },
  "commercial_subscribed": true,
  "id": "default",
  "workflows": null
}
```

<h3 id="update-workflows-in-preference-set-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[PreferenceSet](#schemapreferenceset)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

## Update category in user preference set

<a id="opIdupdateUserPreferenceCategory"></a>

> Code samples

```bash
curl 'https://api.knock.app/v1/users/{user_id}/preferences/{id}/categories/{key}' \
  -X PUT \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`PUT /v1/users/{user_id}/preferences/{id}/categories/{key}`

<aside class="warning">
This operation is deprecated
</aside>

Updates a single category in a specific user preference set. This operation is deprecated.

> Example responses

> 200 Response

```json
{
  "categories": {
    "marketing": false,
    "transactional": {
      "channel_types": {
        "email": false
      }
    }
  },
  "channel_types": {
    "email": true,
    "push": false,
    "sms": {
      "conditions": [
        {
          "argument": "US",
          "operator": "equal_to",
          "variable": "recipient.country_code"
        }
      ]
    }
  },
  "commercial_subscribed": true,
  "id": "default",
  "workflows": null
}
```

<h3 id="update-category-in-user-preference-set-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[PreferenceSet](#schemapreferenceset)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

## Merge users

<a id="opIdmergeUser"></a>

> Code samples

```bash
curl https://api.knock.app/v1/users/string/merge \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "from_user_id": "user_1"
  }'
```

`POST /v1/users/{user_id}/merge`

Merge two users together, where the user specified with the `from_user_id` param will be merged into the user specified by `user_id`.

> Body parameter

```json
{
  "from_user_id": "user_1"
}
```

<h3 id="merge-users-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|user_id|path|string|true|The id of the user to merge into.|
|body|body|[MergeUserRequest](#schemamergeuserrequest)|true|Params|
|» from_user_id|body|string|true|The user ID to merge from.|

> Example responses

> 200 Response

```json
{
  "__typename": "User",
  "created_at": null,
  "email": "ian.malcolm@chaos.theory",
  "id": "user_id",
  "name": "Dr. Ian Malcolm",
  "updated_at": "2024-05-22T12:00:00Z"
}
```

<h3 id="merge-users-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[User](#schemauser)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

## Update categories in user preference set

<a id="opIdupdateUserPreferenceCategories"></a>

> Code samples

```bash
curl 'https://api.knock.app/v1/users/{user_id}/preferences/{id}/categories' \
  -X PUT \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`PUT /v1/users/{user_id}/preferences/{id}/categories`

<aside class="warning">
This operation is deprecated
</aside>

Updates the categories in a specific user preference set. This operation is deprecated.

> Example responses

> 200 Response

```json
{
  "categories": {
    "marketing": false,
    "transactional": {
      "channel_types": {
        "email": false
      }
    }
  },
  "channel_types": {
    "email": true,
    "push": false,
    "sms": {
      "conditions": [
        {
          "argument": "US",
          "operator": "equal_to",
          "variable": "recipient.country_code"
        }
      ]
    }
  },
  "commercial_subscribed": true,
  "id": "default",
  "workflows": null
}
```

<h3 id="update-categories-in-user-preference-set-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[PreferenceSet](#schemapreferenceset)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

## List users

<a id="opIdlistUsers"></a>

> Code samples

```bash
curl https://api.knock.app/v1/users \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/users`

Retrieve a paginated list of users in the environment. Defaults to 50 users per page.

<h3 id="list-users-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|include|query|[string]|false|Associated resources to include in the response.|
|order|query|string|false|Sort by insertion order. Pass `asc` for oldest first, or `desc` for newest first. Defaults to oldest first when omitted.|
|after|query|string|false|The cursor to fetch entries after.|
|before|query|string|false|The cursor to fetch entries before.|
|page_size|query|integer|false|The number of items per page (defaults to 50).|

#### Enumerated Values

|Parameter|Value|
|---|---|
|include|preferences|
|order|asc|
|order|desc|

> Example responses

> 200 Response

```json
{
  "entries": [
    {
      "__typename": "User",
      "created_at": null,
      "email": "ian.malcolm@chaos.theory",
      "id": "user_id",
      "name": "Dr. Ian Malcolm",
      "updated_at": "2024-05-22T12:00:00Z"
    }
  ],
  "page_info": {
    "__typename": "PageInfo",
    "after": null,
    "before": null,
    "page_size": 25
  }
}
```

<h3 id="list-users-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[ListUsersResponse](#schemalistusersresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

## Bulk delete users

<a id="opIdbulkDeleteUsers"></a>

> Code samples

```bash
curl https://api.knock.app/v1/users/bulk/delete \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "user_ids": [
      "user_1",
      "user_2"
    ]
  }'
```

`POST /v1/users/bulk/delete`

Permanently deletes up to 1,000 users at a time.

> Body parameter

```json
{
  "user_ids": [
    "user_1",
    "user_2"
  ]
}
```

<h3 id="bulk-delete-users-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[BulkDeleteUsersRequest](#schemabulkdeleteusersrequest)|true|Params|
|» user_ids|body|[string]|true|A list of user IDs.|

> Example responses

> 200 Response

```json
{
  "__typename": "BulkOperation",
  "completed_at": null,
  "error_count": 0,
  "error_items": [],
  "estimated_total_rows": 1000,
  "failed_at": null,
  "id": "123e4567-e89b-12d3-a456-426614174000",
  "inserted_at": "2024-05-22T12:00:00Z",
  "name": "Bulk operation name",
  "processed_rows": 0,
  "progress_path": "https://api.switchboard.com/v1/bulk_operations/123e4567-e89b-12d3-a456-426614174000",
  "started_at": null,
  "status": "processing",
  "success_count": 0,
  "updated_at": "2024-05-22T12:00:00Z"
}
```

<h3 id="bulk-delete-users-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[BulkOperation](#schemabulkoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

## Bulk identify users

<a id="opIdbulkIdentifyUsers"></a>

> Code samples

```bash
curl https://api.knock.app/v1/users/bulk/identify \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "users": [
      {
        "email": "jane@ingen.net",
        "id": "user_1",
        "name": "Jane Doe",
        "timezone": "America/New_York"
      }
    ]
  }'
```

`POST /v1/users/bulk/identify`

Identifies multiple users in a single operation. Allows creating or updating up to 1,000 users in a single batch with various properties, preferences, and channel data.

> Body parameter

```json
{
  "users": [
    {
      "email": "jane@ingen.net",
      "id": "user_1",
      "name": "Jane Doe",
      "timezone": "America/New_York"
    }
  ]
}
```

<h3 id="bulk-identify-users-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[BulkIdentifyUsersRequest](#schemabulkidentifyusersrequest)|true|Params|
|» users|body|[[InlineIdentifyUserRequest](#schemainlineidentifyuserrequest)]|true|A list of users.|

> Example responses

> 200 Response

```json
{
  "__typename": "BulkOperation",
  "completed_at": null,
  "error_count": 0,
  "error_items": [],
  "estimated_total_rows": 1000,
  "failed_at": null,
  "id": "123e4567-e89b-12d3-a456-426614174000",
  "inserted_at": "2024-05-22T12:00:00Z",
  "name": "Bulk operation name",
  "processed_rows": 0,
  "progress_path": "https://api.switchboard.com/v1/bulk_operations/123e4567-e89b-12d3-a456-426614174000",
  "started_at": null,
  "status": "processing",
  "success_count": 0,
  "updated_at": "2024-05-22T12:00:00Z"
}
```

<h3 id="bulk-identify-users-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[BulkOperation](#schemabulkoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

## Get user

<a id="opIdgetUser"></a>

> Code samples

```bash
curl https://api.knock.app/v1/users/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/users/{user_id}`

Retrieve a specific user by their ID.

<h3 id="get-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|user_id|path|string|true|The ID of the user to retrieve.|

> Example responses

> 200 Response

```json
{
  "__typename": "User",
  "created_at": null,
  "email": "ian.malcolm@chaos.theory",
  "id": "user_id",
  "name": "Dr. Ian Malcolm",
  "updated_at": "2024-05-22T12:00:00Z"
}
```

<h3 id="get-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[User](#schemauser)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

## Identify user

<a id="opIdidentifyUser"></a>

> Code samples

```bash
curl https://api.knock.app/v1/users/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "channel_data": {
      "97c5837d-c65c-4d54-aa39-080eeb81c69d": {
        "tokens": [
          "push_token_123"
        ]
      }
    },
    "email": "ian.malcolm@chaos.theory",
    "name": "Dr. Ian Malcolm",
    "preferences": {
      "default": {
        "channel_types": {
          "email": true
        },
        "workflows": {
          "dinosaurs-loose": {
            "channel_types": {
              "email": true
            }
          }
        }
      }
    },
    "timezone": "America/New_York"
  }'
```

`PUT /v1/users/{user_id}`

Create or update a user with the provided identification data. When you identify an existing user, the system merges the properties you specify with what is currently set on the user, updating only the fields included in your requests.

> Body parameter

```json
{
  "channel_data": {
    "97c5837d-c65c-4d54-aa39-080eeb81c69d": {
      "tokens": [
        "push_token_123"
      ]
    }
  },
  "email": "ian.malcolm@chaos.theory",
  "name": "Dr. Ian Malcolm",
  "preferences": {
    "default": {
      "channel_types": {
        "email": true
      },
      "workflows": {
        "dinosaurs-loose": {
          "channel_types": {
            "email": true
          }
        }
      }
    }
  },
  "timezone": "America/New_York"
}
```

<h3 id="identify-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|user_id|path|string|true|The unique identifier of the user.|
|body|body|[IdentifyUserRequest](#schemaidentifyuserrequest)|true|Params|
|» avatar|body|string \| null|false|A URL for the avatar of the user.|
|» channel_data|body|object \| null|false|Channel-specific information that's needed to deliver a notification to an end provider.|
|» » **additionalProperties**|body|[PushChannelDataTokensOnly](#schemapushchanneldatatokensonly) \| [PushChannelDataDevicesOnly](#schemapushchanneldatadevicesonly) \| [AWSSNSPushChannelDataTargetARNsOnly](#schemaawssnspushchanneldatatargetarnsonly) \| [AWSSNSPushChannelDataDevicesOnly](#schemaawssnspushchanneldatadevicesonly) \| [OneSignalChannelDataPlayerIdsOnly](#schemaonesignalchanneldataplayeridsonly) \| [SlackChannelData](#schemaslackchanneldata) \| [MsTeamsChannelData](#schemamsteamschanneldata) \| [DiscordChannelData](#schemadiscordchanneldata)|false|Channel data for a given channel type.|
|» » » *oneOf*|body|[PushChannelDataTokensOnly](#schemapushchanneldatatokensonly)|false|Push channel data.|
|» » » *oneOf*|body|[PushChannelDataDevicesOnly](#schemapushchanneldatadevicesonly)|false|Push channel data.|
|» » » *oneOf*|body|[AWSSNSPushChannelDataTargetARNsOnly](#schemaawssnspushchanneldatatargetarnsonly)|false|AWS SNS push channel data.|
|» » » *oneOf*|body|[AWSSNSPushChannelDataDevicesOnly](#schemaawssnspushchanneldatadevicesonly)|false|AWS SNS push channel data.|
|» » » *oneOf*|body|[OneSignalChannelDataPlayerIdsOnly](#schemaonesignalchanneldataplayeridsonly)|false|OneSignal channel data.|
|» » » *oneOf*|body|[SlackChannelData](#schemaslackchanneldata)|false|Slack channel data.|
|» » » *oneOf*|body|[MsTeamsChannelData](#schemamsteamschanneldata)|false|Microsoft Teams channel data.|
|» » » *oneOf*|body|[DiscordChannelData](#schemadiscordchanneldata)|false|Discord channel data.|
|» created_at|body|string(date-time) \| null|false|The creation date of the user from your system.|
|» email|body|string \| null|false|The primary email address for the user.|
|» locale|body|string \| null|false|The locale of the user. Used for [message localization](/concepts/translations).|
|» name|body|string \| null|false|Display name of the user.|
|» phone_number|body|string \| null|false|The [E.164](https://www.twilio.com/docs/glossary/what-e164) phone number of the user (required for SMS channels).|
|» preferences|body|object \| null|false|A set of preferences for the user.|
|» » **additionalProperties**|body|[PreferenceSetRequest](#schemapreferencesetrequest)|false|A request to set a preference set for a recipient.|
|» timezone|body|string \| null|false|The timezone of the user. Must be a valid [tz database time zone string](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones). Used for [recurring schedules](/concepts/schedules#scheduling-workflows-with-recurring-schedules-for-recipients).|

> Example responses

> 200 Response

```json
{
  "__typename": "User",
  "created_at": null,
  "email": "ian.malcolm@chaos.theory",
  "id": "user_id",
  "name": "Dr. Ian Malcolm",
  "updated_at": "2024-05-22T12:00:00Z"
}
```

<h3 id="identify-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[User](#schemauser)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

## Delete user

<a id="opIddeleteUser"></a>

> Code samples

```bash
curl https://api.knock.app/v1/users/string \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /v1/users/{user_id}`

Permanently delete a user and all associated data.

<h3 id="delete-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|user_id|path|string|true|The ID of the user to delete.|

<h3 id="delete-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

## Get preference center config

<a id="opIdgetPreferenceCenterConfig"></a>

> Code samples

```bash
curl https://api.knock.app/v1/users/string/preference_center/config \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/users/{user_id}/preference_center/config`

Returns the preference center config with environment metadata for the given user.

<h3 id="get-preference-center-config-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|user_id|path|string|true|The unique identifier of the user.|

> Example responses

> 200 Response

```json
{
  "account_name": "Acme Inc.",
  "branding": {
    "dark": {
      "icon_url": "https://example.com/icon-dark.png",
      "logo_url": "https://example.com/logo-dark.png",
      "primary_color": "#C02727",
      "primary_color_contrast": "#11E2EC"
    },
    "icon_url": "https://example.com/icon.png",
    "logo_url": "https://example.com/logo.png",
    "primary_color": "#0EA5E9",
    "primary_color_contrast": "#0F172A"
  },
  "config": {
    "body": "Choose which notifications you want to receive.",
    "rows": [
      {
        "channel_types": [],
        "description": "Opt out of receiving comment and reply notifications",
        "identifier": "comments",
        "name": "Comments and replies",
        "type": "category"
      },
      {
        "channel_types": [
          "email",
          "sms"
        ],
        "description": "Receive notifications from the following channel types",
        "name": "Channel Types",
        "type": "channel_types"
      }
    ],
    "show_account_name": true,
    "title": "Notification preferences"
  },
  "enabled": true,
  "knock_branding_required": false,
  "user_email": "user@example.com"
}
```

<h3 id="get-preference-center-config-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[PreferenceCenterConfigWithMetadata](#schemapreferencecenterconfigwithmetadata)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

## Update workflow in user preference set

<a id="opIdupdateUserPreferenceWorkflow"></a>

> Code samples

```bash
curl 'https://api.knock.app/v1/users/{user_id}/preferences/{id}/workflows/{key}' \
  -X PUT \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`PUT /v1/users/{user_id}/preferences/{id}/workflows/{key}`

<aside class="warning">
This operation is deprecated
</aside>

Updates a single workflow in a specific user preference set. This operation is deprecated.

> Example responses

> 200 Response

```json
{
  "categories": {
    "marketing": false,
    "transactional": {
      "channel_types": {
        "email": false
      }
    }
  },
  "channel_types": {
    "email": true,
    "push": false,
    "sms": {
      "conditions": [
        {
          "argument": "US",
          "operator": "equal_to",
          "variable": "recipient.country_code"
        }
      ]
    }
  },
  "commercial_subscribed": true,
  "id": "default",
  "workflows": null
}
```

<h3 id="update-workflow-in-user-preference-set-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[PreferenceSet](#schemapreferenceset)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

## Bulk set preferences

<a id="opIdbulkSetUserPreferences"></a>

> Code samples

```bash
curl https://api.knock.app/v1/users/bulk/preferences \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "preferences": {
      "categories": {
        "marketing": false,
        "transactional": {
          "channel_types": {
            "email": false
          }
        }
      },
      "channel_types": {
        "email": true
      },
      "channels": {
        "2f641633-95d3-4555-9222-9f1eb7888a80": {
          "conditions": [
            {
              "argument": "US",
              "operator": "equal_to",
              "variable": "recipient.country_code"
            }
          ]
        },
        "aef6e715-df82-4ab6-b61e-b743e249f7b6": true
      },
      "commercial_subscribed": true,
      "id": "default",
      "workflows": {
        "dinosaurs-loose": {
          "channel_types": {
            "email": false
          }
        }
      }
    },
    "user_ids": [
      "user_1",
      "user_2"
    ]
  }'
```

`POST /v1/users/bulk/preferences`

Bulk sets the preferences for up to 1,000 users at a time. The preference set `:id` can be either `default` or a `tenant.id`. Learn more about [per-tenant preferences](/preferences/tenant-preferences). Note that this is a destructive operation and will replace any existing users' preferences with the preferences sent.

> Body parameter

```json
{
  "preferences": {
    "categories": {
      "marketing": false,
      "transactional": {
        "channel_types": {
          "email": false
        }
      }
    },
    "channel_types": {
      "email": true
    },
    "channels": {
      "2f641633-95d3-4555-9222-9f1eb7888a80": {
        "conditions": [
          {
            "argument": "US",
            "operator": "equal_to",
            "variable": "recipient.country_code"
          }
        ]
      },
      "aef6e715-df82-4ab6-b61e-b743e249f7b6": true
    },
    "commercial_subscribed": true,
    "id": "default",
    "workflows": {
      "dinosaurs-loose": {
        "channel_types": {
          "email": false
        }
      }
    }
  },
  "user_ids": [
    "user_1",
    "user_2"
  ]
}
```

<h3 id="bulk-set-preferences-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[BulkSetUserPreferencesRequest](#schemabulksetuserpreferencesrequest)|true|Params|
|» preferences|body|[BulkPreferenceSetRequest](#schemabulkpreferencesetrequest)|true|A preference set to apply in a bulk operation. Always replaces existing preferences for the specified set.|
|» user_ids|body|[string]|true|A list of user IDs.|

> Example responses

> 200 Response

```json
{
  "__typename": "BulkOperation",
  "completed_at": null,
  "error_count": 0,
  "error_items": [],
  "estimated_total_rows": 1000,
  "failed_at": null,
  "id": "123e4567-e89b-12d3-a456-426614174000",
  "inserted_at": "2024-05-22T12:00:00Z",
  "name": "Bulk operation name",
  "processed_rows": 0,
  "progress_path": "https://api.switchboard.com/v1/bulk_operations/123e4567-e89b-12d3-a456-426614174000",
  "started_at": null,
  "status": "processing",
  "success_count": 0,
  "updated_at": "2024-05-22T12:00:00Z"
}
```

<h3 id="bulk-set-preferences-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[BulkOperation](#schemabulkoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

## List user preference sets

<a id="opIdlistUserPreferenceSets"></a>

> Code samples

```bash
curl https://api.knock.app/v1/users/string/preferences \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/users/{user_id}/preferences`

Retrieves a list of all preference sets for a specific user.

<h3 id="list-user-preference-sets-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|user_id|path|string|true|The unique identifier of the user.|

> Example responses

> 200 Response

```json
[
  {
    "categories": {
      "marketing": false,
      "transactional": {
        "channel_types": {
          "email": false
        }
      }
    },
    "channel_types": {
      "email": true,
      "push": false,
      "sms": {
        "conditions": [
          {
            "argument": "US",
            "operator": "equal_to",
            "variable": "recipient.country_code"
          }
        ]
      }
    },
    "commercial_subscribed": true,
    "id": "default",
    "workflows": null
  }
]
```

<h3 id="list-user-preference-sets-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="list-user-preference-sets-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[PreferenceSet](#schemapreferenceset)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

## Get user preference set

<a id="opIdgetUserPreferenceSet"></a>

> Code samples

```bash
curl https://api.knock.app/v1/users/string/preferences/default \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/users/{user_id}/preferences/{id}`

Retrieves a specific preference set for a user identified by the preference set ID.

<h3 id="get-user-preference-set-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|user_id|path|string|true|The unique identifier of the user.|
|id|path|string|true|Unique identifier for the preference set.|
|tenant|query|string|false|The unique identifier for the tenant.|

> Example responses

> 200 Response

```json
{
  "categories": {
    "marketing": false,
    "transactional": {
      "channel_types": {
        "email": false
      }
    }
  },
  "channel_types": {
    "email": true,
    "push": false,
    "sms": {
      "conditions": [
        {
          "argument": "US",
          "operator": "equal_to",
          "variable": "recipient.country_code"
        }
      ]
    }
  },
  "commercial_subscribed": true,
  "id": "default",
  "workflows": null
}
```

<h3 id="get-user-preference-set-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[PreferenceSet](#schemapreferenceset)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

## Update user preference set

<a id="opIdupdateUserPreferenceSet"></a>

> Code samples

```bash
curl https://api.knock.app/v1/users/string/preferences/default \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "__persistence_strategy__": "merge",
    "categories": {
      "marketing": false,
      "transactional": {
        "channel_types": {
          "email": false
        }
      }
    },
    "channel_types": {
      "email": true
    },
    "channels": {
      "2f641633-95d3-4555-9222-9f1eb7888a80": {
        "conditions": [
          {
            "argument": "US",
            "operator": "equal_to",
            "variable": "recipient.country_code"
          }
        ]
      },
      "aef6e715-df82-4ab6-b61e-b743e249f7b6": true
    },
    "commercial_subscribed": true,
    "workflows": {
      "dinosaurs-loose": {
        "channel_types": {
          "email": false
        }
      }
    }
  }'
```

`PUT /v1/users/{user_id}/preferences/{id}`

Updates a complete preference set for a user. By default, this is a destructive operation and will replace any existing preferences with the preferences given. Use '__persistence_strategy__': 'merge' to merge with existing preferences instead.

> Body parameter

```json
{
  "__persistence_strategy__": "merge",
  "categories": {
    "marketing": false,
    "transactional": {
      "channel_types": {
        "email": false
      }
    }
  },
  "channel_types": {
    "email": true
  },
  "channels": {
    "2f641633-95d3-4555-9222-9f1eb7888a80": {
      "conditions": [
        {
          "argument": "US",
          "operator": "equal_to",
          "variable": "recipient.country_code"
        }
      ]
    },
    "aef6e715-df82-4ab6-b61e-b743e249f7b6": true
  },
  "commercial_subscribed": true,
  "workflows": {
    "dinosaurs-loose": {
      "channel_types": {
        "email": false
      }
    }
  }
}
```

<h3 id="update-user-preference-set-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|user_id|path|string|true|The unique identifier of the user.|
|id|path|string|true|Unique identifier for the preference set.|
|body|body|[PreferenceSetRequest](#schemapreferencesetrequest)|true|Params|
|» __persistence_strategy__|body|string|false|Controls how the preference set is persisted. 'replace' will completely replace the preference set, 'merge' will merge with existing preferences.|
|» categories|body|object \| object \| null|false|An object where the key is the category and the values are the preference settings for that category.|
|» » *anyOf*|body|object|false|An object where the key is the category and the values are the preference settings for that category.|
|» » **additionalProperties**|body|[PreferenceSetWorkflowCategorySetting](#schemapreferencesetworkflowcategorysetting)|false|Workflow or category preferences within a preference set|
|» » *anyOf*|body|object \| null|false|none|
|» channel_types|body|[PreferenceSetChannelTypes](#schemapreferencesetchanneltypes) \| object \| null|false|An object where the key is the channel type and the values are the preference settings for that channel type.|
|» » *anyOf*|body|[PreferenceSetChannelTypes](#schemapreferencesetchanneltypes)|false|Channel type preferences.|
|» » *anyOf*|body|object \| null|false|none|
|» channels|body|[PreferenceSetChannels](#schemapreferencesetchannels) \| object \| null|false|An object where the key is the channel ID and the values are the preference settings for that channel ID.|
|» » *anyOf*|body|[PreferenceSetChannels](#schemapreferencesetchannels)|false|Channel preferences.|
|» » *anyOf*|body|object \| null|false|none|
|» commercial_subscribed|body|boolean \| [PreferenceSetCommercialSubscribedSetting](#schemapreferencesetcommercialsubscribedsetting) \| object \| null|false|Whether the recipient is subscribed to commercial communications. When false, the recipient will not receive commercial workflow notifications. Can also be set to a settings object with conditions that are evaluated at notification send time.|
|» » *anyOf*|body|boolean|false|none|
|» » *anyOf*|body|[PreferenceSetCommercialSubscribedSetting](#schemapreferencesetcommercialsubscribedsetting)|false|A set of settings for the commercial subscribed preference. Currently, this can only be a list of conditions to apply.|
|» » *anyOf*|body|object \| null|false|none|
|» workflows|body|object \| object \| null|false|An object where the key is the workflow key and the values are the preference settings for that workflow.|
|» » *anyOf*|body|object|false|An object where the key is the workflow key and the values are the preference settings for that workflow.|
|» » **additionalProperties**|body|[PreferenceSetWorkflowCategorySetting](#schemapreferencesetworkflowcategorysetting)|false|Workflow or category preferences within a preference set|
|» » *anyOf*|body|object \| null|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» __persistence_strategy__|merge|
|» __persistence_strategy__|replace|

> Example responses

> 200 Response

```json
{
  "categories": {
    "marketing": false,
    "transactional": {
      "channel_types": {
        "email": false
      }
    }
  },
  "channel_types": {
    "email": true,
    "push": false,
    "sms": {
      "conditions": [
        {
          "argument": "US",
          "operator": "equal_to",
          "variable": "recipient.country_code"
        }
      ]
    }
  },
  "commercial_subscribed": true,
  "id": "default",
  "workflows": null
}
```

<h3 id="update-user-preference-set-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[PreferenceSet](#schemapreferenceset)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

## Delete user preference set

<a id="opIddeleteUserPreferenceSet"></a>

> Code samples

```bash
curl https://api.knock.app/v1/users/string/preferences/default \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /v1/users/{user_id}/preferences/{id}`

Unsets the preference set for the user, removing it entirely.

<h3 id="delete-user-preference-set-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|user_id|path|string|true|The unique identifier of the user.|
|id|path|string|true|Unique identifier for the preference set.|

<h3 id="delete-user-preference-set-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

## Create preference center signed URL

<a id="opIdgeneratePreferenceCenterSignedUrl"></a>

> Code samples

```bash
curl https://api.knock.app/v1/users/string/preference_center/signed_url \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /v1/users/{user_id}/preference_center/signed_url`

Generates a signed preference center URL and token for the given user in the current environment.

<h3 id="create-preference-center-signed-url-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|user_id|path|string|true|The unique identifier of the user.|

> Example responses

> 200 Response

```json
{
  "token": "eyJhbGciOiJIUzI1NiJ9...",
  "url": "https://p.knock.app/p/eyJhbGciOiJIUzI1NiJ9..."
}
```

<h3 id="create-preference-center-signed-url-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[PreferenceCenterSignedUrlResponse](#schemapreferencecentersignedurlresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

<h1 id="knock-api-workflow-recipient-runs">Workflow recipient runs</h1>

A workflow run represents an individual execution of a workflow for a specific recipient.

## Get a workflow recipient run

<a id="opIdgetWorkflowRecipientRun"></a>

> Code samples

```bash
curl https://api.knock.app/v1/workflow_recipient_runs/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/workflow_recipient_runs/{id}`

Returns a single workflow recipient run with its associated events.

<h3 id="get-a-workflow-recipient-run-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The unique identifier for the workflow recipient run (per-recipient).|

> Example responses

> 200 Response

```json
{
  "__typename": "WorkflowRecipientRun",
  "actor": "user_456",
  "error_count": 0,
  "events": [
    {
      "__typename": "WorkflowRecipientRunEvent",
      "attempt": 1,
      "data": {
        "channel_type": "email",
        "message_id": "2FVHPWxRqNuXQ9krvNP5A6Z4qXe"
      },
      "event": "message_enqueued",
      "id": "2FVHPWxRqNuXQ9krvNP5A6Z4qXe",
      "inserted_at": "2025-01-01T00:00:00Z",
      "status": "ok",
      "step_ref": "email_step_1",
      "step_type": "channel"
    }
  ],
  "id": "550e8400-e29b-41d4-a716-446655440000",
  "inserted_at": "2025-01-01T00:00:00Z",
  "recipient": "user_123",
  "status": "completed",
  "tenant": "tenant_abc",
  "trigger_source": {
    "cancellation_key": "comment-123-user-456",
    "type": "api"
  },
  "updated_at": "2025-01-01T00:05:00Z",
  "workflow": "comment-created",
  "workflow_run_id": "660e8400-e29b-41d4-a716-446655440000"
}
```

<h3 id="get-a-workflow-recipient-run-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[WorkflowRecipientRunDetail](#schemaworkflowrecipientrundetail)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

## List workflow recipient runs

<a id="opIdlistWorkflowRecipientRuns"></a>

> Code samples

```bash
curl https://api.knock.app/v1/workflow_recipient_runs \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/workflow_recipient_runs`

Returns a paginated list of workflow recipient runs for the current environment.

<h3 id="list-workflow-recipient-runs-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|after|query|string|false|The cursor to fetch entries after.|
|before|query|string|false|The cursor to fetch entries before.|
|page_size|query|integer|false|The number of items per page (defaults to 50).|
|workflow|query|string|false|Limits the results to workflow recipient runs for the given workflow key.|
|status|query|[string]|false|Limits the results to workflow recipient runs with the given status.|
|tenant|query|string|false|Limits the results to workflow recipient runs for the given tenant.|
|has_errors|query|boolean|false|Limits the results to workflow recipient runs that have errors.|
|recipient|query|[RecipientReference](#schemarecipientreference)|false|Limits the results to workflow recipient runs for the given recipient. Accepts a user ID string or an object reference with `id` and `collection`.|
|starting_at|query|string(date-time)|false|Limits the results to workflow recipient runs started after the given date.|
|ending_at|query|string(date-time)|false|Limits the results to workflow recipient runs started before the given date.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|status|queued|
|status|processing|
|status|paused|
|status|completed|
|status|cancelled|

> Example responses

> 200 Response

```json
{
  "items": [
    {
      "__typename": "WorkflowRecipientRun",
      "actor": "user_456",
      "error_count": 0,
      "id": "550e8400-e29b-41d4-a716-446655440000",
      "inserted_at": "2025-01-01T00:00:00Z",
      "recipient": "user_123",
      "status": "completed",
      "tenant": "tenant_abc",
      "trigger_source": {
        "cancellation_key": "comment-123-user-456",
        "type": "api"
      },
      "updated_at": "2025-01-01T00:05:00Z",
      "workflow": "comment-created",
      "workflow_run_id": "660e8400-e29b-41d4-a716-446655440000"
    }
  ],
  "page_info": {
    "__typename": "PageInfo",
    "after": null,
    "before": null,
    "page_size": 25
  }
}
```

<h3 id="list-workflow-recipient-runs-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[ListWorkflowRecipientRunsResponse](#schemalistworkflowrecipientrunsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

<h1 id="knock-api-workflow-triggers">Workflow Triggers</h1>

Operations for triggering and canceling workflow executions.

## Trigger workflow

<a id="opIdtriggerWorkflow (2)"></a>

> Code samples

```bash
curl https://api.knock.app/v1/notify \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "actor": "user_123",
    "cancellation_key": "comment_123",
    "data": {
      "comment": "Great work on this feature!",
      "url": "https://example.com/projects/123/comments/456"
    },
    "name": "new-comment",
    "recipients": [
      "user_456",
      {
        "collection": "projects",
        "id": "project_789"
      }
    ]
  }'
```

`POST /v1/notify`

Triggers a workflow with the given key, actor, recipients, and optional data.

> Body parameter

```json
{
  "actor": "user_123",
  "cancellation_key": "comment_123",
  "data": {
    "comment": "Great work on this feature!",
    "url": "https://example.com/projects/123/comments/456"
  },
  "name": "new-comment",
  "recipients": [
    "user_456",
    {
      "collection": "projects",
      "id": "project_789"
    }
  ]
}
```

<h3 id="trigger-workflow-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[Notify Request](#schemanotify request)|true|Notify Payload|
|» actor|body|[RecipientReference](#schemarecipientreference)|true|A reference to a recipient, either a user identifier (string) or an object reference (ID, collection).|
|» cancellation_key|body|string \| null|false|A key that is used to reference a specific workflow trigger request when issuing a [workflow cancellation](/send-notifications/canceling-workflows) request. Must be provided while triggering a workflow in order to enable subsequent cancellation. Should be unique across trigger requests to avoid unintentional cancellations.|
|» data|body|object \| null|false|An optional map of data to pass into the workflow execution. There is a 10MB limit on the size of the full `data` payload. Any individual string value greater than 1024 bytes in length will be [truncated](/developer-tools/api-logs#log-truncation) in your logs.|
|» name|body|string|true|The key of the workflow to trigger.|
|» recipients|body|[[RecipientReference](#schemarecipientreference)]|true|A list of recipients.|

> Example responses

> 200 Response

```json
{
  "result_id": "wf_1234567890abcdef"
}
```

<h3 id="trigger-workflow-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[Notify Response](#schemanotify response)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

## Cancel workflow

<a id="opIdcancelWorkflow"></a>

> Code samples

```bash
curl https://api.knock.app/v1/notify/cancel \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "cancellation_key": "comment_123",
    "name": "new-comment",
    "recipients": [
      "user_456"
    ]
  }'
```

`POST /v1/notify/cancel`

Cancels a previously triggered workflow using the provided cancellation key.

> Body parameter

```json
{
  "cancellation_key": "comment_123",
  "name": "new-comment",
  "recipients": [
    "user_456"
  ]
}
```

<h3 id="cancel-workflow-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[Cancel Request](#schemacancel request)|true|Cancel Payload|
|» cancellation_key|body|string|true|A key that is used to reference a specific workflow trigger request when issuing a [workflow cancellation](/send-notifications/canceling-workflows) request. Must be provided while triggering a workflow in order to enable subsequent cancellation. Should be unique across trigger requests to avoid unintentional cancellations.|
|» name|body|string|true|The key of the workflow to cancel.|
|» recipients|body|[[RecipientReference](#schemarecipientreference)]|false|A list of recipients to cancel the notification for. If omitted, cancels for all recipients associated with the cancellation key.|

<h3 id="cancel-workflow-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

<h1 id="knock-api-workflows">Workflows</h1>

A workflow is a structured set of steps that is triggered to produce notifications sent over channels.

## Cancel workflow

<a id="opIdcancelWorkflow (2)"></a>

> Code samples

```bash
curl https://api.knock.app/v1/workflows/string/cancel \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "cancellation_key": "cancel-workflow-123",
    "recipients": [
      "jhammond"
    ]
  }'
```

`POST /v1/workflows/{key}/cancel`

When invoked for a workflow using a specific workflow key and cancellation key, will cancel any queued workflow runs associated with that key/cancellation key pair. Can optionally be provided one or more recipients to scope the request to.

> Body parameter

```json
{
  "cancellation_key": "cancel-workflow-123",
  "recipients": [
    "jhammond"
  ]
}
```

<h3 id="cancel-workflow-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|key|path|string|true|The key of the workflow to cancel.|
|body|body|[CancelWorkflowRequest](#schemacancelworkflowrequest)|true|Params|
|» cancellation_key|body|string|true|A key that is used to reference a specific workflow trigger request when issuing a [workflow cancellation](/send-notifications/canceling-workflows) request. Must be provided while triggering a workflow in order to enable subsequent cancellation. Should be unique across trigger requests to avoid unintentional cancellations.|
|» recipients|body|[[RecipientReference](#schemarecipientreference)]|false|A list of recipients to cancel the notification for. If omitted, cancels for all recipients associated with the cancellation key.|

<h3 id="cancel-workflow-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

## Trigger workflow

<a id="opIdtriggerWorkflow"></a>

> Code samples

```bash
curl https://api.knock.app/v1/workflows/string/trigger \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "actor": "mr_dna",
    "cancellation_key": "isla_nublar_incident_1993",
    "data": {
      "affected_areas": [
        "visitor_center",
        "raptor_pen",
        "trex_paddock"
      ],
      "attraction_id": "paddock_rex_01",
      "evacuation_protocol": "active",
      "message": "Life finds a way",
      "severity": "critical",
      "system_status": "fences_failing"
    },
    "recipients": [
      "dr_grant",
      "dr_sattler",
      "dr_malcolm"
    ],
    "settings": {
      "sandbox_mode": true,
      "skip_delay": true
    },
    "tenant": "ingen_isla_nublar"
  }'
```

`POST /v1/workflows/{key}/trigger`

Trigger a workflow (specified by the key) to run for the given recipients, using the parameters provided. Returns an identifier for the workflow run request. All workflow runs are executed asynchronously. This endpoint also handles [inline identifications](/managing-recipients/identifying-recipients#inline-identifying-recipients) for the `actor`, `recipient`, and `tenant` fields.

> Body parameter

```json
{
  "actor": "mr_dna",
  "cancellation_key": "isla_nublar_incident_1993",
  "data": {
    "affected_areas": [
      "visitor_center",
      "raptor_pen",
      "trex_paddock"
    ],
    "attraction_id": "paddock_rex_01",
    "evacuation_protocol": "active",
    "message": "Life finds a way",
    "severity": "critical",
    "system_status": "fences_failing"
  },
  "recipients": [
    "dr_grant",
    "dr_sattler",
    "dr_malcolm"
  ],
  "settings": {
    "sandbox_mode": true,
    "skip_delay": true
  },
  "tenant": "ingen_isla_nublar"
}
```

<h3 id="trigger-workflow-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|key|path|string|true|Key of the workflow to trigger.|
|body|body|[TriggerWorkflowRequest](#schematriggerworkflowrequest)|true|Params|
|» actor|body|[RecipientRequest](#schemarecipientrequest) \| object \| null|false|A map of properties describing a user or an object to identify in Knock and mark as who or what performed the action.|
|» » *anyOf*|body|[RecipientRequest](#schemarecipientrequest)|false|Specifies a recipient in a request. This can either be a user identifier (string), an inline user request (object), or an inline object request, which is determined by the presence of a `collection` property.|
|» » *anyOf*|body|object \| null|false|none|
|» cancellation_key|body|string \| null|false|A key that is used to reference a specific workflow trigger request when issuing a [workflow cancellation](/send-notifications/canceling-workflows) request. Must be provided while triggering a workflow in order to enable subsequent cancellation. Should be unique across trigger requests to avoid unintentional cancellations.|
|» data|body|object \| null|false|An optional map of data to pass into the workflow execution. There is a 10MB limit on the size of the full `data` payload. Any individual string value greater than 1024 bytes in length will be [truncated](/developer-tools/api-logs#log-truncation) in your logs.|
|» recipients|body|[[RecipientRequest](#schemarecipientrequest)]|true|The recipients to trigger the workflow for. Can inline identify users, objects, or use a list of user IDs. Limited to 1,000 recipients.|
|» settings|body|object \| null|false|Optional settings that control how this workflow trigger is executed.|
|» » sandbox_mode|body|boolean \| null|false|When set to true, overrides the sandbox mode for all channels in this workflow run, messages are not delivered to the underlying providers. If false or not set, the workflow delivers messages normally.|
|» » skip_delay|body|boolean \| null|false|When set to true, skips all delay steps in the workflow for this trigger request. If false or not set, delay steps execute normally.|
|» tenant|body|[InlineTenantRequest](#schemainlinetenantrequest) \| object \| null|false|The tenant to trigger the workflow for. Triggering with a tenant will use any tenant-level overrides associated with the tenant object, and all messages produced from workflow runs will be tagged with the tenant.|
|» » *anyOf*|body|[InlineTenantRequest](#schemainlinetenantrequest)|false|An request to set a tenant inline.|
|» » *anyOf*|body|object \| null|false|none|

> Example responses

> 200 Response

```json
{
  "workflow_run_id": "123e4567-e89b-12d3-a456-426614174000"
}
```

<h3 id="trigger-workflow-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[TriggerWorkflowResponse](#schematriggerworkflowresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

<h1 id="knock-api-guides">Guides</h1>

## Mark guide as interacted

<a id="opIdmarkUserGuideAsInteracted (2)"></a>

> Code samples

```bash
curl https://api.knock.app/v1/users/string/guides/messages/interacted \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "channel_id": "123e4567-e89b-12d3-a456-426614174000",
    "guide_id": "7e9dc78c-b3b1-4127-a54e-71f1899b831a",
    "guide_key": "tour_notification",
    "guide_step_ref": "lab_tours",
    "metadata": {
      "cta": "Reserve Spot",
      "theme": "amber",
      "type": "banner"
    },
    "tenant": "ingen_isla_nublar"
  }'
```

`PUT /v1/users/{user_id}/guides/messages/interacted`

Records that a user has interacted with a guide, triggering any associated interacted events.

> Body parameter

```json
{
  "channel_id": "123e4567-e89b-12d3-a456-426614174000",
  "guide_id": "7e9dc78c-b3b1-4127-a54e-71f1899b831a",
  "guide_key": "tour_notification",
  "guide_step_ref": "lab_tours",
  "metadata": {
    "cta": "Reserve Spot",
    "theme": "amber",
    "type": "banner"
  },
  "tenant": "ingen_isla_nublar"
}
```

<h3 id="mark-guide-as-interacted-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|user_id|path|string|true|The unique identifier of the user.|
|body|body|[GuideInteractedRequest](#schemaguideinteractedrequest)|true|Params|
|» channel_id|body|string(uuid)|true|The unique identifier for the channel.|
|» guide_id|body|string(uuid)|true|The unique identifier for the guide.|
|» guide_key|body|string|true|The key of the guide.|
|» guide_step_ref|body|string|true|The step reference of the guide.|
|» metadata|body|object|false|Metadata about the interaction.|
|» tenant|body|string|false|The tenant ID of the guide.|

> Example responses

> 200 Response

```json
{
  "status": "ok"
}
```

<h3 id="mark-guide-as-interacted-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[GuideActionResponse](#schemaguideactionresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

## Mark guide as archived

<a id="opIdmarkUserGuideAsArchived (2)"></a>

> Code samples

```bash
curl https://api.knock.app/v1/users/string/guides/messages/archived \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "channel_id": "123e4567-e89b-12d3-a456-426614174000",
    "guide_id": "7e9dc78c-b3b1-4127-a54e-71f1899b831a",
    "guide_key": "tour_notification",
    "guide_step_ref": "lab_tours",
    "is_final": false,
    "tenant": "ingen_isla_nublar",
    "unthrottled": false
  }'
```

`PUT /v1/users/{user_id}/guides/messages/archived`

Records that a guide has been archived by a user, triggering any associated archived events.

> Body parameter

```json
{
  "channel_id": "123e4567-e89b-12d3-a456-426614174000",
  "guide_id": "7e9dc78c-b3b1-4127-a54e-71f1899b831a",
  "guide_key": "tour_notification",
  "guide_step_ref": "lab_tours",
  "is_final": false,
  "tenant": "ingen_isla_nublar",
  "unthrottled": false
}
```

<h3 id="mark-guide-as-archived-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|user_id|path|string|true|The unique identifier of the user.|
|body|body|[GuideArchivedRequest](#schemaguidearchivedrequest)|true|Params|
|» channel_id|body|string(uuid)|true|The unique identifier for the channel.|
|» guide_id|body|string(uuid)|true|The unique identifier for the guide.|
|» guide_key|body|string|true|The key of the guide.|
|» guide_step_ref|body|string|true|The step reference of the guide.|
|» is_final|body|boolean|false|Whether the guide is final.|
|» tenant|body|string|false|The tenant ID of the guide.|
|» unthrottled|body|boolean|false|Whether the guide bypasses its guide group's throttle settings. When true, archiving the guide does not open a new throttle window.|

> Example responses

> 200 Response

```json
{
  "status": "ok"
}
```

<h3 id="mark-guide-as-archived-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[GuideActionResponse](#schemaguideactionresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

## Mark guide as unarchived

<a id="opIdmarkUserGuideAsUnarchived"></a>

> Code samples

```bash
curl https://api.knock.app/v1/users/string/guides/messages/archived \
  -X DELETE \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "guide_key": "tour_notification",
    "tenant": "ingen_isla_nublar"
  }'
```

`DELETE /v1/users/{user_id}/guides/messages/archived`

Records that a guide has been unarchived, triggering any associated unarchived events.

> Body parameter

```json
{
  "guide_key": "tour_notification",
  "tenant": "ingen_isla_nublar"
}
```

<h3 id="mark-guide-as-unarchived-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|user_id|path|string|true|The unique identifier of the user.|
|body|body|[GuideUnarchivedRequest](#schemaguideunarchivedrequest)|true|Params|
|» guide_key|body|string|true|The key of the guide.|
|» tenant|body|string|false|The tenant ID of the guide.|

> Example responses

> 200 Response

```json
{
  "status": "ok"
}
```

<h3 id="mark-guide-as-unarchived-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[GuideActionResponse](#schemaguideactionresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

## List guides

<a id="opIdlistUserGuides"></a>

> Code samples

```bash
curl https://api.knock.app/v1/users/string/guides/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/users/{user_id}/guides/{channel_id}`

Returns a list of eligible in-app guides for a specific user and channel.

<h3 id="list-guides-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|user_id|path|string|true|The unique identifier of the user.|
|channel_id|path|string(uuid)|true|The unique identifier for the channel.|
|tenant|query|string|false|The tenant ID to use for targeting and rendering guides.|
|data|query|string|false|The data (JSON encoded object) to use for targeting and rendering guides.|
|type|query|string|false|The type of guides to filter by.|

> Example responses

> 200 Response

```json
{
  "entries": [
    {
      "__typename": "Guide",
      "activation_url_patterns": [],
      "activation_url_rules": [
        {
          "argument": "/workflows",
          "directive": "allow",
          "operator": "contains",
          "variable": "pathname"
        },
        {
          "argument": "/guides",
          "directive": "allow",
          "operator": "equal_to",
          "variable": "pathname"
        }
      ],
      "active": true,
      "bypass_global_group_limit": false,
      "channel_id": "51b92f90-1504-4fda-95c1-495a3883bc4d",
      "dashboard_url": "https://dashboard.knock.app/~/guides/nps-survey",
      "id": "53595157-2fac-4a17-8dd7-e6603e32cb3a",
      "inserted_at": "2025-09-30T14:54:44.217756Z",
      "key": "nps-survey",
      "semver": "0.0.3",
      "steps": [
        {
          "content": {
            "companyName": "Knock",
            "showFeedbackSection": true,
            "showThanksToast": true
          },
          "message": {
            "archived_at": null,
            "id": "33hjnKRKNx9ISRlixVBjhpkh28J",
            "interacted_at": "2025-10-07T15:10:59.291Z",
            "link_clicked_at": null,
            "read_at": "2025-10-07T15:10:59.291Z",
            "seen_at": "2025-10-06T18:46:03.210Z"
          },
          "ref": "step_1",
          "schema_key": "nps-survey",
          "schema_semver": "0.0.3",
          "schema_variant_key": "default"
        }
      ],
      "type": "nps-survey",
      "updated_at": "2025-10-03T17:46:53.653663Z"
    },
    {
      "__typename": "Guide",
      "activation_url_patterns": [
        {
          "directive": "allow",
          "pathname": "/dairy/*"
        },
        {
          "directive": "allow",
          "pathname": "/produce",
          "search": "role=admin"
        },
        {
          "directive": "allow",
          "pathname": "/"
        }
      ],
      "activation_url_rules": [],
      "active": true,
      "bypass_global_group_limit": false,
      "channel_id": "51b92f90-1504-4fda-95c1-495a3883bc4d",
      "dashboard_url": "https://dashboard.knock.app/~/guides/changelog-card",
      "id": "4fc4503e-ef8b-473a-ae07-14800639d30c",
      "inserted_at": "2025-10-07T19:41:06.215233Z",
      "key": "changelog-card",
      "semver": "0.0.3",
      "steps": [
        {
          "content": {
            "body": "Lorem ipsum",
            "dismissible": false,
            "eyebrowText": "New in Knock",
            "image": {
              "action": "",
              "alt": "",
              "url": "https://bhoite.com/img/sculptures/2024/lander-r2/lander-r2.jpg"
            },
            "link": "https://dashboard.knock.app/knock/development/guides/changelog-card/editor",
            "title": "Changelog card"
          },
          "message": {
            "archived_at": null,
            "id": null,
            "interacted_at": null,
            "link_clicked_at": null,
            "read_at": null,
            "seen_at": null
          },
          "ref": "step_1",
          "schema_key": "changelog-card",
          "schema_semver": "0.0.3",
          "schema_variant_key": "default"
        }
      ],
      "type": "changelog-card",
      "updated_at": "2025-10-07T20:39:52.410146Z"
    }
  ],
  "guide_group_display_logs": {
    "default": "2025-08-16T00:47:14.025Z"
  },
  "guide_groups": [
    {
      "__typename": "GuideGroup",
      "display_interval": 3600,
      "display_sequence": [
        "nps-survey",
        "changelog-card"
      ],
      "inserted_at": "2025-07-24T21:06:27.394627Z",
      "key": "default",
      "updated_at": "2025-10-07T20:39:52.465400Z"
    }
  ],
  "ineligible_guides": [
    {
      "key": "onboarding-tour",
      "message": "User has archived this guide already",
      "reason": "marked_as_archived"
    },
    {
      "key": "premium-feature",
      "message": "User is not a member of the target audience",
      "reason": "not_in_target_audience"
    }
  ]
}
```

<h3 id="list-guides-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[GuidesResponse](#schemaguidesresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

## Reset guide engagement

<a id="opIdresetUserGuideEngagement"></a>

> Code samples

```bash
curl https://api.knock.app/v1/users/string/guides/engagements/reset \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "guide_key": "tour_notification",
    "tenant": "ingen_isla_nublar"
  }'
```

`PUT /v1/users/{user_id}/guides/engagements/reset`

Resets the engagement state of a guide for a user, removing the guide's engagement log entry so the next interaction creates a fresh engagement.

> Body parameter

```json
{
  "guide_key": "tour_notification",
  "tenant": "ingen_isla_nublar"
}
```

<h3 id="reset-guide-engagement-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|user_id|path|string|true|The unique identifier of the user.|
|body|body|[GuideResetRequest](#schemaguideresetrequest)|true|Params|
|» guide_key|body|string|true|The key of the guide.|
|» tenant|body|string|false|The tenant ID of the guide.|

> Example responses

> 200 Response

```json
{
  "status": "ok"
}
```

<h3 id="reset-guide-engagement-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[GuideActionResponse](#schemaguideactionresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

## Mark guide as archived

<a id="opIdmarkUserGuideAsArchived"></a>

> Code samples

```bash
curl 'https://api.knock.app/v1/users/string/guides/messages/{message_id}/archived' \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "channel_id": "123e4567-e89b-12d3-a456-426614174000",
    "guide_id": "7e9dc78c-b3b1-4127-a54e-71f1899b831a",
    "guide_key": "tour_notification",
    "guide_step_ref": "lab_tours",
    "is_final": false,
    "tenant": "ingen_isla_nublar",
    "unthrottled": false
  }'
```

`PUT /v1/users/{user_id}/guides/messages/{message_id}/archived`

Records that a guide has been archived by a user, triggering any associated archived events.

> Body parameter

```json
{
  "channel_id": "123e4567-e89b-12d3-a456-426614174000",
  "guide_id": "7e9dc78c-b3b1-4127-a54e-71f1899b831a",
  "guide_key": "tour_notification",
  "guide_step_ref": "lab_tours",
  "is_final": false,
  "tenant": "ingen_isla_nublar",
  "unthrottled": false
}
```

<h3 id="mark-guide-as-archived-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|user_id|path|string|true|The unique identifier of the user.|
|body|body|[GuideArchivedRequest](#schemaguidearchivedrequest)|true|Params|
|» channel_id|body|string(uuid)|true|The unique identifier for the channel.|
|» guide_id|body|string(uuid)|true|The unique identifier for the guide.|
|» guide_key|body|string|true|The key of the guide.|
|» guide_step_ref|body|string|true|The step reference of the guide.|
|» is_final|body|boolean|false|Whether the guide is final.|
|» tenant|body|string|false|The tenant ID of the guide.|
|» unthrottled|body|boolean|false|Whether the guide bypasses its guide group's throttle settings. When true, archiving the guide does not open a new throttle window.|

> Example responses

> 200 Response

```json
{
  "status": "ok"
}
```

<h3 id="mark-guide-as-archived-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[GuideActionResponse](#schemaguideactionresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

## Mark guide as seen

<a id="opIdmarkUserGuideAsSeen (2)"></a>

> Code samples

```bash
curl https://api.knock.app/v1/users/string/guides/messages/seen \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "channel_id": "123e4567-e89b-12d3-a456-426614174000",
    "content": {
      "body": "Limited spots available for today'\''s behind-the-scenes DNA extraction demonstration.",
      "title": "DNA Lab Tour Available"
    },
    "data": {
      "next_time": "14:30",
      "spots_left": 8,
      "tour_id": "dna_lab_tour"
    },
    "guide_id": "7e9dc78c-b3b1-4127-a54e-71f1899b831a",
    "guide_key": "tour_notification",
    "guide_step_ref": "lab_tours",
    "tenant": "ingen_isla_nublar"
  }'
```

`PUT /v1/users/{user_id}/guides/messages/seen`

Records that a guide has been seen by a user, triggering any associated seen events.

> Body parameter

```json
{
  "channel_id": "123e4567-e89b-12d3-a456-426614174000",
  "content": {
    "body": "Limited spots available for today's behind-the-scenes DNA extraction demonstration.",
    "title": "DNA Lab Tour Available"
  },
  "data": {
    "next_time": "14:30",
    "spots_left": 8,
    "tour_id": "dna_lab_tour"
  },
  "guide_id": "7e9dc78c-b3b1-4127-a54e-71f1899b831a",
  "guide_key": "tour_notification",
  "guide_step_ref": "lab_tours",
  "tenant": "ingen_isla_nublar"
}
```

<h3 id="mark-guide-as-seen-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|user_id|path|string|true|The unique identifier of the user.|
|body|body|[GuideSeenRequest](#schemaguideseenrequest)|true|Params|
|» channel_id|body|string(uuid)|true|The unique identifier for the channel.|
|» content|body|object|true|The content of the guide.|
|» data|body|object|false|The data of the guide.|
|» guide_id|body|string(uuid)|true|The unique identifier for the guide.|
|» guide_key|body|string|true|The key of the guide.|
|» guide_step_ref|body|string|true|The step reference of the guide.|
|» tenant|body|string|false|The tenant ID of the guide.|

> Example responses

> 200 Response

```json
{
  "status": "ok"
}
```

<h3 id="mark-guide-as-seen-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[GuideActionResponse](#schemaguideactionresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

## Mark guide as seen

<a id="opIdmarkUserGuideAsSeen"></a>

> Code samples

```bash
curl 'https://api.knock.app/v1/users/string/guides/messages/{message_id}/seen' \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "channel_id": "123e4567-e89b-12d3-a456-426614174000",
    "content": {
      "body": "Limited spots available for today'\''s behind-the-scenes DNA extraction demonstration.",
      "title": "DNA Lab Tour Available"
    },
    "data": {
      "next_time": "14:30",
      "spots_left": 8,
      "tour_id": "dna_lab_tour"
    },
    "guide_id": "7e9dc78c-b3b1-4127-a54e-71f1899b831a",
    "guide_key": "tour_notification",
    "guide_step_ref": "lab_tours",
    "tenant": "ingen_isla_nublar"
  }'
```

`PUT /v1/users/{user_id}/guides/messages/{message_id}/seen`

Records that a guide has been seen by a user, triggering any associated seen events.

> Body parameter

```json
{
  "channel_id": "123e4567-e89b-12d3-a456-426614174000",
  "content": {
    "body": "Limited spots available for today's behind-the-scenes DNA extraction demonstration.",
    "title": "DNA Lab Tour Available"
  },
  "data": {
    "next_time": "14:30",
    "spots_left": 8,
    "tour_id": "dna_lab_tour"
  },
  "guide_id": "7e9dc78c-b3b1-4127-a54e-71f1899b831a",
  "guide_key": "tour_notification",
  "guide_step_ref": "lab_tours",
  "tenant": "ingen_isla_nublar"
}
```

<h3 id="mark-guide-as-seen-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|user_id|path|string|true|The unique identifier of the user.|
|body|body|[GuideSeenRequest](#schemaguideseenrequest)|true|Params|
|» channel_id|body|string(uuid)|true|The unique identifier for the channel.|
|» content|body|object|true|The content of the guide.|
|» data|body|object|false|The data of the guide.|
|» guide_id|body|string(uuid)|true|The unique identifier for the guide.|
|» guide_key|body|string|true|The key of the guide.|
|» guide_step_ref|body|string|true|The step reference of the guide.|
|» tenant|body|string|false|The tenant ID of the guide.|

> Example responses

> 200 Response

```json
{
  "status": "ok"
}
```

<h3 id="mark-guide-as-seen-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[GuideActionResponse](#schemaguideactionresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

## Mark guide as interacted

<a id="opIdmarkUserGuideAsInteracted"></a>

> Code samples

```bash
curl 'https://api.knock.app/v1/users/string/guides/messages/{message_id}/interacted' \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "channel_id": "123e4567-e89b-12d3-a456-426614174000",
    "guide_id": "7e9dc78c-b3b1-4127-a54e-71f1899b831a",
    "guide_key": "tour_notification",
    "guide_step_ref": "lab_tours",
    "metadata": {
      "cta": "Reserve Spot",
      "theme": "amber",
      "type": "banner"
    },
    "tenant": "ingen_isla_nublar"
  }'
```

`PUT /v1/users/{user_id}/guides/messages/{message_id}/interacted`

Records that a user has interacted with a guide, triggering any associated interacted events.

> Body parameter

```json
{
  "channel_id": "123e4567-e89b-12d3-a456-426614174000",
  "guide_id": "7e9dc78c-b3b1-4127-a54e-71f1899b831a",
  "guide_key": "tour_notification",
  "guide_step_ref": "lab_tours",
  "metadata": {
    "cta": "Reserve Spot",
    "theme": "amber",
    "type": "banner"
  },
  "tenant": "ingen_isla_nublar"
}
```

<h3 id="mark-guide-as-interacted-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|user_id|path|string|true|The unique identifier of the user.|
|body|body|[GuideInteractedRequest](#schemaguideinteractedrequest)|true|Params|
|» channel_id|body|string(uuid)|true|The unique identifier for the channel.|
|» guide_id|body|string(uuid)|true|The unique identifier for the guide.|
|» guide_key|body|string|true|The key of the guide.|
|» guide_step_ref|body|string|true|The step reference of the guide.|
|» metadata|body|object|false|Metadata about the interaction.|
|» tenant|body|string|false|The tenant ID of the guide.|

> Example responses

> 200 Response

```json
{
  "status": "ok"
}
```

<h3 id="mark-guide-as-interacted-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[GuideActionResponse](#schemaguideactionresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

<h1 id="knock-api-integrations">Integrations</h1>

## Process a Census RPC request

<a id="opIdprocessCensusRpcRequest"></a>

> Code samples

```bash
curl https://api.knock.app/v1/integrations/census/custom-destination \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "id": "string",
    "jsonrpc": "string",
    "method": "string",
    "params": {}
  }'
```

`POST /v1/integrations/census/custom-destination`

Processes a Census custom destination RPC request.

> Body parameter

```json
{
  "id": "string",
  "jsonrpc": "string",
  "method": "string",
  "params": {}
}
```

<h3 id="process-a-census-rpc-request-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|Params|
|» id|body|string|true|The unique identifier for the RPC request.|
|» jsonrpc|body|string|true|The JSON-RPC version.|
|» method|body|string|true|The method name to execute.|
|» params|body|object|false|The parameters for the method.|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "result": {}
}
```

<h3 id="process-a-census-rpc-request-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="process-a-census-rpc-request-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|The request ID.|
|result|object|false|none|The result of the RPC call.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

## Process a Hightouch RPC request

<a id="opIdprocessHightouchRpcRequest"></a>

> Code samples

```bash
curl https://api.knock.app/v1/integrations/hightouch/embedded-destination \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "id": "string",
    "jsonrpc": "string",
    "method": "string",
    "params": {}
  }'
```

`POST /v1/integrations/hightouch/embedded-destination`

Processes a Hightouch embedded destination RPC request.

> Body parameter

```json
{
  "id": "string",
  "jsonrpc": "string",
  "method": "string",
  "params": {}
}
```

<h3 id="process-a-hightouch-rpc-request-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|Params|
|» id|body|string|true|The unique identifier for the RPC request.|
|» jsonrpc|body|string|true|The JSON-RPC version.|
|» method|body|string|true|The method name to execute.|
|» params|body|object|false|The parameters for the method.|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "result": {}
}
```

<h3 id="process-a-hightouch-rpc-request-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="process-a-hightouch-rpc-request-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|The request ID.|
|result|object|false|none|The result of the RPC call.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

<h1 id="knock-api-feeds">Feeds</h1>

## Get feed settings

<a id="opIdgetUserInAppFeedSettings"></a>

> Code samples

```bash
curl https://api.knock.app/v1/users/string/feeds/497f6eca-6276-4993-bfeb-53cbbbba6f08/settings \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/users/{user_id}/feeds/{id}/settings`

Returns the feed settings for a user.

<h3 id="get-feed-settings-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|user_id|path|string|true|The unique identifier of the user.|
|id|path|string(uuid)|true|The unique identifier for the channel.|

> Example responses

> 200 Response

```json
{
  "features": {
    "branding_required": true
  }
}
```

<h3 id="get-feed-settings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[UserInAppFeedSettingsResponse](#schemauserinappfeedsettingsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

## List feed items

<a id="opIdlistUserInAppFeedItems"></a>

> Code samples

```bash
curl https://api.knock.app/v1/users/string/feeds/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/users/{user_id}/feeds/{id}`

Returns a paginated list of feed items for a user in reverse chronological order, including metadata about the feed. If the user has not yet been identified within Knock, an empty feed will be returned.

You can customize the response using [response filters](/integrations/in-app/knock#customizing-api-response-content) to exclude or only include specific properties on your resources.

**Notes:**
* When making this call from a client-side environment, use your publishable key along with a user token.
* This endpoint’s rate limit is always scoped per-user and per-environment. This is true even for requests made without a signed user token.
* Any [attachments](/integrations/email/attachments) present in trigger data are automatically excluded from both the `data` and `activities` fields of `UserInAppFeedResponse`.


<h3 id="list-feed-items-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|user_id|path|string|true|The unique identifier of the user.|
|id|path|string(uuid)|true|The unique identifier for the channel.|
|status|query|string|false|The status of the feed items.|
|source|query|string|false|The workflow key associated with the message in the feed.|
|tenant|query|string|false|The tenant associated with the feed items.|
|has_tenant|query|boolean|false|Whether the feed items have a tenant.|
|workflow_categories|query|[string]|false|The workflow categories of the feed items.|
|archived|query|string|false|The archived status of the feed items.|
|trigger_data|query|string|false|The trigger data of the feed items (as a JSON string).|
|locale|query|string|false|The locale to render the feed items in. Must be in the IETF 5646 format (e.g. `en-US`). When not provided, will default to the locale that the feed items were rendered in. Only available for enterprise plan customers using custom translations.|
|exclude|query|string|false|Comma-separated list of field paths to exclude from the response. Use dot notation for nested fields (e.g., `entries.archived_at`). Limited to 3 levels deep.|
|mode|query|string|false|The mode to render the feed items in. Can be `compact` or `rich`. Defaults to `rich`. When `mode` is `compact`, feed items will not have `activities` and `total_activities` fields; the `data` field will not include nested arrays and objects; and the `actors` field will only have up to one actor.|
|after|query|string|false|The cursor to fetch entries after.|
|before|query|string|false|The cursor to fetch entries before.|
|page_size|query|integer|false|The number of items per page (defaults to 50).|
|inserted_at.gt|query|string|false|Limits the results to items inserted after the given date.|
|inserted_at.gte|query|string|false|Limits the results to items inserted after or on the given date.|
|inserted_at.lt|query|string|false|Limits the results to items inserted before the given date.|
|inserted_at.lte|query|string|false|Limits the results to items inserted before or on the given date.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|status|unread|
|status|read|
|status|unseen|
|status|seen|
|status|all|
|archived|exclude|
|archived|include|
|archived|only|
|mode|compact|
|mode|rich|

> Example responses

> 200 Response

```json
{
  "entries": [
    {
      "__typename": "FeedItem",
      "activities": [
        {
          "__typename": "Activity",
          "actor": null,
          "data": {
            "foo": "bar"
          },
          "id": "2FVHPWxRqNuXQ9krvNP5A6Z4qXe",
          "inserted_at": "2024-01-01T00:00:00Z",
          "recipient": {
            "__typename": "User",
            "avatar": null,
            "created_at": null,
            "email": "jane@ingen.net",
            "id": "jane",
            "name": "Jane Doe",
            "phone_number": null,
            "timezone": null,
            "updated_at": "2024-05-22T12:00:00Z"
          },
          "updated_at": "2024-01-01T00:00:00Z"
        }
      ],
      "actors": [
        {
          "__typename": "User",
          "avatar": null,
          "created_at": null,
          "email": "jane@ingen.net",
          "id": "jane",
          "name": "Jane Doe",
          "phone_number": null,
          "timezone": null,
          "updated_at": "2024-05-22T12:00:00Z"
        }
      ],
      "blocks": [
        {
          "content": "This is a message in an app feed",
          "name": "body",
          "rendered": "<p>This is a message in an app feed</p>",
          "type": "markdown"
        }
      ],
      "data": {
        "foo": "bar"
      },
      "id": "2FVHPWxRqNuXQ9krvNP5A6Z4qXe",
      "inserted_at": "2021-01-01T00:00:00Z",
      "source": {
        "__typename": "Workflow",
        "categories": [
          "collaboration"
        ],
        "key": "my_source",
        "version_id": "123e4567-e89b-12d3-a456-426614174000"
      },
      "tenant": "acme_corp",
      "total_activities": 10,
      "total_actors": 5,
      "updated_at": "2021-01-01T00:00:00Z"
    }
  ],
  "meta": {
    "__typename": "FeedMetadata",
    "total_count": 100,
    "unread_count": 10,
    "unseen_count": 5
  },
  "page_info": {
    "__typename": "PageInfo",
    "after": null,
    "before": null,
    "page_size": 25
  },
  "vars": {
    "foo": "bar"
  }
}
```

<h3 id="list-feed-items-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[UserInAppFeedResponse](#schemauserinappfeedresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

# Schemas

<h2 id="tocS_User">User</h2>
<!-- backwards compatibility -->
<a id="schemauser"></a>
<a id="schema_User"></a>
<a id="tocSuser"></a>
<a id="tocsuser"></a>

```json
{
  "__typename": "User",
  "created_at": null,
  "email": "ian.malcolm@chaos.theory",
  "id": "user_id",
  "name": "Dr. Ian Malcolm",
  "updated_at": "2024-05-22T12:00:00Z"
}
```

A [User](/concepts/users) represents an individual in your system who can receive notifications through Knock. Users are the most common recipients of notifications and are always referenced by your internal identifier.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|__typename|string|true|none|The typename of the schema.|
|avatar|string \| null|false|none|A URL for the avatar of the user.|
|created_at|string(date-time) \| null|false|none|The creation date of the user from your system.|
|email|string \| null|false|none|The primary email address for the user.|
|id|string|true|none|The unique identifier of the user.|
|name|string \| null|false|none|Display name of the user.|
|phone_number|string \| null|false|none|The [E.164](https://www.twilio.com/docs/glossary/what-e164) phone number of the user (required for SMS channels).|
|timezone|string \| null|false|none|The timezone of the user. Must be a valid [tz database time zone string](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones). Used for [recurring schedules](/concepts/schedules#scheduling-workflows-with-recurring-schedules-for-recipients).|
|updated_at|string(date-time)|true|none|The timestamp when the resource was last updated.|

<h2 id="tocS_UserInAppFeedResponse">UserInAppFeedResponse</h2>
<!-- backwards compatibility -->
<a id="schemauserinappfeedresponse"></a>
<a id="schema_UserInAppFeedResponse"></a>
<a id="tocSuserinappfeedresponse"></a>
<a id="tocsuserinappfeedresponse"></a>

```json
{
  "entries": [
    {
      "__typename": "FeedItem",
      "activities": [
        {
          "__typename": "Activity",
          "actor": null,
          "data": {
            "foo": "bar"
          },
          "id": "2FVHPWxRqNuXQ9krvNP5A6Z4qXe",
          "inserted_at": "2024-01-01T00:00:00Z",
          "recipient": {
            "__typename": "User",
            "avatar": null,
            "created_at": null,
            "email": "jane@ingen.net",
            "id": "jane",
            "name": "Jane Doe",
            "phone_number": null,
            "timezone": null,
            "updated_at": "2024-05-22T12:00:00Z"
          },
          "updated_at": "2024-01-01T00:00:00Z"
        }
      ],
      "actors": [
        {
          "__typename": "User",
          "avatar": null,
          "created_at": null,
          "email": "jane@ingen.net",
          "id": "jane",
          "name": "Jane Doe",
          "phone_number": null,
          "timezone": null,
          "updated_at": "2024-05-22T12:00:00Z"
        }
      ],
      "blocks": [
        {
          "content": "This is a message in an app feed",
          "name": "body",
          "rendered": "<p>This is a message in an app feed</p>",
          "type": "markdown"
        }
      ],
      "data": {
        "foo": "bar"
      },
      "id": "2FVHPWxRqNuXQ9krvNP5A6Z4qXe",
      "inserted_at": "2021-01-01T00:00:00Z",
      "source": {
        "__typename": "Workflow",
        "categories": [
          "collaboration"
        ],
        "key": "my_source",
        "version_id": "123e4567-e89b-12d3-a456-426614174000"
      },
      "tenant": "acme_corp",
      "total_activities": 10,
      "total_actors": 5,
      "updated_at": "2021-01-01T00:00:00Z"
    }
  ],
  "meta": {
    "__typename": "FeedMetadata",
    "total_count": 100,
    "unread_count": 10,
    "unseen_count": 5
  },
  "page_info": {
    "__typename": "PageInfo",
    "after": null,
    "before": null,
    "page_size": 25
  },
  "vars": {
    "foo": "bar"
  }
}
```

A paginated list of feed items.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|entries|[[InAppFeedItem](#schemainappfeeditem)]|true|none|The list of feed items in the user's feed.|
|meta|object|true|none|The metadata for the user's feed.|
|page_info|[PageInfo](#schemapageinfo)|true|none|Pagination information for a list of resources.|
|vars|object|true|none|Additional variables for the feed item.|

<h2 id="tocS_PreferenceSetRequest">PreferenceSetRequest</h2>
<!-- backwards compatibility -->
<a id="schemapreferencesetrequest"></a>
<a id="schema_PreferenceSetRequest"></a>
<a id="tocSpreferencesetrequest"></a>
<a id="tocspreferencesetrequest"></a>

```json
{
  "__persistence_strategy__": "merge",
  "categories": {
    "marketing": false,
    "transactional": {
      "channel_types": {
        "email": false
      }
    }
  },
  "channel_types": {
    "email": true
  },
  "channels": {
    "2f641633-95d3-4555-9222-9f1eb7888a80": {
      "conditions": [
        {
          "argument": "US",
          "operator": "equal_to",
          "variable": "recipient.country_code"
        }
      ]
    },
    "aef6e715-df82-4ab6-b61e-b743e249f7b6": true
  },
  "commercial_subscribed": true,
  "workflows": {
    "dinosaurs-loose": {
      "channel_types": {
        "email": false
      }
    }
  }
}
```

A request to set a preference set for a recipient.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|__persistence_strategy__|string|false|none|Controls how the preference set is persisted. 'replace' will completely replace the preference set, 'merge' will merge with existing preferences.|
|categories|object \| object \| null|false|none|An object where the key is the category and the values are the preference settings for that category.|
|channel_types|[PreferenceSetChannelTypes](#schemapreferencesetchanneltypes) \| object \| null|false|none|An object where the key is the channel type and the values are the preference settings for that channel type.|
|channels|[PreferenceSetChannels](#schemapreferencesetchannels) \| object \| null|false|none|An object where the key is the channel ID and the values are the preference settings for that channel ID.|
|commercial_subscribed|boolean \| [PreferenceSetCommercialSubscribedSetting](#schemapreferencesetcommercialsubscribedsetting) \| object \| null|false|none|Whether the recipient is subscribed to commercial communications. When false, the recipient will not receive commercial workflow notifications. Can also be set to a settings object with conditions that are evaluated at notification send time.|
|workflows|object \| object \| null|false|none|An object where the key is the workflow key and the values are the preference settings for that workflow.|

#### Enumerated Values

|Property|Value|
|---|---|
|__persistence_strategy__|merge|
|__persistence_strategy__|replace|

<h2 id="tocS_ChannelsForSlackProviderResponse">ChannelsForSlackProviderResponse</h2>
<!-- backwards compatibility -->
<a id="schemachannelsforslackproviderresponse"></a>
<a id="schema_ChannelsForSlackProviderResponse"></a>
<a id="tocSchannelsforslackproviderresponse"></a>
<a id="tocschannelsforslackproviderresponse"></a>

```json
{
  "next_cursor": null,
  "slack_channels": [
    {
      "context_team_id": "T01234567890",
      "id": "C01234567890",
      "is_im": false,
      "is_private": false,
      "name": "general"
    }
  ]
}
```

The response from a Slack provider request, containing a list of channels.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|next_cursor|string \| null|true|none|Paginate through collections of data by setting the cursor parameter to a next_cursor attribute returned by a previous request's response_metadata. Default value fetches the first "page" of the collection.|
|slack_channels|[object]|true|none|List of Slack channels.|

<h2 id="tocS_AudienceMember">AudienceMember</h2>
<!-- backwards compatibility -->
<a id="schemaaudiencemember"></a>
<a id="schema_AudienceMember"></a>
<a id="tocSaudiencemember"></a>
<a id="tocsaudiencemember"></a>

```json
{
  "__typename": "AudienceMember",
  "added_at": "1993-06-10T14:30:00Z",
  "tenant": "ingen_isla_nublar",
  "user": {
    "__typename": "User",
    "created_at": null,
    "email": "alan.grant@dig.site.mt",
    "id": "dr_grant",
    "name": "Dr. Alan Grant",
    "updated_at": "1993-06-09T08:15:00Z"
  },
  "user_id": "dr_grant"
}
```

An audience member.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|__typename|string|true|none|The typename of the schema.|
|added_at|string(date-time)|true|none|Timestamp when the resource was created.|
|tenant|string \| null|false|none|The unique identifier for the tenant.|
|user|[User](#schemauser)|true|none|A [User](/concepts/users) represents an individual in your system who can receive notifications through Knock. Users are the most common recipients of notifications and are always referenced by your internal identifier.|
|user_id|string|true|none|The unique identifier of the user.|

<h2 id="tocS_Subscription">Subscription</h2>
<!-- backwards compatibility -->
<a id="schemasubscription"></a>
<a id="schema_Subscription"></a>
<a id="tocSsubscription"></a>
<a id="tocssubscription"></a>

```json
{
  "__typename": "Subscription",
  "inserted_at": "2021-01-01T00:00:00Z",
  "object": {
    "__typename": "Object",
    "collection": "assets",
    "created_at": null,
    "id": "specimen_25",
    "properties": {
      "classification": "Theropod",
      "config": {
        "biz": "baz",
        "foo": "bar"
      },
      "name": "Velociraptor",
      "status": "contained"
    },
    "updated_at": "2024-05-22T12:00:00Z"
  },
  "recipient": {
    "__typename": "User",
    "avatar": null,
    "created_at": null,
    "email": "jane@ingen.net",
    "id": "jane",
    "name": "Jane Doe",
    "phone_number": null,
    "timezone": null,
    "updated_at": "2024-05-22T12:00:00Z"
  },
  "updated_at": "2021-01-01T00:00:00Z"
}
```

A subscription object.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|__typename|string|true|none|The typename of the schema.|
|inserted_at|string(date-time)|true|none|Timestamp when the resource was created.|
|object|[Object](#schemaobject)|true|none|A custom [Object](/concepts/objects) entity which belongs to a collection.|
|properties|object \| null|false|none|The custom properties associated with the subscription relationship.|
|recipient|[Recipient](#schemarecipient)|true|none|A recipient of a notification, which is either a user or an object.|
|updated_at|string(date-time)|true|none|The timestamp when the resource was last updated.|

<h2 id="tocS_RecipientReference">RecipientReference</h2>
<!-- backwards compatibility -->
<a id="schemarecipientreference"></a>
<a id="schema_RecipientReference"></a>
<a id="tocSrecipientreference"></a>
<a id="tocsrecipientreference"></a>

```json
"user_123"
```

A reference to a recipient, either a user identifier (string) or an object reference (ID, collection).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|string|false|none|The ID of the user which is used as the reference for the recipient.|
|*oneOf*|object|false|none|A reference to a recipient object.|
|collection|string|false|none|The collection the recipient object belongs to.|
|id|string|false|none|An identifier for the recipient object.|

<h2 id="tocS_InlineTenantRequest">InlineTenantRequest</h2>
<!-- backwards compatibility -->
<a id="schemainlinetenantrequest"></a>
<a id="schema_InlineTenantRequest"></a>
<a id="tocSinlinetenantrequest"></a>
<a id="tocsinlinetenantrequest"></a>

```json
{
  "id": "tenant_1",
  "name": "Acme Corp, Inc."
}
```

An request to set a tenant inline.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|string|false|none|The unique identifier for the tenant.|
|*oneOf*|[TenantRequest](#schematenantrequest)|false|none|A tenant to be set in the system. You can supply any additional properties on the tenant object.|

<h2 id="tocS_SchedulesResponse">SchedulesResponse</h2>
<!-- backwards compatibility -->
<a id="schemaschedulesresponse"></a>
<a id="schema_SchedulesResponse"></a>
<a id="tocSschedulesresponse"></a>
<a id="tocsschedulesresponse"></a>

```json
[
  {
    "__typename": "Schedule",
    "actor": null,
    "data": null,
    "id": "123e4567-e89b-12d3-a456-426614174000",
    "inserted_at": "2021-01-01T00:00:00Z",
    "last_occurrence_at": null,
    "next_occurrence_at": null,
    "recipient": {
      "__typename": "User",
      "avatar": null,
      "created_at": null,
      "email": "jane@ingen.net",
      "id": "jane",
      "name": "Jane Doe",
      "phone_number": null,
      "timezone": null,
      "updated_at": "2024-05-22T12:00:00Z"
    },
    "repeats": [
      {
        "__typename": "ScheduleRepeat",
        "day_of_month": null,
        "days": [
          "mon",
          "tue",
          "wed",
          "thu",
          "fri",
          "sat",
          "sun"
        ],
        "frequency": "daily",
        "hours": null,
        "interval": 1,
        "minutes": null
      }
    ],
    "tenant": null,
    "updated_at": "2021-01-01T00:00:00Z",
    "workflow": "workflow_123"
  }
]
```

A list of schedules.

<h2 id="tocS_Tenant">Tenant</h2>
<!-- backwards compatibility -->
<a id="schematenant"></a>
<a id="schema_Tenant"></a>
<a id="tocStenant"></a>
<a id="tocstenant"></a>

```json
{
  "__typename": "Tenant",
  "id": "tenant_jp123",
  "name": "Jurassic Park",
  "settings": {
    "branding": {
      "dark_icon_url": "https://example.com/trex_silhouette_icon_dark.png",
      "dark_logo_url": "https://example.com/amber_fossil_logo_dark.png",
      "dark_primary_color": "#FFFFFF",
      "dark_primary_color_contrast": "#000000",
      "icon_url": "https://example.com/trex_silhouette_icon.png",
      "logo_url": "https://example.com/amber_fossil_logo.png",
      "primary_color": "#DF1A22",
      "primary_color_contrast": "#FFDE00"
    },
    "preference_set": {
      "categories": {
        "safety": {
          "channel_types": {
            "email": true,
            "push": true
          }
        }
      },
      "channel_types": {
        "email": true,
        "in_app_feed": true,
        "push": true
      },
      "id": "default",
      "workflows": {
        "park_alert": {
          "channel_types": {
            "email": true,
            "push": true
          }
        }
      }
    }
  }
}
```

A tenant entity.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|__typename|string|true|none|The typename of the schema.|
|id|string|true|none|The unique identifier for the tenant.|
|name|string \| null|false|none|An optional name for the tenant.|
|settings|object \| null|false|none|The settings for the tenant. Includes branding and preference set.|

<h2 id="tocS_ListUserPreferenceSetsResponse">ListUserPreferenceSetsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistuserpreferencesetsresponse"></a>
<a id="schema_ListUserPreferenceSetsResponse"></a>
<a id="tocSlistuserpreferencesetsresponse"></a>
<a id="tocslistuserpreferencesetsresponse"></a>

```json
[
  {
    "categories": {
      "marketing": false,
      "transactional": {
        "channel_types": {
          "email": false
        }
      }
    },
    "channel_types": {
      "email": true,
      "push": false,
      "sms": {
        "conditions": [
          {
            "argument": "US",
            "operator": "equal_to",
            "variable": "recipient.country_code"
          }
        ]
      }
    },
    "commercial_subscribed": true,
    "id": "default",
    "workflows": null
  }
]
```

A list of preference sets for the user.

<h2 id="tocS_PreferenceCenterSignedUrlResponse">PreferenceCenterSignedUrlResponse</h2>
<!-- backwards compatibility -->
<a id="schemapreferencecentersignedurlresponse"></a>
<a id="schema_PreferenceCenterSignedUrlResponse"></a>
<a id="tocSpreferencecentersignedurlresponse"></a>
<a id="tocspreferencecentersignedurlresponse"></a>

```json
{
  "token": "eyJhbGciOiJIUzI1NiJ9...",
  "url": "https://p.knock.app/p/eyJhbGciOiJIUzI1NiJ9..."
}
```

A signed preference center URL and token for a user.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|token|string|true|none|The signed JWT token for the preference center, usable as the `/p/{token}` path segment.|
|url|string|true|none|The full URL to the preference center for the user.|

<h2 id="tocS_CancelWorkflowRequest">CancelWorkflowRequest</h2>
<!-- backwards compatibility -->
<a id="schemacancelworkflowrequest"></a>
<a id="schema_CancelWorkflowRequest"></a>
<a id="tocScancelworkflowrequest"></a>
<a id="tocscancelworkflowrequest"></a>

```json
{
  "cancellation_key": "cancel-workflow-123",
  "recipients": [
    "jhammond"
  ]
}
```

When invoked using a specific workflow key and cancellation key, will cancel any queued workflow runs associated with that key/cancellation key pair. Can optionally provide one or more recipients to scope the request to.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cancellation_key|string|true|none|A key that is used to reference a specific workflow trigger request when issuing a [workflow cancellation](/send-notifications/canceling-workflows) request. Must be provided while triggering a workflow in order to enable subsequent cancellation. Should be unique across trigger requests to avoid unintentional cancellations.|
|recipients|[[RecipientReference](#schemarecipientreference)]|false|none|A list of recipients to cancel the notification for. If omitted, cancels for all recipients associated with the cancellation key.|

<h2 id="tocS_GuidesResponse">GuidesResponse</h2>
<!-- backwards compatibility -->
<a id="schemaguidesresponse"></a>
<a id="schema_GuidesResponse"></a>
<a id="tocSguidesresponse"></a>
<a id="tocsguidesresponse"></a>

```json
{
  "entries": [
    {
      "__typename": "Guide",
      "activation_url_patterns": [],
      "activation_url_rules": [
        {
          "argument": "/workflows",
          "directive": "allow",
          "operator": "contains",
          "variable": "pathname"
        },
        {
          "argument": "/guides",
          "directive": "allow",
          "operator": "equal_to",
          "variable": "pathname"
        }
      ],
      "active": true,
      "bypass_global_group_limit": false,
      "channel_id": "51b92f90-1504-4fda-95c1-495a3883bc4d",
      "dashboard_url": "https://dashboard.knock.app/~/guides/nps-survey",
      "id": "53595157-2fac-4a17-8dd7-e6603e32cb3a",
      "inserted_at": "2025-09-30T14:54:44.217756Z",
      "key": "nps-survey",
      "semver": "0.0.3",
      "steps": [
        {
          "content": {
            "companyName": "Knock",
            "showFeedbackSection": true,
            "showThanksToast": true
          },
          "message": {
            "archived_at": null,
            "id": "33hjnKRKNx9ISRlixVBjhpkh28J",
            "interacted_at": "2025-10-07T15:10:59.291Z",
            "link_clicked_at": null,
            "read_at": "2025-10-07T15:10:59.291Z",
            "seen_at": "2025-10-06T18:46:03.210Z"
          },
          "ref": "step_1",
          "schema_key": "nps-survey",
          "schema_semver": "0.0.3",
          "schema_variant_key": "default"
        }
      ],
      "type": "nps-survey",
      "updated_at": "2025-10-03T17:46:53.653663Z"
    },
    {
      "__typename": "Guide",
      "activation_url_patterns": [
        {
          "directive": "allow",
          "pathname": "/dairy/*"
        },
        {
          "directive": "allow",
          "pathname": "/produce",
          "search": "role=admin"
        },
        {
          "directive": "allow",
          "pathname": "/"
        }
      ],
      "activation_url_rules": [],
      "active": true,
      "bypass_global_group_limit": false,
      "channel_id": "51b92f90-1504-4fda-95c1-495a3883bc4d",
      "dashboard_url": "https://dashboard.knock.app/~/guides/changelog-card",
      "id": "4fc4503e-ef8b-473a-ae07-14800639d30c",
      "inserted_at": "2025-10-07T19:41:06.215233Z",
      "key": "changelog-card",
      "semver": "0.0.3",
      "steps": [
        {
          "content": {
            "body": "Lorem ipsum",
            "dismissible": false,
            "eyebrowText": "New in Knock",
            "image": {
              "action": "",
              "alt": "",
              "url": "https://bhoite.com/img/sculptures/2024/lander-r2/lander-r2.jpg"
            },
            "link": "https://dashboard.knock.app/knock/development/guides/changelog-card/editor",
            "title": "Changelog card"
          },
          "message": {
            "archived_at": null,
            "id": null,
            "interacted_at": null,
            "link_clicked_at": null,
            "read_at": null,
            "seen_at": null
          },
          "ref": "step_1",
          "schema_key": "changelog-card",
          "schema_semver": "0.0.3",
          "schema_variant_key": "default"
        }
      ],
      "type": "changelog-card",
      "updated_at": "2025-10-07T20:39:52.410146Z"
    }
  ],
  "guide_group_display_logs": {
    "default": "2025-08-16T00:47:14.025Z"
  },
  "guide_groups": [
    {
      "__typename": "GuideGroup",
      "display_interval": 3600,
      "display_sequence": [
        "nps-survey",
        "changelog-card"
      ],
      "inserted_at": "2025-07-24T21:06:27.394627Z",
      "key": "default",
      "updated_at": "2025-10-07T20:39:52.465400Z"
    }
  ],
  "ineligible_guides": [
    {
      "key": "onboarding-tour",
      "message": "User has archived this guide already",
      "reason": "marked_as_archived"
    },
    {
      "key": "premium-feature",
      "message": "User is not a member of the target audience",
      "reason": "not_in_target_audience"
    }
  ]
}
```

A response for a list of guides.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|entries|[object]|true|none|A list of guides.|
|guide_group_display_logs|object|true|none|A map of guide group keys to their last display timestamps.|
|guide_groups|[object]|true|none|A list of guide groups with their display sequences and intervals.|
|ineligible_guides|[object]|true|none|Markers for guides the user is not eligible to see.|

<h2 id="tocS_InlineIdentifyUserRequest">InlineIdentifyUserRequest</h2>
<!-- backwards compatibility -->
<a id="schemainlineidentifyuserrequest"></a>
<a id="schema_InlineIdentifyUserRequest"></a>
<a id="tocSinlineidentifyuserrequest"></a>
<a id="tocsinlineidentifyuserrequest"></a>

```json
{
  "channel_data": {
    "97c5837d-c65c-4d54-aa39-080eeb81c69d": {
      "tokens": [
        "push_token_123"
      ]
    }
  },
  "email": "jane@ingen.net",
  "id": "user_1",
  "name": "Jane Doe",
  "preferences": {
    "default": {
      "channel_types": {
        "email": true
      },
      "workflows": {
        "dinosaurs-loose": {
          "channel_types": {
            "email": true
          }
        }
      }
    }
  },
  "timezone": "America/New_York"
}
```

A set of parameters to inline-identify a user with. Inline identifying the user will ensure that the user is available before the request is executed in Knock. It will perform an upsert for the user you're supplying, replacing any properties specified.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|avatar|string \| null|false|none|A URL for the avatar of the user.|
|channel_data|object \| null|false|none|Channel-specific information that's needed to deliver a notification to an end provider.|
|created_at|string(date-time) \| null|false|none|The creation date of the user from your system.|
|email|string \| null|false|none|The primary email address for the user.|
|id|string|true|none|The unique identifier of the user.|
|locale|string \| null|false|none|The locale of the user. Used for [message localization](/concepts/translations).|
|name|string \| null|false|none|Display name of the user.|
|phone_number|string \| null|false|none|The [E.164](https://www.twilio.com/docs/glossary/what-e164) phone number of the user (required for SMS channels).|
|preferences|object \| null|false|none|A set of preferences for the user.|
|timezone|string \| null|false|none|The timezone of the user. Must be a valid [tz database time zone string](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones). Used for [recurring schedules](/concepts/schedules#scheduling-workflows-with-recurring-schedules-for-recipients).|

<h2 id="tocS_MessageSmsContent">MessageSmsContent</h2>
<!-- backwards compatibility -->
<a id="schemamessagesmscontent"></a>
<a id="schema_MessageSmsContent"></a>
<a id="tocSmessagesmscontent"></a>
<a id="tocsmessagesmscontent"></a>

```json
{
  "__typename": "MessageSmsContent",
  "body": "ALERT: Security systems offline in Sector B. Evacuate immediately. Proceed to emergency bunker. DO NOT attempt to approach the paddocks. Response team dispatched.",
  "to": "+15553982647"
}
```

The content of an SMS message.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|__typename|string|true|none|The typename of the schema.|
|body|string|true|none|The content body of the SMS message.|
|to|string|true|none|The phone number the SMS was sent to.|

<h2 id="tocS_PreferenceSetRequestCategories">PreferenceSetRequestCategories</h2>
<!-- backwards compatibility -->
<a id="schemapreferencesetrequestcategories"></a>
<a id="schema_PreferenceSetRequestCategories"></a>
<a id="tocSpreferencesetrequestcategories"></a>
<a id="tocspreferencesetrequestcategories"></a>

```json
{
  "marketing": {
    "channel_types": {
      "email": false
    }
  },
  "transactional": true
}
```

An object where the key is the category and the values are the preference settings for that category.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[PreferenceSetWorkflowCategorySetting](#schemapreferencesetworkflowcategorysetting)|false|none|Workflow or category preferences within a preference set|

<h2 id="tocS_PreferenceSetChannels">PreferenceSetChannels</h2>
<!-- backwards compatibility -->
<a id="schemapreferencesetchannels"></a>
<a id="schema_PreferenceSetChannels"></a>
<a id="tocSpreferencesetchannels"></a>
<a id="tocspreferencesetchannels"></a>

```json
{
  "2f641633-95d3-4555-9222-9f1eb7888a80": {
    "conditions": [
      {
        "argument": "US",
        "operator": "equal_to",
        "variable": "recipient.country_code"
      }
    ]
  },
  "aef6e715-df82-4ab6-b61e-b743e249f7b6": true
}
```

Channel preferences.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|boolean \| [PreferenceSetChannelSetting](#schemapreferencesetchannelsetting)|false|none|Whether the specific channel (by channel_id) is enabled for the preference set, or a settings object with conditions.|

<h2 id="tocS_PreferenceSetCommercialSubscribedSetting">PreferenceSetCommercialSubscribedSetting</h2>
<!-- backwards compatibility -->
<a id="schemapreferencesetcommercialsubscribedsetting"></a>
<a id="schema_PreferenceSetCommercialSubscribedSetting"></a>
<a id="tocSpreferencesetcommercialsubscribedsetting"></a>
<a id="tocspreferencesetcommercialsubscribedsetting"></a>

```json
{
  "conditions": [
    {
      "argument": "false",
      "operator": "not_equal_to",
      "variable": "tenant.settings.preferences.commercial_subscribed"
    }
  ]
}
```

A set of settings for the commercial subscribed preference. Currently, this can only be a list of conditions to apply.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|conditions|[[Condition](#schemacondition)]|true|none|A list of conditions to apply to the commercial subscribed preference.|

<h2 id="tocS_PreferenceSetWorkflowCategorySettingObject">PreferenceSetWorkflowCategorySettingObject</h2>
<!-- backwards compatibility -->
<a id="schemapreferencesetworkflowcategorysettingobject"></a>
<a id="schema_PreferenceSetWorkflowCategorySettingObject"></a>
<a id="tocSpreferencesetworkflowcategorysettingobject"></a>
<a id="tocspreferencesetworkflowcategorysettingobject"></a>

```json
{
  "channel_types": {
    "email": false
  },
  "channels": {
    "aef6e715-df82-4ab6-b61e-b743e249f7b6": true
  },
  "conditions": null
}
```

The settings object for a workflow or category, where you can specify channel types or conditions.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|channel_types|[PreferenceSetChannelTypes](#schemapreferencesetchanneltypes) \| object \| null|false|none|An object where the key is the channel type and the values are the preference settings for that channel type.|
|channels|[PreferenceSetChannels](#schemapreferencesetchannels) \| object \| null|false|none|An object where the key is the channel ID and the values are the preference settings for that channel ID.|
|conditions|[[Condition](#schemacondition)]|false|none|A list of conditions to apply to a channel type.|

<h2 id="tocS_MsTeamsTokenConnection">MsTeamsTokenConnection</h2>
<!-- backwards compatibility -->
<a id="schemamsteamstokenconnection"></a>
<a id="schema_MsTeamsTokenConnection"></a>
<a id="tocSmsteamstokenconnection"></a>
<a id="tocsmsteamstokenconnection"></a>

```json
{
  "knock_tenant_id": "starfleet",
  "ms_teams_channel_id": "123e4567-e89b-12d3-a456-426614174000",
  "ms_teams_team_id": "123e4567-e89b-12d3-a456-426614174000",
  "ms_teams_tenant_id": null,
  "ms_teams_user_id": null
}
```

Microsoft Teams token connection.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|knock_tenant_id|string \| null|false|none|An optional Knock tenant ID (`knock_tenant_id`) that scopes this connection. Distinct from provider-specific tenant IDs. When a workflow is triggered with this tenant, Knock prefers this connection over untagged connections.|
|ms_teams_channel_id|string(uuid) \| null|false|none|Microsoft Teams channel ID.|
|ms_teams_team_id|string(uuid) \| null|false|none|Microsoft Teams team ID.|
|ms_teams_tenant_id|string(uuid) \| null|false|none|Microsoft Teams tenant ID.|
|ms_teams_user_id|string(uuid) \| null|false|none|Microsoft Teams user ID.|

<h2 id="tocS_InlineIdentifyObjectRequest">InlineIdentifyObjectRequest</h2>
<!-- backwards compatibility -->
<a id="schemainlineidentifyobjectrequest"></a>
<a id="schema_InlineIdentifyObjectRequest"></a>
<a id="tocSinlineidentifyobjectrequest"></a>
<a id="tocsinlineidentifyobjectrequest"></a>

```json
{
  "collection": "projects",
  "id": "project_1",
  "name": "My project"
}
```

A custom [Object](/concepts/objects) entity which belongs to a collection.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|channel_data|[InlineChannelDataRequest](#schemainlinechanneldatarequest) \| object \| null|false|none|An optional set of [channel data](/managing-recipients/setting-channel-data) for the object. This is a list of `ChannelData` objects.|
|collection|string|true|none|The collection this object belongs to.|
|created_at|string(date-time) \| null|false|none|Timestamp when the resource was created.|
|id|string|true|none|Unique identifier for the object.|
|name|string \| null|false|none|An optional name for the object.|
|preferences|[InlinePreferenceSetRequest](#schemainlinepreferencesetrequest) \| object \| null|false|none|An optional set of [preferences](/concepts/preferences) for the object.|

<h2 id="tocS_TenantRequest">TenantRequest</h2>
<!-- backwards compatibility -->
<a id="schematenantrequest"></a>
<a id="schema_TenantRequest"></a>
<a id="tocStenantrequest"></a>
<a id="tocstenantrequest"></a>

```json
{
  "id": "tenant_123",
  "name": "ACME Corp, Inc.",
  "settings": {
    "branding": {
      "dark_icon_url": "https://example.com/icon_dark.png",
      "dark_logo_url": "https://example.com/logo_dark.png",
      "dark_primary_color": "#FFFFFF",
      "dark_primary_color_contrast": "#000000",
      "icon_url": "https://example.com/icon.png",
      "logo_url": "https://example.com/logo.png",
      "primary_color": "#000000",
      "primary_color_contrast": "#FFFFFF"
    }
  }
}
```

A tenant to be set in the system. You can supply any additional properties on the tenant object.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|channel_data|object \| null \| [InlineChannelDataRequest](#schemainlinechanneldatarequest)|false|none|The channel data for the tenant.|
|id|string|true|none|The unique identifier for the tenant.|
|name|string \| null|false|none|An optional name for the tenant.|
|preferences|object \| null \| [InlinePreferenceSetRequest](#schemainlinepreferencesetrequest)|false|none|The preferences for the tenant.|
|settings|object|false|none|The settings for the tenant. Includes branding and preference set.|

<h2 id="tocS_MsTeamsIncomingWebhookConnection">MsTeamsIncomingWebhookConnection</h2>
<!-- backwards compatibility -->
<a id="schemamsteamsincomingwebhookconnection"></a>
<a id="schema_MsTeamsIncomingWebhookConnection"></a>
<a id="tocSmsteamsincomingwebhookconnection"></a>
<a id="tocsmsteamsincomingwebhookconnection"></a>

```json
{
  "incoming_webhook": {
    "url": "https://example.com/webhook"
  },
  "knock_tenant_id": "starfleet"
}
```

Microsoft Teams incoming webhook connection.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|incoming_webhook|object|true|none|Microsoft Teams incoming webhook.|
|knock_tenant_id|string \| null|false|none|An optional Knock tenant ID (`knock_tenant_id`) that scopes this connection. Distinct from provider-specific tenant IDs. When a workflow is triggered with this tenant, Knock prefers this connection over untagged connections.|

<h2 id="tocS_TeamsForMsTeamsProviderResponse">TeamsForMsTeamsProviderResponse</h2>
<!-- backwards compatibility -->
<a id="schemateamsformsteamsproviderresponse"></a>
<a id="schema_TeamsForMsTeamsProviderResponse"></a>
<a id="tocSteamsformsteamsproviderresponse"></a>
<a id="tocsteamsformsteamsproviderresponse"></a>

```json
{
  "ms_teams_teams": [
    {
      "displayName": "Engineering Team",
      "id": "team-id-1"
    }
  ],
  "skip_token": "token-for-next-page"
}
```

The response from a Microsoft Teams provider request, containing a list of teams.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ms_teams_teams|[object]|true|none|List of Microsoft Teams teams.|
|skip_token|string \| null|true|none|[OData param](https://learn.microsoft.com/en-us/graph/query-parameters) passed to the Microsoft Graph API to retrieve the next page of results.|

<h2 id="tocS_SlackChannelDataTokenObject">SlackChannelDataTokenObject</h2>
<!-- backwards compatibility -->
<a id="schemaslackchanneldatatokenobject"></a>
<a id="schema_SlackChannelDataTokenObject"></a>
<a id="tocSslackchanneldatatokenobject"></a>
<a id="tocsslackchanneldatatokenobject"></a>

```json
{
  "access_token": "xoxb-1234567890"
}
```

A Slack connection token.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|access_token|string \| null|true|none|A Slack access token.|

<h2 id="tocS_InlinePreferenceSetRequest">InlinePreferenceSetRequest</h2>
<!-- backwards compatibility -->
<a id="schemainlinepreferencesetrequest"></a>
<a id="schema_InlinePreferenceSetRequest"></a>
<a id="tocSinlinepreferencesetrequest"></a>
<a id="tocsinlinepreferencesetrequest"></a>

```json
{
  "default": {
    "categories": {
      "transactional": {
        "channel_types": {
          "email": false
        }
      }
    },
    "channel_types": {
      "email": true
    }
  }
}
```

Inline set preferences for a recipient, where the key is the preference set id. Preferences that are set inline will be merged into any existing preferences rather than replacing them.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[PreferenceSetRequest](#schemapreferencesetrequest)|false|none|A request to set a preference set for a recipient.|

<h2 id="tocS_Activity">Activity</h2>
<!-- backwards compatibility -->
<a id="schemaactivity"></a>
<a id="schema_Activity"></a>
<a id="tocSactivity"></a>
<a id="tocsactivity"></a>

```json
{
  "__typename": "Activity",
  "actor": null,
  "data": {
    "foo": "bar"
  },
  "id": "2FVHPWxRqNuXQ9krvNP5A6Z4qXe",
  "inserted_at": "2024-01-01T00:00:00Z",
  "recipient": {
    "__typename": "User",
    "avatar": null,
    "created_at": null,
    "email": "jane@ingen.net",
    "id": "jane",
    "name": "Jane Doe",
    "phone_number": null,
    "timezone": null,
    "updated_at": "2024-05-22T12:00:00Z"
  },
  "updated_at": "2024-01-01T00:00:00Z"
}
```

An activity associated with a workflow trigger request. Messages produced after a [batch step](/designing-workflows/batch-function) can be associated with one or more activities. Non-batched messages will always be associated with a single activity.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|__typename|string|false|none|The typename of the schema.|
|actor|object|false|none|The actor who performed the activity.|
|data|object \| null|false|none|The workflow trigger `data` payload associated with the activity.|
|id|string|false|none|Unique identifier for the activity.|
|inserted_at|string(date-time)|false|none|Timestamp when the activity was created.|
|recipient|[Recipient](#schemarecipient)|false|none|A recipient of a notification, which is either a user or an object.|
|updated_at|string(date-time)|false|none|Timestamp when the activity was last updated.|

<h2 id="tocS_PreferenceCenterConfigData">PreferenceCenterConfigData</h2>
<!-- backwards compatibility -->
<a id="schemapreferencecenterconfigdata"></a>
<a id="schema_PreferenceCenterConfigData"></a>
<a id="tocSpreferencecenterconfigdata"></a>
<a id="tocspreferencecenterconfigdata"></a>

```json
{
  "body": "Choose which notifications you want to receive.",
  "rows": [
    {
      "channel_types": [],
      "description": "Opt out of receiving comment and reply notifications",
      "identifier": "comments",
      "name": "Comments and replies",
      "type": "category"
    }
  ],
  "show_account_name": true,
  "title": "Notification preferences"
}
```

The preference center configuration data containing the rows to display.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|body|string|true|none|The body text displayed below the title.|
|rows|[[PreferenceCenterConfigRow](#schemapreferencecenterconfigrow)]|true|none|An ordered list of rows to display in the preference center.|
|show_account_name|boolean|false|none|Whether the account name should be displayed in the preference center.|
|title|string|true|none|The title displayed at the top of the preference center.|

<h2 id="tocS_BulkIdentifyUsersRequest">BulkIdentifyUsersRequest</h2>
<!-- backwards compatibility -->
<a id="schemabulkidentifyusersrequest"></a>
<a id="schema_BulkIdentifyUsersRequest"></a>
<a id="tocSbulkidentifyusersrequest"></a>
<a id="tocsbulkidentifyusersrequest"></a>

```json
{
  "users": [
    {
      "email": "jane@ingen.net",
      "id": "user_1",
      "name": "Jane Doe",
      "timezone": "America/New_York"
    }
  ]
}
```

A request to identify a list of users.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|users|[[InlineIdentifyUserRequest](#schemainlineidentifyuserrequest)]|true|none|A list of users.|

<h2 id="tocS_MergeUserRequest">MergeUserRequest</h2>
<!-- backwards compatibility -->
<a id="schemamergeuserrequest"></a>
<a id="schema_MergeUserRequest"></a>
<a id="tocSmergeuserrequest"></a>
<a id="tocsmergeuserrequest"></a>

```json
{
  "from_user_id": "user_1"
}
```

A set of parameters to merge one user into another.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|from_user_id|string|true|none|The user ID to merge from.|

<h2 id="tocS_AWSSNSPushChannelDataTargetARNsOnly">AWSSNSPushChannelDataTargetARNsOnly</h2>
<!-- backwards compatibility -->
<a id="schemaawssnspushchanneldatatargetarnsonly"></a>
<a id="schema_AWSSNSPushChannelDataTargetARNsOnly"></a>
<a id="tocSawssnspushchanneldatatargetarnsonly"></a>
<a id="tocsawssnspushchanneldatatargetarnsonly"></a>

```json
{
  "target_arns": [
    "arn:aws:sns:us-west-2:123456789012:endpoint/GCM/gcmpushapp/5e3e9847-3183-3f18-a7e8-671c3a57d4b3"
  ]
}
```

AWS SNS push channel data.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|target_arns|[string]|true|none|A list of platform endpoint ARNs. See [Setting up an Amazon SNS platform endpoint for mobile notifications](https://docs.aws.amazon.com/sns/latest/dg/mobile-platform-endpoint.html).|

<h2 id="tocS_CreateSchedulesRequest">CreateSchedulesRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreateschedulesrequest"></a>
<a id="schema_CreateSchedulesRequest"></a>
<a id="tocScreateschedulesrequest"></a>
<a id="tocscreateschedulesrequest"></a>

```json
{
  "data": {
    "key": "value"
  },
  "ending_at": null,
  "recipients": [
    "user_123"
  ],
  "repeats": [
    {
      "__typename": "ScheduleRepeat",
      "day_of_month": null,
      "days": [
        "mon",
        "tue",
        "wed",
        "thu",
        "fri",
        "sat",
        "sun"
      ],
      "frequency": "daily",
      "hours": null,
      "interval": 1,
      "minutes": null
    }
  ],
  "scheduled_at": null,
  "tenant": "acme_corp",
  "workflow": "comment-created"
}
```

A request to create a schedule.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|actor|object|false|none|A map of properties describing a user or an object to identify in Knock and mark as who or what performed the action.|
|data|object \| null|false|none|An optional map of data to pass into the workflow execution. There is a 10MB limit on the size of the full `data` payload. Any individual string value greater than 1024 bytes in length will be [truncated](/developer-tools/api-logs#log-truncation) in your logs.|
|ending_at|string(date-time) \| null|false|none|The ending date and time for the schedule.|
|recipients|[[RecipientRequest](#schemarecipientrequest)]|true|none|The recipients to set the schedule for. Limited to 100 recipients per request.|
|repeats|[[ScheduleRepeatRule](#schemaschedulerepeatrule)]|false|none|The repeat rule for the schedule.|
|scheduled_at|string(date-time) \| null|false|none|The starting date and time for the schedule.|
|tenant|[InlineTenantRequest](#schemainlinetenantrequest) \| object \| null|false|none|The tenant to trigger the workflow for. Triggering with a tenant will use any tenant-level overrides associated with the tenant object, and all messages produced from workflow runs will be tagged with the tenant.|
|workflow|string|true|none|The key of the workflow.|

<h2 id="tocS_MessageEvent">MessageEvent</h2>
<!-- backwards compatibility -->
<a id="schemamessageevent"></a>
<a id="schema_MessageEvent"></a>
<a id="tocSmessageevent"></a>
<a id="tocsmessageevent"></a>

```json
{
  "__typename": "MessageEvent",
  "data": null,
  "id": "2FVHPWxRqNuXQ9krvNP5A6Z4qXe",
  "inserted_at": "2021-01-01T00:00:00Z",
  "recipient": "user_123",
  "type": "message.sent"
}
```

A message event. Occurs when a message [delivery or engagement status](/send-notifications/message-statuses) changes.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|__typename|string|true|none|The typename of the schema.|
|data|object \| null|false|none|The data associated with the message event. Only present for some event types.|
|id|string|true|none|The unique identifier for the message event.|
|inserted_at|string(date-time)|true|none|Timestamp when the event was created.|
|recipient|[RecipientReference](#schemarecipientreference)|true|none|A reference to a recipient, either a user identifier (string) or an object reference (ID, collection).|
|type|string|true|none|The type of event that occurred.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|message.created|
|type|message.queued|
|type|message.sent|
|type|message.not_sent|
|type|message.delivered|
|type|message.delivery_attempted|
|type|message.undelivered|
|type|message.bounced|
|type|message.complaint|
|type|message.read|
|type|message.unread|
|type|message.seen|
|type|message.unseen|
|type|message.archived|
|type|message.unarchived|
|type|message.interacted|
|type|message.link_clicked|

<h2 id="tocS_BulkUpsertSubscriptionsRequest">BulkUpsertSubscriptionsRequest</h2>
<!-- backwards compatibility -->
<a id="schemabulkupsertsubscriptionsrequest"></a>
<a id="schema_BulkUpsertSubscriptionsRequest"></a>
<a id="tocSbulkupsertsubscriptionsrequest"></a>
<a id="tocsbulkupsertsubscriptionsrequest"></a>

```json
{
  "subscriptions": [
    {
      "id": "project-1",
      "properties": null,
      "recipients": [
        {
          "id": "user_1"
        }
      ]
    }
  ]
}
```

A request to upsert subscriptions for many groups of 1 subscribed-to object, N subscriber recipients.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|subscriptions|[object]|true|none|A nested list of subscriptions.|

<h2 id="tocS_MessageInteractedRequest">MessageInteractedRequest</h2>
<!-- backwards compatibility -->
<a id="schemamessageinteractedrequest"></a>
<a id="schema_MessageInteractedRequest"></a>
<a id="tocSmessageinteractedrequest"></a>
<a id="tocsmessageinteractedrequest"></a>

```json
{
  "metadata": {
    "key": "value"
  }
}
```

A request to mark a message as interacted with.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|metadata|object|false|none|Metadata about the interaction.|

<h2 id="tocS_PageInfo">PageInfo</h2>
<!-- backwards compatibility -->
<a id="schemapageinfo"></a>
<a id="schema_PageInfo"></a>
<a id="tocSpageinfo"></a>
<a id="tocspageinfo"></a>

```json
{
  "__typename": "PageInfo",
  "after": null,
  "before": null,
  "page_size": 25
}
```

Pagination information for a list of resources.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|__typename|string|true|none|The typename of the schema.|
|after|string \| null|false|none|The cursor to fetch entries after.|
|before|string \| null|false|none|The cursor to fetch entries before.|
|page_size|integer|true|none|The number of items per page (defaults to 50).|

<h2 id="tocS_PreferenceSetWorkflowCategorySetting">PreferenceSetWorkflowCategorySetting</h2>
<!-- backwards compatibility -->
<a id="schemapreferencesetworkflowcategorysetting"></a>
<a id="schema_PreferenceSetWorkflowCategorySetting"></a>
<a id="tocSpreferencesetworkflowcategorysetting"></a>
<a id="tocspreferencesetworkflowcategorysetting"></a>

```json
{
  "channel_types": {
    "email": false
  },
  "channels": {
    "aef6e715-df82-4ab6-b61e-b743e249f7b6": true
  }
}
```

Workflow or category preferences within a preference set

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|boolean|false|none|none|
|*oneOf*|object|false|none|The settings object for a workflow or category, where you can specify channel types or conditions.|
|channel_types|[PreferenceSetChannelTypes](#schemapreferencesetchanneltypes) \| object \| null|false|none|An object where the key is the channel type and the values are the preference settings for that channel type.|
|channels|[PreferenceSetChannels](#schemapreferencesetchannels) \| object \| null|false|none|An object where the key is the channel ID and the values are the preference settings for that channel ID.|
|conditions|[[Condition](#schemacondition)]|false|none|A list of conditions to apply to a channel type.|

<h2 id="tocS_ListUsersResponse">ListUsersResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistusersresponse"></a>
<a id="schema_ListUsersResponse"></a>
<a id="tocSlistusersresponse"></a>
<a id="tocslistusersresponse"></a>

```json
{
  "entries": [
    {
      "__typename": "User",
      "created_at": null,
      "email": "ian.malcolm@chaos.theory",
      "id": "user_id",
      "name": "Dr. Ian Malcolm",
      "updated_at": "2024-05-22T12:00:00Z"
    }
  ],
  "page_info": {
    "__typename": "PageInfo",
    "after": null,
    "before": null,
    "page_size": 25
  }
}
```

A paginated list of users.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|entries|[[User](#schemauser)]|false|none|A list of users.|
|page_info|[PageInfo](#schemapageinfo)|false|none|Pagination information for a list of resources.|

<h2 id="tocS_PreferenceSetCategories">PreferenceSetCategories</h2>
<!-- backwards compatibility -->
<a id="schemapreferencesetcategories"></a>
<a id="schema_PreferenceSetCategories"></a>
<a id="tocSpreferencesetcategories"></a>
<a id="tocspreferencesetcategories"></a>

```json
{
  "marketing": {
    "channel_types": {
      "email": false
    }
  }
}
```

An object where the key is the category and the values are the preference settings for that category.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[PreferenceSetWorkflowCategorySetting](#schemapreferencesetworkflowcategorysetting)|false|none|Workflow or category preferences within a preference set|

<h2 id="tocS_ListMessagesResponse">ListMessagesResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistmessagesresponse"></a>
<a id="schema_ListMessagesResponse"></a>
<a id="tocSlistmessagesresponse"></a>
<a id="tocslistmessagesresponse"></a>

```json
{
  "items": [
    {
      "__typename": "Message",
      "actors": [
        "mr_arnold",
        "mr_muldoon"
      ],
      "archived_at": null,
      "channel_id": "123e4567-e89b-12d3-a456-426614174000",
      "clicked_at": null,
      "data": {
        "affected_areas": [
          "visitor_center",
          "raptor_pen",
          "trex_paddock"
        ],
        "attraction_id": "paddock_rex_01",
        "evacuation_protocol": "active",
        "message": "Life finds a way",
        "severity": "critical",
        "system_status": "fences_failing"
      },
      "engagement_statuses": [
        "read",
        "seen"
      ],
      "id": "2w3YUpTTOxuDvZFji8OMsKrG176",
      "inserted_at": "1993-06-11T21:15:00Z",
      "interacted_at": null,
      "link_clicked_at": null,
      "metadata": {
        "external_id": "123e4567-e89b-12d3-a456-426614174000"
      },
      "read_at": "1993-06-11T21:30:00Z",
      "recipient": "dr_grant",
      "recipient_snapshot": {
        "email": "user@example.com",
        "name": "John Doe"
      },
      "scheduled_at": null,
      "seen_at": "1993-06-11T21:29:45Z",
      "source": {
        "__typename": "NotificationSource",
        "branch_path": [
          {
            "branch_id": "123e4567-e89b-12d3-a456-426614174000",
            "step_ref": "experiment",
            "step_type": "random_cohort"
          }
        ],
        "categories": [
          "security",
          "emergency"
        ],
        "key": "security-breach-alert",
        "step_ref": "alert_step_1",
        "version_id": "123e4567-e89b-12d3-a456-426614174000",
        "workflow_recipient_run_id": "def01234-a56b-78c9-d012-345678901bcd",
        "workflow_run_id": "789e0123-f45a-67b8-c901-234567890abc"
      },
      "status": "sent",
      "tenant": "ingen_isla_nublar",
      "updated_at": "1993-06-11T21:30:05Z",
      "workflow": "security-breach-alert"
    }
  ],
  "page_info": {
    "__typename": "PageInfo",
    "after": null,
    "before": null,
    "page_size": 25
  }
}
```

A paginated list of messages.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|items|[[Message](#schemamessage)]|true|none|A list of messages.|
|page_info|[PageInfo](#schemapageinfo)|true|none|Pagination information for a list of resources.|

<h2 id="tocS_WorkflowRecipientRunTriggerSource">WorkflowRecipientRunTriggerSource</h2>
<!-- backwards compatibility -->
<a id="schemaworkflowrecipientruntriggersource"></a>
<a id="schema_WorkflowRecipientRunTriggerSource"></a>
<a id="tocSworkflowrecipientruntriggersource"></a>
<a id="tocsworkflowrecipientruntriggersource"></a>

```json
{
  "cancellation_key": "comment-123-user-456",
  "type": "api"
}
```

Describes how the workflow was triggered.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|audience_key|string \| null|false|none|The key of the audience that triggered the workflow.|
|cancellation_key|string \| null|false|none|The cancellation key provided when the workflow was triggered via the API.|
|schedule_id|string \| null|false|none|The ID of the schedule that triggered the workflow.|
|type|string|true|none|The type of trigger source. One of `api`, `audience`, `schedule`, `broadcast`, `workflow_step`, `integration`, or `rehearsal`.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|api|
|type|audience|
|type|schedule|
|type|broadcast|
|type|workflow_step|
|type|integration|
|type|rehearsal|

<h2 id="tocS_GuideArchivedRequest">GuideArchivedRequest</h2>
<!-- backwards compatibility -->
<a id="schemaguidearchivedrequest"></a>
<a id="schema_GuideArchivedRequest"></a>
<a id="tocSguidearchivedrequest"></a>
<a id="tocsguidearchivedrequest"></a>

```json
{
  "channel_id": "123e4567-e89b-12d3-a456-426614174000",
  "guide_id": "7e9dc78c-b3b1-4127-a54e-71f1899b831a",
  "guide_key": "tour_notification",
  "guide_step_ref": "lab_tours",
  "is_final": false,
  "tenant": "ingen_isla_nublar",
  "unthrottled": false
}
```

A request to mark a guide as archived.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|channel_id|string(uuid)|true|none|The unique identifier for the channel.|
|guide_id|string(uuid)|true|none|The unique identifier for the guide.|
|guide_key|string|true|none|The key of the guide.|
|guide_step_ref|string|true|none|The step reference of the guide.|
|is_final|boolean|false|none|Whether the guide is final.|
|tenant|string|false|none|The tenant ID of the guide.|
|unthrottled|boolean|false|none|Whether the guide bypasses its guide group's throttle settings. When true, archiving the guide does not open a new throttle window.|

<h2 id="tocS_BatchGetMessageContentsResponse">BatchGetMessageContentsResponse</h2>
<!-- backwards compatibility -->
<a id="schemabatchgetmessagecontentsresponse"></a>
<a id="schema_BatchGetMessageContentsResponse"></a>
<a id="tocSbatchgetmessagecontentsresponse"></a>
<a id="tocsbatchgetmessagecontentsresponse"></a>

```json
[
  {
    "__typename": "MessageContent",
    "data": {
      "__typename": "MessageSmsContent",
      "body": "URGENT: Power failure detected in perimeter fencing. Backup generators failed to engage. Technical team dispatched. Maintain lockdown protocols.",
      "to": "+15553982647"
    },
    "inserted_at": "1993-06-11T20:30:00Z",
    "message_id": "2w3YUpTTOxuDvZFji8OMsKrG176"
  }
]
```

A list of `MessageContents`

<h2 id="tocS_ListSchedulesResponse">ListSchedulesResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistschedulesresponse"></a>
<a id="schema_ListSchedulesResponse"></a>
<a id="tocSlistschedulesresponse"></a>
<a id="tocslistschedulesresponse"></a>

```json
{
  "entries": [
    {
      "__typename": "Schedule",
      "actor": null,
      "data": null,
      "id": "123e4567-e89b-12d3-a456-426614174000",
      "inserted_at": "2021-01-01T00:00:00Z",
      "last_occurrence_at": null,
      "next_occurrence_at": null,
      "recipient": {
        "__typename": "User",
        "avatar": null,
        "created_at": null,
        "email": "jane@ingen.net",
        "id": "jane",
        "name": "Jane Doe",
        "phone_number": null,
        "timezone": null,
        "updated_at": "2024-05-22T12:00:00Z"
      },
      "repeats": [
        {
          "__typename": "ScheduleRepeat",
          "day_of_month": null,
          "days": [
            "mon",
            "tue",
            "wed",
            "thu",
            "fri",
            "sat",
            "sun"
          ],
          "frequency": "daily",
          "hours": null,
          "interval": 1,
          "minutes": null
        }
      ],
      "tenant": null,
      "updated_at": "2021-01-01T00:00:00Z",
      "workflow": "workflow_123"
    }
  ],
  "page_info": {
    "__typename": "PageInfo",
    "after": null,
    "before": null,
    "page_size": 25
  }
}
```

A response containing a list of schedules.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|entries|[[Schedule](#schemaschedule)]|true|none|A list of schedules.|
|page_info|[PageInfo](#schemapageinfo)|true|none|Pagination information for a list of resources.|

<h2 id="tocS_PreferenceSetChannelTypeSetting">PreferenceSetChannelTypeSetting</h2>
<!-- backwards compatibility -->
<a id="schemapreferencesetchanneltypesetting"></a>
<a id="schema_PreferenceSetChannelTypeSetting"></a>
<a id="tocSpreferencesetchanneltypesetting"></a>
<a id="tocspreferencesetchanneltypesetting"></a>

```json
{
  "conditions": [
    {
      "argument": "US",
      "operator": "equal_to",
      "variable": "recipient.country_code"
    }
  ]
}
```

A set of settings for a channel type. Currently, this can only be a list of conditions to apply.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|conditions|[[Condition](#schemacondition)]|true|none|A list of conditions to apply to a channel type.|

<h2 id="tocS_PreferenceCenterConfigWithMetadata">PreferenceCenterConfigWithMetadata</h2>
<!-- backwards compatibility -->
<a id="schemapreferencecenterconfigwithmetadata"></a>
<a id="schema_PreferenceCenterConfigWithMetadata"></a>
<a id="tocSpreferencecenterconfigwithmetadata"></a>
<a id="tocspreferencecenterconfigwithmetadata"></a>

```json
{
  "account_name": "Acme Inc.",
  "branding": {
    "dark": {
      "icon_url": "https://example.com/icon-dark.png",
      "logo_url": "https://example.com/logo-dark.png",
      "primary_color": "#C02727",
      "primary_color_contrast": "#11E2EC"
    },
    "icon_url": "https://example.com/icon.png",
    "logo_url": "https://example.com/logo.png",
    "primary_color": "#0EA5E9",
    "primary_color_contrast": "#0F172A"
  },
  "config": {
    "body": "Choose which notifications you want to receive.",
    "rows": [
      {
        "channel_types": [],
        "description": "Opt out of receiving comment and reply notifications",
        "identifier": "comments",
        "name": "Comments and replies",
        "type": "category"
      },
      {
        "channel_types": [
          "email",
          "sms"
        ],
        "description": "Receive notifications from the following channel types",
        "name": "Channel Types",
        "type": "channel_types"
      }
    ],
    "show_account_name": true,
    "title": "Notification preferences"
  },
  "enabled": true,
  "knock_branding_required": false,
  "user_email": "user@example.com"
}
```

The preference center configuration for an environment. Controls whether the preference center is enabled and defines the rows displayed in the UI.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|account_name|string \| null|true|none|The name of the account that the preference center is associated with.|
|branding|object|true|none|The branding for the preference center, sourced from public environment variables.|
|config|[PreferenceCenterConfigData](#schemapreferencecenterconfigdata)|true|none|The preference center configuration data containing the rows to display.|
|enabled|boolean|true|none|Whether the preference center is enabled for this environment.|
|knock_branding_required|boolean|false|none|Whether Knock branding is required in the preference center.|
|user_email|string \| null|true|none|A display label for the user that the preference center is associated with, resolved as email, then user id.|

<h2 id="tocS_WorkflowRecipientRunEvent">WorkflowRecipientRunEvent</h2>
<!-- backwards compatibility -->
<a id="schemaworkflowrecipientrunevent"></a>
<a id="schema_WorkflowRecipientRunEvent"></a>
<a id="tocSworkflowrecipientrunevent"></a>
<a id="tocsworkflowrecipientrunevent"></a>

```json
{
  "__typename": "WorkflowRecipientRunEvent",
  "attempt": 1,
  "data": {
    "channel_type": "email",
    "message_id": "2FVHPWxRqNuXQ9krvNP5A6Z4qXe"
  },
  "event": "message_enqueued",
  "id": "2FVHPWxRqNuXQ9krvNP5A6Z4qXe",
  "inserted_at": "2025-01-01T00:00:00Z",
  "status": "ok",
  "step_ref": "email_step_1",
  "step_type": "channel"
}
```

An event that occurred during a workflow recipient run.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|__typename|string|true|none|The typename of the schema.|
|attempt|integer|false|none|The attempt number of the workflow recipient run event. Increments for each retry.|
|data|object \| null|false|none|Event-specific data associated with the event.|
|event|string|true|none|The type of event that occurred.|
|id|string|true|none|The unique identifier for the event.|
|inserted_at|string(date-time)|true|none|Timestamp when the resource was created.|
|status|string|true|none|Whether the event represents a successful or error state.|
|step_ref|string \| null|false|none|The reference of the workflow step associated with this event.|
|step_type|string \| null|false|none|The type of workflow step associated with this event.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|ok|
|status|error|

<h2 id="tocS_PreferenceSetChannelTypes">PreferenceSetChannelTypes</h2>
<!-- backwards compatibility -->
<a id="schemapreferencesetchanneltypes"></a>
<a id="schema_PreferenceSetChannelTypes"></a>
<a id="tocSpreferencesetchanneltypes"></a>
<a id="tocspreferencesetchanneltypes"></a>

```json
{
  "email": true,
  "sms": {
    "conditions": [
      {
        "argument": "US",
        "operator": "equal_to",
        "variable": "recipient.country_code"
      }
    ]
  }
}
```

Channel type preferences.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|chat|boolean \| [PreferenceSetChannelTypeSetting](#schemapreferencesetchanneltypesetting)|false|none|Whether the channel type is enabled for the preference set.|
|email|boolean \| [PreferenceSetChannelTypeSetting](#schemapreferencesetchanneltypesetting)|false|none|Whether the channel type is enabled for the preference set.|
|http|boolean \| [PreferenceSetChannelTypeSetting](#schemapreferencesetchanneltypesetting)|false|none|Whether the channel type is enabled for the preference set.|
|in_app_feed|boolean \| [PreferenceSetChannelTypeSetting](#schemapreferencesetchanneltypesetting)|false|none|Whether the channel type is enabled for the preference set.|
|push|boolean \| [PreferenceSetChannelTypeSetting](#schemapreferencesetchanneltypesetting)|false|none|Whether the channel type is enabled for the preference set.|
|sms|boolean \| [PreferenceSetChannelTypeSetting](#schemapreferencesetchanneltypesetting)|false|none|Whether the channel type is enabled for the preference set.|

<h2 id="tocS_DeleteSchedulesRequest">DeleteSchedulesRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleteschedulesrequest"></a>
<a id="schema_DeleteSchedulesRequest"></a>
<a id="tocSdeleteschedulesrequest"></a>
<a id="tocsdeleteschedulesrequest"></a>

```json
{
  "schedule_ids": [
    "123e4567-e89b-12d3-a456-426614174000"
  ]
}
```

A request to delete a schedule.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|schedule_ids|[string]|true|none|A list of schedule IDs.|

<h2 id="tocS_SetObjectRequest">SetObjectRequest</h2>
<!-- backwards compatibility -->
<a id="schemasetobjectrequest"></a>
<a id="schema_SetObjectRequest"></a>
<a id="tocSsetobjectrequest"></a>
<a id="tocssetobjectrequest"></a>

```json
{
  "channel_data": {
    "97c5837d-c65c-4d54-aa39-080eeb81c69d": {
      "tokens": [
        "push_token_123"
      ]
    }
  },
  "description": "My product description",
  "locale": "en-US",
  "name": "My product",
  "preferences": {
    "default": {
      "channel_types": {
        "email": true
      },
      "workflows": {
        "dinosaurs-loose": {
          "channel_types": {
            "email": true
          }
        }
      }
    }
  },
  "price": 100,
  "timezone": "America/New_York"
}
```

A set of parameters to set an object with. Does not include the object id or collection.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|channel_data|[InlineChannelDataRequest](#schemainlinechanneldatarequest)|false|none|A request to set channel data for a type of channel inline.|
|locale|string \| null|false|none|The locale of the object. Used for [message localization](/concepts/translations).|
|name|string \| null|false|none|An optional name for the object.|
|preferences|[InlinePreferenceSetRequest](#schemainlinepreferencesetrequest)|false|none|Inline set preferences for a recipient, where the key is the preference set id. Preferences that are set inline will be merged into any existing preferences rather than replacing them.|
|timezone|string \| null|false|none|The timezone of the object. Must be a valid [tz database time zone string](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones). Used for [recurring schedules](/concepts/schedules#scheduling-workflows-with-recurring-schedules-for-recipients).|

<h2 id="tocS_PreferenceCenterBrandingConfig">PreferenceCenterBrandingConfig</h2>
<!-- backwards compatibility -->
<a id="schemapreferencecenterbrandingconfig"></a>
<a id="schema_PreferenceCenterBrandingConfig"></a>
<a id="tocSpreferencecenterbrandingconfig"></a>
<a id="tocspreferencecenterbrandingconfig"></a>

```json
{
  "icon_url": "https://example.com/icon.png",
  "logo_url": "https://example.com/logo.png",
  "primary_color": "#0EA5E9",
  "primary_color_contrast": "#0F172A"
}
```

The branding for the preference center, sourced from public environment variables.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|icon_url|string(uri) \| null|false|none|The icon URL for the preference center. Must point to a valid image with an image MIME type.|
|logo_url|string(uri) \| null|false|none|The logo URL for the preference center. Must point to a valid image with an image MIME type.|
|primary_color|string \| null|false|none|The primary color for the preference center, provided as a hex value.|
|primary_color_contrast|string \| null|false|none|The primary color contrast for the preference center, provided as a hex value.|

<h2 id="tocS_BulkUpdateMessagesForChannelRequest">BulkUpdateMessagesForChannelRequest</h2>
<!-- backwards compatibility -->
<a id="schemabulkupdatemessagesforchannelrequest"></a>
<a id="schema_BulkUpdateMessagesForChannelRequest"></a>
<a id="tocSbulkupdatemessagesforchannelrequest"></a>
<a id="tocsbulkupdatemessagesforchannelrequest"></a>

```json
{
  "archived": "include",
  "delivery_status": "delivered",
  "engagement_status": "seen",
  "has_tenant": true,
  "newer_than": "2024-01-01T00:00:00Z",
  "older_than": "2024-01-01T00:00:00Z",
  "recipient_ids": [
    "recipient1",
    "recipient2"
  ],
  "tenants": [
    "tenant1",
    "tenant2"
  ],
  "trigger_data": "{\"key\":\"value\"}",
  "workflows": [
    "workflow1",
    "workflow2"
  ]
}
```

Updates message statuses in a specified channel. Use the `channel_id` parameter to target the channel and the `status` parameter to define what the status should be changed to (e.g. `archive`, `unarchive`). Apply to all messages or use filters to target a subset. For in-app channels, messages can be updated indefinitely via this operation. For all other channel types, messages outside the account's retention window will not be updated as part of this operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|archived|string|false|none|Limits the results to messages with the given archived status.|
|delivery_status|string|false|none|Limits the results to messages with the given delivery status.|
|engagement_status|string|false|none|Limits the results to messages with the given engagement status.|
|has_tenant|boolean|false|none|Limits the results to messages that have a tenant or not.|
|newer_than|string(date-time)|false|none|Limits the results to messages inserted after the given date.|
|older_than|string(date-time)|false|none|Limits the results to messages inserted before the given date.|
|recipient_ids|[string]|false|none|Limits the results to messages with the given recipient IDs.|
|tenants|[string]|false|none|Limits the results to messages with the given tenant IDs.|
|trigger_data|string|false|none|Limits the results to only messages that were generated with the given data. See [trigger data filtering](/api-reference/overview/trigger-data-filtering) for more information.|
|workflows|[string]|false|none|Limits the results to messages with the given workflow keys.|

#### Enumerated Values

|Property|Value|
|---|---|
|archived|exclude|
|archived|include|
|archived|only|
|delivery_status|queued|
|delivery_status|sent|
|delivery_status|delivered|
|delivery_status|delivery_attempted|
|delivery_status|undelivered|
|delivery_status|not_sent|
|delivery_status|bounced|
|engagement_status|seen|
|engagement_status|unseen|
|engagement_status|read|
|engagement_status|unread|
|engagement_status|archived|
|engagement_status|unarchived|
|engagement_status|link_clicked|
|engagement_status|interacted|

<h2 id="tocS_GuideActionResponse">GuideActionResponse</h2>
<!-- backwards compatibility -->
<a id="schemaguideactionresponse"></a>
<a id="schema_GuideActionResponse"></a>
<a id="tocSguideactionresponse"></a>
<a id="tocsguideactionresponse"></a>

```json
{
  "status": "ok"
}
```

A response for a guide action.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|string|true|none|The status of a guide's action.|

<h2 id="tocS_BulkDeleteUsersRequest">BulkDeleteUsersRequest</h2>
<!-- backwards compatibility -->
<a id="schemabulkdeleteusersrequest"></a>
<a id="schema_BulkDeleteUsersRequest"></a>
<a id="tocSbulkdeleteusersrequest"></a>
<a id="tocsbulkdeleteusersrequest"></a>

```json
{
  "user_ids": [
    "user_1",
    "user_2"
  ]
}
```

A request to delete users in bulk.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|user_ids|[string]|true|none|A list of user IDs.|

<h2 id="tocS_Object">Object</h2>
<!-- backwards compatibility -->
<a id="schemaobject"></a>
<a id="schema_Object"></a>
<a id="tocSobject"></a>
<a id="tocsobject"></a>

```json
{
  "__typename": "Object",
  "collection": "assets",
  "created_at": null,
  "id": "specimen_25",
  "properties": {
    "classification": "Theropod",
    "config": {
      "biz": "baz",
      "foo": "bar"
    },
    "name": "Velociraptor",
    "status": "contained"
  },
  "updated_at": "2024-05-22T12:00:00Z"
}
```

A custom [Object](/concepts/objects) entity which belongs to a collection.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|__typename|string|true|none|The typename of the schema.|
|collection|string|true|none|The collection this object belongs to.|
|created_at|string(date-time) \| null|false|none|Timestamp when the resource was created.|
|id|string|true|none|Unique identifier for the object.|
|properties|object|false|none|The custom properties associated with the object.|
|updated_at|string(date-time)|true|none|The timestamp when the resource was last updated.|

<h2 id="tocS_TriggerWorkflowRequest">TriggerWorkflowRequest</h2>
<!-- backwards compatibility -->
<a id="schematriggerworkflowrequest"></a>
<a id="schema_TriggerWorkflowRequest"></a>
<a id="tocStriggerworkflowrequest"></a>
<a id="tocstriggerworkflowrequest"></a>

```json
{
  "actor": "mr_dna",
  "cancellation_key": "isla_nublar_incident_1993",
  "data": {
    "affected_areas": [
      "visitor_center",
      "raptor_pen",
      "trex_paddock"
    ],
    "attraction_id": "paddock_rex_01",
    "evacuation_protocol": "active",
    "message": "Life finds a way",
    "severity": "critical",
    "system_status": "fences_failing"
  },
  "recipients": [
    "dr_grant",
    "dr_sattler",
    "dr_malcolm"
  ],
  "settings": {
    "sandbox_mode": true,
    "skip_delay": true
  },
  "tenant": "ingen_isla_nublar"
}
```

A request to trigger a notification workflow.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|actor|[RecipientRequest](#schemarecipientrequest) \| object \| null|false|none|A map of properties describing a user or an object to identify in Knock and mark as who or what performed the action.|
|cancellation_key|string \| null|false|none|A key that is used to reference a specific workflow trigger request when issuing a [workflow cancellation](/send-notifications/canceling-workflows) request. Must be provided while triggering a workflow in order to enable subsequent cancellation. Should be unique across trigger requests to avoid unintentional cancellations.|
|data|object \| null|false|none|An optional map of data to pass into the workflow execution. There is a 10MB limit on the size of the full `data` payload. Any individual string value greater than 1024 bytes in length will be [truncated](/developer-tools/api-logs#log-truncation) in your logs.|
|recipients|[[RecipientRequest](#schemarecipientrequest)]|true|none|The recipients to trigger the workflow for. Can inline identify users, objects, or use a list of user IDs. Limited to 1,000 recipients.|
|settings|object \| null|false|none|Optional settings that control how this workflow trigger is executed.|
|tenant|[InlineTenantRequest](#schemainlinetenantrequest) \| object \| null|false|none|The tenant to trigger the workflow for. Triggering with a tenant will use any tenant-level overrides associated with the tenant object, and all messages produced from workflow runs will be tagged with the tenant.|

<h2 id="tocS_PushChannelDataTokensOnly">PushChannelDataTokensOnly</h2>
<!-- backwards compatibility -->
<a id="schemapushchanneldatatokensonly"></a>
<a id="schema_PushChannelDataTokensOnly"></a>
<a id="tocSpushchanneldatatokensonly"></a>
<a id="tocspushchanneldatatokensonly"></a>

```json
{
  "tokens": [
    "push_token_1",
    "push_token_2"
  ]
}
```

Push channel data.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|tokens|[string]|true|none|A list of push channel tokens.|

<h2 id="tocS_BatchListMessagesResponse">BatchListMessagesResponse</h2>
<!-- backwards compatibility -->
<a id="schemabatchlistmessagesresponse"></a>
<a id="schema_BatchListMessagesResponse"></a>
<a id="tocSbatchlistmessagesresponse"></a>
<a id="tocsbatchlistmessagesresponse"></a>

```json
[
  {
    "__typename": "Message",
    "actors": [
      "user_123"
    ],
    "archived_at": "2025-01-01T00:04:00Z",
    "channel_id": "123e4567-e89b-12d3-a456-426614174000",
    "clicked_at": null,
    "data": {
      "foo": "bar"
    },
    "engagement_statuses": [
      "seen",
      "archived"
    ],
    "id": "1jNaXzB2RZX3LY8wVQnfCKyPnv7",
    "inserted_at": "2021-01-01T00:00:00Z",
    "interacted_at": null,
    "link_clicked_at": null,
    "metadata": {
      "external_id": "123e4567-e89b-12d3-a456-426614174000"
    },
    "read_at": null,
    "recipient": "user_123",
    "scheduled_at": null,
    "seen_at": "2025-01-01T00:01:00Z",
    "source": {
      "__typename": "NotificationSource",
      "categories": [
        "collaboration"
      ],
      "key": "comment-created",
      "version_id": "123e4567-e89b-12d3-a456-426614174000"
    },
    "status": "sent",
    "tenant": "tenant_123",
    "updated_at": "2021-01-01T00:00:00Z",
    "workflow": "comment-created"
  }
]
```

The list of messages that were updated.

<h2 id="tocS_ScheduleRepeatRule">ScheduleRepeatRule</h2>
<!-- backwards compatibility -->
<a id="schemaschedulerepeatrule"></a>
<a id="schema_ScheduleRepeatRule"></a>
<a id="tocSschedulerepeatrule"></a>
<a id="tocsschedulerepeatrule"></a>

```json
{
  "__typename": "ScheduleRepeat",
  "day_of_month": null,
  "days": [
    "mon",
    "tue",
    "wed",
    "thu",
    "fri",
    "sat",
    "sun"
  ],
  "frequency": "daily",
  "hours": null,
  "interval": 1,
  "minutes": null
}
```

The repeat rule for the schedule.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|__typename|string|false|none|The typename of the schema.|
|day_of_month|integer \| null|false|none|The day of the month to repeat the schedule.|
|days|[string]|false|none|The days of the week to repeat the schedule.|
|frequency|string|true|none|The frequency of the schedule.|
|hours|integer \| null|false|none|The hour of the day to repeat the schedule.|
|interval|integer|false|none|The interval of the schedule.|
|minutes|integer \| null|false|none|The minute of the hour to repeat the schedule.|

#### Enumerated Values

|Property|Value|
|---|---|
|days|mon|
|days|tue|
|days|wed|
|days|thu|
|days|fri|
|days|sat|
|days|sun|
|frequency|daily|
|frequency|weekly|
|frequency|monthly|
|frequency|hourly|

<h2 id="tocS_DiscordIncomingWebhookConnection">DiscordIncomingWebhookConnection</h2>
<!-- backwards compatibility -->
<a id="schemadiscordincomingwebhookconnection"></a>
<a id="schema_DiscordIncomingWebhookConnection"></a>
<a id="tocSdiscordincomingwebhookconnection"></a>
<a id="tocsdiscordincomingwebhookconnection"></a>

```json
{
  "incoming_webhook": {
    "url": "https://example.com/webhook"
  },
  "knock_tenant_id": "starfleet"
}
```

Discord incoming webhook connection.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|incoming_webhook|object|true|none|Discord incoming webhook object.|
|knock_tenant_id|string \| null|false|none|An optional Knock tenant ID (`knock_tenant_id`) that scopes this connection. Distinct from provider-specific tenant IDs. When a workflow is triggered with this tenant, Knock prefers this connection over untagged connections.|

<h2 id="tocS_RemoveAudienceMembersRequest">RemoveAudienceMembersRequest</h2>
<!-- backwards compatibility -->
<a id="schemaremoveaudiencemembersrequest"></a>
<a id="schema_RemoveAudienceMembersRequest"></a>
<a id="tocSremoveaudiencemembersrequest"></a>
<a id="tocsremoveaudiencemembersrequest"></a>

```json
{
  "members": [
    {
      "tenant": "ingen_isla_nublar",
      "user": {
        "email": "ellie@ingen.net",
        "id": "dr_sattler",
        "name": "Dr. Ellie Sattler"
      }
    }
  ]
}
```

A request to remove a list of audience members.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|members|[[AudienceMemberRequest](#schemaaudiencememberrequest)]|true|none|A list of audience members to remove. You can remove up to 1,000 members per request.|

<h2 id="tocS_UserInAppFeedSettingsResponse">UserInAppFeedSettingsResponse</h2>
<!-- backwards compatibility -->
<a id="schemauserinappfeedsettingsresponse"></a>
<a id="schema_UserInAppFeedSettingsResponse"></a>
<a id="tocSuserinappfeedsettingsresponse"></a>
<a id="tocsuserinappfeedsettingsresponse"></a>

```json
{
  "features": {
    "branding_required": true
  }
}
```

The response for the user's feed settings.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|features|object|true|none|Features configuration for the user's feed.|

<h2 id="tocS_SetTenantRequest">SetTenantRequest</h2>
<!-- backwards compatibility -->
<a id="schemasettenantrequest"></a>
<a id="schema_SetTenantRequest"></a>
<a id="tocSsettenantrequest"></a>
<a id="tocssettenantrequest"></a>

```json
{
  "name": "Jurassic Park",
  "settings": {
    "branding": {
      "icon_url": "https://example.com/trex_silhouette_icon.png",
      "logo_url": "https://example.com/amber_fossil_logo.png",
      "primary_color": "#DF1A22",
      "primary_color_contrast": "#FFDE00"
    }
  }
}
```

A tenant to be set in the system. You can supply any additional properties on the tenant object.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|channel_data|object \| null \| [InlineChannelDataRequest](#schemainlinechanneldatarequest)|false|none|The channel data for the tenant.|
|name|string \| null|false|none|An optional name for the tenant.|
|settings|object|false|none|The settings for the tenant. Includes branding and preference set.|

<h2 id="tocS_ObjectReference">ObjectReference</h2>
<!-- backwards compatibility -->
<a id="schemaobjectreference"></a>
<a id="schema_ObjectReference"></a>
<a id="tocSobjectreference"></a>
<a id="tocsobjectreference"></a>

```json
{
  "collection": "projects",
  "id": "project_123"
}
```

A reference to a recipient object.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|collection|string|false|none|The collection the recipient object belongs to.|
|id|string|false|none|An identifier for the recipient object.|

<h2 id="tocS_GuideInteractedRequest">GuideInteractedRequest</h2>
<!-- backwards compatibility -->
<a id="schemaguideinteractedrequest"></a>
<a id="schema_GuideInteractedRequest"></a>
<a id="tocSguideinteractedrequest"></a>
<a id="tocsguideinteractedrequest"></a>

```json
{
  "channel_id": "123e4567-e89b-12d3-a456-426614174000",
  "guide_id": "7e9dc78c-b3b1-4127-a54e-71f1899b831a",
  "guide_key": "tour_notification",
  "guide_step_ref": "lab_tours",
  "metadata": {
    "cta": "Reserve Spot",
    "theme": "amber",
    "type": "banner"
  },
  "tenant": "ingen_isla_nublar"
}
```

A request to mark a guide as interacted with.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|channel_id|string(uuid)|true|none|The unique identifier for the channel.|
|guide_id|string(uuid)|true|none|The unique identifier for the guide.|
|guide_key|string|true|none|The key of the guide.|
|guide_step_ref|string|true|none|The step reference of the guide.|
|metadata|object|false|none|Metadata about the interaction.|
|tenant|string|false|none|The tenant ID of the guide.|

<h2 id="tocS_AuthenticationError">AuthenticationError</h2>
<!-- backwards compatibility -->
<a id="schemaauthenticationerror"></a>
<a id="schema_AuthenticationError"></a>
<a id="tocSauthenticationerror"></a>
<a id="tocsauthenticationerror"></a>

```json
{
  "code": "authorization",
  "message": "Access token not set.",
  "status": 403,
  "type": "authentication_error"
}
```

Authentication error response

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|true|none|The error code.|
|message|string|true|none|The error message.|
|status|integer|true|none|The HTTP status code.|
|type|string|true|none|The error type.|

<h2 id="tocS_Notify Response">Notify Response</h2>
<!-- backwards compatibility -->
<a id="schemanotify response"></a>
<a id="schema_Notify Response"></a>
<a id="tocSnotify response"></a>
<a id="tocsnotify response"></a>

```json
{
  "result_id": "wf_1234567890abcdef"
}
```

The response from triggering a workflow.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|result_id|string|true|none|This value allows you to track individual messages associated with this trigger request.|

<h2 id="tocS_BulkCreateSchedulesRequest">BulkCreateSchedulesRequest</h2>
<!-- backwards compatibility -->
<a id="schemabulkcreateschedulesrequest"></a>
<a id="schema_BulkCreateSchedulesRequest"></a>
<a id="tocSbulkcreateschedulesrequest"></a>
<a id="tocsbulkcreateschedulesrequest"></a>

```json
{
  "schedules": [
    {
      "data": {
        "key": "value"
      },
      "ending_at": null,
      "recipient": "dnedry",
      "repeats": [
        {
          "__typename": "ScheduleRepeat",
          "day_of_month": null,
          "days": [
            "mon",
            "tue",
            "wed",
            "thu",
            "fri",
            "sat",
            "sun"
          ],
          "frequency": "daily",
          "hours": null,
          "interval": 1,
          "minutes": null
        }
      ],
      "scheduled_at": null,
      "tenant": "acme_corp",
      "workflow": "comment-created"
    },
    {
      "data": {
        "key": "value"
      },
      "ending_at": null,
      "recipient": "esattler",
      "repeats": [
        {
          "__typename": "ScheduleRepeat",
          "day_of_month": null,
          "days": [
            "mon",
            "tue",
            "wed",
            "thu",
            "fri",
            "sat",
            "sun"
          ],
          "frequency": "daily",
          "hours": null,
          "interval": 1,
          "minutes": null
        }
      ],
      "scheduled_at": null,
      "tenant": "acme_corp",
      "workflow": "comment-created"
    }
  ]
}
```

A request to bulk create schedules. Accepts a list of schedules to create. Each schedule must have a single recipient. The recipients do not have to be unique.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|schedules|[object]|true|none|A list of schedules.|

<h2 id="tocS_MessageEmailContent">MessageEmailContent</h2>
<!-- backwards compatibility -->
<a id="schemamessageemailcontent"></a>
<a id="schema_MessageEmailContent"></a>
<a id="tocSmessageemailcontent"></a>
<a id="tocsmessageemailcontent"></a>

```json
{
  "__typename": "MessageEmailContent",
  "bcc": "security@ingen.net",
  "cc": "operations@isla-nublar.com",
  "from": "welcome@isla-nublar.com",
  "html_body": "<h1>Welcome to Isla Nublar</h1><p>Dear visitor,</p><p>We're excited to confirm your upcoming tour of our biological preserve. Your safety is our primary concern.</p><p>Please review the <a href='https://example.com/safety'>safety protocols</a> before arrival.</p><p><strong>Remember:</strong> All specimens are accounted for and contained.</p>",
  "reply_to": "visitor.center@isla-nublar.com",
  "subject_line": "Tour Confirmation: Isla Nublar Biological Preserve",
  "text_body": "Welcome to Isla Nublar\n\nDear visitor,\n\nWe're excited to confirm your upcoming tour of our biological preserve. Your safety is our primary concern.\n\nPlease review the safety protocols before arrival: https://example.com/safety\n\nRemember: All specimens are accounted for and contained.",
  "to": "dr.grant@dig.site.mt"
}
```

The content of an email message.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|__typename|string|true|none|The typename of the schema.|
|bcc|string \| null|false|none|The BCC email addresses.|
|cc|string \| null|false|none|The CC email addresses.|
|from|string|true|none|The sender's email address.|
|html_body|string|true|none|The HTML body of the email message.|
|reply_to|string \| null|false|none|The reply-to email address.|
|subject_line|string|true|none|The subject line of the email message.|
|text_body|string|true|none|The text body of the email message.|
|to|string|true|none|The recipient's email address.|

<h2 id="tocS_SlackChannelData">SlackChannelData</h2>
<!-- backwards compatibility -->
<a id="schemaslackchanneldata"></a>
<a id="schema_SlackChannelData"></a>
<a id="tocSslackchanneldata"></a>
<a id="tocsslackchanneldata"></a>

```json
{
  "connections": [
    {
      "access_token": "xoxb-1234567890",
      "channel_id": "C01234567890",
      "channel_name": "team-alerts",
      "knock_tenant_id": "starfleet",
      "user_id": "U01234567890"
    }
  ],
  "token": {
    "access_token": "xoxb-1234567890"
  }
}
```

Slack channel data.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|connections|[object]|true|none|List of Slack channel connections.|
|token|object \| null|false|none|A Slack connection token.|

<h2 id="tocS_PushChannelDataDevicesOnly">PushChannelDataDevicesOnly</h2>
<!-- backwards compatibility -->
<a id="schemapushchanneldatadevicesonly"></a>
<a id="schema_PushChannelDataDevicesOnly"></a>
<a id="tocSpushchanneldatadevicesonly"></a>
<a id="tocspushchanneldatadevicesonly"></a>

```json
{
  "devices": [
    {
      "locale": "en-US",
      "timezone": "America/Los_Angeles",
      "token": "push_token_1"
    }
  ]
}
```

Push channel data.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|devices|[object]|true|none|A list of devices. Each device contains a token, and optionally a locale and timezone.|

<h2 id="tocS_PreferenceSet">PreferenceSet</h2>
<!-- backwards compatibility -->
<a id="schemapreferenceset"></a>
<a id="schema_PreferenceSet"></a>
<a id="tocSpreferenceset"></a>
<a id="tocspreferenceset"></a>

```json
{
  "categories": {
    "marketing": false,
    "transactional": {
      "channel_types": {
        "email": false
      }
    }
  },
  "channel_types": {
    "email": true,
    "push": false,
    "sms": {
      "conditions": [
        {
          "argument": "US",
          "operator": "equal_to",
          "variable": "recipient.country_code"
        }
      ]
    }
  },
  "commercial_subscribed": true,
  "id": "default",
  "workflows": null
}
```

A preference set represents a specific set of notification preferences for a recipient. A recipient can have multiple preference sets.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|categories|object \| object \| null|false|none|An object where the key is the category and the values are the preference settings for that category.|
|channel_types|[PreferenceSetChannelTypes](#schemapreferencesetchanneltypes) \| object \| null|false|none|An object where the key is the channel type and the values are the preference settings for that channel type.|
|channels|[PreferenceSetChannels](#schemapreferencesetchannels) \| object \| null|false|none|An object where the key is the channel ID and the values are the preference settings for that channel ID.|
|commercial_subscribed|boolean \| [PreferenceSetCommercialSubscribedSetting](#schemapreferencesetcommercialsubscribedsetting) \| object \| null|false|none|Whether the recipient is subscribed to commercial communications. When false, the recipient will not receive commercial workflow notifications. Can also be set to a settings object with conditions that are evaluated at notification send time.|
|id|string|true|none|Unique identifier for the preference set.|
|workflows|object \| object \| null|false|none|An object where the key is the workflow key and the values are the preference settings for that workflow.|

<h2 id="tocS_SlackTokenConnection">SlackTokenConnection</h2>
<!-- backwards compatibility -->
<a id="schemaslacktokenconnection"></a>
<a id="schema_SlackTokenConnection"></a>
<a id="tocSslacktokenconnection"></a>
<a id="tocsslacktokenconnection"></a>

```json
{
  "access_token": "xoxb-1234567890",
  "channel_id": "C01234567890",
  "channel_name": "team-alerts",
  "knock_tenant_id": "starfleet",
  "user_id": "U01234567890"
}
```

A Slack connection token.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|access_token|string \| null|false|none|A Slack access token.|
|channel_id|string \| null|false|none|A Slack channel ID from the Slack provider.|
|channel_name|string \| null|false|none|Slack channel name.|
|knock_tenant_id|string \| null|false|none|An optional Knock tenant ID (`knock_tenant_id`) that scopes this connection. Distinct from provider-specific tenant IDs. When a workflow is triggered with this tenant, Knock prefers this connection over untagged connections.|
|user_id|string \| null|false|none|A Slack user ID from the Slack provider.|

<h2 id="tocS_RecipientRequest">RecipientRequest</h2>
<!-- backwards compatibility -->
<a id="schemarecipientrequest"></a>
<a id="schema_RecipientRequest"></a>
<a id="tocSrecipientrequest"></a>
<a id="tocsrecipientrequest"></a>

```json
{
  "id": "user_1"
}
```

Specifies a recipient in a request. This can either be a user identifier (string), an inline user request (object), or an inline object request, which is determined by the presence of a `collection` property.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|string|false|none|The ID of the user which is used as the reference for the recipient.|
|*oneOf*|[InlineIdentifyUserRequest](#schemainlineidentifyuserrequest)|false|none|A set of parameters to inline-identify a user with. Inline identifying the user will ensure that the user is available before the request is executed in Knock. It will perform an upsert for the user you're supplying, replacing any properties specified.|
|*oneOf*|[InlineIdentifyObjectRequest](#schemainlineidentifyobjectrequest)|false|none|A custom [Object](/concepts/objects) entity which belongs to a collection.|

<h2 id="tocS_Block">Block</h2>
<!-- backwards compatibility -->
<a id="schemablock"></a>
<a id="schema_Block"></a>
<a id="tocSblock"></a>
<a id="tocsblock"></a>

```json
{
  "content": "Hello, world!",
  "name": "greeting",
  "type": "text"
}
```

A block in a message in a chat.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|content|string|true|none|The actual content of the block.|
|name|string|true|none|The name of the block for identification.|
|type|string|true|none|The type of block in a message in a chat (text or markdown).|

#### Enumerated Values

|Property|Value|
|---|---|
|type|text|
|type|markdown|

<h2 id="tocS_SubscriptionsResponse">SubscriptionsResponse</h2>
<!-- backwards compatibility -->
<a id="schemasubscriptionsresponse"></a>
<a id="schema_SubscriptionsResponse"></a>
<a id="tocSsubscriptionsresponse"></a>
<a id="tocssubscriptionsresponse"></a>

```json
[
  {
    "__typename": "Subscription",
    "inserted_at": "2021-01-01T00:00:00Z",
    "object": {
      "__typename": "Object",
      "collection": "assets",
      "created_at": null,
      "id": "specimen_25",
      "properties": {
        "classification": "Theropod",
        "config": {
          "biz": "baz",
          "foo": "bar"
        },
        "name": "Velociraptor",
        "status": "contained"
      },
      "updated_at": "2024-05-22T12:00:00Z"
    },
    "recipient": {
      "__typename": "User",
      "avatar": null,
      "created_at": null,
      "email": "jane@ingen.net",
      "id": "jane",
      "name": "Jane Doe",
      "phone_number": null,
      "timezone": null,
      "updated_at": "2024-05-22T12:00:00Z"
    },
    "updated_at": "2021-01-01T00:00:00Z"
  }
]
```

A response containing a list of subscriptions.

<h2 id="tocS_ListObjectPreferenceSetsResponse">ListObjectPreferenceSetsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistobjectpreferencesetsresponse"></a>
<a id="schema_ListObjectPreferenceSetsResponse"></a>
<a id="tocSlistobjectpreferencesetsresponse"></a>
<a id="tocslistobjectpreferencesetsresponse"></a>

```json
[
  {
    "categories": {
      "marketing": false,
      "transactional": {
        "channel_types": {
          "email": false
        }
      }
    },
    "channel_types": {
      "email": true,
      "push": false,
      "sms": {
        "conditions": [
          {
            "argument": "US",
            "operator": "equal_to",
            "variable": "recipient.country_code"
          }
        ]
      }
    },
    "commercial_subscribed": true,
    "id": "default",
    "workflows": null
  }
]
```

A list of preference sets for the object

<h2 id="tocS_MessageDeliveryLogResponse">MessageDeliveryLogResponse</h2>
<!-- backwards compatibility -->
<a id="schemamessagedeliverylogresponse"></a>
<a id="schema_MessageDeliveryLogResponse"></a>
<a id="tocSmessagedeliverylogresponse"></a>
<a id="tocsmessagedeliverylogresponse"></a>

```json
{
  "body": {
    "success": true
  },
  "headers": {
    "Content-Type": "application/json"
  },
  "status": 200
}
```

A message delivery log response.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|body|object|false|none|The body content that was received with the response.|
|headers|object \| null|false|none|The headers that were received with the response.|
|status|integer|false|none|The HTTP status code of the response.|

<h2 id="tocS_MessageInAppFeedContent">MessageInAppFeedContent</h2>
<!-- backwards compatibility -->
<a id="schemamessageinappfeedcontent"></a>
<a id="schema_MessageInAppFeedContent"></a>
<a id="tocSmessageinappfeedcontent"></a>
<a id="tocsmessageinappfeedcontent"></a>

```json
{
  "__typename": "MessageInAppFeedContent",
  "blocks": [
    {
      "content": "## Welcome to Isla Nublar",
      "name": "header",
      "rendered": "<h2>Welcome to Isla Nublar</h2>",
      "type": "markdown"
    },
    {
      "content": "Your tour will begin shortly. During your visit, please:\n\n* Stay in the vehicles at all times\n* Do not feed or provoke the animals\n* Follow all staff instructions",
      "name": "body",
      "rendered": "<p>Your tour will begin shortly. During your visit, please:</p><ul><li>Stay in the vehicles at all times</li><li>Do not feed or provoke the animals</li><li>Follow all staff instructions</li></ul>",
      "type": "markdown"
    },
    {
      "buttons": [
        {
          "action": "https://example.com/park-map",
          "label": "View Map",
          "name": "map"
        },
        {
          "action": "https://example.com/safety",
          "label": "Safety Protocols",
          "name": "safety"
        }
      ],
      "name": "actions",
      "type": "button_set"
    }
  ]
}
```

The content of an in-app feed message.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|__typename|string|true|none|The typename of the schema.|
|blocks|[object]|true|none|The blocks of the message in an app feed.|

<h2 id="tocS_ChannelsForMsTeamsProviderResponse">ChannelsForMsTeamsProviderResponse</h2>
<!-- backwards compatibility -->
<a id="schemachannelsformsteamsproviderresponse"></a>
<a id="schema_ChannelsForMsTeamsProviderResponse"></a>
<a id="tocSchannelsformsteamsproviderresponse"></a>
<a id="tocschannelsformsteamsproviderresponse"></a>

```json
{
  "ms_teams_channels": [
    {
      "displayName": "General",
      "id": "channel-id-1"
    }
  ]
}
```

The response from a Microsoft Teams provider request, containing a list of channels.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ms_teams_channels|[object]|true|none|List of Microsoft Teams channels.|

<h2 id="tocS_ListMessageDeliveryLogsResponse">ListMessageDeliveryLogsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistmessagedeliverylogsresponse"></a>
<a id="schema_ListMessageDeliveryLogsResponse"></a>
<a id="tocSlistmessagedeliverylogsresponse"></a>
<a id="tocslistmessagedeliverylogsresponse"></a>

```json
{
  "items": [
    {
      "__typename": "MessageDeliveryLog",
      "environment_id": "123e4567-e89b-12d3-a456-426614174000",
      "id": "2FVHPWxRqNuXQ9krvNP5A6Z4qXe",
      "inserted_at": "2021-01-01T00:00:00Z",
      "request": {
        "body": {
          "html_content": "<html></html>"
        },
        "headers": {
          "Content-Type": "application/json"
        },
        "host": "localhost",
        "method": "GET",
        "path": "/",
        "query": "?foo=bar"
      },
      "response": {
        "body": {
          "success": true
        },
        "headers": {
          "Content-Type": "application/json"
        },
        "status": 200
      },
      "service_name": "Postmark"
    }
  ],
  "page_info": {
    "__typename": "PageInfo",
    "after": null,
    "before": null,
    "page_size": 25
  }
}
```

A message delivery log response.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|items|[[MessageDeliveryLog](#schemamessagedeliverylog)]|true|none|Returns a paginated list of delivery logs from the downstream provider for the specified message. For Knock in-app channels, the delivery logs will always be an empty list.|
|page_info|[PageInfo](#schemapageinfo)|true|none|Pagination information for a list of resources.|

<h2 id="tocS_SlackIncomingWebhookConnection">SlackIncomingWebhookConnection</h2>
<!-- backwards compatibility -->
<a id="schemaslackincomingwebhookconnection"></a>
<a id="schema_SlackIncomingWebhookConnection"></a>
<a id="tocSslackincomingwebhookconnection"></a>
<a id="tocsslackincomingwebhookconnection"></a>

```json
{
  "incoming_webhook": {
    "url": "https://hooks.slack.com/services/T01234567890/B01234567890/1234567890"
  },
  "knock_tenant_id": "starfleet"
}
```

A Slack connection incoming webhook.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|incoming_webhook|object|true|none|A Slack connection incoming webhook.|
|knock_tenant_id|string \| null|false|none|An optional Knock tenant ID (`knock_tenant_id`) that scopes this connection. Distinct from provider-specific tenant IDs. When a workflow is triggered with this tenant, Knock prefers this connection over untagged connections.|

<h2 id="tocS_PushChannelDataFull">PushChannelDataFull</h2>
<!-- backwards compatibility -->
<a id="schemapushchanneldatafull"></a>
<a id="schema_PushChannelDataFull"></a>
<a id="tocSpushchanneldatafull"></a>
<a id="tocspushchanneldatafull"></a>

```json
{
  "devices": [
    {
      "locale": "en-US",
      "timezone": null,
      "token": "push_token_1"
    }
  ],
  "tokens": [
    "push_token_1",
    "push_token_2"
  ]
}
```

Push channel data.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|devices|[object]|true|none|A list of devices. Each device contains a token, and optionally a locale and timezone.|
|tokens|[string]|true|none|A list of push channel tokens.|

<h2 id="tocS_Notify Request">Notify Request</h2>
<!-- backwards compatibility -->
<a id="schemanotify request"></a>
<a id="schema_Notify Request"></a>
<a id="tocSnotify request"></a>
<a id="tocsnotify request"></a>

```json
{
  "actor": "user_123",
  "cancellation_key": "comment_123",
  "data": {
    "comment": "Great work on this feature!",
    "url": "https://example.com/projects/123/comments/456"
  },
  "name": "new-comment",
  "recipients": [
    "user_456",
    {
      "collection": "projects",
      "id": "project_789"
    }
  ]
}
```

A request to trigger a notification workflow.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|actor|[RecipientReference](#schemarecipientreference)|true|none|A reference to a recipient, either a user identifier (string) or an object reference (ID, collection).|
|cancellation_key|string \| null|false|none|A key that is used to reference a specific workflow trigger request when issuing a [workflow cancellation](/send-notifications/canceling-workflows) request. Must be provided while triggering a workflow in order to enable subsequent cancellation. Should be unique across trigger requests to avoid unintentional cancellations.|
|data|object \| null|false|none|An optional map of data to pass into the workflow execution. There is a 10MB limit on the size of the full `data` payload. Any individual string value greater than 1024 bytes in length will be [truncated](/developer-tools/api-logs#log-truncation) in your logs.|
|name|string|true|none|The key of the workflow to trigger.|
|recipients|[[RecipientReference](#schemarecipientreference)]|true|none|A list of recipients.|

<h2 id="tocS_MsTeamsAuthCheckResponse">MsTeamsAuthCheckResponse</h2>
<!-- backwards compatibility -->
<a id="schemamsteamsauthcheckresponse"></a>
<a id="schema_MsTeamsAuthCheckResponse"></a>
<a id="tocSmsteamsauthcheckresponse"></a>
<a id="tocsmsteamsauthcheckresponse"></a>

```json
{
  "connection": {
    "ms_teams_tenant_id": "a Microsoft Teams tenant ID",
    "ok": true
  }
}
```

The response from a Microsoft Teams auth check request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|connection|object|true|none|A Microsoft Teams connection object.|

<h2 id="tocS_AudienceMemberRequest">AudienceMemberRequest</h2>
<!-- backwards compatibility -->
<a id="schemaaudiencememberrequest"></a>
<a id="schema_AudienceMemberRequest"></a>
<a id="tocSaudiencememberrequest"></a>
<a id="tocsaudiencememberrequest"></a>

```json
{
  "tenant": "ingen_isla_nublar",
  "user": {
    "email": "ellie@ingen.net",
    "id": "dr_sattler",
    "name": "Dr. Ellie Sattler"
  }
}
```

An audience member.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|tenant|string \| null|false|none|The unique identifier for the tenant.|
|user|object|true|none|A user object. At minimum must contain an `id` property.|

<h2 id="tocS_SlackAuthCheckResponse">SlackAuthCheckResponse</h2>
<!-- backwards compatibility -->
<a id="schemaslackauthcheckresponse"></a>
<a id="schema_SlackAuthCheckResponse"></a>
<a id="tocSslackauthcheckresponse"></a>
<a id="tocsslackauthcheckresponse"></a>

```json
{
  "connection": {
    "ok": true
  }
}
```

The response from a Slack auth check request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|connection|object|true|none|A Slack connection object.|

<h2 id="tocS_InAppFeedItem">InAppFeedItem</h2>
<!-- backwards compatibility -->
<a id="schemainappfeeditem"></a>
<a id="schema_InAppFeedItem"></a>
<a id="tocSinappfeeditem"></a>
<a id="tocsinappfeeditem"></a>

```json
{
  "__typename": "FeedItem",
  "activities": [
    {
      "__typename": "Activity",
      "actor": null,
      "data": {
        "foo": "bar"
      },
      "id": "2FVHPWxRqNuXQ9krvNP5A6Z4qXe",
      "inserted_at": "2024-01-01T00:00:00Z",
      "recipient": {
        "__typename": "User",
        "avatar": null,
        "created_at": null,
        "email": "jane@ingen.net",
        "id": "jane",
        "name": "Jane Doe",
        "phone_number": null,
        "timezone": null,
        "updated_at": "2024-05-22T12:00:00Z"
      },
      "updated_at": "2024-01-01T00:00:00Z"
    }
  ],
  "actors": [
    {
      "__typename": "User",
      "avatar": null,
      "created_at": null,
      "email": "jane@ingen.net",
      "id": "jane",
      "name": "Jane Doe",
      "phone_number": null,
      "timezone": null,
      "updated_at": "2024-05-22T12:00:00Z"
    }
  ],
  "blocks": [
    {
      "content": "This is a message in an app feed",
      "name": "body",
      "rendered": "<p>This is a message in an app feed</p>",
      "type": "markdown"
    }
  ],
  "data": {
    "foo": "bar"
  },
  "id": "2FVHPWxRqNuXQ9krvNP5A6Z4qXe",
  "inserted_at": "2021-01-01T00:00:00Z",
  "source": {
    "__typename": "Workflow",
    "categories": [
      "collaboration"
    ],
    "key": "my_source",
    "version_id": "123e4567-e89b-12d3-a456-426614174000"
  },
  "tenant": "acme_corp",
  "total_activities": 10,
  "total_actors": 5,
  "updated_at": "2021-01-01T00:00:00Z"
}
```

An in-app feed message in a user's feed.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|__typename|string|true|none|The typename of the schema.|
|activities|[[Activity](#schemaactivity)]|true|none|List of activities associated with this feed item.|
|actors|[[Recipient](#schemarecipient)]|true|none|List of actors associated with this feed item.|
|archived_at|string \| null|false|none|Timestamp when the feed item was archived.|
|blocks|[object]|true|none|Content blocks that make up the feed item.|
|clicked_at|string \| null|false|none|Timestamp when the feed item was clicked.|
|data|object \| null|true|none|Additional data associated with the feed item.|
|id|string|true|none|Unique identifier for the feed.|
|inserted_at|string|true|none|Timestamp when the resource was created.|
|interacted_at|string \| null|false|none|Timestamp when the feed item was interacted with.|
|link_clicked_at|string \| null|false|none|Timestamp when a link within the feed item was clicked.|
|read_at|string \| null|false|none|Timestamp when the feed item was marked as read.|
|seen_at|string \| null|false|none|Timestamp when the feed item was marked as seen.|
|source|object|true|none|Source information for the feed item.|
|tenant|string \| null|true|none|Tenant ID that the feed item belongs to.|
|total_activities|integer|true|none|Total number of activities related to this feed item.|
|total_actors|integer|true|none|Total number of actors related to this feed item.|
|updated_at|string|true|none|The timestamp when the resource was last updated.|

<h2 id="tocS_Schedule">Schedule</h2>
<!-- backwards compatibility -->
<a id="schemaschedule"></a>
<a id="schema_Schedule"></a>
<a id="tocSschedule"></a>
<a id="tocsschedule"></a>

```json
{
  "__typename": "Schedule",
  "actor": null,
  "data": null,
  "id": "123e4567-e89b-12d3-a456-426614174000",
  "inserted_at": "2021-01-01T00:00:00Z",
  "last_occurrence_at": null,
  "next_occurrence_at": null,
  "recipient": {
    "__typename": "User",
    "avatar": null,
    "created_at": null,
    "email": "jane@ingen.net",
    "id": "jane",
    "name": "Jane Doe",
    "phone_number": null,
    "timezone": null,
    "updated_at": "2024-05-22T12:00:00Z"
  },
  "repeats": [
    {
      "__typename": "ScheduleRepeat",
      "day_of_month": null,
      "days": [
        "mon",
        "tue",
        "wed",
        "thu",
        "fri",
        "sat",
        "sun"
      ],
      "frequency": "daily",
      "hours": null,
      "interval": 1,
      "minutes": null
    }
  ],
  "tenant": null,
  "updated_at": "2021-01-01T00:00:00Z",
  "workflow": "workflow_123"
}
```

A schedule represents a recurring workflow execution.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|__typename|string|false|none|The typename of the schema.|
|actor|[Recipient](#schemarecipient) \| object \| null|false|none|A map of properties describing a user or an object to identify in Knock and mark as who or what performed the action.|
|data|object \| null|false|none|An optional map of data to pass into the workflow execution. There is a 10MB limit on the size of the full `data` payload. Any individual string value greater than 1024 bytes in length will be [truncated](/developer-tools/api-logs#log-truncation) in your logs.|
|id|string(uuid)|true|none|Unique identifier for the schedule.|
|inserted_at|string(date-time)|true|none|Timestamp when the resource was created.|
|last_occurrence_at|string(date-time) \| null|false|none|The last occurrence of the schedule.|
|next_occurrence_at|string(date-time) \| null|false|none|The next occurrence of the schedule.|
|recipient|[Recipient](#schemarecipient)|true|none|A recipient of a notification, which is either a user or an object.|
|repeats|[[ScheduleRepeatRule](#schemaschedulerepeatrule)]|true|none|The repeat rule for the schedule.|
|tenant|string \| null|false|none|The tenant to trigger the workflow for. Triggering with a tenant will use any tenant-level overrides associated with the tenant object, and all messages produced from workflow runs will be tagged with the tenant.|
|updated_at|string(date-time)|true|none|The timestamp when the resource was last updated.|
|workflow|string|true|none|The workflow the schedule is applied to.|

<h2 id="tocS_IdentifyUserRequest">IdentifyUserRequest</h2>
<!-- backwards compatibility -->
<a id="schemaidentifyuserrequest"></a>
<a id="schema_IdentifyUserRequest"></a>
<a id="tocSidentifyuserrequest"></a>
<a id="tocsidentifyuserrequest"></a>

```json
{
  "channel_data": {
    "97c5837d-c65c-4d54-aa39-080eeb81c69d": {
      "tokens": [
        "push_token_123"
      ]
    }
  },
  "email": "ian.malcolm@chaos.theory",
  "name": "Dr. Ian Malcolm",
  "preferences": {
    "default": {
      "channel_types": {
        "email": true
      },
      "workflows": {
        "dinosaurs-loose": {
          "channel_types": {
            "email": true
          }
        }
      }
    }
  },
  "timezone": "America/New_York"
}
```

A set of parameters to identify a user with. Does not include the user ID, as that's specified elsewhere in the request. You can supply any additional properties you'd like to upsert for the user.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|avatar|string \| null|false|none|A URL for the avatar of the user.|
|channel_data|object \| null|false|none|Channel-specific information that's needed to deliver a notification to an end provider.|
|created_at|string(date-time) \| null|false|none|The creation date of the user from your system.|
|email|string \| null|false|none|The primary email address for the user.|
|locale|string \| null|false|none|The locale of the user. Used for [message localization](/concepts/translations).|
|name|string \| null|false|none|Display name of the user.|
|phone_number|string \| null|false|none|The [E.164](https://www.twilio.com/docs/glossary/what-e164) phone number of the user (required for SMS channels).|
|preferences|object \| null|false|none|A set of preferences for the user.|
|timezone|string \| null|false|none|The timezone of the user. Must be a valid [tz database time zone string](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones). Used for [recurring schedules](/concepts/schedules#scheduling-workflows-with-recurring-schedules-for-recipients).|

<h2 id="tocS_SetTenantResponse">SetTenantResponse</h2>
<!-- backwards compatibility -->
<a id="schemasettenantresponse"></a>
<a id="schema_SetTenantResponse"></a>
<a id="tocSsettenantresponse"></a>
<a id="tocssettenantresponse"></a>

```json
{
  "__typename": "Tenant",
  "created_at": "1993-05-24T08:30:00Z",
  "id": "ingen_isla_nublar",
  "name": "Jurassic Park",
  "settings": {
    "branding": {
      "icon_url": "https://example.com/trex_silhouette_icon.png",
      "logo_url": "https://example.com/amber_fossil_logo.png",
      "primary_color": "#DF1A22",
      "primary_color_contrast": "#FFDE00"
    }
  },
  "updated_at": "1993-06-11T15:45:00Z"
}
```

The response from setting a tenant.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[Tenant](#schematenant)|false|none|A tenant entity.|

<h2 id="tocS_ListWorkflowRecipientRunsResponse">ListWorkflowRecipientRunsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistworkflowrecipientrunsresponse"></a>
<a id="schema_ListWorkflowRecipientRunsResponse"></a>
<a id="tocSlistworkflowrecipientrunsresponse"></a>
<a id="tocslistworkflowrecipientrunsresponse"></a>

```json
{
  "items": [
    {
      "__typename": "WorkflowRecipientRun",
      "actor": "user_456",
      "error_count": 0,
      "id": "550e8400-e29b-41d4-a716-446655440000",
      "inserted_at": "2025-01-01T00:00:00Z",
      "recipient": "user_123",
      "status": "completed",
      "tenant": "tenant_abc",
      "trigger_source": {
        "cancellation_key": "comment-123-user-456",
        "type": "api"
      },
      "updated_at": "2025-01-01T00:05:00Z",
      "workflow": "comment-created",
      "workflow_run_id": "660e8400-e29b-41d4-a716-446655440000"
    }
  ],
  "page_info": {
    "__typename": "PageInfo",
    "after": null,
    "before": null,
    "page_size": 25
  }
}
```

A paginated list of workflow recipient runs.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|items|[[WorkflowRecipientRun](#schemaworkflowrecipientrun)]|true|none|A list of workflow recipient runs.|
|page_info|[PageInfo](#schemapageinfo)|true|none|Pagination information for a list of resources.|

<h2 id="tocS_PreferenceSetWorkflows">PreferenceSetWorkflows</h2>
<!-- backwards compatibility -->
<a id="schemapreferencesetworkflows"></a>
<a id="schema_PreferenceSetWorkflows"></a>
<a id="tocSpreferencesetworkflows"></a>
<a id="tocspreferencesetworkflows"></a>

```json
{
  "dinosaurs-loose": {
    "channel_types": {
      "email": false
    }
  }
}
```

An object where the key is the workflow key and the values are the preference settings for that workflow.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[PreferenceSetWorkflowCategorySetting](#schemapreferencesetworkflowcategorysetting)|false|none|Workflow or category preferences within a preference set|

<h2 id="tocS_ListSubscriptionsResponse">ListSubscriptionsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistsubscriptionsresponse"></a>
<a id="schema_ListSubscriptionsResponse"></a>
<a id="tocSlistsubscriptionsresponse"></a>
<a id="tocslistsubscriptionsresponse"></a>

```json
{
  "entries": [
    {
      "__typename": "Subscription",
      "inserted_at": "2021-01-01T00:00:00Z",
      "object": {
        "__typename": "Object",
        "collection": "assets",
        "created_at": null,
        "id": "specimen_25",
        "properties": {
          "classification": "Theropod",
          "config": {
            "biz": "baz",
            "foo": "bar"
          },
          "name": "Velociraptor",
          "status": "contained"
        },
        "updated_at": "2024-05-22T12:00:00Z"
      },
      "recipient": {
        "__typename": "User",
        "avatar": null,
        "created_at": null,
        "email": "jane@ingen.net",
        "id": "jane",
        "name": "Jane Doe",
        "phone_number": null,
        "timezone": null,
        "updated_at": "2024-05-22T12:00:00Z"
      },
      "updated_at": "2021-01-01T00:00:00Z"
    }
  ],
  "page_info": {
    "__typename": "PageInfo",
    "after": null,
    "before": null,
    "page_size": 25
  }
}
```

A response containing a list of subscriptions.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|entries|[[Subscription](#schemasubscription)]|true|none|A list of subscriptions.|
|page_info|[PageInfo](#schemapageinfo)|true|none|Pagination information for a list of resources.|

<h2 id="tocS_SuccessResponse">SuccessResponse</h2>
<!-- backwards compatibility -->
<a id="schemasuccessresponse"></a>
<a id="schema_SuccessResponse"></a>
<a id="tocSsuccessresponse"></a>
<a id="tocssuccessresponse"></a>

```json
{
  "ok": "ok"
}
```

A response indicating the operation was successful.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|string|false|none|OK response.|

<h2 id="tocS_UserRecipient">UserRecipient</h2>
<!-- backwards compatibility -->
<a id="schemauserrecipient"></a>
<a id="schema_UserRecipient"></a>
<a id="tocSuserrecipient"></a>
<a id="tocsuserrecipient"></a>

```json
"user_123"
```

The ID of the user which is used as the reference for the recipient.

<h2 id="tocS_MessageContents">MessageContents</h2>
<!-- backwards compatibility -->
<a id="schemamessagecontents"></a>
<a id="schema_MessageContents"></a>
<a id="tocSmessagecontents"></a>
<a id="tocsmessagecontents"></a>

```json
{
  "__typename": "MessageContent",
  "data": {
    "__typename": "MessageSmsContent",
    "body": "URGENT: Power failure detected in perimeter fencing. Backup generators failed to engage. Technical team dispatched. Maintain lockdown protocols.",
    "to": "+15553982647"
  },
  "inserted_at": "1993-06-11T20:30:00Z",
  "message_id": "2w3YUpTTOxuDvZFji8OMsKrG176"
}
```

The content of a message.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|__typename|string|true|none|The typename of the schema.|
|data|object|true|none|Content data specific to the channel type.|
|inserted_at|string(date-time)|true|none|Timestamp when the message content was created.|
|message_id|string|true|none|The unique identifier for the message content.|

<h2 id="tocS_ListActivitiesResponse">ListActivitiesResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistactivitiesresponse"></a>
<a id="schema_ListActivitiesResponse"></a>
<a id="tocSlistactivitiesresponse"></a>
<a id="tocslistactivitiesresponse"></a>

```json
{
  "items": [
    {
      "__typename": "Activity",
      "actor": null,
      "data": {
        "foo": "bar"
      },
      "id": "2FVHPWxRqNuXQ9krvNP5A6Z4qXe",
      "inserted_at": "2024-01-01T00:00:00Z",
      "recipient": {
        "__typename": "User",
        "avatar": null,
        "created_at": null,
        "email": "jane@ingen.net",
        "id": "jane",
        "name": "Jane Doe",
        "phone_number": null,
        "timezone": null,
        "updated_at": "2024-05-22T12:00:00Z"
      },
      "updated_at": "2024-01-01T00:00:00Z"
    }
  ],
  "page_info": {
    "__typename": "PageInfo",
    "after": null,
    "before": null,
    "page_size": 25
  }
}
```

Returns a paginated list of `activities` associated with a given message. For messages produced after a [batch step](/designing-workflows/batch-function), this will contain one or more activities. Non-batched messages will always return a single activity.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|items|[[Activity](#schemaactivity)]|true|none|A list of activities.|
|page_info|[PageInfo](#schemapageinfo)|true|none|Pagination information for a list of resources.|

<h2 id="tocS_UpdateSchedulesRequest">UpdateSchedulesRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdateschedulesrequest"></a>
<a id="schema_UpdateSchedulesRequest"></a>
<a id="tocSupdateschedulesrequest"></a>
<a id="tocsupdateschedulesrequest"></a>

```json
{
  "actor": null,
  "data": {
    "key": "value"
  },
  "ending_at": null,
  "repeats": [
    {
      "__typename": "ScheduleRepeat",
      "day_of_month": null,
      "days": [
        "mon",
        "tue",
        "wed",
        "thu",
        "fri",
        "sat",
        "sun"
      ],
      "frequency": "daily",
      "hours": null,
      "interval": 1,
      "minutes": null
    }
  ],
  "schedule_ids": [
    "123e4567-e89b-12d3-a456-426614174000"
  ],
  "scheduled_at": null,
  "tenant": "acme_corp"
}
```

A request to update a schedule.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|actor|[RecipientReference](#schemarecipientreference) \| object \| null|false|none|A map of properties describing a user or an object to identify in Knock and mark as who or what performed the action.|
|data|object \| null|false|none|An optional map of data to pass into the workflow execution. There is a 10MB limit on the size of the full `data` payload. Any individual string value greater than 1024 bytes in length will be [truncated](/developer-tools/api-logs#log-truncation) in your logs.|
|ending_at|string(date-time) \| null|false|none|The ending date and time for the schedule.|
|repeats|[[ScheduleRepeatRule](#schemaschedulerepeatrule)]|false|none|The repeat rule for the schedule.|
|schedule_ids|[string(uuid)]|true|none|A list of schedule IDs.|
|scheduled_at|string(date-time) \| null|false|none|The starting date and time for the schedule.|
|tenant|[InlineTenantRequest](#schemainlinetenantrequest) \| object \| null|false|none|The tenant to trigger the workflow for. Triggering with a tenant will use any tenant-level overrides associated with the tenant object, and all messages produced from workflow runs will be tagged with the tenant.|

<h2 id="tocS_MessageInAppFeedButtonSetBlock">MessageInAppFeedButtonSetBlock</h2>
<!-- backwards compatibility -->
<a id="schemamessageinappfeedbuttonsetblock"></a>
<a id="schema_MessageInAppFeedButtonSetBlock"></a>
<a id="tocSmessageinappfeedbuttonsetblock"></a>
<a id="tocsmessageinappfeedbuttonsetblock"></a>

```json
{
  "buttons": [
    {
      "action": "action_1",
      "label": "Action 1",
      "name": "primary"
    }
  ],
  "name": "actions",
  "type": "button_set"
}
```

A button set block in a message in an app feed.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|buttons|[object]|true|none|A list of buttons in an in app feed message.|
|name|string|true|none|The name of the button set in a message in an app feed.|
|type|string|true|none|The type of block in a message in an app feed.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|button_set|

<h2 id="tocS_MessageChatContent">MessageChatContent</h2>
<!-- backwards compatibility -->
<a id="schemamessagechatcontent"></a>
<a id="schema_MessageChatContent"></a>
<a id="tocSmessagechatcontent"></a>
<a id="tocsmessagechatcontent"></a>

```json
{
  "__typename": "MessageChatContent",
  "connection": {
    "access_token": null,
    "channel_id": "123e4567-e89b-12d3-a456-426614174000",
    "user_id": "dr_malcolm"
  },
  "metadata": {
    "incident_id": "shutdown-june-1993",
    "initiated_by": "ray_arnold",
    "priority": "critical"
  },
  "template": {
    "blocks": [
      {
        "content": "*SYSTEM ALERT*: Multiple security systems offline",
        "name": "header",
        "type": "markdown"
      },
      {
        "content": "The following systems are currently non-operational:\n- Main power grid\n- Perimeter fencing (sectors 3-12)\n- Automated tour vehicles\n- Phone systems",
        "name": "details",
        "type": "text"
      },
      {
        "content": "Initiating full system shutdown and reboot sequence. Hold onto your butts.",
        "name": "action",
        "type": "text"
      }
    ],
    "json_content": null,
    "summary": "System Failure Alert"
  }
}
```

The content of a chat message.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|__typename|string|true|none|The typename of the schema.|
|connection|object|true|none|The channel data connection from the recipient to the underlying provider.|
|metadata|object \| null|false|none|Additional metadata associated with the chat message.|
|template|object|true|none|The template structure for the chat message.|

<h2 id="tocS_ListMessageEventsResponse">ListMessageEventsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistmessageeventsresponse"></a>
<a id="schema_ListMessageEventsResponse"></a>
<a id="tocSlistmessageeventsresponse"></a>
<a id="tocslistmessageeventsresponse"></a>

```json
{
  "items": [
    {
      "__typename": "MessageEvent",
      "data": null,
      "id": "2FVHPWxRqNuXQ9krvNP5A6Z4qXe",
      "inserted_at": "2021-01-01T00:00:00Z",
      "recipient": "user_123",
      "type": "message.sent"
    }
  ],
  "page_info": {
    "__typename": "PageInfo",
    "after": null,
    "before": null,
    "page_size": 25
  }
}
```

Returns a paginated list of [delivery and engagement](/send-notifications/message-statuses) events for the specified message.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|items|[[MessageEvent](#schemamessageevent)]|true|none|A list of message events.|
|page_info|[PageInfo](#schemapageinfo)|true|none|Pagination information for a list of resources.|

<h2 id="tocS_BulkDeleteSubscriptionsRequest">BulkDeleteSubscriptionsRequest</h2>
<!-- backwards compatibility -->
<a id="schemabulkdeletesubscriptionsrequest"></a>
<a id="schema_BulkDeleteSubscriptionsRequest"></a>
<a id="tocSbulkdeletesubscriptionsrequest"></a>
<a id="tocsbulkdeletesubscriptionsrequest"></a>

```json
{
  "subscriptions": [
    {
      "id": "subscribed-to-object-1",
      "recipients": [
        {
          "collection": "projects",
          "id": "subscriber-project-1"
        },
        "subscriber-user-1"
      ]
    },
    {
      "id": "subscribed-to-object-2",
      "recipients": [
        "subscriber-user-2"
      ]
    }
  ]
}
```

A request to delete subscriptions for many groups of 1 subscribed-to object, N subscriber recipients.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|subscriptions|[object]|true|none|A nested list of subscriptions.|

<h2 id="tocS_AddAudienceMembersRequest">AddAudienceMembersRequest</h2>
<!-- backwards compatibility -->
<a id="schemaaddaudiencemembersrequest"></a>
<a id="schema_AddAudienceMembersRequest"></a>
<a id="tocSaddaudiencemembersrequest"></a>
<a id="tocsaddaudiencemembersrequest"></a>

```json
{
  "members": [
    {
      "tenant": "ingen_isla_nublar",
      "user": {
        "email": "ellie@ingen.net",
        "id": "dr_sattler",
        "name": "Dr. Ellie Sattler"
      }
    }
  ]
}
```

A request to add a list of audience members.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|members|[[AudienceMemberRequest](#schemaaudiencememberrequest)]|true|none|A list of audience members to add. You can add up to 1,000 members per request.|

<h2 id="tocS_MessagePushContent">MessagePushContent</h2>
<!-- backwards compatibility -->
<a id="schemamessagepushcontent"></a>
<a id="schema_MessagePushContent"></a>
<a id="tocSmessagepushcontent"></a>
<a id="tocsmessagepushcontent"></a>

```json
{
  "__typename": "MessagePushContent",
  "body": "Multiple assets out of containment in Sector 5. Take shelter immediately!",
  "data": {
    "asset_type": "carnivore",
    "severity": "high"
  },
  "title": "URGENT: Asset Containment Alert",
  "token": "ingen-security-1234567890"
}
```

Push channel data.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|__typename|string|true|none|The typename of the schema.|
|body|string|true|none|The content body of the push notification.|
|data|object \| null|false|none|Additional data payload for the push notification.|
|title|string|true|none|The title of the push notification.|
|token|string|true|none|The device token to send the push notification to.|

<h2 id="tocS_TriggerWorkflowResponse">TriggerWorkflowResponse</h2>
<!-- backwards compatibility -->
<a id="schematriggerworkflowresponse"></a>
<a id="schema_TriggerWorkflowResponse"></a>
<a id="tocStriggerworkflowresponse"></a>
<a id="tocstriggerworkflowresponse"></a>

```json
{
  "workflow_run_id": "123e4567-e89b-12d3-a456-426614174000"
}
```

The response from triggering a workflow.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|workflow_run_id|string(uuid)|true|none|This value allows you to track individual messages associated with this trigger request.|

<h2 id="tocS_UpsertSubscriptionsRequest">UpsertSubscriptionsRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupsertsubscriptionsrequest"></a>
<a id="schema_UpsertSubscriptionsRequest"></a>
<a id="tocSupsertsubscriptionsrequest"></a>
<a id="tocsupsertsubscriptionsrequest"></a>

```json
{
  "properties": {
    "key": "value"
  },
  "recipients": [
    "user_1",
    "user_2"
  ]
}
```

A request to upsert subscriptions for a set of recipients.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|properties|object \| null|false|none|The custom properties associated with the subscription relationship.|
|recipients|[[RecipientRequest](#schemarecipientrequest)]|true|none|The recipients of the subscription. You can subscribe up to 100 recipients to an object at a time.|

<h2 id="tocS_GuideResetRequest">GuideResetRequest</h2>
<!-- backwards compatibility -->
<a id="schemaguideresetrequest"></a>
<a id="schema_GuideResetRequest"></a>
<a id="tocSguideresetrequest"></a>
<a id="tocsguideresetrequest"></a>

```json
{
  "guide_key": "tour_notification",
  "tenant": "ingen_isla_nublar"
}
```

A request to reset a guide's engagement state.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|guide_key|string|true|none|The key of the guide.|
|tenant|string|false|none|The tenant ID of the guide.|

<h2 id="tocS_BatchMessagesStatusRequest">BatchMessagesStatusRequest</h2>
<!-- backwards compatibility -->
<a id="schemabatchmessagesstatusrequest"></a>
<a id="schema_BatchMessagesStatusRequest"></a>
<a id="tocSbatchmessagesstatusrequest"></a>
<a id="tocsbatchmessagesstatusrequest"></a>

```json
{
  "message_ids": [
    "2w3YUpTTOxuDvZFji8OMsKrG176",
    "2w3YVRbPXMIh8Zq6oBFcVDA5xes"
  ]
}
```

Request to update the status of multiple messages in batch.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message_ids|[string]|true|none|The message IDs to update the status of.|

<h2 id="tocS_ListTenantsResponse">ListTenantsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalisttenantsresponse"></a>
<a id="schema_ListTenantsResponse"></a>
<a id="tocSlisttenantsresponse"></a>
<a id="tocslisttenantsresponse"></a>

```json
{
  "entries": [
    {
      "__typename": "Tenant",
      "id": "tenant_jp123",
      "name": "Jurassic Park",
      "settings": {
        "branding": {
          "dark_icon_url": "https://example.com/trex_silhouette_icon_dark.png",
          "dark_logo_url": "https://example.com/amber_fossil_logo_dark.png",
          "dark_primary_color": "#FFFFFF",
          "dark_primary_color_contrast": "#000000",
          "icon_url": "https://example.com/trex_silhouette_icon.png",
          "logo_url": "https://example.com/amber_fossil_logo.png",
          "primary_color": "#DF1A22",
          "primary_color_contrast": "#FFDE00"
        },
        "preference_set": {
          "categories": {
            "safety": {
              "channel_types": {
                "email": true,
                "push": true
              }
            }
          },
          "channel_types": {
            "email": true,
            "in_app_feed": true,
            "push": true
          },
          "id": "default",
          "workflows": {
            "park_alert": {
              "channel_types": {
                "email": true,
                "push": true
              }
            }
          }
        }
      }
    }
  ],
  "page_info": {
    "__typename": "PageInfo",
    "after": null,
    "before": null,
    "page_size": 25
  }
}
```

A response containing a list of tenants.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|entries|[[Tenant](#schematenant)]|true|none|A list of tenants.|
|page_info|[PageInfo](#schemapageinfo)|true|none|Pagination information for a list of resources.|

<h2 id="tocS_DiscordChannelData">DiscordChannelData</h2>
<!-- backwards compatibility -->
<a id="schemadiscordchanneldata"></a>
<a id="schema_DiscordChannelData"></a>
<a id="tocSdiscordchanneldata"></a>
<a id="tocsdiscordchanneldata"></a>

```json
{
  "connections": [
    {
      "channel_id": "123456789012345678",
      "knock_tenant_id": "starfleet"
    }
  ]
}
```

Discord channel data.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|connections|[object]|true|none|List of Discord channel connections.|

<h2 id="tocS_Recipient">Recipient</h2>
<!-- backwards compatibility -->
<a id="schemarecipient"></a>
<a id="schema_Recipient"></a>
<a id="tocSrecipient"></a>
<a id="tocsrecipient"></a>

```json
{
  "__typename": "User",
  "avatar": null,
  "created_at": null,
  "email": "jane@ingen.net",
  "id": "jane",
  "name": "Jane Doe",
  "phone_number": null,
  "timezone": null,
  "updated_at": "2024-05-22T12:00:00Z"
}
```

A recipient of a notification, which is either a user or an object.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[User](#schemauser)|false|none|A [User](/concepts/users) represents an individual in your system who can receive notifications through Knock. Users are the most common recipients of notifications and are always referenced by your internal identifier.|
|*oneOf*|[Object](#schemaobject)|false|none|A custom [Object](/concepts/objects) entity which belongs to a collection.|

<h2 id="tocS_Cancel Request">Cancel Request</h2>
<!-- backwards compatibility -->
<a id="schemacancel request"></a>
<a id="schema_Cancel Request"></a>
<a id="tocScancel request"></a>
<a id="tocscancel request"></a>

```json
{
  "cancellation_key": "comment_123",
  "name": "new-comment",
  "recipients": [
    "user_456"
  ]
}
```

When invoked using a specific workflow key and cancellation key, will cancel any queued workflow runs associated with that key/cancellation key pair. Can optionally provide one or more recipients to scope the request to.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cancellation_key|string|true|none|A key that is used to reference a specific workflow trigger request when issuing a [workflow cancellation](/send-notifications/canceling-workflows) request. Must be provided while triggering a workflow in order to enable subsequent cancellation. Should be unique across trigger requests to avoid unintentional cancellations.|
|name|string|true|none|The key of the workflow to cancel.|
|recipients|[[RecipientReference](#schemarecipientreference)]|false|none|A list of recipients to cancel the notification for. If omitted, cancels for all recipients associated with the cancellation key.|

<h2 id="tocS_Message">Message</h2>
<!-- backwards compatibility -->
<a id="schemamessage"></a>
<a id="schema_Message"></a>
<a id="tocSmessage"></a>
<a id="tocsmessage"></a>

```json
{
  "__typename": "Message",
  "actors": [
    "mr_arnold",
    "mr_muldoon"
  ],
  "archived_at": null,
  "channel_id": "123e4567-e89b-12d3-a456-426614174000",
  "clicked_at": null,
  "data": {
    "affected_areas": [
      "visitor_center",
      "raptor_pen",
      "trex_paddock"
    ],
    "attraction_id": "paddock_rex_01",
    "evacuation_protocol": "active",
    "message": "Life finds a way",
    "severity": "critical",
    "system_status": "fences_failing"
  },
  "engagement_statuses": [
    "read",
    "seen"
  ],
  "id": "2w3YUpTTOxuDvZFji8OMsKrG176",
  "inserted_at": "1993-06-11T21:15:00Z",
  "interacted_at": null,
  "link_clicked_at": null,
  "metadata": {
    "external_id": "123e4567-e89b-12d3-a456-426614174000"
  },
  "read_at": "1993-06-11T21:30:00Z",
  "recipient": "dr_grant",
  "recipient_snapshot": {
    "email": "user@example.com",
    "name": "John Doe"
  },
  "scheduled_at": null,
  "seen_at": "1993-06-11T21:29:45Z",
  "source": {
    "__typename": "NotificationSource",
    "branch_path": [
      {
        "branch_id": "123e4567-e89b-12d3-a456-426614174000",
        "step_ref": "experiment",
        "step_type": "random_cohort"
      }
    ],
    "categories": [
      "security",
      "emergency"
    ],
    "key": "security-breach-alert",
    "step_ref": "alert_step_1",
    "version_id": "123e4567-e89b-12d3-a456-426614174000",
    "workflow_recipient_run_id": "def01234-a56b-78c9-d012-345678901bcd",
    "workflow_run_id": "789e0123-f45a-67b8-c901-234567890abc"
  },
  "status": "sent",
  "tenant": "ingen_isla_nublar",
  "updated_at": "1993-06-11T21:30:05Z",
  "workflow": "security-breach-alert"
}
```

Represents a single message that was generated by a workflow for a given channel.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|__typename|string|true|none|The typename of the schema.|
|actors|[[RecipientReference](#schemarecipientreference)]|false|none|One or more actors that are associated with this message. Note: this is a list that can contain up to 10 actors if the message is produced from a [batch](/designing-workflows/batch-function).|
|archived_at|string(date-time) \| null|false|none|Timestamp when the message was archived.|
|channel|object|false|none|A configured channel, which is a way to route messages to a provider.|
|channel_id|string(uuid)|true|none|**Deprecated.** Deprecated, use channel.id instead.|
|clicked_at|string(date-time) \| null|false|none|Timestamp when the message was clicked.|
|data|object \| null|false|none|Data associated with the message’s workflow run. Includes the workflow trigger request’s `data` payload merged with any additional data returned by a [fetch function](/designing-workflows/fetch-function). For messages produced after a [batch step](/designing-workflows/batch-function), includes the payload `data` from the most-recent trigger request (the final `activity` in the batch).|
|engagement_statuses|[string]|true|none|A list of engagement statuses.|
|id|string|true|none|The unique identifier for the message.|
|inserted_at|string(date-time)|true|none|Timestamp when the resource was created.|
|interacted_at|string(date-time) \| null|false|none|Timestamp when the message was interacted with.|
|link_clicked_at|string(date-time) \| null|false|none|Timestamp when a link in the message was clicked.|
|metadata|object \| null|false|none|The metadata associated with the message.|
|read_at|string(date-time) \| null|false|none|Timestamp when the message was read.|
|recipient|[RecipientReference](#schemarecipientreference)|true|none|A reference to a recipient, either a user identifier (string) or an object reference (ID, collection).|
|recipient_snapshot|object \| null|false|none|The destination the message was delivered to, captured at send time. Email channels carry `email`/`name`; chat channels carry the destination `channel_id` or `user_id`, or `via_incoming_webhook`. Null when no snapshot was captured.|
|scheduled_at|string(date-time) \| null|false|none|Timestamp when the message was scheduled to be sent.|
|seen_at|string(date-time) \| null|false|none|Timestamp when the message was seen.|
|source|object|true|none|The workflow or guide that triggered the message.|
|status|string|true|none|The message delivery status.|
|tenant|string \| null|false|none|The ID of the `tenant` associated with the message. Only present when a `tenant` is provided on a workflow trigger request.|
|updated_at|string(date-time)|true|none|The timestamp when the resource was last updated.|
|workflow|string \| null|false|none|**Deprecated.** The key of the workflow that generated the message.|

#### Enumerated Values

|Property|Value|
|---|---|
|engagement_statuses|seen|
|engagement_statuses|read|
|engagement_statuses|interacted|
|engagement_statuses|link_clicked|
|engagement_statuses|archived|
|status|queued|
|status|sent|
|status|delivered|
|status|delivery_attempted|
|status|undelivered|
|status|not_sent|
|status|bounced|

<h2 id="tocS_PreferenceSetChannelSetting">PreferenceSetChannelSetting</h2>
<!-- backwards compatibility -->
<a id="schemapreferencesetchannelsetting"></a>
<a id="schema_PreferenceSetChannelSetting"></a>
<a id="tocSpreferencesetchannelsetting"></a>
<a id="tocspreferencesetchannelsetting"></a>

```json
{
  "conditions": [
    {
      "argument": "US",
      "operator": "equal_to",
      "variable": "recipient.country_code"
    }
  ]
}
```

A set of settings for a specific channel. Currently, this can only be a list of conditions to apply.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|conditions|[[Condition](#schemacondition)]|true|none|A list of conditions to apply to a specific channel.|

<h2 id="tocS_WorkflowRecipientRunDetail">WorkflowRecipientRunDetail</h2>
<!-- backwards compatibility -->
<a id="schemaworkflowrecipientrundetail"></a>
<a id="schema_WorkflowRecipientRunDetail"></a>
<a id="tocSworkflowrecipientrundetail"></a>
<a id="tocsworkflowrecipientrundetail"></a>

```json
{
  "__typename": "WorkflowRecipientRun",
  "actor": "user_456",
  "error_count": 0,
  "events": [
    {
      "__typename": "WorkflowRecipientRunEvent",
      "attempt": 1,
      "data": {
        "channel_type": "email",
        "message_id": "2FVHPWxRqNuXQ9krvNP5A6Z4qXe"
      },
      "event": "message_enqueued",
      "id": "2FVHPWxRqNuXQ9krvNP5A6Z4qXe",
      "inserted_at": "2025-01-01T00:00:00Z",
      "status": "ok",
      "step_ref": "email_step_1",
      "step_type": "channel"
    }
  ],
  "id": "550e8400-e29b-41d4-a716-446655440000",
  "inserted_at": "2025-01-01T00:00:00Z",
  "recipient": "user_123",
  "status": "completed",
  "tenant": "tenant_abc",
  "trigger_source": {
    "cancellation_key": "comment-123-user-456",
    "type": "api"
  },
  "updated_at": "2025-01-01T00:05:00Z",
  "workflow": "comment-created",
  "workflow_run_id": "660e8400-e29b-41d4-a716-446655440000"
}
```

A single workflow recipient run with its events.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|__typename|string|true|none|The typename of the schema.|
|actor|[RecipientReference](#schemarecipientreference) \| object \| null|false|none|The actor who triggered the workflow recipient run.|
|error_count|integer|false|none|The number of errors encountered during the workflow recipient run.|
|id|string(uuid)|true|none|The unique identifier for the workflow recipient run (per-recipient).|
|inserted_at|string(date-time)|true|none|Timestamp when the resource was created.|
|recipient|[RecipientReference](#schemarecipientreference)|true|none|A reference to a recipient, either a user identifier (string) or an object reference (ID, collection).|
|status|string|true|none|The current status of the workflow recipient run. One of `queued`, `processing`, `paused`, `completed`, or `cancelled`.|
|tenant|string \| null|false|none|The tenant associated with the workflow recipient run.|
|trigger_source|[WorkflowRecipientRunTriggerSource](#schemaworkflowrecipientruntriggersource)|true|none|Describes how the workflow was triggered.|
|updated_at|string(date-time)|true|none|The timestamp when the resource was last updated.|
|workflow|string|true|none|The key of the workflow that was executed.|
|workflow_run_id|string(uuid)|true|none|The identifier for the top-level workflow run shared across all recipients in a single trigger.|
|events|[[WorkflowRecipientRunEvent](#schemaworkflowrecipientrunevent)]|true|none|A list of events that occurred during the workflow recipient run.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|queued|
|status|processing|
|status|paused|
|status|completed|
|status|cancelled|

<h2 id="tocS_GuideSeenRequest">GuideSeenRequest</h2>
<!-- backwards compatibility -->
<a id="schemaguideseenrequest"></a>
<a id="schema_GuideSeenRequest"></a>
<a id="tocSguideseenrequest"></a>
<a id="tocsguideseenrequest"></a>

```json
{
  "channel_id": "123e4567-e89b-12d3-a456-426614174000",
  "content": {
    "body": "Limited spots available for today's behind-the-scenes DNA extraction demonstration.",
    "title": "DNA Lab Tour Available"
  },
  "data": {
    "next_time": "14:30",
    "spots_left": 8,
    "tour_id": "dna_lab_tour"
  },
  "guide_id": "7e9dc78c-b3b1-4127-a54e-71f1899b831a",
  "guide_key": "tour_notification",
  "guide_step_ref": "lab_tours",
  "tenant": "ingen_isla_nublar"
}
```

A request to mark a guide as seen.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|channel_id|string(uuid)|true|none|The unique identifier for the channel.|
|content|object|true|none|The content of the guide.|
|data|object|false|none|The data of the guide.|
|guide_id|string(uuid)|true|none|The unique identifier for the guide.|
|guide_key|string|true|none|The key of the guide.|
|guide_step_ref|string|true|none|The step reference of the guide.|
|tenant|string|false|none|The tenant ID of the guide.|

<h2 id="tocS_ListAudienceMembersResponse">ListAudienceMembersResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistaudiencemembersresponse"></a>
<a id="schema_ListAudienceMembersResponse"></a>
<a id="tocSlistaudiencemembersresponse"></a>
<a id="tocslistaudiencemembersresponse"></a>

```json
{
  "entries": [
    {
      "__typename": "AudienceMember",
      "added_at": "1993-06-10T14:30:00Z",
      "tenant": "ingen_isla_nublar",
      "user": {
        "__typename": "User",
        "created_at": null,
        "email": "alan.grant@dig.site.mt",
        "id": "dr_grant",
        "name": "Dr. Alan Grant",
        "updated_at": "1993-06-09T08:15:00Z"
      },
      "user_id": "dr_grant"
    }
  ],
  "page_info": {
    "__typename": "PageInfo",
    "after": null,
    "before": null,
    "page_size": 25
  }
}
```

A paginated list of audience members.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|entries|[[AudienceMember](#schemaaudiencemember)]|true|none|A list of audience members.|
|page_info|[PageInfo](#schemapageinfo)|true|none|Pagination information for a list of resources.|

<h2 id="tocS_BulkSetObjectRequest">BulkSetObjectRequest</h2>
<!-- backwards compatibility -->
<a id="schemabulksetobjectrequest"></a>
<a id="schema_BulkSetObjectRequest"></a>
<a id="tocSbulksetobjectrequest"></a>
<a id="tocsbulksetobjectrequest"></a>

```json
{
  "id": "project_1",
  "name": "My project"
}
```

A custom [Object](/concepts/objects) entity which belongs to a collection.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|channel_data|[InlineChannelDataRequest](#schemainlinechanneldatarequest) \| object \| null|false|none|An optional set of [channel data](/managing-recipients/setting-channel-data) for the object. This is a list of `ChannelData` objects.|
|created_at|string(date-time) \| null|false|none|Timestamp when the resource was created.|
|id|string|true|none|Unique identifier for the object.|
|name|string \| null|false|none|An optional name for the object.|
|preferences|[InlinePreferenceSetRequest](#schemainlinepreferencesetrequest) \| object \| null|false|none|An optional set of [preferences](/concepts/preferences) for the object.|

<h2 id="tocS_PreferenceCenterConfigRow">PreferenceCenterConfigRow</h2>
<!-- backwards compatibility -->
<a id="schemapreferencecenterconfigrow"></a>
<a id="schema_PreferenceCenterConfigRow"></a>
<a id="tocSpreferencecenterconfigrow"></a>
<a id="tocspreferencecenterconfigrow"></a>

```json
{
  "channel_types": [],
  "description": "Opt out of receiving comment and reply notifications",
  "identifier": "comments",
  "name": "Comments and replies",
  "type": "category"
}
```

A preference row in the preference center configuration.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|channel_types|[string]|false|none|The list of channel types this preference is scoped to. An empty list (or `null`) means the preference applies to all channel types. Present for `workflow`, `category`, and `channel_types` types.|
|description|string|false|none|A description shown below the preference row name.|
|identifier|string \| null|false|none|The category name, workflow key, or channel ID this row controls (e.g. `marketing`, `new-project-mentions`, or a channel UUID). Present for `workflow`, `channel`, and `category` types.|
|name|string|true|none|The display name of the preference row.|
|type|string|true|none|The type of this preference row. `workflow` targets a workflow, `channel` targets a specific channel, `category` targets a workflow category, `channel_types` controls per-channel-type opt-in/out, and `commercial_subscribed` is the commercial notification toggle.|

#### Enumerated Values

|Property|Value|
|---|---|
|channel_types|email|
|channel_types|in_app|
|channel_types|in_app_feed|
|channel_types|in_app_guide|
|channel_types|sms|
|channel_types|push|
|channel_types|chat|
|channel_types|http|
|channel_types|log|
|channel_types|deferred_log|
|type|workflow|
|type|channel|
|type|category|
|type|channel_types|
|type|commercial_subscribed|

<h2 id="tocS_MessageDeliveryLog">MessageDeliveryLog</h2>
<!-- backwards compatibility -->
<a id="schemamessagedeliverylog"></a>
<a id="schema_MessageDeliveryLog"></a>
<a id="tocSmessagedeliverylog"></a>
<a id="tocsmessagedeliverylog"></a>

```json
{
  "__typename": "MessageDeliveryLog",
  "environment_id": "123e4567-e89b-12d3-a456-426614174000",
  "id": "2FVHPWxRqNuXQ9krvNP5A6Z4qXe",
  "inserted_at": "2021-01-01T00:00:00Z",
  "request": {
    "body": {
      "html_content": "<html></html>"
    },
    "headers": {
      "Content-Type": "application/json"
    },
    "host": "localhost",
    "method": "GET",
    "path": "/",
    "query": "?foo=bar"
  },
  "response": {
    "body": {
      "success": true
    },
    "headers": {
      "Content-Type": "application/json"
    },
    "status": 200
  },
  "service_name": "Postmark"
}
```

A message delivery log contains a `request` from Knock to a downstream provider and the `response` that was returned.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|__typename|string|true|none|The typename of the schema.|
|environment_id|string(uuid)|true|none|The ID of the environment in which the message delivery occurred.|
|id|string|true|none|The unique identifier for the message delivery log.|
|inserted_at|string|true|none|Timestamp when the message delivery log was created.|
|request|[MessageDeliveryLogRequest](#schemamessagedeliverylogrequest)|true|none|A message delivery log request.|
|response|[MessageDeliveryLogResponse](#schemamessagedeliverylogresponse)|true|none|A message delivery log response.|
|service_name|string|true|none|The name of the service that processed the delivery.|

<h2 id="tocS_BulkSetUserPreferencesRequest">BulkSetUserPreferencesRequest</h2>
<!-- backwards compatibility -->
<a id="schemabulksetuserpreferencesrequest"></a>
<a id="schema_BulkSetUserPreferencesRequest"></a>
<a id="tocSbulksetuserpreferencesrequest"></a>
<a id="tocsbulksetuserpreferencesrequest"></a>

```json
{
  "preferences": {
    "categories": {
      "marketing": false,
      "transactional": {
        "channel_types": {
          "email": false
        }
      }
    },
    "channel_types": {
      "email": true
    },
    "channels": {
      "2f641633-95d3-4555-9222-9f1eb7888a80": {
        "conditions": [
          {
            "argument": "US",
            "operator": "equal_to",
            "variable": "recipient.country_code"
          }
        ]
      },
      "aef6e715-df82-4ab6-b61e-b743e249f7b6": true
    },
    "commercial_subscribed": true,
    "id": "default",
    "workflows": {
      "dinosaurs-loose": {
        "channel_types": {
          "email": false
        }
      }
    }
  },
  "user_ids": [
    "user_1",
    "user_2"
  ]
}
```

A request to set preferences for a set of users in bulk.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|preferences|[BulkPreferenceSetRequest](#schemabulkpreferencesetrequest)|true|none|A preference set to apply in a bulk operation. Always replaces existing preferences for the specified set.|
|user_ids|[string]|true|none|A list of user IDs.|

<h2 id="tocS_BulkPreferenceSetRequest">BulkPreferenceSetRequest</h2>
<!-- backwards compatibility -->
<a id="schemabulkpreferencesetrequest"></a>
<a id="schema_BulkPreferenceSetRequest"></a>
<a id="tocSbulkpreferencesetrequest"></a>
<a id="tocsbulkpreferencesetrequest"></a>

```json
{
  "categories": {
    "marketing": false,
    "transactional": {
      "channel_types": {
        "email": false
      }
    }
  },
  "channel_types": {
    "email": true
  },
  "channels": {
    "2f641633-95d3-4555-9222-9f1eb7888a80": {
      "conditions": [
        {
          "argument": "US",
          "operator": "equal_to",
          "variable": "recipient.country_code"
        }
      ]
    },
    "aef6e715-df82-4ab6-b61e-b743e249f7b6": true
  },
  "commercial_subscribed": true,
  "id": "default",
  "workflows": {
    "dinosaurs-loose": {
      "channel_types": {
        "email": false
      }
    }
  }
}
```

A preference set to apply in a bulk operation. Always replaces existing preferences for the specified set.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|categories|object \| object \| null|false|none|An object where the key is the category and the values are the preference settings for that category.|
|channel_types|[PreferenceSetChannelTypes](#schemapreferencesetchanneltypes) \| object \| null|false|none|An object where the key is the channel type and the values are the preference settings for that channel type.|
|channels|[PreferenceSetChannels](#schemapreferencesetchannels) \| object \| null|false|none|An object where the key is the channel ID and the values are the preference settings for that channel ID.|
|commercial_subscribed|boolean \| [PreferenceSetCommercialSubscribedSetting](#schemapreferencesetcommercialsubscribedsetting) \| object \| null|false|none|Whether the recipient is subscribed to commercial communications. When false, the recipient will not receive commercial workflow notifications. Can also be set to a settings object with conditions that are evaluated at notification send time.|
|id|string|false|none|Identifier for the preference set to update. Can be `default` or a tenant ID.|
|workflows|object \| object \| null|false|none|An object where the key is the workflow key and the values are the preference settings for that workflow.|

<h2 id="tocS_BulkSetTenantsRequest">BulkSetTenantsRequest</h2>
<!-- backwards compatibility -->
<a id="schemabulksettenantsrequest"></a>
<a id="schema_BulkSetTenantsRequest"></a>
<a id="tocSbulksettenantsrequest"></a>
<a id="tocsbulksettenantsrequest"></a>

```json
{
  "tenants": [
    {
      "id": "tenant_1",
      "name": "Acme Corp, Inc."
    }
  ]
}
```

A request to set tenants in bulk.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|tenants|[[InlineTenantRequest](#schemainlinetenantrequest)]|true|none|The tenants to be upserted.|

<h2 id="tocS_PreferenceSetRequestWorkflows">PreferenceSetRequestWorkflows</h2>
<!-- backwards compatibility -->
<a id="schemapreferencesetrequestworkflows"></a>
<a id="schema_PreferenceSetRequestWorkflows"></a>
<a id="tocSpreferencesetrequestworkflows"></a>
<a id="tocspreferencesetrequestworkflows"></a>

```json
{
  "dinosaurs-loose": {
    "channel_types": {
      "email": false,
      "sms": true
    }
  },
  "welcome-sequence": true
}
```

An object where the key is the workflow key and the values are the preference settings for that workflow.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[PreferenceSetWorkflowCategorySetting](#schemapreferencesetworkflowcategorysetting)|false|none|Workflow or category preferences within a preference set|

<h2 id="tocS_OneSignalChannelDataPlayerIdsOnly">OneSignalChannelDataPlayerIdsOnly</h2>
<!-- backwards compatibility -->
<a id="schemaonesignalchanneldataplayeridsonly"></a>
<a id="schema_OneSignalChannelDataPlayerIdsOnly"></a>
<a id="tocSonesignalchanneldataplayeridsonly"></a>
<a id="tocsonesignalchanneldataplayeridsonly"></a>

```json
{
  "player_ids": [
    "123e4567-e89b-12d3-a456-426614174000"
  ]
}
```

OneSignal channel data.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|player_ids|[string(uuid)]|true|none|A list of OneSignal player IDs.|

<h2 id="tocS_InlineChannelDataRequest">InlineChannelDataRequest</h2>
<!-- backwards compatibility -->
<a id="schemainlinechanneldatarequest"></a>
<a id="schema_InlineChannelDataRequest"></a>
<a id="tocSinlinechanneldatarequest"></a>
<a id="tocsinlinechanneldatarequest"></a>

```json
{
  "97c5837d-c65c-4d54-aa39-080eeb81c69d": {
    "tokens": [
      "push_token_xxx"
    ]
  }
}
```

A request to set channel data for a type of channel inline.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[PushChannelDataTokensOnly](#schemapushchanneldatatokensonly) \| [PushChannelDataDevicesOnly](#schemapushchanneldatadevicesonly) \| [AWSSNSPushChannelDataTargetARNsOnly](#schemaawssnspushchanneldatatargetarnsonly) \| [AWSSNSPushChannelDataDevicesOnly](#schemaawssnspushchanneldatadevicesonly) \| [OneSignalChannelDataPlayerIdsOnly](#schemaonesignalchanneldataplayeridsonly) \| [SlackChannelData](#schemaslackchanneldata) \| [MsTeamsChannelData](#schemamsteamschanneldata) \| [DiscordChannelData](#schemadiscordchanneldata)|false|none|Channel data for a given channel type.|

<h2 id="tocS_UserReference">UserReference</h2>
<!-- backwards compatibility -->
<a id="schemauserreference"></a>
<a id="schema_UserReference"></a>
<a id="tocSuserreference"></a>
<a id="tocsuserreference"></a>

```json
"user_123"
```

The ID of the user which is used as the reference for the recipient.

<h2 id="tocS_ChannelDataRequest">ChannelDataRequest</h2>
<!-- backwards compatibility -->
<a id="schemachanneldatarequest"></a>
<a id="schema_ChannelDataRequest"></a>
<a id="tocSchanneldatarequest"></a>
<a id="tocschanneldatarequest"></a>

```json
{
  "data": {
    "tokens": [
      "push_token_1"
    ]
  }
}
```

A request to set channel data for a type of channel.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|object|true|none|Channel data for a given channel type.|

<h2 id="tocS_GuideUnarchivedRequest">GuideUnarchivedRequest</h2>
<!-- backwards compatibility -->
<a id="schemaguideunarchivedrequest"></a>
<a id="schema_GuideUnarchivedRequest"></a>
<a id="tocSguideunarchivedrequest"></a>
<a id="tocsguideunarchivedrequest"></a>

```json
{
  "guide_key": "tour_notification",
  "tenant": "ingen_isla_nublar"
}
```

A request to mark a guide as unarchived.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|guide_key|string|true|none|The key of the guide.|
|tenant|string|false|none|The tenant ID of the guide.|

<h2 id="tocS_ListObjectsResponse">ListObjectsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistobjectsresponse"></a>
<a id="schema_ListObjectsResponse"></a>
<a id="tocSlistobjectsresponse"></a>
<a id="tocslistobjectsresponse"></a>

```json
{
  "entries": [
    {
      "__typename": "Object",
      "collection": "assets",
      "created_at": null,
      "id": "specimen_25",
      "properties": {
        "classification": "Theropod",
        "config": {
          "biz": "baz",
          "foo": "bar"
        },
        "name": "Velociraptor",
        "status": "contained"
      },
      "updated_at": "2024-05-22T12:00:00Z"
    }
  ],
  "page_info": {
    "__typename": "PageInfo",
    "after": null,
    "before": null,
    "page_size": 25
  }
}
```

A paginated list of objects in a collection.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|entries|[[Object](#schemaobject)]|true|none|A list of objects.|
|page_info|[PageInfo](#schemapageinfo)|true|none|Pagination information for a list of resources.|

<h2 id="tocS_Condition">Condition</h2>
<!-- backwards compatibility -->
<a id="schemacondition"></a>
<a id="schema_Condition"></a>
<a id="tocScondition"></a>
<a id="tocscondition"></a>

```json
{
  "argument": "frog_genome",
  "operator": "contains",
  "variable": "specimen.dna_sequence"
}
```

A condition to be evaluated.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|argument|string \| null|true|none|The argument value to compare against in the condition.|
|operator|string|true|none|The operator to use in the condition evaluation.|
|variable|string|true|none|The variable to be evaluated in the condition.|

#### Enumerated Values

|Property|Value|
|---|---|
|operator|equal_to|
|operator|not_equal_to|
|operator|greater_than|
|operator|less_than|
|operator|greater_than_or_equal_to|
|operator|less_than_or_equal_to|
|operator|contains|
|operator|not_contains|
|operator|empty|
|operator|not_empty|
|operator|exists|
|operator|not_exists|
|operator|contains_all|
|operator|not_contains_all|
|operator|is_timestamp|
|operator|is_not_timestamp|
|operator|is_timestamp_on_or_after|
|operator|is_timestamp_before|
|operator|is_timestamp_on_or_after_date|
|operator|is_timestamp_before_date|
|operator|is_timestamp_between|
|operator|is_between|
|operator|is_audience_member|
|operator|is_not_audience_member|

<h2 id="tocS_BulkOperation">BulkOperation</h2>
<!-- backwards compatibility -->
<a id="schemabulkoperation"></a>
<a id="schema_BulkOperation"></a>
<a id="tocSbulkoperation"></a>
<a id="tocsbulkoperation"></a>

```json
{
  "__typename": "BulkOperation",
  "completed_at": null,
  "error_count": 0,
  "error_items": [],
  "estimated_total_rows": 1000,
  "failed_at": null,
  "id": "123e4567-e89b-12d3-a456-426614174000",
  "inserted_at": "2024-05-22T12:00:00Z",
  "name": "Bulk operation name",
  "processed_rows": 0,
  "progress_path": "https://api.switchboard.com/v1/bulk_operations/123e4567-e89b-12d3-a456-426614174000",
  "started_at": null,
  "status": "processing",
  "success_count": 0,
  "updated_at": "2024-05-22T12:00:00Z"
}
```

A bulk operation entity.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|__typename|string|true|none|The typename of the schema.|
|completed_at|string(date-time) \| null|false|none|Timestamp when the bulk operation was completed.|
|error_count|integer|false|none|The number of failed operations.|
|error_items|[object]|false|none|A list of items that failed to be processed.|
|estimated_total_rows|integer|true|none|The estimated total number of rows to process.|
|failed_at|string(date-time) \| null|false|none|Timestamp when the bulk operation failed.|
|id|string(uuid)|true|none|Unique identifier for the bulk operation.|
|inserted_at|string(date-time)|true|none|Timestamp when the resource was created.|
|name|string|true|none|The name of the bulk operation.|
|processed_rows|integer|true|none|The number of rows processed so far.|
|progress_path|string(uri)|false|none|The URI to the bulk operation's progress.|
|started_at|string(date-time) \| null|false|none|Timestamp when the bulk operation was started.|
|status|string|true|none|The status of the bulk operation.|
|success_count|integer|true|none|The number of successful operations.|
|updated_at|string(date-time)|true|none|The timestamp when the resource was last updated.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|queued|
|status|processing|
|status|completed|
|status|failed|

<h2 id="tocS_MsTeamsChannelData">MsTeamsChannelData</h2>
<!-- backwards compatibility -->
<a id="schemamsteamschanneldata"></a>
<a id="schema_MsTeamsChannelData"></a>
<a id="tocSmsteamschanneldata"></a>
<a id="tocsmsteamschanneldata"></a>

```json
{
  "connections": [
    {
      "knock_tenant_id": "starfleet",
      "ms_teams_channel_id": "123e4567-e89b-12d3-a456-426614174000",
      "ms_teams_team_id": "123e4567-e89b-12d3-a456-426614174000",
      "ms_teams_tenant_id": null,
      "ms_teams_user_id": null
    }
  ],
  "ms_teams_tenant_id": null
}
```

Microsoft Teams channel data.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|connections|[object]|true|none|List of Microsoft Teams connections.|
|ms_teams_tenant_id|string(uuid) \| null|false|none|Microsoft Teams tenant ID.|

<h2 id="tocS_DeleteSubscriptionsRequest">DeleteSubscriptionsRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletesubscriptionsrequest"></a>
<a id="schema_DeleteSubscriptionsRequest"></a>
<a id="tocSdeletesubscriptionsrequest"></a>
<a id="tocsdeletesubscriptionsrequest"></a>

```json
{
  "recipients": [
    "user_123"
  ]
}
```

A request to delete subscriptions for a set of recipients.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|recipients|[[RecipientReference](#schemarecipientreference)]|true|none|The recipients of the subscription. You can subscribe up to 100 recipients to an object at a time.|

<h2 id="tocS_AWSSNSPushChannelDataFull">AWSSNSPushChannelDataFull</h2>
<!-- backwards compatibility -->
<a id="schemaawssnspushchanneldatafull"></a>
<a id="schema_AWSSNSPushChannelDataFull"></a>
<a id="tocSawssnspushchanneldatafull"></a>
<a id="tocsawssnspushchanneldatafull"></a>

```json
{
  "devices": [
    {
      "locale": "en-US",
      "target_arn": "arn:aws:sns:us-west-2:123456789012:endpoint/GCM/gcmpushapp/5e3e9847-3183-3f18-a7e8-671c3a57d4b3",
      "timezone": "America/Los_Angeles"
    }
  ],
  "target_arns": [
    "arn:aws:sns:us-west-2:123456789012:endpoint/GCM/gcmpushapp/5e3e9847-3183-3f18-a7e8-671c3a57d4b3"
  ]
}
```

AWS SNS push channel data.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|devices|[object]|true|none|A list of devices. Each device contains a target_arn, and optionally a locale and timezone.|
|target_arns|[string]|true|none|A list of platform endpoint ARNs. See [Setting up an Amazon SNS platform endpoint for mobile notifications](https://docs.aws.amazon.com/sns/latest/dg/mobile-platform-endpoint.html).|

<h2 id="tocS_MessageDeliveryLogRequest">MessageDeliveryLogRequest</h2>
<!-- backwards compatibility -->
<a id="schemamessagedeliverylogrequest"></a>
<a id="schema_MessageDeliveryLogRequest"></a>
<a id="tocSmessagedeliverylogrequest"></a>
<a id="tocsmessagedeliverylogrequest"></a>

```json
{
  "body": {
    "html_content": "<html></html>"
  },
  "headers": {
    "Content-Type": "application/json"
  },
  "host": "localhost",
  "method": "GET",
  "path": "/",
  "query": "?foo=bar"
}
```

A message delivery log request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|body|object|false|none|The body content that was sent with the request.|
|headers|object \| null|false|none|The headers that were sent with the request.|
|host|string|false|none|The host to which the request was sent.|
|method|string|false|none|The HTTP method used for the request.|
|path|string|false|none|The path of the URL that was requested.|
|query|string \| null|false|none|The query string of the URL that was requested.|

#### Enumerated Values

|Property|Value|
|---|---|
|method|GET|
|method|POST|
|method|PUT|
|method|DELETE|
|method|PATCH|

<h2 id="tocS_ChannelData">ChannelData</h2>
<!-- backwards compatibility -->
<a id="schemachanneldata"></a>
<a id="schema_ChannelData"></a>
<a id="tocSchanneldata"></a>
<a id="tocschanneldata"></a>

```json
{
  "__typename": "ChannelData",
  "channel_id": "123e4567-e89b-12d3-a456-426614174000",
  "data": {
    "devices": [
      {
        "locale": null,
        "timezone": null,
        "token": "device_1"
      }
    ],
    "tokens": [
      "push_token_1"
    ]
  }
}
```

Channel data for a given channel type.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|__typename|string|true|none|The typename of the schema.|
|channel_id|string(uuid)|true|none|The unique identifier for the channel.|
|data|object|true|none|Channel data for a given channel type.|
|provider|string|false|none|The type of provider.|

#### Enumerated Values

|Property|Value|
|---|---|
|provider|push_fcm|
|provider|push_apns|
|provider|push_aws_sns|
|provider|push_expo|
|provider|push_one_signal|
|provider|chat_slack|
|provider|chat_ms_teams|
|provider|chat_discord|
|provider|http_knock_webhook|

<h2 id="tocS_BulkDeleteObjectsRequest">BulkDeleteObjectsRequest</h2>
<!-- backwards compatibility -->
<a id="schemabulkdeleteobjectsrequest"></a>
<a id="schema_BulkDeleteObjectsRequest"></a>
<a id="tocSbulkdeleteobjectsrequest"></a>
<a id="tocsbulkdeleteobjectsrequest"></a>

```json
{
  "object_ids": [
    "obj_123",
    "obj_456",
    "obj_789"
  ]
}
```

Request body for bulk deleting objects.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|object_ids|[string]|true|none|List of object IDs to delete.|

<h2 id="tocS_WorkflowRecipientRun">WorkflowRecipientRun</h2>
<!-- backwards compatibility -->
<a id="schemaworkflowrecipientrun"></a>
<a id="schema_WorkflowRecipientRun"></a>
<a id="tocSworkflowrecipientrun"></a>
<a id="tocsworkflowrecipientrun"></a>

```json
{
  "__typename": "WorkflowRecipientRun",
  "actor": "user_456",
  "error_count": 0,
  "id": "550e8400-e29b-41d4-a716-446655440000",
  "inserted_at": "2025-01-01T00:00:00Z",
  "recipient": "user_123",
  "status": "completed",
  "tenant": "tenant_abc",
  "trigger_source": {
    "cancellation_key": "comment-123-user-456",
    "type": "api"
  },
  "updated_at": "2025-01-01T00:05:00Z",
  "workflow": "comment-created",
  "workflow_run_id": "660e8400-e29b-41d4-a716-446655440000"
}
```

A workflow recipient run represents an individual execution of a workflow for a specific recipient.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|__typename|string|true|none|The typename of the schema.|
|actor|[RecipientReference](#schemarecipientreference) \| object \| null|false|none|The actor who triggered the workflow recipient run.|
|error_count|integer|false|none|The number of errors encountered during the workflow recipient run.|
|id|string(uuid)|true|none|The unique identifier for the workflow recipient run (per-recipient).|
|inserted_at|string(date-time)|true|none|Timestamp when the resource was created.|
|recipient|[RecipientReference](#schemarecipientreference)|true|none|A reference to a recipient, either a user identifier (string) or an object reference (ID, collection).|
|status|string|true|none|The current status of the workflow recipient run. One of `queued`, `processing`, `paused`, `completed`, or `cancelled`.|
|tenant|string \| null|false|none|The tenant associated with the workflow recipient run.|
|trigger_source|[WorkflowRecipientRunTriggerSource](#schemaworkflowrecipientruntriggersource)|true|none|Describes how the workflow was triggered.|
|updated_at|string(date-time)|true|none|The timestamp when the resource was last updated.|
|workflow|string|true|none|The key of the workflow that was executed.|
|workflow_run_id|string(uuid)|true|none|The identifier for the top-level workflow run shared across all recipients in a single trigger.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|queued|
|status|processing|
|status|paused|
|status|completed|
|status|cancelled|

<h2 id="tocS_DiscordChannelConnection">DiscordChannelConnection</h2>
<!-- backwards compatibility -->
<a id="schemadiscordchannelconnection"></a>
<a id="schema_DiscordChannelConnection"></a>
<a id="tocSdiscordchannelconnection"></a>
<a id="tocsdiscordchannelconnection"></a>

```json
{
  "channel_id": "123456789012345678",
  "knock_tenant_id": "starfleet"
}
```

Discord channel connection.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|channel_id|string|true|none|Discord channel ID.|
|knock_tenant_id|string \| null|false|none|An optional Knock tenant ID (`knock_tenant_id`) that scopes this connection. Distinct from provider-specific tenant IDs. When a workflow is triggered with this tenant, Knock prefers this connection over untagged connections.|

<h2 id="tocS_BatchMessagesInteractedRequest">BatchMessagesInteractedRequest</h2>
<!-- backwards compatibility -->
<a id="schemabatchmessagesinteractedrequest"></a>
<a id="schema_BatchMessagesInteractedRequest"></a>
<a id="tocSbatchmessagesinteractedrequest"></a>
<a id="tocsbatchmessagesinteractedrequest"></a>

```json
{
  "message_ids": [
    "1jNaXzB2RZX3LY8wVQnfCKyPnv7"
  ],
  "metadata": {
    "key": "value"
  }
}
```

A request to batch mark messages as interacted with.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message_ids|[string]|true|none|The message IDs to batch mark as interacted with.|
|metadata|object \| null|false|none|Metadata about the interaction.|

<h2 id="tocS_AWSSNSPushChannelDataDevicesOnly">AWSSNSPushChannelDataDevicesOnly</h2>
<!-- backwards compatibility -->
<a id="schemaawssnspushchanneldatadevicesonly"></a>
<a id="schema_AWSSNSPushChannelDataDevicesOnly"></a>
<a id="tocSawssnspushchanneldatadevicesonly"></a>
<a id="tocsawssnspushchanneldatadevicesonly"></a>

```json
{
  "devices": [
    {
      "locale": "en-US",
      "target_arn": "arn:aws:sns:us-west-2:123456789012:endpoint/GCM/gcmpushapp/5e3e9847-3183-3f18-a7e8-671c3a57d4b3",
      "timezone": "America/Los_Angeles"
    }
  ]
}
```

AWS SNS push channel data.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|devices|[object]|true|none|A list of devices. Each device contains a target_arn, and optionally a locale and timezone.|

<h2 id="tocS_BulkSetObjectsRequest">BulkSetObjectsRequest</h2>
<!-- backwards compatibility -->
<a id="schemabulksetobjectsrequest"></a>
<a id="schema_BulkSetObjectsRequest"></a>
<a id="tocSbulksetobjectsrequest"></a>
<a id="tocsbulksetobjectsrequest"></a>

```json
{
  "objects": [
    {
      "id": "project_1",
      "name": "My project"
    }
  ]
}
```

A request to set objects in bulk.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|objects|[[BulkSetObjectRequest](#schemabulksetobjectrequest)]|true|none|A list of objects.|

<h2 id="tocS_MessageInAppFeedContentBlock">MessageInAppFeedContentBlock</h2>
<!-- backwards compatibility -->
<a id="schemamessageinappfeedcontentblock"></a>
<a id="schema_MessageInAppFeedContentBlock"></a>
<a id="tocSmessageinappfeedcontentblock"></a>
<a id="tocsmessageinappfeedcontentblock"></a>

```json
{
  "content": "This is a message in an app feed",
  "name": "body",
  "rendered": "<p>This is a message in an app feed</p>",
  "type": "markdown"
}
```

A block in a message in an app feed.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|content|string|true|none|The content of the block in a message in an app feed.|
|name|string|true|none|The name of the block in a message in an app feed.|
|rendered|string|true|none|The rendered HTML version of the content.|
|type|string|true|none|The type of block in a message in an app feed.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|markdown|
|type|text|
