<h1 id="federatedfilesharing">federatedfilesharing v0.0.1</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Provide federated file sharing across servers

License: agpl

# Authentication

- HTTP Authentication, scheme: basic

- HTTP Authentication, scheme: bearer

<h1 id="federatedfilesharing-mountpubliclink">mount_public_link</h1>

Class MountPublicLinkController convert public links to federated shares

## send federated share to a user of a public link

<a id="opIdmount_public_link-create-federated-share"></a>

> Code samples

```bash
curl https://cloud.example.com/index.php/apps/federatedfilesharing/createFederatedShare \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "shareWith": "string",
    "token": "string",
    "password": ""
  }'
```

`POST /index.php/apps/federatedfilesharing/createFederatedShare`

> Body parameter

```json
{
  "shareWith": "string",
  "token": "string",
  "password": ""
}
```

<h3 id="send-federated-share-to-a-user-of-a-public-link-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» shareWith|body|string|true|Username to share with|
|» token|body|string|true|Token of the share|
|» password|body|string|false|Password of the share|

> Example responses

> 200 Response

```json
{
  "remoteUrl": "string"
}
```

> 400 Response

```json
{
  "message": "string"
}
```

<h3 id="send-federated-share-to-a-user-of-a-public-link-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Remote URL returned|Inline|
|400|Bad Request|Creating share is not possible|Inline|

<h3 id="send-federated-share-to-a-user-of-a-public-link-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|remoteUrl|string|true|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|true|none|none|

<aside class="warning">
Authentication is optional for this operation. To authenticate, use one of the following methods:
bearer_auth, basic_auth
</aside>

<h1 id="federatedfilesharing-requesthandler">request_handler</h1>

## create a new share

<a id="opIdrequest_handler-create-share"></a>

> Code samples

```bash
curl https://cloud.example.com/ocs/v2.php/cloud/shares \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'OCS-APIRequest: true' \
  -d '{
    "remote": null,
    "token": null,
    "name": null,
    "owner": null,
    "sharedBy": null,
    "shareWith": null,
    "remoteId": null,
    "sharedByFederatedId": null,
    "ownerFederatedId": null
  }'
```

`POST /ocs/v2.php/cloud/shares`

> Body parameter

```json
{
  "remote": null,
  "token": null,
  "name": null,
  "owner": null,
  "sharedBy": null,
  "shareWith": null,
  "remoteId": null,
  "sharedByFederatedId": null,
  "ownerFederatedId": null
}
```

<h3 id="create-a-new-share-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|OCS-APIRequest|header|boolean|true|Required to be true for the API request to pass|
|body|body|object|false|none|
|» remote|body|string \| null|false|Address of the remote|
|» token|body|string \| null|false|Shared secret between servers|
|» name|body|string \| null|false|Name of the shared resource|
|» owner|body|string \| null|false|Display name of the receiver|
|» sharedBy|body|string \| null|false|Display name of the sender|
|» shareWith|body|string \| null|false|ID of the user that receives the share|
|» remoteId|body|string \| null|false|ID of the remote|
|» sharedByFederatedId|body|string \| null|false|Federated ID of the sender|
|» ownerFederatedId|body|string \| null|false|Federated ID of the receiver|

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

<h3 id="create-a-new-share-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Share created successfully|Inline|

<h3 id="create-a-new-share-responseschema">Response Schema</h3>

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

## create re-share on behalf of another user

<a id="opIdrequest_handler-re-share"></a>

> Code samples

```bash
curl https://cloud.example.com/ocs/v2.php/cloud/shares/string/reshare \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'OCS-APIRequest: true' \
  -d '{
    "token": null,
    "shareWith": null,
    "remoteId": 0
  }'
```

`POST /ocs/v2.php/cloud/shares/{id}/reshare`

> Body parameter

```json
{
  "token": null,
  "shareWith": null,
  "remoteId": 0
}
```

<h3 id="create-re-share-on-behalf-of-another-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|ID of the share|
|OCS-APIRequest|header|boolean|true|Required to be true for the API request to pass|
|body|body|object|false|none|
|» token|body|string \| null|false|Shared secret between servers|
|» shareWith|body|string \| null|false|ID of the user that receives the share|
|» remoteId|body|integer(int64) \| null|false|ID of the remote|

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
      "token": "string",
      "remoteId": "string"
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

<h3 id="create-re-share-on-behalf-of-another-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Remote share returned|Inline|
|400|Bad Request|Re-sharing is not possible|Inline|

<h3 id="create-re-share-on-behalf-of-another-user-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|
|» » token|string|true|none|none|
|» » remoteId|string|true|none|none|

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

## Update share information to keep federated re-shares in sync.

<a id="opIdrequest_handler-update-permissions"></a>

> Code samples

```bash
curl https://cloud.example.com/ocs/v2.php/cloud/shares/string/permissions \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'OCS-APIRequest: true' \
  -d '{
    "token": null,
    "permissions": null
  }'
```

`POST /ocs/v2.php/cloud/shares/{id}/permissions`

> Body parameter

```json
{
  "token": null,
  "permissions": null
}
```

<h3 id="update-share-information-to-keep-federated-re-shares-in-sync-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|ID of the share|
|OCS-APIRequest|header|boolean|true|Required to be true for the API request to pass|
|body|body|object|false|none|
|» token|body|string \| null|false|Shared secret between servers|
|» permissions|body|integer(int64) \| null|false|New permissions|

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

