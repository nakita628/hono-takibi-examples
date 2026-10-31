<h1 id="sharing">sharing v0.0.1</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

This app provides APIs and occ commands to manage shares.

License: AGPL-3.0-or-later

# Authentication

- HTTP Authentication, scheme: basic

- HTTP Authentication, scheme: bearer

<h1 id="sharing-apiv1">api_v1</h1>

## Search for recipients that can be added to a share.

<a id="opIdapi_v1-search-recipients"></a>

> Code samples

```bash
curl 'https://cloud.example.com/ocs/v2.php/apps/sharing/api/v1/recipients?query=string' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'OCS-APIRequest: true'
```

`GET /ocs/v2.php/apps/sharing/api/v1/recipients`

<h3 id="search-for-recipients-that-can-be-added-to-a-share-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|filterRecipientTypeClasses[]|query|[string]|false|Type classes of recipients to filter by|
|query|query|string|true|The query to search for, if the query is empty, recommended recipients will be returned|
|limit|query|integer(int64)|false|The maximum number of participants|
|offset|query|integer(int64)|false|The offset of the participants|
|id|query|string \| null|false|If provided, recipients that are already part of the share will not be returned.|
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
        "class": "string",
        "value": "string",
        "instance": "string",
        "display_name": "string",
        "icon": {
          "svg": "string"
        },
        "secret": {
          "updatable": true,
          "value": "string",
          "url": "string"
        },
        "initiator": {
          "user_id": "string",
          "instance": "string",
          "display_name": "string",
          "icon": {
            "svg": "string"
          }
        },
        "permissions": [
          {
            "class": "string",
            "source_class": "string",
            "display_name": "string",
            "hint": "string",
            "priority": 1,
            "presets": [
              "string"
            ],
            "enabled": true
          }
        ]
      }
    ]
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
    "data": "string"
  }
}
```

<h3 id="search-for-recipients-that-can-be-added-to-a-share-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Recipients returned|Inline|
|400|Bad Request|Invalid recipient search parameters|Inline|
|401|Unauthorized|Current user is not logged in|Inline|
|404|Not Found|Share used for filtering existing recipients does not exist|Inline|

<h3 id="search-for-recipients-that-can-be-added-to-a-share-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|[[Recipient](#schemarecipient)]|true|none|none|

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

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|string|true|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Link|string||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer_auth, basic_auth
</aside>

## Generate a new secret.

<a id="opIdapi_v1-generate-secret"></a>

> Code samples

```bash
curl https://cloud.example.com/ocs/v2.php/apps/sharing/api/v1/secret \
  -H 'Accept: application/json' \
  -H 'OCS-APIRequest: true'
```

`GET /ocs/v2.php/apps/sharing/api/v1/secret`

<h3 id="generate-a-new-secret-parameters">Parameters</h3>

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
    "data": "string"
  }
}
```

<h3 id="generate-a-new-secret-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Generated secret returned|Inline|

<h3 id="generate-a-new-secret-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|string|true|none|none|

<aside class="warning">
Authentication is optional for this operation. To authenticate, use one of the following methods:
bearer_auth, basic_auth
</aside>

## Create a new share.

<a id="opIdapi_v1-create-share"></a>

> Code samples

```bash
curl https://cloud.example.com/ocs/v2.php/apps/sharing/api/v1/share \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'OCS-APIRequest: true'
```

`POST /ocs/v2.php/apps/sharing/api/v1/share`

<h3 id="create-a-new-share-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
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
      "id": "string",
      "owner": {
        "user_id": "string",
        "instance": "string",
        "display_name": "string",
        "icon": {
          "svg": "string"
        }
      },
      "last_updated": "string",
      "state": "active",
      "user_status": {},
      "sources": [
        {
          "class": "string",
          "value": "string",
          "display_name": "string",
          "icon": {
            "svg": "string"
          }
        }
      ],
      "recipients": [
        {
          "class": "string",
          "value": "string",
          "instance": "string",
          "display_name": "string",
          "icon": {
            "svg": "string"
          },
          "secret": {
            "updatable": true,
            "value": "string",
            "url": "string"
          },
          "initiator": {
            "user_id": "string",
            "instance": "string",
            "display_name": "string",
            "icon": {
              "svg": "string"
            }
          },
          "permissions": [
            {
              "class": "string",
              "source_class": "string",
              "display_name": "string",
              "hint": "string",
              "priority": 1,
              "presets": [
                "string"
              ],
              "enabled": true
            }
          ]
        }
      ],
      "properties": [
        {
          "class": "string",
          "display_name": "string",
          "hint": "string",
          "priority": 1,
          "required": true,
          "advanced": true,
          "value": "string",
          "type": "date",
          "min_date": "string",
          "max_date": "string"
        }
      ],
      "permissions": [
        {
          "class": "string",
          "source_class": "string",
          "display_name": "string",
          "hint": "string",
          "priority": 1,
          "presets": [
            "string"
          ],
          "enabled": true
        }
      ],
      "permission_preset": "string"
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

<h3 id="create-a-new-share-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Share created successfully|Inline|
|401|Unauthorized|Current user is not logged in|Inline|

<h3 id="create-a-new-share-responseschema">Response Schema</h3>

Status Code **201**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|[Share](#schemashare)|true|none|none|

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

## Update the state of a share.

<a id="opIdapi_v1-update-share-state"></a>

> Code samples

```bash
curl https://cloud.example.com/ocs/v2.php/apps/sharing/api/v1/share/string/state \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'OCS-APIRequest: true' \
  -d '{
    "state": "active"
  }'
```

`PUT /ocs/v2.php/apps/sharing/api/v1/share/{id}/state`

> Body parameter

```json
{
  "state": "active"
}
```

<h3 id="update-the-state-of-a-share-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|ID of the share|
|OCS-APIRequest|header|boolean|true|Required to be true for the API request to pass|
|body|body|object|true|none|
|» state|body|[State](#schemastate)|true|New state of the share|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» state|active|
|» state|draft|
|» state|deleted|

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
      "owner": {
        "user_id": "string",
        "instance": "string",
        "display_name": "string",
        "icon": {
          "svg": "string"
        }
      },
      "last_updated": "string",
      "state": "active",
      "user_status": {},
      "sources": [
        {
          "class": "string",
          "value": "string",
          "display_name": "string",
          "icon": {
            "svg": "string"
          }
        }
      ],
      "recipients": [
        {
          "class": "string",
          "value": "string",
          "instance": "string",
          "display_name": "string",
          "icon": {
            "svg": "string"
          },
          "secret": {
            "updatable": true,
            "value": "string",
            "url": "string"
          },
          "initiator": {
            "user_id": "string",
            "instance": "string",
            "display_name": "string",
            "icon": {
              "svg": "string"
            }
          },
          "permissions": [
            {
              "class": "string",
              "source_class": "string",
              "display_name": "string",
              "hint": "string",
              "priority": 1,
              "presets": [
                "string"
              ],
              "enabled": true
            }
          ]
        }
      ],
      "properties": [
        {
          "class": "string",
          "display_name": "string",
          "hint": "string",
          "priority": 1,
          "required": true,
          "advanced": true,
          "value": "string",
          "type": "date",
          "min_date": "string",
          "max_date": "string"
        }
      ],
      "permissions": [
        {
          "class": "string",
          "source_class": "string",
          "display_name": "string",
          "hint": "string",
          "priority": 1,
          "presets": [
            "string"
          ],
          "enabled": true
        }
      ],
      "permission_preset": "string"
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
    "data": "string"
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
    "data": "string"
  }
}
```

<h3 id="update-the-state-of-a-share-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Share state updated successfully|Inline|
|400|Bad Request|Invalid share state|Inline|
|401|Unauthorized|Current user is not logged in|Inline|
|403|Forbidden|Updating the share state is not allowed|Inline|
|404|Not Found|Share not found|Inline|

<h3 id="update-the-state-of-a-share-responseschema">Response Schema</h3>

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
|» data|string|true|none|none|

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
|» data|string|true|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer_auth, basic_auth
</aside>

## Update the user status for a share.

<a id="opIdapi_v1-update-share-user-status"></a>

> Code samples

```bash
curl https://cloud.example.com/ocs/v2.php/apps/sharing/api/v1/share/string/user-status \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'OCS-APIRequest: true' \
  -d '{
    "userStatus": "pending"
  }'
