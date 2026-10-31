<h1 id="google-tasks-api">Google Tasks API v1</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

The Google Tasks API lets you manage your tasks and task lists.

Base URLs:

* <a href="https://tasks.googleapis.com/">https://tasks.googleapis.com/</a>

<a href="https://developers.google.com/terms/">Terms of service</a>
Web: <a href="https://google.com">Google</a> 
License: <a href="http://creativecommons.org/licenses/by/3.0/">Creative Commons Attribution 3.0</a>

<a href="https://developers.google.com/tasks/">External documentation</a>

# Authentication

- oAuth2 authentication. Oauth 2.0 implicit authentication

    - Flow: implicit
    - Authorization URL = [https://accounts.google.com/o/oauth2/auth](https://accounts.google.com/o/oauth2/auth)

|Scope|Scope Description|
|---|---|
|https://www.googleapis.com/auth/tasks|Create, edit, organize, and delete all your tasks|
|https://www.googleapis.com/auth/tasks.readonly|View your tasks|

- oAuth2 authentication. Oauth 2.0 authorizationCode authentication

    - Flow: authorizationCode
    - Authorization URL = [https://accounts.google.com/o/oauth2/auth](https://accounts.google.com/o/oauth2/auth)
    - Token URL = [https://accounts.google.com/o/oauth2/token](https://accounts.google.com/o/oauth2/token)

|Scope|Scope Description|
|---|---|
|https://www.googleapis.com/auth/tasks|Create, edit, organize, and delete all your tasks|
|https://www.googleapis.com/auth/tasks.readonly|View your tasks|

<h1 id="google-tasks-api-tasklists">tasklists</h1>

## tasks.tasklists.list

<a id="opIdtasks.tasklists.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/tasks/v1/users/@me/lists \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /tasks/v1/users/@me/lists`

Returns all the authenticated user's task lists.

<h3 id="taskstasklistslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|maxResults|query|integer|false|Maximum number of task lists returned on one page. Optional. The default is 20 (max allowed: 100).|
|pageToken|query|string|false|Token specifying the result page to return. Optional.|
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
  "etag": "string",
  "items": [
    {
      "etag": "string",
      "id": "string",
      "kind": "string",
      "selfLink": "string",
      "title": "string",
      "updated": "string"
    }
  ],
  "kind": "string",
  "nextPageToken": "string"
}
```

<h3 id="taskstasklistslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[TaskLists](#schematasklists)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/tasks ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/tasks ), Oauth2 ( Scopes: https://www.googleapis.com/auth/tasks.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/tasks.readonly )
</aside>

## tasks.tasklists.insert

<a id="opIdtasks.tasklists.insert"></a>

> Code samples

```bash
curl https://www.googleapis.com/tasks/v1/users/@me/lists \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "etag": "string",
    "id": "string",
    "kind": "string",
    "selfLink": "string",
    "title": "string",
    "updated": "string"
  }'
```

`POST /tasks/v1/users/@me/lists`

Creates a new task list and adds it to the authenticated user's task lists.

> Body parameter

```json
{
  "etag": "string",
  "id": "string",
  "kind": "string",
  "selfLink": "string",
  "title": "string",
  "updated": "string"
}
```

<h3 id="taskstasklistsinsert-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
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
|body|body|[TaskList](#schematasklist)|false|none|
|» etag|body|string|false|ETag of the resource.|
|» id|body|string|false|Task list identifier.|
|» kind|body|string|false|Type of the resource. This is always "tasks#taskList".|
|» selfLink|body|string|false|URL pointing to this task list. Used to retrieve, update, or delete this task list.|
|» title|body|string|false|Title of the task list.|
|» updated|body|string|false|Last modification time of the task list (as a RFC 3339 timestamp).|

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
  "etag": "string",
  "id": "string",
  "kind": "string",
  "selfLink": "string",
  "title": "string",
  "updated": "string"
}
```

<h3 id="taskstasklistsinsert-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[TaskList](#schematasklist)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/tasks ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/tasks )
</aside>

## tasks.tasklists.get

<a id="opIdtasks.tasklists.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/tasks/v1/users/@me/lists/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /tasks/v1/users/@me/lists/{tasklist}`

Returns the authenticated user's specified task list.

<h3 id="taskstasklistsget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|tasklist|path|string|true|Task list identifier.|
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
  "etag": "string",
  "id": "string",
  "kind": "string",
  "selfLink": "string",
  "title": "string",
  "updated": "string"
}
```

<h3 id="taskstasklistsget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[TaskList](#schematasklist)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/tasks ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/tasks ), Oauth2 ( Scopes: https://www.googleapis.com/auth/tasks.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/tasks.readonly )
</aside>

## tasks.tasklists.update

<a id="opIdtasks.tasklists.update"></a>

> Code samples

```bash
curl https://www.googleapis.com/tasks/v1/users/@me/lists/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "etag": "string",
    "id": "string",
    "kind": "string",
    "selfLink": "string",
    "title": "string",
    "updated": "string"
  }'
