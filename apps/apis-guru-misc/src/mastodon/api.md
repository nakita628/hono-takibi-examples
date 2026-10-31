<h1 id="mastodon-api-specification-httpsgithubcommastodonmastodon">Mastodon API Specification (https://github.com/mastodon/mastodon) v1.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Base URLs:

* <a href="http://mastodon.local">http://mastodon.local</a>

* <a href="https://mastodon.social">https://mastodon.social</a>

Email: <a href="mailto:sardo@hey.com">Sardorbek Pulatov</a> 

# Authentication

- HTTP Authentication, scheme: bearer

- oAuth2 authentication.

    - Flow: authorizationCode
    - Authorization URL = [/oauth/authorize](/oauth/authorize)
    - Token URL = [/oauth/token](/oauth/token)

|Scope|Scope Description|
|---|---|
|admin:read|admin read|
|admin:read:accounts|read accounts|
|admin:read:reports|read reports|
|admin:write|admin write|
|admin:write:accounts|write accounts|
|admin:write:reports|write reports|
|read:accounts|read accounts|
|read:blocks|read blocks|
|read:bookmarks|read bookmarks|
|read:favourites|read favourites|
|read:filters|read filters|
|read:follows|read follows|
|read:lists|read lists|
|read:mutes|read mutes|
|read:notifications|read notifications|
|read:search|read search|
|read:statuses|read statuses|
|write:accounts|write accounts|
|write:blocks|write blocks|
|write:bookmarks|write bookmarks|
|write:conversations|write conversations|
|write:favourites|write favourites|
|write:filters|write filters|
|write:follows|write follows|
|write:lists|write lists|
|write:media|write media|
|write:mutes|write mutes|
|write:notifications|write notifications|
|write:reports|write reports|
|write:statuses|write statuses|

<h1 id="mastodon-api-specification-httpsgithubcommastodonmastodon-default">Default</h1>

## get/api/oembed

> Code samples

```bash
curl https://example.com/api/oembed \
  -H 'Accept: application/json'
```

`GET /api/oembed`

OEmbed as JSON

<h3 id="getapioembed-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|url|query|string|false|URL of a status|
|maxwidth|query|integer|false|width of the iframe. Defaults to 400|
|maxheight|query|integer|false|height of the iframe. Defaults to null|

> Example responses

> 200 Response

```json
{
  "author_name": "string",
  "author_url": "string",
  "blurhash": "string",
  "description": "string",
  "height": 0,
  "html": "string",
  "image": "string",
  "provider_name": "string",
  "provider_url": "string",
  "title": "string",
  "type": "link",
  "url": "string",
  "width": 0
}
```

> 404 Response

```json
{
  "error": "string",
  "error_description": "string"
}
```

<h3 id="getapioembed-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[Card](#schemacard)|
|404|Not Found|Not Found|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## get/api/proofs

> Code samples

```bash
curl https://example.com/api/proofs \
  -H 'Accept: application/json'
```

`GET /api/proofs`

View identity proof

<h3 id="getapiproofs-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|provider|query|string|false|The identity provider to be looked up. Currently only supports keybase (case-sensitive)|
|username|query|string|false|The username on the selected identity provider|

> Example responses

> 200 Response

```json
{
  "profile_url": "string",
  "proof_url": "string",
  "provider": "string",
  "provider_username": "string",
  "updated_at": "string"
}
```

> 404 Response

```json
{
  "error": "string",
  "error_description": "string"
}
```

<h3 id="getapiproofs-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[IdentityProof](#schemaidentityproof)|
|404|Not Found|Not Found|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## get/api/v1/admin/accounts

> Code samples

```bash
curl https://example.com/api/v1/admin/accounts \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/v1/admin/accounts`

View accounts matching certain criteria for filtering, up to 100 at a time. Pagination may be done with the HTTP Link header in the response.

<h3 id="getapiv1adminaccounts-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|local|query|boolean|false|Filter for local accounts?|
|remote|query|boolean|false|Filter for remote accounts?|
|by_domain|query|string|false|Filter by the given domain|
|active|query|boolean|false|Filter for currently active accounts?|
|pending|query|boolean|false|Filter for currently pending accounts?|
|disabled|query|boolean|false|Filter for currently disabled accounts?|
|silenced|query|boolean|false|Filter for currently silenced accounts?|
|suspended|query|boolean|false|Filter for currently suspended accounts?|
|staff|query|boolean|false|Filter for staff accounts?|
|username|query|string|false|Username to search for|
|display_name|query|string|false|Display name to search for|
|email|query|string|false|Lookup a user with this email|
|ip|query|string|false|Lookup a user with this IP|

> Example responses

> 200 Response

```json
[
  {
    "account": {
      "acct": "string",
      "avatar": "string",
      "avatar_static": "string",
      "bot": true,
      "created_at": "1970-01-01T00:00:00Z",
      "discoverable": true,
      "display_name": "string",
      "emojis": [
        {
          "category": "string",
          "shortcode": "string",
          "static_url": "string",
          "url": "string",
          "visible_in_picker": true
        }
      ],
      "fields": [
        {
          "name": "string",
          "value": "string",
          "verified_at": "1970-01-01T00:00:00Z"
        }
      ],
      "followers_count": 0,
      "following_count": 0,
      "header": "string",
      "header_static": "string",
      "id": "string",
      "last_status_at": "1970-01-01T00:00:00Z",
      "locked": true,
      "moved": {},
      "mute_expires_at": "1970-01-01T00:00:00Z",
      "note": "string",
      "source": {
        "fields": [
          {
            "name": "string",
            "value": "string",
            "verified_at": "1970-01-01T00:00:00Z"
          }
        ],
        "follow_requests_count": 0,
        "language": "string",
        "note": "string",
        "privacy": "public",
        "sensitive": true
      },
      "statuses_count": 0,
      "suspended": true,
      "url": "string",
      "username": "string"
    },
    "approved": true,
    "confirmed": true,
    "created_at": "1970-01-01T00:00:00Z",
    "created_by_application_id": "string",
    "disabled": true,
    "email": "string",
    "id": "string",
    "invite_request": "string",
    "invited_by_account_id": "string",
    "ip": "string",
    "locale": "string",
    "role": "string",
    "silenced": true,
    "suspended": true,
    "username": "string"
  }
]
```

<h3 id="getapiv1adminaccounts-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|

<h3 id="getapiv1adminaccounts-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[AdminAccount](#schemaadminaccount)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## get/api/v1/admin/accounts/{id}

> Code samples

```bash
curl https://example.com/api/v1/admin/accounts/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/v1/admin/accounts/{id}`

View admin-level information about the given account.

<h3 id="getapiv1adminaccountsid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|ID of the account|

> Example responses

> 200 Response

```json
{
  "account": {
    "acct": "string",
    "avatar": "string",
    "avatar_static": "string",
    "bot": true,
    "created_at": "1970-01-01T00:00:00Z",
    "discoverable": true,
    "display_name": "string",
    "emojis": [
      {
        "category": "string",
        "shortcode": "string",
        "static_url": "string",
        "url": "string",
        "visible_in_picker": true
      }
    ],
    "fields": [
      {
        "name": "string",
        "value": "string",
        "verified_at": "1970-01-01T00:00:00Z"
      }
    ],
    "followers_count": 0,
    "following_count": 0,
    "header": "string",
    "header_static": "string",
    "id": "string",
    "last_status_at": "1970-01-01T00:00:00Z",
    "locked": true,
    "moved": {},
    "mute_expires_at": "1970-01-01T00:00:00Z",
    "note": "string",
    "source": {
      "fields": [
        {
          "name": "string",
          "value": "string",
          "verified_at": "1970-01-01T00:00:00Z"
        }
      ],
      "follow_requests_count": 0,
      "language": "string",
      "note": "string",
      "privacy": "public",
      "sensitive": true
    },
    "statuses_count": 0,
    "suspended": true,
    "url": "string",
    "username": "string"
  },
  "approved": true,
  "confirmed": true,
  "created_at": "1970-01-01T00:00:00Z",
  "created_by_application_id": "string",
  "disabled": true,
  "email": "string",
  "id": "string",
  "invite_request": "string",
  "invited_by_account_id": "string",
  "ip": "string",
  "locale": "string",
  "role": "string",
  "silenced": true,
  "suspended": true,
  "username": "string"
}
```

<h3 id="getapiv1adminaccountsid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[AdminAccount](#schemaadminaccount)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## post/api/v1/admin/accounts/{id}/action

> Code samples

```bash
curl https://example.com/api/v1/admin/accounts/string/action \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "report_id": "string",
    "send_email_notification": true,
    "text": "string",
    "type": "none",
    "warning_preset_id": "string"
  }'
```

`POST /api/v1/admin/accounts/{id}/action`

Perform an action against an account and log this action in the moderation history.

> Body parameter

```json
{
  "report_id": "string",
  "send_email_notification": true,
  "text": "string",
  "type": "none",
  "warning_preset_id": "string"
}
```

<h3 id="postapiv1adminaccountsidaction-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|ID of the account|
|body|body|object|false|none|
|» report_id|body|string|false|ID of an associated report that caused this action to be taken|
|» send_email_notification|body|boolean|false|Whether an email should be sent to the user with the above information.|
|» text|body|string|false|Additional text for clarification of why this action was taken|
|» type|body|string|false|Type of action to be taken. Enumerable oneOf: none disable silence suspend|
|» warning_preset_id|body|string|false|ID of a preset warning|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» type|none|
|» type|disable|
|» type|silence|
|» type|suspend|

<h3 id="postapiv1adminaccountsidaction-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## post/api/v1/admin/accounts/{id}/approve

> Code samples

```bash
curl https://example.com/api/v1/admin/accounts/string/approve \
  -X POST \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /api/v1/admin/accounts/{id}/approve`

Approve the given local account if it is currently pending approval.

<h3 id="postapiv1adminaccountsidapprove-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|ID of the account|

<h3 id="postapiv1adminaccountsidapprove-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## post/api/v1/admin/accounts/{id}/enable

> Code samples

```bash
curl https://example.com/api/v1/admin/accounts/string/enable \
  -X POST \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /api/v1/admin/accounts/{id}/enable`

Re-enable a local account whose login is currently disabled.

<h3 id="postapiv1adminaccountsidenable-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|ID of the account|

<h3 id="postapiv1adminaccountsidenable-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## post/api/v1/admin/accounts/{id}/reject

> Code samples

```bash
curl https://example.com/api/v1/admin/accounts/string/reject \
  -X POST \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /api/v1/admin/accounts/{id}/reject`

Reject the given local account if it is currently pending approval.

<h3 id="postapiv1adminaccountsidreject-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|ID of the account|

<h3 id="postapiv1adminaccountsidreject-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## post/api/v1/admin/accounts/{id}/unsilence

> Code samples

```bash
curl https://example.com/api/v1/admin/accounts/string/unsilence \
  -X POST \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /api/v1/admin/accounts/{id}/unsilence`

Unsilence a currently silenced account.

<h3 id="postapiv1adminaccountsidunsilence-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|ID of the account|

<h3 id="postapiv1adminaccountsidunsilence-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## post/api/v1/admin/accounts/{id}/unsuspend

> Code samples

```bash
curl https://example.com/api/v1/admin/accounts/string/unsuspend \
  -X POST \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /api/v1/admin/accounts/{id}/unsuspend`

Unsuspend a currently suspended account.

<h3 id="postapiv1adminaccountsidunsuspend-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|ID of the account|

<h3 id="postapiv1adminaccountsidunsuspend-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## get/api/v1/admin/reports

> Code samples

```bash
curl https://example.com/api/v1/admin/reports \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/v1/admin/reports`

View all reports. Pagination may be done with HTTP Link header in the response.

<h3 id="getapiv1adminreports-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|resolved|query|boolean|false|none|
|account_id|query|string|false|none|
|target_account_id|query|string|false|none|

> Example responses

> 200 Response

```json
[
  {
    "account": {
      "acct": "string",
      "avatar": "string",
      "avatar_static": "string",
      "bot": true,
      "created_at": "1970-01-01T00:00:00Z",
      "discoverable": true,
      "display_name": "string",
      "emojis": [
        {
          "category": "string",
          "shortcode": "string",
          "static_url": "string",
          "url": "string",
          "visible_in_picker": true
        }
      ],
      "fields": [
        {
          "name": "string",
          "value": "string",
          "verified_at": "1970-01-01T00:00:00Z"
        }
      ],
      "followers_count": 0,
      "following_count": 0,
      "header": "string",
      "header_static": "string",
      "id": "string",
      "last_status_at": "1970-01-01T00:00:00Z",
      "locked": true,
      "moved": {},
      "mute_expires_at": "1970-01-01T00:00:00Z",
      "note": "string",
      "source": {
        "fields": [
          {
            "name": "string",
            "value": "string",
            "verified_at": "1970-01-01T00:00:00Z"
          }
        ],
        "follow_requests_count": 0,
        "language": "string",
        "note": "string",
        "privacy": "public",
        "sensitive": true
      },
      "statuses_count": 0,
      "suspended": true,
      "url": "string",
      "username": "string"
    },
    "action_taken": "string",
    "assigned_account": {
      "acct": "string",
      "avatar": "string",
      "avatar_static": "string",
      "bot": true,
      "created_at": "1970-01-01T00:00:00Z",
      "discoverable": true,
      "display_name": "string",
      "emojis": [
        {
          "category": "string",
          "shortcode": "string",
          "static_url": "string",
          "url": "string",
          "visible_in_picker": true
        }
      ],
      "fields": [
        {
          "name": "string",
          "value": "string",
          "verified_at": "1970-01-01T00:00:00Z"
        }
      ],
      "followers_count": 0,
      "following_count": 0,
      "header": "string",
      "header_static": "string",
      "id": "string",
      "last_status_at": "1970-01-01T00:00:00Z",
      "locked": true,
      "moved": {},
      "mute_expires_at": "1970-01-01T00:00:00Z",
      "note": "string",
      "source": {
        "fields": [
          {
            "name": "string",
            "value": "string",
            "verified_at": "1970-01-01T00:00:00Z"
          }
        ],
        "follow_requests_count": 0,
        "language": "string",
        "note": "string",
        "privacy": "public",
        "sensitive": true
      },
      "statuses_count": 0,
      "suspended": true,
      "url": "string",
      "username": "string"
    },
    "comment": "string",
    "created_at": "1970-01-01T00:00:00Z",
    "id": "string",
    "statuses": [
      {
        "account": {},
        "application": {
          "client_id": "string",
          "client_secret": "string",
          "name": "string",
          "vapid_key": "string",
          "website": "string"
        },
        "bookmarked": true,
        "card": {
          "author_name": "string",
          "author_url": "string",
          "blurhash": "string",
          "description": "string",
          "height": 0,
          "html": "string",
          "image": "string",
          "provider_name": "string",
          "provider_url": "string",
          "title": "string",
          "type": "link",
          "url": "string",
          "width": 0
        },
        "content": "string",
        "created_at": "1970-01-01T00:00:00Z",
        "emojis": [
          {
            "category": "string",
            "shortcode": "string",
            "static_url": "string",
            "url": "string",
            "visible_in_picker": true
          }
        ],
        "favourited": true,
        "favourites_count": 0,
        "id": "string",
        "in_reply_to_account_id": "string",
        "in_reply_to_id": "string",
        "language": "string",
        "media_attachments": [
          {
            "blurhash": "string",
            "description": "string",
            "id": "string",
            "meta": {},
            "preview_url": "string",
            "remote_url": "string",
            "text_url": "string",
            "type": "unknown",
            "url": "string"
          }
        ],
        "mentions": [
          {
            "acct": "string",
            "id": "string",
            "url": "string",
            "username": "string"
          }
        ],
        "muted": true,
        "pinned": true,
        "poll": {
          "emojis": [
            {
              "category": "string",
              "shortcode": "string",
              "static_url": "string",
              "url": "string",
              "visible_in_picker": true
            }
          ],
          "expired": true,
          "expires_at": "1970-01-01T00:00:00Z",
          "id": "string",
          "multiple": true,
          "options": [
            null
          ],
          "own_votes": [
            0
          ],
          "voted": true,
          "voters_count": 0,
          "votes_count": 0
        },
        "reblog": {},
        "reblogged": true,
        "reblogs_count": 0,
        "replies_count": 0,
        "sensitive": true,
        "spoiler_text": "string",
        "tags": [
          {
            "history": [
              {
                "accounts": "string",
                "day": "string",
                "uses": "string"
              }
            ],
            "name": "string",
            "url": "string"
          }
        ],
        "text": "string",
        "uri": "string",
        "url": "string",
        "visibility": "public"
      }
    ],
    "target_account": {
      "acct": "string",
      "avatar": "string",
      "avatar_static": "string",
      "bot": true,
      "created_at": "1970-01-01T00:00:00Z",
      "discoverable": true,
      "display_name": "string",
      "emojis": [
        {
          "category": "string",
          "shortcode": "string",
          "static_url": "string",
          "url": "string",
          "visible_in_picker": true
        }
      ],
      "fields": [
        {
          "name": "string",
          "value": "string",
          "verified_at": "1970-01-01T00:00:00Z"
        }
      ],
      "followers_count": 0,
      "following_count": 0,
      "header": "string",
      "header_static": "string",
      "id": "string",
      "last_status_at": "1970-01-01T00:00:00Z",
      "locked": true,
      "moved": {},
      "mute_expires_at": "1970-01-01T00:00:00Z",
      "note": "string",
      "source": {
        "fields": [
          {
            "name": "string",
            "value": "string",
            "verified_at": "1970-01-01T00:00:00Z"
          }
        ],
        "follow_requests_count": 0,
        "language": "string",
        "note": "string",
        "privacy": "public",
        "sensitive": true
      },
      "statuses_count": 0,
      "suspended": true,
      "url": "string",
      "username": "string"
    },
    "updated_at": "1970-01-01T00:00:00Z"
  }
]
```

<h3 id="getapiv1adminreports-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|

<h3 id="getapiv1adminreports-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[AdminReport](#schemaadminreport)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## get/api/v1/admin/reports/{id}

> Code samples

```bash
curl https://example.com/api/v1/admin/reports/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/v1/admin/reports/{id}`

View information about the report with the given ID.

<h3 id="getapiv1adminreportsid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|ID of the report|

> Example responses

> 200 Response

```json
{
  "account": {
    "acct": "string",
    "avatar": "string",
    "avatar_static": "string",
    "bot": true,
    "created_at": "1970-01-01T00:00:00Z",
    "discoverable": true,
    "display_name": "string",
    "emojis": [
      {
        "category": "string",
        "shortcode": "string",
        "static_url": "string",
        "url": "string",
        "visible_in_picker": true
      }
    ],
    "fields": [
      {
        "name": "string",
        "value": "string",
        "verified_at": "1970-01-01T00:00:00Z"
      }
    ],
    "followers_count": 0,
    "following_count": 0,
    "header": "string",
    "header_static": "string",
    "id": "string",
    "last_status_at": "1970-01-01T00:00:00Z",
    "locked": true,
    "moved": {},
    "mute_expires_at": "1970-01-01T00:00:00Z",
    "note": "string",
    "source": {
      "fields": [
        {
          "name": "string",
          "value": "string",
          "verified_at": "1970-01-01T00:00:00Z"
        }
      ],
      "follow_requests_count": 0,
      "language": "string",
      "note": "string",
      "privacy": "public",
      "sensitive": true
    },
    "statuses_count": 0,
    "suspended": true,
    "url": "string",
    "username": "string"
  },
  "action_taken": "string",
  "assigned_account": {
    "acct": "string",
    "avatar": "string",
    "avatar_static": "string",
    "bot": true,
    "created_at": "1970-01-01T00:00:00Z",
    "discoverable": true,
    "display_name": "string",
    "emojis": [
      {
        "category": "string",
        "shortcode": "string",
        "static_url": "string",
        "url": "string",
        "visible_in_picker": true
      }
    ],
    "fields": [
      {
        "name": "string",
        "value": "string",
        "verified_at": "1970-01-01T00:00:00Z"
      }
    ],
    "followers_count": 0,
    "following_count": 0,
    "header": "string",
    "header_static": "string",
    "id": "string",
    "last_status_at": "1970-01-01T00:00:00Z",
    "locked": true,
    "moved": {},
    "mute_expires_at": "1970-01-01T00:00:00Z",
    "note": "string",
    "source": {
      "fields": [
        {
          "name": "string",
          "value": "string",
          "verified_at": "1970-01-01T00:00:00Z"
        }
      ],
      "follow_requests_count": 0,
      "language": "string",
      "note": "string",
      "privacy": "public",
      "sensitive": true
    },
    "statuses_count": 0,
    "suspended": true,
    "url": "string",
    "username": "string"
  },
  "comment": "string",
  "created_at": "1970-01-01T00:00:00Z",
  "id": "string",
  "statuses": [
    {
      "account": {},
      "application": {
        "client_id": "string",
        "client_secret": "string",
        "name": "string",
        "vapid_key": "string",
        "website": "string"
      },
      "bookmarked": true,
      "card": {
        "author_name": "string",
        "author_url": "string",
        "blurhash": "string",
        "description": "string",
        "height": 0,
        "html": "string",
        "image": "string",
        "provider_name": "string",
        "provider_url": "string",
        "title": "string",
        "type": "link",
        "url": "string",
        "width": 0
      },
      "content": "string",
      "created_at": "1970-01-01T00:00:00Z",
      "emojis": [
        {
          "category": "string",
          "shortcode": "string",
          "static_url": "string",
          "url": "string",
          "visible_in_picker": true
        }
      ],
      "favourited": true,
      "favourites_count": 0,
      "id": "string",
      "in_reply_to_account_id": "string",
      "in_reply_to_id": "string",
      "language": "string",
      "media_attachments": [
        {
          "blurhash": "string",
          "description": "string",
          "id": "string",
          "meta": {},
          "preview_url": "string",
          "remote_url": "string",
          "text_url": "string",
          "type": "unknown",
          "url": "string"
        }
      ],
      "mentions": [
        {
          "acct": "string",
          "id": "string",
          "url": "string",
          "username": "string"
        }
      ],
      "muted": true,
      "pinned": true,
      "poll": {
        "emojis": [
          {
            "category": "string",
            "shortcode": "string",
            "static_url": "string",
            "url": "string",
            "visible_in_picker": true
          }
        ],
        "expired": true,
        "expires_at": "1970-01-01T00:00:00Z",
        "id": "string",
        "multiple": true,
        "options": [
          null
        ],
        "own_votes": [
          0
        ],
        "voted": true,
        "voters_count": 0,
        "votes_count": 0
      },
      "reblog": {},
      "reblogged": true,
      "reblogs_count": 0,
      "replies_count": 0,
      "sensitive": true,
      "spoiler_text": "string",
      "tags": [
        {
          "history": [
            {
              "accounts": "string",
              "day": "string",
              "uses": "string"
            }
          ],
          "name": "string",
          "url": "string"
        }
      ],
      "text": "string",
      "uri": "string",
      "url": "string",
      "visibility": "public"
    }
  ],
  "target_account": {
    "acct": "string",
    "avatar": "string",
    "avatar_static": "string",
    "bot": true,
    "created_at": "1970-01-01T00:00:00Z",
    "discoverable": true,
    "display_name": "string",
    "emojis": [
      {
        "category": "string",
        "shortcode": "string",
        "static_url": "string",
        "url": "string",
        "visible_in_picker": true
      }
    ],
    "fields": [
      {
        "name": "string",
        "value": "string",
        "verified_at": "1970-01-01T00:00:00Z"
      }
    ],
    "followers_count": 0,
    "following_count": 0,
    "header": "string",
    "header_static": "string",
    "id": "string",
    "last_status_at": "1970-01-01T00:00:00Z",
    "locked": true,
    "moved": {},
    "mute_expires_at": "1970-01-01T00:00:00Z",
    "note": "string",
    "source": {
      "fields": [
        {
          "name": "string",
          "value": "string",
          "verified_at": "1970-01-01T00:00:00Z"
        }
      ],
      "follow_requests_count": 0,
      "language": "string",
      "note": "string",
      "privacy": "public",
      "sensitive": true
    },
    "statuses_count": 0,
    "suspended": true,
    "url": "string",
    "username": "string"
  },
  "updated_at": "1970-01-01T00:00:00Z"
}
```

<h3 id="getapiv1adminreportsid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[AdminReport](#schemaadminreport)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## post/api/v1/admin/reports/{id}/assign_to_self

> Code samples

```bash
curl https://example.com/api/v1/admin/reports/string/assign_to_self \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /api/v1/admin/reports/{id}/assign_to_self`

Claim the handling of this report to yourself.

<h3 id="postapiv1adminreportsidassigntoself-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|ID of the report|

> Example responses

> 200 Response

```json
{
  "account": {
    "acct": "string",
    "avatar": "string",
    "avatar_static": "string",
    "bot": true,
    "created_at": "1970-01-01T00:00:00Z",
    "discoverable": true,
    "display_name": "string",
    "emojis": [
      {
        "category": "string",
        "shortcode": "string",
        "static_url": "string",
        "url": "string",
        "visible_in_picker": true
      }
    ],
    "fields": [
      {
        "name": "string",
        "value": "string",
        "verified_at": "1970-01-01T00:00:00Z"
      }
    ],
    "followers_count": 0,
    "following_count": 0,
    "header": "string",
    "header_static": "string",
    "id": "string",
    "last_status_at": "1970-01-01T00:00:00Z",
    "locked": true,
    "moved": {},
    "mute_expires_at": "1970-01-01T00:00:00Z",
    "note": "string",
    "source": {
      "fields": [
        {
          "name": "string",
          "value": "string",
          "verified_at": "1970-01-01T00:00:00Z"
        }
      ],
      "follow_requests_count": 0,
      "language": "string",
      "note": "string",
      "privacy": "public",
      "sensitive": true
    },
    "statuses_count": 0,
    "suspended": true,
    "url": "string",
    "username": "string"
  },
  "action_taken": "string",
  "assigned_account": {
    "acct": "string",
    "avatar": "string",
    "avatar_static": "string",
    "bot": true,
    "created_at": "1970-01-01T00:00:00Z",
    "discoverable": true,
    "display_name": "string",
    "emojis": [
      {
        "category": "string",
        "shortcode": "string",
        "static_url": "string",
        "url": "string",
        "visible_in_picker": true
      }
    ],
    "fields": [
      {
        "name": "string",
        "value": "string",
        "verified_at": "1970-01-01T00:00:00Z"
      }
    ],
    "followers_count": 0,
    "following_count": 0,
    "header": "string",
    "header_static": "string",
    "id": "string",
    "last_status_at": "1970-01-01T00:00:00Z",
    "locked": true,
    "moved": {},
    "mute_expires_at": "1970-01-01T00:00:00Z",
    "note": "string",
    "source": {
      "fields": [
        {
          "name": "string",
          "value": "string",
          "verified_at": "1970-01-01T00:00:00Z"
        }
      ],
      "follow_requests_count": 0,
      "language": "string",
      "note": "string",
      "privacy": "public",
      "sensitive": true
    },
    "statuses_count": 0,
    "suspended": true,
    "url": "string",
    "username": "string"
  },
  "comment": "string",
  "created_at": "1970-01-01T00:00:00Z",
  "id": "string",
  "statuses": [
    {
      "account": {},
      "application": {
        "client_id": "string",
        "client_secret": "string",
        "name": "string",
        "vapid_key": "string",
        "website": "string"
      },
      "bookmarked": true,
      "card": {
        "author_name": "string",
        "author_url": "string",
        "blurhash": "string",
        "description": "string",
        "height": 0,
        "html": "string",
        "image": "string",
        "provider_name": "string",
        "provider_url": "string",
        "title": "string",
        "type": "link",
        "url": "string",
        "width": 0
      },
      "content": "string",
      "created_at": "1970-01-01T00:00:00Z",
      "emojis": [
        {
          "category": "string",
          "shortcode": "string",
          "static_url": "string",
          "url": "string",
          "visible_in_picker": true
        }
      ],
      "favourited": true,
      "favourites_count": 0,
      "id": "string",
      "in_reply_to_account_id": "string",
      "in_reply_to_id": "string",
      "language": "string",
      "media_attachments": [
        {
          "blurhash": "string",
          "description": "string",
          "id": "string",
          "meta": {},
          "preview_url": "string",
          "remote_url": "string",
          "text_url": "string",
          "type": "unknown",
          "url": "string"
        }
      ],
      "mentions": [
        {
          "acct": "string",
          "id": "string",
          "url": "string",
          "username": "string"
        }
      ],
      "muted": true,
      "pinned": true,
      "poll": {
        "emojis": [
          {
            "category": "string",
            "shortcode": "string",
            "static_url": "string",
            "url": "string",
            "visible_in_picker": true
          }
        ],
        "expired": true,
        "expires_at": "1970-01-01T00:00:00Z",
        "id": "string",
        "multiple": true,
        "options": [
          null
        ],
        "own_votes": [
          0
        ],
        "voted": true,
        "voters_count": 0,
        "votes_count": 0
      },
      "reblog": {},
      "reblogged": true,
      "reblogs_count": 0,
      "replies_count": 0,
      "sensitive": true,
      "spoiler_text": "string",
      "tags": [
        {
          "history": [
            {
              "accounts": "string",
              "day": "string",
              "uses": "string"
            }
          ],
          "name": "string",
          "url": "string"
        }
      ],
      "text": "string",
      "uri": "string",
      "url": "string",
      "visibility": "public"
    }
  ],
  "target_account": {
    "acct": "string",
    "avatar": "string",
    "avatar_static": "string",
    "bot": true,
    "created_at": "1970-01-01T00:00:00Z",
    "discoverable": true,
    "display_name": "string",
    "emojis": [
      {
        "category": "string",
        "shortcode": "string",
        "static_url": "string",
        "url": "string",
        "visible_in_picker": true
      }
    ],
    "fields": [
      {
        "name": "string",
        "value": "string",
        "verified_at": "1970-01-01T00:00:00Z"
      }
    ],
    "followers_count": 0,
    "following_count": 0,
    "header": "string",
    "header_static": "string",
    "id": "string",
    "last_status_at": "1970-01-01T00:00:00Z",
    "locked": true,
    "moved": {},
    "mute_expires_at": "1970-01-01T00:00:00Z",
    "note": "string",
    "source": {
      "fields": [
        {
          "name": "string",
          "value": "string",
          "verified_at": "1970-01-01T00:00:00Z"
        }
      ],
      "follow_requests_count": 0,
      "language": "string",
      "note": "string",
      "privacy": "public",
      "sensitive": true
    },
    "statuses_count": 0,
    "suspended": true,
    "url": "string",
    "username": "string"
  },
  "updated_at": "1970-01-01T00:00:00Z"
}
```

<h3 id="postapiv1adminreportsidassigntoself-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[AdminReport](#schemaadminreport)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## post/api/v1/admin/reports/{id}/reopen

> Code samples

```bash
curl https://example.com/api/v1/admin/reports/string/reopen \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /api/v1/admin/reports/{id}/reopen`

Mark a report as resolved with no further action taken.

<h3 id="postapiv1adminreportsidreopen-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|ID of the report|

> Example responses

> 200 Response

```json
{
  "account": {
    "acct": "string",
    "avatar": "string",
    "avatar_static": "string",
    "bot": true,
    "created_at": "1970-01-01T00:00:00Z",
    "discoverable": true,
    "display_name": "string",
    "emojis": [
      {
        "category": "string",
        "shortcode": "string",
        "static_url": "string",
        "url": "string",
        "visible_in_picker": true
      }
    ],
    "fields": [
      {
        "name": "string",
        "value": "string",
        "verified_at": "1970-01-01T00:00:00Z"
      }
    ],
    "followers_count": 0,
    "following_count": 0,
    "header": "string",
    "header_static": "string",
    "id": "string",
    "last_status_at": "1970-01-01T00:00:00Z",
    "locked": true,
    "moved": {},
    "mute_expires_at": "1970-01-01T00:00:00Z",
    "note": "string",
    "source": {
      "fields": [
        {
          "name": "string",
          "value": "string",
          "verified_at": "1970-01-01T00:00:00Z"
        }
      ],
      "follow_requests_count": 0,
      "language": "string",
      "note": "string",
      "privacy": "public",
      "sensitive": true
    },
    "statuses_count": 0,
    "suspended": true,
    "url": "string",
    "username": "string"
  },
  "action_taken": "string",
  "assigned_account": {
    "acct": "string",
    "avatar": "string",
    "avatar_static": "string",
    "bot": true,
    "created_at": "1970-01-01T00:00:00Z",
    "discoverable": true,
    "display_name": "string",
    "emojis": [
      {
        "category": "string",
        "shortcode": "string",
        "static_url": "string",
        "url": "string",
        "visible_in_picker": true
      }
    ],
    "fields": [
      {
        "name": "string",
        "value": "string",
        "verified_at": "1970-01-01T00:00:00Z"
      }
    ],
    "followers_count": 0,
    "following_count": 0,
    "header": "string",
    "header_static": "string",
    "id": "string",
    "last_status_at": "1970-01-01T00:00:00Z",
    "locked": true,
    "moved": {},
    "mute_expires_at": "1970-01-01T00:00:00Z",
    "note": "string",
    "source": {
      "fields": [
        {
          "name": "string",
          "value": "string",
          "verified_at": "1970-01-01T00:00:00Z"
        }
      ],
      "follow_requests_count": 0,
      "language": "string",
      "note": "string",
      "privacy": "public",
      "sensitive": true
    },
    "statuses_count": 0,
    "suspended": true,
    "url": "string",
    "username": "string"
  },
  "comment": "string",
  "created_at": "1970-01-01T00:00:00Z",
  "id": "string",
  "statuses": [
    {
      "account": {},
      "application": {
        "client_id": "string",
        "client_secret": "string",
        "name": "string",
        "vapid_key": "string",
        "website": "string"
      },
      "bookmarked": true,
      "card": {
        "author_name": "string",
        "author_url": "string",
        "blurhash": "string",
        "description": "string",
        "height": 0,
        "html": "string",
        "image": "string",
        "provider_name": "string",
        "provider_url": "string",
        "title": "string",
        "type": "link",
        "url": "string",
        "width": 0
      },
      "content": "string",
      "created_at": "1970-01-01T00:00:00Z",
      "emojis": [
        {
          "category": "string",
          "shortcode": "string",
          "static_url": "string",
          "url": "string",
          "visible_in_picker": true
        }
      ],
      "favourited": true,
      "favourites_count": 0,
      "id": "string",
      "in_reply_to_account_id": "string",
      "in_reply_to_id": "string",
      "language": "string",
      "media_attachments": [
        {
          "blurhash": "string",
          "description": "string",
          "id": "string",
          "meta": {},
          "preview_url": "string",
          "remote_url": "string",
          "text_url": "string",
          "type": "unknown",
          "url": "string"
        }
      ],
      "mentions": [
        {
          "acct": "string",
          "id": "string",
          "url": "string",
          "username": "string"
        }
      ],
      "muted": true,
      "pinned": true,
      "poll": {
        "emojis": [
          {
            "category": "string",
            "shortcode": "string",
            "static_url": "string",
            "url": "string",
            "visible_in_picker": true
          }
        ],
        "expired": true,
        "expires_at": "1970-01-01T00:00:00Z",
        "id": "string",
        "multiple": true,
        "options": [
          null
        ],
        "own_votes": [
          0
        ],
        "voted": true,
        "voters_count": 0,
        "votes_count": 0
      },
      "reblog": {},
      "reblogged": true,
      "reblogs_count": 0,
      "replies_count": 0,
      "sensitive": true,
      "spoiler_text": "string",
      "tags": [
        {
          "history": [
            {
              "accounts": "string",
              "day": "string",
              "uses": "string"
            }
          ],
          "name": "string",
          "url": "string"
        }
      ],
      "text": "string",
      "uri": "string",
      "url": "string",
      "visibility": "public"
    }
  ],
  "target_account": {
    "acct": "string",
    "avatar": "string",
    "avatar_static": "string",
    "bot": true,
    "created_at": "1970-01-01T00:00:00Z",
    "discoverable": true,
    "display_name": "string",
    "emojis": [
      {
        "category": "string",
        "shortcode": "string",
        "static_url": "string",
        "url": "string",
        "visible_in_picker": true
      }
    ],
    "fields": [
      {
        "name": "string",
        "value": "string",
        "verified_at": "1970-01-01T00:00:00Z"
      }
    ],
    "followers_count": 0,
    "following_count": 0,
    "header": "string",
    "header_static": "string",
    "id": "string",
    "last_status_at": "1970-01-01T00:00:00Z",
    "locked": true,
    "moved": {},
    "mute_expires_at": "1970-01-01T00:00:00Z",
    "note": "string",
    "source": {
      "fields": [
        {
          "name": "string",
          "value": "string",
          "verified_at": "1970-01-01T00:00:00Z"
        }
      ],
      "follow_requests_count": 0,
      "language": "string",
      "note": "string",
      "privacy": "public",
      "sensitive": true
    },
    "statuses_count": 0,
    "suspended": true,
    "url": "string",
    "username": "string"
  },
  "updated_at": "1970-01-01T00:00:00Z"
}
```

<h3 id="postapiv1adminreportsidreopen-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[AdminReport](#schemaadminreport)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## post/api/v1/admin/reports/{id}/resolve

> Code samples

```bash
curl https://example.com/api/v1/admin/reports/string/resolve \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /api/v1/admin/reports/{id}/resolve`

Mark a report as resolved with no further action taken.

<h3 id="postapiv1adminreportsidresolve-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|ID of the report|

> Example responses

> 200 Response

```json
{
  "account": {
    "acct": "string",
    "avatar": "string",
    "avatar_static": "string",
    "bot": true,
    "created_at": "1970-01-01T00:00:00Z",
    "discoverable": true,
    "display_name": "string",
    "emojis": [
      {
        "category": "string",
        "shortcode": "string",
        "static_url": "string",
        "url": "string",
        "visible_in_picker": true
      }
    ],
    "fields": [
      {
        "name": "string",
        "value": "string",
        "verified_at": "1970-01-01T00:00:00Z"
      }
    ],
    "followers_count": 0,
    "following_count": 0,
    "header": "string",
    "header_static": "string",
    "id": "string",
    "last_status_at": "1970-01-01T00:00:00Z",
    "locked": true,
    "moved": {},
    "mute_expires_at": "1970-01-01T00:00:00Z",
    "note": "string",
    "source": {
      "fields": [
        {
          "name": "string",
          "value": "string",
          "verified_at": "1970-01-01T00:00:00Z"
        }
      ],
      "follow_requests_count": 0,
      "language": "string",
      "note": "string",
      "privacy": "public",
      "sensitive": true
    },
    "statuses_count": 0,
    "suspended": true,
    "url": "string",
    "username": "string"
  },
  "action_taken": "string",
  "assigned_account": {
    "acct": "string",
    "avatar": "string",
    "avatar_static": "string",
    "bot": true,
    "created_at": "1970-01-01T00:00:00Z",
    "discoverable": true,
    "display_name": "string",
    "emojis": [
      {
        "category": "string",
        "shortcode": "string",
        "static_url": "string",
        "url": "string",
        "visible_in_picker": true
      }
    ],
    "fields": [
      {
        "name": "string",
        "value": "string",
        "verified_at": "1970-01-01T00:00:00Z"
      }
    ],
    "followers_count": 0,
    "following_count": 0,
    "header": "string",
    "header_static": "string",
    "id": "string",
    "last_status_at": "1970-01-01T00:00:00Z",
    "locked": true,
    "moved": {},
    "mute_expires_at": "1970-01-01T00:00:00Z",
    "note": "string",
    "source": {
      "fields": [
        {
          "name": "string",
          "value": "string",
          "verified_at": "1970-01-01T00:00:00Z"
        }
      ],
      "follow_requests_count": 0,
      "language": "string",
      "note": "string",
      "privacy": "public",
      "sensitive": true
    },
    "statuses_count": 0,
    "suspended": true,
    "url": "string",
    "username": "string"
  },
  "comment": "string",
  "created_at": "1970-01-01T00:00:00Z",
  "id": "string",
  "statuses": [
    {
      "account": {},
      "application": {
        "client_id": "string",
        "client_secret": "string",
        "name": "string",
        "vapid_key": "string",
        "website": "string"
      },
      "bookmarked": true,
      "card": {
        "author_name": "string",
        "author_url": "string",
        "blurhash": "string",
        "description": "string",
        "height": 0,
        "html": "string",
        "image": "string",
        "provider_name": "string",
        "provider_url": "string",
        "title": "string",
        "type": "link",
        "url": "string",
        "width": 0
      },
      "content": "string",
      "created_at": "1970-01-01T00:00:00Z",
      "emojis": [
        {
          "category": "string",
          "shortcode": "string",
          "static_url": "string",
          "url": "string",
          "visible_in_picker": true
        }
      ],
      "favourited": true,
      "favourites_count": 0,
      "id": "string",
      "in_reply_to_account_id": "string",
      "in_reply_to_id": "string",
      "language": "string",
      "media_attachments": [
        {
          "blurhash": "string",
          "description": "string",
          "id": "string",
          "meta": {},
          "preview_url": "string",
          "remote_url": "string",
          "text_url": "string",
          "type": "unknown",
          "url": "string"
        }
      ],
      "mentions": [
        {
          "acct": "string",
          "id": "string",
          "url": "string",
          "username": "string"
        }
      ],
      "muted": true,
      "pinned": true,
      "poll": {
        "emojis": [
          {
            "category": "string",
            "shortcode": "string",
            "static_url": "string",
            "url": "string",
            "visible_in_picker": true
          }
        ],
        "expired": true,
        "expires_at": "1970-01-01T00:00:00Z",
        "id": "string",
        "multiple": true,
        "options": [
          null
        ],
        "own_votes": [
          0
        ],
        "voted": true,
        "voters_count": 0,
        "votes_count": 0
      },
      "reblog": {},
      "reblogged": true,
      "reblogs_count": 0,
      "replies_count": 0,
      "sensitive": true,
      "spoiler_text": "string",
      "tags": [
        {
          "history": [
            {
              "accounts": "string",
              "day": "string",
              "uses": "string"
            }
          ],
          "name": "string",
          "url": "string"
        }
      ],
      "text": "string",
      "uri": "string",
      "url": "string",
      "visibility": "public"
    }
  ],
  "target_account": {
    "acct": "string",
    "avatar": "string",
    "avatar_static": "string",
    "bot": true,
    "created_at": "1970-01-01T00:00:00Z",
    "discoverable": true,
    "display_name": "string",
    "emojis": [
      {
        "category": "string",
        "shortcode": "string",
        "static_url": "string",
        "url": "string",
        "visible_in_picker": true
      }
    ],
    "fields": [
      {
        "name": "string",
        "value": "string",
        "verified_at": "1970-01-01T00:00:00Z"
      }
    ],
    "followers_count": 0,
    "following_count": 0,
    "header": "string",
    "header_static": "string",
    "id": "string",
    "last_status_at": "1970-01-01T00:00:00Z",
    "locked": true,
    "moved": {},
    "mute_expires_at": "1970-01-01T00:00:00Z",
    "note": "string",
    "source": {
      "fields": [
        {
          "name": "string",
          "value": "string",
          "verified_at": "1970-01-01T00:00:00Z"
        }
      ],
      "follow_requests_count": 0,
      "language": "string",
      "note": "string",
      "privacy": "public",
      "sensitive": true
    },
    "statuses_count": 0,
    "suspended": true,
    "url": "string",
    "username": "string"
  },
  "updated_at": "1970-01-01T00:00:00Z"
}
```

<h3 id="postapiv1adminreportsidresolve-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[AdminReport](#schemaadminreport)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## post/api/v1/admin/reports/{id}/unassign

> Code samples

```bash
curl https://example.com/api/v1/admin/reports/string/unassign \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /api/v1/admin/reports/{id}/unassign`

Unassign a report so that someone else can claim it.

<h3 id="postapiv1adminreportsidunassign-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|ID of the report|

> Example responses

> 200 Response

```json
{
  "account": {
    "acct": "string",
    "avatar": "string",
    "avatar_static": "string",
    "bot": true,
    "created_at": "1970-01-01T00:00:00Z",
    "discoverable": true,
    "display_name": "string",
    "emojis": [
      {
        "category": "string",
        "shortcode": "string",
        "static_url": "string",
        "url": "string",
        "visible_in_picker": true
      }
    ],
    "fields": [
      {
        "name": "string",
        "value": "string",
        "verified_at": "1970-01-01T00:00:00Z"
      }
    ],
    "followers_count": 0,
    "following_count": 0,
    "header": "string",
    "header_static": "string",
    "id": "string",
    "last_status_at": "1970-01-01T00:00:00Z",
    "locked": true,
    "moved": {},
    "mute_expires_at": "1970-01-01T00:00:00Z",
    "note": "string",
    "source": {
      "fields": [
        {
          "name": "string",
          "value": "string",
          "verified_at": "1970-01-01T00:00:00Z"
        }
      ],
      "follow_requests_count": 0,
      "language": "string",
      "note": "string",
      "privacy": "public",
      "sensitive": true
    },
    "statuses_count": 0,
    "suspended": true,
    "url": "string",
    "username": "string"
  },
  "action_taken": "string",
  "assigned_account": {
    "acct": "string",
    "avatar": "string",
    "avatar_static": "string",
    "bot": true,
    "created_at": "1970-01-01T00:00:00Z",
    "discoverable": true,
    "display_name": "string",
    "emojis": [
      {
        "category": "string",
        "shortcode": "string",
        "static_url": "string",
        "url": "string",
        "visible_in_picker": true
      }
    ],
    "fields": [
      {
        "name": "string",
        "value": "string",
        "verified_at": "1970-01-01T00:00:00Z"
      }
    ],
    "followers_count": 0,
    "following_count": 0,
    "header": "string",
    "header_static": "string",
    "id": "string",
    "last_status_at": "1970-01-01T00:00:00Z",
    "locked": true,
    "moved": {},
    "mute_expires_at": "1970-01-01T00:00:00Z",
    "note": "string",
    "source": {
      "fields": [
        {
          "name": "string",
          "value": "string",
          "verified_at": "1970-01-01T00:00:00Z"
        }
      ],
      "follow_requests_count": 0,
      "language": "string",
      "note": "string",
      "privacy": "public",
      "sensitive": true
    },
    "statuses_count": 0,
    "suspended": true,
    "url": "string",
    "username": "string"
  },
  "comment": "string",
  "created_at": "1970-01-01T00:00:00Z",
  "id": "string",
  "statuses": [
    {
      "account": {},
      "application": {
        "client_id": "string",
        "client_secret": "string",
        "name": "string",
        "vapid_key": "string",
        "website": "string"
      },
      "bookmarked": true,
      "card": {
        "author_name": "string",
        "author_url": "string",
        "blurhash": "string",
        "description": "string",
        "height": 0,
        "html": "string",
        "image": "string",
        "provider_name": "string",
        "provider_url": "string",
        "title": "string",
        "type": "link",
        "url": "string",
        "width": 0
      },
      "content": "string",
      "created_at": "1970-01-01T00:00:00Z",
      "emojis": [
        {
          "category": "string",
          "shortcode": "string",
          "static_url": "string",
          "url": "string",
          "visible_in_picker": true
        }
      ],
      "favourited": true,
      "favourites_count": 0,
      "id": "string",
      "in_reply_to_account_id": "string",
      "in_reply_to_id": "string",
      "language": "string",
      "media_attachments": [
        {
          "blurhash": "string",
          "description": "string",
          "id": "string",
          "meta": {},
          "preview_url": "string",
          "remote_url": "string",
          "text_url": "string",
          "type": "unknown",
          "url": "string"
        }
      ],
      "mentions": [
        {
          "acct": "string",
          "id": "string",
          "url": "string",
          "username": "string"
        }
      ],
      "muted": true,
      "pinned": true,
      "poll": {
        "emojis": [
          {
            "category": "string",
            "shortcode": "string",
            "static_url": "string",
            "url": "string",
            "visible_in_picker": true
          }
        ],
        "expired": true,
        "expires_at": "1970-01-01T00:00:00Z",
        "id": "string",
        "multiple": true,
        "options": [
          null
        ],
        "own_votes": [
          0
        ],
        "voted": true,
        "voters_count": 0,
        "votes_count": 0
      },
      "reblog": {},
      "reblogged": true,
      "reblogs_count": 0,
      "replies_count": 0,
      "sensitive": true,
      "spoiler_text": "string",
      "tags": [
        {
          "history": [
            {
              "accounts": "string",
              "day": "string",
              "uses": "string"
            }
          ],
          "name": "string",
          "url": "string"
        }
      ],
      "text": "string",
      "uri": "string",
      "url": "string",
      "visibility": "public"
    }
  ],
  "target_account": {
    "acct": "string",
    "avatar": "string",
    "avatar_static": "string",
    "bot": true,
    "created_at": "1970-01-01T00:00:00Z",
    "discoverable": true,
    "display_name": "string",
    "emojis": [
      {
        "category": "string",
        "shortcode": "string",
        "static_url": "string",
        "url": "string",
        "visible_in_picker": true
      }
    ],
    "fields": [
      {
        "name": "string",
        "value": "string",
        "verified_at": "1970-01-01T00:00:00Z"
      }
    ],
    "followers_count": 0,
    "following_count": 0,
    "header": "string",
    "header_static": "string",
    "id": "string",
    "last_status_at": "1970-01-01T00:00:00Z",
    "locked": true,
    "moved": {},
    "mute_expires_at": "1970-01-01T00:00:00Z",
    "note": "string",
    "source": {
      "fields": [
        {
          "name": "string",
          "value": "string",
          "verified_at": "1970-01-01T00:00:00Z"
        }
      ],
      "follow_requests_count": 0,
      "language": "string",
      "note": "string",
      "privacy": "public",
      "sensitive": true
    },
    "statuses_count": 0,
    "suspended": true,
    "url": "string",
    "username": "string"
  },
  "updated_at": "1970-01-01T00:00:00Z"
}
```

<h3 id="postapiv1adminreportsidunassign-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[AdminReport](#schemaadminreport)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## get/api/v1/announcements

> Code samples

```bash
curl https://example.com/api/v1/announcements \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/v1/announcements`

See all currently active announcements set by admins.

<h3 id="getapiv1announcements-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|with_dismissed|query|boolean|false|If true, response will include announcements dismissed by the user. Defaults to false.|

> Example responses

> 200 Response

```json
[
  {
    "all_day": true,
    "created_at": "string",
    "ends_at": "string",
    "id": "string",
    "published": true,
    "read": true,
    "scheduled_at": "string",
    "starts_at": "string",
    "text": "string",
    "updated_at": "string"
  }
]
```

<h3 id="getapiv1announcements-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|

<h3 id="getapiv1announcements-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Announcement](#schemaannouncement)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## post/api/v1/announcements/{id}/dismiss

> Code samples

```bash
curl https://example.com/api/v1/announcements/string/dismiss \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /api/v1/announcements/{id}/dismiss`

Allows a user to mark the announcement as read.

<h3 id="postapiv1announcementsiddismiss-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Local ID of an announcement in the database.|

> Example responses

> 200 Response

```json
{}
```

<h3 id="postapiv1announcementsiddismiss-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## put/api/v1/announcements/{id}/reactions/{name}

> Code samples

```bash
curl https://example.com/api/v1/announcements/string/reactions/string \
  -X PUT \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`PUT /api/v1/announcements/{id}/reactions/{name}`

Allows a user to mark the announcement as read.

<h3 id="putapiv1announcementsidreactionsname-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Local ID of an announcement in the database.|
|name|path|string|true|Unicode emoji, or shortcode of custom emoji|

> Example responses

> 200 Response

```json
{}
```

> 422 Response

```json
{
  "error": "string",
  "error_description": "string"
}
```

<h3 id="putapiv1announcementsidreactionsname-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|422|Unprocessable Entity|Unprocessable Entity|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## delete/api/v1/announcements/{id}/reactions/{name}

> Code samples

```bash
curl https://example.com/api/v1/announcements/string/reactions/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /api/v1/announcements/{id}/reactions/{name}`

Undo a react emoji to an announcement.

<h3 id="deleteapiv1announcementsidreactionsname-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Local ID of an announcement in the database.|
|name|path|string|true|Unicode emoji, or shortcode of custom emoji|

> Example responses

> 200 Response

```json
{}
```

> 422 Response

```json
{
  "error": "string",
  "error_description": "string"
}
```

<h3 id="deleteapiv1announcementsidreactionsname-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|422|Unprocessable Entity|Unprocessable Entity|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## get/api/v1/blocks

> Code samples

```bash
curl https://example.com/api/v1/blocks \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/v1/blocks`

Get blocked users.

<h3 id="getapiv1blocks-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer|false|none|
|max_id|query|string|false|none|
|since_id|query|string|false|none|

> Example responses

> 200 Response

```json
[
  {
    "acct": "string",
    "avatar": "string",
    "avatar_static": "string",
    "bot": true,
    "created_at": "1970-01-01T00:00:00Z",
    "discoverable": true,
    "display_name": "string",
    "emojis": [
      {
        "category": "string",
        "shortcode": "string",
        "static_url": "string",
        "url": "string",
        "visible_in_picker": true
      }
    ],
    "fields": [
      {
        "name": "string",
        "value": "string",
        "verified_at": "1970-01-01T00:00:00Z"
      }
    ],
    "followers_count": 0,
    "following_count": 0,
    "header": "string",
    "header_static": "string",
    "id": "string",
    "last_status_at": "1970-01-01T00:00:00Z",
    "locked": true,
    "moved": {},
    "mute_expires_at": "1970-01-01T00:00:00Z",
    "note": "string",
    "source": {
      "fields": [
        {
          "name": "string",
          "value": "string",
          "verified_at": "1970-01-01T00:00:00Z"
        }
      ],
      "follow_requests_count": 0,
      "language": "string",
      "note": "string",
      "privacy": "public",
      "sensitive": true
    },
    "statuses_count": 0,
    "suspended": true,
    "url": "string",
    "username": "string"
  }
]
```

> 401 Response

```json
{
  "error": "string",
  "error_description": "string"
}
```

<h3 id="getapiv1blocks-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|success|Inline|
|401|Unauthorized|Invalid or missing Authorization header|[Error](#schemaerror)|

<h3 id="getapiv1blocks-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Account](#schemaaccount)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## get/api/v1/bookmarks

> Code samples

```bash
curl https://example.com/api/v1/bookmarks \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/v1/bookmarks`

Statuses the user has bookmarked.

<h3 id="getapiv1bookmarks-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer|false|none|
|max_id|query|string|false|none|
|since_id|query|string|false|none|
|min_id|query|string|false|none|

> Example responses

> 200 Response

```json
[
  {
    "account": {},
    "application": {
      "client_id": "string",
      "client_secret": "string",
      "name": "string",
      "vapid_key": "string",
      "website": "string"
    },
    "bookmarked": true,
    "card": {
      "author_name": "string",
      "author_url": "string",
      "blurhash": "string",
      "description": "string",
      "height": 0,
      "html": "string",
      "image": "string",
      "provider_name": "string",
      "provider_url": "string",
      "title": "string",
      "type": "link",
      "url": "string",
      "width": 0
    },
    "content": "string",
    "created_at": "1970-01-01T00:00:00Z",
    "emojis": [
      {
        "category": "string",
        "shortcode": "string",
        "static_url": "string",
        "url": "string",
        "visible_in_picker": true
      }
    ],
    "favourited": true,
    "favourites_count": 0,
    "id": "string",
    "in_reply_to_account_id": "string",
    "in_reply_to_id": "string",
    "language": "string",
    "media_attachments": [
      {
        "blurhash": "string",
        "description": "string",
        "id": "string",
        "meta": {},
        "preview_url": "string",
        "remote_url": "string",
        "text_url": "string",
        "type": "unknown",
        "url": "string"
      }
    ],
    "mentions": [
      {
        "acct": "string",
        "id": "string",
        "url": "string",
        "username": "string"
      }
    ],
    "muted": true,
    "pinned": true,
    "poll": {
      "emojis": [
        {
          "category": "string",
          "shortcode": "string",
          "static_url": "string",
          "url": "string",
          "visible_in_picker": true
        }
      ],
      "expired": true,
      "expires_at": "1970-01-01T00:00:00Z",
      "id": "string",
      "multiple": true,
      "options": [
        null
      ],
      "own_votes": [
        0
      ],
      "voted": true,
      "voters_count": 0,
      "votes_count": 0
    },
    "reblog": {},
    "reblogged": true,
    "reblogs_count": 0,
    "replies_count": 0,
    "sensitive": true,
    "spoiler_text": "string",
    "tags": [
      {
        "history": [
          {
            "accounts": "string",
            "day": "string",
            "uses": "string"
          }
        ],
        "name": "string",
        "url": "string"
      }
    ],
    "text": "string",
    "uri": "string",
    "url": "string",
    "visibility": "public"
  }
]
```

> 401 Response

```json
{
  "error": "string",
  "error_description": "string"
}
```

<h3 id="getapiv1bookmarks-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|success|Inline|
|401|Unauthorized|Invalid or missing Authorization header|[Error](#schemaerror)|

<h3 id="getapiv1bookmarks-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Status](#schemastatus)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## get/api/v1/conversations

> Code samples

```bash
curl https://example.com/api/v1/conversations \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/v1/conversations`

Show conversation.

<h3 id="getapiv1conversations-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer|false|Max number of results to return. Defaults to 20.|
|max_id|query|string|false|Return results older than ID|
|since_id|query|string|false|Return results newer than ID|
|min_id|query|string|false|Return results immediately newer than ID|

> Example responses

> 200 Response

```json
[
  {
    "accounts": [
      {
        "acct": "string",
        "avatar": "string",
        "avatar_static": "string",
        "bot": true,
        "created_at": "1970-01-01T00:00:00Z",
        "discoverable": true,
        "display_name": "string",
        "emojis": [
          {
            "category": "string",
            "shortcode": "string",
            "static_url": "string",
            "url": "string",
            "visible_in_picker": true
          }
        ],
        "fields": [
          {
            "name": "string",
            "value": "string",
            "verified_at": "1970-01-01T00:00:00Z"
          }
        ],
        "followers_count": 0,
        "following_count": 0,
        "header": "string",
        "header_static": "string",
        "id": "string",
        "last_status_at": "1970-01-01T00:00:00Z",
        "locked": true,
        "moved": {},
        "mute_expires_at": "1970-01-01T00:00:00Z",
        "note": "string",
        "source": {
          "fields": [
            {
              "name": "string",
              "value": "string",
              "verified_at": "1970-01-01T00:00:00Z"
            }
          ],
          "follow_requests_count": 0,
          "language": "string",
          "note": "string",
          "privacy": "public",
          "sensitive": true
        },
        "statuses_count": 0,
        "suspended": true,
        "url": "string",
        "username": "string"
      }
    ],
    "id": "string",
    "last_status": {
      "account": {},
      "application": {
        "client_id": "string",
        "client_secret": "string",
        "name": "string",
        "vapid_key": "string",
        "website": "string"
      },
      "bookmarked": true,
      "card": {
        "author_name": "string",
        "author_url": "string",
        "blurhash": "string",
        "description": "string",
        "height": 0,
        "html": "string",
        "image": "string",
        "provider_name": "string",
        "provider_url": "string",
        "title": "string",
        "type": "link",
        "url": "string",
        "width": 0
      },
      "content": "string",
      "created_at": "1970-01-01T00:00:00Z",
      "emojis": [
        {
          "category": "string",
          "shortcode": "string",
          "static_url": "string",
          "url": "string",
          "visible_in_picker": true
        }
      ],
      "favourited": true,
      "favourites_count": 0,
      "id": "string",
      "in_reply_to_account_id": "string",
      "in_reply_to_id": "string",
      "language": "string",
      "media_attachments": [
        {
          "blurhash": "string",
          "description": "string",
          "id": "string",
          "meta": {},
          "preview_url": "string",
          "remote_url": "string",
          "text_url": "string",
          "type": "unknown",
          "url": "string"
        }
      ],
      "mentions": [
        {
          "acct": "string",
          "id": "string",
          "url": "string",
          "username": "string"
        }
      ],
      "muted": true,
      "pinned": true,
      "poll": {
        "emojis": [
          {
            "category": "string",
            "shortcode": "string",
            "static_url": "string",
            "url": "string",
            "visible_in_picker": true
          }
        ],
        "expired": true,
        "expires_at": "1970-01-01T00:00:00Z",
        "id": "string",
        "multiple": true,
        "options": [
          null
        ],
        "own_votes": [
          0
        ],
        "voted": true,
        "voters_count": 0,
        "votes_count": 0
      },
      "reblog": {},
      "reblogged": true,
      "reblogs_count": 0,
      "replies_count": 0,
      "sensitive": true,
      "spoiler_text": "string",
      "tags": [
        {
          "history": [
            {
              "accounts": "string",
              "day": "string",
              "uses": "string"
            }
          ],
          "name": "string",
          "url": "string"
        }
      ],
      "text": "string",
      "uri": "string",
      "url": "string",
      "visibility": "public"
    },
    "unread": true
  }
]
```

> 401 Response

```json
{
  "error": "string",
  "error_description": "string"
}
```

<h3 id="getapiv1conversations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success.|Inline|
|401|Unauthorized|Invalid or missing Authorization header|[Error](#schemaerror)|

<h3 id="getapiv1conversations-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Conversation](#schemaconversation)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## delete/api/v1/conversations/{id}

> Code samples

```bash
curl https://example.com/api/v1/conversations/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /api/v1/conversations/{id}`

Remove converstation

<h3 id="deleteapiv1conversationsid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|ID of the conversation in the database|

> Example responses

> 200 Response

```json
{}
```

> 401 Response

```json
{
  "error": "string",
  "error_description": "string"
}
```

> 404 Response

```json
{
  "error": "string",
  "error_description": "string"
}
```

<h3 id="deleteapiv1conversationsid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success.|Inline|
|401|Unauthorized|Invalid or missing Authorization header|[Error](#schemaerror)|
|404|Not Found|Not Found|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## post/api/v1/conversations/{id}/read

> Code samples

```bash
curl https://example.com/api/v1/conversations/string/read \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /api/v1/conversations/{id}/read`

Remove converstation

<h3 id="postapiv1conversationsidread-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|ID of the conversation in the database|

> Example responses

> 200 Response

```json
{
  "accounts": [
    {
      "acct": "string",
      "avatar": "string",
      "avatar_static": "string",
      "bot": true,
      "created_at": "1970-01-01T00:00:00Z",
      "discoverable": true,
      "display_name": "string",
      "emojis": [
        {
          "category": "string",
          "shortcode": "string",
          "static_url": "string",
          "url": "string",
          "visible_in_picker": true
        }
      ],
      "fields": [
        {
          "name": "string",
          "value": "string",
          "verified_at": "1970-01-01T00:00:00Z"
        }
      ],
      "followers_count": 0,
      "following_count": 0,
      "header": "string",
      "header_static": "string",
      "id": "string",
      "last_status_at": "1970-01-01T00:00:00Z",
      "locked": true,
      "moved": {},
      "mute_expires_at": "1970-01-01T00:00:00Z",
      "note": "string",
      "source": {
        "fields": [
          {
            "name": "string",
            "value": "string",
            "verified_at": "1970-01-01T00:00:00Z"
          }
        ],
        "follow_requests_count": 0,
        "language": "string",
        "note": "string",
        "privacy": "public",
        "sensitive": true
      },
      "statuses_count": 0,
      "suspended": true,
      "url": "string",
      "username": "string"
    }
  ],
  "id": "string",
  "last_status": {
    "account": {},
    "application": {
      "client_id": "string",
      "client_secret": "string",
      "name": "string",
      "vapid_key": "string",
      "website": "string"
    },
    "bookmarked": true,
    "card": {
      "author_name": "string",
      "author_url": "string",
      "blurhash": "string",
      "description": "string",
      "height": 0,
      "html": "string",
      "image": "string",
      "provider_name": "string",
      "provider_url": "string",
      "title": "string",
      "type": "link",
      "url": "string",
      "width": 0
    },
    "content": "string",
    "created_at": "1970-01-01T00:00:00Z",
    "emojis": [
      {
        "category": "string",
        "shortcode": "string",
        "static_url": "string",
        "url": "string",
        "visible_in_picker": true
      }
    ],
    "favourited": true,
    "favourites_count": 0,
    "id": "string",
    "in_reply_to_account_id": "string",
    "in_reply_to_id": "string",
    "language": "string",
    "media_attachments": [
      {
        "blurhash": "string",
        "description": "string",
        "id": "string",
        "meta": {},
        "preview_url": "string",
        "remote_url": "string",
        "text_url": "string",
        "type": "unknown",
        "url": "string"
      }
    ],
    "mentions": [
      {
        "acct": "string",
        "id": "string",
        "url": "string",
        "username": "string"
      }
    ],
    "muted": true,
    "pinned": true,
    "poll": {
      "emojis": [
        {
          "category": "string",
          "shortcode": "string",
          "static_url": "string",
          "url": "string",
          "visible_in_picker": true
        }
      ],
      "expired": true,
      "expires_at": "1970-01-01T00:00:00Z",
      "id": "string",
      "multiple": true,
      "options": [
        null
      ],
      "own_votes": [
        0
      ],
      "voted": true,
      "voters_count": 0,
      "votes_count": 0
    },
    "reblog": {},
    "reblogged": true,
    "reblogs_count": 0,
    "replies_count": 0,
    "sensitive": true,
    "spoiler_text": "string",
    "tags": [
      {
        "history": [
          {
            "accounts": "string",
            "day": "string",
            "uses": "string"
          }
        ],
        "name": "string",
        "url": "string"
      }
    ],
    "text": "string",
    "uri": "string",
    "url": "string",
    "visibility": "public"
  },
  "unread": true
}
```

> 401 Response

```json
{
  "error": "string",
  "error_description": "string"
}
```

> 404 Response

```json
{
  "error": "string",
  "error_description": "string"
}
```

<h3 id="postapiv1conversationsidread-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The value of unread has been changed to false..|[Conversation](#schemaconversation)|
|401|Unauthorized|Invalid or missing Authorization header|[Error](#schemaerror)|
|404|Not Found|Not Found|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## get/api/v1/custom_emojis

> Code samples

```bash
curl https://example.com/api/v1/custom_emojis \
  -H 'Accept: application/json'
```

`GET /api/v1/custom_emojis`

Returns custom emojis that are available on the server.

> Example responses

> 200 Response

```json
[
  {
    "category": "string",
    "shortcode": "string",
    "static_url": "string",
    "url": "string",
    "visible_in_picker": true
  }
]
```

<h3 id="getapiv1customemojis-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List of Emojis|Inline|

<h3 id="getapiv1customemojis-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Emoji](#schemaemoji)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## get/api/v1/directory

> Code samples

```bash
curl https://example.com/api/v1/directory \
  -H 'Accept: application/json'
```

`GET /api/v1/directory`

List accounts visible in the directory.

<h3 id="getapiv1directory-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer|false|How many accounts to load. Default 40.|
|offset|query|integer|false|How many accounts to skip before returning results. Default 0.|
|order|query|string|false|the `active` to sort by most recently posted statuses (default) or `new` to sort by most recently created profiles.|
|local|query|boolean|false|Only return local accounts.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|order|active|
|order|new|

> Example responses

> 200 Response

```json
[
  {
    "acct": "string",
    "avatar": "string",
    "avatar_static": "string",
    "bot": true,
    "created_at": "1970-01-01T00:00:00Z",
    "discoverable": true,
    "display_name": "string",
    "emojis": [
      {
        "category": "string",
        "shortcode": "string",
        "static_url": "string",
        "url": "string",
        "visible_in_picker": true
      }
    ],
    "fields": [
      {
        "name": "string",
        "value": "string",
        "verified_at": "1970-01-01T00:00:00Z"
      }
    ],
    "followers_count": 0,
    "following_count": 0,
    "header": "string",
    "header_static": "string",
    "id": "string",
    "last_status_at": "1970-01-01T00:00:00Z",
    "locked": true,
    "moved": {},
    "mute_expires_at": "1970-01-01T00:00:00Z",
    "note": "string",
    "source": {
      "fields": [
        {
          "name": "string",
          "value": "string",
          "verified_at": "1970-01-01T00:00:00Z"
        }
      ],
      "follow_requests_count": 0,
      "language": "string",
      "note": "string",
      "privacy": "public",
      "sensitive": true
    },
    "statuses_count": 0,
    "suspended": true,
    "url": "string",
    "username": "string"
  }
]
```

<h3 id="getapiv1directory-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List of accounts|Inline|

<h3 id="getapiv1directory-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Account](#schemaaccount)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## get/api/v1/domain_blocks

> Code samples

```bash
curl https://example.com/api/v1/domain_blocks \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/v1/domain_blocks`

View domains the user has blocked.

<h3 id="getapiv1domainblocks-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer|false|none|
|max_id|query|string|false|none|
|since_id|query|string|false|none|

> Example responses

> 200 Response

```json
[
  "string"
]
```

> 401 Response

```json
{
  "error": "string",
  "error_description": "string"
}
```

<h3 id="getapiv1domainblocks-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|success|Inline|
|401|Unauthorized|Invalid or missing Authorization header|[Error](#schemaerror)|

<h3 id="getapiv1domainblocks-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[string]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## post/api/v1/domain_blocks

> Code samples

```bash
curl https://example.com/api/v1/domain_blocks \
  -X POST \
  -H 'Content-Type: application/form-data' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{"domain":"string"}'
```

`POST /api/v1/domain_blocks`

"Block a domain to:
- hide all public posts from it
- hide all notifications from it
- remove all followers from it
- prevent following new users from it (but does not remove existing follows)"


> Body parameter

```json
{
  "domain": "string"
}
```

<h3 id="postapiv1domainblocks-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» domain|body|string|true|Domain to block.|

> Example responses

> 200 Response

```json
{}
```

> 401 Response

```json
{
  "error": "string",
  "error_description": "string"
}
```

> 422 Response

```json
{
  "error": "string",
  "error_description": "string"
}
```

<h3 id="postapiv1domainblocks-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|success|Inline|
|401|Unauthorized|Invalid or missing Authorization header|[Error](#schemaerror)|
|422|Unprocessable Entity|If `domain` is not provided or contains spaces, the request will fail.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## delete/api/v1/domain_blocks

> Code samples

```bash
curl 'https://example.com/api/v1/domain_blocks?domain=string' \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /api/v1/domain_blocks`

Remove a domain block, if it exists in the user's array of blocked domains.

<h3 id="deleteapiv1domainblocks-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|domain|query|string|true|Domain to unblock.|

> Example responses

> 200 Response

```json
{}
```

> 401 Response

```json
{
  "error": "string",
  "error_description": "string"
}
```

> 422 Response

```json
{
  "error": "string",
  "error_description": "string"
}
```

<h3 id="deleteapiv1domainblocks-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|success|Inline|
|401|Unauthorized|Invalid or missing Authorization header|[Error](#schemaerror)|
|422|Unprocessable Entity|If `domain` is not provided or contains spaces, the request will fail.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## get/api/v1/endorsements

> Code samples

```bash
curl https://example.com/api/v1/endorsements \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/v1/endorsements`

Accounts that the user is currently featuring on their profile.

<h3 id="getapiv1endorsements-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer|false|Maximum number of results to return. Defaults to 40. Paginate using the HTTP Link header.|
|max_id|query|string|false|Internal parameter. Use HTTP Link header from response for pagination|
|since_id|query|string|false|Internal parameter. Use HTTP Link header from response for pagination.|

> Example responses

> 200 Response

```json
[
  {
    "acct": "string",
    "avatar": "string",
    "avatar_static": "string",
    "bot": true,
    "created_at": "1970-01-01T00:00:00Z",
    "discoverable": true,
    "display_name": "string",
    "emojis": [
      {
        "category": "string",
        "shortcode": "string",
        "static_url": "string",
        "url": "string",
        "visible_in_picker": true
      }
    ],
    "fields": [
      {
        "name": "string",
        "value": "string",
        "verified_at": "1970-01-01T00:00:00Z"
      }
    ],
    "followers_count": 0,
    "following_count": 0,
    "header": "string",
    "header_static": "string",
    "id": "string",
    "last_status_at": "1970-01-01T00:00:00Z",
    "locked": true,
    "moved": {},
    "mute_expires_at": "1970-01-01T00:00:00Z",
    "note": "string",
    "source": {
      "fields": [
        {
          "name": "string",
          "value": "string",
          "verified_at": "1970-01-01T00:00:00Z"
        }
      ],
      "follow_requests_count": 0,
      "language": "string",
      "note": "string",
      "privacy": "public",
      "sensitive": true
    },
    "statuses_count": 0,
    "suspended": true,
    "url": "string",
    "username": "string"
  }
]
```

> 401 Response

```json
{
  "error": "string",
  "error_description": "string"
}
```

<h3 id="getapiv1endorsements-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success. Because endorsement ids are private, you must parse the HTTP Link header to find next and previous pages.|Inline|
|401|Unauthorized|Invalid or missing Authorization header|[Error](#schemaerror)|

<h3 id="getapiv1endorsements-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Account](#schemaaccount)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## get/api/v1/favourites

> Code samples

```bash
curl https://example.com/api/v1/favourites \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/v1/favourites`

Statuses the user has favourited.

<h3 id="getapiv1favourites-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|string|false|none|
|max_id|query|string|false|none|
|min_id|query|string|false|none|

> Example responses

> 200 Response

```json
[
  {
    "account": {},
    "application": {
      "client_id": "string",
      "client_secret": "string",
      "name": "string",
      "vapid_key": "string",
      "website": "string"
    },
    "bookmarked": true,
    "card": {
      "author_name": "string",
      "author_url": "string",
      "blurhash": "string",
      "description": "string",
      "height": 0,
      "html": "string",
      "image": "string",
      "provider_name": "string",
      "provider_url": "string",
      "title": "string",
      "type": "link",
      "url": "string",
      "width": 0
    },
    "content": "string",
    "created_at": "1970-01-01T00:00:00Z",
    "emojis": [
      {
        "category": "string",
        "shortcode": "string",
        "static_url": "string",
        "url": "string",
        "visible_in_picker": true
      }
    ],
    "favourited": true,
    "favourites_count": 0,
    "id": "string",
    "in_reply_to_account_id": "string",
    "in_reply_to_id": "string",
    "language": "string",
    "media_attachments": [
      {
        "blurhash": "string",
        "description": "string",
        "id": "string",
        "meta": {},
        "preview_url": "string",
        "remote_url": "string",
        "text_url": "string",
        "type": "unknown",
        "url": "string"
      }
    ],
    "mentions": [
      {
        "acct": "string",
        "id": "string",
        "url": "string",
        "username": "string"
      }
    ],
    "muted": true,
    "pinned": true,
    "poll": {
      "emojis": [
        {
          "category": "string",
          "shortcode": "string",
          "static_url": "string",
          "url": "string",
          "visible_in_picker": true
        }
      ],
      "expired": true,
      "expires_at": "1970-01-01T00:00:00Z",
      "id": "string",
      "multiple": true,
      "options": [
        null
      ],
      "own_votes": [
        0
      ],
      "voted": true,
      "voters_count": 0,
      "votes_count": 0
    },
    "reblog": {},
    "reblogged": true,
    "reblogs_count": 0,
    "replies_count": 0,
    "sensitive": true,
    "spoiler_text": "string",
    "tags": [
      {
        "history": [
          {
            "accounts": "string",
            "day": "string",
            "uses": "string"
          }
        ],
        "name": "string",
        "url": "string"
      }
    ],
    "text": "string",
    "uri": "string",
    "url": "string",
    "visibility": "public"
  }
]
```

> 401 Response

```json
{
  "error": "string",
  "error_description": "string"
}
```

<h3 id="getapiv1favourites-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|success|Inline|
|401|Unauthorized|Invalid or missing Authorization header|[Error](#schemaerror)|

<h3 id="getapiv1favourites-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Status](#schemastatus)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## get/api/v1/featured_tags

> Code samples

```bash
curl https://example.com/api/v1/featured_tags \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/v1/featured_tags`

View your featured tags.

> Example responses

> 200 Response

```json
[
  {
    "id": "string",
    "last_status_at": "1970-01-01T00:00:00Z",
    "name": "string",
    "statuses_count": 0,
    "url": "string"
  }
]
```

> 401 Response

```json
{
  "error": "string",
  "error_description": "string"
}
```

<h3 id="getapiv1featuredtags-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success.|Inline|
|401|Unauthorized|Invalid or missing Authorization header|[Error](#schemaerror)|

<h3 id="getapiv1featuredtags-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[FeaturedTag](#schemafeaturedtag)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## post/api/v1/featured_tags

> Code samples

```bash
curl https://example.com/api/v1/featured_tags \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "name": "string"
  }'
```

`POST /api/v1/featured_tags`

Create a feature a tag.

> Body parameter

```json
{
  "name": "string"
}
```

<h3 id="postapiv1featuredtags-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» name|body|string|false|none|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "last_status_at": "1970-01-01T00:00:00Z",
  "name": "string",
  "statuses_count": 0,
  "url": "string"
}
```

> 422 Response

```json
{
  "error": "string",
  "error_description": "string"
}
```

<h3 id="postapiv1featuredtags-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success.|[FeaturedTag](#schemafeaturedtag)|
|422|Unprocessable Entity|If name is not a valid hashtag, e.g. contains illegal characters or only numbers|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## get/api/v1/featured_tags/suggestions

> Code samples

```bash
curl https://example.com/api/v1/featured_tags/suggestions \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/v1/featured_tags/suggestions`

Shows your 10 most-used tags, with usage history for the past week.

> Example responses

> 200 Response

```json
[
  {
    "id": "string",
    "last_status_at": "1970-01-01T00:00:00Z",
    "name": "string",
    "statuses_count": 0,
    "url": "string"
  }
]
```

> 401 Response

```json
{
  "error": "string",
  "error_description": "string"
}
```

<h3 id="getapiv1featuredtagssuggestions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success.|Inline|
|401|Unauthorized|Invalid or missing Authorization header|[Error](#schemaerror)|

<h3 id="getapiv1featuredtagssuggestions-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[FeaturedTag](#schemafeaturedtag)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## delete/api/v1/featured_tags/{id}

> Code samples

```bash
curl https://example.com/api/v1/featured_tags/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /api/v1/featured_tags/{id}`

Unfeature a tag

<h3 id="deleteapiv1featuredtagsid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The id of the FeaturedTag to be unfeatured.|

> Example responses

> 200 Response

```json
{}
```

> 404 Response

```json
{
  "error": "string",
  "error_description": "string"
}
```

<h3 id="deleteapiv1featuredtagsid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|An empty object will be returned if the featured tag was successfully deleted.|Inline|
|404|Not Found|If the ID does not exist or is not owned by you|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## get/api/v1/filters

> Code samples

```bash
curl https://example.com/api/v1/filters \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/v1/filters`

> Example responses

> 200 Response

```json
[
  {
    "context": [
      "home"
    ],
    "expires_at": "string",
    "id": "string",
    "irreversible": true,
    "phrase": "string",
    "whole_word": true
  }
]
```

> 401 Response

```json
{
  "error": "string",
  "error_description": "string"
}
```

<h3 id="getapiv1filters-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Excerpts of various filters in different contexts.|Inline|
|401|Unauthorized|Invalid or missing Authorization header|[Error](#schemaerror)|

<h3 id="getapiv1filters-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Filter](#schemafilter)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## post/api/v1/filters

> Code samples

```bash
curl https://example.com/api/v1/filters \
  -X POST \
  -H 'Content-Type: application/form-data' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{"context":["home"],"expires_in":0,"irreversible":true,"phrase":"string","whole_word":true}'
```

`POST /api/v1/filters`

> Body parameter

```json
{
  "context": [
    "home"
  ],
  "expires_in": 0,
  "irreversible": true,
  "phrase": "string",
  "whole_word": true
}
```

<h3 id="postapiv1filters-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» context|body|[string]|true|Array of enumerable strings `home`, `notifications`, `public`, `thread`. At least one context must be specified.|
|» expires_in|body|integer|false|Number of seconds from now the filter should expire. Otherwise, null for a filter that doesn't expire.|
|» irreversible|body|boolean|false|Should the server irreversibly drop matching entities from home and notifications?|
|» phrase|body|string|true|Text to be filtered.|
|» whole_word|body|boolean|false|Consider word boundaries?|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» context|home|
|» context|notifications|
|» context|public|
|» context|thread|

> Example responses

> 200 Response

```json
{
  "context": [
    "home"
  ],
  "expires_at": "string",
  "id": "string",
  "irreversible": true,
  "phrase": "string",
  "whole_word": true
}
```

> 401 Response

```json
{
  "error": "string",
  "error_description": "string"
}
```

> 422 Response

```json
{
  "error": "string",
  "error_description": "string"
}
```

<h3 id="postapiv1filters-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The newly-created filter will be returned.|[Filter](#schemafilter)|
|401|Unauthorized|Invalid or missing Authorization header|[Error](#schemaerror)|
|422|Unprocessable Entity|If phrase or context are not provided properly|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## get/api/v1/filters/{id}

> Code samples

```bash
curl https://example.com/api/v1/filters/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/v1/filters/{id}`

Get one filter.

<h3 id="getapiv1filtersid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The id of the account in the database|

> Example responses

> 200 Response

```json
{
  "context": [
    "home"
  ],
  "expires_at": "string",
  "id": "string",
  "irreversible": true,
  "phrase": "string",
  "whole_word": true
}
```

> 401 Response

```json
{
  "error": "string",
  "error_description": "string"
}
```

> 404 Response

```json
{
  "error": "string",
  "error_description": "string"
}
```

<h3 id="getapiv1filtersid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Filter returned successfully.|[Filter](#schemafilter)|
|401|Unauthorized|Invalid or missing Authorization header|[Error](#schemaerror)|
|404|Not Found|Filter ID does not exist, or is not owned by you|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## put/api/v1/filters/{id}

> Code samples

```bash
curl https://example.com/api/v1/filters/string \
  -X PUT \
  -H 'Content-Type: application/form-data' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{"context":["home"],"expires_in":0,"irreversible":true,"phrase":"string","whole_word":true}'
```

`PUT /api/v1/filters/{id}`

Update a filter.

> Body parameter

```json
{
  "context": [
    "home"
  ],
  "expires_in": 0,
  "irreversible": true,
  "phrase": "string",
  "whole_word": true
}
```

<h3 id="putapiv1filtersid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The id of the account in the database|
|body|body|object|false|none|
|» context|body|[string]|true|Array of enumerable strings `home`, `notifications`, `public`, `thread`. At least one context must be specified.|
|» expires_in|body|integer|false|Number of seconds from now the filter should expire. Otherwise, null for a filter that doesn't expire.|
|» irreversible|body|boolean|false|Should the server irreversibly drop matching entities from home and notifications?|
|» phrase|body|string|true|Text to be filtered.|
|» whole_word|body|boolean|false|Consider word boundaries?|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» context|home|
|» context|notifications|
|» context|public|
|» context|thread|

> Example responses

> 200 Response

```json
{
  "context": [
    "home"
  ],
  "expires_at": "string",
  "id": "string",
  "irreversible": true,
  "phrase": "string",
  "whole_word": true
}
```

> 401 Response

```json
{
  "error": "string",
  "error_description": "string"
}
```

> 404 Response

```json
{
  "error": "string",
  "error_description": "string"
}
```

> 422 Response

```json
{
  "error": "string",
  "error_description": "string"
}
```

<h3 id="putapiv1filtersid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Filter updated successfully.|[Filter](#schemafilter)|
|401|Unauthorized|Invalid or missing Authorization header|[Error](#schemaerror)|
|404|Not Found|Filter ID does not exist, or is not owned by you|[Error](#schemaerror)|
|422|Unprocessable Entity|If phrase or context are not provided properly|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## delete/api/v1/filters/{id}

> Code samples

```bash
curl https://example.com/api/v1/filters/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /api/v1/filters/{id}`

Delete a filter.

<h3 id="deleteapiv1filtersid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The id of the account in the database|

> Example responses

> 401 Response

```json
{
  "error": "string",
  "error_description": "string"
}
```

> 404 Response

```json
{
  "error": "string",
  "error_description": "string"
}
```

<h3 id="deleteapiv1filtersid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The filter has been deleted successfully, so an empty object will be returned.|None|
|401|Unauthorized|Invalid or missing Authorization header|[Error](#schemaerror)|
|404|Not Found|Filter ID does not exist, or is not owned by you|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## get/api/v1/follow_requests

> Code samples

```bash
curl https://example.com/api/v1/follow_requests \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/v1/follow_requests`

Pending Follows

<h3 id="getapiv1followrequests-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer|false|Maximum number of results to return. Defaults to 40. Paginate using the HTTP Link header.|

> Example responses

> 200 Response

```json
[
  {
    "acct": "string",
    "avatar": "string",
    "avatar_static": "string",
    "bot": true,
    "created_at": "1970-01-01T00:00:00Z",
    "discoverable": true,
    "display_name": "string",
    "emojis": [
      {
        "category": "string",
        "shortcode": "string",
        "static_url": "string",
        "url": "string",
        "visible_in_picker": true
      }
    ],
    "fields": [
      {
        "name": "string",
        "value": "string",
        "verified_at": "1970-01-01T00:00:00Z"
      }
    ],
    "followers_count": 0,
    "following_count": 0,
    "header": "string",
    "header_static": "string",
    "id": "string",
    "last_status_at": "1970-01-01T00:00:00Z",
    "locked": true,
    "moved": {},
    "mute_expires_at": "1970-01-01T00:00:00Z",
    "note": "string",
    "source": {
      "fields": [
        {
          "name": "string",
          "value": "string",
          "verified_at": "1970-01-01T00:00:00Z"
        }
      ],
      "follow_requests_count": 0,
      "language": "string",
      "note": "string",
      "privacy": "public",
      "sensitive": true
    },
    "statuses_count": 0,
    "suspended": true,
    "url": "string",
    "username": "string"
  }
]
```

> 401 Response

```json
{
  "error": "string",
  "error_description": "string"
}
```

<h3 id="getapiv1followrequests-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Accounts that are requesting a follow.|Inline|
|401|Unauthorized|Invalid or missing Authorization header|[Error](#schemaerror)|

<h3 id="getapiv1followrequests-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Account](#schemaaccount)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## post/api/v1/follow_requests/{id}/authorize

> Code samples

```bash
curl https://example.com/api/v1/follow_requests/string/authorize \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /api/v1/follow_requests/{id}/authorize`

Accept Follow

<h3 id="postapiv1followrequestsidauthorize-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The id of the account in the database|

> Example responses

> 200 Response

```json
{
  "blocked_by": true,
  "blocking": true,
  "domain_blocking": true,
  "endorsed": true,
  "followed_by": true,
  "following": true,
  "id": "string",
  "muting": true,
  "muting_notifications": true,
  "note": "string",
  "notifying": true,
  "requested": true,
  "showing_reblogs": true
}
```

> 401 Response

```json
{
  "error": "string",
  "error_description": "string"
}
```

> 404 Response

```json
{
  "error": "string",
  "error_description": "string"
}
```

<h3 id="postapiv1followrequestsidauthorize-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Your Relationship with this account should be updated so that you are followed_by this account.|[Relationship](#schemarelationship)|
|401|Unauthorized|Invalid or missing Authorization header|[Error](#schemaerror)|
|404|Not Found|No pending follow request from that user ID|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## post/api/v1/follow_requests/{id}/reject

> Code samples

```bash
curl https://example.com/api/v1/follow_requests/string/reject \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /api/v1/follow_requests/{id}/reject`

Accept Follow

<h3 id="postapiv1followrequestsidreject-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The id of the account in the database|

> Example responses

> 200 Response

```json
{
  "blocked_by": true,
  "blocking": true,
  "domain_blocking": true,
  "endorsed": true,
  "followed_by": true,
  "following": true,
  "id": "string",
  "muting": true,
  "muting_notifications": true,
  "note": "string",
  "notifying": true,
  "requested": true,
  "showing_reblogs": true
}
```

> 401 Response

```json
{
  "error": "string",
  "error_description": "string"
}
```

> 404 Response

```json
{
  "error": "string",
  "error_description": "string"
}
```

<h3 id="postapiv1followrequestsidreject-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Your Relationship with this Account should be unchanged.|[Relationship](#schemarelationship)|
|401|Unauthorized|Invalid or missing Authorization header|[Error](#schemaerror)|
|404|Not Found|No pending follow request from that user ID|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## get/api/v1/instance

> Code samples

```bash
curl https://example.com/api/v1/instance \
  -H 'Accept: application/json'
```

`GET /api/v1/instance`

Information about the server.

> Example responses

> 200 Response

```json
{
  "approval_required": true,
  "contact_account": {
    "acct": "string",
    "avatar": "string",
    "avatar_static": "string",
    "bot": true,
    "created_at": "1970-01-01T00:00:00Z",
    "discoverable": true,
    "display_name": "string",
    "emojis": [
      {
        "category": "string",
        "shortcode": "string",
        "static_url": "string",
        "url": "string",
        "visible_in_picker": true
      }
    ],
    "fields": [
      {
        "name": "string",
        "value": "string",
        "verified_at": "1970-01-01T00:00:00Z"
      }
    ],
    "followers_count": 0,
    "following_count": 0,
    "header": "string",
    "header_static": "string",
    "id": "string",
    "last_status_at": "1970-01-01T00:00:00Z",
    "locked": true,
    "moved": {},
    "mute_expires_at": "1970-01-01T00:00:00Z",
    "note": "string",
    "source": {
      "fields": [
        {
          "name": "string",
          "value": "string",
          "verified_at": "1970-01-01T00:00:00Z"
        }
      ],
      "follow_requests_count": 0,
      "language": "string",
      "note": "string",
      "privacy": "public",
      "sensitive": true
    },
    "statuses_count": 0,
    "suspended": true,
    "url": "string",
    "username": "string"
  },
  "description": "string",
  "email": "string",
  "invites_enabled": true,
  "languages": [
    "string"
  ],
  "registrations": true,
  "short_description": "string",
  "stats": {},
  "thumbnail": "string",
  "title": "string",
  "uri": "string",
  "urls": {},
  "version": "string"
}
```

<h3 id="getapiv1instance-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Result|[Instance](#schemainstance)|

<aside class="success">
This operation does not require authentication
</aside>

## get/api/v1/instance/activity

> Code samples

```bash
curl https://example.com/api/v1/instance/activity \
  -H 'Accept: application/json'
```

`GET /api/v1/instance/activity`

Instance activity over the last 3 months, binned weekly.

> Example responses

> 200 Response

```json
[
  {
    "logins": "string",
    "registrations": "string",
    "statuses": "string",
    "week": "string"
  }
]
```

<h3 id="getapiv1instanceactivity-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Domains that this instance is aware of.|Inline|

<h3 id="getapiv1instanceactivity-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Activity](#schemaactivity)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## get/api/v1/instance/peers

> Code samples

```bash
curl https://example.com/api/v1/instance/peers \
  -H 'Accept: application/json'
```

`GET /api/v1/instance/peers`

Information about the server.

> Example responses

> 200 Response

```json
[
  "string"
]
```

<h3 id="getapiv1instancepeers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Domains that this instance is aware of.|Inline|

<h3 id="getapiv1instancepeers-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[string]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## get/api/v1/lists

> Code samples

```bash
curl https://example.com/api/v1/lists \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/v1/lists`

Fetch all lists that the user owns.

> Example responses

> 200 Response

```json
[
  {
    "id": "string",
    "replies_policy": "followed",
    "title": "string"
  }
]
```

> 401 Response

```json
{
  "error": "string",
  "error_description": "string"
}
```

<h3 id="getapiv1lists-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Use id as a parameter for related API calls.|Inline|
|401|Unauthorized|Invalid or missing Authorization header|[Error](#schemaerror)|

<h3 id="getapiv1lists-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[List](#schemalist)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## put/api/v1/lists

> Code samples

```bash
curl https://example.com/api/v1/lists \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "replies_policy": "list",
    "title": "string"
  }'
```

`PUT /api/v1/lists`

Change the title of a list, or which replies to show.

> Body parameter

```json
{
  "replies_policy": "list",
  "title": "string"
}
```

<h3 id="putapiv1lists-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» replies_policy|body|string|false|Enumerable oneOf followed list none. Defaults to list.|
|» title|body|string|false|The title of the list to be created.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» replies_policy|followed|
|» replies_policy|list|
|» replies_policy|none|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "replies_policy": "followed",
  "title": "string"
}
```

> 401 Response

```json
{
  "error": "string",
  "error_description": "string"
}
```

> 422 Response

```json
{
  "error": "string",
  "error_description": "string"
}
```

<h3 id="putapiv1lists-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list was updated successfully|[List](#schemalist)|
|401|Unauthorized|Invalid or missing Authorization header|[Error](#schemaerror)|
|422|Unprocessable Entity|Unprocessable Entity|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## post/api/v1/lists

> Code samples

```bash
curl https://example.com/api/v1/lists \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "replies_policy": "list",
    "title": "string"
  }'
```

`POST /api/v1/lists`

Create a new list.

> Body parameter

```json
{
  "replies_policy": "list",
  "title": "string"
}
```

<h3 id="postapiv1lists-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» replies_policy|body|string|false|Enumerable oneOf followed list none. Defaults to list.|
|» title|body|string|true|The title of the list to be created.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» replies_policy|followed|
|» replies_policy|list|
|» replies_policy|none|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "replies_policy": "followed",
  "title": "string"
}
```

> 401 Response

```json
{
  "error": "string",
  "error_description": "string"
}
```

<h3 id="postapiv1lists-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list was created successfully|[List](#schemalist)|
|401|Unauthorized|Invalid or missing Authorization header|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## delete/api/v1/lists

> Code samples

```bash
curl https://example.com/api/v1/lists \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /api/v1/lists`

Delete a list

> Example responses

> 200 Response

```json
{}
```

> 401 Response

```json
{
  "error": "string",
  "error_description": "string"
}
```

> 404 Response

```json
{
  "error": "string",
  "error_description": "string"
}
```

<h3 id="deleteapiv1lists-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list was deleted successfully|Inline|
|401|Unauthorized|Invalid or missing Authorization header|[Error](#schemaerror)|
|404|Not Found|Not found|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## get/api/v1/lists/{id}

> Code samples

```bash
curl https://example.com/api/v1/lists/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/v1/lists/{id}`

Remove converstation

<h3 id="getapiv1listsid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|ID of the list in the database|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "replies_policy": "followed",
  "title": "string"
}
```

> 401 Response

```json
{
  "error": "string",
  "error_description": "string"
}
```

> 404 Response

```json
{
  "error": "string",
  "error_description": "string"
}
```

<h3 id="getapiv1listsid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The value of unread has been changed to false..|[List](#schemalist)|
|401|Unauthorized|Invalid or missing Authorization header|[Error](#schemaerror)|
|404|Not Found|Not Found|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## get/api/v1/lists/{id}/accounts

> Code samples

```bash
curl https://example.com/api/v1/lists/string/accounts \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/v1/lists/{id}/accounts`

View accounts in List

<h3 id="getapiv1listsidaccounts-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer|false|Maximum number of results. Defaults to 40. Max 40. Set to 0 in order to get all accounts without pagination. Pagination is done with the HTTP Link header.|
|max_id|query|string|false|Return results older than ID|
|since_id|query|string|false|Return results newer than ID|
|id|path|string|true|ID of the list in the database|

> Example responses

> 200 Response

```json
[
  {
    "acct": "string",
    "avatar": "string",
    "avatar_static": "string",
    "bot": true,
    "created_at": "1970-01-01T00:00:00Z",
    "discoverable": true,
    "display_name": "string",
    "emojis": [
      {
        "category": "string",
        "shortcode": "string",
        "static_url": "string",
        "url": "string",
        "visible_in_picker": true
      }
    ],
    "fields": [
      {
        "name": "string",
        "value": "string",
        "verified_at": "1970-01-01T00:00:00Z"
      }
    ],
    "followers_count": 0,
    "following_count": 0,
    "header": "string",
    "header_static": "string",
    "id": "string",
    "last_status_at": "1970-01-01T00:00:00Z",
    "locked": true,
    "moved": {},
    "mute_expires_at": "1970-01-01T00:00:00Z",
    "note": "string",
    "source": {
      "fields": [
        {
          "name": "string",
          "value": "string",
          "verified_at": "1970-01-01T00:00:00Z"
        }
      ],
      "follow_requests_count": 0,
      "language": "string",
      "note": "string",
      "privacy": "public",
      "sensitive": true
    },
    "statuses_count": 0,
    "suspended": true,
    "url": "string",
    "username": "string"
  }
]
```

> 401 Response

```json
{
  "error": "string",
  "error_description": "string"
}
```

> 404 Response

```json
{
  "error": "string",
  "error_description": "string"
}
```

<h3 id="getapiv1listsidaccounts-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|401|Unauthorized|Invalid or missing Authorization header|[Error](#schemaerror)|
|404|Not Found|Not Found|[Error](#schemaerror)|

<h3 id="getapiv1listsidaccounts-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Account](#schemaaccount)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## post/api/v1/lists/{id}/accounts

> Code samples

```bash
curl https://example.com/api/v1/lists/string/accounts \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "account_ids": [
      "string"
    ]
  }'
```

`POST /api/v1/lists/{id}/accounts`

Add accounts to the given list. Note that the user must be following these accounts.

> Body parameter

```json
{
  "account_ids": [
    "string"
  ]
}
```

<h3 id="postapiv1listsidaccounts-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|ID of the list in the database|
|body|body|object|false|none|
|» account_ids|body|[string]|true|Array of account IDs to add to the list.|

> Example responses

> 200 Response

```json
{}
```

> 401 Response

```json
{
  "error": "string",
  "error_description": "string"
}
```

> 404 Response

```json
{
  "error": "string",
  "error_description": "string"
}
```

> 422 Response

```json
{
  "error": "string",
  "error_description": "string"
}
```

<h3 id="postapiv1listsidaccounts-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|401|Unauthorized|Invalid or missing Authorization header|[Error](#schemaerror)|
|404|Not Found|Not Found|[Error](#schemaerror)|
|422|Unprocessable Entity|Unprocessable Entity|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## delete/api/v1/lists/{id}/accounts

> Code samples

```bash
curl 'https://example.com/api/v1/lists/string/accounts?account_ids=string' \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /api/v1/lists/{id}/accounts`

Remove accounts from the given list.

<h3 id="deleteapiv1listsidaccounts-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|account_ids|query|[string]|true|Array of account IDs to add to the list.|
|id|path|string|true|ID of the list in the database|

> Example responses

> 200 Response

```json
{}
```

> 401 Response

```json
{
  "error": "string",
  "error_description": "string"
}
```

> 404 Response

```json
{
  "error": "string",
  "error_description": "string"
}
```

> 422 Response

```json
{
  "error": "string",
  "error_description": "string"
}
```

<h3 id="deleteapiv1listsidaccounts-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Account was successfully removed from the list, or it was already not in the list.|Inline|
|401|Unauthorized|Invalid or missing Authorization header|[Error](#schemaerror)|
|404|Not Found|Not Found|[Error](#schemaerror)|
|422|Unprocessable Entity|Unprocessable Entity|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## get/api/v1/markers

> Code samples

```bash
curl 'https://example.com/api/v1/markers?timeline=%7B%7D' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/v1/markers`

Get saved timeline position

<h3 id="getapiv1markers-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|timeline|query|[object]|true|Array of markers to fetch. String enum anyOf home, notifications. If not provided, an empty object will be returned.|

> Example responses

> 200 Response

```json
{}
```

> 401 Response

```json
{
  "error": "string",
  "error_description": "string"
}
```

<h3 id="getapiv1markers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Account was successfully removed from the list, or it was already not in the list.|Inline|
|401|Unauthorized|Invalid or missing Authorization header|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## post/api/v1/markers

> Code samples

```bash
curl https://example.com/api/v1/markers \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{}'
```

`POST /api/v1/markers`

Get saved timeline position

> Body parameter

```json
{}
```

<h3 id="postapiv1markers-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|

> Example responses

> 200 Response

```json
{}
```

> 401 Response

```json
{
  "error": "string",
  "error_description": "string"
}
```

> 409 Response

```json
{
  "error": "string",
  "error_description": "string"
}
```

<h3 id="postapiv1markers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Account was successfully removed from the list, or it was already not in the list.|Inline|
|401|Unauthorized|Invalid or missing Authorization header|[Error](#schemaerror)|
|409|Conflict|Conflict, If object is stale while being updated, an error will occur.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## post/api/v1/media

> Code samples

```bash
curl https://example.com/api/v1/media \
  -X POST \
  -H 'Content-Type: application/form-data' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{"description":"string","file":"string","focus":"string","thumbnail":"string"}'
```

`POST /api/v1/media`

Creates an attachment to be used with a new status.

> Body parameter

```json
{
  "description": "string",
  "file": "string",
  "focus": "string",
  "thumbnail": "string"
}
```

<h3 id="postapiv1media-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» description|body|string|false|A plain-text description of the media, for accessibility purposes.|
|» file|body|string(binary)|true|The file to be attached, using multipart form data.|
|» focus|body|string|false|Two floating points (x,y), comma-delimited, ranging from -1.0 to 1.0 (see “Focal points” below)|
|» thumbnail|body|string(binary)|false|The custom thumbnail of the media to be attached, using multipart form data.|

> Example responses

> 200 Response

```json
{
  "blurhash": "string",
  "description": "string",
  "id": "string",
  "meta": {},
  "preview_url": "string",
  "remote_url": "string",
  "text_url": "string",
  "type": "unknown",
  "url": "string"
}
```

> 401 Response

```json
{
  "error": "string",
  "error_description": "string"
}
```

> 422 Response

```json
{
  "error": "string",
  "error_description": "string"
}
```

<h3 id="postapiv1media-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Attachment created successfully. Note that the Attachment will be created even if the file is not understood correctly.|[Attachment](#schemaattachment)|
|401|Unauthorized|Invalid or missing Authorization header|[Error](#schemaerror)|
|422|Unprocessable Entity|File or file type is unsupported or invalid|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## get/api/v1/media/{id}

> Code samples

```bash
curl https://example.com/api/v1/media/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/v1/media/{id}`

Get an attachement.

<h3 id="getapiv1mediaid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The id of the Attachment entity to be updated.|

> Example responses

> 200 Response

```json
{
  "blurhash": "string",
  "description": "string",
  "id": "string",
  "meta": {},
  "preview_url": "string",
  "remote_url": "string",
  "text_url": "string",
  "type": "unknown",
  "url": "string"
}
```

> 206 Response

```json
{
  "blurhash": "string",
  "description": "string",
  "id": "string",
  "meta": {},
  "preview_url": "string",
  "remote_url": "string",
  "text_url": "string",
  "type": "unknown",
  "url": "string"
}
```

> 401 Response

```json
{
  "error": "string",
  "error_description": "string"
}
```

> 404 Response

```json
{
  "error": "string",
  "error_description": "string"
}
```

> 422 Response

```json
{
  "error": "string",
  "error_description": "string"
}
```

<h3 id="getapiv1mediaid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Attachment created successfully. Note that the Attachment will be created even if the file is not understood correctly.|[Attachment](#schemaattachment)|
|206|Partial Content|Attachment is not yet ready.|[Attachment](#schemaattachment)|
|401|Unauthorized|Invalid or missing Authorization header|[Error](#schemaerror)|
|404|Not Found|Attachment does not exist, is deleted, or was not created by you|[Error](#schemaerror)|
|422|Unprocessable Entity|File or file type is unsupported or invalid|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## post/api/v1/media/{id}

> Code samples

```bash
curl https://example.com/api/v1/media/string \
  -X POST \
  -H 'Content-Type: application/form-data' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{"description":"string","file":"string","focus":"string","thumbnail":"string"}'
```

`POST /api/v1/media/{id}`

Update an Attachment, before it is attached to a status and posted.

> Body parameter

```json
{
  "description": "string",
  "file": "string",
  "focus": "string",
  "thumbnail": "string"
}
```

<h3 id="postapiv1mediaid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The id of the Attachment entity to be updated.|
|body|body|object|false|none|
|» description|body|string|false|A plain-text description of the media, for accessibility purposes.|
|» file|body|string(binary)|true|The file to be attached, using multipart form data.|
|» focus|body|string|false|Two floating points (x,y), comma-delimited, ranging from -1.0 to 1.0 (see “Focal points” below)|
|» thumbnail|body|string(binary)|false|The custom thumbnail of the media to be attached, using multipart form data.|

> Example responses

> 200 Response

```json
{
  "blurhash": "string",
  "description": "string",
  "id": "string",
  "meta": {},
  "preview_url": "string",
  "remote_url": "string",
  "text_url": "string",
  "type": "unknown",
  "url": "string"
}
```

> 401 Response

```json
{
  "error": "string",
  "error_description": "string"
}
```

> 404 Response

```json
{
  "error": "string",
  "error_description": "string"
}
```

> 422 Response

```json
{
  "error": "string",
  "error_description": "string"
}
```

<h3 id="postapiv1mediaid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Attachment updated successfully.|[Attachment](#schemaattachment)|
|401|Unauthorized|Invalid or missing Authorization header|[Error](#schemaerror)|
|404|Not Found|Attachment does not exist, is deleted, or was not created by you|[Error](#schemaerror)|
|422|Unprocessable Entity|File or file type is unsupported or invalid|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## get/api/v1/mutes

> Code samples

```bash
curl https://example.com/api/v1/mutes \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/v1/mutes`

Accounts the user has muted.

<h3 id="getapiv1mutes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|string|false|none|
|max_id|query|string|false|none|
|since_id|query|string|false|none|

> Example responses

> 200 Response

```json
[
  {
    "acct": "string",
    "avatar": "string",
    "avatar_static": "string",
    "bot": true,
    "created_at": "1970-01-01T00:00:00Z",
    "discoverable": true,
    "display_name": "string",
    "emojis": [
      {
        "category": "string",
        "shortcode": "string",
        "static_url": "string",
        "url": "string",
        "visible_in_picker": true
      }
    ],
    "fields": [
      {
        "name": "string",
        "value": "string",
        "verified_at": "1970-01-01T00:00:00Z"
      }
    ],
    "followers_count": 0,
    "following_count": 0,
    "header": "string",
    "header_static": "string",
    "id": "string",
    "last_status_at": "1970-01-01T00:00:00Z",
    "locked": true,
    "moved": {},
    "mute_expires_at": "1970-01-01T00:00:00Z",
    "note": "string",
    "source": {
      "fields": [
        {
          "name": "string",
          "value": "string",
          "verified_at": "1970-01-01T00:00:00Z"
        }
      ],
      "follow_requests_count": 0,
      "language": "string",
      "note": "string",
      "privacy": "public",
      "sensitive": true
    },
    "statuses_count": 0,
    "suspended": true,
    "url": "string",
    "username": "string"
  }
]
```

> 401 Response

```json
{
  "error": "string",
  "error_description": "string"
}
```

<h3 id="getapiv1mutes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|success|Inline|
|401|Unauthorized|Invalid or missing Authorization header|[Error](#schemaerror)|

<h3 id="getapiv1mutes-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Account](#schemaaccount)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## get/api/v1/notifications

> Code samples

```bash
curl https://example.com/api/v1/notifications \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/v1/notifications`

Notifications concerning the user. This API returns Link headers containing links to the next/previous page. However, the links can also be constructed dynamically using query params and id values.

<h3 id="getapiv1notifications-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer|false|Max number of results to return. Defaults to 20.|
|max_id|query|string|false|Return results older than ID|
|since_id|query|string|false|Return results newer than ID|
|min_id|query|string|false|Return results immediately newer than ID|
|exclude_types|query|[string]|false|Array of types to exclude (follow, favourite, reblog, mention, poll, follow_request)|
|account_id|query|string|false|Return only notifications received from this account|

> Example responses

> 200 Response

```json
[
  {
    "account": {
      "acct": "string",
      "avatar": "string",
      "avatar_static": "string",
      "bot": true,
      "created_at": "1970-01-01T00:00:00Z",
      "discoverable": true,
      "display_name": "string",
      "emojis": [
        {
          "category": "string",
          "shortcode": "string",
          "static_url": "string",
          "url": "string",
          "visible_in_picker": true
        }
      ],
      "fields": [
        {
          "name": "string",
          "value": "string",
          "verified_at": "1970-01-01T00:00:00Z"
        }
      ],
      "followers_count": 0,
      "following_count": 0,
      "header": "string",
      "header_static": "string",
      "id": "string",
      "last_status_at": "1970-01-01T00:00:00Z",
      "locked": true,
      "moved": {},
      "mute_expires_at": "1970-01-01T00:00:00Z",
      "note": "string",
      "source": {
        "fields": [
          {
            "name": "string",
            "value": "string",
            "verified_at": "1970-01-01T00:00:00Z"
          }
        ],
        "follow_requests_count": 0,
        "language": "string",
        "note": "string",
        "privacy": "public",
        "sensitive": true
      },
      "statuses_count": 0,
      "suspended": true,
      "url": "string",
      "username": "string"
    },
    "created_at": "1970-01-01T00:00:00Z",
    "id": "string",
    "status": {
      "account": {},
      "application": {
        "client_id": "string",
        "client_secret": "string",
        "name": "string",
        "vapid_key": "string",
        "website": "string"
      },
      "bookmarked": true,
      "card": {
        "author_name": "string",
        "author_url": "string",
        "blurhash": "string",
        "description": "string",
        "height": 0,
        "html": "string",
        "image": "string",
        "provider_name": "string",
        "provider_url": "string",
        "title": "string",
        "type": "link",
        "url": "string",
        "width": 0
      },
      "content": "string",
      "created_at": "1970-01-01T00:00:00Z",
      "emojis": [
        {
          "category": "string",
          "shortcode": "string",
          "static_url": "string",
          "url": "string",
          "visible_in_picker": true
        }
      ],
      "favourited": true,
      "favourites_count": 0,
      "id": "string",
      "in_reply_to_account_id": "string",
      "in_reply_to_id": "string",
      "language": "string",
      "media_attachments": [
        {
          "blurhash": "string",
          "description": "string",
          "id": "string",
          "meta": {},
          "preview_url": "string",
          "remote_url": "string",
          "text_url": "string",
          "type": "unknown",
          "url": "string"
        }
      ],
      "mentions": [
        {
          "acct": "string",
          "id": "string",
          "url": "string",
          "username": "string"
        }
      ],
      "muted": true,
      "pinned": true,
      "poll": {
        "emojis": [
          {
            "category": "string",
            "shortcode": "string",
            "static_url": "string",
            "url": "string",
            "visible_in_picker": true
          }
        ],
        "expired": true,
        "expires_at": "1970-01-01T00:00:00Z",
        "id": "string",
        "multiple": true,
        "options": [
          null
        ],
        "own_votes": [
          0
        ],
        "voted": true,
        "voters_count": 0,
        "votes_count": 0
      },
      "reblog": {},
      "reblogged": true,
      "reblogs_count": 0,
      "replies_count": 0,
      "sensitive": true,
      "spoiler_text": "string",
      "tags": [
        {
          "history": [
            {
              "accounts": "string",
              "day": "string",
              "uses": "string"
            }
          ],
          "name": "string",
          "url": "string"
        }
      ],
      "text": "string",
      "uri": "string",
      "url": "string",
      "visibility": "public"
    },
    "type": "follow"
  }
]
```

> 401 Response

```json
{
  "error": "string",
  "error_description": "string"
}
```

<h3 id="getapiv1notifications-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|401|Unauthorized|Invalid or missing Authorization header|[Error](#schemaerror)|

<h3 id="getapiv1notifications-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Notification](#schemanotification)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## post/api/v1/notifications/clear

> Code samples

```bash
curl https://example.com/api/v1/notifications/clear \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /api/v1/notifications/clear`

Clear all notifications from the server.

> Example responses

> 200 Response

```json
{}
```

> 401 Response

```json
{
  "error": "string",
  "error_description": "string"
}
```

<h3 id="postapiv1notificationsclear-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|401|Unauthorized|Invalid or missing Authorization header|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## get/api/v1/notifications/{id}

> Code samples

```bash
curl https://example.com/api/v1/notifications/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/v1/notifications/{id}`

View information about a notification with a given ID.

<h3 id="getapiv1notificationsid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|ID of the notification in the database.|

> Example responses

> 200 Response

```json
{
  "account": {
    "acct": "string",
    "avatar": "string",
    "avatar_static": "string",
    "bot": true,
    "created_at": "1970-01-01T00:00:00Z",
    "discoverable": true,
    "display_name": "string",
    "emojis": [
      {
        "category": "string",
        "shortcode": "string",
        "static_url": "string",
        "url": "string",
        "visible_in_picker": true
      }
    ],
    "fields": [
      {
        "name": "string",
        "value": "string",
        "verified_at": "1970-01-01T00:00:00Z"
      }
    ],
    "followers_count": 0,
    "following_count": 0,
    "header": "string",
    "header_static": "string",
    "id": "string",
    "last_status_at": "1970-01-01T00:00:00Z",
    "locked": true,
    "moved": {},
    "mute_expires_at": "1970-01-01T00:00:00Z",
    "note": "string",
    "source": {
      "fields": [
        {
          "name": "string",
          "value": "string",
          "verified_at": "1970-01-01T00:00:00Z"
        }
      ],
      "follow_requests_count": 0,
      "language": "string",
      "note": "string",
      "privacy": "public",
      "sensitive": true
    },
    "statuses_count": 0,
    "suspended": true,
    "url": "string",
    "username": "string"
  },
  "created_at": "1970-01-01T00:00:00Z",
  "id": "string",
  "status": {
    "account": {},
    "application": {
      "client_id": "string",
      "client_secret": "string",
      "name": "string",
      "vapid_key": "string",
      "website": "string"
    },
    "bookmarked": true,
    "card": {
      "author_name": "string",
      "author_url": "string",
      "blurhash": "string",
      "description": "string",
      "height": 0,
      "html": "string",
      "image": "string",
      "provider_name": "string",
      "provider_url": "string",
      "title": "string",
      "type": "link",
      "url": "string",
      "width": 0
    },
    "content": "string",
    "created_at": "1970-01-01T00:00:00Z",
    "emojis": [
      {
        "category": "string",
        "shortcode": "string",
        "static_url": "string",
        "url": "string",
        "visible_in_picker": true
      }
    ],
    "favourited": true,
    "favourites_count": 0,
    "id": "string",
    "in_reply_to_account_id": "string",
    "in_reply_to_id": "string",
    "language": "string",
    "media_attachments": [
      {
        "blurhash": "string",
        "description": "string",
        "id": "string",
        "meta": {},
        "preview_url": "string",
        "remote_url": "string",
        "text_url": "string",
        "type": "unknown",
        "url": "string"
      }
    ],
    "mentions": [
      {
        "acct": "string",
        "id": "string",
        "url": "string",
        "username": "string"
      }
    ],
    "muted": true,
    "pinned": true,
    "poll": {
      "emojis": [
        {
          "category": "string",
          "shortcode": "string",
          "static_url": "string",
          "url": "string",
          "visible_in_picker": true
        }
      ],
      "expired": true,
      "expires_at": "1970-01-01T00:00:00Z",
      "id": "string",
      "multiple": true,
      "options": [
        null
      ],
      "own_votes": [
        0
      ],
      "voted": true,
      "voters_count": 0,
      "votes_count": 0
    },
    "reblog": {},
    "reblogged": true,
    "reblogs_count": 0,
    "replies_count": 0,
    "sensitive": true,
    "spoiler_text": "string",
    "tags": [
      {
        "history": [
          {
            "accounts": "string",
            "day": "string",
            "uses": "string"
          }
        ],
        "name": "string",
        "url": "string"
      }
    ],
    "text": "string",
    "uri": "string",
    "url": "string",
    "visibility": "public"
  },
  "type": "follow"
}
```

> 401 Response

```json
{
  "error": "string",
  "error_description": "string"
}
```

<h3 id="getapiv1notificationsid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[Notification](#schemanotification)|
|401|Unauthorized|Invalid or missing Authorization header|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## post/api/v1/notifications/{id}/dismiss

> Code samples

```bash
curl https://example.com/api/v1/notifications/string/dismiss \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /api/v1/notifications/{id}/dismiss`

Clear a single notification from the server.

<h3 id="postapiv1notificationsiddismiss-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|ID of the notification in the database.|

> Example responses

> 200 Response

```json
{
  "account": {
    "acct": "string",
    "avatar": "string",
    "avatar_static": "string",
    "bot": true,
    "created_at": "1970-01-01T00:00:00Z",
    "discoverable": true,
    "display_name": "string",
    "emojis": [
      {
        "category": "string",
        "shortcode": "string",
        "static_url": "string",
        "url": "string",
        "visible_in_picker": true
      }
    ],
    "fields": [
      {
        "name": "string",
        "value": "string",
        "verified_at": "1970-01-01T00:00:00Z"
      }
    ],
    "followers_count": 0,
    "following_count": 0,
    "header": "string",
    "header_static": "string",
    "id": "string",
    "last_status_at": "1970-01-01T00:00:00Z",
    "locked": true,
    "moved": {},
    "mute_expires_at": "1970-01-01T00:00:00Z",
    "note": "string",
    "source": {
      "fields": [
        {
          "name": "string",
          "value": "string",
          "verified_at": "1970-01-01T00:00:00Z"
        }
      ],
      "follow_requests_count": 0,
      "language": "string",
      "note": "string",
      "privacy": "public",
      "sensitive": true
    },
    "statuses_count": 0,
    "suspended": true,
    "url": "string",
    "username": "string"
  },
  "created_at": "1970-01-01T00:00:00Z",
  "id": "string",
  "status": {
    "account": {},
    "application": {
      "client_id": "string",
      "client_secret": "string",
      "name": "string",
      "vapid_key": "string",
      "website": "string"
    },
    "bookmarked": true,
    "card": {
      "author_name": "string",
      "author_url": "string",
      "blurhash": "string",
      "description": "string",
      "height": 0,
      "html": "string",
      "image": "string",
      "provider_name": "string",
      "provider_url": "string",
      "title": "string",
      "type": "link",
      "url": "string",
      "width": 0
    },
    "content": "string",
    "created_at": "1970-01-01T00:00:00Z",
    "emojis": [
      {
        "category": "string",
        "shortcode": "string",
        "static_url": "string",
        "url": "string",
        "visible_in_picker": true
      }
    ],
    "favourited": true,
    "favourites_count": 0,
    "id": "string",
    "in_reply_to_account_id": "string",
    "in_reply_to_id": "string",
    "language": "string",
    "media_attachments": [
      {
        "blurhash": "string",
        "description": "string",
        "id": "string",
        "meta": {},
        "preview_url": "string",
        "remote_url": "string",
        "text_url": "string",
        "type": "unknown",
        "url": "string"
      }
    ],
    "mentions": [
      {
        "acct": "string",
        "id": "string",
        "url": "string",
        "username": "string"
      }
    ],
    "muted": true,
    "pinned": true,
    "poll": {
      "emojis": [
        {
          "category": "string",
          "shortcode": "string",
          "static_url": "string",
          "url": "string",
          "visible_in_picker": true
        }
      ],
      "expired": true,
      "expires_at": "1970-01-01T00:00:00Z",
      "id": "string",
      "multiple": true,
      "options": [
        null
      ],
      "own_votes": [
        0
      ],
      "voted": true,
      "voters_count": 0,
      "votes_count": 0
    },
    "reblog": {},
    "reblogged": true,
    "reblogs_count": 0,
    "replies_count": 0,
    "sensitive": true,
    "spoiler_text": "string",
    "tags": [
      {
        "history": [
          {
            "accounts": "string",
            "day": "string",
            "uses": "string"
          }
        ],
        "name": "string",
        "url": "string"
      }
    ],
    "text": "string",
    "uri": "string",
    "url": "string",
    "visibility": "public"
  },
  "type": "follow"
}
```

> 401 Response

```json
{
  "error": "string",
  "error_description": "string"
}
```

<h3 id="postapiv1notificationsiddismiss-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Notification with given ID successfully dismissed|[Notification](#schemanotification)|
|401|Unauthorized|Invalid or missing Authorization header|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## get/api/v1/polls/{id}

> Code samples

```bash
curl https://example.com/api/v1/polls/string \
  -H 'Accept: application/json'
```

`GET /api/v1/polls/{id}`

View a poll.

<h3 id="getapiv1pollsid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|ID of the poll in the database.|

> Example responses

> 200 Response

```json
{
  "emojis": [
    {
      "category": "string",
      "shortcode": "string",
      "static_url": "string",
      "url": "string",
      "visible_in_picker": true
    }
  ],
  "expired": true,
  "expires_at": "1970-01-01T00:00:00Z",
  "id": "string",
  "multiple": true,
  "options": [
    null
  ],
  "own_votes": [
    0
  ],
  "voted": true,
  "voters_count": 0,
  "votes_count": 0
}
```

> 404 Response

```json
{
  "error": "string",
  "error_description": "string"
}
```

<h3 id="getapiv1pollsid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Get one poll.|[Poll](#schemapoll)|
|404|Not Found|Poll does not exist, or poll's parent status is private|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## post/api/v1/polls/{id}

> Code samples

```bash
curl https://example.com/api/v1/polls/string \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "choices": [
      "string"
    ]
  }'
```

`POST /api/v1/polls/{id}`

Vote on a poll.

> Body parameter

```json
{
  "choices": [
    "string"
  ]
}
```

<h3 id="postapiv1pollsid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|ID of the poll in the database.|
|body|body|object|false|none|
|» choices|body|[string]|true|none|

> Example responses

> 200 Response

```json
{
  "emojis": [
    {
      "category": "string",
      "shortcode": "string",
      "static_url": "string",
      "url": "string",
      "visible_in_picker": true
    }
  ],
  "expired": true,
  "expires_at": "1970-01-01T00:00:00Z",
  "id": "string",
  "multiple": true,
  "options": [
    null
  ],
  "own_votes": [
    0
  ],
  "voted": true,
  "voters_count": 0,
  "votes_count": 0
}
```

> 401 Response

```json
{
  "error": "string",
  "error_description": "string"
}
```

> 404 Response

```json
{
  "error": "string",
  "error_description": "string"
}
```

> 422 Response

```json
{
  "error": "string",
  "error_description": "string"
}
```

<h3 id="postapiv1pollsid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Get one poll.|[Poll](#schemapoll)|
|401|Unauthorized|Invalid or missing Authorization header|[Error](#schemaerror)|
|404|Not Found|Poll does not exist, or poll's parent status is private.|[Error](#schemaerror)|
|422|Unprocessable Entity|Already voted or poll is expired.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## get/api/v1/preferences

> Code samples

```bash
curl https://example.com/api/v1/preferences \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/v1/preferences`

Shows your 10 most-used tags, with usage history for the past week.

> Example responses

> 200 Response

```json
{
  "posting:default:language": "string",
  "posting:default:sensitive": true,
  "posting:default:visibility": "public",
  "reading:expand:media": "default",
  "reading:expand:spoilers": true
}
```

> 401 Response

```json
{
  "error": "string",
  "error_description": "string"
}
```

<h3 id="getapiv1preferences-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success.|[Preferences](#schemapreferences)|
|401|Unauthorized|Invalid or missing Authorization header|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## get/api/v1/push/subscription

> Code samples

```bash
curl https://example.com/api/v1/push/subscription \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/v1/push/subscription`

View the PushSubscription currently associated with this access token.

> Example responses

> 200 Response

```json
{
  "alerts": {},
  "endpoint": "string",
  "id": "string",
  "server_key": "string"
}
```

> 404 Response

```json
{
  "error": "string",
  "error_description": "string"
}
```

<h3 id="getapiv1pushsubscription-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Get one PushSubscription|[PushSubscription](#schemapushsubscription)|
|404|Not Found|Not Found|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## put/api/v1/push/subscription

> Code samples

```bash
curl https://example.com/api/v1/push/subscription \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "data": "string"
  }'
```

`PUT /api/v1/push/subscription`

Updates the current push subscription. Only the data part can be updated. To change fundamentals, a new subscription must be created instead.

> Body parameter

```json
{
  "data": "string"
}
```

<h3 id="putapiv1pushsubscription-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» data|body|string|true|none|

> Example responses

> 200 Response

```json
{
  "alerts": {},
  "endpoint": "string",
  "id": "string",
  "server_key": "string"
}
```

> 404 Response

```json
{
  "error": "string",
  "error_description": "string"
}
```

<h3 id="putapiv1pushsubscription-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Updating a PushSubscription to only receive mention alerts|[PushSubscription](#schemapushsubscription)|
|404|Not Found|Not Found|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## post/api/v1/push/subscription

> Code samples

```bash
curl https://example.com/api/v1/push/subscription \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "data": "string",
    "subscription": "string"
  }'
```

`POST /api/v1/push/subscription`

Add a Web Push API subscription to receive notifications. Each access token can have one push subscription. If you create a new subscription, the old subscription is deleted.

> Body parameter

```json
{
  "data": "string",
  "subscription": "string"
}
```

<h3 id="postapiv1pushsubscription-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» data|body|string|true|none|
|» subscription|body|string|true|none|

> Example responses

> 200 Response

```json
{
  "alerts": {},
  "endpoint": "string",
  "id": "string",
  "server_key": "string"
}
```

> 401 Response

```json
{
  "error": "string",
  "error_description": "string"
}
```

<h3 id="postapiv1pushsubscription-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|PushSubscription created|[PushSubscription](#schemapushsubscription)|
|401|Unauthorized|Invalid or missing Authorization header|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## delete/api/v1/push/subscription

> Code samples

```bash
curl https://example.com/api/v1/push/subscription \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /api/v1/push/subscription`

Updates the current push subscription. Only the data part can be updated. To change fundamentals, a new subscription must be created instead.

> Example responses

> 200 Response

```json
{}
```

<h3 id="deleteapiv1pushsubscription-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Updating a PushSubscription to only receive mention alerts|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## post/api/v1/reports

> Code samples

```bash
curl https://example.com/api/v1/reports \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "account_id": "string",
    "comment": "string",
    "forward": true,
    "status_ids": [
      "string"
    ]
  }'
```

`POST /api/v1/reports`

File a report.

> Body parameter

```json
{
  "account_id": "string",
  "comment": "string",
  "forward": true,
  "status_ids": [
    "string"
  ]
}
```

<h3 id="postapiv1reports-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» account_id|body|string|true|ID of the account to report|
|» comment|body|string|false|Reason for the report (default max 1000 characters)|
|» forward|body|boolean|false|If the account is remote, should the report be forwarded to the remote admin?|
|» status_ids|body|[string]|false|Array of Statuses to attach to the report, for context|

> Example responses

> 200 Response

```json
{
  "action_taken": true,
  "action_taken_at": "1970-01-01T00:00:00Z",
  "category": "other",
  "comment": "string",
  "created_at": "1970-01-01T00:00:00Z",
  "forwarded": true,
  "id": "string",
  "rule_ids": [
    0
  ],
  "status_ids": [
    0
  ],
  "target_account": {
    "acct": "string",
    "avatar": "string",
    "avatar_static": "string",
    "bot": true,
    "created_at": "1970-01-01T00:00:00Z",
    "discoverable": true,
    "display_name": "string",
    "emojis": [
      {
        "category": "string",
        "shortcode": "string",
        "static_url": "string",
        "url": "string",
        "visible_in_picker": true
      }
    ],
    "fields": [
      {
        "name": "string",
        "value": "string",
        "verified_at": "1970-01-01T00:00:00Z"
      }
    ],
    "followers_count": 0,
    "following_count": 0,
    "header": "string",
    "header_static": "string",
    "id": "string",
    "last_status_at": "1970-01-01T00:00:00Z",
    "locked": true,
    "moved": {},
    "mute_expires_at": "1970-01-01T00:00:00Z",
    "note": "string",
    "source": {
      "fields": [
        {
          "name": "string",
          "value": "string",
          "verified_at": "1970-01-01T00:00:00Z"
        }
      ],
      "follow_requests_count": 0,
      "language": "string",
      "note": "string",
      "privacy": "public",
      "sensitive": true
    },
    "statuses_count": 0,
    "suspended": true,
    "url": "string",
    "username": "string"
  }
}
```

> 401 Response

```json
{
  "error": "string",
  "error_description": "string"
}
```

<h3 id="postapiv1reports-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully reported.|[Report](#schemareport)|
|401|Unauthorized|Invalid or missing Authorization header|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## get/api/v1/scheduled_statuses

> Code samples

```bash
curl https://example.com/api/v1/scheduled_statuses \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/v1/scheduled_statuses`

View scheduled statuses

<h3 id="getapiv1scheduledstatuses-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer|false|Max number of results to return. Defaults to 20.|
|max_id|query|string|false|Return results older than ID|
|since_id|query|string|false|Return results newer than ID|
|min_id|query|string|false|Return results immediately newer than ID|

> Example responses

> 200 Response

```json
[
  {
    "id": "string",
    "media_attachments": [
      {
        "blurhash": "string",
        "description": "string",
        "id": "string",
        "meta": {},
        "preview_url": "string",
        "remote_url": "string",
        "text_url": "string",
        "type": "unknown",
        "url": "string"
      }
    ],
    "params": {
      "application_id": "string",
      "in_reply_to_id": "string",
      "media_ids": [
        "string"
      ],
      "scheduled_at": "1970-01-01T00:00:00Z",
      "sensitive": true,
      "spoiler_text": "string",
      "text": "string",
      "visibility": "string"
    },
    "scheduled_at": "1970-01-01T00:00:00Z"
  }
]
```

> 401 Response

```json
{
  "error": "string",
  "error_description": "string"
}
```

<h3 id="getapiv1scheduledstatuses-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Get scheduled statuses.|Inline|
|401|Unauthorized|Invalid or missing Authorization header|[Error](#schemaerror)|

<h3 id="getapiv1scheduledstatuses-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[ScheduledStatus](#schemascheduledstatus)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## get/api/v1/scheduled_statuses/{id}

> Code samples

```bash
curl https://example.com/api/v1/scheduled_statuses/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/v1/scheduled_statuses/{id}`

View a single scheduled status

<h3 id="getapiv1scheduledstatusesid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|ID of the scheduled status in the database.|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "media_attachments": [
    {
      "blurhash": "string",
      "description": "string",
      "id": "string",
      "meta": {},
      "preview_url": "string",
      "remote_url": "string",
      "text_url": "string",
      "type": "unknown",
      "url": "string"
    }
  ],
  "params": {
    "application_id": "string",
    "in_reply_to_id": "string",
    "media_ids": [
      "string"
    ],
    "scheduled_at": "1970-01-01T00:00:00Z",
    "sensitive": true,
    "spoiler_text": "string",
    "text": "string",
    "visibility": "string"
  },
  "scheduled_at": "1970-01-01T00:00:00Z"
}
```

> 401 Response

```json
{
  "error": "string",
  "error_description": "string"
}
```

> 404 Response

```json
{
  "error": "string",
  "error_description": "string"
}
```

<h3 id="getapiv1scheduledstatusesid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success.|[ScheduledStatus](#schemascheduledstatus)|
|401|Unauthorized|Invalid or missing Authorization header|[Error](#schemaerror)|
|404|Not Found|Not Found|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## put/api/v1/scheduled_statuses/{id}

> Code samples

```bash
curl https://example.com/api/v1/scheduled_statuses/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "scheduled_at": "1970-01-01T00:00:00Z"
  }'
```

`PUT /api/v1/scheduled_statuses/{id}`

View a single scheduled status

> Body parameter

```json
{
  "scheduled_at": "1970-01-01T00:00:00Z"
}
```

<h3 id="putapiv1scheduledstatusesid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|ID of the scheduled status in the database.|
|body|body|object|false|none|
|» scheduled_at|body|string(date-time)|false|ISO 8601 Datetime at which the status will be published. Must be at least 5 minutes into the future.|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "media_attachments": [
    {
      "blurhash": "string",
      "description": "string",
      "id": "string",
      "meta": {},
      "preview_url": "string",
      "remote_url": "string",
      "text_url": "string",
      "type": "unknown",
      "url": "string"
    }
  ],
  "params": {
    "application_id": "string",
    "in_reply_to_id": "string",
    "media_ids": [
      "string"
    ],
    "scheduled_at": "1970-01-01T00:00:00Z",
    "sensitive": true,
    "spoiler_text": "string",
    "text": "string",
    "visibility": "string"
  },
  "scheduled_at": "1970-01-01T00:00:00Z"
}
```

> 401 Response

```json
{
  "error": "string",
  "error_description": "string"
}
```

> 404 Response

```json
{
  "error": "string",
  "error_description": "string"
}
```

> 422 Response

```json
{
  "error": "string",
  "error_description": "string"
}
```

<h3 id="putapiv1scheduledstatusesid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success.|[ScheduledStatus](#schemascheduledstatus)|
|401|Unauthorized|Invalid or missing Authorization header|[Error](#schemaerror)|
|404|Not Found|Not Found|[Error](#schemaerror)|
|422|Unprocessable Entity|Unprocessable Entity|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## delete/api/v1/scheduled_statuses/{id}

> Code samples

```bash
curl https://example.com/api/v1/scheduled_statuses/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /api/v1/scheduled_statuses/{id}`

Cancel a scheduled status

<h3 id="deleteapiv1scheduledstatusesid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|ID of the scheduled status in the database.|

> Example responses

> 200 Response

```json
{}
```

> 401 Response

```json
{
  "error": "string",
  "error_description": "string"
}
```

> 404 Response

```json
{
  "error": "string",
  "error_description": "string"
}
```

<h3 id="deleteapiv1scheduledstatusesid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success.|Inline|
|401|Unauthorized|Invalid or missing Authorization header|[Error](#schemaerror)|
|404|Not Found|Not Found|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## post/api/v1/statuses

> Code samples

```bash
curl https://example.com/api/v1/statuses \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '[
    {
      "in_reply_to_id": "string",
      "language": "string",
      "media_ids": [
        "string"
      ],
      "poll": [
        {}
      ],
      "scheduled_at": "string",
      "sensitive": true,
      "spoiler_text": "string",
      "status": "string",
      "visibility": "public"
    }
  ]'
```

`POST /api/v1/statuses`

> Body parameter

```json
[
  {
    "in_reply_to_id": "string",
    "language": "string",
    "media_ids": [
      "string"
    ],
    "poll": [
      {}
    ],
    "scheduled_at": "string",
    "sensitive": true,
    "spoiler_text": "string",
    "status": "string",
    "visibility": "public"
  }
]
```

<h3 id="postapiv1statuses-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Idempotency-Key|header|string|false|Prevent duplicate submissions of the same status. Idempotency keys are stored for up to 1 hour, and can be any arbitrary string. Consider using a hash or UUID generated client-side.|
|body|body|[object]|false|none|
|» in_reply_to_id|body|string|false|ID of the status being replied to, if status is a reply|
|» language|body|string|false|ISO 639 language code for this status.|
|» media_ids|body|[string]|false|Array of Attachment ids to be attached as media. If provided, `status` becomes optional, and `poll` cannot be used.|
|» poll|body|[object]|false|none|
|» scheduled_at|body|string|false|ISO 8601 Datetime at which to schedule a status. Providing this paramter will cause ScheduledStatus to be returned instead of Status. Must be at least 5 minutes in the future.|
|» sensitive|body|boolean|false|Mark status and attached media as sensitive?|
|» spoiler_text|body|string|false|Text to be shown as a warning or subject before the actual content. Statuses are generally collapsed behind this field.|
|» status|body|string|false|Text content of the status. If `media_ids` is provided, this becomes optional. Attaching a `poll` is optional while `status` is provided.|
|» visibility|body|string|false|Visibility of the posted status. Enumerable oneOf public, unlisted, private, direct.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» visibility|public|
|» visibility|unlisted|
|» visibility|private|
|» visibility|direct|

> Example responses

> 200 Response

```json
{
  "account": {},
  "application": {
    "client_id": "string",
    "client_secret": "string",
    "name": "string",
    "vapid_key": "string",
    "website": "string"
  },
  "bookmarked": true,
  "card": {
    "author_name": "string",
    "author_url": "string",
    "blurhash": "string",
    "description": "string",
    "height": 0,
    "html": "string",
    "image": "string",
    "provider_name": "string",
    "provider_url": "string",
    "title": "string",
    "type": "link",
    "url": "string",
    "width": 0
  },
  "content": "string",
  "created_at": "1970-01-01T00:00:00Z",
  "emojis": [
    {
      "category": "string",
      "shortcode": "string",
      "static_url": "string",
      "url": "string",
      "visible_in_picker": true
    }
  ],
  "favourited": true,
  "favourites_count": 0,
  "id": "string",
  "in_reply_to_account_id": "string",
  "in_reply_to_id": "string",
  "language": "string",
  "media_attachments": [
    {
      "blurhash": "string",
      "description": "string",
      "id": "string",
      "meta": {},
      "preview_url": "string",
      "remote_url": "string",
      "text_url": "string",
      "type": "unknown",
      "url": "string"
    }
  ],
  "mentions": [
    {
      "acct": "string",
      "id": "string",
      "url": "string",
      "username": "string"
    }
  ],
  "muted": true,
  "pinned": true,
  "poll": {
    "emojis": [
      {
        "category": "string",
        "shortcode": "string",
        "static_url": "string",
        "url": "string",
        "visible_in_picker": true
      }
    ],
    "expired": true,
    "expires_at": "1970-01-01T00:00:00Z",
    "id": "string",
    "multiple": true,
    "options": [
      null
    ],
    "own_votes": [
      0
    ],
    "voted": true,
    "voters_count": 0,
    "votes_count": 0
  },
  "reblog": {},
  "reblogged": true,
  "reblogs_count": 0,
  "replies_count": 0,
  "sensitive": true,
  "spoiler_text": "string",
  "tags": [
    {
      "history": [
        {
          "accounts": "string",
          "day": "string",
          "uses": "string"
        }
      ],
      "name": "string",
      "url": "string"
    }
  ],
  "text": "string",
  "uri": "string",
  "url": "string",
  "visibility": "public"
}
```

> 401 Response

```json
{
  "error": "string",
  "error_description": "string"
}
```

<h3 id="postapiv1statuses-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Status will be posted with chosen parameters. If scheduled_at is provided, then a ScheduledStatus will be returned instead.|Inline|
|401|Unauthorized|Invalid or missing Authorization header|[Error](#schemaerror)|

<h3 id="postapiv1statuses-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[Status](#schemastatus)|false|none|Represents a status posted by an account.|
|*oneOf*|[ScheduledStatus](#schemascheduledstatus)|false|none|Represents a status that will be published at a future scheduled date.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## get/api/v1/statuses/{id}

> Code samples

```bash
curl https://example.com/api/v1/statuses/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/v1/statuses/{id}`

<h3 id="getapiv1statusesid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Local ID of a status in the database.|

> Example responses

> 200 Response

```json
{
  "account": {},
  "application": {
    "client_id": "string",
    "client_secret": "string",
    "name": "string",
    "vapid_key": "string",
    "website": "string"
  },
  "bookmarked": true,
  "card": {
    "author_name": "string",
    "author_url": "string",
    "blurhash": "string",
    "description": "string",
    "height": 0,
    "html": "string",
    "image": "string",
    "provider_name": "string",
    "provider_url": "string",
    "title": "string",
    "type": "link",
    "url": "string",
    "width": 0
  },
  "content": "string",
  "created_at": "1970-01-01T00:00:00Z",
  "emojis": [
    {
      "category": "string",
      "shortcode": "string",
      "static_url": "string",
      "url": "string",
      "visible_in_picker": true
    }
  ],
  "favourited": true,
  "favourites_count": 0,
  "id": "string",
  "in_reply_to_account_id": "string",
  "in_reply_to_id": "string",
  "language": "string",
  "media_attachments": [
    {
      "blurhash": "string",
      "description": "string",
      "id": "string",
      "meta": {},
      "preview_url": "string",
      "remote_url": "string",
      "text_url": "string",
      "type": "unknown",
      "url": "string"
    }
  ],
  "mentions": [
    {
      "acct": "string",
      "id": "string",
      "url": "string",
      "username": "string"
    }
  ],
  "muted": true,
  "pinned": true,
  "poll": {
    "emojis": [
      {
        "category": "string",
        "shortcode": "string",
        "static_url": "string",
        "url": "string",
        "visible_in_picker": true
      }
    ],
    "expired": true,
    "expires_at": "1970-01-01T00:00:00Z",
    "id": "string",
    "multiple": true,
    "options": [
      null
    ],
    "own_votes": [
      0
    ],
    "voted": true,
    "voters_count": 0,
    "votes_count": 0
  },
  "reblog": {},
  "reblogged": true,
  "reblogs_count": 0,
  "replies_count": 0,
  "sensitive": true,
  "spoiler_text": "string",
  "tags": [
    {
      "history": [
        {
          "accounts": "string",
          "day": "string",
          "uses": "string"
        }
      ],
      "name": "string",
      "url": "string"
    }
  ],
  "text": "string",
  "uri": "string",
  "url": "string",
  "visibility": "public"
}
```

> 401 Response

```json
{
  "error": "string",
  "error_description": "string"
}
```

> 404 Response

```json
{
  "error": "string",
  "error_description": "string"
}
```

<h3 id="getapiv1statusesid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Status will be posted with chosen parameters. If scheduled_at is provided, then a ScheduledStatus will be returned instead.|[Status](#schemastatus)|
|401|Unauthorized|Invalid or missing Authorization header|[Error](#schemaerror)|
|404|Not Found|Status does not exist, is deleted, or is private.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## delete/api/v1/statuses/{id}

> Code samples

```bash
curl https://example.com/api/v1/statuses/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /api/v1/statuses/{id}`

<h3 id="deleteapiv1statusesid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Local ID of a status in the database.|

> Example responses

> 200 Response

```json
{
  "account": {},
  "application": {
    "client_id": "string",
    "client_secret": "string",
    "name": "string",
    "vapid_key": "string",
    "website": "string"
  },
  "bookmarked": true,
  "card": {
    "author_name": "string",
    "author_url": "string",
    "blurhash": "string",
    "description": "string",
    "height": 0,
    "html": "string",
    "image": "string",
    "provider_name": "string",
    "provider_url": "string",
    "title": "string",
    "type": "link",
    "url": "string",
    "width": 0
  },
  "content": "string",
  "created_at": "1970-01-01T00:00:00Z",
  "emojis": [
    {
      "category": "string",
      "shortcode": "string",
      "static_url": "string",
      "url": "string",
      "visible_in_picker": true
    }
  ],
  "favourited": true,
  "favourites_count": 0,
  "id": "string",
  "in_reply_to_account_id": "string",
  "in_reply_to_id": "string",
  "language": "string",
  "media_attachments": [
    {
      "blurhash": "string",
      "description": "string",
      "id": "string",
      "meta": {},
      "preview_url": "string",
      "remote_url": "string",
      "text_url": "string",
      "type": "unknown",
      "url": "string"
    }
  ],
  "mentions": [
    {
      "acct": "string",
      "id": "string",
      "url": "string",
      "username": "string"
    }
  ],
  "muted": true,
  "pinned": true,
  "poll": {
    "emojis": [
      {
        "category": "string",
        "shortcode": "string",
        "static_url": "string",
        "url": "string",
        "visible_in_picker": true
      }
    ],
    "expired": true,
    "expires_at": "1970-01-01T00:00:00Z",
    "id": "string",
    "multiple": true,
    "options": [
      null
    ],
    "own_votes": [
      0
    ],
    "voted": true,
    "voters_count": 0,
    "votes_count": 0
  },
  "reblog": {},
  "reblogged": true,
  "reblogs_count": 0,
  "replies_count": 0,
  "sensitive": true,
  "spoiler_text": "string",
  "tags": [
    {
      "history": [
        {
          "accounts": "string",
          "day": "string",
          "uses": "string"
        }
      ],
      "name": "string",
      "url": "string"
    }
  ],
  "text": "string",
  "uri": "string",
  "url": "string",
  "visibility": "public"
}
```

> 401 Response

```json
{
  "error": "string",
  "error_description": "string"
}
```

> 404 Response

```json
{
  "error": "string",
  "error_description": "string"
}
```

<h3 id="deleteapiv1statusesid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Status will be posted with chosen parameters. If scheduled_at is provided, then a ScheduledStatus will be returned instead.|[Status](#schemastatus)|
|401|Unauthorized|Invalid or missing Authorization header|[Error](#schemaerror)|
|404|Not Found|Status does not exist, is deleted, or is private.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## post/api/v1/statuses/{id}/bookmark

> Code samples

```bash
curl https://example.com/api/v1/statuses/string/bookmark \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /api/v1/statuses/{id}/bookmark`

Privately bookmark a status.

<h3 id="postapiv1statusesidbookmark-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Local ID of a status in the database.|

> Example responses

> 200 Response

```json
{
  "account": {},
  "application": {
    "client_id": "string",
    "client_secret": "string",
    "name": "string",
    "vapid_key": "string",
    "website": "string"
  },
  "bookmarked": true,
  "card": {
    "author_name": "string",
    "author_url": "string",
    "blurhash": "string",
    "description": "string",
    "height": 0,
    "html": "string",
    "image": "string",
    "provider_name": "string",
    "provider_url": "string",
    "title": "string",
    "type": "link",
    "url": "string",
    "width": 0
  },
  "content": "string",
  "created_at": "1970-01-01T00:00:00Z",
  "emojis": [
    {
      "category": "string",
      "shortcode": "string",
      "static_url": "string",
      "url": "string",
      "visible_in_picker": true
    }
  ],
  "favourited": true,
  "favourites_count": 0,
  "id": "string",
  "in_reply_to_account_id": "string",
  "in_reply_to_id": "string",
  "language": "string",
  "media_attachments": [
    {
      "blurhash": "string",
      "description": "string",
      "id": "string",
      "meta": {},
      "preview_url": "string",
      "remote_url": "string",
      "text_url": "string",
      "type": "unknown",
      "url": "string"
    }
  ],
  "mentions": [
    {
      "acct": "string",
      "id": "string",
      "url": "string",
      "username": "string"
    }
  ],
  "muted": true,
  "pinned": true,
  "poll": {
    "emojis": [
      {
        "category": "string",
        "shortcode": "string",
        "static_url": "string",
        "url": "string",
        "visible_in_picker": true
      }
    ],
    "expired": true,
    "expires_at": "1970-01-01T00:00:00Z",
    "id": "string",
    "multiple": true,
    "options": [
      null
    ],
    "own_votes": [
      0
    ],
    "voted": true,
    "voters_count": 0,
    "votes_count": 0
  },
  "reblog": {},
  "reblogged": true,
  "reblogs_count": 0,
  "replies_count": 0,
  "sensitive": true,
  "spoiler_text": "string",
  "tags": [
    {
      "history": [
        {
          "accounts": "string",
          "day": "string",
          "uses": "string"
        }
      ],
      "name": "string",
      "url": "string"
    }
  ],
  "text": "string",
  "uri": "string",
  "url": "string",
  "visibility": "public"
}
```

> 401 Response

```json
{
  "error": "string",
  "error_description": "string"
}
```

> 404 Response

```json
{
  "error": "string",
  "error_description": "string"
}
```

<h3 id="postapiv1statusesidbookmark-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Status bookmarked|[Status](#schemastatus)|
|401|Unauthorized|Invalid or missing Authorization header|[Error](#schemaerror)|
|404|Not Found|Status does not exist, is deleted, or is private|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## get/api/v1/statuses/{id}/context

> Code samples

```bash
curl https://example.com/api/v1/statuses/string/context \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/v1/statuses/{id}/context`

<h3 id="getapiv1statusesidcontext-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Local ID of a status in the database.|

> Example responses

> 200 Response

```json
{
  "ancestors": [
    {
      "account": {},
      "application": {
        "client_id": "string",
        "client_secret": "string",
        "name": "string",
        "vapid_key": "string",
        "website": "string"
      },
      "bookmarked": true,
      "card": {
        "author_name": "string",
        "author_url": "string",
        "blurhash": "string",
        "description": "string",
        "height": 0,
        "html": "string",
        "image": "string",
        "provider_name": "string",
        "provider_url": "string",
        "title": "string",
        "type": "link",
        "url": "string",
        "width": 0
      },
      "content": "string",
      "created_at": "1970-01-01T00:00:00Z",
      "emojis": [
        {
          "category": "string",
          "shortcode": "string",
          "static_url": "string",
          "url": "string",
          "visible_in_picker": true
        }
      ],
      "favourited": true,
      "favourites_count": 0,
      "id": "string",
      "in_reply_to_account_id": "string",
      "in_reply_to_id": "string",
      "language": "string",
      "media_attachments": [
        {
          "blurhash": "string",
          "description": "string",
          "id": "string",
          "meta": {},
          "preview_url": "string",
          "remote_url": "string",
          "text_url": "string",
          "type": "unknown",
          "url": "string"
        }
      ],
      "mentions": [
        {
          "acct": "string",
          "id": "string",
          "url": "string",
          "username": "string"
        }
      ],
      "muted": true,
      "pinned": true,
      "poll": {
        "emojis": [
          {
            "category": "string",
            "shortcode": "string",
            "static_url": "string",
            "url": "string",
            "visible_in_picker": true
          }
        ],
        "expired": true,
        "expires_at": "1970-01-01T00:00:00Z",
        "id": "string",
        "multiple": true,
        "options": [
          null
        ],
        "own_votes": [
          0
        ],
        "voted": true,
        "voters_count": 0,
        "votes_count": 0
      },
      "reblog": {},
      "reblogged": true,
      "reblogs_count": 0,
      "replies_count": 0,
      "sensitive": true,
      "spoiler_text": "string",
      "tags": [
        {
          "history": [
            {
              "accounts": "string",
              "day": "string",
              "uses": "string"
            }
          ],
          "name": "string",
          "url": "string"
        }
      ],
      "text": "string",
      "uri": "string",
      "url": "string",
      "visibility": "public"
    }
  ],
  "descendants": [
    {
      "account": {},
      "application": {
        "client_id": "string",
        "client_secret": "string",
        "name": "string",
        "vapid_key": "string",
        "website": "string"
      },
      "bookmarked": true,
      "card": {
        "author_name": "string",
        "author_url": "string",
        "blurhash": "string",
        "description": "string",
        "height": 0,
        "html": "string",
        "image": "string",
        "provider_name": "string",
        "provider_url": "string",
        "title": "string",
        "type": "link",
        "url": "string",
        "width": 0
      },
      "content": "string",
      "created_at": "1970-01-01T00:00:00Z",
      "emojis": [
        {
          "category": "string",
          "shortcode": "string",
          "static_url": "string",
          "url": "string",
          "visible_in_picker": true
        }
      ],
      "favourited": true,
      "favourites_count": 0,
      "id": "string",
      "in_reply_to_account_id": "string",
      "in_reply_to_id": "string",
      "language": "string",
      "media_attachments": [
        {
          "blurhash": "string",
          "description": "string",
          "id": "string",
          "meta": {},
          "preview_url": "string",
          "remote_url": "string",
          "text_url": "string",
          "type": "unknown",
          "url": "string"
        }
      ],
      "mentions": [
        {
          "acct": "string",
          "id": "string",
          "url": "string",
          "username": "string"
        }
      ],
      "muted": true,
      "pinned": true,
      "poll": {
        "emojis": [
          {
            "category": "string",
            "shortcode": "string",
            "static_url": "string",
            "url": "string",
            "visible_in_picker": true
          }
        ],
        "expired": true,
        "expires_at": "1970-01-01T00:00:00Z",
        "id": "string",
        "multiple": true,
        "options": [
          null
        ],
        "own_votes": [
          0
        ],
        "voted": true,
        "voters_count": 0,
        "votes_count": 0
      },
      "reblog": {},
      "reblogged": true,
      "reblogs_count": 0,
      "replies_count": 0,
      "sensitive": true,
      "spoiler_text": "string",
      "tags": [
        {
          "history": [
            {
              "accounts": "string",
              "day": "string",
              "uses": "string"
            }
          ],
          "name": "string",
          "url": "string"
        }
      ],
      "text": "string",
      "uri": "string",
      "url": "string",
      "visibility": "public"
    }
  ]
}
```

> 404 Response

```json
{
  "error": "string",
  "error_description": "string"
}
```

<h3 id="getapiv1statusesidcontext-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[Context](#schemacontext)|
|404|Not Found|Status does not exist, is deleted, or is private|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## post/api/v1/statuses/{id}/favourite

> Code samples

```bash
curl https://example.com/api/v1/statuses/string/favourite \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /api/v1/statuses/{id}/favourite`

Add a status to your favourites list.

<h3 id="postapiv1statusesidfavourite-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Local ID of a status in the database.|

> Example responses

> 200 Response

```json
{
  "account": {},
  "application": {
    "client_id": "string",
    "client_secret": "string",
    "name": "string",
    "vapid_key": "string",
    "website": "string"
  },
  "bookmarked": true,
  "card": {
    "author_name": "string",
    "author_url": "string",
    "blurhash": "string",
    "description": "string",
    "height": 0,
    "html": "string",
    "image": "string",
    "provider_name": "string",
    "provider_url": "string",
    "title": "string",
    "type": "link",
    "url": "string",
    "width": 0
  },
  "content": "string",
  "created_at": "1970-01-01T00:00:00Z",
  "emojis": [
    {
      "category": "string",
      "shortcode": "string",
      "static_url": "string",
      "url": "string",
      "visible_in_picker": true
    }
  ],
  "favourited": true,
  "favourites_count": 0,
  "id": "string",
  "in_reply_to_account_id": "string",
  "in_reply_to_id": "string",
  "language": "string",
  "media_attachments": [
    {
      "blurhash": "string",
      "description": "string",
      "id": "string",
      "meta": {},
      "preview_url": "string",
      "remote_url": "string",
      "text_url": "string",
      "type": "unknown",
      "url": "string"
    }
  ],
  "mentions": [
    {
      "acct": "string",
      "id": "string",
      "url": "string",
      "username": "string"
    }
  ],
  "muted": true,
  "pinned": true,
  "poll": {
    "emojis": [
      {
        "category": "string",
        "shortcode": "string",
        "static_url": "string",
        "url": "string",
        "visible_in_picker": true
      }
    ],
    "expired": true,
    "expires_at": "1970-01-01T00:00:00Z",
    "id": "string",
    "multiple": true,
    "options": [
      null
    ],
    "own_votes": [
      0
    ],
    "voted": true,
    "voters_count": 0,
    "votes_count": 0
  },
  "reblog": {},
  "reblogged": true,
  "reblogs_count": 0,
  "replies_count": 0,
  "sensitive": true,
  "spoiler_text": "string",
  "tags": [
    {
      "history": [
        {
          "accounts": "string",
          "day": "string",
          "uses": "string"
        }
      ],
      "name": "string",
      "url": "string"
    }
  ],
  "text": "string",
  "uri": "string",
  "url": "string",
  "visibility": "public"
}
```

> 401 Response

```json
{
  "error": "string",
  "error_description": "string"
}
```

> 404 Response

```json
{
  "error": "string",
  "error_description": "string"
}
```

<h3 id="postapiv1statusesidfavourite-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[Status](#schemastatus)|
|401|Unauthorized|Invalid or missing Authorization header|[Error](#schemaerror)|
|404|Not Found|Status does not exist, is deleted, or is private|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## get/api/v1/statuses/{id}/favourited_by

> Code samples

```bash
curl https://example.com/api/v1/statuses/string/favourited_by \
  -H 'Accept: application/json'
```

`GET /api/v1/statuses/{id}/favourited_by`

View who favourited a given status.

<h3 id="getapiv1statusesidfavouritedby-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Local ID of a status in the database.|

> Example responses

> 200 Response

```json
{
  "acct": "string",
  "avatar": "string",
  "avatar_static": "string",
  "bot": true,
  "created_at": "1970-01-01T00:00:00Z",
  "discoverable": true,
  "display_name": "string",
  "emojis": [
    {
      "category": "string",
      "shortcode": "string",
      "static_url": "string",
      "url": "string",
      "visible_in_picker": true
    }
  ],
  "fields": [
    {
      "name": "string",
      "value": "string",
      "verified_at": "1970-01-01T00:00:00Z"
    }
  ],
  "followers_count": 0,
  "following_count": 0,
  "header": "string",
  "header_static": "string",
  "id": "string",
  "last_status_at": "1970-01-01T00:00:00Z",
  "locked": true,
  "moved": {},
  "mute_expires_at": "1970-01-01T00:00:00Z",
  "note": "string",
  "source": {
    "fields": [
      {
        "name": "string",
        "value": "string",
        "verified_at": "1970-01-01T00:00:00Z"
      }
    ],
    "follow_requests_count": 0,
    "language": "string",
    "note": "string",
    "privacy": "public",
    "sensitive": true
  },
  "statuses_count": 0,
  "suspended": true,
  "url": "string",
  "username": "string"
}
```

> 404 Response

```json
{
  "error": "string",
  "error_description": "string"
}
```

<h3 id="getapiv1statusesidfavouritedby-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[Account](#schemaaccount)|
|404|Not Found|Status does not exist, is deleted, or is private|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## post/api/v1/statuses/{id}/mute

> Code samples

```bash
curl https://example.com/api/v1/statuses/string/mute \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /api/v1/statuses/{id}/mute`

Do not receive notifications for the thread that this status is part of. Must be a thread in which you are a participant.

<h3 id="postapiv1statusesidmute-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Local ID of a status in the database.|

> Example responses

> 200 Response

```json
{
  "account": {},
  "application": {
    "client_id": "string",
    "client_secret": "string",
    "name": "string",
    "vapid_key": "string",
    "website": "string"
  },
  "bookmarked": true,
  "card": {
    "author_name": "string",
    "author_url": "string",
    "blurhash": "string",
    "description": "string",
    "height": 0,
    "html": "string",
    "image": "string",
    "provider_name": "string",
    "provider_url": "string",
    "title": "string",
    "type": "link",
    "url": "string",
    "width": 0
  },
  "content": "string",
  "created_at": "1970-01-01T00:00:00Z",
  "emojis": [
    {
      "category": "string",
      "shortcode": "string",
      "static_url": "string",
      "url": "string",
      "visible_in_picker": true
    }
  ],
  "favourited": true,
  "favourites_count": 0,
  "id": "string",
  "in_reply_to_account_id": "string",
  "in_reply_to_id": "string",
  "language": "string",
  "media_attachments": [
    {
      "blurhash": "string",
      "description": "string",
      "id": "string",
      "meta": {},
      "preview_url": "string",
      "remote_url": "string",
      "text_url": "string",
      "type": "unknown",
      "url": "string"
    }
  ],
  "mentions": [
    {
      "acct": "string",
      "id": "string",
      "url": "string",
      "username": "string"
    }
  ],
  "muted": true,
  "pinned": true,
  "poll": {
    "emojis": [
      {
        "category": "string",
        "shortcode": "string",
        "static_url": "string",
        "url": "string",
        "visible_in_picker": true
      }
    ],
    "expired": true,
    "expires_at": "1970-01-01T00:00:00Z",
    "id": "string",
    "multiple": true,
    "options": [
      null
    ],
    "own_votes": [
      0
    ],
    "voted": true,
    "voters_count": 0,
    "votes_count": 0
  },
  "reblog": {},
  "reblogged": true,
  "reblogs_count": 0,
  "replies_count": 0,
  "sensitive": true,
  "spoiler_text": "string",
  "tags": [
    {
      "history": [
        {
          "accounts": "string",
          "day": "string",
          "uses": "string"
        }
      ],
      "name": "string",
      "url": "string"
    }
  ],
  "text": "string",
  "uri": "string",
  "url": "string",
  "visibility": "public"
}
```

> 401 Response

```json
{
  "error": "string",
  "error_description": "string"
}
```

> 404 Response

```json
{
  "error": "string",
  "error_description": "string"
}
```

<h3 id="postapiv1statusesidmute-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Status's conversation muted, or was already muted|[Status](#schemastatus)|
|401|Unauthorized|Invalid or missing Authorization header|[Error](#schemaerror)|
|404|Not Found|Status does not exist, is deleted, or is private|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## post/api/v1/statuses/{id}/pin

> Code samples

```bash
curl https://example.com/api/v1/statuses/string/pin \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /api/v1/statuses/{id}/pin`

Feature one of your own public statuses at the top of your profile.

<h3 id="postapiv1statusesidpin-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Local ID of a status in the database.|

> Example responses

> 200 Response

```json
{
  "account": {},
  "application": {
    "client_id": "string",
    "client_secret": "string",
    "name": "string",
    "vapid_key": "string",
    "website": "string"
  },
  "bookmarked": true,
  "card": {
    "author_name": "string",
    "author_url": "string",
    "blurhash": "string",
    "description": "string",
    "height": 0,
    "html": "string",
    "image": "string",
    "provider_name": "string",
    "provider_url": "string",
    "title": "string",
    "type": "link",
    "url": "string",
    "width": 0
  },
  "content": "string",
  "created_at": "1970-01-01T00:00:00Z",
  "emojis": [
    {
      "category": "string",
      "shortcode": "string",
      "static_url": "string",
      "url": "string",
      "visible_in_picker": true
    }
  ],
  "favourited": true,
  "favourites_count": 0,
  "id": "string",
  "in_reply_to_account_id": "string",
  "in_reply_to_id": "string",
  "language": "string",
  "media_attachments": [
    {
      "blurhash": "string",
      "description": "string",
      "id": "string",
      "meta": {},
      "preview_url": "string",
      "remote_url": "string",
      "text_url": "string",
      "type": "unknown",
      "url": "string"
    }
  ],
  "mentions": [
    {
      "acct": "string",
      "id": "string",
      "url": "string",
      "username": "string"
    }
  ],
  "muted": true,
  "pinned": true,
  "poll": {
    "emojis": [
      {
        "category": "string",
        "shortcode": "string",
        "static_url": "string",
        "url": "string",
        "visible_in_picker": true
      }
    ],
    "expired": true,
    "expires_at": "1970-01-01T00:00:00Z",
    "id": "string",
    "multiple": true,
    "options": [
      null
    ],
    "own_votes": [
      0
    ],
    "voted": true,
    "voters_count": 0,
    "votes_count": 0
  },
  "reblog": {},
  "reblogged": true,
  "reblogs_count": 0,
  "replies_count": 0,
  "sensitive": true,
  "spoiler_text": "string",
  "tags": [
    {
      "history": [
        {
          "accounts": "string",
          "day": "string",
          "uses": "string"
        }
      ],
      "name": "string",
      "url": "string"
    }
  ],
  "text": "string",
  "uri": "string",
  "url": "string",
  "visibility": "public"
}
```

> 401 Response

```json
{
  "error": "string",
  "error_description": "string"
}
```

> 404 Response

```json
{
  "error": "string",
  "error_description": "string"
}
```

> 422 Response

```json
{
  "error": "string",
  "error_description": "string"
}
```

<h3 id="postapiv1statusesidpin-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Status pinned. Note the status is not a reblog and its authoring account is your own.|[Status](#schemastatus)|
|401|Unauthorized|Invalid or missing Authorization header|[Error](#schemaerror)|
|404|Not Found|Status does not exist, is deleted, or is private|[Error](#schemaerror)|
|422|Unprocessable Entity|Status is not owned by you, or is not public. You cannot pin one of your private statuses because private statuses cannot be fetched from remote sites, and must be delivered.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## post/api/v1/statuses/{id}/reblog

> Code samples

```bash
curl https://example.com/api/v1/statuses/string/reblog \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "visibility": "string"
  }'
```

`POST /api/v1/statuses/{id}/reblog`

Reshare a status.

> Body parameter

```json
{
  "visibility": "string"
}
```

<h3 id="postapiv1statusesidreblog-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Local ID of a status in the database.|
|body|body|object|false|none|
|» visibility|body|string|false|any visibility except limited or direct (i.e. public, unlisted, private). Defaults to public. Currently unused in UI.|

> Example responses

> 200 Response

```json
{
  "account": {},
  "application": {
    "client_id": "string",
    "client_secret": "string",
    "name": "string",
    "vapid_key": "string",
    "website": "string"
  },
  "bookmarked": true,
  "card": {
    "author_name": "string",
    "author_url": "string",
    "blurhash": "string",
    "description": "string",
    "height": 0,
    "html": "string",
    "image": "string",
    "provider_name": "string",
    "provider_url": "string",
    "title": "string",
    "type": "link",
    "url": "string",
    "width": 0
  },
  "content": "string",
  "created_at": "1970-01-01T00:00:00Z",
  "emojis": [
    {
      "category": "string",
      "shortcode": "string",
      "static_url": "string",
      "url": "string",
      "visible_in_picker": true
    }
  ],
  "favourited": true,
  "favourites_count": 0,
  "id": "string",
  "in_reply_to_account_id": "string",
  "in_reply_to_id": "string",
  "language": "string",
  "media_attachments": [
    {
      "blurhash": "string",
      "description": "string",
      "id": "string",
      "meta": {},
      "preview_url": "string",
      "remote_url": "string",
      "text_url": "string",
      "type": "unknown",
      "url": "string"
    }
  ],
  "mentions": [
    {
      "acct": "string",
      "id": "string",
      "url": "string",
      "username": "string"
    }
  ],
  "muted": true,
  "pinned": true,
  "poll": {
    "emojis": [
      {
        "category": "string",
        "shortcode": "string",
        "static_url": "string",
        "url": "string",
        "visible_in_picker": true
      }
    ],
    "expired": true,
    "expires_at": "1970-01-01T00:00:00Z",
    "id": "string",
    "multiple": true,
    "options": [
      null
    ],
    "own_votes": [
      0
    ],
    "voted": true,
    "voters_count": 0,
    "votes_count": 0
  },
  "reblog": {},
  "reblogged": true,
  "reblogs_count": 0,
  "replies_count": 0,
  "sensitive": true,
  "spoiler_text": "string",
  "tags": [
    {
      "history": [
        {
          "accounts": "string",
          "day": "string",
          "uses": "string"
        }
      ],
      "name": "string",
      "url": "string"
    }
  ],
  "text": "string",
  "uri": "string",
  "url": "string",
  "visibility": "public"
}
```

> 401 Response

```json
{
  "error": "string",
  "error_description": "string"
}
```

> 404 Response

```json
{
  "error": "string",
  "error_description": "string"
}
```

<h3 id="postapiv1statusesidreblog-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Status has been reblogged. Note that the top-level id has changed. The id of the boosted status is now inside the reblog property. The top-level id is the id of the reblog itself. Also note that reblogs cannot be pinned.|[Status](#schemastatus)|
|401|Unauthorized|Invalid or missing Authorization header|[Error](#schemaerror)|
|404|Not Found|Status does not exist, is deleted, or is private|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## get/api/v1/statuses/{id}/reblogged_by

> Code samples

```bash
curl https://example.com/api/v1/statuses/string/reblogged_by \
  -H 'Accept: application/json'
```

`GET /api/v1/statuses/{id}/reblogged_by`

View who boosted a given status.

<h3 id="getapiv1statusesidrebloggedby-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Local ID of a status in the database.|

> Example responses

> 200 Response

```json
{
  "acct": "string",
  "avatar": "string",
  "avatar_static": "string",
  "bot": true,
  "created_at": "1970-01-01T00:00:00Z",
  "discoverable": true,
  "display_name": "string",
  "emojis": [
    {
      "category": "string",
      "shortcode": "string",
      "static_url": "string",
      "url": "string",
      "visible_in_picker": true
    }
  ],
  "fields": [
    {
      "name": "string",
      "value": "string",
      "verified_at": "1970-01-01T00:00:00Z"
    }
  ],
  "followers_count": 0,
  "following_count": 0,
  "header": "string",
  "header_static": "string",
  "id": "string",
  "last_status_at": "1970-01-01T00:00:00Z",
  "locked": true,
  "moved": {},
  "mute_expires_at": "1970-01-01T00:00:00Z",
  "note": "string",
  "source": {
    "fields": [
      {
        "name": "string",
        "value": "string",
        "verified_at": "1970-01-01T00:00:00Z"
      }
    ],
    "follow_requests_count": 0,
    "language": "string",
    "note": "string",
    "privacy": "public",
    "sensitive": true
  },
  "statuses_count": 0,
  "suspended": true,
  "url": "string",
  "username": "string"
}
```

> 404 Response

```json
{
  "error": "string",
  "error_description": "string"
}
```

<h3 id="getapiv1statusesidrebloggedby-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[Account](#schemaaccount)|
|404|Not Found|Status does not exist, is deleted, or is private|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## post/api/v1/statuses/{id}/unbookmark

> Code samples

```bash
curl https://example.com/api/v1/statuses/string/unbookmark \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /api/v1/statuses/{id}/unbookmark`

Remove a status from your private bookmarks.

<h3 id="postapiv1statusesidunbookmark-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Local ID of a status in the database.|

> Example responses

> 200 Response

```json
{
  "account": {},
  "application": {
    "client_id": "string",
    "client_secret": "string",
    "name": "string",
    "vapid_key": "string",
    "website": "string"
  },
  "bookmarked": true,
  "card": {
    "author_name": "string",
    "author_url": "string",
    "blurhash": "string",
    "description": "string",
    "height": 0,
    "html": "string",
    "image": "string",
    "provider_name": "string",
    "provider_url": "string",
    "title": "string",
    "type": "link",
    "url": "string",
    "width": 0
  },
  "content": "string",
  "created_at": "1970-01-01T00:00:00Z",
  "emojis": [
    {
      "category": "string",
      "shortcode": "string",
      "static_url": "string",
      "url": "string",
      "visible_in_picker": true
    }
  ],
  "favourited": true,
  "favourites_count": 0,
  "id": "string",
  "in_reply_to_account_id": "string",
  "in_reply_to_id": "string",
  "language": "string",
  "media_attachments": [
    {
      "blurhash": "string",
      "description": "string",
      "id": "string",
      "meta": {},
      "preview_url": "string",
      "remote_url": "string",
      "text_url": "string",
      "type": "unknown",
      "url": "string"
    }
  ],
  "mentions": [
    {
      "acct": "string",
      "id": "string",
      "url": "string",
      "username": "string"
    }
  ],
  "muted": true,
  "pinned": true,
  "poll": {
    "emojis": [
      {
        "category": "string",
        "shortcode": "string",
        "static_url": "string",
        "url": "string",
        "visible_in_picker": true
      }
    ],
    "expired": true,
    "expires_at": "1970-01-01T00:00:00Z",
    "id": "string",
    "multiple": true,
    "options": [
      null
    ],
    "own_votes": [
      0
    ],
    "voted": true,
    "voters_count": 0,
    "votes_count": 0
  },
  "reblog": {},
  "reblogged": true,
  "reblogs_count": 0,
  "replies_count": 0,
  "sensitive": true,
  "spoiler_text": "string",
  "tags": [
    {
      "history": [
        {
          "accounts": "string",
          "day": "string",
          "uses": "string"
        }
      ],
      "name": "string",
      "url": "string"
    }
  ],
  "text": "string",
  "uri": "string",
  "url": "string",
  "visibility": "public"
}
```

> 401 Response

```json
{
  "error": "string",
  "error_description": "string"
}
```

> 404 Response

```json
{
  "error": "string",
  "error_description": "string"
}
```

<h3 id="postapiv1statusesidunbookmark-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Status unbookmarked|[Status](#schemastatus)|
|401|Unauthorized|Invalid or missing Authorization header|[Error](#schemaerror)|
|404|Not Found|Status does not exist, is deleted, or is private|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## post/api/v1/statuses/{id}/unfavourite

> Code samples

```bash
curl https://example.com/api/v1/statuses/string/unfavourite \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /api/v1/statuses/{id}/unfavourite`

Remove a status from your favourites list.

<h3 id="postapiv1statusesidunfavourite-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Local ID of a status in the database.|

> Example responses

> 200 Response

```json
{
  "account": {},
  "application": {
    "client_id": "string",
    "client_secret": "string",
    "name": "string",
    "vapid_key": "string",
    "website": "string"
  },
  "bookmarked": true,
  "card": {
    "author_name": "string",
    "author_url": "string",
    "blurhash": "string",
    "description": "string",
    "height": 0,
    "html": "string",
    "image": "string",
    "provider_name": "string",
    "provider_url": "string",
    "title": "string",
    "type": "link",
    "url": "string",
    "width": 0
  },
  "content": "string",
  "created_at": "1970-01-01T00:00:00Z",
  "emojis": [
    {
      "category": "string",
      "shortcode": "string",
      "static_url": "string",
      "url": "string",
      "visible_in_picker": true
    }
  ],
  "favourited": true,
  "favourites_count": 0,
  "id": "string",
  "in_reply_to_account_id": "string",
  "in_reply_to_id": "string",
  "language": "string",
  "media_attachments": [
    {
      "blurhash": "string",
      "description": "string",
      "id": "string",
      "meta": {},
      "preview_url": "string",
      "remote_url": "string",
      "text_url": "string",
      "type": "unknown",
      "url": "string"
    }
  ],
  "mentions": [
    {
      "acct": "string",
      "id": "string",
      "url": "string",
      "username": "string"
    }
  ],
  "muted": true,
  "pinned": true,
  "poll": {
    "emojis": [
      {
        "category": "string",
        "shortcode": "string",
        "static_url": "string",
        "url": "string",
        "visible_in_picker": true
      }
    ],
    "expired": true,
    "expires_at": "1970-01-01T00:00:00Z",
    "id": "string",
    "multiple": true,
    "options": [
      null
    ],
    "own_votes": [
      0
    ],
    "voted": true,
    "voters_count": 0,
    "votes_count": 0
  },
  "reblog": {},
  "reblogged": true,
  "reblogs_count": 0,
  "replies_count": 0,
  "sensitive": true,
  "spoiler_text": "string",
  "tags": [
    {
      "history": [
        {
          "accounts": "string",
          "day": "string",
          "uses": "string"
        }
      ],
      "name": "string",
      "url": "string"
    }
  ],
  "text": "string",
  "uri": "string",
  "url": "string",
  "visibility": "public"
}
```

> 401 Response

```json
{
  "error": "string",
  "error_description": "string"
}
```

> 404 Response

```json
{
  "error": "string",
  "error_description": "string"
}
```

<h3 id="postapiv1statusesidunfavourite-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[Status](#schemastatus)|
|401|Unauthorized|Invalid or missing Authorization header|[Error](#schemaerror)|
|404|Not Found|Status does not exist, is deleted, or is private|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## post/api/v1/statuses/{id}/unmute

> Code samples

```bash
curl https://example.com/api/v1/statuses/string/unmute \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /api/v1/statuses/{id}/unmute`

Status's conversation unmuted, or was already unmuted

<h3 id="postapiv1statusesidunmute-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Local ID of a status in the database.|

> Example responses

> 200 Response

```json
{
  "account": {},
  "application": {
    "client_id": "string",
    "client_secret": "string",
    "name": "string",
    "vapid_key": "string",
    "website": "string"
  },
  "bookmarked": true,
  "card": {
    "author_name": "string",
    "author_url": "string",
    "blurhash": "string",
    "description": "string",
    "height": 0,
    "html": "string",
    "image": "string",
    "provider_name": "string",
    "provider_url": "string",
    "title": "string",
    "type": "link",
    "url": "string",
    "width": 0
  },
  "content": "string",
  "created_at": "1970-01-01T00:00:00Z",
  "emojis": [
    {
      "category": "string",
      "shortcode": "string",
      "static_url": "string",
      "url": "string",
      "visible_in_picker": true
    }
  ],
  "favourited": true,
  "favourites_count": 0,
  "id": "string",
  "in_reply_to_account_id": "string",
  "in_reply_to_id": "string",
  "language": "string",
  "media_attachments": [
    {
      "blurhash": "string",
      "description": "string",
      "id": "string",
      "meta": {},
      "preview_url": "string",
      "remote_url": "string",
      "text_url": "string",
      "type": "unknown",
      "url": "string"
    }
  ],
  "mentions": [
    {
      "acct": "string",
      "id": "string",
      "url": "string",
      "username": "string"
    }
  ],
  "muted": true,
  "pinned": true,
  "poll": {
    "emojis": [
      {
        "category": "string",
        "shortcode": "string",
        "static_url": "string",
        "url": "string",
        "visible_in_picker": true
      }
    ],
    "expired": true,
    "expires_at": "1970-01-01T00:00:00Z",
    "id": "string",
    "multiple": true,
    "options": [
      null
    ],
    "own_votes": [
      0
    ],
    "voted": true,
    "voters_count": 0,
    "votes_count": 0
  },
  "reblog": {},
  "reblogged": true,
  "reblogs_count": 0,
  "replies_count": 0,
  "sensitive": true,
  "spoiler_text": "string",
  "tags": [
    {
      "history": [
        {
          "accounts": "string",
          "day": "string",
          "uses": "string"
        }
      ],
      "name": "string",
      "url": "string"
    }
  ],
  "text": "string",
  "uri": "string",
  "url": "string",
  "visibility": "public"
}
```

> 401 Response

```json
{
  "error": "string",
  "error_description": "string"
}
```

> 404 Response

```json
{
  "error": "string",
  "error_description": "string"
}
```

<h3 id="postapiv1statusesidunmute-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Status's conversation muted, or was already muted|[Status](#schemastatus)|
|401|Unauthorized|Invalid or missing Authorization header|[Error](#schemaerror)|
|404|Not Found|Status does not exist, is deleted, or is private|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## post/api/v1/statuses/{id}/unpin

> Code samples

```bash
curl https://example.com/api/v1/statuses/string/unpin \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /api/v1/statuses/{id}/unpin`

Unfeature a status from the top of your profile.

<h3 id="postapiv1statusesidunpin-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Local ID of a status in the database.|

> Example responses

> 200 Response

```json
{
  "account": {},
  "application": {
    "client_id": "string",
    "client_secret": "string",
    "name": "string",
    "vapid_key": "string",
    "website": "string"
  },
  "bookmarked": true,
  "card": {
    "author_name": "string",
    "author_url": "string",
    "blurhash": "string",
    "description": "string",
    "height": 0,
    "html": "string",
    "image": "string",
    "provider_name": "string",
    "provider_url": "string",
    "title": "string",
    "type": "link",
    "url": "string",
    "width": 0
  },
  "content": "string",
  "created_at": "1970-01-01T00:00:00Z",
  "emojis": [
    {
      "category": "string",
      "shortcode": "string",
      "static_url": "string",
      "url": "string",
      "visible_in_picker": true
    }
  ],
  "favourited": true,
  "favourites_count": 0,
  "id": "string",
  "in_reply_to_account_id": "string",
  "in_reply_to_id": "string",
  "language": "string",
  "media_attachments": [
    {
      "blurhash": "string",
      "description": "string",
      "id": "string",
      "meta": {},
      "preview_url": "string",
      "remote_url": "string",
      "text_url": "string",
      "type": "unknown",
      "url": "string"
    }
  ],
  "mentions": [
    {
      "acct": "string",
      "id": "string",
      "url": "string",
      "username": "string"
    }
  ],
  "muted": true,
  "pinned": true,
  "poll": {
    "emojis": [
      {
        "category": "string",
        "shortcode": "string",
        "static_url": "string",
        "url": "string",
        "visible_in_picker": true
      }
    ],
    "expired": true,
    "expires_at": "1970-01-01T00:00:00Z",
    "id": "string",
    "multiple": true,
    "options": [
      null
    ],
    "own_votes": [
      0
    ],
    "voted": true,
    "voters_count": 0,
    "votes_count": 0
  },
  "reblog": {},
  "reblogged": true,
  "reblogs_count": 0,
  "replies_count": 0,
  "sensitive": true,
  "spoiler_text": "string",
  "tags": [
    {
      "history": [
        {
          "accounts": "string",
          "day": "string",
          "uses": "string"
        }
      ],
      "name": "string",
      "url": "string"
    }
  ],
  "text": "string",
  "uri": "string",
  "url": "string",
  "visibility": "public"
}
```

> 401 Response

```json
{
  "error": "string",
  "error_description": "string"
}
```

> 404 Response

```json
{
  "error": "string",
  "error_description": "string"
}
```

<h3 id="postapiv1statusesidunpin-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Status unpinned, or was already not pinned|[Status](#schemastatus)|
|401|Unauthorized|Invalid or missing Authorization header|[Error](#schemaerror)|
|404|Not Found|Status does not exist, is deleted, or is private|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## post/api/v1/statuses/{id}/unreblog

> Code samples

```bash
curl https://example.com/api/v1/statuses/string/unreblog \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /api/v1/statuses/{id}/unreblog`

Undo a reshare of a status.

<h3 id="postapiv1statusesidunreblog-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Local ID of a status in the database.|

> Example responses

> 200 Response

```json
{
  "account": {},
  "application": {
    "client_id": "string",
    "client_secret": "string",
    "name": "string",
    "vapid_key": "string",
    "website": "string"
  },
  "bookmarked": true,
  "card": {
    "author_name": "string",
    "author_url": "string",
    "blurhash": "string",
    "description": "string",
    "height": 0,
    "html": "string",
    "image": "string",
    "provider_name": "string",
    "provider_url": "string",
    "title": "string",
    "type": "link",
    "url": "string",
    "width": 0
  },
  "content": "string",
  "created_at": "1970-01-01T00:00:00Z",
  "emojis": [
    {
      "category": "string",
      "shortcode": "string",
      "static_url": "string",
      "url": "string",
      "visible_in_picker": true
    }
  ],
  "favourited": true,
  "favourites_count": 0,
  "id": "string",
  "in_reply_to_account_id": "string",
  "in_reply_to_id": "string",
  "language": "string",
  "media_attachments": [
    {
      "blurhash": "string",
      "description": "string",
      "id": "string",
      "meta": {},
      "preview_url": "string",
      "remote_url": "string",
      "text_url": "string",
      "type": "unknown",
      "url": "string"
    }
  ],
  "mentions": [
    {
      "acct": "string",
      "id": "string",
      "url": "string",
      "username": "string"
    }
  ],
  "muted": true,
  "pinned": true,
  "poll": {
    "emojis": [
      {
        "category": "string",
        "shortcode": "string",
        "static_url": "string",
        "url": "string",
        "visible_in_picker": true
      }
    ],
    "expired": true,
    "expires_at": "1970-01-01T00:00:00Z",
    "id": "string",
    "multiple": true,
    "options": [
      null
    ],
    "own_votes": [
      0
    ],
    "voted": true,
    "voters_count": 0,
    "votes_count": 0
  },
  "reblog": {},
  "reblogged": true,
  "reblogs_count": 0,
  "replies_count": 0,
  "sensitive": true,
  "spoiler_text": "string",
  "tags": [
    {
      "history": [
        {
          "accounts": "string",
          "day": "string",
          "uses": "string"
        }
      ],
      "name": "string",
      "url": "string"
    }
  ],
  "text": "string",
  "uri": "string",
  "url": "string",
  "visibility": "public"
}
```

> 401 Response

```json
{
  "error": "string",
  "error_description": "string"
}
```

> 404 Response

```json
{
  "error": "string",
  "error_description": "string"
}
```

<h3 id="postapiv1statusesidunreblog-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Status no longer reblogged|[Status](#schemastatus)|
|401|Unauthorized|Invalid or missing Authorization header|[Error](#schemaerror)|
|404|Not Found|Status does not exist, is deleted, or is private|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## get/api/v1/suggestions

> Code samples

```bash
curl https://example.com/api/v1/suggestions \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/v1/suggestions`

Accounts the user has had past positive interactions with, but is not yet following.

<h3 id="getapiv1suggestions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer|false|Maximum number of results to return. Defaults to 40.|

> Example responses

> 200 Response

```json
{
  "acct": "string",
  "avatar": "string",
  "avatar_static": "string",
  "bot": true,
  "created_at": "1970-01-01T00:00:00Z",
  "discoverable": true,
  "display_name": "string",
  "emojis": [
    {
      "category": "string",
      "shortcode": "string",
      "static_url": "string",
      "url": "string",
      "visible_in_picker": true
    }
  ],
  "fields": [
    {
      "name": "string",
      "value": "string",
      "verified_at": "1970-01-01T00:00:00Z"
    }
  ],
  "followers_count": 0,
  "following_count": 0,
  "header": "string",
  "header_static": "string",
  "id": "string",
  "last_status_at": "1970-01-01T00:00:00Z",
  "locked": true,
  "moved": {},
  "mute_expires_at": "1970-01-01T00:00:00Z",
  "note": "string",
  "source": {
    "fields": [
      {
        "name": "string",
        "value": "string",
        "verified_at": "1970-01-01T00:00:00Z"
      }
    ],
    "follow_requests_count": 0,
    "language": "string",
    "note": "string",
    "privacy": "public",
    "sensitive": true
  },
  "statuses_count": 0,
  "suspended": true,
  "url": "string",
  "username": "string"
}
```

> 401 Response

```json
{
  "error": "string",
  "error_description": "string"
}
```

<h3 id="getapiv1suggestions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success.|[Account](#schemaaccount)|
|401|Unauthorized|Invalid or missing Authorization header|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## delete/api/v1/suggestions/{id}

> Code samples

```bash
curl https://example.com/api/v1/suggestions/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /api/v1/suggestions/{id}`

Delete user suggestion

<h3 id="deleteapiv1suggestionsid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|id of the account in the database to be removed from suggestions|

> Example responses

> 200 Response

```json
{}
```

> 401 Response

```json
{
  "error": "string",
  "error_description": "string"
}
```

<h3 id="deleteapiv1suggestionsid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully removed|Inline|
|401|Unauthorized|Invalid or missing Authorization header|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## get/api/v1/timelines/home

> Code samples

```bash
curl https://example.com/api/v1/timelines/home \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/v1/timelines/home`

View statuses from followed users.

<h3 id="getapiv1timelineshome-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|local|query|boolean|false|Show only local statuses? Defaults to false.|
|limit|query|integer|false|Max number of results to return. Defaults to 20.|
|max_id|query|string|false|Return results older than ID|
|since_id|query|string|false|Return results newer than ID|
|min_id|query|string|false|Return results immediately newer than ID|

> Example responses

> 200 Response

```json
[
  {
    "account": {},
    "application": {
      "client_id": "string",
      "client_secret": "string",
      "name": "string",
      "vapid_key": "string",
      "website": "string"
    },
    "bookmarked": true,
    "card": {
      "author_name": "string",
      "author_url": "string",
      "blurhash": "string",
      "description": "string",
      "height": 0,
      "html": "string",
      "image": "string",
      "provider_name": "string",
      "provider_url": "string",
      "title": "string",
      "type": "link",
      "url": "string",
      "width": 0
    },
    "content": "string",
    "created_at": "1970-01-01T00:00:00Z",
    "emojis": [
      {
        "category": "string",
        "shortcode": "string",
        "static_url": "string",
        "url": "string",
        "visible_in_picker": true
      }
    ],
    "favourited": true,
    "favourites_count": 0,
    "id": "string",
    "in_reply_to_account_id": "string",
    "in_reply_to_id": "string",
    "language": "string",
    "media_attachments": [
      {
        "blurhash": "string",
        "description": "string",
        "id": "string",
        "meta": {},
        "preview_url": "string",
        "remote_url": "string",
        "text_url": "string",
        "type": "unknown",
        "url": "string"
      }
    ],
    "mentions": [
      {
        "acct": "string",
        "id": "string",
        "url": "string",
        "username": "string"
      }
    ],
    "muted": true,
    "pinned": true,
    "poll": {
      "emojis": [
        {
          "category": "string",
          "shortcode": "string",
          "static_url": "string",
          "url": "string",
          "visible_in_picker": true
        }
      ],
      "expired": true,
      "expires_at": "1970-01-01T00:00:00Z",
      "id": "string",
      "multiple": true,
      "options": [
        null
      ],
      "own_votes": [
        0
      ],
      "voted": true,
      "voters_count": 0,
      "votes_count": 0
    },
    "reblog": {},
    "reblogged": true,
    "reblogs_count": 0,
    "replies_count": 0,
    "sensitive": true,
    "spoiler_text": "string",
    "tags": [
      {
        "history": [
          {
            "accounts": "string",
            "day": "string",
            "uses": "string"
          }
        ],
        "name": "string",
        "url": "string"
      }
    ],
    "text": "string",
    "uri": "string",
    "url": "string",
    "visibility": "public"
  }
]
```

> 401 Response

```json
{
  "error": "string",
  "error_description": "string"
}
```

<h3 id="getapiv1timelineshome-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Get statuses for home.|Inline|
|206|Partial Content|Home feed is regenerating|None|
|401|Unauthorized|Invalid or missing Authorization header|[Error](#schemaerror)|

<h3 id="getapiv1timelineshome-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Status](#schemastatus)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## get/api/v1/timelines/list/{list_id}

> Code samples

```bash
curl https://example.com/api/v1/timelines/list/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/v1/timelines/list/{list_id}`

View statuses in the given list timeline.

<h3 id="getapiv1timelineslistlistid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer|false|Max number of results to return. Defaults to 20.|
|max_id|query|string|false|Return results older than ID|
|since_id|query|string|false|Return results newer than ID|
|min_id|query|string|false|Return results immediately newer than ID|
|list_id|path|string|true|Local ID of the list in the database.|

> Example responses

> 200 Response

```json
[
  {
    "account": {},
    "application": {
      "client_id": "string",
      "client_secret": "string",
      "name": "string",
      "vapid_key": "string",
      "website": "string"
    },
    "bookmarked": true,
    "card": {
      "author_name": "string",
      "author_url": "string",
      "blurhash": "string",
      "description": "string",
      "height": 0,
      "html": "string",
      "image": "string",
      "provider_name": "string",
      "provider_url": "string",
      "title": "string",
      "type": "link",
      "url": "string",
      "width": 0
    },
    "content": "string",
    "created_at": "1970-01-01T00:00:00Z",
    "emojis": [
      {
        "category": "string",
        "shortcode": "string",
        "static_url": "string",
        "url": "string",
        "visible_in_picker": true
      }
    ],
    "favourited": true,
    "favourites_count": 0,
    "id": "string",
    "in_reply_to_account_id": "string",
    "in_reply_to_id": "string",
    "language": "string",
    "media_attachments": [
      {
        "blurhash": "string",
        "description": "string",
        "id": "string",
        "meta": {},
        "preview_url": "string",
        "remote_url": "string",
        "text_url": "string",
        "type": "unknown",
        "url": "string"
      }
    ],
    "mentions": [
      {
        "acct": "string",
        "id": "string",
        "url": "string",
        "username": "string"
      }
    ],
    "muted": true,
    "pinned": true,
    "poll": {
      "emojis": [
        {
          "category": "string",
          "shortcode": "string",
          "static_url": "string",
          "url": "string",
          "visible_in_picker": true
        }
      ],
      "expired": true,
      "expires_at": "1970-01-01T00:00:00Z",
      "id": "string",
      "multiple": true,
      "options": [
        null
      ],
      "own_votes": [
        0
      ],
      "voted": true,
      "voters_count": 0,
      "votes_count": 0
    },
    "reblog": {},
    "reblogged": true,
    "reblogs_count": 0,
    "replies_count": 0,
    "sensitive": true,
    "spoiler_text": "string",
    "tags": [
      {
        "history": [
          {
            "accounts": "string",
            "day": "string",
            "uses": "string"
          }
        ],
        "name": "string",
        "url": "string"
      }
    ],
    "text": "string",
    "uri": "string",
    "url": "string",
    "visibility": "public"
  }
]
```

> 401 Response

```json
{
  "error": "string",
  "error_description": "string"
}
```

<h3 id="getapiv1timelineslistlistid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Statuses in this list will be returned..|Inline|
|401|Unauthorized|Invalid or missing Authorization header|[Error](#schemaerror)|

<h3 id="getapiv1timelineslistlistid-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Status](#schemastatus)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## get/api/v1/timelines/public

> Code samples

```bash
curl https://example.com/api/v1/timelines/public \
  -H 'Accept: application/json'
```

`GET /api/v1/timelines/public`

Public timeline

<h3 id="getapiv1timelinespublic-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|local|query|boolean|false|Show only local statuses? Defaults to false.|
|remote|query|boolean|false|Show only local statuses? Defaults to false.|
|only_media|query|boolean|false|Show only statuses with media attached? Defaults to false..|
|limit|query|integer|false|Max number of results to return. Defaults to 20.|
|max_id|query|string|false|Return results older than ID|
|since_id|query|string|false|Return results newer than ID|
|min_id|query|string|false|Return results immediately newer than ID|

> Example responses

> 200 Response

```json
[
  {
    "account": {},
    "application": {
      "client_id": "string",
      "client_secret": "string",
      "name": "string",
      "vapid_key": "string",
      "website": "string"
    },
    "bookmarked": true,
    "card": {
      "author_name": "string",
      "author_url": "string",
      "blurhash": "string",
      "description": "string",
      "height": 0,
      "html": "string",
      "image": "string",
      "provider_name": "string",
      "provider_url": "string",
      "title": "string",
      "type": "link",
      "url": "string",
      "width": 0
    },
    "content": "string",
    "created_at": "1970-01-01T00:00:00Z",
    "emojis": [
      {
        "category": "string",
        "shortcode": "string",
        "static_url": "string",
        "url": "string",
        "visible_in_picker": true
      }
    ],
    "favourited": true,
    "favourites_count": 0,
    "id": "string",
    "in_reply_to_account_id": "string",
    "in_reply_to_id": "string",
    "language": "string",
    "media_attachments": [
      {
        "blurhash": "string",
        "description": "string",
        "id": "string",
        "meta": {},
        "preview_url": "string",
        "remote_url": "string",
        "text_url": "string",
        "type": "unknown",
        "url": "string"
      }
    ],
    "mentions": [
      {
        "acct": "string",
        "id": "string",
        "url": "string",
        "username": "string"
      }
    ],
    "muted": true,
    "pinned": true,
    "poll": {
      "emojis": [
        {
          "category": "string",
          "shortcode": "string",
          "static_url": "string",
          "url": "string",
          "visible_in_picker": true
        }
      ],
      "expired": true,
      "expires_at": "1970-01-01T00:00:00Z",
      "id": "string",
      "multiple": true,
      "options": [
        null
      ],
      "own_votes": [
        0
      ],
      "voted": true,
      "voters_count": 0,
      "votes_count": 0
    },
    "reblog": {},
    "reblogged": true,
    "reblogs_count": 0,
    "replies_count": 0,
    "sensitive": true,
    "spoiler_text": "string",
    "tags": [
      {
        "history": [
          {
            "accounts": "string",
            "day": "string",
            "uses": "string"
          }
        ],
        "name": "string",
        "url": "string"
      }
    ],
    "text": "string",
    "uri": "string",
    "url": "string",
    "visibility": "public"
  }
]
```

<h3 id="getapiv1timelinespublic-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|get statuses.|Inline|

<h3 id="getapiv1timelinespublic-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Status](#schemastatus)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## get/api/v1/timelines/tag/{hashtag}

> Code samples

```bash
curl https://example.com/api/v1/timelines/tag/string \
  -H 'Accept: application/json'
```

`GET /api/v1/timelines/tag/{hashtag}`

View public statuses containing the given hashtag.

<h3 id="getapiv1timelinestaghashtag-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|local|query|boolean|false|Show only local statuses? Defaults to false.|
|remote|query|boolean|false|Show only local statuses? Defaults to false.|
|only_media|query|boolean|false|Show only statuses with media attached? Defaults to false..|
|limit|query|integer|false|Max number of results to return. Defaults to 20.|
|max_id|query|string|false|Return results older than ID|
|since_id|query|string|false|Return results newer than ID|
|min_id|query|string|false|Return results immediately newer than ID|
|hashtag|path|string|true|Content of a `#hashtag``, not including `#` symbol..|

> Example responses

> 200 Response

```json
[
  {
    "account": {},
    "application": {
      "client_id": "string",
      "client_secret": "string",
      "name": "string",
      "vapid_key": "string",
      "website": "string"
    },
    "bookmarked": true,
    "card": {
      "author_name": "string",
      "author_url": "string",
      "blurhash": "string",
      "description": "string",
      "height": 0,
      "html": "string",
      "image": "string",
      "provider_name": "string",
      "provider_url": "string",
      "title": "string",
      "type": "link",
      "url": "string",
      "width": 0
    },
    "content": "string",
    "created_at": "1970-01-01T00:00:00Z",
    "emojis": [
      {
        "category": "string",
        "shortcode": "string",
        "static_url": "string",
        "url": "string",
        "visible_in_picker": true
      }
    ],
    "favourited": true,
    "favourites_count": 0,
    "id": "string",
    "in_reply_to_account_id": "string",
    "in_reply_to_id": "string",
    "language": "string",
    "media_attachments": [
      {
        "blurhash": "string",
        "description": "string",
        "id": "string",
        "meta": {},
        "preview_url": "string",
        "remote_url": "string",
        "text_url": "string",
        "type": "unknown",
        "url": "string"
      }
    ],
    "mentions": [
      {
        "acct": "string",
        "id": "string",
        "url": "string",
        "username": "string"
      }
    ],
    "muted": true,
    "pinned": true,
    "poll": {
      "emojis": [
        {
          "category": "string",
          "shortcode": "string",
          "static_url": "string",
          "url": "string",
          "visible_in_picker": true
        }
      ],
      "expired": true,
      "expires_at": "1970-01-01T00:00:00Z",
      "id": "string",
      "multiple": true,
      "options": [
        null
      ],
      "own_votes": [
        0
      ],
      "voted": true,
      "voters_count": 0,
      "votes_count": 0
    },
    "reblog": {},
    "reblogged": true,
    "reblogs_count": 0,
    "replies_count": 0,
    "sensitive": true,
    "spoiler_text": "string",
    "tags": [
      {
        "history": [
          {
            "accounts": "string",
            "day": "string",
            "uses": "string"
          }
        ],
        "name": "string",
        "url": "string"
      }
    ],
    "text": "string",
    "uri": "string",
    "url": "string",
    "visibility": "public"
  }
]
```

<h3 id="getapiv1timelinestaghashtag-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Get statuses.|Inline|

<h3 id="getapiv1timelinestaghashtag-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Status](#schemastatus)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## get/api/v1/trends

> Code samples

```bash
curl https://example.com/api/v1/trends \
  -H 'Accept: application/json'
```

`GET /api/v1/trends`

Tags that are being used more frequently within the past week.

<h3 id="getapiv1trends-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer|false|Max number of results to return. Defaults to 10.|

> Example responses

> 200 Response

```json
[
  {
    "history": [
      {
        "accounts": "string",
        "day": "string",
        "uses": "string"
      }
    ],
    "name": "string",
    "url": "string"
  }
]
```

<h3 id="getapiv1trends-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Domains that this instance is aware of.|Inline|

<h3 id="getapiv1trends-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Tag](#schematag)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## get/api/v2/search

> Code samples

```bash
curl 'https://example.com/api/v2/search?q=string' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/v2/search`

Search results

<h3 id="getapiv2search-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|q|query|string|true|What to search for|
|limit|query|integer|false|Maximum number of results. Defaults to 40.|
|resolve|query|string|false|Attempt WebFinger lookup.|
|following|query|boolean|false|Only who the user is following. Defaults to false.|
|account_id|query|string|false|If provided, statuses returned will be authored only by this account|
|max_id|query|string|false|Return results older than this id|
|min_id|query|string|false|Return results immediately newer than this id|
|type|query|string|false|Enum(accounts, hashtags, statuses)|
|exclude_unreviewed|query|boolean|false|Filter out unreviewed tags? Defaults to false. Use true when trying to find trending tags.|
|offset|query|integer|false|Offset in search results. Used for pagination. Defaults to 0.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|type|accounts|
|type|hashtags|
|type|statuses|

> Example responses

> 200 Response

```json
{
  "accounts": [
    {
      "acct": "string",
      "avatar": "string",
      "avatar_static": "string",
      "bot": true,
      "created_at": "1970-01-01T00:00:00Z",
      "discoverable": true,
      "display_name": "string",
      "emojis": [
        {
          "category": "string",
          "shortcode": "string",
          "static_url": "string",
          "url": "string",
          "visible_in_picker": true
        }
      ],
      "fields": [
        {
          "name": "string",
          "value": "string",
          "verified_at": "1970-01-01T00:00:00Z"
        }
      ],
      "followers_count": 0,
      "following_count": 0,
      "header": "string",
      "header_static": "string",
      "id": "string",
      "last_status_at": "1970-01-01T00:00:00Z",
      "locked": true,
      "moved": {},
      "mute_expires_at": "1970-01-01T00:00:00Z",
      "note": "string",
      "source": {
        "fields": [
          {
            "name": "string",
            "value": "string",
            "verified_at": "1970-01-01T00:00:00Z"
          }
        ],
        "follow_requests_count": 0,
        "language": "string",
        "note": "string",
        "privacy": "public",
        "sensitive": true
      },
      "statuses_count": 0,
      "suspended": true,
      "url": "string",
      "username": "string"
    }
  ],
  "hashtags": [
    {
      "account": {},
      "application": {
        "client_id": "string",
        "client_secret": "string",
        "name": "string",
        "vapid_key": "string",
        "website": "string"
      },
      "bookmarked": true,
      "card": {
        "author_name": "string",
        "author_url": "string",
        "blurhash": "string",
        "description": "string",
        "height": 0,
        "html": "string",
        "image": "string",
        "provider_name": "string",
        "provider_url": "string",
        "title": "string",
        "type": "link",
        "url": "string",
        "width": 0
      },
      "content": "string",
      "created_at": "1970-01-01T00:00:00Z",
      "emojis": [
        {
          "category": "string",
          "shortcode": "string",
          "static_url": "string",
          "url": "string",
          "visible_in_picker": true
        }
      ],
      "favourited": true,
      "favourites_count": 0,
      "id": "string",
      "in_reply_to_account_id": "string",
      "in_reply_to_id": "string",
      "language": "string",
      "media_attachments": [
        {
          "blurhash": "string",
          "description": "string",
          "id": "string",
          "meta": {},
          "preview_url": "string",
          "remote_url": "string",
          "text_url": "string",
          "type": "unknown",
          "url": "string"
        }
      ],
      "mentions": [
        {
          "acct": "string",
          "id": "string",
          "url": "string",
          "username": "string"
        }
      ],
      "muted": true,
      "pinned": true,
      "poll": {
        "emojis": [
          {
            "category": "string",
            "shortcode": "string",
            "static_url": "string",
            "url": "string",
            "visible_in_picker": true
          }
        ],
        "expired": true,
        "expires_at": "1970-01-01T00:00:00Z",
        "id": "string",
        "multiple": true,
        "options": [
          null
        ],
        "own_votes": [
          0
        ],
        "voted": true,
        "voters_count": 0,
        "votes_count": 0
      },
      "reblog": {},
      "reblogged": true,
      "reblogs_count": 0,
      "replies_count": 0,
      "sensitive": true,
      "spoiler_text": "string",
      "tags": [
        {
          "history": [
            {
              "accounts": "string",
              "day": "string",
              "uses": "string"
            }
          ],
          "name": "string",
          "url": "string"
        }
      ],
      "text": "string",
      "uri": "string",
      "url": "string",
      "visibility": "public"
    }
  ],
  "statuses": [
    {
      "history": [
        {
          "accounts": "string",
          "day": "string",
          "uses": "string"
        }
      ],
      "name": "string",
      "url": "string"
    }
  ]
}
```

> 401 Response

```json
{
  "error": "string",
  "error_description": "string"
}
```

<h3 id="getapiv2search-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Result|Inline|
|401|Unauthorized|Invalid or missing Authorization header|[Error](#schemaerror)|

<h3 id="getapiv2search-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accounts|[[Account](#schemaaccount)]|false|none|none|
|hashtags|[[Status](#schemastatus)]|false|none|none|
|statuses|[[Tag](#schematag)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

<h1 id="mastodon-api-specification-httpsgithubcommastodonmastodon-todosecurity">TODOSecurity</h1>

## post/api/v1/accounts

> Code samples

```bash
curl https://example.com/api/v1/accounts \
  -X POST \
  -H 'Content-Type: application/form-data' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{"agreement":true,"email":"string","locale":"string","password":"password","reason":"string","username":"string"}'
```

`POST /api/v1/accounts`

Creates a user and account records. Returns an account access token for the app that initiated the request. The app should save this token for later, and should wait for the user to confirm their account by clicking a link in their email inbox.

> Body parameter

```json
{
  "agreement": true,
  "email": "string",
  "locale": "string",
  "password": "password",
  "reason": "string",
  "username": "string"
}
```

<h3 id="postapiv1accounts-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» agreement|body|boolean|true|Whether the user agrees to the local rules, terms, and policies. These should be presented to the user in order to allow them to consent before setting this parameter to TRUE.|
|» email|body|string|true|The email address to be used for login|
|» locale|body|string|true|The language of the confirmation email that will be sent|
|» password|body|string(password)|true|The password to be used for login|
|» reason|body|string|false|Text that will be reviewed by moderators if registrations require manual approval.|
|» username|body|string|true|The desired username for the account|

<h3 id="postapiv1accounts-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|401|Unauthorized|Unauthorized|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

<h1 id="mastodon-api-specification-httpsgithubcommastodonmastodon-accounts">accounts</h1>

## get/api/v1/accounts/relationships

> Code samples

```bash
curl 'https://example.com/api/v1/accounts/relationships?id=string' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/v1/accounts/relationships`

Sets a private note on a user.

<h3 id="getapiv1accountsrelationships-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|query|[string]|true|Array of account IDs to check|

> Example responses

> 200 Response

```json
[
  {
    "blocked_by": true,
    "blocking": true,
    "domain_blocking": true,
    "endorsed": true,
    "followed_by": true,
    "following": true,
    "id": "string",
    "muting": true,
    "muting_notifications": true,
    "note": "string",
    "notifying": true,
    "requested": true,
    "showing_reblogs": true
  }
]
```

> 401 Response

```json
{
  "error": "string",
  "error_description": "string"
}
```

> 422 Response

```json
{
  "error": "string",
  "error_description": "string"
}
```

<h3 id="getapiv1accountsrelationships-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success.|Inline|
|401|Unauthorized|Invalid or missing Authorization header|[Error](#schemaerror)|
|422|Unprocessable Entity|Unprocessable Entity|[Error](#schemaerror)|

<h3 id="getapiv1accountsrelationships-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Relationship](#schemarelationship)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## get/api/v1/accounts/search

> Code samples

```bash
curl 'https://example.com/api/v1/accounts/search?q=string' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/v1/accounts/search`

Search for matching accounts by username or display name.

<h3 id="getapiv1accountssearch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|q|query|string|true|What to search for|
|limit|query|integer|false|Maximum number of results. Defaults to 40.|
|resolve|query|string|false|Attempt WebFinger lookup. Defaults to false. Use this when `q` is an exact address.|
|following|query|boolean|false|Only who the user is following. Defaults to false.|

> Example responses

> 200 Response

```json
[
  {
    "acct": "string",
    "avatar": "string",
    "avatar_static": "string",
    "bot": true,
    "created_at": "1970-01-01T00:00:00Z",
    "discoverable": true,
    "display_name": "string",
    "emojis": [
      {
        "category": "string",
        "shortcode": "string",
        "static_url": "string",
        "url": "string",
        "visible_in_picker": true
      }
    ],
    "fields": [
      {
        "name": "string",
        "value": "string",
        "verified_at": "1970-01-01T00:00:00Z"
      }
    ],
    "followers_count": 0,
    "following_count": 0,
    "header": "string",
    "header_static": "string",
    "id": "string",
    "last_status_at": "1970-01-01T00:00:00Z",
    "locked": true,
    "moved": {},
    "mute_expires_at": "1970-01-01T00:00:00Z",
    "note": "string",
    "source": {
      "fields": [
        {
          "name": "string",
          "value": "string",
          "verified_at": "1970-01-01T00:00:00Z"
        }
      ],
      "follow_requests_count": 0,
      "language": "string",
      "note": "string",
      "privacy": "public",
      "sensitive": true
    },
    "statuses_count": 0,
    "suspended": true,
    "url": "string",
    "username": "string"
  }
]
```

> 503 Response

```json
{
  "error": "string",
  "error_description": "string"
}
```

<h3 id="getapiv1accountssearch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Accounts matching `q` in username or display name|Inline|
|503|Service Unavailable|resolve=true, but the domain part of the user@domain address is not a currently live website|[Error](#schemaerror)|

<h3 id="getapiv1accountssearch-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Account](#schemaaccount)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## patch/api/v1/accounts/update_credentials

> Code samples

```bash
curl https://example.com/api/v1/accounts/update_credentials \
  -X PATCH \
  -H 'Content-Type: application/form-data' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{"avatar":"string","bot":true,"discoverable":"string","display_name":"string","fields_attributes":{},"header":"string","locked":true,"note":"string","source":{"language":"string","privacy":"string","sensitive":true}}'
```

`PATCH /api/v1/accounts/update_credentials`

Update the user's display and preferences.

> Body parameter

```json
{
  "avatar": "string",
  "bot": true,
  "discoverable": "string",
  "display_name": "string",
  "fields_attributes": {},
  "header": "string",
  "locked": true,
  "note": "string",
  "source": {
    "language": "string",
    "privacy": "string",
    "sensitive": true
  }
}
```

<h3 id="patchapiv1accountsupdatecredentials-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» avatar|body|string|false|Avatar image encoded using multipart/form-data|
|» bot|body|boolean|false|Whether the account has a bot flag.|
|» discoverable|body|string|false|Whether the account should be shown in the profile directory.|
|» display_name|body|string|false|The display name to use for the profile.|
|» fields_attributes|body|object|false|Profile metadata `name` and `value`. (By default, max 4 fields and 255 characters per property/value)|
|» header|body|string|false|Header image encoded using multipart/form-data|
|» locked|body|boolean|false|Whether manual approval of follow requests is required.|
|» note|body|string|false|The account bio.|
|» source|body|object|false|none|
|» » language|body|string|false|Default language to use for authored statuses. (ISO 6391)|
|» » privacy|body|string|false|Default post privacy for authored statuses.|
|» » sensitive|body|boolean|false|Whether to mark authored statuses as sensitive by default.|

> Example responses

> 200 Response

```json
{
  "acct": "string",
  "avatar": "string",
  "avatar_static": "string",
  "bot": true,
  "created_at": "1970-01-01T00:00:00Z",
  "discoverable": true,
  "display_name": "string",
  "emojis": [
    {
      "category": "string",
      "shortcode": "string",
      "static_url": "string",
      "url": "string",
      "visible_in_picker": true
    }
  ],
  "fields": [
    {
      "name": "string",
      "value": "string",
      "verified_at": "1970-01-01T00:00:00Z"
    }
  ],
  "followers_count": 0,
  "following_count": 0,
  "header": "string",
  "header_static": "string",
  "id": "string",
  "last_status_at": "1970-01-01T00:00:00Z",
  "locked": true,
  "moved": {},
  "mute_expires_at": "1970-01-01T00:00:00Z",
  "note": "string",
  "source": {
    "fields": [
      {
        "name": "string",
        "value": "string",
        "verified_at": "1970-01-01T00:00:00Z"
      }
    ],
    "follow_requests_count": 0,
    "language": "string",
    "note": "string",
    "privacy": "public",
    "sensitive": true
  },
  "statuses_count": 0,
  "suspended": true,
  "url": "string",
  "username": "string"
}
```

> 401 Response

```json
{
  "error": "string",
  "error_description": "string"
}
```

<h3 id="patchapiv1accountsupdatecredentials-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|You should use `accounts/verify_credentials` to first obtain plaintext representations from within the `source` parameter, then allow the user to edit these plaintext representations before submitting them through this API. The server will generate the corresponding HTML.|[Account](#schemaaccount)|
|401|Unauthorized|Unauthorized|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## get/api/v1/accounts/verify_credentials

> Code samples

```bash
curl https://example.com/api/v1/accounts/verify_credentials \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/v1/accounts/verify_credentials`

Test to make sure that the user token works.

> Example responses

> 200 Response

```json
{
  "acct": "string",
  "avatar": "string",
  "avatar_static": "string",
  "bot": true,
  "created_at": "1970-01-01T00:00:00Z",
  "discoverable": true,
  "display_name": "string",
  "emojis": [
    {
      "category": "string",
      "shortcode": "string",
      "static_url": "string",
      "url": "string",
      "visible_in_picker": true
    }
  ],
  "fields": [
    {
      "name": "string",
      "value": "string",
      "verified_at": "1970-01-01T00:00:00Z"
    }
  ],
  "followers_count": 0,
  "following_count": 0,
  "header": "string",
  "header_static": "string",
  "id": "string",
  "last_status_at": "1970-01-01T00:00:00Z",
  "locked": true,
  "moved": {},
  "mute_expires_at": "1970-01-01T00:00:00Z",
  "note": "string",
  "source": {
    "fields": [
      {
        "name": "string",
        "value": "string",
        "verified_at": "1970-01-01T00:00:00Z"
      }
    ],
    "follow_requests_count": 0,
    "language": "string",
    "note": "string",
    "privacy": "public",
    "sensitive": true
  },
  "statuses_count": 0,
  "suspended": true,
  "url": "string",
  "username": "string"
}
```

> 401 Response

```json
{
  "error": "string",
  "error_description": "string"
}
```

> 403 Response

```json
{
  "error": "string",
  "error_description": "string"
}
```

<h3 id="getapiv1accountsverifycredentials-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Note the extra `source` property, which is not visible on accounts other than your own. Also note that plain-text is used within `source` and HTML is used for their corresponding properties such as `note` and `fields`.|[Account](#schemaaccount)|
|401|Unauthorized|Your credential verification will fail if the token is invalid or incorrect.|[Error](#schemaerror)|
|403|Forbidden|Your user account is currently disabled, missing a confirmed email address, or pending approval.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## get/api/v1/accounts/{id}

> Code samples

```bash
curl https://example.com/api/v1/accounts/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/v1/accounts/{id}`

<h3 id="getapiv1accountsid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The id of the account in the database|

> Example responses

> 200 Response

```json
{
  "acct": "string",
  "avatar": "string",
  "avatar_static": "string",
  "bot": true,
  "created_at": "1970-01-01T00:00:00Z",
  "discoverable": true,
  "display_name": "string",
  "emojis": [
    {
      "category": "string",
      "shortcode": "string",
      "static_url": "string",
      "url": "string",
      "visible_in_picker": true
    }
  ],
  "fields": [
    {
      "name": "string",
      "value": "string",
      "verified_at": "1970-01-01T00:00:00Z"
    }
  ],
  "followers_count": 0,
  "following_count": 0,
  "header": "string",
  "header_static": "string",
  "id": "string",
  "last_status_at": "1970-01-01T00:00:00Z",
  "locked": true,
  "moved": {},
  "mute_expires_at": "1970-01-01T00:00:00Z",
  "note": "string",
  "source": {
    "fields": [
      {
        "name": "string",
        "value": "string",
        "verified_at": "1970-01-01T00:00:00Z"
      }
    ],
    "follow_requests_count": 0,
    "language": "string",
    "note": "string",
    "privacy": "public",
    "sensitive": true
  },
  "statuses_count": 0,
  "suspended": true,
  "url": "string",
  "username": "string"
}
```

> 401 Response

```json
{
  "error": "string",
  "error_description": "string"
}
```

> 404 Response

```json
{
  "error": "string",
  "error_description": "string"
}
```

<h3 id="getapiv1accountsid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Account record will be returned. Note that `acct` of local users does not include the domain name.|[Account](#schemaaccount)|
|401|Unauthorized|If the instance is in whitelist mode and the Authorization header is missing or invalid|[Error](#schemaerror)|
|404|Not Found|Account does not exist|[Error](#schemaerror)|
|410|Gone|Account is suspended|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## post/api/v1/accounts/{id}/block

> Code samples

```bash
curl https://example.com/api/v1/accounts/string/block \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /api/v1/accounts/{id}/block`

Block the given account. Clients should filter statuses from this account if received (e.g. due to a boost in the Home timeline).

<h3 id="postapiv1accountsidblock-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The id of the account in the database|

> Example responses

> 200 Response

```json
{
  "blocked_by": true,
  "blocking": true,
  "domain_blocking": true,
  "endorsed": true,
  "followed_by": true,
  "following": true,
  "id": "string",
  "muting": true,
  "muting_notifications": true,
  "note": "string",
  "notifying": true,
  "requested": true,
  "showing_reblogs": true
}
```

> 401 Response

```json
{
  "error": "string",
  "error_description": "string"
}
```

<h3 id="postapiv1accountsidblock-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully blocked, or account was already blocked|[Relationship](#schemarelationship)|
|401|Unauthorized|Invalid or missing Authorization header|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## get/api/v1/accounts/{id}/featured_tags

> Code samples

```bash
curl https://example.com/api/v1/accounts/string/featured_tags \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/v1/accounts/{id}/featured_tags`

Tags featured by this account.

<h3 id="getapiv1accountsidfeaturedtags-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The id of the account in the database|

> Example responses

> 200 Response

```json
[
  {
    "id": "string",
    "last_status_at": "1970-01-01T00:00:00Z",
    "name": "string",
    "statuses_count": 0,
    "url": "string"
  }
]
```

> 401 Response

```json
{
  "error": "string",
  "error_description": "string"
}
```

<h3 id="getapiv1accountsidfeaturedtags-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|401|Unauthorized|Invalid or missing Authorization header, or instance is in whitelist mode and your token is not authorized with a user|[Error](#schemaerror)|

<h3 id="getapiv1accountsidfeaturedtags-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[FeaturedTag](#schemafeaturedtag)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## post/api/v1/accounts/{id}/follow

> Code samples

```bash
curl https://example.com/api/v1/accounts/string/follow \
  -X POST \
  -H 'Content-Type: application/form-data' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{"notify":false,"reblogs":true}'
```

`POST /api/v1/accounts/{id}/follow`

Follow the given account. Can also be used to update whether to show reblogs or enable notifications.

> Body parameter

```json
{
  "notify": false,
  "reblogs": true
}
```

<h3 id="postapiv1accountsidfollow-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The id of the account in the database|
|body|body|object|false|none|
|» notify|body|boolean|false|Receive notifications when this account posts a status? Defaults to false.|
|» reblogs|body|boolean|false|Receive this account's reblogs in home timeline? Defaults to true.|

> Example responses

> 200 Response

```json
{
  "blocked_by": true,
  "blocking": true,
  "domain_blocking": true,
  "endorsed": true,
  "followed_by": true,
  "following": true,
  "id": "string",
  "muting": true,
  "muting_notifications": true,
  "note": "string",
  "notifying": true,
  "requested": true,
  "showing_reblogs": true
}
```

> 403 Response

```json
{
  "error": "string",
  "error_description": "string"
}
```

<h3 id="postapiv1accountsidfollow-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully followed, or account was already followed|[Relationship](#schemarelationship)|
|403|Forbidden|Trying to follow someone that you block or that blocks you|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## get/api/v1/accounts/{id}/followers

> Code samples

```bash
curl https://example.com/api/v1/accounts/string/followers \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/v1/accounts/{id}/followers`

Accounts which follow the given account, if network is not hidden by the account owner.

<h3 id="getapiv1accountsidfollowers-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|max_id|query|string|false|Internal parameter. Use HTTP `Link` header for pagination.|
|since_id|query|string|false|Internal parameter. Use HTTP `Link` header for pagination.|
|limit|query|integer|false|Maximum number of results to return. Defaults to 40.|
|id|path|string|true|The id of the account in the database|

> Example responses

> 200 Response

```json
[
  {
    "acct": "string",
    "avatar": "string",
    "avatar_static": "string",
    "bot": true,
    "created_at": "1970-01-01T00:00:00Z",
    "discoverable": true,
    "display_name": "string",
    "emojis": [
      {
        "category": "string",
        "shortcode": "string",
        "static_url": "string",
        "url": "string",
        "visible_in_picker": true
      }
    ],
    "fields": [
      {
        "name": "string",
        "value": "string",
        "verified_at": "1970-01-01T00:00:00Z"
      }
    ],
    "followers_count": 0,
    "following_count": 0,
    "header": "string",
    "header_static": "string",
    "id": "string",
    "last_status_at": "1970-01-01T00:00:00Z",
    "locked": true,
    "moved": {},
    "mute_expires_at": "1970-01-01T00:00:00Z",
    "note": "string",
    "source": {
      "fields": [
        {
          "name": "string",
          "value": "string",
          "verified_at": "1970-01-01T00:00:00Z"
        }
      ],
      "follow_requests_count": 0,
      "language": "string",
      "note": "string",
      "privacy": "public",
      "sensitive": true
    },
    "statuses_count": 0,
    "suspended": true,
    "url": "string",
    "username": "string"
  }
]
```

> 401 Response

```json
{
  "error": "string",
  "error_description": "string"
}
```

> 404 Response

```json
{
  "error": "string",
  "error_description": "string"
}
```

<h3 id="getapiv1accountsidfollowers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|401|Unauthorized|Invalid or missing Authorization header, or instance is in whitelist mode and your token is not authorized with a user|[Error](#schemaerror)|
|404|Not Found|Account is deleted or does not exist|[Error](#schemaerror)|
|410|Gone|Account is suspended|None|

<h3 id="getapiv1accountsidfollowers-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Account](#schemaaccount)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## get/api/v1/accounts/{id}/following

> Code samples

```bash
curl https://example.com/api/v1/accounts/string/following \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/v1/accounts/{id}/following`

Accounts which the given account is following, if network is not hidden by the account owner.

<h3 id="getapiv1accountsidfollowing-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|max_id|query|string|false|Internal parameter. Use HTTP `Link` header for pagination.|
|since_id|query|string|false|Internal parameter. Use HTTP `Link` header for pagination.|
|limit|query|integer|false|Maximum number of results to return. Defaults to 40.|
|id|path|string|true|The id of the account in the database|

> Example responses

> 200 Response

```json
[
  {
    "acct": "string",
    "avatar": "string",
    "avatar_static": "string",
    "bot": true,
    "created_at": "1970-01-01T00:00:00Z",
    "discoverable": true,
    "display_name": "string",
    "emojis": [
      {
        "category": "string",
        "shortcode": "string",
        "static_url": "string",
        "url": "string",
        "visible_in_picker": true
      }
    ],
    "fields": [
      {
        "name": "string",
        "value": "string",
        "verified_at": "1970-01-01T00:00:00Z"
      }
    ],
    "followers_count": 0,
    "following_count": 0,
    "header": "string",
    "header_static": "string",
    "id": "string",
    "last_status_at": "1970-01-01T00:00:00Z",
    "locked": true,
    "moved": {},
    "mute_expires_at": "1970-01-01T00:00:00Z",
    "note": "string",
    "source": {
      "fields": [
        {
          "name": "string",
          "value": "string",
          "verified_at": "1970-01-01T00:00:00Z"
        }
      ],
      "follow_requests_count": 0,
      "language": "string",
      "note": "string",
      "privacy": "public",
      "sensitive": true
    },
    "statuses_count": 0,
    "suspended": true,
    "url": "string",
    "username": "string"
  }
]
```

> 401 Response

```json
{
  "error": "string",
  "error_description": "string"
}
```

> 404 Response

```json
{
  "error": "string",
  "error_description": "string"
}
```

<h3 id="getapiv1accountsidfollowing-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|401|Unauthorized|Invalid or missing Authorization header, or instance is in whitelist mode and your token is not authorized with a user|[Error](#schemaerror)|
|404|Not Found|Account is deleted or does not exist|[Error](#schemaerror)|
|410|Gone|Account is suspended|None|

<h3 id="getapiv1accountsidfollowing-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Account](#schemaaccount)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## get/api/v1/accounts/{id}/identity_proofs

> Code samples

```bash
curl https://example.com/api/v1/accounts/string/identity_proofs \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/v1/accounts/{id}/identity_proofs`

Array of IdentityProof

<h3 id="getapiv1accountsididentityproofs-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The id of the account in the database|

> Example responses

> 200 Response

```json
[
  {
    "profile_url": "string",
    "proof_url": "string",
    "provider": "string",
    "provider_username": "string",
    "updated_at": "string"
  }
]
```

> 404 Response

```json
{
  "error": "string",
  "error_description": "string"
}
```

> 422 Response

```json
{
  "error": "string",
  "error_description": "string"
}
```

<h3 id="getapiv1accountsididentityproofs-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|404|Not Found|Account is deleted or does not exist|[Error](#schemaerror)|
|410|Gone|Account with given id is suspended|None|
|422|Unprocessable Entity|Unprocessable Entity|[Error](#schemaerror)|

<h3 id="getapiv1accountsididentityproofs-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[IdentityProof](#schemaidentityproof)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## get/api/v1/accounts/{id}/lists

> Code samples

```bash
curl https://example.com/api/v1/accounts/string/lists \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/v1/accounts/{id}/lists`

User lists that you have added this account to.

<h3 id="getapiv1accountsidlists-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The id of the account in the database|

> Example responses

> 200 Response

```json
[
  {
    "id": "string",
    "replies_policy": "followed",
    "title": "string"
  }
]
```

> 401 Response

```json
{
  "error": "string",
  "error_description": "string"
}
```

> 404 Response

```json
{
  "error": "string",
  "error_description": "string"
}
```

<h3 id="getapiv1accountsidlists-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|401|Unauthorized|Invalid or missing Authorization header, or instance is in whitelist mode and your token is not authorized with a user|[Error](#schemaerror)|
|404|Not Found|Account is deleted or does not exist|[Error](#schemaerror)|
|410|Gone|Account is suspended|None|

<h3 id="getapiv1accountsidlists-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[List](#schemalist)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## post/api/v1/accounts/{id}/mute

> Code samples

```bash
curl https://example.com/api/v1/accounts/string/mute \
  -X POST \
  -H 'Content-Type: application/form-data' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{"duration":0,"notifications":true}'
```

`POST /api/v1/accounts/{id}/mute`

Mute the given account. Clients should filter statuses and notifications from this account, if received (e.g. due to a boost in the Home timeline).

> Body parameter

```json
{
  "duration": 0,
  "notifications": true
}
```

<h3 id="postapiv1accountsidmute-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The id of the account in the database|
|body|body|object|false|none|
|» duration|body|integer|false|How long the mute should last, in seconds. Defaults to 0 (indefinite).|
|» notifications|body|boolean|false|Mute notifications in addition to statuses? Defaults to true.|

> Example responses

> 200 Response

```json
{
  "blocked_by": true,
  "blocking": true,
  "domain_blocking": true,
  "endorsed": true,
  "followed_by": true,
  "following": true,
  "id": "string",
  "muting": true,
  "muting_notifications": true,
  "note": "string",
  "notifying": true,
  "requested": true,
  "showing_reblogs": true
}
```

> 401 Response

```json
{
  "error": "string",
  "error_description": "string"
}
```

<h3 id="postapiv1accountsidmute-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully muted, or account was already muted. Note that you can call this API method again with notifications=false to update the relationship so that only statuses are muted.|[Relationship](#schemarelationship)|
|401|Unauthorized|Invalid or missing Authorization header|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## post/api/v1/accounts/{id}/note

> Code samples

```bash
curl https://example.com/api/v1/accounts/string/note \
  -X POST \
  -H 'Content-Type: application/form-data' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{"comment":"string"}'
```

`POST /api/v1/accounts/{id}/note`

Sets a private note on a user.

> Body parameter

```json
{
  "comment": "string"
}
```

<h3 id="postapiv1accountsidnote-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The id of the account in the database|
|body|body|object|false|none|
|» comment|body|string|false|The comment to be set on that user. Provide an empty string or leave out this parameter to clear the currently set note.|

> Example responses

> 200 Response

```json
{
  "blocked_by": true,
  "blocking": true,
  "domain_blocking": true,
  "endorsed": true,
  "followed_by": true,
  "following": true,
  "id": "string",
  "muting": true,
  "muting_notifications": true,
  "note": "string",
  "notifying": true,
  "requested": true,
  "showing_reblogs": true
}
```

> 401 Response

```json
{
  "error": "string",
  "error_description": "string"
}
```

<h3 id="postapiv1accountsidnote-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully unmuted, or account was already unmuted.|[Relationship](#schemarelationship)|
|401|Unauthorized|Invalid or missing Authorization header|[Error](#schemaerror)|
|422|Unprocessable Entity|Unprocessable Entity|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## post/api/v1/accounts/{id}/pin

> Code samples

```bash
curl https://example.com/api/v1/accounts/string/pin \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /api/v1/accounts/{id}/pin`

Add the given account to the user's featured profiles. (Featured profiles are currently shown on the user's own public profile.)

<h3 id="postapiv1accountsidpin-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The id of the account in the database|

> Example responses

> 200 Response

```json
{
  "blocked_by": true,
  "blocking": true,
  "domain_blocking": true,
  "endorsed": true,
  "followed_by": true,
  "following": true,
  "id": "string",
  "muting": true,
  "muting_notifications": true,
  "note": "string",
  "notifying": true,
  "requested": true,
  "showing_reblogs": true
}
```

> 401 Response

```json
{
  "error": "string",
  "error_description": "string"
}
```

> 403 Response

```json
{
  "error": "string",
  "error_description": "string"
}
```

> 422 Response

```json
{
  "error": "string",
  "error_description": "string"
}
```

> 500 Response

```json
{
  "error": "string",
  "error_description": "string"
}
```

<h3 id="postapiv1accountsidpin-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully unmuted, or account was already unmuted.|[Relationship](#schemarelationship)|
|401|Unauthorized|Invalid or missing Authorization header|[Error](#schemaerror)|
|403|Forbidden|Token is not authorized with a valid user or is missing a required scope|[Error](#schemaerror)|
|422|Unprocessable Entity|You are not following this account|[Error](#schemaerror)|
|500|Internal Server Error|Account already endorsed|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## get/api/v1/accounts/{id}/statuses

> Code samples

```bash
curl https://example.com/api/v1/accounts/string/statuses \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/v1/accounts/{id}/statuses`

Statuses posted to the given account.

<h3 id="getapiv1accountsidstatuses-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The id of the account in the database|

> Example responses

> 200 Response

```json
[
  {
    "account": {},
    "application": {
      "client_id": "string",
      "client_secret": "string",
      "name": "string",
      "vapid_key": "string",
      "website": "string"
    },
    "bookmarked": true,
    "card": {
      "author_name": "string",
      "author_url": "string",
      "blurhash": "string",
      "description": "string",
      "height": 0,
      "html": "string",
      "image": "string",
      "provider_name": "string",
      "provider_url": "string",
      "title": "string",
      "type": "link",
      "url": "string",
      "width": 0
    },
    "content": "string",
    "created_at": "1970-01-01T00:00:00Z",
    "emojis": [
      {
        "category": "string",
        "shortcode": "string",
        "static_url": "string",
        "url": "string",
        "visible_in_picker": true
      }
    ],
    "favourited": true,
    "favourites_count": 0,
    "id": "string",
    "in_reply_to_account_id": "string",
    "in_reply_to_id": "string",
    "language": "string",
    "media_attachments": [
      {
        "blurhash": "string",
        "description": "string",
        "id": "string",
        "meta": {},
        "preview_url": "string",
        "remote_url": "string",
        "text_url": "string",
        "type": "unknown",
        "url": "string"
      }
    ],
    "mentions": [
      {
        "acct": "string",
        "id": "string",
        "url": "string",
        "username": "string"
      }
    ],
    "muted": true,
    "pinned": true,
    "poll": {
      "emojis": [
        {
          "category": "string",
          "shortcode": "string",
          "static_url": "string",
          "url": "string",
          "visible_in_picker": true
        }
      ],
      "expired": true,
      "expires_at": "1970-01-01T00:00:00Z",
      "id": "string",
      "multiple": true,
      "options": [
        null
      ],
      "own_votes": [
        0
      ],
      "voted": true,
      "voters_count": 0,
      "votes_count": 0
    },
    "reblog": {},
    "reblogged": true,
    "reblogs_count": 0,
    "replies_count": 0,
    "sensitive": true,
    "spoiler_text": "string",
    "tags": [
      {
        "history": [
          {
            "accounts": "string",
            "day": "string",
            "uses": "string"
          }
        ],
        "name": "string",
        "url": "string"
      }
    ],
    "text": "string",
    "uri": "string",
    "url": "string",
    "visibility": "public"
  }
]
```

> 401 Response

```json
{
  "error": "string",
  "error_description": "string"
}
```

> 404 Response

```json
{
  "error": "string",
  "error_description": "string"
}
```

<h3 id="getapiv1accountsidstatuses-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Statuses posted to the given account. Public (for public statuses only), or user token + read:statuses (for private statuses the user is authorized to see)|Inline|
|401|Unauthorized|Instance is in whitelist mode or running a version of Mastodon older than 2.7.0, and the Authorization header is invalid or missing|[Error](#schemaerror)|
|404|Not Found|Account is deleted or does not exist|[Error](#schemaerror)|
|410|Gone|Account is suspended|None|

<h3 id="getapiv1accountsidstatuses-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Status](#schemastatus)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## post/api/v1/accounts/{id}/unblock

> Code samples

```bash
curl https://example.com/api/v1/accounts/string/unblock \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /api/v1/accounts/{id}/unblock`

Block the given account. Clients should filter statuses from this account if received (e.g. due to a boost in the Home timeline).

<h3 id="postapiv1accountsidunblock-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The id of the account in the database|

> Example responses

> 200 Response

```json
{
  "blocked_by": true,
  "blocking": true,
  "domain_blocking": true,
  "endorsed": true,
  "followed_by": true,
  "following": true,
  "id": "string",
  "muting": true,
  "muting_notifications": true,
  "note": "string",
  "notifying": true,
  "requested": true,
  "showing_reblogs": true
}
```

> 401 Response

```json
{
  "error": "string",
  "error_description": "string"
}
```

<h3 id="postapiv1accountsidunblock-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully unblocked, or account was already not blocked|[Relationship](#schemarelationship)|
|401|Unauthorized|Invalid or missing Authorization header|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## post/api/v1/accounts/{id}/unfollow

> Code samples

```bash
curl https://example.com/api/v1/accounts/string/unfollow \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /api/v1/accounts/{id}/unfollow`

Unfollow the given account.

<h3 id="postapiv1accountsidunfollow-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The id of the account in the database|

> Example responses

> 200 Response

```json
{
  "blocked_by": true,
  "blocking": true,
  "domain_blocking": true,
  "endorsed": true,
  "followed_by": true,
  "following": true,
  "id": "string",
  "muting": true,
  "muting_notifications": true,
  "note": "string",
  "notifying": true,
  "requested": true,
  "showing_reblogs": true
}
```

> 401 Response

```json
{
  "error": "string",
  "error_description": "string"
}
```

<h3 id="postapiv1accountsidunfollow-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully unfollowed, or account was already not followed|[Relationship](#schemarelationship)|
|401|Unauthorized|Invalid or missing Authorization header|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## post/api/v1/accounts/{id}/unmute

> Code samples

```bash
curl https://example.com/api/v1/accounts/string/unmute \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /api/v1/accounts/{id}/unmute`

Unmute the given account.

<h3 id="postapiv1accountsidunmute-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The id of the account in the database|

> Example responses

> 200 Response

```json
{
  "blocked_by": true,
  "blocking": true,
  "domain_blocking": true,
  "endorsed": true,
  "followed_by": true,
  "following": true,
  "id": "string",
  "muting": true,
  "muting_notifications": true,
  "note": "string",
  "notifying": true,
  "requested": true,
  "showing_reblogs": true
}
```

> 401 Response

```json
{
  "error": "string",
  "error_description": "string"
}
```

<h3 id="postapiv1accountsidunmute-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully unmuted, or account was already unmuted.|[Relationship](#schemarelationship)|
|401|Unauthorized|Invalid or missing Authorization header|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## post/api/v1/accounts/{id}/unpin

> Code samples

```bash
curl https://example.com/api/v1/accounts/string/unpin \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /api/v1/accounts/{id}/unpin`

Remove the given account from the user's featured profiles.

<h3 id="postapiv1accountsidunpin-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The id of the account in the database|

> Example responses

> 200 Response

```json
{
  "blocked_by": true,
  "blocking": true,
  "domain_blocking": true,
  "endorsed": true,
  "followed_by": true,
  "following": true,
  "id": "string",
  "muting": true,
  "muting_notifications": true,
  "note": "string",
  "notifying": true,
  "requested": true,
  "showing_reblogs": true
}
```

> 401 Response

```json
{
  "error": "string",
  "error_description": "string"
}
```

<h3 id="postapiv1accountsidunpin-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully unmuted, or account was already unmuted.|[Relationship](#schemarelationship)|
|401|Unauthorized|Invalid or missing Authorization header|[Error](#schemaerror)|
|422|Unprocessable Entity|Unprocessable Entity|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

<h1 id="mastodon-api-specification-httpsgithubcommastodonmastodon-apps">apps</h1>

## post/api/v1/apps

> Code samples

```bash
curl https://example.com/api/v1/apps \
  -X POST \
  -H 'Content-Type: application/form-data' \
  -H 'Accept: application/json' \
  -d '{"client_name":"string","redirect_uris":"string","scopes":"string","website":"string"}'
```

`POST /api/v1/apps`

Create a new application to obtain OAuth2 credentials.

> Body parameter

```json
{
  "client_name": "string",
  "redirect_uris": "string",
  "scopes": "string",
  "website": "string"
}
```

<h3 id="postapiv1apps-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» client_name|body|string|true|A name for your application|
|» redirect_uris|body|string|true|Where the user should be redirected after authorization. To display the authorization code to the user instead of redirecting to a web page, use urn:ietf:wg:oauth:2.0:oob in this parameter.|
|» scopes|body|string|false|Space separated list of scopes. If none is provided, defaults to read.|
|» website|body|string|false|A URL to the homepage of your app|

> Example responses

> 200 Response

```json
{
  "client_id": "string",
  "client_secret": "string",
  "id": "string",
  "name": "string",
  "redirect_uri": "string",
  "vapid_key": "string",
  "website": "string"
}
```

> 422 Response

```json
{
  "error": "string",
  "error_description": "string"
}
```

<h3 id="postapiv1apps-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|422|Unprocessable Entity|If a required parameter is missing or improperly formatted, the request will fail.|[Error](#schemaerror)|

<h3 id="postapiv1apps-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|client_id|string|false|none|none|
|client_secret|string|false|none|none|
|id|string|false|none|none|
|name|string|false|none|none|
|redirect_uri|string|false|none|none|
|vapid_key|string|false|none|none|
|website|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## get/api/v1/apps/verify_credentials

> Code samples

```bash
curl https://example.com/api/v1/apps/verify_credentials \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/v1/apps/verify_credentials`

Confirm that the app's OAuth2 credentials work.

> Example responses

> 200 Response

```json
{
  "client_id": "string",
  "client_secret": "string",
  "name": "string",
  "vapid_key": "string",
  "website": "string"
}
```

> 401 Response

```json
{
  "error": "string",
  "error_description": "string"
}
```

<h3 id="getapiv1appsverifycredentials-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|If the Authorization header was provided with a valid token, you should see your app returned as an Application entity.|[Application](#schemaapplication)|
|401|Unauthorized|If the Authorization header contains an invalid token, is malformed, or is not present, an error will be returned indicating an authorization failure.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

<h1 id="mastodon-api-specification-httpsgithubcommastodonmastodon-oauth">oauth</h1>

## get/oauth/authorize

> Code samples

```bash
curl 'https://example.com/oauth/authorize?response_type=string&client_id=string&redirect_uri=string' \
  -H 'Accept: application/json'
```

`GET /oauth/authorize`

Displays an authorization form to the user. If approved, it will create and return an authorization code, then redirect to the desired redirect_uri, or show the authorization code if urn:ietf:wg:oauth:2.0:oob was requested. The authorization code can be used while requesting a token to obtain access to user-level methods.

<h3 id="getoauthauthorize-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|response_type|query|string|true|Should be set equal to code.|
|client_id|query|string|true|Client ID, obtained during app registration.|
|redirect_uri|query|string|true|Set a URI to redirect the user to. If this parameter is set to urn:ietf:wg:oauth:2.0:oob then the authorization code will be shown instead. Must match one of the redirect URIs declared during app registration.|
|scope|query|string|false|List of requested OAuth scopes, separated by spaces (or by pluses, if using query parameters). Must be a subset of scopes declared during app registration. If not provided, defaults to read.|
|force_login|query|boolean|false|Added in 2.6.0. Forces the user to re-login, which is necessary for authorizing with multiple accounts from the same instance.|

> Example responses

> 400 Response

```json
{
  "error": "string",
  "error_description": "string"
}
```

<h3 id="getoauthauthorize-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The authorization code will be returned as a query parameter named code.|None|
|400|Bad Request|If the authorization code is incorrect or has been used already, the request will fail.|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## post/oauth/revoke

> Code samples

```bash
curl https://example.com/oauth/revoke \
  -X POST \
  -H 'Content-Type: application/form-data' \
  -H 'Accept: application/json' \
  -d '{"client_id":"string","client_secret":"string","token":"string"}'
```

`POST /oauth/revoke`

Revoke an access token to make it no longer valid for use.

> Body parameter

```json
{
  "client_id": "string",
  "client_secret": "string",
  "token": "string"
}
```

<h3 id="postoauthrevoke-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» client_id|body|string|true|Client ID, obtained during app registration|
|» client_secret|body|string|true|Client secret, obtained during app registration|
|» token|body|string|true|The previously obtained token, to be invalidated|

> Example responses

> 403 Response

```json
{
  "error": "string",
  "error_description": "string"
}
```

<h3 id="postoauthrevoke-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|If you own the provided token, the API call will provide an empty response. This operation is idempotent, so calling this API multiple times will still return OK.|None|
|403|Forbidden|If you provide a token you do not own, or no token at all, the API call will return a 403 error.|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## post/oauth/token

> Code samples

```bash
curl https://example.com/oauth/token \
  -X POST \
  -H 'Content-Type: application/form-data' \
  -H 'Accept: application/json' \
  -d '{"client_id":"string","client_secret":"string","code":"string","grant_type":"string","redirect_uri":"string","scopes":"string"}'
```

`POST /oauth/token`

Returns an access token, to be used during API calls that are not public.

> Body parameter

```json
{
  "client_id": "string",
  "client_secret": "string",
  "code": "string",
  "grant_type": "string",
  "redirect_uri": "string",
  "scopes": "string"
}
```

<h3 id="postoauthtoken-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» client_id|body|string|true|Client ID, obtained during app registration|
|» client_secret|body|string|true|Client secret, obtained during app registration|
|» code|body|string|false|A user authorization code, obtained via /oauth/authorize|
|» grant_type|body|string|true|Set equal to authorization_code if code is provided in order to gain user-level access. Otherwise, set equal to client_credentials to obtain app-level access only.|
|» redirect_uri|body|string|true|Set a URI to redirect the user to. If this parameter is set to urn:ietf:wg:oauth:2.0:oob then the token will be shown instead. Must match one of the redirect URIs declared during app registration.|
|» scopes|body|string|false|List of requested OAuth scopes, separated by spaces. Must be a subset of scopes declared during app registration. If not provided, defaults to read.|

> Example responses

> 200 Response

```json
{
  "access_token": "ZA-Yj3aBD8U8Cm7lKUp-lm9O9BmDgdhHzDeqsY8tlL0",
  "created_at": 1573979017,
  "scope": "read write follow push",
  "token_type": "Bearer"
}
```

> 400 Response

```json
{
  "error": "string",
  "error_description": "string"
}
```

> 401 Response

```json
{
  "error": "string",
  "error_description": "string"
}
```

<h3 id="postoauthtoken-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Store this access_token for later use with auth-required methods. The token should be passed as an HTTP Authorization header when making API calls, with the value Bearer access_token|Inline|
|400|Bad Request|If you try to request a scope that was not included when registering the app, the request will fail.|[Error](#schemaerror)|
|401|Unauthorized|If client_id and client_secret do not match or are invalid, the request will fail.|[Error](#schemaerror)|

<h3 id="postoauthtoken-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|access_token|string|false|none|none|
|created_at|integer|false|none|UNIX timestamp|
|scope|string|false|none|none|
|token_type|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

<h2 id="tocS_Account">Account</h2>
<!-- backwards compatibility -->
<a id="schemaaccount"></a>
<a id="schema_Account"></a>
<a id="tocSaccount"></a>
<a id="tocsaccount"></a>

```json
{
  "acct": "string",
  "avatar": "string",
  "avatar_static": "string",
  "bot": true,
  "created_at": "1970-01-01T00:00:00Z",
  "discoverable": true,
  "display_name": "string",
  "emojis": [
    {
      "category": "string",
      "shortcode": "string",
      "static_url": "string",
      "url": "string",
      "visible_in_picker": true
    }
  ],
  "fields": [
    {
      "name": "string",
      "value": "string",
      "verified_at": "1970-01-01T00:00:00Z"
    }
  ],
  "followers_count": 0,
  "following_count": 0,
  "header": "string",
  "header_static": "string",
  "id": "string",
  "last_status_at": "1970-01-01T00:00:00Z",
  "locked": true,
  "moved": {
    "acct": "string",
    "avatar": "string",
    "avatar_static": "string",
    "bot": true,
    "created_at": "1970-01-01T00:00:00Z",
    "discoverable": true,
    "display_name": "string",
    "emojis": [
      {
        "category": "string",
        "shortcode": "string",
        "static_url": "string",
        "url": "string",
        "visible_in_picker": true
      }
    ],
    "fields": [
      {
        "name": "string",
        "value": "string",
        "verified_at": "1970-01-01T00:00:00Z"
      }
    ],
    "followers_count": 0,
    "following_count": 0,
    "header": "string",
    "header_static": "string",
    "id": "string",
    "last_status_at": "1970-01-01T00:00:00Z",
    "locked": true,
    "moved": {},
    "mute_expires_at": "1970-01-01T00:00:00Z",
    "note": "string",
    "source": {
      "fields": [
        {
          "name": "string",
          "value": "string",
          "verified_at": "1970-01-01T00:00:00Z"
        }
      ],
      "follow_requests_count": 0,
      "language": "string",
      "note": "string",
      "privacy": "public",
      "sensitive": true
    },
    "statuses_count": 0,
    "suspended": true,
    "url": "string",
    "username": "string"
  },
  "mute_expires_at": "1970-01-01T00:00:00Z",
  "note": "string",
  "source": {
    "fields": [
      {
        "name": "string",
        "value": "string",
        "verified_at": "1970-01-01T00:00:00Z"
      }
    ],
    "follow_requests_count": 0,
    "language": "string",
    "note": "string",
    "privacy": "public",
    "sensitive": true
  },
  "statuses_count": 0,
  "suspended": true,
  "url": "string",
  "username": "string"
}
```

Represents a user of Mastodon and their associated profile.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|acct|string|false|none|The Webfinger account URI. Equal to `username` for local users, or `username@domain` for|
|avatar|string|false|none|An image icon that is shown next to statuses and in the profile. The format is URL.|
|avatar_static|string|false|none|A static version of the avatar. Equal to `avatar` if its value is a static image; different if `avatar` is an animated GIF. The format is URL.|
|bot|boolean|false|none|A presentational flag. Indicates that the account may perform automated actions, may not be monitored, or identifies as a robot.|
|created_at|string(date-time)|false|none|When the account was created.|
|discoverable|boolean|false|none|Whether the account has opted into discovery features such as the profile directory.|
|display_name|string|false|none|The profile's display name.|
|emojis|[[Emoji](#schemaemoji)]|false|none|Custom emoji entities to be used when rendering the profile. If none, an empty array will be returned.|
|fields|[[Field](#schemafield)]|false|none|Additional metadata attached to a profile as name-value pairs.|
|followers_count|integer|false|none|The reported followers of this profile.|
|following_count|integer|false|none|The reported follows of this profile.|
|header|string|false|none|An image banner that is shown above the profile and in profile cards. The format is URL.|
|header_static|string|false|none|A static version of the header. Equal to `header` if its value is a static image; different if `header` is an animated GIF. The format is URL.|
|id|string|false|none|The account id `header`.|
|last_status_at|string(date-time)|false|none|When the most recent status was posted.|
|locked|boolean|false|none|Whether the account manually approves follow requests.|
|moved|[Account](#schemaaccount)|false|none|Represents a user of Mastodon and their associated profile.|
|mute_expires_at|string(date-time)|false|none|When a timed mute will expire, if applicable. ISO 8601 Datetime.|
|note|string|false|none|The profile's bio / description.|
|source|[Source](#schemasource)|false|none|Represents display or publishing preferences of user's own account. Returned as an additional entity when verifying and updated credentials, as an attribute of Account.|
|statuses_count|integer|false|none|How many statuses are attached to this account.|
|suspended|boolean|false|none|An extra entity returned when an account is suspended.|
|url|string|false|none|The location of the user's profile page. (HTTPS URL)|
|username|string|false|none|The username of the account, not including domain.|

<h2 id="tocS_Activity">Activity</h2>
<!-- backwards compatibility -->
<a id="schemaactivity"></a>
<a id="schema_Activity"></a>
<a id="tocSactivity"></a>
<a id="tocsactivity"></a>

```json
{
  "logins": "string",
  "registrations": "string",
  "statuses": "string",
  "week": "string"
}
```

Represents a weekly bucket of instance activity.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|logins|string|false|none|User logins since the week began, String (cast from an integer).|
|registrations|string|false|none|User registrations since the week began, String (cast from an integer).|
|statuses|string|false|none|Statuses created since the week began, String (cast from an integer).|
|week|string|false|none|Midnight at the first day of the week.  (UNIX Timestamp).|

<h2 id="tocS_AdminAccount">AdminAccount</h2>
<!-- backwards compatibility -->
<a id="schemaadminaccount"></a>
<a id="schema_AdminAccount"></a>
<a id="tocSadminaccount"></a>
<a id="tocsadminaccount"></a>

```json
{
  "account": {
    "acct": "string",
    "avatar": "string",
    "avatar_static": "string",
    "bot": true,
    "created_at": "1970-01-01T00:00:00Z",
    "discoverable": true,
    "display_name": "string",
    "emojis": [
      {
        "category": "string",
        "shortcode": "string",
        "static_url": "string",
        "url": "string",
        "visible_in_picker": true
      }
    ],
    "fields": [
      {
        "name": "string",
        "value": "string",
        "verified_at": "1970-01-01T00:00:00Z"
      }
    ],
    "followers_count": 0,
    "following_count": 0,
    "header": "string",
    "header_static": "string",
    "id": "string",
    "last_status_at": "1970-01-01T00:00:00Z",
    "locked": true,
    "moved": {},
    "mute_expires_at": "1970-01-01T00:00:00Z",
    "note": "string",
    "source": {
      "fields": [
        {
          "name": "string",
          "value": "string",
          "verified_at": "1970-01-01T00:00:00Z"
        }
      ],
      "follow_requests_count": 0,
      "language": "string",
      "note": "string",
      "privacy": "public",
      "sensitive": true
    },
    "statuses_count": 0,
    "suspended": true,
    "url": "string",
    "username": "string"
  },
  "approved": true,
  "confirmed": true,
  "created_at": "1970-01-01T00:00:00Z",
  "created_by_application_id": "string",
  "disabled": true,
  "email": "string",
  "id": "string",
  "invite_request": "string",
  "invited_by_account_id": "string",
  "ip": "string",
  "locale": "string",
  "role": "string",
  "silenced": true,
  "suspended": true,
  "username": "string"
}
```

Admin-level information about a given account.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|account|[Account](#schemaaccount)|false|none|Represents a user of Mastodon and their associated profile.|
|approved|boolean|false|none|Whether the account is currently approved.|
|confirmed|boolean|false|none|Whether the account has confirmed their email address.|
|created_at|string(date-time)|false|none|When the account was first discovered.|
|created_by_application_id|string|false|none|The ID of the application that created this account. Cast from an integer, but not guaranteed to be a number.|
|disabled|boolean|false|none|Whether the account is currently disabled.|
|email|string|false|none|The email address associated with the account.|
|id|string|false|none|The ID of the account in the database. Cast from an integer, but not guaranteed to be a number.|
|invite_request|string|false|none|Invite request text ???|
|invited_by_account_id|string|false|none|The ID of the account that invited this user. Cast from an integer, but not guaranteed to be a number.|
|ip|string|false|none|The IP address last used to login to this account.|
|locale|string|false|none|The locale of the account. ISO 639 Part 1 two-letter language code.|
|role|string|false|none|The current role of the account. Enumerable oneOf.|
|silenced|boolean|false|none|Whether the account is currently silenced.|
|suspended|boolean|false|none|Whether the account is currently suspended.|
|username|string|false|none|The username of the account.|

<h2 id="tocS_AdminReport">AdminReport</h2>
<!-- backwards compatibility -->
<a id="schemaadminreport"></a>
<a id="schema_AdminReport"></a>
<a id="tocSadminreport"></a>
<a id="tocsadminreport"></a>

```json
{
  "account": {
    "acct": "string",
    "avatar": "string",
    "avatar_static": "string",
    "bot": true,
    "created_at": "1970-01-01T00:00:00Z",
    "discoverable": true,
    "display_name": "string",
    "emojis": [
      {
        "category": "string",
        "shortcode": "string",
        "static_url": "string",
        "url": "string",
        "visible_in_picker": true
      }
    ],
    "fields": [
      {
        "name": "string",
        "value": "string",
        "verified_at": "1970-01-01T00:00:00Z"
      }
    ],
    "followers_count": 0,
    "following_count": 0,
    "header": "string",
    "header_static": "string",
    "id": "string",
    "last_status_at": "1970-01-01T00:00:00Z",
    "locked": true,
    "moved": {},
    "mute_expires_at": "1970-01-01T00:00:00Z",
    "note": "string",
    "source": {
      "fields": [
        {
          "name": "string",
          "value": "string",
          "verified_at": "1970-01-01T00:00:00Z"
        }
      ],
      "follow_requests_count": 0,
      "language": "string",
      "note": "string",
      "privacy": "public",
      "sensitive": true
    },
    "statuses_count": 0,
    "suspended": true,
    "url": "string",
    "username": "string"
  },
  "action_taken": "string",
  "assigned_account": {
    "acct": "string",
    "avatar": "string",
    "avatar_static": "string",
    "bot": true,
    "created_at": "1970-01-01T00:00:00Z",
    "discoverable": true,
    "display_name": "string",
    "emojis": [
      {
        "category": "string",
        "shortcode": "string",
        "static_url": "string",
        "url": "string",
        "visible_in_picker": true
      }
    ],
    "fields": [
      {
        "name": "string",
        "value": "string",
        "verified_at": "1970-01-01T00:00:00Z"
      }
    ],
    "followers_count": 0,
    "following_count": 0,
    "header": "string",
    "header_static": "string",
    "id": "string",
    "last_status_at": "1970-01-01T00:00:00Z",
    "locked": true,
    "moved": {},
    "mute_expires_at": "1970-01-01T00:00:00Z",
    "note": "string",
    "source": {
      "fields": [
        {
          "name": "string",
          "value": "string",
          "verified_at": "1970-01-01T00:00:00Z"
        }
      ],
      "follow_requests_count": 0,
      "language": "string",
      "note": "string",
      "privacy": "public",
      "sensitive": true
    },
    "statuses_count": 0,
    "suspended": true,
    "url": "string",
    "username": "string"
  },
  "comment": "string",
  "created_at": "1970-01-01T00:00:00Z",
  "id": "string",
  "statuses": [
    {
      "account": {},
      "application": {
        "client_id": "string",
        "client_secret": "string",
        "name": "string",
        "vapid_key": "string",
        "website": "string"
      },
      "bookmarked": true,
      "card": {
        "author_name": "string",
        "author_url": "string",
        "blurhash": "string",
        "description": "string",
        "height": 0,
        "html": "string",
        "image": "string",
        "provider_name": "string",
        "provider_url": "string",
        "title": "string",
        "type": "link",
        "url": "string",
        "width": 0
      },
      "content": "string",
      "created_at": "1970-01-01T00:00:00Z",
      "emojis": [
        {
          "category": "string",
          "shortcode": "string",
          "static_url": "string",
          "url": "string",
          "visible_in_picker": true
        }
      ],
      "favourited": true,
      "favourites_count": 0,
      "id": "string",
      "in_reply_to_account_id": "string",
      "in_reply_to_id": "string",
      "language": "string",
      "media_attachments": [
        {
          "blurhash": "string",
          "description": "string",
          "id": "string",
          "meta": {},
          "preview_url": "string",
          "remote_url": "string",
          "text_url": "string",
          "type": "unknown",
          "url": "string"
        }
      ],
      "mentions": [
        {
          "acct": "string",
          "id": "string",
          "url": "string",
          "username": "string"
        }
      ],
      "muted": true,
      "pinned": true,
      "poll": {
        "emojis": [
          {
            "category": "string",
            "shortcode": "string",
            "static_url": "string",
            "url": "string",
            "visible_in_picker": true
          }
        ],
        "expired": true,
        "expires_at": "1970-01-01T00:00:00Z",
        "id": "string",
        "multiple": true,
        "options": [
          null
        ],
        "own_votes": [
          0
        ],
        "voted": true,
        "voters_count": 0,
        "votes_count": 0
      },
      "reblog": {},
      "reblogged": true,
      "reblogs_count": 0,
      "replies_count": 0,
      "sensitive": true,
      "spoiler_text": "string",
      "tags": [
        {
          "history": [
            {
              "accounts": "string",
              "day": "string",
              "uses": "string"
            }
          ],
          "name": "string",
          "url": "string"
        }
      ],
      "text": "string",
      "uri": "string",
      "url": "string",
      "visibility": "public"
    }
  ],
  "target_account": {
    "acct": "string",
    "avatar": "string",
    "avatar_static": "string",
    "bot": true,
    "created_at": "1970-01-01T00:00:00Z",
    "discoverable": true,
    "display_name": "string",
    "emojis": [
      {
        "category": "string",
        "shortcode": "string",
        "static_url": "string",
        "url": "string",
        "visible_in_picker": true
      }
    ],
    "fields": [
      {
        "name": "string",
        "value": "string",
        "verified_at": "1970-01-01T00:00:00Z"
      }
    ],
    "followers_count": 0,
    "following_count": 0,
    "header": "string",
    "header_static": "string",
    "id": "string",
    "last_status_at": "1970-01-01T00:00:00Z",
    "locked": true,
    "moved": {},
    "mute_expires_at": "1970-01-01T00:00:00Z",
    "note": "string",
    "source": {
      "fields": [
        {
          "name": "string",
          "value": "string",
          "verified_at": "1970-01-01T00:00:00Z"
        }
      ],
      "follow_requests_count": 0,
      "language": "string",
      "note": "string",
      "privacy": "public",
      "sensitive": true
    },
    "statuses_count": 0,
    "suspended": true,
    "url": "string",
    "username": "string"
  },
  "updated_at": "1970-01-01T00:00:00Z"
}
```

Admin-level information about a filed report.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|account|[Account](#schemaaccount)|false|none|Represents a user of Mastodon and their associated profile.|
|action_taken|string|false|none|The action taken to resolve this report. Enumerable oneOf.|
|assigned_account|[Account](#schemaaccount)|false|none|Represents a user of Mastodon and their associated profile.|
|comment|string|false|none|An optional reason for reporting.|
|created_at|string(date-time)|false|none|The time the report was filed.|
|id|string|false|none|The ID of the report in the database. Cast from an integer, but not guaranteed to be a number.|
|statuses|[[Status](#schemastatus)]|false|none|Statuses attached to the report, for context.|
|target_account|[Account](#schemaaccount)|false|none|Represents a user of Mastodon and their associated profile.|
|updated_at|string(date-time)|false|none|The time of last action on this report.|

<h2 id="tocS_Announcement">Announcement</h2>
<!-- backwards compatibility -->
<a id="schemaannouncement"></a>
<a id="schema_Announcement"></a>
<a id="tocSannouncement"></a>
<a id="tocsannouncement"></a>

```json
{
  "all_day": true,
  "created_at": "string",
  "ends_at": "string",
  "id": "string",
  "published": true,
  "read": true,
  "scheduled_at": "string",
  "starts_at": "string",
  "text": "string",
  "updated_at": "string"
}
```

Represents an announcement set by an administrator.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|all_day|boolean|true|none|Whether the announcement has a start/end time.|
|created_at|string|true|none|When the announcement was created.|
|ends_at|string|false|none|When the future announcement will end. ISO 8601 Datetime.|
|id|string|true|none|The announcement id. Cast from an integer, but not guaranteed to be a number.|
|published|boolean|true|none|Whether the announcement is currently active.|
|read|boolean|true|none|Whether the announcement has been read by the user.|
|scheduled_at|string|false|none|When the future announcement was scheduled. ISO 8601 Datetime.|
|starts_at|string|false|none|When the future announcement will start. ISO 8601 Datetime.|
|text|string|true|none|The content of the announcement.|
|updated_at|string|true|none|When the announcement was last updated. ISO 8601 Datetime.|

<h2 id="tocS_AnnouncementReaction">AnnouncementReaction</h2>
<!-- backwards compatibility -->
<a id="schemaannouncementreaction"></a>
<a id="schema_AnnouncementReaction"></a>
<a id="tocSannouncementreaction"></a>
<a id="tocsannouncementreaction"></a>

```json
{
  "count": 0,
  "me": true,
  "name": "string",
  "static_url": "string",
  "url": "string"
}
```

Represents an emoji reaction to an Announcement.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|integer|false|none|The total number of users who have added this reaction.|
|me|boolean|false|none|Whether the authorized user has added this reaction to the announcement.|
|name|string|false|none|The emoji used for the reaction. Either a unicode emoji, or a custom emoji's shortcode.|
|static_url|string|false|none|A link to a non-animated version of the custom emoji (URL).|
|url|string|false|none|A link to the custom emoji (URL).|

<h2 id="tocS_Application">Application</h2>
<!-- backwards compatibility -->
<a id="schemaapplication"></a>
<a id="schema_Application"></a>
<a id="tocSapplication"></a>
<a id="tocsapplication"></a>

```json
{
  "client_id": "string",
  "client_secret": "string",
  "name": "string",
  "vapid_key": "string",
  "website": "string"
}
```

Represents an application that interfaces with the REST API to access accounts or post statuses.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|client_id|string|false|none|Client ID key, to be used for obtaining OAuth tokens|
|client_secret|string|false|none|Client secret key, to be used for obtaining OAuth tokens|
|name|string|true|none|The name of your application.|
|vapid_key|string|false|none|Used for Push Streaming API. Returned with [POST /api/v1/apps](https://docs.joinmastodon.org/methods/apps/#create-an-application). Equivalent to [PushSubscription#server_key](https://docs.joinmastodon.org/entities/pushsubscription/#server_key)|
|website|string|false|none|The website associated with your application. Must be URL.|

<h2 id="tocS_Attachment">Attachment</h2>
<!-- backwards compatibility -->
<a id="schemaattachment"></a>
<a id="schema_Attachment"></a>
<a id="tocSattachment"></a>
<a id="tocsattachment"></a>

```json
{
  "blurhash": "string",
  "description": "string",
  "id": "string",
  "meta": {},
  "preview_url": "string",
  "remote_url": "string",
  "text_url": "string",
  "type": "unknown",
  "url": "string"
}
```

Represents a file or media attachment that can be added to a status.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|blurhash|string|false|none|A hash computed by the [BlurHash algorithm](https://github.com/woltapp/blurhash), for generating colorful preview thumbnails when media has not been downloaded yet.|
|description|string|false|none|Alternate text that describes what is in the media attachment, to be used for the visually impaired or when media attachments do not load.|
|id|string|true|none|The ID of the attachment in the database. Cast from an integer but not guaranteed to be a number|
|meta|object|false|none|Metadata returned by Paperclip.|
|preview_url|string|true|none|The location of a scaled-down preview of the attachment.|
|remote_url|string|false|none|The location of the full-size original attachment on the remote website. String or null if the attachment is local.|
|text_url|string|false|none|**Deprecated.** A shorter URL for the attachment.|
|type|string|true|none|The type of the attachment.|
|url|string|true|none|The location of the original full-size attachment.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|unknown|
|type|image|
|type|gifv|
|type|video|
|type|audio|

<h2 id="tocS_Card">Card</h2>
<!-- backwards compatibility -->
<a id="schemacard"></a>
<a id="schema_Card"></a>
<a id="tocScard"></a>
<a id="tocscard"></a>

```json
{
  "author_name": "string",
  "author_url": "string",
  "blurhash": "string",
  "description": "string",
  "height": 0,
  "html": "string",
  "image": "string",
  "provider_name": "string",
  "provider_url": "string",
  "title": "string",
  "type": "link",
  "url": "string",
  "width": 0
}
```

Represents a rich preview card that is generated using OpenGraph tags from a URL.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|author_name|string|false|none|The author of the original resource.|
|author_url|string|false|none|A link to the author of the original resource.|
|blurhash|string|false|none|A hash computed by the [BlurHash algorithm](https://github.com/woltapp/blurhash), for generating colorful preview thumbnails when media has not been downloaded yet.|
|description|string|true|none|Description of preview.|
|height|integer|false|none|Height of preview, in pixels.|
|html|string|false|none|HTML to be used for generating the preview card.|
|image|string|false|none|Preview thumbnail (URL).|
|provider_name|string|false|none|The provider of the original resource.|
|provider_url|string|false|none|A link to the provider of the original resource.|
|title|string|true|none|Title of linked resource.|
|type|string|true|none|The type of the preview card. String (Enumerable, oneOf).|
|url|string|true|none|Location of linked resource.|
|width|integer|false|none|Width of preview, in pixels.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|link|
|type|photo|
|type|video|
|type|rich|

<h2 id="tocS_Context">Context</h2>
<!-- backwards compatibility -->
<a id="schemacontext"></a>
<a id="schema_Context"></a>
<a id="tocScontext"></a>
<a id="tocscontext"></a>

```json
{
  "ancestors": [
    {
      "account": {},
      "application": {
        "client_id": "string",
        "client_secret": "string",
        "name": "string",
        "vapid_key": "string",
        "website": "string"
      },
      "bookmarked": true,
      "card": {
        "author_name": "string",
        "author_url": "string",
        "blurhash": "string",
        "description": "string",
        "height": 0,
        "html": "string",
        "image": "string",
        "provider_name": "string",
        "provider_url": "string",
        "title": "string",
        "type": "link",
        "url": "string",
        "width": 0
      },
      "content": "string",
      "created_at": "1970-01-01T00:00:00Z",
      "emojis": [
        {
          "category": "string",
          "shortcode": "string",
          "static_url": "string",
          "url": "string",
          "visible_in_picker": true
        }
      ],
      "favourited": true,
      "favourites_count": 0,
      "id": "string",
      "in_reply_to_account_id": "string",
      "in_reply_to_id": "string",
      "language": "string",
      "media_attachments": [
        {
          "blurhash": "string",
          "description": "string",
          "id": "string",
          "meta": {},
          "preview_url": "string",
          "remote_url": "string",
          "text_url": "string",
          "type": "unknown",
          "url": "string"
        }
      ],
      "mentions": [
        {
          "acct": "string",
          "id": "string",
          "url": "string",
          "username": "string"
        }
      ],
      "muted": true,
      "pinned": true,
      "poll": {
        "emojis": [
          {
            "category": "string",
            "shortcode": "string",
            "static_url": "string",
            "url": "string",
            "visible_in_picker": true
          }
        ],
        "expired": true,
        "expires_at": "1970-01-01T00:00:00Z",
        "id": "string",
        "multiple": true,
        "options": [
          null
        ],
        "own_votes": [
          0
        ],
        "voted": true,
        "voters_count": 0,
        "votes_count": 0
      },
      "reblog": {},
      "reblogged": true,
      "reblogs_count": 0,
      "replies_count": 0,
      "sensitive": true,
      "spoiler_text": "string",
      "tags": [
        {
          "history": [
            {
              "accounts": "string",
              "day": "string",
              "uses": "string"
            }
          ],
          "name": "string",
          "url": "string"
        }
      ],
      "text": "string",
      "uri": "string",
      "url": "string",
      "visibility": "public"
    }
  ],
  "descendants": [
    {
      "account": {},
      "application": {
        "client_id": "string",
        "client_secret": "string",
        "name": "string",
        "vapid_key": "string",
        "website": "string"
      },
      "bookmarked": true,
      "card": {
        "author_name": "string",
        "author_url": "string",
        "blurhash": "string",
        "description": "string",
        "height": 0,
        "html": "string",
        "image": "string",
        "provider_name": "string",
        "provider_url": "string",
        "title": "string",
        "type": "link",
        "url": "string",
        "width": 0
      },
      "content": "string",
      "created_at": "1970-01-01T00:00:00Z",
      "emojis": [
        {
          "category": "string",
          "shortcode": "string",
          "static_url": "string",
          "url": "string",
          "visible_in_picker": true
        }
      ],
      "favourited": true,
      "favourites_count": 0,
      "id": "string",
      "in_reply_to_account_id": "string",
      "in_reply_to_id": "string",
      "language": "string",
      "media_attachments": [
        {
          "blurhash": "string",
          "description": "string",
          "id": "string",
          "meta": {},
          "preview_url": "string",
          "remote_url": "string",
          "text_url": "string",
          "type": "unknown",
          "url": "string"
        }
      ],
      "mentions": [
        {
          "acct": "string",
          "id": "string",
          "url": "string",
          "username": "string"
        }
      ],
      "muted": true,
      "pinned": true,
      "poll": {
        "emojis": [
          {
            "category": "string",
            "shortcode": "string",
            "static_url": "string",
            "url": "string",
            "visible_in_picker": true
          }
        ],
        "expired": true,
        "expires_at": "1970-01-01T00:00:00Z",
        "id": "string",
        "multiple": true,
        "options": [
          null
        ],
        "own_votes": [
          0
        ],
        "voted": true,
        "voters_count": 0,
        "votes_count": 0
      },
      "reblog": {},
      "reblogged": true,
      "reblogs_count": 0,
      "replies_count": 0,
      "sensitive": true,
      "spoiler_text": "string",
      "tags": [
        {
          "history": [
            {
              "accounts": "string",
              "day": "string",
              "uses": "string"
            }
          ],
          "name": "string",
          "url": "string"
        }
      ],
      "text": "string",
      "uri": "string",
      "url": "string",
      "visibility": "public"
    }
  ]
}
```

Represents the tree around a given status. Used for reconstructing threads of statuses.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ancestors|[[Status](#schemastatus)]|true|none|Parents in the thread.|
|descendants|[[Status](#schemastatus)]|true|none|Children in the thread.|

<h2 id="tocS_Conversation">Conversation</h2>
<!-- backwards compatibility -->
<a id="schemaconversation"></a>
<a id="schema_Conversation"></a>
<a id="tocSconversation"></a>
<a id="tocsconversation"></a>

```json
{
  "accounts": [
    {
      "acct": "string",
      "avatar": "string",
      "avatar_static": "string",
      "bot": true,
      "created_at": "1970-01-01T00:00:00Z",
      "discoverable": true,
      "display_name": "string",
      "emojis": [
        {
          "category": "string",
          "shortcode": "string",
          "static_url": "string",
          "url": "string",
          "visible_in_picker": true
        }
      ],
      "fields": [
        {
          "name": "string",
          "value": "string",
          "verified_at": "1970-01-01T00:00:00Z"
        }
      ],
      "followers_count": 0,
      "following_count": 0,
      "header": "string",
      "header_static": "string",
      "id": "string",
      "last_status_at": "1970-01-01T00:00:00Z",
      "locked": true,
      "moved": {},
      "mute_expires_at": "1970-01-01T00:00:00Z",
      "note": "string",
      "source": {
        "fields": [
          {
            "name": "string",
            "value": "string",
            "verified_at": "1970-01-01T00:00:00Z"
          }
        ],
        "follow_requests_count": 0,
        "language": "string",
        "note": "string",
        "privacy": "public",
        "sensitive": true
      },
      "statuses_count": 0,
      "suspended": true,
      "url": "string",
      "username": "string"
    }
  ],
  "id": "string",
  "last_status": {
    "account": {},
    "application": {
      "client_id": "string",
      "client_secret": "string",
      "name": "string",
      "vapid_key": "string",
      "website": "string"
    },
    "bookmarked": true,
    "card": {
      "author_name": "string",
      "author_url": "string",
      "blurhash": "string",
      "description": "string",
      "height": 0,
      "html": "string",
      "image": "string",
      "provider_name": "string",
      "provider_url": "string",
      "title": "string",
      "type": "link",
      "url": "string",
      "width": 0
    },
    "content": "string",
    "created_at": "1970-01-01T00:00:00Z",
    "emojis": [
      {
        "category": "string",
        "shortcode": "string",
        "static_url": "string",
        "url": "string",
        "visible_in_picker": true
      }
    ],
    "favourited": true,
    "favourites_count": 0,
    "id": "string",
    "in_reply_to_account_id": "string",
    "in_reply_to_id": "string",
    "language": "string",
    "media_attachments": [
      {
        "blurhash": "string",
        "description": "string",
        "id": "string",
        "meta": {},
        "preview_url": "string",
        "remote_url": "string",
        "text_url": "string",
        "type": "unknown",
        "url": "string"
      }
    ],
    "mentions": [
      {
        "acct": "string",
        "id": "string",
        "url": "string",
        "username": "string"
      }
    ],
    "muted": true,
    "pinned": true,
    "poll": {
      "emojis": [
        {
          "category": "string",
          "shortcode": "string",
          "static_url": "string",
          "url": "string",
          "visible_in_picker": true
        }
      ],
      "expired": true,
      "expires_at": "1970-01-01T00:00:00Z",
      "id": "string",
      "multiple": true,
      "options": [
        null
      ],
      "own_votes": [
        0
      ],
      "voted": true,
      "voters_count": 0,
      "votes_count": 0
    },
    "reblog": {},
    "reblogged": true,
    "reblogs_count": 0,
    "replies_count": 0,
    "sensitive": true,
    "spoiler_text": "string",
    "tags": [
      {
        "history": [
          {
            "accounts": "string",
            "day": "string",
            "uses": "string"
          }
        ],
        "name": "string",
        "url": "string"
      }
    ],
    "text": "string",
    "uri": "string",
    "url": "string",
    "visibility": "public"
  },
  "unread": true
}
```

Represents a conversation with "direct message" visibility.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accounts|[[Account](#schemaaccount)]|true|none|Participants in the conversation.|
|id|string|true|none|Local database ID of the conversation. Cast from an integer, but not guaranteed to be a number|
|last_status|[Status](#schemastatus)|false|none|Represents a status posted by an account.|
|unread|boolean|true|none|Is the conversation currently marked as unread?|

<h2 id="tocS_Emoji">Emoji</h2>
<!-- backwards compatibility -->
<a id="schemaemoji"></a>
<a id="schema_Emoji"></a>
<a id="tocSemoji"></a>
<a id="tocsemoji"></a>

```json
{
  "category": "string",
  "shortcode": "string",
  "static_url": "string",
  "url": "string",
  "visible_in_picker": true
}
```

Represents a custom emoji.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|category|string|false|none|Used for sorting custom emoji in the picker.|
|shortcode|string|true|none|The name of the custom emoji.|
|static_url|string|true|none|A link to a static copy of the custom emoji. The format is URL.|
|url|string|true|none|A link to the custom emoji. The format is URL.|
|visible_in_picker|boolean|true|none|Whether this Emoji should be visible in the picker or unlisted.|

<h2 id="tocS_Error">Error</h2>
<!-- backwards compatibility -->
<a id="schemaerror"></a>
<a id="schema_Error"></a>
<a id="tocSerror"></a>
<a id="tocserror"></a>

```json
{
  "error": "string",
  "error_description": "string"
}
```

Represents an error message.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|true|none|none|
|error_description|string|false|none|none|

<h2 id="tocS_FeaturedTag">FeaturedTag</h2>
<!-- backwards compatibility -->
<a id="schemafeaturedtag"></a>
<a id="schema_FeaturedTag"></a>
<a id="tocSfeaturedtag"></a>
<a id="tocsfeaturedtag"></a>

```json
{
  "id": "string",
  "last_status_at": "1970-01-01T00:00:00Z",
  "name": "string",
  "statuses_count": 0,
  "url": "string"
}
```

Represents a hashtag that is featured on a profile.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|The internal ID of the featured tag in the database. Cast from integer but not guaranteed to be a number|
|last_status_at|string(date-time)|false|none|The timestamp of the last authored status containing this hashtag. ISO 8601 Datetime.|
|name|string|false|none|The name of the hashtag being featured.|
|statuses_count|integer|false|none|The number of authored statuses containing this hashtag.|
|url|string|false|none|A link to all statuses by a user that contain this hashtag.|

<h2 id="tocS_Field">Field</h2>
<!-- backwards compatibility -->
<a id="schemafield"></a>
<a id="schema_Field"></a>
<a id="tocSfield"></a>
<a id="tocsfield"></a>

```json
{
  "name": "string",
  "value": "string",
  "verified_at": "1970-01-01T00:00:00Z"
}
```

Represents a profile field as a name-value pair with optional verification.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|The key of a given field's key-value pair.|
|value|string|false|none|The value associated with the `name` key.|
|verified_at|string(date-time)|false|none|Timestamp of when the server verified a URL value for a rel="me” link. If `value` is a verified URL. Otherwise, null|

<h2 id="tocS_Filter">Filter</h2>
<!-- backwards compatibility -->
<a id="schemafilter"></a>
<a id="schema_Filter"></a>
<a id="tocSfilter"></a>
<a id="tocsfilter"></a>

```json
{
  "context": [
    "home"
  ],
  "expires_at": "string",
  "id": "string",
  "irreversible": true,
  "phrase": "string",
  "whole_word": true
}
```

Represents a user-defined filter for determining which statuses should not be shown to the user.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|context|[string]|false|none|The contexts in which the filter should be applied.|
|expires_at|string|false|none|When the filter should no longer be applied. ISO 8601 Datetime, or null if the filter does not expire|
|id|string|false|none|The ID of the filter in the database. Cast from an integer, but not guaranteed to be a number.|
|irreversible|boolean|false|none|Should matching entities in home and notifications be dropped by the server?|
|phrase|string|false|none|The text to be filtered.|
|whole_word|boolean|false|none|Should the filter consider word boundaries?|

#### Enumerated Values

|Property|Value|
|---|---|
|context|home|
|context|notifications|
|context|public|
|context|thread|

<h2 id="tocS_History">History</h2>
<!-- backwards compatibility -->
<a id="schemahistory"></a>
<a id="schema_History"></a>
<a id="tocShistory"></a>
<a id="tocshistory"></a>

```json
{
  "accounts": "string",
  "day": "string",
  "uses": "string"
}
```

Represents daily usage history of a hashtag.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accounts|string|true|none|the total of accounts using the tag within that day. Cast from an integer.|
|day|string|true|none|UNIX timestamp on midnight of the given day.|
|uses|string|true|none|the counted usage of the tag within that day. Cast from an integer.|

<h2 id="tocS_IdentityProof">IdentityProof</h2>
<!-- backwards compatibility -->
<a id="schemaidentityproof"></a>
<a id="schema_IdentityProof"></a>
<a id="tocSidentityproof"></a>
<a id="tocsidentityproof"></a>

```json
{
  "profile_url": "string",
  "proof_url": "string",
  "provider": "string",
  "provider_username": "string",
  "updated_at": "string"
}
```

Represents a proof from an external identity provider.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|profile_url|string|false|none|The account owner's profile URL on the identity provider.|
|proof_url|string|false|none|A link to a statement of identity proof, hosted by the identity provider.|
|provider|string|false|none|The name of the identity provider.|
|provider_username|string|false|none|The account owner's username on the identity provider's service.|
|updated_at|string|false|none|When the identity proof was last updated. ISO 8601 Datetime.|

<h2 id="tocS_Instance">Instance</h2>
<!-- backwards compatibility -->
<a id="schemainstance"></a>
<a id="schema_Instance"></a>
<a id="tocSinstance"></a>
<a id="tocsinstance"></a>

```json
{
  "approval_required": true,
  "contact_account": {
    "acct": "string",
    "avatar": "string",
    "avatar_static": "string",
    "bot": true,
    "created_at": "1970-01-01T00:00:00Z",
    "discoverable": true,
    "display_name": "string",
    "emojis": [
      {
        "category": "string",
        "shortcode": "string",
        "static_url": "string",
        "url": "string",
        "visible_in_picker": true
      }
    ],
    "fields": [
      {
        "name": "string",
        "value": "string",
        "verified_at": "1970-01-01T00:00:00Z"
      }
    ],
    "followers_count": 0,
    "following_count": 0,
    "header": "string",
    "header_static": "string",
    "id": "string",
    "last_status_at": "1970-01-01T00:00:00Z",
    "locked": true,
    "moved": {},
    "mute_expires_at": "1970-01-01T00:00:00Z",
    "note": "string",
    "source": {
      "fields": [
        {
          "name": "string",
          "value": "string",
          "verified_at": "1970-01-01T00:00:00Z"
        }
      ],
      "follow_requests_count": 0,
      "language": "string",
      "note": "string",
      "privacy": "public",
      "sensitive": true
    },
    "statuses_count": 0,
    "suspended": true,
    "url": "string",
    "username": "string"
  },
  "description": "string",
  "email": "string",
  "invites_enabled": true,
  "languages": [
    "string"
  ],
  "registrations": true,
  "short_description": "string",
  "stats": {},
  "thumbnail": "string",
  "title": "string",
  "uri": "string",
  "urls": {},
  "version": "string"
}
```

Represents the software instance of Mastodon running on this domain.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|approval_required|boolean|true|none|Whether registrations require moderator approval.|
|contact_account|[Account](#schemaaccount)|false|none|Represents a user of Mastodon and their associated profile.|
|description|string|true|none|Admin-defined description of the Mastodon site.|
|email|string|true|none|An email that may be contacted for any inquiries.|
|invites_enabled|boolean|true|none|Whether invites are enabled.|
|languages|[string]|true|none|Primary languages of the website and its staff. ISO 639 Part 1-5 language codes.|
|registrations|boolean|true|none|Whether registrations are enabled.|
|short_description|string|true|none|A shorter description defined by the admin.|
|stats|object|true|none|Statistics about how much information the instance contains.|
|thumbnail|string \| null|false|none|Banner image for the website.|
|title|string|true|none|The title of the website.|
|uri|string|true|none|The domain name of the instance.|
|urls|object|true|none|URLs of interest for clients apps.|
|version|string|true|none|The version of Mastodon installed on the instance.|

<h2 id="tocS_List">List</h2>
<!-- backwards compatibility -->
<a id="schemalist"></a>
<a id="schema_List"></a>
<a id="tocSlist"></a>
<a id="tocslist"></a>

```json
{
  "id": "string",
  "replies_policy": "followed",
  "title": "string"
}
```

Represents a list of some users that the authenticated user follows.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|The internal database ID of the list. Cast from an integer, but not guaranteed to be a number.|
|replies_policy|string|true|none|The user-defined title of the list.|
|title|string|true|none|The user-defined title of the list.|

#### Enumerated Values

|Property|Value|
|---|---|
|replies_policy|followed|
|replies_policy|list|
|replies_policy|none|

<h2 id="tocS_Marker">Marker</h2>
<!-- backwards compatibility -->
<a id="schemamarker"></a>
<a id="schema_Marker"></a>
<a id="tocSmarker"></a>
<a id="tocsmarker"></a>

```json
{
  "home": {},
  "last_read_id": "string",
  "notifications": {},
  "updated_at": "1970-01-01T00:00:00Z",
  "version": 0
}
```

Represents the last read position within a user's timelines.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|home|object|false|none|Information about the user's position in the home timeline.|
|last_read_id|string|false|none|The ID of the most recently viewed entity. Cast from integer but not guaranteed to be a number|
|notifications|object|false|none|Information about the user's position in their notifications.|
|updated_at|string(date-time)|false|none|The timestamp of when the marker was set. ISO 8601 Datetime.|
|version|integer|false|none|Used for locking to prevent write conflicts.|

<h2 id="tocS_Mention">Mention</h2>
<!-- backwards compatibility -->
<a id="schemamention"></a>
<a id="schema_Mention"></a>
<a id="tocSmention"></a>
<a id="tocsmention"></a>

```json
{
  "acct": "string",
  "id": "string",
  "url": "string",
  "username": "string"
}
```

Represents a mention of a user within the content of a status.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|acct|string|true|none|The webfinger acct URI of the mentioned user. Equivalent to `username` for local users, or `username@domain` for remote users.|
|id|string|true|none|The account id of the mentioned user. Cast from an integer, but not guaranteed to be a number|
|url|string|true|none|The location of the mentioned user's profile.|
|username|string|true|none|The username of the mentioned user.|

<h2 id="tocS_Notification">Notification</h2>
<!-- backwards compatibility -->
<a id="schemanotification"></a>
<a id="schema_Notification"></a>
<a id="tocSnotification"></a>
<a id="tocsnotification"></a>

```json
{
  "account": {
    "acct": "string",
    "avatar": "string",
    "avatar_static": "string",
    "bot": true,
    "created_at": "1970-01-01T00:00:00Z",
    "discoverable": true,
    "display_name": "string",
    "emojis": [
      {
        "category": "string",
        "shortcode": "string",
        "static_url": "string",
        "url": "string",
        "visible_in_picker": true
      }
    ],
    "fields": [
      {
        "name": "string",
        "value": "string",
        "verified_at": "1970-01-01T00:00:00Z"
      }
    ],
    "followers_count": 0,
    "following_count": 0,
    "header": "string",
    "header_static": "string",
    "id": "string",
    "last_status_at": "1970-01-01T00:00:00Z",
    "locked": true,
    "moved": {},
    "mute_expires_at": "1970-01-01T00:00:00Z",
    "note": "string",
    "source": {
      "fields": [
        {
          "name": "string",
          "value": "string",
          "verified_at": "1970-01-01T00:00:00Z"
        }
      ],
      "follow_requests_count": 0,
      "language": "string",
      "note": "string",
      "privacy": "public",
      "sensitive": true
    },
    "statuses_count": 0,
    "suspended": true,
    "url": "string",
    "username": "string"
  },
  "created_at": "1970-01-01T00:00:00Z",
  "id": "string",
  "status": {
    "account": {},
    "application": {
      "client_id": "string",
      "client_secret": "string",
      "name": "string",
      "vapid_key": "string",
      "website": "string"
    },
    "bookmarked": true,
    "card": {
      "author_name": "string",
      "author_url": "string",
      "blurhash": "string",
      "description": "string",
      "height": 0,
      "html": "string",
      "image": "string",
      "provider_name": "string",
      "provider_url": "string",
      "title": "string",
      "type": "link",
      "url": "string",
      "width": 0
    },
    "content": "string",
    "created_at": "1970-01-01T00:00:00Z",
    "emojis": [
      {
        "category": "string",
        "shortcode": "string",
        "static_url": "string",
        "url": "string",
        "visible_in_picker": true
      }
    ],
    "favourited": true,
    "favourites_count": 0,
    "id": "string",
    "in_reply_to_account_id": "string",
    "in_reply_to_id": "string",
    "language": "string",
    "media_attachments": [
      {
        "blurhash": "string",
        "description": "string",
        "id": "string",
        "meta": {},
        "preview_url": "string",
        "remote_url": "string",
        "text_url": "string",
        "type": "unknown",
        "url": "string"
      }
    ],
    "mentions": [
      {
        "acct": "string",
        "id": "string",
        "url": "string",
        "username": "string"
      }
    ],
    "muted": true,
    "pinned": true,
    "poll": {
      "emojis": [
        {
          "category": "string",
          "shortcode": "string",
          "static_url": "string",
          "url": "string",
          "visible_in_picker": true
        }
      ],
      "expired": true,
      "expires_at": "1970-01-01T00:00:00Z",
      "id": "string",
      "multiple": true,
      "options": [
        null
      ],
      "own_votes": [
        0
      ],
      "voted": true,
      "voters_count": 0,
      "votes_count": 0
    },
    "reblog": {},
    "reblogged": true,
    "reblogs_count": 0,
    "replies_count": 0,
    "sensitive": true,
    "spoiler_text": "string",
    "tags": [
      {
        "history": [
          {
            "accounts": "string",
            "day": "string",
            "uses": "string"
          }
        ],
        "name": "string",
        "url": "string"
      }
    ],
    "text": "string",
    "uri": "string",
    "url": "string",
    "visibility": "public"
  },
  "type": "follow"
}
```

Represents a notification of an event relevant to the user.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|account|[Account](#schemaaccount)|true|none|Represents a user of Mastodon and their associated profile.|
|created_at|string(date-time)|true|none|The timestamp of the notification. ISO 8601 Datetime.|
|id|string|true|none|The id of the notification in the database. Cast from an integer, but not guaranteed to be a number.|
|status|[Status](#schemastatus)|false|none|Represents a status posted by an account.|
|type|string|true|none|The type of event that resulted in the notification.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|follow|
|type|follow_request|
|type|mention|
|type|reblog|
|type|favourite|
|type|poll|
|type|status|

<h2 id="tocS_Poll">Poll</h2>
<!-- backwards compatibility -->
<a id="schemapoll"></a>
<a id="schema_Poll"></a>
<a id="tocSpoll"></a>
<a id="tocspoll"></a>

```json
{
  "emojis": [
    {
      "category": "string",
      "shortcode": "string",
      "static_url": "string",
      "url": "string",
      "visible_in_picker": true
    }
  ],
  "expired": true,
  "expires_at": "1970-01-01T00:00:00Z",
  "id": "string",
  "multiple": true,
  "options": [
    null
  ],
  "own_votes": [
    0
  ],
  "voted": true,
  "voters_count": 0,
  "votes_count": 0
}
```

Represents a poll attached to a status.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|emojis|[[Emoji](#schemaemoji)]|false|none|Custom emoji to be used for rendering poll options.|
|expired|boolean|false|none|Is the poll currently expired?|
|expires_at|string(date-time)|false|none|When the poll ends. ISO 8601 Datetime, or null if the poll does not end.|
|id|string|false|none|The ID of the poll in the database. Cast from an integer, but not guaranteed to be a number.|
|multiple|boolean|false|none|Does the poll allow multiple-choice answers?|
|options|[object]|false|none|Possible answers for the poll.|
|own_votes|[integer]|false|none|When called with a user token, which options has the authorized user chosen? Contains an array of index values for `options`. Array of Number, or null if no current user|
|voted|boolean|false|none|When called with a user token, has the authorized user voted? Boolean, or null if no current user|
|voters_count|integer|false|none|How many unique accounts have voted on a multiple-choice poll. Number, or null if `multiple` is false.|
|votes_count|integer|false|none|How many votes have been received.|

<h2 id="tocS_Preferences">Preferences</h2>
<!-- backwards compatibility -->
<a id="schemapreferences"></a>
<a id="schema_Preferences"></a>
<a id="tocSpreferences"></a>
<a id="tocspreferences"></a>

```json
{
  "posting:default:language": "string",
  "posting:default:sensitive": true,
  "posting:default:visibility": "public",
  "reading:expand:media": "default",
  "reading:expand:spoilers": true
}
```

Represents a user's preferences.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|posting:default:language|string|false|none|Default language for new posts. Equivalent to [Source#language](https://docs.joinmastodon.org/entities/source/#language). ISO 639-1 language two-letter code, or null|
|posting:default:sensitive|boolean|false|none|Default sensitivity flag for new posts. Equivalent to [Source#sensitive](https://docs.joinmastodon.org/entities/source/#sensitive).|
|posting:default:visibility|string|false|none|Default visibility for new posts. Equivalent to [Source#privacy](https://docs.joinmastodon.org/entities/source/#privacy).|
|reading:expand:media|string|false|none|Whether media attachments should be automatically displayed or blurred/hidden.|
|reading:expand:spoilers|boolean|false|none|Whether CWs should be expanded by default.|

#### Enumerated Values

|Property|Value|
|---|---|
|posting:default:visibility|public|
|posting:default:visibility|unlisted|
|posting:default:visibility|private|
|posting:default:visibility|direct|
|reading:expand:media|default|
|reading:expand:media|show_all|
|reading:expand:media|hide_all|

<h2 id="tocS_PushSubscription">PushSubscription</h2>
<!-- backwards compatibility -->
<a id="schemapushsubscription"></a>
<a id="schema_PushSubscription"></a>
<a id="tocSpushsubscription"></a>
<a id="tocspushsubscription"></a>

```json
{
  "alerts": {},
  "endpoint": "string",
  "id": "string",
  "server_key": "string"
}
```

Represents a subscription to the push streaming server.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|alerts|object|true|none|Which alerts should be delivered to the `endpoint`.|
|endpoint|string|true|none|Where push alerts will be sent to.|
|id|string|true|none|The ID of the push subscription in the database. Cast from an integer, but not guaranteed to be a number.|
|server_key|string|true|none|The streaming server's VAPID key.|

<h2 id="tocS_Relationship">Relationship</h2>
<!-- backwards compatibility -->
<a id="schemarelationship"></a>
<a id="schema_Relationship"></a>
<a id="tocSrelationship"></a>
<a id="tocsrelationship"></a>

```json
{
  "blocked_by": true,
  "blocking": true,
  "domain_blocking": true,
  "endorsed": true,
  "followed_by": true,
  "following": true,
  "id": "string",
  "muting": true,
  "muting_notifications": true,
  "note": "string",
  "notifying": true,
  "requested": true,
  "showing_reblogs": true
}
```

Represents the relationship between accounts, such as following / blocking / muting / etc.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|blocked_by|boolean|true|none|Is this user blocking you?|
|blocking|boolean|true|none|Are you blocking this user?|
|domain_blocking|boolean|true|none|Are you blocking this user's domain?|
|endorsed|boolean|true|none|Are you featuring this user on your profile?|
|followed_by|boolean|true|none|Are you followed by this user?|
|following|boolean|true|none|Are you following this user?|
|id|string|true|none|The account id. Cast from an integer, but not guaranteed to be a number.|
|muting|boolean|true|none|Are you muting this user?|
|muting_notifications|boolean|true|none|Are you muting notifications from this user?|
|note|string|true|none|This user's profile bio|
|notifying|boolean|true|none|Have you enabled notifications for this user?|
|requested|boolean|true|none|Do you have a pending follow request for this user?|
|showing_reblogs|boolean|true|none|Are you receiving this user's boosts in your home timeline?|

<h2 id="tocS_Report">Report</h2>
<!-- backwards compatibility -->
<a id="schemareport"></a>
<a id="schema_Report"></a>
<a id="tocSreport"></a>
<a id="tocsreport"></a>

```json
{
  "action_taken": true,
  "action_taken_at": "1970-01-01T00:00:00Z",
  "category": "other",
  "comment": "string",
  "created_at": "1970-01-01T00:00:00Z",
  "forwarded": true,
  "id": "string",
  "rule_ids": [
    0
  ],
  "status_ids": [
    0
  ],
  "target_account": {
    "acct": "string",
    "avatar": "string",
    "avatar_static": "string",
    "bot": true,
    "created_at": "1970-01-01T00:00:00Z",
    "discoverable": true,
    "display_name": "string",
    "emojis": [
      {
        "category": "string",
        "shortcode": "string",
        "static_url": "string",
        "url": "string",
        "visible_in_picker": true
      }
    ],
    "fields": [
      {
        "name": "string",
        "value": "string",
        "verified_at": "1970-01-01T00:00:00Z"
      }
    ],
    "followers_count": 0,
    "following_count": 0,
    "header": "string",
    "header_static": "string",
    "id": "string",
    "last_status_at": "1970-01-01T00:00:00Z",
    "locked": true,
    "moved": {},
    "mute_expires_at": "1970-01-01T00:00:00Z",
    "note": "string",
    "source": {
      "fields": [
        {
          "name": "string",
          "value": "string",
          "verified_at": "1970-01-01T00:00:00Z"
        }
      ],
      "follow_requests_count": 0,
      "language": "string",
      "note": "string",
      "privacy": "public",
      "sensitive": true
    },
    "statuses_count": 0,
    "suspended": true,
    "url": "string",
    "username": "string"
  }
}
```

Reports filed against users and/or statuses, to be taken action on by moderators.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action_taken|boolean|false|none|none|
|action_taken_at|string(date-time)|false|none|none|
|category|string|false|none|none|
|comment|string|false|none|none|
|created_at|string(date-time)|false|none|none|
|forwarded|boolean|false|none|none|
|id|string|false|none|none|
|rule_ids|[integer]|false|none|none|
|status_ids|[integer]|false|none|none|
|target_account|[Account](#schemaaccount)|false|none|Represents a user of Mastodon and their associated profile.|

#### Enumerated Values

|Property|Value|
|---|---|
|category|other|
|category|spam|
|category|violation|

<h2 id="tocS_Results">Results</h2>
<!-- backwards compatibility -->
<a id="schemaresults"></a>
<a id="schema_Results"></a>
<a id="tocSresults"></a>
<a id="tocsresults"></a>

```json
{
  "accounts": [
    {
      "acct": "string",
      "avatar": "string",
      "avatar_static": "string",
      "bot": true,
      "created_at": "1970-01-01T00:00:00Z",
      "discoverable": true,
      "display_name": "string",
      "emojis": [
        {
          "category": "string",
          "shortcode": "string",
          "static_url": "string",
          "url": "string",
          "visible_in_picker": true
        }
      ],
      "fields": [
        {
          "name": "string",
          "value": "string",
          "verified_at": "1970-01-01T00:00:00Z"
        }
      ],
      "followers_count": 0,
      "following_count": 0,
      "header": "string",
      "header_static": "string",
      "id": "string",
      "last_status_at": "1970-01-01T00:00:00Z",
      "locked": true,
      "moved": {},
      "mute_expires_at": "1970-01-01T00:00:00Z",
      "note": "string",
      "source": {
        "fields": [
          {
            "name": "string",
            "value": "string",
            "verified_at": "1970-01-01T00:00:00Z"
          }
        ],
        "follow_requests_count": 0,
        "language": "string",
        "note": "string",
        "privacy": "public",
        "sensitive": true
      },
      "statuses_count": 0,
      "suspended": true,
      "url": "string",
      "username": "string"
    }
  ],
  "hashtags": [
    {
      "history": [
        {
          "accounts": "string",
          "day": "string",
          "uses": "string"
        }
      ],
      "name": "string",
      "url": "string"
    }
  ],
  "statuses": [
    {
      "account": {},
      "application": {
        "client_id": "string",
        "client_secret": "string",
        "name": "string",
        "vapid_key": "string",
        "website": "string"
      },
      "bookmarked": true,
      "card": {
        "author_name": "string",
        "author_url": "string",
        "blurhash": "string",
        "description": "string",
        "height": 0,
        "html": "string",
        "image": "string",
        "provider_name": "string",
        "provider_url": "string",
        "title": "string",
        "type": "link",
        "url": "string",
        "width": 0
      },
      "content": "string",
      "created_at": "1970-01-01T00:00:00Z",
      "emojis": [
        {
          "category": "string",
          "shortcode": "string",
          "static_url": "string",
          "url": "string",
          "visible_in_picker": true
        }
      ],
      "favourited": true,
      "favourites_count": 0,
      "id": "string",
      "in_reply_to_account_id": "string",
      "in_reply_to_id": "string",
      "language": "string",
      "media_attachments": [
        {
          "blurhash": "string",
          "description": "string",
          "id": "string",
          "meta": {},
          "preview_url": "string",
          "remote_url": "string",
          "text_url": "string",
          "type": "unknown",
          "url": "string"
        }
      ],
      "mentions": [
        {
          "acct": "string",
          "id": "string",
          "url": "string",
          "username": "string"
        }
      ],
      "muted": true,
      "pinned": true,
      "poll": {
        "emojis": [
          {
            "category": "string",
            "shortcode": "string",
            "static_url": "string",
            "url": "string",
            "visible_in_picker": true
          }
        ],
        "expired": true,
        "expires_at": "1970-01-01T00:00:00Z",
        "id": "string",
        "multiple": true,
        "options": [
          null
        ],
        "own_votes": [
          0
        ],
        "voted": true,
        "voters_count": 0,
        "votes_count": 0
      },
      "reblog": {},
      "reblogged": true,
      "reblogs_count": 0,
      "replies_count": 0,
      "sensitive": true,
      "spoiler_text": "string",
      "tags": [
        {
          "history": [
            {
              "accounts": "string",
              "day": "string",
              "uses": "string"
            }
          ],
          "name": "string",
          "url": "string"
        }
      ],
      "text": "string",
      "uri": "string",
      "url": "string",
      "visibility": "public"
    }
  ]
}
```

Represents the results of a search.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accounts|[[Account](#schemaaccount)]|true|none|Accounts which match the given query.|
|hashtags|[[Tag](#schematag)]|true|none|Hashtags which match the given query.|
|statuses|[[Status](#schemastatus)]|true|none|Statuses which match the given query.|

<h2 id="tocS_ScheduledStatus">ScheduledStatus</h2>
<!-- backwards compatibility -->
<a id="schemascheduledstatus"></a>
<a id="schema_ScheduledStatus"></a>
<a id="tocSscheduledstatus"></a>
<a id="tocsscheduledstatus"></a>

```json
{
  "id": "string",
  "media_attachments": [
    {
      "blurhash": "string",
      "description": "string",
      "id": "string",
      "meta": {},
      "preview_url": "string",
      "remote_url": "string",
      "text_url": "string",
      "type": "unknown",
      "url": "string"
    }
  ],
  "params": {
    "application_id": "string",
    "in_reply_to_id": "string",
    "media_ids": [
      "string"
    ],
    "scheduled_at": "1970-01-01T00:00:00Z",
    "sensitive": true,
    "spoiler_text": "string",
    "text": "string",
    "visibility": "string"
  },
  "scheduled_at": "1970-01-01T00:00:00Z"
}
```

Represents a status that will be published at a future scheduled date.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|ID of the scheduled status in the database. Cast from an integer, but not guaranteed to be a number.|
|media_attachments|[[Attachment](#schemaattachment)]|true|none|Array of attachements|
|params|[StatusParams](#schemastatusparams)|true|none|none|
|scheduled_at|string(date-time)|true|none|ID of the status in the database. ISO 8601 Datetime.|

<h2 id="tocS_Source">Source</h2>
<!-- backwards compatibility -->
<a id="schemasource"></a>
<a id="schema_Source"></a>
<a id="tocSsource"></a>
<a id="tocssource"></a>

```json
{
  "fields": [
    {
      "name": "string",
      "value": "string",
      "verified_at": "1970-01-01T00:00:00Z"
    }
  ],
  "follow_requests_count": 0,
  "language": "string",
  "note": "string",
  "privacy": "public",
  "sensitive": true
}
```

Represents display or publishing preferences of user's own account. Returned as an additional entity when verifying and updated credentials, as an attribute of Account.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|fields|[[Field](#schemafield)]|false|none|Metadata about the account.|
|follow_requests_count|integer|false|none|The number of pending follow requests|
|language|string|false|none|The default posting language for new statuses, ISO 639-1 language two-letter code.|
|note|string|false|none|Profile bio|
|privacy|string|false|none|The default post privacy to be used for new statuses.|
|sensitive|boolean|false|none|Whether new statuses should be marked sensitive by default.|

#### Enumerated Values

|Property|Value|
|---|---|
|privacy|public|
|privacy|unlisted|
|privacy|private|
|privacy|direct|

<h2 id="tocS_Status">Status</h2>
<!-- backwards compatibility -->
<a id="schemastatus"></a>
<a id="schema_Status"></a>
<a id="tocSstatus"></a>
<a id="tocsstatus"></a>

```json
{
  "account": {
    "acct": "string",
    "avatar": "string",
    "avatar_static": "string",
    "bot": true,
    "created_at": "1970-01-01T00:00:00Z",
    "discoverable": true,
    "display_name": "string",
    "emojis": [
      {
        "category": "string",
        "shortcode": "string",
        "static_url": "string",
        "url": "string",
        "visible_in_picker": true
      }
    ],
    "fields": [
      {
        "name": "string",
        "value": "string",
        "verified_at": "1970-01-01T00:00:00Z"
      }
    ],
    "followers_count": 0,
    "following_count": 0,
    "header": "string",
    "header_static": "string",
    "id": "string",
    "last_status_at": "1970-01-01T00:00:00Z",
    "locked": true,
    "moved": {},
    "mute_expires_at": "1970-01-01T00:00:00Z",
    "note": "string",
    "source": {
      "fields": [
        {
          "name": "string",
          "value": "string",
          "verified_at": "1970-01-01T00:00:00Z"
        }
      ],
      "follow_requests_count": 0,
      "language": "string",
      "note": "string",
      "privacy": "public",
      "sensitive": true
    },
    "statuses_count": 0,
    "suspended": true,
    "url": "string",
    "username": "string"
  },
  "application": {
    "client_id": "string",
    "client_secret": "string",
    "name": "string",
    "vapid_key": "string",
    "website": "string"
  },
  "bookmarked": true,
  "card": {
    "author_name": "string",
    "author_url": "string",
    "blurhash": "string",
    "description": "string",
    "height": 0,
    "html": "string",
    "image": "string",
    "provider_name": "string",
    "provider_url": "string",
    "title": "string",
    "type": "link",
    "url": "string",
    "width": 0
  },
  "content": "string",
  "created_at": "1970-01-01T00:00:00Z",
  "emojis": [
    {
      "category": "string",
      "shortcode": "string",
      "static_url": "string",
      "url": "string",
      "visible_in_picker": true
    }
  ],
  "favourited": true,
  "favourites_count": 0,
  "id": "string",
  "in_reply_to_account_id": "string",
  "in_reply_to_id": "string",
  "language": "string",
  "media_attachments": [
    {
      "blurhash": "string",
      "description": "string",
      "id": "string",
      "meta": {},
      "preview_url": "string",
      "remote_url": "string",
      "text_url": "string",
      "type": "unknown",
      "url": "string"
    }
  ],
  "mentions": [
    {
      "acct": "string",
      "id": "string",
      "url": "string",
      "username": "string"
    }
  ],
  "muted": true,
  "pinned": true,
  "poll": {
    "emojis": [
      {
        "category": "string",
        "shortcode": "string",
        "static_url": "string",
        "url": "string",
        "visible_in_picker": true
      }
    ],
    "expired": true,
    "expires_at": "1970-01-01T00:00:00Z",
    "id": "string",
    "multiple": true,
    "options": [
      null
    ],
    "own_votes": [
      0
    ],
    "voted": true,
    "voters_count": 0,
    "votes_count": 0
  },
  "reblog": {
    "account": {},
    "application": {
      "client_id": "string",
      "client_secret": "string",
      "name": "string",
      "vapid_key": "string",
      "website": "string"
    },
    "bookmarked": true,
    "card": {
      "author_name": "string",
      "author_url": "string",
      "blurhash": "string",
      "description": "string",
      "height": 0,
      "html": "string",
      "image": "string",
      "provider_name": "string",
      "provider_url": "string",
      "title": "string",
      "type": "link",
      "url": "string",
      "width": 0
    },
    "content": "string",
    "created_at": "1970-01-01T00:00:00Z",
    "emojis": [
      {
        "category": "string",
        "shortcode": "string",
        "static_url": "string",
        "url": "string",
        "visible_in_picker": true
      }
    ],
    "favourited": true,
    "favourites_count": 0,
    "id": "string",
    "in_reply_to_account_id": "string",
    "in_reply_to_id": "string",
    "language": "string",
    "media_attachments": [
      {
        "blurhash": "string",
        "description": "string",
        "id": "string",
        "meta": {},
        "preview_url": "string",
        "remote_url": "string",
        "text_url": "string",
        "type": "unknown",
        "url": "string"
      }
    ],
    "mentions": [
      {
        "acct": "string",
        "id": "string",
        "url": "string",
        "username": "string"
      }
    ],
    "muted": true,
    "pinned": true,
    "poll": {
      "emojis": [
        {
          "category": "string",
          "shortcode": "string",
          "static_url": "string",
          "url": "string",
          "visible_in_picker": true
        }
      ],
      "expired": true,
      "expires_at": "1970-01-01T00:00:00Z",
      "id": "string",
      "multiple": true,
      "options": [
        null
      ],
      "own_votes": [
        0
      ],
      "voted": true,
      "voters_count": 0,
      "votes_count": 0
    },
    "reblog": {},
    "reblogged": true,
    "reblogs_count": 0,
    "replies_count": 0,
    "sensitive": true,
    "spoiler_text": "string",
    "tags": [
      {
        "history": [
          {
            "accounts": "string",
            "day": "string",
            "uses": "string"
          }
        ],
        "name": "string",
        "url": "string"
      }
    ],
    "text": "string",
    "uri": "string",
    "url": "string",
    "visibility": "public"
  },
  "reblogged": true,
  "reblogs_count": 0,
  "replies_count": 0,
  "sensitive": true,
  "spoiler_text": "string",
  "tags": [
    {
      "history": [
        {
          "accounts": "string",
          "day": "string",
          "uses": "string"
        }
      ],
      "name": "string",
      "url": "string"
    }
  ],
  "text": "string",
  "uri": "string",
  "url": "string",
  "visibility": "public"
}
```

Represents a status posted by an account.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|account|[Account](#schemaaccount)|false|none|Represents a user of Mastodon and their associated profile.|
|application|[Application](#schemaapplication)|false|none|Represents an application that interfaces with the REST API to access accounts or post statuses.|
|bookmarked|boolean|false|none|Have you bookmarked this status?|
|card|[Card](#schemacard)|false|none|Represents a rich preview card that is generated using OpenGraph tags from a URL.|
|content|string|false|none|HTML-encoded status content.|
|created_at|string(date-time)|false|none|The date when this status was created.|
|emojis|[[Emoji](#schemaemoji)]|false|none|Custom emoji to be used when rendering status content.|
|favourited|boolean|false|none|Have you favourited this status?|
|favourites_count|integer|false|none|How many favourites this status has received.|
|id|string|false|none|ID of the status in the database. Cast from an integer but not guaranteed to be a number.|
|in_reply_to_account_id|string|false|none|ID of the account being replied to.|
|in_reply_to_id|string|false|none|ID of the status being replied. Cast from an integer but not guaranteed to be a number.|
|language|string|false|none|Primary language of this status. ISO 639 Part 1 two-letter language code.|
|media_attachments|[[Attachment](#schemaattachment)]|false|none|Media that is attached to this status.|
|mentions|[[Mention](#schemamention)]|false|none|Mentions of users within the status content.|
|muted|boolean|false|none|Have you muted notifications for this status's conversation?|
|pinned|boolean|false|none|Have you pinned this status? Only appears if the status is pinnable.|
|poll|[Poll](#schemapoll)|false|none|Represents a poll attached to a status.|
|reblog|[Status](#schemastatus)|false|none|Represents a status posted by an account.|
|reblogged|boolean|false|none|Have you boosted this status?|
|reblogs_count|integer|false|none|How many boosts this status has received.|
|replies_count|integer|false|none|How many replies this status has received.|
|sensitive|boolean|false|none|Is this status marked as sensitive content?|
|spoiler_text|string|false|none|Subject or summary line, below which status content is collapsed until expanded.|
|tags|[[Tag](#schematag)]|false|none|Hashtags used within the status content.|
|text|string|false|none|Plain-text source of a status. Returned instead of `content` when status is deleted, so the user may redraft from the source text without the client having to reverse-engineer the original text from the HTML content.|
|uri|string|false|none|URI of the status used for federation.|
|url|string|false|none|A link to the status's HTML representation.|
|visibility|string|false|none|Visibility of this status.|

#### Enumerated Values

|Property|Value|
|---|---|
|visibility|public|
|visibility|unlisted|
|visibility|private|
|visibility|direct|

<h2 id="tocS_StatusParams">StatusParams</h2>
<!-- backwards compatibility -->
<a id="schemastatusparams"></a>
<a id="schema_StatusParams"></a>
<a id="tocSstatusparams"></a>
<a id="tocsstatusparams"></a>

```json
{
  "application_id": "string",
  "in_reply_to_id": "string",
  "media_ids": [
    "string"
  ],
  "scheduled_at": "1970-01-01T00:00:00Z",
  "sensitive": true,
  "spoiler_text": "string",
  "text": "string",
  "visibility": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|application_id|string|false|none|application_id|
|in_reply_to_id|string|false|none|in_reply_to_id|
|media_ids|[string]|false|none|media_ids|
|scheduled_at|string(date-time)|false|none|scheduled_at|
|sensitive|boolean|false|none|sensitive|
|spoiler_text|string|false|none|spoiler_text|
|text|string|false|none|text|
|visibility|string|false|none|visibility|

<h2 id="tocS_Tag">Tag</h2>
<!-- backwards compatibility -->
<a id="schematag"></a>
<a id="schema_Tag"></a>
<a id="tocStag"></a>
<a id="tocstag"></a>

```json
{
  "history": [
    {
      "accounts": "string",
      "day": "string",
      "uses": "string"
    }
  ],
  "name": "string",
  "url": "string"
}
```

Represents a hashtag used within the content of a status.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|history|[[History](#schemahistory)]|false|none|Usage statistics for given days.|
|name|string|true|none|The value of the hashtag after the `#` sign.|
|url|string|true|none|A link to the hashtag on the instance.|

<h2 id="tocS_Token">Token</h2>
<!-- backwards compatibility -->
<a id="schematoken"></a>
<a id="schema_Token"></a>
<a id="tocStoken"></a>
<a id="tocstoken"></a>

```json
{
  "access_token": "string",
  "created_at": 0,
  "scope": "string",
  "token_type": "string"
}
```

Represents an OAuth token used for authenticating with the API and performing actions.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|access_token|string|false|none|An OAuth token to be used for authorization.|
|created_at|integer|false|none|When the token was generated. UNIX Timestamp.|
|scope|string|false|none|The OAuth scopes granted by this token, space-separated.|
|token_type|string|false|none|The OAuth token type. Mastodon uses `Bearer` tokens.|
