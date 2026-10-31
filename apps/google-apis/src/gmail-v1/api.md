<h1 id="gmail-api">Gmail API v1</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

The Gmail API lets you view and manage Gmail mailbox data like threads, messages, and labels.

Base URLs:

* <a href="https://gmail.googleapis.com/">https://gmail.googleapis.com/</a>

<a href="https://developers.google.com/terms/">Terms of service</a>
Web: <a href="https://google.com">Google</a> 
License: <a href="http://creativecommons.org/licenses/by/3.0/">Creative Commons Attribution 3.0</a>

<a href="https://developers.google.com/gmail/api/">External documentation</a>

# Authentication

- oAuth2 authentication. Oauth 2.0 implicit authentication

    - Flow: implicit
    - Authorization URL = [https://accounts.google.com/o/oauth2/auth](https://accounts.google.com/o/oauth2/auth)

|Scope|Scope Description|
|---|---|
|https://mail.google.com/|Read, compose, send, and permanently delete all your email from Gmail|
|https://www.googleapis.com/auth/gmail.addons.current.action.compose|Manage drafts and send emails when you interact with the add-on|
|https://www.googleapis.com/auth/gmail.addons.current.message.action|View your email messages when you interact with the add-on|
|https://www.googleapis.com/auth/gmail.addons.current.message.metadata|View your email message metadata when the add-on is running|
|https://www.googleapis.com/auth/gmail.addons.current.message.readonly|View your email messages when the add-on is running|
|https://www.googleapis.com/auth/gmail.compose|Manage drafts and send emails|
|https://www.googleapis.com/auth/gmail.insert|Add emails into your Gmail mailbox|
|https://www.googleapis.com/auth/gmail.labels|See and edit your email labels|
|https://www.googleapis.com/auth/gmail.metadata|View your email message metadata such as labels and headers, but not the email body|
|https://www.googleapis.com/auth/gmail.modify|Read, compose, and send emails from your Gmail account|
|https://www.googleapis.com/auth/gmail.readonly|View your email messages and settings|
|https://www.googleapis.com/auth/gmail.send|Send email on your behalf|
|https://www.googleapis.com/auth/gmail.settings.basic|See, edit, create, or change your email settings and filters in Gmail|
|https://www.googleapis.com/auth/gmail.settings.sharing|Manage your sensitive mail settings, including who can manage your mail|

- oAuth2 authentication. Oauth 2.0 authorizationCode authentication

    - Flow: authorizationCode
    - Authorization URL = [https://accounts.google.com/o/oauth2/auth](https://accounts.google.com/o/oauth2/auth)
    - Token URL = [https://accounts.google.com/o/oauth2/token](https://accounts.google.com/o/oauth2/token)

|Scope|Scope Description|
|---|---|
|https://mail.google.com/|Read, compose, send, and permanently delete all your email from Gmail|
|https://www.googleapis.com/auth/gmail.addons.current.action.compose|Manage drafts and send emails when you interact with the add-on|
|https://www.googleapis.com/auth/gmail.addons.current.message.action|View your email messages when you interact with the add-on|
|https://www.googleapis.com/auth/gmail.addons.current.message.metadata|View your email message metadata when the add-on is running|
|https://www.googleapis.com/auth/gmail.addons.current.message.readonly|View your email messages when the add-on is running|
|https://www.googleapis.com/auth/gmail.compose|Manage drafts and send emails|
|https://www.googleapis.com/auth/gmail.insert|Add emails into your Gmail mailbox|
|https://www.googleapis.com/auth/gmail.labels|See and edit your email labels|
|https://www.googleapis.com/auth/gmail.metadata|View your email message metadata such as labels and headers, but not the email body|
|https://www.googleapis.com/auth/gmail.modify|Read, compose, and send emails from your Gmail account|
|https://www.googleapis.com/auth/gmail.readonly|View your email messages and settings|
|https://www.googleapis.com/auth/gmail.send|Send email on your behalf|
|https://www.googleapis.com/auth/gmail.settings.basic|See, edit, create, or change your email settings and filters in Gmail|
|https://www.googleapis.com/auth/gmail.settings.sharing|Manage your sensitive mail settings, including who can manage your mail|

<h1 id="gmail-api-users">users</h1>

## gmail.users.drafts.list

<a id="opIdgmail.users.drafts.list"></a>

> Code samples

```bash
curl https://gmail.googleapis.com/gmail/v1/users/string/drafts \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /gmail/v1/users/{userId}/drafts`

Lists the drafts in the user's mailbox.

<h3 id="gmailusersdraftslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userId|path|string|true|The user's email address. The special value `me` can be used to indicate the authenticated user.|
|includeSpamTrash|query|boolean|false|Include drafts from `SPAM` and `TRASH` in the results.|
|maxResults|query|integer|false|Maximum number of drafts to return. This field defaults to 100. The maximum allowed value for this field is 500.|
|pageToken|query|string|false|Page token to retrieve a specific page of results in the list.|
|q|query|string|false|Only return draft messages matching the specified query. Supports the same query format as the Gmail search box. For example, `"from:someuser@example.com rfc822msgid: is:unread"`.|
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
  "drafts": [
    {
      "id": "string",
      "message": {
        "historyId": "string",
        "id": "string",
        "internalDate": "string",
        "labelIds": [
          "string"
        ],
        "payload": {
          "body": {
            "attachmentId": "string",
            "data": "string",
            "size": 0
          },
          "filename": "string",
          "headers": [
            {
              "name": "string",
              "value": "string"
            }
          ],
          "mimeType": "string",
          "partId": "string",
          "parts": [
            {}
          ]
        },
        "raw": "string",
        "sizeEstimate": 0,
        "snippet": "string",
        "threadId": "string"
      }
    }
  ],
  "nextPageToken": "string",
  "resultSizeEstimate": 0
}
```

<h3 id="gmailusersdraftslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListDraftsResponse](#schemalistdraftsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://mail.google.com/ ) & Oauth2c ( Scopes: https://mail.google.com/ ), Oauth2 ( Scopes: https://www.googleapis.com/auth/gmail.compose ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/gmail.compose ), Oauth2 ( Scopes: https://www.googleapis.com/auth/gmail.modify ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/gmail.modify ), Oauth2 ( Scopes: https://www.googleapis.com/auth/gmail.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/gmail.readonly )
</aside>

## gmail.users.drafts.create

<a id="opIdgmail.users.drafts.create"></a>

> Code samples

```bash
curl https://gmail.googleapis.com/gmail/v1/users/string/drafts \
  -X POST \
  -H 'Content-Type: message/cpim' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{"id":"string","message":{"historyId":"string","id":"string","internalDate":"string","labelIds":["string"],"payload":{"body":{"attachmentId":"string","data":"string","size":0},"filename":"string","headers":[{"name":"string","value":"string"}],"mimeType":"string","partId":"string","parts":[{}]},"raw":"string","sizeEstimate":0,"snippet":"string","threadId":"string"}}'
```

`POST /gmail/v1/users/{userId}/drafts`

Creates a new draft with the `DRAFT` label.

> Body parameter

```json
{
  "id": "string",
  "message": {
    "historyId": "string",
    "id": "string",
    "internalDate": "string",
    "labelIds": [
      "string"
    ],
    "payload": {
      "body": {
        "attachmentId": "string",
        "data": "string",
        "size": 0
      },
      "filename": "string",
      "headers": [
        {
          "name": "string",
          "value": "string"
        }
      ],
      "mimeType": "string",
      "partId": "string",
      "parts": [
        {}
      ]
    },
    "raw": "string",
    "sizeEstimate": 0,
    "snippet": "string",
    "threadId": "string"
  }
}
```

<h3 id="gmailusersdraftscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userId|path|string|true|The user's email address. The special value `me` can be used to indicate the authenticated user.|
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
|body|body|[Draft](#schemadraft)|false|none|
|» id|body|string|false|The immutable ID of the draft.|
|» message|body|[Message](#schemamessage)|false|The message content of the draft.|

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
  "id": "string",
  "message": {
    "historyId": "string",
    "id": "string",
    "internalDate": "string",
    "labelIds": [
      "string"
    ],
    "payload": {
      "body": {
        "attachmentId": "string",
        "data": "string",
        "size": 0
      },
      "filename": "string",
      "headers": [
        {
          "name": "string",
          "value": "string"
        }
      ],
      "mimeType": "string",
      "partId": "string",
      "parts": [
        {}
      ]
    },
    "raw": "string",
    "sizeEstimate": 0,
    "snippet": "string",
    "threadId": "string"
  }
}
```

<h3 id="gmailusersdraftscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Draft](#schemadraft)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://mail.google.com/ ) & Oauth2c ( Scopes: https://mail.google.com/ ), Oauth2 ( Scopes: https://www.googleapis.com/auth/gmail.addons.current.action.compose ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/gmail.addons.current.action.compose ), Oauth2 ( Scopes: https://www.googleapis.com/auth/gmail.compose ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/gmail.compose ), Oauth2 ( Scopes: https://www.googleapis.com/auth/gmail.modify ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/gmail.modify )
</aside>

## gmail.users.drafts.send

<a id="opIdgmail.users.drafts.send"></a>

> Code samples

```bash
curl https://gmail.googleapis.com/gmail/v1/users/string/drafts/send \
  -X POST \
  -H 'Content-Type: message/cpim' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{"id":"string","message":{"historyId":"string","id":"string","internalDate":"string","labelIds":["string"],"payload":{"body":{"attachmentId":"string","data":"string","size":0},"filename":"string","headers":[{"name":"string","value":"string"}],"mimeType":"string","partId":"string","parts":[{}]},"raw":"string","sizeEstimate":0,"snippet":"string","threadId":"string"}}'
```

`POST /gmail/v1/users/{userId}/drafts/send`

Sends the specified, existing draft to the recipients in the `To`, `Cc`, and `Bcc` headers.

> Body parameter

```json
{
  "id": "string",
  "message": {
    "historyId": "string",
    "id": "string",
    "internalDate": "string",
    "labelIds": [
      "string"
    ],
    "payload": {
      "body": {
        "attachmentId": "string",
        "data": "string",
        "size": 0
      },
      "filename": "string",
      "headers": [
        {
          "name": "string",
          "value": "string"
        }
      ],
      "mimeType": "string",
      "partId": "string",
      "parts": [
        {}
      ]
    },
    "raw": "string",
    "sizeEstimate": 0,
    "snippet": "string",
    "threadId": "string"
  }
}
```

<h3 id="gmailusersdraftssend-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userId|path|string|true|The user's email address. The special value `me` can be used to indicate the authenticated user.|
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
|body|body|[Draft](#schemadraft)|false|none|
|» id|body|string|false|The immutable ID of the draft.|
|» message|body|[Message](#schemamessage)|false|The message content of the draft.|

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
  "historyId": "string",
  "id": "string",
  "internalDate": "string",
  "labelIds": [
    "string"
  ],
  "payload": {
    "body": {
      "attachmentId": "string",
      "data": "string",
      "size": 0
    },
    "filename": "string",
    "headers": [
      {
        "name": "string",
        "value": "string"
      }
    ],
    "mimeType": "string",
    "partId": "string",
    "parts": [
      {}
    ]
  },
  "raw": "string",
  "sizeEstimate": 0,
  "snippet": "string",
  "threadId": "string"
}
```

<h3 id="gmailusersdraftssend-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Message](#schemamessage)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://mail.google.com/ ) & Oauth2c ( Scopes: https://mail.google.com/ ), Oauth2 ( Scopes: https://www.googleapis.com/auth/gmail.addons.current.action.compose ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/gmail.addons.current.action.compose ), Oauth2 ( Scopes: https://www.googleapis.com/auth/gmail.compose ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/gmail.compose ), Oauth2 ( Scopes: https://www.googleapis.com/auth/gmail.modify ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/gmail.modify )
</aside>

## gmail.users.drafts.get

<a id="opIdgmail.users.drafts.get"></a>

> Code samples

```bash
curl https://gmail.googleapis.com/gmail/v1/users/string/drafts/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /gmail/v1/users/{userId}/drafts/{id}`

Gets the specified draft.

<h3 id="gmailusersdraftsget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userId|path|string|true|The user's email address. The special value `me` can be used to indicate the authenticated user.|
|id|path|string|true|The ID of the draft to retrieve.|
|format|query|string|false|The format to return the draft in.|
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
|format|minimal|
|format|full|
|format|raw|
|format|metadata|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "message": {
    "historyId": "string",
    "id": "string",
    "internalDate": "string",
    "labelIds": [
      "string"
    ],
    "payload": {
      "body": {
        "attachmentId": "string",
        "data": "string",
        "size": 0
      },
      "filename": "string",
      "headers": [
        {
          "name": "string",
          "value": "string"
        }
      ],
      "mimeType": "string",
      "partId": "string",
      "parts": [
        {}
      ]
    },
    "raw": "string",
    "sizeEstimate": 0,
    "snippet": "string",
    "threadId": "string"
  }
}
```

<h3 id="gmailusersdraftsget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Draft](#schemadraft)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://mail.google.com/ ) & Oauth2c ( Scopes: https://mail.google.com/ ), Oauth2 ( Scopes: https://www.googleapis.com/auth/gmail.compose ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/gmail.compose ), Oauth2 ( Scopes: https://www.googleapis.com/auth/gmail.modify ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/gmail.modify ), Oauth2 ( Scopes: https://www.googleapis.com/auth/gmail.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/gmail.readonly )
</aside>

## gmail.users.drafts.update

<a id="opIdgmail.users.drafts.update"></a>

> Code samples

```bash
curl https://gmail.googleapis.com/gmail/v1/users/string/drafts/string \
  -X PUT \
  -H 'Content-Type: message/cpim' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{"id":"string","message":{"historyId":"string","id":"string","internalDate":"string","labelIds":["string"],"payload":{"body":{"attachmentId":"string","data":"string","size":0},"filename":"string","headers":[{"name":"string","value":"string"}],"mimeType":"string","partId":"string","parts":[{}]},"raw":"string","sizeEstimate":0,"snippet":"string","threadId":"string"}}'
```

`PUT /gmail/v1/users/{userId}/drafts/{id}`

Replaces a draft's content.

> Body parameter

```json
{
  "id": "string",
  "message": {
    "historyId": "string",
    "id": "string",
    "internalDate": "string",
    "labelIds": [
      "string"
    ],
    "payload": {
      "body": {
        "attachmentId": "string",
        "data": "string",
        "size": 0
      },
      "filename": "string",
      "headers": [
        {
          "name": "string",
          "value": "string"
        }
      ],
      "mimeType": "string",
      "partId": "string",
      "parts": [
        {}
      ]
    },
    "raw": "string",
    "sizeEstimate": 0,
    "snippet": "string",
    "threadId": "string"
  }
}
```

<h3 id="gmailusersdraftsupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userId|path|string|true|The user's email address. The special value `me` can be used to indicate the authenticated user.|
|id|path|string|true|The ID of the draft to update.|
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
|body|body|[Draft](#schemadraft)|false|none|
|» id|body|string|false|The immutable ID of the draft.|
|» message|body|[Message](#schemamessage)|false|The message content of the draft.|

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
  "id": "string",
  "message": {
    "historyId": "string",
    "id": "string",
    "internalDate": "string",
    "labelIds": [
      "string"
    ],
    "payload": {
      "body": {
        "attachmentId": "string",
        "data": "string",
        "size": 0
      },
      "filename": "string",
      "headers": [
        {
          "name": "string",
          "value": "string"
        }
      ],
      "mimeType": "string",
      "partId": "string",
      "parts": [
        {}
      ]
    },
    "raw": "string",
    "sizeEstimate": 0,
    "snippet": "string",
    "threadId": "string"
  }
}
```

<h3 id="gmailusersdraftsupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Draft](#schemadraft)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://mail.google.com/ ) & Oauth2c ( Scopes: https://mail.google.com/ ), Oauth2 ( Scopes: https://www.googleapis.com/auth/gmail.addons.current.action.compose ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/gmail.addons.current.action.compose ), Oauth2 ( Scopes: https://www.googleapis.com/auth/gmail.compose ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/gmail.compose ), Oauth2 ( Scopes: https://www.googleapis.com/auth/gmail.modify ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/gmail.modify )
</aside>

## gmail.users.drafts.delete

<a id="opIdgmail.users.drafts.delete"></a>

> Code samples

```bash
curl https://gmail.googleapis.com/gmail/v1/users/string/drafts/string \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /gmail/v1/users/{userId}/drafts/{id}`

Immediately and permanently deletes the specified draft. Does not simply trash it.

<h3 id="gmailusersdraftsdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userId|path|string|true|The user's email address. The special value `me` can be used to indicate the authenticated user.|
|id|path|string|true|The ID of the draft to delete.|
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

<h3 id="gmailusersdraftsdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://mail.google.com/ ) & Oauth2c ( Scopes: https://mail.google.com/ ), Oauth2 ( Scopes: https://www.googleapis.com/auth/gmail.addons.current.action.compose ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/gmail.addons.current.action.compose ), Oauth2 ( Scopes: https://www.googleapis.com/auth/gmail.compose ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/gmail.compose ), Oauth2 ( Scopes: https://www.googleapis.com/auth/gmail.modify ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/gmail.modify )
</aside>

## gmail.users.history.list

<a id="opIdgmail.users.history.list"></a>

> Code samples

```bash
curl https://gmail.googleapis.com/gmail/v1/users/string/history \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /gmail/v1/users/{userId}/history`

Lists the history of all changes to the given mailbox. History results are returned in chronological order (increasing `historyId`).

<h3 id="gmailusershistorylist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userId|path|string|true|The user's email address. The special value `me` can be used to indicate the authenticated user.|
|historyTypes|query|[string]|false|History types to be returned by the function|
|labelId|query|string|false|Only return messages with a label matching the ID.|
|maxResults|query|integer|false|Maximum number of history records to return. This field defaults to 100. The maximum allowed value for this field is 500.|
|pageToken|query|string|false|Page token to retrieve a specific page of results in the list.|
|startHistoryId|query|string|false|Required. Returns history records after the specified `startHistoryId`. The supplied `startHistoryId` should be obtained from the `historyId` of a message, thread, or previous `list` response. History IDs increase chronologically but are not contiguous with random gaps in between valid IDs. Supplying an invalid or out of date `startHistoryId` typically returns an `HTTP 404` error code. A `historyId` is typically valid for at least a week, but in some rare circumstances may be valid for only a few hours. If you receive an `HTTP 404` error response, your application should perform a full sync. If you receive no `nextPageToken` in the response, there are no updates to retrieve and you can store the returned `historyId` for a future request.|
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
|historyTypes|messageAdded|
|historyTypes|messageDeleted|
|historyTypes|labelAdded|
|historyTypes|labelRemoved|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "history": [
    {
      "id": "string",
      "labelsAdded": [
        {
          "labelIds": [
            "string"
          ],
          "message": {
            "historyId": "string",
            "id": "string",
            "internalDate": "string",
            "labelIds": [
              "string"
            ],
            "payload": {
              "body": {
                "attachmentId": "string",
                "data": "string",
                "size": 0
              },
              "filename": "string",
              "headers": [
                {
                  "name": "string",
                  "value": "string"
                }
              ],
              "mimeType": "string",
              "partId": "string",
              "parts": [
                {}
              ]
            },
            "raw": "string",
            "sizeEstimate": 0,
            "snippet": "string",
            "threadId": "string"
          }
        }
      ],
      "labelsRemoved": [
        {
          "labelIds": [
            "string"
          ],
          "message": {
            "historyId": "string",
            "id": "string",
            "internalDate": "string",
            "labelIds": [
              "string"
            ],
            "payload": {
              "body": {
                "attachmentId": "string",
                "data": "string",
                "size": 0
              },
              "filename": "string",
              "headers": [
                {
                  "name": "string",
                  "value": "string"
                }
              ],
              "mimeType": "string",
              "partId": "string",
              "parts": [
                {}
              ]
            },
            "raw": "string",
            "sizeEstimate": 0,
            "snippet": "string",
            "threadId": "string"
          }
        }
      ],
      "messages": [
        {
          "historyId": "string",
          "id": "string",
          "internalDate": "string",
          "labelIds": [
            "string"
          ],
          "payload": {
            "body": {
              "attachmentId": "string",
              "data": "string",
              "size": 0
            },
            "filename": "string",
            "headers": [
              {
                "name": "string",
                "value": "string"
              }
            ],
            "mimeType": "string",
            "partId": "string",
            "parts": [
              {}
            ]
          },
          "raw": "string",
          "sizeEstimate": 0,
          "snippet": "string",
          "threadId": "string"
        }
      ],
      "messagesAdded": [
        {
          "message": {
            "historyId": "string",
            "id": "string",
            "internalDate": "string",
            "labelIds": [
              "string"
            ],
            "payload": {
              "body": {
                "attachmentId": "string",
                "data": "string",
                "size": 0
              },
              "filename": "string",
              "headers": [
                {
                  "name": "string",
                  "value": "string"
                }
              ],
              "mimeType": "string",
              "partId": "string",
              "parts": [
                {}
              ]
            },
            "raw": "string",
            "sizeEstimate": 0,
            "snippet": "string",
            "threadId": "string"
          }
        }
      ],
      "messagesDeleted": [
        {
          "message": {
            "historyId": "string",
            "id": "string",
            "internalDate": "string",
            "labelIds": [
              "string"
            ],
            "payload": {
              "body": {
                "attachmentId": "string",
                "data": "string",
                "size": 0
              },
              "filename": "string",
              "headers": [
                {
                  "name": "string",
                  "value": "string"
                }
              ],
              "mimeType": "string",
              "partId": "string",
              "parts": [
                {}
              ]
            },
            "raw": "string",
            "sizeEstimate": 0,
            "snippet": "string",
            "threadId": "string"
          }
        }
      ]
    }
  ],
  "historyId": "string",
  "nextPageToken": "string"
}
```

<h3 id="gmailusershistorylist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListHistoryResponse](#schemalisthistoryresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://mail.google.com/ ) & Oauth2c ( Scopes: https://mail.google.com/ ), Oauth2 ( Scopes: https://www.googleapis.com/auth/gmail.metadata ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/gmail.metadata ), Oauth2 ( Scopes: https://www.googleapis.com/auth/gmail.modify ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/gmail.modify ), Oauth2 ( Scopes: https://www.googleapis.com/auth/gmail.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/gmail.readonly )
</aside>

## gmail.users.labels.list

<a id="opIdgmail.users.labels.list"></a>

> Code samples

```bash
curl https://gmail.googleapis.com/gmail/v1/users/string/labels \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /gmail/v1/users/{userId}/labels`

Lists all labels in the user's mailbox.

<h3 id="gmailuserslabelslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userId|path|string|true|The user's email address. The special value `me` can be used to indicate the authenticated user.|
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
  "labels": [
    {
      "color": {
        "backgroundColor": "string",
        "textColor": "string"
      },
      "id": "string",
      "labelListVisibility": "labelShow",
      "messageListVisibility": "show",
      "messagesTotal": 0,
      "messagesUnread": 0,
      "name": "string",
      "threadsTotal": 0,
      "threadsUnread": 0,
      "type": "system"
    }
  ]
}
```

<h3 id="gmailuserslabelslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListLabelsResponse](#schemalistlabelsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://mail.google.com/ ) & Oauth2c ( Scopes: https://mail.google.com/ ), Oauth2 ( Scopes: https://www.googleapis.com/auth/gmail.labels ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/gmail.labels ), Oauth2 ( Scopes: https://www.googleapis.com/auth/gmail.metadata ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/gmail.metadata ), Oauth2 ( Scopes: https://www.googleapis.com/auth/gmail.modify ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/gmail.modify ), Oauth2 ( Scopes: https://www.googleapis.com/auth/gmail.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/gmail.readonly )
</aside>

## gmail.users.labels.create

<a id="opIdgmail.users.labels.create"></a>

> Code samples

```bash
curl https://gmail.googleapis.com/gmail/v1/users/string/labels \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "color": {
      "backgroundColor": "string",
      "textColor": "string"
    },
    "id": "string",
    "labelListVisibility": "labelShow",
    "messageListVisibility": "show",
    "messagesTotal": 0,
    "messagesUnread": 0,
    "name": "string",
    "threadsTotal": 0,
    "threadsUnread": 0,
    "type": "system"
  }'
```

`POST /gmail/v1/users/{userId}/labels`

Creates a new label.

> Body parameter

```json
{
  "color": {
    "backgroundColor": "string",
    "textColor": "string"
  },
  "id": "string",
  "labelListVisibility": "labelShow",
  "messageListVisibility": "show",
  "messagesTotal": 0,
  "messagesUnread": 0,
  "name": "string",
  "threadsTotal": 0,
  "threadsUnread": 0,
  "type": "system"
}
```

<h3 id="gmailuserslabelscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userId|path|string|true|The user's email address. The special value `me` can be used to indicate the authenticated user.|
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
|body|body|[Label](#schemalabel)|false|none|
|» color|body|[LabelColor](#schemalabelcolor)|false|The color to assign to the label. Color is only available for labels that have their `type` set to `user`.|
|» id|body|string|false|The immutable ID of the label.|
|» labelListVisibility|body|string|false|The visibility of the label in the label list in the Gmail web interface.|
|» messageListVisibility|body|string|false|The visibility of messages with this label in the message list in the Gmail web interface.|
|» messagesTotal|body|integer(int32)|false|The total number of messages with the label.|
|» messagesUnread|body|integer(int32)|false|The number of unread messages with the label.|
|» name|body|string|false|The display name of the label.|
|» threadsTotal|body|integer(int32)|false|The total number of threads with the label.|
|» threadsUnread|body|integer(int32)|false|The number of unread threads with the label.|
|» type|body|string|false|The owner type for the label. User labels are created by the user and can be modified and deleted by the user and can be applied to any message or thread. System labels are internally created and cannot be added, modified, or deleted. System labels may be able to be applied to or removed from messages and threads under some circumstances but this is not guaranteed. For example, users can apply and remove the `INBOX` and `UNREAD` labels from messages and threads, but cannot apply or remove the `DRAFTS` or `SENT` labels from messages or threads.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|
|» labelListVisibility|labelShow|
|» labelListVisibility|labelShowIfUnread|
|» labelListVisibility|labelHide|
|» messageListVisibility|show|
|» messageListVisibility|hide|
|» type|system|
|» type|user|

> Example responses

> 200 Response

```json
{
  "color": {
    "backgroundColor": "string",
    "textColor": "string"
  },
  "id": "string",
  "labelListVisibility": "labelShow",
  "messageListVisibility": "show",
  "messagesTotal": 0,
  "messagesUnread": 0,
  "name": "string",
  "threadsTotal": 0,
  "threadsUnread": 0,
  "type": "system"
}
```

<h3 id="gmailuserslabelscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Label](#schemalabel)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://mail.google.com/ ) & Oauth2c ( Scopes: https://mail.google.com/ ), Oauth2 ( Scopes: https://www.googleapis.com/auth/gmail.labels ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/gmail.labels ), Oauth2 ( Scopes: https://www.googleapis.com/auth/gmail.modify ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/gmail.modify )
</aside>

## gmail.users.labels.get

<a id="opIdgmail.users.labels.get"></a>

> Code samples

```bash
curl https://gmail.googleapis.com/gmail/v1/users/string/labels/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /gmail/v1/users/{userId}/labels/{id}`

