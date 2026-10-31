<h1 id="discourse-api-documentation">Discourse API Documentation vlatest</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

This page contains the documentation on how to use Discourse through API calls.

> Note: For any endpoints not listed you can follow the
[reverse engineer the Discourse API](https://meta.discourse.org/t/-/20576)
guide to figure out how to use an API endpoint.

### Request Content-Type

The Content-Type for POST and PUT requests can be set to `application/x-www-form-urlencoded`,
`multipart/form-data`, or `application/json`.

### Endpoint Names and Response Content-Type

Most API endpoints provide the same content as their HTML counterparts. For example
the URL `/categories` serves a list of categories, the `/categories.json` API provides the
same information in JSON format.

Instead of sending API requests to `/categories.json` you may also send them to `/categories`
and add an `Accept: application/json` header to the request to get the JSON response.
Sending requests with the `Accept` header is necessary if you want to use URLs
for related endpoints returned by the API, such as pagination URLs.
These URLs are returned without the `.json` prefix so you need to add the header in
order to get the correct response format.

### Authentication

Some endpoints do not require any authentication, pretty much anything else will
require you to be authenticated.

To become authenticated you will need to create an API Key from the admin panel.

Once you have your API Key you can pass it in along with your API Username
as an HTTP header like this:

```
curl -X GET "http://127.0.0.1:3000/admin/users/list/active.json" \
-H "Api-Key: 714552c6148e1617aeab526d0606184b94a80ec048fc09894ff1a72b740c5f19" \
-H "Api-Username: system"
```

and this is how POST requests will look:

```
curl -X POST "http://127.0.0.1:3000/categories" \
-H "Content-Type: multipart/form-data;" \
-H "Api-Key: 714552c6148e1617aeab526d0606184b94a80ec048fc09894ff1a72b740c5f19" \
-H "Api-Username: system" \
-F "name=89853c20-4409-e91a-a8ea-f6cdff96aaaa" \
-F "color=49d9e9" \
-F "text_color=f0fcfd"
```

### Boolean values

If an endpoint accepts a boolean be sure to specify it as a lowercase
`true` or `false` value unless noted otherwise.

Base URLs:

* <a href="https://discourse.example.com">https://discourse.example.com</a>

License: <a href="https://docs.discourse.org/LICENSE.txt">MIT</a>

<h1 id="discourse-api-documentation-events">Events</h1>

## List calendar events

<a id="opIdlistEvents"></a>

> Code samples

```bash
curl https://discourse.example.com/discourse-post-event/events.json \
  -H 'Accept: application/json'
```

`GET /discourse-post-event/events.json`

<h3 id="list-calendar-events-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|include_details|query|string|false|Include detailed event information (creator, invitees, stats,<br>etc.)|
|include_card|query|string|false|Include card fields without detailed event HTML or statistics|
|category_id|query|integer|false|Filter events by category ID|
|include_subcategories|query|string|false|Include events from subcategories when filtering by category|
|post_id|query|integer|false|Filter to events associated with a specific post ID|
|attending_user|query|string|false|Filter to events where the specified user (username) has RSVP'd<br>as going|
|before|query|string(date-time)|false|Return events starting before this date/time (ISO 8601 format)|
|after|query|string(date-time)|false|Return events starting after this date/time (ISO 8601 format)|
|order|query|string|false|Sort order for events by start date (default: asc)|
|limit|query|integer|false|Maximum number of events to return (default: 200)|
|tags|query|[string]|false|Filter to events whose topic has every specified tag|
|search|query|string|false|Search event names, descriptions, and locations|
|status|query|string|false|Filter by event attendance status|

#### Enumerated Values

|Parameter|Value|
|---|---|
|include_details|true|
|include_details|false|
|include_card|true|
|include_card|false|
|include_subcategories|true|
|include_subcategories|false|
|order|asc|
|order|desc|
|status|public|
|status|private|
|status|standalone|

> Example responses

> 200 Response

```json
{
  "events": [
    {
      "id": 0,
      "category_id": 0,
      "name": "string",
      "recurrence": "string",
      "recurrence_until": "1970-01-01T00:00:00Z",
      "starts_at": "1970-01-01T00:00:00Z",
      "ends_at": "1970-01-01T00:00:00Z",
      "rrule": "string",
      "show_local_time": true,
      "timezone": "string",
      "duration": "string",
      "all_day": true,
      "custom_fields": {},
      "post": {
        "id": 0,
        "post_number": 0,
        "url": "string",
        "category_slug": "string",
        "topic": {
          "id": 0,
          "title": "string",
          "tags": [
            "string"
          ],
          "tags_descriptions": {},
          "slug": "string"
        }
      },
      "occurrences": [
        {
          "starts_at": "string",
          "ends_at": "string"
        }
      ],
      "can_act_on_discourse_post_event": true,
      "can_update_attendance": true,
      "creator": {
        "id": 0,
        "username": "string",
        "name": "string",
        "avatar_template": "string"
      },
      "hosts": [
        {
          "id": 0,
          "username": "string",
          "name": "string",
          "avatar_template": "string",
          "title": "string"
        }
      ],
      "is_closed": true,
      "is_expired": true,
      "is_ongoing": true,
      "is_private": true,
      "is_public": true,
      "is_standalone": true,
      "minimal": true,
      "raw_invitees": [
        "string"
      ],
      "reminders": [
        {
          "value": 0,
          "unit": "string",
          "period": "before",
          "type": "string"
        }
      ],
      "sample_invitees": [
        {}
      ],
      "should_display_invitees": true,
      "stats": {},
      "status": "public",
      "url": "string",
      "description": "string",
      "description_html": "string",
      "location": "string",
      "url_restates_location": true,
      "watching_invitee": {},
      "chat_enabled": true,
      "channel": {},
      "livestream": true,
      "livestream_onebox": "string",
      "is_zoom_livestream": true,
      "recording_url": "string",
      "recording_onebox": "string",
      "max_attendees": 0,
      "at_capacity": true,
      "image_upload": {}
    }
  ]
}
```

<h3 id="list-calendar-events-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|success response (detailed)|Inline|

<h3 id="list-calendar-events-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|events|[object]|true|none|none|
|» id|integer|true|none|none|
|» category_id|integer \| null|true|none|none|
|» name|string \| null|false|none|none|
|» recurrence|string \| null|false|none|none|
|» recurrence_until|string \| null(date-time)|false|none|none|
|» starts_at|string \| null(date-time)|true|none|none|
|» ends_at|string \| null(date-time)|true|none|none|
|» rrule|string|false|none|none|
|» show_local_time|boolean|true|none|none|
|» timezone|string \| null|true|none|none|
|» duration|string|false|none|none|
|» all_day|boolean|false|none|none|
|» custom_fields|object \| null|false|none|none|
|» post|object|true|none|none|
|» » id|integer|true|none|none|
|» » post_number|integer|true|none|none|
|» » url|string|true|none|none|
|» » category_slug|string|true|none|none|
|» » topic|object|true|none|none|
|» » » id|integer|true|none|none|
|» » » title|string|true|none|none|
|» » » tags|[string]|true|none|none|
|» » » tags_descriptions|object|true|none|none|
|» » » slug|string|true|none|none|
|» occurrences|[object]|true|none|none|
|» » starts_at|string \| null|true|none|none|
|» » ends_at|string \| null|true|none|none|
|» can_act_on_discourse_post_event|boolean \| null|true|none|none|
|» can_update_attendance|boolean \| null|true|none|none|
|» creator|object|false|none|none|
|» » id|integer|true|none|none|
|» » username|string|true|none|none|
|» » name|string \| null|false|none|none|
|» » avatar_template|string|true|none|none|
|» hosts|[object]|false|none|none|
|» » id|integer|true|none|none|
|» » username|string|true|none|none|
|» » name|string \| null|false|none|none|
|» » avatar_template|string|true|none|none|
|» » title|string \| null|false|none|none|
|» is_closed|boolean|true|none|none|
|» is_expired|boolean|true|none|none|
|» is_ongoing|boolean|true|none|none|
|» is_private|boolean|true|none|none|
|» is_public|boolean|true|none|none|
|» is_standalone|boolean|true|none|none|
|» minimal|boolean \| null|false|none|none|
|» raw_invitees|[string]|false|none|none|
|» reminders|[object]|false|none|none|
|» » value|integer|true|none|none|
|» » unit|string|true|none|none|
|» » period|string|true|none|none|
|» » type|string|true|none|none|
|» sample_invitees|[object]|false|none|none|
|» should_display_invitees|boolean|true|none|none|
|» stats|object|false|none|none|
|» status|string|true|none|none|
|» url|string|false|none|none|
|» description|string \| null|false|none|none|
|» description_html|string \| null|false|none|none|
|» location|string \| null|false|none|none|
|» url_restates_location|boolean|false|none|none|
|» watching_invitee|object \| null|false|none|none|
|» chat_enabled|boolean \| null|false|none|none|
|» channel|object|false|none|none|
|» livestream|boolean|false|none|none|
|» livestream_onebox|string \| null|false|none|none|
|» is_zoom_livestream|boolean|false|none|none|
|» recording_url|string|false|none|none|
|» recording_onebox|string \| null|false|none|none|
|» max_attendees|integer \| null|false|none|none|
|» at_capacity|boolean|true|none|none|
|» image_upload|object \| null|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|» » period|before|
|» » period|after|
|» status|public|
|» status|private|
|» status|standalone|

<aside class="success">
This operation does not require authentication
</aside>

## Export calendar events in iCalendar format

<a id="opIdexportEventsICS"></a>

> Code samples

```bash
curl https://discourse.example.com/discourse-post-event/events.ics
```

`GET /discourse-post-event/events.ics`

<h3 id="export-calendar-events-in-icalendar-format-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|category_id|query|integer|false|Filter events by category ID|
|include_subcategories|query|string|false|Include events from subcategories when filtering by category|
|attending_user|query|string|false|Filter to events where the specified user (username) has RSVP'd<br>as going|
|before|query|string(date-time)|false|Return events starting before this date/time (ISO 8601 format)|
|after|query|string(date-time)|false|Return events starting after this date/time (ISO 8601 format)|
|order|query|string|false|Sort order for events by start date (default: asc)|
|limit|query|integer|false|Maximum number of events to return (default: 200)|

#### Enumerated Values

|Parameter|Value|
|---|---|
|include_subcategories|true|
|include_subcategories|false|
|order|asc|
|order|desc|

<h3 id="export-calendar-events-in-icalendar-format-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|iCalendar file|Inline|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="discourse-api-documentation-backups">Backups</h1>

## List backups

<a id="opIdgetBackups"></a>

> Code samples

```bash
curl https://discourse.example.com/admin/backups.json \
  -H 'Accept: application/json'
```

`GET /admin/backups.json`

> Example responses

> 200 Response

```json
[
  {
    "filename": "string",
    "size": 0,
    "last_modified": "string"
  }
]
```

<h3 id="list-backups-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|success response|Inline|

<h3 id="list-backups-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|
|» filename|string|true|none|none|
|» size|integer|true|none|none|
|» last_modified|string|true|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Create backup

<a id="opIdcreateBackup"></a>

> Code samples

```bash
curl https://discourse.example.com/admin/backups.json \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "with_uploads": true
  }'
```

`POST /admin/backups.json`

> Body parameter

```json
{
  "with_uploads": true
}
```

<h3 id="create-backup-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» with_uploads|body|boolean|true|none|

> Example responses

> 200 Response

```json
{
  "success": "OK"
}
```

<h3 id="create-backup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|success response|Inline|

<h3 id="create-backup-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|string|true|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Download backup

<a id="opIddownloadBackup"></a>

> Code samples

```bash
curl 'https://discourse.example.com/admin/backups/string?token=string'
```

`GET /admin/backups/{filename}`

<h3 id="download-backup-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|filename|path|string|true|none|
|token|query|string|true|none|

<h3 id="download-backup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|success response|None|

<aside class="success">
This operation does not require authentication
</aside>

## Send download backup email

<a id="opIdsendDownloadBackupEmail"></a>

> Code samples

```bash
curl https://discourse.example.com/admin/backups/string \
  -X PUT
```

`PUT /admin/backups/{filename}`

<h3 id="send-download-backup-email-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|filename|path|string|true|none|

<h3 id="send-download-backup-email-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|success response|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="discourse-api-documentation-badges">Badges</h1>

## List badges

<a id="opIdadminListBadges"></a>

> Code samples

```bash
curl https://discourse.example.com/admin/badges.json \
  -H 'Accept: application/json'
```

`GET /admin/badges.json`

> Example responses

> 200 Response

```json
{
  "badges": [
    {
      "id": 0,
      "name": "string",
      "description": "string",
      "grant_count": 0,
      "allow_title": true,
      "multiple_grant": true,
      "icon": "string",
      "image_url": "string",
      "listable": true,
      "enabled": true,
      "badge_grouping_id": 0,
      "system": true,
      "long_description": "string",
      "slug": "string",
      "manually_grantable": true,
      "query": "string",
      "trigger": 0,
      "target_posts": true,
      "auto_revoke": true,
      "show_posts": true,
      "i18n_name": "string",
      "image_upload_id": 0,
      "badge_type_id": 0,
      "show_in_post_header": true
    }
  ],
  "badge_types": [
    {
      "id": 0,
      "name": "string",
      "sort_order": 0
    }
  ],
  "badge_groupings": [
    {
      "id": 0,
      "name": "string",
      "description": "string",
      "position": 0,
      "system": true
    }
  ],
  "admin_badges": {
    "protected_system_fields": [
      null
    ],
    "triggers": {
      "user_change": 0,
      "none": 0,
      "post_revision": 0,
      "trust_level_change": 0,
      "post_action": 0
    },
    "badge_ids": [
      null
    ],
    "badge_grouping_ids": [
      null
    ],
    "badge_type_ids": [
      null
    ]
  }
}
```

<h3 id="list-badges-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|success response|Inline|

<h3 id="list-badges-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|badges|[object]|true|none|none|
|» id|integer|true|none|none|
|» name|string|true|none|none|
|» description|string|true|none|none|
|» grant_count|integer|true|none|none|
|» allow_title|boolean|true|none|none|
|» multiple_grant|boolean|true|none|none|
|» icon|string|true|none|none|
|» image_url|string \| null|true|none|none|
|» listable|boolean|true|none|none|
|» enabled|boolean|true|none|none|
|» badge_grouping_id|integer|true|none|none|
|» system|boolean|true|none|none|
|» long_description|string|true|none|none|
|» slug|string|true|none|none|
|» manually_grantable|boolean|true|none|none|
|» query|string \| null|true|none|none|
|» trigger|integer \| null|true|none|none|
|» target_posts|boolean|true|none|none|
|» auto_revoke|boolean|true|none|none|
|» show_posts|boolean|true|none|none|
|» i18n_name|string \| null|false|none|none|
|» image_upload_id|integer \| null|true|none|none|
|» badge_type_id|integer|true|none|none|
|» show_in_post_header|boolean|true|none|none|
|badge_types|[object]|true|none|none|
|» id|integer|true|none|none|
|» name|string|true|none|none|
|» sort_order|integer|true|none|none|
|badge_groupings|[object]|true|none|none|
|» id|integer|true|none|none|
|» name|string|true|none|none|
|» description|string \| null|true|none|none|
|» position|integer|true|none|none|
|» system|boolean|true|none|none|
|admin_badges|object|true|none|none|
|» protected_system_fields|[object]|true|none|none|
|» triggers|object|true|none|none|
|» » user_change|integer|true|none|none|
|» » none|integer|true|none|none|
|» » post_revision|integer|true|none|none|
|» » trust_level_change|integer|true|none|none|
|» » post_action|integer|true|none|none|
|» badge_ids|[object]|true|none|none|
|» badge_grouping_ids|[object]|true|none|none|
|» badge_type_ids|[object]|true|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Create badge

<a id="opIdcreateBadge"></a>

> Code samples

```bash
curl https://discourse.example.com/admin/badges.json \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "name": "string",
    "badge_type_id": 0
  }'
```

`POST /admin/badges.json`

> Body parameter

```json
{
  "name": "string",
  "badge_type_id": 0
}
```

<h3 id="create-badge-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» name|body|string|true|The name for the new badge.|
|» badge_type_id|body|integer|true|The ID for the badge type. 1 for Gold, 2 for Silver,<br>3 for Bronze.|

> Example responses

> 200 Response

```json
{
  "badge_types": [
    {
      "id": 0,
      "name": "string",
      "sort_order": 0
    }
  ],
  "badge": {
    "id": 0,
    "name": "string",
    "description": "string",
    "grant_count": 0,
    "allow_title": true,
    "multiple_grant": true,
    "icon": "string",
    "image_url": "string",
    "image_upload_id": 0,
    "listable": true,
    "enabled": true,
    "badge_grouping_id": 0,
    "system": true,
    "long_description": "string",
    "slug": "string",
    "manually_grantable": true,
    "query": "string",
    "trigger": "string",
    "target_posts": true,
    "auto_revoke": true,
    "show_posts": true,
    "badge_type_id": 0,
    "show_in_post_header": true
  }
}
```

<h3 id="create-badge-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|success response|Inline|

<h3 id="create-badge-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|badge_types|[object]|true|none|none|
|» id|integer|true|none|none|
|» name|string|true|none|none|
|» sort_order|integer|true|none|none|
|badge|object|true|none|none|
|» id|integer|true|none|none|
|» name|string|true|none|none|
|» description|string|true|none|none|
|» grant_count|integer|true|none|none|
|» allow_title|boolean|true|none|none|
|» multiple_grant|boolean|true|none|none|
|» icon|string|true|none|none|
|» image_url|string \| null|true|none|none|
|» image_upload_id|integer \| null|true|none|none|
|» listable|boolean|true|none|none|
|» enabled|boolean|true|none|none|
|» badge_grouping_id|integer|true|none|none|
|» system|boolean|true|none|none|
|» long_description|string|true|none|none|
|» slug|string|true|none|none|
|» manually_grantable|boolean|true|none|none|
|» query|string \| null|true|none|none|
|» trigger|string \| null|true|none|none|
|» target_posts|boolean|true|none|none|
|» auto_revoke|boolean|true|none|none|
|» show_posts|boolean|true|none|none|
|» badge_type_id|integer|true|none|none|
|» show_in_post_header|boolean|true|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Update badge

<a id="opIdupdateBadge"></a>

> Code samples

```bash
curl https://discourse.example.com/admin/badges/0.json \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "name": "string",
    "badge_type_id": 0
  }'
```

`PUT /admin/badges/{id}.json`

> Body parameter

```json
{
  "name": "string",
  "badge_type_id": 0
}
```

<h3 id="update-badge-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|none|
|body|body|object|false|none|
|» name|body|string|true|The name for the new badge.|
|» badge_type_id|body|integer|true|The ID for the badge type. 1 for Gold, 2 for Silver,<br>3 for Bronze.|

> Example responses

> 200 Response

```json
{
  "badge_types": [
    {
      "id": 0,
      "name": "string",
      "sort_order": 0
    }
  ],
  "badge": {
    "id": 0,
    "name": "string",
    "description": "string",
    "grant_count": 0,
    "allow_title": true,
    "multiple_grant": true,
    "icon": "string",
    "image_url": "string",
    "image_upload_id": 0,
    "listable": true,
    "enabled": true,
    "badge_grouping_id": 0,
    "system": true,
    "long_description": "string",
    "slug": "string",
    "manually_grantable": true,
    "query": "string",
    "trigger": "string",
    "target_posts": true,
    "auto_revoke": true,
    "show_posts": true,
    "badge_type_id": 0,
    "show_in_post_header": true
  }
}
```

<h3 id="update-badge-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|success response|Inline|

<h3 id="update-badge-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|badge_types|[object]|true|none|none|
|» id|integer|true|none|none|
|» name|string|true|none|none|
|» sort_order|integer|true|none|none|
|badge|object|true|none|none|
|» id|integer|true|none|none|
|» name|string|true|none|none|
|» description|string|true|none|none|
|» grant_count|integer|true|none|none|
|» allow_title|boolean|true|none|none|
|» multiple_grant|boolean|true|none|none|
|» icon|string|true|none|none|
|» image_url|string \| null|true|none|none|
|» image_upload_id|integer \| null|true|none|none|
|» listable|boolean|true|none|none|
|» enabled|boolean|true|none|none|
|» badge_grouping_id|integer|true|none|none|
|» system|boolean|true|none|none|
|» long_description|string|true|none|none|
|» slug|string|true|none|none|
|» manually_grantable|boolean|true|none|none|
|» query|string \| null|true|none|none|
|» trigger|string \| null|true|none|none|
|» target_posts|boolean|true|none|none|
|» auto_revoke|boolean|true|none|none|
|» show_posts|boolean|true|none|none|
|» badge_type_id|integer|true|none|none|
|» show_in_post_header|boolean|true|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Delete badge

<a id="opIddeleteBadge"></a>

> Code samples

```bash
curl https://discourse.example.com/admin/badges/0.json \
  -X DELETE
```

`DELETE /admin/badges/{id}.json`

<h3 id="delete-badge-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|none|

<h3 id="delete-badge-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|success response|None|

<aside class="success">
This operation does not require authentication
</aside>

## Grant a badge to a user

<a id="opIdgrantUserBadge"></a>

> Code samples

```bash
curl https://discourse.example.com/user_badges.json \
  -X POST \
  -H 'Content-Type: application/json' \
  -d '{
    "username": "string",
    "badge_id": 0,
    "badge_name": "string",
    "reason": "string",
    "post_id": 1,
    "suppress_notification": false
  }'
```

`POST /user_badges.json`

> Body parameter

```json
{
  "username": "string",
  "badge_id": 0,
  "badge_name": "string",
  "reason": "string",
  "post_id": 1,
  "suppress_notification": false
}
```

<h3 id="grant-a-badge-to-a-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» username|body|string|true|The username of the user to grant the badge to.|
|» badge_id|body|integer|false|The ID of the badge to grant. Either badge_id or badge_name<br>is required.|
|» badge_name|body|string|false|The name of the badge to grant. Either badge_id or<br>badge_name is required.|
|» reason|body|string|false|Optional URL of a post or topic associated with the<br>grant. Cannot be used together with post_id.|
|» post_id|body|integer|false|Optional ID of a visible, non-deleted post associated<br>with the grant. Cannot be used together with reason.|
|» suppress_notification|body|boolean|false|Suppress the notification for this grant only. Omit<br>or set to false to preserve normal notification behavior, including<br>existing suppression rules. The badge is still granted and grant<br>events still occur.|
|» *anyOf*|body|object|false|none|
|» *anyOf*|body|object|false|none|

<h3 id="grant-a-badge-to-a-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|badge granted|None|

<aside class="success">
This operation does not require authentication
</aside>

## List badges for a user

<a id="opIdlistUserBadges"></a>

> Code samples

```bash
curl https://discourse.example.com/user-badges/string.json \
  -H 'Accept: application/json'
```

`GET /user-badges/{username}.json`

<h3 id="list-badges-for-a-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|username|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "badges": [
    {
      "id": 0,
      "name": "string",
      "description": "string",
      "grant_count": 0,
      "allow_title": true,
      "multiple_grant": true,
      "icon": "string",
      "image_url": "string",
      "listable": true,
      "enabled": true,
      "badge_grouping_id": 0,
      "system": true,
      "slug": "string",
      "manually_grantable": true,
      "badge_type_id": 0
    }
  ],
  "badge_types": [
    {
      "id": 0,
      "name": "string",
      "sort_order": 0
    }
  ],
  "granted_bies": [
    {
      "id": 0,
      "username": "string",
      "name": "string",
      "avatar_template": "string",
      "flair_name": "string",
      "admin": true,
      "moderator": true,
      "trust_level": 0
    }
  ],
  "user_badges": [
    {
      "id": 0,
      "granted_at": "string",
      "grouping_position": 0,
      "is_favorite": "string",
      "can_favorite": true,
      "badge_id": 0,
      "granted_by_id": 0
    }
  ]
}
```

<h3 id="list-badges-for-a-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|success response|Inline|

<h3 id="list-badges-for-a-user-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|badges|[object]|false|none|none|
|» id|integer|true|none|none|
|» name|string|true|none|none|
|» description|string|true|none|none|
|» grant_count|integer|true|none|none|
|» allow_title|boolean|true|none|none|
|» multiple_grant|boolean|true|none|none|
|» icon|string|true|none|none|
|» image_url|string \| null|true|none|none|
|» listable|boolean|true|none|none|
|» enabled|boolean|true|none|none|
|» badge_grouping_id|integer|true|none|none|
|» system|boolean|true|none|none|
|» slug|string|true|none|none|
|» manually_grantable|boolean|true|none|none|
|» badge_type_id|integer|true|none|none|
|badge_types|[object]|false|none|none|
|» id|integer|true|none|none|
|» name|string|true|none|none|
|» sort_order|integer|true|none|none|
|granted_bies|[object]|false|none|none|
|» id|integer|true|none|none|
|» username|string|true|none|none|
|» name|string|true|none|none|
|» avatar_template|string|true|none|none|
|» flair_name|string \| null|true|none|none|
|» admin|boolean|true|none|none|
|» moderator|boolean|true|none|none|
|» trust_level|integer|true|none|none|
|user_badges|[object]|true|none|none|
|» id|integer|true|none|none|
|» granted_at|string|true|none|none|
|» grouping_position|integer|true|none|none|
|» is_favorite|string \| null|true|none|none|
|» can_favorite|boolean|true|none|none|
|» badge_id|integer|true|none|none|
|» granted_by_id|integer|true|none|none|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="discourse-api-documentation-categories">Categories</h1>

## Retrieves a list of categories

<a id="opIdlistCategories"></a>

> Code samples

```bash
curl https://discourse.example.com/categories.json \
  -H 'Accept: application/json'
```

`GET /categories.json`

<h3 id="retrieves-a-list-of-categories-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|include_subcategories|query|boolean|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|include_subcategories|true|

> Example responses

> 200 Response

```json
{
  "category_list": {
    "can_create_category": true,
    "can_create_topic": true,
    "categories": [
      {
        "id": 0,
        "name": "string",
        "color": "string",
        "text_color": "string",
        "style_type": "string",
        "emoji": "string",
        "icon": "string",
        "slug": "string",
        "topic_count": 0,
        "post_count": 0,
        "position": 0,
        "description": "string",
        "description_text": "string",
        "description_excerpt": "string",
        "topic_url": "string",
        "read_restricted": true,
        "permission": 0,
        "notification_level": 0,
        "can_edit": true,
        "topic_template": "string",
        "topic_title_placeholder": "string",
        "has_children": true,
        "subcategory_count": 0,
        "sort_order": "string",
        "sort_ascending": "string",
        "show_subcategory_list": true,
        "num_featured_topics": 0,
        "default_view": "string",
        "subcategory_list_style": "string",
        "default_top_period": "string",
        "default_list_filter": "string",
        "minimum_required_tags": 0,
        "navigate_to_first_post_after_read": true,
        "topics_day": 0,
        "topics_week": 0,
        "topics_month": 0,
        "topics_year": 0,
        "topics_all_time": 0,
        "is_uncategorized": true,
        "subcategory_ids": [
          null
        ],
        "subcategory_list": [
          null
        ],
        "uploaded_logo": "string",
        "uploaded_logo_dark": "string",
        "uploaded_background": "string",
        "uploaded_background_dark": "string"
      }
    ]
  }
}
```

<h3 id="retrieves-a-list-of-categories-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|success response|Inline|

<h3 id="retrieves-a-list-of-categories-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|category_list|object|true|none|none|
|» can_create_category|boolean|true|none|none|
|» can_create_topic|boolean|true|none|none|
|» categories|[object]|true|none|none|
|» » id|integer|true|none|none|
|» » name|string|true|none|none|
|» » color|string|true|none|none|
|» » text_color|string|true|none|none|
|» » style_type|string|true|none|none|
|» » emoji|string \| null|true|none|none|
|» » icon|string \| null|true|none|none|
|» » slug|string|true|none|none|
|» » topic_count|integer|true|none|none|
|» » post_count|integer|true|none|none|
|» » position|integer|true|none|none|
|» » description|string \| null|true|none|none|
|» » description_text|string \| null|true|none|none|
|» » description_excerpt|string \| null|true|none|none|
|» » topic_url|string \| null|true|none|none|
|» » read_restricted|boolean|true|none|none|
|» » permission|integer|true|none|none|
|» » notification_level|integer|true|none|none|
|» » can_edit|boolean|true|none|none|
|» » topic_template|string \| null|true|none|none|
|» » topic_title_placeholder|string \| null|true|none|none|
|» » has_children|boolean|true|none|none|
|» » subcategory_count|integer \| null|true|none|none|
|» » sort_order|string \| null|true|none|none|
|» » sort_ascending|string \| null|true|none|none|
|» » show_subcategory_list|boolean|true|none|none|
|» » num_featured_topics|integer|true|none|none|
|» » default_view|string \| null|true|none|none|
|» » subcategory_list_style|string|true|none|none|
|» » default_top_period|string|true|none|none|
|» » default_list_filter|string|true|none|none|
|» » minimum_required_tags|integer|true|none|none|
|» » navigate_to_first_post_after_read|boolean|true|none|none|
|» » topics_day|integer|true|none|none|
|» » topics_week|integer|true|none|none|
|» » topics_month|integer|true|none|none|
|» » topics_year|integer|true|none|none|
|» » topics_all_time|integer|true|none|none|
|» » is_uncategorized|boolean|false|none|none|
|» » subcategory_ids|[object]|true|none|none|
|» » subcategory_list|[object]|false|none|none|
|» » uploaded_logo|string \| null|true|none|none|
|» » uploaded_logo_dark|string \| null|true|none|none|
|» » uploaded_background|string \| null|true|none|none|
|» » uploaded_background_dark|string \| null|true|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Creates a category

<a id="opIdcreateCategory"></a>

> Code samples

```bash
curl https://discourse.example.com/categories.json \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "name": "string",
    "color": "49d9e9",
    "text_color": "f0fcfd",
    "style_type": "string",
    "emoji": "string",
    "icon": "string",
    "parent_category_id": 0,
    "allow_badges": true,
    "slug": "string",
    "topic_featured_links_allowed": true,
    "permissions": {
      "everyone": 1,
      "staff": 0
    },
    "search_priority": 0,
    "form_template_ids": [
      null
    ],
    "category_localizations": [
      {
        "id": 0,
        "locale": "string",
        "name": "string",
        "description": "string"
      }
    ]
  }'
```

`POST /categories.json`

> Body parameter

```json
{
  "name": "string",
  "color": "49d9e9",
  "text_color": "f0fcfd",
  "style_type": "string",
  "emoji": "string",
  "icon": "string",
  "parent_category_id": 0,
  "allow_badges": true,
  "slug": "string",
  "topic_featured_links_allowed": true,
  "permissions": {
    "everyone": 1,
    "staff": 0
  },
  "search_priority": 0,
  "form_template_ids": [
    null
  ],
  "category_localizations": [
    {
      "id": 0,
      "locale": "string",
      "name": "string",
      "description": "string"
    }
  ]
}
```

<h3 id="creates-a-category-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» name|body|string|true|none|
|» color|body|string|false|none|
|» text_color|body|string|false|none|
|» style_type|body|string|false|none|
|» emoji|body|string|false|none|
|» icon|body|string|false|none|
|» parent_category_id|body|integer|false|none|
|» allow_badges|body|boolean|false|none|
|» slug|body|string|false|none|
|» topic_featured_links_allowed|body|boolean|false|none|
|» permissions|body|object|false|none|
|» » everyone|body|integer|false|none|
|» » staff|body|integer|false|none|
|» search_priority|body|integer|false|none|
|» form_template_ids|body|[object]|false|none|
|» category_localizations|body|[object]|false|none|
|» » id|body|integer|false|The unique identifier for an existing localization.<br>Must be included otherwise the record will be deleted.|
|» » locale|body|string|true|The locale for the localization, e.g., 'en',<br>'zh_CN'. Locale should be in the list of SiteSetting.content_localization_supported_locales.|
|» » name|body|string|true|The name of the category in the specified locale.|
|» » description|body|string|false|The description excerpt of the category in the<br>specified locale.|

> Example responses

> 200 Response

```json
{
  "category": {
    "id": 0,
    "name": "string",
    "color": "string",
    "text_color": "string",
    "style_type": "string",
    "emoji": "string",
    "icon": "string",
    "slug": "string",
    "locale": "string",
    "topic_count": 0,
    "post_count": 0,
    "position": 0,
    "description": "string",
    "description_text": "string",
    "description_excerpt": "string",
    "topic_url": "string",
    "read_restricted": true,
    "permission": 0,
    "notification_level": 0,
    "can_edit": true,
    "topic_template": "string",
    "topic_title_placeholder": "string",
    "form_template_ids": [
      null
    ],
    "has_children": true,
    "subcategory_count": 0,
    "sort_order": "string",
    "sort_ascending": "string",
    "show_subcategory_list": true,
    "num_featured_topics": 0,
    "default_view": "string",
    "subcategory_list_style": "string",
    "default_top_period": "string",
    "default_list_filter": "string",
    "minimum_required_tags": 0,
    "navigate_to_first_post_after_read": true,
    "custom_fields": {},
    "allowed_tags": [
      null
    ],
    "allowed_tag_groups": [
      null
    ],
    "allow_global_tags": true,
    "required_tag_groups": [
      {
        "name": "string",
        "min_count": 0
      }
    ],
    "category_setting": {
      "auto_bump_cooldown_days": 0,
      "num_auto_bump_daily": 0,
      "require_reply_approval": true,
      "require_topic_approval": true,
      "nested_replies_default": true,
      "topic_posting_review_mode": "string",
      "reply_posting_review_mode": "string"
    },
    "category_localizations": [
      null
    ],
    "read_only_banner": "string",
    "available_groups": [
      null
    ],
    "auto_close_hours": "string",
    "auto_close_based_on_last_post": true,
    "allow_unlimited_owner_edits_on_first_post": true,
    "default_slow_mode_seconds": "string",
    "group_permissions": [
      {
        "permission_type": 0,
        "group_name": "string",
        "group_id": 0
      }
    ],
    "email_in": "string",
    "email_in_allow_strangers": true,
    "mailinglist_mirror": true,
    "all_topics_wiki": true,
    "can_delete": true,
    "allow_badges": true,
    "topic_featured_link_allowed": true,
    "search_priority": 0,
    "topic_posting_review_group_ids": [
      0
    ],
    "reply_posting_review_group_ids": [
      0
    ],
    "uploaded_logo": "string",
    "uploaded_logo_dark": "string",
    "uploaded_background": "string",
    "uploaded_background_dark": "string",
    "category_types": {},
    "category_type_settings": {},
    "available_category_types": [
      {
        "id": "string",
        "name": "string",
        "title": "string",
        "description": "string",
        "icon": "string",
        "available": true,
        "visible": true,
        "configuration_schema": {}
      }
    ]
  }
}
```

<h3 id="creates-a-category-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|success response|Inline|

<h3 id="creates-a-category-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|category|object|true|none|none|
|» id|integer|true|none|none|
|» name|string|true|none|none|
|» color|string|true|none|none|
|» text_color|string|true|none|none|
|» style_type|string|true|none|none|
|» emoji|string \| null|true|none|none|
|» icon|string \| null|true|none|none|
|» slug|string|true|none|none|
|» locale|string \| null|false|none|none|
|» topic_count|integer|true|none|none|
|» post_count|integer|true|none|none|
|» position|integer|true|none|none|
|» description|string \| null|true|none|none|
|» description_text|string \| null|true|none|none|
|» description_excerpt|string \| null|true|none|none|
|» topic_url|string \| null|true|none|none|
|» read_restricted|boolean|true|none|none|
|» permission|integer \| null|true|none|none|
|» notification_level|integer|true|none|none|
|» can_edit|boolean|true|none|none|
|» topic_template|string \| null|true|none|none|
|» topic_title_placeholder|string \| null|true|none|none|
|» form_template_ids|[object]|false|none|none|
|» has_children|boolean \| null|true|none|none|
|» subcategory_count|integer \| null|true|none|none|
|» sort_order|string \| null|true|none|none|
|» sort_ascending|string \| null|true|none|none|
|» show_subcategory_list|boolean|true|none|none|
|» num_featured_topics|integer|true|none|none|
|» default_view|string \| null|true|none|none|
|» subcategory_list_style|string|true|none|none|
|» default_top_period|string|true|none|none|
|» default_list_filter|string|true|none|none|
|» minimum_required_tags|integer|true|none|none|
|» navigate_to_first_post_after_read|boolean|true|none|none|
|» custom_fields|object|true|none|none|
|» allowed_tags|[object]|false|none|none|
|» allowed_tag_groups|[object]|false|none|none|
|» allow_global_tags|boolean|false|none|none|
|» required_tag_groups|[object]|true|none|none|
|» » name|string|true|none|none|
|» » min_count|integer|true|none|none|
|» category_setting|object|false|none|none|
|» » auto_bump_cooldown_days|integer|false|none|none|
|» » num_auto_bump_daily|integer \| null|false|none|none|
|» » require_reply_approval|boolean \| null|false|none|none|
|» » require_topic_approval|boolean \| null|false|none|none|
|» » nested_replies_default|boolean \| null|false|none|none|
|» » topic_posting_review_mode|string|false|none|none|
|» » reply_posting_review_mode|string|false|none|none|
|» category_localizations|[object]|false|none|none|
|» read_only_banner|string \| null|true|none|none|
|» available_groups|[object]|true|none|none|
|» auto_close_hours|string \| null|true|none|none|
|» auto_close_based_on_last_post|boolean|true|none|none|
|» allow_unlimited_owner_edits_on_first_post|boolean|true|none|none|
|» default_slow_mode_seconds|string \| null|true|none|none|
|» group_permissions|[object]|true|none|none|
|» » permission_type|integer|true|none|none|
|» » group_name|string|true|none|none|
|» » group_id|integer|true|none|none|
|» email_in|string \| null|true|none|none|
|» email_in_allow_strangers|boolean|true|none|none|
|» mailinglist_mirror|boolean|true|none|none|
|» all_topics_wiki|boolean|true|none|none|
|» can_delete|boolean|true|none|none|
|» allow_badges|boolean|true|none|none|
|» topic_featured_link_allowed|boolean|true|none|none|
|» search_priority|integer|true|none|none|
|» topic_posting_review_group_ids|[integer]|true|none|none|
|» reply_posting_review_group_ids|[integer]|true|none|none|
|» uploaded_logo|string \| null|true|none|none|
|» uploaded_logo_dark|string \| null|true|none|none|
|» uploaded_background|string \| null|true|none|none|
|» uploaded_background_dark|string \| null|true|none|none|
|» category_types|object|false|none|none|
|» category_type_settings|object|false|none|none|
|» available_category_types|[object]|false|none|none|
|» » id|string|true|none|none|
|» » name|string|true|none|none|
|» » title|string|true|none|none|
|» » description|string|true|none|none|
|» » icon|string|true|none|none|
|» » available|boolean|true|none|none|
|» » visible|boolean|true|none|none|
|» » configuration_schema|object|true|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Updates a category

<a id="opIdupdateCategory"></a>

> Code samples

```bash
curl https://discourse.example.com/categories/0.json \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "name": "string",
    "color": "49d9e9",
    "text_color": "f0fcfd",
    "style_type": "string",
    "emoji": "string",
    "icon": "string",
    "parent_category_id": 0,
    "allow_badges": true,
    "slug": "string",
    "topic_featured_links_allowed": true,
    "permissions": {
      "everyone": 1,
      "staff": 0
    },
    "search_priority": 0,
    "form_template_ids": [
      null
    ],
    "category_localizations": [
      {
        "id": 0,
        "locale": "string",
        "name": "string",
        "description": "string"
      }
    ]
  }'
