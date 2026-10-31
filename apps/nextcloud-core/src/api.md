<h1 id="core-full">core-full v0.0.1</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Core functionality of Nextcloud

License: agpl

# Authentication

- HTTP Authentication, scheme: basic

- HTTP Authentication, scheme: bearer

<h1 id="core-full-ocs">ocs</h1>

If you are here because you can't extend the OCSController class, you got the wrong one. Please use {@see \OCP\AppFramework\OCSController}!

## Get the capabilities

<a id="opIdocs-get-capabilities"></a>

> Code samples

```bash
curl https://cloud.example.com/ocs/v2.php/cloud/capabilities \
  -H 'Accept: application/json' \
  -H 'OCS-APIRequest: true'
```

`GET /ocs/v2.php/cloud/capabilities`

<h3 id="get-the-capabilities-parameters">Parameters</h3>

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
    "data": {
      "version": {
        "major": 0,
        "minor": 0,
        "micro": 0,
        "string": "string",
        "edition": "string",
        "extendedSupport": true
      },
      "capabilities": {
        "property1": {},
        "property2": {}
      }
    }
  }
}
```

<h3 id="get-the-capabilities-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Capabilities returned|Inline|

<h3 id="get-the-capabilities-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|
|» » version|object|true|none|none|
|» » » major|integer(int64)|true|none|none|
|» » » minor|integer(int64)|true|none|none|
|» » » micro|integer(int64)|true|none|none|
|» » » string|string|true|none|none|
|» » » edition|string|true|none|none|
|» » » extendedSupport|boolean|true|none|none|
|» » capabilities|object|true|none|none|
|» » » **additionalProperties**|object|false|none|none|

<aside class="warning">
Authentication is optional for this operation. To authenticate, use one of the following methods:
bearer_auth, basic_auth
</aside>

<h1 id="core-full-avatar">avatar</h1>

Class AvatarController

## Get the dark avatar

<a id="opIdavatar-get-avatar-dark"></a>

> Code samples

```bash
curl https://cloud.example.com/index.php/avatar/string/64/dark \
  -H 'Accept: application/json'
```

`GET /index.php/avatar/{userId}/{size}/dark`

<h3 id="get-the-dark-avatar-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userId|path|string|true|ID of the user|
|size|path|integer(int64)|true|Size of the avatar|
|guestFallback|query|boolean|false|Fallback to guest avatar if not found|
|v|query|string|false|Avatar version, which lets the response be cached for longer. A stale version still returns the current avatar|

#### Enumerated Values

|Parameter|Value|
|---|---|
|size|64|
|size|512|

> Example responses

> 404 Response

```json
null
```

<h3 id="get-the-dark-avatar-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Avatar returned|Inline|
|201|Created|Avatar returned|Inline|
|404|Not Found|Avatar not found|Inline|
|500|Internal Server Error||None|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-NC-IsCustomAvatar|integer|int64|none|
|201|X-NC-IsCustomAvatar|integer|int64|none|

<aside class="warning">
Authentication is optional for this operation. To authenticate, use one of the following methods:
bearer_auth, basic_auth
</aside>

## Get the avatar

<a id="opIdavatar-get-avatar"></a>

> Code samples

```bash
curl https://cloud.example.com/index.php/avatar/string/64 \
  -H 'Accept: application/json'
```

`GET /index.php/avatar/{userId}/{size}`

<h3 id="get-the-avatar-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userId|path|string|true|ID of the user|
|size|path|integer(int64)|true|Size of the avatar|
|guestFallback|query|boolean|false|Fallback to guest avatar if not found|
|v|query|string|false|Avatar version, which lets the response be cached for longer. A stale version still returns the current avatar|

#### Enumerated Values

|Parameter|Value|
|---|---|
|size|64|
|size|512|

> Example responses

> 404 Response

```json
null
```

<h3 id="get-the-avatar-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Avatar returned|Inline|
|201|Created|Avatar returned|Inline|
|404|Not Found|Avatar not found|Inline|
|500|Internal Server Error||None|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-NC-IsCustomAvatar|integer|int64|none|
|201|X-NC-IsCustomAvatar|integer|int64|none|

<aside class="warning">
Authentication is optional for this operation. To authenticate, use one of the following methods:
bearer_auth, basic_auth
</aside>

<h1 id="core-full-guestavatar">guest_avatar</h1>

This controller handles guest avatar requests.

## Returns a guest avatar image response

<a id="opIdguest_avatar-get-avatar"></a>

> Code samples

```bash
curl https://cloud.example.com/index.php/avatar/guest/string/64
```

`GET /index.php/avatar/guest/{guestName}/{size}`

<h3 id="returns-a-guest-avatar-image-response-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|guestName|path|string|true|The guest name, e.g. "Albert"|
|size|path|integer(int64)|true|The desired avatar size, e.g. 64 for 64x64px|
|darkTheme|query|boolean \| null|false|Return dark avatar|

#### Enumerated Values

|Parameter|Value|
|---|---|
|size|64|
|size|512|

<h3 id="returns-a-guest-avatar-image-response-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Custom avatar returned|Inline|
|201|Created|Avatar returned|Inline|
|500|Internal Server Error||None|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-NC-IsCustomAvatar|integer|int64|none|
|201|X-NC-IsCustomAvatar|integer|int64|none|

<aside class="warning">
Authentication is optional for this operation. To authenticate, use one of the following methods:
bearer_auth, basic_auth
</aside>

## Returns a dark guest avatar image response

<a id="opIdguest_avatar-get-avatar-dark"></a>

> Code samples

```bash
curl https://cloud.example.com/index.php/avatar/guest/string/64/dark
```

`GET /index.php/avatar/guest/{guestName}/{size}/dark`

<h3 id="returns-a-dark-guest-avatar-image-response-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|guestName|path|string|true|The guest name, e.g. "Albert"|
|size|path|integer(int64)|true|The desired avatar size, e.g. 64 for 64x64px|

#### Enumerated Values

|Parameter|Value|
|---|---|
|size|64|
|size|512|

<h3 id="returns-a-dark-guest-avatar-image-response-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Custom avatar returned|Inline|
|201|Created|Avatar returned|Inline|
|500|Internal Server Error||None|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-NC-IsCustomAvatar|integer|int64|none|
|201|X-NC-IsCustomAvatar|integer|int64|none|

<aside class="warning">
Authentication is optional for this operation. To authenticate, use one of the following methods:
bearer_auth, basic_auth
</aside>

<h1 id="core-full-ocm">ocm</h1>

Controller about the endpoint /ocm-provider/

## generate a OCMProvider with local data and send it as DataResponse. This replaces the old PHP file ocm-provider/index.php

<a id="opIdocm-discovery"></a>

> Code samples

```bash
curl https://cloud.example.com/index.php/ocm-provider \
  -H 'Accept: application/json'
```

`GET /index.php/ocm-provider`

> Example responses

> 200 Response

```json
{
  "enabled": true,
  "apiVersion": "string",
  "endPoint": "string",
  "resourceTypes": [
    {
      "name": "string",
      "shareTypes": [
        "string"
      ],
      "protocols": {
        "webdav": "string"
      }
    }
  ]
}
```

> 500 Response

```json
{
  "message": "string"
}
```

<h3 id="generate-a-ocmprovider-with-local-data-and-send-it-as-dataresponse-this-replaces-the-old-php-file-ocm-providerindexphp-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OCM Provider details returned|Inline|
|500|Internal Server Error|OCM not supported|Inline|

<h3 id="generate-a-ocmprovider-with-local-data-and-send-it-as-dataresponse-this-replaces-the-old-php-file-ocm-providerindexphp-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|enabled|boolean|true|none|none|
|apiVersion|string|true|none|none|
|endPoint|string|true|none|none|
|resourceTypes|[object]|true|none|none|
|» name|string|true|none|none|
|» shareTypes|[string]|true|none|none|
|» protocols|object|true|none|none|
|» » webdav|string|true|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|true|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-NEXTCLOUD-OCM-PROVIDERS|boolean||none|

<aside class="warning">
Authentication is optional for this operation. To authenticate, use one of the following methods:
bearer_auth, basic_auth
</aside>

<h1 id="core-full-apppassword">app_password</h1>

## Create app password

<a id="opIdapp_password-get-app-password"></a>

> Code samples

```bash
curl https://cloud.example.com/ocs/v2.php/core/getapppassword \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'OCS-APIRequest: true'
```

`GET /ocs/v2.php/core/getapppassword`

This endpoint requires password confirmation

<h3 id="create-app-password-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|user-agent|header|string|false|none|
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
      "apppassword": "string"
    }
  }
}
```

> 401 Response

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

> 403 Response

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

<h3 id="create-app-password-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|App password returned|Inline|
|401|Unauthorized|Current user is not logged in|Inline|
|403|Forbidden|Creating app password is not allowed|Inline|

<h3 id="create-app-password-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|
|» » apppassword|string|true|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer_auth, basic_auth
</aside>

## Delete app password

<a id="opIdapp_password-delete-app-password"></a>

> Code samples

```bash
curl https://cloud.example.com/ocs/v2.php/core/apppassword \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'OCS-APIRequest: true'
```

`DELETE /ocs/v2.php/core/apppassword`

<h3 id="delete-app-password-parameters">Parameters</h3>

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
    "data": null
  }
}
```

> 401 Response

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

> 403 Response

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

<h3 id="delete-app-password-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|App password deleted successfully|Inline|
|401|Unauthorized|Current user is not logged in|Inline|
|403|Forbidden|Deleting app password is not allowed|Inline|

<h3 id="delete-app-password-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer_auth, basic_auth
</aside>

## Rotate app password

<a id="opIdapp_password-rotate-app-password"></a>

> Code samples

```bash
curl https://cloud.example.com/ocs/v2.php/core/apppassword/rotate \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'OCS-APIRequest: true'
```

`POST /ocs/v2.php/core/apppassword/rotate`

<h3 id="rotate-app-password-parameters">Parameters</h3>

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
    "data": {
      "apppassword": "string"
    }
  }
}
```

> 401 Response

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

> 403 Response

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

<h3 id="rotate-app-password-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|App password returned|Inline|
|401|Unauthorized|Current user is not logged in|Inline|
|403|Forbidden|Rotating app password is not allowed|Inline|

<h3 id="rotate-app-password-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|
|» » apppassword|string|true|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer_auth, basic_auth
</aside>

## Confirm the user password

<a id="opIdapp_password-confirm-user-password"></a>

> Code samples

```bash
curl https://cloud.example.com/ocs/v2.php/core/apppassword/confirm \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'OCS-APIRequest: true' \
  -d '{
    "password": "string"
  }'
```

`PUT /ocs/v2.php/core/apppassword/confirm`

> Body parameter

```json
{
  "password": "string"
}
```

<h3 id="confirm-the-user-password-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|OCS-APIRequest|header|boolean|true|Required to be true for the API request to pass|
|body|body|object|true|none|
|» password|body|string|true|The password of the user|

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
      "lastLogin": 1
    }
  }
}
```

> 401 Response

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

> 403 Response

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

<h3 id="confirm-the-user-password-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Password confirmation succeeded|Inline|
|401|Unauthorized|Current user is not logged in|Inline|
|403|Forbidden|Password confirmation failed|Inline|

<h3 id="confirm-the-user-password-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|
|» » lastLogin|integer(int64)|true|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer_auth, basic_auth
</aside>

## Get app password with one-time password

<a id="opIdapp_password-get-app-password-with-one-time-password"></a>

> Code samples

```bash
curl https://cloud.example.com/ocs/v2.php/core/getapppassword-onetime \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'OCS-APIRequest: true'
```

`GET /ocs/v2.php/core/getapppassword-onetime`

<h3 id="get-app-password-with-one-time-password-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|user-agent|header|string|false|none|
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
      "apppassword": "string"
    }
  }
}
```

> 401 Response

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

> 403 Response

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

<h3 id="get-app-password-with-one-time-password-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|App password returned|Inline|
|401|Unauthorized|Current user is not logged in|Inline|
|403|Forbidden|Creating app password is not allowed|Inline|

<h3 id="get-app-password-with-one-time-password-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|
|» » apppassword|string|true|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer_auth, basic_auth
</aside>

<h1 id="core-full-autocomplete">auto_complete</h1>

## Autocomplete a query

<a id="opIdauto_complete-get"></a>

> Code samples

```bash
curl 'https://cloud.example.com/ocs/v2.php/core/autocomplete/get?search=string' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'OCS-APIRequest: true'
```

`GET /ocs/v2.php/core/autocomplete/get`

<h3 id="autocomplete-a-query-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|search|query|string|true|Text to search for|
|itemType|query|string \| null|false|Type of the items to search for|
|itemId|query|string \| null|false|ID of the items to search for|
|sorter|query|string \| null|false|can be piped, top priority first, e.g.: "commenters\|share-recipients"|
|shareTypes[]|query|[integer(int64)]|false|Types of shares to search for|
|limit|query|integer(int64)|false|Maximum number of results to return|
|offset|query|integer(int64)|false|Offset for searching|
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
      {
        "id": "string",
        "label": "string",
        "icon": "string",
        "source": "string",
        "status": {
          "status": "string",
          "message": "string",
          "icon": "string",
          "clearAt": 0
        },
        "subline": "string",
        "shareWithDisplayNameUnique": "string"
      }
    ]
  }
}
```

> 401 Response

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

<h3 id="autocomplete-a-query-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Autocomplete results returned|Inline|
|401|Unauthorized|Current user is not logged in|Inline|

<h3 id="autocomplete-a-query-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|[[AutocompleteResult](#schemaautocompleteresult)]|true|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Link|string||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer_auth, basic_auth
</aside>

<h1 id="core-full-collaborationresources">collaboration_resources</h1>

## Get a collection

<a id="opIdcollaboration_resources-list-collection"></a>

> Code samples

```bash
curl https://cloud.example.com/ocs/v2.php/collaboration/resources/collections/0 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'OCS-APIRequest: true'
```

`GET /ocs/v2.php/collaboration/resources/collections/{collectionId}`

<h3 id="get-a-collection-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|collectionId|path|integer(int64)|true|ID of the collection|
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
      "name": "string",
      "resources": [
        {
          "richObjectType": "string",
          "richObject": {
            "property1": {},
            "property2": {}
          },
          "openGraphObject": {
            "id": "string",
            "name": "string",
            "description": "string",
            "thumb": "string",
            "link": "string"
          },
          "accessible": true
        }
      ]
    }
  }
}
```

> 401 Response

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

<h3 id="get-a-collection-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Collection returned|Inline|
|401|Unauthorized|Current user is not logged in|Inline|
|404|Not Found|Collection not found|Inline|
|500|Internal Server Error||Inline|

<h3 id="get-a-collection-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|[Collection](#schemacollection)|true|none|none|

Status Code **401**

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
To perform this operation, you must be authenticated by means of one of the following methods:
bearer_auth, basic_auth
</aside>

## Rename a collection

<a id="opIdcollaboration_resources-rename-collection"></a>

> Code samples

```bash
curl https://cloud.example.com/ocs/v2.php/collaboration/resources/collections/0 \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'OCS-APIRequest: true' \
  -d '{
    "collectionName": "string"
  }'
```

`PUT /ocs/v2.php/collaboration/resources/collections/{collectionId}`

> Body parameter

```json
{
  "collectionName": "string"
}
```

<h3 id="rename-a-collection-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|collectionId|path|integer(int64)|true|ID of the collection|
|OCS-APIRequest|header|boolean|true|Required to be true for the API request to pass|
|body|body|object|true|none|
|» collectionName|body|string|true|New name|

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
      "name": "string",
      "resources": [
        {
          "richObjectType": "string",
          "richObject": {
            "property1": {},
            "property2": {}
          },
          "openGraphObject": {
            "id": "string",
            "name": "string",
            "description": "string",
            "thumb": "string",
            "link": "string"
          },
          "accessible": true
        }
      ]
    }
  }
}
```

> 401 Response

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

<h3 id="rename-a-collection-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Collection returned|Inline|
|401|Unauthorized|Current user is not logged in|Inline|
|404|Not Found|Collection not found|Inline|
|500|Internal Server Error||Inline|

<h3 id="rename-a-collection-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|[Collection](#schemacollection)|true|none|none|

Status Code **401**

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
To perform this operation, you must be authenticated by means of one of the following methods:
bearer_auth, basic_auth
</aside>

## Add a resource to a collection

<a id="opIdcollaboration_resources-add-resource"></a>

> Code samples

```bash
curl https://cloud.example.com/ocs/v2.php/collaboration/resources/collections/0 \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'OCS-APIRequest: true' \
  -d '{
    "resourceType": "string",
    "resourceId": "string"
  }'
```

`POST /ocs/v2.php/collaboration/resources/collections/{collectionId}`

> Body parameter

```json
{
  "resourceType": "string",
  "resourceId": "string"
}
```

<h3 id="add-a-resource-to-a-collection-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|collectionId|path|integer(int64)|true|ID of the collection|
|OCS-APIRequest|header|boolean|true|Required to be true for the API request to pass|
|body|body|object|true|none|
|» resourceType|body|string|true|Name of the resource|
|» resourceId|body|string|true|ID of the resource|

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
      "name": "string",
      "resources": [
        {
          "richObjectType": "string",
          "richObject": {
            "property1": {},
            "property2": {}
          },
          "openGraphObject": {
            "id": "string",
            "name": "string",
            "description": "string",
            "thumb": "string",
            "link": "string"
          },
          "accessible": true
        }
      ]
    }
  }
}
```

> 401 Response

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

<h3 id="add-a-resource-to-a-collection-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Collection returned|Inline|
|401|Unauthorized|Current user is not logged in|Inline|
|404|Not Found|Collection not found or resource inaccessible|Inline|
|500|Internal Server Error||Inline|

<h3 id="add-a-resource-to-a-collection-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|[Collection](#schemacollection)|true|none|none|

Status Code **401**

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
To perform this operation, you must be authenticated by means of one of the following methods:
bearer_auth, basic_auth
</aside>

## Remove a resource from a collection

<a id="opIdcollaboration_resources-remove-resource"></a>

> Code samples

```bash
curl 'https://cloud.example.com/ocs/v2.php/collaboration/resources/collections/0?resourceType=string&resourceId=string' \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'OCS-APIRequest: true'
```

`DELETE /ocs/v2.php/collaboration/resources/collections/{collectionId}`

