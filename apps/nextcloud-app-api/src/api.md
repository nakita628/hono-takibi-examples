<h1 id="appapi">app_api v0.0.1</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Nextcloud AppAPI

License: agpl

# Authentication

- HTTP Authentication, scheme: basic

- HTTP Authentication, scheme: bearer

<h1 id="appapi-ocsapi">ocs_api</h1>

## Log a message to the Nextcloud log on behalf of an ExApp

<a id="opIdocs_api-log"></a>

> Code samples

```bash
curl https://cloud.example.com/ocs/v2.php/apps/app_api/api/v1/log \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'OCS-APIRequest: true' \
  -d '{
    "level": 0,
    "message": "string"
  }'
```

`POST /ocs/v2.php/apps/app_api/api/v1/log`

> Body parameter

```json
{
  "level": 0,
  "message": "string"
}
```

<h3 id="log-a-message-to-the-nextcloud-log-on-behalf-of-an-exapp-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ex-app-id|header|string|false|none|
|OCS-APIRequest|header|boolean|true|Required to be true for the API request to pass|
|body|body|object|true|none|
|» level|body|integer(int64)|true|Log level (0 - debug, 1 - info, 2 - warning, 3 - error, 4 - fatal)|
|» message|body|string|true|Message to log|

> Example responses

> 200 Response

```json
{
  "ocs": {
    "meta": {
      "status": "string",
      "statuscode": 0,
      "message": "string",
      "totalitems": "string",
      "itemsperpage": "string"
    },
    "data": null
  }
}
```

> 400 Response

```json
{
  "ocs": {
    "meta": {
      "status": "string",
      "statuscode": 0,
      "message": "string",
      "totalitems": "string",
      "itemsperpage": "string"
    },
    "data": null
  }
}
```

<h3 id="log-a-message-to-the-nextcloud-log-on-behalf-of-an-exapp-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Message logged successfully|Inline|
|400|Bad Request|Invalid log level|Inline|

<h3 id="log-a-message-to-the-nextcloud-log-on-behalf-of-an-exapp-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|

<aside class="warning">
Authentication is optional for this operation. To authenticate, use one of the following methods:
bearer_auth, basic_auth
</aside>

## Get a list of all Nextcloud user IDs

<a id="opIdocs_api-getnc-users-list"></a>

> Code samples

```bash
curl https://cloud.example.com/ocs/v2.php/apps/app_api/api/v1/users \
  -H 'Accept: application/json' \
  -H 'OCS-APIRequest: true'
```

`GET /ocs/v2.php/apps/app_api/api/v1/users`

<h3 id="get-a-list-of-all-nextcloud-user-ids-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|OCS-APIRequest|header|boolean|true|Required to be true for the API request to pass|

> Example responses

> 200 Response

```json
{
  "ocs": {
    "meta": {
      "status": "string",
      "statuscode": 0,
      "message": "string",
      "totalitems": "string",
      "itemsperpage": "string"
    },
    "data": [
      "string"
    ]
  }
}
```

<h3 id="get-a-list-of-all-nextcloud-user-ids-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Users list returned|Inline|

<h3 id="get-a-list-of-all-nextcloud-user-ids-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|[string]|true|none|none|

<aside class="warning">
Authentication is optional for this operation. To authenticate, use one of the following methods:
bearer_auth, basic_auth
</aside>

## Update the initialization progress of an ExApp by its appid

<a id="opIdocs_api-set-app-init-progress-deprecated"></a>

> Code samples

```bash
curl https://cloud.example.com/ocs/v2.php/apps/app_api/apps/status/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'OCS-APIRequest: true' \
  -d '{
    "progress": 0,
    "error": ""
  }'
```

`PUT /ocs/v2.php/apps/app_api/apps/status/{appId}`

<aside class="warning">
This operation is deprecated
</aside>

> Body parameter

```json
{
  "progress": 0,
  "error": ""
}
```

<h3 id="update-the-initialization-progress-of-an-exapp-by-its-appid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|string|true|ID of the ExApp|
|OCS-APIRequest|header|boolean|true|Required to be true for the API request to pass|
|body|body|object|true|none|
|» progress|body|integer(int64)|true|Initialization progress in percent (0-100)|
|» error|body|string|false|Error message in case the initialization failed|

> Example responses

> 200 Response

```json
{
  "ocs": {
    "meta": {
      "status": "string",
      "statuscode": 0,
      "message": "string",
      "totalitems": "string",
      "itemsperpage": "string"
    },
    "data": null
  }
}
```

> 404 Response

```json
{
  "ocs": {
    "meta": {
      "status": "string",
      "statuscode": 0,
      "message": "string",
      "totalitems": "string",
      "itemsperpage": "string"
    },
    "data": null
  }
}
```

<h3 id="update-the-initialization-progress-of-an-exapp-by-its-appid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Initialization progress updated|Inline|
|404|Not Found|ExApp not found|Inline|

<h3 id="update-the-initialization-progress-of-an-exapp-by-its-appid-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|

<aside class="warning">
Authentication is optional for this operation. To authenticate, use one of the following methods:
bearer_auth, basic_auth
</aside>

## Update the initialization progress of the calling ExApp

<a id="opIdocs_api-set-app-init-progress"></a>

> Code samples

```bash
curl https://cloud.example.com/ocs/v2.php/apps/app_api/ex-app/status \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'OCS-APIRequest: true' \
  -d '{
    "progress": 0,
    "error": ""
  }'
```

`PUT /ocs/v2.php/apps/app_api/ex-app/status`

> Body parameter

```json
{
  "progress": 0,
  "error": ""
}
```

<h3 id="update-the-initialization-progress-of-the-calling-exapp-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ex-app-id|header|string|false|none|
|OCS-APIRequest|header|boolean|true|Required to be true for the API request to pass|
|body|body|object|true|none|
|» progress|body|integer(int64)|true|Initialization progress in percent (0-100)|
|» error|body|string|false|Error message in case the initialization failed|

> Example responses

> 200 Response

```json
{
  "ocs": {
    "meta": {
      "status": "string",
      "statuscode": 0,
      "message": "string",
      "totalitems": "string",
      "itemsperpage": "string"
    },
    "data": null
  }
}
```

> 404 Response

```json
{
  "ocs": {
    "meta": {
      "status": "string",
      "statuscode": 0,
      "message": "string",
      "totalitems": "string",
      "itemsperpage": "string"
    },
    "data": null
  }
}
```

<h3 id="update-the-initialization-progress-of-the-calling-exapp-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Initialization progress updated|Inline|
|404|Not Found|ExApp not found|Inline|

<h3 id="update-the-initialization-progress-of-the-calling-exapp-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|

<aside class="warning">
Authentication is optional for this operation. To authenticate, use one of the following methods:
bearer_auth, basic_auth
</aside>

## Get the enabled state of the calling ExApp (0 for disabled, 1 for enabled)

<a id="opIdocs_api-get-enabled-state"></a>

> Code samples

```bash
curl https://cloud.example.com/ocs/v2.php/apps/app_api/ex-app/state \
  -H 'Accept: application/json' \
  -H 'OCS-APIRequest: true'
```

`GET /ocs/v2.php/apps/app_api/ex-app/state`

Note: This endpoint is accessible even if the ExApp itself is disabled.

<h3 id="get-the-enabled-state-of-the-calling-exapp-0-for-disabled-1-for-enabled-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ex-app-id|header|string|false|none|
|OCS-APIRequest|header|boolean|true|Required to be true for the API request to pass|

> Example responses

> 200 Response

```json
{
  "ocs": {
    "meta": {
      "status": "string",
      "statuscode": 0,
      "message": "string",
      "totalitems": "string",
      "itemsperpage": "string"
    },
    "data": 0
  }
}
```

> 404 Response

```json
{
  "ocs": {
    "meta": {
      "status": "string",
      "statuscode": 0,
      "message": "string",
      "totalitems": "string",
      "itemsperpage": "string"
    },
    "data": null
  }
}
```

<h3 id="get-the-enabled-state-of-the-calling-exapp-0-for-disabled-1-for-enabled-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Enabled state returned|Inline|
|404|Not Found|ExApp not found|Inline|

<h3 id="get-the-enabled-state-of-the-calling-exapp-0-for-disabled-1-for-enabled-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|integer(int64)|true|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|

<aside class="warning">
Authentication is optional for this operation. To authenticate, use one of the following methods:
bearer_auth, basic_auth
</aside>

## Build an absolute URL from a Nextcloud-relative URL

<a id="opIdocs_api-get-nextcloud-absolute-url"></a>

> Code samples

```bash
curl 'https://cloud.example.com/ocs/v2.php/apps/app_api/api/v1/info/nextcloud_url/absolute?url=string' \
  -H 'Accept: application/json' \
  -H 'OCS-APIRequest: true'
```

`GET /ocs/v2.php/apps/app_api/api/v1/info/nextcloud_url/absolute`

<h3 id="build-an-absolute-url-from-a-nextcloud-relative-url-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|url|query|string|true|Relative URL to convert into an absolute one|
|OCS-APIRequest|header|boolean|true|Required to be true for the API request to pass|

> Example responses

> 200 Response

```json
{
  "ocs": {
    "meta": {
      "status": "string",
      "statuscode": 0,
      "message": "string",
      "totalitems": "string",
      "itemsperpage": "string"
    },
    "data": {
      "absolute_url": "string"
    }
  }
}
```

<h3 id="build-an-absolute-url-from-a-nextcloud-relative-url-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Absolute URL returned|Inline|

<h3 id="build-an-absolute-url-from-a-nextcloud-relative-url-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|
|» » absolute_url|string|true|none|none|

<aside class="warning">
Authentication is optional for this operation. To authenticate, use one of the following methods:
bearer_auth, basic_auth
</aside>

<h1 id="appapi-appconfig">app_config</h1>

## Set a configuration value for the calling ExApp

<a id="opIdapp_config-set-app-config-value"></a>

> Code samples

```bash
curl https://cloud.example.com/ocs/v2.php/apps/app_api/api/v1/ex-app/config \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'OCS-APIRequest: true' \
  -d '{
    "configKey": "string",
    "configValue": {},
    "sensitive": null
  }'
```

`POST /ocs/v2.php/apps/app_api/api/v1/ex-app/config`

> Body parameter

```json
{
  "configKey": "string",
  "configValue": {},
  "sensitive": null
}
```

<h3 id="set-a-configuration-value-for-the-calling-exapp-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ex-app-id|header|string|false|none|
|OCS-APIRequest|header|boolean|true|Required to be true for the API request to pass|
|body|body|object|true|none|
|» configKey|body|string|true|Configuration key|
|» configValue|body|object|true|Configuration value|
|» sensitive|body|integer(int64) \| null|false|Whether the value is sensitive and should be stored encrypted (1) or not (0)|