```

`PUT /categories/{id}.json`

> Body parameter

```json
{
  "name": "string",
  "color": "49d9e9",
  "text_color": "f0fcfd",
  "style_type": "string",
  "emoji": "string",
  "icon": "string",
  "parent_category_id": 0,
  "allow_badges": true,
  "slug": "string",
  "topic_featured_links_allowed": true,
  "permissions": {
    "everyone": 1,
    "staff": 0
  },
  "search_priority": 0,
  "form_template_ids": [
    null
  ],
  "category_localizations": [
    {
      "id": 0,
      "locale": "string",
      "name": "string",
      "description": "string"
    }
  ]
}
```

<h3 id="updates-a-category-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|none|
|body|body|object|false|none|
|» name|body|string|true|none|
|» color|body|string|false|none|
|» text_color|body|string|false|none|
|» style_type|body|string|false|none|
|» emoji|body|string|false|none|
|» icon|body|string|false|none|
|» parent_category_id|body|integer|false|none|
|» allow_badges|body|boolean|false|none|
|» slug|body|string|false|none|
|» topic_featured_links_allowed|body|boolean|false|none|
|» permissions|body|object|false|none|
|» » everyone|body|integer|false|none|
|» » staff|body|integer|false|none|
|» search_priority|body|integer|false|none|
|» form_template_ids|body|[object]|false|none|
|» category_localizations|body|[object]|false|none|
|» » id|body|integer|false|The unique identifier for an existing localization.<br>Must be included otherwise the record will be deleted.|
|» » locale|body|string|true|The locale for the localization, e.g., 'en',<br>'zh_CN'. Locale should be in the list of SiteSetting.content_localization_supported_locales.|
|» » name|body|string|true|The name of the category in the specified locale.|
|» » description|body|string|false|The description excerpt of the category in the<br>specified locale.|

> Example responses

> 200 Response

```json
{
  "success": "string",
  "category": {
    "id": 0,
    "name": "string",
    "color": "string",
    "text_color": "string",
    "style_type": "string",
    "emoji": "string",
    "icon": "string",
    "slug": "string",
    "locale": "string",
    "topic_count": 0,
    "post_count": 0,
    "position": 0,
    "description": "string",
    "description_text": "string",
    "description_excerpt": "string",
    "topic_url": "string",
    "read_restricted": true,
    "permission": 0,
    "notification_level": 0,
    "can_edit": true,
    "topic_template": "string",
    "topic_title_placeholder": "string",
    "form_template_ids": [
      null
    ],
    "has_children": true,
    "subcategory_count": 0,
    "sort_order": "string",
    "sort_ascending": "string",
    "show_subcategory_list": true,
    "num_featured_topics": 0,
    "default_view": "string",
    "subcategory_list_style": "string",
    "default_top_period": "string",
    "default_list_filter": "string",
    "minimum_required_tags": 0,
    "navigate_to_first_post_after_read": true,
    "custom_fields": {},
    "allowed_tags": [
      null
    ],
    "allowed_tag_groups": [
      null
    ],
    "allow_global_tags": true,
    "required_tag_groups": [
      {
        "name": "string",
        "min_count": 0
      }
    ],
    "category_setting": {
      "auto_bump_cooldown_days": 0,
      "num_auto_bump_daily": 0,
      "require_reply_approval": true,
      "require_topic_approval": true,
      "nested_replies_default": true,
      "topic_posting_review_mode": "string",
      "reply_posting_review_mode": "string"
    },
    "category_localizations": [
      null
    ],
    "read_only_banner": "string",
    "available_groups": [
      null
    ],
    "auto_close_hours": "string",
    "auto_close_based_on_last_post": true,
    "allow_unlimited_owner_edits_on_first_post": true,
    "default_slow_mode_seconds": "string",
    "group_permissions": [
      {
        "permission_type": 0,
        "group_name": "string",
        "group_id": 0
      }
    ],
    "email_in": "string",
    "email_in_allow_strangers": true,
    "mailinglist_mirror": true,
    "all_topics_wiki": true,
    "can_delete": true,
    "allow_badges": true,
    "topic_featured_link_allowed": true,
    "search_priority": 0,
    "topic_posting_review_group_ids": [
      0
    ],
    "reply_posting_review_group_ids": [
      0
    ],
    "uploaded_logo": "string",
    "uploaded_logo_dark": "string",
    "uploaded_background": "string",
    "uploaded_background_dark": "string",
    "category_types": {},
    "category_type_settings": {},
    "available_category_types": [
      {
        "id": "string",
        "name": "string",
        "title": "string",
        "description": "string",
        "icon": "string",
        "available": true,
        "visible": true,
        "configuration_schema": {}
      }
    ]
  }
}
```

<h3 id="updates-a-category-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|success response|Inline|

<h3 id="updates-a-category-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|string|true|none|none|
|category|object|true|none|none|
|» id|integer|true|none|none|
|» name|string|true|none|none|
|» color|string|true|none|none|
|» text_color|string|true|none|none|
|» style_type|string|false|none|none|
|» emoji|string \| null|false|none|none|
|» icon|string \| null|false|none|none|
|» slug|string|true|none|none|
|» locale|string \| null|false|none|none|
|» topic_count|integer|true|none|none|
|» post_count|integer|true|none|none|
|» position|integer|true|none|none|
|» description|string \| null|true|none|none|
|» description_text|string \| null|true|none|none|
|» description_excerpt|string \| null|true|none|none|
|» topic_url|string \| null|true|none|none|
|» read_restricted|boolean|true|none|none|
|» permission|integer \| null|true|none|none|
|» notification_level|integer|true|none|none|
|» can_edit|boolean|true|none|none|
|» topic_template|string \| null|true|none|none|
|» topic_title_placeholder|string \| null|true|none|none|
|» form_template_ids|[object]|true|none|none|
|» has_children|boolean \| null|true|none|none|
|» subcategory_count|integer \| null|true|none|none|
|» sort_order|string \| null|true|none|none|
|» sort_ascending|string \| null|true|none|none|
|» show_subcategory_list|boolean|true|none|none|
|» num_featured_topics|integer|true|none|none|
|» default_view|string \| null|true|none|none|
|» subcategory_list_style|string|true|none|none|
|» default_top_period|string|true|none|none|
|» default_list_filter|string|true|none|none|
|» minimum_required_tags|integer|true|none|none|
|» navigate_to_first_post_after_read|boolean|true|none|none|
|» custom_fields|object|true|none|none|
|» allowed_tags|[object]|false|none|none|
|» allowed_tag_groups|[object]|false|none|none|
|» allow_global_tags|boolean|false|none|none|
|» required_tag_groups|[object]|true|none|none|
|» » name|string|true|none|none|
|» » min_count|integer|true|none|none|
|» category_setting|object|false|none|none|
|» » auto_bump_cooldown_days|integer|false|none|none|
|» » num_auto_bump_daily|integer \| null|false|none|none|
|» » require_reply_approval|boolean \| null|false|none|none|
|» » require_topic_approval|boolean \| null|false|none|none|
|» » nested_replies_default|boolean \| null|false|none|none|
|» » topic_posting_review_mode|string|false|none|none|
|» » reply_posting_review_mode|string|false|none|none|
|» category_localizations|[object]|false|none|none|
|» read_only_banner|string \| null|true|none|none|
|» available_groups|[object]|true|none|none|
|» auto_close_hours|string \| null|true|none|none|
|» auto_close_based_on_last_post|boolean|true|none|none|
|» allow_unlimited_owner_edits_on_first_post|boolean|true|none|none|
|» default_slow_mode_seconds|string \| null|true|none|none|
|» group_permissions|[object]|true|none|none|
|» » permission_type|integer|true|none|none|
|» » group_name|string|true|none|none|
|» » group_id|integer|true|none|none|
|» email_in|string \| null|true|none|none|
|» email_in_allow_strangers|boolean|true|none|none|
|» mailinglist_mirror|boolean|true|none|none|
|» all_topics_wiki|boolean|true|none|none|
|» can_delete|boolean|true|none|none|
|» allow_badges|boolean|true|none|none|
|» topic_featured_link_allowed|boolean|true|none|none|
|» search_priority|integer|true|none|none|
|» topic_posting_review_group_ids|[integer]|true|none|none|
|» reply_posting_review_group_ids|[integer]|true|none|none|
|» uploaded_logo|string \| null|true|none|none|
|» uploaded_logo_dark|string \| null|true|none|none|
|» uploaded_background|string \| null|true|none|none|
|» uploaded_background_dark|string \| null|true|none|none|
|» category_types|object|false|none|none|
|» category_type_settings|object|false|none|none|
|» available_category_types|[object]|false|none|none|
|» » id|string|true|none|none|
|» » name|string|true|none|none|
|» » title|string|true|none|none|
|» » description|string|true|none|none|
|» » icon|string|true|none|none|
|» » available|boolean|true|none|none|
|» » visible|boolean|true|none|none|
|» » configuration_schema|object|true|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## List topics

<a id="opIdlistCategoryTopics"></a>

> Code samples

```bash
curl https://discourse.example.com/c/string/0.json \
  -H 'Accept: application/json'
```

`GET /c/{slug}/{id}.json`

<h3 id="list-topics-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|slug|path|string|true|none|
|id|path|integer|true|none|

> Example responses

> 200 Response

```json
{
  "users": [
    {
      "id": 0,
      "username": "string",
      "name": "string",
      "avatar_template": "string"
    }
  ],
  "primary_groups": [
    null
  ],
  "topic_list": {
    "filter": "string",
    "can_create_topic": true,
    "per_page": 0,
    "top_tags": [
      {
        "id": 0,
        "name": "string",
        "slug": "string"
      }
    ],
    "topics": [
      {
        "id": 0,
        "title": "string",
        "fancy_title": "string",
        "slug": "string",
        "posts_count": 0,
        "reply_count": 0,
        "highest_post_number": 0,
        "image_url": "string",
        "created_at": "string",
        "last_posted_at": "string",
        "bumped": true,
        "bumped_at": "string",
        "archetype": "string",
        "unseen": true,
        "pinned": true,
        "unpinned": "string",
        "excerpt": "string",
        "visible": true,
        "closed": true,
        "archived": true,
        "bookmarked": "string",
        "liked": "string",
        "views": 0,
        "like_count": 0,
        "has_summary": true,
        "last_poster_username": "string",
        "category_id": 0,
        "pinned_globally": true,
        "featured_link": "string",
        "posters": [
          {
            "extras": "string",
            "description": "string",
            "user_id": 0,
            "primary_group_id": 0
          }
        ]
      }
    ]
  }
}
```

<h3 id="list-topics-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|success response|Inline|

<h3 id="list-topics-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|users|[object]|false|none|none|
|» id|integer|true|none|none|
|» username|string|true|none|none|
|» name|string|true|none|none|
|» avatar_template|string|true|none|none|
|primary_groups|[object]|false|none|none|
|topic_list|object|true|none|none|
|» filter|string|false|none|none|
|» can_create_topic|boolean|true|none|none|
|» per_page|integer|true|none|none|
|» top_tags|[object]|false|none|none|
|» » id|integer|true|none|none|
|» » name|string|true|none|none|
|» » slug|string|true|none|none|
|» topics|[object]|true|none|none|
|» » id|integer|true|none|none|
|» » title|string|true|none|none|
|» » fancy_title|string|true|none|none|
|» » slug|string|true|none|none|
|» » posts_count|integer|true|none|none|
|» » reply_count|integer|true|none|none|
|» » highest_post_number|integer|true|none|none|
|» » image_url|string \| null|true|none|none|
|» » created_at|string|true|none|none|
|» » last_posted_at|string|true|none|none|
|» » bumped|boolean|true|none|none|
|» » bumped_at|string|true|none|none|
|» » archetype|string|true|none|none|
|» » unseen|boolean|true|none|none|
|» » pinned|boolean|true|none|none|
|» » unpinned|string \| null|true|none|none|
|» » excerpt|string|true|none|none|
|» » visible|boolean|true|none|none|
|» » closed|boolean|true|none|none|
|» » archived|boolean|true|none|none|
|» » bookmarked|string \| null|true|none|none|
|» » liked|string \| null|true|none|none|
|» » views|integer|true|none|none|
|» » like_count|integer|true|none|none|
|» » has_summary|boolean|true|none|none|
|» » last_poster_username|string|true|none|none|
|» » category_id|integer|true|none|none|
|» » pinned_globally|boolean|true|none|none|
|» » featured_link|string \| null|true|none|none|
|» » posters|[object]|true|none|none|
|» » » extras|string|true|none|none|
|» » » description|string|true|none|none|
|» » » user_id|integer|true|none|none|
|» » » primary_group_id|integer \| null|true|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Show category

<a id="opIdgetCategory"></a>

> Code samples

```bash
curl https://discourse.example.com/c/0/show.json \
  -H 'Accept: application/json'
```

`GET /c/{id}/show.json`

<h3 id="show-category-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|none|

> Example responses

> 200 Response

```json
{
  "category": {
    "id": 0,
    "name": "string",
    "color": "string",
    "text_color": "string",
    "style_type": "string",
    "emoji": "string",
    "icon": "string",
    "slug": "string",
    "locale": "string",
    "topic_count": 0,
    "post_count": 0,
    "position": 0,
    "description": "string",
    "description_text": "string",
    "description_excerpt": "string",
    "topic_url": "string",
    "read_restricted": true,
    "permission": 0,
    "notification_level": 0,
    "can_edit": true,
    "topic_template": "string",
    "topic_title_placeholder": "string",
    "form_template_ids": [
      null
    ],
    "has_children": true,
    "subcategory_count": 0,
    "sort_order": "string",
    "sort_ascending": "string",
    "show_subcategory_list": true,
    "num_featured_topics": 0,
    "default_view": "string",
    "subcategory_list_style": "string",
    "default_top_period": "string",
    "default_list_filter": "string",
    "minimum_required_tags": 0,
    "navigate_to_first_post_after_read": true,
    "custom_fields": {},
    "allowed_tags": [
      null
    ],
    "allowed_tag_groups": [
      null
    ],
    "allow_global_tags": true,
    "required_tag_groups": [
      {
        "name": "string",
        "min_count": 0
      }
    ],
    "category_setting": {
      "auto_bump_cooldown_days": 0,
      "num_auto_bump_daily": 0,
      "require_reply_approval": true,
      "require_topic_approval": true,
      "nested_replies_default": true,
      "topic_posting_review_mode": "string",
      "reply_posting_review_mode": "string"
    },
    "category_localizations": [
      null
    ],
    "read_only_banner": "string",
    "available_groups": [
      null
    ],
    "auto_close_hours": "string",
    "auto_close_based_on_last_post": true,
    "allow_unlimited_owner_edits_on_first_post": true,
    "default_slow_mode_seconds": "string",
    "group_permissions": [
      {
        "permission_type": 0,
        "group_name": "string",
        "group_id": 0
      }
    ],
    "email_in": "string",
    "email_in_allow_strangers": true,
    "mailinglist_mirror": true,
    "all_topics_wiki": true,
    "can_delete": true,
    "allow_badges": true,
    "topic_featured_link_allowed": true,
    "search_priority": 0,
    "topic_posting_review_group_ids": [
      0
    ],
    "reply_posting_review_group_ids": [
      0
    ],
    "uploaded_logo": "string",
    "uploaded_logo_dark": "string",
    "uploaded_background": "string",
    "uploaded_background_dark": "string",
    "category_types": {},
    "category_type_settings": {},
    "available_category_types": [
      {
        "id": "string",
        "name": "string",
        "title": "string",
        "description": "string",
        "icon": "string",
        "available": true,
        "visible": true,
        "configuration_schema": {}
      }
    ]
  }
}
```

<h3 id="show-category-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|response|Inline|

<h3 id="show-category-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|category|object|true|none|none|
|» id|integer|true|none|none|
|» name|string|true|none|none|
|» color|string|true|none|none|
|» text_color|string|true|none|none|
|» style_type|string|true|none|none|
|» emoji|string \| null|true|none|none|
|» icon|string \| null|true|none|none|
|» slug|string|true|none|none|
|» locale|string \| null|false|none|none|
|» topic_count|integer|true|none|none|
|» post_count|integer|true|none|none|
|» position|integer|true|none|none|
|» description|string \| null|true|none|none|
|» description_text|string \| null|true|none|none|
|» description_excerpt|string \| null|true|none|none|
|» topic_url|string \| null|true|none|none|
|» read_restricted|boolean|true|none|none|
|» permission|integer \| null|true|none|none|
|» notification_level|integer|true|none|none|
|» can_edit|boolean|true|none|none|
|» topic_template|string \| null|true|none|none|
|» topic_title_placeholder|string \| null|true|none|none|
|» form_template_ids|[object]|false|none|none|
|» has_children|boolean \| null|true|none|none|
|» subcategory_count|integer \| null|true|none|none|
|» sort_order|string \| null|true|none|none|
|» sort_ascending|string \| null|true|none|none|
|» show_subcategory_list|boolean|true|none|none|
|» num_featured_topics|integer|true|none|none|
|» default_view|string \| null|true|none|none|
|» subcategory_list_style|string|true|none|none|
|» default_top_period|string|true|none|none|
|» default_list_filter|string|true|none|none|
|» minimum_required_tags|integer|true|none|none|
|» navigate_to_first_post_after_read|boolean|true|none|none|
|» custom_fields|object|true|none|none|
|» allowed_tags|[object]|false|none|none|
|» allowed_tag_groups|[object]|false|none|none|
|» allow_global_tags|boolean|false|none|none|
|» required_tag_groups|[object]|true|none|none|
|» » name|string|true|none|none|
|» » min_count|integer|true|none|none|
|» category_setting|object|false|none|none|
|» » auto_bump_cooldown_days|integer|false|none|none|
|» » num_auto_bump_daily|integer \| null|false|none|none|
|» » require_reply_approval|boolean \| null|false|none|none|
|» » require_topic_approval|boolean \| null|false|none|none|
|» » nested_replies_default|boolean \| null|false|none|none|
|» » topic_posting_review_mode|string|false|none|none|
|» » reply_posting_review_mode|string|false|none|none|
|» category_localizations|[object]|false|none|none|
|» read_only_banner|string \| null|true|none|none|
|» available_groups|[object]|true|none|none|
|» auto_close_hours|string \| null|true|none|none|
|» auto_close_based_on_last_post|boolean|true|none|none|
|» allow_unlimited_owner_edits_on_first_post|boolean|true|none|none|
|» default_slow_mode_seconds|string \| null|true|none|none|
|» group_permissions|[object]|true|none|none|
|» » permission_type|integer|true|none|none|
|» » group_name|string|true|none|none|
|» » group_id|integer|true|none|none|
|» email_in|string \| null|true|none|none|
|» email_in_allow_strangers|boolean|true|none|none|
|» mailinglist_mirror|boolean|true|none|none|
|» all_topics_wiki|boolean|true|none|none|
|» can_delete|boolean|true|none|none|
|» allow_badges|boolean|true|none|none|
|» topic_featured_link_allowed|boolean|true|none|none|
|» search_priority|integer|true|none|none|
|» topic_posting_review_group_ids|[integer]|true|none|none|
|» reply_posting_review_group_ids|[integer]|true|none|none|
|» uploaded_logo|string \| null|true|none|none|
|» uploaded_logo_dark|string \| null|true|none|none|
|» uploaded_background|string \| null|true|none|none|
|» uploaded_background_dark|string \| null|true|none|none|
|» category_types|object|false|none|none|
|» category_type_settings|object|false|none|none|
|» available_category_types|[object]|false|none|none|
|» » id|string|true|none|none|
|» » name|string|true|none|none|
|» » title|string|true|none|none|
|» » description|string|true|none|none|
|» » icon|string|true|none|none|
|» » available|boolean|true|none|none|
|» » visible|boolean|true|none|none|
|» » configuration_schema|object|true|none|none|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="discourse-api-documentation-groups">Groups</h1>

## Create a group

<a id="opIdcreateGroup"></a>

> Code samples

```bash
curl https://discourse.example.com/admin/groups.json \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "group": {
      "name": "string",
      "full_name": "string",
      "bio_raw": "string",
      "usernames": "string",
      "owner_usernames": "string",
      "automatic_membership_email_domains": "string",
      "visibility_level": 0,
      "primary_group": true,
      "flair_icon": "string",
      "flair_upload_id": 0,
      "flair_bg_color": "string",
      "public_admission": true,
      "public_exit": true,
      "default_notification_level": 0,
      "muted_category_ids": [
        0
      ],
      "regular_category_ids": [
        0
      ],
      "watching_category_ids": [
        0
      ],
      "tracking_category_ids": [
        0
      ],
      "watching_first_post_category_ids": [
        0
      ]
    }
  }'
```

`POST /admin/groups.json`

> Body parameter

```json
{
  "group": {
    "name": "string",
    "full_name": "string",
    "bio_raw": "string",
    "usernames": "string",
    "owner_usernames": "string",
    "automatic_membership_email_domains": "string",
    "visibility_level": 0,
    "primary_group": true,
    "flair_icon": "string",
    "flair_upload_id": 0,
    "flair_bg_color": "string",
    "public_admission": true,
    "public_exit": true,
    "default_notification_level": 0,
    "muted_category_ids": [
      0
    ],
    "regular_category_ids": [
      0
    ],
    "watching_category_ids": [
      0
    ],
    "tracking_category_ids": [
      0
    ],
    "watching_first_post_category_ids": [
      0
    ]
  }
}
```

<h3 id="create-a-group-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» group|body|object|true|none|
|» » name|body|string|true|none|
|» » full_name|body|string|false|none|
|» » bio_raw|body|string|false|About Group|
|» » usernames|body|string|false|comma,separated|
|» » owner_usernames|body|string|false|comma,separated|
|» » automatic_membership_email_domains|body|string|false|pipe\|separated|
|» » visibility_level|body|integer|false|none|
|» » primary_group|body|boolean|false|none|
|» » flair_icon|body|string|false|none|
|» » flair_upload_id|body|integer|false|none|
|» » flair_bg_color|body|string|false|none|
|» » public_admission|body|boolean|false|none|
|» » public_exit|body|boolean|false|none|
|» » default_notification_level|body|integer|false|none|
|» » muted_category_ids|body|[integer]|false|none|
|» » regular_category_ids|body|[integer]|false|none|
|» » watching_category_ids|body|[integer]|false|none|
|» » tracking_category_ids|body|[integer]|false|none|
|» » watching_first_post_category_ids|body|[integer]|false|none|

> Example responses

> 200 Response

```json
{
  "basic_group": {
    "id": 0,
    "automatic": true,
    "name": "string",
    "user_count": 0,
    "mentionable_level": 0,
    "messageable_level": 0,
    "visibility_level": 0,
    "primary_group": true,
    "title": "string",
    "grant_trust_level": "string",
    "incoming_email": "string",
    "has_messages": true,
    "flair_url": "string",
    "flair_bg_color": "string",
    "flair_color": "string",
    "bio_raw": "string",
    "bio_cooked": "string",
    "bio_excerpt": "string",
    "public_admission": true,
    "public_exit": true,
    "allow_membership_requests": true,
    "full_name": "string",
    "default_notification_level": 0,
    "membership_request_template": "string",
    "members_visibility_level": 0,
    "can_see_members": true,
    "can_admin_group": true,
    "can_edit_group": true,
    "publish_read_state": true
  }
}
```

<h3 id="create-a-group-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|group created|Inline|

<h3 id="create-a-group-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|basic_group|object|true|none|none|
|» id|integer|true|none|none|
|» automatic|boolean|true|none|none|
|» name|string|true|none|none|
|» user_count|integer|true|none|none|
|» mentionable_level|integer|true|none|none|
|» messageable_level|integer|true|none|none|
|» visibility_level|integer|true|none|none|
|» primary_group|boolean|true|none|none|
|» title|string \| null|true|none|none|
|» grant_trust_level|string \| null|true|none|none|
|» incoming_email|string \| null|true|none|none|
|» has_messages|boolean|true|none|none|
|» flair_url|string \| null|true|none|none|
|» flair_bg_color|string \| null|true|none|none|
|» flair_color|string \| null|true|none|none|
|» bio_raw|string \| null|true|none|none|
|» bio_cooked|string \| null|true|none|none|
|» bio_excerpt|string \| null|true|none|none|
|» public_admission|boolean|true|none|none|
|» public_exit|boolean|true|none|none|
|» allow_membership_requests|boolean|true|none|none|
|» full_name|string \| null|true|none|none|
|» default_notification_level|integer|true|none|none|
|» membership_request_template|string \| null|true|none|none|
|» members_visibility_level|integer|true|none|none|
|» can_see_members|boolean|true|none|none|
|» can_admin_group|boolean|true|none|none|
|» can_edit_group|boolean|false|none|none|
|» publish_read_state|boolean|true|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Delete a group

<a id="opIddeleteGroup"></a>

> Code samples

```bash
curl https://discourse.example.com/admin/groups/0.json \
  -X DELETE \
  -H 'Accept: application/json'
```

`DELETE /admin/groups/{id}.json`

<h3 id="delete-a-group-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|none|

> Example responses

> 200 Response

```json
{
  "success": "OK"
}
```

<h3 id="delete-a-group-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|response|Inline|

<h3 id="delete-a-group-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|string|true|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Get a group

<a id="opIdgetGroup"></a>

> Code samples

```bash
curl https://discourse.example.com/groups/name.json \
  -H 'Accept: application/json'
```

`GET /groups/{name}.json`

<h3 id="get-a-group-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Use group name instead of id|

> Example responses

> 200 Response

```json
{
  "group": {
    "id": 0,
    "automatic": true,
    "name": "string",
    "user_count": 0,
    "mentionable_level": 0,
    "messageable_level": 0,
    "visibility_level": 0,
    "primary_group": true,
    "title": "string",
    "grant_trust_level": "string",
    "incoming_email": "string",
    "has_messages": true,
    "flair_url": "string",
    "flair_bg_color": "string",
    "flair_color": "string",
    "bio_raw": "string",
    "bio_cooked": "string",
    "bio_excerpt": "string",
    "public_admission": true,
    "public_exit": true,
    "allow_membership_requests": true,
    "full_name": "string",
    "default_notification_level": 0,
    "membership_request_template": "string",
    "is_group_user": true,
    "members_visibility_level": 0,
    "can_see_members": true,
    "can_admin_group": true,
    "can_edit_group": true,
    "publish_read_state": true,
    "is_group_owner_display": true,
    "mentionable": true,
    "messageable": true,
    "automatic_membership_email_domains": "string",
    "smtp_updated_at": "string",
    "smtp_updated_by": {},
    "smtp_enabled": true,
    "smtp_server": "string",
    "smtp_port": "string",
    "smtp_ssl_mode": 0,
    "email_username": "string",
    "email_from_alias": "string",
    "email_password": "string",
    "message_count": 0,
    "allow_unknown_sender_topic_replies": true,
    "associated_group_ids": [
      null
    ],
    "watching_category_ids": [
      null
    ],
    "tracking_category_ids": [
      null
    ],
    "watching_first_post_category_ids": [
      null
    ],
    "regular_category_ids": [
      null
    ],
    "muted_category_ids": [
      null
    ],
    "watching_tags": [
      null
    ],
    "watching_first_post_tags": [
      null
    ],
    "tracking_tags": [
      null
    ],
    "regular_tags": [
      null
    ],
    "muted_tags": [
      null
    ]
  },
  "extras": {
    "visible_group_names": [
      null
    ]
  }
}
```

<h3 id="get-a-group-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|success response|Inline|

<h3 id="get-a-group-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|group|object|true|none|none|
|» id|integer|true|none|none|
|» automatic|boolean|true|none|none|
|» name|string|true|none|none|
|» user_count|integer|false|none|none|
|» mentionable_level|integer|true|none|none|
|» messageable_level|integer|true|none|none|
|» visibility_level|integer|true|none|none|
|» primary_group|boolean|true|none|none|
|» title|string \| null|true|none|none|
|» grant_trust_level|string \| null|true|none|none|
|» incoming_email|string \| null|true|none|none|
|» has_messages|boolean|true|none|none|
|» flair_url|string \| null|true|none|none|
|» flair_bg_color|string \| null|true|none|none|
|» flair_color|string \| null|true|none|none|
|» bio_raw|string \| null|true|none|none|
|» bio_cooked|string \| null|true|none|none|
|» bio_excerpt|string \| null|true|none|none|
|» public_admission|boolean|true|none|none|
|» public_exit|boolean|true|none|none|
|» allow_membership_requests|boolean|true|none|none|
|» full_name|string \| null|true|none|none|
|» default_notification_level|integer|true|none|none|
|» membership_request_template|string \| null|true|none|none|
|» is_group_user|boolean|true|none|none|
|» members_visibility_level|integer|true|none|none|
|» can_see_members|boolean|true|none|none|
|» can_admin_group|boolean|true|none|none|
|» can_edit_group|boolean|false|none|none|
|» publish_read_state|boolean|true|none|none|
|» is_group_owner_display|boolean|true|none|none|
|» mentionable|boolean|true|none|none|
|» messageable|boolean|true|none|none|
|» automatic_membership_email_domains|string \| null|true|none|none|
|» smtp_updated_at|string \| null|false|none|none|
|» smtp_updated_by|object \| null|false|none|none|
|» smtp_enabled|boolean|false|none|none|
|» smtp_server|string \| null|true|none|none|
|» smtp_port|string \| null|true|none|none|
|» smtp_ssl_mode|integer \| null|true|none|none|
|» email_username|string \| null|true|none|none|
|» email_from_alias|string \| null|false|none|none|
|» email_password|string \| null|true|none|none|
|» message_count|integer|true|none|none|
|» allow_unknown_sender_topic_replies|boolean|true|none|none|
|» associated_group_ids|[object]|false|none|none|
|» watching_category_ids|[object]|true|none|none|
|» tracking_category_ids|[object]|true|none|none|
|» watching_first_post_category_ids|[object]|true|none|none|
|» regular_category_ids|[object]|true|none|none|
|» muted_category_ids|[object]|true|none|none|
|» watching_tags|[object]|false|none|none|
|» watching_first_post_tags|[object]|false|none|none|
|» tracking_tags|[object]|false|none|none|
|» regular_tags|[object]|false|none|none|
|» muted_tags|[object]|false|none|none|
|extras|object|true|none|none|
|» visible_group_names|[object]|true|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Update a group

<a id="opIdupdateGroup"></a>

> Code samples

```bash
curl https://discourse.example.com/groups/0.json \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "group": {
      "name": "string",
      "full_name": "string",
      "bio_raw": "string",
      "usernames": "string",
      "owner_usernames": "string",
      "automatic_membership_email_domains": "string",
      "visibility_level": 0,
      "primary_group": true,
      "flair_icon": "string",
      "flair_upload_id": 0,
      "flair_bg_color": "string",
      "public_admission": true,
      "public_exit": true,
      "default_notification_level": 0,
      "muted_category_ids": [
        0
      ],
      "regular_category_ids": [
        0
      ],
      "watching_category_ids": [
        0
      ],
      "tracking_category_ids": [
        0
      ],
      "watching_first_post_category_ids": [
        0
      ]
    }
  }'
```

`PUT /groups/{id}.json`

> Body parameter

```json
{
  "group": {
    "name": "string",
    "full_name": "string",
    "bio_raw": "string",
    "usernames": "string",
    "owner_usernames": "string",
    "automatic_membership_email_domains": "string",
    "visibility_level": 0,
    "primary_group": true,
    "flair_icon": "string",
    "flair_upload_id": 0,
    "flair_bg_color": "string",
    "public_admission": true,
    "public_exit": true,
    "default_notification_level": 0,
    "muted_category_ids": [
      0
    ],
    "regular_category_ids": [
      0
    ],
    "watching_category_ids": [
      0
    ],
    "tracking_category_ids": [
      0
    ],
    "watching_first_post_category_ids": [
      0
    ]
  }
}
```

<h3 id="update-a-group-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|none|
|body|body|object|false|none|
|» group|body|object|true|none|
|» » name|body|string|true|none|
|» » full_name|body|string|false|none|
|» » bio_raw|body|string|false|About Group|
|» » usernames|body|string|false|comma,separated|
|» » owner_usernames|body|string|false|comma,separated|
|» » automatic_membership_email_domains|body|string|false|pipe\|separated|
|» » visibility_level|body|integer|false|none|
|» » primary_group|body|boolean|false|none|
|» » flair_icon|body|string|false|none|
|» » flair_upload_id|body|integer|false|none|
|» » flair_bg_color|body|string|false|none|
|» » public_admission|body|boolean|false|none|
|» » public_exit|body|boolean|false|none|
|» » default_notification_level|body|integer|false|none|
|» » muted_category_ids|body|[integer]|false|none|
|» » regular_category_ids|body|[integer]|false|none|
|» » watching_category_ids|body|[integer]|false|none|
|» » tracking_category_ids|body|[integer]|false|none|
|» » watching_first_post_category_ids|body|[integer]|false|none|

> Example responses

> 200 Response

```json
{
  "success": "OK"
}
```

<h3 id="update-a-group-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|success response|Inline|

<h3 id="update-a-group-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|string|true|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Get a group by id

<a id="opIdgetGroupById"></a>

> Code samples

```bash
curl https://discourse.example.com/groups/by-id/name.json \
  -H 'Accept: application/json'
```

`GET /groups/by-id/{id}.json`

<h3 id="get-a-group-by-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Use group name instead of id|

> Example responses

> 200 Response

```json
{
  "group": {
    "id": 0,
    "automatic": true,
    "name": "string",
    "user_count": 0,
    "mentionable_level": 0,
    "messageable_level": 0,
    "visibility_level": 0,
    "primary_group": true,
    "title": "string",
    "grant_trust_level": "string",
    "incoming_email": "string",
    "has_messages": true,
    "flair_url": "string",
    "flair_bg_color": "string",
    "flair_color": "string",
    "bio_raw": "string",
    "bio_cooked": "string",
    "bio_excerpt": "string",
    "public_admission": true,
    "public_exit": true,
    "allow_membership_requests": true,
    "full_name": "string",
    "default_notification_level": 0,
    "membership_request_template": "string",
    "is_group_user": true,
    "members_visibility_level": 0,
    "can_see_members": true,
    "can_admin_group": true,
    "can_edit_group": true,
    "publish_read_state": true,
    "is_group_owner_display": true,
    "mentionable": true,
    "messageable": true,
    "automatic_membership_email_domains": "string",
    "smtp_updated_at": "string",
    "smtp_updated_by": {},
    "smtp_enabled": true,
    "smtp_server": "string",
    "smtp_port": "string",
    "smtp_ssl_mode": 0,
    "email_username": "string",
    "email_from_alias": "string",
    "email_password": "string",
    "message_count": 0,
    "allow_unknown_sender_topic_replies": true,
    "associated_group_ids": [
      null
    ],
    "watching_category_ids": [
      null
    ],
    "tracking_category_ids": [
      null
    ],
    "watching_first_post_category_ids": [
      null
    ],
    "regular_category_ids": [
      null
    ],
    "muted_category_ids": [
      null
    ],
    "watching_tags": [
      null
    ],
    "watching_first_post_tags": [
      null
    ],
    "tracking_tags": [
      null
    ],
    "regular_tags": [
      null
    ],
    "muted_tags": [
      null
    ]
  },
  "extras": {
    "visible_group_names": [
      null
    ]
  }
}
```

<h3 id="get-a-group-by-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|success response (by id)|Inline|

<h3 id="get-a-group-by-id-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|group|object|true|none|none|
|» id|integer|true|none|none|
|» automatic|boolean|true|none|none|
|» name|string|true|none|none|
|» user_count|integer|false|none|none|
|» mentionable_level|integer|true|none|none|
|» messageable_level|integer|true|none|none|
|» visibility_level|integer|true|none|none|
|» primary_group|boolean|true|none|none|
|» title|string \| null|true|none|none|
|» grant_trust_level|string \| null|true|none|none|
|» incoming_email|string \| null|true|none|none|
|» has_messages|boolean|true|none|none|
|» flair_url|string \| null|true|none|none|
|» flair_bg_color|string \| null|true|none|none|
|» flair_color|string \| null|true|none|none|
|» bio_raw|string \| null|true|none|none|
|» bio_cooked|string \| null|true|none|none|
|» bio_excerpt|string \| null|true|none|none|
|» public_admission|boolean|true|none|none|
|» public_exit|boolean|true|none|none|
|» allow_membership_requests|boolean|true|none|none|
|» full_name|string \| null|true|none|none|
|» default_notification_level|integer|true|none|none|
|» membership_request_template|string \| null|true|none|none|
|» is_group_user|boolean|true|none|none|
|» members_visibility_level|integer|true|none|none|
|» can_see_members|boolean|true|none|none|
|» can_admin_group|boolean|true|none|none|
|» can_edit_group|boolean|false|none|none|
|» publish_read_state|boolean|true|none|none|
|» is_group_owner_display|boolean|true|none|none|
|» mentionable|boolean|true|none|none|
|» messageable|boolean|true|none|none|
|» automatic_membership_email_domains|string \| null|true|none|none|
|» smtp_updated_at|string \| null|false|none|none|
|» smtp_updated_by|object \| null|false|none|none|
|» smtp_enabled|boolean|false|none|none|
|» smtp_server|string \| null|true|none|none|
|» smtp_port|string \| null|true|none|none|
|» smtp_ssl_mode|integer \| null|true|none|none|
|» email_username|string \| null|true|none|none|
|» email_from_alias|string \| null|false|none|none|
|» email_password|string \| null|true|none|none|
|» message_count|integer|true|none|none|
|» allow_unknown_sender_topic_replies|boolean|true|none|none|
|» associated_group_ids|[object]|false|none|none|
|» watching_category_ids|[object]|true|none|none|
|» tracking_category_ids|[object]|true|none|none|
|» watching_first_post_category_ids|[object]|true|none|none|
|» regular_category_ids|[object]|true|none|none|
|» muted_category_ids|[object]|true|none|none|
|» watching_tags|[object]|false|none|none|
|» watching_first_post_tags|[object]|false|none|none|
|» tracking_tags|[object]|false|none|none|
|» regular_tags|[object]|false|none|none|
|» muted_tags|[object]|false|none|none|
|extras|object|true|none|none|
|» visible_group_names|[object]|true|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## List group members

<a id="opIdlistGroupMembers"></a>

> Code samples

```bash
curl https://discourse.example.com/groups/name/members.json \
  -H 'Accept: application/json'