Gets the specified label.

<h3 id="gmailuserslabelsget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userId|path|string|true|The user's email address. The special value `me` can be used to indicate the authenticated user.|
|id|path|string|true|The ID of the label to retrieve.|
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
  "color": {
    "backgroundColor": "string",
    "textColor": "string"
  },
  "id": "string",
  "labelListVisibility": "labelShow",
  "messageListVisibility": "show",
  "messagesTotal": 0,
  "messagesUnread": 0,
  "name": "string",
  "threadsTotal": 0,
  "threadsUnread": 0,
  "type": "system"
}
```

<h3 id="gmailuserslabelsget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Label](#schemalabel)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://mail.google.com/ ) & Oauth2c ( Scopes: https://mail.google.com/ ), Oauth2 ( Scopes: https://www.googleapis.com/auth/gmail.labels ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/gmail.labels ), Oauth2 ( Scopes: https://www.googleapis.com/auth/gmail.metadata ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/gmail.metadata ), Oauth2 ( Scopes: https://www.googleapis.com/auth/gmail.modify ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/gmail.modify ), Oauth2 ( Scopes: https://www.googleapis.com/auth/gmail.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/gmail.readonly )
</aside>

## gmail.users.labels.update

<a id="opIdgmail.users.labels.update"></a>

> Code samples

```bash
curl https://gmail.googleapis.com/gmail/v1/users/string/labels/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "color": {
      "backgroundColor": "string",
      "textColor": "string"
    },
    "id": "string",
    "labelListVisibility": "labelShow",
    "messageListVisibility": "show",
    "messagesTotal": 0,
    "messagesUnread": 0,
    "name": "string",
    "threadsTotal": 0,
    "threadsUnread": 0,
    "type": "system"
  }'
```

`PUT /gmail/v1/users/{userId}/labels/{id}`

Updates the specified label.

> Body parameter

```json
{
  "color": {
    "backgroundColor": "string",
    "textColor": "string"
  },
  "id": "string",
  "labelListVisibility": "labelShow",
  "messageListVisibility": "show",
  "messagesTotal": 0,
  "messagesUnread": 0,
  "name": "string",
  "threadsTotal": 0,
  "threadsUnread": 0,
  "type": "system"
}
```

<h3 id="gmailuserslabelsupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userId|path|string|true|The user's email address. The special value `me` can be used to indicate the authenticated user.|
|id|path|string|true|The ID of the label to update.|
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
|body|body|[Label](#schemalabel)|false|none|
|» color|body|[LabelColor](#schemalabelcolor)|false|The color to assign to the label. Color is only available for labels that have their `type` set to `user`.|
|» id|body|string|false|The immutable ID of the label.|
|» labelListVisibility|body|string|false|The visibility of the label in the label list in the Gmail web interface.|
|» messageListVisibility|body|string|false|The visibility of messages with this label in the message list in the Gmail web interface.|
|» messagesTotal|body|integer(int32)|false|The total number of messages with the label.|
|» messagesUnread|body|integer(int32)|false|The number of unread messages with the label.|
|» name|body|string|false|The display name of the label.|
|» threadsTotal|body|integer(int32)|false|The total number of threads with the label.|
|» threadsUnread|body|integer(int32)|false|The number of unread threads with the label.|
|» type|body|string|false|The owner type for the label. User labels are created by the user and can be modified and deleted by the user and can be applied to any message or thread. System labels are internally created and cannot be added, modified, or deleted. System labels may be able to be applied to or removed from messages and threads under some circumstances but this is not guaranteed. For example, users can apply and remove the `INBOX` and `UNREAD` labels from messages and threads, but cannot apply or remove the `DRAFTS` or `SENT` labels from messages or threads.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|
|» labelListVisibility|labelShow|
|» labelListVisibility|labelShowIfUnread|
|» labelListVisibility|labelHide|
|» messageListVisibility|show|
|» messageListVisibility|hide|
|» type|system|
|» type|user|

> Example responses

> 200 Response

```json
{
  "color": {
    "backgroundColor": "string",
    "textColor": "string"
  },
  "id": "string",
  "labelListVisibility": "labelShow",
  "messageListVisibility": "show",
  "messagesTotal": 0,
  "messagesUnread": 0,
  "name": "string",
  "threadsTotal": 0,
  "threadsUnread": 0,
  "type": "system"
}
```

<h3 id="gmailuserslabelsupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Label](#schemalabel)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://mail.google.com/ ) & Oauth2c ( Scopes: https://mail.google.com/ ), Oauth2 ( Scopes: https://www.googleapis.com/auth/gmail.labels ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/gmail.labels ), Oauth2 ( Scopes: https://www.googleapis.com/auth/gmail.modify ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/gmail.modify )
</aside>

## gmail.users.labels.delete

<a id="opIdgmail.users.labels.delete"></a>

> Code samples

```bash
curl https://gmail.googleapis.com/gmail/v1/users/string/labels/string \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /gmail/v1/users/{userId}/labels/{id}`

Immediately and permanently deletes the specified label and removes it from any messages and threads that it is applied to.

<h3 id="gmailuserslabelsdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userId|path|string|true|The user's email address. The special value `me` can be used to indicate the authenticated user.|
|id|path|string|true|The ID of the label to delete.|
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

<h3 id="gmailuserslabelsdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://mail.google.com/ ) & Oauth2c ( Scopes: https://mail.google.com/ ), Oauth2 ( Scopes: https://www.googleapis.com/auth/gmail.labels ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/gmail.labels ), Oauth2 ( Scopes: https://www.googleapis.com/auth/gmail.modify ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/gmail.modify )
</aside>

## gmail.users.labels.patch

<a id="opIdgmail.users.labels.patch"></a>

> Code samples

```bash
curl https://gmail.googleapis.com/gmail/v1/users/string/labels/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "color": {
      "backgroundColor": "string",
      "textColor": "string"
    },
    "id": "string",
    "labelListVisibility": "labelShow",
    "messageListVisibility": "show",
    "messagesTotal": 0,
    "messagesUnread": 0,
    "name": "string",
    "threadsTotal": 0,
    "threadsUnread": 0,
    "type": "system"
  }'
```

`PATCH /gmail/v1/users/{userId}/labels/{id}`

Patch the specified label.

> Body parameter

```json
{
  "color": {
    "backgroundColor": "string",
    "textColor": "string"
  },
  "id": "string",
  "labelListVisibility": "labelShow",
  "messageListVisibility": "show",
  "messagesTotal": 0,
  "messagesUnread": 0,
  "name": "string",
  "threadsTotal": 0,
  "threadsUnread": 0,
  "type": "system"
}
```

<h3 id="gmailuserslabelspatch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userId|path|string|true|The user's email address. The special value `me` can be used to indicate the authenticated user.|
|id|path|string|true|The ID of the label to update.|
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
|body|body|[Label](#schemalabel)|false|none|
|» color|body|[LabelColor](#schemalabelcolor)|false|The color to assign to the label. Color is only available for labels that have their `type` set to `user`.|
|» id|body|string|false|The immutable ID of the label.|
|» labelListVisibility|body|string|false|The visibility of the label in the label list in the Gmail web interface.|
|» messageListVisibility|body|string|false|The visibility of messages with this label in the message list in the Gmail web interface.|
|» messagesTotal|body|integer(int32)|false|The total number of messages with the label.|
|» messagesUnread|body|integer(int32)|false|The number of unread messages with the label.|
|» name|body|string|false|The display name of the label.|
|» threadsTotal|body|integer(int32)|false|The total number of threads with the label.|
|» threadsUnread|body|integer(int32)|false|The number of unread threads with the label.|
|» type|body|string|false|The owner type for the label. User labels are created by the user and can be modified and deleted by the user and can be applied to any message or thread. System labels are internally created and cannot be added, modified, or deleted. System labels may be able to be applied to or removed from messages and threads under some circumstances but this is not guaranteed. For example, users can apply and remove the `INBOX` and `UNREAD` labels from messages and threads, but cannot apply or remove the `DRAFTS` or `SENT` labels from messages or threads.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|
|» labelListVisibility|labelShow|
|» labelListVisibility|labelShowIfUnread|
|» labelListVisibility|labelHide|
|» messageListVisibility|show|
|» messageListVisibility|hide|
|» type|system|
|» type|user|

> Example responses

> 200 Response

```json
{
  "color": {
    "backgroundColor": "string",
    "textColor": "string"
  },
  "id": "string",
  "labelListVisibility": "labelShow",
  "messageListVisibility": "show",
  "messagesTotal": 0,
  "messagesUnread": 0,
  "name": "string",
  "threadsTotal": 0,
  "threadsUnread": 0,
  "type": "system"
}
```

<h3 id="gmailuserslabelspatch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Label](#schemalabel)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://mail.google.com/ ) & Oauth2c ( Scopes: https://mail.google.com/ ), Oauth2 ( Scopes: https://www.googleapis.com/auth/gmail.labels ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/gmail.labels ), Oauth2 ( Scopes: https://www.googleapis.com/auth/gmail.modify ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/gmail.modify )
</aside>

## gmail.users.messages.list

<a id="opIdgmail.users.messages.list"></a>

> Code samples

```bash
curl https://gmail.googleapis.com/gmail/v1/users/string/messages \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /gmail/v1/users/{userId}/messages`

Lists the messages in the user's mailbox.

<h3 id="gmailusersmessageslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userId|path|string|true|The user's email address. The special value `me` can be used to indicate the authenticated user.|
|includeSpamTrash|query|boolean|false|Include messages from `SPAM` and `TRASH` in the results.|
|labelIds|query|[string]|false|Only return messages with labels that match all of the specified label IDs. Messages in a thread might have labels that other messages in the same thread don't have. To learn more, see [Manage labels on messages and threads](https://developers.google.com/gmail/api/guides/labels#manage_labels_on_messages_threads).|
|maxResults|query|integer|false|Maximum number of messages to return. This field defaults to 100. The maximum allowed value for this field is 500.|
|pageToken|query|string|false|Page token to retrieve a specific page of results in the list.|
|q|query|string|false|Only return messages matching the specified query. Supports the same query format as the Gmail search box. For example, `"from:someuser@example.com rfc822msgid: is:unread"`. Parameter cannot be used when accessing the api using the gmail.metadata scope.|
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
      "historyId": "string",
      "id": "string",
      "internalDate": "string",
      "labelIds": [
        "string"
      ],
      "payload": {
        "body": {
          "attachmentId": "string",
          "data": "string",
          "size": 0
        },
        "filename": "string",
        "headers": [
          {
            "name": "string",
            "value": "string"
          }
        ],
        "mimeType": "string",
        "partId": "string",
        "parts": [
          {}
        ]
      },
      "raw": "string",
      "sizeEstimate": 0,
      "snippet": "string",
      "threadId": "string"
    }
  ],
  "nextPageToken": "string",
  "resultSizeEstimate": 0
}
```

<h3 id="gmailusersmessageslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListMessagesResponse](#schemalistmessagesresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://mail.google.com/ ) & Oauth2c ( Scopes: https://mail.google.com/ ), Oauth2 ( Scopes: https://www.googleapis.com/auth/gmail.metadata ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/gmail.metadata ), Oauth2 ( Scopes: https://www.googleapis.com/auth/gmail.modify ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/gmail.modify ), Oauth2 ( Scopes: https://www.googleapis.com/auth/gmail.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/gmail.readonly )
</aside>

## gmail.users.messages.insert

<a id="opIdgmail.users.messages.insert"></a>

> Code samples

```bash
curl https://gmail.googleapis.com/gmail/v1/users/string/messages \
  -X POST \
  -H 'Content-Type: message/cpim' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{"historyId":"string","id":"string","internalDate":"string","labelIds":["string"],"payload":{"body":{"attachmentId":"string","data":"string","size":0},"filename":"string","headers":[{"name":"string","value":"string"}],"mimeType":"string","partId":"string","parts":[{}]},"raw":"string","sizeEstimate":0,"snippet":"string","threadId":"string"}'
```

`POST /gmail/v1/users/{userId}/messages`

Directly inserts a message into only this user's mailbox similar to `IMAP APPEND`, bypassing most scanning and classification. Does not send a message.

> Body parameter

```json
{
  "historyId": "string",
  "id": "string",
  "internalDate": "string",
  "labelIds": [
    "string"
  ],
  "payload": {
    "body": {
      "attachmentId": "string",
      "data": "string",
      "size": 0
    },
    "filename": "string",
    "headers": [
      {
        "name": "string",
        "value": "string"
      }
    ],
    "mimeType": "string",
    "partId": "string",
    "parts": [
      {}
    ]
  },
  "raw": "string",
  "sizeEstimate": 0,
  "snippet": "string",
  "threadId": "string"
}
```

<h3 id="gmailusersmessagesinsert-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userId|path|string|true|The user's email address. The special value `me` can be used to indicate the authenticated user.|
|deleted|query|boolean|false|Mark the email as permanently deleted (not TRASH) and only visible in Google Vault to a Vault administrator. Only used for Google Workspace accounts.|
|internalDateSource|query|string|false|Source for Gmail's internal date of the message.|
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
|» historyId|body|string(uint64)|false|The ID of the last history record that modified this message.|
|» id|body|string|false|The immutable ID of the message.|
|» internalDate|body|string(int64)|false|The internal message creation timestamp (epoch ms), which determines ordering in the inbox. For normal SMTP-received email, this represents the time the message was originally accepted by Google, which is more reliable than the `Date` header. However, for API-migrated mail, it can be configured by client to be based on the `Date` header.|
|» labelIds|body|[string]|false|List of IDs of labels applied to this message.|
|» payload|body|[MessagePart](#schemamessagepart)|false|The parsed email structure in the message parts.|
|» raw|body|string(byte)|false|The entire email message in an RFC 2822 formatted and base64url encoded string. Returned in `messages.get` and `drafts.get` responses when the `format=RAW` parameter is supplied.|
|» sizeEstimate|body|integer(int32)|false|Estimated size in bytes of the message.|
|» snippet|body|string|false|A short part of the message text.|
|» threadId|body|string|false|The ID of the thread the message belongs to. To add a message or draft to a thread, the following criteria must be met: 1. The requested `threadId` must be specified on the `Message` or `Draft.Message` you supply with your request. 2. The `References` and `In-Reply-To` headers must be set in compliance with the [RFC 2822](https://tools.ietf.org/html/rfc2822) standard. 3. The `Subject` headers must match. |

#### Enumerated Values

|Parameter|Value|
|---|---|
|internalDateSource|receivedTime|
|internalDateSource|dateHeader|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "historyId": "string",
  "id": "string",
  "internalDate": "string",
  "labelIds": [
    "string"
  ],
  "payload": {
    "body": {
      "attachmentId": "string",
      "data": "string",
      "size": 0
    },
    "filename": "string",
    "headers": [
      {
        "name": "string",
        "value": "string"
      }
    ],
    "mimeType": "string",
    "partId": "string",
    "parts": [
      {}
    ]
  },
  "raw": "string",
  "sizeEstimate": 0,
  "snippet": "string",
  "threadId": "string"
}
```

<h3 id="gmailusersmessagesinsert-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Message](#schemamessage)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://mail.google.com/ ) & Oauth2c ( Scopes: https://mail.google.com/ ), Oauth2 ( Scopes: https://www.googleapis.com/auth/gmail.insert ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/gmail.insert ), Oauth2 ( Scopes: https://www.googleapis.com/auth/gmail.modify ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/gmail.modify )
</aside>

## gmail.users.messages.batchDelete

<a id="opIdgmail.users.messages.batchDelete"></a>

> Code samples

```bash
curl https://gmail.googleapis.com/gmail/v1/users/string/messages/batchDelete \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "ids": [
      "string"
    ]
  }'
```

`POST /gmail/v1/users/{userId}/messages/batchDelete`

Deletes many messages by message ID. Provides no guarantees that messages were not already deleted or even existed at all.

> Body parameter

```json
{
  "ids": [
    "string"
  ]
}
```

<h3 id="gmailusersmessagesbatchdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userId|path|string|true|The user's email address. The special value `me` can be used to indicate the authenticated user.|
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
|body|body|[BatchDeleteMessagesRequest](#schemabatchdeletemessagesrequest)|false|none|
|» ids|body|[string]|false|The IDs of the messages to delete.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

<h3 id="gmailusersmessagesbatchdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://mail.google.com/ ) & Oauth2c ( Scopes: https://mail.google.com/ )
</aside>

## gmail.users.messages.batchModify

<a id="opIdgmail.users.messages.batchModify"></a>

> Code samples

```bash
curl https://gmail.googleapis.com/gmail/v1/users/string/messages/batchModify \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "addLabelIds": [
      "string"
    ],
    "ids": [
      "string"
    ],
    "removeLabelIds": [
      "string"
    ]
  }'
```

`POST /gmail/v1/users/{userId}/messages/batchModify`

Modifies the labels on the specified messages.

> Body parameter

```json
{
  "addLabelIds": [
    "string"
  ],
  "ids": [
    "string"
  ],
  "removeLabelIds": [
    "string"
  ]
}
```

<h3 id="gmailusersmessagesbatchmodify-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userId|path|string|true|The user's email address. The special value `me` can be used to indicate the authenticated user.|
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
|body|body|[BatchModifyMessagesRequest](#schemabatchmodifymessagesrequest)|false|none|
|» addLabelIds|body|[string]|false|A list of label IDs to add to messages.|
|» ids|body|[string]|false|The IDs of the messages to modify. There is a limit of 1000 ids per request.|
|» removeLabelIds|body|[string]|false|A list of label IDs to remove from messages.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

<h3 id="gmailusersmessagesbatchmodify-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://mail.google.com/ ) & Oauth2c ( Scopes: https://mail.google.com/ ), Oauth2 ( Scopes: https://www.googleapis.com/auth/gmail.modify ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/gmail.modify )
</aside>

## gmail.users.messages.import

<a id="opIdgmail.users.messages.import"></a>

> Code samples

```bash
curl https://gmail.googleapis.com/gmail/v1/users/string/messages/import \
  -X POST \
  -H 'Content-Type: message/cpim' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{"historyId":"string","id":"string","internalDate":"string","labelIds":["string"],"payload":{"body":{"attachmentId":"string","data":"string","size":0},"filename":"string","headers":[{"name":"string","value":"string"}],"mimeType":"string","partId":"string","parts":[{}]},"raw":"string","sizeEstimate":0,"snippet":"string","threadId":"string"}'
```

`POST /gmail/v1/users/{userId}/messages/import`

Imports a message into only this user's mailbox, with standard email delivery scanning and classification similar to receiving via SMTP. This method doesn't perform SPF checks, so it might not work for some spam messages, such as those attempting to perform domain spoofing. This method does not send a message.

> Body parameter

```json
{
  "historyId": "string",
  "id": "string",
  "internalDate": "string",
  "labelIds": [
    "string"
  ],
  "payload": {
    "body": {
      "attachmentId": "string",
      "data": "string",
      "size": 0
    },
    "filename": "string",
    "headers": [
      {
        "name": "string",
        "value": "string"
      }
    ],
    "mimeType": "string",
    "partId": "string",
    "parts": [
      {}
    ]
  },
  "raw": "string",
  "sizeEstimate": 0,
  "snippet": "string",
  "threadId": "string"
}
```

<h3 id="gmailusersmessagesimport-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userId|path|string|true|The user's email address. The special value `me` can be used to indicate the authenticated user.|
|deleted|query|boolean|false|Mark the email as permanently deleted (not TRASH) and only visible in Google Vault to a Vault administrator. Only used for Google Workspace accounts.|
|internalDateSource|query|string|false|Source for Gmail's internal date of the message.|
|neverMarkSpam|query|boolean|false|Ignore the Gmail spam classifier decision and never mark this email as SPAM in the mailbox.|
|processForCalendar|query|boolean|false|Process calendar invites in the email and add any extracted meetings to the Google Calendar for this user.|
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
|» historyId|body|string(uint64)|false|The ID of the last history record that modified this message.|
|» id|body|string|false|The immutable ID of the message.|
|» internalDate|body|string(int64)|false|The internal message creation timestamp (epoch ms), which determines ordering in the inbox. For normal SMTP-received email, this represents the time the message was originally accepted by Google, which is more reliable than the `Date` header. However, for API-migrated mail, it can be configured by client to be based on the `Date` header.|
|» labelIds|body|[string]|false|List of IDs of labels applied to this message.|
|» payload|body|[MessagePart](#schemamessagepart)|false|The parsed email structure in the message parts.|
|» raw|body|string(byte)|false|The entire email message in an RFC 2822 formatted and base64url encoded string. Returned in `messages.get` and `drafts.get` responses when the `format=RAW` parameter is supplied.|
|» sizeEstimate|body|integer(int32)|false|Estimated size in bytes of the message.|
|» snippet|body|string|false|A short part of the message text.|
|» threadId|body|string|false|The ID of the thread the message belongs to. To add a message or draft to a thread, the following criteria must be met: 1. The requested `threadId` must be specified on the `Message` or `Draft.Message` you supply with your request. 2. The `References` and `In-Reply-To` headers must be set in compliance with the [RFC 2822](https://tools.ietf.org/html/rfc2822) standard. 3. The `Subject` headers must match. |

#### Enumerated Values

|Parameter|Value|
|---|---|
|internalDateSource|receivedTime|
|internalDateSource|dateHeader|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "historyId": "string",
  "id": "string",
  "internalDate": "string",
  "labelIds": [
    "string"
  ],
  "payload": {
    "body": {
      "attachmentId": "string",
      "data": "string",
      "size": 0
    },
    "filename": "string",
    "headers": [
      {
        "name": "string",
        "value": "string"
      }
    ],
    "mimeType": "string",
    "partId": "string",
    "parts": [
      {}
    ]
  },
  "raw": "string",
  "sizeEstimate": 0,
  "snippet": "string",
  "threadId": "string"
}
```

<h3 id="gmailusersmessagesimport-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Message](#schemamessage)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://mail.google.com/ ) & Oauth2c ( Scopes: https://mail.google.com/ ), Oauth2 ( Scopes: https://www.googleapis.com/auth/gmail.insert ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/gmail.insert ), Oauth2 ( Scopes: https://www.googleapis.com/auth/gmail.modify ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/gmail.modify )
</aside>

## gmail.users.messages.send

<a id="opIdgmail.users.messages.send"></a>

> Code samples

```bash
curl https://gmail.googleapis.com/gmail/v1/users/string/messages/send \
  -X POST \
  -H 'Content-Type: message/cpim' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{"historyId":"string","id":"string","internalDate":"string","labelIds":["string"],"payload":{"body":{"attachmentId":"string","data":"string","size":0},"filename":"string","headers":[{"name":"string","value":"string"}],"mimeType":"string","partId":"string","parts":[{}]},"raw":"string","sizeEstimate":0,"snippet":"string","threadId":"string"}'
```

`POST /gmail/v1/users/{userId}/messages/send`

Sends the specified message to the recipients in the `To`, `Cc`, and `Bcc` headers. For example usage, see [Sending email](https://developers.google.com/gmail/api/guides/sending).

> Body parameter

```json
{
  "historyId": "string",
  "id": "string",
  "internalDate": "string",
  "labelIds": [
    "string"
  ],
  "payload": {
    "body": {
      "attachmentId": "string",
      "data": "string",
      "size": 0
    },
    "filename": "string",
    "headers": [
      {
        "name": "string",
        "value": "string"
      }
    ],
    "mimeType": "string",
    "partId": "string",
    "parts": [
      {}
    ]
  },
  "raw": "string",
  "sizeEstimate": 0,
  "snippet": "string",
  "threadId": "string"
}
```

<h3 id="gmailusersmessagessend-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userId|path|string|true|The user's email address. The special value `me` can be used to indicate the authenticated user.|
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
|» historyId|body|string(uint64)|false|The ID of the last history record that modified this message.|
|» id|body|string|false|The immutable ID of the message.|
|» internalDate|body|string(int64)|false|The internal message creation timestamp (epoch ms), which determines ordering in the inbox. For normal SMTP-received email, this represents the time the message was originally accepted by Google, which is more reliable than the `Date` header. However, for API-migrated mail, it can be configured by client to be based on the `Date` header.|
|» labelIds|body|[string]|false|List of IDs of labels applied to this message.|
|» payload|body|[MessagePart](#schemamessagepart)|false|The parsed email structure in the message parts.|
|» raw|body|string(byte)|false|The entire email message in an RFC 2822 formatted and base64url encoded string. Returned in `messages.get` and `drafts.get` responses when the `format=RAW` parameter is supplied.|
|» sizeEstimate|body|integer(int32)|false|Estimated size in bytes of the message.|
|» snippet|body|string|false|A short part of the message text.|
|» threadId|body|string|false|The ID of the thread the message belongs to. To add a message or draft to a thread, the following criteria must be met: 1. The requested `threadId` must be specified on the `Message` or `Draft.Message` you supply with your request. 2. The `References` and `In-Reply-To` headers must be set in compliance with the [RFC 2822](https://tools.ietf.org/html/rfc2822) standard. 3. The `Subject` headers must match. |

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
  "historyId": "string",
  "id": "string",
  "internalDate": "string",
  "labelIds": [
    "string"
  ],
  "payload": {
    "body": {
      "attachmentId": "string",
      "data": "string",
      "size": 0
    },
    "filename": "string",
    "headers": [
      {
        "name": "string",
        "value": "string"
      }
    ],
    "mimeType": "string",
    "partId": "string",
    "parts": [
      {}
    ]
  },
  "raw": "string",
  "sizeEstimate": 0,
  "snippet": "string",
  "threadId": "string"
}
```

<h3 id="gmailusersmessagessend-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Message](#schemamessage)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://mail.google.com/ ) & Oauth2c ( Scopes: https://mail.google.com/ ), Oauth2 ( Scopes: https://www.googleapis.com/auth/gmail.addons.current.action.compose ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/gmail.addons.current.action.compose ), Oauth2 ( Scopes: https://www.googleapis.com/auth/gmail.compose ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/gmail.compose ), Oauth2 ( Scopes: https://www.googleapis.com/auth/gmail.modify ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/gmail.modify ), Oauth2 ( Scopes: https://www.googleapis.com/auth/gmail.send ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/gmail.send )
</aside>

## gmail.users.messages.get

<a id="opIdgmail.users.messages.get"></a>

> Code samples

```bash
curl https://gmail.googleapis.com/gmail/v1/users/string/messages/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /gmail/v1/users/{userId}/messages/{id}`

Gets the specified message.

<h3 id="gmailusersmessagesget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userId|path|string|true|The user's email address. The special value `me` can be used to indicate the authenticated user.|
|id|path|string|true|The ID of the message to retrieve. This ID is usually retrieved using `messages.list`. The ID is also contained in the result when a message is inserted (`messages.insert`) or imported (`messages.import`).|
|format|query|string|false|The format to return the message in.|
|metadataHeaders|query|[string]|false|When given and format is `METADATA`, only include headers specified.|
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
|format|minimal|
|format|full|
|format|raw|
|format|metadata|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "historyId": "string",
  "id": "string",
  "internalDate": "string",
  "labelIds": [
    "string"
  ],
  "payload": {
    "body": {
      "attachmentId": "string",
      "data": "string",
      "size": 0
    },
    "filename": "string",
    "headers": [
      {
        "name": "string",
        "value": "string"
      }
    ],
    "mimeType": "string",
    "partId": "string",
    "parts": [
      {}
    ]
  },
  "raw": "string",
  "sizeEstimate": 0,
  "snippet": "string",
  "threadId": "string"
}
```

<h3 id="gmailusersmessagesget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Message](#schemamessage)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://mail.google.com/ ) & Oauth2c ( Scopes: https://mail.google.com/ ), Oauth2 ( Scopes: https://www.googleapis.com/auth/gmail.addons.current.message.action ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/gmail.addons.current.message.action ), Oauth2 ( Scopes: https://www.googleapis.com/auth/gmail.addons.current.message.metadata ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/gmail.addons.current.message.metadata ), Oauth2 ( Scopes: https://www.googleapis.com/auth/gmail.addons.current.message.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/gmail.addons.current.message.readonly ), Oauth2 ( Scopes: https://www.googleapis.com/auth/gmail.metadata ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/gmail.metadata ), Oauth2 ( Scopes: https://www.googleapis.com/auth/gmail.modify ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/gmail.modify ), Oauth2 ( Scopes: https://www.googleapis.com/auth/gmail.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/gmail.readonly )
</aside>

## gmail.users.messages.delete

<a id="opIdgmail.users.messages.delete"></a>

> Code samples

```bash
curl https://gmail.googleapis.com/gmail/v1/users/string/messages/string \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /gmail/v1/users/{userId}/messages/{id}`

Immediately and permanently deletes the specified message. This operation cannot be undone. Prefer `messages.trash` instead.

<h3 id="gmailusersmessagesdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userId|path|string|true|The user's email address. The special value `me` can be used to indicate the authenticated user.|
|id|path|string|true|The ID of the message to delete.|
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

<h3 id="gmailusersmessagesdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://mail.google.com/ ) & Oauth2c ( Scopes: https://mail.google.com/ )
</aside>

## gmail.users.messages.modify

<a id="opIdgmail.users.messages.modify"></a>

> Code samples

```bash
curl https://gmail.googleapis.com/gmail/v1/users/string/messages/string/modify \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "addLabelIds": [
      "string"
    ],
    "removeLabelIds": [
      "string"
    ]
  }'
```

`POST /gmail/v1/users/{userId}/messages/{id}/modify`

Modifies the labels on the specified message.

> Body parameter

```json
{
  "addLabelIds": [
    "string"
  ],
  "removeLabelIds": [
    "string"
  ]
}
```

<h3 id="gmailusersmessagesmodify-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userId|path|string|true|The user's email address. The special value `me` can be used to indicate the authenticated user.|
|id|path|string|true|The ID of the message to modify.|
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
|body|body|[ModifyMessageRequest](#schemamodifymessagerequest)|false|none|
|» addLabelIds|body|[string]|false|A list of IDs of labels to add to this message. You can add up to 100 labels with each update.|
|» removeLabelIds|body|[string]|false|A list IDs of labels to remove from this message. You can remove up to 100 labels with each update.|

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
  "historyId": "string",
  "id": "string",
  "internalDate": "string",
  "labelIds": [
    "string"
  ],
  "payload": {
    "body": {
      "attachmentId": "string",
      "data": "string",
      "size": 0
    },
    "filename": "string",
    "headers": [
      {
        "name": "string",
        "value": "string"
      }
    ],
    "mimeType": "string",
    "partId": "string",
    "parts": [
      {}
    ]
  },
  "raw": "string",
  "sizeEstimate": 0,
  "snippet": "string",
  "threadId": "string"
}
```

<h3 id="gmailusersmessagesmodify-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Message](#schemamessage)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://mail.google.com/ ) & Oauth2c ( Scopes: https://mail.google.com/ ), Oauth2 ( Scopes: https://www.googleapis.com/auth/gmail.modify ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/gmail.modify )
</aside>

## gmail.users.messages.trash

<a id="opIdgmail.users.messages.trash"></a>

> Code samples

```bash
curl https://gmail.googleapis.com/gmail/v1/users/string/messages/string/trash \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /gmail/v1/users/{userId}/messages/{id}/trash`

Moves the specified message to the trash.

<h3 id="gmailusersmessagestrash-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userId|path|string|true|The user's email address. The special value `me` can be used to indicate the authenticated user.|
|id|path|string|true|The ID of the message to Trash.|
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
  "historyId": "string",
  "id": "string",
  "internalDate": "string",
  "labelIds": [
    "string"
  ],
  "payload": {
    "body": {
      "attachmentId": "string",
      "data": "string",
      "size": 0
    },
    "filename": "string",
    "headers": [
      {
        "name": "string",
        "value": "string"
      }
    ],
    "mimeType": "string",
    "partId": "string",
    "parts": [
      {}
    ]
  },
  "raw": "string",
  "sizeEstimate": 0,
  "snippet": "string",
  "threadId": "string"
}
```

<h3 id="gmailusersmessagestrash-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Message](#schemamessage)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://mail.google.com/ ) & Oauth2c ( Scopes: https://mail.google.com/ ), Oauth2 ( Scopes: https://www.googleapis.com/auth/gmail.modify ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/gmail.modify )
</aside>

## gmail.users.messages.untrash

<a id="opIdgmail.users.messages.untrash"></a>

> Code samples

```bash
curl https://gmail.googleapis.com/gmail/v1/users/string/messages/string/untrash \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /gmail/v1/users/{userId}/messages/{id}/untrash`

Removes the specified message from the trash.

<h3 id="gmailusersmessagesuntrash-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userId|path|string|true|The user's email address. The special value `me` can be used to indicate the authenticated user.|
|id|path|string|true|The ID of the message to remove from Trash.|
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
  "historyId": "string",
  "id": "string",
  "internalDate": "string",
  "labelIds": [
    "string"
  ],
  "payload": {
    "body": {
      "attachmentId": "string",
      "data": "string",
      "size": 0
    },
    "filename": "string",
    "headers": [
      {
        "name": "string",
        "value": "string"
      }
    ],
    "mimeType": "string",
    "partId": "string",
    "parts": [
      {}
    ]
  },
  "raw": "string",
  "sizeEstimate": 0,
  "snippet": "string",
  "threadId": "string"
}
```

<h3 id="gmailusersmessagesuntrash-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Message](#schemamessage)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://mail.google.com/ ) & Oauth2c ( Scopes: https://mail.google.com/ ), Oauth2 ( Scopes: https://www.googleapis.com/auth/gmail.modify ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/gmail.modify )
</aside>

## gmail.users.messages.attachments.get

<a id="opIdgmail.users.messages.attachments.get"></a>

> Code samples

```bash
curl https://gmail.googleapis.com/gmail/v1/users/string/messages/string/attachments/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /gmail/v1/users/{userId}/messages/{messageId}/attachments/{id}`