<h3 id="remove-a-resource-from-a-collection-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|collectionId|path|integer(int64)|true|ID of the collection|
|resourceType|query|string|true|Name of the resource|
|resourceId|query|string|true|ID of the resource|
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
      "name": "string",
      "resources": [
        {
          "richObjectType": "string",
          "richObject": {
            "property1": {},
            "property2": {}
          },
          "openGraphObject": {
            "id": "string",
            "name": "string",
            "description": "string",
            "thumb": "string",
            "link": "string"
          },
          "accessible": true
        }
      ]
    }
  }
}
```

> 401 Response

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

<h3 id="remove-a-resource-from-a-collection-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Collection returned|Inline|
|401|Unauthorized|Current user is not logged in|Inline|
|404|Not Found|Collection or resource not found|Inline|
|500|Internal Server Error||Inline|

<h3 id="remove-a-resource-from-a-collection-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|[Collection](#schemacollection)|true|none|none|

Status Code **401**

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
To perform this operation, you must be authenticated by means of one of the following methods:
bearer_auth, basic_auth
</aside>

## Search for collections

<a id="opIdcollaboration_resources-search-collections"></a>

> Code samples

```bash
curl https://cloud.example.com/ocs/v2.php/collaboration/resources/collections/search/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'OCS-APIRequest: true'
```

`GET /ocs/v2.php/collaboration/resources/collections/search/{filter}`

<h3 id="search-for-collections-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|filter|path|string|true|Filter collections|
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
      {
        "id": 0,
        "name": "string",
        "resources": [
          {
            "richObjectType": "string",
            "richObject": {
              "property1": {},
              "property2": {}
            },
            "openGraphObject": {
              "id": "string",
              "name": "string",
              "description": "string",
              "thumb": "string",
              "link": "string"
            },
            "accessible": true
          }
        ]
      }
    ]
  }
}
```

> 401 Response

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

<h3 id="search-for-collections-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Collections returned|Inline|
|401|Unauthorized|Current user is not logged in|Inline|
|404|Not Found|Collection not found|Inline|

<h3 id="search-for-collections-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|[[Collection](#schemacollection)]|true|none|none|

Status Code **401**

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
To perform this operation, you must be authenticated by means of one of the following methods:
bearer_auth, basic_auth
</aside>

## Get collections by resource

<a id="opIdcollaboration_resources-get-collections-by-resource"></a>

> Code samples

```bash
curl https://cloud.example.com/ocs/v2.php/collaboration/resources/string/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'OCS-APIRequest: true'
```

`GET /ocs/v2.php/collaboration/resources/{resourceType}/{resourceId}`

<h3 id="get-collections-by-resource-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|resourceType|path|string|true|Type of the resource|
|resourceId|path|string|true|ID of the resource|
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
      {
        "id": 0,
        "name": "string",
        "resources": [
          {
            "richObjectType": "string",
            "richObject": {
              "property1": {},
              "property2": {}
            },
            "openGraphObject": {
              "id": "string",
              "name": "string",
              "description": "string",
              "thumb": "string",
              "link": "string"
            },
            "accessible": true
          }
        ]
      }
    ]
  }
}
```

> 401 Response

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

<h3 id="get-collections-by-resource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Collections returned|Inline|
|401|Unauthorized|Current user is not logged in|Inline|
|404|Not Found|Resource not accessible|Inline|

<h3 id="get-collections-by-resource-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|[[Collection](#schemacollection)]|true|none|none|

Status Code **401**

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
To perform this operation, you must be authenticated by means of one of the following methods:
bearer_auth, basic_auth
</aside>

## Create a collection for a resource

<a id="opIdcollaboration_resources-create-collection-on-resource"></a>

> Code samples

```bash
curl https://cloud.example.com/ocs/v2.php/collaboration/resources/string/string \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'OCS-APIRequest: true' \
  -d '{
    "name": "string"
  }'
```

`POST /ocs/v2.php/collaboration/resources/{baseResourceType}/{baseResourceId}`

> Body parameter

```json
{
  "name": "string"
}
```

<h3 id="create-a-collection-for-a-resource-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|baseResourceType|path|string|true|Type of the base resource|
|baseResourceId|path|string|true|ID of the base resource|
|OCS-APIRequest|header|boolean|true|Required to be true for the API request to pass|
|body|body|object|true|none|
|» name|body|string|true|Name of the collection|

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
      "name": "string",
      "resources": [
        {
          "richObjectType": "string",
          "richObject": {
            "property1": {},
            "property2": {}
          },
          "openGraphObject": {
            "id": "string",
            "name": "string",
            "description": "string",
            "thumb": "string",
            "link": "string"
          },
          "accessible": true
        }
      ]
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

> 401 Response

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

<h3 id="create-a-collection-for-a-resource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Collection returned|Inline|
|400|Bad Request|Creating collection is not possible|Inline|
|401|Unauthorized|Current user is not logged in|Inline|
|404|Not Found|Resource inaccessible|Inline|
|500|Internal Server Error||Inline|

<h3 id="create-a-collection-for-a-resource-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|[Collection](#schemacollection)|true|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|

Status Code **401**

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
To perform this operation, you must be authenticated by means of one of the following methods:
bearer_auth, basic_auth
</aside>

<h1 id="core-full-hovercard">hover_card</h1>

## Get the account details for a hovercard

<a id="opIdhover_card-get-user"></a>

> Code samples

```bash
curl https://cloud.example.com/ocs/v2.php/hovercard/v1/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'OCS-APIRequest: true'
```

`GET /ocs/v2.php/hovercard/v1/{userId}`

<h3 id="get-the-account-details-for-a-hovercard-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userId|path|string|true|ID of the user|
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
      "userId": "string",
      "displayName": "string",
      "actions": [
        {
          "title": "string",
          "icon": "string",
          "hyperlink": "string",
          "appId": "string"
        }
      ]
    }
  }
}
```

> 401 Response

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

<h3 id="get-the-account-details-for-a-hovercard-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Account details returned|Inline|
|401|Unauthorized|Current user is not logged in|Inline|
|404|Not Found|Account not found|Inline|

<h3 id="get-the-account-details-for-a-hovercard-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|
|» » userId|string|true|none|none|
|» » displayName|string|true|none|none|
|» » actions|[[ContactsAction](#schemacontactsaction)]|true|none|none|

Status Code **401**

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
To perform this operation, you must be authenticated by means of one of the following methods:
bearer_auth, basic_auth
</aside>

<h1 id="core-full-navigation">navigation</h1>

## Get the apps navigation

<a id="opIdnavigation-get-apps-navigation"></a>

> Code samples

```bash
curl https://cloud.example.com/ocs/v2.php/core/navigation/apps \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'OCS-APIRequest: true'
```

`GET /ocs/v2.php/core/navigation/apps`

<h3 id="get-the-apps-navigation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|absolute|query|boolean|false|Rewrite URLs to absolute ones|
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
      {
        "id": "string",
        "order": 0,
        "href": "string",
        "icon": "string",
        "type": "link",
        "name": "string",
        "app": "string",
        "default": true,
        "active": true,
        "classes": "string",
        "unread": 0
      }
    ]
  }
}
```

> 401 Response

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

<h3 id="get-the-apps-navigation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Apps navigation returned|Inline|
|304|Not Modified|No apps navigation changed|None|
|401|Unauthorized|Current user is not logged in|Inline|

<h3 id="get-the-apps-navigation-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|[[NavigationEntry](#schemanavigationentry)]|true|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer_auth, basic_auth
</aside>

## Get the settings navigation

<a id="opIdnavigation-get-settings-navigation"></a>

> Code samples

```bash
curl https://cloud.example.com/ocs/v2.php/core/navigation/settings \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'OCS-APIRequest: true'
```

`GET /ocs/v2.php/core/navigation/settings`

<h3 id="get-the-settings-navigation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|absolute|query|boolean|false|Rewrite URLs to absolute ones|
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
      {
        "id": "string",
        "order": 0,
        "href": "string",
        "icon": "string",
        "type": "settings",
        "name": "string",
        "app": "string",
        "default": true,
        "active": true,
        "classes": "string",
        "unread": 0
      }
    ]
  }
}
```

> 401 Response

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

<h3 id="get-the-settings-navigation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Apps navigation returned|Inline|
|304|Not Modified|No apps navigation changed|None|
|401|Unauthorized|Current user is not logged in|Inline|

<h3 id="get-the-settings-navigation-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|[[NavigationSettingsEntry](#schemanavigationsettingsentry)]|true|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer_auth, basic_auth
</aside>

<h1 id="core-full-profileapi">profile_api</h1>

## Get profile fields for another user

<a id="opIdprofile_api-get-profile-fields"></a>

> Code samples

```bash
curl https://cloud.example.com/ocs/v2.php/profile/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'OCS-APIRequest: true'
```

`GET /ocs/v2.php/profile/{targetUserId}`

<h3 id="get-profile-fields-for-another-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|targetUserId|path|string|true|ID of the user|
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
      "userId": "string",
      "address": "string",
      "biography": "string",
      "displayname": "string",
      "headline": "string",
      "isUserAvatarVisible": true,
      "organisation": "string",
      "pronouns": "string",
      "role": "string",
      "actions": [
        {
          "id": "string",
          "icon": "string",
          "title": "string",
          "target": "string"
        }
      ],
      "timezone": "string",
      "timezoneOffset": 0
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

> 401 Response

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

<h3 id="get-profile-fields-for-another-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Profile data returned successfully|Inline|
|400|Bad Request|Profile is disabled|Inline|
|401|Unauthorized|Current user is not logged in|Inline|
|404|Not Found|Account not found or disabled|Inline|

<h3 id="get-profile-fields-for-another-user-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|[ProfileData](#schemaprofiledata)|true|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object \| null|true|none|none|

Status Code **401**

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
|» data|object \| null|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer_auth, basic_auth
</aside>

## Update the visibility of a parameter

<a id="opIdprofile_api-set-visibility"></a>

> Code samples

```bash
curl https://cloud.example.com/ocs/v2.php/profile/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'OCS-APIRequest: true' \
  -d '{
    "paramId": "string",
    "visibility": "string"
  }'
```

`PUT /ocs/v2.php/profile/{targetUserId}`

This endpoint requires password confirmation

> Body parameter

```json
{
  "paramId": "string",
  "visibility": "string"
}
```

<h3 id="update-the-visibility-of-a-parameter-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|targetUserId|path|string|true|ID of the user|
|OCS-APIRequest|header|boolean|true|Required to be true for the API request to pass|
|body|body|object|true|none|
|» paramId|body|string|true|ID of the parameter|
|» visibility|body|string|true|New visibility|

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

> 401 Response

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

> 403 Response

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

<h3 id="update-the-visibility-of-a-parameter-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Visibility updated successfully|Inline|
|400|Bad Request|Updating visibility is not possible|Inline|
|401|Unauthorized|Current user is not logged in|Inline|
|403|Forbidden|Not allowed to edit other users visibility|Inline|
|404|Not Found|Account not found|Inline|

<h3 id="update-the-visibility-of-a-parameter-responseschema">Response Schema</h3>

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

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|

Status Code **403**

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
To perform this operation, you must be authenticated by means of one of the following methods:
bearer_auth, basic_auth
</aside>

<h1 id="core-full-referenceapi">reference_api</h1>

## Extract references from a text

<a id="opIdreference_api-extract"></a>

> Code samples

```bash
curl https://cloud.example.com/ocs/v2.php/references/extract \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'OCS-APIRequest: true' \
  -d '{
    "text": "string",
    "resolve": false,
    "limit": 1
  }'
```

`POST /ocs/v2.php/references/extract`

> Body parameter

```json
{
  "text": "string",
  "resolve": false,
  "limit": 1
}
```

<h3 id="extract-references-from-a-text-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|OCS-APIRequest|header|boolean|true|Required to be true for the API request to pass|
|body|body|object|true|none|
|» text|body|string|true|Text to extract from|
|» resolve|body|boolean|false|Resolve the references|
|» limit|body|integer(int64)|false|Maximum amount of references to extract|

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
      "references": {
        "property1": {
          "richObjectType": "string",
          "richObject": {
            "property1": {},
            "property2": {}
          },
          "openGraphObject": {
            "id": "string",
            "name": "string",
            "description": "string",
            "thumb": "string",
            "link": "string"
          },
          "accessible": true
        },
        "property2": {
          "richObjectType": "string",
          "richObject": {
            "property1": {},
            "property2": {}
          },
          "openGraphObject": {
            "id": "string",
            "name": "string",
            "description": "string",
            "thumb": "string",
            "link": "string"
          },
          "accessible": true
        }
      }
    }
  }
}
```

> 401 Response

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

<h3 id="extract-references-from-a-text-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|References returned|Inline|
|401|Unauthorized|Current user is not logged in|Inline|

<h3 id="extract-references-from-a-text-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|
|» » references|object|true|none|none|
|» » » **additionalProperties**|object \| null|false|none|none|
|» » » » richObjectType|string|true|none|none|
|» » » » richObject|object|true|none|none|
|» » » » » **additionalProperties**|object \| null|false|none|none|
|» » » » openGraphObject|[OpenGraphObject](#schemaopengraphobject)|true|none|none|
|» » » » accessible|boolean|true|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer_auth, basic_auth
</aside>

## Extract references from a text

<a id="opIdreference_api-extract-public"></a>

> Code samples

```bash
curl https://cloud.example.com/ocs/v2.php/references/extractPublic \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'OCS-APIRequest: true' \
  -d '{
    "text": "string",
    "sharingToken": "string",
    "resolve": false,
    "limit": 1
  }'
```

`POST /ocs/v2.php/references/extractPublic`

> Body parameter

```json
{
  "text": "string",
  "sharingToken": "string",
  "resolve": false,
  "limit": 1
}
```

<h3 id="extract-references-from-a-text-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|OCS-APIRequest|header|boolean|true|Required to be true for the API request to pass|
|body|body|object|true|none|
|» text|body|string|true|Text to extract from|
|» sharingToken|body|string|true|Token of the public share|
|» resolve|body|boolean|false|Resolve the references|
|» limit|body|integer(int64)|false|Maximum amount of references to extract, limited to 15|

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
      "references": {
        "property1": {
          "richObjectType": "string",
          "richObject": {
            "property1": {},
            "property2": {}
          },
          "openGraphObject": {
            "id": "string",
            "name": "string",
            "description": "string",
            "thumb": "string",
            "link": "string"
          },
          "accessible": true
        },
        "property2": {
          "richObjectType": "string",
          "richObject": {
            "property1": {},
            "property2": {}
          },
          "openGraphObject": {
            "id": "string",
            "name": "string",
            "description": "string",
            "thumb": "string",
            "link": "string"
          },
          "accessible": true
        }
      }
    }
  }
}
```

<h3 id="extract-references-from-a-text-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|References returned|Inline|

<h3 id="extract-references-from-a-text-1-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|
|» » references|object|true|none|none|
|» » » **additionalProperties**|object \| null|false|none|none|
|» » » » richObjectType|string|true|none|none|
|» » » » richObject|object|true|none|none|
|» » » » » **additionalProperties**|object \| null|false|none|none|
|» » » » openGraphObject|[OpenGraphObject](#schemaopengraphobject)|true|none|none|
|» » » » accessible|boolean|true|none|none|

<aside class="warning">
Authentication is optional for this operation. To authenticate, use one of the following methods:
bearer_auth, basic_auth
</aside>

## Resolve a reference

<a id="opIdreference_api-resolve-one"></a>

> Code samples

```bash
curl 'https://cloud.example.com/ocs/v2.php/references/resolve?reference=string' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'OCS-APIRequest: true'
```

`GET /ocs/v2.php/references/resolve`

<h3 id="resolve-a-reference-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|reference|query|string|true|Reference to resolve|
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
      "references": {
        "property1": {
          "richObjectType": "string",
          "richObject": {
            "property1": {},
            "property2": {}
          },
          "openGraphObject": {
            "id": "string",
            "name": "string",
            "description": "string",
            "thumb": "string",
            "link": "string"
          },
          "accessible": true
        },
        "property2": {
          "richObjectType": "string",
          "richObject": {
            "property1": {},
            "property2": {}
          },
          "openGraphObject": {
            "id": "string",
            "name": "string",
            "description": "string",
            "thumb": "string",
            "link": "string"
          },
          "accessible": true
        }
      }
    }
  }
}
```

> 401 Response

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

<h3 id="resolve-a-reference-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Reference returned|Inline|
|401|Unauthorized|Current user is not logged in|Inline|

<h3 id="resolve-a-reference-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|
|» » references|object|true|none|none|
|» » » **additionalProperties**|object \| null|false|none|none|
|» » » » richObjectType|string|true|none|none|
|» » » » richObject|object|true|none|none|
|» » » » » **additionalProperties**|object \| null|false|none|none|
|» » » » openGraphObject|[OpenGraphObject](#schemaopengraphobject)|true|none|none|
|» » » » accessible|boolean|true|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer_auth, basic_auth
</aside>

## Resolve multiple references

<a id="opIdreference_api-resolve"></a>

> Code samples

```bash
curl https://cloud.example.com/ocs/v2.php/references/resolve \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'OCS-APIRequest: true' \
  -d '{
    "references": [
      "string"
    ],
    "limit": 1
  }'
```

`POST /ocs/v2.php/references/resolve`

> Body parameter

```json
{
  "references": [
    "string"
  ],
  "limit": 1
}
```

<h3 id="resolve-multiple-references-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|OCS-APIRequest|header|boolean|true|Required to be true for the API request to pass|
|body|body|object|true|none|
|» references|body|[string]|true|References to resolve|
|» limit|body|integer(int64)|false|Maximum amount of references to resolve|

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
      "references": {
        "property1": {
          "richObjectType": "string",
          "richObject": {
            "property1": {},
            "property2": {}
          },
          "openGraphObject": {
            "id": "string",
            "name": "string",
            "description": "string",
            "thumb": "string",
            "link": "string"
          },
          "accessible": true
        },
        "property2": {
          "richObjectType": "string",
          "richObject": {
            "property1": {},
            "property2": {}
          },
          "openGraphObject": {
            "id": "string",
            "name": "string",
            "description": "string",
            "thumb": "string",
            "link": "string"
          },
          "accessible": true
        }
      }
    }
  }
}
```

> 401 Response

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

<h3 id="resolve-multiple-references-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|References returned|Inline|
|401|Unauthorized|Current user is not logged in|Inline|

