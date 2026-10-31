<h1 id="filessharing">files_sharing v0.0.1</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

File sharing

License: agpl

# Authentication

- HTTP Authentication, scheme: basic

- HTTP Authentication, scheme: bearer

<h1 id="filessharing-publicpreview">public_preview</h1>

## Get a direct link preview for a shared file

<a id="opIdpublic_preview-direct-link"></a>

> Code samples

```bash
curl https://cloud.example.com/index.php/s/string/preview \
  -H 'Accept: application/json'
```

`GET /index.php/s/{token}/preview`

<h3 id="get-a-direct-link-preview-for-a-shared-file-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|token|path|string|true|Token of the share|

> Example responses

> 400 Response

```json
null
```

> 403 Response

```json
null
```

> 404 Response

```json
null
```

<h3 id="get-a-direct-link-preview-for-a-shared-file-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Preview returned|Inline|
|400|Bad Request|Getting preview is not possible|Inline|
|403|Forbidden|Getting preview is not allowed|Inline|
|404|Not Found|Share or preview not found|Inline|

<aside class="warning">
Authentication is optional for this operation. To authenticate, use one of the following methods:
bearer_auth, basic_auth
</aside>

## Get a preview for a public share

<a id="opIdpublic_preview-get-preview"></a>

> Code samples

```bash
curl https://cloud.example.com/index.php/apps/files_sharing/publicpreview/string \
  -H 'Accept: application/json'
```

`GET /index.php/apps/files_sharing/publicpreview/{token}`

For shares pointing to a single file, the file parameter is ignored. For folder shares, file must be the relative path to a file inside the shared folder.

<h3 id="get-a-preview-for-a-public-share-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|token|path|string|true|Token of the share|
|file|query|string|false|Relative path to a file inside a shared folder; ignored for single-file shares|
|x|query|integer(int64)|false|Width of the preview|
|y|query|integer(int64)|false|Height of the preview|
|a|query|boolean|false|Whether to not crop the preview|
|mimeFallback|query|boolean|false|Whether to fallback to the mime icon if no preview is available|
|x-nc-preview|header|string|false|none|

> Example responses

> 400 Response

```json
null
```

> 403 Response

```json
null
```

> 404 Response

```json
null
```

<h3 id="get-a-preview-for-a-public-share-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Preview returned|Inline|
|303|See Other|Redirect to the mime icon url if mimeFallback is true|None|
|400|Bad Request|Getting preview is not possible|Inline|
|403|Forbidden|Getting preview is not allowed|Inline|
|404|Not Found|Share or preview not found|Inline|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|303|Location|string||none|

<aside class="warning">
Authentication is optional for this operation. To authenticate, use one of the following methods:
bearer_auth, basic_auth
</aside>

<h1 id="filessharing-shareinfo">share_info</h1>

## Get the info about a share

<a id="opIdshare_info-info"></a>

> Code samples

```bash
curl https://cloud.example.com/index.php/apps/files_sharing/shareinfo \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "t": "string",
    "password": null,
    "dir": null,
    "depth": -1
  }'
```

`POST /index.php/apps/files_sharing/shareinfo`

> Body parameter

```json
{
  "t": "string",
  "password": null,
  "dir": null,
  "depth": -1
}
```

<h3 id="get-the-info-about-a-share-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» t|body|string|true|Token of the share|
|» password|body|string \| null|false|Password of the share|
|» dir|body|string \| null|false|Subdirectory to get info about|
|» depth|body|integer(int64)|false|Maximum depth to get info about|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "parentId": 0,
  "mtime": 0,
  "name": "string",
  "permissions": 0,
  "mimetype": "string",
  "size": 0,
  "type": "string",
  "etag": "string",
  "children": [
    {
      "property1": {},
      "property2": {}
    }
  ]
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

<h3 id="get-the-info-about-a-share-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Share info returned|[ShareInfo](#schemashareinfo)|
|403|Forbidden|Getting share info is not allowed|Inline|
|404|Not Found|Share not found|Inline|

<aside class="warning">
Authentication is optional for this operation. To authenticate, use one of the following methods:
bearer_auth, basic_auth
</aside>

<h1 id="filessharing-shareapi">shareapi</h1>

## Get shares of the current user

<a id="opIdshareapi-get-shares"></a>

> Code samples

```bash
curl https://cloud.example.com/ocs/v2.php/apps/files_sharing/api/v1/shares \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'OCS-APIRequest: true'
```

`GET /ocs/v2.php/apps/files_sharing/api/v1/shares`

<h3 id="get-shares-of-the-current-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|shared_with_me|query|string|false|Only get shares with the current user|
|reshares|query|string|false|Only get shares by the current user and reshares|
|subfiles|query|string|false|Only get all shares in a folder|
|path|query|string|false|Get shares for a specific path|
|include_tags|query|string|false|Include tags in the share|
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
        "attributes": "string",
        "can_delete": true,
        "can_edit": true,
        "displayname_file_owner": "string",
        "displayname_owner": "string",
        "expiration": "string",
        "file_parent": 0,
        "file_source": 0,
        "file_target": "string",
        "has_preview": true,
        "hide_download": 0,
        "is_trusted_server": true,
        "is-mount-root": true,
        "id": "string",
        "item_mtime": 0,
        "item_permissions": 0,
        "item_size": 0,
        "item_source": 0,
        "item_type": "file",
        "label": "string",
        "mail_send": 0,
        "mimetype": "string",
        "mount-type": "string",
        "note": "string",
        "original_displayname": "string",
        "parent": null,
        "password": "string",
        "password_expiration_time": "string",
        "path": "string",
        "permissions": 0,
        "send_password_by_talk": true,
        "share_type": 0,
        "share_with": "string",
        "share_with_avatar": "string",
        "share_with_displayname": "string",
        "share_with_displayname_unique": "string",
        "share_with_link": "string",
        "status": {
          "clearAt": 0,
          "icon": "string",
          "message": "string",
          "status": "string"
        },
        "stime": 0,
        "storage": 0,
        "storage_id": "string",
        "token": "string",
        "uid_file_owner": "string",
        "uid_owner": "string",
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

<h3 id="get-shares-of-the-current-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Shares returned|Inline|
|401|Unauthorized|Current user is not logged in|Inline|
|404|Not Found|The folder was not found or is inaccessible|Inline|

<h3 id="get-shares-of-the-current-user-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|[[Share](#schemashare)]|true|none|none|

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

## Create a share

<a id="opIdshareapi-create-share"></a>

> Code samples

```bash
curl https://cloud.example.com/ocs/v2.php/apps/files_sharing/api/v1/shares \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'OCS-APIRequest: true' \
  -d '{
    "path": null,
    "permissions": null,
    "shareType": -1,
    "shareWith": null,
    "publicUpload": null,
    "password": "",
    "sendPasswordByTalk": null,
    "expireDate": null,
    "note": "",
    "label": "",
    "attributes": null,
    "sendMail": null
  }'
```

`POST /ocs/v2.php/apps/files_sharing/api/v1/shares`

> Body parameter

```json
{
  "path": null,
  "permissions": null,
  "shareType": -1,
  "shareWith": null,
  "publicUpload": null,
  "password": "",
  "sendPasswordByTalk": null,
  "expireDate": null,
  "note": "",
  "label": "",
  "attributes": null,
  "sendMail": null
}
```