> Example responses

> 200 Response

```json
{
  "ocs": {
    "meta": {
      "status": "string",
      "statuscode": 0,
      "message": "string",
      "totalitems": "string",
      "itemsperpage": "string"
    },
    "data": {
      "id": 0,
      "appid": "string",
      "configkey": "string",
      "configvalue": "string",
      "sensitive": 0
    }
  }
}
```

> 400 Response

```json
{
  "ocs": {
    "meta": {
      "status": "string",
      "statuscode": 0,
      "message": "string",
      "totalitems": "string",
      "itemsperpage": "string"
    },
    "data": null
  }
}
```

<h3 id="set-a-configuration-value-for-the-calling-exapp-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Config value set|Inline|
|400|Bad Request|Config key is empty or the value could not be set|Inline|

<h3 id="set-a-configuration-value-for-the-calling-exapp-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|[ExAppConfig](#schemaexappconfig)|true|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|

<aside class="warning">
Authentication is optional for this operation. To authenticate, use one of the following methods:
bearer_auth, basic_auth
</aside>

## Delete configuration values of the calling ExApp

<a id="opIdapp_config-delete-app-config-values"></a>

> Code samples

```bash
curl 'https://cloud.example.com/ocs/v2.php/apps/app_api/api/v1/ex-app/config?configKeys%5B%5D=string' \
  -X DELETE \
  -H 'Accept: application/json' \
  -H 'OCS-APIRequest: true'
```

`DELETE /ocs/v2.php/apps/app_api/api/v1/ex-app/config`

<h3 id="delete-configuration-values-of-the-calling-exapp-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|configKeys[]|query|[string]|true|Configuration keys to delete|
|ex-app-id|header|string|false|none|
|OCS-APIRequest|header|boolean|true|Required to be true for the API request to pass|

> Example responses

> 200 Response

```json
{
  "ocs": {
    "meta": {
      "status": "string",
      "statuscode": 0,
      "message": "string",
      "totalitems": "string",
      "itemsperpage": "string"
    },
    "data": 0
  }
}
```

> 400 Response

```json
{
  "ocs": {
    "meta": {
      "status": "string",
      "statuscode": 0,
      "message": "string",
      "totalitems": "string",
      "itemsperpage": "string"
    },
    "data": null
  }
}
```

> 404 Response

```json
{
  "ocs": {
    "meta": {
      "status": "string",
      "statuscode": 0,
      "message": "string",
      "totalitems": "string",
      "itemsperpage": "string"
    },
    "data": null
  }
}
```

<h3 id="delete-configuration-values-of-the-calling-exapp-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Number of deleted config values returned|Inline|
|400|Bad Request|Failed to delete the config values|Inline|
|404|Not Found|No matching config values were found|Inline|

<h3 id="delete-configuration-values-of-the-calling-exapp-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|integer(int64)|true|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|

<aside class="warning">
Authentication is optional for this operation. To authenticate, use one of the following methods:
bearer_auth, basic_auth
</aside>

## Get configuration values of the calling ExApp

<a id="opIdapp_config-get-app-config-values"></a>

> Code samples

```bash
curl https://cloud.example.com/ocs/v2.php/apps/app_api/api/v1/ex-app/config/get-values \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'OCS-APIRequest: true' \
  -d '{
    "configKeys": [
      "string"
    ]
  }'
```

`POST /ocs/v2.php/apps/app_api/api/v1/ex-app/config/get-values`

> Body parameter

```json
{
  "configKeys": [
    "string"
  ]
}
```

<h3 id="get-configuration-values-of-the-calling-exapp-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ex-app-id|header|string|false|none|
|OCS-APIRequest|header|boolean|true|Required to be true for the API request to pass|
|body|body|object|true|none|
|» configKeys|body|[string]|true|Configuration keys to retrieve|

> Example responses

> 200 Response

```json
{
  "ocs": {
    "meta": {
      "status": "string",
      "statuscode": 0,
      "message": "string",
      "totalitems": "string",
      "itemsperpage": "string"
    },
    "data": [
      {
        "configkey": "string",
        "configvalue": "string"
      }
    ]
  }
}
```

<h3 id="get-configuration-values-of-the-calling-exapp-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Config values returned|Inline|

<h3 id="get-configuration-values-of-the-calling-exapp-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|[[ExAppConfigValue](#schemaexappconfigvalue)]|true|none|none|

<aside class="warning">
Authentication is optional for this operation. To authenticate, use one of the following methods:
bearer_auth, basic_auth
</aside>

<h1 id="appapi-preferences">preferences</h1>

## Set a preference value for the current user and the calling ExApp

<a id="opIdpreferences-set-user-config-value"></a>

> Code samples

```bash
curl https://cloud.example.com/ocs/v2.php/apps/app_api/api/v1/ex-app/preference \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'OCS-APIRequest: true' \
  -d '{
    "configKey": "string",
    "configValue": {},
    "sensitive": null
  }'
```

`POST /ocs/v2.php/apps/app_api/api/v1/ex-app/preference`

> Body parameter

```json
{
  "configKey": "string",
  "configValue": {},
  "sensitive": null
}
```

<h3 id="set-a-preference-value-for-the-current-user-and-the-calling-exapp-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ex-app-id|header|string|false|none|
|OCS-APIRequest|header|boolean|true|Required to be true for the API request to pass|
|body|body|object|true|none|
|» configKey|body|string|true|Preference key|
|» configValue|body|object|true|Preference value|
|» sensitive|body|integer(int64) \| null|false|Whether the value is sensitive and should be stored encrypted (1) or not (0)|

> Example responses

> 200 Response

```json
{
  "ocs": {
    "meta": {
      "status": "string",
      "statuscode": 0,
      "message": "string",
      "totalitems": "string",
      "itemsperpage": "string"
    },
    "data": {
      "id": 0,
      "user_id": "string",
      "appid": "string",
      "configkey": "string",
      "configvalue": "string",
      "sensitive": 0
    }
  }
}
```

> 400 Response

```json
{
  "ocs": {
    "meta": {
      "status": "string",
      "statuscode": 0,
      "message": "string",
      "totalitems": "string",
      "itemsperpage": "string"
    },
    "data": null
  }
}
```

<h3 id="set-a-preference-value-for-the-current-user-and-the-calling-exapp-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Preference value set|Inline|
|400|Bad Request|Config key is empty or the value could not be set|Inline|

<h3 id="set-a-preference-value-for-the-current-user-and-the-calling-exapp-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|[ExAppPreference](#schemaexapppreference)|true|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|

<aside class="warning">
Authentication is optional for this operation. To authenticate, use one of the following methods:
bearer_auth, basic_auth
</aside>

## Delete preference values of the current user for the calling ExApp

<a id="opIdpreferences-delete-user-config-values"></a>

> Code samples

```bash
curl 'https://cloud.example.com/ocs/v2.php/apps/app_api/api/v1/ex-app/preference?configKeys%5B%5D=string' \
  -X DELETE \
  -H 'Accept: application/json' \
  -H 'OCS-APIRequest: true'
```

`DELETE /ocs/v2.php/apps/app_api/api/v1/ex-app/preference`

<h3 id="delete-preference-values-of-the-current-user-for-the-calling-exapp-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|configKeys[]|query|[string]|true|Preference keys to delete|
|ex-app-id|header|string|false|none|
|OCS-APIRequest|header|boolean|true|Required to be true for the API request to pass|

> Example responses

> 200 Response

```json
{
  "ocs": {
    "meta": {
      "status": "string",
      "statuscode": 0,
      "message": "string",
      "totalitems": "string",
      "itemsperpage": "string"
    },
    "data": 0
  }
}
```

> 400 Response

```json
{
  "ocs": {
    "meta": {
      "status": "string",
      "statuscode": 0,
      "message": "string",
      "totalitems": "string",
      "itemsperpage": "string"
    },
    "data": null
  }
}
```

> 404 Response

```json
{
  "ocs": {
    "meta": {
      "status": "string",
      "statuscode": 0,
      "message": "string",
      "totalitems": "string",
      "itemsperpage": "string"
    },
    "data": null
  }
}
```

<h3 id="delete-preference-values-of-the-current-user-for-the-calling-exapp-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Number of deleted preference values returned|Inline|
|400|Bad Request|Failed to delete the preference values|Inline|
|404|Not Found|No matching preference values were found|Inline|

<h3 id="delete-preference-values-of-the-current-user-for-the-calling-exapp-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|integer(int64)|true|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|

<aside class="warning">
Authentication is optional for this operation. To authenticate, use one of the following methods:
bearer_auth, basic_auth
</aside>

## Get preference values of the current user for the calling ExApp

<a id="opIdpreferences-get-user-config-values"></a>

> Code samples

```bash
curl https://cloud.example.com/ocs/v2.php/apps/app_api/api/v1/ex-app/preference/get-values \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'OCS-APIRequest: true' \
  -d '{
    "configKeys": [
      "string"
    ]
  }'
```

`POST /ocs/v2.php/apps/app_api/api/v1/ex-app/preference/get-values`

> Body parameter

```json
{
  "configKeys": [
    "string"
  ]
}
```

<h3 id="get-preference-values-of-the-current-user-for-the-calling-exapp-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ex-app-id|header|string|false|none|
|OCS-APIRequest|header|boolean|true|Required to be true for the API request to pass|
|body|body|object|true|none|
|» configKeys|body|[string]|true|Preference keys to retrieve|

> Example responses

> 200 Response

```json
{
  "ocs": {
    "meta": {
      "status": "string",
      "statuscode": 0,
      "message": "string",
      "totalitems": "string",
      "itemsperpage": "string"
    },
    "data": [
      {
        "configkey": "string",
        "configvalue": "string"
      }
    ]
  }
}
```

<h3 id="get-preference-values-of-the-current-user-for-the-calling-exapp-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Preference values returned|Inline|

<h3 id="get-preference-values-of-the-current-user-for-the-calling-exapp-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|[[ExAppConfigValue](#schemaexappconfigvalue)]|true|none|none|

<aside class="warning">
Authentication is optional for this operation. To authenticate, use one of the following methods:
bearer_auth, basic_auth
</aside>

<h1 id="appapi-notifications">notifications</h1>

## Send a notification to a user on behalf of the calling ExApp

<a id="opIdnotifications-send-notification"></a>

> Code samples

```bash
curl https://cloud.example.com/ocs/v2.php/apps/app_api/api/v1/notification \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'OCS-APIRequest: true' \
  -d '{
    "params": {
      "property1": {},
      "property2": {}
    }
  }'
```