<h3 id="resolve-multiple-references-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|
|» » references|object|true|none|none|
|» » » **additionalProperties**|object \| null|false|none|none|
|» » » » richObjectType|string|true|none|none|
|» » » » richObject|object|true|none|none|
|» » » » » **additionalProperties**|object \| null|false|none|none|
|» » » » openGraphObject|[OpenGraphObject](#schemaopengraphobject)|true|none|none|
|» » » » accessible|boolean|true|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer_auth, basic_auth
</aside>

## Resolve from a public page

<a id="opIdreference_api-resolve-one-public"></a>

> Code samples

```bash
curl 'https://cloud.example.com/ocs/v2.php/references/resolvePublic?reference=string&sharingToken=string' \
  -H 'Accept: application/json' \
  -H 'OCS-APIRequest: true'
```

`GET /ocs/v2.php/references/resolvePublic`

<h3 id="resolve-from-a-public-page-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|reference|query|string|true|Reference to resolve|
|sharingToken|query|string|true|Token of the public share|
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
      "references": {
        "property1": {
          "richObjectType": "string",
          "richObject": {
            "property1": {},
            "property2": {}
          },
          "openGraphObject": {
            "id": "string",
            "name": "string",
            "description": "string",
            "thumb": "string",
            "link": "string"
          },
          "accessible": true
        },
        "property2": {
          "richObjectType": "string",
          "richObject": {
            "property1": {},
            "property2": {}
          },
          "openGraphObject": {
            "id": "string",
            "name": "string",
            "description": "string",
            "thumb": "string",
            "link": "string"
          },
          "accessible": true
        }
      }
    }
  }
}
```

<h3 id="resolve-from-a-public-page-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Reference returned|Inline|

<h3 id="resolve-from-a-public-page-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|
|» » references|object|true|none|none|
|» » » **additionalProperties**|object \| null|false|none|none|
|» » » » richObjectType|string|true|none|none|
|» » » » richObject|object|true|none|none|
|» » » » » **additionalProperties**|object \| null|false|none|none|
|» » » » openGraphObject|[OpenGraphObject](#schemaopengraphobject)|true|none|none|
|» » » » accessible|boolean|true|none|none|

<aside class="warning">
Authentication is optional for this operation. To authenticate, use one of the following methods:
bearer_auth, basic_auth
</aside>

## Resolve multiple references from a public page

<a id="opIdreference_api-resolve-public"></a>

> Code samples

```bash
curl https://cloud.example.com/ocs/v2.php/references/resolvePublic \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'OCS-APIRequest: true' \
  -d '{
    "references": [
      "string"
    ],
    "sharingToken": "string",
    "limit": 1
  }'
```

`POST /ocs/v2.php/references/resolvePublic`

> Body parameter

```json
{
  "references": [
    "string"
  ],
  "sharingToken": "string",
  "limit": 1
}
```

<h3 id="resolve-multiple-references-from-a-public-page-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|OCS-APIRequest|header|boolean|true|Required to be true for the API request to pass|
|body|body|object|true|none|
|» references|body|[string]|true|References to resolve|
|» sharingToken|body|string|true|Token of the public share|
|» limit|body|integer(int64)|false|Maximum amount of references to resolve, limited to 15|

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
      "references": {
        "property1": {
          "richObjectType": "string",
          "richObject": {
            "property1": {},
            "property2": {}
          },
          "openGraphObject": {
            "id": "string",
            "name": "string",
            "description": "string",
            "thumb": "string",
            "link": "string"
          },
          "accessible": true
        },
        "property2": {
          "richObjectType": "string",
          "richObject": {
            "property1": {},
            "property2": {}
          },
          "openGraphObject": {
            "id": "string",
            "name": "string",
            "description": "string",
            "thumb": "string",
            "link": "string"
          },
          "accessible": true
        }
      }
    }
  }
}
```

<h3 id="resolve-multiple-references-from-a-public-page-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|References returned|Inline|

<h3 id="resolve-multiple-references-from-a-public-page-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|
|» » references|object|true|none|none|
|» » » **additionalProperties**|object \| null|false|none|none|
|» » » » richObjectType|string|true|none|none|
|» » » » richObject|object|true|none|none|
|» » » » » **additionalProperties**|object \| null|false|none|none|
|» » » » openGraphObject|[OpenGraphObject](#schemaopengraphobject)|true|none|none|
|» » » » accessible|boolean|true|none|none|

<aside class="warning">
Authentication is optional for this operation. To authenticate, use one of the following methods:
bearer_auth, basic_auth
</aside>

## Get the providers

<a id="opIdreference_api-get-providers-info"></a>

> Code samples

```bash
curl https://cloud.example.com/ocs/v2.php/references/providers \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'OCS-APIRequest: true'
```

`GET /ocs/v2.php/references/providers`

<h3 id="get-the-providers-parameters">Parameters</h3>

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
      {
        "id": "string",
        "title": "string",
        "icon_url": "string",
        "order": 0,
        "search_providers_ids": [
          "string"
        ]
      }
    ]
  }
}
```

> 401 Response

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

<h3 id="get-the-providers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Providers returned|Inline|
|401|Unauthorized|Current user is not logged in|Inline|

<h3 id="get-the-providers-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|[[ReferenceProvider](#schemareferenceprovider)]|true|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer_auth, basic_auth
</aside>

## Touch a provider

<a id="opIdreference_api-touch-provider"></a>

> Code samples

```bash
curl https://cloud.example.com/ocs/v2.php/references/provider/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'OCS-APIRequest: true' \
  -d '{
    "timestamp": null
  }'
```

`PUT /ocs/v2.php/references/provider/{providerId}`

> Body parameter

```json
{
  "timestamp": null
}
```

<h3 id="touch-a-provider-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|providerId|path|string|true|ID of the provider|
|OCS-APIRequest|header|boolean|true|Required to be true for the API request to pass|
|body|body|object|false|none|
|» timestamp|body|integer(int64) \| null|false|Timestamp of the last usage|

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
      "success": true
    }
  }
}
```

> 401 Response

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

<h3 id="touch-a-provider-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Provider touched|Inline|
|401|Unauthorized|Current user is not logged in|Inline|

<h3 id="touch-a-provider-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|
|» » success|boolean|true|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer_auth, basic_auth
</aside>

<h1 id="core-full-taskprocessingapi">task_processing_api</h1>

## Returns all available TaskProcessing task types

<a id="opIdtask_processing_api-task-types"></a>

> Code samples

```bash
curl https://cloud.example.com/ocs/v2.php/taskprocessing/tasktypes \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'OCS-APIRequest: true'
```

`GET /ocs/v2.php/taskprocessing/tasktypes`

<h3 id="returns-all-available-taskprocessing-task-types-parameters">Parameters</h3>

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
    "data": {
      "types": {
        "property1": {
          "name": "string",
          "description": "string",
          "inputShape": {
            "property1": {
              "name": "string",
              "description": "string",
              "type": "Number"
            },
            "property2": {
              "name": "string",
              "description": "string",
              "type": "Number"
            }
          },
          "inputShapeEnumValues": {
            "property1": [
              {
                "name": "string",
                "value": "string"
              }
            ],
            "property2": [
              {
                "name": "string",
                "value": "string"
              }
            ]
          },
          "inputShapeDefaults": {
            "property1": 0,
            "property2": 0
          },
          "optionalInputShape": {
            "property1": {
              "name": "string",
              "description": "string",
              "type": "Number"
            },
            "property2": {
              "name": "string",
              "description": "string",
              "type": "Number"
            }
          },
          "optionalInputShapeEnumValues": {
            "property1": [
              {
                "name": "string",
                "value": "string"
              }
            ],
            "property2": [
              {
                "name": "string",
                "value": "string"
              }
            ]
          },
          "optionalInputShapeDefaults": {
            "property1": 0,
            "property2": 0
          },
          "outputShape": {
            "property1": {
              "name": "string",
              "description": "string",
              "type": "Number"
            },
            "property2": {
              "name": "string",
              "description": "string",
              "type": "Number"
            }
          },
          "outputShapeEnumValues": {
            "property1": [
              {
                "name": "string",
                "value": "string"
              }
            ],
            "property2": [
              {
                "name": "string",
                "value": "string"
              }
            ]
          },
          "optionalOutputShape": {
            "property1": {
              "name": "string",
              "description": "string",
              "type": "Number"
            },
            "property2": {
              "name": "string",
              "description": "string",
              "type": "Number"
            }
          },
          "optionalOutputShapeEnumValues": {
            "property1": [
              {
                "name": "string",
                "value": "string"
              }
            ],
            "property2": [
              {
                "name": "string",
                "value": "string"
              }
            ]
          }
        },
        "property2": {
          "name": "string",
          "description": "string",
          "inputShape": {
            "property1": {
              "name": "string",
              "description": "string",
              "type": "Number"
            },
            "property2": {
              "name": "string",
              "description": "string",
              "type": "Number"
            }
          },
          "inputShapeEnumValues": {
            "property1": [
              {
                "name": "string",
                "value": "string"
              }
            ],
            "property2": [
              {
                "name": "string",
                "value": "string"
              }
            ]
          },
          "inputShapeDefaults": {
            "property1": 0,
            "property2": 0
          },
          "optionalInputShape": {
            "property1": {
              "name": "string",
              "description": "string",
              "type": "Number"
            },
            "property2": {
              "name": "string",
              "description": "string",
              "type": "Number"
            }
          },
          "optionalInputShapeEnumValues": {
            "property1": [
              {
                "name": "string",
                "value": "string"
              }
            ],
            "property2": [
              {
                "name": "string",
                "value": "string"
              }
            ]
          },
          "optionalInputShapeDefaults": {
            "property1": 0,
            "property2": 0
          },
          "outputShape": {
            "property1": {
              "name": "string",
              "description": "string",
              "type": "Number"
            },
            "property2": {
              "name": "string",
              "description": "string",
              "type": "Number"
            }
          },
          "outputShapeEnumValues": {
            "property1": [
              {
                "name": "string",
                "value": "string"
              }
            ],
            "property2": [
              {
                "name": "string",
                "value": "string"
              }
            ]
          },
          "optionalOutputShape": {
            "property1": {
              "name": "string",
              "description": "string",
              "type": "Number"
            },
            "property2": {
              "name": "string",
              "description": "string",
              "type": "Number"
            }
          },
          "optionalOutputShapeEnumValues": {
            "property1": [
              {
                "name": "string",
                "value": "string"
              }
            ],
            "property2": [
              {
                "name": "string",
                "value": "string"
              }
            ]
          }
        }
      }
    }
  }
}
```

> 401 Response

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

<h3 id="returns-all-available-taskprocessing-task-types-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Task types returned|Inline|
|401|Unauthorized|Current user is not logged in|Inline|

<h3 id="returns-all-available-taskprocessing-task-types-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|
|» » types|object|true|none|none|
|» » » **additionalProperties**|[TaskProcessingTaskType](#schemataskprocessingtasktype)|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer_auth, basic_auth
</aside>

## Schedules a task

<a id="opIdtask_processing_api-schedule"></a>

> Code samples

```bash
curl https://cloud.example.com/ocs/v2.php/taskprocessing/schedule \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'OCS-APIRequest: true' \
  -d '{
    "input": {
      "property1": {},
      "property2": {}
    },
    "type": "string",
    "appId": "string",
    "customId": "",
    "webhookUri": null,
    "webhookMethod": null,
    "includeWatermark": true,
    "preferStreaming": false
  }'
```

`POST /ocs/v2.php/taskprocessing/schedule`

> Body parameter

```json
{
  "input": {
    "property1": {},
    "property2": {}
  },
  "type": "string",
  "appId": "string",
  "customId": "",
  "webhookUri": null,
  "webhookMethod": null,
  "includeWatermark": true,
  "preferStreaming": false
}
```

<h3 id="schedules-a-task-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|OCS-APIRequest|header|boolean|true|Required to be true for the API request to pass|
|body|body|object|true|none|
|» input|body|object|true|Task's input parameters|
|» » **additionalProperties**|body|object|false|none|
|» type|body|string|true|Type of the task|
|» appId|body|string|true|ID of the app that will execute the task|
|» customId|body|string|false|An arbitrary identifier for the task|
|» webhookUri|body|string \| null|false|URI to be requested when the task finishes|
|» webhookMethod|body|string \| null|false|Method used for the webhook request (HTTP:GET, HTTP:POST, HTTP:PUT, HTTP:DELETE or AppAPI:APP_ID:GET, AppAPI:APP_ID:POST...)|
|» includeWatermark|body|boolean|false|Whether to include a watermark in the output file or not|
|» preferStreaming|body|boolean|false|Whether to prefer getting a progressive output from the provider or not|

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
      "task": {
        "id": 0,
        "lastUpdated": 0,
        "type": "string",
        "status": "STATUS_CANCELLED",
        "userId": "string",
        "appId": "string",
        "input": {
          "property1": 0,
          "property2": 0
        },
        "output": {
          "property1": 0,
          "property2": 0
        },
        "customId": "string",
        "completionExpectedAt": 0,
        "progress": 0,
        "scheduledAt": 0,
        "startedAt": 0,
        "endedAt": 0,
        "allowCleanup": true,
        "includeWatermark": true,
        "userFacingErrorMessage": "string",
        "preferStreaming": true
      }
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
    "data": {
      "message": "string"
    }
  }
}
```

> 401 Response

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
      "message": "string"
    }
  }
}
```

> 412 Response

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
      "message": "string"
    }
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
    "data": {
      "message": "string"
    }
  }
}
```

<h3 id="schedules-a-task-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Task scheduled successfully|Inline|
|400|Bad Request|Scheduling task is not possible|Inline|
|401|Unauthorized|Cannot schedule task because it references files in its input that the user doesn't have access to|Inline|
|412|Precondition Failed|Scheduling task is not possible|Inline|
|500|Internal Server Error||Inline|

<h3 id="schedules-a-task-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|
|» » task|[TaskProcessingTask](#schemataskprocessingtask)|true|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|
|» » message|string|true|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anyOf*|object|false|none|none|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|
|» » message|string|true|none|none|
|*anyOf*|object|false|none|none|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|

Status Code **412**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|
|» » message|string|true|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|
|» » message|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer_auth, basic_auth
</aside>

## Gets a task including status and result

<a id="opIdtask_processing_api-get-task"></a>

> Code samples

```bash
curl https://cloud.example.com/ocs/v2.php/taskprocessing/task/0 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'OCS-APIRequest: true'
```

`GET /ocs/v2.php/taskprocessing/task/{id}`

Tasks are removed 1 week after receiving their last update

<h3 id="gets-a-task-including-status-and-result-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int64)|true|The id of the task|
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
      "task": {
        "id": 0,
        "lastUpdated": 0,
        "type": "string",
        "status": "STATUS_CANCELLED",
        "userId": "string",
        "appId": "string",
        "input": {
          "property1": 0,
          "property2": 0
        },
        "output": {
          "property1": 0,
          "property2": 0
        },
        "customId": "string",
        "completionExpectedAt": 0,
        "progress": 0,
        "scheduledAt": 0,
        "startedAt": 0,
        "endedAt": 0,
        "allowCleanup": true,
        "includeWatermark": true,
        "userFacingErrorMessage": "string",
        "preferStreaming": true
      }
    }
  }
}
```

> 401 Response

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
    "data": {
      "message": "string"
    }
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
    "data": {
      "message": "string"
    }
  }
}
```

<h3 id="gets-a-task-including-status-and-result-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Task returned|Inline|
|401|Unauthorized|Current user is not logged in|Inline|
|404|Not Found|Task not found|Inline|
|500|Internal Server Error||Inline|

<h3 id="gets-a-task-including-status-and-result-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|
|» » task|[TaskProcessingTask](#schemataskprocessingtask)|true|none|none|

Status Code **401**

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
|» » message|string|true|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|
|» » message|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer_auth, basic_auth
</aside>

## Deletes a task

<a id="opIdtask_processing_api-delete-task"></a>

> Code samples

```bash
curl https://cloud.example.com/ocs/v2.php/taskprocessing/task/0 \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'OCS-APIRequest: true'
```

`DELETE /ocs/v2.php/taskprocessing/task/{id}`

<h3 id="deletes-a-task-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int64)|true|The id of the task|
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

> 401 Response

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
    "data": {
      "message": "string"
    }
  }
}
```

<h3 id="deletes-a-task-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Task deleted|Inline|
|401|Unauthorized|Current user is not logged in|Inline|
|500|Internal Server Error||Inline|

<h3 id="deletes-a-task-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object \| null|true|none|none|

Status Code **401**

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
|» » message|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer_auth, basic_auth
</aside>

## Returns tasks for the current user filtered by the appId and optional customId

<a id="opIdtask_processing_api-list-tasks-by-app"></a>

> Code samples

```bash
curl https://cloud.example.com/ocs/v2.php/taskprocessing/tasks/app/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'OCS-APIRequest: true'
```

`GET /ocs/v2.php/taskprocessing/tasks/app/{appId}`

<h3 id="returns-tasks-for-the-current-user-filtered-by-the-appid-and-optional-customid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|string|true|ID of the app|
|customId|query|string \| null|false|An arbitrary identifier for the task|
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
      "tasks": [
        {
          "id": 0,
          "lastUpdated": 0,
          "type": "string",
          "status": "STATUS_CANCELLED",
          "userId": "string",
          "appId": "string",
          "input": {
            "property1": 0,
            "property2": 0
          },
          "output": {
            "property1": 0,
            "property2": 0
          },
          "customId": "string",
          "completionExpectedAt": 0,
          "progress": 0,
          "scheduledAt": 0,
          "startedAt": 0,
          "endedAt": 0,
          "allowCleanup": true,
          "includeWatermark": true,
          "userFacingErrorMessage": "string",
          "preferStreaming": true
        }
      ]
    }
  }
}
```

> 401 Response

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
    "data": {
      "message": "string"
    }
  }
}
```

<h3 id="returns-tasks-for-the-current-user-filtered-by-the-appid-and-optional-customid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Tasks returned|Inline|
|401|Unauthorized|Current user is not logged in|Inline|
|500|Internal Server Error||Inline|

<h3 id="returns-tasks-for-the-current-user-filtered-by-the-appid-and-optional-customid-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|
|» » tasks|[[TaskProcessingTask](#schemataskprocessingtask)]|true|none|none|

Status Code **401**

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
|» » message|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer_auth, basic_auth
</aside>

## Returns tasks for the current user filtered by the optional taskType and optional customId

<a id="opIdtask_processing_api-list-tasks"></a>

> Code samples

```bash
curl https://cloud.example.com/ocs/v2.php/taskprocessing/tasks \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'OCS-APIRequest: true'
```

`GET /ocs/v2.php/taskprocessing/tasks`

<h3 id="returns-tasks-for-the-current-user-filtered-by-the-optional-tasktype-and-optional-customid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|taskType|query|string \| null|false|The task type to filter by|
|customId|query|string \| null|false|An arbitrary identifier for the task|
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
      "tasks": [
        {
          "id": 0,
          "lastUpdated": 0,
          "type": "string",
          "status": "STATUS_CANCELLED",
          "userId": "string",
          "appId": "string",
          "input": {
            "property1": 0,
            "property2": 0
          },
          "output": {
            "property1": 0,
            "property2": 0
          },
          "customId": "string",
          "completionExpectedAt": 0,
          "progress": 0,
          "scheduledAt": 0,
          "startedAt": 0,
          "endedAt": 0,
          "allowCleanup": true,
          "includeWatermark": true,
          "userFacingErrorMessage": "string",
          "preferStreaming": true
        }
      ]
    }
  }
}
```

