<h1 id="whatsapp-business-api">WhatsApp Business API v1.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

See https://developers.facebook.com/docs/whatsapp

Base URLs:

* <a href="http://whatsapp.local">http://whatsapp.local</a>

* <a href="http://example.com/v1">http://example.com/v1</a>

# Authentication

- HTTP Authentication, scheme: bearer

- HTTP Authentication, scheme: basic

<h1 id="whatsapp-business-api-users">Users</h1>

## Create-User

<a id="opIdCreateUser"></a>

> Code samples

```bash
curl https://example.com/users \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "password": "{{UserPassword}}",
    "username": "{{UserUsername}}"
  }'
```

`POST /users`

> Body parameter

```json
{
  "password": "{{UserPassword}}",
  "username": "{{UserUsername}}"
}
```

<h3 id="create-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[Create-User-Request-Body](#schemacreate-user-request-body)|true|none|
|» password|body|string|true|username|
|» username|body|string|true|password|

> Example responses

> 200 Response

```json
{
  "users": [
    {
      "username": "username"
    }
  ]
}
```

<h3 id="create-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[User-Response](#schemauser-response)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Login-User

<a id="opIdLoginUser"></a>

> Code samples

```bash
curl https://example.com/users/login \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "new_password": "<New Admin Password>"
  }'
```

`POST /users/login`

> Body parameter

```json
{
  "new_password": "<New Admin Password>"
}
```

<h3 id="login-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[Login-Admin-Request-Body](#schemalogin-admin-request-body)|false|none|
|» new_password|body|string|true|none|

> Example responses

> 200 Response

```json
{
  "users": [
    {
      "expires_after": "2018-03-01 15:29:26+00:00",
      "token": "eyJhbGciOHlXVCJ9.eyJ1c2VyIjoNTIzMDE2Nn0.mEoF0COaO00Z1cANo"
    }
  ]
}
```

<h3 id="login-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[User-Login-Response](#schemauser-login-response)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
httpBasic
</aside>

## Logout-User

<a id="opIdLogoutUser"></a>

> Code samples

```bash
curl https://example.com/users/logout \
  -X POST \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /users/logout`

<h3 id="logout-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Get-User

<a id="opIdGetUser"></a>

> Code samples

```bash
curl https://example.com/users/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /users/{UserUsername}`

<h3 id="get-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|UserUsername|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "users": [
    {
      "ROLES": "ROLE_USER",
      "username": "username"
    }
  ]
}
```

<h3 id="get-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[Detailed-User-Response](#schemadetailed-user-response)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Update-User

<a id="opIdUpdateUser"></a>

> Code samples

```bash
curl https://example.com/users/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "password": "<New Password>"
  }'
```

`PUT /users/{UserUsername}`

> Body parameter

```json
{
  "password": "<New Password>"
}
```

<h3 id="update-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|UserUsername|path|string|true|none|
|body|body|[Update-User-Request-Body](#schemaupdate-user-request-body)|true|none|
|» password|body|string|true|password|

> Example responses

> 200 Response

```json
{
  "users": [
    {
      "username": "username"
    }
  ]
}
```

<h3 id="update-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[User-Response](#schemauser-response)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Delete-User

<a id="opIdDeleteUser"></a>

> Code samples

```bash
curl https://example.com/users/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /users/{UserUsername}`

<h3 id="delete-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|UserUsername|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "users": [
    {
      "username": "username"
    }
  ]
}
```

<h3 id="delete-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[User-Response](#schemauser-response)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

<h1 id="whatsapp-business-api-application">Application</h1>

## Set-Shards

<a id="opIdSetShards"></a>

> Code samples

```bash
curl https://example.com/account/shards \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "cc": "<Country Code>",
    "phone_number": "<Phone Number>",
    "pin": "<Two-Step PIN>",
    "shards": 32
  }'
```

`POST /account/shards`

> Body parameter

```json
{
  "cc": "<Country Code>",
  "phone_number": "<Phone Number>",
  "pin": "<Two-Step PIN>",
  "shards": 32
}
```

<h3 id="set-shards-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[Set-Shards-Request-Body](#schemaset-shards-request-body)|true|none|
|» cc|body|string|true|none|
|» phone_number|body|string|true|none|
|» pin|body|string|true|none|
|» shards|body|integer(int32)|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» shards|1|
|» shards|2|
|» shards|4|
|» shards|8|
|» shards|16|
|» shards|32|

<h3 id="set-shards-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Get-Application-Settings

<a id="opIdGetApplicationSettings"></a>

> Code samples

```bash
curl https://example.com/settings/application \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /settings/application`

> Example responses

> 200 Response

```json
{
  "callback_backoff_delay_ms": 3000,
  "callback_persist": true,
  "max_callback_backoff_delay_ms": 900000,
  "media": {
    "auto_download": [
      "image",
      "document",
      "audio"
    ]
  },
  "on_call_pager": "<WA_ID of valid WhatsApp contact>",
  "pass_through": false,
  "sent_status": false,
  "webhooks": {
    "max_concurrent_requests": 12,
    "url": "<Webhook URL, https>"
  }
}
```

<h3 id="get-application-settings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[Application-Settings](#schemaapplication-settings)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Reset-Application-Settings

<a id="opIdResetApplicationSettings"></a>

> Code samples

```bash
curl https://example.com/settings/application \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /settings/application`

<h3 id="reset-application-settings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Update-Application-Settings

<a id="opIdUpdateApplicationSettings"></a>

> Code samples

```bash
curl https://example.com/settings/application \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "webhooks": {
      "url": "<Webhook URL, https>"
    }
  }'
```

`PATCH /settings/application`

If a field is not present in the request, no change is made to that setting. For example, if on_call_pager is not sent with the request, the existing configuration for on_call_pager is unchanged.

> Body parameter

```json
{
  "webhooks": {
    "url": "<Webhook URL, https>"
  }
}
```

<h3 id="update-application-settings-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[Application-Settings](#schemaapplication-settings)|true|none|
|» callback_backoff_delay_ms|body|string|false|Backoff delay for a failed callback in milliseconds<br>This setting is used to configure the amount of time the backoff delays before retrying a failed callback. The backoff delay increases linearly by this value each time a callback fails to get a HTTPS 200 OK response. The backoff delay is capped by the max_callback_backoff_delay_ms setting.|
|» callback_persist|body|boolean|false|Stores callbacks on disk until they are successfully acknowledged by the Webhook or not. Restart required.|
|» heartbeat_interval|body|integer|false|Multiconnect: Interval of the Master node monitoring of Coreapp nodes in seconds|
|» max_callback_backoff_delay_ms|body|string|false|Maximum delay for a failed callback in milliseconds|
|» media|body|[Media](#schemamedia)|false|none|
|» on_call_pager|body|string|false|Set to valid WhatsApp Group with users who wish to see alerts for critical errors and messages.|
|» pass_through|body|boolean|false|When true, removes messages from the local database after they are delivered to or read by the recipient. When false, saves all messages on local storage until they are explicitly deleted.<br>When messages are sent, they are stored in a local database. This database is used as the application's history. Since the business keeps its own history, you can specify whether you want message pass_through or not. Restart required.|
|» sent_status|body|boolean|false|Receive a notification that a message is sent to server. When true, you will receive a message indicating that a message has been sent. If false (default), you will not receive notification.|
|» unhealthy_interval|body|integer|false|Multiconnect: Maximum amount of seconds a Master node waits for a Coreapp node to respond to a heartbeat before considering it unhealthy and starting the failover process.|
|» webhooks|body|[Webhooks](#schemawebhooks)|false|none|

> Example responses

> 200 Response

```json
{
  "errors": [
    {
      "code": 1234,
      "details": "optional-detailed-error-message",
      "title": "error-code-title"
    }
  ],
  "meta": {
    "api_status": "deprecated",
    "version": "whatsapp-business-api-client-version"
  }
}
```

<h3 id="update-application-settings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[Response](#schemaresponse)|

<h3 id="update-application-settings-callbacks">Callbacks</h3>

|Name|Expression|Method|Description|
|---|---|---|---|
|incomingWebhook|{$request.body#/webhooks.url}|POST|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Get-Media-Providers

<a id="opIdGetMediaProviders"></a>

> Code samples

```bash
curl https://example.com/settings/application/media/providers \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /settings/application/media/providers`

> Example responses

> 200 Response

```json
{
  "settings": {
    "application": {
      "media": {
        "providers": [
          {
            "config": {
              "basic": {
                "password": "your-password",
                "username": "your-username"
              }
            },
            "name": "your-first-provider",
            "type": "www"
          },
          {
            "config": {
              "bearer": "your-bearer-token"
            },
            "name": "your-second-provider",
            "type": "www"
          }
        ]
      }
    }
  }
}
```

<h3 id="get-media-providers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[Get-Media-Providers-Response](#schemaget-media-providers-response)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Update-Media-Providers

<a id="opIdUpdateMediaProviders"></a>

> Code samples

```bash
curl https://example.com/settings/application/media/providers \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '[
    {
      "config": {
        "bearer": "<Bearer Auth Token>"
      },
      "name": "<Provider Name>",
      "type": "www"
    }
  ]'
```

`POST /settings/application/media/providers`

> Body parameter

```json
[
  {
    "config": {
      "bearer": "<Bearer Auth Token>"
    },
    "name": "<Provider Name>",
    "type": "www"
  }
]
```

<h3 id="update-media-providers-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[[Media-Provider](#schemamedia-provider)]|true|none|

<h3 id="update-media-providers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Delete-Media-Providers

<a id="opIdDeleteMediaProviders"></a>

> Code samples

```bash
curl https://example.com/settings/application/media/providers/string \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /settings/application/media/providers/{ProviderName}`

<h3 id="delete-media-providers-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ProviderName|path|string|true|Provider Name|

<h3 id="delete-media-providers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

<h1 id="whatsapp-business-api-backuprestore">Backup/Restore</h1>

## Backup-Settings

<a id="opIdBackupSettings"></a>

> Code samples

```bash
curl https://example.com/settings/backup \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "password": "<Password for Backup>"
  }'
```

`POST /settings/backup`

> Body parameter

```json
{
  "password": "<Password for Backup>"
}
```

<h3 id="backup-settings-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[Backup-Settings-Request-Body](#schemabackup-settings-request-body)|true|none|
|» password|body|string|true|Used to encrypt backup data for security|

> Example responses

> 200 Response

```json
{
  "settings": {
    "data": "encrypted-backup-data"
  }
}
```

<h3 id="backup-settings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[Backup-Settings-Response](#schemabackup-settings-response)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Restore-Settings

<a id="opIdRestoreSettings"></a>

> Code samples

```bash
curl https://example.com/settings/restore \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "data": "<Data to Restore, from Backup API>",
    "password": "<Password for Backup>"
  }'
```

`POST /settings/restore`

> Body parameter

```json
{
  "data": "<Data to Restore, from Backup API>",
  "password": "<Password for Backup>"
}
```

<h3 id="restore-settings-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[Restore-Settings-Request-Body](#schemarestore-settings-request-body)|true|none|
|» data|body|string|true|The data that was returned by the /v1/settings/backup API call|
|» password|body|string|true|The password you used in the /v1/settings/backup API call to encrypt the backup data|

<h3 id="restore-settings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

<h1 id="whatsapp-business-api-business-profile">Business Profile</h1>

## Get-Business-Profile

<a id="opIdGetBusinessProfile"></a>

> Code samples

```bash
curl https://example.com/settings/business/profile \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /settings/business/profile`

> Example responses

> 200 Response

```json
{
  "settings": {
    "business": {
      "profile": {
        "address": "new-business-address",
        "description": "business-description",
        "email": "new-business-email",
        "vertical": "business-industry",
        "websites": [
          "website-1",
          "website-2"
        ]
      }
    }
  }
}
```

<h3 id="get-business-profile-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[Get-Business-Profile-Response](#schemaget-business-profile-response)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Update-Business-Profile

<a id="opIdupdateBusinessProfile"></a>

> Code samples

```bash
curl https://example.com/settings/business/profile \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "address": "<Business Profile Address>",
    "description": "<Business Profile Description>",
    "email": "<Business Profile Email>",
    "vertical": "<Business Profile Vertical>",
    "websites": [
      "https://www.whatsapp.com",
      "https://www.facebook.com"
    ]
  }'
```

`POST /settings/business/profile`

> Body parameter

```json
{
  "address": "<Business Profile Address>",
  "description": "<Business Profile Description>",
  "email": "<Business Profile Email>",
  "vertical": "<Business Profile Vertical>",
  "websites": [
    "https://www.whatsapp.com",
    "https://www.facebook.com"
  ]
}
```

<h3 id="update-business-profile-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[Business-Profile](#schemabusiness-profile)|true|none|
|» address|body|string|true|Address of the business<br>Maximum of 256 characters|
|» description|body|string|true|Description of the business<br>Maximum of 256 characters|
|» email|body|string|true|Email address to contact the business<br>Maximum of 128 characters|
|» vertical|body|string|true|Industry of the business<br>Maximum of 128 characters|
|» websites|body|[string]|true|URLs associated with business (e.g., website, Facebook page, Instagram)<br>Maximum of 2 websites with a maximum of 256 characters each|

<h3 id="update-business-profile-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

<h1 id="whatsapp-business-api-profile">Profile</h1>

## Get-Profile-About

<a id="opIdGetProfileAbout"></a>

> Code samples

```bash
curl https://example.com/settings/profile/about \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /settings/profile/about`

> Example responses

> 200 Response

```json
{
  "settings": {
    "profile": {
      "about": {
        "text": "your-profile-about-text"
      }
    }
  }
}
```

<h3 id="get-profile-about-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[Get-Profile-About-Response](#schemaget-profile-about-response)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Update-Profile-About

<a id="opIdUpdateProfileAbout"></a>

> Code samples

```bash
curl https://example.com/settings/profile/about \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "text": "<About Profile>"
  }'
```

`PATCH /settings/profile/about`

> Body parameter

```json
{
  "text": "<About Profile>"
}
```

<h3 id="update-profile-about-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[Profile-About](#schemaprofile-about)|true|none|
|» text|body|string|true|Text to display in your profile's About section<br>The max length for the string is 139 characters.|

<h3 id="update-profile-about-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Get-Profile-Photo

<a id="opIdGetProfilePhoto"></a>

> Code samples

```bash
curl https://example.com/settings/profile/photo \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /settings/profile/photo`

<h3 id="get-profile-photo-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|format|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "settings": {
    "profile": {
      "photo": {
        "link": "profile-photo-url"
      }
    }
  }
}
```

<h3 id="get-profile-photo-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[Get-Profile-Photo-Response](#schemaget-profile-photo-response)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Update-Profile-Photo

<a id="opIdUpdateProfilePhoto"></a>

> Code samples

```bash
curl https://example.com/settings/profile/photo \
  -X POST \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -F 'File=@/path/to/file'
```

`POST /settings/profile/photo`

> Body parameter

```yaml
File: string
```

<h3 id="update-profile-photo-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» File|body|string(binary)|true|none|

<h3 id="update-profile-photo-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

<h1 id="whatsapp-business-api-two-step-verification">Two-Step Verification</h1>

## Enable-Two-Step

<a id="opIdEnableTwoStep"></a>

> Code samples

```bash
curl https://example.com/settings/account/two-step \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "pin": "<Two-Step Verification PIN>"
  }'