```

`PUT /tasks/v1/users/@me/lists/{tasklist}`

Updates the authenticated user's specified task list.

> Body parameter

```json
{
  "etag": "string",
  "id": "string",
  "kind": "string",
  "selfLink": "string",
  "title": "string",
  "updated": "string"
}
```

<h3 id="taskstasklistsupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|tasklist|path|string|true|Task list identifier.|
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
|body|body|[TaskList](#schematasklist)|false|none|
|» etag|body|string|false|ETag of the resource.|
|» id|body|string|false|Task list identifier.|
|» kind|body|string|false|Type of the resource. This is always "tasks#taskList".|
|» selfLink|body|string|false|URL pointing to this task list. Used to retrieve, update, or delete this task list.|
|» title|body|string|false|Title of the task list.|
|» updated|body|string|false|Last modification time of the task list (as a RFC 3339 timestamp).|

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
  "etag": "string",
  "id": "string",
  "kind": "string",
  "selfLink": "string",
  "title": "string",
  "updated": "string"
}
```

<h3 id="taskstasklistsupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[TaskList](#schematasklist)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/tasks ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/tasks )
</aside>

## tasks.tasklists.delete

<a id="opIdtasks.tasklists.delete"></a>

> Code samples

```bash
curl https://www.googleapis.com/tasks/v1/users/@me/lists/string \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /tasks/v1/users/@me/lists/{tasklist}`

Deletes the authenticated user's specified task list.

<h3 id="taskstasklistsdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|tasklist|path|string|true|Task list identifier.|
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

<h3 id="taskstasklistsdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/tasks ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/tasks )
</aside>

## tasks.tasklists.patch

<a id="opIdtasks.tasklists.patch"></a>

> Code samples

```bash
curl https://www.googleapis.com/tasks/v1/users/@me/lists/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "etag": "string",
    "id": "string",
    "kind": "string",
    "selfLink": "string",
    "title": "string",
    "updated": "string"
  }'
```

`PATCH /tasks/v1/users/@me/lists/{tasklist}`

Updates the authenticated user's specified task list. This method supports patch semantics.

> Body parameter

```json
{
  "etag": "string",
  "id": "string",
  "kind": "string",
  "selfLink": "string",
  "title": "string",
  "updated": "string"
}
```

<h3 id="taskstasklistspatch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|tasklist|path|string|true|Task list identifier.|
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
|body|body|[TaskList](#schematasklist)|false|none|
|» etag|body|string|false|ETag of the resource.|
|» id|body|string|false|Task list identifier.|
|» kind|body|string|false|Type of the resource. This is always "tasks#taskList".|
|» selfLink|body|string|false|URL pointing to this task list. Used to retrieve, update, or delete this task list.|
|» title|body|string|false|Title of the task list.|
|» updated|body|string|false|Last modification time of the task list (as a RFC 3339 timestamp).|

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
  "etag": "string",
  "id": "string",
  "kind": "string",
  "selfLink": "string",
  "title": "string",
  "updated": "string"
}
```

<h3 id="taskstasklistspatch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[TaskList](#schematasklist)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/tasks ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/tasks )
</aside>

<h1 id="google-tasks-api-tasks">tasks</h1>

## tasks.tasks.clear

<a id="opIdtasks.tasks.clear"></a>

> Code samples

```bash
curl https://www.googleapis.com/tasks/v1/lists/string/clear \
  -X POST \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /tasks/v1/lists/{tasklist}/clear`

Clears all completed tasks from the specified task list. The affected tasks will be marked as 'hidden' and no longer be returned by default when retrieving all tasks for a task list.

<h3 id="taskstasksclear-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|tasklist|path|string|true|Task list identifier.|
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

<h3 id="taskstasksclear-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/tasks ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/tasks )
</aside>

## tasks.tasks.list

<a id="opIdtasks.tasks.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/tasks/v1/lists/string/tasks \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /tasks/v1/lists/{tasklist}/tasks`