> 401 Response

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
    "data": {
      "message": "string"
    }
  }
}
```

<h3 id="returns-tasks-for-the-current-user-filtered-by-the-optional-tasktype-and-optional-customid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Tasks returned|Inline|
|401|Unauthorized|Current user is not logged in|Inline|
|500|Internal Server Error||Inline|

<h3 id="returns-tasks-for-the-current-user-filtered-by-the-optional-tasktype-and-optional-customid-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|
|» » tasks|[[TaskProcessingTask](#schemataskprocessingtask)]|true|none|none|

Status Code **401**

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
|» » message|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer_auth, basic_auth
</aside>

## Returns the contents of a file referenced in a task

<a id="opIdtask_processing_api-get-file-contents"></a>

> Code samples

```bash
curl https://cloud.example.com/ocs/v2.php/taskprocessing/tasks/0/file/0 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'OCS-APIRequest: true'
```

`GET /ocs/v2.php/taskprocessing/tasks/{taskId}/file/{fileId}`

<h3 id="returns-the-contents-of-a-file-referenced-in-a-task-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|taskId|path|integer(int64)|true|The id of the task|
|fileId|path|integer(int64)|true|The file id of the file to retrieve|
|OCS-APIRequest|header|boolean|true|Required to be true for the API request to pass|

> Example responses

> 401 Response

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
    "data": {
      "message": "string"
    }
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
    "data": {
      "message": "string"
    }
  }
}
```

<h3 id="returns-the-contents-of-a-file-referenced-in-a-task-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|File content returned|Inline|
|401|Unauthorized|Current user is not logged in|Inline|
|404|Not Found|Task or file not found|Inline|
|500|Internal Server Error||Inline|

<h3 id="returns-the-contents-of-a-file-referenced-in-a-task-responseschema">Response Schema</h3>

Status Code **401**

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
|» » message|string|true|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|
|» » message|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer_auth, basic_auth
</aside>

## Cancels a task

<a id="opIdtask_processing_api-cancel-task"></a>

> Code samples

```bash
curl https://cloud.example.com/ocs/v2.php/taskprocessing/tasks/0/cancel \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'OCS-APIRequest: true'
```

`POST /ocs/v2.php/taskprocessing/tasks/{taskId}/cancel`

<h3 id="cancels-a-task-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|taskId|path|integer(int64)|true|The id of the task|
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
      "task": {
        "id": 0,
        "lastUpdated": 0,
        "type": "string",
        "status": "STATUS_CANCELLED",
        "userId": "string",
        "appId": "string",
        "input": {
          "property1": 0,
          "property2": 0
        },
        "output": {
          "property1": 0,
          "property2": 0
        },
        "customId": "string",
        "completionExpectedAt": 0,
        "progress": 0,
        "scheduledAt": 0,
        "startedAt": 0,
        "endedAt": 0,
        "allowCleanup": true,
        "includeWatermark": true,
        "userFacingErrorMessage": "string",
        "preferStreaming": true
      }
    }
  }
}
```

> 401 Response

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
    "data": {
      "message": "string"
    }
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
    "data": {
      "message": "string"
    }
  }
}
```

<h3 id="cancels-a-task-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Task canceled successfully|Inline|
|401|Unauthorized|Current user is not logged in|Inline|
|404|Not Found|Task not found|Inline|
|500|Internal Server Error||Inline|

<h3 id="cancels-a-task-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|
|» » task|[TaskProcessingTask](#schemataskprocessingtask)|true|none|none|

Status Code **401**

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
|» » message|string|true|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|
|» » message|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer_auth, basic_auth
</aside>

## Get a task's position in the queue

<a id="opIdtask_processing_api-get-task-queue-position"></a>

> Code samples

```bash
curl https://cloud.example.com/ocs/v2.php/taskprocessing/tasks/0/queue_position \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'OCS-APIRequest: true'
```

`GET /ocs/v2.php/taskprocessing/tasks/{taskId}/queue_position`

<h3 id="get-a-tasks-position-in-the-queue-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|taskId|path|integer(int64)|true|The id of the task|
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

> 401 Response

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
    "data": {
      "message": "string"
    }
  }
}
```

> 412 Response

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
      "message": "string"
    }
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
    "data": {
      "message": "string"
    }
  }
}
```

<h3 id="get-a-tasks-position-in-the-queue-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The position was found|Inline|
|401|Unauthorized|Current user is not logged in|Inline|
|404|Not Found|Task not found|Inline|
|412|Precondition Failed|The task is not scheduled|Inline|
|500|Internal Server Error||Inline|

<h3 id="get-a-tasks-position-in-the-queue-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|integer(int64)|true|none|none|

Status Code **401**

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
|» » message|string|true|none|none|

Status Code **412**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|
|» » message|string|true|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|
|» » message|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer_auth, basic_auth
</aside>

## Returns all available TaskProcessing task types

<a id="opIdtask_processing_api-task-types-ex-app-endpoint"></a>

> Code samples

```bash
curl https://cloud.example.com/ocs/v2.php/taskprocessing/tasks_consumer/tasktypes \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'OCS-APIRequest: true'
```

`GET /ocs/v2.php/taskprocessing/tasks_consumer/tasktypes`

Endpoint for ExApp usage without user context
This endpoint requires admin access

<h3 id="returns-all-available-taskprocessing-task-types-1-parameters">Parameters</h3>

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
    "data": {
      "types": {
        "property1": {
          "name": "string",
          "description": "string",
          "inputShape": {
            "property1": {
              "name": "string",
              "description": "string",
              "type": "Number"
            },
            "property2": {
              "name": "string",
              "description": "string",
              "type": "Number"
            }
          },
          "inputShapeEnumValues": {
            "property1": [
              {
                "name": "string",
                "value": "string"
              }
            ],
            "property2": [
              {
                "name": "string",
                "value": "string"
              }
            ]
          },
          "inputShapeDefaults": {
            "property1": 0,
            "property2": 0
          },
          "optionalInputShape": {
            "property1": {
              "name": "string",
              "description": "string",
              "type": "Number"
            },
            "property2": {
              "name": "string",
              "description": "string",
              "type": "Number"
            }
          },
          "optionalInputShapeEnumValues": {
            "property1": [
              {
                "name": "string",
                "value": "string"
              }
            ],
            "property2": [
              {
                "name": "string",
                "value": "string"
              }
            ]
          },
          "optionalInputShapeDefaults": {
            "property1": 0,
            "property2": 0
          },
          "outputShape": {
            "property1": {
              "name": "string",
              "description": "string",
              "type": "Number"
            },
            "property2": {
              "name": "string",
              "description": "string",
              "type": "Number"
            }
          },
          "outputShapeEnumValues": {
            "property1": [
              {
                "name": "string",
                "value": "string"
              }
            ],
            "property2": [
              {
                "name": "string",
                "value": "string"
              }
            ]
          },
          "optionalOutputShape": {
            "property1": {
              "name": "string",
              "description": "string",
              "type": "Number"
            },
            "property2": {
              "name": "string",
              "description": "string",
              "type": "Number"
            }
          },
          "optionalOutputShapeEnumValues": {
            "property1": [
              {
                "name": "string",
                "value": "string"
              }
            ],
            "property2": [
              {
                "name": "string",
                "value": "string"
              }
            ]
          }
        },
        "property2": {
          "name": "string",
          "description": "string",
          "inputShape": {
            "property1": {
              "name": "string",
              "description": "string",
              "type": "Number"
            },
            "property2": {
              "name": "string",
              "description": "string",
              "type": "Number"
            }
          },
          "inputShapeEnumValues": {
            "property1": [
              {
                "name": "string",
                "value": "string"
              }
            ],
            "property2": [
              {
                "name": "string",
                "value": "string"
              }
            ]
          },
          "inputShapeDefaults": {
            "property1": 0,
            "property2": 0
          },
          "optionalInputShape": {
            "property1": {
              "name": "string",
              "description": "string",
              "type": "Number"
            },
            "property2": {
              "name": "string",
              "description": "string",
              "type": "Number"
            }
          },
          "optionalInputShapeEnumValues": {
            "property1": [
              {
                "name": "string",
                "value": "string"
              }
            ],
            "property2": [
              {
                "name": "string",
                "value": "string"
              }
            ]
          },
          "optionalInputShapeDefaults": {
            "property1": 0,
            "property2": 0
          },
          "outputShape": {
            "property1": {
              "name": "string",
              "description": "string",
              "type": "Number"
            },
            "property2": {
              "name": "string",
              "description": "string",
              "type": "Number"
            }
          },
          "outputShapeEnumValues": {
            "property1": [
              {
                "name": "string",
                "value": "string"
              }
            ],
            "property2": [
              {
                "name": "string",
                "value": "string"
              }
            ]
          },
          "optionalOutputShape": {
            "property1": {
              "name": "string",
              "description": "string",
              "type": "Number"
            },
            "property2": {
              "name": "string",
              "description": "string",
              "type": "Number"
            }
          },
          "optionalOutputShapeEnumValues": {
            "property1": [
              {
                "name": "string",
                "value": "string"
              }
            ],
            "property2": [
              {
                "name": "string",
                "value": "string"
              }
            ]
          }
        }
      }
    }
  }
}
```

> 401 Response

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

> 403 Response

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

<h3 id="returns-all-available-taskprocessing-task-types-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Task types returned|Inline|
|401|Unauthorized|Current user is not logged in|Inline|
|403|Forbidden|Logged in account must be an admin|Inline|

<h3 id="returns-all-available-taskprocessing-task-types-1-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|
|» » types|object|true|none|none|
|» » » **additionalProperties**|[TaskProcessingTaskType](#schemataskprocessingtasktype)|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer_auth, basic_auth
</aside>

## Schedules a task

<a id="opIdtask_processing_api-schedule-ex-app-endpoint"></a>

> Code samples

```bash
curl https://cloud.example.com/ocs/v2.php/taskprocessing/tasks_consumer/schedule \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'OCS-APIRequest: true' \
  -d '{
    "input": {
      "property1": {},
      "property2": {}
    },
    "type": "string",
    "appId": "string",
    "customId": "",
    "webhookUri": null,
    "webhookMethod": null,
    "includeWatermark": true,
    "preferStreaming": false
  }'
```

`POST /ocs/v2.php/taskprocessing/tasks_consumer/schedule`

Endpoint for ExApp usage without user context. Files cannot be referenced in this case.
This endpoint requires admin access

> Body parameter

```json
{
  "input": {
    "property1": {},
    "property2": {}
  },
  "type": "string",
  "appId": "string",
  "customId": "",
  "webhookUri": null,
  "webhookMethod": null,
  "includeWatermark": true,
  "preferStreaming": false
}
```

<h3 id="schedules-a-task-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|OCS-APIRequest|header|boolean|true|Required to be true for the API request to pass|
|body|body|object|true|none|
|» input|body|object|true|Task's input parameters|
|» » **additionalProperties**|body|object|false|none|
|» type|body|string|true|Type of the task|
|» appId|body|string|true|ID of the app that will execute the task|
|» customId|body|string|false|An arbitrary identifier for the task|
|» webhookUri|body|string \| null|false|URI to be requested when the task finishes|
|» webhookMethod|body|string \| null|false|Method used for the webhook request (HTTP:GET, HTTP:POST, HTTP:PUT, HTTP:DELETE or AppAPI:APP_ID:GET, AppAPI:APP_ID:POST...)|
|» includeWatermark|body|boolean|false|Whether to include a watermark in the output file or not|
|» preferStreaming|body|boolean|false|Whether to prefer getting a progressive output from the provider or not|

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
      "task": {
        "id": 0,
        "lastUpdated": 0,
        "type": "string",
        "status": "STATUS_CANCELLED",
        "userId": "string",
        "appId": "string",
        "input": {
          "property1": 0,
          "property2": 0
        },
        "output": {
          "property1": 0,
          "property2": 0
        },
        "customId": "string",
        "completionExpectedAt": 0,
        "progress": 0,
        "scheduledAt": 0,
        "startedAt": 0,
        "endedAt": 0,
        "allowCleanup": true,
        "includeWatermark": true,
        "userFacingErrorMessage": "string",
        "preferStreaming": true
      }
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
    "data": {
      "message": "string"
    }
  }
}
```

> 401 Response

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
      "message": "string"
    }
  }
}
```

> 403 Response

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

> 412 Response

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
      "message": "string"
    }
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
    "data": {
      "message": "string"
    }
  }
}
```

<h3 id="schedules-a-task-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Task scheduled successfully|Inline|
|400|Bad Request|Scheduling task is not possible|Inline|
|401|Unauthorized|Cannot schedule task because it references files in its input|Inline|
|403|Forbidden|Logged in account must be an admin|Inline|
|412|Precondition Failed|Scheduling task is not possible|Inline|
|500|Internal Server Error||Inline|

<h3 id="schedules-a-task-1-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|
|» » task|[TaskProcessingTask](#schemataskprocessingtask)|true|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|
|» » message|string|true|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anyOf*|object|false|none|none|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|
|» » message|string|true|none|none|
|*anyOf*|object|false|none|none|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|

Status Code **412**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|
|» » message|string|true|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|
|» » message|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer_auth, basic_auth
</aside>

## Gets a task including status and result

<a id="opIdtask_processing_api-get-task-ex-app-endpoint"></a>

> Code samples

```bash
curl https://cloud.example.com/ocs/v2.php/taskprocessing/tasks_consumer/task/0 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'OCS-APIRequest: true'
```

`GET /ocs/v2.php/taskprocessing/tasks_consumer/task/{id}`

Endpoint for ExApp usage without user context
Tasks are removed 1 week after receiving their last update
This endpoint requires admin access

<h3 id="gets-a-task-including-status-and-result-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int64)|true|The id of the task|
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
      "task": {
        "id": 0,
        "lastUpdated": 0,
        "type": "string",
        "status": "STATUS_CANCELLED",
        "userId": "string",
        "appId": "string",
        "input": {
          "property1": 0,
          "property2": 0
        },
        "output": {
          "property1": 0,
          "property2": 0
        },
        "customId": "string",
        "completionExpectedAt": 0,
        "progress": 0,
        "scheduledAt": 0,
        "startedAt": 0,
        "endedAt": 0,
        "allowCleanup": true,
        "includeWatermark": true,
        "userFacingErrorMessage": "string",
        "preferStreaming": true
      }
    }
  }
}
```

> 401 Response

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

> 403 Response

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
    "data": {
      "message": "string"
    }
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
    "data": {
      "message": "string"
    }
  }
}
```

<h3 id="gets-a-task-including-status-and-result-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Task returned|Inline|
|401|Unauthorized|Current user is not logged in|Inline|
|403|Forbidden|Logged in account must be an admin|Inline|
|404|Not Found|Task not found|Inline|
|500|Internal Server Error||Inline|

<h3 id="gets-a-task-including-status-and-result-1-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|
|» » task|[TaskProcessingTask](#schemataskprocessingtask)|true|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|

Status Code **403**

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
|» » message|string|true|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|
|» » message|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer_auth, basic_auth
</aside>

## Deletes a task

<a id="opIdtask_processing_api-delete-task-ex-app-endpoint"></a>

> Code samples

```bash
curl https://cloud.example.com/ocs/v2.php/taskprocessing/tasks_consumer/task/0 \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'OCS-APIRequest: true'
```

`DELETE /ocs/v2.php/taskprocessing/tasks_consumer/task/{id}`

Endpoint for ExApp usage without user context
This endpoint requires admin access

<h3 id="deletes-a-task-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int64)|true|The id of the task|
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

> 401 Response

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

> 403 Response

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
    "data": {
      "message": "string"
    }
  }
}
```

<h3 id="deletes-a-task-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Task deleted|Inline|
|401|Unauthorized|Current user is not logged in|Inline|
|403|Forbidden|Logged in account must be an admin|Inline|
|500|Internal Server Error||Inline|

<h3 id="deletes-a-task-1-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object \| null|true|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|

Status Code **403**

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
|» » message|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer_auth, basic_auth
</aside>

## Returns the contents of a file referenced in a task(ExApp route version)

<a id="opIdtask_processing_api-get-file-contents-ex-app"></a>

> Code samples

```bash
curl https://cloud.example.com/ocs/v2.php/taskprocessing/tasks_provider/0/file/0 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'OCS-APIRequest: true'
```

`GET /ocs/v2.php/taskprocessing/tasks_provider/{taskId}/file/{fileId}`

This endpoint requires admin access

<h3 id="returns-the-contents-of-a-file-referenced-in-a-taskexapp-route-version-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|taskId|path|integer(int64)|true|The id of the task|
|fileId|path|integer(int64)|true|The file id of the file to retrieve|
|OCS-APIRequest|header|boolean|true|Required to be true for the API request to pass|

> Example responses

> 401 Response

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

> 403 Response

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
    "data": {
      "message": "string"
    }
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
    "data": {
      "message": "string"
    }
  }
}
```

<h3 id="returns-the-contents-of-a-file-referenced-in-a-taskexapp-route-version-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|File content returned|Inline|
|401|Unauthorized|Current user is not logged in|Inline|
|403|Forbidden|Logged in account must be an admin|Inline|
|404|Not Found|Task or file not found|Inline|
|500|Internal Server Error||Inline|

<h3 id="returns-the-contents-of-a-file-referenced-in-a-taskexapp-route-version-responseschema">Response Schema</h3>

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|

Status Code **403**

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
|» » message|string|true|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|
|» » message|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer_auth, basic_auth
</aside>

## Upload a file so it can be referenced in a task result (ExApp route version)

<a id="opIdtask_processing_api-set-file-contents-ex-app"></a>

> Code samples

```bash
curl https://cloud.example.com/ocs/v2.php/taskprocessing/tasks_provider/0/file \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'OCS-APIRequest: true'
```

`POST /ocs/v2.php/taskprocessing/tasks_provider/{taskId}/file`

Use field 'file' for the file upload
This endpoint requires admin access

<h3 id="upload-a-file-so-it-can-be-referenced-in-a-task-result-exapp-route-version-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|taskId|path|integer(int64)|true|The id of the task|
|OCS-APIRequest|header|boolean|true|Required to be true for the API request to pass|

> Example responses

> 201 Response

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
      "fileId": 0
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
    "data": {
      "message": "string"
    }
  }
}
```

> 401 Response

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

> 403 Response

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
    "data": {
      "message": "string"
    }
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
    "data": {
      "message": "string"
    }
  }
}
```

<h3 id="upload-a-file-so-it-can-be-referenced-in-a-task-result-exapp-route-version-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|File created|Inline|
|400|Bad Request|File upload failed or no file was uploaded|Inline|
|401|Unauthorized|Current user is not logged in|Inline|
|403|Forbidden|Logged in account must be an admin|Inline|
|404|Not Found|Task not found|Inline|
|500|Internal Server Error||Inline|

<h3 id="upload-a-file-so-it-can-be-referenced-in-a-task-result-exapp-route-version-responseschema">Response Schema</h3>

Status Code **201**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|
|» » fileId|integer(int64)|true|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|
|» » message|string|true|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|

Status Code **403**

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
|» » message|string|true|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|
|» » message|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer_auth, basic_auth
</aside>

## Sets the task progress

<a id="opIdtask_processing_api-set-progress"></a>

> Code samples

```bash
curl https://cloud.example.com/ocs/v2.php/taskprocessing/tasks_provider/0/progress \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'OCS-APIRequest: true' \
  -d '{
    "progress": 0
  }'
```