<h3 id="create-a-share-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|OCS-APIRequest|header|boolean|true|Required to be true for the API request to pass|
|body|body|object|false|none|
|» path|body|string \| null|false|Path of the share|
|» permissions|body|integer(int64) \| null|false|Permissions for the share|
|» shareType|body|integer(int64)|false|Type of the share|
|» shareWith|body|string \| null|false|The entity this should be shared with|
|» publicUpload|body|string \| null|false|If public uploading is allowed (deprecated)|
|» password|body|string|false|Password for the share|
|» sendPasswordByTalk|body|string \| null|false|Send the password for the share over Talk|
|» expireDate|body|string \| null|false|The expiry date of the share in the user's timezone at 00:00. If $expireDate is not supplied or set to `null`, the system default will be used.|
|» note|body|string|false|Note for the share|
|» label|body|string|false|Label for the share (only used in link and email)|
|» attributes|body|string \| null|false|Additional attributes for the share|
|» sendMail|body|string \| null|false|Send a mail to the recipient|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» publicUpload|true|
|» publicUpload|false|
|» sendMail|false|
|» sendMail|true|

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
      "attributes": "string",
      "can_delete": true,
      "can_edit": true,
      "displayname_file_owner": "string",
      "displayname_owner": "string",
      "expiration": "string",
      "file_parent": 0,
      "file_source": 0,
      "file_target": "string",
      "has_preview": true,
      "hide_download": 0,
      "is_trusted_server": true,
      "is-mount-root": true,
      "id": "string",
      "item_mtime": 0,
      "item_permissions": 0,
      "item_size": 0,
      "item_source": 0,
      "item_type": "file",
      "label": "string",
      "mail_send": 0,
      "mimetype": "string",
      "mount-type": "string",
      "note": "string",
      "original_displayname": "string",
      "parent": null,
      "password": "string",
      "password_expiration_time": "string",
      "path": "string",
      "permissions": 0,
      "send_password_by_talk": true,
      "share_type": 0,
      "share_with": "string",
      "share_with_avatar": "string",
      "share_with_displayname": "string",
      "share_with_displayname_unique": "string",
      "share_with_link": "string",
      "status": {
        "clearAt": 0,
        "icon": "string",
        "message": "string",
        "status": "string"
      },
      "stime": 0,
      "storage": 0,
      "storage_id": "string",
      "token": "string",
      "uid_file_owner": "string",
      "uid_owner": "string",
      "url": "string"
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

<h3 id="create-a-share-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Share created|Inline|
|400|Bad Request|Unknown share type|Inline|
|401|Unauthorized|Current user is not logged in|Inline|
|403|Forbidden|Creating the share is not allowed|Inline|
|404|Not Found|Creating the share failed|Inline|

<h3 id="create-a-share-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|[Share](#schemashare)|true|none|none|

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

## Get all shares relative to a file, including parent folders shares rights

<a id="opIdshareapi-get-inherited-shares"></a>

> Code samples

```bash
curl 'https://cloud.example.com/ocs/v2.php/apps/files_sharing/api/v1/shares/inherited?path=string' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'OCS-APIRequest: true'
```

`GET /ocs/v2.php/apps/files_sharing/api/v1/shares/inherited`

<h3 id="get-all-shares-relative-to-a-file-including-parent-folders-shares-rights-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|path|query|string|true|Path all shares will be relative to|
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
        "attributes": "string",
        "can_delete": true,
        "can_edit": true,
        "displayname_file_owner": "string",
        "displayname_owner": "string",
        "expiration": "string",
        "file_parent": 0,
        "file_source": 0,
        "file_target": "string",
        "has_preview": true,
        "hide_download": 0,
        "is_trusted_server": true,
        "is-mount-root": true,
        "id": "string",
        "item_mtime": 0,
        "item_permissions": 0,
        "item_size": 0,
        "item_source": 0,
        "item_type": "file",
        "label": "string",
        "mail_send": 0,
        "mimetype": "string",
        "mount-type": "string",
        "note": "string",
        "original_displayname": "string",
        "parent": null,
        "password": "string",
        "password_expiration_time": "string",
        "path": "string",
        "permissions": 0,
        "send_password_by_talk": true,
        "share_type": 0,
        "share_with": "string",
        "share_with_avatar": "string",
        "share_with_displayname": "string",
        "share_with_displayname_unique": "string",
        "share_with_link": "string",
        "status": {
          "clearAt": 0,
          "icon": "string",
          "message": "string",
          "status": "string"
        },
        "stime": 0,
        "storage": 0,
        "storage_id": "string",
        "token": "string",
        "uid_file_owner": "string",
        "uid_owner": "string",
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

<h3 id="get-all-shares-relative-to-a-file-including-parent-folders-shares-rights-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Shares returned|Inline|
|401|Unauthorized|Current user is not logged in|Inline|
|404|Not Found|The given path is invalid|Inline|
|500|Internal Server Error||Inline|

<h3 id="get-all-shares-relative-to-a-file-including-parent-folders-shares-rights-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|[[Share](#schemashare)]|true|none|none|

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

## Get all shares that are still pending

<a id="opIdshareapi-pending-shares"></a>

> Code samples

```bash
curl https://cloud.example.com/ocs/v2.php/apps/files_sharing/api/v1/shares/pending \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'OCS-APIRequest: true'
```

`GET /ocs/v2.php/apps/files_sharing/api/v1/shares/pending`

<h3 id="get-all-shares-that-are-still-pending-parameters">Parameters</h3>

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
        "attributes": "string",
        "can_delete": true,
        "can_edit": true,
        "displayname_file_owner": "string",
        "displayname_owner": "string",
        "expiration": "string",
        "file_parent": 0,
        "file_source": 0,
        "file_target": "string",
        "has_preview": true,
        "hide_download": 0,
        "is_trusted_server": true,
        "is-mount-root": true,
        "id": "string",
        "item_mtime": 0,
        "item_permissions": 0,
        "item_size": 0,
        "item_source": 0,
        "item_type": "file",
        "label": "string",
        "mail_send": 0,
        "mimetype": "string",
        "mount-type": "string",
        "note": "string",
        "original_displayname": "string",
        "parent": null,
        "password": "string",
        "password_expiration_time": "string",
        "path": "string",
        "permissions": 0,
        "send_password_by_talk": true,
        "share_type": 0,
        "share_with": "string",
        "share_with_avatar": "string",
        "share_with_displayname": "string",
        "share_with_displayname_unique": "string",
        "share_with_link": "string",
        "status": {
          "clearAt": 0,
          "icon": "string",
          "message": "string",
          "status": "string"
        },
        "stime": 0,
        "storage": 0,
        "storage_id": "string",
        "token": "string",
        "uid_file_owner": "string",
        "uid_owner": "string",
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

<h3 id="get-all-shares-that-are-still-pending-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Pending shares returned|Inline|
|401|Unauthorized|Current user is not logged in|Inline|

<h3 id="get-all-shares-that-are-still-pending-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|[[Share](#schemashare)]|true|none|none|

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

## Get a specific share by id

<a id="opIdshareapi-get-share"></a>

> Code samples

```bash
curl https://cloud.example.com/ocs/v2.php/apps/files_sharing/api/v1/shares/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'OCS-APIRequest: true'
```

`GET /ocs/v2.php/apps/files_sharing/api/v1/shares/{id}`

<h3 id="get-a-specific-share-by-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|ID of the share|
|include_tags|query|boolean|false|Include tags in the share|
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
        "attributes": "string",
        "can_delete": true,
        "can_edit": true,
        "displayname_file_owner": "string",
        "displayname_owner": "string",
        "expiration": "string",
        "file_parent": 0,
        "file_source": 0,
        "file_target": "string",
        "has_preview": true,
        "hide_download": 0,
        "is_trusted_server": true,
        "is-mount-root": true,
        "id": "string",
        "item_mtime": 0,
        "item_permissions": 0,
        "item_size": 0,
        "item_source": 0,
        "item_type": "file",
        "label": "string",
        "mail_send": 0,
        "mimetype": "string",
        "mount-type": "string",
        "note": "string",
        "original_displayname": "string",
        "parent": null,
        "password": "string",
        "password_expiration_time": "string",
        "path": "string",
        "permissions": 0,
        "send_password_by_talk": true,
        "share_type": 0,
        "share_with": "string",
        "share_with_avatar": "string",
        "share_with_displayname": "string",
        "share_with_displayname_unique": "string",
        "share_with_link": "string",
        "status": {
          "clearAt": 0,
          "icon": "string",
          "message": "string",
          "status": "string"
        },
        "stime": 0,
        "storage": 0,
        "storage_id": "string",
        "token": "string",
        "uid_file_owner": "string",
        "uid_owner": "string",
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