```

`GET /groups/{name}/members.json`

<h3 id="list-group-members-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Use group name instead of id|

> Example responses

> 200 Response

```json
{
  "members": [
    {
      "id": 0,
      "username": "string",
      "name": "string",
      "avatar_template": "string",
      "title": "string",
      "last_posted_at": "string",
      "last_seen_at": "string",
      "added_at": "string",
      "timezone": "string"
    }
  ],
  "owners": [
    {
      "id": 0,
      "username": "string",
      "name": "string",
      "avatar_template": "string",
      "title": "string",
      "last_posted_at": "string",
      "last_seen_at": "string",
      "added_at": "string",
      "timezone": "string"
    }
  ],
  "meta": {
    "total": 0,
    "limit": 0,
    "offset": 0
  }
}
```

<h3 id="list-group-members-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|success response|Inline|

<h3 id="list-group-members-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|members|[object]|true|none|none|
|» id|integer|true|none|none|
|» username|string|true|none|none|
|» name|string \| null|true|none|none|
|» avatar_template|string|true|none|none|
|» title|string \| null|true|none|none|
|» last_posted_at|string|true|none|none|
|» last_seen_at|string|true|none|none|
|» added_at|string|true|none|none|
|» timezone|string|true|none|none|
|owners|[object]|true|none|none|
|» id|integer|true|none|none|
|» username|string|true|none|none|
|» name|string \| null|true|none|none|
|» avatar_template|string|true|none|none|
|» title|string \| null|true|none|none|
|» last_posted_at|string|true|none|none|
|» last_seen_at|string|true|none|none|
|» added_at|string|true|none|none|
|» timezone|string|true|none|none|
|meta|object|true|none|none|
|» total|integer|true|none|none|
|» limit|integer|true|none|none|
|» offset|integer|true|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Add group members

<a id="opIdaddGroupMembers"></a>

> Code samples

```bash
curl https://discourse.example.com/groups/0/members.json \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "usernames": "username1,username2"
  }'
```

`PUT /groups/{id}/members.json`

> Body parameter

```json
{
  "usernames": "username1,username2"
}
```

<h3 id="add-group-members-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|none|
|body|body|object|false|none|
|» usernames|body|string|false|comma separated list|

> Example responses

> 200 Response

```json
{
  "success": "string",
  "usernames": [
    null
  ],
  "emails": [
    null
  ]
}
```

<h3 id="add-group-members-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|success response|Inline|

<h3 id="add-group-members-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|string|true|none|none|
|usernames|[object]|true|none|none|
|emails|[object]|true|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Remove group members

<a id="opIdremoveGroupMembers"></a>

> Code samples

```bash
curl https://discourse.example.com/groups/0/members.json \
  -X DELETE \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "usernames": "username1,username2"
  }'
```

`DELETE /groups/{id}/members.json`

> Body parameter

```json
{
  "usernames": "username1,username2"
}
```

<h3 id="remove-group-members-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|none|
|body|body|object|false|none|
|» usernames|body|string|false|comma separated list|

> Example responses

> 200 Response

```json
{
  "success": "string",
  "usernames": [
    null
  ],
  "skipped_usernames": [
    null
  ]
}
```

<h3 id="remove-group-members-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|success response|Inline|

<h3 id="remove-group-members-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|string|true|none|none|
|usernames|[object]|true|none|none|
|skipped_usernames|[object]|true|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## List groups

<a id="opIdlistGroups"></a>

> Code samples

```bash
curl https://discourse.example.com/groups.json \
  -H 'Accept: application/json'
```

`GET /groups.json`

> Example responses

> 200 Response

```json
{
  "groups": [
    {
      "id": 0,
      "automatic": true,
      "name": "string",
      "display_name": "string",
      "user_count": 0,
      "mentionable_level": 0,
      "messageable_level": 0,
      "visibility_level": 0,
      "primary_group": true,
      "title": "string",
      "grant_trust_level": "string",
      "incoming_email": "string",
      "has_messages": true,
      "flair_url": "string",
      "flair_bg_color": "string",
      "flair_color": "string",
      "bio_raw": "string",
      "bio_cooked": "string",
      "bio_excerpt": "string",
      "public_admission": true,
      "public_exit": true,
      "allow_membership_requests": true,
      "full_name": "string",
      "default_notification_level": 0,
      "membership_request_template": "string",
      "is_group_user": true,
      "is_group_owner": true,
      "members_visibility_level": 0,
      "can_see_members": true,
      "can_admin_group": true,
      "can_edit_group": true,
      "publish_read_state": true
    }
  ],
  "extras": {
    "type_filters": [
      null
    ]
  },
  "total_rows_groups": 0,
  "load_more_groups": "string"
}
```

<h3 id="list-groups-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|response|Inline|

<h3 id="list-groups-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|groups|[object]|true|none|none|
|» id|integer|true|none|none|
|» automatic|boolean|true|none|none|
|» name|string|true|none|none|
|» display_name|string|true|none|none|
|» user_count|integer|false|none|none|
|» mentionable_level|integer|true|none|none|
|» messageable_level|integer|true|none|none|
|» visibility_level|integer|true|none|none|
|» primary_group|boolean|true|none|none|
|» title|string \| null|true|none|none|
|» grant_trust_level|string \| null|true|none|none|
|» incoming_email|string \| null|true|none|none|
|» has_messages|boolean|true|none|none|
|» flair_url|string \| null|true|none|none|
|» flair_bg_color|string \| null|true|none|none|
|» flair_color|string \| null|true|none|none|
|» bio_raw|string \| null|true|none|none|
|» bio_cooked|string \| null|true|none|none|
|» bio_excerpt|string \| null|true|none|none|
|» public_admission|boolean|true|none|none|
|» public_exit|boolean|true|none|none|
|» allow_membership_requests|boolean|true|none|none|
|» full_name|string \| null|true|none|none|
|» default_notification_level|integer|true|none|none|
|» membership_request_template|string \| null|true|none|none|
|» is_group_user|boolean|false|none|none|
|» is_group_owner|boolean|false|none|none|
|» members_visibility_level|integer|true|none|none|
|» can_see_members|boolean|true|none|none|
|» can_admin_group|boolean|true|none|none|
|» can_edit_group|boolean|false|none|none|
|» publish_read_state|boolean|true|none|none|
|extras|object|true|none|none|
|» type_filters|[object]|true|none|none|
|total_rows_groups|integer|true|none|none|
|load_more_groups|string|true|none|none|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="discourse-api-documentation-invites">Invites</h1>

## Create an invite

<a id="opIdcreateInvite"></a>

> Code samples

```bash
curl https://discourse.example.com/invites.json \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'Api-Key: string' \
  -H 'Api-Username: string' \
  -d '{
    "email": "not-a-user-yet@example.com",
    "skip_email": false,
    "custom_message": "string",
    "max_redemptions_allowed": 5,
    "topic_id": 0,
    "group_ids": "42,43",
    "group_names": "foo,bar",
    "expires_at": "string"
  }'
```

`POST /invites.json`

> Body parameter

```json
{
  "email": "not-a-user-yet@example.com",
  "skip_email": false,
  "custom_message": "string",
  "max_redemptions_allowed": 5,
  "topic_id": 0,
  "group_ids": "42,43",
  "group_names": "foo,bar",
  "expires_at": "string"
}
```

<h3 id="create-an-invite-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Api-Key|header|string|true|none|
|Api-Username|header|string|true|none|
|body|body|object|false|none|
|» email|body|string|false|required for email invites only|
|» skip_email|body|boolean|false|none|
|» custom_message|body|string|false|optional, for email invites|
|» max_redemptions_allowed|body|integer|false|optional, for link invites|
|» topic_id|body|integer|false|none|
|» group_ids|body|string|false|Optional, either this or `group_names`. Comma separated<br>list for multiple ids.|
|» group_names|body|string|false|Optional, either this or `group_ids`. Comma separated<br>list for multiple names.|
|» expires_at|body|string|false|optional, if not supplied, the invite_expiry_days site<br>setting is used|

> Example responses

> 200 Response

```json
{
  "id": 42,
  "invite_key": "string",
  "link": "http://example.com/invites/9045fd767efe201ca60c6658bcf14158",
  "description": "string",
  "email": "not-a-user-yet@example.com",
  "domain": "string",
  "emailed": false,
  "can_delete_invite": true,
  "custom_message": "Hello world!",
  "created_at": "2021-01-01T12:00:00.000Z",
  "updated_at": "2021-01-01T12:00:00.000Z",
  "expires_at": "2021-02-01T12:00:00.000Z",
  "expired": false,
  "grants_admin": false,
  "grants_moderator": false,
  "topics": [],
  "groups": []
}
```

<h3 id="create-an-invite-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|success response|Inline|

<h3 id="create-an-invite-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer|true|none|none|
|invite_key|string|true|none|none|
|link|string|true|none|none|
|description|string \| null|true|none|none|
|email|string|true|none|none|
|domain|string \| null|true|none|none|
|emailed|boolean|true|none|none|
|can_delete_invite|boolean|true|none|none|
|custom_message|string \| null|true|none|none|
|created_at|string|true|none|none|
|updated_at|string|true|none|none|
|expires_at|string|true|none|none|
|expired|boolean|true|none|none|
|grants_admin|boolean|true|none|none|
|grants_moderator|boolean|true|none|none|
|topics|[object]|true|none|none|
|groups|[object]|true|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Create multiple invites

<a id="opIdcreateMultipleInvites"></a>

> Code samples

```bash
curl https://discourse.example.com/invites/create-multiple.json \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'Api-Key: string' \
  -H 'Api-Username: string' \
  -d '{
    "email": [
      "not-a-user-yet-1@example.com",
      "not-a-user-yet-2@example.com"
    ],
    "skip_email": false,
    "custom_message": "string",
    "max_redemptions_allowed": 5,
    "topic_id": 0,
    "group_ids": "42,43",
    "group_names": "foo,bar",
    "expires_at": "string"
  }'
```

`POST /invites/create-multiple.json`

> Body parameter

```json
{
  "email": [
    "not-a-user-yet-1@example.com",
    "not-a-user-yet-2@example.com"
  ],
  "skip_email": false,
  "custom_message": "string",
  "max_redemptions_allowed": 5,
  "topic_id": 0,
  "group_ids": "42,43",
  "group_names": "foo,bar",
  "expires_at": "string"
}
```

<h3 id="create-multiple-invites-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Api-Key|header|string|true|none|
|Api-Username|header|string|true|none|
|body|body|object|false|none|
|» email|body|string|false|pass 1 email per invite to be generated. other properties<br>will be shared by each invite.|
|» skip_email|body|boolean|false|none|
|» custom_message|body|string|false|optional, for email invites|
|» max_redemptions_allowed|body|integer|false|optional, for link invites|
|» topic_id|body|integer|false|none|
|» group_ids|body|string|false|Optional, either this or `group_names`. Comma separated<br>list for multiple ids.|
|» group_names|body|string|false|Optional, either this or `group_ids`. Comma separated<br>list for multiple names.|
|» expires_at|body|string|false|optional, if not supplied, the invite_expiry_days site<br>setting is used|

> Example responses

> 200 Response

```json
{
  "num_successfully_created_invitations": 42,
  "num_failed_invitations": 42,
  "failed_invitations": [],
  "successful_invitations": [
    {
      "id": 42,
      "link": "http://example.com/invites/9045fd767efe201ca60c6658bcf14158",
      "email": "not-a-user-yet-1@example.com",
      "emailed": true,
      "custom_message": "Hello world!",
      "topics": [],
      "groups": [],
      "created_at": "2021-01-01T12:00:00.000Z",
      "updated_at": "2021-01-01T12:00:00.000Z",
      "expires_at": "2021-02-01T12:00:00.000Z",
      "expired": false
    },
    {
      "id": 42,
      "link": "http://example.com/invites/c6658bcf141589045fd767efe201ca60",
      "email": "not-a-user-yet-2@example.com",
      "emailed": true,
      "custom_message": "Hello world!",
      "topics": [],
      "groups": [],
      "created_at": "2021-01-01T12:00:00.000Z",
      "updated_at": "2021-01-01T12:00:00.000Z",
      "expires_at": "2021-02-01T12:00:00.000Z",
      "expired": false
    }
  ]
}
```

<h3 id="create-multiple-invites-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|success response|Inline|

<h3 id="create-multiple-invites-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|num_successfully_created_invitations|integer|false|none|none|
|num_failed_invitations|integer|false|none|none|
|failed_invitations|[object]|false|none|none|
|successful_invitations|array|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="discourse-api-documentation-notifications">Notifications</h1>

## Get the notifications that belong to the current user

<a id="opIdgetNotifications"></a>

> Code samples

```bash
curl https://discourse.example.com/notifications.json \
  -H 'Accept: application/json'
```

`GET /notifications.json`

> Example responses

> 200 Response

```json
{
  "notifications": [
    {
      "id": 0,
      "user_id": 0,
      "notification_type": 0,
      "read": true,
      "created_at": "string",
      "post_number": 0,
      "topic_id": 0,
      "slug": "string",
      "data": {
        "badge_id": 0,
        "badge_name": "string",
        "badge_slug": "string",
        "badge_title": true,
        "username": "string"
      }
    }
  ],
  "total_rows_notifications": 0,
  "seen_notification_id": 0,
  "load_more_notifications": "string"
}
```

<h3 id="get-the-notifications-that-belong-to-the-current-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|notifications|Inline|

<h3 id="get-the-notifications-that-belong-to-the-current-user-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|notifications|[object]|false|none|none|
|» id|integer|false|none|none|
|» user_id|integer|false|none|none|
|» notification_type|integer|false|none|none|
|» read|boolean|false|none|none|
|» created_at|string|false|none|none|
|» post_number|integer \| null|false|none|none|
|» topic_id|integer \| null|false|none|none|
|» slug|string \| null|false|none|none|
|» data|object|false|none|none|
|» » badge_id|integer|false|none|none|
|» » badge_name|string|false|none|none|
|» » badge_slug|string|false|none|none|
|» » badge_title|boolean|false|none|none|
|» » username|string|false|none|none|
|total_rows_notifications|integer|false|none|none|
|seen_notification_id|integer|false|none|none|
|load_more_notifications|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Mark notifications as read

<a id="opIdmarkNotificationsAsRead"></a>

> Code samples

```bash
curl https://discourse.example.com/notifications/mark-read.json \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "id": 0
  }'
```

`PUT /notifications/mark-read.json`

> Body parameter

```json
{
  "id": 0
}
```

<h3 id="mark-notifications-as-read-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» id|body|integer|false|(optional) Leave off to mark all notifications as<br>read|

> Example responses

> 200 Response

```json
{
  "success": "string"
}
```

<h3 id="mark-notifications-as-read-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|notifications marked read|Inline|

<h3 id="mark-notifications-as-read-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="discourse-api-documentation-posts">Posts</h1>

## List latest posts across topics

<a id="opIdlistPosts"></a>

> Code samples

```bash
curl https://discourse.example.com/posts.json \
  -H 'Accept: application/json'
```

`GET /posts.json`

<h3 id="list-latest-posts-across-topics-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|before|query|integer|false|Load posts with an id lower than this value. Useful for pagination.|

> Example responses

> 200 Response

```json
{
  "latest_posts": [
    {
      "id": 0,
      "name": "string",
      "username": "string",
      "avatar_template": "string",
      "created_at": "string",
      "cooked": "string",
      "post_number": 0,
      "post_type": 0,
      "posts_count": 0,
      "updated_at": "string",
      "reply_count": 0,
      "reply_to_post_number": "string",
      "quote_count": 0,
      "incoming_link_count": 0,
      "reads": 0,
      "readers_count": 0,
      "score": 0,
      "yours": true,
      "topic_id": 0,
      "topic_slug": "string",
      "topic_title": "string",
      "topic_html_title": "string",
      "category_id": 0,
      "display_username": "string",
      "primary_group_name": "string",
      "flair_name": "string",
      "flair_url": "string",
      "flair_bg_color": "string",
      "flair_color": "string",
      "flair_group_id": "string",
      "badges_granted": [
        null
      ],
      "version": 0,
      "can_edit": true,
      "can_delete": true,
      "can_recover": true,
      "can_see_hidden_post": true,
      "can_wiki": true,
      "user_title": "string",
      "bookmarked": true,
      "raw": "string",
      "actions_summary": [
        {
          "id": 0,
          "can_act": true
        }
      ],
      "moderator": true,
      "admin": true,
      "staff": true,
      "user_id": 0,
      "hidden": true,
      "trust_level": 0,
      "deleted_at": "string",
      "user_deleted": true,
      "edit_reason": "string",
      "can_view_edit_history": true,
      "wiki": true,
      "excerpt": "string",
      "truncated": true,
      "reviewable_id": "string",
      "reviewable_score_count": 0,
      "reviewable_score_pending_count": 0,
      "post_url": "string"
    }
  ]
}
```

<h3 id="list-latest-posts-across-topics-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|latest posts|Inline|

<h3 id="list-latest-posts-across-topics-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|latest_posts|[object]|true|none|none|
|» id|integer|true|none|none|
|» name|string \| null|true|none|none|
|» username|string|true|none|none|
|» avatar_template|string|true|none|none|
|» created_at|string|true|none|none|
|» cooked|string|true|none|none|
|» post_number|integer|true|none|none|
|» post_type|integer|true|none|none|
|» posts_count|integer|true|none|none|
|» updated_at|string|true|none|none|
|» reply_count|integer|true|none|none|
|» reply_to_post_number|string \| null|true|none|none|
|» quote_count|integer|true|none|none|
|» incoming_link_count|integer|true|none|none|
|» reads|integer|true|none|none|
|» readers_count|integer|true|none|none|
|» score|number|true|none|none|
|» yours|boolean|true|none|none|
|» topic_id|integer|true|none|none|
|» topic_slug|string|true|none|none|
|» topic_title|string|true|none|none|
|» topic_html_title|string|true|none|none|
|» category_id|integer|true|none|none|
|» display_username|string \| null|true|none|none|
|» primary_group_name|string \| null|true|none|none|
|» flair_name|string \| null|true|none|none|
|» flair_url|string \| null|true|none|none|
|» flair_bg_color|string \| null|true|none|none|
|» flair_color|string \| null|true|none|none|
|» flair_group_id|string \| null|true|none|none|
|» badges_granted|[object]|true|none|none|
|» version|integer|true|none|none|
|» can_edit|boolean|true|none|none|
|» can_delete|boolean|true|none|none|
|» can_recover|boolean|true|none|none|
|» can_see_hidden_post|boolean|true|none|none|
|» can_wiki|boolean|true|none|none|
|» user_title|string \| null|true|none|none|
|» bookmarked|boolean|true|none|none|
|» raw|string|true|none|none|
|» actions_summary|[object]|true|none|none|
|» » id|integer|true|none|none|
|» » can_act|boolean|true|none|none|
|» moderator|boolean|true|none|none|
|» admin|boolean|true|none|none|
|» staff|boolean|true|none|none|
|» user_id|integer|true|none|none|
|» hidden|boolean|true|none|none|
|» trust_level|integer|true|none|none|
|» deleted_at|string \| null|true|none|none|
|» user_deleted|boolean|true|none|none|
|» edit_reason|string \| null|true|none|none|
|» can_view_edit_history|boolean|true|none|none|
|» wiki|boolean|true|none|none|
|» excerpt|string|true|none|none|
|» truncated|boolean|true|none|none|
|» reviewable_id|string \| null|true|none|none|
|» reviewable_score_count|integer|true|none|none|
|» reviewable_score_pending_count|integer|true|none|none|
|» post_url|string|true|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Creates a new topic, a new post, or a private message

<a id="opIdcreateTopicPostPM"></a>

> Code samples

```bash
curl https://discourse.example.com/posts.json \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "title": "string",
    "raw": "string",
    "topic_id": 0,
    "category": 0,
    "target_recipients": "blake,sam",
    "target_usernames": "string",
    "archetype": "private_message",
    "created_at": "string",
    "reply_to_post_number": 0,
    "embed_url": "string",
    "external_id": "string",
    "auto_track": true
  }'
```

`POST /posts.json`

> Body parameter

```json
{
  "title": "string",
  "raw": "string",
  "topic_id": 0,
  "category": 0,
  "target_recipients": "blake,sam",
  "target_usernames": "string",
  "archetype": "private_message",
  "created_at": "string",
  "reply_to_post_number": 0,
  "embed_url": "string",
  "external_id": "string",
  "auto_track": true
}
```

<h3 id="creates-a-new-topic-a-new-post-or-a-private-message-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» title|body|string|false|Required if creating a new topic or new private message.|
|» raw|body|string|true|none|
|» topic_id|body|integer|false|Required if creating a new post.|
|» category|body|integer|false|Optional if creating a new topic, and ignored if creating<br>a new post.|
|» target_recipients|body|string|false|Required for private message, comma separated.|
|» target_usernames|body|string|false|**Deprecated.** Deprecated. Use target_recipients instead.|
|» archetype|body|string|false|Required for new private message.|
|» created_at|body|string|false|none|
|» reply_to_post_number|body|integer|false|Optional, the post number to reply to inside a topic.|
|» embed_url|body|string|false|Provide a URL from a remote system to associate a forum<br>topic with that URL, typically for using Discourse as a comments<br>system for an external blog.|
|» external_id|body|string|false|Provide an external_id from a remote system to associate<br>a forum topic with that id.|
|» auto_track|body|boolean|false|If false, the user will not track the topic. By default,<br>the user will track the topic.|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "name": "string",
  "username": "string",
  "avatar_template": "string",
  "created_at": "string",
  "raw": "string",
  "cooked": "string",
  "post_number": 0,
  "post_type": 0,
  "posts_count": 0,
  "updated_at": "string",
  "reply_count": 0,
  "reply_to_post_number": "string",
  "quote_count": 0,
  "incoming_link_count": 0,
  "reads": 0,
  "readers_count": 0,
  "score": 0,
  "yours": true,
  "topic_id": 0,
  "topic_slug": "string",
  "display_username": "string",
  "primary_group_name": "string",
  "flair_name": "string",
  "flair_url": "string",
  "flair_bg_color": "string",
  "flair_color": "string",
  "flair_group_id": 0,
  "badges_granted": [
    null
  ],
  "version": 0,
  "can_edit": true,
  "can_delete": true,
  "can_recover": true,
  "can_see_hidden_post": true,
  "can_wiki": true,
  "user_title": "string",
  "bookmarked": true,
  "actions_summary": [
    {
      "id": 0,
      "can_act": true
    }
  ],
  "moderator": true,
  "admin": true,
  "staff": true,
  "user_id": 0,
  "draft_sequence": 0,
  "hidden": true,
  "trust_level": 0,
  "deleted_at": "string",
  "user_deleted": true,
  "edit_reason": "string",
  "can_view_edit_history": true,
  "wiki": true,
  "reviewable_id": 0,
  "reviewable_score_count": 0,
  "reviewable_score_pending_count": 0,
  "post_url": "string",
  "post_localizations": [
    null
  ],
  "mentioned_users": [
    null
  ]
}
```

<h3 id="creates-a-new-topic-a-new-post-or-a-private-message-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|post created|Inline|

<h3 id="creates-a-new-topic-a-new-post-or-a-private-message-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer|true|none|none|
|name|string \| null|true|none|none|
|username|string|true|none|none|
|avatar_template|string|true|none|none|
|created_at|string|true|none|none|
|raw|string|false|none|none|
|cooked|string|true|none|none|
|post_number|integer|true|none|none|
|post_type|integer|true|none|none|
|posts_count|integer|true|none|none|
|updated_at|string|true|none|none|
|reply_count|integer|true|none|none|
|reply_to_post_number|string \| null|true|none|none|
|quote_count|integer|true|none|none|
|incoming_link_count|integer|true|none|none|
|reads|integer|true|none|none|
|readers_count|integer|true|none|none|
|score|number|true|none|none|
|yours|boolean|true|none|none|
|topic_id|integer|true|none|none|
|topic_slug|string|true|none|none|
|display_username|string \| null|true|none|none|
|primary_group_name|string \| null|true|none|none|
|flair_name|string \| null|true|none|none|
|flair_url|string \| null|true|none|none|
|flair_bg_color|string \| null|true|none|none|
|flair_color|string \| null|true|none|none|
|flair_group_id|integer \| null|false|none|none|
|badges_granted|[object]|false|none|none|
|version|integer|true|none|none|
|can_edit|boolean|true|none|none|
|can_delete|boolean|true|none|none|
|can_recover|boolean|true|none|none|
|can_see_hidden_post|boolean|false|none|none|
|can_wiki|boolean|true|none|none|
|user_title|string \| null|true|none|none|
|bookmarked|boolean|true|none|none|
|actions_summary|[object]|true|none|none|
|» id|integer|true|none|none|
|» can_act|boolean|true|none|none|
|moderator|boolean|true|none|none|
|admin|boolean|true|none|none|
|staff|boolean|true|none|none|
|user_id|integer|true|none|none|
|draft_sequence|integer|true|none|none|
|hidden|boolean|true|none|none|
|trust_level|integer|true|none|none|
|deleted_at|string \| null|true|none|none|
|user_deleted|boolean|true|none|none|
|edit_reason|string \| null|true|none|none|
|can_view_edit_history|boolean|true|none|none|
|wiki|boolean|true|none|none|
|reviewable_id|integer \| null|true|none|none|
|reviewable_score_count|integer|true|none|none|
|reviewable_score_pending_count|integer|true|none|none|
|post_url|string|true|none|none|
|post_localizations|[object]|false|none|none|
|mentioned_users|[object]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Retrieve a single post

<a id="opIdgetPost"></a>

> Code samples

```bash
curl https://discourse.example.com/posts/string.json \
  -H 'Accept: application/json'
```

`GET /posts/{id}.json`

This endpoint can be used to get the number of likes on a post using the
`actions_summary` property in the response. `actions_summary` responses
with the id of `2` signify a `like`. If there are no `actions_summary`
items with the id of `2`, that means there are 0 likes. Other ids likely
refer to various different flag types.


<h3 id="retrieve-a-single-post-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "username": "string",
  "avatar_template": "string",
  "created_at": "string",
  "cooked": "string",
  "post_number": 0,
  "post_type": 0,
  "posts_count": 0,
  "updated_at": "string",
  "reply_count": 0,
  "reply_to_post_number": "string",
  "quote_count": 0,
  "incoming_link_count": 0,
  "reads": 0,
  "readers_count": 0,
  "score": 0,
  "yours": true,
  "topic_id": 0,
  "topic_slug": "string",
  "primary_group_name": "string",
  "flair_name": "string",
  "flair_url": "string",
  "flair_bg_color": "string",
  "flair_color": "string",
  "flair_group_id": 0,
  "version": 0,
  "can_edit": true,
  "can_delete": true,
  "can_recover": true,
  "can_see_hidden_post": true,
  "can_wiki": true,
  "user_title": "string",
  "bookmarked": true,
  "raw": "string",
  "actions_summary": [
    {
      "id": 0,
      "count": 0,
      "acted": true,
      "can_undo": true,
      "can_act": true
    }
  ],
  "moderator": true,
  "admin": true,
  "staff": true,
  "user_id": 0,
  "hidden": true,
  "trust_level": 0,
  "deleted_at": "string",
  "user_deleted": true,
  "edit_reason": "string",
  "can_view_edit_history": true,
  "wiki": true,
  "reviewable_id": 0,
  "reviewable_score_count": 0,
  "reviewable_score_pending_count": 0,
  "post_url": "string",
  "mentioned_users": [
    null
  ],
  "name": "string",
  "display_username": "string"
}
```

<h3 id="retrieve-a-single-post-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|single reviewable post|Inline|

<h3 id="retrieve-a-single-post-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer|true|none|none|
|username|string|true|none|none|
|avatar_template|string|true|none|none|
|created_at|string|true|none|none|
|cooked|string|true|none|none|
|post_number|integer|true|none|none|
|post_type|integer|true|none|none|
|posts_count|integer|true|none|none|
|updated_at|string|true|none|none|
|reply_count|integer|true|none|none|
|reply_to_post_number|string \| null|true|none|none|
|quote_count|integer|true|none|none|
|incoming_link_count|integer|true|none|none|
|reads|integer|true|none|none|
|readers_count|integer|true|none|none|
|score|number|true|none|none|
|yours|boolean|true|none|none|
|topic_id|integer|true|none|none|
|topic_slug|string|true|none|none|
|primary_group_name|string \| null|true|none|none|
|flair_name|string \| null|true|none|none|
|flair_url|string \| null|true|none|none|
|flair_bg_color|string \| null|true|none|none|
|flair_color|string \| null|true|none|none|
|flair_group_id|integer \| null|false|none|none|
|version|integer|true|none|none|
|can_edit|boolean|true|none|none|
|can_delete|boolean|true|none|none|
|can_recover|boolean|true|none|none|
|can_see_hidden_post|boolean|false|none|none|
|can_wiki|boolean|true|none|none|
|user_title|string \| null|true|none|none|
|bookmarked|boolean|true|none|none|
|raw|string|true|none|none|
|actions_summary|[object]|true|none|none|
|» id|integer|true|none|`2`: like, `3`, `4`, `6`, `7`, `8`: flag|
|» count|integer|false|none|none|
|» acted|boolean|false|none|none|
|» can_undo|boolean|false|none|none|
|» can_act|boolean|false|none|none|
|moderator|boolean|true|none|none|
|admin|boolean|true|none|none|
|staff|boolean|true|none|none|
|user_id|integer|true|none|none|
|hidden|boolean|true|none|none|
|trust_level|integer|true|none|none|
|deleted_at|string \| null|true|none|none|
|user_deleted|boolean|true|none|none|
|edit_reason|string \| null|true|none|none|
|can_view_edit_history|boolean|true|none|none|
|wiki|boolean|true|none|none|
|reviewable_id|integer \| null|true|none|none|
|reviewable_score_count|integer|true|none|none|
|reviewable_score_pending_count|integer|true|none|none|
|post_url|string|true|none|none|
|mentioned_users|[object]|false|none|none|
|name|string \| null|false|none|none|
|display_username|string \| null|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Update a single post

<a id="opIdupdatePost"></a>

> Code samples

```bash
curl https://discourse.example.com/posts/string.json \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "post": {
      "raw": "string",
      "edit_reason": "string"
    },
    "bypass_bump": true
  }'
```

`PUT /posts/{id}.json`

> Body parameter

```json
{
  "post": {
    "raw": "string",
    "edit_reason": "string"
  },
  "bypass_bump": true
}
```

<h3 id="update-a-single-post-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|body|body|object|false|none|
|» post|body|object|false|none|
|» » raw|body|string|true|none|
|» » edit_reason|body|string|false|none|
|» bypass_bump|body|boolean|false|Skip bumping the topic when updating the post. Requires<br>staff or TL4 permissions.|

> Example responses

> 200 Response

```json
{
  "post": {
    "id": 0,
    "username": "string",
    "avatar_template": "string",
    "created_at": "string",
    "cooked": "string",
    "post_number": 0,
    "post_type": 0,
    "posts_count": 0,
    "updated_at": "string",
    "reply_count": 0,
    "reply_to_post_number": "string",
    "quote_count": 0,
    "incoming_link_count": 0,
    "reads": 0,
    "readers_count": 0,
    "score": 0,
    "yours": true,
    "topic_id": 0,
    "topic_slug": "string",
    "primary_group_name": "string",
    "flair_name": "string",
    "flair_url": "string",
    "flair_bg_color": "string",
    "flair_color": "string",
    "flair_group_id": 0,
    "badges_granted": [
      null
    ],
    "version": 0,
    "can_edit": true,
    "can_delete": true,
    "can_recover": true,
    "can_see_hidden_post": true,
    "can_wiki": true,
    "user_title": "string",
    "bookmarked": true,
    "raw": "string",
    "actions_summary": [
      {
        "id": 0,
        "can_act": true
      }
    ],
    "moderator": true,
    "admin": true,
    "staff": true,
    "user_id": 0,
    "draft_sequence": 0,
    "hidden": true,
    "trust_level": 0,
    "deleted_at": "string",
    "user_deleted": true,
    "edit_reason": "string",
    "can_view_edit_history": true,
    "wiki": true,
    "reviewable_id": 0,
    "reviewable_score_count": 0,
    "reviewable_score_pending_count": 0,
    "post_url": "string",
    "post_localizations": [
      null
    ],
    "mentioned_users": [
      null
    ],
    "name": "string",
    "display_username": "string"
  }
}
```

<h3 id="update-a-single-post-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|post updated|Inline|

<h3 id="update-a-single-post-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|post|object|true|none|none|
|» id|integer|true|none|none|
|» username|string|true|none|none|
|» avatar_template|string|true|none|none|
|» created_at|string|true|none|none|
|» cooked|string|true|none|none|
|» post_number|integer|true|none|none|
|» post_type|integer|true|none|none|
|» posts_count|integer|true|none|none|
|» updated_at|string|true|none|none|
|» reply_count|integer|true|none|none|
|» reply_to_post_number|string \| null|true|none|none|
|» quote_count|integer|true|none|none|
|» incoming_link_count|integer|true|none|none|
|» reads|integer|true|none|none|
|» readers_count|integer|true|none|none|
|» score|number|true|none|none|
|» yours|boolean|true|none|none|
|» topic_id|integer|true|none|none|
|» topic_slug|string|true|none|none|
|» primary_group_name|string \| null|true|none|none|
|» flair_name|string \| null|true|none|none|
|» flair_url|string \| null|true|none|none|
|» flair_bg_color|string \| null|true|none|none|
|» flair_color|string \| null|true|none|none|
|» flair_group_id|integer \| null|false|none|none|
|» badges_granted|[object]|false|none|none|
|» version|integer|true|none|none|
|» can_edit|boolean|true|none|none|
|» can_delete|boolean|true|none|none|
|» can_recover|boolean|true|none|none|
|» can_see_hidden_post|boolean|false|none|none|
|» can_wiki|boolean|true|none|none|
|» user_title|string \| null|true|none|none|
|» bookmarked|boolean|true|none|none|
|» raw|string|true|none|none|
|» actions_summary|[object]|true|none|none|
|» » id|integer|true|none|none|
|» » can_act|boolean|true|none|none|
|» moderator|boolean|true|none|none|
|» admin|boolean|true|none|none|
|» staff|boolean|true|none|none|
|» user_id|integer|true|none|none|
|» draft_sequence|integer|true|none|none|
|» hidden|boolean|true|none|none|
|» trust_level|integer|true|none|none|
|» deleted_at|string \| null|true|none|none|
|» user_deleted|boolean|true|none|none|
|» edit_reason|string \| null|true|none|none|
|» can_view_edit_history|boolean|true|none|none|
|» wiki|boolean|true|none|none|
|» reviewable_id|integer \| null|true|none|none|
|» reviewable_score_count|integer|true|none|none|
|» reviewable_score_pending_count|integer|true|none|none|
|» post_url|string|true|none|none|
|» post_localizations|[object]|false|none|none|
|» mentioned_users|[object]|false|none|none|
|» name|string \| null|false|none|none|
|» display_username|string \| null|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## delete a single post

<a id="opIddeletePost"></a>

> Code samples

```bash
curl https://discourse.example.com/posts/0.json \
  -X DELETE \
  -H 'Content-Type: application/json' \
  -d '{
    "force_destroy": true
  }'
```

`DELETE /posts/{id}.json`

> Body parameter

```json
{
  "force_destroy": true
}
```

<h3 id="delete-a-single-post-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|none|
|body|body|object|false|none|
|» force_destroy|body|boolean|false|The `SiteSetting.can_permanently_delete` needs to be<br>enabled first before this param can be used. Also this endpoint<br>needs to be called first without `force_destroy` and then followed<br>up with a second call 5 minutes later with `force_destroy` to<br>permanently delete.|

<h3 id="delete-a-single-post-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|success response|None|

<aside class="success">
This operation does not require authentication
</aside>

## List replies to a post

<a id="opIdpostReplies"></a>

> Code samples

```bash
curl https://discourse.example.com/posts/string/replies.json \
  -H 'Accept: application/json'