```

`PUT /ocs/v2.php/apps/sharing/api/v1/share/{id}/user-status`

> Body parameter

```json
{
  "userStatus": "pending"
}
```

<h3 id="update-the-user-status-for-a-share-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|ID of the share|
|OCS-APIRequest|header|boolean|true|Required to be true for the API request to pass|
|body|body|object|true|none|
|» userStatus|body|[UserStatus](#schemauserstatus)|true|New user status for the share|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» userStatus|pending|
|» userStatus|accepted|
|» userStatus|rejected|

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
      "owner": {
        "user_id": "string",
        "instance": "string",
        "display_name": "string",
        "icon": {
          "svg": "string"
        }
      },
      "last_updated": "string",
      "state": "active",
      "user_status": {},
      "sources": [
        {
          "class": "string",
          "value": "string",
          "display_name": "string",
          "icon": {
            "svg": "string"
          }
        }
      ],
      "recipients": [
        {
          "class": "string",
          "value": "string",
          "instance": "string",
          "display_name": "string",
          "icon": {
            "svg": "string"
          },
          "secret": {
            "updatable": true,
            "value": "string",
            "url": "string"
          },
          "initiator": {
            "user_id": "string",
            "instance": "string",
            "display_name": "string",
            "icon": {
              "svg": "string"
            }
          },
          "permissions": [
            {
              "class": "string",
              "source_class": "string",
              "display_name": "string",
              "hint": "string",
              "priority": 1,
              "presets": [
                "string"
              ],
              "enabled": true
            }
          ]
        }
      ],
      "properties": [
        {
          "class": "string",
          "display_name": "string",
          "hint": "string",
          "priority": 1,
          "required": true,
          "advanced": true,
          "value": "string",
          "type": "date",
          "min_date": "string",
          "max_date": "string"
        }
      ],
      "permissions": [
        {
          "class": "string",
          "source_class": "string",
          "display_name": "string",
          "hint": "string",
          "priority": 1,
          "presets": [
            "string"
          ],
          "enabled": true
        }
      ],
      "permission_preset": "string"
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
    "data": "string"
  }
}
```

<h3 id="update-the-user-status-for-a-share-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|User status for share updated successfully|Inline|
|400|Bad Request|Invalid share user status|Inline|
|401|Unauthorized|Current user is not logged in|Inline|
|404|Not Found|Share not found|Inline|

<h3 id="update-the-user-status-for-a-share-responseschema">Response Schema</h3>

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
|» data|string|true|none|none|

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
|» data|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer_auth, basic_auth
</aside>

## Add a new source to a share.

<a id="opIdapi_v1-add-share-source"></a>

> Code samples

```bash
curl https://cloud.example.com/ocs/v2.php/apps/sharing/api/v1/share/string/source \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'OCS-APIRequest: true' \
  -d '{
    "class": "string",
    "value": "string"
  }'
```

`POST /ocs/v2.php/apps/sharing/api/v1/share/{id}/source`

> Body parameter

```json
{
  "class": "string",
  "value": "string"
}
```

<h3 id="add-a-new-source-to-a-share-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|ID of the share|
|OCS-APIRequest|header|boolean|true|Required to be true for the API request to pass|
|body|body|object|true|none|
|» class|body|string|true|Type class of the source|
|» value|body|string|true|Value of the source|

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
      "owner": {
        "user_id": "string",
        "instance": "string",
        "display_name": "string",
        "icon": {
          "svg": "string"
        }
      },
      "last_updated": "string",
      "state": "active",
      "user_status": {},
      "sources": [
        {
          "class": "string",
          "value": "string",
          "display_name": "string",
          "icon": {
            "svg": "string"
          }
        }
      ],
      "recipients": [
        {
          "class": "string",
          "value": "string",
          "instance": "string",
          "display_name": "string",
          "icon": {
            "svg": "string"
          },
          "secret": {
            "updatable": true,
            "value": "string",
            "url": "string"
          },
          "initiator": {
            "user_id": "string",
            "instance": "string",
            "display_name": "string",
            "icon": {
              "svg": "string"
            }
          },
          "permissions": [
            {
              "class": "string",
              "source_class": "string",
              "display_name": "string",
              "hint": "string",
              "priority": 1,
              "presets": [
                "string"
              ],
              "enabled": true
            }
          ]
        }
      ],
      "properties": [
        {
          "class": "string",
          "display_name": "string",
          "hint": "string",
          "priority": 1,
          "required": true,
          "advanced": true,
          "value": "string",
          "type": "date",
          "min_date": "string",
          "max_date": "string"
        }
      ],
      "permissions": [
        {
          "class": "string",
          "source_class": "string",
          "display_name": "string",
          "hint": "string",
          "priority": 1,
          "presets": [
            "string"
          ],
          "enabled": true
        }
      ],
      "permission_preset": "string"
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
    "data": "string"
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
    "data": "string"
  }
}
```

<h3 id="add-a-new-source-to-a-share-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Share source added successfully|Inline|
|400|Bad Request|Invalid share source|Inline|
|401|Unauthorized|Current user is not logged in|Inline|
|403|Forbidden|Adding the share source is not allowed|Inline|
|404|Not Found|Share not found|Inline|

<h3 id="add-a-new-source-to-a-share-responseschema">Response Schema</h3>

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
|» data|string|true|none|none|

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
|» data|string|true|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer_auth, basic_auth
</aside>

## Remove an existing source from a share.

<a id="opIdapi_v1-remove-share-source"></a>

> Code samples

```bash
curl 'https://cloud.example.com/ocs/v2.php/apps/sharing/api/v1/share/string/source?class=string&value=string' \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'OCS-APIRequest: true'
```

`DELETE /ocs/v2.php/apps/sharing/api/v1/share/{id}/source`

<h3 id="remove-an-existing-source-from-a-share-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|ID of the share|
|class|query|string|true|Type class of the source|
|value|query|string|true|Value of the source|
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
      "id": "string",
      "owner": {
        "user_id": "string",
        "instance": "string",
        "display_name": "string",
        "icon": {
          "svg": "string"
        }
      },
      "last_updated": "string",
      "state": "active",
      "user_status": {},
      "sources": [
        {
          "class": "string",
          "value": "string",
          "display_name": "string",
          "icon": {
            "svg": "string"
          }
        }
      ],
      "recipients": [
        {
          "class": "string",
          "value": "string",
          "instance": "string",
          "display_name": "string",
          "icon": {
            "svg": "string"
          },
          "secret": {
            "updatable": true,
            "value": "string",
            "url": "string"
          },
          "initiator": {
            "user_id": "string",
            "instance": "string",
            "display_name": "string",
            "icon": {
              "svg": "string"
            }
          },
          "permissions": [
            {
              "class": "string",
              "source_class": "string",
              "display_name": "string",
              "hint": "string",
              "priority": 1,
              "presets": [
                "string"
              ],
              "enabled": true
            }
          ]
        }
      ],
      "properties": [
        {
          "class": "string",
          "display_name": "string",
          "hint": "string",
          "priority": 1,
          "required": true,
          "advanced": true,
          "value": "string",
          "type": "date",
          "min_date": "string",
          "max_date": "string"
        }
      ],
      "permissions": [
        {
          "class": "string",
          "source_class": "string",
          "display_name": "string",
          "hint": "string",
          "priority": 1,
          "presets": [
            "string"
          ],
          "enabled": true
        }
      ],
      "permission_preset": "string"
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
    "data": "string"
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
    "data": "string"
  }
}
```

