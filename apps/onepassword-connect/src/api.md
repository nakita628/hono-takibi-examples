<h1 id="1password-connect">1Password Connect v1.7.1</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

REST API interface for 1Password Connect.

Base URLs:

* <a href="http://localhost:8080/v1">http://localhost:8080/v1</a>

Email: <a href="mailto:support@1password.com">1Password Integrations</a> 
Web: <a href="https://support.1password.com/">1Password Integrations</a> 

# Authentication

- HTTP Authentication, scheme: bearer

<h1 id="1password-connect-items">Items</h1>

Access and manage items inside 1Password Vaults

## Get all items for inside a Vault

<a id="opIdGetVaultItems"></a>

> Code samples

```bash
curl http://localhost:8080/vaults/string/items \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /vaults/{vaultUuid}/items`

<h3 id="get-all-items-for-inside-a-vault-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|vaultUuid|path|string|true|The UUID of the Vault to fetch Items from|
|filter|query|string|false|Filter the Item collection based on Item name using SCIM eq filter|

> Example responses

> 200 Response

```json
[
  {
    "id": "string",
    "title": "string",
    "vault": {
      "id": "string"
    },
    "category": "LOGIN",
    "urls": [
      {
        "primary": true,
        "href": "https://example.com"
      },
      {
        "href": "https://example.org"
      }
    ],
    "favorite": false,
    "tags": [
      "string"
    ],
    "version": 0,
    "state": "ARCHIVED",
    "createdAt": "1970-01-01T00:00:00Z",
    "updatedAt": "1970-01-01T00:00:00Z",
    "lastEditedBy": "string"
  }
]
```

> 401 Response

```json
{
  "status": 401,
  "message": "Invalid token signature"
}
```

> 404 Response

```json
{
  "status": 404,
  "message": "vault {vaultUuid} not found"
}
```

