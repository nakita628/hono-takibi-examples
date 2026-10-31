<h1 id="octobox">Octobox v1.0.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Octobox helps you manage your GitHub notifications efficiently so you can spend more time getting things done. It provides several features to manage GitHub notifications, including archived states, starred notifications, extended filtering, and pinned searches.

Base URLs:

* <a href="http://localhost:3000">http://localhost:3000</a> - For local development/testing

* <a href="https://octobox.io">https://octobox.io</a>

<a href="https://octobox.io/terms">Terms of service</a>
Web: <a href="https://octobox.io">Octobox API</a> 
License: <a href="https://github.com/octobox/octobox/blob/main/LICENSE.txt">GNU AFFERO GENERAL PUBLIC LICENSE</a>

<a href="https://octobox.io/documentation">Octobox Documentation</a>

# Authentication

- HTTP Authentication, scheme: bearer

* API Key (ApiKeyAuth)
    - Parameter Name: **X-Octobox-API**, in: header.

<h1 id="octobox-notifications">Notifications</h1>

Return and process notifications

## Archive notifications.

<a id="opIdArchiveNotifications"></a>

> Code samples

```bash
curl https://octobox.io/api/notifications/archive_selected.json \
  -X POST \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /api/notifications/archive_selected.json`

Archive GitHub notifications. You can choose to archive all notifications or only selected ones.

<h3 id="archive-notifications-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|query|[string]|false|**Notification ID.** _Example: 1_. You can select a single notification ID or an array of IDs to archive. If ID is set to ‘all’, all notifications will be archived.|

<h3 id="archive-notifications-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Archive successful.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth, ApiKeyAuth
</aside>

## Delete notifications.

<a id="opIdDeleteNotifications"></a>

> Code samples

```bash
curl https://octobox.io/api/notifications/delete_selected.json \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /api/notifications/delete_selected.json`

Delete GitHub notifications. You can choose to delete all notifications or only selected ones.

<h3 id="delete-notifications-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|query|[string]|false|**Notification ID.** _Example: 1_. You can select a single notification ID or an array of IDs to delete. If ID is set to ‘all’, all of your notifications will be deleted.|

<h3 id="delete-notifications-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Deletion successful.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth, ApiKeyAuth
</aside>

## Return notifications.

<a id="opIdReturnNotifications"></a>

> Code samples

```bash
curl https://octobox.io/api/notifications.json \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/notifications.json`

Return a list of notifications and associated data for the user. See the example response below for the data that will be returned.

<h3 id="return-notifications-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|page|query|integer|false|**Search page.** _Example: 1_. You can request a specific page of notifications using this parameter.|
|per_page|query|integer|false|**Results per page.** _Example: 100._ You can identify the number of results to include per page. The default value is 20, and the maximum value is 100.|
|starred|query|boolean|false|**Return starred notifications.** _Example: true_. You can return only your starred notifications.|
|archive|query|boolean|false|**Return archived notifications.** _Example: true_. You can use this parameter to return only notifications that you have archived.|
|q|query|string|false|**Search by subject title.** _Example: 'Improve Rest API Docs.'_ You can use this parameter to search for a notification using its subject title.|

> Example responses

> 200 Response

```json
{
  "pagination": {
    "total_notifications": 0,
    "page": 0,
    "total_pages": 0,
    "per_page": 0
  },
  "types": {
    "PullRequest": 0
  },
  "reasons": {
    "mention": 0
  },
  "unread_repositories": {
    "octobox/octobox": 0
  },
  "notifications": [
    {
      "id": 0,
      "github_id": 0,
      "reason": "string",
      "unread": true,
      "archived": true,
      "starred": true,
      "url": "string",
      "web_url": "string",
      "last_read_at": "string",
      "created_at": "string",
      "updated_at": "string",
      "subject": {
        "title": "string",
        "url": "string",
        "type": "string",
        "state": "string"
      },
      "repo": {
        "id": 0,
        "name": "string",
        "owner": "string",
        "repo_url": "string"
      }
    }
  ]
}
```

<h3 id="return-notifications-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response.|[notifications](#schemanotifications)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth, ApiKeyAuth
</aside>

## Find notification by subject URL.

<a id="opIdReturnNotificationBySubject"></a>

> Code samples

```bash
curl https://octobox.io/api/notifications/lookup.json \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/notifications/lookup.json`

Return a notification using its subject URL.

