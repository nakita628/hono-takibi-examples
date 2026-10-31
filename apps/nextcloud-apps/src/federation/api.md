<h1 id="federation-full">federation-full v0.0.1</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Federation allows you to connect with other trusted servers to exchange the account directory.

License: agpl

# Authentication

- HTTP Authentication, scheme: basic

- HTTP Authentication, scheme: bearer

<h1 id="federation-full-ocsauthapi">ocs_authapi</h1>

Class OCSAuthAPI OCS API end-points to exchange shared secret between two connected Nextclouds

## Create shared secret and return it, for legacy end-points

<a id="opIdocs_authapi-get-shared-secret-legacy"></a>

> Code samples

```bash
curl 'https://cloud.example.com/ocs/v2.php/apps/federation/api/v1/shared-secret?url=string&token=string' \
  -H 'Accept: application/json' \
  -H 'OCS-APIRequest: true'
```

`GET /ocs/v2.php/apps/federation/api/v1/shared-secret`

<h3 id="create-shared-secret-and-return-it-for-legacy-end-points-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|url|query|string|true|URL of the server|
|token|query|string|true|Token of the server|
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
      "sharedSecret": "string"
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

<h3 id="create-shared-secret-and-return-it-for-legacy-end-points-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Shared secret returned|Inline|
|403|Forbidden|Getting shared secret is not allowed|Inline|

<h3 id="create-shared-secret-and-return-it-for-legacy-end-points-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|
|» » sharedSecret|string|true|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|

<aside class="warning">
Authentication is optional for this operation. To authenticate, use one of the following methods:
bearer_auth, basic_auth
</aside>

## Request received to ask remote server for a shared secret, for legacy end-points

<a id="opIdocs_authapi-request-shared-secret-legacy"></a>

> Code samples

```bash
curl https://cloud.example.com/ocs/v2.php/apps/federation/api/v1/request-shared-secret \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'OCS-APIRequest: true' \
  -d '{
    "url": "string",
    "token": "string"
  }'
```

`POST /ocs/v2.php/apps/federation/api/v1/request-shared-secret`

> Body parameter

```json
{
  "url": "string",
  "token": "string"
}
```

<h3 id="request-received-to-ask-remote-server-for-a-shared-secret-for-legacy-end-points-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|OCS-APIRequest|header|boolean|true|Required to be true for the API request to pass|
|body|body|object|true|none|
|» url|body|string|true|URL of the server|
|» token|body|string|true|Token of the server|

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

<h3 id="request-received-to-ask-remote-server-for-a-shared-secret-for-legacy-end-points-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Shared secret requested successfully|Inline|
|403|Forbidden|Requesting shared secret is not allowed|Inline|

<h3 id="request-received-to-ask-remote-server-for-a-shared-secret-for-legacy-end-points-responseschema">Response Schema</h3>

Status Code **200**

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
Authentication is optional for this operation. To authenticate, use one of the following methods:
bearer_auth, basic_auth
</aside>

## Create shared secret and return it

<a id="opIdocs_authapi-get-shared-secret"></a>

> Code samples

```bash
curl 'https://cloud.example.com/ocs/v2.php/cloud/shared-secret?url=string&token=string' \
  -H 'Accept: application/json' \
  -H 'OCS-APIRequest: true'
```

`GET /ocs/v2.php/cloud/shared-secret`

<h3 id="create-shared-secret-and-return-it-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|url|query|string|true|URL of the server|
|token|query|string|true|Token of the server|
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
      "sharedSecret": "string"
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

<h3 id="create-shared-secret-and-return-it-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Shared secret returned|Inline|
|403|Forbidden|Getting shared secret is not allowed|Inline|

<h3 id="create-shared-secret-and-return-it-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|
|» » sharedSecret|string|true|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|

<aside class="warning">
Authentication is optional for this operation. To authenticate, use one of the following methods:
bearer_auth, basic_auth
</aside>

## Request received to ask remote server for a shared secret

<a id="opIdocs_authapi-request-shared-secret"></a>

> Code samples

```bash
curl https://cloud.example.com/ocs/v2.php/cloud/shared-secret \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'OCS-APIRequest: true' \
  -d '{
    "url": "string",
    "token": "string"
  }'
```