<h3 id="get-a-specific-share-by-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Share returned|Inline|
|401|Unauthorized|Current user is not logged in|Inline|
|404|Not Found|Share not found|Inline|

<h3 id="get-a-specific-share-by-id-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|[[Share](#schemashare)]|true|none|none|

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

## Update a share

<a id="opIdshareapi-update-share"></a>

> Code samples

```bash
curl https://cloud.example.com/ocs/v2.php/apps/files_sharing/api/v1/shares/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'OCS-APIRequest: true' \
  -d '{
    "permissions": null,
    "password": null,
    "sendPasswordByTalk": null,
    "publicUpload": null,
    "expireDate": null,
    "note": null,
    "label": null,
    "hideDownload": null,
    "attributes": null,
    "sendMail": null,
    "token": null
  }'
```

`PUT /ocs/v2.php/apps/files_sharing/api/v1/shares/{id}`

> Body parameter

```json
{
  "permissions": null,
  "password": null,
  "sendPasswordByTalk": null,
  "publicUpload": null,
  "expireDate": null,
  "note": null,
  "label": null,
  "hideDownload": null,
  "attributes": null,
  "sendMail": null,
  "token": null
}
```

<h3 id="update-a-share-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|ID of the share|
|OCS-APIRequest|header|boolean|true|Required to be true for the API request to pass|
|body|body|object|false|none|
|» permissions|body|integer(int64) \| null|false|New permissions|
|» password|body|string \| null|false|New password|
|» sendPasswordByTalk|body|string \| null|false|New condition if the password should be send over Talk|
|» publicUpload|body|string \| null|false|New condition if public uploading is allowed|
|» expireDate|body|string \| null|false|New expiry date|
|» note|body|string \| null|false|New note|
|» label|body|string \| null|false|New label|
|» hideDownload|body|string \| null|false|New condition if the download should be hidden|
|» attributes|body|string \| null|false|New additional attributes|
|» sendMail|body|string \| null|false|if the share should be send by mail. Considering the share already exists, no mail will be send after the share is updated. You will have to use the sendMail action to send the mail.|
|» token|body|string \| null|false|New token|

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
      "attributes": "string",
      "can_delete": true,
      "can_edit": true,
      "displayname_file_owner": "string",
      "displayname_owner": "string",
      "expiration": "string",
      "file_parent": 0,
      "file_source": 0,
      "file_target": "string",
      "has_preview": true,
      "hide_download": 0,
      "is_trusted_server": true,
      "is-mount-root": true,
      "id": "string",
      "item_mtime": 0,
      "item_permissions": 0,
      "item_size": 0,
      "item_source": 0,
      "item_type": "file",
      "label": "string",
      "mail_send": 0,
      "mimetype": "string",
      "mount-type": "string",
      "note": "string",
      "original_displayname": "string",
      "parent": null,
      "password": "string",
      "password_expiration_time": "string",
      "path": "string",
      "permissions": 0,
      "send_password_by_talk": true,
      "share_type": 0,
      "share_with": "string",
      "share_with_avatar": "string",
      "share_with_displayname": "string",
      "share_with_displayname_unique": "string",
      "share_with_link": "string",
      "status": {
        "clearAt": 0,
        "icon": "string",
        "message": "string",
        "status": "string"
      },
      "stime": 0,
      "storage": 0,
      "storage_id": "string",
      "token": "string",
      "uid_file_owner": "string",
      "uid_owner": "string",
      "url": "string"
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

<h3 id="update-a-share-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Share updated successfully|Inline|
|400|Bad Request|Share could not be updated because the requested changes are invalid|Inline|
|401|Unauthorized|Current user is not logged in|Inline|
|403|Forbidden|Missing permissions to update the share|Inline|
|404|Not Found|Share not found|Inline|

<h3 id="update-a-share-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|[Share](#schemashare)|true|none|none|

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

## Delete a share

<a id="opIdshareapi-delete-share"></a>

> Code samples

```bash
curl https://cloud.example.com/ocs/v2.php/apps/files_sharing/api/v1/shares/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'OCS-APIRequest: true'
```

`DELETE /ocs/v2.php/apps/files_sharing/api/v1/shares/{id}`

<h3 id="delete-a-share-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|ID of the share|
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

<h3 id="delete-a-share-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Share deleted successfully|Inline|
|401|Unauthorized|Current user is not logged in|Inline|
|403|Forbidden|Missing permissions to delete the share|Inline|
|404|Not Found|Share not found|Inline|

<h3 id="delete-a-share-responseschema">Response Schema</h3>

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

## Send a mail notification again for a share. The mail_send option must be enabled for the given share.

<a id="opIdshareapi-send-share-email"></a>

> Code samples

```bash
curl https://cloud.example.com/ocs/v2.php/apps/files_sharing/api/v1/shares/string/send-email \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'OCS-APIRequest: true' \
  -d '{
    "password": ""
  }'
```

`POST /ocs/v2.php/apps/files_sharing/api/v1/shares/{id}/send-email`

> Body parameter

```json
{
  "password": ""
}
```

<h3 id="send-a-mail-notification-again-for-a-share-the-mailsend-option-must-be-enabled-for-the-given-share-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|the share ID|
|OCS-APIRequest|header|boolean|true|Required to be true for the API request to pass|
|body|body|object|false|none|
|» password|body|string|false|the password to check against. Necessary for password protected shares.|

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

<h3 id="send-a-mail-notification-again-for-a-share-the-mailsend-option-must-be-enabled-for-the-given-share-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The email notification was sent successfully|Inline|
|400|Bad Request|Invalid request or wrong password|Inline|
|401|Unauthorized|Current user is not logged in|Inline|
|403|Forbidden|You are not allowed to send mail notifications|Inline|
|404|Not Found|Share not found|Inline|

<h3 id="send-a-mail-notification-again-for-a-share-the-mailsend-option-must-be-enabled-for-the-given-share-responseschema">Response Schema</h3>

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

## Accept a share

<a id="opIdshareapi-accept-share"></a>

> Code samples

```bash
curl https://cloud.example.com/ocs/v2.php/apps/files_sharing/api/v1/shares/pending/string \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'OCS-APIRequest: true'
```

`POST /ocs/v2.php/apps/files_sharing/api/v1/shares/pending/{id}`

<h3 id="accept-a-share-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|ID of the share|
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

<h3 id="accept-a-share-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Share accepted successfully|Inline|
|400|Bad Request|Share could not be accepted|Inline|
|401|Unauthorized|Current user is not logged in|Inline|
|404|Not Found|Share not found|Inline|

<h3 id="accept-a-share-responseschema">Response Schema</h3>

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

## Get a unique share token

<a id="opIdshareapi-generate-token"></a>

> Code samples

```bash
curl https://cloud.example.com/ocs/v2.php/apps/files_sharing/api/v1/token \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'OCS-APIRequest: true'
```

`GET /ocs/v2.php/apps/files_sharing/api/v1/token`

<h3 id="get-a-unique-share-token-parameters">Parameters</h3>

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
      "token": "string"
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

<h3 id="get-a-unique-share-token-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Token generated successfully|Inline|
|401|Unauthorized|Current user is not logged in|Inline|

<h3 id="get-a-unique-share-token-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|
|» » token|string|true|none|none|

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

<h1 id="filessharing-deletedshareapi">deleted_shareapi</h1>

## Get a list of all deleted shares

<a id="opIddeleted_shareapi-index"></a>

> Code samples