Returns all tasks in the specified task list.

<h3 id="taskstaskslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|tasklist|path|string|true|Task list identifier.|
|completedMax|query|string|false|Upper bound for a task's completion date (as a RFC 3339 timestamp) to filter by. Optional. The default is not to filter by completion date.|
|completedMin|query|string|false|Lower bound for a task's completion date (as a RFC 3339 timestamp) to filter by. Optional. The default is not to filter by completion date.|
|dueMax|query|string|false|Upper bound for a task's due date (as a RFC 3339 timestamp) to filter by. Optional. The default is not to filter by due date.|
|dueMin|query|string|false|Lower bound for a task's due date (as a RFC 3339 timestamp) to filter by. Optional. The default is not to filter by due date.|
|maxResults|query|integer|false|Maximum number of tasks returned on one page. Optional. The default is 20 (max allowed: 100).|
|pageToken|query|string|false|Token specifying the result page to return. Optional.|
|showCompleted|query|boolean|false|Flag indicating whether completed tasks are returned in the result. Optional. The default is True. Note that showHidden must also be True to show tasks completed in first party clients, such as the web UI and Google's mobile apps.|
|showDeleted|query|boolean|false|Flag indicating whether deleted tasks are returned in the result. Optional. The default is False.|
|showHidden|query|boolean|false|Flag indicating whether hidden tasks are returned in the result. Optional. The default is False.|
|updatedMin|query|string|false|Lower bound for a task's last modification time (as a RFC 3339 timestamp) to filter by. Optional. The default is not to filter by last modification time.|
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
  "etag": "string",
  "items": [
    {
      "completed": "string",
      "deleted": true,
      "due": "string",
      "etag": "string",
      "hidden": true,
      "id": "string",
      "kind": "string",
      "links": [
        {
          "description": "string",
          "link": "string",
          "type": "string"
        }
      ],
      "notes": "string",
      "parent": "string",
      "position": "string",
      "selfLink": "string",
      "status": "string",
      "title": "string",
      "updated": "string"
    }
  ],
  "kind": "string",
  "nextPageToken": "string"
}
```

<h3 id="taskstaskslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Tasks](#schematasks)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/tasks ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/tasks ), Oauth2 ( Scopes: https://www.googleapis.com/auth/tasks.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/tasks.readonly )
</aside>

## tasks.tasks.insert

<a id="opIdtasks.tasks.insert"></a>

> Code samples

```bash
curl https://www.googleapis.com/tasks/v1/lists/string/tasks \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "completed": "string",
    "deleted": true,
    "due": "string",
    "etag": "string",
    "hidden": true,
    "id": "string",
    "kind": "string",
    "links": [
      {
        "description": "string",
        "link": "string",
        "type": "string"
      }
    ],
    "notes": "string",
    "parent": "string",
    "position": "string",
    "selfLink": "string",
    "status": "string",
    "title": "string",
    "updated": "string"
  }'