Gets the specified message attachment.

<h3 id="gmailusersmessagesattachmentsget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userId|path|string|true|The user's email address. The special value `me` can be used to indicate the authenticated user.|
|messageId|path|string|true|The ID of the message containing the attachment.|
|id|path|string|true|The ID of the attachment.|
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
  "attachmentId": "string",
  "data": "string",
  "size": 0
}
```

<h3 id="gmailusersmessagesattachmentsget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[MessagePartBody](#schemamessagepartbody)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://mail.google.com/ ) & Oauth2c ( Scopes: https://mail.google.com/ ), Oauth2 ( Scopes: https://www.googleapis.com/auth/gmail.addons.current.message.action ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/gmail.addons.current.message.action ), Oauth2 ( Scopes: https://www.googleapis.com/auth/gmail.addons.current.message.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/gmail.addons.current.message.readonly ), Oauth2 ( Scopes: https://www.googleapis.com/auth/gmail.modify ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/gmail.modify ), Oauth2 ( Scopes: https://www.googleapis.com/auth/gmail.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/gmail.readonly )
</aside>

## gmail.users.getProfile

<a id="opIdgmail.users.getProfile"></a>

> Code samples

```bash
curl https://gmail.googleapis.com/gmail/v1/users/string/profile \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /gmail/v1/users/{userId}/profile`

Gets the current user's Gmail profile.

<h3 id="gmailusersgetprofile-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userId|path|string|true|The user's email address. The special value `me` can be used to indicate the authenticated user.|
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
  "emailAddress": "string",
  "historyId": "string",
  "messagesTotal": 0,
  "threadsTotal": 0
}
```

<h3 id="gmailusersgetprofile-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Profile](#schemaprofile)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://mail.google.com/ ) & Oauth2c ( Scopes: https://mail.google.com/ ), Oauth2 ( Scopes: https://www.googleapis.com/auth/gmail.compose ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/gmail.compose ), Oauth2 ( Scopes: https://www.googleapis.com/auth/gmail.metadata ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/gmail.metadata ), Oauth2 ( Scopes: https://www.googleapis.com/auth/gmail.modify ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/gmail.modify ), Oauth2 ( Scopes: https://www.googleapis.com/auth/gmail.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/gmail.readonly )
</aside>

## gmail.users.settings.getAutoForwarding

<a id="opIdgmail.users.settings.getAutoForwarding"></a>

> Code samples

```bash
curl https://gmail.googleapis.com/gmail/v1/users/string/settings/autoForwarding \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /gmail/v1/users/{userId}/settings/autoForwarding`

Gets the auto-forwarding setting for the specified account.

<h3 id="gmailuserssettingsgetautoforwarding-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userId|path|string|true|User's email address. The special value "me" can be used to indicate the authenticated user.|
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
  "disposition": "dispositionUnspecified",
  "emailAddress": "string",
  "enabled": true
}
```

<h3 id="gmailuserssettingsgetautoforwarding-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[AutoForwarding](#schemaautoforwarding)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://mail.google.com/ ) & Oauth2c ( Scopes: https://mail.google.com/ ), Oauth2 ( Scopes: https://www.googleapis.com/auth/gmail.modify ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/gmail.modify ), Oauth2 ( Scopes: https://www.googleapis.com/auth/gmail.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/gmail.readonly ), Oauth2 ( Scopes: https://www.googleapis.com/auth/gmail.settings.basic ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/gmail.settings.basic )
</aside>

## gmail.users.settings.updateAutoForwarding

<a id="opIdgmail.users.settings.updateAutoForwarding"></a>

> Code samples

```bash
curl https://gmail.googleapis.com/gmail/v1/users/string/settings/autoForwarding \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "disposition": "dispositionUnspecified",
    "emailAddress": "string",
    "enabled": true
  }'
```

`PUT /gmail/v1/users/{userId}/settings/autoForwarding`

Updates the auto-forwarding setting for the specified account. A verified forwarding address must be specified when auto-forwarding is enabled. This method is only available to service account clients that have been delegated domain-wide authority.

> Body parameter

```json
{
  "disposition": "dispositionUnspecified",
  "emailAddress": "string",
  "enabled": true
}
```

<h3 id="gmailuserssettingsupdateautoforwarding-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userId|path|string|true|User's email address. The special value "me" can be used to indicate the authenticated user.|
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
|body|body|[AutoForwarding](#schemaautoforwarding)|false|none|
|» disposition|body|string|false|The state that a message should be left in after it has been forwarded.|
|» emailAddress|body|string|false|Email address to which all incoming messages are forwarded. This email address must be a verified member of the forwarding addresses.|
|» enabled|body|boolean|false|Whether all incoming mail is automatically forwarded to another address.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|
|» disposition|dispositionUnspecified|
|» disposition|leaveInInbox|
|» disposition|archive|
|» disposition|trash|
|» disposition|markRead|

> Example responses

> 200 Response

```json
{
  "disposition": "dispositionUnspecified",
  "emailAddress": "string",
  "enabled": true
}
```

<h3 id="gmailuserssettingsupdateautoforwarding-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[AutoForwarding](#schemaautoforwarding)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/gmail.settings.sharing ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/gmail.settings.sharing )
</aside>

## gmail.users.settings.cse.identities.list

<a id="opIdgmail.users.settings.cse.identities.list"></a>

> Code samples

```bash
curl https://gmail.googleapis.com/gmail/v1/users/string/settings/cse/identities \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /gmail/v1/users/{userId}/settings/cse/identities`

Lists the client-side encrypted identities for an authenticated user.

<h3 id="gmailuserssettingscseidentitieslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userId|path|string|true|The requester's primary email address. To indicate the authenticated user, you can use the special value `me`.|
|pageSize|query|integer|false|The number of identities to return. If not provided, the page size will default to 20 entries.|
|pageToken|query|string|false|Pagination token indicating which page of identities to return. If the token is not supplied, then the API will return the first page of results.|
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
  "cseIdentities": [
    {
      "emailAddress": "string",
      "primaryKeyPairId": "string",
      "signAndEncryptKeyPairs": {
        "encryptionKeyPairId": "string",
        "signingKeyPairId": "string"
      }
    }
  ],
  "nextPageToken": "string"
}
```

<h3 id="gmailuserssettingscseidentitieslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListCseIdentitiesResponse](#schemalistcseidentitiesresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://mail.google.com/ ) & Oauth2c ( Scopes: https://mail.google.com/ ), Oauth2 ( Scopes: https://www.googleapis.com/auth/gmail.modify ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/gmail.modify ), Oauth2 ( Scopes: https://www.googleapis.com/auth/gmail.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/gmail.readonly ), Oauth2 ( Scopes: https://www.googleapis.com/auth/gmail.settings.basic ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/gmail.settings.basic ), Oauth2 ( Scopes: https://www.googleapis.com/auth/gmail.settings.sharing ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/gmail.settings.sharing )
</aside>

## gmail.users.settings.cse.identities.create

<a id="opIdgmail.users.settings.cse.identities.create"></a>

> Code samples

```bash
curl https://gmail.googleapis.com/gmail/v1/users/string/settings/cse/identities \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "emailAddress": "string",
    "primaryKeyPairId": "string",
    "signAndEncryptKeyPairs": {
      "encryptionKeyPairId": "string",
      "signingKeyPairId": "string"
    }
  }'
```

`POST /gmail/v1/users/{userId}/settings/cse/identities`

Creates and configures a client-side encryption identity that's authorized to send mail from the user account. Google publishes the S/MIME certificate to a shared domain-wide directory so that people within a Google Workspace organization can encrypt and send mail to the identity.

> Body parameter

```json
{
  "emailAddress": "string",
  "primaryKeyPairId": "string",
  "signAndEncryptKeyPairs": {
    "encryptionKeyPairId": "string",
    "signingKeyPairId": "string"
  }
}
```

<h3 id="gmailuserssettingscseidentitiescreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userId|path|string|true|The requester's primary email address. To indicate the authenticated user, you can use the special value `me`.|
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
|body|body|[CseIdentity](#schemacseidentity)|false|none|
|» emailAddress|body|string|false|The email address for the sending identity. The email address must be the primary email address of the authenticated user.|
|» primaryKeyPairId|body|string|false|If a key pair is associated, the ID of the key pair, CseKeyPair.|
|» signAndEncryptKeyPairs|body|[SignAndEncryptKeyPairs](#schemasignandencryptkeypairs)|false|The configuration of a CSE identity that uses different key pairs for signing and encryption.|

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
  "emailAddress": "string",
  "primaryKeyPairId": "string",
  "signAndEncryptKeyPairs": {
    "encryptionKeyPairId": "string",
    "signingKeyPairId": "string"
  }
}
```

<h3 id="gmailuserssettingscseidentitiescreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[CseIdentity](#schemacseidentity)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/gmail.settings.basic ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/gmail.settings.basic ), Oauth2 ( Scopes: https://www.googleapis.com/auth/gmail.settings.sharing ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/gmail.settings.sharing )
</aside>

## gmail.users.settings.cse.identities.get

<a id="opIdgmail.users.settings.cse.identities.get"></a>

> Code samples

```bash
curl https://gmail.googleapis.com/gmail/v1/users/string/settings/cse/identities/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /gmail/v1/users/{userId}/settings/cse/identities/{cseEmailAddress}`

Retrieves a client-side encryption identity configuration.

<h3 id="gmailuserssettingscseidentitiesget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userId|path|string|true|The requester's primary email address. To indicate the authenticated user, you can use the special value `me`.|
|cseEmailAddress|path|string|true|The primary email address associated with the client-side encryption identity configuration that's retrieved.|
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
  "emailAddress": "string",
  "primaryKeyPairId": "string",
  "signAndEncryptKeyPairs": {
    "encryptionKeyPairId": "string",
    "signingKeyPairId": "string"
  }
}
```

<h3 id="gmailuserssettingscseidentitiesget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[CseIdentity](#schemacseidentity)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://mail.google.com/ ) & Oauth2c ( Scopes: https://mail.google.com/ ), Oauth2 ( Scopes: https://www.googleapis.com/auth/gmail.modify ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/gmail.modify ), Oauth2 ( Scopes: https://www.googleapis.com/auth/gmail.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/gmail.readonly ), Oauth2 ( Scopes: https://www.googleapis.com/auth/gmail.settings.basic ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/gmail.settings.basic ), Oauth2 ( Scopes: https://www.googleapis.com/auth/gmail.settings.sharing ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/gmail.settings.sharing )
</aside>

## gmail.users.settings.cse.identities.delete

<a id="opIdgmail.users.settings.cse.identities.delete"></a>

> Code samples

```bash
curl https://gmail.googleapis.com/gmail/v1/users/string/settings/cse/identities/string \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /gmail/v1/users/{userId}/settings/cse/identities/{cseEmailAddress}`

Deletes a client-side encryption identity. The authenticated user can no longer use the identity to send encrypted messages. You cannot restore the identity after you delete it. Instead, use the CreateCseIdentity method to create another identity with the same configuration.

<h3 id="gmailuserssettingscseidentitiesdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userId|path|string|true|The requester's primary email address. To indicate the authenticated user, you can use the special value `me`.|
|cseEmailAddress|path|string|true|The primary email address associated with the client-side encryption identity configuration that's removed.|
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

<h3 id="gmailuserssettingscseidentitiesdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/gmail.settings.basic ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/gmail.settings.basic ), Oauth2 ( Scopes: https://www.googleapis.com/auth/gmail.settings.sharing ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/gmail.settings.sharing )
</aside>

## gmail.users.settings.cse.identities.patch

<a id="opIdgmail.users.settings.cse.identities.patch"></a>

> Code samples

```bash
curl https://gmail.googleapis.com/gmail/v1/users/string/settings/cse/identities/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "emailAddress": "string",
    "primaryKeyPairId": "string",
    "signAndEncryptKeyPairs": {
      "encryptionKeyPairId": "string",
      "signingKeyPairId": "string"
    }
  }'
```

`PATCH /gmail/v1/users/{userId}/settings/cse/identities/{emailAddress}`

Associates a different key pair with an existing client-side encryption identity. The updated key pair must validate against Google's [S/MIME certificate profiles](https://support.google.com/a/answer/7300887).

> Body parameter

```json
{
  "emailAddress": "string",
  "primaryKeyPairId": "string",
  "signAndEncryptKeyPairs": {
    "encryptionKeyPairId": "string",
    "signingKeyPairId": "string"
  }
}
```

<h3 id="gmailuserssettingscseidentitiespatch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userId|path|string|true|The requester's primary email address. To indicate the authenticated user, you can use the special value `me`.|
|emailAddress|path|string|true|The email address of the client-side encryption identity to update.|
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
|body|body|[CseIdentity](#schemacseidentity)|false|none|
|» emailAddress|body|string|false|The email address for the sending identity. The email address must be the primary email address of the authenticated user.|
|» primaryKeyPairId|body|string|false|If a key pair is associated, the ID of the key pair, CseKeyPair.|
|» signAndEncryptKeyPairs|body|[SignAndEncryptKeyPairs](#schemasignandencryptkeypairs)|false|The configuration of a CSE identity that uses different key pairs for signing and encryption.|

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
  "emailAddress": "string",
  "primaryKeyPairId": "string",
  "signAndEncryptKeyPairs": {
    "encryptionKeyPairId": "string",
    "signingKeyPairId": "string"
  }
}
```

<h3 id="gmailuserssettingscseidentitiespatch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[CseIdentity](#schemacseidentity)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/gmail.settings.basic ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/gmail.settings.basic ), Oauth2 ( Scopes: https://www.googleapis.com/auth/gmail.settings.sharing ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/gmail.settings.sharing )
</aside>

## gmail.users.settings.cse.keypairs.list

<a id="opIdgmail.users.settings.cse.keypairs.list"></a>

> Code samples

```bash
curl https://gmail.googleapis.com/gmail/v1/users/string/settings/cse/keypairs \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /gmail/v1/users/{userId}/settings/cse/keypairs`

Lists client-side encryption key pairs for an authenticated user.

<h3 id="gmailuserssettingscsekeypairslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userId|path|string|true|The requester's primary email address. To indicate the authenticated user, you can use the special value `me`.|
|pageSize|query|integer|false|The number of key pairs to return. If not provided, the page size will default to 20 entries.|
|pageToken|query|string|false|Pagination token indicating which page of key pairs to return. If the token is not supplied, then the API will return the first page of results.|
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
  "cseKeyPairs": [
    {
      "disableTime": "string",
      "enablementState": "stateUnspecified",
      "keyPairId": "string",
      "pem": "string",
      "pkcs7": "string",
      "privateKeyMetadata": [
        {
          "hardwareKeyMetadata": {
            "description": "string"
          },
          "kaclsKeyMetadata": {
            "kaclsData": "string",
            "kaclsUri": "string"
          },
          "privateKeyMetadataId": "string"
        }
      ],
      "subjectEmailAddresses": [
        "string"
      ]
    }
  ],
  "nextPageToken": "string"
}
```

<h3 id="gmailuserssettingscsekeypairslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListCseKeyPairsResponse](#schemalistcsekeypairsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://mail.google.com/ ) & Oauth2c ( Scopes: https://mail.google.com/ ), Oauth2 ( Scopes: https://www.googleapis.com/auth/gmail.modify ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/gmail.modify ), Oauth2 ( Scopes: https://www.googleapis.com/auth/gmail.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/gmail.readonly ), Oauth2 ( Scopes: https://www.googleapis.com/auth/gmail.settings.basic ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/gmail.settings.basic ), Oauth2 ( Scopes: https://www.googleapis.com/auth/gmail.settings.sharing ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/gmail.settings.sharing )
</aside>

## gmail.users.settings.cse.keypairs.create

<a id="opIdgmail.users.settings.cse.keypairs.create"></a>

> Code samples

```bash
curl https://gmail.googleapis.com/gmail/v1/users/string/settings/cse/keypairs \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "pkcs7": "string",
    "privateKeyMetadata": [
      {
        "hardwareKeyMetadata": {
          "description": "string"
        },
        "kaclsKeyMetadata": {
          "kaclsData": "string",
          "kaclsUri": "string"
        }
      }
    ]
  }'
```

`POST /gmail/v1/users/{userId}/settings/cse/keypairs`

Creates and uploads a client-side encryption S/MIME public key certificate chain and private key metadata for the authenticated user.

> Body parameter

```json
{
  "pkcs7": "string",
  "privateKeyMetadata": [
    {
      "hardwareKeyMetadata": {
        "description": "string"
      },
      "kaclsKeyMetadata": {
        "kaclsData": "string",
        "kaclsUri": "string"
      }
    }
  ]
}
```

<h3 id="gmailuserssettingscsekeypairscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userId|path|string|true|The requester's primary email address. To indicate the authenticated user, you can use the special value `me`.|
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
|body|body|[CseKeyPair](#schemacsekeypair)|false|none|
|» pkcs7|body|string|false|Input only. The public key and its certificate chain. The chain must be in [PKCS#7](https://en.wikipedia.org/wiki/PKCS_7) format and use PEM encoding and ASCII armor.|
|» privateKeyMetadata|body|[[CsePrivateKeyMetadata](#schemacseprivatekeymetadata)]|false|Metadata for instances of this key pair's private key.|

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
  "disableTime": "string",
  "enablementState": "stateUnspecified",
  "keyPairId": "string",
  "pem": "string",
  "pkcs7": "string",
  "privateKeyMetadata": [
    {
      "hardwareKeyMetadata": {
        "description": "string"
      },
      "kaclsKeyMetadata": {
        "kaclsData": "string",
        "kaclsUri": "string"
      },
      "privateKeyMetadataId": "string"
    }
  ],
  "subjectEmailAddresses": [
    "string"
  ]
}
```

<h3 id="gmailuserssettingscsekeypairscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[CseKeyPair](#schemacsekeypair)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/gmail.settings.basic ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/gmail.settings.basic ), Oauth2 ( Scopes: https://www.googleapis.com/auth/gmail.settings.sharing ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/gmail.settings.sharing )
</aside>

## gmail.users.settings.cse.keypairs.get

<a id="opIdgmail.users.settings.cse.keypairs.get"></a>

> Code samples

```bash
curl https://gmail.googleapis.com/gmail/v1/users/string/settings/cse/keypairs/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /gmail/v1/users/{userId}/settings/cse/keypairs/{keyPairId}`

Retrieves an existing client-side encryption key pair.

<h3 id="gmailuserssettingscsekeypairsget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userId|path|string|true|The requester's primary email address. To indicate the authenticated user, you can use the special value `me`.|
|keyPairId|path|string|true|The identifier of the key pair to retrieve.|
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
  "disableTime": "string",
  "enablementState": "stateUnspecified",
  "keyPairId": "string",
  "pem": "string",
  "pkcs7": "string",
  "privateKeyMetadata": [
    {
      "hardwareKeyMetadata": {
        "description": "string"
      },
      "kaclsKeyMetadata": {
        "kaclsData": "string",
        "kaclsUri": "string"
      },
      "privateKeyMetadataId": "string"
    }
  ],
  "subjectEmailAddresses": [
    "string"
  ]
}
```

<h3 id="gmailuserssettingscsekeypairsget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[CseKeyPair](#schemacsekeypair)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://mail.google.com/ ) & Oauth2c ( Scopes: https://mail.google.com/ ), Oauth2 ( Scopes: https://www.googleapis.com/auth/gmail.modify ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/gmail.modify ), Oauth2 ( Scopes: https://www.googleapis.com/auth/gmail.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/gmail.readonly ), Oauth2 ( Scopes: https://www.googleapis.com/auth/gmail.settings.basic ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/gmail.settings.basic ), Oauth2 ( Scopes: https://www.googleapis.com/auth/gmail.settings.sharing ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/gmail.settings.sharing )
</aside>

## gmail.users.settings.cse.keypairs.disable

<a id="opIdgmail.users.settings.cse.keypairs.disable"></a>

> Code samples

```bash
curl https://gmail.googleapis.com/gmail/v1/users/string/settings/cse/keypairs/string:disable \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{}'
```

`POST /gmail/v1/users/{userId}/settings/cse/keypairs/{keyPairId}:disable`

Turns off a client-side encryption key pair. The authenticated user can no longer use the key pair to decrypt incoming CSE message texts or sign outgoing CSE mail. To regain access, use the EnableCseKeyPair to turn on the key pair. After 30 days, you can permanently delete the key pair by using the ObliterateCseKeyPair method.

> Body parameter

```json
{}
```

<h3 id="gmailuserssettingscsekeypairsdisable-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userId|path|string|true|The requester's primary email address. To indicate the authenticated user, you can use the special value `me`.|
|keyPairId|path|string|true|The identifier of the key pair to turn off.|
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
|body|body|[DisableCseKeyPairRequest](#schemadisablecsekeypairrequest)|false|none|

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
  "disableTime": "string",
  "enablementState": "stateUnspecified",
  "keyPairId": "string",
  "pem": "string",
  "pkcs7": "string",
  "privateKeyMetadata": [
    {
      "hardwareKeyMetadata": {
        "description": "string"
      },
      "kaclsKeyMetadata": {
        "kaclsData": "string",
        "kaclsUri": "string"
      },
      "privateKeyMetadataId": "string"
    }
  ],
  "subjectEmailAddresses": [
    "string"
  ]
}
```