<h3 id="update-share-information-to-keep-federated-re-shares-in-sync-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Permissions updated successfully|Inline|
|400|Bad Request|Updating permissions is not possible|Inline|

<h3 id="update-share-information-to-keep-federated-re-shares-in-sync-responseschema">Response Schema</h3>

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

## accept server-to-server share

<a id="opIdrequest_handler-accept-share"></a>

> Code samples

```bash
curl https://cloud.example.com/ocs/v2.php/cloud/shares/string/accept \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'OCS-APIRequest: true' \
  -d '{
    "token": null
  }'
```

`POST /ocs/v2.php/cloud/shares/{id}/accept`

> Body parameter

```json
{
  "token": null
}
```

<h3 id="accept-server-to-server-share-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|ID of the remote share|
|OCS-APIRequest|header|boolean|true|Required to be true for the API request to pass|
|body|body|object|false|none|
|» token|body|string \| null|false|Shared secret between servers|

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

<h3 id="accept-server-to-server-share-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Share accepted successfully|Inline|
|500|Internal Server Error||Inline|

<h3 id="accept-server-to-server-share-responseschema">Response Schema</h3>

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

## decline server-to-server share

<a id="opIdrequest_handler-decline-share"></a>

> Code samples

```bash
curl https://cloud.example.com/ocs/v2.php/cloud/shares/string/decline \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'OCS-APIRequest: true' \
  -d '{
    "token": null
  }'
```

`POST /ocs/v2.php/cloud/shares/{id}/decline`

> Body parameter

```json
{
  "token": null
}
```

<h3 id="decline-server-to-server-share-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|ID of the remote share|
|OCS-APIRequest|header|boolean|true|Required to be true for the API request to pass|
|body|body|object|false|none|
|» token|body|string \| null|false|Shared secret between servers|

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

<h3 id="decline-server-to-server-share-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Share declined successfully|Inline|

<h3 id="decline-server-to-server-share-responseschema">Response Schema</h3>

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

## remove server-to-server share if it was unshared by the owner

<a id="opIdrequest_handler-unshare"></a>

> Code samples

```bash
curl https://cloud.example.com/ocs/v2.php/cloud/shares/string/unshare \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'OCS-APIRequest: true' \
  -d '{
    "token": null
  }'
```

`POST /ocs/v2.php/cloud/shares/{id}/unshare`

> Body parameter

```json
{
  "token": null
}
```

<h3 id="remove-server-to-server-share-if-it-was-unshared-by-the-owner-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|ID of the share|
|OCS-APIRequest|header|boolean|true|Required to be true for the API request to pass|
|body|body|object|false|none|
|» token|body|string \| null|false|Shared secret between servers|

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

<h3 id="remove-server-to-server-share-if-it-was-unshared-by-the-owner-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Share unshared successfully|Inline|

<h3 id="remove-server-to-server-share-if-it-was-unshared-by-the-owner-responseschema">Response Schema</h3>

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

## federated share was revoked, either by the owner or the re-sharer

<a id="opIdrequest_handler-revoke"></a>

> Code samples

```bash
curl https://cloud.example.com/ocs/v2.php/cloud/shares/string/revoke \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'OCS-APIRequest: true' \
  -d '{
    "token": null
  }'
```

`POST /ocs/v2.php/cloud/shares/{id}/revoke`

> Body parameter

```json
{
  "token": null
}
```

<h3 id="federated-share-was-revoked-either-by-the-owner-or-the-re-sharer-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|ID of the share|
|OCS-APIRequest|header|boolean|true|Required to be true for the API request to pass|
|body|body|object|false|none|
|» token|body|string \| null|false|Shared secret between servers|

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

<h3 id="federated-share-was-revoked-either-by-the-owner-or-the-re-sharer-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Share revoked successfully|Inline|
|400|Bad Request|Revoking the share is not possible|Inline|

<h3 id="federated-share-was-revoked-either-by-the-owner-or-the-re-sharer-responseschema">Response Schema</h3>

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

## change the owner of a server-to-server share

<a id="opIdrequest_handler-move"></a>

> Code samples

```bash
curl https://cloud.example.com/ocs/v2.php/cloud/shares/0/move \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'OCS-APIRequest: true' \
  -d '{
    "token": null,
    "remote": null,
    "remote_id": null
  }'
```

`POST /ocs/v2.php/cloud/shares/{id}/move`

> Body parameter

```json
{
  "token": null,
  "remote": null,
  "remote_id": null
}
```

<h3 id="change-the-owner-of-a-server-to-server-share-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int64)|true|ID of the share|
|OCS-APIRequest|header|boolean|true|Required to be true for the API request to pass|
|body|body|object|false|none|
|» token|body|string \| null|false|Shared secret between servers|
|» remote|body|string \| null|false|Address of the remote|
|» remote_id|body|string \| null|false|ID of the remote|

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
      "remote": "string",
      "owner": "string"
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

<h3 id="change-the-owner-of-a-server-to-server-share-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Share moved successfully|Inline|
|400|Bad Request|Moving share is not possible|Inline|

<h3 id="change-the-owner-of-a-server-to-server-share-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|
|» » remote|string|true|none|none|
|» » owner|string|true|none|none|

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