```

`POST /tasks/v1/lists/{tasklist}/tasks`

Creates a new task on the specified task list.

> Body parameter

```json
{
  "completed": "string",
  "deleted": true,
  "due": "string",
  "etag": "string",
  "hidden": true,
  "id": "string",
  "kind": "string",
  "links": [
    {
      "description": "string",
      "link": "string",
      "type": "string"
    }
  ],
  "notes": "string",
  "parent": "string",
  "position": "string",
  "selfLink": "string",
  "status": "string",
  "title": "string",
  "updated": "string"
}
```

<h3 id="taskstasksinsert-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|tasklist|path|string|true|Task list identifier.|
|parent|query|string|false|Parent task identifier. If the task is created at the top level, this parameter is omitted. Optional.|
|previous|query|string|false|Previous sibling task identifier. If the task is created at the first position among its siblings, this parameter is omitted. Optional.|
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
|body|body|[Task](#schematask)|false|none|
|» completed|body|string|false|Completion date of the task (as a RFC 3339 timestamp). This field is omitted if the task has not been completed.|
|» deleted|body|boolean|false|Flag indicating whether the task has been deleted. The default is False.|
|» due|body|string|false|Due date of the task (as a RFC 3339 timestamp). Optional. The due date only records date information; the time portion of the timestamp is discarded when setting the due date. It isn't possible to read or write the time that a task is due via the API.|
|» etag|body|string|false|ETag of the resource.|
|» hidden|body|boolean|false|Flag indicating whether the task is hidden. This is the case if the task had been marked completed when the task list was last cleared. The default is False. This field is read-only.|
|» id|body|string|false|Task identifier.|
|» kind|body|string|false|Type of the resource. This is always "tasks#task".|
|» links|body|[object]|false|Collection of links. This collection is read-only.|
|» » description|body|string|false|The description. In HTML speak: Everything between <a> and </a>.|
|» » link|body|string|false|The URL.|
|» » type|body|string|false|Type of the link, e.g. "email".|
|» notes|body|string|false|Notes describing the task. Optional.|
|» parent|body|string|false|Parent task identifier. This field is omitted if it is a top-level task. This field is read-only. Use the "move" method to move the task under a different parent or to the top level.|
|» position|body|string|false|String indicating the position of the task among its sibling tasks under the same parent task or at the top level. If this string is greater than another task's corresponding position string according to lexicographical ordering, the task is positioned after the other task under the same parent task (or at the top level). This field is read-only. Use the "move" method to move the task to another position.|
|» selfLink|body|string|false|URL pointing to this task. Used to retrieve, update, or delete this task.|
|» status|body|string|false|Status of the task. This is either "needsAction" or "completed".|
|» title|body|string|false|Title of the task.|
|» updated|body|string|false|Last modification time of the task (as a RFC 3339 timestamp).|

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
  "completed": "string",
  "deleted": true,
  "due": "string",
  "etag": "string",
  "hidden": true,
  "id": "string",
  "kind": "string",
  "links": [
    {
      "description": "string",
      "link": "string",
      "type": "string"
    }
  ],
  "notes": "string",
  "parent": "string",
  "position": "string",
  "selfLink": "string",
  "status": "string",
  "title": "string",
  "updated": "string"
}
```

<h3 id="taskstasksinsert-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Task](#schematask)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/tasks ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/tasks )
</aside>

## tasks.tasks.get

<a id="opIdtasks.tasks.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/tasks/v1/lists/string/tasks/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /tasks/v1/lists/{tasklist}/tasks/{task}`

Returns the specified task.

<h3 id="taskstasksget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|tasklist|path|string|true|Task list identifier.|
|task|path|string|true|Task identifier.|
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
  "completed": "string",
  "deleted": true,
  "due": "string",
  "etag": "string",
  "hidden": true,
  "id": "string",
  "kind": "string",
  "links": [
    {
      "description": "string",
      "link": "string",
      "type": "string"
    }
  ],
  "notes": "string",
  "parent": "string",
  "position": "string",
  "selfLink": "string",
  "status": "string",
  "title": "string",
  "updated": "string"
}
```

<h3 id="taskstasksget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Task](#schematask)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/tasks ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/tasks ), Oauth2 ( Scopes: https://www.googleapis.com/auth/tasks.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/tasks.readonly )
</aside>

## tasks.tasks.update

<a id="opIdtasks.tasks.update"></a>

> Code samples

```bash
curl https://www.googleapis.com/tasks/v1/lists/string/tasks/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "completed": "string",
    "deleted": true,
    "due": "string",
    "etag": "string",
    "hidden": true,
    "id": "string",
    "kind": "string",
    "links": [
      {
        "description": "string",
        "link": "string",
        "type": "string"
      }
    ],
    "notes": "string",
    "parent": "string",
    "position": "string",
    "selfLink": "string",
    "status": "string",
    "title": "string",
    "updated": "string"
  }'