`POST /ocs/v2.php/apps/app_api/api/v1/notification`

> Body parameter

```json
{
  "params": {
    "property1": {},
    "property2": {}
  }
}
```

<h3 id="send-a-notification-to-a-user-on-behalf-of-the-calling-exapp-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ex-app-id|header|string|false|none|
|authorization-app-api|header|string|false|none|
|OCS-APIRequest|header|boolean|true|Required to be true for the API request to pass|
|body|body|object|true|none|
|» params|body|object|true|Notification parameters|
|» » **additionalProperties**|body|object|false|none|

> Example responses

> 200 Response

```json
{
  "ocs": {
    "meta": {
      "status": "string",
      "statuscode": 0,
      "message": "string",
      "totalitems": "string",
      "itemsperpage": "string"
    },
    "data": {
      "app": "string",
      "user": "string",
      "datetime": "string",
      "object_type": "string",
      "object_id": "string",
      "subject": "string",
      "message": "string",
      "link": "string",
      "icon": "string"
    }
  }
}
```

> 404 Response

```json
{
  "ocs": {
    "meta": {
      "status": "string",
      "statuscode": 0,
      "message": "string",
      "totalitems": "string",
      "itemsperpage": "string"
    },
    "data": null
  }
}
```

<h3 id="send-a-notification-to-a-user-on-behalf-of-the-calling-exapp-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Notification sent|Inline|
|404|Not Found|The notifications app is not enabled, so nothing could deliver the notification|Inline|

<h3 id="send-a-notification-to-a-user-on-behalf-of-the-calling-exapp-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|[Notification](#schemanotification)|true|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|

<aside class="warning">
Authentication is optional for this operation. To authenticate, use one of the following methods:
bearer_auth, basic_auth
</aside>

<h1 id="appapi-occcommand">occ_command</h1>

## Get an occ command of the calling ExApp

<a id="opIdocc_command-get-command"></a>

> Code samples

```bash
curl 'https://cloud.example.com/ocs/v2.php/apps/app_api/api/v1/occ_command?name=string' \
  -H 'Accept: application/json' \
  -H 'OCS-APIRequest: true'
```

`GET /ocs/v2.php/apps/app_api/api/v1/occ_command`

<h3 id="get-an-occ-command-of-the-calling-exapp-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|query|string|true|Name of the command|
|ex-app-id|header|string|false|none|
|OCS-APIRequest|header|boolean|true|Required to be true for the API request to pass|

> Example responses

> 200 Response

```json
{
  "ocs": {
    "meta": {
      "status": "string",
      "statuscode": 0,
      "message": "string",
      "totalitems": "string",
      "itemsperpage": "string"
    },
    "data": {
      "id": 0,
      "appid": "string",
      "name": "string",
      "description": "string",
      "hidden": 0,
      "arguments": [
        {}
      ],
      "options": [
        {}
      ],
      "usages": [
        {}
      ],
      "execute_handler": "string"
    }
  }
}
```

> 404 Response

```json
{
  "ocs": {
    "meta": {
      "status": "string",
      "statuscode": 0,
      "message": "string",
      "totalitems": "string",
      "itemsperpage": "string"
    },
    "data": null
  }
}
```

<h3 id="get-an-occ-command-of-the-calling-exapp-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Command returned|Inline|
|404|Not Found|Command not found|Inline|

<h3 id="get-an-occ-command-of-the-calling-exapp-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|[OccCommand](#schemaocccommand)|true|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|

<aside class="warning">
Authentication is optional for this operation. To authenticate, use one of the following methods:
bearer_auth, basic_auth
</aside>

## Register an occ command for the calling ExApp

<a id="opIdocc_command-register-command"></a>

> Code samples

```bash
curl https://cloud.example.com/ocs/v2.php/apps/app_api/api/v1/occ_command \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'OCS-APIRequest: true' \
  -d '{
    "name": "string",
    "description": "string",
    "execute_handler": "string",
    "hidden": 0,
    "arguments": [],
    "options": [],
    "usages": []
  }'
```

`POST /ocs/v2.php/apps/app_api/api/v1/occ_command`

> Body parameter

```json
{
  "name": "string",
  "description": "string",
  "execute_handler": "string",
  "hidden": 0,
  "arguments": [],
  "options": [],
  "usages": []
}
```

<h3 id="register-an-occ-command-for-the-calling-exapp-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ex-app-id|header|string|false|none|
|OCS-APIRequest|header|boolean|true|Required to be true for the API request to pass|
|body|body|object|true|none|
|» name|body|string|true|Name of the command|
|» description|body|string|true|Description of the command|
|» execute_handler|body|string|true|Handler route called when the command is executed|
|» hidden|body|integer(int64)|false|Whether the command is hidden from the command list (1) or not (0)|
|» arguments|body|[object]|false|Command argument definitions|
|» options|body|[object]|false|Command option definitions|
|» usages|body|[object]|false|Example usages of the command|

> Example responses

> 200 Response

```json
{
  "ocs": {
    "meta": {
      "status": "string",
      "statuscode": 0,
      "message": "string",
      "totalitems": "string",
      "itemsperpage": "string"
    },
    "data": null
  }
}
```

> 400 Response

```json
{
  "ocs": {
    "meta": {
      "status": "string",
      "statuscode": 0,
      "message": "string",
      "totalitems": "string",
      "itemsperpage": "string"
    },
    "data": null
  }
}
```

<h3 id="register-an-occ-command-for-the-calling-exapp-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Command registered|Inline|
|400|Bad Request|Command could not be registered|Inline|

<h3 id="register-an-occ-command-for-the-calling-exapp-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|

<aside class="warning">
Authentication is optional for this operation. To authenticate, use one of the following methods:
bearer_auth, basic_auth
</aside>

## Unregister an occ command of the calling ExApp

<a id="opIdocc_command-unregister-command"></a>

> Code samples

```bash
curl 'https://cloud.example.com/ocs/v2.php/apps/app_api/api/v1/occ_command?name=string' \
  -X DELETE \
  -H 'Accept: application/json' \
  -H 'OCS-APIRequest: true'
```

`DELETE /ocs/v2.php/apps/app_api/api/v1/occ_command`

<h3 id="unregister-an-occ-command-of-the-calling-exapp-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|query|string|true|Name of the command to remove|
|ex-app-id|header|string|false|none|
|OCS-APIRequest|header|boolean|true|Required to be true for the API request to pass|

> Example responses

> 200 Response

```json
{
  "ocs": {
    "meta": {
      "status": "string",
      "statuscode": 0,
      "message": "string",
      "totalitems": "string",
      "itemsperpage": "string"
    },
    "data": null
  }
}
```

> 404 Response

```json
{
  "ocs": {
    "meta": {
      "status": "string",
      "statuscode": 0,
      "message": "string",
      "totalitems": "string",
      "itemsperpage": "string"
    },
    "data": null
  }
}
```

<h3 id="unregister-an-occ-command-of-the-calling-exapp-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Command unregistered|Inline|
|404|Not Found|Command not found|Inline|

<h3 id="unregister-an-occ-command-of-the-calling-exapp-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|

<aside class="warning">
Authentication is optional for this operation. To authenticate, use one of the following methods:
bearer_auth, basic_auth
</aside>

<h1 id="appapi-talkbot">talk_bot</h1>

## Register a Talk bot for the calling ExApp

<a id="opIdtalk_bot-register-ex-app-talk-bot"></a>

> Code samples

```bash
curl https://cloud.example.com/ocs/v2.php/apps/app_api/api/v1/talk_bot \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'OCS-APIRequest: true' \
  -d '{
    "name": "string",
    "route": "string",
    "description": "string"
  }'
```

`POST /ocs/v2.php/apps/app_api/api/v1/talk_bot`

> Body parameter

```json
{
  "name": "string",
  "route": "string",
  "description": "string"
}
```

<h3 id="register-a-talk-bot-for-the-calling-exapp-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ex-app-id|header|string|false|none|
|OCS-APIRequest|header|boolean|true|Required to be true for the API request to pass|
|body|body|object|true|none|
|» name|body|string|true|Bot display name|
|» route|body|string|true|ExApp route that receives bot messages|
|» description|body|string|true|Description of the bot|

> Example responses

> 200 Response

```json
{
  "ocs": {
    "meta": {
      "status": "string",
      "statuscode": 0,
      "message": "string",
      "totalitems": "string",
      "itemsperpage": "string"
    },
    "data": {
      "id": "string",
      "secret": "string"
    }
  }
}
```

> 400 Response

```json
{
  "ocs": {
    "meta": {
      "status": "string",
      "statuscode": 0,
      "message": "string",
      "totalitems": "string",
      "itemsperpage": "string"
    },
    "data": null
  }
}
```

<h3 id="register-a-talk-bot-for-the-calling-exapp-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Talk bot registered|Inline|
|400|Bad Request|Talk bot could not be registered|Inline|

<h3 id="register-a-talk-bot-for-the-calling-exapp-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|[TalkBot](#schematalkbot)|true|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|

<aside class="warning">
Authentication is optional for this operation. To authenticate, use one of the following methods:
bearer_auth, basic_auth
</aside>

## Unregister a Talk bot of the calling ExApp

<a id="opIdtalk_bot-unregister-ex-app-talk-bot"></a>

> Code samples

```bash
curl 'https://cloud.example.com/ocs/v2.php/apps/app_api/api/v1/talk_bot?route=string' \
  -X DELETE \
  -H 'Accept: application/json' \
  -H 'OCS-APIRequest: true'
```

`DELETE /ocs/v2.php/apps/app_api/api/v1/talk_bot`

<h3 id="unregister-a-talk-bot-of-the-calling-exapp-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|route|query|string|true|ExApp route of the bot to remove|
|ex-app-id|header|string|false|none|
|OCS-APIRequest|header|boolean|true|Required to be true for the API request to pass|

> Example responses

> 200 Response

```json
{
  "ocs": {
    "meta": {
      "status": "string",
      "statuscode": 0,
      "message": "string",
      "totalitems": "string",
      "itemsperpage": "string"
    },
    "data": true
  }
}
```

> 404 Response

```json
{
  "ocs": {
    "meta": {
      "status": "string",
      "statuscode": 0,
      "message": "string",
      "totalitems": "string",
      "itemsperpage": "string"
    },
    "data": null
  }
}
```

<h3 id="unregister-a-talk-bot-of-the-calling-exapp-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Talk bot unregistered|Inline|
|404|Not Found|Talk bot could not be unregistered|Inline|

<h3 id="unregister-a-talk-bot-of-the-calling-exapp-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|boolean|true|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|

<aside class="warning">
Authentication is optional for this operation. To authenticate, use one of the following methods:
bearer_auth, basic_auth
</aside>