```

`POST /settings/account/two-step`

> Body parameter

```json
{
  "pin": "<Two-Step Verification PIN>"
}
```

<h3 id="enable-two-step-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[Enable-Two-Step-Request-Body](#schemaenable-two-step-request-body)|true|none|
|» pin|body|string|true|none|

<h3 id="enable-two-step-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Disable-Two-Step

<a id="opIdDisableTwoStep"></a>

> Code samples

```bash
curl https://example.com/settings/account/two-step \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /settings/account/two-step`

<h3 id="disable-two-step-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

<h1 id="whatsapp-business-api-registration">Registration</h1>

## Request-Code

<a id="opIdRequestCode"></a>

> Code samples

```bash
curl https://example.com/account \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "cc": "<Country Code>",
    "cert": "<Valid Cert from Business Manager>",
    "method": "sms",
    "phone_number": "<Phone Number>",
    "pin": "<Two-Step Verification PIN"
  }'
```

`POST /account`

> Body parameter

```json
{
  "cc": "<Country Code>",
  "cert": "<Valid Cert from Business Manager>",
  "method": "sms",
  "phone_number": "<Phone Number>",
  "pin": "<Two-Step Verification PIN"
}
```

<h3 id="request-code-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[Request-Code-Request-Body](#schemarequest-code-request-body)|true|none|
|» cc|body|string|true|Numerical country code for the phone number you are registering|
|» cert|body|string|true|Base64-encoded Verified Name certificate|
|» method|body|string|true|Method of receiving your registration code|
|» phone_number|body|string|true|Phone number you are registering, without the country code or plus symbol (+)|
|» pin|body|string|false|Existing 6-digit PIN — This is only required when two-factor verification is enabled on this account.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» method|sms|
|» method|voice|

> Example responses

> 202 Response

```json
{
  "account": [
    {
      "vname": "decoded-vname-from-cert"
    }
  ]
}
```

