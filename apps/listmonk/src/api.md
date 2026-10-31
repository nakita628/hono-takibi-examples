<h1 id="listmonk">Listmonk v1.0.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

The API collection for listmonk

Base URLs:

* <a href="http://localhost:9000/api">http://localhost:9000/api</a> - Listmonk Developement Server

License: <a href="https://github.com/knadh/listmonk/blob/master/LICENSE">AGPL-3.0 license</a>

<h1 id="listmonk-miscellaneous">Miscellaneous</h1>

Misc API

## getHealthCheck

<a id="opIdgetHealthCheck"></a>

> Code samples

```bash
curl http://localhost:9000/api/health \
  -H 'Accept: application/json'
```

`GET /health`

healthcheck endpoint

> Example responses

> 200 Response

```json
{
  "data": true
}
```

<h3 id="gethealthcheck-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="gethealthcheck-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|boolean|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## getServerConfig

<a id="opIdgetServerConfig"></a>

> Code samples

```bash
curl http://localhost:9000/api/config \
  -H 'Accept: application/json'
```

`GET /config`

returns general server config.

> Example responses

> 200 Response

```json
{
  "data": {
    "data": {
      "messengers": [
        "string"
      ],
      "langs": [
        {
          "code": "string",
          "name": "string"
        }
      ],
      "lang": "string",
      "update": "string",
      "needs_restart": true,
      "version": "string"
    }
  }
}
```

<h3 id="getserverconfig-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A server config object|Inline|

<h3 id="getserverconfig-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[ServerConfig](#schemaserverconfig)|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## getI18nLang

<a id="opIdgetI18nLang"></a>

> Code samples

```bash
curl http://localhost:9000/api/lang/string \
  -H 'Accept: application/json'
```

`GET /lang/{lang}`

returns the JSON language pack given the language code

<h3 id="geti18nlang-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|lang|path|string|true|JSON language pack required|

> Example responses

> 200 Response

```json
{
  "data": {
    "data": {
      "_.code": "string",
      "_.name": "string",
      "property1": "string",
      "property2": "string"
    }
  }
}
```

<h3 id="geti18nlang-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|requested language pack|Inline|

<h3 id="geti18nlang-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[LanguagePack](#schemalanguagepack)|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## getDashboardCharts

<a id="opIdgetDashboardCharts"></a>

> Code samples

```bash
curl http://localhost:9000/api/dashboard/charts \
  -H 'Accept: application/json'
```

`GET /dashboard/charts`

returns chart data points to render on the dashboard.

> Example responses

> 200 Response

```json
{
  "data": {
    "link_clicks": [
      {
        "count": 0,
        "date": "string"
      }
    ],
    "campaign_views": [
      {
        "count": 0,
        "date": "string"
      }
    ]
  }
}
```

<h3 id="getdashboardcharts-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|chart data points|Inline|

<h3 id="getdashboardcharts-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[DashboardChart](#schemadashboardchart)|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## getDashboardCounts

<a id="opIdgetDashboardCounts"></a>

> Code samples

```bash
curl http://localhost:9000/api/dashboard/counts \
  -H 'Accept: application/json'
```

`GET /dashboard/counts`

returns stats counts to show on the dashboard

> Example responses

> 200 Response

```json
{
  "data": {
    "data": {
      "subscribers": {
        "total": 0,
        "blocklisted": {},
        "orphans": 0
      },
      "lists": {
        "total": 0,
        "private": 0,
        "public": 0,
        "optin_single": 0,
        "optin_double": 0
      },
      "campaigns": {
        "total": 0,
        "by_status": {
          "draft": 0
        }
      },
      "messages": 0
    }
  }
}
```

<h3 id="getdashboardcounts-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|stat counts|Inline|

<h3 id="getdashboardcounts-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[DashboardCount](#schemadashboardcount)|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="listmonk-settings">Settings</h1>

Settings API

## getSettings

<a id="opIdgetSettings"></a>

> Code samples

```bash
curl http://localhost:9000/api/settings \
  -H 'Accept: application/json'
```

`GET /settings`

returns settings from DB

> Example responses

> 200 Response

```json
{
  "data": {
    "app.site_name": "string",
    "app.root_url": "string",
    "app.logo_url": "string",
    "app.favicon_url": "string",
    "app.from_email": [
      "string"
    ],
    "app.notify_emails": [
      "string"
    ],
    "app.enable_public_subscription_page": true,
    "app.enable_public_archive": true,
    "app.send_optin_confirmation": true,
    "app.check_updates": true,
    "app.lang": "string",
    "app.batch_size": 0,
    "app.concurrency": 0,
    "app.max_send_errors": 0,
    "app.message_rate": 0,
    "app.message_sliding_window": true,
    "app.message_sliding_window_duration": "string",
    "app.message_sliding_window_rate": 0,
    "privacy.individual_tracking": true,
    "privacy.unsubscribe_header": true,
    "privacy.allow_blocklist": true,
    "privacy.allow_preferences": true,
    "privacy.allow_export": true,
    "privacy.allow_wipe": true,
    "privacy.exportable": [
      "string"
    ],
    "privacy.domain_blocklist": [
      {}
    ],
    "upload.provider": "string",
    "upload.filesystem.upload_path": "string",
    "upload.filesystem.upload_uri": "string",
    "upload.s3.url": "string",
    "upload.s3.public_url": "string",
    "upload.s3.aws_access_key_id": "string",
    "upload.s3.aws_default_region": "string",
    "upload.s3.bucket": "string",
    "upload.s3.bucket_domain": "string",
    "upload.s3.bucket_path": "string",
    "upload.s3.bucket_type": "string",
    "upload.s3.expiry": "string",
    "smtp": [
      {
        "uuid": "string",
        "enabled": true,
        "host": "string",
        "hello_hostname": "string",
        "port": 0,
        "auth_protocol": "string",
        "username": "string",
        "email_headers": [
          {}
        ],
        "max_conns": 0,
        "max_msg_retries": 0,
        "idle_timeout": "string",
        "wait_timeout": "string",
        "tls_type": "string",
        "tls_skip_verify": true
      }
    ],
    "messengers": [
      {}
    ],
    "bounce.enabled": true,
    "bounce.webhooks_enabled": true,
    "bounce.count": 0,
    "bounce.action": "string",
    "bounce.ses_enabled": true,
    "bounce.azure.enabled": true,
    "bounce.azure.shared_secret": "string",
    "bounce.azure.shared_secret_header": "string",
    "bounce.sendgrid_enabled": true,
    "bounce.sendgrid_key": "string",
    "bounce.forwardemail_enabled": true,
    "bounce.forwardemail_key": "string",
    "bounce.postmark_enabled": true,
    "bounce.postmark_username": "string",
    "bounce.postmark_password": "string",
    "bounce.mailboxes": [
      {
        "uuid": "string",
        "enabled": true,
        "type": "string",
        "host": "string",
        "port": 0,
        "auth_protocol": "string",
        "return_path": "string",
        "username": "string",
        "tls_enabled": true,
        "tls_skip_verify": true,
        "scan_interval": "string"
      }
    ],
    "appearance.admin.custom_css": "string",
    "appearance.admin.custom_js": "string",
    "appearance.public.custom_css": "string",
    "appearance.public.custom_js": "string"
  }
}
```

<h3 id="getsettings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|settings object|Inline|

<h3 id="getsettings-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[Settings](#schemasettings)|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## updateSettings

<a id="opIdupdateSettings"></a>

> Code samples

```bash
curl http://localhost:9000/api/settings \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "app.site_name": "string",
    "app.root_url": "string",
    "app.logo_url": "string",
    "app.favicon_url": "string",
    "app.from_email": [
      "string"
    ],
    "app.notify_emails": [
      "string"
    ],
    "app.enable_public_subscription_page": true,
    "app.enable_public_archive": true,
    "app.send_optin_confirmation": true,
    "app.check_updates": true,
    "app.lang": "string",
    "app.batch_size": 0,
    "app.concurrency": 0,
    "app.max_send_errors": 0,
    "app.message_rate": 0,
    "app.message_sliding_window": true,
    "app.message_sliding_window_duration": "string",
    "app.message_sliding_window_rate": 0,
    "privacy.individual_tracking": true,
    "privacy.unsubscribe_header": true,
    "privacy.allow_blocklist": true,
    "privacy.allow_preferences": true,
    "privacy.allow_export": true,
    "privacy.allow_wipe": true,
    "privacy.exportable": [
      "string"
    ],
    "privacy.domain_blocklist": [
      {}
    ],
    "upload.provider": "string",
    "upload.filesystem.upload_path": "string",
    "upload.filesystem.upload_uri": "string",
    "upload.s3.url": "string",
    "upload.s3.public_url": "string",
    "upload.s3.aws_access_key_id": "string",
    "upload.s3.aws_default_region": "string",
    "upload.s3.bucket": "string",
    "upload.s3.bucket_domain": "string",
    "upload.s3.bucket_path": "string",
    "upload.s3.bucket_type": "string",
    "upload.s3.expiry": "string",
    "smtp": [
      {
        "uuid": "string",
        "enabled": true,
        "host": "string",
        "hello_hostname": "string",
        "port": 0,
        "auth_protocol": "string",
        "username": "string",
        "email_headers": [
          {}
        ],
        "max_conns": 0,
        "max_msg_retries": 0,
        "idle_timeout": "string",
        "wait_timeout": "string",
        "tls_type": "string",
        "tls_skip_verify": true
      }
    ],
    "messengers": [
      {}
    ],
    "bounce.enabled": true,
    "bounce.webhooks_enabled": true,
    "bounce.count": 0,
    "bounce.action": "string",
    "bounce.ses_enabled": true,
    "bounce.azure.enabled": true,
    "bounce.azure.shared_secret": "string",
    "bounce.azure.shared_secret_header": "string",
    "bounce.sendgrid_enabled": true,
    "bounce.sendgrid_key": "string",
    "bounce.forwardemail_enabled": true,
    "bounce.forwardemail_key": "string",
    "bounce.postmark_enabled": true,
    "bounce.postmark_username": "string",
    "bounce.postmark_password": "string",
    "bounce.mailboxes": [
      {
        "uuid": "string",
        "enabled": true,
        "type": "string",
        "host": "string",
        "port": 0,
        "auth_protocol": "string",
        "return_path": "string",
        "username": "string",
        "tls_enabled": true,
        "tls_skip_verify": true,
        "scan_interval": "string"
      }
    ],
    "appearance.admin.custom_css": "string",
    "appearance.admin.custom_js": "string",
    "appearance.public.custom_css": "string",
    "appearance.public.custom_js": "string"
  }'
```

`PUT /settings`

returns updated settings from the DB.

> Body parameter

```json
{
  "app.site_name": "string",
  "app.root_url": "string",
  "app.logo_url": "string",
  "app.favicon_url": "string",
  "app.from_email": [
    "string"
  ],
  "app.notify_emails": [
    "string"
  ],
  "app.enable_public_subscription_page": true,
  "app.enable_public_archive": true,
  "app.send_optin_confirmation": true,
  "app.check_updates": true,
  "app.lang": "string",
  "app.batch_size": 0,
  "app.concurrency": 0,
  "app.max_send_errors": 0,
  "app.message_rate": 0,
  "app.message_sliding_window": true,
  "app.message_sliding_window_duration": "string",
  "app.message_sliding_window_rate": 0,
  "privacy.individual_tracking": true,
  "privacy.unsubscribe_header": true,
  "privacy.allow_blocklist": true,
  "privacy.allow_preferences": true,
  "privacy.allow_export": true,
  "privacy.allow_wipe": true,
  "privacy.exportable": [
    "string"
  ],
  "privacy.domain_blocklist": [
    {}
  ],
  "upload.provider": "string",
  "upload.filesystem.upload_path": "string",
  "upload.filesystem.upload_uri": "string",
  "upload.s3.url": "string",
  "upload.s3.public_url": "string",
  "upload.s3.aws_access_key_id": "string",
  "upload.s3.aws_default_region": "string",
  "upload.s3.bucket": "string",
  "upload.s3.bucket_domain": "string",
  "upload.s3.bucket_path": "string",
  "upload.s3.bucket_type": "string",
  "upload.s3.expiry": "string",
  "smtp": [
    {
      "uuid": "string",
      "enabled": true,
      "host": "string",
      "hello_hostname": "string",
      "port": 0,
      "auth_protocol": "string",
      "username": "string",
      "email_headers": [
        {}
      ],
      "max_conns": 0,
      "max_msg_retries": 0,
      "idle_timeout": "string",
      "wait_timeout": "string",
      "tls_type": "string",
      "tls_skip_verify": true
    }
  ],
  "messengers": [
    {}
  ],
  "bounce.enabled": true,
  "bounce.webhooks_enabled": true,
  "bounce.count": 0,
  "bounce.action": "string",
  "bounce.ses_enabled": true,
  "bounce.azure.enabled": true,
  "bounce.azure.shared_secret": "string",
  "bounce.azure.shared_secret_header": "string",
  "bounce.sendgrid_enabled": true,
  "bounce.sendgrid_key": "string",
  "bounce.forwardemail_enabled": true,
  "bounce.forwardemail_key": "string",
  "bounce.postmark_enabled": true,
  "bounce.postmark_username": "string",
  "bounce.postmark_password": "string",
  "bounce.mailboxes": [
    {
      "uuid": "string",
      "enabled": true,
      "type": "string",
      "host": "string",
      "port": 0,
      "auth_protocol": "string",
      "return_path": "string",
      "username": "string",
      "tls_enabled": true,
      "tls_skip_verify": true,
      "scan_interval": "string"
    }
  ],
  "appearance.admin.custom_css": "string",
  "appearance.admin.custom_js": "string",
  "appearance.public.custom_css": "string",
  "appearance.public.custom_js": "string"
}
```