## Proxy a Talk chat message to the bot of a registered ExApp

<a id="opIdtalk_bot-proxy-talk-message"></a>

> Code samples

```bash
curl https://cloud.example.com/ocs/v2.php/apps/app_api/api/v1/talk_proxy/string/string \
  -X POST \
  -H 'Accept: application/json' \
  -H 'OCS-APIRequest: true'
```

`POST /ocs/v2.php/apps/app_api/api/v1/talk_proxy/{appId}/{route}`

<h3 id="proxy-a-talk-chat-message-to-the-bot-of-a-registered-exapp-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|string|true|ID of the ExApp owning the bot|
|route|path|string|true|ExApp route that receives the message|
|x-nextcloud-talk-random|header|string|false|none|
|x-nextcloud-talk-signature|header|string|false|none|
|OCS-APIRequest|header|boolean|true|Required to be true for the API request to pass|

> Example responses

> 200 Response

```json
{
  "ocs": {
    "meta": {
      "status": "string",
      "statuscode": 0,
      "message": "string",
      "totalitems": "string",
      "itemsperpage": "string"
    },
    "data": null
  }
}
```

> 404 Response

```json
{
  "ocs": {
    "meta": {
      "status": "string",
      "statuscode": 0,
      "message": "string",
      "totalitems": "string",
      "itemsperpage": "string"
    },
    "data": null
  }
}
```

> 500 Response

```json
{
  "ocs": {
    "meta": {
      "status": "string",
      "statuscode": 0,
      "message": "string",
      "totalitems": "string",
      "itemsperpage": "string"
    },
    "data": null
  }
}
```

<h3 id="proxy-a-talk-chat-message-to-the-bot-of-a-registered-exapp-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Message proxied to the ExApp bot|Inline|
|404|Not Found|Invalid signature or unknown bot|Inline|
|500|Internal Server Error|The ExApp bot could not be reached|Inline|

<h3 id="proxy-a-talk-chat-message-to-the-bot-of-a-registered-exapp-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|

<aside class="warning">
Authentication is optional for this operation. To authenticate, use one of the following methods:
bearer_auth, basic_auth
</aside>

<h1 id="appapi-ocsui">ocs_ui</h1>

## Get a files action menu entry of the calling ExApp

<a id="opIdocs_ui-get-file-action-menu"></a>

> Code samples

```bash
curl 'https://cloud.example.com/ocs/v2.php/apps/app_api/api/v1/ui/files-actions-menu?name=string' \
  -H 'Accept: application/json' \
  -H 'OCS-APIRequest: true'
```

`GET /ocs/v2.php/apps/app_api/api/v1/ui/files-actions-menu`

<h3 id="get-a-files-action-menu-entry-of-the-calling-exapp-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|query|string|true|Name of the action|
|ex-app-id|header|string|false|none|
|OCS-APIRequest|header|boolean|true|Required to be true for the API request to pass|

> Example responses

> 200 Response

```json
{
  "ocs": {
    "meta": {
      "status": "string",
      "statuscode": 0,
      "message": "string",
      "totalitems": "string",
      "itemsperpage": "string"
    },
    "data": {
      "id": 0,
      "appid": "string",
      "name": "string",
      "display_name": "string",
      "mime": "string",
      "permissions": "string",
      "order": 0,
      "icon": "string",
      "action_handler": "string",
      "version": "string",
      "default_action": "string"
    }
  }
}
```

> 404 Response

```json
{
  "ocs": {
    "meta": {
      "status": "string",
      "statuscode": 0,
      "message": "string",
      "totalitems": "string",
      "itemsperpage": "string"
    },
    "data": null
  }
}
```

<h3 id="get-a-files-action-menu-entry-of-the-calling-exapp-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|File action menu entry returned|Inline|
|404|Not Found|File action menu entry not found|Inline|

<h3 id="get-a-files-action-menu-entry-of-the-calling-exapp-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|[FileAction](#schemafileaction)|true|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|

<aside class="warning">
Authentication is optional for this operation. To authenticate, use one of the following methods:
bearer_auth, basic_auth
</aside>

## Register a files action menu entry for the calling ExApp

<a id="opIdocs_ui-register-file-action-menu"></a>

> Code samples

```bash
curl https://cloud.example.com/ocs/v2.php/apps/app_api/api/v1/ui/files-actions-menu \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'OCS-APIRequest: true' \
  -d '{
    "name": "string",
    "displayName": "string",
    "actionHandler": "string",
    "icon": "",
    "mime": "file",
    "permissions": 31,
    "order": 0
  }'
```

`POST /ocs/v2.php/apps/app_api/api/v1/ui/files-actions-menu`

<aside class="warning">
This operation is deprecated
</aside>

> Body parameter

```json
{
  "name": "string",
  "displayName": "string",
  "actionHandler": "string",
  "icon": "",
  "mime": "file",
  "permissions": 31,
  "order": 0
}
```

<h3 id="register-a-files-action-menu-entry-for-the-calling-exapp-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ex-app-id|header|string|false|none|
|OCS-APIRequest|header|boolean|true|Required to be true for the API request to pass|
|body|body|object|true|none|
|» name|body|string|true|Unique name of the action|
|» displayName|body|string|true|Human-readable display name|
|» actionHandler|body|string|true|Handler route called when the action is triggered|
|» icon|body|string|false|Icon to display next to the action|
|» mime|body|string|false|Mimetype the action applies to|
|» permissions|body|integer(int64)|false|Required permissions on the file|
|» order|body|integer(int64)|false|Ordering of the action in the menu|

> Example responses

> 200 Response

```json
{
  "ocs": {
    "meta": {
      "status": "string",
      "statuscode": 0,
      "message": "string",
      "totalitems": "string",
      "itemsperpage": "string"
    },
    "data": null
  }
}
```

> 400 Response

```json
{
  "ocs": {
    "meta": {
      "status": "string",
      "statuscode": 0,
      "message": "string",
      "totalitems": "string",
      "itemsperpage": "string"
    },
    "data": null
  }
}
```

<h3 id="register-a-files-action-menu-entry-for-the-calling-exapp-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|File action menu entry registered|Inline|
|400|Bad Request|File action menu entry could not be registered|Inline|

<h3 id="register-a-files-action-menu-entry-for-the-calling-exapp-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|

<aside class="warning">
Authentication is optional for this operation. To authenticate, use one of the following methods:
bearer_auth, basic_auth
</aside>

## Unregister a files action menu entry of the calling ExApp

<a id="opIdocs_ui-unregister-file-action-menu"></a>

> Code samples

```bash
curl 'https://cloud.example.com/ocs/v2.php/apps/app_api/api/v1/ui/files-actions-menu?name=string' \
  -X DELETE \
  -H 'Accept: application/json' \
  -H 'OCS-APIRequest: true'
```

`DELETE /ocs/v2.php/apps/app_api/api/v1/ui/files-actions-menu`

<h3 id="unregister-a-files-action-menu-entry-of-the-calling-exapp-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|query|string|true|Name of the action to remove|
|ex-app-id|header|string|false|none|
|OCS-APIRequest|header|boolean|true|Required to be true for the API request to pass|

> Example responses

> 200 Response

```json
{
  "ocs": {
    "meta": {
      "status": "string",
      "statuscode": 0,
      "message": "string",
      "totalitems": "string",
      "itemsperpage": "string"
    },
    "data": null
  }
}
```

> 404 Response

```json
{
  "ocs": {
    "meta": {
      "status": "string",
      "statuscode": 0,
      "message": "string",
      "totalitems": "string",
      "itemsperpage": "string"
    },
    "data": null
  }
}
```

<h3 id="unregister-a-files-action-menu-entry-of-the-calling-exapp-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|File action menu entry unregistered|Inline|
|404|Not Found|File action menu entry not found|Inline|

<h3 id="unregister-a-files-action-menu-entry-of-the-calling-exapp-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|

<aside class="warning">
Authentication is optional for this operation. To authenticate, use one of the following methods:
bearer_auth, basic_auth
</aside>

## Register a files action menu entry (v2) for the calling ExApp

<a id="opIdocs_ui-register-file-action-menu-v2"></a>

> Code samples

```bash
curl https://cloud.example.com/ocs/v2.php/apps/app_api/api/v2/ui/files-actions-menu \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'OCS-APIRequest: true' \
  -d '{
    "name": "string",
    "displayName": "string",
    "actionHandler": "string",
    "icon": "",
    "mime": "file",
    "permissions": 31,
    "order": 0,
    "defaultAction": ""
  }'
```

`POST /ocs/v2.php/apps/app_api/api/v2/ui/files-actions-menu`

> Body parameter

```json
{
  "name": "string",
  "displayName": "string",
  "actionHandler": "string",
  "icon": "",
  "mime": "file",
  "permissions": 31,
  "order": 0,
  "defaultAction": ""
}
```

<h3 id="register-a-files-action-menu-entry-v2-for-the-calling-exapp-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ex-app-id|header|string|false|none|
|OCS-APIRequest|header|boolean|true|Required to be true for the API request to pass|
|body|body|object|true|none|
|» name|body|string|true|Unique name of the action|
|» displayName|body|string|true|Human-readable display name|
|» actionHandler|body|string|true|Handler route called when the action is triggered|
|» icon|body|string|false|Icon to display next to the action|
|» mime|body|string|false|Mimetype the action applies to|
|» permissions|body|integer(int64)|false|Required permissions on the file|
|» order|body|integer(int64)|false|Ordering of the action in the menu|
|» defaultAction|body|string|false|Whether this is the default action: one of '', 'default' or 'hidden'|

> Example responses

> 200 Response

```json
{
  "ocs": {
    "meta": {
      "status": "string",
      "statuscode": 0,
      "message": "string",
      "totalitems": "string",
      "itemsperpage": "string"
    },
    "data": null
  }
}
```

> 400 Response

```json
{
  "ocs": {
    "meta": {
      "status": "string",
      "statuscode": 0,
      "message": "string",
      "totalitems": "string",
      "itemsperpage": "string"
    },
    "data": null
  }
}
```

<h3 id="register-a-files-action-menu-entry-v2-for-the-calling-exapp-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|File action menu entry registered|Inline|
|400|Bad Request|File action menu entry could not be registered or defaultAction is invalid|Inline|

<h3 id="register-a-files-action-menu-entry-v2-for-the-calling-exapp-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|

<aside class="warning">
Authentication is optional for this operation. To authenticate, use one of the following methods:
bearer_auth, basic_auth
</aside>

## Get a top menu entry of the calling ExApp

<a id="opIdocs_ui-get-ex-app-menu-entry"></a>

> Code samples