`POST /ocs/v2.php/cloud/shared-secret`

> Body parameter

```json
{
  "url": "string",
  "token": "string"
}
```

<h3 id="request-received-to-ask-remote-server-for-a-shared-secret-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|OCS-APIRequest|header|boolean|true|Required to be true for the API request to pass|
|body|body|object|true|none|
|» url|body|string|true|URL of the server|
|» token|body|string|true|Token of the server|

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

<h3 id="request-received-to-ask-remote-server-for-a-shared-secret-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Shared secret requested successfully|Inline|
|403|Forbidden|Requesting shared secret is not allowed|Inline|

<h3 id="request-received-to-ask-remote-server-for-a-shared-secret-responseschema">Response Schema</h3>

Status Code **200**

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
Authentication is optional for this operation. To authenticate, use one of the following methods:
bearer_auth, basic_auth
</aside>

<h1 id="federation-full-settings">settings</h1>

## List all trusted servers

<a id="opIdsettings-get-servers"></a>

> Code samples

```bash
curl https://cloud.example.com/ocs/v2.php/apps/federation/trusted-servers \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'OCS-APIRequest: true'
```

`GET /ocs/v2.php/apps/federation/trusted-servers`

This endpoint requires admin access

<h3 id="list-all-trusted-servers-parameters">Parameters</h3>

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
        "id": 0,
        "status": 0,
        "url": "string"
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

<h3 id="list-all-trusted-servers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List of trusted servers|Inline|
|401|Unauthorized|Current user is not logged in|Inline|
|403|Forbidden|Logged in account must be an admin|Inline|

<h3 id="list-all-trusted-servers-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|[object]|true|none|none|
|» » id|integer(int64)|true|none|none|
|» » status|integer(int64)|true|none|none|
|» » url|string|true|none|none|

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

## Add server to the list of trusted Nextcloud servers

<a id="opIdsettings-add-server"></a>

> Code samples

```bash
curl https://cloud.example.com/ocs/v2.php/apps/federation/trusted-servers \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'OCS-APIRequest: true' \
  -d '{
    "url": "string"
  }'
```

`POST /ocs/v2.php/apps/federation/trusted-servers`

This endpoint requires admin access

> Body parameter

```json
{
  "url": "string"
}
```

<h3 id="add-server-to-the-list-of-trusted-nextcloud-servers-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|OCS-APIRequest|header|boolean|true|Required to be true for the API request to pass|
|body|body|object|true|none|
|» url|body|string|true|The URL of the server to add|

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
      "message": "string",
      "url": "string"
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

> 409 Response

```json
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

<h3 id="add-server-to-the-list-of-trusted-nextcloud-servers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Server added successfully|Inline|
|401|Unauthorized|Current user is not logged in|Inline|
|403|Forbidden|Logged in account must be an admin|Inline|
|404|Not Found|Server not found at the given URL|Inline|
|409|Conflict|Server is already in the list of trusted servers|Inline|

<h3 id="add-server-to-the-list-of-trusted-nextcloud-servers-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|
|» » id|integer(int64)|true|none|none|
|» » message|string|true|none|none|
|» » url|string|true|none|none|

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

Status Code **409**

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

## Add server to the list of trusted Nextcloud servers

<a id="opIdsettings-remove-server"></a>

> Code samples

```bash
curl https://cloud.example.com/ocs/v2.php/apps/federation/trusted-servers/0 \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'OCS-APIRequest: true'
```

`DELETE /ocs/v2.php/apps/federation/trusted-servers/{id}`

This endpoint requires admin access

<h3 id="add-server-to-the-list-of-trusted-nextcloud-servers-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int64)|true|The ID of the trusted server to remove|
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
      "id": 0
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

<h3 id="add-server-to-the-list-of-trusted-nextcloud-servers-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Server removed successfully|Inline|
|401|Unauthorized|Current user is not logged in|Inline|
|403|Forbidden|Logged in account must be an admin|Inline|
|404|Not Found|Server not found at the given ID|Inline|

<h3 id="add-server-to-the-list-of-trusted-nextcloud-servers-1-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|
|» » id|integer(int64)|true|none|none|

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

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer_auth, basic_auth
</aside>

# Schemas

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