```

`GET /posts/{id}/replies.json`

<h3 id="list-replies-to-a-post-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|

> Example responses

> 200 Response

```json
[
  {
    "id": 0,
    "name": "string",
    "username": "string",
    "avatar_template": "string",
    "created_at": "string",
    "cooked": "string",
    "post_number": 0,
    "post_type": 0,
    "posts_count": 0,
    "updated_at": "string",
    "reply_count": 0,
    "reply_to_post_number": 0,
    "quote_count": 0,
    "incoming_link_count": 0,
    "reads": 0,
    "readers_count": 0,
    "score": 0,
    "yours": true,
    "topic_id": 0,
    "topic_slug": "string",
    "display_username": "string",
    "primary_group_name": "string",
    "flair_name": "string",
    "flair_url": "string",
    "flair_bg_color": "string",
    "flair_color": "string",
    "flair_group_id": 0,
    "version": 0,
    "can_edit": true,
    "can_delete": true,
    "can_recover": true,
    "can_see_hidden_post": true,
    "can_wiki": true,
    "user_title": "string",
    "reply_to_user": {
      "id": 0,
      "username": "string",
      "name": "string",
      "avatar_template": "string"
    },
    "bookmarked": true,
    "actions_summary": [
      {
        "id": 0,
        "can_act": true
      }
    ],
    "moderator": true,
    "admin": true,
    "staff": true,
    "user_id": 0,
    "hidden": true,
    "trust_level": 0,
    "deleted_at": "string",
    "user_deleted": true,
    "edit_reason": "string",
    "can_view_edit_history": true,
    "wiki": true,
    "reviewable_id": 0,
    "reviewable_score_count": 0,
    "reviewable_score_pending_count": 0,
    "post_url": "string"
  }
]
```

<h3 id="list-replies-to-a-post-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|post replies|Inline|

<h3 id="list-replies-to-a-post-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|
|» id|integer|true|none|none|
|» name|string \| null|true|none|none|
|» username|string|true|none|none|
|» avatar_template|string|true|none|none|
|» created_at|string|true|none|none|
|» cooked|string|true|none|none|
|» post_number|integer|true|none|none|
|» post_type|integer|true|none|none|
|» posts_count|integer|true|none|none|
|» updated_at|string|true|none|none|
|» reply_count|integer|true|none|none|
|» reply_to_post_number|integer|true|none|none|
|» quote_count|integer|true|none|none|
|» incoming_link_count|integer|true|none|none|
|» reads|integer|true|none|none|
|» readers_count|integer|true|none|none|
|» score|number|true|none|none|
|» yours|boolean|true|none|none|
|» topic_id|integer|true|none|none|
|» topic_slug|string|true|none|none|
|» display_username|string \| null|true|none|none|
|» primary_group_name|string \| null|true|none|none|
|» flair_name|string \| null|true|none|none|
|» flair_url|string \| null|true|none|none|
|» flair_bg_color|string \| null|true|none|none|
|» flair_color|string \| null|true|none|none|
|» flair_group_id|integer \| null|false|none|none|
|» version|integer|true|none|none|
|» can_edit|boolean|true|none|none|
|» can_delete|boolean|true|none|none|
|» can_recover|boolean|true|none|none|
|» can_see_hidden_post|boolean|true|none|none|
|» can_wiki|boolean|true|none|none|
|» user_title|string \| null|true|none|none|
|» reply_to_user|object|true|none|none|
|» » id|integer|false|none|none|
|» » username|string|true|none|none|
|» » name|string|false|none|none|
|» » avatar_template|string|true|none|none|
|» bookmarked|boolean|true|none|none|
|» actions_summary|[object]|true|none|none|
|» » id|integer|true|none|none|
|» » can_act|boolean|true|none|none|
|» moderator|boolean|true|none|none|
|» admin|boolean|true|none|none|
|» staff|boolean|true|none|none|
|» user_id|integer|true|none|none|
|» hidden|boolean|true|none|none|
|» trust_level|integer|true|none|none|
|» deleted_at|string \| null|true|none|none|
|» user_deleted|boolean|true|none|none|
|» edit_reason|string \| null|true|none|none|
|» can_view_edit_history|boolean|true|none|none|
|» wiki|boolean|true|none|none|
|» reviewable_id|integer \| null|true|none|none|
|» reviewable_score_count|integer|true|none|none|
|» reviewable_score_pending_count|integer|true|none|none|
|» post_url|string|true|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Lock a post from being edited

<a id="opIdlockPost"></a>

> Code samples

```bash
curl https://discourse.example.com/posts/string/locked.json \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'Api-Key: string' \
  -H 'Api-Username: string' \
  -d '{
    "locked": "string"
  }'
```

`PUT /posts/{id}/locked.json`

> Body parameter

```json
{
  "locked": "string"
}
```

<h3 id="lock-a-post-from-being-edited-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Api-Key|header|string|true|none|
|Api-Username|header|string|true|none|
|id|path|string|true|none|
|body|body|object|false|none|
|» locked|body|string|true|Whether to lock the post (true/false)|

> Example responses

> 200 Response

```json
{
  "locked": true
}
```

<h3 id="lock-a-post-from-being-edited-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|post updated|Inline|

<h3 id="lock-a-post-from-being-edited-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|locked|boolean|true|none|Whether the post is locked|

<aside class="success">
This operation does not require authentication
</aside>

## Like a post and other actions

<a id="opIdperformPostAction"></a>

> Code samples

```bash
curl https://discourse.example.com/post_actions.json \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'Api-Key: string' \
  -H 'Api-Username: string' \
  -d '{
    "id": 0,
    "post_action_type_id": 0,
    "flag_topic": true
  }'
```

`POST /post_actions.json`

> Body parameter

```json
{
  "id": 0,
  "post_action_type_id": 0,
  "flag_topic": true
}
```

<h3 id="like-a-post-and-other-actions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Api-Key|header|string|true|none|
|Api-Username|header|string|true|none|
|body|body|object|false|none|
|» id|body|integer|true|The ID of the post to perform the action on|
|» post_action_type_id|body|integer|true|The ID of the post action type (e.g., 2 for like)|
|» flag_topic|body|boolean|false|Whether to flag the entire topic|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "name": "string",
  "username": "string",
  "avatar_template": "string",
  "created_at": "string",
  "cooked": "string",
  "post_number": 0,
  "post_type": 0,
  "posts_count": 0,
  "updated_at": "string",
  "reply_count": 0,
  "reply_to_post_number": "string",
  "quote_count": 0,
  "incoming_link_count": 0,
  "reads": 0,
  "readers_count": 0,
  "score": 0,
  "yours": true,
  "topic_id": 0,
  "topic_slug": "string",
  "display_username": "string",
  "primary_group_name": "string",
  "flair_name": "string",
  "flair_url": "string",
  "flair_bg_color": "string",
  "flair_color": "string",
  "flair_group_id": 0,
  "badges_granted": [],
  "version": 0,
  "can_edit": true,
  "can_delete": true,
  "can_recover": true,
  "can_see_hidden_post": true,
  "can_wiki": true,
  "user_title": "string",
  "bookmarked": true,
  "actions_summary": [
    {
      "id": 0,
      "count": 0,
      "acted": true,
      "can_undo": true,
      "can_act": true
    }
  ],
  "moderator": true,
  "admin": true,
  "staff": true,
  "user_id": 0,
  "hidden": true,
  "trust_level": 0,
  "deleted_at": "string",
  "user_deleted": true,
  "edit_reason": "string",
  "can_view_edit_history": true,
  "wiki": true,
  "reviewable_id": 0,
  "reviewable_score_count": 0,
  "reviewable_score_pending_count": 0,
  "post_url": "string"
}
```

<h3 id="like-a-post-and-other-actions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|post updated|Inline|

<h3 id="like-a-post-and-other-actions-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer|true|none|The ID of the post|
|name|string|true|none|The name of the post author|
|username|string|true|none|The username of the post author|
|avatar_template|string|true|none|Template for the author's avatar URL|
|created_at|string|true|none|When the post was created|
|cooked|string|true|none|The HTML content of the post|
|post_number|integer|true|none|The post number within the topic|
|post_type|integer|true|none|The type of post|
|posts_count|integer|true|none|Total posts count for the user|
|updated_at|string|true|none|When the post was last updated|
|reply_count|integer|true|none|Number of replies to this post|
|reply_to_post_number|string \| null|true|none|Post number this post is replying to|
|quote_count|integer|true|none|Number of times this post has been quoted|
|incoming_link_count|integer|true|none|Number of incoming links to this post|
|reads|integer|true|none|Number of reads|
|readers_count|integer|true|none|Number of readers|
|score|number|true|none|Post score|
|yours|boolean|true|none|Whether this post belongs to the current user|
|topic_id|integer|true|none|ID of the topic this post belongs to|
|topic_slug|string|true|none|Slug of the topic this post belongs to|
|display_username|string|true|none|Display username of the post author|
|primary_group_name|string \| null|true|none|Primary group name of the author|
|flair_name|string \| null|true|none|Flair name of the author|
|flair_url|string \| null|true|none|Flair URL of the author|
|flair_bg_color|string \| null|true|none|Flair background color of the author|
|flair_color|string \| null|true|none|Flair color of the author|
|flair_group_id|integer \| null|true|none|Flair group ID of the author|
|badges_granted|array|true|none|Badges granted to the user|
|version|integer|true|none|Version number of the post|
|can_edit|boolean|true|none|Whether the current user can edit this post|
|can_delete|boolean|true|none|Whether the current user can delete this post|
|can_recover|boolean|true|none|Whether the current user can recover this post|
|can_see_hidden_post|boolean|true|none|Whether the current user can see hidden posts|
|can_wiki|boolean|true|none|Whether the current user can wiki this post|
|user_title|string \| null|true|none|Title of the post author|
|bookmarked|boolean|true|none|Whether the post is bookmarked by the current user|
|actions_summary|[object]|true|none|Summary of actions performed on this post|
|» id|integer|false|none|ID of the action type (e.g., 2 for like)|
|» count|integer|false|none|Number of times this action has been performed|
|» acted|boolean|false|none|Whether the current user has performed this<br>action|
|» can_undo|boolean|false|none|Whether the current user can undo this action|
|» can_act|boolean|false|none|Whether the current user can perform this action|
|moderator|boolean|true|none|Whether the post author is a moderator|
|admin|boolean|true|none|Whether the post author is an admin|
|staff|boolean|true|none|Whether the post author is staff|
|user_id|integer|true|none|ID of the post author|
|hidden|boolean|true|none|Whether the post is hidden|
|trust_level|integer|true|none|Trust level of the post author|
|deleted_at|string \| null|true|none|When the post was deleted|
|user_deleted|boolean|true|none|Whether the post was deleted by the user|
|edit_reason|string \| null|true|none|Reason for the last edit|
|can_view_edit_history|boolean|true|none|Whether the current user can view edit history|
|wiki|boolean|true|none|Whether this is a wiki post|
|reviewable_id|integer \| null|true|none|ID of the reviewable if this post is under review|
|reviewable_score_count|integer|true|none|Number of reviewable scores|
|reviewable_score_pending_count|integer|true|none|Number of pending reviewable scores|
|post_url|string|true|none|URL of the post|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="discourse-api-documentation-private-messages">Private Messages</h1>

## Get a list of private messages for a user

<a id="opIdlistUserPrivateMessages"></a>

> Code samples

```bash
curl https://discourse.example.com/topics/private-messages/string.json \
  -H 'Accept: application/json'
```

`GET /topics/private-messages/{username}.json`

<h3 id="get-a-list-of-private-messages-for-a-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|username|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "users": [
    {
      "id": 0,
      "username": "string",
      "name": "string",
      "avatar_template": "string"
    }
  ],
  "primary_groups": [
    null
  ],
  "topic_list": {
    "can_create_topic": true,
    "draft": "string",
    "draft_key": "string",
    "draft_sequence": 0,
    "per_page": 0,
    "topics": [
      {
        "id": 0,
        "title": "string",
        "fancy_title": "string",
        "slug": "string",
        "posts_count": 0,
        "reply_count": 0,
        "highest_post_number": 0,
        "image_url": "string",
        "created_at": "string",
        "last_posted_at": "string",
        "bumped": true,
        "bumped_at": "string",
        "archetype": "string",
        "unseen": true,
        "last_read_post_number": 0,
        "unread_posts": 0,
        "pinned": true,
        "unpinned": "string",
        "visible": true,
        "closed": true,
        "archived": true,
        "notification_level": 0,
        "bookmarked": true,
        "liked": true,
        "views": 0,
        "like_count": 0,
        "has_summary": true,
        "last_poster_username": "string",
        "category_id": "string",
        "pinned_globally": true,
        "featured_link": "string",
        "allowed_user_count": 0,
        "posters": [
          {
            "extras": "string",
            "description": "string",
            "user_id": 0,
            "primary_group_id": 0
          }
        ],
        "participants": [
          {
            "extras": "string",
            "description": "string",
            "user_id": 0,
            "primary_group_id": 0
          }
        ]
      }
    ]
  }
}
```

<h3 id="get-a-list-of-private-messages-for-a-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|private messages|Inline|

<h3 id="get-a-list-of-private-messages-for-a-user-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|users|[object]|false|none|none|
|» id|integer|false|none|none|
|» username|string|false|none|none|
|» name|string|false|none|none|
|» avatar_template|string|false|none|none|
|primary_groups|[object]|false|none|none|
|topic_list|object|false|none|none|
|» can_create_topic|boolean|false|none|none|
|» draft|string \| null|false|none|none|
|» draft_key|string|false|none|none|
|» draft_sequence|integer|false|none|none|
|» per_page|integer|false|none|none|
|» topics|[object]|false|none|none|
|» » id|integer|false|none|none|
|» » title|string|false|none|none|
|» » fancy_title|string|false|none|none|
|» » slug|string|false|none|none|
|» » posts_count|integer|false|none|none|
|» » reply_count|integer|false|none|none|
|» » highest_post_number|integer|false|none|none|
|» » image_url|string \| null|false|none|none|
|» » created_at|string|false|none|none|
|» » last_posted_at|string|false|none|none|
|» » bumped|boolean|false|none|none|
|» » bumped_at|string|false|none|none|
|» » archetype|string|false|none|none|
|» » unseen|boolean|false|none|none|
|» » last_read_post_number|integer|false|none|none|
|» » unread_posts|integer|false|none|none|
|» » pinned|boolean|false|none|none|
|» » unpinned|string \| null|false|none|none|
|» » visible|boolean|false|none|none|
|» » closed|boolean|false|none|none|
|» » archived|boolean|false|none|none|
|» » notification_level|integer|false|none|none|
|» » bookmarked|boolean|false|none|none|
|» » liked|boolean|false|none|none|
|» » views|integer|false|none|none|
|» » like_count|integer|false|none|none|
|» » has_summary|boolean|false|none|none|
|» » last_poster_username|string|false|none|none|
|» » category_id|string \| null|false|none|none|
|» » pinned_globally|boolean|false|none|none|
|» » featured_link|string \| null|false|none|none|
|» » allowed_user_count|integer|false|none|none|
|» » posters|[object]|false|none|none|
|» » » extras|string|false|none|none|
|» » » description|string|false|none|none|
|» » » user_id|integer|false|none|none|
|» » » primary_group_id|integer \| null|false|none|none|
|» » participants|[object]|false|none|none|
|» » » extras|string|false|none|none|
|» » » description|string \| null|false|none|none|
|» » » user_id|integer|false|none|none|
|» » » primary_group_id|integer \| null|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Get a list of private messages sent for a user

<a id="opIdgetUserSentPrivateMessages"></a>

> Code samples

```bash
curl https://discourse.example.com/topics/private-messages-sent/string.json \
  -H 'Accept: application/json'
```

`GET /topics/private-messages-sent/{username}.json`

<h3 id="get-a-list-of-private-messages-sent-for-a-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|username|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "users": [
    {
      "id": 0,
      "username": "string",
      "name": "string",
      "avatar_template": "string"
    }
  ],
  "primary_groups": [
    null
  ],
  "topic_list": {
    "can_create_topic": true,
    "draft": "string",
    "draft_key": "string",
    "draft_sequence": 0,
    "per_page": 0,
    "topics": [
      {
        "id": 0,
        "title": "string",
        "fancy_title": "string",
        "slug": "string",
        "posts_count": 0,
        "reply_count": 0,
        "highest_post_number": 0,
        "image_url": "string",
        "created_at": "string",
        "last_posted_at": "string",
        "bumped": true,
        "bumped_at": "string",
        "archetype": "string",
        "unseen": true,
        "last_read_post_number": 0,
        "unread_posts": 0,
        "pinned": true,
        "unpinned": "string",
        "visible": true,
        "closed": true,
        "archived": true,
        "notification_level": 0,
        "bookmarked": true,
        "liked": true,
        "views": 0,
        "like_count": 0,
        "has_summary": true,
        "last_poster_username": "string",
        "category_id": "string",
        "pinned_globally": true,
        "featured_link": "string",
        "allowed_user_count": 0,
        "posters": [
          {
            "extras": "string",
            "description": "string",
            "user_id": 0,
            "primary_group_id": 0
          }
        ],
        "participants": [
          null
        ]
      }
    ]
  }
}
```

<h3 id="get-a-list-of-private-messages-sent-for-a-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|private messages|Inline|

<h3 id="get-a-list-of-private-messages-sent-for-a-user-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|users|[object]|false|none|none|
|» id|integer|false|none|none|
|» username|string|false|none|none|
|» name|string \| null|false|none|none|
|» avatar_template|string|false|none|none|
|primary_groups|[object]|false|none|none|
|topic_list|object|false|none|none|
|» can_create_topic|boolean|false|none|none|
|» draft|string \| null|false|none|none|
|» draft_key|string|false|none|none|
|» draft_sequence|integer|false|none|none|
|» per_page|integer|false|none|none|
|» topics|[object]|false|none|none|
|» » id|integer|false|none|none|
|» » title|string|false|none|none|
|» » fancy_title|string|false|none|none|
|» » slug|string|false|none|none|
|» » posts_count|integer|false|none|none|
|» » reply_count|integer|false|none|none|
|» » highest_post_number|integer|false|none|none|
|» » image_url|string \| null|false|none|none|
|» » created_at|string|false|none|none|
|» » last_posted_at|string|false|none|none|
|» » bumped|boolean|false|none|none|
|» » bumped_at|string|false|none|none|
|» » archetype|string|false|none|none|
|» » unseen|boolean|false|none|none|
|» » last_read_post_number|integer|false|none|none|
|» » unread_posts|integer|false|none|none|
|» » pinned|boolean|false|none|none|
|» » unpinned|string \| null|false|none|none|
|» » visible|boolean|false|none|none|
|» » closed|boolean|false|none|none|
|» » archived|boolean|false|none|none|
|» » notification_level|integer|false|none|none|
|» » bookmarked|boolean|false|none|none|
|» » liked|boolean|false|none|none|
|» » views|integer|false|none|none|
|» » like_count|integer|false|none|none|
|» » has_summary|boolean|false|none|none|
|» » last_poster_username|string|false|none|none|
|» » category_id|string \| null|false|none|none|
|» » pinned_globally|boolean|false|none|none|
|» » featured_link|string \| null|false|none|none|
|» » allowed_user_count|integer|false|none|none|
|» » posters|[object]|false|none|none|
|» » » extras|string|false|none|none|
|» » » description|string|false|none|none|
|» » » user_id|integer|false|none|none|
|» » » primary_group_id|integer \| null|false|none|none|
|» » participants|[object]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="discourse-api-documentation-search">Search</h1>

## Search for a term

<a id="opIdsearch"></a>

> Code samples

```bash
curl https://discourse.example.com/search.json \
  -H 'Accept: application/json'
```

`GET /search.json`

<h3 id="search-for-a-term-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|q|query|string|false|The query string needs to be url encoded and is made up of the following options:<br>- Search term. This is just a string. Usually it would be the first item in the query.<br>- `@<username>`: Use the `@` followed by the username to specify posts by this user.<br>- `#<category>`: Use the `#` followed by the category slug to search within this category.<br>- `tags:`: `api,solved` or for posts that have all the specified tags `api+solved`.<br>- `before:`: `yyyy-mm-dd`<br>- `after:`: `yyyy-mm-dd`<br>- `order:`: `latest`, `likes`, `views`, `latest_topic`<br>- `assigned:`: username (without `@`)<br>- `in:`: `title`, `likes`, `personal`, `messages`, `seen`, `unseen`, `posted`, `created`, `watching`, `tracking`, `bookmarks`, `assigned`, `unassigned`, `first`, `pinned`, `wiki`<br>- `with:`: `images`<br>- `status:`: `open`, `closed`, `public`, `archived`, `noreplies`, `single_user`, `solved`, `unsolved`<br>- `group:`: group_name or group_id<br>- `group_messages:`: group_name or group_id<br>- `min_posts:`: 1<br>- `max_posts:`: 10<br>- `min_views:`: 1<br>- `max_views:`: 10<br><br>If you are using cURL you can use the `-G` and the `--data-urlencode` flags to encode the query:<br><br>```<br>curl -i -sS -X GET -G "http://localhost:3000/search.json" \<br>--data-urlencode 'q=wordpress @scossar #fun after:2020-01-01'<br>```<br>|
|page|query|integer|false|none|

> Example responses

> 200 Response

```json
{
  "posts": [
    null
  ],
  "users": [
    null
  ],
  "categories": [
    null
  ],
  "tags": [
    {
      "id": 0,
      "name": "string",
      "slug": "string"
    }
  ],
  "groups": [
    null
  ],
  "grouped_search_result": {
    "more_posts": "string",
    "more_users": "string",
    "more_categories": "string",
    "term": "string",
    "search_log_id": 0,
    "more_full_page_results": "string",
    "can_create_topic": true,
    "error": "string",
    "extra": {
      "categories": []
    },
    "post_ids": [
      null
    ],
    "user_ids": [
      null
    ],
    "category_ids": [
      null
    ],
    "tag_ids": [
      null
    ],
    "group_ids": [
      null
    ]
  }
}
```

<h3 id="search-for-a-term-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|success response|Inline|

<h3 id="search-for-a-term-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|posts|[object]|true|none|none|
|users|[object]|true|none|none|
|categories|[object]|true|none|none|
|tags|[object]|true|none|none|
|» id|integer|true|none|none|
|» name|string|true|none|none|
|» slug|string|true|none|none|
|groups|[object]|true|none|none|
|grouped_search_result|object|true|none|none|
|» more_posts|string \| null|true|none|none|
|» more_users|string \| null|true|none|none|
|» more_categories|string \| null|true|none|none|
|» term|string|true|none|none|
|» search_log_id|integer|true|none|none|
|» more_full_page_results|string \| null|true|none|none|
|» can_create_topic|boolean|true|none|none|
|» error|string \| null|true|none|none|
|» extra|object|false|none|none|
|» » categories|array|false|none|none|
|» post_ids|[object]|true|none|none|
|» user_ids|[object]|true|none|none|
|» category_ids|[object]|true|none|none|
|» tag_ids|[object]|true|none|none|
|» group_ids|[object]|true|none|none|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="discourse-api-documentation-site">Site</h1>

## Get site info

<a id="opIdgetSite"></a>

> Code samples

```bash
curl https://discourse.example.com/site.json \
  -H 'Accept: application/json'
```

`GET /site.json`

Can be used to fetch all categories and subcategories

> Example responses

> 200 Response

```json
{
  "default_archetype": "string",
  "notification_types": {
    "mentioned": 0,
    "replied": 0,
    "quoted": 0,
    "edited": 0,
    "liked": 0,
    "private_message": 0,
    "invited_to_private_message": 0,
    "invitee_accepted": 0,
    "posted": 0,
    "watching_category_or_tag": 0,
    "new_features": 0,
    "admin_problems": 0,
    "moved_post": 0,
    "linked": 0,
    "granted_badge": 0,
    "invited_to_topic": 0,
    "custom": 0,
    "group_mentioned": 0,
    "group_message_summary": 0,
    "watching_first_post": 0,
    "topic_reminder": 0,
    "liked_consolidated": 0,
    "linked_consolidated": 0,
    "post_approved": 0,
    "code_review_commit_approved": 0,
    "membership_request_accepted": 0,
    "membership_request_consolidated": 0,
    "bookmark_reminder": 0,
    "reaction": 0,
    "votes_released": 0,
    "event_reminder": 0,
    "event_invitation": 0,
    "chat_mention": 0,
    "chat_message": 0,
    "chat_invitation": 0,
    "chat_group_mention": 0,
    "chat_quoted": 0,
    "chat_watched_thread": 0,
    "upcoming_change_available": 0,
    "upcoming_change_automatically_promoted": 0,
    "assigned": 0,
    "question_answer_user_commented": 0,
    "following": 0,
    "following_created_topic": 0,
    "following_replied": 0,
    "circles_activity": 0,
    "boost": 0,
    "suggested_edit_created": 0,
    "suggested_edit_accepted": 0,
    "live_invitation": 0
  },
  "post_types": {
    "regular": 0,
    "moderator_action": 0,
    "small_action": 0,
    "whisper": 0
  },
  "trust_levels": {
    "newuser": 0,
    "basic": 0,
    "member": 0,
    "regular": 0,
    "leader": 0
  },
  "user_tips": {
    "first_notification": 0,
    "topic_timeline": 0,
    "post_menu": 0,
    "topic_notification_levels": 0,
    "suggested_topics": 0
  },
  "groups": [
    {
      "id": 0,
      "name": "string",
      "full_name": "string",
      "display_name": "string",
      "flair_url": "string",
      "flair_bg_color": "string",
      "flair_color": "string",
      "automatic": true
    }
  ],
  "filters": [
    null
  ],
  "anonymous_list_filters": [
    null
  ],
  "homepage_choices": [
    null
  ],
  "homepage_options": [
    {
      "id": "string",
      "path": "string",
      "server_side": true
    }
  ],
  "periods": [
    null
  ],
  "top_menu_items": [
    null
  ],
  "anonymous_top_menu_items": [
    null
  ],
  "uncategorized_category_id": 0,
  "user_field_max_length": 0,
  "post_action_types": [
    {
      "id": 0,
      "name_key": "string",
      "name": "string",
      "description": "string",
      "short_description": "string",
      "is_flag": true,
      "require_message": true,
      "enabled": true,
      "applies_to": [],
      "is_used": true,
      "position": 0,
      "auto_action_type": true,
      "system": true
    }
  ],
  "topic_flag_types": [
    {
      "id": 0,
      "name_key": "string",
      "name": "string",
      "description": "string",
      "short_description": "string",
      "is_flag": true,
      "require_message": true,
      "enabled": true,
      "applies_to": [],
      "is_used": true,
      "position": 0,
      "auto_action_type": true,
      "system": true
    }
  ],
  "can_create_tag": true,
  "can_search": true,
  "can_tag_topics": true,
  "can_tag_pms": true,
  "tags_filter_regexp": "string",
  "top_tags": [
    {
      "id": 0,
      "name": "string",
      "slug": "string"
    }
  ],
  "wizard_required": true,
  "can_associate_groups": true,
  "email_configured": true,
  "upcoming_changes_with_css": [
    "string"
  ],
  "topic_featured_link_allowed_category_ids": [
    null
  ],
  "user_themes": [
    {
      "theme_id": 0,
      "name": "string",
      "default": true,
      "color_scheme_id": 0,
      "dark_color_scheme_id": 0,
      "only_theme_color_schemes": true
    }
  ],
  "user_color_schemes": [
    {
      "id": 0,
      "name": "string",
      "is_dark": true,
      "theme_id": 0,
      "colors": []
    }
  ],
  "default_light_color_scheme": {},
  "default_dark_color_scheme": {},
  "censored_regexp": [
    {}
  ],
  "custom_emoji_translation": {},
  "watched_words_replace": "string",
  "watched_words_link": "string",
  "markdown_additional_options": {},
  "hashtag_configurations": {},
  "hashtag_icons": {},
  "displayed_about_plugin_stat_groups": [],
  "categories": [
    {
      "id": 0,
      "name": "string",
      "color": "string",
      "text_color": "string",
      "style_type": "string",
      "emoji": "string",
      "icon": "string",
      "slug": "string",
      "topic_count": 0,
      "post_count": 0,
      "position": 0,
      "description": "string",
      "description_text": "string",
      "description_excerpt": "string",
      "topic_url": "string",
      "read_restricted": true,
      "permission": 0,
      "notification_level": 0,
      "topic_template": "string",
      "topic_title_placeholder": "string",
      "has_children": true,
      "subcategory_count": 0,
      "sort_order": "string",
      "sort_ascending": "string",
      "show_subcategory_list": true,
      "num_featured_topics": 0,
      "default_view": "string",
      "subcategory_list_style": "string",
      "default_top_period": "string",
      "default_list_filter": "string",
      "minimum_required_tags": 0,
      "navigate_to_first_post_after_read": true,
      "allow_global_tags": true,
      "required_tag_groups": [
        {
          "min_count": 0
        }
      ],
      "read_only_banner": "string",
      "uploaded_logo": "string",
      "uploaded_logo_dark": "string",
      "uploaded_background": "string",
      "uploaded_background_dark": "string",
      "can_edit": true,
      "custom_fields": {},
      "parent_category_id": 0,
      "form_template_ids": [
        null
      ],
      "category_types": {}
    }
  ],
  "archetypes": [
    {
      "id": "string",
      "name": "string",
      "options": [
        null
      ]
    }
  ],
  "user_fields": [
    null
  ],
  "auth_providers": [
    null
  ],
  "whispers_allowed_groups_names": [],
  "denied_emojis": [],
  "valid_flag_applies_to_types": [],
  "navigation_menu_site_top_tags": [],
  "full_name_required_for_signup": true,
  "full_name_visible_in_signup": true,
  "admin_config_login_routes": [],
  "access_control": {
    "mandatory_acl": {},
    "banned_acl": {}
  },
  "permanent_upcoming_change_names": [
    "string"
  ],
  "category_types": [
    {
      "id": "string",
      "name": "string",
      "title": "string",
      "description": "string",
      "icon": "string",
      "available": true,
      "visible": true,
      "configuration_schema": {}
    }
  ]
}
```

<h3 id="get-site-info-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|success response|Inline|

<h3 id="get-site-info-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|default_archetype|string|true|none|none|
|notification_types|object|true|none|none|
|» mentioned|integer|true|none|none|
|» replied|integer|true|none|none|
|» quoted|integer|true|none|none|
|» edited|integer|true|none|none|
|» liked|integer|true|none|none|
|» private_message|integer|true|none|none|
|» invited_to_private_message|integer|true|none|none|
|» invitee_accepted|integer|true|none|none|
|» posted|integer|true|none|none|
|» watching_category_or_tag|integer|true|none|none|
|» new_features|integer|false|none|none|
|» admin_problems|integer|false|none|none|
|» moved_post|integer|true|none|none|
|» linked|integer|true|none|none|
|» granted_badge|integer|true|none|none|
|» invited_to_topic|integer|true|none|none|
|» custom|integer|true|none|none|
|» group_mentioned|integer|true|none|none|
|» group_message_summary|integer|true|none|none|
|» watching_first_post|integer|true|none|none|
|» topic_reminder|integer|true|none|none|
|» liked_consolidated|integer|true|none|none|
|» linked_consolidated|integer|true|none|none|
|» post_approved|integer|true|none|none|
|» code_review_commit_approved|integer|true|none|none|
|» membership_request_accepted|integer|true|none|none|
|» membership_request_consolidated|integer|true|none|none|
|» bookmark_reminder|integer|true|none|none|
|» reaction|integer|true|none|none|
|» votes_released|integer|true|none|none|
|» event_reminder|integer|true|none|none|
|» event_invitation|integer|true|none|none|
|» chat_mention|integer|true|none|none|
|» chat_message|integer|true|none|none|
|» chat_invitation|integer|true|none|none|
|» chat_group_mention|integer|true|none|none|
|» chat_quoted|integer|false|none|none|
|» chat_watched_thread|integer|false|none|none|
|» upcoming_change_available|integer|false|none|none|
|» upcoming_change_automatically_promoted|integer|false|none|none|
|» assigned|integer|false|none|none|
|» question_answer_user_commented|integer|false|none|none|
|» following|integer|false|none|none|
|» following_created_topic|integer|false|none|none|
|» following_replied|integer|false|none|none|
|» circles_activity|integer|false|none|none|
|» boost|integer|false|none|none|
|» suggested_edit_created|integer|false|none|none|
|» suggested_edit_accepted|integer|false|none|none|
|» live_invitation|integer|false|none|none|
|post_types|object|true|none|none|
|» regular|integer|true|none|none|
|» moderator_action|integer|true|none|none|
|» small_action|integer|true|none|none|
|» whisper|integer|true|none|none|
|trust_levels|object|true|none|none|
|» newuser|integer|true|none|none|
|» basic|integer|true|none|none|
|» member|integer|true|none|none|
|» regular|integer|true|none|none|
|» leader|integer|true|none|none|
|user_tips|object|false|none|none|
|» first_notification|integer|true|none|none|
|» topic_timeline|integer|true|none|none|
|» post_menu|integer|true|none|none|
|» topic_notification_levels|integer|true|none|none|
|» suggested_topics|integer|true|none|none|
|groups|[object]|true|none|none|
|» id|integer|true|none|none|
|» name|string|true|none|none|
|» full_name|string|false|none|none|
|» display_name|string|false|none|none|
|» flair_url|string \| null|true|none|none|
|» flair_bg_color|string \| null|true|none|none|
|» flair_color|string \| null|true|none|none|
|» automatic|boolean|true|none|none|
|filters|[object]|true|none|none|
|anonymous_list_filters|[object]|true|none|none|
|homepage_choices|[object]|true|none|none|
|homepage_options|[object]|true|none|none|
|» id|string|true|none|none|
|» path|string|true|none|none|
|» server_side|boolean|true|none|none|
|periods|[object]|true|none|none|
|top_menu_items|[object]|true|none|none|
|anonymous_top_menu_items|[object]|true|none|none|
|uncategorized_category_id|integer|true|none|none|
|user_field_max_length|integer|true|none|none|
|post_action_types|[object]|true|none|none|
|» id|integer \| null|true|none|none|
|» name_key|string \| null|true|none|none|
|» name|string|true|none|none|
|» description|string|true|none|none|
|» short_description|string|true|none|none|
|» is_flag|boolean|true|none|none|
|» require_message|boolean|true|none|none|
|» enabled|boolean|true|none|none|
|» applies_to|array|true|none|none|
|» is_used|boolean|true|none|none|
|» position|integer|false|none|none|
|» auto_action_type|boolean|true|none|none|
|» system|boolean|false|none|none|
|topic_flag_types|[object]|true|none|none|
|» id|integer \| null|true|none|none|
|» name_key|string \| null|true|none|none|
|» name|string|true|none|none|
|» description|string|true|none|none|
|» short_description|string|true|none|none|
|» is_flag|boolean|true|none|none|
|» require_message|boolean|true|none|none|
|» enabled|boolean|true|none|none|
|» applies_to|array|true|none|none|
|» is_used|boolean|true|none|none|
|» position|integer|false|none|none|
|» auto_action_type|boolean|true|none|none|
|» system|boolean|false|none|none|
|can_create_tag|boolean|true|none|none|
|can_search|boolean|true|none|none|
|can_tag_topics|boolean|true|none|none|
|can_tag_pms|boolean|true|none|none|
|tags_filter_regexp|string|true|none|none|
|top_tags|[object]|true|none|none|
|» id|integer|true|none|none|
|» name|string|true|none|none|
|» slug|string|true|none|none|
|wizard_required|boolean|false|none|none|
|can_associate_groups|boolean|false|none|none|
|email_configured|boolean|true|none|none|
|upcoming_changes_with_css|[string]|false|none|none|
|topic_featured_link_allowed_category_ids|[object]|true|none|none|
|user_themes|[object]|true|none|none|
|» theme_id|integer|true|none|none|
|» name|string|true|none|none|
|» default|boolean|true|none|none|
|» color_scheme_id|integer \| null|true|none|none|
|» dark_color_scheme_id|integer \| null|false|none|none|
|» only_theme_color_schemes|boolean|false|none|none|
|user_color_schemes|[object]|true|none|none|
|» id|integer|true|none|none|
|» name|string|true|none|none|
|» is_dark|boolean|true|none|none|
|» theme_id|integer \| null|false|none|none|
|» colors|array|true|none|none|
|default_light_color_scheme|object \| null|true|none|none|
|default_dark_color_scheme|object \| null|true|none|none|
|censored_regexp|[object]|true|none|none|
|custom_emoji_translation|object|true|none|none|
|watched_words_replace|string \| null|true|none|none|
|watched_words_link|string \| null|true|none|none|
|markdown_additional_options|object|false|none|none|
|hashtag_configurations|object|false|none|none|
|hashtag_icons|object|false|none|none|
|displayed_about_plugin_stat_groups|array|false|none|none|
|categories|[object]|true|none|none|
|» id|integer|true|none|none|
|» name|string|true|none|none|
|» color|string|true|none|none|
|» text_color|string|true|none|none|
|» style_type|string|false|none|none|
|» emoji|string \| null|false|none|none|
|» icon|string \| null|false|none|none|
|» slug|string|true|none|none|
|» topic_count|integer|true|none|none|
|» post_count|integer|true|none|none|
|» position|integer|true|none|none|
|» description|string \| null|false|none|none|
|» description_text|string \| null|false|none|none|
|» description_excerpt|string \| null|false|none|none|
|» topic_url|string|true|none|none|
|» read_restricted|boolean|true|none|none|
|» permission|integer|true|none|none|
|» notification_level|integer|true|none|none|
|» topic_template|string \| null|true|none|none|
|» topic_title_placeholder|string \| null|true|none|none|
|» has_children|boolean|true|none|none|
|» subcategory_count|integer \| null|true|none|none|
|» sort_order|string \| null|true|none|none|
|» sort_ascending|string \| null|true|none|none|
|» show_subcategory_list|boolean|true|none|none|
|» num_featured_topics|integer|true|none|none|
|» default_view|string \| null|true|none|none|
|» subcategory_list_style|string|true|none|none|
|» default_top_period|string|true|none|none|
|» default_list_filter|string|true|none|none|
|» minimum_required_tags|integer|true|none|none|
|» navigate_to_first_post_after_read|boolean|true|none|none|
|» allow_global_tags|boolean|true|none|none|
|» required_tag_groups|[object]|true|none|none|
|» » min_count|integer|true|none|none|
|» read_only_banner|string \| null|true|none|none|
|» uploaded_logo|string \| null|true|none|none|
|» uploaded_logo_dark|string \| null|true|none|none|
|» uploaded_background|string \| null|true|none|none|
|» uploaded_background_dark|string \| null|true|none|none|
|» can_edit|boolean|true|none|none|
|» custom_fields|object \| null|false|none|none|
|» parent_category_id|integer|false|none|none|
|» form_template_ids|[object]|false|none|none|
|» category_types|object|false|none|none|
|archetypes|[object]|true|none|none|
|» id|string|true|none|none|
|» name|string|true|none|none|
|» options|[object]|true|none|none|
|user_fields|[object]|true|none|none|
|auth_providers|[object]|true|none|none|
|whispers_allowed_groups_names|array|false|none|none|
|denied_emojis|array|false|none|none|
|valid_flag_applies_to_types|array|false|none|none|
|navigation_menu_site_top_tags|array|false|none|none|
|full_name_required_for_signup|boolean|true|none|none|
|full_name_visible_in_signup|boolean|true|none|none|
|admin_config_login_routes|array|false|none|none|
|access_control|object|false|none|none|
|» mandatory_acl|object|true|none|none|
|» banned_acl|object|true|none|none|
|permanent_upcoming_change_names|[string]|false|none|none|
|category_types|[object]|false|none|none|
|» id|string|true|none|none|
|» name|string|true|none|none|
|» title|string|true|none|none|
|» description|string|true|none|none|
|» icon|string|true|none|none|
|» available|boolean|true|none|none|
|» visible|boolean|true|none|none|
|» configuration_schema|object|true|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Get site basic info

<a id="opIdgetSiteBasicInfo"></a>

> Code samples

```bash
curl https://discourse.example.com/site/basic-info.json \
  -H 'Accept: application/json'
```

`GET /site/basic-info.json`

Can be used to fetch basic info about a site

> Example responses

> 200 Response

```json
{
  "logo_url": "string",
  "logo_small_url": "string",
  "apple_touch_icon_url": "string",
  "favicon_url": "string",
  "title": "string",
  "description": "string",
  "header_primary_color": "string",
  "header_background_color": "string",
  "login_required": true,
  "locale": "string",
  "include_in_discourse_discover": true,
  "mobile_logo_url": "string"
}
```

<h3 id="get-site-basic-info-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|success response|Inline|