```bash
curl 'https://cloud.example.com/ocs/v2.php/apps/app_api/api/v1/ui/top-menu?name=string' \
  -H 'Accept: application/json' \
  -H 'OCS-APIRequest: true'
```

`GET /ocs/v2.php/apps/app_api/api/v1/ui/top-menu`

<h3 id="get-a-top-menu-entry-of-the-calling-exapp-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|query|string|true|Name of the menu entry|
|ex-app-id|header|string|false|none|
|OCS-APIRequest|header|boolean|true|Required to be true for the API request to pass|

> Example responses

> 200 Response

```json
{
  "ocs": {
    "meta": {
      "status": "string",
      "statuscode": 0,
      "message": "string",
      "totalitems": "string",
      "itemsperpage": "string"
    },
    "data": {
      "id": 0,
      "appid": "string",
      "name": "string",
      "display_name": "string",
      "icon": "string",
      "admin_required": 0
    }
  }
}
```

> 404 Response

```json
{
  "ocs": {
    "meta": {
      "status": "string",
      "statuscode": 0,
      "message": "string",
      "totalitems": "string",
      "itemsperpage": "string"
    },
    "data": null
  }
}
```

<h3 id="get-a-top-menu-entry-of-the-calling-exapp-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Top menu entry returned|Inline|
|404|Not Found|Top menu entry not found|Inline|

<h3 id="get-a-top-menu-entry-of-the-calling-exapp-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|[TopMenu](#schematopmenu)|true|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|

<aside class="warning">
Authentication is optional for this operation. To authenticate, use one of the following methods:
bearer_auth, basic_auth
</aside>

## Register a top menu entry for the calling ExApp

<a id="opIdocs_ui-register-ex-app-menu-entry"></a>

> Code samples

```bash
curl https://cloud.example.com/ocs/v2.php/apps/app_api/api/v1/ui/top-menu \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'OCS-APIRequest: true' \
  -d '{
    "name": "string",
    "displayName": "string",
    "icon": "",
    "adminRequired": 0
  }'
```

`POST /ocs/v2.php/apps/app_api/api/v1/ui/top-menu`

> Body parameter

```json
{
  "name": "string",
  "displayName": "string",
  "icon": "",
  "adminRequired": 0
}
```

<h3 id="register-a-top-menu-entry-for-the-calling-exapp-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ex-app-id|header|string|false|none|
|OCS-APIRequest|header|boolean|true|Required to be true for the API request to pass|
|body|body|object|true|none|
|» name|body|string|true|Unique name of the menu entry|
|» displayName|body|string|true|Human-readable display name|
|» icon|body|string|false|Icon to display for the menu entry|
|» adminRequired|body|integer(int64)|false|Whether the entry is only visible to admins (1) or to everyone (0)|

> Example responses

> 200 Response

```json
{
  "ocs": {
    "meta": {
      "status": "string",
      "statuscode": 0,
      "message": "string",
      "totalitems": "string",
      "itemsperpage": "string"
    },
    "data": null
  }
}
```

> 400 Response

```json
{
  "ocs": {
    "meta": {
      "status": "string",
      "statuscode": 0,
      "message": "string",
      "totalitems": "string",
      "itemsperpage": "string"
    },
    "data": null
  }
}
```

<h3 id="register-a-top-menu-entry-for-the-calling-exapp-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Top menu entry registered|Inline|
|400|Bad Request|Top menu entry could not be registered|Inline|

<h3 id="register-a-top-menu-entry-for-the-calling-exapp-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|

<aside class="warning">
Authentication is optional for this operation. To authenticate, use one of the following methods:
bearer_auth, basic_auth
</aside>

## Unregister a top menu entry of the calling ExApp

<a id="opIdocs_ui-unregister-ex-app-menu-entry"></a>

> Code samples

```bash
curl 'https://cloud.example.com/ocs/v2.php/apps/app_api/api/v1/ui/top-menu?name=string' \
  -X DELETE \
  -H 'Accept: application/json' \
  -H 'OCS-APIRequest: true'
```

`DELETE /ocs/v2.php/apps/app_api/api/v1/ui/top-menu`

<h3 id="unregister-a-top-menu-entry-of-the-calling-exapp-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|query|string|true|Name of the menu entry to remove|
|ex-app-id|header|string|false|none|
|OCS-APIRequest|header|boolean|true|Required to be true for the API request to pass|

> Example responses

> 200 Response

```json
{
  "ocs": {
    "meta": {
      "status": "string",
      "statuscode": 0,
      "message": "string",
      "totalitems": "string",
      "itemsperpage": "string"
    },
    "data": null
  }
}
```

> 404 Response

```json
{
  "ocs": {
    "meta": {
      "status": "string",
      "statuscode": 0,
      "message": "string",
      "totalitems": "string",
      "itemsperpage": "string"
    },
    "data": null
  }
}
```

<h3 id="unregister-a-top-menu-entry-of-the-calling-exapp-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Top menu entry unregistered|Inline|
|404|Not Found|Top menu entry not found|Inline|

<h3 id="unregister-a-top-menu-entry-of-the-calling-exapp-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|

<aside class="warning">
Authentication is optional for this operation. To authenticate, use one of the following methods:
bearer_auth, basic_auth
</aside>

## Get an initial state of the calling ExApp

<a id="opIdocs_ui-get-ex-app-initial-state"></a>

> Code samples

```bash
curl 'https://cloud.example.com/ocs/v2.php/apps/app_api/api/v1/ui/initial-state?type=string&name=string&key=string' \
  -H 'Accept: application/json' \
  -H 'OCS-APIRequest: true'
```

`GET /ocs/v2.php/apps/app_api/api/v1/ui/initial-state`

<h3 id="get-an-initial-state-of-the-calling-exapp-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|type|query|string|true|Page type the initial state belongs to|
|name|query|string|true|Name of the page|
|key|query|string|true|Initial state key|
|ex-app-id|header|string|false|none|
|OCS-APIRequest|header|boolean|true|Required to be true for the API request to pass|

> Example responses

> 200 Response

```json
{
  "ocs": {
    "meta": {
      "status": "string",
      "statuscode": 0,
      "message": "string",
      "totalitems": "string",
      "itemsperpage": "string"
    },
    "data": {
      "id": 0,
      "appid": "string",
      "type": "string",
      "name": "string",
      "key": "string",
      "value": {}
    }
  }
}
```

> 404 Response

```json
{
  "ocs": {
    "meta": {
      "status": "string",
      "statuscode": 0,
      "message": "string",
      "totalitems": "string",
      "itemsperpage": "string"
    },
    "data": null
  }
}
```

<h3 id="get-an-initial-state-of-the-calling-exapp-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Initial state returned|Inline|
|404|Not Found|Initial state not found|Inline|

<h3 id="get-an-initial-state-of-the-calling-exapp-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|[InitialState](#schemainitialstate)|true|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|

<aside class="warning">
Authentication is optional for this operation. To authenticate, use one of the following methods:
bearer_auth, basic_auth
</aside>

## Set an initial state for a page of the calling ExApp

<a id="opIdocs_ui-set-ex-app-initial-state"></a>

> Code samples

```bash
curl https://cloud.example.com/ocs/v2.php/apps/app_api/api/v1/ui/initial-state \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'OCS-APIRequest: true' \
  -d '{
    "type": "string",
    "name": "string",
    "key": "string",
    "value": {
      "property1": {},
      "property2": {}
    }
  }'
```

`POST /ocs/v2.php/apps/app_api/api/v1/ui/initial-state`

> Body parameter

```json
{
  "type": "string",
  "name": "string",
  "key": "string",
  "value": {
    "property1": {},
    "property2": {}
  }
}
```

<h3 id="set-an-initial-state-for-a-page-of-the-calling-exapp-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ex-app-id|header|string|false|none|
|OCS-APIRequest|header|boolean|true|Required to be true for the API request to pass|
|body|body|object|true|none|
|» type|body|string|true|Page type the initial state belongs to|
|» name|body|string|true|Name of the page|
|» key|body|string|true|Initial state key|
|» value|body|object|true|Initial state value|
|» » **additionalProperties**|body|object|false|none|

> Example responses

> 200 Response

```json
{
  "ocs": {
    "meta": {
      "status": "string",
      "statuscode": 0,
      "message": "string",
      "totalitems": "string",
      "itemsperpage": "string"
    },
    "data": null
  }
}
```

> 400 Response

```json
{
  "ocs": {
    "meta": {
      "status": "string",
      "statuscode": 0,
      "message": "string",
      "totalitems": "string",
      "itemsperpage": "string"
    },
    "data": null
  }
}
```

<h3 id="set-an-initial-state-for-a-page-of-the-calling-exapp-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Initial state set|Inline|
|400|Bad Request|Initial state could not be set|Inline|

<h3 id="set-an-initial-state-for-a-page-of-the-calling-exapp-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|

<aside class="warning">
Authentication is optional for this operation. To authenticate, use one of the following methods:
bearer_auth, basic_auth
</aside>

## Delete an initial state of the calling ExApp

<a id="opIdocs_ui-delete-ex-app-initial-state"></a>

> Code samples

```bash
curl 'https://cloud.example.com/ocs/v2.php/apps/app_api/api/v1/ui/initial-state?type=string&name=string&key=string' \
  -X DELETE \
  -H 'Accept: application/json' \
  -H 'OCS-APIRequest: true'
```

`DELETE /ocs/v2.php/apps/app_api/api/v1/ui/initial-state`

<h3 id="delete-an-initial-state-of-the-calling-exapp-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|type|query|string|true|Page type the initial state belongs to|
|name|query|string|true|Name of the page|
|key|query|string|true|Initial state key|
|ex-app-id|header|string|false|none|
|OCS-APIRequest|header|boolean|true|Required to be true for the API request to pass|

> Example responses

> 200 Response

```json
{
  "ocs": {
    "meta": {
      "status": "string",
      "statuscode": 0,
      "message": "string",
      "totalitems": "string",
      "itemsperpage": "string"
    },
    "data": null
  }
}
```

> 404 Response

```json
{
  "ocs": {
    "meta": {
      "status": "string",
      "statuscode": 0,
      "message": "string",
      "totalitems": "string",
      "itemsperpage": "string"
    },
    "data": null
  }
}
```

<h3 id="delete-an-initial-state-of-the-calling-exapp-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Initial state deleted|Inline|
|404|Not Found|Initial state not found|Inline|

<h3 id="delete-an-initial-state-of-the-calling-exapp-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|

<aside class="warning">
Authentication is optional for this operation. To authenticate, use one of the following methods:
bearer_auth, basic_auth
</aside>

## Get a script of the calling ExApp

<a id="opIdocs_ui-get-ex-app-script"></a>