<h3 id="remove-an-existing-source-from-a-share-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Share source removed successfully|Inline|
|401|Unauthorized|Current user is not logged in|Inline|
|403|Forbidden|Removing the share source is not allowed|Inline|
|404|Not Found|Share not found|Inline|

<h3 id="remove-an-existing-source-from-a-share-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|[Share](#schemashare)|true|none|none|

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
|» data|string|true|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer_auth, basic_auth
</aside>

## Add a new recipient to a share.

<a id="opIdapi_v1-add-share-recipient"></a>

> Code samples

```bash
curl https://cloud.example.com/ocs/v2.php/apps/sharing/api/v1/share/string/recipient \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'OCS-APIRequest: true' \
  -d '{
    "class": "string",
    "value": "string",
    "instance": "string"
  }'
```

`POST /ocs/v2.php/apps/sharing/api/v1/share/{id}/recipient`

> Body parameter

```json
{
  "class": "string",
  "value": "string",
  "instance": "string"
}
```

<h3 id="add-a-new-recipient-to-a-share-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|ID of the share|
|OCS-APIRequest|header|boolean|true|Required to be true for the API request to pass|
|body|body|object|true|none|
|» class|body|string|true|Type class of the recipient|
|» value|body|string|true|Value of the recipient|
|» instance|body|string \| null|false|Instance of the recipient|

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
      "owner": {
        "user_id": "string",
        "instance": "string",
        "display_name": "string",
        "icon": {
          "svg": "string"
        }
      },
      "last_updated": "string",
      "state": "active",
      "user_status": {},
      "sources": [
        {
          "class": "string",
          "value": "string",
          "display_name": "string",
          "icon": {
            "svg": "string"
          }
        }
      ],
      "recipients": [
        {
          "class": "string",
          "value": "string",
          "instance": "string",
          "display_name": "string",
          "icon": {
            "svg": "string"
          },
          "secret": {
            "updatable": true,
            "value": "string",
            "url": "string"
          },
          "initiator": {
            "user_id": "string",
            "instance": "string",
            "display_name": "string",
            "icon": {
              "svg": "string"
            }
          },
          "permissions": [
            {
              "class": "string",
              "source_class": "string",
              "display_name": "string",
              "hint": "string",
              "priority": 1,
              "presets": [
                "string"
              ],
              "enabled": true
            }
          ]
        }
      ],
      "properties": [
        {
          "class": "string",
          "display_name": "string",
          "hint": "string",
          "priority": 1,
          "required": true,
          "advanced": true,
          "value": "string",
          "type": "date",
          "min_date": "string",
          "max_date": "string"
        }
      ],
      "permissions": [
        {
          "class": "string",
          "source_class": "string",
          "display_name": "string",
          "hint": "string",
          "priority": 1,
          "presets": [
            "string"
          ],
          "enabled": true
        }
      ],
      "permission_preset": "string"
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
    "data": "string"
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
    "data": "string"
  }
}
```

<h3 id="add-a-new-recipient-to-a-share-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Share recipient added successfully|Inline|
|400|Bad Request|Invalid share recipient|Inline|
|401|Unauthorized|Current user is not logged in|Inline|
|403|Forbidden|Adding the share recipient is not allowed|Inline|
|404|Not Found|Share not found|Inline|

<h3 id="add-a-new-recipient-to-a-share-responseschema">Response Schema</h3>

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
|» data|string|true|none|none|

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
|» data|string|true|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer_auth, basic_auth
</aside>

## Remove an existing recipient from a share.

<a id="opIdapi_v1-remove-share-recipient"></a>

> Code samples

```bash
curl 'https://cloud.example.com/ocs/v2.php/apps/sharing/api/v1/share/string/recipient?class=string&value=string' \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'OCS-APIRequest: true'
```

`DELETE /ocs/v2.php/apps/sharing/api/v1/share/{id}/recipient`

<h3 id="remove-an-existing-recipient-from-a-share-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|ID of the share|
|class|query|string|true|Type class of the recipient|
|value|query|string|true|Value of the recipient|
|instance|query|string \| null|false|Instance of the recipient|
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
      "id": "string",
      "owner": {
        "user_id": "string",
        "instance": "string",
        "display_name": "string",
        "icon": {
          "svg": "string"
        }
      },
      "last_updated": "string",
      "state": "active",
      "user_status": {},
      "sources": [
        {
          "class": "string",
          "value": "string",
          "display_name": "string",
          "icon": {
            "svg": "string"
          }
        }
      ],
      "recipients": [
        {
          "class": "string",
          "value": "string",
          "instance": "string",
          "display_name": "string",
          "icon": {
            "svg": "string"
          },
          "secret": {
            "updatable": true,
            "value": "string",
            "url": "string"
          },
          "initiator": {
            "user_id": "string",
            "instance": "string",
            "display_name": "string",
            "icon": {
              "svg": "string"
            }
          },
          "permissions": [
            {
              "class": "string",
              "source_class": "string",
              "display_name": "string",
              "hint": "string",
              "priority": 1,
              "presets": [
                "string"
              ],
              "enabled": true
            }
          ]
        }
      ],
      "properties": [
        {
          "class": "string",
          "display_name": "string",
          "hint": "string",
          "priority": 1,
          "required": true,
          "advanced": true,
          "value": "string",
          "type": "date",
          "min_date": "string",
          "max_date": "string"
        }
      ],
      "permissions": [
        {
          "class": "string",
          "source_class": "string",
          "display_name": "string",
          "hint": "string",
          "priority": 1,
          "presets": [
            "string"
          ],
          "enabled": true
        }
      ],
      "permission_preset": "string"
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
    "data": "string"
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
    "data": "string"
  }
}
```