<h3 id="gmailuserssettingscsekeypairsdisable-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[CseKeyPair](#schemacsekeypair)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/gmail.settings.basic ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/gmail.settings.basic ), Oauth2 ( Scopes: https://www.googleapis.com/auth/gmail.settings.sharing ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/gmail.settings.sharing )
</aside>

## gmail.users.settings.cse.keypairs.enable

<a id="opIdgmail.users.settings.cse.keypairs.enable"></a>

> Code samples

```bash
curl https://gmail.googleapis.com/gmail/v1/users/string/settings/cse/keypairs/string:enable \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{}'
```

`POST /gmail/v1/users/{userId}/settings/cse/keypairs/{keyPairId}:enable`

Turns on a client-side encryption key pair that was turned off. The key pair becomes active again for any associated client-side encryption identities.

> Body parameter

```json
{}
```

<h3 id="gmailuserssettingscsekeypairsenable-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userId|path|string|true|The requester's primary email address. To indicate the authenticated user, you can use the special value `me`.|
|keyPairId|path|string|true|The identifier of the key pair to turn on.|
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
|body|body|[EnableCseKeyPairRequest](#schemaenablecsekeypairrequest)|false|none|

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
  "disableTime": "string",
  "enablementState": "stateUnspecified",
  "keyPairId": "string",
  "pem": "string",
  "pkcs7": "string",
  "privateKeyMetadata": [
    {
      "hardwareKeyMetadata": {
        "description": "string"
      },
      "kaclsKeyMetadata": {
        "kaclsData": "string",
        "kaclsUri": "string"
      },
      "privateKeyMetadataId": "string"
    }
  ],
  "subjectEmailAddresses": [
    "string"
  ]
}
```

<h3 id="gmailuserssettingscsekeypairsenable-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[CseKeyPair](#schemacsekeypair)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/gmail.settings.basic ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/gmail.settings.basic ), Oauth2 ( Scopes: https://www.googleapis.com/auth/gmail.settings.sharing ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/gmail.settings.sharing )
</aside>

## gmail.users.settings.cse.keypairs.obliterate

<a id="opIdgmail.users.settings.cse.keypairs.obliterate"></a>

> Code samples

```bash
curl https://gmail.googleapis.com/gmail/v1/users/string/settings/cse/keypairs/string:obliterate \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{}'
```

`POST /gmail/v1/users/{userId}/settings/cse/keypairs/{keyPairId}:obliterate`

Deletes a client-side encryption key pair permanently and immediately. You can only permanently delete key pairs that have been turned off for more than 30 days. To turn off a key pair, use the DisableCseKeyPair method. Gmail can't restore or decrypt any messages that were encrypted by an obliterated key. Authenticated users and Google Workspace administrators lose access to reading the encrypted messages.

> Body parameter

```json
{}
```

<h3 id="gmailuserssettingscsekeypairsobliterate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userId|path|string|true|The requester's primary email address. To indicate the authenticated user, you can use the special value `me`.|
|keyPairId|path|string|true|The identifier of the key pair to obliterate.|
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
|body|body|[ObliterateCseKeyPairRequest](#schemaobliteratecsekeypairrequest)|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

<h3 id="gmailuserssettingscsekeypairsobliterate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/gmail.settings.basic ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/gmail.settings.basic ), Oauth2 ( Scopes: https://www.googleapis.com/auth/gmail.settings.sharing ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/gmail.settings.sharing )
</aside>

## gmail.users.settings.delegates.list

<a id="opIdgmail.users.settings.delegates.list"></a>

> Code samples

```bash
curl https://gmail.googleapis.com/gmail/v1/users/string/settings/delegates \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /gmail/v1/users/{userId}/settings/delegates`

Lists the delegates for the specified account. This method is only available to service account clients that have been delegated domain-wide authority.

<h3 id="gmailuserssettingsdelegateslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userId|path|string|true|User's email address. The special value "me" can be used to indicate the authenticated user.|
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
  "delegates": [
    {
      "delegateEmail": "string",
      "verificationStatus": "verificationStatusUnspecified"
    }
  ]
}
```

<h3 id="gmailuserssettingsdelegateslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListDelegatesResponse](#schemalistdelegatesresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://mail.google.com/ ) & Oauth2c ( Scopes: https://mail.google.com/ ), Oauth2 ( Scopes: https://www.googleapis.com/auth/gmail.modify ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/gmail.modify ), Oauth2 ( Scopes: https://www.googleapis.com/auth/gmail.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/gmail.readonly ), Oauth2 ( Scopes: https://www.googleapis.com/auth/gmail.settings.basic ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/gmail.settings.basic )
</aside>

## gmail.users.settings.delegates.create

<a id="opIdgmail.users.settings.delegates.create"></a>

> Code samples

```bash
curl https://gmail.googleapis.com/gmail/v1/users/string/settings/delegates \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "delegateEmail": "string",
    "verificationStatus": "verificationStatusUnspecified"
  }'
```

`POST /gmail/v1/users/{userId}/settings/delegates`

Adds a delegate with its verification status set directly to `accepted`, without sending any verification email. The delegate user must be a member of the same Google Workspace organization as the delegator user. Gmail imposes limitations on the number of delegates and delegators each user in a Google Workspace organization can have. These limits depend on your organization, but in general each user can have up to 25 delegates and up to 10 delegators. Note that a delegate user must be referred to by their primary email address, and not an email alias. Also note that when a new delegate is created, there may be up to a one minute delay before the new delegate is available for use. This method is only available to service account clients that have been delegated domain-wide authority.

> Body parameter

```json
{
  "delegateEmail": "string",
  "verificationStatus": "verificationStatusUnspecified"
}
```

<h3 id="gmailuserssettingsdelegatescreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userId|path|string|true|User's email address. The special value "me" can be used to indicate the authenticated user.|
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
|body|body|[Delegate](#schemadelegate)|false|none|
|» delegateEmail|body|string|false|The email address of the delegate.|
|» verificationStatus|body|string|false|Indicates whether this address has been verified and can act as a delegate for the account. Read-only.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|
|» verificationStatus|verificationStatusUnspecified|
|» verificationStatus|accepted|
|» verificationStatus|pending|
|» verificationStatus|rejected|
|» verificationStatus|expired|

> Example responses

> 200 Response

```json
{
  "delegateEmail": "string",
  "verificationStatus": "verificationStatusUnspecified"
}
```

<h3 id="gmailuserssettingsdelegatescreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Delegate](#schemadelegate)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/gmail.settings.sharing ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/gmail.settings.sharing )
</aside>

## gmail.users.settings.delegates.get

<a id="opIdgmail.users.settings.delegates.get"></a>

> Code samples

```bash
curl https://gmail.googleapis.com/gmail/v1/users/string/settings/delegates/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /gmail/v1/users/{userId}/settings/delegates/{delegateEmail}`

Gets the specified delegate. Note that a delegate user must be referred to by their primary email address, and not an email alias. This method is only available to service account clients that have been delegated domain-wide authority.

<h3 id="gmailuserssettingsdelegatesget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userId|path|string|true|User's email address. The special value "me" can be used to indicate the authenticated user.|
|delegateEmail|path|string|true|The email address of the user whose delegate relationship is to be retrieved.|
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
  "delegateEmail": "string",
  "verificationStatus": "verificationStatusUnspecified"
}
```

<h3 id="gmailuserssettingsdelegatesget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Delegate](#schemadelegate)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://mail.google.com/ ) & Oauth2c ( Scopes: https://mail.google.com/ ), Oauth2 ( Scopes: https://www.googleapis.com/auth/gmail.modify ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/gmail.modify ), Oauth2 ( Scopes: https://www.googleapis.com/auth/gmail.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/gmail.readonly ), Oauth2 ( Scopes: https://www.googleapis.com/auth/gmail.settings.basic ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/gmail.settings.basic )
</aside>

## gmail.users.settings.delegates.delete

<a id="opIdgmail.users.settings.delegates.delete"></a>

> Code samples

```bash
curl https://gmail.googleapis.com/gmail/v1/users/string/settings/delegates/string \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /gmail/v1/users/{userId}/settings/delegates/{delegateEmail}`

Removes the specified delegate (which can be of any verification status), and revokes any verification that may have been required for using it. Note that a delegate user must be referred to by their primary email address, and not an email alias. This method is only available to service account clients that have been delegated domain-wide authority.

<h3 id="gmailuserssettingsdelegatesdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userId|path|string|true|User's email address. The special value "me" can be used to indicate the authenticated user.|
|delegateEmail|path|string|true|The email address of the user to be removed as a delegate.|
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

<h3 id="gmailuserssettingsdelegatesdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/gmail.settings.sharing ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/gmail.settings.sharing )
</aside>

## gmail.users.settings.filters.list

<a id="opIdgmail.users.settings.filters.list"></a>

> Code samples

```bash
curl https://gmail.googleapis.com/gmail/v1/users/string/settings/filters \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /gmail/v1/users/{userId}/settings/filters`

Lists the message filters of a Gmail user.

<h3 id="gmailuserssettingsfilterslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userId|path|string|true|User's email address. The special value "me" can be used to indicate the authenticated user.|
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
  "filter": [
    {
      "action": {
        "addLabelIds": [
          "string"
        ],
        "forward": "string",
        "removeLabelIds": [
          "string"
        ]
      },
      "criteria": {
        "excludeChats": true,
        "from": "string",
        "hasAttachment": true,
        "negatedQuery": "string",
        "query": "string",
        "size": 0,
        "sizeComparison": "unspecified",
        "subject": "string",
        "to": "string"
      },
      "id": "string"
    }
  ]
}
```

<h3 id="gmailuserssettingsfilterslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListFiltersResponse](#schemalistfiltersresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://mail.google.com/ ) & Oauth2c ( Scopes: https://mail.google.com/ ), Oauth2 ( Scopes: https://www.googleapis.com/auth/gmail.modify ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/gmail.modify ), Oauth2 ( Scopes: https://www.googleapis.com/auth/gmail.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/gmail.readonly ), Oauth2 ( Scopes: https://www.googleapis.com/auth/gmail.settings.basic ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/gmail.settings.basic )
</aside>

## gmail.users.settings.filters.create

<a id="opIdgmail.users.settings.filters.create"></a>

> Code samples

```bash
curl https://gmail.googleapis.com/gmail/v1/users/string/settings/filters \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "action": {
      "addLabelIds": [
        "string"
      ],
      "forward": "string",
      "removeLabelIds": [
        "string"
      ]
    },
    "criteria": {
      "excludeChats": true,
      "from": "string",
      "hasAttachment": true,
      "negatedQuery": "string",
      "query": "string",
      "size": 0,
      "sizeComparison": "unspecified",
      "subject": "string",
      "to": "string"
    },
    "id": "string"
  }'
```

`POST /gmail/v1/users/{userId}/settings/filters`

Creates a filter. Note: you can only create a maximum of 1,000 filters.

> Body parameter

```json
{
  "action": {
    "addLabelIds": [
      "string"
    ],
    "forward": "string",
    "removeLabelIds": [
      "string"
    ]
  },
  "criteria": {
    "excludeChats": true,
    "from": "string",
    "hasAttachment": true,
    "negatedQuery": "string",
    "query": "string",
    "size": 0,
    "sizeComparison": "unspecified",
    "subject": "string",
    "to": "string"
  },
  "id": "string"
}
```

<h3 id="gmailuserssettingsfilterscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userId|path|string|true|User's email address. The special value "me" can be used to indicate the authenticated user.|
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
|body|body|[Filter](#schemafilter)|false|none|
|» action|body|[FilterAction](#schemafilteraction)|false|Action that the filter performs.|
|» criteria|body|[FilterCriteria](#schemafiltercriteria)|false|Matching criteria for the filter.|
|» id|body|string|false|The server assigned ID of the filter.|

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
  "action": {
    "addLabelIds": [
      "string"
    ],
    "forward": "string",
    "removeLabelIds": [
      "string"
    ]
  },
  "criteria": {
    "excludeChats": true,
    "from": "string",
    "hasAttachment": true,
    "negatedQuery": "string",
    "query": "string",
    "size": 0,
    "sizeComparison": "unspecified",
    "subject": "string",
    "to": "string"
  },
  "id": "string"
}
```

<h3 id="gmailuserssettingsfilterscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Filter](#schemafilter)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/gmail.settings.basic ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/gmail.settings.basic )
</aside>

## gmail.users.settings.filters.get

<a id="opIdgmail.users.settings.filters.get"></a>

> Code samples

```bash
curl https://gmail.googleapis.com/gmail/v1/users/string/settings/filters/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /gmail/v1/users/{userId}/settings/filters/{id}`

Gets a filter.

<h3 id="gmailuserssettingsfiltersget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userId|path|string|true|User's email address. The special value "me" can be used to indicate the authenticated user.|
|id|path|string|true|The ID of the filter to be fetched.|
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
  "action": {
    "addLabelIds": [
      "string"
    ],
    "forward": "string",
    "removeLabelIds": [
      "string"
    ]
  },
  "criteria": {
    "excludeChats": true,
    "from": "string",
    "hasAttachment": true,
    "negatedQuery": "string",
    "query": "string",
    "size": 0,
    "sizeComparison": "unspecified",
    "subject": "string",
    "to": "string"
  },
  "id": "string"
}
```

<h3 id="gmailuserssettingsfiltersget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Filter](#schemafilter)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://mail.google.com/ ) & Oauth2c ( Scopes: https://mail.google.com/ ), Oauth2 ( Scopes: https://www.googleapis.com/auth/gmail.modify ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/gmail.modify ), Oauth2 ( Scopes: https://www.googleapis.com/auth/gmail.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/gmail.readonly ), Oauth2 ( Scopes: https://www.googleapis.com/auth/gmail.settings.basic ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/gmail.settings.basic )
</aside>

## gmail.users.settings.filters.delete

<a id="opIdgmail.users.settings.filters.delete"></a>

> Code samples

```bash
curl https://gmail.googleapis.com/gmail/v1/users/string/settings/filters/string \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /gmail/v1/users/{userId}/settings/filters/{id}`

Immediately and permanently deletes the specified filter.

<h3 id="gmailuserssettingsfiltersdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userId|path|string|true|User's email address. The special value "me" can be used to indicate the authenticated user.|
|id|path|string|true|The ID of the filter to be deleted.|
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

<h3 id="gmailuserssettingsfiltersdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/gmail.settings.basic ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/gmail.settings.basic )
</aside>

## gmail.users.settings.forwardingAddresses.list

<a id="opIdgmail.users.settings.forwardingAddresses.list"></a>

> Code samples

```bash
curl https://gmail.googleapis.com/gmail/v1/users/string/settings/forwardingAddresses \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /gmail/v1/users/{userId}/settings/forwardingAddresses`

Lists the forwarding addresses for the specified account.

<h3 id="gmailuserssettingsforwardingaddresseslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userId|path|string|true|User's email address. The special value "me" can be used to indicate the authenticated user.|
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
  "forwardingAddresses": [
    {
      "forwardingEmail": "string",
      "verificationStatus": "verificationStatusUnspecified"
    }
  ]
}
```

<h3 id="gmailuserssettingsforwardingaddresseslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListForwardingAddressesResponse](#schemalistforwardingaddressesresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://mail.google.com/ ) & Oauth2c ( Scopes: https://mail.google.com/ ), Oauth2 ( Scopes: https://www.googleapis.com/auth/gmail.modify ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/gmail.modify ), Oauth2 ( Scopes: https://www.googleapis.com/auth/gmail.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/gmail.readonly ), Oauth2 ( Scopes: https://www.googleapis.com/auth/gmail.settings.basic ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/gmail.settings.basic )
</aside>

## gmail.users.settings.forwardingAddresses.create

<a id="opIdgmail.users.settings.forwardingAddresses.create"></a>

> Code samples

```bash
curl https://gmail.googleapis.com/gmail/v1/users/string/settings/forwardingAddresses \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "forwardingEmail": "string",
    "verificationStatus": "verificationStatusUnspecified"
  }'
```

`POST /gmail/v1/users/{userId}/settings/forwardingAddresses`

Creates a forwarding address. If ownership verification is required, a message will be sent to the recipient and the resource's verification status will be set to `pending`; otherwise, the resource will be created with verification status set to `accepted`. This method is only available to service account clients that have been delegated domain-wide authority.

> Body parameter

```json
{
  "forwardingEmail": "string",
  "verificationStatus": "verificationStatusUnspecified"
}
```

<h3 id="gmailuserssettingsforwardingaddressescreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userId|path|string|true|User's email address. The special value "me" can be used to indicate the authenticated user.|
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
|body|body|[ForwardingAddress](#schemaforwardingaddress)|false|none|
|» forwardingEmail|body|string|false|An email address to which messages can be forwarded.|
|» verificationStatus|body|string|false|Indicates whether this address has been verified and is usable for forwarding. Read-only.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|
|» verificationStatus|verificationStatusUnspecified|
|» verificationStatus|accepted|
|» verificationStatus|pending|

> Example responses

> 200 Response

```json
{
  "forwardingEmail": "string",
  "verificationStatus": "verificationStatusUnspecified"
}
```

<h3 id="gmailuserssettingsforwardingaddressescreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ForwardingAddress](#schemaforwardingaddress)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/gmail.settings.sharing ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/gmail.settings.sharing )
</aside>

## gmail.users.settings.forwardingAddresses.get

<a id="opIdgmail.users.settings.forwardingAddresses.get"></a>

> Code samples

```bash
curl https://gmail.googleapis.com/gmail/v1/users/string/settings/forwardingAddresses/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /gmail/v1/users/{userId}/settings/forwardingAddresses/{forwardingEmail}`

Gets the specified forwarding address.

<h3 id="gmailuserssettingsforwardingaddressesget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userId|path|string|true|User's email address. The special value "me" can be used to indicate the authenticated user.|
|forwardingEmail|path|string|true|The forwarding address to be retrieved.|
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
  "forwardingEmail": "string",
  "verificationStatus": "verificationStatusUnspecified"
}
```

<h3 id="gmailuserssettingsforwardingaddressesget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ForwardingAddress](#schemaforwardingaddress)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://mail.google.com/ ) & Oauth2c ( Scopes: https://mail.google.com/ ), Oauth2 ( Scopes: https://www.googleapis.com/auth/gmail.modify ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/gmail.modify ), Oauth2 ( Scopes: https://www.googleapis.com/auth/gmail.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/gmail.readonly ), Oauth2 ( Scopes: https://www.googleapis.com/auth/gmail.settings.basic ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/gmail.settings.basic )
</aside>

## gmail.users.settings.forwardingAddresses.delete

<a id="opIdgmail.users.settings.forwardingAddresses.delete"></a>

> Code samples

```bash
curl https://gmail.googleapis.com/gmail/v1/users/string/settings/forwardingAddresses/string \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /gmail/v1/users/{userId}/settings/forwardingAddresses/{forwardingEmail}`

Deletes the specified forwarding address and revokes any verification that may have been required. This method is only available to service account clients that have been delegated domain-wide authority.

<h3 id="gmailuserssettingsforwardingaddressesdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userId|path|string|true|User's email address. The special value "me" can be used to indicate the authenticated user.|
|forwardingEmail|path|string|true|The forwarding address to be deleted.|
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

<h3 id="gmailuserssettingsforwardingaddressesdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/gmail.settings.sharing ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/gmail.settings.sharing )
</aside>

## gmail.users.settings.getImap

<a id="opIdgmail.users.settings.getImap"></a>

> Code samples

```bash
curl https://gmail.googleapis.com/gmail/v1/users/string/settings/imap \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /gmail/v1/users/{userId}/settings/imap`

Gets IMAP settings.

<h3 id="gmailuserssettingsgetimap-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userId|path|string|true|User's email address. The special value "me" can be used to indicate the authenticated user.|
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
  "autoExpunge": true,
  "enabled": true,
  "expungeBehavior": "expungeBehaviorUnspecified",
  "maxFolderSize": 0
}
```

<h3 id="gmailuserssettingsgetimap-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ImapSettings](#schemaimapsettings)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://mail.google.com/ ) & Oauth2c ( Scopes: https://mail.google.com/ ), Oauth2 ( Scopes: https://www.googleapis.com/auth/gmail.modify ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/gmail.modify ), Oauth2 ( Scopes: https://www.googleapis.com/auth/gmail.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/gmail.readonly ), Oauth2 ( Scopes: https://www.googleapis.com/auth/gmail.settings.basic ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/gmail.settings.basic )
</aside>

## gmail.users.settings.updateImap

<a id="opIdgmail.users.settings.updateImap"></a>

> Code samples

```bash
curl https://gmail.googleapis.com/gmail/v1/users/string/settings/imap \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "autoExpunge": true,
    "enabled": true,
    "expungeBehavior": "expungeBehaviorUnspecified",
    "maxFolderSize": 0
  }'
```

`PUT /gmail/v1/users/{userId}/settings/imap`

Updates IMAP settings.

> Body parameter

```json
{
  "autoExpunge": true,
  "enabled": true,
  "expungeBehavior": "expungeBehaviorUnspecified",
  "maxFolderSize": 0
}
```

<h3 id="gmailuserssettingsupdateimap-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userId|path|string|true|User's email address. The special value "me" can be used to indicate the authenticated user.|
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
|body|body|[ImapSettings](#schemaimapsettings)|false|none|
|» autoExpunge|body|boolean|false|If this value is true, Gmail will immediately expunge a message when it is marked as deleted in IMAP. Otherwise, Gmail will wait for an update from the client before expunging messages marked as deleted.|
|» enabled|body|boolean|false|Whether IMAP is enabled for the account.|
|» expungeBehavior|body|string|false|The action that will be executed on a message when it is marked as deleted and expunged from the last visible IMAP folder.|
|» maxFolderSize|body|integer(int32)|false|An optional limit on the number of messages that an IMAP folder may contain. Legal values are 0, 1000, 2000, 5000 or 10000. A value of zero is interpreted to mean that there is no limit.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|
|» expungeBehavior|expungeBehaviorUnspecified|
|» expungeBehavior|archive|
|» expungeBehavior|trash|
|» expungeBehavior|deleteForever|

> Example responses

> 200 Response

```json
{
  "autoExpunge": true,
  "enabled": true,
  "expungeBehavior": "expungeBehaviorUnspecified",
  "maxFolderSize": 0
}
```

<h3 id="gmailuserssettingsupdateimap-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ImapSettings](#schemaimapsettings)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/gmail.settings.basic ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/gmail.settings.basic )
</aside>

## gmail.users.settings.getLanguage

<a id="opIdgmail.users.settings.getLanguage"></a>

> Code samples

```bash
curl https://gmail.googleapis.com/gmail/v1/users/string/settings/language \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /gmail/v1/users/{userId}/settings/language`

Gets language settings.

<h3 id="gmailuserssettingsgetlanguage-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userId|path|string|true|User's email address. The special value "me" can be used to indicate the authenticated user.|
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
  "displayLanguage": "string"
}
```

<h3 id="gmailuserssettingsgetlanguage-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[LanguageSettings](#schemalanguagesettings)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://mail.google.com/ ) & Oauth2c ( Scopes: https://mail.google.com/ ), Oauth2 ( Scopes: https://www.googleapis.com/auth/gmail.modify ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/gmail.modify ), Oauth2 ( Scopes: https://www.googleapis.com/auth/gmail.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/gmail.readonly ), Oauth2 ( Scopes: https://www.googleapis.com/auth/gmail.settings.basic ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/gmail.settings.basic )
</aside>

## gmail.users.settings.updateLanguage

<a id="opIdgmail.users.settings.updateLanguage"></a>

> Code samples

```bash
curl https://gmail.googleapis.com/gmail/v1/users/string/settings/language \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "displayLanguage": "string"
  }'
```

`PUT /gmail/v1/users/{userId}/settings/language`

Updates language settings. If successful, the return object contains the `displayLanguage` that was saved for the user, which may differ from the value passed into the request. This is because the requested `displayLanguage` may not be directly supported by Gmail but have a close variant that is, and so the variant may be chosen and saved instead.

> Body parameter

```json
{
  "displayLanguage": "string"
}
```

<h3 id="gmailuserssettingsupdatelanguage-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userId|path|string|true|User's email address. The special value "me" can be used to indicate the authenticated user.|
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
|body|body|[LanguageSettings](#schemalanguagesettings)|false|none|
|» displayLanguage|body|string|false|The language to display Gmail in, formatted as an RFC 3066 Language Tag (for example `en-GB`, `fr` or `ja` for British English, French, or Japanese respectively). The set of languages supported by Gmail evolves over time, so please refer to the "Language" dropdown in the Gmail settings for all available options, as described in the language settings help article. A table of sample values is also provided in the Managing Language Settings guide Not all Gmail clients can display the same set of languages. In the case that a user's display language is not available for use on a particular client, said client automatically chooses to display in the closest supported variant (or a reasonable default).|

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
  "displayLanguage": "string"
}
```

<h3 id="gmailuserssettingsupdatelanguage-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[LanguageSettings](#schemalanguagesettings)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/gmail.settings.basic ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/gmail.settings.basic )
</aside>

## gmail.users.settings.getPop

<a id="opIdgmail.users.settings.getPop"></a>

> Code samples

```bash
curl https://gmail.googleapis.com/gmail/v1/users/string/settings/pop \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /gmail/v1/users/{userId}/settings/pop`

Gets POP settings.

<h3 id="gmailuserssettingsgetpop-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userId|path|string|true|User's email address. The special value "me" can be used to indicate the authenticated user.|
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
  "accessWindow": "accessWindowUnspecified",
  "disposition": "dispositionUnspecified"
}
```

<h3 id="gmailuserssettingsgetpop-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[PopSettings](#schemapopsettings)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://mail.google.com/ ) & Oauth2c ( Scopes: https://mail.google.com/ ), Oauth2 ( Scopes: https://www.googleapis.com/auth/gmail.modify ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/gmail.modify ), Oauth2 ( Scopes: https://www.googleapis.com/auth/gmail.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/gmail.readonly ), Oauth2 ( Scopes: https://www.googleapis.com/auth/gmail.settings.basic ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/gmail.settings.basic )
</aside>

## gmail.users.settings.updatePop

<a id="opIdgmail.users.settings.updatePop"></a>

> Code samples

```bash
curl https://gmail.googleapis.com/gmail/v1/users/string/settings/pop \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "accessWindow": "accessWindowUnspecified",
    "disposition": "dispositionUnspecified"
  }'