> Code samples

```bash
curl 'https://cloud.example.com/ocs/v2.php/apps/app_api/api/v1/ui/script?type=string&name=string&path=string' \
  -H 'Accept: application/json' \
  -H 'OCS-APIRequest: true'
```

`GET /ocs/v2.php/apps/app_api/api/v1/ui/script`

<h3 id="get-a-script-of-the-calling-exapp-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|type|query|string|true|Page type the script belongs to|
|name|query|string|true|Name of the page|
|path|query|string|true|Path to the script file inside the ExApp|
|ex-app-id|header|string|false|none|
|OCS-APIRequest|header|boolean|true|Required to be true for the API request to pass|

> Example responses

> 200 Response

```json
{
  "ocs": {
    "meta": {
      "status": "string",
      "statuscode": 0,
      "message": "string",
      "totalitems": "string",
      "itemsperpage": "string"
    },
    "data": {
      "id": 0,
      "appid": "string",
      "type": "string",
      "name": "string",
      "path": "string",
      "after_app_id": "string"
    }
  }
}
```

> 404 Response

```json
{
  "ocs": {
    "meta": {
      "status": "string",
      "statuscode": 0,
      "message": "string",
      "totalitems": "string",
      "itemsperpage": "string"
    },
    "data": null
  }
}
```

<h3 id="get-a-script-of-the-calling-exapp-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Script returned|Inline|
|404|Not Found|Script not found|Inline|

<h3 id="get-a-script-of-the-calling-exapp-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|[Script](#schemascript)|true|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|

<aside class="warning">
Authentication is optional for this operation. To authenticate, use one of the following methods:
bearer_auth, basic_auth
</aside>

## Register a script for a page of the calling ExApp

<a id="opIdocs_ui-set-ex-app-script"></a>

> Code samples

```bash
curl https://cloud.example.com/ocs/v2.php/apps/app_api/api/v1/ui/script \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'OCS-APIRequest: true' \
  -d '{
    "type": "string",
    "name": "string",
    "path": "string",
    "afterAppId": ""
  }'
```

`POST /ocs/v2.php/apps/app_api/api/v1/ui/script`

> Body parameter

```json
{
  "type": "string",
  "name": "string",
  "path": "string",
  "afterAppId": ""
}
```

<h3 id="register-a-script-for-a-page-of-the-calling-exapp-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ex-app-id|header|string|false|none|
|OCS-APIRequest|header|boolean|true|Required to be true for the API request to pass|
|body|body|object|true|none|
|» type|body|string|true|Page type the script belongs to|
|» name|body|string|true|Name of the page|
|» path|body|string|true|Path to the script file inside the ExApp|
|» afterAppId|body|string|false|Load the script after the script of this app|

> Example responses

> 200 Response

```json
{
  "ocs": {
    "meta": {
      "status": "string",
      "statuscode": 0,
      "message": "string",
      "totalitems": "string",
      "itemsperpage": "string"
    },
    "data": null
  }
}
```

> 400 Response

```json
{
  "ocs": {
    "meta": {
      "status": "string",
      "statuscode": 0,
      "message": "string",
      "totalitems": "string",
      "itemsperpage": "string"
    },
    "data": null
  }
}
```

<h3 id="register-a-script-for-a-page-of-the-calling-exapp-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Script registered|Inline|
|400|Bad Request|Script could not be set|Inline|

<h3 id="register-a-script-for-a-page-of-the-calling-exapp-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|

<aside class="warning">
Authentication is optional for this operation. To authenticate, use one of the following methods:
bearer_auth, basic_auth
</aside>

## Delete a script of the calling ExApp

<a id="opIdocs_ui-delete-ex-app-script"></a>

> Code samples

```bash
curl 'https://cloud.example.com/ocs/v2.php/apps/app_api/api/v1/ui/script?type=string&name=string&path=string' \
  -X DELETE \
  -H 'Accept: application/json' \
  -H 'OCS-APIRequest: true'
```

`DELETE /ocs/v2.php/apps/app_api/api/v1/ui/script`

<h3 id="delete-a-script-of-the-calling-exapp-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|type|query|string|true|Page type the script belongs to|
|name|query|string|true|Name of the page|
|path|query|string|true|Path to the script file inside the ExApp|
|ex-app-id|header|string|false|none|
|OCS-APIRequest|header|boolean|true|Required to be true for the API request to pass|

> Example responses

> 200 Response

```json
{
  "ocs": {
    "meta": {
      "status": "string",
      "statuscode": 0,
      "message": "string",
      "totalitems": "string",
      "itemsperpage": "string"
    },
    "data": null
  }
}
```

> 404 Response

```json
{
  "ocs": {
    "meta": {
      "status": "string",
      "statuscode": 0,
      "message": "string",
      "totalitems": "string",
      "itemsperpage": "string"
    },
    "data": null
  }
}
```

<h3 id="delete-a-script-of-the-calling-exapp-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Script deleted|Inline|
|404|Not Found|Script not found|Inline|

<h3 id="delete-a-script-of-the-calling-exapp-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|

<aside class="warning">
Authentication is optional for this operation. To authenticate, use one of the following methods:
bearer_auth, basic_auth
</aside>

## Get a style of the calling ExApp

<a id="opIdocs_ui-get-ex-app-style"></a>

> Code samples

```bash
curl 'https://cloud.example.com/ocs/v2.php/apps/app_api/api/v1/ui/style?type=string&name=string&path=string' \
  -H 'Accept: application/json' \
  -H 'OCS-APIRequest: true'
```

`GET /ocs/v2.php/apps/app_api/api/v1/ui/style`

<h3 id="get-a-style-of-the-calling-exapp-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|type|query|string|true|Page type the style belongs to|
|name|query|string|true|Name of the page|
|path|query|string|true|Path to the style file inside the ExApp|
|ex-app-id|header|string|false|none|
|OCS-APIRequest|header|boolean|true|Required to be true for the API request to pass|

> Example responses

> 200 Response

```json
{
  "ocs": {
    "meta": {
      "status": "string",
      "statuscode": 0,
      "message": "string",
      "totalitems": "string",
      "itemsperpage": "string"
    },
    "data": {
      "id": 0,
      "appid": "string",
      "type": "string",
      "name": "string",
      "path": "string"
    }
  }
}
```

> 404 Response

```json
{
  "ocs": {
    "meta": {
      "status": "string",
      "statuscode": 0,
      "message": "string",
      "totalitems": "string",
      "itemsperpage": "string"
    },
    "data": null
  }
}
```

<h3 id="get-a-style-of-the-calling-exapp-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Style returned|Inline|
|404|Not Found|Style not found|Inline|

<h3 id="get-a-style-of-the-calling-exapp-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|[Style](#schemastyle)|true|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|

<aside class="warning">
Authentication is optional for this operation. To authenticate, use one of the following methods:
bearer_auth, basic_auth
</aside>

## Register a style for a page of the calling ExApp

<a id="opIdocs_ui-set-ex-app-style"></a>

> Code samples

```bash
curl https://cloud.example.com/ocs/v2.php/apps/app_api/api/v1/ui/style \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'OCS-APIRequest: true' \
  -d '{
    "type": "string",
    "name": "string",
    "path": "string"
  }'
```

`POST /ocs/v2.php/apps/app_api/api/v1/ui/style`

> Body parameter

```json
{
  "type": "string",
  "name": "string",
  "path": "string"
}
```

<h3 id="register-a-style-for-a-page-of-the-calling-exapp-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ex-app-id|header|string|false|none|
|OCS-APIRequest|header|boolean|true|Required to be true for the API request to pass|
|body|body|object|true|none|
|» type|body|string|true|Page type the style belongs to|
|» name|body|string|true|Name of the page|
|» path|body|string|true|Path to the style file inside the ExApp|

> Example responses

> 200 Response

```json
{
  "ocs": {
    "meta": {
      "status": "string",
      "statuscode": 0,
      "message": "string",
      "totalitems": "string",
      "itemsperpage": "string"
    },
    "data": null
  }
}
```

> 400 Response

```json
{
  "ocs": {
    "meta": {
      "status": "string",
      "statuscode": 0,
      "message": "string",
      "totalitems": "string",
      "itemsperpage": "string"
    },
    "data": null
  }
}
```

<h3 id="register-a-style-for-a-page-of-the-calling-exapp-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Style registered|Inline|
|400|Bad Request|Style could not be set|Inline|

<h3 id="register-a-style-for-a-page-of-the-calling-exapp-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|

<aside class="warning">
Authentication is optional for this operation. To authenticate, use one of the following methods:
bearer_auth, basic_auth
</aside>

## Delete a style of the calling ExApp

<a id="opIdocs_ui-delete-ex-app-style"></a>

> Code samples

```bash
curl 'https://cloud.example.com/ocs/v2.php/apps/app_api/api/v1/ui/style?type=string&name=string&path=string' \
  -X DELETE \
  -H 'Accept: application/json' \
  -H 'OCS-APIRequest: true'
```

`DELETE /ocs/v2.php/apps/app_api/api/v1/ui/style`

<h3 id="delete-a-style-of-the-calling-exapp-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|type|query|string|true|Page type the style belongs to|
|name|query|string|true|Name of the page|
|path|query|string|true|Path to the style file inside the ExApp|
|ex-app-id|header|string|false|none|
|OCS-APIRequest|header|boolean|true|Required to be true for the API request to pass|

> Example responses

> 200 Response

```json
{
  "ocs": {
    "meta": {
      "status": "string",
      "statuscode": 0,
      "message": "string",
      "totalitems": "string",
      "itemsperpage": "string"
    },
    "data": null
  }
}
```

> 404 Response

```json
{
  "ocs": {
    "meta": {
      "status": "string",
      "statuscode": 0,
      "message": "string",
      "totalitems": "string",
      "itemsperpage": "string"
    },
    "data": null
  }
}
```

<h3 id="delete-a-style-of-the-calling-exapp-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Style deleted|Inline|
|404|Not Found|Style not found|Inline|

<h3 id="delete-a-style-of-the-calling-exapp-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|

<aside class="warning">
Authentication is optional for this operation. To authenticate, use one of the following methods:
bearer_auth, basic_auth
</aside>

<h1 id="appapi-ocssettings">ocs_settings</h1>

## Get a declarative settings form of the calling ExApp

<a id="opIdocs_settings-get-form"></a>

> Code samples

```bash
curl 'https://cloud.example.com/ocs/v2.php/apps/app_api/api/v1/ui/settings?formId=string' \
  -H 'Accept: application/json' \
  -H 'OCS-APIRequest: true'
```

`GET /ocs/v2.php/apps/app_api/api/v1/ui/settings`