<h3 id="remove-an-existing-recipient-from-a-share-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Share recipient removed successfully|Inline|
|401|Unauthorized|Current user is not logged in|Inline|
|403|Forbidden|Removing the share recipient is not allowed|Inline|
|404|Not Found|Share not found|Inline|

<h3 id="remove-an-existing-recipient-from-a-share-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|[Share](#schemashare)|true|none|none|

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
|» data|string|true|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer_auth, basic_auth
</aside>

## Update the secret of a recipient.

<a id="opIdapi_v1-update-share-recipient-secret"></a>

> Code samples

```bash
curl https://cloud.example.com/ocs/v2.php/apps/sharing/api/v1/share/string/recipient/secret \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'OCS-APIRequest: true' \
  -d '{
    "class": "string",
    "value": "string",
    "instance": "string",
    "secret": "string"
  }'
```

`PUT /ocs/v2.php/apps/sharing/api/v1/share/{id}/recipient/secret`

> Body parameter

```json
{
  "class": "string",
  "value": "string",
  "instance": "string",
  "secret": "string"
}
```

<h3 id="update-the-secret-of-a-recipient-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|ID of the share|
|OCS-APIRequest|header|boolean|true|Required to be true for the API request to pass|
|body|body|object|true|none|
|» class|body|string|true|Type class of the recipient|
|» value|body|string|true|Value of the recipient|
|» instance|body|string \| null|false|Instance of the recipient|
|» secret|body|string|true|Secret of the recipient|

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
      "owner": {
        "user_id": "string",
        "instance": "string",
        "display_name": "string",
        "icon": {
          "svg": "string"
        }
      },
      "last_updated": "string",
      "state": "active",
      "user_status": {},
      "sources": [
        {
          "class": "string",
          "value": "string",
          "display_name": "string",
          "icon": {
            "svg": "string"
          }
        }
      ],
      "recipients": [
        {
          "class": "string",
          "value": "string",
          "instance": "string",
          "display_name": "string",
          "icon": {
            "svg": "string"
          },
          "secret": {
            "updatable": true,
            "value": "string",
            "url": "string"
          },
          "initiator": {
            "user_id": "string",
            "instance": "string",
            "display_name": "string",
            "icon": {
              "svg": "string"
            }
          },
          "permissions": [
            {
              "class": "string",
              "source_class": "string",
              "display_name": "string",
              "hint": "string",
              "priority": 1,
              "presets": [
                "string"
              ],
              "enabled": true
            }
          ]
        }
      ],
      "properties": [
        {
          "class": "string",
          "display_name": "string",
          "hint": "string",
          "priority": 1,
          "required": true,
          "advanced": true,
          "value": "string",
          "type": "date",
          "min_date": "string",
          "max_date": "string"
        }
      ],
      "permissions": [
        {
          "class": "string",
          "source_class": "string",
          "display_name": "string",
          "hint": "string",
          "priority": 1,
          "presets": [
            "string"
          ],
          "enabled": true
        }
      ],
      "permission_preset": "string"
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
    "data": "string"
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
    "data": "string"
  }
}
```

<h3 id="update-the-secret-of-a-recipient-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Share recipient secret updated successfully|Inline|
|400|Bad Request|Invalid secret|Inline|
|401|Unauthorized|Current user is not logged in|Inline|
|403|Forbidden|Updating the share recipient secret is not allowed|Inline|
|404|Not Found|Share not found|Inline|

<h3 id="update-the-secret-of-a-recipient-responseschema">Response Schema</h3>

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
|» data|string|true|none|none|

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
|» data|string|true|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer_auth, basic_auth
</aside>

## Update a property of a share.

<a id="opIdapi_v1-update-share-property"></a>

> Code samples

```bash
curl https://cloud.example.com/ocs/v2.php/apps/sharing/api/v1/share/string/property \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'OCS-APIRequest: true' \
  -d '{
    "class": "string",
    "value": "string"
  }'
```

`PUT /ocs/v2.php/apps/sharing/api/v1/share/{id}/property`

> Body parameter

```json
{
  "class": "string",
  "value": "string"
}
```

<h3 id="update-a-property-of-a-share-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|ID of the share|
|OCS-APIRequest|header|boolean|true|Required to be true for the API request to pass|
|body|body|object|true|none|
|» class|body|string|true|Type class of the property|
|» value|body|string \| null|false|Value of the property|

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
      "owner": {
        "user_id": "string",
        "instance": "string",
        "display_name": "string",
        "icon": {
          "svg": "string"
        }
      },
      "last_updated": "string",
      "state": "active",
      "user_status": {},
      "sources": [
        {
          "class": "string",
          "value": "string",
          "display_name": "string",
          "icon": {
            "svg": "string"
          }
        }
      ],
      "recipients": [
        {
          "class": "string",
          "value": "string",
          "instance": "string",
          "display_name": "string",
          "icon": {
            "svg": "string"
          },
          "secret": {
            "updatable": true,
            "value": "string",
            "url": "string"
          },
          "initiator": {
            "user_id": "string",
            "instance": "string",
            "display_name": "string",
            "icon": {
              "svg": "string"
            }
          },
          "permissions": [
            {
              "class": "string",
              "source_class": "string",
              "display_name": "string",
              "hint": "string",
              "priority": 1,
              "presets": [
                "string"
              ],
              "enabled": true
            }
          ]
        }
      ],
      "properties": [
        {
          "class": "string",
          "display_name": "string",
          "hint": "string",
          "priority": 1,
          "required": true,
          "advanced": true,
          "value": "string",
          "type": "date",
          "min_date": "string",
          "max_date": "string"
        }
      ],
      "permissions": [
        {
          "class": "string",
          "source_class": "string",
          "display_name": "string",
          "hint": "string",
          "priority": 1,
          "presets": [
            "string"
          ],
          "enabled": true
        }
      ],
      "permission_preset": "string"
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
    "data": "string"
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
    "data": "string"
  }
}
```

<h3 id="update-a-property-of-a-share-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Share property updated successfully|Inline|
|400|Bad Request|Invalid share property|Inline|
|401|Unauthorized|Current user is not logged in|Inline|
|403|Forbidden|Updating the share property is not allowed|Inline|
|404|Not Found|Share not found|Inline|

<h3 id="update-a-property-of-a-share-responseschema">Response Schema</h3>

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
|» data|string|true|none|none|

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
|» data|string|true|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer_auth, basic_auth
</aside>

## Update a permission of a share.

<a id="opIdapi_v1-update-share-permission"></a>

> Code samples

```bash
curl https://cloud.example.com/ocs/v2.php/apps/sharing/api/v1/share/string/permission \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'OCS-APIRequest: true' \
  -d '{
    "class": "string",
    "enabled": true
  }'
```