<h3 id="updatesettings-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[Settings](#schemasettings)|false|updated settings field values|
|» app.site_name|body|string|false|none|
|» app.root_url|body|string|false|none|
|» app.logo_url|body|string|false|none|
|» app.favicon_url|body|string|false|none|
|» app.from_email|body|[string]|false|Sender addresses. The first must be a literal email address and is the default for campaigns and system emails.|
|» app.notify_emails|body|[string]|false|none|
|» app.enable_public_subscription_page|body|boolean|false|none|
|» app.enable_public_archive|body|boolean|false|none|
|» app.send_optin_confirmation|body|boolean|false|none|
|» app.check_updates|body|boolean|false|none|
|» app.lang|body|string|false|none|
|» app.batch_size|body|integer|false|none|
|» app.concurrency|body|integer|false|none|
|» app.max_send_errors|body|integer|false|none|
|» app.message_rate|body|integer|false|none|
|» app.message_sliding_window|body|boolean|false|none|
|» app.message_sliding_window_duration|body|string|false|none|
|» app.message_sliding_window_rate|body|integer|false|none|
|» privacy.individual_tracking|body|boolean|false|none|
|» privacy.unsubscribe_header|body|boolean|false|none|
|» privacy.allow_blocklist|body|boolean|false|none|
|» privacy.allow_preferences|body|boolean|false|none|
|» privacy.allow_export|body|boolean|false|none|
|» privacy.allow_wipe|body|boolean|false|none|
|» privacy.exportable|body|[string]|false|none|
|» privacy.domain_blocklist|body|[object]|false|none|
|» upload.provider|body|string|false|none|
|» upload.filesystem.upload_path|body|string|false|none|
|» upload.filesystem.upload_uri|body|string|false|none|
|» upload.s3.url|body|string|false|none|
|» upload.s3.public_url|body|string|false|none|
|» upload.s3.aws_access_key_id|body|string|false|none|
|» upload.s3.aws_default_region|body|string|false|none|
|» upload.s3.bucket|body|string|false|none|
|» upload.s3.bucket_domain|body|string|false|none|
|» upload.s3.bucket_path|body|string|false|none|
|» upload.s3.bucket_type|body|string|false|none|
|» upload.s3.expiry|body|string|false|none|
|» smtp|body|[[SMTPSettings](#schemasmtpsettings)]|false|none|
|» messengers|body|[object]|false|none|
|» bounce.enabled|body|boolean|false|none|
|» bounce.webhooks_enabled|body|boolean|false|none|
|» bounce.count|body|integer|false|none|
|» bounce.action|body|string|false|none|
|» bounce.ses_enabled|body|boolean|false|none|
|» bounce.azure.enabled|body|boolean|false|none|
|» bounce.azure.shared_secret|body|string|false|none|
|» bounce.azure.shared_secret_header|body|string|false|none|
|» bounce.sendgrid_enabled|body|boolean|false|none|
|» bounce.sendgrid_key|body|string|false|none|
|» bounce.forwardemail_enabled|body|boolean|false|none|
|» bounce.forwardemail_key|body|string|false|none|
|» bounce.postmark_enabled|body|boolean|false|none|
|» bounce.postmark_username|body|string|false|none|
|» bounce.postmark_password|body|string|false|none|
|» bounce.mailboxes|body|[[MailBoxBounces](#schemamailboxbounces)]|false|none|
|» appearance.admin.custom_css|body|string|false|none|
|» appearance.admin.custom_js|body|string|false|none|
|» appearance.public.custom_css|body|string|false|none|
|» appearance.public.custom_js|body|string|false|none|

> Example responses

> 200 Response

```json
{
  "data": true
}
```

<h3 id="updatesettings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|updated settings object|Inline|

<h3 id="updatesettings-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|boolean|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## testSMTPSettings

<a id="opIdtestSMTPSettings"></a>

> Code samples

```bash
curl http://localhost:9000/api/settings/smtp/test \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "uuid": "string",
    "enabled": true,
    "host": "string",
    "hello_hostname": "string",
    "port": 0,
    "auth_protocol": "string",
    "username": "string",
    "email_headers": [
      {}
    ],
    "max_conns": 0,
    "max_msg_retries": 0,
    "idle_timeout": "string",
    "wait_timeout": "string",
    "tls_type": "string",
    "tls_skip_verify": true,
    "strEmailHeaders": "string",
    "password": "string",
    "email": "string"
  }'
```

`POST /settings/smtp/test`

test smtp settings

> Body parameter

```json
{
  "uuid": "string",
  "enabled": true,
  "host": "string",
  "hello_hostname": "string",
  "port": 0,
  "auth_protocol": "string",
  "username": "string",
  "email_headers": [
    {}
  ],
  "max_conns": 0,
  "max_msg_retries": 0,
  "idle_timeout": "string",
  "wait_timeout": "string",
  "tls_type": "string",
  "tls_skip_verify": true,
  "strEmailHeaders": "string",
  "password": "string",
  "email": "string"
}
```

<h3 id="testsmtpsettings-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[SMTPTest](#schemasmtptest)|false|updated SMTP settings field values|
|» uuid|body|string|false|none|
|» enabled|body|boolean|false|none|
|» host|body|string|false|none|
|» hello_hostname|body|string|false|none|
|» port|body|integer|false|none|
|» auth_protocol|body|string|false|none|
|» username|body|string|false|none|
|» email_headers|body|[object]|false|none|
|» max_conns|body|integer|false|none|
|» max_msg_retries|body|integer|false|none|
|» idle_timeout|body|string|false|none|
|» wait_timeout|body|string|false|none|
|» tls_type|body|string|false|none|
|» tls_skip_verify|body|boolean|false|none|
|» strEmailHeaders|body|string|false|none|
|» password|body|string|false|none|
|» email|body|string|false|none|

> Example responses

> 200 Response

```json
{
  "data": true
}
```

<h3 id="testsmtpsettings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|updated SMTP test settings|Inline|

<h3 id="testsmtpsettings-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|boolean|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="listmonk-admin">Admin</h1>

Admin API

## reloadApp

<a id="opIdreloadApp"></a>

> Code samples

```bash
curl http://localhost:9000/api/admin/reload \
  -X POST \
  -H 'Accept: application/json'
```

`POST /admin/reload`

restarts the app

> Example responses

> 200 Response

```json
{
  "data": true
}
```

<h3 id="reloadapp-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="reloadapp-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|boolean|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="listmonk-logs">Logs</h1>

Logs API

## getLogs

<a id="opIdgetLogs"></a>

> Code samples

```bash
curl http://localhost:9000/api/logs \
  -H 'Accept: application/json'
```

`GET /logs`

returns the log entries stored in the log buffer

> Example responses

> 200 Response

```json
{
  "data": [
    "string"
  ]
}
```

<h3 id="getlogs-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|stored log entries|Inline|

<h3 id="getlogs-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[string]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="listmonk-subscribers">Subscribers</h1>

Subscribers API

<a href="https://listmonk.app/docs/apis/subscribers/">External documentation</a>

## getSubscribers

<a id="opIdgetSubscribers"></a>

> Code samples

```bash
curl http://localhost:9000/api/subscribers \
  -H 'Accept: application/json'
```

`GET /subscribers`

returns all subscribers.

<h3 id="getsubscribers-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|page|query|integer(int32)|false|Page number for paginated results.|
|per_page|query|integer \| string|false|Number of items per page. Use an integer for specific page size or 'all' to retrieve all results|
|query|query|string|false|query subscribers with an SQL expression.|
|order_by|query|string|false|Result sorting field. Options are name, status, created_at, updated_at|
|order|query|string|false|ASC\|DESC Sort by ascending or descending order.|
|subscription_status|query|string|false|Subscription status to filter by if there are one or more list_ids.|
|list_id|query|[integer]|false|ID of lists to filter by. Repeat in the query for multiple values.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|order_by|name|
|order_by|status|
|order_by|created_at|
|order_by|updated_at|
|order|ASC|
|order|DESC|

> Example responses

> 200 Response

```json
{
  "data": {
    "results": [
      {
        "id": 0,
        "created_at": "string",
        "updated_at": "string",
        "uuid": "string",
        "email": "string",
        "name": "string",
        "attribs": {},
        "status": "string",
        "lists": [
          {
            "subscription_status": "string",
            "id": 0,
            "uuid": "string",
            "name": "string",
            "type": "string",
            "tags": [
              "string"
            ],
            "created_at": "string",
            "updated_at": "string"
          }
        ]
      }
    ],
    "query": "string",
    "total": 0,
    "per_page": 0,
    "page": 0
  }
}
```

<h3 id="getsubscribers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|subscribers list|Inline|

<h3 id="getsubscribers-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|object|false|none|none|
|» results|[[Subscriber](#schemasubscriber)]|false|none|none|
|» query|string|false|none|none|
|» total|integer|false|none|none|
|» per_page|integer|false|none|none|
|» page|integer|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## createSubscriber

<a id="opIdcreateSubscriber"></a>

> Code samples

```bash
curl http://localhost:9000/api/subscribers \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "email": "string",
    "name": "string",
    "status": "string",
    "lists": [
      0
    ],
    "list_uuids": [
      "string"
    ],
    "preconfirm_subscriptions": true,
    "attribs": {}
  }'
```

`POST /subscribers`

handles creation of new subscriber

> Body parameter

```json
{
  "email": "string",
  "name": "string",
  "status": "string",
  "lists": [
    0
  ],
  "list_uuids": [
    "string"
  ],
  "preconfirm_subscriptions": true,
  "attribs": {}
}
```

<h3 id="createsubscriber-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[NewSubscriber](#schemanewsubscriber)|false|new subscriber info|
|» email|body|string|false|none|
|» name|body|string|false|none|
|» status|body|string|false|none|
|» lists|body|[integer]|false|none|
|» list_uuids|body|[string]|false|none|
|» preconfirm_subscriptions|body|boolean|false|none|
|» attribs|body|object|false|none|

> Example responses

> 200 Response

```json
{
  "data": {
    "id": 0,
    "created_at": "string",
    "updated_at": "string",
    "uuid": "string",
    "email": "string",
    "name": "string",
    "attribs": {},
    "status": "string",
    "lists": [
      {
        "subscription_status": "string",
        "id": 0,
        "uuid": "string",
        "name": "string",
        "type": "string",
        "tags": [
          "string"
        ],
        "created_at": "string",
        "updated_at": "string"
      }
    ]
  }
}
```

<h3 id="createsubscriber-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|subscriber object|Inline|

<h3 id="createsubscriber-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[Subscriber](#schemasubscriber)|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## deleteSubscriberByList

<a id="opIddeleteSubscriberByList"></a>

> Code samples

```bash
curl 'http://localhost:9000/api/subscribers?id=string' \
  -X DELETE \
  -H 'Accept: application/json'
```

`DELETE /subscribers`

handles subscribers deletion

<h3 id="deletesubscriberbylist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|query|string|true|subscriber id/s to be deleted|

> Example responses

> 200 Response

```json
{
  "data": true
}
```

<h3 id="deletesubscriberbylist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="deletesubscriberbylist-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|boolean|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## getSubscriberById

<a id="opIdgetSubscriberById"></a>

> Code samples

```bash
curl http://localhost:9000/api/subscribers/0 \
  -H 'Accept: application/json'
```

`GET /subscribers/{id}`

handles the retrieval of a single subscriber by ID.

<h3 id="getsubscriberbyid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|The id value of the subscriber you want to get.|

> Example responses

> 200 Response

```json
{
  "data": {
    "id": 0,
    "created_at": "string",
    "updated_at": "string",
    "uuid": "string",
    "email": "string",
    "name": "string",
    "attribs": {},
    "status": "string",
    "lists": [
      {
        "subscription_status": "string",
        "id": 0,
        "uuid": "string",
        "name": "string",
        "type": "string",
        "tags": [
          "string"
        ],
        "created_at": "string",
        "updated_at": "string"
      }
    ]
  }
}
```

<h3 id="getsubscriberbyid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|gets a single subscriber.|Inline|

<h3 id="getsubscriberbyid-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[Subscriber](#schemasubscriber)|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## updateSubscriberById

<a id="opIdupdateSubscriberById"></a>

> Code samples

```bash
curl http://localhost:9000/api/subscribers/0 \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "email": "string",
    "name": "string",
    "status": "string",
    "lists": [
      0
    ],
    "list_uuids": [
      "string"
    ],
    "preconfirm_subscriptions": true,
    "attribs": {}
  }'
```

`PUT /subscribers/{id}`

modify subscriber data

> Body parameter

```json
{
  "email": "string",
  "name": "string",
  "status": "string",
  "lists": [
    0
  ],
  "list_uuids": [
    "string"
  ],
  "preconfirm_subscriptions": true,
  "attribs": {}
}
```

<h3 id="updatesubscriberbyid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|The id of subscriber to update|
|body|body|[UpdateSubscriber](#schemaupdatesubscriber)|false|new subscriber info|
|» email|body|string|false|none|
|» name|body|string|false|none|
|» status|body|string|false|none|
|» lists|body|[integer]|false|none|
|» list_uuids|body|[string]|false|none|
|» preconfirm_subscriptions|body|boolean|false|none|
|» attribs|body|object|false|none|

> Example responses

> 200 Response

```json
{
  "data": {
    "id": 0,
    "created_at": "string",
    "updated_at": "string",
    "uuid": "string",
    "email": "string",
    "name": "string",
    "attribs": {},
    "status": "string",
    "lists": [
      {
        "subscription_status": "string",
        "id": 0,
        "uuid": "string",
        "name": "string",
        "type": "string",
        "tags": [
          "string"
        ],
        "created_at": "string",
        "updated_at": "string"
      }
    ]
  }
}
```

<h3 id="updatesubscriberbyid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|returns updated subscriber.|Inline|

<h3 id="updatesubscriberbyid-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[Subscriber](#schemasubscriber)|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## deleteSubscriberById

<a id="opIddeleteSubscriberById"></a>

> Code samples

```bash
curl http://localhost:9000/api/subscribers/0 \
  -X DELETE \
  -H 'Accept: application/json'
```

`DELETE /subscribers/{id}`

handles subscriber deletion based on id

<h3 id="deletesubscriberbyid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|The id value of the subscriber you want to get.|

> Example responses

> 200 Response

```json
{
  "data": true
}
```

<h3 id="deletesubscriberbyid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="deletesubscriberbyid-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|boolean|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## manageSubscriberLists

<a id="opIdmanageSubscriberLists"></a>

> Code samples

```bash
curl http://localhost:9000/api/subscribers/lists \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "query": "string",
    "ids": [
      0
    ],
    "action": "add",
    "target_list_ids": 0,
    "status": "confirmed"
  }'
```

`PUT /subscribers/lists`

handles bulk addition or removal of subscribers

> Body parameter

```json
{
  "query": "string",
  "ids": [
    0
  ],
  "action": "add",
  "target_list_ids": 0,
  "status": "confirmed"
}
```

<h3 id="managesubscriberlists-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[SubscriberQueryRequest](#schemasubscriberqueryrequest)|false|The list of subscribers details to add or remove|
|» query|body|string|false|none|
|» ids|body|[integer]|false|The ids of the subscribers to be modified.|
|» action|body|string|false|Whether to add, remove, or unsubscribe the users.|
|» target_list_ids|body|integer|false|The ids of the lists to be modified.|
|» status|body|string|false|confirmed, unconfirmed, or unsubscribed status.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» action|add|
|» action|remove|
|» action|unsubscribe|
|» status|confirmed|
|» status|unconfirmed|
|» status|unsubscribed|

> Example responses

> 200 Response

```json
{
  "data": true
}
```

<h3 id="managesubscriberlists-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="managesubscriberlists-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|boolean|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## manageSubscriberListById

<a id="opIdmanageSubscriberListById"></a>

> Code samples

```bash
curl http://localhost:9000/api/subscribers/lists/0 \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "query": "string",
    "ids": [
      0
    ],
    "action": "add",
    "target_list_ids": 0,
    "status": "confirmed"
  }'
```

`PUT /subscribers/lists/{id}`

handles bulk addition or removal of subscribers for a specified list id

> Body parameter

```json
{
  "query": "string",
  "ids": [
    0
  ],
  "action": "add",
  "target_list_ids": 0,
  "status": "confirmed"
}
```

<h3 id="managesubscriberlistbyid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|The id of list you want to update|
|body|body|[SubscriberQueryRequest](#schemasubscriberqueryrequest)|false|The list of subscribers to add or remove|
|» query|body|string|false|none|
|» ids|body|[integer]|false|The ids of the subscribers to be modified.|
|» action|body|string|false|Whether to add, remove, or unsubscribe the users.|
|» target_list_ids|body|integer|false|The ids of the lists to be modified.|
|» status|body|string|false|confirmed, unconfirmed, or unsubscribed status.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» action|add|
|» action|remove|
|» action|unsubscribe|
|» status|confirmed|
|» status|unconfirmed|
|» status|unsubscribed|

> Example responses

> 200 Response

```json
{
  "data": true
}
```

<h3 id="managesubscriberlistbyid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="managesubscriberlistbyid-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|boolean|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## manageBlocklistBySubscriberList

<a id="opIdmanageBlocklistBySubscriberList"></a>

> Code samples

```bash
curl http://localhost:9000/api/subscribers/blocklist \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "query": "string",
    "ids": [
      0
    ],
    "action": "add",
    "target_list_ids": 0,
    "status": "confirmed"
  }'
```

`PUT /subscribers/blocklist`

handles blocklisting of subscriber list

> Body parameter

```json
{
  "query": "string",
  "ids": [
    0
  ],
  "action": "add",
  "target_list_ids": 0,
  "status": "confirmed"
}
```

<h3 id="manageblocklistbysubscriberlist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[SubscriberQueryRequest](#schemasubscriberqueryrequest)|false|The list of subscribers to blocklist|
|» query|body|string|false|none|
|» ids|body|[integer]|false|The ids of the subscribers to be modified.|
|» action|body|string|false|Whether to add, remove, or unsubscribe the users.|
|» target_list_ids|body|integer|false|The ids of the lists to be modified.|
|» status|body|string|false|confirmed, unconfirmed, or unsubscribed status.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» action|add|
|» action|remove|
|» action|unsubscribe|
|» status|confirmed|
|» status|unconfirmed|
|» status|unsubscribed|

> Example responses

> 200 Response

```json
{
  "data": true
}
```

<h3 id="manageblocklistbysubscriberlist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="manageblocklistbysubscriberlist-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|boolean|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## manageBlocklistSubscribersById

<a id="opIdmanageBlocklistSubscribersById"></a>

> Code samples

```bash
curl http://localhost:9000/api/subscribers/0/blocklist \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "query": "string",
    "ids": [
      0
    ],
    "action": "add",
    "target_list_ids": 0,
    "status": "confirmed"
  }'
```

`PUT /subscribers/{id}/blocklist`

handles the blocklisting of one or more subscribers.

> Body parameter

```json
{
  "query": "string",
  "ids": [
    0
  ],
  "action": "add",
  "target_list_ids": 0,
  "status": "confirmed"
}
```

<h3 id="manageblocklistsubscribersbyid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|The id value of the subscriber you want to blocklist.|
|body|body|[SubscriberQueryRequest](#schemasubscriberqueryrequest)|false|The id of subscriber to add or remove|
|» query|body|string|false|none|
|» ids|body|[integer]|false|The ids of the subscribers to be modified.|
|» action|body|string|false|Whether to add, remove, or unsubscribe the users.|
|» target_list_ids|body|integer|false|The ids of the lists to be modified.|
|» status|body|string|false|confirmed, unconfirmed, or unsubscribed status.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» action|add|
|» action|remove|
|» action|unsubscribe|
|» status|confirmed|
|» status|unconfirmed|
|» status|unsubscribed|

> Example responses

> 200 Response

```json
{
  "data": true
}
```

<h3 id="manageblocklistsubscribersbyid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="manageblocklistsubscribersbyid-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|boolean|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## exportSubscriberDataByID

<a id="opIdexportSubscriberDataByID"></a>

> Code samples

```bash
curl http://localhost:9000/api/subscribers/0/export \
  -H 'Accept: application/json'
```

`GET /subscribers/{id}/export`

retrieves a subscriber's profile

<h3 id="exportsubscriberdatabyid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|The id value of subscriber profile you want to export|

> Example responses

> 200 Response

```json
{
  "email": "string",
  "profile": [
    {
      "id": 0,
      "uuid": "string",
      "email": "string",
      "name": "string",
      "attribs": {},
      "status": "string",
      "created_at": "string",
      "updated_at": "string"
    }
  ],
  "subscriptions": [
    {
      "subscription_status": "string",
      "name": "string",
      "type": "string",
      "created_at": "string"
    }
  ],
  "campaign_views": [
    {}
  ],
  "link_clicks": [
    {}
  ]
}
```

<h3 id="exportsubscriberdatabyid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|subscriber data object|[SubscriberData](#schemasubscriberdata)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Cache-Control|string||none|
|200|Content-Disposition|string||none|

<aside class="success">
This operation does not require authentication
</aside>

## getSubscriberBouncesById

<a id="opIdgetSubscriberBouncesById"></a>

> Code samples

```bash
curl http://localhost:9000/api/subscribers/0/bounces \
  -H 'Accept: application/json'
```

`GET /subscribers/{id}/bounces`

retrieves a subscriber's bounce records

<h3 id="getsubscriberbouncesbyid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|subscriber id|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "results": [
        {
          "id": 0,
          "type": "string",
          "source": "string",
          "meta": {},
          "created_at": "string",
          "email": "string",
          "subscriber_uuid": "string",
          "subscriber_id": 0,
          "campaign": {
            "id": 0,
            "name": "string"
          },
          "campaign_uuid": "string",
          "total": 0
        }
      ]
    }
  ]
}
```

<h3 id="getsubscriberbouncesbyid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|list of bounce records of a subscriber|Inline|

<h3 id="getsubscriberbouncesbyid-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[Bounce](#schemabounce)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## deleteSubscriberBouncesById

<a id="opIddeleteSubscriberBouncesById"></a>

> Code samples

```bash
curl http://localhost:9000/api/subscribers/0/bounces \
  -X DELETE \
  -H 'Accept: application/json'
```

`DELETE /subscribers/{id}/bounces`

deletes a subscriber's bounce records

<h3 id="deletesubscriberbouncesbyid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|subscriber id|

> Example responses

> 200 Response

```json
{
  "data": true
}
```

<h3 id="deletesubscriberbouncesbyid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="deletesubscriberbouncesbyid-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|boolean|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## subscriberSendOptinById

<a id="opIdsubscriberSendOptinById"></a>

> Code samples

```bash
curl http://localhost:9000/api/subscribers/0/optin \
  -X POST \
  -H 'Accept: application/json'
```

`POST /subscribers/{id}/optin`

sends an optin confirmation e-mail to a subscriber.

<h3 id="subscribersendoptinbyid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|sends an optin confirmation e-mail to a subscriber|

> Example responses

> 200 Response

```json
{
  "data": true
}
```

<h3 id="subscribersendoptinbyid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="subscribersendoptinbyid-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|boolean|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## deleteSubscriberByQuery

<a id="opIddeleteSubscriberByQuery"></a>

> Code samples

```bash
curl http://localhost:9000/api/subscribers/query/delete \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "query": "string",
    "ids": [
      0
    ],
    "action": "add",
    "target_list_ids": 0,
    "status": "confirmed"
  }'
```

`POST /subscribers/query/delete`

bulk deletes based on an arbitrary SQL expression.

> Body parameter

```json
{
  "query": "string",
  "ids": [
    0
  ],
  "action": "add",
  "target_list_ids": 0,
  "status": "confirmed"
}
```

<h3 id="deletesubscriberbyquery-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[SubscriberQueryRequest](#schemasubscriberqueryrequest)|false|Arbitrary SQL expression.|
|» query|body|string|false|none|
|» ids|body|[integer]|false|The ids of the subscribers to be modified.|
|» action|body|string|false|Whether to add, remove, or unsubscribe the users.|
|» target_list_ids|body|integer|false|The ids of the lists to be modified.|
|» status|body|string|false|confirmed, unconfirmed, or unsubscribed status.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» action|add|
|» action|remove|
|» action|unsubscribe|
|» status|confirmed|
|» status|unconfirmed|
|» status|unsubscribed|

> Example responses

> 200 Response

```json
{
  "data": true
}
```

<h3 id="deletesubscriberbyquery-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="deletesubscriberbyquery-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|boolean|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## blocklistSubscribersQuery

<a id="opIdblocklistSubscribersQuery"></a>

> Code samples

```bash
curl http://localhost:9000/api/subscribers/query/blocklist \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "query": "string",
    "ids": [
      0
    ],
    "action": "add",
    "target_list_ids": 0,
    "status": "confirmed"
  }'
```

`PUT /subscribers/query/blocklist`

bulk blocklists subscribers based on an arbitrary SQL expression.

> Body parameter

```json
{
  "query": "string",
  "ids": [
    0
  ],
  "action": "add",
  "target_list_ids": 0,
  "status": "confirmed"
}
```

<h3 id="blocklistsubscribersquery-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[SubscriberQueryRequest](#schemasubscriberqueryrequest)|false|Arbitrary SQL expression.|
|» query|body|string|false|none|
|» ids|body|[integer]|false|The ids of the subscribers to be modified.|
|» action|body|string|false|Whether to add, remove, or unsubscribe the users.|
|» target_list_ids|body|integer|false|The ids of the lists to be modified.|
|» status|body|string|false|confirmed, unconfirmed, or unsubscribed status.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» action|add|
|» action|remove|
|» action|unsubscribe|
|» status|confirmed|
|» status|unconfirmed|
|» status|unsubscribed|

> Example responses

> 200 Response

```json
{
  "data": true
}
```

<h3 id="blocklistsubscribersquery-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="blocklistsubscribersquery-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|boolean|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## manageSubscriberListsByQuery

<a id="opIdmanageSubscriberListsByQuery"></a>

> Code samples

```bash
curl http://localhost:9000/api/subscribers/query/lists \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "query": "string",
    "ids": [
      0
    ],
    "action": "add",
    "target_list_ids": 0,
    "status": "confirmed"
  }'
```

`PUT /subscribers/query/lists`

bulk adds/removes/unsubscribes subscribers from one or more lists based on an arbitrary SQL expression.

> Body parameter

```json
{
  "query": "string",
  "ids": [
    0
  ],
  "action": "add",
  "target_list_ids": 0,
  "status": "confirmed"
}
```

<h3 id="managesubscriberlistsbyquery-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[SubscriberQueryRequest](#schemasubscriberqueryrequest)|false|Arbitrary SQL expression.|
|» query|body|string|false|none|
|» ids|body|[integer]|false|The ids of the subscribers to be modified.|
|» action|body|string|false|Whether to add, remove, or unsubscribe the users.|
|» target_list_ids|body|integer|false|The ids of the lists to be modified.|
|» status|body|string|false|confirmed, unconfirmed, or unsubscribed status.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» action|add|
|» action|remove|
|» action|unsubscribe|
|» status|confirmed|
|» status|unconfirmed|
|» status|unsubscribed|

> Example responses

> 200 Response

```json
{
  "data": true
}
```

<h3 id="managesubscriberlistsbyquery-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="managesubscriberlistsbyquery-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|boolean|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="listmonk-bounces">Bounces</h1>

Bounce API

## getBounces

<a id="opIdgetBounces"></a>

> Code samples

```bash
curl http://localhost:9000/api/bounces \
  -H 'Accept: application/json'
```

`GET /bounces`

handles retrieval of bounce records.

<h3 id="getbounces-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|campaign_id|query|integer|false|Numeric identifier for retrieving bounce records associated with a specific campaign|
|page|query|integer|false|Page number for paginated results. Start from 1 for the first page|
|per_page|query|integer \| string|false|Number of items per page. Use an integer for specific page size or 'all' to retrieve all results|
|source|query|string|false|Filter bounce records by their source of origin|
|order_by|query|string|false|Specifies the field by which to sort the bounce records. Available options are 'email', 'campaign_name', 'source', and 'created_at'|
|order|query|string|false|Determines the sort order of results. Use 'asc' for ascending or 'desc' for descending order|

#### Enumerated Values

|Parameter|Value|
|---|---|
|order_by|email|
|order_by|campaign_name|
|order_by|source|
|order_by|created_at|
|order|asc|
|order|desc|

> Example responses

> 200 Response

```json
{
  "data": {
    "results": [
      {
        "results": [
          {
            "id": 0,
            "type": "string",
            "source": "string",
            "meta": {},
            "created_at": "string",
            "email": "string",
            "subscriber_uuid": "string",
            "subscriber_id": 0,
            "campaign": {
              "id": 0,
              "name": "string"
            },
            "campaign_uuid": "string",
            "total": 0
          }
        ]
      }
    ],
    "query": "string",
    "total": 0,
    "per_page": 0,
    "page": 0
  }
}
```

<h3 id="getbounces-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|list of bounce records|Inline|

<h3 id="getbounces-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|object|false|none|none|
|» results|[[Bounce](#schemabounce)]|false|none|none|
|» query|string|false|none|none|
|» total|integer|false|none|none|
|» per_page|integer|false|none|none|
|» page|integer|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## deleteBounces

<a id="opIddeleteBounces"></a>

> Code samples

```bash
curl http://localhost:9000/api/bounces \
  -X DELETE \
  -H 'Accept: application/json'
```

`DELETE /bounces`

handles deletion of bounce records.

<h3 id="deletebounces-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|all|query|boolean|false|flag for multiple bounce record deletion|
|id|query|string|false|list of bounce ids to delete|

> Example responses

> 200 Response

```json
{
  "data": true
}
```

<h3 id="deletebounces-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="deletebounces-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|boolean|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## getBounceById

<a id="opIdgetBounceById"></a>

> Code samples

```bash
curl http://localhost:9000/api/bounces/0 \
  -H 'Accept: application/json'
```

`GET /bounces/{id}`

handles retrieval of bounce record by id

<h3 id="getbouncebyid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|The id value of the bounce you want to retreive.|

> Example responses

> 200 Response

```json
{
  "data": {
    "results": [
      {
        "id": 0,
        "type": "string",
        "source": "string",
        "meta": {},
        "created_at": "string",
        "email": "string",
        "subscriber_uuid": "string",
        "subscriber_id": 0,
        "campaign": {
          "id": 0,
          "name": "string"
        },
        "campaign_uuid": "string",
        "total": 0
      }
    ]
  }
}
```

<h3 id="getbouncebyid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|bounce object|Inline|

<h3 id="getbouncebyid-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[Bounce](#schemabounce)|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## deleteBounceById

<a id="opIddeleteBounceById"></a>

> Code samples

```bash
curl http://localhost:9000/api/bounces/0 \
  -X DELETE \
  -H 'Accept: application/json'
```

`DELETE /bounces/{id}`

handles bounce deletion, either a single one (ID in the URI), or a list.

<h3 id="deletebouncebyid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|The id value of the bounce you want to delete.|

> Example responses

> 200 Response

```json
{
  "data": true
}
```

<h3 id="deletebouncebyid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="deletebouncebyid-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|boolean|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="listmonk-lists">Lists</h1>

Subscriber List API

<a href="https://listmonk.app/docs/apis/lists/">External documentation</a>

## getLists

<a id="opIdgetLists"></a>

> Code samples

```bash
curl http://localhost:9000/api/lists \
  -H 'Accept: application/json'
```

`GET /lists`

retrieves lists with additional metadata like subscriber counts. This may be slow.

<h3 id="getlists-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|page|query|integer|false|total number of pages|
|per_page|query|integer \| string|false|number of items per page|
|query|query|string|false|Optional string to search a list by name.|
|order_by|query|string|false|Field to sort results by. name\|status\|created_at\|updated_at|
|order|query|string|false|ASC\|DESC Sort by ascending or descending order.|
|minimal|query|boolean|false|When set to true, returns response without body content|
|tag|query|[string]|false|Tags to filter lists. Repeat in the query for multiple values.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|order_by|name|
|order_by|status|
|order_by|created_at|
|order_by|updated_at|
|order|ASC|
|order|DESC|

> Example responses

> 200 Response

```json
{
  "data": {
    "results": [
      {
        "id": 0,
        "created_at": "string",
        "updated_at": "string",
        "uuid": "string",
        "name": "string",
        "type": "string",
        "optin": "string",
        "tags": [
          "string"
        ],
        "subscriber_count": 0,
        "description": "string"
      }
    ],
    "total": 0,
    "per_page": 0,
    "page": 0
  }
}
```

<h3 id="getlists-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|list of metadata|Inline|

<h3 id="getlists-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|object|false|none|none|
|» results|[[List](#schemalist)]|false|none|none|
|» total|integer|false|none|none|
|» per_page|integer|false|none|none|
|» page|integer|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## createList

<a id="opIdcreateList"></a>

> Code samples

```bash
curl http://localhost:9000/api/lists \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "name": "string",
    "type": "public",
    "optin": "single",
    "tags": [
      "string"
    ],
    "description": "string"
  }'
```

`POST /lists`

handles list creation

> Body parameter

```json
{
  "name": "string",
  "type": "public",
  "optin": "single",
  "tags": [
    "string"
  ],
  "description": "string"
}
```

<h3 id="createlist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[NewList](#schemanewlist)|false|new list info|
|» name|body|string|false|none|
|» type|body|string|false|none|
|» optin|body|string|false|none|
|» tags|body|[string]|false|none|
|» description|body|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» type|public|
|» type|private|
|» optin|single|
|» optin|double|

> Example responses

> 200 Response

```json
{
  "data": {
    "id": 0,
    "created_at": "string",
    "updated_at": "string",
    "uuid": "string",
    "name": "string",
    "type": "string",
    "optin": "string",
    "tags": [
      "string"
    ],
    "subscriber_count": 0,
    "description": "string"
  }
}
```

<h3 id="createlist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|updated list object|Inline|

<h3 id="createlist-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[List](#schemalist)|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## getListById

<a id="opIdgetListById"></a>

> Code samples

```bash
curl http://localhost:9000/api/lists/0 \
  -H 'Accept: application/json'
```

`GET /lists/{list_id}`

retrieves lists with additional metadata like subscriber counts. This may be slow.

<h3 id="getlistbyid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|list_id|path|integer|true|The id value of the list you want to retreive.|

> Example responses

> 200 Response

```json
{
  "data": {
    "id": 0,
    "created_at": "string",
    "updated_at": "string",
    "uuid": "string",
    "name": "string",
    "type": "string",
    "optin": "string",
    "tags": [
      "string"
    ],
    "subscriber_count": 0,
    "description": "string"
  }
}
```

<h3 id="getlistbyid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|list object|Inline|

<h3 id="getlistbyid-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[List](#schemalist)|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## updateListById

<a id="opIdupdateListById"></a>

> Code samples

```bash
curl http://localhost:9000/api/lists/0 \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "id": 0,
    "created_at": "string",
    "updated_at": "string",
    "uuid": "string",
    "name": "string",
    "type": "string",
    "optin": "string",
    "tags": [
      "string"
    ],
    "subscriber_count": 0,
    "description": "string"
  }'