<h3 id="request-code-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Created: the account already exists. You are already registered, so you do not need to do anything else.|None|
|202|Accepted|Created: the account does not exist. Depending on the method selected in the request, check your SMS or voice number for the registration code.|[Request-Code-Response](#schemarequest-code-response)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Register-Account

<a id="opIdRegisterAccount"></a>

> Code samples

```bash
curl https://example.com/account/verify \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "code": "<Registration Code Received via SMS/Voice>"
  }'
```

`POST /account/verify`

> Body parameter

```json
{
  "code": "<Registration Code Received via SMS/Voice>"
}
```

<h3 id="register-account-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[Register-Account-Request-Body](#schemaregister-account-request-body)|true|none|
|» code|body|string|true|none|

<h3 id="register-account-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

<h1 id="whatsapp-business-api-contacts">Contacts</h1>

## Check-Contact

<a id="opIdCheckContact"></a>

> Code samples

```bash
curl https://example.com/contacts \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "blocking": "wait",
    "contacts": [
      "{{Recipient-WA-ID}}"
    ]
  }'
```

`POST /contacts`

> Body parameter

```json
{
  "blocking": "wait",
  "contacts": [
    "{{Recipient-WA-ID}}"
  ]
}
```

<h3 id="check-contact-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[Check-Contact-Request-Body](#schemacheck-contact-request-body)|true|none|
|» blocking|body|string|false|Blocking determines whether the request should wait for the processing to complete (synchronous) or not (asynchronous).|
|» contacts|body|[string]|true|Array of contact phone numbers. The numbers can be in any standard telephone number format.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» blocking|no_wait|
|» blocking|wait|

> Example responses

> 200 Response

```json
{
  "contacts": [
    {
      "input": "1-631-555-1002",
      "status": "processing"
    },
    {
      "input": "6315551003",
      "status": "processing"
    },
    {
      "input": "+54 9 11 5612-1008",
      "status": "processing"
    },
    {
      "input": "+1 (516) 283-7151",
      "status": "valid",
      "wa_id": "15162837151"
    }
  ]
}
```

<h3 id="check-contact-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[Check-Contact-Response](#schemacheck-contact-response)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

<h1 id="whatsapp-business-api-messages">Messages</h1>

## Send-Message

<a id="opIdSendMessage"></a>

> Code samples

```bash
curl https://example.com/messages \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "recipient_type": "individual",
    "text": {
      "body": "<Message Text>"
    },
    "to": "{{Recipient-WA-ID}}",
    "type": "text"
  }'
```

`POST /messages`

> Body parameter

```json
{
  "recipient_type": "individual",
  "text": {
    "body": "<Message Text>"
  },
  "to": "{{Recipient-WA-ID}}",
  "type": "text"
}
```

<h3 id="send-message-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[Send-Message-Request-Body](#schemasend-message-request-body)|true|none|
|» audio|body|[Audio](#schemaaudio)|false|The media object containing audio|
|» contacts|body|[[Contact](#schemacontact)]|false|none|
|» document|body|[Document](#schemadocument)|false|The media object containing a document|
|» hsm|body|[Hsm](#schemahsm)|false|The containing element for the message content — Indicates that the message is highly structured. Parameters contained within provide the structure.|
|» image|body|[Image](#schemaimage)|false|The media object containing an image|
|» location|body|[Location](#schemalocation)|false|none|
|» preview_url|body|boolean|false|Specifying preview_url in the request is optional when not including a URL in your message.<br>To include a URL preview, set preview_url to true in the message body and make sure the URL begins with http:// or https://. For more information, see the Sending URLs in Text Messages section.|
|» recipient_type|body|string|false|Determines whether the recipient is an individual or a group<br>Specifying recipient_type in the request is optional when the value is individual.<br>However, recipient_type is required when using group. If sending a text message to a group, see the Sending Group Messages documentation.|
|» text|body|[Text](#schematext)|false|none|
|» to|body|string|true|When recipient_type is individual, this field is the WhatsApp ID (phone number) returned from contacts endpoint. When recipient_type is group, this field is the WhatsApp group ID.|
|» ttl|body|object|false|none|
|» type|body|[Message-Type](#schemamessage-type)|false|type of the message|
|» video|body|[Video](#schemavideo)|false|The media object containing a video|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» recipient_type|individual|
|» recipient_type|group|
|» type|audio|
|» type|contacts|
|» type|document|
|» type|hsm|
|» type|image|
|» type|location|
|» type|text|
|» type|video|
|» type|voice|
|» type|unknown|

> Example responses

> 200 Response

```json
{
  "messages": [
    {
      "id": "gBEGkYiEB1VXAglK1ZEqA1YKPrU"
    }
  ]
}
```

<h3 id="send-message-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[Message-Response](#schemamessage-response)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Mark-Message-As-Read

<a id="opIdMarkMessageAsRead"></a>

> Code samples

```bash
curl https://example.com/messages/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "status": "read"
  }'
```

`PUT /messages/{MessageID}`

> Body parameter

```json
{
  "status": "read"
}
```

<h3 id="mark-message-as-read-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|MessageID|path|string|true|Message ID from Webhook|
|body|body|[Mark-Message-As-Read-Request-Body](#schemamark-message-as-read-request-body)|true|none|
|» status|body|string|true|none|

<h3 id="mark-message-as-read-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

<h1 id="whatsapp-business-api-groups">Groups</h1>

## Get-All-Groups

<a id="opIdGetAllGroups"></a>

> Code samples

```bash
curl https://example.com/groups \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /groups`

> Example responses

> 200 Response

```json
{
  "groups": [
    {
      "creation_time": 123456789,
      "id": "your-group-id"
    }
  ]
}
```

<h3 id="get-all-groups-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[Groups-Response](#schemagroups-response)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Create-Group

<a id="opIdCreateGroup"></a>

> Code samples

```bash
curl https://example.com/groups \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "subject": "<Group Subject>"
  }'
```

`POST /groups`

> Body parameter

```json
{
  "subject": "<Group Subject>"
}
```

<h3 id="create-group-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[Create-Group-Request-Body](#schemacreate-group-request-body)|true|none|
|» subject|body|string|true|none|

> Example responses

> 200 Response

```json
{
  "groups": [
    {
      "creation_time": 123456789,
      "id": "your-group-id"
    }
  ]
}
```

<h3 id="create-group-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[Groups-Response](#schemagroups-response)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Get-Group-Info

<a id="opIdGetGroupInfo"></a>

> Code samples

```bash
curl https://example.com/groups/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /groups/{GroupId}`

<h3 id="get-group-info-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|GroupId|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "groups": [
    {
      "admins": [
        "whatsapp-id-1",
        "whatsapp-id-2"
      ],
      "creation_time": 123456789,
      "creator": "whatsapp-id-1",
      "participants": [
        "whatsapp-id-3",
        "whatsapp-id-4",
        "whatsapp-id-5"
      ],
      "subject": "your-group-subject"
    }
  ]
}
```

<h3 id="get-group-info-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[Group-Response](#schemagroup-response)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Update-Group-Info

<a id="opIdUpdateGroupInfo"></a>

> Code samples

```bash
curl https://example.com/groups/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "subject": "<New Group Subject>"
  }'
```

`PUT /groups/{GroupId}`

> Body parameter

```json
{
  "subject": "<New Group Subject>"
}
```

<h3 id="update-group-info-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|GroupId|path|string|true|none|
|body|body|[Update-Group-Info-Request-Body](#schemaupdate-group-info-request-body)|true|none|
|» subject|body|string|true|none|

<h3 id="update-group-info-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Demote-Group-Admin

<a id="opIdDemoteGroupAdmin"></a>

> Code samples

```bash
curl https://example.com/groups/string/admins \
  -X DELETE \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "wa_ids": [
      "<Recipient WA-ID, from Contacts API>"
    ]
  }'
```

`DELETE /groups/{GroupId}/admins`

> Body parameter

```json
{
  "wa_ids": [
    "<Recipient WA-ID, from Contacts API>"
  ]
}
```

<h3 id="demote-group-admin-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|GroupId|path|string|true|none|
|body|body|[Group-Admin-Request-Body](#schemagroup-admin-request-body)|true|none|
|» wa_ids|body|[string]|true|The WhatsApp IDs of the people to be added or removed as group admins|

<h3 id="demote-group-admin-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Promote-To-Group-Admin

<a id="opIdPromoteToGroupAdmin"></a>

> Code samples

```bash
curl https://example.com/groups/string/admins \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "wa_ids": [
      "<Recipient WA-ID, from Contacts API>"
    ]
  }'
```

`PATCH /groups/{GroupId}/admins`

> Body parameter

```json
{
  "wa_ids": [
    "<Recipient WA-ID, from Contacts API>"
  ]
}
```

<h3 id="promote-to-group-admin-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|GroupId|path|string|true|none|
|body|body|[Group-Admin-Request-Body](#schemagroup-admin-request-body)|true|none|
|» wa_ids|body|[string]|true|The WhatsApp IDs of the people to be added or removed as group admins|

<h3 id="promote-to-group-admin-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Get-Group-Icon-Binary

<a id="opIdGetGroupIconBinary"></a>

> Code samples

```bash
curl https://example.com/groups/string/icon \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /groups/{GroupId}/icon`

<h3 id="get-group-icon-binary-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|GroupId|path|string|true|none|

<h3 id="get-group-icon-binary-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Set-Group-Icon

<a id="opIdSetGroupIcon"></a>

> Code samples

```bash
curl https://example.com/groups/string/icon \
  -X POST \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -F 'File=@/path/to/file'
```

`POST /groups/{GroupId}/icon`

> Body parameter

```yaml
File: string
```

<h3 id="set-group-icon-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|GroupId|path|string|true|none|
|body|body|object|false|none|
|» File|body|string(binary)|true|none|

<h3 id="set-group-icon-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Delete-Group-Icon

<a id="opIdDeleteGroupIcon"></a>

> Code samples

```bash
curl https://example.com/groups/string/icon \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -F 'File=@/path/to/file'
```

`DELETE /groups/{GroupId}/icon`

> Body parameter

```yaml
File: string
```

<h3 id="delete-group-icon-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|GroupId|path|string|true|none|
|body|body|object|false|none|
|» File|body|string(binary)|true|none|

<h3 id="delete-group-icon-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Get-Group-Invite

<a id="opIdGetGroupInvite"></a>

> Code samples

```bash
curl https://example.com/groups/string/invite \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /groups/{GroupId}/invite`

<h3 id="get-group-invite-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|GroupId|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "groups": [
    {
      "link": "group-invite-link"
    }
  ]
}
```

<h3 id="get-group-invite-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[Group-Invite-Response](#schemagroup-invite-response)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Delete-Group-Invite

<a id="opIdDeleteGroupInvite"></a>

> Code samples

```bash
curl https://example.com/groups/string/invite \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /groups/{GroupId}/invite`

<h3 id="delete-group-invite-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|GroupId|path|string|true|none|

<h3 id="delete-group-invite-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Leave-Group

<a id="opIdLeaveGroup"></a>

> Code samples

```bash
curl https://example.com/groups/string/leave \
  -X POST \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /groups/{GroupId}/leave`

<h3 id="leave-group-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|GroupId|path|string|true|none|

<h3 id="leave-group-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Remove-Group-Participant

<a id="opIdRemoveGroupParticipant"></a>

> Code samples

```bash
curl https://example.com/groups/string/participants \
  -X DELETE \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "wa_ids": [
      "{{Recipient-WA-ID}}"
    ]
  }'
```

`DELETE /groups/{GroupId}/participants`

> Body parameter

```json
{
  "wa_ids": [
    "{{Recipient-WA-ID}}"
  ]
}
```

<h3 id="remove-group-participant-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|GroupId|path|string|true|none|
|body|body|[Remove-Group-Participant-Request-Body](#schemaremove-group-participant-request-body)|true|none|
|» wa_ids|body|[string]|true|none|

<h3 id="remove-group-participant-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

<h1 id="whatsapp-business-api-media">Media</h1>

## Upload-Media

<a id="opIdUploadMedia"></a>

> Code samples

```bash
curl https://example.com/media \
  -X POST \
  -H 'Content-Type: application/msword' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  --data-binary '@/path/to/file'
```

`POST /media`

<h3 id="upload-media-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|string(binary)|true|none|

> Example responses

> 200 Response

```json
{
  "media": [
    {
      "id": "f043afd0-f0ae-4b9c-ab3d-696fb4c8cd68"
    }
  ]
}
```

<h3 id="upload-media-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[Upload-Media-Response](#schemaupload-media-response)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Download-Media

<a id="opIdDownloadMedia"></a>

> Code samples

```bash
curl https://example.com/media/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /media/{MediaId}`

<h3 id="download-media-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|MediaId|path|string|true|none|

<h3 id="download-media-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Delete-Media

<a id="opIdDeleteMedia"></a>

> Code samples

```bash
curl https://example.com/media/string \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /media/{MediaId}`

<h3 id="delete-media-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|MediaId|path|string|true|none|

<h3 id="delete-media-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

<h1 id="whatsapp-business-api-health">Health</h1>

## Check-Health

<a id="opIdCheckHealth"></a>

> Code samples

```bash
curl https://example.com/health \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /health`

<h3 id="check-health-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Get-Metrics (since v2.21.3)

<a id="opIdGetMetrics"></a>

> Code samples

```bash
curl https://example.com/metrics \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /metrics`

<h3 id="get-metrics-since-v2213-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|format|query|string|false|none|

> Example responses

> 200 Response

```json
{}
```

<h3 id="get-metrics-since-v2213-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Get-App-Stats

<a id="opIdGetAppStats"></a>

> Code samples

```bash
curl https://example.com/stats/app \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /stats/app`

<h3 id="get-app-stats-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|format|query|string|false|none|

> Example responses

> 200 Response

```json
{}
```

<h3 id="get-app-stats-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Get-DB-Stats

<a id="opIdGetDbStats"></a>

> Code samples

```bash
curl https://example.com/stats/db \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /stats/db`

<h3 id="get-db-stats-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|format|query|string|false|none|

> Example responses

> 200 Response

```json
{}
```

<h3 id="get-db-stats-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Get-Support-Info

<a id="opIdGetSupportInfo"></a>

> Code samples

```bash
curl https://example.com/support \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /support`

> Example responses

> 200 Response

```json
{}
```

<h3 id="get-support-info-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

<h1 id="whatsapp-business-api-certificates">Certificates</h1>

## Upload-Certificate

<a id="opIdUploadCertificate"></a>

> Code samples

```bash
curl https://example.com/certificates/external \
  -X POST \
  -H 'Content-Type: text/plain' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  --data-binary '@/path/to/file'
```

`POST /certificates/external`

<h3 id="upload-certificate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|string(binary)|false|none|

<h3 id="upload-certificate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Download-CA-Certificate

<a id="opIdDownloadCaCertificate"></a>

> Code samples

```bash
curl https://example.com/certificates/external/ca \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /certificates/external/ca`

<h3 id="download-ca-certificate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Download Webhook CA Certificate

<a id="opIdDownloadWebhookCaCertificate"></a>

> Code samples

```bash
curl https://example.com/certificates/webhooks/ca \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /certificates/webhooks/ca`

<h3 id="download-webhook-ca-certificate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Upload Webhook CA Certificate

<a id="opIdUploadWebhookCaCertificate"></a>

> Code samples

```bash
curl https://example.com/certificates/webhooks/ca \
  -X POST \
  -H 'Content-Type: text/plain' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  --data-binary '@/path/to/file'
```

`POST /certificates/webhooks/ca`

<h3 id="upload-webhook-ca-certificate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|string(binary)|false|none|

<h3 id="upload-webhook-ca-certificate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Delete Webhook CA Certificate

<a id="opIdDeleteWebhookCaCertificate"></a>

> Code samples

```bash
curl https://example.com/certificates/webhooks/ca \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /certificates/webhooks/ca`

<h3 id="delete-webhook-ca-certificate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

<h1 id="whatsapp-business-api-default">Default</h1>

## Delete-Profile-Photo

<a id="opIdDeleteProfilePhoto"></a>

> Code samples

```bash
curl https://example.com/settings/profile/photo \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /settings/profile/photo`

<h3 id="delete-profile-photo-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

# Schemas

<h2 id="tocS_Address">Address</h2>
<!-- backwards compatibility -->
<a id="schemaaddress"></a>
<a id="schema_Address"></a>
<a id="tocSaddress"></a>
<a id="tocsaddress"></a>

```json
{
  "city": "Menlo Park",
  "country": "United States",
  "country_code": "us",
  "state": "CA",
  "street": "1 Hacker Way",
  "type": "HOME",
  "zip": "94025"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|city|string|true|none|City name|
|country|string|true|none|Full country name|
|country_code|string|true|none|Two-letter country abbreviation|
|state|string|true|none|State abbreviation|
|street|string|true|none|Street number and name|
|type|string|true|none|Standard Values: HOME, WORK|
|zip|string|true|none|ZIP code|

<h2 id="tocS_Application-Settings">Application-Settings</h2>
<!-- backwards compatibility -->
<a id="schemaapplication-settings"></a>
<a id="schema_Application-Settings"></a>
<a id="tocSapplication-settings"></a>
<a id="tocsapplication-settings"></a>

```json
{
  "callback_backoff_delay_ms": 3000,
  "callback_persist": true,
  "max_callback_backoff_delay_ms": 900000,
  "media": {
    "auto_download": [
      "image",
      "document",
      "audio"
    ]
  },
  "on_call_pager": "<WA_ID of valid WhatsApp contact>",
  "pass_through": false,
  "sent_status": false,
  "webhooks": {
    "max_concurrent_requests": 12,
    "url": "<Webhook URL, https>"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|callback_backoff_delay_ms|string|false|none|Backoff delay for a failed callback in milliseconds<br>This setting is used to configure the amount of time the backoff delays before retrying a failed callback. The backoff delay increases linearly by this value each time a callback fails to get a HTTPS 200 OK response. The backoff delay is capped by the max_callback_backoff_delay_ms setting.|
|callback_persist|boolean|false|none|Stores callbacks on disk until they are successfully acknowledged by the Webhook or not. Restart required.|
|heartbeat_interval|integer|false|none|Multiconnect: Interval of the Master node monitoring of Coreapp nodes in seconds|
|max_callback_backoff_delay_ms|string|false|none|Maximum delay for a failed callback in milliseconds|
|media|[Media](#schemamedia)|false|none|none|
|on_call_pager|string|false|none|Set to valid WhatsApp Group with users who wish to see alerts for critical errors and messages.|
|pass_through|boolean|false|none|When true, removes messages from the local database after they are delivered to or read by the recipient. When false, saves all messages on local storage until they are explicitly deleted.<br>When messages are sent, they are stored in a local database. This database is used as the application's history. Since the business keeps its own history, you can specify whether you want message pass_through or not. Restart required.|
|sent_status|boolean|false|none|Receive a notification that a message is sent to server. When true, you will receive a message indicating that a message has been sent. If false (default), you will not receive notification.|
|unhealthy_interval|integer|false|none|Multiconnect: Maximum amount of seconds a Master node waits for a Coreapp node to respond to a heartbeat before considering it unhealthy and starting the failover process.|
|webhooks|[Webhooks](#schemawebhooks)|false|none|none|

<h2 id="tocS_Audio">Audio</h2>
<!-- backwards compatibility -->
<a id="schemaaudio"></a>
<a id="schema_Audio"></a>
<a id="tocSaudio"></a>
<a id="tocsaudio"></a>

```json
{
  "id": "<Media Id, from Media API>"
}
```

The media object containing audio

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[AudioById](#schemaaudiobyid)|false|none|none|
|*oneOf*|[AudioByProvider](#schemaaudiobyprovider)|false|none|none|

<h2 id="tocS_AudioById">AudioById</h2>
<!-- backwards compatibility -->
<a id="schemaaudiobyid"></a>
<a id="schema_AudioById"></a>
<a id="tocSaudiobyid"></a>
<a id="tocsaudiobyid"></a>

```json
{
  "id": "<Media Id, from Media API>"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|

<h2 id="tocS_AudioByProvider">AudioByProvider</h2>
<!-- backwards compatibility -->
<a id="schemaaudiobyprovider"></a>
<a id="schema_AudioByProvider"></a>
<a id="tocSaudiobyprovider"></a>
<a id="tocsaudiobyprovider"></a>

```json
{
  "link": "<Link to Audio, https>",
  "provider": {
    "name": "<Provider Name from Media Provider API, optional"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|link|string|true|none|none|
|provider|[Provider](#schemaprovider)|true|none|none|

<h2 id="tocS_Backup-Settings">Backup-Settings</h2>
<!-- backwards compatibility -->
<a id="schemabackup-settings"></a>
<a id="schema_Backup-Settings"></a>
<a id="tocSbackup-settings"></a>
<a id="tocsbackup-settings"></a>

```json
{
  "data": "encrypted-backup-data"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|string|false|none|The data that has been backed up, encrypted for security.|

<h2 id="tocS_Backup-Settings-Request-Body">Backup-Settings-Request-Body</h2>
<!-- backwards compatibility -->
<a id="schemabackup-settings-request-body"></a>
<a id="schema_Backup-Settings-Request-Body"></a>
<a id="tocSbackup-settings-request-body"></a>
<a id="tocsbackup-settings-request-body"></a>

```json
{
  "password": "<Password for Backup>"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|password|string|true|none|Used to encrypt backup data for security|

<h2 id="tocS_Backup-Settings-Response">Backup-Settings-Response</h2>
<!-- backwards compatibility -->
<a id="schemabackup-settings-response"></a>
<a id="schema_Backup-Settings-Response"></a>
<a id="tocSbackup-settings-response"></a>
<a id="tocsbackup-settings-response"></a>

```json
{
  "settings": {
    "data": "encrypted-backup-data"
  }
}
```

Save the data value as that will be used along with your password to restore the information.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|settings|[Backup-Settings](#schemabackup-settings)|false|none|none|

<h2 id="tocS_Basic">Basic</h2>
<!-- backwards compatibility -->
<a id="schemabasic"></a>
<a id="schema_Basic"></a>
<a id="tocSbasic"></a>
<a id="tocsbasic"></a>

```json
{
  "password": "your-password",
  "username": "your-username"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|password|string|false|none|none|
|username|string|false|none|none|

<h2 id="tocS_Business-Profile">Business-Profile</h2>
<!-- backwards compatibility -->
<a id="schemabusiness-profile"></a>
<a id="schema_Business-Profile"></a>
<a id="tocSbusiness-profile"></a>
<a id="tocsbusiness-profile"></a>

```json
{
  "address": "<Business Profile Address>",
  "description": "<Business Profile Description>",
  "email": "<Business Profile Email>",
  "vertical": "<Business Profile Vertical>",
  "websites": [
    "https://www.whatsapp.com",
    "https://www.facebook.com"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|address|string|true|none|Address of the business<br>Maximum of 256 characters|
|description|string|true|none|Description of the business<br>Maximum of 256 characters|
|email|string|true|none|Email address to contact the business<br>Maximum of 128 characters|
|vertical|string|true|none|Industry of the business<br>Maximum of 128 characters|
|websites|[string]|true|none|URLs associated with business (e.g., website, Facebook page, Instagram)<br>Maximum of 2 websites with a maximum of 256 characters each|

<h2 id="tocS_Business-Settings">Business-Settings</h2>
<!-- backwards compatibility -->
<a id="schemabusiness-settings"></a>
<a id="schema_Business-Settings"></a>
<a id="tocSbusiness-settings"></a>
<a id="tocsbusiness-settings"></a>

```json
{
  "business": {
    "profile": {
      "address": "new-business-address",
      "description": "business-description",
      "email": "new-business-email",
      "vertical": "business-industry",
      "websites": [
        "website-1",
        "website-2"
      ]
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|business|[Business-Settings-Business](#schemabusiness-settings-business)|false|none|none|

<h2 id="tocS_Business-Settings-Business">Business-Settings-Business</h2>
<!-- backwards compatibility -->
<a id="schemabusiness-settings-business"></a>
<a id="schema_Business-Settings-Business"></a>
<a id="tocSbusiness-settings-business"></a>
<a id="tocsbusiness-settings-business"></a>

```json
{
  "profile": {
    "address": "new-business-address",
    "description": "business-description",
    "email": "new-business-email",
    "vertical": "business-industry",
    "websites": [
      "website-1",
      "website-2"
    ]
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|profile|[Business-Profile](#schemabusiness-profile)|false|none|none|

<h2 id="tocS_Check-Contact">Check-Contact</h2>
<!-- backwards compatibility -->
<a id="schemacheck-contact"></a>
<a id="schema_Check-Contact"></a>
<a id="tocScheck-contact"></a>
<a id="tocscheck-contact"></a>

```json
{
  "input": "+1 (516) 283-7151",
  "status": "valid",
  "wa_id": "15162837151"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|input|string|false|none|The value you sent in the contacts field of the JSON request.|
|status|string|false|none|Status of the user.|
|wa_id|string|false|none|WhatsApp user identifier that can be used in other API calls. Only returned if the status is valid.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|processing|
|status|valid|
|status|invalid|

<h2 id="tocS_Check-Contact-Request-Body">Check-Contact-Request-Body</h2>
<!-- backwards compatibility -->
<a id="schemacheck-contact-request-body"></a>
<a id="schema_Check-Contact-Request-Body"></a>
<a id="tocScheck-contact-request-body"></a>
<a id="tocscheck-contact-request-body"></a>

```json
{
  "blocking": "wait",
  "contacts": [
    "{{Recipient-WA-ID}}"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|blocking|string|false|none|Blocking determines whether the request should wait for the processing to complete (synchronous) or not (asynchronous).|
|contacts|[string]|true|none|Array of contact phone numbers. The numbers can be in any standard telephone number format.|

#### Enumerated Values

|Property|Value|
|---|---|
|blocking|no_wait|
|blocking|wait|

<h2 id="tocS_Check-Contact-Response">Check-Contact-Response</h2>
<!-- backwards compatibility -->
<a id="schemacheck-contact-response"></a>
<a id="schema_Check-Contact-Response"></a>
<a id="tocScheck-contact-response"></a>
<a id="tocscheck-contact-response"></a>

```json
{
  "contacts": [
    {
      "input": "1-631-555-1002",
      "status": "processing"
    },
    {
      "input": "6315551003",
      "status": "processing"
    },
    {
      "input": "+54 9 11 5612-1008",
      "status": "processing"
    },
    {
      "input": "+1 (516) 283-7151",
      "status": "valid",
      "wa_id": "15162837151"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errors|[[Error](#schemaerror)]|false|none|Only returned with a failed request. Contains an array of error objects that are present when there is an error. |
|meta|[Meta](#schemameta)|false|none|Contains generic information such as WhatsApp Business API Client version.|
|contacts|[[Check-Contact](#schemacheck-contact)]|false|none|none|

<h2 id="tocS_Check-Health-Response">Check-Health-Response</h2>
<!-- backwards compatibility -->
<a id="schemacheck-health-response"></a>
<a id="schema_Check-Health-Response"></a>
<a id="tocScheck-health-response"></a>
<a id="tocscheck-health-response"></a>

```json
{
  "health": {
    "your-hostname1:your-container-id1": {
      "gateway_status": "connected",
      "role": "primary_master"
    },
    "your-hostname2:your-container-id2": {
      "gateway_status": "disconnected",
      "role": "secondary_master"
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|health|[Gateway-Status](#schemagateway-status) \| object|false|none|none|

<h2 id="tocS_Config">Config</h2>
<!-- backwards compatibility -->
<a id="schemaconfig"></a>
<a id="schema_Config"></a>
<a id="tocSconfig"></a>
<a id="tocsconfig"></a>

```json
{
  "bearer": "<Bearer Auth Token>"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[Config-Bearer](#schemaconfig-bearer)|false|none|none|
|*oneOf*|[Config-Basic](#schemaconfig-basic)|false|none|none|

<h2 id="tocS_Config-Basic">Config-Basic</h2>
<!-- backwards compatibility -->
<a id="schemaconfig-basic"></a>
<a id="schema_Config-Basic"></a>
<a id="tocSconfig-basic"></a>
<a id="tocsconfig-basic"></a>

```json
{
  "basic": {
    "password": "your-password",
    "username": "your-username"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|basic|[Basic](#schemabasic)|false|none|none|

<h2 id="tocS_Config-Bearer">Config-Bearer</h2>
<!-- backwards compatibility -->
<a id="schemaconfig-bearer"></a>
<a id="schema_Config-Bearer"></a>
<a id="tocSconfig-bearer"></a>
<a id="tocsconfig-bearer"></a>

```json
{
  "bearer": "<Bearer Auth Token>"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bearer|string|true|none|none|

<h2 id="tocS_Contact">Contact</h2>
<!-- backwards compatibility -->
<a id="schemacontact"></a>
<a id="schema_Contact"></a>
<a id="tocScontact"></a>
<a id="tocscontact"></a>

```json
{
  "addresses": [
    {
      "city": "Menlo Park",
      "country": "United States",
      "country_code": "us",
      "state": "CA",
      "street": "1 Hacker Way",
      "type": "HOME",
      "zip": "94025"
    },
    {
      "city": "Menlo Park",
      "country": "United States",
      "country_code": "us",
      "state": "CA",
      "street": "200 Jefferson Dr",
      "type": "WORK",
      "zip": "94025"
    }
  ],
  "birthday": "2012-08-18",
  "emails": [
    {
      "email": "test@fb.com",
      "type": "WORK"
    },
    {
      "email": "test@whatsapp.com",
      "type": "WORK"
    }
  ],
  "name": {
    "first_name": "John",
    "formatted_name": "John Smith",
    "last_name": "Smith"
  },
  "org": {
    "company": "WhatsApp",
    "department": "Design",
    "title": "Manager"
  },
  "phones": [
    {
      "phone": "+1 (940) 555-1234",
      "type": "HOME"
    },
    {
      "phone": "+1 (650) 555-1234",
      "type": "WORK",
      "wa_id": "16505551234"
    }
  ],
  "urls": [
    {
      "type": "WORK",
      "url": "https://www.facebook.com"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|addresses|[[Address](#schemaaddress)]|false|none|Full contact address(es)|
|birthday|string|false|none|YYYY-MM-DD formatted string|
|emails|[[Email](#schemaemail)]|false|none|Contact email address(es)|
|ims|[string]|false|none|none|
|name|[Name](#schemaname)|false|none|Full contact name|
|org|[Org](#schemaorg)|false|none|Contact organization information|
|phones|[[Phone](#schemaphone)]|false|none|Contact phone number(s)|
|urls|[[Url](#schemaurl)]|false|none|Contact URL(s)|

<h2 id="tocS_Create-Group-Request-Body">Create-Group-Request-Body</h2>
<!-- backwards compatibility -->
<a id="schemacreate-group-request-body"></a>
<a id="schema_Create-Group-Request-Body"></a>
<a id="tocScreate-group-request-body"></a>
<a id="tocscreate-group-request-body"></a>

```json
{
  "subject": "<Group Subject>"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|subject|string|true|none|none|

<h2 id="tocS_Create-User-Request-Body">Create-User-Request-Body</h2>
<!-- backwards compatibility -->
<a id="schemacreate-user-request-body"></a>
<a id="schema_Create-User-Request-Body"></a>
<a id="tocScreate-user-request-body"></a>
<a id="tocscreate-user-request-body"></a>

```json
{
  "password": "password",
  "username": "username"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|password|string|true|none|username|
|username|string|true|none|password|

<h2 id="tocS_Currency">Currency</h2>
<!-- backwards compatibility -->
<a id="schemacurrency"></a>
<a id="schema_Currency"></a>
<a id="tocScurrency"></a>
<a id="tocscurrency"></a>

```json
{
  "amount_1000": 100990,
  "currency_code": "USD"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|amount_1000|integer(int32)|true|none|none|
|currency_code|string|true|none|none|

<h2 id="tocS_Date-Time-Component">Date-Time-Component</h2>
<!-- backwards compatibility -->
<a id="schemadate-time-component"></a>
<a id="schema_Date-Time-Component"></a>
<a id="tocSdate-time-component"></a>
<a id="tocsdate-time-component"></a>

```json
{
  "day_of_month": 25,
  "day_of_week": 5,
  "hour": 15,
  "minute": 33,
  "month": 2,
  "year": 1977
}
```

Date/time by component

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|day_of_month|integer(int32)|false|none|The day of month|
|day_of_week|integer(int32)|false|none|Both strings and numbers are accepted. If different from the value derived from the date (if specified), use the derived value.|
|hour|integer(int32)|false|none|The hour|
|minute|integer(int32)|false|none|The minute|
|month|integer(int32)|false|none|The month|
|year|integer(int32)|false|none|The year|

#### Enumerated Values

|Property|Value|
|---|---|
|day_of_week|1|
|day_of_week|2|
|day_of_week|3|
|day_of_week|4|
|day_of_week|5|
|day_of_week|6|
|day_of_week|7|

<h2 id="tocS_Date-Time-Object">Date-Time-Object</h2>
<!-- backwards compatibility -->
<a id="schemadate-time-object"></a>
<a id="schema_Date-Time-Object"></a>
<a id="tocSdate-time-object"></a>
<a id="tocsdate-time-object"></a>

```json
{
  "component": {
    "day_of_month": 25,
    "day_of_week": 5,
    "hour": 15,
    "minute": 33,
    "month": 2,
    "year": 1977
  }
}
```

The Whatsapp Business API Client will attempt to format the date/time based on a specified localization.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|component|[Date-Time-Component](#schemadate-time-component)|false|none|Date/time by component|
|unix_epoch|[Date-Time-Unix-Epoch](#schemadate-time-unix-epoch)|false|none|Date/time by Unix epoch|

<h2 id="tocS_Date-Time-Unix-Epoch">Date-Time-Unix-Epoch</h2>
<!-- backwards compatibility -->
<a id="schemadate-time-unix-epoch"></a>
<a id="schema_Date-Time-Unix-Epoch"></a>
<a id="tocSdate-time-unix-epoch"></a>
<a id="tocsdate-time-unix-epoch"></a>

```json
{
  "timestamp": 123456789
}
```

Date/time by Unix epoch

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|timestamp|integer(int32)|false|none|Epoch timestamp in seconds|

<h2 id="tocS_Detailed-User-Response">Detailed-User-Response</h2>
<!-- backwards compatibility -->
<a id="schemadetailed-user-response"></a>
<a id="schema_Detailed-User-Response"></a>
<a id="tocSdetailed-user-response"></a>
<a id="tocsdetailed-user-response"></a>

```json
{
  "users": [
    {
      "ROLES": "ROLE_USER",
      "username": "username"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errors|[[Error](#schemaerror)]|false|none|Only returned with a failed request. Contains an array of error objects that are present when there is an error. |
|meta|[Meta](#schemameta)|false|none|Contains generic information such as WhatsApp Business API Client version.|
|users|[[Detailed-User-Response-Item](#schemadetailed-user-response-item)]|false|none|none|

<h2 id="tocS_Detailed-User-Response-Item">Detailed-User-Response-Item</h2>
<!-- backwards compatibility -->
<a id="schemadetailed-user-response-item"></a>
<a id="schema_Detailed-User-Response-Item"></a>
<a id="tocSdetailed-user-response-item"></a>
<a id="tocsdetailed-user-response-item"></a>

```json
{
  "ROLES": "ROLE_USER",
  "username": "username"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ROLES|[User-Role](#schemauser-role)|false|none|none|
|username|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|ROLES|ROLE_ADMIN|
|ROLES|ROLE_USER|

<h2 id="tocS_Document">Document</h2>
<!-- backwards compatibility -->
<a id="schemadocument"></a>
<a id="schema_Document"></a>
<a id="tocSdocument"></a>
<a id="tocsdocument"></a>

```json
{
  "caption": "<Message Caption>",
  "filename": "<Filename>",
  "id": "<Media Id, from Media API>"
}
```

The media object containing a document

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[DocumentById](#schemadocumentbyid)|false|none|none|
|*oneOf*|[DocumentByProvider](#schemadocumentbyprovider)|false|none|none|

<h2 id="tocS_DocumentById">DocumentById</h2>
<!-- backwards compatibility -->
<a id="schemadocumentbyid"></a>
<a id="schema_DocumentById"></a>
<a id="tocSdocumentbyid"></a>
<a id="tocsdocumentbyid"></a>

```json
{
  "caption": "<Message Caption>",
  "filename": "<Filename>",
  "id": "<Media Id, from Media API>"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|caption|string|true|none|none|
|filename|string|true|none|none|
|id|string|true|none|none|

<h2 id="tocS_DocumentByProvider">DocumentByProvider</h2>
<!-- backwards compatibility -->
<a id="schemadocumentbyprovider"></a>
<a id="schema_DocumentByProvider"></a>
<a id="tocSdocumentbyprovider"></a>
<a id="tocsdocumentbyprovider"></a>

```json
{
  "caption": "<Message Caption>",
  "filename": "<Filename>",
  "link": "<Link to PDF, https>",
  "provider": {
    "name": "<Provider Name from Media Provider API, optional"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|caption|string|true|none|none|
|filename|string|true|none|none|
|link|string|true|none|none|
|provider|[Provider](#schemaprovider)|true|none|none|

<h2 id="tocS_Email">Email</h2>
<!-- backwards compatibility -->
<a id="schemaemail"></a>
<a id="schema_Email"></a>
<a id="tocSemail"></a>
<a id="tocsemail"></a>

```json
{
  "email": "<Contact's Email>",
  "type": "<Contact's Email Type>"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|email|string|true|none|none|
|type|string|true|none|none|

<h2 id="tocS_Enable-Two-Step-Request-Body">Enable-Two-Step-Request-Body</h2>
<!-- backwards compatibility -->
<a id="schemaenable-two-step-request-body"></a>
<a id="schema_Enable-Two-Step-Request-Body"></a>
<a id="tocSenable-two-step-request-body"></a>
<a id="tocsenable-two-step-request-body"></a>

```json
{
  "pin": "your-6-digit-pin"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|pin|string|true|none|none|

<h2 id="tocS_Error">Error</h2>
<!-- backwards compatibility -->
<a id="schemaerror"></a>
<a id="schema_Error"></a>
<a id="tocSerror"></a>
<a id="tocserror"></a>

```json
{
  "code": 1234,
  "details": "optional-detailed-error-message",
  "title": "error-code-title"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer(int32)|false|none|See the https://developers.facebook.com/docs/whatsapp/api/errors for more information.|
|details|string|false|none|error detail|
|href|string|false|none|location for error detail|
|title|string|false|none|error title|

<h2 id="tocS_Gateway-Node-Status">Gateway-Node-Status</h2>
<!-- backwards compatibility -->
<a id="schemagateway-node-status"></a>
<a id="schema_Gateway-Node-Status"></a>
<a id="tocSgateway-node-status"></a>
<a id="tocsgateway-node-status"></a>

```json
{
  "gateway_status": "connected",
  "role": "coreapp"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|gateway_status|string|false|none|none|
|role|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|role|primary_master|
|role|secondary_master|
|role|coreapp|

<h2 id="tocS_Gateway-Status">Gateway-Status</h2>
<!-- backwards compatibility -->
<a id="schemagateway-status"></a>
<a id="schema_Gateway-Status"></a>
<a id="tocSgateway-status"></a>
<a id="tocsgateway-status"></a>

```json
"connected"
```

<h2 id="tocS_Get-Business-Profile-Response">Get-Business-Profile-Response</h2>
<!-- backwards compatibility -->
<a id="schemaget-business-profile-response"></a>
<a id="schema_Get-Business-Profile-Response"></a>
<a id="tocSget-business-profile-response"></a>
<a id="tocsget-business-profile-response"></a>

```json
{
  "settings": {
    "business": {
      "profile": {
        "address": "new-business-address",
        "description": "business-description",
        "email": "new-business-email",
        "vertical": "business-industry",
        "websites": [
          "website-1",
          "website-2"
        ]
      }
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errors|[[Error](#schemaerror)]|false|none|Only returned with a failed request. Contains an array of error objects that are present when there is an error. |
|meta|[Meta](#schemameta)|false|none|Contains generic information such as WhatsApp Business API Client version.|
|settings|[Business-Settings](#schemabusiness-settings)|false|none|none|

<h2 id="tocS_Get-Media-Providers-Response">Get-Media-Providers-Response</h2>
<!-- backwards compatibility -->
<a id="schemaget-media-providers-response"></a>
<a id="schema_Get-Media-Providers-Response"></a>
<a id="tocSget-media-providers-response"></a>
<a id="tocsget-media-providers-response"></a>

```json
{
  "settings": {
    "application": {
      "media": {
        "providers": [
          {
            "config": {
              "basic": {
                "password": "your-password",
                "username": "your-username"
              }
            },
            "name": "your-first-provider",
            "type": "www"
          },
          {
            "config": {
              "bearer": "your-bearer-token"
            },
            "name": "your-second-provider",
            "type": "www"
          }
        ]
      }
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errors|[[Error](#schemaerror)]|false|none|Only returned with a failed request. Contains an array of error objects that are present when there is an error. |
|meta|[Meta](#schemameta)|false|none|Contains generic information such as WhatsApp Business API Client version.|
|settings|[Media-Provider-Settings](#schemamedia-provider-settings)|false|none|none|

<h2 id="tocS_Get-Profile-About-Response">Get-Profile-About-Response</h2>
<!-- backwards compatibility -->
<a id="schemaget-profile-about-response"></a>
<a id="schema_Get-Profile-About-Response"></a>
<a id="tocSget-profile-about-response"></a>
<a id="tocsget-profile-about-response"></a>

```json
{
  "settings": {
    "profile": {
      "about": {
        "text": "your-profile-about-text"
      }
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|settings|[Profile-About-Settings](#schemaprofile-about-settings)|false|none|none|

<h2 id="tocS_Get-Profile-Photo-Response">Get-Profile-Photo-Response</h2>
<!-- backwards compatibility -->
<a id="schemaget-profile-photo-response"></a>
<a id="schema_Get-Profile-Photo-Response"></a>
<a id="tocSget-profile-photo-response"></a>
<a id="tocsget-profile-photo-response"></a>

```json
{
  "settings": {
    "profile": {
      "photo": {
        "link": "profile-photo-url"
      }
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|settings|[Profile-Photo-Settings](#schemaprofile-photo-settings)|false|none|none|

<h2 id="tocS_Group">Group</h2>
<!-- backwards compatibility -->
<a id="schemagroup"></a>
<a id="schema_Group"></a>
<a id="tocSgroup"></a>
<a id="tocsgroup"></a>

```json
{
  "creation_time": 123456789,
  "id": "your-group-id"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|creation_time|integer(int32)|false|none|timestamp|
|id|string|false|none|none|

<h2 id="tocS_Group-Admin-Request-Body">Group-Admin-Request-Body</h2>
<!-- backwards compatibility -->
<a id="schemagroup-admin-request-body"></a>
<a id="schema_Group-Admin-Request-Body"></a>
<a id="tocSgroup-admin-request-body"></a>
<a id="tocsgroup-admin-request-body"></a>

```json
{
  "wa_ids": [
    "<Recipient WA-ID, from Contacts API>"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|wa_ids|[string]|true|none|The WhatsApp IDs of the people to be added or removed as group admins|

<h2 id="tocS_Group-Info">Group-Info</h2>
<!-- backwards compatibility -->
<a id="schemagroup-info"></a>
<a id="schema_Group-Info"></a>
<a id="tocSgroup-info"></a>
<a id="tocsgroup-info"></a>

```json
{
  "admins": [
    "whatsapp-id-1",
    "whatsapp-id-2"
  ],
  "creation_time": 123456789,
  "creator": "whatsapp-id-1",
  "participants": [
    "whatsapp-id-3",
    "whatsapp-id-4",
    "whatsapp-id-5"
  ],
  "subject": "your-group-subject"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|admins|[string]|false|none|Group administrators<br>Lists IDs of the creator of the group and any administrators added|
|creation_time|integer(int32)|false|none|Group creation time|
|creator|string|false|none|ID of the creator of this group|
|participants|[string]|false|none|Participants of the group<br>This is an array of all the IDs of the participants in the group. Initially, this will be the creator of the group.|
|subject|string|false|none|Subject of the group|

<h2 id="tocS_Group-Invite">Group-Invite</h2>
<!-- backwards compatibility -->
<a id="schemagroup-invite"></a>
<a id="schema_Group-Invite"></a>
<a id="tocSgroup-invite"></a>
<a id="tocsgroup-invite"></a>

```json
{
  "link": "group-invite-link"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|link|string|false|none|none|

<h2 id="tocS_Group-Invite-Response">Group-Invite-Response</h2>
<!-- backwards compatibility -->
<a id="schemagroup-invite-response"></a>
<a id="schema_Group-Invite-Response"></a>
<a id="tocSgroup-invite-response"></a>
<a id="tocsgroup-invite-response"></a>

```json
{
  "groups": [
    {
      "link": "group-invite-link"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errors|[[Error](#schemaerror)]|false|none|Only returned with a failed request. Contains an array of error objects that are present when there is an error. |
|meta|[Meta](#schemameta)|false|none|Contains generic information such as WhatsApp Business API Client version.|
|groups|[[Group-Invite](#schemagroup-invite)]|false|none|none|

<h2 id="tocS_Group-Response">Group-Response</h2>
<!-- backwards compatibility -->
<a id="schemagroup-response"></a>
<a id="schema_Group-Response"></a>
<a id="tocSgroup-response"></a>
<a id="tocsgroup-response"></a>

```json
{
  "groups": [
    {
      "admins": [
        "whatsapp-id-1",
        "whatsapp-id-2"
      ],
      "creation_time": 123456789,
      "creator": "whatsapp-id-1",
      "participants": [
        "whatsapp-id-3",
        "whatsapp-id-4",
        "whatsapp-id-5"
      ],
      "subject": "your-group-subject"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errors|[[Error](#schemaerror)]|false|none|Only returned with a failed request. Contains an array of error objects that are present when there is an error. |
|meta|[Meta](#schemameta)|false|none|Contains generic information such as WhatsApp Business API Client version.|
|groups|[[Group-Info](#schemagroup-info)]|false|none|none|

<h2 id="tocS_Groups-Response">Groups-Response</h2>
<!-- backwards compatibility -->
<a id="schemagroups-response"></a>
<a id="schema_Groups-Response"></a>
<a id="tocSgroups-response"></a>
<a id="tocsgroups-response"></a>

```json
{
  "groups": [
    {
      "creation_time": 123456789,
      "id": "your-group-id"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errors|[[Error](#schemaerror)]|false|none|Only returned with a failed request. Contains an array of error objects that are present when there is an error. |
|meta|[Meta](#schemameta)|false|none|Contains generic information such as WhatsApp Business API Client version.|
|groups|[[Group](#schemagroup)]|false|none|none|

<h2 id="tocS_Hsm">Hsm</h2>
<!-- backwards compatibility -->
<a id="schemahsm"></a>
<a id="schema_Hsm"></a>
<a id="tocShsm"></a>
<a id="tocshsm"></a>

```json
{
  "element_name": "hello_world",
  "language": {
    "code": "en",
    "policy": "deterministic"
  },
  "localizable_params": [
    {
      "default": "1234"
    }
  ],
  "namespace": "business_a_namespace"
}
```

The containing element for the message content — Indicates that the message is highly structured. Parameters contained within provide the structure.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|element_name|string|true|none|The element name that indicates which template to use within the namespace|
|language|[Language](#schemalanguage)|true|none|none|
|localizable_params|[[LocalizableParam](#schemalocalizableparam)]|true|none|This field is an array of values to apply to variables in the template|
|namespace|string|true|none|The namespace that will be used|

<h2 id="tocS_Image">Image</h2>
<!-- backwards compatibility -->
<a id="schemaimage"></a>
<a id="schema_Image"></a>
<a id="tocSimage"></a>
<a id="tocsimage"></a>

```json
{
  "caption": "<Message Caption>",
  "id": "<Media Id, from Media API>"
}
```

The media object containing an image

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[ImageById](#schemaimagebyid)|false|none|none|
|*oneOf*|[ImageByProvider](#schemaimagebyprovider)|false|none|none|

<h2 id="tocS_ImageById">ImageById</h2>
<!-- backwards compatibility -->
<a id="schemaimagebyid"></a>
<a id="schema_ImageById"></a>
<a id="tocSimagebyid"></a>
<a id="tocsimagebyid"></a>

```json
{
  "caption": "<Message Caption>",
  "id": "<Media Id, from Media API>"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|caption|string|true|none|none|
|id|string|true|none|none|

<h2 id="tocS_ImageByProvider">ImageByProvider</h2>
<!-- backwards compatibility -->
<a id="schemaimagebyprovider"></a>
<a id="schema_ImageByProvider"></a>
<a id="tocSimagebyprovider"></a>
<a id="tocsimagebyprovider"></a>

```json
{
  "caption": "<Media Caption>",
  "link": "<Link to Image, https>",
  "provider": {
    "name": "<Provider Name from Media Provider API, optional"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|caption|string|true|none|none|
|link|string|true|none|none|
|provider|[Provider](#schemaprovider)|true|none|none|

<h2 id="tocS_Language">Language</h2>
<!-- backwards compatibility -->
<a id="schemalanguage"></a>
<a id="schema_Language"></a>
<a id="tocSlanguage"></a>
<a id="tocslanguage"></a>

```json
{
  "code": "en",
  "policy": "deterministic"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|true|none|The code of the language or locale to use — Accepts both language and language_locale formats (e.g., en and en_US).|
|policy|string|true|none|The language policy the message should follow|

#### Enumerated Values

|Property|Value|
|---|---|
|policy|fallback|
|policy|deterministic|

<h2 id="tocS_LocalizableParam">LocalizableParam</h2>
<!-- backwards compatibility -->
<a id="schemalocalizableparam"></a>
<a id="schema_LocalizableParam"></a>
<a id="tocSlocalizableparam"></a>
<a id="tocslocalizableparam"></a>

```json
{
  "default": "<param value>"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|currency|[Currency](#schemacurrency)|false|none|none|
|date_time|[Date-Time-Object](#schemadate-time-object)|false|none|The Whatsapp Business API Client will attempt to format the date/time based on a specified localization.|
|default|string|true|none|Default text if localization fails|

<h2 id="tocS_Location">Location</h2>
<!-- backwards compatibility -->
<a id="schemalocation"></a>
<a id="schema_Location"></a>
<a id="tocSlocation"></a>
<a id="tocslocation"></a>

```json
{
  "address": "<Location's Address>",
  "latitude": "<Latitude>",
  "longitude": "<Longitude>",
  "name": "<Location Name>"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|address|string|true|none|Address of the location. Only displayed if name is present.|
|latitude|string|true|none|Latitude of the location|
|longitude|string|true|none|Longitude of the location|
|name|string|true|none|Name of the location|

<h2 id="tocS_Login-Admin-Request-Body">Login-Admin-Request-Body</h2>
<!-- backwards compatibility -->
<a id="schemalogin-admin-request-body"></a>
<a id="schema_Login-Admin-Request-Body"></a>
<a id="tocSlogin-admin-request-body"></a>
<a id="tocslogin-admin-request-body"></a>

```json
{
  "new_password": "<New Admin Password>"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|new_password|string|true|none|none|

<h2 id="tocS_Mark-Message-As-Read-Request-Body">Mark-Message-As-Read-Request-Body</h2>
<!-- backwards compatibility -->
<a id="schemamark-message-as-read-request-body"></a>
<a id="schema_Mark-Message-As-Read-Request-Body"></a>
<a id="tocSmark-message-as-read-request-body"></a>
<a id="tocsmark-message-as-read-request-body"></a>

```json
{
  "status": "read"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|string|true|none|none|

<h2 id="tocS_Media">Media</h2>
<!-- backwards compatibility -->
<a id="schemamedia"></a>
<a id="schema_Media"></a>
<a id="tocSmedia"></a>
<a id="tocsmedia"></a>

```json
{
  "auto_download": [
    "image",
    "document",
    "audio"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|auto_download|[string]|true|none|An array specifying which types of media to automatically download.|

#### Enumerated Values

|Property|Value|
|---|---|
|auto_download|audio|
|auto_download|document|
|auto_download|voice|
|auto_download|video|
|auto_download|image.|

<h2 id="tocS_Media-Provider">Media-Provider</h2>
<!-- backwards compatibility -->
<a id="schemamedia-provider"></a>
<a id="schema_Media-Provider"></a>
<a id="tocSmedia-provider"></a>
<a id="tocsmedia-provider"></a>

```json
{
  "config": {
    "bearer": "<Bearer Auth Token>"
  },
  "name": "<Provider Name>",
  "type": "www"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|config|[Config](#schemaconfig)|false|none|none|
|name|string|false|none|The name for the provider|
|type|string|false|none|The type of provider|

<h2 id="tocS_Media-Provider-Settings">Media-Provider-Settings</h2>
<!-- backwards compatibility -->
<a id="schemamedia-provider-settings"></a>
<a id="schema_Media-Provider-Settings"></a>
<a id="tocSmedia-provider-settings"></a>
<a id="tocsmedia-provider-settings"></a>

```json
{
  "application": {
    "media": {
      "providers": [
        {
          "config": {
            "basic": {
              "password": "your-password",
              "username": "your-username"
            }
          },
          "name": "your-first-provider",
          "type": "www"
        },
        {
          "config": {
            "bearer": "your-bearer-token"
          },
          "name": "your-second-provider",
          "type": "www"
        }
      ]
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|application|[Media-Provider-Settings-Application](#schemamedia-provider-settings-application)|false|none|none|

<h2 id="tocS_Media-Provider-Settings-Application">Media-Provider-Settings-Application</h2>
<!-- backwards compatibility -->
<a id="schemamedia-provider-settings-application"></a>
<a id="schema_Media-Provider-Settings-Application"></a>
<a id="tocSmedia-provider-settings-application"></a>
<a id="tocsmedia-provider-settings-application"></a>

```json
{
  "media": {
    "providers": [
      {
        "config": {
          "basic": {
            "password": "your-password",
            "username": "your-username"
          }
        },
        "name": "your-first-provider",
        "type": "www"
      },
      {
        "config": {
          "bearer": "your-bearer-token"
        },
        "name": "your-second-provider",
        "type": "www"
      }
    ]
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|media|[Media-Provider-Settings-Application-Media](#schemamedia-provider-settings-application-media)|false|none|none|

<h2 id="tocS_Media-Provider-Settings-Application-Media">Media-Provider-Settings-Application-Media</h2>
<!-- backwards compatibility -->
<a id="schemamedia-provider-settings-application-media"></a>
<a id="schema_Media-Provider-Settings-Application-Media"></a>
<a id="tocSmedia-provider-settings-application-media"></a>
<a id="tocsmedia-provider-settings-application-media"></a>

```json
{
  "providers": [
    {
      "config": {
        "basic": {
          "password": "your-password",
          "username": "your-username"
        }
      },
      "name": "your-first-provider",
      "type": "www"
    },
    {
      "config": {
        "bearer": "your-bearer-token"
      },
      "name": "your-second-provider",
      "type": "www"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|providers|[[Media-Provider](#schemamedia-provider)]|false|none|none|

<h2 id="tocS_Message">Message</h2>
<!-- backwards compatibility -->
<a id="schemamessage"></a>
<a id="schema_Message"></a>
<a id="tocSmessage"></a>
<a id="tocsmessage"></a>

```json
{
  "id": "gBEGkYiEB1VXAglK1ZEqA1YKPrU"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|none|

<h2 id="tocS_Message-Context">Message-Context</h2>
<!-- backwards compatibility -->
<a id="schemamessage-context"></a>
<a id="schema_Message-Context"></a>
<a id="tocSmessage-context"></a>
<a id="tocsmessage-context"></a>

```json
{
  "from": "sender-wa-id-of-context-message",
  "group_id": "group-id-of-context-message",
  "id": "message-id-of-context-message",
  "mentions": [
    "wa-id1",
    "wa-id2"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|from|string|false|none|Sender Whatsapp id of context-message|
|group_id|string|false|none|GroupId of context message|
|id|string|false|none|message id|
|mentions|[string]|false|none|Whats app ids|

<h2 id="tocS_Message-Response">Message-Response</h2>
<!-- backwards compatibility -->
<a id="schemamessage-response"></a>
<a id="schema_Message-Response"></a>
<a id="tocSmessage-response"></a>
<a id="tocsmessage-response"></a>

```json
{
  "messages": [
    {
      "id": "gBEGkYiEB1VXAglK1ZEqA1YKPrU"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errors|[[Error](#schemaerror)]|false|none|Only returned with a failed request. Contains an array of error objects that are present when there is an error. |
|meta|[Meta](#schemameta)|false|none|Contains generic information such as WhatsApp Business API Client version.|
|messages|[[Message](#schemamessage)]|false|none|none|

<h2 id="tocS_Message-Type">Message-Type</h2>
<!-- backwards compatibility -->
<a id="schemamessage-type"></a>
<a id="schema_Message-Type"></a>
<a id="tocSmessage-type"></a>
<a id="tocsmessage-type"></a>

```json
"text"
```

type of the message

<h2 id="tocS_Meta">Meta</h2>
<!-- backwards compatibility -->
<a id="schemameta"></a>
<a id="schema_Meta"></a>
<a id="tocSmeta"></a>
<a id="tocsmeta"></a>

```json
{
  "api_status": "stable",
  "version": "whatsapp-business-api-client-version"
}
```

Contains generic information such as WhatsApp Business API Client version.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|api_status|string|false|none|none|
|version|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|api_status|deprecated|
|api_status|experimental|
|api_status|stable|

<h2 id="tocS_Name">Name</h2>
<!-- backwards compatibility -->
<a id="schemaname"></a>
<a id="schema_Name"></a>
<a id="tocSname"></a>
<a id="tocsname"></a>

```json
{
  "first_name": "John",
  "formatted_name": "John Smith",
  "last_name": "Smith"
}
```

Full contact name

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|first_name|string|false|none|First name|
|formatted_name|string|true|none|Full name as it normally appears|
|last_name|string|false|none|Last name|
|prefix|string|false|none|Name preffix|
|suffix|string|false|none|Name suffix|

<h2 id="tocS_Org">Org</h2>
<!-- backwards compatibility -->
<a id="schemaorg"></a>
<a id="schema_Org"></a>
<a id="tocSorg"></a>
<a id="tocsorg"></a>

```json
{
  "company": "WhatsApp",
  "department": "Design",
  "title": "Manager"
}
```

Contact organization information

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|company|string|true|none|Name of the contact's company|
|department|string|false|none|Name of the contact's department|
|title|string|false|none|Contact's business title|

<h2 id="tocS_Phone">Phone</h2>
<!-- backwards compatibility -->
<a id="schemaphone"></a>
<a id="schema_Phone"></a>
<a id="tocSphone"></a>
<a id="tocsphone"></a>

```json
{
  "phone": "+1 (650) 555-1234",
  "type": "WORK",
  "wa_id": "16505551234"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|phone|string|false|none|none|
|type|string|false|none|Standard Values: CELL, MAIN, IPHONE, HOME, WORK|
|wa_id|string|false|none|WhatsApp ID|

<h2 id="tocS_Profile-About">Profile-About</h2>
<!-- backwards compatibility -->
<a id="schemaprofile-about"></a>
<a id="schema_Profile-About"></a>
<a id="tocSprofile-about"></a>
<a id="tocsprofile-about"></a>

```json
{
  "text": "<About Profile>"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|text|string|true|none|Text to display in your profile's About section<br>The max length for the string is 139 characters.|

<h2 id="tocS_Profile-About-Settings">Profile-About-Settings</h2>
<!-- backwards compatibility -->
<a id="schemaprofile-about-settings"></a>
<a id="schema_Profile-About-Settings"></a>
<a id="tocSprofile-about-settings"></a>
<a id="tocsprofile-about-settings"></a>

```json
{
  "profile": {
    "about": {
      "text": "your-profile-about-text"
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|profile|[Profile-About-Settings-Profile](#schemaprofile-about-settings-profile)|false|none|none|

<h2 id="tocS_Profile-About-Settings-Profile">Profile-About-Settings-Profile</h2>
<!-- backwards compatibility -->
<a id="schemaprofile-about-settings-profile"></a>
<a id="schema_Profile-About-Settings-Profile"></a>
<a id="tocSprofile-about-settings-profile"></a>
<a id="tocsprofile-about-settings-profile"></a>

```json
{
  "about": {
    "text": "your-profile-about-text"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|about|[Profile-About](#schemaprofile-about)|false|none|none|

<h2 id="tocS_Profile-Photo-Settings">Profile-Photo-Settings</h2>
<!-- backwards compatibility -->
<a id="schemaprofile-photo-settings"></a>
<a id="schema_Profile-Photo-Settings"></a>
<a id="tocSprofile-photo-settings"></a>
<a id="tocsprofile-photo-settings"></a>

```json
{
  "profile": {
    "photo": {
      "link": "profile-photo-url"
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|profile|object|false|none|none|

<h2 id="tocS_Profile-Photo-Settings-Profile">Profile-Photo-Settings-Profile</h2>
<!-- backwards compatibility -->
<a id="schemaprofile-photo-settings-profile"></a>
<a id="schema_Profile-Photo-Settings-Profile"></a>
<a id="tocSprofile-photo-settings-profile"></a>
<a id="tocsprofile-photo-settings-profile"></a>

```json
{
  "photo": {
    "link": "profile-photo-url"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|photo|[Profile-Photo-Settings-Profile-Photo](#schemaprofile-photo-settings-profile-photo)|false|none|none|

<h2 id="tocS_Profile-Photo-Settings-Profile-Photo">Profile-Photo-Settings-Profile-Photo</h2>
<!-- backwards compatibility -->
<a id="schemaprofile-photo-settings-profile-photo"></a>
<a id="schema_Profile-Photo-Settings-Profile-Photo"></a>
<a id="tocSprofile-photo-settings-profile-photo"></a>
<a id="tocsprofile-photo-settings-profile-photo"></a>

```json
{
  "link": "profile-photo-url"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|link|string|false|none|none|

<h2 id="tocS_Provider">Provider</h2>
<!-- backwards compatibility -->
<a id="schemaprovider"></a>
<a id="schema_Provider"></a>
<a id="tocSprovider"></a>
<a id="tocsprovider"></a>

```json
{
  "name": "<Provider Name from Media Provider API, optional"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|none|

<h2 id="tocS_Register-Account-Request-Body">Register-Account-Request-Body</h2>
<!-- backwards compatibility -->
<a id="schemaregister-account-request-body"></a>
<a id="schema_Register-Account-Request-Body"></a>
<a id="tocSregister-account-request-body"></a>
<a id="tocsregister-account-request-body"></a>

```json
{
  "code": "your-registration-code-received-by-sms-or-voice-call"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|true|none|none|

<h2 id="tocS_Remove-Group-Participant-Request-Body">Remove-Group-Participant-Request-Body</h2>
<!-- backwards compatibility -->
<a id="schemaremove-group-participant-request-body"></a>
<a id="schema_Remove-Group-Participant-Request-Body"></a>
<a id="tocSremove-group-participant-request-body"></a>
<a id="tocsremove-group-participant-request-body"></a>

```json
{
  "wa_ids": [
    "{{Recipient-WA-ID}}"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|wa_ids|[string]|true|none|none|

<h2 id="tocS_Request-Code-Account">Request-Code-Account</h2>
<!-- backwards compatibility -->
<a id="schemarequest-code-account"></a>
<a id="schema_Request-Code-Account"></a>
<a id="tocSrequest-code-account"></a>
<a id="tocsrequest-code-account"></a>

```json
{
  "vname": "decoded-vname-from-cert"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|vname|string|false|none|none|

<h2 id="tocS_Request-Code-Request-Body">Request-Code-Request-Body</h2>
<!-- backwards compatibility -->
<a id="schemarequest-code-request-body"></a>
<a id="schema_Request-Code-Request-Body"></a>
<a id="tocSrequest-code-request-body"></a>
<a id="tocsrequest-code-request-body"></a>

```json
{
  "cc": "<Country Code>",
  "cert": "<Valid Cert from Business Manager>",
  "method": "< sms | voice >",
  "phone_number": "<Phone Number>",
  "pin": "<Two-Step Verification PIN"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cc|string|true|none|Numerical country code for the phone number you are registering|
|cert|string|true|none|Base64-encoded Verified Name certificate|
|method|string|true|none|Method of receiving your registration code|
|phone_number|string|true|none|Phone number you are registering, without the country code or plus symbol (+)|
|pin|string|false|none|Existing 6-digit PIN — This is only required when two-factor verification is enabled on this account.|

#### Enumerated Values

|Property|Value|
|---|---|
|method|sms|
|method|voice|

<h2 id="tocS_Request-Code-Response">Request-Code-Response</h2>
<!-- backwards compatibility -->
<a id="schemarequest-code-response"></a>
<a id="schema_Request-Code-Response"></a>
<a id="tocSrequest-code-response"></a>
<a id="tocsrequest-code-response"></a>

```json
{
  "account": [
    {
      "vname": "decoded-vname-from-cert"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|account|[[Request-Code-Account](#schemarequest-code-account)]|false|none|none|

<h2 id="tocS_Response">Response</h2>
<!-- backwards compatibility -->
<a id="schemaresponse"></a>
<a id="schema_Response"></a>
<a id="tocSresponse"></a>
<a id="tocsresponse"></a>

```json
{
  "errors": [
    {
      "code": 1234,
      "details": "optional-detailed-error-message",
      "title": "error-code-title"
    }
  ],
  "meta": {
    "api_status": "deprecated",
    "version": "whatsapp-business-api-client-version"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errors|[[Error](#schemaerror)]|false|none|Only returned with a failed request. Contains an array of error objects that are present when there is an error. |
|meta|[Meta](#schemameta)|false|none|Contains generic information such as WhatsApp Business API Client version.|

<h2 id="tocS_Restore-Settings-Request-Body">Restore-Settings-Request-Body</h2>
<!-- backwards compatibility -->
<a id="schemarestore-settings-request-body"></a>
<a id="schema_Restore-Settings-Request-Body"></a>
<a id="tocSrestore-settings-request-body"></a>
<a id="tocsrestore-settings-request-body"></a>

```json
{
  "data": "<Data to Restore, from Backup API>",
  "password": "<Password for Backup>"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|string|true|none|The data that was returned by the /v1/settings/backup API call|
|password|string|true|none|The password you used in the /v1/settings/backup API call to encrypt the backup data|

<h2 id="tocS_Send-Message-Request-Body">Send-Message-Request-Body</h2>
<!-- backwards compatibility -->
<a id="schemasend-message-request-body"></a>
<a id="schema_Send-Message-Request-Body"></a>
<a id="tocSsend-message-request-body"></a>
<a id="tocssend-message-request-body"></a>

```json
{
  "preview_url": true,
  "recipient_type": "individual",
  "text": {
    "body": "your-text-message-content"
  },
  "to": "{whatsapp-id}",
  "type": "text"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|audio|[Audio](#schemaaudio)|false|none|The media object containing audio|
|contacts|[[Contact](#schemacontact)]|false|none|none|
|document|[Document](#schemadocument)|false|none|The media object containing a document|
|hsm|[Hsm](#schemahsm)|false|none|The containing element for the message content — Indicates that the message is highly structured. Parameters contained within provide the structure.|
|image|[Image](#schemaimage)|false|none|The media object containing an image|
|location|[Location](#schemalocation)|false|none|none|
|preview_url|boolean|false|none|Specifying preview_url in the request is optional when not including a URL in your message.<br>To include a URL preview, set preview_url to true in the message body and make sure the URL begins with http:// or https://. For more information, see the Sending URLs in Text Messages section.|
|recipient_type|string|false|none|Determines whether the recipient is an individual or a group<br>Specifying recipient_type in the request is optional when the value is individual.<br>However, recipient_type is required when using group. If sending a text message to a group, see the Sending Group Messages documentation.|
|text|[Text](#schematext)|false|none|none|
|to|string|true|none|When recipient_type is individual, this field is the WhatsApp ID (phone number) returned from contacts endpoint. When recipient_type is group, this field is the WhatsApp group ID.|
|ttl|object|false|none|none|
|type|[Message-Type](#schemamessage-type)|false|none|type of the message|
|video|[Video](#schemavideo)|false|none|The media object containing a video|

#### Enumerated Values

|Property|Value|
|---|---|
|recipient_type|individual|
|recipient_type|group|
|type|audio|
|type|contacts|
|type|document|
|type|hsm|
|type|image|
|type|location|
|type|text|
|type|video|
|type|voice|
|type|unknown|

<h2 id="tocS_Set-Shards-Request-Body">Set-Shards-Request-Body</h2>
<!-- backwards compatibility -->
<a id="schemaset-shards-request-body"></a>
<a id="schema_Set-Shards-Request-Body"></a>
<a id="tocSset-shards-request-body"></a>
<a id="tocsset-shards-request-body"></a>

```json
{
  "cc": "<Country Code>",
  "phone_number": "<Phone Number>",
  "pin": "<Two-Step PIN>",
  "shards": 32
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cc|string|true|none|none|
|phone_number|string|true|none|none|
|pin|string|true|none|none|
|shards|integer(int32)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|shards|1|
|shards|2|
|shards|4|
|shards|8|
|shards|16|
|shards|32|

<h2 id="tocS_Text">Text</h2>
<!-- backwards compatibility -->
<a id="schematext"></a>
<a id="schema_Text"></a>
<a id="tocStext"></a>
<a id="tocstext"></a>

```json
{
  "body": "<Message Text>"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|body|string|true|none|none|

<h2 id="tocS_Update-Group-Info-Request-Body">Update-Group-Info-Request-Body</h2>
<!-- backwards compatibility -->
<a id="schemaupdate-group-info-request-body"></a>
<a id="schema_Update-Group-Info-Request-Body"></a>
<a id="tocSupdate-group-info-request-body"></a>
<a id="tocsupdate-group-info-request-body"></a>

```json
{
  "subject": "<New Group Subject>"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|subject|string|true|none|none|

<h2 id="tocS_Update-User-Request-Body">Update-User-Request-Body</h2>
<!-- backwards compatibility -->
<a id="schemaupdate-user-request-body"></a>
<a id="schema_Update-User-Request-Body"></a>
<a id="tocSupdate-user-request-body"></a>
<a id="tocsupdate-user-request-body"></a>

```json
{
  "password": "New Password"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|password|string|true|none|password|

<h2 id="tocS_Upload-Media">Upload-Media</h2>
<!-- backwards compatibility -->
<a id="schemaupload-media"></a>
<a id="schema_Upload-Media"></a>
<a id="tocSupload-media"></a>
<a id="tocsupload-media"></a>

```json
{
  "id": "f043afd0-f0ae-4b9c-ab3d-696fb4c8cd68"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|none|

<h2 id="tocS_Upload-Media-Response">Upload-Media-Response</h2>
<!-- backwards compatibility -->
<a id="schemaupload-media-response"></a>
<a id="schema_Upload-Media-Response"></a>
<a id="tocSupload-media-response"></a>
<a id="tocsupload-media-response"></a>

```json
{
  "media": [
    {
      "id": "f043afd0-f0ae-4b9c-ab3d-696fb4c8cd68"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errors|[[Error](#schemaerror)]|false|none|Only returned with a failed request. Contains an array of error objects that are present when there is an error. |
|meta|[Meta](#schemameta)|false|none|Contains generic information such as WhatsApp Business API Client version.|
|media|[[Upload-Media](#schemaupload-media)]|false|none|none|

<h2 id="tocS_Url">Url</h2>
<!-- backwards compatibility -->
<a id="schemaurl"></a>
<a id="schema_Url"></a>
<a id="tocSurl"></a>
<a id="tocsurl"></a>

```json
{
  "type": "WORK",
  "url": "https://www.facebook.com"
}
```

Standard Values: HOME, WORK

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|false|none|Standard Values: HOME, WORK|
|url|string|false|none|URL|

<h2 id="tocS_User-Login-Response">User-Login-Response</h2>
<!-- backwards compatibility -->
<a id="schemauser-login-response"></a>
<a id="schema_User-Login-Response"></a>
<a id="tocSuser-login-response"></a>
<a id="tocsuser-login-response"></a>

```json
{
  "users": [
    {
      "expires_after": "2018-03-01 15:29:26+00:00",
      "token": "eyJhbGciOHlXVCJ9.eyJ1c2VyIjoNTIzMDE2Nn0.mEoF0COaO00Z1cANo"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errors|[[Error](#schemaerror)]|false|none|Only returned with a failed request. Contains an array of error objects that are present when there is an error. |
|meta|[Meta](#schemameta)|false|none|Contains generic information such as WhatsApp Business API Client version.|
|users|[[User-Login-Response-Item](#schemauser-login-response-item)]|false|none|none|

<h2 id="tocS_User-Login-Response-Item">User-Login-Response-Item</h2>
<!-- backwards compatibility -->
<a id="schemauser-login-response-item"></a>
<a id="schema_User-Login-Response-Item"></a>
<a id="tocSuser-login-response-item"></a>
<a id="tocsuser-login-response-item"></a>

```json
{
  "expires_after": "2018-03-01 15:29:26+00:00",
  "token": "eyJhbGciOHlXVCJ9.eyJ1c2VyIjoNTIzMDE2Nn0.mEoF0COaO00Z1cANo"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|expires_after|string(date-time)|false|none|Token expiration timestamp. By default, this is 7 days.|
|token|string|false|none|Authentication token to be used for all other WhatsApp Business API calls. The token must be sent in the authorization header in the format:<br>Authorization: Bearer <authentication-token>|

<h2 id="tocS_User-Response">User-Response</h2>
<!-- backwards compatibility -->
<a id="schemauser-response"></a>
<a id="schema_User-Response"></a>
<a id="tocSuser-response"></a>
<a id="tocsuser-response"></a>

```json
{
  "users": [
    {
      "username": "username"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errors|[[Error](#schemaerror)]|false|none|Only returned with a failed request. Contains an array of error objects that are present when there is an error. |
|meta|[Meta](#schemameta)|false|none|Contains generic information such as WhatsApp Business API Client version.|
|users|[[User-Response-Item](#schemauser-response-item)]|false|none|none|

<h2 id="tocS_User-Response-Item">User-Response-Item</h2>
<!-- backwards compatibility -->
<a id="schemauser-response-item"></a>
<a id="schema_User-Response-Item"></a>
<a id="tocSuser-response-item"></a>
<a id="tocsuser-response-item"></a>

```json
{
  "username": "username"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|username|string|false|none|none|

<h2 id="tocS_User-Role">User-Role</h2>
<!-- backwards compatibility -->
<a id="schemauser-role"></a>
<a id="schema_User-Role"></a>
<a id="tocSuser-role"></a>
<a id="tocsuser-role"></a>

```json
"ROLE_ADMIN"
```

<h2 id="tocS_Video">Video</h2>
<!-- backwards compatibility -->
<a id="schemavideo"></a>
<a id="schema_Video"></a>
<a id="tocSvideo"></a>
<a id="tocsvideo"></a>

```json
{
  "caption": "<Message Caption>",
  "id": "<Media Id, from Media API>"
}
```

The media object containing a video

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[VideoById](#schemavideobyid)|false|none|none|
|*oneOf*|[VideoByProvider](#schemavideobyprovider)|false|none|none|

<h2 id="tocS_VideoById">VideoById</h2>
<!-- backwards compatibility -->
<a id="schemavideobyid"></a>
<a id="schema_VideoById"></a>
<a id="tocSvideobyid"></a>
<a id="tocsvideobyid"></a>

```json
{
  "caption": "<Message Caption>",
  "id": "<Media Id, from Media API>"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|caption|string|true|none|none|
|id|string|true|none|none|

<h2 id="tocS_VideoByProvider">VideoByProvider</h2>
<!-- backwards compatibility -->
<a id="schemavideobyprovider"></a>
<a id="schema_VideoByProvider"></a>
<a id="tocSvideobyprovider"></a>
<a id="tocsvideobyprovider"></a>

```json
{
  "caption": "<Message Caption>",
  "link": "<Link to Video, https>",
  "provider": {
    "name": "<Provider Name from Media Provider API, optional"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|caption|string|true|none|none|
|link|string|true|none|none|
|provider|[Provider](#schemaprovider)|true|none|none|

<h2 id="tocS_Webhook-Audio">Webhook-Audio</h2>
<!-- backwards compatibility -->
<a id="schemawebhook-audio"></a>
<a id="schema_Webhook-Audio"></a>
<a id="tocSwebhook-audio"></a>
<a id="tocswebhook-audio"></a>

```json
{
  "file": "absolute-filepath-on-coreapp",
  "id": "media-id",
  "link": "link-to-audio-file",
  "mime_type": "media-mime-type",
  "sha256": "checksum"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|caption|string|false|none|Optional. Only present if specified.|
|file|string|false|none|**Deprecated.** Absolute filename and location on media volume. This parameter is deprecated.|
|filename|string|false|none|Filename on the sender's device. This will only be present in audio and document media messages.|
|id|string|false|none|ID of the media. Can be used to delete the media if stored locally on the client.|
|link|string|false|none|none|
|mime_type|string|false|none|Mime type of media|
|sha256|string|false|none|Checksum|

<h2 id="tocS_Webhook-Contact">Webhook-Contact</h2>
<!-- backwards compatibility -->
<a id="schemawebhook-contact"></a>
<a id="schema_Webhook-Contact"></a>
<a id="tocSwebhook-contact"></a>
<a id="tocswebhook-contact"></a>

```json
{
  "profile": {
    "name": "Kerry Fisher"
  },
  "wa_id": "16315551234"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|profile|[Webhook-Contact-Profile](#schemawebhook-contact-profile)|false|none|none|
|wa_id|string|false|none|The WhatsApp ID of the contact|

<h2 id="tocS_Webhook-Contact-Profile">Webhook-Contact-Profile</h2>
<!-- backwards compatibility -->
<a id="schemawebhook-contact-profile"></a>
<a id="schema_Webhook-Contact-Profile"></a>
<a id="tocSwebhook-contact-profile"></a>
<a id="tocswebhook-contact-profile"></a>

```json
{
  "name": "sender-profile-name"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|Optional. As of v2.21.4, contains the sender's profile name.|

<h2 id="tocS_Webhook-Document">Webhook-Document</h2>
<!-- backwards compatibility -->
<a id="schemawebhook-document"></a>
<a id="schema_Webhook-Document"></a>
<a id="tocSwebhook-document"></a>
<a id="tocswebhook-document"></a>

```json
{
  "caption": "80skaraokesonglistartist",
  "file": "/usr/local/wamedia/shared/fc233119-733f-49c-bcbd-b2f68f798e33",
  "id": "fc233119-733f-49c-bcbd-b2f68f798e33",
  "mime_type": "application/pdf",
  "sha256": "3b11fa6ef2bde1dd14726e09d3edaf782120919d06f6484f32d5d5caa4b8e"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|caption|string|false|none|Optional. Only present if specified.|
|file|string|false|none|**Deprecated.** Absolute filename and location on media volume. This parameter is deprecated.|
|filename|string|false|none|Filename on the sender's device. This will only be present in audio and document media messages.|
|id|string|false|none|ID of the media. Can be used to delete the media if stored locally on the client.|
|link|string|false|none|none|
|mime_type|string|false|none|Mime type of media|
|sha256|string|false|none|Checksum|

<h2 id="tocS_Webhook-Event">Webhook-Event</h2>
<!-- backwards compatibility -->
<a id="schemawebhook-event"></a>
<a id="schema_Webhook-Event"></a>
<a id="tocSwebhook-event"></a>
<a id="tocswebhook-event"></a>

```json
{
  "contacts": [
    {
      "profile": {
        "name": "Kerry Fisher"
      },
      "wa_id": "16315551234"
    }
  ],
  "messages": [
    {
      "from": "16315551234",
      "id": "ABGGFlA5FpafAgo6tHcNmNjXmuSf",
      "text": {
        "body": "Hello this is an answer"
      },
      "timestamp": "1518694235",
      "type": "text"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|contacts|[[Webhook-Contact](#schemawebhook-contact)]|false|none|none|
|errors|[[Error](#schemaerror)]|false|none|none|
|messages|[[Webhook-Message](#schemawebhook-message)]|false|none|none|
|statuses|[[Webhook-Status](#schemawebhook-status)]|false|none|none|

<h2 id="tocS_Webhook-Image">Webhook-Image</h2>
<!-- backwards compatibility -->
<a id="schemawebhook-image"></a>
<a id="schema_Webhook-Image"></a>
<a id="tocSwebhook-image"></a>
<a id="tocswebhook-image"></a>

```json
{
  "caption": "Check out my new phone!",
  "file": "/usr/local/wamedia/shared/b1cf38-8734-4ad3-b4a1-ef0c10d0d683",
  "id": "b1c68f38-8734-4ad3-b4a1-ef0c10d683",
  "mime_type": "image/jpeg",
  "sha256": "29ed500fa64eb55fc19dc4124acb300e5dcc54a0f822a301ae99944db"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|caption|string|false|none|Optional. Only present if specified.|
|file|string|false|none|**Deprecated.** Absolute filename and location on media volume. This parameter is deprecated.|
|id|string|false|none|ID of the media. Can be used to delete the media if stored locally on the client.|
|link|string|false|none|none|
|mime_type|string|false|none|Mime type of media|
|sha256|string|false|none|Checksum|

<h2 id="tocS_Webhook-Location">Webhook-Location</h2>
<!-- backwards compatibility -->
<a id="schemawebhook-location"></a>
<a id="schema_Webhook-Location"></a>
<a id="tocSwebhook-location"></a>
<a id="tocswebhook-location"></a>

```json
{
  "address": "Main Street Beach, Santa Cruz, CA",
  "latitude": 38.9806263495,
  "longitude": -131.9428612257,
  "name": "Main Street Beach",
  "url": "https://foursquare.com/v/4d7031d35b5df7744"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|address|string|false|none|Address of the location|
|latitude|number(double)|false|none|Latitude of location being sent|
|longitude|number(double)|false|none|Longitude of location being sent|
|name|string|false|none|Name of the location|
|url|string|false|none|URL for the website where the user downloaded the location information|

<h2 id="tocS_Webhook-Message">Webhook-Message</h2>
<!-- backwards compatibility -->
<a id="schemawebhook-message"></a>
<a id="schema_Webhook-Message"></a>
<a id="tocSwebhook-message"></a>
<a id="tocswebhook-message"></a>

```json
{
  "from": "16315551234",
  "id": "ABGGFlA5FpafAgo6tHcNmNjXmuSf",
  "text": {
    "body": "Hello this is an answer"
  },
  "timestamp": "1518694235",
  "type": "text"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|audio|[Webhook-Audio](#schemawebhook-audio)|false|none|none|
|contacts|[[Contact](#schemacontact)]|false|none|none|
|context|[Message-Context](#schemamessage-context)|false|none|none|
|document|[Webhook-Document](#schemawebhook-document)|false|none|none|
|errors|[[Error](#schemaerror)]|false|none|none|
|from|string|false|none|WhatsApp ID of the sender|
|group_id|string|false|none|Optional. WhatsApp group ID|
|id|string|false|none|Message ID|
|image|[Webhook-Image](#schemawebhook-image)|false|none|none|
|location|[Webhook-Location](#schemawebhook-location)|false|none|none|
|system|[Webhook-System](#schemawebhook-system)|false|none|none|
|text|[Webhook-Text](#schemawebhook-text)|false|none|none|
|timestamp|string|false|none|Message received timestamp|
|type|[Message-Type](#schemamessage-type)|false|none|type of the message|
|video|[Webhook-Video](#schemawebhook-video)|false|none|none|
|voice|[Webhook-Voice](#schemawebhook-voice)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|audio|
|type|contacts|
|type|document|
|type|hsm|
|type|image|
|type|location|
|type|text|
|type|video|
|type|voice|
|type|unknown|

<h2 id="tocS_Webhook-Status">Webhook-Status</h2>
<!-- backwards compatibility -->
<a id="schemawebhook-status"></a>
<a id="schema_Webhook-Status"></a>
<a id="tocSwebhook-status"></a>
<a id="tocswebhook-status"></a>

```json
{
  "errors": [
    {
      "code": 470,
      "title": "Failed to send message because you are outside the support window for freeform messages to this user. Please use a valid HSM notification or reconsider."
    }
  ],
  "id": "gBGGEgZHMlEfAgkM1RBkhDRr7t8",
  "recipient_id": "12064001000",
  "status": "failed",
  "timestamp": "1533332775"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errors|[[Error](#schemaerror)]|false|none|none|
|id|string|false|none|Message ID|
|recipient_id|string|false|none|WhatsApp ID of recipient|
|status|string|false|none|Status of message|
|timestamp|string|false|none|Timestamp of the status message|

#### Enumerated Values

|Property|Value|
|---|---|
|status|sent|
|status|delivered|
|status|read|
|status|failed|
|status|deleted|

<h2 id="tocS_Webhook-System">Webhook-System</h2>
<!-- backwards compatibility -->
<a id="schemawebhook-system"></a>
<a id="schema_Webhook-System"></a>
<a id="tocSwebhook-system"></a>
<a id="tocswebhook-system"></a>

```json
{
  "body": "+1 (650) 387-5246 added +1 (650) 644-8470",
  "group_id": "16315558032-1530825318",
  "operator": "16503875246",
  "type": "group_user_joined",
  "users": [
    "16506448470"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|body|string|false|none|none|
|type|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|group_created|
|type|group_user_promoted|
|type|group_user_demoted|
|type|group_user_joined|
|type|group_user_left|
|type|group_subject_changed|
|type|group_description_changed|
|type|group_icon_changed|
|type|group_icon_deleted|
|type|group_invite_link_revoked|
|type|user_identity_changed|
|type|group_user_changed_number|
|type|group_error_fetching_photo|
|type|group_error_adding_users|
|type|group_error_adding_user|
|type|group_error_full_adding_users|
|type|group_error_removing_user|
|type|broadcast_list_created|
|type|group_ended|
|type|group_error_blocked_adding_user|

<h2 id="tocS_Webhook-Text">Webhook-Text</h2>
<!-- backwards compatibility -->
<a id="schemawebhook-text"></a>
<a id="schema_Webhook-Text"></a>
<a id="tocSwebhook-text"></a>
<a id="tocswebhook-text"></a>

```json
{
  "body": "text-message-content"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|body|string|false|none|Message text|

<h2 id="tocS_Webhook-Video">Webhook-Video</h2>
<!-- backwards compatibility -->
<a id="schemawebhook-video"></a>
<a id="schema_Webhook-Video"></a>
<a id="tocSwebhook-video"></a>
<a id="tocswebhook-video"></a>

```json
{
  "file": "absolute-filepath-on-coreapp",
  "id": "media-id",
  "link": "link-to-video-file",
  "mime_type": "media-mime-type",
  "sha256": "checksum"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|caption|string|false|none|Optional. Only present if specified.|
|file|string|false|none|**Deprecated.** Absolute filename and location on media volume. This parameter is deprecated.|
|id|string|false|none|ID of the media. Can be used to delete the media if stored locally on the client.|
|link|string|false|none|none|
|mime_type|string|false|none|Mime type of media|
|sha256|string|false|none|Checksum|

<h2 id="tocS_Webhook-Voice">Webhook-Voice</h2>
<!-- backwards compatibility -->
<a id="schemawebhook-voice"></a>
<a id="schema_Webhook-Voice"></a>
<a id="tocSwebhook-voice"></a>
<a id="tocswebhook-voice"></a>

```json
{
  "file": "/usr/local/wamedia/shared/463e/b7ec/ff4e4d9bb1101879cbd411b2",
  "id": "463eb7ec-ff4e-4d9b-b110-1879cbd411b2",
  "mime_type": "audio/ogg; codecs=opus",
  "sha256": "fa9e1807d936b7cebe63654ea3a7912b1fa9479220258d823590521ef53b0710"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|caption|string|false|none|Optional. Only present if specified.|
|file|string|false|none|**Deprecated.** Absolute filename and location on media volume. This parameter is deprecated.|
|id|string|false|none|ID of the media. Can be used to delete the media if stored locally on the client.|
|link|string|false|none|none|
|mime_type|string|false|none|Mime type of media|
|sha256|string|false|none|Checksum|

<h2 id="tocS_Webhooks">Webhooks</h2>
<!-- backwards compatibility -->
<a id="schemawebhooks"></a>
<a id="schema_Webhooks"></a>
<a id="tocSwebhooks"></a>
<a id="tocswebhooks"></a>

```json
{
  "max_concurrent_requests": 12,
  "url": "<Webhook URL, https>"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|max_concurrent_requests|integer(int32)|false|none|Configures the maximum number of inflight callback requests that are sent out. Can be set to 6 (default), 12, 18, or 24.|
|url|string|false|none|Inbound and outbound notifications are routed to this URL. A HTTPS-based endpoint is required; HTTP will not work.|

#### Enumerated Values

|Property|Value|
|---|---|
|max_concurrent_requests|6|
|max_concurrent_requests|12|
|max_concurrent_requests|18|
|max_concurrent_requests|24|