`PUT /ocs/v2.php/apps/sharing/api/v1/share/{id}/permission`

> Body parameter

```json
{
  "class": "string",
  "enabled": true
}
```

<h3 id="update-a-permission-of-a-share-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|ID of the share|
|OCS-APIRequest|header|boolean|true|Required to be true for the API request to pass|
|body|body|object|true|none|
|» class|body|string|true|Type class of the permission|
|» enabled|body|boolean|true|Enabled state of the permission|

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
      "owner": {
        "user_id": "string",
        "instance": "string",
        "display_name": "string",
        "icon": {
          "svg": "string"
        }
      },
      "last_updated": "string",
      "state": "active",
      "user_status": {},
      "sources": [
        {
          "class": "string",
          "value": "string",
          "display_name": "string",
          "icon": {
            "svg": "string"
          }
        }
      ],
      "recipients": [
        {
          "class": "string",
          "value": "string",
          "instance": "string",
          "display_name": "string",
          "icon": {
            "svg": "string"
          },
          "secret": {
            "updatable": true,
            "value": "string",
            "url": "string"
          },
          "initiator": {
            "user_id": "string",
            "instance": "string",
            "display_name": "string",
            "icon": {
              "svg": "string"
            }
          },
          "permissions": [
            {
              "class": "string",
              "source_class": "string",
              "display_name": "string",
              "hint": "string",
              "priority": 1,
              "presets": [
                "string"
              ],
              "enabled": true
            }
          ]
        }
      ],
      "properties": [
        {
          "class": "string",
          "display_name": "string",
          "hint": "string",
          "priority": 1,
          "required": true,
          "advanced": true,
          "value": "string",
          "type": "date",
          "min_date": "string",
          "max_date": "string"
        }
      ],
      "permissions": [
        {
          "class": "string",
          "source_class": "string",
          "display_name": "string",
          "hint": "string",
          "priority": 1,
          "presets": [
            "string"
          ],
          "enabled": true
        }
      ],
      "permission_preset": "string"
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
    "data": "string"
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
    "data": "string"
  }
}
```

<h3 id="update-a-permission-of-a-share-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Share permission updated successfully|Inline|
|400|Bad Request|Invalid share permission|Inline|
|401|Unauthorized|Current user is not logged in|Inline|
|403|Forbidden|Updating the share permission is not allowed|Inline|
|404|Not Found|Share not found|Inline|

<h3 id="update-a-permission-of-a-share-responseschema">Response Schema</h3>

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
|» data|string|true|none|none|

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
|» data|string|true|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer_auth, basic_auth
</aside>

## Update a permission for a recipient of a share.

<a id="opIdapi_v1-update-share-recipient-permission"></a>

> Code samples

```bash
curl https://cloud.example.com/ocs/v2.php/apps/sharing/api/v1/share/string/recipient/permission \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'OCS-APIRequest: true' \
  -d '{
    "recipientClass": "string",
    "recipientValue": "string",
    "recipientInstance": "string",
    "permissionClass": "string",
    "enabled": true
  }'
```

`PUT /ocs/v2.php/apps/sharing/api/v1/share/{id}/recipient/permission`

> Body parameter

```json
{
  "recipientClass": "string",
  "recipientValue": "string",
  "recipientInstance": "string",
  "permissionClass": "string",
  "enabled": true
}
```

<h3 id="update-a-permission-for-a-recipient-of-a-share-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|ID of the share|
|OCS-APIRequest|header|boolean|true|Required to be true for the API request to pass|
|body|body|object|true|none|
|» recipientClass|body|string|true|Type class of the recipient|
|» recipientValue|body|string|true|Value of the recipient|
|» recipientInstance|body|string \| null|false|Instance of the recipient|
|» permissionClass|body|string|true|Type class of the permission|
|» enabled|body|boolean|true|Enabled state of the permission|

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
      "owner": {
        "user_id": "string",
        "instance": "string",
        "display_name": "string",
        "icon": {
          "svg": "string"
        }
      },
      "last_updated": "string",
      "state": "active",
      "user_status": {},
      "sources": [
        {
          "class": "string",
          "value": "string",
          "display_name": "string",
          "icon": {
            "svg": "string"
          }
        }
      ],
      "recipients": [
        {
          "class": "string",
          "value": "string",
          "instance": "string",
          "display_name": "string",
          "icon": {
            "svg": "string"
          },
          "secret": {
            "updatable": true,
            "value": "string",
            "url": "string"
          },
          "initiator": {
            "user_id": "string",
            "instance": "string",
            "display_name": "string",
            "icon": {
              "svg": "string"
            }
          },
          "permissions": [
            {
              "class": "string",
              "source_class": "string",
              "display_name": "string",
              "hint": "string",
              "priority": 1,
              "presets": [
                "string"
              ],
              "enabled": true
            }
          ]
        }
      ],
      "properties": [
        {
          "class": "string",
          "display_name": "string",
          "hint": "string",
          "priority": 1,
          "required": true,
          "advanced": true,
          "value": "string",
          "type": "date",
          "min_date": "string",
          "max_date": "string"
        }
      ],
      "permissions": [
        {
          "class": "string",
          "source_class": "string",
          "display_name": "string",
          "hint": "string",
          "priority": 1,
          "presets": [
            "string"
          ],
          "enabled": true
        }
      ],
      "permission_preset": "string"
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
    "data": "string"
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
    "data": "string"
  }
}
```

<h3 id="update-a-permission-for-a-recipient-of-a-share-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Share recipient permission updated successfully|Inline|
|401|Unauthorized|Current user is not logged in|Inline|
|403|Forbidden|Updating the share recipient permission is not allowed|Inline|
|404|Not Found|Share not found|Inline|

<h3 id="update-a-permission-for-a-recipient-of-a-share-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|[Share](#schemashare)|true|none|none|

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
|» data|string|true|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer_auth, basic_auth
</aside>

## Select a permission preset for a share.

<a id="opIdapi_v1-select-share-permission-preset"></a>

> Code samples

```bash
curl https://cloud.example.com/ocs/v2.php/apps/sharing/api/v1/share/string/permission/preset \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'OCS-APIRequest: true' \
  -d '{
    "permissionPresetClass": "string"
  }'
```

`PUT /ocs/v2.php/apps/sharing/api/v1/share/{id}/permission/preset`

> Body parameter

```json
{
  "permissionPresetClass": "string"
}
```