```bash
curl https://cloud.example.com/ocs/v2.php/apps/files_sharing/api/v1/deletedshares \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'OCS-APIRequest: true'
```

`GET /ocs/v2.php/apps/files_sharing/api/v1/deletedshares`

<h3 id="get-a-list-of-all-deleted-shares-parameters">Parameters</h3>

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
        "share_type": 0,
        "uid_owner": "string",
        "displayname_owner": "string",
        "permissions": 0,
        "stime": 0,
        "uid_file_owner": "string",
        "displayname_file_owner": "string",
        "path": "string",
        "item_type": "string",
        "mimetype": "string",
        "storage": 0,
        "item_source": 0,
        "file_source": 0,
        "file_parent": 0,
        "file_target": 0,
        "expiration": "string",
        "share_with": "string",
        "share_with_displayname": "string",
        "share_with_link": "string"
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

<h3 id="get-a-list-of-all-deleted-shares-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Deleted shares returned|Inline|
|401|Unauthorized|Current user is not logged in|Inline|

<h3 id="get-a-list-of-all-deleted-shares-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|[[DeletedShare](#schemadeletedshare)]|true|none|none|

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

## Undelete a deleted share

<a id="opIddeleted_shareapi-undelete"></a>

> Code samples

```bash
curl https://cloud.example.com/ocs/v2.php/apps/files_sharing/api/v1/deletedshares/string \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'OCS-APIRequest: true'
```

`POST /ocs/v2.php/apps/files_sharing/api/v1/deletedshares/{id}`

<h3 id="undelete-a-deleted-share-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|ID of the share|
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

<h3 id="undelete-a-deleted-share-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Share undeleted successfully|Inline|
|401|Unauthorized|Current user is not logged in|Inline|
|404|Not Found|Share not found|Inline|

<h3 id="undelete-a-deleted-share-responseschema">Response Schema</h3>

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

<h1 id="filessharing-shareesapi">shareesapi</h1>

## Search for sharees

<a id="opIdshareesapi-search"></a>

> Code samples

```bash
curl https://cloud.example.com/ocs/v2.php/apps/files_sharing/api/v1/sharees \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'OCS-APIRequest: true'
```

`GET /ocs/v2.php/apps/files_sharing/api/v1/sharees`

<h3 id="search-for-sharees-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|search|query|string|false|Text to search for|
|itemType|query|string \| null|false|Limit to specific item types|
|page|query|integer(int64)|false|Page offset for searching|
|perPage|query|integer(int64)|false|Limit amount of search results per page|
|shareType|query|integer(int64) \| [integer(int64)] \| null|false|Limit to specific share types|
|lookup|query|boolean|false|If a global lookup should be performed too|
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
      "exact": {
        "circles": [
          {
            "label": "string",
            "shareWithDescription": "string",
            "value": {
              "shareType": 0,
              "shareWith": "string",
              "circle": "string"
            }
          }
        ],
        "emails": [
          {
            "label": "string",
            "uuid": "string",
            "name": "string",
            "type": "string",
            "shareWithDisplayNameUnique": "string",
            "value": {
              "shareType": 0,
              "shareWith": "string"
            }
          }
        ],
        "groups": [
          {
            "label": "string",
            "value": {
              "shareType": 0,
              "shareWith": "string"
            }
          }
        ],
        "remote_groups": [
          {
            "label": "string",
            "guid": "string",
            "name": "string",
            "value": {
              "shareType": 0,
              "shareWith": "string",
              "server": "string"
            }
          }
        ],
        "remotes": [
          {
            "label": "string",
            "uuid": "string",
            "name": "string",
            "type": "string",
            "value": {
              "shareType": 0,
              "shareWith": "string",
              "server": "string"
            }
          }
        ],
        "rooms": [
          {
            "label": "string",
            "value": {
              "shareType": 0,
              "shareWith": "string"
            }
          }
        ],
        "users": [
          {
            "label": "string",
            "subline": "string",
            "icon": "string",
            "shareWithDisplayNameUnique": "string",
            "status": {
              "status": "string",
              "message": "string",
              "icon": "string",
              "clearAt": 0
            },
            "value": {
              "shareType": 0,
              "shareWith": "string"
            }
          }
        ]
      },
      "circles": [
        {
          "label": "string",
          "shareWithDescription": "string",
          "value": {
            "shareType": 0,
            "shareWith": "string",
            "circle": "string"
          }
        }
      ],
      "emails": [
        {
          "label": "string",
          "uuid": "string",
          "name": "string",
          "type": "string",
          "shareWithDisplayNameUnique": "string",
          "value": {
            "shareType": 0,
            "shareWith": "string"
          }
        }
      ],
      "groups": [
        {
          "label": "string",
          "value": {
            "shareType": 0,
            "shareWith": "string"
          }
        }
      ],
      "lookup": [
        {
          "label": "string",
          "extra": {
            "federationId": "string",
            "name": {
              "value": "string",
              "verified": 0
            },
            "email": {
              "value": "string",
              "verified": 0
            },
            "address": {
              "value": "string",
              "verified": 0
            },
            "website": {
              "value": "string",
              "verified": 0
            },
            "twitter": {
              "value": "string",
              "verified": 0
            },
            "phone": {
              "value": "string",
              "verified": 0
            },
            "twitter_signature": {
              "value": "string",
              "verified": 0
            },
            "website_signature": {
              "value": "string",
              "verified": 0
            },
            "userid": {
              "value": "string",
              "verified": 0
            }
          },
          "value": {
            "shareType": 0,
            "shareWith": "string",
            "globalScale": true
          }
        }
      ],
      "remote_groups": [
        {
          "label": "string",
          "guid": "string",
          "name": "string",
          "value": {
            "shareType": 0,
            "shareWith": "string",
            "server": "string"
          }
        }
      ],
      "remotes": [
        {
          "label": "string",
          "uuid": "string",
          "name": "string",
          "type": "string",
          "value": {
            "shareType": 0,
            "shareWith": "string",
            "server": "string"
          }
        }
      ],
      "rooms": [
        {
          "label": "string",
          "value": {
            "shareType": 0,
            "shareWith": "string"
          }
        }
      ],
      "users": [
        {
          "label": "string",
          "subline": "string",
          "icon": "string",
          "shareWithDisplayNameUnique": "string",
          "status": {
            "status": "string",
            "message": "string",
            "icon": "string",
            "clearAt": 0
          },
          "value": {
            "shareType": 0,
            "shareWith": "string"
          }
        }
      ],
      "lookupEnabled": true
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

<h3 id="search-for-sharees-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Sharees search result returned|Inline|
|400|Bad Request|Invalid search parameters|Inline|
|401|Unauthorized|Current user is not logged in|Inline|

<h3 id="search-for-sharees-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|[ShareesSearchResult](#schemashareessearchresult)|true|none|none|

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

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Link|string||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer_auth, basic_auth
</aside>

## Find recommended sharees

<a id="opIdshareesapi-find-recommended"></a>

> Code samples

```bash
curl 'https://cloud.example.com/ocs/v2.php/apps/files_sharing/api/v1/sharees_recommended?itemType=string' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'OCS-APIRequest: true'
```

`GET /ocs/v2.php/apps/files_sharing/api/v1/sharees_recommended`

