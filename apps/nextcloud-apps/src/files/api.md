<h1 id="files">files v0.0.1</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

File Management

License: agpl

# Authentication

- HTTP Authentication, scheme: basic

- HTTP Authentication, scheme: bearer

<h1 id="files-api">api</h1>

## Gets a thumbnail of the specified file

<a id="opIdapi-get-thumbnail"></a>

> Code samples

```bash
curl https://cloud.example.com/index.php/apps/files/api/v1/thumbnail/0/0/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /index.php/apps/files/api/v1/thumbnail/{x}/{y}/{file}`

<aside class="warning">
This operation is deprecated
</aside>

<h3 id="gets-a-thumbnail-of-the-specified-file-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|x|path|integer(int64)|true|Width of the thumbnail|
|y|path|integer(int64)|true|Height of the thumbnail|
|file|path|string|true|URL-encoded filename|

> Example responses

> 400 Response

```json
{
  "message": "string"
}
```

> 401 Response

```json
{
  "message": "string"
}
```

> 404 Response

```json
{
  "message": "string"
}
```

<h3 id="gets-a-thumbnail-of-the-specified-file-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Thumbnail returned|Inline|
|400|Bad Request|Getting thumbnail is not possible|Inline|
|401|Unauthorized|Current user is not logged in|Inline|
|404|Not Found|File not found|Inline|

<h3 id="gets-a-thumbnail-of-the-specified-file-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|true|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer_auth, basic_auth
</aside>

## Returns the folder tree of the user

<a id="opIdapi-get-folder-tree"></a>

> Code samples

```bash
curl https://cloud.example.com/ocs/v2.php/apps/files/api/v1/folder-tree \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'OCS-APIRequest: true'
```

`GET /ocs/v2.php/apps/files/api/v1/folder-tree`

<h3 id="returns-the-folder-tree-of-the-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|path|query|string|false|The path relative to the user folder|
|depth|query|integer(int64)|false|The depth of the tree|
|withParents|query|boolean|false|Whether to include parent folders in the response|
|OCS-APIRequest|header|boolean|true|Required to be true for the API request to pass|

> Example responses

> 200 Response

```json
[
  {
    "id": 0,
    "basename": "string",
    "displayName": "string",
    "children": [
      {}
    ]
  }
]
```

> 400 Response

```json
{
  "message": "string"
}
```

> 401 Response

```json
{
  "message": "string"
}
```

> 404 Response

```json
{
  "message": "string"
}
```

<h3 id="returns-the-folder-tree-of-the-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Folder tree returned successfully|[FolderTree](#schemafoldertree)|
|400|Bad Request|Invalid folder path|Inline|
|401|Unauthorized|Unauthorized|Inline|
|404|Not Found|Folder not found|Inline|

<h3 id="returns-the-folder-tree-of-the-user-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|true|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|true|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer_auth, basic_auth
</aside>

<h1 id="files-directediting">direct_editing</h1>

## Get the direct editing capabilities

<a id="opIddirect_editing-info"></a>

> Code samples

```bash
curl https://cloud.example.com/ocs/v2.php/apps/files/api/v1/directEditing \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'OCS-APIRequest: true'
```

`GET /ocs/v2.php/apps/files/api/v1/directEditing`