```

`PUT /lists/{list_id}`

handles list modification

> Body parameter

```json
{
  "id": 0,
  "created_at": "string",
  "updated_at": "string",
  "uuid": "string",
  "name": "string",
  "type": "string",
  "optin": "string",
  "tags": [
    "string"
  ],
  "subscriber_count": 0,
  "description": "string"
}
```

<h3 id="updatelistbyid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|list_id|path|integer|true|The id value of the list you want to update|
|body|body|[List](#schemalist)|false|updated list field values|
|» id|body|integer|false|none|
|» created_at|body|string|false|none|
|» updated_at|body|string|false|none|
|» uuid|body|string|false|none|
|» name|body|string|false|none|
|» type|body|string|false|none|
|» optin|body|string|false|none|
|» tags|body|[string]|false|none|
|» subscriber_count|body|integer|false|none|
|» description|body|string|false|none|

> Example responses

> 200 Response

```json
{
  "data": {
    "id": 0,
    "created_at": "string",
    "updated_at": "string",
    "uuid": "string",
    "name": "string",
    "type": "string",
    "optin": "string",
    "tags": [
      "string"
    ],
    "subscriber_count": 0,
    "description": "string"
  }
}
```

<h3 id="updatelistbyid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|updated list object|Inline|

<h3 id="updatelistbyid-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[List](#schemalist)|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## deleteListById

<a id="opIddeleteListById"></a>

> Code samples

```bash
curl http://localhost:9000/api/lists/0 \
  -X DELETE \
  -H 'Accept: application/json'