<h3 id="find-recommended-sharees-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|itemType|query|string|true|Limit to specific item types|
|shareType|query|integer(int64) \| [integer(int64)] \| null|false|Limit to specific share types|
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
      "exact": {
        "emails": [
          {
            "label": "string",
            "uuid": "string",
            "name": "string",
            "type": "string",
            "shareWithDisplayNameUnique": "string",
            "value": {
              "shareType": 0,
              "shareWith": "string"
            }
          }
        ],
        "groups": [
          {
            "label": "string",
            "value": {
              "shareType": 0,
              "shareWith": "string"
            }
          }
        ],
        "remote_groups": [
          {
            "label": "string",
            "guid": "string",
            "name": "string",
            "value": {
              "shareType": 0,
              "shareWith": "string",
              "server": "string"
            }
          }
        ],
        "remotes": [
          {
            "label": "string",
            "uuid": "string",
            "name": "string",
            "type": "string",
            "value": {
              "shareType": 0,
              "shareWith": "string",
              "server": "string"
            }
          }
        ],
        "users": [
          {
            "label": "string",
            "subline": "string",
            "icon": "string",
            "shareWithDisplayNameUnique": "string",
            "status": {
              "status": "string",
              "message": "string",
              "icon": "string",
              "clearAt": 0
            },
            "value": {
              "shareType": 0,
              "shareWith": "string"
            }
          }
        ]
      },
      "emails": [
        {
          "label": "string",
          "uuid": "string",
          "name": "string",
          "type": "string",
          "shareWithDisplayNameUnique": "string",
          "value": {
            "shareType": 0,
            "shareWith": "string"
          }
        }
      ],
      "groups": [
        {
          "label": "string",
          "value": {
            "shareType": 0,
            "shareWith": "string"
          }
        }
      ],
      "remote_groups": [
        {
          "label": "string",
          "guid": "string",
          "name": "string",
          "value": {
            "shareType": 0,
            "shareWith": "string",
            "server": "string"
          }
        }
      ],
      "remotes": [
        {
          "label": "string",
          "uuid": "string",
          "name": "string",
          "type": "string",
          "value": {
            "shareType": 0,
            "shareWith": "string",
            "server": "string"
          }
        }
      ],
      "users": [
        {
          "label": "string",
          "subline": "string",
          "icon": "string",
          "shareWithDisplayNameUnique": "string",
          "status": {
            "status": "string",
            "message": "string",
            "icon": "string",
            "clearAt": 0
          },
          "value": {
            "shareType": 0,
            "shareWith": "string"
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

<h3 id="find-recommended-sharees-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Recommended sharees returned|Inline|
|401|Unauthorized|Current user is not logged in|Inline|

<h3 id="find-recommended-sharees-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|[ShareesRecommendedResult](#schemashareesrecommendedresult)|true|none|none|

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

<h1 id="filessharing-remote">remote</h1>

## Get a list of accepted remote shares

<a id="opIdremote-get-shares"></a>

> Code samples

```bash
curl https://cloud.example.com/ocs/v2.php/apps/files_sharing/api/v1/remote_shares \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'OCS-APIRequest: true'
```

`GET /ocs/v2.php/apps/files_sharing/api/v1/remote_shares`

<h3 id="get-a-list-of-accepted-remote-shares-parameters">Parameters</h3>

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
        "accepted": 0,
        "file_id": 0,
        "id": "string",
        "mimetype": "string",
        "mountpoint": "string",
        "mtime": 0,
        "name": "string",
        "owner": "string",
        "parent": "string",
        "permissions": 0,
        "remote": "string",
        "remote_id": "string",
        "refresh_token": "string",
        "share_type": 0,
        "type": "string",
        "user": "string",
        "item_size": 0
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

<h3 id="get-a-list-of-accepted-remote-shares-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Accepted remote shares returned|Inline|
|401|Unauthorized|Current user is not logged in|Inline|

<h3 id="get-a-list-of-accepted-remote-shares-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|[[RemoteShare](#schemaremoteshare)]|true|none|none|

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

## Get list of pending remote shares

<a id="opIdremote-get-open-shares"></a>

> Code samples

```bash
curl https://cloud.example.com/ocs/v2.php/apps/files_sharing/api/v1/remote_shares/pending \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'OCS-APIRequest: true'
```

`GET /ocs/v2.php/apps/files_sharing/api/v1/remote_shares/pending`

<h3 id="get-list-of-pending-remote-shares-parameters">Parameters</h3>

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
        "accepted": 0,
        "file_id": 0,
        "id": "string",
        "mimetype": "string",
        "mountpoint": "string",
        "mtime": 0,
        "name": "string",
        "owner": "string",
        "parent": "string",
        "permissions": 0,
        "remote": "string",
        "remote_id": "string",
        "refresh_token": "string",
        "share_type": 0,
        "type": "string",
        "user": "string",
        "item_size": 0
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

<h3 id="get-list-of-pending-remote-shares-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Pending remote shares returned|Inline|
|401|Unauthorized|Current user is not logged in|Inline|

<h3 id="get-list-of-pending-remote-shares-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|[[RemoteShare](#schemaremoteshare)]|true|none|none|

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

## Accept a remote share.

<a id="opIdremote-accept-share"></a>

> Code samples

```bash
curl https://cloud.example.com/ocs/v2.php/apps/files_sharing/api/v1/remote_shares/pending/string \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'OCS-APIRequest: true'
```

`POST /ocs/v2.php/apps/files_sharing/api/v1/remote_shares/pending/{id}`

<h3 id="accept-a-remote-share-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|ID of the share|
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

<h3 id="accept-a-remote-share-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Share accepted successfully|Inline|
|401|Unauthorized|Current user is not logged in|Inline|
|404|Not Found|Share not found|Inline|

<h3 id="accept-a-remote-share-responseschema">Response Schema</h3>

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

## Decline a remote share.

<a id="opIdremote-decline-share"></a>

> Code samples

```bash
curl https://cloud.example.com/ocs/v2.php/apps/files_sharing/api/v1/remote_shares/pending/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'OCS-APIRequest: true'
```

`DELETE /ocs/v2.php/apps/files_sharing/api/v1/remote_shares/pending/{id}`

<h3 id="decline-a-remote-share-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|ID of the share|
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

<h3 id="decline-a-remote-share-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Share declined successfully|Inline|
|401|Unauthorized|Current user is not logged in|Inline|
|404|Not Found|Share not found|Inline|

<h3 id="decline-a-remote-share-responseschema">Response Schema</h3>

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

## Get info of a remote share

<a id="opIdremote-get-share"></a>

> Code samples

```bash
curl https://cloud.example.com/ocs/v2.php/apps/files_sharing/api/v1/remote_shares/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'OCS-APIRequest: true'
```

`GET /ocs/v2.php/apps/files_sharing/api/v1/remote_shares/{id}`

<h3 id="get-info-of-a-remote-share-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|ID of the share|
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
      "accepted": 0,
      "file_id": 0,
      "id": "string",
      "mimetype": "string",
      "mountpoint": "string",
      "mtime": 0,
      "name": "string",
      "owner": "string",
      "parent": "string",
      "permissions": 0,
      "remote": "string",
      "remote_id": "string",
      "refresh_token": "string",
      "share_type": 0,
      "type": "string",
      "user": "string",
      "item_size": 0
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

<h3 id="get-info-of-a-remote-share-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Share returned|Inline|
|401|Unauthorized|Current user is not logged in|Inline|
|404|Not Found|Share not found|Inline|

<h3 id="get-info-of-a-remote-share-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|[RemoteShare](#schemaremoteshare)|true|none|none|

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

## Unshare a remote share

<a id="opIdremote-unshare"></a>

> Code samples

```bash
curl https://cloud.example.com/ocs/v2.php/apps/files_sharing/api/v1/remote_shares/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'OCS-APIRequest: true'
```

`DELETE /ocs/v2.php/apps/files_sharing/api/v1/remote_shares/{id}`

<h3 id="unshare-a-remote-share-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|ID of the share|
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

<h3 id="unshare-a-remote-share-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Share unshared successfully|Inline|
|401|Unauthorized|Current user is not logged in|Inline|
|403|Forbidden|Unsharing is not possible|Inline|
|404|Not Found|Share not found|Inline|

<h3 id="unshare-a-remote-share-responseschema">Response Schema</h3>

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

# Schemas

<h2 id="tocS_Capabilities">Capabilities</h2>
<!-- backwards compatibility -->
<a id="schemacapabilities"></a>
<a id="schema_Capabilities"></a>
<a id="tocScapabilities"></a>
<a id="tocscapabilities"></a>

```json
{
  "files_sharing": {
    "api_enabled": true,
    "public": {
      "enabled": true,
      "password": {
        "enforced": true,
        "askForOptionalPassword": true
      },
      "multiple_links": true,
      "expire_date": {
        "enabled": true,
        "days": 0,
        "default_days": 0,
        "enforced": true
      },
      "expire_date_internal": {
        "enabled": true,
        "days": 0,
        "enforced": true
      },
      "expire_date_remote": {
        "enabled": true,
        "days": 0,
        "enforced": true
      },
      "send_mail": true,
      "upload": true,
      "upload_files_drop": true,
      "custom_tokens": true
    },
    "user": {
      "send_mail": true,
      "expire_date": {
        "enabled": true
      }
    },
    "resharing": true,
    "group_sharing": true,
    "group": {
      "enabled": true,
      "expire_date": {
        "enabled": true
      }
    },
    "default_permissions": 0,
    "exclude_reshare_from_edit": true,
    "federation": {
      "outgoing": true,
      "incoming": true,
      "expire_date": {
        "enabled": true
      },
      "expire_date_supported": {
        "enabled": true
      }
    },
    "sharee": {
      "minSearchStringLength": 0,
      "query_lookup_default": true,
      "always_show_unique": true
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|files_sharing|object|true|none|none|

<h2 id="tocS_DeletedShare">DeletedShare</h2>
<!-- backwards compatibility -->
<a id="schemadeletedshare"></a>
<a id="schema_DeletedShare"></a>
<a id="tocSdeletedshare"></a>
<a id="tocsdeletedshare"></a>

```json
{
  "id": "string",
  "share_type": 0,
  "uid_owner": "string",
  "displayname_owner": "string",
  "permissions": 0,
  "stime": 0,
  "uid_file_owner": "string",
  "displayname_file_owner": "string",
  "path": "string",
  "item_type": "string",
  "mimetype": "string",
  "storage": 0,
  "item_source": 0,
  "file_source": 0,
  "file_parent": 0,
  "file_target": 0,
  "expiration": "string",
  "share_with": "string",
  "share_with_displayname": "string",
  "share_with_link": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|
|share_type|integer(int64)|true|none|none|
|uid_owner|string|true|none|none|
|displayname_owner|string|true|none|none|
|permissions|integer(int64)|true|none|none|
|stime|integer(int64)|true|none|none|
|uid_file_owner|string|true|none|none|
|displayname_file_owner|string|true|none|none|
|path|string|true|none|none|
|item_type|string|true|none|none|
|mimetype|string|true|none|none|
|storage|integer(int64)|true|none|none|
|item_source|integer(int64)|true|none|none|
|file_source|integer(int64)|true|none|none|
|file_parent|integer(int64)|true|none|none|
|file_target|integer(int64)|true|none|none|
|expiration|string \| null|true|none|none|
|share_with|string \| null|true|none|none|
|share_with_displayname|string \| null|true|none|none|
|share_with_link|string \| null|true|none|none|

<h2 id="tocS_Lookup">Lookup</h2>
<!-- backwards compatibility -->
<a id="schemalookup"></a>
<a id="schema_Lookup"></a>
<a id="tocSlookup"></a>
<a id="tocslookup"></a>

```json
{
  "value": "string",
  "verified": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|value|string|true|none|none|
|verified|integer(int64)|true|none|none|

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

<h2 id="tocS_RemoteShare">RemoteShare</h2>
<!-- backwards compatibility -->
<a id="schemaremoteshare"></a>
<a id="schema_RemoteShare"></a>
<a id="tocSremoteshare"></a>
<a id="tocsremoteshare"></a>

```json
{
  "accepted": 0,
  "file_id": 0,
  "id": "string",
  "mimetype": "string",
  "mountpoint": "string",
  "mtime": 0,
  "name": "string",
  "owner": "string",
  "parent": "string",
  "permissions": 0,
  "remote": "string",
  "remote_id": "string",
  "refresh_token": "string",
  "share_type": 0,
  "type": "string",
  "user": "string",
  "item_size": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accepted|integer(int64)|true|none|none|
|file_id|integer(int64) \| null|true|none|none|
|id|string|true|none|none|
|mimetype|string \| null|true|none|none|
|mountpoint|string|true|none|none|
|mtime|integer(int64) \| null|true|none|none|
|name|string|true|none|none|
|owner|string|true|none|none|
|parent|string \| null|true|none|none|
|permissions|integer(int64) \| null|true|none|none|
|remote|string|true|none|none|
|remote_id|string|true|none|none|
|refresh_token|string|true|none|none|
|share_type|integer(int64)|true|none|none|
|type|string \| null|true|none|none|
|user|string|true|none|none|
|item_size|integer(int64) \| number(double) \| null|true|none|none|

<h2 id="tocS_Share">Share</h2>
<!-- backwards compatibility -->
<a id="schemashare"></a>
<a id="schema_Share"></a>
<a id="tocSshare"></a>
<a id="tocsshare"></a>

```json
{
  "attributes": "string",
  "can_delete": true,
  "can_edit": true,
  "displayname_file_owner": "string",
  "displayname_owner": "string",
  "expiration": "string",
  "file_parent": 0,
  "file_source": 0,
  "file_target": "string",
  "has_preview": true,
  "hide_download": 0,
  "is_trusted_server": true,
  "is-mount-root": true,
  "id": "string",
  "item_mtime": 0,
  "item_permissions": 0,
  "item_size": 0,
  "item_source": 0,
  "item_type": "file",
  "label": "string",
  "mail_send": 0,
  "mimetype": "string",
  "mount-type": "string",
  "note": "string",
  "original_displayname": "string",
  "parent": null,
  "password": "string",
  "password_expiration_time": "string",
  "path": "string",
  "permissions": 0,
  "send_password_by_talk": true,
  "share_type": 0,
  "share_with": "string",
  "share_with_avatar": "string",
  "share_with_displayname": "string",
  "share_with_displayname_unique": "string",
  "share_with_link": "string",
  "status": {
    "clearAt": 0,
    "icon": "string",
    "message": "string",
    "status": "string"
  },
  "stime": 0,
  "storage": 0,
  "storage_id": "string",
  "token": "string",
  "uid_file_owner": "string",
  "uid_owner": "string",
  "url": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|attributes|string \| null|true|none|none|
|can_delete|boolean|true|none|none|
|can_edit|boolean|true|none|none|
|displayname_file_owner|string|true|none|none|
|displayname_owner|string|true|none|none|
|expiration|string \| null|true|none|none|
|file_parent|integer(int64)|true|none|none|
|file_source|integer(int64)|true|none|none|
|file_target|string|true|none|none|
|has_preview|boolean|true|none|none|
|hide_download|integer(int64)|true|none|none|
|is_trusted_server|boolean|false|none|none|
|is-mount-root|boolean|true|none|none|
|id|string|true|none|none|
|item_mtime|integer(int64)|true|none|none|
|item_permissions|integer(int64)|false|none|none|
|item_size|number(double) \| integer(int64)|true|none|none|
|item_source|integer(int64)|true|none|none|
|item_type|string|true|none|none|
|label|string|true|none|none|
|mail_send|integer(int64)|true|none|none|
|mimetype|string|true|none|none|
|mount-type|string|true|none|none|
|note|string|true|none|none|
|original_displayname|string \| null|true|none|none|
|parent|object \| null|true|none|none|
|password|string \| null|false|none|none|
|password_expiration_time|string \| null|false|none|none|
|path|string \| null|true|none|none|
|permissions|integer(int64)|true|none|none|
|send_password_by_talk|boolean|false|none|none|
|share_type|integer(int64)|true|none|none|
|share_with|string \| null|false|none|none|
|share_with_avatar|string|false|none|none|
|share_with_displayname|string|false|none|none|
|share_with_displayname_unique|string \| null|false|none|none|
|share_with_link|string|false|none|none|
|status|object|false|none|none|
|stime|integer(int64)|true|none|none|
|storage|integer(int64)|true|none|none|
|storage_id|string|true|none|none|
|token|string \| null|true|none|none|
|uid_file_owner|string|true|none|none|
|uid_owner|string|true|none|none|
|url|string \| null|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|hide_download|0|
|hide_download|1|
|item_type|file|
|item_type|folder|
|mail_send|0|
|mail_send|1|

<h2 id="tocS_ShareInfo">ShareInfo</h2>
<!-- backwards compatibility -->
<a id="schemashareinfo"></a>
<a id="schema_ShareInfo"></a>
<a id="tocSshareinfo"></a>
<a id="tocsshareinfo"></a>

```json
{
  "id": 0,
  "parentId": 0,
  "mtime": 0,
  "name": "string",
  "permissions": 0,
  "mimetype": "string",
  "size": 0,
  "type": "string",
  "etag": "string",
  "children": [
    {
      "property1": {},
      "property2": {}
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int64)|true|none|none|
|parentId|integer(int64)|true|none|none|
|mtime|integer(int64)|true|none|none|
|name|string|true|none|none|
|permissions|integer(int64)|true|none|none|
|mimetype|string|true|none|none|
|size|integer(int64) \| number(double)|true|none|none|
|type|string|true|none|none|
|etag|string|true|none|none|
|children|[object]|false|none|none|

<h2 id="tocS_Sharee">Sharee</h2>
<!-- backwards compatibility -->
<a id="schemasharee"></a>
<a id="schema_Sharee"></a>
<a id="tocSsharee"></a>
<a id="tocssharee"></a>

```json
{
  "label": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|label|string|true|none|none|

<h2 id="tocS_ShareeCircle">ShareeCircle</h2>
<!-- backwards compatibility -->
<a id="schemashareecircle"></a>
<a id="schema_ShareeCircle"></a>
<a id="tocSshareecircle"></a>
<a id="tocsshareecircle"></a>

```json
{
  "label": "string",
  "shareWithDescription": "string",
  "value": {
    "shareType": 0,
    "shareWith": "string",
    "circle": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|label|string|true|none|none|
|shareWithDescription|string|true|none|none|
|value|object|true|none|none|

<h2 id="tocS_ShareeEmail">ShareeEmail</h2>
<!-- backwards compatibility -->
<a id="schemashareeemail"></a>
<a id="schema_ShareeEmail"></a>
<a id="tocSshareeemail"></a>
<a id="tocsshareeemail"></a>

```json
{
  "label": "string",
  "uuid": "string",
  "name": "string",
  "type": "string",
  "shareWithDisplayNameUnique": "string",
  "value": {
    "shareType": 0,
    "shareWith": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|label|string|true|none|none|
|uuid|string|true|none|none|
|name|string|true|none|none|
|type|string|true|none|none|
|shareWithDisplayNameUnique|string|true|none|none|
|value|[ShareeValue](#schemashareevalue)|true|none|none|

<h2 id="tocS_ShareeGroup">ShareeGroup</h2>
<!-- backwards compatibility -->
<a id="schemashareegroup"></a>
<a id="schema_ShareeGroup"></a>
<a id="tocSshareegroup"></a>
<a id="tocsshareegroup"></a>

```json
{
  "label": "string",
  "value": {
    "shareType": 0,
    "shareWith": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|label|string|true|none|none|
|value|[ShareeValue](#schemashareevalue)|true|none|none|

<h2 id="tocS_ShareeLookup">ShareeLookup</h2>
<!-- backwards compatibility -->
<a id="schemashareelookup"></a>
<a id="schema_ShareeLookup"></a>
<a id="tocSshareelookup"></a>
<a id="tocsshareelookup"></a>

```json
{
  "label": "string",
  "extra": {
    "federationId": "string",
    "name": {
      "value": "string",
      "verified": 0
    },
    "email": {
      "value": "string",
      "verified": 0
    },
    "address": {
      "value": "string",
      "verified": 0
    },
    "website": {
      "value": "string",
      "verified": 0
    },
    "twitter": {
      "value": "string",
      "verified": 0
    },
    "phone": {
      "value": "string",
      "verified": 0
    },
    "twitter_signature": {
      "value": "string",
      "verified": 0
    },
    "website_signature": {
      "value": "string",
      "verified": 0
    },
    "userid": {
      "value": "string",
      "verified": 0
    }
  },
  "value": {
    "shareType": 0,
    "shareWith": "string",
    "globalScale": true
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|label|string|true|none|none|
|extra|object|true|none|none|
|value|object|true|none|none|

<h2 id="tocS_ShareeRemote">ShareeRemote</h2>
<!-- backwards compatibility -->
<a id="schemashareeremote"></a>
<a id="schema_ShareeRemote"></a>
<a id="tocSshareeremote"></a>
<a id="tocsshareeremote"></a>

```json
{
  "label": "string",
  "uuid": "string",
  "name": "string",
  "type": "string",
  "value": {
    "shareType": 0,
    "shareWith": "string",
    "server": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|label|string|true|none|none|
|uuid|string|true|none|none|
|name|string|true|none|none|
|type|string|true|none|none|
|value|object|true|none|none|

<h2 id="tocS_ShareeRemoteGroup">ShareeRemoteGroup</h2>
<!-- backwards compatibility -->
<a id="schemashareeremotegroup"></a>
<a id="schema_ShareeRemoteGroup"></a>
<a id="tocSshareeremotegroup"></a>
<a id="tocsshareeremotegroup"></a>

```json
{
  "label": "string",
  "guid": "string",
  "name": "string",
  "value": {
    "shareType": 0,
    "shareWith": "string",
    "server": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|label|string|true|none|none|
|guid|string|true|none|none|
|name|string|true|none|none|
|value|object|true|none|none|

<h2 id="tocS_ShareeRoom">ShareeRoom</h2>
<!-- backwards compatibility -->
<a id="schemashareeroom"></a>
<a id="schema_ShareeRoom"></a>
<a id="tocSshareeroom"></a>
<a id="tocsshareeroom"></a>

```json
{
  "label": "string",
  "value": {
    "shareType": 0,
    "shareWith": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|label|string|true|none|none|
|value|[ShareeValue](#schemashareevalue)|true|none|none|

<h2 id="tocS_ShareeUser">ShareeUser</h2>
<!-- backwards compatibility -->
<a id="schemashareeuser"></a>
<a id="schema_ShareeUser"></a>
<a id="tocSshareeuser"></a>
<a id="tocsshareeuser"></a>

```json
{
  "label": "string",
  "subline": "string",
  "icon": "string",
  "shareWithDisplayNameUnique": "string",
  "status": {
    "status": "string",
    "message": "string",
    "icon": "string",
    "clearAt": 0
  },
  "value": {
    "shareType": 0,
    "shareWith": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|label|string|true|none|none|
|subline|string|true|none|none|
|icon|string|true|none|none|
|shareWithDisplayNameUnique|string|true|none|none|
|status|object|true|none|none|
|value|[ShareeValue](#schemashareevalue)|true|none|none|

<h2 id="tocS_ShareeValue">ShareeValue</h2>
<!-- backwards compatibility -->
<a id="schemashareevalue"></a>
<a id="schema_ShareeValue"></a>
<a id="tocSshareevalue"></a>
<a id="tocsshareevalue"></a>

```json
{
  "shareType": 0,
  "shareWith": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|shareType|integer(int64)|true|none|none|
|shareWith|string|true|none|none|

<h2 id="tocS_ShareesRecommendedResult">ShareesRecommendedResult</h2>
<!-- backwards compatibility -->
<a id="schemashareesrecommendedresult"></a>
<a id="schema_ShareesRecommendedResult"></a>
<a id="tocSshareesrecommendedresult"></a>
<a id="tocsshareesrecommendedresult"></a>

```json
{
  "exact": {
    "emails": [
      {
        "label": "string",
        "uuid": "string",
        "name": "string",
        "type": "string",
        "shareWithDisplayNameUnique": "string",
        "value": {
          "shareType": 0,
          "shareWith": "string"
        }
      }
    ],
    "groups": [
      {
        "label": "string",
        "value": {
          "shareType": 0,
          "shareWith": "string"
        }
      }
    ],
    "remote_groups": [
      {
        "label": "string",
        "guid": "string",
        "name": "string",
        "value": {
          "shareType": 0,
          "shareWith": "string",
          "server": "string"
        }
      }
    ],
    "remotes": [
      {
        "label": "string",
        "uuid": "string",
        "name": "string",
        "type": "string",
        "value": {
          "shareType": 0,
          "shareWith": "string",
          "server": "string"
        }
      }
    ],
    "users": [
      {
        "label": "string",
        "subline": "string",
        "icon": "string",
        "shareWithDisplayNameUnique": "string",
        "status": {
          "status": "string",
          "message": "string",
          "icon": "string",
          "clearAt": 0
        },
        "value": {
          "shareType": 0,
          "shareWith": "string"
        }
      }
    ]
  },
  "emails": [
    {
      "label": "string",
      "uuid": "string",
      "name": "string",
      "type": "string",
      "shareWithDisplayNameUnique": "string",
      "value": {
        "shareType": 0,
        "shareWith": "string"
      }
    }
  ],
  "groups": [
    {
      "label": "string",
      "value": {
        "shareType": 0,
        "shareWith": "string"
      }
    }
  ],
  "remote_groups": [
    {
      "label": "string",
      "guid": "string",
      "name": "string",
      "value": {
        "shareType": 0,
        "shareWith": "string",
        "server": "string"
      }
    }
  ],
  "remotes": [
    {
      "label": "string",
      "uuid": "string",
      "name": "string",
      "type": "string",
      "value": {
        "shareType": 0,
        "shareWith": "string",
        "server": "string"
      }
    }
  ],
  "users": [
    {
      "label": "string",
      "subline": "string",
      "icon": "string",
      "shareWithDisplayNameUnique": "string",
      "status": {
        "status": "string",
        "message": "string",
        "icon": "string",
        "clearAt": 0
      },
      "value": {
        "shareType": 0,
        "shareWith": "string"
      }
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|exact|object|true|none|none|
|emails|[[ShareeEmail](#schemashareeemail)]|true|none|none|
|groups|[[ShareeGroup](#schemashareegroup)]|true|none|none|
|remote_groups|[[ShareeRemoteGroup](#schemashareeremotegroup)]|true|none|none|
|remotes|[[ShareeRemote](#schemashareeremote)]|true|none|none|
|users|[[ShareeUser](#schemashareeuser)]|true|none|none|

<h2 id="tocS_ShareesSearchResult">ShareesSearchResult</h2>
<!-- backwards compatibility -->
<a id="schemashareessearchresult"></a>
<a id="schema_ShareesSearchResult"></a>
<a id="tocSshareessearchresult"></a>
<a id="tocsshareessearchresult"></a>

```json
{
  "exact": {
    "circles": [
      {
        "label": "string",
        "shareWithDescription": "string",
        "value": {
          "shareType": 0,
          "shareWith": "string",
          "circle": "string"
        }
      }
    ],
    "emails": [
      {
        "label": "string",
        "uuid": "string",
        "name": "string",
        "type": "string",
        "shareWithDisplayNameUnique": "string",
        "value": {
          "shareType": 0,
          "shareWith": "string"
        }
      }
    ],
    "groups": [
      {
        "label": "string",
        "value": {
          "shareType": 0,
          "shareWith": "string"
        }
      }
    ],
    "remote_groups": [
      {
        "label": "string",
        "guid": "string",
        "name": "string",
        "value": {
          "shareType": 0,
          "shareWith": "string",
          "server": "string"
        }
      }
    ],
    "remotes": [
      {
        "label": "string",
        "uuid": "string",
        "name": "string",
        "type": "string",
        "value": {
          "shareType": 0,
          "shareWith": "string",
          "server": "string"
        }
      }
    ],
    "rooms": [
      {
        "label": "string",
        "value": {
          "shareType": 0,
          "shareWith": "string"
        }
      }
    ],
    "users": [
      {
        "label": "string",
        "subline": "string",
        "icon": "string",
        "shareWithDisplayNameUnique": "string",
        "status": {
          "status": "string",
          "message": "string",
          "icon": "string",
          "clearAt": 0
        },
        "value": {
          "shareType": 0,
          "shareWith": "string"
        }
      }
    ]
  },
  "circles": [
    {
      "label": "string",
      "shareWithDescription": "string",
      "value": {
        "shareType": 0,
        "shareWith": "string",
        "circle": "string"
      }
    }
  ],
  "emails": [
    {
      "label": "string",
      "uuid": "string",
      "name": "string",
      "type": "string",
      "shareWithDisplayNameUnique": "string",
      "value": {
        "shareType": 0,
        "shareWith": "string"
      }
    }
  ],
  "groups": [
    {
      "label": "string",
      "value": {
        "shareType": 0,
        "shareWith": "string"
      }
    }
  ],
  "lookup": [
    {
      "label": "string",
      "extra": {
        "federationId": "string",
        "name": {
          "value": "string",
          "verified": 0
        },
        "email": {
          "value": "string",
          "verified": 0
        },
        "address": {
          "value": "string",
          "verified": 0
        },
        "website": {
          "value": "string",
          "verified": 0
        },
        "twitter": {
          "value": "string",
          "verified": 0
        },
        "phone": {
          "value": "string",
          "verified": 0
        },
        "twitter_signature": {
          "value": "string",
          "verified": 0
        },
        "website_signature": {
          "value": "string",
          "verified": 0
        },
        "userid": {
          "value": "string",
          "verified": 0
        }
      },
      "value": {
        "shareType": 0,
        "shareWith": "string",
        "globalScale": true
      }
    }
  ],
  "remote_groups": [
    {
      "label": "string",
      "guid": "string",
      "name": "string",
      "value": {
        "shareType": 0,
        "shareWith": "string",
        "server": "string"
      }
    }
  ],
  "remotes": [
    {
      "label": "string",
      "uuid": "string",
      "name": "string",
      "type": "string",
      "value": {
        "shareType": 0,
        "shareWith": "string",
        "server": "string"
      }
    }
  ],
  "rooms": [
    {
      "label": "string",
      "value": {
        "shareType": 0,
        "shareWith": "string"
      }
    }
  ],
  "users": [
    {
      "label": "string",
      "subline": "string",
      "icon": "string",
      "shareWithDisplayNameUnique": "string",
      "status": {
        "status": "string",
        "message": "string",
        "icon": "string",
        "clearAt": 0
      },
      "value": {
        "shareType": 0,
        "shareWith": "string"
      }
    }
  ],
  "lookupEnabled": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|exact|object|true|none|none|
|circles|[[ShareeCircle](#schemashareecircle)]|true|none|none|
|emails|[[ShareeEmail](#schemashareeemail)]|true|none|none|
|groups|[[ShareeGroup](#schemashareegroup)]|true|none|none|
|lookup|[[ShareeLookup](#schemashareelookup)]|true|none|none|
|remote_groups|[[ShareeRemoteGroup](#schemashareeremotegroup)]|true|none|none|
|remotes|[[ShareeRemote](#schemashareeremote)]|true|none|none|
|rooms|[[ShareeRoom](#schemashareeroom)]|true|none|none|
|users|[[ShareeUser](#schemashareeuser)]|true|none|none|
|lookupEnabled|boolean|true|none|none|