<h3 id="select-a-permission-preset-for-a-share-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|ID of the share|
|OCS-APIRequest|header|boolean|true|Required to be true for the API request to pass|
|body|body|object|true|none|
|» permissionPresetClass|body|string|true|New permission preset of the share|

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
      "owner": {
        "user_id": "string",
        "instance": "string",
        "display_name": "string",
        "icon": {
          "svg": "string"
        }
      },
      "last_updated": "string",
      "state": "active",
      "user_status": {},
      "sources": [
        {
          "class": "string",
          "value": "string",
          "display_name": "string",
          "icon": {
            "svg": "string"
          }
        }
      ],
      "recipients": [
        {
          "class": "string",
          "value": "string",
          "instance": "string",
          "display_name": "string",
          "icon": {
            "svg": "string"
          },
          "secret": {
            "updatable": true,
            "value": "string",
            "url": "string"
          },
          "initiator": {
            "user_id": "string",
            "instance": "string",
            "display_name": "string",
            "icon": {
              "svg": "string"
            }
          },
          "permissions": [
            {
              "class": "string",
              "source_class": "string",
              "display_name": "string",
              "hint": "string",
              "priority": 1,
              "presets": [
                "string"
              ],
              "enabled": true
            }
          ]
        }
      ],
      "properties": [
        {
          "class": "string",
          "display_name": "string",
          "hint": "string",
          "priority": 1,
          "required": true,
          "advanced": true,
          "value": "string",
          "type": "date",
          "min_date": "string",
          "max_date": "string"
        }
      ],
      "permissions": [
        {
          "class": "string",
          "source_class": "string",
          "display_name": "string",
          "hint": "string",
          "priority": 1,
          "presets": [
            "string"
          ],
          "enabled": true
        }
      ],
      "permission_preset": "string"
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
    "data": "string"
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
    "data": "string"
  }
}
```

<h3 id="select-a-permission-preset-for-a-share-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Share permission preset selected successfully|Inline|
|400|Bad Request|Invalid share permission preset|Inline|
|401|Unauthorized|Current user is not logged in|Inline|
|403|Forbidden|Selecting the share permission preset is not allowed|Inline|
|404|Not Found|Share not found|Inline|

<h3 id="select-a-permission-preset-for-a-share-responseschema">Response Schema</h3>

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
|» data|string|true|none|none|

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
|» data|string|true|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer_auth, basic_auth
</aside>

## Get a share.

<a id="opIdapi_v1-get-share"></a>

> Code samples

```bash
curl https://cloud.example.com/ocs/v2.php/apps/sharing/api/v1/share/string \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'OCS-APIRequest: true' \
  -d '{
    "secret": null,
    "arguments": {}
  }'
```

`POST /ocs/v2.php/apps/sharing/api/v1/share/{id}`

> Body parameter

```json
{
  "secret": null,
  "arguments": {}
}
```

<h3 id="get-a-share-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|ID of the share|
|OCS-APIRequest|header|boolean|true|Required to be true for the API request to pass|
|body|body|object|false|none|
|» secret|body|string \| null|false|Secret of the share|
|» arguments|body|object|false|Arguments for accessing the share|
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
      "id": "string",
      "owner": {
        "user_id": "string",
        "instance": "string",
        "display_name": "string",
        "icon": {
          "svg": "string"
        }
      },
      "last_updated": "string",
      "state": "active",
      "user_status": {},
      "sources": [
        {
          "class": "string",
          "value": "string",
          "display_name": "string",
          "icon": {
            "svg": "string"
          }
        }
      ],
      "recipients": [
        {
          "class": "string",
          "value": "string",
          "instance": "string",
          "display_name": "string",
          "icon": {
            "svg": "string"
          },
          "secret": {
            "updatable": true,
            "value": "string",
            "url": "string"
          },
          "initiator": {
            "user_id": "string",
            "instance": "string",
            "display_name": "string",
            "icon": {
              "svg": "string"
            }
          },
          "permissions": [
            {
              "class": "string",
              "source_class": "string",
              "display_name": "string",
              "hint": "string",
              "priority": 1,
              "presets": [
                "string"
              ],
              "enabled": true
            }
          ]
        }
      ],
      "properties": [
        {
          "class": "string",
          "display_name": "string",
          "hint": "string",
          "priority": 1,
          "required": true,
          "advanced": true,
          "value": "string",
          "type": "date",
          "min_date": "string",
          "max_date": "string"
        }
      ],
      "permissions": [
        {
          "class": "string",
          "source_class": "string",
          "display_name": "string",
          "hint": "string",
          "priority": 1,
          "presets": [
            "string"
          ],
          "enabled": true
        }
      ],
      "permission_preset": "string"
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
    "data": "string"
  }
}
```

<h3 id="get-a-share-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Share returned|Inline|
|404|Not Found|Share not found|Inline|

<h3 id="get-a-share-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|[Share](#schemashare)|true|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|string|true|none|none|

<aside class="warning">
Authentication is optional for this operation. To authenticate, use one of the following methods:
bearer_auth, basic_auth
</aside>

## Delete a share.

<a id="opIdapi_v1-delete-share"></a>

> Code samples

```bash
curl https://cloud.example.com/ocs/v2.php/apps/sharing/api/v1/share/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'OCS-APIRequest: true'
```

`DELETE /ocs/v2.php/apps/sharing/api/v1/share/{id}`