```

`DELETE /lists/{list_id}`

handles list deletion, either a single one (ID in the URI), or a list.

<h3 id="deletelistbyid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|list_id|path|integer|true|The id value of the lists you want to delete.|

> Example responses

> 200 Response

```json
{
  "data": true
}
```

<h3 id="deletelistbyid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="deletelistbyid-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|boolean|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="listmonk-import">Import</h1>

Import API

<a href="https://listmonk.app/docs/apis/lists/">External documentation</a>

## getImportSubscribers

<a id="opIdgetImportSubscribers"></a>

> Code samples

```bash
curl http://localhost:9000/api/import/subscribers \
  -H 'Accept: application/json'
```

`GET /import/subscribers`

returns import status.

> Example responses

> 200 Response

```json
{
  "data": {
    "data": {
      "name": "string",
      "total": 0,
      "imported": 0,
      "status": "string"
    }
  }
}
```

<h3 id="getimportsubscribers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|import status|Inline|

<h3 id="getimportsubscribers-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[ImportStatus](#schemaimportstatus)|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## importSubscribers

<a id="opIdimportSubscribers"></a>

> Code samples

```bash
curl http://localhost:9000/api/import/subscribers \
  -X POST \
  -H 'Accept: application/json' \
  -F 'params={"mode":"subscribe", "subscription_status":"confirmed", "delim":",", "lists":[1, 2], "overwrite": true}' \
  -F 'file=@/path/to/file'
```

`POST /import/subscribers`

handles the uploading and bulk importing of a ZIP file of one or more CSV files.

> Body parameter

```yaml
params: "{\"mode\":\"subscribe\", \"subscription_status\":\"confirmed\", \"delim\":\",\", \"lists\":[1, 2], \"overwrite\": true}"
file: string
```

<h3 id="importsubscribers-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|uploads and bulk imports of compressed CSV files|
|» params|body|string|false|JSON string containing import parameters for more detail https://listmonk.app/docs/apis/import/#params-json-string|
|» file|body|string(binary)|false|File for upload.|

> Example responses

> 200 Response

```json
{
  "data": {
    "data": {
      "name": "string",
      "total": 0,
      "imported": 0,
      "status": "string"
    }
  }
}
```

<h3 id="importsubscribers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|updated import status|Inline|

<h3 id="importsubscribers-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[ImportStatus](#schemaimportstatus)|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## stopImportSubscribers

<a id="opIdstopImportSubscribers"></a>

> Code samples

```bash
curl http://localhost:9000/api/import/subscribers \
  -X DELETE \
  -H 'Accept: application/json'
```

`DELETE /import/subscribers`

sends a stop signal to the importer.

> Example responses

> 200 Response

```json
{
  "data": {
    "data": {
      "name": "string",
      "total": 0,
      "imported": 0,
      "status": "string"
    }
  }
}
```

<h3 id="stopimportsubscribers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|response|Inline|

<h3 id="stopimportsubscribers-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[ImportStatus](#schemaimportstatus)|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## getImportSubscriberLogs

<a id="opIdgetImportSubscriberLogs"></a>

> Code samples

```bash
curl http://localhost:9000/api/import/subscribers/logs \
  -H 'Accept: application/json'
```

`GET /import/subscribers/logs`

returns import logs from an ongoing import

> Example responses

> 200 Response

```json
{
  "data": "string"
}
```

<h3 id="getimportsubscriberlogs-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|import statistics|Inline|

<h3 id="getimportsubscriberlogs-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="listmonk-campaigns">Campaigns</h1>

Campaign API

<a href="https://listmonk.app/docs/apis/campaigns/">External documentation</a>

## getCampaigns

<a id="opIdgetCampaigns"></a>

> Code samples

```bash
curl http://localhost:9000/api/campaigns \
  -H 'Accept: application/json'
```

`GET /campaigns`

handles retrieval of campaigns

<h3 id="getcampaigns-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|status|query|[string]|false|Filter campaigns by status. Multiple status values can be specified by repeating the parameter|
|no_body|query|boolean|false|When set to true, returns response without body content|
|page|query|integer|false|Page number for paginated results.|
|per_page|query|integer \| string|false|Number of items per page. Use an integer for specific page size or 'all' to retrieve all results|
|tags|query|[string]|false|Filter campaigns by tags. Multiple tags can be specified by repeating the parameter|
|order|query|string|false|Determines the sort order of results. ASC for ascending, DESC for descending order|
|order_by|query|string|false|Specifies the field by which to sort the campaigns. Available options are 'name', 'status', 'created_at', and 'updated_at'|
|query|query|string|false|SQL query expression to filter campaigns by custom criteria|

#### Enumerated Values

|Parameter|Value|
|---|---|
|status|scheduled|
|status|running|
|status|paused|
|status|cancelled|
|order|ASC|
|order|DESC|
|order_by|name|
|order_by|status|
|order_by|created_at|
|order_by|updated_at|

> Example responses

> 200 Response

```json
{
  "data": {
    "results": [
      {
        "id": 0,
        "created_at": "string",
        "updated_at": "string",
        "CampaignID": 0,
        "views": 0,
        "clicks": 0,
        "lists": [
          {
            "id": 0,
            "name": "string"
          }
        ],
        "started_at": "string",
        "to_send": 0,
        "sent": 0,
        "uuid": "string",
        "type": "regular",
        "name": "string",
        "subject": "string",
        "from_email": "string",
        "body": "string",
        "send_at": "string",
        "status": "string",
        "content_type": "richtext",
        "tags": [
          "string"
        ],
        "template_id": 0,
        "messenger": "string"
      }
    ],
    "query": "string",
    "total": 0,
    "per_page": 0,
    "page": 0
  }
}
```

<h3 id="getcampaigns-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|list of campaigns|Inline|

<h3 id="getcampaigns-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|object|false|none|none|
|» results|[[Campaign](#schemacampaign)]|false|none|none|
|» query|string|false|none|none|
|» total|integer|false|none|none|
|» per_page|integer|false|none|none|
|» page|integer|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## createCampaign

<a id="opIdcreateCampaign"></a>

> Code samples

```bash
curl http://localhost:9000/api/campaigns \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "name": "string",
    "subject": "string",
    "lists": [
      0
    ],
    "from_email": "string",
    "content_type": "string",
    "messenger": "string",
    "type": "string",
    "tags": [
      "string"
    ],
    "send_later": true,
    "send_at": {
      "headers": [
        {}
      ],
      "template_id": 0
    }
  }'
```

`POST /campaigns`

handles campaign creation

> Body parameter

```json
{
  "name": "string",
  "subject": "string",
  "lists": [
    0
  ],
  "from_email": "string",
  "content_type": "string",
  "messenger": "string",
  "type": "string",
  "tags": [
    "string"
  ],
  "send_later": true,
  "send_at": {
    "headers": [
      {}
    ],
    "template_id": 0
  }
}
```

<h3 id="createcampaign-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[CampaignRequest](#schemacampaignrequest)|false|new campaign info|
|» name|body|string|false|none|
|» subject|body|string|false|none|
|» lists|body|[number]|false|none|
|» from_email|body|string|false|none|
|» content_type|body|string|false|none|
|» messenger|body|string|false|none|
|» type|body|string|false|none|
|» tags|body|[string]|false|none|
|» send_later|body|boolean|false|none|
|» send_at|body|object|false|none|
|» » headers|body|[object]|false|none|
|» » template_id|body|number|false|none|

> Example responses

> 200 Response

```json
{
  "data": {
    "name": "string",
    "subject": "string",
    "lists": [
      0
    ],
    "from_email": "string",
    "messenger": "string",
    "type": "string",
    "tags": [
      "string"
    ],
    "send_later": true,
    "send_at": {},
    "headers": [
      {}
    ],
    "template_id": 0,
    "content_type": "string",
    "body": "string",
    "altbody": "string",
    "archive": true,
    "archive_template_id": 0,
    "archive_meta": {}
  }
}
```

<h3 id="createcampaign-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|new campaign object|Inline|

<h3 id="createcampaign-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[CampaignUpdate](#schemacampaignupdate)|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## getCampaignById

<a id="opIdgetCampaignById"></a>

> Code samples

```bash
curl http://localhost:9000/api/campaigns/0 \
  -H 'Accept: application/json'
```

`GET /campaigns/{id}`

handles retrieval of campaigns.

<h3 id="getcampaignbyid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|The id value of the campaign you want to get.|
|no_body|query|boolean|false|boolean flag for response with/without body|

> Example responses

> 200 Response

```json
{
  "data": {
    "id": 0,
    "created_at": "string",
    "updated_at": "string",
    "CampaignID": 0,
    "views": 0,
    "clicks": 0,
    "lists": [
      {
        "id": 0,
        "name": "string"
      }
    ],
    "started_at": "string",
    "to_send": 0,
    "sent": 0,
    "uuid": "string",
    "type": "regular",
    "name": "string",
    "subject": "string",
    "from_email": "string",
    "body": "string",
    "send_at": "string",
    "status": "string",
    "content_type": "richtext",
    "tags": [
      "string"
    ],
    "template_id": 0,
    "messenger": "string"
  }
}
```

<h3 id="getcampaignbyid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|campaign object|Inline|

<h3 id="getcampaignbyid-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[Campaign](#schemacampaign)|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## updateCampaignById

<a id="opIdupdateCampaignById"></a>

> Code samples

```bash
curl http://localhost:9000/api/campaigns/0 \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "name": "string",
    "subject": "string",
    "lists": [
      0
    ],
    "from_email": "string",
    "content_type": "string",
    "messenger": "string",
    "type": "string",
    "tags": [
      "string"
    ],
    "send_later": true,
    "send_at": {
      "headers": [
        {}
      ],
      "template_id": 0
    }
  }'