<h3 id="get-all-items-for-inside-a-vault-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|Invalid or missing token|[ErrorResponse](#schemaerrorresponse)|
|404|Not Found|Vault not found|[ErrorResponse](#schemaerrorresponse)|

<h3 id="get-all-items-for-inside-a-vault-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Item](#schemaitem)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ConnectToken
</aside>

## Create a new Item

<a id="opIdCreateVaultItem"></a>

> Code samples

```bash
curl http://localhost:8080/vaults/string/items \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "id": "string",
    "title": "string",
    "vault": {
      "id": "string"
    },
    "category": "LOGIN",
    "urls": [
      {
        "primary": true,
        "href": "https://example.com"
      },
      {
        "href": "https://example.org"
      }
    ],
    "favorite": false,
    "tags": [
      "string"
    ],
    "version": 0,
    "sections": [
      {
        "id": "string",
        "label": "string"
      }
    ],
    "fields": [
      {
        "id": "string",
        "section": {
          "id": "string"
        },
        "type": "STRING",
        "purpose": "",
        "label": "string",
        "value": "string",
        "generate": false,
        "recipe": {
          "length": 32,
          "characterSets": [
            "LETTERS"
          ],
          "excludeCharacters": "abc1"
        }
      }
    ],
    "files": [
      {
        "id": "6r65pjq33banznomn7q22sj44e",
        "name": "foo.txt",
        "size": 35,
        "content_path": "v1/vaults/ionaiwtdvgclrixbt6ztpqcxnq/items/p7eflcy7f5mk7vg6zrzf5rjjyu/files/6r65pjq33banznomn7q22sj44e/content",
        "content": "VGhlIGZ1dHVyZSBiZWxvbmdzIHRvIHRoZSBjdXJpb3VzLgo="
      }
    ]
  }'
```

`POST /vaults/{vaultUuid}/items`

> Body parameter

```json
{
  "id": "string",
  "title": "string",
  "vault": {
    "id": "string"
  },
  "category": "LOGIN",
  "urls": [
    {
      "primary": true,
      "href": "https://example.com"
    },
    {
      "href": "https://example.org"
    }
  ],
  "favorite": false,
  "tags": [
    "string"
  ],
  "version": 0,
  "sections": [
    {
      "id": "string",
      "label": "string"
    }
  ],
  "fields": [
    {
      "id": "string",
      "section": {
        "id": "string"
      },
      "type": "STRING",
      "purpose": "",
      "label": "string",
      "value": "string",
      "generate": false,
      "recipe": {
        "length": 32,
        "characterSets": [
          "LETTERS"
        ],
        "excludeCharacters": "abc1"
      }
    }
  ],
  "files": [
    {
      "id": "6r65pjq33banznomn7q22sj44e",
      "name": "foo.txt",
      "size": 35,
      "content_path": "v1/vaults/ionaiwtdvgclrixbt6ztpqcxnq/items/p7eflcy7f5mk7vg6zrzf5rjjyu/files/6r65pjq33banznomn7q22sj44e/content",
      "content": "VGhlIGZ1dHVyZSBiZWxvbmdzIHRvIHRoZSBjdXJpb3VzLgo="
    }
  ]
}
```

<h3 id="create-a-new-item-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|vaultUuid|path|string|true|The UUID of the Vault to create an Item in|
|body|body|[FullItem](#schemafullitem)|false|none|
|» id|body|string|false|none|
|» title|body|string|false|none|
|» vault|body|object|true|none|
|» » id|body|string|true|none|
|» category|body|string|true|none|
|» urls|body|[object]|false|none|
|» » label|body|string|false|none|
|» » primary|body|boolean|false|none|
|» » href|body|string(url)|true|none|
|» favorite|body|boolean|false|none|
|» tags|body|[string]|false|none|
|» version|body|integer|false|none|
|» sections|body|[object]|false|none|
|» » id|body|string|false|none|
|» » label|body|string|false|none|
|» fields|body|[[Field](#schemafield)]|false|none|
|» files|body|[[File](#schemafile)]|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» category|LOGIN|
|» category|PASSWORD|
|» category|API_CREDENTIAL|
|» category|SERVER|
|» category|DATABASE|
|» category|CREDIT_CARD|
|» category|MEMBERSHIP|
|» category|PASSPORT|
|» category|SOFTWARE_LICENSE|
|» category|OUTDOOR_LICENSE|
|» category|SECURE_NOTE|
|» category|WIRELESS_ROUTER|
|» category|BANK_ACCOUNT|
|» category|DRIVER_LICENSE|
|» category|IDENTITY|
|» category|REWARD_PROGRAM|
|» category|DOCUMENT|
|» category|EMAIL_ACCOUNT|
|» category|SOCIAL_SECURITY_NUMBER|
|» category|MEDICAL_RECORD|
|» category|SSH_KEY|
|» category|CUSTOM|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "title": "string",
  "vault": {
    "id": "string"
  },
  "category": "LOGIN",
  "urls": [
    {
      "primary": true,
      "href": "https://example.com"
    },
    {
      "href": "https://example.org"
    }
  ],
  "favorite": false,
  "tags": [
    "string"
  ],
  "version": 0,
  "state": "ARCHIVED",
  "createdAt": "1970-01-01T00:00:00Z",
  "updatedAt": "1970-01-01T00:00:00Z",
  "lastEditedBy": "string",
  "sections": [
    {
      "id": "string",
      "label": "string"
    }
  ],
  "fields": [
    {
      "id": "string",
      "section": {
        "id": "string"
      },
      "type": "STRING",
      "purpose": "",
      "label": "string",
      "value": "string",
      "generate": false,
      "recipe": {
        "length": 32,
        "characterSets": [
          "LETTERS"
        ],
        "excludeCharacters": "abc1"
      },
      "entropy": 0
    }
  ],
  "files": [
    {
      "id": "6r65pjq33banznomn7q22sj44e",
      "name": "foo.txt",
      "size": 35,
      "content_path": "v1/vaults/ionaiwtdvgclrixbt6ztpqcxnq/items/p7eflcy7f5mk7vg6zrzf5rjjyu/files/6r65pjq33banznomn7q22sj44e/content",
      "content": "VGhlIGZ1dHVyZSBiZWxvbmdzIHRvIHRoZSBjdXJpb3VzLgo="
    }
  ]
}
```

> 400 Response

```json
{
  "status": 400,
  "message": "Invalid item category"
}
```

> 401 Response

```json
{
  "status": 401,
  "message": "Invalid token signature"
}
```

> 403 Response

```json
{
  "status": 403,
  "message": "vault {vaultUuid} is not in scope"
}
```

> 404 Response

```json
{
  "status": 404,
  "message": "vault {vaultUuid} not found"
}
```

<h3 id="create-a-new-item-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[FullItem](#schemafullitem)|
|400|Bad Request|Unable to create item due to invalid input|[ErrorResponse](#schemaerrorresponse)|
|401|Unauthorized|Invalid or missing token|[ErrorResponse](#schemaerrorresponse)|
|403|Forbidden|Unauthorized access|[ErrorResponse](#schemaerrorresponse)|
|404|Not Found|Item not found|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ConnectToken
</aside>

## Get the details of an Item

<a id="opIdGetVaultItemById"></a>

> Code samples

```bash
curl http://localhost:8080/vaults/string/items/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /vaults/{vaultUuid}/items/{itemUuid}`

<h3 id="get-the-details-of-an-item-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|vaultUuid|path|string|true|The UUID of the Vault to fetch Item from|
|itemUuid|path|string|true|The UUID of the Item to fetch|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "title": "string",
  "vault": {
    "id": "string"
  },
  "category": "LOGIN",
  "urls": [
    {
      "primary": true,
      "href": "https://example.com"
    },
    {
      "href": "https://example.org"
    }
  ],
  "favorite": false,
  "tags": [
    "string"
  ],
  "version": 0,
  "state": "ARCHIVED",
  "createdAt": "1970-01-01T00:00:00Z",
  "updatedAt": "1970-01-01T00:00:00Z",
  "lastEditedBy": "string",
  "sections": [
    {
      "id": "string",
      "label": "string"
    }
  ],
  "fields": [
    {
      "id": "string",
      "section": {
        "id": "string"
      },
      "type": "STRING",
      "purpose": "",
      "label": "string",
      "value": "string",
      "generate": false,
      "recipe": {
        "length": 32,
        "characterSets": [
          "LETTERS"
        ],
        "excludeCharacters": "abc1"
      },
      "entropy": 0
    }
  ],
  "files": [
    {
      "id": "6r65pjq33banznomn7q22sj44e",
      "name": "foo.txt",
      "size": 35,
      "content_path": "v1/vaults/ionaiwtdvgclrixbt6ztpqcxnq/items/p7eflcy7f5mk7vg6zrzf5rjjyu/files/6r65pjq33banznomn7q22sj44e/content",
      "content": "VGhlIGZ1dHVyZSBiZWxvbmdzIHRvIHRoZSBjdXJpb3VzLgo="
    }
  ]
}
```

> 401 Response

```json
{
  "status": 401,
  "message": "Invalid token signature"
}
```

> 403 Response

```json
{
  "status": 403,
  "message": "vault {vaultUuid} is not in scope"
}
```

> 404 Response

```json
{
  "status": 404,
  "message": "item {itemUuid} not found"
}
```

<h3 id="get-the-details-of-an-item-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[FullItem](#schemafullitem)|
|401|Unauthorized|Invalid or missing token|[ErrorResponse](#schemaerrorresponse)|
|403|Forbidden|Unauthorized access|[ErrorResponse](#schemaerrorresponse)|
|404|Not Found|Item not found|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ConnectToken
</aside>

## Update an Item

<a id="opIdUpdateVaultItem"></a>

> Code samples

```bash
curl http://localhost:8080/vaults/string/items/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "id": "string",
    "title": "string",
    "vault": {
      "id": "string"
    },
    "category": "LOGIN",
    "urls": [
      {
        "primary": true,
        "href": "https://example.com"
      },
      {
        "href": "https://example.org"
      }
    ],
    "favorite": false,
    "tags": [
      "string"
    ],
    "version": 0,
    "sections": [
      {
        "id": "string",
        "label": "string"
      }
    ],
    "fields": [
      {
        "id": "string",
        "section": {
          "id": "string"
        },
        "type": "STRING",
        "purpose": "",
        "label": "string",
        "value": "string",
        "generate": false,
        "recipe": {
          "length": 32,
          "characterSets": [
            "LETTERS"
          ],
          "excludeCharacters": "abc1"
        }
      }
    ],
    "files": [
      {
        "id": "6r65pjq33banznomn7q22sj44e",
        "name": "foo.txt",
        "size": 35,
        "content_path": "v1/vaults/ionaiwtdvgclrixbt6ztpqcxnq/items/p7eflcy7f5mk7vg6zrzf5rjjyu/files/6r65pjq33banznomn7q22sj44e/content",
        "content": "VGhlIGZ1dHVyZSBiZWxvbmdzIHRvIHRoZSBjdXJpb3VzLgo="
      }
    ]
  }'
```

`PUT /vaults/{vaultUuid}/items/{itemUuid}`

> Body parameter

```json
{
  "id": "string",
  "title": "string",
  "vault": {
    "id": "string"
  },
  "category": "LOGIN",
  "urls": [
    {
      "primary": true,
      "href": "https://example.com"
    },
    {
      "href": "https://example.org"
    }
  ],
  "favorite": false,
  "tags": [
    "string"
  ],
  "version": 0,
  "sections": [
    {
      "id": "string",
      "label": "string"
    }
  ],
  "fields": [
    {
      "id": "string",
      "section": {
        "id": "string"
      },
      "type": "STRING",
      "purpose": "",
      "label": "string",
      "value": "string",
      "generate": false,
      "recipe": {
        "length": 32,
        "characterSets": [
          "LETTERS"
        ],
        "excludeCharacters": "abc1"
      }
    }
  ],
  "files": [
    {
      "id": "6r65pjq33banznomn7q22sj44e",
      "name": "foo.txt",
      "size": 35,
      "content_path": "v1/vaults/ionaiwtdvgclrixbt6ztpqcxnq/items/p7eflcy7f5mk7vg6zrzf5rjjyu/files/6r65pjq33banznomn7q22sj44e/content",
      "content": "VGhlIGZ1dHVyZSBiZWxvbmdzIHRvIHRoZSBjdXJpb3VzLgo="
    }
  ]
}
```

<h3 id="update-an-item-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|vaultUuid|path|string|true|The UUID of the Item's Vault|
|itemUuid|path|string|true|The UUID of the Item to update|
|body|body|[FullItem](#schemafullitem)|false|none|
|» id|body|string|false|none|
|» title|body|string|false|none|
|» vault|body|object|true|none|
|» » id|body|string|true|none|
|» category|body|string|true|none|
|» urls|body|[object]|false|none|
|» » label|body|string|false|none|
|» » primary|body|boolean|false|none|
|» » href|body|string(url)|true|none|
|» favorite|body|boolean|false|none|
|» tags|body|[string]|false|none|
|» version|body|integer|false|none|
|» sections|body|[object]|false|none|
|» » id|body|string|false|none|
|» » label|body|string|false|none|
|» fields|body|[[Field](#schemafield)]|false|none|
|» files|body|[[File](#schemafile)]|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» category|LOGIN|
|» category|PASSWORD|
|» category|API_CREDENTIAL|
|» category|SERVER|
|» category|DATABASE|
|» category|CREDIT_CARD|
|» category|MEMBERSHIP|
|» category|PASSPORT|
|» category|SOFTWARE_LICENSE|
|» category|OUTDOOR_LICENSE|
|» category|SECURE_NOTE|
|» category|WIRELESS_ROUTER|
|» category|BANK_ACCOUNT|
|» category|DRIVER_LICENSE|
|» category|IDENTITY|
|» category|REWARD_PROGRAM|
|» category|DOCUMENT|
|» category|EMAIL_ACCOUNT|
|» category|SOCIAL_SECURITY_NUMBER|
|» category|MEDICAL_RECORD|
|» category|SSH_KEY|
|» category|CUSTOM|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "title": "string",
  "vault": {
    "id": "string"
  },
  "category": "LOGIN",
  "urls": [
    {
      "primary": true,
      "href": "https://example.com"
    },
    {
      "href": "https://example.org"
    }
  ],
  "favorite": false,
  "tags": [
    "string"
  ],
  "version": 0,
  "state": "ARCHIVED",
  "createdAt": "1970-01-01T00:00:00Z",
  "updatedAt": "1970-01-01T00:00:00Z",
  "lastEditedBy": "string",
  "sections": [
    {
      "id": "string",
      "label": "string"
    }
  ],
  "fields": [
    {
      "id": "string",
      "section": {
        "id": "string"
      },
      "type": "STRING",
      "purpose": "",
      "label": "string",
      "value": "string",
      "generate": false,
      "recipe": {
        "length": 32,
        "characterSets": [
          "LETTERS"
        ],
        "excludeCharacters": "abc1"
      },
      "entropy": 0
    }
  ],
  "files": [
    {
      "id": "6r65pjq33banznomn7q22sj44e",
      "name": "foo.txt",
      "size": 35,
      "content_path": "v1/vaults/ionaiwtdvgclrixbt6ztpqcxnq/items/p7eflcy7f5mk7vg6zrzf5rjjyu/files/6r65pjq33banznomn7q22sj44e/content",
      "content": "VGhlIGZ1dHVyZSBiZWxvbmdzIHRvIHRoZSBjdXJpb3VzLgo="
    }
  ]
}
```

> 400 Response

```json
{
  "status": 400,
  "message": "The item doesn't have a {example field name} field."
}
```

> 401 Response

```json
{
  "status": 401,
  "message": "Invalid token signature"
}
```

> 403 Response

```json
{
  "status": 403,
  "message": "vault {vaultUuid} is not in scope"
}
```

> 404 Response

```json
{
  "status": 404,
  "message": "item {itemUuid} not found"
}
```

<h3 id="update-an-item-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[FullItem](#schemafullitem)|
|400|Bad Request|Unable to create item due to invalid input|[ErrorResponse](#schemaerrorresponse)|
|401|Unauthorized|Invalid or missing token|[ErrorResponse](#schemaerrorresponse)|
|403|Forbidden|Unauthorized access|[ErrorResponse](#schemaerrorresponse)|
|404|Not Found|Item not found|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ConnectToken
</aside>

## Delete an Item

<a id="opIdDeleteVaultItem"></a>

> Code samples

```bash
curl http://localhost:8080/vaults/string/items/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /vaults/{vaultUuid}/items/{itemUuid}`

<h3 id="delete-an-item-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|vaultUuid|path|string|true|The UUID of the Vault the item is in|
|itemUuid|path|string|true|The UUID of the Item to update|

> Example responses

> 401 Response

```json
{
  "status": 401,
  "message": "Invalid token signature"
}
```

> 403 Response

```json
{
  "status": 403,
  "message": "vault {vaultUuid} is not in scope"
}
```

> 404 Response

```json
{
  "status": 404,
  "message": "vault {vaultUuid} not found"
}
```

<h3 id="delete-an-item-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Successfully deleted an item|None|
|401|Unauthorized|Invalid or missing token|[ErrorResponse](#schemaerrorresponse)|
|403|Forbidden|Unauthorized access|[ErrorResponse](#schemaerrorresponse)|
|404|Not Found|Item not found|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ConnectToken
</aside>

## Update a subset of Item attributes

<a id="opIdPatchVaultItem"></a>

> Code samples

```bash
curl http://localhost:8080/vaults/string/items/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '[
    {
      "op": "replace",
      "path": "/",
      "value": {
        "title": "New Title",
        "favorite": true,
        "tags": [
          "tag1",
          "tag2"
        ],
        "...": "Any attr from FullItem schema"
      }
    }
  ]'
```

`PATCH /vaults/{vaultUuid}/items/{itemUuid}`

Applies a modified [RFC6902 JSON Patch](https://tools.ietf.org/html/rfc6902) document to an Item or ItemField. This endpoint only supports `add`, `remove` and `replace` operations.

When modifying a specific ItemField, the ItemField's ID in the `path` attribute of the operation object: `/fields/{fieldId}`


> Body parameter

```json
[
  {
    "op": "replace",
    "path": "/",
    "value": {
      "title": "New Title",
      "favorite": true,
      "tags": [
        "tag1",
        "tag2"
      ],
      "...": "Any attr from FullItem schema"
    }
  }
]
```

<h3 id="update-a-subset-of-item-attributes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|vaultUuid|path|string|true|The UUID of the Vault the item is in|
|itemUuid|path|string|true|The UUID of the Item to update|
|body|body|[Patch](#schemapatch)|false|none|
|» op|body|string|true|none|
|» path|body|string|true|An RFC6901 JSON Pointer pointing to the Item document, an Item Attribute, and Item Field by Field ID, or an Item Field Attribute|
|» value|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» op|add|
|» op|remove|
|» op|replace|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "title": "string",
  "vault": {
    "id": "string"
  },
  "category": "LOGIN",
  "urls": [
    {
      "primary": true,
      "href": "https://example.com"
    },
    {
      "href": "https://example.org"
    }
  ],
  "favorite": false,
  "tags": [
    "string"
  ],
  "version": 0,
  "state": "ARCHIVED",
  "createdAt": "1970-01-01T00:00:00Z",
  "updatedAt": "1970-01-01T00:00:00Z",
  "lastEditedBy": "string",
  "sections": [
    {
      "id": "string",
      "label": "string"
    }
  ],
  "fields": [
    {
      "id": "string",
      "section": {
        "id": "string"
      },
      "type": "STRING",
      "purpose": "",
      "label": "string",
      "value": "string",
      "generate": false,
      "recipe": {
        "length": 32,
        "characterSets": [
          "LETTERS"
        ],
        "excludeCharacters": "abc1"
      },
      "entropy": 0
    }
  ],
  "files": [
    {
      "id": "6r65pjq33banznomn7q22sj44e",
      "name": "foo.txt",
      "size": 35,
      "content_path": "v1/vaults/ionaiwtdvgclrixbt6ztpqcxnq/items/p7eflcy7f5mk7vg6zrzf5rjjyu/files/6r65pjq33banznomn7q22sj44e/content",
      "content": "VGhlIGZ1dHVyZSBiZWxvbmdzIHRvIHRoZSBjdXJpb3VzLgo="
    }
  ]
}
```

> 401 Response

```json
{
  "status": 401,
  "message": "Invalid token signature"
}
```

> 403 Response

```json
{
  "status": 403,
  "message": "vault {vaultUuid} is not in scope"
}
```

> 404 Response

```json
{
  "status": 404,
  "message": "item {itemUuid} not found"
}
```

<h3 id="update-a-subset-of-item-attributes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK - Item updated. If no Patch operations were provided, Item is unmodified.|[FullItem](#schemafullitem)|
|401|Unauthorized|Invalid or missing token|[ErrorResponse](#schemaerrorresponse)|
|403|Forbidden|Unauthorized access|[ErrorResponse](#schemaerrorresponse)|
|404|Not Found|Item not found|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ConnectToken
</aside>

<h1 id="1password-connect-vaults">Vaults</h1>

Access 1Password Vaults

## Get all Vaults

<a id="opIdGetVaults"></a>

> Code samples

```bash
curl http://localhost:8080/vaults \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /vaults`

<h3 id="get-all-vaults-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|filter|query|string|false|Filter the Vault collection based on Vault name using SCIM eq filter|

> Example responses

> 200 Response

```json
[
  {
    "id": "string",
    "name": "string",
    "description": "string",
    "attributeVersion": 0,
    "contentVersion": 0,
    "items": 0,
    "type": "USER_CREATED",
    "createdAt": "1970-01-01T00:00:00Z",
    "updatedAt": "1970-01-01T00:00:00Z"
  }
]
```

> 401 Response

```json
{
  "status": 401,
  "message": "Invalid token signature"
}
```

<h3 id="get-all-vaults-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|Invalid or missing token|[ErrorResponse](#schemaerrorresponse)|

<h3 id="get-all-vaults-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Vault](#schemavault)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ConnectToken
</aside>

## Get Vault details and metadata

<a id="opIdGetVaultById"></a>

> Code samples

```bash
curl http://localhost:8080/vaults/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /vaults/{vaultUuid}`

<h3 id="get-vault-details-and-metadata-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|vaultUuid|path|string|true|The UUID of the Vault to fetch Items from|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "name": "string",
  "description": "string",
  "attributeVersion": 0,
  "contentVersion": 0,
  "items": 0,
  "type": "USER_CREATED",
  "createdAt": "1970-01-01T00:00:00Z",
  "updatedAt": "1970-01-01T00:00:00Z"
}
```

> 401 Response

```json
{
  "status": 401,
  "message": "Invalid token signature"
}
```

> 403 Response

```json
{
  "status": 403,
  "message": "vault {vaultUuid} is not in scope"
}
```

> 404 Response

```json
{
  "status": 404,
  "message": "vault {itemUuid} not found"
}
```

<h3 id="get-vault-details-and-metadata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[Vault](#schemavault)|
|401|Unauthorized|Invalid or missing token|[ErrorResponse](#schemaerrorresponse)|
|403|Forbidden|Unauthorized access|[ErrorResponse](#schemaerrorresponse)|
|404|Not Found|Vault not found|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ConnectToken
</aside>

<h1 id="1password-connect-activity">Activity</h1>

Access API Request Activity

## Retrieve a list of API Requests that have been made.

<a id="opIdGetApiActivity"></a>

> Code samples

```bash
curl http://localhost:8080/activity \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /activity`

<h3 id="retrieve-a-list-of-api-requests-that-have-been-made-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer|false|How many API Events should be retrieved in a single request.|
|offset|query|integer|false|How far into the collection of API Events should the response start|

> Example responses

> 200 Response

```json
[
  {
    "requestId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "timestamp": "1970-01-01T00:00:00Z",
    "action": "READ",
    "result": "SUCCESS",
    "actor": {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "account": "string",
      "jti": "string",
      "userAgent": "string",
      "requestIp": "string"
    },
    "resource": {
      "type": "ITEM",
      "vault": {
        "id": "string"
      },
      "item": {
        "id": "string"
      },
      "itemVersion": 0
    }
  }
]
```

> 401 Response

```json
{
  "status": 401,
  "message": "Invalid token signature"
}
```

<h3 id="retrieve-a-list-of-api-requests-that-have-been-made-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|Invalid or missing token|[ErrorResponse](#schemaerrorresponse)|

<h3 id="retrieve-a-list-of-api-requests-that-have-been-made-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[APIRequest](#schemaapirequest)]|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Content-Range|string||An decription of what part of the collection has been returned as well as the total size.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ConnectToken
</aside>

<h1 id="1password-connect-files">Files</h1>

## Get all the files inside an Item

<a id="opIdGetItemFiles"></a>

> Code samples

```bash
curl http://localhost:8080/vaults/497f6eca-6276-4993-bfeb-53cbbbba6f08/items/497f6eca-6276-4993-bfeb-53cbbbba6f08/files \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /vaults/{vaultUuid}/items/{itemUuid}/files`

<h3 id="get-all-the-files-inside-an-item-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|vaultUuid|path|string(uuid)|true|The UUID of the Vault to fetch Items from|
|itemUuid|path|string(uuid)|true|The UUID of the Item to fetch files from|
|inline_files|query|boolean|false|Tells server to return the base64-encoded file contents in the response.|

> Example responses

> 200 Response

```json
[
  {
    "id": "6r65pjq33banznomn7q22sj44e",
    "name": "foo.txt",
    "size": 35,
    "content_path": "v1/vaults/ionaiwtdvgclrixbt6ztpqcxnq/items/p7eflcy7f5mk7vg6zrzf5rjjyu/files/6r65pjq33banznomn7q22sj44e/content",
    "content": "VGhlIGZ1dHVyZSBiZWxvbmdzIHRvIHRoZSBjdXJpb3VzLgo="
  }
]
```

> 401 Response

```json
{
  "status": 401,
  "message": "Invalid token signature"
}
```

> 404 Response

```json
{
  "status": 404,
  "message": "item {itemUuid} not found"
}
```

> 413 Response

```json
{
  "status": 413,
  "message": "File is too large to inline in request. Use the /v1/vaults/{vaultUUID}/items/{itemUUID}/files/{fileUUID}/content endpoint instead."
}
```

<h3 id="get-all-the-files-inside-an-item-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|Invalid or missing token|[ErrorResponse](#schemaerrorresponse)|
|404|Not Found|Item not found|[ErrorResponse](#schemaerrorresponse)|
|413|Payload Too Large|File content too large to display|[ErrorResponse](#schemaerrorresponse)|

<h3 id="get-all-the-files-inside-an-item-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[File](#schemafile)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ConnectToken
</aside>

## Get the details of a File

<a id="opIdGetDetailsOfFileById"></a>

> Code samples

```bash
curl http://localhost:8080/vaults/497f6eca-6276-4993-bfeb-53cbbbba6f08/items/497f6eca-6276-4993-bfeb-53cbbbba6f08/files/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /vaults/{vaultUuid}/items/{itemUuid}/files/{fileUuid}`

<h3 id="get-the-details-of-a-file-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|vaultUuid|path|string(uuid)|true|The UUID of the Vault to fetch Item from|
|itemUuid|path|string(uuid)|true|The UUID of the Item to fetch File from|
|fileUuid|path|string(uuid)|true|The UUID of the File to fetch|
|inline_files|query|boolean|false|Tells server to return the base64-encoded file contents in the response.|

> Example responses

> 200 Response

```json
{
  "id": "6r65pjq33banznomn7q22sj44e",
  "name": "foo.txt",
  "size": 35,
  "content_path": "v1/vaults/ionaiwtdvgclrixbt6ztpqcxnq/items/p7eflcy7f5mk7vg6zrzf5rjjyu/files/6r65pjq33banznomn7q22sj44e/content",
  "content": "VGhlIGZ1dHVyZSBiZWxvbmdzIHRvIHRoZSBjdXJpb3VzLgo="
}
```

> 401 Response

```json
{
  "status": 401,
  "message": "Invalid token signature"
}
```

> 403 Response

```json
{
  "status": 403,
  "message": "vault {vaultUuid} is not in scope"
}
```

> 404 Response

```json
{
  "status": 404,
  "message": "file {fileUuid} not found"
}
```

> 413 Response

```json
{
  "status": 413,
  "message": "File is too large to inline in request. Use the /v1/vaults/{vaultUUID}/items/{itemUUID}/files/{fileUUID}/content endpoint instead."
}
```

<h3 id="get-the-details-of-a-file-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[File](#schemafile)|
|401|Unauthorized|Invalid or missing token|[ErrorResponse](#schemaerrorresponse)|
|403|Forbidden|Unauthorized access|[ErrorResponse](#schemaerrorresponse)|
|404|Not Found|File not found|[ErrorResponse](#schemaerrorresponse)|
|413|Payload Too Large|File content too large to display|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ConnectToken
</aside>

## Get the content of a File

<a id="opIdDownloadFileByID"></a>

> Code samples

```bash
curl http://localhost:8080/vaults/497f6eca-6276-4993-bfeb-53cbbbba6f08/items/497f6eca-6276-4993-bfeb-53cbbbba6f08/files/string/content \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /vaults/{vaultUuid}/items/{itemUuid}/files/{fileUuid}/content`

<h3 id="get-the-content-of-a-file-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|vaultUuid|path|string(uuid)|true|The UUID of the Vault the item is in|
|itemUuid|path|string(uuid)|true|The UUID of the Item the File is in|
|fileUuid|path|string|true|UUID of the file to get content from|

> Example responses

> 401 Response

```json
{
  "status": 401,
  "message": "Invalid token signature"
}
```

> 404 Response

```json
{
  "status": 404,
  "message": "file {fileUuid} not found"
}
```

<h3 id="get-the-content-of-a-file-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|401|Unauthorized|Invalid or missing token|[ErrorResponse](#schemaerrorresponse)|
|404|Not Found|File not found|[ErrorResponse](#schemaerrorresponse)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Content-Disposition|string||none|
|200|Content-Length|string||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ConnectToken
</aside>

<h1 id="1password-connect-health">Health</h1>

## Ping the server for liveness

<a id="opIdGetHeartbeat"></a>

> Code samples

```bash
curl http://localhost:8080/heartbeat
```

`GET /heartbeat`

<h3 id="ping-the-server-for-liveness-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<aside class="success">
This operation does not require authentication
</aside>

## Get state of the server and its dependencies.

<a id="opIdGetServerHealth"></a>

> Code samples

```bash
curl http://localhost:8080/health \
  -H 'Accept: application/json'
```

`GET /health`

> Example responses

> 200 Response

```json
{
  "name": "1Password Connect API",
  "version": "1.2.1",
  "dependencies": [
    {
      "service": "sync",
      "status": "TOKEN_NEEDED"
    },
    {
      "service": "sqlite",
      "status": "ACTIVE",
      "message": "Connected to./1password.sqlite"
    }
  ]
}
```

<h3 id="get-state-of-the-server-and-its-dependencies-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="get-state-of-the-server-and-its-dependencies-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|none|
|version|string|true|none|The Connect server's version|
|dependencies|[[ServiceDependency](#schemaservicedependency)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="1password-connect-metrics">Metrics</h1>

## Query server for exposed Prometheus metrics

<a id="opIdGetPrometheusMetrics"></a>

> Code samples

```bash
curl http://localhost:8080/metrics
```

`GET /metrics`

See Prometheus documentation for a complete data model.

<h3 id="query-server-for-exposed-prometheus-metrics-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully returned Prometheus metrics|Inline|

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

<h2 id="tocS_ErrorResponse">ErrorResponse</h2>
<!-- backwards compatibility -->
<a id="schemaerrorresponse"></a>
<a id="schema_ErrorResponse"></a>
<a id="tocSerrorresponse"></a>
<a id="tocserrorresponse"></a>

```json
{
  "status": 0,
  "message": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|integer|false|none|HTTP Status Code|
|message|string|false|none|A message detailing the error|

<h2 id="tocS_File">File</h2>
<!-- backwards compatibility -->
<a id="schemafile"></a>
<a id="schema_File"></a>
<a id="tocSfile"></a>
<a id="tocsfile"></a>

```json
{
  "id": "6r65pjq33banznomn7q22sj44e",
  "name": "foo.txt",
  "size": 35,
  "content_path": "v1/vaults/ionaiwtdvgclrixbt6ztpqcxnq/items/p7eflcy7f5mk7vg6zrzf5rjjyu/files/6r65pjq33banznomn7q22sj44e/content",
  "content": "VGhlIGZ1dHVyZSBiZWxvbmdzIHRvIHRoZSBjdXJpb3VzLgo="
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|ID of the file|
|name|string|false|none|Name of the file|
|size|integer|false|none|Size in bytes of the file|
|content_path|string|false|read-only|Path of the Connect API that can be used to download the contents of this file.|
|section|object|false|none|For files that are in a section, this field describes the section.|
|content|string(byte)|false|none|Base64-encoded contents of the file. Only set if size <= OP_MAX_INLINE_FILE_SIZE_KB kb and `inline_files` is set to `true`.|

<h2 id="tocS_Vault">Vault</h2>
<!-- backwards compatibility -->
<a id="schemavault"></a>
<a id="schema_Vault"></a>
<a id="tocSvault"></a>
<a id="tocsvault"></a>

```json
{
  "id": "string",
  "name": "string",
  "description": "string",
  "attributeVersion": 0,
  "contentVersion": 0,
  "items": 0,
  "type": "USER_CREATED",
  "createdAt": "1970-01-01T00:00:00Z",
  "updatedAt": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|none|
|name|string|false|none|none|
|description|string|false|none|none|
|attributeVersion|integer|false|none|The vault version|
|contentVersion|integer|false|none|The version of the vault contents|
|items|integer|false|none|Number of active items in the vault|
|type|string|false|none|none|
|createdAt|string(date-time)|false|read-only|none|
|updatedAt|string(date-time)|false|read-only|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|USER_CREATED|
|type|PERSONAL|
|type|EVERYONE|
|type|TRANSFER|

<h2 id="tocS_GeneratorRecipe">GeneratorRecipe</h2>
<!-- backwards compatibility -->
<a id="schemageneratorrecipe"></a>
<a id="schema_GeneratorRecipe"></a>
<a id="tocSgeneratorrecipe"></a>
<a id="tocsgeneratorrecipe"></a>

```json
{
  "length": 32,
  "characterSets": [
    "LETTERS"
  ],
  "excludeCharacters": "abc1"
}
```

The recipe is used in conjunction with the "generate" property to set the character set used to generate a new secure value

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|length|integer|false|none|Length of the generated value|
|characterSets|[string]|false|none|none|
|excludeCharacters|string|false|none|List of all characters that should be excluded from generated passwords.|

#### Enumerated Values

|Property|Value|
|---|---|
|characterSets|LETTERS|
|characterSets|DIGITS|
|characterSets|SYMBOLS|

<h2 id="tocS_Item">Item</h2>
<!-- backwards compatibility -->
<a id="schemaitem"></a>
<a id="schema_Item"></a>
<a id="tocSitem"></a>
<a id="tocsitem"></a>

```json
{
  "id": "string",
  "title": "string",
  "vault": {
    "id": "string"
  },
  "category": "LOGIN",
  "urls": [
    {
      "primary": true,
      "href": "https://example.com"
    },
    {
      "href": "https://example.org"
    }
  ],
  "favorite": false,
  "tags": [
    "string"
  ],
  "version": 0,
  "state": "ARCHIVED",
  "createdAt": "1970-01-01T00:00:00Z",
  "updatedAt": "1970-01-01T00:00:00Z",
  "lastEditedBy": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|none|
|title|string|false|none|none|
|vault|object|true|none|none|
|category|string|true|none|none|
|urls|[object]|false|none|none|
|favorite|boolean|false|none|none|
|tags|[string]|false|none|none|
|version|integer|false|none|none|
|state|string|false|read-only|none|
|createdAt|string(date-time)|false|read-only|none|
|updatedAt|string(date-time)|false|read-only|none|
|lastEditedBy|string|false|read-only|none|

#### Enumerated Values

|Property|Value|
|---|---|
|category|LOGIN|
|category|PASSWORD|
|category|API_CREDENTIAL|
|category|SERVER|
|category|DATABASE|
|category|CREDIT_CARD|
|category|MEMBERSHIP|
|category|PASSPORT|
|category|SOFTWARE_LICENSE|
|category|OUTDOOR_LICENSE|
|category|SECURE_NOTE|
|category|WIRELESS_ROUTER|
|category|BANK_ACCOUNT|
|category|DRIVER_LICENSE|
|category|IDENTITY|
|category|REWARD_PROGRAM|
|category|DOCUMENT|
|category|EMAIL_ACCOUNT|
|category|SOCIAL_SECURITY_NUMBER|
|category|MEDICAL_RECORD|
|category|SSH_KEY|
|category|CUSTOM|
|state|ARCHIVED|
|state|DELETED|

<h2 id="tocS_FullItem">FullItem</h2>
<!-- backwards compatibility -->
<a id="schemafullitem"></a>
<a id="schema_FullItem"></a>
<a id="tocSfullitem"></a>
<a id="tocsfullitem"></a>

```json
{
  "id": "string",
  "title": "string",
  "vault": {
    "id": "string"
  },
  "category": "LOGIN",
  "urls": [
    {
      "primary": true,
      "href": "https://example.com"
    },
    {
      "href": "https://example.org"
    }
  ],
  "favorite": false,
  "tags": [
    "string"
  ],
  "version": 0,
  "state": "ARCHIVED",
  "createdAt": "1970-01-01T00:00:00Z",
  "updatedAt": "1970-01-01T00:00:00Z",
  "lastEditedBy": "string",
  "sections": [
    {
      "id": "string",
      "label": "string"
    }
  ],
  "fields": [
    {
      "id": "string",
      "section": {
        "id": "string"
      },
      "type": "STRING",
      "purpose": "",
      "label": "string",
      "value": "string",
      "generate": false,
      "recipe": {
        "length": 32,
        "characterSets": [
          "LETTERS"
        ],
        "excludeCharacters": "abc1"
      },
      "entropy": 0
    }
  ],
  "files": [
    {
      "id": "6r65pjq33banznomn7q22sj44e",
      "name": "foo.txt",
      "size": 35,
      "content_path": "v1/vaults/ionaiwtdvgclrixbt6ztpqcxnq/items/p7eflcy7f5mk7vg6zrzf5rjjyu/files/6r65pjq33banznomn7q22sj44e/content",
      "content": "VGhlIGZ1dHVyZSBiZWxvbmdzIHRvIHRoZSBjdXJpb3VzLgo="
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|none|
|title|string|false|none|none|
|vault|object|true|none|none|
|category|string|true|none|none|
|urls|[object]|false|none|none|
|favorite|boolean|false|none|none|
|tags|[string]|false|none|none|
|version|integer|false|none|none|
|state|string|false|read-only|none|
|createdAt|string(date-time)|false|read-only|none|
|updatedAt|string(date-time)|false|read-only|none|
|lastEditedBy|string|false|read-only|none|
|sections|[object]|false|none|none|
|fields|[[Field](#schemafield)]|false|none|none|
|files|[[File](#schemafile)]|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|category|LOGIN|
|category|PASSWORD|
|category|API_CREDENTIAL|
|category|SERVER|
|category|DATABASE|
|category|CREDIT_CARD|
|category|MEMBERSHIP|
|category|PASSPORT|
|category|SOFTWARE_LICENSE|
|category|OUTDOOR_LICENSE|
|category|SECURE_NOTE|
|category|WIRELESS_ROUTER|
|category|BANK_ACCOUNT|
|category|DRIVER_LICENSE|
|category|IDENTITY|
|category|REWARD_PROGRAM|
|category|DOCUMENT|
|category|EMAIL_ACCOUNT|
|category|SOCIAL_SECURITY_NUMBER|
|category|MEDICAL_RECORD|
|category|SSH_KEY|
|category|CUSTOM|
|state|ARCHIVED|
|state|DELETED|

<h2 id="tocS_Field">Field</h2>
<!-- backwards compatibility -->
<a id="schemafield"></a>
<a id="schema_Field"></a>
<a id="tocSfield"></a>
<a id="tocsfield"></a>

```json
{
  "id": "string",
  "section": {
    "id": "string"
  },
  "type": "STRING",
  "purpose": "",
  "label": "string",
  "value": "string",
  "generate": false,
  "recipe": {
    "length": 32,
    "characterSets": [
      "LETTERS"
    ],
    "excludeCharacters": "abc1"
  },
  "entropy": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|
|section|object|false|none|none|
|type|string|true|none|none|
|purpose|string|false|none|Some item types, Login and Password, have fields used for autofill. This property indicates that purpose and is required for some item types.|
|label|string|false|none|none|
|value|string|false|none|none|
|generate|boolean|false|none|If value is not present then a new value should be generated for this field|
|recipe|[GeneratorRecipe](#schemageneratorrecipe)|false|none|The recipe is used in conjunction with the "generate" property to set the character set used to generate a new secure value|
|entropy|number|false|read-only|For fields with a purpose of `PASSWORD` this is the entropy of the value|

#### Enumerated Values

|Property|Value|
|---|---|
|type|STRING|
|type|EMAIL|
|type|CONCEALED|
|type|URL|
|type|TOTP|
|type|DATE|
|type|MONTH_YEAR|
|type|MENU|
|purpose|""|
|purpose|USERNAME|
|purpose|PASSWORD|
|purpose|NOTES|

<h2 id="tocS_APIRequest">APIRequest</h2>
<!-- backwards compatibility -->
<a id="schemaapirequest"></a>
<a id="schema_APIRequest"></a>
<a id="tocSapirequest"></a>
<a id="tocsapirequest"></a>

```json
{
  "requestId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "timestamp": "1970-01-01T00:00:00Z",
  "action": "READ",
  "result": "SUCCESS",
  "actor": {
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "account": "string",
    "jti": "string",
    "userAgent": "string",
    "requestIp": "string"
  },
  "resource": {
    "type": "ITEM",
    "vault": {
      "id": "string"
    },
    "item": {
      "id": "string"
    },
    "itemVersion": 0
  }
}
```

Represents a request that was made to the API. Including what Token was used and what resource was accessed.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|requestId|string(uuid)|false|none|The unique id used to identify a single request.|
|timestamp|string(date-time)|false|read-only|The time at which the request was processed by the server.|
|action|string|false|none|none|
|result|string|false|none|none|
|actor|object|false|none|none|
|resource|object|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|action|READ|
|action|CREATE|
|action|UPDATE|
|action|DELETE|
|result|SUCCESS|
|result|DENY|

<h2 id="tocS_Patch">Patch</h2>
<!-- backwards compatibility -->
<a id="schemapatch"></a>
<a id="schema_Patch"></a>
<a id="tocSpatch"></a>
<a id="tocspatch"></a>

```json
[
  {
    "op": "add",
    "path": "/fields/06gnn2b95example10q91512p5/label",
    "value": {}
  }
]
```

<h2 id="tocS_ServiceDependency">ServiceDependency</h2>
<!-- backwards compatibility -->
<a id="schemaservicedependency"></a>
<a id="schema_ServiceDependency"></a>
<a id="tocSservicedependency"></a>
<a id="tocsservicedependency"></a>

```json
{
  "service": "string",
  "status": "string",
  "message": "string"
}
```

The state of a registered server dependency.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|service|string|false|none|none|
|status|string|false|none|none|
|message|string|false|none|Human-readable message for explaining the current state.|