`POST /ocs/v2.php/taskprocessing/tasks_provider/{taskId}/progress`

This endpoint requires admin access

> Body parameter

```json
{
  "progress": 0
}
```

<h3 id="sets-the-task-progress-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|taskId|path|integer(int64)|true|The id of the task|
|OCS-APIRequest|header|boolean|true|Required to be true for the API request to pass|
|body|body|object|true|none|
|» progress|body|number(double)|true|The progress|

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
      "task": {
        "id": 0,
        "lastUpdated": 0,
        "type": "string",
        "status": "STATUS_CANCELLED",
        "userId": "string",
        "appId": "string",
        "input": {
          "property1": 0,
          "property2": 0
        },
        "output": {
          "property1": 0,
          "property2": 0
        },
        "customId": "string",
        "completionExpectedAt": 0,
        "progress": 0,
        "scheduledAt": 0,
        "startedAt": 0,
        "endedAt": 0,
        "allowCleanup": true,
        "includeWatermark": true,
        "userFacingErrorMessage": "string",
        "preferStreaming": true
      }
    }
  }
}
```

> 401 Response

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

> 403 Response

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
    "data": {
      "message": "string"
    }
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
    "data": {
      "message": "string"
    }
  }
}
```

<h3 id="sets-the-task-progress-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Progress updated successfully|Inline|
|401|Unauthorized|Current user is not logged in|Inline|
|403|Forbidden|Logged in account must be an admin|Inline|
|404|Not Found|Task not found|Inline|
|500|Internal Server Error||Inline|

<h3 id="sets-the-task-progress-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|
|» » task|[TaskProcessingTask](#schemataskprocessingtask)|true|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|

Status Code **403**

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
|» » message|string|true|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|
|» » message|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer_auth, basic_auth
</aside>

## Sets the task result

<a id="opIdtask_processing_api-set-result"></a>

> Code samples

```bash
curl https://cloud.example.com/ocs/v2.php/taskprocessing/tasks_provider/0/result \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'OCS-APIRequest: true' \
  -d '{
    "output": null,
    "errorMessage": null,
    "userFacingErrorMessage": null
  }'
```

`POST /ocs/v2.php/taskprocessing/tasks_provider/{taskId}/result`

This endpoint requires admin access

> Body parameter

```json
{
  "output": null,
  "errorMessage": null,
  "userFacingErrorMessage": null
}
```

<h3 id="sets-the-task-result-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|taskId|path|integer(int64)|true|The id of the task|
|OCS-APIRequest|header|boolean|true|Required to be true for the API request to pass|
|body|body|object|false|none|
|» output|body|object \| null|false|The resulting task output, files are represented by their IDs|
|» » **additionalProperties**|body|object|false|none|
|» errorMessage|body|string \| null|false|An error message if the task failed|
|» userFacingErrorMessage|body|string \| null|false|An error message that will be shown to the user|

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
      "task": {
        "id": 0,
        "lastUpdated": 0,
        "type": "string",
        "status": "STATUS_CANCELLED",
        "userId": "string",
        "appId": "string",
        "input": {
          "property1": 0,
          "property2": 0
        },
        "output": {
          "property1": 0,
          "property2": 0
        },
        "customId": "string",
        "completionExpectedAt": 0,
        "progress": 0,
        "scheduledAt": 0,
        "startedAt": 0,
        "endedAt": 0,
        "allowCleanup": true,
        "includeWatermark": true,
        "userFacingErrorMessage": "string",
        "preferStreaming": true
      }
    }
  }
}
```

> 401 Response

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

> 403 Response

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
    "data": {
      "message": "string"
    }
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
    "data": {
      "message": "string"
    }
  }
}
```

<h3 id="sets-the-task-result-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Result updated successfully|Inline|
|401|Unauthorized|Current user is not logged in|Inline|
|403|Forbidden|Logged in account must be an admin|Inline|
|404|Not Found|Task not found|Inline|
|500|Internal Server Error||Inline|

<h3 id="sets-the-task-result-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|
|» » task|[TaskProcessingTask](#schemataskprocessingtask)|true|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|

Status Code **403**

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
|» » message|string|true|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|
|» » message|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer_auth, basic_auth
</aside>

## Sets the task intermediate result while it is running

<a id="opIdtask_processing_api-set-intermediate-result"></a>

> Code samples

```bash
curl https://cloud.example.com/ocs/v2.php/taskprocessing/tasks_provider/0/stream-result \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'OCS-APIRequest: true' \
  -d '{
    "output": {
      "property1": {},
      "property2": {}
    }
  }'
```

`POST /ocs/v2.php/taskprocessing/tasks_provider/{taskId}/stream-result`

This endpoint requires admin access

> Body parameter

```json
{
  "output": {
    "property1": {},
    "property2": {}
  }
}
```

<h3 id="sets-the-task-intermediate-result-while-it-is-running-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|taskId|path|integer(int64)|true|The id of the task|
|OCS-APIRequest|header|boolean|true|Required to be true for the API request to pass|
|body|body|object|true|none|
|» output|body|object|true|The intermediate task output, files are represented by their IDs|
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
      "task": {
        "id": 0,
        "lastUpdated": 0,
        "type": "string",
        "status": "STATUS_CANCELLED",
        "userId": "string",
        "appId": "string",
        "input": {
          "property1": 0,
          "property2": 0
        },
        "output": {
          "property1": 0,
          "property2": 0
        },
        "customId": "string",
        "completionExpectedAt": 0,
        "progress": 0,
        "scheduledAt": 0,
        "startedAt": 0,
        "endedAt": 0,
        "allowCleanup": true,
        "includeWatermark": true,
        "userFacingErrorMessage": "string",
        "preferStreaming": true
      }
    }
  }
}
```

> 401 Response

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

> 403 Response

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
    "data": {
      "message": "string"
    }
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
    "data": {
      "message": "string"
    }
  }
}
```

<h3 id="sets-the-task-intermediate-result-while-it-is-running-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Result updated successfully|Inline|
|401|Unauthorized|Current user is not logged in|Inline|
|403|Forbidden|Logged in account must be an admin|Inline|
|404|Not Found|Task not found|Inline|
|500|Internal Server Error||Inline|

<h3 id="sets-the-task-intermediate-result-while-it-is-running-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|
|» » task|[TaskProcessingTask](#schemataskprocessingtask)|true|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|

Status Code **403**

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
|» » message|string|true|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|
|» » message|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer_auth, basic_auth
</aside>

## Cancels a task

<a id="opIdtask_processing_api-cancel-task-ex-app-endpoint"></a>

> Code samples

```bash
curl https://cloud.example.com/ocs/v2.php/taskprocessing/tasks_consumer/tasks/0/cancel \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'OCS-APIRequest: true'
```

`POST /ocs/v2.php/taskprocessing/tasks_consumer/tasks/{taskId}/cancel`

Endpoint for ExApp usage without user context
This endpoint requires admin access

<h3 id="cancels-a-task-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|taskId|path|integer(int64)|true|The id of the task|
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
      "task": {
        "id": 0,
        "lastUpdated": 0,
        "type": "string",
        "status": "STATUS_CANCELLED",
        "userId": "string",
        "appId": "string",
        "input": {
          "property1": 0,
          "property2": 0
        },
        "output": {
          "property1": 0,
          "property2": 0
        },
        "customId": "string",
        "completionExpectedAt": 0,
        "progress": 0,
        "scheduledAt": 0,
        "startedAt": 0,
        "endedAt": 0,
        "allowCleanup": true,
        "includeWatermark": true,
        "userFacingErrorMessage": "string",
        "preferStreaming": true
      }
    }
  }
}
```

> 401 Response

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

> 403 Response

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
    "data": {
      "message": "string"
    }
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
    "data": {
      "message": "string"
    }
  }
}
```

<h3 id="cancels-a-task-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Task canceled successfully|Inline|
|401|Unauthorized|Current user is not logged in|Inline|
|403|Forbidden|Logged in account must be an admin|Inline|
|404|Not Found|Task not found|Inline|
|500|Internal Server Error||Inline|

<h3 id="cancels-a-task-1-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|
|» » task|[TaskProcessingTask](#schemataskprocessingtask)|true|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|

Status Code **403**

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
|» » message|string|true|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|
|» » message|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer_auth, basic_auth
</aside>

## Returns the next scheduled task for the taskTypeId

<a id="opIdtask_processing_api-get-next-scheduled-task"></a>

> Code samples

```bash
curl 'https://cloud.example.com/ocs/v2.php/taskprocessing/tasks_provider/next?providerIds%5B%5D=string&taskTypeIds%5B%5D=string' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'OCS-APIRequest: true'
```

`GET /ocs/v2.php/taskprocessing/tasks_provider/next`

This endpoint requires admin access

<h3 id="returns-the-next-scheduled-task-for-the-tasktypeid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|providerIds[]|query|[string]|true|The ids of the providers|
|taskTypeIds[]|query|[string]|true|The ids of the task types|
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
      "task": {
        "id": 0,
        "lastUpdated": 0,
        "type": "string",
        "status": "STATUS_CANCELLED",
        "userId": "string",
        "appId": "string",
        "input": {
          "property1": 0,
          "property2": 0
        },
        "output": {
          "property1": 0,
          "property2": 0
        },
        "customId": "string",
        "completionExpectedAt": 0,
        "progress": 0,
        "scheduledAt": 0,
        "startedAt": 0,
        "endedAt": 0,
        "allowCleanup": true,
        "includeWatermark": true,
        "userFacingErrorMessage": "string",
        "preferStreaming": true
      },
      "provider": {
        "name": "string"
      }
    }
  }
}
```

> 401 Response

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

> 403 Response

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
    "data": {
      "message": "string"
    }
  }
}
```

<h3 id="returns-the-next-scheduled-task-for-the-tasktypeid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Task returned|Inline|
|204|No Content|No task found|None|
|401|Unauthorized|Current user is not logged in|Inline|
|403|Forbidden|Logged in account must be an admin|Inline|
|500|Internal Server Error||Inline|

<h3 id="returns-the-next-scheduled-task-for-the-tasktypeid-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|
|» » task|[TaskProcessingTask](#schemataskprocessingtask)|true|none|none|
|» » provider|object|true|none|none|
|» » » name|string|true|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|

Status Code **403**

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
|» » message|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer_auth, basic_auth
</aside>

## Returns the next n scheduled tasks for the specified set of taskTypes and providers The returned tasks are capped at ~50MiB

<a id="opIdtask_processing_api-get-next-scheduled-task-batch"></a>

> Code samples

```bash
curl 'https://cloud.example.com/ocs/v2.php/taskprocessing/tasks_provider/next_batch?providerIds%5B%5D=string&taskTypeIds%5B%5D=string' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'OCS-APIRequest: true'
```

`GET /ocs/v2.php/taskprocessing/tasks_provider/next_batch`

This endpoint requires admin access

<h3 id="returns-the-next-n-scheduled-tasks-for-the-specified-set-of-tasktypes-and-providers-the-returned-tasks-are-capped-at-50mib-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|providerIds[]|query|[string]|true|The ids of the providers|
|taskTypeIds[]|query|[string]|true|The ids of the task types|
|numberOfTasks|query|integer(int64)|false|The number of tasks to return|
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
      "tasks": [
        {
          "task": {
            "id": 0,
            "lastUpdated": 0,
            "type": "string",
            "status": "STATUS_CANCELLED",
            "userId": "string",
            "appId": "string",
            "input": {
              "property1": 0,
              "property2": 0
            },
            "output": {
              "property1": 0,
              "property2": 0
            },
            "customId": "string",
            "completionExpectedAt": 0,
            "progress": 0,
            "scheduledAt": 0,
            "startedAt": 0,
            "endedAt": 0,
            "allowCleanup": true,
            "includeWatermark": true,
            "userFacingErrorMessage": "string",
            "preferStreaming": true
          },
          "provider": "string"
        }
      ],
      "has_more": true
    }
  }
}
```

> 401 Response

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

> 403 Response

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
    "data": {
      "message": "string"
    }
  }
}
```

<h3 id="returns-the-next-n-scheduled-tasks-for-the-specified-set-of-tasktypes-and-providers-the-returned-tasks-are-capped-at-50mib-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Tasks returned|Inline|
|401|Unauthorized|Current user is not logged in|Inline|
|403|Forbidden|Logged in account must be an admin|Inline|
|500|Internal Server Error||Inline|

<h3 id="returns-the-next-n-scheduled-tasks-for-the-specified-set-of-tasktypes-and-providers-the-returned-tasks-are-capped-at-50mib-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|
|» » tasks|[object]|true|none|none|
|» » » task|[TaskProcessingTask](#schemataskprocessingtask)|true|none|none|
|» » » provider|string|true|none|none|
|» » has_more|boolean|true|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|

Status Code **403**

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
|» » message|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer_auth, basic_auth
</aside>

## Returns queue statistics for task processing

<a id="opIdtask_processing_api-queue-stats"></a>

> Code samples

```bash
curl https://cloud.example.com/ocs/v2.php/taskprocessing/queue_stats \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'OCS-APIRequest: true'
```

`GET /ocs/v2.php/taskprocessing/queue_stats`

Returns the count of scheduled and running tasks, optionally filtered by task type(s). Designed for external scalers (e.g. KEDA) to poll for task queue depth. Admin-only endpoint authenticated via app_password.
This endpoint requires admin access

<h3 id="returns-queue-statistics-for-task-processing-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|taskTypeIds[]|query|[string]|false|List of task type IDs to filter by|
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
      "scheduled_count": 0,
      "running_count": 0
    }
  }
}
```

> 401 Response

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

> 403 Response

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
    "data": {
      "message": "string"
    }
  }
}
```

<h3 id="returns-queue-statistics-for-task-processing-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Queue stats returned|Inline|
|401|Unauthorized|Current user is not logged in|Inline|
|403|Forbidden|Logged in account must be an admin|Inline|
|500|Internal Server Error||Inline|

<h3 id="returns-queue-statistics-for-task-processing-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|
|» » scheduled_count|integer(int64)|true|none|none|
|» » running_count|integer(int64)|true|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|

Status Code **403**

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
|» » message|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer_auth, basic_auth
</aside>

<h1 id="core-full-teamsapi">teams_api</h1>

## Get all resources of a team

<a id="opIdteams_api-resolve-one"></a>

> Code samples

```bash
curl https://cloud.example.com/ocs/v2.php/teams/string/resources \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'OCS-APIRequest: true'
```

`GET /ocs/v2.php/teams/{teamId}/resources`

<h3 id="get-all-resources-of-a-team-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|teamId|path|string|true|Unique id of the team|
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
      "resources": [
        {
          "id": "string",
          "label": "string",
          "url": "string",
          "iconSvg": "string",
          "iconURL": "string",
          "iconEmoji": "string",
          "provider": {
            "id": "string",
            "name": "string",
            "icon": "string"
          }
        }
      ]
    }
  }
}
```

> 401 Response

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

<h3 id="get-all-resources-of-a-team-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Resources returned|Inline|
|401|Unauthorized|Current user is not logged in|Inline|

<h3 id="get-all-resources-of-a-team-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|
|» » resources|[[TeamResource](#schemateamresource)]|true|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer_auth, basic_auth
</aside>

## Get all teams of a resource

<a id="opIdteams_api-list-teams"></a>

> Code samples

```bash
curl https://cloud.example.com/ocs/v2.php/teams/resources/string/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'OCS-APIRequest: true'
```

`GET /ocs/v2.php/teams/resources/{providerId}/{resourceId}`

<h3 id="get-all-teams-of-a-resource-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|providerId|path|string|true|Identifier of the provider (e.g. deck, talk, collectives)|
|resourceId|path|string|true|Unique id of the resource to list teams for (e.g. deck board id)|
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
      "teams": [
        {
          "teamId": "string",
          "displayName": "string",
          "link": "string",
          "resources": [
            {
              "id": "string",
              "label": "string",
              "url": "string",
              "iconSvg": "string",
              "iconURL": "string",
              "iconEmoji": "string",
              "provider": {
                "id": "string",
                "name": "string",
                "icon": "string"
              }
            }
          ]
        }
      ]
    }
  }
}
```

> 401 Response

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

<h3 id="get-all-teams-of-a-resource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Teams returned|Inline|
|401|Unauthorized|Current user is not logged in|Inline|

<h3 id="get-all-teams-of-a-resource-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|
|» » teams|[[TeamWithResources](#schemateamwithresources)]|true|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer_auth, basic_auth
</aside>

<h1 id="core-full-textprocessingapi">text_processing_api</h1>

## This endpoint returns all available LanguageModel task types

<a id="opIdtext_processing_api-task-types"></a>

> Code samples

```bash
curl https://cloud.example.com/ocs/v2.php/textprocessing/tasktypes \
  -H 'Accept: application/json' \
  -H 'OCS-APIRequest: true'
```

`GET /ocs/v2.php/textprocessing/tasktypes`

<h3 id="this-endpoint-returns-all-available-languagemodel-task-types-parameters">Parameters</h3>

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
    "data": {
      "types": [
        {
          "id": "string",
          "name": "string",
          "description": "string"
        }
      ]
    }
  }
}
```

<h3 id="this-endpoint-returns-all-available-languagemodel-task-types-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Task types returned|Inline|

<h3 id="this-endpoint-returns-all-available-languagemodel-task-types-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|
|» » types|[object]|true|none|none|
|» » » id|string|true|none|none|
|» » » name|string|true|none|none|
|» » » description|string|true|none|none|

<aside class="warning">
Authentication is optional for this operation. To authenticate, use one of the following methods:
bearer_auth, basic_auth
</aside>

## This endpoint allows scheduling a language model task

<a id="opIdtext_processing_api-schedule"></a>

> Code samples

```bash
curl https://cloud.example.com/ocs/v2.php/textprocessing/schedule \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'OCS-APIRequest: true' \
  -d '{
    "input": "string",
    "type": "string",
    "appId": "string",
    "identifier": ""
  }'
```

`POST /ocs/v2.php/textprocessing/schedule`

> Body parameter

```json
{
  "input": "string",
  "type": "string",
  "appId": "string",
  "identifier": ""
}
```

<h3 id="this-endpoint-allows-scheduling-a-language-model-task-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|OCS-APIRequest|header|boolean|true|Required to be true for the API request to pass|
|body|body|object|true|none|
|» input|body|string|true|Input text|
|» type|body|string|true|Type of the task|
|» appId|body|string|true|ID of the app that will execute the task|
|» identifier|body|string|false|An arbitrary identifier for the task|

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
      "task": {
        "id": 0,
        "type": "string",
        "status": 0,
        "userId": "string",
        "appId": "string",
        "input": "string",
        "output": "string",
        "identifier": "string",
        "completionExpectedAt": 0
      }
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
    "data": {
      "message": "string"
    }
  }
}
```

> 401 Response

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