<h3 id="find-notification-by-subject-url-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|url|query|string|false|GitHub subject URL. _Example: https://github.com/{user}/{subject-URL}_.|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "github_id": 0,
  "reason": "string",
  "unread": true,
  "archived": true,
  "starred": true,
  "url": "string",
  "web_url": "string",
  "last_read_at": "string",
  "created_at": "string",
  "updated_at": "string",
  "subject": {
    "title": "string",
    "url": "string",
    "type": "string",
    "state": "string"
  },
  "repo": {
    "id": 0,
    "name": "string",
    "owner": "string",
    "repo_url": "string"
  }
}
```

<h3 id="find-notification-by-subject-url-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Search successful.|[subject-url-response](#schemasubject-url-response)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth, ApiKeyAuth
</aside>

## Mark notifications as read.

<a id="opIdMarkRead"></a>

> Code samples

```bash
curl https://octobox.io/api/notifications/mark_read_selected.json \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/notifications/mark_read_selected.json`

Mark notifications as read. You can choose to mark all notifications as read, or only selected ones.

<h3 id="mark-notifications-as-read-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|query|[string]|false|**Notification ID.** _Example: 1_. You can select a single notification ID or an array of IDs to mark as read. If ID is set to ‘all’, all notifications will be marked as read.|

<h3 id="mark-notifications-as-read-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Notifications successfully marked as read.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth, ApiKeyAuth
</aside>

## Mute notifications.

<a id="opIdMuteNotifications"></a>

> Code samples

```bash
curl https://octobox.io/api/notifications/mute_selected.json \
  -X POST \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /api/notifications/mute_selected.json`

Mute notifications. You can choose to mute all notifications or only selected ones. Muting notifications will also archive them.

<h3 id="mute-notifications-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|query|[string]|false|**Notification ID.** _Example: 1_. You can select a single notification ID or an array of IDs to mute. If ID is set to ‘all’, all notifications will be muted. Muting notifications will also archive them.|

<h3 id="mute-notifications-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Mute successful.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth, ApiKeyAuth
</aside>

## Change a notification's star status.

<a id="opIdStarNotification"></a>

> Code samples

```bash
curl https://octobox.io/api/notifications/string/star.json \
  -X POST \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /api/notifications/{id}/star.json`

Star or un-star a notification based on the current status of the notification. If the notification is currently not starred, a star will be applied. If it is currently starred, the star will be removed. 

<h3 id="change-a-notifications-star-status-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|**Notification ID.** _Example: 1_. Note that this parameter only accepts a single notification ID.  |

<h3 id="change-a-notifications-star-status-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Star state-change successful.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth, ApiKeyAuth
</aside>

## Sync with GitHub.

<a id="opIdSyncCheck"></a>

> Code samples

```bash
curl https://octobox.io/api/notifications/sync.json \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /api/notifications/sync.json`

Initiate sync with GitHub.

> Example responses

> 200 Response

```json
{}
```

<h3 id="sync-with-github-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Sync successful.|Inline|
|503|Service Unavailable|Service unavailable - sync failed due to GitHub API issues or network problems.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth, ApiKeyAuth
</aside>

## Check GitHub sync status.

<a id="opIdSyncing"></a>

> Code samples

```bash
curl https://octobox.io/api/notifications/syncing.json \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/notifications/syncing.json`

Check whether Octobox is synchronizing notifications with GitHub.

> Example responses

> 200 Response

```json
{
  "error": null
}
```

> 423 Response

```json
{}
```

<h3 id="check-github-sync-status-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Octobox is not currently syncing.|Inline|
|423|Locked|Octobox is currently syncing with GitHub.|Inline|

<h3 id="check-github-sync-status-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string \| null|false|none|Any error from the last sync job|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth, ApiKeyAuth
</aside>

## Return unread notification count.

<a id="opIdReturnUnreadCount"></a>

> Code samples

```bash
curl https://octobox.io/api/notifications/unread_count.json \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/notifications/unread_count.json`

Return the number of unread notifications..

> Example responses

> 200 Response

```json
{
  "count": 1
}
```

<h3 id="return-unread-notification-count-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response.|Inline|

<h3 id="return-unread-notification-count-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|number|false|none|The number of unread notifications.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth, ApiKeyAuth
</aside>

<h1 id="octobox-users">Users</h1>

Return and modify user profile information

## Return user profile.

<a id="opIdReturnUserProfile"></a>

> Code samples

```bash
curl https://octobox.io/api/users/profile.json \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/users/profile.json`

Return user profile information for the current user. Only the current user profile can be returned.

> Example responses

> 200 Response