```

`PUT /campaigns/{id}`

handle updation of campaign

> Body parameter

```json
{
  "name": "string",
  "subject": "string",
  "lists": [
    0
  ],
  "from_email": "string",
  "content_type": "string",
  "messenger": "string",
  "type": "string",
  "tags": [
    "string"
  ],
  "send_later": true,
  "send_at": {
    "headers": [
      {}
    ],
    "template_id": 0
  }
}
```

<h3 id="updatecampaignbyid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|the id value of campaign you want to update|
|body|body|[CampaignRequest](#schemacampaignrequest)|false|updated campaign fields|
|» name|body|string|false|none|
|» subject|body|string|false|none|
|» lists|body|[number]|false|none|
|» from_email|body|string|false|none|
|» content_type|body|string|false|none|
|» messenger|body|string|false|none|
|» type|body|string|false|none|
|» tags|body|[string]|false|none|
|» send_later|body|boolean|false|none|
|» send_at|body|object|false|none|
|» » headers|body|[object]|false|none|
|» » template_id|body|number|false|none|

> Example responses

> 200 Response

```json
{
  "data": {
    "name": "string",
    "subject": "string",
    "lists": [
      0
    ],
    "from_email": "string",
    "messenger": "string",
    "type": "string",
    "tags": [
      "string"
    ],
    "send_later": true,
    "send_at": {},
    "headers": [
      {}
    ],
    "template_id": 0,
    "content_type": "string",
    "body": "string",
    "altbody": "string",
    "archive": true,
    "archive_template_id": 0,
    "archive_meta": {}
  }
}
```

<h3 id="updatecampaignbyid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|updated campaign object|Inline|

<h3 id="updatecampaignbyid-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[CampaignUpdate](#schemacampaignupdate)|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## deleteCampaignById

<a id="opIddeleteCampaignById"></a>

> Code samples

```bash
curl http://localhost:9000/api/campaigns/0 \
  -X DELETE \
  -H 'Accept: application/json'
```

`DELETE /campaigns/{id}`

deletes specified campaign

<h3 id="deletecampaignbyid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|The id value of the campaign you want to get.|

> Example responses

> 200 Response

```json
{
  "data": true
}
```

<h3 id="deletecampaignbyid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="deletecampaignbyid-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|boolean|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## getRunningCampaignStats

<a id="opIdgetRunningCampaignStats"></a>

> Code samples

```bash
curl 'http://localhost:9000/api/campaigns/running/stats?campaign_id=0' \
  -H 'Accept: application/json'
```

`GET /campaigns/running/stats`

returns stats of a given set of campaign IDs.

<h3 id="getrunningcampaignstats-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|campaign_id|query|number|true|Campaign IDs to get stats for.|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "id": 0,
      "status": "string",
      "to_send": 0,
      "sent": 0,
      "started_at": "1970-01-01",
      "updated_at": "1970-01-01",
      "rate": 0,
      "net_rate": 0
    }
  ]
}
```

<h3 id="getrunningcampaignstats-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|list of stats for given set of campaign ids|Inline|

<h3 id="getrunningcampaignstats-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[CampaignStats](#schemacampaignstats)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## getCampaignAnalytics

<a id="opIdgetCampaignAnalytics"></a>

> Code samples

```bash
curl 'http://localhost:9000/api/campaigns/analytics/links?from=1970-01-01&to=string&id=string' \
  -H 'Accept: application/json'
```

`GET /campaigns/analytics/{type}`

retrieves view counts for a campaign.

<h3 id="getcampaignanalytics-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|type|path|string|true|type of stats, either links, view, click or bounce|
|from|query|string(date)|true|start value of date range|
|to|query|string|true|end value of date range|
|id|query|string|true|campaign id/s to retrive view counts|

#### Enumerated Values

|Parameter|Value|
|---|---|
|type|links|
|type|views|
|type|clicks|
|type|bounces|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "campaign_id": 0,
      "count": 0,
      "timestamp": "1970-01-01T00:00:00Z"
    }
  ]
}
```

<h3 id="getcampaignanalytics-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|list of stats for given set of campaign ids|Inline|

<h3 id="getcampaignanalytics-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[CampaignAnalyticsCount](#schemacampaignanalyticscount)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## previewCampaignById

<a id="opIdpreviewCampaignById"></a>

> Code samples

```bash
curl http://localhost:9000/api/campaigns/0/preview
```

`GET /campaigns/{id}/preview`

renders the HTML preview of a campaign body

<h3 id="previewcampaignbyid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|The id value of the campaign you want to get the preview of|

<h3 id="previewcampaignbyid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|HTML Preview of requested campaign|Inline|

<aside class="success">
This operation does not require authentication
</aside>

## updatePreviewCampaignById

<a id="opIdupdatePreviewCampaignById"></a>

> Code samples

```bash
curl http://localhost:9000/api/campaigns/0/preview \
  -X POST \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -d 'template_id=0&content_type=string&body=string'
```

`POST /campaigns/{id}/preview`

renders the HTML preview of a campaign body

> Body parameter

```yaml
template_id: 0
content_type: string
body: string
```

<h3 id="updatepreviewcampaignbyid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|The id value of the campaign you want to get the preview of|
|body|body|object|true|template id, body and content type|
|» template_id|body|integer|false|template id|
|» content_type|body|string|false|content type|
|» body|body|string|false|template body|

<h3 id="updatepreviewcampaignbyid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|HTML Preview of requested campaign|Inline|

<aside class="success">
This operation does not require authentication
</aside>

## previewCampaignTextById

<a id="opIdpreviewCampaignTextById"></a>

> Code samples

```bash
curl http://localhost:9000/api/campaigns/0/text \
  -X POST \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -d 'template_id=0&content_type=string&body=string'
```

`POST /campaigns/{id}/text`

renders the HTML preview of a campaign body

> Body parameter

```yaml
template_id: 0
content_type: string
body: string
```

<h3 id="previewcampaigntextbyid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|The id value of the campaign you want to get the preview of|
|body|body|object|true|template id, content type and campaign body|
|» template_id|body|integer|false|template id|
|» content_type|body|string|false|content type|
|» body|body|string|false|campaign body|

<h3 id="previewcampaigntextbyid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|response|Inline|

<aside class="success">
This operation does not require authentication
</aside>

## updateCampaignStatusById

<a id="opIdupdateCampaignStatusById"></a>

> Code samples

```bash
curl http://localhost:9000/api/campaigns/0/status \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "status": "scheduled"
  }'
```

`PUT /campaigns/{id}/status`

handles campaign status modification

> Body parameter

```json
{
  "status": "scheduled"
}
```

<h3 id="updatecampaignstatusbyid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|The id value of the campaign you want to get the preview of|
|body|body|object|false|campaign status update|
|» status|body|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» status|scheduled|
|» status|running|
|» status|paused|
|» status|cancelled|

> Example responses

> 200 Response

```json
{
  "data": {
    "id": 0,
    "created_at": "string",
    "updated_at": "string",
    "CampaignID": 0,
    "views": 0,
    "clicks": 0,
    "lists": [
      {
        "id": 0,
        "name": "string"
      }
    ],
    "started_at": "string",
    "to_send": 0,
    "sent": 0,
    "uuid": "string",
    "type": "regular",
    "name": "string",
    "subject": "string",
    "from_email": "string",
    "body": "string",
    "send_at": "string",
    "status": "string",
    "content_type": "richtext",
    "tags": [
      "string"
    ],
    "template_id": 0,
    "messenger": "string"
  }
}
```

<h3 id="updatecampaignstatusbyid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|response|Inline|

<h3 id="updatecampaignstatusbyid-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[Campaign](#schemacampaign)|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## updateCampaignArchiveById

<a id="opIdupdateCampaignArchiveById"></a>

> Code samples

```bash
curl http://localhost:9000/api/campaigns/0/archive \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "archive": true,
    "archive_template_id": 0,
    "archive_meta": {}
  }'
```

`PUT /campaigns/{id}/archive`

handles campaign status modification

> Body parameter

```json
{
  "archive": true,
  "archive_template_id": 0,
  "archive_meta": {}
}
```

<h3 id="updatecampaignarchivebyid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|The id value of the campaign you want to get the preview of|
|body|body|object|false|archive campaign related parameters|
|» archive|body|boolean|false|none|
|» archive_template_id|body|integer|false|none|
|» archive_meta|body|object|false|none|

> Example responses

> 200 Response

```json
{
  "data": true
}
```

<h3 id="updatecampaignarchivebyid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|response|Inline|

<h3 id="updatecampaignarchivebyid-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|boolean|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## createCampaignContentById

<a id="opIdcreateCampaignContentById"></a>

> Code samples

```bash
curl http://localhost:9000/api/campaigns/0/content \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "id": 0,
    "created_at": "string",
    "updated_at": "string",
    "CampaignID": 0,
    "views": 0,
    "clicks": 0,
    "lists": [
      {
        "id": 0,
        "name": "string"
      }
    ],
    "started_at": "string",
    "to_send": 0,
    "sent": 0,
    "uuid": "string",
    "type": "regular",
    "name": "string",
    "subject": "string",
    "from_email": "string",
    "body": "string",
    "send_at": "string",
    "status": "string",
    "content_type": "richtext",
    "tags": [
      "string"
    ],
    "template_id": 0,
    "messenger": "string",
    "from": "string",
    "to": "string"
  }'
```

`POST /campaigns/{id}/content`

handles campaign content (body) format conversions.

> Body parameter

```json
{
  "id": 0,
  "created_at": "string",
  "updated_at": "string",
  "CampaignID": 0,
  "views": 0,
  "clicks": 0,
  "lists": [
    {
      "id": 0,
      "name": "string"
    }
  ],
  "started_at": "string",
  "to_send": 0,
  "sent": 0,
  "uuid": "string",
  "type": "regular",
  "name": "string",
  "subject": "string",
  "from_email": "string",
  "body": "string",
  "send_at": "string",
  "status": "string",
  "content_type": "richtext",
  "tags": [
    "string"
  ],
  "template_id": 0,
  "messenger": "string",
  "from": "string",
  "to": "string"
}
```

<h3 id="createcampaigncontentbyid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|ID of campaign that you choose to create content|
|body|body|[CampaignContentRequest](#schemacampaigncontentrequest)|false|updated campaign content|
|» id|body|integer|false|none|
|» created_at|body|string|false|none|
|» updated_at|body|string|false|none|
|» CampaignID|body|integer|false|none|
|» views|body|integer|false|none|
|» clicks|body|integer|false|none|
|» lists|body|[object]|false|none|
|» » id|body|integer|false|none|
|» » name|body|string|false|none|
|» started_at|body|string|false|none|
|» to_send|body|integer|false|none|
|» sent|body|integer|false|none|
|» uuid|body|string|false|none|
|» type|body|string|false|none|
|» name|body|string|false|none|
|» subject|body|string|false|none|
|» from_email|body|string|false|none|
|» body|body|string|false|none|
|» send_at|body|string|false|none|
|» status|body|string|false|none|
|» content_type|body|string|false|none|
|» tags|body|[string]|false|none|
|» template_id|body|integer|false|none|
|» messenger|body|string|false|none|
|» from|body|string|false|none|
|» to|body|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» type|regular|
|» type|optin|
|» content_type|richtext|
|» content_type|html|
|» content_type|markdown|
|» content_type|plain|

> Example responses

> 200 Response

```json
{
  "data": "string"
}
```

<h3 id="createcampaigncontentbyid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|response|Inline|

<h3 id="createcampaigncontentbyid-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## testCampaignById

<a id="opIdtestCampaignById"></a>

> Code samples

```bash
curl http://localhost:9000/api/campaigns/0/test \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "name": "string",
    "subject": "string",
    "lists": [
      0
    ],
    "from_email": "string",
    "content_type": "string",
    "messenger": "string",
    "type": "string",
    "tags": [
      "string"
    ],
    "send_later": true,
    "send_at": {
      "headers": [
        {}
      ],
      "template_id": 0
    }
  }'
```

`POST /campaigns/{id}/test`

handles sending of campaign message to arbitrary subscribers for testing

> Body parameter

```json
{
  "name": "string",
  "subject": "string",
  "lists": [
    0
  ],
  "from_email": "string",
  "content_type": "string",
  "messenger": "string",
  "type": "string",
  "tags": [
    "string"
  ],
  "send_later": true,
  "send_at": {
    "headers": [
      {}
    ],
    "template_id": 0
  }
}
```

<h3 id="testcampaignbyid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|ID of campaign that you want to test|
|body|body|[CampaignRequest](#schemacampaignrequest)|true|template id|
|» name|body|string|false|none|
|» subject|body|string|false|none|
|» lists|body|[number]|false|none|
|» from_email|body|string|false|none|
|» content_type|body|string|false|none|
|» messenger|body|string|false|none|
|» type|body|string|false|none|
|» tags|body|[string]|false|none|
|» send_later|body|boolean|false|none|
|» send_at|body|object|false|none|
|» » headers|body|[object]|false|none|
|» » template_id|body|number|false|none|

> Example responses

> 200 Response

```json
{
  "data": true
}
```

<h3 id="testcampaignbyid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|response|Inline|

<h3 id="testcampaignbyid-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|boolean|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="listmonk-media">Media</h1>

Media API

<a href="https://listmonk.app/docs/apis/media/">External documentation</a>

## getMedia

<a id="opIdgetMedia"></a>

> Code samples

```bash
curl http://localhost:9000/api/media \
  -H 'Accept: application/json'
```

`GET /media`

handles retrieval of uploaded media.

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "id": 0,
      "uuid": "string",
      "filename": "string",
      "content_type": "string",
      "created_at": "string",
      "thumb_url": "string",
      "thumb_uri": "string",
      "provider": "string",
      "meta": {},
      "url": "string",
      "uri": "string"
    }
  ]
}
```

<h3 id="getmedia-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|response|Inline|

<h3 id="getmedia-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[MediaFileObject](#schemamediafileobject)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## uploadMedia

<a id="opIduploadMedia"></a>

> Code samples

```bash
curl http://localhost:9000/api/media \
  -X POST \
  -H 'Accept: application/json'
```

`POST /media`

handles media file uploads.

<h3 id="uploadmedia-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|string(binary)|false|upload media file|

> Example responses

> 200 Response

```json
{
  "data": {
    "id": 0,
    "uuid": "string",
    "filename": "string",
    "content_type": "string",
    "created_at": "string",
    "thumb_url": "string",
    "thumb_uri": "string",
    "provider": "string",
    "meta": {},
    "url": "string",
    "uri": "string"
  }
}
```