<h3 id="get-site-basic-info-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|logo_url|string|true|none|none|
|logo_small_url|string|true|none|none|
|apple_touch_icon_url|string|true|none|none|
|favicon_url|string|true|none|none|
|title|string|true|none|none|
|description|string|true|none|none|
|header_primary_color|string|true|none|none|
|header_background_color|string|true|none|none|
|login_required|boolean|true|none|none|
|locale|string|true|none|none|
|include_in_discourse_discover|boolean|true|none|none|
|mobile_logo_url|string|true|none|none|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="discourse-api-documentation-tags">Tags</h1>

## Get a list of tag groups

<a id="opIdlistTagGroups"></a>

> Code samples

```bash
curl https://discourse.example.com/tag_groups.json \
  -H 'Accept: application/json'
```

`GET /tag_groups.json`

> Example responses

> 200 Response

```json
{
  "tag_groups": [
    {
      "id": 0,
      "name": "string",
      "tags": [
        {
          "id": 0,
          "name": "string",
          "slug": "string"
        }
      ],
      "parent_tag": [
        {
          "id": 0,
          "name": "string",
          "slug": "string"
        }
      ],
      "one_per_topic": true,
      "permissions": {
        "property1": 0,
        "property2": 0
      }
    }
  ]
}
```

<h3 id="get-a-list-of-tag-groups-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|tags|Inline|

<h3 id="get-a-list-of-tag-groups-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|tag_groups|[object]|true|none|none|
|» id|integer|true|none|none|
|» name|string|true|none|none|
|» tags|[object]|true|none|none|
|» » id|integer|true|none|none|
|» » name|string|true|none|none|
|» » slug|string|true|none|none|
|» parent_tag|[object]|true|none|none|
|» » id|integer|true|none|none|
|» » name|string|true|none|none|
|» » slug|string|true|none|none|
|» one_per_topic|boolean|true|none|none|
|» permissions|object|true|none|none|
|» » **additionalProperties**|integer|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Creates a tag group

<a id="opIdcreateTagGroup"></a>

> Code samples

```bash
curl https://discourse.example.com/tag_groups.json \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "name": "string"
  }'
```

`POST /tag_groups.json`

> Body parameter

```json
{
  "name": "string"
}
```

<h3 id="creates-a-tag-group-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» name|body|string|true|none|

> Example responses

> 200 Response

```json
{
  "tag_group": {
    "id": 0,
    "name": "string",
    "tags": [
      {
        "id": 0,
        "name": "string",
        "slug": "string"
      }
    ],
    "parent_tag": [
      {
        "id": 0,
        "name": "string",
        "slug": "string"
      }
    ],
    "one_per_topic": true,
    "permissions": {}
  }
}
```

<h3 id="creates-a-tag-group-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|tag group created|Inline|

<h3 id="creates-a-tag-group-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|tag_group|object|true|none|none|
|» id|integer|true|none|none|
|» name|string|true|none|none|
|» tags|[object]|true|none|none|
|» » id|integer|true|none|none|
|» » name|string|true|none|none|
|» » slug|string|true|none|none|
|» parent_tag|[object]|true|none|none|
|» » id|integer|true|none|none|
|» » name|string|true|none|none|
|» » slug|string|true|none|none|
|» one_per_topic|boolean|true|none|none|
|» permissions|object|true|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Get a single tag group

<a id="opIdgetTagGroup"></a>

> Code samples

```bash
curl https://discourse.example.com/tag_groups/string.json \
  -H 'Accept: application/json'
```

`GET /tag_groups/{id}.json`

<h3 id="get-a-single-tag-group-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "tag_group": {
    "id": 0,
    "name": "string",
    "tag_names": [
      null
    ],
    "parent_tag_name": [
      null
    ],
    "one_per_topic": true,
    "permissions": {
      "everyone": 0
    }
  }
}
```

<h3 id="get-a-single-tag-group-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|notifications|Inline|

<h3 id="get-a-single-tag-group-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|tag_group|object|false|none|none|
|» id|integer|false|none|none|
|» name|string|false|none|none|
|» tag_names|[object]|false|none|none|
|» parent_tag_name|[object]|false|none|none|
|» one_per_topic|boolean|false|none|none|
|» permissions|object|false|none|none|
|» » everyone|integer|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Update tag group

<a id="opIdupdateTagGroup"></a>

> Code samples

```bash
curl https://discourse.example.com/tag_groups/string.json \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "name": "string"
  }'
```

`PUT /tag_groups/{id}.json`

> Body parameter

```json
{
  "name": "string"
}
```

<h3 id="update-tag-group-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|body|body|object|false|none|
|» name|body|string|false|none|

> Example responses

> 200 Response

```json
{
  "success": "string",
  "tag_group": {
    "id": 0,
    "name": "string",
    "tag_names": [
      null
    ],
    "parent_tag_name": [
      null
    ],
    "one_per_topic": true,
    "permissions": {
      "everyone": 0
    }
  }
}
```

<h3 id="update-tag-group-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Tag group updated|Inline|

<h3 id="update-tag-group-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|string|false|none|none|
|tag_group|object|false|none|none|
|» id|integer|false|none|none|
|» name|string|false|none|none|
|» tag_names|[object]|false|none|none|
|» parent_tag_name|[object]|false|none|none|
|» one_per_topic|boolean|false|none|none|
|» permissions|object|false|none|none|
|» » everyone|integer|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Get a list of tags

<a id="opIdlistTags"></a>

> Code samples

```bash
curl https://discourse.example.com/tags.json \
  -H 'Accept: application/json'
```

`GET /tags.json`

> Example responses

> 200 Response

```json
{
  "tags": [
    {
      "id": 0,
      "text": "string",
      "name": "string",
      "count": 0,
      "pm_count": 0,
      "target_tag": "string"
    }
  ],
  "extras": {
    "categories": [
      null
    ]
  }
}
```

<h3 id="get-a-list-of-tags-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|notifications|Inline|

<h3 id="get-a-list-of-tags-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|tags|[object]|false|none|none|
|» id|integer|false|none|none|
|» text|string|false|none|none|
|» name|string|false|none|none|
|» count|integer|false|none|none|
|» pm_count|integer|false|none|none|
|» target_tag|string \| null|false|none|none|
|extras|object|false|none|none|
|» categories|[object]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Get a specific tag

<a id="opIdgetTag"></a>

> Code samples

```bash
curl https://discourse.example.com/tag/string.json \
  -H 'Accept: application/json'
```

`GET /tag/{name}.json`

<h3 id="get-a-specific-tag-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "users": [
    {
      "id": 0,
      "username": "string",
      "name": "string",
      "avatar_template": "string"
    }
  ],
  "primary_groups": [
    null
  ],
  "topic_list": {
    "can_create_topic": true,
    "draft": "string",
    "draft_key": "string",
    "draft_sequence": 0,
    "per_page": 0,
    "tags": [
      {
        "id": 0,
        "name": "string",
        "topic_count": 0,
        "staff": true
      }
    ],
    "topics": [
      {
        "id": 0,
        "title": "string",
        "fancy_title": "string",
        "slug": "string",
        "posts_count": 0,
        "reply_count": 0,
        "highest_post_number": 0,
        "image_url": "string",
        "created_at": "string",
        "last_posted_at": "string",
        "bumped": true,
        "bumped_at": "string",
        "archetype": "string",
        "unseen": true,
        "last_read_post_number": 0,
        "unread_posts": 0,
        "pinned": true,
        "unpinned": "string",
        "visible": true,
        "closed": true,
        "archived": true,
        "notification_level": 0,
        "bookmarked": true,
        "liked": true,
        "tags": [
          null
        ],
        "views": 0,
        "like_count": 0,
        "has_summary": true,
        "last_poster_username": "string",
        "category_id": 0,
        "pinned_globally": true,
        "featured_link": "string",
        "posters": [
          {
            "extras": "string",
            "description": "string",
            "user_id": 0,
            "primary_group_id": 0
          }
        ]
      }
    ]
  }
}
```

<h3 id="get-a-specific-tag-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|notifications|Inline|

<h3 id="get-a-specific-tag-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|users|[object]|false|none|none|
|» id|integer|false|none|none|
|» username|string|false|none|none|
|» name|string \| null|false|none|none|
|» avatar_template|string|false|none|none|
|primary_groups|[object]|false|none|none|
|topic_list|object|false|none|none|
|» can_create_topic|boolean|false|none|none|
|» draft|string \| null|false|none|none|
|» draft_key|string|false|none|none|
|» draft_sequence|integer|false|none|none|
|» per_page|integer|false|none|none|
|» tags|[object]|false|none|none|
|» » id|integer|false|none|none|
|» » name|string|false|none|none|
|» » topic_count|integer|false|none|none|
|» » staff|boolean|false|none|none|
|» topics|[object]|false|none|none|
|» » id|integer|false|none|none|
|» » title|string|false|none|none|
|» » fancy_title|string|false|none|none|
|» » slug|string|false|none|none|
|» » posts_count|integer|false|none|none|
|» » reply_count|integer|false|none|none|
|» » highest_post_number|integer|false|none|none|
|» » image_url|string \| null|false|none|none|
|» » created_at|string|false|none|none|
|» » last_posted_at|string|false|none|none|
|» » bumped|boolean|false|none|none|
|» » bumped_at|string|false|none|none|
|» » archetype|string|false|none|none|
|» » unseen|boolean|false|none|none|
|» » last_read_post_number|integer|false|none|none|
|» » unread_posts|integer|false|none|none|
|» » pinned|boolean|false|none|none|
|» » unpinned|string \| null|false|none|none|
|» » visible|boolean|false|none|none|
|» » closed|boolean|false|none|none|
|» » archived|boolean|false|none|none|
|» » notification_level|integer|false|none|none|
|» » bookmarked|boolean|false|none|none|
|» » liked|boolean|false|none|none|
|» » tags|[object]|false|none|none|
|» » views|integer|false|none|none|
|» » like_count|integer|false|none|none|
|» » has_summary|boolean|false|none|none|
|» » last_poster_username|string|false|none|none|
|» » category_id|integer|false|none|none|
|» » pinned_globally|boolean|false|none|none|
|» » featured_link|string \| null|false|none|none|
|» » posters|[object]|false|none|none|
|» » » extras|string|false|none|none|
|» » » description|string|false|none|none|
|» » » user_id|integer|false|none|none|
|» » » primary_group_id|integer \| null|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="discourse-api-documentation-topics">Topics</h1>

## Get specific posts from a topic

<a id="opIdgetSpecificPostsFromTopic"></a>

> Code samples

```bash
curl https://discourse.example.com/t/string/posts.json \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'Api-Key: string' \
  -H 'Api-Username: string' \
  -d '{
    "post_ids[]": 0
  }'
```

`GET /t/{id}/posts.json`

> Body parameter

```json
{
  "post_ids[]": 0
}
```

<h3 id="get-specific-posts-from-a-topic-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Api-Key|header|string|true|none|
|Api-Username|header|string|true|none|
|id|path|string|true|none|
|body|body|object|false|none|
|» post_ids[]|body|integer|true|none|

> Example responses

> 200 Response

```json
{
  "post_stream": {
    "posts": [
      {
        "id": 0,
        "name": "string",
        "username": "string",
        "avatar_template": "string",
        "created_at": "string",
        "cooked": "string",
        "post_number": 0,
        "post_type": 0,
        "updated_at": "string",
        "reply_count": 0,
        "reply_to_post_number": "string",
        "quote_count": 0,
        "incoming_link_count": 0,
        "reads": 0,
        "readers_count": 0,
        "score": 0,
        "yours": true,
        "topic_id": 0,
        "topic_slug": "string",
        "display_username": "string",
        "primary_group_name": "string",
        "flair_name": "string",
        "flair_url": "string",
        "flair_bg_color": "string",
        "flair_color": "string",
        "version": 0,
        "can_edit": true,
        "can_delete": true,
        "can_recover": true,
        "can_wiki": true,
        "read": true,
        "user_title": "string",
        "actions_summary": [
          {
            "id": 0,
            "can_act": true
          }
        ],
        "moderator": true,
        "admin": true,
        "staff": true,
        "user_id": 0,
        "hidden": true,
        "trust_level": 0,
        "deleted_at": "string",
        "user_deleted": true,
        "edit_reason": "string",
        "can_view_edit_history": true,
        "wiki": true,
        "reviewable_id": 0,
        "reviewable_score_count": 0,
        "reviewable_score_pending_count": 0
      }
    ]
  },
  "id": 0
}
```

<h3 id="get-specific-posts-from-a-topic-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|specific posts|Inline|

<h3 id="get-specific-posts-from-a-topic-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|post_stream|object|false|none|none|
|» posts|[object]|false|none|none|
|» » id|integer|false|none|none|
|» » name|string \| null|false|none|none|
|» » username|string|false|none|none|
|» » avatar_template|string|false|none|none|
|» » created_at|string|false|none|none|
|» » cooked|string|false|none|none|
|» » post_number|integer|false|none|none|
|» » post_type|integer|false|none|none|
|» » updated_at|string|false|none|none|
|» » reply_count|integer|false|none|none|
|» » reply_to_post_number|string \| null|false|none|none|
|» » quote_count|integer|false|none|none|
|» » incoming_link_count|integer|false|none|none|
|» » reads|integer|false|none|none|
|» » readers_count|integer|false|none|none|
|» » score|number|false|none|none|
|» » yours|boolean|false|none|none|
|» » topic_id|integer|false|none|none|
|» » topic_slug|string|false|none|none|
|» » display_username|string \| null|false|none|none|
|» » primary_group_name|string \| null|false|none|none|
|» » flair_name|string \| null|false|none|none|
|» » flair_url|string \| null|false|none|none|
|» » flair_bg_color|string \| null|false|none|none|
|» » flair_color|string \| null|false|none|none|
|» » version|integer|false|none|none|
|» » can_edit|boolean|false|none|none|
|» » can_delete|boolean|false|none|none|
|» » can_recover|boolean|false|none|none|
|» » can_wiki|boolean|false|none|none|
|» » read|boolean|false|none|none|
|» » user_title|string \| null|false|none|none|
|» » actions_summary|[object]|false|none|none|
|» » » id|integer|false|none|none|
|» » » can_act|boolean|false|none|none|
|» » moderator|boolean|false|none|none|
|» » admin|boolean|false|none|none|
|» » staff|boolean|false|none|none|
|» » user_id|integer|false|none|none|
|» » hidden|boolean|false|none|none|
|» » trust_level|integer|false|none|none|
|» » deleted_at|string \| null|false|none|none|
|» » user_deleted|boolean|false|none|none|
|» » edit_reason|string \| null|false|none|none|
|» » can_view_edit_history|boolean|false|none|none|
|» » wiki|boolean|false|none|none|
|» » reviewable_id|integer|false|none|none|
|» » reviewable_score_count|integer|false|none|none|
|» » reviewable_score_pending_count|integer|false|none|none|
|id|integer|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Get a single topic

<a id="opIdgetTopic"></a>

> Code samples

```bash
curl https://discourse.example.com/t/string.json \
  -H 'Accept: application/json' \
  -H 'Api-Key: string' \
  -H 'Api-Username: string'
```

`GET /t/{id}.json`

<h3 id="get-a-single-topic-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Api-Key|header|string|true|none|
|Api-Username|header|string|true|none|
|id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "post_stream": {
    "posts": [
      {
        "id": 0,
        "name": "string",
        "username": "string",
        "avatar_template": "string",
        "created_at": "string",
        "cooked": "string",
        "post_number": 0,
        "post_type": 0,
        "updated_at": "string",
        "reply_count": 0,
        "reply_to_post_number": "string",
        "quote_count": 0,
        "incoming_link_count": 0,
        "reads": 0,
        "readers_count": 0,
        "score": 0,
        "yours": true,
        "topic_id": 0,
        "topic_slug": "string",
        "display_username": "string",
        "primary_group_name": "string",
        "flair_name": "string",
        "flair_url": "string",
        "flair_bg_color": "string",
        "flair_color": "string",
        "version": 0,
        "can_edit": true,
        "can_delete": true,
        "can_recover": true,
        "can_see_hidden_post": true,
        "can_wiki": true,
        "link_counts": [
          {
            "url": "string",
            "internal": true,
            "reflection": true,
            "title": "string",
            "clicks": 0
          }
        ],
        "read": true,
        "user_title": "string",
        "bookmarked": true,
        "actions_summary": [
          {
            "id": 0,
            "can_act": true
          }
        ],
        "moderator": true,
        "admin": true,
        "staff": true,
        "user_id": 0,
        "hidden": true,
        "trust_level": 0,
        "deleted_at": "string",
        "user_deleted": true,
        "edit_reason": "string",
        "can_view_edit_history": true,
        "wiki": true,
        "reviewable_id": 0,
        "reviewable_score_count": 0,
        "reviewable_score_pending_count": 0
      }
    ],
    "stream": [
      null
    ]
  },
  "timeline_lookup": [
    null
  ],
  "suggested_topics": [
    {
      "id": 0,
      "title": "string",
      "fancy_title": "string",
      "slug": "string",
      "posts_count": 0,
      "reply_count": 0,
      "highest_post_number": 0,
      "image_url": "string",
      "created_at": "string",
      "last_posted_at": "string",
      "bumped": true,
      "bumped_at": "string",
      "archetype": "string",
      "unseen": true,
      "pinned": true,
      "unpinned": "string",
      "excerpt": "string",
      "visible": true,
      "closed": true,
      "archived": true,
      "bookmarked": "string",
      "liked": "string",
      "tags": [
        {
          "id": 0,
          "name": "string",
          "slug": "string"
        }
      ],
      "tags_descriptions": {},
      "like_count": 0,
      "views": 0,
      "category_id": 0,
      "featured_link": "string",
      "posters": [
        {
          "extras": "string",
          "description": "string",
          "user": {
            "id": 0,
            "username": "string",
            "name": "string",
            "avatar_template": "string"
          }
        }
      ]
    }
  ],
  "tags": [
    {
      "id": 0,
      "name": "string",
      "slug": "string"
    }
  ],
  "tags_descriptions": {},
  "id": 0,
  "title": "string",
  "fancy_title": "string",
  "posts_count": 0,
  "created_at": "string",
  "views": 0,
  "reply_count": 0,
  "like_count": 0,
  "last_posted_at": "string",
  "visible": true,
  "closed": true,
  "archived": true,
  "has_summary": true,
  "archetype": "string",
  "slug": "string",
  "category_id": 0,
  "word_count": 0,
  "deleted_at": "string",
  "user_id": 0,
  "featured_link": "string",
  "pinned_globally": true,
  "pinned_at": "string",
  "pinned_until": "string",
  "image_url": "string",
  "slow_mode_seconds": 0,
  "draft": "string",
  "draft_key": "string",
  "draft_sequence": 0,
  "unpinned": "string",
  "pinned": true,
  "current_post_number": 0,
  "highest_post_number": 0,
  "deleted_by": "string",
  "has_deleted": true,
  "actions_summary": [
    {
      "id": 0,
      "count": 0,
      "hidden": true,
      "can_act": true
    }
  ],
  "chunk_size": 0,
  "bookmarked": true,
  "bookmarks": [
    null
  ],
  "topic_timer": "string",
  "message_bus_last_id": 0,
  "participant_count": 0,
  "show_read_indicator": true,
  "thumbnails": "string",
  "slow_mode_enabled_until": "string",
  "details": {
    "can_edit": true,
    "notification_level": 0,
    "can_move_posts": true,
    "can_delete": true,
    "can_remove_allowed_users": true,
    "can_create_post": true,
    "can_reply_as_new_topic": true,
    "can_invite_to": true,
    "can_invite_via_email": true,
    "can_flag_topic": true,
    "can_convert_topic": true,
    "can_review_topic": true,
    "can_close_topic": true,
    "can_archive_topic": true,
    "can_split_merge_topic": true,
    "can_edit_staff_notes": true,
    "can_toggle_topic_visibility": true,
    "can_pin_unpin_topic": true,
    "can_banner_topic": true,
    "can_moderate_category": true,
    "can_remove_self_id": 0,
    "participants": [
      {
        "id": 0,
        "username": "string",
        "name": "string",
        "avatar_template": "string",
        "post_count": 0,
        "primary_group_name": "string",
        "flair_name": "string",
        "flair_url": "string",
        "flair_color": "string",
        "flair_bg_color": "string",
        "flair_group_id": 0,
        "admin": true,
        "moderator": true,
        "trust_level": 0
      }
    ],
    "created_by": {
      "id": 0,
      "username": "string",
      "name": "string",
      "avatar_template": "string"
    },
    "last_poster": {
      "id": 0,
      "username": "string",
      "name": "string",
      "avatar_template": "string"
    }
  }
}
```

<h3 id="get-a-single-topic-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|specific posts|Inline|

<h3 id="get-a-single-topic-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|post_stream|object|true|none|none|
|» posts|[object]|true|none|none|
|» » id|integer|true|none|none|
|» » name|string|true|none|none|
|» » username|string|true|none|none|
|» » avatar_template|string|true|none|none|
|» » created_at|string|true|none|none|
|» » cooked|string|true|none|none|
|» » post_number|integer|true|none|none|
|» » post_type|integer|true|none|none|
|» » updated_at|string|true|none|none|
|» » reply_count|integer|true|none|none|
|» » reply_to_post_number|string \| null|true|none|none|
|» » quote_count|integer|true|none|none|
|» » incoming_link_count|integer|true|none|none|
|» » reads|integer|true|none|none|
|» » readers_count|integer|true|none|none|
|» » score|number|true|none|none|
|» » yours|boolean|true|none|none|
|» » topic_id|integer|true|none|none|
|» » topic_slug|string|true|none|none|
|» » display_username|string|true|none|none|
|» » primary_group_name|string \| null|true|none|none|
|» » flair_name|string \| null|true|none|none|
|» » flair_url|string \| null|true|none|none|
|» » flair_bg_color|string \| null|true|none|none|
|» » flair_color|string \| null|true|none|none|
|» » version|integer|true|none|none|
|» » can_edit|boolean|true|none|none|
|» » can_delete|boolean|true|none|none|
|» » can_recover|boolean|true|none|none|
|» » can_see_hidden_post|boolean|false|none|none|
|» » can_wiki|boolean|true|none|none|
|» » link_counts|[object]|true|none|none|
|» » » url|string|true|none|none|
|» » » internal|boolean|true|none|none|
|» » » reflection|boolean|true|none|none|
|» » » title|string|true|none|none|
|» » » clicks|integer|true|none|none|
|» » read|boolean|true|none|none|
|» » user_title|string \| null|true|none|none|
|» » bookmarked|boolean|true|none|none|
|» » actions_summary|[object]|true|none|none|
|» » » id|integer|true|none|none|
|» » » can_act|boolean|true|none|none|
|» » moderator|boolean|true|none|none|
|» » admin|boolean|true|none|none|
|» » staff|boolean|true|none|none|
|» » user_id|integer|true|none|none|
|» » hidden|boolean|true|none|none|
|» » trust_level|integer|true|none|none|
|» » deleted_at|string \| null|true|none|none|
|» » user_deleted|boolean|true|none|none|
|» » edit_reason|string \| null|true|none|none|
|» » can_view_edit_history|boolean|true|none|none|
|» » wiki|boolean|true|none|none|
|» » reviewable_id|integer|true|none|none|
|» » reviewable_score_count|integer|true|none|none|
|» » reviewable_score_pending_count|integer|true|none|none|
|» stream|[object]|true|none|none|
|timeline_lookup|[object]|true|none|none|
|suggested_topics|[object]|true|none|none|
|» id|integer|true|none|none|
|» title|string|true|none|none|
|» fancy_title|string|true|none|none|
|» slug|string|true|none|none|
|» posts_count|integer|true|none|none|
|» reply_count|integer|true|none|none|
|» highest_post_number|integer|true|none|none|
|» image_url|string \| null|true|none|none|
|» created_at|string|true|none|none|
|» last_posted_at|string \| null|true|none|none|
|» bumped|boolean|true|none|none|
|» bumped_at|string|true|none|none|
|» archetype|string|true|none|none|
|» unseen|boolean|true|none|none|
|» pinned|boolean|true|none|none|
|» unpinned|string \| null|true|none|none|
|» excerpt|string|true|none|none|
|» visible|boolean|true|none|none|
|» closed|boolean|true|none|none|
|» archived|boolean|true|none|none|
|» bookmarked|string \| null|true|none|none|
|» liked|string \| null|true|none|none|
|» tags|[object]|true|none|none|
|» » id|integer|true|none|none|
|» » name|string|true|none|none|
|» » slug|string|true|none|none|
|» tags_descriptions|object|true|none|none|
|» like_count|integer|true|none|none|
|» views|integer|true|none|none|
|» category_id|integer|true|none|none|
|» featured_link|string \| null|true|none|none|
|» posters|[object]|true|none|none|
|» » extras|string|true|none|none|
|» » description|string|true|none|none|
|» » user|object|true|none|none|
|» » » id|integer|true|none|none|
|» » » username|string|true|none|none|
|» » » name|string|true|none|none|
|» » » avatar_template|string|true|none|none|
|tags|[object]|true|none|none|
|» id|integer|true|none|none|
|» name|string|true|none|none|
|» slug|string|true|none|none|
|tags_descriptions|object|true|none|none|
|id|integer|true|none|none|
|title|string|true|none|none|
|fancy_title|string|true|none|none|
|posts_count|integer|true|none|none|
|created_at|string|true|none|none|
|views|integer|true|none|none|
|reply_count|integer|true|none|none|
|like_count|integer|true|none|none|
|last_posted_at|string \| null|true|none|none|
|visible|boolean|true|none|none|
|closed|boolean|true|none|none|
|archived|boolean|true|none|none|
|has_summary|boolean|true|none|none|
|archetype|string|true|none|none|
|slug|string|true|none|none|
|category_id|integer|true|none|none|
|word_count|integer \| null|true|none|none|
|deleted_at|string \| null|true|none|none|
|user_id|integer|true|none|none|
|featured_link|string \| null|true|none|none|
|pinned_globally|boolean|true|none|none|
|pinned_at|string \| null|true|none|none|
|pinned_until|string \| null|true|none|none|
|image_url|string \| null|true|none|none|
|slow_mode_seconds|integer|true|none|none|
|draft|string \| null|true|none|none|
|draft_key|string|true|none|none|
|draft_sequence|integer|true|none|none|
|unpinned|string \| null|true|none|none|
|pinned|boolean|true|none|none|
|current_post_number|integer|false|none|none|
|highest_post_number|integer \| null|true|none|none|
|deleted_by|string \| null|true|none|none|
|has_deleted|boolean|true|none|none|
|actions_summary|[object]|true|none|none|
|» id|integer|true|none|none|
|» count|integer|true|none|none|
|» hidden|boolean|true|none|none|
|» can_act|boolean|true|none|none|
|chunk_size|integer|true|none|none|
|bookmarked|boolean|true|none|none|
|bookmarks|[object]|true|none|none|
|topic_timer|string \| null|true|none|none|
|message_bus_last_id|integer|true|none|none|
|participant_count|integer|true|none|none|
|show_read_indicator|boolean|true|none|none|
|thumbnails|string \| null|true|none|none|
|slow_mode_enabled_until|string \| null|true|none|none|
|details|object|true|none|none|
|» can_edit|boolean|true|none|none|
|» notification_level|integer|true|none|none|
|» can_move_posts|boolean|true|none|none|
|» can_delete|boolean|true|none|none|
|» can_remove_allowed_users|boolean|true|none|none|
|» can_create_post|boolean|true|none|none|
|» can_reply_as_new_topic|boolean|true|none|none|
|» can_invite_to|boolean|false|none|none|
|» can_invite_via_email|boolean|false|none|none|
|» can_flag_topic|boolean|false|none|none|
|» can_convert_topic|boolean|true|none|none|
|» can_review_topic|boolean|true|none|none|
|» can_close_topic|boolean|true|none|none|
|» can_archive_topic|boolean|true|none|none|
|» can_split_merge_topic|boolean|true|none|none|
|» can_edit_staff_notes|boolean|true|none|none|
|» can_toggle_topic_visibility|boolean|true|none|none|
|» can_pin_unpin_topic|boolean|true|none|none|
|» can_banner_topic|boolean|false|none|none|
|» can_moderate_category|boolean|true|none|none|
|» can_remove_self_id|integer|true|none|none|
|» participants|[object]|false|none|none|
|» » id|integer|true|none|none|
|» » username|string|true|none|none|
|» » name|string|true|none|none|
|» » avatar_template|string|true|none|none|
|» » post_count|integer|true|none|none|
|» » primary_group_name|string \| null|true|none|none|
|» » flair_name|string \| null|true|none|none|
|» » flair_url|string \| null|true|none|none|
|» » flair_color|string \| null|true|none|none|
|» » flair_bg_color|string \| null|true|none|none|
|» » flair_group_id|integer \| null|false|none|none|
|» » admin|boolean|true|none|none|
|» » moderator|boolean|true|none|none|
|» » trust_level|integer|true|none|none|
|» created_by|object|true|none|none|
|» » id|integer|true|none|none|
|» » username|string|true|none|none|
|» » name|string|true|none|none|
|» » avatar_template|string|true|none|none|
|» last_poster|object|true|none|none|
|» » id|integer|true|none|none|
|» » username|string|true|none|none|
|» » name|string|true|none|none|
|» » avatar_template|string|true|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Remove a topic

<a id="opIdremoveTopic"></a>

> Code samples

```bash
curl https://discourse.example.com/t/string.json \
  -X DELETE \
  -H 'Api-Key: string' \
  -H 'Api-Username: string'
```

`DELETE /t/{id}.json`

<h3 id="remove-a-topic-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Api-Key|header|string|true|none|
|Api-Username|header|string|true|none|
|id|path|string|true|none|

<h3 id="remove-a-topic-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|specific posts|None|

<aside class="success">
This operation does not require authentication
</aside>

## Update a topic

<a id="opIdupdateTopic"></a>

> Code samples

```bash
curl https://discourse.example.com/t/-/string.json \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'Api-Key: string' \
  -H 'Api-Username: string' \
  -d '{
    "topic": {
      "title": "string",
      "category_id": 0
    }
  }'
```

`PUT /t/-/{id}.json`

> Body parameter

```json
{
  "topic": {
    "title": "string",
    "category_id": 0
  }
}
```

<h3 id="update-a-topic-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Api-Key|header|string|true|none|
|Api-Username|header|string|true|none|
|id|path|string|true|none|
|body|body|object|false|none|
|» topic|body|object|false|none|
|» » title|body|string|false|none|
|» » category_id|body|integer|false|none|

> Example responses

> 200 Response

```json
{
  "basic_topic": {
    "id": 0,
    "title": "string",
    "fancy_title": "string",
    "slug": "string",
    "posts_count": 0
  }
}
```

<h3 id="update-a-topic-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|topic updated|Inline|

<h3 id="update-a-topic-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|basic_topic|object|false|none|none|
|» id|integer|false|none|none|
|» title|string|false|none|none|
|» fancy_title|string|false|none|none|
|» slug|string|false|none|none|
|» posts_count|integer|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Invite to topic

<a id="opIdinviteToTopic"></a>

> Code samples

```bash
curl https://discourse.example.com/t/string/invite.json \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'Api-Key: string' \
  -H 'Api-Username: string' \
  -d '{
    "user": "string",
    "email": "string"
  }'
```

`POST /t/{id}/invite.json`

> Body parameter

```json
{
  "user": "string",
  "email": "string"
}
```

<h3 id="invite-to-topic-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Api-Key|header|string|true|none|
|Api-Username|header|string|true|none|
|id|path|string|true|none|
|body|body|object|false|none|
|» user|body|string|false|none|
|» email|body|string|false|none|

> Example responses

> 200 Response

```json
{
  "user": {
    "id": 0,
    "username": "string",
    "name": "string",
    "avatar_template": "string"
  }
}
```

<h3 id="invite-to-topic-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|topic updated|Inline|

<h3 id="invite-to-topic-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|user|object|false|none|none|
|» id|integer|false|none|none|
|» username|string|false|none|none|
|» name|string|false|none|none|
|» avatar_template|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Invite group to topic

<a id="opIdinviteGroupToTopic"></a>

> Code samples

```bash
curl https://discourse.example.com/t/string/invite-group.json \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'Api-Key: string' \
  -H 'Api-Username: string' \
  -d '{
    "group": "string",
    "should_notify": true
  }'
```

`POST /t/{id}/invite-group.json`

> Body parameter

```json
{
  "group": "string",
  "should_notify": true
}
```

<h3 id="invite-group-to-topic-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Api-Key|header|string|true|none|
|Api-Username|header|string|true|none|
|id|path|string|true|none|
|body|body|object|false|none|
|» group|body|string|false|The name of the group to invite|
|» should_notify|body|boolean|false|Whether to notify the group, it defaults to true|

> Example responses

> 200 Response

```json
{
  "group": {
    "id": 0,
    "name": "string"
  }
}
```

<h3 id="invite-group-to-topic-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|invites to a PM|Inline|

<h3 id="invite-group-to-topic-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|group|object|false|none|none|
|» id|integer|false|none|none|
|» name|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Bookmark topic

<a id="opIdbookmarkTopic"></a>

> Code samples

```bash
curl https://discourse.example.com/t/string/bookmark.json \
  -X PUT \
  -H 'Api-Key: string' \
  -H 'Api-Username: string'
```

`PUT /t/{id}/bookmark.json`

<h3 id="bookmark-topic-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Api-Key|header|string|true|none|
|Api-Username|header|string|true|none|
|id|path|string|true|none|

<h3 id="bookmark-topic-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|topic updated|None|

<aside class="success">
This operation does not require authentication
</aside>

## Update the status of a topic

<a id="opIdupdateTopicStatus"></a>

> Code samples

```bash
curl https://discourse.example.com/t/string/status.json \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'Api-Key: string' \
  -H 'Api-Username: string' \
  -d '{
    "status": "closed",
    "enabled": "true",
    "until": "2030-12-31"
  }'
```

`PUT /t/{id}/status.json`

> Body parameter

```json
{
  "status": "closed",
  "enabled": "true",
  "until": "2030-12-31"
}
```

<h3 id="update-the-status-of-a-topic-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Api-Key|header|string|true|none|
|Api-Username|header|string|true|none|
|id|path|string|true|none|
|body|body|object|false|none|
|» status|body|string|true|none|
|» enabled|body|string|true|none|
|» until|body|string|false|Only required for `pinned` and `pinned_globally`|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» status|closed|
|» status|pinned|
|» status|pinned_globally|
|» status|archived|
|» status|visible|
|» enabled|true|
|» enabled|false|

> Example responses

> 200 Response

```json
{
  "success": "OK",
  "topic_status_update": "string"
}
```

<h3 id="update-the-status-of-a-topic-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|topic updated|Inline|

<h3 id="update-the-status-of-a-topic-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|string|false|none|none|
|topic_status_update|string \| null|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Get the latest topics

<a id="opIdlistLatestTopics"></a>

> Code samples

```bash
curl https://discourse.example.com/latest.json \
  -H 'Accept: application/json' \
  -H 'Api-Key: string' \
  -H 'Api-Username: string'
```

`GET /latest.json`

<h3 id="get-the-latest-topics-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Api-Key|header|string|true|none|
|Api-Username|header|string|true|none|
|order|query|string|false|Enum: `default`, `created`, `activity`, `views`, `posts`, `category`,<br>`likes`, `op_likes`, `posters`|
|ascending|query|string|false|Defaults to `desc`, add `ascending=true` to sort asc|
|per_page|query|integer|false|Maximum number of topics returned, between 1-100|

> Example responses

> 200 Response

```json
{
  "users": [
    {
      "id": 0,
      "username": "string",
      "name": "string",
      "avatar_template": "string"
    }
  ],
  "primary_groups": [
    null
  ],
  "topic_list": {
    "can_create_topic": true,
    "draft": "string",
    "draft_key": "string",
    "draft_sequence": 0,
    "per_page": 0,
    "topics": [
      {
        "id": 0,
        "title": "string",
        "fancy_title": "string",
        "slug": "string",
        "posts_count": 0,
        "reply_count": 0,
        "highest_post_number": 0,
        "image_url": "string",
        "created_at": "string",
        "last_posted_at": "string",
        "bumped": true,
        "bumped_at": "string",
        "archetype": "string",
        "unseen": true,
        "last_read_post_number": 0,
        "unread_posts": 0,
        "pinned": true,
        "unpinned": "string",
        "visible": true,
        "closed": true,
        "archived": true,
        "notification_level": 0,
        "bookmarked": true,
        "liked": true,
        "views": 0,
        "like_count": 0,
        "has_summary": true,
        "last_poster_username": "string",
        "category_id": 0,
        "op_like_count": 0,
        "pinned_globally": true,
        "featured_link": "string",
        "posters": [
          {
            "extras": "string",
            "description": "string",
            "user_id": 0,
            "primary_group_id": 0
          }
        ]
      }
    ]
  }
}
```

<h3 id="get-the-latest-topics-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|topic updated|Inline|

<h3 id="get-the-latest-topics-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|users|[object]|false|none|none|
|» id|integer|false|none|none|
|» username|string|false|none|none|
|» name|string \| null|false|none|none|
|» avatar_template|string|false|none|none|
|primary_groups|[object]|false|none|none|
|topic_list|object|false|none|none|
|» can_create_topic|boolean|false|none|none|
|» draft|string \| null|false|none|none|
|» draft_key|string|false|none|none|
|» draft_sequence|integer|false|none|none|
|» per_page|integer|false|none|none|
|» topics|[object]|false|none|none|
|» » id|integer|false|none|none|
|» » title|string|false|none|none|
|» » fancy_title|string|false|none|none|
|» » slug|string|false|none|none|
|» » posts_count|integer|false|none|none|
|» » reply_count|integer|false|none|none|
|» » highest_post_number|integer|false|none|none|
|» » image_url|string|false|none|none|
|» » created_at|string|false|none|none|
|» » last_posted_at|string|false|none|none|
|» » bumped|boolean|false|none|none|
|» » bumped_at|string|false|none|none|
|» » archetype|string|false|none|none|
|» » unseen|boolean|false|none|none|
|» » last_read_post_number|integer|false|none|none|
|» » unread_posts|integer|false|none|none|
|» » pinned|boolean|false|none|none|
|» » unpinned|string \| null|false|none|none|
|» » visible|boolean|false|none|none|
|» » closed|boolean|false|none|none|
|» » archived|boolean|false|none|none|
|» » notification_level|integer|false|none|none|
|» » bookmarked|boolean|false|none|none|
|» » liked|boolean|false|none|none|
|» » views|integer|false|none|none|
|» » like_count|integer|false|none|none|
|» » has_summary|boolean|false|none|none|
|» » last_poster_username|string|false|none|none|
|» » category_id|integer|false|none|none|
|» » op_like_count|integer|false|none|none|
|» » pinned_globally|boolean|false|none|none|
|» » featured_link|string \| null|false|none|none|
|» » posters|[object]|false|none|none|
|» » » extras|string|false|none|none|
|» » » description|string|false|none|none|
|» » » user_id|integer|false|none|none|
|» » » primary_group_id|integer \| null|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Get the top topics filtered by period

<a id="opIdlistTopTopics"></a>

> Code samples

```bash
curl https://discourse.example.com/top.json \
  -H 'Accept: application/json' \
  -H 'Api-Key: string' \
  -H 'Api-Username: string'
