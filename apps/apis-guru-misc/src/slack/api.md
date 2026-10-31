<h1 id="slack-web-api">Slack Web API v1.7.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

One way to interact with the Slack platform is its HTTP RPC-based Web API, a collection of methods requiring OAuth 2.0-based user, bot, or workspace tokens blessed with related OAuth scopes.

Base URLs:

* <a href="https://slack.com/api">https://slack.com/api</a>

Web: <a href="https://api.slack.com/support">Slack developer relations</a> 

<a href="https://api.slack.com/web">Learn more about the Slack Web API</a>

# Authentication

- oAuth2 authentication.

    - Flow: authorizationCode
    - Authorization URL = [https://slack.com/oauth/authorize](https://slack.com/oauth/authorize)
    - Token URL = [https://slack.com/api/oauth.access](https://slack.com/api/oauth.access)

|Scope|Scope Description|
|---|---|
|admin|admin|
|admin.apps:read|admin.apps:read|
|admin.apps:write|admin.apps:write|
|admin.conversations:read|admin.conversations:read|
|admin.conversations:write|admin.conversations:write|
|admin.invites:read|admin.invites:read|
|admin.invites:write|admin.invites:write|
|admin.teams:read|admin.teams:read|
|admin.teams:write|admin.teams:write|
|admin.usergroups:read|admin.usergroups:read|
|admin.usergroups:write|admin.usergroups:write|
|admin.users:read|admin.users:read|
|admin.users:write|admin.users:write|
|authorizations:read|authorizations:read|
|bot|Bot user scope|
|calls:read|calls:read|
|calls:write|calls:write|
|channels:history|channels:history|
|channels:manage|channels:manage|
|channels:read|channels:read|
|channels:write|channels:write|
|chat:write|chat:write|
|chat:write:bot|Author messages as a bot|
|chat:write:user|Author messages as a user|
|conversations:history|conversations:history|
|conversations:read|conversations:read|
|conversations:write|conversations:write|
|dnd:read|dnd:read|
|dnd:write|dnd:write|
|emoji:read|emoji:read|
|files:read|files:read|
|files:write:user|files:write:user|
|groups:history|groups:history|
|groups:read|groups:read|
|groups:write|groups:write|
|identity.basic|identity.basic|
|im:history|im:history|
|im:read|im:read|
|im:write|im:write|
|links:write|links:write|
|mpim:history|mpim:history|
|mpim:read|mpim:read|
|mpim:write|mpim:write|
|none|No scope required|
|pins:read|pins:read|
|pins:write|pins:write|
|reactions:read|reactions:read|
|reactions:write|reactions:write|
|reminders:read|reminders:read|
|reminders:write|reminders:write|
|remote_files:read|remote_files:read|
|remote_files:share|remote_files:share|
|remote_files:write|remote_files:write|
|rtm:stream|rtm:stream|
|search:read|search:read|
|stars:read|stars:read|
|stars:write|stars:write|
|team:read|team:read|
|tokens.basic|tokens.basic|
|usergroups:read|usergroups:read|
|usergroups:write|usergroups:write|
|users.profile:read|users.profile:read|
|users.profile:write|users.profile:write|
|users:read|users:read|
|users:read.email|users:read.email|
|users:write|users:write|
|workflow.steps:execute|workflow.steps:execute|

<h1 id="slack-web-api-adminapps">admin.apps</h1>

## admin_apps_approve

<a id="opIdadmin_apps_approve"></a>

> Code samples

```bash
curl https://example.com/admin.apps.approve \
  -X POST \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'token: string' \
  -d 'app_id=string&request_id=string&team_id=string'
```

`POST /admin.apps.approve`

Approve an app for installation on a workspace.

<a href="https://api.slack.com/methods/admin.apps.approve">API method documentation</a>

> Body parameter

```yaml
app_id: string
request_id: string
team_id: string
```

<h3 id="adminappsapprove-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|token|header|string|true|Authentication token. Requires scope: `admin.apps:write`|
|body|body|object|false|none|
|» app_id|body|string|false|The id of the app to approve.|
|» request_id|body|string|false|The id of the request to approve.|
|» team_id|body|string|false|none|

> Example responses

> 200 Response

```json
{
  "ok": true
}
```

> default Response

```json
{
  "error": "invalid_auth",
  "ok": false
}
```

<h3 id="adminappsapprove-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Typical success response|Inline|
|default|Default|Typical error response|Inline|

<h3 id="adminappsapprove-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|[defs_ok_true](#schemadefs_ok_true)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|ok|true|

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|[defs_ok_false](#schemadefs_ok_false)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|ok|false|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
slackAuth ( Scopes: admin.apps:write )
</aside>

## admin_apps_restrict

<a id="opIdadmin_apps_restrict"></a>

> Code samples

```bash
curl https://example.com/admin.apps.restrict \
  -X POST \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'token: string' \
  -d 'app_id=string&request_id=string&team_id=string'
```

`POST /admin.apps.restrict`

Restrict an app for installation on a workspace.

<a href="https://api.slack.com/methods/admin.apps.restrict">API method documentation</a>

> Body parameter

```yaml
app_id: string
request_id: string
team_id: string
```

<h3 id="adminappsrestrict-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|token|header|string|true|Authentication token. Requires scope: `admin.apps:write`|
|body|body|object|false|none|
|» app_id|body|string|false|The id of the app to restrict.|
|» request_id|body|string|false|The id of the request to restrict.|
|» team_id|body|string|false|none|

> Example responses

> 200 Response

```json
{
  "ok": true
}
```

> default Response

```json
{
  "error": "invalid_auth",
  "ok": false
}
```

<h3 id="adminappsrestrict-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Typical success response|Inline|
|default|Default|Typical error response|Inline|

<h3 id="adminappsrestrict-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|[defs_ok_true](#schemadefs_ok_true)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|ok|true|

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|[defs_ok_false](#schemadefs_ok_false)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|ok|false|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
slackAuth ( Scopes: admin.apps:write )
</aside>

<h1 id="slack-web-api-adminappsapproved">admin.apps.approved</h1>

## admin_apps_approved_list

<a id="opIdadmin_apps_approved_list"></a>

> Code samples

```bash
curl 'https://example.com/admin.apps.approved.list?token=string' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /admin.apps.approved.list`

List approved apps for an org or workspace.

<a href="https://api.slack.com/methods/admin.apps.approved.list">API method documentation</a>

<h3 id="adminappsapprovedlist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|token|query|string|true|Authentication token. Requires scope: `admin.apps:read`|
|limit|query|integer|false|The maximum number of items to return. Must be between 1 - 1000 both inclusive.|
|cursor|query|string|false|Set `cursor` to `next_cursor` returned by the previous call to list items in the next page|
|team_id|query|string|false|none|
|enterprise_id|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "approved_apps": [
    {
      "app": {
        "additional_info": "",
        "app_directory_url": "https://myteam.enterprise.slack.com/apps/A0W7UKG8E-my-test-app",
        "app_homepage_url": "https://www.slack.com",
        "description": "test app",
        "help_url": "https://www.slack.com",
        "icons": {
          "image_1024": "https://3026743124446w96_2bd4ea1ad1f89a23c242_1024.png",
          "image_128": "https://30267341249446w6_2bd4ea1ad1f89a23c242_128.png",
          "image_192": "https://30267431249446w6_2bd4ea1ad1f89a23c242_192.png",
          "image_32": "https://302674312496446w_2bd4ea1ad1f89a23c242_32.png",
          "image_36": "https://302674312496446w_2bd4ea1ad1f89a23c242_36.png",
          "image_48": "https://302674312496446w_2bd4ea1ad1f89a23c242_48.png",
          "image_512": "https://30267431249446w6_2bd4ea1ad1f89a23c242_512.png",
          "image_64": "https://302674312496446w_2bd4ea1ad1f89a23c242_64.png",
          "image_72": "https://302674312496446w_2bd4ea1ad1f89a23c242_72.png",
          "image_96": "https://302674312496446w_2bd4ea1ad1f89a23c242_96.png",
          "image_original": "https://302674446w12496_2bd4ea1ad1f89a23c242_original.png"
        },
        "id": "A0W7UKG8E",
        "is_app_directory_approved": false,
        "is_internal": false,
        "name": "My Test App",
        "privacy_policy_url": "https://www.slack.com"
      },
      "date_updated": 1574296707,
      "last_resolved_by": {
        "actor_id": "W0G82F4FD",
        "actor_type": "user"
      },
      "scopes": [
        {
          "description": "Add the ability for people to direct message or mention @my_test_app",
          "is_sensitive": true,
          "name": "bot",
          "token_type": "bot"
        }
      ]
    }
  ],
  "ok": true,
  "response_metadata": {
    "next_cursor": ""
  }
}
```

> default Response

```json
{
  "error": "invalid_auth",
  "ok": false
}
```

<h3 id="adminappsapprovedlist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Typical success response|Inline|
|default|Default|Typical error response|Inline|

<h3 id="adminappsapprovedlist-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|[defs_ok_true](#schemadefs_ok_true)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|ok|true|

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|[defs_ok_false](#schemadefs_ok_false)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|ok|false|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
slackAuth ( Scopes: admin.apps:read )
</aside>

<h1 id="slack-web-api-adminappsrequests">admin.apps.requests</h1>

## admin_apps_requests_list

<a id="opIdadmin_apps_requests_list"></a>

> Code samples

```bash
curl 'https://example.com/admin.apps.requests.list?token=string' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /admin.apps.requests.list`

List app requests for a team/workspace.

<a href="https://api.slack.com/methods/admin.apps.requests.list">API method documentation</a>

<h3 id="adminappsrequestslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|token|query|string|true|Authentication token. Requires scope: `admin.apps:read`|
|limit|query|integer|false|The maximum number of items to return. Must be between 1 - 1000 both inclusive.|
|cursor|query|string|false|Set `cursor` to `next_cursor` returned by the previous call to list items in the next page|
|team_id|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "app_requests": [
    {
      "app": {
        "additional_info": "",
        "app_directory_url": "https://acmecorp.slack.com/apps/A061BL8RQ0-test-app",
        "app_homepage_url": "",
        "description": "",
        "help_url": "",
        "icons": {
          "image_1024": "/cdn/15258203/img/testapp/service_1024.png",
          "image_128": "/cdn/157258203/img/testapp/service_128.png",
          "image_192": "/cdn/157258203/img/testapp/service_192.png",
          "image_32": "/cdn/157658203/img/testapp/service_32.png",
          "image_36": "/cdn/157658203/img/testapp/service_36.png",
          "image_48": "/cdn/157658203/img/testapp/service_48.png",
          "image_512": "/cdn/15758203/img/testapp/service_512.png",
          "image_64": "/cdn/157658203/img/testapp/service_64.png",
          "image_72": "/cdn/157658203/img/testapp/service_72.png",
          "image_96": "/cdn/157658203/img/testapp/service_96.png"
        },
        "id": "A061BL8RQ0",
        "is_app_directory_approved": true,
        "is_internal": false,
        "name": "Test App",
        "privacy_policy_url": "https://testapp.com/privacy"
      },
      "date_created": 1578956327,
      "id": "Ar0XJGFLMLS",
      "message": "test test again",
      "previous_resolution": null,
      "scopes": [
        {
          "description": "Post messages to specific channels in Slack",
          "is_sensitive": false,
          "name": "incoming-webhook",
          "token_type": "user"
        }
      ],
      "team": {
        "domain": "acmecorp",
        "id": "T0M94LNUCR",
        "name": "Acme Corp"
      },
      "user": {
        "email": "janedoe@example.com",
        "id": "W08RA9G5HR",
        "name": "Jane Doe"
      }
    }
  ],
  "ok": true,
  "response_metadata": {
    "next_cursor": ""
  }
}
```

> default Response

```json
{
  "error": "missing_scope",
  "needed": "admin.apps:read",
  "ok": false,
  "provided": "read,client,admin,identify,post,apps"
}
```

<h3 id="adminappsrequestslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Typical success response|Inline|
|default|Default|Typical error response|Inline|

<h3 id="adminappsrequestslist-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|[defs_ok_true](#schemadefs_ok_true)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|ok|true|

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|[defs_ok_false](#schemadefs_ok_false)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|ok|false|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
slackAuth ( Scopes: admin.apps:read )
</aside>

<h1 id="slack-web-api-adminappsrestricted">admin.apps.restricted</h1>

## admin_apps_restricted_list

<a id="opIdadmin_apps_restricted_list"></a>

> Code samples

```bash
curl 'https://example.com/admin.apps.restricted.list?token=string' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /admin.apps.restricted.list`

List restricted apps for an org or workspace.

<a href="https://api.slack.com/methods/admin.apps.restricted.list">API method documentation</a>

<h3 id="adminappsrestrictedlist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|token|query|string|true|Authentication token. Requires scope: `admin.apps:read`|
|limit|query|integer|false|The maximum number of items to return. Must be between 1 - 1000 both inclusive.|
|cursor|query|string|false|Set `cursor` to `next_cursor` returned by the previous call to list items in the next page|
|team_id|query|string|false|none|
|enterprise_id|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "ok": true,
  "response_metadata": {
    "next_cursor": ""
  },
  "restricted_apps": [
    {
      "app": {
        "additional_info": "",
        "app_directory_url": "https://myteam.enterprise.slack.com/apps/A0FDLP8M2L-my-test-app",
        "app_homepage_url": "https://example.com",
        "description": "A fun test app for Slack",
        "help_url": "https://example.com",
        "icons": {
          "image_1024": "https://1433265338rl878408_eb57dbc818daa4ba15d6_1024.png",
          "image_128": "https://4332653438rl87808_eb57dbc818daa4ba15d6_128.png",
          "image_192": "https://4332653438rl87808_eb57dbc818daa4ba15d6_192.png",
          "image_32": "https://143326534038rl8788_eb57dbc818daa4ba15d6_32.png",
          "image_36": "https://143326534038rl8788_eb57dbc818daa4ba15d6_36.png",
          "image_48": "https://143326534038rl8788_eb57dbc818daa4ba15d6_48.png",
          "image_512": "https://4332653438rl87808_eb57dbc818daa4ba15d6_512.png",
          "image_64": "https://143326534038rl8788_eb57dbc818daa4ba15d6_64.png",
          "image_72": "https://143326534038rl8788_eb57dbc818daa4ba15d6_72.png",
          "image_96": "https://143326534038rl8788_eb57dbc818daa4ba15d6_96.png",
          "image_original": "https://143338rl8782653408_eb57dbc818daa4ba15d6_original.png"
        },
        "id": "A0FDLP8M2L",
        "is_app_directory_approved": true,
        "is_internal": false,
        "name": "My Test App",
        "privacy_policy_url": "https://example.com"
      },
      "date_updated": 1574296721,
      "last_resolved_by": {
        "actor_id": "W0G82LMFD",
        "actor_type": "user"
      },
      "scopes": [
        {
          "description": "Upload, edit, and delete files on the user‟s behalf",
          "is_sensitive": true,
          "name": "files:write:user",
          "token_type": "user"
        }
      ]
    }
  ]
}
```

> default Response

```json
{
  "error": "invalid_auth",
  "ok": false
}
```

<h3 id="adminappsrestrictedlist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Typical success response|Inline|
|default|Default|Typical error response|Inline|

<h3 id="adminappsrestrictedlist-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|[defs_ok_true](#schemadefs_ok_true)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|ok|true|

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|[defs_ok_false](#schemadefs_ok_false)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|ok|false|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
slackAuth ( Scopes: admin.apps:read )
</aside>

<h1 id="slack-web-api-adminconversations">admin.conversations</h1>

## admin_conversations_archive

<a id="opIdadmin_conversations_archive"></a>

> Code samples

```bash
curl https://example.com/admin.conversations.archive \
  -X POST \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'token: string' \
  -d 'channel_id=string'
```

`POST /admin.conversations.archive`

Archive a public or private channel.

<a href="https://api.slack.com/methods/admin.conversations.archive">API method documentation</a>

> Body parameter

```yaml
channel_id: string
```

<h3 id="adminconversationsarchive-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|token|header|string|true|Authentication token. Requires scope: `admin.conversations:write`|
|body|body|object|true|none|
|» channel_id|body|string|true|The channel to archive.|

> Example responses

> 200 Response

```json
{
  "ok": true
}
```

> default Response

```json
{
  "error": "invalid_auth",
  "ok": false
}
```

<h3 id="adminconversationsarchive-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Typical success response|Inline|
|default|Default|Typical error response|Inline|

<h3 id="adminconversationsarchive-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|[defs_ok_true](#schemadefs_ok_true)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|ok|true|

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|true|none|none|
|ok|[defs_ok_false](#schemadefs_ok_false)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|error|feature_not_enabled|
|error|channel_not_found|
|error|channel_type_not_supported|
|error|default_org_wide_channel|
|error|already_archived|
|error|cant_archive_general|
|error|restricted_action|
|error|could_not_archive_channel|
|ok|false|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
slackAuth ( Scopes: admin.conversations:write )
</aside>

## admin_conversations_convertToPrivate

<a id="opIdadmin_conversations_convertToPrivate"></a>

> Code samples

```bash
curl https://example.com/admin.conversations.convertToPrivate \
  -X POST \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'token: string' \
  -d 'channel_id=string'
```

`POST /admin.conversations.convertToPrivate`

Convert a public channel to a private channel.

<a href="https://api.slack.com/methods/admin.conversations.convertToPrivate">API method documentation</a>

> Body parameter

```yaml
channel_id: string
```

<h3 id="adminconversationsconverttoprivate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|token|header|string|true|Authentication token. Requires scope: `admin.conversations:write`|
|body|body|object|true|none|
|» channel_id|body|string|true|The channel to convert to private.|

> Example responses

> 200 Response

```json
{
  "ok": true
}
```

> default Response

```json
{
  "error": "invalid_auth",
  "ok": false
}
```

<h3 id="adminconversationsconverttoprivate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Typical success response|Inline|
|default|Default|Typical error response|Inline|

<h3 id="adminconversationsconverttoprivate-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|[defs_ok_true](#schemadefs_ok_true)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|ok|true|

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|true|none|none|
|ok|[defs_ok_false](#schemadefs_ok_false)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|error|feature_not_enabled|
|error|restricted_action|
|error|name_taken|
|error|channel_not_found|
|error|channel_type_not_supported|
|error|default_org_wide_channel|
|error|method_not_supported_for_channel_type|
|error|could_not_convert_channel|
|error|external_channel_migrating|
|ok|false|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
slackAuth ( Scopes: admin.conversations:write )
</aside>

## admin_conversations_create

<a id="opIdadmin_conversations_create"></a>

> Code samples

```bash
curl https://example.com/admin.conversations.create \
  -X POST \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'token: string' \
  -d 'description=string&is_private=true&name=string&org_wide=true&team_id=string'
```

`POST /admin.conversations.create`

Create a public or private channel-based conversation.

<a href="https://api.slack.com/methods/admin.conversations.create">API method documentation</a>

> Body parameter

```yaml
description: string
is_private: true
name: string
org_wide: true
team_id: string
```

<h3 id="adminconversationscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|token|header|string|true|Authentication token. Requires scope: `admin.conversations:write`|
|body|body|object|true|none|
|» description|body|string|false|Description of the public or private channel to create.|
|» is_private|body|boolean|true|When `true`, creates a private channel instead of a public channel|
|» name|body|string|true|Name of the public or private channel to create.|
|» org_wide|body|boolean|false|When `true`, the channel will be available org-wide. Note: if the channel is not `org_wide=true`, you must specify a `team_id` for this channel|
|» team_id|body|string|false|The workspace to create the channel in. Note: this argument is required unless you set `org_wide=true`.|

> Example responses

> 200 Response

```json
{
  "channel_id": "C12345",
  "ok": true
}
```

> default Response

```json
{
  "error": "invalid_auth",
  "ok": false
}
```

<h3 id="adminconversationscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Typical success response|Inline|
|default|Default|Typical error response|Inline|

<h3 id="adminconversationscreate-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|channel_id|[defs_channel_id](#schemadefs_channel_id)|false|none|none|
|ok|[defs_ok_true](#schemadefs_ok_true)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|ok|true|

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|true|none|none|
|ok|[defs_ok_false](#schemadefs_ok_false)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|error|feature_not_enabled|
|error|name_taken|
|error|restricted_action|
|error|team_not_found|
|error|invalid_team|
|error|invalid_name|
|error|could_not_create_channel|
|error|team_id_or_org_required|
|ok|false|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
slackAuth ( Scopes: admin.conversations:write )
</aside>

## admin_conversations_delete

<a id="opIdadmin_conversations_delete"></a>

> Code samples

```bash
curl https://example.com/admin.conversations.delete \
  -X POST \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'token: string' \
  -d 'channel_id=string'
```

`POST /admin.conversations.delete`

Delete a public or private channel.

<a href="https://api.slack.com/methods/admin.conversations.delete">API method documentation</a>

> Body parameter

```yaml
channel_id: string
```

<h3 id="adminconversationsdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|token|header|string|true|Authentication token. Requires scope: `admin.conversations:write`|
|body|body|object|true|none|
|» channel_id|body|string|true|The channel to delete.|

> Example responses

> 200 Response

```json
{
  "ok": true
}
```

> default Response

```json
{
  "error": "invalid_auth",
  "ok": false
}
```

<h3 id="adminconversationsdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Typical success response|Inline|
|default|Default|Typical error response|Inline|

<h3 id="adminconversationsdelete-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|[defs_ok_true](#schemadefs_ok_true)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|ok|true|

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|true|none|none|
|ok|[defs_ok_false](#schemadefs_ok_false)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|error|feature_not_enabled|
|error|not_an_admin|
|error|channel_not_found|
|error|channel_type_not_supported|
|error|default_org_wide_channel|
|error|restricted_action|
|error|could_not_delete_channel|
|error|missing_scope|
|ok|false|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
slackAuth ( Scopes: admin.conversations:write )
</aside>

## admin_conversations_disconnectShared

<a id="opIdadmin_conversations_disconnectShared"></a>

> Code samples

```bash
curl https://example.com/admin.conversations.disconnectShared \
  -X POST \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'token: string' \
  -d 'channel_id=string&leaving_team_ids=string'
```

`POST /admin.conversations.disconnectShared`

Disconnect a connected channel from one or more workspaces.

<a href="https://api.slack.com/methods/admin.conversations.disconnectShared">API method documentation</a>

> Body parameter

```yaml
channel_id: string
leaving_team_ids: string
```

<h3 id="adminconversationsdisconnectshared-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|token|header|string|true|Authentication token. Requires scope: `admin.conversations:write`|
|body|body|object|true|none|
|» channel_id|body|string|true|The channel to be disconnected from some workspaces.|
|» leaving_team_ids|body|string|false|The team to be removed from the channel. Currently only a single team id can be specified.|

> Example responses

> 200 Response

```json
{
  "ok": true
}
```

> default Response

```json
{
  "error": "invalid_auth",
  "ok": false
}
```

<h3 id="adminconversationsdisconnectshared-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Typical success response|Inline|
|default|Default|Typical error response|Inline|

<h3 id="adminconversationsdisconnectshared-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|[defs_ok_true](#schemadefs_ok_true)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|ok|true|

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|true|none|none|
|ok|[defs_ok_false](#schemadefs_ok_false)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|error|feature_not_enabled|
|error|not_an_admin|
|error|not_an_enterprise|
|error|channel_not_found|
|error|not_supported|
|error|team_not_found|
|error|restricted_action|
|error|missing_scope|
|error|leaving_team_not_in_channel|
|error|no_teams_to_disconnect|
|error|leaving_team_required|
|error|cannot_kick_team|
|error|cannot_kick_home_team|
|ok|false|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
slackAuth ( Scopes: admin.conversations:write )
</aside>

## admin_conversations_getConversationPrefs

<a id="opIdadmin_conversations_getConversationPrefs"></a>

> Code samples

```bash
curl 'https://example.com/admin.conversations.getConversationPrefs?channel_id=string' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'token: string'
```

`GET /admin.conversations.getConversationPrefs`

Get conversation preferences for a public or private channel.

<a href="https://api.slack.com/methods/admin.conversations.getConversationPrefs">API method documentation</a>

<h3 id="adminconversationsgetconversationprefs-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|token|header|string|true|Authentication token. Requires scope: `admin.conversations:read`|
|channel_id|query|string|true|The channel to get preferences for.|

> Example responses

> 200 Response

```json
{
  "ok": true
}
```

> default Response

```json
{
  "error": "invalid_auth",
  "ok": false
}
```

<h3 id="adminconversationsgetconversationprefs-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Typical success response|Inline|
|default|Default|Typical error response|Inline|

<h3 id="adminconversationsgetconversationprefs-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|[defs_ok_true](#schemadefs_ok_true)|true|none|none|
|prefs|object|false|none|none|
|» can_thread|object|false|none|none|
|» » type|[string]|false|none|none|
|» » user|[string]|false|none|none|
|» who_can_post|object|false|none|none|
|» » type|[string]|false|none|none|
|» » user|[string]|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|ok|true|

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|true|none|none|
|ok|[defs_ok_false](#schemadefs_ok_false)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|error|feature_not_enabled|
|error|not_an_admin|
|error|not_an_enterprise|
|error|restricted_action|
|error|missing_scope|
|error|channel_not_found|
|error|channel_type_not_supported|
|error|could_not_get_conversation_prefs|
|ok|false|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
slackAuth ( Scopes: admin.conversations:read )
</aside>

## admin_conversations_getTeams

<a id="opIdadmin_conversations_getTeams"></a>

> Code samples

```bash
curl 'https://example.com/admin.conversations.getTeams?channel_id=string' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'token: string'
```

`GET /admin.conversations.getTeams`

Get all the workspaces a given public or private channel is connected to within this Enterprise org.

<a href="https://api.slack.com/methods/admin.conversations.getTeams">API method documentation</a>

<h3 id="adminconversationsgetteams-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|token|header|string|true|Authentication token. Requires scope: `admin.conversations:read`|
|channel_id|query|string|true|The channel to determine connected workspaces within the organization for.|
|cursor|query|string|false|Set `cursor` to `next_cursor` returned by the previous call to list items in the next page|
|limit|query|integer|false|The maximum number of items to return. Must be between 1 - 1000 both inclusive.|

> Example responses

> 200 Response

```json
{
  "ok": true,
  "teams": [
    "T1234",
    "T5678"
  ]
}
```

> default Response

```json
{
  "error": "invalid_auth",
  "ok": false
}
```

<h3 id="adminconversationsgetteams-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Typical success response|Inline|
|default|Default|Typical error response|Inline|

<h3 id="adminconversationsgetteams-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|[defs_ok_true](#schemadefs_ok_true)|true|none|none|
|response_metadata|object|false|none|none|
|» next_cursor|string|true|none|none|
|team_ids|[[defs_team](#schemadefs_team)]|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|ok|true|

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|true|none|none|
|ok|[defs_ok_false](#schemadefs_ok_false)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|error|feature_not_enabled|
|error|channel_not_found|
|error|channel_type_not_supported|
|error|unsupported_team_type|
|error|restricted_action|
|error|could_not_get_teams|
|error|invalid_cursor|
|error|invalid_limit|
|ok|false|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
slackAuth ( Scopes: admin.conversations:read )
</aside>

## admin_conversations_invite

<a id="opIdadmin_conversations_invite"></a>

> Code samples

```bash
curl https://example.com/admin.conversations.invite \
  -X POST \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'token: string' \
  -d 'channel_id=string&user_ids=string'
```

`POST /admin.conversations.invite`

Invite a user to a public or private channel.

<a href="https://api.slack.com/methods/admin.conversations.invite">API method documentation</a>

> Body parameter

```yaml
channel_id: string
user_ids: string
```

<h3 id="adminconversationsinvite-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|token|header|string|true|Authentication token. Requires scope: `admin.conversations:write`|
|body|body|object|true|none|
|» channel_id|body|string|true|The channel that the users will be invited to.|
|» user_ids|body|string|true|The users to invite.|

> Example responses

> 200 Response

```json
{
  "ok": true
}
```

> default Response

```json
{
  "error": "invalid_auth",
  "ok": false
}
```

<h3 id="adminconversationsinvite-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Typical success response|Inline|
|default|Default|Typical error response|Inline|

<h3 id="adminconversationsinvite-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|[defs_ok_true](#schemadefs_ok_true)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|ok|true|

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|true|none|none|
|ok|[defs_ok_false](#schemadefs_ok_false)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|error|feature_not_enabled|
|error|channel_not_found|
|error|channel_type_not_supported|
|error|default_org_wide_channel|
|error|restricted_action|
|error|user_must_be_admin|
|error|failed_for_some_users|
|ok|false|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
slackAuth ( Scopes: admin.conversations:write )
</aside>

## admin_conversations_rename

<a id="opIdadmin_conversations_rename"></a>

> Code samples

```bash
curl https://example.com/admin.conversations.rename \
  -X POST \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'token: string' \
  -d 'channel_id=string&name=string'
```

`POST /admin.conversations.rename`

Rename a public or private channel.

<a href="https://api.slack.com/methods/admin.conversations.rename">API method documentation</a>

> Body parameter

```yaml
channel_id: string
name: string
```

<h3 id="adminconversationsrename-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|token|header|string|true|Authentication token. Requires scope: `admin.conversations:write`|
|body|body|object|true|none|
|» channel_id|body|string|true|The channel to rename.|
|» name|body|string|true|none|

> Example responses

> 200 Response

```json
{
  "ok": true
}
```

> default Response

```json
{
  "error": "invalid_auth",
  "ok": false
}
```

<h3 id="adminconversationsrename-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Typical success response|Inline|
|default|Default|Typical error response|Inline|

<h3 id="adminconversationsrename-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|[defs_ok_true](#schemadefs_ok_true)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|ok|true|

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|true|none|none|
|ok|[defs_ok_false](#schemadefs_ok_false)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|error|feature_not_enabled|
|error|channel_not_found|
|error|channel_type_not_supported|
|error|restricted_action|
|error|could_not_rename_channel|
|error|default_org_wide_channel|
|error|name_taken|
|ok|false|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
slackAuth ( Scopes: admin.conversations:write )
</aside>

## admin_conversations_search

<a id="opIdadmin_conversations_search"></a>

> Code samples

```bash
curl https://example.com/admin.conversations.search \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'token: string'
```

`GET /admin.conversations.search`

Search for public or private channels in an Enterprise organization.

<a href="https://api.slack.com/methods/admin.conversations.search">API method documentation</a>

<h3 id="adminconversationssearch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|token|header|string|true|Authentication token. Requires scope: `admin.conversations:read`|
|team_ids|query|string|false|Comma separated string of team IDs, signifying the workspaces to search through.|
|query|query|string|false|Name of the the channel to query by.|
|limit|query|integer|false|Maximum number of items to be returned. Must be between 1 - 20 both inclusive. Default is 10.|
|cursor|query|string|false|Set `cursor` to `next_cursor` returned by the previous call to list items in the next page.|
|search_channel_types|query|string|false|The type of channel to include or exclude in the search. For example `private` will search private channels, while `private_exclude` will exclude them. For a full list of types, check the [Types section](#types).|
|sort|query|string|false|Possible values are `relevant` (search ranking based on what we think is closest), `name` (alphabetical), `member_count` (number of users in the channel), and `created` (date channel was created). You can optionally pair this with the `sort_dir` arg to change how it is sorted |
|sort_dir|query|string|false|Sort direction. Possible values are `asc` for ascending order like (1, 2, 3) or (a, b, c), and `desc` for descending order like (3, 2, 1) or (c, b, a)|

> Example responses

> 200 Response

```json
{
  "channels": [
    {
      "created": 1449252889,
      "creator": "U012A3CDE",
      "id": "C012AB3CD",
      "is_archived": false,
      "is_channel": true,
      "is_ext_shared": false,
      "is_general": true,
      "is_group": false,
      "is_im": false,
      "is_member": true,
      "is_mpim": false,
      "is_org_shared": false,
      "is_pending_ext_shared": false,
      "is_private": false,
      "is_shared": false,
      "name": "general",
      "name_normalized": "general",
      "num_members": 4,
      "pending_shared": [],
      "previous_names": [],
      "purpose": {
        "creator": "",
        "last_set": 0,
        "value": "This channel is for team-wide communication and announcements. All team members are in this channel."
      },
      "topic": {
        "creator": "",
        "last_set": 0,
        "value": "Company-wide announcements and work-based matters"
      },
      "unlinked": 0
    }
  ],
  "ok": true,
  "response_metadata": {
    "next_cursor": "dGVhbTpDMDYxRkE1UEI="
  }
}
```

> default Response

```json
{
  "error": "not_an_enterprise",
  "ok": false
}
```

<h3 id="adminconversationssearch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Typical success response|Inline|
|default|Default|Typical error response|Inline|

<h3 id="adminconversationssearch-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|channels|[[objs_channel](#schemaobjs_channel)]|true|none|none|
|next_cursor|string|true|none|none|

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|true|none|none|
|ok|[defs_ok_false](#schemadefs_ok_false)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|error|feature_not_enabled|
|error|not_an_admin|
|error|not_an_enterprise|
|error|team_not_found|
|error|not_allowed|
|error|invalid_auth|
|error|invalid_cursor|
|error|invalid_search_channel_type|
|error|invalid_sort|
|error|invalid_sort_dir|
|ok|false|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
slackAuth ( Scopes: admin.conversations:read )
</aside>

## admin_conversations_setConversationPrefs

<a id="opIdadmin_conversations_setConversationPrefs"></a>

> Code samples

```bash
curl https://example.com/admin.conversations.setConversationPrefs \
  -X POST \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'token: string' \
  -d 'channel_id=string&prefs=string'
```

`POST /admin.conversations.setConversationPrefs`

Set the posting permissions for a public or private channel.

<a href="https://api.slack.com/methods/admin.conversations.setConversationPrefs">API method documentation</a>

> Body parameter

```yaml
channel_id: string
prefs: string
```

<h3 id="adminconversationssetconversationprefs-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|token|header|string|true|Authentication token. Requires scope: `admin.conversations:write`|
|body|body|object|true|none|
|» channel_id|body|string|true|The channel to set the prefs for|
|» prefs|body|string|true|The prefs for this channel in a stringified JSON format.|

> Example responses

> 200 Response

```json
{
  "ok": true
}
```

> default Response

```json
{
  "error": "invalid_auth",
  "ok": false
}
```

<h3 id="adminconversationssetconversationprefs-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Typical success response|Inline|
|default|Default|Typical error response|Inline|

<h3 id="adminconversationssetconversationprefs-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|[defs_ok_true](#schemadefs_ok_true)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|ok|true|

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|true|none|none|
|ok|[defs_ok_false](#schemadefs_ok_false)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|error|feature_not_enabled|
|error|not_an_admin|
|error|channel_not_found|
|error|channel_type_not_supported|
|error|restricted_action|
|error|missing_scope|
|error|could_not_set_channel_pref|
|error|default_org_wide_channel|
|ok|false|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
slackAuth ( Scopes: admin.conversations:write )
</aside>

## admin_conversations_setTeams

<a id="opIdadmin_conversations_setTeams"></a>

> Code samples

```bash
curl https://example.com/admin.conversations.setTeams \
  -X POST \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'token: string' \
  -d 'channel_id=string&org_channel=true&target_team_ids=string&team_id=string'
```

`POST /admin.conversations.setTeams`

Set the workspaces in an Enterprise grid org that connect to a public or private channel.

<a href="https://api.slack.com/methods/admin.conversations.setTeams">API method documentation</a>

> Body parameter

```yaml
channel_id: string
org_channel: true
target_team_ids: string
team_id: string
```

<h3 id="adminconversationssetteams-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|token|header|string|true|Authentication token. Requires scope: `admin.conversations:write`|
|body|body|object|true|none|
|» channel_id|body|string|true|The encoded `channel_id` to add or remove to workspaces.|
|» org_channel|body|boolean|false|True if channel has to be converted to an org channel|
|» target_team_ids|body|string|false|A comma-separated list of workspaces to which the channel should be shared. Not required if the channel is being shared org-wide.|
|» team_id|body|string|false|The workspace to which the channel belongs. Omit this argument if the channel is a cross-workspace shared channel.|

> Example responses

> 200 Response

```json
{
  "ok": true
}
```

> default Response

```json
{
  "error": "invalid_auth",
  "ok": false
}
```

<h3 id="adminconversationssetteams-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Typical success response|Inline|
|default|Default|Typical error response|Inline|

<h3 id="adminconversationssetteams-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|[defs_ok_true](#schemadefs_ok_true)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|ok|true|

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|[defs_ok_false](#schemadefs_ok_false)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|ok|false|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
slackAuth ( Scopes: admin.conversations:write )
</aside>

## admin_conversations_unarchive

<a id="opIdadmin_conversations_unarchive"></a>

> Code samples

```bash
curl https://example.com/admin.conversations.unarchive \
  -X POST \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'token: string' \
  -d 'channel_id=string'
```

`POST /admin.conversations.unarchive`

Unarchive a public or private channel.

<a href="https://api.slack.com/methods/admin.conversations.unarchive">API method documentation</a>

> Body parameter

```yaml
channel_id: string
```

<h3 id="adminconversationsunarchive-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|token|header|string|true|Authentication token. Requires scope: `admin.conversations:write`|
|body|body|object|true|none|
|» channel_id|body|string|true|The channel to unarchive.|

> Example responses

> 200 Response

```json
{
  "ok": true
}
```

> default Response

```json
{
  "error": "invalid_auth",
  "ok": false
}
```

<h3 id="adminconversationsunarchive-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Typical success response|Inline|
|default|Default|Typical error response|Inline|

<h3 id="adminconversationsunarchive-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|[defs_ok_true](#schemadefs_ok_true)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|ok|true|

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|true|none|none|
|ok|[defs_ok_false](#schemadefs_ok_false)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|error|feature_not_enabled|
|error|channel_not_found|
|error|channel_not_archived|
|error|channel_type_not_supported|
|error|restricted_action|
|error|could_not_unarchive_channel|
|error|default_org_wide_channel|
|error|missing_scope|
|ok|false|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
slackAuth ( Scopes: admin.conversations:write )
</aside>

<h1 id="slack-web-api-adminconversationsekm">admin.conversations.ekm</h1>

## admin_conversations_ekm_listOriginalConnectedChannelInfo

<a id="opIdadmin_conversations_ekm_listOriginalConnectedChannelInfo"></a>

> Code samples

```bash
curl 'https://example.com/admin.conversations.ekm.listOriginalConnectedChannelInfo?token=string' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /admin.conversations.ekm.listOriginalConnectedChannelInfo`

List all disconnected channels—i.e., channels that were once connected to other workspaces and then disconnected—and the corresponding original channel IDs for key revocation with EKM.

<a href="https://api.slack.com/methods/admin.conversations.ekm.listOriginalConnectedChannelInfo">API method documentation</a>

<h3 id="adminconversationsekmlistoriginalconnectedchannelinfo-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|token|query|string|true|Authentication token. Requires scope: `admin.conversations:read`|
|channel_ids|query|string|false|A comma-separated list of channels to filter to.|
|team_ids|query|string|false|A comma-separated list of the workspaces to which the channels you would like returned belong.|
|limit|query|integer|false|The maximum number of items to return. Must be between 1 - 1000 both inclusive.|
|cursor|query|string|false|Set `cursor` to `next_cursor` returned by the previous call to list items in the next page.|

> Example responses

> 200 Response

```json
{
  "channels": [
    {
      "id": "string",
      "internal_team_ids": "array",
      "original_connected_channel_id": "string",
      "original_connected_host_id": "string"
    }
  ],
  "ok": true
}
```

> default Response

```json
{
  "error": "invalid_auth",
  "ok": false
}
```

<h3 id="adminconversationsekmlistoriginalconnectedchannelinfo-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Typical success response|Inline|
|default|Default|Typical error response|Inline|

<h3 id="adminconversationsekmlistoriginalconnectedchannelinfo-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|[defs_ok_true](#schemadefs_ok_true)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|ok|true|

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|[defs_ok_false](#schemadefs_ok_false)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|ok|false|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
slackAuth ( Scopes: admin.conversations:read )
</aside>

<h1 id="slack-web-api-adminconversationsrestrictaccess">admin.conversations.restrictAccess</h1>

## admin_conversations_restrictAccess_addGroup

<a id="opIdadmin_conversations_restrictAccess_addGroup"></a>

> Code samples

```bash
curl https://example.com/admin.conversations.restrictAccess.addGroup \
  -X POST \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d 'channel_id=string&group_id=string&team_id=string&token=string'
```

`POST /admin.conversations.restrictAccess.addGroup`

Add an allowlist of IDP groups for accessing a channel

<a href="https://api.slack.com/methods/admin.conversations.restrictAccess.addGroup">API method documentation</a>

> Body parameter

```yaml
channel_id: string
group_id: string
team_id: string
token: string
```

<h3 id="adminconversationsrestrictaccessaddgroup-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» channel_id|body|string|true|The channel to link this group to.|
|» group_id|body|string|true|The [IDP Group](https://slack.com/help/articles/115001435788-Connect-identity-provider-groups-to-your-Enterprise-Grid-org) ID to be an allowlist for the private channel.|
|» team_id|body|string|false|The workspace where the channel exists. This argument is required for channels only tied to one workspace, and optional for channels that are shared across an organization.|
|» token|body|string|true|Authentication token. Requires scope: `admin.conversations:write`|

> Example responses

> 200 Response

```json
{
  "ok": true
}
```

> default Response

```json
{
  "error": "invalid_auth",
  "ok": false
}
```

<h3 id="adminconversationsrestrictaccessaddgroup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Typical success response|Inline|
|default|Default|Typical error response|Inline|

<h3 id="adminconversationsrestrictaccessaddgroup-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|[defs_ok_true](#schemadefs_ok_true)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|ok|true|

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|[defs_ok_false](#schemadefs_ok_false)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|ok|false|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
slackAuth ( Scopes: admin.conversations:write )
</aside>

## admin_conversations_restrictAccess_listGroups

<a id="opIdadmin_conversations_restrictAccess_listGroups"></a>

> Code samples

```bash
curl 'https://example.com/admin.conversations.restrictAccess.listGroups?token=string&channel_id=string' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /admin.conversations.restrictAccess.listGroups`

List all IDP Groups linked to a channel

<a href="https://api.slack.com/methods/admin.conversations.restrictAccess.listGroups">API method documentation</a>

<h3 id="adminconversationsrestrictaccesslistgroups-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|token|query|string|true|Authentication token. Requires scope: `admin.conversations:read`|
|channel_id|query|string|true|none|
|team_id|query|string|false|The workspace where the channel exists. This argument is required for channels only tied to one workspace, and optional for channels that are shared across an organization.|

> Example responses

> 200 Response

```json
{
  "group_ids": [
    "YOUR_GROUP_ID"
  ],
  "ok": true
}
```

> default Response

```json
{
  "error": "invalid_auth",
  "ok": false
}
```

<h3 id="adminconversationsrestrictaccesslistgroups-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Typical success response|Inline|
|default|Default|Typical error response|Inline|

<h3 id="adminconversationsrestrictaccesslistgroups-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|[defs_ok_true](#schemadefs_ok_true)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|ok|true|

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|[defs_ok_false](#schemadefs_ok_false)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|ok|false|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
slackAuth ( Scopes: admin.conversations:read )
</aside>

## admin_conversations_restrictAccess_removeGroup

<a id="opIdadmin_conversations_restrictAccess_removeGroup"></a>

> Code samples

```bash
curl https://example.com/admin.conversations.restrictAccess.removeGroup \
  -X POST \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d 'channel_id=string&group_id=string&team_id=string&token=string'
```

`POST /admin.conversations.restrictAccess.removeGroup`

Remove a linked IDP group linked from a private channel

<a href="https://api.slack.com/methods/admin.conversations.restrictAccess.removeGroup">API method documentation</a>

> Body parameter

```yaml
channel_id: string
group_id: string
team_id: string
token: string
```

<h3 id="adminconversationsrestrictaccessremovegroup-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» channel_id|body|string|true|The channel to remove the linked group from.|
|» group_id|body|string|true|The [IDP Group](https://slack.com/help/articles/115001435788-Connect-identity-provider-groups-to-your-Enterprise-Grid-org) ID to remove from the private channel.|
|» team_id|body|string|true|The workspace where the channel exists. This argument is required for channels only tied to one workspace, and optional for channels that are shared across an organization.|
|» token|body|string|true|Authentication token. Requires scope: `admin.conversations:write`|

> Example responses

> 200 Response

```json
{
  "ok": true
}
```

> default Response

```json
{
  "error": "invalid_auth",
  "ok": false
}
```

<h3 id="adminconversationsrestrictaccessremovegroup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Typical success response|Inline|
|default|Default|Typical error response|Inline|

<h3 id="adminconversationsrestrictaccessremovegroup-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|[defs_ok_true](#schemadefs_ok_true)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|ok|true|

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|[defs_ok_false](#schemadefs_ok_false)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|ok|false|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
slackAuth ( Scopes: admin.conversations:write )
</aside>

<h1 id="slack-web-api-adminemoji">admin.emoji</h1>

## admin_emoji_add

<a id="opIdadmin_emoji_add"></a>

> Code samples

```bash
curl https://example.com/admin.emoji.add \
  -X POST \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d 'name=string&token=string&url=string'
```

`POST /admin.emoji.add`

Add an emoji.

<a href="https://api.slack.com/methods/admin.emoji.add">API method documentation</a>

> Body parameter

```yaml
name: string
token: string
url: string
```

<h3 id="adminemojiadd-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» name|body|string|true|The name of the emoji to be removed. Colons (`:myemoji:`) around the value are not required, although they may be included.|
|» token|body|string|true|Authentication token. Requires scope: `admin.teams:write`|
|» url|body|string|true|The URL of a file to use as an image for the emoji. Square images under 128KB and with transparent backgrounds work best.|

> Example responses

> 200 Response

```json
{
  "ok": true
}
```

> default Response

```json
{
  "error": "invalid_auth",
  "ok": false
}
```

<h3 id="adminemojiadd-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Typical success response|Inline|
|default|Default|Typical error response|Inline|

<h3 id="adminemojiadd-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|[defs_ok_true](#schemadefs_ok_true)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|ok|true|

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|[defs_ok_false](#schemadefs_ok_false)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|ok|false|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
slackAuth ( Scopes: admin.teams:write )
</aside>

## admin_emoji_addAlias

<a id="opIdadmin_emoji_addAlias"></a>

> Code samples

```bash
curl https://example.com/admin.emoji.addAlias \
  -X POST \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d 'alias_for=string&name=string&token=string'
```

`POST /admin.emoji.addAlias`

Add an emoji alias.

<a href="https://api.slack.com/methods/admin.emoji.addAlias">API method documentation</a>

> Body parameter

```yaml
alias_for: string
name: string
token: string
```

<h3 id="adminemojiaddalias-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» alias_for|body|string|true|The alias of the emoji.|
|» name|body|string|true|The name of the emoji to be aliased. Colons (`:myemoji:`) around the value are not required, although they may be included.|
|» token|body|string|true|Authentication token. Requires scope: `admin.teams:write`|

> Example responses

> 200 Response

```json
{
  "ok": true
}
```

> default Response

```json
{
  "error": "invalid_auth",
  "ok": false
}
```

<h3 id="adminemojiaddalias-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Typical success response|Inline|
|default|Default|Typical error response|Inline|

<h3 id="adminemojiaddalias-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|[defs_ok_true](#schemadefs_ok_true)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|ok|true|

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|[defs_ok_false](#schemadefs_ok_false)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|ok|false|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
slackAuth ( Scopes: admin.teams:write )
</aside>

## admin_emoji_list

<a id="opIdadmin_emoji_list"></a>

> Code samples

```bash
curl 'https://example.com/admin.emoji.list?token=string' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /admin.emoji.list`

List emoji for an Enterprise Grid organization.

<a href="https://api.slack.com/methods/admin.emoji.list">API method documentation</a>

<h3 id="adminemojilist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|token|query|string|true|Authentication token. Requires scope: `admin.teams:read`|
|cursor|query|string|false|Set `cursor` to `next_cursor` returned by the previous call to list items in the next page|
|limit|query|integer|false|The maximum number of items to return. Must be between 1 - 1000 both inclusive.|

> Example responses

> 200 Response

```json
{
  "cache_ts": "1575283387.000000",
  "categories": [
    {
      "emoji_names": [
        "grinning",
        "grin",
        "joy",
        "etc etc ..."
      ],
      "name": "Smileys & People"
    }
  ],
  "categories_version": "5",
  "emoji": {
    "black_square": "alias:black_large_square",
    "bowtie": "https://emoji.slack-edge.com/T9TK3CUKW/bowtie/f3ec6f2bb0.png",
    "cubimal_chick": "https://emoji.slack-edge.com/T9TK3CUKW/cubimal_chick/85961c43d7.png",
    "dusty_stick": "https://emoji.slack-edge.com/T9TK3CUKW/dusty_stick/6177a62312.png",
    "glitch_crab": "https://emoji.slack-edge.com/T9TK3CUKW/glitch_crab/db049f1f9c.png",
    "piggy": "https://emoji.slack-edge.com/T9TK3CUKW/piggy/b7762ee8cd.png",
    "pride": "https://emoji.slack-edge.com/T9TK3CUKW/pride/56b1bd3388.png",
    "shipit": "alias:squirrel",
    "simple_smile": {
      "apple": "https://a.slack-edge.com/80588/img/emoji_2017_12_06/apple/simple_smile.png",
      "google": "https://a.slack-edge.com/80588/img/emoji_2017_12_06/google/simple_smile.png"
    },
    "slack": "https://emoji.slack-edge.com/T9TK3CUKW/slack/7d462d2443.png",
    "slack_call": "https://emoji.slack-edge.com/T9TK3CUKW/slack_call/b81fffd6dd.png",
    "squirrel": "https://emoji.slack-edge.com/T9TK3CUKW/squirrel/465f40c0e0.png",
    "thumbsup_all": "https://emoji.slack-edge.com/T9TK3CUKW/thumbsup_all/50096a1020.gif",
    "white_square": "alias:white_large_square"
  },
  "ok": true
}
```

> default Response

```json
{
  "error": "invalid_auth",
  "ok": false
}
```

<h3 id="adminemojilist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Typical success response|Inline|
|default|Default|Typical error response|Inline|

<h3 id="adminemojilist-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|[defs_ok_true](#schemadefs_ok_true)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|ok|true|

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|[defs_ok_false](#schemadefs_ok_false)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|ok|false|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
slackAuth ( Scopes: admin.teams:read )
</aside>

## admin_emoji_remove

<a id="opIdadmin_emoji_remove"></a>

> Code samples

```bash
curl https://example.com/admin.emoji.remove \
  -X POST \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d 'name=string&token=string'
```

`POST /admin.emoji.remove`

Remove an emoji across an Enterprise Grid organization

<a href="https://api.slack.com/methods/admin.emoji.remove">API method documentation</a>

> Body parameter

```yaml
name: string
token: string
```

<h3 id="adminemojiremove-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» name|body|string|true|The name of the emoji to be removed. Colons (`:myemoji:`) around the value are not required, although they may be included.|
|» token|body|string|true|Authentication token. Requires scope: `admin.teams:write`|

> Example responses

> 200 Response

```json
{
  "ok": true
}
```

> default Response

```json
{
  "error": "invalid_auth",
  "ok": false
}
```

<h3 id="adminemojiremove-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Typical success response|Inline|
|default|Default|Typical error response|Inline|

<h3 id="adminemojiremove-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|[defs_ok_true](#schemadefs_ok_true)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|ok|true|

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|[defs_ok_false](#schemadefs_ok_false)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|ok|false|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
slackAuth ( Scopes: admin.teams:write )
</aside>

## admin_emoji_rename

<a id="opIdadmin_emoji_rename"></a>

> Code samples

```bash
curl https://example.com/admin.emoji.rename \
  -X POST \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d 'name=string&new_name=string&token=string'
```

`POST /admin.emoji.rename`

Rename an emoji.

<a href="https://api.slack.com/methods/admin.emoji.rename">API method documentation</a>

> Body parameter

```yaml
name: string
new_name: string
token: string
```

<h3 id="adminemojirename-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» name|body|string|true|The name of the emoji to be renamed. Colons (`:myemoji:`) around the value are not required, although they may be included.|
|» new_name|body|string|true|The new name of the emoji.|
|» token|body|string|true|Authentication token. Requires scope: `admin.teams:write`|

> Example responses

> 200 Response

```json
{
  "ok": true
}
```

> default Response

```json
{
  "error": "invalid_auth",
  "ok": false
}
```

<h3 id="adminemojirename-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Typical success response|Inline|
|default|Default|Typical error response|Inline|

<h3 id="adminemojirename-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|[defs_ok_true](#schemadefs_ok_true)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|ok|true|

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|[defs_ok_false](#schemadefs_ok_false)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|ok|false|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
slackAuth ( Scopes: admin.teams:write )
</aside>

<h1 id="slack-web-api-admininviterequests">admin.inviteRequests</h1>

## admin_inviteRequests_approve

<a id="opIdadmin_inviteRequests_approve"></a>

> Code samples

```bash
curl https://example.com/admin.inviteRequests.approve \
  -X POST \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'token: string' \
  -d 'invite_request_id=string&team_id=string'
```

`POST /admin.inviteRequests.approve`

Approve a workspace invite request.

<a href="https://api.slack.com/methods/admin.inviteRequests.approve">API method documentation</a>

> Body parameter

```yaml
invite_request_id: string
team_id: string
```

<h3 id="admininviterequestsapprove-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|token|header|string|true|Authentication token. Requires scope: `admin.invites:write`|
|body|body|object|false|none|
|» invite_request_id|body|string|true|ID of the request to invite.|
|» team_id|body|string|false|ID for the workspace where the invite request was made.|

> Example responses

> 200 Response

```json
{
  "ok": true
}
```

> default Response

```json
{
  "error": "invalid_auth",
  "ok": false
}
```

<h3 id="admininviterequestsapprove-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Typical success response|Inline|
|default|Default|Typical error response|Inline|

<h3 id="admininviterequestsapprove-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|[defs_ok_true](#schemadefs_ok_true)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|ok|true|

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|[defs_ok_false](#schemadefs_ok_false)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|ok|false|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
slackAuth ( Scopes: admin.invites:write )
</aside>

## admin_inviteRequests_deny

<a id="opIdadmin_inviteRequests_deny"></a>

> Code samples

```bash
curl https://example.com/admin.inviteRequests.deny \
  -X POST \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'token: string' \
  -d 'invite_request_id=string&team_id=string'
```

`POST /admin.inviteRequests.deny`

Deny a workspace invite request.

<a href="https://api.slack.com/methods/admin.inviteRequests.deny">API method documentation</a>

> Body parameter

```yaml
invite_request_id: string
team_id: string
```

<h3 id="admininviterequestsdeny-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|token|header|string|true|Authentication token. Requires scope: `admin.invites:write`|
|body|body|object|false|none|
|» invite_request_id|body|string|true|ID of the request to invite.|
|» team_id|body|string|false|ID for the workspace where the invite request was made.|

> Example responses

> 200 Response

```json
{
  "ok": true
}
```

> default Response

```json
{
  "error": "invalid_auth",
  "ok": false
}
```

<h3 id="admininviterequestsdeny-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Typical success response|Inline|
|default|Default|Typical error response|Inline|

<h3 id="admininviterequestsdeny-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|[defs_ok_true](#schemadefs_ok_true)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|ok|true|

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|[defs_ok_false](#schemadefs_ok_false)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|ok|false|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
slackAuth ( Scopes: admin.invites:write )
</aside>

## admin_inviteRequests_list

<a id="opIdadmin_inviteRequests_list"></a>

> Code samples

```bash
curl https://example.com/admin.inviteRequests.list \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'token: string'
```

`GET /admin.inviteRequests.list`

List all pending workspace invite requests.

<a href="https://api.slack.com/methods/admin.inviteRequests.list">API method documentation</a>

<h3 id="admininviterequestslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|token|header|string|true|Authentication token. Requires scope: `admin.invites:read`|
|team_id|query|string|false|ID for the workspace where the invite requests were made.|
|cursor|query|string|false|Value of the `next_cursor` field sent as part of the previous API response|
|limit|query|integer|false|The number of results that will be returned by the API on each invocation. Must be between 1 - 1000, both inclusive|

> Example responses

> 200 Response

```json
{
  "ok": true
}
```

> default Response

```json
{
  "error": "invalid_auth",
  "ok": false
}
```

<h3 id="admininviterequestslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Typical success response|Inline|
|default|Default|Typical error response|Inline|

<h3 id="admininviterequestslist-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|[defs_ok_true](#schemadefs_ok_true)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|ok|true|

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|[defs_ok_false](#schemadefs_ok_false)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|ok|false|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
slackAuth ( Scopes: admin.invites:read )
</aside>

<h1 id="slack-web-api-admininviterequestsapproved">admin.inviteRequests.approved</h1>

## admin_inviteRequests_approved_list

<a id="opIdadmin_inviteRequests_approved_list"></a>

> Code samples

```bash
curl https://example.com/admin.inviteRequests.approved.list \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'token: string'
```

`GET /admin.inviteRequests.approved.list`

List all approved workspace invite requests.

<a href="https://api.slack.com/methods/admin.inviteRequests.approved.list">API method documentation</a>

<h3 id="admininviterequestsapprovedlist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|token|header|string|true|Authentication token. Requires scope: `admin.invites:read`|
|team_id|query|string|false|ID for the workspace where the invite requests were made.|
|cursor|query|string|false|Value of the `next_cursor` field sent as part of the previous API response|
|limit|query|integer|false|The number of results that will be returned by the API on each invocation. Must be between 1 - 1000, both inclusive|

> Example responses

> 200 Response

```json
{
  "ok": true
}
```

> default Response

```json
{
  "error": "invalid_auth",
  "ok": false
}
```

<h3 id="admininviterequestsapprovedlist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Typical success response|Inline|
|default|Default|Typical error response|Inline|

<h3 id="admininviterequestsapprovedlist-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|[defs_ok_true](#schemadefs_ok_true)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|ok|true|

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|[defs_ok_false](#schemadefs_ok_false)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|ok|false|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
slackAuth ( Scopes: admin.invites:read )
</aside>

<h1 id="slack-web-api-admininviterequestsdenied">admin.inviteRequests.denied</h1>

## admin_inviteRequests_denied_list

<a id="opIdadmin_inviteRequests_denied_list"></a>

> Code samples

```bash
curl https://example.com/admin.inviteRequests.denied.list \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'token: string'
```

`GET /admin.inviteRequests.denied.list`

List all denied workspace invite requests.

<a href="https://api.slack.com/methods/admin.inviteRequests.denied.list">API method documentation</a>

<h3 id="admininviterequestsdeniedlist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|token|header|string|true|Authentication token. Requires scope: `admin.invites:read`|
|team_id|query|string|false|ID for the workspace where the invite requests were made.|
|cursor|query|string|false|Value of the `next_cursor` field sent as part of the previous api response|
|limit|query|integer|false|The number of results that will be returned by the API on each invocation. Must be between 1 - 1000 both inclusive|

> Example responses

> 200 Response

```json
{
  "ok": true
}
```

> default Response

```json
{
  "error": "invalid_auth",
  "ok": false
}
```

<h3 id="admininviterequestsdeniedlist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Typical success response|Inline|
|default|Default|Typical error response|Inline|

<h3 id="admininviterequestsdeniedlist-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|[defs_ok_true](#schemadefs_ok_true)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|ok|true|

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|[defs_ok_false](#schemadefs_ok_false)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|ok|false|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
slackAuth ( Scopes: admin.invites:read )
</aside>

<h1 id="slack-web-api-adminteamsadmins">admin.teams.admins</h1>

## admin_teams_admins_list

<a id="opIdadmin_teams_admins_list"></a>

> Code samples

```bash
curl 'https://example.com/admin.teams.admins.list?token=string&team_id=string' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /admin.teams.admins.list`

List all of the admins on a given workspace.

<a href="https://api.slack.com/methods/admin.teams.admins.list">API method documentation</a>

<h3 id="adminteamsadminslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|token|query|string|true|Authentication token. Requires scope: `admin.teams:read`|
|limit|query|integer|false|The maximum number of items to return.|
|cursor|query|string|false|Set `cursor` to `next_cursor` returned by the previous call to list items in the next page.|
|team_id|query|string|true|none|

> Example responses

> 200 Response

```json
{
  "admin_ids": [
    "U1234"
  ],
  "ok": true
}
```

> default Response

```json
{
  "error": "invalid_auth",
  "ok": false
}
```

<h3 id="adminteamsadminslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Typical success response|Inline|
|default|Default|Typical error response|Inline|

<h3 id="adminteamsadminslist-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|[defs_ok_true](#schemadefs_ok_true)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|ok|true|

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|[defs_ok_false](#schemadefs_ok_false)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|ok|false|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
slackAuth ( Scopes: admin.teams:read )
</aside>

<h1 id="slack-web-api-adminteams">admin.teams</h1>

## admin_teams_create

<a id="opIdadmin_teams_create"></a>

> Code samples

```bash
curl https://example.com/admin.teams.create \
  -X POST \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'token: string' \
  -d 'team_description=string&team_discoverability=string&team_domain=string&team_name=string'
```

`POST /admin.teams.create`

Create an Enterprise team.

<a href="https://api.slack.com/methods/admin.teams.create">API method documentation</a>

> Body parameter

```yaml
team_description: string
team_discoverability: string
team_domain: string
team_name: string
```

<h3 id="adminteamscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|token|header|string|true|Authentication token. Requires scope: `admin.teams:write`|
|body|body|object|true|none|
|» team_description|body|string|false|Description for the team.|
|» team_discoverability|body|string|false|Who can join the team. A team's discoverability can be `open`, `closed`, `invite_only`, or `unlisted`.|
|» team_domain|body|string|true|Team domain (for example, slacksoftballteam).|
|» team_name|body|string|true|Team name (for example, Slack Softball Team).|

> Example responses

> 200 Response

```json
{
  "ok": true,
  "team": "T12345"
}
```

> default Response

```json
{
  "error": "invalid_auth",
  "ok": false
}
```

<h3 id="adminteamscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Typical success response|Inline|
|default|Default|Typical error response|Inline|

<h3 id="adminteamscreate-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|[defs_ok_true](#schemadefs_ok_true)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|ok|true|

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|[defs_ok_false](#schemadefs_ok_false)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|ok|false|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
slackAuth ( Scopes: admin.teams:write )
</aside>

## admin_teams_list

<a id="opIdadmin_teams_list"></a>

> Code samples

```bash
curl https://example.com/admin.teams.list \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'token: string'
```

`GET /admin.teams.list`

List all teams on an Enterprise organization

<a href="https://api.slack.com/methods/admin.teams.list">API method documentation</a>

<h3 id="adminteamslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|token|header|string|true|Authentication token. Requires scope: `admin.teams:read`|
|limit|query|integer|false|The maximum number of items to return. Must be between 1 - 100 both inclusive.|
|cursor|query|string|false|Set `cursor` to `next_cursor` returned by the previous call to list items in the next page.|

> Example responses

> 200 Response

```json
{
  "ok": true,
  "teams": [
    {
      "discoverability": "hidden",
      "id": "T1234",
      "name": "My Team",
      "primary_owner": {
        "email": "bront@slack.com",
        "user_id": "W1234"
      },
      "team_url": "https://subarachnoid.slack.com/"
    }
  ]
}
```

> default Response

```json
{
  "error": "invalid_auth",
  "ok": false
}
```

<h3 id="adminteamslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Typical success response|Inline|
|default|Default|Typical error response|Inline|

<h3 id="adminteamslist-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|[defs_ok_true](#schemadefs_ok_true)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|ok|true|

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|[defs_ok_false](#schemadefs_ok_false)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|ok|false|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
slackAuth ( Scopes: admin.teams:read )
</aside>

<h1 id="slack-web-api-adminteamsowners">admin.teams.owners</h1>

## admin_teams_owners_list

<a id="opIdadmin_teams_owners_list"></a>

> Code samples

```bash
curl 'https://example.com/admin.teams.owners.list?token=string&team_id=string' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /admin.teams.owners.list`

List all of the owners on a given workspace.

<a href="https://api.slack.com/methods/admin.teams.owners.list">API method documentation</a>

<h3 id="adminteamsownerslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|token|query|string|true|Authentication token. Requires scope: `admin.teams:read`|
|team_id|query|string|true|none|
|limit|query|integer|false|The maximum number of items to return. Must be between 1 - 1000 both inclusive.|
|cursor|query|string|false|Set `cursor` to `next_cursor` returned by the previous call to list items in the next page.|

> Example responses

> 200 Response

```json
{
  "ok": true,
  "owner_ids": [
    "U1234"
  ]
}
```

> default Response

```json
{
  "error": "invalid_auth",
  "ok": false
}
```

<h3 id="adminteamsownerslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Typical success response|Inline|
|default|Default|Typical error response|Inline|

<h3 id="adminteamsownerslist-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|[defs_ok_true](#schemadefs_ok_true)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|ok|true|

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|[defs_ok_false](#schemadefs_ok_false)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|ok|false|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
slackAuth ( Scopes: admin.teams:read )
</aside>

<h1 id="slack-web-api-adminteamssettings">admin.teams.settings</h1>

## admin_teams_settings_info

<a id="opIdadmin_teams_settings_info"></a>

> Code samples

```bash
curl 'https://example.com/admin.teams.settings.info?team_id=string' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'token: string'
```

`GET /admin.teams.settings.info`

Fetch information about settings in a workspace

<a href="https://api.slack.com/methods/admin.teams.settings.info">API method documentation</a>

<h3 id="adminteamssettingsinfo-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|token|header|string|true|Authentication token. Requires scope: `admin.teams:read`|
|team_id|query|string|true|none|

> Example responses

> 200 Response

```json
{
  "ok": true,
  "team": {
    "default_channels": "array",
    "domain": "string",
    "email_domain": "string",
    "enterprise_id": "string",
    "enterprise_name": "string",
    "icon": "array",
    "id": "string",
    "name": "string"
  }
}
```

> default Response

```json
{
  "error": "invalid_auth",
  "ok": false
}
```

<h3 id="adminteamssettingsinfo-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Typical success response|Inline|
|default|Default|Typical error response|Inline|

<h3 id="adminteamssettingsinfo-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|[defs_ok_true](#schemadefs_ok_true)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|ok|true|

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|[defs_ok_false](#schemadefs_ok_false)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|ok|false|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
slackAuth ( Scopes: admin.teams:read )
</aside>

## admin_teams_settings_setDefaultChannels

<a id="opIdadmin_teams_settings_setDefaultChannels"></a>

> Code samples

```bash
curl https://example.com/admin.teams.settings.setDefaultChannels \
  -X POST \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d 'channel_ids=string&team_id=string&token=string'
```

`POST /admin.teams.settings.setDefaultChannels`

Set the default channels of a workspace.

<a href="https://api.slack.com/methods/admin.teams.settings.setDefaultChannels">API method documentation</a>

> Body parameter

```yaml
channel_ids: string
team_id: string
token: string
```

<h3 id="adminteamssettingssetdefaultchannels-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» channel_ids|body|string|true|An array of channel IDs.|
|» team_id|body|string|true|ID for the workspace to set the default channel for.|
|» token|body|string|true|Authentication token. Requires scope: `admin.teams:write`|

> Example responses

> 200 Response

```json
{
  "ok": true
}
```

> default Response

```json
{
  "error": "invalid_auth",
  "ok": false
}
```

<h3 id="adminteamssettingssetdefaultchannels-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Typical success response|Inline|
|default|Default|Typical error response|Inline|

<h3 id="adminteamssettingssetdefaultchannels-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|[defs_ok_true](#schemadefs_ok_true)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|ok|true|

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|[defs_ok_false](#schemadefs_ok_false)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|ok|false|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
slackAuth ( Scopes: admin.teams:write )
</aside>

## admin_teams_settings_setDescription

<a id="opIdadmin_teams_settings_setDescription"></a>

> Code samples

```bash
curl https://example.com/admin.teams.settings.setDescription \
  -X POST \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'token: string' \
  -d 'description=string&team_id=string'
```

`POST /admin.teams.settings.setDescription`

Set the description of a given workspace.

<a href="https://api.slack.com/methods/admin.teams.settings.setDescription">API method documentation</a>

> Body parameter

```yaml
description: string
team_id: string
```

<h3 id="adminteamssettingssetdescription-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|token|header|string|true|Authentication token. Requires scope: `admin.teams:write`|
|body|body|object|true|none|
|» description|body|string|true|The new description for the workspace.|
|» team_id|body|string|true|ID for the workspace to set the description for.|

> Example responses

> 200 Response

```json
{
  "ok": true
}
```

> default Response

```json
{
  "error": "invalid_auth",
  "ok": false
}
```

<h3 id="adminteamssettingssetdescription-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Typical success response|Inline|
|default|Default|Typical error response|Inline|

<h3 id="adminteamssettingssetdescription-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|[defs_ok_true](#schemadefs_ok_true)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|ok|true|

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|[defs_ok_false](#schemadefs_ok_false)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|ok|false|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
slackAuth ( Scopes: admin.teams:write )
</aside>

## admin_teams_settings_setDiscoverability

<a id="opIdadmin_teams_settings_setDiscoverability"></a>

> Code samples

```bash
curl https://example.com/admin.teams.settings.setDiscoverability \
  -X POST \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'token: string' \
  -d 'discoverability=string&team_id=string'
```

`POST /admin.teams.settings.setDiscoverability`

An API method that allows admins to set the discoverability of a given workspace

<a href="https://api.slack.com/methods/admin.teams.settings.setDiscoverability">API method documentation</a>

> Body parameter

```yaml
discoverability: string
team_id: string
```

<h3 id="adminteamssettingssetdiscoverability-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|token|header|string|true|Authentication token. Requires scope: `admin.teams:write`|
|body|body|object|true|none|
|» discoverability|body|string|true|This workspace's discovery setting. It must be set to one of `open`, `invite_only`, `closed`, or `unlisted`.|
|» team_id|body|string|true|The ID of the workspace to set discoverability on.|

> Example responses

> 200 Response

```json
{
  "ok": true
}
```

> default Response

```json
{
  "error": "invalid_auth",
  "ok": false
}
```

<h3 id="adminteamssettingssetdiscoverability-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Typical success response|Inline|
|default|Default|Typical error response|Inline|

<h3 id="adminteamssettingssetdiscoverability-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|[defs_ok_true](#schemadefs_ok_true)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|ok|true|

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|[defs_ok_false](#schemadefs_ok_false)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|ok|false|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
slackAuth ( Scopes: admin.teams:write )
</aside>

## admin_teams_settings_setIcon

<a id="opIdadmin_teams_settings_setIcon"></a>

> Code samples

```bash
curl https://example.com/admin.teams.settings.setIcon \
  -X POST \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d 'image_url=string&team_id=string&token=string'
```

`POST /admin.teams.settings.setIcon`

Sets the icon of a workspace.

<a href="https://api.slack.com/methods/admin.teams.settings.setIcon">API method documentation</a>

> Body parameter

```yaml
image_url: string
team_id: string
token: string
```

<h3 id="adminteamssettingsseticon-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» image_url|body|string|true|Image URL for the icon|
|» team_id|body|string|true|ID for the workspace to set the icon for.|
|» token|body|string|true|Authentication token. Requires scope: `admin.teams:write`|

> Example responses

> 200 Response

```json
{
  "ok": true
}
```

> default Response

```json
{
  "error": "invalid_auth",
  "ok": false
}
```

<h3 id="adminteamssettingsseticon-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Typical success response|Inline|
|default|Default|Typical error response|Inline|

<h3 id="adminteamssettingsseticon-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|[defs_ok_true](#schemadefs_ok_true)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|ok|true|

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|[defs_ok_false](#schemadefs_ok_false)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|ok|false|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
slackAuth ( Scopes: admin.teams:write )
</aside>

## admin_teams_settings_setName

<a id="opIdadmin_teams_settings_setName"></a>

> Code samples

```bash
curl https://example.com/admin.teams.settings.setName \
  -X POST \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'token: string' \
  -d 'name=string&team_id=string'
```

`POST /admin.teams.settings.setName`

Set the name of a given workspace.

<a href="https://api.slack.com/methods/admin.teams.settings.setName">API method documentation</a>

> Body parameter

```yaml
name: string
team_id: string
```

<h3 id="adminteamssettingssetname-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|token|header|string|true|Authentication token. Requires scope: `admin.teams:write`|
|body|body|object|true|none|
|» name|body|string|true|The new name of the workspace.|
|» team_id|body|string|true|ID for the workspace to set the name for.|

> Example responses

> 200 Response

```json
{
  "ok": true
}
```

> default Response

```json
{
  "error": "invalid_auth",
  "ok": false
}
```

<h3 id="adminteamssettingssetname-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Typical success response|Inline|
|default|Default|Typical error response|Inline|

<h3 id="adminteamssettingssetname-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|[defs_ok_true](#schemadefs_ok_true)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|ok|true|

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|[defs_ok_false](#schemadefs_ok_false)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|ok|false|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
slackAuth ( Scopes: admin.teams:write )
</aside>

<h1 id="slack-web-api-adminusergroups">admin.usergroups</h1>

## admin_usergroups_addChannels

<a id="opIdadmin_usergroups_addChannels"></a>

> Code samples

```bash
curl https://example.com/admin.usergroups.addChannels \
  -X POST \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'token: string' \
  -d 'channel_ids=string&team_id=string&usergroup_id=string'
```

`POST /admin.usergroups.addChannels`

Add one or more default channels to an IDP group.

<a href="https://api.slack.com/methods/admin.usergroups.addChannels">API method documentation</a>

> Body parameter

```yaml
channel_ids: string
team_id: string
usergroup_id: string
```

<h3 id="adminusergroupsaddchannels-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|token|header|string|true|Authentication token. Requires scope: `admin.usergroups:write`|
|body|body|object|true|none|
|» channel_ids|body|string|true|Comma separated string of channel IDs.|
|» team_id|body|string|false|The workspace to add default channels in.|
|» usergroup_id|body|string|true|ID of the IDP group to add default channels for.|

> Example responses

> 200 Response

```json
{
  "ok": true
}
```

> default Response

```json
{
  "error": "not_an_admin",
  "ok": false
}
```

<h3 id="adminusergroupsaddchannels-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Typical success response|Inline|
|default|Default|Typical error response if the token provided is not associated with an Org Admin or Owner|Inline|

<h3 id="adminusergroupsaddchannels-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|[defs_ok_true](#schemadefs_ok_true)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|ok|true|

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|[defs_ok_false](#schemadefs_ok_false)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|ok|false|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
slackAuth ( Scopes: admin.usergroups:write )
</aside>

## admin_usergroups_addTeams

<a id="opIdadmin_usergroups_addTeams"></a>

> Code samples

```bash
curl https://example.com/admin.usergroups.addTeams \
  -X POST \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'token: string' \
  -d 'auto_provision=true&team_ids=string&usergroup_id=string'
```

`POST /admin.usergroups.addTeams`

Associate one or more default workspaces with an organization-wide IDP group.

<a href="https://api.slack.com/methods/admin.usergroups.addTeams">API method documentation</a>

> Body parameter

```yaml
auto_provision: true
team_ids: string
usergroup_id: string
```

<h3 id="adminusergroupsaddteams-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|token|header|string|true|Authentication token. Requires scope: `admin.teams:write`|
|body|body|object|true|none|
|» auto_provision|body|boolean|false|When `true`, this method automatically creates new workspace accounts for the IDP group members.|
|» team_ids|body|string|true|A comma separated list of encoded team (workspace) IDs. Each workspace *MUST* belong to the organization associated with the token.|
|» usergroup_id|body|string|true|An encoded usergroup (IDP Group) ID.|

> Example responses

> 200 Response

```json
{
  "ok": true
}
```

> default Response

```json
{
  "error": "invalid_auth",
  "ok": false
}
```

<h3 id="adminusergroupsaddteams-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Typical success response|Inline|
|default|Default|Typical error response|Inline|

<h3 id="adminusergroupsaddteams-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|[defs_ok_true](#schemadefs_ok_true)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|ok|true|

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|[defs_ok_false](#schemadefs_ok_false)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|ok|false|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
slackAuth ( Scopes: admin.teams:write )
</aside>

## admin_usergroups_listChannels

<a id="opIdadmin_usergroups_listChannels"></a>

> Code samples

```bash
curl 'https://example.com/admin.usergroups.listChannels?usergroup_id=string' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'token: string'
```

`GET /admin.usergroups.listChannels`

List the channels linked to an org-level IDP group (user group).

<a href="https://api.slack.com/methods/admin.usergroups.listChannels">API method documentation</a>

<h3 id="adminusergroupslistchannels-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|token|header|string|true|Authentication token. Requires scope: `admin.usergroups:read`|
|usergroup_id|query|string|true|ID of the IDP group to list default channels for.|
|team_id|query|string|false|ID of the the workspace.|
|include_num_members|query|boolean|false|Flag to include or exclude the count of members per channel.|

> Example responses

> 200 Response

```json
{
  "channels": [
    {
      "id": "C024BE91L",
      "name": "fun",
      "num_members": 34,
      "team_id": "T024BE911"
    },
    {
      "id": "C024BE91K",
      "name": "more fun",
      "team_id": "T024BE912"
    },
    {
      "id": "C024BE91M",
      "is_redacted": true,
      "name": "public-channel",
      "num_members": 34,
      "team_id": "T024BE911"
    },
    {
      "id": "C024BE91N",
      "name": "some more fun",
      "team_id": "T024BE921"
    }
  ],
  "ok": true
}
```

> default Response

```json
{
  "error": "not_an_admin",
  "ok": false
}
```

<h3 id="adminusergroupslistchannels-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Typical success response|Inline|
|default|Default|Typical error response if the token provided is not associated with an Org Admin or Owner|Inline|

<h3 id="adminusergroupslistchannels-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|[defs_ok_true](#schemadefs_ok_true)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|ok|true|

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|[defs_ok_false](#schemadefs_ok_false)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|ok|false|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
slackAuth ( Scopes: admin.usergroups:read )
</aside>

## admin_usergroups_removeChannels

<a id="opIdadmin_usergroups_removeChannels"></a>

> Code samples

```bash
curl https://example.com/admin.usergroups.removeChannels \
  -X POST \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'token: string' \
  -d 'channel_ids=string&usergroup_id=string'
```

`POST /admin.usergroups.removeChannels`

Remove one or more default channels from an org-level IDP group (user group).

<a href="https://api.slack.com/methods/admin.usergroups.removeChannels">API method documentation</a>

> Body parameter

```yaml
channel_ids: string
usergroup_id: string
```

<h3 id="adminusergroupsremovechannels-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|token|header|string|true|Authentication token. Requires scope: `admin.usergroups:write`|
|body|body|object|true|none|
|» channel_ids|body|string|true|Comma-separated string of channel IDs|
|» usergroup_id|body|string|true|ID of the IDP Group|

> Example responses

> 200 Response

```json
{
  "ok": true
}
```

> default Response

```json
{
  "error": "not_an_admin",
  "ok": false
}
```

<h3 id="adminusergroupsremovechannels-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Typical success response|Inline|
|default|Default|Typical error response if the token provided is not associated with an Org Admin or Owner|Inline|

<h3 id="adminusergroupsremovechannels-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|[defs_ok_true](#schemadefs_ok_true)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|ok|true|

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|[defs_ok_false](#schemadefs_ok_false)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|ok|false|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
slackAuth ( Scopes: admin.usergroups:write )
</aside>

<h1 id="slack-web-api-adminusers">admin.users</h1>

## admin_users_assign

<a id="opIdadmin_users_assign"></a>

> Code samples

```bash
curl https://example.com/admin.users.assign \
  -X POST \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'token: string' \
  -d 'channel_ids=string&is_restricted=true&is_ultra_restricted=true&team_id=string&user_id=string'
```

`POST /admin.users.assign`

Add an Enterprise user to a workspace.

<a href="https://api.slack.com/methods/admin.users.assign">API method documentation</a>

> Body parameter

```yaml
channel_ids: string
is_restricted: true
is_ultra_restricted: true
team_id: string
user_id: string
```

<h3 id="adminusersassign-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|token|header|string|true|Authentication token. Requires scope: `admin.users:write`|
|body|body|object|true|none|
|» channel_ids|body|string|false|Comma separated values of channel IDs to add user in the new workspace.|
|» is_restricted|body|boolean|false|True if user should be added to the workspace as a guest.|
|» is_ultra_restricted|body|boolean|false|True if user should be added to the workspace as a single-channel guest.|
|» team_id|body|string|true|The ID (`T1234`) of the workspace.|
|» user_id|body|string|true|The ID of the user to add to the workspace.|

> Example responses

> 200 Response

```json
{
  "ok": true
}
```

> default Response

```json
{
  "error": "invalid_auth",
  "ok": false
}
```

<h3 id="adminusersassign-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Typical success response|Inline|
|default|Default|Typical error response|Inline|

<h3 id="adminusersassign-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|[defs_ok_true](#schemadefs_ok_true)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|ok|true|

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|[defs_ok_false](#schemadefs_ok_false)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|ok|false|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
slackAuth ( Scopes: admin.users:write )
</aside>

## admin_users_invite

<a id="opIdadmin_users_invite"></a>

> Code samples

```bash
curl https://example.com/admin.users.invite \
  -X POST \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'token: string' \
  -d 'channel_ids=string&custom_message=string&email=string&guest_expiration_ts=string&is_restricted=true&is_ultra_restricted=true&real_name=string&resend=true&team_id=string'
```

`POST /admin.users.invite`

Invite a user to a workspace.

<a href="https://api.slack.com/methods/admin.users.invite">API method documentation</a>

> Body parameter

```yaml
channel_ids: string
custom_message: string
email: string
guest_expiration_ts: string
is_restricted: true
is_ultra_restricted: true
real_name: string
resend: true
team_id: string
```

<h3 id="adminusersinvite-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|token|header|string|true|Authentication token. Requires scope: `admin.users:write`|
|body|body|object|true|none|
|» channel_ids|body|string|true|A comma-separated list of `channel_id`s for this user to join. At least one channel is required.|
|» custom_message|body|string|false|An optional message to send to the user in the invite email.|
|» email|body|string|true|The email address of the person to invite.|
|» guest_expiration_ts|body|string|false|Timestamp when guest account should be disabled. Only include this timestamp if you are inviting a guest user and you want their account to expire on a certain date.|
|» is_restricted|body|boolean|false|Is this user a multi-channel guest user? (default: false)|
|» is_ultra_restricted|body|boolean|false|Is this user a single channel guest user? (default: false)|
|» real_name|body|string|false|Full name of the user.|
|» resend|body|boolean|false|Allow this invite to be resent in the future if a user has not signed up yet. (default: false)|
|» team_id|body|string|true|The ID (`T1234`) of the workspace.|

> Example responses

> 200 Response

```json
{
  "ok": true
}
```

> default Response

```json
{
  "error": "invalid_auth",
  "ok": false
}
```

<h3 id="adminusersinvite-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Typical success response|Inline|
|default|Default|Typical error response|Inline|

<h3 id="adminusersinvite-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|[defs_ok_true](#schemadefs_ok_true)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|ok|true|

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|[defs_ok_false](#schemadefs_ok_false)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|ok|false|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
slackAuth ( Scopes: admin.users:write )
</aside>

## admin_users_list

<a id="opIdadmin_users_list"></a>

> Code samples

```bash
curl 'https://example.com/admin.users.list?team_id=string' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'token: string'
```

`GET /admin.users.list`

List users on a workspace

<a href="https://api.slack.com/methods/admin.users.list">API method documentation</a>

<h3 id="adminuserslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|token|header|string|true|Authentication token. Requires scope: `admin.users:read`|
|team_id|query|string|true|The ID (`T1234`) of the workspace.|
|cursor|query|string|false|Set `cursor` to `next_cursor` returned by the previous call to list items in the next page.|
|limit|query|integer|false|Limit for how many users to be retrieved per page|

> Example responses

> 200 Response

```json
{
  "ok": true,
  "users": [
    {
      "email": "bront@slack.com",
      "id": "T1234",
      "is_admin": false,
      "is_bot": false,
      "is_owner": false,
      "is_primary_owner": false,
      "is_restricted": false,
      "is_ultra_restricted": false
    }
  ]
}
```

> default Response

```json
{
  "error": "invalid_auth",
  "ok": false
}
```

<h3 id="adminuserslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Typical success response|Inline|
|default|Default|Typical error response|Inline|

<h3 id="adminuserslist-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|[defs_ok_true](#schemadefs_ok_true)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|ok|true|

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|[defs_ok_false](#schemadefs_ok_false)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|ok|false|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
slackAuth ( Scopes: admin.users:read )
</aside>

## admin_users_remove

<a id="opIdadmin_users_remove"></a>

> Code samples

```bash
curl https://example.com/admin.users.remove \
  -X POST \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'token: string' \
  -d 'team_id=string&user_id=string'
```

`POST /admin.users.remove`

Remove a user from a workspace.

<a href="https://api.slack.com/methods/admin.users.remove">API method documentation</a>

> Body parameter

```yaml
team_id: string
user_id: string
```

<h3 id="adminusersremove-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|token|header|string|true|Authentication token. Requires scope: `admin.users:write`|
|body|body|object|true|none|
|» team_id|body|string|true|The ID (`T1234`) of the workspace.|
|» user_id|body|string|true|The ID of the user to remove.|

> Example responses

> 200 Response

```json
{
  "ok": true
}
```

> default Response

```json
{
  "error": "invalid_auth",
  "ok": false
}
```

<h3 id="adminusersremove-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Typical success response|Inline|
|default|Default|Typical error response|Inline|

<h3 id="adminusersremove-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|[defs_ok_true](#schemadefs_ok_true)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|ok|true|

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|[defs_ok_false](#schemadefs_ok_false)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|ok|false|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
slackAuth ( Scopes: admin.users:write )
</aside>

## admin_users_setAdmin

<a id="opIdadmin_users_setAdmin"></a>

> Code samples

```bash
curl https://example.com/admin.users.setAdmin \
  -X POST \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'token: string' \
  -d 'team_id=string&user_id=string'
```

`POST /admin.users.setAdmin`

Set an existing guest, regular user, or owner to be an admin user.

<a href="https://api.slack.com/methods/admin.users.setAdmin">API method documentation</a>

> Body parameter

```yaml
team_id: string
user_id: string
```

<h3 id="adminuserssetadmin-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|token|header|string|true|Authentication token. Requires scope: `admin.users:write`|
|body|body|object|true|none|
|» team_id|body|string|true|The ID (`T1234`) of the workspace.|
|» user_id|body|string|true|The ID of the user to designate as an admin.|

> Example responses

> 200 Response

```json
{
  "ok": true
}
```

> default Response

```json
{
  "error": "invalid_auth",
  "ok": false
}
```

<h3 id="adminuserssetadmin-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Typical success response|Inline|
|default|Default|Typical error response|Inline|

<h3 id="adminuserssetadmin-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|[defs_ok_true](#schemadefs_ok_true)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|ok|true|

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|[defs_ok_false](#schemadefs_ok_false)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|ok|false|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
slackAuth ( Scopes: admin.users:write )
</aside>

## admin_users_setExpiration

<a id="opIdadmin_users_setExpiration"></a>

> Code samples

```bash
curl https://example.com/admin.users.setExpiration \
  -X POST \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'token: string' \
  -d 'expiration_ts=0&team_id=string&user_id=string'
```

`POST /admin.users.setExpiration`

Set an expiration for a guest user

<a href="https://api.slack.com/methods/admin.users.setExpiration">API method documentation</a>

> Body parameter

```yaml
expiration_ts: 0
team_id: string
user_id: string
```

<h3 id="adminuserssetexpiration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|token|header|string|true|Authentication token. Requires scope: `admin.users:write`|
|body|body|object|true|none|
|» expiration_ts|body|integer|true|Timestamp when guest account should be disabled.|
|» team_id|body|string|true|The ID (`T1234`) of the workspace.|
|» user_id|body|string|true|The ID of the user to set an expiration for.|

> Example responses

> 200 Response

```json
{
  "ok": true
}
```

> default Response

```json
{
  "error": "invalid_auth",
  "ok": false
}
```

<h3 id="adminuserssetexpiration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Typical success response|Inline|
|default|Default|Typical error response|Inline|

<h3 id="adminuserssetexpiration-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|[defs_ok_true](#schemadefs_ok_true)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|ok|true|

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|[defs_ok_false](#schemadefs_ok_false)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|ok|false|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
slackAuth ( Scopes: admin.users:write )
</aside>

## admin_users_setOwner

<a id="opIdadmin_users_setOwner"></a>

> Code samples

```bash
curl https://example.com/admin.users.setOwner \
  -X POST \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'token: string' \
  -d 'team_id=string&user_id=string'
```

`POST /admin.users.setOwner`

Set an existing guest, regular user, or admin user to be a workspace owner.

<a href="https://api.slack.com/methods/admin.users.setOwner">API method documentation</a>

> Body parameter

```yaml
team_id: string
user_id: string
```

<h3 id="adminuserssetowner-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|token|header|string|true|Authentication token. Requires scope: `admin.users:write`|
|body|body|object|true|none|
|» team_id|body|string|true|The ID (`T1234`) of the workspace.|
|» user_id|body|string|true|Id of the user to promote to owner.|

> Example responses

> 200 Response

```json
{
  "ok": true
}
```

> default Response

```json
{
  "error": "invalid_auth",
  "ok": false
}
```

<h3 id="adminuserssetowner-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Typical success response|Inline|
|default|Default|Typical error response|Inline|

<h3 id="adminuserssetowner-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|[defs_ok_true](#schemadefs_ok_true)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|ok|true|

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|[defs_ok_false](#schemadefs_ok_false)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|ok|false|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
slackAuth ( Scopes: admin.users:write )
</aside>

## admin_users_setRegular

<a id="opIdadmin_users_setRegular"></a>

> Code samples

```bash
curl https://example.com/admin.users.setRegular \
  -X POST \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'token: string' \
  -d 'team_id=string&user_id=string'
```

`POST /admin.users.setRegular`

Set an existing guest user, admin user, or owner to be a regular user.

<a href="https://api.slack.com/methods/admin.users.setRegular">API method documentation</a>

> Body parameter

```yaml
team_id: string
user_id: string
```

<h3 id="adminuserssetregular-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|token|header|string|true|Authentication token. Requires scope: `admin.users:write`|
|body|body|object|true|none|
|» team_id|body|string|true|The ID (`T1234`) of the workspace.|
|» user_id|body|string|true|The ID of the user to designate as a regular user.|

> Example responses

> 200 Response

```json
{
  "ok": true
}
```

> default Response

```json
{
  "error": "invalid_auth",
  "ok": false
}
```

<h3 id="adminuserssetregular-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Typical success response|Inline|
|default|Default|Typical error response|Inline|

<h3 id="adminuserssetregular-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|[defs_ok_true](#schemadefs_ok_true)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|ok|true|

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|[defs_ok_false](#schemadefs_ok_false)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|ok|false|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
slackAuth ( Scopes: admin.users:write )
</aside>

<h1 id="slack-web-api-adminuserssession">admin.users.session</h1>

## admin_users_session_invalidate

<a id="opIdadmin_users_session_invalidate"></a>

> Code samples

```bash
curl https://example.com/admin.users.session.invalidate \
  -X POST \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'token: string' \
  -d 'session_id=0&team_id=string'
```

`POST /admin.users.session.invalidate`

Invalidate a single session for a user by session_id

<a href="https://api.slack.com/methods/admin.users.session.invalidate">API method documentation</a>

> Body parameter

```yaml
session_id: 0
team_id: string
```

<h3 id="adminuserssessioninvalidate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|token|header|string|true|Authentication token. Requires scope: `admin.users:write`|
|body|body|object|true|none|
|» session_id|body|integer|true|none|
|» team_id|body|string|true|ID of the team that the session belongs to|

> Example responses

> 200 Response

```json
{
  "ok": true
}
```

> default Response

```json
{
  "error": "invalid_auth",
  "ok": false
}
```

<h3 id="adminuserssessioninvalidate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Typical success response|Inline|
|default|Default|Typical error response|Inline|

<h3 id="adminuserssessioninvalidate-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|[defs_ok_true](#schemadefs_ok_true)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|ok|true|

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|[defs_ok_false](#schemadefs_ok_false)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|ok|false|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
slackAuth ( Scopes: admin.users:write )
</aside>

## admin_users_session_reset

<a id="opIdadmin_users_session_reset"></a>

> Code samples

```bash
curl https://example.com/admin.users.session.reset \
  -X POST \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'token: string' \
  -d 'mobile_only=true&user_id=string&web_only=true'
```

`POST /admin.users.session.reset`

Wipes all valid sessions on all devices for a given user

<a href="https://api.slack.com/methods/admin.users.session.reset">API method documentation</a>

> Body parameter

```yaml
mobile_only: true
user_id: string
web_only: true
```

<h3 id="adminuserssessionreset-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|token|header|string|true|Authentication token. Requires scope: `admin.users:write`|
|body|body|object|true|none|
|» mobile_only|body|boolean|false|Only expire mobile sessions (default: false)|
|» user_id|body|string|true|The ID of the user to wipe sessions for|
|» web_only|body|boolean|false|Only expire web sessions (default: false)|

> Example responses

> 200 Response

```json
{
  "ok": true
}
```

> default Response

```json
{
  "error": "invalid_auth",
  "ok": false
}
```

<h3 id="adminuserssessionreset-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Typical success response|Inline|
|default|Default|Typical error response|Inline|

<h3 id="adminuserssessionreset-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|[defs_ok_true](#schemadefs_ok_true)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|ok|true|

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|[defs_ok_false](#schemadefs_ok_false)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|ok|false|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
slackAuth ( Scopes: admin.users:write )
</aside>

<h1 id="slack-web-api-api">api</h1>

## api_test

<a id="opIdapi_test"></a>

> Code samples

```bash
curl https://example.com/api.test \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api.test`

Checks API calling code.

<a href="https://api.slack.com/methods/api.test">API method documentation</a>

<h3 id="apitest-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|error|query|string|false|Error response to return|
|foo|query|string|false|example property to return|

> Example responses

> 200 Response

```json
{
  "ok": true
}
```

> default Response

```json
{
  "args": {
    "error": "my_error"
  },
  "error": "my_error",
  "ok": false
}
```

<h3 id="apitest-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Standard success response|Inline|
|default|Default|Artificial error response|Inline|

<h3 id="apitest-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|[defs_ok_true](#schemadefs_ok_true)|true|none|none|
|**additionalProperties**|object|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|ok|true|

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|true|none|none|
|ok|[defs_ok_false](#schemadefs_ok_false)|true|none|none|
|**additionalProperties**|object|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|ok|false|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
slackAuth ( Scopes: none )
</aside>

<h1 id="slack-web-api-appseventauthorizations">apps.event.authorizations</h1>

## apps_event_authorizations_list

<a id="opIdapps_event_authorizations_list"></a>

> Code samples

```bash
curl 'https://example.com/apps.event.authorizations.list?event_context=string' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'token: string'
```

`GET /apps.event.authorizations.list`

Get a list of authorizations for the given event context. Each authorization represents an app installation that the event is visible to.

<a href="https://api.slack.com/methods/apps.event.authorizations.list">API method documentation</a>

<h3 id="appseventauthorizationslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|token|header|string|true|Authentication token. Requires scope: `authorizations:read`|
|event_context|query|string|true|none|
|cursor|query|string|false|none|
|limit|query|integer|false|none|

> Example responses

> 200 Response

```json
{
  "authorizations": {
    "enterprise_id": "string",
    "is_bot": "string",
    "team_id": "string",
    "user_id": "string"
  },
  "ok": true
}
```

> default Response

```json
{
  "error": "invalid_auth",
  "ok": false
}
```

<h3 id="appseventauthorizationslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Typical success response|Inline|
|default|Default|Typical error response|Inline|

<h3 id="appseventauthorizationslist-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|[defs_ok_true](#schemadefs_ok_true)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|ok|true|

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|[defs_ok_false](#schemadefs_ok_false)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|ok|false|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
slackAuth ( Scopes: authorizations:read )
</aside>

<h1 id="slack-web-api-appspermissions">apps.permissions</h1>

## apps_permissions_info

<a id="opIdapps_permissions_info"></a>

> Code samples

```bash
curl https://example.com/apps.permissions.info \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /apps.permissions.info`

Returns list of permissions this app has on a team.

<a href="https://api.slack.com/methods/apps.permissions.info">API method documentation</a>

<h3 id="appspermissionsinfo-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|token|query|string|false|Authentication token. Requires scope: `none`|

> Example responses

> 200 Response

```json
{
  "info": {
    "app_home": {
      "resources": {
        "ids": [
          "D0C0NU1Q8",
          "D0BH95DLH"
        ]
      },
      "scopes": [
        "chat:write",
        "im:history",
        "im:read"
      ]
    },
    "channel": {
      "resources": {
        "excluded_ids": [],
        "ids": [
          "C061FA5PB"
        ],
        "wildcard": false
      },
      "scopes": [
        "channels:read"
      ]
    },
    "group": {
      "resources": {
        "ids": []
      },
      "scopes": []
    },
    "im": {
      "resources": {
        "ids": []
      },
      "scopes": []
    },
    "mpim": {
      "resources": {
        "ids": []
      },
      "scopes": []
    },
    "team": {
      "resources": {
        "ids": []
      },
      "scopes": []
    }
  },
  "ok": true
}
```

> default Response

```json
{
  "error": "invalid_auth",
  "ok": false
}
```

<h3 id="appspermissionsinfo-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Standard success response when used with a user token|Inline|
|default|Default|Standard failure response when used with an invalid token|Inline|

<h3 id="appspermissionsinfo-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|info|object|true|none|none|
|» app_home|object|true|none|none|
|» » resources|[objs_resources](#schemaobjs_resources)|false|none|none|
|» » scopes|[objs_scopes](#schemaobjs_scopes)|false|none|none|
|» channel|object|true|none|none|
|» » resources|[objs_resources](#schemaobjs_resources)|false|none|none|
|» » scopes|[objs_scopes](#schemaobjs_scopes)|false|none|none|
|» group|object|true|none|none|
|» » resources|[objs_resources](#schemaobjs_resources)|false|none|none|
|» » scopes|[objs_scopes](#schemaobjs_scopes)|false|none|none|
|» im|object|true|none|none|
|» » resources|[objs_resources](#schemaobjs_resources)|false|none|none|
|» » scopes|[objs_scopes](#schemaobjs_scopes)|false|none|none|
|» mpim|object|true|none|none|
|» » resources|[objs_resources](#schemaobjs_resources)|false|none|none|
|» » scopes|[objs_scopes](#schemaobjs_scopes)|false|none|none|
|» team|object|true|none|none|
|» » resources|[objs_resources](#schemaobjs_resources)|true|none|none|
|» » scopes|[objs_scopes](#schemaobjs_scopes)|true|none|none|
|ok|[defs_ok_true](#schemadefs_ok_true)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|ok|true|

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|callstack|string|false|none|Note: PHP callstack is only visible in dev/qa|
|error|string|true|none|none|
|ok|[defs_ok_false](#schemadefs_ok_false)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|error|not_authed|
|error|invalid_auth|
|error|account_inactive|
|error|token_revoked|
|error|no_permission|
|error|org_login_required|
|error|user_is_bot|
|error|invalid_arg_name|
|error|invalid_array_arg|
|error|invalid_charset|
|error|invalid_form_data|
|error|invalid_post_type|
|error|missing_post_type|
|error|team_added_to_org|
|error|invalid_json|
|error|json_not_object|
|error|request_timeout|
|error|upgrade_required|
|error|fatal_error|
|ok|false|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
slackAuth ( Scopes: none )
</aside>

## apps_permissions_request

<a id="opIdapps_permissions_request"></a>

> Code samples

```bash
curl 'https://example.com/apps.permissions.request?token=string&scopes=string&trigger_id=string' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /apps.permissions.request`

Allows an app to request additional scopes

<a href="https://api.slack.com/methods/apps.permissions.request">API method documentation</a>

<h3 id="appspermissionsrequest-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|token|query|string|true|Authentication token. Requires scope: `none`|
|scopes|query|string|true|A comma separated list of scopes to request for|
|trigger_id|query|string|true|Token used to trigger the permissions API|

> Example responses

> 200 Response

```json
{
  "ok": true
}
```

> default Response

```json
{
  "error": "invalid_trigger_id",
  "ok": false
}
```

<h3 id="appspermissionsrequest-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Standard success response when used with a user token|Inline|
|default|Default|Standard failure response when trigger_id is invalid|Inline|

<h3 id="appspermissionsrequest-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|[defs_ok_true](#schemadefs_ok_true)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|ok|true|

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|callstack|string|false|none|Note: PHP callstack is only visible in dev/qa|
|error|string|true|none|none|
|ok|[defs_ok_false](#schemadefs_ok_false)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|error|invalid_trigger|
|error|trigger_exchanged|
|error|invalid_scope|
|error|invalid_user|
|error|not_authed|
|error|invalid_auth|
|error|account_inactive|
|error|token_revoked|
|error|no_permission|
|error|org_login_required|
|error|user_is_bot|
|error|invalid_arg_name|
|error|invalid_array_arg|
|error|invalid_charset|
|error|invalid_form_data|
|error|invalid_post_type|
|error|missing_post_type|
|error|team_added_to_org|
|error|invalid_json|
|error|json_not_object|
|error|request_timeout|
|error|upgrade_required|
|error|fatal_error|
|ok|false|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
slackAuth ( Scopes: none )
</aside>

<h1 id="slack-web-api-appspermissionsresources">apps.permissions.resources</h1>

## apps_permissions_resources_list

<a id="opIdapps_permissions_resources_list"></a>

> Code samples

```bash
curl 'https://example.com/apps.permissions.resources.list?token=string' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /apps.permissions.resources.list`

Returns list of resource grants this app has on a team.

<a href="https://api.slack.com/methods/apps.permissions.resources.list">API method documentation</a>

<h3 id="appspermissionsresourceslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|token|query|string|true|Authentication token. Requires scope: `none`|
|cursor|query|string|false|Paginate through collections of data by setting the `cursor` parameter to a `next_cursor` attribute returned by a previous request's `response_metadata`. Default value fetches the first "page" of the collection. See [pagination](/docs/pagination) for more detail.|
|limit|query|integer|false|The maximum number of items to return.|

> Example responses

> 200 Response

```json
{
  "ok": true,
  "resources": [
    {
      "id": "T0DES3UAN",
      "type": "team"
    },
    {
      "id": "D024BFF1M",
      "type": "app_home"
    },
    {
      "id": "C024BE91L",
      "type": "channel"
    }
  ],
  "response_metadata": {
    "next_cursor": "dGVhbTpDMUg5UkVTR0w="
  }
}
```

> default Response

```json
{
  "error": "invalid_cursor",
  "ok": false
}
```

<h3 id="appspermissionsresourceslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Typical successful paginated response|Inline|
|default|Default|Typical error response|Inline|

<h3 id="appspermissionsresourceslist-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|[defs_ok_true](#schemadefs_ok_true)|true|none|none|
|resources|[object]|true|none|none|
|» id|string|false|none|none|
|» type|string|false|none|none|
|response_metadata|object|false|none|none|
|» next_cursor|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|ok|true|

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|callstack|string|false|none|Note: PHP callstack is only visible in dev/qa|
|error|string|true|none|none|
|ok|[defs_ok_false](#schemadefs_ok_false)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|error|invalid_cursor|
|error|not_authed|
|error|invalid_auth|
|error|account_inactive|
|error|token_revoked|
|error|no_permission|
|error|org_login_required|
|error|user_is_bot|
|error|invalid_arg_name|
|error|invalid_array_arg|
|error|invalid_charset|
|error|invalid_form_data|
|error|invalid_post_type|
|error|missing_post_type|
|error|team_added_to_org|
|error|invalid_json|
|error|json_not_object|
|error|request_timeout|
|error|upgrade_required|
|error|fatal_error|
|ok|false|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
slackAuth ( Scopes: none )
</aside>

<h1 id="slack-web-api-appspermissionsscopes">apps.permissions.scopes</h1>

## apps_permissions_scopes_list

<a id="opIdapps_permissions_scopes_list"></a>

> Code samples

```bash
curl 'https://example.com/apps.permissions.scopes.list?token=string' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /apps.permissions.scopes.list`

Returns list of scopes this app has on a team.

<a href="https://api.slack.com/methods/apps.permissions.scopes.list">API method documentation</a>

<h3 id="appspermissionsscopeslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|token|query|string|true|Authentication token. Requires scope: `none`|

> Example responses

> 200 Response

```json
{
  "ok": true,
  "scopes": {
    "app_home": [
      "chat:write",
      "im:history",
      "im:read"
    ],
    "channel": [
      "channels:history",
      "chat:write"
    ],
    "group": [
      "chat:write"
    ],
    "im": [
      "chat:write"
    ],
    "mpim": [
      "chat:write"
    ],
    "team": [
      "users:read"
    ],
    "user": []
  }
}
```

> default Response

```json
{
  "error": "invalid_auth",
  "ok": false
}
```

<h3 id="appspermissionsscopeslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Typical successful paginated response|Inline|
|default|Default|Typical error response|Inline|

<h3 id="appspermissionsscopeslist-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|[defs_ok_true](#schemadefs_ok_true)|true|none|none|
|scopes|object|true|none|none|
|» app_home|[objs_scopes](#schemaobjs_scopes)|false|none|none|
|» channel|[objs_scopes](#schemaobjs_scopes)|false|none|none|
|» group|[objs_scopes](#schemaobjs_scopes)|false|none|none|
|» im|[objs_scopes](#schemaobjs_scopes)|false|none|none|
|» mpim|[objs_scopes](#schemaobjs_scopes)|false|none|none|
|» team|[objs_scopes](#schemaobjs_scopes)|false|none|none|
|» user|[objs_scopes](#schemaobjs_scopes)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|ok|true|

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|callstack|string|false|none|Note: PHP callstack is only visible in dev/qa|
|error|string|true|none|none|
|ok|[defs_ok_false](#schemadefs_ok_false)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|error|not_authed|
|error|invalid_auth|
|error|account_inactive|
|error|token_revoked|
|error|no_permission|
|error|org_login_required|
|error|user_is_bot|
|error|invalid_arg_name|
|error|invalid_array_arg|
|error|invalid_charset|
|error|invalid_form_data|
|error|invalid_post_type|
|error|missing_post_type|
|error|team_added_to_org|
|error|invalid_json|
|error|json_not_object|
|error|request_timeout|
|error|upgrade_required|
|error|fatal_error|
|ok|false|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
slackAuth ( Scopes: none )
</aside>

<h1 id="slack-web-api-appspermissionsusers">apps.permissions.users</h1>

## apps_permissions_users_list

<a id="opIdapps_permissions_users_list"></a>

> Code samples

```bash
curl 'https://example.com/apps.permissions.users.list?token=string' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /apps.permissions.users.list`

Returns list of user grants and corresponding scopes this app has on a team.

<a href="https://api.slack.com/methods/apps.permissions.users.list">API method documentation</a>

<h3 id="appspermissionsuserslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|token|query|string|true|Authentication token. Requires scope: `none`|
|cursor|query|string|false|Paginate through collections of data by setting the `cursor` parameter to a `next_cursor` attribute returned by a previous request's `response_metadata`. Default value fetches the first "page" of the collection. See [pagination](/docs/pagination) for more detail.|
|limit|query|integer|false|The maximum number of items to return.|

> Example responses

> 200 Response

```json
{
  "ok": true,
  "resources": [
    {
      "id": "U0DES3UAN",
      "scopes": [
        "dnd:write:user",
        "reminders:write:user"
      ]
    },
    {
      "id": "U024BFF1M",
      "scopes": [
        "reminders:write:user"
      ]
    }
  ],
  "response_metadata": {
    "next_cursor": "dGVhbTdPMUg5UkFTT0w="
  }
}
```

> default Response

```json
{
  "error": "invalid_cursor",
  "ok": false
}
```

<h3 id="appspermissionsuserslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Typical successful paginated response|Inline|
|default|Default|Typical error response|Inline|

<h3 id="appspermissionsuserslist-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|[defs_ok_true](#schemadefs_ok_true)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|ok|true|

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|[defs_ok_false](#schemadefs_ok_false)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|ok|false|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
slackAuth ( Scopes: none )
</aside>

## apps_permissions_users_request

<a id="opIdapps_permissions_users_request"></a>

> Code samples

```bash
curl 'https://example.com/apps.permissions.users.request?token=string&scopes=string&trigger_id=string&user=string' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /apps.permissions.users.request`

Enables an app to trigger a permissions modal to grant an app access to a user access scope.

<a href="https://api.slack.com/methods/apps.permissions.users.request">API method documentation</a>

<h3 id="appspermissionsusersrequest-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|token|query|string|true|Authentication token. Requires scope: `none`|
|scopes|query|string|true|A comma separated list of user scopes to request for|
|trigger_id|query|string|true|Token used to trigger the request|
|user|query|string|true|The user this scope is being requested for|

> Example responses

> 200 Response

```json
{
  "ok": true
}
```

> default Response

```json
{
  "error": "invalid_trigger_id",
  "ok": false
}
```

<h3 id="appspermissionsusersrequest-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Standard success response when used with a user token|Inline|
|default|Default|Standard failure response when trigger_id is invalid|Inline|

<h3 id="appspermissionsusersrequest-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|[defs_ok_true](#schemadefs_ok_true)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|ok|true|

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|[defs_ok_false](#schemadefs_ok_false)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|ok|false|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
slackAuth ( Scopes: none )
</aside>

<h1 id="slack-web-api-apps">apps</h1>

## apps_uninstall

<a id="opIdapps_uninstall"></a>

> Code samples

```bash
curl https://example.com/apps.uninstall \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /apps.uninstall`

Uninstalls your app from a workspace.

<a href="https://api.slack.com/methods/apps.uninstall">API method documentation</a>

<h3 id="appsuninstall-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|token|query|string|false|Authentication token. Requires scope: `none`|
|client_id|query|string|false|Issued when you created your application.|
|client_secret|query|string|false|Issued when you created your application.|

> Example responses

> 200 Response

```json
{
  "ok": true
}
```

> default Response

```json
{
  "error": "invalid_auth",
  "ok": false
}
```

<h3 id="appsuninstall-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Typical success response|Inline|
|default|Default|Typical error response|Inline|

<h3 id="appsuninstall-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|[defs_ok_true](#schemadefs_ok_true)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|ok|true|

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|callstack|string|false|none|Note: PHP callstack is only visible in dev/qa|
|error|string|true|none|none|
|ok|[defs_ok_false](#schemadefs_ok_false)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|error|invalid_client_id|
|error|bad_client_secret|
|error|client_id_token_mismatch|
|error|not_authed|
|error|invalid_auth|
|error|account_inactive|
|error|token_revoked|
|error|no_permission|
|error|org_login_required|
|error|user_is_bot|
|error|invalid_arg_name|
|error|invalid_array_arg|
|error|invalid_charset|
|error|invalid_form_data|
|error|invalid_post_type|
|error|missing_post_type|
|error|team_added_to_org|
|error|invalid_json|
|error|json_not_object|
|error|request_timeout|
|error|upgrade_required|
|error|fatal_error|
|ok|false|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
slackAuth ( Scopes: none )
</aside>

<h1 id="slack-web-api-auth">auth</h1>

## auth_revoke

<a id="opIdauth_revoke"></a>

> Code samples

```bash
curl 'https://example.com/auth.revoke?token=string' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /auth.revoke`

Revokes a token.

<a href="https://api.slack.com/methods/auth.revoke">API method documentation</a>

<h3 id="authrevoke-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|token|query|string|true|Authentication token. Requires scope: `none`|
|test|query|boolean|false|Setting this parameter to `1` triggers a _testing mode_ where the specified token will not actually be revoked.|

> Example responses

> 200 Response

```json
{
  "ok": true,
  "revoked": true
}
```

> default Response

```json
{
  "error": "invalid_auth",
  "ok": false
}
```

<h3 id="authrevoke-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Typical success response|Inline|
|default|Default|Typical error response|Inline|

<h3 id="authrevoke-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|[defs_ok_true](#schemadefs_ok_true)|true|none|none|
|revoked|boolean|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|ok|true|

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|callstack|string|false|none|Note: PHP callstack is only visible in dev/qa|
|error|string|true|none|none|
|ok|[defs_ok_false](#schemadefs_ok_false)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|error|not_authed|
|error|invalid_auth|
|error|account_inactive|
|error|token_revoked|
|error|no_permission|
|error|org_login_required|
|error|invalid_arg_name|
|error|invalid_array_arg|
|error|invalid_charset|
|error|invalid_form_data|
|error|invalid_post_type|
|error|missing_post_type|
|error|team_added_to_org|
|error|invalid_json|
|error|json_not_object|
|error|request_timeout|
|error|upgrade_required|
|error|fatal_error|
|ok|false|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
slackAuth ( Scopes: none )
</aside>

## auth_test

<a id="opIdauth_test"></a>

> Code samples

```bash
curl https://example.com/auth.test \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'token: string'
```

`GET /auth.test`

Checks authentication & identity.

<a href="https://api.slack.com/methods/auth.test">API method documentation</a>

<h3 id="authtest-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|token|header|string|true|Authentication token. Requires scope: `none`|

> Example responses

> 200 Response

```json
{
  "ok": true,
  "team": "Subarachnoid Workspace",
  "team_id": "T12345678",
  "url": "https://subarachnoid.slack.com/",
  "user": "grace",
  "user_id": "W12345678"
}
```

> default Response

```json
{
  "error": "invalid_auth",
  "ok": false
}
```

<h3 id="authtest-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Standard success response when used with a user token|Inline|
|default|Default|Standard failure response when used with an invalid token|Inline|

<h3 id="authtest-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bot_id|[defs_bot_id](#schemadefs_bot_id)|false|none|none|
|is_enterprise_install|boolean|false|none|none|
|ok|[defs_ok_true](#schemadefs_ok_true)|true|none|none|
|team|string|true|none|none|
|team_id|[defs_team](#schemadefs_team)|true|none|none|
|url|string|true|none|none|
|user|string|true|none|none|
|user_id|[defs_user_id](#schemadefs_user_id)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|ok|true|

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|callstack|string|false|none|Note: PHP callstack is only visible in dev/qa|
|error|string|true|none|none|
|ok|[defs_ok_false](#schemadefs_ok_false)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|error|not_authed|
|error|invalid_auth|
|error|token_revoked|
|error|account_inactive|
|error|invalid_arg_name|
|error|invalid_array_arg|
|error|invalid_charset|
|error|invalid_form_data|
|error|invalid_post_type|
|error|missing_post_type|
|error|invalid_json|
|error|json_not_object|
|error|request_timeout|
|error|upgrade_required|
|ok|false|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
slackAuth ( Scopes: none )
</aside>

<h1 id="slack-web-api-bots">bots</h1>

## bots_info

<a id="opIdbots_info"></a>

> Code samples

```bash
curl 'https://example.com/bots.info?token=string' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /bots.info`

Gets information about a bot user.

<a href="https://api.slack.com/methods/bots.info">API method documentation</a>

<h3 id="botsinfo-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|token|query|string|true|Authentication token. Requires scope: `users:read`|
|bot|query|string|false|Bot user to get info on|

> Example responses

> 200 Response

```json
{
  "bot": {
    "app_id": "A161CLERW",
    "deleted": false,
    "icons": {
      "image_36": "https://...",
      "image_48": "https://...",
      "image_72": "https://..."
    },
    "id": "B061F7JD2",
    "name": "beforebot",
    "updated": 1449272004,
    "user_id": "U012ABCDEF"
  },
  "ok": true
}
```

> default Response

```json
{
  "error": "bot_not_found",
  "ok": false
}
```

<h3 id="botsinfo-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|When successful, returns bot info by bot ID.|Inline|
|default|Default|When no bot can be found, it returns an error.|Inline|

<h3 id="botsinfo-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bot|object|true|none|none|
|» app_id|[defs_app_id](#schemadefs_app_id)|true|none|none|
|» deleted|boolean|true|none|none|
|» icons|object|true|none|none|
|» » image_36|string(uri)|true|none|none|
|» » image_48|string(uri)|true|none|none|
|» » image_72|string(uri)|true|none|none|
|» id|[defs_bot_id](#schemadefs_bot_id)|true|none|none|
|» name|string|true|none|none|
|» updated|integer|true|none|none|
|» user_id|[defs_user_id](#schemadefs_user_id)|false|none|none|
|ok|[defs_ok_true](#schemadefs_ok_true)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|ok|true|

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|callstack|string|false|none|Note: PHP callstack is only visible in dev/qa|
|error|string|true|none|none|
|ok|[defs_ok_false](#schemadefs_ok_false)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|error|bot_not_found|
|error|not_authed|
|error|invalid_auth|
|error|account_inactive|
|error|token_revoked|
|error|no_permission|
|error|org_login_required|
|error|invalid_arg_name|
|error|invalid_array_arg|
|error|invalid_charset|
|error|invalid_form_data|
|error|invalid_post_type|
|error|missing_post_type|
|error|team_added_to_org|
|error|invalid_json|
|error|json_not_object|
|error|request_timeout|
|error|upgrade_required|
|error|fatal_error|
|ok|false|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
slackAuth ( Scopes: users:read )
</aside>

<h1 id="slack-web-api-calls">calls</h1>

## calls_add

<a id="opIdcalls_add"></a>

> Code samples

```bash
curl https://example.com/calls.add \
  -X POST \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'token: string' \
  -d 'created_by=string&date_start=0&desktop_app_join_url=string&external_display_id=string&external_unique_id=string&join_url=string&title=string&users=string'
```

`POST /calls.add`

Registers a new Call.

<a href="https://api.slack.com/methods/calls.add">API method documentation</a>

> Body parameter

```yaml
created_by: string
date_start: 0
desktop_app_join_url: string
external_display_id: string
external_unique_id: string
join_url: string
title: string
users: string
```

<h3 id="callsadd-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|token|header|string|true|Authentication token. Requires scope: `calls:write`|
|body|body|object|true|none|
|» created_by|body|string|false|The valid Slack user ID of the user who created this Call. When this method is called with a user token, the `created_by` field is optional and defaults to the authed user of the token. Otherwise, the field is required.|
|» date_start|body|integer|false|Call start time in UTC UNIX timestamp format|
|» desktop_app_join_url|body|string|false|When supplied, available Slack clients will attempt to directly launch the 3rd-party Call with this URL.|
|» external_display_id|body|string|false|An optional, human-readable ID supplied by the 3rd-party Call provider. If supplied, this ID will be displayed in the Call object.|
|» external_unique_id|body|string|true|An ID supplied by the 3rd-party Call provider. It must be unique across all Calls from that service.|
|» join_url|body|string|true|The URL required for a client to join the Call.|
|» title|body|string|false|The name of the Call.|
|» users|body|string|false|The list of users to register as participants in the Call. [Read more on how to specify users here](/apis/calls#users).|

> Example responses

> 200 Response

```json
{
  "ok": true
}
```

> default Response

```json
{
  "error": "invalid_auth",
  "ok": false
}
```

<h3 id="callsadd-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Typical success response|Inline|
|default|Default|Typical error response|Inline|

<h3 id="callsadd-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|[defs_ok_true](#schemadefs_ok_true)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|ok|true|

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|[defs_ok_false](#schemadefs_ok_false)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|ok|false|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
slackAuth ( Scopes: calls:write )
</aside>

## calls_end

<a id="opIdcalls_end"></a>

> Code samples

```bash
curl https://example.com/calls.end \
  -X POST \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'token: string' \
  -d 'duration=0&id=string'
```

`POST /calls.end`

Ends a Call.

<a href="https://api.slack.com/methods/calls.end">API method documentation</a>

> Body parameter

```yaml
duration: 0
id: string
```

<h3 id="callsend-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|token|header|string|true|Authentication token. Requires scope: `calls:write`|
|body|body|object|true|none|
|» duration|body|integer|false|Call duration in seconds|
|» id|body|string|true|`id` returned when registering the call using the [`calls.add`](/methods/calls.add) method.|

> Example responses

> 200 Response

```json
{
  "ok": true
}
```

> default Response

```json
{
  "error": "invalid_auth",
  "ok": false
}
```

<h3 id="callsend-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Typical success response|Inline|
|default|Default|Typical error response|Inline|

<h3 id="callsend-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|[defs_ok_true](#schemadefs_ok_true)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|ok|true|

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|[defs_ok_false](#schemadefs_ok_false)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|ok|false|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
slackAuth ( Scopes: calls:write )
</aside>

## calls_info

<a id="opIdcalls_info"></a>

> Code samples

```bash
curl 'https://example.com/calls.info?id=string' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'token: string'
```

`GET /calls.info`

Returns information about a Call.

<a href="https://api.slack.com/methods/calls.info">API method documentation</a>

<h3 id="callsinfo-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|token|header|string|true|Authentication token. Requires scope: `calls:read`|
|id|query|string|true|`id` of the Call returned by the [`calls.add`](/methods/calls.add) method.|

> Example responses

> 200 Response

```json
{
  "ok": true
}
```

> default Response

```json
{
  "error": "invalid_auth",
  "ok": false
}
```

<h3 id="callsinfo-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Typical success response|Inline|
|default|Default|Typical error response|Inline|

<h3 id="callsinfo-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|[defs_ok_true](#schemadefs_ok_true)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|ok|true|

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|[defs_ok_false](#schemadefs_ok_false)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|ok|false|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
slackAuth ( Scopes: calls:read )
</aside>

## calls_update

<a id="opIdcalls_update"></a>

> Code samples

```bash
curl https://example.com/calls.update \
  -X POST \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'token: string' \
  -d 'desktop_app_join_url=string&id=string&join_url=string&title=string'
```

`POST /calls.update`

Updates information about a Call.

<a href="https://api.slack.com/methods/calls.update">API method documentation</a>

> Body parameter

```yaml
desktop_app_join_url: string
id: string
join_url: string
title: string
```

<h3 id="callsupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|token|header|string|true|Authentication token. Requires scope: `calls:write`|
|body|body|object|true|none|
|» desktop_app_join_url|body|string|false|When supplied, available Slack clients will attempt to directly launch the 3rd-party Call with this URL.|
|» id|body|string|true|`id` returned by the [`calls.add`](/methods/calls.add) method.|
|» join_url|body|string|false|The URL required for a client to join the Call.|
|» title|body|string|false|The name of the Call.|

> Example responses

> 200 Response

```json
{
  "ok": true
}
```

> default Response

```json
{
  "error": "invalid_auth",
  "ok": false
}
```

<h3 id="callsupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Typical success response|Inline|
|default|Default|Typical error response|Inline|

<h3 id="callsupdate-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|[defs_ok_true](#schemadefs_ok_true)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|ok|true|

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|[defs_ok_false](#schemadefs_ok_false)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|ok|false|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
slackAuth ( Scopes: calls:write )
</aside>

<h1 id="slack-web-api-callsparticipants">calls.participants</h1>

## calls_participants_add

<a id="opIdcalls_participants_add"></a>

> Code samples

```bash
curl https://example.com/calls.participants.add \
  -X POST \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'token: string' \
  -d 'id=string&users=string'
```

`POST /calls.participants.add`

Registers new participants added to a Call.

<a href="https://api.slack.com/methods/calls.participants.add">API method documentation</a>

> Body parameter

```yaml
id: string
users: string
```

<h3 id="callsparticipantsadd-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|token|header|string|true|Authentication token. Requires scope: `calls:write`|
|body|body|object|true|none|
|» id|body|string|true|`id` returned by the [`calls.add`](/methods/calls.add) method.|
|» users|body|string|true|The list of users to add as participants in the Call. [Read more on how to specify users here](/apis/calls#users).|

> Example responses

> 200 Response

```json
{
  "ok": true
}
```

> default Response

```json
{
  "error": "invalid_auth",
  "ok": false
}
```

<h3 id="callsparticipantsadd-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Typical success response|Inline|
|default|Default|Typical error response|Inline|

<h3 id="callsparticipantsadd-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|[defs_ok_true](#schemadefs_ok_true)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|ok|true|

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|[defs_ok_false](#schemadefs_ok_false)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|ok|false|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
slackAuth ( Scopes: calls:write )
</aside>

## calls_participants_remove

<a id="opIdcalls_participants_remove"></a>

> Code samples

```bash
curl https://example.com/calls.participants.remove \
  -X POST \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'token: string' \
  -d 'id=string&users=string'
```

`POST /calls.participants.remove`

Registers participants removed from a Call.

<a href="https://api.slack.com/methods/calls.participants.remove">API method documentation</a>

> Body parameter

```yaml
id: string
users: string
```

<h3 id="callsparticipantsremove-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|token|header|string|true|Authentication token. Requires scope: `calls:write`|
|body|body|object|true|none|
|» id|body|string|true|`id` returned by the [`calls.add`](/methods/calls.add) method.|
|» users|body|string|true|The list of users to remove as participants in the Call. [Read more on how to specify users here](/apis/calls#users).|

> Example responses

> 200 Response

```json
{
  "ok": true
}
```

> default Response

```json
{
  "error": "invalid_auth",
  "ok": false
}
```

<h3 id="callsparticipantsremove-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Typical success response|Inline|
|default|Default|Typical error response|Inline|

<h3 id="callsparticipantsremove-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|[defs_ok_true](#schemadefs_ok_true)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|ok|true|

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|[defs_ok_false](#schemadefs_ok_false)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|ok|false|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
slackAuth ( Scopes: calls:write )
</aside>

<h1 id="slack-web-api-chat">chat</h1>

## chat_delete

<a id="opIdchat_delete"></a>

> Code samples

```bash
curl https://example.com/chat.delete \
  -X POST \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d 'as_user=true&channel=string&ts=0'
```

`POST /chat.delete`

Deletes a message.

<a href="https://api.slack.com/methods/chat.delete">API method documentation</a>

> Body parameter

```yaml
as_user: true
channel: string
ts: 0
```

<h3 id="chatdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|token|header|string|false|Authentication token. Requires scope: `chat:write`|
|body|body|object|false|none|
|» as_user|body|boolean|false|Pass true to delete the message as the authed user with `chat:write:user` scope. [Bot users](/bot-users) in this context are considered authed users. If unused or false, the message will be deleted with `chat:write:bot` scope.|
|» channel|body|string|false|Channel containing the message to be deleted.|
|» ts|body|number|false|Timestamp of the message to be deleted.|

> Example responses

> 200 Response

```json
{
  "channel": "C024BE91L",
  "ok": true,
  "ts": "1401383885.000061"
}
```

> default Response

```json
{
  "error": "message_not_found",
  "ok": false
}
```

<h3 id="chatdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Typical success response|Inline|
|default|Default|Typical error response|Inline|

<h3 id="chatdelete-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|channel|[defs_channel](#schemadefs_channel)|true|none|none|
|ok|[defs_ok_true](#schemadefs_ok_true)|true|none|none|
|ts|[defs_ts](#schemadefs_ts)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|ok|true|

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|callstack|string|false|none|Note: PHP callstack is only visible in dev/qa|
|error|string|true|none|none|
|ok|[defs_ok_false](#schemadefs_ok_false)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|error|message_not_found|
|error|channel_not_found|
|error|cant_delete_message|
|error|compliance_exports_prevent_deletion|
|error|not_authed|
|error|invalid_auth|
|error|account_inactive|
|error|token_revoked|
|error|no_permission|
|error|invalid_arg_name|
|error|invalid_array_arg|
|error|invalid_charset|
|error|invalid_form_data|
|error|invalid_post_type|
|error|missing_post_type|
|error|team_added_to_org|
|error|invalid_json|
|error|json_not_object|
|error|request_timeout|
|error|upgrade_required|
|error|fatal_error|
|ok|false|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
slackAuth ( Scopes: chat:write:user chat:write:bot )
</aside>

## chat_deleteScheduledMessage

<a id="opIdchat_deleteScheduledMessage"></a>

> Code samples

```bash
curl https://example.com/chat.deleteScheduledMessage \
  -X POST \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'token: string' \
  -d 'as_user=true&channel=string&scheduled_message_id=string'
```

`POST /chat.deleteScheduledMessage`

Deletes a pending scheduled message from the queue.

<a href="https://api.slack.com/methods/chat.deleteScheduledMessage">API method documentation</a>

> Body parameter

```yaml
as_user: true
channel: string
scheduled_message_id: string
```

<h3 id="chatdeletescheduledmessage-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|token|header|string|true|Authentication token. Requires scope: `chat:write`|
|body|body|object|false|none|
|» as_user|body|boolean|false|Pass true to delete the message as the authed user with `chat:write:user` scope. [Bot users](/bot-users) in this context are considered authed users. If unused or false, the message will be deleted with `chat:write:bot` scope.|
|» channel|body|string|true|The channel the scheduled_message is posting to|
|» scheduled_message_id|body|string|true|`scheduled_message_id` returned from call to chat.scheduleMessage|

> Example responses

> 200 Response

```json
{
  "ok": true
}
```

> default Response

```json
{
  "error": "invalid_scheduled_message_id",
  "ok": false
}
```

<h3 id="chatdeletescheduledmessage-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Typical success response|Inline|
|default|Default|Typical error response if no message is found|Inline|

<h3 id="chatdeletescheduledmessage-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|[defs_ok_true](#schemadefs_ok_true)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|ok|true|

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|callstack|string|false|none|Note: PHP callstack is only visible in dev/qa|
|error|string|true|none|none|
|ok|[defs_ok_false](#schemadefs_ok_false)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|error|invalid_scheduled_message_id|
|error|channel_not_found|
|error|bad_token|
|error|not_authed|
|error|invalid_auth|
|error|account_inactive|
|error|token_revoked|
|error|no_permission|
|error|org_login_required|
|error|ekm_access_denied|
|error|missing_scope|
|error|invalid_arguments|
|error|invalid_arg_name|
|error|invalid_charset|
|error|invalid_form_data|
|error|invalid_post_type|
|error|missing_post_type|
|error|team_added_to_org|
|error|invalid_json|
|error|json_not_object|
|error|request_timeout|
|error|upgrade_required|
|error|fatal_error|
|ok|false|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
slackAuth ( Scopes: chat:write:user chat:write:bot )
</aside>

## chat_getPermalink

<a id="opIdchat_getPermalink"></a>

> Code samples

```bash
curl 'https://example.com/chat.getPermalink?token=string&channel=string&message_ts=string' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /chat.getPermalink`

Retrieve a permalink URL for a specific extant message

<a href="https://api.slack.com/methods/chat.getPermalink">API method documentation</a>

<h3 id="chatgetpermalink-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|token|query|string|true|Authentication token. Requires scope: `none`|
|channel|query|string|true|The ID of the conversation or channel containing the message|
|message_ts|query|string|true|A message's `ts` value, uniquely identifying it within a channel|

> Example responses

> 200 Response

```json
{
  "channel": "C1H9RESGA",
  "ok": true,
  "permalink": "https://ghostbusters.slack.com/archives/C1H9RESGA/p135854651500008"
}
```

> default Response

```json
{
  "error": "channel_not_found",
  "ok": false
}
```

<h3 id="chatgetpermalink-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Standard success response|Inline|
|default|Default|Error response when channel cannot be found|Inline|

<h3 id="chatgetpermalink-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|channel|[defs_channel](#schemadefs_channel)|true|none|none|
|ok|[defs_ok_true](#schemadefs_ok_true)|true|none|none|
|permalink|string(uri)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|ok|true|

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|callstack|string|false|none|Note: PHP callstack is only visible in dev/qa|
|error|string|true|none|none|
|ok|[defs_ok_false](#schemadefs_ok_false)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|error|channel_not_found|
|error|message_not_found|
|error|not_authed|
|error|invalid_auth|
|error|account_inactive|
|error|token_revoked|
|error|no_permission|
|error|org_login_required|
|error|invalid_arg_name|
|error|invalid_array_arg|
|error|invalid_charset|
|error|invalid_form_data|
|error|invalid_post_type|
|error|missing_post_type|
|error|team_added_to_org|
|error|invalid_json|
|error|json_not_object|
|error|request_timeout|
|error|upgrade_required|
|error|fatal_error|
|ok|false|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
slackAuth ( Scopes: none )
</aside>

## chat_meMessage

<a id="opIdchat_meMessage"></a>

> Code samples

```bash
curl https://example.com/chat.meMessage \
  -X POST \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d 'channel=string&text=string'
```

`POST /chat.meMessage`

Share a me message into a channel.

<a href="https://api.slack.com/methods/chat.meMessage">API method documentation</a>

> Body parameter

```yaml
channel: string
text: string
```

<h3 id="chatmemessage-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|token|header|string|false|Authentication token. Requires scope: `chat:write`|
|body|body|object|false|none|
|» channel|body|string|false|Channel to send message to. Can be a public channel, private group or IM channel. Can be an encoded ID, or a name.|
|» text|body|string|false|Text of the message to send.|

> Example responses

> 200 Response

```json
{
  "channel": "C024BE7LR",
  "ok": true,
  "ts": "1417671948.000006"
}
```

> default Response

```json
{
  "error": "invalid_auth",
  "ok": false
}
```

<h3 id="chatmemessage-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Typical success response|Inline|
|default|Default|Typical error response|Inline|

<h3 id="chatmemessage-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|channel|[defs_channel](#schemadefs_channel)|false|none|none|
|ok|[defs_ok_true](#schemadefs_ok_true)|true|none|none|
|ts|[defs_ts](#schemadefs_ts)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|ok|true|

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|callstack|string|false|none|Note: PHP callstack is only visible in dev/qa|
|error|string|true|none|none|
|ok|[defs_ok_false](#schemadefs_ok_false)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|error|channel_not_found|
|error|not_in_channel|
|error|is_archived|
|error|msg_too_long|
|error|no_text|
|error|rate_limited|
|error|not_authed|
|error|invalid_auth|
|error|account_inactive|
|error|token_revoked|
|error|no_permission|
|error|org_login_required|
|error|invalid_arg_name|
|error|invalid_array_arg|
|error|invalid_charset|
|error|invalid_form_data|
|error|invalid_post_type|
|error|missing_post_type|
|error|team_added_to_org|
|error|invalid_json|
|error|json_not_object|
|error|request_timeout|
|error|upgrade_required|
|error|fatal_error|
|ok|false|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
slackAuth ( Scopes: chat:write:user chat:write:bot )
</aside>

## chat_postEphemeral

<a id="opIdchat_postEphemeral"></a>

> Code samples

```bash
curl https://example.com/chat.postEphemeral \
  -X POST \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'token: string' \
  -d 'as_user=true&attachments=string&blocks=string&channel=string&icon_emoji=string&icon_url=string&link_names=true&parse=string&text=string&thread_ts=string&user=string&username=string'
```

`POST /chat.postEphemeral`

Sends an ephemeral message to a user in a channel.

<a href="https://api.slack.com/methods/chat.postEphemeral">API method documentation</a>

> Body parameter

```yaml
as_user: true
attachments: string
blocks: string
channel: string
icon_emoji: string
icon_url: string
link_names: true
parse: string
text: string
thread_ts: string
user: string
username: string
```

<h3 id="chatpostephemeral-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|token|header|string|true|Authentication token. Requires scope: `chat:write`|
|body|body|object|false|none|
|» as_user|body|boolean|false|Pass true to post the message as the authed user. Defaults to true if the chat:write:bot scope is not included. Otherwise, defaults to false.|
|» attachments|body|string|false|A JSON-based array of structured attachments, presented as a URL-encoded string.|
|» blocks|body|string|false|A JSON-based array of structured blocks, presented as a URL-encoded string.|
|» channel|body|string|true|Channel, private group, or IM channel to send message to. Can be an encoded ID, or a name.|
|» icon_emoji|body|string|false|Emoji to use as the icon for this message. Overrides `icon_url`. Must be used in conjunction with `as_user` set to `false`, otherwise ignored. See [authorship](#authorship) below.|
|» icon_url|body|string|false|URL to an image to use as the icon for this message. Must be used in conjunction with `as_user` set to false, otherwise ignored. See [authorship](#authorship) below.|
|» link_names|body|boolean|false|Find and link channel names and usernames.|
|» parse|body|string|false|Change how messages are treated. Defaults to `none`. See [below](#formatting).|
|» text|body|string|false|How this field works and whether it is required depends on other fields you use in your API call. [See below](#text_usage) for more detail.|
|» thread_ts|body|string|false|Provide another message's `ts` value to post this message in a thread. Avoid using a reply's `ts` value; use its parent's value instead. Ephemeral messages in threads are only shown if there is already an active thread.|
|» user|body|string|true|`id` of the user who will receive the ephemeral message. The user should be in the channel specified by the `channel` argument.|
|» username|body|string|false|Set your bot's user name. Must be used in conjunction with `as_user` set to false, otherwise ignored. See [authorship](#authorship) below.|

> Example responses

> 200 Response

```json
{
  "message_ts": "1502210682.580145",
  "ok": true
}
```

> default Response

```json
{
  "error": "user_not_in_channel",
  "ok": false
}
```

<h3 id="chatpostephemeral-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Typical success response|Inline|
|default|Default|Typical error response|Inline|

<h3 id="chatpostephemeral-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message_ts|[defs_ts](#schemadefs_ts)|true|none|none|
|ok|[defs_ok_true](#schemadefs_ok_true)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|ok|true|

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|callstack|string|false|none|Note: PHP callstack is only visible in dev/qa|
|error|string|true|none|none|
|ok|[defs_ok_false](#schemadefs_ok_false)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|error|channel_not_found|
|error|is_archived|
|error|msg_too_long|
|error|no_text|
|error|restricted_action|
|error|too_many_attachments|
|error|user_not_in_channel|
|error|not_authed|
|error|invalid_auth|
|error|account_inactive|
|error|token_revoked|
|error|no_permission|
|error|org_login_required|
|error|invalid_arg_name|
|error|invalid_array_arg|
|error|invalid_charset|
|error|invalid_form_data|
|error|invalid_post_type|
|error|missing_post_type|
|error|team_added_to_org|
|error|invalid_json|
|error|json_not_object|
|error|request_timeout|
|error|upgrade_required|
|error|fatal_error|
|ok|false|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
slackAuth ( Scopes: chat:write:user chat:write:bot )
</aside>

## chat_postMessage

<a id="opIdchat_postMessage"></a>

> Code samples

```bash
curl https://example.com/chat.postMessage \
  -X POST \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'token: string' \
  -d 'as_user=string&attachments=string&blocks=string&channel=string&icon_emoji=string&icon_url=string&link_names=true&mrkdwn=true&parse=string&reply_broadcast=true&text=string&thread_ts=string&unfurl_links=true&unfurl_media=true&username=string'
```

`POST /chat.postMessage`

Sends a message to a channel.

<a href="https://api.slack.com/methods/chat.postMessage">API method documentation</a>

> Body parameter

```yaml
as_user: string
attachments: string
blocks: string
channel: string
icon_emoji: string
icon_url: string
link_names: true
mrkdwn: true
parse: string
reply_broadcast: true
text: string
thread_ts: string
unfurl_links: true
unfurl_media: true
username: string
```

<h3 id="chatpostmessage-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|token|header|string|true|Authentication token. Requires scope: `chat:write`|
|body|body|object|false|none|
|» as_user|body|string|false|Pass true to post the message as the authed user, instead of as a bot. Defaults to false. See [authorship](#authorship) below.|
|» attachments|body|string|false|A JSON-based array of structured attachments, presented as a URL-encoded string.|
|» blocks|body|string|false|A JSON-based array of structured blocks, presented as a URL-encoded string.|
|» channel|body|string|true|Channel, private group, or IM channel to send message to. Can be an encoded ID, or a name. See [below](#channels) for more details.|
|» icon_emoji|body|string|false|Emoji to use as the icon for this message. Overrides `icon_url`. Must be used in conjunction with `as_user` set to `false`, otherwise ignored. See [authorship](#authorship) below.|
|» icon_url|body|string|false|URL to an image to use as the icon for this message. Must be used in conjunction with `as_user` set to false, otherwise ignored. See [authorship](#authorship) below.|
|» link_names|body|boolean|false|Find and link channel names and usernames.|
|» mrkdwn|body|boolean|false|Disable Slack markup parsing by setting to `false`. Enabled by default.|
|» parse|body|string|false|Change how messages are treated. Defaults to `none`. See [below](#formatting).|
|» reply_broadcast|body|boolean|false|Used in conjunction with `thread_ts` and indicates whether reply should be made visible to everyone in the channel or conversation. Defaults to `false`.|
|» text|body|string|false|How this field works and whether it is required depends on other fields you use in your API call. [See below](#text_usage) for more detail.|
|» thread_ts|body|string|false|Provide another message's `ts` value to make this message a reply. Avoid using a reply's `ts` value; use its parent instead.|
|» unfurl_links|body|boolean|false|Pass true to enable unfurling of primarily text-based content.|
|» unfurl_media|body|boolean|false|Pass false to disable unfurling of media content.|
|» username|body|string|false|Set your bot's user name. Must be used in conjunction with `as_user` set to false, otherwise ignored. See [authorship](#authorship) below.|

> Example responses

> 200 Response

```json
{
  "channel": "C1H9RESGL",
  "message": {
    "attachments": [
      {
        "fallback": "This is an attachment's fallback",
        "id": 1,
        "text": "This is an attachment"
      }
    ],
    "bot_id": "B19LU7CSY",
    "subtype": "bot_message",
    "text": "Here's a message for you",
    "ts": "1503435956.000247",
    "type": "message",
    "username": "ecto1"
  },
  "ok": true,
  "ts": "1503435956.000247"
}
```

> default Response

```json
{
  "error": "too_many_attachments",
  "ok": false
}
```

<h3 id="chatpostmessage-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Typical success response|Inline|
|default|Default|Typical error response if too many attachments are included|Inline|

<h3 id="chatpostmessage-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|channel|[defs_channel](#schemadefs_channel)|true|none|none|
|message|[objs_message](#schemaobjs_message)|true|none|none|
|ok|[defs_ok_true](#schemadefs_ok_true)|true|none|none|
|ts|[defs_ts](#schemadefs_ts)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|ok|true|

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|callstack|string|false|none|Note: PHP callstack is only visible in dev/qa|
|error|string|true|none|none|
|ok|[defs_ok_false](#schemadefs_ok_false)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|error|channel_not_found|
|error|not_in_channel|
|error|is_archived|
|error|msg_too_long|
|error|no_text|
|error|too_many_attachments|
|error|rate_limited|
|error|not_authed|
|error|invalid_auth|
|error|account_inactive|
|error|invalid_arg_name|
|error|invalid_array_arg|
|error|invalid_charset|
|error|invalid_form_data|
|error|invalid_post_type|
|error|missing_post_type|
|ok|false|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
slackAuth ( Scopes: chat:write:user chat:write:bot )
</aside>

## chat_scheduleMessage

<a id="opIdchat_scheduleMessage"></a>

> Code samples

```bash
curl https://example.com/chat.scheduleMessage \
  -X POST \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d 'as_user=true&attachments=string&blocks=string&channel=string&link_names=true&parse=string&post_at=string&reply_broadcast=true&text=string&thread_ts=0&unfurl_links=true&unfurl_media=true'
```

`POST /chat.scheduleMessage`

Schedules a message to be sent to a channel.

<a href="https://api.slack.com/methods/chat.scheduleMessage">API method documentation</a>

> Body parameter

```yaml
as_user: true
attachments: string
blocks: string
channel: string
link_names: true
parse: string
post_at: string
reply_broadcast: true
text: string
thread_ts: 0
unfurl_links: true
unfurl_media: true
```

<h3 id="chatschedulemessage-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|token|header|string|false|Authentication token. Requires scope: `chat:write`|
|body|body|object|false|none|
|» as_user|body|boolean|false|Pass true to post the message as the authed user, instead of as a bot. Defaults to false. See [chat.postMessage](chat.postMessage#authorship).|
|» attachments|body|string|false|A JSON-based array of structured attachments, presented as a URL-encoded string.|
|» blocks|body|string|false|A JSON-based array of structured blocks, presented as a URL-encoded string.|
|» channel|body|string|false|Channel, private group, or DM channel to send message to. Can be an encoded ID, or a name. See [below](#channels) for more details.|
|» link_names|body|boolean|false|Find and link channel names and usernames.|
|» parse|body|string|false|Change how messages are treated. Defaults to `none`. See [chat.postMessage](chat.postMessage#formatting).|
|» post_at|body|string|false|Unix EPOCH timestamp of time in future to send the message.|
|» reply_broadcast|body|boolean|false|Used in conjunction with `thread_ts` and indicates whether reply should be made visible to everyone in the channel or conversation. Defaults to `false`.|
|» text|body|string|false|How this field works and whether it is required depends on other fields you use in your API call. [See below](#text_usage) for more detail.|
|» thread_ts|body|number|false|Provide another message's `ts` value to make this message a reply. Avoid using a reply's `ts` value; use its parent instead.|
|» unfurl_links|body|boolean|false|Pass true to enable unfurling of primarily text-based content.|
|» unfurl_media|body|boolean|false|Pass false to disable unfurling of media content.|

> Example responses

> 200 Response

```json
{
  "channel": "C1H9RESGL",
  "message": {
    "attachments": [
      {
        "fallback": "This is an attachment's fallback",
        "id": 1,
        "text": "This is an attachment"
      }
    ],
    "bot_id": "B19LU7CSY",
    "subtype": "bot_message",
    "text": "Here's a message for you in the future",
    "type": "delayed_message",
    "username": "ecto1"
  },
  "ok": true,
  "post_at": "1562180400",
  "scheduled_message_id": "Q1298393284"
}
```

> default Response

```json
{
  "error": "time_in_past",
  "ok": false
}
```

<h3 id="chatschedulemessage-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Typical success response|Inline|
|default|Default|Typical error response if the `post_at` is invalid (ex. in the past or too far into the future)|Inline|

<h3 id="chatschedulemessage-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|channel|[defs_channel](#schemadefs_channel)|true|none|none|
|message|object|true|none|none|
|» bot_id|[defs_bot_id](#schemadefs_bot_id)|true|none|none|
|» bot_profile|[objs_bot_profile](#schemaobjs_bot_profile)|false|none|none|
|» team|[defs_team](#schemadefs_team)|true|none|none|
|» text|string|true|none|none|
|» type|string|true|none|none|
|» user|[defs_user_id](#schemadefs_user_id)|true|none|none|
|» username|string|false|none|none|
|ok|[defs_ok_true](#schemadefs_ok_true)|true|none|none|
|post_at|integer|true|none|none|
|scheduled_message_id|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|ok|true|

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|callstack|string|false|none|Note: PHP callstack is only visible in dev/qa|
|error|string|true|none|none|
|ok|[defs_ok_false](#schemadefs_ok_false)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|error|invalid_time|
|error|time_in_past|
|error|time_too_far|
|error|channel_not_found|
|error|not_in_channel|
|error|is_archived|
|error|msg_too_long|
|error|no_text|
|error|restricted_action|
|error|restricted_action_read_only_channel|
|error|restricted_action_thread_only_channel|
|error|restricted_action_non_threadable_channel|
|error|too_many_attachments|
|error|rate_limited|
|error|not_authed|
|error|invalid_auth|
|error|account_inactive|
|error|token_revoked|
|error|no_permission|
|error|org_login_required|
|error|ekm_access_denied|
|error|missing_scope|
|error|invalid_arguments|
|error|invalid_arg_name|
|error|invalid_charset|
|error|invalid_form_data|
|error|invalid_post_type|
|error|missing_post_type|
|error|team_added_to_org|
|error|invalid_json|
|error|json_not_object|
|error|request_timeout|
|error|upgrade_required|
|error|fatal_error|
|ok|false|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
slackAuth ( Scopes: chat:write:user chat:write:bot )
</aside>

## chat_unfurl

<a id="opIdchat_unfurl"></a>

> Code samples

```bash
curl https://example.com/chat.unfurl \
  -X POST \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'token: string' \
  -d 'channel=string&ts=string&unfurls=string&user_auth_message=string&user_auth_required=true&user_auth_url=string'
```

`POST /chat.unfurl`

Provide custom unfurl behavior for user-posted URLs

<a href="https://api.slack.com/methods/chat.unfurl">API method documentation</a>

> Body parameter

```yaml
channel: string
ts: string
unfurls: string
user_auth_message: string
user_auth_required: true
user_auth_url: string
```

<h3 id="chatunfurl-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|token|header|string|true|Authentication token. Requires scope: `links:write`|
|body|body|object|true|none|
|» channel|body|string|true|Channel ID of the message|
|» ts|body|string|true|Timestamp of the message to add unfurl behavior to.|
|» unfurls|body|string|false|URL-encoded JSON map with keys set to URLs featured in the the message, pointing to their unfurl blocks or message attachments.|
|» user_auth_message|body|string|false|Provide a simply-formatted string to send as an ephemeral message to the user as invitation to authenticate further and enable full unfurling behavior|
|» user_auth_required|body|boolean|false|Set to `true` or `1` to indicate the user must install your Slack app to trigger unfurls for this domain|
|» user_auth_url|body|string|false|Send users to this custom URL where they will complete authentication in your app to fully trigger unfurling. Value should be properly URL-encoded.|

> Example responses

> 200 Response

```json
{
  "ok": true
}
```

> default Response

```json
{
  "error": "cannot_unfurl_url",
  "ok": false
}
```

<h3 id="chatunfurl-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Typical, minimal success response|Inline|
|default|Default|Typical error response|Inline|

<h3 id="chatunfurl-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|[defs_ok_true](#schemadefs_ok_true)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|ok|true|

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|callstack|string|false|none|Note: PHP callstack is only visible in dev/qa|
|error|string|true|none|none|
|ok|[defs_ok_false](#schemadefs_ok_false)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|error|cannot_unfurl_url|
|error|cannot_find_service|
|error|missing_unfurls|
|error|cannot_prompt|
|error|not_authed|
|error|invalid_auth|
|error|account_inactive|
|error|token_revoked|
|error|no_permission|
|error|org_login_required|
|error|user_is_bot|
|error|invalid_arg_name|
|error|invalid_array_arg|
|error|invalid_charset|
|error|invalid_form_data|
|error|invalid_post_type|
|error|missing_post_type|
|error|team_added_to_org|
|error|invalid_json|
|error|json_not_object|
|error|request_timeout|
|error|upgrade_required|
|error|fatal_error|
|ok|false|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
slackAuth ( Scopes: links:write )
</aside>

## chat_update

<a id="opIdchat_update"></a>

> Code samples

```bash
curl https://example.com/chat.update \
  -X POST \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'token: string' \
  -d 'as_user=string&attachments=string&blocks=string&channel=string&link_names=string&parse=string&text=string&ts=string'
```

`POST /chat.update`

Updates a message.

<a href="https://api.slack.com/methods/chat.update">API method documentation</a>

> Body parameter

```yaml
as_user: string
attachments: string
blocks: string
channel: string
link_names: string
parse: string
text: string
ts: string
```

<h3 id="chatupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|token|header|string|true|Authentication token. Requires scope: `chat:write`|
|body|body|object|false|none|
|» as_user|body|string|false|Pass true to update the message as the authed user. [Bot users](/bot-users) in this context are considered authed users.|
|» attachments|body|string|false|A JSON-based array of structured attachments, presented as a URL-encoded string. This field is required when not presenting `text`. If you don't include this field, the message's previous `attachments` will be retained. To remove previous `attachments`, include an empty array for this field.|
|» blocks|body|string|false|A JSON-based array of [structured blocks](/block-kit/building), presented as a URL-encoded string. If you don't include this field, the message's previous `blocks` will be retained. To remove previous `blocks`, include an empty array for this field.|
|» channel|body|string|true|Channel containing the message to be updated.|
|» link_names|body|string|false|Find and link channel names and usernames. Defaults to `none`. If you do not specify a value for this field, the original value set for the message will be overwritten with the default, `none`.|
|» parse|body|string|false|Change how messages are treated. Defaults to `client`, unlike `chat.postMessage`. Accepts either `none` or `full`. If you do not specify a value for this field, the original value set for the message will be overwritten with the default, `client`.|
|» text|body|string|false|New text for the message, using the [default formatting rules](/reference/surfaces/formatting). It's not required when presenting `blocks` or `attachments`.|
|» ts|body|string|true|Timestamp of the message to be updated.|

> Example responses

> 200 Response

```json
{
  "channel": "C024BE91L",
  "message": {
    "text": "Updated text you carefully authored",
    "user": "U34567890"
  },
  "ok": true,
  "text": "Updated text you carefully authored",
  "ts": "1401383885.000061"
}
```

> default Response

```json
{
  "error": "cant_update_message",
  "ok": false
}
```

<h3 id="chatupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Typical success response|Inline|
|default|Default|Typical error response|Inline|

<h3 id="chatupdate-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|channel|string|true|none|none|
|message|object|true|none|none|
|» attachments|[object]|false|none|none|
|» blocks|object|false|none|none|
|» text|string|true|none|none|
|ok|[defs_ok_true](#schemadefs_ok_true)|true|none|none|
|text|string|true|none|none|
|ts|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|ok|true|

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|callstack|string|false|none|Note: PHP callstack is only visible in dev/qa|
|error|string|true|none|none|
|ok|[defs_ok_false](#schemadefs_ok_false)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|error|message_not_found|
|error|cant_update_message|
|error|channel_not_found|
|error|edit_window_closed|
|error|msg_too_long|
|error|too_many_attachments|
|error|rate_limited|
|error|no_text|
|error|not_authed|
|error|invalid_auth|
|error|account_inactive|
|error|token_revoked|
|error|no_permission|
|error|invalid_arg_name|
|error|invalid_array_arg|
|error|invalid_charset|
|error|invalid_form_data|
|error|invalid_post_type|
|error|missing_post_type|
|error|request_timeout|
|error|invalid_json|
|error|json_not_object|
|error|upgrade_required|
|error|fatal_error|
|error|is_inactive|
|ok|false|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
slackAuth ( Scopes: chat:write:user chat:write:bot )
</aside>

<h1 id="slack-web-api-chatscheduledmessages">chat.scheduledMessages</h1>

## chat_scheduledMessages_list

<a id="opIdchat_scheduledMessages_list"></a>

> Code samples

```bash
curl https://example.com/chat.scheduledMessages.list \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /chat.scheduledMessages.list`

Returns a list of scheduled messages.

<a href="https://api.slack.com/methods/chat.scheduledMessages.list">API method documentation</a>

<h3 id="chatscheduledmessageslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|token|header|string|false|Authentication token. Requires scope: `none`|
|channel|query|string|false|The channel of the scheduled messages|
|latest|query|number|false|A UNIX timestamp of the latest value in the time range|
|oldest|query|number|false|A UNIX timestamp of the oldest value in the time range|
|limit|query|integer|false|Maximum number of original entries to return.|
|cursor|query|string|false|For pagination purposes, this is the `cursor` value returned from a previous call to `chat.scheduledmessages.list` indicating where you want to start this call from.|

> Example responses

> 200 Response

```json
{
  "ok": true,
  "response_metadata": {
    "next_cursor": ""
  },
  "scheduled_messages": [
    {
      "channel_id": "C1H9RESGL",
      "date_created": 1551891734,
      "id": 1298393284,
      "post_at": 1551991428,
      "text": "Here's a message for you in the future"
    }
  ]
}
```

> default Response

```json
{
  "error": "invalid_channel",
  "ok": false
}
```

<h3 id="chatscheduledmessageslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Typical success response|Inline|
|default|Default|Typical error response if the channel passed is invalid|Inline|

<h3 id="chatscheduledmessageslist-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|[defs_ok_true](#schemadefs_ok_true)|true|none|none|
|response_metadata|object|true|none|none|
|» next_cursor|string|true|none|none|
|scheduled_messages|[object]|true|none|none|
|» channel_id|[defs_channel_id](#schemadefs_channel_id)|true|none|none|
|» date_created|integer|true|none|none|
|» id|string|true|none|none|
|» post_at|integer|true|none|none|
|» text|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|ok|true|

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|callstack|string|false|none|Note: PHP callstack is only visible in dev/qa|
|error|string|true|none|none|
|ok|[defs_ok_false](#schemadefs_ok_false)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|error|invalid_channel|
|error|not_authed|
|error|invalid_auth|
|error|account_inactive|
|error|token_revoked|
|error|no_permission|
|error|org_login_required|
|error|ekm_access_denied|
|error|missing_scope|
|error|invalid_arguments|
|error|invalid_arg_name|
|error|invalid_charset|
|error|invalid_form_data|
|error|invalid_post_type|
|error|missing_post_type|
|error|team_added_to_org|
|error|invalid_json|
|error|json_not_object|
|error|request_timeout|
|error|upgrade_required|
|error|fatal_error|
|ok|false|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
slackAuth ( Scopes: none )
</aside>

<h1 id="slack-web-api-conversations">conversations</h1>

## conversations_archive

<a id="opIdconversations_archive"></a>

> Code samples

```bash
curl https://example.com/conversations.archive \
  -X POST \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d 'channel=string'
```

`POST /conversations.archive`

Archives a conversation.

<a href="https://api.slack.com/methods/conversations.archive">API method documentation</a>

> Body parameter

```yaml
channel: string
```

<h3 id="conversationsarchive-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|token|header|string|false|Authentication token. Requires scope: `conversations:write`|
|body|body|object|false|none|
|» channel|body|string|false|ID of conversation to archive|

> Example responses

> 200 Response

```json
{
  "ok": true
}
```

> default Response

```json
{
  "error": "channel_not_found",
  "ok": false
}
```

<h3 id="conversationsarchive-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Typical success response|Inline|
|default|Default|Typical error response|Inline|

<h3 id="conversationsarchive-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|[defs_ok_true](#schemadefs_ok_true)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|ok|true|

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|callstack|string|false|none|Note: PHP callstack is only visible in dev/qa|
|error|string|true|none|none|
|needed|string|false|none|none|
|ok|[defs_ok_false](#schemadefs_ok_false)|true|none|none|
|provided|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|error|method_not_supported_for_channel_type|
|error|missing_scope|
|error|not_supported|
|error|channel_not_found|
|error|already_archived|
|error|cant_archive_general|
|error|restricted_action|
|error|not_authed|
|error|invalid_auth|
|error|account_inactive|
|error|user_is_bot|
|error|user_is_restricted|
|error|user_is_ultra_restricted|
|error|invalid_arg_name|
|error|invalid_array_arg|
|error|invalid_charset|
|error|invalid_form_data|
|error|invalid_post_type|
|error|missing_post_type|
|error|invalid_json|
|error|json_not_object|
|error|request_timeout|
|error|upgrade_required|
|error|team_added_to_org|
|error|missing_charset|
|error|superfluous_charset|
|ok|false|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
slackAuth ( Scopes: channels:write groups:write im:write mpim:write )
</aside>

## conversations_close

<a id="opIdconversations_close"></a>

> Code samples

```bash
curl https://example.com/conversations.close \
  -X POST \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d 'channel=string'
```

`POST /conversations.close`

Closes a direct message or multi-person direct message.

<a href="https://api.slack.com/methods/conversations.close">API method documentation</a>

> Body parameter

```yaml
channel: string
```

<h3 id="conversationsclose-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|token|header|string|false|Authentication token. Requires scope: `conversations:write`|
|body|body|object|false|none|
|» channel|body|string|false|Conversation to close.|

> Example responses

> 200 Response

```json
{
  "ok": true
}
```

> default Response

```json
{
  "error": "channel_not_found",
  "ok": false
}
```

<h3 id="conversationsclose-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Typical success response|Inline|
|default|Default|Typical error response|Inline|

<h3 id="conversationsclose-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|already_closed|boolean|false|none|none|
|no_op|boolean|false|none|none|
|ok|[defs_ok_true](#schemadefs_ok_true)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|ok|true|

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|callstack|string|false|none|Note: PHP callstack is only visible in dev/qa|
|error|string|true|none|none|
|needed|string|false|none|none|
|ok|[defs_ok_false](#schemadefs_ok_false)|true|none|none|
|provided|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|error|method_not_supported_for_channel_type|
|error|channel_not_found|
|error|user_does_not_own_channel|
|error|missing_scope|
|error|not_authed|
|error|invalid_auth|
|error|account_inactive|
|error|invalid_arg_name|
|error|invalid_array_arg|
|error|invalid_charset|
|error|invalid_form_data|
|error|invalid_post_type|
|error|missing_post_type|
|error|team_added_to_org|
|error|invalid_json|
|error|json_not_object|
|error|request_timeout|
|error|upgrade_required|
|ok|false|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
slackAuth ( Scopes: channels:write groups:write im:write mpim:write )
</aside>

## conversations_create

<a id="opIdconversations_create"></a>

> Code samples

```bash
curl https://example.com/conversations.create \
  -X POST \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d 'is_private=true&name=string'
```

`POST /conversations.create`

Initiates a public or private channel-based conversation

<a href="https://api.slack.com/methods/conversations.create">API method documentation</a>

> Body parameter

```yaml
is_private: true
name: string
```

<h3 id="conversationscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|token|header|string|false|Authentication token. Requires scope: `conversations:write`|
|body|body|object|false|none|
|» is_private|body|boolean|false|Create a private channel instead of a public one|
|» name|body|string|false|Name of the public or private channel to create|

> Example responses

> 200 Response

```json
{
  "channel": {
    "created": 1504554479,
    "creator": "U0123456",
    "id": "C0EAQDV4Z",
    "is_archived": false,
    "is_channel": true,
    "is_ext_shared": false,
    "is_general": false,
    "is_group": false,
    "is_im": false,
    "is_member": true,
    "is_mpim": false,
    "is_org_shared": false,
    "is_pending_ext_shared": false,
    "is_private": false,
    "is_shared": false,
    "last_read": "0000000000.000000",
    "latest": null,
    "name": "endeavor",
    "name_normalized": "endeavor",
    "pending_shared": [],
    "previous_names": [],
    "priority": 0,
    "purpose": {
      "creator": "",
      "last_set": 0,
      "value": ""
    },
    "topic": {
      "creator": "",
      "last_set": 0,
      "value": ""
    },
    "unlinked": 0,
    "unread_count": 0,
    "unread_count_display": 0
  },
  "ok": true
}
```

> default Response

```json
{
  "error": "name_taken",
  "ok": false
}
```

<h3 id="conversationscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|If successful, the command returns a rather stark [conversation object](/types/conversation)|Inline|
|default|Default|Typical error response when name already in use|Inline|

<h3 id="conversationscreate-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|channel|[objs_conversation](#schemaobjs_conversation)|true|none|none|
|ok|[defs_ok_true](#schemadefs_ok_true)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|ok|true|

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|callstack|string|false|none|Note: PHP callstack is only visible in dev/qa|
|detail|string|false|none|none|
|error|string|true|none|none|
|needed|string|false|none|none|
|ok|[defs_ok_false](#schemadefs_ok_false)|true|none|none|
|provided|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|error|method_not_supported_for_channel_type|
|error|missing_scope|
|error|name_taken|
|error|restricted_action|
|error|no_channel|
|error|invalid_name_required|
|error|invalid_name_punctuation|
|error|invalid_name_maxlength|
|error|invalid_name_specials|
|error|invalid_name|
|error|not_authed|
|error|invalid_auth|
|error|account_inactive|
|error|user_is_bot|
|error|user_is_restricted|
|error|invalid_arg_name|
|error|invalid_array_arg|
|error|invalid_charset|
|error|invalid_form_data|
|error|invalid_post_type|
|error|missing_post_type|
|error|team_added_to_org|
|error|invalid_json|
|error|json_not_object|
|error|request_timeout|
|error|upgrade_required|
|ok|false|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
slackAuth ( Scopes: channels:write groups:write im:write mpim:write )
</aside>

## conversations_history

<a id="opIdconversations_history"></a>

> Code samples

```bash
curl https://example.com/conversations.history \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /conversations.history`

Fetches a conversation's history of messages and events.

<a href="https://api.slack.com/methods/conversations.history">API method documentation</a>

<h3 id="conversationshistory-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|token|query|string|false|Authentication token. Requires scope: `conversations:history`|
|channel|query|string|false|Conversation ID to fetch history for.|
|latest|query|number|false|End of time range of messages to include in results.|
|oldest|query|number|false|Start of time range of messages to include in results.|
|inclusive|query|boolean|false|Include messages with latest or oldest timestamp in results only when either timestamp is specified.|
|limit|query|integer|false|The maximum number of items to return. Fewer than the requested number of items may be returned, even if the end of the users list hasn't been reached.|
|cursor|query|string|false|Paginate through collections of data by setting the `cursor` parameter to a `next_cursor` attribute returned by a previous request's `response_metadata`. Default value fetches the first "page" of the collection. See [pagination](/docs/pagination) for more detail.|

> Example responses

> 200 Response

```json
{
  "has_more": true,
  "messages": [
    {
      "text": "I find you punny and would like to smell your nose letter",
      "ts": "1512085950.000216",
      "type": "message",
      "user": "U012AB3CDE"
    },
    {
      "text": "What, you want to smell my shoes better?",
      "ts": "1512104434.000490",
      "type": "message",
      "user": "U061F7AUR"
    }
  ],
  "ok": true,
  "pin_count": 0,
  "response_metadata": {
    "next_cursor": "bmV4dF90czoxNTEyMDg1ODYxMDAwNTQz"
  }
}
```

> default Response

```json
{
  "error": "channel_not_found",
  "ok": false
}
```

<h3 id="conversationshistory-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Typical success response containing a channel's messages|Inline|
|default|Default|Typical error response|Inline|

<h3 id="conversationshistory-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|channel_actions_count|integer|true|none|none|
|channel_actions_ts|[integer \| object \| null]|true|none|none|
|» *anyOf*|integer|false|none|none|
|» *anyOf*|object \| null|false|none|none|
|has_more|boolean|true|none|none|
|messages|[[objs_message](#schemaobjs_message)]|true|none|none|
|ok|[defs_ok_true](#schemadefs_ok_true)|true|none|none|
|pin_count|integer|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|ok|true|

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|callstack|string|false|none|Note: PHP callstack is only visible in dev/qa|
|error|string|true|none|none|
|needed|string|false|none|none|
|ok|[defs_ok_false](#schemadefs_ok_false)|true|none|none|
|provided|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|error|missing_scope|
|error|channel_not_found|
|error|invalid_ts_latest|
|error|invalid_ts_oldest|
|error|not_authed|
|error|invalid_auth|
|error|account_inactive|
|error|invalid_arg_name|
|error|invalid_array_arg|
|error|invalid_charset|
|error|invalid_form_data|
|error|invalid_post_type|
|error|missing_post_type|
|error|invalid_json|
|error|json_not_object|
|error|request_timeout|
|error|upgrade_required|
|ok|false|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
slackAuth ( Scopes: channels:history groups:history im:history mpim:history )
</aside>

## conversations_info

<a id="opIdconversations_info"></a>

> Code samples

```bash
curl https://example.com/conversations.info \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /conversations.info`

Retrieve information about a conversation.

<a href="https://api.slack.com/methods/conversations.info">API method documentation</a>

<h3 id="conversationsinfo-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|token|query|string|false|Authentication token. Requires scope: `conversations:read`|
|channel|query|string|false|Conversation ID to learn more about|
|include_locale|query|boolean|false|Set this to `true` to receive the locale for this conversation. Defaults to `false`|
|include_num_members|query|boolean|false|Set to `true` to include the member count for the specified conversation. Defaults to `false`|

> Example responses

> 200 Response

```json
{
  "channel": {
    "created": 1449252889,
    "creator": "W012A3BCD",
    "id": "C012AB3CD",
    "is_archived": false,
    "is_channel": true,
    "is_ext_shared": false,
    "is_general": true,
    "is_group": false,
    "is_im": false,
    "is_member": true,
    "is_mpim": false,
    "is_org_shared": false,
    "is_pending_ext_shared": false,
    "is_private": false,
    "is_read_only": false,
    "is_shared": false,
    "last_read": "1502126650.228446",
    "locale": "en-US",
    "name": "general",
    "name_normalized": "general",
    "parent_conversation": null,
    "pending_shared": [],
    "previous_names": [
      "specifics",
      "abstractions",
      "etc"
    ],
    "purpose": {
      "creator": "W012A3BCD",
      "last_set": 1449709364,
      "value": "This part of the workspace is for fun. Make fun here."
    },
    "topic": {
      "creator": "W012A3BCD",
      "last_set": 1449709364,
      "value": "For public discussion of generalities"
    },
    "unlinked": 0
  },
  "ok": true
}
```

> default Response

```json
{
  "error": "channel_not_found",
  "ok": false
}
```

<h3 id="conversationsinfo-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Typical success response for a public channel. (Also, a response from a private channel and a multi-party IM is very similar to this example.)|Inline|
|default|Default|Typical error response when a channel cannot be found|Inline|

<h3 id="conversationsinfo-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|channel|[objs_conversation](#schemaobjs_conversation)|true|none|none|
|ok|[defs_ok_true](#schemadefs_ok_true)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|ok|true|

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|callstack|string|false|none|Note: PHP callstack is only visible in dev/qa|
|error|string|true|none|none|
|needed|string|false|none|none|
|ok|[defs_ok_false](#schemadefs_ok_false)|true|none|none|
|provided|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|error|missing_scope|
|error|channel_not_found|
|error|team_added_to_org|
|error|not_authed|
|error|invalid_auth|
|error|account_inactive|
|error|invalid_arg_name|
|error|invalid_array_arg|
|error|invalid_charset|
|error|invalid_form_data|
|error|invalid_post_type|
|error|missing_post_type|
|error|invalid_json|
|error|json_not_object|
|error|request_timeout|
|error|upgrade_required|
|ok|false|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
slackAuth ( Scopes: channels:read groups:read im:read mpim:read )
</aside>

## conversations_invite

<a id="opIdconversations_invite"></a>

> Code samples

```bash
curl https://example.com/conversations.invite \
  -X POST \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d 'channel=string&users=string'
```

`POST /conversations.invite`

Invites users to a channel.

<a href="https://api.slack.com/methods/conversations.invite">API method documentation</a>

> Body parameter

```yaml
channel: string
users: string
```

<h3 id="conversationsinvite-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|token|header|string|false|Authentication token. Requires scope: `conversations:write`|
|body|body|object|false|none|
|» channel|body|string|false|The ID of the public or private channel to invite user(s) to.|
|» users|body|string|false|A comma separated list of user IDs. Up to 1000 users may be listed.|

> Example responses

> 200 Response

```json
{
  "channel": {
    "created": 1449252889,
    "creator": "W012A3BCD",
    "id": "C012AB3CD",
    "is_archived": false,
    "is_channel": true,
    "is_ext_shared": false,
    "is_general": true,
    "is_group": false,
    "is_im": false,
    "is_member": true,
    "is_mpim": false,
    "is_org_shared": false,
    "is_pending_ext_shared": false,
    "is_private": false,
    "is_read_only": false,
    "is_shared": false,
    "last_read": "1502126650.228446",
    "locale": "en-US",
    "name": "general",
    "name_normalized": "general",
    "num_members": 23,
    "pending_shared": [],
    "previous_names": [
      "specifics",
      "abstractions",
      "etc"
    ],
    "purpose": {
      "creator": "W012A3BCD",
      "last_set": 1449709364,
      "value": "This part of the workspace is for fun. Make fun here."
    },
    "topic": {
      "creator": "W012A3BCD",
      "last_set": 1449709364,
      "value": "For public discussion of generalities"
    },
    "unlinked": 0
  },
  "ok": true
}
```

> default Response

```json
{
  "error": "method_not_supported_for_channel_type",
  "ok": false
}
```

<h3 id="conversationsinvite-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Typical success response when an invitation is extended|Inline|
|default|Default|Typical error response when an invite is attempted on a conversation type that does not support it|Inline|

<h3 id="conversationsinvite-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|channel|[objs_conversation](#schemaobjs_conversation)|true|none|none|
|ok|[defs_ok_true](#schemadefs_ok_true)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|ok|true|

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|callstack|string|false|none|Note: PHP callstack is only visible in dev/qa|
|error|string|false|none|none|
|errors|[object]|false|none|none|
|» error|string|true|none|none|
|» ok|[defs_ok_false](#schemadefs_ok_false)|true|none|none|
|» user|[defs_user_id](#schemadefs_user_id)|false|none|none|
|needed|string|false|none|none|
|ok|[defs_ok_false](#schemadefs_ok_false)|true|none|none|
|provided|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|error|method_not_supported_for_channel_type|
|error|missing_scope|
|error|channel_not_found|
|error|user_not_found|
|error|no_user|
|error|cant_invite_self|
|error|not_in_channel|
|error|already_in_channel|
|error|is_archived|
|error|cant_invite|
|error|too_many_users|
|error|ura_max_channels|
|error|not_authed|
|error|invalid_auth|
|error|account_inactive|
|error|user_is_bot|
|error|user_is_restricted|
|error|user_is_ultra_restricted|
|error|invalid_arg_name|
|error|invalid_array_arg|
|error|invalid_charset|
|error|invalid_form_data|
|error|invalid_post_type|
|error|missing_post_type|
|error|invalid_json|
|error|json_not_object|
|error|request_timeout|
|error|upgrade_required|
|error|team_added_to_org|
|error|missing_charset|
|error|superfluous_charset|
|» error|method_not_supported_for_channel_type|
|» error|missing_scope|
|» error|channel_not_found|
|» error|user_not_found|
|» error|no_user|
|» error|cant_invite_self|
|» error|not_in_channel|
|» error|already_in_channel|
|» error|is_archived|
|» error|cant_invite|
|» error|too_many_users|
|» error|ura_max_channels|
|» error|not_authed|
|» error|invalid_auth|
|» error|account_inactive|
|» error|user_is_bot|
|» error|user_is_restricted|
|» error|user_is_ultra_restricted|
|» error|invalid_arg_name|
|» error|invalid_array_arg|
|» error|invalid_charset|
|» error|invalid_form_data|
|» error|invalid_post_type|
|» error|missing_post_type|
|» error|invalid_json|
|» error|json_not_object|
|» error|request_timeout|
|» error|upgrade_required|
|» error|team_added_to_org|
|» error|missing_charset|
|» error|superfluous_charset|
|» ok|false|
|ok|false|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
slackAuth ( Scopes: channels:write groups:write im:write mpim:write )
</aside>

## conversations_join

<a id="opIdconversations_join"></a>

> Code samples

```bash
curl https://example.com/conversations.join \
  -X POST \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d 'channel=string'
```

`POST /conversations.join`

Joins an existing conversation.

<a href="https://api.slack.com/methods/conversations.join">API method documentation</a>

> Body parameter

```yaml
channel: string
```

<h3 id="conversationsjoin-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|token|header|string|false|Authentication token. Requires scope: `channels:write`|
|body|body|object|false|none|
|» channel|body|string|false|ID of conversation to join|

> Example responses

> 200 Response

```json
{
  "channel": {
    "created": 1449252889,
    "creator": "U061F7AUR",
    "id": "C061EG9SL",
    "is_archived": false,
    "is_channel": true,
    "is_ext_shared": false,
    "is_general": true,
    "is_group": false,
    "is_im": false,
    "is_member": true,
    "is_mpim": false,
    "is_org_shared": false,
    "is_pending_ext_shared": false,
    "is_private": false,
    "is_shared": false,
    "name": "general",
    "name_normalized": "general",
    "pending_shared": [],
    "previous_names": [],
    "purpose": {
      "creator": "",
      "last_set": 0,
      "value": "For widget discussion"
    },
    "topic": {
      "creator": "",
      "last_set": 0,
      "value": "Which widget do you worry about?"
    },
    "unlinked": 0
  },
  "ok": true,
  "response_metadata": {
    "warnings": [
      "already_in_channel"
    ]
  },
  "warning": "already_in_channel"
}
```

> default Response

```json
{
  "error": "is_archived",
  "ok": false
}
```

<h3 id="conversationsjoin-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Typical success response|Inline|
|default|Default|Typical error response if the conversation is archived and cannot be joined|Inline|

<h3 id="conversationsjoin-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|channel|[objs_conversation](#schemaobjs_conversation)|true|none|none|
|ok|[defs_ok_true](#schemadefs_ok_true)|true|none|none|
|response_metadata|object|false|none|none|
|» warnings|[string]|false|none|none|
|warning|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|ok|true|

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|callstack|string|false|none|Note: PHP callstack is only visible in dev/qa|
|error|string|true|none|none|
|needed|string|false|none|none|
|ok|[defs_ok_false](#schemadefs_ok_false)|true|none|none|
|provided|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|error|method_not_supported_for_channel_type|
|error|missing_scope|
|error|channel_not_found|
|error|is_archived|
|error|not_authed|
|error|invalid_auth|
|error|account_inactive|
|error|user_is_bot|
|error|user_is_restricted|
|error|user_is_ultra_restricted|
|error|invalid_arg_name|
|error|invalid_array_arg|
|error|invalid_charset|
|error|invalid_form_data|
|error|invalid_post_type|
|error|missing_post_type|
|error|invalid_json|
|error|json_not_object|
|error|request_timeout|
|error|upgrade_required|
|error|team_added_to_org|
|error|missing_charset|
|error|superfluous_charset|
|ok|false|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
slackAuth ( Scopes: channels:write )
</aside>

## conversations_kick

<a id="opIdconversations_kick"></a>

> Code samples

```bash
curl https://example.com/conversations.kick \
  -X POST \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d 'channel=string&user=string'
```

`POST /conversations.kick`

Removes a user from a conversation.

<a href="https://api.slack.com/methods/conversations.kick">API method documentation</a>

> Body parameter

```yaml
channel: string
user: string
```

<h3 id="conversationskick-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|token|header|string|false|Authentication token. Requires scope: `conversations:write`|
|body|body|object|false|none|
|» channel|body|string|false|ID of conversation to remove user from.|
|» user|body|string|false|User ID to be removed.|

> Example responses

> 200 Response

```json
{
  "ok": true
}
```

> default Response

```json
{
  "error": "cant_kick_self",
  "ok": false
}
```

<h3 id="conversationskick-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Typical success response|Inline|
|default|Default|Typical error response when you attempt to kick yourself from a channel|Inline|

<h3 id="conversationskick-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|[defs_ok_true](#schemadefs_ok_true)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|ok|true|

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|callstack|string|false|none|Note: PHP callstack is only visible in dev/qa|
|error|string|true|none|none|
|needed|string|false|none|none|
|ok|[defs_ok_false](#schemadefs_ok_false)|true|none|none|
|provided|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|error|method_not_supported_for_channel_type|
|error|missing_scope|
|error|channel_not_found|
|error|user_not_found|
|error|cant_kick_self|
|error|not_in_channel|
|error|cant_kick_from_general|
|error|restricted_action|
|error|not_authed|
|error|invalid_auth|
|error|account_inactive|
|error|user_is_bot|
|error|user_is_restricted|
|error|invalid_arg_name|
|error|invalid_array_arg|
|error|invalid_charset|
|error|invalid_form_data|
|error|invalid_post_type|
|error|missing_post_type|
|error|invalid_json|
|error|json_not_object|
|error|request_timeout|
|error|upgrade_required|
|ok|false|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
slackAuth ( Scopes: channels:write groups:write im:write mpim:write )
</aside>

## conversations_leave

<a id="opIdconversations_leave"></a>

> Code samples

```bash
curl https://example.com/conversations.leave \
  -X POST \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d 'channel=string'
```

`POST /conversations.leave`

Leaves a conversation.

<a href="https://api.slack.com/methods/conversations.leave">API method documentation</a>

> Body parameter

```yaml
channel: string
```

<h3 id="conversationsleave-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|token|header|string|false|Authentication token. Requires scope: `conversations:write`|
|body|body|object|false|none|
|» channel|body|string|false|Conversation to leave|

> Example responses

> 200 Response

```json
{
  "ok": true
}
```

> default Response

```json
{
  "error": "cant_leave_general",
  "ok": false
}
```

<h3 id="conversationsleave-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Typical success response|Inline|
|default|Default|Typical error response when attempting to leave a workspace's "general" channel|Inline|

<h3 id="conversationsleave-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|not_in_channel|boolean|false|none|none|
|ok|[defs_ok_true](#schemadefs_ok_true)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|not_in_channel|true|
|ok|true|

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|callstack|string|false|none|Note: PHP callstack is only visible in dev/qa|
|error|string|true|none|none|
|needed|string|false|none|none|
|ok|[defs_ok_false](#schemadefs_ok_false)|true|none|none|
|provided|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|error|method_not_supported_for_channel_type|
|error|last_member|
|error|missing_scope|
|error|channel_not_found|
|error|is_archived|
|error|cant_leave_general|
|error|not_authed|
|error|invalid_auth|
|error|account_inactive|
|error|user_is_bot|
|error|user_is_restricted|
|error|user_is_ultra_restricted|
|error|invalid_arg_name|
|error|invalid_array_arg|
|error|invalid_charset|
|error|invalid_form_data|
|error|invalid_post_type|
|error|missing_post_type|
|error|invalid_json|
|error|json_not_object|
|error|request_timeout|
|error|upgrade_required|
|error|team_added_to_org|
|error|missing_charset|
|error|superfluous_charset|
|ok|false|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
slackAuth ( Scopes: channels:write groups:write im:write mpim:write )
</aside>

## conversations_list

<a id="opIdconversations_list"></a>

> Code samples

```bash
curl https://example.com/conversations.list \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /conversations.list`

Lists all channels in a Slack team.

<a href="https://api.slack.com/methods/conversations.list">API method documentation</a>

<h3 id="conversationslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|token|query|string|false|Authentication token. Requires scope: `conversations:read`|
|exclude_archived|query|boolean|false|Set to `true` to exclude archived channels from the list|
|types|query|string|false|Mix and match channel types by providing a comma-separated list of any combination of `public_channel`, `private_channel`, `mpim`, `im`|
|limit|query|integer|false|The maximum number of items to return. Fewer than the requested number of items may be returned, even if the end of the list hasn't been reached. Must be an integer no larger than 1000.|
|cursor|query|string|false|Paginate through collections of data by setting the `cursor` parameter to a `next_cursor` attribute returned by a previous request's `response_metadata`. Default value fetches the first "page" of the collection. See [pagination](/docs/pagination) for more detail.|

> Example responses

> 200 Response

```json
{
  "channels": [
    {
      "created": 1449252889,
      "creator": "U012A3CDE",
      "id": "C012AB3CD",
      "is_archived": false,
      "is_channel": true,
      "is_ext_shared": false,
      "is_general": true,
      "is_group": false,
      "is_im": false,
      "is_member": true,
      "is_mpim": false,
      "is_org_shared": false,
      "is_pending_ext_shared": false,
      "is_private": false,
      "is_shared": false,
      "name": "general",
      "name_normalized": "general",
      "num_members": 4,
      "pending_shared": [],
      "previous_names": [],
      "purpose": {
        "creator": "",
        "last_set": 0,
        "value": "This channel is for team-wide communication and announcements. All team members are in this channel."
      },
      "topic": {
        "creator": "",
        "last_set": 0,
        "value": "Company-wide announcements and work-based matters"
      },
      "unlinked": 0
    },
    {
      "created": 1449252889,
      "creator": "U061F7AUR",
      "id": "C061EG9T2",
      "is_archived": false,
      "is_channel": true,
      "is_ext_shared": false,
      "is_general": false,
      "is_group": false,
      "is_im": false,
      "is_member": true,
      "is_mpim": false,
      "is_org_shared": false,
      "is_pending_ext_shared": false,
      "is_private": false,
      "is_shared": false,
      "name": "random",
      "name_normalized": "random",
      "num_members": 4,
      "pending_shared": [],
      "previous_names": [],
      "purpose": {
        "creator": "",
        "last_set": 0,
        "value": "A place for non-work-related flimflam, faffing, hodge-podge or jibber-jabber you'd prefer to keep out of more focused work-related channels."
      },
      "topic": {
        "creator": "",
        "last_set": 0,
        "value": "Non-work banter and water cooler conversation"
      },
      "unlinked": 0
    }
  ],
  "ok": true,
  "response_metadata": {
    "next_cursor": "dGVhbTpDMDYxRkE1UEI="
  }
}
```

> default Response

```json
{
  "error": "invalid_auth",
  "ok": false
}
```

<h3 id="conversationslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Typical success response with only public channels|Inline|
|default|Default|Typical error response|Inline|

<h3 id="conversationslist-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|channels|[[objs_conversation](#schemaobjs_conversation)]|true|none|none|
|ok|[defs_ok_true](#schemadefs_ok_true)|true|none|none|
|response_metadata|object|false|none|none|
|» next_cursor|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|ok|true|

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|callstack|string|false|none|Note: PHP callstack is only visible in dev/qa|
|error|string|true|none|none|
|needed|string|false|none|none|
|ok|[defs_ok_false](#schemadefs_ok_false)|true|none|none|
|provided|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|error|missing_scope|
|error|not_authed|
|error|invalid_auth|
|error|account_inactive|
|error|invalid_arg_name|
|error|invalid_array_arg|
|error|invalid_charset|
|error|invalid_form_data|
|error|invalid_post_type|
|error|missing_post_type|
|error|invalid_json|
|error|json_not_object|
|error|request_timeout|
|error|upgrade_required|
|ok|false|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
slackAuth ( Scopes: channels:read groups:read im:read mpim:read )
</aside>

## conversations_mark

<a id="opIdconversations_mark"></a>

> Code samples

```bash
curl https://example.com/conversations.mark \
  -X POST \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d 'channel=string&ts=0'
```

`POST /conversations.mark`

Sets the read cursor in a channel.

<a href="https://api.slack.com/methods/conversations.mark">API method documentation</a>

> Body parameter

```yaml
channel: string
ts: 0
```

<h3 id="conversationsmark-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|token|header|string|false|Authentication token. Requires scope: `conversations:write`|
|body|body|object|false|none|
|» channel|body|string|false|Channel or conversation to set the read cursor for.|
|» ts|body|number|false|Unique identifier of message you want marked as most recently seen in this conversation.|

> Example responses

> 200 Response

```json
{
  "ok": true
}
```

> default Response

```json
{
  "error": "invalid_auth",
  "ok": false
}
```

<h3 id="conversationsmark-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Typical success response|Inline|
|default|Default|Typical error response|Inline|

<h3 id="conversationsmark-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|[defs_ok_true](#schemadefs_ok_true)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|ok|true|

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|callstack|string|false|none|Note: PHP callstack is only visible in dev/qa|
|error|string|true|none|none|
|needed|string|false|none|none|
|ok|[defs_ok_false](#schemadefs_ok_false)|true|none|none|
|provided|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|error|method_not_supported_for_channel_type|
|error|missing_scope|
|error|channel_not_found|
|error|invalid_timestamp|
|error|not_in_channel|
|error|not_authed|
|error|invalid_auth|
|error|account_inactive|
|error|invalid_arg_name|
|error|invalid_array_arg|
|error|invalid_charset|
|error|invalid_form_data|
|error|invalid_post_type|
|error|missing_post_type|
|error|invalid_json|
|error|json_not_object|
|error|request_timeout|
|error|upgrade_required|
|error|not_allowed_token_type|
|ok|false|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
slackAuth ( Scopes: channels:write groups:write im:write mpim:write )
</aside>

## conversations_members

<a id="opIdconversations_members"></a>

> Code samples

```bash
curl https://example.com/conversations.members \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /conversations.members`

Retrieve members of a conversation.

<a href="https://api.slack.com/methods/conversations.members">API method documentation</a>

<h3 id="conversationsmembers-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|token|query|string|false|Authentication token. Requires scope: `conversations:read`|
|channel|query|string|false|ID of the conversation to retrieve members for|
|limit|query|integer|false|The maximum number of items to return. Fewer than the requested number of items may be returned, even if the end of the users list hasn't been reached.|
|cursor|query|string|false|Paginate through collections of data by setting the `cursor` parameter to a `next_cursor` attribute returned by a previous request's `response_metadata`. Default value fetches the first "page" of the collection. See [pagination](/docs/pagination) for more detail.|

> Example responses

> 200 Response

```json
{
  "members": [
    "U023BECGF",
    "U061F7AUR",
    "W012A3CDE"
  ],
  "ok": true,
  "response_metadata": {
    "next_cursor": "e3VzZXJfaWQ6IFcxMjM0NTY3fQ=="
  }
}
```

> default Response

```json
{
  "error": "invalid_cursor",
  "ok": false
}
```

<h3 id="conversationsmembers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Typical paginated success response|Inline|
|default|Default|Typical error response when an invalid cursor is provided|Inline|

<h3 id="conversationsmembers-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|members|[[defs_user_id](#schemadefs_user_id)]|true|none|none|
|ok|[defs_ok_true](#schemadefs_ok_true)|true|none|none|
|response_metadata|object|true|none|none|
|» next_cursor|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|ok|true|

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|callstack|string|false|none|Note: PHP callstack is only visible in dev/qa|
|error|string|true|none|none|
|ok|[defs_ok_false](#schemadefs_ok_false)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|error|channel_not_found|
|error|invalid_limit|
|error|invalid_cursor|
|error|fetch_members_failed|
|error|not_authed|
|error|invalid_auth|
|error|account_inactive|
|error|invalid_arg_name|
|error|invalid_array_arg|
|error|invalid_charset|
|error|invalid_form_data|
|error|invalid_post_type|
|error|missing_post_type|
|error|team_added_to_org|
|error|invalid_json|
|error|json_not_object|
|error|request_timeout|
|error|upgrade_required|
|ok|false|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
slackAuth ( Scopes: channels:read groups:read im:read mpim:read )
</aside>

## conversations_open

<a id="opIdconversations_open"></a>

> Code samples

```bash
curl https://example.com/conversations.open \
  -X POST \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d 'channel=string&return_im=true&users=string'
```

`POST /conversations.open`

Opens or resumes a direct message or multi-person direct message.

<a href="https://api.slack.com/methods/conversations.open">API method documentation</a>

> Body parameter

```yaml
channel: string
return_im: true
users: string
```

<h3 id="conversationsopen-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|token|header|string|false|Authentication token. Requires scope: `conversations:write`|
|body|body|object|false|none|
|» channel|body|string|false|Resume a conversation by supplying an `im` or `mpim`'s ID. Or provide the `users` field instead.|
|» return_im|body|boolean|false|Boolean, indicates you want the full IM channel definition in the response.|
|» users|body|string|false|Comma separated lists of users. If only one user is included, this creates a 1:1 DM.  The ordering of the users is preserved whenever a multi-person direct message is returned. Supply a `channel` when not supplying `users`.|

> Example responses

> 200 Response

```json
{
  "channel": {
    "id": "D069C7QFK"
  },
  "ok": true
}
```

> default Response

```json
{
  "error": "channel_not_found",
  "ok": false
}
```

<h3 id="conversationsopen-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Typical success response|Inline|
|default|Default|Typical error response|Inline|

<h3 id="conversationsopen-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|already_open|boolean|false|none|none|
|channel|[[objs_conversation](#schemaobjs_conversation) \| object]|true|none|none|
|» *anyOf*|[objs_conversation](#schemaobjs_conversation)|false|none|none|
|» *anyOf*|object|false|none|none|
|» created|string|false|none|none|
|» id|[defs_dm_id](#schemadefs_dm_id)|true|none|none|
|» is_im|boolean|false|none|none|
|» is_open|boolean|false|none|none|
|» last_read|[defs_ts](#schemadefs_ts)|false|none|none|
|» latest|[objs_message](#schemaobjs_message)|false|none|none|
|» unread_count|number|false|none|none|
|» unread_count_display|number|false|none|none|
|» user|[defs_user_id](#schemadefs_user_id)|false|none|none|
|no_op|boolean|false|none|none|
|ok|[defs_ok_true](#schemadefs_ok_true)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|ok|true|

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|callstack|string|false|none|Note: PHP callstack is only visible in dev/qa|
|error|string|true|none|none|
|ok|[defs_ok_false](#schemadefs_ok_false)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|error|method_not_supported_for_channel_type|
|error|user_not_found|
|error|user_not_visible|
|error|user_disabled|
|error|users_list_not_supplied|
|error|not_enough_users|
|error|too_many_users|
|error|invalid_user_combination|
|error|not_authed|
|error|invalid_auth|
|error|account_inactive|
|error|invalid_arg_name|
|error|invalid_array_arg|
|error|invalid_charset|
|error|invalid_form_data|
|error|invalid_post_type|
|error|missing_post_type|
|error|team_added_to_org|
|error|invalid_json|
|error|json_not_object|
|error|request_timeout|
|error|upgrade_required|
|error|channel_not_found|
|ok|false|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
slackAuth ( Scopes: channels:write groups:write im:write mpim:write )
</aside>

## conversations_rename

<a id="opIdconversations_rename"></a>

> Code samples

```bash
curl https://example.com/conversations.rename \
  -X POST \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d 'channel=string&name=string'
```

`POST /conversations.rename`

Renames a conversation.

<a href="https://api.slack.com/methods/conversations.rename">API method documentation</a>

> Body parameter

```yaml
channel: string
name: string
```

<h3 id="conversationsrename-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|token|header|string|false|Authentication token. Requires scope: `conversations:write`|
|body|body|object|false|none|
|» channel|body|string|false|ID of conversation to rename|
|» name|body|string|false|New name for conversation.|

> Example responses

> 200 Response

```json
{
  "channel": {
    "created": 1449252889,
    "creator": "W012A3BCD",
    "id": "C012AB3CD",
    "is_archived": false,
    "is_channel": true,
    "is_ext_shared": false,
    "is_general": true,
    "is_group": false,
    "is_im": false,
    "is_member": true,
    "is_mpim": false,
    "is_org_shared": false,
    "is_pending_ext_shared": false,
    "is_private": false,
    "is_read_only": false,
    "is_shared": false,
    "last_read": "1502126650.228446",
    "locale": "en-US",
    "name": "general",
    "name_normalized": "general",
    "num_members": 23,
    "pending_shared": [],
    "previous_names": [
      "specifics",
      "abstractions",
      "etc"
    ],
    "purpose": {
      "creator": "W012A3BCD",
      "last_set": 1449709364,
      "value": "This part of the workspace is for fun. Make fun here."
    },
    "topic": {
      "creator": "W012A3BCD",
      "last_set": 1449709364,
      "value": "For public discussion of generalities"
    },
    "unlinked": 0
  },
  "ok": true
}
```

> default Response

```json
{
  "error": "not_in_channel",
  "ok": false
}
```

<h3 id="conversationsrename-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Typical success response|Inline|
|default|Default|Typical error response when the calling user is not a member of the conversation|Inline|

<h3 id="conversationsrename-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|channel|[objs_conversation](#schemaobjs_conversation)|true|none|none|
|ok|[defs_ok_true](#schemadefs_ok_true)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|ok|true|

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|callstack|string|false|none|Note: PHP callstack is only visible in dev/qa|
|error|string|true|none|none|
|needed|string|false|none|none|
|ok|[defs_ok_false](#schemadefs_ok_false)|true|none|none|
|provided|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|error|user_is_restricted|
|error|method_not_supported_for_channel_type|
|error|missing_scope|
|error|channel_not_found|
|error|not_in_channel|
|error|not_authorized|
|error|invalid_name|
|error|name_taken|
|error|invalid_name_required|
|error|invalid_name_punctuation|
|error|invalid_name_maxlength|
|error|invalid_name_specials|
|error|not_authed|
|error|invalid_auth|
|error|account_inactive|
|error|invalid_arg_name|
|error|invalid_array_arg|
|error|invalid_charset|
|error|invalid_form_data|
|error|invalid_post_type|
|error|missing_post_type|
|error|invalid_json|
|error|json_not_object|
|error|request_timeout|
|error|upgrade_required|
|ok|false|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
slackAuth ( Scopes: channels:write groups:write im:write mpim:write )
</aside>

## conversations_replies

<a id="opIdconversations_replies"></a>

> Code samples

```bash
curl https://example.com/conversations.replies \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /conversations.replies`

Retrieve a thread of messages posted to a conversation

<a href="https://api.slack.com/methods/conversations.replies">API method documentation</a>

<h3 id="conversationsreplies-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|token|query|string|false|Authentication token. Requires scope: `conversations:history`|
|channel|query|string|false|Conversation ID to fetch thread from.|
|ts|query|number|false|Unique identifier of a thread's parent message. `ts` must be the timestamp of an existing message with 0 or more replies. If there are no replies then just the single message referenced by `ts` will return - it is just an ordinary, unthreaded message.|
|latest|query|number|false|End of time range of messages to include in results.|
|oldest|query|number|false|Start of time range of messages to include in results.|
|inclusive|query|boolean|false|Include messages with latest or oldest timestamp in results only when either timestamp is specified.|
|limit|query|integer|false|The maximum number of items to return. Fewer than the requested number of items may be returned, even if the end of the users list hasn't been reached.|
|cursor|query|string|false|Paginate through collections of data by setting the `cursor` parameter to a `next_cursor` attribute returned by a previous request's `response_metadata`. Default value fetches the first "page" of the collection. See [pagination](/docs/pagination) for more detail.|

> Example responses

> 200 Response

```json
{
  "has_more": true,
  "messages": [
    {
      "last_read": "1484678597.521003",
      "reply_count": 3,
      "subscribed": true,
      "text": "island",
      "thread_ts": "1482960137.003543",
      "ts": "1482960137.003543",
      "type": "message",
      "unread_count": 0,
      "user": "U061F7AUR"
    },
    {
      "parent_user_id": "U061F7AUR",
      "text": "one island",
      "thread_ts": "1482960137.003543",
      "ts": "1483037603.017503",
      "type": "message",
      "user": "U061F7AUR"
    },
    {
      "parent_user_id": "U061F7AUR",
      "text": "two island",
      "thread_ts": "1482960137.003543",
      "ts": "1483051909.018632",
      "type": "message",
      "user": "U061F7AUR"
    },
    {
      "parent_user_id": "U061F7AUR",
      "text": "three for the land",
      "thread_ts": "1482960137.003543",
      "ts": "1483125339.020269",
      "type": "message",
      "user": "U061F7AUR"
    }
  ],
  "ok": true,
  "response_metadata": {
    "next_cursor": "bmV4dF90czoxNDg0Njc4MjkwNTE3MDkx"
  }
}
```

> default Response

```json
{
  "error": "thread_not_found",
  "ok": false
}
```

<h3 id="conversationsreplies-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Typical success response|Inline|
|default|Default|Typical error response|Inline|

<h3 id="conversationsreplies-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|has_more|boolean|false|none|none|
|messages|[[object]]|true|none|none|
|ok|[defs_ok_true](#schemadefs_ok_true)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|ok|true|

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|callstack|string|false|none|Note: PHP callstack is only visible in dev/qa|
|error|string|true|none|none|
|needed|string|false|none|none|
|ok|[defs_ok_false](#schemadefs_ok_false)|true|none|none|
|provided|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|error|missing_scope|
|error|channel_not_found|
|error|thread_not_found|
|error|not_authed|
|error|invalid_auth|
|error|account_inactive|
|error|invalid_arg_name|
|error|invalid_array_arg|
|error|invalid_charset|
|error|invalid_form_data|
|error|invalid_post_type|
|error|missing_post_type|
|error|team_added_to_org|
|error|invalid_json|
|error|json_not_object|
|error|request_timeout|
|error|upgrade_required|
|ok|false|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
slackAuth ( Scopes: channels:history groups:history im:history mpim:history )
</aside>

## conversations_setPurpose

<a id="opIdconversations_setPurpose"></a>

> Code samples

```bash
curl https://example.com/conversations.setPurpose \
  -X POST \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d 'channel=string&purpose=string'
```

`POST /conversations.setPurpose`

Sets the purpose for a conversation.

<a href="https://api.slack.com/methods/conversations.setPurpose">API method documentation</a>

> Body parameter

```yaml
channel: string
purpose: string
```

<h3 id="conversationssetpurpose-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|token|header|string|false|Authentication token. Requires scope: `conversations:write`|
|body|body|object|false|none|
|» channel|body|string|false|Conversation to set the purpose of|
|» purpose|body|string|false|A new, specialer purpose|

> Example responses

> 200 Response

```json
{
  "ok": true
}
```

> default Response

```json
{
  "error": "invalid_auth",
  "ok": false
}
```

<h3 id="conversationssetpurpose-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Typical success response|Inline|
|default|Default|Typical error response|Inline|

<h3 id="conversationssetpurpose-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|channel|[objs_conversation](#schemaobjs_conversation)|true|none|none|
|ok|[defs_ok_true](#schemadefs_ok_true)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|ok|true|

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|callstack|string|false|none|Note: PHP callstack is only visible in dev/qa|
|error|string|true|none|none|
|needed|string|false|none|none|
|ok|[defs_ok_false](#schemadefs_ok_false)|true|none|none|
|provided|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|error|method_not_supported_for_channel_type|
|error|missing_scope|
|error|channel_not_found|
|error|not_in_channel|
|error|is_archived|
|error|too_long|
|error|user_is_restricted|
|error|not_authed|
|error|invalid_auth|
|error|account_inactive|
|error|invalid_arg_name|
|error|invalid_array_arg|
|error|invalid_charset|
|error|invalid_form_data|
|error|invalid_post_type|
|error|missing_post_type|
|error|team_added_to_org|
|error|invalid_json|
|error|json_not_object|
|error|request_timeout|
|error|upgrade_required|
|ok|false|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
slackAuth ( Scopes: channels:write groups:write im:write mpim:write )
</aside>

## conversations_setTopic

<a id="opIdconversations_setTopic"></a>

> Code samples

```bash
curl https://example.com/conversations.setTopic \
  -X POST \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d 'channel=string&topic=string'
```

`POST /conversations.setTopic`

Sets the topic for a conversation.

<a href="https://api.slack.com/methods/conversations.setTopic">API method documentation</a>

> Body parameter

```yaml
channel: string
topic: string
```

<h3 id="conversationssettopic-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|token|header|string|false|Authentication token. Requires scope: `conversations:write`|
|body|body|object|false|none|
|» channel|body|string|false|Conversation to set the topic of|
|» topic|body|string|false|The new topic string. Does not support formatting or linkification.|

> Example responses

> 200 Response

```json
{
  "ok": true
}
```

> default Response

```json
{
  "error": "invalid_auth",
  "ok": false
}
```

<h3 id="conversationssettopic-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Typical success response|Inline|
|default|Default|Typical error response|Inline|

<h3 id="conversationssettopic-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|channel|[objs_conversation](#schemaobjs_conversation)|true|none|none|
|ok|[defs_ok_true](#schemadefs_ok_true)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|ok|true|

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|callstack|string|false|none|Note: PHP callstack is only visible in dev/qa|
|error|string|true|none|none|
|needed|string|false|none|none|
|ok|[defs_ok_false](#schemadefs_ok_false)|true|none|none|
|provided|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|error|method_not_supported_for_channel_type|
|error|missing_scope|
|error|channel_not_found|
|error|not_in_channel|
|error|is_archived|
|error|too_long|
|error|user_is_restricted|
|error|not_authed|
|error|invalid_auth|
|error|account_inactive|
|error|invalid_arg_name|
|error|invalid_array_arg|
|error|invalid_charset|
|error|invalid_form_data|
|error|invalid_post_type|
|error|missing_post_type|
|error|team_added_to_org|
|error|invalid_json|
|error|json_not_object|
|error|request_timeout|
|error|upgrade_required|
|ok|false|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
slackAuth ( Scopes: channels:write groups:write im:write mpim:write )
</aside>

## conversations_unarchive

<a id="opIdconversations_unarchive"></a>

> Code samples

```bash
curl https://example.com/conversations.unarchive \
  -X POST \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d 'channel=string'
```

`POST /conversations.unarchive`

Reverses conversation archival.

<a href="https://api.slack.com/methods/conversations.unarchive">API method documentation</a>

> Body parameter

```yaml
channel: string
```

<h3 id="conversationsunarchive-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|token|header|string|false|Authentication token. Requires scope: `conversations:write`|
|body|body|object|false|none|
|» channel|body|string|false|ID of conversation to unarchive|

> Example responses

> 200 Response

```json
{
  "ok": true
}
```

> default Response

```json
{
  "error": "channel_not_found",
  "ok": false
}
```

<h3 id="conversationsunarchive-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Typical success response|Inline|
|default|Default|Typical error response|Inline|

<h3 id="conversationsunarchive-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|[defs_ok_true](#schemadefs_ok_true)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|ok|true|

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|callstack|string|false|none|Note: PHP callstack is only visible in dev/qa|
|error|string|true|none|none|
|needed|string|false|none|none|
|ok|[defs_ok_false](#schemadefs_ok_false)|true|none|none|
|provided|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|error|method_not_supported_for_channel_type|
|error|missing_scope|
|error|channel_not_found|
|error|not_archived|
|error|not_authed|
|error|invalid_auth|
|error|account_inactive|
|error|user_is_bot|
|error|user_is_restricted|
|error|user_is_ultra_restricted|
|error|invalid_arg_name|
|error|invalid_array_arg|
|error|invalid_charset|
|error|invalid_form_data|
|error|invalid_post_type|
|error|missing_post_type|
|error|invalid_json|
|error|json_not_object|
|error|request_timeout|
|error|upgrade_required|
|error|team_added_to_org|
|error|missing_charset|
|error|superfluous_charset|
|ok|false|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
slackAuth ( Scopes: channels:write groups:write im:write mpim:write )
</aside>

<h1 id="slack-web-api-dialog">dialog</h1>

## dialog_open

<a id="opIddialog_open"></a>

> Code samples

```bash
curl 'https://example.com/dialog.open?dialog=string&trigger_id=string' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'token: string'
```

`GET /dialog.open`

Open a dialog with a user

<a href="https://api.slack.com/methods/dialog.open">API method documentation</a>

<h3 id="dialogopen-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|token|header|string|true|Authentication token. Requires scope: `none`|
|dialog|query|string|true|The dialog definition. This must be a JSON-encoded string.|
|trigger_id|query|string|true|Exchange a trigger to post to the user.|

> Example responses

> 200 Response

```json
{
  "ok": true
}
```

> default Response

```json
{
  "error": "missing_trigger",
  "ok": false
}
```

<h3 id="dialogopen-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Typical success response is quite minimal.|Inline|
|default|Default|Typical error response, before getting to any possible validation errors.|Inline|

<h3 id="dialogopen-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|[defs_ok_true](#schemadefs_ok_true)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|ok|true|

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|callstack|string|false|none|Note: PHP callstack is only visible in dev/qa|
|error|string|true|none|none|
|ok|[defs_ok_false](#schemadefs_ok_false)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|error|validation_errors|
|error|missing_trigger|
|error|missing_dialog|
|error|trigger_exchanged|
|error|trigger_expired|
|error|invalid_trigger|
|error|app_missing_action_url|
|error|cannot_create_dialog|
|error|failed_sending_dialog|
|error|not_authed|
|error|invalid_auth|
|error|account_inactive|
|error|token_revoked|
|error|no_permission|
|error|org_login_required|
|error|invalid_arg_name|
|error|invalid_array_arg|
|error|invalid_charset|
|error|invalid_form_data|
|error|invalid_post_type|
|error|missing_post_type|
|error|team_added_to_org|
|error|invalid_json|
|error|json_not_object|
|error|request_timeout|
|error|upgrade_required|
|error|fatal_error|
|ok|false|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
slackAuth ( Scopes: none )
</aside>

<h1 id="slack-web-api-dnd">dnd</h1>

## dnd_endDnd

<a id="opIddnd_endDnd"></a>

> Code samples

```bash
curl https://example.com/dnd.endDnd \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'token: string'
```

`POST /dnd.endDnd`

Ends the current user's Do Not Disturb session immediately.

<a href="https://api.slack.com/methods/dnd.endDnd">API method documentation</a>

<h3 id="dndenddnd-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|token|header|string|true|Authentication token. Requires scope: `dnd:write`|

> Example responses

> 200 Response

```json
{
  "ok": true
}
```

> default Response

```json
{
  "error": "invalid_auth",
  "ok": false
}
```

<h3 id="dndenddnd-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Typical success response|Inline|
|default|Default|Typical error response|Inline|

<h3 id="dndenddnd-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|[defs_ok_true](#schemadefs_ok_true)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|ok|true|

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|callstack|string|false|none|Note: PHP callstack is only visible in dev/qa|
|error|string|true|none|none|
|ok|[defs_ok_false](#schemadefs_ok_false)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|error|unknown_error|
|error|not_authed|
|error|invalid_auth|
|error|account_inactive|
|error|token_revoked|
|error|no_permission|
|error|org_login_required|
|error|user_is_bot|
|error|invalid_arg_name|
|error|invalid_array_arg|
|error|invalid_charset|
|error|invalid_form_data|
|error|invalid_post_type|
|error|missing_post_type|
|error|team_added_to_org|
|error|invalid_json|
|error|json_not_object|
|error|request_timeout|
|error|upgrade_required|
|error|fatal_error|
|ok|false|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
slackAuth ( Scopes: dnd:write )
</aside>

## dnd_endSnooze

<a id="opIddnd_endSnooze"></a>

> Code samples

```bash
curl https://example.com/dnd.endSnooze \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'token: string'
```

`POST /dnd.endSnooze`

Ends the current user's snooze mode immediately.

<a href="https://api.slack.com/methods/dnd.endSnooze">API method documentation</a>

<h3 id="dndendsnooze-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|token|header|string|true|Authentication token. Requires scope: `dnd:write`|

> Example responses

> 200 Response

```json
{
  "ok": true
}
```

> default Response

```json
{
  "error": "invalid_auth",
  "ok": false
}
```

<h3 id="dndendsnooze-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Typical success response|Inline|
|default|Default|Typical error response|Inline|

<h3 id="dndendsnooze-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dnd_enabled|boolean|true|none|none|
|next_dnd_end_ts|integer|true|none|none|
|next_dnd_start_ts|integer|true|none|none|
|ok|[defs_ok_true](#schemadefs_ok_true)|true|none|none|
|snooze_enabled|boolean|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|ok|true|

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|callstack|string|false|none|Note: PHP callstack is only visible in dev/qa|
|error|string|true|none|none|
|ok|[defs_ok_false](#schemadefs_ok_false)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|error|snooze_not_active|
|error|snooze_end_failed|
|error|not_authed|
|error|invalid_auth|
|error|account_inactive|
|error|token_revoked|
|error|no_permission|
|error|org_login_required|
|error|user_is_bot|
|error|invalid_arg_name|
|error|invalid_array_arg|
|error|invalid_charset|
|error|invalid_form_data|
|error|invalid_post_type|
|error|missing_post_type|
|error|team_added_to_org|
|error|invalid_json|
|error|json_not_object|
|error|request_timeout|
|error|upgrade_required|
|error|fatal_error|
|ok|false|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
slackAuth ( Scopes: dnd:write )
</aside>

## dnd_info

<a id="opIddnd_info"></a>

> Code samples

```bash
curl https://example.com/dnd.info \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /dnd.info`

Retrieves a user's current Do Not Disturb status.

<a href="https://api.slack.com/methods/dnd.info">API method documentation</a>

<h3 id="dndinfo-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|token|query|string|false|Authentication token. Requires scope: `dnd:read`|
|user|query|string|false|User to fetch status for (defaults to current user)|

> Example responses

> 200 Response

```json
{
  "ok": true
}
```

> default Response

```json
{
  "error": "invalid_auth",
  "ok": false
}
```

<h3 id="dndinfo-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Typical success response|Inline|
|default|Default|Typical error response|Inline|

<h3 id="dndinfo-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dnd_enabled|boolean|true|none|none|
|next_dnd_end_ts|integer|true|none|none|
|next_dnd_start_ts|integer|true|none|none|
|ok|[defs_ok_true](#schemadefs_ok_true)|true|none|none|
|snooze_enabled|boolean|false|none|none|
|snooze_endtime|integer|false|none|none|
|snooze_remaining|integer|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|ok|true|

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|callstack|string|false|none|Note: PHP callstack is only visible in dev/qa|
|error|string|true|none|none|
|ok|[defs_ok_false](#schemadefs_ok_false)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|error|user_not_found|
|error|not_authed|
|error|invalid_auth|
|error|account_inactive|
|error|token_revoked|
|error|no_permission|
|error|org_login_required|
|error|invalid_arg_name|
|error|invalid_array_arg|
|error|invalid_charset|
|error|invalid_form_data|
|error|invalid_post_type|
|error|missing_post_type|
|error|team_added_to_org|
|error|invalid_json|
|error|json_not_object|
|error|request_timeout|
|error|upgrade_required|
|error|fatal_error|
|ok|false|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
slackAuth ( Scopes: dnd:read )
</aside>

## dnd_setSnooze

<a id="opIddnd_setSnooze"></a>

> Code samples

```bash
curl https://example.com/dnd.setSnooze \
  -X POST \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d 'num_minutes=string&token=string'
```

`POST /dnd.setSnooze`

Turns on Do Not Disturb mode for the current user, or changes its duration.

<a href="https://api.slack.com/methods/dnd.setSnooze">API method documentation</a>

> Body parameter

```yaml
num_minutes: string
token: string
```

<h3 id="dndsetsnooze-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» num_minutes|body|string|true|Number of minutes, from now, to snooze until.|
|» token|body|string|true|Authentication token. Requires scope: `dnd:write`|

> Example responses

> 200 Response

```json
{
  "ok": true
}
```

> default Response

```json
{
  "error": "invalid_auth",
  "ok": false
}
```

<h3 id="dndsetsnooze-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Typical success response|Inline|
|default|Default|Typical error response|Inline|

<h3 id="dndsetsnooze-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|[defs_ok_true](#schemadefs_ok_true)|true|none|none|
|snooze_enabled|boolean|true|none|none|
|snooze_endtime|integer|true|none|none|
|snooze_remaining|integer|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|ok|true|

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|callstack|string|false|none|Note: PHP callstack is only visible in dev/qa|
|error|string|true|none|none|
|ok|[defs_ok_false](#schemadefs_ok_false)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|error|missing_duration|
|error|snooze_failed|
|error|not_authed|
|error|invalid_auth|
|error|account_inactive|
|error|token_revoked|
|error|no_permission|
|error|org_login_required|
|error|user_is_bot|
|error|invalid_arg_name|
|error|invalid_array_arg|
|error|invalid_charset|
|error|invalid_form_data|
|error|invalid_post_type|
|error|missing_post_type|
|error|team_added_to_org|
|error|invalid_json|
|error|json_not_object|
|error|request_timeout|
|error|upgrade_required|
|error|too_long|
|error|fatal_error|
|ok|false|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
slackAuth ( Scopes: dnd:write )
</aside>

## dnd_teamInfo

<a id="opIddnd_teamInfo"></a>

> Code samples

```bash
curl https://example.com/dnd.teamInfo \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /dnd.teamInfo`

Retrieves the Do Not Disturb status for up to 50 users on a team.

<a href="https://api.slack.com/methods/dnd.teamInfo">API method documentation</a>

<h3 id="dndteaminfo-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|token|query|string|false|Authentication token. Requires scope: `dnd:read`|
|users|query|string|false|Comma-separated list of users to fetch Do Not Disturb status for|

> Example responses

> 200 Response

```json
{
  "ok": true,
  "users": {
    "U023BECGF": {
      "dnd_enabled": true,
      "next_dnd_end_ts": 1450423800,
      "next_dnd_start_ts": 1450387800
    },
    "W058CJVAA": {
      "dnd_enabled": false,
      "next_dnd_end_ts": 1,
      "next_dnd_start_ts": 1
    }
  }
}
```

> default Response

```json
{
  "error": "invalid_auth",
  "ok": false
}
```

<h3 id="dndteaminfo-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Typical success response|Inline|
|default|Default|Typical error response|Inline|

<h3 id="dndteaminfo-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|[defs_ok_true](#schemadefs_ok_true)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|ok|true|

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|[defs_ok_false](#schemadefs_ok_false)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|ok|false|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
slackAuth ( Scopes: dnd:read )
</aside>

<h1 id="slack-web-api-emoji">emoji</h1>

## emoji_list

<a id="opIdemoji_list"></a>

> Code samples

```bash
curl 'https://example.com/emoji.list?token=string' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /emoji.list`

Lists custom emoji for a team.

<a href="https://api.slack.com/methods/emoji.list">API method documentation</a>

<h3 id="emojilist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|token|query|string|true|Authentication token. Requires scope: `emoji:read`|

> Example responses

> 200 Response

```json
{
  "ok": true
}
```

> default Response

```json
{
  "error": "invalid_auth",
  "ok": false
}
```

<h3 id="emojilist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Typical success response|Inline|
|default|Default|Typical error response|Inline|

<h3 id="emojilist-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|[defs_ok_true](#schemadefs_ok_true)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|ok|true|

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|[defs_ok_false](#schemadefs_ok_false)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|ok|false|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
slackAuth ( Scopes: emoji:read )
</aside>

<h1 id="slack-web-api-filescomments">files.comments</h1>

## files_comments_delete

<a id="opIdfiles_comments_delete"></a>

> Code samples

```bash
curl https://example.com/files.comments.delete \
  -X POST \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d 'file=string&id=string'
```

`POST /files.comments.delete`

Deletes an existing comment on a file.

<a href="https://api.slack.com/methods/files.comments.delete">API method documentation</a>

> Body parameter

```yaml
file: string
id: string
```

<h3 id="filescommentsdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|token|header|string|false|Authentication token. Requires scope: `files:write:user`|
|body|body|object|false|none|
|» file|body|string|false|File to delete a comment from.|
|» id|body|string|false|The comment to delete.|

> Example responses

> 200 Response

```json
{
  "ok": true
}
```

> default Response

```json
{
  "error": "file_not_found",
  "ok": false
}
```

<h3 id="filescommentsdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Standard success response is very simple|Inline|
|default|Default|Standard failure response when used with an invalid token|Inline|

<h3 id="filescommentsdelete-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|[defs_ok_true](#schemadefs_ok_true)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|ok|true|

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|callstack|string|false|none|Note: PHP callstack is only visible in dev/qa|
|error|string|true|none|none|
|ok|[defs_ok_false](#schemadefs_ok_false)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|error|cant_delete|
|error|comment_not_found|
|error|not_authed|
|error|invalid_auth|
|error|account_inactive|
|error|no_permission|
|error|invalid_arg_name|
|error|invalid_array_arg|
|error|invalid_charset|
|error|invalid_form_data|
|error|invalid_post_type|
|error|missing_post_type|
|error|invalid_json|
|error|json_not_object|
|error|request_timeout|
|error|upgrade_required|
|ok|false|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
slackAuth ( Scopes: files:write:user )
</aside>

<h1 id="slack-web-api-files">files</h1>

## files_delete

<a id="opIdfiles_delete"></a>

> Code samples

```bash
curl https://example.com/files.delete \
  -X POST \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d 'file=string'
```

`POST /files.delete`

Deletes a file.

<a href="https://api.slack.com/methods/files.delete">API method documentation</a>

> Body parameter

```yaml
file: string
```

<h3 id="filesdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|token|header|string|false|Authentication token. Requires scope: `files:write:user`|
|body|body|object|false|none|
|» file|body|string|false|ID of file to delete.|

> Example responses

> 200 Response

```json
{
  "ok": true
}
```

> default Response

```json
{
  "error": "invalid_auth",
  "ok": false
}
```

<h3 id="filesdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Typical success response|Inline|
|default|Default|Typical error response|Inline|

<h3 id="filesdelete-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|[defs_ok_true](#schemadefs_ok_true)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|ok|true|

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|callstack|string|false|none|Note: PHP callstack is only visible in dev/qa|
|error|string|true|none|none|
|ok|[defs_ok_false](#schemadefs_ok_false)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|error|file_not_found|
|error|file_deleted|
|error|cant_delete_file|
|error|not_authed|
|error|invalid_auth|
|error|account_inactive|
|error|no_permission|
|error|invalid_arg_name|
|error|invalid_array_arg|
|error|invalid_charset|
|error|invalid_form_data|
|error|invalid_post_type|
|error|missing_post_type|
|error|team_added_to_org|
|error|invalid_json|
|error|json_not_object|
|error|request_timeout|
|error|upgrade_required|
|ok|false|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
slackAuth ( Scopes: files:write:user )
</aside>

## files_info

<a id="opIdfiles_info"></a>

> Code samples

```bash
curl https://example.com/files.info \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /files.info`

Gets information about a file.

<a href="https://api.slack.com/methods/files.info">API method documentation</a>

<h3 id="filesinfo-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|token|query|string|false|Authentication token. Requires scope: `files:read`|
|file|query|string|false|Specify a file by providing its ID.|
|count|query|string|false|none|
|page|query|string|false|none|
|limit|query|integer|false|The maximum number of items to return. Fewer than the requested number of items may be returned, even if the end of the list hasn't been reached.|
|cursor|query|string|false|Parameter for pagination. File comments are paginated for a single file. Set `cursor` equal to the `next_cursor` attribute returned by the previous request's `response_metadata`. This parameter is optional, but pagination is mandatory: the default value simply fetches the first "page" of the collection of comments. See [pagination](/docs/pagination) for more details.|

> Example responses

> 200 Response

```json
{
  "comments": [],
  "file": {
    "channels": [
      "C0T8SE4AU"
    ],
    "comments_count": 0,
    "created": 1531763342,
    "deanimate_gif": "https://.../tedair_deanimate_gif.png",
    "display_as_bot": false,
    "editable": false,
    "external_type": "",
    "filetype": "gif",
    "groups": [],
    "has_rich_preview": false,
    "id": "F0S43PZDF",
    "image_exif_rotation": 1,
    "ims": [],
    "is_external": false,
    "is_public": true,
    "is_starred": false,
    "mimetype": "image/gif",
    "mode": "hosted",
    "name": "tedair.gif",
    "original_h": 226,
    "original_w": 176,
    "permalink": "https://.../tedair.gif",
    "permalink_public": "https://.../...",
    "pjpeg": "https://.../tedair_pjpeg.jpg",
    "pretty_type": "GIF",
    "public_url_shared": false,
    "shares": {
      "public": {
        "C0T8SE4AU": [
          {
            "channel_name": "file-under",
            "latest_reply": "1531763348.000001",
            "reply_count": 1,
            "reply_users": [
              "U061F7AUR"
            ],
            "reply_users_count": 1,
            "team_id": "T061EG9R6",
            "thread_ts": "1531763273.000015",
            "ts": "1531763348.000001"
          }
        ]
      }
    },
    "size": 137531,
    "thumb_160": "https://.../tedair_=_160.png",
    "thumb_360": "https://.../tedair_360.png",
    "thumb_360_gif": "https://.../tedair_360.gif",
    "thumb_360_h": 226,
    "thumb_360_w": 176,
    "thumb_64": "https://.../tedair_64.png",
    "thumb_80": "https://.../tedair_80.png",
    "timestamp": 1531763342,
    "title": "tedair.gif",
    "url_private": "https://.../tedair.gif",
    "url_private_download": "https://.../tedair.gif",
    "user": "U061F7AUR",
    "username": ""
  },
  "ok": true,
  "response_metadata": {
    "next_cursor": "dGVhbTpDMUg5UkVTR0w="
  }
}
```

> default Response

```json
{
  "error": "invalid_auth",
  "ok": false
}
```

<h3 id="filesinfo-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Typical success response|Inline|
|default|Default|Typical error response|Inline|

<h3 id="filesinfo-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|comments|[objs_comments](#schemaobjs_comments)|true|none|none|
|content_html|object \| null|false|none|none|
|editor|[defs_user_id](#schemadefs_user_id)|false|none|none|
|file|[objs_file](#schemaobjs_file)|true|none|none|
|ok|[defs_ok_true](#schemadefs_ok_true)|true|none|none|
|paging|[objs_paging](#schemaobjs_paging)|false|none|none|
|response_metadata|[objs_response_metadata](#schemaobjs_response_metadata)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|ok|true|

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|callstack|string|false|none|Note: PHP callstack is only visible in dev/qa|
|error|string|true|none|none|
|ok|[defs_ok_false](#schemadefs_ok_false)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|error|file_not_found|
|error|file_deleted|
|error|timezone_count_failed|
|error|not_authed|
|error|invalid_auth|
|error|account_inactive|
|error|no_permission|
|error|invalid_arg_name|
|error|invalid_array_arg|
|error|invalid_charset|
|error|invalid_form_data|
|error|invalid_post_type|
|error|missing_post_type|
|error|team_added_to_org|
|error|invalid_json|
|error|json_not_object|
|error|request_timeout|
|error|upgrade_required|
|ok|false|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
slackAuth ( Scopes: files:read )
</aside>

## files_list

<a id="opIdfiles_list"></a>

> Code samples

```bash
curl https://example.com/files.list \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /files.list`

List for a team, in a channel, or from a user with applied filters.

<a href="https://api.slack.com/methods/files.list">API method documentation</a>

<h3 id="fileslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|token|query|string|false|Authentication token. Requires scope: `files:read`|
|user|query|string|false|Filter files created by a single user.|
|channel|query|string|false|Filter files appearing in a specific channel, indicated by its ID.|
|ts_from|query|number|false|Filter files created after this timestamp (inclusive).|
|ts_to|query|number|false|Filter files created before this timestamp (inclusive).|
|types|query|string|false|Filter files by type ([see below](#file_types)). You can pass multiple values in the types argument, like `types=spaces,snippets`.The default value is `all`, which does not filter the list.|
|count|query|string|false|none|
|page|query|string|false|none|
|show_files_hidden_by_limit|query|boolean|false|Show truncated file info for files hidden due to being too old, and the team who owns the file being over the file limit.|

> Example responses

> 200 Response

```json
{
  "files": [
    {
      "channels": [
        "C0T8SE4AU"
      ],
      "comments_count": 0,
      "created": 1531763254,
      "deanimate_gif": "https://.../billair_deanimate_gif.png",
      "display_as_bot": false,
      "editable": false,
      "external_type": "",
      "filetype": "gif",
      "groups": [],
      "id": "F0S43P1CZ",
      "image_exif_rotation": 1,
      "ims": [],
      "is_external": false,
      "is_public": true,
      "mimetype": "image/gif",
      "mode": "hosted",
      "name": "billair.gif",
      "original_h": 226,
      "original_w": 176,
      "permalink": "https://.../billair.gif",
      "permalink_public": "https://.../...",
      "pjpeg": "https://.../billair_pjpeg.jpg",
      "pretty_type": "GIF",
      "public_url_shared": false,
      "size": 144538,
      "thumb_160": "https://.../billair_=_160.png",
      "thumb_360": "https://.../billair_360.png",
      "thumb_360_gif": "https://.../billair_360.gif",
      "thumb_360_h": 226,
      "thumb_360_w": 176,
      "thumb_64": "https://.../billair_64.png",
      "thumb_80": "https://.../billair_80.png",
      "timestamp": 1531763254,
      "title": "billair.gif",
      "url_private": "https://.../billair.gif",
      "url_private_download": "https://.../billair.gif",
      "user": "U061F7AUR",
      "username": ""
    },
    {
      "channels": [
        "C0T8SE4AU"
      ],
      "comments_count": 0,
      "created": 1531763342,
      "deanimate_gif": "https://.../tedair_deanimate_gif.png",
      "display_as_bot": false,
      "editable": false,
      "external_type": "",
      "filetype": "gif",
      "groups": [],
      "id": "F0S43PZDF",
      "image_exif_rotation": 1,
      "ims": [],
      "is_external": false,
      "is_public": true,
      "mimetype": "image/gif",
      "mode": "hosted",
      "name": "tedair.gif",
      "original_h": 226,
      "original_w": 176,
      "permalink": "https://.../tedair.gif",
      "permalink_public": "https://.../...",
      "pjpeg": "https://.../tedair_pjpeg.jpg",
      "pretty_type": "GIF",
      "public_url_shared": false,
      "size": 137531,
      "thumb_160": "https://.../tedair_=_160.png",
      "thumb_360": "https://.../tedair_360.png",
      "thumb_360_gif": "https://.../tedair_360.gif",
      "thumb_360_h": 226,
      "thumb_360_w": 176,
      "thumb_64": "https://.../tedair_64.png",
      "thumb_80": "https://.../tedair_80.png",
      "timestamp": 1531763342,
      "title": "tedair.gif",
      "url_private": "https://.../tedair.gif",
      "url_private_download": "https://.../tedair.gif",
      "user": "U061F7AUR",
      "username": ""
    }
  ],
  "ok": true,
  "paging": {
    "count": 100,
    "page": 1,
    "pages": 1,
    "total": 2
  }
}
```

> default Response

```json
{
  "error": "invalid_auth",
  "ok": false
}
```

<h3 id="fileslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Typical success response|Inline|
|default|Default|Typical error response|Inline|

<h3 id="fileslist-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|files|[[objs_file](#schemaobjs_file)]|true|none|none|
|ok|[defs_ok_true](#schemadefs_ok_true)|true|none|none|
|paging|[objs_paging](#schemaobjs_paging)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|ok|true|

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|callstack|string|false|none|Note: PHP callstack is only visible in dev/qa|
|error|string|true|none|none|
|ok|[defs_ok_false](#schemadefs_ok_false)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|error|user_not_found|
|error|unknown_type|
|error|not_authed|
|error|invalid_auth|
|error|account_inactive|
|error|no_permission|
|error|user_is_bot|
|error|invalid_arg_name|
|error|invalid_array_arg|
|error|invalid_charset|
|error|invalid_form_data|
|error|invalid_post_type|
|error|missing_post_type|
|error|team_added_to_org|
|error|invalid_json|
|error|json_not_object|
|error|request_timeout|
|error|upgrade_required|
|ok|false|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
slackAuth ( Scopes: files:read )
</aside>

## files_revokePublicURL

<a id="opIdfiles_revokePublicURL"></a>

> Code samples

```bash
curl https://example.com/files.revokePublicURL \
  -X POST \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d 'file=string'
```

`POST /files.revokePublicURL`

Revokes public/external sharing access for a file

<a href="https://api.slack.com/methods/files.revokePublicURL">API method documentation</a>

> Body parameter

```yaml
file: string
```

<h3 id="filesrevokepublicurl-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|token|header|string|false|Authentication token. Requires scope: `files:write:user`|
|body|body|object|false|none|
|» file|body|string|false|File to revoke|

> Example responses

> 200 Response

```json
{
  "ok": true
}
```

> default Response

```json
{
  "error": "invalid_auth",
  "ok": false
}
```

<h3 id="filesrevokepublicurl-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Typical success response|Inline|
|default|Default|Typical error response|Inline|

<h3 id="filesrevokepublicurl-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|file|[objs_file](#schemaobjs_file)|true|none|none|
|ok|[defs_ok_true](#schemadefs_ok_true)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|ok|true|

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|callstack|string|false|none|Note: PHP callstack is only visible in dev/qa|
|error|string|true|none|none|
|ok|[defs_ok_false](#schemadefs_ok_false)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|error|file_not_found|
|error|not_authed|
|error|invalid_auth|
|error|account_inactive|
|error|token_revoked|
|error|no_permission|
|error|org_login_required|
|error|user_is_bot|
|error|user_is_restricted|
|error|invalid_arg_name|
|error|invalid_array_arg|
|error|invalid_charset|
|error|invalid_form_data|
|error|invalid_post_type|
|error|missing_post_type|
|error|team_added_to_org|
|error|invalid_json|
|error|json_not_object|
|error|request_timeout|
|error|upgrade_required|
|error|fatal_error|
|ok|false|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
slackAuth ( Scopes: files:write:user )
</aside>

## files_sharedPublicURL

<a id="opIdfiles_sharedPublicURL"></a>

> Code samples

```bash
curl https://example.com/files.sharedPublicURL \
  -X POST \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d 'file=string'
```

`POST /files.sharedPublicURL`

Enables a file for public/external sharing.

<a href="https://api.slack.com/methods/files.sharedPublicURL">API method documentation</a>

> Body parameter

```yaml
file: string
```

<h3 id="filessharedpublicurl-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|token|header|string|false|Authentication token. Requires scope: `files:write:user`|
|body|body|object|false|none|
|» file|body|string|false|File to share|

> Example responses

> 200 Response

```json
{
  "ok": true
}
```

> default Response

```json
{
  "error": "invalid_auth",
  "ok": false
}
```

<h3 id="filessharedpublicurl-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Typical success response|Inline|
|default|Default|Typical error response|Inline|

<h3 id="filessharedpublicurl-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|file|[objs_file](#schemaobjs_file)|true|none|none|
|ok|[defs_ok_true](#schemadefs_ok_true)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|ok|true|

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|callstack|string|false|none|Note: PHP callstack is only visible in dev/qa|
|error|string|true|none|none|
|ok|[defs_ok_false](#schemadefs_ok_false)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|error|file_not_found|
|error|not_allowed|
|error|not_authed|
|error|invalid_auth|
|error|account_inactive|
|error|token_revoked|
|error|no_permission|
|error|org_login_required|
|error|user_is_bot|
|error|user_is_restricted|
|error|invalid_arg_name|
|error|invalid_array_arg|
|error|invalid_charset|
|error|invalid_form_data|
|error|invalid_post_type|
|error|missing_post_type|
|error|team_added_to_org|
|error|invalid_json|
|error|json_not_object|
|error|request_timeout|
|error|upgrade_required|
|error|fatal_error|
|ok|false|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
slackAuth ( Scopes: files:write:user )
</aside>

## files_upload

<a id="opIdfiles_upload"></a>

> Code samples

```bash
curl https://example.com/files.upload \
  -X POST \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d 'channels=string&content=string&file=string&filename=string&filetype=string&initial_comment=string&thread_ts=0&title=string&token=string'
```

`POST /files.upload`

Uploads or creates a file.

<a href="https://api.slack.com/methods/files.upload">API method documentation</a>

> Body parameter

```yaml
channels: string
content: string
file: string
filename: string
filetype: string
initial_comment: string
thread_ts: 0
title: string
token: string
```

<h3 id="filesupload-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» channels|body|string|false|Comma-separated list of channel names or IDs where the file will be shared.|
|» content|body|string|false|File contents via a POST variable. If omitting this parameter, you must provide a `file`.|
|» file|body|string|false|File contents via `multipart/form-data`. If omitting this parameter, you must submit `content`.|
|» filename|body|string|false|Filename of file.|
|» filetype|body|string|false|A [file type](/types/file#file_types) identifier.|
|» initial_comment|body|string|false|The message text introducing the file in specified `channels`.|
|» thread_ts|body|number|false|Provide another message's `ts` value to upload this file as a reply. Never use a reply's `ts` value; use its parent instead.|
|» title|body|string|false|Title of file.|
|» token|body|string|false|Authentication token. Requires scope: `files:write:user`|

> Example responses

> 200 Response

```json
{
  "file": {
    "channels": [],
    "comments_count": 0,
    "created": 1532293501,
    "display_as_bot": false,
    "editable": false,
    "external_type": "",
    "filetype": "gif",
    "groups": [],
    "has_rich_preview": false,
    "id": "F0TD00400",
    "image_exif_rotation": 1,
    "ims": [
      "D0L4B9P0Q"
    ],
    "is_external": false,
    "is_public": false,
    "is_starred": false,
    "mimetype": "image/jpeg",
    "mode": "hosted",
    "name": "dramacat.gif",
    "original_h": 366,
    "original_w": 526,
    "permalink": "https://.../dramacat.gif",
    "permalink_public": "https://.../More-Path-Components",
    "pretty_type": "JPEG",
    "public_url_shared": false,
    "shares": {
      "private": {
        "D0L4B9P0Q": [
          {
            "reply_count": 0,
            "reply_users": [],
            "reply_users_count": 0,
            "ts": "1532293503.000001"
          }
        ]
      }
    },
    "size": 43518,
    "thumb_160": "https://.../dramacat_160.gif",
    "thumb_360": "https://.../dramacat_360.gif",
    "thumb_360_h": 250,
    "thumb_360_w": 360,
    "thumb_480": "https://.../dramacat_480.gif",
    "thumb_480_h": 334,
    "thumb_480_w": 480,
    "thumb_64": "https://.../dramacat_64.gif",
    "thumb_80": "https://.../dramacat_80.gif",
    "timestamp": 1532293501,
    "title": "dramacat",
    "url_private": "https://.../dramacat.gif",
    "url_private_download": "https://.../dramacat.gif",
    "user": "U0L4B9NSU",
    "username": ""
  },
  "ok": true
}
```

> default Response

```json
{
  "error": "invalid_auth",
  "ok": false
}
```

<h3 id="filesupload-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success response after uploading a file to a channel with an initial message|Inline|
|default|Default|Typical error response|Inline|

<h3 id="filesupload-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|file|[objs_file](#schemaobjs_file)|true|none|none|
|ok|[defs_ok_true](#schemadefs_ok_true)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|ok|true|

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|callstack|string|false|none|Note: PHP callstack is only visible in dev/qa|
|error|string|true|none|none|
|ok|[defs_ok_false](#schemadefs_ok_false)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|error|posting_to_general_channel_denied|
|error|invalid_channel|
|error|file_uploads_disabled|
|error|file_uploads_except_images_disabled|
|error|storage_limit_reached|
|error|not_authed|
|error|invalid_auth|
|error|account_inactive|
|error|no_permission|
|error|invalid_arg_name|
|error|invalid_array_arg|
|error|invalid_charset|
|error|invalid_form_data|
|error|invalid_post_type|
|error|missing_post_type|
|error|team_added_to_org|
|error|invalid_json|
|error|json_not_object|
|error|request_timeout|
|error|upgrade_required|
|ok|false|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
slackAuth ( Scopes: files:write:user )
</aside>

<h1 id="slack-web-api-filesremote">files.remote</h1>

## files_remote_add

<a id="opIdfiles_remote_add"></a>

> Code samples

```bash
curl https://example.com/files.remote.add \
  -X POST \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d 'external_id=string&external_url=string&filetype=string&indexable_file_contents=string&preview_image=string&title=string&token=string'
```

`POST /files.remote.add`

Adds a file from a remote service

<a href="https://api.slack.com/methods/files.remote.add">API method documentation</a>

> Body parameter

```yaml
external_id: string
external_url: string
filetype: string
indexable_file_contents: string
preview_image: string
title: string
token: string
```

<h3 id="filesremoteadd-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» external_id|body|string|false|Creator defined GUID for the file.|
|» external_url|body|string|false|URL of the remote file.|
|» filetype|body|string|false|type of file|
|» indexable_file_contents|body|string|false|A text file (txt, pdf, doc, etc.) containing textual search terms that are used to improve discovery of the remote file.|
|» preview_image|body|string|false|Preview of the document via `multipart/form-data`.|
|» title|body|string|false|Title of the file being shared.|
|» token|body|string|false|Authentication token. Requires scope: `remote_files:write`|

> Example responses

> 200 Response

```json
{
  "ok": true
}
```

> default Response

```json
{
  "error": "invalid_auth",
  "ok": false
}
```

<h3 id="filesremoteadd-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Typical success response|Inline|
|default|Default|Typical error response|Inline|

<h3 id="filesremoteadd-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|[defs_ok_true](#schemadefs_ok_true)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|ok|true|

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|[defs_ok_false](#schemadefs_ok_false)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|ok|false|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
slackAuth ( Scopes: remote_files:write )
</aside>

## files_remote_info

<a id="opIdfiles_remote_info"></a>

> Code samples

```bash
curl https://example.com/files.remote.info \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /files.remote.info`

Retrieve information about a remote file added to Slack

<a href="https://api.slack.com/methods/files.remote.info">API method documentation</a>

<h3 id="filesremoteinfo-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|token|query|string|false|Authentication token. Requires scope: `remote_files:read`|
|file|query|string|false|Specify a file by providing its ID.|
|external_id|query|string|false|Creator defined GUID for the file.|

> Example responses

> 200 Response

```json
{
  "ok": true
}
```

> default Response

```json
{
  "error": "invalid_auth",
  "ok": false
}
```

<h3 id="filesremoteinfo-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Typical success response|Inline|
|default|Default|Typical error response|Inline|

<h3 id="filesremoteinfo-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|[defs_ok_true](#schemadefs_ok_true)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|ok|true|

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|[defs_ok_false](#schemadefs_ok_false)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|ok|false|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
slackAuth ( Scopes: remote_files:read )
</aside>

## files_remote_list

<a id="opIdfiles_remote_list"></a>

> Code samples

```bash
curl https://example.com/files.remote.list \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /files.remote.list`

Retrieve information about a remote file added to Slack

<a href="https://api.slack.com/methods/files.remote.list">API method documentation</a>

<h3 id="filesremotelist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|token|query|string|false|Authentication token. Requires scope: `remote_files:read`|
|channel|query|string|false|Filter files appearing in a specific channel, indicated by its ID.|
|ts_from|query|number|false|Filter files created after this timestamp (inclusive).|
|ts_to|query|number|false|Filter files created before this timestamp (inclusive).|
|limit|query|integer|false|The maximum number of items to return.|
|cursor|query|string|false|Paginate through collections of data by setting the `cursor` parameter to a `next_cursor` attribute returned by a previous request's `response_metadata`. Default value fetches the first "page" of the collection. See [pagination](/docs/pagination) for more detail.|

> Example responses

> 200 Response

```json
{
  "ok": true
}
```

> default Response

```json
{
  "error": "invalid_auth",
  "ok": false
}
```

<h3 id="filesremotelist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Typical success response|Inline|
|default|Default|Typical error response|Inline|

<h3 id="filesremotelist-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|[defs_ok_true](#schemadefs_ok_true)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|ok|true|

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|[defs_ok_false](#schemadefs_ok_false)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|ok|false|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
slackAuth ( Scopes: remote_files:read )
</aside>

## files_remote_remove

<a id="opIdfiles_remote_remove"></a>

> Code samples

```bash
curl https://example.com/files.remote.remove \
  -X POST \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d 'external_id=string&file=string&token=string'
```

`POST /files.remote.remove`

Remove a remote file.

<a href="https://api.slack.com/methods/files.remote.remove">API method documentation</a>

> Body parameter

```yaml
external_id: string
file: string
token: string
```

<h3 id="filesremoteremove-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» external_id|body|string|false|Creator defined GUID for the file.|
|» file|body|string|false|Specify a file by providing its ID.|
|» token|body|string|false|Authentication token. Requires scope: `remote_files:write`|

> Example responses

> 200 Response

```json
{
  "ok": true
}
```

> default Response

```json
{
  "error": "invalid_auth",
  "ok": false
}
```

<h3 id="filesremoteremove-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Typical success response|Inline|
|default|Default|Typical error response|Inline|

<h3 id="filesremoteremove-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|[defs_ok_true](#schemadefs_ok_true)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|ok|true|

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|[defs_ok_false](#schemadefs_ok_false)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|ok|false|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
slackAuth ( Scopes: remote_files:write )
</aside>

## files_remote_share

<a id="opIdfiles_remote_share"></a>

> Code samples

```bash
curl https://example.com/files.remote.share \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /files.remote.share`

Share a remote file into a channel.

<a href="https://api.slack.com/methods/files.remote.share">API method documentation</a>

<h3 id="filesremoteshare-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|token|query|string|false|Authentication token. Requires scope: `remote_files:share`|
|file|query|string|false|Specify a file registered with Slack by providing its ID. Either this field or `external_id` or both are required.|
|external_id|query|string|false|The globally unique identifier (GUID) for the file, as set by the app registering the file with Slack.  Either this field or `file` or both are required.|
|channels|query|string|false|Comma-separated list of channel IDs where the file will be shared.|

> Example responses

> 200 Response

```json
{
  "ok": true
}
```

> default Response

```json
{
  "error": "invalid_auth",
  "ok": false
}
```

<h3 id="filesremoteshare-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Typical success response|Inline|
|default|Default|Typical error response|Inline|

<h3 id="filesremoteshare-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|[defs_ok_true](#schemadefs_ok_true)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|ok|true|

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|[defs_ok_false](#schemadefs_ok_false)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|ok|false|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
slackAuth ( Scopes: remote_files:share )
</aside>

## files_remote_update

<a id="opIdfiles_remote_update"></a>

> Code samples

```bash
curl https://example.com/files.remote.update \
  -X POST \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d 'external_id=string&external_url=string&file=string&filetype=string&indexable_file_contents=string&preview_image=string&title=string&token=string'
```

`POST /files.remote.update`

Updates an existing remote file.

<a href="https://api.slack.com/methods/files.remote.update">API method documentation</a>

> Body parameter

```yaml
external_id: string
external_url: string
file: string
filetype: string
indexable_file_contents: string
preview_image: string
title: string
token: string
```

<h3 id="filesremoteupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» external_id|body|string|false|Creator defined GUID for the file.|
|» external_url|body|string|false|URL of the remote file.|
|» file|body|string|false|Specify a file by providing its ID.|
|» filetype|body|string|false|type of file|
|» indexable_file_contents|body|string|false|File containing contents that can be used to improve searchability for the remote file.|
|» preview_image|body|string|false|Preview of the document via `multipart/form-data`.|
|» title|body|string|false|Title of the file being shared.|
|» token|body|string|false|Authentication token. Requires scope: `remote_files:write`|

> Example responses

> 200 Response

```json
{
  "ok": true
}
```

> default Response

```json
{
  "error": "invalid_auth",
  "ok": false
}
```

<h3 id="filesremoteupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Typical success response|Inline|
|default|Default|Typical error response|Inline|

<h3 id="filesremoteupdate-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|[defs_ok_true](#schemadefs_ok_true)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|ok|true|

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|[defs_ok_false](#schemadefs_ok_false)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|ok|false|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
slackAuth ( Scopes: remote_files:write )
</aside>

<h1 id="slack-web-api-migration">migration</h1>

## migration_exchange

<a id="opIdmigration_exchange"></a>

> Code samples

```bash
curl 'https://example.com/migration.exchange?token=string&users=string' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /migration.exchange`

For Enterprise Grid workspaces, map local user IDs to global user IDs

<a href="https://api.slack.com/methods/migration.exchange">API method documentation</a>

<h3 id="migrationexchange-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|token|query|string|true|Authentication token. Requires scope: `tokens.basic`|
|users|query|string|true|A comma-separated list of user ids, up to 400 per request|
|team_id|query|string|false|Specify team_id starts with `T` in case of Org Token|
|to_old|query|boolean|false|Specify `true` to convert `W` global user IDs to workspace-specific `U` IDs. Defaults to `false`.|

> Example responses

> 200 Response

```json
{
  "enterprise_id": "E1KQTNXE1",
  "invalid_user_ids": [
    "U21ABZZXX"
  ],
  "ok": true,
  "team_id": "T1KR7PE1W",
  "user_id_map": {
    "U06UBSUN5": "W06M56XJM",
    "U06UBSVB3": "W06PUUDLY",
    "U06UBSVDX": "W06PUUDMW",
    "U06UEB62U": "W06PTT6GH",
    "W06UAZ65Q": "W06UAZ65Q"
  }
}
```

> default Response

```json
{
  "error": "not_enterprise_team",
  "ok": false
}
```

<h3 id="migrationexchange-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Typical success response when mappings exist for the specified user IDs|Inline|
|default|Default|Typical error response when there are no mappings to provide|Inline|

<h3 id="migrationexchange-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|enterprise_id|string|true|none|none|
|invalid_user_ids|[string]|false|none|none|
|ok|[defs_ok_true](#schemadefs_ok_true)|true|none|none|
|team_id|[defs_team](#schemadefs_team)|true|none|none|
|user_id_map|object|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|ok|true|

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|callstack|string|false|none|Note: PHP callstack is only visible in dev/qa|
|error|string|true|none|none|
|ok|[defs_ok_false](#schemadefs_ok_false)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|error|not_enterprise_team|
|error|too_many_users|
|error|not_authed|
|error|invalid_auth|
|error|account_inactive|
|error|token_revoked|
|error|no_permission|
|error|org_login_required|
|error|invalid_arg_name|
|error|invalid_array_arg|
|error|invalid_charset|
|error|invalid_form_data|
|error|invalid_post_type|
|error|missing_post_type|
|error|team_added_to_org|
|error|invalid_json|
|error|json_not_object|
|error|request_timeout|
|error|upgrade_required|
|error|fatal_error|
|ok|false|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
slackAuth ( Scopes: tokens.basic )
</aside>

<h1 id="slack-web-api-oauth">oauth</h1>

## oauth_access

<a id="opIdoauth_access"></a>

> Code samples

```bash
curl https://example.com/oauth.access \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /oauth.access`

Exchanges a temporary OAuth verifier code for an access token.

<a href="https://api.slack.com/methods/oauth.access">API method documentation</a>

<h3 id="oauthaccess-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|client_id|query|string|false|Issued when you created your application.|
|client_secret|query|string|false|Issued when you created your application.|
|code|query|string|false|The `code` param returned via the OAuth callback.|
|redirect_uri|query|string|false|This must match the originally submitted URI (if one was sent).|
|single_channel|query|boolean|false|Request the user to add your app only to a single channel. Only valid with a [legacy workspace app](https://api.slack.com/legacy-workspace-apps).|

> Example responses

> 200 Response

```json
{
  "access_token": "xoxp-XXXXXXXX-XXXXXXXX-XXXXX",
  "enterprise_id": null,
  "scope": "groups:write",
  "team_id": "TXXXXXXXXX",
  "team_name": "Wyld Stallyns LLC"
}
```

> default Response

```json
{
  "error": "invalid_client_id",
  "ok": false
}
```

<h3 id="oauthaccess-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful user token negotiation for a single scope|Inline|
|default|Default|Typical error response|Inline|

<h3 id="oauthaccess-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|[defs_ok_true](#schemadefs_ok_true)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|ok|true|

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|[defs_ok_false](#schemadefs_ok_false)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|ok|false|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
slackAuth ( Scopes: none )
</aside>

## oauth_token

<a id="opIdoauth_token"></a>

> Code samples

```bash
curl https://example.com/oauth.token \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /oauth.token`

Exchanges a temporary OAuth verifier code for a workspace token.

<a href="https://api.slack.com/methods/oauth.token">API method documentation</a>

<h3 id="oauthtoken-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|client_id|query|string|false|Issued when you created your application.|
|client_secret|query|string|false|Issued when you created your application.|
|code|query|string|false|The `code` param returned via the OAuth callback.|
|redirect_uri|query|string|false|This must match the originally submitted URI (if one was sent).|
|single_channel|query|boolean|false|Request the user to add your app only to a single channel.|

> Example responses

> 200 Response

```json
{
  "access_token": "xoxa-access-token-string",
  "app_id": "A012345678",
  "app_user_id": "U0AB12ABC",
  "authorizing_user_id": "U0HTT3Q0G",
  "installer_user_id": "U061F7AUR",
  "ok": true,
  "permissions": [
    {
      "resource_id": 0,
      "resource_type": "channel",
      "scopes": [
        "channels:read",
        "chat:write:user"
      ]
    }
  ],
  "single_channel_id": "C061EG9T2",
  "team_id": "T061EG9Z9",
  "team_name": "Subarachnoid Workspace",
  "token_type": "app"
}
```

> default Response

```json
{
  "error": "invalid_client_id",
  "ok": false
}
```

<h3 id="oauthtoken-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success example using a workspace app produces a very different kind of response|Inline|
|default|Default|Typical error response|Inline|

<h3 id="oauthtoken-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|[defs_ok_true](#schemadefs_ok_true)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|ok|true|

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|[defs_ok_false](#schemadefs_ok_false)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|ok|false|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
slackAuth ( Scopes: none )
</aside>

<h1 id="slack-web-api-oauthv2">oauth.v2</h1>

## oauth_v2_access

<a id="opIdoauth_v2_access"></a>

> Code samples

```bash
curl 'https://example.com/oauth.v2.access?code=string' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /oauth.v2.access`

Exchanges a temporary OAuth verifier code for an access token.

<a href="https://api.slack.com/methods/oauth.v2.access">API method documentation</a>

<h3 id="oauthv2access-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|client_id|query|string|false|Issued when you created your application.|
|client_secret|query|string|false|Issued when you created your application.|
|code|query|string|true|The `code` param returned via the OAuth callback.|
|redirect_uri|query|string|false|This must match the originally submitted URI (if one was sent).|

> Example responses

> 200 Response

```json
{
  "access_token": "xoxb-17653672481-19874698323-pdFZKVeTuE8sk7oOcBrzbqgy",
  "app_id": "A0KRD7HC3",
  "authed_user": {
    "access_token": "xoxp-1234",
    "id": "U1234",
    "scope": "chat:write",
    "token_type": "user"
  },
  "bot_user_id": "U0KRQLJ9H",
  "enterprise": {
    "id": "E12345678",
    "name": "slack-sports"
  },
  "ok": true,
  "scope": "commands,incoming-webhook",
  "team": {
    "id": "T9TK3CUKW",
    "name": "Slack Softball Team"
  },
  "token_type": "bot"
}
```

> default Response

```json
{
  "error": "invalid_client_id",
  "ok": false
}
```

<h3 id="oauthv2access-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful token request with scopes for both a bot user and a user token|Inline|
|default|Default|Typical error response|Inline|

<h3 id="oauthv2access-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|[defs_ok_true](#schemadefs_ok_true)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|ok|true|

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|[defs_ok_false](#schemadefs_ok_false)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|ok|false|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
slackAuth ( Scopes: none )
</aside>

<h1 id="slack-web-api-pins">pins</h1>

## pins_add

<a id="opIdpins_add"></a>

> Code samples

```bash
curl https://example.com/pins.add \
  -X POST \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'token: string' \
  -d 'channel=string&timestamp=string'
```

`POST /pins.add`

Pins an item to a channel.

<a href="https://api.slack.com/methods/pins.add">API method documentation</a>

> Body parameter

```yaml
channel: string
timestamp: string
```

<h3 id="pinsadd-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|token|header|string|true|Authentication token. Requires scope: `pins:write`|
|body|body|object|true|none|
|» channel|body|string|true|Channel to pin the item in.|
|» timestamp|body|string|false|Timestamp of the message to pin.|

> Example responses

> 200 Response

```json
{
  "ok": true
}
```

> default Response

```json
{
  "error": "channel_not_found",
  "ok": false
}
```

<h3 id="pinsadd-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Typical success response|Inline|
|default|Default|Typical error response|Inline|

<h3 id="pinsadd-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|[defs_ok_true](#schemadefs_ok_true)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|ok|true|

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|callstack|string|false|none|Note: PHP callstack is only visible in dev/qa|
|error|string|true|none|none|
|ok|[defs_ok_false](#schemadefs_ok_false)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|error|bad_timestamp|
|error|message_not_found|
|error|channel_not_found|
|error|no_item_specified|
|error|already_pinned|
|error|permission_denied|
|error|file_not_shared|
|error|not_pinnable|
|error|not_authed|
|error|invalid_auth|
|error|account_inactive|
|error|no_permission|
|error|invalid_arg_name|
|error|invalid_array_arg|
|error|invalid_charset|
|error|invalid_form_data|
|error|invalid_post_type|
|error|missing_post_type|
|error|team_added_to_org|
|error|invalid_json|
|error|json_not_object|
|error|request_timeout|
|error|upgrade_required|
|ok|false|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
slackAuth ( Scopes: pins:write )
</aside>

## pins_list

<a id="opIdpins_list"></a>

> Code samples

```bash
curl 'https://example.com/pins.list?token=string&channel=string' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /pins.list`

Lists items pinned to a channel.

<a href="https://api.slack.com/methods/pins.list">API method documentation</a>

<h3 id="pinslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|token|query|string|true|Authentication token. Requires scope: `pins:read`|
|channel|query|string|true|Channel to get pinned items for.|

> Example responses

> 200 Response

```json
{
  "items": [
    {
      "channel": "C2U86NC6H",
      "created": 1508881078,
      "created_by": "U2U85N1RZ",
      "message": {
        "permalink": "https://hitchhikers.slack.com/archives/C2U86NC6H/p1508197641000151",
        "pinned_to": [
          "C2U86NC6H"
        ],
        "text": "What is the meaning of life?",
        "ts": "1508197641.000151",
        "type": "message",
        "user": "U2U85N1RZ"
      },
      "type": "message"
    },
    {
      "channel": "C2U86NC6H",
      "created": 1508880991,
      "created_by": "U2U85N1RZ",
      "message": {
        "permalink": "https://hitchhikers.slack.com/archives/C2U86NC6H/p1508284197000015",
        "pinned_to": [
          "C2U86NC6H"
        ],
        "text": "The meaning of life, the universe, and everything is 42.",
        "ts": "1503289197.000015",
        "type": "message",
        "user": "U2U85N1RZ"
      },
      "type": "message"
    }
  ],
  "ok": true
}
```

> default Response

```json
{
  "error": "invalid_auth",
  "ok": false
}
```

<h3 id="pinslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Typical success response|Inline|
|default|Default|Typical error response|Inline|

<h3 id="pinslist-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|
|» *anyOf*|object|false|none|none|
|» items|[object]|true|none|none|
|» » *anyOf*|object|false|none|none|
|» » created|integer|false|none|none|
|» » created_by|[defs_user_id](#schemadefs_user_id)|false|none|none|
|» » file|[objs_file](#schemaobjs_file)|false|none|none|
|» » type|string|false|none|none|
|» » *anyOf*|object|false|none|none|
|» » channel|[defs_channel](#schemadefs_channel)|false|none|none|
|» » created|integer|false|none|none|
|» » created_by|[defs_user_id](#schemadefs_user_id)|false|none|none|
|» » message|[objs_message](#schemaobjs_message)|false|none|none|
|» » type|string|false|none|none|
|» ok|[defs_ok_true](#schemadefs_ok_true)|true|none|none|
|» *anyOf*|object|false|none|none|
|» count|integer|true|none|none|
|» ok|[defs_ok_true](#schemadefs_ok_true)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|» » type|file|
|» » type|message|
|» ok|true|
|» ok|true|

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|callstack|string|false|none|Note: PHP callstack is only visible in dev/qa|
|error|string|true|none|none|
|ok|[defs_ok_false](#schemadefs_ok_false)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|error|channel_not_found|
|error|not_authed|
|error|invalid_auth|
|error|account_inactive|
|error|no_permission|
|error|invalid_arg_name|
|error|invalid_array_arg|
|error|invalid_charset|
|error|invalid_form_data|
|error|invalid_post_type|
|error|missing_post_type|
|error|team_added_to_org|
|error|invalid_json|
|error|json_not_object|
|error|request_timeout|
|error|upgrade_required|
|ok|false|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
slackAuth ( Scopes: pins:read )
</aside>

## pins_remove

<a id="opIdpins_remove"></a>

> Code samples

```bash
curl https://example.com/pins.remove \
  -X POST \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'token: string' \
  -d 'channel=string&timestamp=string'
```

`POST /pins.remove`

Un-pins an item from a channel.

<a href="https://api.slack.com/methods/pins.remove">API method documentation</a>

> Body parameter

```yaml
channel: string
timestamp: string
```

<h3 id="pinsremove-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|token|header|string|true|Authentication token. Requires scope: `pins:write`|
|body|body|object|true|none|
|» channel|body|string|true|Channel where the item is pinned to.|
|» timestamp|body|string|false|Timestamp of the message to un-pin.|

> Example responses

> 200 Response

```json
{
  "ok": true
}
```

> default Response

```json
{
  "error": "no_pin",
  "ok": false
}
```

<h3 id="pinsremove-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Typical success response|Inline|
|default|Default|Typical error response|Inline|

<h3 id="pinsremove-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|[defs_ok_true](#schemadefs_ok_true)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|ok|true|

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|callstack|string|false|none|Note: PHP callstack is only visible in dev/qa|
|error|string|true|none|none|
|ok|[defs_ok_false](#schemadefs_ok_false)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|error|bad_timestamp|
|error|file_not_found|
|error|file_comment_not_found|
|error|message_not_found|
|error|no_item_specified|
|error|not_pinned|
|error|permission_denied|
|error|not_authed|
|error|invalid_auth|
|error|account_inactive|
|error|no_permission|
|error|invalid_arg_name|
|error|invalid_array_arg|
|error|invalid_charset|
|error|invalid_form_data|
|error|invalid_post_typ|
|error|missing_post_typ|
|error|team_added_to_org|
|error|invalid_json|
|error|json_not_object|
|error|request_timeou|
|error|upgrade_required|
|ok|false|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
slackAuth ( Scopes: pins:write )
</aside>

<h1 id="slack-web-api-reactions">reactions</h1>

## reactions_add

<a id="opIdreactions_add"></a>

> Code samples

```bash
curl https://example.com/reactions.add \
  -X POST \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'token: string' \
  -d 'channel=string&name=string&timestamp=string'
```

`POST /reactions.add`

Adds a reaction to an item.

<a href="https://api.slack.com/methods/reactions.add">API method documentation</a>

> Body parameter

```yaml
channel: string
name: string
timestamp: string
```

<h3 id="reactionsadd-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|token|header|string|true|Authentication token. Requires scope: `reactions:write`|
|body|body|object|true|none|
|» channel|body|string|true|Channel where the message to add reaction to was posted.|
|» name|body|string|true|Reaction (emoji) name.|
|» timestamp|body|string|true|Timestamp of the message to add reaction to.|

> Example responses

> 200 Response

```json
{
  "ok": true
}
```

> default Response

```json
{
  "error": "already_reacted",
  "ok": false
}
```

<h3 id="reactionsadd-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Typical success response|Inline|
|default|Default|Typical error response|Inline|

<h3 id="reactionsadd-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|[defs_ok_true](#schemadefs_ok_true)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|ok|true|

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|callstack|string|false|none|Note: PHP callstack is only visible in dev/qa|
|error|string|true|none|none|
|ok|[defs_ok_false](#schemadefs_ok_false)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|error|bad_timestamp|
|error|message_not_found|
|error|no_item_specified|
|error|invalid_name|
|error|already_reacted|
|error|too_many_emoji|
|error|too_many_reactions|
|error|not_authed|
|error|invalid_auth|
|error|account_inactive|
|error|no_permission|
|error|invalid_arg_name|
|error|invalid_array_arg|
|error|invalid_charset|
|error|invalid_form_data|
|error|invalid_post_type|
|error|missing_post_type|
|error|team_added_to_org|
|error|invalid_json|
|error|json_not_object|
|error|request_timeout|
|error|upgrade_required|
|ok|false|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
slackAuth ( Scopes: reactions:write )
</aside>

## reactions_get

<a id="opIdreactions_get"></a>

> Code samples

```bash
curl 'https://example.com/reactions.get?token=string' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /reactions.get`

Gets reactions for an item.

<a href="https://api.slack.com/methods/reactions.get">API method documentation</a>

<h3 id="reactionsget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|token|query|string|true|Authentication token. Requires scope: `reactions:read`|
|channel|query|string|false|Channel where the message to get reactions for was posted.|
|file|query|string|false|File to get reactions for.|
|file_comment|query|string|false|File comment to get reactions for.|
|full|query|boolean|false|If true always return the complete reaction list.|
|timestamp|query|string|false|Timestamp of the message to get reactions for.|

> Example responses

> 200 Response

```json
{
  "file": {
    "channels": [
      "C2U7V2YA2"
    ],
    "comments_count": 1,
    "created": 1507850315,
    "groups": [],
    "id": "F7H0D7ZA4",
    "ims": [],
    "name": "computer.gif",
    "reactions": [
      {
        "count": 1,
        "name": "stuck_out_tongue_winking_eye",
        "users": [
          "U2U85N1RV"
        ]
      }
    ],
    "timestamp": 1507850315,
    "title": "computer.gif",
    "user": "U2U85N1RV"
  },
  "ok": true,
  "type": "file"
}
```

> default Response

```json
{
  "error": "invalid_auth",
  "ok": false
}
```

<h3 id="reactionsget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Typical success response|Inline|
|default|Default|Typical error response|Inline|

<h3 id="reactionsget-responseschema">Response Schema</h3>

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|callstack|string|false|none|Note: PHP callstack is only visible in dev/qa|
|error|string|true|none|none|
|ok|[defs_ok_false](#schemadefs_ok_false)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|error|bad_timestamp|
|error|file_not_found|
|error|file_comment_not_found|
|error|message_not_found|
|error|no_item_specified|
|error|not_authed|
|error|invalid_auth|
|error|account_inactive|
|error|no_permission|
|error|invalid_array_arg|
|error|invalid_charset|
|error|invalid_form_data|
|error|invalid_post_type|
|error|missing_post_type|
|error|team_added_to_org|
|error|invalid_json|
|error|json_not_object|
|error|request_timeout|
|error|upgrade_required|
|ok|false|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
slackAuth ( Scopes: reactions:read )
</aside>

## reactions_list

<a id="opIdreactions_list"></a>

> Code samples

```bash
curl 'https://example.com/reactions.list?token=string' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /reactions.list`

Lists reactions made by a user.

<a href="https://api.slack.com/methods/reactions.list">API method documentation</a>

<h3 id="reactionslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|token|query|string|true|Authentication token. Requires scope: `reactions:read`|
|user|query|string|false|Show reactions made by this user. Defaults to the authed user.|
|full|query|boolean|false|If true always return the complete reaction list.|
|count|query|integer|false|none|
|page|query|integer|false|none|
|cursor|query|string|false|Parameter for pagination. Set `cursor` equal to the `next_cursor` attribute returned by the previous request's `response_metadata`. This parameter is optional, but pagination is mandatory: the default value simply fetches the first "page" of the collection. See [pagination](/docs/pagination) for more details.|
|limit|query|integer|false|The maximum number of items to return. Fewer than the requested number of items may be returned, even if the end of the list hasn't been reached.|

> Example responses

> 200 Response

```json
{
  "items": [
    {
      "channel": "C3UKJTQAC",
      "message": {
        "bot_id": "B4VLRLMKJ",
        "reactions": [
          {
            "count": 1,
            "name": "robot_face",
            "users": [
              "U2U85N1RV"
            ]
          }
        ],
        "subtype": "bot_message",
        "text": "Hello from Python! :tada:",
        "ts": "1507849573.000090",
        "username": "Shipit Notifications"
      },
      "type": "message"
    },
    {
      "comment": {
        "comment": "This is a file comment",
        "created": 1508286096,
        "id": "Fc7LP08P1U",
        "reactions": [
          {
            "count": 1,
            "name": "white_check_mark",
            "users": [
              "U2U85N1RV"
            ]
          }
        ],
        "timestamp": 1508286096,
        "type": "file_comment",
        "user": "U2U85N1RV"
      },
      "file": {
        "channels": [
          "C2U7V2YA2"
        ],
        "comments_count": 1,
        "created": 1507850315,
        "reactions": [
          {
            "count": 1,
            "name": "stuck_out_tongue_winking_eye",
            "users": [
              "U2U85N1RV"
            ]
          }
        ],
        "title": "computer.gif",
        "user": "U2U85N1RV",
        "username": ""
      }
    },
    {
      "file": {
        "channels": [
          "C2U7V2YA2"
        ],
        "comments_count": 1,
        "created": 1507850315,
        "id": "F7H0D7ZA4",
        "name": "computer.gif",
        "reactions": [
          {
            "count": 1,
            "name": "stuck_out_tongue_winking_eye",
            "users": [
              "U2U85N1RV"
            ]
          }
        ],
        "size": 1639034,
        "title": "computer.gif",
        "user": "U2U85N1RV",
        "username": ""
      },
      "type": "file"
    }
  ],
  "ok": true,
  "response_metadata": {
    "next_cursor": "dGVhbTpDMUg5UkVTR0w="
  }
}
```

> default Response

```json
{
  "error": "invalid_auth",
  "ok": false
}
```

<h3 id="reactionslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Typical success response|Inline|
|default|Default|Typical error response|Inline|

<h3 id="reactionslist-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|items|[[object]]|true|none|none|
|ok|[defs_ok_true](#schemadefs_ok_true)|true|none|none|
|paging|[objs_paging](#schemaobjs_paging)|false|none|none|
|response_metadata|[objs_response_metadata](#schemaobjs_response_metadata)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|ok|true|

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|callstack|string|false|none|Note: PHP callstack is only visible in dev/qa|
|error|string|true|none|none|
|ok|[defs_ok_false](#schemadefs_ok_false)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|error|user_not_found|
|error|not_authed|
|error|invalid_auth|
|error|account_inactiv|
|error|no_permission|
|error|invalid_arg_name|
|error|invalid_array_arg|
|error|invalid_charset|
|error|invalid_form_data|
|error|invalid_post_type|
|error|missing_post_type|
|error|team_added_to_org|
|error|invalid_json|
|error|json_not_object|
|error|request_timeout|
|error|upgrade_required|
|error|fatal_error|
|ok|false|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
slackAuth ( Scopes: reactions:read )
</aside>

## reactions_remove

<a id="opIdreactions_remove"></a>

> Code samples

```bash
curl https://example.com/reactions.remove \
  -X POST \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'token: string' \
  -d 'channel=string&file=string&file_comment=string&name=string&timestamp=string'
```

`POST /reactions.remove`

Removes a reaction from an item.

<a href="https://api.slack.com/methods/reactions.remove">API method documentation</a>

> Body parameter

```yaml
channel: string
file: string
file_comment: string
name: string
timestamp: string
```

<h3 id="reactionsremove-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|token|header|string|true|Authentication token. Requires scope: `reactions:write`|
|body|body|object|true|none|
|» channel|body|string|false|Channel where the message to remove reaction from was posted.|
|» file|body|string|false|File to remove reaction from.|
|» file_comment|body|string|false|File comment to remove reaction from.|
|» name|body|string|true|Reaction (emoji) name.|
|» timestamp|body|string|false|Timestamp of the message to remove reaction from.|

> Example responses

> 200 Response

```json
{
  "ok": true
}
```

> default Response

```json
{
  "error": "no_reaction",
  "ok": false
}
```

<h3 id="reactionsremove-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Typical success response|Inline|
|default|Default|Typical error response|Inline|

<h3 id="reactionsremove-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|[defs_ok_true](#schemadefs_ok_true)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|ok|true|

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|callstack|string|false|none|Note: PHP callstack is only visible in dev/qa|
|error|string|true|none|none|
|ok|[defs_ok_false](#schemadefs_ok_false)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|error|bad_timestamp|
|error|file_not_found|
|error|file_comment_not_found|
|error|message_not_found|
|error|no_item_specified|
|error|invalid_name|
|error|no_reaction|
|error|not_authed|
|error|invalid_auth|
|error|account_inactive|
|error|no_permission|
|error|invalid_arg_name|
|error|invalid_array_arg|
|error|invalid_charset|
|error|invalid_form_data|
|error|invalid_post_type|
|error|missing_post_type|
|error|team_added_to_org|
|error|invalid_json|
|error|json_not_object|
|error|request_timeout|
|error|upgrade_required|
|error|fatal_error|
|ok|false|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
slackAuth ( Scopes: reactions:write )
</aside>

<h1 id="slack-web-api-reminders">reminders</h1>

## reminders_add

<a id="opIdreminders_add"></a>

> Code samples

```bash
curl https://example.com/reminders.add \
  -X POST \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'token: string' \
  -d 'text=string&time=string&user=string'
```

`POST /reminders.add`

Creates a reminder.

<a href="https://api.slack.com/methods/reminders.add">API method documentation</a>

> Body parameter

```yaml
text: string
time: string
user: string
```

<h3 id="remindersadd-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|token|header|string|true|Authentication token. Requires scope: `reminders:write`|
|body|body|object|true|none|
|» text|body|string|true|The content of the reminder|
|» time|body|string|true|When this reminder should happen: the Unix timestamp (up to five years from now), the number of seconds until the reminder (if within 24 hours), or a natural language description (Ex. "in 15 minutes," or "every Thursday")|
|» user|body|string|false|The user who will receive the reminder. If no user is specified, the reminder will go to user who created it.|

> Example responses

> 200 Response

```json
{
  "ok": true
}
```

> default Response

```json
{
  "error": "invalid_auth",
  "ok": false
}
```

<h3 id="remindersadd-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Typical success response|Inline|
|default|Default|Typical error response|Inline|

<h3 id="remindersadd-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|[defs_ok_true](#schemadefs_ok_true)|true|none|none|
|reminder|[objs_reminder](#schemaobjs_reminder)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|ok|true|

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|callstack|string|false|none|Note: PHP callstack is only visible in dev/qa|
|error|string|true|none|none|
|ok|[defs_ok_false](#schemadefs_ok_false)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|error|cannot_parse|
|error|user_not_found|
|error|cannot_add_bot|
|error|cannot_add_slackbot|
|error|cannot_add_others|
|error|cannot_add_others_recurring|
|error|not_authed|
|error|invalid_auth|
|error|account_inactive|
|error|token_revoked|
|error|no_permission|
|error|org_login_required|
|error|user_is_bot|
|error|invalid_arg_name|
|error|invalid_array_arg|
|error|invalid_charset|
|error|invalid_form_data|
|error|invalid_post_type|
|error|missing_post_type|
|error|team_added_to_org|
|error|invalid_json|
|error|json_not_object|
|error|request_timeout|
|error|upgrade_required|
|error|fatal_error|
|ok|false|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
slackAuth ( Scopes: reminders:write )
</aside>

## reminders_complete

<a id="opIdreminders_complete"></a>

> Code samples

```bash
curl https://example.com/reminders.complete \
  -X POST \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d 'reminder=string'
```

`POST /reminders.complete`

Marks a reminder as complete.

<a href="https://api.slack.com/methods/reminders.complete">API method documentation</a>

> Body parameter

```yaml
reminder: string
```

<h3 id="reminderscomplete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|token|header|string|false|Authentication token. Requires scope: `reminders:write`|
|body|body|object|false|none|
|» reminder|body|string|false|The ID of the reminder to be marked as complete|

> Example responses

> 200 Response

```json
{
  "ok": true
}
```

> default Response

```json
{
  "error": "invalid_auth",
  "ok": false
}
```

<h3 id="reminderscomplete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Typical success response|Inline|
|default|Default|Typical error response|Inline|

<h3 id="reminderscomplete-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|[defs_ok_true](#schemadefs_ok_true)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|ok|true|

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|callstack|string|false|none|Note: PHP callstack is only visible in dev/qa|
|error|string|true|none|none|
|ok|[defs_ok_false](#schemadefs_ok_false)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|error|not_found|
|error|cannot_complete_recurring|
|error|cannot_complete_others|
|error|not_authed|
|error|invalid_auth|
|error|account_inactive|
|error|token_revoked|
|error|no_permission|
|error|org_login_required|
|error|user_is_bot|
|error|invalid_arg_name|
|error|invalid_array_arg|
|error|invalid_charset|
|error|invalid_form_data|
|error|invalid_post_type|
|error|missing_post_type|
|error|team_added_to_org|
|error|invalid_json|
|error|json_not_object|
|error|request_timeout|
|error|upgrade_required|
|error|fatal_error|
|ok|false|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
slackAuth ( Scopes: reminders:write )
</aside>

## reminders_delete

<a id="opIdreminders_delete"></a>

> Code samples

```bash
curl https://example.com/reminders.delete \
  -X POST \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d 'reminder=string'
```

`POST /reminders.delete`

Deletes a reminder.

<a href="https://api.slack.com/methods/reminders.delete">API method documentation</a>

> Body parameter

```yaml
reminder: string
```

<h3 id="remindersdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|token|header|string|false|Authentication token. Requires scope: `reminders:write`|
|body|body|object|false|none|
|» reminder|body|string|false|The ID of the reminder|

> Example responses

> 200 Response

```json
{
  "ok": true
}
```

> default Response

```json
{
  "error": "invalid_auth",
  "ok": false
}
```

<h3 id="remindersdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Typical success response|Inline|
|default|Default|Typical error response|Inline|

<h3 id="remindersdelete-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|[defs_ok_true](#schemadefs_ok_true)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|ok|true|

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|callstack|string|false|none|Note: PHP callstack is only visible in dev/qa|
|error|string|true|none|none|
|ok|[defs_ok_false](#schemadefs_ok_false)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|error|not_found|
|error|not_authed|
|error|invalid_auth|
|error|account_inactive|
|error|token_revoked|
|error|no_permission|
|error|org_login_required|
|error|user_is_bot|
|error|invalid_arg_name|
|error|invalid_array_arg|
|error|invalid_charset|
|error|invalid_form_data|
|error|invalid_post_type|
|error|missing_post_type|
|error|team_added_to_org|
|error|invalid_json|
|error|json_not_object|
|error|request_timeout|
|error|upgrade_required|
|error|fatal_error|
|ok|false|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
slackAuth ( Scopes: reminders:write )
</aside>

## reminders_info

<a id="opIdreminders_info"></a>

> Code samples

```bash
curl https://example.com/reminders.info \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /reminders.info`

Gets information about a reminder.

<a href="https://api.slack.com/methods/reminders.info">API method documentation</a>

<h3 id="remindersinfo-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|token|query|string|false|Authentication token. Requires scope: `reminders:read`|
|reminder|query|string|false|The ID of the reminder|

> Example responses

> 200 Response

```json
{
  "ok": true
}
```

> default Response

```json
{
  "error": "invalid_auth",
  "ok": false
}
```

<h3 id="remindersinfo-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Typical success response|Inline|
|default|Default|Typical error response|Inline|

<h3 id="remindersinfo-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|[defs_ok_true](#schemadefs_ok_true)|true|none|none|
|reminder|[objs_reminder](#schemaobjs_reminder)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|ok|true|

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|callstack|string|false|none|Note: PHP callstack is only visible in dev/qa|
|error|string|true|none|none|
|ok|[defs_ok_false](#schemadefs_ok_false)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|error|not_found|
|error|not_authed|
|error|invalid_auth|
|error|account_inactive|
|error|token_revoked|
|error|no_permission|
|error|org_login_required|
|error|user_is_bot|
|error|invalid_arg_name|
|error|invalid_array_arg|
|error|invalid_charset|
|error|invalid_form_data|
|error|invalid_post_type|
|error|missing_post_type|
|error|team_added_to_org|
|error|invalid_json|
|error|json_not_object|
|error|request_timeout|
|error|upgrade_required|
|error|fatal_error|
|ok|false|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
slackAuth ( Scopes: reminders:read )
</aside>

## reminders_list

<a id="opIdreminders_list"></a>

> Code samples

```bash
curl https://example.com/reminders.list \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /reminders.list`

Lists all reminders created by or for a given user.

<a href="https://api.slack.com/methods/reminders.list">API method documentation</a>

<h3 id="reminderslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|token|query|string|false|Authentication token. Requires scope: `reminders:read`|

> Example responses

> 200 Response

```json
{
  "ok": true
}
```

> default Response

```json
{
  "error": "invalid_auth",
  "ok": false
}
```

<h3 id="reminderslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Typical success response|Inline|
|default|Default|Typical error response|Inline|

<h3 id="reminderslist-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|[defs_ok_true](#schemadefs_ok_true)|true|none|none|
|reminders|[[objs_reminder](#schemaobjs_reminder)]|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|ok|true|

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|callstack|string|false|none|Note: PHP callstack is only visible in dev/qa|
|error|string|true|none|none|
|ok|[defs_ok_false](#schemadefs_ok_false)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|error|not_authed|
|error|invalid_auth|
|error|account_inactive|
|error|token_revoked|
|error|no_permission|
|error|org_login_required|
|error|user_is_bot|
|error|invalid_arg_name|
|error|invalid_array_arg|
|error|invalid_charset|
|error|invalid_form_data|
|error|invalid_post_type|
|error|missing_post_type|
|error|team_added_to_org|
|error|invalid_json|
|error|json_not_object|
|error|request_timeout|
|error|upgrade_required|
|error|fatal_error|
|ok|false|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
slackAuth ( Scopes: reminders:read )
</aside>

<h1 id="slack-web-api-rtm">rtm</h1>

## rtm_connect

<a id="opIdrtm_connect"></a>

> Code samples

```bash
curl 'https://example.com/rtm.connect?token=string' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /rtm.connect`

Starts a Real Time Messaging session.

<a href="https://api.slack.com/methods/rtm.connect">API method documentation</a>

<h3 id="rtmconnect-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|token|query|string|true|Authentication token. Requires scope: `rtm:stream`|
|batch_presence_aware|query|boolean|false|Batch presence deliveries via subscription. Enabling changes the shape of `presence_change` events. See [batch presence](/docs/presence-and-status#batching).|
|presence_sub|query|boolean|false|Only deliver presence events when requested by subscription. See [presence subscriptions](/docs/presence-and-status#subscriptions).|

> Example responses

> 200 Response

```json
{
  "ok": true,
  "self": {
    "id": "U4X318ZMZ",
    "name": "robotoverlord"
  },
  "team": {
    "domain": "slackdemo",
    "id": "T2U81E2FP",
    "name": "SlackDemo"
  },
  "url": "wss://..."
}
```

> default Response

```json
{
  "error": "invalid_auth",
  "ok": false
}
```

<h3 id="rtmconnect-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Typical success response|Inline|
|default|Default|Typical error response|Inline|

<h3 id="rtmconnect-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|[defs_ok_true](#schemadefs_ok_true)|true|none|none|
|self|object|true|none|none|
|» id|[defs_user_id](#schemadefs_user_id)|true|none|none|
|» name|string|true|none|none|
|team|object|true|none|none|
|» domain|string|true|none|none|
|» id|[defs_team](#schemadefs_team)|true|none|none|
|» name|string|true|none|none|
|url|string(uri)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|ok|true|

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|callstack|string|false|none|Note: PHP callstack is only visible in dev/qa|
|error|string|true|none|none|
|ok|[defs_ok_false](#schemadefs_ok_false)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|error|not_authed|
|error|invalid_auth|
|error|account_inactive|
|error|token_revoked|
|error|no_permission|
|error|invalid_arg_name|
|error|invalid_array_arg|
|error|invalid_charset|
|error|invalid_form_data|
|error|invalid_post_type|
|error|missing_post_type|
|error|team_added_to_org|
|error|invalid_json|
|error|json_not_object|
|error|request_timeout|
|error|upgrade_required|
|error|fatal_error|
|ok|false|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
slackAuth ( Scopes: rtm:stream )
</aside>

<h1 id="slack-web-api-search">search</h1>

## search_messages

<a id="opIdsearch_messages"></a>

> Code samples

```bash
curl 'https://example.com/search.messages?token=string&query=string' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /search.messages`

Searches for messages matching a query.

<a href="https://api.slack.com/methods/search.messages">API method documentation</a>

<h3 id="searchmessages-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|token|query|string|true|Authentication token. Requires scope: `search:read`|
|count|query|integer|false|Pass the number of results you want per "page". Maximum of `100`.|
|highlight|query|boolean|false|Pass a value of `true` to enable query highlight markers (see below).|
|page|query|integer|false|none|
|query|query|string|true|Search query.|
|sort|query|string|false|Return matches sorted by either `score` or `timestamp`.|
|sort_dir|query|string|false|Change sort direction to ascending (`asc`) or descending (`desc`).|

> Example responses

> 200 Response

```json
{
  "messages": {
    "matches": [
      {
        "channel": {
          "id": "C12345678",
          "is_ext_shared": false,
          "is_mpim": false,
          "is_org_shared": false,
          "is_pending_ext_shared": false,
          "is_private": false,
          "is_shared": false,
          "name": "general",
          "pending_shared": []
        },
        "iid": "cb64bdaa-c1e8-4631-8a91-0f78080113e9",
        "permalink": "https://hitchhikers.slack.com/archives/C12345678/p1508284197000015",
        "team": "T12345678",
        "text": "The meaning of life the universe and everything is 42.",
        "ts": "1508284197.000015",
        "type": "message",
        "user": "U2U85N1RV",
        "username": "roach"
      },
      {
        "channel": {
          "id": "C12345678",
          "is_ext_shared": false,
          "is_mpim": false,
          "is_org_shared": false,
          "is_pending_ext_shared": false,
          "is_private": false,
          "is_shared": false,
          "name": "random",
          "pending_shared": []
        },
        "iid": "9a00d3c9-bd2d-45b0-988b-6cff99ae2a90",
        "permalink": "https://hitchhikers.slack.com/archives/C12345678/p1508795665000236",
        "team": "T12345678",
        "text": "The meaning of life the universe and everything is 101010",
        "ts": "1508795665.000236",
        "type": "message",
        "user": "",
        "username": "robot overlord"
      }
    ],
    "pagination": {
      "first": 1,
      "last": 2,
      "page": 1,
      "page_count": 1,
      "per_page": 20,
      "total_count": 2
    },
    "paging": {
      "count": 20,
      "page": 1,
      "pages": 1,
      "total": 2
    },
    "total": 2
  },
  "ok": true,
  "query": "The meaning of life the universe and everything"
}
```

> default Response

```json
{
  "error": "No query passed",
  "ok": false
}
```

<h3 id="searchmessages-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Typical success response|Inline|
|default|Default|Typical error response|Inline|

<h3 id="searchmessages-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|[defs_ok_true](#schemadefs_ok_true)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|ok|true|

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|[defs_ok_false](#schemadefs_ok_false)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|ok|false|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
slackAuth ( Scopes: search:read )
</aside>

<h1 id="slack-web-api-stars">stars</h1>

## stars_add

<a id="opIdstars_add"></a>

> Code samples

```bash
curl https://example.com/stars.add \
  -X POST \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'token: string' \
  -d 'channel=string&file=string&file_comment=string&timestamp=string'
```

`POST /stars.add`

Adds a star to an item.

<a href="https://api.slack.com/methods/stars.add">API method documentation</a>

> Body parameter

```yaml
channel: string
file: string
file_comment: string
timestamp: string
```

<h3 id="starsadd-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|token|header|string|true|Authentication token. Requires scope: `stars:write`|
|body|body|object|false|none|
|» channel|body|string|false|Channel to add star to, or channel where the message to add star to was posted (used with `timestamp`).|
|» file|body|string|false|File to add star to.|
|» file_comment|body|string|false|File comment to add star to.|
|» timestamp|body|string|false|Timestamp of the message to add star to.|

> Example responses

> 200 Response

```json
{
  "ok": true
}
```

> default Response

```json
{
  "error": "invalid_auth",
  "ok": false
}
```

<h3 id="starsadd-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Typical success response|Inline|
|default|Default|Typical error response|Inline|

<h3 id="starsadd-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|[defs_ok_true](#schemadefs_ok_true)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|ok|true|

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|callstack|string|false|none|Note: PHP callstack is only visible in dev/qa|
|error|string|true|none|none|
|ok|[defs_ok_false](#schemadefs_ok_false)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|error|bad_timestamp|
|error|message_not_found|
|error|file_not_found|
|error|file_comment_not_found|
|error|channel_not_found|
|error|no_item_specified|
|error|already_starred|
|error|not_authed|
|error|invalid_auth|
|error|account_inactive|
|error|token_revoked|
|error|no_permission|
|error|org_login_required|
|error|invalid_arg_name|
|error|invalid_array_arg|
|error|invalid_charset|
|error|invalid_form_data|
|error|invalid_post_type|
|error|missing_post_type|
|error|team_added_to_org|
|error|invalid_json|
|error|json_not_object|
|error|request_timeout|
|error|upgrade_required|
|error|fatal_error|
|ok|false|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
slackAuth ( Scopes: stars:write )
</aside>

## stars_list

<a id="opIdstars_list"></a>

> Code samples

```bash
curl https://example.com/stars.list \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /stars.list`

Lists stars for a user.

<a href="https://api.slack.com/methods/stars.list">API method documentation</a>

<h3 id="starslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|token|query|string|false|Authentication token. Requires scope: `stars:read`|
|count|query|string|false|none|
|page|query|string|false|none|
|cursor|query|string|false|Parameter for pagination. Set `cursor` equal to the `next_cursor` attribute returned by the previous request's `response_metadata`. This parameter is optional, but pagination is mandatory: the default value simply fetches the first "page" of the collection. See [pagination](/docs/pagination) for more details.|
|limit|query|integer|false|The maximum number of items to return. Fewer than the requested number of items may be returned, even if the end of the list hasn't been reached.|

> Example responses

> 200 Response

```json
{
  "ok": true
}
```

> default Response

```json
{
  "error": "invalid_auth",
  "ok": false
}
```

<h3 id="starslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Typical success response|Inline|
|default|Default|Typical error response|Inline|

<h3 id="starslist-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|items|[[object]]|true|none|none|
|ok|[defs_ok_true](#schemadefs_ok_true)|true|none|none|
|paging|[objs_paging](#schemaobjs_paging)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|ok|true|

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|callstack|string|false|none|Note: PHP callstack is only visible in dev/qa|
|error|string|true|none|none|
|ok|[defs_ok_false](#schemadefs_ok_false)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|error|not_authed|
|error|invalid_auth|
|error|account_inactive|
|error|token_revoked|
|error|no_permission|
|error|org_login_required|
|error|user_is_bot|
|error|invalid_arg_name|
|error|invalid_array_arg|
|error|invalid_charset|
|error|invalid_form_data|
|error|invalid_post_type|
|error|missing_post_type|
|error|team_added_to_org|
|error|invalid_json|
|error|json_not_object|
|error|request_timeout|
|error|upgrade_required|
|error|fatal_error|
|ok|false|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
slackAuth ( Scopes: stars:read )
</aside>

## stars_remove

<a id="opIdstars_remove"></a>

> Code samples

```bash
curl https://example.com/stars.remove \
  -X POST \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'token: string' \
  -d 'channel=string&file=string&file_comment=string&timestamp=string'
```

`POST /stars.remove`

Removes a star from an item.

<a href="https://api.slack.com/methods/stars.remove">API method documentation</a>

> Body parameter

```yaml
channel: string
file: string
file_comment: string
timestamp: string
```

<h3 id="starsremove-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|token|header|string|true|Authentication token. Requires scope: `stars:write`|
|body|body|object|false|none|
|» channel|body|string|false|Channel to remove star from, or channel where the message to remove star from was posted (used with `timestamp`).|
|» file|body|string|false|File to remove star from.|
|» file_comment|body|string|false|File comment to remove star from.|
|» timestamp|body|string|false|Timestamp of the message to remove star from.|

> Example responses

> 200 Response

```json
{
  "ok": true
}
```

> default Response

```json
{
  "error": "invalid_auth",
  "ok": false
}
```

<h3 id="starsremove-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Typical success response|Inline|
|default|Default|Typical error response|Inline|

<h3 id="starsremove-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|[defs_ok_true](#schemadefs_ok_true)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|ok|true|

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|callstack|string|false|none|Note: PHP callstack is only visible in dev/qa|
|error|string|true|none|none|
|ok|[defs_ok_false](#schemadefs_ok_false)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|error|bad_timestamp|
|error|message_not_found|
|error|file_not_found|
|error|file_comment_not_found|
|error|channel_not_found|
|error|no_item_specified|
|error|not_starred|
|error|not_authed|
|error|invalid_auth|
|error|account_inactive|
|error|token_revoked|
|error|no_permission|
|error|org_login_required|
|error|invalid_arg_name|
|error|invalid_array_arg|
|error|invalid_charset|
|error|invalid_form_data|
|error|invalid_post_type|
|error|missing_post_type|
|error|team_added_to_org|
|error|invalid_json|
|error|json_not_object|
|error|request_timeout|
|error|upgrade_required|
|error|fatal_error|
|ok|false|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
slackAuth ( Scopes: stars:write )
</aside>

<h1 id="slack-web-api-team">team</h1>

## team_accessLogs

<a id="opIdteam_accessLogs"></a>

> Code samples

```bash
curl 'https://example.com/team.accessLogs?token=string' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /team.accessLogs`

Gets the access logs for the current team.

<a href="https://api.slack.com/methods/team.accessLogs">API method documentation</a>

<h3 id="teamaccesslogs-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|token|query|string|true|Authentication token. Requires scope: `admin`|
|before|query|string|false|End of time range of logs to include in results (inclusive).|
|count|query|string|false|none|
|page|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "logins": [
    {
      "count": 1,
      "country": "US",
      "date_first": 1422922864,
      "date_last": 1422922864,
      "ip": "127.0.0.1",
      "isp": "BigCo ISP",
      "region": "CA",
      "user_agent": "SlackWeb Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2272.35 Safari/537.36",
      "user_id": "U45678",
      "username": "alice"
    },
    {
      "count": 1,
      "country": "US",
      "date_first": 1422922493,
      "date_last": 1422922493,
      "ip": "127.0.0.1",
      "isp": "BigCo ISP",
      "region": "CA",
      "user_agent": "SlackWeb Mozilla/5.0 (iPhone; CPU iPhone OS 8_1_3 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) Version/8.0 Mobile/12B466 Safari/600.1.4",
      "user_id": "U12345",
      "username": "white_rabbit"
    }
  ],
  "ok": true,
  "paging": {
    "count": 100,
    "page": 1,
    "pages": 1,
    "total": 2
  }
}
```

> default Response

```json
{
  "error": "paid_only",
  "ok": false
}
```

<h3 id="teamaccesslogs-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|This response demonstrates pagination and two access log entries.|Inline|
|default|Default|A workspace must be on a paid plan to use this method, otherwise the `paid_only` error is thrown:|Inline|

<h3 id="teamaccesslogs-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|logins|[object]|true|none|none|
|» count|integer|true|none|none|
|» country|string \| null|true|none|none|
|» date_first|integer|true|none|none|
|» date_last|integer|true|none|none|
|» ip|string \| null|true|none|none|
|» isp|string \| null|true|none|none|
|» region|string \| null|true|none|none|
|» user_agent|string|true|none|none|
|» user_id|[defs_user_id](#schemadefs_user_id)|true|none|none|
|» username|string|true|none|none|
|ok|[defs_ok_true](#schemadefs_ok_true)|true|none|none|
|paging|[objs_paging](#schemaobjs_paging)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|ok|true|

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|callstack|string|false|none|Note: PHP callstack is only visible in dev/qa|
|error|string|true|none|none|
|ok|[defs_ok_false](#schemadefs_ok_false)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|error|paid_only|
|error|over_pagination_limit|
|error|not_authed|
|error|invalid_auth|
|error|account_inactive|
|error|token_revoked|
|error|no_permission|
|error|org_login_required|
|error|user_is_bot|
|error|invalid_arg_name|
|error|invalid_array_arg|
|error|invalid_charset|
|error|invalid_form_data|
|error|invalid_post_type|
|error|missing_post_type|
|error|team_added_to_org|
|error|invalid_json|
|error|json_not_object|
|error|request_timeout|
|error|upgrade_required|
|error|fatal_error|
|ok|false|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
slackAuth ( Scopes: admin )
</aside>

## team_billableInfo

<a id="opIdteam_billableInfo"></a>

> Code samples

```bash
curl 'https://example.com/team.billableInfo?token=string' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /team.billableInfo`

Gets billable users information for the current team.

<a href="https://api.slack.com/methods/team.billableInfo">API method documentation</a>

<h3 id="teambillableinfo-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|token|query|string|true|Authentication token. Requires scope: `admin`|
|user|query|string|false|A user to retrieve the billable information for. Defaults to all users.|

> Example responses

> 200 Response

```json
{
  "billable_info": {
    "U02UCPE1R": {
      "billing_active": true
    },
    "U02UEBSD2": {
      "billing_active": true
    },
    "U0632EWRW": {
      "billing_active": false
    }
  },
  "ok": true
}
```

> default Response

```json
{
  "error": "invalid_auth",
  "ok": false
}
```

<h3 id="teambillableinfo-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Typical success response|Inline|
|default|Default|Typical error response|Inline|

<h3 id="teambillableinfo-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|[defs_ok_true](#schemadefs_ok_true)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|ok|true|

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|[defs_ok_false](#schemadefs_ok_false)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|ok|false|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
slackAuth ( Scopes: admin )
</aside>

## team_info

<a id="opIdteam_info"></a>

> Code samples

```bash
curl 'https://example.com/team.info?token=string' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /team.info`

Gets information about the current team.

<a href="https://api.slack.com/methods/team.info">API method documentation</a>

<h3 id="teaminfo-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|token|query|string|true|Authentication token. Requires scope: `team:read`|
|team|query|string|false|Team to get info on, if omitted, will return information about the current team. Will only return team that the authenticated token is allowed to see through external shared channels|

> Example responses

> 200 Response

```json
{
  "ok": true,
  "team": {
    "domain": "example",
    "email_domain": "example.com",
    "enterprise_id": "E1234A12AB",
    "enterprise_name": "Umbrella Corporation",
    "icon": {
      "image_102": "https://...",
      "image_132": "https://...",
      "image_34": "https://...",
      "image_44": "https://...",
      "image_68": "https://...",
      "image_88": "https://...",
      "image_default": true
    },
    "id": "T12345",
    "name": "My Team"
  }
}
```

> default Response

```json
{
  "error": "invalid_auth",
  "ok": false
}
```

<h3 id="teaminfo-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Typical success response|Inline|
|default|Default|Typical error response|Inline|

<h3 id="teaminfo-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|[defs_ok_true](#schemadefs_ok_true)|true|none|none|
|team|[objs_team](#schemaobjs_team)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|ok|true|

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|callstack|string|false|none|Note: PHP callstack is only visible in dev/qa|
|error|string|true|none|none|
|ok|[defs_ok_false](#schemadefs_ok_false)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|error|not_authed|
|error|invalid_auth|
|error|account_inactive|
|error|token_revoked|
|error|no_permission|
|error|invalid_arg_name|
|error|invalid_array_arg|
|error|invalid_charset|
|error|invalid_form_data|
|error|invalid_post_type|
|error|missing_post_type|
|error|team_added_to_org|
|error|invalid_json|
|error|json_not_object|
|error|request_timeout|
|error|upgrade_required|
|error|fatal_error|
|ok|false|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
slackAuth ( Scopes: team:read )
</aside>

## team_integrationLogs

<a id="opIdteam_integrationLogs"></a>

> Code samples

```bash
curl 'https://example.com/team.integrationLogs?token=string' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /team.integrationLogs`

Gets the integration logs for the current team.

<a href="https://api.slack.com/methods/team.integrationLogs">API method documentation</a>

<h3 id="teamintegrationlogs-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|token|query|string|true|Authentication token. Requires scope: `admin`|
|app_id|query|string|false|Filter logs to this Slack app. Defaults to all logs.|
|change_type|query|string|false|Filter logs with this change type. Defaults to all logs.|
|count|query|string|false|none|
|page|query|string|false|none|
|service_id|query|string|false|Filter logs to this service. Defaults to all logs.|
|user|query|string|false|Filter logs generated by this user’s actions. Defaults to all logs.|

> Example responses

> 200 Response

```json
{
  "ok": true
}
```

> default Response

```json
{
  "error": "invalid_auth",
  "ok": false
}
```

<h3 id="teamintegrationlogs-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Typical success response|Inline|
|default|Default|Typical error response|Inline|

<h3 id="teamintegrationlogs-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|logs|[object]|true|none|none|
|» admin_app_id|[defs_app_id](#schemadefs_app_id)|false|none|none|
|» app_id|[defs_app_id](#schemadefs_app_id)|true|none|none|
|» app_type|string|true|none|none|
|» change_type|string|true|none|none|
|» channel|[defs_channel](#schemadefs_channel)|false|none|none|
|» date|string|true|none|none|
|» scope|string|true|none|none|
|» service_id|string|false|none|none|
|» service_type|string|false|none|none|
|» user_id|[defs_user_id](#schemadefs_user_id)|true|none|none|
|» user_name|string|true|none|none|
|ok|[defs_ok_true](#schemadefs_ok_true)|true|none|none|
|paging|[objs_paging](#schemaobjs_paging)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|ok|true|

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|callstack|string|false|none|Note: PHP callstack is only visible in dev/qa|
|error|string|true|none|none|
|ok|[defs_ok_false](#schemadefs_ok_false)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|error|not_authed|
|error|invalid_auth|
|error|account_inactive|
|error|token_revoked|
|error|no_permission|
|error|org_login_required|
|error|user_is_bot|
|error|invalid_arg_name|
|error|invalid_array_arg|
|error|invalid_charset|
|error|invalid_form_data|
|error|invalid_post_type|
|error|missing_post_type|
|error|team_added_to_org|
|error|invalid_json|
|error|json_not_object|
|error|request_timeout|
|error|upgrade_required|
|error|fatal_error|
|ok|false|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
slackAuth ( Scopes: admin )
</aside>

<h1 id="slack-web-api-teamprofile">team.profile</h1>

## team_profile_get

<a id="opIdteam_profile_get"></a>

> Code samples

```bash
curl 'https://example.com/team.profile.get?token=string' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /team.profile.get`

Retrieve a team's profile.

<a href="https://api.slack.com/methods/team.profile.get">API method documentation</a>

<h3 id="teamprofileget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|token|query|string|true|Authentication token. Requires scope: `users.profile:read`|
|visibility|query|string|false|Filter by visibility.|

> Example responses

> 200 Response

```json
{
  "ok": true,
  "profile": {
    "fields": [
      {
        "hint": "Enter the extension to reach your desk",
        "id": "Xf06054AAA",
        "is_hidden": 1,
        "label": "Phone extension",
        "options": null,
        "ordering": 0,
        "possible_values": null,
        "type": "text"
      },
      {
        "hint": "When you were born",
        "id": "Xf06054BBB",
        "label": "Date of birth",
        "options": null,
        "ordering": 1,
        "possible_values": null,
        "type": "date"
      },
      {
        "hint": "Enter a link to your Facebook profile",
        "id": "Xf06054CCC",
        "label": "Facebook",
        "options": null,
        "ordering": 2,
        "possible_values": null,
        "type": "link"
      },
      {
        "hint": "Hogwarts, obviously",
        "id": "Xf06054DDD",
        "label": "House",
        "options": null,
        "ordering": 3,
        "possible_values": [
          "Gryffindor",
          "Hufflepuff",
          "Ravenclaw",
          "Slytherin"
        ],
        "type": "options_list"
      },
      {
        "hint": "Office location (LDAP)",
        "id": "Xf06054EEE",
        "label": "Location",
        "options": {
          "is_protected": 1
        },
        "ordering": 4,
        "possible_values": null,
        "type": "text"
      },
      {
        "hint": "The boss",
        "id": "Xf06054FFF",
        "label": "Manager",
        "options": null,
        "ordering": 5,
        "possible_values": null,
        "type": "user"
      }
    ]
  }
}
```

> default Response

```json
{
  "error": "invalid_auth",
  "ok": false
}
```

<h3 id="teamprofileget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Typical success response|Inline|
|default|Default|Typical error response|Inline|

<h3 id="teamprofileget-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|[defs_ok_true](#schemadefs_ok_true)|true|none|none|
|profile|object|true|none|none|
|» fields|[[objs_team_profile_field](#schemaobjs_team_profile_field)]|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|ok|true|

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|callstack|string|false|none|Note: PHP callstack is only visible in dev/qa|
|error|string|true|none|none|
|ok|[defs_ok_false](#schemadefs_ok_false)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|error|not_authed|
|error|invalid_auth|
|error|account_inactive|
|error|no_permission|
|error|user_is_bot|
|error|invalid_arg_name|
|error|invalid_array_arg|
|error|invalid_charset|
|error|invalid_form_data|
|error|invalid_post_typ|
|error|missing_post_type|
|error|team_added_to_org|
|error|invalid_json|
|error|json_not_object|
|error|request_timeou|
|error|upgrade_required|
|ok|false|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
slackAuth ( Scopes: users.profile:read )
</aside>

<h1 id="slack-web-api-usergroups">usergroups</h1>

## usergroups_create

<a id="opIdusergroups_create"></a>

> Code samples

```bash
curl https://example.com/usergroups.create \
  -X POST \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'token: string' \
  -d 'channels=string&description=string&handle=string&include_count=true&name=string'
```

`POST /usergroups.create`

Create a User Group

<a href="https://api.slack.com/methods/usergroups.create">API method documentation</a>

> Body parameter

```yaml
channels: string
description: string
handle: string
include_count: true
name: string
```

<h3 id="usergroupscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|token|header|string|true|Authentication token. Requires scope: `usergroups:write`|
|body|body|object|false|none|
|» channels|body|string|false|A comma separated string of encoded channel IDs for which the User Group uses as a default.|
|» description|body|string|false|A short description of the User Group.|
|» handle|body|string|false|A mention handle. Must be unique among channels, users and User Groups.|
|» include_count|body|boolean|false|Include the number of users in each User Group.|
|» name|body|string|true|A name for the User Group. Must be unique among User Groups.|

> Example responses

> 200 Response

```json
{
  "ok": true
}
```

> default Response

```json
{
  "error": "invalid_auth",
  "ok": false
}
```

<h3 id="usergroupscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Typical success response|Inline|
|default|Default|Typical error response|Inline|

<h3 id="usergroupscreate-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|[defs_ok_true](#schemadefs_ok_true)|true|none|none|
|usergroup|[objs_subteam](#schemaobjs_subteam)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|ok|true|

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|callstack|string|false|none|Note: PHP callstack is only visible in dev/qa|
|error|string|true|none|none|
|ok|[defs_ok_false](#schemadefs_ok_false)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|error|permission_denied|
|error|not_authed|
|error|invalid_auth|
|error|account_inactive|
|error|token_revoked|
|error|no_permission|
|error|org_login_required|
|error|user_is_bot|
|error|user_is_restricted|
|error|invalid_arg_name|
|error|invalid_array_arg|
|error|invalid_charset|
|error|invalid_form_data|
|error|invalid_post_type|
|error|missing_post_type|
|error|team_added_to_org|
|error|invalid_json|
|error|json_not_object|
|error|request_timeout|
|error|upgrade_required|
|error|fatal_error|
|ok|false|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
slackAuth ( Scopes: usergroups:write )
</aside>

## usergroups_disable

<a id="opIdusergroups_disable"></a>

> Code samples

```bash
curl https://example.com/usergroups.disable \
  -X POST \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'token: string' \
  -d 'include_count=true&usergroup=string'
```

`POST /usergroups.disable`

Disable an existing User Group

<a href="https://api.slack.com/methods/usergroups.disable">API method documentation</a>

> Body parameter

```yaml
include_count: true
usergroup: string
```

<h3 id="usergroupsdisable-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|token|header|string|true|Authentication token. Requires scope: `usergroups:write`|
|body|body|object|false|none|
|» include_count|body|boolean|false|Include the number of users in the User Group.|
|» usergroup|body|string|true|The encoded ID of the User Group to disable.|

> Example responses

> 200 Response

```json
{
  "ok": true
}
```

> default Response

```json
{
  "error": "invalid_auth",
  "ok": false
}
```

<h3 id="usergroupsdisable-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Typical success response|Inline|
|default|Default|Typical error response|Inline|

<h3 id="usergroupsdisable-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|[defs_ok_true](#schemadefs_ok_true)|true|none|none|
|usergroup|[objs_subteam](#schemaobjs_subteam)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|ok|true|

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|callstack|string|false|none|Note: PHP callstack is only visible in dev/qa|
|error|string|true|none|none|
|ok|[defs_ok_false](#schemadefs_ok_false)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|error|permission_denied|
|error|not_authed|
|error|invalid_auth|
|error|account_inactive|
|error|token_revoked|
|error|no_permission|
|error|org_login_required|
|error|user_is_bot|
|error|user_is_restricted|
|error|invalid_arg_name|
|error|invalid_array_arg|
|error|invalid_charset|
|error|invalid_form_data|
|error|invalid_post_type|
|error|missing_post_type|
|error|team_added_to_org|
|error|invalid_json|
|error|json_not_object|
|error|request_timeout|
|error|upgrade_required|
|error|fatal_error|
|ok|false|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
slackAuth ( Scopes: usergroups:write )
</aside>

## usergroups_enable

<a id="opIdusergroups_enable"></a>

> Code samples

```bash
curl https://example.com/usergroups.enable \
  -X POST \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'token: string' \
  -d 'include_count=true&usergroup=string'
```

`POST /usergroups.enable`

Enable a User Group

<a href="https://api.slack.com/methods/usergroups.enable">API method documentation</a>

> Body parameter

```yaml
include_count: true
usergroup: string
```

<h3 id="usergroupsenable-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|token|header|string|true|Authentication token. Requires scope: `usergroups:write`|
|body|body|object|false|none|
|» include_count|body|boolean|false|Include the number of users in the User Group.|
|» usergroup|body|string|true|The encoded ID of the User Group to enable.|

> Example responses

> 200 Response

```json
{
  "ok": true
}
```

> default Response

```json
{
  "error": "invalid_auth",
  "ok": false
}
```

<h3 id="usergroupsenable-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Typical success response|Inline|
|default|Default|Typical error response|Inline|

<h3 id="usergroupsenable-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|[defs_ok_true](#schemadefs_ok_true)|true|none|none|
|usergroup|[objs_subteam](#schemaobjs_subteam)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|ok|true|

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|callstack|string|false|none|Note: PHP callstack is only visible in dev/qa|
|error|string|true|none|none|
|ok|[defs_ok_false](#schemadefs_ok_false)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|error|not_authed|
|error|invalid_auth|
|error|account_inactive|
|error|token_revoked|
|error|no_permission|
|error|org_login_required|
|error|user_is_bot|
|error|user_is_restricted|
|error|invalid_arg_name|
|error|invalid_array_arg|
|error|invalid_charset|
|error|invalid_form_data|
|error|invalid_post_type|
|error|missing_post_type|
|error|team_added_to_org|
|error|invalid_json|
|error|json_not_object|
|error|request_timeout|
|error|upgrade_require|
|error|fatal_error|
|error|missing_charset|
|error|superfluous_charset|
|ok|false|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
slackAuth ( Scopes: usergroups:write )
</aside>

## usergroups_list

<a id="opIdusergroups_list"></a>

> Code samples

```bash
curl 'https://example.com/usergroups.list?token=string' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /usergroups.list`

List all User Groups for a team

<a href="https://api.slack.com/methods/usergroups.list">API method documentation</a>

<h3 id="usergroupslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|include_users|query|boolean|false|Include the list of users for each User Group.|
|token|query|string|true|Authentication token. Requires scope: `usergroups:read`|
|include_count|query|boolean|false|Include the number of users in each User Group.|
|include_disabled|query|boolean|false|Include disabled User Groups.|

> Example responses

> 200 Response

```json
{
  "ok": true,
  "usergroups": [
    {
      "auto_type": "admin",
      "created_by": "USLACKBOT",
      "date_create": 1446598059,
      "date_delete": 0,
      "date_update": 1446670362,
      "deleted_by": null,
      "description": "A group of all Administrators on your team.",
      "handle": "admins",
      "id": "S0614TZR7",
      "is_external": false,
      "is_usergroup": true,
      "name": "Team Admins",
      "prefs": {
        "channels": [],
        "groups": []
      },
      "team_id": "T060RNRCH",
      "updated_by": "U060RNRCZ",
      "user_count": "2"
    },
    {
      "auto_type": "owner",
      "created_by": "USLACKBOT",
      "date_create": 1446678371,
      "date_delete": 0,
      "date_update": 1446678371,
      "deleted_by": null,
      "description": "A group of all Owners on your team.",
      "handle": "owners",
      "id": "S06158AV7",
      "is_external": false,
      "is_usergroup": true,
      "name": "Team Owners",
      "prefs": {
        "channels": [],
        "groups": []
      },
      "team_id": "T060RNRCH",
      "updated_by": "USLACKBOT",
      "user_count": "1"
    },
    {
      "auto_type": null,
      "created_by": "U060RNRCZ",
      "date_create": 1446746793,
      "date_delete": 1446748865,
      "date_update": 1446747767,
      "deleted_by": null,
      "description": "Marketing gurus, PR experts and product advocates.",
      "handle": "marketing-team",
      "id": "S0615G0KT",
      "is_external": false,
      "is_usergroup": true,
      "name": "Marketing Team",
      "prefs": {
        "channels": [],
        "groups": []
      },
      "team_id": "T060RNRCH",
      "updated_by": "U060RNRCZ",
      "user_count": "0"
    }
  ]
}
```

> default Response

```json
{
  "error": "invalid_auth",
  "ok": false
}
```

<h3 id="usergroupslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Typical success response|Inline|
|default|Default|Typical error response|Inline|

<h3 id="usergroupslist-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|[defs_ok_true](#schemadefs_ok_true)|true|none|none|
|usergroups|[[objs_subteam](#schemaobjs_subteam)]|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|ok|true|

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|callstack|string|false|none|Note: PHP callstack is only visible in dev/qa|
|error|string|true|none|none|
|ok|[defs_ok_false](#schemadefs_ok_false)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|error|not_authed|
|error|invalid_auth|
|error|account_inactive|
|error|token_revoked|
|error|no_permission|
|error|org_login_required|
|error|user_is_bot|
|error|user_is_restricted|
|error|invalid_arg_name|
|error|invalid_array_arg|
|error|invalid_charset|
|error|invalid_form_data|
|error|invalid_post_type|
|error|missing_post_type|
|error|team_added_to_org|
|error|invalid_json|
|error|json_not_object|
|error|request_timeout|
|error|upgrade_require|
|error|fatal_error|
|error|missing_charset|
|error|superfluous_charset|
|ok|false|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
slackAuth ( Scopes: usergroups:read )
</aside>

## usergroups_update

<a id="opIdusergroups_update"></a>

> Code samples

```bash
curl https://example.com/usergroups.update \
  -X POST \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'token: string' \
  -d 'channels=string&description=string&handle=string&include_count=true&name=string&usergroup=string'
```

`POST /usergroups.update`

Update an existing User Group

<a href="https://api.slack.com/methods/usergroups.update">API method documentation</a>

> Body parameter

```yaml
channels: string
description: string
handle: string
include_count: true
name: string
usergroup: string
```

<h3 id="usergroupsupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|token|header|string|true|Authentication token. Requires scope: `usergroups:write`|
|body|body|object|false|none|
|» channels|body|string|false|A comma separated string of encoded channel IDs for which the User Group uses as a default.|
|» description|body|string|false|A short description of the User Group.|
|» handle|body|string|false|A mention handle. Must be unique among channels, users and User Groups.|
|» include_count|body|boolean|false|Include the number of users in the User Group.|
|» name|body|string|false|A name for the User Group. Must be unique among User Groups.|
|» usergroup|body|string|true|The encoded ID of the User Group to update.|

> Example responses

> 200 Response

```json
{
  "ok": true,
  "usergroup": {
    "auto_type": null,
    "created_by": "U060R4BJ4",
    "date_create": 1447096577,
    "date_delete": 0,
    "date_update": 1447102109,
    "deleted_by": null,
    "description": "Marketing gurus, PR experts and product advocates.",
    "handle": "marketing-team",
    "id": "S0616NG6M",
    "is_external": false,
    "is_usergroup": true,
    "name": "Marketing Team",
    "prefs": {
      "channels": [],
      "groups": []
    },
    "team_id": "T060R4BHN",
    "updated_by": "U060R4BJ4",
    "user_count": 1,
    "users": [
      "U060R4BJ4",
      "U060RNRCZ"
    ]
  }
}
```

> default Response

```json
{
  "error": "invalid_auth",
  "ok": false
}
```

<h3 id="usergroupsupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Typical success response|Inline|
|default|Default|Typical error response|Inline|

<h3 id="usergroupsupdate-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|[defs_ok_true](#schemadefs_ok_true)|true|none|none|
|usergroup|[objs_subteam](#schemaobjs_subteam)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|ok|true|

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|callstack|string|false|none|Note: PHP callstack is only visible in dev/qa|
|error|string|true|none|none|
|ok|[defs_ok_false](#schemadefs_ok_false)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|error|permission_denied|
|error|not_authed|
|error|invalid_auth|
|error|account_inactive|
|error|token_revoked|
|error|no_permission|
|error|org_login_required|
|error|user_is_bot|
|error|user_is_restricted|
|error|invalid_arg_name|
|error|invalid_array_arg|
|error|invalid_charset|
|error|invalid_form_data|
|error|invalid_post_type|
|error|missing_post_type|
|error|team_added_to_org|
|error|invalid_json|
|error|json_not_object|
|error|request_timeout|
|error|upgrade_require|
|error|fatal_error|
|error|missing_charset|
|error|superfluous_charset|
|ok|false|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
slackAuth ( Scopes: usergroups:write )
</aside>

<h1 id="slack-web-api-usergroupsusers">usergroups.users</h1>

## usergroups_users_list

<a id="opIdusergroups_users_list"></a>

> Code samples

```bash
curl 'https://example.com/usergroups.users.list?token=string&usergroup=string' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /usergroups.users.list`

List all users in a User Group

<a href="https://api.slack.com/methods/usergroups.users.list">API method documentation</a>

<h3 id="usergroupsuserslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|token|query|string|true|Authentication token. Requires scope: `usergroups:read`|
|include_disabled|query|boolean|false|Allow results that involve disabled User Groups.|
|usergroup|query|string|true|The encoded ID of the User Group to update.|

> Example responses

> 200 Response

```json
{
  "ok": true,
  "users": [
    "U060R4BJ4",
    "W123A4BC5"
  ]
}
```

> default Response

```json
{
  "error": "invalid_auth",
  "ok": false
}
```

<h3 id="usergroupsuserslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Standard success response when used with a user token|Inline|
|default|Default|Standard failure response when used with an invalid token|Inline|

<h3 id="usergroupsuserslist-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|[defs_ok_true](#schemadefs_ok_true)|true|none|none|
|users|[[defs_user_id](#schemadefs_user_id)]|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|ok|true|

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|callstack|string|false|none|Note: PHP callstack is only visible in dev/qa|
|error|string|true|none|none|
|ok|[defs_ok_false](#schemadefs_ok_false)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|error|not_authed|
|error|invalid_auth|
|error|account_inactive|
|error|token_revoked|
|error|no_permission|
|error|org_login_required|
|error|user_is_bot|
|error|user_is_restricted|
|error|invalid_arg_name|
|error|invalid_array_arg|
|error|invalid_charset|
|error|invalid_form_data|
|error|invalid_post_type|
|error|missing_post_type|
|error|team_added_to_org|
|error|invalid_json|
|error|json_not_object|
|error|request_timeout|
|error|upgrade_require|
|error|fatal_error|
|error|missing_charset|
|error|superfluous_charset|
|ok|false|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
slackAuth ( Scopes: usergroups:read )
</aside>

## usergroups_users_update

<a id="opIdusergroups_users_update"></a>

> Code samples

```bash
curl https://example.com/usergroups.users.update \
  -X POST \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'token: string' \
  -d 'include_count=true&usergroup=string&users=string'
```

`POST /usergroups.users.update`

Update the list of users for a User Group

<a href="https://api.slack.com/methods/usergroups.users.update">API method documentation</a>

> Body parameter

```yaml
include_count: true
usergroup: string
users: string
```

<h3 id="usergroupsusersupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|token|header|string|true|Authentication token. Requires scope: `usergroups:write`|
|body|body|object|false|none|
|» include_count|body|boolean|false|Include the number of users in the User Group.|
|» usergroup|body|string|true|The encoded ID of the User Group to update.|
|» users|body|string|true|A comma separated string of encoded user IDs that represent the entire list of users for the User Group.|

> Example responses

> 200 Response

```json
{
  "ok": true,
  "usergroup": {
    "auto_type": null,
    "created_by": "U060R4BJ4",
    "date_create": 1447096577,
    "date_delete": 0,
    "date_update": 1447102109,
    "deleted_by": null,
    "description": "Marketing gurus, PR experts and product advocates.",
    "handle": "marketing-team",
    "id": "S0616NG6M",
    "is_external": false,
    "is_usergroup": true,
    "name": "Marketing Team",
    "prefs": {
      "channels": [],
      "groups": []
    },
    "team_id": "T060R4BHN",
    "updated_by": "U060R4BJ4",
    "user_count": 1,
    "users": [
      "U060R4BJ4",
      "U060RNRCZ"
    ]
  }
}
```

> default Response

```json
{
  "error": "invalid_auth",
  "ok": false
}
```

<h3 id="usergroupsusersupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Typical success response|Inline|
|default|Default|Typical error response|Inline|

<h3 id="usergroupsusersupdate-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|[defs_ok_true](#schemadefs_ok_true)|true|none|none|
|usergroup|[objs_subteam](#schemaobjs_subteam)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|ok|true|

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|callstack|string|false|none|Note: PHP callstack is only visible in dev/qa|
|error|string|true|none|none|
|ok|[defs_ok_false](#schemadefs_ok_false)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|error|permission_denied|
|error|not_authed|
|error|invalid_auth|
|error|account_inactive|
|error|token_revoked|
|error|no_permission|
|error|org_login_required|
|error|user_is_bot|
|error|user_is_restricted|
|error|invalid_arg_name|
|error|invalid_array_arg|
|error|invalid_charset|
|error|invalid_form_data|
|error|invalid_post_type|
|error|missing_post_type|
|error|team_added_to_org|
|error|invalid_json|
|error|json_not_object|
|error|request_timeout|
|error|upgrade_require|
|error|fatal_error|
|error|missing_charset|
|error|superfluous_charset|
|ok|false|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
slackAuth ( Scopes: usergroups:write )
</aside>

<h1 id="slack-web-api-users">users</h1>

## users_conversations

<a id="opIdusers_conversations"></a>

> Code samples

```bash
curl https://example.com/users.conversations \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /users.conversations`

List conversations the calling user may access.

<a href="https://api.slack.com/methods/users.conversations">API method documentation</a>

<h3 id="usersconversations-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|token|query|string|false|Authentication token. Requires scope: `conversations:read`|
|user|query|string|false|Browse conversations by a specific user ID's membership. Non-public channels are restricted to those where the calling user shares membership.|
|types|query|string|false|Mix and match channel types by providing a comma-separated list of any combination of `public_channel`, `private_channel`, `mpim`, `im`|
|exclude_archived|query|boolean|false|Set to `true` to exclude archived channels from the list|
|limit|query|integer|false|The maximum number of items to return. Fewer than the requested number of items may be returned, even if the end of the list hasn't been reached. Must be an integer no larger than 1000.|
|cursor|query|string|false|Paginate through collections of data by setting the `cursor` parameter to a `next_cursor` attribute returned by a previous request's `response_metadata`. Default value fetches the first "page" of the collection. See [pagination](/docs/pagination) for more detail.|

> Example responses

> 200 Response

```json
{
  "channels": [
    {
      "created": 1449252889,
      "creator": "U012A3CDE",
      "id": "C012AB3CD",
      "is_archived": false,
      "is_channel": true,
      "is_ext_shared": false,
      "is_general": true,
      "is_group": false,
      "is_im": false,
      "is_mpim": false,
      "is_org_shared": false,
      "is_pending_ext_shared": false,
      "is_private": false,
      "is_shared": false,
      "name": "general",
      "name_normalized": "general",
      "pending_shared": [],
      "previous_names": [],
      "purpose": {
        "creator": "",
        "last_set": 0,
        "value": "This channel is for team-wide communication and announcements. All team members are in this channel."
      },
      "topic": {
        "creator": "",
        "last_set": 0,
        "value": "Company-wide announcements and work-based matters"
      },
      "unlinked": 0
    },
    {
      "created": 1449252889,
      "creator": "U061F7AUR",
      "id": "C061EG9T2",
      "is_archived": false,
      "is_channel": true,
      "is_ext_shared": false,
      "is_general": false,
      "is_group": false,
      "is_im": false,
      "is_mpim": false,
      "is_org_shared": false,
      "is_pending_ext_shared": false,
      "is_private": false,
      "is_shared": false,
      "name": "random",
      "name_normalized": "random",
      "pending_shared": [],
      "previous_names": [],
      "purpose": {
        "creator": "",
        "last_set": 0,
        "value": "A place for non-work-related flimflam, faffing, hodge-podge or jibber-jabber you'd prefer to keep out of more focused work-related channels."
      },
      "topic": {
        "creator": "",
        "last_set": 0,
        "value": "Non-work banter and water cooler conversation"
      },
      "unlinked": 0
    }
  ],
  "ok": true,
  "response_metadata": {
    "next_cursor": "dGVhbTpDMDYxRkE1UEI="
  }
}
```

> default Response

```json
{
  "error": "invalid_auth",
  "ok": false
}
```

<h3 id="usersconversations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Typical success response with only public channels. Note how `num_members` and `is_member` are not returned like typical `conversations` objects.|Inline|
|default|Default|Typical error response|Inline|

<h3 id="usersconversations-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|channels|[[objs_conversation](#schemaobjs_conversation)]|true|none|none|
|ok|[defs_ok_true](#schemadefs_ok_true)|true|none|none|
|response_metadata|object|false|none|none|
|» next_cursor|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|ok|true|

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|callstack|string|false|none|Note: PHP callstack is only visible in dev/qa|
|error|string|true|none|none|
|ok|[defs_ok_false](#schemadefs_ok_false)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|error|method_not_supported_for_channel_type|
|error|missing_scope|
|error|invalid_types|
|error|invalid_cursor|
|error|invalid_limit|
|error|not_authed|
|error|invalid_auth|
|error|account_inactive|
|error|token_revoked|
|error|no_permission|
|error|invalid_arg_name|
|error|invalid_array_arg|
|error|invalid_charset|
|error|invalid_form_data|
|error|invalid_post_type|
|error|missing_post_type|
|error|team_added_to_org|
|error|invalid_json|
|error|json_not_object|
|error|request_timeout|
|error|upgrade_required|
|error|fatal_error|
|ok|false|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
slackAuth ( Scopes: channels:read groups:read im:read mpim:read )
</aside>

## users_deletePhoto

<a id="opIdusers_deletePhoto"></a>

> Code samples

```bash
curl https://example.com/users.deletePhoto \
  -X POST \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d 'token=string'
```

`POST /users.deletePhoto`

Delete the user profile photo

<a href="https://api.slack.com/methods/users.deletePhoto">API method documentation</a>

> Body parameter

```yaml
token: string
```

<h3 id="usersdeletephoto-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» token|body|string|true|Authentication token. Requires scope: `users.profile:write`|

> Example responses

> 200 Response

```json
{
  "ok": true
}
```

> default Response

```json
{
  "error": "invalid_auth",
  "ok": false
}
```

<h3 id="usersdeletephoto-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Typical success response|Inline|
|default|Default|Typical error response|Inline|

<h3 id="usersdeletephoto-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|[defs_ok_true](#schemadefs_ok_true)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|ok|true|

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|callstack|string|false|none|Note: PHP callstack is only visible in dev/qa|
|error|string|true|none|none|
|ok|[defs_ok_false](#schemadefs_ok_false)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|error|not_authed|
|error|invalid_auth|
|error|account_inactive|
|error|token_revoked|
|error|no_permission|
|error|org_login_required|
|error|user_is_bot|
|error|invalid_arg_name|
|error|invalid_array_arg|
|error|invalid_charset|
|error|invalid_form_data|
|error|invalid_post_type|
|error|missing_post_type|
|error|team_added_to_org|
|error|invalid_json|
|error|json_not_object|
|error|request_timeout|
|error|upgrade_required|
|error|fatal_error|
|ok|false|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
slackAuth ( Scopes: users.profile:write )
</aside>

## users_getPresence

<a id="opIdusers_getPresence"></a>

> Code samples

```bash
curl 'https://example.com/users.getPresence?token=string' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /users.getPresence`

Gets user presence information.

<a href="https://api.slack.com/methods/users.getPresence">API method documentation</a>

<h3 id="usersgetpresence-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|token|query|string|true|Authentication token. Requires scope: `users:read`|
|user|query|string|false|User to get presence info on. Defaults to the authed user.|

> Example responses

> 200 Response

```json
{
  "ok": true,
  "presence": "active"
}
```

> default Response

```json
{
  "error": "invalid_auth",
  "ok": false
}
```

<h3 id="usersgetpresence-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|When requesting information for a different user, this method just returns the current presence (either `active` or `away`).|Inline|
|default|Default|Typical error response|Inline|

<h3 id="usersgetpresence-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|auto_away|boolean|false|none|none|
|connection_count|integer|false|none|none|
|last_activity|integer|false|none|none|
|manual_away|boolean|false|none|none|
|ok|[defs_ok_true](#schemadefs_ok_true)|true|none|none|
|online|boolean|false|none|none|
|presence|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|ok|true|

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|true|none|none|
|ok|[defs_ok_false](#schemadefs_ok_false)|true|none|none|
|**additionalProperties**|object|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|ok|false|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
slackAuth ( Scopes: users:read )
</aside>

## users_identity

<a id="opIdusers_identity"></a>

> Code samples

```bash
curl https://example.com/users.identity \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /users.identity`

Get a user's identity.

<a href="https://api.slack.com/methods/users.identity">API method documentation</a>

<h3 id="usersidentity-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|token|query|string|false|Authentication token. Requires scope: `identity.basic`|

> Example responses

> 200 Response

```json
{
  "ok": true,
  "team": {
    "id": "T0G9PQBBK"
  },
  "user": {
    "id": "U0G9QF9C6",
    "name": "Sonny Whether"
  }
}
```

> default Response

```json
{
  "error": "account_inactive",
  "ok": false
}
```

<h3 id="usersidentity-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|You will receive at a minimum the following information:|Inline|
|default|Default|Typical error response|Inline|

<h3 id="usersidentity-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|
|» *anyOf*|object|false|none|Schema for 'identity.basic' scope|
|» ok|[defs_ok_true](#schemadefs_ok_true)|true|none|none|
|» team|object|true|none|none|
|» » id|[defs_team](#schemadefs_team)|true|none|none|
|» user|object|true|none|none|
|» » id|[defs_user_id](#schemadefs_user_id)|true|none|none|
|» » name|string|true|none|none|
|» *anyOf*|object|false|none|Schema for 'identity.basic,identity.email' scopes|
|» ok|[defs_ok_true](#schemadefs_ok_true)|true|none|none|
|» team|object|true|none|none|
|» » id|[defs_team](#schemadefs_team)|true|none|none|
|» user|object|true|none|none|
|» » email|string(email)|true|none|none|
|» » id|[defs_user_id](#schemadefs_user_id)|true|none|none|
|» » name|string|true|none|none|
|» *anyOf*|object|false|none|Schema for 'identity.basic,identity.avatar' scopes|
|» ok|[defs_ok_true](#schemadefs_ok_true)|true|none|none|
|» team|object|true|none|none|
|» » id|[defs_team](#schemadefs_team)|true|none|none|
|» user|object|true|none|none|
|» » id|[defs_user_id](#schemadefs_user_id)|true|none|none|
|» » image_192|string(url)|true|none|none|
|» » image_24|string(url)|true|none|none|
|» » image_32|string(url)|true|none|none|
|» » image_48|string(url)|true|none|none|
|» » image_512|string(url)|true|none|none|
|» » image_72|string(url)|true|none|none|
|» » name|string|true|none|none|
|» *anyOf*|object|false|none|Schema for 'identity.basic,identity.team' scopes|
|» ok|[defs_ok_true](#schemadefs_ok_true)|true|none|none|
|» team|object|true|none|none|
|» » domain|string|true|none|none|
|» » id|[defs_team](#schemadefs_team)|true|none|none|
|» » image_102|string(url)|true|none|none|
|» » image_132|string(url)|true|none|none|
|» » image_230|string(url)|true|none|none|
|» » image_34|string(url)|true|none|none|
|» » image_44|string(url)|true|none|none|
|» » image_68|string(url)|true|none|none|
|» » image_88|string(url)|true|none|none|
|» » image_default|boolean|true|none|none|
|» » name|string|true|none|none|
|» user|object|true|none|none|
|» » id|[defs_user_id](#schemadefs_user_id)|true|none|none|
|» » name|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|» ok|true|
|» ok|true|
|» ok|true|
|» ok|true|

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|callstack|string|false|none|Note: PHP callstack is only visible in dev/qa|
|error|string|true|none|none|
|ok|[defs_ok_false](#schemadefs_ok_false)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|error|not_authed|
|error|invalid_auth|
|error|account_inactive|
|error|token_revoked|
|error|no_permission|
|error|org_login_required|
|error|user_is_bot|
|error|invalid_arg_name|
|error|invalid_array_arg|
|error|invalid_charset|
|error|invalid_form_data|
|error|invalid_post_type|
|error|missing_post_type|
|error|team_added_to_org|
|error|invalid_json|
|error|json_not_object|
|error|request_timeout|
|error|upgrade_required|
|error|fatal_error|
|ok|false|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
slackAuth ( Scopes: identity.basic )
</aside>

## users_info

<a id="opIdusers_info"></a>

> Code samples

```bash
curl 'https://example.com/users.info?token=string' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /users.info`

Gets information about a user.

<a href="https://api.slack.com/methods/users.info">API method documentation</a>

<h3 id="usersinfo-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|token|query|string|true|Authentication token. Requires scope: `users:read`|
|include_locale|query|boolean|false|Set this to `true` to receive the locale for this user. Defaults to `false`|
|user|query|string|false|User to get info on|

> Example responses

> 200 Response

```json
{
  "ok": true,
  "user": {
    "color": "9f69e7",
    "deleted": false,
    "has_2fa": false,
    "id": "W012A3CDE",
    "is_admin": true,
    "is_app_user": false,
    "is_bot": false,
    "is_owner": false,
    "is_primary_owner": false,
    "is_restricted": false,
    "is_ultra_restricted": false,
    "name": "spengler",
    "profile": {
      "avatar_hash": "ge3b51ca72de",
      "display_name": "spengler",
      "display_name_normalized": "spengler",
      "email": "spengler@ghostbusters.example.com",
      "image_192": "https://.../avatar/e3b51ca72dee4ef87916ae2b9240df50.jpg",
      "image_24": "https://.../avatar/e3b51ca72dee4ef87916ae2b9240df50.jpg",
      "image_32": "https://.../avatar/e3b51ca72dee4ef87916ae2b9240df50.jpg",
      "image_48": "https://.../avatar/e3b51ca72dee4ef87916ae2b9240df50.jpg",
      "image_512": "https://.../avatar/e3b51ca72dee4ef87916ae2b9240df50.jpg",
      "image_72": "https://.../avatar/e3b51ca72dee4ef87916ae2b9240df50.jpg",
      "image_original": "https://.../avatar/e3b51ca72dee4ef87916ae2b9240df50.jpg",
      "real_name": "Egon Spengler",
      "real_name_normalized": "Egon Spengler",
      "status_emoji": ":books:",
      "status_text": "Print is dead",
      "team": "T012AB3C4"
    },
    "real_name": "Egon Spengler",
    "team_id": "T012AB3C4",
    "tz": "America/Los_Angeles",
    "tz_label": "Pacific Daylight Time",
    "tz_offset": -25200,
    "updated": 1502138686
  }
}
```

> default Response

```json
{
  "error": "user_not_found",
  "ok": false
}
```

<h3 id="usersinfo-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Typical success response|Inline|
|default|Default|Typical error response|Inline|

<h3 id="usersinfo-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|[defs_ok_true](#schemadefs_ok_true)|true|none|none|
|user|[objs_user](#schemaobjs_user)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|ok|true|

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|callstack|string|false|none|none|
|error|string|true|none|none|
|ok|[defs_ok_false](#schemadefs_ok_false)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|error|user_not_found|
|error|user_not_visible|
|error|not_authed|
|error|invalid_auth|
|error|account_inactive|
|error|invalid_arg_name|
|error|invalid_array_arg|
|error|invalid_charset|
|error|invalid_form_data|
|error|invalid_post_type|
|error|missing_post_type|
|error|team_added_to_org|
|error|invalid_json|
|error|json_not_object|
|error|request_timeout|
|error|upgrade_required|
|ok|false|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
slackAuth ( Scopes: users:read )
</aside>

## users_list

<a id="opIdusers_list"></a>

> Code samples

```bash
curl https://example.com/users.list \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /users.list`

Lists all users in a Slack team.

<a href="https://api.slack.com/methods/users.list">API method documentation</a>

<h3 id="userslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|token|query|string|false|Authentication token. Requires scope: `users:read`|
|limit|query|integer|false|The maximum number of items to return. Fewer than the requested number of items may be returned, even if the end of the users list hasn't been reached. Providing no `limit` value will result in Slack attempting to deliver you the entire result set. If the collection is too large you may experience `limit_required` or HTTP 500 errors.|
|cursor|query|string|false|Paginate through collections of data by setting the `cursor` parameter to a `next_cursor` attribute returned by a previous request's `response_metadata`. Default value fetches the first "page" of the collection. See [pagination](/docs/pagination) for more detail.|
|include_locale|query|boolean|false|Set this to `true` to receive the locale for users. Defaults to `false`|

> Example responses

> 200 Response

```json
{
  "cache_ts": 1498777272,
  "members": [
    {
      "color": "9f69e7",
      "deleted": false,
      "has_2fa": false,
      "id": "W012A3CDE",
      "is_admin": true,
      "is_app_user": false,
      "is_bot": false,
      "is_owner": false,
      "is_primary_owner": false,
      "is_restricted": false,
      "is_ultra_restricted": false,
      "name": "spengler",
      "profile": {
        "avatar_hash": "ge3b51ca72de",
        "display_name": "spengler",
        "display_name_normalized": "spengler",
        "email": "spengler@ghostbusters.example.com",
        "image_192": "https://.../avatar/e3b51ca72dee4ef87916ae2b9240df50.jpg",
        "image_24": "https://.../avatar/e3b51ca72dee4ef87916ae2b9240df50.jpg",
        "image_32": "https://.../avatar/e3b51ca72dee4ef87916ae2b9240df50.jpg",
        "image_48": "https://.../avatar/e3b51ca72dee4ef87916ae2b9240df50.jpg",
        "image_512": "https://.../avatar/e3b51ca72dee4ef87916ae2b9240df50.jpg",
        "image_72": "https://.../avatar/e3b51ca72dee4ef87916ae2b9240df50.jpg",
        "real_name": "Egon Spengler",
        "real_name_normalized": "Egon Spengler",
        "status_emoji": ":books:",
        "status_text": "Print is dead",
        "team": "T012AB3C4"
      },
      "real_name": "spengler",
      "team_id": "T012AB3C4",
      "tz": "America/Los_Angeles",
      "tz_label": "Pacific Daylight Time",
      "tz_offset": -25200,
      "updated": 1502138686
    },
    {
      "color": "9f69e7",
      "deleted": false,
      "has_2fa": false,
      "id": "W07QCRPA4",
      "is_admin": true,
      "is_bot": false,
      "is_owner": false,
      "is_primary_owner": false,
      "is_restricted": false,
      "is_ultra_restricted": false,
      "name": "glinda",
      "profile": {
        "avatar_hash": "8fbdd10b41c6",
        "display_name": "Glinda the Fairly Good",
        "display_name_normalized": "Glinda the Fairly Good",
        "email": "glenda@south.oz.coven",
        "first_name": "Glinda",
        "image_1024": "https://a.slack-edge.com...png",
        "image_192": "https://a.slack-edge.com...png",
        "image_24": "https://a.slack-edge.com...png",
        "image_32": "https://a.slack-edge.com...png",
        "image_48": "https://a.slack-edge.com...png",
        "image_512": "https://a.slack-edge.com...png",
        "image_72": "https://a.slack-edge.com...png",
        "image_original": "https://a.slack-edge.com...png",
        "last_name": "Southgood",
        "phone": "",
        "real_name": "Glinda Southgood",
        "real_name_normalized": "Glinda Southgood",
        "skype": "",
        "title": "Glinda the Good"
      },
      "real_name": "Glinda Southgood",
      "team_id": "T0G9PQBBK",
      "tz": "America/Los_Angeles",
      "tz_label": "Pacific Daylight Time",
      "tz_offset": -25200,
      "updated": 1480527098
    }
  ],
  "ok": true,
  "response_metadata": {
    "next_cursor": "dXNlcjpVMEc5V0ZYTlo="
  }
}
```

> default Response

```json
{
  "error": "invalid_cursor",
  "ok": false
}
```

<h3 id="userslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Typical success response|Inline|
|default|Default|Typical error response|Inline|

<h3 id="userslist-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cache_ts|integer|true|none|none|
|members|[[objs_user](#schemaobjs_user)]|true|none|none|
|ok|[defs_ok_true](#schemadefs_ok_true)|true|none|none|
|response_metadata|[objs_response_metadata](#schemaobjs_response_metadata)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|ok|true|

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|callstack|string|false|none|Note: PHP callstack is only visible in dev/qa|
|error|string|true|none|none|
|ok|[defs_ok_false](#schemadefs_ok_false)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|error|limit_required|
|error|invalid_cursor|
|error|not_authed|
|error|invalid_auth|
|error|account_inactive|
|error|no_permission|
|error|invalid_arg_name|
|error|invalid_array_arg|
|error|invalid_charset|
|error|invalid_form_data|
|error|invalid_post_type|
|error|missing_post_type|
|error|team_added_to_org|
|error|invalid_json|
|error|json_not_object|
|error|request_timeout|
|error|upgrade_required|
|error|fatal_error|
|ok|false|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
slackAuth ( Scopes: users:read )
</aside>

## users_lookupByEmail

<a id="opIdusers_lookupByEmail"></a>

> Code samples

```bash
curl 'https://example.com/users.lookupByEmail?token=string&email=string' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /users.lookupByEmail`

Find a user with an email address.

<a href="https://api.slack.com/methods/users.lookupByEmail">API method documentation</a>

<h3 id="userslookupbyemail-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|token|query|string|true|Authentication token. Requires scope: `users:read.email`|
|email|query|string|true|An email address belonging to a user in the workspace|

> Example responses

> 200 Response

```json
{
  "ok": true,
  "user": {
    "color": "9f69e7",
    "deleted": false,
    "has_2fa": false,
    "id": "W012A3CDE",
    "is_admin": true,
    "is_app_user": false,
    "is_bot": false,
    "is_owner": false,
    "is_primary_owner": false,
    "is_restricted": false,
    "is_ultra_restricted": false,
    "name": "spengler",
    "profile": {
      "avatar_hash": "ge3b51ca72de",
      "display_name": "spengler",
      "display_name_normalized": "spengler",
      "email": "spengler@ghostbusters.example.com",
      "image_192": "https://.../avatar/e3b51ca72dee4ef87916ae2b9240df50.jpg",
      "image_24": "https://.../avatar/e3b51ca72dee4ef87916ae2b9240df50.jpg",
      "image_32": "https://.../avatar/e3b51ca72dee4ef87916ae2b9240df50.jpg",
      "image_48": "https://.../avatar/e3b51ca72dee4ef87916ae2b9240df50.jpg",
      "image_512": "https://.../avatar/e3b51ca72dee4ef87916ae2b9240df50.jpg",
      "image_72": "https://.../avatar/e3b51ca72dee4ef87916ae2b9240df50.jpg",
      "real_name": "Egon Spengler",
      "real_name_normalized": "Egon Spengler",
      "status_emoji": ":books:",
      "status_text": "Print is dead",
      "team": "T012AB3C4"
    },
    "real_name": "Egon Spengler",
    "team_id": "T012AB3C4",
    "tz": "America/Los_Angeles",
    "tz_label": "Pacific Daylight Time",
    "tz_offset": -25200,
    "updated": 1502138686
  }
}
```

> default Response

```json
{
  "error": "users_not_found",
  "ok": false
}
```

<h3 id="userslookupbyemail-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Typical success response|Inline|
|default|Default|Typical error response|Inline|

<h3 id="userslookupbyemail-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|[defs_ok_true](#schemadefs_ok_true)|true|none|none|
|user|[objs_user](#schemaobjs_user)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|ok|true|

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|callstack|string|false|none|Note: PHP callstack is only visible in dev/qa|
|error|string|true|none|none|
|ok|[defs_ok_false](#schemadefs_ok_false)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|error|users_not_found|
|error|enterprise_is_restricted|
|error|not_authed|
|error|invalid_auth|
|error|account_inactive|
|error|no_permission|
|error|invalid_arg_name|
|error|invalid_array_arg|
|error|invalid_charset|
|error|invalid_form_data|
|error|invalid_post_type|
|error|missing_post_type|
|error|team_added_to_org|
|error|invalid_json|
|error|json_not_object|
|error|request_timeout|
|error|upgrade_required|
|error|fatal_error|
|ok|false|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
slackAuth ( Scopes: users:read.email )
</aside>

## users_setActive

<a id="opIdusers_setActive"></a>

> Code samples

```bash
curl https://example.com/users.setActive \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'token: string'
```

`POST /users.setActive`

Marked a user as active. Deprecated and non-functional.

<a href="https://api.slack.com/methods/users.setActive">API method documentation</a>

<h3 id="userssetactive-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|token|header|string|true|Authentication token. Requires scope: `users:write`|

> Example responses

> 200 Response

```json
{
  "ok": true
}
```

> default Response

```json
{
  "error": "invalid_auth",
  "ok": false
}
```

<h3 id="userssetactive-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Typical success response|Inline|
|default|Default|Typical error response|Inline|

<h3 id="userssetactive-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|[defs_ok_true](#schemadefs_ok_true)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|ok|true|

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|callstack|string|false|none|Note: PHP callstack is only visible in dev/qa|
|error|string|true|none|none|
|ok|[defs_ok_false](#schemadefs_ok_false)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|error|not_authed|
|error|invalid_auth|
|error|account_inactive|
|error|token_revoked|
|error|no_permission|
|error|org_login_required|
|error|ekm_access_denied|
|error|missing_scope|
|error|invalid_arguments|
|error|invalid_arg_name|
|error|invalid_charset|
|error|invalid_form_data|
|error|invalid_post_type|
|error|missing_post_type|
|error|team_added_to_org|
|error|request_timeout|
|error|fatal_error|
|error|internal_error|
|ok|false|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
slackAuth ( Scopes: users:write )
</aside>

## users_setPhoto

<a id="opIdusers_setPhoto"></a>

> Code samples

```bash
curl https://example.com/users.setPhoto \
  -X POST \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d 'crop_w=string&crop_x=string&crop_y=string&image=string&token=string'
```

`POST /users.setPhoto`

Set the user profile photo

<a href="https://api.slack.com/methods/users.setPhoto">API method documentation</a>

> Body parameter

```yaml
crop_w: string
crop_x: string
crop_y: string
image: string
token: string
```

<h3 id="userssetphoto-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» crop_w|body|string|false|Width/height of crop box (always square)|
|» crop_x|body|string|false|X coordinate of top-left corner of crop box|
|» crop_y|body|string|false|Y coordinate of top-left corner of crop box|
|» image|body|string|false|File contents via `multipart/form-data`.|
|» token|body|string|true|Authentication token. Requires scope: `users.profile:write`|

> Example responses

> 200 Response

```json
{
  "ok": true
}
```

> default Response

```json
{
  "error": "invalid_auth",
  "ok": false
}
```

<h3 id="userssetphoto-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Typical success response|Inline|
|default|Default|Typical error response|Inline|

<h3 id="userssetphoto-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|[defs_ok_true](#schemadefs_ok_true)|true|none|none|
|profile|object|true|none|none|
|» avatar_hash|string|true|none|none|
|» image_1024|string(uri)|true|none|none|
|» image_192|string(uri)|true|none|none|
|» image_24|string(uri)|true|none|none|
|» image_32|string(uri)|true|none|none|
|» image_48|string(uri)|true|none|none|
|» image_512|string(uri)|true|none|none|
|» image_72|string(uri)|true|none|none|
|» image_original|string(uri)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|ok|true|

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|callstack|string|false|none|Note: PHP callstack is only visible in dev/qa|
|debug_step|string|false|none|possibly DEV/QA only|
|dims|string|false|none|possibly DEV/QA only|
|error|string|true|none|none|
|ok|[defs_ok_false](#schemadefs_ok_false)|true|none|none|
|time_ident|integer|false|none|possibly DEV/QA only|

#### Enumerated Values

|Property|Value|
|---|---|
|error|bad_image|
|error|too_large|
|error|too_many_frames|
|error|not_found|
|error|not_authed|
|error|invalid_auth|
|error|account_inactive|
|error|token_revoked|
|error|no_permission|
|error|org_login_required|
|error|user_is_bot|
|error|invalid_arg_name|
|error|invalid_array_arg|
|error|invalid_charset|
|error|invalid_form_data|
|error|invalid_post_type|
|error|missing_post_type|
|error|team_added_to_org|
|error|invalid_json|
|error|json_not_object|
|error|request_timeout|
|error|upgrade_required|
|error|fatal_error|
|ok|false|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
slackAuth ( Scopes: users.profile:write )
</aside>

## users_setPresence

<a id="opIdusers_setPresence"></a>

> Code samples

```bash
curl https://example.com/users.setPresence \
  -X POST \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'token: string' \
  -d 'presence=string'
```

`POST /users.setPresence`

Manually sets user presence.

<a href="https://api.slack.com/methods/users.setPresence">API method documentation</a>

> Body parameter

```yaml
presence: string
```

<h3 id="userssetpresence-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|token|header|string|true|Authentication token. Requires scope: `users:write`|
|body|body|object|true|none|
|» presence|body|string|true|Either `auto` or `away`|

> Example responses

> 200 Response

```json
{
  "ok": true
}
```

> default Response

```json
{
  "error": "invalid_auth",
  "ok": false
}
```

<h3 id="userssetpresence-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Typical success response|Inline|
|default|Default|Typical error response|Inline|

<h3 id="userssetpresence-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|[defs_ok_true](#schemadefs_ok_true)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|ok|true|

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|callstack|string|false|none|Note: PHP callstack is only visible in dev/qa|
|error|string|true|none|none|
|ok|[defs_ok_false](#schemadefs_ok_false)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|error|invalid_presence|
|error|not_authed|
|error|invalid_auth|
|error|account_inactive|
|error|token_revoked|
|error|no_permission|
|error|org_login_required|
|error|invalid_arg_name|
|error|invalid_array_arg|
|error|invalid_charset|
|error|invalid_form_data|
|error|invalid_post_type|
|error|missing_post_type|
|error|team_added_to_org|
|error|invalid_json|
|error|json_not_object|
|error|request_timeout|
|error|upgrade_required|
|error|fatal_error|
|ok|false|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
slackAuth ( Scopes: users:write )
</aside>

<h1 id="slack-web-api-usersprofile">users.profile</h1>

## users_profile_get

<a id="opIdusers_profile_get"></a>

> Code samples

```bash
curl 'https://example.com/users.profile.get?token=string' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /users.profile.get`

Retrieves a user's profile information.

<a href="https://api.slack.com/methods/users.profile.get">API method documentation</a>

<h3 id="usersprofileget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|token|query|string|true|Authentication token. Requires scope: `users.profile:read`|
|include_labels|query|boolean|false|Include labels for each ID in custom profile fields|
|user|query|string|false|User to retrieve profile info for|

> Example responses

> 200 Response

```json
{
  "ok": true,
  "profile": {
    "avatar_hash": "ge3b51ca72de",
    "display_name": "spengler",
    "display_name_normalized": "spengler",
    "email": "spengler@ghostbusters.example.com",
    "image_192": "https://.../avatar/e3b51ca72dee4ef87916ae2b9240df50.jpg",
    "image_24": "https://.../avatar/e3b51ca72dee4ef87916ae2b9240df50.jpg",
    "image_32": "https://.../avatar/e3b51ca72dee4ef87916ae2b9240df50.jpg",
    "image_48": "https://.../avatar/e3b51ca72dee4ef87916ae2b9240df50.jpg",
    "image_512": "https://.../avatar/e3b51ca72dee4ef87916ae2b9240df50.jpg",
    "image_72": "https://.../avatar/e3b51ca72dee4ef87916ae2b9240df50.jpg",
    "image_original": "https://.../avatar/e3b51ca72dee4ef87916ae2b9240df50.jpg",
    "real_name": "Egon Spengler",
    "real_name_normalized": "Egon Spengler",
    "status_emoji": ":books:",
    "status_expiration": 0,
    "status_text": "Print is dead",
    "team": "T012AB3C4"
  }
}
```

> default Response

```json
{
  "error": "user_not_found",
  "ok": false
}
```

<h3 id="usersprofileget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Typical success response|Inline|
|default|Default|Typical error response|Inline|

<h3 id="usersprofileget-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|[defs_ok_true](#schemadefs_ok_true)|true|none|none|
|profile|[objs_user_profile](#schemaobjs_user_profile)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|ok|true|

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|callstack|string|false|none|Note: PHP callstack is only visible in dev/qa|
|error|string|true|none|none|
|ok|[defs_ok_false](#schemadefs_ok_false)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|error|user_not_found|
|error|not_authed|
|error|invalid_auth|
|error|account_inactive|
|error|token_revoked|
|error|no_permission|
|error|org_login_required|
|error|user_is_bot|
|error|invalid_arg_name|
|error|invalid_array_arg|
|error|invalid_charset|
|error|invalid_form_data|
|error|invalid_post_type|
|error|missing_post_type|
|error|team_added_to_org|
|error|invalid_json|
|error|json_not_object|
|error|request_timeout|
|error|upgrade_required|
|error|fatal_error|
|ok|false|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
slackAuth ( Scopes: users.profile:read )
</aside>

## users_profile_set

<a id="opIdusers_profile_set"></a>

> Code samples

```bash
curl https://example.com/users.profile.set \
  -X POST \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'token: string' \
  -d 'name=string&profile=string&user=string&value=string'
```

`POST /users.profile.set`

Set the profile information for a user.

<a href="https://api.slack.com/methods/users.profile.set">API method documentation</a>

> Body parameter

```yaml
name: string
profile: string
user: string
value: string
```

<h3 id="usersprofileset-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|token|header|string|true|Authentication token. Requires scope: `users.profile:write`|
|body|body|object|false|none|
|» name|body|string|false|Name of a single key to set. Usable only if `profile` is not passed.|
|» profile|body|string|false|Collection of key:value pairs presented as a URL-encoded JSON hash. At most 50 fields may be set. Each field name is limited to 255 characters.|
|» user|body|string|false|ID of user to change. This argument may only be specified by team admins on paid teams.|
|» value|body|string|false|Value to set a single key to. Usable only if `profile` is not passed.|

> Example responses

> 200 Response

```json
{
  "ok": true,
  "profile": {
    "avatar_hash": "ge3b51ca72de",
    "display_name": "spengler",
    "display_name_normalized": "spengler",
    "email": "spengler@ghostbusters.example.com",
    "image_192": "https://.../avatar/e3b51ca72dee4ef87916ae2b9240df50.jpg",
    "image_24": "https://.../avatar/e3b51ca72dee4ef87916ae2b9240df50.jpg",
    "image_32": "https://.../avatar/e3b51ca72dee4ef87916ae2b9240df50.jpg",
    "image_48": "https://.../avatar/e3b51ca72dee4ef87916ae2b9240df50.jpg",
    "image_512": "https://.../avatar/e3b51ca72dee4ef87916ae2b9240df50.jpg",
    "image_72": "https://.../avatar/e3b51ca72dee4ef87916ae2b9240df50.jpg",
    "real_name": "Egon Spengler",
    "real_name_normalized": "Egon Spengler",
    "status_emoji": ":books:",
    "status_expiration": 0,
    "status_text": "Print is dead",
    "team": "T012AB3C4"
  }
}
```

> default Response

```json
{
  "error": "invalid_profile",
  "ok": false
}
```

<h3 id="usersprofileset-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Typical success response|Inline|
|default|Default|Typical error response|Inline|

<h3 id="usersprofileset-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|email_pending|string(email)|false|none|none|
|ok|[defs_ok_true](#schemadefs_ok_true)|true|none|none|
|profile|[objs_user_profile](#schemaobjs_user_profile)|true|none|none|
|username|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|ok|true|

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|callstack|string|false|none|Note: PHP callstack is only visible in dev/qa|
|error|string|true|none|none|
|ok|[defs_ok_false](#schemadefs_ok_false)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|error|reserved_name|
|error|invalid_profile|
|error|profile_set_failed|
|error|not_admin|
|error|not_app_admin|
|error|cannot_update_admin_user|
|error|not_authed|
|error|invalid_auth|
|error|account_inactive|
|error|token_revoked|
|error|no_permission|
|error|org_login_required|
|error|user_is_bot|
|error|invalid_arg_name|
|error|invalid_array_arg|
|error|invalid_charset|
|error|invalid_form_data|
|error|invalid_post_type|
|error|missing_post_type|
|error|team_added_to_org|
|error|invalid_json|
|error|json_not_object|
|error|request_timeout|
|error|upgrade_required|
|error|fatal_error|
|ok|false|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
slackAuth ( Scopes: users.profile:write )
</aside>

<h1 id="slack-web-api-views">views</h1>

## views_open

<a id="opIdviews_open"></a>

> Code samples

```bash
curl 'https://example.com/views.open?trigger_id=string&view=string' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'token: string'
```

`GET /views.open`

Open a view for a user.

<a href="https://api.slack.com/methods/views.open">API method documentation</a>

<h3 id="viewsopen-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|token|header|string|true|Authentication token. Requires scope: `none`|
|trigger_id|query|string|true|Exchange a trigger to post to the user.|
|view|query|string|true|A [view payload](/reference/surfaces/views). This must be a JSON-encoded string.|

> Example responses

> 200 Response

```json
{
  "ok": true,
  "view": {
    "app_id": "AA4928AQ",
    "blocks": [
      {
        "block_id": "a_block_id",
        "element": {
          "action_id": "an_action_id",
          "type": "plain_text_input"
        },
        "label": {
          "emoji": true,
          "text": "A simple label",
          "type": "plain_text"
        },
        "optional": false,
        "type": "input"
      }
    ],
    "bot_id": "BA13894H",
    "callback_id": "identify_your_modals",
    "clear_on_close": false,
    "external_id": "",
    "hash": "156772938.1827394",
    "id": "VMHU10V25",
    "notify_on_close": false,
    "private_metadata": "Shh it is a secret",
    "root_view_id": "VMHU10V25",
    "state": {
      "values": {}
    },
    "submit": {
      "text": "Create",
      "type": "plain_text"
    },
    "team_id": "T8N4K1JN",
    "title": {
      "text": "Quite a plain modal",
      "type": "plain_text"
    },
    "type": "modal"
  }
}
```

> default Response

```json
{
  "error": "invalid_arguments",
  "ok": false,
  "response_metadata": {
    "messages": [
      "invalid `trigger_id`"
    ]
  }
}
```

<h3 id="viewsopen-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Typical success response includes the opened view payload.|Inline|
|default|Default|Typical error response, before getting to any possible validation errors.|Inline|

<h3 id="viewsopen-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|[defs_ok_true](#schemadefs_ok_true)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|ok|true|

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|[defs_ok_false](#schemadefs_ok_false)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|ok|false|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
slackAuth ( Scopes: none )
</aside>

## views_publish

<a id="opIdviews_publish"></a>

> Code samples

```bash
curl 'https://example.com/views.publish?user_id=string&view=string' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'token: string'
```

`GET /views.publish`

Publish a static view for a User.

<a href="https://api.slack.com/methods/views.publish">API method documentation</a>

<h3 id="viewspublish-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|token|header|string|true|Authentication token. Requires scope: `none`|
|user_id|query|string|true|`id` of the user you want publish a view to.|
|view|query|string|true|A [view payload](/reference/surfaces/views). This must be a JSON-encoded string.|
|hash|query|string|false|A string that represents view state to protect against possible race conditions.|

> Example responses

> 200 Response

```json
{
  "ok": true,
  "view": {
    "app_id": "AA4928AQ",
    "blocks": [
      {
        "block_id": "2WGp9",
        "text": {
          "text": "A simple section with some sample sentence.",
          "type": "mrkdwn",
          "verbatim": false
        },
        "type": "section"
      }
    ],
    "bot_id": "BA13894H",
    "callback_id": "identify_your_home_tab",
    "clear_on_close": false,
    "close": null,
    "external_id": "",
    "hash": "156772938.1827394",
    "id": "VMHU10V25",
    "notify_on_close": false,
    "previous_view_id": null,
    "private_metadata": "Shh it is a secret",
    "root_view_id": "VMHU10V25",
    "state": {
      "values": {}
    },
    "submit": null,
    "team_id": "T8N4K1JN",
    "type": "home"
  }
}
```

> default Response

```json
{
  "error": "invalid_arguments",
  "ok": false,
  "response_metadata": {
    "messages": [
      "invalid `user_id`"
    ]
  }
}
```

<h3 id="viewspublish-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Typical success response includes the published view payload.|Inline|
|default|Default|Typical error response, before getting to any possible validation errors.|Inline|

<h3 id="viewspublish-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|[defs_ok_true](#schemadefs_ok_true)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|ok|true|

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|[defs_ok_false](#schemadefs_ok_false)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|ok|false|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
slackAuth ( Scopes: none )
</aside>

## views_push

<a id="opIdviews_push"></a>

> Code samples

```bash
curl 'https://example.com/views.push?trigger_id=string&view=string' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'token: string'
```

`GET /views.push`

Push a view onto the stack of a root view.

<a href="https://api.slack.com/methods/views.push">API method documentation</a>

<h3 id="viewspush-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|token|header|string|true|Authentication token. Requires scope: `none`|
|trigger_id|query|string|true|Exchange a trigger to post to the user.|
|view|query|string|true|A [view payload](/reference/surfaces/views). This must be a JSON-encoded string.|

> Example responses

> 200 Response

```json
{
  "ok": true,
  "view": {
    "app_id": "AAD3351BQ",
    "blocks": [
      {
        "block_id": "edit_details",
        "element": {
          "action_id": "detail_input",
          "type": "plain_text_input"
        },
        "label": {
          "text": "Edit details",
          "type": "plain_text"
        },
        "type": "input"
      }
    ],
    "bot_id": "BADF7A34H",
    "callback_id": "view_4",
    "clear_on_close": true,
    "close": {
      "emoji": true,
      "text": "Back",
      "type": "plain_text"
    },
    "external_id": "",
    "hash": "1569362015.55b5e41b",
    "id": "VNM522E2U",
    "notify_on_close": false,
    "previous_view_id": null,
    "private_metadata": "",
    "root_view_id": "VNN729E3U",
    "state": {
      "values": {}
    },
    "submit": {
      "emoji": true,
      "text": "Save",
      "type": "plain_text"
    },
    "team_id": "T9M4RL1JM",
    "title": {
      "emoji": true,
      "text": "Pushed Modal",
      "type": "plain_text"
    },
    "type": "modal"
  }
}
```

> default Response

```json
{
  "error": "invalid_arguments",
  "ok": false,
  "response_metadata": {
    "messages": [
      "missing required field: title"
    ]
  }
}
```

<h3 id="viewspush-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Typical success response includes the pushed view payload.|Inline|
|default|Default|Typical error response.|Inline|

<h3 id="viewspush-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|[defs_ok_true](#schemadefs_ok_true)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|ok|true|

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|[defs_ok_false](#schemadefs_ok_false)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|ok|false|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
slackAuth ( Scopes: none )
</aside>

## views_update

<a id="opIdviews_update"></a>

> Code samples

```bash
curl https://example.com/views.update \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'token: string'
```

`GET /views.update`

Update an existing view.

<a href="https://api.slack.com/methods/views.update">API method documentation</a>

<h3 id="viewsupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|token|header|string|true|Authentication token. Requires scope: `none`|
|view_id|query|string|false|A unique identifier of the view to be updated. Either `view_id` or `external_id` is required.|
|external_id|query|string|false|A unique identifier of the view set by the developer. Must be unique for all views on a team. Max length of 255 characters. Either `view_id` or `external_id` is required.|
|view|query|string|false|A [view object](/reference/surfaces/views). This must be a JSON-encoded string.|
|hash|query|string|false|A string that represents view state to protect against possible race conditions.|

> Example responses

> 200 Response

```json
{
  "ok": true,
  "view": {
    "app_id": "AAD3351BQ",
    "blocks": [
      {
        "accessory": {
          "action_id": "button_4",
          "text": {
            "text": "Click me",
            "type": "plain_text"
          },
          "type": "button"
        },
        "block_id": "s_block",
        "text": {
          "emoji": true,
          "text": "I am but an updated modal",
          "type": "plain_text"
        },
        "type": "section"
      }
    ],
    "bot_id": "BADF7A34H",
    "callback_id": "view_2",
    "clear_on_close": true,
    "close": {
      "emoji": true,
      "text": "Close",
      "type": "plain_text"
    },
    "external_id": "",
    "hash": "1569262015.55b5e41b",
    "id": "VNM522E2U",
    "notify_on_close": false,
    "previous_view_id": null,
    "private_metadata": "",
    "root_view_id": "VNN729E3U",
    "state": {
      "values": {}
    },
    "submit": null,
    "team_id": "T9M4RL1JM",
    "title": {
      "emoji": true,
      "text": "Updated Modal",
      "type": "plain_text"
    },
    "type": "modal"
  }
}
```

> default Response

```json
{
  "error": "not_found",
  "ok": false
}
```

<h3 id="viewsupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Typical success response includes the updated view payload.|Inline|
|default|Default|Typical error response.|Inline|

<h3 id="viewsupdate-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|[defs_ok_true](#schemadefs_ok_true)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|ok|true|

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|[defs_ok_false](#schemadefs_ok_false)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|ok|false|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
slackAuth ( Scopes: none )
</aside>

<h1 id="slack-web-api-workflows">workflows</h1>

## workflows_stepCompleted

<a id="opIdworkflows_stepCompleted"></a>

> Code samples

```bash
curl 'https://example.com/workflows.stepCompleted?workflow_step_execute_id=string' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'token: string'
```

`GET /workflows.stepCompleted`

Indicate that an app's step in a workflow completed execution.

<a href="https://api.slack.com/methods/workflows.stepCompleted">API method documentation</a>

<h3 id="workflowsstepcompleted-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|token|header|string|true|Authentication token. Requires scope: `workflow.steps:execute`|
|workflow_step_execute_id|query|string|true|Context identifier that maps to the correct workflow step execution.|
|outputs|query|string|false|Key-value object of outputs from your step. Keys of this object reflect the configured `key` properties of your [`outputs`](/reference/workflows/workflow_step#output) array from your `workflow_step` object.|

> Example responses

> 200 Response

```json
{
  "ok": true
}
```

> default Response

```json
{
  "error": "invalid_auth",
  "ok": false
}
```

<h3 id="workflowsstepcompleted-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Typical success response|Inline|
|default|Default|Typical error response|Inline|

<h3 id="workflowsstepcompleted-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|[defs_ok_true](#schemadefs_ok_true)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|ok|true|

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|[defs_ok_false](#schemadefs_ok_false)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|ok|false|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
slackAuth ( Scopes: workflow.steps:execute )
</aside>

## workflows_stepFailed

<a id="opIdworkflows_stepFailed"></a>

> Code samples

```bash
curl 'https://example.com/workflows.stepFailed?workflow_step_execute_id=string&error=string' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'token: string'
```

`GET /workflows.stepFailed`

Indicate that an app's step in a workflow failed to execute.

<a href="https://api.slack.com/methods/workflows.stepFailed">API method documentation</a>

<h3 id="workflowsstepfailed-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|token|header|string|true|Authentication token. Requires scope: `workflow.steps:execute`|
|workflow_step_execute_id|query|string|true|Context identifier that maps to the correct workflow step execution.|
|error|query|string|true|A JSON-based object with a `message` property that should contain a human readable error message.|

> Example responses

> 200 Response

```json
{
  "ok": true
}
```

> default Response

```json
{
  "error": "invalid_auth",
  "ok": false
}
```

<h3 id="workflowsstepfailed-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Typical success response|Inline|
|default|Default|Typical error response|Inline|

<h3 id="workflowsstepfailed-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|[defs_ok_true](#schemadefs_ok_true)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|ok|true|

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|[defs_ok_false](#schemadefs_ok_false)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|ok|false|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
slackAuth ( Scopes: workflow.steps:execute )
</aside>

## workflows_updateStep

<a id="opIdworkflows_updateStep"></a>

> Code samples

```bash
curl 'https://example.com/workflows.updateStep?workflow_step_edit_id=string' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'token: string'
```

`GET /workflows.updateStep`

Update the configuration for a workflow extension step.

<a href="https://api.slack.com/methods/workflows.updateStep">API method documentation</a>

<h3 id="workflowsupdatestep-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|token|header|string|true|Authentication token. Requires scope: `workflow.steps:execute`|
|workflow_step_edit_id|query|string|true|A context identifier provided with `view_submission` payloads used to call back to `workflows.updateStep`.|
|inputs|query|string|false|A JSON key-value map of inputs required from a user during configuration. This is the data your app expects to receive when the workflow step starts. **Please note**: the embedded variable format is set and replaced by the workflow system. You cannot create custom variables that will be replaced at runtime. [Read more about variables in workflow steps here](/workflows/steps#variables).|
|outputs|query|string|false|An JSON array of output objects used during step execution. This is the data your app agrees to provide when your workflow step was executed.|
|step_name|query|string|false|An optional field that can be used to override the step name that is shown in the Workflow Builder.|
|step_image_url|query|string|false|An optional field that can be used to override app image that is shown in the Workflow Builder.|

> Example responses

> 200 Response

```json
{
  "ok": true
}
```

> default Response

```json
{
  "error": "invalid_auth",
  "ok": false
}
```

<h3 id="workflowsupdatestep-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Typical success response|Inline|
|default|Default|Typical error response|Inline|

<h3 id="workflowsupdatestep-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|[defs_ok_true](#schemadefs_ok_true)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|ok|true|

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|[defs_ok_false](#schemadefs_ok_false)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|ok|false|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
slackAuth ( Scopes: workflow.steps:execute )
</aside>

# Schemas

<h2 id="tocS_blocks">blocks</h2>
<!-- backwards compatibility -->
<a id="schemablocks"></a>
<a id="schema_blocks"></a>
<a id="tocSblocks"></a>
<a id="tocsblocks"></a>

```json
[
  {
    "type": "string"
  }
]
```

This is a very loose definition, in the future, we'll populate this with deeper schema in this definition namespace.

<h2 id="tocS_defs_app_id">defs_app_id</h2>
<!-- backwards compatibility -->
<a id="schemadefs_app_id"></a>
<a id="schema_defs_app_id"></a>
<a id="tocSdefs_app_id"></a>
<a id="tocsdefs_app_id"></a>

```json
"string"
```

<h2 id="tocS_defs_bot_id">defs_bot_id</h2>
<!-- backwards compatibility -->
<a id="schemadefs_bot_id"></a>
<a id="schema_defs_bot_id"></a>
<a id="tocSdefs_bot_id"></a>
<a id="tocsdefs_bot_id"></a>

```json
"string"
```

<h2 id="tocS_defs_channel">defs_channel</h2>
<!-- backwards compatibility -->
<a id="schemadefs_channel"></a>
<a id="schema_defs_channel"></a>
<a id="tocSdefs_channel"></a>
<a id="tocsdefs_channel"></a>

```json
"string"
```

<h2 id="tocS_defs_channel_id">defs_channel_id</h2>
<!-- backwards compatibility -->
<a id="schemadefs_channel_id"></a>
<a id="schema_defs_channel_id"></a>
<a id="tocSdefs_channel_id"></a>
<a id="tocsdefs_channel_id"></a>

```json
"string"
```

<h2 id="tocS_defs_channel_name">defs_channel_name</h2>
<!-- backwards compatibility -->
<a id="schemadefs_channel_name"></a>
<a id="schema_defs_channel_name"></a>
<a id="tocSdefs_channel_name"></a>
<a id="tocsdefs_channel_name"></a>

```json
"string"
```

<h2 id="tocS_defs_comment_id">defs_comment_id</h2>
<!-- backwards compatibility -->
<a id="schemadefs_comment_id"></a>
<a id="schema_defs_comment_id"></a>
<a id="tocSdefs_comment_id"></a>
<a id="tocsdefs_comment_id"></a>

```json
"string"
```

<h2 id="tocS_defs_dm_id">defs_dm_id</h2>
<!-- backwards compatibility -->
<a id="schemadefs_dm_id"></a>
<a id="schema_defs_dm_id"></a>
<a id="tocSdefs_dm_id"></a>
<a id="tocsdefs_dm_id"></a>

```json
"string"
```

<h2 id="tocS_defs_enterprise_id">defs_enterprise_id</h2>
<!-- backwards compatibility -->
<a id="schemadefs_enterprise_id"></a>
<a id="schema_defs_enterprise_id"></a>
<a id="tocSdefs_enterprise_id"></a>
<a id="tocsdefs_enterprise_id"></a>

```json
"string"
```

<h2 id="tocS_defs_enterprise_name">defs_enterprise_name</h2>
<!-- backwards compatibility -->
<a id="schemadefs_enterprise_name"></a>
<a id="schema_defs_enterprise_name"></a>
<a id="tocSdefs_enterprise_name"></a>
<a id="tocsdefs_enterprise_name"></a>

```json
"string"
```

<h2 id="tocS_defs_enterprise_user_id">defs_enterprise_user_id</h2>
<!-- backwards compatibility -->
<a id="schemadefs_enterprise_user_id"></a>
<a id="schema_defs_enterprise_user_id"></a>
<a id="tocSdefs_enterprise_user_id"></a>
<a id="tocsdefs_enterprise_user_id"></a>

```json
"string"
```

<h2 id="tocS_defs_file_id">defs_file_id</h2>
<!-- backwards compatibility -->
<a id="schemadefs_file_id"></a>
<a id="schema_defs_file_id"></a>
<a id="tocSdefs_file_id"></a>
<a id="tocsdefs_file_id"></a>

```json
"string"
```

<h2 id="tocS_defs_group_id">defs_group_id</h2>
<!-- backwards compatibility -->
<a id="schemadefs_group_id"></a>
<a id="schema_defs_group_id"></a>
<a id="tocSdefs_group_id"></a>
<a id="tocsdefs_group_id"></a>

```json
"string"
```

<h2 id="tocS_defs_ok_false">defs_ok_false</h2>
<!-- backwards compatibility -->
<a id="schemadefs_ok_false"></a>
<a id="schema_defs_ok_false"></a>
<a id="tocSdefs_ok_false"></a>
<a id="tocsdefs_ok_false"></a>

```json
false
```

<h2 id="tocS_defs_ok_true">defs_ok_true</h2>
<!-- backwards compatibility -->
<a id="schemadefs_ok_true"></a>
<a id="schema_defs_ok_true"></a>
<a id="tocSdefs_ok_true"></a>
<a id="tocsdefs_ok_true"></a>

```json
true
```

<h2 id="tocS_defs_optional_app_id">defs_optional_app_id</h2>
<!-- backwards compatibility -->
<a id="schemadefs_optional_app_id"></a>
<a id="schema_defs_optional_app_id"></a>
<a id="tocSdefs_optional_app_id"></a>
<a id="tocsdefs_optional_app_id"></a>

```json
"string"
```

<h2 id="tocS_defs_pinned_info">defs_pinned_info</h2>
<!-- backwards compatibility -->
<a id="schemadefs_pinned_info"></a>
<a id="schema_defs_pinned_info"></a>
<a id="tocSdefs_pinned_info"></a>
<a id="tocsdefs_pinned_info"></a>

```json
{}
```

<h2 id="tocS_defs_reminder_id">defs_reminder_id</h2>
<!-- backwards compatibility -->
<a id="schemadefs_reminder_id"></a>
<a id="schema_defs_reminder_id"></a>
<a id="tocSdefs_reminder_id"></a>
<a id="tocsdefs_reminder_id"></a>

```json
"string"
```

<h2 id="tocS_defs_subteam_id">defs_subteam_id</h2>
<!-- backwards compatibility -->
<a id="schemadefs_subteam_id"></a>
<a id="schema_defs_subteam_id"></a>
<a id="tocSdefs_subteam_id"></a>
<a id="tocsdefs_subteam_id"></a>

```json
"string"
```

<h2 id="tocS_defs_team">defs_team</h2>
<!-- backwards compatibility -->
<a id="schemadefs_team"></a>
<a id="schema_defs_team"></a>
<a id="tocSdefs_team"></a>
<a id="tocsdefs_team"></a>

```json
"string"
```

<h2 id="tocS_defs_topic_purpose_creator">defs_topic_purpose_creator</h2>
<!-- backwards compatibility -->
<a id="schemadefs_topic_purpose_creator"></a>
<a id="schema_defs_topic_purpose_creator"></a>
<a id="tocSdefs_topic_purpose_creator"></a>
<a id="tocsdefs_topic_purpose_creator"></a>

```json
"string"
```

<h2 id="tocS_defs_ts">defs_ts</h2>
<!-- backwards compatibility -->
<a id="schemadefs_ts"></a>
<a id="schema_defs_ts"></a>
<a id="tocSdefs_ts"></a>
<a id="tocsdefs_ts"></a>

```json
"string"
```

<h2 id="tocS_defs_user_id">defs_user_id</h2>
<!-- backwards compatibility -->
<a id="schemadefs_user_id"></a>
<a id="schema_defs_user_id"></a>
<a id="tocSdefs_user_id"></a>
<a id="tocsdefs_user_id"></a>

```json
"string"
```

<h2 id="tocS_defs_workspace_id">defs_workspace_id</h2>
<!-- backwards compatibility -->
<a id="schemadefs_workspace_id"></a>
<a id="schema_defs_workspace_id"></a>
<a id="tocSdefs_workspace_id"></a>
<a id="tocsdefs_workspace_id"></a>

```json
"string"
```

<h2 id="tocS_objs_bot_profile">objs_bot_profile</h2>
<!-- backwards compatibility -->
<a id="schemaobjs_bot_profile"></a>
<a id="schema_objs_bot_profile"></a>
<a id="tocSobjs_bot_profile"></a>
<a id="tocsobjs_bot_profile"></a>

```json
{
  "app_id": "string",
  "deleted": true,
  "icons": {
    "image_36": "http://example.com",
    "image_48": "http://example.com",
    "image_72": "http://example.com"
  },
  "id": "string",
  "name": "string",
  "team_id": "string",
  "updated": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|app_id|[defs_app_id](#schemadefs_app_id)|true|none|none|
|deleted|boolean|true|none|none|
|icons|object|true|none|none|
|id|[defs_bot_id](#schemadefs_bot_id)|true|none|none|
|name|string|true|none|none|
|team_id|[defs_team](#schemadefs_team)|true|none|none|
|updated|integer|true|none|none|

<h2 id="tocS_objs_channel">objs_channel</h2>
<!-- backwards compatibility -->
<a id="schemaobjs_channel"></a>
<a id="schema_objs_channel"></a>
<a id="tocSobjs_channel"></a>
<a id="tocsobjs_channel"></a>

```json
{
  "accepted_user": "string",
  "created": 0,
  "creator": "string",
  "id": "string",
  "is_archived": true,
  "is_channel": true,
  "is_frozen": true,
  "is_general": true,
  "is_member": true,
  "is_moved": 0,
  "is_mpim": true,
  "is_non_threadable": true,
  "is_org_shared": true,
  "is_pending_ext_shared": true,
  "is_private": true,
  "is_read_only": true,
  "is_shared": true,
  "is_thread_only": true,
  "last_read": "string",
  "latest": [
    {
      "attachments": [
        {
          "fallback": "string",
          "id": 0,
          "image_bytes": 0,
          "image_height": 0,
          "image_url": "string",
          "image_width": 0
        }
      ],
      "blocks": [
        {
          "type": "string"
        }
      ],
      "bot_id": [
        "string"
      ],
      "bot_profile": {
        "app_id": "string",
        "deleted": true,
        "icons": {
          "image_36": "http://example.com",
          "image_48": "http://example.com",
          "image_72": "http://example.com"
        },
        "id": "string",
        "name": "string",
        "team_id": "string",
        "updated": 0
      },
      "client_msg_id": "string",
      "comment": {
        "comment": "string",
        "created": 0,
        "id": "string",
        "is_intro": true,
        "is_starred": true,
        "num_stars": 0,
        "pinned_info": {},
        "pinned_to": [
          "string"
        ],
        "reactions": [
          {
            "count": 0,
            "name": "string",
            "users": [
              "string"
            ]
          }
        ],
        "timestamp": 0,
        "user": "string"
      },
      "display_as_bot": true,
      "file": {
        "channels": [
          "string"
        ],
        "comments_count": 0,
        "created": 0,
        "date_delete": 0,
        "display_as_bot": true,
        "editable": true,
        "editor": "string",
        "external_id": "string",
        "external_type": "string",
        "external_url": "http://example.com",
        "filetype": "string",
        "groups": [
          "string"
        ],
        "has_rich_preview": true,
        "id": "string",
        "image_exif_rotation": 0,
        "ims": [
          "string"
        ],
        "is_external": true,
        "is_public": true,
        "is_starred": true,
        "is_tombstoned": true,
        "last_editor": "string",
        "mimetype": "string",
        "mode": "string",
        "name": "string",
        "non_owner_editable": true,
        "num_stars": 0,
        "original_h": 0,
        "original_w": 0,
        "permalink": "http://example.com",
        "permalink_public": "http://example.com",
        "pinned_info": {},
        "pinned_to": [
          "string"
        ],
        "pretty_type": "string",
        "preview": "string",
        "public_url_shared": true,
        "reactions": [
          {
            "count": 0,
            "name": "string",
            "users": [
              "string"
            ]
          }
        ],
        "shares": {
          "private": null,
          "public": null
        },
        "size": 0,
        "source_team": "string",
        "state": "string",
        "thumb_1024": "http://example.com",
        "thumb_1024_h": 0,
        "thumb_1024_w": 0,
        "thumb_160": "http://example.com",
        "thumb_360": "http://example.com",
        "thumb_360_h": 0,
        "thumb_360_w": 0,
        "thumb_480": "http://example.com",
        "thumb_480_h": 0,
        "thumb_480_w": 0,
        "thumb_64": "http://example.com",
        "thumb_720": "http://example.com",
        "thumb_720_h": 0,
        "thumb_720_w": 0,
        "thumb_80": "http://example.com",
        "thumb_800": "http://example.com",
        "thumb_800_h": 0,
        "thumb_800_w": 0,
        "thumb_960": "http://example.com",
        "thumb_960_h": 0,
        "thumb_960_w": 0,
        "thumb_tiny": "string",
        "timestamp": 0,
        "title": "string",
        "updated": 0,
        "url_private": "http://example.com",
        "url_private_download": "http://example.com",
        "user": "string",
        "user_team": "string",
        "username": "string"
      },
      "files": [
        {
          "channels": [
            "string"
          ],
          "comments_count": 0,
          "created": 0,
          "date_delete": 0,
          "display_as_bot": true,
          "editable": true,
          "editor": "string",
          "external_id": "string",
          "external_type": "string",
          "external_url": "http://example.com",
          "filetype": "string",
          "groups": [
            "string"
          ],
          "has_rich_preview": true,
          "id": "string",
          "image_exif_rotation": 0,
          "ims": [
            "string"
          ],
          "is_external": true,
          "is_public": true,
          "is_starred": true,
          "is_tombstoned": true,
          "last_editor": "string",
          "mimetype": "string",
          "mode": "string",
          "name": "string",
          "non_owner_editable": true,
          "num_stars": 0,
          "original_h": 0,
          "original_w": 0,
          "permalink": "http://example.com",
          "permalink_public": "http://example.com",
          "pinned_info": {},
          "pinned_to": [
            "string"
          ],
          "pretty_type": "string",
          "preview": "string",
          "public_url_shared": true,
          "reactions": [
            {
              "count": 0,
              "name": "string",
              "users": [
                "string"
              ]
            }
          ],
          "shares": {
            "private": null,
            "public": null
          },
          "size": 0,
          "source_team": "string",
          "state": "string",
          "thumb_1024": "http://example.com",
          "thumb_1024_h": 0,
          "thumb_1024_w": 0,
          "thumb_160": "http://example.com",
          "thumb_360": "http://example.com",
          "thumb_360_h": 0,
          "thumb_360_w": 0,
          "thumb_480": "http://example.com",
          "thumb_480_h": 0,
          "thumb_480_w": 0,
          "thumb_64": "http://example.com",
          "thumb_720": "http://example.com",
          "thumb_720_h": 0,
          "thumb_720_w": 0,
          "thumb_80": "http://example.com",
          "thumb_800": "http://example.com",
          "thumb_800_h": 0,
          "thumb_800_w": 0,
          "thumb_960": "http://example.com",
          "thumb_960_h": 0,
          "thumb_960_w": 0,
          "thumb_tiny": "string",
          "timestamp": 0,
          "title": "string",
          "updated": 0,
          "url_private": "http://example.com",
          "url_private_download": "http://example.com",
          "user": "string",
          "user_team": "string",
          "username": "string"
        }
      ],
      "icons": {
        "emoji": "string",
        "image_64": "http://example.com"
      },
      "inviter": "string",
      "is_delayed_message": true,
      "is_intro": true,
      "is_starred": true,
      "last_read": "string",
      "latest_reply": "string",
      "name": "string",
      "old_name": "string",
      "parent_user_id": "string",
      "permalink": "http://example.com",
      "pinned_to": [
        "string"
      ],
      "purpose": "string",
      "reactions": [
        {
          "count": 0,
          "name": "string",
          "users": [
            "string"
          ]
        }
      ],
      "reply_count": 0,
      "reply_users": [
        "string"
      ],
      "reply_users_count": 0,
      "source_team": "string",
      "subscribed": true,
      "subtype": "string",
      "team": "string",
      "text": "string",
      "thread_ts": "string",
      "topic": "string",
      "ts": "string",
      "type": "string",
      "unread_count": 0,
      "upload": true,
      "user": "string",
      "user_profile": {
        "avatar_hash": "string",
        "display_name": "string",
        "display_name_normalized": "string",
        "first_name": "string",
        "image_72": "http://example.com",
        "is_restricted": true,
        "is_ultra_restricted": true,
        "name": "string",
        "real_name": "string",
        "real_name_normalized": "string",
        "team": "string"
      },
      "user_team": "string",
      "username": "string"
    }
  ],
  "members": [
    "string"
  ],
  "name": "string",
  "name_normalized": "string",
  "num_members": 0,
  "pending_shared": [
    "string"
  ],
  "previous_names": [
    "string"
  ],
  "priority": 0,
  "purpose": {
    "creator": "string",
    "last_set": 0,
    "value": "string"
  },
  "topic": {
    "creator": "string",
    "last_set": 0,
    "value": "string"
  },
  "unlinked": 0,
  "unread_count": 0,
  "unread_count_display": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accepted_user|[defs_user_id](#schemadefs_user_id)|false|none|none|
|created|integer|true|none|none|
|creator|[defs_user_id](#schemadefs_user_id)|true|none|none|
|id|[defs_channel_id](#schemadefs_channel_id)|true|none|none|
|is_archived|boolean|false|none|none|
|is_channel|boolean|true|none|none|
|is_frozen|boolean|false|none|none|
|is_general|boolean|false|none|none|
|is_member|boolean|false|none|none|
|is_moved|integer|false|none|none|
|is_mpim|boolean|true|none|none|
|is_non_threadable|boolean|false|none|none|
|is_org_shared|boolean|true|none|none|
|is_pending_ext_shared|boolean|false|none|none|
|is_private|boolean|true|none|none|
|is_read_only|boolean|false|none|none|
|is_shared|boolean|true|none|none|
|is_thread_only|boolean|false|none|none|
|last_read|[defs_ts](#schemadefs_ts)|false|none|none|
|latest|[[objs_message](#schemaobjs_message) \| object \| null]|false|none|none|
|members|[[defs_user_id](#schemadefs_user_id)]|true|none|none|
|name|string|true|none|none|
|name_normalized|string|true|none|none|
|num_members|integer|false|none|none|
|pending_shared|[[defs_team](#schemadefs_team)]|false|none|none|
|previous_names|[[defs_channel_name](#schemadefs_channel_name)]|false|none|none|
|priority|number|false|none|none|
|purpose|object|true|none|none|
|topic|object|true|none|none|
|unlinked|integer|false|none|none|
|unread_count|integer|false|none|none|
|unread_count_display|integer|false|none|none|

<h2 id="tocS_objs_comment">objs_comment</h2>
<!-- backwards compatibility -->
<a id="schemaobjs_comment"></a>
<a id="schema_objs_comment"></a>
<a id="tocSobjs_comment"></a>
<a id="tocsobjs_comment"></a>

```json
{
  "comment": "string",
  "created": 0,
  "id": "string",
  "is_intro": true,
  "is_starred": true,
  "num_stars": 0,
  "pinned_info": {},
  "pinned_to": [
    "string"
  ],
  "reactions": [
    {
      "count": 0,
      "name": "string",
      "users": [
        "string"
      ]
    }
  ],
  "timestamp": 0,
  "user": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|comment|string|true|none|none|
|created|integer|true|none|none|
|id|[defs_comment_id](#schemadefs_comment_id)|true|none|none|
|is_intro|boolean|true|none|none|
|is_starred|boolean|false|none|none|
|num_stars|integer|false|none|none|
|pinned_info|[defs_pinned_info](#schemadefs_pinned_info)|false|none|none|
|pinned_to|[[defs_channel](#schemadefs_channel)]|false|none|none|
|reactions|[[objs_reaction](#schemaobjs_reaction)]|false|none|none|
|timestamp|integer|true|none|none|
|user|[defs_user_id](#schemadefs_user_id)|true|none|none|

<h2 id="tocS_objs_comments">objs_comments</h2>
<!-- backwards compatibility -->
<a id="schemaobjs_comments"></a>
<a id="schema_objs_comments"></a>
<a id="tocSobjs_comments"></a>
<a id="tocsobjs_comments"></a>

```json
[
  null
]
```

<h2 id="tocS_objs_conversation">objs_conversation</h2>
<!-- backwards compatibility -->
<a id="schemaobjs_conversation"></a>
<a id="schema_objs_conversation"></a>
<a id="tocSobjs_conversation"></a>
<a id="tocsobjs_conversation"></a>

```json
[
  {
    "accepted_user": "string",
    "connected_team_ids": [
      "string"
    ],
    "conversation_host_id": "string",
    "created": 0,
    "creator": "string",
    "display_counts": {
      "display_counts": 0,
      "guest_counts": 0
    },
    "enterprise_id": "string",
    "has_pins": true,
    "id": "string",
    "internal_team_ids": [
      "string"
    ],
    "is_archived": true,
    "is_channel": true,
    "is_ext_shared": true,
    "is_frozen": true,
    "is_general": true,
    "is_global_shared": true,
    "is_group": true,
    "is_im": true,
    "is_member": true,
    "is_moved": 0,
    "is_mpim": false,
    "is_non_threadable": true,
    "is_open": true,
    "is_org_default": true,
    "is_org_mandatory": true,
    "is_org_shared": true,
    "is_pending_ext_shared": true,
    "is_private": true,
    "is_read_only": true,
    "is_shared": true,
    "is_starred": true,
    "is_thread_only": true,
    "last_read": "string",
    "latest": [
      {
        "attachments": [
          {
            "fallback": "string",
            "id": 0,
            "image_bytes": 0,
            "image_height": 0,
            "image_url": "string",
            "image_width": 0
          }
        ],
        "blocks": [
          {
            "type": "string"
          }
        ],
        "bot_id": [
          "string"
        ],
        "bot_profile": {
          "app_id": "string",
          "deleted": true,
          "icons": {
            "image_36": "http://example.com",
            "image_48": "http://example.com",
            "image_72": "http://example.com"
          },
          "id": "string",
          "name": "string",
          "team_id": "string",
          "updated": 0
        },
        "client_msg_id": "string",
        "comment": {
          "comment": "string",
          "created": 0,
          "id": "string",
          "is_intro": true,
          "is_starred": true,
          "num_stars": 0,
          "pinned_info": {},
          "pinned_to": [
            "string"
          ],
          "reactions": [
            {
              "count": 0,
              "name": "string",
              "users": [
                "string"
              ]
            }
          ],
          "timestamp": 0,
          "user": "string"
        },
        "display_as_bot": true,
        "file": {
          "channels": [
            "string"
          ],
          "comments_count": 0,
          "created": 0,
          "date_delete": 0,
          "display_as_bot": true,
          "editable": true,
          "editor": "string",
          "external_id": "string",
          "external_type": "string",
          "external_url": "http://example.com",
          "filetype": "string",
          "groups": [
            "string"
          ],
          "has_rich_preview": true,
          "id": "string",
          "image_exif_rotation": 0,
          "ims": [
            "string"
          ],
          "is_external": true,
          "is_public": true,
          "is_starred": true,
          "is_tombstoned": true,
          "last_editor": "string",
          "mimetype": "string",
          "mode": "string",
          "name": "string",
          "non_owner_editable": true,
          "num_stars": 0,
          "original_h": 0,
          "original_w": 0,
          "permalink": "http://example.com",
          "permalink_public": "http://example.com",
          "pinned_info": {},
          "pinned_to": [
            "string"
          ],
          "pretty_type": "string",
          "preview": "string",
          "public_url_shared": true,
          "reactions": [
            {
              "count": 0,
              "name": "string",
              "users": [
                "string"
              ]
            }
          ],
          "shares": {
            "private": null,
            "public": null
          },
          "size": 0,
          "source_team": "string",
          "state": "string",
          "thumb_1024": "http://example.com",
          "thumb_1024_h": 0,
          "thumb_1024_w": 0,
          "thumb_160": "http://example.com",
          "thumb_360": "http://example.com",
          "thumb_360_h": 0,
          "thumb_360_w": 0,
          "thumb_480": "http://example.com",
          "thumb_480_h": 0,
          "thumb_480_w": 0,
          "thumb_64": "http://example.com",
          "thumb_720": "http://example.com",
          "thumb_720_h": 0,
          "thumb_720_w": 0,
          "thumb_80": "http://example.com",
          "thumb_800": "http://example.com",
          "thumb_800_h": 0,
          "thumb_800_w": 0,
          "thumb_960": "http://example.com",
          "thumb_960_h": 0,
          "thumb_960_w": 0,
          "thumb_tiny": "string",
          "timestamp": 0,
          "title": "string",
          "updated": 0,
          "url_private": "http://example.com",
          "url_private_download": "http://example.com",
          "user": "string",
          "user_team": "string",
          "username": "string"
        },
        "files": [
          {
            "channels": [
              "string"
            ],
            "comments_count": 0,
            "created": 0,
            "date_delete": 0,
            "display_as_bot": true,
            "editable": true,
            "editor": "string",
            "external_id": "string",
            "external_type": "string",
            "external_url": "http://example.com",
            "filetype": "string",
            "groups": [
              "string"
            ],
            "has_rich_preview": true,
            "id": "string",
            "image_exif_rotation": 0,
            "ims": [
              "string"
            ],
            "is_external": true,
            "is_public": true,
            "is_starred": true,
            "is_tombstoned": true,
            "last_editor": "string",
            "mimetype": "string",
            "mode": "string",
            "name": "string",
            "non_owner_editable": true,
            "num_stars": 0,
            "original_h": 0,
            "original_w": 0,
            "permalink": "http://example.com",
            "permalink_public": "http://example.com",
            "pinned_info": {},
            "pinned_to": [
              "string"
            ],
            "pretty_type": "string",
            "preview": "string",
            "public_url_shared": true,
            "reactions": [
              {
                "count": 0,
                "name": "string",
                "users": [
                  "string"
                ]
              }
            ],
            "shares": {
              "private": null,
              "public": null
            },
            "size": 0,
            "source_team": "string",
            "state": "string",
            "thumb_1024": "http://example.com",
            "thumb_1024_h": 0,
            "thumb_1024_w": 0,
            "thumb_160": "http://example.com",
            "thumb_360": "http://example.com",
            "thumb_360_h": 0,
            "thumb_360_w": 0,
            "thumb_480": "http://example.com",
            "thumb_480_h": 0,
            "thumb_480_w": 0,
            "thumb_64": "http://example.com",
            "thumb_720": "http://example.com",
            "thumb_720_h": 0,
            "thumb_720_w": 0,
            "thumb_80": "http://example.com",
            "thumb_800": "http://example.com",
            "thumb_800_h": 0,
            "thumb_800_w": 0,
            "thumb_960": "http://example.com",
            "thumb_960_h": 0,
            "thumb_960_w": 0,
            "thumb_tiny": "string",
            "timestamp": 0,
            "title": "string",
            "updated": 0,
            "url_private": "http://example.com",
            "url_private_download": "http://example.com",
            "user": "string",
            "user_team": "string",
            "username": "string"
          }
        ],
        "icons": {
          "emoji": "string",
          "image_64": "http://example.com"
        },
        "inviter": "string",
        "is_delayed_message": true,
        "is_intro": true,
        "is_starred": true,
        "last_read": "string",
        "latest_reply": "string",
        "name": "string",
        "old_name": "string",
        "parent_user_id": "string",
        "permalink": "http://example.com",
        "pinned_to": [
          "string"
        ],
        "purpose": "string",
        "reactions": [
          {
            "count": 0,
            "name": "string",
            "users": [
              "string"
            ]
          }
        ],
        "reply_count": 0,
        "reply_users": [
          "string"
        ],
        "reply_users_count": 0,
        "source_team": "string",
        "subscribed": true,
        "subtype": "string",
        "team": "string",
        "text": "string",
        "thread_ts": "string",
        "topic": "string",
        "ts": "string",
        "type": "string",
        "unread_count": 0,
        "upload": true,
        "user": "string",
        "user_profile": {
          "avatar_hash": "string",
          "display_name": "string",
          "display_name_normalized": "string",
          "first_name": "string",
          "image_72": "http://example.com",
          "is_restricted": true,
          "is_ultra_restricted": true,
          "name": "string",
          "real_name": "string",
          "real_name_normalized": "string",
          "team": "string"
        },
        "user_team": "string",
        "username": "string"
      }
    ],
    "members": [
      "string"
    ],
    "name": "string",
    "name_normalized": "string",
    "num_members": 0,
    "parent_conversation": [
      "string"
    ],
    "pending_connected_team_ids": [
      "string"
    ],
    "pending_shared": [
      "string"
    ],
    "pin_count": 0,
    "previous_names": [
      "string"
    ],
    "priority": 0,
    "purpose": {
      "creator": "string",
      "last_set": 0,
      "value": "string"
    },
    "shared_team_ids": [
      "string"
    ],
    "shares": [
      {
        "accepted_user": "string",
        "is_active": true,
        "team": {
          "archived": true,
          "avatar_base_url": "http://example.com",
          "created": 0,
          "date_create": 0,
          "deleted": true,
          "description": "string",
          "discoverable": [
            null
          ],
          "domain": "string",
          "email_domain": "string",
          "enterprise_id": "string",
          "enterprise_name": "string",
          "external_org_migrations": {
            "current": [
              {
                "date_started": 0,
                "team_id": "string"
              }
            ],
            "date_updated": 0
          },
          "has_compliance_export": true,
          "icon": {
            "image_102": "string",
            "image_132": "string",
            "image_230": "string",
            "image_34": "string",
            "image_44": "string",
            "image_68": "string",
            "image_88": "string",
            "image_default": true
          },
          "id": "string",
          "is_assigned": true,
          "is_enterprise": 0,
          "is_over_storage_limit": true,
          "limit_ts": 0,
          "locale": "string",
          "messages_count": 0,
          "msg_edit_window_mins": 0,
          "name": "string",
          "over_integrations_limit": true,
          "over_storage_limit": true,
          "pay_prod_cur": "string",
          "plan": "",
          "primary_owner": {
            "email": "string",
            "id": "string"
          },
          "sso_provider": {
            "label": "string",
            "name": "string",
            "type": "string"
          }
        },
        "user": "string"
      }
    ],
    "timezone_count": 0,
    "topic": {
      "creator": "string",
      "last_set": 0,
      "value": "string"
    },
    "unlinked": 0,
    "unread_count": 0,
    "unread_count_display": 0,
    "use_case": "string",
    "user": "string",
    "version": 0
  }
]
```

<h2 id="tocS_objs_enterprise_user">objs_enterprise_user</h2>
<!-- backwards compatibility -->
<a id="schemaobjs_enterprise_user"></a>
<a id="schema_objs_enterprise_user"></a>
<a id="tocSobjs_enterprise_user"></a>
<a id="tocsobjs_enterprise_user"></a>

```json
{
  "enterprise_id": "string",
  "enterprise_name": "string",
  "id": "string",
  "is_admin": true,
  "is_owner": true,
  "teams": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|enterprise_id|[defs_enterprise_id](#schemadefs_enterprise_id)|true|none|none|
|enterprise_name|[defs_enterprise_name](#schemadefs_enterprise_name)|true|none|none|
|id|[defs_enterprise_user_id](#schemadefs_enterprise_user_id)|true|none|none|
|is_admin|boolean|true|none|none|
|is_owner|boolean|true|none|none|
|teams|[[defs_team](#schemadefs_team)]|true|none|none|

<h2 id="tocS_objs_external_org_migrations">objs_external_org_migrations</h2>
<!-- backwards compatibility -->
<a id="schemaobjs_external_org_migrations"></a>
<a id="schema_objs_external_org_migrations"></a>
<a id="tocSobjs_external_org_migrations"></a>
<a id="tocsobjs_external_org_migrations"></a>

```json
{
  "current": [
    {
      "date_started": 0,
      "team_id": "string"
    }
  ],
  "date_updated": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|current|[object]|true|none|none|
|date_updated|integer|true|none|none|

<h2 id="tocS_objs_file">objs_file</h2>
<!-- backwards compatibility -->
<a id="schemaobjs_file"></a>
<a id="schema_objs_file"></a>
<a id="tocSobjs_file"></a>
<a id="tocsobjs_file"></a>

```json
{
  "channels": [
    "string"
  ],
  "comments_count": 0,
  "created": 0,
  "date_delete": 0,
  "display_as_bot": true,
  "editable": true,
  "editor": "string",
  "external_id": "string",
  "external_type": "string",
  "external_url": "http://example.com",
  "filetype": "string",
  "groups": [
    "string"
  ],
  "has_rich_preview": true,
  "id": "string",
  "image_exif_rotation": 0,
  "ims": [
    "string"
  ],
  "is_external": true,
  "is_public": true,
  "is_starred": true,
  "is_tombstoned": true,
  "last_editor": "string",
  "mimetype": "string",
  "mode": "string",
  "name": "string",
  "non_owner_editable": true,
  "num_stars": 0,
  "original_h": 0,
  "original_w": 0,
  "permalink": "http://example.com",
  "permalink_public": "http://example.com",
  "pinned_info": {},
  "pinned_to": [
    "string"
  ],
  "pretty_type": "string",
  "preview": "string",
  "public_url_shared": true,
  "reactions": [
    {
      "count": 0,
      "name": "string",
      "users": [
        "string"
      ]
    }
  ],
  "shares": {
    "private": null,
    "public": null
  },
  "size": 0,
  "source_team": "string",
  "state": "string",
  "thumb_1024": "http://example.com",
  "thumb_1024_h": 0,
  "thumb_1024_w": 0,
  "thumb_160": "http://example.com",
  "thumb_360": "http://example.com",
  "thumb_360_h": 0,
  "thumb_360_w": 0,
  "thumb_480": "http://example.com",
  "thumb_480_h": 0,
  "thumb_480_w": 0,
  "thumb_64": "http://example.com",
  "thumb_720": "http://example.com",
  "thumb_720_h": 0,
  "thumb_720_w": 0,
  "thumb_80": "http://example.com",
  "thumb_800": "http://example.com",
  "thumb_800_h": 0,
  "thumb_800_w": 0,
  "thumb_960": "http://example.com",
  "thumb_960_h": 0,
  "thumb_960_w": 0,
  "thumb_tiny": "string",
  "timestamp": 0,
  "title": "string",
  "updated": 0,
  "url_private": "http://example.com",
  "url_private_download": "http://example.com",
  "user": "string",
  "user_team": "string",
  "username": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|channels|[[defs_channel_id](#schemadefs_channel_id)]|false|none|none|
|comments_count|integer|false|none|none|
|created|integer|false|none|none|
|date_delete|integer|false|none|none|
|display_as_bot|boolean|false|none|none|
|editable|boolean|false|none|none|
|editor|[defs_user_id](#schemadefs_user_id)|false|none|none|
|external_id|string|false|none|none|
|external_type|string|false|none|none|
|external_url|string(uri)|false|none|none|
|filetype|string|false|none|none|
|groups|[[defs_group_id](#schemadefs_group_id)]|false|none|none|
|has_rich_preview|boolean|false|none|none|
|id|[defs_file_id](#schemadefs_file_id)|false|none|none|
|image_exif_rotation|integer|false|none|none|
|ims|[[defs_dm_id](#schemadefs_dm_id)]|false|none|none|
|is_external|boolean|false|none|none|
|is_public|boolean|false|none|none|
|is_starred|boolean|false|none|none|
|is_tombstoned|boolean|false|none|none|
|last_editor|[defs_user_id](#schemadefs_user_id)|false|none|none|
|mimetype|string|false|none|none|
|mode|string|false|none|none|
|name|string|false|none|none|
|non_owner_editable|boolean|false|none|none|
|num_stars|integer|false|none|none|
|original_h|integer|false|none|none|
|original_w|integer|false|none|none|
|permalink|string(uri)|false|none|none|
|permalink_public|string(uri)|false|none|none|
|pinned_info|[defs_pinned_info](#schemadefs_pinned_info)|false|none|none|
|pinned_to|[[defs_channel](#schemadefs_channel)]|false|none|none|
|pretty_type|string|false|none|none|
|preview|string|false|none|none|
|public_url_shared|boolean|false|none|none|
|reactions|[[objs_reaction](#schemaobjs_reaction)]|false|none|none|
|shares|object|false|none|none|
|size|integer|false|none|none|
|source_team|[defs_team](#schemadefs_team)|false|none|none|
|state|string|false|none|none|
|thumb_1024|string(uri)|false|none|none|
|thumb_1024_h|integer|false|none|none|
|thumb_1024_w|integer|false|none|none|
|thumb_160|string(uri)|false|none|none|
|thumb_360|string(uri)|false|none|none|
|thumb_360_h|integer|false|none|none|
|thumb_360_w|integer|false|none|none|
|thumb_480|string(uri)|false|none|none|
|thumb_480_h|integer|false|none|none|
|thumb_480_w|integer|false|none|none|
|thumb_64|string(uri)|false|none|none|
|thumb_720|string(uri)|false|none|none|
|thumb_720_h|integer|false|none|none|
|thumb_720_w|integer|false|none|none|
|thumb_80|string(uri)|false|none|none|
|thumb_800|string(uri)|false|none|none|
|thumb_800_h|integer|false|none|none|
|thumb_800_w|integer|false|none|none|
|thumb_960|string(uri)|false|none|none|
|thumb_960_h|integer|false|none|none|
|thumb_960_w|integer|false|none|none|
|thumb_tiny|string|false|none|none|
|timestamp|integer|false|none|none|
|title|string|false|none|none|
|updated|integer|false|none|none|
|url_private|string(uri)|false|none|none|
|url_private_download|string(uri)|false|none|none|
|user|string|false|none|none|
|user_team|[defs_team](#schemadefs_team)|false|none|none|
|username|string|false|none|none|

<h2 id="tocS_objs_icon">objs_icon</h2>
<!-- backwards compatibility -->
<a id="schemaobjs_icon"></a>
<a id="schema_objs_icon"></a>
<a id="tocSobjs_icon"></a>
<a id="tocsobjs_icon"></a>

```json
{
  "image_102": "string",
  "image_132": "string",
  "image_230": "string",
  "image_34": "string",
  "image_44": "string",
  "image_68": "string",
  "image_88": "string",
  "image_default": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|image_102|string|false|none|none|
|image_132|string|false|none|none|
|image_230|string|false|none|none|
|image_34|string|false|none|none|
|image_44|string|false|none|none|
|image_68|string|false|none|none|
|image_88|string|false|none|none|
|image_default|boolean|false|none|none|

<h2 id="tocS_objs_message">objs_message</h2>
<!-- backwards compatibility -->
<a id="schemaobjs_message"></a>
<a id="schema_objs_message"></a>
<a id="tocSobjs_message"></a>
<a id="tocsobjs_message"></a>

```json
{
  "attachments": [
    {
      "fallback": "string",
      "id": 0,
      "image_bytes": 0,
      "image_height": 0,
      "image_url": "string",
      "image_width": 0
    }
  ],
  "blocks": [
    {
      "type": "string"
    }
  ],
  "bot_id": [
    "string"
  ],
  "bot_profile": {
    "app_id": "string",
    "deleted": true,
    "icons": {
      "image_36": "http://example.com",
      "image_48": "http://example.com",
      "image_72": "http://example.com"
    },
    "id": "string",
    "name": "string",
    "team_id": "string",
    "updated": 0
  },
  "client_msg_id": "string",
  "comment": {
    "comment": "string",
    "created": 0,
    "id": "string",
    "is_intro": true,
    "is_starred": true,
    "num_stars": 0,
    "pinned_info": {},
    "pinned_to": [
      "string"
    ],
    "reactions": [
      {
        "count": 0,
        "name": "string",
        "users": [
          "string"
        ]
      }
    ],
    "timestamp": 0,
    "user": "string"
  },
  "display_as_bot": true,
  "file": {
    "channels": [
      "string"
    ],
    "comments_count": 0,
    "created": 0,
    "date_delete": 0,
    "display_as_bot": true,
    "editable": true,
    "editor": "string",
    "external_id": "string",
    "external_type": "string",
    "external_url": "http://example.com",
    "filetype": "string",
    "groups": [
      "string"
    ],
    "has_rich_preview": true,
    "id": "string",
    "image_exif_rotation": 0,
    "ims": [
      "string"
    ],
    "is_external": true,
    "is_public": true,
    "is_starred": true,
    "is_tombstoned": true,
    "last_editor": "string",
    "mimetype": "string",
    "mode": "string",
    "name": "string",
    "non_owner_editable": true,
    "num_stars": 0,
    "original_h": 0,
    "original_w": 0,
    "permalink": "http://example.com",
    "permalink_public": "http://example.com",
    "pinned_info": {},
    "pinned_to": [
      "string"
    ],
    "pretty_type": "string",
    "preview": "string",
    "public_url_shared": true,
    "reactions": [
      {
        "count": 0,
        "name": "string",
        "users": [
          "string"
        ]
      }
    ],
    "shares": {
      "private": null,
      "public": null
    },
    "size": 0,
    "source_team": "string",
    "state": "string",
    "thumb_1024": "http://example.com",
    "thumb_1024_h": 0,
    "thumb_1024_w": 0,
    "thumb_160": "http://example.com",
    "thumb_360": "http://example.com",
    "thumb_360_h": 0,
    "thumb_360_w": 0,
    "thumb_480": "http://example.com",
    "thumb_480_h": 0,
    "thumb_480_w": 0,
    "thumb_64": "http://example.com",
    "thumb_720": "http://example.com",
    "thumb_720_h": 0,
    "thumb_720_w": 0,
    "thumb_80": "http://example.com",
    "thumb_800": "http://example.com",
    "thumb_800_h": 0,
    "thumb_800_w": 0,
    "thumb_960": "http://example.com",
    "thumb_960_h": 0,
    "thumb_960_w": 0,
    "thumb_tiny": "string",
    "timestamp": 0,
    "title": "string",
    "updated": 0,
    "url_private": "http://example.com",
    "url_private_download": "http://example.com",
    "user": "string",
    "user_team": "string",
    "username": "string"
  },
  "files": [
    {
      "channels": [
        "string"
      ],
      "comments_count": 0,
      "created": 0,
      "date_delete": 0,
      "display_as_bot": true,
      "editable": true,
      "editor": "string",
      "external_id": "string",
      "external_type": "string",
      "external_url": "http://example.com",
      "filetype": "string",
      "groups": [
        "string"
      ],
      "has_rich_preview": true,
      "id": "string",
      "image_exif_rotation": 0,
      "ims": [
        "string"
      ],
      "is_external": true,
      "is_public": true,
      "is_starred": true,
      "is_tombstoned": true,
      "last_editor": "string",
      "mimetype": "string",
      "mode": "string",
      "name": "string",
      "non_owner_editable": true,
      "num_stars": 0,
      "original_h": 0,
      "original_w": 0,
      "permalink": "http://example.com",
      "permalink_public": "http://example.com",
      "pinned_info": {},
      "pinned_to": [
        "string"
      ],
      "pretty_type": "string",
      "preview": "string",
      "public_url_shared": true,
      "reactions": [
        {
          "count": 0,
          "name": "string",
          "users": [
            "string"
          ]
        }
      ],
      "shares": {
        "private": null,
        "public": null
      },
      "size": 0,
      "source_team": "string",
      "state": "string",
      "thumb_1024": "http://example.com",
      "thumb_1024_h": 0,
      "thumb_1024_w": 0,
      "thumb_160": "http://example.com",
      "thumb_360": "http://example.com",
      "thumb_360_h": 0,
      "thumb_360_w": 0,
      "thumb_480": "http://example.com",
      "thumb_480_h": 0,
      "thumb_480_w": 0,
      "thumb_64": "http://example.com",
      "thumb_720": "http://example.com",
      "thumb_720_h": 0,
      "thumb_720_w": 0,
      "thumb_80": "http://example.com",
      "thumb_800": "http://example.com",
      "thumb_800_h": 0,
      "thumb_800_w": 0,
      "thumb_960": "http://example.com",
      "thumb_960_h": 0,
      "thumb_960_w": 0,
      "thumb_tiny": "string",
      "timestamp": 0,
      "title": "string",
      "updated": 0,
      "url_private": "http://example.com",
      "url_private_download": "http://example.com",
      "user": "string",
      "user_team": "string",
      "username": "string"
    }
  ],
  "icons": {
    "emoji": "string",
    "image_64": "http://example.com"
  },
  "inviter": "string",
  "is_delayed_message": true,
  "is_intro": true,
  "is_starred": true,
  "last_read": "string",
  "latest_reply": "string",
  "name": "string",
  "old_name": "string",
  "parent_user_id": "string",
  "permalink": "http://example.com",
  "pinned_to": [
    "string"
  ],
  "purpose": "string",
  "reactions": [
    {
      "count": 0,
      "name": "string",
      "users": [
        "string"
      ]
    }
  ],
  "reply_count": 0,
  "reply_users": [
    "string"
  ],
  "reply_users_count": 0,
  "source_team": "string",
  "subscribed": true,
  "subtype": "string",
  "team": "string",
  "text": "string",
  "thread_ts": "string",
  "topic": "string",
  "ts": "string",
  "type": "string",
  "unread_count": 0,
  "upload": true,
  "user": "string",
  "user_profile": {
    "avatar_hash": "string",
    "display_name": "string",
    "display_name_normalized": "string",
    "first_name": "string",
    "image_72": "http://example.com",
    "is_restricted": true,
    "is_ultra_restricted": true,
    "name": "string",
    "real_name": "string",
    "real_name_normalized": "string",
    "team": "string"
  },
  "user_team": "string",
  "username": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|attachments|[object]|false|none|none|
|blocks|[blocks](#schemablocks)|false|none|This is a very loose definition, in the future, we'll populate this with deeper schema in this definition namespace.|
|bot_id|[[defs_bot_id](#schemadefs_bot_id) \| object \| null]|false|none|none|
|bot_profile|[objs_bot_profile](#schemaobjs_bot_profile)|false|none|none|
|client_msg_id|string|false|none|none|
|comment|[objs_comment](#schemaobjs_comment)|false|none|none|
|display_as_bot|boolean|false|none|none|
|file|[objs_file](#schemaobjs_file)|false|none|none|
|files|[[objs_file](#schemaobjs_file)]|false|none|none|
|icons|object|false|none|none|
|inviter|[defs_user_id](#schemadefs_user_id)|false|none|none|
|is_delayed_message|boolean|false|none|none|
|is_intro|boolean|false|none|none|
|is_starred|boolean|false|none|none|
|last_read|[defs_ts](#schemadefs_ts)|false|none|none|
|latest_reply|[defs_ts](#schemadefs_ts)|false|none|none|
|name|string|false|none|none|
|old_name|string|false|none|none|
|parent_user_id|[defs_user_id](#schemadefs_user_id)|false|none|none|
|permalink|string(uri)|false|none|none|
|pinned_to|[[defs_channel](#schemadefs_channel)]|false|none|none|
|purpose|string|false|none|none|
|reactions|[[objs_reaction](#schemaobjs_reaction)]|false|none|none|
|reply_count|integer|false|none|none|
|reply_users|[[defs_user_id](#schemadefs_user_id)]|false|none|none|
|reply_users_count|integer|false|none|none|
|source_team|[defs_workspace_id](#schemadefs_workspace_id)|false|none|none|
|subscribed|boolean|false|none|none|
|subtype|string|false|none|none|
|team|[defs_workspace_id](#schemadefs_workspace_id)|false|none|none|
|text|string|true|none|none|
|thread_ts|[defs_ts](#schemadefs_ts)|false|none|none|
|topic|string|false|none|none|
|ts|[defs_ts](#schemadefs_ts)|true|none|none|
|type|string|true|none|none|
|unread_count|integer|false|none|none|
|upload|boolean|false|none|none|
|user|[defs_user_id](#schemadefs_user_id)|false|none|none|
|user_profile|[objs_user_profile_short](#schemaobjs_user_profile_short)|false|none|none|
|user_team|[defs_workspace_id](#schemadefs_workspace_id)|false|none|none|
|username|string|false|none|none|

<h2 id="tocS_objs_paging">objs_paging</h2>
<!-- backwards compatibility -->
<a id="schemaobjs_paging"></a>
<a id="schema_objs_paging"></a>
<a id="tocSobjs_paging"></a>
<a id="tocsobjs_paging"></a>

```json
{
  "count": 0,
  "page": 0,
  "pages": 0,
  "per_page": 0,
  "spill": 0,
  "total": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|integer|false|none|none|
|page|integer|true|none|none|
|pages|integer|false|none|none|
|per_page|integer|false|none|none|
|spill|integer|false|none|none|
|total|integer|true|none|none|

<h2 id="tocS_objs_primary_owner">objs_primary_owner</h2>
<!-- backwards compatibility -->
<a id="schemaobjs_primary_owner"></a>
<a id="schema_objs_primary_owner"></a>
<a id="tocSobjs_primary_owner"></a>
<a id="tocsobjs_primary_owner"></a>

```json
{
  "email": "string",
  "id": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|email|string|true|none|none|
|id|string|true|none|none|

<h2 id="tocS_objs_reaction">objs_reaction</h2>
<!-- backwards compatibility -->
<a id="schemaobjs_reaction"></a>
<a id="schema_objs_reaction"></a>
<a id="tocSobjs_reaction"></a>
<a id="tocsobjs_reaction"></a>

```json
{
  "count": 0,
  "name": "string",
  "users": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|integer|true|none|none|
|name|string|true|none|none|
|users|[[defs_user_id](#schemadefs_user_id)]|true|none|none|

<h2 id="tocS_objs_reminder">objs_reminder</h2>
<!-- backwards compatibility -->
<a id="schemaobjs_reminder"></a>
<a id="schema_objs_reminder"></a>
<a id="tocSobjs_reminder"></a>
<a id="tocsobjs_reminder"></a>

```json
{
  "complete_ts": 0,
  "creator": "string",
  "id": "string",
  "recurring": true,
  "text": "string",
  "time": 0,
  "user": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|complete_ts|integer|false|none|none|
|creator|[defs_user_id](#schemadefs_user_id)|true|none|none|
|id|[defs_reminder_id](#schemadefs_reminder_id)|true|none|none|
|recurring|boolean|true|none|none|
|text|string|true|none|none|
|time|integer|false|none|none|
|user|[defs_user_id](#schemadefs_user_id)|true|none|none|

<h2 id="tocS_objs_resources">objs_resources</h2>
<!-- backwards compatibility -->
<a id="schemaobjs_resources"></a>
<a id="schema_objs_resources"></a>
<a id="tocSobjs_resources"></a>
<a id="tocsobjs_resources"></a>

```json
{
  "excluded_ids": [
    [
      "string"
    ]
  ],
  "ids": [
    [
      "string"
    ]
  ],
  "wildcard": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|excluded_ids|[[[defs_channel](#schemadefs_channel) \| [defs_team](#schemadefs_team)]]|false|none|none|
|ids|[[[defs_channel](#schemadefs_channel) \| [defs_team](#schemadefs_team)]]|true|none|none|
|wildcard|boolean|false|none|none|

<h2 id="tocS_objs_response_metadata">objs_response_metadata</h2>
<!-- backwards compatibility -->
<a id="schemaobjs_response_metadata"></a>
<a id="schema_objs_response_metadata"></a>
<a id="tocSobjs_response_metadata"></a>
<a id="tocsobjs_response_metadata"></a>

```json
[
  {
    "next_cursor": "string"
  }
]
```

<h2 id="tocS_objs_scopes">objs_scopes</h2>
<!-- backwards compatibility -->
<a id="schemaobjs_scopes"></a>
<a id="schema_objs_scopes"></a>
<a id="tocSobjs_scopes"></a>
<a id="tocsobjs_scopes"></a>

```json
[
  "string"
]
```

<h2 id="tocS_objs_subteam">objs_subteam</h2>
<!-- backwards compatibility -->
<a id="schemaobjs_subteam"></a>
<a id="schema_objs_subteam"></a>
<a id="tocSobjs_subteam"></a>
<a id="tocsobjs_subteam"></a>

```json
{
  "auto_provision": true,
  "auto_type": [
    null
  ],
  "channel_count": 0,
  "created_by": "string",
  "date_create": 0,
  "date_delete": 0,
  "date_update": 0,
  "deleted_by": [
    null
  ],
  "description": "string",
  "enterprise_subteam_id": "string",
  "handle": "string",
  "id": "string",
  "is_external": true,
  "is_subteam": true,
  "is_usergroup": true,
  "name": "string",
  "prefs": {
    "channels": [
      "string"
    ],
    "groups": [
      "string"
    ]
  },
  "team_id": "string",
  "updated_by": "string",
  "user_count": 0,
  "users": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|auto_provision|boolean|true|none|none|
|auto_type|[object \| null \| string]|true|none|none|
|channel_count|integer|false|none|none|
|created_by|[defs_user_id](#schemadefs_user_id)|true|none|none|
|date_create|integer|true|none|none|
|date_delete|integer|true|none|none|
|date_update|integer|true|none|none|
|deleted_by|[object \| null \| [defs_user_id](#schemadefs_user_id)]|true|none|none|
|description|string|true|none|none|
|enterprise_subteam_id|string|true|none|none|
|handle|string|true|none|none|
|id|[defs_subteam_id](#schemadefs_subteam_id)|true|none|none|
|is_external|boolean|true|none|none|
|is_subteam|boolean|true|none|none|
|is_usergroup|boolean|true|none|none|
|name|string|true|none|none|
|prefs|object|true|none|none|
|team_id|[defs_team](#schemadefs_team)|true|none|none|
|updated_by|[defs_user_id](#schemadefs_user_id)|true|none|none|
|user_count|integer|false|none|none|
|users|[[defs_user_id](#schemadefs_user_id)]|false|none|none|

<h2 id="tocS_objs_team">objs_team</h2>
<!-- backwards compatibility -->
<a id="schemaobjs_team"></a>
<a id="schema_objs_team"></a>
<a id="tocSobjs_team"></a>
<a id="tocsobjs_team"></a>

```json
{
  "archived": true,
  "avatar_base_url": "http://example.com",
  "created": 0,
  "date_create": 0,
  "deleted": true,
  "description": "string",
  "discoverable": [
    null
  ],
  "domain": "string",
  "email_domain": "string",
  "enterprise_id": "string",
  "enterprise_name": "string",
  "external_org_migrations": {
    "current": [
      {
        "date_started": 0,
        "team_id": "string"
      }
    ],
    "date_updated": 0
  },
  "has_compliance_export": true,
  "icon": {
    "image_102": "string",
    "image_132": "string",
    "image_230": "string",
    "image_34": "string",
    "image_44": "string",
    "image_68": "string",
    "image_88": "string",
    "image_default": true
  },
  "id": "string",
  "is_assigned": true,
  "is_enterprise": 0,
  "is_over_storage_limit": true,
  "limit_ts": 0,
  "locale": "string",
  "messages_count": 0,
  "msg_edit_window_mins": 0,
  "name": "string",
  "over_integrations_limit": true,
  "over_storage_limit": true,
  "pay_prod_cur": "string",
  "plan": "",
  "primary_owner": {
    "email": "string",
    "id": "string"
  },
  "sso_provider": {
    "label": "string",
    "name": "string",
    "type": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|archived|boolean|false|none|none|
|avatar_base_url|string(uri)|false|none|none|
|created|integer|false|none|none|
|date_create|integer|false|none|none|
|deleted|boolean|false|none|none|
|description|string \| null|false|none|none|
|discoverable|[object \| null \| string]|false|none|none|
|domain|string|true|none|none|
|email_domain|string|true|none|none|
|enterprise_id|[defs_enterprise_id](#schemadefs_enterprise_id)|false|none|none|
|enterprise_name|[defs_enterprise_name](#schemadefs_enterprise_name)|false|none|none|
|external_org_migrations|[objs_external_org_migrations](#schemaobjs_external_org_migrations)|false|none|none|
|has_compliance_export|boolean|false|none|none|
|icon|[objs_icon](#schemaobjs_icon)|true|none|none|
|id|[defs_workspace_id](#schemadefs_workspace_id)|true|none|none|
|is_assigned|boolean|false|none|none|
|is_enterprise|integer|false|none|none|
|is_over_storage_limit|boolean|false|none|none|
|limit_ts|integer|false|none|none|
|locale|string|false|none|none|
|messages_count|integer|false|none|none|
|msg_edit_window_mins|integer|false|none|none|
|name|string|true|none|none|
|over_integrations_limit|boolean|false|none|none|
|over_storage_limit|boolean|false|none|none|
|pay_prod_cur|string|false|none|none|
|plan|string|false|none|none|
|primary_owner|[objs_primary_owner](#schemaobjs_primary_owner)|false|none|none|
|sso_provider|object|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|plan|""|
|plan|std|
|plan|plus|
|plan|compliance|
|plan|enterprise|

<h2 id="tocS_objs_team_profile_field">objs_team_profile_field</h2>
<!-- backwards compatibility -->
<a id="schemaobjs_team_profile_field"></a>
<a id="schema_objs_team_profile_field"></a>
<a id="tocSobjs_team_profile_field"></a>
<a id="tocsobjs_team_profile_field"></a>

```json
{
  "field_name": "string",
  "hint": "string",
  "id": "string",
  "is_hidden": true,
  "label": "string",
  "options": [
    null
  ],
  "ordering": 0,
  "possible_values": [
    "string"
  ],
  "type": "text"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|field_name|string \| null|false|none|none|
|hint|string|true|none|none|
|id|string|true|none|none|
|is_hidden|boolean|false|none|none|
|label|string|true|none|none|
|options|[object \| null \| [objs_team_profile_field_option](#schemaobjs_team_profile_field_option)]|false|none|none|
|ordering|number|true|none|none|
|possible_values|[string]|false|none|none|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|text|
|type|date|
|type|link|
|type|mailto|
|type|options_list|
|type|user|

<h2 id="tocS_objs_team_profile_field_option">objs_team_profile_field_option</h2>
<!-- backwards compatibility -->
<a id="schemaobjs_team_profile_field_option"></a>
<a id="schema_objs_team_profile_field_option"></a>
<a id="tocSobjs_team_profile_field_option"></a>
<a id="tocsobjs_team_profile_field_option"></a>

```json
{
  "is_custom": true,
  "is_multiple_entry": true,
  "is_protected": true,
  "is_scim": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|is_custom|boolean \| null|false|none|none|
|is_multiple_entry|boolean \| null|false|none|none|
|is_protected|boolean \| null|false|none|none|
|is_scim|boolean \| null|false|none|none|

<h2 id="tocS_objs_user">objs_user</h2>
<!-- backwards compatibility -->
<a id="schemaobjs_user"></a>
<a id="schema_objs_user"></a>
<a id="tocSobjs_user"></a>
<a id="tocsobjs_user"></a>

```json
[
  {
    "color": "string",
    "deleted": true,
    "enterprise_user": {
      "enterprise_id": "string",
      "enterprise_name": "string",
      "id": "string",
      "is_admin": true,
      "is_owner": true,
      "teams": [
        "string"
      ]
    },
    "has_2fa": true,
    "id": "string",
    "is_admin": true,
    "is_app_user": true,
    "is_bot": true,
    "is_external": true,
    "is_forgotten": true,
    "is_invited_user": true,
    "is_owner": true,
    "is_primary_owner": true,
    "is_restricted": true,
    "is_stranger": true,
    "is_ultra_restricted": true,
    "locale": "string",
    "name": "string",
    "presence": "string",
    "profile": {
      "always_active": true,
      "api_app_id": "string",
      "avatar_hash": "string",
      "bot_id": "string",
      "display_name": "string",
      "display_name_normalized": "string",
      "email": "user@example.com",
      "fields": [
        {}
      ],
      "first_name": "string",
      "guest_expiration_ts": 0,
      "guest_invited_by": "string",
      "image_1024": "http://example.com",
      "image_192": "http://example.com",
      "image_24": "http://example.com",
      "image_32": "http://example.com",
      "image_48": "http://example.com",
      "image_512": "http://example.com",
      "image_72": "http://example.com",
      "image_original": "http://example.com",
      "is_app_user": true,
      "is_custom_image": true,
      "is_restricted": true,
      "is_ultra_restricted": true,
      "last_avatar_image_hash": "string",
      "last_name": "string",
      "memberships_count": 0,
      "name": "string",
      "phone": "string",
      "pronouns": "string",
      "real_name": "string",
      "real_name_normalized": "string",
      "skype": "string",
      "status_default_emoji": "string",
      "status_default_text": "string",
      "status_default_text_canonical": "string",
      "status_emoji": "string",
      "status_expiration": 0,
      "status_text": "string",
      "status_text_canonical": "string",
      "team": "string",
      "title": "string",
      "updated": 0,
      "user_id": "string",
      "username": "string"
    },
    "real_name": "string",
    "team": "string",
    "team_id": "string",
    "team_profile": {
      "fields": [
        {
          "field_name": "string",
          "hint": "string",
          "id": "string",
          "is_hidden": true,
          "label": "string",
          "options": [
            null
          ],
          "ordering": 0,
          "possible_values": [
            "string"
          ],
          "type": "text"
        }
      ]
    },
    "two_factor_type": "string",
    "tz": [
      null
    ],
    "tz_label": "string",
    "tz_offset": 0,
    "updated": 0
  }
]
```

<h2 id="tocS_objs_user_profile">objs_user_profile</h2>
<!-- backwards compatibility -->
<a id="schemaobjs_user_profile"></a>
<a id="schema_objs_user_profile"></a>
<a id="tocSobjs_user_profile"></a>
<a id="tocsobjs_user_profile"></a>

```json
{
  "always_active": true,
  "api_app_id": "string",
  "avatar_hash": "string",
  "bot_id": "string",
  "display_name": "string",
  "display_name_normalized": "string",
  "email": "user@example.com",
  "fields": [
    {}
  ],
  "first_name": "string",
  "guest_expiration_ts": 0,
  "guest_invited_by": "string",
  "image_1024": "http://example.com",
  "image_192": "http://example.com",
  "image_24": "http://example.com",
  "image_32": "http://example.com",
  "image_48": "http://example.com",
  "image_512": "http://example.com",
  "image_72": "http://example.com",
  "image_original": "http://example.com",
  "is_app_user": true,
  "is_custom_image": true,
  "is_restricted": true,
  "is_ultra_restricted": true,
  "last_avatar_image_hash": "string",
  "last_name": "string",
  "memberships_count": 0,
  "name": "string",
  "phone": "string",
  "pronouns": "string",
  "real_name": "string",
  "real_name_normalized": "string",
  "skype": "string",
  "status_default_emoji": "string",
  "status_default_text": "string",
  "status_default_text_canonical": "string",
  "status_emoji": "string",
  "status_expiration": 0,
  "status_text": "string",
  "status_text_canonical": "string",
  "team": "string",
  "title": "string",
  "updated": 0,
  "user_id": "string",
  "username": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|always_active|boolean|false|none|none|
|api_app_id|[defs_optional_app_id](#schemadefs_optional_app_id)|false|none|none|
|avatar_hash|string|true|none|none|
|bot_id|[defs_bot_id](#schemadefs_bot_id)|false|none|none|
|display_name|string|true|none|none|
|display_name_normalized|string|true|none|none|
|email|string(email) \| null|false|none|none|
|fields|[object]|true|none|none|
|first_name|string \| null|false|none|none|
|guest_expiration_ts|integer \| null|false|none|none|
|guest_invited_by|string \| null|false|none|none|
|image_1024|string(uri) \| null|false|none|none|
|image_192|string(uri) \| null|false|none|none|
|image_24|string(uri) \| null|false|none|none|
|image_32|string(uri) \| null|false|none|none|
|image_48|string(uri) \| null|false|none|none|
|image_512|string(uri) \| null|false|none|none|
|image_72|string(uri) \| null|false|none|none|
|image_original|string(uri) \| null|false|none|none|
|is_app_user|boolean|false|none|none|
|is_custom_image|boolean|false|none|none|
|is_restricted|boolean \| null|false|none|none|
|is_ultra_restricted|boolean \| null|false|none|none|
|last_avatar_image_hash|string|false|none|none|
|last_name|string \| null|false|none|none|
|memberships_count|integer|false|none|none|
|name|string \| null|false|none|none|
|phone|string|true|none|none|
|pronouns|string|false|none|none|
|real_name|string|true|none|none|
|real_name_normalized|string|true|none|none|
|skype|string|true|none|none|
|status_default_emoji|string|false|none|none|
|status_default_text|string|false|none|none|
|status_default_text_canonical|string \| null|false|none|none|
|status_emoji|string|true|none|none|
|status_expiration|integer|false|none|none|
|status_text|string|true|none|none|
|status_text_canonical|string \| null|false|none|none|
|team|[defs_workspace_id](#schemadefs_workspace_id)|false|none|none|
|title|string|true|none|none|
|updated|integer|false|none|none|
|user_id|string|false|none|none|
|username|string \| null|false|none|none|

<h2 id="tocS_objs_user_profile_short">objs_user_profile_short</h2>
<!-- backwards compatibility -->
<a id="schemaobjs_user_profile_short"></a>
<a id="schema_objs_user_profile_short"></a>
<a id="tocSobjs_user_profile_short"></a>
<a id="tocsobjs_user_profile_short"></a>

```json
{
  "avatar_hash": "string",
  "display_name": "string",
  "display_name_normalized": "string",
  "first_name": "string",
  "image_72": "http://example.com",
  "is_restricted": true,
  "is_ultra_restricted": true,
  "name": "string",
  "real_name": "string",
  "real_name_normalized": "string",
  "team": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|avatar_hash|string|true|none|none|
|display_name|string|true|none|none|
|display_name_normalized|string|false|none|none|
|first_name|string \| null|true|none|none|
|image_72|string(uri)|true|none|none|
|is_restricted|boolean|true|none|none|
|is_ultra_restricted|boolean|true|none|none|
|name|string|true|none|none|
|real_name|string|true|none|none|
|real_name_normalized|string|false|none|none|
|team|[defs_workspace_id](#schemadefs_workspace_id)|true|none|none|