> 412 Response

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
      "message": "string"
    }
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
    "data": {
      "message": "string"
    }
  }
}
```

<h3 id="this-endpoint-allows-scheduling-a-language-model-task-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Task scheduled successfully|Inline|
|400|Bad Request|Scheduling task is not possible|Inline|
|401|Unauthorized|Current user is not logged in|Inline|
|412|Precondition Failed|Scheduling task is not possible|Inline|
|500|Internal Server Error||Inline|

<h3 id="this-endpoint-allows-scheduling-a-language-model-task-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|
|» » task|[TextProcessingTask](#schematextprocessingtask)|true|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|
|» » message|string|true|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|

Status Code **412**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|
|» » message|string|true|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|
|» » message|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer_auth, basic_auth
</aside>

## This endpoint allows checking the status and results of a task. Tasks are removed 1 week after receiving their last update.

<a id="opIdtext_processing_api-get-task"></a>

> Code samples

```bash
curl https://cloud.example.com/ocs/v2.php/textprocessing/task/0 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'OCS-APIRequest: true'
```

`GET /ocs/v2.php/textprocessing/task/{id}`

<h3 id="this-endpoint-allows-checking-the-status-and-results-of-a-task-tasks-are-removed-1-week-after-receiving-their-last-update-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int64)|true|The id of the task|
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
      "task": {
        "id": 0,
        "type": "string",
        "status": 0,
        "userId": "string",
        "appId": "string",
        "input": "string",
        "output": "string",
        "identifier": "string",
        "completionExpectedAt": 0
      }
    }
  }
}
```

> 401 Response

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
    "data": {
      "message": "string"
    }
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
    "data": {
      "message": "string"
    }
  }
}
```

<h3 id="this-endpoint-allows-checking-the-status-and-results-of-a-task-tasks-are-removed-1-week-after-receiving-their-last-update-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Task returned|Inline|
|401|Unauthorized|Current user is not logged in|Inline|
|404|Not Found|Task not found|Inline|
|500|Internal Server Error||Inline|

<h3 id="this-endpoint-allows-checking-the-status-and-results-of-a-task-tasks-are-removed-1-week-after-receiving-their-last-update-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|
|» » task|[TextProcessingTask](#schematextprocessingtask)|true|none|none|

Status Code **401**

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
|» » message|string|true|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|
|» » message|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer_auth, basic_auth
</aside>

## This endpoint allows to delete a scheduled task for a user

<a id="opIdtext_processing_api-delete-task"></a>

> Code samples

```bash
curl https://cloud.example.com/ocs/v2.php/textprocessing/task/0 \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'OCS-APIRequest: true'
```

`DELETE /ocs/v2.php/textprocessing/task/{id}`

<h3 id="this-endpoint-allows-to-delete-a-scheduled-task-for-a-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int64)|true|The id of the task|
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
      "task": {
        "id": 0,
        "type": "string",
        "status": 0,
        "userId": "string",
        "appId": "string",
        "input": "string",
        "output": "string",
        "identifier": "string",
        "completionExpectedAt": 0
      }
    }
  }
}
```

> 401 Response

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
    "data": {
      "message": "string"
    }
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
    "data": {
      "message": "string"
    }
  }
}
```

<h3 id="this-endpoint-allows-to-delete-a-scheduled-task-for-a-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Task returned|Inline|
|401|Unauthorized|Current user is not logged in|Inline|
|404|Not Found|Task not found|Inline|
|500|Internal Server Error||Inline|

<h3 id="this-endpoint-allows-to-delete-a-scheduled-task-for-a-user-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|
|» » task|[TextProcessingTask](#schematextprocessingtask)|true|none|none|

Status Code **401**

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
|» » message|string|true|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|
|» » message|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer_auth, basic_auth
</aside>

## This endpoint returns a list of tasks of a user that are related with a specific appId and optionally with an identifier

<a id="opIdtext_processing_api-list-tasks-by-app"></a>

> Code samples

```bash
curl https://cloud.example.com/ocs/v2.php/textprocessing/tasks/app/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'OCS-APIRequest: true'
```

`GET /ocs/v2.php/textprocessing/tasks/app/{appId}`

<h3 id="this-endpoint-returns-a-list-of-tasks-of-a-user-that-are-related-with-a-specific-appid-and-optionally-with-an-identifier-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|string|true|ID of the app|
|identifier|query|string \| null|false|An arbitrary identifier for the task|
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
      "tasks": [
        {
          "id": 0,
          "type": "string",
          "status": 0,
          "userId": "string",
          "appId": "string",
          "input": "string",
          "output": "string",
          "identifier": "string",
          "completionExpectedAt": 0
        }
      ]
    }
  }
}
```

> 401 Response

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
    "data": {
      "message": "string"
    }
  }
}
```

<h3 id="this-endpoint-returns-a-list-of-tasks-of-a-user-that-are-related-with-a-specific-appid-and-optionally-with-an-identifier-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Task list returned|Inline|
|401|Unauthorized|Current user is not logged in|Inline|
|500|Internal Server Error||Inline|

<h3 id="this-endpoint-returns-a-list-of-tasks-of-a-user-that-are-related-with-a-specific-appid-and-optionally-with-an-identifier-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|
|» » tasks|[[TextProcessingTask](#schematextprocessingtask)]|true|none|none|

Status Code **401**

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
|» » message|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer_auth, basic_auth
</aside>

<h1 id="core-full-texttoimageapi">text_to_image_api</h1>

## Check whether this feature is available

<a id="opIdtext_to_image_api-is-available"></a>

> Code samples

```bash
curl https://cloud.example.com/ocs/v2.php/text2image/is_available \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'OCS-APIRequest: true'
```

`GET /ocs/v2.php/text2image/is_available`

<h3 id="check-whether-this-feature-is-available-parameters">Parameters</h3>

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
    "data": {
      "isAvailable": true
    }
  }
}
```

> 401 Response

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

<h3 id="check-whether-this-feature-is-available-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns availability status|Inline|
|401|Unauthorized|Current user is not logged in|Inline|

<h3 id="check-whether-this-feature-is-available-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|
|» » isAvailable|boolean|true|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer_auth, basic_auth
</aside>

## This endpoint allows scheduling a text to image task

<a id="opIdtext_to_image_api-schedule"></a>

> Code samples

```bash
curl https://cloud.example.com/ocs/v2.php/text2image/schedule \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'OCS-APIRequest: true' \
  -d '{
    "input": "string",
    "appId": "string",
    "identifier": "",
    "numberOfImages": 8
  }'
```

`POST /ocs/v2.php/text2image/schedule`

> Body parameter

```json
{
  "input": "string",
  "appId": "string",
  "identifier": "",
  "numberOfImages": 8
}
```

<h3 id="this-endpoint-allows-scheduling-a-text-to-image-task-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|OCS-APIRequest|header|boolean|true|Required to be true for the API request to pass|
|body|body|object|true|none|
|» input|body|string|true|Input text|
|» appId|body|string|true|ID of the app that will execute the task|
|» identifier|body|string|false|An arbitrary identifier for the task|
|» numberOfImages|body|integer(int64)|false|The number of images to generate|

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
      "task": {
        "id": 0,
        "status": 0,
        "userId": "string",
        "appId": "string",
        "input": "string",
        "identifier": "string",
        "numberOfImages": 0,
        "completionExpectedAt": 0
      }
    }
  }
}
```

> 401 Response

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

> 412 Response

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
      "message": "string"
    }
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
    "data": {
      "message": "string"
    }
  }
}
```

<h3 id="this-endpoint-allows-scheduling-a-text-to-image-task-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Task scheduled successfully|Inline|
|401|Unauthorized|Current user is not logged in|Inline|
|412|Precondition Failed|Scheduling task is not possible|Inline|
|500|Internal Server Error||Inline|

<h3 id="this-endpoint-allows-scheduling-a-text-to-image-task-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|
|» » task|[TextToImageTask](#schematexttoimagetask)|true|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|

Status Code **412**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|
|» » message|string|true|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|
|» » message|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer_auth, basic_auth
</aside>

## This endpoint allows checking the status and results of a task. Tasks are removed 1 week after receiving their last update.

<a id="opIdtext_to_image_api-get-task"></a>

> Code samples

```bash
curl https://cloud.example.com/ocs/v2.php/text2image/task/0 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'OCS-APIRequest: true'
```

`GET /ocs/v2.php/text2image/task/{id}`

<h3 id="this-endpoint-allows-checking-the-status-and-results-of-a-task-tasks-are-removed-1-week-after-receiving-their-last-update-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int64)|true|The id of the task|
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
      "task": {
        "id": 0,
        "status": 0,
        "userId": "string",
        "appId": "string",
        "input": "string",
        "identifier": "string",
        "numberOfImages": 0,
        "completionExpectedAt": 0
      }
    }
  }
}
```

> 401 Response

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
    "data": {
      "message": "string"
    }
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
    "data": {
      "message": "string"
    }
  }
}
```

<h3 id="this-endpoint-allows-checking-the-status-and-results-of-a-task-tasks-are-removed-1-week-after-receiving-their-last-update-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Task returned|Inline|
|401|Unauthorized|Current user is not logged in|Inline|
|404|Not Found|Task not found|Inline|
|500|Internal Server Error||Inline|

<h3 id="this-endpoint-allows-checking-the-status-and-results-of-a-task-tasks-are-removed-1-week-after-receiving-their-last-update-1-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|
|» » task|[TextToImageTask](#schematexttoimagetask)|true|none|none|

Status Code **401**

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
|» » message|string|true|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|
|» » message|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer_auth, basic_auth
</aside>

## This endpoint allows to delete a scheduled task for a user

<a id="opIdtext_to_image_api-delete-task"></a>

> Code samples

```bash
curl https://cloud.example.com/ocs/v2.php/text2image/task/0 \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'OCS-APIRequest: true'
```

`DELETE /ocs/v2.php/text2image/task/{id}`

<h3 id="this-endpoint-allows-to-delete-a-scheduled-task-for-a-user-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int64)|true|The id of the task|
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
      "task": {
        "id": 0,
        "status": 0,
        "userId": "string",
        "appId": "string",
        "input": "string",
        "identifier": "string",
        "numberOfImages": 0,
        "completionExpectedAt": 0
      }
    }
  }
}
```

> 401 Response

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
    "data": {
      "message": "string"
    }
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
    "data": {
      "message": "string"
    }
  }
}
```

<h3 id="this-endpoint-allows-to-delete-a-scheduled-task-for-a-user-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Task returned|Inline|
|401|Unauthorized|Current user is not logged in|Inline|
|404|Not Found|Task not found|Inline|
|500|Internal Server Error||Inline|

<h3 id="this-endpoint-allows-to-delete-a-scheduled-task-for-a-user-1-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|
|» » task|[TextToImageTask](#schematexttoimagetask)|true|none|none|

Status Code **401**

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
|» » message|string|true|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|
|» » message|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer_auth, basic_auth
</aside>

## This endpoint allows downloading the resulting image of a task

<a id="opIdtext_to_image_api-get-image"></a>

> Code samples

```bash
curl https://cloud.example.com/ocs/v2.php/text2image/task/0/image/0 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'OCS-APIRequest: true'
```

`GET /ocs/v2.php/text2image/task/{id}/image/{index}`

<h3 id="this-endpoint-allows-downloading-the-resulting-image-of-a-task-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int64)|true|The id of the task|
|index|path|integer(int64)|true|The index of the image to retrieve|
|OCS-APIRequest|header|boolean|true|Required to be true for the API request to pass|

> Example responses

> 401 Response

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
    "data": {
      "message": "string"
    }
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
    "data": {
      "message": "string"
    }
  }
}
```

<h3 id="this-endpoint-allows-downloading-the-resulting-image-of-a-task-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Image returned|Inline|
|401|Unauthorized|Current user is not logged in|Inline|
|404|Not Found|Task or image not found|Inline|
|500|Internal Server Error||Inline|

<h3 id="this-endpoint-allows-downloading-the-resulting-image-of-a-task-responseschema">Response Schema</h3>

Status Code **401**

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
|» » message|string|true|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|
|» » message|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer_auth, basic_auth
</aside>

## This endpoint returns a list of tasks of a user that are related with a specific appId and optionally with an identifier

<a id="opIdtext_to_image_api-list-tasks-by-app"></a>

> Code samples

```bash
curl https://cloud.example.com/ocs/v2.php/text2image/tasks/app/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'OCS-APIRequest: true'
```

`GET /ocs/v2.php/text2image/tasks/app/{appId}`

<h3 id="this-endpoint-returns-a-list-of-tasks-of-a-user-that-are-related-with-a-specific-appid-and-optionally-with-an-identifier-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|string|true|ID of the app|
|identifier|query|string \| null|false|An arbitrary identifier for the task|
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
      "tasks": [
        {
          "id": 0,
          "status": 0,
          "userId": "string",
          "appId": "string",
          "input": "string",
          "identifier": "string",
          "numberOfImages": 0,
          "completionExpectedAt": 0
        }
      ]
    }
  }
}
```

> 401 Response

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
    "data": {
      "message": "string"
    }
  }
}
```

<h3 id="this-endpoint-returns-a-list-of-tasks-of-a-user-that-are-related-with-a-specific-appid-and-optionally-with-an-identifier-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Task list returned|Inline|
|401|Unauthorized|Current user is not logged in|Inline|
|500|Internal Server Error||Inline|

<h3 id="this-endpoint-returns-a-list-of-tasks-of-a-user-that-are-related-with-a-specific-appid-and-optionally-with-an-identifier-1-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|
|» » tasks|[[TextToImageTask](#schematexttoimagetask)]|true|none|none|

Status Code **401**

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
|» » message|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer_auth, basic_auth
</aside>

<h1 id="core-full-translationapi">translation_api</h1>

## Get the list of supported languages

<a id="opIdtranslation_api-languages"></a>

> Code samples

```bash
curl https://cloud.example.com/ocs/v2.php/translation/languages \
  -H 'Accept: application/json' \
  -H 'OCS-APIRequest: true'
```

`GET /ocs/v2.php/translation/languages`

<h3 id="get-the-list-of-supported-languages-parameters">Parameters</h3>

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
    "data": {
      "languages": [
        {
          "from": "string",
          "fromLabel": "string",
          "to": "string",
          "toLabel": "string"
        }
      ],
      "languageDetection": true
    }
  }
}
```

<h3 id="get-the-list-of-supported-languages-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Supported languages returned|Inline|

<h3 id="get-the-list-of-supported-languages-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|
|» » languages|[object]|true|none|none|
|» » » from|string|true|none|none|
|» » » fromLabel|string|true|none|none|
|» » » to|string|true|none|none|
|» » » toLabel|string|true|none|none|
|» » languageDetection|boolean|true|none|none|

<aside class="warning">
Authentication is optional for this operation. To authenticate, use one of the following methods:
bearer_auth, basic_auth
</aside>

## Translate a text

<a id="opIdtranslation_api-translate"></a>

> Code samples

```bash
curl https://cloud.example.com/ocs/v2.php/translation/translate \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'OCS-APIRequest: true' \
  -d '{
    "text": "string",
    "fromLanguage": "string",
    "toLanguage": "string"
  }'
```

`POST /ocs/v2.php/translation/translate`

> Body parameter

```json
{
  "text": "string",
  "fromLanguage": "string",
  "toLanguage": "string"
}
```

<h3 id="translate-a-text-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|OCS-APIRequest|header|boolean|true|Required to be true for the API request to pass|
|body|body|object|true|none|
|» text|body|string|true|Text to be translated|
|» fromLanguage|body|string \| null|false|Language to translate from|
|» toLanguage|body|string|true|Language to translate to|

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
      "text": "string",
      "from": "string"
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
    "data": {
      "message": "string",
      "from": "string"
    }
  }
}
```

> 412 Response

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
      "message": "string",
      "from": "string"
    }
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
    "data": {
      "message": "string",
      "from": "string"
    }
  }
}
```

<h3 id="translate-a-text-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Translated text returned|Inline|
|400|Bad Request|Language not detected or unable to translate|Inline|
|412|Precondition Failed|Translating is not possible|Inline|
|500|Internal Server Error||Inline|

<h3 id="translate-a-text-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|
|» » text|string|true|none|none|
|» » from|string \| null|true|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|
|» » message|string|true|none|none|
|» » from|string \| null|false|none|none|

Status Code **412**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|
|» » message|string|true|none|none|
|» » from|string \| null|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|
|» » message|string|true|none|none|
|» » from|string \| null|false|none|none|

<aside class="warning">
Authentication is optional for this operation. To authenticate, use one of the following methods:
bearer_auth, basic_auth
</aside>

<h1 id="core-full-unifiedsearch">unified_search</h1>

## Get the providers for unified search

<a id="opIdunified_search-get-providers"></a>

> Code samples

```bash
curl https://cloud.example.com/ocs/v2.php/search/providers \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'OCS-APIRequest: true'
```

`GET /ocs/v2.php/search/providers`

<h3 id="get-the-providers-for-unified-search-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|from|query|string|false|the url the user is currently at|
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
      {
        "id": "string",
        "appId": "string",
        "name": "string",
        "icon": "string",
        "order": 0,
        "isExternalProvider": true,
        "triggers": [
          "string"
        ],
        "filters": {
          "property1": "string",
          "property2": "string"
        },
        "inAppSearch": true
      }
    ]
  }
}
```

> 401 Response

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

<h3 id="get-the-providers-for-unified-search-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Providers returned|Inline|
|401|Unauthorized|Current user is not logged in|Inline|

<h3 id="get-the-providers-for-unified-search-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|[[UnifiedSearchProvider](#schemaunifiedsearchprovider)]|true|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer_auth, basic_auth
</aside>

## Launch a search for a specific search provider.

<a id="opIdunified_search-search"></a>

> Code samples

```bash
curl https://cloud.example.com/ocs/v2.php/search/providers/string/search \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'OCS-APIRequest: true'
```

`GET /ocs/v2.php/search/providers/{providerId}/search`

Additional filters are available for each provider. Send a request to /providers endpoint to list providers with their available filters.

<h3 id="launch-a-search-for-a-specific-search-provider-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|providerId|path|string|true|ID of the provider|
|term|query|string|false|Term to search|
|sortOrder|query|integer(int64) \| null|false|Order of entries|
|limit|query|integer(int64) \| null|false|Maximum amount of entries (capped by configurable unified-search.max-results-per-request, default: 25)|
|cursor|query|integer(int64) \| string \| null|false|Offset for searching|
|from|query|string|false|The current user URL|
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
      "name": "string",
      "isPaginated": true,
      "entries": [
        {
          "thumbnailUrl": "string",
          "title": "string",
          "subline": "string",
          "resourceUrl": "string",
          "icon": "string",
          "rounded": true,
          "attributes": [
            "string"
          ]
        }
      ],
      "cursor": 0
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
    "data": "string"
  }
}
```

> 401 Response

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

<h3 id="launch-a-search-for-a-specific-search-provider-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Search entries returned|Inline|
|400|Bad Request|Searching is not possible|Inline|
|401|Unauthorized|Current user is not logged in|Inline|