```

`GET /top.json`

<h3 id="get-the-top-topics-filtered-by-period-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Api-Key|header|string|true|none|
|Api-Username|header|string|true|none|
|period|query|string|false|Enum: `all`, `yearly`, `quarterly`, `monthly`, `weekly`, `daily`|
|per_page|query|integer|false|Maximum number of topics returned, between 1-100|

> Example responses

> 200 Response

```json
{
  "users": [
    {
      "id": 0,
      "username": "string",
      "name": "string",
      "avatar_template": "string"
    }
  ],
  "primary_groups": [
    null
  ],
  "topic_list": {
    "can_create_topic": true,
    "draft": "string",
    "draft_key": "string",
    "draft_sequence": 0,
    "for_period": "string",
    "per_page": 0,
    "topics": [
      {
        "id": 0,
        "title": "string",
        "fancy_title": "string",
        "slug": "string",
        "posts_count": 0,
        "reply_count": 0,
        "highest_post_number": 0,
        "image_url": "string",
        "created_at": "string",
        "last_posted_at": "string",
        "bumped": true,
        "bumped_at": "string",
        "archetype": "string",
        "unseen": true,
        "last_read_post_number": 0,
        "unread_posts": 0,
        "pinned": true,
        "unpinned": true,
        "visible": true,
        "closed": true,
        "archived": true,
        "notification_level": 0,
        "bookmarked": true,
        "liked": true,
        "views": 0,
        "like_count": 0,
        "has_summary": true,
        "last_poster_username": "string",
        "category_id": 0,
        "op_like_count": 0,
        "pinned_globally": true,
        "featured_link": "string",
        "posters": [
          {
            "extras": "string",
            "description": "string",
            "user_id": 0,
            "primary_group_id": 0
          }
        ]
      }
    ]
  }
}
```

<h3 id="get-the-top-topics-filtered-by-period-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|response|Inline|

<h3 id="get-the-top-topics-filtered-by-period-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|users|[object]|false|none|none|
|» id|integer|false|none|none|
|» username|string|false|none|none|
|» name|string|false|none|none|
|» avatar_template|string|false|none|none|
|primary_groups|[object]|false|none|none|
|topic_list|object|false|none|none|
|» can_create_topic|boolean|false|none|none|
|» draft|string \| null|false|none|none|
|» draft_key|string|false|none|none|
|» draft_sequence|integer|false|none|none|
|» for_period|string|false|none|none|
|» per_page|integer|false|none|none|
|» topics|[object]|false|none|none|
|» » id|integer|false|none|none|
|» » title|string|false|none|none|
|» » fancy_title|string|false|none|none|
|» » slug|string|false|none|none|
|» » posts_count|integer|false|none|none|
|» » reply_count|integer|false|none|none|
|» » highest_post_number|integer|false|none|none|
|» » image_url|string \| null|false|none|none|
|» » created_at|string|false|none|none|
|» » last_posted_at|string|false|none|none|
|» » bumped|boolean|false|none|none|
|» » bumped_at|string|false|none|none|
|» » archetype|string|false|none|none|
|» » unseen|boolean|false|none|none|
|» » last_read_post_number|integer|false|none|none|
|» » unread_posts|integer|false|none|none|
|» » pinned|boolean|false|none|none|
|» » unpinned|boolean|false|none|none|
|» » visible|boolean|false|none|none|
|» » closed|boolean|false|none|none|
|» » archived|boolean|false|none|none|
|» » notification_level|integer|false|none|none|
|» » bookmarked|boolean|false|none|none|
|» » liked|boolean|false|none|none|
|» » views|integer|false|none|none|
|» » like_count|integer|false|none|none|
|» » has_summary|boolean|false|none|none|
|» » last_poster_username|string|false|none|none|
|» » category_id|integer|false|none|none|
|» » op_like_count|integer|false|none|none|
|» » pinned_globally|boolean|false|none|none|
|» » featured_link|string \| null|false|none|none|
|» » posters|[object]|false|none|none|
|» » » extras|string \| null|false|none|none|
|» » » description|string|false|none|none|
|» » » user_id|integer|false|none|none|
|» » » primary_group_id|integer \| null|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Set notification level

<a id="opIdsetNotificationLevel"></a>

> Code samples

```bash
curl https://discourse.example.com/t/string/notifications.json \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'Api-Key: string' \
  -H 'Api-Username: string' \
  -d '{
    "notification_level": "0"
  }'
```

`POST /t/{id}/notifications.json`

> Body parameter

```json
{
  "notification_level": "0"
}
```

<h3 id="set-notification-level-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Api-Key|header|string|true|none|
|Api-Username|header|string|true|none|
|id|path|string|true|none|
|body|body|object|false|none|
|» notification_level|body|string|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» notification_level|0|
|» notification_level|1|
|» notification_level|2|
|» notification_level|3|

> Example responses

> 200 Response

```json
{
  "success": "OK"
}
```

<h3 id="set-notification-level-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|topic updated|Inline|

<h3 id="set-notification-level-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Update topic timestamp

<a id="opIdupdateTopicTimestamp"></a>

> Code samples

```bash
curl https://discourse.example.com/t/string/change-timestamp.json \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'Api-Key: string' \
  -H 'Api-Username: string' \
  -d '{
    "timestamp": "1594291380"
  }'
```

`PUT /t/{id}/change-timestamp.json`

> Body parameter

```json
{
  "timestamp": "1594291380"
}
```

<h3 id="update-topic-timestamp-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Api-Key|header|string|true|none|
|Api-Username|header|string|true|none|
|id|path|string|true|none|
|body|body|object|false|none|
|» timestamp|body|string|true|none|

> Example responses

> 200 Response

```json
{
  "success": "OK"
}
```

<h3 id="update-topic-timestamp-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|topic updated|Inline|

<h3 id="update-topic-timestamp-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Create topic timer

<a id="opIdcreateTopicTimer"></a>

> Code samples

```bash
curl https://discourse.example.com/t/string/timer.json \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'Api-Key: string' \
  -H 'Api-Username: string' \
  -d '{
    "time": "",
    "status_type": "string",
    "based_on_last_post": true,
    "category_id": 0
  }'
```

`POST /t/{id}/timer.json`

> Body parameter

```json
{
  "time": "",
  "status_type": "string",
  "based_on_last_post": true,
  "category_id": 0
}
```

<h3 id="create-topic-timer-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Api-Key|header|string|true|none|
|Api-Username|header|string|true|none|
|id|path|string|true|none|
|body|body|object|false|none|
|» time|body|string|false|none|
|» status_type|body|string|false|none|
|» based_on_last_post|body|boolean|false|none|
|» category_id|body|integer|false|none|

> Example responses

> 200 Response

```json
{
  "success": "OK",
  "execute_at": "string",
  "duration": "string",
  "based_on_last_post": true,
  "closed": true,
  "category_id": 0
}
```

<h3 id="create-topic-timer-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|topic updated|Inline|

<h3 id="create-topic-timer-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|string|false|none|none|
|execute_at|string|false|none|none|
|duration|string \| null|false|none|none|
|based_on_last_post|boolean|false|none|none|
|closed|boolean|false|none|none|
|category_id|integer \| null|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Get topic by external_id

<a id="opIdgetTopicByExternalId"></a>

> Code samples

```bash
curl https://discourse.example.com/t/external_id/string.json
```

`GET /t/external_id/{external_id}.json`

<h3 id="get-topic-by-externalid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|external_id|path|string|true|none|

<h3 id="get-topic-by-externalid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|301|Moved Permanently|redirects to /t/{topic_id}.json|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="discourse-api-documentation-uploads">Uploads</h1>

## Creates an upload

<a id="opIdcreateUpload"></a>

> Code samples

```bash
curl https://discourse.example.com/uploads.json \
  -X POST \
  -H 'Accept: application/json' \
  -F 'upload_type=avatar' \
  -F 'user_id=0' \
  -F 'synchronous=true' \
  -F 'file=@/path/to/file'
```

`POST /uploads.json`

> Body parameter

```yaml
upload_type: avatar
user_id: 0
synchronous: true
file: string
```

<h3 id="creates-an-upload-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» upload_type|body|string|true|none|
|» user_id|body|integer|false|required if uploading an avatar|
|» synchronous|body|boolean|false|Use this flag to return an id and url|
|» file|body|string(binary)|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» upload_type|avatar|
|» upload_type|profile_background|
|» upload_type|card_background|
|» upload_type|custom_emoji|
|» upload_type|composer|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "url": "string",
  "original_filename": "string",
  "filesize": 0,
  "width": 0,
  "height": 0,
  "thumbnail_width": 0,
  "thumbnail_height": 0,
  "extension": "string",
  "short_url": "string",
  "short_path": "string",
  "retain_hours": "string",
  "human_filesize": "string",
  "dominant_color": "string",
  "thumbnail": {
    "id": 0,
    "upload_id": 0,
    "url": "string",
    "extension": "string",
    "width": 0,
    "height": 0,
    "filesize": 0
  },
  "optimized_video": {
    "id": 0,
    "upload_id": 0,
    "url": "string",
    "extension": "string",
    "filesize": 0,
    "sha1": "string",
    "original_filename": "string"
  }
}
```

<h3 id="creates-an-upload-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|file uploaded|Inline|

<h3 id="creates-an-upload-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer|true|none|none|
|url|string|true|none|none|
|original_filename|string|true|none|none|
|filesize|integer|true|none|none|
|width|integer|true|none|none|
|height|integer|true|none|none|
|thumbnail_width|integer|true|none|none|
|thumbnail_height|integer|true|none|none|
|extension|string|true|none|none|
|short_url|string|true|none|none|
|short_path|string|true|none|none|
|retain_hours|string \| null|true|none|none|
|human_filesize|string|true|none|none|
|dominant_color|string \| null|false|none|none|
|thumbnail|object \| null|false|none|none|
|» id|integer|false|none|none|
|» upload_id|integer|false|none|none|
|» url|string|false|none|none|
|» extension|string|false|none|none|
|» width|integer|false|none|none|
|» height|integer|false|none|none|
|» filesize|integer|false|none|none|
|optimized_video|object \| null|false|none|none|
|» id|integer|false|none|none|
|» upload_id|integer|false|none|none|
|» url|string|false|none|none|
|» extension|string|false|none|none|
|» filesize|integer|false|none|none|
|» sha1|string|false|none|none|
|» original_filename|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Initiates a direct external upload

<a id="opIdgeneratePresignedPut"></a>

> Code samples

```bash
curl https://discourse.example.com/uploads/generate-presigned-put.json \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "type": "avatar",
    "file_name": "IMG_2021.jpeg",
    "file_size": 4096,
    "metadata": {
      "sha1-checksum": "string"
    }
  }'
```

`POST /uploads/generate-presigned-put.json`

Direct external uploads bypass the usual method of creating uploads
via the POST /uploads route, and upload directly to an external provider,
which by default is S3. This route begins the process, and will return
a unique identifier for the external upload as well as a presigned URL
which is where the file binary blob should be uploaded to.

Once the upload is complete to the external service, you must call the
POST /complete-external-upload route using the unique identifier returned
by this route, which will create any required Upload record in the Discourse
database and also move file from its temporary location to the final
destination in the external storage service.

You must have the correct permissions and CORS settings configured in your
external provider. We support AWS S3 as the default. See:

https://meta.discourse.org/t/-/210469#s3-multipart-direct-uploads-4.

An external file store must be set up and `enable_direct_s3_uploads` must
be set to true for this endpoint to function.



> Body parameter

```json
{
  "type": "avatar",
  "file_name": "IMG_2021.jpeg",
  "file_size": 4096,
  "metadata": {
    "sha1-checksum": "string"
  }
}
```

<h3 id="initiates-a-direct-external-upload-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» type|body|string|true|none|
|» file_name|body|string|true|none|
|» file_size|body|integer|true|File size should be represented in bytes.|
|» metadata|body|object|false|none|
|» » sha1-checksum|body|string|false|The SHA1 checksum of the upload binary blob. Optionally<br>be provided and serves as an additional security check when<br>later processing the file in complete-external-upload endpoint.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» type|avatar|
|» type|profile_background|
|» type|card_background|
|» type|custom_emoji|
|» type|composer|

> Example responses

> 200 Response

```json
{
  "key": "temp/site/uploads/default/12345/67890.jpg",
  "url": "https://file-uploads.s3.us-west-2.amazonaws.com/temp/site/uploads/default/123/456.jpg?x-amz-acl=private&x-amz-meta-sha1-checksum=sha1&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AAAAus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20211221T011246Z&X-Amz-Expires=600&X-Amz-SignedHeaders=host&X-Amz-Signature=12345678",
  "signed_headers": {
    "x-amz-acl": "private",
    "x-amz-meta-sha1-checksum": "sha1"
  },
  "unique_identifier": "66e86218-80d9-4bda-b4d5-2b6def968705"
}
```

<h3 id="initiates-a-direct-external-upload-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|external upload initialized|Inline|

<h3 id="initiates-a-direct-external-upload-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|key|string|false|none|The path of the temporary file on the external storage<br>service.|
|url|string|false|none|A presigned PUT URL which must be used to upload<br>the file binary blob to.|
|signed_headers|object|false|none|A map of headers that must be sent with the PUT request.|
|unique_identifier|string|false|none|A unique string that identifies the external upload.<br>This must be stored and then sent in the /complete-external-upload<br>endpoint to complete the direct upload.|

<aside class="success">
This operation does not require authentication
</aside>

## Completes a direct external upload

<a id="opIdcompleteExternalUpload"></a>

> Code samples

```bash
curl https://discourse.example.com/uploads/complete-external-upload.json \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "unique_identifier": "66e86218-80d9-4bda-b4d5-2b6def968705",
    "for_private_message": "true",
    "for_site_setting": "true",
    "pasted": "true"
  }'
```

`POST /uploads/complete-external-upload.json`

Completes an external upload initialized with /get-presigned-put. The
file will be moved from its temporary location in external storage to
a final destination in the S3 bucket. An Upload record will also be
created in the database in most cases.

If a sha1-checksum was provided in the initial request it will also
be compared with the uploaded file in storage to make sure the same
file was uploaded. The file size will be compared for the same reason.

You must have the correct permissions and CORS settings configured in your
external provider. We support AWS S3 as the default. See:

https://meta.discourse.org/t/-/210469#s3-multipart-direct-uploads-4.

An external file store must be set up and `enable_direct_s3_uploads` must
be set to true for this endpoint to function.



> Body parameter

```json
{
  "unique_identifier": "66e86218-80d9-4bda-b4d5-2b6def968705",
  "for_private_message": "true",
  "for_site_setting": "true",
  "pasted": "true"
}
```

<h3 id="completes-a-direct-external-upload-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» unique_identifier|body|string|true|The unique identifier returned in the original /generate-presigned-put<br>request.|
|» for_private_message|body|string|false|Optionally set this to true if the upload is for a<br>private message.|
|» for_site_setting|body|string|false|Optionally set this to true if the upload is for a<br>site setting.|
|» pasted|body|string|false|Optionally set this to true if the upload was pasted<br>into the upload area. This will convert PNG files to JPEG.|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "url": "string",
  "original_filename": "string",
  "filesize": 0,
  "width": 0,
  "height": 0,
  "thumbnail_width": 0,
  "thumbnail_height": 0,
  "extension": "string",
  "short_url": "string",
  "short_path": "string",
  "retain_hours": "string",
  "human_filesize": "string",
  "dominant_color": "string",
  "thumbnail": {
    "id": 0,
    "upload_id": 0,
    "url": "string",
    "extension": "string",
    "width": 0,
    "height": 0,
    "filesize": 0
  },
  "optimized_video": {
    "id": 0,
    "upload_id": 0,
    "url": "string",
    "extension": "string",
    "filesize": 0,
    "sha1": "string",
    "original_filename": "string"
  }
}
```

<h3 id="completes-a-direct-external-upload-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|external upload initialized|Inline|

<h3 id="completes-a-direct-external-upload-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer|true|none|none|
|url|string|true|none|none|
|original_filename|string|true|none|none|
|filesize|integer|true|none|none|
|width|integer|true|none|none|
|height|integer|true|none|none|
|thumbnail_width|integer|true|none|none|
|thumbnail_height|integer|true|none|none|
|extension|string|true|none|none|
|short_url|string|true|none|none|
|short_path|string|true|none|none|
|retain_hours|string \| null|true|none|none|
|human_filesize|string|true|none|none|
|dominant_color|string \| null|false|none|none|
|thumbnail|object \| null|false|none|none|
|» id|integer|false|none|none|
|» upload_id|integer|false|none|none|
|» url|string|false|none|none|
|» extension|string|false|none|none|
|» width|integer|false|none|none|
|» height|integer|false|none|none|
|» filesize|integer|false|none|none|
|optimized_video|object \| null|false|none|none|
|» id|integer|false|none|none|
|» upload_id|integer|false|none|none|
|» url|string|false|none|none|
|» extension|string|false|none|none|
|» filesize|integer|false|none|none|
|» sha1|string|false|none|none|
|» original_filename|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Creates a multipart external upload

<a id="opIdcreateMultipartUpload"></a>

> Code samples

```bash
curl https://discourse.example.com/uploads/create-multipart.json \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "upload_type": "avatar",
    "file_name": "IMG_2021.jpeg",
    "file_size": 4096,
    "metadata": {
      "sha1-checksum": "string"
    }
  }'
```

`POST /uploads/create-multipart.json`

Creates a multipart upload in the external storage provider, storing
a temporary reference to the external upload similar to /get-presigned-put.

You must have the correct permissions and CORS settings configured in your
external provider. We support AWS S3 as the default. See:

https://meta.discourse.org/t/-/210469#s3-multipart-direct-uploads-4.

An external file store must be set up and `enable_direct_s3_uploads` must
be set to true for this endpoint to function.



> Body parameter

```json
{
  "upload_type": "avatar",
  "file_name": "IMG_2021.jpeg",
  "file_size": 4096,
  "metadata": {
    "sha1-checksum": "string"
  }
}
```

<h3 id="creates-a-multipart-external-upload-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» upload_type|body|string|true|none|
|» file_name|body|string|true|none|
|» file_size|body|integer|true|File size should be represented in bytes.|
|» metadata|body|object|false|none|
|» » sha1-checksum|body|string|false|The SHA1 checksum of the upload binary blob. Optionally<br>be provided and serves as an additional security check when<br>later processing the file in complete-external-upload endpoint.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» upload_type|avatar|
|» upload_type|profile_background|
|» upload_type|card_background|
|» upload_type|custom_emoji|
|» upload_type|composer|

> Example responses

> 200 Response

```json
{
  "key": "temp/site/uploads/default/12345/67890.jpg",
  "external_upload_identifier": "84x83tmxy398t3y._Q_z8CoJYVr69bE6D7f8J6Oo0434QquLFoYdGVerWFx9X5HDEI_TP_95c34n853495x35345394.d.ghQ",
  "unique_identifier": "66e86218-80d9-4bda-b4d5-2b6def968705"
}
```

<h3 id="creates-a-multipart-external-upload-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|external upload initialized|Inline|

<h3 id="creates-a-multipart-external-upload-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|key|string|true|none|The path of the temporary file on the external storage<br>service.|
|external_upload_identifier|string|true|none|The identifier of the multipart upload in the external<br>storage provider. This is the multipart upload_id in AWS S3.|
|unique_identifier|string|true|none|A unique string that identifies the external upload.<br>This must be stored and then sent in the /complete-multipart<br>and /batch-presign-multipart-parts endpoints.|

<aside class="success">
This operation does not require authentication
</aside>

## Generates batches of presigned URLs for multipart parts

<a id="opIdbatchPresignMultipartParts"></a>

> Code samples

```bash
curl https://discourse.example.com/uploads/batch-presign-multipart-parts.json \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "part_numbers": [
      1,
      2,
      3
    ],
    "unique_identifier": "66e86218-80d9-4bda-b4d5-2b6def968705"
  }'
```

`POST /uploads/batch-presign-multipart-parts.json`

Multipart uploads are uploaded in chunks or parts to individual presigned
URLs, similar to the one generated by /generate-presigned-put. The part
numbers provided must be between 1 and 10000. The total number of parts
will depend on the chunk size in bytes that you intend to use to upload
each chunk. For example a 12MB file may have 2 5MB chunks and a final
2MB chunk, for part numbers 1, 2, and 3.

This endpoint will return a presigned URL for each part number provided,
which you can then use to send PUT requests for the binary chunk corresponding
to that part. When the part is uploaded, the provider should return an
ETag for the part, and this should be stored along with the part number,
because this is needed to complete the multipart upload.

You must have the correct permissions and CORS settings configured in your
external provider. We support AWS S3 as the default. See:

https://meta.discourse.org/t/-/210469#s3-multipart-direct-uploads-4.

An external file store must be set up and `enable_direct_s3_uploads` must
be set to true for this endpoint to function.



> Body parameter

```json
{
  "part_numbers": [
    1,
    2,
    3
  ],
  "unique_identifier": "66e86218-80d9-4bda-b4d5-2b6def968705"
}
```

<h3 id="generates-batches-of-presigned-urls-for-multipart-parts-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» part_numbers|body|array|true|The part numbers to generate the presigned URLs for,<br>must be between 1 and 10000.|
|» unique_identifier|body|string|true|The unique identifier returned in the original /create-multipart<br>request.|

> Example responses

> 200 Response

```json
{
  "presigned_urls": {
    "1": "https://discourse-martin-uploads-test.s3.us-east-2.amazonaws.com/temp/uploads/default/123abc/123abc.jpg?partNumber=1&uploadId=123456abcd&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=test&X-Amz-Date=20211222T012336Z&X-Amz-Expires=600&X-Amz-SignedHeaders=host&X-Amz-Signature=abc123"
  }
}
```

<h3 id="generates-batches-of-presigned-urls-for-multipart-parts-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|external upload initialized|Inline|

<h3 id="generates-batches-of-presigned-urls-for-multipart-parts-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|presigned_urls|object|true|none|The presigned URLs for each part number, which has<br>the part numbers as keys.|

<aside class="success">
This operation does not require authentication
</aside>

## Abort multipart upload

<a id="opIdabortMultipart"></a>

> Code samples

```bash
curl https://discourse.example.com/uploads/abort-multipart.json \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "external_upload_identifier": "84x83tmxy398t3y._Q_z8CoJYVr69bE6D7f8J6Oo0434QquLFoYdGVerWFx9X5HDEI_TP_95c34n853495x35345394.d.ghQ"
  }'
```

`POST /uploads/abort-multipart.json`

This endpoint aborts the multipart upload initiated with /create-multipart.
This should be used when cancelling the upload. It does not matter if parts
were already uploaded into the external storage provider.

You must have the correct permissions and CORS settings configured in your
external provider. We support AWS S3 as the default. See:

https://meta.discourse.org/t/-/210469#s3-multipart-direct-uploads-4.

An external file store must be set up and `enable_direct_s3_uploads` must
be set to true for this endpoint to function.



> Body parameter

```json
{
  "external_upload_identifier": "84x83tmxy398t3y._Q_z8CoJYVr69bE6D7f8J6Oo0434QquLFoYdGVerWFx9X5HDEI_TP_95c34n853495x35345394.d.ghQ"
}
```

<h3 id="abort-multipart-upload-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» external_upload_identifier|body|string|true|The identifier of the multipart upload in the external<br>storage provider. This is the multipart upload_id in AWS S3.|

> Example responses

> 200 Response

```json
{
  "success": "OK"
}
```

<h3 id="abort-multipart-upload-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|external upload initialized|Inline|

<h3 id="abort-multipart-upload-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|string|true|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Complete multipart upload

<a id="opIdcompleteMultipart"></a>

> Code samples

```bash
curl https://discourse.example.com/uploads/complete-multipart.json \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "unique_identifier": "66e86218-80d9-4bda-b4d5-2b6def968705",
    "parts": [
      {
        "part_number": 1,
        "etag": "0c376dcfcc2606f4335bbc732de93344"
      },
      {
        "part_number": 2,
        "etag": "09ert8cfcc2606f4335bbc732de91122"
      }
    ]
  }'
```

`POST /uploads/complete-multipart.json`

Completes the multipart upload in the external store, and copies the
file from its temporary location to its final location in the store.
All of the parts must have been uploaded to the external storage provider.
An Upload record will be completed in most cases once the file is copied
to its final location.

You must have the correct permissions and CORS settings configured in your
external provider. We support AWS S3 as the default. See:

https://meta.discourse.org/t/-/210469#s3-multipart-direct-uploads-4.

An external file store must be set up and `enable_direct_s3_uploads` must
be set to true for this endpoint to function.



> Body parameter

```json
{
  "unique_identifier": "66e86218-80d9-4bda-b4d5-2b6def968705",
  "parts": [
    {
      "part_number": 1,
      "etag": "0c376dcfcc2606f4335bbc732de93344"
    },
    {
      "part_number": 2,
      "etag": "09ert8cfcc2606f4335bbc732de91122"
    }
  ]
}
```

<h3 id="complete-multipart-upload-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» unique_identifier|body|string|true|The unique identifier returned in the original /create-multipart<br>request.|
|» parts|body|array|true|All of the part numbers and their corresponding ETags<br>that have been uploaded must be provided.|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "url": "string",
  "original_filename": "string",
  "filesize": 0,
  "width": 0,
  "height": 0,
  "thumbnail_width": 0,
  "thumbnail_height": 0,
  "extension": "string",
  "short_url": "string",
  "short_path": "string",
  "retain_hours": "string",
  "human_filesize": "string",
  "dominant_color": "string",
  "thumbnail": {
    "id": 0,
    "upload_id": 0,
    "url": "string",
    "extension": "string",
    "width": 0,
    "height": 0,
    "filesize": 0
  },
  "optimized_video": {
    "id": 0,
    "upload_id": 0,
    "url": "string",
    "extension": "string",
    "filesize": 0,
    "sha1": "string",
    "original_filename": "string"
  }
}
```

<h3 id="complete-multipart-upload-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|external upload initialized|Inline|

<h3 id="complete-multipart-upload-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer|true|none|none|
|url|string|true|none|none|
|original_filename|string|true|none|none|
|filesize|integer|true|none|none|
|width|integer|true|none|none|
|height|integer|true|none|none|
|thumbnail_width|integer|true|none|none|
|thumbnail_height|integer|true|none|none|
|extension|string|true|none|none|
|short_url|string|true|none|none|
|short_path|string|true|none|none|
|retain_hours|string \| null|true|none|none|
|human_filesize|string|true|none|none|
|dominant_color|string \| null|false|none|none|
|thumbnail|object \| null|false|none|none|
|» id|integer|false|none|none|
|» upload_id|integer|false|none|none|
|» url|string|false|none|none|
|» extension|string|false|none|none|
|» width|integer|false|none|none|
|» height|integer|false|none|none|
|» filesize|integer|false|none|none|
|optimized_video|object \| null|false|none|none|
|» id|integer|false|none|none|
|» upload_id|integer|false|none|none|
|» url|string|false|none|none|
|» extension|string|false|none|none|
|» filesize|integer|false|none|none|
|» sha1|string|false|none|none|
|» original_filename|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="discourse-api-documentation-users">Users</h1>

## Creates a user

<a id="opIdcreateUser"></a>

> Code samples

```bash
curl https://discourse.example.com/users.json \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'Api-Key: string' \
  -H 'Api-Username: string' \
  -d '{
    "name": "string",
    "email": "string",
    "password": "string",
    "username": "string",
    "active": true,
    "approved": true,
    "user_fields": {
      "1": true
    },
    "external_ids": {}
  }'
```

`POST /users.json`

> Body parameter

```json
{
  "name": "string",
  "email": "string",
  "password": "string",
  "username": "string",
  "active": true,
  "approved": true,
  "user_fields": {
    "1": true
  },
  "external_ids": {}
}
```

<h3 id="creates-a-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Api-Key|header|string|true|none|
|Api-Username|header|string|true|none|
|body|body|object|false|none|
|» name|body|string|true|none|
|» email|body|string|true|none|
|» password|body|string|true|none|
|» username|body|string|true|none|
|» active|body|boolean|false|This param requires an admin api key in the request<br>header or it will be ignored|
|» approved|body|boolean|false|none|
|» user_fields|body|object|false|none|
|» » 1|body|boolean|false|none|
|» external_ids|body|object|false|none|

> Example responses

> 200 Response

```json
{
  "success": true,
  "active": true,
  "message": "string",
  "user_id": 0
}
```

<h3 id="creates-a-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|user created|Inline|

<h3 id="creates-a-user-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|true|none|none|
|active|boolean|true|none|none|
|message|string|true|none|none|
|user_id|integer|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Get a single user by username

<a id="opIdgetUser"></a>

> Code samples

```bash
curl https://discourse.example.com/u/string.json \
  -H 'Accept: application/json' \
  -H 'Api-Key: string' \
  -H 'Api-Username: string'
```

`GET /u/{username}.json`

<h3 id="get-a-single-user-by-username-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Api-Key|header|string|true|none|
|Api-Username|header|string|true|none|
|username|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "user_badges": [
    null
  ],
  "user": {
    "id": 0,
    "username": "string",
    "name": "string",
    "avatar_template": "string",
    "last_posted_at": "string",
    "last_seen_at": "string",
    "created_at": "string",
    "ignored": true,
    "muted": true,
    "can_ignore_user": true,
    "can_ignore_users": true,
    "can_mute_user": true,
    "can_mute_users": true,
    "can_send_private_messages": true,
    "can_send_private_message_to_user": true,
    "trust_level": 0,
    "moderator": true,
    "admin": true,
    "title": "string",
    "badge_count": 0,
    "second_factor_backup_enabled": true,
    "user_fields": {
      "1": "string",
      "2": "string"
    },
    "custom_fields": {
      "first_name": "string"
    },
    "time_read": 0,
    "recent_time_read": 0,
    "primary_group_id": 0,
    "primary_group_name": "string",
    "flair_group_id": 0,
    "flair_name": "string",
    "flair_url": "string",
    "flair_bg_color": "string",
    "flair_color": "string",
    "featured_topic": {
      "id": 0,
      "title": "string",
      "fancy_title": "string",
      "slug": "string",
      "posts_count": 0
    },
    "staged": true,
    "can_edit": true,
    "can_edit_avatar": true,
    "can_upload_avatar": true,
    "can_edit_username": true,
    "can_edit_email": true,
    "can_edit_name": true,
    "uploaded_avatar_id": 0,
    "has_title_badges": true,
    "pending_count": 0,
    "pending_posts_count": 0,
    "profile_view_count": 0,
    "second_factor_enabled": true,
    "can_upload_profile_header": true,
    "can_upload_user_card_background": true,
    "post_count": 0,
    "topic_count": 0,
    "can_be_deleted": true,
    "can_delete_all_posts": true,
    "locale": "string",
    "muted_category_ids": [
      null
    ],
    "regular_category_ids": [
      null
    ],
    "watched_tags": [
      null
    ],
    "watching_first_post_tags": [
      null
    ],
    "tracked_tags": [
      null
    ],
    "muted_tags": [
      null
    ],
    "tracked_category_ids": [
      null
    ],
    "watched_category_ids": [
      null
    ],
    "watched_first_post_category_ids": [
      null
    ],
    "system_avatar_upload_id": "string",
    "system_avatar_template": "string",
    "associated_account_avatars": [
      {
        "id": 0,
        "name": "string",
        "upload_id": 0,
        "avatar_template": "string"
      }
    ],
    "selected_user_associated_account_id": 0,
    "muted_usernames": [
      null
    ],
    "ignored_usernames": [
      null
    ],
    "allowed_pm_usernames": [
      null
    ],
    "mailing_list_posts_per_day": 0,
    "can_change_bio": true,
    "can_change_location": true,
    "can_change_website": true,
    "can_change_tracking_preferences": true,
    "user_api_keys": "string",
    "user_passkeys": [],
    "sidebar_tags": [],
    "sidebar_category_ids": [],
    "display_sidebar_tags": true,
    "can_pick_theme_with_custom_homepage": true,
    "user_auth_tokens": [
      {
        "id": 0,
        "client_ip": "string",
        "location": "string",
        "browser": "string",
        "device": "string",
        "os": "string",
        "icon": "string",
        "created_at": "string",
        "seen_at": "string",
        "is_active": true
      }
    ],
    "user_notification_schedule": {
      "enabled": true,
      "day_0_start_time": 0,
      "day_0_end_time": 0,
      "day_1_start_time": 0,
      "day_1_end_time": 0,
      "day_2_start_time": 0,
      "day_2_end_time": 0,
      "day_3_start_time": 0,
      "day_3_end_time": 0,
      "day_4_start_time": 0,
      "day_4_end_time": 0,
      "day_5_start_time": 0,
      "day_5_end_time": 0,
      "day_6_start_time": 0,
      "day_6_end_time": 0
    },
    "use_logo_small_as_avatar": true,
    "featured_user_badge_ids": [
      null
    ],
    "invited_by": "string",
    "groups": [
      {
        "id": 0,
        "automatic": true,
        "name": "string",
        "display_name": "string",
        "user_count": 0,
        "mentionable_level": 0,
        "messageable_level": 0,
        "visibility_level": 0,
        "primary_group": true,
        "title": "string",
        "grant_trust_level": "string",
        "incoming_email": "string",
        "has_messages": true,
        "flair_url": "string",
        "flair_bg_color": "string",
        "flair_color": "string",
        "bio_raw": "string",
        "bio_cooked": "string",
        "bio_excerpt": "string",
        "public_admission": true,
        "public_exit": true,
        "allow_membership_requests": true,
        "full_name": "string",
        "default_notification_level": 0,
        "membership_request_template": "string",
        "members_visibility_level": 0,
        "can_see_members": true,
        "can_admin_group": true,
        "publish_read_state": true
      }
    ],
    "group_users": [
      {
        "group_id": 0,
        "user_id": 0,
        "notification_level": 0,
        "owner": true
      }
    ],
    "user_option": {
      "user_id": 0,
      "mailing_list_mode": true,
      "mailing_list_mode_frequency": 0,
      "email_digests": true,
      "email_level": 0,
      "email_messages_level": 0,
      "external_links_in_new_tab": true,
      "bookmark_auto_delete_preference": 0,
      "color_scheme_id": "string",
      "dark_scheme_id": "string",
      "dynamic_favicon": true,
      "enable_quoting": true,
      "enable_smart_lists": true,
      "enable_markdown_monospace_font": true,
      "digest_after_minutes": 0,
      "automatically_unpin_topics": true,
      "auto_track_topics_after_msecs": 0,
      "notification_level_when_replying": 0,
      "new_topic_duration_minutes": 0,
      "email_previous_replies": 0,
      "email_in_reply_to": true,
      "like_notification_frequency": 0,
      "notify_on_linked_posts": true,
      "push_notification_level": "string",
      "enable_upcoming_change_available_notifications": true,
      "include_tl0_in_digests": true,
      "theme_ids": [
        null
      ],
      "theme_key_seq": 0,
      "allow_private_messages": true,
      "enable_allowed_pm_users": true,
      "homepage_id": "string",
      "hide_profile_and_presence": true,
      "hide_profile": true,
      "hide_presence": true,
      "text_size": "string",
      "text_size_seq": 0,
      "title_count_mode": "string",
      "timezone": "string",
      "skip_new_user_tips": true,
      "default_calendar": "string",
      "oldest_search_log_date": "string",
      "sidebar_link_to_filtered_list": true,
      "sidebar_show_count_of_new_items": true,
      "watched_precedence_over_muted": true,
      "seen_popups": [],
      "composition_mode": 0,
      "interface_color_mode": 0,
      "automatically_translate": true,
      "understood_languages": [
        "string"
      ],
      "hidden_composer_toolbar_buttons": [
        "string"
      ],
      "show_original_content": true,
      "send_shortcut": "string"
    }
  }
}
```

<h3 id="get-a-single-user-by-username-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|user with primary group response|Inline|

<h3 id="get-a-single-user-by-username-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|user_badges|[object]|true|none|none|
|user|object|true|none|none|
|» id|integer|true|none|none|
|» username|string|true|none|none|
|» name|string|true|none|none|
|» avatar_template|string|true|none|none|
|» last_posted_at|string \| null|true|none|none|
|» last_seen_at|string \| null|true|none|none|
|» created_at|string|true|none|none|
|» ignored|boolean|true|none|none|
|» muted|boolean|true|none|none|
|» can_ignore_user|boolean|true|none|none|
|» can_ignore_users|boolean|false|none|none|
|» can_mute_user|boolean|true|none|none|
|» can_mute_users|boolean|false|none|none|
|» can_send_private_messages|boolean|true|none|none|
|» can_send_private_message_to_user|boolean|true|none|none|
|» trust_level|integer|true|none|none|
|» moderator|boolean|true|none|none|
|» admin|boolean|true|none|none|
|» title|string \| null|true|none|none|
|» badge_count|integer|true|none|none|
|» second_factor_backup_enabled|boolean|false|none|none|
|» user_fields|object|false|none|none|
|» » 1|string \| null|true|none|none|
|» » 2|string \| null|true|none|none|
|» custom_fields|object|true|none|none|
|» » first_name|string \| null|false|none|none|
|» time_read|integer|true|none|none|
|» recent_time_read|integer|true|none|none|
|» primary_group_id|integer \| null|true|none|none|
|» primary_group_name|string \| null|true|none|none|
|» flair_group_id|integer \| null|true|none|none|
|» flair_name|string \| null|true|none|none|
|» flair_url|string \| null|true|none|none|
|» flair_bg_color|string \| null|true|none|none|
|» flair_color|string \| null|true|none|none|
|» featured_topic|object|true|none|none|
|» » id|integer|true|none|none|
|» » title|string|true|none|none|
|» » fancy_title|string|true|none|none|
|» » slug|string|true|none|none|
|» » posts_count|integer|true|none|none|
|» staged|boolean|true|none|none|
|» can_edit|boolean|true|none|none|
|» can_edit_avatar|boolean|true|none|none|
|» can_upload_avatar|boolean|true|none|none|
|» can_edit_username|boolean|true|none|none|
|» can_edit_email|boolean|true|none|none|
|» can_edit_name|boolean|true|none|none|
|» uploaded_avatar_id|integer \| null|true|none|none|
|» has_title_badges|boolean|true|none|none|
|» pending_count|integer|true|none|none|
|» pending_posts_count|integer|false|none|none|
|» profile_view_count|integer|true|none|none|
|» second_factor_enabled|boolean|true|none|none|
|» can_upload_profile_header|boolean|true|none|none|
|» can_upload_user_card_background|boolean|true|none|none|
|» post_count|integer|true|none|none|
|» topic_count|integer|true|none|none|
|» can_be_deleted|boolean|true|none|none|
|» can_delete_all_posts|boolean|true|none|none|
|» locale|string \| null|true|none|none|
|» muted_category_ids|[object]|true|none|none|
|» regular_category_ids|[object]|true|none|none|
|» watched_tags|[object]|true|none|none|
|» watching_first_post_tags|[object]|true|none|none|
|» tracked_tags|[object]|true|none|none|
|» muted_tags|[object]|true|none|none|
|» tracked_category_ids|[object]|true|none|none|
|» watched_category_ids|[object]|true|none|none|
|» watched_first_post_category_ids|[object]|true|none|none|
|» system_avatar_upload_id|string \| null|true|none|none|
|» system_avatar_template|string|true|none|none|
|» associated_account_avatars|[object]|true|none|none|
|» » id|integer|true|none|none|
|» » name|string|true|none|none|
|» » upload_id|integer|true|none|none|
|» » avatar_template|string|true|none|none|
|» selected_user_associated_account_id|integer \| null|true|none|none|
|» muted_usernames|[object]|true|none|none|
|» ignored_usernames|[object]|true|none|none|
|» allowed_pm_usernames|[object]|true|none|none|
|» mailing_list_posts_per_day|integer|true|none|none|
|» can_change_bio|boolean|true|none|none|
|» can_change_location|boolean|true|none|none|
|» can_change_website|boolean|true|none|none|
|» can_change_tracking_preferences|boolean|true|none|none|
|» user_api_keys|string \| null|true|none|none|
|» user_passkeys|array|false|none|none|
|» sidebar_tags|array|false|none|none|
|» sidebar_category_ids|array|false|none|none|
|» display_sidebar_tags|boolean|false|none|none|
|» can_pick_theme_with_custom_homepage|boolean|false|none|none|
|» user_auth_tokens|[object]|true|none|none|
|» » id|integer|true|none|none|
|» » client_ip|string|true|none|none|
|» » location|string|true|none|none|
|» » browser|string|true|none|none|
|» » device|string|true|none|none|
|» » os|string|true|none|none|
|» » icon|string|true|none|none|
|» » created_at|string|true|none|none|
|» » seen_at|string|true|none|none|
|» » is_active|boolean|true|none|none|
|» user_notification_schedule|object|true|none|none|
|» » enabled|boolean|true|none|none|
|» » day_0_start_time|integer|true|none|none|
|» » day_0_end_time|integer|true|none|none|
|» » day_1_start_time|integer|true|none|none|
|» » day_1_end_time|integer|true|none|none|
|» » day_2_start_time|integer|true|none|none|
|» » day_2_end_time|integer|true|none|none|
|» » day_3_start_time|integer|true|none|none|
|» » day_3_end_time|integer|true|none|none|
|» » day_4_start_time|integer|true|none|none|
|» » day_4_end_time|integer|true|none|none|
|» » day_5_start_time|integer|true|none|none|
|» » day_5_end_time|integer|true|none|none|
|» » day_6_start_time|integer|true|none|none|
|» » day_6_end_time|integer|true|none|none|
|» use_logo_small_as_avatar|boolean|true|none|none|
|» featured_user_badge_ids|[object]|true|none|none|
|» invited_by|string \| null|true|none|none|
|» groups|[object]|true|none|none|
|» » id|integer|true|none|none|
|» » automatic|boolean|true|none|none|
|» » name|string|true|none|none|
|» » display_name|string|true|none|none|
|» » user_count|integer|true|none|none|
|» » mentionable_level|integer|true|none|none|
|» » messageable_level|integer|true|none|none|
|» » visibility_level|integer|true|none|none|
|» » primary_group|boolean|true|none|none|
|» » title|string \| null|true|none|none|
|» » grant_trust_level|string \| null|true|none|none|
|» » incoming_email|string \| null|true|none|none|
|» » has_messages|boolean|true|none|none|
|» » flair_url|string \| null|true|none|none|
|» » flair_bg_color|string \| null|true|none|none|
|» » flair_color|string \| null|true|none|none|
|» » bio_raw|string \| null|true|none|none|
|» » bio_cooked|string \| null|true|none|none|
|» » bio_excerpt|string \| null|true|none|none|
|» » public_admission|boolean|true|none|none|
|» » public_exit|boolean|true|none|none|
|» » allow_membership_requests|boolean|true|none|none|
|» » full_name|string \| null|true|none|none|
|» » default_notification_level|integer|true|none|none|
|» » membership_request_template|string \| null|true|none|none|
|» » members_visibility_level|integer|true|none|none|
|» » can_see_members|boolean|true|none|none|
|» » can_admin_group|boolean|true|none|none|
|» » publish_read_state|boolean|true|none|none|
|» group_users|[object]|true|none|none|
|» » group_id|integer|true|none|none|
|» » user_id|integer|true|none|none|
|» » notification_level|integer|true|none|none|
|» » owner|boolean|false|none|none|
|» user_option|object|true|none|none|
|» » user_id|integer|true|none|none|
|» » mailing_list_mode|boolean|true|none|none|
|» » mailing_list_mode_frequency|integer|true|none|none|
|» » email_digests|boolean|true|none|none|
|» » email_level|integer|true|none|none|
|» » email_messages_level|integer|true|none|none|
|» » external_links_in_new_tab|boolean|true|none|none|
|» » bookmark_auto_delete_preference|integer|false|none|none|
|» » color_scheme_id|string \| null|true|none|none|
|» » dark_scheme_id|string \| null|true|none|none|
|» » dynamic_favicon|boolean|true|none|none|
|» » enable_quoting|boolean|true|none|none|
|» » enable_smart_lists|boolean|true|none|none|
|» » enable_markdown_monospace_font|boolean|true|none|none|
|» » digest_after_minutes|integer|true|none|none|
|» » automatically_unpin_topics|boolean|true|none|none|
|» » auto_track_topics_after_msecs|integer|true|none|none|
|» » notification_level_when_replying|integer|true|none|none|
|» » new_topic_duration_minutes|integer|true|none|none|
|» » email_previous_replies|integer|true|none|none|
|» » email_in_reply_to|boolean|true|none|none|
|» » like_notification_frequency|integer|true|none|none|
|» » notify_on_linked_posts|boolean|true|none|none|
|» » push_notification_level|string|true|none|none|
|» » enable_upcoming_change_available_notifications|boolean|true|none|none|
|» » include_tl0_in_digests|boolean|true|none|none|
|» » theme_ids|[object]|true|none|none|
|» » theme_key_seq|integer|true|none|none|
|» » allow_private_messages|boolean|true|none|none|
|» » enable_allowed_pm_users|boolean|true|none|none|
|» » homepage_id|string \| null|true|none|none|
|» » hide_profile_and_presence|boolean|true|none|none|
|» » hide_profile|boolean|true|none|none|
|» » hide_presence|boolean|true|none|none|
|» » text_size|string|true|none|none|
|» » text_size_seq|integer|true|none|none|
|» » title_count_mode|string|true|none|none|
|» » timezone|string \| null|true|none|none|
|» » skip_new_user_tips|boolean|true|none|none|
|» » default_calendar|string|false|none|none|
|» » oldest_search_log_date|string \| null|false|none|none|
|» » sidebar_link_to_filtered_list|boolean|false|none|none|
|» » sidebar_show_count_of_new_items|boolean|false|none|none|
|» » watched_precedence_over_muted|boolean|false|none|none|
|» » seen_popups|array|false|none|none|
|» » composition_mode|integer|false|none|none|
|» » interface_color_mode|integer|true|none|none|
|» » automatically_translate|boolean|true|none|none|
|» » understood_languages|[string]|true|none|none|
|» » hidden_composer_toolbar_buttons|[string]|true|none|none|
|» » show_original_content|boolean|true|none|none|
|» » send_shortcut|string|true|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Update a user

<a id="opIdupdateUser"></a>

> Code samples

```bash
curl https://discourse.example.com/u/string.json \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'Api-Key: string' \
  -H 'Api-Username: string' \
  -d '{
    "name": "string",
    "external_ids": {}
  }'