```

`PUT /gmail/v1/users/{userId}/settings/pop`

Updates POP settings.

> Body parameter

```json
{
  "accessWindow": "accessWindowUnspecified",
  "disposition": "dispositionUnspecified"
}
```

<h3 id="gmailuserssettingsupdatepop-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userId|path|string|true|User's email address. The special value "me" can be used to indicate the authenticated user.|
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
|body|body|[PopSettings](#schemapopsettings)|false|none|
|» accessWindow|body|string|false|The range of messages which are accessible via POP.|
|» disposition|body|string|false|The action that will be executed on a message after it has been fetched via POP.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|
|» accessWindow|accessWindowUnspecified|
|» accessWindow|disabled|
|» accessWindow|fromNowOn|
|» accessWindow|allMail|
|» disposition|dispositionUnspecified|
|» disposition|leaveInInbox|
|» disposition|archive|
|» disposition|trash|
|» disposition|markRead|

> Example responses

> 200 Response

```json
{
  "accessWindow": "accessWindowUnspecified",
  "disposition": "dispositionUnspecified"
}
```

<h3 id="gmailuserssettingsupdatepop-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[PopSettings](#schemapopsettings)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/gmail.settings.basic ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/gmail.settings.basic )
</aside>

## gmail.users.settings.sendAs.list

<a id="opIdgmail.users.settings.sendAs.list"></a>

> Code samples

```bash
curl https://gmail.googleapis.com/gmail/v1/users/string/settings/sendAs \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /gmail/v1/users/{userId}/settings/sendAs`

Lists the send-as aliases for the specified account. The result includes the primary send-as address associated with the account as well as any custom "from" aliases.

<h3 id="gmailuserssettingssendaslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userId|path|string|true|User's email address. The special value "me" can be used to indicate the authenticated user.|
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
  "sendAs": [
    {
      "displayName": "string",
      "isDefault": true,
      "isPrimary": true,
      "replyToAddress": "string",
      "sendAsEmail": "string",
      "signature": "string",
      "smtpMsa": {
        "host": "string",
        "password": "string",
        "port": 0,
        "securityMode": "securityModeUnspecified",
        "username": "string"
      },
      "treatAsAlias": true,
      "verificationStatus": "verificationStatusUnspecified"
    }
  ]
}
```

<h3 id="gmailuserssettingssendaslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListSendAsResponse](#schemalistsendasresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://mail.google.com/ ) & Oauth2c ( Scopes: https://mail.google.com/ ), Oauth2 ( Scopes: https://www.googleapis.com/auth/gmail.modify ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/gmail.modify ), Oauth2 ( Scopes: https://www.googleapis.com/auth/gmail.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/gmail.readonly ), Oauth2 ( Scopes: https://www.googleapis.com/auth/gmail.settings.basic ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/gmail.settings.basic )
</aside>

## gmail.users.settings.sendAs.create

<a id="opIdgmail.users.settings.sendAs.create"></a>

> Code samples

```bash
curl https://gmail.googleapis.com/gmail/v1/users/string/settings/sendAs \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "displayName": "string",
    "isDefault": true,
    "isPrimary": true,
    "replyToAddress": "string",
    "sendAsEmail": "string",
    "signature": "string",
    "smtpMsa": {
      "host": "string",
      "password": "string",
      "port": 0,
      "securityMode": "securityModeUnspecified",
      "username": "string"
    },
    "treatAsAlias": true,
    "verificationStatus": "verificationStatusUnspecified"
  }'
```

`POST /gmail/v1/users/{userId}/settings/sendAs`

Creates a custom "from" send-as alias. If an SMTP MSA is specified, Gmail will attempt to connect to the SMTP service to validate the configuration before creating the alias. If ownership verification is required for the alias, a message will be sent to the email address and the resource's verification status will be set to `pending`; otherwise, the resource will be created with verification status set to `accepted`. If a signature is provided, Gmail will sanitize the HTML before saving it with the alias. This method is only available to service account clients that have been delegated domain-wide authority.

> Body parameter

```json
{
  "displayName": "string",
  "isDefault": true,
  "isPrimary": true,
  "replyToAddress": "string",
  "sendAsEmail": "string",
  "signature": "string",
  "smtpMsa": {
    "host": "string",
    "password": "string",
    "port": 0,
    "securityMode": "securityModeUnspecified",
    "username": "string"
  },
  "treatAsAlias": true,
  "verificationStatus": "verificationStatusUnspecified"
}
```

<h3 id="gmailuserssettingssendascreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userId|path|string|true|User's email address. The special value "me" can be used to indicate the authenticated user.|
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
|body|body|[SendAs](#schemasendas)|false|none|
|» displayName|body|string|false|A name that appears in the "From:" header for mail sent using this alias. For custom "from" addresses, when this is empty, Gmail will populate the "From:" header with the name that is used for the primary address associated with the account. If the admin has disabled the ability for users to update their name format, requests to update this field for the primary login will silently fail.|
|» isDefault|body|boolean|false|Whether this address is selected as the default "From:" address in situations such as composing a new message or sending a vacation auto-reply. Every Gmail account has exactly one default send-as address, so the only legal value that clients may write to this field is `true`. Changing this from `false` to `true` for an address will result in this field becoming `false` for the other previous default address.|
|» isPrimary|body|boolean|false|Whether this address is the primary address used to login to the account. Every Gmail account has exactly one primary address, and it cannot be deleted from the collection of send-as aliases. This field is read-only.|
|» replyToAddress|body|string|false|An optional email address that is included in a "Reply-To:" header for mail sent using this alias. If this is empty, Gmail will not generate a "Reply-To:" header.|
|» sendAsEmail|body|string|false|The email address that appears in the "From:" header for mail sent using this alias. This is read-only for all operations except create.|
|» signature|body|string|false|An optional HTML signature that is included in messages composed with this alias in the Gmail web UI. This signature is added to new emails only.|
|» smtpMsa|body|[SmtpMsa](#schemasmtpmsa)|false|An optional SMTP service that will be used as an outbound relay for mail sent using this alias. If this is empty, outbound mail will be sent directly from Gmail's servers to the destination SMTP service. This setting only applies to custom "from" aliases.|
|» treatAsAlias|body|boolean|false|Whether Gmail should treat this address as an alias for the user's primary email address. This setting only applies to custom "from" aliases.|
|» verificationStatus|body|string|false|Indicates whether this address has been verified for use as a send-as alias. Read-only. This setting only applies to custom "from" aliases.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|
|» verificationStatus|verificationStatusUnspecified|
|» verificationStatus|accepted|
|» verificationStatus|pending|

> Example responses

> 200 Response

```json
{
  "displayName": "string",
  "isDefault": true,
  "isPrimary": true,
  "replyToAddress": "string",
  "sendAsEmail": "string",
  "signature": "string",
  "smtpMsa": {
    "host": "string",
    "password": "string",
    "port": 0,
    "securityMode": "securityModeUnspecified",
    "username": "string"
  },
  "treatAsAlias": true,
  "verificationStatus": "verificationStatusUnspecified"
}
```

<h3 id="gmailuserssettingssendascreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[SendAs](#schemasendas)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/gmail.settings.sharing ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/gmail.settings.sharing )
</aside>

## gmail.users.settings.sendAs.get

<a id="opIdgmail.users.settings.sendAs.get"></a>

> Code samples

```bash
curl https://gmail.googleapis.com/gmail/v1/users/string/settings/sendAs/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /gmail/v1/users/{userId}/settings/sendAs/{sendAsEmail}`

Gets the specified send-as alias. Fails with an HTTP 404 error if the specified address is not a member of the collection.

<h3 id="gmailuserssettingssendasget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userId|path|string|true|User's email address. The special value "me" can be used to indicate the authenticated user.|
|sendAsEmail|path|string|true|The send-as alias to be retrieved.|
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
  "displayName": "string",
  "isDefault": true,
  "isPrimary": true,
  "replyToAddress": "string",
  "sendAsEmail": "string",
  "signature": "string",
  "smtpMsa": {
    "host": "string",
    "password": "string",
    "port": 0,
    "securityMode": "securityModeUnspecified",
    "username": "string"
  },
  "treatAsAlias": true,
  "verificationStatus": "verificationStatusUnspecified"
}
```

<h3 id="gmailuserssettingssendasget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[SendAs](#schemasendas)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://mail.google.com/ ) & Oauth2c ( Scopes: https://mail.google.com/ ), Oauth2 ( Scopes: https://www.googleapis.com/auth/gmail.modify ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/gmail.modify ), Oauth2 ( Scopes: https://www.googleapis.com/auth/gmail.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/gmail.readonly ), Oauth2 ( Scopes: https://www.googleapis.com/auth/gmail.settings.basic ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/gmail.settings.basic )
</aside>

## gmail.users.settings.sendAs.update

<a id="opIdgmail.users.settings.sendAs.update"></a>

> Code samples

```bash
curl https://gmail.googleapis.com/gmail/v1/users/string/settings/sendAs/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "displayName": "string",
    "isDefault": true,
    "isPrimary": true,
    "replyToAddress": "string",
    "sendAsEmail": "string",
    "signature": "string",
    "smtpMsa": {
      "host": "string",
      "password": "string",
      "port": 0,
      "securityMode": "securityModeUnspecified",
      "username": "string"
    },
    "treatAsAlias": true,
    "verificationStatus": "verificationStatusUnspecified"
  }'
```

`PUT /gmail/v1/users/{userId}/settings/sendAs/{sendAsEmail}`

Updates a send-as alias. If a signature is provided, Gmail will sanitize the HTML before saving it with the alias. Addresses other than the primary address for the account can only be updated by service account clients that have been delegated domain-wide authority.

> Body parameter

```json
{
  "displayName": "string",
  "isDefault": true,
  "isPrimary": true,
  "replyToAddress": "string",
  "sendAsEmail": "string",
  "signature": "string",
  "smtpMsa": {
    "host": "string",
    "password": "string",
    "port": 0,
    "securityMode": "securityModeUnspecified",
    "username": "string"
  },
  "treatAsAlias": true,
  "verificationStatus": "verificationStatusUnspecified"
}
```

<h3 id="gmailuserssettingssendasupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userId|path|string|true|User's email address. The special value "me" can be used to indicate the authenticated user.|
|sendAsEmail|path|string|true|The send-as alias to be updated.|
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
|body|body|[SendAs](#schemasendas)|false|none|
|» displayName|body|string|false|A name that appears in the "From:" header for mail sent using this alias. For custom "from" addresses, when this is empty, Gmail will populate the "From:" header with the name that is used for the primary address associated with the account. If the admin has disabled the ability for users to update their name format, requests to update this field for the primary login will silently fail.|
|» isDefault|body|boolean|false|Whether this address is selected as the default "From:" address in situations such as composing a new message or sending a vacation auto-reply. Every Gmail account has exactly one default send-as address, so the only legal value that clients may write to this field is `true`. Changing this from `false` to `true` for an address will result in this field becoming `false` for the other previous default address.|
|» isPrimary|body|boolean|false|Whether this address is the primary address used to login to the account. Every Gmail account has exactly one primary address, and it cannot be deleted from the collection of send-as aliases. This field is read-only.|
|» replyToAddress|body|string|false|An optional email address that is included in a "Reply-To:" header for mail sent using this alias. If this is empty, Gmail will not generate a "Reply-To:" header.|
|» sendAsEmail|body|string|false|The email address that appears in the "From:" header for mail sent using this alias. This is read-only for all operations except create.|
|» signature|body|string|false|An optional HTML signature that is included in messages composed with this alias in the Gmail web UI. This signature is added to new emails only.|
|» smtpMsa|body|[SmtpMsa](#schemasmtpmsa)|false|An optional SMTP service that will be used as an outbound relay for mail sent using this alias. If this is empty, outbound mail will be sent directly from Gmail's servers to the destination SMTP service. This setting only applies to custom "from" aliases.|
|» treatAsAlias|body|boolean|false|Whether Gmail should treat this address as an alias for the user's primary email address. This setting only applies to custom "from" aliases.|
|» verificationStatus|body|string|false|Indicates whether this address has been verified for use as a send-as alias. Read-only. This setting only applies to custom "from" aliases.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|
|» verificationStatus|verificationStatusUnspecified|
|» verificationStatus|accepted|
|» verificationStatus|pending|

> Example responses

> 200 Response

```json
{
  "displayName": "string",
  "isDefault": true,
  "isPrimary": true,
  "replyToAddress": "string",
  "sendAsEmail": "string",
  "signature": "string",
  "smtpMsa": {
    "host": "string",
    "password": "string",
    "port": 0,
    "securityMode": "securityModeUnspecified",
    "username": "string"
  },
  "treatAsAlias": true,
  "verificationStatus": "verificationStatusUnspecified"
}
```

<h3 id="gmailuserssettingssendasupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[SendAs](#schemasendas)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/gmail.settings.basic ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/gmail.settings.basic ), Oauth2 ( Scopes: https://www.googleapis.com/auth/gmail.settings.sharing ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/gmail.settings.sharing )
</aside>

## gmail.users.settings.sendAs.delete

<a id="opIdgmail.users.settings.sendAs.delete"></a>

> Code samples

```bash
curl https://gmail.googleapis.com/gmail/v1/users/string/settings/sendAs/string \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /gmail/v1/users/{userId}/settings/sendAs/{sendAsEmail}`

Deletes the specified send-as alias. Revokes any verification that may have been required for using it. This method is only available to service account clients that have been delegated domain-wide authority.

<h3 id="gmailuserssettingssendasdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userId|path|string|true|User's email address. The special value "me" can be used to indicate the authenticated user.|
|sendAsEmail|path|string|true|The send-as alias to be deleted.|
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

<h3 id="gmailuserssettingssendasdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/gmail.settings.sharing ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/gmail.settings.sharing )
</aside>

## gmail.users.settings.sendAs.patch

<a id="opIdgmail.users.settings.sendAs.patch"></a>

> Code samples

```bash
curl https://gmail.googleapis.com/gmail/v1/users/string/settings/sendAs/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "displayName": "string",
    "isDefault": true,
    "isPrimary": true,
    "replyToAddress": "string",
    "sendAsEmail": "string",
    "signature": "string",
    "smtpMsa": {
      "host": "string",
      "password": "string",
      "port": 0,
      "securityMode": "securityModeUnspecified",
      "username": "string"
    },
    "treatAsAlias": true,
    "verificationStatus": "verificationStatusUnspecified"
  }'
```

`PATCH /gmail/v1/users/{userId}/settings/sendAs/{sendAsEmail}`

Patch the specified send-as alias.

> Body parameter

```json
{
  "displayName": "string",
  "isDefault": true,
  "isPrimary": true,
  "replyToAddress": "string",
  "sendAsEmail": "string",
  "signature": "string",
  "smtpMsa": {
    "host": "string",
    "password": "string",
    "port": 0,
    "securityMode": "securityModeUnspecified",
    "username": "string"
  },
  "treatAsAlias": true,
  "verificationStatus": "verificationStatusUnspecified"
}
```

<h3 id="gmailuserssettingssendaspatch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userId|path|string|true|User's email address. The special value "me" can be used to indicate the authenticated user.|
|sendAsEmail|path|string|true|The send-as alias to be updated.|
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
|body|body|[SendAs](#schemasendas)|false|none|
|» displayName|body|string|false|A name that appears in the "From:" header for mail sent using this alias. For custom "from" addresses, when this is empty, Gmail will populate the "From:" header with the name that is used for the primary address associated with the account. If the admin has disabled the ability for users to update their name format, requests to update this field for the primary login will silently fail.|
|» isDefault|body|boolean|false|Whether this address is selected as the default "From:" address in situations such as composing a new message or sending a vacation auto-reply. Every Gmail account has exactly one default send-as address, so the only legal value that clients may write to this field is `true`. Changing this from `false` to `true` for an address will result in this field becoming `false` for the other previous default address.|
|» isPrimary|body|boolean|false|Whether this address is the primary address used to login to the account. Every Gmail account has exactly one primary address, and it cannot be deleted from the collection of send-as aliases. This field is read-only.|
|» replyToAddress|body|string|false|An optional email address that is included in a "Reply-To:" header for mail sent using this alias. If this is empty, Gmail will not generate a "Reply-To:" header.|
|» sendAsEmail|body|string|false|The email address that appears in the "From:" header for mail sent using this alias. This is read-only for all operations except create.|
|» signature|body|string|false|An optional HTML signature that is included in messages composed with this alias in the Gmail web UI. This signature is added to new emails only.|
|» smtpMsa|body|[SmtpMsa](#schemasmtpmsa)|false|An optional SMTP service that will be used as an outbound relay for mail sent using this alias. If this is empty, outbound mail will be sent directly from Gmail's servers to the destination SMTP service. This setting only applies to custom "from" aliases.|
|» treatAsAlias|body|boolean|false|Whether Gmail should treat this address as an alias for the user's primary email address. This setting only applies to custom "from" aliases.|
|» verificationStatus|body|string|false|Indicates whether this address has been verified for use as a send-as alias. Read-only. This setting only applies to custom "from" aliases.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|
|» verificationStatus|verificationStatusUnspecified|
|» verificationStatus|accepted|
|» verificationStatus|pending|

> Example responses

> 200 Response

```json
{
  "displayName": "string",
  "isDefault": true,
  "isPrimary": true,
  "replyToAddress": "string",
  "sendAsEmail": "string",
  "signature": "string",
  "smtpMsa": {
    "host": "string",
    "password": "string",
    "port": 0,
    "securityMode": "securityModeUnspecified",
    "username": "string"
  },
  "treatAsAlias": true,
  "verificationStatus": "verificationStatusUnspecified"
}
```

<h3 id="gmailuserssettingssendaspatch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[SendAs](#schemasendas)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/gmail.settings.basic ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/gmail.settings.basic ), Oauth2 ( Scopes: https://www.googleapis.com/auth/gmail.settings.sharing ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/gmail.settings.sharing )
</aside>

## gmail.users.settings.sendAs.smimeInfo.list

<a id="opIdgmail.users.settings.sendAs.smimeInfo.list"></a>

> Code samples

```bash
curl https://gmail.googleapis.com/gmail/v1/users/string/settings/sendAs/string/smimeInfo \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /gmail/v1/users/{userId}/settings/sendAs/{sendAsEmail}/smimeInfo`

Lists S/MIME configs for the specified send-as alias.

<h3 id="gmailuserssettingssendassmimeinfolist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userId|path|string|true|The user's email address. The special value `me` can be used to indicate the authenticated user.|
|sendAsEmail|path|string|true|The email address that appears in the "From:" header for mail sent using this alias.|
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
  "smimeInfo": [
    {
      "encryptedKeyPassword": "string",
      "expiration": "string",
      "id": "string",
      "isDefault": true,
      "issuerCn": "string",
      "pem": "string",
      "pkcs12": "string"
    }
  ]
}
```

<h3 id="gmailuserssettingssendassmimeinfolist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListSmimeInfoResponse](#schemalistsmimeinforesponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://mail.google.com/ ) & Oauth2c ( Scopes: https://mail.google.com/ ), Oauth2 ( Scopes: https://www.googleapis.com/auth/gmail.modify ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/gmail.modify ), Oauth2 ( Scopes: https://www.googleapis.com/auth/gmail.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/gmail.readonly ), Oauth2 ( Scopes: https://www.googleapis.com/auth/gmail.settings.basic ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/gmail.settings.basic ), Oauth2 ( Scopes: https://www.googleapis.com/auth/gmail.settings.sharing ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/gmail.settings.sharing )
</aside>

## gmail.users.settings.sendAs.smimeInfo.insert

<a id="opIdgmail.users.settings.sendAs.smimeInfo.insert"></a>

> Code samples

```bash
curl https://gmail.googleapis.com/gmail/v1/users/string/settings/sendAs/string/smimeInfo \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "encryptedKeyPassword": "string",
    "expiration": "string",
    "id": "string",
    "isDefault": true,
    "issuerCn": "string",
    "pem": "string",
    "pkcs12": "string"
  }'
```

`POST /gmail/v1/users/{userId}/settings/sendAs/{sendAsEmail}/smimeInfo`

Insert (upload) the given S/MIME config for the specified send-as alias. Note that pkcs12 format is required for the key.

> Body parameter

```json
{
  "encryptedKeyPassword": "string",
  "expiration": "string",
  "id": "string",
  "isDefault": true,
  "issuerCn": "string",
  "pem": "string",
  "pkcs12": "string"
}
```

<h3 id="gmailuserssettingssendassmimeinfoinsert-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userId|path|string|true|The user's email address. The special value `me` can be used to indicate the authenticated user.|
|sendAsEmail|path|string|true|The email address that appears in the "From:" header for mail sent using this alias.|
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
|body|body|[SmimeInfo](#schemasmimeinfo)|false|none|
|» encryptedKeyPassword|body|string|false|Encrypted key password, when key is encrypted.|
|» expiration|body|string(int64)|false|When the certificate expires (in milliseconds since epoch).|
|» id|body|string|false|The immutable ID for the SmimeInfo.|
|» isDefault|body|boolean|false|Whether this SmimeInfo is the default one for this user's send-as address.|
|» issuerCn|body|string|false|The S/MIME certificate issuer's common name.|
|» pem|body|string|false|PEM formatted X509 concatenated certificate string (standard base64 encoding). Format used for returning key, which includes public key as well as certificate chain (not private key).|
|» pkcs12|body|string(byte)|false|PKCS#12 format containing a single private/public key pair and certificate chain. This format is only accepted from client for creating a new SmimeInfo and is never returned, because the private key is not intended to be exported. PKCS#12 may be encrypted, in which case encryptedKeyPassword should be set appropriately.|

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
  "encryptedKeyPassword": "string",
  "expiration": "string",
  "id": "string",
  "isDefault": true,
  "issuerCn": "string",
  "pem": "string",
  "pkcs12": "string"
}
```

<h3 id="gmailuserssettingssendassmimeinfoinsert-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[SmimeInfo](#schemasmimeinfo)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/gmail.settings.basic ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/gmail.settings.basic ), Oauth2 ( Scopes: https://www.googleapis.com/auth/gmail.settings.sharing ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/gmail.settings.sharing )
</aside>

## gmail.users.settings.sendAs.smimeInfo.get

<a id="opIdgmail.users.settings.sendAs.smimeInfo.get"></a>

> Code samples

```bash
curl https://gmail.googleapis.com/gmail/v1/users/string/settings/sendAs/string/smimeInfo/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /gmail/v1/users/{userId}/settings/sendAs/{sendAsEmail}/smimeInfo/{id}`

Gets the specified S/MIME config for the specified send-as alias.

<h3 id="gmailuserssettingssendassmimeinfoget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userId|path|string|true|The user's email address. The special value `me` can be used to indicate the authenticated user.|
|sendAsEmail|path|string|true|The email address that appears in the "From:" header for mail sent using this alias.|
|id|path|string|true|The immutable ID for the SmimeInfo.|
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
  "encryptedKeyPassword": "string",
  "expiration": "string",
  "id": "string",
  "isDefault": true,
  "issuerCn": "string",
  "pem": "string",
  "pkcs12": "string"
}
```

<h3 id="gmailuserssettingssendassmimeinfoget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[SmimeInfo](#schemasmimeinfo)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://mail.google.com/ ) & Oauth2c ( Scopes: https://mail.google.com/ ), Oauth2 ( Scopes: https://www.googleapis.com/auth/gmail.modify ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/gmail.modify ), Oauth2 ( Scopes: https://www.googleapis.com/auth/gmail.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/gmail.readonly ), Oauth2 ( Scopes: https://www.googleapis.com/auth/gmail.settings.basic ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/gmail.settings.basic ), Oauth2 ( Scopes: https://www.googleapis.com/auth/gmail.settings.sharing ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/gmail.settings.sharing )
</aside>

## gmail.users.settings.sendAs.smimeInfo.delete

<a id="opIdgmail.users.settings.sendAs.smimeInfo.delete"></a>

> Code samples

```bash
curl https://gmail.googleapis.com/gmail/v1/users/string/settings/sendAs/string/smimeInfo/string \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /gmail/v1/users/{userId}/settings/sendAs/{sendAsEmail}/smimeInfo/{id}`

Deletes the specified S/MIME config for the specified send-as alias.

<h3 id="gmailuserssettingssendassmimeinfodelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userId|path|string|true|The user's email address. The special value `me` can be used to indicate the authenticated user.|
|sendAsEmail|path|string|true|The email address that appears in the "From:" header for mail sent using this alias.|
|id|path|string|true|The immutable ID for the SmimeInfo.|
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

<h3 id="gmailuserssettingssendassmimeinfodelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/gmail.settings.basic ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/gmail.settings.basic ), Oauth2 ( Scopes: https://www.googleapis.com/auth/gmail.settings.sharing ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/gmail.settings.sharing )
</aside>

## gmail.users.settings.sendAs.smimeInfo.setDefault

<a id="opIdgmail.users.settings.sendAs.smimeInfo.setDefault"></a>

> Code samples

```bash
curl https://gmail.googleapis.com/gmail/v1/users/string/settings/sendAs/string/smimeInfo/string/setDefault \
  -X POST \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /gmail/v1/users/{userId}/settings/sendAs/{sendAsEmail}/smimeInfo/{id}/setDefault`

Sets the default S/MIME config for the specified send-as alias.

<h3 id="gmailuserssettingssendassmimeinfosetdefault-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userId|path|string|true|The user's email address. The special value `me` can be used to indicate the authenticated user.|
|sendAsEmail|path|string|true|The email address that appears in the "From:" header for mail sent using this alias.|
|id|path|string|true|The immutable ID for the SmimeInfo.|
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

<h3 id="gmailuserssettingssendassmimeinfosetdefault-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/gmail.settings.basic ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/gmail.settings.basic ), Oauth2 ( Scopes: https://www.googleapis.com/auth/gmail.settings.sharing ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/gmail.settings.sharing )
</aside>

## gmail.users.settings.sendAs.verify

<a id="opIdgmail.users.settings.sendAs.verify"></a>

> Code samples

```bash
curl https://gmail.googleapis.com/gmail/v1/users/string/settings/sendAs/string/verify \
  -X POST \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /gmail/v1/users/{userId}/settings/sendAs/{sendAsEmail}/verify`

Sends a verification email to the specified send-as alias address. The verification status must be `pending`. This method is only available to service account clients that have been delegated domain-wide authority.

<h3 id="gmailuserssettingssendasverify-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userId|path|string|true|User's email address. The special value "me" can be used to indicate the authenticated user.|
|sendAsEmail|path|string|true|The send-as alias to be verified.|
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

<h3 id="gmailuserssettingssendasverify-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/gmail.settings.sharing ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/gmail.settings.sharing )
</aside>

## gmail.users.settings.getVacation

<a id="opIdgmail.users.settings.getVacation"></a>

> Code samples

```bash
curl https://gmail.googleapis.com/gmail/v1/users/string/settings/vacation \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /gmail/v1/users/{userId}/settings/vacation`

Gets vacation responder settings.