<h3 id="uploadmedia-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|response|Inline|

<h3 id="uploadmedia-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[MediaFileObject](#schemamediafileobject)|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## getMediaById

<a id="opIdgetMediaById"></a>

> Code samples

```bash
curl http://localhost:9000/api/media/0 \
  -H 'Accept: application/json'
```

`GET /media/{id}`

handles retrieval of uploaded media.

<h3 id="getmediabyid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|media file id|

> Example responses

> 200 Response

```json
{
  "data": {
    "id": 0,
    "uuid": "string",
    "filename": "string",
    "content_type": "string",
    "created_at": "string",
    "thumb_url": "string",
    "thumb_uri": "string",
    "provider": "string",
    "meta": {},
    "url": "string",
    "uri": "string"
  }
}
```

<h3 id="getmediabyid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|response|Inline|

<h3 id="getmediabyid-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[MediaFileObject](#schemamediafileobject)|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## deleteMediaById

<a id="opIddeleteMediaById"></a>

> Code samples

```bash
curl http://localhost:9000/api/media/0 \
  -X DELETE \
  -H 'Accept: application/json'
```

`DELETE /media/{id}`

handles deletion of uploaded media.

<h3 id="deletemediabyid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|The id value of the list you want to delete.|

> Example responses

> 200 Response

```json
{
  "data": true
}
```

<h3 id="deletemediabyid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|response|Inline|

<h3 id="deletemediabyid-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|boolean|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="listmonk-templates">Templates</h1>

Templates API

<a href="https://listmonk.app/docs/apis/templates/">External documentation</a>

## getTemplates

<a id="opIdgetTemplates"></a>

> Code samples

```bash
curl 'http://localhost:9000/api/templates?no_body=true' \
  -H 'Accept: application/json'
```

`GET /templates`

handles retrieval of templates

<h3 id="gettemplates-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|no_body|query|boolean|true|boolean flag for response with/without body|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "id": 0,
      "created_at": "string",
      "updated_at": "string",
      "name": "string",
      "body": "string",
      "body_source": "string",
      "subject": "string",
      "type": "string",
      "is_default": true
    }
  ]
}
```

<h3 id="gettemplates-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|response|Inline|

<h3 id="gettemplates-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[Template](#schematemplate)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## createTemplate

<a id="opIdcreateTemplate"></a>

> Code samples

```bash
curl http://localhost:9000/api/templates \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "name": "string",
    "type": "campaign",
    "subject": "string",
    "body_source": "string",
    "body": "string"
  }'
```

`POST /templates`

handles template creation

> Body parameter

```json
{
  "name": "string",
  "type": "campaign",
  "subject": "string",
  "body_source": "string",
  "body": "string"
}
```

<h3 id="createtemplate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[NewTemplate](#schemanewtemplate)|true|new template info|
|» name|body|string|true|Name of the template|
|» type|body|string|true|Type of the template|
|» subject|body|string|false|Subject line for the template (only for tx)|
|» body_source|body|string|false|JSON source for the email-builder template (only for campaign_visual)|
|» body|body|string|true|HTML body of the template|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» type|campaign|
|» type|campaign_visual|
|» type|tx|

> Example responses

> 200 Response

```json
{
  "data": {
    "id": 0,
    "created_at": "string",
    "updated_at": "string",
    "name": "string",
    "body": "string",
    "body_source": "string",
    "subject": "string",
    "type": "string",
    "is_default": true
  }
}
```

<h3 id="createtemplate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|response|Inline|

<h3 id="createtemplate-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[Template](#schematemplate)|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## getTemplateById

<a id="opIdgetTemplateById"></a>

> Code samples

```bash
curl http://localhost:9000/api/templates/0 \
  -H 'Accept: application/json'
```

`GET /templates/{id}`

handles retrieval of templates

<h3 id="gettemplatebyid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|The id value of the template you want to get.|
|no_body|query|boolean|false|boolean flag for response with/without body|

> Example responses

> 200 Response

```json
{
  "data": {
    "id": 0,
    "created_at": "string",
    "updated_at": "string",
    "name": "string",
    "body": "string",
    "body_source": "string",
    "subject": "string",
    "type": "string",
    "is_default": true
  }
}
```

<h3 id="gettemplatebyid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|response|Inline|

<h3 id="gettemplatebyid-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[Template](#schematemplate)|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## updateTemplateById

<a id="opIdupdateTemplateById"></a>

> Code samples

```bash
curl http://localhost:9000/api/templates/0 \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "name": "string",
    "type": "campaign",
    "subject": "string",
    "body_source": "string",
    "body": "string"
  }'
```

`PUT /templates/{id}`

handles template modification

> Body parameter

```json
{
  "name": "string",
  "type": "campaign",
  "subject": "string",
  "body_source": "string",
  "body": "string"
}
```

<h3 id="updatetemplatebyid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|The id value of the template you want to update.|
|body|body|[UpdateTemplate](#schemaupdatetemplate)|true|updated template info|
|» name|body|string|false|Name of the template|
|» type|body|string|false|Type of the template|
|» subject|body|string|false|Subject line for the template (only for tx)|
|» body_source|body|string|false|JSON source for the email-builder template (only for campaign_visual)|
|» body|body|string|false|HTML body of the template|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» type|campaign|
|» type|campaign_visual|
|» type|tx|

> Example responses

> 200 Response

```json
{
  "data": {
    "id": 0,
    "created_at": "string",
    "updated_at": "string",
    "name": "string",
    "body": "string",
    "body_source": "string",
    "subject": "string",
    "type": "string",
    "is_default": true
  }
}
```

<h3 id="updatetemplatebyid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|response|Inline|

<h3 id="updatetemplatebyid-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[Template](#schematemplate)|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## deleteTemplateById

<a id="opIddeleteTemplateById"></a>

> Code samples

```bash
curl http://localhost:9000/api/templates/0 \
  -X DELETE \
  -H 'Accept: application/json'
```

`DELETE /templates/{id}`

handles deletion of templates

<h3 id="deletetemplatebyid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|The id value of the template you want to delete.|

> Example responses

> 200 Response

```json
{
  "data": true
}
```

<h3 id="deletetemplatebyid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|response|Inline|

<h3 id="deletetemplatebyid-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|boolean|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## previewTemplate

<a id="opIdpreviewTemplate"></a>

> Code samples

```bash
curl http://localhost:9000/api/templates/preview \
  -X POST \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -d 'template_type=string&body=string'
```

`POST /templates/preview`

get the HTML preview of a template.

> Body parameter

```yaml
template_type: string
body: string
```

<h3 id="previewtemplate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|template parameters|
|» template_type|body|string|false|type of template|
|» body|body|string|false|template body|

<h3 id="previewtemplate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|response|Inline|

<aside class="success">
This operation does not require authentication
</aside>

## previewTemplateById

<a id="opIdpreviewTemplateById"></a>

> Code samples

```bash
curl http://localhost:9000/api/templates/0/preview \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -d 'template_type=string&body=string'
```

`GET /templates/{id}/preview`

renders the HTML preview of a template.

> Body parameter

```yaml
template_type: string
body: string
```

<h3 id="previewtemplatebyid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|The id value of the template you want to get.|
|body|body|object|true|template parameters|
|» template_type|body|string|false|type of template|
|» body|body|string|false|template body|

<h3 id="previewtemplatebyid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|response|Inline|

<aside class="success">
This operation does not require authentication
</aside>

## setDefaultTemplateById

<a id="opIdsetDefaultTemplateById"></a>

> Code samples

```bash
curl http://localhost:9000/api/templates/0/default \
  -X PUT \
  -H 'Accept: application/json'
```

`PUT /templates/{id}/default`

handles template modification.

<h3 id="setdefaulttemplatebyid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|The id value of the template you want to set to the default template.|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "created_at": "string",
  "updated_at": "string",
  "name": "string",
  "body": "string",
  "body_source": "string",
  "subject": "string",
  "type": "string",
  "is_default": true
}
```

<h3 id="setdefaulttemplatebyid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|response|[Template](#schematemplate)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="listmonk-transactional">Transactional</h1>

Transactional API

<a href="https://listmonk.app/docs/apis/transactional/">External documentation</a>

## transactWithSubscriber

<a id="opIdtransactWithSubscriber"></a>

> Code samples

```bash
curl http://localhost:9000/api/tx \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "subscriber_email": "string",
    "subscriber_id": 0,
    "template_id": 0,
    "from_email": "string",
    "data": {},
    "headers": [
      {}
    ],
    "messenger": "string",
    "content_type": "string"
  }'
```

`POST /tx`

send message to a subscriber

> Body parameter

```json
{
  "subscriber_email": "string",
  "subscriber_id": 0,
  "template_id": 0,
  "from_email": "string",
  "data": {},
  "headers": [
    {}
  ],
  "messenger": "string",
  "content_type": "string"
}
```

<h3 id="transactwithsubscriber-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[TransactionalMessage](#schematransactionalmessage)|false|email message to a subscriber|
|» subscriber_email|body|string|false|none|
|» subscriber_id|body|integer|false|none|
|» template_id|body|integer|false|none|
|» from_email|body|string|false|none|
|» data|body|object|false|none|
|» headers|body|[object]|false|none|
|» messenger|body|string|false|none|
|» content_type|body|string|false|none|

> Example responses

> 200 Response

```json
{
  "data": true
}
```

<h3 id="transactwithsubscriber-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="transactwithsubscriber-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|boolean|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="listmonk-maintenance">Maintenance</h1>

Maintenance API

## deleteGCSubscribers

<a id="opIddeleteGCSubscribers"></a>

> Code samples

```bash
curl http://localhost:9000/api/maintenance/subscribers/string \
  -X DELETE \
  -H 'Accept: application/json'
```

`DELETE /maintenance/subscribers/{type}`

garbage collects (deletes) orphaned or blocklisted subscribers.

<h3 id="deletegcsubscribers-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|type|path|string|true|type of GC collected subscribers|

> Example responses

> 200 Response

```json
{
  "data": {
    "count": 0
  }
}
```

<h3 id="deletegcsubscribers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|response|Inline|

<h3 id="deletegcsubscribers-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|object|false|none|none|
|» count|integer|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## deleteCampaignAnalyticsByType

<a id="opIddeleteCampaignAnalyticsByType"></a>

> Code samples

```bash
curl http://localhost:9000/api/maintenance/analytics/string \
  -X DELETE \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H 'Accept: application/json' \
  -d 'before_date=1970-01-01'
```

`DELETE /maintenance/analytics/{type}`

garbage collects (deletes) campaign analytics.

> Body parameter

```yaml
before_date: "1970-01-01"
```

<h3 id="deletecampaignanalyticsbytype-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|type|path|string|true|type of GC collected subscribers|
|body|body|object|true|date parameter|
|» before_date|body|string(date)|false|none|

> Example responses

> 200 Response

```json
{
  "data": true
}
```

<h3 id="deletecampaignanalyticsbytype-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|response|Inline|

<h3 id="deletecampaignanalyticsbytype-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|boolean|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## deleteUnconfirmedSubscriptions

<a id="opIddeleteUnconfirmedSubscriptions"></a>

> Code samples

```bash
curl http://localhost:9000/api/maintenance/subscriptions/unconfirmed \
  -X DELETE \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H 'Accept: application/json' \
  -d 'before_date=1970-01-01'
```

`DELETE /maintenance/subscriptions/unconfirmed`

garbage collects (deletes) orphaned or blocklisted subscribers.

> Body parameter

```yaml
before_date: "1970-01-01"
```

<h3 id="deleteunconfirmedsubscriptions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|date parameter|
|» before_date|body|string(date)|false|none|

> Example responses

> 200 Response

```json
{
  "data": {
    "count": 0
  }
}
```

<h3 id="deleteunconfirmedsubscriptions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|response|Inline|

<h3 id="deleteunconfirmedsubscriptions-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|object|false|none|none|
|» count|integer|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="listmonk-public">Public</h1>

Listmonk Public API

## getPublicLists

<a id="opIdgetPublicLists"></a>

> Code samples

```bash
curl http://localhost:9000/api/public/lists \
  -H 'Accept: application/json'
```

`GET /public/lists`

returns the list of public lists with minimal fields

> Example responses

> 200 Response

```json
[
  {
    "uuid": "string",
    "name": "string"
  }
]
```

<h3 id="getpubliclists-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|response|Inline|

<h3 id="getpubliclists-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|
|» uuid|string|false|none|none|
|» name|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## handlePublicSubscription

<a id="opIdhandlePublicSubscription"></a>

> Code samples

```bash
curl http://localhost:9000/api/public/subscription \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "name": "string",
    "email": "string",
    "list_uuids": [
      "string"
    ]
  }'
```

`POST /public/subscription`

handles subscription requests coming from public API calls.

> Body parameter

```json
{
  "name": "string",
  "email": "string",
  "list_uuids": [
    "string"
  ]
}
```

<h3 id="handlepublicsubscription-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|subscription request parameters|
|» name|body|string|false|none|
|» email|body|string|false|none|
|» list_uuids|body|[string]|false|none|

> Example responses

> 200 Response

```json
{
  "has_optin": true
}
```

<h3 id="handlepublicsubscription-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|response|Inline|

<h3 id="handlepublicsubscription-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|has_optin|boolean|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

<h2 id="tocS_LanguagePack">LanguagePack</h2>
<!-- backwards compatibility -->
<a id="schemalanguagepack"></a>
<a id="schema_LanguagePack"></a>
<a id="tocSlanguagepack"></a>
<a id="tocslanguagepack"></a>