```

`PUT /u/{username}.json`

> Body parameter

```json
{
  "name": "string",
  "external_ids": {}
}
```

<h3 id="update-a-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Api-Key|header|string|true|none|
|Api-Username|header|string|true|none|
|username|path|string|true|none|
|body|body|object|false|none|
|» name|body|string|false|none|
|» external_ids|body|object|false|none|

> Example responses

> 200 Response

```json
{
  "success": "string",
  "user": {}
}
```

<h3 id="update-a-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|user updated|Inline|

<h3 id="update-a-user-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|string|true|none|none|
|user|object|true|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Get a user by external_id

<a id="opIdgetUserExternalId"></a>

> Code samples

```bash
curl https://discourse.example.com/u/by-external/string.json \
  -H 'Accept: application/json' \
  -H 'Api-Key: string' \
  -H 'Api-Username: string'
```

`GET /u/by-external/{external_id}.json`

<h3 id="get-a-user-by-externalid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Api-Key|header|string|true|none|
|Api-Username|header|string|true|none|
|external_id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "user_badges": [
    null
  ],
  "user": {
    "id": 0,
    "username": "string",
    "name": "string",
    "avatar_template": "string",
    "last_posted_at": "string",
    "last_seen_at": "string",
    "created_at": "string",
    "ignored": true,
    "muted": true,
    "can_ignore_user": true,
    "can_ignore_users": true,
    "can_mute_user": true,
    "can_mute_users": true,
    "can_send_private_messages": true,
    "can_send_private_message_to_user": true,
    "trust_level": 0,
    "moderator": true,
    "admin": true,
    "title": "string",
    "badge_count": 0,
    "second_factor_backup_enabled": true,
    "user_fields": {
      "1": "string",
      "2": "string"
    },
    "custom_fields": {
      "first_name": "string"
    },
    "time_read": 0,
    "recent_time_read": 0,
    "primary_group_id": 0,
    "primary_group_name": "string",
    "flair_group_id": 0,
    "flair_name": "string",
    "flair_url": "string",
    "flair_bg_color": "string",
    "flair_color": "string",
    "featured_topic": {
      "id": 0,
      "title": "string",
      "fancy_title": "string",
      "slug": "string",
      "posts_count": 0
    },
    "staged": true,
    "can_edit": true,
    "can_edit_avatar": true,
    "can_upload_avatar": true,
    "can_edit_username": true,
    "can_edit_email": true,
    "can_edit_name": true,
    "uploaded_avatar_id": 0,
    "has_title_badges": true,
    "pending_count": 0,
    "pending_posts_count": 0,
    "profile_view_count": 0,
    "second_factor_enabled": true,
    "can_upload_profile_header": true,
    "can_upload_user_card_background": true,
    "post_count": 0,
    "topic_count": 0,
    "can_be_deleted": true,
    "can_delete_all_posts": true,
    "locale": "string",
    "muted_category_ids": [
      null
    ],
    "regular_category_ids": [
      null
    ],
    "watched_tags": [
      null
    ],
    "watching_first_post_tags": [
      null
    ],
    "tracked_tags": [
      null
    ],
    "muted_tags": [
      null
    ],
    "tracked_category_ids": [
      null
    ],
    "watched_category_ids": [
      null
    ],
    "watched_first_post_category_ids": [
      null
    ],
    "system_avatar_upload_id": "string",
    "system_avatar_template": "string",
    "associated_account_avatars": [
      {
        "id": 0,
        "name": "string",
        "upload_id": 0,
        "avatar_template": "string"
      }
    ],
    "selected_user_associated_account_id": 0,
    "muted_usernames": [
      null
    ],
    "ignored_usernames": [
      null
    ],
    "allowed_pm_usernames": [
      null
    ],
    "mailing_list_posts_per_day": 0,
    "can_change_bio": true,
    "can_change_location": true,
    "can_change_website": true,
    "can_change_tracking_preferences": true,
    "user_api_keys": "string",
    "user_passkeys": [],
    "sidebar_tags": [],
    "sidebar_category_ids": [],
    "display_sidebar_tags": true,
    "can_pick_theme_with_custom_homepage": true,
    "user_auth_tokens": [
      {
        "id": 0,
        "client_ip": "string",
        "location": "string",
        "browser": "string",
        "device": "string",
        "os": "string",
        "icon": "string",
        "created_at": "string",
        "seen_at": "string",
        "is_active": true
      }
    ],
    "user_notification_schedule": {
      "enabled": true,
      "day_0_start_time": 0,
      "day_0_end_time": 0,
      "day_1_start_time": 0,
      "day_1_end_time": 0,
      "day_2_start_time": 0,
      "day_2_end_time": 0,
      "day_3_start_time": 0,
      "day_3_end_time": 0,
      "day_4_start_time": 0,
      "day_4_end_time": 0,
      "day_5_start_time": 0,
      "day_5_end_time": 0,
      "day_6_start_time": 0,
      "day_6_end_time": 0
    },
    "use_logo_small_as_avatar": true,
    "featured_user_badge_ids": [
      null
    ],
    "invited_by": "string",
    "groups": [
      {
        "id": 0,
        "automatic": true,
        "name": "string",
        "display_name": "string",
        "user_count": 0,
        "mentionable_level": 0,
        "messageable_level": 0,
        "visibility_level": 0,
        "primary_group": true,
        "title": "string",
        "grant_trust_level": "string",
        "incoming_email": "string",
        "has_messages": true,
        "flair_url": "string",
        "flair_bg_color": "string",
        "flair_color": "string",
        "bio_raw": "string",
        "bio_cooked": "string",
        "bio_excerpt": "string",
        "public_admission": true,
        "public_exit": true,
        "allow_membership_requests": true,
        "full_name": "string",
        "default_notification_level": 0,
        "membership_request_template": "string",
        "members_visibility_level": 0,
        "can_see_members": true,
        "can_admin_group": true,
        "publish_read_state": true
      }
    ],
    "group_users": [
      {
        "group_id": 0,
        "user_id": 0,
        "notification_level": 0,
        "owner": true
      }
    ],
    "user_option": {
      "user_id": 0,
      "mailing_list_mode": true,
      "mailing_list_mode_frequency": 0,
      "email_digests": true,
      "email_level": 0,
      "email_messages_level": 0,
      "external_links_in_new_tab": true,
      "bookmark_auto_delete_preference": 0,
      "color_scheme_id": "string",
      "dark_scheme_id": "string",
      "dynamic_favicon": true,
      "enable_quoting": true,
      "enable_smart_lists": true,
      "enable_markdown_monospace_font": true,
      "digest_after_minutes": 0,
      "automatically_unpin_topics": true,
      "auto_track_topics_after_msecs": 0,
      "notification_level_when_replying": 0,
      "new_topic_duration_minutes": 0,
      "email_previous_replies": 0,
      "email_in_reply_to": true,
      "like_notification_frequency": 0,
      "notify_on_linked_posts": true,
      "push_notification_level": "string",
      "enable_upcoming_change_available_notifications": true,
      "include_tl0_in_digests": true,
      "theme_ids": [
        null
      ],
      "theme_key_seq": 0,
      "allow_private_messages": true,
      "enable_allowed_pm_users": true,
      "homepage_id": "string",
      "hide_profile_and_presence": true,
      "hide_profile": true,
      "hide_presence": true,
      "text_size": "string",
      "text_size_seq": 0,
      "title_count_mode": "string",
      "timezone": "string",
      "skip_new_user_tips": true,
      "default_calendar": "string",
      "oldest_search_log_date": "string",
      "sidebar_link_to_filtered_list": true,
      "sidebar_show_count_of_new_items": true,
      "watched_precedence_over_muted": true,
      "seen_popups": [],
      "composition_mode": 0,
      "interface_color_mode": 0,
      "automatically_translate": true,
      "understood_languages": [
        "string"
      ],
      "hidden_composer_toolbar_buttons": [
        "string"
      ],
      "show_original_content": true,
      "send_shortcut": "string"
    }
  }
}
```

<h3 id="get-a-user-by-externalid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|user response|Inline|

<h3 id="get-a-user-by-externalid-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|user_badges|[object]|true|none|none|
|user|object|true|none|none|
|» id|integer|true|none|none|
|» username|string|true|none|none|
|» name|string|true|none|none|
|» avatar_template|string|true|none|none|
|» last_posted_at|string \| null|true|none|none|
|» last_seen_at|string \| null|true|none|none|
|» created_at|string|true|none|none|
|» ignored|boolean|true|none|none|
|» muted|boolean|true|none|none|
|» can_ignore_user|boolean|true|none|none|
|» can_ignore_users|boolean|false|none|none|
|» can_mute_user|boolean|true|none|none|
|» can_mute_users|boolean|false|none|none|
|» can_send_private_messages|boolean|true|none|none|
|» can_send_private_message_to_user|boolean|true|none|none|
|» trust_level|integer|true|none|none|
|» moderator|boolean|true|none|none|
|» admin|boolean|true|none|none|
|» title|string \| null|true|none|none|
|» badge_count|integer|true|none|none|
|» second_factor_backup_enabled|boolean|false|none|none|
|» user_fields|object|false|none|none|
|» » 1|string \| null|true|none|none|
|» » 2|string \| null|true|none|none|
|» custom_fields|object|true|none|none|
|» » first_name|string \| null|false|none|none|
|» time_read|integer|true|none|none|
|» recent_time_read|integer|true|none|none|
|» primary_group_id|integer \| null|true|none|none|
|» primary_group_name|string \| null|true|none|none|
|» flair_group_id|integer \| null|true|none|none|
|» flair_name|string \| null|true|none|none|
|» flair_url|string \| null|true|none|none|
|» flair_bg_color|string \| null|true|none|none|
|» flair_color|string \| null|true|none|none|
|» featured_topic|object|true|none|none|
|» » id|integer|true|none|none|
|» » title|string|true|none|none|
|» » fancy_title|string|true|none|none|
|» » slug|string|true|none|none|
|» » posts_count|integer|true|none|none|
|» staged|boolean|true|none|none|
|» can_edit|boolean|true|none|none|
|» can_edit_avatar|boolean|true|none|none|
|» can_upload_avatar|boolean|true|none|none|
|» can_edit_username|boolean|true|none|none|
|» can_edit_email|boolean|true|none|none|
|» can_edit_name|boolean|true|none|none|
|» uploaded_avatar_id|integer \| null|true|none|none|
|» has_title_badges|boolean|true|none|none|
|» pending_count|integer|true|none|none|
|» pending_posts_count|integer|false|none|none|
|» profile_view_count|integer|true|none|none|
|» second_factor_enabled|boolean|true|none|none|
|» can_upload_profile_header|boolean|true|none|none|
|» can_upload_user_card_background|boolean|true|none|none|
|» post_count|integer|true|none|none|
|» topic_count|integer|true|none|none|
|» can_be_deleted|boolean|true|none|none|
|» can_delete_all_posts|boolean|true|none|none|
|» locale|string \| null|true|none|none|
|» muted_category_ids|[object]|true|none|none|
|» regular_category_ids|[object]|true|none|none|
|» watched_tags|[object]|true|none|none|
|» watching_first_post_tags|[object]|true|none|none|
|» tracked_tags|[object]|true|none|none|
|» muted_tags|[object]|true|none|none|
|» tracked_category_ids|[object]|true|none|none|
|» watched_category_ids|[object]|true|none|none|
|» watched_first_post_category_ids|[object]|true|none|none|
|» system_avatar_upload_id|string \| null|true|none|none|
|» system_avatar_template|string|true|none|none|
|» associated_account_avatars|[object]|true|none|none|
|» » id|integer|true|none|none|
|» » name|string|true|none|none|
|» » upload_id|integer|true|none|none|
|» » avatar_template|string|true|none|none|
|» selected_user_associated_account_id|integer \| null|true|none|none|
|» muted_usernames|[object]|true|none|none|
|» ignored_usernames|[object]|true|none|none|
|» allowed_pm_usernames|[object]|true|none|none|
|» mailing_list_posts_per_day|integer|true|none|none|
|» can_change_bio|boolean|true|none|none|
|» can_change_location|boolean|true|none|none|
|» can_change_website|boolean|true|none|none|
|» can_change_tracking_preferences|boolean|true|none|none|
|» user_api_keys|string \| null|true|none|none|
|» user_passkeys|array|false|none|none|
|» sidebar_tags|array|false|none|none|
|» sidebar_category_ids|array|false|none|none|
|» display_sidebar_tags|boolean|false|none|none|
|» can_pick_theme_with_custom_homepage|boolean|false|none|none|
|» user_auth_tokens|[object]|true|none|none|
|» » id|integer|true|none|none|
|» » client_ip|string|true|none|none|
|» » location|string|true|none|none|
|» » browser|string|true|none|none|
|» » device|string|true|none|none|
|» » os|string|true|none|none|
|» » icon|string|true|none|none|
|» » created_at|string|true|none|none|
|» » seen_at|string|true|none|none|
|» » is_active|boolean|true|none|none|
|» user_notification_schedule|object|true|none|none|
|» » enabled|boolean|true|none|none|
|» » day_0_start_time|integer|true|none|none|
|» » day_0_end_time|integer|true|none|none|
|» » day_1_start_time|integer|true|none|none|
|» » day_1_end_time|integer|true|none|none|
|» » day_2_start_time|integer|true|none|none|
|» » day_2_end_time|integer|true|none|none|
|» » day_3_start_time|integer|true|none|none|
|» » day_3_end_time|integer|true|none|none|
|» » day_4_start_time|integer|true|none|none|
|» » day_4_end_time|integer|true|none|none|
|» » day_5_start_time|integer|true|none|none|
|» » day_5_end_time|integer|true|none|none|
|» » day_6_start_time|integer|true|none|none|
|» » day_6_end_time|integer|true|none|none|
|» use_logo_small_as_avatar|boolean|true|none|none|
|» featured_user_badge_ids|[object]|true|none|none|
|» invited_by|string \| null|true|none|none|
|» groups|[object]|true|none|none|
|» » id|integer|true|none|none|
|» » automatic|boolean|true|none|none|
|» » name|string|true|none|none|
|» » display_name|string|true|none|none|
|» » user_count|integer|true|none|none|
|» » mentionable_level|integer|true|none|none|
|» » messageable_level|integer|true|none|none|
|» » visibility_level|integer|true|none|none|
|» » primary_group|boolean|true|none|none|
|» » title|string \| null|true|none|none|
|» » grant_trust_level|string \| null|true|none|none|
|» » incoming_email|string \| null|true|none|none|
|» » has_messages|boolean|true|none|none|
|» » flair_url|string \| null|true|none|none|
|» » flair_bg_color|string \| null|true|none|none|
|» » flair_color|string \| null|true|none|none|
|» » bio_raw|string \| null|true|none|none|
|» » bio_cooked|string \| null|true|none|none|
|» » bio_excerpt|string \| null|true|none|none|
|» » public_admission|boolean|true|none|none|
|» » public_exit|boolean|true|none|none|
|» » allow_membership_requests|boolean|true|none|none|
|» » full_name|string \| null|true|none|none|
|» » default_notification_level|integer|true|none|none|
|» » membership_request_template|string \| null|true|none|none|
|» » members_visibility_level|integer|true|none|none|
|» » can_see_members|boolean|true|none|none|
|» » can_admin_group|boolean|true|none|none|
|» » publish_read_state|boolean|true|none|none|
|» group_users|[object]|true|none|none|
|» » group_id|integer|true|none|none|
|» » user_id|integer|true|none|none|
|» » notification_level|integer|true|none|none|
|» » owner|boolean|false|none|none|
|» user_option|object|true|none|none|
|» » user_id|integer|true|none|none|
|» » mailing_list_mode|boolean|true|none|none|
|» » mailing_list_mode_frequency|integer|true|none|none|
|» » email_digests|boolean|true|none|none|
|» » email_level|integer|true|none|none|
|» » email_messages_level|integer|true|none|none|
|» » external_links_in_new_tab|boolean|true|none|none|
|» » bookmark_auto_delete_preference|integer|false|none|none|
|» » color_scheme_id|string \| null|true|none|none|
|» » dark_scheme_id|string \| null|true|none|none|
|» » dynamic_favicon|boolean|true|none|none|
|» » enable_quoting|boolean|true|none|none|
|» » enable_smart_lists|boolean|true|none|none|
|» » enable_markdown_monospace_font|boolean|true|none|none|
|» » digest_after_minutes|integer|true|none|none|
|» » automatically_unpin_topics|boolean|true|none|none|
|» » auto_track_topics_after_msecs|integer|true|none|none|
|» » notification_level_when_replying|integer|true|none|none|
|» » new_topic_duration_minutes|integer|true|none|none|
|» » email_previous_replies|integer|true|none|none|
|» » email_in_reply_to|boolean|true|none|none|
|» » like_notification_frequency|integer|true|none|none|
|» » notify_on_linked_posts|boolean|true|none|none|
|» » push_notification_level|string|true|none|none|
|» » enable_upcoming_change_available_notifications|boolean|true|none|none|
|» » include_tl0_in_digests|boolean|true|none|none|
|» » theme_ids|[object]|true|none|none|
|» » theme_key_seq|integer|true|none|none|
|» » allow_private_messages|boolean|true|none|none|
|» » enable_allowed_pm_users|boolean|true|none|none|
|» » homepage_id|string \| null|true|none|none|
|» » hide_profile_and_presence|boolean|true|none|none|
|» » hide_profile|boolean|true|none|none|
|» » hide_presence|boolean|true|none|none|
|» » text_size|string|true|none|none|
|» » text_size_seq|integer|true|none|none|
|» » title_count_mode|string|true|none|none|
|» » timezone|string \| null|true|none|none|
|» » skip_new_user_tips|boolean|true|none|none|
|» » default_calendar|string|false|none|none|
|» » oldest_search_log_date|string \| null|false|none|none|
|» » sidebar_link_to_filtered_list|boolean|false|none|none|
|» » sidebar_show_count_of_new_items|boolean|false|none|none|
|» » watched_precedence_over_muted|boolean|false|none|none|
|» » seen_popups|array|false|none|none|
|» » composition_mode|integer|false|none|none|
|» » interface_color_mode|integer|true|none|none|
|» » automatically_translate|boolean|true|none|none|
|» » understood_languages|[string]|true|none|none|
|» » hidden_composer_toolbar_buttons|[string]|true|none|none|
|» » show_original_content|boolean|true|none|none|
|» » send_shortcut|string|true|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Get a user by identity provider external ID

<a id="opIdgetUserIdentiyProviderExternalId"></a>

> Code samples

```bash
curl https://discourse.example.com/u/by-external/string/string.json \
  -H 'Accept: application/json' \
  -H 'Api-Key: string' \
  -H 'Api-Username: string'
```

`GET /u/by-external/{provider}/{external_id}.json`

<h3 id="get-a-user-by-identity-provider-external-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Api-Key|header|string|true|none|
|Api-Username|header|string|true|none|
|provider|path|string|true|Authentication provider name. Can be found in the provider callback<br>URL: `/auth/{provider}/callback`|
|external_id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "user_badges": [
    null
  ],
  "user": {
    "id": 0,
    "username": "string",
    "name": "string",
    "avatar_template": "string",
    "last_posted_at": "string",
    "last_seen_at": "string",
    "created_at": "string",
    "ignored": true,
    "muted": true,
    "can_ignore_user": true,
    "can_ignore_users": true,
    "can_mute_user": true,
    "can_mute_users": true,
    "can_send_private_messages": true,
    "can_send_private_message_to_user": true,
    "trust_level": 0,
    "moderator": true,
    "admin": true,
    "title": "string",
    "badge_count": 0,
    "second_factor_backup_enabled": true,
    "user_fields": {
      "1": "string",
      "2": "string"
    },
    "custom_fields": {
      "first_name": "string"
    },
    "time_read": 0,
    "recent_time_read": 0,
    "primary_group_id": 0,
    "primary_group_name": "string",
    "flair_group_id": 0,
    "flair_name": "string",
    "flair_url": "string",
    "flair_bg_color": "string",
    "flair_color": "string",
    "featured_topic": {
      "id": 0,
      "title": "string",
      "fancy_title": "string",
      "slug": "string",
      "posts_count": 0
    },
    "staged": true,
    "can_edit": true,
    "can_edit_avatar": true,
    "can_upload_avatar": true,
    "can_edit_username": true,
    "can_edit_email": true,
    "can_edit_name": true,
    "uploaded_avatar_id": 0,
    "has_title_badges": true,
    "pending_count": 0,
    "pending_posts_count": 0,
    "profile_view_count": 0,
    "second_factor_enabled": true,
    "can_upload_profile_header": true,
    "can_upload_user_card_background": true,
    "post_count": 0,
    "topic_count": 0,
    "can_be_deleted": true,
    "can_delete_all_posts": true,
    "locale": "string",
    "muted_category_ids": [
      null
    ],
    "regular_category_ids": [
      null
    ],
    "watched_tags": [
      null
    ],
    "watching_first_post_tags": [
      null
    ],
    "tracked_tags": [
      null
    ],
    "muted_tags": [
      null
    ],
    "tracked_category_ids": [
      null
    ],
    "watched_category_ids": [
      null
    ],
    "watched_first_post_category_ids": [
      null
    ],
    "system_avatar_upload_id": "string",
    "system_avatar_template": "string",
    "associated_account_avatars": [
      {
        "id": 0,
        "name": "string",
        "upload_id": 0,
        "avatar_template": "string"
      }
    ],
    "selected_user_associated_account_id": 0,
    "muted_usernames": [
      null
    ],
    "ignored_usernames": [
      null
    ],
    "allowed_pm_usernames": [
      null
    ],
    "mailing_list_posts_per_day": 0,
    "can_change_bio": true,
    "can_change_location": true,
    "can_change_website": true,
    "can_change_tracking_preferences": true,
    "user_api_keys": "string",
    "user_passkeys": [],
    "sidebar_tags": [],
    "sidebar_category_ids": [],
    "display_sidebar_tags": true,
    "can_pick_theme_with_custom_homepage": true,
    "user_auth_tokens": [
      {
        "id": 0,
        "client_ip": "string",
        "location": "string",
        "browser": "string",
        "device": "string",
        "os": "string",
        "icon": "string",
        "created_at": "string",
        "seen_at": "string",
        "is_active": true
      }
    ],
    "user_notification_schedule": {
      "enabled": true,
      "day_0_start_time": 0,
      "day_0_end_time": 0,
      "day_1_start_time": 0,
      "day_1_end_time": 0,
      "day_2_start_time": 0,
      "day_2_end_time": 0,
      "day_3_start_time": 0,
      "day_3_end_time": 0,
      "day_4_start_time": 0,
      "day_4_end_time": 0,
      "day_5_start_time": 0,
      "day_5_end_time": 0,
      "day_6_start_time": 0,
      "day_6_end_time": 0
    },
    "use_logo_small_as_avatar": true,
    "featured_user_badge_ids": [
      null
    ],
    "invited_by": "string",
    "groups": [
      {
        "id": 0,
        "automatic": true,
        "name": "string",
        "display_name": "string",
        "user_count": 0,
        "mentionable_level": 0,
        "messageable_level": 0,
        "visibility_level": 0,
        "primary_group": true,
        "title": "string",
        "grant_trust_level": "string",
        "incoming_email": "string",
        "has_messages": true,
        "flair_url": "string",
        "flair_bg_color": "string",
        "flair_color": "string",
        "bio_raw": "string",
        "bio_cooked": "string",
        "bio_excerpt": "string",
        "public_admission": true,
        "public_exit": true,
        "allow_membership_requests": true,
        "full_name": "string",
        "default_notification_level": 0,
        "membership_request_template": "string",
        "members_visibility_level": 0,
        "can_see_members": true,
        "can_admin_group": true,
        "publish_read_state": true
      }
    ],
    "group_users": [
      {
        "group_id": 0,
        "user_id": 0,
        "notification_level": 0,
        "owner": true
      }
    ],
    "user_option": {
      "user_id": 0,
      "mailing_list_mode": true,
      "mailing_list_mode_frequency": 0,
      "email_digests": true,
      "email_level": 0,
      "email_messages_level": 0,
      "external_links_in_new_tab": true,
      "bookmark_auto_delete_preference": 0,
      "color_scheme_id": "string",
      "dark_scheme_id": "string",
      "dynamic_favicon": true,
      "enable_quoting": true,
      "enable_smart_lists": true,
      "enable_markdown_monospace_font": true,
      "digest_after_minutes": 0,
      "automatically_unpin_topics": true,
      "auto_track_topics_after_msecs": 0,
      "notification_level_when_replying": 0,
      "new_topic_duration_minutes": 0,
      "email_previous_replies": 0,
      "email_in_reply_to": true,
      "like_notification_frequency": 0,
      "notify_on_linked_posts": true,
      "push_notification_level": "string",
      "enable_upcoming_change_available_notifications": true,
      "include_tl0_in_digests": true,
      "theme_ids": [
        null
      ],
      "theme_key_seq": 0,
      "allow_private_messages": true,
      "enable_allowed_pm_users": true,
      "homepage_id": "string",
      "hide_profile_and_presence": true,
      "hide_profile": true,
      "hide_presence": true,
      "text_size": "string",
      "text_size_seq": 0,
      "title_count_mode": "string",
      "timezone": "string",
      "skip_new_user_tips": true,
      "default_calendar": "string",
      "oldest_search_log_date": "string",
      "sidebar_link_to_filtered_list": true,
      "sidebar_show_count_of_new_items": true,
      "watched_precedence_over_muted": true,
      "seen_popups": [],
      "composition_mode": 0,
      "interface_color_mode": 0,
      "automatically_translate": true,
      "understood_languages": [
        "string"
      ],
      "hidden_composer_toolbar_buttons": [
        "string"
      ],
      "show_original_content": true,
      "send_shortcut": "string"
    }
  }
}
```

<h3 id="get-a-user-by-identity-provider-external-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|user response|Inline|

<h3 id="get-a-user-by-identity-provider-external-id-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|user_badges|[object]|true|none|none|
|user|object|true|none|none|
|» id|integer|true|none|none|
|» username|string|true|none|none|
|» name|string|true|none|none|
|» avatar_template|string|true|none|none|
|» last_posted_at|string \| null|true|none|none|
|» last_seen_at|string \| null|true|none|none|
|» created_at|string|true|none|none|
|» ignored|boolean|true|none|none|
|» muted|boolean|true|none|none|
|» can_ignore_user|boolean|true|none|none|
|» can_ignore_users|boolean|false|none|none|
|» can_mute_user|boolean|true|none|none|
|» can_mute_users|boolean|false|none|none|
|» can_send_private_messages|boolean|true|none|none|
|» can_send_private_message_to_user|boolean|true|none|none|
|» trust_level|integer|true|none|none|
|» moderator|boolean|true|none|none|
|» admin|boolean|true|none|none|
|» title|string \| null|true|none|none|
|» badge_count|integer|true|none|none|
|» second_factor_backup_enabled|boolean|false|none|none|
|» user_fields|object|false|none|none|
|» » 1|string \| null|true|none|none|
|» » 2|string \| null|true|none|none|
|» custom_fields|object|true|none|none|
|» » first_name|string \| null|false|none|none|
|» time_read|integer|true|none|none|
|» recent_time_read|integer|true|none|none|
|» primary_group_id|integer \| null|true|none|none|
|» primary_group_name|string \| null|true|none|none|
|» flair_group_id|integer \| null|true|none|none|
|» flair_name|string \| null|true|none|none|
|» flair_url|string \| null|true|none|none|
|» flair_bg_color|string \| null|true|none|none|
|» flair_color|string \| null|true|none|none|
|» featured_topic|object|true|none|none|
|» » id|integer|true|none|none|
|» » title|string|true|none|none|
|» » fancy_title|string|true|none|none|
|» » slug|string|true|none|none|
|» » posts_count|integer|true|none|none|
|» staged|boolean|true|none|none|
|» can_edit|boolean|true|none|none|
|» can_edit_avatar|boolean|true|none|none|
|» can_upload_avatar|boolean|true|none|none|
|» can_edit_username|boolean|true|none|none|
|» can_edit_email|boolean|true|none|none|
|» can_edit_name|boolean|true|none|none|
|» uploaded_avatar_id|integer \| null|true|none|none|
|» has_title_badges|boolean|true|none|none|
|» pending_count|integer|true|none|none|
|» pending_posts_count|integer|false|none|none|
|» profile_view_count|integer|true|none|none|
|» second_factor_enabled|boolean|true|none|none|
|» can_upload_profile_header|boolean|true|none|none|
|» can_upload_user_card_background|boolean|true|none|none|
|» post_count|integer|true|none|none|
|» topic_count|integer|true|none|none|
|» can_be_deleted|boolean|true|none|none|
|» can_delete_all_posts|boolean|true|none|none|
|» locale|string \| null|true|none|none|
|» muted_category_ids|[object]|true|none|none|
|» regular_category_ids|[object]|true|none|none|
|» watched_tags|[object]|true|none|none|
|» watching_first_post_tags|[object]|true|none|none|
|» tracked_tags|[object]|true|none|none|
|» muted_tags|[object]|true|none|none|
|» tracked_category_ids|[object]|true|none|none|
|» watched_category_ids|[object]|true|none|none|
|» watched_first_post_category_ids|[object]|true|none|none|
|» system_avatar_upload_id|string \| null|true|none|none|
|» system_avatar_template|string|true|none|none|
|» associated_account_avatars|[object]|true|none|none|
|» » id|integer|true|none|none|
|» » name|string|true|none|none|
|» » upload_id|integer|true|none|none|
|» » avatar_template|string|true|none|none|
|» selected_user_associated_account_id|integer \| null|true|none|none|
|» muted_usernames|[object]|true|none|none|
|» ignored_usernames|[object]|true|none|none|
|» allowed_pm_usernames|[object]|true|none|none|
|» mailing_list_posts_per_day|integer|true|none|none|
|» can_change_bio|boolean|true|none|none|
|» can_change_location|boolean|true|none|none|
|» can_change_website|boolean|true|none|none|
|» can_change_tracking_preferences|boolean|true|none|none|
|» user_api_keys|string \| null|true|none|none|
|» user_passkeys|array|false|none|none|
|» sidebar_tags|array|false|none|none|
|» sidebar_category_ids|array|false|none|none|
|» display_sidebar_tags|boolean|false|none|none|
|» can_pick_theme_with_custom_homepage|boolean|false|none|none|
|» user_auth_tokens|[object]|true|none|none|
|» » id|integer|true|none|none|
|» » client_ip|string|true|none|none|
|» » location|string|true|none|none|
|» » browser|string|true|none|none|
|» » device|string|true|none|none|
|» » os|string|true|none|none|
|» » icon|string|true|none|none|
|» » created_at|string|true|none|none|
|» » seen_at|string|true|none|none|
|» » is_active|boolean|true|none|none|
|» user_notification_schedule|object|true|none|none|
|» » enabled|boolean|true|none|none|
|» » day_0_start_time|integer|true|none|none|
|» » day_0_end_time|integer|true|none|none|
|» » day_1_start_time|integer|true|none|none|
|» » day_1_end_time|integer|true|none|none|
|» » day_2_start_time|integer|true|none|none|
|» » day_2_end_time|integer|true|none|none|
|» » day_3_start_time|integer|true|none|none|
|» » day_3_end_time|integer|true|none|none|
|» » day_4_start_time|integer|true|none|none|
|» » day_4_end_time|integer|true|none|none|
|» » day_5_start_time|integer|true|none|none|
|» » day_5_end_time|integer|true|none|none|
|» » day_6_start_time|integer|true|none|none|
|» » day_6_end_time|integer|true|none|none|
|» use_logo_small_as_avatar|boolean|true|none|none|
|» featured_user_badge_ids|[object]|true|none|none|
|» invited_by|string \| null|true|none|none|
|» groups|[object]|true|none|none|
|» » id|integer|true|none|none|
|» » automatic|boolean|true|none|none|
|» » name|string|true|none|none|
|» » display_name|string|true|none|none|
|» » user_count|integer|true|none|none|
|» » mentionable_level|integer|true|none|none|
|» » messageable_level|integer|true|none|none|
|» » visibility_level|integer|true|none|none|
|» » primary_group|boolean|true|none|none|
|» » title|string \| null|true|none|none|
|» » grant_trust_level|string \| null|true|none|none|
|» » incoming_email|string \| null|true|none|none|
|» » has_messages|boolean|true|none|none|
|» » flair_url|string \| null|true|none|none|
|» » flair_bg_color|string \| null|true|none|none|
|» » flair_color|string \| null|true|none|none|
|» » bio_raw|string \| null|true|none|none|
|» » bio_cooked|string \| null|true|none|none|
|» » bio_excerpt|string \| null|true|none|none|
|» » public_admission|boolean|true|none|none|
|» » public_exit|boolean|true|none|none|
|» » allow_membership_requests|boolean|true|none|none|
|» » full_name|string \| null|true|none|none|
|» » default_notification_level|integer|true|none|none|
|» » membership_request_template|string \| null|true|none|none|
|» » members_visibility_level|integer|true|none|none|
|» » can_see_members|boolean|true|none|none|
|» » can_admin_group|boolean|true|none|none|
|» » publish_read_state|boolean|true|none|none|
|» group_users|[object]|true|none|none|
|» » group_id|integer|true|none|none|
|» » user_id|integer|true|none|none|
|» » notification_level|integer|true|none|none|
|» » owner|boolean|false|none|none|
|» user_option|object|true|none|none|
|» » user_id|integer|true|none|none|
|» » mailing_list_mode|boolean|true|none|none|
|» » mailing_list_mode_frequency|integer|true|none|none|
|» » email_digests|boolean|true|none|none|
|» » email_level|integer|true|none|none|
|» » email_messages_level|integer|true|none|none|
|» » external_links_in_new_tab|boolean|true|none|none|
|» » bookmark_auto_delete_preference|integer|false|none|none|
|» » color_scheme_id|string \| null|true|none|none|
|» » dark_scheme_id|string \| null|true|none|none|
|» » dynamic_favicon|boolean|true|none|none|
|» » enable_quoting|boolean|true|none|none|
|» » enable_smart_lists|boolean|true|none|none|
|» » enable_markdown_monospace_font|boolean|true|none|none|
|» » digest_after_minutes|integer|true|none|none|
|» » automatically_unpin_topics|boolean|true|none|none|
|» » auto_track_topics_after_msecs|integer|true|none|none|
|» » notification_level_when_replying|integer|true|none|none|
|» » new_topic_duration_minutes|integer|true|none|none|
|» » email_previous_replies|integer|true|none|none|
|» » email_in_reply_to|boolean|true|none|none|
|» » like_notification_frequency|integer|true|none|none|
|» » notify_on_linked_posts|boolean|true|none|none|
|» » push_notification_level|string|true|none|none|
|» » enable_upcoming_change_available_notifications|boolean|true|none|none|
|» » include_tl0_in_digests|boolean|true|none|none|
|» » theme_ids|[object]|true|none|none|
|» » theme_key_seq|integer|true|none|none|
|» » allow_private_messages|boolean|true|none|none|
|» » enable_allowed_pm_users|boolean|true|none|none|
|» » homepage_id|string \| null|true|none|none|
|» » hide_profile_and_presence|boolean|true|none|none|
|» » hide_profile|boolean|true|none|none|
|» » hide_presence|boolean|true|none|none|
|» » text_size|string|true|none|none|
|» » text_size_seq|integer|true|none|none|
|» » title_count_mode|string|true|none|none|
|» » timezone|string \| null|true|none|none|
|» » skip_new_user_tips|boolean|true|none|none|
|» » default_calendar|string|false|none|none|
|» » oldest_search_log_date|string \| null|false|none|none|
|» » sidebar_link_to_filtered_list|boolean|false|none|none|
|» » sidebar_show_count_of_new_items|boolean|false|none|none|
|» » watched_precedence_over_muted|boolean|false|none|none|
|» » seen_popups|array|false|none|none|
|» » composition_mode|integer|false|none|none|
|» » interface_color_mode|integer|true|none|none|
|» » automatically_translate|boolean|true|none|none|
|» » understood_languages|[string]|true|none|none|
|» » hidden_composer_toolbar_buttons|[string]|true|none|none|
|» » show_original_content|boolean|true|none|none|
|» » send_shortcut|string|true|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Update avatar

<a id="opIdupdateAvatar"></a>

> Code samples

```bash
curl https://discourse.example.com/u/string/preferences/avatar/pick.json \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "type": "string",
    "upload_id": 0,
    "associated_account_id": 0
  }'