```json
{
  "id": 1,
  "github_id": 3074765,
  "github_login": "jules2689",
  "last_synced_at": "2017-02-22T15:49:32.104Z",
  "created_at": "2017-02-22T15:49:32.104Z",
  "updated_at": "2017-02-22T15:49:32.104Z"
}
```

<h3 id="return-user-profile-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|User profile successfully returned.|[user](#schemauser)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth, ApiKeyAuth
</aside>

## Delete user profile.

<a id="opIdDeleteUser"></a>

> Code samples

```bash
curl https://octobox.io/api/users/0.json \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /api/users/{id}.json`

Delete the user profile. Only the current user profile will be deleted.

<h3 id="delete-user-profile-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|number|true|**GitHub user ID.** _Example: 1234351._|

> Example responses

> 200 Response

```json
{
  "id": 1,
  "github_id": 3074765,
  "github_login": "jules2689",
  "last_synced_at": "2017-02-22T15:49:32.104Z",
  "created_at": "2017-02-22T15:49:32.104Z",
  "updated_at": "2017-02-22T15:49:32.104Z"
}
```

<h3 id="delete-user-profile-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Deletion successful.|[user](#schemauser)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth, ApiKeyAuth
</aside>

## Update user profile.

<a id="opIdUpdateUser"></a>

> Code samples

```bash
curl https://octobox.io/api/users/0.json \
  -X PATCH \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`PATCH /api/users/{id}.json`

Allows users to update their user profile. Only the current user profile will be updated.

<h3 id="update-user-profile-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|number|true|**GitHub user ID.** _Example: 1234351._|
|personal_access_token|query|string|false|**The user's personal access token.**|
|refresh_interval|query|number|false|**Refresh interval.** _Example: 60000._ The refresh interval on which a sync should be initiated while viewing the app. _Unit: milliseconds._|

> Example responses

> 200 Response

```json
{
  "refresh_interval": 60000
}
```

<h3 id="update-user-profile-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Update successful.|[refresh-setting](#schemarefresh-setting)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth, ApiKeyAuth
</aside>

<h1 id="octobox-pinned-searches">Pinned Searches</h1>

Create, return, and modify pinned searches

## Return pinned searches.

<a id="opIdReturnPinnedSearches"></a>

> Code samples

```bash
curl https://octobox.io/api/pinned_searches.json \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/pinned_searches.json`

Return a list of your pinned searches.

> Example responses

> 200 Response

```json
[
  {
    "id": 35778,
    "user_id": 11741,
    "query": "owner:octobox inbox:true",
    "name": "Work",
    "count": 0,
    "created_at": "2021-11-23T19:48:39.953Z",
    "updated_at": "2021-11-23T19:48:39.953Z"
  }
]
```

<h3 id="return-pinned-searches-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|Inline|

<h3 id="return-pinned-searches-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[pinned-search](#schemapinned-search)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth, ApiKeyAuth
</aside>

## Create a pinned search.

<a id="opIdCreatePinnedSearch"></a>

> Code samples

```bash
curl https://octobox.io/api/pinned_searches.json \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "query": "foo",
    "name": "bar"
  }'
```

`POST /api/pinned_searches.json`

Create a pinned search to navigate GitHub more efficiently.

> Body parameter

```json
{
  "query": "foo",
  "name": "bar"
}
```

<h3 id="create-a-pinned-search-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[write-pinned-search](#schemawrite-pinned-search)|false|none|
|» query|body|string|false|none|
|» name|body|string|false|none|

> Example responses

> 200 Response

```json
{
  "id": 35778,
  "user_id": 11741,
  "query": "owner:octobox inbox:true",
  "name": "Work",
  "count": 0,
  "created_at": "2021-11-23T19:48:39.953Z",
  "updated_at": "2021-11-23T19:48:39.953Z"
}
```

<h3 id="create-a-pinned-search-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Pinned search successfully created.|[pinned-search](#schemapinned-search)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth, ApiKeyAuth
</aside>

## Return a single pinned search.

<a id="opIdReturnPinnedSearch"></a>

> Code samples

```bash
curl https://octobox.io/api/pinned_searches/0.json \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/pinned_searches/{id}.json`

Return a single pinned search using its pinned search ID.

<h3 id="return-a-single-pinned-search-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|number|true|**Pinned Search Id.** _Example: 35778. The ID of the pinned search you would like to get.|

> Example responses

> 200 Response

```json
{
  "id": 35778,
  "user_id": 11741,
  "query": "owner:octobox inbox:true",
  "name": "Work",
  "count": 0,
  "created_at": "2021-11-23T19:48:39.953Z",
  "updated_at": "2021-11-23T19:48:39.953Z"
}
```