<h3 id="get-a-declarative-settings-form-of-the-calling-exapp-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|formId|query|string|true|ID of the settings form|
|ex-app-id|header|string|false|none|
|OCS-APIRequest|header|boolean|true|Required to be true for the API request to pass|

> Example responses

> 200 Response

```json
{
  "ocs": {
    "meta": {
      "status": "string",
      "statuscode": 0,
      "message": "string",
      "totalitems": "string",
      "itemsperpage": "string"
    },
    "data": {
      "property1": {},
      "property2": {}
    }
  }
}
```

> 404 Response

```json
{
  "ocs": {
    "meta": {
      "status": "string",
      "statuscode": 0,
      "message": "string",
      "totalitems": "string",
      "itemsperpage": "string"
    },
    "data": null
  }
}
```

<h3 id="get-a-declarative-settings-form-of-the-calling-exapp-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Settings form returned|Inline|
|404|Not Found|Settings form not found|Inline|

<h3 id="get-a-declarative-settings-form-of-the-calling-exapp-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|
|» » **additionalProperties**|object|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|

<aside class="warning">
Authentication is optional for this operation. To authenticate, use one of the following methods:
bearer_auth, basic_auth
</aside>

## Register a declarative settings form for the calling ExApp

<a id="opIdocs_settings-register-form"></a>

> Code samples

```bash
curl https://cloud.example.com/ocs/v2.php/apps/app_api/api/v1/ui/settings \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'OCS-APIRequest: true' \
  -d '{
    "formScheme": {
      "property1": {},
      "property2": {}
    }
  }'
```

`POST /ocs/v2.php/apps/app_api/api/v1/ui/settings`

> Body parameter

```json
{
  "formScheme": {
    "property1": {},
    "property2": {}
  }
}
```

<h3 id="register-a-declarative-settings-form-for-the-calling-exapp-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ex-app-id|header|string|false|none|
|OCS-APIRequest|header|boolean|true|Required to be true for the API request to pass|
|body|body|object|true|none|
|» formScheme|body|object|true|Declarative settings form scheme|
|» » **additionalProperties**|body|object|false|none|

> Example responses

> 200 Response

```json
{
  "ocs": {
    "meta": {
      "status": "string",
      "statuscode": 0,
      "message": "string",
      "totalitems": "string",
      "itemsperpage": "string"
    },
    "data": null
  }
}
```

> 400 Response

```json
{
  "ocs": {
    "meta": {
      "status": "string",
      "statuscode": 0,
      "message": "string",
      "totalitems": "string",
      "itemsperpage": "string"
    },
    "data": null
  }
}
```

<h3 id="register-a-declarative-settings-form-for-the-calling-exapp-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Settings form registered|Inline|
|400|Bad Request|Settings form could not be registered|Inline|

<h3 id="register-a-declarative-settings-form-for-the-calling-exapp-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|

<aside class="warning">
Authentication is optional for this operation. To authenticate, use one of the following methods:
bearer_auth, basic_auth
</aside>

## Unregister a declarative settings form of the calling ExApp

<a id="opIdocs_settings-unregister-form"></a>

> Code samples

```bash
curl 'https://cloud.example.com/ocs/v2.php/apps/app_api/api/v1/ui/settings?formId=string' \
  -X DELETE \
  -H 'Accept: application/json' \
  -H 'OCS-APIRequest: true'
```

`DELETE /ocs/v2.php/apps/app_api/api/v1/ui/settings`

<h3 id="unregister-a-declarative-settings-form-of-the-calling-exapp-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|formId|query|string|true|ID of the settings form to remove|
|ex-app-id|header|string|false|none|
|OCS-APIRequest|header|boolean|true|Required to be true for the API request to pass|

> Example responses

> 200 Response

```json
{
  "ocs": {
    "meta": {
      "status": "string",
      "statuscode": 0,
      "message": "string",
      "totalitems": "string",
      "itemsperpage": "string"
    },
    "data": null
  }
}
```

> 404 Response

```json
{
  "ocs": {
    "meta": {
      "status": "string",
      "statuscode": 0,
      "message": "string",
      "totalitems": "string",
      "itemsperpage": "string"
    },
    "data": null
  }
}
```

<h3 id="unregister-a-declarative-settings-form-of-the-calling-exapp-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Settings form unregistered|Inline|
|404|Not Found|Settings form not found|Inline|

<h3 id="unregister-a-declarative-settings-form-of-the-calling-exapp-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|

<aside class="warning">
Authentication is optional for this operation. To authenticate, use one of the following methods:
bearer_auth, basic_auth
</aside>

<h1 id="appapi-taskprocessing">task_processing</h1>

## Get a Task Processing provider of the calling ExApp

<a id="opIdtask_processing-get-provider"></a>

> Code samples

```bash
curl 'https://cloud.example.com/ocs/v2.php/apps/app_api/api/v1/ai_provider/task_processing?name=string' \
  -H 'Accept: application/json' \
  -H 'OCS-APIRequest: true'
```

`GET /ocs/v2.php/apps/app_api/api/v1/ai_provider/task_processing`

<h3 id="get-a-task-processing-provider-of-the-calling-exapp-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|query|string|true|Name of the provider|
|ex-app-id|header|string|false|none|
|OCS-APIRequest|header|boolean|true|Required to be true for the API request to pass|

> Example responses

> 200 Response

```json
{
  "ocs": {
    "meta": {
      "status": "string",
      "statuscode": 0,
      "message": "string",
      "totalitems": "string",
      "itemsperpage": "string"
    },
    "data": {
      "id": 0,
      "app_id": "string",
      "name": "string",
      "display_name": "string",
      "task_type": "string",
      "provider": "string",
      "custom_task_type": "string"
    }
  }
}
```

> 404 Response

```json
{
  "ocs": {
    "meta": {
      "status": "string",
      "statuscode": 0,
      "message": "string",
      "totalitems": "string",
      "itemsperpage": "string"
    },
    "data": null
  }
}
```

<h3 id="get-a-task-processing-provider-of-the-calling-exapp-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Provider returned|Inline|
|404|Not Found|Provider not found|Inline|

<h3 id="get-a-task-processing-provider-of-the-calling-exapp-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|[TaskProcessingProvider](#schemataskprocessingprovider)|true|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|

<aside class="warning">
Authentication is optional for this operation. To authenticate, use one of the following methods:
bearer_auth, basic_auth
</aside>

## Register a Task Processing provider for the calling ExApp

<a id="opIdtask_processing-register-provider"></a>

> Code samples

```bash
curl https://cloud.example.com/ocs/v2.php/apps/app_api/api/v1/ai_provider/task_processing \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'OCS-APIRequest: true' \
  -d '{
    "provider": {
      "property1": {},
      "property2": {}
    },
    "customTaskType": {
      "property1": {},
      "property2": {}
    }
  }'
```

`POST /ocs/v2.php/apps/app_api/api/v1/ai_provider/task_processing`

> Body parameter

```json
{
  "provider": {
    "property1": {},
    "property2": {}
  },
  "customTaskType": {
    "property1": {},
    "property2": {}
  }
}
```

<h3 id="register-a-task-processing-provider-for-the-calling-exapp-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ex-app-id|header|string|false|none|
|OCS-APIRequest|header|boolean|true|Required to be true for the API request to pass|
|body|body|object|true|none|
|» provider|body|object|true|Task Processing provider definition|
|» » **additionalProperties**|body|object|false|none|
|» customTaskType|body|object \| null|false|Custom task type definition, or null|
|» » **additionalProperties**|body|object|false|none|

> Example responses

> 200 Response

```json
{
  "ocs": {
    "meta": {
      "status": "string",
      "statuscode": 0,
      "message": "string",
      "totalitems": "string",
      "itemsperpage": "string"
    },
    "data": null
  }
}
```

> 400 Response

```json
{
  "ocs": {
    "meta": {
      "status": "string",
      "statuscode": 0,
      "message": "string",
      "totalitems": "string",
      "itemsperpage": "string"
    },
    "data": null
  }
}
```

<h3 id="register-a-task-processing-provider-for-the-calling-exapp-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Provider registered|Inline|
|400|Bad Request|Provider could not be registered|Inline|

<h3 id="register-a-task-processing-provider-for-the-calling-exapp-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|

<aside class="warning">
Authentication is optional for this operation. To authenticate, use one of the following methods:
bearer_auth, basic_auth
</aside>

## Unregister a Task Processing provider of the calling ExApp

<a id="opIdtask_processing-unregister-provider"></a>

> Code samples

```bash
curl 'https://cloud.example.com/ocs/v2.php/apps/app_api/api/v1/ai_provider/task_processing?name=string' \
  -X DELETE \
  -H 'Accept: application/json' \
  -H 'OCS-APIRequest: true'
```

`DELETE /ocs/v2.php/apps/app_api/api/v1/ai_provider/task_processing`

<h3 id="unregister-a-task-processing-provider-of-the-calling-exapp-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|query|string|true|Name of the provider to remove|
|ex-app-id|header|string|false|none|
|OCS-APIRequest|header|boolean|true|Required to be true for the API request to pass|

> Example responses

> 200 Response

```json
{
  "ocs": {
    "meta": {
      "status": "string",
      "statuscode": 0,
      "message": "string",
      "totalitems": "string",
      "itemsperpage": "string"
    },
    "data": null
  }
}
```

> 404 Response

```json
{
  "ocs": {
    "meta": {
      "status": "string",
      "statuscode": 0,
      "message": "string",
      "totalitems": "string",
      "itemsperpage": "string"
    },
    "data": null
  }
}
```

<h3 id="unregister-a-task-processing-provider-of-the-calling-exapp-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Provider unregistered|Inline|
|404|Not Found|Provider not found|Inline|

<h3 id="unregister-a-task-processing-provider-of-the-calling-exapp-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|

<aside class="warning">
Authentication is optional for this operation. To authenticate, use one of the following methods:
bearer_auth, basic_auth
</aside>

<h1 id="appapi-setupcheck">setup_check</h1>

## Opt the calling ExApp in to setup checks

<a id="opIdsetup_check-register-checks"></a>

> Code samples

```bash
curl https://cloud.example.com/ocs/v2.php/apps/app_api/api/v1/setup_check \
  -X POST \
  -H 'Accept: application/json' \
  -H 'OCS-APIRequest: true'
```

`POST /ocs/v2.php/apps/app_api/api/v1/setup_check`

The ExApp is identified from the authenticated `ex-app-id` header, so it can only ever opt itself in. Its live results are then fetched from the ExApp's `/setup_checks` endpoint by a background job and surfaced in the admin "Security & setup warnings" panel.