<h3 id="launch-a-search-for-a-specific-search-provider-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|[UnifiedSearchResult](#schemaunifiedsearchresult)|true|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|string|true|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer_auth, basic_auth
</aside>

<h1 id="core-full-csrftoken">csrf_token</h1>

## Returns a new CSRF token.

<a id="opIdcsrf_token-index"></a>

> Code samples

```bash
curl https://cloud.example.com/index.php/csrftoken \
  -H 'Accept: application/json'
```

`GET /index.php/csrftoken`

> Example responses

> 200 Response

```json
{
  "token": "string"
}
```

> 403 Response

```json
null
```

<h3 id="returns-a-new-csrf-token-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|CSRF token returned|Inline|
|403|Forbidden|Strict cookie check failed|Inline|

<h3 id="returns-a-new-csrf-token-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|token|string|true|none|none|

<aside class="warning">
Authentication is optional for this operation. To authenticate, use one of the following methods:
bearer_auth, basic_auth
</aside>

<h1 id="core-full-clientflowloginv2">client_flow_login_v2</h1>

## Poll the login flow credentials

<a id="opIdclient_flow_login_v2-poll"></a>

> Code samples

```bash
curl https://cloud.example.com/index.php/login/v2/poll \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "token": "string"
  }'
```

`POST /index.php/login/v2/poll`

> Body parameter

```json
{
  "token": "string"
}
```

<h3 id="poll-the-login-flow-credentials-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» token|body|string|true|Token of the flow|

> Example responses

> 200 Response

```json
{
  "server": "string",
  "loginName": "string",
  "appPassword": "string"
}
```

> 404 Response

```json
null
```

<h3 id="poll-the-login-flow-credentials-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Login flow credentials returned|[LoginFlowV2Credentials](#schemaloginflowv2credentials)|
|404|Not Found|Login flow not found or completed|Inline|

<aside class="warning">
Authentication is optional for this operation. To authenticate, use one of the following methods:
bearer_auth, basic_auth
</aside>

## Init a login flow

<a id="opIdclient_flow_login_v2-init"></a>

> Code samples

```bash
curl https://cloud.example.com/index.php/login/v2 \
  -X POST \
  -H 'Accept: application/json'
```

`POST /index.php/login/v2`

<h3 id="init-a-login-flow-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|user-agent|header|string|false|none|

> Example responses

> 200 Response

```json
{
  "poll": {
    "token": "string",
    "endpoint": "string"
  },
  "login": "string"
}
```

<h3 id="init-a-login-flow-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Login flow init returned|[LoginFlowV2](#schemaloginflowv2)|

<aside class="warning">
Authentication is optional for this operation. To authenticate, use one of the following methods:
bearer_auth, basic_auth
</aside>

<h1 id="core-full-login">login</h1>

## Confirm the user password

<a id="opIdlogin-confirm-password"></a>

> Code samples

```bash
curl https://cloud.example.com/index.php/login/confirm \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "password": "string"
  }'
```

`POST /index.php/login/confirm`

> Body parameter

```json
{
  "password": "string"
}
```

<h3 id="confirm-the-user-password-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» password|body|string|true|The password of the user|

> Example responses

> 200 Response

```json
{
  "lastLogin": 0
}
```

> 401 Response

```json
{
  "message": "string"
}
```

> 403 Response

```json
null
```

<h3 id="confirm-the-user-password-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Password confirmation succeeded|Inline|
|401|Unauthorized|Current user is not logged in|Inline|
|403|Forbidden|Password confirmation failed|Inline|

<h3 id="confirm-the-user-password-1-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|lastLogin|integer(int64)|true|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer_auth, basic_auth
</aside>

<h1 id="core-full-preview">preview</h1>

## Get a preview by file path

<a id="opIdpreview-get-preview"></a>

> Code samples

```bash
curl https://cloud.example.com/index.php/core/preview.png \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /index.php/core/preview.png`

<h3 id="get-a-preview-by-file-path-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|file|query|string|false|Path of the file|
|x|query|integer(int64)|false|Width of the preview. A width of -1 will use the original image width.|
|y|query|integer(int64)|false|Height of the preview. A height of -1 will use the original image height.|
|a|query|boolean|false|Preserve the aspect ratio|
|forceIcon|query|boolean|false|Force returning an icon|
|mode|query|string|false|How to crop the image|
|mimeFallback|query|boolean|false|Whether to fallback to the mime icon if no preview is available|

#### Enumerated Values

|Parameter|Value|
|---|---|
|mode|fill|
|mode|cover|

> Example responses

> 400 Response

```json
null
```

> 401 Response

```json
{
  "message": "string"
}
```

> 403 Response

```json
null
```

> 404 Response

```json
null
```

<h3 id="get-a-preview-by-file-path-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Preview returned|Inline|
|303|See Other|Redirect to the mime icon url if mimeFallback is true|None|
|400|Bad Request|Getting preview is not possible|Inline|
|401|Unauthorized|Current user is not logged in|Inline|
|403|Forbidden|Getting preview is not allowed|Inline|
|404|Not Found|Preview not found|Inline|

<h3 id="get-a-preview-by-file-path-responseschema">Response Schema</h3>

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|true|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|303|Location|string||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer_auth, basic_auth
</aside>

## Get a preview by file ID

<a id="opIdpreview-get-preview-by-file-id"></a>

> Code samples

```bash
curl 'https://cloud.example.com/index.php/core/preview?fileId=1' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /index.php/core/preview`

<h3 id="get-a-preview-by-file-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|fileId|query|integer(int64)|true|ID of the file|
|x|query|integer(int64)|false|Width of the preview. A width of -1 will use the original image width.|
|y|query|integer(int64)|false|Height of the preview. A height of -1 will use the original image height.|
|a|query|boolean|false|Preserve the aspect ratio|
|forceIcon|query|boolean|false|Force returning an icon|
|mode|query|string|false|How to crop the image|
|mimeFallback|query|boolean|false|Whether to fallback to the mime icon if no preview is available|

#### Enumerated Values

|Parameter|Value|
|---|---|
|mode|fill|
|mode|cover|

> Example responses

> 400 Response

```json
null
```

> 401 Response

```json
{
  "message": "string"
}
```

> 403 Response

```json
null
```

> 404 Response

```json
null
```

<h3 id="get-a-preview-by-file-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Preview returned|Inline|
|303|See Other|Redirect to the mime icon url if mimeFallback is true|None|
|400|Bad Request|Getting preview is not possible|Inline|
|401|Unauthorized|Current user is not logged in|Inline|
|403|Forbidden|Getting preview is not allowed|Inline|
|404|Not Found|Preview not found|Inline|

<h3 id="get-a-preview-by-file-id-responseschema">Response Schema</h3>

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|true|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|303|Location|string||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer_auth, basic_auth
</aside>

## Get a preview by mime

<a id="opIdpreview-get-mime-icon-url"></a>

> Code samples

```bash
curl https://cloud.example.com/index.php/core/mimeicon
```

`GET /index.php/core/mimeicon`

<h3 id="get-a-preview-by-mime-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|mime|query|string|false|Mime type|

<h3 id="get-a-preview-by-mime-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|303|See Other|The mime icon url|None|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|303|Location|string||none|

<aside class="warning">
Authentication is optional for this operation. To authenticate, use one of the following methods:
bearer_auth, basic_auth
</aside>

<h1 id="core-full-reference">reference</h1>

## Get a preview for a reference

<a id="opIdreference-preview"></a>

> Code samples

```bash
curl https://cloud.example.com/index.php/core/references/preview/string \
  -H 'Accept: application/json'
```

`GET /index.php/core/references/preview/{referenceId}`

<h3 id="get-a-preview-for-a-reference-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|referenceId|path|string|true|the reference cache key|

> Example responses

> 404 Response

```json
"string"
```

<h3 id="get-a-preview-for-a-reference-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Preview returned|Inline|
|404|Not Found|Reference not found|Inline|

<aside class="warning">
Authentication is optional for this operation. To authenticate, use one of the following methods:
bearer_auth, basic_auth
</aside>

<h1 id="core-full-wipe">wipe</h1>

## Check if the device should be wiped

<a id="opIdwipe-check-wipe"></a>

> Code samples

```bash
curl https://cloud.example.com/index.php/core/wipe/check \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "token": "string"
  }'
```

`POST /index.php/core/wipe/check`

> Body parameter

```json
{
  "token": "string"
}
```

<h3 id="check-if-the-device-should-be-wiped-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» token|body|string|true|App password|

> Example responses

> 200 Response

```json
{
  "wipe": true
}
```

> 404 Response

```json
null
```

<h3 id="check-if-the-device-should-be-wiped-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Device should be wiped|Inline|
|404|Not Found|Device should not be wiped|Inline|

<h3 id="check-if-the-device-should-be-wiped-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|wipe|boolean|true|none|none|

<aside class="warning">
Authentication is optional for this operation. To authenticate, use one of the following methods:
bearer_auth, basic_auth
</aside>

## Finish the wipe

<a id="opIdwipe-wipe-done"></a>

> Code samples

```bash
curl https://cloud.example.com/index.php/core/wipe/success \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "token": "string"
  }'
```

`POST /index.php/core/wipe/success`

> Body parameter

```json
{
  "token": "string"
}
```

<h3 id="finish-the-wipe-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» token|body|string|true|App password|

> Example responses

> 200 Response

```json
null
```

> 404 Response

```json
null
```

<h3 id="finish-the-wipe-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Wipe finished successfully|Inline|
|404|Not Found|Device should not be wiped|Inline|

<aside class="warning">
Authentication is optional for this operation. To authenticate, use one of the following methods:
bearer_auth, basic_auth
</aside>

<h1 id="core-full-default">Default</h1>

## get-status

<a id="opIdget-status"></a>

> Code samples

```bash
curl https://cloud.example.com/status.php \
  -H 'Accept: application/json'
```

`GET /status.php`

> Example responses

> 200 Response

```json
{
  "installed": true,
  "maintenance": true,
  "needsDbUpgrade": true,
  "version": "string",
  "versionstring": "string",
  "edition": "string",
  "productname": "string",
  "extendedSupport": true
}
```

<h3 id="get-status-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Status returned|[Status](#schemastatus)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="core-full-twofactorapi">two_factor_api</h1>

## Get two factor authentication provider states

<a id="opIdtwo_factor_api-state"></a>

> Code samples

```bash
curl 'https://cloud.example.com/ocs/v2.php/twofactor/state?user=string' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'OCS-APIRequest: true'
```

`GET /ocs/v2.php/twofactor/state`

This endpoint requires admin access

<h3 id="get-two-factor-authentication-provider-states-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|user|query|string|true|system user id|
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
      "property1": true,
      "property2": true
    }
  }
}
```

> 401 Response

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

> 403 Response

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

<h3 id="get-two-factor-authentication-provider-states-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|provider states|Inline|
|401|Unauthorized|Current user is not logged in|Inline|
|403|Forbidden|Logged in account must be an admin|Inline|
|404|Not Found|user not found|Inline|

<h3 id="get-two-factor-authentication-provider-states-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|
|» » **additionalProperties**|boolean|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|

Status Code **403**

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
|» data|object \| null|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer_auth, basic_auth
</aside>

## Enable two factor authentication providers for specific user

<a id="opIdtwo_factor_api-enable"></a>

> Code samples

```bash
curl https://cloud.example.com/ocs/v2.php/twofactor/enable \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'OCS-APIRequest: true' \
  -d '{
    "user": "string",
    "providers": []
  }'
```

`POST /ocs/v2.php/twofactor/enable`

This endpoint requires admin access
This endpoint requires password confirmation

> Body parameter

```json
{
  "user": "string",
  "providers": []
}
```

<h3 id="enable-two-factor-authentication-providers-for-specific-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|OCS-APIRequest|header|boolean|true|Required to be true for the API request to pass|
|body|body|object|true|none|
|» user|body|string|true|system user identifier|
|» providers|body|[string]|false|collection of TFA provider ids|

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
      "property1": true,
      "property2": true
    }
  }
}
```

> 401 Response

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

> 403 Response

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

<h3 id="enable-two-factor-authentication-providers-for-specific-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|provider states|Inline|
|401|Unauthorized|Current user is not logged in|Inline|
|403|Forbidden|Logged in account must be an admin|Inline|
|404|Not Found|user not found|Inline|

<h3 id="enable-two-factor-authentication-providers-for-specific-user-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|
|» » **additionalProperties**|boolean|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|

Status Code **403**

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
|» data|object \| null|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer_auth, basic_auth
</aside>

## Disable two factor authentication providers for specific user

<a id="opIdtwo_factor_api-disable"></a>

> Code samples

```bash
curl https://cloud.example.com/ocs/v2.php/twofactor/disable \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'OCS-APIRequest: true' \
  -d '{
    "user": "string",
    "providers": []
  }'
```

`POST /ocs/v2.php/twofactor/disable`

This endpoint requires admin access
This endpoint requires password confirmation

> Body parameter

```json
{
  "user": "string",
  "providers": []
}
```