<h3 id="gmailuserssettingsgetvacation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userId|path|string|true|User's email address. The special value "me" can be used to indicate the authenticated user.|
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
  "enableAutoReply": true,
  "endTime": "string",
  "responseBodyHtml": "string",
  "responseBodyPlainText": "string",
  "responseSubject": "string",
  "restrictToContacts": true,
  "restrictToDomain": true,
  "startTime": "string"
}
```

<h3 id="gmailuserssettingsgetvacation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[VacationSettings](#schemavacationsettings)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://mail.google.com/ ) & Oauth2c ( Scopes: https://mail.google.com/ ), Oauth2 ( Scopes: https://www.googleapis.com/auth/gmail.modify ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/gmail.modify ), Oauth2 ( Scopes: https://www.googleapis.com/auth/gmail.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/gmail.readonly ), Oauth2 ( Scopes: https://www.googleapis.com/auth/gmail.settings.basic ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/gmail.settings.basic )
</aside>

## gmail.users.settings.updateVacation

<a id="opIdgmail.users.settings.updateVacation"></a>

> Code samples

```bash
curl https://gmail.googleapis.com/gmail/v1/users/string/settings/vacation \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "enableAutoReply": true,
    "endTime": "string",
    "responseBodyHtml": "string",
    "responseBodyPlainText": "string",
    "responseSubject": "string",
    "restrictToContacts": true,
    "restrictToDomain": true,
    "startTime": "string"
  }'
```

`PUT /gmail/v1/users/{userId}/settings/vacation`

Updates vacation responder settings.

> Body parameter

```json
{
  "enableAutoReply": true,
  "endTime": "string",
  "responseBodyHtml": "string",
  "responseBodyPlainText": "string",
  "responseSubject": "string",
  "restrictToContacts": true,
  "restrictToDomain": true,
  "startTime": "string"
}
```

<h3 id="gmailuserssettingsupdatevacation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userId|path|string|true|User's email address. The special value "me" can be used to indicate the authenticated user.|
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
|body|body|[VacationSettings](#schemavacationsettings)|false|none|
|» enableAutoReply|body|boolean|false|Flag that controls whether Gmail automatically replies to messages.|
|» endTime|body|string(int64)|false|An optional end time for sending auto-replies (epoch ms). When this is specified, Gmail will automatically reply only to messages that it receives before the end time. If both `startTime` and `endTime` are specified, `startTime` must precede `endTime`.|
|» responseBodyHtml|body|string|false|Response body in HTML format. Gmail will sanitize the HTML before storing it. If both `response_body_plain_text` and `response_body_html` are specified, `response_body_html` will be used.|
|» responseBodyPlainText|body|string|false|Response body in plain text format. If both `response_body_plain_text` and `response_body_html` are specified, `response_body_html` will be used.|
|» responseSubject|body|string|false|Optional text to prepend to the subject line in vacation responses. In order to enable auto-replies, either the response subject or the response body must be nonempty.|
|» restrictToContacts|body|boolean|false|Flag that determines whether responses are sent to recipients who are not in the user's list of contacts.|
|» restrictToDomain|body|boolean|false|Flag that determines whether responses are sent to recipients who are outside of the user's domain. This feature is only available for Google Workspace users.|
|» startTime|body|string(int64)|false|An optional start time for sending auto-replies (epoch ms). When this is specified, Gmail will automatically reply only to messages that it receives after the start time. If both `startTime` and `endTime` are specified, `startTime` must precede `endTime`.|

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
  "enableAutoReply": true,
  "endTime": "string",
  "responseBodyHtml": "string",
  "responseBodyPlainText": "string",
  "responseSubject": "string",
  "restrictToContacts": true,
  "restrictToDomain": true,
  "startTime": "string"
}
```

<h3 id="gmailuserssettingsupdatevacation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[VacationSettings](#schemavacationsettings)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/gmail.settings.basic ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/gmail.settings.basic )
</aside>

## gmail.users.stop

<a id="opIdgmail.users.stop"></a>

> Code samples

```bash
curl https://gmail.googleapis.com/gmail/v1/users/string/stop \
  -X POST \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /gmail/v1/users/{userId}/stop`

Stop receiving push notifications for the given user mailbox.

<h3 id="gmailusersstop-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userId|path|string|true|The user's email address. The special value `me` can be used to indicate the authenticated user.|
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

<h3 id="gmailusersstop-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://mail.google.com/ ) & Oauth2c ( Scopes: https://mail.google.com/ ), Oauth2 ( Scopes: https://www.googleapis.com/auth/gmail.metadata ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/gmail.metadata ), Oauth2 ( Scopes: https://www.googleapis.com/auth/gmail.modify ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/gmail.modify ), Oauth2 ( Scopes: https://www.googleapis.com/auth/gmail.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/gmail.readonly )
</aside>

## gmail.users.threads.list

<a id="opIdgmail.users.threads.list"></a>

> Code samples

```bash
curl https://gmail.googleapis.com/gmail/v1/users/string/threads \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /gmail/v1/users/{userId}/threads`

Lists the threads in the user's mailbox.

<h3 id="gmailusersthreadslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userId|path|string|true|The user's email address. The special value `me` can be used to indicate the authenticated user.|
|includeSpamTrash|query|boolean|false|Include threads from `SPAM` and `TRASH` in the results.|
|labelIds|query|[string]|false|Only return threads with labels that match all of the specified label IDs.|
|maxResults|query|integer|false|Maximum number of threads to return. This field defaults to 100. The maximum allowed value for this field is 500.|
|pageToken|query|string|false|Page token to retrieve a specific page of results in the list.|
|q|query|string|false|Only return threads matching the specified query. Supports the same query format as the Gmail search box. For example, `"from:someuser@example.com rfc822msgid: is:unread"`. Parameter cannot be used when accessing the api using the gmail.metadata scope.|
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
  "resultSizeEstimate": 0,
  "threads": [
    {
      "historyId": "string",
      "id": "string",
      "messages": [
        {
          "historyId": "string",
          "id": "string",
          "internalDate": "string",
          "labelIds": [
            "string"
          ],
          "payload": {
            "body": {
              "attachmentId": "string",
              "data": "string",
              "size": 0
            },
            "filename": "string",
            "headers": [
              {
                "name": "string",
                "value": "string"
              }
            ],
            "mimeType": "string",
            "partId": "string",
            "parts": [
              {}
            ]
          },
          "raw": "string",
          "sizeEstimate": 0,
          "snippet": "string",
          "threadId": "string"
        }
      ],
      "snippet": "string"
    }
  ]
}
```

<h3 id="gmailusersthreadslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListThreadsResponse](#schemalistthreadsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://mail.google.com/ ) & Oauth2c ( Scopes: https://mail.google.com/ ), Oauth2 ( Scopes: https://www.googleapis.com/auth/gmail.metadata ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/gmail.metadata ), Oauth2 ( Scopes: https://www.googleapis.com/auth/gmail.modify ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/gmail.modify ), Oauth2 ( Scopes: https://www.googleapis.com/auth/gmail.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/gmail.readonly )
</aside>

## gmail.users.threads.get

<a id="opIdgmail.users.threads.get"></a>

> Code samples

```bash
curl https://gmail.googleapis.com/gmail/v1/users/string/threads/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /gmail/v1/users/{userId}/threads/{id}`

Gets the specified thread.

<h3 id="gmailusersthreadsget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userId|path|string|true|The user's email address. The special value `me` can be used to indicate the authenticated user.|
|id|path|string|true|The ID of the thread to retrieve.|
|format|query|string|false|The format to return the messages in.|
|metadataHeaders|query|[string]|false|When given and format is METADATA, only include headers specified.|
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
|format|full|
|format|metadata|
|format|minimal|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "historyId": "string",
  "id": "string",
  "messages": [
    {
      "historyId": "string",
      "id": "string",
      "internalDate": "string",
      "labelIds": [
        "string"
      ],
      "payload": {
        "body": {
          "attachmentId": "string",
          "data": "string",
          "size": 0
        },
        "filename": "string",
        "headers": [
          {
            "name": "string",
            "value": "string"
          }
        ],
        "mimeType": "string",
        "partId": "string",
        "parts": [
          {}
        ]
      },
      "raw": "string",
      "sizeEstimate": 0,
      "snippet": "string",
      "threadId": "string"
    }
  ],
  "snippet": "string"
}
```

<h3 id="gmailusersthreadsget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Thread](#schemathread)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://mail.google.com/ ) & Oauth2c ( Scopes: https://mail.google.com/ ), Oauth2 ( Scopes: https://www.googleapis.com/auth/gmail.addons.current.message.action ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/gmail.addons.current.message.action ), Oauth2 ( Scopes: https://www.googleapis.com/auth/gmail.addons.current.message.metadata ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/gmail.addons.current.message.metadata ), Oauth2 ( Scopes: https://www.googleapis.com/auth/gmail.addons.current.message.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/gmail.addons.current.message.readonly ), Oauth2 ( Scopes: https://www.googleapis.com/auth/gmail.metadata ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/gmail.metadata ), Oauth2 ( Scopes: https://www.googleapis.com/auth/gmail.modify ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/gmail.modify ), Oauth2 ( Scopes: https://www.googleapis.com/auth/gmail.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/gmail.readonly )
</aside>

## gmail.users.threads.delete

<a id="opIdgmail.users.threads.delete"></a>

> Code samples

```bash
curl https://gmail.googleapis.com/gmail/v1/users/string/threads/string \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /gmail/v1/users/{userId}/threads/{id}`

Immediately and permanently deletes the specified thread. Any messages that belong to the thread are also deleted. This operation cannot be undone. Prefer `threads.trash` instead.

<h3 id="gmailusersthreadsdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userId|path|string|true|The user's email address. The special value `me` can be used to indicate the authenticated user.|
|id|path|string|true|ID of the Thread to delete.|
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

<h3 id="gmailusersthreadsdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://mail.google.com/ ) & Oauth2c ( Scopes: https://mail.google.com/ )
</aside>

## gmail.users.threads.modify

<a id="opIdgmail.users.threads.modify"></a>

> Code samples

```bash
curl https://gmail.googleapis.com/gmail/v1/users/string/threads/string/modify \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "addLabelIds": [
      "string"
    ],
    "removeLabelIds": [
      "string"
    ]
  }'
```

`POST /gmail/v1/users/{userId}/threads/{id}/modify`

Modifies the labels applied to the thread. This applies to all messages in the thread.

> Body parameter

```json
{
  "addLabelIds": [
    "string"
  ],
  "removeLabelIds": [
    "string"
  ]
}
```

<h3 id="gmailusersthreadsmodify-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userId|path|string|true|The user's email address. The special value `me` can be used to indicate the authenticated user.|
|id|path|string|true|The ID of the thread to modify.|
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
|body|body|[ModifyThreadRequest](#schemamodifythreadrequest)|false|none|
|» addLabelIds|body|[string]|false|A list of IDs of labels to add to this thread. You can add up to 100 labels with each update.|
|» removeLabelIds|body|[string]|false|A list of IDs of labels to remove from this thread. You can remove up to 100 labels with each update.|

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
  "historyId": "string",
  "id": "string",
  "messages": [
    {
      "historyId": "string",
      "id": "string",
      "internalDate": "string",
      "labelIds": [
        "string"
      ],
      "payload": {
        "body": {
          "attachmentId": "string",
          "data": "string",
          "size": 0
        },
        "filename": "string",
        "headers": [
          {
            "name": "string",
            "value": "string"
          }
        ],
        "mimeType": "string",
        "partId": "string",
        "parts": [
          {}
        ]
      },
      "raw": "string",
      "sizeEstimate": 0,
      "snippet": "string",
      "threadId": "string"
    }
  ],
  "snippet": "string"
}
```

<h3 id="gmailusersthreadsmodify-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Thread](#schemathread)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://mail.google.com/ ) & Oauth2c ( Scopes: https://mail.google.com/ ), Oauth2 ( Scopes: https://www.googleapis.com/auth/gmail.modify ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/gmail.modify )
</aside>

## gmail.users.threads.trash

<a id="opIdgmail.users.threads.trash"></a>

> Code samples

```bash
curl https://gmail.googleapis.com/gmail/v1/users/string/threads/string/trash \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /gmail/v1/users/{userId}/threads/{id}/trash`

Moves the specified thread to the trash. Any messages that belong to the thread are also moved to the trash.

<h3 id="gmailusersthreadstrash-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userId|path|string|true|The user's email address. The special value `me` can be used to indicate the authenticated user.|
|id|path|string|true|The ID of the thread to Trash.|
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
  "historyId": "string",
  "id": "string",
  "messages": [
    {
      "historyId": "string",
      "id": "string",
      "internalDate": "string",
      "labelIds": [
        "string"
      ],
      "payload": {
        "body": {
          "attachmentId": "string",
          "data": "string",
          "size": 0
        },
        "filename": "string",
        "headers": [
          {
            "name": "string",
            "value": "string"
          }
        ],
        "mimeType": "string",
        "partId": "string",
        "parts": [
          {}
        ]
      },
      "raw": "string",
      "sizeEstimate": 0,
      "snippet": "string",
      "threadId": "string"
    }
  ],
  "snippet": "string"
}
```

<h3 id="gmailusersthreadstrash-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Thread](#schemathread)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://mail.google.com/ ) & Oauth2c ( Scopes: https://mail.google.com/ ), Oauth2 ( Scopes: https://www.googleapis.com/auth/gmail.modify ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/gmail.modify )
</aside>

## gmail.users.threads.untrash

<a id="opIdgmail.users.threads.untrash"></a>

> Code samples

```bash
curl https://gmail.googleapis.com/gmail/v1/users/string/threads/string/untrash \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /gmail/v1/users/{userId}/threads/{id}/untrash`

Removes the specified thread from the trash. Any messages that belong to the thread are also removed from the trash.

<h3 id="gmailusersthreadsuntrash-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userId|path|string|true|The user's email address. The special value `me` can be used to indicate the authenticated user.|
|id|path|string|true|The ID of the thread to remove from Trash.|
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
  "historyId": "string",
  "id": "string",
  "messages": [
    {
      "historyId": "string",
      "id": "string",
      "internalDate": "string",
      "labelIds": [
        "string"
      ],
      "payload": {
        "body": {
          "attachmentId": "string",
          "data": "string",
          "size": 0
        },
        "filename": "string",
        "headers": [
          {
            "name": "string",
            "value": "string"
          }
        ],
        "mimeType": "string",
        "partId": "string",
        "parts": [
          {}
        ]
      },
      "raw": "string",
      "sizeEstimate": 0,
      "snippet": "string",
      "threadId": "string"
    }
  ],
  "snippet": "string"
}
```

<h3 id="gmailusersthreadsuntrash-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Thread](#schemathread)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://mail.google.com/ ) & Oauth2c ( Scopes: https://mail.google.com/ ), Oauth2 ( Scopes: https://www.googleapis.com/auth/gmail.modify ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/gmail.modify )
</aside>

## gmail.users.watch

<a id="opIdgmail.users.watch"></a>

> Code samples

```bash
curl https://gmail.googleapis.com/gmail/v1/users/string/watch \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "labelFilterAction": "include",
    "labelFilterBehavior": "include",
    "labelIds": [
      "string"
    ],
    "topicName": "string"
  }'
