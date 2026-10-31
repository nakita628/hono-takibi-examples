<h1 id="google-chat-api">Google Chat API v1</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

The Google Chat API lets you build Chat apps to integrate your services with Google Chat and manage Chat resources such as spaces, members, and messages.

Base URLs:

* <a href="https://chat.googleapis.com/">https://chat.googleapis.com/</a>

<a href="https://developers.google.com/terms/">Terms of service</a>
Web: <a href="https://google.com">Google</a> 
License: <a href="http://creativecommons.org/licenses/by/3.0/">Creative Commons Attribution 3.0</a>

<a href="https://developers.google.com/hangouts/chat">External documentation</a>

# Authentication

- oAuth2 authentication. Oauth 2.0 implicit authentication

    - Flow: implicit
    - Authorization URL = [https://accounts.google.com/o/oauth2/auth](https://accounts.google.com/o/oauth2/auth)

|Scope|Scope Description|
|---|---|
|https://www.googleapis.com/auth/chat.bot|Private Service: https://www.googleapis.com/auth/chat.bot|
|https://www.googleapis.com/auth/chat.delete|Delete conversations and spaces & remove access to associated files in Google Chat|
|https://www.googleapis.com/auth/chat.import|Import spaces, messages, and memberships into Google Chat.|
|https://www.googleapis.com/auth/chat.memberships|View, add, and remove members from conversations in Google Chat|
|https://www.googleapis.com/auth/chat.memberships.app|Add and remove itself from conversations in Google Chat|
|https://www.googleapis.com/auth/chat.memberships.readonly|View members in Google Chat conversations.|
|https://www.googleapis.com/auth/chat.messages|View, compose, send, update, and delete messages, and add, view, and delete reactions to messages.|
|https://www.googleapis.com/auth/chat.messages.create|Compose and send messages in Google Chat|
|https://www.googleapis.com/auth/chat.messages.reactions|View, add, and delete reactions to messages in Google Chat|
|https://www.googleapis.com/auth/chat.messages.reactions.create|Add reactions to messages in Google Chat|
|https://www.googleapis.com/auth/chat.messages.reactions.readonly|View reactions to messages in Google Chat|
|https://www.googleapis.com/auth/chat.messages.readonly|View messages and reactions in Google Chat|
|https://www.googleapis.com/auth/chat.spaces|Create conversations and spaces and see or edit metadata (including history settings and access settings) in Google Chat|
|https://www.googleapis.com/auth/chat.spaces.create|Create new conversations in Google Chat|
|https://www.googleapis.com/auth/chat.spaces.readonly|View chat and spaces in Google Chat|

- oAuth2 authentication. Oauth 2.0 authorizationCode authentication

    - Flow: authorizationCode
    - Authorization URL = [https://accounts.google.com/o/oauth2/auth](https://accounts.google.com/o/oauth2/auth)
    - Token URL = [https://accounts.google.com/o/oauth2/token](https://accounts.google.com/o/oauth2/token)

|Scope|Scope Description|
|---|---|
|https://www.googleapis.com/auth/chat.bot|Private Service: https://www.googleapis.com/auth/chat.bot|
|https://www.googleapis.com/auth/chat.delete|Delete conversations and spaces & remove access to associated files in Google Chat|
|https://www.googleapis.com/auth/chat.import|Import spaces, messages, and memberships into Google Chat.|
|https://www.googleapis.com/auth/chat.memberships|View, add, and remove members from conversations in Google Chat|
|https://www.googleapis.com/auth/chat.memberships.app|Add and remove itself from conversations in Google Chat|
|https://www.googleapis.com/auth/chat.memberships.readonly|View members in Google Chat conversations.|
|https://www.googleapis.com/auth/chat.messages|View, compose, send, update, and delete messages, and add, view, and delete reactions to messages.|
|https://www.googleapis.com/auth/chat.messages.create|Compose and send messages in Google Chat|
|https://www.googleapis.com/auth/chat.messages.reactions|View, add, and delete reactions to messages in Google Chat|
|https://www.googleapis.com/auth/chat.messages.reactions.create|Add reactions to messages in Google Chat|
|https://www.googleapis.com/auth/chat.messages.reactions.readonly|View reactions to messages in Google Chat|
|https://www.googleapis.com/auth/chat.messages.readonly|View messages and reactions in Google Chat|
|https://www.googleapis.com/auth/chat.spaces|Create conversations and spaces and see or edit metadata (including history settings and access settings) in Google Chat|
|https://www.googleapis.com/auth/chat.spaces.create|Create new conversations in Google Chat|
|https://www.googleapis.com/auth/chat.spaces.readonly|View chat and spaces in Google Chat|

<h1 id="google-chat-api-media">media</h1>

## chat.media.download

<a id="opIdchat.media.download"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/media/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/media/{resourceName}`

Downloads media. Download is supported on the URI `/v1/media/{+name}?alt=media`.

<h3 id="chatmediadownload-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|resourceName|path|string|true|Name of the media that is being downloaded. See ReadRequest.resource_name.|
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
  "resourceName": "string"
}
```

<h3 id="chatmediadownload-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Media](#schemamedia)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/chat.bot ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/chat.bot ), Oauth2 ( Scopes: https://www.googleapis.com/auth/chat.messages ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/chat.messages ), Oauth2 ( Scopes: https://www.googleapis.com/auth/chat.messages.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/chat.messages.readonly )
</aside>

## chat.media.upload

<a id="opIdchat.media.upload"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/attachments:upload \
  -X POST \
  -H 'Content-Type: application/octet-stream' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{"filename":"string"}'
```

`POST /v1/{parent}/attachments:upload`

Uploads an attachment. For an example, see [Upload media as a file attachment](https://developers.google.com/chat/api/guides/v1/media-and-attachments/upload). Requires user [authentication](https://developers.google.com/chat/api/guides/auth/users). You can upload attachments up to 200 MB. Certain file types aren't supported. For details, see [File types blocked by Google Chat](https://support.google.com/chat/answer/7651457?&co=GENIE.Platform%3DDesktop#File%20types%20blocked%20in%20Google%20Chat).

> Body parameter

```json
{
  "filename": "string"
}
```

<h3 id="chatmediaupload-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. Resource name of the Chat space in which the attachment is uploaded. Format "spaces/{space}".|
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
|body|body|[UploadAttachmentRequest](#schemauploadattachmentrequest)|false|none|
|» filename|body|string|false|Required. The filename of the attachment, including the file extension.|

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
  "attachmentDataRef": {
    "attachmentUploadToken": "string",
    "resourceName": "string"
  }
}
```

<h3 id="chatmediaupload-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[UploadAttachmentResponse](#schemauploadattachmentresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/chat.import ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/chat.import ), Oauth2 ( Scopes: https://www.googleapis.com/auth/chat.messages ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/chat.messages ), Oauth2 ( Scopes: https://www.googleapis.com/auth/chat.messages.create ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/chat.messages.create )
</aside>

<h1 id="google-chat-api-spaces">spaces</h1>

## chat.spaces.list

<a id="opIdchat.spaces.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/spaces \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/spaces`

Lists spaces the caller is a member of. Group chats and DMs aren't listed until the first message is sent. For an example, see [List spaces](https://developers.google.com/chat/api/guides/v1/spaces/list). Requires [authentication](https://developers.google.com/chat/api/guides/auth). Supports [app authentication](https://developers.google.com/chat/api/guides/auth/service-accounts) and [user authentication](https://developers.google.com/chat/api/guides/auth/users). Lists spaces visible to the caller or authenticated user. Group chats and DMs aren't listed until the first message is sent.

<h3 id="chatspaceslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|filter|query|string|false|Optional. A query filter. You can filter spaces by the space type ([`space_type`](https://developers.google.com/chat/api/reference/rest/v1/spaces#spacetype)). To filter by space type, you must specify valid enum value, such as `SPACE` or `GROUP_CHAT` (the `space_type` can't be `SPACE_TYPE_UNSPECIFIED`). To query for multiple space types, use the `OR` operator. For example, the following queries are valid: ``` space_type = "SPACE" spaceType = "GROUP_CHAT" OR spaceType = "DIRECT_MESSAGE" ``` Invalid queries are rejected by the server with an `INVALID_ARGUMENT` error.|
|pageSize|query|integer|false|Optional. The maximum number of spaces to return. The service might return fewer than this value. If unspecified, at most 100 spaces are returned. The maximum value is 1,000. If you use a value more than 1,000, it's automatically changed to 1,000. Negative values return an `INVALID_ARGUMENT` error.|
|pageToken|query|string|false|Optional. A page token, received from a previous list spaces call. Provide this parameter to retrieve the subsequent page. When paginating, the filter value should match the call that provided the page token. Passing a different value may lead to unexpected results.|
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
  "spaces": [
    {
      "adminInstalled": true,
      "createTime": "string",
      "displayName": "string",
      "externalUserAllowed": true,
      "importMode": true,
      "name": "string",
      "singleUserBotDm": true,
      "spaceDetails": {
        "description": "string",
        "guidelines": "string"
      },
      "spaceHistoryState": "HISTORY_STATE_UNSPECIFIED",
      "spaceThreadingState": "SPACE_THREADING_STATE_UNSPECIFIED",
      "spaceType": "SPACE_TYPE_UNSPECIFIED",
      "threaded": true,
      "type": "TYPE_UNSPECIFIED"
    }
  ]
}
```

<h3 id="chatspaceslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListSpacesResponse](#schemalistspacesresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/chat.bot ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/chat.bot ), Oauth2 ( Scopes: https://www.googleapis.com/auth/chat.spaces ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/chat.spaces ), Oauth2 ( Scopes: https://www.googleapis.com/auth/chat.spaces.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/chat.spaces.readonly )
</aside>

## chat.spaces.create

<a id="opIdchat.spaces.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/spaces \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "createTime": "string",
    "displayName": "string",
    "externalUserAllowed": true,
    "importMode": true,
    "name": "string",
    "singleUserBotDm": true,
    "spaceDetails": {
      "description": "string",
      "guidelines": "string"
    },
    "spaceHistoryState": "HISTORY_STATE_UNSPECIFIED",
    "spaceType": "SPACE_TYPE_UNSPECIFIED"
  }'
```

`POST /v1/spaces`

Creates a named space. Spaces grouped by topics aren't supported. For an example, see [Create a space](https://developers.google.com/chat/api/guides/v1/spaces/create). If you receive the error message `ALREADY_EXISTS` when creating a space, try a different `displayName`. An existing space within the Google Workspace organization might already use this display name. Requires [user authentication](https://developers.google.com/chat/api/guides/auth/users).

> Body parameter

```json
{
  "createTime": "string",
  "displayName": "string",
  "externalUserAllowed": true,
  "importMode": true,
  "name": "string",
  "singleUserBotDm": true,
  "spaceDetails": {
    "description": "string",
    "guidelines": "string"
  },
  "spaceHistoryState": "HISTORY_STATE_UNSPECIFIED",
  "spaceType": "SPACE_TYPE_UNSPECIFIED"
}
```

<h3 id="chatspacescreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|requestId|query|string|false|Optional. A unique identifier for this request. A random UUID is recommended. Specifying an existing request ID returns the space created with that ID instead of creating a new space. Specifying an existing request ID from the same Chat app with a different authenticated user returns an error.|
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
|body|body|[Space](#schemaspace)|false|none|
|» createTime|body|string(google-datetime)|false|Optional. Immutable. For spaces created in Chat, the time the space was created. This field is output only, except when used in import mode spaces. For import mode spaces, set this field to the historical timestamp at which the space was created in the source in order to preserve the original creation time. Only populated in the output when `spaceType` is `GROUP_CHAT` or `SPACE`.|
|» displayName|body|string|false|The space's display name. Required when [creating a space](https://developers.google.com/chat/api/reference/rest/v1/spaces/create). If you receive the error message `ALREADY_EXISTS` when creating a space or updating the `displayName`, try a different `displayName`. An existing space within the Google Workspace organization might already use this display name. For direct messages, this field might be empty. Supports up to 128 characters.|
|» externalUserAllowed|body|boolean|false|Immutable. Whether this space permits any Google Chat user as a member. Input when creating a space in a Google Workspace organization. Omit this field when creating spaces in the following conditions: * The authenticated user uses a Google Account. By default, the space permits any Google Chat user. * The space is used to [import data to Google Chat] (https://developers.google.com/chat/api/guides/import-data-overview). Import mode spaces must only permit members from the same Google Workspace organization. For existing spaces, this field is output only.|
|» importMode|body|boolean|false|Optional. Whether this space is created in `Import Mode` as part of a data migration into Google Workspace. While spaces are being imported, they aren't visible to users until the import is complete.|
|» name|body|string|false|Resource name of the space. Format: `spaces/{space}`|
|» singleUserBotDm|body|boolean|false|Optional. Whether the space is a DM between a Chat app and a single human.|
|» spaceDetails|body|[SpaceDetails](#schemaspacedetails)|false|Details about the space including description and rules.|
|» spaceHistoryState|body|string|false|The message history state for messages and threads in this space.|
|» spaceType|body|string|false|The type of space. Required when creating a space or updating the space type of a space. Output only for other usage.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|
|» spaceHistoryState|HISTORY_STATE_UNSPECIFIED|
|» spaceHistoryState|HISTORY_OFF|
|» spaceHistoryState|HISTORY_ON|
|» spaceType|SPACE_TYPE_UNSPECIFIED|
|» spaceType|SPACE|
|» spaceType|GROUP_CHAT|
|» spaceType|DIRECT_MESSAGE|

> Example responses

> 200 Response

```json
{
  "adminInstalled": true,
  "createTime": "string",
  "displayName": "string",
  "externalUserAllowed": true,
  "importMode": true,
  "name": "string",
  "singleUserBotDm": true,
  "spaceDetails": {
    "description": "string",
    "guidelines": "string"
  },
  "spaceHistoryState": "HISTORY_STATE_UNSPECIFIED",
  "spaceThreadingState": "SPACE_THREADING_STATE_UNSPECIFIED",
  "spaceType": "SPACE_TYPE_UNSPECIFIED",
  "threaded": true,
  "type": "TYPE_UNSPECIFIED"
}
```

<h3 id="chatspacescreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Space](#schemaspace)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/chat.import ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/chat.import ), Oauth2 ( Scopes: https://www.googleapis.com/auth/chat.spaces ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/chat.spaces ), Oauth2 ( Scopes: https://www.googleapis.com/auth/chat.spaces.create ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/chat.spaces.create )
</aside>

## chat.spaces.findDirectMessage

<a id="opIdchat.spaces.findDirectMessage"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/spaces:findDirectMessage \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/spaces:findDirectMessage`

Returns the existing direct message with the specified user. If no direct message space is found, returns a `404 NOT_FOUND` error. For an example, see [Find a direct message](/chat/api/guides/v1/spaces/find-direct-message). With [user authentication](https://developers.google.com/chat/api/guides/auth/users), returns the direct message space between the specified user and the authenticated user. With [app authentication](https://developers.google.com/chat/api/guides/auth/service-accounts), returns the direct message space between the specified user and the calling Chat app. Requires [user authentication](https://developers.google.com/chat/api/guides/auth/users) or [app authentication](https://developers.google.com/chat/api/guides/auth/service-accounts).

<h3 id="chatspacesfinddirectmessage-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|query|string|false|Required. Resource name of the user to find direct message with. Format: `users/{user}`, where `{user}` is either the `id` for the [person](https://developers.google.com/people/api/rest/v1/people) from the People API, or the `id` for the [user](https://developers.google.com/admin-sdk/directory/reference/rest/v1/users) in the Directory API. For example, if the People API profile ID is `123456789`, you can find a direct message with that person by using `users/123456789` as the `name`. When [authenticated as a user](https://developers.google.com/chat/api/guides/auth/users), you can use the email as an alias for `{user}`. For example, `users/example@gmail.com` where `example@gmail.com` is the email of the Google Chat user.|
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
  "adminInstalled": true,
  "createTime": "string",
  "displayName": "string",
  "externalUserAllowed": true,
  "importMode": true,
  "name": "string",
  "singleUserBotDm": true,
  "spaceDetails": {
    "description": "string",
    "guidelines": "string"
  },
  "spaceHistoryState": "HISTORY_STATE_UNSPECIFIED",
  "spaceThreadingState": "SPACE_THREADING_STATE_UNSPECIFIED",
  "spaceType": "SPACE_TYPE_UNSPECIFIED",
  "threaded": true,
  "type": "TYPE_UNSPECIFIED"
}
```

<h3 id="chatspacesfinddirectmessage-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Space](#schemaspace)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/chat.bot ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/chat.bot ), Oauth2 ( Scopes: https://www.googleapis.com/auth/chat.spaces ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/chat.spaces ), Oauth2 ( Scopes: https://www.googleapis.com/auth/chat.spaces.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/chat.spaces.readonly )
</aside>

## chat.spaces.setup

<a id="opIdchat.spaces.setup"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/spaces:setup \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "memberships": [
      {
        "createTime": "string",
        "deleteTime": "string",
        "groupMember": {
          "name": "string"
        },
        "member": {
          "domainId": "string",
          "name": "string",
          "type": "TYPE_UNSPECIFIED"
        },
        "name": "string",
        "role": "MEMBERSHIP_ROLE_UNSPECIFIED"
      }
    ],
    "requestId": "string",
    "space": {
      "createTime": "string",
      "displayName": "string",
      "externalUserAllowed": true,
      "importMode": true,
      "name": "string",
      "singleUserBotDm": true,
      "spaceDetails": {
        "description": "string",
        "guidelines": "string"
      },
      "spaceHistoryState": "HISTORY_STATE_UNSPECIFIED",
      "spaceType": "SPACE_TYPE_UNSPECIFIED"
    }
  }'
```

`POST /v1/spaces:setup`

Creates a space and adds specified users to it. The calling user is automatically added to the space, and shouldn't be specified as a membership in the request. For an example, see [Set up a space](https://developers.google.com/chat/api/guides/v1/spaces/set-up). To specify the human members to add, add memberships with the appropriate `member.name` in the `SetUpSpaceRequest`. To add a human user, use `users/{user}`, where `{user}` can be the email address for the user. For users in the same Workspace organization `{user}` can also be the `id` for the person from the People API, or the `id` for the user in the Directory API. For example, if the People API Person profile ID for `user@example.com` is `123456789`, you can add the user to the space by setting the `membership.member.name` to `users/user@example.com` or `users/123456789`. For a space or group chat, if the caller blocks or is blocked by some members, then those members aren't added to the created space. To create a direct message (DM) between the calling user and another human user, specify exactly one membership to represent the human user. If one user blocks the other, the request fails and the DM isn't created. To create a DM between the calling user and the calling app, set `Space.singleUserBotDm` to `true` and don't specify any memberships. You can only use this method to set up a DM with the calling app. To add the calling app as a member of a space or an existing DM between two human users, see [create a membership](https://developers.google.com/chat/api/guides/v1/members/create). If a DM already exists between two users, even when one user blocks the other at the time a request is made, then the existing DM is returned. Spaces with threaded replies aren't supported. If you receive the error message `ALREADY_EXISTS` when setting up a space, try a different `displayName`. An existing space within the Google Workspace organization might already use this display name. Requires [user authentication](https://developers.google.com/chat/api/guides/auth/users).

> Body parameter

```json
{
  "memberships": [
    {
      "createTime": "string",
      "deleteTime": "string",
      "groupMember": {
        "name": "string"
      },
      "member": {
        "domainId": "string",
        "name": "string",
        "type": "TYPE_UNSPECIFIED"
      },
      "name": "string",
      "role": "MEMBERSHIP_ROLE_UNSPECIFIED"
    }
  ],
  "requestId": "string",
  "space": {
    "createTime": "string",
    "displayName": "string",
    "externalUserAllowed": true,
    "importMode": true,
    "name": "string",
    "singleUserBotDm": true,
    "spaceDetails": {
      "description": "string",
      "guidelines": "string"
    },
    "spaceHistoryState": "HISTORY_STATE_UNSPECIFIED",
    "spaceType": "SPACE_TYPE_UNSPECIFIED"
  }
}
```

<h3 id="chatspacessetup-parameters">Parameters</h3>

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
|body|body|[SetUpSpaceRequest](#schemasetupspacerequest)|false|none|
|» memberships|body|[[Membership](#schemamembership)]|false|Optional. The Google Chat users to invite to join the space. Omit the calling user, as they are added automatically. The set currently allows up to 20 memberships (in addition to the caller). The `Membership.member` field must contain a `user` with `name` populated (format: `users/{user}`) and `type` set to `User.Type.HUMAN`. You can only add human users when setting up a space (adding Chat apps is only supported for direct message setup with the calling app). You can also add members using the user's email as an alias for {user}. For example, the `user.name` can be `users/example@gmail.com`." To invite Gmail users or users from external Google Workspace domains, user's email must be used for `{user}`. Optional when setting `Space.spaceType` to `SPACE`. Required when setting `Space.spaceType` to `GROUP_CHAT`, along with at least two memberships. Required when setting `Space.spaceType` to `DIRECT_MESSAGE` with a human user, along with exactly one membership. Must be empty when creating a 1:1 conversation between a human and the calling Chat app (when setting `Space.spaceType` to `DIRECT_MESSAGE` and `Space.singleUserBotDm` to `true`).|
|» requestId|body|string|false|Optional. A unique identifier for this request. A random UUID is recommended. Specifying an existing request ID returns the space created with that ID instead of creating a new space. Specifying an existing request ID from the same Chat app with a different authenticated user returns an error.|
|» space|body|[Space](#schemaspace)|false|Required. The `Space.spaceType` field is required. To create a space, set `Space.spaceType` to `SPACE` and set `Space.displayName`. If you receive the error message `ALREADY_EXISTS` when setting up a space, try a different `displayName`. An existing space within the Google Workspace organization might already use this display name. To create a group chat, set `Space.spaceType` to `GROUP_CHAT`. Don't set `Space.displayName`. To create a 1:1 conversation between humans, set `Space.spaceType` to `DIRECT_MESSAGE` and set `Space.singleUserBotDm` to `false`. Don't set `Space.displayName` or `Space.spaceDetails`. To create an 1:1 conversation between a human and the calling Chat app, set `Space.spaceType` to `DIRECT_MESSAGE` and `Space.singleUserBotDm` to `true`. Don't set `Space.displayName` or `Space.spaceDetails`. If a `DIRECT_MESSAGE` space already exists, that space is returned instead of creating a new space.|

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
  "adminInstalled": true,
  "createTime": "string",
  "displayName": "string",
  "externalUserAllowed": true,
  "importMode": true,
  "name": "string",
  "singleUserBotDm": true,
  "spaceDetails": {
    "description": "string",
    "guidelines": "string"
  },
  "spaceHistoryState": "HISTORY_STATE_UNSPECIFIED",
  "spaceThreadingState": "SPACE_THREADING_STATE_UNSPECIFIED",
  "spaceType": "SPACE_TYPE_UNSPECIFIED",
  "threaded": true,
  "type": "TYPE_UNSPECIFIED"
}
```

<h3 id="chatspacessetup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Space](#schemaspace)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/chat.spaces ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/chat.spaces ), Oauth2 ( Scopes: https://www.googleapis.com/auth/chat.spaces.create ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/chat.spaces.create )
</aside>

## chat.spaces.messages.attachments.get

<a id="opIdchat.spaces.messages.attachments.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/{name}`

Gets the metadata of a message attachment. The attachment data is fetched using the [media API](https://developers.google.com/chat/api/reference/rest/v1/media/download). For an example, see [Get a message attachment](https://developers.google.com/chat/api/guides/v1/media-and-attachments/get). Requires [app authentication](https://developers.google.com/chat/api/guides/auth/service-accounts).

<h3 id="chatspacesmessagesattachmentsget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. Resource name of the attachment, in the form `spaces/*/messages/*/attachments/*`.|
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
  "attachmentDataRef": {
    "attachmentUploadToken": "string",
    "resourceName": "string"
  },
  "contentName": "string",
  "contentType": "string",
  "downloadUri": "string",
  "driveDataRef": {
    "driveFileId": "string"
  },
  "name": "string",
  "source": "SOURCE_UNSPECIFIED",
  "thumbnailUri": "string"
}
```

<h3 id="chatspacesmessagesattachmentsget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Attachment](#schemaattachment)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/chat.bot ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/chat.bot ), Oauth2 ( Scopes: https://www.googleapis.com/auth/chat.messages ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/chat.messages ), Oauth2 ( Scopes: https://www.googleapis.com/auth/chat.messages.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/chat.messages.readonly )
</aside>

## chat.spaces.messages.update

<a id="opIdchat.spaces.messages.update"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "actionResponse": {
      "dialogAction": {
        "actionStatus": {
          "statusCode": "OK",
          "userFacingMessage": "string"
        },
        "dialog": {
          "body": {
            "cardActions": [
              {}
            ],
            "displayStyle": "DISPLAY_STYLE_UNSPECIFIED",
            "fixedFooter": {},
            "header": {
              "imageAltText": "string",
              "imageType": "SQUARE",
              "imageUrl": "string",
              "subtitle": "string",
              "title": "string"
            },
            "name": "string",
            "peekCardHeader": {
              "imageAltText": "string",
              "imageType": "SQUARE",
              "imageUrl": "string",
              "subtitle": "string",
              "title": "string"
            },
            "sectionDividerStyle": "DIVIDER_STYLE_UNSPECIFIED",
            "sections": [
              {}
            ]
          }
        }
      },
      "type": "TYPE_UNSPECIFIED",
      "updatedWidget": {
        "suggestions": {
          "items": [
            {
              "bottomText": "string",
              "selected": true,
              "startIconUri": "string",
              "text": "string",
              "value": "string"
            }
          ]
        },
        "widget": "string"
      },
      "url": "string"
    },
    "attachment": [
      {
        "attachmentDataRef": {
          "attachmentUploadToken": "string",
          "resourceName": "string"
        },
        "name": "string"
      }
    ],
    "cards": [
      {
        "cardActions": [
          {
            "actionLabel": "string",
            "onClick": {
              "action": {
                "actionMethodName": "string",
                "parameters": [
                  {
                    "key": "string",
                    "value": "string"
                  }
                ]
              },
              "openLink": {
                "url": "string"
              }
            }
          }
        ],
        "header": {
          "imageStyle": "IMAGE_STYLE_UNSPECIFIED",
          "imageUrl": "string",
          "subtitle": "string",
          "title": "string"
        },
        "name": "string",
        "sections": [
          {
            "header": "string",
            "widgets": [
              {
                "buttons": [
                  {
                    "imageButton": {
                      "icon": "ICON_UNSPECIFIED",
                      "iconUrl": "string",
                      "name": "string",
                      "onClick": {
                        "action": {
                          "actionMethodName": "string",
                          "parameters": [
                            {
                              "key": "string",
                              "value": "string"
                            }
                          ]
                        },
                        "openLink": {
                          "url": "string"
                        }
                      }
                    },
                    "textButton": {
                      "onClick": {
                        "action": {
                          "actionMethodName": "string",
                          "parameters": [
                            {
                              "key": "string",
                              "value": "string"
                            }
                          ]
                        },
                        "openLink": {
                          "url": "string"
                        }
                      },
                      "text": "string"
                    }
                  }
                ],
                "image": {
                  "aspectRatio": 0,
                  "imageUrl": "string",
                  "onClick": {
                    "action": {
                      "actionMethodName": "string",
                      "parameters": [
                        {
                          "key": "string",
                          "value": "string"
                        }
                      ]
                    },
                    "openLink": {
                      "url": "string"
                    }
                  }
                },
                "keyValue": {
                  "bottomLabel": "string",
                  "button": {
                    "imageButton": {
                      "icon": "ICON_UNSPECIFIED",
                      "iconUrl": "string",
                      "name": "string",
                      "onClick": {
                        "action": {
                          "actionMethodName": "string",
                          "parameters": [
                            {
                              "key": "string",
                              "value": "string"
                            }
                          ]
                        },
                        "openLink": {
                          "url": "string"
                        }
                      }
                    },
                    "textButton": {
                      "onClick": {
                        "action": {
                          "actionMethodName": "string",
                          "parameters": [
                            {
                              "key": "string",
                              "value": "string"
                            }
                          ]
                        },
                        "openLink": {
                          "url": "string"
                        }
                      },
                      "text": "string"
                    }
                  },
                  "content": "string",
                  "contentMultiline": true,
                  "icon": "ICON_UNSPECIFIED",
                  "iconUrl": "string",
                  "onClick": {
                    "action": {
                      "actionMethodName": "string",
                      "parameters": [
                        {
                          "key": "string",
                          "value": "string"
                        }
                      ]
                    },
                    "openLink": {
                      "url": "string"
                    }
                  },
                  "topLabel": "string"
                },
                "textParagraph": {
                  "text": "string"
                }
              }
            ]
          }
        ]
      }
    ],
    "cardsV2": [
      {
        "card": {
          "cardActions": [
            {}
          ],
          "displayStyle": "DISPLAY_STYLE_UNSPECIFIED",
          "fixedFooter": {},
          "header": {
            "imageAltText": "string",
            "imageType": "SQUARE",
            "imageUrl": "string",
            "subtitle": "string",
            "title": "string"
          },
          "name": "string",
          "peekCardHeader": {
            "imageAltText": "string",
            "imageType": "SQUARE",
            "imageUrl": "string",
            "subtitle": "string",
            "title": "string"
          },
          "sectionDividerStyle": "DIVIDER_STYLE_UNSPECIFIED",
          "sections": [
            {}
          ]
        },
        "cardId": "string"
      }
    ],
    "clientAssignedMessageId": "string",
    "createTime": "string",
    "fallbackText": "string",
    "name": "string",
    "privateMessageViewer": {
      "domainId": "string",
      "name": "string",
      "type": "TYPE_UNSPECIFIED"
    },
    "space": {
      "createTime": "string",
      "displayName": "string",
      "externalUserAllowed": true,
      "importMode": true,
      "name": "string",
      "singleUserBotDm": true,
      "spaceDetails": {
        "description": "string",
        "guidelines": "string"
      },
      "spaceHistoryState": "HISTORY_STATE_UNSPECIFIED",
      "spaceType": "SPACE_TYPE_UNSPECIFIED"
    },
    "text": "string",
    "thread": {
      "name": "string",
      "threadKey": "string"
    }
  }'
```

`PUT /v1/{name}`

Updates a message. There's a difference between the `patch` and `update` methods. The `patch` method uses a `patch` request while the `update` method uses a `put` request. We recommend using the `patch` method. For an example, see [Update a message](https://developers.google.com/chat/api/guides/v1/messages/update). Requires [authentication](https://developers.google.com/chat/api/guides/auth). Supports [app authentication](https://developers.google.com/chat/api/guides/auth/service-accounts) and [user authentication](https://developers.google.com/chat/api/guides/auth/users). When using app authentication, requests can only update messages created by the calling Chat app.

> Body parameter

```json
{
  "actionResponse": {
    "dialogAction": {
      "actionStatus": {
        "statusCode": "OK",
        "userFacingMessage": "string"
      },
      "dialog": {
        "body": {
          "cardActions": [
            {}
          ],
          "displayStyle": "DISPLAY_STYLE_UNSPECIFIED",
          "fixedFooter": {},
          "header": {
            "imageAltText": "string",
            "imageType": "SQUARE",
            "imageUrl": "string",
            "subtitle": "string",
            "title": "string"
          },
          "name": "string",
          "peekCardHeader": {
            "imageAltText": "string",
            "imageType": "SQUARE",
            "imageUrl": "string",
            "subtitle": "string",
            "title": "string"
          },
          "sectionDividerStyle": "DIVIDER_STYLE_UNSPECIFIED",
          "sections": [
            {}
          ]
        }
      }
    },
    "type": "TYPE_UNSPECIFIED",
    "updatedWidget": {
      "suggestions": {
        "items": [
          {
            "bottomText": "string",
            "selected": true,
            "startIconUri": "string",
            "text": "string",
            "value": "string"
          }
        ]
      },
      "widget": "string"
    },
    "url": "string"
  },
  "attachment": [
    {
      "attachmentDataRef": {
        "attachmentUploadToken": "string",
        "resourceName": "string"
      },
      "name": "string"
    }
  ],
  "cards": [
    {
      "cardActions": [
        {
          "actionLabel": "string",
          "onClick": {
            "action": {
              "actionMethodName": "string",
              "parameters": [
                {
                  "key": "string",
                  "value": "string"
                }
              ]
            },
            "openLink": {
              "url": "string"
            }
          }
        }
      ],
      "header": {
        "imageStyle": "IMAGE_STYLE_UNSPECIFIED",
        "imageUrl": "string",
        "subtitle": "string",
        "title": "string"
      },
      "name": "string",
      "sections": [
        {
          "header": "string",
          "widgets": [
            {
              "buttons": [
                {
                  "imageButton": {
                    "icon": "ICON_UNSPECIFIED",
                    "iconUrl": "string",
                    "name": "string",
                    "onClick": {
                      "action": {
                        "actionMethodName": "string",
                        "parameters": [
                          {
                            "key": "string",
                            "value": "string"
                          }
                        ]
                      },
                      "openLink": {
                        "url": "string"
                      }
                    }
                  },
                  "textButton": {
                    "onClick": {
                      "action": {
                        "actionMethodName": "string",
                        "parameters": [
                          {
                            "key": "string",
                            "value": "string"
                          }
                        ]
                      },
                      "openLink": {
                        "url": "string"
                      }
                    },
                    "text": "string"
                  }
                }
              ],
              "image": {
                "aspectRatio": 0,
                "imageUrl": "string",
                "onClick": {
                  "action": {
                    "actionMethodName": "string",
                    "parameters": [
                      {
                        "key": "string",
                        "value": "string"
                      }
                    ]
                  },
                  "openLink": {
                    "url": "string"
                  }
                }
              },
              "keyValue": {
                "bottomLabel": "string",
                "button": {
                  "imageButton": {
                    "icon": "ICON_UNSPECIFIED",
                    "iconUrl": "string",
                    "name": "string",
                    "onClick": {
                      "action": {
                        "actionMethodName": "string",
                        "parameters": [
                          {
                            "key": "string",
                            "value": "string"
                          }
                        ]
                      },
                      "openLink": {
                        "url": "string"
                      }
                    }
                  },
                  "textButton": {
                    "onClick": {
                      "action": {
                        "actionMethodName": "string",
                        "parameters": [
                          {
                            "key": "string",
                            "value": "string"
                          }
                        ]
                      },
                      "openLink": {
                        "url": "string"
                      }
                    },
                    "text": "string"
                  }
                },
                "content": "string",
                "contentMultiline": true,
                "icon": "ICON_UNSPECIFIED",
                "iconUrl": "string",
                "onClick": {
                  "action": {
                    "actionMethodName": "string",
                    "parameters": [
                      {
                        "key": "string",
                        "value": "string"
                      }
                    ]
                  },
                  "openLink": {
                    "url": "string"
                  }
                },
                "topLabel": "string"
              },
              "textParagraph": {
                "text": "string"
              }
            }
          ]
        }
      ]
    }
  ],
  "cardsV2": [
    {
      "card": {
        "cardActions": [
          {}
        ],
        "displayStyle": "DISPLAY_STYLE_UNSPECIFIED",
        "fixedFooter": {},
        "header": {
          "imageAltText": "string",
          "imageType": "SQUARE",
          "imageUrl": "string",
          "subtitle": "string",
          "title": "string"
        },
        "name": "string",
        "peekCardHeader": {
          "imageAltText": "string",
          "imageType": "SQUARE",
          "imageUrl": "string",
          "subtitle": "string",
          "title": "string"
        },
        "sectionDividerStyle": "DIVIDER_STYLE_UNSPECIFIED",
        "sections": [
          {}
        ]
      },
      "cardId": "string"
    }
  ],
  "clientAssignedMessageId": "string",
  "createTime": "string",
  "fallbackText": "string",
  "name": "string",
  "privateMessageViewer": {
    "domainId": "string",
    "name": "string",
    "type": "TYPE_UNSPECIFIED"
  },
  "space": {
    "createTime": "string",
    "displayName": "string",
    "externalUserAllowed": true,
    "importMode": true,
    "name": "string",
    "singleUserBotDm": true,
    "spaceDetails": {
      "description": "string",
      "guidelines": "string"
    },
    "spaceHistoryState": "HISTORY_STATE_UNSPECIFIED",
    "spaceType": "SPACE_TYPE_UNSPECIFIED"
  },
  "text": "string",
  "thread": {
    "name": "string",
    "threadKey": "string"
  }
}
```

<h3 id="chatspacesmessagesupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Resource name of the message. Format: `spaces/{space}/messages/{message}` Where `{space}` is the ID of the space where the message is posted and `{message}` is a system-assigned ID for the message. For example, `spaces/AAAAAAAAAAA/messages/BBBBBBBBBBB.BBBBBBBBBBB`. If you set a custom ID when you create a message, you can use this ID to specify the message in a request by replacing `{message}` with the value from the `clientAssignedMessageId` field. For example, `spaces/AAAAAAAAAAA/messages/client-custom-name`. For details, see [Name a message](https://developers.google.com/chat/api/guides/v1/messages/create#name_a_created_message).|
|allowMissing|query|boolean|false|Optional. If `true` and the message isn't found, a new message is created and `updateMask` is ignored. The specified message ID must be [client-assigned](https://developers.google.com/chat/api/guides/v1/messages/create#name_a_created_message) or the request fails.|
|updateMask|query|string|false|Required. The field paths to update. Separate multiple values with commas or use `*` to update all field paths. Currently supported field paths: - `text` - `attachment` - `cards` (Requires [app authentication](/chat/api/guides/auth/service-accounts).) - `cards_v2` (Requires [app authentication](/chat/api/guides/auth/service-accounts).) - Developer Preview: `accessory_widgets` (Requires [app authentication](/chat/api/guides/auth/service-accounts).)|
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
|body|body|[Message](#schemamessage)|false|none|
|» actionResponse|body|[ActionResponse](#schemaactionresponse)|false|Input only. Parameters that a Chat app can use to configure how its response is posted.|
|» attachment|body|[[Attachment](#schemaattachment)]|false|User-uploaded attachment.|
|» cards|body|[[Card](#schemacard)]|false|**Deprecated.** Deprecated: Use `cards_v2` instead. Rich, formatted, and interactive cards that you can use to display UI elements such as: formatted texts, buttons, and clickable images. Cards are normally displayed below the plain-text body of the message. `cards` and `cards_v2` can have a maximum size of 32 KB.|
|» cardsV2|body|[[CardWithId](#schemacardwithid)]|false|An array of [cards](https://developers.google.com/chat/api/reference/rest/v1/cards). Only Chat apps can create cards. If your Chat app [authenticates as a user](https://developers.google.com/chat/api/guides/auth/users), the messages can't contain cards. To learn about cards and how to create them, see [Design dynamic, interactive, and consistent UIs with cards](https://developers.google.com/chat/ui). [Card builder](https://addons.gsuite.google.com/uikit/builder)|
|» clientAssignedMessageId|body|string|false|Optional. A custom ID for the message. You can use field to identify a message, or to get, delete, or update a message. To set a custom ID, specify the [`messageId`](https://developers.google.com/chat/api/reference/rest/v1/spaces.messages/create#body.QUERY_PARAMETERS.message_id) field when you create the message. For details, see [Name a message](https://developers.google.com/chat/api/guides/v1/messages/create#name_a_created_message).|
|» createTime|body|string(google-datetime)|false|Optional. Immutable. For spaces created in Chat, the time at which the message was created. This field is output only, except when used in import mode spaces. For import mode spaces, set this field to the historical timestamp at which the message was created in the source in order to preserve the original creation time.|
|» fallbackText|body|string|false|A plain-text description of the message's cards, used when the actual cards can't be displayed—for example, mobile notifications.|
|» name|body|string|false|Resource name of the message. Format: `spaces/{space}/messages/{message}` Where `{space}` is the ID of the space where the message is posted and `{message}` is a system-assigned ID for the message. For example, `spaces/AAAAAAAAAAA/messages/BBBBBBBBBBB.BBBBBBBBBBB`. If you set a custom ID when you create a message, you can use this ID to specify the message in a request by replacing `{message}` with the value from the `clientAssignedMessageId` field. For example, `spaces/AAAAAAAAAAA/messages/client-custom-name`. For details, see [Name a message](https://developers.google.com/chat/api/guides/v1/messages/create#name_a_created_message).|
|» privateMessageViewer|body|[User](#schemauser)|false|Immutable. Input for creating a message, otherwise output only. The user that can view the message. When set, the message is private and only visible to the specified user and the Chat app. Link previews and attachments aren't supported for private messages. Only Chat apps can send private messages. If your Chat app [authenticates as a user](https://developers.google.com/chat/api/guides/auth/users) to send a message, the message can't be private and must omit this field. For details, see [Send private messages to Google Chat users](https://developers.google.com/chat/api/guides/v1/messages/private).|
|» space|body|[Space](#schemaspace)|false|If your Chat app [authenticates as a user](https://developers.google.com/chat/api/guides/auth/users), the output populates the [space](https://developers.google.com/chat/api/reference/rest/v1/spaces) `name`.|
|» text|body|string|false|Plain-text body of the message. The first link to an image, video, or web page generates a [preview chip](https://developers.google.com/chat/how-tos/preview-links). You can also [@mention a Google Chat user](https://developers.google.com/chat/format-messages#messages-@mention), or everyone in the space. To learn about creating text messages, see [Send a text message](https://developers.google.com/chat/api/guides/v1/messages/create#create-text-messages).|
|» thread|body|[Thread](#schemathread)|false|The thread the message belongs to. For example usage, see [Start or reply to a message thread](https://developers.google.com/chat/api/guides/v1/messages/create#create-message-thread).|

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
  "actionResponse": {
    "dialogAction": {
      "actionStatus": {
        "statusCode": "OK",
        "userFacingMessage": "string"
      },
      "dialog": {
        "body": {
          "cardActions": [
            {}
          ],
          "displayStyle": "DISPLAY_STYLE_UNSPECIFIED",
          "fixedFooter": {},
          "header": {
            "imageAltText": "string",
            "imageType": "SQUARE",
            "imageUrl": "string",
            "subtitle": "string",
            "title": "string"
          },
          "name": "string",
          "peekCardHeader": {
            "imageAltText": "string",
            "imageType": "SQUARE",
            "imageUrl": "string",
            "subtitle": "string",
            "title": "string"
          },
          "sectionDividerStyle": "DIVIDER_STYLE_UNSPECIFIED",
          "sections": [
            {}
          ]
        }
      }
    },
    "type": "TYPE_UNSPECIFIED",
    "updatedWidget": {
      "suggestions": {
        "items": [
          {
            "bottomText": "string",
            "selected": true,
            "startIconUri": "string",
            "text": "string",
            "value": "string"
          }
        ]
      },
      "widget": "string"
    },
    "url": "string"
  },
  "annotations": [
    {
      "length": 0,
      "slashCommand": {
        "bot": {
          "displayName": "string",
          "domainId": "string",
          "isAnonymous": true,
          "name": "string",
          "type": "TYPE_UNSPECIFIED"
        },
        "commandId": "string",
        "commandName": "string",
        "triggersDialog": true,
        "type": "TYPE_UNSPECIFIED"
      },
      "startIndex": 0,
      "type": "ANNOTATION_TYPE_UNSPECIFIED",
      "userMention": {
        "type": "TYPE_UNSPECIFIED",
        "user": {
          "displayName": "string",
          "domainId": "string",
          "isAnonymous": true,
          "name": "string",
          "type": "TYPE_UNSPECIFIED"
        }
      }
    }
  ],
  "argumentText": "string",
  "attachedGifs": [
    {
      "uri": "string"
    }
  ],
  "attachment": [
    {
      "attachmentDataRef": {
        "attachmentUploadToken": "string",
        "resourceName": "string"
      },
      "contentName": "string",
      "contentType": "string",
      "downloadUri": "string",
      "driveDataRef": {
        "driveFileId": "string"
      },
      "name": "string",
      "source": "SOURCE_UNSPECIFIED",
      "thumbnailUri": "string"
    }
  ],
  "cards": [
    {
      "cardActions": [
        {
          "actionLabel": "string",
          "onClick": {
            "action": {
              "actionMethodName": "string",
              "parameters": [
                {
                  "key": "string",
                  "value": "string"
                }
              ]
            },
            "openLink": {
              "url": "string"
            }
          }
        }
      ],
      "header": {
        "imageStyle": "IMAGE_STYLE_UNSPECIFIED",
        "imageUrl": "string",
        "subtitle": "string",
        "title": "string"
      },
      "name": "string",
      "sections": [
        {
          "header": "string",
          "widgets": [
            {
              "buttons": [
                {
                  "imageButton": {
                    "icon": "ICON_UNSPECIFIED",
                    "iconUrl": "string",
                    "name": "string",
                    "onClick": {
                      "action": {
                        "actionMethodName": "string",
                        "parameters": [
                          {
                            "key": "string",
                            "value": "string"
                          }
                        ]
                      },
                      "openLink": {
                        "url": "string"
                      }
                    }
                  },
                  "textButton": {
                    "onClick": {
                      "action": {
                        "actionMethodName": "string",
                        "parameters": [
                          {
                            "key": "string",
                            "value": "string"
                          }
                        ]
                      },
                      "openLink": {
                        "url": "string"
                      }
                    },
                    "text": "string"
                  }
                }
              ],
              "image": {
                "aspectRatio": 0,
                "imageUrl": "string",
                "onClick": {
                  "action": {
                    "actionMethodName": "string",
                    "parameters": [
                      {
                        "key": "string",
                        "value": "string"
                      }
                    ]
                  },
                  "openLink": {
                    "url": "string"
                  }
                }
              },
              "keyValue": {
                "bottomLabel": "string",
                "button": {
                  "imageButton": {
                    "icon": "ICON_UNSPECIFIED",
                    "iconUrl": "string",
                    "name": "string",
                    "onClick": {
                      "action": {
                        "actionMethodName": "string",
                        "parameters": [
                          {
                            "key": "string",
                            "value": "string"
                          }
                        ]
                      },
                      "openLink": {
                        "url": "string"
                      }
                    }
                  },
                  "textButton": {
                    "onClick": {
                      "action": {
                        "actionMethodName": "string",
                        "parameters": [
                          {
                            "key": "string",
                            "value": "string"
                          }
                        ]
                      },
                      "openLink": {
                        "url": "string"
                      }
                    },
                    "text": "string"
                  }
                },
                "content": "string",
                "contentMultiline": true,
                "icon": "ICON_UNSPECIFIED",
                "iconUrl": "string",
                "onClick": {
                  "action": {
                    "actionMethodName": "string",
                    "parameters": [
                      {
                        "key": "string",
                        "value": "string"
                      }
                    ]
                  },
                  "openLink": {
                    "url": "string"
                  }
                },
                "topLabel": "string"
              },
              "textParagraph": {
                "text": "string"
              }
            }
          ]
        }
      ]
    }
  ],
  "cardsV2": [
    {
      "card": {
        "cardActions": [
          {}
        ],
        "displayStyle": "DISPLAY_STYLE_UNSPECIFIED",
        "fixedFooter": {},
        "header": {
          "imageAltText": "string",
          "imageType": "SQUARE",
          "imageUrl": "string",
          "subtitle": "string",
          "title": "string"
        },
        "name": "string",
        "peekCardHeader": {
          "imageAltText": "string",
          "imageType": "SQUARE",
          "imageUrl": "string",
          "subtitle": "string",
          "title": "string"
        },
        "sectionDividerStyle": "DIVIDER_STYLE_UNSPECIFIED",
        "sections": [
          {}
        ]
      },
      "cardId": "string"
    }
  ],
  "clientAssignedMessageId": "string",
  "createTime": "string",
  "deleteTime": "string",
  "deletionMetadata": {
    "deletionType": "DELETION_TYPE_UNSPECIFIED"
  },
  "emojiReactionSummaries": [
    {
      "emoji": {
        "customEmoji": {
          "uid": "string"
        },
        "unicode": "string"
      },
      "reactionCount": 0
    }
  ],
  "fallbackText": "string",
  "formattedText": "string",
  "lastUpdateTime": "string",
  "matchedUrl": {
    "url": "string"
  },
  "name": "string",
  "privateMessageViewer": {
    "displayName": "string",
    "domainId": "string",
    "isAnonymous": true,
    "name": "string",
    "type": "TYPE_UNSPECIFIED"
  },
  "quotedMessageMetadata": {
    "lastUpdateTime": "string",
    "name": "string"
  },
  "sender": {
    "displayName": "string",
    "domainId": "string",
    "isAnonymous": true,
    "name": "string",
    "type": "TYPE_UNSPECIFIED"
  },
  "slashCommand": {
    "commandId": "string"
  },
  "space": {
    "adminInstalled": true,
    "createTime": "string",
    "displayName": "string",
    "externalUserAllowed": true,
    "importMode": true,
    "name": "string",
    "singleUserBotDm": true,
    "spaceDetails": {
      "description": "string",
      "guidelines": "string"
    },
    "spaceHistoryState": "HISTORY_STATE_UNSPECIFIED",
    "spaceThreadingState": "SPACE_THREADING_STATE_UNSPECIFIED",
    "spaceType": "SPACE_TYPE_UNSPECIFIED",
    "threaded": true,
    "type": "TYPE_UNSPECIFIED"
  },
  "text": "string",
  "thread": {
    "name": "string",
    "threadKey": "string"
  },
  "threadReply": true
}
```

<h3 id="chatspacesmessagesupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Message](#schemamessage)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/chat.bot ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/chat.bot ), Oauth2 ( Scopes: https://www.googleapis.com/auth/chat.import ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/chat.import ), Oauth2 ( Scopes: https://www.googleapis.com/auth/chat.messages ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/chat.messages )
</aside>

## chat.spaces.messages.reactions.delete

<a id="opIdchat.spaces.messages.reactions.delete"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /v1/{name}`

Deletes a reaction to a message. For an example, see [Delete a reaction](https://developers.google.com/chat/api/guides/v1/reactions/delete). Requires [user authentication](https://developers.google.com/chat/api/guides/auth/users).

<h3 id="chatspacesmessagesreactionsdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. Name of the reaction to delete. Format: `spaces/{space}/messages/{message}/reactions/{reaction}`|
|force|query|boolean|false|When `true`, deleting a message also deletes its threaded replies. When `false`, if a message has threaded replies, deletion fails. Only applies when [authenticating as a user](https://developers.google.com/chat/api/guides/auth/users). Has no effect when [authenticating as a Chat app] (https://developers.google.com/chat/api/guides/auth/service-accounts).|
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

<h3 id="chatspacesmessagesreactionsdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Empty](#schemaempty)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/chat.import ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/chat.import ), Oauth2 ( Scopes: https://www.googleapis.com/auth/chat.messages ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/chat.messages ), Oauth2 ( Scopes: https://www.googleapis.com/auth/chat.messages.reactions ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/chat.messages.reactions )
</aside>

## chat.spaces.messages.patch

<a id="opIdchat.spaces.messages.patch"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "actionResponse": {
      "dialogAction": {
        "actionStatus": {
          "statusCode": "OK",
          "userFacingMessage": "string"
        },
        "dialog": {
          "body": {
            "cardActions": [
              {}
            ],
            "displayStyle": "DISPLAY_STYLE_UNSPECIFIED",
            "fixedFooter": {},
            "header": {
              "imageAltText": "string",
              "imageType": "SQUARE",
              "imageUrl": "string",
              "subtitle": "string",
              "title": "string"
            },
            "name": "string",
            "peekCardHeader": {
              "imageAltText": "string",
              "imageType": "SQUARE",
              "imageUrl": "string",
              "subtitle": "string",
              "title": "string"
            },
            "sectionDividerStyle": "DIVIDER_STYLE_UNSPECIFIED",
            "sections": [
              {}
            ]
          }
        }
      },
      "type": "TYPE_UNSPECIFIED",
      "updatedWidget": {
        "suggestions": {
          "items": [
            {
              "bottomText": "string",
              "selected": true,
              "startIconUri": "string",
              "text": "string",
              "value": "string"
            }
          ]
        },
        "widget": "string"
      },
      "url": "string"
    },
    "attachment": [
      {
        "attachmentDataRef": {
          "attachmentUploadToken": "string",
          "resourceName": "string"
        },
        "name": "string"
      }
    ],
    "cards": [
      {
        "cardActions": [
          {
            "actionLabel": "string",
            "onClick": {
              "action": {
                "actionMethodName": "string",
                "parameters": [
                  {
                    "key": "string",
                    "value": "string"
                  }
                ]
              },
              "openLink": {
                "url": "string"
              }
            }
          }
        ],
        "header": {
          "imageStyle": "IMAGE_STYLE_UNSPECIFIED",
          "imageUrl": "string",
          "subtitle": "string",
          "title": "string"
        },
        "name": "string",
        "sections": [
          {
            "header": "string",
            "widgets": [
              {
                "buttons": [
                  {
                    "imageButton": {
                      "icon": "ICON_UNSPECIFIED",
                      "iconUrl": "string",
                      "name": "string",
                      "onClick": {
                        "action": {
                          "actionMethodName": "string",
                          "parameters": [
                            {
                              "key": "string",
                              "value": "string"
                            }
                          ]
                        },
                        "openLink": {
                          "url": "string"
                        }
                      }
                    },
                    "textButton": {
                      "onClick": {
                        "action": {
                          "actionMethodName": "string",
                          "parameters": [
                            {
                              "key": "string",
                              "value": "string"
                            }
                          ]
                        },
                        "openLink": {
                          "url": "string"
                        }
                      },
                      "text": "string"
                    }
                  }
                ],
                "image": {
                  "aspectRatio": 0,
                  "imageUrl": "string",
                  "onClick": {
                    "action": {
                      "actionMethodName": "string",
                      "parameters": [
                        {
                          "key": "string",
                          "value": "string"
                        }
                      ]
                    },
                    "openLink": {
                      "url": "string"
                    }
                  }
                },
                "keyValue": {
                  "bottomLabel": "string",
                  "button": {
                    "imageButton": {
                      "icon": "ICON_UNSPECIFIED",
                      "iconUrl": "string",
                      "name": "string",
                      "onClick": {
                        "action": {
                          "actionMethodName": "string",
                          "parameters": [
                            {
                              "key": "string",
                              "value": "string"
                            }
                          ]
                        },
                        "openLink": {
                          "url": "string"
                        }
                      }
                    },
                    "textButton": {
                      "onClick": {
                        "action": {
                          "actionMethodName": "string",
                          "parameters": [
                            {
                              "key": "string",
                              "value": "string"
                            }
                          ]
                        },
                        "openLink": {
                          "url": "string"
                        }
                      },
                      "text": "string"
                    }
                  },
                  "content": "string",
                  "contentMultiline": true,
                  "icon": "ICON_UNSPECIFIED",
                  "iconUrl": "string",
                  "onClick": {
                    "action": {
                      "actionMethodName": "string",
                      "parameters": [
                        {
                          "key": "string",
                          "value": "string"
                        }
                      ]
                    },
                    "openLink": {
                      "url": "string"
                    }
                  },
                  "topLabel": "string"
                },
                "textParagraph": {
                  "text": "string"
                }
              }
            ]
          }
        ]
      }
    ],
    "cardsV2": [
      {
        "card": {
          "cardActions": [
            {}
          ],
          "displayStyle": "DISPLAY_STYLE_UNSPECIFIED",
          "fixedFooter": {},
          "header": {
            "imageAltText": "string",
            "imageType": "SQUARE",
            "imageUrl": "string",
            "subtitle": "string",
            "title": "string"
          },
          "name": "string",
          "peekCardHeader": {
            "imageAltText": "string",
            "imageType": "SQUARE",
            "imageUrl": "string",
            "subtitle": "string",
            "title": "string"
          },
          "sectionDividerStyle": "DIVIDER_STYLE_UNSPECIFIED",
          "sections": [
            {}
          ]
        },
        "cardId": "string"
      }
    ],
    "clientAssignedMessageId": "string",
    "createTime": "string",
    "fallbackText": "string",
    "name": "string",
    "privateMessageViewer": {
      "domainId": "string",
      "name": "string",
      "type": "TYPE_UNSPECIFIED"
    },
    "space": {
      "createTime": "string",
      "displayName": "string",
      "externalUserAllowed": true,
      "importMode": true,
      "name": "string",
      "singleUserBotDm": true,
      "spaceDetails": {
        "description": "string",
        "guidelines": "string"
      },
      "spaceHistoryState": "HISTORY_STATE_UNSPECIFIED",
      "spaceType": "SPACE_TYPE_UNSPECIFIED"
    },
    "text": "string",
    "thread": {
      "name": "string",
      "threadKey": "string"
    }
  }'
```

`PATCH /v1/{name}`

Updates a message. There's a difference between the `patch` and `update` methods. The `patch` method uses a `patch` request while the `update` method uses a `put` request. We recommend using the `patch` method. For an example, see [Update a message](https://developers.google.com/chat/api/guides/v1/messages/update). Requires [authentication](https://developers.google.com/chat/api/guides/auth). Supports [app authentication](https://developers.google.com/chat/api/guides/auth/service-accounts) and [user authentication](https://developers.google.com/chat/api/guides/auth/users). When using app authentication, requests can only update messages created by the calling Chat app.

> Body parameter

```json
{
  "actionResponse": {
    "dialogAction": {
      "actionStatus": {
        "statusCode": "OK",
        "userFacingMessage": "string"
      },
      "dialog": {
        "body": {
          "cardActions": [
            {}
          ],
          "displayStyle": "DISPLAY_STYLE_UNSPECIFIED",
          "fixedFooter": {},
          "header": {
            "imageAltText": "string",
            "imageType": "SQUARE",
            "imageUrl": "string",
            "subtitle": "string",
            "title": "string"
          },
          "name": "string",
          "peekCardHeader": {
            "imageAltText": "string",
            "imageType": "SQUARE",
            "imageUrl": "string",
            "subtitle": "string",
            "title": "string"
          },
          "sectionDividerStyle": "DIVIDER_STYLE_UNSPECIFIED",
          "sections": [
            {}
          ]
        }
      }
    },
    "type": "TYPE_UNSPECIFIED",
    "updatedWidget": {
      "suggestions": {
        "items": [
          {
            "bottomText": "string",
            "selected": true,
            "startIconUri": "string",
            "text": "string",
            "value": "string"
          }
        ]
      },
      "widget": "string"
    },
    "url": "string"
  },
  "attachment": [
    {
      "attachmentDataRef": {
        "attachmentUploadToken": "string",
        "resourceName": "string"
      },
      "name": "string"
    }
  ],
  "cards": [
    {
      "cardActions": [
        {
          "actionLabel": "string",
          "onClick": {
            "action": {
              "actionMethodName": "string",
              "parameters": [
                {
                  "key": "string",
                  "value": "string"
                }
              ]
            },
            "openLink": {
              "url": "string"
            }
          }
        }
      ],
      "header": {
        "imageStyle": "IMAGE_STYLE_UNSPECIFIED",
        "imageUrl": "string",
        "subtitle": "string",
        "title": "string"
      },
      "name": "string",
      "sections": [
        {
          "header": "string",
          "widgets": [
            {
              "buttons": [
                {
                  "imageButton": {
                    "icon": "ICON_UNSPECIFIED",
                    "iconUrl": "string",
                    "name": "string",
                    "onClick": {
                      "action": {
                        "actionMethodName": "string",
                        "parameters": [
                          {
                            "key": "string",
                            "value": "string"
                          }
                        ]
                      },
                      "openLink": {
                        "url": "string"
                      }
                    }
                  },
                  "textButton": {
                    "onClick": {
                      "action": {
                        "actionMethodName": "string",
                        "parameters": [
                          {
                            "key": "string",
                            "value": "string"
                          }
                        ]
                      },
                      "openLink": {
                        "url": "string"
                      }
                    },
                    "text": "string"
                  }
                }
              ],
              "image": {
                "aspectRatio": 0,
                "imageUrl": "string",
                "onClick": {
                  "action": {
                    "actionMethodName": "string",
                    "parameters": [
                      {
                        "key": "string",
                        "value": "string"
                      }
                    ]
                  },
                  "openLink": {
                    "url": "string"
                  }
                }
              },
              "keyValue": {
                "bottomLabel": "string",
                "button": {
                  "imageButton": {
                    "icon": "ICON_UNSPECIFIED",
                    "iconUrl": "string",
                    "name": "string",
                    "onClick": {
                      "action": {
                        "actionMethodName": "string",
                        "parameters": [
                          {
                            "key": "string",
                            "value": "string"
                          }
                        ]
                      },
                      "openLink": {
                        "url": "string"
                      }
                    }
                  },
                  "textButton": {
                    "onClick": {
                      "action": {
                        "actionMethodName": "string",
                        "parameters": [
                          {
                            "key": "string",
                            "value": "string"
                          }
                        ]
                      },
                      "openLink": {
                        "url": "string"
                      }
                    },
                    "text": "string"
                  }
                },
                "content": "string",
                "contentMultiline": true,
                "icon": "ICON_UNSPECIFIED",
                "iconUrl": "string",
                "onClick": {
                  "action": {
                    "actionMethodName": "string",
                    "parameters": [
                      {
                        "key": "string",
                        "value": "string"
                      }
                    ]
                  },
                  "openLink": {
                    "url": "string"
                  }
                },
                "topLabel": "string"
              },
              "textParagraph": {
                "text": "string"
              }
            }
          ]
        }
      ]
    }
  ],
  "cardsV2": [
    {
      "card": {
        "cardActions": [
          {}
        ],
        "displayStyle": "DISPLAY_STYLE_UNSPECIFIED",
        "fixedFooter": {},
        "header": {
          "imageAltText": "string",
          "imageType": "SQUARE",
          "imageUrl": "string",
          "subtitle": "string",
          "title": "string"
        },
        "name": "string",
        "peekCardHeader": {
          "imageAltText": "string",
          "imageType": "SQUARE",
          "imageUrl": "string",
          "subtitle": "string",
          "title": "string"
        },
        "sectionDividerStyle": "DIVIDER_STYLE_UNSPECIFIED",
        "sections": [
          {}
        ]
      },
      "cardId": "string"
    }
  ],
  "clientAssignedMessageId": "string",
  "createTime": "string",
  "fallbackText": "string",
  "name": "string",
  "privateMessageViewer": {
    "domainId": "string",
    "name": "string",
    "type": "TYPE_UNSPECIFIED"
  },
  "space": {
    "createTime": "string",
    "displayName": "string",
    "externalUserAllowed": true,
    "importMode": true,
    "name": "string",
    "singleUserBotDm": true,
    "spaceDetails": {
      "description": "string",
      "guidelines": "string"
    },
    "spaceHistoryState": "HISTORY_STATE_UNSPECIFIED",
    "spaceType": "SPACE_TYPE_UNSPECIFIED"
  },
  "text": "string",
  "thread": {
    "name": "string",
    "threadKey": "string"
  }
}
```

<h3 id="chatspacesmessagespatch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Resource name of the message. Format: `spaces/{space}/messages/{message}` Where `{space}` is the ID of the space where the message is posted and `{message}` is a system-assigned ID for the message. For example, `spaces/AAAAAAAAAAA/messages/BBBBBBBBBBB.BBBBBBBBBBB`. If you set a custom ID when you create a message, you can use this ID to specify the message in a request by replacing `{message}` with the value from the `clientAssignedMessageId` field. For example, `spaces/AAAAAAAAAAA/messages/client-custom-name`. For details, see [Name a message](https://developers.google.com/chat/api/guides/v1/messages/create#name_a_created_message).|
|allowMissing|query|boolean|false|Optional. If `true` and the message isn't found, a new message is created and `updateMask` is ignored. The specified message ID must be [client-assigned](https://developers.google.com/chat/api/guides/v1/messages/create#name_a_created_message) or the request fails.|
|updateMask|query|string|false|Required. The field paths to update. Separate multiple values with commas or use `*` to update all field paths. Currently supported field paths: - `text` - `attachment` - `cards` (Requires [app authentication](/chat/api/guides/auth/service-accounts).) - `cards_v2` (Requires [app authentication](/chat/api/guides/auth/service-accounts).) - Developer Preview: `accessory_widgets` (Requires [app authentication](/chat/api/guides/auth/service-accounts).)|
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
|body|body|[Message](#schemamessage)|false|none|
|» actionResponse|body|[ActionResponse](#schemaactionresponse)|false|Input only. Parameters that a Chat app can use to configure how its response is posted.|
|» attachment|body|[[Attachment](#schemaattachment)]|false|User-uploaded attachment.|
|» cards|body|[[Card](#schemacard)]|false|**Deprecated.** Deprecated: Use `cards_v2` instead. Rich, formatted, and interactive cards that you can use to display UI elements such as: formatted texts, buttons, and clickable images. Cards are normally displayed below the plain-text body of the message. `cards` and `cards_v2` can have a maximum size of 32 KB.|
|» cardsV2|body|[[CardWithId](#schemacardwithid)]|false|An array of [cards](https://developers.google.com/chat/api/reference/rest/v1/cards). Only Chat apps can create cards. If your Chat app [authenticates as a user](https://developers.google.com/chat/api/guides/auth/users), the messages can't contain cards. To learn about cards and how to create them, see [Design dynamic, interactive, and consistent UIs with cards](https://developers.google.com/chat/ui). [Card builder](https://addons.gsuite.google.com/uikit/builder)|
|» clientAssignedMessageId|body|string|false|Optional. A custom ID for the message. You can use field to identify a message, or to get, delete, or update a message. To set a custom ID, specify the [`messageId`](https://developers.google.com/chat/api/reference/rest/v1/spaces.messages/create#body.QUERY_PARAMETERS.message_id) field when you create the message. For details, see [Name a message](https://developers.google.com/chat/api/guides/v1/messages/create#name_a_created_message).|
|» createTime|body|string(google-datetime)|false|Optional. Immutable. For spaces created in Chat, the time at which the message was created. This field is output only, except when used in import mode spaces. For import mode spaces, set this field to the historical timestamp at which the message was created in the source in order to preserve the original creation time.|
|» fallbackText|body|string|false|A plain-text description of the message's cards, used when the actual cards can't be displayed—for example, mobile notifications.|
|» name|body|string|false|Resource name of the message. Format: `spaces/{space}/messages/{message}` Where `{space}` is the ID of the space where the message is posted and `{message}` is a system-assigned ID for the message. For example, `spaces/AAAAAAAAAAA/messages/BBBBBBBBBBB.BBBBBBBBBBB`. If you set a custom ID when you create a message, you can use this ID to specify the message in a request by replacing `{message}` with the value from the `clientAssignedMessageId` field. For example, `spaces/AAAAAAAAAAA/messages/client-custom-name`. For details, see [Name a message](https://developers.google.com/chat/api/guides/v1/messages/create#name_a_created_message).|
|» privateMessageViewer|body|[User](#schemauser)|false|Immutable. Input for creating a message, otherwise output only. The user that can view the message. When set, the message is private and only visible to the specified user and the Chat app. Link previews and attachments aren't supported for private messages. Only Chat apps can send private messages. If your Chat app [authenticates as a user](https://developers.google.com/chat/api/guides/auth/users) to send a message, the message can't be private and must omit this field. For details, see [Send private messages to Google Chat users](https://developers.google.com/chat/api/guides/v1/messages/private).|
|» space|body|[Space](#schemaspace)|false|If your Chat app [authenticates as a user](https://developers.google.com/chat/api/guides/auth/users), the output populates the [space](https://developers.google.com/chat/api/reference/rest/v1/spaces) `name`.|
|» text|body|string|false|Plain-text body of the message. The first link to an image, video, or web page generates a [preview chip](https://developers.google.com/chat/how-tos/preview-links). You can also [@mention a Google Chat user](https://developers.google.com/chat/format-messages#messages-@mention), or everyone in the space. To learn about creating text messages, see [Send a text message](https://developers.google.com/chat/api/guides/v1/messages/create#create-text-messages).|
|» thread|body|[Thread](#schemathread)|false|The thread the message belongs to. For example usage, see [Start or reply to a message thread](https://developers.google.com/chat/api/guides/v1/messages/create#create-message-thread).|

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
  "actionResponse": {
    "dialogAction": {
      "actionStatus": {
        "statusCode": "OK",
        "userFacingMessage": "string"
      },
      "dialog": {
        "body": {
          "cardActions": [
            {}
          ],
          "displayStyle": "DISPLAY_STYLE_UNSPECIFIED",
          "fixedFooter": {},
          "header": {
            "imageAltText": "string",
            "imageType": "SQUARE",
            "imageUrl": "string",
            "subtitle": "string",
            "title": "string"
          },
          "name": "string",
          "peekCardHeader": {
            "imageAltText": "string",
            "imageType": "SQUARE",
            "imageUrl": "string",
            "subtitle": "string",
            "title": "string"
          },
          "sectionDividerStyle": "DIVIDER_STYLE_UNSPECIFIED",
          "sections": [
            {}
          ]
        }
      }
    },
    "type": "TYPE_UNSPECIFIED",
    "updatedWidget": {
      "suggestions": {
        "items": [
          {
            "bottomText": "string",
            "selected": true,
            "startIconUri": "string",
            "text": "string",
            "value": "string"
          }
        ]
      },
      "widget": "string"
    },
    "url": "string"
  },
  "annotations": [
    {
      "length": 0,
      "slashCommand": {
        "bot": {
          "displayName": "string",
          "domainId": "string",
          "isAnonymous": true,
          "name": "string",
          "type": "TYPE_UNSPECIFIED"
        },
        "commandId": "string",
        "commandName": "string",
        "triggersDialog": true,
        "type": "TYPE_UNSPECIFIED"
      },
      "startIndex": 0,
      "type": "ANNOTATION_TYPE_UNSPECIFIED",
      "userMention": {
        "type": "TYPE_UNSPECIFIED",
        "user": {
          "displayName": "string",
          "domainId": "string",
          "isAnonymous": true,
          "name": "string",
          "type": "TYPE_UNSPECIFIED"
        }
      }
    }
  ],
  "argumentText": "string",
  "attachedGifs": [
    {
      "uri": "string"
    }
  ],
  "attachment": [
    {
      "attachmentDataRef": {
        "attachmentUploadToken": "string",
        "resourceName": "string"
      },
      "contentName": "string",
      "contentType": "string",
      "downloadUri": "string",
      "driveDataRef": {
        "driveFileId": "string"
      },
      "name": "string",
      "source": "SOURCE_UNSPECIFIED",
      "thumbnailUri": "string"
    }
  ],
  "cards": [
    {
      "cardActions": [
        {
          "actionLabel": "string",
          "onClick": {
            "action": {
              "actionMethodName": "string",
              "parameters": [
                {
                  "key": "string",
                  "value": "string"
                }
              ]
            },
            "openLink": {
              "url": "string"
            }
          }
        }
      ],
      "header": {
        "imageStyle": "IMAGE_STYLE_UNSPECIFIED",
        "imageUrl": "string",
        "subtitle": "string",
        "title": "string"
      },
      "name": "string",
      "sections": [
        {
          "header": "string",
          "widgets": [
            {
              "buttons": [
                {
                  "imageButton": {
                    "icon": "ICON_UNSPECIFIED",
                    "iconUrl": "string",
                    "name": "string",
                    "onClick": {
                      "action": {
                        "actionMethodName": "string",
                        "parameters": [
                          {
                            "key": "string",
                            "value": "string"
                          }
                        ]
                      },
                      "openLink": {
                        "url": "string"
                      }
                    }
                  },
                  "textButton": {
                    "onClick": {
                      "action": {
                        "actionMethodName": "string",
                        "parameters": [
                          {
                            "key": "string",
                            "value": "string"
                          }
                        ]
                      },
                      "openLink": {
                        "url": "string"
                      }
                    },
                    "text": "string"
                  }
                }
              ],
              "image": {
                "aspectRatio": 0,
                "imageUrl": "string",
                "onClick": {
                  "action": {
                    "actionMethodName": "string",
                    "parameters": [
                      {
                        "key": "string",
                        "value": "string"
                      }
                    ]
                  },
                  "openLink": {
                    "url": "string"
                  }
                }
              },
              "keyValue": {
                "bottomLabel": "string",
                "button": {
                  "imageButton": {
                    "icon": "ICON_UNSPECIFIED",
                    "iconUrl": "string",
                    "name": "string",
                    "onClick": {
                      "action": {
                        "actionMethodName": "string",
                        "parameters": [
                          {
                            "key": "string",
                            "value": "string"
                          }
                        ]
                      },
                      "openLink": {
                        "url": "string"
                      }
                    }
                  },
                  "textButton": {
                    "onClick": {
                      "action": {
                        "actionMethodName": "string",
                        "parameters": [
                          {
                            "key": "string",
                            "value": "string"
                          }
                        ]
                      },
                      "openLink": {
                        "url": "string"
                      }
                    },
                    "text": "string"
                  }
                },
                "content": "string",
                "contentMultiline": true,
                "icon": "ICON_UNSPECIFIED",
                "iconUrl": "string",
                "onClick": {
                  "action": {
                    "actionMethodName": "string",
                    "parameters": [
                      {
                        "key": "string",
                        "value": "string"
                      }
                    ]
                  },
                  "openLink": {
                    "url": "string"
                  }
                },
                "topLabel": "string"
              },
              "textParagraph": {
                "text": "string"
              }
            }
          ]
        }
      ]
    }
  ],
  "cardsV2": [
    {
      "card": {
        "cardActions": [
          {}
        ],
        "displayStyle": "DISPLAY_STYLE_UNSPECIFIED",
        "fixedFooter": {},
        "header": {
          "imageAltText": "string",
          "imageType": "SQUARE",
          "imageUrl": "string",
          "subtitle": "string",
          "title": "string"
        },
        "name": "string",
        "peekCardHeader": {
          "imageAltText": "string",
          "imageType": "SQUARE",
          "imageUrl": "string",
          "subtitle": "string",
          "title": "string"
        },
        "sectionDividerStyle": "DIVIDER_STYLE_UNSPECIFIED",
        "sections": [
          {}
        ]
      },
      "cardId": "string"
    }
  ],
  "clientAssignedMessageId": "string",
  "createTime": "string",
  "deleteTime": "string",
  "deletionMetadata": {
    "deletionType": "DELETION_TYPE_UNSPECIFIED"
  },
  "emojiReactionSummaries": [
    {
      "emoji": {
        "customEmoji": {
          "uid": "string"
        },
        "unicode": "string"
      },
      "reactionCount": 0
    }
  ],
  "fallbackText": "string",
  "formattedText": "string",
  "lastUpdateTime": "string",
  "matchedUrl": {
    "url": "string"
  },
  "name": "string",
  "privateMessageViewer": {
    "displayName": "string",
    "domainId": "string",
    "isAnonymous": true,
    "name": "string",
    "type": "TYPE_UNSPECIFIED"
  },
  "quotedMessageMetadata": {
    "lastUpdateTime": "string",
    "name": "string"
  },
  "sender": {
    "displayName": "string",
    "domainId": "string",
    "isAnonymous": true,
    "name": "string",
    "type": "TYPE_UNSPECIFIED"
  },
  "slashCommand": {
    "commandId": "string"
  },
  "space": {
    "adminInstalled": true,
    "createTime": "string",
    "displayName": "string",
    "externalUserAllowed": true,
    "importMode": true,
    "name": "string",
    "singleUserBotDm": true,
    "spaceDetails": {
      "description": "string",
      "guidelines": "string"
    },
    "spaceHistoryState": "HISTORY_STATE_UNSPECIFIED",
    "spaceThreadingState": "SPACE_THREADING_STATE_UNSPECIFIED",
    "spaceType": "SPACE_TYPE_UNSPECIFIED",
    "threaded": true,
    "type": "TYPE_UNSPECIFIED"
  },
  "text": "string",
  "thread": {
    "name": "string",
    "threadKey": "string"
  },
  "threadReply": true
}
```

<h3 id="chatspacesmessagespatch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Message](#schemamessage)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/chat.bot ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/chat.bot ), Oauth2 ( Scopes: https://www.googleapis.com/auth/chat.import ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/chat.import ), Oauth2 ( Scopes: https://www.googleapis.com/auth/chat.messages ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/chat.messages )
</aside>

## chat.spaces.completeImport

<a id="opIdchat.spaces.completeImport"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string:completeImport \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{}'
```

`POST /v1/{name}:completeImport`

Completes the [import process](https://developers.google.com/chat/api/guides/import-data) for the specified space and makes it visible to users. Requires app authentication and domain-wide delegation. For more information, see [Authorize Google Chat apps to import data](https://developers.google.com/chat/api/guides/authorize-import).

> Body parameter

```json
{}
```

<h3 id="chatspacescompleteimport-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. Resource name of the import mode space. Format: `spaces/{space}`|
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
|body|body|[CompleteImportSpaceRequest](#schemacompleteimportspacerequest)|false|none|

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
  "space": {
    "adminInstalled": true,
    "createTime": "string",
    "displayName": "string",
    "externalUserAllowed": true,
    "importMode": true,
    "name": "string",
    "singleUserBotDm": true,
    "spaceDetails": {
      "description": "string",
      "guidelines": "string"
    },
    "spaceHistoryState": "HISTORY_STATE_UNSPECIFIED",
    "spaceThreadingState": "SPACE_THREADING_STATE_UNSPECIFIED",
    "spaceType": "SPACE_TYPE_UNSPECIFIED",
    "threaded": true,
    "type": "TYPE_UNSPECIFIED"
  }
}
```

<h3 id="chatspacescompleteimport-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[CompleteImportSpaceResponse](#schemacompleteimportspaceresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/chat.import ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/chat.import )
</aside>

## chat.spaces.members.list

<a id="opIdchat.spaces.members.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/members \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/{parent}/members`

Lists memberships in a space. For an example, see [List memberships](https://developers.google.com/chat/api/guides/v1/members/list). Listing memberships with [app authentication](https://developers.google.com/chat/api/guides/auth/service-accounts) lists memberships in spaces that the Chat app has access to, but excludes Chat app memberships, including its own. Listing memberships with [User authentication](https://developers.google.com/chat/api/guides/auth/users) lists memberships in spaces that the authenticated user has access to. Requires [authentication](https://developers.google.com/chat/api/guides/auth). Supports [app authentication](https://developers.google.com/chat/api/guides/auth/service-accounts) and [user authentication](https://developers.google.com/chat/api/guides/auth/users).

<h3 id="chatspacesmemberslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The resource name of the space for which to fetch a membership list. Format: spaces/{space}|
|filter|query|string|false|Optional. A query filter. You can filter memberships by a member's role ([`role`](https://developers.google.com/chat/api/reference/rest/v1/spaces.members#membershiprole)) and type ([`member.type`](https://developers.google.com/chat/api/reference/rest/v1/User#type)). To filter by role, set `role` to `ROLE_MEMBER` or `ROLE_MANAGER`. To filter by type, set `member.type` to `HUMAN` or `BOT`. To filter by both role and type, use the `AND` operator. To filter by either role or type, use the `OR` operator. For example, the following queries are valid: ``` role = "ROLE_MANAGER" OR role = "ROLE_MEMBER" member.type = "HUMAN" AND role = "ROLE_MANAGER" ``` The following queries are invalid: ``` member.type = "HUMAN" AND member.type = "BOT" role = "ROLE_MANAGER" AND role = "ROLE_MEMBER" ``` Invalid queries are rejected by the server with an `INVALID_ARGUMENT` error.|
|pageSize|query|integer|false|Optional. The maximum number of memberships to return. The service might return fewer than this value. If unspecified, at most 100 memberships are returned. The maximum value is 1,000. If you use a value more than 1,000, it's automatically changed to 1,000. Negative values return an `INVALID_ARGUMENT` error.|
|pageToken|query|string|false|Optional. A page token, received from a previous call to list memberships. Provide this parameter to retrieve the subsequent page. When paginating, all other parameters provided should match the call that provided the page token. Passing different values to the other parameters might lead to unexpected results.|
|showGroups|query|boolean|false|Optional. When `true`, also returns memberships associated with a Google Group, in addition to other types of memberships. If a filter is set, Google Group memberships that don't match the filter criteria aren't returned.|
|showInvited|query|boolean|false|Optional. When `true`, also returns memberships associated with invited members, in addition to other types of memberships. If a filter is set, invited memberships that don't match the filter criteria aren't returned. Currently requires [user authentication](https://developers.google.com/chat/api/guides/auth/users).|
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
  "memberships": [
    {
      "createTime": "string",
      "deleteTime": "string",
      "groupMember": {
        "name": "string"
      },
      "member": {
        "displayName": "string",
        "domainId": "string",
        "isAnonymous": true,
        "name": "string",
        "type": "TYPE_UNSPECIFIED"
      },
      "name": "string",
      "role": "MEMBERSHIP_ROLE_UNSPECIFIED",
      "state": "MEMBERSHIP_STATE_UNSPECIFIED"
    }
  ],
  "nextPageToken": "string"
}
```

<h3 id="chatspacesmemberslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListMembershipsResponse](#schemalistmembershipsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/chat.bot ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/chat.bot ), Oauth2 ( Scopes: https://www.googleapis.com/auth/chat.import ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/chat.import ), Oauth2 ( Scopes: https://www.googleapis.com/auth/chat.memberships ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/chat.memberships ), Oauth2 ( Scopes: https://www.googleapis.com/auth/chat.memberships.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/chat.memberships.readonly )
</aside>

## chat.spaces.members.create

<a id="opIdchat.spaces.members.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/members \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "createTime": "string",
    "deleteTime": "string",
    "groupMember": {
      "name": "string"
    },
    "member": {
      "domainId": "string",
      "name": "string",
      "type": "TYPE_UNSPECIFIED"
    },
    "name": "string",
    "role": "MEMBERSHIP_ROLE_UNSPECIFIED"
  }'
```

`POST /v1/{parent}/members`

Creates a human membership or app membership for the calling app. Creating memberships for other apps isn't supported. For an example, see [ Create a membership](https://developers.google.com/chat/api/guides/v1/members/create). When creating a membership, if the specified member has their auto-accept policy turned off, then they're invited, and must accept the space invitation before joining. Otherwise, creating a membership adds the member directly to the specified space. Requires [user authentication](https://developers.google.com/chat/api/guides/auth/users). To specify the member to add, set the `membership.member.name` in the `CreateMembershipRequest`: - To add the calling app to a space or a direct message between two human users, use `users/app`. Unable to add other apps to the space. - To add a human user, use `users/{user}`, where `{user}` can be the email address for the user. For users in the same Workspace organization `{user}` can also be the `id` for the person from the People API, or the `id` for the user in the Directory API. For example, if the People API Person profile ID for `user@example.com` is `123456789`, you can add the user to the space by setting the `membership.member.name` to `users/user@example.com` or `users/123456789`.

> Body parameter

```json
{
  "createTime": "string",
  "deleteTime": "string",
  "groupMember": {
    "name": "string"
  },
  "member": {
    "domainId": "string",
    "name": "string",
    "type": "TYPE_UNSPECIFIED"
  },
  "name": "string",
  "role": "MEMBERSHIP_ROLE_UNSPECIFIED"
}
```

<h3 id="chatspacesmemberscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The resource name of the space for which to create the membership. Format: spaces/{space}|
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
|body|body|[Membership](#schemamembership)|false|none|
|» createTime|body|string(google-datetime)|false|Optional. Immutable. The creation time of the membership, such as when a member joined or was invited to join a space. This field is output only, except when used to import historical memberships in import mode spaces.|
|» deleteTime|body|string(google-datetime)|false|Optional. Immutable. The deletion time of the membership, such as when a member left or was removed from a space. This field is output only, except when used to import historical memberships in import mode spaces.|
|» groupMember|body|[Group](#schemagroup)|false|The Google Group the membership corresponds to. Only supports read operations. Other operations, like creating or updating a membership, aren't currently supported.|
|» member|body|[User](#schemauser)|false|The Google Chat user or app the membership corresponds to. If your Chat app [authenticates as a user](https://developers.google.com/chat/api/guides/auth/users), the output populates the [user](https://developers.google.com/chat/api/reference/rest/v1/User) `name` and `type`.|
|» name|body|string|false|Resource name of the membership, assigned by the server. Format: `spaces/{space}/members/{member}`|
|» role|body|string|false|Optional. User's role within a Chat space, which determines their permitted actions in the space. [Developer Preview](https://developers.google.com/workspace/preview): This field can only be used as input in `UpdateMembership`.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|
|» role|MEMBERSHIP_ROLE_UNSPECIFIED|
|» role|ROLE_MEMBER|
|» role|ROLE_MANAGER|

> Example responses

> 200 Response

```json
{
  "createTime": "string",
  "deleteTime": "string",
  "groupMember": {
    "name": "string"
  },
  "member": {
    "displayName": "string",
    "domainId": "string",
    "isAnonymous": true,
    "name": "string",
    "type": "TYPE_UNSPECIFIED"
  },
  "name": "string",
  "role": "MEMBERSHIP_ROLE_UNSPECIFIED",
  "state": "MEMBERSHIP_STATE_UNSPECIFIED"
}
```

<h3 id="chatspacesmemberscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Membership](#schemamembership)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/chat.import ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/chat.import ), Oauth2 ( Scopes: https://www.googleapis.com/auth/chat.memberships ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/chat.memberships ), Oauth2 ( Scopes: https://www.googleapis.com/auth/chat.memberships.app ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/chat.memberships.app )
</aside>

## chat.spaces.messages.list

<a id="opIdchat.spaces.messages.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/messages \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/{parent}/messages`

Lists messages in a space that the caller is a member of, including messages from blocked members and spaces. For an example, see [List messages](/chat/api/guides/v1/messages/list). Requires [user authentication](https://developers.google.com/chat/api/guides/auth/users).

<h3 id="chatspacesmessageslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The resource name of the space to list messages from. Format: `spaces/{space}`|
|filter|query|string|false|A query filter. You can filter messages by date (`create_time`) and thread (`thread.name`). To filter messages by the date they were created, specify the `create_time` with a timestamp in [RFC-3339](https://www.rfc-editor.org/rfc/rfc3339) format and double quotation marks. For example, `"2023-04-21T11:30:00-04:00"`. You can use the greater than operator `>` to list messages that were created after a timestamp, or the less than operator `<` to list messages that were created before a timestamp. To filter messages within a time interval, use the `AND` operator between two timestamps. To filter by thread, specify the `thread.name`, formatted as `spaces/{space}/threads/{thread}`. You can only specify one `thread.name` per query. To filter by both thread and date, use the `AND` operator in your query. For example, the following queries are valid: ``` create_time > "2012-04-21T11:30:00-04:00" create_time > "2012-04-21T11:30:00-04:00" AND thread.name = spaces/AAAAAAAAAAA/threads/123 create_time > "2012-04-21T11:30:00+00:00" AND create_time < "2013-01-01T00:00:00+00:00" AND thread.name = spaces/AAAAAAAAAAA/threads/123 thread.name = spaces/AAAAAAAAAAA/threads/123 ``` Invalid queries are rejected by the server with an `INVALID_ARGUMENT` error.|
|orderBy|query|string|false|Optional, if resuming from a previous query. How the list of messages is ordered. Specify a value to order by an ordering operation. Valid ordering operation values are as follows: - `ASC` for ascending. - `DESC` for descending. The default ordering is `create_time ASC`.|
|pageSize|query|integer|false|The maximum number of messages returned. The service might return fewer messages than this value. If unspecified, at most 25 are returned. The maximum value is 1,000. If you use a value more than 1,000, it's automatically changed to 1,000. Negative values return an `INVALID_ARGUMENT` error.|
|pageToken|query|string|false|Optional, if resuming from a previous query. A page token received from a previous list messages call. Provide this parameter to retrieve the subsequent page. When paginating, all other parameters provided should match the call that provided the page token. Passing different values to the other parameters might lead to unexpected results.|
|showDeleted|query|boolean|false|Whether to include deleted messages. Deleted messages include deleted time and metadata about their deletion, but message content is unavailable.|
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
  "messages": [
    {
      "actionResponse": {
        "dialogAction": {
          "actionStatus": {
            "statusCode": "OK",
            "userFacingMessage": "string"
          },
          "dialog": {
            "body": {
              "cardActions": [
                {}
              ],
              "displayStyle": "DISPLAY_STYLE_UNSPECIFIED",
              "fixedFooter": {},
              "header": {
                "imageAltText": "string",
                "imageType": "SQUARE",
                "imageUrl": "string",
                "subtitle": "string",
                "title": "string"
              },
              "name": "string",
              "peekCardHeader": {
                "imageAltText": "string",
                "imageType": "SQUARE",
                "imageUrl": "string",
                "subtitle": "string",
                "title": "string"
              },
              "sectionDividerStyle": "DIVIDER_STYLE_UNSPECIFIED",
              "sections": [
                {}
              ]
            }
          }
        },
        "type": "TYPE_UNSPECIFIED",
        "updatedWidget": {
          "suggestions": {
            "items": [
              {
                "bottomText": "string",
                "selected": true,
                "startIconUri": "string",
                "text": "string",
                "value": "string"
              }
            ]
          },
          "widget": "string"
        },
        "url": "string"
      },
      "annotations": [
        {
          "length": 0,
          "slashCommand": {
            "bot": {
              "displayName": "string",
              "domainId": "string",
              "isAnonymous": true,
              "name": "string",
              "type": "TYPE_UNSPECIFIED"
            },
            "commandId": "string",
            "commandName": "string",
            "triggersDialog": true,
            "type": "TYPE_UNSPECIFIED"
          },
          "startIndex": 0,
          "type": "ANNOTATION_TYPE_UNSPECIFIED",
          "userMention": {
            "type": "TYPE_UNSPECIFIED",
            "user": {
              "displayName": "string",
              "domainId": "string",
              "isAnonymous": true,
              "name": "string",
              "type": "TYPE_UNSPECIFIED"
            }
          }
        }
      ],
      "argumentText": "string",
      "attachedGifs": [
        {
          "uri": "string"
        }
      ],
      "attachment": [
        {
          "attachmentDataRef": {
            "attachmentUploadToken": "string",
            "resourceName": "string"
          },
          "contentName": "string",
          "contentType": "string",
          "downloadUri": "string",
          "driveDataRef": {
            "driveFileId": "string"
          },
          "name": "string",
          "source": "SOURCE_UNSPECIFIED",
          "thumbnailUri": "string"
        }
      ],
      "cards": [
        {
          "cardActions": [
            {
              "actionLabel": "string",
              "onClick": {
                "action": {
                  "actionMethodName": "string",
                  "parameters": [
                    {
                      "key": "string",
                      "value": "string"
                    }
                  ]
                },
                "openLink": {
                  "url": "string"
                }
              }
            }
          ],
          "header": {
            "imageStyle": "IMAGE_STYLE_UNSPECIFIED",
            "imageUrl": "string",
            "subtitle": "string",
            "title": "string"
          },
          "name": "string",
          "sections": [
            {
              "header": "string",
              "widgets": [
                {
                  "buttons": [
                    {
                      "imageButton": {
                        "icon": "ICON_UNSPECIFIED",
                        "iconUrl": "string",
                        "name": "string",
                        "onClick": {
                          "action": {
                            "actionMethodName": "string",
                            "parameters": [
                              {
                                "key": "string",
                                "value": "string"
                              }
                            ]
                          },
                          "openLink": {
                            "url": "string"
                          }
                        }
                      },
                      "textButton": {
                        "onClick": {
                          "action": {
                            "actionMethodName": "string",
                            "parameters": [
                              {
                                "key": "string",
                                "value": "string"
                              }
                            ]
                          },
                          "openLink": {
                            "url": "string"
                          }
                        },
                        "text": "string"
                      }
                    }
                  ],
                  "image": {
                    "aspectRatio": 0,
                    "imageUrl": "string",
                    "onClick": {
                      "action": {
                        "actionMethodName": "string",
                        "parameters": [
                          {
                            "key": "string",
                            "value": "string"
                          }
                        ]
                      },
                      "openLink": {
                        "url": "string"
                      }
                    }
                  },
                  "keyValue": {
                    "bottomLabel": "string",
                    "button": {
                      "imageButton": {
                        "icon": "ICON_UNSPECIFIED",
                        "iconUrl": "string",
                        "name": "string",
                        "onClick": {
                          "action": {
                            "actionMethodName": "string",
                            "parameters": [
                              {
                                "key": "string",
                                "value": "string"
                              }
                            ]
                          },
                          "openLink": {
                            "url": "string"
                          }
                        }
                      },
                      "textButton": {
                        "onClick": {
                          "action": {
                            "actionMethodName": "string",
                            "parameters": [
                              {
                                "key": "string",
                                "value": "string"
                              }
                            ]
                          },
                          "openLink": {
                            "url": "string"
                          }
                        },
                        "text": "string"
                      }
                    },
                    "content": "string",
                    "contentMultiline": true,
                    "icon": "ICON_UNSPECIFIED",
                    "iconUrl": "string",
                    "onClick": {
                      "action": {
                        "actionMethodName": "string",
                        "parameters": [
                          {
                            "key": "string",
                            "value": "string"
                          }
                        ]
                      },
                      "openLink": {
                        "url": "string"
                      }
                    },
                    "topLabel": "string"
                  },
                  "textParagraph": {
                    "text": "string"
                  }
                }
              ]
            }
          ]
        }
      ],
      "cardsV2": [
        {
          "card": {
            "cardActions": [
              {}
            ],
            "displayStyle": "DISPLAY_STYLE_UNSPECIFIED",
            "fixedFooter": {},
            "header": {
              "imageAltText": "string",
              "imageType": "SQUARE",
              "imageUrl": "string",
              "subtitle": "string",
              "title": "string"
            },
            "name": "string",
            "peekCardHeader": {
              "imageAltText": "string",
              "imageType": "SQUARE",
              "imageUrl": "string",
              "subtitle": "string",
              "title": "string"
            },
            "sectionDividerStyle": "DIVIDER_STYLE_UNSPECIFIED",
            "sections": [
              {}
            ]
          },
          "cardId": "string"
        }
      ],
      "clientAssignedMessageId": "string",
      "createTime": "string",
      "deleteTime": "string",
      "deletionMetadata": {
        "deletionType": "DELETION_TYPE_UNSPECIFIED"
      },
      "emojiReactionSummaries": [
        {
          "emoji": {
            "customEmoji": {
              "uid": "string"
            },
            "unicode": "string"
          },
          "reactionCount": 0
        }
      ],
      "fallbackText": "string",
      "formattedText": "string",
      "lastUpdateTime": "string",
      "matchedUrl": {
        "url": "string"
      },
      "name": "string",
      "privateMessageViewer": {
        "displayName": "string",
        "domainId": "string",
        "isAnonymous": true,
        "name": "string",
        "type": "TYPE_UNSPECIFIED"
      },
      "quotedMessageMetadata": {
        "lastUpdateTime": "string",
        "name": "string"
      },
      "sender": {
        "displayName": "string",
        "domainId": "string",
        "isAnonymous": true,
        "name": "string",
        "type": "TYPE_UNSPECIFIED"
      },
      "slashCommand": {
        "commandId": "string"
      },
      "space": {
        "adminInstalled": true,
        "createTime": "string",
        "displayName": "string",
        "externalUserAllowed": true,
        "importMode": true,
        "name": "string",
        "singleUserBotDm": true,
        "spaceDetails": {
          "description": "string",
          "guidelines": "string"
        },
        "spaceHistoryState": "HISTORY_STATE_UNSPECIFIED",
        "spaceThreadingState": "SPACE_THREADING_STATE_UNSPECIFIED",
        "spaceType": "SPACE_TYPE_UNSPECIFIED",
        "threaded": true,
        "type": "TYPE_UNSPECIFIED"
      },
      "text": "string",
      "thread": {
        "name": "string",
        "threadKey": "string"
      },
      "threadReply": true
    }
  ],
  "nextPageToken": "string"
}
```

<h3 id="chatspacesmessageslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListMessagesResponse](#schemalistmessagesresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/chat.import ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/chat.import ), Oauth2 ( Scopes: https://www.googleapis.com/auth/chat.messages ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/chat.messages ), Oauth2 ( Scopes: https://www.googleapis.com/auth/chat.messages.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/chat.messages.readonly )
</aside>

## chat.spaces.messages.create

<a id="opIdchat.spaces.messages.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/messages \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "actionResponse": {
      "dialogAction": {
        "actionStatus": {
          "statusCode": "OK",
          "userFacingMessage": "string"
        },
        "dialog": {
          "body": {
            "cardActions": [
              {}
            ],
            "displayStyle": "DISPLAY_STYLE_UNSPECIFIED",
            "fixedFooter": {},
            "header": {
              "imageAltText": "string",
              "imageType": "SQUARE",
              "imageUrl": "string",
              "subtitle": "string",
              "title": "string"
            },
            "name": "string",
            "peekCardHeader": {
              "imageAltText": "string",
              "imageType": "SQUARE",
              "imageUrl": "string",
              "subtitle": "string",
              "title": "string"
            },
            "sectionDividerStyle": "DIVIDER_STYLE_UNSPECIFIED",
            "sections": [
              {}
            ]
          }
        }
      },
      "type": "TYPE_UNSPECIFIED",
      "updatedWidget": {
        "suggestions": {
          "items": [
            {
              "bottomText": "string",
              "selected": true,
              "startIconUri": "string",
              "text": "string",
              "value": "string"
            }
          ]
        },
        "widget": "string"
      },
      "url": "string"
    },
    "attachment": [
      {
        "attachmentDataRef": {
          "attachmentUploadToken": "string",
          "resourceName": "string"
        },
        "name": "string"
      }
    ],
    "cards": [
      {
        "cardActions": [
          {
            "actionLabel": "string",
            "onClick": {
              "action": {
                "actionMethodName": "string",
                "parameters": [
                  {
                    "key": "string",
                    "value": "string"
                  }
                ]
              },
              "openLink": {
                "url": "string"
              }
            }
          }
        ],
        "header": {
          "imageStyle": "IMAGE_STYLE_UNSPECIFIED",
          "imageUrl": "string",
          "subtitle": "string",
          "title": "string"
        },
        "name": "string",
        "sections": [
          {
            "header": "string",
            "widgets": [
              {
                "buttons": [
                  {
                    "imageButton": {
                      "icon": "ICON_UNSPECIFIED",
                      "iconUrl": "string",
                      "name": "string",
                      "onClick": {
                        "action": {
                          "actionMethodName": "string",
                          "parameters": [
                            {
                              "key": "string",
                              "value": "string"
                            }
                          ]
                        },
                        "openLink": {
                          "url": "string"
                        }
                      }
                    },
                    "textButton": {
                      "onClick": {
                        "action": {
                          "actionMethodName": "string",
                          "parameters": [
                            {
                              "key": "string",
                              "value": "string"
                            }
                          ]
                        },
                        "openLink": {
                          "url": "string"
                        }
                      },
                      "text": "string"
                    }
                  }
                ],
                "image": {
                  "aspectRatio": 0,
                  "imageUrl": "string",
                  "onClick": {
                    "action": {
                      "actionMethodName": "string",
                      "parameters": [
                        {
                          "key": "string",
                          "value": "string"
                        }
                      ]
                    },
                    "openLink": {
                      "url": "string"
                    }
                  }
                },
                "keyValue": {
                  "bottomLabel": "string",
                  "button": {
                    "imageButton": {
                      "icon": "ICON_UNSPECIFIED",
                      "iconUrl": "string",
                      "name": "string",
                      "onClick": {
                        "action": {
                          "actionMethodName": "string",
                          "parameters": [
                            {
                              "key": "string",
                              "value": "string"
                            }
                          ]
                        },
                        "openLink": {
                          "url": "string"
                        }
                      }
                    },
                    "textButton": {
                      "onClick": {
                        "action": {
                          "actionMethodName": "string",
                          "parameters": [
                            {
                              "key": "string",
                              "value": "string"
                            }
                          ]
                        },
                        "openLink": {
                          "url": "string"
                        }
                      },
                      "text": "string"
                    }
                  },
                  "content": "string",
                  "contentMultiline": true,
                  "icon": "ICON_UNSPECIFIED",
                  "iconUrl": "string",
                  "onClick": {
                    "action": {
                      "actionMethodName": "string",
                      "parameters": [
                        {
                          "key": "string",
                          "value": "string"
                        }
                      ]
                    },
                    "openLink": {
                      "url": "string"
                    }
                  },
                  "topLabel": "string"
                },
                "textParagraph": {
                  "text": "string"
                }
              }
            ]
          }
        ]
      }
    ],
    "cardsV2": [
      {
        "card": {
          "cardActions": [
            {}
          ],
          "displayStyle": "DISPLAY_STYLE_UNSPECIFIED",
          "fixedFooter": {},
          "header": {
            "imageAltText": "string",
            "imageType": "SQUARE",
            "imageUrl": "string",
            "subtitle": "string",
            "title": "string"
          },
          "name": "string",
          "peekCardHeader": {
            "imageAltText": "string",
            "imageType": "SQUARE",
            "imageUrl": "string",
            "subtitle": "string",
            "title": "string"
          },
          "sectionDividerStyle": "DIVIDER_STYLE_UNSPECIFIED",
          "sections": [
            {}
          ]
        },
        "cardId": "string"
      }
    ],
    "clientAssignedMessageId": "string",
    "createTime": "string",
    "fallbackText": "string",
    "name": "string",
    "privateMessageViewer": {
      "domainId": "string",
      "name": "string",
      "type": "TYPE_UNSPECIFIED"
    },
    "space": {
      "createTime": "string",
      "displayName": "string",
      "externalUserAllowed": true,
      "importMode": true,
      "name": "string",
      "singleUserBotDm": true,
      "spaceDetails": {
        "description": "string",
        "guidelines": "string"
      },
      "spaceHistoryState": "HISTORY_STATE_UNSPECIFIED",
      "spaceType": "SPACE_TYPE_UNSPECIFIED"
    },
    "text": "string",
    "thread": {
      "name": "string",
      "threadKey": "string"
    }
  }'
```

`POST /v1/{parent}/messages`

Creates a message in a Google Chat space. For an example, see [Create a message](https://developers.google.com/chat/api/guides/v1/messages/create). Calling this method requires [authentication](https://developers.google.com/chat/api/guides/auth) and supports the following authentication types: - For text messages, user authentication or app authentication are supported. - For card messages, only app authentication is supported. (Only Chat apps can create card messages.)

> Body parameter

```json
{
  "actionResponse": {
    "dialogAction": {
      "actionStatus": {
        "statusCode": "OK",
        "userFacingMessage": "string"
      },
      "dialog": {
        "body": {
          "cardActions": [
            {}
          ],
          "displayStyle": "DISPLAY_STYLE_UNSPECIFIED",
          "fixedFooter": {},
          "header": {
            "imageAltText": "string",
            "imageType": "SQUARE",
            "imageUrl": "string",
            "subtitle": "string",
            "title": "string"
          },
          "name": "string",
          "peekCardHeader": {
            "imageAltText": "string",
            "imageType": "SQUARE",
            "imageUrl": "string",
            "subtitle": "string",
            "title": "string"
          },
          "sectionDividerStyle": "DIVIDER_STYLE_UNSPECIFIED",
          "sections": [
            {}
          ]
        }
      }
    },
    "type": "TYPE_UNSPECIFIED",
    "updatedWidget": {
      "suggestions": {
        "items": [
          {
            "bottomText": "string",
            "selected": true,
            "startIconUri": "string",
            "text": "string",
            "value": "string"
          }
        ]
      },
      "widget": "string"
    },
    "url": "string"
  },
  "attachment": [
    {
      "attachmentDataRef": {
        "attachmentUploadToken": "string",
        "resourceName": "string"
      },
      "name": "string"
    }
  ],
  "cards": [
    {
      "cardActions": [
        {
          "actionLabel": "string",
          "onClick": {
            "action": {
              "actionMethodName": "string",
              "parameters": [
                {
                  "key": "string",
                  "value": "string"
                }
              ]
            },
            "openLink": {
              "url": "string"
            }
          }
        }
      ],
      "header": {
        "imageStyle": "IMAGE_STYLE_UNSPECIFIED",
        "imageUrl": "string",
        "subtitle": "string",
        "title": "string"
      },
      "name": "string",
      "sections": [
        {
          "header": "string",
          "widgets": [
            {
              "buttons": [
                {
                  "imageButton": {
                    "icon": "ICON_UNSPECIFIED",
                    "iconUrl": "string",
                    "name": "string",
                    "onClick": {
                      "action": {
                        "actionMethodName": "string",
                        "parameters": [
                          {
                            "key": "string",
                            "value": "string"
                          }
                        ]
                      },
                      "openLink": {
                        "url": "string"
                      }
                    }
                  },
                  "textButton": {
                    "onClick": {
                      "action": {
                        "actionMethodName": "string",
                        "parameters": [
                          {
                            "key": "string",
                            "value": "string"
                          }
                        ]
                      },
                      "openLink": {
                        "url": "string"
                      }
                    },
                    "text": "string"
                  }
                }
              ],
              "image": {
                "aspectRatio": 0,
                "imageUrl": "string",
                "onClick": {
                  "action": {
                    "actionMethodName": "string",
                    "parameters": [
                      {
                        "key": "string",
                        "value": "string"
                      }
                    ]
                  },
                  "openLink": {
                    "url": "string"
                  }
                }
              },
              "keyValue": {
                "bottomLabel": "string",
                "button": {
                  "imageButton": {
                    "icon": "ICON_UNSPECIFIED",
                    "iconUrl": "string",
                    "name": "string",
                    "onClick": {
                      "action": {
                        "actionMethodName": "string",
                        "parameters": [
                          {
                            "key": "string",
                            "value": "string"
                          }
                        ]
                      },
                      "openLink": {
                        "url": "string"
                      }
                    }
                  },
                  "textButton": {
                    "onClick": {
                      "action": {
                        "actionMethodName": "string",
                        "parameters": [
                          {
                            "key": "string",
                            "value": "string"
                          }
                        ]
                      },
                      "openLink": {
                        "url": "string"
                      }
                    },
                    "text": "string"
                  }
                },
                "content": "string",
                "contentMultiline": true,
                "icon": "ICON_UNSPECIFIED",
                "iconUrl": "string",
                "onClick": {
                  "action": {
                    "actionMethodName": "string",
                    "parameters": [
                      {
                        "key": "string",
                        "value": "string"
                      }
                    ]
                  },
                  "openLink": {
                    "url": "string"
                  }
                },
                "topLabel": "string"
              },
              "textParagraph": {
                "text": "string"
              }
            }
          ]
        }
      ]
    }
  ],
  "cardsV2": [
    {
      "card": {
        "cardActions": [
          {}
        ],
        "displayStyle": "DISPLAY_STYLE_UNSPECIFIED",
        "fixedFooter": {},
        "header": {
          "imageAltText": "string",
          "imageType": "SQUARE",
          "imageUrl": "string",
          "subtitle": "string",
          "title": "string"
        },
        "name": "string",
        "peekCardHeader": {
          "imageAltText": "string",
          "imageType": "SQUARE",
          "imageUrl": "string",
          "subtitle": "string",
          "title": "string"
        },
        "sectionDividerStyle": "DIVIDER_STYLE_UNSPECIFIED",
        "sections": [
          {}
        ]
      },
      "cardId": "string"
    }
  ],
  "clientAssignedMessageId": "string",
  "createTime": "string",
  "fallbackText": "string",
  "name": "string",
  "privateMessageViewer": {
    "domainId": "string",
    "name": "string",
    "type": "TYPE_UNSPECIFIED"
  },
  "space": {
    "createTime": "string",
    "displayName": "string",
    "externalUserAllowed": true,
    "importMode": true,
    "name": "string",
    "singleUserBotDm": true,
    "spaceDetails": {
      "description": "string",
      "guidelines": "string"
    },
    "spaceHistoryState": "HISTORY_STATE_UNSPECIFIED",
    "spaceType": "SPACE_TYPE_UNSPECIFIED"
  },
  "text": "string",
  "thread": {
    "name": "string",
    "threadKey": "string"
  }
}
```

<h3 id="chatspacesmessagescreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The resource name of the space in which to create a message. Format: `spaces/{space}`|
|messageId|query|string|false|Optional. A custom ID for a message. Lets Chat apps get, update, or delete a message without needing to store the system-assigned ID in the message's resource name (represented in the message `name` field). The value for this field must meet the following requirements: * Begins with `client-`. For example, `client-custom-name` is a valid custom ID, but `custom-name` is not. * Contains up to 63 characters and only lowercase letters, numbers, and hyphens. * Is unique within a space. A Chat app can't use the same custom ID for different messages. For details, see [Name a message](https://developers.google.com/chat/api/guides/v1/messages/create#name_a_created_message).|
|messageReplyOption|query|string|false|Optional. Specifies whether a message starts a thread or replies to one. Only supported in named spaces.|
|requestId|query|string|false|Optional. A unique request ID for this message. Specifying an existing request ID returns the message created with that ID instead of creating a new message.|
|threadKey|query|string|false|Optional. Deprecated: Use thread.thread_key instead. ID for the thread. Supports up to 4000 characters. To start or add to a thread, create a message and specify a `threadKey` or the thread.name. For example usage, see [Start or reply to a message thread](https://developers.google.com/chat/api/guides/v1/messages/create#create-message-thread).|
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
|body|body|[Message](#schemamessage)|false|none|
|» actionResponse|body|[ActionResponse](#schemaactionresponse)|false|Input only. Parameters that a Chat app can use to configure how its response is posted.|
|» attachment|body|[[Attachment](#schemaattachment)]|false|User-uploaded attachment.|
|» cards|body|[[Card](#schemacard)]|false|**Deprecated.** Deprecated: Use `cards_v2` instead. Rich, formatted, and interactive cards that you can use to display UI elements such as: formatted texts, buttons, and clickable images. Cards are normally displayed below the plain-text body of the message. `cards` and `cards_v2` can have a maximum size of 32 KB.|
|» cardsV2|body|[[CardWithId](#schemacardwithid)]|false|An array of [cards](https://developers.google.com/chat/api/reference/rest/v1/cards). Only Chat apps can create cards. If your Chat app [authenticates as a user](https://developers.google.com/chat/api/guides/auth/users), the messages can't contain cards. To learn about cards and how to create them, see [Design dynamic, interactive, and consistent UIs with cards](https://developers.google.com/chat/ui). [Card builder](https://addons.gsuite.google.com/uikit/builder)|
|» clientAssignedMessageId|body|string|false|Optional. A custom ID for the message. You can use field to identify a message, or to get, delete, or update a message. To set a custom ID, specify the [`messageId`](https://developers.google.com/chat/api/reference/rest/v1/spaces.messages/create#body.QUERY_PARAMETERS.message_id) field when you create the message. For details, see [Name a message](https://developers.google.com/chat/api/guides/v1/messages/create#name_a_created_message).|
|» createTime|body|string(google-datetime)|false|Optional. Immutable. For spaces created in Chat, the time at which the message was created. This field is output only, except when used in import mode spaces. For import mode spaces, set this field to the historical timestamp at which the message was created in the source in order to preserve the original creation time.|
|» fallbackText|body|string|false|A plain-text description of the message's cards, used when the actual cards can't be displayed—for example, mobile notifications.|
|» name|body|string|false|Resource name of the message. Format: `spaces/{space}/messages/{message}` Where `{space}` is the ID of the space where the message is posted and `{message}` is a system-assigned ID for the message. For example, `spaces/AAAAAAAAAAA/messages/BBBBBBBBBBB.BBBBBBBBBBB`. If you set a custom ID when you create a message, you can use this ID to specify the message in a request by replacing `{message}` with the value from the `clientAssignedMessageId` field. For example, `spaces/AAAAAAAAAAA/messages/client-custom-name`. For details, see [Name a message](https://developers.google.com/chat/api/guides/v1/messages/create#name_a_created_message).|
|» privateMessageViewer|body|[User](#schemauser)|false|Immutable. Input for creating a message, otherwise output only. The user that can view the message. When set, the message is private and only visible to the specified user and the Chat app. Link previews and attachments aren't supported for private messages. Only Chat apps can send private messages. If your Chat app [authenticates as a user](https://developers.google.com/chat/api/guides/auth/users) to send a message, the message can't be private and must omit this field. For details, see [Send private messages to Google Chat users](https://developers.google.com/chat/api/guides/v1/messages/private).|
|» space|body|[Space](#schemaspace)|false|If your Chat app [authenticates as a user](https://developers.google.com/chat/api/guides/auth/users), the output populates the [space](https://developers.google.com/chat/api/reference/rest/v1/spaces) `name`.|
|» text|body|string|false|Plain-text body of the message. The first link to an image, video, or web page generates a [preview chip](https://developers.google.com/chat/how-tos/preview-links). You can also [@mention a Google Chat user](https://developers.google.com/chat/format-messages#messages-@mention), or everyone in the space. To learn about creating text messages, see [Send a text message](https://developers.google.com/chat/api/guides/v1/messages/create#create-text-messages).|
|» thread|body|[Thread](#schemathread)|false|The thread the message belongs to. For example usage, see [Start or reply to a message thread](https://developers.google.com/chat/api/guides/v1/messages/create#create-message-thread).|

#### Enumerated Values

|Parameter|Value|
|---|---|
|messageReplyOption|MESSAGE_REPLY_OPTION_UNSPECIFIED|
|messageReplyOption|REPLY_MESSAGE_FALLBACK_TO_NEW_THREAD|
|messageReplyOption|REPLY_MESSAGE_OR_FAIL|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "actionResponse": {
    "dialogAction": {
      "actionStatus": {
        "statusCode": "OK",
        "userFacingMessage": "string"
      },
      "dialog": {
        "body": {
          "cardActions": [
            {}
          ],
          "displayStyle": "DISPLAY_STYLE_UNSPECIFIED",
          "fixedFooter": {},
          "header": {
            "imageAltText": "string",
            "imageType": "SQUARE",
            "imageUrl": "string",
            "subtitle": "string",
            "title": "string"
          },
          "name": "string",
          "peekCardHeader": {
            "imageAltText": "string",
            "imageType": "SQUARE",
            "imageUrl": "string",
            "subtitle": "string",
            "title": "string"
          },
          "sectionDividerStyle": "DIVIDER_STYLE_UNSPECIFIED",
          "sections": [
            {}
          ]
        }
      }
    },
    "type": "TYPE_UNSPECIFIED",
    "updatedWidget": {
      "suggestions": {
        "items": [
          {
            "bottomText": "string",
            "selected": true,
            "startIconUri": "string",
            "text": "string",
            "value": "string"
          }
        ]
      },
      "widget": "string"
    },
    "url": "string"
  },
  "annotations": [
    {
      "length": 0,
      "slashCommand": {
        "bot": {
          "displayName": "string",
          "domainId": "string",
          "isAnonymous": true,
          "name": "string",
          "type": "TYPE_UNSPECIFIED"
        },
        "commandId": "string",
        "commandName": "string",
        "triggersDialog": true,
        "type": "TYPE_UNSPECIFIED"
      },
      "startIndex": 0,
      "type": "ANNOTATION_TYPE_UNSPECIFIED",
      "userMention": {
        "type": "TYPE_UNSPECIFIED",
        "user": {
          "displayName": "string",
          "domainId": "string",
          "isAnonymous": true,
          "name": "string",
          "type": "TYPE_UNSPECIFIED"
        }
      }
    }
  ],
  "argumentText": "string",
  "attachedGifs": [
    {
      "uri": "string"
    }
  ],
  "attachment": [
    {
      "attachmentDataRef": {
        "attachmentUploadToken": "string",
        "resourceName": "string"
      },
      "contentName": "string",
      "contentType": "string",
      "downloadUri": "string",
      "driveDataRef": {
        "driveFileId": "string"
      },
      "name": "string",
      "source": "SOURCE_UNSPECIFIED",
      "thumbnailUri": "string"
    }
  ],
  "cards": [
    {
      "cardActions": [
        {
          "actionLabel": "string",
          "onClick": {
            "action": {
              "actionMethodName": "string",
              "parameters": [
                {
                  "key": "string",
                  "value": "string"
                }
              ]
            },
            "openLink": {
              "url": "string"
            }
          }
        }
      ],
      "header": {
        "imageStyle": "IMAGE_STYLE_UNSPECIFIED",
        "imageUrl": "string",
        "subtitle": "string",
        "title": "string"
      },
      "name": "string",
      "sections": [
        {
          "header": "string",
          "widgets": [
            {
              "buttons": [
                {
                  "imageButton": {
                    "icon": "ICON_UNSPECIFIED",
                    "iconUrl": "string",
                    "name": "string",
                    "onClick": {
                      "action": {
                        "actionMethodName": "string",
                        "parameters": [
                          {
                            "key": "string",
                            "value": "string"
                          }
                        ]
                      },
                      "openLink": {
                        "url": "string"
                      }
                    }
                  },
                  "textButton": {
                    "onClick": {
                      "action": {
                        "actionMethodName": "string",
                        "parameters": [
                          {
                            "key": "string",
                            "value": "string"
                          }
                        ]
                      },
                      "openLink": {
                        "url": "string"
                      }
                    },
                    "text": "string"
                  }
                }
              ],
              "image": {
                "aspectRatio": 0,
                "imageUrl": "string",
                "onClick": {
                  "action": {
                    "actionMethodName": "string",
                    "parameters": [
                      {
                        "key": "string",
                        "value": "string"
                      }
                    ]
                  },
                  "openLink": {
                    "url": "string"
                  }
                }
              },
              "keyValue": {
                "bottomLabel": "string",
                "button": {
                  "imageButton": {
                    "icon": "ICON_UNSPECIFIED",
                    "iconUrl": "string",
                    "name": "string",
                    "onClick": {
                      "action": {
                        "actionMethodName": "string",
                        "parameters": [
                          {
                            "key": "string",
                            "value": "string"
                          }
                        ]
                      },
                      "openLink": {
                        "url": "string"
                      }
                    }
                  },
                  "textButton": {
                    "onClick": {
                      "action": {
                        "actionMethodName": "string",
                        "parameters": [
                          {
                            "key": "string",
                            "value": "string"
                          }
                        ]
                      },
                      "openLink": {
                        "url": "string"
                      }
                    },
                    "text": "string"
                  }
                },
                "content": "string",
                "contentMultiline": true,
                "icon": "ICON_UNSPECIFIED",
                "iconUrl": "string",
                "onClick": {
                  "action": {
                    "actionMethodName": "string",
                    "parameters": [
                      {
                        "key": "string",
                        "value": "string"
                      }
                    ]
                  },
                  "openLink": {
                    "url": "string"
                  }
                },
                "topLabel": "string"
              },
              "textParagraph": {
                "text": "string"
              }
            }
          ]
        }
      ]
    }
  ],
  "cardsV2": [
    {
      "card": {
        "cardActions": [
          {}
        ],
        "displayStyle": "DISPLAY_STYLE_UNSPECIFIED",
        "fixedFooter": {},
        "header": {
          "imageAltText": "string",
          "imageType": "SQUARE",
          "imageUrl": "string",
          "subtitle": "string",
          "title": "string"
        },
        "name": "string",
        "peekCardHeader": {
          "imageAltText": "string",
          "imageType": "SQUARE",
          "imageUrl": "string",
          "subtitle": "string",
          "title": "string"
        },
        "sectionDividerStyle": "DIVIDER_STYLE_UNSPECIFIED",
        "sections": [
          {}
        ]
      },
      "cardId": "string"
    }
  ],
  "clientAssignedMessageId": "string",
  "createTime": "string",
  "deleteTime": "string",
  "deletionMetadata": {
    "deletionType": "DELETION_TYPE_UNSPECIFIED"
  },
  "emojiReactionSummaries": [
    {
      "emoji": {
        "customEmoji": {
          "uid": "string"
        },
        "unicode": "string"
      },
      "reactionCount": 0
    }
  ],
  "fallbackText": "string",
  "formattedText": "string",
  "lastUpdateTime": "string",
  "matchedUrl": {
    "url": "string"
  },
  "name": "string",
  "privateMessageViewer": {
    "displayName": "string",
    "domainId": "string",
    "isAnonymous": true,
    "name": "string",
    "type": "TYPE_UNSPECIFIED"
  },
  "quotedMessageMetadata": {
    "lastUpdateTime": "string",
    "name": "string"
  },
  "sender": {
    "displayName": "string",
    "domainId": "string",
    "isAnonymous": true,
    "name": "string",
    "type": "TYPE_UNSPECIFIED"
  },
  "slashCommand": {
    "commandId": "string"
  },
  "space": {
    "adminInstalled": true,
    "createTime": "string",
    "displayName": "string",
    "externalUserAllowed": true,
    "importMode": true,
    "name": "string",
    "singleUserBotDm": true,
    "spaceDetails": {
      "description": "string",
      "guidelines": "string"
    },
    "spaceHistoryState": "HISTORY_STATE_UNSPECIFIED",
    "spaceThreadingState": "SPACE_THREADING_STATE_UNSPECIFIED",
    "spaceType": "SPACE_TYPE_UNSPECIFIED",
    "threaded": true,
    "type": "TYPE_UNSPECIFIED"
  },
  "text": "string",
  "thread": {
    "name": "string",
    "threadKey": "string"
  },
  "threadReply": true
}
```

<h3 id="chatspacesmessagescreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Message](#schemamessage)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/chat.bot ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/chat.bot ), Oauth2 ( Scopes: https://www.googleapis.com/auth/chat.import ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/chat.import ), Oauth2 ( Scopes: https://www.googleapis.com/auth/chat.messages ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/chat.messages ), Oauth2 ( Scopes: https://www.googleapis.com/auth/chat.messages.create ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/chat.messages.create )
</aside>

## chat.spaces.messages.reactions.list

<a id="opIdchat.spaces.messages.reactions.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/reactions \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/{parent}/reactions`

Lists reactions to a message. For an example, see [List reactions](https://developers.google.com/chat/api/guides/v1/reactions/list). Requires [user authentication](https://developers.google.com/chat/api/guides/auth/users).

<h3 id="chatspacesmessagesreactionslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The message users reacted to. Format: `spaces/{space}/messages/{message}`|
|filter|query|string|false|Optional. A query filter. You can filter reactions by [emoji](https://developers.google.com/chat/api/reference/rest/v1/Emoji) (either `emoji.unicode` or `emoji.custom_emoji.uid`) and [user](https://developers.google.com/chat/api/reference/rest/v1/User) (`user.name`). To filter reactions for multiple emojis or users, join similar fields with the `OR` operator, such as `emoji.unicode = "🙂" OR emoji.unicode = "👍"` and `user.name = "users/AAAAAA" OR user.name = "users/BBBBBB"`. To filter reactions by emoji and user, use the `AND` operator, such as `emoji.unicode = "🙂" AND user.name = "users/AAAAAA"`. If your query uses both `AND` and `OR`, group them with parentheses. For example, the following queries are valid: ``` user.name = "users/{user}" emoji.unicode = "🙂" emoji.custom_emoji.uid = "{uid}" emoji.unicode = "🙂" OR emoji.unicode = "👍" emoji.unicode = "🙂" OR emoji.custom_emoji.uid = "{uid}" emoji.unicode = "🙂" AND user.name = "users/{user}" (emoji.unicode = "🙂" OR emoji.custom_emoji.uid = "{uid}") AND user.name = "users/{user}" ``` The following queries are invalid: ``` emoji.unicode = "🙂" AND emoji.unicode = "👍" emoji.unicode = "🙂" AND emoji.custom_emoji.uid = "{uid}" emoji.unicode = "🙂" OR user.name = "users/{user}" emoji.unicode = "🙂" OR emoji.custom_emoji.uid = "{uid}" OR user.name = "users/{user}" emoji.unicode = "🙂" OR emoji.custom_emoji.uid = "{uid}" AND user.name = "users/{user}" ``` Invalid queries are rejected by the server with an `INVALID_ARGUMENT` error.|
|pageSize|query|integer|false|Optional. The maximum number of reactions returned. The service can return fewer reactions than this value. If unspecified, the default value is 25. The maximum value is 200; values above 200 are changed to 200.|
|pageToken|query|string|false|Optional. (If resuming from a previous query.) A page token received from a previous list reactions call. Provide this to retrieve the subsequent page. When paginating, the filter value should match the call that provided the page token. Passing a different value might lead to unexpected results.|
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
  "reactions": [
    {
      "emoji": {
        "customEmoji": {
          "uid": "string"
        },
        "unicode": "string"
      },
      "name": "string",
      "user": {
        "displayName": "string",
        "domainId": "string",
        "isAnonymous": true,
        "name": "string",
        "type": "TYPE_UNSPECIFIED"
      }
    }
  ]
}
```

<h3 id="chatspacesmessagesreactionslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListReactionsResponse](#schemalistreactionsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/chat.messages ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/chat.messages ), Oauth2 ( Scopes: https://www.googleapis.com/auth/chat.messages.reactions ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/chat.messages.reactions ), Oauth2 ( Scopes: https://www.googleapis.com/auth/chat.messages.reactions.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/chat.messages.reactions.readonly ), Oauth2 ( Scopes: https://www.googleapis.com/auth/chat.messages.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/chat.messages.readonly )
</aside>

## chat.spaces.messages.reactions.create

<a id="opIdchat.spaces.messages.reactions.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/reactions \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "emoji": {
      "unicode": "string"
    },
    "name": "string"
  }'
```

`POST /v1/{parent}/reactions`

Creates a reaction and adds it to a message. For an example, see [Create a reaction](https://developers.google.com/chat/api/guides/v1/reactions/create). Requires [user authentication](https://developers.google.com/chat/api/guides/auth/users). Only unicode emoji are supported.

> Body parameter

```json
{
  "emoji": {
    "unicode": "string"
  },
  "name": "string"
}
```

<h3 id="chatspacesmessagesreactionscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The message where the reaction is created. Format: `spaces/{space}/messages/{message}`|
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
|body|body|[Reaction](#schemareaction)|false|none|
|» emoji|body|[Emoji](#schemaemoji)|false|The emoji used in the reaction.|
|» name|body|string|false|The resource name of the reaction. Format: `spaces/{space}/messages/{message}/reactions/{reaction}`|

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
  "emoji": {
    "customEmoji": {
      "uid": "string"
    },
    "unicode": "string"
  },
  "name": "string",
  "user": {
    "displayName": "string",
    "domainId": "string",
    "isAnonymous": true,
    "name": "string",
    "type": "TYPE_UNSPECIFIED"
  }
}
```

<h3 id="chatspacesmessagesreactionscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Reaction](#schemareaction)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/chat.import ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/chat.import ), Oauth2 ( Scopes: https://www.googleapis.com/auth/chat.messages ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/chat.messages ), Oauth2 ( Scopes: https://www.googleapis.com/auth/chat.messages.reactions ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/chat.messages.reactions ), Oauth2 ( Scopes: https://www.googleapis.com/auth/chat.messages.reactions.create ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/chat.messages.reactions.create )
</aside>

# Schemas

<h2 id="tocS_ActionParameter">ActionParameter</h2>
<!-- backwards compatibility -->
<a id="schemaactionparameter"></a>
<a id="schema_ActionParameter"></a>
<a id="tocSactionparameter"></a>
<a id="tocsactionparameter"></a>

```json
{
  "key": "string",
  "value": "string"
}
```

List of string parameters to supply when the action method is invoked. For example, consider three snooze buttons: snooze now, snooze one day, snooze next week. You might use `action method = snooze()`, passing the snooze type and snooze time in the list of string parameters.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|key|string|false|none|The name of the parameter for the action script.|
|value|string|false|none|The value of the parameter.|

<h2 id="tocS_ActionResponse">ActionResponse</h2>
<!-- backwards compatibility -->
<a id="schemaactionresponse"></a>
<a id="schema_ActionResponse"></a>
<a id="tocSactionresponse"></a>
<a id="tocsactionresponse"></a>

```json
{
  "dialogAction": {
    "actionStatus": {
      "statusCode": "OK",
      "userFacingMessage": "string"
    },
    "dialog": {
      "body": {
        "cardActions": [
          {}
        ],
        "displayStyle": "DISPLAY_STYLE_UNSPECIFIED",
        "fixedFooter": {},
        "header": {
          "imageAltText": "string",
          "imageType": "SQUARE",
          "imageUrl": "string",
          "subtitle": "string",
          "title": "string"
        },
        "name": "string",
        "peekCardHeader": {
          "imageAltText": "string",
          "imageType": "SQUARE",
          "imageUrl": "string",
          "subtitle": "string",
          "title": "string"
        },
        "sectionDividerStyle": "DIVIDER_STYLE_UNSPECIFIED",
        "sections": [
          {}
        ]
      }
    }
  },
  "type": "TYPE_UNSPECIFIED",
  "updatedWidget": {
    "suggestions": {
      "items": [
        {
          "bottomText": "string",
          "selected": true,
          "startIconUri": "string",
          "text": "string",
          "value": "string"
        }
      ]
    },
    "widget": "string"
  },
  "url": "string"
}
```

Parameters that a Chat app can use to configure how its response is posted.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dialogAction|[DialogAction](#schemadialogaction)|false|none|Input only. A response to an interaction event related to a [dialog](https://developers.google.com/chat/how-tos/dialogs). Must be accompanied by `ResponseType.Dialog`.|
|type|string|false|none|Input only. The type of Chat app response.|
|updatedWidget|[UpdatedWidget](#schemaupdatedwidget)|false|none|Input only. The response of the updated widget.|
|url|string|false|none|Input only. URL for users to authenticate or configure. (Only for `REQUEST_CONFIG` response types.)|

#### Enumerated Values

|Property|Value|
|---|---|
|type|TYPE_UNSPECIFIED|
|type|NEW_MESSAGE|
|type|UPDATE_MESSAGE|
|type|UPDATE_USER_MESSAGE_CARDS|
|type|REQUEST_CONFIG|
|type|DIALOG|
|type|UPDATE_WIDGET|

<h2 id="tocS_ActionStatus">ActionStatus</h2>
<!-- backwards compatibility -->
<a id="schemaactionstatus"></a>
<a id="schema_ActionStatus"></a>
<a id="tocSactionstatus"></a>
<a id="tocsactionstatus"></a>

```json
{
  "statusCode": "OK",
  "userFacingMessage": "string"
}
```

Represents the status for a request to either invoke or submit a [dialog](https://developers.google.com/chat/how-tos/dialogs).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|statusCode|string|false|none|The status code.|
|userFacingMessage|string|false|none|The message to send users about the status of their request. If unset, a generic message based on the `status_code` is sent.|

#### Enumerated Values

|Property|Value|
|---|---|
|statusCode|OK|
|statusCode|CANCELLED|
|statusCode|UNKNOWN|
|statusCode|INVALID_ARGUMENT|
|statusCode|DEADLINE_EXCEEDED|
|statusCode|NOT_FOUND|
|statusCode|ALREADY_EXISTS|
|statusCode|PERMISSION_DENIED|
|statusCode|UNAUTHENTICATED|
|statusCode|RESOURCE_EXHAUSTED|
|statusCode|FAILED_PRECONDITION|
|statusCode|ABORTED|
|statusCode|OUT_OF_RANGE|
|statusCode|UNIMPLEMENTED|
|statusCode|INTERNAL|
|statusCode|UNAVAILABLE|
|statusCode|DATA_LOSS|

<h2 id="tocS_Annotation">Annotation</h2>
<!-- backwards compatibility -->
<a id="schemaannotation"></a>
<a id="schema_Annotation"></a>
<a id="tocSannotation"></a>
<a id="tocsannotation"></a>

```json
{
  "length": 0,
  "slashCommand": {
    "bot": {
      "displayName": "string",
      "domainId": "string",
      "isAnonymous": true,
      "name": "string",
      "type": "TYPE_UNSPECIFIED"
    },
    "commandId": "string",
    "commandName": "string",
    "triggersDialog": true,
    "type": "TYPE_UNSPECIFIED"
  },
  "startIndex": 0,
  "type": "ANNOTATION_TYPE_UNSPECIFIED",
  "userMention": {
    "type": "TYPE_UNSPECIFIED",
    "user": {
      "displayName": "string",
      "domainId": "string",
      "isAnonymous": true,
      "name": "string",
      "type": "TYPE_UNSPECIFIED"
    }
  }
}
```

Output only. Annotations associated with the plain-text body of the message. To add basic formatting to a text message, see [Format text messages](https://developers.google.com/chat/format-messages). Example plain-text message body: ``` Hello @FooBot how are you!" ``` The corresponding annotations metadata: ``` "annotations":[{ "type":"USER_MENTION", "startIndex":6, "length":7, "userMention": { "user": { "name":"users/{user}", "displayName":"FooBot", "avatarUrl":"https://goo.gl/aeDtrS", "type":"BOT" }, "type":"MENTION" } }] ```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|length|integer(int32)|false|none|Length of the substring in the plain-text message body this annotation corresponds to.|
|slashCommand|[SlashCommandMetadata](#schemaslashcommandmetadata)|false|none|The metadata for a slash command.|
|startIndex|integer(int32)|false|none|Start index (0-based, inclusive) in the plain-text message body this annotation corresponds to.|
|type|string|false|none|The type of this annotation.|
|userMention|[UserMentionMetadata](#schemausermentionmetadata)|false|none|The metadata of user mention.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|ANNOTATION_TYPE_UNSPECIFIED|
|type|USER_MENTION|
|type|SLASH_COMMAND|

<h2 id="tocS_AttachedGif">AttachedGif</h2>
<!-- backwards compatibility -->
<a id="schemaattachedgif"></a>
<a id="schema_AttachedGif"></a>
<a id="tocSattachedgif"></a>
<a id="tocsattachedgif"></a>

```json
{
  "uri": "string"
}
```

A GIF image that's specified by a URL.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|uri|string|false|read-only|Output only. The URL that hosts the GIF image.|

<h2 id="tocS_Attachment">Attachment</h2>
<!-- backwards compatibility -->
<a id="schemaattachment"></a>
<a id="schema_Attachment"></a>
<a id="tocSattachment"></a>
<a id="tocsattachment"></a>

```json
{
  "attachmentDataRef": {
    "attachmentUploadToken": "string",
    "resourceName": "string"
  },
  "contentName": "string",
  "contentType": "string",
  "downloadUri": "string",
  "driveDataRef": {
    "driveFileId": "string"
  },
  "name": "string",
  "source": "SOURCE_UNSPECIFIED",
  "thumbnailUri": "string"
}
```

An attachment in Google Chat.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|attachmentDataRef|[AttachmentDataRef](#schemaattachmentdataref)|false|none|A reference to the attachment data. This field is used with the media API to download the attachment data.|
|contentName|string|false|read-only|Output only. The original file name for the content, not the full path.|
|contentType|string|false|read-only|Output only. The content type (MIME type) of the file.|
|downloadUri|string|false|read-only|Output only. The download URL which should be used to allow a human user to download the attachment. Chat apps shouldn't use this URL to download attachment content.|
|driveDataRef|[DriveDataRef](#schemadrivedataref)|false|none|Output only. A reference to the Google Drive attachment. This field is used with the Google Drive API.|
|name|string|false|none|Resource name of the attachment, in the form `spaces/*/messages/*/attachments/*`.|
|source|string|false|read-only|Output only. The source of the attachment.|
|thumbnailUri|string|false|read-only|Output only. The thumbnail URL which should be used to preview the attachment to a human user. Chat apps shouldn't use this URL to download attachment content.|

#### Enumerated Values

|Property|Value|
|---|---|
|source|SOURCE_UNSPECIFIED|
|source|DRIVE_FILE|
|source|UPLOADED_CONTENT|

<h2 id="tocS_AttachmentDataRef">AttachmentDataRef</h2>
<!-- backwards compatibility -->
<a id="schemaattachmentdataref"></a>
<a id="schema_AttachmentDataRef"></a>
<a id="tocSattachmentdataref"></a>
<a id="tocsattachmentdataref"></a>

```json
{
  "attachmentUploadToken": "string",
  "resourceName": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|attachmentUploadToken|string|false|none|Opaque token containing a reference to an uploaded attachment. Treated by clients as an opaque string and used to create or update Chat messages with attachments.|
|resourceName|string|false|none|The resource name of the attachment data. This field is used with the media API to download the attachment data.|

<h2 id="tocS_Button">Button</h2>
<!-- backwards compatibility -->
<a id="schemabutton"></a>
<a id="schema_Button"></a>
<a id="tocSbutton"></a>
<a id="tocsbutton"></a>

```json
{
  "imageButton": {
    "icon": "ICON_UNSPECIFIED",
    "iconUrl": "string",
    "name": "string",
    "onClick": {
      "action": {
        "actionMethodName": "string",
        "parameters": [
          {
            "key": "string",
            "value": "string"
          }
        ]
      },
      "openLink": {
        "url": "string"
      }
    }
  },
  "textButton": {
    "onClick": {
      "action": {
        "actionMethodName": "string",
        "parameters": [
          {
            "key": "string",
            "value": "string"
          }
        ]
      },
      "openLink": {
        "url": "string"
      }
    },
    "text": "string"
  }
}
```

A button. Can be a text button or an image button.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|imageButton|[ImageButton](#schemaimagebutton)|false|none|A button with image and `onclick` action.|
|textButton|[TextButton](#schematextbutton)|false|none|A button with text and `onclick` action.|

<h2 id="tocS_Card">Card</h2>
<!-- backwards compatibility -->
<a id="schemacard"></a>
<a id="schema_Card"></a>
<a id="tocScard"></a>
<a id="tocscard"></a>

```json
{
  "cardActions": [
    {
      "actionLabel": "string",
      "onClick": {
        "action": {
          "actionMethodName": "string",
          "parameters": [
            {
              "key": "string",
              "value": "string"
            }
          ]
        },
        "openLink": {
          "url": "string"
        }
      }
    }
  ],
  "header": {
    "imageStyle": "IMAGE_STYLE_UNSPECIFIED",
    "imageUrl": "string",
    "subtitle": "string",
    "title": "string"
  },
  "name": "string",
  "sections": [
    {
      "header": "string",
      "widgets": [
        {
          "buttons": [
            {
              "imageButton": {
                "icon": "ICON_UNSPECIFIED",
                "iconUrl": "string",
                "name": "string",
                "onClick": {
                  "action": {
                    "actionMethodName": "string",
                    "parameters": [
                      {
                        "key": "string",
                        "value": "string"
                      }
                    ]
                  },
                  "openLink": {
                    "url": "string"
                  }
                }
              },
              "textButton": {
                "onClick": {
                  "action": {
                    "actionMethodName": "string",
                    "parameters": [
                      {
                        "key": "string",
                        "value": "string"
                      }
                    ]
                  },
                  "openLink": {
                    "url": "string"
                  }
                },
                "text": "string"
              }
            }
          ],
          "image": {
            "aspectRatio": 0,
            "imageUrl": "string",
            "onClick": {
              "action": {
                "actionMethodName": "string",
                "parameters": [
                  {
                    "key": "string",
                    "value": "string"
                  }
                ]
              },
              "openLink": {
                "url": "string"
              }
            }
          },
          "keyValue": {
            "bottomLabel": "string",
            "button": {
              "imageButton": {
                "icon": "ICON_UNSPECIFIED",
                "iconUrl": "string",
                "name": "string",
                "onClick": {
                  "action": {
                    "actionMethodName": "string",
                    "parameters": [
                      {
                        "key": "string",
                        "value": "string"
                      }
                    ]
                  },
                  "openLink": {
                    "url": "string"
                  }
                }
              },
              "textButton": {
                "onClick": {
                  "action": {
                    "actionMethodName": "string",
                    "parameters": [
                      {
                        "key": "string",
                        "value": "string"
                      }
                    ]
                  },
                  "openLink": {
                    "url": "string"
                  }
                },
                "text": "string"
              }
            },
            "content": "string",
            "contentMultiline": true,
            "icon": "ICON_UNSPECIFIED",
            "iconUrl": "string",
            "onClick": {
              "action": {
                "actionMethodName": "string",
                "parameters": [
                  {
                    "key": "string",
                    "value": "string"
                  }
                ]
              },
              "openLink": {
                "url": "string"
              }
            },
            "topLabel": "string"
          },
          "textParagraph": {
            "text": "string"
          }
        }
      ]
    }
  ]
}
```

A card is a UI element that can contain UI widgets such as text and images.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cardActions|[[CardAction](#schemacardaction)]|false|none|The actions of this card.|
|header|[CardHeader](#schemacardheader)|false|none|The header of the card. A header usually contains a title and an image.|
|name|string|false|none|Name of the card.|
|sections|[[Section](#schemasection)]|false|none|Sections are separated by a line divider.|

<h2 id="tocS_CardAction">CardAction</h2>
<!-- backwards compatibility -->
<a id="schemacardaction"></a>
<a id="schema_CardAction"></a>
<a id="tocScardaction"></a>
<a id="tocscardaction"></a>

```json
{
  "actionLabel": "string",
  "onClick": {
    "action": {
      "actionMethodName": "string",
      "parameters": [
        {
          "key": "string",
          "value": "string"
        }
      ]
    },
    "openLink": {
      "url": "string"
    }
  }
}
```

A card action is the action associated with the card. For an invoice card, a typical action would be: delete invoice, email invoice or open the invoice in browser. Not supported by Google Chat apps.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|actionLabel|string|false|none|The label used to be displayed in the action menu item.|
|onClick|[OnClick](#schemaonclick)|false|none|The onclick action for this action item.|

<h2 id="tocS_CardHeader">CardHeader</h2>
<!-- backwards compatibility -->
<a id="schemacardheader"></a>
<a id="schema_CardHeader"></a>
<a id="tocScardheader"></a>
<a id="tocscardheader"></a>

```json
{
  "imageStyle": "IMAGE_STYLE_UNSPECIFIED",
  "imageUrl": "string",
  "subtitle": "string",
  "title": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|imageStyle|string|false|none|The image's type (for example, square border or circular border).|
|imageUrl|string|false|none|The URL of the image in the card header.|
|subtitle|string|false|none|The subtitle of the card header.|
|title|string|false|none|The title must be specified. The header has a fixed height: if both a title and subtitle is specified, each takes up one line. If only the title is specified, it takes up both lines.|

#### Enumerated Values

|Property|Value|
|---|---|
|imageStyle|IMAGE_STYLE_UNSPECIFIED|
|imageStyle|IMAGE|
|imageStyle|AVATAR|

<h2 id="tocS_CardWithId">CardWithId</h2>
<!-- backwards compatibility -->
<a id="schemacardwithid"></a>
<a id="schema_CardWithId"></a>
<a id="tocScardwithid"></a>
<a id="tocscardwithid"></a>

```json
{
  "card": {
    "cardActions": [
      {}
    ],
    "displayStyle": "DISPLAY_STYLE_UNSPECIFIED",
    "fixedFooter": {},
    "header": {
      "imageAltText": "string",
      "imageType": "SQUARE",
      "imageUrl": "string",
      "subtitle": "string",
      "title": "string"
    },
    "name": "string",
    "peekCardHeader": {
      "imageAltText": "string",
      "imageType": "SQUARE",
      "imageUrl": "string",
      "subtitle": "string",
      "title": "string"
    },
    "sectionDividerStyle": "DIVIDER_STYLE_UNSPECIFIED",
    "sections": [
      {}
    ]
  },
  "cardId": "string"
}
```

A [card](https://developers.google.com/chat/api/reference/rest/v1/cards) in a Google Chat message. Only Chat apps can create cards. If your Chat app [authenticates as a user](https://developers.google.com/chat/api/guides/auth/users), the message can't contain cards. [Card builder](https://addons.gsuite.google.com/uikit/builder)

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|card|[GoogleAppsCardV1Card](#schemagoogleappscardv1card)|false|none|A card. Maximum size is 32 KB.|
|cardId|string|false|none|Required if the message contains multiple cards. A unique identifier for a card in a message.|

<h2 id="tocS_ChatAppLogEntry">ChatAppLogEntry</h2>
<!-- backwards compatibility -->
<a id="schemachatapplogentry"></a>
<a id="schema_ChatAppLogEntry"></a>
<a id="tocSchatapplogentry"></a>
<a id="tocschatapplogentry"></a>

```json
{
  "deployment": "string",
  "deploymentFunction": "string",
  "error": {
    "code": 0,
    "details": [
      {
        "property1": null,
        "property2": null
      }
    ],
    "message": "string"
  }
}
```

JSON payload of error messages. If the Cloud Logging API is enabled, these error messages are logged to [Google Cloud Logging](https://cloud.google.com/logging/docs).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|deployment|string|false|none|The deployment that caused the error. For Chat apps built in Apps Script, this is the deployment ID defined by Apps Script.|
|deploymentFunction|string|false|none|The unencrypted `callback_method` name that was running when the error was encountered.|
|error|[Status](#schemastatus)|false|none|The error code and message.|

<h2 id="tocS_ChatClientDataSourceMarkup">ChatClientDataSourceMarkup</h2>
<!-- backwards compatibility -->
<a id="schemachatclientdatasourcemarkup"></a>
<a id="schema_ChatClientDataSourceMarkup"></a>
<a id="tocSchatclientdatasourcemarkup"></a>
<a id="tocschatclientdatasourcemarkup"></a>

```json
{
  "spaceDataSource": {
    "defaultToCurrentSpace": true
  }
}
```

For a `SelectionInput` widget that uses a multiselect menu, a data source from Google Chat. The data source populates selection items for the multiselect menu. For example, a user can select Google Chat spaces that they're a member of. [Google Chat apps](https://developers.google.com/chat):

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|spaceDataSource|[SpaceDataSource](#schemaspacedatasource)|false|none|Google Chat spaces that the user is a member of.|

<h2 id="tocS_Color">Color</h2>
<!-- backwards compatibility -->
<a id="schemacolor"></a>
<a id="schema_Color"></a>
<a id="tocScolor"></a>
<a id="tocscolor"></a>

```json
{
  "alpha": 0,
  "blue": 0,
  "green": 0,
  "red": 0
}
```

Represents a color in the RGBA color space. This representation is designed for simplicity of conversion to and from color representations in various languages over compactness. For example, the fields of this representation can be trivially provided to the constructor of `java.awt.Color` in Java; it can also be trivially provided to UIColor's `+colorWithRed:green:blue:alpha` method in iOS; and, with just a little work, it can be easily formatted into a CSS `rgba()` string in JavaScript. This reference page doesn't have information about the absolute color space that should be used to interpret the RGB value—for example, sRGB, Adobe RGB, DCI-P3, and BT.2020. By default, applications should assume the sRGB color space. When color equality needs to be decided, implementations, unless documented otherwise, treat two colors as equal if all their red, green, blue, and alpha values each differ by at most `1e-5`. Example (Java): import com.google.type.Color; // ... public static java.awt.Color fromProto(Color protocolor) { float alpha = protocolor.hasAlpha() ? protocolor.getAlpha().getValue() : 1.0; return new java.awt.Color( protocolor.getRed(), protocolor.getGreen(), protocolor.getBlue(), alpha); } public static Color toProto(java.awt.Color color) { float red = (float) color.getRed(); float green = (float) color.getGreen(); float blue = (float) color.getBlue(); float denominator = 255.0; Color.Builder resultBuilder = Color .newBuilder() .setRed(red / denominator) .setGreen(green / denominator) .setBlue(blue / denominator); int alpha = color.getAlpha(); if (alpha != 255) { result.setAlpha( FloatValue .newBuilder() .setValue(((float) alpha) / denominator) .build()); } return resultBuilder.build(); } // ... Example (iOS / Obj-C): // ... static UIColor* fromProto(Color* protocolor) { float red = [protocolor red]; float green = [protocolor green]; float blue = [protocolor blue]; FloatValue* alpha_wrapper = [protocolor alpha]; float alpha = 1.0; if (alpha_wrapper != nil) { alpha = [alpha_wrapper value]; } return [UIColor colorWithRed:red green:green blue:blue alpha:alpha]; } static Color* toProto(UIColor* color) { CGFloat red, green, blue, alpha; if (![color getRed:&red green:&green blue:&blue alpha:&alpha]) { return nil; } Color* result = [[Color alloc] init]; [result setRed:red]; [result setGreen:green]; [result setBlue:blue]; if (alpha <= 0.9999) { [result setAlpha:floatWrapperWithValue(alpha)]; } [result autorelease]; return result; } // ... Example (JavaScript): // ... var protoToCssColor = function(rgb_color) { var redFrac = rgb_color.red || 0.0; var greenFrac = rgb_color.green || 0.0; var blueFrac = rgb_color.blue || 0.0; var red = Math.floor(redFrac * 255); var green = Math.floor(greenFrac * 255); var blue = Math.floor(blueFrac * 255); if (!('alpha' in rgb_color)) { return rgbToCssColor(red, green, blue); } var alphaFrac = rgb_color.alpha.value || 0.0; var rgbParams = [red, green, blue].join(','); return ['rgba(', rgbParams, ',', alphaFrac, ')'].join(''); }; var rgbToCssColor = function(red, green, blue) { var rgbNumber = new Number((red << 16) | (green << 8) | blue); var hexString = rgbNumber.toString(16); var missingZeros = 6 - hexString.length; var resultBuilder = ['#']; for (var i = 0; i < missingZeros; i++) { resultBuilder.push('0'); } resultBuilder.push(hexString); return resultBuilder.join(''); }; // ...

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|alpha|number(float)|false|none|The fraction of this color that should be applied to the pixel. That is, the final pixel color is defined by the equation: `pixel color = alpha * (this color) + (1.0 - alpha) * (background color)` This means that a value of 1.0 corresponds to a solid color, whereas a value of 0.0 corresponds to a completely transparent color. This uses a wrapper message rather than a simple float scalar so that it is possible to distinguish between a default value and the value being unset. If omitted, this color object is rendered as a solid color (as if the alpha value had been explicitly given a value of 1.0).|
|blue|number(float)|false|none|The amount of blue in the color as a value in the interval [0, 1].|
|green|number(float)|false|none|The amount of green in the color as a value in the interval [0, 1].|
|red|number(float)|false|none|The amount of red in the color as a value in the interval [0, 1].|

<h2 id="tocS_CommonEventObject">CommonEventObject</h2>
<!-- backwards compatibility -->
<a id="schemacommoneventobject"></a>
<a id="schema_CommonEventObject"></a>
<a id="tocScommoneventobject"></a>
<a id="tocscommoneventobject"></a>

```json
{
  "formInputs": {
    "property1": {
      "dateInput": {
        "msSinceEpoch": "string"
      },
      "dateTimeInput": {
        "hasDate": true,
        "hasTime": true,
        "msSinceEpoch": "string"
      },
      "stringInputs": {
        "value": [
          "string"
        ]
      },
      "timeInput": {
        "hours": 0,
        "minutes": 0
      }
    },
    "property2": {
      "dateInput": {
        "msSinceEpoch": "string"
      },
      "dateTimeInput": {
        "hasDate": true,
        "hasTime": true,
        "msSinceEpoch": "string"
      },
      "stringInputs": {
        "value": [
          "string"
        ]
      },
      "timeInput": {
        "hours": 0,
        "minutes": 0
      }
    }
  },
  "hostApp": "UNSPECIFIED_HOST_APP",
  "invokedFunction": "string",
  "parameters": {
    "property1": "string",
    "property2": "string"
  },
  "platform": "UNKNOWN_PLATFORM",
  "timeZone": {
    "id": "string",
    "offset": 0
  },
  "userLocale": "string"
}
```

Represents information about the user's client, such as locale, host app, and platform. For Chat apps, `CommonEventObject` includes data submitted by users interacting with cards, like data entered in [dialogs](https://developers.google.com/chat/how-tos/dialogs).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|formInputs|object|false|none|A map containing the values that a user inputs in a widget from a card or dialog. The map keys are the string IDs assigned to each widget, and the values represent inputs to the widget. For details, see [Process information inputted by users](https://developers.google.com/chat/ui/read-form-data).|
|hostApp|string|false|none|The hostApp enum which indicates the app the add-on is invoked from. Always `CHAT` for Chat apps.|
|invokedFunction|string|false|none|Name of the invoked function associated with the widget. Only set for Chat apps.|
|parameters|object|false|none|Custom [parameters](/chat/api/reference/rest/v1/cards#ActionParameter) passed to the invoked function. Both keys and values must be strings.|
|platform|string|false|none|The platform enum which indicates the platform where the event originates (`WEB`, `IOS`, or `ANDROID`). Not supported by Chat apps.|
|timeZone|[TimeZone](#schematimezone)|false|none|The timezone ID and offset from Coordinated Universal Time (UTC). Only supported for the event types [`CARD_CLICKED`](https://developers.google.com/chat/api/reference/rest/v1/EventType#ENUM_VALUES.CARD_CLICKED) and [`SUBMIT_DIALOG`](https://developers.google.com/chat/api/reference/rest/v1/DialogEventType#ENUM_VALUES.SUBMIT_DIALOG).|
|userLocale|string|false|none|The full `locale.displayName` in the format of [ISO 639 language code]-[ISO 3166 country/region code] such as "en-US".|

#### Enumerated Values

|Property|Value|
|---|---|
|hostApp|UNSPECIFIED_HOST_APP|
|hostApp|GMAIL|
|hostApp|CALENDAR|
|hostApp|DRIVE|
|hostApp|DEMO|
|hostApp|DOCS|
|hostApp|MEET|
|hostApp|SHEETS|
|hostApp|SLIDES|
|hostApp|DRAWINGS|
|hostApp|CHAT|
|hostApp|CHAT_IN_GMAIL|
|platform|UNKNOWN_PLATFORM|
|platform|WEB|
|platform|IOS|
|platform|ANDROID|

<h2 id="tocS_CompleteImportSpaceRequest">CompleteImportSpaceRequest</h2>
<!-- backwards compatibility -->
<a id="schemacompleteimportspacerequest"></a>
<a id="schema_CompleteImportSpaceRequest"></a>
<a id="tocScompleteimportspacerequest"></a>
<a id="tocscompleteimportspacerequest"></a>

```json
{}
```

Request message for completing the import process for a space.

<h2 id="tocS_CompleteImportSpaceResponse">CompleteImportSpaceResponse</h2>
<!-- backwards compatibility -->
<a id="schemacompleteimportspaceresponse"></a>
<a id="schema_CompleteImportSpaceResponse"></a>
<a id="tocScompleteimportspaceresponse"></a>
<a id="tocscompleteimportspaceresponse"></a>

```json
{
  "space": {
    "adminInstalled": true,
    "createTime": "string",
    "displayName": "string",
    "externalUserAllowed": true,
    "importMode": true,
    "name": "string",
    "singleUserBotDm": true,
    "spaceDetails": {
      "description": "string",
      "guidelines": "string"
    },
    "spaceHistoryState": "HISTORY_STATE_UNSPECIFIED",
    "spaceThreadingState": "SPACE_THREADING_STATE_UNSPECIFIED",
    "spaceType": "SPACE_TYPE_UNSPECIFIED",
    "threaded": true,
    "type": "TYPE_UNSPECIFIED"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|space|[Space](#schemaspace)|false|none|The import mode space.|

<h2 id="tocS_CustomEmoji">CustomEmoji</h2>
<!-- backwards compatibility -->
<a id="schemacustomemoji"></a>
<a id="schema_CustomEmoji"></a>
<a id="tocScustomemoji"></a>
<a id="tocscustomemoji"></a>

```json
{
  "uid": "string"
}
```

Represents a custom emoji.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|uid|string|false|none|Unique key for the custom emoji resource.|

<h2 id="tocS_DateInput">DateInput</h2>
<!-- backwards compatibility -->
<a id="schemadateinput"></a>
<a id="schema_DateInput"></a>
<a id="tocSdateinput"></a>
<a id="tocsdateinput"></a>

```json
{
  "msSinceEpoch": "string"
}
```

Date input values.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|msSinceEpoch|string(int64)|false|none|Time since epoch time, in milliseconds.|

<h2 id="tocS_DateTimeInput">DateTimeInput</h2>
<!-- backwards compatibility -->
<a id="schemadatetimeinput"></a>
<a id="schema_DateTimeInput"></a>
<a id="tocSdatetimeinput"></a>
<a id="tocsdatetimeinput"></a>

```json
{
  "hasDate": true,
  "hasTime": true,
  "msSinceEpoch": "string"
}
```

Date and time input values.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|hasDate|boolean|false|none|Whether the `datetime` input includes a calendar date.|
|hasTime|boolean|false|none|Whether the `datetime` input includes a timestamp.|
|msSinceEpoch|string(int64)|false|none|Time since epoch time, in milliseconds.|

<h2 id="tocS_DeletionMetadata">DeletionMetadata</h2>
<!-- backwards compatibility -->
<a id="schemadeletionmetadata"></a>
<a id="schema_DeletionMetadata"></a>
<a id="tocSdeletionmetadata"></a>
<a id="tocsdeletionmetadata"></a>

```json
{
  "deletionType": "DELETION_TYPE_UNSPECIFIED"
}
```

Information about a deleted message. A message is deleted when `delete_time` is set.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|deletionType|string|false|none|Indicates who deleted the message.|

#### Enumerated Values

|Property|Value|
|---|---|
|deletionType|DELETION_TYPE_UNSPECIFIED|
|deletionType|CREATOR|
|deletionType|SPACE_OWNER|
|deletionType|ADMIN|
|deletionType|APP_MESSAGE_EXPIRY|
|deletionType|CREATOR_VIA_APP|
|deletionType|SPACE_OWNER_VIA_APP|

<h2 id="tocS_DeprecatedEvent">DeprecatedEvent</h2>
<!-- backwards compatibility -->
<a id="schemadeprecatedevent"></a>
<a id="schema_DeprecatedEvent"></a>
<a id="tocSdeprecatedevent"></a>
<a id="tocsdeprecatedevent"></a>

```json
{
  "action": {
    "actionMethodName": "string",
    "parameters": [
      {
        "key": "string",
        "value": "string"
      }
    ]
  },
  "common": {
    "formInputs": {
      "property1": {
        "dateInput": {
          "msSinceEpoch": "string"
        },
        "dateTimeInput": {
          "hasDate": true,
          "hasTime": true,
          "msSinceEpoch": "string"
        },
        "stringInputs": {
          "value": [
            "string"
          ]
        },
        "timeInput": {
          "hours": 0,
          "minutes": 0
        }
      },
      "property2": {
        "dateInput": {
          "msSinceEpoch": "string"
        },
        "dateTimeInput": {
          "hasDate": true,
          "hasTime": true,
          "msSinceEpoch": "string"
        },
        "stringInputs": {
          "value": [
            "string"
          ]
        },
        "timeInput": {
          "hours": 0,
          "minutes": 0
        }
      }
    },
    "hostApp": "UNSPECIFIED_HOST_APP",
    "invokedFunction": "string",
    "parameters": {
      "property1": "string",
      "property2": "string"
    },
    "platform": "UNKNOWN_PLATFORM",
    "timeZone": {
      "id": "string",
      "offset": 0
    },
    "userLocale": "string"
  },
  "configCompleteRedirectUrl": "string",
  "dialogEventType": "TYPE_UNSPECIFIED",
  "eventTime": "string",
  "isDialogEvent": true,
  "message": {
    "actionResponse": {
      "dialogAction": {
        "actionStatus": {
          "statusCode": "OK",
          "userFacingMessage": "string"
        },
        "dialog": {
          "body": {
            "cardActions": [
              {}
            ],
            "displayStyle": "DISPLAY_STYLE_UNSPECIFIED",
            "fixedFooter": {},
            "header": {
              "imageAltText": "string",
              "imageType": "SQUARE",
              "imageUrl": "string",
              "subtitle": "string",
              "title": "string"
            },
            "name": "string",
            "peekCardHeader": {
              "imageAltText": "string",
              "imageType": "SQUARE",
              "imageUrl": "string",
              "subtitle": "string",
              "title": "string"
            },
            "sectionDividerStyle": "DIVIDER_STYLE_UNSPECIFIED",
            "sections": [
              {}
            ]
          }
        }
      },
      "type": "TYPE_UNSPECIFIED",
      "updatedWidget": {
        "suggestions": {
          "items": [
            {
              "bottomText": "string",
              "selected": true,
              "startIconUri": "string",
              "text": "string",
              "value": "string"
            }
          ]
        },
        "widget": "string"
      },
      "url": "string"
    },
    "annotations": [
      {
        "length": 0,
        "slashCommand": {
          "bot": {
            "displayName": "string",
            "domainId": "string",
            "isAnonymous": true,
            "name": "string",
            "type": "TYPE_UNSPECIFIED"
          },
          "commandId": "string",
          "commandName": "string",
          "triggersDialog": true,
          "type": "TYPE_UNSPECIFIED"
        },
        "startIndex": 0,
        "type": "ANNOTATION_TYPE_UNSPECIFIED",
        "userMention": {
          "type": "TYPE_UNSPECIFIED",
          "user": {
            "displayName": "string",
            "domainId": "string",
            "isAnonymous": true,
            "name": "string",
            "type": "TYPE_UNSPECIFIED"
          }
        }
      }
    ],
    "argumentText": "string",
    "attachedGifs": [
      {
        "uri": "string"
      }
    ],
    "attachment": [
      {
        "attachmentDataRef": {
          "attachmentUploadToken": "string",
          "resourceName": "string"
        },
        "contentName": "string",
        "contentType": "string",
        "downloadUri": "string",
        "driveDataRef": {
          "driveFileId": "string"
        },
        "name": "string",
        "source": "SOURCE_UNSPECIFIED",
        "thumbnailUri": "string"
      }
    ],
    "cards": [
      {
        "cardActions": [
          {
            "actionLabel": "string",
            "onClick": {
              "action": {
                "actionMethodName": "string",
                "parameters": [
                  {
                    "key": "string",
                    "value": "string"
                  }
                ]
              },
              "openLink": {
                "url": "string"
              }
            }
          }
        ],
        "header": {
          "imageStyle": "IMAGE_STYLE_UNSPECIFIED",
          "imageUrl": "string",
          "subtitle": "string",
          "title": "string"
        },
        "name": "string",
        "sections": [
          {
            "header": "string",
            "widgets": [
              {
                "buttons": [
                  {
                    "imageButton": {
                      "icon": "ICON_UNSPECIFIED",
                      "iconUrl": "string",
                      "name": "string",
                      "onClick": {
                        "action": {
                          "actionMethodName": "string",
                          "parameters": [
                            {
                              "key": "string",
                              "value": "string"
                            }
                          ]
                        },
                        "openLink": {
                          "url": "string"
                        }
                      }
                    },
                    "textButton": {
                      "onClick": {
                        "action": {
                          "actionMethodName": "string",
                          "parameters": [
                            {
                              "key": "string",
                              "value": "string"
                            }
                          ]
                        },
                        "openLink": {
                          "url": "string"
                        }
                      },
                      "text": "string"
                    }
                  }
                ],
                "image": {
                  "aspectRatio": 0,
                  "imageUrl": "string",
                  "onClick": {
                    "action": {
                      "actionMethodName": "string",
                      "parameters": [
                        {
                          "key": "string",
                          "value": "string"
                        }
                      ]
                    },
                    "openLink": {
                      "url": "string"
                    }
                  }
                },
                "keyValue": {
                  "bottomLabel": "string",
                  "button": {
                    "imageButton": {
                      "icon": "ICON_UNSPECIFIED",
                      "iconUrl": "string",
                      "name": "string",
                      "onClick": {
                        "action": {
                          "actionMethodName": "string",
                          "parameters": [
                            {
                              "key": "string",
                              "value": "string"
                            }
                          ]
                        },
                        "openLink": {
                          "url": "string"
                        }
                      }
                    },
                    "textButton": {
                      "onClick": {
                        "action": {
                          "actionMethodName": "string",
                          "parameters": [
                            {
                              "key": "string",
                              "value": "string"
                            }
                          ]
                        },
                        "openLink": {
                          "url": "string"
                        }
                      },
                      "text": "string"
                    }
                  },
                  "content": "string",
                  "contentMultiline": true,
                  "icon": "ICON_UNSPECIFIED",
                  "iconUrl": "string",
                  "onClick": {
                    "action": {
                      "actionMethodName": "string",
                      "parameters": [
                        {
                          "key": "string",
                          "value": "string"
                        }
                      ]
                    },
                    "openLink": {
                      "url": "string"
                    }
                  },
                  "topLabel": "string"
                },
                "textParagraph": {
                  "text": "string"
                }
              }
            ]
          }
        ]
      }
    ],
    "cardsV2": [
      {
        "card": {
          "cardActions": [
            {}
          ],
          "displayStyle": "DISPLAY_STYLE_UNSPECIFIED",
          "fixedFooter": {},
          "header": {
            "imageAltText": "string",
            "imageType": "SQUARE",
            "imageUrl": "string",
            "subtitle": "string",
            "title": "string"
          },
          "name": "string",
          "peekCardHeader": {
            "imageAltText": "string",
            "imageType": "SQUARE",
            "imageUrl": "string",
            "subtitle": "string",
            "title": "string"
          },
          "sectionDividerStyle": "DIVIDER_STYLE_UNSPECIFIED",
          "sections": [
            {}
          ]
        },
        "cardId": "string"
      }
    ],
    "clientAssignedMessageId": "string",
    "createTime": "string",
    "deleteTime": "string",
    "deletionMetadata": {
      "deletionType": "DELETION_TYPE_UNSPECIFIED"
    },
    "emojiReactionSummaries": [
      {
        "emoji": {
          "customEmoji": {
            "uid": "string"
          },
          "unicode": "string"
        },
        "reactionCount": 0
      }
    ],
    "fallbackText": "string",
    "formattedText": "string",
    "lastUpdateTime": "string",
    "matchedUrl": {
      "url": "string"
    },
    "name": "string",
    "privateMessageViewer": {
      "displayName": "string",
      "domainId": "string",
      "isAnonymous": true,
      "name": "string",
      "type": "TYPE_UNSPECIFIED"
    },
    "quotedMessageMetadata": {
      "lastUpdateTime": "string",
      "name": "string"
    },
    "sender": {
      "displayName": "string",
      "domainId": "string",
      "isAnonymous": true,
      "name": "string",
      "type": "TYPE_UNSPECIFIED"
    },
    "slashCommand": {
      "commandId": "string"
    },
    "space": {
      "adminInstalled": true,
      "createTime": "string",
      "displayName": "string",
      "externalUserAllowed": true,
      "importMode": true,
      "name": "string",
      "singleUserBotDm": true,
      "spaceDetails": {
        "description": "string",
        "guidelines": "string"
      },
      "spaceHistoryState": "HISTORY_STATE_UNSPECIFIED",
      "spaceThreadingState": "SPACE_THREADING_STATE_UNSPECIFIED",
      "spaceType": "SPACE_TYPE_UNSPECIFIED",
      "threaded": true,
      "type": "TYPE_UNSPECIFIED"
    },
    "text": "string",
    "thread": {
      "name": "string",
      "threadKey": "string"
    },
    "threadReply": true
  },
  "space": {
    "adminInstalled": true,
    "createTime": "string",
    "displayName": "string",
    "externalUserAllowed": true,
    "importMode": true,
    "name": "string",
    "singleUserBotDm": true,
    "spaceDetails": {
      "description": "string",
      "guidelines": "string"
    },
    "spaceHistoryState": "HISTORY_STATE_UNSPECIFIED",
    "spaceThreadingState": "SPACE_THREADING_STATE_UNSPECIFIED",
    "spaceType": "SPACE_TYPE_UNSPECIFIED",
    "threaded": true,
    "type": "TYPE_UNSPECIFIED"
  },
  "threadKey": "string",
  "token": "string",
  "type": "UNSPECIFIED",
  "user": {
    "displayName": "string",
    "domainId": "string",
    "isAnonymous": true,
    "name": "string",
    "type": "TYPE_UNSPECIFIED"
  }
}
```

A Google Chat app interaction event. To learn about interaction events, see [Receive and respond to interactions with your Google Chat app](https://developers.google.com/chat/api/guides/message-formats). To learn about event types and for example event payloads, see [Types of Google Chat app interaction events](https://developers.google.com/chat/api/guides/message-formats/events).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action|[FormAction](#schemaformaction)|false|none|For `CARD_CLICKED` interaction events, the form action data associated when a user clicks a card or dialog. To learn more, see [Read form data input by users on cards](https://developers.google.com/chat/ui/read-form-data).|
|common|[CommonEventObject](#schemacommoneventobject)|false|none|Represents information about the user's client, such as locale, host app, and platform. For Chat apps, `CommonEventObject` includes information submitted by users interacting with [dialogs](https://developers.google.com/chat/how-tos/dialogs), like data entered on a card.|
|configCompleteRedirectUrl|string|false|none|The URL the Chat app should redirect the user to after they have completed an authorization or configuration flow outside of Google Chat. For more information, see [Connect a Chat app with other services & tools](https://developers.google.com/chat/how-tos/connect-web-services-tools).|
|dialogEventType|string|false|none|The type of [dialog](https://developers.google.com/chat/how-tos/dialogs) interaction event received.|
|eventTime|string(google-datetime)|false|none|The timestamp indicating when the interaction event occurred.|
|isDialogEvent|boolean|false|none|For `CARD_CLICKED` interaction events, whether the user interacted with a [dialog](https://developers.google.com/chat/how-tos/dialogs).|
|message|[Message](#schemamessage)|false|none|The message that triggered the interaction event, if applicable.|
|space|[Space](#schemaspace)|false|none|The space in which the interaction event occurred.|
|threadKey|string|false|none|The Chat app-defined key for the thread related to the interaction event. See [`spaces.messages.thread.threadKey`](/chat/api/reference/rest/v1/spaces.messages#Thread.FIELDS.thread_key) for more information.|
|token|string|false|none|A secret value that legacy Chat apps can use to verify if a request is from Google. Google randomly generates the token, and its value remains static. You can obtain, revoke, or regenerate the token from the [Chat API configuration page](https://console.cloud.google.com/apis/api/chat.googleapis.com/hangouts-chat) in the Google Cloud Console. Modern Chat apps don't use this field. It is absent from API responses and the [Chat API configuration page](https://console.cloud.google.com/apis/api/chat.googleapis.com/hangouts-chat).|
|type|string|false|none|The type of interaction event. For details, see [Types of Google Chat app interaction events](https://developers.google.com/chat/api/guides/message-formats/events).|
|user|[User](#schemauser)|false|none|The user that triggered the interaction event.|

#### Enumerated Values

|Property|Value|
|---|---|
|dialogEventType|TYPE_UNSPECIFIED|
|dialogEventType|REQUEST_DIALOG|
|dialogEventType|SUBMIT_DIALOG|
|dialogEventType|CANCEL_DIALOG|
|type|UNSPECIFIED|
|type|MESSAGE|
|type|ADDED_TO_SPACE|
|type|REMOVED_FROM_SPACE|
|type|CARD_CLICKED|
|type|WIDGET_UPDATED|

<h2 id="tocS_Dialog">Dialog</h2>
<!-- backwards compatibility -->
<a id="schemadialog"></a>
<a id="schema_Dialog"></a>
<a id="tocSdialog"></a>
<a id="tocsdialog"></a>

```json
{
  "body": {
    "cardActions": [
      {}
    ],
    "displayStyle": "DISPLAY_STYLE_UNSPECIFIED",
    "fixedFooter": {},
    "header": {
      "imageAltText": "string",
      "imageType": "SQUARE",
      "imageUrl": "string",
      "subtitle": "string",
      "title": "string"
    },
    "name": "string",
    "peekCardHeader": {
      "imageAltText": "string",
      "imageType": "SQUARE",
      "imageUrl": "string",
      "subtitle": "string",
      "title": "string"
    },
    "sectionDividerStyle": "DIVIDER_STYLE_UNSPECIFIED",
    "sections": [
      {}
    ]
  }
}
```

Wrapper around the card body of the dialog.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|body|[GoogleAppsCardV1Card](#schemagoogleappscardv1card)|false|none|Input only. Body of the dialog, which is rendered in a modal. Google Chat apps don't support the following card entities: `DateTimePicker`, `OnChangeAction`.|

<h2 id="tocS_DialogAction">DialogAction</h2>
<!-- backwards compatibility -->
<a id="schemadialogaction"></a>
<a id="schema_DialogAction"></a>
<a id="tocSdialogaction"></a>
<a id="tocsdialogaction"></a>

```json
{
  "actionStatus": {
    "statusCode": "OK",
    "userFacingMessage": "string"
  },
  "dialog": {
    "body": {
      "cardActions": [
        {}
      ],
      "displayStyle": "DISPLAY_STYLE_UNSPECIFIED",
      "fixedFooter": {},
      "header": {
        "imageAltText": "string",
        "imageType": "SQUARE",
        "imageUrl": "string",
        "subtitle": "string",
        "title": "string"
      },
      "name": "string",
      "peekCardHeader": {
        "imageAltText": "string",
        "imageType": "SQUARE",
        "imageUrl": "string",
        "subtitle": "string",
        "title": "string"
      },
      "sectionDividerStyle": "DIVIDER_STYLE_UNSPECIFIED",
      "sections": [
        {}
      ]
    }
  }
}
```

Contains a [dialog](https://developers.google.com/chat/how-tos/dialogs) and request status code.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|actionStatus|[ActionStatus](#schemaactionstatus)|false|none|Input only. Status for a request to either invoke or submit a [dialog](https://developers.google.com/chat/how-tos/dialogs). Displays a status and message to users, if necessary. For example, in case of an error or success.|
|dialog|[Dialog](#schemadialog)|false|none|Input only. [Dialog](https://developers.google.com/chat/how-tos/dialogs) for the request.|

<h2 id="tocS_DriveDataRef">DriveDataRef</h2>
<!-- backwards compatibility -->
<a id="schemadrivedataref"></a>
<a id="schema_DriveDataRef"></a>
<a id="tocSdrivedataref"></a>
<a id="tocsdrivedataref"></a>

```json
{
  "driveFileId": "string"
}
```

A reference to the data of a drive attachment.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|driveFileId|string|false|none|The ID for the drive file. Use with the Drive API.|

<h2 id="tocS_Emoji">Emoji</h2>
<!-- backwards compatibility -->
<a id="schemaemoji"></a>
<a id="schema_Emoji"></a>
<a id="tocSemoji"></a>
<a id="tocsemoji"></a>

```json
{
  "customEmoji": {
    "uid": "string"
  },
  "unicode": "string"
}
```

An emoji that is used as a reaction to a message.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|customEmoji|[CustomEmoji](#schemacustomemoji)|false|none|Output only. A custom emoji.|
|unicode|string|false|none|A basic emoji represented by a unicode string.|

<h2 id="tocS_EmojiReactionSummary">EmojiReactionSummary</h2>
<!-- backwards compatibility -->
<a id="schemaemojireactionsummary"></a>
<a id="schema_EmojiReactionSummary"></a>
<a id="tocSemojireactionsummary"></a>
<a id="tocsemojireactionsummary"></a>

```json
{
  "emoji": {
    "customEmoji": {
      "uid": "string"
    },
    "unicode": "string"
  },
  "reactionCount": 0
}
```

The number of people who reacted to a message with a specific emoji.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|emoji|[Emoji](#schemaemoji)|false|none|Emoji associated with the reactions.|
|reactionCount|integer(int32)|false|none|The total number of reactions using the associated emoji.|

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

<h2 id="tocS_FormAction">FormAction</h2>
<!-- backwards compatibility -->
<a id="schemaformaction"></a>
<a id="schema_FormAction"></a>
<a id="tocSformaction"></a>
<a id="tocsformaction"></a>

```json
{
  "actionMethodName": "string",
  "parameters": [
    {
      "key": "string",
      "value": "string"
    }
  ]
}
```

A form action describes the behavior when the form is submitted. For example, you can invoke Apps Script to handle the form.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|actionMethodName|string|false|none|The method name is used to identify which part of the form triggered the form submission. This information is echoed back to the Chat app as part of the card click event. You can use the same method name for several elements that trigger a common behavior.|
|parameters|[[ActionParameter](#schemaactionparameter)]|false|none|List of action parameters.|

<h2 id="tocS_GoogleAppsCardV1Action">GoogleAppsCardV1Action</h2>
<!-- backwards compatibility -->
<a id="schemagoogleappscardv1action"></a>
<a id="schema_GoogleAppsCardV1Action"></a>
<a id="tocSgoogleappscardv1action"></a>
<a id="tocsgoogleappscardv1action"></a>

```json
{
  "function": "string",
  "interaction": "INTERACTION_UNSPECIFIED",
  "loadIndicator": "SPINNER",
  "parameters": [
    {
      "key": "string",
      "value": "string"
    }
  ],
  "persistValues": true
}
```

An action that describes the behavior when the form is submitted. For example, you can invoke an Apps Script script to handle the form. If the action is triggered, the form values are sent to the server. [Google Workspace Add-ons and Chat apps](https://developers.google.com/workspace/extend):

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|function|string|false|none|A custom function to invoke when the containing element is clicked or othrwise activated. For example usage, see [Create interactive cards](https://developers.google.com/chat/how-tos/cards-onclick).|
|interaction|string|false|none|Optional. Required when opening a [dialog](https://developers.google.com/chat/how-tos/dialogs). What to do in response to an interaction with a user, such as a user clicking a button in a card message. If unspecified, the app responds by executing an `action`—like opening a link or running a function—as normal. By specifying an `interaction`, the app can respond in special interactive ways. For example, by setting `interaction` to `OPEN_DIALOG`, the app can open a [dialog](https://developers.google.com/chat/how-tos/dialogs). When specified, a loading indicator isn't shown. If specified for an add-on, the entire card is stripped and nothing is shown in the client. [Google Chat apps](https://developers.google.com/chat):|
|loadIndicator|string|false|none|Specifies the loading indicator that the action displays while making the call to the action.|
|parameters|[[GoogleAppsCardV1ActionParameter](#schemagoogleappscardv1actionparameter)]|false|none|List of action parameters.|
|persistValues|boolean|false|none|Indicates whether form values persist after the action. The default value is `false`. If `true`, form values remain after the action is triggered. To let the user make changes while the action is being processed, set [`LoadIndicator`](https://developers.google.com/workspace/add-ons/reference/rpc/google.apps.card.v1#loadindicator) to `NONE`. For [card messages](https://developers.google.com/chat/api/guides/v1/messages/create#create) in Chat apps, you must also set the action's [`ResponseType`](https://developers.google.com/chat/api/reference/rest/v1/spaces.messages#responsetype) to `UPDATE_MESSAGE` and use the same [`card_id`](https://developers.google.com/chat/api/reference/rest/v1/spaces.messages#CardWithId) from the card that contained the action. If `false`, the form values are cleared when the action is triggered. To prevent the user from making changes while the action is being processed, set [`LoadIndicator`](https://developers.google.com/workspace/add-ons/reference/rpc/google.apps.card.v1#loadindicator) to `SPINNER`.|

#### Enumerated Values

|Property|Value|
|---|---|
|interaction|INTERACTION_UNSPECIFIED|
|interaction|OPEN_DIALOG|
|loadIndicator|SPINNER|
|loadIndicator|NONE|

<h2 id="tocS_GoogleAppsCardV1ActionParameter">GoogleAppsCardV1ActionParameter</h2>
<!-- backwards compatibility -->
<a id="schemagoogleappscardv1actionparameter"></a>
<a id="schema_GoogleAppsCardV1ActionParameter"></a>
<a id="tocSgoogleappscardv1actionparameter"></a>
<a id="tocsgoogleappscardv1actionparameter"></a>

```json
{
  "key": "string",
  "value": "string"
}
```

List of string parameters to supply when the action method is invoked. For example, consider three snooze buttons: snooze now, snooze one day, or snooze next week. You might use `action method = snooze()`, passing the snooze type and snooze time in the list of string parameters. To learn more, see [`CommonEventObject`](https://developers.google.com/chat/api/reference/rest/v1/Event#commoneventobject). [Google Workspace Add-ons and Chat apps](https://developers.google.com/workspace/extend):

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|key|string|false|none|The name of the parameter for the action script.|
|value|string|false|none|The value of the parameter.|

<h2 id="tocS_GoogleAppsCardV1BorderStyle">GoogleAppsCardV1BorderStyle</h2>
<!-- backwards compatibility -->
<a id="schemagoogleappscardv1borderstyle"></a>
<a id="schema_GoogleAppsCardV1BorderStyle"></a>
<a id="tocSgoogleappscardv1borderstyle"></a>
<a id="tocsgoogleappscardv1borderstyle"></a>

```json
{
  "cornerRadius": 0,
  "strokeColor": {
    "alpha": 0,
    "blue": 0,
    "green": 0,
    "red": 0
  },
  "type": "BORDER_TYPE_UNSPECIFIED"
}
```

The style options for the border of a card or widget, including the border type and color. [Google Workspace Add-ons and Chat apps](https://developers.google.com/workspace/extend):

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cornerRadius|integer(int32)|false|none|The corner radius for the border.|
|strokeColor|[Color](#schemacolor)|false|none|The colors to use when the type is `BORDER_TYPE_STROKE`.|
|type|string|false|none|The border type.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|BORDER_TYPE_UNSPECIFIED|
|type|NO_BORDER|
|type|STROKE|

<h2 id="tocS_GoogleAppsCardV1Button">GoogleAppsCardV1Button</h2>
<!-- backwards compatibility -->
<a id="schemagoogleappscardv1button"></a>
<a id="schema_GoogleAppsCardV1Button"></a>
<a id="tocSgoogleappscardv1button"></a>
<a id="tocsgoogleappscardv1button"></a>

```json
{
  "altText": "string",
  "color": {
    "alpha": 0,
    "blue": 0,
    "green": 0,
    "red": 0
  },
  "disabled": true,
  "icon": {
    "altText": "string",
    "iconUrl": "string",
    "imageType": "SQUARE",
    "knownIcon": "string"
  },
  "onClick": {
    "action": {
      "function": "string",
      "interaction": "INTERACTION_UNSPECIFIED",
      "loadIndicator": "SPINNER",
      "parameters": [
        {
          "key": "string",
          "value": "string"
        }
      ],
      "persistValues": true
    },
    "card": {},
    "openDynamicLinkAction": {
      "function": "string",
      "interaction": "INTERACTION_UNSPECIFIED",
      "loadIndicator": "SPINNER",
      "parameters": [
        {
          "key": "string",
          "value": "string"
        }
      ],
      "persistValues": true
    },
    "openLink": {
      "onClose": "NOTHING",
      "openAs": "FULL_SIZE",
      "url": "string"
    }
  },
  "text": "string"
}
```

A text, icon, or text and icon button that users can click. For an example in Google Chat apps, see [Button list](https://developers.google.com/chat/ui/widgets/button-list). To make an image a clickable button, specify an `Image` (not an `ImageComponent`) and set an `onClick` action. [Google Workspace Add-ons and Chat apps](https://developers.google.com/workspace/extend):

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|altText|string|false|none|The alternative text that's used for accessibility. Set descriptive text that lets users know what the button does. For example, if a button opens a hyperlink, you might write: "Opens a new browser tab and navigates to the Google Chat developer documentation at https://developers.google.com/chat".|
|color|[Color](#schemacolor)|false|none|If set, the button is filled with a solid background color and the font color changes to maintain contrast with the background color. For example, setting a blue background likely results in white text. If unset, the image background is white and the font color is blue. For red, green, and blue, the value of each field is a `float` number that you can express in either of two ways: as a number between 0 and 255 divided by 255 (153/255), or as a value between 0 and 1 (0.6). 0 represents the absence of a color and 1 or 255/255 represent the full presence of that color on the RGB scale. Optionally set `alpha`, which sets a level of transparency using this equation: ``` pixel color = alpha * (this color) + (1.0 - alpha) * (background color) ``` For `alpha`, a value of `1` corresponds with a solid color, and a value of `0` corresponds with a completely transparent color. For example, the following color represents a half transparent red: ``` "color": { "red": 1, "green": 0, "blue": 0, "alpha": 0.5 } ```|
|disabled|boolean|false|none|If `true`, the button is displayed in an inactive state and doesn't respond to user actions.|
|icon|[GoogleAppsCardV1Icon](#schemagoogleappscardv1icon)|false|none|The icon image. If both `icon` and `text` are set, then the icon appears before the text.|
|onClick|[GoogleAppsCardV1OnClick](#schemagoogleappscardv1onclick)|false|none|Required. The action to perform when a user clicks the button, such as opening a hyperlink or running a custom function.|
|text|string|false|none|The text displayed inside the button.|

<h2 id="tocS_GoogleAppsCardV1ButtonList">GoogleAppsCardV1ButtonList</h2>
<!-- backwards compatibility -->
<a id="schemagoogleappscardv1buttonlist"></a>
<a id="schema_GoogleAppsCardV1ButtonList"></a>
<a id="tocSgoogleappscardv1buttonlist"></a>
<a id="tocsgoogleappscardv1buttonlist"></a>

```json
{
  "buttons": [
    {
      "altText": "string",
      "color": {
        "alpha": 0,
        "blue": 0,
        "green": 0,
        "red": 0
      },
      "disabled": true,
      "icon": {
        "altText": "string",
        "iconUrl": "string",
        "imageType": "SQUARE",
        "knownIcon": "string"
      },
      "onClick": {},
      "text": "string"
    }
  ]
}
```

A list of buttons layed out horizontally. For an example in Google Chat apps, see [Button list](https://developers.google.com/chat/ui/widgets/button-list). [Google Workspace Add-ons and Chat apps](https://developers.google.com/workspace/extend):

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|buttons|[[GoogleAppsCardV1Button](#schemagoogleappscardv1button)]|false|none|An array of buttons.|

<h2 id="tocS_GoogleAppsCardV1Card">GoogleAppsCardV1Card</h2>
<!-- backwards compatibility -->
<a id="schemagoogleappscardv1card"></a>
<a id="schema_GoogleAppsCardV1Card"></a>
<a id="tocSgoogleappscardv1card"></a>
<a id="tocsgoogleappscardv1card"></a>

```json
{
  "cardActions": [
    {
      "actionLabel": "string",
      "onClick": {}
    }
  ],
  "displayStyle": "DISPLAY_STYLE_UNSPECIFIED",
  "fixedFooter": {
    "primaryButton": {},
    "secondaryButton": {}
  },
  "header": {
    "imageAltText": "string",
    "imageType": "SQUARE",
    "imageUrl": "string",
    "subtitle": "string",
    "title": "string"
  },
  "name": "string",
  "peekCardHeader": {
    "imageAltText": "string",
    "imageType": "SQUARE",
    "imageUrl": "string",
    "subtitle": "string",
    "title": "string"
  },
  "sectionDividerStyle": "DIVIDER_STYLE_UNSPECIFIED",
  "sections": [
    {
      "collapsible": true,
      "header": "string",
      "uncollapsibleWidgetsCount": 0,
      "widgets": [
        {}
      ]
    }
  ]
}
```

A card interface displayed in a Google Chat message or Google Workspace Add-on. Cards support a defined layout, interactive UI elements like buttons, and rich media like images. Use cards to present detailed information, gather information from users, and guide users to take a next step. [Card builder](https://addons.gsuite.google.com/uikit/builder) To learn how to build cards, see the following documentation: * For Google Chat apps, see [Design dynamic, interactive, and consistent UIs with cards](https://developers.google.com/chat/ui). * For Google Workspace Add-ons, see [Card-based interfaces](https://developers.google.com/apps-script/add-ons/concepts/cards). **Example: Card message for a Google Chat app** ![Example contact card](https://developers.google.com/chat/images/card_api_reference.png) To create the sample card message in Google Chat, use the following JSON: ``` { "cardsV2": [ { "cardId": "unique-card-id", "card": { "header": { "title": "Sasha", "subtitle": "Software Engineer", "imageUrl": "https://developers.google.com/chat/images/quickstart-app-avatar.png", "imageType": "CIRCLE", "imageAltText": "Avatar for Sasha", }, "sections": [ { "header": "Contact Info", "collapsible": true, "uncollapsibleWidgetsCount": 1, "widgets": [ { "decoratedText": { "startIcon": { "knownIcon": "EMAIL", }, "text": "sasha@example.com", } }, { "decoratedText": { "startIcon": { "knownIcon": "PERSON", }, "text": "Online", }, }, { "decoratedText": { "startIcon": { "knownIcon": "PHONE", }, "text": "+1 (555) 555-1234", } }, { "buttonList": { "buttons": [ { "text": "Share", "onClick": { "openLink": { "url": "https://example.com/share", } } }, { "text": "Edit", "onClick": { "action": { "function": "goToView", "parameters": [ { "key": "viewType", "value": "EDIT", } ], } } }, ], } }, ], }, ], }, } ], } ```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cardActions|[[GoogleAppsCardV1CardAction](#schemagoogleappscardv1cardaction)]|false|none|The card's actions. Actions are added to the card's toolbar menu. [Google Workspace Add-ons](https://developers.google.com/workspace/add-ons): For example, the following JSON constructs a card action menu with `Settings` and `Send Feedback` options: ``` "card_actions": [ { "actionLabel": "Settings", "onClick": { "action": { "functionName": "goToView", "parameters": [ { "key": "viewType", "value": "SETTING" } ], "loadIndicator": "LoadIndicator.SPINNER" } } }, { "actionLabel": "Send Feedback", "onClick": { "openLink": { "url": "https://example.com/feedback" } } } ] ```|
|displayStyle|string|false|none|In Google Workspace Add-ons, sets the display properties of the `peekCardHeader`. [Google Workspace Add-ons](https://developers.google.com/workspace/add-ons):|
|fixedFooter|[GoogleAppsCardV1CardFixedFooter](#schemagoogleappscardv1cardfixedfooter)|false|none|The fixed footer shown at the bottom of this card. Setting `fixedFooter` without specifying a `primaryButton` or a `secondaryButton` causes an error. For Chat apps, you can use fixed footers in [dialogs](https://developers.google.com/chat/how-tos/dialogs), but not [card messages](https://developers.google.com/chat/api/guides/v1/messages/create#create). [Google Workspace Add-ons and Chat apps](https://developers.google.com/workspace/extend):|
|header|[GoogleAppsCardV1CardHeader](#schemagoogleappscardv1cardheader)|false|none|The header of the card. A header usually contains a leading image and a title. Headers always appear at the top of a card.|
|name|string|false|none|Name of the card. Used as a card identifier in card navigation. [Google Workspace Add-ons](https://developers.google.com/workspace/add-ons):|
|peekCardHeader|[GoogleAppsCardV1CardHeader](#schemagoogleappscardv1cardheader)|false|none|When displaying contextual content, the peek card header acts as a placeholder so that the user can navigate forward between the homepage cards and the contextual cards. [Google Workspace Add-ons](https://developers.google.com/workspace/add-ons):|
|sectionDividerStyle|string|false|none|The divider style between sections.|
|sections|[[GoogleAppsCardV1Section](#schemagoogleappscardv1section)]|false|none|Contains a collection of widgets. Each section has its own, optional header. Sections are visually separated by a line divider. For an example in Google Chat apps, see [Card section](https://developers.google.com/chat/ui/widgets/card-section).|

#### Enumerated Values

|Property|Value|
|---|---|
|displayStyle|DISPLAY_STYLE_UNSPECIFIED|
|displayStyle|PEEK|
|displayStyle|REPLACE|
|sectionDividerStyle|DIVIDER_STYLE_UNSPECIFIED|
|sectionDividerStyle|SOLID_DIVIDER|
|sectionDividerStyle|NO_DIVIDER|

<h2 id="tocS_GoogleAppsCardV1CardAction">GoogleAppsCardV1CardAction</h2>
<!-- backwards compatibility -->
<a id="schemagoogleappscardv1cardaction"></a>
<a id="schema_GoogleAppsCardV1CardAction"></a>
<a id="tocSgoogleappscardv1cardaction"></a>
<a id="tocsgoogleappscardv1cardaction"></a>

```json
{
  "actionLabel": "string",
  "onClick": {
    "action": {
      "function": "string",
      "interaction": "INTERACTION_UNSPECIFIED",
      "loadIndicator": "SPINNER",
      "parameters": [
        {
          "key": "string",
          "value": "string"
        }
      ],
      "persistValues": true
    },
    "card": {},
    "openDynamicLinkAction": {
      "function": "string",
      "interaction": "INTERACTION_UNSPECIFIED",
      "loadIndicator": "SPINNER",
      "parameters": [
        {
          "key": "string",
          "value": "string"
        }
      ],
      "persistValues": true
    },
    "openLink": {
      "onClose": "NOTHING",
      "openAs": "FULL_SIZE",
      "url": "string"
    }
  }
}
```

A card action is the action associated with the card. For example, an invoice card might include actions such as delete invoice, email invoice, or open the invoice in a browser. [Google Workspace Add-ons](https://developers.google.com/workspace/add-ons):

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|actionLabel|string|false|none|The label that displays as the action menu item.|
|onClick|[GoogleAppsCardV1OnClick](#schemagoogleappscardv1onclick)|false|none|The `onClick` action for this action item.|

<h2 id="tocS_GoogleAppsCardV1CardFixedFooter">GoogleAppsCardV1CardFixedFooter</h2>
<!-- backwards compatibility -->
<a id="schemagoogleappscardv1cardfixedfooter"></a>
<a id="schema_GoogleAppsCardV1CardFixedFooter"></a>
<a id="tocSgoogleappscardv1cardfixedfooter"></a>
<a id="tocsgoogleappscardv1cardfixedfooter"></a>

```json
{
  "primaryButton": {
    "altText": "string",
    "color": {
      "alpha": 0,
      "blue": 0,
      "green": 0,
      "red": 0
    },
    "disabled": true,
    "icon": {
      "altText": "string",
      "iconUrl": "string",
      "imageType": "SQUARE",
      "knownIcon": "string"
    },
    "onClick": {},
    "text": "string"
  },
  "secondaryButton": {
    "altText": "string",
    "color": {
      "alpha": 0,
      "blue": 0,
      "green": 0,
      "red": 0
    },
    "disabled": true,
    "icon": {
      "altText": "string",
      "iconUrl": "string",
      "imageType": "SQUARE",
      "knownIcon": "string"
    },
    "onClick": {},
    "text": "string"
  }
}
```

A persistent (sticky) footer that that appears at the bottom of the card. Setting `fixedFooter` without specifying a `primaryButton` or a `secondaryButton` causes an error. For Chat apps, you can use fixed footers in [dialogs](https://developers.google.com/chat/how-tos/dialogs), but not [card messages](https://developers.google.com/chat/api/guides/v1/messages/create#create). For an example in Google Chat apps, see [Card footer](https://developers.google.com/chat/ui/widgets/card-fixed-footer). [Google Workspace Add-ons and Chat apps](https://developers.google.com/workspace/extend):

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|primaryButton|[GoogleAppsCardV1Button](#schemagoogleappscardv1button)|false|none|The primary button of the fixed footer. The button must be a text button with text and color set.|
|secondaryButton|[GoogleAppsCardV1Button](#schemagoogleappscardv1button)|false|none|The secondary button of the fixed footer. The button must be a text button with text and color set. If `secondaryButton` is set, you must also set `primaryButton`.|

<h2 id="tocS_GoogleAppsCardV1CardHeader">GoogleAppsCardV1CardHeader</h2>
<!-- backwards compatibility -->
<a id="schemagoogleappscardv1cardheader"></a>
<a id="schema_GoogleAppsCardV1CardHeader"></a>
<a id="tocSgoogleappscardv1cardheader"></a>
<a id="tocsgoogleappscardv1cardheader"></a>

```json
{
  "imageAltText": "string",
  "imageType": "SQUARE",
  "imageUrl": "string",
  "subtitle": "string",
  "title": "string"
}
```

Represents a card header. For an example in Google Chat apps, see [Card header](https://developers.google.com/chat/ui/widgets/card-header). [Google Workspace Add-ons and Chat apps](https://developers.google.com/workspace/extend):

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|imageAltText|string|false|none|The alternative text of this image that's used for accessibility.|
|imageType|string|false|none|The shape used to crop the image. [Google Workspace Add-ons and Chat apps](https://developers.google.com/workspace/extend):|
|imageUrl|string|false|none|The HTTPS URL of the image in the card header.|
|subtitle|string|false|none|The subtitle of the card header. If specified, appears on its own line below the `title`.|
|title|string|false|none|Required. The title of the card header. The header has a fixed height: if both a title and subtitle are specified, each takes up one line. If only the title is specified, it takes up both lines.|

#### Enumerated Values

|Property|Value|
|---|---|
|imageType|SQUARE|
|imageType|CIRCLE|

<h2 id="tocS_GoogleAppsCardV1Column">GoogleAppsCardV1Column</h2>
<!-- backwards compatibility -->
<a id="schemagoogleappscardv1column"></a>
<a id="schema_GoogleAppsCardV1Column"></a>
<a id="tocSgoogleappscardv1column"></a>
<a id="tocsgoogleappscardv1column"></a>

```json
{
  "horizontalAlignment": "HORIZONTAL_ALIGNMENT_UNSPECIFIED",
  "horizontalSizeStyle": "HORIZONTAL_SIZE_STYLE_UNSPECIFIED",
  "verticalAlignment": "VERTICAL_ALIGNMENT_UNSPECIFIED",
  "widgets": [
    {
      "buttonList": {},
      "dateTimePicker": {
        "label": "string",
        "name": "string",
        "onChangeAction": {
          "function": "string",
          "interaction": "INTERACTION_UNSPECIFIED",
          "loadIndicator": "SPINNER",
          "parameters": [
            {
              "key": "string",
              "value": "string"
            }
          ],
          "persistValues": true
        },
        "timezoneOffsetDate": 0,
        "type": "DATE_AND_TIME",
        "valueMsEpoch": "string"
      },
      "decoratedText": {},
      "image": {},
      "selectionInput": {
        "externalDataSource": {
          "function": "string",
          "interaction": "INTERACTION_UNSPECIFIED",
          "loadIndicator": "SPINNER",
          "parameters": [
            {
              "key": "string",
              "value": "string"
            }
          ],
          "persistValues": true
        },
        "items": [
          {
            "bottomText": "string",
            "selected": true,
            "startIconUri": "string",
            "text": "string",
            "value": "string"
          }
        ],
        "label": "string",
        "multiSelectMaxSelectedItems": 0,
        "multiSelectMinQueryLength": 0,
        "name": "string",
        "onChangeAction": {
          "function": "string",
          "interaction": "INTERACTION_UNSPECIFIED",
          "loadIndicator": "SPINNER",
          "parameters": [
            {
              "key": "string",
              "value": "string"
            }
          ],
          "persistValues": true
        },
        "platformDataSource": {
          "commonDataSource": "UNKNOWN",
          "hostAppDataSource": {
            "chatDataSource": {
              "spaceDataSource": {
                "defaultToCurrentSpace": true
              }
            }
          }
        },
        "type": "CHECK_BOX"
      },
      "textInput": {
        "autoCompleteAction": {
          "function": "string",
          "interaction": "INTERACTION_UNSPECIFIED",
          "loadIndicator": "SPINNER",
          "parameters": [
            {
              "key": "string",
              "value": "string"
            }
          ],
          "persistValues": true
        },
        "hintText": "string",
        "initialSuggestions": {
          "items": [
            {
              "text": "string"
            }
          ]
        },
        "label": "string",
        "name": "string",
        "onChangeAction": {
          "function": "string",
          "interaction": "INTERACTION_UNSPECIFIED",
          "loadIndicator": "SPINNER",
          "parameters": [
            {
              "key": "string",
              "value": "string"
            }
          ],
          "persistValues": true
        },
        "placeholderText": "string",
        "type": "SINGLE_LINE",
        "value": "string"
      },
      "textParagraph": {
        "text": "string"
      }
    }
  ]
}
```

A column. [Google Chat apps](https://developers.google.com/chat):

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|horizontalAlignment|string|false|none|Specifies whether widgets align to the left, right, or center of a column.|
|horizontalSizeStyle|string|false|none|Specifies how a column fills the width of the card. [Google Chat apps](https://developers.google.com/chat):|
|verticalAlignment|string|false|none|Specifies whether widgets align to the top, bottom, or center of a column. [Google Chat apps](https://developers.google.com/chat):|
|widgets|[[GoogleAppsCardV1Widgets](#schemagoogleappscardv1widgets)]|false|none|An array of widgets included in a column. Widgets appear in the order that they are specified.|

#### Enumerated Values

|Property|Value|
|---|---|
|horizontalAlignment|HORIZONTAL_ALIGNMENT_UNSPECIFIED|
|horizontalAlignment|START|
|horizontalAlignment|CENTER|
|horizontalAlignment|END|
|horizontalSizeStyle|HORIZONTAL_SIZE_STYLE_UNSPECIFIED|
|horizontalSizeStyle|FILL_AVAILABLE_SPACE|
|horizontalSizeStyle|FILL_MINIMUM_SPACE|
|verticalAlignment|VERTICAL_ALIGNMENT_UNSPECIFIED|
|verticalAlignment|CENTER|
|verticalAlignment|TOP|
|verticalAlignment|BOTTOM|

<h2 id="tocS_GoogleAppsCardV1Columns">GoogleAppsCardV1Columns</h2>
<!-- backwards compatibility -->
<a id="schemagoogleappscardv1columns"></a>
<a id="schema_GoogleAppsCardV1Columns"></a>
<a id="tocSgoogleappscardv1columns"></a>
<a id="tocsgoogleappscardv1columns"></a>

```json
{
  "columnItems": [
    {
      "horizontalAlignment": "HORIZONTAL_ALIGNMENT_UNSPECIFIED",
      "horizontalSizeStyle": "HORIZONTAL_SIZE_STYLE_UNSPECIFIED",
      "verticalAlignment": "VERTICAL_ALIGNMENT_UNSPECIFIED",
      "widgets": [
        {}
      ]
    }
  ]
}
```

The `Columns` widget displays up to 2 columns in a card or dialog. You can add widgets to each column; the widgets appear in the order that they are specified. For an example in Google Chat apps, see [Columns](https://developers.google.com/chat/ui/widgets/columns). The height of each column is determined by the taller column. For example, if the first column is taller than the second column, both columns have the height of the first column. Because each column can contain a different number of widgets, you can't define rows or align widgets between the columns. Columns are displayed side-by-side. You can customize the width of each column using the `HorizontalSizeStyle` field. If the user's screen width is too narrow, the second column wraps below the first: * On web, the second column wraps if the screen width is less than or equal to 480 pixels. * On iOS devices, the second column wraps if the screen width is less than or equal to 300 pt. * On Android devices, the second column wraps if the screen width is less than or equal to 320 dp. To include more than 2 columns, or to use rows, use the `Grid` widget. [Google Workspace Add-ons and Chat apps](https://developers.google.com/workspace/extend): Columns for Google Workspace Add-ons are in [Developer Preview](https://developers.google.com/workspace/preview).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|columnItems|[[GoogleAppsCardV1Column](#schemagoogleappscardv1column)]|false|none|An array of columns. You can include up to 2 columns in a card or dialog.|

<h2 id="tocS_GoogleAppsCardV1DateTimePicker">GoogleAppsCardV1DateTimePicker</h2>
<!-- backwards compatibility -->
<a id="schemagoogleappscardv1datetimepicker"></a>
<a id="schema_GoogleAppsCardV1DateTimePicker"></a>
<a id="tocSgoogleappscardv1datetimepicker"></a>
<a id="tocsgoogleappscardv1datetimepicker"></a>

```json
{
  "label": "string",
  "name": "string",
  "onChangeAction": {
    "function": "string",
    "interaction": "INTERACTION_UNSPECIFIED",
    "loadIndicator": "SPINNER",
    "parameters": [
      {
        "key": "string",
        "value": "string"
      }
    ],
    "persistValues": true
  },
  "timezoneOffsetDate": 0,
  "type": "DATE_AND_TIME",
  "valueMsEpoch": "string"
}
```

Lets users input a date, a time, or both a date and a time. For an example in Google Chat apps, see [Date time picker](https://developers.google.com/chat/ui/widgets/date-time-picker). Users can input text or use the picker to select dates and times. If users input an invalid date or time, the picker shows an error that prompts users to input the information correctly. [Google Workspace Add-ons and Chat apps](https://developers.google.com/workspace/extend):

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|label|string|false|none|The text that prompts users to input a date, a time, or a date and time. For example, if users are scheduling an appointment, use a label such as `Appointment date` or `Appointment date and time`.|
|name|string|false|none|The name by which the `DateTimePicker` is identified in a form input event. For details about working with form inputs, see [Receive form data](https://developers.google.com/chat/ui/read-form-data).|
|onChangeAction|[GoogleAppsCardV1Action](#schemagoogleappscardv1action)|false|none|Triggered when the user clicks **Save** or **Clear** from the `DateTimePicker` interface.|
|timezoneOffsetDate|integer(int32)|false|none|The number representing the time zone offset from UTC, in minutes. If set, the `value_ms_epoch` is displayed in the specified time zone. If unset, the value defaults to the user's time zone setting.|
|type|string|false|none|Whether the widget supports inputting a date, a time, or the date and time.|
|valueMsEpoch|string(int64)|false|none|The default value displayed in the widget, in milliseconds since [Unix epoch time](https://en.wikipedia.org/wiki/Unix_time). Specify the value based on the type of picker (`DateTimePickerType`): * `DATE_AND_TIME`: a calendar date and time in UTC. For example, to represent January 1, 2023 at 12:00 PM UTC, use `1672574400000`. * `DATE_ONLY`: a calendar date at 00:00:00 UTC. For example, to represent January 1, 2023, use `1672531200000`. * `TIME_ONLY`: a time in UTC. For example, to represent 12:00 PM, use `43200000` (or `12 * 60 * 60 * 1000`).|

#### Enumerated Values

|Property|Value|
|---|---|
|type|DATE_AND_TIME|
|type|DATE_ONLY|
|type|TIME_ONLY|

<h2 id="tocS_GoogleAppsCardV1DecoratedText">GoogleAppsCardV1DecoratedText</h2>
<!-- backwards compatibility -->
<a id="schemagoogleappscardv1decoratedtext"></a>
<a id="schema_GoogleAppsCardV1DecoratedText"></a>
<a id="tocSgoogleappscardv1decoratedtext"></a>
<a id="tocsgoogleappscardv1decoratedtext"></a>

```json
{
  "bottomLabel": "string",
  "button": {
    "altText": "string",
    "color": {
      "alpha": 0,
      "blue": 0,
      "green": 0,
      "red": 0
    },
    "disabled": true,
    "icon": {
      "altText": "string",
      "iconUrl": "string",
      "imageType": "SQUARE",
      "knownIcon": "string"
    },
    "onClick": {},
    "text": "string"
  },
  "endIcon": {
    "altText": "string",
    "iconUrl": "string",
    "imageType": "SQUARE",
    "knownIcon": "string"
  },
  "icon": {
    "altText": "string",
    "iconUrl": "string",
    "imageType": "SQUARE",
    "knownIcon": "string"
  },
  "onClick": {
    "action": {
      "function": "string",
      "interaction": "INTERACTION_UNSPECIFIED",
      "loadIndicator": "SPINNER",
      "parameters": [
        {
          "key": "string",
          "value": "string"
        }
      ],
      "persistValues": true
    },
    "card": {},
    "openDynamicLinkAction": {
      "function": "string",
      "interaction": "INTERACTION_UNSPECIFIED",
      "loadIndicator": "SPINNER",
      "parameters": [
        {
          "key": "string",
          "value": "string"
        }
      ],
      "persistValues": true
    },
    "openLink": {
      "onClose": "NOTHING",
      "openAs": "FULL_SIZE",
      "url": "string"
    }
  },
  "startIcon": {
    "altText": "string",
    "iconUrl": "string",
    "imageType": "SQUARE",
    "knownIcon": "string"
  },
  "switchControl": {
    "controlType": "SWITCH",
    "name": "string",
    "onChangeAction": {
      "function": "string",
      "interaction": "INTERACTION_UNSPECIFIED",
      "loadIndicator": "SPINNER",
      "parameters": [
        {
          "key": "string",
          "value": "string"
        }
      ],
      "persistValues": true
    },
    "selected": true,
    "value": "string"
  },
  "text": "string",
  "topLabel": "string",
  "wrapText": true
}
```

A widget that displays text with optional decorations such as a label above or below the text, an icon in front of the text, a selection widget, or a button after the text. For an example in Google Chat apps, see [Decorated text](https://developers.google.com/chat/ui/widgets/decorated-text). [Google Workspace Add-ons and Chat apps](https://developers.google.com/workspace/extend):

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bottomLabel|string|false|none|The text that appears below `text`. Always wraps.|
|button|[GoogleAppsCardV1Button](#schemagoogleappscardv1button)|false|none|A button that a user can click to trigger an action.|
|endIcon|[GoogleAppsCardV1Icon](#schemagoogleappscardv1icon)|false|none|An icon displayed after the text. Supports [built-in](https://developers.google.com/chat/format-messages#builtinicons) and [custom](https://developers.google.com/chat/format-messages#customicons) icons.|
|icon|[GoogleAppsCardV1Icon](#schemagoogleappscardv1icon)|false|none|**Deprecated.** Deprecated in favor of `startIcon`.|
|onClick|[GoogleAppsCardV1OnClick](#schemagoogleappscardv1onclick)|false|none|This action is triggered when users click `topLabel` or `bottomLabel`.|
|startIcon|[GoogleAppsCardV1Icon](#schemagoogleappscardv1icon)|false|none|The icon displayed in front of the text.|
|switchControl|[GoogleAppsCardV1SwitchControl](#schemagoogleappscardv1switchcontrol)|false|none|A switch widget that a user can click to change its state and trigger an action.|
|text|string|false|none|Required. The primary text. Supports simple formatting. For more information about formatting text, see [Formatting text in Google Chat apps](https://developers.google.com/chat/format-messages#card-formatting) and [Formatting text in Google Workspace Add-ons](https://developers.google.com/apps-script/add-ons/concepts/widgets#text_formatting).|
|topLabel|string|false|none|The text that appears above `text`. Always truncates.|
|wrapText|boolean|false|none|The wrap text setting. If `true`, the text wraps and displays on multiple lines. Otherwise, the text is truncated. Only applies to `text`, not `topLabel` and `bottomLabel`.|

<h2 id="tocS_GoogleAppsCardV1Divider">GoogleAppsCardV1Divider</h2>
<!-- backwards compatibility -->
<a id="schemagoogleappscardv1divider"></a>
<a id="schema_GoogleAppsCardV1Divider"></a>
<a id="tocSgoogleappscardv1divider"></a>
<a id="tocsgoogleappscardv1divider"></a>

```json
{}
```

Displays a divider between widgets as a horizontal line. For an example in Google Chat apps, see [Divider](https://developers.google.com/chat/ui/widgets/divider). [Google Workspace Add-ons and Chat apps](https://developers.google.com/workspace/extend): For example, the following JSON creates a divider: ``` "divider": {} ```

<h2 id="tocS_GoogleAppsCardV1Grid">GoogleAppsCardV1Grid</h2>
<!-- backwards compatibility -->
<a id="schemagoogleappscardv1grid"></a>
<a id="schema_GoogleAppsCardV1Grid"></a>
<a id="tocSgoogleappscardv1grid"></a>
<a id="tocsgoogleappscardv1grid"></a>

```json
{
  "borderStyle": {
    "cornerRadius": 0,
    "strokeColor": {
      "alpha": 0,
      "blue": 0,
      "green": 0,
      "red": 0
    },
    "type": "BORDER_TYPE_UNSPECIFIED"
  },
  "columnCount": 0,
  "items": [
    {
      "id": "string",
      "image": {
        "altText": "string",
        "borderStyle": {
          "cornerRadius": 0,
          "strokeColor": {
            "alpha": 0,
            "blue": 0,
            "green": 0,
            "red": 0
          },
          "type": "BORDER_TYPE_UNSPECIFIED"
        },
        "cropStyle": {
          "aspectRatio": 0,
          "type": "IMAGE_CROP_TYPE_UNSPECIFIED"
        },
        "imageUri": "string"
      },
      "layout": "GRID_ITEM_LAYOUT_UNSPECIFIED",
      "subtitle": "string",
      "title": "string"
    }
  ],
  "onClick": {
    "action": {
      "function": "string",
      "interaction": "INTERACTION_UNSPECIFIED",
      "loadIndicator": "SPINNER",
      "parameters": [
        {
          "key": "string",
          "value": "string"
        }
      ],
      "persistValues": true
    },
    "card": {},
    "openDynamicLinkAction": {
      "function": "string",
      "interaction": "INTERACTION_UNSPECIFIED",
      "loadIndicator": "SPINNER",
      "parameters": [
        {
          "key": "string",
          "value": "string"
        }
      ],
      "persistValues": true
    },
    "openLink": {
      "onClose": "NOTHING",
      "openAs": "FULL_SIZE",
      "url": "string"
    }
  },
  "title": "string"
}
```

Displays a grid with a collection of items. Items can only include text or images. For responsive columns, or to include more than text or images, use `Columns`. For an example in Google Chat apps, see [Grid](https://developers.google.com/chat/ui/widgets/grid). A grid supports any number of columns and items. The number of rows is determined by items divided by columns. A grid with 10 items and 2 columns has 5 rows. A grid with 11 items and 2 columns has 6 rows. [Google Workspace Add-ons and Chat apps](https://developers.google.com/workspace/extend): For example, the following JSON creates a 2 column grid with a single item: ``` "grid": { "title": "A fine collection of items", "columnCount": 2, "borderStyle": { "type": "STROKE", "cornerRadius": 4 }, "items": [ { "image": { "imageUri": "https://www.example.com/image.png", "cropStyle": { "type": "SQUARE" }, "borderStyle": { "type": "STROKE" } }, "title": "An item", "textAlignment": "CENTER" } ], "onClick": { "openLink": { "url": "https://www.example.com" } } } ```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|borderStyle|[GoogleAppsCardV1BorderStyle](#schemagoogleappscardv1borderstyle)|false|none|The border style to apply to each grid item.|
|columnCount|integer(int32)|false|none|The number of columns to display in the grid. A default value is used if this field isn't specified, and that default value is different depending on where the grid is shown (dialog versus companion).|
|items|[[GoogleAppsCardV1GridItem](#schemagoogleappscardv1griditem)]|false|none|The items to display in the grid.|
|onClick|[GoogleAppsCardV1OnClick](#schemagoogleappscardv1onclick)|false|none|This callback is reused by each individual grid item, but with the item's identifier and index in the items list added to the callback's parameters.|
|title|string|false|none|The text that displays in the grid header.|

<h2 id="tocS_GoogleAppsCardV1GridItem">GoogleAppsCardV1GridItem</h2>
<!-- backwards compatibility -->
<a id="schemagoogleappscardv1griditem"></a>
<a id="schema_GoogleAppsCardV1GridItem"></a>
<a id="tocSgoogleappscardv1griditem"></a>
<a id="tocsgoogleappscardv1griditem"></a>

```json
{
  "id": "string",
  "image": {
    "altText": "string",
    "borderStyle": {
      "cornerRadius": 0,
      "strokeColor": {
        "alpha": 0,
        "blue": 0,
        "green": 0,
        "red": 0
      },
      "type": "BORDER_TYPE_UNSPECIFIED"
    },
    "cropStyle": {
      "aspectRatio": 0,
      "type": "IMAGE_CROP_TYPE_UNSPECIFIED"
    },
    "imageUri": "string"
  },
  "layout": "GRID_ITEM_LAYOUT_UNSPECIFIED",
  "subtitle": "string",
  "title": "string"
}
```

Represents an item in a grid layout. Items can contain text, an image, or both text and an image. [Google Workspace Add-ons and Chat apps](https://developers.google.com/workspace/extend):

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|A user-specified identifier for this grid item. This identifier is returned in the parent grid's `onClick` callback parameters.|
|image|[GoogleAppsCardV1ImageComponent](#schemagoogleappscardv1imagecomponent)|false|none|The image that displays in the grid item.|
|layout|string|false|none|The layout to use for the grid item.|
|subtitle|string|false|none|The grid item's subtitle.|
|title|string|false|none|The grid item's title.|

#### Enumerated Values

|Property|Value|
|---|---|
|layout|GRID_ITEM_LAYOUT_UNSPECIFIED|
|layout|TEXT_BELOW|
|layout|TEXT_ABOVE|

<h2 id="tocS_GoogleAppsCardV1Icon">GoogleAppsCardV1Icon</h2>
<!-- backwards compatibility -->
<a id="schemagoogleappscardv1icon"></a>
<a id="schema_GoogleAppsCardV1Icon"></a>
<a id="tocSgoogleappscardv1icon"></a>
<a id="tocsgoogleappscardv1icon"></a>

```json
{
  "altText": "string",
  "iconUrl": "string",
  "imageType": "SQUARE",
  "knownIcon": "string"
}
```

An icon displayed in a widget on a card. For an example in Google Chat apps, see [Icon](https://developers.google.com/chat/ui/widgets/icon). Supports [built-in](https://developers.google.com/chat/format-messages#builtinicons) and [custom](https://developers.google.com/chat/format-messages#customicons) icons. [Google Workspace Add-ons and Chat apps](https://developers.google.com/workspace/extend):

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|altText|string|false|none|Optional. A description of the icon used for accessibility. If unspecified, the default value `Button` is provided. As a best practice, you should set a helpful description for what the icon displays, and if applicable, what it does. For example, `A user's account portrait`, or `Opens a new browser tab and navigates to the Google Chat developer documentation at https://developers.google.com/chat`. If the icon is set in a `Button`, the `altText` appears as helper text when the user hovers over the button. However, if the button also sets `text`, the icon's `altText` is ignored.|
|iconUrl|string|false|none|Display a custom icon hosted at an HTTPS URL. For example: ``` "iconUrl": "https://developers.google.com/chat/images/quickstart-app-avatar.png" ``` Supported file types include `.png` and `.jpg`.|
|imageType|string|false|none|The crop style applied to the image. In some cases, applying a `CIRCLE` crop causes the image to be drawn larger than a built-in icon.|
|knownIcon|string|false|none|Display one of the built-in icons provided by Google Workspace. For example, to display an airplane icon, specify `AIRPLANE`. For a bus, specify `BUS`. For a full list of supported icons, see [built-in icons](https://developers.google.com/chat/format-messages#builtinicons).|

#### Enumerated Values

|Property|Value|
|---|---|
|imageType|SQUARE|
|imageType|CIRCLE|

<h2 id="tocS_GoogleAppsCardV1Image">GoogleAppsCardV1Image</h2>
<!-- backwards compatibility -->
<a id="schemagoogleappscardv1image"></a>
<a id="schema_GoogleAppsCardV1Image"></a>
<a id="tocSgoogleappscardv1image"></a>
<a id="tocsgoogleappscardv1image"></a>

```json
{
  "altText": "string",
  "imageUrl": "string",
  "onClick": {
    "action": {
      "function": "string",
      "interaction": "INTERACTION_UNSPECIFIED",
      "loadIndicator": "SPINNER",
      "parameters": [
        {
          "key": "string",
          "value": "string"
        }
      ],
      "persistValues": true
    },
    "card": {},
    "openDynamicLinkAction": {
      "function": "string",
      "interaction": "INTERACTION_UNSPECIFIED",
      "loadIndicator": "SPINNER",
      "parameters": [
        {
          "key": "string",
          "value": "string"
        }
      ],
      "persistValues": true
    },
    "openLink": {
      "onClose": "NOTHING",
      "openAs": "FULL_SIZE",
      "url": "string"
    }
  }
}
```

An image that is specified by a URL and can have an `onClick` action. For an example, see [Image](https://developers.google.com/chat/ui/widgets/image). [Google Workspace Add-ons and Chat apps](https://developers.google.com/workspace/extend):

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|altText|string|false|none|The alternative text of this image that's used for accessibility.|
|imageUrl|string|false|none|The HTTPS URL that hosts the image. For example: ``` https://developers.google.com/chat/images/quickstart-app-avatar.png ```|
|onClick|[GoogleAppsCardV1OnClick](#schemagoogleappscardv1onclick)|false|none|When a user clicks the image, the click triggers this action.|

<h2 id="tocS_GoogleAppsCardV1ImageComponent">GoogleAppsCardV1ImageComponent</h2>
<!-- backwards compatibility -->
<a id="schemagoogleappscardv1imagecomponent"></a>
<a id="schema_GoogleAppsCardV1ImageComponent"></a>
<a id="tocSgoogleappscardv1imagecomponent"></a>
<a id="tocsgoogleappscardv1imagecomponent"></a>

```json
{
  "altText": "string",
  "borderStyle": {
    "cornerRadius": 0,
    "strokeColor": {
      "alpha": 0,
      "blue": 0,
      "green": 0,
      "red": 0
    },
    "type": "BORDER_TYPE_UNSPECIFIED"
  },
  "cropStyle": {
    "aspectRatio": 0,
    "type": "IMAGE_CROP_TYPE_UNSPECIFIED"
  },
  "imageUri": "string"
}
```

Represents an image. [Google Workspace Add-ons and Chat apps](https://developers.google.com/workspace/extend):

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|altText|string|false|none|The accessibility label for the image.|
|borderStyle|[GoogleAppsCardV1BorderStyle](#schemagoogleappscardv1borderstyle)|false|none|The border style to apply to the image.|
|cropStyle|[GoogleAppsCardV1ImageCropStyle](#schemagoogleappscardv1imagecropstyle)|false|none|The crop style to apply to the image.|
|imageUri|string|false|none|The image URL.|

<h2 id="tocS_GoogleAppsCardV1ImageCropStyle">GoogleAppsCardV1ImageCropStyle</h2>
<!-- backwards compatibility -->
<a id="schemagoogleappscardv1imagecropstyle"></a>
<a id="schema_GoogleAppsCardV1ImageCropStyle"></a>
<a id="tocSgoogleappscardv1imagecropstyle"></a>
<a id="tocsgoogleappscardv1imagecropstyle"></a>

```json
{
  "aspectRatio": 0,
  "type": "IMAGE_CROP_TYPE_UNSPECIFIED"
}
```

Represents the crop style applied to an image. [Google Workspace Add-ons and Chat apps](https://developers.google.com/workspace/extend): For example, here's how to apply a 16:9 aspect ratio: ``` cropStyle { "type": "RECTANGLE_CUSTOM", "aspectRatio": 16/9 } ```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|aspectRatio|number(double)|false|none|The aspect ratio to use if the crop type is `RECTANGLE_CUSTOM`. For example, here's how to apply a 16:9 aspect ratio: ``` cropStyle { "type": "RECTANGLE_CUSTOM", "aspectRatio": 16/9 } ```|
|type|string|false|none|The crop type.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|IMAGE_CROP_TYPE_UNSPECIFIED|
|type|SQUARE|
|type|CIRCLE|
|type|RECTANGLE_CUSTOM|
|type|RECTANGLE_4_3|

<h2 id="tocS_GoogleAppsCardV1OnClick">GoogleAppsCardV1OnClick</h2>
<!-- backwards compatibility -->
<a id="schemagoogleappscardv1onclick"></a>
<a id="schema_GoogleAppsCardV1OnClick"></a>
<a id="tocSgoogleappscardv1onclick"></a>
<a id="tocsgoogleappscardv1onclick"></a>

```json
{
  "action": {
    "function": "string",
    "interaction": "INTERACTION_UNSPECIFIED",
    "loadIndicator": "SPINNER",
    "parameters": [
      {
        "key": "string",
        "value": "string"
      }
    ],
    "persistValues": true
  },
  "card": {
    "cardActions": [
      {}
    ],
    "displayStyle": "DISPLAY_STYLE_UNSPECIFIED",
    "fixedFooter": {},
    "header": {
      "imageAltText": "string",
      "imageType": "SQUARE",
      "imageUrl": "string",
      "subtitle": "string",
      "title": "string"
    },
    "name": "string",
    "peekCardHeader": {
      "imageAltText": "string",
      "imageType": "SQUARE",
      "imageUrl": "string",
      "subtitle": "string",
      "title": "string"
    },
    "sectionDividerStyle": "DIVIDER_STYLE_UNSPECIFIED",
    "sections": [
      {}
    ]
  },
  "openDynamicLinkAction": {
    "function": "string",
    "interaction": "INTERACTION_UNSPECIFIED",
    "loadIndicator": "SPINNER",
    "parameters": [
      {
        "key": "string",
        "value": "string"
      }
    ],
    "persistValues": true
  },
  "openLink": {
    "onClose": "NOTHING",
    "openAs": "FULL_SIZE",
    "url": "string"
  }
}
```

Represents how to respond when users click an interactive element on a card, such as a button. [Google Workspace Add-ons and Chat apps](https://developers.google.com/workspace/extend):

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action|[GoogleAppsCardV1Action](#schemagoogleappscardv1action)|false|none|If specified, an action is triggered by this `onClick`.|
|card|[GoogleAppsCardV1Card](#schemagoogleappscardv1card)|false|none|A new card is pushed to the card stack after clicking if specified. [Google Workspace Add-ons](https://developers.google.com/workspace/add-ons):|
|openDynamicLinkAction|[GoogleAppsCardV1Action](#schemagoogleappscardv1action)|false|none|An add-on triggers this action when the action needs to open a link. This differs from the `open_link` above in that this needs to talk to server to get the link. Thus some preparation work is required for web client to do before the open link action response comes back. [Google Workspace Add-ons](https://developers.google.com/workspace/add-ons):|
|openLink|[GoogleAppsCardV1OpenLink](#schemagoogleappscardv1openlink)|false|none|If specified, this `onClick` triggers an open link action.|

<h2 id="tocS_GoogleAppsCardV1OpenLink">GoogleAppsCardV1OpenLink</h2>
<!-- backwards compatibility -->
<a id="schemagoogleappscardv1openlink"></a>
<a id="schema_GoogleAppsCardV1OpenLink"></a>
<a id="tocSgoogleappscardv1openlink"></a>
<a id="tocsgoogleappscardv1openlink"></a>

```json
{
  "onClose": "NOTHING",
  "openAs": "FULL_SIZE",
  "url": "string"
}
```

Represents an `onClick` event that opens a hyperlink. [Google Workspace Add-ons and Chat apps](https://developers.google.com/workspace/extend):

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|onClose|string|false|none|Whether the client forgets about a link after opening it, or observes it until the window closes. [Google Workspace Add-ons](https://developers.google.com/workspace/add-ons):|
|openAs|string|false|none|How to open a link. [Google Workspace Add-ons](https://developers.google.com/workspace/add-ons):|
|url|string|false|none|The URL to open.|

#### Enumerated Values

|Property|Value|
|---|---|
|onClose|NOTHING|
|onClose|RELOAD|
|openAs|FULL_SIZE|
|openAs|OVERLAY|

<h2 id="tocS_GoogleAppsCardV1PlatformDataSource">GoogleAppsCardV1PlatformDataSource</h2>
<!-- backwards compatibility -->
<a id="schemagoogleappscardv1platformdatasource"></a>
<a id="schema_GoogleAppsCardV1PlatformDataSource"></a>
<a id="tocSgoogleappscardv1platformdatasource"></a>
<a id="tocsgoogleappscardv1platformdatasource"></a>

```json
{
  "commonDataSource": "UNKNOWN",
  "hostAppDataSource": {
    "chatDataSource": {
      "spaceDataSource": {
        "defaultToCurrentSpace": true
      }
    }
  }
}
```

For a `SelectionInput` widget that uses a multiselect menu, a data source from Google Workspace. Used to populate items in a multiselect menu. [Google Chat apps](https://developers.google.com/chat):

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|commonDataSource|string|false|none|A data source shared by all Google Workspace applications, such as users in a Google Workspace organization.|
|hostAppDataSource|[HostAppDataSourceMarkup](#schemahostappdatasourcemarkup)|false|none|A data source that's unique to a Google Workspace host application, such spaces in Google Chat.|

#### Enumerated Values

|Property|Value|
|---|---|
|commonDataSource|UNKNOWN|
|commonDataSource|USER|

<h2 id="tocS_GoogleAppsCardV1Section">GoogleAppsCardV1Section</h2>
<!-- backwards compatibility -->
<a id="schemagoogleappscardv1section"></a>
<a id="schema_GoogleAppsCardV1Section"></a>
<a id="tocSgoogleappscardv1section"></a>
<a id="tocsgoogleappscardv1section"></a>

```json
{
  "collapsible": true,
  "header": "string",
  "uncollapsibleWidgetsCount": 0,
  "widgets": [
    {
      "buttonList": {},
      "columns": {},
      "dateTimePicker": {
        "label": "string",
        "name": "string",
        "onChangeAction": {
          "function": "string",
          "interaction": "INTERACTION_UNSPECIFIED",
          "loadIndicator": "SPINNER",
          "parameters": [
            {
              "key": "string",
              "value": "string"
            }
          ],
          "persistValues": true
        },
        "timezoneOffsetDate": 0,
        "type": "DATE_AND_TIME",
        "valueMsEpoch": "string"
      },
      "decoratedText": {},
      "divider": {},
      "grid": {},
      "horizontalAlignment": "HORIZONTAL_ALIGNMENT_UNSPECIFIED",
      "image": {},
      "selectionInput": {
        "externalDataSource": {
          "function": "string",
          "interaction": "INTERACTION_UNSPECIFIED",
          "loadIndicator": "SPINNER",
          "parameters": [
            {
              "key": "string",
              "value": "string"
            }
          ],
          "persistValues": true
        },
        "items": [
          {
            "bottomText": "string",
            "selected": true,
            "startIconUri": "string",
            "text": "string",
            "value": "string"
          }
        ],
        "label": "string",
        "multiSelectMaxSelectedItems": 0,
        "multiSelectMinQueryLength": 0,
        "name": "string",
        "onChangeAction": {
          "function": "string",
          "interaction": "INTERACTION_UNSPECIFIED",
          "loadIndicator": "SPINNER",
          "parameters": [
            {
              "key": "string",
              "value": "string"
            }
          ],
          "persistValues": true
        },
        "platformDataSource": {
          "commonDataSource": "UNKNOWN",
          "hostAppDataSource": {
            "chatDataSource": {
              "spaceDataSource": {
                "defaultToCurrentSpace": true
              }
            }
          }
        },
        "type": "CHECK_BOX"
      },
      "textInput": {
        "autoCompleteAction": {
          "function": "string",
          "interaction": "INTERACTION_UNSPECIFIED",
          "loadIndicator": "SPINNER",
          "parameters": [
            {
              "key": "string",
              "value": "string"
            }
          ],
          "persistValues": true
        },
        "hintText": "string",
        "initialSuggestions": {
          "items": [
            {
              "text": "string"
            }
          ]
        },
        "label": "string",
        "name": "string",
        "onChangeAction": {
          "function": "string",
          "interaction": "INTERACTION_UNSPECIFIED",
          "loadIndicator": "SPINNER",
          "parameters": [
            {
              "key": "string",
              "value": "string"
            }
          ],
          "persistValues": true
        },
        "placeholderText": "string",
        "type": "SINGLE_LINE",
        "value": "string"
      },
      "textParagraph": {
        "text": "string"
      }
    }
  ]
}
```

A section contains a collection of widgets that are rendered vertically in the order that they're specified. [Google Workspace Add-ons and Chat apps](https://developers.google.com/workspace/extend):

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|collapsible|boolean|false|none|Indicates whether this section is collapsible. Collapsible sections hide some or all widgets, but users can expand the section to reveal the hidden widgets by clicking **Show more**. Users can hide the widgets again by clicking **Show less**. To determine which widgets are hidden, specify `uncollapsibleWidgetsCount`.|
|header|string|false|none|Text that appears at the top of a section. Supports simple HTML formatted text. For more information about formatting text, see [Formatting text in Google Chat apps](https://developers.google.com/chat/format-messages#card-formatting) and [Formatting text in Google Workspace Add-ons](https://developers.google.com/apps-script/add-ons/concepts/widgets#text_formatting).|
|uncollapsibleWidgetsCount|integer(int32)|false|none|The number of uncollapsible widgets which remain visible even when a section is collapsed. For example, when a section contains five widgets and the `uncollapsibleWidgetsCount` is set to `2`, the first two widgets are always shown and the last three are collapsed by default. The `uncollapsibleWidgetsCount` is taken into account only when `collapsible` is `true`.|
|widgets|[[GoogleAppsCardV1Widget](#schemagoogleappscardv1widget)]|false|none|All the widgets in the section. Must contain at least one widget.|

<h2 id="tocS_GoogleAppsCardV1SelectionInput">GoogleAppsCardV1SelectionInput</h2>
<!-- backwards compatibility -->
<a id="schemagoogleappscardv1selectioninput"></a>
<a id="schema_GoogleAppsCardV1SelectionInput"></a>
<a id="tocSgoogleappscardv1selectioninput"></a>
<a id="tocsgoogleappscardv1selectioninput"></a>

```json
{
  "externalDataSource": {
    "function": "string",
    "interaction": "INTERACTION_UNSPECIFIED",
    "loadIndicator": "SPINNER",
    "parameters": [
      {
        "key": "string",
        "value": "string"
      }
    ],
    "persistValues": true
  },
  "items": [
    {
      "bottomText": "string",
      "selected": true,
      "startIconUri": "string",
      "text": "string",
      "value": "string"
    }
  ],
  "label": "string",
  "multiSelectMaxSelectedItems": 0,
  "multiSelectMinQueryLength": 0,
  "name": "string",
  "onChangeAction": {
    "function": "string",
    "interaction": "INTERACTION_UNSPECIFIED",
    "loadIndicator": "SPINNER",
    "parameters": [
      {
        "key": "string",
        "value": "string"
      }
    ],
    "persistValues": true
  },
  "platformDataSource": {
    "commonDataSource": "UNKNOWN",
    "hostAppDataSource": {
      "chatDataSource": {
        "spaceDataSource": {
          "defaultToCurrentSpace": true
        }
      }
    }
  },
  "type": "CHECK_BOX"
}
```

A widget that creates one or more UI items that users can select. For example, a dropdown menu or checkboxes. You can use this widget to collect data that can be predicted or enumerated. For an example in Google Chat apps, see [Selection input](https://developers.google.com/chat/ui/widgets/selection-input). Chat apps can process the value of items that users select or input. For details about working with form inputs, see [Receive form data](https://developers.google.com/chat/ui/read-form-data). To collect undefined or abstract data from users, use the TextInput widget. [Google Workspace Add-ons and Chat apps](https://developers.google.com/workspace/extend):

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|externalDataSource|[GoogleAppsCardV1Action](#schemagoogleappscardv1action)|false|none|An external data source, such as a relational data base.|
|items|[[GoogleAppsCardV1SelectionItem](#schemagoogleappscardv1selectionitem)]|false|none|An array of selectable items. For example, an array of radio buttons or checkboxes. Supports up to 100 items.|
|label|string|false|none|The text that appears above the selection input field in the user interface. Specify text that helps the user enter the information your app needs. For example, if users are selecting the urgency of a work ticket from a drop-down menu, the label might be "Urgency" or "Select urgency".|
|multiSelectMaxSelectedItems|integer(int32)|false|none|For multiselect menus, the maximum number of items that a user can select. Minimum value is 1 item. If unspecified, defaults to 3 items.|
|multiSelectMinQueryLength|integer(int32)|false|none|For multiselect menus, the number of text characters that a user inputs before the Chat app queries autocomplete and displays suggested items in the menu. If unspecified, defaults to 0 characters for static data sources and 3 characters for external data sources.|
|name|string|false|none|The name that identifies the selection input in a form input event. For details about working with form inputs, see [Receive form data](https://developers.google.com/chat/ui/read-form-data).|
|onChangeAction|[GoogleAppsCardV1Action](#schemagoogleappscardv1action)|false|none|If specified, the form is submitted when the selection changes. If not specified, you must specify a separate button that submits the form. For details about working with form inputs, see [Receive form data](https://developers.google.com/chat/ui/read-form-data).|
|platformDataSource|[GoogleAppsCardV1PlatformDataSource](#schemagoogleappscardv1platformdatasource)|false|none|A data source from Google Workspace.|
|type|string|false|none|The type of items that are displayed to users in a `SelectionInput` widget. Selection types support different types of interactions. For example, users can select one or more checkboxes, but they can only select one value from a dropdown menu.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|CHECK_BOX|
|type|RADIO_BUTTON|
|type|SWITCH|
|type|DROPDOWN|
|type|MULTI_SELECT|

<h2 id="tocS_GoogleAppsCardV1SelectionItem">GoogleAppsCardV1SelectionItem</h2>
<!-- backwards compatibility -->
<a id="schemagoogleappscardv1selectionitem"></a>
<a id="schema_GoogleAppsCardV1SelectionItem"></a>
<a id="tocSgoogleappscardv1selectionitem"></a>
<a id="tocsgoogleappscardv1selectionitem"></a>

```json
{
  "bottomText": "string",
  "selected": true,
  "startIconUri": "string",
  "text": "string",
  "value": "string"
}
```

An item that users can select in a selection input, such as a checkbox or switch. [Google Workspace Add-ons and Chat apps](https://developers.google.com/workspace/extend):

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bottomText|string|false|none|For multiselect menus, a text description or label that's displayed below the item's `text` field.|
|selected|boolean|false|none|Whether the item is selected by default. If the selection input only accepts one value (such as for radio buttons or a dropdown menu), only set this field for one item.|
|startIconUri|string|false|none|For multiselect menus, the URL for the icon displayed next to the item's `text` field. Supports PNG and JPEG files. Must be an `HTTPS` URL. For example, `https://developers.google.com/chat/images/quickstart-app-avatar.png`.|
|text|string|false|none|The text that identifies or describes the item to users.|
|value|string|false|none|The value associated with this item. The client should use this as a form input value. For details about working with form inputs, see [Receive form data](https://developers.google.com/chat/ui/read-form-data).|

<h2 id="tocS_GoogleAppsCardV1SuggestionItem">GoogleAppsCardV1SuggestionItem</h2>
<!-- backwards compatibility -->
<a id="schemagoogleappscardv1suggestionitem"></a>
<a id="schema_GoogleAppsCardV1SuggestionItem"></a>
<a id="tocSgoogleappscardv1suggestionitem"></a>
<a id="tocsgoogleappscardv1suggestionitem"></a>

```json
{
  "text": "string"
}
```

One suggested value that users can enter in a text input field. [Google Workspace Add-ons and Chat apps](https://developers.google.com/workspace/extend):

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|text|string|false|none|The value of a suggested input to a text input field. This is equivalent to what users enter themselves.|

<h2 id="tocS_GoogleAppsCardV1Suggestions">GoogleAppsCardV1Suggestions</h2>
<!-- backwards compatibility -->
<a id="schemagoogleappscardv1suggestions"></a>
<a id="schema_GoogleAppsCardV1Suggestions"></a>
<a id="tocSgoogleappscardv1suggestions"></a>
<a id="tocsgoogleappscardv1suggestions"></a>

```json
{
  "items": [
    {
      "text": "string"
    }
  ]
}
```

Suggested values that users can enter. These values appear when users click inside the text input field. As users type, the suggested values dynamically filter to match what the users have typed. For example, a text input field for programming language might suggest Java, JavaScript, Python, and C++. When users start typing `Jav`, the list of suggestions filters to show `Java` and `JavaScript`. Suggested values help guide users to enter values that your app can make sense of. When referring to JavaScript, some users might enter `javascript` and others `java script`. Suggesting `JavaScript` can standardize how users interact with your app. When specified, `TextInput.type` is always `SINGLE_LINE`, even if it's set to `MULTIPLE_LINE`. [Google Workspace Add-ons and Chat apps](https://developers.google.com/workspace/extend):

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|items|[[GoogleAppsCardV1SuggestionItem](#schemagoogleappscardv1suggestionitem)]|false|none|A list of suggestions used for autocomplete recommendations in text input fields.|

<h2 id="tocS_GoogleAppsCardV1SwitchControl">GoogleAppsCardV1SwitchControl</h2>
<!-- backwards compatibility -->
<a id="schemagoogleappscardv1switchcontrol"></a>
<a id="schema_GoogleAppsCardV1SwitchControl"></a>
<a id="tocSgoogleappscardv1switchcontrol"></a>
<a id="tocsgoogleappscardv1switchcontrol"></a>

```json
{
  "controlType": "SWITCH",
  "name": "string",
  "onChangeAction": {
    "function": "string",
    "interaction": "INTERACTION_UNSPECIFIED",
    "loadIndicator": "SPINNER",
    "parameters": [
      {
        "key": "string",
        "value": "string"
      }
    ],
    "persistValues": true
  },
  "selected": true,
  "value": "string"
}
```

Either a toggle-style switch or a checkbox inside a `decoratedText` widget. [Google Workspace Add-ons and Chat apps](https://developers.google.com/workspace/extend): Only supported in the `decoratedText` widget.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|controlType|string|false|none|How the switch appears in the user interface. [Google Workspace Add-ons and Chat apps](https://developers.google.com/workspace/extend):|
|name|string|false|none|The name by which the switch widget is identified in a form input event. For details about working with form inputs, see [Receive form data](https://developers.google.com/chat/ui/read-form-data).|
|onChangeAction|[GoogleAppsCardV1Action](#schemagoogleappscardv1action)|false|none|The action to perform when the switch state is changed, such as what function to run.|
|selected|boolean|false|none|When `true`, the switch is selected.|
|value|string|false|none|The value entered by a user, returned as part of a form input event. For details about working with form inputs, see [Receive form data](https://developers.google.com/chat/ui/read-form-data).|

#### Enumerated Values

|Property|Value|
|---|---|
|controlType|SWITCH|
|controlType|CHECKBOX|
|controlType|CHECK_BOX|

<h2 id="tocS_GoogleAppsCardV1TextInput">GoogleAppsCardV1TextInput</h2>
<!-- backwards compatibility -->
<a id="schemagoogleappscardv1textinput"></a>
<a id="schema_GoogleAppsCardV1TextInput"></a>
<a id="tocSgoogleappscardv1textinput"></a>
<a id="tocsgoogleappscardv1textinput"></a>

```json
{
  "autoCompleteAction": {
    "function": "string",
    "interaction": "INTERACTION_UNSPECIFIED",
    "loadIndicator": "SPINNER",
    "parameters": [
      {
        "key": "string",
        "value": "string"
      }
    ],
    "persistValues": true
  },
  "hintText": "string",
  "initialSuggestions": {
    "items": [
      {
        "text": "string"
      }
    ]
  },
  "label": "string",
  "name": "string",
  "onChangeAction": {
    "function": "string",
    "interaction": "INTERACTION_UNSPECIFIED",
    "loadIndicator": "SPINNER",
    "parameters": [
      {
        "key": "string",
        "value": "string"
      }
    ],
    "persistValues": true
  },
  "placeholderText": "string",
  "type": "SINGLE_LINE",
  "value": "string"
}
```

A field in which users can enter text. Supports suggestions and on-change actions. For an example in Google Chat apps, see [Text input](https://developers.google.com/chat/ui/widgets/text-input). Chat apps receive and can process the value of entered text during form input events. For details about working with form inputs, see [Receive form data](https://developers.google.com/chat/ui/read-form-data). When you need to collect undefined or abstract data from users, use a text input. To collect defined or enumerated data from users, use the SelectionInput widget. [Google Workspace Add-ons and Chat apps](https://developers.google.com/workspace/extend):

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|autoCompleteAction|[GoogleAppsCardV1Action](#schemagoogleappscardv1action)|false|none|Optional. Specify what action to take when the text input field provides suggestions to users who interact with it. If unspecified, the suggestions are set by `initialSuggestions` and are processed by the client. If specified, the app takes the action specified here, such as running a custom function. [Google Workspace Add-ons](https://developers.google.com/workspace/add-ons):|
|hintText|string|false|none|Text that appears below the text input field meant to assist users by prompting them to enter a certain value. This text is always visible. Required if `label` is unspecified. Otherwise, optional.|
|initialSuggestions|[GoogleAppsCardV1Suggestions](#schemagoogleappscardv1suggestions)|false|none|Suggested values that users can enter. These values appear when users click inside the text input field. As users type, the suggested values dynamically filter to match what the users have typed. For example, a text input field for programming language might suggest Java, JavaScript, Python, and C++. When users start typing `Jav`, the list of suggestions filters to show just `Java` and `JavaScript`. Suggested values help guide users to enter values that your app can make sense of. When referring to JavaScript, some users might enter `javascript` and others `java script`. Suggesting `JavaScript` can standardize how users interact with your app. When specified, `TextInput.type` is always `SINGLE_LINE`, even if it's set to `MULTIPLE_LINE`. [Google Workspace Add-ons and Chat apps](https://developers.google.com/workspace/extend):|
|label|string|false|none|The text that appears above the text input field in the user interface. Specify text that helps the user enter the information your app needs. For example, if you are asking someone's name, but specifically need their surname, write `surname` instead of `name`. Required if `hintText` is unspecified. Otherwise, optional.|
|name|string|false|none|The name by which the text input is identified in a form input event. For details about working with form inputs, see [Receive form data](https://developers.google.com/chat/ui/read-form-data).|
|onChangeAction|[GoogleAppsCardV1Action](#schemagoogleappscardv1action)|false|none|What to do when a change occurs in the text input field. For example, a user adding to the field or deleting text. Examples of actions to take include running a custom function or opening a [dialog](https://developers.google.com/chat/how-tos/dialogs) in Google Chat.|
|placeholderText|string|false|none|Text that appears in the text input field when the field is empty. Use this text to prompt users to enter a value. For example, `Enter a number from 0 to 100`. [Google Chat apps](https://developers.google.com/chat):|
|type|string|false|none|How a text input field appears in the user interface. For example, whether the field is single or multi-line.|
|value|string|false|none|The value entered by a user, returned as part of a form input event. For details about working with form inputs, see [Receive form data](https://developers.google.com/chat/ui/read-form-data).|

#### Enumerated Values

|Property|Value|
|---|---|
|type|SINGLE_LINE|
|type|MULTIPLE_LINE|

<h2 id="tocS_GoogleAppsCardV1TextParagraph">GoogleAppsCardV1TextParagraph</h2>
<!-- backwards compatibility -->
<a id="schemagoogleappscardv1textparagraph"></a>
<a id="schema_GoogleAppsCardV1TextParagraph"></a>
<a id="tocSgoogleappscardv1textparagraph"></a>
<a id="tocsgoogleappscardv1textparagraph"></a>

```json
{
  "text": "string"
}
```

A paragraph of text that supports formatting. For an example in Google Chat apps, see [Text paragraph](https://developers.google.com/chat/ui/widgets/text-paragraph). For more information about formatting text, see [Formatting text in Google Chat apps](https://developers.google.com/chat/format-messages#card-formatting) and [Formatting text in Google Workspace Add-ons](https://developers.google.com/apps-script/add-ons/concepts/widgets#text_formatting). [Google Workspace Add-ons and Chat apps](https://developers.google.com/workspace/extend):

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|text|string|false|none|The text that's shown in the widget.|

<h2 id="tocS_GoogleAppsCardV1Widget">GoogleAppsCardV1Widget</h2>
<!-- backwards compatibility -->
<a id="schemagoogleappscardv1widget"></a>
<a id="schema_GoogleAppsCardV1Widget"></a>
<a id="tocSgoogleappscardv1widget"></a>
<a id="tocsgoogleappscardv1widget"></a>

```json
{
  "buttonList": {
    "buttons": [
      {}
    ]
  },
  "columns": {
    "columnItems": [
      {}
    ]
  },
  "dateTimePicker": {
    "label": "string",
    "name": "string",
    "onChangeAction": {
      "function": "string",
      "interaction": "INTERACTION_UNSPECIFIED",
      "loadIndicator": "SPINNER",
      "parameters": [
        {
          "key": "string",
          "value": "string"
        }
      ],
      "persistValues": true
    },
    "timezoneOffsetDate": 0,
    "type": "DATE_AND_TIME",
    "valueMsEpoch": "string"
  },
  "decoratedText": {
    "bottomLabel": "string",
    "button": {},
    "endIcon": {
      "altText": "string",
      "iconUrl": "string",
      "imageType": "SQUARE",
      "knownIcon": "string"
    },
    "icon": {
      "altText": "string",
      "iconUrl": "string",
      "imageType": "SQUARE",
      "knownIcon": "string"
    },
    "onClick": {},
    "startIcon": {
      "altText": "string",
      "iconUrl": "string",
      "imageType": "SQUARE",
      "knownIcon": "string"
    },
    "switchControl": {
      "controlType": "SWITCH",
      "name": "string",
      "onChangeAction": {
        "function": "string",
        "interaction": "INTERACTION_UNSPECIFIED",
        "loadIndicator": "SPINNER",
        "parameters": [
          {
            "key": "string",
            "value": "string"
          }
        ],
        "persistValues": true
      },
      "selected": true,
      "value": "string"
    },
    "text": "string",
    "topLabel": "string",
    "wrapText": true
  },
  "divider": {},
  "grid": {
    "borderStyle": {
      "cornerRadius": 0,
      "strokeColor": {
        "alpha": 0,
        "blue": 0,
        "green": 0,
        "red": 0
      },
      "type": "BORDER_TYPE_UNSPECIFIED"
    },
    "columnCount": 0,
    "items": [
      {
        "id": "string",
        "image": {
          "altText": "string",
          "borderStyle": {
            "cornerRadius": 0,
            "strokeColor": {
              "alpha": 0,
              "blue": 0,
              "green": 0,
              "red": 0
            },
            "type": "BORDER_TYPE_UNSPECIFIED"
          },
          "cropStyle": {
            "aspectRatio": 0,
            "type": "IMAGE_CROP_TYPE_UNSPECIFIED"
          },
          "imageUri": "string"
        },
        "layout": "GRID_ITEM_LAYOUT_UNSPECIFIED",
        "subtitle": "string",
        "title": "string"
      }
    ],
    "onClick": {},
    "title": "string"
  },
  "horizontalAlignment": "HORIZONTAL_ALIGNMENT_UNSPECIFIED",
  "image": {
    "altText": "string",
    "imageUrl": "string",
    "onClick": {}
  },
  "selectionInput": {
    "externalDataSource": {
      "function": "string",
      "interaction": "INTERACTION_UNSPECIFIED",
      "loadIndicator": "SPINNER",
      "parameters": [
        {
          "key": "string",
          "value": "string"
        }
      ],
      "persistValues": true
    },
    "items": [
      {
        "bottomText": "string",
        "selected": true,
        "startIconUri": "string",
        "text": "string",
        "value": "string"
      }
    ],
    "label": "string",
    "multiSelectMaxSelectedItems": 0,
    "multiSelectMinQueryLength": 0,
    "name": "string",
    "onChangeAction": {
      "function": "string",
      "interaction": "INTERACTION_UNSPECIFIED",
      "loadIndicator": "SPINNER",
      "parameters": [
        {
          "key": "string",
          "value": "string"
        }
      ],
      "persistValues": true
    },
    "platformDataSource": {
      "commonDataSource": "UNKNOWN",
      "hostAppDataSource": {
        "chatDataSource": {
          "spaceDataSource": {
            "defaultToCurrentSpace": true
          }
        }
      }
    },
    "type": "CHECK_BOX"
  },
  "textInput": {
    "autoCompleteAction": {
      "function": "string",
      "interaction": "INTERACTION_UNSPECIFIED",
      "loadIndicator": "SPINNER",
      "parameters": [
        {
          "key": "string",
          "value": "string"
        }
      ],
      "persistValues": true
    },
    "hintText": "string",
    "initialSuggestions": {
      "items": [
        {
          "text": "string"
        }
      ]
    },
    "label": "string",
    "name": "string",
    "onChangeAction": {
      "function": "string",
      "interaction": "INTERACTION_UNSPECIFIED",
      "loadIndicator": "SPINNER",
      "parameters": [
        {
          "key": "string",
          "value": "string"
        }
      ],
      "persistValues": true
    },
    "placeholderText": "string",
    "type": "SINGLE_LINE",
    "value": "string"
  },
  "textParagraph": {
    "text": "string"
  }
}
```

Each card is made up of widgets. A widget is a composite object that can represent one of text, images, buttons, and other object types.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|buttonList|[GoogleAppsCardV1ButtonList](#schemagoogleappscardv1buttonlist)|false|none|A list of buttons. For example, the following JSON creates two buttons. The first is a blue text button and the second is an image button that opens a link: ``` "buttonList": { "buttons": [ { "text": "Edit", "color": { "red": 0, "green": 0, "blue": 1, "alpha": 1 }, "disabled": true, }, { "icon": { "knownIcon": "INVITE", "altText": "check calendar" }, "onClick": { "openLink": { "url": "https://example.com/calendar" } } } ] } ```|
|columns|[GoogleAppsCardV1Columns](#schemagoogleappscardv1columns)|false|none|Displays up to 2 columns. To include more than 2 columns, or to use rows, use the `Grid` widget. For example, the following JSON creates 2 columns that each contain text paragraphs: ``` "columns": { "columnItems": [ { "horizontalSizeStyle": "FILL_AVAILABLE_SPACE", "horizontalAlignment": "CENTER", "verticalAlignment": "CENTER", "widgets": [ { "textParagraph": { "text": "First column text paragraph" } } ] }, { "horizontalSizeStyle": "FILL_AVAILABLE_SPACE", "horizontalAlignment": "CENTER", "verticalAlignment": "CENTER", "widgets": [ { "textParagraph": { "text": "Second column text paragraph" } } ] } ] } ```|
|dateTimePicker|[GoogleAppsCardV1DateTimePicker](#schemagoogleappscardv1datetimepicker)|false|none|Displays a widget that lets users input a date, time, or date and time. For example, the following JSON creates a date time picker to schedule an appointment: ``` "dateTimePicker": { "name": "appointment_time", "label": "Book your appointment at:", "type": "DATE_AND_TIME", "valueMsEpoch": "796435200000" } ```|
|decoratedText|[GoogleAppsCardV1DecoratedText](#schemagoogleappscardv1decoratedtext)|false|none|Displays a decorated text item. For example, the following JSON creates a decorated text widget showing email address: ``` "decoratedText": { "icon": { "knownIcon": "EMAIL" }, "topLabel": "Email Address", "text": "sasha@example.com", "bottomLabel": "This is a new Email address!", "switchControl": { "name": "has_send_welcome_email_to_sasha", "selected": false, "controlType": "CHECKBOX" } } ```|
|divider|[GoogleAppsCardV1Divider](#schemagoogleappscardv1divider)|false|none|Displays a horizontal line divider between widgets. For example, the following JSON creates a divider: ``` "divider": { } ```|
|grid|[GoogleAppsCardV1Grid](#schemagoogleappscardv1grid)|false|none|Displays a grid with a collection of items. A grid supports any number of columns and items. The number of rows is determined by the upper bounds of the number items divided by the number of columns. A grid with 10 items and 2 columns has 5 rows. A grid with 11 items and 2 columns has 6 rows. [Google Workspace Add-ons and Chat apps](https://developers.google.com/workspace/extend): For example, the following JSON creates a 2 column grid with a single item: ``` "grid": { "title": "A fine collection of items", "columnCount": 2, "borderStyle": { "type": "STROKE", "cornerRadius": 4 }, "items": [ { "image": { "imageUri": "https://www.example.com/image.png", "cropStyle": { "type": "SQUARE" }, "borderStyle": { "type": "STROKE" } }, "title": "An item", "textAlignment": "CENTER" } ], "onClick": { "openLink": { "url": "https://www.example.com" } } } ```|
|horizontalAlignment|string|false|none|Specifies whether widgets align to the left, right, or center of a column.|
|image|[GoogleAppsCardV1Image](#schemagoogleappscardv1image)|false|none|Displays an image. For example, the following JSON creates an image with alternative text: ``` "image": { "imageUrl": "https://developers.google.com/chat/images/quickstart-app-avatar.png", "altText": "Chat app avatar" } ```|
|selectionInput|[GoogleAppsCardV1SelectionInput](#schemagoogleappscardv1selectioninput)|false|none|Displays a selection control that lets users select items. Selection controls can be checkboxes, radio buttons, switches, or dropdown menus. For example, the following JSON creates a dropdown menu that lets users choose a size: ``` "selectionInput": { "name": "size", "label": "Size" "type": "DROPDOWN", "items": [ { "text": "S", "value": "small", "selected": false }, { "text": "M", "value": "medium", "selected": true }, { "text": "L", "value": "large", "selected": false }, { "text": "XL", "value": "extra_large", "selected": false } ] } ```|
|textInput|[GoogleAppsCardV1TextInput](#schemagoogleappscardv1textinput)|false|none|Displays a text box that users can type into. For example, the following JSON creates a text input for an email address: ``` "textInput": { "name": "mailing_address", "label": "Mailing Address" } ``` As another example, the following JSON creates a text input for a programming language with static suggestions: ``` "textInput": { "name": "preferred_programing_language", "label": "Preferred Language", "initialSuggestions": { "items": [ { "text": "C++" }, { "text": "Java" }, { "text": "JavaScript" }, { "text": "Python" } ] } } ```|
|textParagraph|[GoogleAppsCardV1TextParagraph](#schemagoogleappscardv1textparagraph)|false|none|Displays a text paragraph. Supports simple HTML formatted text. For more information about formatting text, see [Formatting text in Google Chat apps](https://developers.google.com/chat/format-messages#card-formatting) and [Formatting text in Google Workspace Add-ons](https://developers.google.com/apps-script/add-ons/concepts/widgets#text_formatting). For example, the following JSON creates a bolded text: ``` "textParagraph": { "text": " *bold text*" } ```|

#### Enumerated Values

|Property|Value|
|---|---|
|horizontalAlignment|HORIZONTAL_ALIGNMENT_UNSPECIFIED|
|horizontalAlignment|START|
|horizontalAlignment|CENTER|
|horizontalAlignment|END|

<h2 id="tocS_GoogleAppsCardV1Widgets">GoogleAppsCardV1Widgets</h2>
<!-- backwards compatibility -->
<a id="schemagoogleappscardv1widgets"></a>
<a id="schema_GoogleAppsCardV1Widgets"></a>
<a id="tocSgoogleappscardv1widgets"></a>
<a id="tocsgoogleappscardv1widgets"></a>

```json
{
  "buttonList": {
    "buttons": [
      {}
    ]
  },
  "dateTimePicker": {
    "label": "string",
    "name": "string",
    "onChangeAction": {
      "function": "string",
      "interaction": "INTERACTION_UNSPECIFIED",
      "loadIndicator": "SPINNER",
      "parameters": [
        {
          "key": "string",
          "value": "string"
        }
      ],
      "persistValues": true
    },
    "timezoneOffsetDate": 0,
    "type": "DATE_AND_TIME",
    "valueMsEpoch": "string"
  },
  "decoratedText": {
    "bottomLabel": "string",
    "button": {},
    "endIcon": {
      "altText": "string",
      "iconUrl": "string",
      "imageType": "SQUARE",
      "knownIcon": "string"
    },
    "icon": {
      "altText": "string",
      "iconUrl": "string",
      "imageType": "SQUARE",
      "knownIcon": "string"
    },
    "onClick": {},
    "startIcon": {
      "altText": "string",
      "iconUrl": "string",
      "imageType": "SQUARE",
      "knownIcon": "string"
    },
    "switchControl": {
      "controlType": "SWITCH",
      "name": "string",
      "onChangeAction": {
        "function": "string",
        "interaction": "INTERACTION_UNSPECIFIED",
        "loadIndicator": "SPINNER",
        "parameters": [
          {
            "key": "string",
            "value": "string"
          }
        ],
        "persistValues": true
      },
      "selected": true,
      "value": "string"
    },
    "text": "string",
    "topLabel": "string",
    "wrapText": true
  },
  "image": {
    "altText": "string",
    "imageUrl": "string",
    "onClick": {}
  },
  "selectionInput": {
    "externalDataSource": {
      "function": "string",
      "interaction": "INTERACTION_UNSPECIFIED",
      "loadIndicator": "SPINNER",
      "parameters": [
        {
          "key": "string",
          "value": "string"
        }
      ],
      "persistValues": true
    },
    "items": [
      {
        "bottomText": "string",
        "selected": true,
        "startIconUri": "string",
        "text": "string",
        "value": "string"
      }
    ],
    "label": "string",
    "multiSelectMaxSelectedItems": 0,
    "multiSelectMinQueryLength": 0,
    "name": "string",
    "onChangeAction": {
      "function": "string",
      "interaction": "INTERACTION_UNSPECIFIED",
      "loadIndicator": "SPINNER",
      "parameters": [
        {
          "key": "string",
          "value": "string"
        }
      ],
      "persistValues": true
    },
    "platformDataSource": {
      "commonDataSource": "UNKNOWN",
      "hostAppDataSource": {
        "chatDataSource": {
          "spaceDataSource": {
            "defaultToCurrentSpace": true
          }
        }
      }
    },
    "type": "CHECK_BOX"
  },
  "textInput": {
    "autoCompleteAction": {
      "function": "string",
      "interaction": "INTERACTION_UNSPECIFIED",
      "loadIndicator": "SPINNER",
      "parameters": [
        {
          "key": "string",
          "value": "string"
        }
      ],
      "persistValues": true
    },
    "hintText": "string",
    "initialSuggestions": {
      "items": [
        {
          "text": "string"
        }
      ]
    },
    "label": "string",
    "name": "string",
    "onChangeAction": {
      "function": "string",
      "interaction": "INTERACTION_UNSPECIFIED",
      "loadIndicator": "SPINNER",
      "parameters": [
        {
          "key": "string",
          "value": "string"
        }
      ],
      "persistValues": true
    },
    "placeholderText": "string",
    "type": "SINGLE_LINE",
    "value": "string"
  },
  "textParagraph": {
    "text": "string"
  }
}
```

The supported widgets that you can include in a column. [Google Chat apps](https://developers.google.com/chat):

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|buttonList|[GoogleAppsCardV1ButtonList](#schemagoogleappscardv1buttonlist)|false|none|ButtonList widget.|
|dateTimePicker|[GoogleAppsCardV1DateTimePicker](#schemagoogleappscardv1datetimepicker)|false|none|DateTimePicker widget.|
|decoratedText|[GoogleAppsCardV1DecoratedText](#schemagoogleappscardv1decoratedtext)|false|none|DecoratedText widget.|
|image|[GoogleAppsCardV1Image](#schemagoogleappscardv1image)|false|none|Image widget.|
|selectionInput|[GoogleAppsCardV1SelectionInput](#schemagoogleappscardv1selectioninput)|false|none|SelectionInput widget.|
|textInput|[GoogleAppsCardV1TextInput](#schemagoogleappscardv1textinput)|false|none|TextInput widget.|
|textParagraph|[GoogleAppsCardV1TextParagraph](#schemagoogleappscardv1textparagraph)|false|none|TextParagraph widget.|

<h2 id="tocS_Group">Group</h2>
<!-- backwards compatibility -->
<a id="schemagroup"></a>
<a id="schema_Group"></a>
<a id="tocSgroup"></a>
<a id="tocsgroup"></a>

```json
{
  "name": "string"
}
```

A Google Group in Google Chat.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|Resource name for a Google Group. Represents a [group](https://cloud.google.com/identity/docs/reference/rest/v1/groups) in Cloud Identity Groups API. Format: groups/{group}|

<h2 id="tocS_HostAppDataSourceMarkup">HostAppDataSourceMarkup</h2>
<!-- backwards compatibility -->
<a id="schemahostappdatasourcemarkup"></a>
<a id="schema_HostAppDataSourceMarkup"></a>
<a id="tocShostappdatasourcemarkup"></a>
<a id="tocshostappdatasourcemarkup"></a>

```json
{
  "chatDataSource": {
    "spaceDataSource": {
      "defaultToCurrentSpace": true
    }
  }
}
```

For a `SelectionInput` widget that uses a multiselect menu, a data source from a Google Workspace application. The data source populates selection items for the multiselect menu. [Google Chat apps](https://developers.google.com/chat):

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|chatDataSource|[ChatClientDataSourceMarkup](#schemachatclientdatasourcemarkup)|false|none|A data source from Google Chat.|

<h2 id="tocS_Image">Image</h2>
<!-- backwards compatibility -->
<a id="schemaimage"></a>
<a id="schema_Image"></a>
<a id="tocSimage"></a>
<a id="tocsimage"></a>

```json
{
  "aspectRatio": 0,
  "imageUrl": "string",
  "onClick": {
    "action": {
      "actionMethodName": "string",
      "parameters": [
        {
          "key": "string",
          "value": "string"
        }
      ]
    },
    "openLink": {
      "url": "string"
    }
  }
}
```

An image that's specified by a URL and can have an `onclick` action.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|aspectRatio|number(double)|false|none|The aspect ratio of this image (width and height). This field lets you reserve the right height for the image while waiting for it to load. It's not meant to override the built-in aspect ratio of the image. If unset, the server fills it by prefetching the image.|
|imageUrl|string|false|none|The URL of the image.|
|onClick|[OnClick](#schemaonclick)|false|none|The `onclick` action.|

<h2 id="tocS_ImageButton">ImageButton</h2>
<!-- backwards compatibility -->
<a id="schemaimagebutton"></a>
<a id="schema_ImageButton"></a>
<a id="tocSimagebutton"></a>
<a id="tocsimagebutton"></a>

```json
{
  "icon": "ICON_UNSPECIFIED",
  "iconUrl": "string",
  "name": "string",
  "onClick": {
    "action": {
      "actionMethodName": "string",
      "parameters": [
        {
          "key": "string",
          "value": "string"
        }
      ]
    },
    "openLink": {
      "url": "string"
    }
  }
}
```

An image button with an `onclick` action.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|icon|string|false|none|The icon specified by an `enum` that indices to an icon provided by Chat API.|
|iconUrl|string|false|none|The icon specified by a URL.|
|name|string|false|none|The name of this `image_button` that's used for accessibility. Default value is provided if this name isn't specified.|
|onClick|[OnClick](#schemaonclick)|false|none|The `onclick` action.|

#### Enumerated Values

|Property|Value|
|---|---|
|icon|ICON_UNSPECIFIED|
|icon|AIRPLANE|
|icon|BOOKMARK|
|icon|BUS|
|icon|CAR|
|icon|CLOCK|
|icon|CONFIRMATION_NUMBER_ICON|
|icon|DOLLAR|
|icon|DESCRIPTION|
|icon|EMAIL|
|icon|EVENT_PERFORMER|
|icon|EVENT_SEAT|
|icon|FLIGHT_ARRIVAL|
|icon|FLIGHT_DEPARTURE|
|icon|HOTEL|
|icon|HOTEL_ROOM_TYPE|
|icon|INVITE|
|icon|MAP_PIN|
|icon|MEMBERSHIP|
|icon|MULTIPLE_PEOPLE|
|icon|OFFER|
|icon|PERSON|
|icon|PHONE|
|icon|RESTAURANT_ICON|
|icon|SHOPPING_CART|
|icon|STAR|
|icon|STORE|
|icon|TICKET|
|icon|TRAIN|
|icon|VIDEO_CAMERA|
|icon|VIDEO_PLAY|

<h2 id="tocS_Inputs">Inputs</h2>
<!-- backwards compatibility -->
<a id="schemainputs"></a>
<a id="schema_Inputs"></a>
<a id="tocSinputs"></a>
<a id="tocsinputs"></a>

```json
{
  "dateInput": {
    "msSinceEpoch": "string"
  },
  "dateTimeInput": {
    "hasDate": true,
    "hasTime": true,
    "msSinceEpoch": "string"
  },
  "stringInputs": {
    "value": [
      "string"
    ]
  },
  "timeInput": {
    "hours": 0,
    "minutes": 0
  }
}
```

Types of data that users can [input on cards or dialogs](https://developers.google.com/chat/ui/read-form-data). The input type depends on the type of values that the widget accepts.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dateInput|[DateInput](#schemadateinput)|false|none|Date input values from a [`DateTimePicker`](https://developers.google.com/chat/api/reference/rest/v1/cards#DateTimePicker) widget that only accepts date values.|
|dateTimeInput|[DateTimeInput](#schemadatetimeinput)|false|none|Date and time input values from a [`DateTimePicker`](https://developers.google.com/chat/api/reference/rest/v1/cards#DateTimePicker) widget that accepts both a date and time.|
|stringInputs|[StringInputs](#schemastringinputs)|false|none|A list of strings that represent the values that the user inputs in a widget. If the widget only accepts one value, such as a [`TextInput`](https://developers.google.com/chat/api/reference/rest/v1/cards#TextInput) widget, the list contains one string object. If the widget accepts multiple values, such as a [`SelectionInput`](https://developers.google.com/chat/api/reference/rest/v1/cards#selectioninput) widget of checkboxes, the list contains a string object for each value that the user inputs or selects.|
|timeInput|[TimeInput](#schematimeinput)|false|none|Time input values from a [`DateTimePicker`](https://developers.google.com/chat/api/reference/rest/v1/cards#DateTimePicker) widget that only accepts time values.|

<h2 id="tocS_KeyValue">KeyValue</h2>
<!-- backwards compatibility -->
<a id="schemakeyvalue"></a>
<a id="schema_KeyValue"></a>
<a id="tocSkeyvalue"></a>
<a id="tocskeyvalue"></a>

```json
{
  "bottomLabel": "string",
  "button": {
    "imageButton": {
      "icon": "ICON_UNSPECIFIED",
      "iconUrl": "string",
      "name": "string",
      "onClick": {
        "action": {
          "actionMethodName": "string",
          "parameters": [
            {
              "key": "string",
              "value": "string"
            }
          ]
        },
        "openLink": {
          "url": "string"
        }
      }
    },
    "textButton": {
      "onClick": {
        "action": {
          "actionMethodName": "string",
          "parameters": [
            {
              "key": "string",
              "value": "string"
            }
          ]
        },
        "openLink": {
          "url": "string"
        }
      },
      "text": "string"
    }
  },
  "content": "string",
  "contentMultiline": true,
  "icon": "ICON_UNSPECIFIED",
  "iconUrl": "string",
  "onClick": {
    "action": {
      "actionMethodName": "string",
      "parameters": [
        {
          "key": "string",
          "value": "string"
        }
      ]
    },
    "openLink": {
      "url": "string"
    }
  },
  "topLabel": "string"
}
```

A UI element contains a key (label) and a value (content). This element can also contain some actions such as `onclick` button.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bottomLabel|string|false|none|The text of the bottom label. Formatted text supported. For more information about formatting text, see [Formatting text in Google Chat apps](https://developers.google.com/chat/format-messages#card-formatting) and [Formatting text in Google Workspace Add-ons](https://developers.google.com/apps-script/add-ons/concepts/widgets#text_formatting).|
|button|[Button](#schemabutton)|false|none|A button that can be clicked to trigger an action.|
|content|string|false|none|The text of the content. Formatted text supported and always required. For more information about formatting text, see [Formatting text in Google Chat apps](https://developers.google.com/chat/format-messages#card-formatting) and [Formatting text in Google Workspace Add-ons](https://developers.google.com/apps-script/add-ons/concepts/widgets#text_formatting).|
|contentMultiline|boolean|false|none|If the content should be multiline.|
|icon|string|false|none|An enum value that's replaced by the Chat API with the corresponding icon image.|
|iconUrl|string|false|none|The icon specified by a URL.|
|onClick|[OnClick](#schemaonclick)|false|none|The `onclick` action. Only the top label, bottom label, and content region are clickable.|
|topLabel|string|false|none|The text of the top label. Formatted text supported. For more information about formatting text, see [Formatting text in Google Chat apps](https://developers.google.com/chat/format-messages#card-formatting) and [Formatting text in Google Workspace Add-ons](https://developers.google.com/apps-script/add-ons/concepts/widgets#text_formatting).|

#### Enumerated Values

|Property|Value|
|---|---|
|icon|ICON_UNSPECIFIED|
|icon|AIRPLANE|
|icon|BOOKMARK|
|icon|BUS|
|icon|CAR|
|icon|CLOCK|
|icon|CONFIRMATION_NUMBER_ICON|
|icon|DOLLAR|
|icon|DESCRIPTION|
|icon|EMAIL|
|icon|EVENT_PERFORMER|
|icon|EVENT_SEAT|
|icon|FLIGHT_ARRIVAL|
|icon|FLIGHT_DEPARTURE|
|icon|HOTEL|
|icon|HOTEL_ROOM_TYPE|
|icon|INVITE|
|icon|MAP_PIN|
|icon|MEMBERSHIP|
|icon|MULTIPLE_PEOPLE|
|icon|OFFER|
|icon|PERSON|
|icon|PHONE|
|icon|RESTAURANT_ICON|
|icon|SHOPPING_CART|
|icon|STAR|
|icon|STORE|
|icon|TICKET|
|icon|TRAIN|
|icon|VIDEO_CAMERA|
|icon|VIDEO_PLAY|

<h2 id="tocS_ListMembershipsResponse">ListMembershipsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistmembershipsresponse"></a>
<a id="schema_ListMembershipsResponse"></a>
<a id="tocSlistmembershipsresponse"></a>
<a id="tocslistmembershipsresponse"></a>

```json
{
  "memberships": [
    {
      "createTime": "string",
      "deleteTime": "string",
      "groupMember": {
        "name": "string"
      },
      "member": {
        "displayName": "string",
        "domainId": "string",
        "isAnonymous": true,
        "name": "string",
        "type": "TYPE_UNSPECIFIED"
      },
      "name": "string",
      "role": "MEMBERSHIP_ROLE_UNSPECIFIED",
      "state": "MEMBERSHIP_STATE_UNSPECIFIED"
    }
  ],
  "nextPageToken": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|memberships|[[Membership](#schemamembership)]|false|none|Unordered list. List of memberships in the requested (or first) page.|
|nextPageToken|string|false|none|A token that you can send as `pageToken` to retrieve the next page of results. If empty, there are no subsequent pages.|

<h2 id="tocS_ListMessagesResponse">ListMessagesResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistmessagesresponse"></a>
<a id="schema_ListMessagesResponse"></a>
<a id="tocSlistmessagesresponse"></a>
<a id="tocslistmessagesresponse"></a>

```json
{
  "messages": [
    {
      "actionResponse": {
        "dialogAction": {
          "actionStatus": {
            "statusCode": "OK",
            "userFacingMessage": "string"
          },
          "dialog": {
            "body": {
              "cardActions": [
                {}
              ],
              "displayStyle": "DISPLAY_STYLE_UNSPECIFIED",
              "fixedFooter": {},
              "header": {
                "imageAltText": "string",
                "imageType": "SQUARE",
                "imageUrl": "string",
                "subtitle": "string",
                "title": "string"
              },
              "name": "string",
              "peekCardHeader": {
                "imageAltText": "string",
                "imageType": "SQUARE",
                "imageUrl": "string",
                "subtitle": "string",
                "title": "string"
              },
              "sectionDividerStyle": "DIVIDER_STYLE_UNSPECIFIED",
              "sections": [
                {}
              ]
            }
          }
        },
        "type": "TYPE_UNSPECIFIED",
        "updatedWidget": {
          "suggestions": {
            "items": [
              {
                "bottomText": "string",
                "selected": true,
                "startIconUri": "string",
                "text": "string",
                "value": "string"
              }
            ]
          },
          "widget": "string"
        },
        "url": "string"
      },
      "annotations": [
        {
          "length": 0,
          "slashCommand": {
            "bot": {
              "displayName": "string",
              "domainId": "string",
              "isAnonymous": true,
              "name": "string",
              "type": "TYPE_UNSPECIFIED"
            },
            "commandId": "string",
            "commandName": "string",
            "triggersDialog": true,
            "type": "TYPE_UNSPECIFIED"
          },
          "startIndex": 0,
          "type": "ANNOTATION_TYPE_UNSPECIFIED",
          "userMention": {
            "type": "TYPE_UNSPECIFIED",
            "user": {
              "displayName": "string",
              "domainId": "string",
              "isAnonymous": true,
              "name": "string",
              "type": "TYPE_UNSPECIFIED"
            }
          }
        }
      ],
      "argumentText": "string",
      "attachedGifs": [
        {
          "uri": "string"
        }
      ],
      "attachment": [
        {
          "attachmentDataRef": {
            "attachmentUploadToken": "string",
            "resourceName": "string"
          },
          "contentName": "string",
          "contentType": "string",
          "downloadUri": "string",
          "driveDataRef": {
            "driveFileId": "string"
          },
          "name": "string",
          "source": "SOURCE_UNSPECIFIED",
          "thumbnailUri": "string"
        }
      ],
      "cards": [
        {
          "cardActions": [
            {
              "actionLabel": "string",
              "onClick": {
                "action": {
                  "actionMethodName": "string",
                  "parameters": [
                    {
                      "key": "string",
                      "value": "string"
                    }
                  ]
                },
                "openLink": {
                  "url": "string"
                }
              }
            }
          ],
          "header": {
            "imageStyle": "IMAGE_STYLE_UNSPECIFIED",
            "imageUrl": "string",
            "subtitle": "string",
            "title": "string"
          },
          "name": "string",
          "sections": [
            {
              "header": "string",
              "widgets": [
                {
                  "buttons": [
                    {
                      "imageButton": {
                        "icon": "ICON_UNSPECIFIED",
                        "iconUrl": "string",
                        "name": "string",
                        "onClick": {
                          "action": {
                            "actionMethodName": "string",
                            "parameters": [
                              {
                                "key": "string",
                                "value": "string"
                              }
                            ]
                          },
                          "openLink": {
                            "url": "string"
                          }
                        }
                      },
                      "textButton": {
                        "onClick": {
                          "action": {
                            "actionMethodName": "string",
                            "parameters": [
                              {
                                "key": "string",
                                "value": "string"
                              }
                            ]
                          },
                          "openLink": {
                            "url": "string"
                          }
                        },
                        "text": "string"
                      }
                    }
                  ],
                  "image": {
                    "aspectRatio": 0,
                    "imageUrl": "string",
                    "onClick": {
                      "action": {
                        "actionMethodName": "string",
                        "parameters": [
                          {
                            "key": "string",
                            "value": "string"
                          }
                        ]
                      },
                      "openLink": {
                        "url": "string"
                      }
                    }
                  },
                  "keyValue": {
                    "bottomLabel": "string",
                    "button": {
                      "imageButton": {
                        "icon": "ICON_UNSPECIFIED",
                        "iconUrl": "string",
                        "name": "string",
                        "onClick": {
                          "action": {
                            "actionMethodName": "string",
                            "parameters": [
                              {
                                "key": "string",
                                "value": "string"
                              }
                            ]
                          },
                          "openLink": {
                            "url": "string"
                          }
                        }
                      },
                      "textButton": {
                        "onClick": {
                          "action": {
                            "actionMethodName": "string",
                            "parameters": [
                              {
                                "key": "string",
                                "value": "string"
                              }
                            ]
                          },
                          "openLink": {
                            "url": "string"
                          }
                        },
                        "text": "string"
                      }
                    },
                    "content": "string",
                    "contentMultiline": true,
                    "icon": "ICON_UNSPECIFIED",
                    "iconUrl": "string",
                    "onClick": {
                      "action": {
                        "actionMethodName": "string",
                        "parameters": [
                          {
                            "key": "string",
                            "value": "string"
                          }
                        ]
                      },
                      "openLink": {
                        "url": "string"
                      }
                    },
                    "topLabel": "string"
                  },
                  "textParagraph": {
                    "text": "string"
                  }
                }
              ]
            }
          ]
        }
      ],
      "cardsV2": [
        {
          "card": {
            "cardActions": [
              {}
            ],
            "displayStyle": "DISPLAY_STYLE_UNSPECIFIED",
            "fixedFooter": {},
            "header": {
              "imageAltText": "string",
              "imageType": "SQUARE",
              "imageUrl": "string",
              "subtitle": "string",
              "title": "string"
            },
            "name": "string",
            "peekCardHeader": {
              "imageAltText": "string",
              "imageType": "SQUARE",
              "imageUrl": "string",
              "subtitle": "string",
              "title": "string"
            },
            "sectionDividerStyle": "DIVIDER_STYLE_UNSPECIFIED",
            "sections": [
              {}
            ]
          },
          "cardId": "string"
        }
      ],
      "clientAssignedMessageId": "string",
      "createTime": "string",
      "deleteTime": "string",
      "deletionMetadata": {
        "deletionType": "DELETION_TYPE_UNSPECIFIED"
      },
      "emojiReactionSummaries": [
        {
          "emoji": {
            "customEmoji": {
              "uid": "string"
            },
            "unicode": "string"
          },
          "reactionCount": 0
        }
      ],
      "fallbackText": "string",
      "formattedText": "string",
      "lastUpdateTime": "string",
      "matchedUrl": {
        "url": "string"
      },
      "name": "string",
      "privateMessageViewer": {
        "displayName": "string",
        "domainId": "string",
        "isAnonymous": true,
        "name": "string",
        "type": "TYPE_UNSPECIFIED"
      },
      "quotedMessageMetadata": {
        "lastUpdateTime": "string",
        "name": "string"
      },
      "sender": {
        "displayName": "string",
        "domainId": "string",
        "isAnonymous": true,
        "name": "string",
        "type": "TYPE_UNSPECIFIED"
      },
      "slashCommand": {
        "commandId": "string"
      },
      "space": {
        "adminInstalled": true,
        "createTime": "string",
        "displayName": "string",
        "externalUserAllowed": true,
        "importMode": true,
        "name": "string",
        "singleUserBotDm": true,
        "spaceDetails": {
          "description": "string",
          "guidelines": "string"
        },
        "spaceHistoryState": "HISTORY_STATE_UNSPECIFIED",
        "spaceThreadingState": "SPACE_THREADING_STATE_UNSPECIFIED",
        "spaceType": "SPACE_TYPE_UNSPECIFIED",
        "threaded": true,
        "type": "TYPE_UNSPECIFIED"
      },
      "text": "string",
      "thread": {
        "name": "string",
        "threadKey": "string"
      },
      "threadReply": true
    }
  ],
  "nextPageToken": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|messages|[[Message](#schemamessage)]|false|none|List of messages.|
|nextPageToken|string|false|none|You can send a token as `pageToken` to retrieve the next page of results. If empty, there are no subsequent pages.|

<h2 id="tocS_ListReactionsResponse">ListReactionsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistreactionsresponse"></a>
<a id="schema_ListReactionsResponse"></a>
<a id="tocSlistreactionsresponse"></a>
<a id="tocslistreactionsresponse"></a>

```json
{
  "nextPageToken": "string",
  "reactions": [
    {
      "emoji": {
        "customEmoji": {
          "uid": "string"
        },
        "unicode": "string"
      },
      "name": "string",
      "user": {
        "displayName": "string",
        "domainId": "string",
        "isAnonymous": true,
        "name": "string",
        "type": "TYPE_UNSPECIFIED"
      }
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextPageToken|string|false|none|Continuation token to retrieve the next page of results. It's empty for the last page of results.|
|reactions|[[Reaction](#schemareaction)]|false|none|List of reactions in the requested (or first) page.|

<h2 id="tocS_ListSpacesResponse">ListSpacesResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistspacesresponse"></a>
<a id="schema_ListSpacesResponse"></a>
<a id="tocSlistspacesresponse"></a>
<a id="tocslistspacesresponse"></a>

```json
{
  "nextPageToken": "string",
  "spaces": [
    {
      "adminInstalled": true,
      "createTime": "string",
      "displayName": "string",
      "externalUserAllowed": true,
      "importMode": true,
      "name": "string",
      "singleUserBotDm": true,
      "spaceDetails": {
        "description": "string",
        "guidelines": "string"
      },
      "spaceHistoryState": "HISTORY_STATE_UNSPECIFIED",
      "spaceThreadingState": "SPACE_THREADING_STATE_UNSPECIFIED",
      "spaceType": "SPACE_TYPE_UNSPECIFIED",
      "threaded": true,
      "type": "TYPE_UNSPECIFIED"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextPageToken|string|false|none|You can send a token as `pageToken` to retrieve the next page of results. If empty, there are no subsequent pages.|
|spaces|[[Space](#schemaspace)]|false|none|List of spaces in the requested (or first) page.|

<h2 id="tocS_MatchedUrl">MatchedUrl</h2>
<!-- backwards compatibility -->
<a id="schemamatchedurl"></a>
<a id="schema_MatchedUrl"></a>
<a id="tocSmatchedurl"></a>
<a id="tocsmatchedurl"></a>

```json
{
  "url": "string"
}
```

A matched URL in a Chat message. Chat apps can preview matched URLs. For more information, see [Preview links](https://developers.google.com/chat/how-tos/preview-links).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|url|string|false|read-only|Output only. The URL that was matched.|

<h2 id="tocS_Media">Media</h2>
<!-- backwards compatibility -->
<a id="schemamedia"></a>
<a id="schema_Media"></a>
<a id="tocSmedia"></a>
<a id="tocsmedia"></a>

```json
{
  "resourceName": "string"
}
```

Media resource.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|resourceName|string|false|none|Name of the media resource.|

<h2 id="tocS_Membership">Membership</h2>
<!-- backwards compatibility -->
<a id="schemamembership"></a>
<a id="schema_Membership"></a>
<a id="tocSmembership"></a>
<a id="tocsmembership"></a>

```json
{
  "createTime": "string",
  "deleteTime": "string",
  "groupMember": {
    "name": "string"
  },
  "member": {
    "displayName": "string",
    "domainId": "string",
    "isAnonymous": true,
    "name": "string",
    "type": "TYPE_UNSPECIFIED"
  },
  "name": "string",
  "role": "MEMBERSHIP_ROLE_UNSPECIFIED",
  "state": "MEMBERSHIP_STATE_UNSPECIFIED"
}
```

Represents a membership relation in Google Chat, such as whether a user or Chat app is invited to, part of, or absent from a space.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createTime|string(google-datetime)|false|none|Optional. Immutable. The creation time of the membership, such as when a member joined or was invited to join a space. This field is output only, except when used to import historical memberships in import mode spaces.|
|deleteTime|string(google-datetime)|false|none|Optional. Immutable. The deletion time of the membership, such as when a member left or was removed from a space. This field is output only, except when used to import historical memberships in import mode spaces.|
|groupMember|[Group](#schemagroup)|false|none|The Google Group the membership corresponds to. Only supports read operations. Other operations, like creating or updating a membership, aren't currently supported.|
|member|[User](#schemauser)|false|none|The Google Chat user or app the membership corresponds to. If your Chat app [authenticates as a user](https://developers.google.com/chat/api/guides/auth/users), the output populates the [user](https://developers.google.com/chat/api/reference/rest/v1/User) `name` and `type`.|
|name|string|false|none|Resource name of the membership, assigned by the server. Format: `spaces/{space}/members/{member}`|
|role|string|false|none|Optional. User's role within a Chat space, which determines their permitted actions in the space. [Developer Preview](https://developers.google.com/workspace/preview): This field can only be used as input in `UpdateMembership`.|
|state|string|false|read-only|Output only. State of the membership.|

#### Enumerated Values

|Property|Value|
|---|---|
|role|MEMBERSHIP_ROLE_UNSPECIFIED|
|role|ROLE_MEMBER|
|role|ROLE_MANAGER|
|state|MEMBERSHIP_STATE_UNSPECIFIED|
|state|JOINED|
|state|INVITED|
|state|NOT_A_MEMBER|

<h2 id="tocS_Message">Message</h2>
<!-- backwards compatibility -->
<a id="schemamessage"></a>
<a id="schema_Message"></a>
<a id="tocSmessage"></a>
<a id="tocsmessage"></a>

```json
{
  "actionResponse": {
    "dialogAction": {
      "actionStatus": {
        "statusCode": "OK",
        "userFacingMessage": "string"
      },
      "dialog": {
        "body": {
          "cardActions": [
            {}
          ],
          "displayStyle": "DISPLAY_STYLE_UNSPECIFIED",
          "fixedFooter": {},
          "header": {
            "imageAltText": "string",
            "imageType": "SQUARE",
            "imageUrl": "string",
            "subtitle": "string",
            "title": "string"
          },
          "name": "string",
          "peekCardHeader": {
            "imageAltText": "string",
            "imageType": "SQUARE",
            "imageUrl": "string",
            "subtitle": "string",
            "title": "string"
          },
          "sectionDividerStyle": "DIVIDER_STYLE_UNSPECIFIED",
          "sections": [
            {}
          ]
        }
      }
    },
    "type": "TYPE_UNSPECIFIED",
    "updatedWidget": {
      "suggestions": {
        "items": [
          {
            "bottomText": "string",
            "selected": true,
            "startIconUri": "string",
            "text": "string",
            "value": "string"
          }
        ]
      },
      "widget": "string"
    },
    "url": "string"
  },
  "annotations": [
    {
      "length": 0,
      "slashCommand": {
        "bot": {
          "displayName": "string",
          "domainId": "string",
          "isAnonymous": true,
          "name": "string",
          "type": "TYPE_UNSPECIFIED"
        },
        "commandId": "string",
        "commandName": "string",
        "triggersDialog": true,
        "type": "TYPE_UNSPECIFIED"
      },
      "startIndex": 0,
      "type": "ANNOTATION_TYPE_UNSPECIFIED",
      "userMention": {
        "type": "TYPE_UNSPECIFIED",
        "user": {
          "displayName": "string",
          "domainId": "string",
          "isAnonymous": true,
          "name": "string",
          "type": "TYPE_UNSPECIFIED"
        }
      }
    }
  ],
  "argumentText": "string",
  "attachedGifs": [
    {
      "uri": "string"
    }
  ],
  "attachment": [
    {
      "attachmentDataRef": {
        "attachmentUploadToken": "string",
        "resourceName": "string"
      },
      "contentName": "string",
      "contentType": "string",
      "downloadUri": "string",
      "driveDataRef": {
        "driveFileId": "string"
      },
      "name": "string",
      "source": "SOURCE_UNSPECIFIED",
      "thumbnailUri": "string"
    }
  ],
  "cards": [
    {
      "cardActions": [
        {
          "actionLabel": "string",
          "onClick": {
            "action": {
              "actionMethodName": "string",
              "parameters": [
                {
                  "key": "string",
                  "value": "string"
                }
              ]
            },
            "openLink": {
              "url": "string"
            }
          }
        }
      ],
      "header": {
        "imageStyle": "IMAGE_STYLE_UNSPECIFIED",
        "imageUrl": "string",
        "subtitle": "string",
        "title": "string"
      },
      "name": "string",
      "sections": [
        {
          "header": "string",
          "widgets": [
            {
              "buttons": [
                {
                  "imageButton": {
                    "icon": "ICON_UNSPECIFIED",
                    "iconUrl": "string",
                    "name": "string",
                    "onClick": {
                      "action": {
                        "actionMethodName": "string",
                        "parameters": [
                          {
                            "key": "string",
                            "value": "string"
                          }
                        ]
                      },
                      "openLink": {
                        "url": "string"
                      }
                    }
                  },
                  "textButton": {
                    "onClick": {
                      "action": {
                        "actionMethodName": "string",
                        "parameters": [
                          {
                            "key": "string",
                            "value": "string"
                          }
                        ]
                      },
                      "openLink": {
                        "url": "string"
                      }
                    },
                    "text": "string"
                  }
                }
              ],
              "image": {
                "aspectRatio": 0,
                "imageUrl": "string",
                "onClick": {
                  "action": {
                    "actionMethodName": "string",
                    "parameters": [
                      {
                        "key": "string",
                        "value": "string"
                      }
                    ]
                  },
                  "openLink": {
                    "url": "string"
                  }
                }
              },
              "keyValue": {
                "bottomLabel": "string",
                "button": {
                  "imageButton": {
                    "icon": "ICON_UNSPECIFIED",
                    "iconUrl": "string",
                    "name": "string",
                    "onClick": {
                      "action": {
                        "actionMethodName": "string",
                        "parameters": [
                          {
                            "key": "string",
                            "value": "string"
                          }
                        ]
                      },
                      "openLink": {
                        "url": "string"
                      }
                    }
                  },
                  "textButton": {
                    "onClick": {
                      "action": {
                        "actionMethodName": "string",
                        "parameters": [
                          {
                            "key": "string",
                            "value": "string"
                          }
                        ]
                      },
                      "openLink": {
                        "url": "string"
                      }
                    },
                    "text": "string"
                  }
                },
                "content": "string",
                "contentMultiline": true,
                "icon": "ICON_UNSPECIFIED",
                "iconUrl": "string",
                "onClick": {
                  "action": {
                    "actionMethodName": "string",
                    "parameters": [
                      {
                        "key": "string",
                        "value": "string"
                      }
                    ]
                  },
                  "openLink": {
                    "url": "string"
                  }
                },
                "topLabel": "string"
              },
              "textParagraph": {
                "text": "string"
              }
            }
          ]
        }
      ]
    }
  ],
  "cardsV2": [
    {
      "card": {
        "cardActions": [
          {}
        ],
        "displayStyle": "DISPLAY_STYLE_UNSPECIFIED",
        "fixedFooter": {},
        "header": {
          "imageAltText": "string",
          "imageType": "SQUARE",
          "imageUrl": "string",
          "subtitle": "string",
          "title": "string"
        },
        "name": "string",
        "peekCardHeader": {
          "imageAltText": "string",
          "imageType": "SQUARE",
          "imageUrl": "string",
          "subtitle": "string",
          "title": "string"
        },
        "sectionDividerStyle": "DIVIDER_STYLE_UNSPECIFIED",
        "sections": [
          {}
        ]
      },
      "cardId": "string"
    }
  ],
  "clientAssignedMessageId": "string",
  "createTime": "string",
  "deleteTime": "string",
  "deletionMetadata": {
    "deletionType": "DELETION_TYPE_UNSPECIFIED"
  },
  "emojiReactionSummaries": [
    {
      "emoji": {
        "customEmoji": {
          "uid": "string"
        },
        "unicode": "string"
      },
      "reactionCount": 0
    }
  ],
  "fallbackText": "string",
  "formattedText": "string",
  "lastUpdateTime": "string",
  "matchedUrl": {
    "url": "string"
  },
  "name": "string",
  "privateMessageViewer": {
    "displayName": "string",
    "domainId": "string",
    "isAnonymous": true,
    "name": "string",
    "type": "TYPE_UNSPECIFIED"
  },
  "quotedMessageMetadata": {
    "lastUpdateTime": "string",
    "name": "string"
  },
  "sender": {
    "displayName": "string",
    "domainId": "string",
    "isAnonymous": true,
    "name": "string",
    "type": "TYPE_UNSPECIFIED"
  },
  "slashCommand": {
    "commandId": "string"
  },
  "space": {
    "adminInstalled": true,
    "createTime": "string",
    "displayName": "string",
    "externalUserAllowed": true,
    "importMode": true,
    "name": "string",
    "singleUserBotDm": true,
    "spaceDetails": {
      "description": "string",
      "guidelines": "string"
    },
    "spaceHistoryState": "HISTORY_STATE_UNSPECIFIED",
    "spaceThreadingState": "SPACE_THREADING_STATE_UNSPECIFIED",
    "spaceType": "SPACE_TYPE_UNSPECIFIED",
    "threaded": true,
    "type": "TYPE_UNSPECIFIED"
  },
  "text": "string",
  "thread": {
    "name": "string",
    "threadKey": "string"
  },
  "threadReply": true
}
```

A message in a Google Chat space.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|actionResponse|[ActionResponse](#schemaactionresponse)|false|none|Input only. Parameters that a Chat app can use to configure how its response is posted.|
|annotations|[[Annotation](#schemaannotation)]|false|read-only|Output only. Annotations associated with the `text` in this message.|
|argumentText|string|false|read-only|Output only. Plain-text body of the message with all Chat app mentions stripped out.|
|attachedGifs|[[AttachedGif](#schemaattachedgif)]|false|read-only|Output only. GIF images that are attached to the message.|
|attachment|[[Attachment](#schemaattachment)]|false|none|User-uploaded attachment.|
|cards|[[Card](#schemacard)]|false|none|**Deprecated.** Deprecated: Use `cards_v2` instead. Rich, formatted, and interactive cards that you can use to display UI elements such as: formatted texts, buttons, and clickable images. Cards are normally displayed below the plain-text body of the message. `cards` and `cards_v2` can have a maximum size of 32 KB.|
|cardsV2|[[CardWithId](#schemacardwithid)]|false|none|An array of [cards](https://developers.google.com/chat/api/reference/rest/v1/cards). Only Chat apps can create cards. If your Chat app [authenticates as a user](https://developers.google.com/chat/api/guides/auth/users), the messages can't contain cards. To learn about cards and how to create them, see [Design dynamic, interactive, and consistent UIs with cards](https://developers.google.com/chat/ui). [Card builder](https://addons.gsuite.google.com/uikit/builder)|
|clientAssignedMessageId|string|false|none|Optional. A custom ID for the message. You can use field to identify a message, or to get, delete, or update a message. To set a custom ID, specify the [`messageId`](https://developers.google.com/chat/api/reference/rest/v1/spaces.messages/create#body.QUERY_PARAMETERS.message_id) field when you create the message. For details, see [Name a message](https://developers.google.com/chat/api/guides/v1/messages/create#name_a_created_message).|
|createTime|string(google-datetime)|false|none|Optional. Immutable. For spaces created in Chat, the time at which the message was created. This field is output only, except when used in import mode spaces. For import mode spaces, set this field to the historical timestamp at which the message was created in the source in order to preserve the original creation time.|
|deleteTime|string(google-datetime)|false|read-only|Output only. The time at which the message was deleted in Google Chat. If the message is never deleted, this field is empty.|
|deletionMetadata|[DeletionMetadata](#schemadeletionmetadata)|false|none|Output only. Information about a deleted message. A message is deleted when `delete_time` is set.|
|emojiReactionSummaries|[[EmojiReactionSummary](#schemaemojireactionsummary)]|false|read-only|Output only. The list of emoji reaction summaries on the message.|
|fallbackText|string|false|none|A plain-text description of the message's cards, used when the actual cards can't be displayed—for example, mobile notifications.|
|formattedText|string|false|read-only|Output only. Contains the message `text` with markups added to communicate formatting. This field might not capture all formatting visible in the UI, but includes the following: * [Markup syntax](https://developers.google.com/chat/format-messages) for bold, italic, strikethrough, monospace, and monospace block. * [User mentions](https://developers.google.com/chat/format-messages#messages-@mention) using the format ``. * Custom hyperlinks using the format `<{url}\|{rendered_text}>` where the first string is the URL and the second is the rendered text—for example, ``. * Custom emoji using the format `:{emoji_name}:`—for example, `:smile:`. This doesn't apply to Unicode emoji, such as `U+1F600` for a grinning face emoji. For more information, see [View text formatting sent in a message](https://developers.google.com/chat/format-messages#view_text_formatting_sent_in_a_message)|
|lastUpdateTime|string(google-datetime)|false|read-only|Output only. The time at which the message was last edited by a user. If the message has never been edited, this field is empty.|
|matchedUrl|[MatchedUrl](#schemamatchedurl)|false|none|Output only. A URL in `spaces.messages.text` that matches a link preview pattern. For more information, see [Preview links](https://developers.google.com/chat/how-tos/preview-links).|
|name|string|false|none|Resource name of the message. Format: `spaces/{space}/messages/{message}` Where `{space}` is the ID of the space where the message is posted and `{message}` is a system-assigned ID for the message. For example, `spaces/AAAAAAAAAAA/messages/BBBBBBBBBBB.BBBBBBBBBBB`. If you set a custom ID when you create a message, you can use this ID to specify the message in a request by replacing `{message}` with the value from the `clientAssignedMessageId` field. For example, `spaces/AAAAAAAAAAA/messages/client-custom-name`. For details, see [Name a message](https://developers.google.com/chat/api/guides/v1/messages/create#name_a_created_message).|
|privateMessageViewer|[User](#schemauser)|false|none|Immutable. Input for creating a message, otherwise output only. The user that can view the message. When set, the message is private and only visible to the specified user and the Chat app. Link previews and attachments aren't supported for private messages. Only Chat apps can send private messages. If your Chat app [authenticates as a user](https://developers.google.com/chat/api/guides/auth/users) to send a message, the message can't be private and must omit this field. For details, see [Send private messages to Google Chat users](https://developers.google.com/chat/api/guides/v1/messages/private).|
|quotedMessageMetadata|[QuotedMessageMetadata](#schemaquotedmessagemetadata)|false|none|Output only. Information about a message that's quoted by a Google Chat user in a space. Google Chat users can quote a message to reply to it.|
|sender|[User](#schemauser)|false|none|Output only. The user who created the message. If your Chat app [authenticates as a user](https://developers.google.com/chat/api/guides/auth/users), the output populates the [user](https://developers.google.com/chat/api/reference/rest/v1/User) `name` and `type`.|
|slashCommand|[SlashCommand](#schemaslashcommand)|false|none|Output only. Slash command information, if applicable.|
|space|[Space](#schemaspace)|false|none|If your Chat app [authenticates as a user](https://developers.google.com/chat/api/guides/auth/users), the output populates the [space](https://developers.google.com/chat/api/reference/rest/v1/spaces) `name`.|
|text|string|false|none|Plain-text body of the message. The first link to an image, video, or web page generates a [preview chip](https://developers.google.com/chat/how-tos/preview-links). You can also [@mention a Google Chat user](https://developers.google.com/chat/format-messages#messages-@mention), or everyone in the space. To learn about creating text messages, see [Send a text message](https://developers.google.com/chat/api/guides/v1/messages/create#create-text-messages).|
|thread|[Thread](#schemathread)|false|none|The thread the message belongs to. For example usage, see [Start or reply to a message thread](https://developers.google.com/chat/api/guides/v1/messages/create#create-message-thread).|
|threadReply|boolean|false|read-only|Output only. When `true`, the message is a response in a reply thread. When `false`, the message is visible in the space's top-level conversation as either the first message of a thread or a message with no threaded replies. If the space doesn't support reply in threads, this field is always `false`.|

<h2 id="tocS_OnClick">OnClick</h2>
<!-- backwards compatibility -->
<a id="schemaonclick"></a>
<a id="schema_OnClick"></a>
<a id="tocSonclick"></a>
<a id="tocsonclick"></a>

```json
{
  "action": {
    "actionMethodName": "string",
    "parameters": [
      {
        "key": "string",
        "value": "string"
      }
    ]
  },
  "openLink": {
    "url": "string"
  }
}
```

An `onclick` action (for example, open a link).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action|[FormAction](#schemaformaction)|false|none|A form action is triggered by this `onclick` action if specified.|
|openLink|[OpenLink](#schemaopenlink)|false|none|This `onclick` action triggers an open link action if specified.|

<h2 id="tocS_OpenLink">OpenLink</h2>
<!-- backwards compatibility -->
<a id="schemaopenlink"></a>
<a id="schema_OpenLink"></a>
<a id="tocSopenlink"></a>
<a id="tocsopenlink"></a>

```json
{
  "url": "string"
}
```

A link that opens a new window.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|url|string|false|none|The URL to open.|

<h2 id="tocS_QuotedMessageMetadata">QuotedMessageMetadata</h2>
<!-- backwards compatibility -->
<a id="schemaquotedmessagemetadata"></a>
<a id="schema_QuotedMessageMetadata"></a>
<a id="tocSquotedmessagemetadata"></a>
<a id="tocsquotedmessagemetadata"></a>

```json
{
  "lastUpdateTime": "string",
  "name": "string"
}
```

Information about a quoted message.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|lastUpdateTime|string(google-datetime)|false|read-only|Output only. The timestamp when the quoted message was created or when the quoted message was last updated.|
|name|string|false|read-only|Output only. Resource name of the quoted message. Format: `spaces/{space}/messages/{message}`|

<h2 id="tocS_Reaction">Reaction</h2>
<!-- backwards compatibility -->
<a id="schemareaction"></a>
<a id="schema_Reaction"></a>
<a id="tocSreaction"></a>
<a id="tocsreaction"></a>

```json
{
  "emoji": {
    "customEmoji": {
      "uid": "string"
    },
    "unicode": "string"
  },
  "name": "string",
  "user": {
    "displayName": "string",
    "domainId": "string",
    "isAnonymous": true,
    "name": "string",
    "type": "TYPE_UNSPECIFIED"
  }
}
```

A reaction to a message.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|emoji|[Emoji](#schemaemoji)|false|none|The emoji used in the reaction.|
|name|string|false|none|The resource name of the reaction. Format: `spaces/{space}/messages/{message}/reactions/{reaction}`|
|user|[User](#schemauser)|false|none|Output only. The user who created the reaction.|

<h2 id="tocS_Section">Section</h2>
<!-- backwards compatibility -->
<a id="schemasection"></a>
<a id="schema_Section"></a>
<a id="tocSsection"></a>
<a id="tocssection"></a>

```json
{
  "header": "string",
  "widgets": [
    {
      "buttons": [
        {
          "imageButton": {
            "icon": "ICON_UNSPECIFIED",
            "iconUrl": "string",
            "name": "string",
            "onClick": {
              "action": {
                "actionMethodName": "string",
                "parameters": [
                  {
                    "key": "string",
                    "value": "string"
                  }
                ]
              },
              "openLink": {
                "url": "string"
              }
            }
          },
          "textButton": {
            "onClick": {
              "action": {
                "actionMethodName": "string",
                "parameters": [
                  {
                    "key": "string",
                    "value": "string"
                  }
                ]
              },
              "openLink": {
                "url": "string"
              }
            },
            "text": "string"
          }
        }
      ],
      "image": {
        "aspectRatio": 0,
        "imageUrl": "string",
        "onClick": {
          "action": {
            "actionMethodName": "string",
            "parameters": [
              {
                "key": "string",
                "value": "string"
              }
            ]
          },
          "openLink": {
            "url": "string"
          }
        }
      },
      "keyValue": {
        "bottomLabel": "string",
        "button": {
          "imageButton": {
            "icon": "ICON_UNSPECIFIED",
            "iconUrl": "string",
            "name": "string",
            "onClick": {
              "action": {
                "actionMethodName": "string",
                "parameters": [
                  {
                    "key": "string",
                    "value": "string"
                  }
                ]
              },
              "openLink": {
                "url": "string"
              }
            }
          },
          "textButton": {
            "onClick": {
              "action": {
                "actionMethodName": "string",
                "parameters": [
                  {
                    "key": "string",
                    "value": "string"
                  }
                ]
              },
              "openLink": {
                "url": "string"
              }
            },
            "text": "string"
          }
        },
        "content": "string",
        "contentMultiline": true,
        "icon": "ICON_UNSPECIFIED",
        "iconUrl": "string",
        "onClick": {
          "action": {
            "actionMethodName": "string",
            "parameters": [
              {
                "key": "string",
                "value": "string"
              }
            ]
          },
          "openLink": {
            "url": "string"
          }
        },
        "topLabel": "string"
      },
      "textParagraph": {
        "text": "string"
      }
    }
  ]
}
```

A section contains a collection of widgets that are rendered (vertically) in the order that they are specified. Across all platforms, cards have a narrow fixed width, so there's currently no need for layout properties (for example, float).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|header|string|false|none|The header of the section. Formatted text is supported. For more information about formatting text, see [Formatting text in Google Chat apps](https://developers.google.com/chat/format-messages#card-formatting) and [Formatting text in Google Workspace Add-ons](https://developers.google.com/apps-script/add-ons/concepts/widgets#text_formatting).|
|widgets|[[WidgetMarkup](#schemawidgetmarkup)]|false|none|A section must contain at least one widget.|

<h2 id="tocS_SelectionItems">SelectionItems</h2>
<!-- backwards compatibility -->
<a id="schemaselectionitems"></a>
<a id="schema_SelectionItems"></a>
<a id="tocSselectionitems"></a>
<a id="tocsselectionitems"></a>

```json
{
  "items": [
    {
      "bottomText": "string",
      "selected": true,
      "startIconUri": "string",
      "text": "string",
      "value": "string"
    }
  ]
}
```

List of widget autocomplete results.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|items|[[GoogleAppsCardV1SelectionItem](#schemagoogleappscardv1selectionitem)]|false|none|An array of the SelectionItem objects.|

<h2 id="tocS_SetUpSpaceRequest">SetUpSpaceRequest</h2>
<!-- backwards compatibility -->
<a id="schemasetupspacerequest"></a>
<a id="schema_SetUpSpaceRequest"></a>
<a id="tocSsetupspacerequest"></a>
<a id="tocssetupspacerequest"></a>

```json
{
  "memberships": [
    {
      "createTime": "string",
      "deleteTime": "string",
      "groupMember": {
        "name": "string"
      },
      "member": {
        "displayName": "string",
        "domainId": "string",
        "isAnonymous": true,
        "name": "string",
        "type": "TYPE_UNSPECIFIED"
      },
      "name": "string",
      "role": "MEMBERSHIP_ROLE_UNSPECIFIED",
      "state": "MEMBERSHIP_STATE_UNSPECIFIED"
    }
  ],
  "requestId": "string",
  "space": {
    "adminInstalled": true,
    "createTime": "string",
    "displayName": "string",
    "externalUserAllowed": true,
    "importMode": true,
    "name": "string",
    "singleUserBotDm": true,
    "spaceDetails": {
      "description": "string",
      "guidelines": "string"
    },
    "spaceHistoryState": "HISTORY_STATE_UNSPECIFIED",
    "spaceThreadingState": "SPACE_THREADING_STATE_UNSPECIFIED",
    "spaceType": "SPACE_TYPE_UNSPECIFIED",
    "threaded": true,
    "type": "TYPE_UNSPECIFIED"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|memberships|[[Membership](#schemamembership)]|false|none|Optional. The Google Chat users to invite to join the space. Omit the calling user, as they are added automatically. The set currently allows up to 20 memberships (in addition to the caller). The `Membership.member` field must contain a `user` with `name` populated (format: `users/{user}`) and `type` set to `User.Type.HUMAN`. You can only add human users when setting up a space (adding Chat apps is only supported for direct message setup with the calling app). You can also add members using the user's email as an alias for {user}. For example, the `user.name` can be `users/example@gmail.com`." To invite Gmail users or users from external Google Workspace domains, user's email must be used for `{user}`. Optional when setting `Space.spaceType` to `SPACE`. Required when setting `Space.spaceType` to `GROUP_CHAT`, along with at least two memberships. Required when setting `Space.spaceType` to `DIRECT_MESSAGE` with a human user, along with exactly one membership. Must be empty when creating a 1:1 conversation between a human and the calling Chat app (when setting `Space.spaceType` to `DIRECT_MESSAGE` and `Space.singleUserBotDm` to `true`).|
|requestId|string|false|none|Optional. A unique identifier for this request. A random UUID is recommended. Specifying an existing request ID returns the space created with that ID instead of creating a new space. Specifying an existing request ID from the same Chat app with a different authenticated user returns an error.|
|space|[Space](#schemaspace)|false|none|Required. The `Space.spaceType` field is required. To create a space, set `Space.spaceType` to `SPACE` and set `Space.displayName`. If you receive the error message `ALREADY_EXISTS` when setting up a space, try a different `displayName`. An existing space within the Google Workspace organization might already use this display name. To create a group chat, set `Space.spaceType` to `GROUP_CHAT`. Don't set `Space.displayName`. To create a 1:1 conversation between humans, set `Space.spaceType` to `DIRECT_MESSAGE` and set `Space.singleUserBotDm` to `false`. Don't set `Space.displayName` or `Space.spaceDetails`. To create an 1:1 conversation between a human and the calling Chat app, set `Space.spaceType` to `DIRECT_MESSAGE` and `Space.singleUserBotDm` to `true`. Don't set `Space.displayName` or `Space.spaceDetails`. If a `DIRECT_MESSAGE` space already exists, that space is returned instead of creating a new space.|

<h2 id="tocS_SlashCommand">SlashCommand</h2>
<!-- backwards compatibility -->
<a id="schemaslashcommand"></a>
<a id="schema_SlashCommand"></a>
<a id="tocSslashcommand"></a>
<a id="tocsslashcommand"></a>

```json
{
  "commandId": "string"
}
```

A [slash command](https://developers.google.com/chat/how-tos/slash-commands) in Google Chat.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|commandId|string(int64)|false|none|The ID of the slash command invoked.|

<h2 id="tocS_SlashCommandMetadata">SlashCommandMetadata</h2>
<!-- backwards compatibility -->
<a id="schemaslashcommandmetadata"></a>
<a id="schema_SlashCommandMetadata"></a>
<a id="tocSslashcommandmetadata"></a>
<a id="tocsslashcommandmetadata"></a>

```json
{
  "bot": {
    "displayName": "string",
    "domainId": "string",
    "isAnonymous": true,
    "name": "string",
    "type": "TYPE_UNSPECIFIED"
  },
  "commandId": "string",
  "commandName": "string",
  "triggersDialog": true,
  "type": "TYPE_UNSPECIFIED"
}
```

Annotation metadata for slash commands (/).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bot|[User](#schemauser)|false|none|The Chat app whose command was invoked.|
|commandId|string(int64)|false|none|The command ID of the invoked slash command.|
|commandName|string|false|none|The name of the invoked slash command.|
|triggersDialog|boolean|false|none|Indicates whether the slash command is for a dialog.|
|type|string|false|none|The type of slash command.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|TYPE_UNSPECIFIED|
|type|ADD|
|type|INVOKE|

<h2 id="tocS_Space">Space</h2>
<!-- backwards compatibility -->
<a id="schemaspace"></a>
<a id="schema_Space"></a>
<a id="tocSspace"></a>
<a id="tocsspace"></a>

```json
{
  "adminInstalled": true,
  "createTime": "string",
  "displayName": "string",
  "externalUserAllowed": true,
  "importMode": true,
  "name": "string",
  "singleUserBotDm": true,
  "spaceDetails": {
    "description": "string",
    "guidelines": "string"
  },
  "spaceHistoryState": "HISTORY_STATE_UNSPECIFIED",
  "spaceThreadingState": "SPACE_THREADING_STATE_UNSPECIFIED",
  "spaceType": "SPACE_TYPE_UNSPECIFIED",
  "threaded": true,
  "type": "TYPE_UNSPECIFIED"
}
```

A space in Google Chat. Spaces are conversations between two or more users or 1:1 messages between a user and a Chat app.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|adminInstalled|boolean|false|read-only|Output only. Whether the Chat app was installed by a Google Workspace administrator. Administrators can install a Chat app for their domain, organizational unit, or a group of users. Administrators can only install Chat apps for direct messaging between users and the app. To support admin install, your app must feature direct messaging.|
|createTime|string(google-datetime)|false|none|Optional. Immutable. For spaces created in Chat, the time the space was created. This field is output only, except when used in import mode spaces. For import mode spaces, set this field to the historical timestamp at which the space was created in the source in order to preserve the original creation time. Only populated in the output when `spaceType` is `GROUP_CHAT` or `SPACE`.|
|displayName|string|false|none|The space's display name. Required when [creating a space](https://developers.google.com/chat/api/reference/rest/v1/spaces/create). If you receive the error message `ALREADY_EXISTS` when creating a space or updating the `displayName`, try a different `displayName`. An existing space within the Google Workspace organization might already use this display name. For direct messages, this field might be empty. Supports up to 128 characters.|
|externalUserAllowed|boolean|false|none|Immutable. Whether this space permits any Google Chat user as a member. Input when creating a space in a Google Workspace organization. Omit this field when creating spaces in the following conditions: * The authenticated user uses a Google Account. By default, the space permits any Google Chat user. * The space is used to [import data to Google Chat] (https://developers.google.com/chat/api/guides/import-data-overview). Import mode spaces must only permit members from the same Google Workspace organization. For existing spaces, this field is output only.|
|importMode|boolean|false|none|Optional. Whether this space is created in `Import Mode` as part of a data migration into Google Workspace. While spaces are being imported, they aren't visible to users until the import is complete.|
|name|string|false|none|Resource name of the space. Format: `spaces/{space}`|
|singleUserBotDm|boolean|false|none|Optional. Whether the space is a DM between a Chat app and a single human.|
|spaceDetails|[SpaceDetails](#schemaspacedetails)|false|none|Details about the space including description and rules.|
|spaceHistoryState|string|false|none|The message history state for messages and threads in this space.|
|spaceThreadingState|string|false|read-only|Output only. The threading state in the Chat space.|
|spaceType|string|false|none|The type of space. Required when creating a space or updating the space type of a space. Output only for other usage.|
|threaded|boolean|false|read-only|**Deprecated.** Output only. Deprecated: Use `spaceThreadingState` instead. Whether messages are threaded in this space.|
|type|string|false|read-only|**Deprecated.** Output only. Deprecated: Use `space_type` instead. The type of a space.|

#### Enumerated Values

|Property|Value|
|---|---|
|spaceHistoryState|HISTORY_STATE_UNSPECIFIED|
|spaceHistoryState|HISTORY_OFF|
|spaceHistoryState|HISTORY_ON|
|spaceThreadingState|SPACE_THREADING_STATE_UNSPECIFIED|
|spaceThreadingState|THREADED_MESSAGES|
|spaceThreadingState|GROUPED_MESSAGES|
|spaceThreadingState|UNTHREADED_MESSAGES|
|spaceType|SPACE_TYPE_UNSPECIFIED|
|spaceType|SPACE|
|spaceType|GROUP_CHAT|
|spaceType|DIRECT_MESSAGE|
|type|TYPE_UNSPECIFIED|
|type|ROOM|
|type|DM|

<h2 id="tocS_SpaceDataSource">SpaceDataSource</h2>
<!-- backwards compatibility -->
<a id="schemaspacedatasource"></a>
<a id="schema_SpaceDataSource"></a>
<a id="tocSspacedatasource"></a>
<a id="tocsspacedatasource"></a>

```json
{
  "defaultToCurrentSpace": true
}
```

A data source that populates Google Chat spaces as selection items for a multiselect menu. Only populates spaces that the user is a member of. [Google Chat apps](https://developers.google.com/chat):

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|defaultToCurrentSpace|boolean|false|none|If set to `true`, the multiselect menu selects the current Google Chat space as an item by default.|

<h2 id="tocS_SpaceDetails">SpaceDetails</h2>
<!-- backwards compatibility -->
<a id="schemaspacedetails"></a>
<a id="schema_SpaceDetails"></a>
<a id="tocSspacedetails"></a>
<a id="tocsspacedetails"></a>

```json
{
  "description": "string",
  "guidelines": "string"
}
```

Details about the space including description and rules.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|false|none|Optional. A description of the space. For example, describe the space's discussion topic, functional purpose, or participants. Supports up to 150 characters.|
|guidelines|string|false|none|Optional. The space's rules, expectations, and etiquette. Supports up to 5,000 characters.|

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

<h2 id="tocS_StringInputs">StringInputs</h2>
<!-- backwards compatibility -->
<a id="schemastringinputs"></a>
<a id="schema_StringInputs"></a>
<a id="tocSstringinputs"></a>
<a id="tocsstringinputs"></a>

```json
{
  "value": [
    "string"
  ]
}
```

Input parameter for regular widgets. For single-valued widgets, it is a single value list. For multi-valued widgets, such as checkbox, all the values are presented.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|value|[string]|false|none|An list of strings entered by the user.|

<h2 id="tocS_TextButton">TextButton</h2>
<!-- backwards compatibility -->
<a id="schematextbutton"></a>
<a id="schema_TextButton"></a>
<a id="tocStextbutton"></a>
<a id="tocstextbutton"></a>

```json
{
  "onClick": {
    "action": {
      "actionMethodName": "string",
      "parameters": [
        {
          "key": "string",
          "value": "string"
        }
      ]
    },
    "openLink": {
      "url": "string"
    }
  },
  "text": "string"
}
```

A button with text and `onclick` action.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|onClick|[OnClick](#schemaonclick)|false|none|The `onclick` action of the button.|
|text|string|false|none|The text of the button.|

<h2 id="tocS_TextParagraph">TextParagraph</h2>
<!-- backwards compatibility -->
<a id="schematextparagraph"></a>
<a id="schema_TextParagraph"></a>
<a id="tocStextparagraph"></a>
<a id="tocstextparagraph"></a>

```json
{
  "text": "string"
}
```

A paragraph of text. Formatted text supported. For more information about formatting text, see [Formatting text in Google Chat apps](https://developers.google.com/chat/format-messages#card-formatting) and [Formatting text in Google Workspace Add-ons](https://developers.google.com/apps-script/add-ons/concepts/widgets#text_formatting).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|text|string|false|none|none|

<h2 id="tocS_Thread">Thread</h2>
<!-- backwards compatibility -->
<a id="schemathread"></a>
<a id="schema_Thread"></a>
<a id="tocSthread"></a>
<a id="tocsthread"></a>

```json
{
  "name": "string",
  "threadKey": "string"
}
```

A thread in a Google Chat space. For example usage, see [Start or reply to a message thread](https://developers.google.com/chat/api/guides/v1/messages/create#create-message-thread). If you specify a thread when creating a message, you can set the [`messageReplyOption`](https://developers.google.com/chat/api/reference/rest/v1/spaces.messages/create#messagereplyoption) field to determine what happens if no matching thread is found.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|Output only. Resource name of the thread. Example: `spaces/{space}/threads/{thread}`|
|threadKey|string|false|none|Optional. Input for creating or updating a thread. Otherwise, output only. ID for the thread. Supports up to 4000 characters. This ID is unique to the Chat app that sets it. For example, if multiple Chat apps create a message using the same thread key, the messages are posted in different threads. To reply in a thread created by a person or another Chat app, specify the thread `name` field instead.|

<h2 id="tocS_TimeInput">TimeInput</h2>
<!-- backwards compatibility -->
<a id="schematimeinput"></a>
<a id="schema_TimeInput"></a>
<a id="tocStimeinput"></a>
<a id="tocstimeinput"></a>

```json
{
  "hours": 0,
  "minutes": 0
}
```

Time input values.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|hours|integer(int32)|false|none|The hour on a 24-hour clock.|
|minutes|integer(int32)|false|none|The number of minutes past the hour. Valid values are 0 to 59.|

<h2 id="tocS_TimeZone">TimeZone</h2>
<!-- backwards compatibility -->
<a id="schematimezone"></a>
<a id="schema_TimeZone"></a>
<a id="tocStimezone"></a>
<a id="tocstimezone"></a>

```json
{
  "id": "string",
  "offset": 0
}
```

The timezone ID and offset from Coordinated Universal Time (UTC). Only supported for the event types [`CARD_CLICKED`](https://developers.google.com/chat/api/reference/rest/v1/EventType#ENUM_VALUES.CARD_CLICKED) and [`SUBMIT_DIALOG`](https://developers.google.com/chat/api/reference/rest/v1/DialogEventType#ENUM_VALUES.SUBMIT_DIALOG).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|The [IANA TZ](https://www.iana.org/time-zones) time zone database code, such as "America/Toronto".|
|offset|integer(int32)|false|none|The user timezone offset, in milliseconds, from Coordinated Universal Time (UTC).|

<h2 id="tocS_UpdatedWidget">UpdatedWidget</h2>
<!-- backwards compatibility -->
<a id="schemaupdatedwidget"></a>
<a id="schema_UpdatedWidget"></a>
<a id="tocSupdatedwidget"></a>
<a id="tocsupdatedwidget"></a>

```json
{
  "suggestions": {
    "items": [
      {
        "bottomText": "string",
        "selected": true,
        "startIconUri": "string",
        "text": "string",
        "value": "string"
      }
    ]
  },
  "widget": "string"
}
```

The response of the updated widget. Used to provide autocomplete options for a widget.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|suggestions|[SelectionItems](#schemaselectionitems)|false|none|List of widget autocomplete results|
|widget|string|false|none|The ID of the updated widget. The ID must match the one for the widget that triggered the update request.|

<h2 id="tocS_UploadAttachmentRequest">UploadAttachmentRequest</h2>
<!-- backwards compatibility -->
<a id="schemauploadattachmentrequest"></a>
<a id="schema_UploadAttachmentRequest"></a>
<a id="tocSuploadattachmentrequest"></a>
<a id="tocsuploadattachmentrequest"></a>

```json
{
  "filename": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|filename|string|false|none|Required. The filename of the attachment, including the file extension.|

<h2 id="tocS_UploadAttachmentResponse">UploadAttachmentResponse</h2>
<!-- backwards compatibility -->
<a id="schemauploadattachmentresponse"></a>
<a id="schema_UploadAttachmentResponse"></a>
<a id="tocSuploadattachmentresponse"></a>
<a id="tocsuploadattachmentresponse"></a>

```json
{
  "attachmentDataRef": {
    "attachmentUploadToken": "string",
    "resourceName": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|attachmentDataRef|[AttachmentDataRef](#schemaattachmentdataref)|false|none|Reference to the uploaded attachment.|

<h2 id="tocS_User">User</h2>
<!-- backwards compatibility -->
<a id="schemauser"></a>
<a id="schema_User"></a>
<a id="tocSuser"></a>
<a id="tocsuser"></a>

```json
{
  "displayName": "string",
  "domainId": "string",
  "isAnonymous": true,
  "name": "string",
  "type": "TYPE_UNSPECIFIED"
}
```

A user in Google Chat. When returned as an output from a request, if your Chat app [authenticates as a user](https://developers.google.com/chat/api/guides/auth/users), the output for a `User` resource only populates the user's `name` and `type`.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|displayName|string|false|read-only|Output only. The user's display name.|
|domainId|string|false|none|Unique identifier of the user's Google Workspace domain.|
|isAnonymous|boolean|false|read-only|Output only. When `true`, the user is deleted or their profile is not visible.|
|name|string|false|none|Resource name for a Google Chat user. Format: `users/{user}`. `users/app` can be used as an alias for the calling app bot user. For human users, `{user}` is the same user identifier as: - the `id` for the [Person](https://developers.google.com/people/api/rest/v1/people) in the People API. For example, `users/123456789` in Chat API represents the same person as the `123456789` Person profile ID in People API. - the `id` for a [user](https://developers.google.com/admin-sdk/directory/reference/rest/v1/users) in the Admin SDK Directory API. - the user's email address can be used as an alias for `{user}` in API requests. For example, if the People API Person profile ID for `user@example.com` is `123456789`, you can use `users/user@example.com` as an alias to reference `users/123456789`. Only the canonical resource name (for example `users/123456789`) will be returned from the API.|
|type|string|false|none|User type.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|TYPE_UNSPECIFIED|
|type|HUMAN|
|type|BOT|

<h2 id="tocS_UserMentionMetadata">UserMentionMetadata</h2>
<!-- backwards compatibility -->
<a id="schemausermentionmetadata"></a>
<a id="schema_UserMentionMetadata"></a>
<a id="tocSusermentionmetadata"></a>
<a id="tocsusermentionmetadata"></a>

```json
{
  "type": "TYPE_UNSPECIFIED",
  "user": {
    "displayName": "string",
    "domainId": "string",
    "isAnonymous": true,
    "name": "string",
    "type": "TYPE_UNSPECIFIED"
  }
}
```

Annotation metadata for user mentions (@).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|false|none|The type of user mention.|
|user|[User](#schemauser)|false|none|The user mentioned.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|TYPE_UNSPECIFIED|
|type|ADD|
|type|MENTION|

<h2 id="tocS_WidgetMarkup">WidgetMarkup</h2>
<!-- backwards compatibility -->
<a id="schemawidgetmarkup"></a>
<a id="schema_WidgetMarkup"></a>
<a id="tocSwidgetmarkup"></a>
<a id="tocswidgetmarkup"></a>

```json
{
  "buttons": [
    {
      "imageButton": {
        "icon": "ICON_UNSPECIFIED",
        "iconUrl": "string",
        "name": "string",
        "onClick": {
          "action": {
            "actionMethodName": "string",
            "parameters": [
              {
                "key": "string",
                "value": "string"
              }
            ]
          },
          "openLink": {
            "url": "string"
          }
        }
      },
      "textButton": {
        "onClick": {
          "action": {
            "actionMethodName": "string",
            "parameters": [
              {
                "key": "string",
                "value": "string"
              }
            ]
          },
          "openLink": {
            "url": "string"
          }
        },
        "text": "string"
      }
    }
  ],
  "image": {
    "aspectRatio": 0,
    "imageUrl": "string",
    "onClick": {
      "action": {
        "actionMethodName": "string",
        "parameters": [
          {
            "key": "string",
            "value": "string"
          }
        ]
      },
      "openLink": {
        "url": "string"
      }
    }
  },
  "keyValue": {
    "bottomLabel": "string",
    "button": {
      "imageButton": {
        "icon": "ICON_UNSPECIFIED",
        "iconUrl": "string",
        "name": "string",
        "onClick": {
          "action": {
            "actionMethodName": "string",
            "parameters": [
              {
                "key": "string",
                "value": "string"
              }
            ]
          },
          "openLink": {
            "url": "string"
          }
        }
      },
      "textButton": {
        "onClick": {
          "action": {
            "actionMethodName": "string",
            "parameters": [
              {
                "key": "string",
                "value": "string"
              }
            ]
          },
          "openLink": {
            "url": "string"
          }
        },
        "text": "string"
      }
    },
    "content": "string",
    "contentMultiline": true,
    "icon": "ICON_UNSPECIFIED",
    "iconUrl": "string",
    "onClick": {
      "action": {
        "actionMethodName": "string",
        "parameters": [
          {
            "key": "string",
            "value": "string"
          }
        ]
      },
      "openLink": {
        "url": "string"
      }
    },
    "topLabel": "string"
  },
  "textParagraph": {
    "text": "string"
  }
}
```

A widget is a UI element that presents text and images.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|buttons|[[Button](#schemabutton)]|false|none|A list of buttons. Buttons is also `oneof data` and only one of these fields should be set.|
|image|[Image](#schemaimage)|false|none|Display an image in this widget.|
|keyValue|[KeyValue](#schemakeyvalue)|false|none|Display a key value item in this widget.|
|textParagraph|[TextParagraph](#schematextparagraph)|false|none|Display a text paragraph in this widget.|