<h3 id="delete-a-share-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|ID of the share|
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
    "data": "string"
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
    "data": "string"
  }
}
```

<h3 id="delete-a-share-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Share deleted|None|
|401|Unauthorized|Current user is not logged in|Inline|
|403|Forbidden|Deleting the share is not allowed|Inline|
|404|Not Found|Share not found|Inline|

<h3 id="delete-a-share-responseschema">Response Schema</h3>

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
|» data|string|true|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer_auth, basic_auth
</aside>

## Get multiple shares.

<a id="opIdapi_v1-get-shares"></a>

> Code samples

```bash
curl https://cloud.example.com/ocs/v2.php/apps/sharing/api/v1/shares \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'OCS-APIRequest: true'
```

`GET /ocs/v2.php/apps/sharing/api/v1/shares`

<h3 id="get-multiple-shares-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|filterSourceTypeClass|query|string \| null|false|Source type class to filter by.|
|filterSourceTypeValue|query|string \| null|false|Source type value to filter by.|
|filterState|query|object \| null|false|State to filter by.|
|filterUserStatus|query|object \| null|false|User status to filter by.|
|lastShareID|query|string \| null|false|The ID of the previous share. This is used as an offset and only shares with higher IDs are returned.|
|limit|query|integer(int64)|false|The number of shares to return.|
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
        "owner": {
          "user_id": "string",
          "instance": "string",
          "display_name": "string",
          "icon": {
            "svg": "string"
          }
        },
        "last_updated": "string",
        "state": "active",
        "user_status": {},
        "sources": [
          {
            "class": "string",
            "value": "string",
            "display_name": "string",
            "icon": {
              "svg": "string"
            }
          }
        ],
        "recipients": [
          {
            "class": "string",
            "value": "string",
            "instance": "string",
            "display_name": "string",
            "icon": {
              "svg": "string"
            },
            "secret": {
              "updatable": true,
              "value": "string",
              "url": "string"
            },
            "initiator": {
              "user_id": "string",
              "instance": "string",
              "display_name": "string",
              "icon": {
                "svg": "string"
              }
            },
            "permissions": [
              {
                "class": "string",
                "source_class": "string",
                "display_name": "string",
                "hint": "string",
                "priority": 1,
                "presets": [
                  "string"
                ],
                "enabled": true
              }
            ]
          }
        ],
        "properties": [
          {
            "class": "string",
            "display_name": "string",
            "hint": "string",
            "priority": 1,
            "required": true,
            "advanced": true,
            "value": "string",
            "type": "date",
            "min_date": "string",
            "max_date": "string"
          }
        ],
        "permissions": [
          {
            "class": "string",
            "source_class": "string",
            "display_name": "string",
            "hint": "string",
            "priority": 1,
            "presets": [
              "string"
            ],
            "enabled": true
          }
        ],
        "permission_preset": "string"
      }
    ]
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

<h3 id="get-multiple-shares-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Shares returned|Inline|
|400|Bad Request|Invalid parameters|Inline|
|401|Unauthorized|Current user is not logged in|Inline|

<h3 id="get-multiple-shares-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|[[Share](#schemashare)]|true|none|none|

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

# Schemas

<h2 id="tocS_Capabilities">Capabilities</h2>
<!-- backwards compatibility -->
<a id="schemacapabilities"></a>
<a id="schema_Capabilities"></a>
<a id="tocScapabilities"></a>
<a id="tocscapabilities"></a>

```json
{
  "sharing": {
    "api_versions": [
      "v1"
    ],
    "source_types": [
      {
        "class": "string"
      }
    ],
    "permission_presets": [
      {
        "class": "string",
        "display_name": "string",
        "hint": "string"
      }
    ]
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|sharing|object|false|none|none|

<h2 id="tocS_Icon">Icon</h2>
<!-- backwards compatibility -->
<a id="schemaicon"></a>
<a id="schema_Icon"></a>
<a id="tocSicon"></a>
<a id="tocsicon"></a>

```json
{
  "svg": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anyOf*|[IconSVG](#schemaiconsvg)|false|none|none|
|*anyOf*|[IconURL](#schemaiconurl)|false|none|none|

<h2 id="tocS_IconSVG">IconSVG</h2>
<!-- backwards compatibility -->
<a id="schemaiconsvg"></a>
<a id="schema_IconSVG"></a>
<a id="tocSiconsvg"></a>
<a id="tocsiconsvg"></a>

```json
{
  "svg": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|svg|string|true|none|An SVG using the currentColor value for dynamic theming.|

<h2 id="tocS_IconURL">IconURL</h2>
<!-- backwards compatibility -->
<a id="schemaiconurl"></a>
<a id="schema_IconURL"></a>
<a id="tocSiconurl"></a>
<a id="tocsiconurl"></a>

```json
{
  "light": "string",
  "dark": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|light|string|true|none|An absolute URL to an image suitable for light theme.|
|dark|string|true|none|An absolute URL to an image suitable for dark theme.|

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

<h2 id="tocS_Permission">Permission</h2>
<!-- backwards compatibility -->
<a id="schemapermission"></a>
<a id="schema_Permission"></a>
<a id="tocSpermission"></a>
<a id="tocspermission"></a>

```json
{
  "class": "string",
  "source_class": "string",
  "display_name": "string",
  "hint": "string",
  "priority": 1,
  "presets": [
    "string"
  ],
  "enabled": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|class|string|true|none|none|
|source_class|string \| null|true|none|none|
|display_name|string|true|none|none|
|hint|string \| null|true|none|none|
|priority|integer(int64)|true|none|none|
|presets|[string]|true|none|none|
|enabled|boolean|true|none|none|

<h2 id="tocS_PermissionPreset">PermissionPreset</h2>
<!-- backwards compatibility -->
<a id="schemapermissionpreset"></a>
<a id="schema_PermissionPreset"></a>
<a id="tocSpermissionpreset"></a>
<a id="tocspermissionpreset"></a>

```json
{
  "class": "string",
  "display_name": "string",
  "hint": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|class|string|true|none|none|
|display_name|string|true|none|none|
|hint|string \| null|true|none|none|

<h2 id="tocS_Property">Property</h2>
<!-- backwards compatibility -->
<a id="schemaproperty"></a>
<a id="schema_Property"></a>
<a id="tocSproperty"></a>
<a id="tocsproperty"></a>

```json
{
  "class": "string",
  "display_name": "string",
  "hint": "string",
  "priority": 1,
  "required": true,
  "advanced": true,
  "value": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|class|string|true|none|none|
|display_name|string|true|none|none|
|hint|string \| null|true|none|none|
|priority|integer(int64)|true|none|none|
|required|boolean|true|none|none|
|advanced|boolean|true|none|none|
|value|string \| null|true|none|none|

<h2 id="tocS_PropertyBoolean">PropertyBoolean</h2>
<!-- backwards compatibility -->
<a id="schemapropertyboolean"></a>
<a id="schema_PropertyBoolean"></a>
<a id="tocSpropertyboolean"></a>
<a id="tocspropertyboolean"></a>

```json
{
  "class": "string",
  "display_name": "string",
  "hint": "string",
  "priority": 1,
  "required": true,
  "advanced": true,
  "value": "string",
  "type": "boolean"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|class|string|true|none|none|
|display_name|string|true|none|none|
|hint|string \| null|true|none|none|
|priority|integer(int64)|true|none|none|
|required|boolean|true|none|none|
|advanced|boolean|true|none|none|
|value|string \| null|true|none|none|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|boolean|

<h2 id="tocS_PropertyDate">PropertyDate</h2>
<!-- backwards compatibility -->
<a id="schemapropertydate"></a>
<a id="schema_PropertyDate"></a>
<a id="tocSpropertydate"></a>
<a id="tocspropertydate"></a>

```json
{
  "class": "string",
  "display_name": "string",
  "hint": "string",
  "priority": 1,
  "required": true,
  "advanced": true,
  "value": "string",
  "type": "date",
  "min_date": "string",
  "max_date": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|class|string|true|none|none|
|display_name|string|true|none|none|
|hint|string \| null|true|none|none|
|priority|integer(int64)|true|none|none|
|required|boolean|true|none|none|
|advanced|boolean|true|none|none|
|value|string \| null|true|none|none|
|type|string|true|none|none|
|min_date|string \| null|true|none|ISO 8601|
|max_date|string \| null|true|none|ISO 8601|

#### Enumerated Values

|Property|Value|
|---|---|
|type|date|

<h2 id="tocS_PropertyEnum">PropertyEnum</h2>
<!-- backwards compatibility -->
<a id="schemapropertyenum"></a>
<a id="schema_PropertyEnum"></a>
<a id="tocSpropertyenum"></a>
<a id="tocspropertyenum"></a>

```json
{
  "class": "string",
  "display_name": "string",
  "hint": "string",
  "priority": 1,
  "required": true,
  "advanced": true,
  "value": "string",
  "type": "enum",
  "valid_values": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|class|string|true|none|none|
|display_name|string|true|none|none|
|hint|string \| null|true|none|none|
|priority|integer(int64)|true|none|none|
|required|boolean|true|none|none|
|advanced|boolean|true|none|none|
|value|string \| null|true|none|none|
|type|string|true|none|none|
|valid_values|[string]|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|enum|

<h2 id="tocS_PropertyPassword">PropertyPassword</h2>
<!-- backwards compatibility -->
<a id="schemapropertypassword"></a>
<a id="schema_PropertyPassword"></a>
<a id="tocSpropertypassword"></a>
<a id="tocspropertypassword"></a>

```json
{
  "class": "string",
  "display_name": "string",
  "hint": "string",
  "priority": 1,
  "required": true,
  "advanced": true,
  "value": "string",
  "type": "password"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|class|string|true|none|none|
|display_name|string|true|none|none|
|hint|string \| null|true|none|none|
|priority|integer(int64)|true|none|none|
|required|boolean|true|none|none|
|advanced|boolean|true|none|none|
|value|string \| null|true|none|none|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|password|

<h2 id="tocS_PropertyString">PropertyString</h2>
<!-- backwards compatibility -->
<a id="schemapropertystring"></a>
<a id="schema_PropertyString"></a>
<a id="tocSpropertystring"></a>
<a id="tocspropertystring"></a>

```json
{
  "class": "string",
  "display_name": "string",
  "hint": "string",
  "priority": 1,
  "required": true,
  "advanced": true,
  "value": "string",
  "type": "string",
  "min_length": 1,
  "max_length": 1
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|class|string|true|none|none|
|display_name|string|true|none|none|
|hint|string \| null|true|none|none|
|priority|integer(int64)|true|none|none|
|required|boolean|true|none|none|
|advanced|boolean|true|none|none|
|value|string \| null|true|none|none|
|type|string|true|none|none|
|min_length|integer(int64) \| null|true|none|none|
|max_length|integer(int64) \| null|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|string|

<h2 id="tocS_Recipient">Recipient</h2>
<!-- backwards compatibility -->
<a id="schemarecipient"></a>
<a id="schema_Recipient"></a>
<a id="tocSrecipient"></a>
<a id="tocsrecipient"></a>

```json
{
  "class": "string",
  "value": "string",
  "instance": "string",
  "display_name": "string",
  "icon": {
    "svg": "string"
  },
  "secret": {
    "updatable": true,
    "value": "string",
    "url": "string"
  },
  "initiator": {
    "user_id": "string",
    "instance": "string",
    "display_name": "string",
    "icon": {
      "svg": "string"
    }
  },
  "permissions": [
    {
      "class": "string",
      "source_class": "string",
      "display_name": "string",
      "hint": "string",
      "priority": 1,
      "presets": [
        "string"
      ],
      "enabled": true
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|class|string|true|none|none|
|value|string|true|none|none|
|instance|string \| null|true|none|none|
|display_name|string|true|none|none|
|icon|object \| null|true|none|none|
|secret|object|true|none|none|
|initiator|object \| null|true|none|none|
|permissions|[[Permission](#schemapermission)]|true|none|none|

<h2 id="tocS_Share">Share</h2>
<!-- backwards compatibility -->
<a id="schemashare"></a>
<a id="schema_Share"></a>
<a id="tocSshare"></a>
<a id="tocsshare"></a>

```json
{
  "id": "string",
  "owner": {
    "user_id": "string",
    "instance": "string",
    "display_name": "string",
    "icon": {
      "svg": "string"
    }
  },
  "last_updated": "string",
  "state": "active",
  "user_status": {},
  "sources": [
    {
      "class": "string",
      "value": "string",
      "display_name": "string",
      "icon": {
        "svg": "string"
      }
    }
  ],
  "recipients": [
    {
      "class": "string",
      "value": "string",
      "instance": "string",
      "display_name": "string",
      "icon": {
        "svg": "string"
      },
      "secret": {
        "updatable": true,
        "value": "string",
        "url": "string"
      },
      "initiator": {
        "user_id": "string",
        "instance": "string",
        "display_name": "string",
        "icon": {
          "svg": "string"
        }
      },
      "permissions": [
        {
          "class": "string",
          "source_class": "string",
          "display_name": "string",
          "hint": "string",
          "priority": 1,
          "presets": [
            "string"
          ],
          "enabled": true
        }
      ]
    }
  ],
  "properties": [
    {
      "class": "string",
      "display_name": "string",
      "hint": "string",
      "priority": 1,
      "required": true,
      "advanced": true,
      "value": "string",
      "type": "date",
      "min_date": "string",
      "max_date": "string"
    }
  ],
  "permissions": [
    {
      "class": "string",
      "source_class": "string",
      "display_name": "string",
      "hint": "string",
      "priority": 1,
      "presets": [
        "string"
      ],
      "enabled": true
    }
  ],
  "permission_preset": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|
|owner|[User](#schemauser)|true|none|none|
|last_updated|string|true|none|Unix time in milliseconds|
|state|[State](#schemastate)|true|none|none|
|user_status|object \| null|true|none|none|
|sources|[[Source](#schemasource)]|true|none|none|
|recipients|[[Recipient](#schemarecipient)]|true|none|none|
|properties|[[PropertyDate](#schemapropertydate) \| [PropertyEnum](#schemapropertyenum) \| [PropertyBoolean](#schemapropertyboolean) \| [PropertyPassword](#schemapropertypassword) \| [PropertyString](#schemapropertystring)]|true|none|none|
|permissions|[[Permission](#schemapermission)]|true|none|none|
|permission_preset|string \| null|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|state|active|
|state|draft|
|state|deleted|

<h2 id="tocS_Source">Source</h2>
<!-- backwards compatibility -->
<a id="schemasource"></a>
<a id="schema_Source"></a>
<a id="tocSsource"></a>
<a id="tocssource"></a>

```json
{
  "class": "string",
  "value": "string",
  "display_name": "string",
  "icon": {
    "svg": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|class|string|true|none|none|
|value|string|true|none|none|
|display_name|string|true|none|none|
|icon|object \| null|true|none|none|

<h2 id="tocS_SourceType">SourceType</h2>
<!-- backwards compatibility -->
<a id="schemasourcetype"></a>
<a id="schema_SourceType"></a>
<a id="tocSsourcetype"></a>
<a id="tocssourcetype"></a>

```json
{
  "class": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|class|string|true|none|none|

<h2 id="tocS_State">State</h2>
<!-- backwards compatibility -->
<a id="schemastate"></a>
<a id="schema_State"></a>
<a id="tocSstate"></a>
<a id="tocsstate"></a>

```json
"active"
```

<h2 id="tocS_User">User</h2>
<!-- backwards compatibility -->
<a id="schemauser"></a>
<a id="schema_User"></a>
<a id="tocSuser"></a>
<a id="tocsuser"></a>

```json
{
  "user_id": "string",
  "instance": "string",
  "display_name": "string",
  "icon": {
    "svg": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|user_id|string|true|none|none|
|instance|string \| null|true|none|none|
|display_name|string|true|none|none|
|icon|[Icon](#schemaicon)|true|none|none|

<h2 id="tocS_UserStatus">UserStatus</h2>
<!-- backwards compatibility -->
<a id="schemauserstatus"></a>
<a id="schema_UserStatus"></a>
<a id="tocSuserstatus"></a>
<a id="tocsuserstatus"></a>

```json
"pending"
```