<h3 id="return-a-single-pinned-search-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[pinned-search](#schemapinned-search)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth, ApiKeyAuth
</aside>

## Delete a pinned search.

<a id="opIdDeletePinnedSearch"></a>

> Code samples

```bash
curl https://octobox.io/api/pinned_searches/0.json \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /api/pinned_searches/{id}.json`

Delete a pinned search that you no longer need.

<h3 id="delete-a-pinned-search-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|number|true|**Pinned Search Id.** _Example: 35778_. The ID of the pinned search you would like to delete.|

<h3 id="delete-a-pinned-search-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Pinned search deleted successfully.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth, ApiKeyAuth
</aside>

## Update a pinned search.

> Code samples

```bash
curl https://octobox.io/api/pinned_searches/0.json \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "query": "foo",
    "name": "bar"
  }'
```

`PATCH /api/pinned_searches/{id}.json`

Update a pinned search. You can update the search query string and/or the display name of the search.

> Body parameter

```json
{
  "query": "foo",
  "name": "bar"
}
```

<h3 id="update-a-pinned-search-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|number|true|**Pinned Search Id.** _Example: 35778._ The ID of the pinned search you would like to update.|
|body|body|[write-pinned-search](#schemawrite-pinned-search)|false|none|
|» query|body|string|false|none|
|» name|body|string|false|none|

> Example responses

> 200 Response

```json
{
  "id": 35778,
  "user_id": 11741,
  "query": "owner:octobox inbox:true",
  "name": "Work",
  "count": 0,
  "created_at": "2021-11-23T19:48:39.953Z",
  "updated_at": "2021-11-23T19:48:39.953Z"
}
```

<h3 id="update-a-pinned-search-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[pinned-search](#schemapinned-search)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth, ApiKeyAuth
</aside>

# Schemas

<h2 id="tocS_user">user</h2>
<!-- backwards compatibility -->
<a id="schemauser"></a>
<a id="schema_user"></a>
<a id="tocSuser"></a>
<a id="tocsuser"></a>

```json
{
  "id": 1,
  "github_id": 3074765,
  "github_login": "jules2689",
  "last_synced_at": "2017-02-22T15:49:32.104Z",
  "created_at": "2017-02-22T15:49:32.104Z",
  "updated_at": "2017-02-22T15:49:32.104Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|number|false|none|The user ID.|
|github_id|number|false|none|The GitHub ID|
|github_login|string|false|none|The user's GitHub login|
|last_synced_at|string|false|none|The date and time of the last sync.|
|created_at|string|false|none|The date and time of creation.|
|updated_at|string|false|none|The date and time of the last update.|

<h2 id="tocS_refresh-setting">refresh-setting</h2>
<!-- backwards compatibility -->
<a id="schemarefresh-setting"></a>
<a id="schema_refresh-setting"></a>
<a id="tocSrefresh-setting"></a>
<a id="tocsrefresh-setting"></a>

```json
{
  "refresh_interval": 60000
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|refresh_interval|number|false|none|The refresh interval on which a sync should be initiated (while viewing the app). In milliseconds.|

<h2 id="tocS_write-pinned-search">write-pinned-search</h2>
<!-- backwards compatibility -->
<a id="schemawrite-pinned-search"></a>
<a id="schema_write-pinned-search"></a>
<a id="tocSwrite-pinned-search"></a>
<a id="tocswrite-pinned-search"></a>

```json
{
  "query": "foo",
  "name": "bar"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|query|string|false|none|none|
|name|string|false|none|none|

<h2 id="tocS_pinned-search">pinned-search</h2>
<!-- backwards compatibility -->
<a id="schemapinned-search"></a>
<a id="schema_pinned-search"></a>
<a id="tocSpinned-search"></a>
<a id="tocspinned-search"></a>

```json
{
  "id": 35778,
  "user_id": 11741,
  "query": "owner:octobox inbox:true",
  "name": "Work",
  "count": 0,
  "created_at": "2021-11-23T19:48:39.953Z",
  "updated_at": "2021-11-23T19:48:39.953Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|number|false|none|The search ID.|
|user_id|number|false|none|The User ID.|
|query|string|false|none|The search query.|
|name|string|false|none|The search name.|
|count|number|false|none|The count.|
|created_at|string|false|none|The date and time of creation.|
|updated_at|string|false|none|The date and time of update.|

<h2 id="tocS_notifications">notifications</h2>
<!-- backwards compatibility -->
<a id="schemanotifications"></a>
<a id="schema_notifications"></a>
<a id="tocSnotifications"></a>
<a id="tocsnotifications"></a>

```json
{
  "pagination": {
    "total_notifications": 0,
    "page": 0,
    "total_pages": 0,
    "per_page": 0
  },
  "types": {
    "PullRequest": 0
  },
  "reasons": {
    "mention": 0
  },
  "unread_repositories": {
    "octobox/octobox": 0
  },
  "notifications": [
    {
      "id": 0,
      "github_id": 0,
      "reason": "string",
      "unread": true,
      "archived": true,
      "starred": true,
      "url": "string",
      "web_url": "string",
      "last_read_at": "string",
      "created_at": "string",
      "updated_at": "string",
      "subject": {
        "title": "string",
        "url": "string",
        "type": "string",
        "state": "string"
      },
      "repo": {
        "id": 0,
        "name": "string",
        "owner": "string",
        "repo_url": "string"
      }
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|pagination|object|false|none|none|
|types|object|false|none|none|
|reasons|object|false|none|none|
|unread_repositories|object|false|none|none|
|notifications|[[notification](#schemanotification)]|false|none|none|

<h2 id="tocS_notification">notification</h2>
<!-- backwards compatibility -->
<a id="schemanotification"></a>
<a id="schema_notification"></a>
<a id="tocSnotification"></a>
<a id="tocsnotification"></a>

```json
{
  "id": 0,
  "github_id": 0,
  "reason": "string",
  "unread": true,
  "archived": true,
  "starred": true,
  "url": "string",
  "web_url": "string",
  "last_read_at": "string",
  "created_at": "string",
  "updated_at": "string",
  "subject": {
    "title": "string",
    "url": "string",
    "type": "string",
    "state": "string"
  },
  "repo": {
    "id": 0,
    "name": "string",
    "owner": "string",
    "repo_url": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer|false|none|none|
|github_id|integer|false|none|none|
|reason|string|false|none|none|
|unread|boolean|false|none|none|
|archived|boolean|false|none|none|
|starred|boolean|false|none|none|
|url|string|false|none|none|
|web_url|string|false|none|none|
|last_read_at|string|false|none|none|
|created_at|string|false|none|none|
|updated_at|string|false|none|none|
|subject|[subject](#schemasubject)|false|none|none|
|repo|[repo](#schemarepo)|false|none|none|

<h2 id="tocS_subject-url-response">subject-url-response</h2>
<!-- backwards compatibility -->
<a id="schemasubject-url-response"></a>
<a id="schema_subject-url-response"></a>
<a id="tocSsubject-url-response"></a>
<a id="tocssubject-url-response"></a>

```json
{
  "id": 0,
  "github_id": 0,
  "reason": "string",
  "unread": true,
  "archived": true,
  "starred": true,
  "url": "string",
  "web_url": "string",
  "last_read_at": "string",
  "created_at": "string",
  "updated_at": "string",
  "subject": {
    "title": "string",
    "url": "string",
    "type": "string",
    "state": "string"
  },
  "repo": {
    "id": 0,
    "name": "string",
    "owner": "string",
    "repo_url": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer|false|none|none|
|github_id|integer|false|none|none|
|reason|string|false|none|none|
|unread|boolean|false|none|none|
|archived|boolean|false|none|none|
|starred|boolean|false|none|none|
|url|string|false|none|none|
|web_url|string|false|none|none|
|last_read_at|string|false|none|none|
|created_at|string|false|none|none|
|updated_at|string|false|none|none|
|subject|[subject](#schemasubject)|false|none|none|
|repo|[repo](#schemarepo)|false|none|none|

<h2 id="tocS_subject">subject</h2>
<!-- backwards compatibility -->
<a id="schemasubject"></a>
<a id="schema_subject"></a>
<a id="tocSsubject"></a>
<a id="tocssubject"></a>

```json
{
  "title": "string",
  "url": "string",
  "type": "string",
  "state": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|title|string|false|none|none|
|url|string|false|none|none|
|type|string|false|none|none|
|state|string|false|none|none|

<h2 id="tocS_repo">repo</h2>
<!-- backwards compatibility -->
<a id="schemarepo"></a>
<a id="schema_repo"></a>
<a id="tocSrepo"></a>
<a id="tocsrepo"></a>

```json
{
  "id": 0,
  "name": "string",
  "owner": "string",
  "repo_url": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer|false|none|none|
|name|string|false|none|none|
|owner|string|false|none|none|
|repo_url|string|false|none|none|