```json
{
  "data": {
    "_.code": "string",
    "_.name": "string",
    "property1": "string",
    "property2": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|object|false|none|Translation keys and localized strings. See i18n/en.json for the current keys.|

<h2 id="tocS_ServerConfig">ServerConfig</h2>
<!-- backwards compatibility -->
<a id="schemaserverconfig"></a>
<a id="schema_ServerConfig"></a>
<a id="tocSserverconfig"></a>
<a id="tocsserverconfig"></a>

```json
{
  "data": {
    "messengers": [
      "string"
    ],
    "langs": [
      {
        "code": "string",
        "name": "string"
      }
    ],
    "lang": "string",
    "update": "string",
    "needs_restart": true,
    "version": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|object|false|none|none|

<h2 id="tocS_DashboardChart">DashboardChart</h2>
<!-- backwards compatibility -->
<a id="schemadashboardchart"></a>
<a id="schema_DashboardChart"></a>
<a id="tocSdashboardchart"></a>
<a id="tocsdashboardchart"></a>

```json
{
  "link_clicks": [
    {
      "count": 0,
      "date": "string"
    }
  ],
  "campaign_views": [
    {
      "count": 0,
      "date": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|link_clicks|[object]|false|none|none|
|campaign_views|[object]|false|none|none|

<h2 id="tocS_DashboardCount">DashboardCount</h2>
<!-- backwards compatibility -->
<a id="schemadashboardcount"></a>
<a id="schema_DashboardCount"></a>
<a id="tocSdashboardcount"></a>
<a id="tocsdashboardcount"></a>

```json
{
  "data": {
    "subscribers": {
      "total": 0,
      "blocklisted": {},
      "orphans": 0
    },
    "lists": {
      "total": 0,
      "private": 0,
      "public": 0,
      "optin_single": 0,
      "optin_double": 0
    },
    "campaigns": {
      "total": 0,
      "by_status": {
        "draft": 0
      }
    },
    "messages": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|object|false|none|none|

<h2 id="tocS_SMTPSettings">SMTPSettings</h2>
<!-- backwards compatibility -->
<a id="schemasmtpsettings"></a>
<a id="schema_SMTPSettings"></a>
<a id="tocSsmtpsettings"></a>
<a id="tocssmtpsettings"></a>

```json
{
  "uuid": "string",
  "enabled": true,
  "host": "string",
  "hello_hostname": "string",
  "port": 0,
  "auth_protocol": "string",
  "username": "string",
  "email_headers": [
    {}
  ],
  "max_conns": 0,
  "max_msg_retries": 0,
  "idle_timeout": "string",
  "wait_timeout": "string",
  "tls_type": "string",
  "tls_skip_verify": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|uuid|string|false|none|none|
|enabled|boolean|false|none|none|
|host|string|false|none|none|
|hello_hostname|string|false|none|none|
|port|integer|false|none|none|
|auth_protocol|string|false|none|none|
|username|string|false|none|none|
|email_headers|[object]|false|none|none|
|max_conns|integer|false|none|none|
|max_msg_retries|integer|false|none|none|
|idle_timeout|string|false|none|none|
|wait_timeout|string|false|none|none|
|tls_type|string|false|none|none|
|tls_skip_verify|boolean|false|none|none|

<h2 id="tocS_SMTPTest">SMTPTest</h2>
<!-- backwards compatibility -->
<a id="schemasmtptest"></a>
<a id="schema_SMTPTest"></a>
<a id="tocSsmtptest"></a>
<a id="tocssmtptest"></a>

```json
{
  "uuid": "string",
  "enabled": true,
  "host": "string",
  "hello_hostname": "string",
  "port": 0,
  "auth_protocol": "string",
  "username": "string",
  "email_headers": [
    {}
  ],
  "max_conns": 0,
  "max_msg_retries": 0,
  "idle_timeout": "string",
  "wait_timeout": "string",
  "tls_type": "string",
  "tls_skip_verify": true,
  "strEmailHeaders": "string",
  "password": "string",
  "email": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|uuid|string|false|none|none|
|enabled|boolean|false|none|none|
|host|string|false|none|none|
|hello_hostname|string|false|none|none|
|port|integer|false|none|none|
|auth_protocol|string|false|none|none|
|username|string|false|none|none|
|email_headers|[object]|false|none|none|
|max_conns|integer|false|none|none|
|max_msg_retries|integer|false|none|none|
|idle_timeout|string|false|none|none|
|wait_timeout|string|false|none|none|
|tls_type|string|false|none|none|
|tls_skip_verify|boolean|false|none|none|
|strEmailHeaders|string|false|none|none|
|password|string|false|none|none|
|email|string|false|none|none|

<h2 id="tocS_MailBoxBounces">MailBoxBounces</h2>
<!-- backwards compatibility -->
<a id="schemamailboxbounces"></a>
<a id="schema_MailBoxBounces"></a>
<a id="tocSmailboxbounces"></a>
<a id="tocsmailboxbounces"></a>

```json
{
  "uuid": "string",
  "enabled": true,
  "type": "string",
  "host": "string",
  "port": 0,
  "auth_protocol": "string",
  "return_path": "string",
  "username": "string",
  "tls_enabled": true,
  "tls_skip_verify": true,
  "scan_interval": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|uuid|string|false|none|none|
|enabled|boolean|false|none|none|
|type|string|false|none|none|
|host|string|false|none|none|
|port|integer|false|none|none|
|auth_protocol|string|false|none|none|
|return_path|string|false|none|none|
|username|string|false|none|none|
|tls_enabled|boolean|false|none|none|
|tls_skip_verify|boolean|false|none|none|
|scan_interval|string|false|none|none|

<h2 id="tocS_Settings">Settings</h2>
<!-- backwards compatibility -->
<a id="schemasettings"></a>
<a id="schema_Settings"></a>
<a id="tocSsettings"></a>
<a id="tocssettings"></a>

```json
{
  "app.site_name": "string",
  "app.root_url": "string",
  "app.logo_url": "string",
  "app.favicon_url": "string",
  "app.from_email": [
    "string"
  ],
  "app.notify_emails": [
    "string"
  ],
  "app.enable_public_subscription_page": true,
  "app.enable_public_archive": true,
  "app.send_optin_confirmation": true,
  "app.check_updates": true,
  "app.lang": "string",
  "app.batch_size": 0,
  "app.concurrency": 0,
  "app.max_send_errors": 0,
  "app.message_rate": 0,
  "app.message_sliding_window": true,
  "app.message_sliding_window_duration": "string",
  "app.message_sliding_window_rate": 0,
  "privacy.individual_tracking": true,
  "privacy.unsubscribe_header": true,
  "privacy.allow_blocklist": true,
  "privacy.allow_preferences": true,
  "privacy.allow_export": true,
  "privacy.allow_wipe": true,
  "privacy.exportable": [
    "string"
  ],
  "privacy.domain_blocklist": [
    {}
  ],
  "upload.provider": "string",
  "upload.filesystem.upload_path": "string",
  "upload.filesystem.upload_uri": "string",
  "upload.s3.url": "string",
  "upload.s3.public_url": "string",
  "upload.s3.aws_access_key_id": "string",
  "upload.s3.aws_default_region": "string",
  "upload.s3.bucket": "string",
  "upload.s3.bucket_domain": "string",
  "upload.s3.bucket_path": "string",
  "upload.s3.bucket_type": "string",
  "upload.s3.expiry": "string",
  "smtp": [
    {
      "uuid": "string",
      "enabled": true,
      "host": "string",
      "hello_hostname": "string",
      "port": 0,
      "auth_protocol": "string",
      "username": "string",
      "email_headers": [
        {}
      ],
      "max_conns": 0,
      "max_msg_retries": 0,
      "idle_timeout": "string",
      "wait_timeout": "string",
      "tls_type": "string",
      "tls_skip_verify": true
    }
  ],
  "messengers": [
    {}
  ],
  "bounce.enabled": true,
  "bounce.webhooks_enabled": true,
  "bounce.count": 0,
  "bounce.action": "string",
  "bounce.ses_enabled": true,
  "bounce.azure.enabled": true,
  "bounce.azure.shared_secret": "string",
  "bounce.azure.shared_secret_header": "string",
  "bounce.sendgrid_enabled": true,
  "bounce.sendgrid_key": "string",
  "bounce.forwardemail_enabled": true,
  "bounce.forwardemail_key": "string",
  "bounce.postmark_enabled": true,
  "bounce.postmark_username": "string",
  "bounce.postmark_password": "string",
  "bounce.mailboxes": [
    {
      "uuid": "string",
      "enabled": true,
      "type": "string",
      "host": "string",
      "port": 0,
      "auth_protocol": "string",
      "return_path": "string",
      "username": "string",
      "tls_enabled": true,
      "tls_skip_verify": true,
      "scan_interval": "string"
    }
  ],
  "appearance.admin.custom_css": "string",
  "appearance.admin.custom_js": "string",
  "appearance.public.custom_css": "string",
  "appearance.public.custom_js": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|app.site_name|string|false|none|none|
|app.root_url|string|false|none|none|
|app.logo_url|string|false|none|none|
|app.favicon_url|string|false|none|none|
|app.from_email|[string]|false|none|Sender addresses. The first must be a literal email address and is the default for campaigns and system emails.|
|app.notify_emails|[string]|false|none|none|
|app.enable_public_subscription_page|boolean|false|none|none|
|app.enable_public_archive|boolean|false|none|none|
|app.send_optin_confirmation|boolean|false|none|none|
|app.check_updates|boolean|false|none|none|
|app.lang|string|false|none|none|
|app.batch_size|integer|false|none|none|
|app.concurrency|integer|false|none|none|
|app.max_send_errors|integer|false|none|none|
|app.message_rate|integer|false|none|none|
|app.message_sliding_window|boolean|false|none|none|
|app.message_sliding_window_duration|string|false|none|none|
|app.message_sliding_window_rate|integer|false|none|none|
|privacy.individual_tracking|boolean|false|none|none|
|privacy.unsubscribe_header|boolean|false|none|none|
|privacy.allow_blocklist|boolean|false|none|none|
|privacy.allow_preferences|boolean|false|none|none|
|privacy.allow_export|boolean|false|none|none|
|privacy.allow_wipe|boolean|false|none|none|
|privacy.exportable|[string]|false|none|none|
|privacy.domain_blocklist|[object]|false|none|none|
|upload.provider|string|false|none|none|
|upload.filesystem.upload_path|string|false|none|none|
|upload.filesystem.upload_uri|string|false|none|none|
|upload.s3.url|string|false|none|none|
|upload.s3.public_url|string|false|none|none|
|upload.s3.aws_access_key_id|string|false|none|none|
|upload.s3.aws_default_region|string|false|none|none|
|upload.s3.bucket|string|false|none|none|
|upload.s3.bucket_domain|string|false|none|none|
|upload.s3.bucket_path|string|false|none|none|
|upload.s3.bucket_type|string|false|none|none|
|upload.s3.expiry|string|false|none|none|
|smtp|[[SMTPSettings](#schemasmtpsettings)]|false|none|none|
|messengers|[object]|false|none|none|
|bounce.enabled|boolean|false|none|none|
|bounce.webhooks_enabled|boolean|false|none|none|
|bounce.count|integer|false|none|none|
|bounce.action|string|false|none|none|
|bounce.ses_enabled|boolean|false|none|none|
|bounce.azure.enabled|boolean|false|none|none|
|bounce.azure.shared_secret|string|false|none|none|
|bounce.azure.shared_secret_header|string|false|none|none|
|bounce.sendgrid_enabled|boolean|false|none|none|
|bounce.sendgrid_key|string|false|none|none|
|bounce.forwardemail_enabled|boolean|false|none|none|
|bounce.forwardemail_key|string|false|none|none|
|bounce.postmark_enabled|boolean|false|none|none|
|bounce.postmark_username|string|false|none|none|
|bounce.postmark_password|string|false|none|none|
|bounce.mailboxes|[[MailBoxBounces](#schemamailboxbounces)]|false|none|none|
|appearance.admin.custom_css|string|false|none|none|
|appearance.admin.custom_js|string|false|none|none|
|appearance.public.custom_css|string|false|none|none|
|appearance.public.custom_js|string|false|none|none|

<h2 id="tocS_SubscriberProfile">SubscriberProfile</h2>
<!-- backwards compatibility -->
<a id="schemasubscriberprofile"></a>
<a id="schema_SubscriberProfile"></a>
<a id="tocSsubscriberprofile"></a>
<a id="tocssubscriberprofile"></a>

```json
{
  "id": 0,
  "uuid": "string",
  "email": "string",
  "name": "string",
  "attribs": {},
  "status": "string",
  "created_at": "string",
  "updated_at": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer|false|none|none|
|uuid|string|false|none|none|
|email|string|false|none|none|
|name|string|false|none|none|
|attribs|object|false|none|none|
|status|string|false|none|none|
|created_at|string|false|none|none|
|updated_at|string|false|none|none|

<h2 id="tocS_Subscriptions">Subscriptions</h2>
<!-- backwards compatibility -->
<a id="schemasubscriptions"></a>
<a id="schema_Subscriptions"></a>
<a id="tocSsubscriptions"></a>
<a id="tocssubscriptions"></a>

```json
{
  "subscription_status": "string",
  "name": "string",
  "type": "string",
  "created_at": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|subscription_status|string|false|none|none|
|name|string|false|none|none|
|type|string|false|none|none|
|created_at|string|false|none|none|

<h2 id="tocS_SubscriberData">SubscriberData</h2>
<!-- backwards compatibility -->
<a id="schemasubscriberdata"></a>
<a id="schema_SubscriberData"></a>
<a id="tocSsubscriberdata"></a>
<a id="tocssubscriberdata"></a>

```json
{
  "email": "string",
  "profile": [
    {
      "id": 0,
      "uuid": "string",
      "email": "string",
      "name": "string",
      "attribs": {},
      "status": "string",
      "created_at": "string",
      "updated_at": "string"
    }
  ],
  "subscriptions": [
    {
      "subscription_status": "string",
      "name": "string",
      "type": "string",
      "created_at": "string"
    }
  ],
  "campaign_views": [
    {}
  ],
  "link_clicks": [
    {}
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|email|string|false|none|none|
|profile|[[SubscriberProfile](#schemasubscriberprofile)]|false|none|none|
|subscriptions|[[Subscriptions](#schemasubscriptions)]|false|none|none|
|campaign_views|[object]|false|none|none|
|link_clicks|[object]|false|none|none|

<h2 id="tocS_Subscriber">Subscriber</h2>
<!-- backwards compatibility -->
<a id="schemasubscriber"></a>
<a id="schema_Subscriber"></a>
<a id="tocSsubscriber"></a>
<a id="tocssubscriber"></a>

```json
{
  "id": 0,
  "created_at": "string",
  "updated_at": "string",
  "uuid": "string",
  "email": "string",
  "name": "string",
  "attribs": {},
  "status": "string",
  "lists": [
    {
      "subscription_status": "string",
      "id": 0,
      "uuid": "string",
      "name": "string",
      "type": "string",
      "tags": [
        "string"
      ],
      "created_at": "string",
      "updated_at": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer|false|none|none|
|created_at|string|false|none|none|
|updated_at|string|false|none|none|
|uuid|string|false|none|none|
|email|string|false|none|none|
|name|string|false|none|none|
|attribs|object|false|none|none|
|status|string|false|none|none|
|lists|[object]|false|none|none|

<h2 id="tocS_NewSubscriber">NewSubscriber</h2>
<!-- backwards compatibility -->
<a id="schemanewsubscriber"></a>
<a id="schema_NewSubscriber"></a>
<a id="tocSnewsubscriber"></a>
<a id="tocsnewsubscriber"></a>

```json
{
  "email": "string",
  "name": "string",
  "status": "string",
  "lists": [
    0
  ],
  "list_uuids": [
    "string"
  ],
  "preconfirm_subscriptions": true,
  "attribs": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|email|string|false|none|none|
|name|string|false|none|none|
|status|string|false|none|none|
|lists|[integer]|false|none|none|
|list_uuids|[string]|false|none|none|
|preconfirm_subscriptions|boolean|false|none|none|
|attribs|object|false|none|none|

<h2 id="tocS_UpdateSubscriber">UpdateSubscriber</h2>
<!-- backwards compatibility -->
<a id="schemaupdatesubscriber"></a>
<a id="schema_UpdateSubscriber"></a>
<a id="tocSupdatesubscriber"></a>
<a id="tocsupdatesubscriber"></a>

```json
{
  "email": "string",
  "name": "string",
  "status": "string",
  "lists": [
    0
  ],
  "list_uuids": [
    "string"
  ],
  "preconfirm_subscriptions": true,
  "attribs": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|email|string|false|none|none|
|name|string|false|none|none|
|status|string|false|none|none|
|lists|[integer]|false|none|none|
|list_uuids|[string]|false|none|none|
|preconfirm_subscriptions|boolean|false|none|none|
|attribs|object|false|none|none|

<h2 id="tocS_SubscriberQueryRequest">SubscriberQueryRequest</h2>
<!-- backwards compatibility -->
<a id="schemasubscriberqueryrequest"></a>
<a id="schema_SubscriberQueryRequest"></a>
<a id="tocSsubscriberqueryrequest"></a>
<a id="tocssubscriberqueryrequest"></a>

```json
{
  "query": "string",
  "ids": [
    0
  ],
  "action": "add",
  "target_list_ids": 0,
  "status": "confirmed"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|query|string|false|none|none|
|ids|[integer]|false|none|The ids of the subscribers to be modified.|
|action|string|false|none|Whether to add, remove, or unsubscribe the users.|
|target_list_ids|integer|false|none|The ids of the lists to be modified.|
|status|string|false|none|confirmed, unconfirmed, or unsubscribed status.|

#### Enumerated Values

|Property|Value|
|---|---|
|action|add|
|action|remove|
|action|unsubscribe|
|status|confirmed|
|status|unconfirmed|
|status|unsubscribed|

<h2 id="tocS_Bounce">Bounce</h2>
<!-- backwards compatibility -->
<a id="schemabounce"></a>
<a id="schema_Bounce"></a>
<a id="tocSbounce"></a>
<a id="tocsbounce"></a>

```json
{
  "results": [
    {
      "id": 0,
      "type": "string",
      "source": "string",
      "meta": {},
      "created_at": "string",
      "email": "string",
      "subscriber_uuid": "string",
      "subscriber_id": 0,
      "campaign": {
        "id": 0,
        "name": "string"
      },
      "campaign_uuid": "string",
      "total": 0
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|results|[object]|false|none|none|

<h2 id="tocS_List">List</h2>
<!-- backwards compatibility -->
<a id="schemalist"></a>
<a id="schema_List"></a>
<a id="tocSlist"></a>
<a id="tocslist"></a>

```json
{
  "id": 0,
  "created_at": "string",
  "updated_at": "string",
  "uuid": "string",
  "name": "string",
  "type": "string",
  "optin": "string",
  "tags": [
    "string"
  ],
  "subscriber_count": 0,
  "description": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer|false|none|none|
|created_at|string|false|none|none|
|updated_at|string|false|none|none|
|uuid|string|false|none|none|
|name|string|false|none|none|
|type|string|false|none|none|
|optin|string|false|none|none|
|tags|[string]|false|none|none|
|subscriber_count|integer|false|none|none|
|description|string|false|none|none|

<h2 id="tocS_NewList">NewList</h2>
<!-- backwards compatibility -->
<a id="schemanewlist"></a>
<a id="schema_NewList"></a>
<a id="tocSnewlist"></a>
<a id="tocsnewlist"></a>

```json
{
  "name": "string",
  "type": "public",
  "optin": "single",
  "tags": [
    "string"
  ],
  "description": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|none|
|type|string|false|none|none|
|optin|string|false|none|none|
|tags|[string]|false|none|none|
|description|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|public|
|type|private|
|optin|single|
|optin|double|

<h2 id="tocS_ImportStatus">ImportStatus</h2>
<!-- backwards compatibility -->
<a id="schemaimportstatus"></a>
<a id="schema_ImportStatus"></a>
<a id="tocSimportstatus"></a>
<a id="tocsimportstatus"></a>

```json
{
  "data": {
    "name": "string",
    "total": 0,
    "imported": 0,
    "status": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|object|false|none|none|

<h2 id="tocS_Campaign">Campaign</h2>
<!-- backwards compatibility -->
<a id="schemacampaign"></a>
<a id="schema_Campaign"></a>
<a id="tocScampaign"></a>
<a id="tocscampaign"></a>

```json
{
  "id": 0,
  "created_at": "string",
  "updated_at": "string",
  "CampaignID": 0,
  "views": 0,
  "clicks": 0,
  "lists": [
    {
      "id": 0,
      "name": "string"
    }
  ],
  "started_at": "string",
  "to_send": 0,
  "sent": 0,
  "uuid": "string",
  "type": "regular",
  "name": "string",
  "subject": "string",
  "from_email": "string",
  "body": "string",
  "send_at": "string",
  "status": "string",
  "content_type": "richtext",
  "tags": [
    "string"
  ],
  "template_id": 0,
  "messenger": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer|false|none|none|
|created_at|string|false|none|none|
|updated_at|string|false|none|none|
|CampaignID|integer|false|none|none|
|views|integer|false|none|none|
|clicks|integer|false|none|none|
|lists|[object]|false|none|none|
|started_at|string|false|none|none|
|to_send|integer|false|none|none|
|sent|integer|false|none|none|
|uuid|string|false|none|none|
|type|string|false|none|none|
|name|string|false|none|none|
|subject|string|false|none|none|
|from_email|string|false|none|none|
|body|string|false|none|none|
|send_at|string|false|none|none|
|status|string|false|none|none|
|content_type|string|false|none|none|
|tags|[string]|false|none|none|
|template_id|integer|false|none|none|
|messenger|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|regular|
|type|optin|
|content_type|richtext|
|content_type|html|
|content_type|markdown|
|content_type|plain|

<h2 id="tocS_CampaignContentRequest">CampaignContentRequest</h2>
<!-- backwards compatibility -->
<a id="schemacampaigncontentrequest"></a>
<a id="schema_CampaignContentRequest"></a>
<a id="tocScampaigncontentrequest"></a>
<a id="tocscampaigncontentrequest"></a>

```json
{
  "id": 0,
  "created_at": "string",
  "updated_at": "string",
  "CampaignID": 0,
  "views": 0,
  "clicks": 0,
  "lists": [
    {
      "id": 0,
      "name": "string"
    }
  ],
  "started_at": "string",
  "to_send": 0,
  "sent": 0,
  "uuid": "string",
  "type": "regular",
  "name": "string",
  "subject": "string",
  "from_email": "string",
  "body": "string",
  "send_at": "string",
  "status": "string",
  "content_type": "richtext",
  "tags": [
    "string"
  ],
  "template_id": 0,
  "messenger": "string",
  "from": "string",
  "to": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer|false|none|none|
|created_at|string|false|none|none|
|updated_at|string|false|none|none|
|CampaignID|integer|false|none|none|
|views|integer|false|none|none|
|clicks|integer|false|none|none|
|lists|[object]|false|none|none|
|started_at|string|false|none|none|
|to_send|integer|false|none|none|
|sent|integer|false|none|none|
|uuid|string|false|none|none|
|type|string|false|none|none|
|name|string|false|none|none|
|subject|string|false|none|none|
|from_email|string|false|none|none|
|body|string|false|none|none|
|send_at|string|false|none|none|
|status|string|false|none|none|
|content_type|string|false|none|none|
|tags|[string]|false|none|none|
|template_id|integer|false|none|none|
|messenger|string|false|none|none|
|from|string|false|none|none|
|to|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|regular|
|type|optin|
|content_type|richtext|
|content_type|html|
|content_type|markdown|
|content_type|plain|

<h2 id="tocS_CampaignRequest">CampaignRequest</h2>
<!-- backwards compatibility -->
<a id="schemacampaignrequest"></a>
<a id="schema_CampaignRequest"></a>
<a id="tocScampaignrequest"></a>
<a id="tocscampaignrequest"></a>

```json
{
  "name": "string",
  "subject": "string",
  "lists": [
    0
  ],
  "from_email": "string",
  "content_type": "string",
  "messenger": "string",
  "type": "string",
  "tags": [
    "string"
  ],
  "send_later": true,
  "send_at": {
    "headers": [
      {}
    ],
    "template_id": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|none|
|subject|string|false|none|none|
|lists|[number]|false|none|none|
|from_email|string|false|none|none|
|content_type|string|false|none|none|
|messenger|string|false|none|none|
|type|string|false|none|none|
|tags|[string]|false|none|none|
|send_later|boolean|false|none|none|
|send_at|object|false|none|none|

<h2 id="tocS_CampaignUpdate">CampaignUpdate</h2>
<!-- backwards compatibility -->
<a id="schemacampaignupdate"></a>
<a id="schema_CampaignUpdate"></a>
<a id="tocScampaignupdate"></a>
<a id="tocscampaignupdate"></a>

```json
{
  "name": "string",
  "subject": "string",
  "lists": [
    0
  ],
  "from_email": "string",
  "messenger": "string",
  "type": "string",
  "tags": [
    "string"
  ],
  "send_later": true,
  "send_at": {},
  "headers": [
    {}
  ],
  "template_id": 0,
  "content_type": "string",
  "body": "string",
  "altbody": "string",
  "archive": true,
  "archive_template_id": 0,
  "archive_meta": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|none|
|subject|string|false|none|none|
|lists|[integer]|false|none|none|
|from_email|string|false|none|none|
|messenger|string|false|none|none|
|type|string|false|none|none|
|tags|[string]|false|none|none|
|send_later|boolean|false|none|none|
|send_at|object|false|none|none|
|headers|[object]|false|none|none|
|template_id|integer|false|none|none|
|content_type|string|false|none|none|
|body|string|false|none|none|
|altbody|string|false|none|none|
|archive|boolean|false|none|none|
|archive_template_id|integer|false|none|none|
|archive_meta|object|false|none|none|

<h2 id="tocS_CampaignStats">CampaignStats</h2>
<!-- backwards compatibility -->
<a id="schemacampaignstats"></a>
<a id="schema_CampaignStats"></a>
<a id="tocScampaignstats"></a>
<a id="tocscampaignstats"></a>

```json
{
  "id": 0,
  "status": "string",
  "to_send": 0,
  "sent": 0,
  "started_at": "1970-01-01",
  "updated_at": "1970-01-01",
  "rate": 0,
  "net_rate": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer|false|none|none|
|status|string|false|none|none|
|to_send|integer|false|none|none|
|sent|integer|false|none|none|
|started_at|string(date)|false|none|none|
|updated_at|string(date)|false|none|none|
|rate|integer|false|none|none|
|net_rate|integer|false|none|none|

<h2 id="tocS_CampaignAnalyticsCount">CampaignAnalyticsCount</h2>
<!-- backwards compatibility -->
<a id="schemacampaignanalyticscount"></a>
<a id="schema_CampaignAnalyticsCount"></a>
<a id="tocScampaignanalyticscount"></a>
<a id="tocscampaignanalyticscount"></a>

```json
{
  "campaign_id": 0,
  "count": 0,
  "timestamp": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|campaign_id|integer|false|none|none|
|count|integer|false|none|none|
|timestamp|string(date-time)|false|none|none|

<h2 id="tocS_MediaFileObject">MediaFileObject</h2>
<!-- backwards compatibility -->
<a id="schemamediafileobject"></a>
<a id="schema_MediaFileObject"></a>
<a id="tocSmediafileobject"></a>
<a id="tocsmediafileobject"></a>

```json
{
  "id": 0,
  "uuid": "string",
  "filename": "string",
  "content_type": "string",
  "created_at": "string",
  "thumb_url": "string",
  "thumb_uri": "string",
  "provider": "string",
  "meta": {},
  "url": "string",
  "uri": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer|false|none|none|
|uuid|string|false|none|none|
|filename|string|false|none|none|
|content_type|string|false|none|none|
|created_at|string|false|none|none|
|thumb_url|string|false|none|none|
|thumb_uri|string|false|none|none|
|provider|string|false|none|none|
|meta|object|false|none|none|
|url|string|false|none|none|
|uri|string|false|none|none|

<h2 id="tocS_Template">Template</h2>
<!-- backwards compatibility -->
<a id="schematemplate"></a>
<a id="schema_Template"></a>
<a id="tocStemplate"></a>
<a id="tocstemplate"></a>

```json
{
  "id": 0,
  "created_at": "string",
  "updated_at": "string",
  "name": "string",
  "body": "string",
  "body_source": "string",
  "subject": "string",
  "type": "string",
  "is_default": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer|false|none|none|
|created_at|string|false|none|none|
|updated_at|string|false|none|none|
|name|string|false|none|none|
|body|string|false|none|none|
|body_source|string|false|none|none|
|subject|string|false|none|none|
|type|string|false|none|none|
|is_default|boolean|false|none|none|

<h2 id="tocS_NewTemplate">NewTemplate</h2>
<!-- backwards compatibility -->
<a id="schemanewtemplate"></a>
<a id="schema_NewTemplate"></a>
<a id="tocSnewtemplate"></a>
<a id="tocsnewtemplate"></a>

```json
{
  "name": "string",
  "type": "campaign",
  "subject": "string",
  "body_source": "string",
  "body": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|Name of the template|
|type|string|true|none|Type of the template|
|subject|string|false|none|Subject line for the template (only for tx)|
|body_source|string|false|none|JSON source for the email-builder template (only for campaign_visual)|
|body|string|true|none|HTML body of the template|

#### Enumerated Values

|Property|Value|
|---|---|
|type|campaign|
|type|campaign_visual|
|type|tx|

<h2 id="tocS_UpdateTemplate">UpdateTemplate</h2>
<!-- backwards compatibility -->
<a id="schemaupdatetemplate"></a>
<a id="schema_UpdateTemplate"></a>
<a id="tocSupdatetemplate"></a>
<a id="tocsupdatetemplate"></a>

```json
{
  "name": "string",
  "type": "campaign",
  "subject": "string",
  "body_source": "string",
  "body": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|Name of the template|
|type|string|false|none|Type of the template|
|subject|string|false|none|Subject line for the template (only for tx)|
|body_source|string|false|none|JSON source for the email-builder template (only for campaign_visual)|
|body|string|false|none|HTML body of the template|

#### Enumerated Values

|Property|Value|
|---|---|
|type|campaign|
|type|campaign_visual|
|type|tx|

<h2 id="tocS_TransactionalMessage">TransactionalMessage</h2>
<!-- backwards compatibility -->
<a id="schematransactionalmessage"></a>
<a id="schema_TransactionalMessage"></a>
<a id="tocStransactionalmessage"></a>
<a id="tocstransactionalmessage"></a>

```json
{
  "subscriber_email": "string",
  "subscriber_id": 0,
  "template_id": 0,
  "from_email": "string",
  "data": {},
  "headers": [
    {}
  ],
  "messenger": "string",
  "content_type": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|subscriber_email|string|false|none|none|
|subscriber_id|integer|false|none|none|
|template_id|integer|false|none|none|
|from_email|string|false|none|none|
|data|object|false|none|none|
|headers|[object]|false|none|none|
|messenger|string|false|none|none|
|content_type|string|false|none|none|