<h3 id="disable-two-factor-authentication-providers-for-specific-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|OCS-APIRequest|header|boolean|true|Required to be true for the API request to pass|
|body|body|object|true|none|
|» user|body|string|true|system user identifier|
|» providers|body|[string]|false|collection of TFA provider ids|

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
      "property1": true,
      "property2": true
    }
  }
}
```

> 401 Response

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

> 403 Response

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

<h3 id="disable-two-factor-authentication-providers-for-specific-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|provider states|Inline|
|401|Unauthorized|Current user is not logged in|Inline|
|403|Forbidden|Logged in account must be an admin|Inline|
|404|Not Found|user not found|Inline|

<h3 id="disable-two-factor-authentication-providers-for-specific-user-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|
|» » **additionalProperties**|boolean|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|

Status Code **403**

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
|» data|object \| null|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer_auth, basic_auth
</aside>

# Schemas

<h2 id="tocS_AutocompleteResult">AutocompleteResult</h2>
<!-- backwards compatibility -->
<a id="schemaautocompleteresult"></a>
<a id="schema_AutocompleteResult"></a>
<a id="tocSautocompleteresult"></a>
<a id="tocsautocompleteresult"></a>

```json
{
  "id": "string",
  "label": "string",
  "icon": "string",
  "source": "string",
  "status": {
    "status": "string",
    "message": "string",
    "icon": "string",
    "clearAt": 0
  },
  "subline": "string",
  "shareWithDisplayNameUnique": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|
|label|string|true|none|none|
|icon|string|true|none|none|
|source|string|true|none|none|
|status|object \| string|true|none|none|
|subline|string|true|none|none|
|shareWithDisplayNameUnique|string|true|none|none|

<h2 id="tocS_Capabilities">Capabilities</h2>
<!-- backwards compatibility -->
<a id="schemacapabilities"></a>
<a id="schema_Capabilities"></a>
<a id="tocScapabilities"></a>
<a id="tocscapabilities"></a>

```json
{
  "core": {
    "pollinterval": 0,
    "webdav-root": "string",
    "reference-api": true,
    "reference-regex": "string",
    "mod-rewrite-working": true,
    "previews": {
      "enabled_providers": [
        "string"
      ],
      "max_width": 0,
      "max_height": 0
    },
    "user": {
      "language": "string",
      "locale": "string",
      "timezone": "string"
    },
    "can-create-app-token": true
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|core|object|true|none|none|

<h2 id="tocS_Collection">Collection</h2>
<!-- backwards compatibility -->
<a id="schemacollection"></a>
<a id="schema_Collection"></a>
<a id="tocScollection"></a>
<a id="tocscollection"></a>

```json
{
  "id": 0,
  "name": "string",
  "resources": [
    {
      "richObjectType": "string",
      "richObject": {
        "property1": {},
        "property2": {}
      },
      "openGraphObject": {
        "id": "string",
        "name": "string",
        "description": "string",
        "thumb": "string",
        "link": "string"
      },
      "accessible": true
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int64)|true|none|none|
|name|string|true|none|none|
|resources|[[Resource](#schemaresource)]|true|none|none|

<h2 id="tocS_ContactsAction">ContactsAction</h2>
<!-- backwards compatibility -->
<a id="schemacontactsaction"></a>
<a id="schema_ContactsAction"></a>
<a id="tocScontactsaction"></a>
<a id="tocscontactsaction"></a>

```json
{
  "title": "string",
  "icon": "string",
  "hyperlink": "string",
  "appId": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|title|string|true|none|none|
|icon|string|true|none|none|
|hyperlink|string|true|none|none|
|appId|string|true|none|none|

<h2 id="tocS_LoginFlowV2">LoginFlowV2</h2>
<!-- backwards compatibility -->
<a id="schemaloginflowv2"></a>
<a id="schema_LoginFlowV2"></a>
<a id="tocSloginflowv2"></a>
<a id="tocsloginflowv2"></a>

```json
{
  "poll": {
    "token": "string",
    "endpoint": "string"
  },
  "login": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|poll|object|true|none|none|
|login|string|true|none|none|

<h2 id="tocS_LoginFlowV2Credentials">LoginFlowV2Credentials</h2>
<!-- backwards compatibility -->
<a id="schemaloginflowv2credentials"></a>
<a id="schema_LoginFlowV2Credentials"></a>
<a id="tocSloginflowv2credentials"></a>
<a id="tocsloginflowv2credentials"></a>

```json
{
  "server": "string",
  "loginName": "string",
  "appPassword": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|server|string|true|none|none|
|loginName|string|true|none|none|
|appPassword|string|true|none|none|

<h2 id="tocS_NavigationEntry">NavigationEntry</h2>
<!-- backwards compatibility -->
<a id="schemanavigationentry"></a>
<a id="schema_NavigationEntry"></a>
<a id="tocSnavigationentry"></a>
<a id="tocsnavigationentry"></a>

```json
{
  "id": "string",
  "order": 0,
  "href": "string",
  "icon": "string",
  "type": "link",
  "name": "string",
  "app": "string",
  "default": true,
  "active": true,
  "classes": "string",
  "unread": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|
|order|integer(int64)|false|none|none|
|href|string|true|none|none|
|icon|string|true|none|none|
|type|string|true|none|none|
|name|string|true|none|none|
|app|string|false|none|none|
|default|boolean|false|none|none|
|active|boolean|true|none|none|
|classes|string|true|none|none|
|unread|integer(int64)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|link|

<h2 id="tocS_NavigationSettingsEntry">NavigationSettingsEntry</h2>
<!-- backwards compatibility -->
<a id="schemanavigationsettingsentry"></a>
<a id="schema_NavigationSettingsEntry"></a>
<a id="tocSnavigationsettingsentry"></a>
<a id="tocsnavigationsettingsentry"></a>

```json
{
  "id": "string",
  "order": 0,
  "href": "string",
  "icon": "string",
  "type": "settings",
  "name": "string",
  "app": "string",
  "default": true,
  "active": true,
  "classes": "string",
  "unread": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|
|order|integer(int64)|false|none|none|
|href|string|true|none|none|
|icon|string|true|none|none|
|type|string|true|none|none|
|name|string|true|none|none|
|app|string|false|none|none|
|default|boolean|false|none|none|
|active|boolean|true|none|none|
|classes|string|true|none|none|
|unread|integer(int64)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|settings|

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

<h2 id="tocS_OpenGraphObject">OpenGraphObject</h2>
<!-- backwards compatibility -->
<a id="schemaopengraphobject"></a>
<a id="schema_OpenGraphObject"></a>
<a id="tocSopengraphobject"></a>
<a id="tocsopengraphobject"></a>

```json
{
  "id": "string",
  "name": "string",
  "description": "string",
  "thumb": "string",
  "link": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|
|name|string|true|none|none|
|description|string \| null|true|none|none|
|thumb|string \| null|true|none|none|
|link|string|true|none|none|

<h2 id="tocS_ProfileAction">ProfileAction</h2>
<!-- backwards compatibility -->
<a id="schemaprofileaction"></a>
<a id="schema_ProfileAction"></a>
<a id="tocSprofileaction"></a>
<a id="tocsprofileaction"></a>

```json
{
  "id": "string",
  "icon": "string",
  "title": "string",
  "target": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|
|icon|string|true|none|none|
|title|string|true|none|none|
|target|string \| null|true|none|none|

<h2 id="tocS_ProfileData">ProfileData</h2>
<!-- backwards compatibility -->
<a id="schemaprofiledata"></a>
<a id="schema_ProfileData"></a>
<a id="tocSprofiledata"></a>
<a id="tocsprofiledata"></a>

```json
{
  "userId": "string",
  "address": "string",
  "biography": "string",
  "displayname": "string",
  "headline": "string",
  "isUserAvatarVisible": true,
  "organisation": "string",
  "pronouns": "string",
  "role": "string",
  "actions": [
    {
      "id": "string",
      "icon": "string",
      "title": "string",
      "target": "string"
    }
  ],
  "timezone": "string",
  "timezoneOffset": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|userId|string|true|none|none|
|address|string \| null|false|none|none|
|biography|string \| null|false|none|none|
|displayname|string \| null|false|none|none|
|headline|string \| null|false|none|none|
|isUserAvatarVisible|boolean|false|none|none|
|organisation|string \| null|false|none|none|
|pronouns|string \| null|false|none|none|
|role|string \| null|false|none|none|
|actions|[[ProfileAction](#schemaprofileaction)]|true|none|none|
|timezone|string|true|none|Timezone identifier like Europe/Berlin or America/North_Dakota/Beulah|
|timezoneOffset|integer(int64)|true|none|Offset in seconds, negative when behind UTC, positive otherwise|

<h2 id="tocS_ProfileFields">ProfileFields</h2>
<!-- backwards compatibility -->
<a id="schemaprofilefields"></a>
<a id="schema_ProfileFields"></a>
<a id="tocSprofilefields"></a>
<a id="tocsprofilefields"></a>

```json
{
  "userId": "string",
  "address": "string",
  "biography": "string",
  "displayname": "string",
  "headline": "string",
  "isUserAvatarVisible": true,
  "organisation": "string",
  "pronouns": "string",
  "role": "string",
  "actions": [
    {
      "id": "string",
      "icon": "string",
      "title": "string",
      "target": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|userId|string|true|none|none|
|address|string \| null|false|none|none|
|biography|string \| null|false|none|none|
|displayname|string \| null|false|none|none|
|headline|string \| null|false|none|none|
|isUserAvatarVisible|boolean|false|none|none|
|organisation|string \| null|false|none|none|
|pronouns|string \| null|false|none|none|
|role|string \| null|false|none|none|
|actions|[[ProfileAction](#schemaprofileaction)]|true|none|none|

<h2 id="tocS_PublicCapabilities">PublicCapabilities</h2>
<!-- backwards compatibility -->
<a id="schemapubliccapabilities"></a>
<a id="schema_PublicCapabilities"></a>
<a id="tocSpubliccapabilities"></a>
<a id="tocspubliccapabilities"></a>

```json
{
  "bruteforce": {
    "delay": 0,
    "allow-listed": true
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bruteforce|object|true|none|none|

<h2 id="tocS_Reference">Reference</h2>
<!-- backwards compatibility -->
<a id="schemareference"></a>
<a id="schema_Reference"></a>
<a id="tocSreference"></a>
<a id="tocsreference"></a>

```json
{
  "richObjectType": "string",
  "richObject": {
    "property1": {},
    "property2": {}
  },
  "openGraphObject": {
    "id": "string",
    "name": "string",
    "description": "string",
    "thumb": "string",
    "link": "string"
  },
  "accessible": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|richObjectType|string|true|none|none|
|richObject|object|true|none|none|
|openGraphObject|[OpenGraphObject](#schemaopengraphobject)|true|none|none|
|accessible|boolean|true|none|none|

<h2 id="tocS_ReferenceProvider">ReferenceProvider</h2>
<!-- backwards compatibility -->
<a id="schemareferenceprovider"></a>
<a id="schema_ReferenceProvider"></a>
<a id="tocSreferenceprovider"></a>
<a id="tocsreferenceprovider"></a>

```json
{
  "id": "string",
  "title": "string",
  "icon_url": "string",
  "order": 0,
  "search_providers_ids": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|
|title|string|true|none|none|
|icon_url|string|true|none|none|
|order|integer(int64)|true|none|none|
|search_providers_ids|[string]|true|none|none|

<h2 id="tocS_Resource">Resource</h2>
<!-- backwards compatibility -->
<a id="schemaresource"></a>
<a id="schema_Resource"></a>
<a id="tocSresource"></a>
<a id="tocsresource"></a>

```json
{
  "richObjectType": "string",
  "richObject": {
    "property1": {},
    "property2": {}
  },
  "openGraphObject": {
    "id": "string",
    "name": "string",
    "description": "string",
    "thumb": "string",
    "link": "string"
  },
  "accessible": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|richObjectType|string|true|none|none|
|richObject|object|true|none|none|
|openGraphObject|[OpenGraphObject](#schemaopengraphobject)|true|none|none|
|accessible|boolean|true|none|none|

<h2 id="tocS_Status">Status</h2>
<!-- backwards compatibility -->
<a id="schemastatus"></a>
<a id="schema_Status"></a>
<a id="tocSstatus"></a>
<a id="tocsstatus"></a>

```json
{
  "installed": true,
  "maintenance": true,
  "needsDbUpgrade": true,
  "version": "string",
  "versionstring": "string",
  "edition": "string",
  "productname": "string",
  "extendedSupport": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|installed|boolean|true|none|none|
|maintenance|boolean|true|none|none|
|needsDbUpgrade|boolean|true|none|none|
|version|string|true|none|none|
|versionstring|string|true|none|none|
|edition|string|true|none|none|
|productname|string|true|none|none|
|extendedSupport|boolean|true|none|none|

<h2 id="tocS_TaskProcessingIO">TaskProcessingIO</h2>
<!-- backwards compatibility -->
<a id="schemataskprocessingio"></a>
<a id="schema_TaskProcessingIO"></a>
<a id="tocStaskprocessingio"></a>
<a id="tocstaskprocessingio"></a>

```json
{
  "property1": 0,
  "property2": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|number \| [number] \| string \| [string]|false|none|none|

<h2 id="tocS_TaskProcessingShape">TaskProcessingShape</h2>
<!-- backwards compatibility -->
<a id="schemataskprocessingshape"></a>
<a id="schema_TaskProcessingShape"></a>
<a id="tocStaskprocessingshape"></a>
<a id="tocstaskprocessingshape"></a>

```json
{
  "name": "string",
  "description": "string",
  "type": "Number"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|none|
|description|string|true|none|none|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|Number|
|type|Text|
|type|Audio|
|type|Image|
|type|Video|
|type|File|
|type|Enum|
|type|ListOfNumbers|
|type|ListOfTexts|
|type|ListOfImages|
|type|ListOfAudios|
|type|ListOfVideos|
|type|ListOfFiles|

<h2 id="tocS_TaskProcessingTask">TaskProcessingTask</h2>
<!-- backwards compatibility -->
<a id="schemataskprocessingtask"></a>
<a id="schema_TaskProcessingTask"></a>
<a id="tocStaskprocessingtask"></a>
<a id="tocstaskprocessingtask"></a>

```json
{
  "id": 0,
  "lastUpdated": 0,
  "type": "string",
  "status": "STATUS_CANCELLED",
  "userId": "string",
  "appId": "string",
  "input": {
    "property1": 0,
    "property2": 0
  },
  "output": {
    "property1": 0,
    "property2": 0
  },
  "customId": "string",
  "completionExpectedAt": 0,
  "progress": 0,
  "scheduledAt": 0,
  "startedAt": 0,
  "endedAt": 0,
  "allowCleanup": true,
  "includeWatermark": true,
  "userFacingErrorMessage": "string",
  "preferStreaming": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int64)|true|none|none|
|lastUpdated|integer(int64)|true|none|none|
|type|string|true|none|none|
|status|string|true|none|none|
|userId|string \| null|true|none|none|
|appId|string|true|none|none|
|input|[TaskProcessingIO](#schemataskprocessingio)|true|none|none|
|output|object \| null|true|none|none|
|customId|string \| null|true|none|none|
|completionExpectedAt|integer(int64) \| null|true|none|none|
|progress|number(double) \| null|true|none|none|
|scheduledAt|integer(int64) \| null|true|none|none|
|startedAt|integer(int64) \| null|true|none|none|
|endedAt|integer(int64) \| null|true|none|none|
|allowCleanup|boolean|true|none|none|
|includeWatermark|boolean|true|none|none|
|userFacingErrorMessage|string \| null|true|none|none|
|preferStreaming|boolean|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|STATUS_CANCELLED|
|status|STATUS_FAILED|
|status|STATUS_SUCCESSFUL|
|status|STATUS_RUNNING|
|status|STATUS_SCHEDULED|
|status|STATUS_UNKNOWN|

<h2 id="tocS_TaskProcessingTaskType">TaskProcessingTaskType</h2>
<!-- backwards compatibility -->
<a id="schemataskprocessingtasktype"></a>
<a id="schema_TaskProcessingTaskType"></a>
<a id="tocStaskprocessingtasktype"></a>
<a id="tocstaskprocessingtasktype"></a>

```json
{
  "name": "string",
  "description": "string",
  "inputShape": {
    "property1": {
      "name": "string",
      "description": "string",
      "type": "Number"
    },
    "property2": {
      "name": "string",
      "description": "string",
      "type": "Number"
    }
  },
  "inputShapeEnumValues": {
    "property1": [
      {
        "name": "string",
        "value": "string"
      }
    ],
    "property2": [
      {
        "name": "string",
        "value": "string"
      }
    ]
  },
  "inputShapeDefaults": {
    "property1": 0,
    "property2": 0
  },
  "optionalInputShape": {
    "property1": {
      "name": "string",
      "description": "string",
      "type": "Number"
    },
    "property2": {
      "name": "string",
      "description": "string",
      "type": "Number"
    }
  },
  "optionalInputShapeEnumValues": {
    "property1": [
      {
        "name": "string",
        "value": "string"
      }
    ],
    "property2": [
      {
        "name": "string",
        "value": "string"
      }
    ]
  },
  "optionalInputShapeDefaults": {
    "property1": 0,
    "property2": 0
  },
  "outputShape": {
    "property1": {
      "name": "string",
      "description": "string",
      "type": "Number"
    },
    "property2": {
      "name": "string",
      "description": "string",
      "type": "Number"
    }
  },
  "outputShapeEnumValues": {
    "property1": [
      {
        "name": "string",
        "value": "string"
      }
    ],
    "property2": [
      {
        "name": "string",
        "value": "string"
      }
    ]
  },
  "optionalOutputShape": {
    "property1": {
      "name": "string",
      "description": "string",
      "type": "Number"
    },
    "property2": {
      "name": "string",
      "description": "string",
      "type": "Number"
    }
  },
  "optionalOutputShapeEnumValues": {
    "property1": [
      {
        "name": "string",
        "value": "string"
      }
    ],
    "property2": [
      {
        "name": "string",
        "value": "string"
      }
    ]
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|none|
|description|string|true|none|none|
|inputShape|object|true|none|none|
|inputShapeEnumValues|object|true|none|none|
|inputShapeDefaults|object|true|none|none|
|optionalInputShape|object|true|none|none|
|optionalInputShapeEnumValues|object|true|none|none|
|optionalInputShapeDefaults|object|true|none|none|
|outputShape|object|true|none|none|
|outputShapeEnumValues|object|true|none|none|
|optionalOutputShape|object|true|none|none|
|optionalOutputShapeEnumValues|object|true|none|none|

<h2 id="tocS_Team">Team</h2>
<!-- backwards compatibility -->
<a id="schemateam"></a>
<a id="schema_Team"></a>
<a id="tocSteam"></a>
<a id="tocsteam"></a>

```json
{
  "teamId": "string",
  "displayName": "string",
  "link": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|teamId|string|true|none|none|
|displayName|string|true|none|none|
|link|string \| null|true|none|none|

<h2 id="tocS_TeamResource">TeamResource</h2>
<!-- backwards compatibility -->
<a id="schemateamresource"></a>
<a id="schema_TeamResource"></a>
<a id="tocSteamresource"></a>
<a id="tocsteamresource"></a>

```json
{
  "id": "string",
  "label": "string",
  "url": "string",
  "iconSvg": "string",
  "iconURL": "string",
  "iconEmoji": "string",
  "provider": {
    "id": "string",
    "name": "string",
    "icon": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|
|label|string|true|none|none|
|url|string|true|none|none|
|iconSvg|string \| null|true|none|none|
|iconURL|string \| null|true|none|none|
|iconEmoji|string \| null|true|none|none|
|provider|object|true|none|none|

<h2 id="tocS_TeamWithResources">TeamWithResources</h2>
<!-- backwards compatibility -->
<a id="schemateamwithresources"></a>
<a id="schema_TeamWithResources"></a>
<a id="tocSteamwithresources"></a>
<a id="tocsteamwithresources"></a>

```json
{
  "teamId": "string",
  "displayName": "string",
  "link": "string",
  "resources": [
    {
      "id": "string",
      "label": "string",
      "url": "string",
      "iconSvg": "string",
      "iconURL": "string",
      "iconEmoji": "string",
      "provider": {
        "id": "string",
        "name": "string",
        "icon": "string"
      }
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|teamId|string|true|none|none|
|displayName|string|true|none|none|
|link|string \| null|true|none|none|
|resources|[[TeamResource](#schemateamresource)]|true|none|none|

<h2 id="tocS_TextProcessingTask">TextProcessingTask</h2>
<!-- backwards compatibility -->
<a id="schematextprocessingtask"></a>
<a id="schema_TextProcessingTask"></a>
<a id="tocStextprocessingtask"></a>
<a id="tocstextprocessingtask"></a>

```json
{
  "id": 0,
  "type": "string",
  "status": 0,
  "userId": "string",
  "appId": "string",
  "input": "string",
  "output": "string",
  "identifier": "string",
  "completionExpectedAt": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int64) \| null|true|none|none|
|type|string|true|none|none|
|status|integer(int64)|true|none|none|
|userId|string \| null|true|none|none|
|appId|string|true|none|none|
|input|string|true|none|none|
|output|string \| null|true|none|none|
|identifier|string|true|none|none|
|completionExpectedAt|integer(int64) \| null|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|0|
|status|1|
|status|2|
|status|3|
|status|4|

<h2 id="tocS_TextToImageTask">TextToImageTask</h2>
<!-- backwards compatibility -->
<a id="schematexttoimagetask"></a>
<a id="schema_TextToImageTask"></a>
<a id="tocStexttoimagetask"></a>
<a id="tocstexttoimagetask"></a>

```json
{
  "id": 0,
  "status": 0,
  "userId": "string",
  "appId": "string",
  "input": "string",
  "identifier": "string",
  "numberOfImages": 0,
  "completionExpectedAt": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int64) \| null|true|none|none|
|status|integer(int64)|true|none|none|
|userId|string \| null|true|none|none|
|appId|string|true|none|none|
|input|string|true|none|none|
|identifier|string \| null|true|none|none|
|numberOfImages|integer(int64)|true|none|none|
|completionExpectedAt|integer(int64) \| null|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|0|
|status|1|
|status|2|
|status|3|
|status|4|

<h2 id="tocS_UnifiedSearchProvider">UnifiedSearchProvider</h2>
<!-- backwards compatibility -->
<a id="schemaunifiedsearchprovider"></a>
<a id="schema_UnifiedSearchProvider"></a>
<a id="tocSunifiedsearchprovider"></a>
<a id="tocsunifiedsearchprovider"></a>

```json
{
  "id": "string",
  "appId": "string",
  "name": "string",
  "icon": "string",
  "order": 0,
  "isExternalProvider": true,
  "triggers": [
    "string"
  ],
  "filters": {
    "property1": "string",
    "property2": "string"
  },
  "inAppSearch": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|
|appId|string|true|none|none|
|name|string|true|none|none|
|icon|string|true|none|none|
|order|integer(int64)|true|none|none|
|isExternalProvider|boolean|true|none|none|
|triggers|[string]|true|none|none|
|filters|object|true|none|none|
|inAppSearch|boolean|true|none|none|

<h2 id="tocS_UnifiedSearchResult">UnifiedSearchResult</h2>
<!-- backwards compatibility -->
<a id="schemaunifiedsearchresult"></a>
<a id="schema_UnifiedSearchResult"></a>
<a id="tocSunifiedsearchresult"></a>
<a id="tocsunifiedsearchresult"></a>

```json
{
  "name": "string",
  "isPaginated": true,
  "entries": [
    {
      "thumbnailUrl": "string",
      "title": "string",
      "subline": "string",
      "resourceUrl": "string",
      "icon": "string",
      "rounded": true,
      "attributes": [
        "string"
      ]
    }
  ],
  "cursor": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|none|
|isPaginated|boolean|true|none|none|
|entries|[[UnifiedSearchResultEntry](#schemaunifiedsearchresultentry)]|true|none|none|
|cursor|integer(int64) \| string \| null|true|none|none|

<h2 id="tocS_UnifiedSearchResultEntry">UnifiedSearchResultEntry</h2>
<!-- backwards compatibility -->
<a id="schemaunifiedsearchresultentry"></a>
<a id="schema_UnifiedSearchResultEntry"></a>
<a id="tocSunifiedsearchresultentry"></a>
<a id="tocsunifiedsearchresultentry"></a>

```json
{
  "thumbnailUrl": "string",
  "title": "string",
  "subline": "string",
  "resourceUrl": "string",
  "icon": "string",
  "rounded": true,
  "attributes": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|thumbnailUrl|string|true|none|none|
|title|string|true|none|none|
|subline|string|true|none|none|
|resourceUrl|string|true|none|none|
|icon|string|true|none|none|
|rounded|boolean|true|none|none|
|attributes|[string]|true|none|none|