```

`PUT /u/{username}/preferences/avatar/pick.json`

> Body parameter

```json
{
  "type": "string",
  "upload_id": 0,
  "associated_account_id": 0
}
```

<h3 id="update-avatar-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|username|path|string|true|none|
|body|body|object|false|none|
|» upload_id|body|integer|false|none|
|» associated_account_id|body|integer|false|none|
|» type|body|string|true|none|
|» *oneOf*|body|object|false|none|
|» type|body|string|true|none|
|» *oneOf*|body|object|false|none|
|» type|body|string|true|none|
|» *oneOf*|body|object|false|none|
|» type|body|string|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» type|uploaded|
|» type|custom|
|» type|gravatar|
|» type|current|
|» type|associated_account|
|» type|system|

> Example responses

> 200 Response

```json
{
  "success": "OK"
}
```

<h3 id="update-avatar-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|avatar updated|Inline|

<h3 id="update-avatar-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|string|true|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Update email

<a id="opIdupdateEmail"></a>

> Code samples

```bash
curl https://discourse.example.com/u/string/preferences/email.json \
  -X PUT \
  -H 'Content-Type: application/json' \
  -d '{
    "email": "user@example.com"
  }'
```

`PUT /u/{username}/preferences/email.json`

> Body parameter

```json
{
  "email": "user@example.com"
}
```

<h3 id="update-email-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|username|path|string|true|none|
|body|body|object|false|none|
|» email|body|string(email)|true|none|

<h3 id="update-email-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|email updated|None|

<aside class="success">
This operation does not require authentication
</aside>

## Update username

<a id="opIdupdateUsername"></a>

> Code samples

```bash
curl https://discourse.example.com/u/string/preferences/username.json \
  -X PUT \
  -H 'Content-Type: application/json' \
  -d '{
    "new_username": "string"
  }'
```

`PUT /u/{username}/preferences/username.json`

> Body parameter

```json
{
  "new_username": "string"
}
```

<h3 id="update-username-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|username|path|string|true|none|
|body|body|object|false|none|
|» new_username|body|string|true|none|

<h3 id="update-username-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|username updated|None|

<aside class="success">
This operation does not require authentication
</aside>

## Get a public list of users

<a id="opIdlistUsersPublic"></a>

> Code samples

```bash
curl 'https://discourse.example.com/directory_items.json?period=daily&order=likes_received' \
  -H 'Accept: application/json'
```

`GET /directory_items.json`

<h3 id="get-a-public-list-of-users-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|period|query|string|true|none|
|order|query|string|true|none|
|asc|query|string|false|none|
|page|query|integer|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|period|daily|
|period|weekly|
|period|monthly|
|period|quarterly|
|period|yearly|
|period|all|
|order|likes_received|
|order|likes_given|
|order|topic_count|
|order|post_count|
|order|topics_entered|
|order|posts_read|
|order|days_visited|
|asc|true|

> Example responses

> 200 Response

```json
{
  "directory_items": [
    {
      "id": 0,
      "likes_received": 0,
      "likes_given": 0,
      "topics_entered": 0,
      "topic_count": 0,
      "post_count": 0,
      "posts_read": 0,
      "days_visited": 0,
      "user": {
        "id": 0,
        "username": "string",
        "name": "string",
        "avatar_template": "string",
        "title": "string"
      }
    }
  ],
  "meta": {
    "last_updated_at": "string",
    "total_rows_directory_items": 0,
    "load_more_directory_items": "string"
  }
}
```

<h3 id="get-a-public-list-of-users-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|directory items response|Inline|

<h3 id="get-a-public-list-of-users-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|directory_items|[object]|true|none|none|
|» id|integer|true|none|none|
|» likes_received|integer|true|none|none|
|» likes_given|integer|true|none|none|
|» topics_entered|integer|true|none|none|
|» topic_count|integer|true|none|none|
|» post_count|integer|true|none|none|
|» posts_read|integer|true|none|none|
|» days_visited|integer|true|none|none|
|» user|object|true|none|none|
|» » id|integer|true|none|none|
|» » username|string|true|none|none|
|» » name|string \| null|true|none|none|
|» » avatar_template|string|true|none|none|
|» » title|string \| null|true|none|none|
|meta|object|true|none|none|
|» last_updated_at|string \| null|true|none|none|
|» total_rows_directory_items|integer|true|none|none|
|» load_more_directory_items|string|true|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Get a user by id

<a id="opIdadminGetUser"></a>

> Code samples

```bash
curl https://discourse.example.com/admin/users/0.json \
  -H 'Accept: application/json'
```

`GET /admin/users/{id}.json`

<h3 id="get-a-user-by-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|none|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "username": "string",
  "name": "string",
  "avatar_template": "string",
  "active": true,
  "admin": true,
  "moderator": true,
  "last_seen_at": "string",
  "last_emailed_at": "string",
  "created_at": "string",
  "last_seen_age": 0,
  "last_emailed_age": 0,
  "created_at_age": 0,
  "trust_level": 0,
  "manual_locked_trust_level": "string",
  "title": "string",
  "time_read": 0,
  "staged": true,
  "days_visited": 0,
  "posts_read_count": 0,
  "topics_entered": 0,
  "post_count": 0,
  "associated_accounts": [
    null
  ],
  "can_send_activation_email": true,
  "can_activate": true,
  "can_deactivate": true,
  "can_change_trust_level": true,
  "ip_address": "string",
  "registration_ip_address": "string",
  "can_grant_admin": true,
  "can_revoke_admin": true,
  "can_grant_moderation": true,
  "can_revoke_moderation": true,
  "can_impersonate": true,
  "like_count": 0,
  "like_given_count": 0,
  "topic_count": 0,
  "flags_given_count": 0,
  "flags_received_count": 0,
  "private_topics_count": 0,
  "can_delete_all_posts": true,
  "can_be_deleted": true,
  "can_be_anonymized": true,
  "can_be_merged": true,
  "full_suspend_reason": "string",
  "latest_export": {},
  "full_silence_reason": "string",
  "silence_reason": "string",
  "post_edits_count": 0,
  "primary_group_id": 0,
  "badge_count": 0,
  "warnings_received_count": 0,
  "bounce_score": 0,
  "reset_bounce_score_after": "string",
  "can_view_action_logs": true,
  "can_disable_second_factor": true,
  "can_delete_sso_record": true,
  "api_key_count": 0,
  "similar_users_count": 0,
  "single_sign_on_record": "string",
  "approved_by": {
    "id": 0,
    "username": "string",
    "name": "string",
    "avatar_template": "string"
  },
  "suspended_by": "string",
  "silenced_by": "string",
  "penalty_counts": {
    "silenced": 0,
    "suspended": 0
  },
  "next_penalty": "string",
  "tl3_requirements": {
    "time_period": 0,
    "requirements_met": true,
    "requirements_lost": true,
    "trust_level_locked": true,
    "on_grace_period": true,
    "days_visited": 0,
    "min_days_visited": 0,
    "num_topics_replied_to": 0,
    "min_topics_replied_to": 0,
    "topics_viewed": 0,
    "min_topics_viewed": 0,
    "posts_read": 0,
    "min_posts_read": 0,
    "topics_viewed_all_time": 0,
    "min_topics_viewed_all_time": 0,
    "posts_read_all_time": 0,
    "min_posts_read_all_time": 0,
    "num_flagged_posts": 0,
    "max_flagged_posts": 0,
    "num_flagged_by_users": 0,
    "max_flagged_by_users": 0,
    "num_likes_given": 0,
    "min_likes_given": 0,
    "num_likes_received": 0,
    "min_likes_received": 0,
    "num_likes_received_days": 0,
    "min_likes_received_days": 0,
    "num_likes_received_users": 0,
    "min_likes_received_users": 0,
    "penalty_counts": {
      "silenced": 0,
      "suspended": 0,
      "total": 0
    }
  },
  "groups": [
    {
      "id": 0,
      "automatic": true,
      "name": "string",
      "display_name": "string",
      "user_count": 0,
      "mentionable_level": 0,
      "messageable_level": 0,
      "visibility_level": 0,
      "primary_group": true,
      "title": "string",
      "grant_trust_level": "string",
      "incoming_email": "string",
      "has_messages": true,
      "flair_url": "string",
      "flair_bg_color": "string",
      "flair_color": "string",
      "flair_group_id": 0,
      "bio_raw": "string",
      "bio_cooked": "string",
      "bio_excerpt": "string",
      "public_admission": true,
      "public_exit": true,
      "allow_membership_requests": true,
      "full_name": "string",
      "default_notification_level": 0,
      "membership_request_template": "string",
      "members_visibility_level": 0,
      "can_see_members": true,
      "can_admin_group": true,
      "publish_read_state": true
    }
  ],
  "external_ids": {},
  "include_ip": true,
  "upcoming_changes_stats": [
    {
      "name": "string",
      "humanized_name": "string",
      "description": "string",
      "enabled": true,
      "specific_groups": [
        "string"
      ],
      "reason": "enabled_for_everyone"
    }
  ]
}
```

<h3 id="get-a-user-by-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|response|Inline|

<h3 id="get-a-user-by-id-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer|true|none|none|
|username|string|true|none|none|
|name|string \| null|true|none|none|
|avatar_template|string|true|none|none|
|active|boolean|true|none|none|
|admin|boolean|true|none|none|
|moderator|boolean|true|none|none|
|last_seen_at|string \| null|true|none|none|
|last_emailed_at|string \| null|true|none|none|
|created_at|string|true|none|none|
|last_seen_age|number \| null|true|none|none|
|last_emailed_age|number \| null|true|none|none|
|created_at_age|number \| null|true|none|none|
|trust_level|integer|true|none|none|
|manual_locked_trust_level|string \| null|true|none|none|
|title|string \| null|true|none|none|
|time_read|integer|true|none|none|
|staged|boolean|true|none|none|
|days_visited|integer|true|none|none|
|posts_read_count|integer|true|none|none|
|topics_entered|integer|true|none|none|
|post_count|integer|true|none|none|
|associated_accounts|[object]|false|none|none|
|can_send_activation_email|boolean|true|none|none|
|can_activate|boolean|true|none|none|
|can_deactivate|boolean|true|none|none|
|can_change_trust_level|boolean|false|none|none|
|ip_address|string|true|none|none|
|registration_ip_address|string \| null|true|none|none|
|can_grant_admin|boolean|true|none|none|
|can_revoke_admin|boolean|true|none|none|
|can_grant_moderation|boolean|true|none|none|
|can_revoke_moderation|boolean|true|none|none|
|can_impersonate|boolean|true|none|none|
|like_count|integer|true|none|none|
|like_given_count|integer|true|none|none|
|topic_count|integer|true|none|none|
|flags_given_count|integer|true|none|none|
|flags_received_count|integer|true|none|none|
|private_topics_count|integer|true|none|none|
|can_delete_all_posts|boolean|true|none|none|
|can_be_deleted|boolean|false|none|none|
|can_be_anonymized|boolean|true|none|none|
|can_be_merged|boolean|true|none|none|
|full_suspend_reason|string \| null|true|none|none|
|latest_export|object \| null|false|none|none|
|full_silence_reason|string \| null|false|none|none|
|silence_reason|string \| null|false|none|none|
|post_edits_count|integer \| null|false|none|none|
|primary_group_id|integer \| null|true|none|none|
|badge_count|integer|true|none|none|
|warnings_received_count|integer|true|none|none|
|bounce_score|integer \| null|true|none|none|
|reset_bounce_score_after|string \| null|true|none|none|
|can_view_action_logs|boolean|true|none|none|
|can_disable_second_factor|boolean|true|none|none|
|can_delete_sso_record|boolean|true|none|none|
|api_key_count|integer|true|none|none|
|similar_users_count|integer|false|none|none|
|single_sign_on_record|string \| null|true|none|none|
|approved_by|object \| null|true|none|none|
|» id|integer|true|none|none|
|» username|string|true|none|none|
|» name|string|true|none|none|
|» avatar_template|string|true|none|none|
|suspended_by|string \| null|true|none|none|
|silenced_by|string \| null|true|none|none|
|penalty_counts|object|false|none|none|
|» silenced|integer|true|none|none|
|» suspended|integer|true|none|none|
|next_penalty|string|false|none|none|
|tl3_requirements|object|false|none|none|
|» time_period|integer|true|none|none|
|» requirements_met|boolean|true|none|none|
|» requirements_lost|boolean|true|none|none|
|» trust_level_locked|boolean|true|none|none|
|» on_grace_period|boolean|true|none|none|
|» days_visited|integer|true|none|none|
|» min_days_visited|integer|true|none|none|
|» num_topics_replied_to|integer|true|none|none|
|» min_topics_replied_to|integer|true|none|none|
|» topics_viewed|integer|true|none|none|
|» min_topics_viewed|integer|true|none|none|
|» posts_read|integer|true|none|none|
|» min_posts_read|integer|true|none|none|
|» topics_viewed_all_time|integer|true|none|none|
|» min_topics_viewed_all_time|integer|true|none|none|
|» posts_read_all_time|integer|true|none|none|
|» min_posts_read_all_time|integer|true|none|none|
|» num_flagged_posts|integer|true|none|none|
|» max_flagged_posts|integer|true|none|none|
|» num_flagged_by_users|integer|true|none|none|
|» max_flagged_by_users|integer|true|none|none|
|» num_likes_given|integer|true|none|none|
|» min_likes_given|integer|true|none|none|
|» num_likes_received|integer|true|none|none|
|» min_likes_received|integer|true|none|none|
|» num_likes_received_days|integer|true|none|none|
|» min_likes_received_days|integer|true|none|none|
|» num_likes_received_users|integer|true|none|none|
|» min_likes_received_users|integer|true|none|none|
|» penalty_counts|object|true|none|none|
|» » silenced|integer|true|none|none|
|» » suspended|integer|true|none|none|
|» » total|integer|true|none|none|
|groups|[object]|true|none|none|
|» id|integer|true|none|none|
|» automatic|boolean|true|none|none|
|» name|string|true|none|none|
|» display_name|string|true|none|none|
|» user_count|integer|true|none|none|
|» mentionable_level|integer|true|none|none|
|» messageable_level|integer|true|none|none|
|» visibility_level|integer|true|none|none|
|» primary_group|boolean|true|none|none|
|» title|string \| null|true|none|none|
|» grant_trust_level|string \| null|true|none|none|
|» incoming_email|string \| null|true|none|none|
|» has_messages|boolean|true|none|none|
|» flair_url|string \| null|true|none|none|
|» flair_bg_color|string \| null|true|none|none|
|» flair_color|string \| null|true|none|none|
|» flair_group_id|integer \| null|false|none|none|
|» bio_raw|string \| null|true|none|none|
|» bio_cooked|string \| null|true|none|none|
|» bio_excerpt|string \| null|true|none|none|
|» public_admission|boolean|true|none|none|
|» public_exit|boolean|true|none|none|
|» allow_membership_requests|boolean|true|none|none|
|» full_name|string \| null|true|none|none|
|» default_notification_level|integer|true|none|none|
|» membership_request_template|string \| null|true|none|none|
|» members_visibility_level|integer|true|none|none|
|» can_see_members|boolean|true|none|none|
|» can_admin_group|boolean|true|none|none|
|» publish_read_state|boolean|true|none|none|
|external_ids|object|true|none|none|
|include_ip|boolean|true|none|none|
|upcoming_changes_stats|[object]|false|none|none|
|» name|string|true|none|none|
|» humanized_name|string|true|none|none|
|» description|string|true|none|none|
|» enabled|boolean|true|none|none|
|» specific_groups|[string]|true|none|none|
|» reason|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|» reason|enabled_for_everyone|
|» reason|enabled_for_no_one|
|» reason|in_specific_groups|
|» reason|not_in_specific_groups|

<aside class="success">
This operation does not require authentication
</aside>

## Delete a user

<a id="opIddeleteUser"></a>

> Code samples

```bash
curl https://discourse.example.com/admin/users/0.json \
  -X DELETE \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "delete_posts": true,
    "block_email": true,
    "block_urls": true,
    "block_ip": true
  }'
```

`DELETE /admin/users/{id}.json`

> Body parameter

```json
{
  "delete_posts": true,
  "block_email": true,
  "block_urls": true,
  "block_ip": true
}
```

<h3 id="delete-a-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|none|
|body|body|object|false|none|
|» delete_posts|body|boolean|false|none|
|» block_email|body|boolean|false|none|
|» block_urls|body|boolean|false|none|
|» block_ip|body|boolean|false|none|

> Example responses

> 200 Response

```json
{
  "deleted": true
}
```

<h3 id="delete-a-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|response|Inline|

<h3 id="delete-a-user-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|deleted|boolean|true|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Activate a user

<a id="opIdactivateUser"></a>

> Code samples

```bash
curl https://discourse.example.com/admin/users/0/activate.json \
  -X PUT \
  -H 'Accept: application/json'
```

`PUT /admin/users/{id}/activate.json`

<h3 id="activate-a-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|none|

> Example responses

> 200 Response

```json
{
  "success": "OK"
}
```

<h3 id="activate-a-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|response|Inline|

<h3 id="activate-a-user-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|string|true|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Deactivate a user

<a id="opIddeactivateUser"></a>

> Code samples

```bash
curl https://discourse.example.com/admin/users/0/deactivate.json \
  -X PUT \
  -H 'Accept: application/json'
```

`PUT /admin/users/{id}/deactivate.json`

<h3 id="deactivate-a-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|none|

> Example responses

> 200 Response

```json
{
  "success": "OK"
}
```

<h3 id="deactivate-a-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|response|Inline|

<h3 id="deactivate-a-user-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|string|true|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Suspend a user

<a id="opIdsuspendUser"></a>

> Code samples

```bash
curl https://discourse.example.com/admin/users/0/suspend.json \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "suspend_until": "2121-02-22",
    "reason": "string",
    "message": "string",
    "post_action": "delete"
  }'
```

`PUT /admin/users/{id}/suspend.json`

> Body parameter

```json
{
  "suspend_until": "2121-02-22",
  "reason": "string",
  "message": "string",
  "post_action": "delete"
}
```

<h3 id="suspend-a-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|none|
|body|body|object|false|none|
|» suspend_until|body|string|true|none|
|» reason|body|string|true|none|
|» message|body|string|false|Will send an email with this message when present|
|» post_action|body|string|false|none|

> Example responses

> 200 Response

```json
{
  "suspension": {
    "suspend_reason": "string",
    "full_suspend_reason": "string",
    "suspended_till": "string",
    "suspended_at": "string",
    "suspended_by": {
      "id": 0,
      "username": "string",
      "name": "string",
      "avatar_template": "string"
    }
  }
}
```

<h3 id="suspend-a-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|response|Inline|

<h3 id="suspend-a-user-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|suspension|object|true|none|none|
|» suspend_reason|string|true|none|none|
|» full_suspend_reason|string|true|none|none|
|» suspended_till|string|true|none|none|
|» suspended_at|string|true|none|none|
|» suspended_by|object|true|none|none|
|» » id|integer|true|none|none|
|» » username|string|true|none|none|
|» » name|string|true|none|none|
|» » avatar_template|string|true|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Silence a user

<a id="opIdsilenceUser"></a>

> Code samples

```bash
curl https://discourse.example.com/admin/users/0/silence.json \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "silenced_till": "2022-06-01T08:00:00.000Z",
    "reason": "string",
    "message": "string",
    "post_action": "delete"
  }'
```

`PUT /admin/users/{id}/silence.json`

> Body parameter

```json
{
  "silenced_till": "2022-06-01T08:00:00.000Z",
  "reason": "string",
  "message": "string",
  "post_action": "delete"
}
```

<h3 id="silence-a-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|none|
|body|body|object|false|none|
|» silenced_till|body|string|true|none|
|» reason|body|string|true|none|
|» message|body|string|false|Will send an email with this message when present|
|» post_action|body|string|false|none|

> Example responses

> 200 Response

```json
{
  "silence": {
    "silenced": true,
    "silence_reason": "string",
    "full_silence_reason": "string",
    "silenced_till": "string",
    "silenced_at": "string",
    "silenced_by": {
      "id": 0,
      "username": "string",
      "name": "string",
      "avatar_template": "string"
    }
  }
}
```

<h3 id="silence-a-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|response|Inline|

<h3 id="silence-a-user-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|silence|object|true|none|none|
|» silenced|boolean|true|none|none|
|» silence_reason|string|true|none|none|
|» full_silence_reason|string|true|none|none|
|» silenced_till|string|true|none|none|
|» silenced_at|string|true|none|none|
|» silenced_by|object|true|none|none|
|» » id|integer|true|none|none|
|» » username|string|true|none|none|
|» » name|string|true|none|none|
|» » avatar_template|string|true|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Anonymize a user

<a id="opIdanonymizeUser"></a>

> Code samples

```bash
curl https://discourse.example.com/admin/users/0/anonymize.json \
  -X PUT \
  -H 'Accept: application/json'
```

`PUT /admin/users/{id}/anonymize.json`

<h3 id="anonymize-a-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|none|

> Example responses

> 200 Response

```json
{
  "success": "string",
  "username": "string"
}
```

<h3 id="anonymize-a-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|response|Inline|

<h3 id="anonymize-a-user-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|string|true|none|none|
|username|string|true|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Merge a user

<a id="opIdmergeUser"></a>

> Code samples

```bash
curl https://discourse.example.com/admin/users/0/merge.json \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'Api-Key: string' \
  -H 'Api-Username: string' \
  -d '{
    "target_username": "string"
  }'
```

`POST /admin/users/{id}/merge.json`

Merge a user into another user. Requires admin permissions. The
source user cannot be a staff member. The merge runs in the background and
deletes the source user when complete.

> Body parameter

```json
{
  "target_username": "string"
}
```

<h3 id="merge-a-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Api-Key|header|string|true|none|
|Api-Username|header|string|true|none|
|id|path|integer|true|ID of the user to merge|
|body|body|object|false|none|
|» target_username|body|string|true|Username of the user to merge into|

> Example responses

> 200 Response

```json
{
  "success": "OK"
}
```

<h3 id="merge-a-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|response|Inline|

<h3 id="merge-a-user-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|string|true|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Log a user out

<a id="opIdlogOutUser"></a>

> Code samples

```bash
curl https://discourse.example.com/admin/users/0/log_out.json \
  -X POST \
  -H 'Accept: application/json'
```

`POST /admin/users/{id}/log_out.json`

<h3 id="log-a-user-out-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|none|

> Example responses

> 200 Response

```json
{
  "success": "OK"
}
```

<h3 id="log-a-user-out-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|response|Inline|

<h3 id="log-a-user-out-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|string|true|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Refresh gravatar

<a id="opIdrefreshGravatar"></a>

> Code samples

```bash
curl https://discourse.example.com/user_avatar/string/refresh_gravatar.json \
  -X POST \
  -H 'Accept: application/json'
```

`POST /user_avatar/{username}/refresh_gravatar.json`

<h3 id="refresh-gravatar-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|username|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "gravatar_upload_id": 0,
  "gravatar_avatar_template": "string"
}
```

<h3 id="refresh-gravatar-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|response|Inline|

<h3 id="refresh-gravatar-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|gravatar_upload_id|integer \| null|true|none|none|
|gravatar_avatar_template|string \| null|true|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## List users

<a id="opIdadminListUsers"></a>

> Code samples

```bash
curl https://discourse.example.com/admin/users.json \
  -H 'Accept: application/json'
```

`GET /admin/users.json`

<h3 id="list-users-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|order|query|string|false|none|
|asc|query|string|false|none|
|page|query|integer|false|none|
|show_emails|query|boolean|false|Include user email addresses in response. These requests will<br>be logged in the staff action logs.|
|stats|query|boolean|false|Include user stats information|
|email|query|string|false|Filter to the user with this email address|
|ip|query|string|false|Filter to users with this IP address|

#### Enumerated Values

|Parameter|Value|
|---|---|
|order|created|
|order|last_emailed|
|order|seen|
|order|username|
|order|email|
|order|trust_level|
|order|days_visited|
|order|posts_read|
|order|topics_viewed|
|order|posts|
|order|read_time|
|asc|true|

> Example responses

> 200 Response

```json
[
  {
    "id": 0,
    "username": "string",
    "name": "string",
    "avatar_template": "string",
    "email": "string",
    "secondary_emails": [
      null
    ],
    "active": true,
    "admin": true,
    "moderator": true,
    "last_seen_at": "string",
    "last_emailed_at": "string",
    "created_at": "string",
    "last_seen_age": 0,
    "last_emailed_age": 0,
    "created_at_age": 0,
    "trust_level": 0,
    "manual_locked_trust_level": "string",
    "title": "string",
    "time_read": 0,
    "staged": true,
    "days_visited": 0,
    "posts_read_count": 0,
    "topics_entered": 0,
    "post_count": 0
  }
]
```

<h3 id="list-users-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|users response|Inline|

<h3 id="list-users-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|
|» id|integer|true|none|none|
|» username|string|true|none|none|
|» name|string \| null|true|none|none|
|» avatar_template|string|true|none|none|
|» email|string|false|none|none|
|» secondary_emails|[object]|false|none|none|
|» active|boolean|true|none|none|
|» admin|boolean|true|none|none|
|» moderator|boolean|true|none|none|
|» last_seen_at|string \| null|true|none|none|
|» last_emailed_at|string \| null|true|none|none|
|» created_at|string|true|none|none|
|» last_seen_age|number \| null|true|none|none|
|» last_emailed_age|number \| null|true|none|none|
|» created_at_age|number \| null|true|none|none|
|» trust_level|integer|true|none|none|
|» manual_locked_trust_level|string \| null|true|none|none|
|» title|string \| null|true|none|none|
|» time_read|integer|true|none|none|
|» staged|boolean|true|none|none|
|» days_visited|integer|true|none|none|
|» posts_read_count|integer|true|none|none|
|» topics_entered|integer|true|none|none|
|» post_count|integer|true|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## List users by flag

<a id="opIdadminListUsersFlag"></a>

> Code samples

```bash
curl https://discourse.example.com/admin/users/list/active.json \
  -H 'Accept: application/json'
```

`GET /admin/users/list/{flag}.json`

<h3 id="list-users-by-flag-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|flag|path|string|true|none|
|order|query|string|false|none|
|asc|query|string|false|none|
|page|query|integer|false|none|
|show_emails|query|boolean|false|Include user email addresses in response. These requests will<br>be logged in the staff action logs.|
|stats|query|boolean|false|Include user stats information|
|email|query|string|false|Filter to the user with this email address|
|ip|query|string|false|Filter to users with this IP address|

#### Enumerated Values

|Parameter|Value|
|---|---|
|flag|active|
|flag|new|
|flag|staff|
|flag|suspended|
|flag|blocked|
|flag|suspect|
|order|created|
|order|last_emailed|
|order|seen|
|order|username|
|order|email|
|order|trust_level|
|order|days_visited|
|order|posts_read|
|order|topics_viewed|
|order|posts|
|order|read_time|
|asc|true|

> Example responses

> 200 Response

```json
[
  {
    "id": 0,
    "username": "string",
    "name": "string",
    "avatar_template": "string",
    "email": "string",
    "secondary_emails": [
      null
    ],
    "active": true,
    "admin": true,
    "moderator": true,
    "last_seen_at": "string",
    "last_emailed_at": "string",
    "created_at": "string",
    "last_seen_age": 0,
    "last_emailed_age": 0,
    "created_at_age": 0,
    "trust_level": 0,
    "manual_locked_trust_level": "string",
    "title": "string",
    "time_read": 0,
    "staged": true,
    "days_visited": 0,
    "posts_read_count": 0,
    "topics_entered": 0,
    "post_count": 0
  }
]
```

<h3 id="list-users-by-flag-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|response|Inline|

<h3 id="list-users-by-flag-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|
|» id|integer|true|none|none|
|» username|string|true|none|none|
|» name|string \| null|true|none|none|
|» avatar_template|string|true|none|none|
|» email|string|false|none|none|
|» secondary_emails|[object]|false|none|none|
|» active|boolean|true|none|none|
|» admin|boolean|true|none|none|
|» moderator|boolean|true|none|none|
|» last_seen_at|string \| null|true|none|none|
|» last_emailed_at|string \| null|true|none|none|
|» created_at|string|true|none|none|
|» last_seen_age|number \| null|true|none|none|
|» last_emailed_age|number \| null|true|none|none|
|» created_at_age|number \| null|true|none|none|
|» trust_level|integer|true|none|none|
|» manual_locked_trust_level|string \| null|true|none|none|
|» title|string \| null|true|none|none|
|» time_read|integer|true|none|none|
|» staged|boolean|true|none|none|
|» days_visited|integer|true|none|none|
|» posts_read_count|integer|true|none|none|
|» topics_entered|integer|true|none|none|
|» post_count|integer|true|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Get a list of user actions

<a id="opIdlistUserActions"></a>

> Code samples

```bash
curl 'https://discourse.example.com/user_actions.json?offset=0&username=string&filter=string' \
  -H 'Accept: application/json'
```

`GET /user_actions.json`

<h3 id="get-a-list-of-user-actions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|offset|query|integer|true|none|
|username|query|string|true|none|
|filter|query|string|true|none|

> Example responses

> 200 Response

```json
{
  "user_actions": [
    {
      "excerpt": "string",
      "action_type": 0,
      "created_at": "string",
      "avatar_template": "string",
      "acting_avatar_template": "string",
      "slug": "string",
      "topic_id": 0,
      "target_user_id": 0,
      "target_name": "string",
      "target_username": "string",
      "post_number": 0,
      "post_id": "string",
      "username": "string",
      "name": "string",
      "user_id": 0,
      "acting_username": "string",
      "acting_name": "string",
      "acting_user_id": 0,
      "title": "string",
      "deleted": true,
      "hidden": "string",
      "post_type": "string",
      "action_code": "string",
      "category_id": 0,
      "closed": true,
      "archived": true
    }
  ]
}
```

<h3 id="get-a-list-of-user-actions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|response|Inline|

<h3 id="get-a-list-of-user-actions-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|user_actions|[object]|true|none|none|
|» excerpt|string|true|none|none|
|» action_type|integer|true|none|none|
|» created_at|string|true|none|none|
|» avatar_template|string|true|none|none|
|» acting_avatar_template|string|true|none|none|
|» slug|string|true|none|none|
|» topic_id|integer|true|none|none|
|» target_user_id|integer|true|none|none|
|» target_name|string \| null|true|none|none|
|» target_username|string|true|none|none|
|» post_number|integer|true|none|none|
|» post_id|string \| null|true|none|none|
|» username|string|true|none|none|
|» name|string \| null|true|none|none|
|» user_id|integer|true|none|none|
|» acting_username|string|true|none|none|
|» acting_name|string \| null|true|none|none|
|» acting_user_id|integer|true|none|none|
|» title|string|true|none|none|
|» deleted|boolean|true|none|none|
|» hidden|string \| null|true|none|none|
|» post_type|string \| null|true|none|none|
|» action_code|string \| null|true|none|none|
|» category_id|integer|true|none|none|
|» closed|boolean|true|none|none|
|» archived|boolean|true|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Send password reset email

<a id="opIdsendPasswordResetEmail"></a>

> Code samples

```bash
curl https://discourse.example.com/session/forgot_password.json \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "login": "string"
  }'
```

`POST /session/forgot_password.json`

> Body parameter

```json
{
  "login": "string"
}
```

<h3 id="send-password-reset-email-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» login|body|string|true|none|

> Example responses

> 200 Response

```json
{
  "success": "string",
  "user_found": true
}
```

<h3 id="send-password-reset-email-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|success response|Inline|

<h3 id="send-password-reset-email-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|string|true|none|none|
|user_found|boolean|true|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Change password

<a id="opIdchangePassword"></a>

> Code samples

```bash
curl https://discourse.example.com/users/password-reset/string.json \
  -X PUT \
  -H 'Content-Type: application/json' \
  -d '{
    "username": "string",
    "password": "string"
  }'
```

`PUT /users/password-reset/{token}.json`

> Body parameter

```json
{
  "username": "string",
  "password": "string"
}
```

<h3 id="change-password-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|token|path|string|true|none|
|body|body|object|false|none|
|» username|body|string|true|none|
|» password|body|string|true|none|

<h3 id="change-password-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|success response|None|

<aside class="success">
This operation does not require authentication
</aside>

## Get email addresses belonging to a user

<a id="opIdgetUserEmails"></a>

> Code samples

```bash
curl https://discourse.example.com/u/string/emails.json \
  -H 'Accept: application/json'
```

`GET /u/{username}/emails.json`

<h3 id="get-email-addresses-belonging-to-a-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|username|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "email": "string",
  "secondary_emails": [
    null
  ],
  "unconfirmed_emails": [
    null
  ],
  "associated_accounts": [
    null
  ]
}
```

<h3 id="get-email-addresses-belonging-to-a-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|success response|Inline|

<h3 id="get-email-addresses-belonging-to-a-user-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|email|string|true|none|none|
|secondary_emails|[object]|true|none|none|
|unconfirmed_emails|[object]|true|none|none|
|associated_accounts|[object]|true|none|none|

<aside class="success">
This operation does not require authentication
</aside>