```

`PUT /tasks/v1/lists/{tasklist}/tasks/{task}`

Updates the specified task.

> Body parameter

```json
{
  "completed": "string",
  "deleted": true,
  "due": "string",
  "etag": "string",
  "hidden": true,
  "id": "string",
  "kind": "string",
  "links": [
    {
      "description": "string",
      "link": "string",
      "type": "string"
    }
  ],
  "notes": "string",
  "parent": "string",
  "position": "string",
  "selfLink": "string",
  "status": "string",
  "title": "string",
  "updated": "string"
}
```

<h3 id="taskstasksupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|tasklist|path|string|true|Task list identifier.|
|task|path|string|true|Task identifier.|
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
|body|body|[Task](#schematask)|false|none|
|» completed|body|string|false|Completion date of the task (as a RFC 3339 timestamp). This field is omitted if the task has not been completed.|
|» deleted|body|boolean|false|Flag indicating whether the task has been deleted. The default is False.|
|» due|body|string|false|Due date of the task (as a RFC 3339 timestamp). Optional. The due date only records date information; the time portion of the timestamp is discarded when setting the due date. It isn't possible to read or write the time that a task is due via the API.|
|» etag|body|string|false|ETag of the resource.|
|» hidden|body|boolean|false|Flag indicating whether the task is hidden. This is the case if the task had been marked completed when the task list was last cleared. The default is False. This field is read-only.|
|» id|body|string|false|Task identifier.|
|» kind|body|string|false|Type of the resource. This is always "tasks#task".|
|» links|body|[object]|false|Collection of links. This collection is read-only.|
|» » description|body|string|false|The description. In HTML speak: Everything between <a> and </a>.|
|» » link|body|string|false|The URL.|
|» » type|body|string|false|Type of the link, e.g. "email".|
|» notes|body|string|false|Notes describing the task. Optional.|
|» parent|body|string|false|Parent task identifier. This field is omitted if it is a top-level task. This field is read-only. Use the "move" method to move the task under a different parent or to the top level.|
|» position|body|string|false|String indicating the position of the task among its sibling tasks under the same parent task or at the top level. If this string is greater than another task's corresponding position string according to lexicographical ordering, the task is positioned after the other task under the same parent task (or at the top level). This field is read-only. Use the "move" method to move the task to another position.|
|» selfLink|body|string|false|URL pointing to this task. Used to retrieve, update, or delete this task.|
|» status|body|string|false|Status of the task. This is either "needsAction" or "completed".|
|» title|body|string|false|Title of the task.|
|» updated|body|string|false|Last modification time of the task (as a RFC 3339 timestamp).|

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
  "completed": "string",
  "deleted": true,
  "due": "string",
  "etag": "string",
  "hidden": true,
  "id": "string",
  "kind": "string",
  "links": [
    {
      "description": "string",
      "link": "string",
      "type": "string"
    }
  ],
  "notes": "string",
  "parent": "string",
  "position": "string",
  "selfLink": "string",
  "status": "string",
  "title": "string",
  "updated": "string"
}
```

<h3 id="taskstasksupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Task](#schematask)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/tasks ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/tasks )
</aside>

## tasks.tasks.delete

<a id="opIdtasks.tasks.delete"></a>

> Code samples

```bash
curl https://www.googleapis.com/tasks/v1/lists/string/tasks/string \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /tasks/v1/lists/{tasklist}/tasks/{task}`

Deletes the specified task from the task list.

<h3 id="taskstasksdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|tasklist|path|string|true|Task list identifier.|
|task|path|string|true|Task identifier.|
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

<h3 id="taskstasksdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/tasks ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/tasks )
</aside>

## tasks.tasks.patch

<a id="opIdtasks.tasks.patch"></a>

> Code samples

```bash
curl https://www.googleapis.com/tasks/v1/lists/string/tasks/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "completed": "string",
    "deleted": true,
    "due": "string",
    "etag": "string",
    "hidden": true,
    "id": "string",
    "kind": "string",
    "links": [
      {
        "description": "string",
        "link": "string",
        "type": "string"
      }
    ],
    "notes": "string",
    "parent": "string",
    "position": "string",
    "selfLink": "string",
    "status": "string",
    "title": "string",
    "updated": "string"
  }'
```

`PATCH /tasks/v1/lists/{tasklist}/tasks/{task}`

Updates the specified task. This method supports patch semantics.

> Body parameter

```json
{
  "completed": "string",
  "deleted": true,
  "due": "string",
  "etag": "string",
  "hidden": true,
  "id": "string",
  "kind": "string",
  "links": [
    {
      "description": "string",
      "link": "string",
      "type": "string"
    }
  ],
  "notes": "string",
  "parent": "string",
  "position": "string",
  "selfLink": "string",
  "status": "string",
  "title": "string",
  "updated": "string"
}
```