```

`POST /gmail/v1/users/{userId}/watch`

Set up or update a push notification watch on the given user mailbox.

> Body parameter

```json
{
  "labelFilterAction": "include",
  "labelFilterBehavior": "include",
  "labelIds": [
    "string"
  ],
  "topicName": "string"
}
```

<h3 id="gmailuserswatch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userId|path|string|true|The user's email address. The special value `me` can be used to indicate the authenticated user.|
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
|body|body|[WatchRequest](#schemawatchrequest)|false|none|
|» labelFilterAction|body|string|false|**Deprecated.** Filtering behavior of `labelIds list` specified. This field is deprecated because it caused incorrect behavior in some cases; use `label_filter_behavior` instead.|
|» labelFilterBehavior|body|string|false|Filtering behavior of `labelIds list` specified. This field replaces `label_filter_action`; if set, `label_filter_action` is ignored.|
|» labelIds|body|[string]|false|List of label_ids to restrict notifications about. By default, if unspecified, all changes are pushed out. If specified then dictates which labels are required for a push notification to be generated.|
|» topicName|body|string|false|A fully qualified Google Cloud Pub/Sub API topic name to publish the events to. This topic name **must** already exist in Cloud Pub/Sub and you **must** have already granted gmail "publish" permission on it. For example, "projects/my-project-identifier/topics/my-topic-name" (using the Cloud Pub/Sub "v1" topic naming format). Note that the "my-project-identifier" portion must exactly match your Google developer project id (the one executing this watch request).|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|
|» labelFilterAction|include|
|» labelFilterAction|exclude|
|» labelFilterBehavior|include|
|» labelFilterBehavior|exclude|

> Example responses

> 200 Response

```json
{
  "expiration": "string",
  "historyId": "string"
}
```

<h3 id="gmailuserswatch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[WatchResponse](#schemawatchresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://mail.google.com/ ) & Oauth2c ( Scopes: https://mail.google.com/ ), Oauth2 ( Scopes: https://www.googleapis.com/auth/gmail.metadata ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/gmail.metadata ), Oauth2 ( Scopes: https://www.googleapis.com/auth/gmail.modify ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/gmail.modify ), Oauth2 ( Scopes: https://www.googleapis.com/auth/gmail.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/gmail.readonly )
</aside>

# Schemas

<h2 id="tocS_AutoForwarding">AutoForwarding</h2>
<!-- backwards compatibility -->
<a id="schemaautoforwarding"></a>
<a id="schema_AutoForwarding"></a>
<a id="tocSautoforwarding"></a>
<a id="tocsautoforwarding"></a>

```json
{
  "disposition": "dispositionUnspecified",
  "emailAddress": "string",
  "enabled": true
}
```

Auto-forwarding settings for an account.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|disposition|string|false|none|The state that a message should be left in after it has been forwarded.|
|emailAddress|string|false|none|Email address to which all incoming messages are forwarded. This email address must be a verified member of the forwarding addresses.|
|enabled|boolean|false|none|Whether all incoming mail is automatically forwarded to another address.|

#### Enumerated Values

|Property|Value|
|---|---|
|disposition|dispositionUnspecified|
|disposition|leaveInInbox|
|disposition|archive|
|disposition|trash|
|disposition|markRead|

<h2 id="tocS_BatchDeleteMessagesRequest">BatchDeleteMessagesRequest</h2>
<!-- backwards compatibility -->
<a id="schemabatchdeletemessagesrequest"></a>
<a id="schema_BatchDeleteMessagesRequest"></a>
<a id="tocSbatchdeletemessagesrequest"></a>
<a id="tocsbatchdeletemessagesrequest"></a>

```json
{
  "ids": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ids|[string]|false|none|The IDs of the messages to delete.|

<h2 id="tocS_BatchModifyMessagesRequest">BatchModifyMessagesRequest</h2>
<!-- backwards compatibility -->
<a id="schemabatchmodifymessagesrequest"></a>
<a id="schema_BatchModifyMessagesRequest"></a>
<a id="tocSbatchmodifymessagesrequest"></a>
<a id="tocsbatchmodifymessagesrequest"></a>

```json
{
  "addLabelIds": [
    "string"
  ],
  "ids": [
    "string"
  ],
  "removeLabelIds": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|addLabelIds|[string]|false|none|A list of label IDs to add to messages.|
|ids|[string]|false|none|The IDs of the messages to modify. There is a limit of 1000 ids per request.|
|removeLabelIds|[string]|false|none|A list of label IDs to remove from messages.|

<h2 id="tocS_CseIdentity">CseIdentity</h2>
<!-- backwards compatibility -->
<a id="schemacseidentity"></a>
<a id="schema_CseIdentity"></a>
<a id="tocScseidentity"></a>
<a id="tocscseidentity"></a>

```json
{
  "emailAddress": "string",
  "primaryKeyPairId": "string",
  "signAndEncryptKeyPairs": {
    "encryptionKeyPairId": "string",
    "signingKeyPairId": "string"
  }
}
```

The client-side encryption (CSE) configuration for the email address of an authenticated user. Gmail uses CSE configurations to save drafts of client-side encrypted email messages, and to sign and send encrypted email messages.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|emailAddress|string|false|none|The email address for the sending identity. The email address must be the primary email address of the authenticated user.|
|primaryKeyPairId|string|false|none|If a key pair is associated, the ID of the key pair, CseKeyPair.|
|signAndEncryptKeyPairs|[SignAndEncryptKeyPairs](#schemasignandencryptkeypairs)|false|none|The configuration of a CSE identity that uses different key pairs for signing and encryption.|

<h2 id="tocS_CseKeyPair">CseKeyPair</h2>
<!-- backwards compatibility -->
<a id="schemacsekeypair"></a>
<a id="schema_CseKeyPair"></a>
<a id="tocScsekeypair"></a>
<a id="tocscsekeypair"></a>

```json
{
  "disableTime": "string",
  "enablementState": "stateUnspecified",
  "keyPairId": "string",
  "pem": "string",
  "pkcs7": "string",
  "privateKeyMetadata": [
    {
      "hardwareKeyMetadata": {
        "description": "string"
      },
      "kaclsKeyMetadata": {
        "kaclsData": "string",
        "kaclsUri": "string"
      },
      "privateKeyMetadataId": "string"
    }
  ],
  "subjectEmailAddresses": [
    "string"
  ]
}
```

A client-side encryption S/MIME key pair, which is comprised of a public key, its certificate chain, and metadata for its paired private key. Gmail uses the key pair to complete the following tasks: - Sign outgoing client-side encrypted messages. - Save and reopen drafts of client-side encrypted messages. - Save and reopen sent messages. - Decrypt incoming or archived S/MIME messages.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|disableTime|string(google-datetime)|false|read-only|Output only. If a key pair is set to `DISABLED`, the time that the key pair's state changed from `ENABLED` to `DISABLED`. This field is present only when the key pair is in state `DISABLED`.|
|enablementState|string|false|read-only|Output only. The current state of the key pair.|
|keyPairId|string|false|read-only|Output only. The immutable ID for the client-side encryption S/MIME key pair.|
|pem|string|false|read-only|Output only. The public key and its certificate chain, in [PEM](https://en.wikipedia.org/wiki/Privacy-Enhanced_Mail) format.|
|pkcs7|string|false|none|Input only. The public key and its certificate chain. The chain must be in [PKCS#7](https://en.wikipedia.org/wiki/PKCS_7) format and use PEM encoding and ASCII armor.|
|privateKeyMetadata|[[CsePrivateKeyMetadata](#schemacseprivatekeymetadata)]|false|none|Metadata for instances of this key pair's private key.|
|subjectEmailAddresses|[string]|false|read-only|Output only. The email address identities that are specified on the leaf certificate.|

#### Enumerated Values

|Property|Value|
|---|---|
|enablementState|stateUnspecified|
|enablementState|enabled|
|enablementState|disabled|

<h2 id="tocS_CsePrivateKeyMetadata">CsePrivateKeyMetadata</h2>
<!-- backwards compatibility -->
<a id="schemacseprivatekeymetadata"></a>
<a id="schema_CsePrivateKeyMetadata"></a>
<a id="tocScseprivatekeymetadata"></a>
<a id="tocscseprivatekeymetadata"></a>

```json
{
  "hardwareKeyMetadata": {
    "description": "string"
  },
  "kaclsKeyMetadata": {
    "kaclsData": "string",
    "kaclsUri": "string"
  },
  "privateKeyMetadataId": "string"
}
```

Metadata for a private key instance.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|hardwareKeyMetadata|[HardwareKeyMetadata](#schemahardwarekeymetadata)|false|none|Metadata for hardware keys.|
|kaclsKeyMetadata|[KaclsKeyMetadata](#schemakaclskeymetadata)|false|none|Metadata for a private key instance managed by an external key access control list service.|
|privateKeyMetadataId|string|false|read-only|Output only. The immutable ID for the private key metadata instance.|

<h2 id="tocS_Delegate">Delegate</h2>
<!-- backwards compatibility -->
<a id="schemadelegate"></a>
<a id="schema_Delegate"></a>
<a id="tocSdelegate"></a>
<a id="tocsdelegate"></a>

```json
{
  "delegateEmail": "string",
  "verificationStatus": "verificationStatusUnspecified"
}
```

Settings for a delegate. Delegates can read, send, and delete messages, as well as view and add contacts, for the delegator's account. See "Set up mail delegation" for more information about delegates.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|delegateEmail|string|false|none|The email address of the delegate.|
|verificationStatus|string|false|none|Indicates whether this address has been verified and can act as a delegate for the account. Read-only.|

#### Enumerated Values

|Property|Value|
|---|---|
|verificationStatus|verificationStatusUnspecified|
|verificationStatus|accepted|
|verificationStatus|pending|
|verificationStatus|rejected|
|verificationStatus|expired|

<h2 id="tocS_DisableCseKeyPairRequest">DisableCseKeyPairRequest</h2>
<!-- backwards compatibility -->
<a id="schemadisablecsekeypairrequest"></a>
<a id="schema_DisableCseKeyPairRequest"></a>
<a id="tocSdisablecsekeypairrequest"></a>
<a id="tocsdisablecsekeypairrequest"></a>

```json
{}
```

Requests to turn off a client-side encryption key pair.

<h2 id="tocS_Draft">Draft</h2>
<!-- backwards compatibility -->
<a id="schemadraft"></a>
<a id="schema_Draft"></a>
<a id="tocSdraft"></a>
<a id="tocsdraft"></a>

```json
{
  "id": "string",
  "message": {
    "historyId": "string",
    "id": "string",
    "internalDate": "string",
    "labelIds": [
      "string"
    ],
    "payload": {
      "body": {
        "attachmentId": "string",
        "data": "string",
        "size": 0
      },
      "filename": "string",
      "headers": [
        {
          "name": "string",
          "value": "string"
        }
      ],
      "mimeType": "string",
      "partId": "string",
      "parts": [
        {}
      ]
    },
    "raw": "string",
    "sizeEstimate": 0,
    "snippet": "string",
    "threadId": "string"
  }
}
```

A draft email in the user's mailbox.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|The immutable ID of the draft.|
|message|[Message](#schemamessage)|false|none|The message content of the draft.|

<h2 id="tocS_EnableCseKeyPairRequest">EnableCseKeyPairRequest</h2>
<!-- backwards compatibility -->
<a id="schemaenablecsekeypairrequest"></a>
<a id="schema_EnableCseKeyPairRequest"></a>
<a id="tocSenablecsekeypairrequest"></a>
<a id="tocsenablecsekeypairrequest"></a>

```json
{}
```

Requests to turn on a client-side encryption key pair.

<h2 id="tocS_Filter">Filter</h2>
<!-- backwards compatibility -->
<a id="schemafilter"></a>
<a id="schema_Filter"></a>
<a id="tocSfilter"></a>
<a id="tocsfilter"></a>

```json
{
  "action": {
    "addLabelIds": [
      "string"
    ],
    "forward": "string",
    "removeLabelIds": [
      "string"
    ]
  },
  "criteria": {
    "excludeChats": true,
    "from": "string",
    "hasAttachment": true,
    "negatedQuery": "string",
    "query": "string",
    "size": 0,
    "sizeComparison": "unspecified",
    "subject": "string",
    "to": "string"
  },
  "id": "string"
}
```

Resource definition for Gmail filters. Filters apply to specific messages instead of an entire email thread.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action|[FilterAction](#schemafilteraction)|false|none|Action that the filter performs.|
|criteria|[FilterCriteria](#schemafiltercriteria)|false|none|Matching criteria for the filter.|
|id|string|false|none|The server assigned ID of the filter.|

<h2 id="tocS_FilterAction">FilterAction</h2>
<!-- backwards compatibility -->
<a id="schemafilteraction"></a>
<a id="schema_FilterAction"></a>
<a id="tocSfilteraction"></a>
<a id="tocsfilteraction"></a>

```json
{
  "addLabelIds": [
    "string"
  ],
  "forward": "string",
  "removeLabelIds": [
    "string"
  ]
}
```

A set of actions to perform on a message.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|addLabelIds|[string]|false|none|List of labels to add to the message.|
|forward|string|false|none|Email address that the message should be forwarded to.|
|removeLabelIds|[string]|false|none|List of labels to remove from the message.|

<h2 id="tocS_FilterCriteria">FilterCriteria</h2>
<!-- backwards compatibility -->
<a id="schemafiltercriteria"></a>
<a id="schema_FilterCriteria"></a>
<a id="tocSfiltercriteria"></a>
<a id="tocsfiltercriteria"></a>

```json
{
  "excludeChats": true,
  "from": "string",
  "hasAttachment": true,
  "negatedQuery": "string",
  "query": "string",
  "size": 0,
  "sizeComparison": "unspecified",
  "subject": "string",
  "to": "string"
}
```

Message matching criteria.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|excludeChats|boolean|false|none|Whether the response should exclude chats.|
|from|string|false|none|The sender's display name or email address.|
|hasAttachment|boolean|false|none|Whether the message has any attachment.|
|negatedQuery|string|false|none|Only return messages not matching the specified query. Supports the same query format as the Gmail search box. For example, `"from:someuser@example.com rfc822msgid: is:unread"`.|
|query|string|false|none|Only return messages matching the specified query. Supports the same query format as the Gmail search box. For example, `"from:someuser@example.com rfc822msgid: is:unread"`.|
|size|integer(int32)|false|none|The size of the entire RFC822 message in bytes, including all headers and attachments.|
|sizeComparison|string|false|none|How the message size in bytes should be in relation to the size field.|
|subject|string|false|none|Case-insensitive phrase found in the message's subject. Trailing and leading whitespace are be trimmed and adjacent spaces are collapsed.|
|to|string|false|none|The recipient's display name or email address. Includes recipients in the "to", "cc", and "bcc" header fields. You can use simply the local part of the email address. For example, "example" and "example@" both match "example@gmail.com". This field is case-insensitive.|

#### Enumerated Values

|Property|Value|
|---|---|
|sizeComparison|unspecified|
|sizeComparison|smaller|
|sizeComparison|larger|

<h2 id="tocS_ForwardingAddress">ForwardingAddress</h2>
<!-- backwards compatibility -->
<a id="schemaforwardingaddress"></a>
<a id="schema_ForwardingAddress"></a>
<a id="tocSforwardingaddress"></a>
<a id="tocsforwardingaddress"></a>

```json
{
  "forwardingEmail": "string",
  "verificationStatus": "verificationStatusUnspecified"
}
```

Settings for a forwarding address.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|forwardingEmail|string|false|none|An email address to which messages can be forwarded.|
|verificationStatus|string|false|none|Indicates whether this address has been verified and is usable for forwarding. Read-only.|

#### Enumerated Values

|Property|Value|
|---|---|
|verificationStatus|verificationStatusUnspecified|
|verificationStatus|accepted|
|verificationStatus|pending|

<h2 id="tocS_HardwareKeyMetadata">HardwareKeyMetadata</h2>
<!-- backwards compatibility -->
<a id="schemahardwarekeymetadata"></a>
<a id="schema_HardwareKeyMetadata"></a>
<a id="tocShardwarekeymetadata"></a>
<a id="tocshardwarekeymetadata"></a>

```json
{
  "description": "string"
}
```

Metadata for hardware keys.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|false|none|Description about the hardware key.|

<h2 id="tocS_History">History</h2>
<!-- backwards compatibility -->
<a id="schemahistory"></a>
<a id="schema_History"></a>
<a id="tocShistory"></a>
<a id="tocshistory"></a>

```json
{
  "id": "string",
  "labelsAdded": [
    {
      "labelIds": [
        "string"
      ],
      "message": {
        "historyId": "string",
        "id": "string",
        "internalDate": "string",
        "labelIds": [
          "string"
        ],
        "payload": {
          "body": {
            "attachmentId": "string",
            "data": "string",
            "size": 0
          },
          "filename": "string",
          "headers": [
            {
              "name": "string",
              "value": "string"
            }
          ],
          "mimeType": "string",
          "partId": "string",
          "parts": [
            {}
          ]
        },
        "raw": "string",
        "sizeEstimate": 0,
        "snippet": "string",
        "threadId": "string"
      }
    }
  ],
  "labelsRemoved": [
    {
      "labelIds": [
        "string"
      ],
      "message": {
        "historyId": "string",
        "id": "string",
        "internalDate": "string",
        "labelIds": [
          "string"
        ],
        "payload": {
          "body": {
            "attachmentId": "string",
            "data": "string",
            "size": 0
          },
          "filename": "string",
          "headers": [
            {
              "name": "string",
              "value": "string"
            }
          ],
          "mimeType": "string",
          "partId": "string",
          "parts": [
            {}
          ]
        },
        "raw": "string",
        "sizeEstimate": 0,
        "snippet": "string",
        "threadId": "string"
      }
    }
  ],
  "messages": [
    {
      "historyId": "string",
      "id": "string",
      "internalDate": "string",
      "labelIds": [
        "string"
      ],
      "payload": {
        "body": {
          "attachmentId": "string",
          "data": "string",
          "size": 0
        },
        "filename": "string",
        "headers": [
          {
            "name": "string",
            "value": "string"
          }
        ],
        "mimeType": "string",
        "partId": "string",
        "parts": [
          {}
        ]
      },
      "raw": "string",
      "sizeEstimate": 0,
      "snippet": "string",
      "threadId": "string"
    }
  ],
  "messagesAdded": [
    {
      "message": {
        "historyId": "string",
        "id": "string",
        "internalDate": "string",
        "labelIds": [
          "string"
        ],
        "payload": {
          "body": {
            "attachmentId": "string",
            "data": "string",
            "size": 0
          },
          "filename": "string",
          "headers": [
            {
              "name": "string",
              "value": "string"
            }
          ],
          "mimeType": "string",
          "partId": "string",
          "parts": [
            {}
          ]
        },
        "raw": "string",
        "sizeEstimate": 0,
        "snippet": "string",
        "threadId": "string"
      }
    }
  ],
  "messagesDeleted": [
    {
      "message": {
        "historyId": "string",
        "id": "string",
        "internalDate": "string",
        "labelIds": [
          "string"
        ],
        "payload": {
          "body": {
            "attachmentId": "string",
            "data": "string",
            "size": 0
          },
          "filename": "string",
          "headers": [
            {
              "name": "string",
              "value": "string"
            }
          ],
          "mimeType": "string",
          "partId": "string",
          "parts": [
            {}
          ]
        },
        "raw": "string",
        "sizeEstimate": 0,
        "snippet": "string",
        "threadId": "string"
      }
    }
  ]
}
```

A record of a change to the user's mailbox. Each history change may affect multiple messages in multiple ways.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string(uint64)|false|none|The mailbox sequence ID.|
|labelsAdded|[[HistoryLabelAdded](#schemahistorylabeladded)]|false|none|Labels added to messages in this history record.|
|labelsRemoved|[[HistoryLabelRemoved](#schemahistorylabelremoved)]|false|none|Labels removed from messages in this history record.|
|messages|[[Message](#schemamessage)]|false|none|List of messages changed in this history record. The fields for specific change types, such as `messagesAdded` may duplicate messages in this field. We recommend using the specific change-type fields instead of this.|
|messagesAdded|[[HistoryMessageAdded](#schemahistorymessageadded)]|false|none|Messages added to the mailbox in this history record.|
|messagesDeleted|[[HistoryMessageDeleted](#schemahistorymessagedeleted)]|false|none|Messages deleted (not Trashed) from the mailbox in this history record.|

<h2 id="tocS_HistoryLabelAdded">HistoryLabelAdded</h2>
<!-- backwards compatibility -->
<a id="schemahistorylabeladded"></a>
<a id="schema_HistoryLabelAdded"></a>
<a id="tocShistorylabeladded"></a>
<a id="tocshistorylabeladded"></a>

```json
{
  "labelIds": [
    "string"
  ],
  "message": {
    "historyId": "string",
    "id": "string",
    "internalDate": "string",
    "labelIds": [
      "string"
    ],
    "payload": {
      "body": {
        "attachmentId": "string",
        "data": "string",
        "size": 0
      },
      "filename": "string",
      "headers": [
        {
          "name": "string",
          "value": "string"
        }
      ],
      "mimeType": "string",
      "partId": "string",
      "parts": [
        {}
      ]
    },
    "raw": "string",
    "sizeEstimate": 0,
    "snippet": "string",
    "threadId": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|labelIds|[string]|false|none|Label IDs added to the message.|
|message|[Message](#schemamessage)|false|none|An email message.|

<h2 id="tocS_HistoryLabelRemoved">HistoryLabelRemoved</h2>
<!-- backwards compatibility -->
<a id="schemahistorylabelremoved"></a>
<a id="schema_HistoryLabelRemoved"></a>
<a id="tocShistorylabelremoved"></a>
<a id="tocshistorylabelremoved"></a>

```json
{
  "labelIds": [
    "string"
  ],
  "message": {
    "historyId": "string",
    "id": "string",
    "internalDate": "string",
    "labelIds": [
      "string"
    ],
    "payload": {
      "body": {
        "attachmentId": "string",
        "data": "string",
        "size": 0
      },
      "filename": "string",
      "headers": [
        {
          "name": "string",
          "value": "string"
        }
      ],
      "mimeType": "string",
      "partId": "string",
      "parts": [
        {}
      ]
    },
    "raw": "string",
    "sizeEstimate": 0,
    "snippet": "string",
    "threadId": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|labelIds|[string]|false|none|Label IDs removed from the message.|
|message|[Message](#schemamessage)|false|none|An email message.|

<h2 id="tocS_HistoryMessageAdded">HistoryMessageAdded</h2>
<!-- backwards compatibility -->
<a id="schemahistorymessageadded"></a>
<a id="schema_HistoryMessageAdded"></a>
<a id="tocShistorymessageadded"></a>
<a id="tocshistorymessageadded"></a>

```json
{
  "message": {
    "historyId": "string",
    "id": "string",
    "internalDate": "string",
    "labelIds": [
      "string"
    ],
    "payload": {
      "body": {
        "attachmentId": "string",
        "data": "string",
        "size": 0
      },
      "filename": "string",
      "headers": [
        {
          "name": "string",
          "value": "string"
        }
      ],
      "mimeType": "string",
      "partId": "string",
      "parts": [
        {}
      ]
    },
    "raw": "string",
    "sizeEstimate": 0,
    "snippet": "string",
    "threadId": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|[Message](#schemamessage)|false|none|An email message.|

<h2 id="tocS_HistoryMessageDeleted">HistoryMessageDeleted</h2>
<!-- backwards compatibility -->
<a id="schemahistorymessagedeleted"></a>
<a id="schema_HistoryMessageDeleted"></a>
<a id="tocShistorymessagedeleted"></a>
<a id="tocshistorymessagedeleted"></a>

```json
{
  "message": {
    "historyId": "string",
    "id": "string",
    "internalDate": "string",
    "labelIds": [
      "string"
    ],
    "payload": {
      "body": {
        "attachmentId": "string",
        "data": "string",
        "size": 0
      },
      "filename": "string",
      "headers": [
        {
          "name": "string",
          "value": "string"
        }
      ],
      "mimeType": "string",
      "partId": "string",
      "parts": [
        {}
      ]
    },
    "raw": "string",
    "sizeEstimate": 0,
    "snippet": "string",
    "threadId": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|[Message](#schemamessage)|false|none|An email message.|

<h2 id="tocS_ImapSettings">ImapSettings</h2>
<!-- backwards compatibility -->
<a id="schemaimapsettings"></a>
<a id="schema_ImapSettings"></a>
<a id="tocSimapsettings"></a>
<a id="tocsimapsettings"></a>

```json
{
  "autoExpunge": true,
  "enabled": true,
  "expungeBehavior": "expungeBehaviorUnspecified",
  "maxFolderSize": 0
}
```

IMAP settings for an account.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|autoExpunge|boolean|false|none|If this value is true, Gmail will immediately expunge a message when it is marked as deleted in IMAP. Otherwise, Gmail will wait for an update from the client before expunging messages marked as deleted.|
|enabled|boolean|false|none|Whether IMAP is enabled for the account.|
|expungeBehavior|string|false|none|The action that will be executed on a message when it is marked as deleted and expunged from the last visible IMAP folder.|
|maxFolderSize|integer(int32)|false|none|An optional limit on the number of messages that an IMAP folder may contain. Legal values are 0, 1000, 2000, 5000 or 10000. A value of zero is interpreted to mean that there is no limit.|

#### Enumerated Values

|Property|Value|
|---|---|
|expungeBehavior|expungeBehaviorUnspecified|
|expungeBehavior|archive|
|expungeBehavior|trash|
|expungeBehavior|deleteForever|

<h2 id="tocS_KaclsKeyMetadata">KaclsKeyMetadata</h2>
<!-- backwards compatibility -->
<a id="schemakaclskeymetadata"></a>
<a id="schema_KaclsKeyMetadata"></a>
<a id="tocSkaclskeymetadata"></a>
<a id="tocskaclskeymetadata"></a>

```json
{
  "kaclsData": "string",
  "kaclsUri": "string"
}
```

Metadata for private keys managed by an external key access control list service. For details about managing key access, see [Google Workspace CSE API Reference](https://developers.google.com/workspace/cse/reference).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|kaclsData|string|false|none|Opaque data generated and used by the key access control list service. Maximum size: 8 KiB.|
|kaclsUri|string|false|none|The URI of the key access control list service that manages the private key.|

<h2 id="tocS_Label">Label</h2>
<!-- backwards compatibility -->
<a id="schemalabel"></a>
<a id="schema_Label"></a>
<a id="tocSlabel"></a>
<a id="tocslabel"></a>

```json
{
  "color": {
    "backgroundColor": "string",
    "textColor": "string"
  },
  "id": "string",
  "labelListVisibility": "labelShow",
  "messageListVisibility": "show",
  "messagesTotal": 0,
  "messagesUnread": 0,
  "name": "string",
  "threadsTotal": 0,
  "threadsUnread": 0,
  "type": "system"
}
```

Labels are used to categorize messages and threads within the user's mailbox. The maximum number of labels supported for a user's mailbox is 10,000.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|color|[LabelColor](#schemalabelcolor)|false|none|The color to assign to the label. Color is only available for labels that have their `type` set to `user`.|
|id|string|false|none|The immutable ID of the label.|
|labelListVisibility|string|false|none|The visibility of the label in the label list in the Gmail web interface.|
|messageListVisibility|string|false|none|The visibility of messages with this label in the message list in the Gmail web interface.|
|messagesTotal|integer(int32)|false|none|The total number of messages with the label.|
|messagesUnread|integer(int32)|false|none|The number of unread messages with the label.|
|name|string|false|none|The display name of the label.|
|threadsTotal|integer(int32)|false|none|The total number of threads with the label.|
|threadsUnread|integer(int32)|false|none|The number of unread threads with the label.|
|type|string|false|none|The owner type for the label. User labels are created by the user and can be modified and deleted by the user and can be applied to any message or thread. System labels are internally created and cannot be added, modified, or deleted. System labels may be able to be applied to or removed from messages and threads under some circumstances but this is not guaranteed. For example, users can apply and remove the `INBOX` and `UNREAD` labels from messages and threads, but cannot apply or remove the `DRAFTS` or `SENT` labels from messages or threads.|

#### Enumerated Values

|Property|Value|
|---|---|
|labelListVisibility|labelShow|
|labelListVisibility|labelShowIfUnread|
|labelListVisibility|labelHide|
|messageListVisibility|show|
|messageListVisibility|hide|
|type|system|
|type|user|

<h2 id="tocS_LabelColor">LabelColor</h2>
<!-- backwards compatibility -->
<a id="schemalabelcolor"></a>
<a id="schema_LabelColor"></a>
<a id="tocSlabelcolor"></a>
<a id="tocslabelcolor"></a>

```json
{
  "backgroundColor": "string",
  "textColor": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|backgroundColor|string|false|none|The background color represented as hex string #RRGGBB (ex #000000). This field is required in order to set the color of a label. Only the following predefined set of color values are allowed: \#000000, #434343, #666666, #999999, #cccccc, #efefef, #f3f3f3, #ffffff, \#fb4c2f, #ffad47, #fad165, #16a766, #43d692, #4a86e8, #a479e2, #f691b3, \#f6c5be, #ffe6c7, #fef1d1, #b9e4d0, #c6f3de, #c9daf8, #e4d7f5, #fcdee8, \#efa093, #ffd6a2, #fce8b3, #89d3b2, #a0eac9, #a4c2f4, #d0bcf1, #fbc8d9, \#e66550, #ffbc6b, #fcda83, #44b984, #68dfa9, #6d9eeb, #b694e8, #f7a7c0, \#cc3a21, #eaa041, #f2c960, #149e60, #3dc789, #3c78d8, #8e63ce, #e07798, \#ac2b16, #cf8933, #d5ae49, #0b804b, #2a9c68, #285bac, #653e9b, #b65775, \#822111, #a46a21, #aa8831, #076239, #1a764d, #1c4587, #41236d, #83334c \#464646, #e7e7e7, #0d3472, #b6cff5, #0d3b44, #98d7e4, #3d188e, #e3d7ff, \#711a36, #fbd3e0, #8a1c0a, #f2b2a8, #7a2e0b, #ffc8af, #7a4706, #ffdeb5, \#594c05, #fbe983, #684e07, #fdedc1, #0b4f30, #b3efd3, #04502e, #a2dcc1, \#c2c2c2, #4986e7, #2da2bb, #b99aff, #994a64, #f691b2, #ff7537, #ffad46, \#662e37, #ebdbde, #cca6ac, #094228, #42d692, #16a765|
|textColor|string|false|none|The text color of the label, represented as hex string. This field is required in order to set the color of a label. Only the following predefined set of color values are allowed: \#000000, #434343, #666666, #999999, #cccccc, #efefef, #f3f3f3, #ffffff, \#fb4c2f, #ffad47, #fad165, #16a766, #43d692, #4a86e8, #a479e2, #f691b3, \#f6c5be, #ffe6c7, #fef1d1, #b9e4d0, #c6f3de, #c9daf8, #e4d7f5, #fcdee8, \#efa093, #ffd6a2, #fce8b3, #89d3b2, #a0eac9, #a4c2f4, #d0bcf1, #fbc8d9, \#e66550, #ffbc6b, #fcda83, #44b984, #68dfa9, #6d9eeb, #b694e8, #f7a7c0, \#cc3a21, #eaa041, #f2c960, #149e60, #3dc789, #3c78d8, #8e63ce, #e07798, \#ac2b16, #cf8933, #d5ae49, #0b804b, #2a9c68, #285bac, #653e9b, #b65775, \#822111, #a46a21, #aa8831, #076239, #1a764d, #1c4587, #41236d, #83334c \#464646, #e7e7e7, #0d3472, #b6cff5, #0d3b44, #98d7e4, #3d188e, #e3d7ff, \#711a36, #fbd3e0, #8a1c0a, #f2b2a8, #7a2e0b, #ffc8af, #7a4706, #ffdeb5, \#594c05, #fbe983, #684e07, #fdedc1, #0b4f30, #b3efd3, #04502e, #a2dcc1, \#c2c2c2, #4986e7, #2da2bb, #b99aff, #994a64, #f691b2, #ff7537, #ffad46, \#662e37, #ebdbde, #cca6ac, #094228, #42d692, #16a765|

<h2 id="tocS_LanguageSettings">LanguageSettings</h2>
<!-- backwards compatibility -->
<a id="schemalanguagesettings"></a>
<a id="schema_LanguageSettings"></a>
<a id="tocSlanguagesettings"></a>
<a id="tocslanguagesettings"></a>

```json
{
  "displayLanguage": "string"
}
```

Language settings for an account. These settings correspond to the "Language settings" feature in the web interface.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|displayLanguage|string|false|none|The language to display Gmail in, formatted as an RFC 3066 Language Tag (for example `en-GB`, `fr` or `ja` for British English, French, or Japanese respectively). The set of languages supported by Gmail evolves over time, so please refer to the "Language" dropdown in the Gmail settings for all available options, as described in the language settings help article. A table of sample values is also provided in the Managing Language Settings guide Not all Gmail clients can display the same set of languages. In the case that a user's display language is not available for use on a particular client, said client automatically chooses to display in the closest supported variant (or a reasonable default).|

<h2 id="tocS_ListCseIdentitiesResponse">ListCseIdentitiesResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistcseidentitiesresponse"></a>
<a id="schema_ListCseIdentitiesResponse"></a>
<a id="tocSlistcseidentitiesresponse"></a>
<a id="tocslistcseidentitiesresponse"></a>

```json
{
  "cseIdentities": [
    {
      "emailAddress": "string",
      "primaryKeyPairId": "string",
      "signAndEncryptKeyPairs": {
        "encryptionKeyPairId": "string",
        "signingKeyPairId": "string"
      }
    }
  ],
  "nextPageToken": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cseIdentities|[[CseIdentity](#schemacseidentity)]|false|none|One page of the list of CSE identities configured for the user.|
|nextPageToken|string|false|none|Pagination token to be passed to a subsequent ListCseIdentities call in order to retrieve the next page of identities. If this value is not returned or is the empty string, then no further pages remain.|

<h2 id="tocS_ListCseKeyPairsResponse">ListCseKeyPairsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistcsekeypairsresponse"></a>
<a id="schema_ListCseKeyPairsResponse"></a>
<a id="tocSlistcsekeypairsresponse"></a>
<a id="tocslistcsekeypairsresponse"></a>

```json
{
  "cseKeyPairs": [
    {
      "disableTime": "string",
      "enablementState": "stateUnspecified",
      "keyPairId": "string",
      "pem": "string",
      "pkcs7": "string",
      "privateKeyMetadata": [
        {
          "hardwareKeyMetadata": {
            "description": "string"
          },
          "kaclsKeyMetadata": {
            "kaclsData": "string",
            "kaclsUri": "string"
          },
          "privateKeyMetadataId": "string"
        }
      ],
      "subjectEmailAddresses": [
        "string"
      ]
    }
  ],
  "nextPageToken": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cseKeyPairs|[[CseKeyPair](#schemacsekeypair)]|false|none|One page of the list of CSE key pairs installed for the user.|
|nextPageToken|string|false|none|Pagination token to be passed to a subsequent ListCseKeyPairs call in order to retrieve the next page of key pairs. If this value is not returned, then no further pages remain.|

<h2 id="tocS_ListDelegatesResponse">ListDelegatesResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistdelegatesresponse"></a>
<a id="schema_ListDelegatesResponse"></a>
<a id="tocSlistdelegatesresponse"></a>
<a id="tocslistdelegatesresponse"></a>

```json
{
  "delegates": [
    {
      "delegateEmail": "string",
      "verificationStatus": "verificationStatusUnspecified"
    }
  ]
}
```

Response for the ListDelegates method.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|delegates|[[Delegate](#schemadelegate)]|false|none|List of the user's delegates (with any verification status). If an account doesn't have delegates, this field doesn't appear.|

<h2 id="tocS_ListDraftsResponse">ListDraftsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistdraftsresponse"></a>
<a id="schema_ListDraftsResponse"></a>
<a id="tocSlistdraftsresponse"></a>
<a id="tocslistdraftsresponse"></a>

```json
{
  "drafts": [
    {
      "id": "string",
      "message": {
        "historyId": "string",
        "id": "string",
        "internalDate": "string",
        "labelIds": [
          "string"
        ],
        "payload": {
          "body": {
            "attachmentId": "string",
            "data": "string",
            "size": 0
          },
          "filename": "string",
          "headers": [
            {
              "name": "string",
              "value": "string"
            }
          ],
          "mimeType": "string",
          "partId": "string",
          "parts": [
            {}
          ]
        },
        "raw": "string",
        "sizeEstimate": 0,
        "snippet": "string",
        "threadId": "string"
      }
    }
  ],
  "nextPageToken": "string",
  "resultSizeEstimate": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|drafts|[[Draft](#schemadraft)]|false|none|List of drafts. Note that the `Message` property in each `Draft` resource only contains an `id` and a `threadId`. The messages.get method can fetch additional message details.|
|nextPageToken|string|false|none|Token to retrieve the next page of results in the list.|
|resultSizeEstimate|integer(uint32)|false|none|Estimated total number of results.|

<h2 id="tocS_ListFiltersResponse">ListFiltersResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistfiltersresponse"></a>
<a id="schema_ListFiltersResponse"></a>
<a id="tocSlistfiltersresponse"></a>
<a id="tocslistfiltersresponse"></a>

```json
{
  "filter": [
    {
      "action": {
        "addLabelIds": [
          "string"
        ],
        "forward": "string",
        "removeLabelIds": [
          "string"
        ]
      },
      "criteria": {
        "excludeChats": true,
        "from": "string",
        "hasAttachment": true,
        "negatedQuery": "string",
        "query": "string",
        "size": 0,
        "sizeComparison": "unspecified",
        "subject": "string",
        "to": "string"
      },
      "id": "string"
    }
  ]
}
```

Response for the ListFilters method.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|filter|[[Filter](#schemafilter)]|false|none|List of a user's filters.|

<h2 id="tocS_ListForwardingAddressesResponse">ListForwardingAddressesResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistforwardingaddressesresponse"></a>
<a id="schema_ListForwardingAddressesResponse"></a>
<a id="tocSlistforwardingaddressesresponse"></a>
<a id="tocslistforwardingaddressesresponse"></a>

```json
{
  "forwardingAddresses": [
    {
      "forwardingEmail": "string",
      "verificationStatus": "verificationStatusUnspecified"
    }
  ]
}
```

Response for the ListForwardingAddresses method.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|forwardingAddresses|[[ForwardingAddress](#schemaforwardingaddress)]|false|none|List of addresses that may be used for forwarding.|

<h2 id="tocS_ListHistoryResponse">ListHistoryResponse</h2>
<!-- backwards compatibility -->
<a id="schemalisthistoryresponse"></a>
<a id="schema_ListHistoryResponse"></a>
<a id="tocSlisthistoryresponse"></a>
<a id="tocslisthistoryresponse"></a>

```json
{
  "history": [
    {
      "id": "string",
      "labelsAdded": [
        {
          "labelIds": [
            "string"
          ],
          "message": {
            "historyId": "string",
            "id": "string",
            "internalDate": "string",
            "labelIds": [
              "string"
            ],
            "payload": {
              "body": {
                "attachmentId": "string",
                "data": "string",
                "size": 0
              },
              "filename": "string",
              "headers": [
                {
                  "name": "string",
                  "value": "string"
                }
              ],
              "mimeType": "string",
              "partId": "string",
              "parts": [
                {}
              ]
            },
            "raw": "string",
            "sizeEstimate": 0,
            "snippet": "string",
            "threadId": "string"
          }
        }
      ],
      "labelsRemoved": [
        {
          "labelIds": [
            "string"
          ],
          "message": {
            "historyId": "string",
            "id": "string",
            "internalDate": "string",
            "labelIds": [
              "string"
            ],
            "payload": {
              "body": {
                "attachmentId": "string",
                "data": "string",
                "size": 0
              },
              "filename": "string",
              "headers": [
                {
                  "name": "string",
                  "value": "string"
                }
              ],
              "mimeType": "string",
              "partId": "string",
              "parts": [
                {}
              ]
            },
            "raw": "string",
            "sizeEstimate": 0,
            "snippet": "string",
            "threadId": "string"
          }
        }
      ],
      "messages": [
        {
          "historyId": "string",
          "id": "string",
          "internalDate": "string",
          "labelIds": [
            "string"
          ],
          "payload": {
            "body": {
              "attachmentId": "string",
              "data": "string",
              "size": 0
            },
            "filename": "string",
            "headers": [
              {
                "name": "string",
                "value": "string"
              }
            ],
            "mimeType": "string",
            "partId": "string",
            "parts": [
              {}
            ]
          },
          "raw": "string",
          "sizeEstimate": 0,
          "snippet": "string",
          "threadId": "string"
        }
      ],
      "messagesAdded": [
        {
          "message": {
            "historyId": "string",
            "id": "string",
            "internalDate": "string",
            "labelIds": [
              "string"
            ],
            "payload": {
              "body": {
                "attachmentId": "string",
                "data": "string",
                "size": 0
              },
              "filename": "string",
              "headers": [
                {
                  "name": "string",
                  "value": "string"
                }
              ],
              "mimeType": "string",
              "partId": "string",
              "parts": [
                {}
              ]
            },
            "raw": "string",
            "sizeEstimate": 0,
            "snippet": "string",
            "threadId": "string"
          }
        }
      ],
      "messagesDeleted": [
        {
          "message": {
            "historyId": "string",
            "id": "string",
            "internalDate": "string",
            "labelIds": [
              "string"
            ],
            "payload": {
              "body": {
                "attachmentId": "string",
                "data": "string",
                "size": 0
              },
              "filename": "string",
              "headers": [
                {
                  "name": "string",
                  "value": "string"
                }
              ],
              "mimeType": "string",
              "partId": "string",
              "parts": [
                {}
              ]
            },
            "raw": "string",
            "sizeEstimate": 0,
            "snippet": "string",
            "threadId": "string"
          }
        }
      ]
    }
  ],
  "historyId": "string",
  "nextPageToken": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|history|[[History](#schemahistory)]|false|none|List of history records. Any `messages` contained in the response will typically only have `id` and `threadId` fields populated.|
|historyId|string(uint64)|false|none|The ID of the mailbox's current history record.|
|nextPageToken|string|false|none|Page token to retrieve the next page of results in the list.|

<h2 id="tocS_ListLabelsResponse">ListLabelsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistlabelsresponse"></a>
<a id="schema_ListLabelsResponse"></a>
<a id="tocSlistlabelsresponse"></a>
<a id="tocslistlabelsresponse"></a>

```json
{
  "labels": [
    {
      "color": {
        "backgroundColor": "string",
        "textColor": "string"
      },
      "id": "string",
      "labelListVisibility": "labelShow",
      "messageListVisibility": "show",
      "messagesTotal": 0,
      "messagesUnread": 0,
      "name": "string",
      "threadsTotal": 0,
      "threadsUnread": 0,
      "type": "system"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|labels|[[Label](#schemalabel)]|false|none|List of labels. Note that each label resource only contains an `id`, `name`, `messageListVisibility`, `labelListVisibility`, and `type`. The labels.get method can fetch additional label details.|

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
      "historyId": "string",
      "id": "string",
      "internalDate": "string",
      "labelIds": [
        "string"
      ],
      "payload": {
        "body": {
          "attachmentId": "string",
          "data": "string",
          "size": 0
        },
        "filename": "string",
        "headers": [
          {
            "name": "string",
            "value": "string"
          }
        ],
        "mimeType": "string",
        "partId": "string",
        "parts": [
          {}
        ]
      },
      "raw": "string",
      "sizeEstimate": 0,
      "snippet": "string",
      "threadId": "string"
    }
  ],
  "nextPageToken": "string",
  "resultSizeEstimate": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|messages|[[Message](#schemamessage)]|false|none|List of messages. Note that each message resource contains only an `id` and a `threadId`. Additional message details can be fetched using the messages.get method.|
|nextPageToken|string|false|none|Token to retrieve the next page of results in the list.|
|resultSizeEstimate|integer(uint32)|false|none|Estimated total number of results.|

<h2 id="tocS_ListSendAsResponse">ListSendAsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistsendasresponse"></a>
<a id="schema_ListSendAsResponse"></a>
<a id="tocSlistsendasresponse"></a>
<a id="tocslistsendasresponse"></a>

```json
{
  "sendAs": [
    {
      "displayName": "string",
      "isDefault": true,
      "isPrimary": true,
      "replyToAddress": "string",
      "sendAsEmail": "string",
      "signature": "string",
      "smtpMsa": {
        "host": "string",
        "password": "string",
        "port": 0,
        "securityMode": "securityModeUnspecified",
        "username": "string"
      },
      "treatAsAlias": true,
      "verificationStatus": "verificationStatusUnspecified"
    }
  ]
}
```

Response for the ListSendAs method.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|sendAs|[[SendAs](#schemasendas)]|false|none|List of send-as aliases.|

<h2 id="tocS_ListSmimeInfoResponse">ListSmimeInfoResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistsmimeinforesponse"></a>
<a id="schema_ListSmimeInfoResponse"></a>
<a id="tocSlistsmimeinforesponse"></a>
<a id="tocslistsmimeinforesponse"></a>

```json
{
  "smimeInfo": [
    {
      "encryptedKeyPassword": "string",
      "expiration": "string",
      "id": "string",
      "isDefault": true,
      "issuerCn": "string",
      "pem": "string",
      "pkcs12": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|smimeInfo|[[SmimeInfo](#schemasmimeinfo)]|false|none|List of SmimeInfo.|

<h2 id="tocS_ListThreadsResponse">ListThreadsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistthreadsresponse"></a>
<a id="schema_ListThreadsResponse"></a>
<a id="tocSlistthreadsresponse"></a>
<a id="tocslistthreadsresponse"></a>

```json
{
  "nextPageToken": "string",
  "resultSizeEstimate": 0,
  "threads": [
    {
      "historyId": "string",
      "id": "string",
      "messages": [
        {
          "historyId": "string",
          "id": "string",
          "internalDate": "string",
          "labelIds": [
            "string"
          ],
          "payload": {
            "body": {
              "attachmentId": "string",
              "data": "string",
              "size": 0
            },
            "filename": "string",
            "headers": [
              {
                "name": "string",
                "value": "string"
              }
            ],
            "mimeType": "string",
            "partId": "string",
            "parts": [
              {}
            ]
          },
          "raw": "string",
          "sizeEstimate": 0,
          "snippet": "string",
          "threadId": "string"
        }
      ],
      "snippet": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextPageToken|string|false|none|Page token to retrieve the next page of results in the list.|
|resultSizeEstimate|integer(uint32)|false|none|Estimated total number of results.|
|threads|[[Thread](#schemathread)]|false|none|List of threads. Note that each thread resource does not contain a list of `messages`. The list of `messages` for a given thread can be fetched using the threads.get method.|

<h2 id="tocS_Message">Message</h2>
<!-- backwards compatibility -->
<a id="schemamessage"></a>
<a id="schema_Message"></a>
<a id="tocSmessage"></a>
<a id="tocsmessage"></a>

```json
{
  "historyId": "string",
  "id": "string",
  "internalDate": "string",
  "labelIds": [
    "string"
  ],
  "payload": {
    "body": {
      "attachmentId": "string",
      "data": "string",
      "size": 0
    },
    "filename": "string",
    "headers": [
      {
        "name": "string",
        "value": "string"
      }
    ],
    "mimeType": "string",
    "partId": "string",
    "parts": [
      {}
    ]
  },
  "raw": "string",
  "sizeEstimate": 0,
  "snippet": "string",
  "threadId": "string"
}
```

An email message.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|historyId|string(uint64)|false|none|The ID of the last history record that modified this message.|
|id|string|false|none|The immutable ID of the message.|
|internalDate|string(int64)|false|none|The internal message creation timestamp (epoch ms), which determines ordering in the inbox. For normal SMTP-received email, this represents the time the message was originally accepted by Google, which is more reliable than the `Date` header. However, for API-migrated mail, it can be configured by client to be based on the `Date` header.|
|labelIds|[string]|false|none|List of IDs of labels applied to this message.|
|payload|[MessagePart](#schemamessagepart)|false|none|The parsed email structure in the message parts.|
|raw|string(byte)|false|none|The entire email message in an RFC 2822 formatted and base64url encoded string. Returned in `messages.get` and `drafts.get` responses when the `format=RAW` parameter is supplied.|
|sizeEstimate|integer(int32)|false|none|Estimated size in bytes of the message.|
|snippet|string|false|none|A short part of the message text.|
|threadId|string|false|none|The ID of the thread the message belongs to. To add a message or draft to a thread, the following criteria must be met: 1. The requested `threadId` must be specified on the `Message` or `Draft.Message` you supply with your request. 2. The `References` and `In-Reply-To` headers must be set in compliance with the [RFC 2822](https://tools.ietf.org/html/rfc2822) standard. 3. The `Subject` headers must match. |

<h2 id="tocS_MessagePart">MessagePart</h2>
<!-- backwards compatibility -->
<a id="schemamessagepart"></a>
<a id="schema_MessagePart"></a>
<a id="tocSmessagepart"></a>
<a id="tocsmessagepart"></a>

```json
{
  "body": {
    "attachmentId": "string",
    "data": "string",
    "size": 0
  },
  "filename": "string",
  "headers": [
    {
      "name": "string",
      "value": "string"
    }
  ],
  "mimeType": "string",
  "partId": "string",
  "parts": [
    {
      "body": {
        "attachmentId": "string",
        "data": "string",
        "size": 0
      },
      "filename": "string",
      "headers": [
        {
          "name": "string",
          "value": "string"
        }
      ],
      "mimeType": "string",
      "partId": "string",
      "parts": [
        {}
      ]
    }
  ]
}
```

A single MIME message part.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|body|[MessagePartBody](#schemamessagepartbody)|false|none|The message part body for this part, which may be empty for container MIME message parts.|
|filename|string|false|none|The filename of the attachment. Only present if this message part represents an attachment.|
|headers|[[MessagePartHeader](#schemamessagepartheader)]|false|none|List of headers on this message part. For the top-level message part, representing the entire message payload, it will contain the standard RFC 2822 email headers such as `To`, `From`, and `Subject`.|
|mimeType|string|false|none|The MIME type of the message part.|
|partId|string|false|none|The immutable ID of the message part.|
|parts|[[MessagePart](#schemamessagepart)]|false|none|The child MIME message parts of this part. This only applies to container MIME message parts, for example `multipart/*`. For non- container MIME message part types, such as `text/plain`, this field is empty. For more information, see RFC 1521.|

<h2 id="tocS_MessagePartBody">MessagePartBody</h2>
<!-- backwards compatibility -->
<a id="schemamessagepartbody"></a>
<a id="schema_MessagePartBody"></a>
<a id="tocSmessagepartbody"></a>
<a id="tocsmessagepartbody"></a>

```json
{
  "attachmentId": "string",
  "data": "string",
  "size": 0
}
```

The body of a single MIME message part.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|attachmentId|string|false|none|When present, contains the ID of an external attachment that can be retrieved in a separate `messages.attachments.get` request. When not present, the entire content of the message part body is contained in the data field.|
|data|string(byte)|false|none|The body data of a MIME message part as a base64url encoded string. May be empty for MIME container types that have no message body or when the body data is sent as a separate attachment. An attachment ID is present if the body data is contained in a separate attachment.|
|size|integer(int32)|false|none|Number of bytes for the message part data (encoding notwithstanding).|

<h2 id="tocS_MessagePartHeader">MessagePartHeader</h2>
<!-- backwards compatibility -->
<a id="schemamessagepartheader"></a>
<a id="schema_MessagePartHeader"></a>
<a id="tocSmessagepartheader"></a>
<a id="tocsmessagepartheader"></a>

```json
{
  "name": "string",
  "value": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|The name of the header before the `:` separator. For example, `To`.|
|value|string|false|none|The value of the header after the `:` separator. For example, `someuser@example.com`.|

<h2 id="tocS_ModifyMessageRequest">ModifyMessageRequest</h2>
<!-- backwards compatibility -->
<a id="schemamodifymessagerequest"></a>
<a id="schema_ModifyMessageRequest"></a>
<a id="tocSmodifymessagerequest"></a>
<a id="tocsmodifymessagerequest"></a>

```json
{
  "addLabelIds": [
    "string"
  ],
  "removeLabelIds": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|addLabelIds|[string]|false|none|A list of IDs of labels to add to this message. You can add up to 100 labels with each update.|
|removeLabelIds|[string]|false|none|A list IDs of labels to remove from this message. You can remove up to 100 labels with each update.|

<h2 id="tocS_ModifyThreadRequest">ModifyThreadRequest</h2>
<!-- backwards compatibility -->
<a id="schemamodifythreadrequest"></a>
<a id="schema_ModifyThreadRequest"></a>
<a id="tocSmodifythreadrequest"></a>
<a id="tocsmodifythreadrequest"></a>

```json
{
  "addLabelIds": [
    "string"
  ],
  "removeLabelIds": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|addLabelIds|[string]|false|none|A list of IDs of labels to add to this thread. You can add up to 100 labels with each update.|
|removeLabelIds|[string]|false|none|A list of IDs of labels to remove from this thread. You can remove up to 100 labels with each update.|

<h2 id="tocS_ObliterateCseKeyPairRequest">ObliterateCseKeyPairRequest</h2>
<!-- backwards compatibility -->
<a id="schemaobliteratecsekeypairrequest"></a>
<a id="schema_ObliterateCseKeyPairRequest"></a>
<a id="tocSobliteratecsekeypairrequest"></a>
<a id="tocsobliteratecsekeypairrequest"></a>

```json
{}
```

Request to obliterate a CSE key pair.

<h2 id="tocS_PopSettings">PopSettings</h2>
<!-- backwards compatibility -->
<a id="schemapopsettings"></a>
<a id="schema_PopSettings"></a>
<a id="tocSpopsettings"></a>
<a id="tocspopsettings"></a>

```json
{
  "accessWindow": "accessWindowUnspecified",
  "disposition": "dispositionUnspecified"
}
```

POP settings for an account.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accessWindow|string|false|none|The range of messages which are accessible via POP.|
|disposition|string|false|none|The action that will be executed on a message after it has been fetched via POP.|

#### Enumerated Values

|Property|Value|
|---|---|
|accessWindow|accessWindowUnspecified|
|accessWindow|disabled|
|accessWindow|fromNowOn|
|accessWindow|allMail|
|disposition|dispositionUnspecified|
|disposition|leaveInInbox|
|disposition|archive|
|disposition|trash|
|disposition|markRead|

<h2 id="tocS_Profile">Profile</h2>
<!-- backwards compatibility -->
<a id="schemaprofile"></a>
<a id="schema_Profile"></a>
<a id="tocSprofile"></a>
<a id="tocsprofile"></a>

```json
{
  "emailAddress": "string",
  "historyId": "string",
  "messagesTotal": 0,
  "threadsTotal": 0
}
```

Profile for a Gmail user.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|emailAddress|string|false|none|The user's email address.|
|historyId|string(uint64)|false|none|The ID of the mailbox's current history record.|
|messagesTotal|integer(int32)|false|none|The total number of messages in the mailbox.|
|threadsTotal|integer(int32)|false|none|The total number of threads in the mailbox.|

<h2 id="tocS_SendAs">SendAs</h2>
<!-- backwards compatibility -->
<a id="schemasendas"></a>
<a id="schema_SendAs"></a>
<a id="tocSsendas"></a>
<a id="tocssendas"></a>

```json
{
  "displayName": "string",
  "isDefault": true,
  "isPrimary": true,
  "replyToAddress": "string",
  "sendAsEmail": "string",
  "signature": "string",
  "smtpMsa": {
    "host": "string",
    "password": "string",
    "port": 0,
    "securityMode": "securityModeUnspecified",
    "username": "string"
  },
  "treatAsAlias": true,
  "verificationStatus": "verificationStatusUnspecified"
}
```

Settings associated with a send-as alias, which can be either the primary login address associated with the account or a custom "from" address. Send-as aliases correspond to the "Send Mail As" feature in the web interface.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|displayName|string|false|none|A name that appears in the "From:" header for mail sent using this alias. For custom "from" addresses, when this is empty, Gmail will populate the "From:" header with the name that is used for the primary address associated with the account. If the admin has disabled the ability for users to update their name format, requests to update this field for the primary login will silently fail.|
|isDefault|boolean|false|none|Whether this address is selected as the default "From:" address in situations such as composing a new message or sending a vacation auto-reply. Every Gmail account has exactly one default send-as address, so the only legal value that clients may write to this field is `true`. Changing this from `false` to `true` for an address will result in this field becoming `false` for the other previous default address.|
|isPrimary|boolean|false|none|Whether this address is the primary address used to login to the account. Every Gmail account has exactly one primary address, and it cannot be deleted from the collection of send-as aliases. This field is read-only.|
|replyToAddress|string|false|none|An optional email address that is included in a "Reply-To:" header for mail sent using this alias. If this is empty, Gmail will not generate a "Reply-To:" header.|
|sendAsEmail|string|false|none|The email address that appears in the "From:" header for mail sent using this alias. This is read-only for all operations except create.|
|signature|string|false|none|An optional HTML signature that is included in messages composed with this alias in the Gmail web UI. This signature is added to new emails only.|
|smtpMsa|[SmtpMsa](#schemasmtpmsa)|false|none|An optional SMTP service that will be used as an outbound relay for mail sent using this alias. If this is empty, outbound mail will be sent directly from Gmail's servers to the destination SMTP service. This setting only applies to custom "from" aliases.|
|treatAsAlias|boolean|false|none|Whether Gmail should treat this address as an alias for the user's primary email address. This setting only applies to custom "from" aliases.|
|verificationStatus|string|false|none|Indicates whether this address has been verified for use as a send-as alias. Read-only. This setting only applies to custom "from" aliases.|

#### Enumerated Values

|Property|Value|
|---|---|
|verificationStatus|verificationStatusUnspecified|
|verificationStatus|accepted|
|verificationStatus|pending|

<h2 id="tocS_SignAndEncryptKeyPairs">SignAndEncryptKeyPairs</h2>
<!-- backwards compatibility -->
<a id="schemasignandencryptkeypairs"></a>
<a id="schema_SignAndEncryptKeyPairs"></a>
<a id="tocSsignandencryptkeypairs"></a>
<a id="tocssignandencryptkeypairs"></a>

```json
{
  "encryptionKeyPairId": "string",
  "signingKeyPairId": "string"
}
```

The configuration of a CSE identity that uses different key pairs for signing and encryption.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|encryptionKeyPairId|string|false|none|The ID of the CseKeyPair that encrypts signed outgoing mail.|
|signingKeyPairId|string|false|none|The ID of the CseKeyPair that signs outgoing mail.|

<h2 id="tocS_SmimeInfo">SmimeInfo</h2>
<!-- backwards compatibility -->
<a id="schemasmimeinfo"></a>
<a id="schema_SmimeInfo"></a>
<a id="tocSsmimeinfo"></a>
<a id="tocssmimeinfo"></a>

```json
{
  "encryptedKeyPassword": "string",
  "expiration": "string",
  "id": "string",
  "isDefault": true,
  "issuerCn": "string",
  "pem": "string",
  "pkcs12": "string"
}
```

An S/MIME email config.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|encryptedKeyPassword|string|false|none|Encrypted key password, when key is encrypted.|
|expiration|string(int64)|false|none|When the certificate expires (in milliseconds since epoch).|
|id|string|false|none|The immutable ID for the SmimeInfo.|
|isDefault|boolean|false|none|Whether this SmimeInfo is the default one for this user's send-as address.|
|issuerCn|string|false|none|The S/MIME certificate issuer's common name.|
|pem|string|false|none|PEM formatted X509 concatenated certificate string (standard base64 encoding). Format used for returning key, which includes public key as well as certificate chain (not private key).|
|pkcs12|string(byte)|false|none|PKCS#12 format containing a single private/public key pair and certificate chain. This format is only accepted from client for creating a new SmimeInfo and is never returned, because the private key is not intended to be exported. PKCS#12 may be encrypted, in which case encryptedKeyPassword should be set appropriately.|

<h2 id="tocS_SmtpMsa">SmtpMsa</h2>
<!-- backwards compatibility -->
<a id="schemasmtpmsa"></a>
<a id="schema_SmtpMsa"></a>
<a id="tocSsmtpmsa"></a>
<a id="tocssmtpmsa"></a>

```json
{
  "host": "string",
  "password": "string",
  "port": 0,
  "securityMode": "securityModeUnspecified",
  "username": "string"
}
```

Configuration for communication with an SMTP service.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|host|string|false|none|The hostname of the SMTP service. Required.|
|password|string|false|none|The password that will be used for authentication with the SMTP service. This is a write-only field that can be specified in requests to create or update SendAs settings; it is never populated in responses.|
|port|integer(int32)|false|none|The port of the SMTP service. Required.|
|securityMode|string|false|none|The protocol that will be used to secure communication with the SMTP service. Required.|
|username|string|false|none|The username that will be used for authentication with the SMTP service. This is a write-only field that can be specified in requests to create or update SendAs settings; it is never populated in responses.|

#### Enumerated Values

|Property|Value|
|---|---|
|securityMode|securityModeUnspecified|
|securityMode|none|
|securityMode|ssl|
|securityMode|starttls|

<h2 id="tocS_Thread">Thread</h2>
<!-- backwards compatibility -->
<a id="schemathread"></a>
<a id="schema_Thread"></a>
<a id="tocSthread"></a>
<a id="tocsthread"></a>

```json
{
  "historyId": "string",
  "id": "string",
  "messages": [
    {
      "historyId": "string",
      "id": "string",
      "internalDate": "string",
      "labelIds": [
        "string"
      ],
      "payload": {
        "body": {
          "attachmentId": "string",
          "data": "string",
          "size": 0
        },
        "filename": "string",
        "headers": [
          {
            "name": "string",
            "value": "string"
          }
        ],
        "mimeType": "string",
        "partId": "string",
        "parts": [
          {}
        ]
      },
      "raw": "string",
      "sizeEstimate": 0,
      "snippet": "string",
      "threadId": "string"
    }
  ],
  "snippet": "string"
}
```

A collection of messages representing a conversation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|historyId|string(uint64)|false|none|The ID of the last history record that modified this thread.|
|id|string|false|none|The unique ID of the thread.|
|messages|[[Message](#schemamessage)]|false|none|The list of messages in the thread.|
|snippet|string|false|none|A short part of the message text.|

<h2 id="tocS_VacationSettings">VacationSettings</h2>
<!-- backwards compatibility -->
<a id="schemavacationsettings"></a>
<a id="schema_VacationSettings"></a>
<a id="tocSvacationsettings"></a>
<a id="tocsvacationsettings"></a>

```json
{
  "enableAutoReply": true,
  "endTime": "string",
  "responseBodyHtml": "string",
  "responseBodyPlainText": "string",
  "responseSubject": "string",
  "restrictToContacts": true,
  "restrictToDomain": true,
  "startTime": "string"
}
```

Vacation auto-reply settings for an account. These settings correspond to the "Vacation responder" feature in the web interface.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|enableAutoReply|boolean|false|none|Flag that controls whether Gmail automatically replies to messages.|
|endTime|string(int64)|false|none|An optional end time for sending auto-replies (epoch ms). When this is specified, Gmail will automatically reply only to messages that it receives before the end time. If both `startTime` and `endTime` are specified, `startTime` must precede `endTime`.|
|responseBodyHtml|string|false|none|Response body in HTML format. Gmail will sanitize the HTML before storing it. If both `response_body_plain_text` and `response_body_html` are specified, `response_body_html` will be used.|
|responseBodyPlainText|string|false|none|Response body in plain text format. If both `response_body_plain_text` and `response_body_html` are specified, `response_body_html` will be used.|
|responseSubject|string|false|none|Optional text to prepend to the subject line in vacation responses. In order to enable auto-replies, either the response subject or the response body must be nonempty.|
|restrictToContacts|boolean|false|none|Flag that determines whether responses are sent to recipients who are not in the user's list of contacts.|
|restrictToDomain|boolean|false|none|Flag that determines whether responses are sent to recipients who are outside of the user's domain. This feature is only available for Google Workspace users.|
|startTime|string(int64)|false|none|An optional start time for sending auto-replies (epoch ms). When this is specified, Gmail will automatically reply only to messages that it receives after the start time. If both `startTime` and `endTime` are specified, `startTime` must precede `endTime`.|

<h2 id="tocS_WatchRequest">WatchRequest</h2>
<!-- backwards compatibility -->
<a id="schemawatchrequest"></a>
<a id="schema_WatchRequest"></a>
<a id="tocSwatchrequest"></a>
<a id="tocswatchrequest"></a>

```json
{
  "labelFilterAction": "include",
  "labelFilterBehavior": "include",
  "labelIds": [
    "string"
  ],
  "topicName": "string"
}
```

Set up or update a new push notification watch on this user's mailbox.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|labelFilterAction|string|false|none|**Deprecated.** Filtering behavior of `labelIds list` specified. This field is deprecated because it caused incorrect behavior in some cases; use `label_filter_behavior` instead.|
|labelFilterBehavior|string|false|none|Filtering behavior of `labelIds list` specified. This field replaces `label_filter_action`; if set, `label_filter_action` is ignored.|
|labelIds|[string]|false|none|List of label_ids to restrict notifications about. By default, if unspecified, all changes are pushed out. If specified then dictates which labels are required for a push notification to be generated.|
|topicName|string|false|none|A fully qualified Google Cloud Pub/Sub API topic name to publish the events to. This topic name **must** already exist in Cloud Pub/Sub and you **must** have already granted gmail "publish" permission on it. For example, "projects/my-project-identifier/topics/my-topic-name" (using the Cloud Pub/Sub "v1" topic naming format). Note that the "my-project-identifier" portion must exactly match your Google developer project id (the one executing this watch request).|

#### Enumerated Values

|Property|Value|
|---|---|
|labelFilterAction|include|
|labelFilterAction|exclude|
|labelFilterBehavior|include|
|labelFilterBehavior|exclude|

<h2 id="tocS_WatchResponse">WatchResponse</h2>
<!-- backwards compatibility -->
<a id="schemawatchresponse"></a>
<a id="schema_WatchResponse"></a>
<a id="tocSwatchresponse"></a>
<a id="tocswatchresponse"></a>

```json
{
  "expiration": "string",
  "historyId": "string"
}
```

Push notification watch response.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|expiration|string(int64)|false|none|When Gmail will stop sending notifications for mailbox updates (epoch millis). Call `watch` again before this time to renew the watch.|
|historyId|string(uint64)|false|none|The ID of the mailbox's current history record.|