<h3 id="opt-the-calling-exapp-in-to-setup-checks-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ex-app-id|header|string|false|none|
|OCS-APIRequest|header|boolean|true|Required to be true for the API request to pass|

> Example responses

> 200 Response

```json
{
  "ocs": {
    "meta": {
      "status": "string",
      "statuscode": 0,
      "message": "string",
      "totalitems": "string",
      "itemsperpage": "string"
    },
    "data": null
  }
}
```

<h3 id="opt-the-calling-exapp-in-to-setup-checks-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|ExApp opted in to setup checks|Inline|

<h3 id="opt-the-calling-exapp-in-to-setup-checks-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|

<aside class="warning">
Authentication is optional for this operation. To authenticate, use one of the following methods:
bearer_auth, basic_auth
</aside>

## Opt the calling ExApp out of setup checks

<a id="opIdsetup_check-unregister-checks"></a>

> Code samples

```bash
curl https://cloud.example.com/ocs/v2.php/apps/app_api/api/v1/setup_check \
  -X DELETE \
  -H 'Accept: application/json' \
  -H 'OCS-APIRequest: true'
```

`DELETE /ocs/v2.php/apps/app_api/api/v1/setup_check`

<h3 id="opt-the-calling-exapp-out-of-setup-checks-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ex-app-id|header|string|false|none|
|OCS-APIRequest|header|boolean|true|Required to be true for the API request to pass|

> Example responses

> 200 Response

```json
{
  "ocs": {
    "meta": {
      "status": "string",
      "statuscode": 0,
      "message": "string",
      "totalitems": "string",
      "itemsperpage": "string"
    },
    "data": null
  }
}
```

<h3 id="opt-the-calling-exapp-out-of-setup-checks-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|ExApp opted out of setup checks|Inline|

<h3 id="opt-the-calling-exapp-out-of-setup-checks-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|

<aside class="warning">
Authentication is optional for this operation. To authenticate, use one of the following methods:
bearer_auth, basic_auth
</aside>

# Schemas

<h2 id="tocS_Capabilities">Capabilities</h2>
<!-- backwards compatibility -->
<a id="schemacapabilities"></a>
<a id="schema_Capabilities"></a>
<a id="tocScapabilities"></a>
<a id="tocscapabilities"></a>

```json
{
  "app_api": {
    "loglevel": 0,
    "version": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|app_api|object|true|none|none|

<h2 id="tocS_ExAppConfig">ExAppConfig</h2>
<!-- backwards compatibility -->
<a id="schemaexappconfig"></a>
<a id="schema_ExAppConfig"></a>
<a id="tocSexappconfig"></a>
<a id="tocsexappconfig"></a>

```json
{
  "id": 0,
  "appid": "string",
  "configkey": "string",
  "configvalue": "string",
  "sensitive": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int64)|true|none|none|
|appid|string|true|none|none|
|configkey|string|true|none|none|
|configvalue|string|true|none|none|
|sensitive|integer(int64)|true|none|none|

<h2 id="tocS_ExAppConfigValue">ExAppConfigValue</h2>
<!-- backwards compatibility -->
<a id="schemaexappconfigvalue"></a>
<a id="schema_ExAppConfigValue"></a>
<a id="tocSexappconfigvalue"></a>
<a id="tocsexappconfigvalue"></a>

```json
{
  "configkey": "string",
  "configvalue": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|configkey|string|true|none|none|
|configvalue|string|true|none|none|

<h2 id="tocS_ExAppPreference">ExAppPreference</h2>
<!-- backwards compatibility -->
<a id="schemaexapppreference"></a>
<a id="schema_ExAppPreference"></a>
<a id="tocSexapppreference"></a>
<a id="tocsexapppreference"></a>

```json
{
  "id": 0,
  "user_id": "string",
  "appid": "string",
  "configkey": "string",
  "configvalue": "string",
  "sensitive": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int64)|true|none|none|
|user_id|string|true|none|none|
|appid|string|true|none|none|
|configkey|string|true|none|none|
|configvalue|string|true|none|none|
|sensitive|integer(int64)|true|none|none|

<h2 id="tocS_FileAction">FileAction</h2>
<!-- backwards compatibility -->
<a id="schemafileaction"></a>
<a id="schema_FileAction"></a>
<a id="tocSfileaction"></a>
<a id="tocsfileaction"></a>

```json
{
  "id": 0,
  "appid": "string",
  "name": "string",
  "display_name": "string",
  "mime": "string",
  "permissions": "string",
  "order": 0,
  "icon": "string",
  "action_handler": "string",
  "version": "string",
  "default_action": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int64)|true|none|none|
|appid|string|true|none|none|
|name|string|true|none|none|
|display_name|string|true|none|none|
|mime|string|true|none|none|
|permissions|string|true|none|none|
|order|integer(int64)|true|none|none|
|icon|string|true|none|none|
|action_handler|string|true|none|none|
|version|string|true|none|none|
|default_action|string \| null|true|none|none|

<h2 id="tocS_InitialState">InitialState</h2>
<!-- backwards compatibility -->
<a id="schemainitialstate"></a>
<a id="schema_InitialState"></a>
<a id="tocSinitialstate"></a>
<a id="tocsinitialstate"></a>

```json
{
  "id": 0,
  "appid": "string",
  "type": "string",
  "name": "string",
  "key": "string",
  "value": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int64)|true|none|none|
|appid|string|true|none|none|
|type|string|true|none|none|
|name|string|true|none|none|
|key|string|true|none|none|
|value|object|true|none|none|

<h2 id="tocS_Notification">Notification</h2>
<!-- backwards compatibility -->
<a id="schemanotification"></a>
<a id="schema_Notification"></a>
<a id="tocSnotification"></a>
<a id="tocsnotification"></a>

```json
{
  "app": "string",
  "user": "string",
  "datetime": "string",
  "object_type": "string",
  "object_id": "string",
  "subject": "string",
  "message": "string",
  "link": "string",
  "icon": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|app|string|true|none|none|
|user|string|true|none|none|
|datetime|string|true|none|none|
|object_type|string|true|none|none|
|object_id|string|true|none|none|
|subject|string|true|none|none|
|message|string|true|none|none|
|link|string|true|none|none|
|icon|string|true|none|none|

<h2 id="tocS_OCSMeta">OCSMeta</h2>
<!-- backwards compatibility -->
<a id="schemaocsmeta"></a>
<a id="schema_OCSMeta"></a>
<a id="tocSocsmeta"></a>
<a id="tocsocsmeta"></a>

```json
{
  "status": "string",
  "statuscode": 0,
  "message": "string",
  "totalitems": "string",
  "itemsperpage": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|string|true|none|none|
|statuscode|integer|true|none|none|
|message|string|false|none|none|
|totalitems|string|false|none|none|
|itemsperpage|string|false|none|none|

<h2 id="tocS_OccCommand">OccCommand</h2>
<!-- backwards compatibility -->
<a id="schemaocccommand"></a>
<a id="schema_OccCommand"></a>
<a id="tocSocccommand"></a>
<a id="tocsocccommand"></a>

```json
{
  "id": 0,
  "appid": "string",
  "name": "string",
  "description": "string",
  "hidden": 0,
  "arguments": [
    {}
  ],
  "options": [
    {}
  ],
  "usages": [
    {}
  ],
  "execute_handler": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int64)|true|none|none|
|appid|string|true|none|none|
|name|string|true|none|none|
|description|string|true|none|none|
|hidden|integer(int64)|true|none|none|
|arguments|[object]|true|none|none|
|options|[object]|true|none|none|
|usages|[object]|true|none|none|
|execute_handler|string|true|none|none|

<h2 id="tocS_PublicCapabilities">PublicCapabilities</h2>
<!-- backwards compatibility -->
<a id="schemapubliccapabilities"></a>
<a id="schema_PublicCapabilities"></a>
<a id="tocSpubliccapabilities"></a>
<a id="tocspubliccapabilities"></a>

```json
{
  "app_api": {
    "version": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|app_api|object|true|none|none|

<h2 id="tocS_Script">Script</h2>
<!-- backwards compatibility -->
<a id="schemascript"></a>
<a id="schema_Script"></a>
<a id="tocSscript"></a>
<a id="tocsscript"></a>

```json
{
  "id": 0,
  "appid": "string",
  "type": "string",
  "name": "string",
  "path": "string",
  "after_app_id": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int64)|true|none|none|
|appid|string|true|none|none|
|type|string|true|none|none|
|name|string|true|none|none|
|path|string|true|none|none|
|after_app_id|string|true|none|none|

<h2 id="tocS_Style">Style</h2>
<!-- backwards compatibility -->
<a id="schemastyle"></a>
<a id="schema_Style"></a>
<a id="tocSstyle"></a>
<a id="tocsstyle"></a>

```json
{
  "id": 0,
  "appid": "string",
  "type": "string",
  "name": "string",
  "path": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int64)|true|none|none|
|appid|string|true|none|none|
|type|string|true|none|none|
|name|string|true|none|none|
|path|string|true|none|none|

<h2 id="tocS_TalkBot">TalkBot</h2>
<!-- backwards compatibility -->
<a id="schematalkbot"></a>
<a id="schema_TalkBot"></a>
<a id="tocStalkbot"></a>
<a id="tocstalkbot"></a>

```json
{
  "id": "string",
  "secret": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|
|secret|string|true|none|none|

<h2 id="tocS_TaskProcessingProvider">TaskProcessingProvider</h2>
<!-- backwards compatibility -->
<a id="schemataskprocessingprovider"></a>
<a id="schema_TaskProcessingProvider"></a>
<a id="tocStaskprocessingprovider"></a>
<a id="tocstaskprocessingprovider"></a>

```json
{
  "id": 0,
  "app_id": "string",
  "name": "string",
  "display_name": "string",
  "task_type": "string",
  "provider": "string",
  "custom_task_type": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int64) \| null|true|none|none|
|app_id|string \| null|true|none|none|
|name|string \| null|true|none|none|
|display_name|string \| null|true|none|none|
|task_type|string \| null|true|none|none|
|provider|string \| null|true|none|none|
|custom_task_type|string \| null|true|none|none|

<h2 id="tocS_TopMenu">TopMenu</h2>
<!-- backwards compatibility -->
<a id="schematopmenu"></a>
<a id="schema_TopMenu"></a>
<a id="tocStopmenu"></a>
<a id="tocstopmenu"></a>

```json
{
  "id": 0,
  "appid": "string",
  "name": "string",
  "display_name": "string",
  "icon": "string",
  "admin_required": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int64)|true|none|none|
|appid|string|true|none|none|
|name|string|true|none|none|
|display_name|string|true|none|none|
|icon|string|true|none|none|
|admin_required|integer(int64)|true|none|none|