<h3 id="taskstaskspatch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|tasklist|path|string|true|Task list identifier.|
|task|path|string|true|Task identifier.|
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
|body|body|[Task](#schematask)|false|none|
|» completed|body|string|false|Completion date of the task (as a RFC 3339 timestamp). This field is omitted if the task has not been completed.|
|» deleted|body|boolean|false|Flag indicating whether the task has been deleted. The default is False.|
|» due|body|string|false|Due date of the task (as a RFC 3339 timestamp). Optional. The due date only records date information; the time portion of the timestamp is discarded when setting the due date. It isn't possible to read or write the time that a task is due via the API.|
|» etag|body|string|false|ETag of the resource.|
|» hidden|body|boolean|false|Flag indicating whether the task is hidden. This is the case if the task had been marked completed when the task list was last cleared. The default is False. This field is read-only.|
|» id|body|string|false|Task identifier.|
|» kind|body|string|false|Type of the resource. This is always "tasks#task".|
|» links|body|[object]|false|Collection of links. This collection is read-only.|
|» » description|body|string|false|The description. In HTML speak: Everything between <a> and </a>.|
|» » link|body|string|false|The URL.|
|» » type|body|string|false|Type of the link, e.g. "email".|
|» notes|body|string|false|Notes describing the task. Optional.|
|» parent|body|string|false|Parent task identifier. This field is omitted if it is a top-level task. This field is read-only. Use the "move" method to move the task under a different parent or to the top level.|
|» position|body|string|false|String indicating the position of the task among its sibling tasks under the same parent task or at the top level. If this string is greater than another task's corresponding position string according to lexicographical ordering, the task is positioned after the other task under the same parent task (or at the top level). This field is read-only. Use the "move" method to move the task to another position.|
|» selfLink|body|string|false|URL pointing to this task. Used to retrieve, update, or delete this task.|
|» status|body|string|false|Status of the task. This is either "needsAction" or "completed".|
|» title|body|string|false|Title of the task.|
|» updated|body|string|false|Last modification time of the task (as a RFC 3339 timestamp).|

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
  "completed": "string",
  "deleted": true,
  "due": "string",
  "etag": "string",
  "hidden": true,
  "id": "string",
  "kind": "string",
  "links": [
    {
      "description": "string",
      "link": "string",
      "type": "string"
    }
  ],
  "notes": "string",
  "parent": "string",
  "position": "string",
  "selfLink": "string",
  "status": "string",
  "title": "string",
  "updated": "string"
}
```

<h3 id="taskstaskspatch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Task](#schematask)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/tasks ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/tasks )
</aside>

## tasks.tasks.move

<a id="opIdtasks.tasks.move"></a>

> Code samples

```bash
curl https://www.googleapis.com/tasks/v1/lists/string/tasks/string/move \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /tasks/v1/lists/{tasklist}/tasks/{task}/move`

Moves the specified task to another position in the task list. This can include putting it as a child task under a new parent and/or move it to a different position among its sibling tasks.

