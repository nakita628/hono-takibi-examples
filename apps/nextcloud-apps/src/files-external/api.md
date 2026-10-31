<h1 id="filesexternal">files_external v0.0.1</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Adds basic external storage support

License: agpl

# Authentication

- HTTP Authentication, scheme: basic

- HTTP Authentication, scheme: bearer

<h1 id="filesexternal-api">api</h1>

## Get the mount points visible for this user

<a id="opIdapi-get-user-mounts"></a>

> Code samples

```bash
curl https://cloud.example.com/ocs/v2.php/apps/files_external/api/v1/mounts \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'OCS-APIRequest: true'
```

`GET /ocs/v2.php/apps/files_external/api/v1/mounts`

<h3 id="get-the-mount-points-visible-for-this-user-parameters">Parameters</h3>

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
        "name": "string",
        "path": "string",
        "type": "dir",
        "backend": "string",
        "scope": "system",
        "permissions": 0,
        "id": 0,
        "class": "string",
        "config": {
          "applicableGroups": [
            "string"
          ],
          "applicableUsers": [
            "string"
          ],
          "authMechanism": "string",
          "backend": "string",
          "backendOptions": {
            "property1": {},
            "property2": {}
          },
          "id": 0,
          "mountOptions": {
            "property1": {},
            "property2": {}
          },
          "mountPoint": "string",
          "priority": 0,
          "status": 0,
          "statusMessage": "string",
          "type": "personal",
          "userProvided": true
        }
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

<h3 id="get-the-mount-points-visible-for-this-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|User mounts returned|Inline|
|401|Unauthorized|Current user is not logged in|Inline|

<h3 id="get-the-mount-points-visible-for-this-user-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|[[Mount](#schemamount)]|true|none|none|

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

# Schemas

<h2 id="tocS_Mount">Mount</h2>
<!-- backwards compatibility -->
<a id="schemamount"></a>
<a id="schema_Mount"></a>
<a id="tocSmount"></a>
<a id="tocsmount"></a>

```json
{
  "name": "string",
  "path": "string",
  "type": "dir",
  "backend": "string",
  "scope": "system",
  "permissions": 0,
  "id": 0,
  "class": "string",
  "config": {
    "applicableGroups": [
      "string"
    ],
    "applicableUsers": [
      "string"
    ],
    "authMechanism": "string",
    "backend": "string",
    "backendOptions": {
      "property1": {},
      "property2": {}
    },
    "id": 0,
    "mountOptions": {
      "property1": {},
      "property2": {}
    },
    "mountPoint": "string",
    "priority": 0,
    "status": 0,
    "statusMessage": "string",
    "type": "personal",
    "userProvided": true
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|none|
|path|string|true|none|none|
|type|string|true|none|none|
|backend|string|true|none|none|
|scope|string|true|none|none|
|permissions|integer(int64)|true|none|none|
|id|integer(int64)|true|none|none|
|class|string|true|none|none|
|config|[StorageConfig](#schemastorageconfig)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|dir|
|scope|system|
|scope|personal|

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

<h2 id="tocS_StorageConfig">StorageConfig</h2>
<!-- backwards compatibility -->
<a id="schemastorageconfig"></a>
<a id="schema_StorageConfig"></a>
<a id="tocSstorageconfig"></a>
<a id="tocsstorageconfig"></a>

```json
{
  "applicableGroups": [
    "string"
  ],
  "applicableUsers": [
    "string"
  ],
  "authMechanism": "string",
  "backend": "string",
  "backendOptions": {
    "property1": {},
    "property2": {}
  },
  "id": 0,
  "mountOptions": {
    "property1": {},
    "property2": {}
  },
  "mountPoint": "string",
  "priority": 0,
  "status": 0,
  "statusMessage": "string",
  "type": "personal",
  "userProvided": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|applicableGroups|[string]|false|none|none|
|applicableUsers|[string]|false|none|none|
|authMechanism|string|true|none|none|
|backend|string|true|none|none|
|backendOptions|object|true|none|none|
|id|integer(int64)|false|none|none|
|mountOptions|object|false|none|none|
|mountPoint|string|true|none|none|
|priority|integer(int64)|false|none|none|
|status|integer(int64)|false|none|none|
|statusMessage|string|false|none|none|
|type|string|true|none|none|
|userProvided|boolean|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|personal|
|type|system|