<h3 id="get-the-direct-editing-capabilities-parameters">Parameters</h3>

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
      "editors": {
        "property1": {
          "id": "string",
          "name": "string",
          "mimetypes": [
            "string"
          ],
          "optionalMimetypes": [
            "string"
          ],
          "secure": true
        },
        "property2": {
          "id": "string",
          "name": "string",
          "mimetypes": [
            "string"
          ],
          "optionalMimetypes": [
            "string"
          ],
          "secure": true
        }
      },
      "creators": {
        "property1": {
          "id": "string",
          "editor": "string",
          "name": "string",
          "extension": "string",
          "templates": true,
          "mimetypes": [
            "string"
          ]
        },
        "property2": {
          "id": "string",
          "editor": "string",
          "name": "string",
          "extension": "string",
          "templates": true,
          "mimetypes": [
            "string"
          ]
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

<h3 id="get-the-direct-editing-capabilities-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Direct editing capabilities returned|Inline|
|401|Unauthorized|Current user is not logged in|Inline|

<h3 id="get-the-direct-editing-capabilities-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|
|» » editors|object|true|none|none|
|» » » **additionalProperties**|object|false|none|none|
|» » » » id|string|true|none|none|
|» » » » name|string|true|none|none|
|» » » » mimetypes|[string]|true|none|none|
|» » » » optionalMimetypes|[string]|true|none|none|
|» » » » secure|boolean|true|none|none|
|» » creators|object|true|none|none|
|» » » **additionalProperties**|object|false|none|none|
|» » » » id|string|true|none|none|
|» » » » editor|string|true|none|none|
|» » » » name|string|true|none|none|
|» » » » extension|string|true|none|none|
|» » » » templates|boolean|true|none|none|
|» » » » mimetypes|[string]|true|none|none|

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

## Get the templates for direct editing

<a id="opIddirect_editing-templates"></a>

> Code samples

```bash
curl https://cloud.example.com/ocs/v2.php/apps/files/api/v1/directEditing/templates/string/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'OCS-APIRequest: true'
```

`GET /ocs/v2.php/apps/files/api/v1/directEditing/templates/{editorId}/{creatorId}`

<h3 id="get-the-templates-for-direct-editing-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|editorId|path|string|true|ID of the editor|
|creatorId|path|string|true|ID of the creator|
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
      "templates": {
        "property1": {
          "id": "string",
          "title": "string",
          "preview": "string",
          "extension": "string",
          "mimetype": "string"
        },
        "property2": {
          "id": "string",
          "title": "string",
          "preview": "string",
          "extension": "string",
          "mimetype": "string"
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

<h3 id="get-the-templates-for-direct-editing-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Templates returned|Inline|
|401|Unauthorized|Current user is not logged in|Inline|
|500|Internal Server Error||Inline|

<h3 id="get-the-templates-for-direct-editing-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|
|» » templates|object|true|none|none|
|» » » **additionalProperties**|object|false|none|none|
|» » » » id|string|true|none|none|
|» » » » title|string|true|none|none|
|» » » » preview|string \| null|true|none|none|
|» » » » extension|string|true|none|none|
|» » » » mimetype|string|true|none|none|

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

## Open a file for direct editing

<a id="opIddirect_editing-open"></a>

> Code samples

```bash
curl https://cloud.example.com/ocs/v2.php/apps/files/api/v1/directEditing/open \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'OCS-APIRequest: true' \
  -d '{
    "path": "string",
    "editorId": null,
    "fileId": null
  }'
```

`POST /ocs/v2.php/apps/files/api/v1/directEditing/open`

> Body parameter

```json
{
  "path": "string",
  "editorId": null,
  "fileId": null
}
```

<h3 id="open-a-file-for-direct-editing-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|OCS-APIRequest|header|boolean|true|Required to be true for the API request to pass|
|body|body|object|true|none|
|» path|body|string|true|Path of the file|
|» editorId|body|string \| null|false|ID of the editor|
|» fileId|body|integer(int64) \| null|false|ID of the file|

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

<h3 id="open-a-file-for-direct-editing-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|URL for direct editing returned|Inline|
|401|Unauthorized|Current user is not logged in|Inline|
|403|Forbidden|Opening file is not allowed|Inline|
|500|Internal Server Error||Inline|

<h3 id="open-a-file-for-direct-editing-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|
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

## Create a file for direct editing

<a id="opIddirect_editing-create"></a>

> Code samples

```bash
curl https://cloud.example.com/ocs/v2.php/apps/files/api/v1/directEditing/create \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'OCS-APIRequest: true' \
  -d '{
    "path": "string",
    "editorId": "string",
    "creatorId": "string",
    "templateId": null
  }'
```

`POST /ocs/v2.php/apps/files/api/v1/directEditing/create`

> Body parameter

```json
{
  "path": "string",
  "editorId": "string",
  "creatorId": "string",
  "templateId": null
}
```

<h3 id="create-a-file-for-direct-editing-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|OCS-APIRequest|header|boolean|true|Required to be true for the API request to pass|
|body|body|object|true|none|
|» path|body|string|true|Path of the file|
|» editorId|body|string|true|ID of the editor|
|» creatorId|body|string|true|ID of the creator|
|» templateId|body|string \| null|false|ID of the template|

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

<h3 id="create-a-file-for-direct-editing-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|URL for direct editing returned|Inline|
|401|Unauthorized|Current user is not logged in|Inline|
|403|Forbidden|Opening file is not allowed|Inline|
|500|Internal Server Error||Inline|

<h3 id="create-a-file-for-direct-editing-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|
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

<h1 id="files-template">template</h1>

## List the available templates

<a id="opIdtemplate-list"></a>

> Code samples

```bash
curl https://cloud.example.com/ocs/v2.php/apps/files/api/v1/templates \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'OCS-APIRequest: true'
```

`GET /ocs/v2.php/apps/files/api/v1/templates`

<h3 id="list-the-available-templates-parameters">Parameters</h3>

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
        "app": "string",
        "label": "string",
        "extension": "string",
        "iconClass": "string",
        "iconSvgInline": "string",
        "mimetypes": [
          "string"
        ],
        "ratio": 0,
        "actionLabel": "string",
        "templates": [
          {
            "templateType": "string",
            "templateId": "string",
            "basename": "string",
            "etag": "string",
            "fileid": 0,
            "filename": "string",
            "lastmod": 0,
            "mime": "string",
            "size": 0,
            "type": "string",
            "hasPreview": true,
            "previewUrl": "string",
            "fields": [
              {
                "index": "string",
                "type": "string",
                "alias": "string",
                "tag": "string",
                "id": 0,
                "content": "string",
                "checked": true
              }
            ]
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

<h3 id="list-the-available-templates-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Available templates returned|Inline|
|401|Unauthorized|Current user is not logged in|Inline|

<h3 id="list-the-available-templates-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|[[TemplateFileCreatorWithTemplates](#schematemplatefilecreatorwithtemplates)]|true|none|none|

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

## List the fields for the template specified by the given file ID

<a id="opIdtemplate-list-template-fields"></a>

> Code samples

```bash
curl https://cloud.example.com/ocs/v2.php/apps/files/api/v1/templates/fields/0 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'OCS-APIRequest: true'
```

`GET /ocs/v2.php/apps/files/api/v1/templates/fields/{fileId}`

<h3 id="list-the-fields-for-the-template-specified-by-the-given-file-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|fileId|path|integer(int64)|true|File ID of the template|
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
      "property1": {
        "index": "string",
        "type": "string",
        "alias": "string",
        "tag": "string",
        "id": 0,
        "content": "string",
        "checked": true
      },
      "property2": {
        "index": "string",
        "type": "string",
        "alias": "string",
        "tag": "string",
        "id": 0,
        "content": "string",
        "checked": true
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

<h3 id="list-the-fields-for-the-template-specified-by-the-given-file-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Fields returned|Inline|
|401|Unauthorized|Current user is not logged in|Inline|

<h3 id="list-the-fields-for-the-template-specified-by-the-given-file-id-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|
|» » **additionalProperties**|[TemplateField](#schematemplatefield)|false|none|none|

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

## Create a template

<a id="opIdtemplate-create"></a>

> Code samples

```bash
curl https://cloud.example.com/ocs/v2.php/apps/files/api/v1/templates/create \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'OCS-APIRequest: true' \
  -d '{
    "filePath": "string",
    "templatePath": "",
    "templateType": "user",
    "templateFields": []
  }'
```

`POST /ocs/v2.php/apps/files/api/v1/templates/create`

> Body parameter

```json
{
  "filePath": "string",
  "templatePath": "",
  "templateType": "user",
  "templateFields": []
}
```

<h3 id="create-a-template-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|OCS-APIRequest|header|boolean|true|Required to be true for the API request to pass|
|body|body|object|true|none|
|» filePath|body|string|true|Path of the file|
|» templatePath|body|string|false|Name of the template|
|» templateType|body|string|false|Type of the template|
|» templateFields|body|[[TemplateField](#schematemplatefield)]|false|Fields of the template|

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
      "basename": "string",
      "etag": "string",
      "fileid": 0,
      "filename": "string",
      "lastmod": 0,
      "mime": "string",
      "size": 0,
      "type": "string",
      "hasPreview": true,
      "permissions": 0
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

<h3 id="create-a-template-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Template created successfully|Inline|
|401|Unauthorized|Current user is not logged in|Inline|
|403|Forbidden|Creating template is not allowed|Inline|

<h3 id="create-a-template-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|[TemplateFile](#schematemplatefile)|true|none|none|

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

## Initialize the template directory

<a id="opIdtemplate-path"></a>

> Code samples

```bash
curl https://cloud.example.com/ocs/v2.php/apps/files/api/v1/templates/path \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'OCS-APIRequest: true' \
  -d '{
    "templatePath": "",
    "copySystemTemplates": false
  }'
```

`POST /ocs/v2.php/apps/files/api/v1/templates/path`

> Body parameter

```json
{
  "templatePath": "",
  "copySystemTemplates": false
}
```

<h3 id="initialize-the-template-directory-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|OCS-APIRequest|header|boolean|true|Required to be true for the API request to pass|
|body|body|object|false|none|
|» templatePath|body|string|false|Path of the template directory|
|» copySystemTemplates|body|boolean|false|Whether to copy the system templates to the template directory|

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
      "template_path": "string",
      "templates": [
        {
          "app": "string",
          "label": "string",
          "extension": "string",
          "iconClass": "string",
          "iconSvgInline": "string",
          "mimetypes": [
            "string"
          ],
          "ratio": 0,
          "actionLabel": "string"
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

<h3 id="initialize-the-template-directory-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Template directory initialized successfully|Inline|
|401|Unauthorized|Current user is not logged in|Inline|
|403|Forbidden|Initializing the template directory is not allowed|Inline|

<h3 id="initialize-the-template-directory-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|
|» » template_path|string|true|none|none|
|» » templates|[[TemplateFileCreator](#schematemplatefilecreator)]|true|none|none|

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

<h1 id="files-transferownership">transfer_ownership</h1>

## Transfer the ownership to another user

<a id="opIdtransfer_ownership-transfer"></a>

> Code samples

```bash
curl https://cloud.example.com/ocs/v2.php/apps/files/api/v1/transferownership \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'OCS-APIRequest: true' \
  -d '{
    "recipient": "string",
    "path": "string"
  }'
```

`POST /ocs/v2.php/apps/files/api/v1/transferownership`

> Body parameter

```json
{
  "recipient": "string",
  "path": "string"
}
```

<h3 id="transfer-the-ownership-to-another-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|OCS-APIRequest|header|boolean|true|Required to be true for the API request to pass|
|body|body|object|true|none|
|» recipient|body|string|true|Username of the recipient|
|» path|body|string|true|Path of the file|

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

<h3 id="transfer-the-ownership-to-another-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Ownership transferred successfully|Inline|
|400|Bad Request|Transferring ownership is not possible|Inline|
|401|Unauthorized|Current user is not logged in|Inline|
|403|Forbidden|Transferring ownership is not allowed|Inline|

<h3 id="transfer-the-ownership-to-another-user-responseschema">Response Schema</h3>

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

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer_auth, basic_auth
</aside>

## Accept an ownership transfer

<a id="opIdtransfer_ownership-accept"></a>

> Code samples

```bash
curl https://cloud.example.com/ocs/v2.php/apps/files/api/v1/transferownership/1 \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'OCS-APIRequest: true'
```

`POST /ocs/v2.php/apps/files/api/v1/transferownership/{id}`

<h3 id="accept-an-ownership-transfer-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int64)|true|ID of the ownership transfer|
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

<h3 id="accept-an-ownership-transfer-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Ownership transfer accepted successfully|Inline|
|401|Unauthorized|Current user is not logged in|Inline|
|403|Forbidden|Accepting ownership transfer is not allowed|Inline|
|404|Not Found|Ownership transfer not found|Inline|

<h3 id="accept-an-ownership-transfer-responseschema">Response Schema</h3>

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

## Reject an ownership transfer

<a id="opIdtransfer_ownership-reject"></a>

> Code samples

```bash
curl https://cloud.example.com/ocs/v2.php/apps/files/api/v1/transferownership/1 \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'OCS-APIRequest: true'
```

`DELETE /ocs/v2.php/apps/files/api/v1/transferownership/{id}`

<h3 id="reject-an-ownership-transfer-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int64)|true|ID of the ownership transfer|
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

<h3 id="reject-an-ownership-transfer-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Ownership transfer rejected successfully|Inline|
|401|Unauthorized|Current user is not logged in|Inline|
|403|Forbidden|Rejecting ownership transfer is not allowed|Inline|
|404|Not Found|Ownership transfer not found|Inline|

<h3 id="reject-an-ownership-transfer-responseschema">Response Schema</h3>

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

<h1 id="files-openlocaleditor">open_local_editor</h1>

## Create a local editor

<a id="opIdopen_local_editor-create"></a>

> Code samples

```bash
curl https://cloud.example.com/ocs/v2.php/apps/files/api/v1/openlocaleditor \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'OCS-APIRequest: true' \
  -d '{
    "path": "string"
  }'
```

`POST /ocs/v2.php/apps/files/api/v1/openlocaleditor`

> Body parameter

```json
{
  "path": "string"
}
```

<h3 id="create-a-local-editor-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|OCS-APIRequest|header|boolean|true|Required to be true for the API request to pass|
|body|body|object|true|none|
|» path|body|string|true|Path of the file|

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
      "pathHash": "string",
      "expirationTime": 0,
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

<h3 id="create-a-local-editor-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Local editor returned|Inline|
|401|Unauthorized|Current user is not logged in|Inline|
|500|Internal Server Error||Inline|

<h3 id="create-a-local-editor-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|
|» » userId|string \| null|true|none|none|
|» » pathHash|string|true|none|none|
|» » expirationTime|integer(int64)|true|none|none|
|» » token|string|true|none|none|

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

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer_auth, basic_auth
</aside>

## Validate a local editor

<a id="opIdopen_local_editor-validate"></a>

> Code samples

```bash
curl https://cloud.example.com/ocs/v2.php/apps/files/api/v1/openlocaleditor/string \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'OCS-APIRequest: true' \
  -d '{
    "path": "string"
  }'
```

`POST /ocs/v2.php/apps/files/api/v1/openlocaleditor/{token}`

> Body parameter

```json
{
  "path": "string"
}
```

<h3 id="validate-a-local-editor-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|token|path|string|true|Token of the local editor|
|OCS-APIRequest|header|boolean|true|Required to be true for the API request to pass|
|body|body|object|true|none|
|» path|body|string|true|Path of the file|

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
      "pathHash": "string",
      "expirationTime": 0,
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

<h3 id="validate-a-local-editor-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Local editor validated successfully|Inline|
|401|Unauthorized|Current user is not logged in|Inline|
|404|Not Found|Local editor not found|Inline|

<h3 id="validate-a-local-editor-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|
|» » userId|string|true|none|none|
|» » pathHash|string|true|none|none|
|» » expirationTime|integer(int64)|true|none|none|
|» » token|string|true|none|none|

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

<h1 id="files-conversionapi">conversion_api</h1>

## Converts a file from one MIME type to another

<a id="opIdconversion_api-convert"></a>

> Code samples

```bash
curl https://cloud.example.com/ocs/v2.php/apps/files/api/v1/convert \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'OCS-APIRequest: true' \
  -d '{
    "fileId": 0,
    "targetMimeType": "string",
    "destination": null
  }'
```

`POST /ocs/v2.php/apps/files/api/v1/convert`

> Body parameter

```json
{
  "fileId": 0,
  "targetMimeType": "string",
  "destination": null
}
```

<h3 id="converts-a-file-from-one-mime-type-to-another-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|OCS-APIRequest|header|boolean|true|Required to be true for the API request to pass|
|body|body|object|true|none|
|» fileId|body|integer(int64)|true|ID of the file to be converted|
|» targetMimeType|body|string|true|The MIME type to which you want to convert the file|
|» destination|body|string \| null|false|The target path of the converted file. Written to a temporary file if left empty|

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
      "path": "string",
      "fileId": 0
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

<h3 id="converts-a-file-from-one-mime-type-to-another-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|File was converted and written to the destination or temporary file|Inline|
|401|Unauthorized|Current user is not logged in|Inline|
|404|Not Found|The file to be converted was not found|Inline|

<h3 id="converts-a-file-from-one-mime-type-to-another-responseschema">Response Schema</h3>

Status Code **201**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|
|» » path|string|true|none|none|
|» » fileId|integer(int64)|true|none|none|

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

<h1 id="files-opened">opened</h1>

## Report that the current user opened a file or folder

<a id="opIdopened-opened"></a>

> Code samples

```bash
curl https://cloud.example.com/ocs/v2.php/apps/files/api/v1/opened \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'OCS-APIRequest: true' \
  -d '{
    "fileId": 0
  }'
```

`POST /ocs/v2.php/apps/files/api/v1/opened`

Clients call this when the user actually opens a node, not when they read its content (sync, previews, downloads). Apps can listen to it to know what the user works with. It is for statistics only: clients send it when they choose to, so it must not be relied on for access or auditing.

> Body parameter

```json
{
  "fileId": 0
}
```

<h3 id="report-that-the-current-user-opened-a-file-or-folder-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|OCS-APIRequest|header|boolean|true|Required to be true for the API request to pass|
|body|body|object|true|none|
|» fileId|body|integer(int64)|true|ID of the opened file or folder|

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

<h3 id="report-that-the-current-user-opened-a-file-or-folder-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Open reported|Inline|
|401|Unauthorized|Current user is not logged in|Inline|
|404|Not Found|The file or folder was not found|Inline|

<h3 id="report-that-the-current-user-opened-a-file-or-folder-responseschema">Response Schema</h3>

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

# Schemas

<h2 id="tocS_Capabilities">Capabilities</h2>
<!-- backwards compatibility -->
<a id="schemacapabilities"></a>
<a id="schema_Capabilities"></a>
<a id="tocScapabilities"></a>
<a id="tocscapabilities"></a>

```json
{
  "files": {
    "windows_compatible_filenames": true,
    "$comment": "string",
    "bigfilechunking": true,
    "blacklisted_files": [
      {}
    ],
    "forbidden_filenames": [
      "string"
    ],
    "forbidden_filename_basenames": [
      "string"
    ],
    "forbidden_filename_characters": [
      "string"
    ],
    "forbidden_filename_extensions": [
      "string"
    ],
    "chunked_upload": {
      "max_size": 0,
      "max_parallel_count": 0
    },
    "file_conversions": [
      {
        "from": "string",
        "to": "string",
        "extension": "string",
        "displayName": "string"
      }
    ],
    "directEditing": {
      "url": "string",
      "etag": "string",
      "supportsFileId": true
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|files|object|true|none|none|

<h2 id="tocS_FolderTree">FolderTree</h2>
<!-- backwards compatibility -->
<a id="schemafoldertree"></a>
<a id="schema_FolderTree"></a>
<a id="tocSfoldertree"></a>
<a id="tocsfoldertree"></a>

```json
[
  {
    "id": 0,
    "basename": "string",
    "displayName": "string",
    "children": [
      {}
    ]
  }
]
```

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

<h2 id="tocS_Template">Template</h2>
<!-- backwards compatibility -->
<a id="schematemplate"></a>
<a id="schema_Template"></a>
<a id="tocStemplate"></a>
<a id="tocstemplate"></a>

```json
{
  "templateType": "string",
  "templateId": "string",
  "basename": "string",
  "etag": "string",
  "fileid": 0,
  "filename": "string",
  "lastmod": 0,
  "mime": "string",
  "size": 0,
  "type": "string",
  "hasPreview": true,
  "previewUrl": "string",
  "fields": [
    {
      "index": "string",
      "type": "string",
      "alias": "string",
      "tag": "string",
      "id": 0,
      "content": "string",
      "checked": true
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|templateType|string|true|none|none|
|templateId|string|true|none|none|
|basename|string|true|none|none|
|etag|string|true|none|none|
|fileid|integer(int64)|true|none|none|
|filename|string|true|none|none|
|lastmod|integer(int64)|true|none|none|
|mime|string|true|none|none|
|size|integer(int64) \| number(double)|true|none|none|
|type|string|true|none|none|
|hasPreview|boolean|true|none|none|
|previewUrl|string \| null|true|none|none|
|fields|[[TemplateField](#schematemplatefield)]|true|none|none|

<h2 id="tocS_TemplateField">TemplateField</h2>
<!-- backwards compatibility -->
<a id="schematemplatefield"></a>
<a id="schema_TemplateField"></a>
<a id="tocStemplatefield"></a>
<a id="tocstemplatefield"></a>

```json
{
  "index": "string",
  "type": "string",
  "alias": "string",
  "tag": "string",
  "id": 0,
  "content": "string",
  "checked": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|index|string|true|none|none|
|type|string|true|none|none|
|alias|string \| null|true|none|none|
|tag|string \| null|true|none|none|
|id|integer(int64) \| null|true|none|none|
|content|string|false|none|none|
|checked|boolean|false|none|none|

<h2 id="tocS_TemplateFile">TemplateFile</h2>
<!-- backwards compatibility -->
<a id="schematemplatefile"></a>
<a id="schema_TemplateFile"></a>
<a id="tocStemplatefile"></a>
<a id="tocstemplatefile"></a>

```json
{
  "basename": "string",
  "etag": "string",
  "fileid": 0,
  "filename": "string",
  "lastmod": 0,
  "mime": "string",
  "size": 0,
  "type": "string",
  "hasPreview": true,
  "permissions": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|basename|string|true|none|none|
|etag|string|true|none|none|
|fileid|integer(int64)|true|none|none|
|filename|string \| null|true|none|none|
|lastmod|integer(int64)|true|none|none|
|mime|string|true|none|none|
|size|integer(int64) \| number(double)|true|none|none|
|type|string|true|none|none|
|hasPreview|boolean|true|none|none|
|permissions|integer(int64)|true|none|none|

<h2 id="tocS_TemplateFileCreator">TemplateFileCreator</h2>
<!-- backwards compatibility -->
<a id="schematemplatefilecreator"></a>
<a id="schema_TemplateFileCreator"></a>
<a id="tocStemplatefilecreator"></a>
<a id="tocstemplatefilecreator"></a>

```json
{
  "app": "string",
  "label": "string",
  "extension": "string",
  "iconClass": "string",
  "iconSvgInline": "string",
  "mimetypes": [
    "string"
  ],
  "ratio": 0,
  "actionLabel": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|app|string|true|none|none|
|label|string|true|none|none|
|extension|string|true|none|none|
|iconClass|string \| null|true|none|none|
|iconSvgInline|string \| null|true|none|none|
|mimetypes|[string]|true|none|none|
|ratio|number(double) \| null|true|none|none|
|actionLabel|string|true|none|none|

<h2 id="tocS_TemplateFileCreatorWithTemplates">TemplateFileCreatorWithTemplates</h2>
<!-- backwards compatibility -->
<a id="schematemplatefilecreatorwithtemplates"></a>
<a id="schema_TemplateFileCreatorWithTemplates"></a>
<a id="tocStemplatefilecreatorwithtemplates"></a>
<a id="tocstemplatefilecreatorwithtemplates"></a>

```json
{
  "app": "string",
  "label": "string",
  "extension": "string",
  "iconClass": "string",
  "iconSvgInline": "string",
  "mimetypes": [
    "string"
  ],
  "ratio": 0,
  "actionLabel": "string",
  "templates": [
    {
      "templateType": "string",
      "templateId": "string",
      "basename": "string",
      "etag": "string",
      "fileid": 0,
      "filename": "string",
      "lastmod": 0,
      "mime": "string",
      "size": 0,
      "type": "string",
      "hasPreview": true,
      "previewUrl": "string",
      "fields": [
        {
          "index": "string",
          "type": "string",
          "alias": "string",
          "tag": "string",
          "id": 0,
          "content": "string",
          "checked": true
        }
      ]
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|app|string|true|none|none|
|label|string|true|none|none|
|extension|string|true|none|none|
|iconClass|string \| null|true|none|none|
|iconSvgInline|string \| null|true|none|none|
|mimetypes|[string]|true|none|none|
|ratio|number(double) \| null|true|none|none|
|actionLabel|string|true|none|none|
|templates|[[Template](#schematemplate)]|true|none|none|