<h3 id="taskstasksmove-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|tasklist|path|string|true|Task list identifier.|
|task|path|string|true|Task identifier.|
|parent|query|string|false|New parent task identifier. If the task is moved to the top level, this parameter is omitted. Optional.|
|previous|query|string|false|New previous sibling task identifier. If the task is moved to the first position among its siblings, this parameter is omitted. Optional.|
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
  "completed": "string",
  "deleted": true,
  "due": "string",
  "etag": "string",
  "hidden": true,
  "id": "string",
  "kind": "string",
  "links": [
    {
      "description": "string",
      "link": "string",
      "type": "string"
    }
  ],
  "notes": "string",
  "parent": "string",
  "position": "string",
  "selfLink": "string",
  "status": "string",
  "title": "string",
  "updated": "string"
}
```

<h3 id="taskstasksmove-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Task](#schematask)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/tasks ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/tasks )
</aside>

# Schemas

<h2 id="tocS_Task">Task</h2>
<!-- backwards compatibility -->
<a id="schematask"></a>
<a id="schema_Task"></a>
<a id="tocStask"></a>
<a id="tocstask"></a>

```json
{
  "completed": "string",
  "deleted": true,
  "due": "string",
  "etag": "string",
  "hidden": true,
  "id": "string",
  "kind": "string",
  "links": [
    {
      "description": "string",
      "link": "string",
      "type": "string"
    }
  ],
  "notes": "string",
  "parent": "string",
  "position": "string",
  "selfLink": "string",
  "status": "string",
  "title": "string",
  "updated": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|completed|string|false|none|Completion date of the task (as a RFC 3339 timestamp). This field is omitted if the task has not been completed.|
|deleted|boolean|false|none|Flag indicating whether the task has been deleted. The default is False.|
|due|string|false|none|Due date of the task (as a RFC 3339 timestamp). Optional. The due date only records date information; the time portion of the timestamp is discarded when setting the due date. It isn't possible to read or write the time that a task is due via the API.|
|etag|string|false|none|ETag of the resource.|
|hidden|boolean|false|none|Flag indicating whether the task is hidden. This is the case if the task had been marked completed when the task list was last cleared. The default is False. This field is read-only.|
|id|string|false|none|Task identifier.|
|kind|string|false|none|Type of the resource. This is always "tasks#task".|
|links|[object]|false|none|Collection of links. This collection is read-only.|
|notes|string|false|none|Notes describing the task. Optional.|
|parent|string|false|none|Parent task identifier. This field is omitted if it is a top-level task. This field is read-only. Use the "move" method to move the task under a different parent or to the top level.|
|position|string|false|none|String indicating the position of the task among its sibling tasks under the same parent task or at the top level. If this string is greater than another task's corresponding position string according to lexicographical ordering, the task is positioned after the other task under the same parent task (or at the top level). This field is read-only. Use the "move" method to move the task to another position.|
|selfLink|string|false|none|URL pointing to this task. Used to retrieve, update, or delete this task.|
|status|string|false|none|Status of the task. This is either "needsAction" or "completed".|
|title|string|false|none|Title of the task.|
|updated|string|false|none|Last modification time of the task (as a RFC 3339 timestamp).|

<h2 id="tocS_TaskList">TaskList</h2>
<!-- backwards compatibility -->
<a id="schematasklist"></a>
<a id="schema_TaskList"></a>
<a id="tocStasklist"></a>
<a id="tocstasklist"></a>

```json
{
  "etag": "string",
  "id": "string",
  "kind": "string",
  "selfLink": "string",
  "title": "string",
  "updated": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|etag|string|false|none|ETag of the resource.|
|id|string|false|none|Task list identifier.|
|kind|string|false|none|Type of the resource. This is always "tasks#taskList".|
|selfLink|string|false|none|URL pointing to this task list. Used to retrieve, update, or delete this task list.|
|title|string|false|none|Title of the task list.|
|updated|string|false|none|Last modification time of the task list (as a RFC 3339 timestamp).|

<h2 id="tocS_TaskLists">TaskLists</h2>
<!-- backwards compatibility -->
<a id="schematasklists"></a>
<a id="schema_TaskLists"></a>
<a id="tocStasklists"></a>
<a id="tocstasklists"></a>

```json
{
  "etag": "string",
  "items": [
    {
      "etag": "string",
      "id": "string",
      "kind": "string",
      "selfLink": "string",
      "title": "string",
      "updated": "string"
    }
  ],
  "kind": "string",
  "nextPageToken": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|etag|string|false|none|ETag of the resource.|
|items|[[TaskList](#schematasklist)]|false|none|Collection of task lists.|
|kind|string|false|none|Type of the resource. This is always "tasks#taskLists".|
|nextPageToken|string|false|none|Token that can be used to request the next page of this result.|

<h2 id="tocS_Tasks">Tasks</h2>
<!-- backwards compatibility -->
<a id="schematasks"></a>
<a id="schema_Tasks"></a>
<a id="tocStasks"></a>
<a id="tocstasks"></a>

```json
{
  "etag": "string",
  "items": [
    {
      "completed": "string",
      "deleted": true,
      "due": "string",
      "etag": "string",
      "hidden": true,
      "id": "string",
      "kind": "string",
      "links": [
        {
          "description": "string",
          "link": "string",
          "type": "string"
        }
      ],
      "notes": "string",
      "parent": "string",
      "position": "string",
      "selfLink": "string",
      "status": "string",
      "title": "string",
      "updated": "string"
    }
  ],
  "kind": "string",
  "nextPageToken": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|etag|string|false|none|ETag of the resource.|
|items|[[Task](#schematask)]|false|none|Collection of tasks.|
|kind|string|false|none|Type of the resource. This is always "tasks#tasks".|
|nextPageToken|string|false|none|Token used to access the next page of this result.|
