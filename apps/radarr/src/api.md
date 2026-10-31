<h1 id="radarr">Radarr v3.0.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Radarr API docs

Base URLs:

* <a href="http://localhost:7878">http://localhost:7878</a>

License: <a href="https://github.com/Radarr/Radarr/blob/develop/LICENSE">GPL-3.0</a>

# Authentication

* API Key (X-Api-Key)
    - Parameter Name: **X-Api-Key**, in: header. Apikey passed as header

* API Key (apikey)
    - Parameter Name: **apikey**, in: query. Apikey passed as query parameter

<h1 id="radarr-alternativetitle">AlternativeTitle</h1>

## get/api/v3/alttitle

> Code samples

```bash
curl http://localhost:7878/api/v3/alttitle \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /api/v3/alttitle`

<h3 id="getapiv3alttitle-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|movieId|query|integer(int32)|false|none|
|movieMetadataId|query|integer(int32)|false|none|

> Example responses

> 200 Response

```json
[
  {
    "id": 0,
    "sourceType": "tmdb",
    "movieMetadataId": 0,
    "title": "string",
    "cleanTitle": "string"
  }
]
```

<h3 id="getapiv3alttitle-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="getapiv3alttitle-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[AlternativeTitleResource](#schemaalternativetitleresource)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## get/api/v3/alttitle/{id}

> Code samples

```bash
curl http://localhost:7878/api/v3/alttitle/0 \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /api/v3/alttitle/{id}`

<h3 id="getapiv3alttitleid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|none|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "sourceType": "tmdb",
  "movieMetadataId": 0,
  "title": "string",
  "cleanTitle": "string"
}
```

<h3 id="getapiv3alttitleid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[AlternativeTitleResource](#schemaalternativetitleresource)|
|404|Not Found|Not Found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

<h1 id="radarr-apiinfo">ApiInfo</h1>

## get/api

> Code samples

```bash
curl http://localhost:7878/api \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /api`

> Example responses

> 200 Response

```json
{
  "current": "string",
  "deprecated": [
    "string"
  ]
}
```

<h3 id="getapi-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[ApiInfoResource](#schemaapiinforesource)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

<h1 id="radarr-authentication">Authentication</h1>

## get/login/sso

> Code samples

```bash
curl http://localhost:7878/login/sso \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /login/sso`

<h3 id="getloginsso-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|returnUrl|query|string|false|none|

<h3 id="getloginsso-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|302|Found|Found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## post/login

> Code samples

```bash
curl http://localhost:7878/login \
  -X POST \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}" \
  -F 'username=string' \
  -F 'password=string' \
  -F 'rememberMe=string'
```

`POST /login`

> Body parameter

```yaml
username: string
password: string
rememberMe: string
```

<h3 id="postlogin-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|returnUrl|query|string|false|none|
|body|body|object|false|none|
|» username|body|string|false|none|
|» password|body|string|false|none|
|» rememberMe|body|string|false|none|

> Example responses

> 401 Response

```json
{
  "type": "string",
  "title": "string",
  "status": 0,
  "detail": "string",
  "instance": "string",
  "property1": null,
  "property2": null
}
```

<h3 id="postlogin-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|302|Found|Found|None|
|401|Unauthorized|Unauthorized|[ProblemDetails](#schemaproblemdetails)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## get/logout

> Code samples

```bash
curl http://localhost:7878/logout \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /logout`

<h3 id="getlogout-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|302|Found|Found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

<h1 id="radarr-staticresource">StaticResource</h1>

## get/login

> Code samples

```bash
curl http://localhost:7878/login \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /login`

<h3 id="getlogin-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## get/loggedout

> Code samples

```bash
curl http://localhost:7878/loggedout \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /loggedout`

<h3 id="getloggedout-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## get/content/{path}

> Code samples

```bash
curl http://localhost:7878/content/string \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /content/{path}`

<h3 id="getcontentpath-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|path|path|string|true|none|

<h3 id="getcontentpath-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## get/

> Code samples

```bash
curl http://localhost:7878/ \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /`

<h3 id="get-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|path|path|string|true|none|

<h3 id="get-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## get/{path}

> Code samples

```bash
curl http://localhost:7878/string \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /{path}`

<h3 id="getpath-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|path|path|string|true|none|

<h3 id="getpath-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

<h1 id="radarr-autotagging">AutoTagging</h1>

## get/api/v3/autotagging

> Code samples

```bash
curl http://localhost:7878/api/v3/autotagging \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /api/v3/autotagging`

> Example responses

> 200 Response

```json
[
  {
    "id": 0,
    "name": "string",
    "removeTagsAutomatically": true,
    "tags": [
      0
    ],
    "specifications": [
      {
        "id": 0,
        "name": "string",
        "implementation": "string",
        "implementationName": "string",
        "negate": true,
        "required": true,
        "fields": [
          {
            "order": 0,
            "name": "string",
            "label": "string",
            "unit": "string",
            "helpText": "string",
            "helpTextWarning": "string",
            "helpLink": "string",
            "value": null,
            "type": "string",
            "advanced": true,
            "selectOptions": [
              {
                "value": 0,
                "name": "string",
                "order": 0,
                "hint": "string",
                "dividerAfter": true
              }
            ],
            "selectOptionsProviderAction": "string",
            "section": "string",
            "hidden": "string",
            "privacy": "normal",
            "placeholder": "string",
            "isFloat": true
          }
        ]
      }
    ]
  }
]
```

<h3 id="getapiv3autotagging-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="getapiv3autotagging-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[AutoTaggingResource](#schemaautotaggingresource)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## post/api/v3/autotagging

> Code samples

```bash
curl http://localhost:7878/api/v3/autotagging \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}" \
  -d '{
    "id": 0,
    "name": "string",
    "removeTagsAutomatically": true,
    "tags": [
      0
    ],
    "specifications": [
      {
        "id": 0,
        "name": "string",
        "implementation": "string",
        "implementationName": "string",
        "negate": true,
        "required": true,
        "fields": [
          {
            "order": 0,
            "name": "string",
            "label": "string",
            "unit": "string",
            "helpText": "string",
            "helpTextWarning": "string",
            "helpLink": "string",
            "value": null,
            "type": "string",
            "advanced": true,
            "selectOptions": [
              {
                "value": 0,
                "name": "string",
                "order": 0,
                "hint": "string",
                "dividerAfter": true
              }
            ],
            "selectOptionsProviderAction": "string",
            "section": "string",
            "hidden": "string",
            "privacy": "normal",
            "placeholder": "string",
            "isFloat": true
          }
        ]
      }
    ]
  }'
```

`POST /api/v3/autotagging`

> Body parameter

```json
{
  "id": 0,
  "name": "string",
  "removeTagsAutomatically": true,
  "tags": [
    0
  ],
  "specifications": [
    {
      "id": 0,
      "name": "string",
      "implementation": "string",
      "implementationName": "string",
      "negate": true,
      "required": true,
      "fields": [
        {
          "order": 0,
          "name": "string",
          "label": "string",
          "unit": "string",
          "helpText": "string",
          "helpTextWarning": "string",
          "helpLink": "string",
          "value": null,
          "type": "string",
          "advanced": true,
          "selectOptions": [
            {
              "value": 0,
              "name": "string",
              "order": 0,
              "hint": "string",
              "dividerAfter": true
            }
          ],
          "selectOptionsProviderAction": "string",
          "section": "string",
          "hidden": "string",
          "privacy": "normal",
          "placeholder": "string",
          "isFloat": true
        }
      ]
    }
  ]
}
```

<h3 id="postapiv3autotagging-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[AutoTaggingResource](#schemaautotaggingresource)|false|none|
|» id|body|integer(int32)|false|none|
|» name|body|string \| null|false|none|
|» removeTagsAutomatically|body|boolean|false|none|
|» tags|body|[integer(int32)]|false|none|
|» specifications|body|[[AutoTaggingSpecificationSchema](#schemaautotaggingspecificationschema)]|false|none|

> Example responses

> 201 Response

```json
{
  "id": 0,
  "name": "string",
  "removeTagsAutomatically": true,
  "tags": [
    0
  ],
  "specifications": [
    {
      "id": 0,
      "name": "string",
      "implementation": "string",
      "implementationName": "string",
      "negate": true,
      "required": true,
      "fields": [
        {
          "order": 0,
          "name": "string",
          "label": "string",
          "unit": "string",
          "helpText": "string",
          "helpTextWarning": "string",
          "helpLink": "string",
          "value": null,
          "type": "string",
          "advanced": true,
          "selectOptions": [
            {
              "value": 0,
              "name": "string",
              "order": 0,
              "hint": "string",
              "dividerAfter": true
            }
          ],
          "selectOptionsProviderAction": "string",
          "section": "string",
          "hidden": "string",
          "privacy": "normal",
          "placeholder": "string",
          "isFloat": true
        }
      ]
    }
  ]
}
```

<h3 id="postapiv3autotagging-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Created|[AutoTaggingResource](#schemaautotaggingresource)|
|404|Not Found|Not Found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## get/api/v3/autotagging/{id}

> Code samples

```bash
curl http://localhost:7878/api/v3/autotagging/0 \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /api/v3/autotagging/{id}`

<h3 id="getapiv3autotaggingid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|none|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "name": "string",
  "removeTagsAutomatically": true,
  "tags": [
    0
  ],
  "specifications": [
    {
      "id": 0,
      "name": "string",
      "implementation": "string",
      "implementationName": "string",
      "negate": true,
      "required": true,
      "fields": [
        {
          "order": 0,
          "name": "string",
          "label": "string",
          "unit": "string",
          "helpText": "string",
          "helpTextWarning": "string",
          "helpLink": "string",
          "value": null,
          "type": "string",
          "advanced": true,
          "selectOptions": [
            {
              "value": 0,
              "name": "string",
              "order": 0,
              "hint": "string",
              "dividerAfter": true
            }
          ],
          "selectOptionsProviderAction": "string",
          "section": "string",
          "hidden": "string",
          "privacy": "normal",
          "placeholder": "string",
          "isFloat": true
        }
      ]
    }
  ]
}
```

<h3 id="getapiv3autotaggingid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[AutoTaggingResource](#schemaautotaggingresource)|
|404|Not Found|Not Found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## put/api/v3/autotagging/{id}

> Code samples

```bash
curl http://localhost:7878/api/v3/autotagging/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}" \
  -d '{
    "id": 0,
    "name": "string",
    "removeTagsAutomatically": true,
    "tags": [
      0
    ],
    "specifications": [
      {
        "id": 0,
        "name": "string",
        "implementation": "string",
        "implementationName": "string",
        "negate": true,
        "required": true,
        "fields": [
          {
            "order": 0,
            "name": "string",
            "label": "string",
            "unit": "string",
            "helpText": "string",
            "helpTextWarning": "string",
            "helpLink": "string",
            "value": null,
            "type": "string",
            "advanced": true,
            "selectOptions": [
              {
                "value": 0,
                "name": "string",
                "order": 0,
                "hint": "string",
                "dividerAfter": true
              }
            ],
            "selectOptionsProviderAction": "string",
            "section": "string",
            "hidden": "string",
            "privacy": "normal",
            "placeholder": "string",
            "isFloat": true
          }
        ]
      }
    ]
  }'
```

`PUT /api/v3/autotagging/{id}`

> Body parameter

```json
{
  "id": 0,
  "name": "string",
  "removeTagsAutomatically": true,
  "tags": [
    0
  ],
  "specifications": [
    {
      "id": 0,
      "name": "string",
      "implementation": "string",
      "implementationName": "string",
      "negate": true,
      "required": true,
      "fields": [
        {
          "order": 0,
          "name": "string",
          "label": "string",
          "unit": "string",
          "helpText": "string",
          "helpTextWarning": "string",
          "helpLink": "string",
          "value": null,
          "type": "string",
          "advanced": true,
          "selectOptions": [
            {
              "value": 0,
              "name": "string",
              "order": 0,
              "hint": "string",
              "dividerAfter": true
            }
          ],
          "selectOptionsProviderAction": "string",
          "section": "string",
          "hidden": "string",
          "privacy": "normal",
          "placeholder": "string",
          "isFloat": true
        }
      ]
    }
  ]
}
```

<h3 id="putapiv3autotaggingid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|body|body|[AutoTaggingResource](#schemaautotaggingresource)|false|none|
|» id|body|integer(int32)|false|none|
|» name|body|string \| null|false|none|
|» removeTagsAutomatically|body|boolean|false|none|
|» tags|body|[integer(int32)]|false|none|
|» specifications|body|[[AutoTaggingSpecificationSchema](#schemaautotaggingspecificationschema)]|false|none|

> Example responses

> 202 Response

```json
{
  "id": 0,
  "name": "string",
  "removeTagsAutomatically": true,
  "tags": [
    0
  ],
  "specifications": [
    {
      "id": 0,
      "name": "string",
      "implementation": "string",
      "implementationName": "string",
      "negate": true,
      "required": true,
      "fields": [
        {
          "order": 0,
          "name": "string",
          "label": "string",
          "unit": "string",
          "helpText": "string",
          "helpTextWarning": "string",
          "helpLink": "string",
          "value": null,
          "type": "string",
          "advanced": true,
          "selectOptions": [
            {
              "value": 0,
              "name": "string",
              "order": 0,
              "hint": "string",
              "dividerAfter": true
            }
          ],
          "selectOptionsProviderAction": "string",
          "section": "string",
          "hidden": "string",
          "privacy": "normal",
          "placeholder": "string",
          "isFloat": true
        }
      ]
    }
  ]
}
```

<h3 id="putapiv3autotaggingid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|Accepted|[AutoTaggingResource](#schemaautotaggingresource)|
|404|Not Found|Not Found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## delete/api/v3/autotagging/{id}

> Code samples

```bash
curl http://localhost:7878/api/v3/autotagging/0 \
  -X DELETE \
  -H "X-Api-Key: ${API_KEY}"
```

`DELETE /api/v3/autotagging/{id}`

<h3 id="deleteapiv3autotaggingid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|none|

<h3 id="deleteapiv3autotaggingid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## get/api/v3/autotagging/schema

> Code samples

```bash
curl http://localhost:7878/api/v3/autotagging/schema \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /api/v3/autotagging/schema`

> Example responses

> 200 Response

```json
[
  {
    "id": 0,
    "name": "string",
    "implementation": "string",
    "implementationName": "string",
    "negate": true,
    "required": true,
    "fields": [
      {
        "order": 0,
        "name": "string",
        "label": "string",
        "unit": "string",
        "helpText": "string",
        "helpTextWarning": "string",
        "helpLink": "string",
        "value": null,
        "type": "string",
        "advanced": true,
        "selectOptions": [
          {
            "value": 0,
            "name": "string",
            "order": 0,
            "hint": "string",
            "dividerAfter": true
          }
        ],
        "selectOptionsProviderAction": "string",
        "section": "string",
        "hidden": "string",
        "privacy": "normal",
        "placeholder": "string",
        "isFloat": true
      }
    ]
  }
]
```

<h3 id="getapiv3autotaggingschema-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="getapiv3autotaggingschema-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[AutoTaggingSpecificationSchema](#schemaautotaggingspecificationschema)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

<h1 id="radarr-backup">Backup</h1>

## get/api/v3/system/backup

> Code samples

```bash
curl http://localhost:7878/api/v3/system/backup \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /api/v3/system/backup`

> Example responses

> 200 Response

```json
[
  {
    "id": 0,
    "name": "string",
    "path": "string",
    "type": "scheduled",
    "size": 0,
    "time": "1970-01-01T00:00:00Z"
  }
]
```

<h3 id="getapiv3systembackup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="getapiv3systembackup-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[BackupResource](#schemabackupresource)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## delete/api/v3/system/backup/{id}

> Code samples

```bash
curl http://localhost:7878/api/v3/system/backup/0 \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}"
```

`DELETE /api/v3/system/backup/{id}`

<h3 id="deleteapiv3systembackupid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|none|

> Example responses

> 200 Response

```json
null
```

<h3 id="deleteapiv3systembackupid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|404|Not Found|Not Found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## post/api/v3/system/backup/restore/{id}

> Code samples

```bash
curl http://localhost:7878/api/v3/system/backup/restore/0 \
  -X POST \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}"
```

`POST /api/v3/system/backup/restore/{id}`

<h3 id="postapiv3systembackuprestoreid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|none|

> Example responses

> 200 Response

```json
{
  "restartRequired": true
}
```

<h3 id="postapiv3systembackuprestoreid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[BackupRestoreResource](#schemabackuprestoreresource)|
|404|Not Found|Not Found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## post/api/v3/system/backup/restore/upload

> Code samples

```bash
curl http://localhost:7878/api/v3/system/backup/restore/upload \
  -X POST \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}"
```

`POST /api/v3/system/backup/restore/upload`

> Example responses

> 200 Response

```json
{
  "restartRequired": true
}
```

> 400 Response

```json
{
  "error": "string"
}
```

<h3 id="postapiv3systembackuprestoreupload-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[BackupRestoreResource](#schemabackuprestoreresource)|
|400|Bad Request|Bad Request|[BackupRestoreErrorResource](#schemabackuprestoreerrorresource)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

<h1 id="radarr-blocklist">Blocklist</h1>

## get/api/v3/blocklist

> Code samples

```bash
curl http://localhost:7878/api/v3/blocklist \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /api/v3/blocklist`

<h3 id="getapiv3blocklist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|page|query|integer(int32)|false|none|
|pageSize|query|integer(int32)|false|none|
|sortKey|query|string|false|none|
|sortDirection|query|[SortDirection](#schemasortdirection)|false|none|
|movieIds|query|[integer(int32)]|false|none|
|protocols|query|[[DownloadProtocol](#schemadownloadprotocol)]|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|sortDirection|default|
|sortDirection|ascending|
|sortDirection|descending|
|protocols|unknown|
|protocols|usenet|
|protocols|torrent|

> Example responses

> 200 Response

```json
{
  "page": 0,
  "pageSize": 0,
  "sortKey": "string",
  "sortDirection": "default",
  "totalRecords": 0,
  "records": [
    {
      "id": 0,
      "movieId": 0,
      "sourceTitle": "string",
      "languages": [
        {
          "id": 0,
          "name": "string"
        }
      ],
      "quality": {
        "quality": {
          "id": 0,
          "name": "string",
          "source": "unknown",
          "resolution": 0,
          "modifier": "none"
        },
        "revision": {
          "version": 0,
          "real": 0,
          "isRepack": true
        }
      },
      "customFormats": [
        {
          "id": 0,
          "name": "string",
          "includeCustomFormatWhenRenaming": true,
          "specifications": [
            {
              "id": 0,
              "name": "string",
              "implementation": "string",
              "implementationName": "string",
              "infoLink": "string",
              "negate": true,
              "required": true,
              "fields": [
                {
                  "order": 0,
                  "name": "string",
                  "label": "string",
                  "unit": "string",
                  "helpText": "string",
                  "helpTextWarning": "string",
                  "helpLink": "string",
                  "value": null,
                  "type": "string",
                  "advanced": true,
                  "selectOptions": [
                    {
                      "value": 0,
                      "name": "string",
                      "order": 0,
                      "hint": "string",
                      "dividerAfter": true
                    }
                  ],
                  "selectOptionsProviderAction": "string",
                  "section": "string",
                  "hidden": "string",
                  "privacy": "normal",
                  "placeholder": "string",
                  "isFloat": true
                }
              ],
              "presets": [
                {}
              ]
            }
          ]
        }
      ],
      "date": "1970-01-01T00:00:00Z",
      "protocol": "unknown",
      "indexer": "string",
      "message": "string",
      "movie": {
        "id": 0,
        "title": "string",
        "originalTitle": "string",
        "originalLanguage": {
          "id": 0,
          "name": "string"
        },
        "alternateTitles": [
          {
            "id": 0,
            "sourceType": "tmdb",
            "movieMetadataId": 0,
            "title": "string",
            "cleanTitle": "string"
          }
        ],
        "secondaryYear": 0,
        "secondaryYearSourceId": 0,
        "sortTitle": "string",
        "sizeOnDisk": 0,
        "status": "tba",
        "overview": "string",
        "inCinemas": "1970-01-01T00:00:00Z",
        "physicalRelease": "1970-01-01T00:00:00Z",
        "digitalRelease": "1970-01-01T00:00:00Z",
        "releaseDate": "1970-01-01T00:00:00Z",
        "physicalReleaseNote": "string",
        "images": [
          {
            "coverType": "unknown",
            "url": "string",
            "remoteUrl": "string"
          }
        ],
        "website": "string",
        "remotePoster": "string",
        "year": 0,
        "youTubeTrailerId": "string",
        "studio": "string",
        "path": "string",
        "qualityProfileId": 0,
        "hasFile": true,
        "movieFileId": 0,
        "monitored": true,
        "minimumAvailability": "tba",
        "isAvailable": true,
        "folderName": "string",
        "runtime": 0,
        "cleanTitle": "string",
        "imdbId": "string",
        "tmdbId": 0,
        "titleSlug": "string",
        "rootFolderPath": "string",
        "folder": "string",
        "certification": "string",
        "genres": [
          "string"
        ],
        "keywords": [
          "string"
        ],
        "tags": [
          0
        ],
        "added": "1970-01-01T00:00:00Z",
        "addOptions": {
          "ignoreEpisodesWithFiles": true,
          "ignoreEpisodesWithoutFiles": true,
          "monitor": "movieOnly",
          "searchForMovie": true,
          "addMethod": "manual"
        },
        "ratings": {
          "imdb": {
            "votes": 0,
            "value": 0,
            "type": "user"
          },
          "tmdb": {
            "votes": 0,
            "value": 0,
            "type": "user"
          },
          "metacritic": {
            "votes": 0,
            "value": 0,
            "type": "user"
          },
          "rottenTomatoes": {
            "votes": 0,
            "value": 0,
            "type": "user"
          },
          "trakt": {
            "votes": 0,
            "value": 0,
            "type": "user"
          }
        },
        "movieFile": {
          "id": 0,
          "movieId": 0,
          "relativePath": "string",
          "path": "string",
          "size": 0,
          "dateAdded": "1970-01-01T00:00:00Z",
          "sceneName": "string",
          "releaseGroup": "string",
          "edition": "string",
          "languages": [
            {
              "id": 0,
              "name": "string"
            }
          ],
          "quality": {
            "quality": {
              "id": 0,
              "name": "string",
              "source": "unknown",
              "resolution": 0,
              "modifier": "none"
            },
            "revision": {
              "version": 0,
              "real": 0,
              "isRepack": true
            }
          },
          "customFormats": [
            {
              "id": 0,
              "name": "string",
              "includeCustomFormatWhenRenaming": true,
              "specifications": [
                {
                  "id": 0,
                  "name": "string",
                  "implementation": "string",
                  "implementationName": "string",
                  "infoLink": "string",
                  "negate": true,
                  "required": true,
                  "fields": [
                    {
                      "order": 0,
                      "name": "string",
                      "label": "string",
                      "unit": "string",
                      "helpText": "string",
                      "helpTextWarning": "string",
                      "helpLink": "string",
                      "value": null,
                      "type": "string",
                      "advanced": true,
                      "selectOptions": [
                        {
                          "value": 0,
                          "name": "string",
                          "order": 0,
                          "hint": "string",
                          "dividerAfter": true
                        }
                      ],
                      "selectOptionsProviderAction": "string",
                      "section": "string",
                      "hidden": "string",
                      "privacy": "normal",
                      "placeholder": "string",
                      "isFloat": true
                    }
                  ],
                  "presets": [
                    {}
                  ]
                }
              ]
            }
          ],
          "customFormatScore": 0,
          "indexerFlags": 0,
          "mediaInfo": {
            "id": 0,
            "audioBitrate": 0,
            "audioChannels": 0,
            "audioCodec": "string",
            "audioLanguages": "string",
            "audioStreamCount": 0,
            "videoBitDepth": 0,
            "videoBitrate": 0,
            "videoCodec": "string",
            "videoFps": 0,
            "videoDynamicRange": "string",
            "videoDynamicRangeType": "string",
            "resolution": "string",
            "runTime": "string",
            "scanType": "string",
            "subtitles": "string"
          },
          "originalFilePath": "string",
          "qualityCutoffNotMet": true
        },
        "collection": {
          "title": "string",
          "tmdbId": 0
        },
        "popularity": 0,
        "lastSearchTime": "1970-01-01T00:00:00Z",
        "statistics": {
          "movieFileCount": 0,
          "sizeOnDisk": 0,
          "releaseGroups": [
            "string"
          ],
          "movieFileQualities": [
            {
              "id": 0,
              "name": "string",
              "source": "unknown",
              "resolution": 0,
              "modifier": "none"
            }
          ]
        }
      }
    }
  ]
}
```

<h3 id="getapiv3blocklist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[BlocklistResourcePagingResource](#schemablocklistresourcepagingresource)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## get/api/v3/blocklist/movie

> Code samples

```bash
curl http://localhost:7878/api/v3/blocklist/movie \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /api/v3/blocklist/movie`

<h3 id="getapiv3blocklistmovie-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|movieId|query|integer(int32)|false|none|

> Example responses

> 200 Response

```json
[
  {
    "id": 0,
    "movieId": 0,
    "sourceTitle": "string",
    "languages": [
      {
        "id": 0,
        "name": "string"
      }
    ],
    "quality": {
      "quality": {
        "id": 0,
        "name": "string",
        "source": "unknown",
        "resolution": 0,
        "modifier": "none"
      },
      "revision": {
        "version": 0,
        "real": 0,
        "isRepack": true
      }
    },
    "customFormats": [
      {
        "id": 0,
        "name": "string",
        "includeCustomFormatWhenRenaming": true,
        "specifications": [
          {
            "id": 0,
            "name": "string",
            "implementation": "string",
            "implementationName": "string",
            "infoLink": "string",
            "negate": true,
            "required": true,
            "fields": [
              {
                "order": 0,
                "name": "string",
                "label": "string",
                "unit": "string",
                "helpText": "string",
                "helpTextWarning": "string",
                "helpLink": "string",
                "value": null,
                "type": "string",
                "advanced": true,
                "selectOptions": [
                  {
                    "value": 0,
                    "name": "string",
                    "order": 0,
                    "hint": "string",
                    "dividerAfter": true
                  }
                ],
                "selectOptionsProviderAction": "string",
                "section": "string",
                "hidden": "string",
                "privacy": "normal",
                "placeholder": "string",
                "isFloat": true
              }
            ],
            "presets": [
              {}
            ]
          }
        ]
      }
    ],
    "date": "1970-01-01T00:00:00Z",
    "protocol": "unknown",
    "indexer": "string",
    "message": "string",
    "movie": {
      "id": 0,
      "title": "string",
      "originalTitle": "string",
      "originalLanguage": {
        "id": 0,
        "name": "string"
      },
      "alternateTitles": [
        {
          "id": 0,
          "sourceType": "tmdb",
          "movieMetadataId": 0,
          "title": "string",
          "cleanTitle": "string"
        }
      ],
      "secondaryYear": 0,
      "secondaryYearSourceId": 0,
      "sortTitle": "string",
      "sizeOnDisk": 0,
      "status": "tba",
      "overview": "string",
      "inCinemas": "1970-01-01T00:00:00Z",
      "physicalRelease": "1970-01-01T00:00:00Z",
      "digitalRelease": "1970-01-01T00:00:00Z",
      "releaseDate": "1970-01-01T00:00:00Z",
      "physicalReleaseNote": "string",
      "images": [
        {
          "coverType": "unknown",
          "url": "string",
          "remoteUrl": "string"
        }
      ],
      "website": "string",
      "remotePoster": "string",
      "year": 0,
      "youTubeTrailerId": "string",
      "studio": "string",
      "path": "string",
      "qualityProfileId": 0,
      "hasFile": true,
      "movieFileId": 0,
      "monitored": true,
      "minimumAvailability": "tba",
      "isAvailable": true,
      "folderName": "string",
      "runtime": 0,
      "cleanTitle": "string",
      "imdbId": "string",
      "tmdbId": 0,
      "titleSlug": "string",
      "rootFolderPath": "string",
      "folder": "string",
      "certification": "string",
      "genres": [
        "string"
      ],
      "keywords": [
        "string"
      ],
      "tags": [
        0
      ],
      "added": "1970-01-01T00:00:00Z",
      "addOptions": {
        "ignoreEpisodesWithFiles": true,
        "ignoreEpisodesWithoutFiles": true,
        "monitor": "movieOnly",
        "searchForMovie": true,
        "addMethod": "manual"
      },
      "ratings": {
        "imdb": {
          "votes": 0,
          "value": 0,
          "type": "user"
        },
        "tmdb": {
          "votes": 0,
          "value": 0,
          "type": "user"
        },
        "metacritic": {
          "votes": 0,
          "value": 0,
          "type": "user"
        },
        "rottenTomatoes": {
          "votes": 0,
          "value": 0,
          "type": "user"
        },
        "trakt": {
          "votes": 0,
          "value": 0,
          "type": "user"
        }
      },
      "movieFile": {
        "id": 0,
        "movieId": 0,
        "relativePath": "string",
        "path": "string",
        "size": 0,
        "dateAdded": "1970-01-01T00:00:00Z",
        "sceneName": "string",
        "releaseGroup": "string",
        "edition": "string",
        "languages": [
          {
            "id": 0,
            "name": "string"
          }
        ],
        "quality": {
          "quality": {
            "id": 0,
            "name": "string",
            "source": "unknown",
            "resolution": 0,
            "modifier": "none"
          },
          "revision": {
            "version": 0,
            "real": 0,
            "isRepack": true
          }
        },
        "customFormats": [
          {
            "id": 0,
            "name": "string",
            "includeCustomFormatWhenRenaming": true,
            "specifications": [
              {
                "id": 0,
                "name": "string",
                "implementation": "string",
                "implementationName": "string",
                "infoLink": "string",
                "negate": true,
                "required": true,
                "fields": [
                  {
                    "order": 0,
                    "name": "string",
                    "label": "string",
                    "unit": "string",
                    "helpText": "string",
                    "helpTextWarning": "string",
                    "helpLink": "string",
                    "value": null,
                    "type": "string",
                    "advanced": true,
                    "selectOptions": [
                      {
                        "value": 0,
                        "name": "string",
                        "order": 0,
                        "hint": "string",
                        "dividerAfter": true
                      }
                    ],
                    "selectOptionsProviderAction": "string",
                    "section": "string",
                    "hidden": "string",
                    "privacy": "normal",
                    "placeholder": "string",
                    "isFloat": true
                  }
                ],
                "presets": [
                  {}
                ]
              }
            ]
          }
        ],
        "customFormatScore": 0,
        "indexerFlags": 0,
        "mediaInfo": {
          "id": 0,
          "audioBitrate": 0,
          "audioChannels": 0,
          "audioCodec": "string",
          "audioLanguages": "string",
          "audioStreamCount": 0,
          "videoBitDepth": 0,
          "videoBitrate": 0,
          "videoCodec": "string",
          "videoFps": 0,
          "videoDynamicRange": "string",
          "videoDynamicRangeType": "string",
          "resolution": "string",
          "runTime": "string",
          "scanType": "string",
          "subtitles": "string"
        },
        "originalFilePath": "string",
        "qualityCutoffNotMet": true
      },
      "collection": {
        "title": "string",
        "tmdbId": 0
      },
      "popularity": 0,
      "lastSearchTime": "1970-01-01T00:00:00Z",
      "statistics": {
        "movieFileCount": 0,
        "sizeOnDisk": 0,
        "releaseGroups": [
          "string"
        ],
        "movieFileQualities": [
          {
            "id": 0,
            "name": "string",
            "source": "unknown",
            "resolution": 0,
            "modifier": "none"
          }
        ]
      }
    }
  }
]
```

<h3 id="getapiv3blocklistmovie-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="getapiv3blocklistmovie-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[BlocklistResource](#schemablocklistresource)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## delete/api/v3/blocklist/{id}

> Code samples

```bash
curl http://localhost:7878/api/v3/blocklist/0 \
  -X DELETE \
  -H "X-Api-Key: ${API_KEY}"
```

`DELETE /api/v3/blocklist/{id}`

<h3 id="deleteapiv3blocklistid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|none|

<h3 id="deleteapiv3blocklistid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## delete/api/v3/blocklist/bulk

> Code samples

```bash
curl http://localhost:7878/api/v3/blocklist/bulk \
  -X DELETE \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}" \
  -d '{
    "ids": [
      0
    ]
  }'
```

`DELETE /api/v3/blocklist/bulk`

> Body parameter

```json
{
  "ids": [
    0
  ]
}
```

<h3 id="deleteapiv3blocklistbulk-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[BlocklistBulkResource](#schemablocklistbulkresource)|false|none|
|» ids|body|[integer(int32)]|false|none|

> Example responses

> 200 Response

```json
null
```

<h3 id="deleteapiv3blocklistbulk-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

<h1 id="radarr-calendar">Calendar</h1>

## get/api/v3/calendar

> Code samples

```bash
curl http://localhost:7878/api/v3/calendar \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /api/v3/calendar`

<h3 id="getapiv3calendar-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|start|query|string(date-time)|false|none|
|end|query|string(date-time)|false|none|
|unmonitored|query|boolean|false|none|
|tags|query|string|false|none|

> Example responses

> 200 Response

```json
[
  {
    "id": 0,
    "title": "string",
    "originalTitle": "string",
    "originalLanguage": {
      "id": 0,
      "name": "string"
    },
    "alternateTitles": [
      {
        "id": 0,
        "sourceType": "tmdb",
        "movieMetadataId": 0,
        "title": "string",
        "cleanTitle": "string"
      }
    ],
    "secondaryYear": 0,
    "secondaryYearSourceId": 0,
    "sortTitle": "string",
    "sizeOnDisk": 0,
    "status": "tba",
    "overview": "string",
    "inCinemas": "1970-01-01T00:00:00Z",
    "physicalRelease": "1970-01-01T00:00:00Z",
    "digitalRelease": "1970-01-01T00:00:00Z",
    "releaseDate": "1970-01-01T00:00:00Z",
    "physicalReleaseNote": "string",
    "images": [
      {
        "coverType": "unknown",
        "url": "string",
        "remoteUrl": "string"
      }
    ],
    "website": "string",
    "remotePoster": "string",
    "year": 0,
    "youTubeTrailerId": "string",
    "studio": "string",
    "path": "string",
    "qualityProfileId": 0,
    "hasFile": true,
    "movieFileId": 0,
    "monitored": true,
    "minimumAvailability": "tba",
    "isAvailable": true,
    "folderName": "string",
    "runtime": 0,
    "cleanTitle": "string",
    "imdbId": "string",
    "tmdbId": 0,
    "titleSlug": "string",
    "rootFolderPath": "string",
    "folder": "string",
    "certification": "string",
    "genres": [
      "string"
    ],
    "keywords": [
      "string"
    ],
    "tags": [
      0
    ],
    "added": "1970-01-01T00:00:00Z",
    "addOptions": {
      "ignoreEpisodesWithFiles": true,
      "ignoreEpisodesWithoutFiles": true,
      "monitor": "movieOnly",
      "searchForMovie": true,
      "addMethod": "manual"
    },
    "ratings": {
      "imdb": {
        "votes": 0,
        "value": 0,
        "type": "user"
      },
      "tmdb": {
        "votes": 0,
        "value": 0,
        "type": "user"
      },
      "metacritic": {
        "votes": 0,
        "value": 0,
        "type": "user"
      },
      "rottenTomatoes": {
        "votes": 0,
        "value": 0,
        "type": "user"
      },
      "trakt": {
        "votes": 0,
        "value": 0,
        "type": "user"
      }
    },
    "movieFile": {
      "id": 0,
      "movieId": 0,
      "relativePath": "string",
      "path": "string",
      "size": 0,
      "dateAdded": "1970-01-01T00:00:00Z",
      "sceneName": "string",
      "releaseGroup": "string",
      "edition": "string",
      "languages": [
        {
          "id": 0,
          "name": "string"
        }
      ],
      "quality": {
        "quality": {
          "id": 0,
          "name": "string",
          "source": "unknown",
          "resolution": 0,
          "modifier": "none"
        },
        "revision": {
          "version": 0,
          "real": 0,
          "isRepack": true
        }
      },
      "customFormats": [
        {
          "id": 0,
          "name": "string",
          "includeCustomFormatWhenRenaming": true,
          "specifications": [
            {
              "id": 0,
              "name": "string",
              "implementation": "string",
              "implementationName": "string",
              "infoLink": "string",
              "negate": true,
              "required": true,
              "fields": [
                {
                  "order": 0,
                  "name": "string",
                  "label": "string",
                  "unit": "string",
                  "helpText": "string",
                  "helpTextWarning": "string",
                  "helpLink": "string",
                  "value": null,
                  "type": "string",
                  "advanced": true,
                  "selectOptions": [
                    {
                      "value": 0,
                      "name": "string",
                      "order": 0,
                      "hint": "string",
                      "dividerAfter": true
                    }
                  ],
                  "selectOptionsProviderAction": "string",
                  "section": "string",
                  "hidden": "string",
                  "privacy": "normal",
                  "placeholder": "string",
                  "isFloat": true
                }
              ],
              "presets": [
                {}
              ]
            }
          ]
        }
      ],
      "customFormatScore": 0,
      "indexerFlags": 0,
      "mediaInfo": {
        "id": 0,
        "audioBitrate": 0,
        "audioChannels": 0,
        "audioCodec": "string",
        "audioLanguages": "string",
        "audioStreamCount": 0,
        "videoBitDepth": 0,
        "videoBitrate": 0,
        "videoCodec": "string",
        "videoFps": 0,
        "videoDynamicRange": "string",
        "videoDynamicRangeType": "string",
        "resolution": "string",
        "runTime": "string",
        "scanType": "string",
        "subtitles": "string"
      },
      "originalFilePath": "string",
      "qualityCutoffNotMet": true
    },
    "collection": {
      "title": "string",
      "tmdbId": 0
    },
    "popularity": 0,
    "lastSearchTime": "1970-01-01T00:00:00Z",
    "statistics": {
      "movieFileCount": 0,
      "sizeOnDisk": 0,
      "releaseGroups": [
        "string"
      ],
      "movieFileQualities": [
        {
          "id": 0,
          "name": "string",
          "source": "unknown",
          "resolution": 0,
          "modifier": "none"
        }
      ]
    }
  }
]
```

<h3 id="getapiv3calendar-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="getapiv3calendar-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[MovieResource](#schemamovieresource)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

<h1 id="radarr-calendarfeed">CalendarFeed</h1>

## get/feed/v3/calendar/radarr.ics

> Code samples

```bash
curl http://localhost:7878/feed/v3/calendar/radarr.ics \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /feed/v3/calendar/radarr.ics`

<h3 id="getfeedv3calendarradarrics-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|pastDays|query|integer(int32)|false|none|
|futureDays|query|integer(int32)|false|none|
|tags|query|string|false|none|
|unmonitored|query|boolean|false|none|
|releaseTypes|query|[[CalendarReleaseType](#schemacalendarreleasetype)]|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|releaseTypes|cinemaRelease|
|releaseTypes|digitalRelease|
|releaseTypes|physicalRelease|

<h3 id="getfeedv3calendarradarrics-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

<h1 id="radarr-collection">Collection</h1>

## get/api/v3/collection

> Code samples

```bash
curl http://localhost:7878/api/v3/collection \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /api/v3/collection`

<h3 id="getapiv3collection-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|tmdbId|query|integer(int32)|false|none|

> Example responses

> 200 Response

```json
[
  {
    "id": 0,
    "title": "string",
    "sortTitle": "string",
    "tmdbId": 0,
    "images": [
      {
        "coverType": "unknown",
        "url": "string",
        "remoteUrl": "string"
      }
    ],
    "overview": "string",
    "monitored": true,
    "rootFolderPath": "string",
    "qualityProfileId": 0,
    "searchOnAdd": true,
    "minimumAvailability": "tba",
    "movies": [
      {
        "tmdbId": 0,
        "imdbId": "string",
        "title": "string",
        "cleanTitle": "string",
        "sortTitle": "string",
        "status": "tba",
        "overview": "string",
        "runtime": 0,
        "images": [
          {
            "coverType": "unknown",
            "url": "string",
            "remoteUrl": "string"
          }
        ],
        "year": 0,
        "ratings": {
          "imdb": {
            "votes": 0,
            "value": 0,
            "type": "user"
          },
          "tmdb": {
            "votes": 0,
            "value": 0,
            "type": "user"
          },
          "metacritic": {
            "votes": 0,
            "value": 0,
            "type": "user"
          },
          "rottenTomatoes": {
            "votes": 0,
            "value": 0,
            "type": "user"
          },
          "trakt": {
            "votes": 0,
            "value": 0,
            "type": "user"
          }
        },
        "genres": [
          "string"
        ],
        "folder": "string",
        "isExisting": true,
        "isExcluded": true
      }
    ],
    "missingMovies": 0,
    "tags": [
      0
    ]
  }
]
```

<h3 id="getapiv3collection-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="getapiv3collection-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[CollectionResource](#schemacollectionresource)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## put/api/v3/collection

> Code samples

```bash
curl http://localhost:7878/api/v3/collection \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}" \
  -d '{
    "collectionIds": [
      0
    ],
    "monitored": true,
    "monitorMovies": true,
    "searchOnAdd": true,
    "qualityProfileId": 0,
    "rootFolderPath": "string",
    "minimumAvailability": "tba"
  }'
```

`PUT /api/v3/collection`

> Body parameter

```json
{
  "collectionIds": [
    0
  ],
  "monitored": true,
  "monitorMovies": true,
  "searchOnAdd": true,
  "qualityProfileId": 0,
  "rootFolderPath": "string",
  "minimumAvailability": "tba"
}
```

<h3 id="putapiv3collection-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[CollectionUpdateResource](#schemacollectionupdateresource)|false|none|
|» collectionIds|body|[integer(int32)]|false|none|
|» monitored|body|boolean \| null|false|none|
|» monitorMovies|body|boolean \| null|false|none|
|» searchOnAdd|body|boolean \| null|false|none|
|» qualityProfileId|body|integer(int32) \| null|false|none|
|» rootFolderPath|body|string \| null|false|none|
|» minimumAvailability|body|[MovieStatusType](#schemamoviestatustype)|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» minimumAvailability|tba|
|» minimumAvailability|announced|
|» minimumAvailability|inCinemas|
|» minimumAvailability|released|
|» minimumAvailability|deleted|

> Example responses

> 200 Response

```json
[
  {
    "id": 0,
    "title": "string",
    "sortTitle": "string",
    "tmdbId": 0,
    "images": [
      {
        "coverType": "unknown",
        "url": "string",
        "remoteUrl": "string"
      }
    ],
    "overview": "string",
    "monitored": true,
    "rootFolderPath": "string",
    "qualityProfileId": 0,
    "searchOnAdd": true,
    "minimumAvailability": "tba",
    "movies": [
      {
        "tmdbId": 0,
        "imdbId": "string",
        "title": "string",
        "cleanTitle": "string",
        "sortTitle": "string",
        "status": "tba",
        "overview": "string",
        "runtime": 0,
        "images": [
          {
            "coverType": "unknown",
            "url": "string",
            "remoteUrl": "string"
          }
        ],
        "year": 0,
        "ratings": {
          "imdb": {
            "votes": 0,
            "value": 0,
            "type": "user"
          },
          "tmdb": {
            "votes": 0,
            "value": 0,
            "type": "user"
          },
          "metacritic": {
            "votes": 0,
            "value": 0,
            "type": "user"
          },
          "rottenTomatoes": {
            "votes": 0,
            "value": 0,
            "type": "user"
          },
          "trakt": {
            "votes": 0,
            "value": 0,
            "type": "user"
          }
        },
        "genres": [
          "string"
        ],
        "folder": "string",
        "isExisting": true,
        "isExcluded": true
      }
    ],
    "missingMovies": 0,
    "tags": [
      0
    ]
  }
]
```

<h3 id="putapiv3collection-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="putapiv3collection-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[CollectionResource](#schemacollectionresource)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## get/api/v3/collection/{id}

> Code samples

```bash
curl http://localhost:7878/api/v3/collection/0 \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /api/v3/collection/{id}`

<h3 id="getapiv3collectionid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|none|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "title": "string",
  "sortTitle": "string",
  "tmdbId": 0,
  "images": [
    {
      "coverType": "unknown",
      "url": "string",
      "remoteUrl": "string"
    }
  ],
  "overview": "string",
  "monitored": true,
  "rootFolderPath": "string",
  "qualityProfileId": 0,
  "searchOnAdd": true,
  "minimumAvailability": "tba",
  "movies": [
    {
      "tmdbId": 0,
      "imdbId": "string",
      "title": "string",
      "cleanTitle": "string",
      "sortTitle": "string",
      "status": "tba",
      "overview": "string",
      "runtime": 0,
      "images": [
        {
          "coverType": "unknown",
          "url": "string",
          "remoteUrl": "string"
        }
      ],
      "year": 0,
      "ratings": {
        "imdb": {
          "votes": 0,
          "value": 0,
          "type": "user"
        },
        "tmdb": {
          "votes": 0,
          "value": 0,
          "type": "user"
        },
        "metacritic": {
          "votes": 0,
          "value": 0,
          "type": "user"
        },
        "rottenTomatoes": {
          "votes": 0,
          "value": 0,
          "type": "user"
        },
        "trakt": {
          "votes": 0,
          "value": 0,
          "type": "user"
        }
      },
      "genres": [
        "string"
      ],
      "folder": "string",
      "isExisting": true,
      "isExcluded": true
    }
  ],
  "missingMovies": 0,
  "tags": [
    0
  ]
}
```

<h3 id="getapiv3collectionid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[CollectionResource](#schemacollectionresource)|
|404|Not Found|Not Found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## put/api/v3/collection/{id}

> Code samples

```bash
curl http://localhost:7878/api/v3/collection/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}" \
  -d '{
    "id": 0,
    "title": "string",
    "sortTitle": "string",
    "tmdbId": 0,
    "images": [
      {
        "coverType": "unknown",
        "url": "string",
        "remoteUrl": "string"
      }
    ],
    "overview": "string",
    "monitored": true,
    "rootFolderPath": "string",
    "qualityProfileId": 0,
    "searchOnAdd": true,
    "minimumAvailability": "tba",
    "movies": [
      {
        "tmdbId": 0,
        "imdbId": "string",
        "title": "string",
        "cleanTitle": "string",
        "sortTitle": "string",
        "status": "tba",
        "overview": "string",
        "runtime": 0,
        "images": [
          {
            "coverType": "unknown",
            "url": "string",
            "remoteUrl": "string"
          }
        ],
        "year": 0,
        "ratings": {
          "imdb": {
            "votes": 0,
            "value": 0,
            "type": "user"
          },
          "tmdb": {
            "votes": 0,
            "value": 0,
            "type": "user"
          },
          "metacritic": {
            "votes": 0,
            "value": 0,
            "type": "user"
          },
          "rottenTomatoes": {
            "votes": 0,
            "value": 0,
            "type": "user"
          },
          "trakt": {
            "votes": 0,
            "value": 0,
            "type": "user"
          }
        },
        "genres": [
          "string"
        ],
        "folder": "string",
        "isExisting": true,
        "isExcluded": true
      }
    ],
    "missingMovies": 0,
    "tags": [
      0
    ]
  }'
```

`PUT /api/v3/collection/{id}`

> Body parameter

```json
{
  "id": 0,
  "title": "string",
  "sortTitle": "string",
  "tmdbId": 0,
  "images": [
    {
      "coverType": "unknown",
      "url": "string",
      "remoteUrl": "string"
    }
  ],
  "overview": "string",
  "monitored": true,
  "rootFolderPath": "string",
  "qualityProfileId": 0,
  "searchOnAdd": true,
  "minimumAvailability": "tba",
  "movies": [
    {
      "tmdbId": 0,
      "imdbId": "string",
      "title": "string",
      "cleanTitle": "string",
      "sortTitle": "string",
      "status": "tba",
      "overview": "string",
      "runtime": 0,
      "images": [
        {
          "coverType": "unknown",
          "url": "string",
          "remoteUrl": "string"
        }
      ],
      "year": 0,
      "ratings": {
        "imdb": {
          "votes": 0,
          "value": 0,
          "type": "user"
        },
        "tmdb": {
          "votes": 0,
          "value": 0,
          "type": "user"
        },
        "metacritic": {
          "votes": 0,
          "value": 0,
          "type": "user"
        },
        "rottenTomatoes": {
          "votes": 0,
          "value": 0,
          "type": "user"
        },
        "trakt": {
          "votes": 0,
          "value": 0,
          "type": "user"
        }
      },
      "genres": [
        "string"
      ],
      "folder": "string",
      "isExisting": true,
      "isExcluded": true
    }
  ],
  "missingMovies": 0,
  "tags": [
    0
  ]
}
```

<h3 id="putapiv3collectionid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|body|body|[CollectionResource](#schemacollectionresource)|false|none|
|» id|body|integer(int32)|false|none|
|» title|body|string \| null|false|none|
|» sortTitle|body|string \| null|false|none|
|» tmdbId|body|integer(int32)|false|none|
|» images|body|[[MediaCover](#schemamediacover)]|false|none|
|» overview|body|string \| null|false|none|
|» monitored|body|boolean|false|none|
|» rootFolderPath|body|string \| null|false|none|
|» qualityProfileId|body|integer(int32)|false|none|
|» searchOnAdd|body|boolean|false|none|
|» minimumAvailability|body|[MovieStatusType](#schemamoviestatustype)|false|none|
|» movies|body|[[CollectionMovieResource](#schemacollectionmovieresource)]|false|none|
|» missingMovies|body|integer(int32)|false|none|
|» tags|body|[integer(int32)]|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» minimumAvailability|tba|
|» minimumAvailability|announced|
|» minimumAvailability|inCinemas|
|» minimumAvailability|released|
|» minimumAvailability|deleted|

> Example responses

> 202 Response

```json
{
  "id": 0,
  "title": "string",
  "sortTitle": "string",
  "tmdbId": 0,
  "images": [
    {
      "coverType": "unknown",
      "url": "string",
      "remoteUrl": "string"
    }
  ],
  "overview": "string",
  "monitored": true,
  "rootFolderPath": "string",
  "qualityProfileId": 0,
  "searchOnAdd": true,
  "minimumAvailability": "tba",
  "movies": [
    {
      "tmdbId": 0,
      "imdbId": "string",
      "title": "string",
      "cleanTitle": "string",
      "sortTitle": "string",
      "status": "tba",
      "overview": "string",
      "runtime": 0,
      "images": [
        {
          "coverType": "unknown",
          "url": "string",
          "remoteUrl": "string"
        }
      ],
      "year": 0,
      "ratings": {
        "imdb": {
          "votes": 0,
          "value": 0,
          "type": "user"
        },
        "tmdb": {
          "votes": 0,
          "value": 0,
          "type": "user"
        },
        "metacritic": {
          "votes": 0,
          "value": 0,
          "type": "user"
        },
        "rottenTomatoes": {
          "votes": 0,
          "value": 0,
          "type": "user"
        },
        "trakt": {
          "votes": 0,
          "value": 0,
          "type": "user"
        }
      },
      "genres": [
        "string"
      ],
      "folder": "string",
      "isExisting": true,
      "isExcluded": true
    }
  ],
  "missingMovies": 0,
  "tags": [
    0
  ]
}
```

<h3 id="putapiv3collectionid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|Accepted|[CollectionResource](#schemacollectionresource)|
|404|Not Found|Not Found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

<h1 id="radarr-command">Command</h1>

## get/api/v3/command

> Code samples

```bash
curl http://localhost:7878/api/v3/command \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /api/v3/command`

> Example responses

> 200 Response

```json
[
  {
    "id": 0,
    "name": "string",
    "commandName": "string",
    "message": "string",
    "body": {
      "sendUpdatesToClient": true,
      "updateScheduledTask": true,
      "completionMessage": "string",
      "requiresDiskAccess": true,
      "isExclusive": true,
      "isTypeExclusive": true,
      "isLongRunning": true,
      "name": "string",
      "lastExecutionTime": "1970-01-01T00:00:00Z",
      "lastStartTime": "1970-01-01T00:00:00Z",
      "trigger": "unspecified",
      "suppressMessages": true,
      "clientUserAgent": "string"
    },
    "priority": "normal",
    "status": "queued",
    "result": "unknown",
    "queued": "1970-01-01T00:00:00Z",
    "started": "1970-01-01T00:00:00Z",
    "ended": "1970-01-01T00:00:00Z",
    "duration": "string",
    "exception": "string",
    "trigger": "unspecified",
    "clientUserAgent": "string",
    "stateChangeTime": "1970-01-01T00:00:00Z",
    "sendUpdatesToClient": true,
    "updateScheduledTask": true,
    "lastExecutionTime": "1970-01-01T00:00:00Z"
  }
]
```

<h3 id="getapiv3command-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="getapiv3command-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[CommandResource](#schemacommandresource)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## post/api/v3/command

> Code samples

```bash
curl http://localhost:7878/api/v3/command \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}" \
  -d '{
    "id": 0,
    "name": "string",
    "commandName": "string",
    "message": "string",
    "body": {
      "sendUpdatesToClient": true,
      "lastExecutionTime": "1970-01-01T00:00:00Z",
      "lastStartTime": "1970-01-01T00:00:00Z",
      "trigger": "unspecified",
      "suppressMessages": true,
      "clientUserAgent": "string"
    },
    "priority": "normal",
    "status": "queued",
    "result": "unknown",
    "queued": "1970-01-01T00:00:00Z",
    "started": "1970-01-01T00:00:00Z",
    "ended": "1970-01-01T00:00:00Z",
    "duration": "string",
    "exception": "string",
    "trigger": "unspecified",
    "clientUserAgent": "string",
    "stateChangeTime": "1970-01-01T00:00:00Z",
    "sendUpdatesToClient": true,
    "updateScheduledTask": true,
    "lastExecutionTime": "1970-01-01T00:00:00Z"
  }'
```

`POST /api/v3/command`

> Body parameter

```json
{
  "id": 0,
  "name": "string",
  "commandName": "string",
  "message": "string",
  "body": {
    "sendUpdatesToClient": true,
    "lastExecutionTime": "1970-01-01T00:00:00Z",
    "lastStartTime": "1970-01-01T00:00:00Z",
    "trigger": "unspecified",
    "suppressMessages": true,
    "clientUserAgent": "string"
  },
  "priority": "normal",
  "status": "queued",
  "result": "unknown",
  "queued": "1970-01-01T00:00:00Z",
  "started": "1970-01-01T00:00:00Z",
  "ended": "1970-01-01T00:00:00Z",
  "duration": "string",
  "exception": "string",
  "trigger": "unspecified",
  "clientUserAgent": "string",
  "stateChangeTime": "1970-01-01T00:00:00Z",
  "sendUpdatesToClient": true,
  "updateScheduledTask": true,
  "lastExecutionTime": "1970-01-01T00:00:00Z"
}
```

<h3 id="postapiv3command-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[CommandResource](#schemacommandresource)|false|none|
|» id|body|integer(int32)|false|none|
|» name|body|string \| null|false|none|
|» commandName|body|string \| null|false|none|
|» message|body|string \| null|false|none|
|» body|body|[Command](#schemacommand)|false|none|
|» priority|body|[CommandPriority](#schemacommandpriority)|false|none|
|» status|body|[CommandStatus](#schemacommandstatus)|false|none|
|» result|body|[CommandResult](#schemacommandresult)|false|none|
|» queued|body|string(date-time)|false|none|
|» started|body|string(date-time) \| null|false|none|
|» ended|body|string(date-time) \| null|false|none|
|» duration|body|string(date-span) \| null|false|none|
|» exception|body|string \| null|false|none|
|» trigger|body|[CommandTrigger](#schemacommandtrigger)|false|none|
|» clientUserAgent|body|string \| null|false|none|
|» stateChangeTime|body|string(date-time) \| null|false|none|
|» sendUpdatesToClient|body|boolean|false|none|
|» updateScheduledTask|body|boolean|false|none|
|» lastExecutionTime|body|string(date-time) \| null|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» priority|normal|
|» priority|high|
|» priority|low|
|» status|queued|
|» status|started|
|» status|completed|
|» status|failed|
|» status|aborted|
|» status|cancelled|
|» status|orphaned|
|» result|unknown|
|» result|successful|
|» result|unsuccessful|
|» trigger|unspecified|
|» trigger|manual|
|» trigger|scheduled|

> Example responses

> 201 Response

```json
{
  "id": 0,
  "name": "string",
  "commandName": "string",
  "message": "string",
  "body": {
    "sendUpdatesToClient": true,
    "updateScheduledTask": true,
    "completionMessage": "string",
    "requiresDiskAccess": true,
    "isExclusive": true,
    "isTypeExclusive": true,
    "isLongRunning": true,
    "name": "string",
    "lastExecutionTime": "1970-01-01T00:00:00Z",
    "lastStartTime": "1970-01-01T00:00:00Z",
    "trigger": "unspecified",
    "suppressMessages": true,
    "clientUserAgent": "string"
  },
  "priority": "normal",
  "status": "queued",
  "result": "unknown",
  "queued": "1970-01-01T00:00:00Z",
  "started": "1970-01-01T00:00:00Z",
  "ended": "1970-01-01T00:00:00Z",
  "duration": "string",
  "exception": "string",
  "trigger": "unspecified",
  "clientUserAgent": "string",
  "stateChangeTime": "1970-01-01T00:00:00Z",
  "sendUpdatesToClient": true,
  "updateScheduledTask": true,
  "lastExecutionTime": "1970-01-01T00:00:00Z"
}
```

<h3 id="postapiv3command-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Created|[CommandResource](#schemacommandresource)|
|404|Not Found|Not Found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## get/api/v3/command/{id}

> Code samples

```bash
curl http://localhost:7878/api/v3/command/0 \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /api/v3/command/{id}`

<h3 id="getapiv3commandid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|none|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "name": "string",
  "commandName": "string",
  "message": "string",
  "body": {
    "sendUpdatesToClient": true,
    "updateScheduledTask": true,
    "completionMessage": "string",
    "requiresDiskAccess": true,
    "isExclusive": true,
    "isTypeExclusive": true,
    "isLongRunning": true,
    "name": "string",
    "lastExecutionTime": "1970-01-01T00:00:00Z",
    "lastStartTime": "1970-01-01T00:00:00Z",
    "trigger": "unspecified",
    "suppressMessages": true,
    "clientUserAgent": "string"
  },
  "priority": "normal",
  "status": "queued",
  "result": "unknown",
  "queued": "1970-01-01T00:00:00Z",
  "started": "1970-01-01T00:00:00Z",
  "ended": "1970-01-01T00:00:00Z",
  "duration": "string",
  "exception": "string",
  "trigger": "unspecified",
  "clientUserAgent": "string",
  "stateChangeTime": "1970-01-01T00:00:00Z",
  "sendUpdatesToClient": true,
  "updateScheduledTask": true,
  "lastExecutionTime": "1970-01-01T00:00:00Z"
}
```

<h3 id="getapiv3commandid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[CommandResource](#schemacommandresource)|
|404|Not Found|Not Found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## delete/api/v3/command/{id}

> Code samples

```bash
curl http://localhost:7878/api/v3/command/0 \
  -X DELETE \
  -H "X-Api-Key: ${API_KEY}"
```

`DELETE /api/v3/command/{id}`

<h3 id="deleteapiv3commandid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|none|

<h3 id="deleteapiv3commandid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

<h1 id="radarr-credit">Credit</h1>

## get/api/v3/credit

> Code samples

```bash
curl http://localhost:7878/api/v3/credit \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /api/v3/credit`

<h3 id="getapiv3credit-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|movieId|query|integer(int32)|false|none|
|movieMetadataId|query|integer(int32)|false|none|

> Example responses

> 200 Response

```json
[
  {
    "id": 0,
    "personName": "string",
    "creditTmdbId": "string",
    "personTmdbId": 0,
    "movieMetadataId": 0,
    "images": [
      {
        "coverType": "unknown",
        "url": "string",
        "remoteUrl": "string"
      }
    ],
    "department": "string",
    "job": "string",
    "character": "string",
    "order": 0,
    "type": "cast"
  }
]
```

<h3 id="getapiv3credit-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="getapiv3credit-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[CreditResource](#schemacreditresource)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## get/api/v3/credit/{id}

> Code samples

```bash
curl http://localhost:7878/api/v3/credit/0 \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /api/v3/credit/{id}`

<h3 id="getapiv3creditid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|none|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "personName": "string",
  "creditTmdbId": "string",
  "personTmdbId": 0,
  "movieMetadataId": 0,
  "images": [
    {
      "coverType": "unknown",
      "url": "string",
      "remoteUrl": "string"
    }
  ],
  "department": "string",
  "job": "string",
  "character": "string",
  "order": 0,
  "type": "cast"
}
```

<h3 id="getapiv3creditid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[CreditResource](#schemacreditresource)|
|404|Not Found|Not Found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

<h1 id="radarr-customfilter">CustomFilter</h1>

## get/api/v3/customfilter

> Code samples

```bash
curl http://localhost:7878/api/v3/customfilter \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /api/v3/customfilter`

> Example responses

> 200 Response

```json
[
  {
    "id": 0,
    "type": "string",
    "label": "string",
    "filters": [
      {
        "property1": null,
        "property2": null
      }
    ]
  }
]
```

<h3 id="getapiv3customfilter-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="getapiv3customfilter-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[CustomFilterResource](#schemacustomfilterresource)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## post/api/v3/customfilter

> Code samples

```bash
curl http://localhost:7878/api/v3/customfilter \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}" \
  -d '{
    "id": 0,
    "type": "string",
    "label": "string",
    "filters": [
      {
        "property1": null,
        "property2": null
      }
    ]
  }'
```

`POST /api/v3/customfilter`

> Body parameter

```json
{
  "id": 0,
  "type": "string",
  "label": "string",
  "filters": [
    {
      "property1": null,
      "property2": null
    }
  ]
}
```

<h3 id="postapiv3customfilter-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[CustomFilterResource](#schemacustomfilterresource)|false|none|
|» id|body|integer(int32)|false|none|
|» type|body|string \| null|false|none|
|» label|body|string \| null|false|none|
|» filters|body|[object]|false|none|
|» » **additionalProperties**|body|object|false|none|

> Example responses

> 201 Response

```json
{
  "id": 0,
  "type": "string",
  "label": "string",
  "filters": [
    {
      "property1": null,
      "property2": null
    }
  ]
}
```

<h3 id="postapiv3customfilter-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Created|[CustomFilterResource](#schemacustomfilterresource)|
|404|Not Found|Not Found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## get/api/v3/customfilter/{id}

> Code samples

```bash
curl http://localhost:7878/api/v3/customfilter/0 \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /api/v3/customfilter/{id}`

<h3 id="getapiv3customfilterid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|none|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "type": "string",
  "label": "string",
  "filters": [
    {
      "property1": null,
      "property2": null
    }
  ]
}
```

<h3 id="getapiv3customfilterid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[CustomFilterResource](#schemacustomfilterresource)|
|404|Not Found|Not Found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## put/api/v3/customfilter/{id}

> Code samples

```bash
curl http://localhost:7878/api/v3/customfilter/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}" \
  -d '{
    "id": 0,
    "type": "string",
    "label": "string",
    "filters": [
      {
        "property1": null,
        "property2": null
      }
    ]
  }'
```

`PUT /api/v3/customfilter/{id}`

> Body parameter

```json
{
  "id": 0,
  "type": "string",
  "label": "string",
  "filters": [
    {
      "property1": null,
      "property2": null
    }
  ]
}
```

<h3 id="putapiv3customfilterid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|body|body|[CustomFilterResource](#schemacustomfilterresource)|false|none|
|» id|body|integer(int32)|false|none|
|» type|body|string \| null|false|none|
|» label|body|string \| null|false|none|
|» filters|body|[object]|false|none|
|» » **additionalProperties**|body|object|false|none|

> Example responses

> 202 Response

```json
{
  "id": 0,
  "type": "string",
  "label": "string",
  "filters": [
    {
      "property1": null,
      "property2": null
    }
  ]
}
```

<h3 id="putapiv3customfilterid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|Accepted|[CustomFilterResource](#schemacustomfilterresource)|
|404|Not Found|Not Found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## delete/api/v3/customfilter/{id}

> Code samples

```bash
curl http://localhost:7878/api/v3/customfilter/0 \
  -X DELETE \
  -H "X-Api-Key: ${API_KEY}"
```

`DELETE /api/v3/customfilter/{id}`

<h3 id="deleteapiv3customfilterid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|none|

<h3 id="deleteapiv3customfilterid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

<h1 id="radarr-customformat">CustomFormat</h1>

## get/api/v3/customformat

> Code samples

```bash
curl http://localhost:7878/api/v3/customformat \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /api/v3/customformat`

> Example responses

> 200 Response

```json
[
  {
    "id": 0,
    "name": "string",
    "includeCustomFormatWhenRenaming": true,
    "specifications": [
      {
        "id": 0,
        "name": "string",
        "implementation": "string",
        "implementationName": "string",
        "infoLink": "string",
        "negate": true,
        "required": true,
        "fields": [
          {
            "order": 0,
            "name": "string",
            "label": "string",
            "unit": "string",
            "helpText": "string",
            "helpTextWarning": "string",
            "helpLink": "string",
            "value": null,
            "type": "string",
            "advanced": true,
            "selectOptions": [
              {
                "value": 0,
                "name": "string",
                "order": 0,
                "hint": "string",
                "dividerAfter": true
              }
            ],
            "selectOptionsProviderAction": "string",
            "section": "string",
            "hidden": "string",
            "privacy": "normal",
            "placeholder": "string",
            "isFloat": true
          }
        ],
        "presets": [
          {}
        ]
      }
    ]
  }
]
```

<h3 id="getapiv3customformat-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="getapiv3customformat-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[CustomFormatResource](#schemacustomformatresource)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## post/api/v3/customformat

> Code samples

```bash
curl http://localhost:7878/api/v3/customformat \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}" \
  -d '{
    "id": 0,
    "name": "string",
    "includeCustomFormatWhenRenaming": true,
    "specifications": [
      {
        "id": 0,
        "name": "string",
        "implementation": "string",
        "implementationName": "string",
        "infoLink": "string",
        "negate": true,
        "required": true,
        "fields": [
          {
            "order": 0,
            "name": "string",
            "label": "string",
            "unit": "string",
            "helpText": "string",
            "helpTextWarning": "string",
            "helpLink": "string",
            "value": null,
            "type": "string",
            "advanced": true,
            "selectOptions": [
              {
                "value": 0,
                "name": "string",
                "order": 0,
                "hint": "string",
                "dividerAfter": true
              }
            ],
            "selectOptionsProviderAction": "string",
            "section": "string",
            "hidden": "string",
            "privacy": "normal",
            "placeholder": "string",
            "isFloat": true
          }
        ],
        "presets": [
          {}
        ]
      }
    ]
  }'
```

`POST /api/v3/customformat`

> Body parameter

```json
{
  "id": 0,
  "name": "string",
  "includeCustomFormatWhenRenaming": true,
  "specifications": [
    {
      "id": 0,
      "name": "string",
      "implementation": "string",
      "implementationName": "string",
      "infoLink": "string",
      "negate": true,
      "required": true,
      "fields": [
        {
          "order": 0,
          "name": "string",
          "label": "string",
          "unit": "string",
          "helpText": "string",
          "helpTextWarning": "string",
          "helpLink": "string",
          "value": null,
          "type": "string",
          "advanced": true,
          "selectOptions": [
            {
              "value": 0,
              "name": "string",
              "order": 0,
              "hint": "string",
              "dividerAfter": true
            }
          ],
          "selectOptionsProviderAction": "string",
          "section": "string",
          "hidden": "string",
          "privacy": "normal",
          "placeholder": "string",
          "isFloat": true
        }
      ],
      "presets": [
        {}
      ]
    }
  ]
}
```

<h3 id="postapiv3customformat-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[CustomFormatResource](#schemacustomformatresource)|false|none|
|» id|body|integer(int32)|false|none|
|» name|body|string \| null|false|none|
|» includeCustomFormatWhenRenaming|body|boolean \| null|false|none|
|» specifications|body|[[CustomFormatSpecificationSchema](#schemacustomformatspecificationschema)]|false|none|

> Example responses

> 201 Response

```json
{
  "id": 0,
  "name": "string",
  "includeCustomFormatWhenRenaming": true,
  "specifications": [
    {
      "id": 0,
      "name": "string",
      "implementation": "string",
      "implementationName": "string",
      "infoLink": "string",
      "negate": true,
      "required": true,
      "fields": [
        {
          "order": 0,
          "name": "string",
          "label": "string",
          "unit": "string",
          "helpText": "string",
          "helpTextWarning": "string",
          "helpLink": "string",
          "value": null,
          "type": "string",
          "advanced": true,
          "selectOptions": [
            {
              "value": 0,
              "name": "string",
              "order": 0,
              "hint": "string",
              "dividerAfter": true
            }
          ],
          "selectOptionsProviderAction": "string",
          "section": "string",
          "hidden": "string",
          "privacy": "normal",
          "placeholder": "string",
          "isFloat": true
        }
      ],
      "presets": [
        {}
      ]
    }
  ]
}
```

<h3 id="postapiv3customformat-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Created|[CustomFormatResource](#schemacustomformatresource)|
|404|Not Found|Not Found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## get/api/v3/customformat/{id}

> Code samples

```bash
curl http://localhost:7878/api/v3/customformat/0 \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /api/v3/customformat/{id}`

<h3 id="getapiv3customformatid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|none|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "name": "string",
  "includeCustomFormatWhenRenaming": true,
  "specifications": [
    {
      "id": 0,
      "name": "string",
      "implementation": "string",
      "implementationName": "string",
      "infoLink": "string",
      "negate": true,
      "required": true,
      "fields": [
        {
          "order": 0,
          "name": "string",
          "label": "string",
          "unit": "string",
          "helpText": "string",
          "helpTextWarning": "string",
          "helpLink": "string",
          "value": null,
          "type": "string",
          "advanced": true,
          "selectOptions": [
            {
              "value": 0,
              "name": "string",
              "order": 0,
              "hint": "string",
              "dividerAfter": true
            }
          ],
          "selectOptionsProviderAction": "string",
          "section": "string",
          "hidden": "string",
          "privacy": "normal",
          "placeholder": "string",
          "isFloat": true
        }
      ],
      "presets": [
        {}
      ]
    }
  ]
}
```

<h3 id="getapiv3customformatid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[CustomFormatResource](#schemacustomformatresource)|
|404|Not Found|Not Found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## put/api/v3/customformat/{id}

> Code samples

```bash
curl http://localhost:7878/api/v3/customformat/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}" \
  -d '{
    "id": 0,
    "name": "string",
    "includeCustomFormatWhenRenaming": true,
    "specifications": [
      {
        "id": 0,
        "name": "string",
        "implementation": "string",
        "implementationName": "string",
        "infoLink": "string",
        "negate": true,
        "required": true,
        "fields": [
          {
            "order": 0,
            "name": "string",
            "label": "string",
            "unit": "string",
            "helpText": "string",
            "helpTextWarning": "string",
            "helpLink": "string",
            "value": null,
            "type": "string",
            "advanced": true,
            "selectOptions": [
              {
                "value": 0,
                "name": "string",
                "order": 0,
                "hint": "string",
                "dividerAfter": true
              }
            ],
            "selectOptionsProviderAction": "string",
            "section": "string",
            "hidden": "string",
            "privacy": "normal",
            "placeholder": "string",
            "isFloat": true
          }
        ],
        "presets": [
          {}
        ]
      }
    ]
  }'
```

`PUT /api/v3/customformat/{id}`

> Body parameter

```json
{
  "id": 0,
  "name": "string",
  "includeCustomFormatWhenRenaming": true,
  "specifications": [
    {
      "id": 0,
      "name": "string",
      "implementation": "string",
      "implementationName": "string",
      "infoLink": "string",
      "negate": true,
      "required": true,
      "fields": [
        {
          "order": 0,
          "name": "string",
          "label": "string",
          "unit": "string",
          "helpText": "string",
          "helpTextWarning": "string",
          "helpLink": "string",
          "value": null,
          "type": "string",
          "advanced": true,
          "selectOptions": [
            {
              "value": 0,
              "name": "string",
              "order": 0,
              "hint": "string",
              "dividerAfter": true
            }
          ],
          "selectOptionsProviderAction": "string",
          "section": "string",
          "hidden": "string",
          "privacy": "normal",
          "placeholder": "string",
          "isFloat": true
        }
      ],
      "presets": [
        {}
      ]
    }
  ]
}
```

<h3 id="putapiv3customformatid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|body|body|[CustomFormatResource](#schemacustomformatresource)|false|none|
|» id|body|integer(int32)|false|none|
|» name|body|string \| null|false|none|
|» includeCustomFormatWhenRenaming|body|boolean \| null|false|none|
|» specifications|body|[[CustomFormatSpecificationSchema](#schemacustomformatspecificationschema)]|false|none|

> Example responses

> 202 Response

```json
{
  "id": 0,
  "name": "string",
  "includeCustomFormatWhenRenaming": true,
  "specifications": [
    {
      "id": 0,
      "name": "string",
      "implementation": "string",
      "implementationName": "string",
      "infoLink": "string",
      "negate": true,
      "required": true,
      "fields": [
        {
          "order": 0,
          "name": "string",
          "label": "string",
          "unit": "string",
          "helpText": "string",
          "helpTextWarning": "string",
          "helpLink": "string",
          "value": null,
          "type": "string",
          "advanced": true,
          "selectOptions": [
            {
              "value": 0,
              "name": "string",
              "order": 0,
              "hint": "string",
              "dividerAfter": true
            }
          ],
          "selectOptionsProviderAction": "string",
          "section": "string",
          "hidden": "string",
          "privacy": "normal",
          "placeholder": "string",
          "isFloat": true
        }
      ],
      "presets": [
        {}
      ]
    }
  ]
}
```

<h3 id="putapiv3customformatid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|Accepted|[CustomFormatResource](#schemacustomformatresource)|
|404|Not Found|Not Found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## delete/api/v3/customformat/{id}

> Code samples

```bash
curl http://localhost:7878/api/v3/customformat/0 \
  -X DELETE \
  -H "X-Api-Key: ${API_KEY}"
```

`DELETE /api/v3/customformat/{id}`

<h3 id="deleteapiv3customformatid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|none|

<h3 id="deleteapiv3customformatid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## put/api/v3/customformat/bulk

> Code samples

```bash
curl http://localhost:7878/api/v3/customformat/bulk \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}" \
  -d '{
    "ids": [
      0
    ],
    "includeCustomFormatWhenRenaming": true
  }'
```

`PUT /api/v3/customformat/bulk`

> Body parameter

```json
{
  "ids": [
    0
  ],
  "includeCustomFormatWhenRenaming": true
}
```

<h3 id="putapiv3customformatbulk-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[CustomFormatBulkResource](#schemacustomformatbulkresource)|false|none|
|» ids|body|[integer(int32)]|false|none|
|» includeCustomFormatWhenRenaming|body|boolean \| null|false|none|

> Example responses

> 200 Response

```json
[
  {
    "id": 0,
    "name": "string",
    "includeCustomFormatWhenRenaming": true,
    "specifications": [
      {
        "id": 0,
        "name": "string",
        "implementation": "string",
        "implementationName": "string",
        "infoLink": "string",
        "negate": true,
        "required": true,
        "fields": [
          {
            "order": 0,
            "name": "string",
            "label": "string",
            "unit": "string",
            "helpText": "string",
            "helpTextWarning": "string",
            "helpLink": "string",
            "value": null,
            "type": "string",
            "advanced": true,
            "selectOptions": [
              {
                "value": 0,
                "name": "string",
                "order": 0,
                "hint": "string",
                "dividerAfter": true
              }
            ],
            "selectOptionsProviderAction": "string",
            "section": "string",
            "hidden": "string",
            "privacy": "normal",
            "placeholder": "string",
            "isFloat": true
          }
        ],
        "presets": [
          {}
        ]
      }
    ]
  }
]
```

<h3 id="putapiv3customformatbulk-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|None|

<h3 id="putapiv3customformatbulk-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[CustomFormatResource](#schemacustomformatresource)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## delete/api/v3/customformat/bulk

> Code samples

```bash
curl http://localhost:7878/api/v3/customformat/bulk \
  -X DELETE \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}" \
  -d '{
    "ids": [
      0
    ],
    "includeCustomFormatWhenRenaming": true
  }'
```

`DELETE /api/v3/customformat/bulk`

> Body parameter

```json
{
  "ids": [
    0
  ],
  "includeCustomFormatWhenRenaming": true
}
```

<h3 id="deleteapiv3customformatbulk-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[CustomFormatBulkResource](#schemacustomformatbulkresource)|false|none|
|» ids|body|[integer(int32)]|false|none|
|» includeCustomFormatWhenRenaming|body|boolean \| null|false|none|

> Example responses

> 200 Response

```json
null
```

<h3 id="deleteapiv3customformatbulk-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## get/api/v3/customformat/schema

> Code samples

```bash
curl http://localhost:7878/api/v3/customformat/schema \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /api/v3/customformat/schema`

> Example responses

> 200 Response

```json
[
  {
    "id": 0,
    "name": "string",
    "implementation": "string",
    "implementationName": "string",
    "infoLink": "string",
    "negate": true,
    "required": true,
    "fields": [
      {
        "order": 0,
        "name": "string",
        "label": "string",
        "unit": "string",
        "helpText": "string",
        "helpTextWarning": "string",
        "helpLink": "string",
        "value": null,
        "type": "string",
        "advanced": true,
        "selectOptions": [
          {
            "value": 0,
            "name": "string",
            "order": 0,
            "hint": "string",
            "dividerAfter": true
          }
        ],
        "selectOptionsProviderAction": "string",
        "section": "string",
        "hidden": "string",
        "privacy": "normal",
        "placeholder": "string",
        "isFloat": true
      }
    ],
    "presets": [
      {}
    ]
  }
]
```

<h3 id="getapiv3customformatschema-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="getapiv3customformatschema-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[CustomFormatSpecificationSchema](#schemacustomformatspecificationschema)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

<h1 id="radarr-cutoff">Cutoff</h1>

## get/api/v3/wanted/cutoff

> Code samples

```bash
curl http://localhost:7878/api/v3/wanted/cutoff \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /api/v3/wanted/cutoff`

<h3 id="getapiv3wantedcutoff-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|page|query|integer(int32)|false|none|
|pageSize|query|integer(int32)|false|none|
|sortKey|query|string|false|none|
|sortDirection|query|[SortDirection](#schemasortdirection)|false|none|
|monitored|query|boolean|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|sortDirection|default|
|sortDirection|ascending|
|sortDirection|descending|

> Example responses

> 200 Response

```json
{
  "page": 0,
  "pageSize": 0,
  "sortKey": "string",
  "sortDirection": "default",
  "totalRecords": 0,
  "records": [
    {
      "id": 0,
      "title": "string",
      "originalTitle": "string",
      "originalLanguage": {
        "id": 0,
        "name": "string"
      },
      "alternateTitles": [
        {
          "id": 0,
          "sourceType": "tmdb",
          "movieMetadataId": 0,
          "title": "string",
          "cleanTitle": "string"
        }
      ],
      "secondaryYear": 0,
      "secondaryYearSourceId": 0,
      "sortTitle": "string",
      "sizeOnDisk": 0,
      "status": "tba",
      "overview": "string",
      "inCinemas": "1970-01-01T00:00:00Z",
      "physicalRelease": "1970-01-01T00:00:00Z",
      "digitalRelease": "1970-01-01T00:00:00Z",
      "releaseDate": "1970-01-01T00:00:00Z",
      "physicalReleaseNote": "string",
      "images": [
        {
          "coverType": "unknown",
          "url": "string",
          "remoteUrl": "string"
        }
      ],
      "website": "string",
      "remotePoster": "string",
      "year": 0,
      "youTubeTrailerId": "string",
      "studio": "string",
      "path": "string",
      "qualityProfileId": 0,
      "hasFile": true,
      "movieFileId": 0,
      "monitored": true,
      "minimumAvailability": "tba",
      "isAvailable": true,
      "folderName": "string",
      "runtime": 0,
      "cleanTitle": "string",
      "imdbId": "string",
      "tmdbId": 0,
      "titleSlug": "string",
      "rootFolderPath": "string",
      "folder": "string",
      "certification": "string",
      "genres": [
        "string"
      ],
      "keywords": [
        "string"
      ],
      "tags": [
        0
      ],
      "added": "1970-01-01T00:00:00Z",
      "addOptions": {
        "ignoreEpisodesWithFiles": true,
        "ignoreEpisodesWithoutFiles": true,
        "monitor": "movieOnly",
        "searchForMovie": true,
        "addMethod": "manual"
      },
      "ratings": {
        "imdb": {
          "votes": 0,
          "value": 0,
          "type": "user"
        },
        "tmdb": {
          "votes": 0,
          "value": 0,
          "type": "user"
        },
        "metacritic": {
          "votes": 0,
          "value": 0,
          "type": "user"
        },
        "rottenTomatoes": {
          "votes": 0,
          "value": 0,
          "type": "user"
        },
        "trakt": {
          "votes": 0,
          "value": 0,
          "type": "user"
        }
      },
      "movieFile": {
        "id": 0,
        "movieId": 0,
        "relativePath": "string",
        "path": "string",
        "size": 0,
        "dateAdded": "1970-01-01T00:00:00Z",
        "sceneName": "string",
        "releaseGroup": "string",
        "edition": "string",
        "languages": [
          {
            "id": 0,
            "name": "string"
          }
        ],
        "quality": {
          "quality": {
            "id": 0,
            "name": "string",
            "source": "unknown",
            "resolution": 0,
            "modifier": "none"
          },
          "revision": {
            "version": 0,
            "real": 0,
            "isRepack": true
          }
        },
        "customFormats": [
          {
            "id": 0,
            "name": "string",
            "includeCustomFormatWhenRenaming": true,
            "specifications": [
              {
                "id": 0,
                "name": "string",
                "implementation": "string",
                "implementationName": "string",
                "infoLink": "string",
                "negate": true,
                "required": true,
                "fields": [
                  {
                    "order": 0,
                    "name": "string",
                    "label": "string",
                    "unit": "string",
                    "helpText": "string",
                    "helpTextWarning": "string",
                    "helpLink": "string",
                    "value": null,
                    "type": "string",
                    "advanced": true,
                    "selectOptions": [
                      {
                        "value": 0,
                        "name": "string",
                        "order": 0,
                        "hint": "string",
                        "dividerAfter": true
                      }
                    ],
                    "selectOptionsProviderAction": "string",
                    "section": "string",
                    "hidden": "string",
                    "privacy": "normal",
                    "placeholder": "string",
                    "isFloat": true
                  }
                ],
                "presets": [
                  {}
                ]
              }
            ]
          }
        ],
        "customFormatScore": 0,
        "indexerFlags": 0,
        "mediaInfo": {
          "id": 0,
          "audioBitrate": 0,
          "audioChannels": 0,
          "audioCodec": "string",
          "audioLanguages": "string",
          "audioStreamCount": 0,
          "videoBitDepth": 0,
          "videoBitrate": 0,
          "videoCodec": "string",
          "videoFps": 0,
          "videoDynamicRange": "string",
          "videoDynamicRangeType": "string",
          "resolution": "string",
          "runTime": "string",
          "scanType": "string",
          "subtitles": "string"
        },
        "originalFilePath": "string",
        "qualityCutoffNotMet": true
      },
      "collection": {
        "title": "string",
        "tmdbId": 0
      },
      "popularity": 0,
      "lastSearchTime": "1970-01-01T00:00:00Z",
      "statistics": {
        "movieFileCount": 0,
        "sizeOnDisk": 0,
        "releaseGroups": [
          "string"
        ],
        "movieFileQualities": [
          {
            "id": 0,
            "name": "string",
            "source": "unknown",
            "resolution": 0,
            "modifier": "none"
          }
        ]
      }
    }
  ]
}
```

<h3 id="getapiv3wantedcutoff-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[MovieResourcePagingResource](#schemamovieresourcepagingresource)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

<h1 id="radarr-delayprofile">DelayProfile</h1>

## get/api/v3/delayprofile

> Code samples

```bash
curl http://localhost:7878/api/v3/delayprofile \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /api/v3/delayprofile`

> Example responses

> 200 Response

```json
[
  {
    "id": 0,
    "enableUsenet": true,
    "enableTorrent": true,
    "preferredProtocol": "unknown",
    "usenetDelay": 0,
    "torrentDelay": 0,
    "bypassIfHighestQuality": true,
    "bypassIfAboveCustomFormatScore": true,
    "minimumCustomFormatScore": 0,
    "order": 0,
    "tags": [
      0
    ]
  }
]
```

<h3 id="getapiv3delayprofile-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="getapiv3delayprofile-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[DelayProfileResource](#schemadelayprofileresource)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## post/api/v3/delayprofile

> Code samples

```bash
curl http://localhost:7878/api/v3/delayprofile \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}" \
  -d '{
    "id": 0,
    "enableUsenet": true,
    "enableTorrent": true,
    "preferredProtocol": "unknown",
    "usenetDelay": 0,
    "torrentDelay": 0,
    "bypassIfHighestQuality": true,
    "bypassIfAboveCustomFormatScore": true,
    "minimumCustomFormatScore": 0,
    "order": 0,
    "tags": [
      0
    ]
  }'
```

`POST /api/v3/delayprofile`

> Body parameter

```json
{
  "id": 0,
  "enableUsenet": true,
  "enableTorrent": true,
  "preferredProtocol": "unknown",
  "usenetDelay": 0,
  "torrentDelay": 0,
  "bypassIfHighestQuality": true,
  "bypassIfAboveCustomFormatScore": true,
  "minimumCustomFormatScore": 0,
  "order": 0,
  "tags": [
    0
  ]
}
```

<h3 id="postapiv3delayprofile-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[DelayProfileResource](#schemadelayprofileresource)|false|none|
|» id|body|integer(int32)|false|none|
|» enableUsenet|body|boolean|false|none|
|» enableTorrent|body|boolean|false|none|
|» preferredProtocol|body|[DownloadProtocol](#schemadownloadprotocol)|false|none|
|» usenetDelay|body|integer(int32)|false|none|
|» torrentDelay|body|integer(int32)|false|none|
|» bypassIfHighestQuality|body|boolean|false|none|
|» bypassIfAboveCustomFormatScore|body|boolean|false|none|
|» minimumCustomFormatScore|body|integer(int32)|false|none|
|» order|body|integer(int32)|false|none|
|» tags|body|[integer(int32)]|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» preferredProtocol|unknown|
|» preferredProtocol|usenet|
|» preferredProtocol|torrent|

> Example responses

> 201 Response

```json
{
  "id": 0,
  "enableUsenet": true,
  "enableTorrent": true,
  "preferredProtocol": "unknown",
  "usenetDelay": 0,
  "torrentDelay": 0,
  "bypassIfHighestQuality": true,
  "bypassIfAboveCustomFormatScore": true,
  "minimumCustomFormatScore": 0,
  "order": 0,
  "tags": [
    0
  ]
}
```

<h3 id="postapiv3delayprofile-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Created|[DelayProfileResource](#schemadelayprofileresource)|
|404|Not Found|Not Found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## get/api/v3/delayprofile/{id}

> Code samples

```bash
curl http://localhost:7878/api/v3/delayprofile/0 \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /api/v3/delayprofile/{id}`

<h3 id="getapiv3delayprofileid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|none|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "enableUsenet": true,
  "enableTorrent": true,
  "preferredProtocol": "unknown",
  "usenetDelay": 0,
  "torrentDelay": 0,
  "bypassIfHighestQuality": true,
  "bypassIfAboveCustomFormatScore": true,
  "minimumCustomFormatScore": 0,
  "order": 0,
  "tags": [
    0
  ]
}
```

<h3 id="getapiv3delayprofileid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[DelayProfileResource](#schemadelayprofileresource)|
|404|Not Found|Not Found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## put/api/v3/delayprofile/{id}

> Code samples

```bash
curl http://localhost:7878/api/v3/delayprofile/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}" \
  -d '{
    "id": 0,
    "enableUsenet": true,
    "enableTorrent": true,
    "preferredProtocol": "unknown",
    "usenetDelay": 0,
    "torrentDelay": 0,
    "bypassIfHighestQuality": true,
    "bypassIfAboveCustomFormatScore": true,
    "minimumCustomFormatScore": 0,
    "order": 0,
    "tags": [
      0
    ]
  }'
```

`PUT /api/v3/delayprofile/{id}`

> Body parameter

```json
{
  "id": 0,
  "enableUsenet": true,
  "enableTorrent": true,
  "preferredProtocol": "unknown",
  "usenetDelay": 0,
  "torrentDelay": 0,
  "bypassIfHighestQuality": true,
  "bypassIfAboveCustomFormatScore": true,
  "minimumCustomFormatScore": 0,
  "order": 0,
  "tags": [
    0
  ]
}
```

<h3 id="putapiv3delayprofileid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|body|body|[DelayProfileResource](#schemadelayprofileresource)|false|none|
|» id|body|integer(int32)|false|none|
|» enableUsenet|body|boolean|false|none|
|» enableTorrent|body|boolean|false|none|
|» preferredProtocol|body|[DownloadProtocol](#schemadownloadprotocol)|false|none|
|» usenetDelay|body|integer(int32)|false|none|
|» torrentDelay|body|integer(int32)|false|none|
|» bypassIfHighestQuality|body|boolean|false|none|
|» bypassIfAboveCustomFormatScore|body|boolean|false|none|
|» minimumCustomFormatScore|body|integer(int32)|false|none|
|» order|body|integer(int32)|false|none|
|» tags|body|[integer(int32)]|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» preferredProtocol|unknown|
|» preferredProtocol|usenet|
|» preferredProtocol|torrent|

> Example responses

> 202 Response

```json
{
  "id": 0,
  "enableUsenet": true,
  "enableTorrent": true,
  "preferredProtocol": "unknown",
  "usenetDelay": 0,
  "torrentDelay": 0,
  "bypassIfHighestQuality": true,
  "bypassIfAboveCustomFormatScore": true,
  "minimumCustomFormatScore": 0,
  "order": 0,
  "tags": [
    0
  ]
}
```

<h3 id="putapiv3delayprofileid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|Accepted|[DelayProfileResource](#schemadelayprofileresource)|
|404|Not Found|Not Found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## delete/api/v3/delayprofile/{id}

> Code samples

```bash
curl http://localhost:7878/api/v3/delayprofile/0 \
  -X DELETE \
  -H "X-Api-Key: ${API_KEY}"
```

`DELETE /api/v3/delayprofile/{id}`

<h3 id="deleteapiv3delayprofileid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|none|

<h3 id="deleteapiv3delayprofileid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## put/api/v3/delayprofile/reorder/{id}

> Code samples

```bash
curl http://localhost:7878/api/v3/delayprofile/reorder/0 \
  -X PUT \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}"
```

`PUT /api/v3/delayprofile/reorder/{id}`

<h3 id="putapiv3delayprofilereorderid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|none|
|after|query|integer(int32)|false|none|

> Example responses

> 200 Response

```json
[
  {
    "id": 0,
    "enableUsenet": true,
    "enableTorrent": true,
    "preferredProtocol": "unknown",
    "usenetDelay": 0,
    "torrentDelay": 0,
    "bypassIfHighestQuality": true,
    "bypassIfAboveCustomFormatScore": true,
    "minimumCustomFormatScore": 0,
    "order": 0,
    "tags": [
      0
    ]
  }
]
```

<h3 id="putapiv3delayprofilereorderid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="putapiv3delayprofilereorderid-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[DelayProfileResource](#schemadelayprofileresource)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

<h1 id="radarr-diskspace">DiskSpace</h1>

## get/api/v3/diskspace

> Code samples

```bash
curl http://localhost:7878/api/v3/diskspace \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /api/v3/diskspace`

> Example responses

> 200 Response

```json
[
  {
    "id": 0,
    "path": "string",
    "label": "string",
    "freeSpace": 0,
    "totalSpace": 0
  }
]
```

<h3 id="getapiv3diskspace-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="getapiv3diskspace-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[DiskSpaceResource](#schemadiskspaceresource)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

<h1 id="radarr-downloadclient">DownloadClient</h1>

## get/api/v3/downloadclient

> Code samples

```bash
curl http://localhost:7878/api/v3/downloadclient \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /api/v3/downloadclient`

> Example responses

> 200 Response

```json
[
  {
    "id": 0,
    "name": "string",
    "fields": [
      {
        "order": 0,
        "name": "string",
        "label": "string",
        "unit": "string",
        "helpText": "string",
        "helpTextWarning": "string",
        "helpLink": "string",
        "value": null,
        "type": "string",
        "advanced": true,
        "selectOptions": [
          {
            "value": 0,
            "name": "string",
            "order": 0,
            "hint": "string",
            "dividerAfter": true
          }
        ],
        "selectOptionsProviderAction": "string",
        "section": "string",
        "hidden": "string",
        "privacy": "normal",
        "placeholder": "string",
        "isFloat": true
      }
    ],
    "implementationName": "string",
    "implementation": "string",
    "configContract": "string",
    "infoLink": "string",
    "message": {
      "message": "string",
      "type": "info"
    },
    "tags": [
      0
    ],
    "presets": [
      {}
    ],
    "enable": true,
    "protocol": "unknown",
    "priority": 0,
    "removeCompletedDownloads": true,
    "removeFailedDownloads": true
  }
]
```

<h3 id="getapiv3downloadclient-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="getapiv3downloadclient-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[DownloadClientResource](#schemadownloadclientresource)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## post/api/v3/downloadclient

> Code samples

```bash
curl http://localhost:7878/api/v3/downloadclient \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}" \
  -d '{
    "id": 0,
    "name": "string",
    "fields": [
      {
        "order": 0,
        "name": "string",
        "label": "string",
        "unit": "string",
        "helpText": "string",
        "helpTextWarning": "string",
        "helpLink": "string",
        "value": null,
        "type": "string",
        "advanced": true,
        "selectOptions": [
          {
            "value": 0,
            "name": "string",
            "order": 0,
            "hint": "string",
            "dividerAfter": true
          }
        ],
        "selectOptionsProviderAction": "string",
        "section": "string",
        "hidden": "string",
        "privacy": "normal",
        "placeholder": "string",
        "isFloat": true
      }
    ],
    "implementationName": "string",
    "implementation": "string",
    "configContract": "string",
    "infoLink": "string",
    "message": {
      "message": "string",
      "type": "info"
    },
    "tags": [
      0
    ],
    "presets": [
      {}
    ],
    "enable": true,
    "protocol": "unknown",
    "priority": 0,
    "removeCompletedDownloads": true,
    "removeFailedDownloads": true
  }'
```

`POST /api/v3/downloadclient`

> Body parameter

```json
{
  "id": 0,
  "name": "string",
  "fields": [
    {
      "order": 0,
      "name": "string",
      "label": "string",
      "unit": "string",
      "helpText": "string",
      "helpTextWarning": "string",
      "helpLink": "string",
      "value": null,
      "type": "string",
      "advanced": true,
      "selectOptions": [
        {
          "value": 0,
          "name": "string",
          "order": 0,
          "hint": "string",
          "dividerAfter": true
        }
      ],
      "selectOptionsProviderAction": "string",
      "section": "string",
      "hidden": "string",
      "privacy": "normal",
      "placeholder": "string",
      "isFloat": true
    }
  ],
  "implementationName": "string",
  "implementation": "string",
  "configContract": "string",
  "infoLink": "string",
  "message": {
    "message": "string",
    "type": "info"
  },
  "tags": [
    0
  ],
  "presets": [
    {}
  ],
  "enable": true,
  "protocol": "unknown",
  "priority": 0,
  "removeCompletedDownloads": true,
  "removeFailedDownloads": true
}
```

<h3 id="postapiv3downloadclient-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|forceSave|query|boolean|false|none|
|body|body|[DownloadClientResource](#schemadownloadclientresource)|false|none|
|» id|body|integer(int32)|false|none|
|» name|body|string \| null|false|none|
|» fields|body|[[Field](#schemafield)]|false|none|
|» implementationName|body|string \| null|false|none|
|» implementation|body|string \| null|false|none|
|» configContract|body|string \| null|false|none|
|» infoLink|body|string \| null|false|none|
|» message|body|[ProviderMessage](#schemaprovidermessage)|false|none|
|» tags|body|[integer(int32)]|false|none|
|» presets|body|[[DownloadClientResource](#schemadownloadclientresource)]|false|none|
|» enable|body|boolean|false|none|
|» protocol|body|[DownloadProtocol](#schemadownloadprotocol)|false|none|
|» priority|body|integer(int32)|false|none|
|» removeCompletedDownloads|body|boolean|false|none|
|» removeFailedDownloads|body|boolean|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» protocol|unknown|
|» protocol|usenet|
|» protocol|torrent|

> Example responses

> 201 Response

```json
{
  "id": 0,
  "name": "string",
  "fields": [
    {
      "order": 0,
      "name": "string",
      "label": "string",
      "unit": "string",
      "helpText": "string",
      "helpTextWarning": "string",
      "helpLink": "string",
      "value": null,
      "type": "string",
      "advanced": true,
      "selectOptions": [
        {
          "value": 0,
          "name": "string",
          "order": 0,
          "hint": "string",
          "dividerAfter": true
        }
      ],
      "selectOptionsProviderAction": "string",
      "section": "string",
      "hidden": "string",
      "privacy": "normal",
      "placeholder": "string",
      "isFloat": true
    }
  ],
  "implementationName": "string",
  "implementation": "string",
  "configContract": "string",
  "infoLink": "string",
  "message": {
    "message": "string",
    "type": "info"
  },
  "tags": [
    0
  ],
  "presets": [
    {}
  ],
  "enable": true,
  "protocol": "unknown",
  "priority": 0,
  "removeCompletedDownloads": true,
  "removeFailedDownloads": true
}
```

<h3 id="postapiv3downloadclient-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Created|[DownloadClientResource](#schemadownloadclientresource)|
|404|Not Found|Not Found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## get/api/v3/downloadclient/{id}

> Code samples

```bash
curl http://localhost:7878/api/v3/downloadclient/0 \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /api/v3/downloadclient/{id}`

<h3 id="getapiv3downloadclientid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|none|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "name": "string",
  "fields": [
    {
      "order": 0,
      "name": "string",
      "label": "string",
      "unit": "string",
      "helpText": "string",
      "helpTextWarning": "string",
      "helpLink": "string",
      "value": null,
      "type": "string",
      "advanced": true,
      "selectOptions": [
        {
          "value": 0,
          "name": "string",
          "order": 0,
          "hint": "string",
          "dividerAfter": true
        }
      ],
      "selectOptionsProviderAction": "string",
      "section": "string",
      "hidden": "string",
      "privacy": "normal",
      "placeholder": "string",
      "isFloat": true
    }
  ],
  "implementationName": "string",
  "implementation": "string",
  "configContract": "string",
  "infoLink": "string",
  "message": {
    "message": "string",
    "type": "info"
  },
  "tags": [
    0
  ],
  "presets": [
    {}
  ],
  "enable": true,
  "protocol": "unknown",
  "priority": 0,
  "removeCompletedDownloads": true,
  "removeFailedDownloads": true
}
```

<h3 id="getapiv3downloadclientid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[DownloadClientResource](#schemadownloadclientresource)|
|404|Not Found|Not Found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## put/api/v3/downloadclient/{id}

> Code samples

```bash
curl http://localhost:7878/api/v3/downloadclient/0 \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}" \
  -d '{
    "id": 0,
    "name": "string",
    "fields": [
      {
        "order": 0,
        "name": "string",
        "label": "string",
        "unit": "string",
        "helpText": "string",
        "helpTextWarning": "string",
        "helpLink": "string",
        "value": null,
        "type": "string",
        "advanced": true,
        "selectOptions": [
          {
            "value": 0,
            "name": "string",
            "order": 0,
            "hint": "string",
            "dividerAfter": true
          }
        ],
        "selectOptionsProviderAction": "string",
        "section": "string",
        "hidden": "string",
        "privacy": "normal",
        "placeholder": "string",
        "isFloat": true
      }
    ],
    "implementationName": "string",
    "implementation": "string",
    "configContract": "string",
    "infoLink": "string",
    "message": {
      "message": "string",
      "type": "info"
    },
    "tags": [
      0
    ],
    "presets": [
      {}
    ],
    "enable": true,
    "protocol": "unknown",
    "priority": 0,
    "removeCompletedDownloads": true,
    "removeFailedDownloads": true
  }'
```

`PUT /api/v3/downloadclient/{id}`

> Body parameter

```json
{
  "id": 0,
  "name": "string",
  "fields": [
    {
      "order": 0,
      "name": "string",
      "label": "string",
      "unit": "string",
      "helpText": "string",
      "helpTextWarning": "string",
      "helpLink": "string",
      "value": null,
      "type": "string",
      "advanced": true,
      "selectOptions": [
        {
          "value": 0,
          "name": "string",
          "order": 0,
          "hint": "string",
          "dividerAfter": true
        }
      ],
      "selectOptionsProviderAction": "string",
      "section": "string",
      "hidden": "string",
      "privacy": "normal",
      "placeholder": "string",
      "isFloat": true
    }
  ],
  "implementationName": "string",
  "implementation": "string",
  "configContract": "string",
  "infoLink": "string",
  "message": {
    "message": "string",
    "type": "info"
  },
  "tags": [
    0
  ],
  "presets": [
    {}
  ],
  "enable": true,
  "protocol": "unknown",
  "priority": 0,
  "removeCompletedDownloads": true,
  "removeFailedDownloads": true
}
```

<h3 id="putapiv3downloadclientid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|none|
|forceSave|query|boolean|false|none|
|body|body|[DownloadClientResource](#schemadownloadclientresource)|false|none|
|» id|body|integer(int32)|false|none|
|» name|body|string \| null|false|none|
|» fields|body|[[Field](#schemafield)]|false|none|
|» implementationName|body|string \| null|false|none|
|» implementation|body|string \| null|false|none|
|» configContract|body|string \| null|false|none|
|» infoLink|body|string \| null|false|none|
|» message|body|[ProviderMessage](#schemaprovidermessage)|false|none|
|» tags|body|[integer(int32)]|false|none|
|» presets|body|[[DownloadClientResource](#schemadownloadclientresource)]|false|none|
|» enable|body|boolean|false|none|
|» protocol|body|[DownloadProtocol](#schemadownloadprotocol)|false|none|
|» priority|body|integer(int32)|false|none|
|» removeCompletedDownloads|body|boolean|false|none|
|» removeFailedDownloads|body|boolean|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» protocol|unknown|
|» protocol|usenet|
|» protocol|torrent|

> Example responses

> 202 Response

```json
{
  "id": 0,
  "name": "string",
  "fields": [
    {
      "order": 0,
      "name": "string",
      "label": "string",
      "unit": "string",
      "helpText": "string",
      "helpTextWarning": "string",
      "helpLink": "string",
      "value": null,
      "type": "string",
      "advanced": true,
      "selectOptions": [
        {
          "value": 0,
          "name": "string",
          "order": 0,
          "hint": "string",
          "dividerAfter": true
        }
      ],
      "selectOptionsProviderAction": "string",
      "section": "string",
      "hidden": "string",
      "privacy": "normal",
      "placeholder": "string",
      "isFloat": true
    }
  ],
  "implementationName": "string",
  "implementation": "string",
  "configContract": "string",
  "infoLink": "string",
  "message": {
    "message": "string",
    "type": "info"
  },
  "tags": [
    0
  ],
  "presets": [
    {}
  ],
  "enable": true,
  "protocol": "unknown",
  "priority": 0,
  "removeCompletedDownloads": true,
  "removeFailedDownloads": true
}
```

<h3 id="putapiv3downloadclientid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|Accepted|[DownloadClientResource](#schemadownloadclientresource)|
|404|Not Found|Not Found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## delete/api/v3/downloadclient/{id}

> Code samples

```bash
curl http://localhost:7878/api/v3/downloadclient/0 \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}"
```

`DELETE /api/v3/downloadclient/{id}`

<h3 id="deleteapiv3downloadclientid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|none|

> Example responses

> 200 Response

```json
null
```

<h3 id="deleteapiv3downloadclientid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## put/api/v3/downloadclient/bulk

> Code samples

```bash
curl http://localhost:7878/api/v3/downloadclient/bulk \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}" \
  -d '{
    "ids": [
      0
    ],
    "tags": [
      0
    ],
    "applyTags": "add",
    "enable": true,
    "priority": 0,
    "removeCompletedDownloads": true,
    "removeFailedDownloads": true
  }'
```

`PUT /api/v3/downloadclient/bulk`

> Body parameter

```json
{
  "ids": [
    0
  ],
  "tags": [
    0
  ],
  "applyTags": "add",
  "enable": true,
  "priority": 0,
  "removeCompletedDownloads": true,
  "removeFailedDownloads": true
}
```

<h3 id="putapiv3downloadclientbulk-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[DownloadClientBulkResource](#schemadownloadclientbulkresource)|false|none|
|» ids|body|[integer(int32)]|false|none|
|» tags|body|[integer(int32)]|false|none|
|» applyTags|body|[ApplyTags](#schemaapplytags)|false|none|
|» enable|body|boolean \| null|false|none|
|» priority|body|integer(int32) \| null|false|none|
|» removeCompletedDownloads|body|boolean \| null|false|none|
|» removeFailedDownloads|body|boolean \| null|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» applyTags|add|
|» applyTags|remove|
|» applyTags|replace|

> Example responses

> 200 Response

```json
[
  {
    "id": 0,
    "name": "string",
    "fields": [
      {
        "order": 0,
        "name": "string",
        "label": "string",
        "unit": "string",
        "helpText": "string",
        "helpTextWarning": "string",
        "helpLink": "string",
        "value": null,
        "type": "string",
        "advanced": true,
        "selectOptions": [
          {
            "value": 0,
            "name": "string",
            "order": 0,
            "hint": "string",
            "dividerAfter": true
          }
        ],
        "selectOptionsProviderAction": "string",
        "section": "string",
        "hidden": "string",
        "privacy": "normal",
        "placeholder": "string",
        "isFloat": true
      }
    ],
    "implementationName": "string",
    "implementation": "string",
    "configContract": "string",
    "infoLink": "string",
    "message": {
      "message": "string",
      "type": "info"
    },
    "tags": [
      0
    ],
    "presets": [
      {}
    ],
    "enable": true,
    "protocol": "unknown",
    "priority": 0,
    "removeCompletedDownloads": true,
    "removeFailedDownloads": true
  }
]
```

<h3 id="putapiv3downloadclientbulk-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|None|

<h3 id="putapiv3downloadclientbulk-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[DownloadClientResource](#schemadownloadclientresource)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## delete/api/v3/downloadclient/bulk

> Code samples

```bash
curl http://localhost:7878/api/v3/downloadclient/bulk \
  -X DELETE \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}" \
  -d '{
    "ids": [
      0
    ],
    "tags": [
      0
    ],
    "applyTags": "add",
    "enable": true,
    "priority": 0,
    "removeCompletedDownloads": true,
    "removeFailedDownloads": true
  }'
```

`DELETE /api/v3/downloadclient/bulk`

> Body parameter

```json
{
  "ids": [
    0
  ],
  "tags": [
    0
  ],
  "applyTags": "add",
  "enable": true,
  "priority": 0,
  "removeCompletedDownloads": true,
  "removeFailedDownloads": true
}
```

<h3 id="deleteapiv3downloadclientbulk-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[DownloadClientBulkResource](#schemadownloadclientbulkresource)|false|none|
|» ids|body|[integer(int32)]|false|none|
|» tags|body|[integer(int32)]|false|none|
|» applyTags|body|[ApplyTags](#schemaapplytags)|false|none|
|» enable|body|boolean \| null|false|none|
|» priority|body|integer(int32) \| null|false|none|
|» removeCompletedDownloads|body|boolean \| null|false|none|
|» removeFailedDownloads|body|boolean \| null|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» applyTags|add|
|» applyTags|remove|
|» applyTags|replace|

> Example responses

> 200 Response

```json
null
```

<h3 id="deleteapiv3downloadclientbulk-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## get/api/v3/downloadclient/schema

> Code samples

```bash
curl http://localhost:7878/api/v3/downloadclient/schema \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /api/v3/downloadclient/schema`

> Example responses

> 200 Response

```json
[
  {
    "id": 0,
    "name": "string",
    "fields": [
      {
        "order": 0,
        "name": "string",
        "label": "string",
        "unit": "string",
        "helpText": "string",
        "helpTextWarning": "string",
        "helpLink": "string",
        "value": null,
        "type": "string",
        "advanced": true,
        "selectOptions": [
          {
            "value": 0,
            "name": "string",
            "order": 0,
            "hint": "string",
            "dividerAfter": true
          }
        ],
        "selectOptionsProviderAction": "string",
        "section": "string",
        "hidden": "string",
        "privacy": "normal",
        "placeholder": "string",
        "isFloat": true
      }
    ],
    "implementationName": "string",
    "implementation": "string",
    "configContract": "string",
    "infoLink": "string",
    "message": {
      "message": "string",
      "type": "info"
    },
    "tags": [
      0
    ],
    "presets": [
      {}
    ],
    "enable": true,
    "protocol": "unknown",
    "priority": 0,
    "removeCompletedDownloads": true,
    "removeFailedDownloads": true
  }
]
```

<h3 id="getapiv3downloadclientschema-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="getapiv3downloadclientschema-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[DownloadClientResource](#schemadownloadclientresource)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## post/api/v3/downloadclient/test

> Code samples

```bash
curl http://localhost:7878/api/v3/downloadclient/test \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "X-Api-Key: ${API_KEY}" \
  -d '{
    "id": 0,
    "name": "string",
    "fields": [
      {
        "order": 0,
        "name": "string",
        "label": "string",
        "unit": "string",
        "helpText": "string",
        "helpTextWarning": "string",
        "helpLink": "string",
        "value": null,
        "type": "string",
        "advanced": true,
        "selectOptions": [
          {
            "value": 0,
            "name": "string",
            "order": 0,
            "hint": "string",
            "dividerAfter": true
          }
        ],
        "selectOptionsProviderAction": "string",
        "section": "string",
        "hidden": "string",
        "privacy": "normal",
        "placeholder": "string",
        "isFloat": true
      }
    ],
    "implementationName": "string",
    "implementation": "string",
    "configContract": "string",
    "infoLink": "string",
    "message": {
      "message": "string",
      "type": "info"
    },
    "tags": [
      0
    ],
    "presets": [
      {}
    ],
    "enable": true,
    "protocol": "unknown",
    "priority": 0,
    "removeCompletedDownloads": true,
    "removeFailedDownloads": true
  }'
```

`POST /api/v3/downloadclient/test`

> Body parameter

```json
{
  "id": 0,
  "name": "string",
  "fields": [
    {
      "order": 0,
      "name": "string",
      "label": "string",
      "unit": "string",
      "helpText": "string",
      "helpTextWarning": "string",
      "helpLink": "string",
      "value": null,
      "type": "string",
      "advanced": true,
      "selectOptions": [
        {
          "value": 0,
          "name": "string",
          "order": 0,
          "hint": "string",
          "dividerAfter": true
        }
      ],
      "selectOptionsProviderAction": "string",
      "section": "string",
      "hidden": "string",
      "privacy": "normal",
      "placeholder": "string",
      "isFloat": true
    }
  ],
  "implementationName": "string",
  "implementation": "string",
  "configContract": "string",
  "infoLink": "string",
  "message": {
    "message": "string",
    "type": "info"
  },
  "tags": [
    0
  ],
  "presets": [
    {}
  ],
  "enable": true,
  "protocol": "unknown",
  "priority": 0,
  "removeCompletedDownloads": true,
  "removeFailedDownloads": true
}
```

<h3 id="postapiv3downloadclienttest-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|forceTest|query|boolean|false|none|
|body|body|[DownloadClientResource](#schemadownloadclientresource)|false|none|
|» id|body|integer(int32)|false|none|
|» name|body|string \| null|false|none|
|» fields|body|[[Field](#schemafield)]|false|none|
|» implementationName|body|string \| null|false|none|
|» implementation|body|string \| null|false|none|
|» configContract|body|string \| null|false|none|
|» infoLink|body|string \| null|false|none|
|» message|body|[ProviderMessage](#schemaprovidermessage)|false|none|
|» tags|body|[integer(int32)]|false|none|
|» presets|body|[[DownloadClientResource](#schemadownloadclientresource)]|false|none|
|» enable|body|boolean|false|none|
|» protocol|body|[DownloadProtocol](#schemadownloadprotocol)|false|none|
|» priority|body|integer(int32)|false|none|
|» removeCompletedDownloads|body|boolean|false|none|
|» removeFailedDownloads|body|boolean|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» protocol|unknown|
|» protocol|usenet|
|» protocol|torrent|

<h3 id="postapiv3downloadclienttest-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## post/api/v3/downloadclient/testall

> Code samples

```bash
curl http://localhost:7878/api/v3/downloadclient/testall \
  -X POST \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}"
```

`POST /api/v3/downloadclient/testall`

> Example responses

> 200 Response

```json
[
  {
    "id": 0,
    "isValid": true,
    "validationFailures": [
      {
        "propertyName": "string",
        "errorMessage": "string",
        "attemptedValue": null,
        "customState": null,
        "severity": "error",
        "errorCode": "string",
        "formattedMessageArguments": [
          null
        ],
        "formattedMessagePlaceholderValues": {
          "property1": null,
          "property2": null
        }
      }
    ]
  }
]
```

> 400 Response

```json
[
  {
    "id": 0,
    "isValid": true,
    "validationFailures": [
      {
        "propertyName": "string",
        "errorMessage": "string",
        "attemptedValue": null,
        "customState": null,
        "severity": "error",
        "errorCode": "string",
        "formattedMessageArguments": [
          null
        ],
        "formattedMessagePlaceholderValues": {
          "property1": null,
          "property2": null
        }
      }
    ]
  }
]
```

<h3 id="postapiv3downloadclienttestall-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|Inline|

<h3 id="postapiv3downloadclienttestall-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[ProviderTestAllResult](#schemaprovidertestallresult)]|false|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[ProviderTestAllResult](#schemaprovidertestallresult)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## post/api/v3/downloadclient/action/{name}

> Code samples

```bash
curl http://localhost:7878/api/v3/downloadclient/action/string \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "X-Api-Key: ${API_KEY}" \
  -d '{
    "id": 0,
    "name": "string",
    "fields": [
      {
        "order": 0,
        "name": "string",
        "label": "string",
        "unit": "string",
        "helpText": "string",
        "helpTextWarning": "string",
        "helpLink": "string",
        "value": null,
        "type": "string",
        "advanced": true,
        "selectOptions": [
          {
            "value": 0,
            "name": "string",
            "order": 0,
            "hint": "string",
            "dividerAfter": true
          }
        ],
        "selectOptionsProviderAction": "string",
        "section": "string",
        "hidden": "string",
        "privacy": "normal",
        "placeholder": "string",
        "isFloat": true
      }
    ],
    "implementationName": "string",
    "implementation": "string",
    "configContract": "string",
    "infoLink": "string",
    "message": {
      "message": "string",
      "type": "info"
    },
    "tags": [
      0
    ],
    "presets": [
      {}
    ],
    "enable": true,
    "protocol": "unknown",
    "priority": 0,
    "removeCompletedDownloads": true,
    "removeFailedDownloads": true
  }'
```

`POST /api/v3/downloadclient/action/{name}`

> Body parameter

```json
{
  "id": 0,
  "name": "string",
  "fields": [
    {
      "order": 0,
      "name": "string",
      "label": "string",
      "unit": "string",
      "helpText": "string",
      "helpTextWarning": "string",
      "helpLink": "string",
      "value": null,
      "type": "string",
      "advanced": true,
      "selectOptions": [
        {
          "value": 0,
          "name": "string",
          "order": 0,
          "hint": "string",
          "dividerAfter": true
        }
      ],
      "selectOptionsProviderAction": "string",
      "section": "string",
      "hidden": "string",
      "privacy": "normal",
      "placeholder": "string",
      "isFloat": true
    }
  ],
  "implementationName": "string",
  "implementation": "string",
  "configContract": "string",
  "infoLink": "string",
  "message": {
    "message": "string",
    "type": "info"
  },
  "tags": [
    0
  ],
  "presets": [
    {}
  ],
  "enable": true,
  "protocol": "unknown",
  "priority": 0,
  "removeCompletedDownloads": true,
  "removeFailedDownloads": true
}
```

<h3 id="postapiv3downloadclientactionname-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|none|
|body|body|[DownloadClientResource](#schemadownloadclientresource)|false|none|
|» id|body|integer(int32)|false|none|
|» name|body|string \| null|false|none|
|» fields|body|[[Field](#schemafield)]|false|none|
|» implementationName|body|string \| null|false|none|
|» implementation|body|string \| null|false|none|
|» configContract|body|string \| null|false|none|
|» infoLink|body|string \| null|false|none|
|» message|body|[ProviderMessage](#schemaprovidermessage)|false|none|
|» tags|body|[integer(int32)]|false|none|
|» presets|body|[[DownloadClientResource](#schemadownloadclientresource)]|false|none|
|» enable|body|boolean|false|none|
|» protocol|body|[DownloadProtocol](#schemadownloadprotocol)|false|none|
|» priority|body|integer(int32)|false|none|
|» removeCompletedDownloads|body|boolean|false|none|
|» removeFailedDownloads|body|boolean|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» protocol|unknown|
|» protocol|usenet|
|» protocol|torrent|

<h3 id="postapiv3downloadclientactionname-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|400|Bad Request|Bad Request|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

<h1 id="radarr-downloadclientconfig">DownloadClientConfig</h1>

## get/api/v3/config/downloadclient

> Code samples

```bash
curl http://localhost:7878/api/v3/config/downloadclient \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /api/v3/config/downloadclient`

> Example responses

> 200 Response

```json
{
  "id": 0,
  "downloadClientWorkingFolders": "string",
  "enableCompletedDownloadHandling": true,
  "checkForFinishedDownloadInterval": 0,
  "autoRedownloadFailed": true,
  "autoRedownloadFailedFromInteractiveSearch": true
}
```

<h3 id="getapiv3configdownloadclient-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[DownloadClientConfigResource](#schemadownloadclientconfigresource)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## get/api/v3/config/downloadclient/{id}

> Code samples

```bash
curl http://localhost:7878/api/v3/config/downloadclient/0 \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /api/v3/config/downloadclient/{id}`

<h3 id="getapiv3configdownloadclientid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|none|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "downloadClientWorkingFolders": "string",
  "enableCompletedDownloadHandling": true,
  "checkForFinishedDownloadInterval": 0,
  "autoRedownloadFailed": true,
  "autoRedownloadFailedFromInteractiveSearch": true
}
```

<h3 id="getapiv3configdownloadclientid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[DownloadClientConfigResource](#schemadownloadclientconfigresource)|
|404|Not Found|Not Found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## put/api/v3/config/downloadclient/{id}

> Code samples

```bash
curl http://localhost:7878/api/v3/config/downloadclient/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}" \
  -d '{
    "id": 0,
    "downloadClientWorkingFolders": "string",
    "enableCompletedDownloadHandling": true,
    "checkForFinishedDownloadInterval": 0,
    "autoRedownloadFailed": true,
    "autoRedownloadFailedFromInteractiveSearch": true
  }'
```

`PUT /api/v3/config/downloadclient/{id}`

> Body parameter

```json
{
  "id": 0,
  "downloadClientWorkingFolders": "string",
  "enableCompletedDownloadHandling": true,
  "checkForFinishedDownloadInterval": 0,
  "autoRedownloadFailed": true,
  "autoRedownloadFailedFromInteractiveSearch": true
}
```

<h3 id="putapiv3configdownloadclientid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|body|body|[DownloadClientConfigResource](#schemadownloadclientconfigresource)|false|none|
|» id|body|integer(int32)|false|none|
|» downloadClientWorkingFolders|body|string \| null|false|none|
|» enableCompletedDownloadHandling|body|boolean|false|none|
|» checkForFinishedDownloadInterval|body|integer(int32)|false|none|
|» autoRedownloadFailed|body|boolean|false|none|
|» autoRedownloadFailedFromInteractiveSearch|body|boolean|false|none|

> Example responses

> 202 Response

```json
{
  "id": 0,
  "downloadClientWorkingFolders": "string",
  "enableCompletedDownloadHandling": true,
  "checkForFinishedDownloadInterval": 0,
  "autoRedownloadFailed": true,
  "autoRedownloadFailedFromInteractiveSearch": true
}
```

<h3 id="putapiv3configdownloadclientid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|Accepted|[DownloadClientConfigResource](#schemadownloadclientconfigresource)|
|404|Not Found|Not Found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

<h1 id="radarr-extrafile">ExtraFile</h1>

## get/api/v3/extrafile

> Code samples

```bash
curl http://localhost:7878/api/v3/extrafile \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /api/v3/extrafile`

<h3 id="getapiv3extrafile-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|movieId|query|integer(int32)|false|none|

> Example responses

> 200 Response

```json
[
  {
    "id": 0,
    "movieId": 0,
    "movieFileId": 0,
    "relativePath": "string",
    "extension": "string",
    "languageTags": [
      "string"
    ],
    "title": "string",
    "type": "subtitle"
  }
]
```

<h3 id="getapiv3extrafile-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="getapiv3extrafile-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[ExtraFileResource](#schemaextrafileresource)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

<h1 id="radarr-filesystem">FileSystem</h1>

## get/api/v3/filesystem

> Code samples

```bash
curl http://localhost:7878/api/v3/filesystem \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /api/v3/filesystem`

<h3 id="getapiv3filesystem-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|path|query|string|false|none|
|includeFiles|query|boolean|false|none|
|allowFoldersWithoutTrailingSlashes|query|boolean|false|none|

> Example responses

> 200 Response

```json
{
  "parent": "string",
  "directories": [
    {
      "type": "parent",
      "name": "string",
      "path": "string",
      "extension": "string",
      "size": 0,
      "lastModified": "1970-01-01T00:00:00Z"
    }
  ],
  "files": [
    {
      "type": "parent",
      "name": "string",
      "path": "string",
      "extension": "string",
      "size": 0,
      "lastModified": "1970-01-01T00:00:00Z"
    }
  ]
}
```

<h3 id="getapiv3filesystem-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[FileSystemResult](#schemafilesystemresult)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## get/api/v3/filesystem/type

> Code samples

```bash
curl http://localhost:7878/api/v3/filesystem/type \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /api/v3/filesystem/type`

<h3 id="getapiv3filesystemtype-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|path|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "type": "parent"
}
```

<h3 id="getapiv3filesystemtype-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[FileSystemTypeResource](#schemafilesystemtyperesource)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## get/api/v3/filesystem/mediafiles

> Code samples

```bash
curl http://localhost:7878/api/v3/filesystem/mediafiles \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /api/v3/filesystem/mediafiles`

<h3 id="getapiv3filesystemmediafiles-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|path|query|string|false|none|

> Example responses

> 200 Response

```json
[
  {
    "path": "string",
    "relativePath": "string",
    "name": "string"
  }
]
```

<h3 id="getapiv3filesystemmediafiles-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="getapiv3filesystemmediafiles-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[FileSystemMediaFileResource](#schemafilesystemmediafileresource)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

<h1 id="radarr-health">Health</h1>

## get/api/v3/health

> Code samples

```bash
curl http://localhost:7878/api/v3/health \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /api/v3/health`

> Example responses

> 200 Response

```json
[
  {
    "id": 0,
    "source": "string",
    "type": "ok",
    "message": "string",
    "wikiUrl": "string"
  }
]
```

<h3 id="getapiv3health-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="getapiv3health-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[HealthResource](#schemahealthresource)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

<h1 id="radarr-history">History</h1>

## get/api/v3/history

> Code samples

```bash
curl http://localhost:7878/api/v3/history \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /api/v3/history`

<h3 id="getapiv3history-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|page|query|integer(int32)|false|none|
|pageSize|query|integer(int32)|false|none|
|sortKey|query|string|false|none|
|sortDirection|query|[SortDirection](#schemasortdirection)|false|none|
|includeMovie|query|boolean|false|none|
|eventType|query|[integer(int32)]|false|none|
|downloadId|query|string|false|none|
|movieIds|query|[integer(int32)]|false|none|
|languages|query|[integer(int32)]|false|none|
|quality|query|[integer(int32)]|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|sortDirection|default|
|sortDirection|ascending|
|sortDirection|descending|

> Example responses

> 200 Response

```json
{
  "page": 0,
  "pageSize": 0,
  "sortKey": "string",
  "sortDirection": "default",
  "totalRecords": 0,
  "records": [
    {
      "id": 0,
      "movieId": 0,
      "sourceTitle": "string",
      "languages": [
        {
          "id": 0,
          "name": "string"
        }
      ],
      "quality": {
        "quality": {
          "id": 0,
          "name": "string",
          "source": "unknown",
          "resolution": 0,
          "modifier": "none"
        },
        "revision": {
          "version": 0,
          "real": 0,
          "isRepack": true
        }
      },
      "customFormats": [
        {
          "id": 0,
          "name": "string",
          "includeCustomFormatWhenRenaming": true,
          "specifications": [
            {
              "id": 0,
              "name": "string",
              "implementation": "string",
              "implementationName": "string",
              "infoLink": "string",
              "negate": true,
              "required": true,
              "fields": [
                {
                  "order": 0,
                  "name": "string",
                  "label": "string",
                  "unit": "string",
                  "helpText": "string",
                  "helpTextWarning": "string",
                  "helpLink": "string",
                  "value": null,
                  "type": "string",
                  "advanced": true,
                  "selectOptions": [
                    {
                      "value": 0,
                      "name": "string",
                      "order": 0,
                      "hint": "string",
                      "dividerAfter": true
                    }
                  ],
                  "selectOptionsProviderAction": "string",
                  "section": "string",
                  "hidden": "string",
                  "privacy": "normal",
                  "placeholder": "string",
                  "isFloat": true
                }
              ],
              "presets": [
                {}
              ]
            }
          ]
        }
      ],
      "customFormatScore": 0,
      "qualityCutoffNotMet": true,
      "date": "1970-01-01T00:00:00Z",
      "downloadId": "string",
      "eventType": "unknown",
      "data": {
        "property1": "string",
        "property2": "string"
      },
      "movie": {
        "id": 0,
        "title": "string",
        "originalTitle": "string",
        "originalLanguage": {
          "id": 0,
          "name": "string"
        },
        "alternateTitles": [
          {
            "id": 0,
            "sourceType": "tmdb",
            "movieMetadataId": 0,
            "title": "string",
            "cleanTitle": "string"
          }
        ],
        "secondaryYear": 0,
        "secondaryYearSourceId": 0,
        "sortTitle": "string",
        "sizeOnDisk": 0,
        "status": "tba",
        "overview": "string",
        "inCinemas": "1970-01-01T00:00:00Z",
        "physicalRelease": "1970-01-01T00:00:00Z",
        "digitalRelease": "1970-01-01T00:00:00Z",
        "releaseDate": "1970-01-01T00:00:00Z",
        "physicalReleaseNote": "string",
        "images": [
          {
            "coverType": "unknown",
            "url": "string",
            "remoteUrl": "string"
          }
        ],
        "website": "string",
        "remotePoster": "string",
        "year": 0,
        "youTubeTrailerId": "string",
        "studio": "string",
        "path": "string",
        "qualityProfileId": 0,
        "hasFile": true,
        "movieFileId": 0,
        "monitored": true,
        "minimumAvailability": "tba",
        "isAvailable": true,
        "folderName": "string",
        "runtime": 0,
        "cleanTitle": "string",
        "imdbId": "string",
        "tmdbId": 0,
        "titleSlug": "string",
        "rootFolderPath": "string",
        "folder": "string",
        "certification": "string",
        "genres": [
          "string"
        ],
        "keywords": [
          "string"
        ],
        "tags": [
          0
        ],
        "added": "1970-01-01T00:00:00Z",
        "addOptions": {
          "ignoreEpisodesWithFiles": true,
          "ignoreEpisodesWithoutFiles": true,
          "monitor": "movieOnly",
          "searchForMovie": true,
          "addMethod": "manual"
        },
        "ratings": {
          "imdb": {
            "votes": 0,
            "value": 0,
            "type": "user"
          },
          "tmdb": {
            "votes": 0,
            "value": 0,
            "type": "user"
          },
          "metacritic": {
            "votes": 0,
            "value": 0,
            "type": "user"
          },
          "rottenTomatoes": {
            "votes": 0,
            "value": 0,
            "type": "user"
          },
          "trakt": {
            "votes": 0,
            "value": 0,
            "type": "user"
          }
        },
        "movieFile": {
          "id": 0,
          "movieId": 0,
          "relativePath": "string",
          "path": "string",
          "size": 0,
          "dateAdded": "1970-01-01T00:00:00Z",
          "sceneName": "string",
          "releaseGroup": "string",
          "edition": "string",
          "languages": [
            {
              "id": 0,
              "name": "string"
            }
          ],
          "quality": {
            "quality": {
              "id": 0,
              "name": "string",
              "source": "unknown",
              "resolution": 0,
              "modifier": "none"
            },
            "revision": {
              "version": 0,
              "real": 0,
              "isRepack": true
            }
          },
          "customFormats": [
            {
              "id": 0,
              "name": "string",
              "includeCustomFormatWhenRenaming": true,
              "specifications": [
                {
                  "id": 0,
                  "name": "string",
                  "implementation": "string",
                  "implementationName": "string",
                  "infoLink": "string",
                  "negate": true,
                  "required": true,
                  "fields": [
                    {
                      "order": 0,
                      "name": "string",
                      "label": "string",
                      "unit": "string",
                      "helpText": "string",
                      "helpTextWarning": "string",
                      "helpLink": "string",
                      "value": null,
                      "type": "string",
                      "advanced": true,
                      "selectOptions": [
                        {
                          "value": 0,
                          "name": "string",
                          "order": 0,
                          "hint": "string",
                          "dividerAfter": true
                        }
                      ],
                      "selectOptionsProviderAction": "string",
                      "section": "string",
                      "hidden": "string",
                      "privacy": "normal",
                      "placeholder": "string",
                      "isFloat": true
                    }
                  ],
                  "presets": [
                    {}
                  ]
                }
              ]
            }
          ],
          "customFormatScore": 0,
          "indexerFlags": 0,
          "mediaInfo": {
            "id": 0,
            "audioBitrate": 0,
            "audioChannels": 0,
            "audioCodec": "string",
            "audioLanguages": "string",
            "audioStreamCount": 0,
            "videoBitDepth": 0,
            "videoBitrate": 0,
            "videoCodec": "string",
            "videoFps": 0,
            "videoDynamicRange": "string",
            "videoDynamicRangeType": "string",
            "resolution": "string",
            "runTime": "string",
            "scanType": "string",
            "subtitles": "string"
          },
          "originalFilePath": "string",
          "qualityCutoffNotMet": true
        },
        "collection": {
          "title": "string",
          "tmdbId": 0
        },
        "popularity": 0,
        "lastSearchTime": "1970-01-01T00:00:00Z",
        "statistics": {
          "movieFileCount": 0,
          "sizeOnDisk": 0,
          "releaseGroups": [
            "string"
          ],
          "movieFileQualities": [
            {
              "id": 0,
              "name": "string",
              "source": "unknown",
              "resolution": 0,
              "modifier": "none"
            }
          ]
        }
      }
    }
  ]
}
```

<h3 id="getapiv3history-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[HistoryResourcePagingResource](#schemahistoryresourcepagingresource)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## get/api/v3/history/since

> Code samples

```bash
curl http://localhost:7878/api/v3/history/since \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /api/v3/history/since`

<h3 id="getapiv3historysince-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|date|query|string(date-time)|false|none|
|eventType|query|[MovieHistoryEventType](#schemamoviehistoryeventtype)|false|none|
|includeMovie|query|boolean|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|eventType|unknown|
|eventType|grabbed|
|eventType|downloadFolderImported|
|eventType|downloadFailed|
|eventType|movieFileDeleted|
|eventType|movieFolderImported|
|eventType|movieFileRenamed|
|eventType|downloadIgnored|

> Example responses

> 200 Response

```json
[
  {
    "id": 0,
    "movieId": 0,
    "sourceTitle": "string",
    "languages": [
      {
        "id": 0,
        "name": "string"
      }
    ],
    "quality": {
      "quality": {
        "id": 0,
        "name": "string",
        "source": "unknown",
        "resolution": 0,
        "modifier": "none"
      },
      "revision": {
        "version": 0,
        "real": 0,
        "isRepack": true
      }
    },
    "customFormats": [
      {
        "id": 0,
        "name": "string",
        "includeCustomFormatWhenRenaming": true,
        "specifications": [
          {
            "id": 0,
            "name": "string",
            "implementation": "string",
            "implementationName": "string",
            "infoLink": "string",
            "negate": true,
            "required": true,
            "fields": [
              {
                "order": 0,
                "name": "string",
                "label": "string",
                "unit": "string",
                "helpText": "string",
                "helpTextWarning": "string",
                "helpLink": "string",
                "value": null,
                "type": "string",
                "advanced": true,
                "selectOptions": [
                  {
                    "value": 0,
                    "name": "string",
                    "order": 0,
                    "hint": "string",
                    "dividerAfter": true
                  }
                ],
                "selectOptionsProviderAction": "string",
                "section": "string",
                "hidden": "string",
                "privacy": "normal",
                "placeholder": "string",
                "isFloat": true
              }
            ],
            "presets": [
              {}
            ]
          }
        ]
      }
    ],
    "customFormatScore": 0,
    "qualityCutoffNotMet": true,
    "date": "1970-01-01T00:00:00Z",
    "downloadId": "string",
    "eventType": "unknown",
    "data": {
      "property1": "string",
      "property2": "string"
    },
    "movie": {
      "id": 0,
      "title": "string",
      "originalTitle": "string",
      "originalLanguage": {
        "id": 0,
        "name": "string"
      },
      "alternateTitles": [
        {
          "id": 0,
          "sourceType": "tmdb",
          "movieMetadataId": 0,
          "title": "string",
          "cleanTitle": "string"
        }
      ],
      "secondaryYear": 0,
      "secondaryYearSourceId": 0,
      "sortTitle": "string",
      "sizeOnDisk": 0,
      "status": "tba",
      "overview": "string",
      "inCinemas": "1970-01-01T00:00:00Z",
      "physicalRelease": "1970-01-01T00:00:00Z",
      "digitalRelease": "1970-01-01T00:00:00Z",
      "releaseDate": "1970-01-01T00:00:00Z",
      "physicalReleaseNote": "string",
      "images": [
        {
          "coverType": "unknown",
          "url": "string",
          "remoteUrl": "string"
        }
      ],
      "website": "string",
      "remotePoster": "string",
      "year": 0,
      "youTubeTrailerId": "string",
      "studio": "string",
      "path": "string",
      "qualityProfileId": 0,
      "hasFile": true,
      "movieFileId": 0,
      "monitored": true,
      "minimumAvailability": "tba",
      "isAvailable": true,
      "folderName": "string",
      "runtime": 0,
      "cleanTitle": "string",
      "imdbId": "string",
      "tmdbId": 0,
      "titleSlug": "string",
      "rootFolderPath": "string",
      "folder": "string",
      "certification": "string",
      "genres": [
        "string"
      ],
      "keywords": [
        "string"
      ],
      "tags": [
        0
      ],
      "added": "1970-01-01T00:00:00Z",
      "addOptions": {
        "ignoreEpisodesWithFiles": true,
        "ignoreEpisodesWithoutFiles": true,
        "monitor": "movieOnly",
        "searchForMovie": true,
        "addMethod": "manual"
      },
      "ratings": {
        "imdb": {
          "votes": 0,
          "value": 0,
          "type": "user"
        },
        "tmdb": {
          "votes": 0,
          "value": 0,
          "type": "user"
        },
        "metacritic": {
          "votes": 0,
          "value": 0,
          "type": "user"
        },
        "rottenTomatoes": {
          "votes": 0,
          "value": 0,
          "type": "user"
        },
        "trakt": {
          "votes": 0,
          "value": 0,
          "type": "user"
        }
      },
      "movieFile": {
        "id": 0,
        "movieId": 0,
        "relativePath": "string",
        "path": "string",
        "size": 0,
        "dateAdded": "1970-01-01T00:00:00Z",
        "sceneName": "string",
        "releaseGroup": "string",
        "edition": "string",
        "languages": [
          {
            "id": 0,
            "name": "string"
          }
        ],
        "quality": {
          "quality": {
            "id": 0,
            "name": "string",
            "source": "unknown",
            "resolution": 0,
            "modifier": "none"
          },
          "revision": {
            "version": 0,
            "real": 0,
            "isRepack": true
          }
        },
        "customFormats": [
          {
            "id": 0,
            "name": "string",
            "includeCustomFormatWhenRenaming": true,
            "specifications": [
              {
                "id": 0,
                "name": "string",
                "implementation": "string",
                "implementationName": "string",
                "infoLink": "string",
                "negate": true,
                "required": true,
                "fields": [
                  {
                    "order": 0,
                    "name": "string",
                    "label": "string",
                    "unit": "string",
                    "helpText": "string",
                    "helpTextWarning": "string",
                    "helpLink": "string",
                    "value": null,
                    "type": "string",
                    "advanced": true,
                    "selectOptions": [
                      {
                        "value": 0,
                        "name": "string",
                        "order": 0,
                        "hint": "string",
                        "dividerAfter": true
                      }
                    ],
                    "selectOptionsProviderAction": "string",
                    "section": "string",
                    "hidden": "string",
                    "privacy": "normal",
                    "placeholder": "string",
                    "isFloat": true
                  }
                ],
                "presets": [
                  {}
                ]
              }
            ]
          }
        ],
        "customFormatScore": 0,
        "indexerFlags": 0,
        "mediaInfo": {
          "id": 0,
          "audioBitrate": 0,
          "audioChannels": 0,
          "audioCodec": "string",
          "audioLanguages": "string",
          "audioStreamCount": 0,
          "videoBitDepth": 0,
          "videoBitrate": 0,
          "videoCodec": "string",
          "videoFps": 0,
          "videoDynamicRange": "string",
          "videoDynamicRangeType": "string",
          "resolution": "string",
          "runTime": "string",
          "scanType": "string",
          "subtitles": "string"
        },
        "originalFilePath": "string",
        "qualityCutoffNotMet": true
      },
      "collection": {
        "title": "string",
        "tmdbId": 0
      },
      "popularity": 0,
      "lastSearchTime": "1970-01-01T00:00:00Z",
      "statistics": {
        "movieFileCount": 0,
        "sizeOnDisk": 0,
        "releaseGroups": [
          "string"
        ],
        "movieFileQualities": [
          {
            "id": 0,
            "name": "string",
            "source": "unknown",
            "resolution": 0,
            "modifier": "none"
          }
        ]
      }
    }
  }
]
```

<h3 id="getapiv3historysince-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="getapiv3historysince-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[HistoryResource](#schemahistoryresource)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## get/api/v3/history/movie

> Code samples

```bash
curl http://localhost:7878/api/v3/history/movie \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /api/v3/history/movie`

<h3 id="getapiv3historymovie-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|movieId|query|integer(int32)|false|none|
|eventType|query|[MovieHistoryEventType](#schemamoviehistoryeventtype)|false|none|
|includeMovie|query|boolean|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|eventType|unknown|
|eventType|grabbed|
|eventType|downloadFolderImported|
|eventType|downloadFailed|
|eventType|movieFileDeleted|
|eventType|movieFolderImported|
|eventType|movieFileRenamed|
|eventType|downloadIgnored|

> Example responses

> 200 Response

```json
[
  {
    "id": 0,
    "movieId": 0,
    "sourceTitle": "string",
    "languages": [
      {
        "id": 0,
        "name": "string"
      }
    ],
    "quality": {
      "quality": {
        "id": 0,
        "name": "string",
        "source": "unknown",
        "resolution": 0,
        "modifier": "none"
      },
      "revision": {
        "version": 0,
        "real": 0,
        "isRepack": true
      }
    },
    "customFormats": [
      {
        "id": 0,
        "name": "string",
        "includeCustomFormatWhenRenaming": true,
        "specifications": [
          {
            "id": 0,
            "name": "string",
            "implementation": "string",
            "implementationName": "string",
            "infoLink": "string",
            "negate": true,
            "required": true,
            "fields": [
              {
                "order": 0,
                "name": "string",
                "label": "string",
                "unit": "string",
                "helpText": "string",
                "helpTextWarning": "string",
                "helpLink": "string",
                "value": null,
                "type": "string",
                "advanced": true,
                "selectOptions": [
                  {
                    "value": 0,
                    "name": "string",
                    "order": 0,
                    "hint": "string",
                    "dividerAfter": true
                  }
                ],
                "selectOptionsProviderAction": "string",
                "section": "string",
                "hidden": "string",
                "privacy": "normal",
                "placeholder": "string",
                "isFloat": true
              }
            ],
            "presets": [
              {}
            ]
          }
        ]
      }
    ],
    "customFormatScore": 0,
    "qualityCutoffNotMet": true,
    "date": "1970-01-01T00:00:00Z",
    "downloadId": "string",
    "eventType": "unknown",
    "data": {
      "property1": "string",
      "property2": "string"
    },
    "movie": {
      "id": 0,
      "title": "string",
      "originalTitle": "string",
      "originalLanguage": {
        "id": 0,
        "name": "string"
      },
      "alternateTitles": [
        {
          "id": 0,
          "sourceType": "tmdb",
          "movieMetadataId": 0,
          "title": "string",
          "cleanTitle": "string"
        }
      ],
      "secondaryYear": 0,
      "secondaryYearSourceId": 0,
      "sortTitle": "string",
      "sizeOnDisk": 0,
      "status": "tba",
      "overview": "string",
      "inCinemas": "1970-01-01T00:00:00Z",
      "physicalRelease": "1970-01-01T00:00:00Z",
      "digitalRelease": "1970-01-01T00:00:00Z",
      "releaseDate": "1970-01-01T00:00:00Z",
      "physicalReleaseNote": "string",
      "images": [
        {
          "coverType": "unknown",
          "url": "string",
          "remoteUrl": "string"
        }
      ],
      "website": "string",
      "remotePoster": "string",
      "year": 0,
      "youTubeTrailerId": "string",
      "studio": "string",
      "path": "string",
      "qualityProfileId": 0,
      "hasFile": true,
      "movieFileId": 0,
      "monitored": true,
      "minimumAvailability": "tba",
      "isAvailable": true,
      "folderName": "string",
      "runtime": 0,
      "cleanTitle": "string",
      "imdbId": "string",
      "tmdbId": 0,
      "titleSlug": "string",
      "rootFolderPath": "string",
      "folder": "string",
      "certification": "string",
      "genres": [
        "string"
      ],
      "keywords": [
        "string"
      ],
      "tags": [
        0
      ],
      "added": "1970-01-01T00:00:00Z",
      "addOptions": {
        "ignoreEpisodesWithFiles": true,
        "ignoreEpisodesWithoutFiles": true,
        "monitor": "movieOnly",
        "searchForMovie": true,
        "addMethod": "manual"
      },
      "ratings": {
        "imdb": {
          "votes": 0,
          "value": 0,
          "type": "user"
        },
        "tmdb": {
          "votes": 0,
          "value": 0,
          "type": "user"
        },
        "metacritic": {
          "votes": 0,
          "value": 0,
          "type": "user"
        },
        "rottenTomatoes": {
          "votes": 0,
          "value": 0,
          "type": "user"
        },
        "trakt": {
          "votes": 0,
          "value": 0,
          "type": "user"
        }
      },
      "movieFile": {
        "id": 0,
        "movieId": 0,
        "relativePath": "string",
        "path": "string",
        "size": 0,
        "dateAdded": "1970-01-01T00:00:00Z",
        "sceneName": "string",
        "releaseGroup": "string",
        "edition": "string",
        "languages": [
          {
            "id": 0,
            "name": "string"
          }
        ],
        "quality": {
          "quality": {
            "id": 0,
            "name": "string",
            "source": "unknown",
            "resolution": 0,
            "modifier": "none"
          },
          "revision": {
            "version": 0,
            "real": 0,
            "isRepack": true
          }
        },
        "customFormats": [
          {
            "id": 0,
            "name": "string",
            "includeCustomFormatWhenRenaming": true,
            "specifications": [
              {
                "id": 0,
                "name": "string",
                "implementation": "string",
                "implementationName": "string",
                "infoLink": "string",
                "negate": true,
                "required": true,
                "fields": [
                  {
                    "order": 0,
                    "name": "string",
                    "label": "string",
                    "unit": "string",
                    "helpText": "string",
                    "helpTextWarning": "string",
                    "helpLink": "string",
                    "value": null,
                    "type": "string",
                    "advanced": true,
                    "selectOptions": [
                      {
                        "value": 0,
                        "name": "string",
                        "order": 0,
                        "hint": "string",
                        "dividerAfter": true
                      }
                    ],
                    "selectOptionsProviderAction": "string",
                    "section": "string",
                    "hidden": "string",
                    "privacy": "normal",
                    "placeholder": "string",
                    "isFloat": true
                  }
                ],
                "presets": [
                  {}
                ]
              }
            ]
          }
        ],
        "customFormatScore": 0,
        "indexerFlags": 0,
        "mediaInfo": {
          "id": 0,
          "audioBitrate": 0,
          "audioChannels": 0,
          "audioCodec": "string",
          "audioLanguages": "string",
          "audioStreamCount": 0,
          "videoBitDepth": 0,
          "videoBitrate": 0,
          "videoCodec": "string",
          "videoFps": 0,
          "videoDynamicRange": "string",
          "videoDynamicRangeType": "string",
          "resolution": "string",
          "runTime": "string",
          "scanType": "string",
          "subtitles": "string"
        },
        "originalFilePath": "string",
        "qualityCutoffNotMet": true
      },
      "collection": {
        "title": "string",
        "tmdbId": 0
      },
      "popularity": 0,
      "lastSearchTime": "1970-01-01T00:00:00Z",
      "statistics": {
        "movieFileCount": 0,
        "sizeOnDisk": 0,
        "releaseGroups": [
          "string"
        ],
        "movieFileQualities": [
          {
            "id": 0,
            "name": "string",
            "source": "unknown",
            "resolution": 0,
            "modifier": "none"
          }
        ]
      }
    }
  }
]
```

<h3 id="getapiv3historymovie-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="getapiv3historymovie-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[HistoryResource](#schemahistoryresource)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## post/api/v3/history/failed/{id}

> Code samples

```bash
curl http://localhost:7878/api/v3/history/failed/0 \
  -X POST \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}"
```

`POST /api/v3/history/failed/{id}`

<h3 id="postapiv3historyfailedid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|none|

> Example responses

> 200 Response

```json
null
```

<h3 id="postapiv3historyfailedid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

<h1 id="radarr-hostconfig">HostConfig</h1>

## get/api/v3/config/host

> Code samples

```bash
curl http://localhost:7878/api/v3/config/host \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /api/v3/config/host`

> Example responses

> 200 Response

```json
{
  "id": 0,
  "bindAddress": "string",
  "port": 0,
  "sslPort": 0,
  "enableSsl": true,
  "launchBrowser": true,
  "authenticationMethod": "none",
  "authenticationRequired": "enabled",
  "allowedHosts": "string",
  "analyticsEnabled": true,
  "username": "string",
  "password": "string",
  "passwordConfirmation": "string",
  "oidcAuthority": "string",
  "oidcClientId": "string",
  "oidcClientSecret": "string",
  "oidcUserIdentifier": "string",
  "oidcScopes": "string",
  "logLevel": "string",
  "logSizeLimit": 0,
  "consoleLogLevel": "string",
  "branch": "string",
  "apiKey": "string",
  "sslCertPath": "string",
  "sslKeyPath": "string",
  "sslCertPassword": "string",
  "urlBase": "string",
  "trustedNetworks": "string",
  "instanceName": "string",
  "applicationUrl": "string",
  "updateAutomatically": true,
  "updateMechanism": "builtIn",
  "updateScriptPath": "string",
  "proxyEnabled": true,
  "proxyType": "http",
  "proxyHostname": "string",
  "proxyPort": 0,
  "proxyUsername": "string",
  "proxyPassword": "string",
  "proxyBypassFilter": "string",
  "proxyBypassLocalAddresses": true,
  "certificateValidation": "enabled",
  "backupFolder": "string",
  "backupInterval": 0,
  "backupRetention": 0,
  "trustCgnatIpAddresses": true
}
```

<h3 id="getapiv3confighost-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[HostConfigResource](#schemahostconfigresource)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## get/api/v3/config/host/{id}

> Code samples

```bash
curl http://localhost:7878/api/v3/config/host/0 \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /api/v3/config/host/{id}`

<h3 id="getapiv3confighostid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|none|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "bindAddress": "string",
  "port": 0,
  "sslPort": 0,
  "enableSsl": true,
  "launchBrowser": true,
  "authenticationMethod": "none",
  "authenticationRequired": "enabled",
  "allowedHosts": "string",
  "analyticsEnabled": true,
  "username": "string",
  "password": "string",
  "passwordConfirmation": "string",
  "oidcAuthority": "string",
  "oidcClientId": "string",
  "oidcClientSecret": "string",
  "oidcUserIdentifier": "string",
  "oidcScopes": "string",
  "logLevel": "string",
  "logSizeLimit": 0,
  "consoleLogLevel": "string",
  "branch": "string",
  "apiKey": "string",
  "sslCertPath": "string",
  "sslKeyPath": "string",
  "sslCertPassword": "string",
  "urlBase": "string",
  "trustedNetworks": "string",
  "instanceName": "string",
  "applicationUrl": "string",
  "updateAutomatically": true,
  "updateMechanism": "builtIn",
  "updateScriptPath": "string",
  "proxyEnabled": true,
  "proxyType": "http",
  "proxyHostname": "string",
  "proxyPort": 0,
  "proxyUsername": "string",
  "proxyPassword": "string",
  "proxyBypassFilter": "string",
  "proxyBypassLocalAddresses": true,
  "certificateValidation": "enabled",
  "backupFolder": "string",
  "backupInterval": 0,
  "backupRetention": 0,
  "trustCgnatIpAddresses": true
}
```

<h3 id="getapiv3confighostid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[HostConfigResource](#schemahostconfigresource)|
|404|Not Found|Not Found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## put/api/v3/config/host/{id}

> Code samples

```bash
curl http://localhost:7878/api/v3/config/host/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}" \
  -d '{
    "id": 0,
    "bindAddress": "string",
    "port": 0,
    "sslPort": 0,
    "enableSsl": true,
    "launchBrowser": true,
    "authenticationMethod": "none",
    "authenticationRequired": "enabled",
    "allowedHosts": "string",
    "analyticsEnabled": true,
    "username": "string",
    "password": "string",
    "passwordConfirmation": "string",
    "oidcAuthority": "string",
    "oidcClientId": "string",
    "oidcClientSecret": "string",
    "oidcUserIdentifier": "string",
    "oidcScopes": "string",
    "logLevel": "string",
    "logSizeLimit": 0,
    "consoleLogLevel": "string",
    "branch": "string",
    "apiKey": "string",
    "sslCertPath": "string",
    "sslKeyPath": "string",
    "sslCertPassword": "string",
    "urlBase": "string",
    "trustedNetworks": "string",
    "instanceName": "string",
    "applicationUrl": "string",
    "updateAutomatically": true,
    "updateMechanism": "builtIn",
    "updateScriptPath": "string",
    "proxyEnabled": true,
    "proxyType": "http",
    "proxyHostname": "string",
    "proxyPort": 0,
    "proxyUsername": "string",
    "proxyPassword": "string",
    "proxyBypassFilter": "string",
    "proxyBypassLocalAddresses": true,
    "certificateValidation": "enabled",
    "backupFolder": "string",
    "backupInterval": 0,
    "backupRetention": 0,
    "trustCgnatIpAddresses": true
  }'
```

`PUT /api/v3/config/host/{id}`

> Body parameter

```json
{
  "id": 0,
  "bindAddress": "string",
  "port": 0,
  "sslPort": 0,
  "enableSsl": true,
  "launchBrowser": true,
  "authenticationMethod": "none",
  "authenticationRequired": "enabled",
  "allowedHosts": "string",
  "analyticsEnabled": true,
  "username": "string",
  "password": "string",
  "passwordConfirmation": "string",
  "oidcAuthority": "string",
  "oidcClientId": "string",
  "oidcClientSecret": "string",
  "oidcUserIdentifier": "string",
  "oidcScopes": "string",
  "logLevel": "string",
  "logSizeLimit": 0,
  "consoleLogLevel": "string",
  "branch": "string",
  "apiKey": "string",
  "sslCertPath": "string",
  "sslKeyPath": "string",
  "sslCertPassword": "string",
  "urlBase": "string",
  "trustedNetworks": "string",
  "instanceName": "string",
  "applicationUrl": "string",
  "updateAutomatically": true,
  "updateMechanism": "builtIn",
  "updateScriptPath": "string",
  "proxyEnabled": true,
  "proxyType": "http",
  "proxyHostname": "string",
  "proxyPort": 0,
  "proxyUsername": "string",
  "proxyPassword": "string",
  "proxyBypassFilter": "string",
  "proxyBypassLocalAddresses": true,
  "certificateValidation": "enabled",
  "backupFolder": "string",
  "backupInterval": 0,
  "backupRetention": 0,
  "trustCgnatIpAddresses": true
}
```

<h3 id="putapiv3confighostid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|body|body|[HostConfigResource](#schemahostconfigresource)|false|none|
|» id|body|integer(int32)|false|none|
|» bindAddress|body|string \| null|false|none|
|» port|body|integer(int32)|false|none|
|» sslPort|body|integer(int32)|false|none|
|» enableSsl|body|boolean|false|none|
|» launchBrowser|body|boolean|false|none|
|» authenticationMethod|body|[AuthenticationType](#schemaauthenticationtype)|false|none|
|» authenticationRequired|body|[AuthenticationRequiredType](#schemaauthenticationrequiredtype)|false|none|
|» allowedHosts|body|string \| null|false|none|
|» analyticsEnabled|body|boolean|false|none|
|» username|body|string \| null|false|none|
|» password|body|string \| null|false|none|
|» passwordConfirmation|body|string \| null|false|none|
|» oidcAuthority|body|string \| null|false|none|
|» oidcClientId|body|string \| null|false|none|
|» oidcClientSecret|body|string \| null|false|none|
|» oidcUserIdentifier|body|string \| null|false|none|
|» oidcScopes|body|string \| null|false|none|
|» logLevel|body|string \| null|false|none|
|» logSizeLimit|body|integer(int32)|false|none|
|» consoleLogLevel|body|string \| null|false|none|
|» branch|body|string \| null|false|none|
|» apiKey|body|string \| null|false|none|
|» sslCertPath|body|string \| null|false|none|
|» sslKeyPath|body|string \| null|false|none|
|» sslCertPassword|body|string \| null|false|none|
|» urlBase|body|string \| null|false|none|
|» trustedNetworks|body|string \| null|false|none|
|» instanceName|body|string \| null|false|none|
|» applicationUrl|body|string \| null|false|none|
|» updateAutomatically|body|boolean|false|none|
|» updateMechanism|body|[UpdateMechanism](#schemaupdatemechanism)|false|none|
|» updateScriptPath|body|string \| null|false|none|
|» proxyEnabled|body|boolean|false|none|
|» proxyType|body|[ProxyType](#schemaproxytype)|false|none|
|» proxyHostname|body|string \| null|false|none|
|» proxyPort|body|integer(int32)|false|none|
|» proxyUsername|body|string \| null|false|none|
|» proxyPassword|body|string \| null|false|none|
|» proxyBypassFilter|body|string \| null|false|none|
|» proxyBypassLocalAddresses|body|boolean|false|none|
|» certificateValidation|body|[CertificateValidationType](#schemacertificatevalidationtype)|false|none|
|» backupFolder|body|string \| null|false|none|
|» backupInterval|body|integer(int32)|false|none|
|» backupRetention|body|integer(int32)|false|none|
|» trustCgnatIpAddresses|body|boolean|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» authenticationMethod|none|
|» authenticationMethod|basic|
|» authenticationMethod|forms|
|» authenticationMethod|external|
|» authenticationMethod|oidc|
|» authenticationRequired|enabled|
|» authenticationRequired|disabledForLocalAddresses|
|» authenticationRequired|disabledForLocalhost|
|» updateMechanism|builtIn|
|» updateMechanism|script|
|» updateMechanism|external|
|» updateMechanism|apt|
|» updateMechanism|docker|
|» proxyType|http|
|» proxyType|socks4|
|» proxyType|socks5|
|» certificateValidation|enabled|
|» certificateValidation|disabledForLocalAddresses|
|» certificateValidation|disabled|

> Example responses

> 202 Response

```json
{
  "id": 0,
  "bindAddress": "string",
  "port": 0,
  "sslPort": 0,
  "enableSsl": true,
  "launchBrowser": true,
  "authenticationMethod": "none",
  "authenticationRequired": "enabled",
  "allowedHosts": "string",
  "analyticsEnabled": true,
  "username": "string",
  "password": "string",
  "passwordConfirmation": "string",
  "oidcAuthority": "string",
  "oidcClientId": "string",
  "oidcClientSecret": "string",
  "oidcUserIdentifier": "string",
  "oidcScopes": "string",
  "logLevel": "string",
  "logSizeLimit": 0,
  "consoleLogLevel": "string",
  "branch": "string",
  "apiKey": "string",
  "sslCertPath": "string",
  "sslKeyPath": "string",
  "sslCertPassword": "string",
  "urlBase": "string",
  "trustedNetworks": "string",
  "instanceName": "string",
  "applicationUrl": "string",
  "updateAutomatically": true,
  "updateMechanism": "builtIn",
  "updateScriptPath": "string",
  "proxyEnabled": true,
  "proxyType": "http",
  "proxyHostname": "string",
  "proxyPort": 0,
  "proxyUsername": "string",
  "proxyPassword": "string",
  "proxyBypassFilter": "string",
  "proxyBypassLocalAddresses": true,
  "certificateValidation": "enabled",
  "backupFolder": "string",
  "backupInterval": 0,
  "backupRetention": 0,
  "trustCgnatIpAddresses": true
}
```

<h3 id="putapiv3confighostid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|Accepted|[HostConfigResource](#schemahostconfigresource)|
|404|Not Found|Not Found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

<h1 id="radarr-importlist">ImportList</h1>

## get/api/v3/importlist

> Code samples

```bash
curl http://localhost:7878/api/v3/importlist \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /api/v3/importlist`

> Example responses

> 200 Response

```json
[
  {
    "id": 0,
    "name": "string",
    "fields": [
      {
        "order": 0,
        "name": "string",
        "label": "string",
        "unit": "string",
        "helpText": "string",
        "helpTextWarning": "string",
        "helpLink": "string",
        "value": null,
        "type": "string",
        "advanced": true,
        "selectOptions": [
          {
            "value": 0,
            "name": "string",
            "order": 0,
            "hint": "string",
            "dividerAfter": true
          }
        ],
        "selectOptionsProviderAction": "string",
        "section": "string",
        "hidden": "string",
        "privacy": "normal",
        "placeholder": "string",
        "isFloat": true
      }
    ],
    "implementationName": "string",
    "implementation": "string",
    "configContract": "string",
    "infoLink": "string",
    "message": {
      "message": "string",
      "type": "info"
    },
    "tags": [
      0
    ],
    "presets": [
      {}
    ],
    "enabled": true,
    "enableAuto": true,
    "monitor": "movieOnly",
    "rootFolderPath": "string",
    "qualityProfileId": 0,
    "searchOnAdd": true,
    "minimumAvailability": "tba",
    "listType": "program",
    "listOrder": 0,
    "minRefreshInterval": "string"
  }
]
```

<h3 id="getapiv3importlist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="getapiv3importlist-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[ImportListResource](#schemaimportlistresource)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## post/api/v3/importlist

> Code samples

```bash
curl http://localhost:7878/api/v3/importlist \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}" \
  -d '{
    "id": 0,
    "name": "string",
    "fields": [
      {
        "order": 0,
        "name": "string",
        "label": "string",
        "unit": "string",
        "helpText": "string",
        "helpTextWarning": "string",
        "helpLink": "string",
        "value": null,
        "type": "string",
        "advanced": true,
        "selectOptions": [
          {
            "value": 0,
            "name": "string",
            "order": 0,
            "hint": "string",
            "dividerAfter": true
          }
        ],
        "selectOptionsProviderAction": "string",
        "section": "string",
        "hidden": "string",
        "privacy": "normal",
        "placeholder": "string",
        "isFloat": true
      }
    ],
    "implementationName": "string",
    "implementation": "string",
    "configContract": "string",
    "infoLink": "string",
    "message": {
      "message": "string",
      "type": "info"
    },
    "tags": [
      0
    ],
    "presets": [
      {}
    ],
    "enabled": true,
    "enableAuto": true,
    "monitor": "movieOnly",
    "rootFolderPath": "string",
    "qualityProfileId": 0,
    "searchOnAdd": true,
    "minimumAvailability": "tba",
    "listType": "program",
    "listOrder": 0,
    "minRefreshInterval": "string"
  }'
```

`POST /api/v3/importlist`

> Body parameter

```json
{
  "id": 0,
  "name": "string",
  "fields": [
    {
      "order": 0,
      "name": "string",
      "label": "string",
      "unit": "string",
      "helpText": "string",
      "helpTextWarning": "string",
      "helpLink": "string",
      "value": null,
      "type": "string",
      "advanced": true,
      "selectOptions": [
        {
          "value": 0,
          "name": "string",
          "order": 0,
          "hint": "string",
          "dividerAfter": true
        }
      ],
      "selectOptionsProviderAction": "string",
      "section": "string",
      "hidden": "string",
      "privacy": "normal",
      "placeholder": "string",
      "isFloat": true
    }
  ],
  "implementationName": "string",
  "implementation": "string",
  "configContract": "string",
  "infoLink": "string",
  "message": {
    "message": "string",
    "type": "info"
  },
  "tags": [
    0
  ],
  "presets": [
    {}
  ],
  "enabled": true,
  "enableAuto": true,
  "monitor": "movieOnly",
  "rootFolderPath": "string",
  "qualityProfileId": 0,
  "searchOnAdd": true,
  "minimumAvailability": "tba",
  "listType": "program",
  "listOrder": 0,
  "minRefreshInterval": "string"
}
```

<h3 id="postapiv3importlist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|forceSave|query|boolean|false|none|
|body|body|[ImportListResource](#schemaimportlistresource)|false|none|
|» id|body|integer(int32)|false|none|
|» name|body|string \| null|false|none|
|» fields|body|[[Field](#schemafield)]|false|none|
|» implementationName|body|string \| null|false|none|
|» implementation|body|string \| null|false|none|
|» configContract|body|string \| null|false|none|
|» infoLink|body|string \| null|false|none|
|» message|body|[ProviderMessage](#schemaprovidermessage)|false|none|
|» tags|body|[integer(int32)]|false|none|
|» presets|body|[[ImportListResource](#schemaimportlistresource)]|false|none|
|» enabled|body|boolean|false|none|
|» enableAuto|body|boolean|false|none|
|» monitor|body|[MonitorTypes](#schemamonitortypes)|false|none|
|» rootFolderPath|body|string \| null|false|none|
|» qualityProfileId|body|integer(int32)|false|none|
|» searchOnAdd|body|boolean|false|none|
|» minimumAvailability|body|[MovieStatusType](#schemamoviestatustype)|false|none|
|» listType|body|[ImportListType](#schemaimportlisttype)|false|none|
|» listOrder|body|integer(int32)|false|none|
|» minRefreshInterval|body|string(date-span)|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» monitor|movieOnly|
|» monitor|movieAndCollection|
|» monitor|none|
|» minimumAvailability|tba|
|» minimumAvailability|announced|
|» minimumAvailability|inCinemas|
|» minimumAvailability|released|
|» minimumAvailability|deleted|
|» listType|program|
|» listType|tmdb|
|» listType|trakt|
|» listType|plex|
|» listType|simkl|
|» listType|other|
|» listType|advanced|

> Example responses

> 201 Response

```json
{
  "id": 0,
  "name": "string",
  "fields": [
    {
      "order": 0,
      "name": "string",
      "label": "string",
      "unit": "string",
      "helpText": "string",
      "helpTextWarning": "string",
      "helpLink": "string",
      "value": null,
      "type": "string",
      "advanced": true,
      "selectOptions": [
        {
          "value": 0,
          "name": "string",
          "order": 0,
          "hint": "string",
          "dividerAfter": true
        }
      ],
      "selectOptionsProviderAction": "string",
      "section": "string",
      "hidden": "string",
      "privacy": "normal",
      "placeholder": "string",
      "isFloat": true
    }
  ],
  "implementationName": "string",
  "implementation": "string",
  "configContract": "string",
  "infoLink": "string",
  "message": {
    "message": "string",
    "type": "info"
  },
  "tags": [
    0
  ],
  "presets": [
    {}
  ],
  "enabled": true,
  "enableAuto": true,
  "monitor": "movieOnly",
  "rootFolderPath": "string",
  "qualityProfileId": 0,
  "searchOnAdd": true,
  "minimumAvailability": "tba",
  "listType": "program",
  "listOrder": 0,
  "minRefreshInterval": "string"
}
```

<h3 id="postapiv3importlist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Created|[ImportListResource](#schemaimportlistresource)|
|404|Not Found|Not Found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## get/api/v3/importlist/{id}

> Code samples

```bash
curl http://localhost:7878/api/v3/importlist/0 \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /api/v3/importlist/{id}`

<h3 id="getapiv3importlistid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|none|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "name": "string",
  "fields": [
    {
      "order": 0,
      "name": "string",
      "label": "string",
      "unit": "string",
      "helpText": "string",
      "helpTextWarning": "string",
      "helpLink": "string",
      "value": null,
      "type": "string",
      "advanced": true,
      "selectOptions": [
        {
          "value": 0,
          "name": "string",
          "order": 0,
          "hint": "string",
          "dividerAfter": true
        }
      ],
      "selectOptionsProviderAction": "string",
      "section": "string",
      "hidden": "string",
      "privacy": "normal",
      "placeholder": "string",
      "isFloat": true
    }
  ],
  "implementationName": "string",
  "implementation": "string",
  "configContract": "string",
  "infoLink": "string",
  "message": {
    "message": "string",
    "type": "info"
  },
  "tags": [
    0
  ],
  "presets": [
    {}
  ],
  "enabled": true,
  "enableAuto": true,
  "monitor": "movieOnly",
  "rootFolderPath": "string",
  "qualityProfileId": 0,
  "searchOnAdd": true,
  "minimumAvailability": "tba",
  "listType": "program",
  "listOrder": 0,
  "minRefreshInterval": "string"
}
```

<h3 id="getapiv3importlistid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[ImportListResource](#schemaimportlistresource)|
|404|Not Found|Not Found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## put/api/v3/importlist/{id}

> Code samples

```bash
curl http://localhost:7878/api/v3/importlist/0 \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}" \
  -d '{
    "id": 0,
    "name": "string",
    "fields": [
      {
        "order": 0,
        "name": "string",
        "label": "string",
        "unit": "string",
        "helpText": "string",
        "helpTextWarning": "string",
        "helpLink": "string",
        "value": null,
        "type": "string",
        "advanced": true,
        "selectOptions": [
          {
            "value": 0,
            "name": "string",
            "order": 0,
            "hint": "string",
            "dividerAfter": true
          }
        ],
        "selectOptionsProviderAction": "string",
        "section": "string",
        "hidden": "string",
        "privacy": "normal",
        "placeholder": "string",
        "isFloat": true
      }
    ],
    "implementationName": "string",
    "implementation": "string",
    "configContract": "string",
    "infoLink": "string",
    "message": {
      "message": "string",
      "type": "info"
    },
    "tags": [
      0
    ],
    "presets": [
      {}
    ],
    "enabled": true,
    "enableAuto": true,
    "monitor": "movieOnly",
    "rootFolderPath": "string",
    "qualityProfileId": 0,
    "searchOnAdd": true,
    "minimumAvailability": "tba",
    "listType": "program",
    "listOrder": 0,
    "minRefreshInterval": "string"
  }'
```

`PUT /api/v3/importlist/{id}`

> Body parameter

```json
{
  "id": 0,
  "name": "string",
  "fields": [
    {
      "order": 0,
      "name": "string",
      "label": "string",
      "unit": "string",
      "helpText": "string",
      "helpTextWarning": "string",
      "helpLink": "string",
      "value": null,
      "type": "string",
      "advanced": true,
      "selectOptions": [
        {
          "value": 0,
          "name": "string",
          "order": 0,
          "hint": "string",
          "dividerAfter": true
        }
      ],
      "selectOptionsProviderAction": "string",
      "section": "string",
      "hidden": "string",
      "privacy": "normal",
      "placeholder": "string",
      "isFloat": true
    }
  ],
  "implementationName": "string",
  "implementation": "string",
  "configContract": "string",
  "infoLink": "string",
  "message": {
    "message": "string",
    "type": "info"
  },
  "tags": [
    0
  ],
  "presets": [
    {}
  ],
  "enabled": true,
  "enableAuto": true,
  "monitor": "movieOnly",
  "rootFolderPath": "string",
  "qualityProfileId": 0,
  "searchOnAdd": true,
  "minimumAvailability": "tba",
  "listType": "program",
  "listOrder": 0,
  "minRefreshInterval": "string"
}
```

<h3 id="putapiv3importlistid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|none|
|forceSave|query|boolean|false|none|
|body|body|[ImportListResource](#schemaimportlistresource)|false|none|
|» id|body|integer(int32)|false|none|
|» name|body|string \| null|false|none|
|» fields|body|[[Field](#schemafield)]|false|none|
|» implementationName|body|string \| null|false|none|
|» implementation|body|string \| null|false|none|
|» configContract|body|string \| null|false|none|
|» infoLink|body|string \| null|false|none|
|» message|body|[ProviderMessage](#schemaprovidermessage)|false|none|
|» tags|body|[integer(int32)]|false|none|
|» presets|body|[[ImportListResource](#schemaimportlistresource)]|false|none|
|» enabled|body|boolean|false|none|
|» enableAuto|body|boolean|false|none|
|» monitor|body|[MonitorTypes](#schemamonitortypes)|false|none|
|» rootFolderPath|body|string \| null|false|none|
|» qualityProfileId|body|integer(int32)|false|none|
|» searchOnAdd|body|boolean|false|none|
|» minimumAvailability|body|[MovieStatusType](#schemamoviestatustype)|false|none|
|» listType|body|[ImportListType](#schemaimportlisttype)|false|none|
|» listOrder|body|integer(int32)|false|none|
|» minRefreshInterval|body|string(date-span)|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» monitor|movieOnly|
|» monitor|movieAndCollection|
|» monitor|none|
|» minimumAvailability|tba|
|» minimumAvailability|announced|
|» minimumAvailability|inCinemas|
|» minimumAvailability|released|
|» minimumAvailability|deleted|
|» listType|program|
|» listType|tmdb|
|» listType|trakt|
|» listType|plex|
|» listType|simkl|
|» listType|other|
|» listType|advanced|

> Example responses

> 202 Response

```json
{
  "id": 0,
  "name": "string",
  "fields": [
    {
      "order": 0,
      "name": "string",
      "label": "string",
      "unit": "string",
      "helpText": "string",
      "helpTextWarning": "string",
      "helpLink": "string",
      "value": null,
      "type": "string",
      "advanced": true,
      "selectOptions": [
        {
          "value": 0,
          "name": "string",
          "order": 0,
          "hint": "string",
          "dividerAfter": true
        }
      ],
      "selectOptionsProviderAction": "string",
      "section": "string",
      "hidden": "string",
      "privacy": "normal",
      "placeholder": "string",
      "isFloat": true
    }
  ],
  "implementationName": "string",
  "implementation": "string",
  "configContract": "string",
  "infoLink": "string",
  "message": {
    "message": "string",
    "type": "info"
  },
  "tags": [
    0
  ],
  "presets": [
    {}
  ],
  "enabled": true,
  "enableAuto": true,
  "monitor": "movieOnly",
  "rootFolderPath": "string",
  "qualityProfileId": 0,
  "searchOnAdd": true,
  "minimumAvailability": "tba",
  "listType": "program",
  "listOrder": 0,
  "minRefreshInterval": "string"
}
```

<h3 id="putapiv3importlistid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|Accepted|[ImportListResource](#schemaimportlistresource)|
|404|Not Found|Not Found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## delete/api/v3/importlist/{id}

> Code samples

```bash
curl http://localhost:7878/api/v3/importlist/0 \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}"
```

`DELETE /api/v3/importlist/{id}`

<h3 id="deleteapiv3importlistid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|none|

> Example responses

> 200 Response

```json
null
```

<h3 id="deleteapiv3importlistid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## put/api/v3/importlist/bulk

> Code samples

```bash
curl http://localhost:7878/api/v3/importlist/bulk \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}" \
  -d '{
    "ids": [
      0
    ],
    "tags": [
      0
    ],
    "applyTags": "add",
    "enabled": true,
    "enableAuto": true,
    "rootFolderPath": "string",
    "qualityProfileId": 0,
    "minimumAvailability": "tba"
  }'
```

`PUT /api/v3/importlist/bulk`

> Body parameter

```json
{
  "ids": [
    0
  ],
  "tags": [
    0
  ],
  "applyTags": "add",
  "enabled": true,
  "enableAuto": true,
  "rootFolderPath": "string",
  "qualityProfileId": 0,
  "minimumAvailability": "tba"
}
```

<h3 id="putapiv3importlistbulk-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[ImportListBulkResource](#schemaimportlistbulkresource)|false|none|
|» ids|body|[integer(int32)]|false|none|
|» tags|body|[integer(int32)]|false|none|
|» applyTags|body|[ApplyTags](#schemaapplytags)|false|none|
|» enabled|body|boolean \| null|false|none|
|» enableAuto|body|boolean \| null|false|none|
|» rootFolderPath|body|string \| null|false|none|
|» qualityProfileId|body|integer(int32) \| null|false|none|
|» minimumAvailability|body|[MovieStatusType](#schemamoviestatustype)|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» applyTags|add|
|» applyTags|remove|
|» applyTags|replace|
|» minimumAvailability|tba|
|» minimumAvailability|announced|
|» minimumAvailability|inCinemas|
|» minimumAvailability|released|
|» minimumAvailability|deleted|

> Example responses

> 200 Response

```json
[
  {
    "id": 0,
    "name": "string",
    "fields": [
      {
        "order": 0,
        "name": "string",
        "label": "string",
        "unit": "string",
        "helpText": "string",
        "helpTextWarning": "string",
        "helpLink": "string",
        "value": null,
        "type": "string",
        "advanced": true,
        "selectOptions": [
          {
            "value": 0,
            "name": "string",
            "order": 0,
            "hint": "string",
            "dividerAfter": true
          }
        ],
        "selectOptionsProviderAction": "string",
        "section": "string",
        "hidden": "string",
        "privacy": "normal",
        "placeholder": "string",
        "isFloat": true
      }
    ],
    "implementationName": "string",
    "implementation": "string",
    "configContract": "string",
    "infoLink": "string",
    "message": {
      "message": "string",
      "type": "info"
    },
    "tags": [
      0
    ],
    "presets": [
      {}
    ],
    "enabled": true,
    "enableAuto": true,
    "monitor": "movieOnly",
    "rootFolderPath": "string",
    "qualityProfileId": 0,
    "searchOnAdd": true,
    "minimumAvailability": "tba",
    "listType": "program",
    "listOrder": 0,
    "minRefreshInterval": "string"
  }
]
```

<h3 id="putapiv3importlistbulk-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|None|

<h3 id="putapiv3importlistbulk-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[ImportListResource](#schemaimportlistresource)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## delete/api/v3/importlist/bulk

> Code samples

```bash
curl http://localhost:7878/api/v3/importlist/bulk \
  -X DELETE \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}" \
  -d '{
    "ids": [
      0
    ],
    "tags": [
      0
    ],
    "applyTags": "add",
    "enabled": true,
    "enableAuto": true,
    "rootFolderPath": "string",
    "qualityProfileId": 0,
    "minimumAvailability": "tba"
  }'
```

`DELETE /api/v3/importlist/bulk`

> Body parameter

```json
{
  "ids": [
    0
  ],
  "tags": [
    0
  ],
  "applyTags": "add",
  "enabled": true,
  "enableAuto": true,
  "rootFolderPath": "string",
  "qualityProfileId": 0,
  "minimumAvailability": "tba"
}
```

<h3 id="deleteapiv3importlistbulk-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[ImportListBulkResource](#schemaimportlistbulkresource)|false|none|
|» ids|body|[integer(int32)]|false|none|
|» tags|body|[integer(int32)]|false|none|
|» applyTags|body|[ApplyTags](#schemaapplytags)|false|none|
|» enabled|body|boolean \| null|false|none|
|» enableAuto|body|boolean \| null|false|none|
|» rootFolderPath|body|string \| null|false|none|
|» qualityProfileId|body|integer(int32) \| null|false|none|
|» minimumAvailability|body|[MovieStatusType](#schemamoviestatustype)|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» applyTags|add|
|» applyTags|remove|
|» applyTags|replace|
|» minimumAvailability|tba|
|» minimumAvailability|announced|
|» minimumAvailability|inCinemas|
|» minimumAvailability|released|
|» minimumAvailability|deleted|

> Example responses

> 200 Response

```json
null
```

<h3 id="deleteapiv3importlistbulk-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## get/api/v3/importlist/schema

> Code samples

```bash
curl http://localhost:7878/api/v3/importlist/schema \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /api/v3/importlist/schema`

> Example responses

> 200 Response

```json
[
  {
    "id": 0,
    "name": "string",
    "fields": [
      {
        "order": 0,
        "name": "string",
        "label": "string",
        "unit": "string",
        "helpText": "string",
        "helpTextWarning": "string",
        "helpLink": "string",
        "value": null,
        "type": "string",
        "advanced": true,
        "selectOptions": [
          {
            "value": 0,
            "name": "string",
            "order": 0,
            "hint": "string",
            "dividerAfter": true
          }
        ],
        "selectOptionsProviderAction": "string",
        "section": "string",
        "hidden": "string",
        "privacy": "normal",
        "placeholder": "string",
        "isFloat": true
      }
    ],
    "implementationName": "string",
    "implementation": "string",
    "configContract": "string",
    "infoLink": "string",
    "message": {
      "message": "string",
      "type": "info"
    },
    "tags": [
      0
    ],
    "presets": [
      {}
    ],
    "enabled": true,
    "enableAuto": true,
    "monitor": "movieOnly",
    "rootFolderPath": "string",
    "qualityProfileId": 0,
    "searchOnAdd": true,
    "minimumAvailability": "tba",
    "listType": "program",
    "listOrder": 0,
    "minRefreshInterval": "string"
  }
]
```

<h3 id="getapiv3importlistschema-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="getapiv3importlistschema-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[ImportListResource](#schemaimportlistresource)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## post/api/v3/importlist/test

> Code samples

```bash
curl http://localhost:7878/api/v3/importlist/test \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "X-Api-Key: ${API_KEY}" \
  -d '{
    "id": 0,
    "name": "string",
    "fields": [
      {
        "order": 0,
        "name": "string",
        "label": "string",
        "unit": "string",
        "helpText": "string",
        "helpTextWarning": "string",
        "helpLink": "string",
        "value": null,
        "type": "string",
        "advanced": true,
        "selectOptions": [
          {
            "value": 0,
            "name": "string",
            "order": 0,
            "hint": "string",
            "dividerAfter": true
          }
        ],
        "selectOptionsProviderAction": "string",
        "section": "string",
        "hidden": "string",
        "privacy": "normal",
        "placeholder": "string",
        "isFloat": true
      }
    ],
    "implementationName": "string",
    "implementation": "string",
    "configContract": "string",
    "infoLink": "string",
    "message": {
      "message": "string",
      "type": "info"
    },
    "tags": [
      0
    ],
    "presets": [
      {}
    ],
    "enabled": true,
    "enableAuto": true,
    "monitor": "movieOnly",
    "rootFolderPath": "string",
    "qualityProfileId": 0,
    "searchOnAdd": true,
    "minimumAvailability": "tba",
    "listType": "program",
    "listOrder": 0,
    "minRefreshInterval": "string"
  }'
```

`POST /api/v3/importlist/test`

> Body parameter

```json
{
  "id": 0,
  "name": "string",
  "fields": [
    {
      "order": 0,
      "name": "string",
      "label": "string",
      "unit": "string",
      "helpText": "string",
      "helpTextWarning": "string",
      "helpLink": "string",
      "value": null,
      "type": "string",
      "advanced": true,
      "selectOptions": [
        {
          "value": 0,
          "name": "string",
          "order": 0,
          "hint": "string",
          "dividerAfter": true
        }
      ],
      "selectOptionsProviderAction": "string",
      "section": "string",
      "hidden": "string",
      "privacy": "normal",
      "placeholder": "string",
      "isFloat": true
    }
  ],
  "implementationName": "string",
  "implementation": "string",
  "configContract": "string",
  "infoLink": "string",
  "message": {
    "message": "string",
    "type": "info"
  },
  "tags": [
    0
  ],
  "presets": [
    {}
  ],
  "enabled": true,
  "enableAuto": true,
  "monitor": "movieOnly",
  "rootFolderPath": "string",
  "qualityProfileId": 0,
  "searchOnAdd": true,
  "minimumAvailability": "tba",
  "listType": "program",
  "listOrder": 0,
  "minRefreshInterval": "string"
}
```

<h3 id="postapiv3importlisttest-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|forceTest|query|boolean|false|none|
|body|body|[ImportListResource](#schemaimportlistresource)|false|none|
|» id|body|integer(int32)|false|none|
|» name|body|string \| null|false|none|
|» fields|body|[[Field](#schemafield)]|false|none|
|» implementationName|body|string \| null|false|none|
|» implementation|body|string \| null|false|none|
|» configContract|body|string \| null|false|none|
|» infoLink|body|string \| null|false|none|
|» message|body|[ProviderMessage](#schemaprovidermessage)|false|none|
|» tags|body|[integer(int32)]|false|none|
|» presets|body|[[ImportListResource](#schemaimportlistresource)]|false|none|
|» enabled|body|boolean|false|none|
|» enableAuto|body|boolean|false|none|
|» monitor|body|[MonitorTypes](#schemamonitortypes)|false|none|
|» rootFolderPath|body|string \| null|false|none|
|» qualityProfileId|body|integer(int32)|false|none|
|» searchOnAdd|body|boolean|false|none|
|» minimumAvailability|body|[MovieStatusType](#schemamoviestatustype)|false|none|
|» listType|body|[ImportListType](#schemaimportlisttype)|false|none|
|» listOrder|body|integer(int32)|false|none|
|» minRefreshInterval|body|string(date-span)|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» monitor|movieOnly|
|» monitor|movieAndCollection|
|» monitor|none|
|» minimumAvailability|tba|
|» minimumAvailability|announced|
|» minimumAvailability|inCinemas|
|» minimumAvailability|released|
|» minimumAvailability|deleted|
|» listType|program|
|» listType|tmdb|
|» listType|trakt|
|» listType|plex|
|» listType|simkl|
|» listType|other|
|» listType|advanced|

<h3 id="postapiv3importlisttest-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## post/api/v3/importlist/testall

> Code samples

```bash
curl http://localhost:7878/api/v3/importlist/testall \
  -X POST \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}"
```

`POST /api/v3/importlist/testall`

> Example responses

> 200 Response

```json
[
  {
    "id": 0,
    "isValid": true,
    "validationFailures": [
      {
        "propertyName": "string",
        "errorMessage": "string",
        "attemptedValue": null,
        "customState": null,
        "severity": "error",
        "errorCode": "string",
        "formattedMessageArguments": [
          null
        ],
        "formattedMessagePlaceholderValues": {
          "property1": null,
          "property2": null
        }
      }
    ]
  }
]
```

> 400 Response

```json
[
  {
    "id": 0,
    "isValid": true,
    "validationFailures": [
      {
        "propertyName": "string",
        "errorMessage": "string",
        "attemptedValue": null,
        "customState": null,
        "severity": "error",
        "errorCode": "string",
        "formattedMessageArguments": [
          null
        ],
        "formattedMessagePlaceholderValues": {
          "property1": null,
          "property2": null
        }
      }
    ]
  }
]
```

<h3 id="postapiv3importlisttestall-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|Inline|

<h3 id="postapiv3importlisttestall-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[ProviderTestAllResult](#schemaprovidertestallresult)]|false|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[ProviderTestAllResult](#schemaprovidertestallresult)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## post/api/v3/importlist/action/{name}

> Code samples

```bash
curl http://localhost:7878/api/v3/importlist/action/string \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "X-Api-Key: ${API_KEY}" \
  -d '{
    "id": 0,
    "name": "string",
    "fields": [
      {
        "order": 0,
        "name": "string",
        "label": "string",
        "unit": "string",
        "helpText": "string",
        "helpTextWarning": "string",
        "helpLink": "string",
        "value": null,
        "type": "string",
        "advanced": true,
        "selectOptions": [
          {
            "value": 0,
            "name": "string",
            "order": 0,
            "hint": "string",
            "dividerAfter": true
          }
        ],
        "selectOptionsProviderAction": "string",
        "section": "string",
        "hidden": "string",
        "privacy": "normal",
        "placeholder": "string",
        "isFloat": true
      }
    ],
    "implementationName": "string",
    "implementation": "string",
    "configContract": "string",
    "infoLink": "string",
    "message": {
      "message": "string",
      "type": "info"
    },
    "tags": [
      0
    ],
    "presets": [
      {}
    ],
    "enabled": true,
    "enableAuto": true,
    "monitor": "movieOnly",
    "rootFolderPath": "string",
    "qualityProfileId": 0,
    "searchOnAdd": true,
    "minimumAvailability": "tba",
    "listType": "program",
    "listOrder": 0,
    "minRefreshInterval": "string"
  }'
```

`POST /api/v3/importlist/action/{name}`

> Body parameter

```json
{
  "id": 0,
  "name": "string",
  "fields": [
    {
      "order": 0,
      "name": "string",
      "label": "string",
      "unit": "string",
      "helpText": "string",
      "helpTextWarning": "string",
      "helpLink": "string",
      "value": null,
      "type": "string",
      "advanced": true,
      "selectOptions": [
        {
          "value": 0,
          "name": "string",
          "order": 0,
          "hint": "string",
          "dividerAfter": true
        }
      ],
      "selectOptionsProviderAction": "string",
      "section": "string",
      "hidden": "string",
      "privacy": "normal",
      "placeholder": "string",
      "isFloat": true
    }
  ],
  "implementationName": "string",
  "implementation": "string",
  "configContract": "string",
  "infoLink": "string",
  "message": {
    "message": "string",
    "type": "info"
  },
  "tags": [
    0
  ],
  "presets": [
    {}
  ],
  "enabled": true,
  "enableAuto": true,
  "monitor": "movieOnly",
  "rootFolderPath": "string",
  "qualityProfileId": 0,
  "searchOnAdd": true,
  "minimumAvailability": "tba",
  "listType": "program",
  "listOrder": 0,
  "minRefreshInterval": "string"
}
```

<h3 id="postapiv3importlistactionname-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|none|
|body|body|[ImportListResource](#schemaimportlistresource)|false|none|
|» id|body|integer(int32)|false|none|
|» name|body|string \| null|false|none|
|» fields|body|[[Field](#schemafield)]|false|none|
|» implementationName|body|string \| null|false|none|
|» implementation|body|string \| null|false|none|
|» configContract|body|string \| null|false|none|
|» infoLink|body|string \| null|false|none|
|» message|body|[ProviderMessage](#schemaprovidermessage)|false|none|
|» tags|body|[integer(int32)]|false|none|
|» presets|body|[[ImportListResource](#schemaimportlistresource)]|false|none|
|» enabled|body|boolean|false|none|
|» enableAuto|body|boolean|false|none|
|» monitor|body|[MonitorTypes](#schemamonitortypes)|false|none|
|» rootFolderPath|body|string \| null|false|none|
|» qualityProfileId|body|integer(int32)|false|none|
|» searchOnAdd|body|boolean|false|none|
|» minimumAvailability|body|[MovieStatusType](#schemamoviestatustype)|false|none|
|» listType|body|[ImportListType](#schemaimportlisttype)|false|none|
|» listOrder|body|integer(int32)|false|none|
|» minRefreshInterval|body|string(date-span)|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» monitor|movieOnly|
|» monitor|movieAndCollection|
|» monitor|none|
|» minimumAvailability|tba|
|» minimumAvailability|announced|
|» minimumAvailability|inCinemas|
|» minimumAvailability|released|
|» minimumAvailability|deleted|
|» listType|program|
|» listType|tmdb|
|» listType|trakt|
|» listType|plex|
|» listType|simkl|
|» listType|other|
|» listType|advanced|

<h3 id="postapiv3importlistactionname-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|400|Bad Request|Bad Request|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

<h1 id="radarr-importlistconfig">ImportListConfig</h1>

## get/api/v3/config/importlist

> Code samples

```bash
curl http://localhost:7878/api/v3/config/importlist \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /api/v3/config/importlist`

> Example responses

> 200 Response

```json
{
  "id": 0,
  "listSyncLevel": "string"
}
```

<h3 id="getapiv3configimportlist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[ImportListConfigResource](#schemaimportlistconfigresource)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## get/api/v3/config/importlist/{id}

> Code samples

```bash
curl http://localhost:7878/api/v3/config/importlist/0 \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /api/v3/config/importlist/{id}`

<h3 id="getapiv3configimportlistid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|none|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "listSyncLevel": "string"
}
```

<h3 id="getapiv3configimportlistid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[ImportListConfigResource](#schemaimportlistconfigresource)|
|404|Not Found|Not Found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## put/api/v3/config/importlist/{id}

> Code samples

```bash
curl http://localhost:7878/api/v3/config/importlist/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}" \
  -d '{
    "id": 0,
    "listSyncLevel": "string"
  }'
```

`PUT /api/v3/config/importlist/{id}`

> Body parameter

```json
{
  "id": 0,
  "listSyncLevel": "string"
}
```

<h3 id="putapiv3configimportlistid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|body|body|[ImportListConfigResource](#schemaimportlistconfigresource)|false|none|
|» id|body|integer(int32)|false|none|
|» listSyncLevel|body|string \| null|false|none|

> Example responses

> 202 Response

```json
{
  "id": 0,
  "listSyncLevel": "string"
}
```

<h3 id="putapiv3configimportlistid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|Accepted|[ImportListConfigResource](#schemaimportlistconfigresource)|
|404|Not Found|Not Found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

<h1 id="radarr-importlistexclusion">ImportListExclusion</h1>

## get/api/v3/exclusions

> Code samples

```bash
curl http://localhost:7878/api/v3/exclusions \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /api/v3/exclusions`

<aside class="warning">
This operation is deprecated
</aside>

> Example responses

> 200 Response

```json
[
  {
    "id": 0,
    "name": "string",
    "fields": [
      {
        "order": 0,
        "name": "string",
        "label": "string",
        "unit": "string",
        "helpText": "string",
        "helpTextWarning": "string",
        "helpLink": "string",
        "value": null,
        "type": "string",
        "advanced": true,
        "selectOptions": [
          {
            "value": 0,
            "name": "string",
            "order": 0,
            "hint": "string",
            "dividerAfter": true
          }
        ],
        "selectOptionsProviderAction": "string",
        "section": "string",
        "hidden": "string",
        "privacy": "normal",
        "placeholder": "string",
        "isFloat": true
      }
    ],
    "implementationName": "string",
    "implementation": "string",
    "configContract": "string",
    "infoLink": "string",
    "message": {
      "message": "string",
      "type": "info"
    },
    "tags": [
      0
    ],
    "presets": [
      {}
    ],
    "tmdbId": 0,
    "movieTitle": "string",
    "movieYear": 0
  }
]
```

<h3 id="getapiv3exclusions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="getapiv3exclusions-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[ImportListExclusionResource](#schemaimportlistexclusionresource)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## post/api/v3/exclusions

> Code samples

```bash
curl http://localhost:7878/api/v3/exclusions \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}" \
  -d '{
    "id": 0,
    "name": "string",
    "fields": [
      {
        "order": 0,
        "name": "string",
        "label": "string",
        "unit": "string",
        "helpText": "string",
        "helpTextWarning": "string",
        "helpLink": "string",
        "value": null,
        "type": "string",
        "advanced": true,
        "selectOptions": [
          {
            "value": 0,
            "name": "string",
            "order": 0,
            "hint": "string",
            "dividerAfter": true
          }
        ],
        "selectOptionsProviderAction": "string",
        "section": "string",
        "hidden": "string",
        "privacy": "normal",
        "placeholder": "string",
        "isFloat": true
      }
    ],
    "implementationName": "string",
    "implementation": "string",
    "configContract": "string",
    "infoLink": "string",
    "message": {
      "message": "string",
      "type": "info"
    },
    "tags": [
      0
    ],
    "presets": [
      {}
    ],
    "tmdbId": 0,
    "movieTitle": "string",
    "movieYear": 0
  }'
```

`POST /api/v3/exclusions`

> Body parameter

```json
{
  "id": 0,
  "name": "string",
  "fields": [
    {
      "order": 0,
      "name": "string",
      "label": "string",
      "unit": "string",
      "helpText": "string",
      "helpTextWarning": "string",
      "helpLink": "string",
      "value": null,
      "type": "string",
      "advanced": true,
      "selectOptions": [
        {
          "value": 0,
          "name": "string",
          "order": 0,
          "hint": "string",
          "dividerAfter": true
        }
      ],
      "selectOptionsProviderAction": "string",
      "section": "string",
      "hidden": "string",
      "privacy": "normal",
      "placeholder": "string",
      "isFloat": true
    }
  ],
  "implementationName": "string",
  "implementation": "string",
  "configContract": "string",
  "infoLink": "string",
  "message": {
    "message": "string",
    "type": "info"
  },
  "tags": [
    0
  ],
  "presets": [
    {}
  ],
  "tmdbId": 0,
  "movieTitle": "string",
  "movieYear": 0
}
```

<h3 id="postapiv3exclusions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[ImportListExclusionResource](#schemaimportlistexclusionresource)|false|none|
|» id|body|integer(int32)|false|none|
|» name|body|string \| null|false|none|
|» fields|body|[[Field](#schemafield)]|false|none|
|» implementationName|body|string \| null|false|none|
|» implementation|body|string \| null|false|none|
|» configContract|body|string \| null|false|none|
|» infoLink|body|string \| null|false|none|
|» message|body|[ProviderMessage](#schemaprovidermessage)|false|none|
|» tags|body|[integer(int32)]|false|none|
|» presets|body|[[ImportListExclusionResource](#schemaimportlistexclusionresource)]|false|none|
|» tmdbId|body|integer(int32)|false|none|
|» movieTitle|body|string \| null|false|none|
|» movieYear|body|integer(int32)|false|none|

> Example responses

> 201 Response

```json
{
  "id": 0,
  "name": "string",
  "fields": [
    {
      "order": 0,
      "name": "string",
      "label": "string",
      "unit": "string",
      "helpText": "string",
      "helpTextWarning": "string",
      "helpLink": "string",
      "value": null,
      "type": "string",
      "advanced": true,
      "selectOptions": [
        {
          "value": 0,
          "name": "string",
          "order": 0,
          "hint": "string",
          "dividerAfter": true
        }
      ],
      "selectOptionsProviderAction": "string",
      "section": "string",
      "hidden": "string",
      "privacy": "normal",
      "placeholder": "string",
      "isFloat": true
    }
  ],
  "implementationName": "string",
  "implementation": "string",
  "configContract": "string",
  "infoLink": "string",
  "message": {
    "message": "string",
    "type": "info"
  },
  "tags": [
    0
  ],
  "presets": [
    {}
  ],
  "tmdbId": 0,
  "movieTitle": "string",
  "movieYear": 0
}
```

<h3 id="postapiv3exclusions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Created|[ImportListExclusionResource](#schemaimportlistexclusionresource)|
|404|Not Found|Not Found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## get/api/v3/exclusions/paged

> Code samples

```bash
curl http://localhost:7878/api/v3/exclusions/paged \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /api/v3/exclusions/paged`

<h3 id="getapiv3exclusionspaged-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|page|query|integer(int32)|false|none|
|pageSize|query|integer(int32)|false|none|
|sortKey|query|string|false|none|
|sortDirection|query|[SortDirection](#schemasortdirection)|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|sortDirection|default|
|sortDirection|ascending|
|sortDirection|descending|

> Example responses

> 200 Response

```json
{
  "page": 0,
  "pageSize": 0,
  "sortKey": "string",
  "sortDirection": "default",
  "totalRecords": 0,
  "records": [
    {
      "id": 0,
      "name": "string",
      "fields": [
        {
          "order": 0,
          "name": "string",
          "label": "string",
          "unit": "string",
          "helpText": "string",
          "helpTextWarning": "string",
          "helpLink": "string",
          "value": null,
          "type": "string",
          "advanced": true,
          "selectOptions": [
            {
              "value": 0,
              "name": "string",
              "order": 0,
              "hint": "string",
              "dividerAfter": true
            }
          ],
          "selectOptionsProviderAction": "string",
          "section": "string",
          "hidden": "string",
          "privacy": "normal",
          "placeholder": "string",
          "isFloat": true
        }
      ],
      "implementationName": "string",
      "implementation": "string",
      "configContract": "string",
      "infoLink": "string",
      "message": {
        "message": "string",
        "type": "info"
      },
      "tags": [
        0
      ],
      "presets": [
        {}
      ],
      "tmdbId": 0,
      "movieTitle": "string",
      "movieYear": 0
    }
  ]
}
```

<h3 id="getapiv3exclusionspaged-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[ImportListExclusionResourcePagingResource](#schemaimportlistexclusionresourcepagingresource)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## get/api/v3/exclusions/{id}

> Code samples

```bash
curl http://localhost:7878/api/v3/exclusions/0 \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /api/v3/exclusions/{id}`

<h3 id="getapiv3exclusionsid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|none|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "name": "string",
  "fields": [
    {
      "order": 0,
      "name": "string",
      "label": "string",
      "unit": "string",
      "helpText": "string",
      "helpTextWarning": "string",
      "helpLink": "string",
      "value": null,
      "type": "string",
      "advanced": true,
      "selectOptions": [
        {
          "value": 0,
          "name": "string",
          "order": 0,
          "hint": "string",
          "dividerAfter": true
        }
      ],
      "selectOptionsProviderAction": "string",
      "section": "string",
      "hidden": "string",
      "privacy": "normal",
      "placeholder": "string",
      "isFloat": true
    }
  ],
  "implementationName": "string",
  "implementation": "string",
  "configContract": "string",
  "infoLink": "string",
  "message": {
    "message": "string",
    "type": "info"
  },
  "tags": [
    0
  ],
  "presets": [
    {}
  ],
  "tmdbId": 0,
  "movieTitle": "string",
  "movieYear": 0
}
```

<h3 id="getapiv3exclusionsid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[ImportListExclusionResource](#schemaimportlistexclusionresource)|
|404|Not Found|Not Found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## put/api/v3/exclusions/{id}

> Code samples

```bash
curl http://localhost:7878/api/v3/exclusions/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}" \
  -d '{
    "id": 0,
    "name": "string",
    "fields": [
      {
        "order": 0,
        "name": "string",
        "label": "string",
        "unit": "string",
        "helpText": "string",
        "helpTextWarning": "string",
        "helpLink": "string",
        "value": null,
        "type": "string",
        "advanced": true,
        "selectOptions": [
          {
            "value": 0,
            "name": "string",
            "order": 0,
            "hint": "string",
            "dividerAfter": true
          }
        ],
        "selectOptionsProviderAction": "string",
        "section": "string",
        "hidden": "string",
        "privacy": "normal",
        "placeholder": "string",
        "isFloat": true
      }
    ],
    "implementationName": "string",
    "implementation": "string",
    "configContract": "string",
    "infoLink": "string",
    "message": {
      "message": "string",
      "type": "info"
    },
    "tags": [
      0
    ],
    "presets": [
      {}
    ],
    "tmdbId": 0,
    "movieTitle": "string",
    "movieYear": 0
  }'
```

`PUT /api/v3/exclusions/{id}`

> Body parameter

```json
{
  "id": 0,
  "name": "string",
  "fields": [
    {
      "order": 0,
      "name": "string",
      "label": "string",
      "unit": "string",
      "helpText": "string",
      "helpTextWarning": "string",
      "helpLink": "string",
      "value": null,
      "type": "string",
      "advanced": true,
      "selectOptions": [
        {
          "value": 0,
          "name": "string",
          "order": 0,
          "hint": "string",
          "dividerAfter": true
        }
      ],
      "selectOptionsProviderAction": "string",
      "section": "string",
      "hidden": "string",
      "privacy": "normal",
      "placeholder": "string",
      "isFloat": true
    }
  ],
  "implementationName": "string",
  "implementation": "string",
  "configContract": "string",
  "infoLink": "string",
  "message": {
    "message": "string",
    "type": "info"
  },
  "tags": [
    0
  ],
  "presets": [
    {}
  ],
  "tmdbId": 0,
  "movieTitle": "string",
  "movieYear": 0
}
```

<h3 id="putapiv3exclusionsid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|body|body|[ImportListExclusionResource](#schemaimportlistexclusionresource)|false|none|
|» id|body|integer(int32)|false|none|
|» name|body|string \| null|false|none|
|» fields|body|[[Field](#schemafield)]|false|none|
|» implementationName|body|string \| null|false|none|
|» implementation|body|string \| null|false|none|
|» configContract|body|string \| null|false|none|
|» infoLink|body|string \| null|false|none|
|» message|body|[ProviderMessage](#schemaprovidermessage)|false|none|
|» tags|body|[integer(int32)]|false|none|
|» presets|body|[[ImportListExclusionResource](#schemaimportlistexclusionresource)]|false|none|
|» tmdbId|body|integer(int32)|false|none|
|» movieTitle|body|string \| null|false|none|
|» movieYear|body|integer(int32)|false|none|

> Example responses

> 202 Response

```json
{
  "id": 0,
  "name": "string",
  "fields": [
    {
      "order": 0,
      "name": "string",
      "label": "string",
      "unit": "string",
      "helpText": "string",
      "helpTextWarning": "string",
      "helpLink": "string",
      "value": null,
      "type": "string",
      "advanced": true,
      "selectOptions": [
        {
          "value": 0,
          "name": "string",
          "order": 0,
          "hint": "string",
          "dividerAfter": true
        }
      ],
      "selectOptionsProviderAction": "string",
      "section": "string",
      "hidden": "string",
      "privacy": "normal",
      "placeholder": "string",
      "isFloat": true
    }
  ],
  "implementationName": "string",
  "implementation": "string",
  "configContract": "string",
  "infoLink": "string",
  "message": {
    "message": "string",
    "type": "info"
  },
  "tags": [
    0
  ],
  "presets": [
    {}
  ],
  "tmdbId": 0,
  "movieTitle": "string",
  "movieYear": 0
}
```

<h3 id="putapiv3exclusionsid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|Accepted|[ImportListExclusionResource](#schemaimportlistexclusionresource)|
|404|Not Found|Not Found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## delete/api/v3/exclusions/{id}

> Code samples

```bash
curl http://localhost:7878/api/v3/exclusions/0 \
  -X DELETE \
  -H "X-Api-Key: ${API_KEY}"
```

`DELETE /api/v3/exclusions/{id}`

<h3 id="deleteapiv3exclusionsid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|none|

<h3 id="deleteapiv3exclusionsid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## post/api/v3/exclusions/bulk

> Code samples

```bash
curl http://localhost:7878/api/v3/exclusions/bulk \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}" \
  -d '[
    {
      "id": 0,
      "name": "string",
      "fields": [
        {
          "order": 0,
          "name": "string",
          "label": "string",
          "unit": "string",
          "helpText": "string",
          "helpTextWarning": "string",
          "helpLink": "string",
          "value": null,
          "type": "string",
          "advanced": true,
          "selectOptions": [
            {
              "value": 0,
              "name": "string",
              "order": 0,
              "hint": "string",
              "dividerAfter": true
            }
          ],
          "selectOptionsProviderAction": "string",
          "section": "string",
          "hidden": "string",
          "privacy": "normal",
          "placeholder": "string",
          "isFloat": true
        }
      ],
      "implementationName": "string",
      "implementation": "string",
      "configContract": "string",
      "infoLink": "string",
      "message": {
        "message": "string",
        "type": "info"
      },
      "tags": [
        0
      ],
      "presets": [
        {}
      ],
      "tmdbId": 0,
      "movieTitle": "string",
      "movieYear": 0
    }
  ]'
```

`POST /api/v3/exclusions/bulk`

> Body parameter

```json
[
  {
    "id": 0,
    "name": "string",
    "fields": [
      {
        "order": 0,
        "name": "string",
        "label": "string",
        "unit": "string",
        "helpText": "string",
        "helpTextWarning": "string",
        "helpLink": "string",
        "value": null,
        "type": "string",
        "advanced": true,
        "selectOptions": [
          {
            "value": 0,
            "name": "string",
            "order": 0,
            "hint": "string",
            "dividerAfter": true
          }
        ],
        "selectOptionsProviderAction": "string",
        "section": "string",
        "hidden": "string",
        "privacy": "normal",
        "placeholder": "string",
        "isFloat": true
      }
    ],
    "implementationName": "string",
    "implementation": "string",
    "configContract": "string",
    "infoLink": "string",
    "message": {
      "message": "string",
      "type": "info"
    },
    "tags": [
      0
    ],
    "presets": [
      {}
    ],
    "tmdbId": 0,
    "movieTitle": "string",
    "movieYear": 0
  }
]
```

<h3 id="postapiv3exclusionsbulk-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[[ImportListExclusionResource](#schemaimportlistexclusionresource)]|false|none|

> Example responses

> 200 Response

```json
[
  {
    "id": 0,
    "name": "string",
    "fields": [
      {
        "order": 0,
        "name": "string",
        "label": "string",
        "unit": "string",
        "helpText": "string",
        "helpTextWarning": "string",
        "helpLink": "string",
        "value": null,
        "type": "string",
        "advanced": true,
        "selectOptions": [
          {
            "value": 0,
            "name": "string",
            "order": 0,
            "hint": "string",
            "dividerAfter": true
          }
        ],
        "selectOptionsProviderAction": "string",
        "section": "string",
        "hidden": "string",
        "privacy": "normal",
        "placeholder": "string",
        "isFloat": true
      }
    ],
    "implementationName": "string",
    "implementation": "string",
    "configContract": "string",
    "infoLink": "string",
    "message": {
      "message": "string",
      "type": "info"
    },
    "tags": [
      0
    ],
    "presets": [
      {}
    ],
    "tmdbId": 0,
    "movieTitle": "string",
    "movieYear": 0
  }
]
```

<h3 id="postapiv3exclusionsbulk-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="postapiv3exclusionsbulk-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[ImportListExclusionResource](#schemaimportlistexclusionresource)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## delete/api/v3/exclusions/bulk

> Code samples

```bash
curl http://localhost:7878/api/v3/exclusions/bulk \
  -X DELETE \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}" \
  -d '{
    "ids": [
      0
    ]
  }'
```

`DELETE /api/v3/exclusions/bulk`

> Body parameter

```json
{
  "ids": [
    0
  ]
}
```

<h3 id="deleteapiv3exclusionsbulk-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[ImportListExclusionBulkResource](#schemaimportlistexclusionbulkresource)|false|none|
|» ids|body|[integer(int32)]|false|none|

> Example responses

> 200 Response

```json
null
```

<h3 id="deleteapiv3exclusionsbulk-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

<h1 id="radarr-importlistmovies">ImportListMovies</h1>

## get/api/v3/importlist/movie

> Code samples

```bash
curl http://localhost:7878/api/v3/importlist/movie \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /api/v3/importlist/movie`

<h3 id="getapiv3importlistmovie-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|includeRecommendations|query|boolean|false|none|
|includeTrending|query|boolean|false|none|
|includePopular|query|boolean|false|none|

> Example responses

> 200 Response

```json
[
  {
    "id": 0,
    "title": "string",
    "sortTitle": "string",
    "originalLanguage": {
      "id": 0,
      "name": "string"
    },
    "status": "tba",
    "overview": "string",
    "inCinemas": "1970-01-01T00:00:00Z",
    "physicalRelease": "1970-01-01T00:00:00Z",
    "digitalRelease": "1970-01-01T00:00:00Z",
    "images": [
      {
        "coverType": "unknown",
        "url": "string",
        "remoteUrl": "string"
      }
    ],
    "website": "string",
    "remotePoster": "string",
    "year": 0,
    "youTubeTrailerId": "string",
    "studio": "string",
    "runtime": 0,
    "imdbId": "string",
    "tmdbId": 0,
    "folder": "string",
    "certification": "string",
    "popularity": 0,
    "genres": [
      "string"
    ],
    "ratings": {
      "imdb": {
        "votes": 0,
        "value": 0,
        "type": "user"
      },
      "tmdb": {
        "votes": 0,
        "value": 0,
        "type": "user"
      },
      "metacritic": {
        "votes": 0,
        "value": 0,
        "type": "user"
      },
      "rottenTomatoes": {
        "votes": 0,
        "value": 0,
        "type": "user"
      },
      "trakt": {
        "votes": 0,
        "value": 0,
        "type": "user"
      }
    },
    "collection": {
      "id": 0,
      "title": "string",
      "cleanTitle": "string",
      "sortTitle": "string",
      "tmdbId": 0,
      "overview": "string",
      "monitored": true,
      "qualityProfileId": 0,
      "rootFolderPath": "string",
      "searchOnAdd": true,
      "minimumAvailability": "tba",
      "lastInfoSync": "1970-01-01T00:00:00Z",
      "images": [
        {
          "coverType": "unknown",
          "url": "string",
          "remoteUrl": "string"
        }
      ],
      "added": "1970-01-01T00:00:00Z",
      "movies": [
        {
          "id": 0,
          "tmdbId": 0,
          "images": [
            {
              "coverType": "unknown",
              "url": "string",
              "remoteUrl": "string"
            }
          ],
          "genres": [
            "string"
          ],
          "keywords": [
            "string"
          ],
          "inCinemas": "1970-01-01T00:00:00Z",
          "physicalRelease": "1970-01-01T00:00:00Z",
          "digitalRelease": "1970-01-01T00:00:00Z",
          "certification": "string",
          "year": 0,
          "ratings": {
            "imdb": {
              "votes": 0,
              "value": 0,
              "type": "user"
            },
            "tmdb": {
              "votes": 0,
              "value": 0,
              "type": "user"
            },
            "metacritic": {
              "votes": 0,
              "value": 0,
              "type": "user"
            },
            "rottenTomatoes": {
              "votes": 0,
              "value": 0,
              "type": "user"
            },
            "trakt": {
              "votes": 0,
              "value": 0,
              "type": "user"
            }
          },
          "collectionTmdbId": 0,
          "collectionTitle": "string",
          "lastInfoSync": "1970-01-01T00:00:00Z",
          "runtime": 0,
          "website": "string",
          "imdbId": "string",
          "title": "string",
          "cleanTitle": "string",
          "sortTitle": "string",
          "status": "tba",
          "overview": "string",
          "alternativeTitles": [
            {
              "id": 0,
              "sourceType": "tmdb",
              "movieMetadataId": 0,
              "title": "string",
              "cleanTitle": "string"
            }
          ],
          "translations": [
            {
              "id": 0,
              "movieMetadataId": 0,
              "title": "string",
              "cleanTitle": "string",
              "overview": "string",
              "language": {
                "id": 0,
                "name": "string"
              }
            }
          ],
          "secondaryYear": 0,
          "youTubeTrailerId": "string",
          "studio": "string",
          "originalTitle": "string",
          "cleanOriginalTitle": "string",
          "originalLanguage": {
            "id": 0,
            "name": "string"
          },
          "recommendations": [
            0
          ],
          "popularity": 0,
          "isRecentMovie": true
        }
      ],
      "tags": [
        0
      ]
    },
    "isExcluded": true,
    "isExisting": true,
    "isTrending": true,
    "isPopular": true,
    "isRecommendation": true,
    "lists": [
      0
    ]
  }
]
```

<h3 id="getapiv3importlistmovie-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="getapiv3importlistmovie-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[ImportListMoviesResource](#schemaimportlistmoviesresource)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## post/api/v3/importlist/movie

> Code samples

```bash
curl http://localhost:7878/api/v3/importlist/movie \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}" \
  -d '[
    {
      "id": 0,
      "title": "string",
      "originalTitle": "string",
      "originalLanguage": {
        "id": 0,
        "name": "string"
      },
      "alternateTitles": [
        {
          "id": 0,
          "sourceType": "tmdb",
          "movieMetadataId": 0,
          "title": "string",
          "cleanTitle": "string"
        }
      ],
      "secondaryYear": 0,
      "secondaryYearSourceId": 0,
      "sortTitle": "string",
      "sizeOnDisk": 0,
      "status": "tba",
      "overview": "string",
      "inCinemas": "1970-01-01T00:00:00Z",
      "physicalRelease": "1970-01-01T00:00:00Z",
      "digitalRelease": "1970-01-01T00:00:00Z",
      "releaseDate": "1970-01-01T00:00:00Z",
      "physicalReleaseNote": "string",
      "images": [
        {
          "coverType": "unknown",
          "url": "string",
          "remoteUrl": "string"
        }
      ],
      "website": "string",
      "remotePoster": "string",
      "year": 0,
      "youTubeTrailerId": "string",
      "studio": "string",
      "path": "string",
      "qualityProfileId": 0,
      "hasFile": true,
      "movieFileId": 0,
      "monitored": true,
      "minimumAvailability": "tba",
      "isAvailable": true,
      "folderName": "string",
      "runtime": 0,
      "cleanTitle": "string",
      "imdbId": "string",
      "tmdbId": 0,
      "titleSlug": "string",
      "rootFolderPath": "string",
      "folder": "string",
      "certification": "string",
      "genres": [
        "string"
      ],
      "keywords": [
        "string"
      ],
      "tags": [
        0
      ],
      "added": "1970-01-01T00:00:00Z",
      "addOptions": {
        "ignoreEpisodesWithFiles": true,
        "ignoreEpisodesWithoutFiles": true,
        "monitor": "movieOnly",
        "searchForMovie": true,
        "addMethod": "manual"
      },
      "ratings": {
        "imdb": {
          "votes": 0,
          "value": 0,
          "type": "user"
        },
        "tmdb": {
          "votes": 0,
          "value": 0,
          "type": "user"
        },
        "metacritic": {
          "votes": 0,
          "value": 0,
          "type": "user"
        },
        "rottenTomatoes": {
          "votes": 0,
          "value": 0,
          "type": "user"
        },
        "trakt": {
          "votes": 0,
          "value": 0,
          "type": "user"
        }
      },
      "movieFile": {
        "id": 0,
        "movieId": 0,
        "relativePath": "string",
        "path": "string",
        "size": 0,
        "dateAdded": "1970-01-01T00:00:00Z",
        "sceneName": "string",
        "releaseGroup": "string",
        "edition": "string",
        "languages": [
          {
            "id": 0,
            "name": "string"
          }
        ],
        "quality": {
          "quality": {
            "id": 0,
            "name": "string",
            "source": "unknown",
            "resolution": 0,
            "modifier": "none"
          },
          "revision": {
            "version": 0,
            "real": 0,
            "isRepack": true
          }
        },
        "customFormats": [
          {
            "id": 0,
            "name": "string",
            "includeCustomFormatWhenRenaming": true,
            "specifications": [
              {
                "id": 0,
                "name": "string",
                "implementation": "string",
                "implementationName": "string",
                "infoLink": "string",
                "negate": true,
                "required": true,
                "fields": [
                  {
                    "order": 0,
                    "name": "string",
                    "label": "string",
                    "unit": "string",
                    "helpText": "string",
                    "helpTextWarning": "string",
                    "helpLink": "string",
                    "value": null,
                    "type": "string",
                    "advanced": true,
                    "selectOptions": [
                      {
                        "value": 0,
                        "name": "string",
                        "order": 0,
                        "hint": "string",
                        "dividerAfter": true
                      }
                    ],
                    "selectOptionsProviderAction": "string",
                    "section": "string",
                    "hidden": "string",
                    "privacy": "normal",
                    "placeholder": "string",
                    "isFloat": true
                  }
                ],
                "presets": [
                  {}
                ]
              }
            ]
          }
        ],
        "customFormatScore": 0,
        "indexerFlags": 0,
        "mediaInfo": {
          "id": 0,
          "audioBitrate": 0,
          "audioChannels": 0,
          "audioCodec": "string",
          "audioLanguages": "string",
          "audioStreamCount": 0,
          "videoBitDepth": 0,
          "videoBitrate": 0,
          "videoCodec": "string",
          "videoFps": 0,
          "videoDynamicRange": "string",
          "videoDynamicRangeType": "string",
          "resolution": "string",
          "runTime": "string",
          "scanType": "string",
          "subtitles": "string"
        },
        "originalFilePath": "string",
        "qualityCutoffNotMet": true
      },
      "collection": {
        "title": "string",
        "tmdbId": 0
      },
      "popularity": 0,
      "lastSearchTime": "1970-01-01T00:00:00Z",
      "statistics": {
        "movieFileCount": 0,
        "sizeOnDisk": 0,
        "releaseGroups": [
          "string"
        ],
        "movieFileQualities": [
          {
            "id": 0,
            "name": "string",
            "source": "unknown",
            "resolution": 0,
            "modifier": "none"
          }
        ]
      }
    }
  ]'
```

`POST /api/v3/importlist/movie`

> Body parameter

```json
[
  {
    "id": 0,
    "title": "string",
    "originalTitle": "string",
    "originalLanguage": {
      "id": 0,
      "name": "string"
    },
    "alternateTitles": [
      {
        "id": 0,
        "sourceType": "tmdb",
        "movieMetadataId": 0,
        "title": "string",
        "cleanTitle": "string"
      }
    ],
    "secondaryYear": 0,
    "secondaryYearSourceId": 0,
    "sortTitle": "string",
    "sizeOnDisk": 0,
    "status": "tba",
    "overview": "string",
    "inCinemas": "1970-01-01T00:00:00Z",
    "physicalRelease": "1970-01-01T00:00:00Z",
    "digitalRelease": "1970-01-01T00:00:00Z",
    "releaseDate": "1970-01-01T00:00:00Z",
    "physicalReleaseNote": "string",
    "images": [
      {
        "coverType": "unknown",
        "url": "string",
        "remoteUrl": "string"
      }
    ],
    "website": "string",
    "remotePoster": "string",
    "year": 0,
    "youTubeTrailerId": "string",
    "studio": "string",
    "path": "string",
    "qualityProfileId": 0,
    "hasFile": true,
    "movieFileId": 0,
    "monitored": true,
    "minimumAvailability": "tba",
    "isAvailable": true,
    "folderName": "string",
    "runtime": 0,
    "cleanTitle": "string",
    "imdbId": "string",
    "tmdbId": 0,
    "titleSlug": "string",
    "rootFolderPath": "string",
    "folder": "string",
    "certification": "string",
    "genres": [
      "string"
    ],
    "keywords": [
      "string"
    ],
    "tags": [
      0
    ],
    "added": "1970-01-01T00:00:00Z",
    "addOptions": {
      "ignoreEpisodesWithFiles": true,
      "ignoreEpisodesWithoutFiles": true,
      "monitor": "movieOnly",
      "searchForMovie": true,
      "addMethod": "manual"
    },
    "ratings": {
      "imdb": {
        "votes": 0,
        "value": 0,
        "type": "user"
      },
      "tmdb": {
        "votes": 0,
        "value": 0,
        "type": "user"
      },
      "metacritic": {
        "votes": 0,
        "value": 0,
        "type": "user"
      },
      "rottenTomatoes": {
        "votes": 0,
        "value": 0,
        "type": "user"
      },
      "trakt": {
        "votes": 0,
        "value": 0,
        "type": "user"
      }
    },
    "movieFile": {
      "id": 0,
      "movieId": 0,
      "relativePath": "string",
      "path": "string",
      "size": 0,
      "dateAdded": "1970-01-01T00:00:00Z",
      "sceneName": "string",
      "releaseGroup": "string",
      "edition": "string",
      "languages": [
        {
          "id": 0,
          "name": "string"
        }
      ],
      "quality": {
        "quality": {
          "id": 0,
          "name": "string",
          "source": "unknown",
          "resolution": 0,
          "modifier": "none"
        },
        "revision": {
          "version": 0,
          "real": 0,
          "isRepack": true
        }
      },
      "customFormats": [
        {
          "id": 0,
          "name": "string",
          "includeCustomFormatWhenRenaming": true,
          "specifications": [
            {
              "id": 0,
              "name": "string",
              "implementation": "string",
              "implementationName": "string",
              "infoLink": "string",
              "negate": true,
              "required": true,
              "fields": [
                {
                  "order": 0,
                  "name": "string",
                  "label": "string",
                  "unit": "string",
                  "helpText": "string",
                  "helpTextWarning": "string",
                  "helpLink": "string",
                  "value": null,
                  "type": "string",
                  "advanced": true,
                  "selectOptions": [
                    {
                      "value": 0,
                      "name": "string",
                      "order": 0,
                      "hint": "string",
                      "dividerAfter": true
                    }
                  ],
                  "selectOptionsProviderAction": "string",
                  "section": "string",
                  "hidden": "string",
                  "privacy": "normal",
                  "placeholder": "string",
                  "isFloat": true
                }
              ],
              "presets": [
                {}
              ]
            }
          ]
        }
      ],
      "customFormatScore": 0,
      "indexerFlags": 0,
      "mediaInfo": {
        "id": 0,
        "audioBitrate": 0,
        "audioChannels": 0,
        "audioCodec": "string",
        "audioLanguages": "string",
        "audioStreamCount": 0,
        "videoBitDepth": 0,
        "videoBitrate": 0,
        "videoCodec": "string",
        "videoFps": 0,
        "videoDynamicRange": "string",
        "videoDynamicRangeType": "string",
        "resolution": "string",
        "runTime": "string",
        "scanType": "string",
        "subtitles": "string"
      },
      "originalFilePath": "string",
      "qualityCutoffNotMet": true
    },
    "collection": {
      "title": "string",
      "tmdbId": 0
    },
    "popularity": 0,
    "lastSearchTime": "1970-01-01T00:00:00Z",
    "statistics": {
      "movieFileCount": 0,
      "sizeOnDisk": 0,
      "releaseGroups": [
        "string"
      ],
      "movieFileQualities": [
        {
          "id": 0,
          "name": "string",
          "source": "unknown",
          "resolution": 0,
          "modifier": "none"
        }
      ]
    }
  }
]
```

<h3 id="postapiv3importlistmovie-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[[MovieResource](#schemamovieresource)]|false|none|

> Example responses

> 200 Response

```json
[
  {
    "id": 0,
    "title": "string",
    "originalTitle": "string",
    "originalLanguage": {
      "id": 0,
      "name": "string"
    },
    "alternateTitles": [
      {
        "id": 0,
        "sourceType": "tmdb",
        "movieMetadataId": 0,
        "title": "string",
        "cleanTitle": "string"
      }
    ],
    "secondaryYear": 0,
    "secondaryYearSourceId": 0,
    "sortTitle": "string",
    "sizeOnDisk": 0,
    "status": "tba",
    "overview": "string",
    "inCinemas": "1970-01-01T00:00:00Z",
    "physicalRelease": "1970-01-01T00:00:00Z",
    "digitalRelease": "1970-01-01T00:00:00Z",
    "releaseDate": "1970-01-01T00:00:00Z",
    "physicalReleaseNote": "string",
    "images": [
      {
        "coverType": "unknown",
        "url": "string",
        "remoteUrl": "string"
      }
    ],
    "website": "string",
    "remotePoster": "string",
    "year": 0,
    "youTubeTrailerId": "string",
    "studio": "string",
    "path": "string",
    "qualityProfileId": 0,
    "hasFile": true,
    "movieFileId": 0,
    "monitored": true,
    "minimumAvailability": "tba",
    "isAvailable": true,
    "folderName": "string",
    "runtime": 0,
    "cleanTitle": "string",
    "imdbId": "string",
    "tmdbId": 0,
    "titleSlug": "string",
    "rootFolderPath": "string",
    "folder": "string",
    "certification": "string",
    "genres": [
      "string"
    ],
    "keywords": [
      "string"
    ],
    "tags": [
      0
    ],
    "added": "1970-01-01T00:00:00Z",
    "addOptions": {
      "ignoreEpisodesWithFiles": true,
      "ignoreEpisodesWithoutFiles": true,
      "monitor": "movieOnly",
      "searchForMovie": true,
      "addMethod": "manual"
    },
    "ratings": {
      "imdb": {
        "votes": 0,
        "value": 0,
        "type": "user"
      },
      "tmdb": {
        "votes": 0,
        "value": 0,
        "type": "user"
      },
      "metacritic": {
        "votes": 0,
        "value": 0,
        "type": "user"
      },
      "rottenTomatoes": {
        "votes": 0,
        "value": 0,
        "type": "user"
      },
      "trakt": {
        "votes": 0,
        "value": 0,
        "type": "user"
      }
    },
    "movieFile": {
      "id": 0,
      "movieId": 0,
      "relativePath": "string",
      "path": "string",
      "size": 0,
      "dateAdded": "1970-01-01T00:00:00Z",
      "sceneName": "string",
      "releaseGroup": "string",
      "edition": "string",
      "languages": [
        {
          "id": 0,
          "name": "string"
        }
      ],
      "quality": {
        "quality": {
          "id": 0,
          "name": "string",
          "source": "unknown",
          "resolution": 0,
          "modifier": "none"
        },
        "revision": {
          "version": 0,
          "real": 0,
          "isRepack": true
        }
      },
      "customFormats": [
        {
          "id": 0,
          "name": "string",
          "includeCustomFormatWhenRenaming": true,
          "specifications": [
            {
              "id": 0,
              "name": "string",
              "implementation": "string",
              "implementationName": "string",
              "infoLink": "string",
              "negate": true,
              "required": true,
              "fields": [
                {
                  "order": 0,
                  "name": "string",
                  "label": "string",
                  "unit": "string",
                  "helpText": "string",
                  "helpTextWarning": "string",
                  "helpLink": "string",
                  "value": null,
                  "type": "string",
                  "advanced": true,
                  "selectOptions": [
                    {
                      "value": 0,
                      "name": "string",
                      "order": 0,
                      "hint": "string",
                      "dividerAfter": true
                    }
                  ],
                  "selectOptionsProviderAction": "string",
                  "section": "string",
                  "hidden": "string",
                  "privacy": "normal",
                  "placeholder": "string",
                  "isFloat": true
                }
              ],
              "presets": [
                {}
              ]
            }
          ]
        }
      ],
      "customFormatScore": 0,
      "indexerFlags": 0,
      "mediaInfo": {
        "id": 0,
        "audioBitrate": 0,
        "audioChannels": 0,
        "audioCodec": "string",
        "audioLanguages": "string",
        "audioStreamCount": 0,
        "videoBitDepth": 0,
        "videoBitrate": 0,
        "videoCodec": "string",
        "videoFps": 0,
        "videoDynamicRange": "string",
        "videoDynamicRangeType": "string",
        "resolution": "string",
        "runTime": "string",
        "scanType": "string",
        "subtitles": "string"
      },
      "originalFilePath": "string",
      "qualityCutoffNotMet": true
    },
    "collection": {
      "title": "string",
      "tmdbId": 0
    },
    "popularity": 0,
    "lastSearchTime": "1970-01-01T00:00:00Z",
    "statistics": {
      "movieFileCount": 0,
      "sizeOnDisk": 0,
      "releaseGroups": [
        "string"
      ],
      "movieFileQualities": [
        {
          "id": 0,
          "name": "string",
          "source": "unknown",
          "resolution": 0,
          "modifier": "none"
        }
      ]
    }
  }
]
```

<h3 id="postapiv3importlistmovie-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="postapiv3importlistmovie-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[MovieResource](#schemamovieresource)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

<h1 id="radarr-indexer">Indexer</h1>

## get/api/v3/indexer

> Code samples

```bash
curl http://localhost:7878/api/v3/indexer \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /api/v3/indexer`

> Example responses

> 200 Response

```json
[
  {
    "id": 0,
    "name": "string",
    "fields": [
      {
        "order": 0,
        "name": "string",
        "label": "string",
        "unit": "string",
        "helpText": "string",
        "helpTextWarning": "string",
        "helpLink": "string",
        "value": null,
        "type": "string",
        "advanced": true,
        "selectOptions": [
          {
            "value": 0,
            "name": "string",
            "order": 0,
            "hint": "string",
            "dividerAfter": true
          }
        ],
        "selectOptionsProviderAction": "string",
        "section": "string",
        "hidden": "string",
        "privacy": "normal",
        "placeholder": "string",
        "isFloat": true
      }
    ],
    "implementationName": "string",
    "implementation": "string",
    "configContract": "string",
    "infoLink": "string",
    "message": {
      "message": "string",
      "type": "info"
    },
    "tags": [
      0
    ],
    "presets": [
      {}
    ],
    "enableRss": true,
    "enableAutomaticSearch": true,
    "enableInteractiveSearch": true,
    "supportsRss": true,
    "supportsSearch": true,
    "protocol": "unknown",
    "priority": 0,
    "downloadClientId": 0
  }
]
```

<h3 id="getapiv3indexer-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="getapiv3indexer-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[IndexerResource](#schemaindexerresource)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## post/api/v3/indexer

> Code samples

```bash
curl http://localhost:7878/api/v3/indexer \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}" \
  -d '{
    "id": 0,
    "name": "string",
    "fields": [
      {
        "order": 0,
        "name": "string",
        "label": "string",
        "unit": "string",
        "helpText": "string",
        "helpTextWarning": "string",
        "helpLink": "string",
        "value": null,
        "type": "string",
        "advanced": true,
        "selectOptions": [
          {
            "value": 0,
            "name": "string",
            "order": 0,
            "hint": "string",
            "dividerAfter": true
          }
        ],
        "selectOptionsProviderAction": "string",
        "section": "string",
        "hidden": "string",
        "privacy": "normal",
        "placeholder": "string",
        "isFloat": true
      }
    ],
    "implementationName": "string",
    "implementation": "string",
    "configContract": "string",
    "infoLink": "string",
    "message": {
      "message": "string",
      "type": "info"
    },
    "tags": [
      0
    ],
    "presets": [
      {}
    ],
    "enableRss": true,
    "enableAutomaticSearch": true,
    "enableInteractiveSearch": true,
    "supportsRss": true,
    "supportsSearch": true,
    "protocol": "unknown",
    "priority": 0,
    "downloadClientId": 0
  }'
```

`POST /api/v3/indexer`

> Body parameter

```json
{
  "id": 0,
  "name": "string",
  "fields": [
    {
      "order": 0,
      "name": "string",
      "label": "string",
      "unit": "string",
      "helpText": "string",
      "helpTextWarning": "string",
      "helpLink": "string",
      "value": null,
      "type": "string",
      "advanced": true,
      "selectOptions": [
        {
          "value": 0,
          "name": "string",
          "order": 0,
          "hint": "string",
          "dividerAfter": true
        }
      ],
      "selectOptionsProviderAction": "string",
      "section": "string",
      "hidden": "string",
      "privacy": "normal",
      "placeholder": "string",
      "isFloat": true
    }
  ],
  "implementationName": "string",
  "implementation": "string",
  "configContract": "string",
  "infoLink": "string",
  "message": {
    "message": "string",
    "type": "info"
  },
  "tags": [
    0
  ],
  "presets": [
    {}
  ],
  "enableRss": true,
  "enableAutomaticSearch": true,
  "enableInteractiveSearch": true,
  "supportsRss": true,
  "supportsSearch": true,
  "protocol": "unknown",
  "priority": 0,
  "downloadClientId": 0
}
```

<h3 id="postapiv3indexer-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|forceSave|query|boolean|false|none|
|body|body|[IndexerResource](#schemaindexerresource)|false|none|
|» id|body|integer(int32)|false|none|
|» name|body|string \| null|false|none|
|» fields|body|[[Field](#schemafield)]|false|none|
|» implementationName|body|string \| null|false|none|
|» implementation|body|string \| null|false|none|
|» configContract|body|string \| null|false|none|
|» infoLink|body|string \| null|false|none|
|» message|body|[ProviderMessage](#schemaprovidermessage)|false|none|
|» tags|body|[integer(int32)]|false|none|
|» presets|body|[[IndexerResource](#schemaindexerresource)]|false|none|
|» enableRss|body|boolean|false|none|
|» enableAutomaticSearch|body|boolean|false|none|
|» enableInteractiveSearch|body|boolean|false|none|
|» supportsRss|body|boolean|false|none|
|» supportsSearch|body|boolean|false|none|
|» protocol|body|[DownloadProtocol](#schemadownloadprotocol)|false|none|
|» priority|body|integer(int32)|false|none|
|» downloadClientId|body|integer(int32)|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» protocol|unknown|
|» protocol|usenet|
|» protocol|torrent|

> Example responses

> 201 Response

```json
{
  "id": 0,
  "name": "string",
  "fields": [
    {
      "order": 0,
      "name": "string",
      "label": "string",
      "unit": "string",
      "helpText": "string",
      "helpTextWarning": "string",
      "helpLink": "string",
      "value": null,
      "type": "string",
      "advanced": true,
      "selectOptions": [
        {
          "value": 0,
          "name": "string",
          "order": 0,
          "hint": "string",
          "dividerAfter": true
        }
      ],
      "selectOptionsProviderAction": "string",
      "section": "string",
      "hidden": "string",
      "privacy": "normal",
      "placeholder": "string",
      "isFloat": true
    }
  ],
  "implementationName": "string",
  "implementation": "string",
  "configContract": "string",
  "infoLink": "string",
  "message": {
    "message": "string",
    "type": "info"
  },
  "tags": [
    0
  ],
  "presets": [
    {}
  ],
  "enableRss": true,
  "enableAutomaticSearch": true,
  "enableInteractiveSearch": true,
  "supportsRss": true,
  "supportsSearch": true,
  "protocol": "unknown",
  "priority": 0,
  "downloadClientId": 0
}
```

<h3 id="postapiv3indexer-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Created|[IndexerResource](#schemaindexerresource)|
|404|Not Found|Not Found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## get/api/v3/indexer/{id}

> Code samples

```bash
curl http://localhost:7878/api/v3/indexer/0 \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /api/v3/indexer/{id}`

<h3 id="getapiv3indexerid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|none|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "name": "string",
  "fields": [
    {
      "order": 0,
      "name": "string",
      "label": "string",
      "unit": "string",
      "helpText": "string",
      "helpTextWarning": "string",
      "helpLink": "string",
      "value": null,
      "type": "string",
      "advanced": true,
      "selectOptions": [
        {
          "value": 0,
          "name": "string",
          "order": 0,
          "hint": "string",
          "dividerAfter": true
        }
      ],
      "selectOptionsProviderAction": "string",
      "section": "string",
      "hidden": "string",
      "privacy": "normal",
      "placeholder": "string",
      "isFloat": true
    }
  ],
  "implementationName": "string",
  "implementation": "string",
  "configContract": "string",
  "infoLink": "string",
  "message": {
    "message": "string",
    "type": "info"
  },
  "tags": [
    0
  ],
  "presets": [
    {}
  ],
  "enableRss": true,
  "enableAutomaticSearch": true,
  "enableInteractiveSearch": true,
  "supportsRss": true,
  "supportsSearch": true,
  "protocol": "unknown",
  "priority": 0,
  "downloadClientId": 0
}
```

<h3 id="getapiv3indexerid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[IndexerResource](#schemaindexerresource)|
|404|Not Found|Not Found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## put/api/v3/indexer/{id}

> Code samples

```bash
curl http://localhost:7878/api/v3/indexer/0 \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}" \
  -d '{
    "id": 0,
    "name": "string",
    "fields": [
      {
        "order": 0,
        "name": "string",
        "label": "string",
        "unit": "string",
        "helpText": "string",
        "helpTextWarning": "string",
        "helpLink": "string",
        "value": null,
        "type": "string",
        "advanced": true,
        "selectOptions": [
          {
            "value": 0,
            "name": "string",
            "order": 0,
            "hint": "string",
            "dividerAfter": true
          }
        ],
        "selectOptionsProviderAction": "string",
        "section": "string",
        "hidden": "string",
        "privacy": "normal",
        "placeholder": "string",
        "isFloat": true
      }
    ],
    "implementationName": "string",
    "implementation": "string",
    "configContract": "string",
    "infoLink": "string",
    "message": {
      "message": "string",
      "type": "info"
    },
    "tags": [
      0
    ],
    "presets": [
      {}
    ],
    "enableRss": true,
    "enableAutomaticSearch": true,
    "enableInteractiveSearch": true,
    "supportsRss": true,
    "supportsSearch": true,
    "protocol": "unknown",
    "priority": 0,
    "downloadClientId": 0
  }'
```

`PUT /api/v3/indexer/{id}`

> Body parameter

```json
{
  "id": 0,
  "name": "string",
  "fields": [
    {
      "order": 0,
      "name": "string",
      "label": "string",
      "unit": "string",
      "helpText": "string",
      "helpTextWarning": "string",
      "helpLink": "string",
      "value": null,
      "type": "string",
      "advanced": true,
      "selectOptions": [
        {
          "value": 0,
          "name": "string",
          "order": 0,
          "hint": "string",
          "dividerAfter": true
        }
      ],
      "selectOptionsProviderAction": "string",
      "section": "string",
      "hidden": "string",
      "privacy": "normal",
      "placeholder": "string",
      "isFloat": true
    }
  ],
  "implementationName": "string",
  "implementation": "string",
  "configContract": "string",
  "infoLink": "string",
  "message": {
    "message": "string",
    "type": "info"
  },
  "tags": [
    0
  ],
  "presets": [
    {}
  ],
  "enableRss": true,
  "enableAutomaticSearch": true,
  "enableInteractiveSearch": true,
  "supportsRss": true,
  "supportsSearch": true,
  "protocol": "unknown",
  "priority": 0,
  "downloadClientId": 0
}
```

<h3 id="putapiv3indexerid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|none|
|forceSave|query|boolean|false|none|
|body|body|[IndexerResource](#schemaindexerresource)|false|none|
|» id|body|integer(int32)|false|none|
|» name|body|string \| null|false|none|
|» fields|body|[[Field](#schemafield)]|false|none|
|» implementationName|body|string \| null|false|none|
|» implementation|body|string \| null|false|none|
|» configContract|body|string \| null|false|none|
|» infoLink|body|string \| null|false|none|
|» message|body|[ProviderMessage](#schemaprovidermessage)|false|none|
|» tags|body|[integer(int32)]|false|none|
|» presets|body|[[IndexerResource](#schemaindexerresource)]|false|none|
|» enableRss|body|boolean|false|none|
|» enableAutomaticSearch|body|boolean|false|none|
|» enableInteractiveSearch|body|boolean|false|none|
|» supportsRss|body|boolean|false|none|
|» supportsSearch|body|boolean|false|none|
|» protocol|body|[DownloadProtocol](#schemadownloadprotocol)|false|none|
|» priority|body|integer(int32)|false|none|
|» downloadClientId|body|integer(int32)|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» protocol|unknown|
|» protocol|usenet|
|» protocol|torrent|

> Example responses

> 202 Response

```json
{
  "id": 0,
  "name": "string",
  "fields": [
    {
      "order": 0,
      "name": "string",
      "label": "string",
      "unit": "string",
      "helpText": "string",
      "helpTextWarning": "string",
      "helpLink": "string",
      "value": null,
      "type": "string",
      "advanced": true,
      "selectOptions": [
        {
          "value": 0,
          "name": "string",
          "order": 0,
          "hint": "string",
          "dividerAfter": true
        }
      ],
      "selectOptionsProviderAction": "string",
      "section": "string",
      "hidden": "string",
      "privacy": "normal",
      "placeholder": "string",
      "isFloat": true
    }
  ],
  "implementationName": "string",
  "implementation": "string",
  "configContract": "string",
  "infoLink": "string",
  "message": {
    "message": "string",
    "type": "info"
  },
  "tags": [
    0
  ],
  "presets": [
    {}
  ],
  "enableRss": true,
  "enableAutomaticSearch": true,
  "enableInteractiveSearch": true,
  "supportsRss": true,
  "supportsSearch": true,
  "protocol": "unknown",
  "priority": 0,
  "downloadClientId": 0
}
```

<h3 id="putapiv3indexerid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|Accepted|[IndexerResource](#schemaindexerresource)|
|404|Not Found|Not Found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## delete/api/v3/indexer/{id}

> Code samples

```bash
curl http://localhost:7878/api/v3/indexer/0 \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}"
```

`DELETE /api/v3/indexer/{id}`

<h3 id="deleteapiv3indexerid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|none|

> Example responses

> 200 Response

```json
null
```

<h3 id="deleteapiv3indexerid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## put/api/v3/indexer/bulk

> Code samples

```bash
curl http://localhost:7878/api/v3/indexer/bulk \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}" \
  -d '{
    "ids": [
      0
    ],
    "tags": [
      0
    ],
    "applyTags": "add",
    "enableRss": true,
    "enableAutomaticSearch": true,
    "enableInteractiveSearch": true,
    "priority": 0
  }'
```

`PUT /api/v3/indexer/bulk`

> Body parameter

```json
{
  "ids": [
    0
  ],
  "tags": [
    0
  ],
  "applyTags": "add",
  "enableRss": true,
  "enableAutomaticSearch": true,
  "enableInteractiveSearch": true,
  "priority": 0
}
```

<h3 id="putapiv3indexerbulk-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[IndexerBulkResource](#schemaindexerbulkresource)|false|none|
|» ids|body|[integer(int32)]|false|none|
|» tags|body|[integer(int32)]|false|none|
|» applyTags|body|[ApplyTags](#schemaapplytags)|false|none|
|» enableRss|body|boolean \| null|false|none|
|» enableAutomaticSearch|body|boolean \| null|false|none|
|» enableInteractiveSearch|body|boolean \| null|false|none|
|» priority|body|integer(int32) \| null|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» applyTags|add|
|» applyTags|remove|
|» applyTags|replace|

> Example responses

> 200 Response

```json
[
  {
    "id": 0,
    "name": "string",
    "fields": [
      {
        "order": 0,
        "name": "string",
        "label": "string",
        "unit": "string",
        "helpText": "string",
        "helpTextWarning": "string",
        "helpLink": "string",
        "value": null,
        "type": "string",
        "advanced": true,
        "selectOptions": [
          {
            "value": 0,
            "name": "string",
            "order": 0,
            "hint": "string",
            "dividerAfter": true
          }
        ],
        "selectOptionsProviderAction": "string",
        "section": "string",
        "hidden": "string",
        "privacy": "normal",
        "placeholder": "string",
        "isFloat": true
      }
    ],
    "implementationName": "string",
    "implementation": "string",
    "configContract": "string",
    "infoLink": "string",
    "message": {
      "message": "string",
      "type": "info"
    },
    "tags": [
      0
    ],
    "presets": [
      {}
    ],
    "enableRss": true,
    "enableAutomaticSearch": true,
    "enableInteractiveSearch": true,
    "supportsRss": true,
    "supportsSearch": true,
    "protocol": "unknown",
    "priority": 0,
    "downloadClientId": 0
  }
]
```

<h3 id="putapiv3indexerbulk-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|None|

<h3 id="putapiv3indexerbulk-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[IndexerResource](#schemaindexerresource)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## delete/api/v3/indexer/bulk

> Code samples

```bash
curl http://localhost:7878/api/v3/indexer/bulk \
  -X DELETE \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}" \
  -d '{
    "ids": [
      0
    ],
    "tags": [
      0
    ],
    "applyTags": "add",
    "enableRss": true,
    "enableAutomaticSearch": true,
    "enableInteractiveSearch": true,
    "priority": 0
  }'
```

`DELETE /api/v3/indexer/bulk`

> Body parameter

```json
{
  "ids": [
    0
  ],
  "tags": [
    0
  ],
  "applyTags": "add",
  "enableRss": true,
  "enableAutomaticSearch": true,
  "enableInteractiveSearch": true,
  "priority": 0
}
```

<h3 id="deleteapiv3indexerbulk-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[IndexerBulkResource](#schemaindexerbulkresource)|false|none|
|» ids|body|[integer(int32)]|false|none|
|» tags|body|[integer(int32)]|false|none|
|» applyTags|body|[ApplyTags](#schemaapplytags)|false|none|
|» enableRss|body|boolean \| null|false|none|
|» enableAutomaticSearch|body|boolean \| null|false|none|
|» enableInteractiveSearch|body|boolean \| null|false|none|
|» priority|body|integer(int32) \| null|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» applyTags|add|
|» applyTags|remove|
|» applyTags|replace|

> Example responses

> 200 Response

```json
null
```

<h3 id="deleteapiv3indexerbulk-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## get/api/v3/indexer/schema

> Code samples

```bash
curl http://localhost:7878/api/v3/indexer/schema \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /api/v3/indexer/schema`

> Example responses

> 200 Response

```json
[
  {
    "id": 0,
    "name": "string",
    "fields": [
      {
        "order": 0,
        "name": "string",
        "label": "string",
        "unit": "string",
        "helpText": "string",
        "helpTextWarning": "string",
        "helpLink": "string",
        "value": null,
        "type": "string",
        "advanced": true,
        "selectOptions": [
          {
            "value": 0,
            "name": "string",
            "order": 0,
            "hint": "string",
            "dividerAfter": true
          }
        ],
        "selectOptionsProviderAction": "string",
        "section": "string",
        "hidden": "string",
        "privacy": "normal",
        "placeholder": "string",
        "isFloat": true
      }
    ],
    "implementationName": "string",
    "implementation": "string",
    "configContract": "string",
    "infoLink": "string",
    "message": {
      "message": "string",
      "type": "info"
    },
    "tags": [
      0
    ],
    "presets": [
      {}
    ],
    "enableRss": true,
    "enableAutomaticSearch": true,
    "enableInteractiveSearch": true,
    "supportsRss": true,
    "supportsSearch": true,
    "protocol": "unknown",
    "priority": 0,
    "downloadClientId": 0
  }
]
```

<h3 id="getapiv3indexerschema-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="getapiv3indexerschema-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[IndexerResource](#schemaindexerresource)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## post/api/v3/indexer/test

> Code samples

```bash
curl http://localhost:7878/api/v3/indexer/test \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "X-Api-Key: ${API_KEY}" \
  -d '{
    "id": 0,
    "name": "string",
    "fields": [
      {
        "order": 0,
        "name": "string",
        "label": "string",
        "unit": "string",
        "helpText": "string",
        "helpTextWarning": "string",
        "helpLink": "string",
        "value": null,
        "type": "string",
        "advanced": true,
        "selectOptions": [
          {
            "value": 0,
            "name": "string",
            "order": 0,
            "hint": "string",
            "dividerAfter": true
          }
        ],
        "selectOptionsProviderAction": "string",
        "section": "string",
        "hidden": "string",
        "privacy": "normal",
        "placeholder": "string",
        "isFloat": true
      }
    ],
    "implementationName": "string",
    "implementation": "string",
    "configContract": "string",
    "infoLink": "string",
    "message": {
      "message": "string",
      "type": "info"
    },
    "tags": [
      0
    ],
    "presets": [
      {}
    ],
    "enableRss": true,
    "enableAutomaticSearch": true,
    "enableInteractiveSearch": true,
    "supportsRss": true,
    "supportsSearch": true,
    "protocol": "unknown",
    "priority": 0,
    "downloadClientId": 0
  }'
```

`POST /api/v3/indexer/test`

> Body parameter

```json
{
  "id": 0,
  "name": "string",
  "fields": [
    {
      "order": 0,
      "name": "string",
      "label": "string",
      "unit": "string",
      "helpText": "string",
      "helpTextWarning": "string",
      "helpLink": "string",
      "value": null,
      "type": "string",
      "advanced": true,
      "selectOptions": [
        {
          "value": 0,
          "name": "string",
          "order": 0,
          "hint": "string",
          "dividerAfter": true
        }
      ],
      "selectOptionsProviderAction": "string",
      "section": "string",
      "hidden": "string",
      "privacy": "normal",
      "placeholder": "string",
      "isFloat": true
    }
  ],
  "implementationName": "string",
  "implementation": "string",
  "configContract": "string",
  "infoLink": "string",
  "message": {
    "message": "string",
    "type": "info"
  },
  "tags": [
    0
  ],
  "presets": [
    {}
  ],
  "enableRss": true,
  "enableAutomaticSearch": true,
  "enableInteractiveSearch": true,
  "supportsRss": true,
  "supportsSearch": true,
  "protocol": "unknown",
  "priority": 0,
  "downloadClientId": 0
}
```

<h3 id="postapiv3indexertest-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|forceTest|query|boolean|false|none|
|body|body|[IndexerResource](#schemaindexerresource)|false|none|
|» id|body|integer(int32)|false|none|
|» name|body|string \| null|false|none|
|» fields|body|[[Field](#schemafield)]|false|none|
|» implementationName|body|string \| null|false|none|
|» implementation|body|string \| null|false|none|
|» configContract|body|string \| null|false|none|
|» infoLink|body|string \| null|false|none|
|» message|body|[ProviderMessage](#schemaprovidermessage)|false|none|
|» tags|body|[integer(int32)]|false|none|
|» presets|body|[[IndexerResource](#schemaindexerresource)]|false|none|
|» enableRss|body|boolean|false|none|
|» enableAutomaticSearch|body|boolean|false|none|
|» enableInteractiveSearch|body|boolean|false|none|
|» supportsRss|body|boolean|false|none|
|» supportsSearch|body|boolean|false|none|
|» protocol|body|[DownloadProtocol](#schemadownloadprotocol)|false|none|
|» priority|body|integer(int32)|false|none|
|» downloadClientId|body|integer(int32)|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» protocol|unknown|
|» protocol|usenet|
|» protocol|torrent|

<h3 id="postapiv3indexertest-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## post/api/v3/indexer/testall

> Code samples

```bash
curl http://localhost:7878/api/v3/indexer/testall \
  -X POST \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}"
```

`POST /api/v3/indexer/testall`

> Example responses

> 200 Response

```json
[
  {
    "id": 0,
    "isValid": true,
    "validationFailures": [
      {
        "propertyName": "string",
        "errorMessage": "string",
        "attemptedValue": null,
        "customState": null,
        "severity": "error",
        "errorCode": "string",
        "formattedMessageArguments": [
          null
        ],
        "formattedMessagePlaceholderValues": {
          "property1": null,
          "property2": null
        }
      }
    ]
  }
]
```

> 400 Response

```json
[
  {
    "id": 0,
    "isValid": true,
    "validationFailures": [
      {
        "propertyName": "string",
        "errorMessage": "string",
        "attemptedValue": null,
        "customState": null,
        "severity": "error",
        "errorCode": "string",
        "formattedMessageArguments": [
          null
        ],
        "formattedMessagePlaceholderValues": {
          "property1": null,
          "property2": null
        }
      }
    ]
  }
]
```

<h3 id="postapiv3indexertestall-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|Inline|

<h3 id="postapiv3indexertestall-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[ProviderTestAllResult](#schemaprovidertestallresult)]|false|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[ProviderTestAllResult](#schemaprovidertestallresult)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## post/api/v3/indexer/action/{name}

> Code samples

```bash
curl http://localhost:7878/api/v3/indexer/action/string \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "X-Api-Key: ${API_KEY}" \
  -d '{
    "id": 0,
    "name": "string",
    "fields": [
      {
        "order": 0,
        "name": "string",
        "label": "string",
        "unit": "string",
        "helpText": "string",
        "helpTextWarning": "string",
        "helpLink": "string",
        "value": null,
        "type": "string",
        "advanced": true,
        "selectOptions": [
          {
            "value": 0,
            "name": "string",
            "order": 0,
            "hint": "string",
            "dividerAfter": true
          }
        ],
        "selectOptionsProviderAction": "string",
        "section": "string",
        "hidden": "string",
        "privacy": "normal",
        "placeholder": "string",
        "isFloat": true
      }
    ],
    "implementationName": "string",
    "implementation": "string",
    "configContract": "string",
    "infoLink": "string",
    "message": {
      "message": "string",
      "type": "info"
    },
    "tags": [
      0
    ],
    "presets": [
      {}
    ],
    "enableRss": true,
    "enableAutomaticSearch": true,
    "enableInteractiveSearch": true,
    "supportsRss": true,
    "supportsSearch": true,
    "protocol": "unknown",
    "priority": 0,
    "downloadClientId": 0
  }'
```

`POST /api/v3/indexer/action/{name}`

> Body parameter

```json
{
  "id": 0,
  "name": "string",
  "fields": [
    {
      "order": 0,
      "name": "string",
      "label": "string",
      "unit": "string",
      "helpText": "string",
      "helpTextWarning": "string",
      "helpLink": "string",
      "value": null,
      "type": "string",
      "advanced": true,
      "selectOptions": [
        {
          "value": 0,
          "name": "string",
          "order": 0,
          "hint": "string",
          "dividerAfter": true
        }
      ],
      "selectOptionsProviderAction": "string",
      "section": "string",
      "hidden": "string",
      "privacy": "normal",
      "placeholder": "string",
      "isFloat": true
    }
  ],
  "implementationName": "string",
  "implementation": "string",
  "configContract": "string",
  "infoLink": "string",
  "message": {
    "message": "string",
    "type": "info"
  },
  "tags": [
    0
  ],
  "presets": [
    {}
  ],
  "enableRss": true,
  "enableAutomaticSearch": true,
  "enableInteractiveSearch": true,
  "supportsRss": true,
  "supportsSearch": true,
  "protocol": "unknown",
  "priority": 0,
  "downloadClientId": 0
}
```

<h3 id="postapiv3indexeractionname-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|none|
|body|body|[IndexerResource](#schemaindexerresource)|false|none|
|» id|body|integer(int32)|false|none|
|» name|body|string \| null|false|none|
|» fields|body|[[Field](#schemafield)]|false|none|
|» implementationName|body|string \| null|false|none|
|» implementation|body|string \| null|false|none|
|» configContract|body|string \| null|false|none|
|» infoLink|body|string \| null|false|none|
|» message|body|[ProviderMessage](#schemaprovidermessage)|false|none|
|» tags|body|[integer(int32)]|false|none|
|» presets|body|[[IndexerResource](#schemaindexerresource)]|false|none|
|» enableRss|body|boolean|false|none|
|» enableAutomaticSearch|body|boolean|false|none|
|» enableInteractiveSearch|body|boolean|false|none|
|» supportsRss|body|boolean|false|none|
|» supportsSearch|body|boolean|false|none|
|» protocol|body|[DownloadProtocol](#schemadownloadprotocol)|false|none|
|» priority|body|integer(int32)|false|none|
|» downloadClientId|body|integer(int32)|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» protocol|unknown|
|» protocol|usenet|
|» protocol|torrent|

<h3 id="postapiv3indexeractionname-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|400|Bad Request|Bad Request|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

<h1 id="radarr-indexerconfig">IndexerConfig</h1>

## get/api/v3/config/indexer

> Code samples

```bash
curl http://localhost:7878/api/v3/config/indexer \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /api/v3/config/indexer`

> Example responses

> 200 Response

```json
{
  "id": 0,
  "minimumAge": 0,
  "maximumSize": 0,
  "retention": 0,
  "rssSyncInterval": 0,
  "preferIndexerFlags": true,
  "availabilityDelay": 0,
  "allowHardcodedSubs": true,
  "whitelistedHardcodedSubs": "string"
}
```

<h3 id="getapiv3configindexer-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[IndexerConfigResource](#schemaindexerconfigresource)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## get/api/v3/config/indexer/{id}

> Code samples

```bash
curl http://localhost:7878/api/v3/config/indexer/0 \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /api/v3/config/indexer/{id}`

<h3 id="getapiv3configindexerid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|none|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "minimumAge": 0,
  "maximumSize": 0,
  "retention": 0,
  "rssSyncInterval": 0,
  "preferIndexerFlags": true,
  "availabilityDelay": 0,
  "allowHardcodedSubs": true,
  "whitelistedHardcodedSubs": "string"
}
```

<h3 id="getapiv3configindexerid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[IndexerConfigResource](#schemaindexerconfigresource)|
|404|Not Found|Not Found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## put/api/v3/config/indexer/{id}

> Code samples

```bash
curl http://localhost:7878/api/v3/config/indexer/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}" \
  -d '{
    "id": 0,
    "minimumAge": 0,
    "maximumSize": 0,
    "retention": 0,
    "rssSyncInterval": 0,
    "preferIndexerFlags": true,
    "availabilityDelay": 0,
    "allowHardcodedSubs": true,
    "whitelistedHardcodedSubs": "string"
  }'
```

`PUT /api/v3/config/indexer/{id}`

> Body parameter

```json
{
  "id": 0,
  "minimumAge": 0,
  "maximumSize": 0,
  "retention": 0,
  "rssSyncInterval": 0,
  "preferIndexerFlags": true,
  "availabilityDelay": 0,
  "allowHardcodedSubs": true,
  "whitelistedHardcodedSubs": "string"
}
```

<h3 id="putapiv3configindexerid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|body|body|[IndexerConfigResource](#schemaindexerconfigresource)|false|none|
|» id|body|integer(int32)|false|none|
|» minimumAge|body|integer(int32)|false|none|
|» maximumSize|body|integer(int32)|false|none|
|» retention|body|integer(int32)|false|none|
|» rssSyncInterval|body|integer(int32)|false|none|
|» preferIndexerFlags|body|boolean|false|none|
|» availabilityDelay|body|integer(int32)|false|none|
|» allowHardcodedSubs|body|boolean|false|none|
|» whitelistedHardcodedSubs|body|string \| null|false|none|

> Example responses

> 202 Response

```json
{
  "id": 0,
  "minimumAge": 0,
  "maximumSize": 0,
  "retention": 0,
  "rssSyncInterval": 0,
  "preferIndexerFlags": true,
  "availabilityDelay": 0,
  "allowHardcodedSubs": true,
  "whitelistedHardcodedSubs": "string"
}
```

<h3 id="putapiv3configindexerid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|Accepted|[IndexerConfigResource](#schemaindexerconfigresource)|
|404|Not Found|Not Found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

<h1 id="radarr-indexerflag">IndexerFlag</h1>

## get/api/v3/indexerflag

> Code samples

```bash
curl http://localhost:7878/api/v3/indexerflag \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /api/v3/indexerflag`

> Example responses

> 200 Response

```json
[
  {
    "id": 0,
    "name": "string",
    "nameLower": "string"
  }
]
```

<h3 id="getapiv3indexerflag-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="getapiv3indexerflag-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[IndexerFlagResource](#schemaindexerflagresource)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

<h1 id="radarr-language">Language</h1>

## get/api/v3/language

> Code samples

```bash
curl http://localhost:7878/api/v3/language \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /api/v3/language`

> Example responses

> 200 Response

```json
[
  {
    "id": 0,
    "name": "string",
    "nameLower": "string"
  }
]
```

<h3 id="getapiv3language-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="getapiv3language-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[LanguageResource](#schemalanguageresource)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## get/api/v3/language/{id}

> Code samples

```bash
curl http://localhost:7878/api/v3/language/0 \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /api/v3/language/{id}`

<h3 id="getapiv3languageid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|none|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "name": "string",
  "nameLower": "string"
}
```

<h3 id="getapiv3languageid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[LanguageResource](#schemalanguageresource)|
|404|Not Found|Not Found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

<h1 id="radarr-localization">Localization</h1>

## get/api/v3/localization

> Code samples

```bash
curl http://localhost:7878/api/v3/localization \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /api/v3/localization`

<h3 id="getapiv3localization-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## get/api/v3/localization/language

> Code samples

```bash
curl http://localhost:7878/api/v3/localization/language \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /api/v3/localization/language`

> Example responses

> 200 Response

```json
{
  "identifier": "string"
}
```

<h3 id="getapiv3localizationlanguage-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[LocalizationLanguageResource](#schemalocalizationlanguageresource)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

<h1 id="radarr-log">Log</h1>

## get/api/v3/log

> Code samples

```bash
curl http://localhost:7878/api/v3/log \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /api/v3/log`

<h3 id="getapiv3log-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|page|query|integer(int32)|false|none|
|pageSize|query|integer(int32)|false|none|
|sortKey|query|string|false|none|
|sortDirection|query|[SortDirection](#schemasortdirection)|false|none|
|level|query|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|sortDirection|default|
|sortDirection|ascending|
|sortDirection|descending|

> Example responses

> 200 Response

```json
{
  "page": 0,
  "pageSize": 0,
  "sortKey": "string",
  "sortDirection": "default",
  "totalRecords": 0,
  "records": [
    {
      "id": 0,
      "time": "1970-01-01T00:00:00Z",
      "exception": "string",
      "exceptionType": "string",
      "level": "string",
      "logger": "string",
      "message": "string",
      "method": "string"
    }
  ]
}
```

<h3 id="getapiv3log-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[LogResourcePagingResource](#schemalogresourcepagingresource)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

<h1 id="radarr-logfile">LogFile</h1>

## get/api/v3/log/file

> Code samples

```bash
curl http://localhost:7878/api/v3/log/file \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /api/v3/log/file`

> Example responses

> 200 Response

```json
[
  {
    "id": 0,
    "filename": "string",
    "lastWriteTime": "1970-01-01T00:00:00Z",
    "contentsUrl": "string",
    "downloadUrl": "string"
  }
]
```

<h3 id="getapiv3logfile-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="getapiv3logfile-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[LogFileResource](#schemalogfileresource)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## get/api/v3/log/file/{filename}

> Code samples

```bash
curl http://localhost:7878/api/v3/log/file/string \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /api/v3/log/file/{filename}`

<h3 id="getapiv3logfilefilename-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|filename|path|string|true|none|

<h3 id="getapiv3logfilefilename-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|404|Not Found|Not Found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

<h1 id="radarr-manualimport">ManualImport</h1>

## get/api/v3/manualimport

> Code samples

```bash
curl http://localhost:7878/api/v3/manualimport \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /api/v3/manualimport`

<h3 id="getapiv3manualimport-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|folder|query|string|false|none|
|downloadId|query|string|false|none|
|movieId|query|integer(int32)|false|none|
|filterExistingFiles|query|boolean|false|none|

> Example responses

> 200 Response

```json
[
  {
    "id": 0,
    "path": "string",
    "relativePath": "string",
    "folderName": "string",
    "name": "string",
    "size": 0,
    "movie": {
      "id": 0,
      "title": "string",
      "originalTitle": "string",
      "originalLanguage": {
        "id": 0,
        "name": "string"
      },
      "alternateTitles": [
        {
          "id": 0,
          "sourceType": "tmdb",
          "movieMetadataId": 0,
          "title": "string",
          "cleanTitle": "string"
        }
      ],
      "secondaryYear": 0,
      "secondaryYearSourceId": 0,
      "sortTitle": "string",
      "sizeOnDisk": 0,
      "status": "tba",
      "overview": "string",
      "inCinemas": "1970-01-01T00:00:00Z",
      "physicalRelease": "1970-01-01T00:00:00Z",
      "digitalRelease": "1970-01-01T00:00:00Z",
      "releaseDate": "1970-01-01T00:00:00Z",
      "physicalReleaseNote": "string",
      "images": [
        {
          "coverType": "unknown",
          "url": "string",
          "remoteUrl": "string"
        }
      ],
      "website": "string",
      "remotePoster": "string",
      "year": 0,
      "youTubeTrailerId": "string",
      "studio": "string",
      "path": "string",
      "qualityProfileId": 0,
      "hasFile": true,
      "movieFileId": 0,
      "monitored": true,
      "minimumAvailability": "tba",
      "isAvailable": true,
      "folderName": "string",
      "runtime": 0,
      "cleanTitle": "string",
      "imdbId": "string",
      "tmdbId": 0,
      "titleSlug": "string",
      "rootFolderPath": "string",
      "folder": "string",
      "certification": "string",
      "genres": [
        "string"
      ],
      "keywords": [
        "string"
      ],
      "tags": [
        0
      ],
      "added": "1970-01-01T00:00:00Z",
      "addOptions": {
        "ignoreEpisodesWithFiles": true,
        "ignoreEpisodesWithoutFiles": true,
        "monitor": "movieOnly",
        "searchForMovie": true,
        "addMethod": "manual"
      },
      "ratings": {
        "imdb": {
          "votes": 0,
          "value": 0,
          "type": "user"
        },
        "tmdb": {
          "votes": 0,
          "value": 0,
          "type": "user"
        },
        "metacritic": {
          "votes": 0,
          "value": 0,
          "type": "user"
        },
        "rottenTomatoes": {
          "votes": 0,
          "value": 0,
          "type": "user"
        },
        "trakt": {
          "votes": 0,
          "value": 0,
          "type": "user"
        }
      },
      "movieFile": {
        "id": 0,
        "movieId": 0,
        "relativePath": "string",
        "path": "string",
        "size": 0,
        "dateAdded": "1970-01-01T00:00:00Z",
        "sceneName": "string",
        "releaseGroup": "string",
        "edition": "string",
        "languages": [
          {
            "id": 0,
            "name": "string"
          }
        ],
        "quality": {
          "quality": {
            "id": 0,
            "name": "string",
            "source": "unknown",
            "resolution": 0,
            "modifier": "none"
          },
          "revision": {
            "version": 0,
            "real": 0,
            "isRepack": true
          }
        },
        "customFormats": [
          {
            "id": 0,
            "name": "string",
            "includeCustomFormatWhenRenaming": true,
            "specifications": [
              {
                "id": 0,
                "name": "string",
                "implementation": "string",
                "implementationName": "string",
                "infoLink": "string",
                "negate": true,
                "required": true,
                "fields": [
                  {
                    "order": 0,
                    "name": "string",
                    "label": "string",
                    "unit": "string",
                    "helpText": "string",
                    "helpTextWarning": "string",
                    "helpLink": "string",
                    "value": null,
                    "type": "string",
                    "advanced": true,
                    "selectOptions": [
                      {
                        "value": 0,
                        "name": "string",
                        "order": 0,
                        "hint": "string",
                        "dividerAfter": true
                      }
                    ],
                    "selectOptionsProviderAction": "string",
                    "section": "string",
                    "hidden": "string",
                    "privacy": "normal",
                    "placeholder": "string",
                    "isFloat": true
                  }
                ],
                "presets": [
                  {}
                ]
              }
            ]
          }
        ],
        "customFormatScore": 0,
        "indexerFlags": 0,
        "mediaInfo": {
          "id": 0,
          "audioBitrate": 0,
          "audioChannels": 0,
          "audioCodec": "string",
          "audioLanguages": "string",
          "audioStreamCount": 0,
          "videoBitDepth": 0,
          "videoBitrate": 0,
          "videoCodec": "string",
          "videoFps": 0,
          "videoDynamicRange": "string",
          "videoDynamicRangeType": "string",
          "resolution": "string",
          "runTime": "string",
          "scanType": "string",
          "subtitles": "string"
        },
        "originalFilePath": "string",
        "qualityCutoffNotMet": true
      },
      "collection": {
        "title": "string",
        "tmdbId": 0
      },
      "popularity": 0,
      "lastSearchTime": "1970-01-01T00:00:00Z",
      "statistics": {
        "movieFileCount": 0,
        "sizeOnDisk": 0,
        "releaseGroups": [
          "string"
        ],
        "movieFileQualities": [
          {
            "id": 0,
            "name": "string",
            "source": "unknown",
            "resolution": 0,
            "modifier": "none"
          }
        ]
      }
    },
    "movieFileId": 0,
    "releaseGroup": "string",
    "quality": {
      "quality": {
        "id": 0,
        "name": "string",
        "source": "unknown",
        "resolution": 0,
        "modifier": "none"
      },
      "revision": {
        "version": 0,
        "real": 0,
        "isRepack": true
      }
    },
    "languages": [
      {
        "id": 0,
        "name": "string"
      }
    ],
    "qualityWeight": 0,
    "downloadId": "string",
    "customFormats": [
      {
        "id": 0,
        "name": "string",
        "includeCustomFormatWhenRenaming": true,
        "specifications": [
          {
            "id": 0,
            "name": "string",
            "implementation": "string",
            "implementationName": "string",
            "infoLink": "string",
            "negate": true,
            "required": true,
            "fields": [
              {
                "order": 0,
                "name": "string",
                "label": "string",
                "unit": "string",
                "helpText": "string",
                "helpTextWarning": "string",
                "helpLink": "string",
                "value": null,
                "type": "string",
                "advanced": true,
                "selectOptions": [
                  {
                    "value": 0,
                    "name": "string",
                    "order": 0,
                    "hint": "string",
                    "dividerAfter": true
                  }
                ],
                "selectOptionsProviderAction": "string",
                "section": "string",
                "hidden": "string",
                "privacy": "normal",
                "placeholder": "string",
                "isFloat": true
              }
            ],
            "presets": [
              {}
            ]
          }
        ]
      }
    ],
    "customFormatScore": 0,
    "indexerFlags": 0,
    "rejections": [
      {
        "reason": "string",
        "type": "permanent"
      }
    ]
  }
]
```

<h3 id="getapiv3manualimport-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="getapiv3manualimport-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[ManualImportResource](#schemamanualimportresource)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## post/api/v3/manualimport

> Code samples

```bash
curl http://localhost:7878/api/v3/manualimport \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}" \
  -d '[
    {
      "id": 0,
      "path": "string",
      "movieId": 0,
      "movie": {
        "id": 0,
        "title": "string",
        "originalTitle": "string",
        "originalLanguage": {
          "id": 0,
          "name": "string"
        },
        "alternateTitles": [
          {
            "id": 0,
            "sourceType": "tmdb",
            "movieMetadataId": 0,
            "title": "string",
            "cleanTitle": "string"
          }
        ],
        "secondaryYear": 0,
        "secondaryYearSourceId": 0,
        "sortTitle": "string",
        "sizeOnDisk": 0,
        "status": "tba",
        "overview": "string",
        "inCinemas": "1970-01-01T00:00:00Z",
        "physicalRelease": "1970-01-01T00:00:00Z",
        "digitalRelease": "1970-01-01T00:00:00Z",
        "releaseDate": "1970-01-01T00:00:00Z",
        "physicalReleaseNote": "string",
        "images": [
          {
            "coverType": "unknown",
            "url": "string",
            "remoteUrl": "string"
          }
        ],
        "website": "string",
        "remotePoster": "string",
        "year": 0,
        "youTubeTrailerId": "string",
        "studio": "string",
        "path": "string",
        "qualityProfileId": 0,
        "hasFile": true,
        "movieFileId": 0,
        "monitored": true,
        "minimumAvailability": "tba",
        "isAvailable": true,
        "folderName": "string",
        "runtime": 0,
        "cleanTitle": "string",
        "imdbId": "string",
        "tmdbId": 0,
        "titleSlug": "string",
        "rootFolderPath": "string",
        "folder": "string",
        "certification": "string",
        "genres": [
          "string"
        ],
        "keywords": [
          "string"
        ],
        "tags": [
          0
        ],
        "added": "1970-01-01T00:00:00Z",
        "addOptions": {
          "ignoreEpisodesWithFiles": true,
          "ignoreEpisodesWithoutFiles": true,
          "monitor": "movieOnly",
          "searchForMovie": true,
          "addMethod": "manual"
        },
        "ratings": {
          "imdb": {
            "votes": 0,
            "value": 0,
            "type": "user"
          },
          "tmdb": {
            "votes": 0,
            "value": 0,
            "type": "user"
          },
          "metacritic": {
            "votes": 0,
            "value": 0,
            "type": "user"
          },
          "rottenTomatoes": {
            "votes": 0,
            "value": 0,
            "type": "user"
          },
          "trakt": {
            "votes": 0,
            "value": 0,
            "type": "user"
          }
        },
        "movieFile": {
          "id": 0,
          "movieId": 0,
          "relativePath": "string",
          "path": "string",
          "size": 0,
          "dateAdded": "1970-01-01T00:00:00Z",
          "sceneName": "string",
          "releaseGroup": "string",
          "edition": "string",
          "languages": [
            {
              "id": 0,
              "name": "string"
            }
          ],
          "quality": {
            "quality": {
              "id": 0,
              "name": "string",
              "source": "unknown",
              "resolution": 0,
              "modifier": "none"
            },
            "revision": {
              "version": 0,
              "real": 0,
              "isRepack": true
            }
          },
          "customFormats": [
            {
              "id": 0,
              "name": "string",
              "includeCustomFormatWhenRenaming": true,
              "specifications": [
                {
                  "id": 0,
                  "name": "string",
                  "implementation": "string",
                  "implementationName": "string",
                  "infoLink": "string",
                  "negate": true,
                  "required": true,
                  "fields": [
                    {
                      "order": 0,
                      "name": "string",
                      "label": "string",
                      "unit": "string",
                      "helpText": "string",
                      "helpTextWarning": "string",
                      "helpLink": "string",
                      "value": null,
                      "type": "string",
                      "advanced": true,
                      "selectOptions": [
                        {
                          "value": 0,
                          "name": "string",
                          "order": 0,
                          "hint": "string",
                          "dividerAfter": true
                        }
                      ],
                      "selectOptionsProviderAction": "string",
                      "section": "string",
                      "hidden": "string",
                      "privacy": "normal",
                      "placeholder": "string",
                      "isFloat": true
                    }
                  ],
                  "presets": [
                    {}
                  ]
                }
              ]
            }
          ],
          "customFormatScore": 0,
          "indexerFlags": 0,
          "mediaInfo": {
            "id": 0,
            "audioBitrate": 0,
            "audioChannels": 0,
            "audioCodec": "string",
            "audioLanguages": "string",
            "audioStreamCount": 0,
            "videoBitDepth": 0,
            "videoBitrate": 0,
            "videoCodec": "string",
            "videoFps": 0,
            "videoDynamicRange": "string",
            "videoDynamicRangeType": "string",
            "resolution": "string",
            "runTime": "string",
            "scanType": "string",
            "subtitles": "string"
          },
          "originalFilePath": "string",
          "qualityCutoffNotMet": true
        },
        "collection": {
          "title": "string",
          "tmdbId": 0
        },
        "popularity": 0,
        "lastSearchTime": "1970-01-01T00:00:00Z",
        "statistics": {
          "movieFileCount": 0,
          "sizeOnDisk": 0,
          "releaseGroups": [
            "string"
          ],
          "movieFileQualities": [
            {
              "id": 0,
              "name": "string",
              "source": "unknown",
              "resolution": 0,
              "modifier": "none"
            }
          ]
        }
      },
      "quality": {
        "quality": {
          "id": 0,
          "name": "string",
          "source": "unknown",
          "resolution": 0,
          "modifier": "none"
        },
        "revision": {
          "version": 0,
          "real": 0,
          "isRepack": true
        }
      },
      "languages": [
        {
          "id": 0,
          "name": "string"
        }
      ],
      "releaseGroup": "string",
      "downloadId": "string",
      "customFormats": [
        {
          "id": 0,
          "name": "string",
          "includeCustomFormatWhenRenaming": true,
          "specifications": [
            {
              "id": 0,
              "name": "string",
              "implementation": "string",
              "implementationName": "string",
              "infoLink": "string",
              "negate": true,
              "required": true,
              "fields": [
                {
                  "order": 0,
                  "name": "string",
                  "label": "string",
                  "unit": "string",
                  "helpText": "string",
                  "helpTextWarning": "string",
                  "helpLink": "string",
                  "value": null,
                  "type": "string",
                  "advanced": true,
                  "selectOptions": [
                    {
                      "value": 0,
                      "name": "string",
                      "order": 0,
                      "hint": "string",
                      "dividerAfter": true
                    }
                  ],
                  "selectOptionsProviderAction": "string",
                  "section": "string",
                  "hidden": "string",
                  "privacy": "normal",
                  "placeholder": "string",
                  "isFloat": true
                }
              ],
              "presets": [
                {}
              ]
            }
          ]
        }
      ],
      "customFormatScore": 0,
      "indexerFlags": 0,
      "rejections": [
        {
          "reason": "string",
          "type": "permanent"
        }
      ]
    }
  ]'
```

`POST /api/v3/manualimport`

> Body parameter

```json
[
  {
    "id": 0,
    "path": "string",
    "movieId": 0,
    "movie": {
      "id": 0,
      "title": "string",
      "originalTitle": "string",
      "originalLanguage": {
        "id": 0,
        "name": "string"
      },
      "alternateTitles": [
        {
          "id": 0,
          "sourceType": "tmdb",
          "movieMetadataId": 0,
          "title": "string",
          "cleanTitle": "string"
        }
      ],
      "secondaryYear": 0,
      "secondaryYearSourceId": 0,
      "sortTitle": "string",
      "sizeOnDisk": 0,
      "status": "tba",
      "overview": "string",
      "inCinemas": "1970-01-01T00:00:00Z",
      "physicalRelease": "1970-01-01T00:00:00Z",
      "digitalRelease": "1970-01-01T00:00:00Z",
      "releaseDate": "1970-01-01T00:00:00Z",
      "physicalReleaseNote": "string",
      "images": [
        {
          "coverType": "unknown",
          "url": "string",
          "remoteUrl": "string"
        }
      ],
      "website": "string",
      "remotePoster": "string",
      "year": 0,
      "youTubeTrailerId": "string",
      "studio": "string",
      "path": "string",
      "qualityProfileId": 0,
      "hasFile": true,
      "movieFileId": 0,
      "monitored": true,
      "minimumAvailability": "tba",
      "isAvailable": true,
      "folderName": "string",
      "runtime": 0,
      "cleanTitle": "string",
      "imdbId": "string",
      "tmdbId": 0,
      "titleSlug": "string",
      "rootFolderPath": "string",
      "folder": "string",
      "certification": "string",
      "genres": [
        "string"
      ],
      "keywords": [
        "string"
      ],
      "tags": [
        0
      ],
      "added": "1970-01-01T00:00:00Z",
      "addOptions": {
        "ignoreEpisodesWithFiles": true,
        "ignoreEpisodesWithoutFiles": true,
        "monitor": "movieOnly",
        "searchForMovie": true,
        "addMethod": "manual"
      },
      "ratings": {
        "imdb": {
          "votes": 0,
          "value": 0,
          "type": "user"
        },
        "tmdb": {
          "votes": 0,
          "value": 0,
          "type": "user"
        },
        "metacritic": {
          "votes": 0,
          "value": 0,
          "type": "user"
        },
        "rottenTomatoes": {
          "votes": 0,
          "value": 0,
          "type": "user"
        },
        "trakt": {
          "votes": 0,
          "value": 0,
          "type": "user"
        }
      },
      "movieFile": {
        "id": 0,
        "movieId": 0,
        "relativePath": "string",
        "path": "string",
        "size": 0,
        "dateAdded": "1970-01-01T00:00:00Z",
        "sceneName": "string",
        "releaseGroup": "string",
        "edition": "string",
        "languages": [
          {
            "id": 0,
            "name": "string"
          }
        ],
        "quality": {
          "quality": {
            "id": 0,
            "name": "string",
            "source": "unknown",
            "resolution": 0,
            "modifier": "none"
          },
          "revision": {
            "version": 0,
            "real": 0,
            "isRepack": true
          }
        },
        "customFormats": [
          {
            "id": 0,
            "name": "string",
            "includeCustomFormatWhenRenaming": true,
            "specifications": [
              {
                "id": 0,
                "name": "string",
                "implementation": "string",
                "implementationName": "string",
                "infoLink": "string",
                "negate": true,
                "required": true,
                "fields": [
                  {
                    "order": 0,
                    "name": "string",
                    "label": "string",
                    "unit": "string",
                    "helpText": "string",
                    "helpTextWarning": "string",
                    "helpLink": "string",
                    "value": null,
                    "type": "string",
                    "advanced": true,
                    "selectOptions": [
                      {
                        "value": 0,
                        "name": "string",
                        "order": 0,
                        "hint": "string",
                        "dividerAfter": true
                      }
                    ],
                    "selectOptionsProviderAction": "string",
                    "section": "string",
                    "hidden": "string",
                    "privacy": "normal",
                    "placeholder": "string",
                    "isFloat": true
                  }
                ],
                "presets": [
                  {}
                ]
              }
            ]
          }
        ],
        "customFormatScore": 0,
        "indexerFlags": 0,
        "mediaInfo": {
          "id": 0,
          "audioBitrate": 0,
          "audioChannels": 0,
          "audioCodec": "string",
          "audioLanguages": "string",
          "audioStreamCount": 0,
          "videoBitDepth": 0,
          "videoBitrate": 0,
          "videoCodec": "string",
          "videoFps": 0,
          "videoDynamicRange": "string",
          "videoDynamicRangeType": "string",
          "resolution": "string",
          "runTime": "string",
          "scanType": "string",
          "subtitles": "string"
        },
        "originalFilePath": "string",
        "qualityCutoffNotMet": true
      },
      "collection": {
        "title": "string",
        "tmdbId": 0
      },
      "popularity": 0,
      "lastSearchTime": "1970-01-01T00:00:00Z",
      "statistics": {
        "movieFileCount": 0,
        "sizeOnDisk": 0,
        "releaseGroups": [
          "string"
        ],
        "movieFileQualities": [
          {
            "id": 0,
            "name": "string",
            "source": "unknown",
            "resolution": 0,
            "modifier": "none"
          }
        ]
      }
    },
    "quality": {
      "quality": {
        "id": 0,
        "name": "string",
        "source": "unknown",
        "resolution": 0,
        "modifier": "none"
      },
      "revision": {
        "version": 0,
        "real": 0,
        "isRepack": true
      }
    },
    "languages": [
      {
        "id": 0,
        "name": "string"
      }
    ],
    "releaseGroup": "string",
    "downloadId": "string",
    "customFormats": [
      {
        "id": 0,
        "name": "string",
        "includeCustomFormatWhenRenaming": true,
        "specifications": [
          {
            "id": 0,
            "name": "string",
            "implementation": "string",
            "implementationName": "string",
            "infoLink": "string",
            "negate": true,
            "required": true,
            "fields": [
              {
                "order": 0,
                "name": "string",
                "label": "string",
                "unit": "string",
                "helpText": "string",
                "helpTextWarning": "string",
                "helpLink": "string",
                "value": null,
                "type": "string",
                "advanced": true,
                "selectOptions": [
                  {
                    "value": 0,
                    "name": "string",
                    "order": 0,
                    "hint": "string",
                    "dividerAfter": true
                  }
                ],
                "selectOptionsProviderAction": "string",
                "section": "string",
                "hidden": "string",
                "privacy": "normal",
                "placeholder": "string",
                "isFloat": true
              }
            ],
            "presets": [
              {}
            ]
          }
        ]
      }
    ],
    "customFormatScore": 0,
    "indexerFlags": 0,
    "rejections": [
      {
        "reason": "string",
        "type": "permanent"
      }
    ]
  }
]
```

<h3 id="postapiv3manualimport-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[[ManualImportReprocessResource](#schemamanualimportreprocessresource)]|false|none|

> Example responses

> 200 Response

```json
[
  {
    "id": 0,
    "path": "string",
    "movieId": 0,
    "movie": {
      "id": 0,
      "title": "string",
      "originalTitle": "string",
      "originalLanguage": {
        "id": 0,
        "name": "string"
      },
      "alternateTitles": [
        {
          "id": 0,
          "sourceType": "tmdb",
          "movieMetadataId": 0,
          "title": "string",
          "cleanTitle": "string"
        }
      ],
      "secondaryYear": 0,
      "secondaryYearSourceId": 0,
      "sortTitle": "string",
      "sizeOnDisk": 0,
      "status": "tba",
      "overview": "string",
      "inCinemas": "1970-01-01T00:00:00Z",
      "physicalRelease": "1970-01-01T00:00:00Z",
      "digitalRelease": "1970-01-01T00:00:00Z",
      "releaseDate": "1970-01-01T00:00:00Z",
      "physicalReleaseNote": "string",
      "images": [
        {
          "coverType": "unknown",
          "url": "string",
          "remoteUrl": "string"
        }
      ],
      "website": "string",
      "remotePoster": "string",
      "year": 0,
      "youTubeTrailerId": "string",
      "studio": "string",
      "path": "string",
      "qualityProfileId": 0,
      "hasFile": true,
      "movieFileId": 0,
      "monitored": true,
      "minimumAvailability": "tba",
      "isAvailable": true,
      "folderName": "string",
      "runtime": 0,
      "cleanTitle": "string",
      "imdbId": "string",
      "tmdbId": 0,
      "titleSlug": "string",
      "rootFolderPath": "string",
      "folder": "string",
      "certification": "string",
      "genres": [
        "string"
      ],
      "keywords": [
        "string"
      ],
      "tags": [
        0
      ],
      "added": "1970-01-01T00:00:00Z",
      "addOptions": {
        "ignoreEpisodesWithFiles": true,
        "ignoreEpisodesWithoutFiles": true,
        "monitor": "movieOnly",
        "searchForMovie": true,
        "addMethod": "manual"
      },
      "ratings": {
        "imdb": {
          "votes": 0,
          "value": 0,
          "type": "user"
        },
        "tmdb": {
          "votes": 0,
          "value": 0,
          "type": "user"
        },
        "metacritic": {
          "votes": 0,
          "value": 0,
          "type": "user"
        },
        "rottenTomatoes": {
          "votes": 0,
          "value": 0,
          "type": "user"
        },
        "trakt": {
          "votes": 0,
          "value": 0,
          "type": "user"
        }
      },
      "movieFile": {
        "id": 0,
        "movieId": 0,
        "relativePath": "string",
        "path": "string",
        "size": 0,
        "dateAdded": "1970-01-01T00:00:00Z",
        "sceneName": "string",
        "releaseGroup": "string",
        "edition": "string",
        "languages": [
          {
            "id": 0,
            "name": "string"
          }
        ],
        "quality": {
          "quality": {
            "id": 0,
            "name": "string",
            "source": "unknown",
            "resolution": 0,
            "modifier": "none"
          },
          "revision": {
            "version": 0,
            "real": 0,
            "isRepack": true
          }
        },
        "customFormats": [
          {
            "id": 0,
            "name": "string",
            "includeCustomFormatWhenRenaming": true,
            "specifications": [
              {
                "id": 0,
                "name": "string",
                "implementation": "string",
                "implementationName": "string",
                "infoLink": "string",
                "negate": true,
                "required": true,
                "fields": [
                  {
                    "order": 0,
                    "name": "string",
                    "label": "string",
                    "unit": "string",
                    "helpText": "string",
                    "helpTextWarning": "string",
                    "helpLink": "string",
                    "value": null,
                    "type": "string",
                    "advanced": true,
                    "selectOptions": [
                      {
                        "value": 0,
                        "name": "string",
                        "order": 0,
                        "hint": "string",
                        "dividerAfter": true
                      }
                    ],
                    "selectOptionsProviderAction": "string",
                    "section": "string",
                    "hidden": "string",
                    "privacy": "normal",
                    "placeholder": "string",
                    "isFloat": true
                  }
                ],
                "presets": [
                  {}
                ]
              }
            ]
          }
        ],
        "customFormatScore": 0,
        "indexerFlags": 0,
        "mediaInfo": {
          "id": 0,
          "audioBitrate": 0,
          "audioChannels": 0,
          "audioCodec": "string",
          "audioLanguages": "string",
          "audioStreamCount": 0,
          "videoBitDepth": 0,
          "videoBitrate": 0,
          "videoCodec": "string",
          "videoFps": 0,
          "videoDynamicRange": "string",
          "videoDynamicRangeType": "string",
          "resolution": "string",
          "runTime": "string",
          "scanType": "string",
          "subtitles": "string"
        },
        "originalFilePath": "string",
        "qualityCutoffNotMet": true
      },
      "collection": {
        "title": "string",
        "tmdbId": 0
      },
      "popularity": 0,
      "lastSearchTime": "1970-01-01T00:00:00Z",
      "statistics": {
        "movieFileCount": 0,
        "sizeOnDisk": 0,
        "releaseGroups": [
          "string"
        ],
        "movieFileQualities": [
          {
            "id": 0,
            "name": "string",
            "source": "unknown",
            "resolution": 0,
            "modifier": "none"
          }
        ]
      }
    },
    "quality": {
      "quality": {
        "id": 0,
        "name": "string",
        "source": "unknown",
        "resolution": 0,
        "modifier": "none"
      },
      "revision": {
        "version": 0,
        "real": 0,
        "isRepack": true
      }
    },
    "languages": [
      {
        "id": 0,
        "name": "string"
      }
    ],
    "releaseGroup": "string",
    "downloadId": "string",
    "customFormats": [
      {
        "id": 0,
        "name": "string",
        "includeCustomFormatWhenRenaming": true,
        "specifications": [
          {
            "id": 0,
            "name": "string",
            "implementation": "string",
            "implementationName": "string",
            "infoLink": "string",
            "negate": true,
            "required": true,
            "fields": [
              {
                "order": 0,
                "name": "string",
                "label": "string",
                "unit": "string",
                "helpText": "string",
                "helpTextWarning": "string",
                "helpLink": "string",
                "value": null,
                "type": "string",
                "advanced": true,
                "selectOptions": [
                  {
                    "value": 0,
                    "name": "string",
                    "order": 0,
                    "hint": "string",
                    "dividerAfter": true
                  }
                ],
                "selectOptionsProviderAction": "string",
                "section": "string",
                "hidden": "string",
                "privacy": "normal",
                "placeholder": "string",
                "isFloat": true
              }
            ],
            "presets": [
              {}
            ]
          }
        ]
      }
    ],
    "customFormatScore": 0,
    "indexerFlags": 0,
    "rejections": [
      {
        "reason": "string",
        "type": "permanent"
      }
    ]
  }
]
```

<h3 id="postapiv3manualimport-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|None|

<h3 id="postapiv3manualimport-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[ManualImportReprocessResource](#schemamanualimportreprocessresource)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

<h1 id="radarr-mediacover">MediaCover</h1>

## get/api/v3/mediacover/{movieId}/{filename}

> Code samples

```bash
curl http://localhost:7878/api/v3/mediacover/0/string \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /api/v3/mediacover/{movieId}/{filename}`

<h3 id="getapiv3mediacovermovieidfilename-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|movieId|path|integer(int32)|true|none|
|filename|path|string|true|none|

<h3 id="getapiv3mediacovermovieidfilename-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|404|Not Found|Not Found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

<h1 id="radarr-mediamanagementconfig">MediaManagementConfig</h1>

## get/api/v3/config/mediamanagement

> Code samples

```bash
curl http://localhost:7878/api/v3/config/mediamanagement \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /api/v3/config/mediamanagement`

> Example responses

> 200 Response

```json
{
  "id": 0,
  "autoUnmonitorPreviouslyDownloadedMovies": true,
  "recycleBin": "string",
  "recycleBinCleanupDays": 0,
  "downloadPropersAndRepacks": "preferAndUpgrade",
  "createEmptyMovieFolders": true,
  "deleteEmptyFolders": true,
  "fileDate": "none",
  "rescanAfterRefresh": "always",
  "autoRenameFolders": true,
  "pathsDefaultStatic": true,
  "setPermissionsLinux": true,
  "chmodFolder": "string",
  "chownGroup": "string",
  "skipFreeSpaceCheckWhenImporting": true,
  "minimumFreeSpaceWhenImporting": 0,
  "copyUsingHardlinks": true,
  "useScriptImport": true,
  "scriptImportPath": "string",
  "importExtraFiles": true,
  "extraFileExtensions": "string",
  "enableMediaInfo": true
}
```

<h3 id="getapiv3configmediamanagement-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[MediaManagementConfigResource](#schemamediamanagementconfigresource)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## get/api/v3/config/mediamanagement/{id}

> Code samples

```bash
curl http://localhost:7878/api/v3/config/mediamanagement/0 \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /api/v3/config/mediamanagement/{id}`

<h3 id="getapiv3configmediamanagementid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|none|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "autoUnmonitorPreviouslyDownloadedMovies": true,
  "recycleBin": "string",
  "recycleBinCleanupDays": 0,
  "downloadPropersAndRepacks": "preferAndUpgrade",
  "createEmptyMovieFolders": true,
  "deleteEmptyFolders": true,
  "fileDate": "none",
  "rescanAfterRefresh": "always",
  "autoRenameFolders": true,
  "pathsDefaultStatic": true,
  "setPermissionsLinux": true,
  "chmodFolder": "string",
  "chownGroup": "string",
  "skipFreeSpaceCheckWhenImporting": true,
  "minimumFreeSpaceWhenImporting": 0,
  "copyUsingHardlinks": true,
  "useScriptImport": true,
  "scriptImportPath": "string",
  "importExtraFiles": true,
  "extraFileExtensions": "string",
  "enableMediaInfo": true
}
```

<h3 id="getapiv3configmediamanagementid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[MediaManagementConfigResource](#schemamediamanagementconfigresource)|
|404|Not Found|Not Found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## put/api/v3/config/mediamanagement/{id}

> Code samples

```bash
curl http://localhost:7878/api/v3/config/mediamanagement/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}" \
  -d '{
    "id": 0,
    "autoUnmonitorPreviouslyDownloadedMovies": true,
    "recycleBin": "string",
    "recycleBinCleanupDays": 0,
    "downloadPropersAndRepacks": "preferAndUpgrade",
    "createEmptyMovieFolders": true,
    "deleteEmptyFolders": true,
    "fileDate": "none",
    "rescanAfterRefresh": "always",
    "autoRenameFolders": true,
    "pathsDefaultStatic": true,
    "setPermissionsLinux": true,
    "chmodFolder": "string",
    "chownGroup": "string",
    "skipFreeSpaceCheckWhenImporting": true,
    "minimumFreeSpaceWhenImporting": 0,
    "copyUsingHardlinks": true,
    "useScriptImport": true,
    "scriptImportPath": "string",
    "importExtraFiles": true,
    "extraFileExtensions": "string",
    "enableMediaInfo": true
  }'
```

`PUT /api/v3/config/mediamanagement/{id}`

> Body parameter

```json
{
  "id": 0,
  "autoUnmonitorPreviouslyDownloadedMovies": true,
  "recycleBin": "string",
  "recycleBinCleanupDays": 0,
  "downloadPropersAndRepacks": "preferAndUpgrade",
  "createEmptyMovieFolders": true,
  "deleteEmptyFolders": true,
  "fileDate": "none",
  "rescanAfterRefresh": "always",
  "autoRenameFolders": true,
  "pathsDefaultStatic": true,
  "setPermissionsLinux": true,
  "chmodFolder": "string",
  "chownGroup": "string",
  "skipFreeSpaceCheckWhenImporting": true,
  "minimumFreeSpaceWhenImporting": 0,
  "copyUsingHardlinks": true,
  "useScriptImport": true,
  "scriptImportPath": "string",
  "importExtraFiles": true,
  "extraFileExtensions": "string",
  "enableMediaInfo": true
}
```

<h3 id="putapiv3configmediamanagementid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|body|body|[MediaManagementConfigResource](#schemamediamanagementconfigresource)|false|none|
|» id|body|integer(int32)|false|none|
|» autoUnmonitorPreviouslyDownloadedMovies|body|boolean|false|none|
|» recycleBin|body|string \| null|false|none|
|» recycleBinCleanupDays|body|integer(int32)|false|none|
|» downloadPropersAndRepacks|body|[ProperDownloadTypes](#schemaproperdownloadtypes)|false|none|
|» createEmptyMovieFolders|body|boolean|false|none|
|» deleteEmptyFolders|body|boolean|false|none|
|» fileDate|body|[FileDateType](#schemafiledatetype)|false|none|
|» rescanAfterRefresh|body|[RescanAfterRefreshType](#schemarescanafterrefreshtype)|false|none|
|» autoRenameFolders|body|boolean|false|none|
|» pathsDefaultStatic|body|boolean|false|none|
|» setPermissionsLinux|body|boolean|false|none|
|» chmodFolder|body|string \| null|false|none|
|» chownGroup|body|string \| null|false|none|
|» skipFreeSpaceCheckWhenImporting|body|boolean|false|none|
|» minimumFreeSpaceWhenImporting|body|integer(int32)|false|none|
|» copyUsingHardlinks|body|boolean|false|none|
|» useScriptImport|body|boolean|false|none|
|» scriptImportPath|body|string \| null|false|none|
|» importExtraFiles|body|boolean|false|none|
|» extraFileExtensions|body|string \| null|false|none|
|» enableMediaInfo|body|boolean|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» downloadPropersAndRepacks|preferAndUpgrade|
|» downloadPropersAndRepacks|doNotUpgrade|
|» downloadPropersAndRepacks|doNotPrefer|
|» fileDate|none|
|» fileDate|cinemas|
|» fileDate|release|
|» rescanAfterRefresh|always|
|» rescanAfterRefresh|afterManual|
|» rescanAfterRefresh|never|

> Example responses

> 202 Response

```json
{
  "id": 0,
  "autoUnmonitorPreviouslyDownloadedMovies": true,
  "recycleBin": "string",
  "recycleBinCleanupDays": 0,
  "downloadPropersAndRepacks": "preferAndUpgrade",
  "createEmptyMovieFolders": true,
  "deleteEmptyFolders": true,
  "fileDate": "none",
  "rescanAfterRefresh": "always",
  "autoRenameFolders": true,
  "pathsDefaultStatic": true,
  "setPermissionsLinux": true,
  "chmodFolder": "string",
  "chownGroup": "string",
  "skipFreeSpaceCheckWhenImporting": true,
  "minimumFreeSpaceWhenImporting": 0,
  "copyUsingHardlinks": true,
  "useScriptImport": true,
  "scriptImportPath": "string",
  "importExtraFiles": true,
  "extraFileExtensions": "string",
  "enableMediaInfo": true
}
```

<h3 id="putapiv3configmediamanagementid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|Accepted|[MediaManagementConfigResource](#schemamediamanagementconfigresource)|
|404|Not Found|Not Found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

<h1 id="radarr-metadata">Metadata</h1>

## get/api/v3/metadata

> Code samples

```bash
curl http://localhost:7878/api/v3/metadata \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /api/v3/metadata`

> Example responses

> 200 Response

```json
[
  {
    "id": 0,
    "name": "string",
    "fields": [
      {
        "order": 0,
        "name": "string",
        "label": "string",
        "unit": "string",
        "helpText": "string",
        "helpTextWarning": "string",
        "helpLink": "string",
        "value": null,
        "type": "string",
        "advanced": true,
        "selectOptions": [
          {
            "value": 0,
            "name": "string",
            "order": 0,
            "hint": "string",
            "dividerAfter": true
          }
        ],
        "selectOptionsProviderAction": "string",
        "section": "string",
        "hidden": "string",
        "privacy": "normal",
        "placeholder": "string",
        "isFloat": true
      }
    ],
    "implementationName": "string",
    "implementation": "string",
    "configContract": "string",
    "infoLink": "string",
    "message": {
      "message": "string",
      "type": "info"
    },
    "tags": [
      0
    ],
    "presets": [
      {}
    ],
    "enable": true
  }
]
```

<h3 id="getapiv3metadata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="getapiv3metadata-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[MetadataResource](#schemametadataresource)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## post/api/v3/metadata

> Code samples

```bash
curl http://localhost:7878/api/v3/metadata \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}" \
  -d '{
    "id": 0,
    "name": "string",
    "fields": [
      {
        "order": 0,
        "name": "string",
        "label": "string",
        "unit": "string",
        "helpText": "string",
        "helpTextWarning": "string",
        "helpLink": "string",
        "value": null,
        "type": "string",
        "advanced": true,
        "selectOptions": [
          {
            "value": 0,
            "name": "string",
            "order": 0,
            "hint": "string",
            "dividerAfter": true
          }
        ],
        "selectOptionsProviderAction": "string",
        "section": "string",
        "hidden": "string",
        "privacy": "normal",
        "placeholder": "string",
        "isFloat": true
      }
    ],
    "implementationName": "string",
    "implementation": "string",
    "configContract": "string",
    "infoLink": "string",
    "message": {
      "message": "string",
      "type": "info"
    },
    "tags": [
      0
    ],
    "presets": [
      {}
    ],
    "enable": true
  }'
```

`POST /api/v3/metadata`

> Body parameter

```json
{
  "id": 0,
  "name": "string",
  "fields": [
    {
      "order": 0,
      "name": "string",
      "label": "string",
      "unit": "string",
      "helpText": "string",
      "helpTextWarning": "string",
      "helpLink": "string",
      "value": null,
      "type": "string",
      "advanced": true,
      "selectOptions": [
        {
          "value": 0,
          "name": "string",
          "order": 0,
          "hint": "string",
          "dividerAfter": true
        }
      ],
      "selectOptionsProviderAction": "string",
      "section": "string",
      "hidden": "string",
      "privacy": "normal",
      "placeholder": "string",
      "isFloat": true
    }
  ],
  "implementationName": "string",
  "implementation": "string",
  "configContract": "string",
  "infoLink": "string",
  "message": {
    "message": "string",
    "type": "info"
  },
  "tags": [
    0
  ],
  "presets": [
    {}
  ],
  "enable": true
}
```

<h3 id="postapiv3metadata-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|forceSave|query|boolean|false|none|
|body|body|[MetadataResource](#schemametadataresource)|false|none|
|» id|body|integer(int32)|false|none|
|» name|body|string \| null|false|none|
|» fields|body|[[Field](#schemafield)]|false|none|
|» implementationName|body|string \| null|false|none|
|» implementation|body|string \| null|false|none|
|» configContract|body|string \| null|false|none|
|» infoLink|body|string \| null|false|none|
|» message|body|[ProviderMessage](#schemaprovidermessage)|false|none|
|» tags|body|[integer(int32)]|false|none|
|» presets|body|[[MetadataResource](#schemametadataresource)]|false|none|
|» enable|body|boolean|false|none|

> Example responses

> 201 Response

```json
{
  "id": 0,
  "name": "string",
  "fields": [
    {
      "order": 0,
      "name": "string",
      "label": "string",
      "unit": "string",
      "helpText": "string",
      "helpTextWarning": "string",
      "helpLink": "string",
      "value": null,
      "type": "string",
      "advanced": true,
      "selectOptions": [
        {
          "value": 0,
          "name": "string",
          "order": 0,
          "hint": "string",
          "dividerAfter": true
        }
      ],
      "selectOptionsProviderAction": "string",
      "section": "string",
      "hidden": "string",
      "privacy": "normal",
      "placeholder": "string",
      "isFloat": true
    }
  ],
  "implementationName": "string",
  "implementation": "string",
  "configContract": "string",
  "infoLink": "string",
  "message": {
    "message": "string",
    "type": "info"
  },
  "tags": [
    0
  ],
  "presets": [
    {}
  ],
  "enable": true
}
```

<h3 id="postapiv3metadata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Created|[MetadataResource](#schemametadataresource)|
|404|Not Found|Not Found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## get/api/v3/metadata/{id}

> Code samples

```bash
curl http://localhost:7878/api/v3/metadata/0 \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /api/v3/metadata/{id}`

<h3 id="getapiv3metadataid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|none|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "name": "string",
  "fields": [
    {
      "order": 0,
      "name": "string",
      "label": "string",
      "unit": "string",
      "helpText": "string",
      "helpTextWarning": "string",
      "helpLink": "string",
      "value": null,
      "type": "string",
      "advanced": true,
      "selectOptions": [
        {
          "value": 0,
          "name": "string",
          "order": 0,
          "hint": "string",
          "dividerAfter": true
        }
      ],
      "selectOptionsProviderAction": "string",
      "section": "string",
      "hidden": "string",
      "privacy": "normal",
      "placeholder": "string",
      "isFloat": true
    }
  ],
  "implementationName": "string",
  "implementation": "string",
  "configContract": "string",
  "infoLink": "string",
  "message": {
    "message": "string",
    "type": "info"
  },
  "tags": [
    0
  ],
  "presets": [
    {}
  ],
  "enable": true
}
```

<h3 id="getapiv3metadataid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[MetadataResource](#schemametadataresource)|
|404|Not Found|Not Found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## put/api/v3/metadata/{id}

> Code samples

```bash
curl http://localhost:7878/api/v3/metadata/0 \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}" \
  -d '{
    "id": 0,
    "name": "string",
    "fields": [
      {
        "order": 0,
        "name": "string",
        "label": "string",
        "unit": "string",
        "helpText": "string",
        "helpTextWarning": "string",
        "helpLink": "string",
        "value": null,
        "type": "string",
        "advanced": true,
        "selectOptions": [
          {
            "value": 0,
            "name": "string",
            "order": 0,
            "hint": "string",
            "dividerAfter": true
          }
        ],
        "selectOptionsProviderAction": "string",
        "section": "string",
        "hidden": "string",
        "privacy": "normal",
        "placeholder": "string",
        "isFloat": true
      }
    ],
    "implementationName": "string",
    "implementation": "string",
    "configContract": "string",
    "infoLink": "string",
    "message": {
      "message": "string",
      "type": "info"
    },
    "tags": [
      0
    ],
    "presets": [
      {}
    ],
    "enable": true
  }'
```

`PUT /api/v3/metadata/{id}`

> Body parameter

```json
{
  "id": 0,
  "name": "string",
  "fields": [
    {
      "order": 0,
      "name": "string",
      "label": "string",
      "unit": "string",
      "helpText": "string",
      "helpTextWarning": "string",
      "helpLink": "string",
      "value": null,
      "type": "string",
      "advanced": true,
      "selectOptions": [
        {
          "value": 0,
          "name": "string",
          "order": 0,
          "hint": "string",
          "dividerAfter": true
        }
      ],
      "selectOptionsProviderAction": "string",
      "section": "string",
      "hidden": "string",
      "privacy": "normal",
      "placeholder": "string",
      "isFloat": true
    }
  ],
  "implementationName": "string",
  "implementation": "string",
  "configContract": "string",
  "infoLink": "string",
  "message": {
    "message": "string",
    "type": "info"
  },
  "tags": [
    0
  ],
  "presets": [
    {}
  ],
  "enable": true
}
```

<h3 id="putapiv3metadataid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|none|
|forceSave|query|boolean|false|none|
|body|body|[MetadataResource](#schemametadataresource)|false|none|
|» id|body|integer(int32)|false|none|
|» name|body|string \| null|false|none|
|» fields|body|[[Field](#schemafield)]|false|none|
|» implementationName|body|string \| null|false|none|
|» implementation|body|string \| null|false|none|
|» configContract|body|string \| null|false|none|
|» infoLink|body|string \| null|false|none|
|» message|body|[ProviderMessage](#schemaprovidermessage)|false|none|
|» tags|body|[integer(int32)]|false|none|
|» presets|body|[[MetadataResource](#schemametadataresource)]|false|none|
|» enable|body|boolean|false|none|

> Example responses

> 202 Response

```json
{
  "id": 0,
  "name": "string",
  "fields": [
    {
      "order": 0,
      "name": "string",
      "label": "string",
      "unit": "string",
      "helpText": "string",
      "helpTextWarning": "string",
      "helpLink": "string",
      "value": null,
      "type": "string",
      "advanced": true,
      "selectOptions": [
        {
          "value": 0,
          "name": "string",
          "order": 0,
          "hint": "string",
          "dividerAfter": true
        }
      ],
      "selectOptionsProviderAction": "string",
      "section": "string",
      "hidden": "string",
      "privacy": "normal",
      "placeholder": "string",
      "isFloat": true
    }
  ],
  "implementationName": "string",
  "implementation": "string",
  "configContract": "string",
  "infoLink": "string",
  "message": {
    "message": "string",
    "type": "info"
  },
  "tags": [
    0
  ],
  "presets": [
    {}
  ],
  "enable": true
}
```

<h3 id="putapiv3metadataid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|Accepted|[MetadataResource](#schemametadataresource)|
|404|Not Found|Not Found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## delete/api/v3/metadata/{id}

> Code samples

```bash
curl http://localhost:7878/api/v3/metadata/0 \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}"
```

`DELETE /api/v3/metadata/{id}`

<h3 id="deleteapiv3metadataid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|none|

> Example responses

> 200 Response

```json
null
```

<h3 id="deleteapiv3metadataid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## get/api/v3/metadata/schema

> Code samples

```bash
curl http://localhost:7878/api/v3/metadata/schema \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /api/v3/metadata/schema`

> Example responses

> 200 Response

```json
[
  {
    "id": 0,
    "name": "string",
    "fields": [
      {
        "order": 0,
        "name": "string",
        "label": "string",
        "unit": "string",
        "helpText": "string",
        "helpTextWarning": "string",
        "helpLink": "string",
        "value": null,
        "type": "string",
        "advanced": true,
        "selectOptions": [
          {
            "value": 0,
            "name": "string",
            "order": 0,
            "hint": "string",
            "dividerAfter": true
          }
        ],
        "selectOptionsProviderAction": "string",
        "section": "string",
        "hidden": "string",
        "privacy": "normal",
        "placeholder": "string",
        "isFloat": true
      }
    ],
    "implementationName": "string",
    "implementation": "string",
    "configContract": "string",
    "infoLink": "string",
    "message": {
      "message": "string",
      "type": "info"
    },
    "tags": [
      0
    ],
    "presets": [
      {}
    ],
    "enable": true
  }
]
```

<h3 id="getapiv3metadataschema-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="getapiv3metadataschema-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[MetadataResource](#schemametadataresource)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## post/api/v3/metadata/test

> Code samples

```bash
curl http://localhost:7878/api/v3/metadata/test \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "X-Api-Key: ${API_KEY}" \
  -d '{
    "id": 0,
    "name": "string",
    "fields": [
      {
        "order": 0,
        "name": "string",
        "label": "string",
        "unit": "string",
        "helpText": "string",
        "helpTextWarning": "string",
        "helpLink": "string",
        "value": null,
        "type": "string",
        "advanced": true,
        "selectOptions": [
          {
            "value": 0,
            "name": "string",
            "order": 0,
            "hint": "string",
            "dividerAfter": true
          }
        ],
        "selectOptionsProviderAction": "string",
        "section": "string",
        "hidden": "string",
        "privacy": "normal",
        "placeholder": "string",
        "isFloat": true
      }
    ],
    "implementationName": "string",
    "implementation": "string",
    "configContract": "string",
    "infoLink": "string",
    "message": {
      "message": "string",
      "type": "info"
    },
    "tags": [
      0
    ],
    "presets": [
      {}
    ],
    "enable": true
  }'
```

`POST /api/v3/metadata/test`

> Body parameter

```json
{
  "id": 0,
  "name": "string",
  "fields": [
    {
      "order": 0,
      "name": "string",
      "label": "string",
      "unit": "string",
      "helpText": "string",
      "helpTextWarning": "string",
      "helpLink": "string",
      "value": null,
      "type": "string",
      "advanced": true,
      "selectOptions": [
        {
          "value": 0,
          "name": "string",
          "order": 0,
          "hint": "string",
          "dividerAfter": true
        }
      ],
      "selectOptionsProviderAction": "string",
      "section": "string",
      "hidden": "string",
      "privacy": "normal",
      "placeholder": "string",
      "isFloat": true
    }
  ],
  "implementationName": "string",
  "implementation": "string",
  "configContract": "string",
  "infoLink": "string",
  "message": {
    "message": "string",
    "type": "info"
  },
  "tags": [
    0
  ],
  "presets": [
    {}
  ],
  "enable": true
}
```

<h3 id="postapiv3metadatatest-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|forceTest|query|boolean|false|none|
|body|body|[MetadataResource](#schemametadataresource)|false|none|
|» id|body|integer(int32)|false|none|
|» name|body|string \| null|false|none|
|» fields|body|[[Field](#schemafield)]|false|none|
|» implementationName|body|string \| null|false|none|
|» implementation|body|string \| null|false|none|
|» configContract|body|string \| null|false|none|
|» infoLink|body|string \| null|false|none|
|» message|body|[ProviderMessage](#schemaprovidermessage)|false|none|
|» tags|body|[integer(int32)]|false|none|
|» presets|body|[[MetadataResource](#schemametadataresource)]|false|none|
|» enable|body|boolean|false|none|

<h3 id="postapiv3metadatatest-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## post/api/v3/metadata/testall

> Code samples

```bash
curl http://localhost:7878/api/v3/metadata/testall \
  -X POST \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}"
```

`POST /api/v3/metadata/testall`

> Example responses

> 200 Response

```json
[
  {
    "id": 0,
    "isValid": true,
    "validationFailures": [
      {
        "propertyName": "string",
        "errorMessage": "string",
        "attemptedValue": null,
        "customState": null,
        "severity": "error",
        "errorCode": "string",
        "formattedMessageArguments": [
          null
        ],
        "formattedMessagePlaceholderValues": {
          "property1": null,
          "property2": null
        }
      }
    ]
  }
]
```

> 400 Response

```json
[
  {
    "id": 0,
    "isValid": true,
    "validationFailures": [
      {
        "propertyName": "string",
        "errorMessage": "string",
        "attemptedValue": null,
        "customState": null,
        "severity": "error",
        "errorCode": "string",
        "formattedMessageArguments": [
          null
        ],
        "formattedMessagePlaceholderValues": {
          "property1": null,
          "property2": null
        }
      }
    ]
  }
]
```

<h3 id="postapiv3metadatatestall-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|Inline|

<h3 id="postapiv3metadatatestall-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[ProviderTestAllResult](#schemaprovidertestallresult)]|false|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[ProviderTestAllResult](#schemaprovidertestallresult)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## post/api/v3/metadata/action/{name}

> Code samples

```bash
curl http://localhost:7878/api/v3/metadata/action/string \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "X-Api-Key: ${API_KEY}" \
  -d '{
    "id": 0,
    "name": "string",
    "fields": [
      {
        "order": 0,
        "name": "string",
        "label": "string",
        "unit": "string",
        "helpText": "string",
        "helpTextWarning": "string",
        "helpLink": "string",
        "value": null,
        "type": "string",
        "advanced": true,
        "selectOptions": [
          {
            "value": 0,
            "name": "string",
            "order": 0,
            "hint": "string",
            "dividerAfter": true
          }
        ],
        "selectOptionsProviderAction": "string",
        "section": "string",
        "hidden": "string",
        "privacy": "normal",
        "placeholder": "string",
        "isFloat": true
      }
    ],
    "implementationName": "string",
    "implementation": "string",
    "configContract": "string",
    "infoLink": "string",
    "message": {
      "message": "string",
      "type": "info"
    },
    "tags": [
      0
    ],
    "presets": [
      {}
    ],
    "enable": true
  }'
```

`POST /api/v3/metadata/action/{name}`

> Body parameter

```json
{
  "id": 0,
  "name": "string",
  "fields": [
    {
      "order": 0,
      "name": "string",
      "label": "string",
      "unit": "string",
      "helpText": "string",
      "helpTextWarning": "string",
      "helpLink": "string",
      "value": null,
      "type": "string",
      "advanced": true,
      "selectOptions": [
        {
          "value": 0,
          "name": "string",
          "order": 0,
          "hint": "string",
          "dividerAfter": true
        }
      ],
      "selectOptionsProviderAction": "string",
      "section": "string",
      "hidden": "string",
      "privacy": "normal",
      "placeholder": "string",
      "isFloat": true
    }
  ],
  "implementationName": "string",
  "implementation": "string",
  "configContract": "string",
  "infoLink": "string",
  "message": {
    "message": "string",
    "type": "info"
  },
  "tags": [
    0
  ],
  "presets": [
    {}
  ],
  "enable": true
}
```

<h3 id="postapiv3metadataactionname-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|none|
|body|body|[MetadataResource](#schemametadataresource)|false|none|
|» id|body|integer(int32)|false|none|
|» name|body|string \| null|false|none|
|» fields|body|[[Field](#schemafield)]|false|none|
|» implementationName|body|string \| null|false|none|
|» implementation|body|string \| null|false|none|
|» configContract|body|string \| null|false|none|
|» infoLink|body|string \| null|false|none|
|» message|body|[ProviderMessage](#schemaprovidermessage)|false|none|
|» tags|body|[integer(int32)]|false|none|
|» presets|body|[[MetadataResource](#schemametadataresource)]|false|none|
|» enable|body|boolean|false|none|

<h3 id="postapiv3metadataactionname-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|400|Bad Request|Bad Request|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

<h1 id="radarr-metadataconfig">MetadataConfig</h1>

## get/api/v3/config/metadata

> Code samples

```bash
curl http://localhost:7878/api/v3/config/metadata \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /api/v3/config/metadata`

> Example responses

> 200 Response

```json
{
  "id": 0,
  "certificationCountry": "au"
}
```

<h3 id="getapiv3configmetadata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[MetadataConfigResource](#schemametadataconfigresource)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## get/api/v3/config/metadata/{id}

> Code samples

```bash
curl http://localhost:7878/api/v3/config/metadata/0 \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /api/v3/config/metadata/{id}`

<h3 id="getapiv3configmetadataid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|none|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "certificationCountry": "au"
}
```

<h3 id="getapiv3configmetadataid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[MetadataConfigResource](#schemametadataconfigresource)|
|404|Not Found|Not Found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## put/api/v3/config/metadata/{id}

> Code samples

```bash
curl http://localhost:7878/api/v3/config/metadata/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}" \
  -d '{
    "id": 0,
    "certificationCountry": "au"
  }'
```

`PUT /api/v3/config/metadata/{id}`

> Body parameter

```json
{
  "id": 0,
  "certificationCountry": "au"
}
```

<h3 id="putapiv3configmetadataid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|body|body|[MetadataConfigResource](#schemametadataconfigresource)|false|none|
|» id|body|integer(int32)|false|none|
|» certificationCountry|body|[TMDbCountryCode](#schematmdbcountrycode)|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» certificationCountry|au|
|» certificationCountry|br|
|» certificationCountry|ca|
|» certificationCountry|fr|
|» certificationCountry|de|
|» certificationCountry|gb|
|» certificationCountry|in|
|» certificationCountry|ie|
|» certificationCountry|it|
|» certificationCountry|nz|
|» certificationCountry|ro|
|» certificationCountry|es|
|» certificationCountry|us|

> Example responses

> 202 Response

```json
{
  "id": 0,
  "certificationCountry": "au"
}
```

<h3 id="putapiv3configmetadataid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|Accepted|[MetadataConfigResource](#schemametadataconfigresource)|
|404|Not Found|Not Found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

<h1 id="radarr-missing">Missing</h1>

## get/api/v3/wanted/missing

> Code samples

```bash
curl http://localhost:7878/api/v3/wanted/missing \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /api/v3/wanted/missing`

<h3 id="getapiv3wantedmissing-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|page|query|integer(int32)|false|none|
|pageSize|query|integer(int32)|false|none|
|sortKey|query|string|false|none|
|sortDirection|query|[SortDirection](#schemasortdirection)|false|none|
|monitored|query|boolean|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|sortDirection|default|
|sortDirection|ascending|
|sortDirection|descending|

> Example responses

> 200 Response

```json
{
  "page": 0,
  "pageSize": 0,
  "sortKey": "string",
  "sortDirection": "default",
  "totalRecords": 0,
  "records": [
    {
      "id": 0,
      "title": "string",
      "originalTitle": "string",
      "originalLanguage": {
        "id": 0,
        "name": "string"
      },
      "alternateTitles": [
        {
          "id": 0,
          "sourceType": "tmdb",
          "movieMetadataId": 0,
          "title": "string",
          "cleanTitle": "string"
        }
      ],
      "secondaryYear": 0,
      "secondaryYearSourceId": 0,
      "sortTitle": "string",
      "sizeOnDisk": 0,
      "status": "tba",
      "overview": "string",
      "inCinemas": "1970-01-01T00:00:00Z",
      "physicalRelease": "1970-01-01T00:00:00Z",
      "digitalRelease": "1970-01-01T00:00:00Z",
      "releaseDate": "1970-01-01T00:00:00Z",
      "physicalReleaseNote": "string",
      "images": [
        {
          "coverType": "unknown",
          "url": "string",
          "remoteUrl": "string"
        }
      ],
      "website": "string",
      "remotePoster": "string",
      "year": 0,
      "youTubeTrailerId": "string",
      "studio": "string",
      "path": "string",
      "qualityProfileId": 0,
      "hasFile": true,
      "movieFileId": 0,
      "monitored": true,
      "minimumAvailability": "tba",
      "isAvailable": true,
      "folderName": "string",
      "runtime": 0,
      "cleanTitle": "string",
      "imdbId": "string",
      "tmdbId": 0,
      "titleSlug": "string",
      "rootFolderPath": "string",
      "folder": "string",
      "certification": "string",
      "genres": [
        "string"
      ],
      "keywords": [
        "string"
      ],
      "tags": [
        0
      ],
      "added": "1970-01-01T00:00:00Z",
      "addOptions": {
        "ignoreEpisodesWithFiles": true,
        "ignoreEpisodesWithoutFiles": true,
        "monitor": "movieOnly",
        "searchForMovie": true,
        "addMethod": "manual"
      },
      "ratings": {
        "imdb": {
          "votes": 0,
          "value": 0,
          "type": "user"
        },
        "tmdb": {
          "votes": 0,
          "value": 0,
          "type": "user"
        },
        "metacritic": {
          "votes": 0,
          "value": 0,
          "type": "user"
        },
        "rottenTomatoes": {
          "votes": 0,
          "value": 0,
          "type": "user"
        },
        "trakt": {
          "votes": 0,
          "value": 0,
          "type": "user"
        }
      },
      "movieFile": {
        "id": 0,
        "movieId": 0,
        "relativePath": "string",
        "path": "string",
        "size": 0,
        "dateAdded": "1970-01-01T00:00:00Z",
        "sceneName": "string",
        "releaseGroup": "string",
        "edition": "string",
        "languages": [
          {
            "id": 0,
            "name": "string"
          }
        ],
        "quality": {
          "quality": {
            "id": 0,
            "name": "string",
            "source": "unknown",
            "resolution": 0,
            "modifier": "none"
          },
          "revision": {
            "version": 0,
            "real": 0,
            "isRepack": true
          }
        },
        "customFormats": [
          {
            "id": 0,
            "name": "string",
            "includeCustomFormatWhenRenaming": true,
            "specifications": [
              {
                "id": 0,
                "name": "string",
                "implementation": "string",
                "implementationName": "string",
                "infoLink": "string",
                "negate": true,
                "required": true,
                "fields": [
                  {
                    "order": 0,
                    "name": "string",
                    "label": "string",
                    "unit": "string",
                    "helpText": "string",
                    "helpTextWarning": "string",
                    "helpLink": "string",
                    "value": null,
                    "type": "string",
                    "advanced": true,
                    "selectOptions": [
                      {
                        "value": 0,
                        "name": "string",
                        "order": 0,
                        "hint": "string",
                        "dividerAfter": true
                      }
                    ],
                    "selectOptionsProviderAction": "string",
                    "section": "string",
                    "hidden": "string",
                    "privacy": "normal",
                    "placeholder": "string",
                    "isFloat": true
                  }
                ],
                "presets": [
                  {}
                ]
              }
            ]
          }
        ],
        "customFormatScore": 0,
        "indexerFlags": 0,
        "mediaInfo": {
          "id": 0,
          "audioBitrate": 0,
          "audioChannels": 0,
          "audioCodec": "string",
          "audioLanguages": "string",
          "audioStreamCount": 0,
          "videoBitDepth": 0,
          "videoBitrate": 0,
          "videoCodec": "string",
          "videoFps": 0,
          "videoDynamicRange": "string",
          "videoDynamicRangeType": "string",
          "resolution": "string",
          "runTime": "string",
          "scanType": "string",
          "subtitles": "string"
        },
        "originalFilePath": "string",
        "qualityCutoffNotMet": true
      },
      "collection": {
        "title": "string",
        "tmdbId": 0
      },
      "popularity": 0,
      "lastSearchTime": "1970-01-01T00:00:00Z",
      "statistics": {
        "movieFileCount": 0,
        "sizeOnDisk": 0,
        "releaseGroups": [
          "string"
        ],
        "movieFileQualities": [
          {
            "id": 0,
            "name": "string",
            "source": "unknown",
            "resolution": 0,
            "modifier": "none"
          }
        ]
      }
    }
  ]
}
```

<h3 id="getapiv3wantedmissing-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[MovieResourcePagingResource](#schemamovieresourcepagingresource)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

<h1 id="radarr-movie">Movie</h1>

## get/api/v3/movie

> Code samples

```bash
curl http://localhost:7878/api/v3/movie \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /api/v3/movie`

<h3 id="getapiv3movie-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|tmdbId|query|integer(int32)|false|none|
|excludeLocalCovers|query|boolean|false|none|
|languageId|query|integer(int32)|false|none|

> Example responses

> 200 Response

```json
[
  {
    "id": 0,
    "title": "string",
    "originalTitle": "string",
    "originalLanguage": {
      "id": 0,
      "name": "string"
    },
    "alternateTitles": [
      {
        "id": 0,
        "sourceType": "tmdb",
        "movieMetadataId": 0,
        "title": "string",
        "cleanTitle": "string"
      }
    ],
    "secondaryYear": 0,
    "secondaryYearSourceId": 0,
    "sortTitle": "string",
    "sizeOnDisk": 0,
    "status": "tba",
    "overview": "string",
    "inCinemas": "1970-01-01T00:00:00Z",
    "physicalRelease": "1970-01-01T00:00:00Z",
    "digitalRelease": "1970-01-01T00:00:00Z",
    "releaseDate": "1970-01-01T00:00:00Z",
    "physicalReleaseNote": "string",
    "images": [
      {
        "coverType": "unknown",
        "url": "string",
        "remoteUrl": "string"
      }
    ],
    "website": "string",
    "remotePoster": "string",
    "year": 0,
    "youTubeTrailerId": "string",
    "studio": "string",
    "path": "string",
    "qualityProfileId": 0,
    "hasFile": true,
    "movieFileId": 0,
    "monitored": true,
    "minimumAvailability": "tba",
    "isAvailable": true,
    "folderName": "string",
    "runtime": 0,
    "cleanTitle": "string",
    "imdbId": "string",
    "tmdbId": 0,
    "titleSlug": "string",
    "rootFolderPath": "string",
    "folder": "string",
    "certification": "string",
    "genres": [
      "string"
    ],
    "keywords": [
      "string"
    ],
    "tags": [
      0
    ],
    "added": "1970-01-01T00:00:00Z",
    "addOptions": {
      "ignoreEpisodesWithFiles": true,
      "ignoreEpisodesWithoutFiles": true,
      "monitor": "movieOnly",
      "searchForMovie": true,
      "addMethod": "manual"
    },
    "ratings": {
      "imdb": {
        "votes": 0,
        "value": 0,
        "type": "user"
      },
      "tmdb": {
        "votes": 0,
        "value": 0,
        "type": "user"
      },
      "metacritic": {
        "votes": 0,
        "value": 0,
        "type": "user"
      },
      "rottenTomatoes": {
        "votes": 0,
        "value": 0,
        "type": "user"
      },
      "trakt": {
        "votes": 0,
        "value": 0,
        "type": "user"
      }
    },
    "movieFile": {
      "id": 0,
      "movieId": 0,
      "relativePath": "string",
      "path": "string",
      "size": 0,
      "dateAdded": "1970-01-01T00:00:00Z",
      "sceneName": "string",
      "releaseGroup": "string",
      "edition": "string",
      "languages": [
        {
          "id": 0,
          "name": "string"
        }
      ],
      "quality": {
        "quality": {
          "id": 0,
          "name": "string",
          "source": "unknown",
          "resolution": 0,
          "modifier": "none"
        },
        "revision": {
          "version": 0,
          "real": 0,
          "isRepack": true
        }
      },
      "customFormats": [
        {
          "id": 0,
          "name": "string",
          "includeCustomFormatWhenRenaming": true,
          "specifications": [
            {
              "id": 0,
              "name": "string",
              "implementation": "string",
              "implementationName": "string",
              "infoLink": "string",
              "negate": true,
              "required": true,
              "fields": [
                {
                  "order": 0,
                  "name": "string",
                  "label": "string",
                  "unit": "string",
                  "helpText": "string",
                  "helpTextWarning": "string",
                  "helpLink": "string",
                  "value": null,
                  "type": "string",
                  "advanced": true,
                  "selectOptions": [
                    {
                      "value": 0,
                      "name": "string",
                      "order": 0,
                      "hint": "string",
                      "dividerAfter": true
                    }
                  ],
                  "selectOptionsProviderAction": "string",
                  "section": "string",
                  "hidden": "string",
                  "privacy": "normal",
                  "placeholder": "string",
                  "isFloat": true
                }
              ],
              "presets": [
                {}
              ]
            }
          ]
        }
      ],
      "customFormatScore": 0,
      "indexerFlags": 0,
      "mediaInfo": {
        "id": 0,
        "audioBitrate": 0,
        "audioChannels": 0,
        "audioCodec": "string",
        "audioLanguages": "string",
        "audioStreamCount": 0,
        "videoBitDepth": 0,
        "videoBitrate": 0,
        "videoCodec": "string",
        "videoFps": 0,
        "videoDynamicRange": "string",
        "videoDynamicRangeType": "string",
        "resolution": "string",
        "runTime": "string",
        "scanType": "string",
        "subtitles": "string"
      },
      "originalFilePath": "string",
      "qualityCutoffNotMet": true
    },
    "collection": {
      "title": "string",
      "tmdbId": 0
    },
    "popularity": 0,
    "lastSearchTime": "1970-01-01T00:00:00Z",
    "statistics": {
      "movieFileCount": 0,
      "sizeOnDisk": 0,
      "releaseGroups": [
        "string"
      ],
      "movieFileQualities": [
        {
          "id": 0,
          "name": "string",
          "source": "unknown",
          "resolution": 0,
          "modifier": "none"
        }
      ]
    }
  }
]
```

<h3 id="getapiv3movie-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="getapiv3movie-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[MovieResource](#schemamovieresource)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## post/api/v3/movie

> Code samples

```bash
curl http://localhost:7878/api/v3/movie \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}" \
  -d '{
    "id": 0,
    "title": "string",
    "originalTitle": "string",
    "originalLanguage": {
      "id": 0,
      "name": "string"
    },
    "alternateTitles": [
      {
        "id": 0,
        "sourceType": "tmdb",
        "movieMetadataId": 0,
        "title": "string",
        "cleanTitle": "string"
      }
    ],
    "secondaryYear": 0,
    "secondaryYearSourceId": 0,
    "sortTitle": "string",
    "sizeOnDisk": 0,
    "status": "tba",
    "overview": "string",
    "inCinemas": "1970-01-01T00:00:00Z",
    "physicalRelease": "1970-01-01T00:00:00Z",
    "digitalRelease": "1970-01-01T00:00:00Z",
    "releaseDate": "1970-01-01T00:00:00Z",
    "physicalReleaseNote": "string",
    "images": [
      {
        "coverType": "unknown",
        "url": "string",
        "remoteUrl": "string"
      }
    ],
    "website": "string",
    "remotePoster": "string",
    "year": 0,
    "youTubeTrailerId": "string",
    "studio": "string",
    "path": "string",
    "qualityProfileId": 0,
    "hasFile": true,
    "movieFileId": 0,
    "monitored": true,
    "minimumAvailability": "tba",
    "isAvailable": true,
    "folderName": "string",
    "runtime": 0,
    "cleanTitle": "string",
    "imdbId": "string",
    "tmdbId": 0,
    "titleSlug": "string",
    "rootFolderPath": "string",
    "folder": "string",
    "certification": "string",
    "genres": [
      "string"
    ],
    "keywords": [
      "string"
    ],
    "tags": [
      0
    ],
    "added": "1970-01-01T00:00:00Z",
    "addOptions": {
      "ignoreEpisodesWithFiles": true,
      "ignoreEpisodesWithoutFiles": true,
      "monitor": "movieOnly",
      "searchForMovie": true,
      "addMethod": "manual"
    },
    "ratings": {
      "imdb": {
        "votes": 0,
        "value": 0,
        "type": "user"
      },
      "tmdb": {
        "votes": 0,
        "value": 0,
        "type": "user"
      },
      "metacritic": {
        "votes": 0,
        "value": 0,
        "type": "user"
      },
      "rottenTomatoes": {
        "votes": 0,
        "value": 0,
        "type": "user"
      },
      "trakt": {
        "votes": 0,
        "value": 0,
        "type": "user"
      }
    },
    "movieFile": {
      "id": 0,
      "movieId": 0,
      "relativePath": "string",
      "path": "string",
      "size": 0,
      "dateAdded": "1970-01-01T00:00:00Z",
      "sceneName": "string",
      "releaseGroup": "string",
      "edition": "string",
      "languages": [
        {
          "id": 0,
          "name": "string"
        }
      ],
      "quality": {
        "quality": {
          "id": 0,
          "name": "string",
          "source": "unknown",
          "resolution": 0,
          "modifier": "none"
        },
        "revision": {
          "version": 0,
          "real": 0,
          "isRepack": true
        }
      },
      "customFormats": [
        {
          "id": 0,
          "name": "string",
          "includeCustomFormatWhenRenaming": true,
          "specifications": [
            {
              "id": 0,
              "name": "string",
              "implementation": "string",
              "implementationName": "string",
              "infoLink": "string",
              "negate": true,
              "required": true,
              "fields": [
                {
                  "order": 0,
                  "name": "string",
                  "label": "string",
                  "unit": "string",
                  "helpText": "string",
                  "helpTextWarning": "string",
                  "helpLink": "string",
                  "value": null,
                  "type": "string",
                  "advanced": true,
                  "selectOptions": [
                    {
                      "value": 0,
                      "name": "string",
                      "order": 0,
                      "hint": "string",
                      "dividerAfter": true
                    }
                  ],
                  "selectOptionsProviderAction": "string",
                  "section": "string",
                  "hidden": "string",
                  "privacy": "normal",
                  "placeholder": "string",
                  "isFloat": true
                }
              ],
              "presets": [
                {}
              ]
            }
          ]
        }
      ],
      "customFormatScore": 0,
      "indexerFlags": 0,
      "mediaInfo": {
        "id": 0,
        "audioBitrate": 0,
        "audioChannels": 0,
        "audioCodec": "string",
        "audioLanguages": "string",
        "audioStreamCount": 0,
        "videoBitDepth": 0,
        "videoBitrate": 0,
        "videoCodec": "string",
        "videoFps": 0,
        "videoDynamicRange": "string",
        "videoDynamicRangeType": "string",
        "resolution": "string",
        "runTime": "string",
        "scanType": "string",
        "subtitles": "string"
      },
      "originalFilePath": "string",
      "qualityCutoffNotMet": true
    },
    "collection": {
      "title": "string",
      "tmdbId": 0
    },
    "popularity": 0,
    "lastSearchTime": "1970-01-01T00:00:00Z",
    "statistics": {
      "movieFileCount": 0,
      "sizeOnDisk": 0,
      "releaseGroups": [
        "string"
      ],
      "movieFileQualities": [
        {
          "id": 0,
          "name": "string",
          "source": "unknown",
          "resolution": 0,
          "modifier": "none"
        }
      ]
    }
  }'
```

`POST /api/v3/movie`

> Body parameter

```json
{
  "id": 0,
  "title": "string",
  "originalTitle": "string",
  "originalLanguage": {
    "id": 0,
    "name": "string"
  },
  "alternateTitles": [
    {
      "id": 0,
      "sourceType": "tmdb",
      "movieMetadataId": 0,
      "title": "string",
      "cleanTitle": "string"
    }
  ],
  "secondaryYear": 0,
  "secondaryYearSourceId": 0,
  "sortTitle": "string",
  "sizeOnDisk": 0,
  "status": "tba",
  "overview": "string",
  "inCinemas": "1970-01-01T00:00:00Z",
  "physicalRelease": "1970-01-01T00:00:00Z",
  "digitalRelease": "1970-01-01T00:00:00Z",
  "releaseDate": "1970-01-01T00:00:00Z",
  "physicalReleaseNote": "string",
  "images": [
    {
      "coverType": "unknown",
      "url": "string",
      "remoteUrl": "string"
    }
  ],
  "website": "string",
  "remotePoster": "string",
  "year": 0,
  "youTubeTrailerId": "string",
  "studio": "string",
  "path": "string",
  "qualityProfileId": 0,
  "hasFile": true,
  "movieFileId": 0,
  "monitored": true,
  "minimumAvailability": "tba",
  "isAvailable": true,
  "folderName": "string",
  "runtime": 0,
  "cleanTitle": "string",
  "imdbId": "string",
  "tmdbId": 0,
  "titleSlug": "string",
  "rootFolderPath": "string",
  "folder": "string",
  "certification": "string",
  "genres": [
    "string"
  ],
  "keywords": [
    "string"
  ],
  "tags": [
    0
  ],
  "added": "1970-01-01T00:00:00Z",
  "addOptions": {
    "ignoreEpisodesWithFiles": true,
    "ignoreEpisodesWithoutFiles": true,
    "monitor": "movieOnly",
    "searchForMovie": true,
    "addMethod": "manual"
  },
  "ratings": {
    "imdb": {
      "votes": 0,
      "value": 0,
      "type": "user"
    },
    "tmdb": {
      "votes": 0,
      "value": 0,
      "type": "user"
    },
    "metacritic": {
      "votes": 0,
      "value": 0,
      "type": "user"
    },
    "rottenTomatoes": {
      "votes": 0,
      "value": 0,
      "type": "user"
    },
    "trakt": {
      "votes": 0,
      "value": 0,
      "type": "user"
    }
  },
  "movieFile": {
    "id": 0,
    "movieId": 0,
    "relativePath": "string",
    "path": "string",
    "size": 0,
    "dateAdded": "1970-01-01T00:00:00Z",
    "sceneName": "string",
    "releaseGroup": "string",
    "edition": "string",
    "languages": [
      {
        "id": 0,
        "name": "string"
      }
    ],
    "quality": {
      "quality": {
        "id": 0,
        "name": "string",
        "source": "unknown",
        "resolution": 0,
        "modifier": "none"
      },
      "revision": {
        "version": 0,
        "real": 0,
        "isRepack": true
      }
    },
    "customFormats": [
      {
        "id": 0,
        "name": "string",
        "includeCustomFormatWhenRenaming": true,
        "specifications": [
          {
            "id": 0,
            "name": "string",
            "implementation": "string",
            "implementationName": "string",
            "infoLink": "string",
            "negate": true,
            "required": true,
            "fields": [
              {
                "order": 0,
                "name": "string",
                "label": "string",
                "unit": "string",
                "helpText": "string",
                "helpTextWarning": "string",
                "helpLink": "string",
                "value": null,
                "type": "string",
                "advanced": true,
                "selectOptions": [
                  {
                    "value": 0,
                    "name": "string",
                    "order": 0,
                    "hint": "string",
                    "dividerAfter": true
                  }
                ],
                "selectOptionsProviderAction": "string",
                "section": "string",
                "hidden": "string",
                "privacy": "normal",
                "placeholder": "string",
                "isFloat": true
              }
            ],
            "presets": [
              {}
            ]
          }
        ]
      }
    ],
    "customFormatScore": 0,
    "indexerFlags": 0,
    "mediaInfo": {
      "id": 0,
      "audioBitrate": 0,
      "audioChannels": 0,
      "audioCodec": "string",
      "audioLanguages": "string",
      "audioStreamCount": 0,
      "videoBitDepth": 0,
      "videoBitrate": 0,
      "videoCodec": "string",
      "videoFps": 0,
      "videoDynamicRange": "string",
      "videoDynamicRangeType": "string",
      "resolution": "string",
      "runTime": "string",
      "scanType": "string",
      "subtitles": "string"
    },
    "originalFilePath": "string",
    "qualityCutoffNotMet": true
  },
  "collection": {
    "title": "string",
    "tmdbId": 0
  },
  "popularity": 0,
  "lastSearchTime": "1970-01-01T00:00:00Z",
  "statistics": {
    "movieFileCount": 0,
    "sizeOnDisk": 0,
    "releaseGroups": [
      "string"
    ],
    "movieFileQualities": [
      {
        "id": 0,
        "name": "string",
        "source": "unknown",
        "resolution": 0,
        "modifier": "none"
      }
    ]
  }
}
```

<h3 id="postapiv3movie-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[MovieResource](#schemamovieresource)|false|none|
|» id|body|integer(int32)|false|none|
|» title|body|string \| null|false|none|
|» originalTitle|body|string \| null|false|none|
|» originalLanguage|body|[Language](#schemalanguage)|false|none|
|» alternateTitles|body|[[AlternativeTitleResource](#schemaalternativetitleresource)]|false|none|
|» secondaryYear|body|integer(int32) \| null|false|none|
|» secondaryYearSourceId|body|integer(int32)|false|none|
|» sortTitle|body|string \| null|false|none|
|» sizeOnDisk|body|integer(int64) \| null|false|none|
|» status|body|[MovieStatusType](#schemamoviestatustype)|false|none|
|» overview|body|string \| null|false|none|
|» inCinemas|body|string(date-time) \| null|false|none|
|» physicalRelease|body|string(date-time) \| null|false|none|
|» digitalRelease|body|string(date-time) \| null|false|none|
|» releaseDate|body|string(date-time) \| null|false|none|
|» physicalReleaseNote|body|string \| null|false|none|
|» images|body|[[MediaCover](#schemamediacover)]|false|none|
|» website|body|string \| null|false|none|
|» remotePoster|body|string \| null|false|none|
|» year|body|integer(int32)|false|none|
|» youTubeTrailerId|body|string \| null|false|none|
|» studio|body|string \| null|false|none|
|» path|body|string \| null|false|none|
|» qualityProfileId|body|integer(int32)|false|none|
|» hasFile|body|boolean \| null|false|none|
|» movieFileId|body|integer(int32)|false|none|
|» monitored|body|boolean|false|none|
|» minimumAvailability|body|[MovieStatusType](#schemamoviestatustype)|false|none|
|» isAvailable|body|boolean|false|none|
|» folderName|body|string \| null|false|none|
|» runtime|body|integer(int32)|false|none|
|» cleanTitle|body|string \| null|false|none|
|» imdbId|body|string \| null|false|none|
|» tmdbId|body|integer(int32)|false|none|
|» titleSlug|body|string \| null|false|none|
|» rootFolderPath|body|string \| null|false|none|
|» folder|body|string \| null|false|none|
|» certification|body|string \| null|false|none|
|» genres|body|[string]|false|none|
|» keywords|body|[string]|false|none|
|» tags|body|[integer(int32)]|false|none|
|» added|body|string(date-time)|false|none|
|» addOptions|body|[AddMovieOptions](#schemaaddmovieoptions)|false|none|
|» ratings|body|[Ratings](#schemaratings)|false|none|
|» movieFile|body|[MovieFileResource](#schemamoviefileresource)|false|none|
|» collection|body|[MovieCollectionResource](#schemamoviecollectionresource)|false|none|
|» popularity|body|number(float)|false|none|
|» lastSearchTime|body|string(date-time) \| null|false|none|
|» statistics|body|[MovieStatisticsResource](#schemamoviestatisticsresource)|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» status|tba|
|» status|announced|
|» status|inCinemas|
|» status|released|
|» status|deleted|
|» minimumAvailability|tba|
|» minimumAvailability|announced|
|» minimumAvailability|inCinemas|
|» minimumAvailability|released|
|» minimumAvailability|deleted|

> Example responses

> 201 Response

```json
{
  "id": 0,
  "title": "string",
  "originalTitle": "string",
  "originalLanguage": {
    "id": 0,
    "name": "string"
  },
  "alternateTitles": [
    {
      "id": 0,
      "sourceType": "tmdb",
      "movieMetadataId": 0,
      "title": "string",
      "cleanTitle": "string"
    }
  ],
  "secondaryYear": 0,
  "secondaryYearSourceId": 0,
  "sortTitle": "string",
  "sizeOnDisk": 0,
  "status": "tba",
  "overview": "string",
  "inCinemas": "1970-01-01T00:00:00Z",
  "physicalRelease": "1970-01-01T00:00:00Z",
  "digitalRelease": "1970-01-01T00:00:00Z",
  "releaseDate": "1970-01-01T00:00:00Z",
  "physicalReleaseNote": "string",
  "images": [
    {
      "coverType": "unknown",
      "url": "string",
      "remoteUrl": "string"
    }
  ],
  "website": "string",
  "remotePoster": "string",
  "year": 0,
  "youTubeTrailerId": "string",
  "studio": "string",
  "path": "string",
  "qualityProfileId": 0,
  "hasFile": true,
  "movieFileId": 0,
  "monitored": true,
  "minimumAvailability": "tba",
  "isAvailable": true,
  "folderName": "string",
  "runtime": 0,
  "cleanTitle": "string",
  "imdbId": "string",
  "tmdbId": 0,
  "titleSlug": "string",
  "rootFolderPath": "string",
  "folder": "string",
  "certification": "string",
  "genres": [
    "string"
  ],
  "keywords": [
    "string"
  ],
  "tags": [
    0
  ],
  "added": "1970-01-01T00:00:00Z",
  "addOptions": {
    "ignoreEpisodesWithFiles": true,
    "ignoreEpisodesWithoutFiles": true,
    "monitor": "movieOnly",
    "searchForMovie": true,
    "addMethod": "manual"
  },
  "ratings": {
    "imdb": {
      "votes": 0,
      "value": 0,
      "type": "user"
    },
    "tmdb": {
      "votes": 0,
      "value": 0,
      "type": "user"
    },
    "metacritic": {
      "votes": 0,
      "value": 0,
      "type": "user"
    },
    "rottenTomatoes": {
      "votes": 0,
      "value": 0,
      "type": "user"
    },
    "trakt": {
      "votes": 0,
      "value": 0,
      "type": "user"
    }
  },
  "movieFile": {
    "id": 0,
    "movieId": 0,
    "relativePath": "string",
    "path": "string",
    "size": 0,
    "dateAdded": "1970-01-01T00:00:00Z",
    "sceneName": "string",
    "releaseGroup": "string",
    "edition": "string",
    "languages": [
      {
        "id": 0,
        "name": "string"
      }
    ],
    "quality": {
      "quality": {
        "id": 0,
        "name": "string",
        "source": "unknown",
        "resolution": 0,
        "modifier": "none"
      },
      "revision": {
        "version": 0,
        "real": 0,
        "isRepack": true
      }
    },
    "customFormats": [
      {
        "id": 0,
        "name": "string",
        "includeCustomFormatWhenRenaming": true,
        "specifications": [
          {
            "id": 0,
            "name": "string",
            "implementation": "string",
            "implementationName": "string",
            "infoLink": "string",
            "negate": true,
            "required": true,
            "fields": [
              {
                "order": 0,
                "name": "string",
                "label": "string",
                "unit": "string",
                "helpText": "string",
                "helpTextWarning": "string",
                "helpLink": "string",
                "value": null,
                "type": "string",
                "advanced": true,
                "selectOptions": [
                  {
                    "value": 0,
                    "name": "string",
                    "order": 0,
                    "hint": "string",
                    "dividerAfter": true
                  }
                ],
                "selectOptionsProviderAction": "string",
                "section": "string",
                "hidden": "string",
                "privacy": "normal",
                "placeholder": "string",
                "isFloat": true
              }
            ],
            "presets": [
              {}
            ]
          }
        ]
      }
    ],
    "customFormatScore": 0,
    "indexerFlags": 0,
    "mediaInfo": {
      "id": 0,
      "audioBitrate": 0,
      "audioChannels": 0,
      "audioCodec": "string",
      "audioLanguages": "string",
      "audioStreamCount": 0,
      "videoBitDepth": 0,
      "videoBitrate": 0,
      "videoCodec": "string",
      "videoFps": 0,
      "videoDynamicRange": "string",
      "videoDynamicRangeType": "string",
      "resolution": "string",
      "runTime": "string",
      "scanType": "string",
      "subtitles": "string"
    },
    "originalFilePath": "string",
    "qualityCutoffNotMet": true
  },
  "collection": {
    "title": "string",
    "tmdbId": 0
  },
  "popularity": 0,
  "lastSearchTime": "1970-01-01T00:00:00Z",
  "statistics": {
    "movieFileCount": 0,
    "sizeOnDisk": 0,
    "releaseGroups": [
      "string"
    ],
    "movieFileQualities": [
      {
        "id": 0,
        "name": "string",
        "source": "unknown",
        "resolution": 0,
        "modifier": "none"
      }
    ]
  }
}
```

<h3 id="postapiv3movie-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Created|[MovieResource](#schemamovieresource)|
|404|Not Found|Not Found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## get/api/v3/movie/{id}

> Code samples

```bash
curl http://localhost:7878/api/v3/movie/0 \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /api/v3/movie/{id}`

<h3 id="getapiv3movieid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|none|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "title": "string",
  "originalTitle": "string",
  "originalLanguage": {
    "id": 0,
    "name": "string"
  },
  "alternateTitles": [
    {
      "id": 0,
      "sourceType": "tmdb",
      "movieMetadataId": 0,
      "title": "string",
      "cleanTitle": "string"
    }
  ],
  "secondaryYear": 0,
  "secondaryYearSourceId": 0,
  "sortTitle": "string",
  "sizeOnDisk": 0,
  "status": "tba",
  "overview": "string",
  "inCinemas": "1970-01-01T00:00:00Z",
  "physicalRelease": "1970-01-01T00:00:00Z",
  "digitalRelease": "1970-01-01T00:00:00Z",
  "releaseDate": "1970-01-01T00:00:00Z",
  "physicalReleaseNote": "string",
  "images": [
    {
      "coverType": "unknown",
      "url": "string",
      "remoteUrl": "string"
    }
  ],
  "website": "string",
  "remotePoster": "string",
  "year": 0,
  "youTubeTrailerId": "string",
  "studio": "string",
  "path": "string",
  "qualityProfileId": 0,
  "hasFile": true,
  "movieFileId": 0,
  "monitored": true,
  "minimumAvailability": "tba",
  "isAvailable": true,
  "folderName": "string",
  "runtime": 0,
  "cleanTitle": "string",
  "imdbId": "string",
  "tmdbId": 0,
  "titleSlug": "string",
  "rootFolderPath": "string",
  "folder": "string",
  "certification": "string",
  "genres": [
    "string"
  ],
  "keywords": [
    "string"
  ],
  "tags": [
    0
  ],
  "added": "1970-01-01T00:00:00Z",
  "addOptions": {
    "ignoreEpisodesWithFiles": true,
    "ignoreEpisodesWithoutFiles": true,
    "monitor": "movieOnly",
    "searchForMovie": true,
    "addMethod": "manual"
  },
  "ratings": {
    "imdb": {
      "votes": 0,
      "value": 0,
      "type": "user"
    },
    "tmdb": {
      "votes": 0,
      "value": 0,
      "type": "user"
    },
    "metacritic": {
      "votes": 0,
      "value": 0,
      "type": "user"
    },
    "rottenTomatoes": {
      "votes": 0,
      "value": 0,
      "type": "user"
    },
    "trakt": {
      "votes": 0,
      "value": 0,
      "type": "user"
    }
  },
  "movieFile": {
    "id": 0,
    "movieId": 0,
    "relativePath": "string",
    "path": "string",
    "size": 0,
    "dateAdded": "1970-01-01T00:00:00Z",
    "sceneName": "string",
    "releaseGroup": "string",
    "edition": "string",
    "languages": [
      {
        "id": 0,
        "name": "string"
      }
    ],
    "quality": {
      "quality": {
        "id": 0,
        "name": "string",
        "source": "unknown",
        "resolution": 0,
        "modifier": "none"
      },
      "revision": {
        "version": 0,
        "real": 0,
        "isRepack": true
      }
    },
    "customFormats": [
      {
        "id": 0,
        "name": "string",
        "includeCustomFormatWhenRenaming": true,
        "specifications": [
          {
            "id": 0,
            "name": "string",
            "implementation": "string",
            "implementationName": "string",
            "infoLink": "string",
            "negate": true,
            "required": true,
            "fields": [
              {
                "order": 0,
                "name": "string",
                "label": "string",
                "unit": "string",
                "helpText": "string",
                "helpTextWarning": "string",
                "helpLink": "string",
                "value": null,
                "type": "string",
                "advanced": true,
                "selectOptions": [
                  {
                    "value": 0,
                    "name": "string",
                    "order": 0,
                    "hint": "string",
                    "dividerAfter": true
                  }
                ],
                "selectOptionsProviderAction": "string",
                "section": "string",
                "hidden": "string",
                "privacy": "normal",
                "placeholder": "string",
                "isFloat": true
              }
            ],
            "presets": [
              {}
            ]
          }
        ]
      }
    ],
    "customFormatScore": 0,
    "indexerFlags": 0,
    "mediaInfo": {
      "id": 0,
      "audioBitrate": 0,
      "audioChannels": 0,
      "audioCodec": "string",
      "audioLanguages": "string",
      "audioStreamCount": 0,
      "videoBitDepth": 0,
      "videoBitrate": 0,
      "videoCodec": "string",
      "videoFps": 0,
      "videoDynamicRange": "string",
      "videoDynamicRangeType": "string",
      "resolution": "string",
      "runTime": "string",
      "scanType": "string",
      "subtitles": "string"
    },
    "originalFilePath": "string",
    "qualityCutoffNotMet": true
  },
  "collection": {
    "title": "string",
    "tmdbId": 0
  },
  "popularity": 0,
  "lastSearchTime": "1970-01-01T00:00:00Z",
  "statistics": {
    "movieFileCount": 0,
    "sizeOnDisk": 0,
    "releaseGroups": [
      "string"
    ],
    "movieFileQualities": [
      {
        "id": 0,
        "name": "string",
        "source": "unknown",
        "resolution": 0,
        "modifier": "none"
      }
    ]
  }
}
```

<h3 id="getapiv3movieid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[MovieResource](#schemamovieresource)|
|404|Not Found|Not Found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## put/api/v3/movie/{id}

> Code samples

```bash
curl http://localhost:7878/api/v3/movie/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}" \
  -d '{
    "id": 0,
    "title": "string",
    "originalTitle": "string",
    "originalLanguage": {
      "id": 0,
      "name": "string"
    },
    "alternateTitles": [
      {
        "id": 0,
        "sourceType": "tmdb",
        "movieMetadataId": 0,
        "title": "string",
        "cleanTitle": "string"
      }
    ],
    "secondaryYear": 0,
    "secondaryYearSourceId": 0,
    "sortTitle": "string",
    "sizeOnDisk": 0,
    "status": "tba",
    "overview": "string",
    "inCinemas": "1970-01-01T00:00:00Z",
    "physicalRelease": "1970-01-01T00:00:00Z",
    "digitalRelease": "1970-01-01T00:00:00Z",
    "releaseDate": "1970-01-01T00:00:00Z",
    "physicalReleaseNote": "string",
    "images": [
      {
        "coverType": "unknown",
        "url": "string",
        "remoteUrl": "string"
      }
    ],
    "website": "string",
    "remotePoster": "string",
    "year": 0,
    "youTubeTrailerId": "string",
    "studio": "string",
    "path": "string",
    "qualityProfileId": 0,
    "hasFile": true,
    "movieFileId": 0,
    "monitored": true,
    "minimumAvailability": "tba",
    "isAvailable": true,
    "folderName": "string",
    "runtime": 0,
    "cleanTitle": "string",
    "imdbId": "string",
    "tmdbId": 0,
    "titleSlug": "string",
    "rootFolderPath": "string",
    "folder": "string",
    "certification": "string",
    "genres": [
      "string"
    ],
    "keywords": [
      "string"
    ],
    "tags": [
      0
    ],
    "added": "1970-01-01T00:00:00Z",
    "addOptions": {
      "ignoreEpisodesWithFiles": true,
      "ignoreEpisodesWithoutFiles": true,
      "monitor": "movieOnly",
      "searchForMovie": true,
      "addMethod": "manual"
    },
    "ratings": {
      "imdb": {
        "votes": 0,
        "value": 0,
        "type": "user"
      },
      "tmdb": {
        "votes": 0,
        "value": 0,
        "type": "user"
      },
      "metacritic": {
        "votes": 0,
        "value": 0,
        "type": "user"
      },
      "rottenTomatoes": {
        "votes": 0,
        "value": 0,
        "type": "user"
      },
      "trakt": {
        "votes": 0,
        "value": 0,
        "type": "user"
      }
    },
    "movieFile": {
      "id": 0,
      "movieId": 0,
      "relativePath": "string",
      "path": "string",
      "size": 0,
      "dateAdded": "1970-01-01T00:00:00Z",
      "sceneName": "string",
      "releaseGroup": "string",
      "edition": "string",
      "languages": [
        {
          "id": 0,
          "name": "string"
        }
      ],
      "quality": {
        "quality": {
          "id": 0,
          "name": "string",
          "source": "unknown",
          "resolution": 0,
          "modifier": "none"
        },
        "revision": {
          "version": 0,
          "real": 0,
          "isRepack": true
        }
      },
      "customFormats": [
        {
          "id": 0,
          "name": "string",
          "includeCustomFormatWhenRenaming": true,
          "specifications": [
            {
              "id": 0,
              "name": "string",
              "implementation": "string",
              "implementationName": "string",
              "infoLink": "string",
              "negate": true,
              "required": true,
              "fields": [
                {
                  "order": 0,
                  "name": "string",
                  "label": "string",
                  "unit": "string",
                  "helpText": "string",
                  "helpTextWarning": "string",
                  "helpLink": "string",
                  "value": null,
                  "type": "string",
                  "advanced": true,
                  "selectOptions": [
                    {
                      "value": 0,
                      "name": "string",
                      "order": 0,
                      "hint": "string",
                      "dividerAfter": true
                    }
                  ],
                  "selectOptionsProviderAction": "string",
                  "section": "string",
                  "hidden": "string",
                  "privacy": "normal",
                  "placeholder": "string",
                  "isFloat": true
                }
              ],
              "presets": [
                {}
              ]
            }
          ]
        }
      ],
      "customFormatScore": 0,
      "indexerFlags": 0,
      "mediaInfo": {
        "id": 0,
        "audioBitrate": 0,
        "audioChannels": 0,
        "audioCodec": "string",
        "audioLanguages": "string",
        "audioStreamCount": 0,
        "videoBitDepth": 0,
        "videoBitrate": 0,
        "videoCodec": "string",
        "videoFps": 0,
        "videoDynamicRange": "string",
        "videoDynamicRangeType": "string",
        "resolution": "string",
        "runTime": "string",
        "scanType": "string",
        "subtitles": "string"
      },
      "originalFilePath": "string",
      "qualityCutoffNotMet": true
    },
    "collection": {
      "title": "string",
      "tmdbId": 0
    },
    "popularity": 0,
    "lastSearchTime": "1970-01-01T00:00:00Z",
    "statistics": {
      "movieFileCount": 0,
      "sizeOnDisk": 0,
      "releaseGroups": [
        "string"
      ],
      "movieFileQualities": [
        {
          "id": 0,
          "name": "string",
          "source": "unknown",
          "resolution": 0,
          "modifier": "none"
        }
      ]
    }
  }'
```

`PUT /api/v3/movie/{id}`

> Body parameter

```json
{
  "id": 0,
  "title": "string",
  "originalTitle": "string",
  "originalLanguage": {
    "id": 0,
    "name": "string"
  },
  "alternateTitles": [
    {
      "id": 0,
      "sourceType": "tmdb",
      "movieMetadataId": 0,
      "title": "string",
      "cleanTitle": "string"
    }
  ],
  "secondaryYear": 0,
  "secondaryYearSourceId": 0,
  "sortTitle": "string",
  "sizeOnDisk": 0,
  "status": "tba",
  "overview": "string",
  "inCinemas": "1970-01-01T00:00:00Z",
  "physicalRelease": "1970-01-01T00:00:00Z",
  "digitalRelease": "1970-01-01T00:00:00Z",
  "releaseDate": "1970-01-01T00:00:00Z",
  "physicalReleaseNote": "string",
  "images": [
    {
      "coverType": "unknown",
      "url": "string",
      "remoteUrl": "string"
    }
  ],
  "website": "string",
  "remotePoster": "string",
  "year": 0,
  "youTubeTrailerId": "string",
  "studio": "string",
  "path": "string",
  "qualityProfileId": 0,
  "hasFile": true,
  "movieFileId": 0,
  "monitored": true,
  "minimumAvailability": "tba",
  "isAvailable": true,
  "folderName": "string",
  "runtime": 0,
  "cleanTitle": "string",
  "imdbId": "string",
  "tmdbId": 0,
  "titleSlug": "string",
  "rootFolderPath": "string",
  "folder": "string",
  "certification": "string",
  "genres": [
    "string"
  ],
  "keywords": [
    "string"
  ],
  "tags": [
    0
  ],
  "added": "1970-01-01T00:00:00Z",
  "addOptions": {
    "ignoreEpisodesWithFiles": true,
    "ignoreEpisodesWithoutFiles": true,
    "monitor": "movieOnly",
    "searchForMovie": true,
    "addMethod": "manual"
  },
  "ratings": {
    "imdb": {
      "votes": 0,
      "value": 0,
      "type": "user"
    },
    "tmdb": {
      "votes": 0,
      "value": 0,
      "type": "user"
    },
    "metacritic": {
      "votes": 0,
      "value": 0,
      "type": "user"
    },
    "rottenTomatoes": {
      "votes": 0,
      "value": 0,
      "type": "user"
    },
    "trakt": {
      "votes": 0,
      "value": 0,
      "type": "user"
    }
  },
  "movieFile": {
    "id": 0,
    "movieId": 0,
    "relativePath": "string",
    "path": "string",
    "size": 0,
    "dateAdded": "1970-01-01T00:00:00Z",
    "sceneName": "string",
    "releaseGroup": "string",
    "edition": "string",
    "languages": [
      {
        "id": 0,
        "name": "string"
      }
    ],
    "quality": {
      "quality": {
        "id": 0,
        "name": "string",
        "source": "unknown",
        "resolution": 0,
        "modifier": "none"
      },
      "revision": {
        "version": 0,
        "real": 0,
        "isRepack": true
      }
    },
    "customFormats": [
      {
        "id": 0,
        "name": "string",
        "includeCustomFormatWhenRenaming": true,
        "specifications": [
          {
            "id": 0,
            "name": "string",
            "implementation": "string",
            "implementationName": "string",
            "infoLink": "string",
            "negate": true,
            "required": true,
            "fields": [
              {
                "order": 0,
                "name": "string",
                "label": "string",
                "unit": "string",
                "helpText": "string",
                "helpTextWarning": "string",
                "helpLink": "string",
                "value": null,
                "type": "string",
                "advanced": true,
                "selectOptions": [
                  {
                    "value": 0,
                    "name": "string",
                    "order": 0,
                    "hint": "string",
                    "dividerAfter": true
                  }
                ],
                "selectOptionsProviderAction": "string",
                "section": "string",
                "hidden": "string",
                "privacy": "normal",
                "placeholder": "string",
                "isFloat": true
              }
            ],
            "presets": [
              {}
            ]
          }
        ]
      }
    ],
    "customFormatScore": 0,
    "indexerFlags": 0,
    "mediaInfo": {
      "id": 0,
      "audioBitrate": 0,
      "audioChannels": 0,
      "audioCodec": "string",
      "audioLanguages": "string",
      "audioStreamCount": 0,
      "videoBitDepth": 0,
      "videoBitrate": 0,
      "videoCodec": "string",
      "videoFps": 0,
      "videoDynamicRange": "string",
      "videoDynamicRangeType": "string",
      "resolution": "string",
      "runTime": "string",
      "scanType": "string",
      "subtitles": "string"
    },
    "originalFilePath": "string",
    "qualityCutoffNotMet": true
  },
  "collection": {
    "title": "string",
    "tmdbId": 0
  },
  "popularity": 0,
  "lastSearchTime": "1970-01-01T00:00:00Z",
  "statistics": {
    "movieFileCount": 0,
    "sizeOnDisk": 0,
    "releaseGroups": [
      "string"
    ],
    "movieFileQualities": [
      {
        "id": 0,
        "name": "string",
        "source": "unknown",
        "resolution": 0,
        "modifier": "none"
      }
    ]
  }
}
```

<h3 id="putapiv3movieid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|moveFiles|query|boolean|false|none|
|id|path|string|true|none|
|body|body|[MovieResource](#schemamovieresource)|false|none|
|» id|body|integer(int32)|false|none|
|» title|body|string \| null|false|none|
|» originalTitle|body|string \| null|false|none|
|» originalLanguage|body|[Language](#schemalanguage)|false|none|
|» alternateTitles|body|[[AlternativeTitleResource](#schemaalternativetitleresource)]|false|none|
|» secondaryYear|body|integer(int32) \| null|false|none|
|» secondaryYearSourceId|body|integer(int32)|false|none|
|» sortTitle|body|string \| null|false|none|
|» sizeOnDisk|body|integer(int64) \| null|false|none|
|» status|body|[MovieStatusType](#schemamoviestatustype)|false|none|
|» overview|body|string \| null|false|none|
|» inCinemas|body|string(date-time) \| null|false|none|
|» physicalRelease|body|string(date-time) \| null|false|none|
|» digitalRelease|body|string(date-time) \| null|false|none|
|» releaseDate|body|string(date-time) \| null|false|none|
|» physicalReleaseNote|body|string \| null|false|none|
|» images|body|[[MediaCover](#schemamediacover)]|false|none|
|» website|body|string \| null|false|none|
|» remotePoster|body|string \| null|false|none|
|» year|body|integer(int32)|false|none|
|» youTubeTrailerId|body|string \| null|false|none|
|» studio|body|string \| null|false|none|
|» path|body|string \| null|false|none|
|» qualityProfileId|body|integer(int32)|false|none|
|» hasFile|body|boolean \| null|false|none|
|» movieFileId|body|integer(int32)|false|none|
|» monitored|body|boolean|false|none|
|» minimumAvailability|body|[MovieStatusType](#schemamoviestatustype)|false|none|
|» isAvailable|body|boolean|false|none|
|» folderName|body|string \| null|false|none|
|» runtime|body|integer(int32)|false|none|
|» cleanTitle|body|string \| null|false|none|
|» imdbId|body|string \| null|false|none|
|» tmdbId|body|integer(int32)|false|none|
|» titleSlug|body|string \| null|false|none|
|» rootFolderPath|body|string \| null|false|none|
|» folder|body|string \| null|false|none|
|» certification|body|string \| null|false|none|
|» genres|body|[string]|false|none|
|» keywords|body|[string]|false|none|
|» tags|body|[integer(int32)]|false|none|
|» added|body|string(date-time)|false|none|
|» addOptions|body|[AddMovieOptions](#schemaaddmovieoptions)|false|none|
|» ratings|body|[Ratings](#schemaratings)|false|none|
|» movieFile|body|[MovieFileResource](#schemamoviefileresource)|false|none|
|» collection|body|[MovieCollectionResource](#schemamoviecollectionresource)|false|none|
|» popularity|body|number(float)|false|none|
|» lastSearchTime|body|string(date-time) \| null|false|none|
|» statistics|body|[MovieStatisticsResource](#schemamoviestatisticsresource)|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» status|tba|
|» status|announced|
|» status|inCinemas|
|» status|released|
|» status|deleted|
|» minimumAvailability|tba|
|» minimumAvailability|announced|
|» minimumAvailability|inCinemas|
|» minimumAvailability|released|
|» minimumAvailability|deleted|

> Example responses

> 202 Response

```json
{
  "id": 0,
  "title": "string",
  "originalTitle": "string",
  "originalLanguage": {
    "id": 0,
    "name": "string"
  },
  "alternateTitles": [
    {
      "id": 0,
      "sourceType": "tmdb",
      "movieMetadataId": 0,
      "title": "string",
      "cleanTitle": "string"
    }
  ],
  "secondaryYear": 0,
  "secondaryYearSourceId": 0,
  "sortTitle": "string",
  "sizeOnDisk": 0,
  "status": "tba",
  "overview": "string",
  "inCinemas": "1970-01-01T00:00:00Z",
  "physicalRelease": "1970-01-01T00:00:00Z",
  "digitalRelease": "1970-01-01T00:00:00Z",
  "releaseDate": "1970-01-01T00:00:00Z",
  "physicalReleaseNote": "string",
  "images": [
    {
      "coverType": "unknown",
      "url": "string",
      "remoteUrl": "string"
    }
  ],
  "website": "string",
  "remotePoster": "string",
  "year": 0,
  "youTubeTrailerId": "string",
  "studio": "string",
  "path": "string",
  "qualityProfileId": 0,
  "hasFile": true,
  "movieFileId": 0,
  "monitored": true,
  "minimumAvailability": "tba",
  "isAvailable": true,
  "folderName": "string",
  "runtime": 0,
  "cleanTitle": "string",
  "imdbId": "string",
  "tmdbId": 0,
  "titleSlug": "string",
  "rootFolderPath": "string",
  "folder": "string",
  "certification": "string",
  "genres": [
    "string"
  ],
  "keywords": [
    "string"
  ],
  "tags": [
    0
  ],
  "added": "1970-01-01T00:00:00Z",
  "addOptions": {
    "ignoreEpisodesWithFiles": true,
    "ignoreEpisodesWithoutFiles": true,
    "monitor": "movieOnly",
    "searchForMovie": true,
    "addMethod": "manual"
  },
  "ratings": {
    "imdb": {
      "votes": 0,
      "value": 0,
      "type": "user"
    },
    "tmdb": {
      "votes": 0,
      "value": 0,
      "type": "user"
    },
    "metacritic": {
      "votes": 0,
      "value": 0,
      "type": "user"
    },
    "rottenTomatoes": {
      "votes": 0,
      "value": 0,
      "type": "user"
    },
    "trakt": {
      "votes": 0,
      "value": 0,
      "type": "user"
    }
  },
  "movieFile": {
    "id": 0,
    "movieId": 0,
    "relativePath": "string",
    "path": "string",
    "size": 0,
    "dateAdded": "1970-01-01T00:00:00Z",
    "sceneName": "string",
    "releaseGroup": "string",
    "edition": "string",
    "languages": [
      {
        "id": 0,
        "name": "string"
      }
    ],
    "quality": {
      "quality": {
        "id": 0,
        "name": "string",
        "source": "unknown",
        "resolution": 0,
        "modifier": "none"
      },
      "revision": {
        "version": 0,
        "real": 0,
        "isRepack": true
      }
    },
    "customFormats": [
      {
        "id": 0,
        "name": "string",
        "includeCustomFormatWhenRenaming": true,
        "specifications": [
          {
            "id": 0,
            "name": "string",
            "implementation": "string",
            "implementationName": "string",
            "infoLink": "string",
            "negate": true,
            "required": true,
            "fields": [
              {
                "order": 0,
                "name": "string",
                "label": "string",
                "unit": "string",
                "helpText": "string",
                "helpTextWarning": "string",
                "helpLink": "string",
                "value": null,
                "type": "string",
                "advanced": true,
                "selectOptions": [
                  {
                    "value": 0,
                    "name": "string",
                    "order": 0,
                    "hint": "string",
                    "dividerAfter": true
                  }
                ],
                "selectOptionsProviderAction": "string",
                "section": "string",
                "hidden": "string",
                "privacy": "normal",
                "placeholder": "string",
                "isFloat": true
              }
            ],
            "presets": [
              {}
            ]
          }
        ]
      }
    ],
    "customFormatScore": 0,
    "indexerFlags": 0,
    "mediaInfo": {
      "id": 0,
      "audioBitrate": 0,
      "audioChannels": 0,
      "audioCodec": "string",
      "audioLanguages": "string",
      "audioStreamCount": 0,
      "videoBitDepth": 0,
      "videoBitrate": 0,
      "videoCodec": "string",
      "videoFps": 0,
      "videoDynamicRange": "string",
      "videoDynamicRangeType": "string",
      "resolution": "string",
      "runTime": "string",
      "scanType": "string",
      "subtitles": "string"
    },
    "originalFilePath": "string",
    "qualityCutoffNotMet": true
  },
  "collection": {
    "title": "string",
    "tmdbId": 0
  },
  "popularity": 0,
  "lastSearchTime": "1970-01-01T00:00:00Z",
  "statistics": {
    "movieFileCount": 0,
    "sizeOnDisk": 0,
    "releaseGroups": [
      "string"
    ],
    "movieFileQualities": [
      {
        "id": 0,
        "name": "string",
        "source": "unknown",
        "resolution": 0,
        "modifier": "none"
      }
    ]
  }
}
```

<h3 id="putapiv3movieid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|Accepted|[MovieResource](#schemamovieresource)|
|404|Not Found|Not Found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## delete/api/v3/movie/{id}

> Code samples

```bash
curl http://localhost:7878/api/v3/movie/0 \
  -X DELETE \
  -H "X-Api-Key: ${API_KEY}"
```

`DELETE /api/v3/movie/{id}`

<h3 id="deleteapiv3movieid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|none|
|deleteFiles|query|boolean|false|none|
|addImportExclusion|query|boolean|false|none|

<h3 id="deleteapiv3movieid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

<h1 id="radarr-movieeditor">MovieEditor</h1>

## put/api/v3/movie/editor

> Code samples

```bash
curl http://localhost:7878/api/v3/movie/editor \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}" \
  -d '{
    "movieIds": [
      0
    ],
    "monitored": true,
    "qualityProfileId": 0,
    "minimumAvailability": "tba",
    "rootFolderPath": "string",
    "tags": [
      0
    ],
    "applyTags": "add",
    "moveFiles": true,
    "deleteFiles": true,
    "addImportExclusion": true
  }'
```

`PUT /api/v3/movie/editor`

> Body parameter

```json
{
  "movieIds": [
    0
  ],
  "monitored": true,
  "qualityProfileId": 0,
  "minimumAvailability": "tba",
  "rootFolderPath": "string",
  "tags": [
    0
  ],
  "applyTags": "add",
  "moveFiles": true,
  "deleteFiles": true,
  "addImportExclusion": true
}
```

<h3 id="putapiv3movieeditor-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[MovieEditorResource](#schemamovieeditorresource)|false|none|
|» movieIds|body|[integer(int32)]|false|none|
|» monitored|body|boolean \| null|false|none|
|» qualityProfileId|body|integer(int32) \| null|false|none|
|» minimumAvailability|body|[MovieStatusType](#schemamoviestatustype)|false|none|
|» rootFolderPath|body|string \| null|false|none|
|» tags|body|[integer(int32)]|false|none|
|» applyTags|body|[ApplyTags](#schemaapplytags)|false|none|
|» moveFiles|body|boolean|false|none|
|» deleteFiles|body|boolean|false|none|
|» addImportExclusion|body|boolean|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» minimumAvailability|tba|
|» minimumAvailability|announced|
|» minimumAvailability|inCinemas|
|» minimumAvailability|released|
|» minimumAvailability|deleted|
|» applyTags|add|
|» applyTags|remove|
|» applyTags|replace|

> Example responses

> 200 Response

```json
[
  {
    "id": 0,
    "title": "string",
    "originalTitle": "string",
    "originalLanguage": {
      "id": 0,
      "name": "string"
    },
    "alternateTitles": [
      {
        "id": 0,
        "sourceType": "tmdb",
        "movieMetadataId": 0,
        "title": "string",
        "cleanTitle": "string"
      }
    ],
    "secondaryYear": 0,
    "secondaryYearSourceId": 0,
    "sortTitle": "string",
    "sizeOnDisk": 0,
    "status": "tba",
    "overview": "string",
    "inCinemas": "1970-01-01T00:00:00Z",
    "physicalRelease": "1970-01-01T00:00:00Z",
    "digitalRelease": "1970-01-01T00:00:00Z",
    "releaseDate": "1970-01-01T00:00:00Z",
    "physicalReleaseNote": "string",
    "images": [
      {
        "coverType": "unknown",
        "url": "string",
        "remoteUrl": "string"
      }
    ],
    "website": "string",
    "remotePoster": "string",
    "year": 0,
    "youTubeTrailerId": "string",
    "studio": "string",
    "path": "string",
    "qualityProfileId": 0,
    "hasFile": true,
    "movieFileId": 0,
    "monitored": true,
    "minimumAvailability": "tba",
    "isAvailable": true,
    "folderName": "string",
    "runtime": 0,
    "cleanTitle": "string",
    "imdbId": "string",
    "tmdbId": 0,
    "titleSlug": "string",
    "rootFolderPath": "string",
    "folder": "string",
    "certification": "string",
    "genres": [
      "string"
    ],
    "keywords": [
      "string"
    ],
    "tags": [
      0
    ],
    "added": "1970-01-01T00:00:00Z",
    "addOptions": {
      "ignoreEpisodesWithFiles": true,
      "ignoreEpisodesWithoutFiles": true,
      "monitor": "movieOnly",
      "searchForMovie": true,
      "addMethod": "manual"
    },
    "ratings": {
      "imdb": {
        "votes": 0,
        "value": 0,
        "type": "user"
      },
      "tmdb": {
        "votes": 0,
        "value": 0,
        "type": "user"
      },
      "metacritic": {
        "votes": 0,
        "value": 0,
        "type": "user"
      },
      "rottenTomatoes": {
        "votes": 0,
        "value": 0,
        "type": "user"
      },
      "trakt": {
        "votes": 0,
        "value": 0,
        "type": "user"
      }
    },
    "movieFile": {
      "id": 0,
      "movieId": 0,
      "relativePath": "string",
      "path": "string",
      "size": 0,
      "dateAdded": "1970-01-01T00:00:00Z",
      "sceneName": "string",
      "releaseGroup": "string",
      "edition": "string",
      "languages": [
        {
          "id": 0,
          "name": "string"
        }
      ],
      "quality": {
        "quality": {
          "id": 0,
          "name": "string",
          "source": "unknown",
          "resolution": 0,
          "modifier": "none"
        },
        "revision": {
          "version": 0,
          "real": 0,
          "isRepack": true
        }
      },
      "customFormats": [
        {
          "id": 0,
          "name": "string",
          "includeCustomFormatWhenRenaming": true,
          "specifications": [
            {
              "id": 0,
              "name": "string",
              "implementation": "string",
              "implementationName": "string",
              "infoLink": "string",
              "negate": true,
              "required": true,
              "fields": [
                {
                  "order": 0,
                  "name": "string",
                  "label": "string",
                  "unit": "string",
                  "helpText": "string",
                  "helpTextWarning": "string",
                  "helpLink": "string",
                  "value": null,
                  "type": "string",
                  "advanced": true,
                  "selectOptions": [
                    {
                      "value": 0,
                      "name": "string",
                      "order": 0,
                      "hint": "string",
                      "dividerAfter": true
                    }
                  ],
                  "selectOptionsProviderAction": "string",
                  "section": "string",
                  "hidden": "string",
                  "privacy": "normal",
                  "placeholder": "string",
                  "isFloat": true
                }
              ],
              "presets": [
                {}
              ]
            }
          ]
        }
      ],
      "customFormatScore": 0,
      "indexerFlags": 0,
      "mediaInfo": {
        "id": 0,
        "audioBitrate": 0,
        "audioChannels": 0,
        "audioCodec": "string",
        "audioLanguages": "string",
        "audioStreamCount": 0,
        "videoBitDepth": 0,
        "videoBitrate": 0,
        "videoCodec": "string",
        "videoFps": 0,
        "videoDynamicRange": "string",
        "videoDynamicRangeType": "string",
        "resolution": "string",
        "runTime": "string",
        "scanType": "string",
        "subtitles": "string"
      },
      "originalFilePath": "string",
      "qualityCutoffNotMet": true
    },
    "collection": {
      "title": "string",
      "tmdbId": 0
    },
    "popularity": 0,
    "lastSearchTime": "1970-01-01T00:00:00Z",
    "statistics": {
      "movieFileCount": 0,
      "sizeOnDisk": 0,
      "releaseGroups": [
        "string"
      ],
      "movieFileQualities": [
        {
          "id": 0,
          "name": "string",
          "source": "unknown",
          "resolution": 0,
          "modifier": "none"
        }
      ]
    }
  }
]
```

<h3 id="putapiv3movieeditor-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|None|

<h3 id="putapiv3movieeditor-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[MovieResource](#schemamovieresource)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## delete/api/v3/movie/editor

> Code samples

```bash
curl http://localhost:7878/api/v3/movie/editor \
  -X DELETE \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}" \
  -d '{
    "movieIds": [
      0
    ],
    "monitored": true,
    "qualityProfileId": 0,
    "minimumAvailability": "tba",
    "rootFolderPath": "string",
    "tags": [
      0
    ],
    "applyTags": "add",
    "moveFiles": true,
    "deleteFiles": true,
    "addImportExclusion": true
  }'
```

`DELETE /api/v3/movie/editor`

> Body parameter

```json
{
  "movieIds": [
    0
  ],
  "monitored": true,
  "qualityProfileId": 0,
  "minimumAvailability": "tba",
  "rootFolderPath": "string",
  "tags": [
    0
  ],
  "applyTags": "add",
  "moveFiles": true,
  "deleteFiles": true,
  "addImportExclusion": true
}
```

<h3 id="deleteapiv3movieeditor-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[MovieEditorResource](#schemamovieeditorresource)|false|none|
|» movieIds|body|[integer(int32)]|false|none|
|» monitored|body|boolean \| null|false|none|
|» qualityProfileId|body|integer(int32) \| null|false|none|
|» minimumAvailability|body|[MovieStatusType](#schemamoviestatustype)|false|none|
|» rootFolderPath|body|string \| null|false|none|
|» tags|body|[integer(int32)]|false|none|
|» applyTags|body|[ApplyTags](#schemaapplytags)|false|none|
|» moveFiles|body|boolean|false|none|
|» deleteFiles|body|boolean|false|none|
|» addImportExclusion|body|boolean|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» minimumAvailability|tba|
|» minimumAvailability|announced|
|» minimumAvailability|inCinemas|
|» minimumAvailability|released|
|» minimumAvailability|deleted|
|» applyTags|add|
|» applyTags|remove|
|» applyTags|replace|

> Example responses

> 200 Response

```json
null
```

<h3 id="deleteapiv3movieeditor-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

<h1 id="radarr-moviefile">MovieFile</h1>

## get/api/v3/moviefile

> Code samples

```bash
curl http://localhost:7878/api/v3/moviefile \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /api/v3/moviefile`

<h3 id="getapiv3moviefile-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|movieId|query|[integer(int32)]|false|none|
|movieFileIds|query|[integer(int32)]|false|none|

> Example responses

> 200 Response

```json
[
  {
    "id": 0,
    "movieId": 0,
    "relativePath": "string",
    "path": "string",
    "size": 0,
    "dateAdded": "1970-01-01T00:00:00Z",
    "sceneName": "string",
    "releaseGroup": "string",
    "edition": "string",
    "languages": [
      {
        "id": 0,
        "name": "string"
      }
    ],
    "quality": {
      "quality": {
        "id": 0,
        "name": "string",
        "source": "unknown",
        "resolution": 0,
        "modifier": "none"
      },
      "revision": {
        "version": 0,
        "real": 0,
        "isRepack": true
      }
    },
    "customFormats": [
      {
        "id": 0,
        "name": "string",
        "includeCustomFormatWhenRenaming": true,
        "specifications": [
          {
            "id": 0,
            "name": "string",
            "implementation": "string",
            "implementationName": "string",
            "infoLink": "string",
            "negate": true,
            "required": true,
            "fields": [
              {
                "order": 0,
                "name": "string",
                "label": "string",
                "unit": "string",
                "helpText": "string",
                "helpTextWarning": "string",
                "helpLink": "string",
                "value": null,
                "type": "string",
                "advanced": true,
                "selectOptions": [
                  {
                    "value": 0,
                    "name": "string",
                    "order": 0,
                    "hint": "string",
                    "dividerAfter": true
                  }
                ],
                "selectOptionsProviderAction": "string",
                "section": "string",
                "hidden": "string",
                "privacy": "normal",
                "placeholder": "string",
                "isFloat": true
              }
            ],
            "presets": [
              {}
            ]
          }
        ]
      }
    ],
    "customFormatScore": 0,
    "indexerFlags": 0,
    "mediaInfo": {
      "id": 0,
      "audioBitrate": 0,
      "audioChannels": 0,
      "audioCodec": "string",
      "audioLanguages": "string",
      "audioStreamCount": 0,
      "videoBitDepth": 0,
      "videoBitrate": 0,
      "videoCodec": "string",
      "videoFps": 0,
      "videoDynamicRange": "string",
      "videoDynamicRangeType": "string",
      "resolution": "string",
      "runTime": "string",
      "scanType": "string",
      "subtitles": "string"
    },
    "originalFilePath": "string",
    "qualityCutoffNotMet": true
  }
]
```

<h3 id="getapiv3moviefile-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|None|

<h3 id="getapiv3moviefile-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[MovieFileResource](#schemamoviefileresource)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## get/api/v3/moviefile/{id}

> Code samples

```bash
curl http://localhost:7878/api/v3/moviefile/0 \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /api/v3/moviefile/{id}`

<h3 id="getapiv3moviefileid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|none|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "movieId": 0,
  "relativePath": "string",
  "path": "string",
  "size": 0,
  "dateAdded": "1970-01-01T00:00:00Z",
  "sceneName": "string",
  "releaseGroup": "string",
  "edition": "string",
  "languages": [
    {
      "id": 0,
      "name": "string"
    }
  ],
  "quality": {
    "quality": {
      "id": 0,
      "name": "string",
      "source": "unknown",
      "resolution": 0,
      "modifier": "none"
    },
    "revision": {
      "version": 0,
      "real": 0,
      "isRepack": true
    }
  },
  "customFormats": [
    {
      "id": 0,
      "name": "string",
      "includeCustomFormatWhenRenaming": true,
      "specifications": [
        {
          "id": 0,
          "name": "string",
          "implementation": "string",
          "implementationName": "string",
          "infoLink": "string",
          "negate": true,
          "required": true,
          "fields": [
            {
              "order": 0,
              "name": "string",
              "label": "string",
              "unit": "string",
              "helpText": "string",
              "helpTextWarning": "string",
              "helpLink": "string",
              "value": null,
              "type": "string",
              "advanced": true,
              "selectOptions": [
                {
                  "value": 0,
                  "name": "string",
                  "order": 0,
                  "hint": "string",
                  "dividerAfter": true
                }
              ],
              "selectOptionsProviderAction": "string",
              "section": "string",
              "hidden": "string",
              "privacy": "normal",
              "placeholder": "string",
              "isFloat": true
            }
          ],
          "presets": [
            {}
          ]
        }
      ]
    }
  ],
  "customFormatScore": 0,
  "indexerFlags": 0,
  "mediaInfo": {
    "id": 0,
    "audioBitrate": 0,
    "audioChannels": 0,
    "audioCodec": "string",
    "audioLanguages": "string",
    "audioStreamCount": 0,
    "videoBitDepth": 0,
    "videoBitrate": 0,
    "videoCodec": "string",
    "videoFps": 0,
    "videoDynamicRange": "string",
    "videoDynamicRangeType": "string",
    "resolution": "string",
    "runTime": "string",
    "scanType": "string",
    "subtitles": "string"
  },
  "originalFilePath": "string",
  "qualityCutoffNotMet": true
}
```

<h3 id="getapiv3moviefileid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[MovieFileResource](#schemamoviefileresource)|
|404|Not Found|Not Found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## put/api/v3/moviefile/{id}

> Code samples

```bash
curl http://localhost:7878/api/v3/moviefile/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}" \
  -d '{
    "id": 0,
    "movieId": 0,
    "relativePath": "string",
    "path": "string",
    "size": 0,
    "dateAdded": "1970-01-01T00:00:00Z",
    "sceneName": "string",
    "releaseGroup": "string",
    "edition": "string",
    "languages": [
      {
        "id": 0,
        "name": "string"
      }
    ],
    "quality": {
      "quality": {
        "id": 0,
        "name": "string",
        "source": "unknown",
        "resolution": 0,
        "modifier": "none"
      },
      "revision": {
        "version": 0,
        "real": 0,
        "isRepack": true
      }
    },
    "customFormats": [
      {
        "id": 0,
        "name": "string",
        "includeCustomFormatWhenRenaming": true,
        "specifications": [
          {
            "id": 0,
            "name": "string",
            "implementation": "string",
            "implementationName": "string",
            "infoLink": "string",
            "negate": true,
            "required": true,
            "fields": [
              {
                "order": 0,
                "name": "string",
                "label": "string",
                "unit": "string",
                "helpText": "string",
                "helpTextWarning": "string",
                "helpLink": "string",
                "value": null,
                "type": "string",
                "advanced": true,
                "selectOptions": [
                  {
                    "value": 0,
                    "name": "string",
                    "order": 0,
                    "hint": "string",
                    "dividerAfter": true
                  }
                ],
                "selectOptionsProviderAction": "string",
                "section": "string",
                "hidden": "string",
                "privacy": "normal",
                "placeholder": "string",
                "isFloat": true
              }
            ],
            "presets": [
              {}
            ]
          }
        ]
      }
    ],
    "customFormatScore": 0,
    "indexerFlags": 0,
    "mediaInfo": {
      "id": 0,
      "audioBitrate": 0,
      "audioChannels": 0,
      "audioCodec": "string",
      "audioLanguages": "string",
      "audioStreamCount": 0,
      "videoBitDepth": 0,
      "videoBitrate": 0,
      "videoCodec": "string",
      "videoFps": 0,
      "videoDynamicRange": "string",
      "videoDynamicRangeType": "string",
      "resolution": "string",
      "runTime": "string",
      "scanType": "string",
      "subtitles": "string"
    },
    "originalFilePath": "string",
    "qualityCutoffNotMet": true
  }'
```

`PUT /api/v3/moviefile/{id}`

> Body parameter

```json
{
  "id": 0,
  "movieId": 0,
  "relativePath": "string",
  "path": "string",
  "size": 0,
  "dateAdded": "1970-01-01T00:00:00Z",
  "sceneName": "string",
  "releaseGroup": "string",
  "edition": "string",
  "languages": [
    {
      "id": 0,
      "name": "string"
    }
  ],
  "quality": {
    "quality": {
      "id": 0,
      "name": "string",
      "source": "unknown",
      "resolution": 0,
      "modifier": "none"
    },
    "revision": {
      "version": 0,
      "real": 0,
      "isRepack": true
    }
  },
  "customFormats": [
    {
      "id": 0,
      "name": "string",
      "includeCustomFormatWhenRenaming": true,
      "specifications": [
        {
          "id": 0,
          "name": "string",
          "implementation": "string",
          "implementationName": "string",
          "infoLink": "string",
          "negate": true,
          "required": true,
          "fields": [
            {
              "order": 0,
              "name": "string",
              "label": "string",
              "unit": "string",
              "helpText": "string",
              "helpTextWarning": "string",
              "helpLink": "string",
              "value": null,
              "type": "string",
              "advanced": true,
              "selectOptions": [
                {
                  "value": 0,
                  "name": "string",
                  "order": 0,
                  "hint": "string",
                  "dividerAfter": true
                }
              ],
              "selectOptionsProviderAction": "string",
              "section": "string",
              "hidden": "string",
              "privacy": "normal",
              "placeholder": "string",
              "isFloat": true
            }
          ],
          "presets": [
            {}
          ]
        }
      ]
    }
  ],
  "customFormatScore": 0,
  "indexerFlags": 0,
  "mediaInfo": {
    "id": 0,
    "audioBitrate": 0,
    "audioChannels": 0,
    "audioCodec": "string",
    "audioLanguages": "string",
    "audioStreamCount": 0,
    "videoBitDepth": 0,
    "videoBitrate": 0,
    "videoCodec": "string",
    "videoFps": 0,
    "videoDynamicRange": "string",
    "videoDynamicRangeType": "string",
    "resolution": "string",
    "runTime": "string",
    "scanType": "string",
    "subtitles": "string"
  },
  "originalFilePath": "string",
  "qualityCutoffNotMet": true
}
```

<h3 id="putapiv3moviefileid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|body|body|[MovieFileResource](#schemamoviefileresource)|false|none|
|» id|body|integer(int32)|false|none|
|» movieId|body|integer(int32)|false|none|
|» relativePath|body|string \| null|false|none|
|» path|body|string \| null|false|none|
|» size|body|integer(int64)|false|none|
|» dateAdded|body|string(date-time)|false|none|
|» sceneName|body|string \| null|false|none|
|» releaseGroup|body|string \| null|false|none|
|» edition|body|string \| null|false|none|
|» languages|body|[[Language](#schemalanguage)]|false|none|
|» quality|body|[QualityModel](#schemaqualitymodel)|false|none|
|» customFormats|body|[[CustomFormatResource](#schemacustomformatresource)]|false|none|
|» customFormatScore|body|integer(int32) \| null|false|none|
|» indexerFlags|body|integer(int32) \| null|false|none|
|» mediaInfo|body|[MediaInfoResource](#schemamediainforesource)|false|none|
|» originalFilePath|body|string \| null|false|none|
|» qualityCutoffNotMet|body|boolean|false|none|

> Example responses

> 202 Response

```json
{
  "id": 0,
  "movieId": 0,
  "relativePath": "string",
  "path": "string",
  "size": 0,
  "dateAdded": "1970-01-01T00:00:00Z",
  "sceneName": "string",
  "releaseGroup": "string",
  "edition": "string",
  "languages": [
    {
      "id": 0,
      "name": "string"
    }
  ],
  "quality": {
    "quality": {
      "id": 0,
      "name": "string",
      "source": "unknown",
      "resolution": 0,
      "modifier": "none"
    },
    "revision": {
      "version": 0,
      "real": 0,
      "isRepack": true
    }
  },
  "customFormats": [
    {
      "id": 0,
      "name": "string",
      "includeCustomFormatWhenRenaming": true,
      "specifications": [
        {
          "id": 0,
          "name": "string",
          "implementation": "string",
          "implementationName": "string",
          "infoLink": "string",
          "negate": true,
          "required": true,
          "fields": [
            {
              "order": 0,
              "name": "string",
              "label": "string",
              "unit": "string",
              "helpText": "string",
              "helpTextWarning": "string",
              "helpLink": "string",
              "value": null,
              "type": "string",
              "advanced": true,
              "selectOptions": [
                {
                  "value": 0,
                  "name": "string",
                  "order": 0,
                  "hint": "string",
                  "dividerAfter": true
                }
              ],
              "selectOptionsProviderAction": "string",
              "section": "string",
              "hidden": "string",
              "privacy": "normal",
              "placeholder": "string",
              "isFloat": true
            }
          ],
          "presets": [
            {}
          ]
        }
      ]
    }
  ],
  "customFormatScore": 0,
  "indexerFlags": 0,
  "mediaInfo": {
    "id": 0,
    "audioBitrate": 0,
    "audioChannels": 0,
    "audioCodec": "string",
    "audioLanguages": "string",
    "audioStreamCount": 0,
    "videoBitDepth": 0,
    "videoBitrate": 0,
    "videoCodec": "string",
    "videoFps": 0,
    "videoDynamicRange": "string",
    "videoDynamicRangeType": "string",
    "resolution": "string",
    "runTime": "string",
    "scanType": "string",
    "subtitles": "string"
  },
  "originalFilePath": "string",
  "qualityCutoffNotMet": true
}
```

<h3 id="putapiv3moviefileid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|Accepted|[MovieFileResource](#schemamoviefileresource)|
|404|Not Found|Not Found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## delete/api/v3/moviefile/{id}

> Code samples

```bash
curl http://localhost:7878/api/v3/moviefile/0 \
  -X DELETE \
  -H "X-Api-Key: ${API_KEY}"
```

`DELETE /api/v3/moviefile/{id}`

<h3 id="deleteapiv3moviefileid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|none|

<h3 id="deleteapiv3moviefileid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|
|404|Not Found|Not Found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## put/api/v3/moviefile/editor

> Code samples

```bash
curl http://localhost:7878/api/v3/moviefile/editor \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}" \
  -d '{
    "movieFileIds": [
      0
    ],
    "languages": [
      {
        "id": 0,
        "name": "string"
      }
    ],
    "quality": {
      "quality": {
        "id": 0,
        "name": "string",
        "source": "unknown",
        "resolution": 0,
        "modifier": "none"
      },
      "revision": {
        "version": 0,
        "real": 0,
        "isRepack": true
      }
    },
    "edition": "string",
    "releaseGroup": "string",
    "sceneName": "string",
    "indexerFlags": 0
  }'
```

`PUT /api/v3/moviefile/editor`

<aside class="warning">
This operation is deprecated
</aside>

> Body parameter

```json
{
  "movieFileIds": [
    0
  ],
  "languages": [
    {
      "id": 0,
      "name": "string"
    }
  ],
  "quality": {
    "quality": {
      "id": 0,
      "name": "string",
      "source": "unknown",
      "resolution": 0,
      "modifier": "none"
    },
    "revision": {
      "version": 0,
      "real": 0,
      "isRepack": true
    }
  },
  "edition": "string",
  "releaseGroup": "string",
  "sceneName": "string",
  "indexerFlags": 0
}
```

<h3 id="putapiv3moviefileeditor-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[MovieFileListResource](#schemamoviefilelistresource)|false|none|
|» movieFileIds|body|[integer(int32)]|false|none|
|» languages|body|[[Language](#schemalanguage)]|false|none|
|» quality|body|[QualityModel](#schemaqualitymodel)|false|none|
|» edition|body|string \| null|false|none|
|» releaseGroup|body|string \| null|false|none|
|» sceneName|body|string \| null|false|none|
|» indexerFlags|body|integer(int32) \| null|false|none|

> Example responses

> 200 Response

```json
[
  {
    "id": 0,
    "movieId": 0,
    "relativePath": "string",
    "path": "string",
    "size": 0,
    "dateAdded": "1970-01-01T00:00:00Z",
    "sceneName": "string",
    "releaseGroup": "string",
    "edition": "string",
    "languages": [
      {
        "id": 0,
        "name": "string"
      }
    ],
    "quality": {
      "quality": {
        "id": 0,
        "name": "string",
        "source": "unknown",
        "resolution": 0,
        "modifier": "none"
      },
      "revision": {
        "version": 0,
        "real": 0,
        "isRepack": true
      }
    },
    "customFormats": [
      {
        "id": 0,
        "name": "string",
        "includeCustomFormatWhenRenaming": true,
        "specifications": [
          {
            "id": 0,
            "name": "string",
            "implementation": "string",
            "implementationName": "string",
            "infoLink": "string",
            "negate": true,
            "required": true,
            "fields": [
              {
                "order": 0,
                "name": "string",
                "label": "string",
                "unit": "string",
                "helpText": "string",
                "helpTextWarning": "string",
                "helpLink": "string",
                "value": null,
                "type": "string",
                "advanced": true,
                "selectOptions": [
                  {
                    "value": 0,
                    "name": "string",
                    "order": 0,
                    "hint": "string",
                    "dividerAfter": true
                  }
                ],
                "selectOptionsProviderAction": "string",
                "section": "string",
                "hidden": "string",
                "privacy": "normal",
                "placeholder": "string",
                "isFloat": true
              }
            ],
            "presets": [
              {}
            ]
          }
        ]
      }
    ],
    "customFormatScore": 0,
    "indexerFlags": 0,
    "mediaInfo": {
      "id": 0,
      "audioBitrate": 0,
      "audioChannels": 0,
      "audioCodec": "string",
      "audioLanguages": "string",
      "audioStreamCount": 0,
      "videoBitDepth": 0,
      "videoBitrate": 0,
      "videoCodec": "string",
      "videoFps": 0,
      "videoDynamicRange": "string",
      "videoDynamicRangeType": "string",
      "resolution": "string",
      "runTime": "string",
      "scanType": "string",
      "subtitles": "string"
    },
    "originalFilePath": "string",
    "qualityCutoffNotMet": true
  }
]
```

<h3 id="putapiv3moviefileeditor-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="putapiv3moviefileeditor-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[MovieFileResource](#schemamoviefileresource)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## put/api/v3/moviefile/bulk

> Code samples

```bash
curl http://localhost:7878/api/v3/moviefile/bulk \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}" \
  -d '[
    {
      "id": 0,
      "movieId": 0,
      "relativePath": "string",
      "path": "string",
      "size": 0,
      "dateAdded": "1970-01-01T00:00:00Z",
      "sceneName": "string",
      "releaseGroup": "string",
      "edition": "string",
      "languages": [
        {
          "id": 0,
          "name": "string"
        }
      ],
      "quality": {
        "quality": {
          "id": 0,
          "name": "string",
          "source": "unknown",
          "resolution": 0,
          "modifier": "none"
        },
        "revision": {
          "version": 0,
          "real": 0,
          "isRepack": true
        }
      },
      "customFormats": [
        {
          "id": 0,
          "name": "string",
          "includeCustomFormatWhenRenaming": true,
          "specifications": [
            {
              "id": 0,
              "name": "string",
              "implementation": "string",
              "implementationName": "string",
              "infoLink": "string",
              "negate": true,
              "required": true,
              "fields": [
                {
                  "order": 0,
                  "name": "string",
                  "label": "string",
                  "unit": "string",
                  "helpText": "string",
                  "helpTextWarning": "string",
                  "helpLink": "string",
                  "value": null,
                  "type": "string",
                  "advanced": true,
                  "selectOptions": [
                    {
                      "value": 0,
                      "name": "string",
                      "order": 0,
                      "hint": "string",
                      "dividerAfter": true
                    }
                  ],
                  "selectOptionsProviderAction": "string",
                  "section": "string",
                  "hidden": "string",
                  "privacy": "normal",
                  "placeholder": "string",
                  "isFloat": true
                }
              ],
              "presets": [
                {}
              ]
            }
          ]
        }
      ],
      "customFormatScore": 0,
      "indexerFlags": 0,
      "mediaInfo": {
        "id": 0,
        "audioBitrate": 0,
        "audioChannels": 0,
        "audioCodec": "string",
        "audioLanguages": "string",
        "audioStreamCount": 0,
        "videoBitDepth": 0,
        "videoBitrate": 0,
        "videoCodec": "string",
        "videoFps": 0,
        "videoDynamicRange": "string",
        "videoDynamicRangeType": "string",
        "resolution": "string",
        "runTime": "string",
        "scanType": "string",
        "subtitles": "string"
      },
      "originalFilePath": "string",
      "qualityCutoffNotMet": true
    }
  ]'
```

`PUT /api/v3/moviefile/bulk`

> Body parameter

```json
[
  {
    "id": 0,
    "movieId": 0,
    "relativePath": "string",
    "path": "string",
    "size": 0,
    "dateAdded": "1970-01-01T00:00:00Z",
    "sceneName": "string",
    "releaseGroup": "string",
    "edition": "string",
    "languages": [
      {
        "id": 0,
        "name": "string"
      }
    ],
    "quality": {
      "quality": {
        "id": 0,
        "name": "string",
        "source": "unknown",
        "resolution": 0,
        "modifier": "none"
      },
      "revision": {
        "version": 0,
        "real": 0,
        "isRepack": true
      }
    },
    "customFormats": [
      {
        "id": 0,
        "name": "string",
        "includeCustomFormatWhenRenaming": true,
        "specifications": [
          {
            "id": 0,
            "name": "string",
            "implementation": "string",
            "implementationName": "string",
            "infoLink": "string",
            "negate": true,
            "required": true,
            "fields": [
              {
                "order": 0,
                "name": "string",
                "label": "string",
                "unit": "string",
                "helpText": "string",
                "helpTextWarning": "string",
                "helpLink": "string",
                "value": null,
                "type": "string",
                "advanced": true,
                "selectOptions": [
                  {
                    "value": 0,
                    "name": "string",
                    "order": 0,
                    "hint": "string",
                    "dividerAfter": true
                  }
                ],
                "selectOptionsProviderAction": "string",
                "section": "string",
                "hidden": "string",
                "privacy": "normal",
                "placeholder": "string",
                "isFloat": true
              }
            ],
            "presets": [
              {}
            ]
          }
        ]
      }
    ],
    "customFormatScore": 0,
    "indexerFlags": 0,
    "mediaInfo": {
      "id": 0,
      "audioBitrate": 0,
      "audioChannels": 0,
      "audioCodec": "string",
      "audioLanguages": "string",
      "audioStreamCount": 0,
      "videoBitDepth": 0,
      "videoBitrate": 0,
      "videoCodec": "string",
      "videoFps": 0,
      "videoDynamicRange": "string",
      "videoDynamicRangeType": "string",
      "resolution": "string",
      "runTime": "string",
      "scanType": "string",
      "subtitles": "string"
    },
    "originalFilePath": "string",
    "qualityCutoffNotMet": true
  }
]
```

<h3 id="putapiv3moviefilebulk-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[[MovieFileResource](#schemamoviefileresource)]|false|none|

> Example responses

> 200 Response

```json
[
  {
    "id": 0,
    "movieId": 0,
    "relativePath": "string",
    "path": "string",
    "size": 0,
    "dateAdded": "1970-01-01T00:00:00Z",
    "sceneName": "string",
    "releaseGroup": "string",
    "edition": "string",
    "languages": [
      {
        "id": 0,
        "name": "string"
      }
    ],
    "quality": {
      "quality": {
        "id": 0,
        "name": "string",
        "source": "unknown",
        "resolution": 0,
        "modifier": "none"
      },
      "revision": {
        "version": 0,
        "real": 0,
        "isRepack": true
      }
    },
    "customFormats": [
      {
        "id": 0,
        "name": "string",
        "includeCustomFormatWhenRenaming": true,
        "specifications": [
          {
            "id": 0,
            "name": "string",
            "implementation": "string",
            "implementationName": "string",
            "infoLink": "string",
            "negate": true,
            "required": true,
            "fields": [
              {
                "order": 0,
                "name": "string",
                "label": "string",
                "unit": "string",
                "helpText": "string",
                "helpTextWarning": "string",
                "helpLink": "string",
                "value": null,
                "type": "string",
                "advanced": true,
                "selectOptions": [
                  {
                    "value": 0,
                    "name": "string",
                    "order": 0,
                    "hint": "string",
                    "dividerAfter": true
                  }
                ],
                "selectOptionsProviderAction": "string",
                "section": "string",
                "hidden": "string",
                "privacy": "normal",
                "placeholder": "string",
                "isFloat": true
              }
            ],
            "presets": [
              {}
            ]
          }
        ]
      }
    ],
    "customFormatScore": 0,
    "indexerFlags": 0,
    "mediaInfo": {
      "id": 0,
      "audioBitrate": 0,
      "audioChannels": 0,
      "audioCodec": "string",
      "audioLanguages": "string",
      "audioStreamCount": 0,
      "videoBitDepth": 0,
      "videoBitrate": 0,
      "videoCodec": "string",
      "videoFps": 0,
      "videoDynamicRange": "string",
      "videoDynamicRangeType": "string",
      "resolution": "string",
      "runTime": "string",
      "scanType": "string",
      "subtitles": "string"
    },
    "originalFilePath": "string",
    "qualityCutoffNotMet": true
  }
]
```

<h3 id="putapiv3moviefilebulk-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="putapiv3moviefilebulk-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[MovieFileResource](#schemamoviefileresource)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## delete/api/v3/moviefile/bulk

> Code samples

```bash
curl http://localhost:7878/api/v3/moviefile/bulk \
  -X DELETE \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}" \
  -d '{
    "movieFileIds": [
      0
    ],
    "languages": [
      {
        "id": 0,
        "name": "string"
      }
    ],
    "quality": {
      "quality": {
        "id": 0,
        "name": "string",
        "source": "unknown",
        "resolution": 0,
        "modifier": "none"
      },
      "revision": {
        "version": 0,
        "real": 0,
        "isRepack": true
      }
    },
    "edition": "string",
    "releaseGroup": "string",
    "sceneName": "string",
    "indexerFlags": 0
  }'
```

`DELETE /api/v3/moviefile/bulk`

> Body parameter

```json
{
  "movieFileIds": [
    0
  ],
  "languages": [
    {
      "id": 0,
      "name": "string"
    }
  ],
  "quality": {
    "quality": {
      "id": 0,
      "name": "string",
      "source": "unknown",
      "resolution": 0,
      "modifier": "none"
    },
    "revision": {
      "version": 0,
      "real": 0,
      "isRepack": true
    }
  },
  "edition": "string",
  "releaseGroup": "string",
  "sceneName": "string",
  "indexerFlags": 0
}
```

<h3 id="deleteapiv3moviefilebulk-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[MovieFileListResource](#schemamoviefilelistresource)|false|none|
|» movieFileIds|body|[integer(int32)]|false|none|
|» languages|body|[[Language](#schemalanguage)]|false|none|
|» quality|body|[QualityModel](#schemaqualitymodel)|false|none|
|» edition|body|string \| null|false|none|
|» releaseGroup|body|string \| null|false|none|
|» sceneName|body|string \| null|false|none|
|» indexerFlags|body|integer(int32) \| null|false|none|

> Example responses

> 200 Response

```json
null
```

<h3 id="deleteapiv3moviefilebulk-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

<h1 id="radarr-moviefolder">MovieFolder</h1>

## get/api/v3/movie/{id}/folder

> Code samples

```bash
curl http://localhost:7878/api/v3/movie/0/folder \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /api/v3/movie/{id}/folder`

<h3 id="getapiv3movieidfolder-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|none|

> Example responses

> 200 Response

```json
{
  "folder": "string"
}
```

<h3 id="getapiv3movieidfolder-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[MovieFolderResource](#schemamoviefolderresource)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

<h1 id="radarr-movieimport">MovieImport</h1>

## post/api/v3/movie/import

> Code samples

```bash
curl http://localhost:7878/api/v3/movie/import \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}" \
  -d '[
    {
      "id": 0,
      "title": "string",
      "originalTitle": "string",
      "originalLanguage": {
        "id": 0,
        "name": "string"
      },
      "alternateTitles": [
        {
          "id": 0,
          "sourceType": "tmdb",
          "movieMetadataId": 0,
          "title": "string",
          "cleanTitle": "string"
        }
      ],
      "secondaryYear": 0,
      "secondaryYearSourceId": 0,
      "sortTitle": "string",
      "sizeOnDisk": 0,
      "status": "tba",
      "overview": "string",
      "inCinemas": "1970-01-01T00:00:00Z",
      "physicalRelease": "1970-01-01T00:00:00Z",
      "digitalRelease": "1970-01-01T00:00:00Z",
      "releaseDate": "1970-01-01T00:00:00Z",
      "physicalReleaseNote": "string",
      "images": [
        {
          "coverType": "unknown",
          "url": "string",
          "remoteUrl": "string"
        }
      ],
      "website": "string",
      "remotePoster": "string",
      "year": 0,
      "youTubeTrailerId": "string",
      "studio": "string",
      "path": "string",
      "qualityProfileId": 0,
      "hasFile": true,
      "movieFileId": 0,
      "monitored": true,
      "minimumAvailability": "tba",
      "isAvailable": true,
      "folderName": "string",
      "runtime": 0,
      "cleanTitle": "string",
      "imdbId": "string",
      "tmdbId": 0,
      "titleSlug": "string",
      "rootFolderPath": "string",
      "folder": "string",
      "certification": "string",
      "genres": [
        "string"
      ],
      "keywords": [
        "string"
      ],
      "tags": [
        0
      ],
      "added": "1970-01-01T00:00:00Z",
      "addOptions": {
        "ignoreEpisodesWithFiles": true,
        "ignoreEpisodesWithoutFiles": true,
        "monitor": "movieOnly",
        "searchForMovie": true,
        "addMethod": "manual"
      },
      "ratings": {
        "imdb": {
          "votes": 0,
          "value": 0,
          "type": "user"
        },
        "tmdb": {
          "votes": 0,
          "value": 0,
          "type": "user"
        },
        "metacritic": {
          "votes": 0,
          "value": 0,
          "type": "user"
        },
        "rottenTomatoes": {
          "votes": 0,
          "value": 0,
          "type": "user"
        },
        "trakt": {
          "votes": 0,
          "value": 0,
          "type": "user"
        }
      },
      "movieFile": {
        "id": 0,
        "movieId": 0,
        "relativePath": "string",
        "path": "string",
        "size": 0,
        "dateAdded": "1970-01-01T00:00:00Z",
        "sceneName": "string",
        "releaseGroup": "string",
        "edition": "string",
        "languages": [
          {
            "id": 0,
            "name": "string"
          }
        ],
        "quality": {
          "quality": {
            "id": 0,
            "name": "string",
            "source": "unknown",
            "resolution": 0,
            "modifier": "none"
          },
          "revision": {
            "version": 0,
            "real": 0,
            "isRepack": true
          }
        },
        "customFormats": [
          {
            "id": 0,
            "name": "string",
            "includeCustomFormatWhenRenaming": true,
            "specifications": [
              {
                "id": 0,
                "name": "string",
                "implementation": "string",
                "implementationName": "string",
                "infoLink": "string",
                "negate": true,
                "required": true,
                "fields": [
                  {
                    "order": 0,
                    "name": "string",
                    "label": "string",
                    "unit": "string",
                    "helpText": "string",
                    "helpTextWarning": "string",
                    "helpLink": "string",
                    "value": null,
                    "type": "string",
                    "advanced": true,
                    "selectOptions": [
                      {
                        "value": 0,
                        "name": "string",
                        "order": 0,
                        "hint": "string",
                        "dividerAfter": true
                      }
                    ],
                    "selectOptionsProviderAction": "string",
                    "section": "string",
                    "hidden": "string",
                    "privacy": "normal",
                    "placeholder": "string",
                    "isFloat": true
                  }
                ],
                "presets": [
                  {}
                ]
              }
            ]
          }
        ],
        "customFormatScore": 0,
        "indexerFlags": 0,
        "mediaInfo": {
          "id": 0,
          "audioBitrate": 0,
          "audioChannels": 0,
          "audioCodec": "string",
          "audioLanguages": "string",
          "audioStreamCount": 0,
          "videoBitDepth": 0,
          "videoBitrate": 0,
          "videoCodec": "string",
          "videoFps": 0,
          "videoDynamicRange": "string",
          "videoDynamicRangeType": "string",
          "resolution": "string",
          "runTime": "string",
          "scanType": "string",
          "subtitles": "string"
        },
        "originalFilePath": "string",
        "qualityCutoffNotMet": true
      },
      "collection": {
        "title": "string",
        "tmdbId": 0
      },
      "popularity": 0,
      "lastSearchTime": "1970-01-01T00:00:00Z",
      "statistics": {
        "movieFileCount": 0,
        "sizeOnDisk": 0,
        "releaseGroups": [
          "string"
        ],
        "movieFileQualities": [
          {
            "id": 0,
            "name": "string",
            "source": "unknown",
            "resolution": 0,
            "modifier": "none"
          }
        ]
      }
    }
  ]'
```

`POST /api/v3/movie/import`

> Body parameter

```json
[
  {
    "id": 0,
    "title": "string",
    "originalTitle": "string",
    "originalLanguage": {
      "id": 0,
      "name": "string"
    },
    "alternateTitles": [
      {
        "id": 0,
        "sourceType": "tmdb",
        "movieMetadataId": 0,
        "title": "string",
        "cleanTitle": "string"
      }
    ],
    "secondaryYear": 0,
    "secondaryYearSourceId": 0,
    "sortTitle": "string",
    "sizeOnDisk": 0,
    "status": "tba",
    "overview": "string",
    "inCinemas": "1970-01-01T00:00:00Z",
    "physicalRelease": "1970-01-01T00:00:00Z",
    "digitalRelease": "1970-01-01T00:00:00Z",
    "releaseDate": "1970-01-01T00:00:00Z",
    "physicalReleaseNote": "string",
    "images": [
      {
        "coverType": "unknown",
        "url": "string",
        "remoteUrl": "string"
      }
    ],
    "website": "string",
    "remotePoster": "string",
    "year": 0,
    "youTubeTrailerId": "string",
    "studio": "string",
    "path": "string",
    "qualityProfileId": 0,
    "hasFile": true,
    "movieFileId": 0,
    "monitored": true,
    "minimumAvailability": "tba",
    "isAvailable": true,
    "folderName": "string",
    "runtime": 0,
    "cleanTitle": "string",
    "imdbId": "string",
    "tmdbId": 0,
    "titleSlug": "string",
    "rootFolderPath": "string",
    "folder": "string",
    "certification": "string",
    "genres": [
      "string"
    ],
    "keywords": [
      "string"
    ],
    "tags": [
      0
    ],
    "added": "1970-01-01T00:00:00Z",
    "addOptions": {
      "ignoreEpisodesWithFiles": true,
      "ignoreEpisodesWithoutFiles": true,
      "monitor": "movieOnly",
      "searchForMovie": true,
      "addMethod": "manual"
    },
    "ratings": {
      "imdb": {
        "votes": 0,
        "value": 0,
        "type": "user"
      },
      "tmdb": {
        "votes": 0,
        "value": 0,
        "type": "user"
      },
      "metacritic": {
        "votes": 0,
        "value": 0,
        "type": "user"
      },
      "rottenTomatoes": {
        "votes": 0,
        "value": 0,
        "type": "user"
      },
      "trakt": {
        "votes": 0,
        "value": 0,
        "type": "user"
      }
    },
    "movieFile": {
      "id": 0,
      "movieId": 0,
      "relativePath": "string",
      "path": "string",
      "size": 0,
      "dateAdded": "1970-01-01T00:00:00Z",
      "sceneName": "string",
      "releaseGroup": "string",
      "edition": "string",
      "languages": [
        {
          "id": 0,
          "name": "string"
        }
      ],
      "quality": {
        "quality": {
          "id": 0,
          "name": "string",
          "source": "unknown",
          "resolution": 0,
          "modifier": "none"
        },
        "revision": {
          "version": 0,
          "real": 0,
          "isRepack": true
        }
      },
      "customFormats": [
        {
          "id": 0,
          "name": "string",
          "includeCustomFormatWhenRenaming": true,
          "specifications": [
            {
              "id": 0,
              "name": "string",
              "implementation": "string",
              "implementationName": "string",
              "infoLink": "string",
              "negate": true,
              "required": true,
              "fields": [
                {
                  "order": 0,
                  "name": "string",
                  "label": "string",
                  "unit": "string",
                  "helpText": "string",
                  "helpTextWarning": "string",
                  "helpLink": "string",
                  "value": null,
                  "type": "string",
                  "advanced": true,
                  "selectOptions": [
                    {
                      "value": 0,
                      "name": "string",
                      "order": 0,
                      "hint": "string",
                      "dividerAfter": true
                    }
                  ],
                  "selectOptionsProviderAction": "string",
                  "section": "string",
                  "hidden": "string",
                  "privacy": "normal",
                  "placeholder": "string",
                  "isFloat": true
                }
              ],
              "presets": [
                {}
              ]
            }
          ]
        }
      ],
      "customFormatScore": 0,
      "indexerFlags": 0,
      "mediaInfo": {
        "id": 0,
        "audioBitrate": 0,
        "audioChannels": 0,
        "audioCodec": "string",
        "audioLanguages": "string",
        "audioStreamCount": 0,
        "videoBitDepth": 0,
        "videoBitrate": 0,
        "videoCodec": "string",
        "videoFps": 0,
        "videoDynamicRange": "string",
        "videoDynamicRangeType": "string",
        "resolution": "string",
        "runTime": "string",
        "scanType": "string",
        "subtitles": "string"
      },
      "originalFilePath": "string",
      "qualityCutoffNotMet": true
    },
    "collection": {
      "title": "string",
      "tmdbId": 0
    },
    "popularity": 0,
    "lastSearchTime": "1970-01-01T00:00:00Z",
    "statistics": {
      "movieFileCount": 0,
      "sizeOnDisk": 0,
      "releaseGroups": [
        "string"
      ],
      "movieFileQualities": [
        {
          "id": 0,
          "name": "string",
          "source": "unknown",
          "resolution": 0,
          "modifier": "none"
        }
      ]
    }
  }
]
```

<h3 id="postapiv3movieimport-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[[MovieResource](#schemamovieresource)]|false|none|

> Example responses

> 200 Response

```json
[
  {
    "id": 0,
    "title": "string",
    "originalTitle": "string",
    "originalLanguage": {
      "id": 0,
      "name": "string"
    },
    "alternateTitles": [
      {
        "id": 0,
        "sourceType": "tmdb",
        "movieMetadataId": 0,
        "title": "string",
        "cleanTitle": "string"
      }
    ],
    "secondaryYear": 0,
    "secondaryYearSourceId": 0,
    "sortTitle": "string",
    "sizeOnDisk": 0,
    "status": "tba",
    "overview": "string",
    "inCinemas": "1970-01-01T00:00:00Z",
    "physicalRelease": "1970-01-01T00:00:00Z",
    "digitalRelease": "1970-01-01T00:00:00Z",
    "releaseDate": "1970-01-01T00:00:00Z",
    "physicalReleaseNote": "string",
    "images": [
      {
        "coverType": "unknown",
        "url": "string",
        "remoteUrl": "string"
      }
    ],
    "website": "string",
    "remotePoster": "string",
    "year": 0,
    "youTubeTrailerId": "string",
    "studio": "string",
    "path": "string",
    "qualityProfileId": 0,
    "hasFile": true,
    "movieFileId": 0,
    "monitored": true,
    "minimumAvailability": "tba",
    "isAvailable": true,
    "folderName": "string",
    "runtime": 0,
    "cleanTitle": "string",
    "imdbId": "string",
    "tmdbId": 0,
    "titleSlug": "string",
    "rootFolderPath": "string",
    "folder": "string",
    "certification": "string",
    "genres": [
      "string"
    ],
    "keywords": [
      "string"
    ],
    "tags": [
      0
    ],
    "added": "1970-01-01T00:00:00Z",
    "addOptions": {
      "ignoreEpisodesWithFiles": true,
      "ignoreEpisodesWithoutFiles": true,
      "monitor": "movieOnly",
      "searchForMovie": true,
      "addMethod": "manual"
    },
    "ratings": {
      "imdb": {
        "votes": 0,
        "value": 0,
        "type": "user"
      },
      "tmdb": {
        "votes": 0,
        "value": 0,
        "type": "user"
      },
      "metacritic": {
        "votes": 0,
        "value": 0,
        "type": "user"
      },
      "rottenTomatoes": {
        "votes": 0,
        "value": 0,
        "type": "user"
      },
      "trakt": {
        "votes": 0,
        "value": 0,
        "type": "user"
      }
    },
    "movieFile": {
      "id": 0,
      "movieId": 0,
      "relativePath": "string",
      "path": "string",
      "size": 0,
      "dateAdded": "1970-01-01T00:00:00Z",
      "sceneName": "string",
      "releaseGroup": "string",
      "edition": "string",
      "languages": [
        {
          "id": 0,
          "name": "string"
        }
      ],
      "quality": {
        "quality": {
          "id": 0,
          "name": "string",
          "source": "unknown",
          "resolution": 0,
          "modifier": "none"
        },
        "revision": {
          "version": 0,
          "real": 0,
          "isRepack": true
        }
      },
      "customFormats": [
        {
          "id": 0,
          "name": "string",
          "includeCustomFormatWhenRenaming": true,
          "specifications": [
            {
              "id": 0,
              "name": "string",
              "implementation": "string",
              "implementationName": "string",
              "infoLink": "string",
              "negate": true,
              "required": true,
              "fields": [
                {
                  "order": 0,
                  "name": "string",
                  "label": "string",
                  "unit": "string",
                  "helpText": "string",
                  "helpTextWarning": "string",
                  "helpLink": "string",
                  "value": null,
                  "type": "string",
                  "advanced": true,
                  "selectOptions": [
                    {
                      "value": 0,
                      "name": "string",
                      "order": 0,
                      "hint": "string",
                      "dividerAfter": true
                    }
                  ],
                  "selectOptionsProviderAction": "string",
                  "section": "string",
                  "hidden": "string",
                  "privacy": "normal",
                  "placeholder": "string",
                  "isFloat": true
                }
              ],
              "presets": [
                {}
              ]
            }
          ]
        }
      ],
      "customFormatScore": 0,
      "indexerFlags": 0,
      "mediaInfo": {
        "id": 0,
        "audioBitrate": 0,
        "audioChannels": 0,
        "audioCodec": "string",
        "audioLanguages": "string",
        "audioStreamCount": 0,
        "videoBitDepth": 0,
        "videoBitrate": 0,
        "videoCodec": "string",
        "videoFps": 0,
        "videoDynamicRange": "string",
        "videoDynamicRangeType": "string",
        "resolution": "string",
        "runTime": "string",
        "scanType": "string",
        "subtitles": "string"
      },
      "originalFilePath": "string",
      "qualityCutoffNotMet": true
    },
    "collection": {
      "title": "string",
      "tmdbId": 0
    },
    "popularity": 0,
    "lastSearchTime": "1970-01-01T00:00:00Z",
    "statistics": {
      "movieFileCount": 0,
      "sizeOnDisk": 0,
      "releaseGroups": [
        "string"
      ],
      "movieFileQualities": [
        {
          "id": 0,
          "name": "string",
          "source": "unknown",
          "resolution": 0,
          "modifier": "none"
        }
      ]
    }
  }
]
```

<h3 id="postapiv3movieimport-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="postapiv3movieimport-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[MovieResource](#schemamovieresource)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

<h1 id="radarr-movielookup">MovieLookup</h1>

## get/api/v3/movie/lookup/tmdb

> Code samples

```bash
curl http://localhost:7878/api/v3/movie/lookup/tmdb \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /api/v3/movie/lookup/tmdb`

<h3 id="getapiv3movielookuptmdb-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|tmdbId|query|integer(int32)|false|none|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "title": "string",
  "originalTitle": "string",
  "originalLanguage": {
    "id": 0,
    "name": "string"
  },
  "alternateTitles": [
    {
      "id": 0,
      "sourceType": "tmdb",
      "movieMetadataId": 0,
      "title": "string",
      "cleanTitle": "string"
    }
  ],
  "secondaryYear": 0,
  "secondaryYearSourceId": 0,
  "sortTitle": "string",
  "sizeOnDisk": 0,
  "status": "tba",
  "overview": "string",
  "inCinemas": "1970-01-01T00:00:00Z",
  "physicalRelease": "1970-01-01T00:00:00Z",
  "digitalRelease": "1970-01-01T00:00:00Z",
  "releaseDate": "1970-01-01T00:00:00Z",
  "physicalReleaseNote": "string",
  "images": [
    {
      "coverType": "unknown",
      "url": "string",
      "remoteUrl": "string"
    }
  ],
  "website": "string",
  "remotePoster": "string",
  "year": 0,
  "youTubeTrailerId": "string",
  "studio": "string",
  "path": "string",
  "qualityProfileId": 0,
  "hasFile": true,
  "movieFileId": 0,
  "monitored": true,
  "minimumAvailability": "tba",
  "isAvailable": true,
  "folderName": "string",
  "runtime": 0,
  "cleanTitle": "string",
  "imdbId": "string",
  "tmdbId": 0,
  "titleSlug": "string",
  "rootFolderPath": "string",
  "folder": "string",
  "certification": "string",
  "genres": [
    "string"
  ],
  "keywords": [
    "string"
  ],
  "tags": [
    0
  ],
  "added": "1970-01-01T00:00:00Z",
  "addOptions": {
    "ignoreEpisodesWithFiles": true,
    "ignoreEpisodesWithoutFiles": true,
    "monitor": "movieOnly",
    "searchForMovie": true,
    "addMethod": "manual"
  },
  "ratings": {
    "imdb": {
      "votes": 0,
      "value": 0,
      "type": "user"
    },
    "tmdb": {
      "votes": 0,
      "value": 0,
      "type": "user"
    },
    "metacritic": {
      "votes": 0,
      "value": 0,
      "type": "user"
    },
    "rottenTomatoes": {
      "votes": 0,
      "value": 0,
      "type": "user"
    },
    "trakt": {
      "votes": 0,
      "value": 0,
      "type": "user"
    }
  },
  "movieFile": {
    "id": 0,
    "movieId": 0,
    "relativePath": "string",
    "path": "string",
    "size": 0,
    "dateAdded": "1970-01-01T00:00:00Z",
    "sceneName": "string",
    "releaseGroup": "string",
    "edition": "string",
    "languages": [
      {
        "id": 0,
        "name": "string"
      }
    ],
    "quality": {
      "quality": {
        "id": 0,
        "name": "string",
        "source": "unknown",
        "resolution": 0,
        "modifier": "none"
      },
      "revision": {
        "version": 0,
        "real": 0,
        "isRepack": true
      }
    },
    "customFormats": [
      {
        "id": 0,
        "name": "string",
        "includeCustomFormatWhenRenaming": true,
        "specifications": [
          {
            "id": 0,
            "name": "string",
            "implementation": "string",
            "implementationName": "string",
            "infoLink": "string",
            "negate": true,
            "required": true,
            "fields": [
              {
                "order": 0,
                "name": "string",
                "label": "string",
                "unit": "string",
                "helpText": "string",
                "helpTextWarning": "string",
                "helpLink": "string",
                "value": null,
                "type": "string",
                "advanced": true,
                "selectOptions": [
                  {
                    "value": 0,
                    "name": "string",
                    "order": 0,
                    "hint": "string",
                    "dividerAfter": true
                  }
                ],
                "selectOptionsProviderAction": "string",
                "section": "string",
                "hidden": "string",
                "privacy": "normal",
                "placeholder": "string",
                "isFloat": true
              }
            ],
            "presets": [
              {}
            ]
          }
        ]
      }
    ],
    "customFormatScore": 0,
    "indexerFlags": 0,
    "mediaInfo": {
      "id": 0,
      "audioBitrate": 0,
      "audioChannels": 0,
      "audioCodec": "string",
      "audioLanguages": "string",
      "audioStreamCount": 0,
      "videoBitDepth": 0,
      "videoBitrate": 0,
      "videoCodec": "string",
      "videoFps": 0,
      "videoDynamicRange": "string",
      "videoDynamicRangeType": "string",
      "resolution": "string",
      "runTime": "string",
      "scanType": "string",
      "subtitles": "string"
    },
    "originalFilePath": "string",
    "qualityCutoffNotMet": true
  },
  "collection": {
    "title": "string",
    "tmdbId": 0
  },
  "popularity": 0,
  "lastSearchTime": "1970-01-01T00:00:00Z",
  "statistics": {
    "movieFileCount": 0,
    "sizeOnDisk": 0,
    "releaseGroups": [
      "string"
    ],
    "movieFileQualities": [
      {
        "id": 0,
        "name": "string",
        "source": "unknown",
        "resolution": 0,
        "modifier": "none"
      }
    ]
  }
}
```

<h3 id="getapiv3movielookuptmdb-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[MovieResource](#schemamovieresource)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## get/api/v3/movie/lookup/imdb

> Code samples

```bash
curl http://localhost:7878/api/v3/movie/lookup/imdb \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /api/v3/movie/lookup/imdb`

<h3 id="getapiv3movielookupimdb-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|imdbId|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "title": "string",
  "originalTitle": "string",
  "originalLanguage": {
    "id": 0,
    "name": "string"
  },
  "alternateTitles": [
    {
      "id": 0,
      "sourceType": "tmdb",
      "movieMetadataId": 0,
      "title": "string",
      "cleanTitle": "string"
    }
  ],
  "secondaryYear": 0,
  "secondaryYearSourceId": 0,
  "sortTitle": "string",
  "sizeOnDisk": 0,
  "status": "tba",
  "overview": "string",
  "inCinemas": "1970-01-01T00:00:00Z",
  "physicalRelease": "1970-01-01T00:00:00Z",
  "digitalRelease": "1970-01-01T00:00:00Z",
  "releaseDate": "1970-01-01T00:00:00Z",
  "physicalReleaseNote": "string",
  "images": [
    {
      "coverType": "unknown",
      "url": "string",
      "remoteUrl": "string"
    }
  ],
  "website": "string",
  "remotePoster": "string",
  "year": 0,
  "youTubeTrailerId": "string",
  "studio": "string",
  "path": "string",
  "qualityProfileId": 0,
  "hasFile": true,
  "movieFileId": 0,
  "monitored": true,
  "minimumAvailability": "tba",
  "isAvailable": true,
  "folderName": "string",
  "runtime": 0,
  "cleanTitle": "string",
  "imdbId": "string",
  "tmdbId": 0,
  "titleSlug": "string",
  "rootFolderPath": "string",
  "folder": "string",
  "certification": "string",
  "genres": [
    "string"
  ],
  "keywords": [
    "string"
  ],
  "tags": [
    0
  ],
  "added": "1970-01-01T00:00:00Z",
  "addOptions": {
    "ignoreEpisodesWithFiles": true,
    "ignoreEpisodesWithoutFiles": true,
    "monitor": "movieOnly",
    "searchForMovie": true,
    "addMethod": "manual"
  },
  "ratings": {
    "imdb": {
      "votes": 0,
      "value": 0,
      "type": "user"
    },
    "tmdb": {
      "votes": 0,
      "value": 0,
      "type": "user"
    },
    "metacritic": {
      "votes": 0,
      "value": 0,
      "type": "user"
    },
    "rottenTomatoes": {
      "votes": 0,
      "value": 0,
      "type": "user"
    },
    "trakt": {
      "votes": 0,
      "value": 0,
      "type": "user"
    }
  },
  "movieFile": {
    "id": 0,
    "movieId": 0,
    "relativePath": "string",
    "path": "string",
    "size": 0,
    "dateAdded": "1970-01-01T00:00:00Z",
    "sceneName": "string",
    "releaseGroup": "string",
    "edition": "string",
    "languages": [
      {
        "id": 0,
        "name": "string"
      }
    ],
    "quality": {
      "quality": {
        "id": 0,
        "name": "string",
        "source": "unknown",
        "resolution": 0,
        "modifier": "none"
      },
      "revision": {
        "version": 0,
        "real": 0,
        "isRepack": true
      }
    },
    "customFormats": [
      {
        "id": 0,
        "name": "string",
        "includeCustomFormatWhenRenaming": true,
        "specifications": [
          {
            "id": 0,
            "name": "string",
            "implementation": "string",
            "implementationName": "string",
            "infoLink": "string",
            "negate": true,
            "required": true,
            "fields": [
              {
                "order": 0,
                "name": "string",
                "label": "string",
                "unit": "string",
                "helpText": "string",
                "helpTextWarning": "string",
                "helpLink": "string",
                "value": null,
                "type": "string",
                "advanced": true,
                "selectOptions": [
                  {
                    "value": 0,
                    "name": "string",
                    "order": 0,
                    "hint": "string",
                    "dividerAfter": true
                  }
                ],
                "selectOptionsProviderAction": "string",
                "section": "string",
                "hidden": "string",
                "privacy": "normal",
                "placeholder": "string",
                "isFloat": true
              }
            ],
            "presets": [
              {}
            ]
          }
        ]
      }
    ],
    "customFormatScore": 0,
    "indexerFlags": 0,
    "mediaInfo": {
      "id": 0,
      "audioBitrate": 0,
      "audioChannels": 0,
      "audioCodec": "string",
      "audioLanguages": "string",
      "audioStreamCount": 0,
      "videoBitDepth": 0,
      "videoBitrate": 0,
      "videoCodec": "string",
      "videoFps": 0,
      "videoDynamicRange": "string",
      "videoDynamicRangeType": "string",
      "resolution": "string",
      "runTime": "string",
      "scanType": "string",
      "subtitles": "string"
    },
    "originalFilePath": "string",
    "qualityCutoffNotMet": true
  },
  "collection": {
    "title": "string",
    "tmdbId": 0
  },
  "popularity": 0,
  "lastSearchTime": "1970-01-01T00:00:00Z",
  "statistics": {
    "movieFileCount": 0,
    "sizeOnDisk": 0,
    "releaseGroups": [
      "string"
    ],
    "movieFileQualities": [
      {
        "id": 0,
        "name": "string",
        "source": "unknown",
        "resolution": 0,
        "modifier": "none"
      }
    ]
  }
}
```

<h3 id="getapiv3movielookupimdb-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[MovieResource](#schemamovieresource)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## get/api/v3/movie/lookup

> Code samples

```bash
curl http://localhost:7878/api/v3/movie/lookup \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /api/v3/movie/lookup`

<h3 id="getapiv3movielookup-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|term|query|string|false|none|

> Example responses

> 200 Response

```json
[
  {
    "id": 0,
    "title": "string",
    "originalTitle": "string",
    "originalLanguage": {
      "id": 0,
      "name": "string"
    },
    "alternateTitles": [
      {
        "id": 0,
        "sourceType": "tmdb",
        "movieMetadataId": 0,
        "title": "string",
        "cleanTitle": "string"
      }
    ],
    "secondaryYear": 0,
    "secondaryYearSourceId": 0,
    "sortTitle": "string",
    "sizeOnDisk": 0,
    "status": "tba",
    "overview": "string",
    "inCinemas": "1970-01-01T00:00:00Z",
    "physicalRelease": "1970-01-01T00:00:00Z",
    "digitalRelease": "1970-01-01T00:00:00Z",
    "releaseDate": "1970-01-01T00:00:00Z",
    "physicalReleaseNote": "string",
    "images": [
      {
        "coverType": "unknown",
        "url": "string",
        "remoteUrl": "string"
      }
    ],
    "website": "string",
    "remotePoster": "string",
    "year": 0,
    "youTubeTrailerId": "string",
    "studio": "string",
    "path": "string",
    "qualityProfileId": 0,
    "hasFile": true,
    "movieFileId": 0,
    "monitored": true,
    "minimumAvailability": "tba",
    "isAvailable": true,
    "folderName": "string",
    "runtime": 0,
    "cleanTitle": "string",
    "imdbId": "string",
    "tmdbId": 0,
    "titleSlug": "string",
    "rootFolderPath": "string",
    "folder": "string",
    "certification": "string",
    "genres": [
      "string"
    ],
    "keywords": [
      "string"
    ],
    "tags": [
      0
    ],
    "added": "1970-01-01T00:00:00Z",
    "addOptions": {
      "ignoreEpisodesWithFiles": true,
      "ignoreEpisodesWithoutFiles": true,
      "monitor": "movieOnly",
      "searchForMovie": true,
      "addMethod": "manual"
    },
    "ratings": {
      "imdb": {
        "votes": 0,
        "value": 0,
        "type": "user"
      },
      "tmdb": {
        "votes": 0,
        "value": 0,
        "type": "user"
      },
      "metacritic": {
        "votes": 0,
        "value": 0,
        "type": "user"
      },
      "rottenTomatoes": {
        "votes": 0,
        "value": 0,
        "type": "user"
      },
      "trakt": {
        "votes": 0,
        "value": 0,
        "type": "user"
      }
    },
    "movieFile": {
      "id": 0,
      "movieId": 0,
      "relativePath": "string",
      "path": "string",
      "size": 0,
      "dateAdded": "1970-01-01T00:00:00Z",
      "sceneName": "string",
      "releaseGroup": "string",
      "edition": "string",
      "languages": [
        {
          "id": 0,
          "name": "string"
        }
      ],
      "quality": {
        "quality": {
          "id": 0,
          "name": "string",
          "source": "unknown",
          "resolution": 0,
          "modifier": "none"
        },
        "revision": {
          "version": 0,
          "real": 0,
          "isRepack": true
        }
      },
      "customFormats": [
        {
          "id": 0,
          "name": "string",
          "includeCustomFormatWhenRenaming": true,
          "specifications": [
            {
              "id": 0,
              "name": "string",
              "implementation": "string",
              "implementationName": "string",
              "infoLink": "string",
              "negate": true,
              "required": true,
              "fields": [
                {
                  "order": 0,
                  "name": "string",
                  "label": "string",
                  "unit": "string",
                  "helpText": "string",
                  "helpTextWarning": "string",
                  "helpLink": "string",
                  "value": null,
                  "type": "string",
                  "advanced": true,
                  "selectOptions": [
                    {
                      "value": 0,
                      "name": "string",
                      "order": 0,
                      "hint": "string",
                      "dividerAfter": true
                    }
                  ],
                  "selectOptionsProviderAction": "string",
                  "section": "string",
                  "hidden": "string",
                  "privacy": "normal",
                  "placeholder": "string",
                  "isFloat": true
                }
              ],
              "presets": [
                {}
              ]
            }
          ]
        }
      ],
      "customFormatScore": 0,
      "indexerFlags": 0,
      "mediaInfo": {
        "id": 0,
        "audioBitrate": 0,
        "audioChannels": 0,
        "audioCodec": "string",
        "audioLanguages": "string",
        "audioStreamCount": 0,
        "videoBitDepth": 0,
        "videoBitrate": 0,
        "videoCodec": "string",
        "videoFps": 0,
        "videoDynamicRange": "string",
        "videoDynamicRangeType": "string",
        "resolution": "string",
        "runTime": "string",
        "scanType": "string",
        "subtitles": "string"
      },
      "originalFilePath": "string",
      "qualityCutoffNotMet": true
    },
    "collection": {
      "title": "string",
      "tmdbId": 0
    },
    "popularity": 0,
    "lastSearchTime": "1970-01-01T00:00:00Z",
    "statistics": {
      "movieFileCount": 0,
      "sizeOnDisk": 0,
      "releaseGroups": [
        "string"
      ],
      "movieFileQualities": [
        {
          "id": 0,
          "name": "string",
          "source": "unknown",
          "resolution": 0,
          "modifier": "none"
        }
      ]
    }
  }
]
```

<h3 id="getapiv3movielookup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="getapiv3movielookup-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[MovieResource](#schemamovieresource)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

<h1 id="radarr-namingconfig">NamingConfig</h1>

## get/api/v3/config/naming

> Code samples

```bash
curl http://localhost:7878/api/v3/config/naming \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /api/v3/config/naming`

> Example responses

> 200 Response

```json
{
  "id": 0,
  "renameMovies": true,
  "replaceIllegalCharacters": true,
  "colonReplacementFormat": "delete",
  "standardMovieFormat": "string",
  "movieFolderFormat": "string"
}
```

<h3 id="getapiv3confignaming-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[NamingConfigResource](#schemanamingconfigresource)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## get/api/v3/config/naming/{id}

> Code samples

```bash
curl http://localhost:7878/api/v3/config/naming/0 \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /api/v3/config/naming/{id}`

<h3 id="getapiv3confignamingid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|none|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "renameMovies": true,
  "replaceIllegalCharacters": true,
  "colonReplacementFormat": "delete",
  "standardMovieFormat": "string",
  "movieFolderFormat": "string"
}
```

<h3 id="getapiv3confignamingid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[NamingConfigResource](#schemanamingconfigresource)|
|404|Not Found|Not Found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## put/api/v3/config/naming/{id}

> Code samples

```bash
curl http://localhost:7878/api/v3/config/naming/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}" \
  -d '{
    "id": 0,
    "renameMovies": true,
    "replaceIllegalCharacters": true,
    "colonReplacementFormat": "delete",
    "standardMovieFormat": "string",
    "movieFolderFormat": "string"
  }'
```

`PUT /api/v3/config/naming/{id}`

> Body parameter

```json
{
  "id": 0,
  "renameMovies": true,
  "replaceIllegalCharacters": true,
  "colonReplacementFormat": "delete",
  "standardMovieFormat": "string",
  "movieFolderFormat": "string"
}
```

<h3 id="putapiv3confignamingid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|body|body|[NamingConfigResource](#schemanamingconfigresource)|false|none|
|» id|body|integer(int32)|false|none|
|» renameMovies|body|boolean|false|none|
|» replaceIllegalCharacters|body|boolean|false|none|
|» colonReplacementFormat|body|[ColonReplacementFormat](#schemacolonreplacementformat)|false|none|
|» standardMovieFormat|body|string \| null|false|none|
|» movieFolderFormat|body|string \| null|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» colonReplacementFormat|delete|
|» colonReplacementFormat|dash|
|» colonReplacementFormat|spaceDash|
|» colonReplacementFormat|spaceDashSpace|
|» colonReplacementFormat|smart|

> Example responses

> 202 Response

```json
{
  "id": 0,
  "renameMovies": true,
  "replaceIllegalCharacters": true,
  "colonReplacementFormat": "delete",
  "standardMovieFormat": "string",
  "movieFolderFormat": "string"
}
```

<h3 id="putapiv3confignamingid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|Accepted|[NamingConfigResource](#schemanamingconfigresource)|
|404|Not Found|Not Found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## get/api/v3/config/naming/examples

> Code samples

```bash
curl http://localhost:7878/api/v3/config/naming/examples \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /api/v3/config/naming/examples`

<h3 id="getapiv3confignamingexamples-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|renameMovies|query|boolean|false|none|
|replaceIllegalCharacters|query|boolean|false|none|
|colonReplacementFormat|query|[ColonReplacementFormat](#schemacolonreplacementformat)|false|none|
|standardMovieFormat|query|string|false|none|
|movieFolderFormat|query|string|false|none|
|id|query|integer(int32)|false|none|
|resourceName|query|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|colonReplacementFormat|delete|
|colonReplacementFormat|dash|
|colonReplacementFormat|spaceDash|
|colonReplacementFormat|spaceDashSpace|
|colonReplacementFormat|smart|

> Example responses

> 200 Response

```json
{
  "movieExample": "string",
  "movieFolderExample": "string"
}
```

<h3 id="getapiv3confignamingexamples-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[NamingExampleResource](#schemanamingexampleresource)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

<h1 id="radarr-notification">Notification</h1>

## get/api/v3/notification

> Code samples

```bash
curl http://localhost:7878/api/v3/notification \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /api/v3/notification`

> Example responses

> 200 Response

```json
[
  {
    "id": 0,
    "name": "string",
    "fields": [
      {
        "order": 0,
        "name": "string",
        "label": "string",
        "unit": "string",
        "helpText": "string",
        "helpTextWarning": "string",
        "helpLink": "string",
        "value": null,
        "type": "string",
        "advanced": true,
        "selectOptions": [
          {
            "value": 0,
            "name": "string",
            "order": 0,
            "hint": "string",
            "dividerAfter": true
          }
        ],
        "selectOptionsProviderAction": "string",
        "section": "string",
        "hidden": "string",
        "privacy": "normal",
        "placeholder": "string",
        "isFloat": true
      }
    ],
    "implementationName": "string",
    "implementation": "string",
    "configContract": "string",
    "infoLink": "string",
    "message": {
      "message": "string",
      "type": "info"
    },
    "tags": [
      0
    ],
    "presets": [
      {}
    ],
    "link": "string",
    "onGrab": true,
    "onDownload": true,
    "onUpgrade": true,
    "onRename": true,
    "onMovieAdded": true,
    "onMovieDelete": true,
    "onMovieFileDelete": true,
    "onMovieFileDeleteForUpgrade": true,
    "onHealthIssue": true,
    "includeHealthWarnings": true,
    "onHealthRestored": true,
    "onApplicationUpdate": true,
    "onManualInteractionRequired": true,
    "supportsOnGrab": true,
    "supportsOnDownload": true,
    "supportsOnUpgrade": true,
    "supportsOnRename": true,
    "supportsOnMovieAdded": true,
    "supportsOnMovieDelete": true,
    "supportsOnMovieFileDelete": true,
    "supportsOnMovieFileDeleteForUpgrade": true,
    "supportsOnHealthIssue": true,
    "supportsOnHealthRestored": true,
    "supportsOnApplicationUpdate": true,
    "supportsOnManualInteractionRequired": true,
    "testCommand": "string"
  }
]
```

<h3 id="getapiv3notification-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="getapiv3notification-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[NotificationResource](#schemanotificationresource)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## post/api/v3/notification

> Code samples

```bash
curl http://localhost:7878/api/v3/notification \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}" \
  -d '{
    "id": 0,
    "name": "string",
    "fields": [
      {
        "order": 0,
        "name": "string",
        "label": "string",
        "unit": "string",
        "helpText": "string",
        "helpTextWarning": "string",
        "helpLink": "string",
        "value": null,
        "type": "string",
        "advanced": true,
        "selectOptions": [
          {
            "value": 0,
            "name": "string",
            "order": 0,
            "hint": "string",
            "dividerAfter": true
          }
        ],
        "selectOptionsProviderAction": "string",
        "section": "string",
        "hidden": "string",
        "privacy": "normal",
        "placeholder": "string",
        "isFloat": true
      }
    ],
    "implementationName": "string",
    "implementation": "string",
    "configContract": "string",
    "infoLink": "string",
    "message": {
      "message": "string",
      "type": "info"
    },
    "tags": [
      0
    ],
    "presets": [
      {}
    ],
    "link": "string",
    "onGrab": true,
    "onDownload": true,
    "onUpgrade": true,
    "onRename": true,
    "onMovieAdded": true,
    "onMovieDelete": true,
    "onMovieFileDelete": true,
    "onMovieFileDeleteForUpgrade": true,
    "onHealthIssue": true,
    "includeHealthWarnings": true,
    "onHealthRestored": true,
    "onApplicationUpdate": true,
    "onManualInteractionRequired": true,
    "supportsOnGrab": true,
    "supportsOnDownload": true,
    "supportsOnUpgrade": true,
    "supportsOnRename": true,
    "supportsOnMovieAdded": true,
    "supportsOnMovieDelete": true,
    "supportsOnMovieFileDelete": true,
    "supportsOnMovieFileDeleteForUpgrade": true,
    "supportsOnHealthIssue": true,
    "supportsOnHealthRestored": true,
    "supportsOnApplicationUpdate": true,
    "supportsOnManualInteractionRequired": true,
    "testCommand": "string"
  }'
```

`POST /api/v3/notification`

> Body parameter

```json
{
  "id": 0,
  "name": "string",
  "fields": [
    {
      "order": 0,
      "name": "string",
      "label": "string",
      "unit": "string",
      "helpText": "string",
      "helpTextWarning": "string",
      "helpLink": "string",
      "value": null,
      "type": "string",
      "advanced": true,
      "selectOptions": [
        {
          "value": 0,
          "name": "string",
          "order": 0,
          "hint": "string",
          "dividerAfter": true
        }
      ],
      "selectOptionsProviderAction": "string",
      "section": "string",
      "hidden": "string",
      "privacy": "normal",
      "placeholder": "string",
      "isFloat": true
    }
  ],
  "implementationName": "string",
  "implementation": "string",
  "configContract": "string",
  "infoLink": "string",
  "message": {
    "message": "string",
    "type": "info"
  },
  "tags": [
    0
  ],
  "presets": [
    {}
  ],
  "link": "string",
  "onGrab": true,
  "onDownload": true,
  "onUpgrade": true,
  "onRename": true,
  "onMovieAdded": true,
  "onMovieDelete": true,
  "onMovieFileDelete": true,
  "onMovieFileDeleteForUpgrade": true,
  "onHealthIssue": true,
  "includeHealthWarnings": true,
  "onHealthRestored": true,
  "onApplicationUpdate": true,
  "onManualInteractionRequired": true,
  "supportsOnGrab": true,
  "supportsOnDownload": true,
  "supportsOnUpgrade": true,
  "supportsOnRename": true,
  "supportsOnMovieAdded": true,
  "supportsOnMovieDelete": true,
  "supportsOnMovieFileDelete": true,
  "supportsOnMovieFileDeleteForUpgrade": true,
  "supportsOnHealthIssue": true,
  "supportsOnHealthRestored": true,
  "supportsOnApplicationUpdate": true,
  "supportsOnManualInteractionRequired": true,
  "testCommand": "string"
}
```

<h3 id="postapiv3notification-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|forceSave|query|boolean|false|none|
|body|body|[NotificationResource](#schemanotificationresource)|false|none|
|» id|body|integer(int32)|false|none|
|» name|body|string \| null|false|none|
|» fields|body|[[Field](#schemafield)]|false|none|
|» implementationName|body|string \| null|false|none|
|» implementation|body|string \| null|false|none|
|» configContract|body|string \| null|false|none|
|» infoLink|body|string \| null|false|none|
|» message|body|[ProviderMessage](#schemaprovidermessage)|false|none|
|» tags|body|[integer(int32)]|false|none|
|» presets|body|[[NotificationResource](#schemanotificationresource)]|false|none|
|» link|body|string \| null|false|none|
|» onGrab|body|boolean|false|none|
|» onDownload|body|boolean|false|none|
|» onUpgrade|body|boolean|false|none|
|» onRename|body|boolean|false|none|
|» onMovieAdded|body|boolean|false|none|
|» onMovieDelete|body|boolean|false|none|
|» onMovieFileDelete|body|boolean|false|none|
|» onMovieFileDeleteForUpgrade|body|boolean|false|none|
|» onHealthIssue|body|boolean|false|none|
|» includeHealthWarnings|body|boolean|false|none|
|» onHealthRestored|body|boolean|false|none|
|» onApplicationUpdate|body|boolean|false|none|
|» onManualInteractionRequired|body|boolean|false|none|
|» supportsOnGrab|body|boolean|false|none|
|» supportsOnDownload|body|boolean|false|none|
|» supportsOnUpgrade|body|boolean|false|none|
|» supportsOnRename|body|boolean|false|none|
|» supportsOnMovieAdded|body|boolean|false|none|
|» supportsOnMovieDelete|body|boolean|false|none|
|» supportsOnMovieFileDelete|body|boolean|false|none|
|» supportsOnMovieFileDeleteForUpgrade|body|boolean|false|none|
|» supportsOnHealthIssue|body|boolean|false|none|
|» supportsOnHealthRestored|body|boolean|false|none|
|» supportsOnApplicationUpdate|body|boolean|false|none|
|» supportsOnManualInteractionRequired|body|boolean|false|none|
|» testCommand|body|string \| null|false|none|

> Example responses

> 201 Response

```json
{
  "id": 0,
  "name": "string",
  "fields": [
    {
      "order": 0,
      "name": "string",
      "label": "string",
      "unit": "string",
      "helpText": "string",
      "helpTextWarning": "string",
      "helpLink": "string",
      "value": null,
      "type": "string",
      "advanced": true,
      "selectOptions": [
        {
          "value": 0,
          "name": "string",
          "order": 0,
          "hint": "string",
          "dividerAfter": true
        }
      ],
      "selectOptionsProviderAction": "string",
      "section": "string",
      "hidden": "string",
      "privacy": "normal",
      "placeholder": "string",
      "isFloat": true
    }
  ],
  "implementationName": "string",
  "implementation": "string",
  "configContract": "string",
  "infoLink": "string",
  "message": {
    "message": "string",
    "type": "info"
  },
  "tags": [
    0
  ],
  "presets": [
    {}
  ],
  "link": "string",
  "onGrab": true,
  "onDownload": true,
  "onUpgrade": true,
  "onRename": true,
  "onMovieAdded": true,
  "onMovieDelete": true,
  "onMovieFileDelete": true,
  "onMovieFileDeleteForUpgrade": true,
  "onHealthIssue": true,
  "includeHealthWarnings": true,
  "onHealthRestored": true,
  "onApplicationUpdate": true,
  "onManualInteractionRequired": true,
  "supportsOnGrab": true,
  "supportsOnDownload": true,
  "supportsOnUpgrade": true,
  "supportsOnRename": true,
  "supportsOnMovieAdded": true,
  "supportsOnMovieDelete": true,
  "supportsOnMovieFileDelete": true,
  "supportsOnMovieFileDeleteForUpgrade": true,
  "supportsOnHealthIssue": true,
  "supportsOnHealthRestored": true,
  "supportsOnApplicationUpdate": true,
  "supportsOnManualInteractionRequired": true,
  "testCommand": "string"
}
```

<h3 id="postapiv3notification-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Created|[NotificationResource](#schemanotificationresource)|
|404|Not Found|Not Found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## get/api/v3/notification/{id}

> Code samples

```bash
curl http://localhost:7878/api/v3/notification/0 \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /api/v3/notification/{id}`

<h3 id="getapiv3notificationid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|none|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "name": "string",
  "fields": [
    {
      "order": 0,
      "name": "string",
      "label": "string",
      "unit": "string",
      "helpText": "string",
      "helpTextWarning": "string",
      "helpLink": "string",
      "value": null,
      "type": "string",
      "advanced": true,
      "selectOptions": [
        {
          "value": 0,
          "name": "string",
          "order": 0,
          "hint": "string",
          "dividerAfter": true
        }
      ],
      "selectOptionsProviderAction": "string",
      "section": "string",
      "hidden": "string",
      "privacy": "normal",
      "placeholder": "string",
      "isFloat": true
    }
  ],
  "implementationName": "string",
  "implementation": "string",
  "configContract": "string",
  "infoLink": "string",
  "message": {
    "message": "string",
    "type": "info"
  },
  "tags": [
    0
  ],
  "presets": [
    {}
  ],
  "link": "string",
  "onGrab": true,
  "onDownload": true,
  "onUpgrade": true,
  "onRename": true,
  "onMovieAdded": true,
  "onMovieDelete": true,
  "onMovieFileDelete": true,
  "onMovieFileDeleteForUpgrade": true,
  "onHealthIssue": true,
  "includeHealthWarnings": true,
  "onHealthRestored": true,
  "onApplicationUpdate": true,
  "onManualInteractionRequired": true,
  "supportsOnGrab": true,
  "supportsOnDownload": true,
  "supportsOnUpgrade": true,
  "supportsOnRename": true,
  "supportsOnMovieAdded": true,
  "supportsOnMovieDelete": true,
  "supportsOnMovieFileDelete": true,
  "supportsOnMovieFileDeleteForUpgrade": true,
  "supportsOnHealthIssue": true,
  "supportsOnHealthRestored": true,
  "supportsOnApplicationUpdate": true,
  "supportsOnManualInteractionRequired": true,
  "testCommand": "string"
}
```

<h3 id="getapiv3notificationid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[NotificationResource](#schemanotificationresource)|
|404|Not Found|Not Found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## put/api/v3/notification/{id}

> Code samples

```bash
curl http://localhost:7878/api/v3/notification/0 \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}" \
  -d '{
    "id": 0,
    "name": "string",
    "fields": [
      {
        "order": 0,
        "name": "string",
        "label": "string",
        "unit": "string",
        "helpText": "string",
        "helpTextWarning": "string",
        "helpLink": "string",
        "value": null,
        "type": "string",
        "advanced": true,
        "selectOptions": [
          {
            "value": 0,
            "name": "string",
            "order": 0,
            "hint": "string",
            "dividerAfter": true
          }
        ],
        "selectOptionsProviderAction": "string",
        "section": "string",
        "hidden": "string",
        "privacy": "normal",
        "placeholder": "string",
        "isFloat": true
      }
    ],
    "implementationName": "string",
    "implementation": "string",
    "configContract": "string",
    "infoLink": "string",
    "message": {
      "message": "string",
      "type": "info"
    },
    "tags": [
      0
    ],
    "presets": [
      {}
    ],
    "link": "string",
    "onGrab": true,
    "onDownload": true,
    "onUpgrade": true,
    "onRename": true,
    "onMovieAdded": true,
    "onMovieDelete": true,
    "onMovieFileDelete": true,
    "onMovieFileDeleteForUpgrade": true,
    "onHealthIssue": true,
    "includeHealthWarnings": true,
    "onHealthRestored": true,
    "onApplicationUpdate": true,
    "onManualInteractionRequired": true,
    "supportsOnGrab": true,
    "supportsOnDownload": true,
    "supportsOnUpgrade": true,
    "supportsOnRename": true,
    "supportsOnMovieAdded": true,
    "supportsOnMovieDelete": true,
    "supportsOnMovieFileDelete": true,
    "supportsOnMovieFileDeleteForUpgrade": true,
    "supportsOnHealthIssue": true,
    "supportsOnHealthRestored": true,
    "supportsOnApplicationUpdate": true,
    "supportsOnManualInteractionRequired": true,
    "testCommand": "string"
  }'
```

`PUT /api/v3/notification/{id}`

> Body parameter

```json
{
  "id": 0,
  "name": "string",
  "fields": [
    {
      "order": 0,
      "name": "string",
      "label": "string",
      "unit": "string",
      "helpText": "string",
      "helpTextWarning": "string",
      "helpLink": "string",
      "value": null,
      "type": "string",
      "advanced": true,
      "selectOptions": [
        {
          "value": 0,
          "name": "string",
          "order": 0,
          "hint": "string",
          "dividerAfter": true
        }
      ],
      "selectOptionsProviderAction": "string",
      "section": "string",
      "hidden": "string",
      "privacy": "normal",
      "placeholder": "string",
      "isFloat": true
    }
  ],
  "implementationName": "string",
  "implementation": "string",
  "configContract": "string",
  "infoLink": "string",
  "message": {
    "message": "string",
    "type": "info"
  },
  "tags": [
    0
  ],
  "presets": [
    {}
  ],
  "link": "string",
  "onGrab": true,
  "onDownload": true,
  "onUpgrade": true,
  "onRename": true,
  "onMovieAdded": true,
  "onMovieDelete": true,
  "onMovieFileDelete": true,
  "onMovieFileDeleteForUpgrade": true,
  "onHealthIssue": true,
  "includeHealthWarnings": true,
  "onHealthRestored": true,
  "onApplicationUpdate": true,
  "onManualInteractionRequired": true,
  "supportsOnGrab": true,
  "supportsOnDownload": true,
  "supportsOnUpgrade": true,
  "supportsOnRename": true,
  "supportsOnMovieAdded": true,
  "supportsOnMovieDelete": true,
  "supportsOnMovieFileDelete": true,
  "supportsOnMovieFileDeleteForUpgrade": true,
  "supportsOnHealthIssue": true,
  "supportsOnHealthRestored": true,
  "supportsOnApplicationUpdate": true,
  "supportsOnManualInteractionRequired": true,
  "testCommand": "string"
}
```

<h3 id="putapiv3notificationid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|none|
|forceSave|query|boolean|false|none|
|body|body|[NotificationResource](#schemanotificationresource)|false|none|
|» id|body|integer(int32)|false|none|
|» name|body|string \| null|false|none|
|» fields|body|[[Field](#schemafield)]|false|none|
|» implementationName|body|string \| null|false|none|
|» implementation|body|string \| null|false|none|
|» configContract|body|string \| null|false|none|
|» infoLink|body|string \| null|false|none|
|» message|body|[ProviderMessage](#schemaprovidermessage)|false|none|
|» tags|body|[integer(int32)]|false|none|
|» presets|body|[[NotificationResource](#schemanotificationresource)]|false|none|
|» link|body|string \| null|false|none|
|» onGrab|body|boolean|false|none|
|» onDownload|body|boolean|false|none|
|» onUpgrade|body|boolean|false|none|
|» onRename|body|boolean|false|none|
|» onMovieAdded|body|boolean|false|none|
|» onMovieDelete|body|boolean|false|none|
|» onMovieFileDelete|body|boolean|false|none|
|» onMovieFileDeleteForUpgrade|body|boolean|false|none|
|» onHealthIssue|body|boolean|false|none|
|» includeHealthWarnings|body|boolean|false|none|
|» onHealthRestored|body|boolean|false|none|
|» onApplicationUpdate|body|boolean|false|none|
|» onManualInteractionRequired|body|boolean|false|none|
|» supportsOnGrab|body|boolean|false|none|
|» supportsOnDownload|body|boolean|false|none|
|» supportsOnUpgrade|body|boolean|false|none|
|» supportsOnRename|body|boolean|false|none|
|» supportsOnMovieAdded|body|boolean|false|none|
|» supportsOnMovieDelete|body|boolean|false|none|
|» supportsOnMovieFileDelete|body|boolean|false|none|
|» supportsOnMovieFileDeleteForUpgrade|body|boolean|false|none|
|» supportsOnHealthIssue|body|boolean|false|none|
|» supportsOnHealthRestored|body|boolean|false|none|
|» supportsOnApplicationUpdate|body|boolean|false|none|
|» supportsOnManualInteractionRequired|body|boolean|false|none|
|» testCommand|body|string \| null|false|none|

> Example responses

> 202 Response

```json
{
  "id": 0,
  "name": "string",
  "fields": [
    {
      "order": 0,
      "name": "string",
      "label": "string",
      "unit": "string",
      "helpText": "string",
      "helpTextWarning": "string",
      "helpLink": "string",
      "value": null,
      "type": "string",
      "advanced": true,
      "selectOptions": [
        {
          "value": 0,
          "name": "string",
          "order": 0,
          "hint": "string",
          "dividerAfter": true
        }
      ],
      "selectOptionsProviderAction": "string",
      "section": "string",
      "hidden": "string",
      "privacy": "normal",
      "placeholder": "string",
      "isFloat": true
    }
  ],
  "implementationName": "string",
  "implementation": "string",
  "configContract": "string",
  "infoLink": "string",
  "message": {
    "message": "string",
    "type": "info"
  },
  "tags": [
    0
  ],
  "presets": [
    {}
  ],
  "link": "string",
  "onGrab": true,
  "onDownload": true,
  "onUpgrade": true,
  "onRename": true,
  "onMovieAdded": true,
  "onMovieDelete": true,
  "onMovieFileDelete": true,
  "onMovieFileDeleteForUpgrade": true,
  "onHealthIssue": true,
  "includeHealthWarnings": true,
  "onHealthRestored": true,
  "onApplicationUpdate": true,
  "onManualInteractionRequired": true,
  "supportsOnGrab": true,
  "supportsOnDownload": true,
  "supportsOnUpgrade": true,
  "supportsOnRename": true,
  "supportsOnMovieAdded": true,
  "supportsOnMovieDelete": true,
  "supportsOnMovieFileDelete": true,
  "supportsOnMovieFileDeleteForUpgrade": true,
  "supportsOnHealthIssue": true,
  "supportsOnHealthRestored": true,
  "supportsOnApplicationUpdate": true,
  "supportsOnManualInteractionRequired": true,
  "testCommand": "string"
}
```

<h3 id="putapiv3notificationid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|Accepted|[NotificationResource](#schemanotificationresource)|
|404|Not Found|Not Found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## delete/api/v3/notification/{id}

> Code samples

```bash
curl http://localhost:7878/api/v3/notification/0 \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}"
```

`DELETE /api/v3/notification/{id}`

<h3 id="deleteapiv3notificationid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|none|

> Example responses

> 200 Response

```json
null
```

<h3 id="deleteapiv3notificationid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## get/api/v3/notification/schema

> Code samples

```bash
curl http://localhost:7878/api/v3/notification/schema \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /api/v3/notification/schema`

> Example responses

> 200 Response

```json
[
  {
    "id": 0,
    "name": "string",
    "fields": [
      {
        "order": 0,
        "name": "string",
        "label": "string",
        "unit": "string",
        "helpText": "string",
        "helpTextWarning": "string",
        "helpLink": "string",
        "value": null,
        "type": "string",
        "advanced": true,
        "selectOptions": [
          {
            "value": 0,
            "name": "string",
            "order": 0,
            "hint": "string",
            "dividerAfter": true
          }
        ],
        "selectOptionsProviderAction": "string",
        "section": "string",
        "hidden": "string",
        "privacy": "normal",
        "placeholder": "string",
        "isFloat": true
      }
    ],
    "implementationName": "string",
    "implementation": "string",
    "configContract": "string",
    "infoLink": "string",
    "message": {
      "message": "string",
      "type": "info"
    },
    "tags": [
      0
    ],
    "presets": [
      {}
    ],
    "link": "string",
    "onGrab": true,
    "onDownload": true,
    "onUpgrade": true,
    "onRename": true,
    "onMovieAdded": true,
    "onMovieDelete": true,
    "onMovieFileDelete": true,
    "onMovieFileDeleteForUpgrade": true,
    "onHealthIssue": true,
    "includeHealthWarnings": true,
    "onHealthRestored": true,
    "onApplicationUpdate": true,
    "onManualInteractionRequired": true,
    "supportsOnGrab": true,
    "supportsOnDownload": true,
    "supportsOnUpgrade": true,
    "supportsOnRename": true,
    "supportsOnMovieAdded": true,
    "supportsOnMovieDelete": true,
    "supportsOnMovieFileDelete": true,
    "supportsOnMovieFileDeleteForUpgrade": true,
    "supportsOnHealthIssue": true,
    "supportsOnHealthRestored": true,
    "supportsOnApplicationUpdate": true,
    "supportsOnManualInteractionRequired": true,
    "testCommand": "string"
  }
]
```

<h3 id="getapiv3notificationschema-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="getapiv3notificationschema-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[NotificationResource](#schemanotificationresource)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## post/api/v3/notification/test

> Code samples

```bash
curl http://localhost:7878/api/v3/notification/test \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "X-Api-Key: ${API_KEY}" \
  -d '{
    "id": 0,
    "name": "string",
    "fields": [
      {
        "order": 0,
        "name": "string",
        "label": "string",
        "unit": "string",
        "helpText": "string",
        "helpTextWarning": "string",
        "helpLink": "string",
        "value": null,
        "type": "string",
        "advanced": true,
        "selectOptions": [
          {
            "value": 0,
            "name": "string",
            "order": 0,
            "hint": "string",
            "dividerAfter": true
          }
        ],
        "selectOptionsProviderAction": "string",
        "section": "string",
        "hidden": "string",
        "privacy": "normal",
        "placeholder": "string",
        "isFloat": true
      }
    ],
    "implementationName": "string",
    "implementation": "string",
    "configContract": "string",
    "infoLink": "string",
    "message": {
      "message": "string",
      "type": "info"
    },
    "tags": [
      0
    ],
    "presets": [
      {}
    ],
    "link": "string",
    "onGrab": true,
    "onDownload": true,
    "onUpgrade": true,
    "onRename": true,
    "onMovieAdded": true,
    "onMovieDelete": true,
    "onMovieFileDelete": true,
    "onMovieFileDeleteForUpgrade": true,
    "onHealthIssue": true,
    "includeHealthWarnings": true,
    "onHealthRestored": true,
    "onApplicationUpdate": true,
    "onManualInteractionRequired": true,
    "supportsOnGrab": true,
    "supportsOnDownload": true,
    "supportsOnUpgrade": true,
    "supportsOnRename": true,
    "supportsOnMovieAdded": true,
    "supportsOnMovieDelete": true,
    "supportsOnMovieFileDelete": true,
    "supportsOnMovieFileDeleteForUpgrade": true,
    "supportsOnHealthIssue": true,
    "supportsOnHealthRestored": true,
    "supportsOnApplicationUpdate": true,
    "supportsOnManualInteractionRequired": true,
    "testCommand": "string"
  }'
```

`POST /api/v3/notification/test`

> Body parameter

```json
{
  "id": 0,
  "name": "string",
  "fields": [
    {
      "order": 0,
      "name": "string",
      "label": "string",
      "unit": "string",
      "helpText": "string",
      "helpTextWarning": "string",
      "helpLink": "string",
      "value": null,
      "type": "string",
      "advanced": true,
      "selectOptions": [
        {
          "value": 0,
          "name": "string",
          "order": 0,
          "hint": "string",
          "dividerAfter": true
        }
      ],
      "selectOptionsProviderAction": "string",
      "section": "string",
      "hidden": "string",
      "privacy": "normal",
      "placeholder": "string",
      "isFloat": true
    }
  ],
  "implementationName": "string",
  "implementation": "string",
  "configContract": "string",
  "infoLink": "string",
  "message": {
    "message": "string",
    "type": "info"
  },
  "tags": [
    0
  ],
  "presets": [
    {}
  ],
  "link": "string",
  "onGrab": true,
  "onDownload": true,
  "onUpgrade": true,
  "onRename": true,
  "onMovieAdded": true,
  "onMovieDelete": true,
  "onMovieFileDelete": true,
  "onMovieFileDeleteForUpgrade": true,
  "onHealthIssue": true,
  "includeHealthWarnings": true,
  "onHealthRestored": true,
  "onApplicationUpdate": true,
  "onManualInteractionRequired": true,
  "supportsOnGrab": true,
  "supportsOnDownload": true,
  "supportsOnUpgrade": true,
  "supportsOnRename": true,
  "supportsOnMovieAdded": true,
  "supportsOnMovieDelete": true,
  "supportsOnMovieFileDelete": true,
  "supportsOnMovieFileDeleteForUpgrade": true,
  "supportsOnHealthIssue": true,
  "supportsOnHealthRestored": true,
  "supportsOnApplicationUpdate": true,
  "supportsOnManualInteractionRequired": true,
  "testCommand": "string"
}
```

<h3 id="postapiv3notificationtest-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|forceTest|query|boolean|false|none|
|body|body|[NotificationResource](#schemanotificationresource)|false|none|
|» id|body|integer(int32)|false|none|
|» name|body|string \| null|false|none|
|» fields|body|[[Field](#schemafield)]|false|none|
|» implementationName|body|string \| null|false|none|
|» implementation|body|string \| null|false|none|
|» configContract|body|string \| null|false|none|
|» infoLink|body|string \| null|false|none|
|» message|body|[ProviderMessage](#schemaprovidermessage)|false|none|
|» tags|body|[integer(int32)]|false|none|
|» presets|body|[[NotificationResource](#schemanotificationresource)]|false|none|
|» link|body|string \| null|false|none|
|» onGrab|body|boolean|false|none|
|» onDownload|body|boolean|false|none|
|» onUpgrade|body|boolean|false|none|
|» onRename|body|boolean|false|none|
|» onMovieAdded|body|boolean|false|none|
|» onMovieDelete|body|boolean|false|none|
|» onMovieFileDelete|body|boolean|false|none|
|» onMovieFileDeleteForUpgrade|body|boolean|false|none|
|» onHealthIssue|body|boolean|false|none|
|» includeHealthWarnings|body|boolean|false|none|
|» onHealthRestored|body|boolean|false|none|
|» onApplicationUpdate|body|boolean|false|none|
|» onManualInteractionRequired|body|boolean|false|none|
|» supportsOnGrab|body|boolean|false|none|
|» supportsOnDownload|body|boolean|false|none|
|» supportsOnUpgrade|body|boolean|false|none|
|» supportsOnRename|body|boolean|false|none|
|» supportsOnMovieAdded|body|boolean|false|none|
|» supportsOnMovieDelete|body|boolean|false|none|
|» supportsOnMovieFileDelete|body|boolean|false|none|
|» supportsOnMovieFileDeleteForUpgrade|body|boolean|false|none|
|» supportsOnHealthIssue|body|boolean|false|none|
|» supportsOnHealthRestored|body|boolean|false|none|
|» supportsOnApplicationUpdate|body|boolean|false|none|
|» supportsOnManualInteractionRequired|body|boolean|false|none|
|» testCommand|body|string \| null|false|none|

<h3 id="postapiv3notificationtest-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## post/api/v3/notification/testall

> Code samples

```bash
curl http://localhost:7878/api/v3/notification/testall \
  -X POST \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}"
```

`POST /api/v3/notification/testall`

> Example responses

> 200 Response

```json
[
  {
    "id": 0,
    "isValid": true,
    "validationFailures": [
      {
        "propertyName": "string",
        "errorMessage": "string",
        "attemptedValue": null,
        "customState": null,
        "severity": "error",
        "errorCode": "string",
        "formattedMessageArguments": [
          null
        ],
        "formattedMessagePlaceholderValues": {
          "property1": null,
          "property2": null
        }
      }
    ]
  }
]
```

> 400 Response

```json
[
  {
    "id": 0,
    "isValid": true,
    "validationFailures": [
      {
        "propertyName": "string",
        "errorMessage": "string",
        "attemptedValue": null,
        "customState": null,
        "severity": "error",
        "errorCode": "string",
        "formattedMessageArguments": [
          null
        ],
        "formattedMessagePlaceholderValues": {
          "property1": null,
          "property2": null
        }
      }
    ]
  }
]
```

<h3 id="postapiv3notificationtestall-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|Inline|

<h3 id="postapiv3notificationtestall-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[ProviderTestAllResult](#schemaprovidertestallresult)]|false|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[ProviderTestAllResult](#schemaprovidertestallresult)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## post/api/v3/notification/action/{name}

> Code samples

```bash
curl http://localhost:7878/api/v3/notification/action/string \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "X-Api-Key: ${API_KEY}" \
  -d '{
    "id": 0,
    "name": "string",
    "fields": [
      {
        "order": 0,
        "name": "string",
        "label": "string",
        "unit": "string",
        "helpText": "string",
        "helpTextWarning": "string",
        "helpLink": "string",
        "value": null,
        "type": "string",
        "advanced": true,
        "selectOptions": [
          {
            "value": 0,
            "name": "string",
            "order": 0,
            "hint": "string",
            "dividerAfter": true
          }
        ],
        "selectOptionsProviderAction": "string",
        "section": "string",
        "hidden": "string",
        "privacy": "normal",
        "placeholder": "string",
        "isFloat": true
      }
    ],
    "implementationName": "string",
    "implementation": "string",
    "configContract": "string",
    "infoLink": "string",
    "message": {
      "message": "string",
      "type": "info"
    },
    "tags": [
      0
    ],
    "presets": [
      {}
    ],
    "link": "string",
    "onGrab": true,
    "onDownload": true,
    "onUpgrade": true,
    "onRename": true,
    "onMovieAdded": true,
    "onMovieDelete": true,
    "onMovieFileDelete": true,
    "onMovieFileDeleteForUpgrade": true,
    "onHealthIssue": true,
    "includeHealthWarnings": true,
    "onHealthRestored": true,
    "onApplicationUpdate": true,
    "onManualInteractionRequired": true,
    "supportsOnGrab": true,
    "supportsOnDownload": true,
    "supportsOnUpgrade": true,
    "supportsOnRename": true,
    "supportsOnMovieAdded": true,
    "supportsOnMovieDelete": true,
    "supportsOnMovieFileDelete": true,
    "supportsOnMovieFileDeleteForUpgrade": true,
    "supportsOnHealthIssue": true,
    "supportsOnHealthRestored": true,
    "supportsOnApplicationUpdate": true,
    "supportsOnManualInteractionRequired": true,
    "testCommand": "string"
  }'
```

`POST /api/v3/notification/action/{name}`

> Body parameter

```json
{
  "id": 0,
  "name": "string",
  "fields": [
    {
      "order": 0,
      "name": "string",
      "label": "string",
      "unit": "string",
      "helpText": "string",
      "helpTextWarning": "string",
      "helpLink": "string",
      "value": null,
      "type": "string",
      "advanced": true,
      "selectOptions": [
        {
          "value": 0,
          "name": "string",
          "order": 0,
          "hint": "string",
          "dividerAfter": true
        }
      ],
      "selectOptionsProviderAction": "string",
      "section": "string",
      "hidden": "string",
      "privacy": "normal",
      "placeholder": "string",
      "isFloat": true
    }
  ],
  "implementationName": "string",
  "implementation": "string",
  "configContract": "string",
  "infoLink": "string",
  "message": {
    "message": "string",
    "type": "info"
  },
  "tags": [
    0
  ],
  "presets": [
    {}
  ],
  "link": "string",
  "onGrab": true,
  "onDownload": true,
  "onUpgrade": true,
  "onRename": true,
  "onMovieAdded": true,
  "onMovieDelete": true,
  "onMovieFileDelete": true,
  "onMovieFileDeleteForUpgrade": true,
  "onHealthIssue": true,
  "includeHealthWarnings": true,
  "onHealthRestored": true,
  "onApplicationUpdate": true,
  "onManualInteractionRequired": true,
  "supportsOnGrab": true,
  "supportsOnDownload": true,
  "supportsOnUpgrade": true,
  "supportsOnRename": true,
  "supportsOnMovieAdded": true,
  "supportsOnMovieDelete": true,
  "supportsOnMovieFileDelete": true,
  "supportsOnMovieFileDeleteForUpgrade": true,
  "supportsOnHealthIssue": true,
  "supportsOnHealthRestored": true,
  "supportsOnApplicationUpdate": true,
  "supportsOnManualInteractionRequired": true,
  "testCommand": "string"
}
```

<h3 id="postapiv3notificationactionname-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|none|
|body|body|[NotificationResource](#schemanotificationresource)|false|none|
|» id|body|integer(int32)|false|none|
|» name|body|string \| null|false|none|
|» fields|body|[[Field](#schemafield)]|false|none|
|» implementationName|body|string \| null|false|none|
|» implementation|body|string \| null|false|none|
|» configContract|body|string \| null|false|none|
|» infoLink|body|string \| null|false|none|
|» message|body|[ProviderMessage](#schemaprovidermessage)|false|none|
|» tags|body|[integer(int32)]|false|none|
|» presets|body|[[NotificationResource](#schemanotificationresource)]|false|none|
|» link|body|string \| null|false|none|
|» onGrab|body|boolean|false|none|
|» onDownload|body|boolean|false|none|
|» onUpgrade|body|boolean|false|none|
|» onRename|body|boolean|false|none|
|» onMovieAdded|body|boolean|false|none|
|» onMovieDelete|body|boolean|false|none|
|» onMovieFileDelete|body|boolean|false|none|
|» onMovieFileDeleteForUpgrade|body|boolean|false|none|
|» onHealthIssue|body|boolean|false|none|
|» includeHealthWarnings|body|boolean|false|none|
|» onHealthRestored|body|boolean|false|none|
|» onApplicationUpdate|body|boolean|false|none|
|» onManualInteractionRequired|body|boolean|false|none|
|» supportsOnGrab|body|boolean|false|none|
|» supportsOnDownload|body|boolean|false|none|
|» supportsOnUpgrade|body|boolean|false|none|
|» supportsOnRename|body|boolean|false|none|
|» supportsOnMovieAdded|body|boolean|false|none|
|» supportsOnMovieDelete|body|boolean|false|none|
|» supportsOnMovieFileDelete|body|boolean|false|none|
|» supportsOnMovieFileDeleteForUpgrade|body|boolean|false|none|
|» supportsOnHealthIssue|body|boolean|false|none|
|» supportsOnHealthRestored|body|boolean|false|none|
|» supportsOnApplicationUpdate|body|boolean|false|none|
|» supportsOnManualInteractionRequired|body|boolean|false|none|
|» testCommand|body|string \| null|false|none|

<h3 id="postapiv3notificationactionname-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|400|Bad Request|Bad Request|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

<h1 id="radarr-parse">Parse</h1>

## get/api/v3/parse

> Code samples

```bash
curl http://localhost:7878/api/v3/parse \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /api/v3/parse`

<h3 id="getapiv3parse-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|title|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "title": "string",
  "parsedMovieInfo": {
    "movieTitles": [
      "string"
    ],
    "originalTitle": "string",
    "releaseTitle": "string",
    "simpleReleaseTitle": "string",
    "quality": {
      "quality": {
        "id": 0,
        "name": "string",
        "source": "unknown",
        "resolution": 0,
        "modifier": "none"
      },
      "revision": {
        "version": 0,
        "real": 0,
        "isRepack": true
      }
    },
    "languages": [
      {
        "id": 0,
        "name": "string"
      }
    ],
    "releaseGroup": "string",
    "releaseHash": "string",
    "edition": "string",
    "year": 0,
    "imdbId": "string",
    "tmdbId": 0,
    "hardcodedSubs": "string",
    "movieTitle": "string",
    "primaryMovieTitle": "string"
  },
  "movie": {
    "id": 0,
    "title": "string",
    "originalTitle": "string",
    "originalLanguage": {
      "id": 0,
      "name": "string"
    },
    "alternateTitles": [
      {
        "id": 0,
        "sourceType": "tmdb",
        "movieMetadataId": 0,
        "title": "string",
        "cleanTitle": "string"
      }
    ],
    "secondaryYear": 0,
    "secondaryYearSourceId": 0,
    "sortTitle": "string",
    "sizeOnDisk": 0,
    "status": "tba",
    "overview": "string",
    "inCinemas": "1970-01-01T00:00:00Z",
    "physicalRelease": "1970-01-01T00:00:00Z",
    "digitalRelease": "1970-01-01T00:00:00Z",
    "releaseDate": "1970-01-01T00:00:00Z",
    "physicalReleaseNote": "string",
    "images": [
      {
        "coverType": "unknown",
        "url": "string",
        "remoteUrl": "string"
      }
    ],
    "website": "string",
    "remotePoster": "string",
    "year": 0,
    "youTubeTrailerId": "string",
    "studio": "string",
    "path": "string",
    "qualityProfileId": 0,
    "hasFile": true,
    "movieFileId": 0,
    "monitored": true,
    "minimumAvailability": "tba",
    "isAvailable": true,
    "folderName": "string",
    "runtime": 0,
    "cleanTitle": "string",
    "imdbId": "string",
    "tmdbId": 0,
    "titleSlug": "string",
    "rootFolderPath": "string",
    "folder": "string",
    "certification": "string",
    "genres": [
      "string"
    ],
    "keywords": [
      "string"
    ],
    "tags": [
      0
    ],
    "added": "1970-01-01T00:00:00Z",
    "addOptions": {
      "ignoreEpisodesWithFiles": true,
      "ignoreEpisodesWithoutFiles": true,
      "monitor": "movieOnly",
      "searchForMovie": true,
      "addMethod": "manual"
    },
    "ratings": {
      "imdb": {
        "votes": 0,
        "value": 0,
        "type": "user"
      },
      "tmdb": {
        "votes": 0,
        "value": 0,
        "type": "user"
      },
      "metacritic": {
        "votes": 0,
        "value": 0,
        "type": "user"
      },
      "rottenTomatoes": {
        "votes": 0,
        "value": 0,
        "type": "user"
      },
      "trakt": {
        "votes": 0,
        "value": 0,
        "type": "user"
      }
    },
    "movieFile": {
      "id": 0,
      "movieId": 0,
      "relativePath": "string",
      "path": "string",
      "size": 0,
      "dateAdded": "1970-01-01T00:00:00Z",
      "sceneName": "string",
      "releaseGroup": "string",
      "edition": "string",
      "languages": [
        {
          "id": 0,
          "name": "string"
        }
      ],
      "quality": {
        "quality": {
          "id": 0,
          "name": "string",
          "source": "unknown",
          "resolution": 0,
          "modifier": "none"
        },
        "revision": {
          "version": 0,
          "real": 0,
          "isRepack": true
        }
      },
      "customFormats": [
        {
          "id": 0,
          "name": "string",
          "includeCustomFormatWhenRenaming": true,
          "specifications": [
            {
              "id": 0,
              "name": "string",
              "implementation": "string",
              "implementationName": "string",
              "infoLink": "string",
              "negate": true,
              "required": true,
              "fields": [
                {
                  "order": 0,
                  "name": "string",
                  "label": "string",
                  "unit": "string",
                  "helpText": "string",
                  "helpTextWarning": "string",
                  "helpLink": "string",
                  "value": null,
                  "type": "string",
                  "advanced": true,
                  "selectOptions": [
                    {
                      "value": 0,
                      "name": "string",
                      "order": 0,
                      "hint": "string",
                      "dividerAfter": true
                    }
                  ],
                  "selectOptionsProviderAction": "string",
                  "section": "string",
                  "hidden": "string",
                  "privacy": "normal",
                  "placeholder": "string",
                  "isFloat": true
                }
              ],
              "presets": [
                {}
              ]
            }
          ]
        }
      ],
      "customFormatScore": 0,
      "indexerFlags": 0,
      "mediaInfo": {
        "id": 0,
        "audioBitrate": 0,
        "audioChannels": 0,
        "audioCodec": "string",
        "audioLanguages": "string",
        "audioStreamCount": 0,
        "videoBitDepth": 0,
        "videoBitrate": 0,
        "videoCodec": "string",
        "videoFps": 0,
        "videoDynamicRange": "string",
        "videoDynamicRangeType": "string",
        "resolution": "string",
        "runTime": "string",
        "scanType": "string",
        "subtitles": "string"
      },
      "originalFilePath": "string",
      "qualityCutoffNotMet": true
    },
    "collection": {
      "title": "string",
      "tmdbId": 0
    },
    "popularity": 0,
    "lastSearchTime": "1970-01-01T00:00:00Z",
    "statistics": {
      "movieFileCount": 0,
      "sizeOnDisk": 0,
      "releaseGroups": [
        "string"
      ],
      "movieFileQualities": [
        {
          "id": 0,
          "name": "string",
          "source": "unknown",
          "resolution": 0,
          "modifier": "none"
        }
      ]
    }
  },
  "languages": [
    {
      "id": 0,
      "name": "string"
    }
  ],
  "customFormats": [
    {
      "id": 0,
      "name": "string",
      "includeCustomFormatWhenRenaming": true,
      "specifications": [
        {
          "id": 0,
          "name": "string",
          "implementation": "string",
          "implementationName": "string",
          "infoLink": "string",
          "negate": true,
          "required": true,
          "fields": [
            {
              "order": 0,
              "name": "string",
              "label": "string",
              "unit": "string",
              "helpText": "string",
              "helpTextWarning": "string",
              "helpLink": "string",
              "value": null,
              "type": "string",
              "advanced": true,
              "selectOptions": [
                {
                  "value": 0,
                  "name": "string",
                  "order": 0,
                  "hint": "string",
                  "dividerAfter": true
                }
              ],
              "selectOptionsProviderAction": "string",
              "section": "string",
              "hidden": "string",
              "privacy": "normal",
              "placeholder": "string",
              "isFloat": true
            }
          ],
          "presets": [
            {}
          ]
        }
      ]
    }
  ],
  "customFormatScore": 0
}
```

<h3 id="getapiv3parse-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[ParseResource](#schemaparseresource)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

<h1 id="radarr-ping">Ping</h1>

## get/ping

> Code samples

```bash
curl http://localhost:7878/ping \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /ping`

> Example responses

> 200 Response

```json
{
  "status": "string"
}
```

> 500 Response

```json
{
  "status": "string"
}
```

<h3 id="getping-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[PingResource](#schemapingresource)|
|500|Internal Server Error|Internal Server Error|[PingResource](#schemapingresource)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## head/ping

> Code samples

```bash
curl http://localhost:7878/ping \
  -X HEAD \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}"
```

`HEAD /ping`

> Example responses

> 200 Response

```json
{
  "status": "string"
}
```

> 500 Response

```json
{
  "status": "string"
}
```

<h3 id="headping-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[PingResource](#schemapingresource)|
|500|Internal Server Error|Internal Server Error|[PingResource](#schemapingresource)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

<h1 id="radarr-qualitydefinition">QualityDefinition</h1>

## get/api/v3/qualitydefinition/{id}

> Code samples

```bash
curl http://localhost:7878/api/v3/qualitydefinition/0 \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /api/v3/qualitydefinition/{id}`

<h3 id="getapiv3qualitydefinitionid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|none|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "quality": {
    "id": 0,
    "name": "string",
    "source": "unknown",
    "resolution": 0,
    "modifier": "none"
  },
  "title": "string",
  "weight": 0,
  "minSize": 0,
  "maxSize": 0,
  "preferredSize": 0
}
```

<h3 id="getapiv3qualitydefinitionid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[QualityDefinitionResource](#schemaqualitydefinitionresource)|
|404|Not Found|Not Found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## put/api/v3/qualitydefinition/{id}

> Code samples

```bash
curl http://localhost:7878/api/v3/qualitydefinition/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}" \
  -d '{
    "id": 0,
    "quality": {
      "id": 0,
      "name": "string",
      "source": "unknown",
      "resolution": 0,
      "modifier": "none"
    },
    "title": "string",
    "weight": 0,
    "minSize": 0,
    "maxSize": 0,
    "preferredSize": 0
  }'
```

`PUT /api/v3/qualitydefinition/{id}`

> Body parameter

```json
{
  "id": 0,
  "quality": {
    "id": 0,
    "name": "string",
    "source": "unknown",
    "resolution": 0,
    "modifier": "none"
  },
  "title": "string",
  "weight": 0,
  "minSize": 0,
  "maxSize": 0,
  "preferredSize": 0
}
```

<h3 id="putapiv3qualitydefinitionid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|body|body|[QualityDefinitionResource](#schemaqualitydefinitionresource)|false|none|
|» id|body|integer(int32)|false|none|
|» quality|body|[Quality](#schemaquality)|false|none|
|» title|body|string \| null|false|none|
|» weight|body|integer(int32)|false|none|
|» minSize|body|number(double) \| null|false|none|
|» maxSize|body|number(double) \| null|false|none|
|» preferredSize|body|number(double) \| null|false|none|

> Example responses

> 202 Response

```json
{
  "id": 0,
  "quality": {
    "id": 0,
    "name": "string",
    "source": "unknown",
    "resolution": 0,
    "modifier": "none"
  },
  "title": "string",
  "weight": 0,
  "minSize": 0,
  "maxSize": 0,
  "preferredSize": 0
}
```

<h3 id="putapiv3qualitydefinitionid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|Accepted|[QualityDefinitionResource](#schemaqualitydefinitionresource)|
|404|Not Found|Not Found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## get/api/v3/qualitydefinition

> Code samples

```bash
curl http://localhost:7878/api/v3/qualitydefinition \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /api/v3/qualitydefinition`

> Example responses

> 200 Response

```json
[
  {
    "id": 0,
    "quality": {
      "id": 0,
      "name": "string",
      "source": "unknown",
      "resolution": 0,
      "modifier": "none"
    },
    "title": "string",
    "weight": 0,
    "minSize": 0,
    "maxSize": 0,
    "preferredSize": 0
  }
]
```

<h3 id="getapiv3qualitydefinition-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="getapiv3qualitydefinition-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[QualityDefinitionResource](#schemaqualitydefinitionresource)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## put/api/v3/qualitydefinition/update

> Code samples

```bash
curl http://localhost:7878/api/v3/qualitydefinition/update \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}" \
  -d '[
    {
      "id": 0,
      "quality": {
        "id": 0,
        "name": "string",
        "source": "unknown",
        "resolution": 0,
        "modifier": "none"
      },
      "title": "string",
      "weight": 0,
      "minSize": 0,
      "maxSize": 0,
      "preferredSize": 0
    }
  ]'
```

`PUT /api/v3/qualitydefinition/update`

> Body parameter

```json
[
  {
    "id": 0,
    "quality": {
      "id": 0,
      "name": "string",
      "source": "unknown",
      "resolution": 0,
      "modifier": "none"
    },
    "title": "string",
    "weight": 0,
    "minSize": 0,
    "maxSize": 0,
    "preferredSize": 0
  }
]
```

<h3 id="putapiv3qualitydefinitionupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[[QualityDefinitionResource](#schemaqualitydefinitionresource)]|false|none|

> Example responses

> 200 Response

```json
[
  {
    "id": 0,
    "quality": {
      "id": 0,
      "name": "string",
      "source": "unknown",
      "resolution": 0,
      "modifier": "none"
    },
    "title": "string",
    "weight": 0,
    "minSize": 0,
    "maxSize": 0,
    "preferredSize": 0
  }
]
```

<h3 id="putapiv3qualitydefinitionupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="putapiv3qualitydefinitionupdate-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[QualityDefinitionResource](#schemaqualitydefinitionresource)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## get/api/v3/qualitydefinition/limits

> Code samples

```bash
curl http://localhost:7878/api/v3/qualitydefinition/limits \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /api/v3/qualitydefinition/limits`

> Example responses

> 200 Response

```json
{
  "min": 0,
  "max": 0
}
```

<h3 id="getapiv3qualitydefinitionlimits-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[QualityDefinitionLimitsResource](#schemaqualitydefinitionlimitsresource)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

<h1 id="radarr-qualityprofile">QualityProfile</h1>

## get/api/v3/qualityprofile

> Code samples

```bash
curl http://localhost:7878/api/v3/qualityprofile \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /api/v3/qualityprofile`

> Example responses

> 200 Response

```json
[
  {
    "id": 0,
    "name": "string",
    "upgradeAllowed": true,
    "cutoff": 0,
    "items": [
      {
        "id": 0,
        "name": "string",
        "quality": {
          "id": 0,
          "name": "string",
          "source": "unknown",
          "resolution": 0,
          "modifier": "none"
        },
        "items": [
          {}
        ],
        "allowed": true
      }
    ],
    "minFormatScore": 0,
    "cutoffFormatScore": 0,
    "minUpgradeFormatScore": 0,
    "formatItems": [
      {
        "id": 0,
        "format": 0,
        "name": "string",
        "score": 0
      }
    ],
    "language": {
      "id": 0,
      "name": "string"
    }
  }
]
```

<h3 id="getapiv3qualityprofile-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="getapiv3qualityprofile-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[QualityProfileResource](#schemaqualityprofileresource)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## post/api/v3/qualityprofile

> Code samples

```bash
curl http://localhost:7878/api/v3/qualityprofile \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}" \
  -d '{
    "id": 0,
    "name": "string",
    "upgradeAllowed": true,
    "cutoff": 0,
    "items": [
      {
        "id": 0,
        "name": "string",
        "quality": {
          "id": 0,
          "name": "string",
          "source": "unknown",
          "resolution": 0,
          "modifier": "none"
        },
        "items": [
          {}
        ],
        "allowed": true
      }
    ],
    "minFormatScore": 0,
    "cutoffFormatScore": 0,
    "minUpgradeFormatScore": 0,
    "formatItems": [
      {
        "id": 0,
        "format": 0,
        "name": "string",
        "score": 0
      }
    ],
    "language": {
      "id": 0,
      "name": "string"
    }
  }'
```

`POST /api/v3/qualityprofile`

> Body parameter

```json
{
  "id": 0,
  "name": "string",
  "upgradeAllowed": true,
  "cutoff": 0,
  "items": [
    {
      "id": 0,
      "name": "string",
      "quality": {
        "id": 0,
        "name": "string",
        "source": "unknown",
        "resolution": 0,
        "modifier": "none"
      },
      "items": [
        {}
      ],
      "allowed": true
    }
  ],
  "minFormatScore": 0,
  "cutoffFormatScore": 0,
  "minUpgradeFormatScore": 0,
  "formatItems": [
    {
      "id": 0,
      "format": 0,
      "name": "string",
      "score": 0
    }
  ],
  "language": {
    "id": 0,
    "name": "string"
  }
}
```

<h3 id="postapiv3qualityprofile-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[QualityProfileResource](#schemaqualityprofileresource)|false|none|
|» id|body|integer(int32)|false|none|
|» name|body|string \| null|false|none|
|» upgradeAllowed|body|boolean|false|none|
|» cutoff|body|integer(int32)|false|none|
|» items|body|[[QualityProfileQualityItemResource](#schemaqualityprofilequalityitemresource)]|false|none|
|» minFormatScore|body|integer(int32)|false|none|
|» cutoffFormatScore|body|integer(int32)|false|none|
|» minUpgradeFormatScore|body|integer(int32)|false|none|
|» formatItems|body|[[ProfileFormatItemResource](#schemaprofileformatitemresource)]|false|none|
|» language|body|[Language](#schemalanguage)|false|none|

> Example responses

> 201 Response

```json
{
  "id": 0,
  "name": "string",
  "upgradeAllowed": true,
  "cutoff": 0,
  "items": [
    {
      "id": 0,
      "name": "string",
      "quality": {
        "id": 0,
        "name": "string",
        "source": "unknown",
        "resolution": 0,
        "modifier": "none"
      },
      "items": [
        {}
      ],
      "allowed": true
    }
  ],
  "minFormatScore": 0,
  "cutoffFormatScore": 0,
  "minUpgradeFormatScore": 0,
  "formatItems": [
    {
      "id": 0,
      "format": 0,
      "name": "string",
      "score": 0
    }
  ],
  "language": {
    "id": 0,
    "name": "string"
  }
}
```

<h3 id="postapiv3qualityprofile-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Created|[QualityProfileResource](#schemaqualityprofileresource)|
|404|Not Found|Not Found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## get/api/v3/qualityprofile/{id}

> Code samples

```bash
curl http://localhost:7878/api/v3/qualityprofile/0 \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /api/v3/qualityprofile/{id}`

<h3 id="getapiv3qualityprofileid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|none|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "name": "string",
  "upgradeAllowed": true,
  "cutoff": 0,
  "items": [
    {
      "id": 0,
      "name": "string",
      "quality": {
        "id": 0,
        "name": "string",
        "source": "unknown",
        "resolution": 0,
        "modifier": "none"
      },
      "items": [
        {}
      ],
      "allowed": true
    }
  ],
  "minFormatScore": 0,
  "cutoffFormatScore": 0,
  "minUpgradeFormatScore": 0,
  "formatItems": [
    {
      "id": 0,
      "format": 0,
      "name": "string",
      "score": 0
    }
  ],
  "language": {
    "id": 0,
    "name": "string"
  }
}
```

<h3 id="getapiv3qualityprofileid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[QualityProfileResource](#schemaqualityprofileresource)|
|404|Not Found|Not Found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## put/api/v3/qualityprofile/{id}

> Code samples

```bash
curl http://localhost:7878/api/v3/qualityprofile/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}" \
  -d '{
    "id": 0,
    "name": "string",
    "upgradeAllowed": true,
    "cutoff": 0,
    "items": [
      {
        "id": 0,
        "name": "string",
        "quality": {
          "id": 0,
          "name": "string",
          "source": "unknown",
          "resolution": 0,
          "modifier": "none"
        },
        "items": [
          {}
        ],
        "allowed": true
      }
    ],
    "minFormatScore": 0,
    "cutoffFormatScore": 0,
    "minUpgradeFormatScore": 0,
    "formatItems": [
      {
        "id": 0,
        "format": 0,
        "name": "string",
        "score": 0
      }
    ],
    "language": {
      "id": 0,
      "name": "string"
    }
  }'
```

`PUT /api/v3/qualityprofile/{id}`

> Body parameter

```json
{
  "id": 0,
  "name": "string",
  "upgradeAllowed": true,
  "cutoff": 0,
  "items": [
    {
      "id": 0,
      "name": "string",
      "quality": {
        "id": 0,
        "name": "string",
        "source": "unknown",
        "resolution": 0,
        "modifier": "none"
      },
      "items": [
        {}
      ],
      "allowed": true
    }
  ],
  "minFormatScore": 0,
  "cutoffFormatScore": 0,
  "minUpgradeFormatScore": 0,
  "formatItems": [
    {
      "id": 0,
      "format": 0,
      "name": "string",
      "score": 0
    }
  ],
  "language": {
    "id": 0,
    "name": "string"
  }
}
```

<h3 id="putapiv3qualityprofileid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|body|body|[QualityProfileResource](#schemaqualityprofileresource)|false|none|
|» id|body|integer(int32)|false|none|
|» name|body|string \| null|false|none|
|» upgradeAllowed|body|boolean|false|none|
|» cutoff|body|integer(int32)|false|none|
|» items|body|[[QualityProfileQualityItemResource](#schemaqualityprofilequalityitemresource)]|false|none|
|» minFormatScore|body|integer(int32)|false|none|
|» cutoffFormatScore|body|integer(int32)|false|none|
|» minUpgradeFormatScore|body|integer(int32)|false|none|
|» formatItems|body|[[ProfileFormatItemResource](#schemaprofileformatitemresource)]|false|none|
|» language|body|[Language](#schemalanguage)|false|none|

> Example responses

> 202 Response

```json
{
  "id": 0,
  "name": "string",
  "upgradeAllowed": true,
  "cutoff": 0,
  "items": [
    {
      "id": 0,
      "name": "string",
      "quality": {
        "id": 0,
        "name": "string",
        "source": "unknown",
        "resolution": 0,
        "modifier": "none"
      },
      "items": [
        {}
      ],
      "allowed": true
    }
  ],
  "minFormatScore": 0,
  "cutoffFormatScore": 0,
  "minUpgradeFormatScore": 0,
  "formatItems": [
    {
      "id": 0,
      "format": 0,
      "name": "string",
      "score": 0
    }
  ],
  "language": {
    "id": 0,
    "name": "string"
  }
}
```

<h3 id="putapiv3qualityprofileid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|Accepted|[QualityProfileResource](#schemaqualityprofileresource)|
|404|Not Found|Not Found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## delete/api/v3/qualityprofile/{id}

> Code samples

```bash
curl http://localhost:7878/api/v3/qualityprofile/0 \
  -X DELETE \
  -H "X-Api-Key: ${API_KEY}"
```

`DELETE /api/v3/qualityprofile/{id}`

<h3 id="deleteapiv3qualityprofileid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|none|

<h3 id="deleteapiv3qualityprofileid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

<h1 id="radarr-qualityprofileschema">QualityProfileSchema</h1>

## get/api/v3/qualityprofile/schema

> Code samples

```bash
curl http://localhost:7878/api/v3/qualityprofile/schema \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /api/v3/qualityprofile/schema`

> Example responses

> 200 Response

```json
{
  "id": 0,
  "name": "string",
  "upgradeAllowed": true,
  "cutoff": 0,
  "items": [
    {
      "id": 0,
      "name": "string",
      "quality": {
        "id": 0,
        "name": "string",
        "source": "unknown",
        "resolution": 0,
        "modifier": "none"
      },
      "items": [
        {}
      ],
      "allowed": true
    }
  ],
  "minFormatScore": 0,
  "cutoffFormatScore": 0,
  "minUpgradeFormatScore": 0,
  "formatItems": [
    {
      "id": 0,
      "format": 0,
      "name": "string",
      "score": 0
    }
  ],
  "language": {
    "id": 0,
    "name": "string"
  }
}
```

<h3 id="getapiv3qualityprofileschema-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[QualityProfileResource](#schemaqualityprofileresource)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

<h1 id="radarr-queue">Queue</h1>

## delete/api/v3/queue/{id}

> Code samples

```bash
curl http://localhost:7878/api/v3/queue/0 \
  -X DELETE \
  -H "X-Api-Key: ${API_KEY}"
```

`DELETE /api/v3/queue/{id}`

<h3 id="deleteapiv3queueid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|none|
|removeFromClient|query|boolean|false|none|
|blocklist|query|boolean|false|none|
|skipRedownload|query|boolean|false|none|
|changeCategory|query|boolean|false|none|

<h3 id="deleteapiv3queueid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|
|404|Not Found|Not Found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## delete/api/v3/queue/bulk

> Code samples

```bash
curl http://localhost:7878/api/v3/queue/bulk \
  -X DELETE \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}" \
  -d '{
    "ids": [
      0
    ]
  }'
```

`DELETE /api/v3/queue/bulk`

> Body parameter

```json
{
  "ids": [
    0
  ]
}
```

<h3 id="deleteapiv3queuebulk-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|removeFromClient|query|boolean|false|none|
|blocklist|query|boolean|false|none|
|skipRedownload|query|boolean|false|none|
|changeCategory|query|boolean|false|none|
|body|body|[QueueBulkResource](#schemaqueuebulkresource)|false|none|
|» ids|body|[integer(int32)]|false|none|

> Example responses

> 200 Response

```json
null
```

<h3 id="deleteapiv3queuebulk-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## get/api/v3/queue

> Code samples

```bash
curl http://localhost:7878/api/v3/queue \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /api/v3/queue`

<h3 id="getapiv3queue-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|page|query|integer(int32)|false|none|
|pageSize|query|integer(int32)|false|none|
|sortKey|query|string|false|none|
|sortDirection|query|[SortDirection](#schemasortdirection)|false|none|
|includeUnknownMovieItems|query|boolean|false|none|
|includeMovie|query|boolean|false|none|
|movieIds|query|[integer(int32)]|false|none|
|protocol|query|[DownloadProtocol](#schemadownloadprotocol)|false|none|
|languages|query|[integer(int32)]|false|none|
|quality|query|[integer(int32)]|false|none|
|status|query|[[QueueStatus](#schemaqueuestatus)]|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|sortDirection|default|
|sortDirection|ascending|
|sortDirection|descending|
|protocol|unknown|
|protocol|usenet|
|protocol|torrent|
|status|unknown|
|status|queued|
|status|paused|
|status|downloading|
|status|completed|
|status|failed|
|status|warning|
|status|delay|
|status|downloadClientUnavailable|
|status|fallback|

> Example responses

> 200 Response

```json
{
  "page": 0,
  "pageSize": 0,
  "sortKey": "string",
  "sortDirection": "default",
  "totalRecords": 0,
  "records": [
    {
      "id": 0,
      "movieId": 0,
      "movie": {
        "id": 0,
        "title": "string",
        "originalTitle": "string",
        "originalLanguage": {
          "id": 0,
          "name": "string"
        },
        "alternateTitles": [
          {
            "id": 0,
            "sourceType": "tmdb",
            "movieMetadataId": 0,
            "title": "string",
            "cleanTitle": "string"
          }
        ],
        "secondaryYear": 0,
        "secondaryYearSourceId": 0,
        "sortTitle": "string",
        "sizeOnDisk": 0,
        "status": "tba",
        "overview": "string",
        "inCinemas": "1970-01-01T00:00:00Z",
        "physicalRelease": "1970-01-01T00:00:00Z",
        "digitalRelease": "1970-01-01T00:00:00Z",
        "releaseDate": "1970-01-01T00:00:00Z",
        "physicalReleaseNote": "string",
        "images": [
          {
            "coverType": "unknown",
            "url": "string",
            "remoteUrl": "string"
          }
        ],
        "website": "string",
        "remotePoster": "string",
        "year": 0,
        "youTubeTrailerId": "string",
        "studio": "string",
        "path": "string",
        "qualityProfileId": 0,
        "hasFile": true,
        "movieFileId": 0,
        "monitored": true,
        "minimumAvailability": "tba",
        "isAvailable": true,
        "folderName": "string",
        "runtime": 0,
        "cleanTitle": "string",
        "imdbId": "string",
        "tmdbId": 0,
        "titleSlug": "string",
        "rootFolderPath": "string",
        "folder": "string",
        "certification": "string",
        "genres": [
          "string"
        ],
        "keywords": [
          "string"
        ],
        "tags": [
          0
        ],
        "added": "1970-01-01T00:00:00Z",
        "addOptions": {
          "ignoreEpisodesWithFiles": true,
          "ignoreEpisodesWithoutFiles": true,
          "monitor": "movieOnly",
          "searchForMovie": true,
          "addMethod": "manual"
        },
        "ratings": {
          "imdb": {
            "votes": 0,
            "value": 0,
            "type": "user"
          },
          "tmdb": {
            "votes": 0,
            "value": 0,
            "type": "user"
          },
          "metacritic": {
            "votes": 0,
            "value": 0,
            "type": "user"
          },
          "rottenTomatoes": {
            "votes": 0,
            "value": 0,
            "type": "user"
          },
          "trakt": {
            "votes": 0,
            "value": 0,
            "type": "user"
          }
        },
        "movieFile": {
          "id": 0,
          "movieId": 0,
          "relativePath": "string",
          "path": "string",
          "size": 0,
          "dateAdded": "1970-01-01T00:00:00Z",
          "sceneName": "string",
          "releaseGroup": "string",
          "edition": "string",
          "languages": [
            {
              "id": 0,
              "name": "string"
            }
          ],
          "quality": {
            "quality": {
              "id": 0,
              "name": "string",
              "source": "unknown",
              "resolution": 0,
              "modifier": "none"
            },
            "revision": {
              "version": 0,
              "real": 0,
              "isRepack": true
            }
          },
          "customFormats": [
            {
              "id": 0,
              "name": "string",
              "includeCustomFormatWhenRenaming": true,
              "specifications": [
                {
                  "id": 0,
                  "name": "string",
                  "implementation": "string",
                  "implementationName": "string",
                  "infoLink": "string",
                  "negate": true,
                  "required": true,
                  "fields": [
                    {
                      "order": 0,
                      "name": "string",
                      "label": "string",
                      "unit": "string",
                      "helpText": "string",
                      "helpTextWarning": "string",
                      "helpLink": "string",
                      "value": null,
                      "type": "string",
                      "advanced": true,
                      "selectOptions": [
                        {
                          "value": 0,
                          "name": "string",
                          "order": 0,
                          "hint": "string",
                          "dividerAfter": true
                        }
                      ],
                      "selectOptionsProviderAction": "string",
                      "section": "string",
                      "hidden": "string",
                      "privacy": "normal",
                      "placeholder": "string",
                      "isFloat": true
                    }
                  ],
                  "presets": [
                    {}
                  ]
                }
              ]
            }
          ],
          "customFormatScore": 0,
          "indexerFlags": 0,
          "mediaInfo": {
            "id": 0,
            "audioBitrate": 0,
            "audioChannels": 0,
            "audioCodec": "string",
            "audioLanguages": "string",
            "audioStreamCount": 0,
            "videoBitDepth": 0,
            "videoBitrate": 0,
            "videoCodec": "string",
            "videoFps": 0,
            "videoDynamicRange": "string",
            "videoDynamicRangeType": "string",
            "resolution": "string",
            "runTime": "string",
            "scanType": "string",
            "subtitles": "string"
          },
          "originalFilePath": "string",
          "qualityCutoffNotMet": true
        },
        "collection": {
          "title": "string",
          "tmdbId": 0
        },
        "popularity": 0,
        "lastSearchTime": "1970-01-01T00:00:00Z",
        "statistics": {
          "movieFileCount": 0,
          "sizeOnDisk": 0,
          "releaseGroups": [
            "string"
          ],
          "movieFileQualities": [
            {
              "id": 0,
              "name": "string",
              "source": "unknown",
              "resolution": 0,
              "modifier": "none"
            }
          ]
        }
      },
      "languages": [
        {
          "id": 0,
          "name": "string"
        }
      ],
      "quality": {
        "quality": {
          "id": 0,
          "name": "string",
          "source": "unknown",
          "resolution": 0,
          "modifier": "none"
        },
        "revision": {
          "version": 0,
          "real": 0,
          "isRepack": true
        }
      },
      "customFormats": [
        {
          "id": 0,
          "name": "string",
          "includeCustomFormatWhenRenaming": true,
          "specifications": [
            {
              "id": 0,
              "name": "string",
              "implementation": "string",
              "implementationName": "string",
              "infoLink": "string",
              "negate": true,
              "required": true,
              "fields": [
                {
                  "order": 0,
                  "name": "string",
                  "label": "string",
                  "unit": "string",
                  "helpText": "string",
                  "helpTextWarning": "string",
                  "helpLink": "string",
                  "value": null,
                  "type": "string",
                  "advanced": true,
                  "selectOptions": [
                    {
                      "value": 0,
                      "name": "string",
                      "order": 0,
                      "hint": "string",
                      "dividerAfter": true
                    }
                  ],
                  "selectOptionsProviderAction": "string",
                  "section": "string",
                  "hidden": "string",
                  "privacy": "normal",
                  "placeholder": "string",
                  "isFloat": true
                }
              ],
              "presets": [
                {}
              ]
            }
          ]
        }
      ],
      "customFormatScore": 0,
      "size": 0,
      "title": "string",
      "estimatedCompletionTime": "1970-01-01T00:00:00Z",
      "added": "1970-01-01T00:00:00Z",
      "status": "unknown",
      "trackedDownloadStatus": "ok",
      "trackedDownloadState": "downloading",
      "statusMessages": [
        {
          "title": "string",
          "messages": [
            "string"
          ]
        }
      ],
      "errorMessage": "string",
      "downloadId": "string",
      "protocol": "unknown",
      "downloadClient": "string",
      "downloadClientHasPostImportCategory": true,
      "indexer": "string",
      "outputPath": "string",
      "sizeleft": 0,
      "timeleft": "string"
    }
  ]
}
```

<h3 id="getapiv3queue-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[QueueResourcePagingResource](#schemaqueueresourcepagingresource)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

<h1 id="radarr-queueaction">QueueAction</h1>

## post/api/v3/queue/grab/{id}

> Code samples

```bash
curl http://localhost:7878/api/v3/queue/grab/0 \
  -X POST \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}"
```

`POST /api/v3/queue/grab/{id}`

<h3 id="postapiv3queuegrabid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|none|

> Example responses

> 200 Response

```json
null
```

<h3 id="postapiv3queuegrabid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|404|Not Found|Not Found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## post/api/v3/queue/grab/bulk

> Code samples

```bash
curl http://localhost:7878/api/v3/queue/grab/bulk \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}" \
  -d '{
    "ids": [
      0
    ]
  }'
```

`POST /api/v3/queue/grab/bulk`

> Body parameter

```json
{
  "ids": [
    0
  ]
}
```

<h3 id="postapiv3queuegrabbulk-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[QueueBulkResource](#schemaqueuebulkresource)|false|none|
|» ids|body|[integer(int32)]|false|none|

> Example responses

> 200 Response

```json
null
```

<h3 id="postapiv3queuegrabbulk-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|404|Not Found|Not Found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

<h1 id="radarr-queuedetails">QueueDetails</h1>

## get/api/v3/queue/details

> Code samples

```bash
curl http://localhost:7878/api/v3/queue/details \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /api/v3/queue/details`

<h3 id="getapiv3queuedetails-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|movieId|query|integer(int32)|false|none|
|includeMovie|query|boolean|false|none|

> Example responses

> 200 Response

```json
[
  {
    "id": 0,
    "movieId": 0,
    "movie": {
      "id": 0,
      "title": "string",
      "originalTitle": "string",
      "originalLanguage": {
        "id": 0,
        "name": "string"
      },
      "alternateTitles": [
        {
          "id": 0,
          "sourceType": "tmdb",
          "movieMetadataId": 0,
          "title": "string",
          "cleanTitle": "string"
        }
      ],
      "secondaryYear": 0,
      "secondaryYearSourceId": 0,
      "sortTitle": "string",
      "sizeOnDisk": 0,
      "status": "tba",
      "overview": "string",
      "inCinemas": "1970-01-01T00:00:00Z",
      "physicalRelease": "1970-01-01T00:00:00Z",
      "digitalRelease": "1970-01-01T00:00:00Z",
      "releaseDate": "1970-01-01T00:00:00Z",
      "physicalReleaseNote": "string",
      "images": [
        {
          "coverType": "unknown",
          "url": "string",
          "remoteUrl": "string"
        }
      ],
      "website": "string",
      "remotePoster": "string",
      "year": 0,
      "youTubeTrailerId": "string",
      "studio": "string",
      "path": "string",
      "qualityProfileId": 0,
      "hasFile": true,
      "movieFileId": 0,
      "monitored": true,
      "minimumAvailability": "tba",
      "isAvailable": true,
      "folderName": "string",
      "runtime": 0,
      "cleanTitle": "string",
      "imdbId": "string",
      "tmdbId": 0,
      "titleSlug": "string",
      "rootFolderPath": "string",
      "folder": "string",
      "certification": "string",
      "genres": [
        "string"
      ],
      "keywords": [
        "string"
      ],
      "tags": [
        0
      ],
      "added": "1970-01-01T00:00:00Z",
      "addOptions": {
        "ignoreEpisodesWithFiles": true,
        "ignoreEpisodesWithoutFiles": true,
        "monitor": "movieOnly",
        "searchForMovie": true,
        "addMethod": "manual"
      },
      "ratings": {
        "imdb": {
          "votes": 0,
          "value": 0,
          "type": "user"
        },
        "tmdb": {
          "votes": 0,
          "value": 0,
          "type": "user"
        },
        "metacritic": {
          "votes": 0,
          "value": 0,
          "type": "user"
        },
        "rottenTomatoes": {
          "votes": 0,
          "value": 0,
          "type": "user"
        },
        "trakt": {
          "votes": 0,
          "value": 0,
          "type": "user"
        }
      },
      "movieFile": {
        "id": 0,
        "movieId": 0,
        "relativePath": "string",
        "path": "string",
        "size": 0,
        "dateAdded": "1970-01-01T00:00:00Z",
        "sceneName": "string",
        "releaseGroup": "string",
        "edition": "string",
        "languages": [
          {
            "id": 0,
            "name": "string"
          }
        ],
        "quality": {
          "quality": {
            "id": 0,
            "name": "string",
            "source": "unknown",
            "resolution": 0,
            "modifier": "none"
          },
          "revision": {
            "version": 0,
            "real": 0,
            "isRepack": true
          }
        },
        "customFormats": [
          {
            "id": 0,
            "name": "string",
            "includeCustomFormatWhenRenaming": true,
            "specifications": [
              {
                "id": 0,
                "name": "string",
                "implementation": "string",
                "implementationName": "string",
                "infoLink": "string",
                "negate": true,
                "required": true,
                "fields": [
                  {
                    "order": 0,
                    "name": "string",
                    "label": "string",
                    "unit": "string",
                    "helpText": "string",
                    "helpTextWarning": "string",
                    "helpLink": "string",
                    "value": null,
                    "type": "string",
                    "advanced": true,
                    "selectOptions": [
                      {
                        "value": 0,
                        "name": "string",
                        "order": 0,
                        "hint": "string",
                        "dividerAfter": true
                      }
                    ],
                    "selectOptionsProviderAction": "string",
                    "section": "string",
                    "hidden": "string",
                    "privacy": "normal",
                    "placeholder": "string",
                    "isFloat": true
                  }
                ],
                "presets": [
                  {}
                ]
              }
            ]
          }
        ],
        "customFormatScore": 0,
        "indexerFlags": 0,
        "mediaInfo": {
          "id": 0,
          "audioBitrate": 0,
          "audioChannels": 0,
          "audioCodec": "string",
          "audioLanguages": "string",
          "audioStreamCount": 0,
          "videoBitDepth": 0,
          "videoBitrate": 0,
          "videoCodec": "string",
          "videoFps": 0,
          "videoDynamicRange": "string",
          "videoDynamicRangeType": "string",
          "resolution": "string",
          "runTime": "string",
          "scanType": "string",
          "subtitles": "string"
        },
        "originalFilePath": "string",
        "qualityCutoffNotMet": true
      },
      "collection": {
        "title": "string",
        "tmdbId": 0
      },
      "popularity": 0,
      "lastSearchTime": "1970-01-01T00:00:00Z",
      "statistics": {
        "movieFileCount": 0,
        "sizeOnDisk": 0,
        "releaseGroups": [
          "string"
        ],
        "movieFileQualities": [
          {
            "id": 0,
            "name": "string",
            "source": "unknown",
            "resolution": 0,
            "modifier": "none"
          }
        ]
      }
    },
    "languages": [
      {
        "id": 0,
        "name": "string"
      }
    ],
    "quality": {
      "quality": {
        "id": 0,
        "name": "string",
        "source": "unknown",
        "resolution": 0,
        "modifier": "none"
      },
      "revision": {
        "version": 0,
        "real": 0,
        "isRepack": true
      }
    },
    "customFormats": [
      {
        "id": 0,
        "name": "string",
        "includeCustomFormatWhenRenaming": true,
        "specifications": [
          {
            "id": 0,
            "name": "string",
            "implementation": "string",
            "implementationName": "string",
            "infoLink": "string",
            "negate": true,
            "required": true,
            "fields": [
              {
                "order": 0,
                "name": "string",
                "label": "string",
                "unit": "string",
                "helpText": "string",
                "helpTextWarning": "string",
                "helpLink": "string",
                "value": null,
                "type": "string",
                "advanced": true,
                "selectOptions": [
                  {
                    "value": 0,
                    "name": "string",
                    "order": 0,
                    "hint": "string",
                    "dividerAfter": true
                  }
                ],
                "selectOptionsProviderAction": "string",
                "section": "string",
                "hidden": "string",
                "privacy": "normal",
                "placeholder": "string",
                "isFloat": true
              }
            ],
            "presets": [
              {}
            ]
          }
        ]
      }
    ],
    "customFormatScore": 0,
    "size": 0,
    "title": "string",
    "estimatedCompletionTime": "1970-01-01T00:00:00Z",
    "added": "1970-01-01T00:00:00Z",
    "status": "unknown",
    "trackedDownloadStatus": "ok",
    "trackedDownloadState": "downloading",
    "statusMessages": [
      {
        "title": "string",
        "messages": [
          "string"
        ]
      }
    ],
    "errorMessage": "string",
    "downloadId": "string",
    "protocol": "unknown",
    "downloadClient": "string",
    "downloadClientHasPostImportCategory": true,
    "indexer": "string",
    "outputPath": "string",
    "sizeleft": 0,
    "timeleft": "string"
  }
]
```

<h3 id="getapiv3queuedetails-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="getapiv3queuedetails-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[QueueResource](#schemaqueueresource)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

<h1 id="radarr-queuestatus">QueueStatus</h1>

## get/api/v3/queue/status

> Code samples

```bash
curl http://localhost:7878/api/v3/queue/status \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /api/v3/queue/status`

> Example responses

> 200 Response

```json
{
  "id": 0,
  "totalCount": 0,
  "count": 0,
  "unknownCount": 0,
  "errors": true,
  "warnings": true,
  "unknownErrors": true,
  "unknownWarnings": true
}
```

<h3 id="getapiv3queuestatus-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[QueueStatusResource](#schemaqueuestatusresource)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

<h1 id="radarr-release">Release</h1>

## get/api/v3/release

> Code samples

```bash
curl http://localhost:7878/api/v3/release \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /api/v3/release`

<h3 id="getapiv3release-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|movieId|query|integer(int32)|false|none|

> Example responses

> 200 Response

```json
[
  {
    "id": 0,
    "guid": "string",
    "quality": {
      "quality": {
        "id": 0,
        "name": "string",
        "source": "unknown",
        "resolution": 0,
        "modifier": "none"
      },
      "revision": {
        "version": 0,
        "real": 0,
        "isRepack": true
      }
    },
    "customFormats": [
      {
        "id": 0,
        "name": "string",
        "includeCustomFormatWhenRenaming": true,
        "specifications": [
          {
            "id": 0,
            "name": "string",
            "implementation": "string",
            "implementationName": "string",
            "infoLink": "string",
            "negate": true,
            "required": true,
            "fields": [
              {
                "order": 0,
                "name": "string",
                "label": "string",
                "unit": "string",
                "helpText": "string",
                "helpTextWarning": "string",
                "helpLink": "string",
                "value": null,
                "type": "string",
                "advanced": true,
                "selectOptions": [
                  {
                    "value": 0,
                    "name": "string",
                    "order": 0,
                    "hint": "string",
                    "dividerAfter": true
                  }
                ],
                "selectOptionsProviderAction": "string",
                "section": "string",
                "hidden": "string",
                "privacy": "normal",
                "placeholder": "string",
                "isFloat": true
              }
            ],
            "presets": [
              {}
            ]
          }
        ]
      }
    ],
    "customFormatScore": 0,
    "history": {
      "grabbed": "1970-01-01T00:00:00Z",
      "failed": "1970-01-01T00:00:00Z"
    },
    "qualityWeight": 0,
    "age": 0,
    "ageHours": 0,
    "ageMinutes": 0,
    "size": 0,
    "indexerId": 0,
    "indexer": "string",
    "releaseGroup": "string",
    "subGroup": "string",
    "releaseHash": "string",
    "title": "string",
    "sceneSource": true,
    "movieTitles": [
      "string"
    ],
    "languages": [
      {
        "id": 0,
        "name": "string"
      }
    ],
    "mappedMovieId": 0,
    "approved": true,
    "temporarilyRejected": true,
    "rejected": true,
    "tmdbId": 0,
    "imdbId": 0,
    "rejections": [
      "string"
    ],
    "publishDate": "1970-01-01T00:00:00Z",
    "commentUrl": "string",
    "downloadUrl": "string",
    "infoUrl": "string",
    "movieRequested": true,
    "downloadAllowed": true,
    "releaseWeight": 0,
    "edition": "string",
    "magnetUrl": "string",
    "infoHash": "string",
    "seeders": 0,
    "leechers": 0,
    "protocol": "unknown",
    "indexerFlags": null,
    "movieId": 0,
    "downloadClientId": 0,
    "downloadClient": "string",
    "shouldOverride": true
  }
]
```

<h3 id="getapiv3release-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|None|

<h3 id="getapiv3release-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[ReleaseResource](#schemareleaseresource)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## post/api/v3/release

> Code samples

```bash
curl http://localhost:7878/api/v3/release \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}" \
  -d '{
    "id": 0,
    "guid": "string",
    "quality": {
      "quality": {
        "id": 0,
        "name": "string",
        "source": "unknown",
        "resolution": 0,
        "modifier": "none"
      },
      "revision": {
        "version": 0,
        "real": 0,
        "isRepack": true
      }
    },
    "customFormats": [
      {
        "id": 0,
        "name": "string",
        "includeCustomFormatWhenRenaming": true,
        "specifications": [
          {
            "id": 0,
            "name": "string",
            "implementation": "string",
            "implementationName": "string",
            "infoLink": "string",
            "negate": true,
            "required": true,
            "fields": [
              {
                "order": 0,
                "name": "string",
                "label": "string",
                "unit": "string",
                "helpText": "string",
                "helpTextWarning": "string",
                "helpLink": "string",
                "value": null,
                "type": "string",
                "advanced": true,
                "selectOptions": [
                  {
                    "value": 0,
                    "name": "string",
                    "order": 0,
                    "hint": "string",
                    "dividerAfter": true
                  }
                ],
                "selectOptionsProviderAction": "string",
                "section": "string",
                "hidden": "string",
                "privacy": "normal",
                "placeholder": "string",
                "isFloat": true
              }
            ],
            "presets": [
              {}
            ]
          }
        ]
      }
    ],
    "customFormatScore": 0,
    "history": {
      "grabbed": "1970-01-01T00:00:00Z",
      "failed": "1970-01-01T00:00:00Z"
    },
    "qualityWeight": 0,
    "age": 0,
    "ageHours": 0,
    "ageMinutes": 0,
    "size": 0,
    "indexerId": 0,
    "indexer": "string",
    "releaseGroup": "string",
    "subGroup": "string",
    "releaseHash": "string",
    "title": "string",
    "sceneSource": true,
    "movieTitles": [
      "string"
    ],
    "languages": [
      {
        "id": 0,
        "name": "string"
      }
    ],
    "mappedMovieId": 0,
    "approved": true,
    "temporarilyRejected": true,
    "rejected": true,
    "tmdbId": 0,
    "imdbId": 0,
    "rejections": [
      "string"
    ],
    "publishDate": "1970-01-01T00:00:00Z",
    "commentUrl": "string",
    "downloadUrl": "string",
    "infoUrl": "string",
    "movieRequested": true,
    "downloadAllowed": true,
    "releaseWeight": 0,
    "edition": "string",
    "magnetUrl": "string",
    "infoHash": "string",
    "seeders": 0,
    "leechers": 0,
    "protocol": "unknown",
    "indexerFlags": null,
    "movieId": 0,
    "downloadClientId": 0,
    "downloadClient": "string",
    "shouldOverride": true
  }'
```

`POST /api/v3/release`

> Body parameter

```json
{
  "id": 0,
  "guid": "string",
  "quality": {
    "quality": {
      "id": 0,
      "name": "string",
      "source": "unknown",
      "resolution": 0,
      "modifier": "none"
    },
    "revision": {
      "version": 0,
      "real": 0,
      "isRepack": true
    }
  },
  "customFormats": [
    {
      "id": 0,
      "name": "string",
      "includeCustomFormatWhenRenaming": true,
      "specifications": [
        {
          "id": 0,
          "name": "string",
          "implementation": "string",
          "implementationName": "string",
          "infoLink": "string",
          "negate": true,
          "required": true,
          "fields": [
            {
              "order": 0,
              "name": "string",
              "label": "string",
              "unit": "string",
              "helpText": "string",
              "helpTextWarning": "string",
              "helpLink": "string",
              "value": null,
              "type": "string",
              "advanced": true,
              "selectOptions": [
                {
                  "value": 0,
                  "name": "string",
                  "order": 0,
                  "hint": "string",
                  "dividerAfter": true
                }
              ],
              "selectOptionsProviderAction": "string",
              "section": "string",
              "hidden": "string",
              "privacy": "normal",
              "placeholder": "string",
              "isFloat": true
            }
          ],
          "presets": [
            {}
          ]
        }
      ]
    }
  ],
  "customFormatScore": 0,
  "history": {
    "grabbed": "1970-01-01T00:00:00Z",
    "failed": "1970-01-01T00:00:00Z"
  },
  "qualityWeight": 0,
  "age": 0,
  "ageHours": 0,
  "ageMinutes": 0,
  "size": 0,
  "indexerId": 0,
  "indexer": "string",
  "releaseGroup": "string",
  "subGroup": "string",
  "releaseHash": "string",
  "title": "string",
  "sceneSource": true,
  "movieTitles": [
    "string"
  ],
  "languages": [
    {
      "id": 0,
      "name": "string"
    }
  ],
  "mappedMovieId": 0,
  "approved": true,
  "temporarilyRejected": true,
  "rejected": true,
  "tmdbId": 0,
  "imdbId": 0,
  "rejections": [
    "string"
  ],
  "publishDate": "1970-01-01T00:00:00Z",
  "commentUrl": "string",
  "downloadUrl": "string",
  "infoUrl": "string",
  "movieRequested": true,
  "downloadAllowed": true,
  "releaseWeight": 0,
  "edition": "string",
  "magnetUrl": "string",
  "infoHash": "string",
  "seeders": 0,
  "leechers": 0,
  "protocol": "unknown",
  "indexerFlags": null,
  "movieId": 0,
  "downloadClientId": 0,
  "downloadClient": "string",
  "shouldOverride": true
}
```

<h3 id="postapiv3release-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[ReleaseResource](#schemareleaseresource)|false|none|
|» id|body|integer(int32)|false|none|
|» guid|body|string \| null|false|none|
|» quality|body|[QualityModel](#schemaqualitymodel)|false|none|
|» customFormats|body|[[CustomFormatResource](#schemacustomformatresource)]|false|none|
|» customFormatScore|body|integer(int32)|false|none|
|» history|body|[ReleaseHistoryResource](#schemareleasehistoryresource)|false|none|
|» qualityWeight|body|integer(int32)|false|none|
|» age|body|integer(int32)|false|none|
|» ageHours|body|number(double)|false|none|
|» ageMinutes|body|number(double)|false|none|
|» size|body|integer(int64)|false|none|
|» indexerId|body|integer(int32)|false|none|
|» indexer|body|string \| null|false|none|
|» releaseGroup|body|string \| null|false|none|
|» subGroup|body|string \| null|false|none|
|» releaseHash|body|string \| null|false|none|
|» title|body|string \| null|false|none|
|» sceneSource|body|boolean|false|none|
|» movieTitles|body|[string]|false|none|
|» languages|body|[[Language](#schemalanguage)]|false|none|
|» mappedMovieId|body|integer(int32) \| null|false|none|
|» approved|body|boolean|false|none|
|» temporarilyRejected|body|boolean|false|none|
|» rejected|body|boolean|false|none|
|» tmdbId|body|integer(int32)|false|none|
|» imdbId|body|integer(int32)|false|none|
|» rejections|body|[string]|false|none|
|» publishDate|body|string(date-time)|false|none|
|» commentUrl|body|string \| null|false|none|
|» downloadUrl|body|string \| null|false|none|
|» infoUrl|body|string \| null|false|none|
|» movieRequested|body|boolean|false|none|
|» downloadAllowed|body|boolean|false|none|
|» releaseWeight|body|integer(int32)|false|none|
|» edition|body|string \| null|false|none|
|» magnetUrl|body|string \| null|false|none|
|» infoHash|body|string \| null|false|none|
|» seeders|body|integer(int32) \| null|false|none|
|» leechers|body|integer(int32) \| null|false|none|
|» protocol|body|[DownloadProtocol](#schemadownloadprotocol)|false|none|
|» indexerFlags|body|object|false|none|
|» movieId|body|integer(int32) \| null|false|none|
|» downloadClientId|body|integer(int32) \| null|false|none|
|» downloadClient|body|string \| null|false|none|
|» shouldOverride|body|boolean \| null|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» protocol|unknown|
|» protocol|usenet|
|» protocol|torrent|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "guid": "string",
  "quality": {
    "quality": {
      "id": 0,
      "name": "string",
      "source": "unknown",
      "resolution": 0,
      "modifier": "none"
    },
    "revision": {
      "version": 0,
      "real": 0,
      "isRepack": true
    }
  },
  "customFormats": [
    {
      "id": 0,
      "name": "string",
      "includeCustomFormatWhenRenaming": true,
      "specifications": [
        {
          "id": 0,
          "name": "string",
          "implementation": "string",
          "implementationName": "string",
          "infoLink": "string",
          "negate": true,
          "required": true,
          "fields": [
            {
              "order": 0,
              "name": "string",
              "label": "string",
              "unit": "string",
              "helpText": "string",
              "helpTextWarning": "string",
              "helpLink": "string",
              "value": null,
              "type": "string",
              "advanced": true,
              "selectOptions": [
                {
                  "value": 0,
                  "name": "string",
                  "order": 0,
                  "hint": "string",
                  "dividerAfter": true
                }
              ],
              "selectOptionsProviderAction": "string",
              "section": "string",
              "hidden": "string",
              "privacy": "normal",
              "placeholder": "string",
              "isFloat": true
            }
          ],
          "presets": [
            {}
          ]
        }
      ]
    }
  ],
  "customFormatScore": 0,
  "history": {
    "grabbed": "1970-01-01T00:00:00Z",
    "failed": "1970-01-01T00:00:00Z"
  },
  "qualityWeight": 0,
  "age": 0,
  "ageHours": 0,
  "ageMinutes": 0,
  "size": 0,
  "indexerId": 0,
  "indexer": "string",
  "releaseGroup": "string",
  "subGroup": "string",
  "releaseHash": "string",
  "title": "string",
  "sceneSource": true,
  "movieTitles": [
    "string"
  ],
  "languages": [
    {
      "id": 0,
      "name": "string"
    }
  ],
  "mappedMovieId": 0,
  "approved": true,
  "temporarilyRejected": true,
  "rejected": true,
  "tmdbId": 0,
  "imdbId": 0,
  "rejections": [
    "string"
  ],
  "publishDate": "1970-01-01T00:00:00Z",
  "commentUrl": "string",
  "downloadUrl": "string",
  "infoUrl": "string",
  "movieRequested": true,
  "downloadAllowed": true,
  "releaseWeight": 0,
  "edition": "string",
  "magnetUrl": "string",
  "infoHash": "string",
  "seeders": 0,
  "leechers": 0,
  "protocol": "unknown",
  "indexerFlags": null,
  "movieId": 0,
  "downloadClientId": 0,
  "downloadClient": "string",
  "shouldOverride": true
}
```

<h3 id="postapiv3release-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[ReleaseResource](#schemareleaseresource)|
|404|Not Found|Not Found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

<h1 id="radarr-releaseprofile">ReleaseProfile</h1>

## get/api/v3/releaseprofile

> Code samples

```bash
curl http://localhost:7878/api/v3/releaseprofile \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /api/v3/releaseprofile`

> Example responses

> 200 Response

```json
[
  {
    "id": 0,
    "name": "string",
    "enabled": true,
    "required": null,
    "ignored": null,
    "indexerId": 0,
    "tags": [
      0
    ]
  }
]
```

<h3 id="getapiv3releaseprofile-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="getapiv3releaseprofile-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[ReleaseProfileResource](#schemareleaseprofileresource)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## post/api/v3/releaseprofile

> Code samples

```bash
curl http://localhost:7878/api/v3/releaseprofile \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}" \
  -d '{
    "id": 0,
    "name": "string",
    "enabled": true,
    "required": null,
    "ignored": null,
    "indexerId": 0,
    "tags": [
      0
    ]
  }'
```

`POST /api/v3/releaseprofile`

> Body parameter

```json
{
  "id": 0,
  "name": "string",
  "enabled": true,
  "required": null,
  "ignored": null,
  "indexerId": 0,
  "tags": [
    0
  ]
}
```

<h3 id="postapiv3releaseprofile-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[ReleaseProfileResource](#schemareleaseprofileresource)|false|none|
|» id|body|integer(int32)|false|none|
|» name|body|string \| null|false|none|
|» enabled|body|boolean|false|none|
|» required|body|object|false|none|
|» ignored|body|object|false|none|
|» indexerId|body|integer(int32)|false|none|
|» tags|body|[integer(int32)]|false|none|

> Example responses

> 201 Response

```json
{
  "id": 0,
  "name": "string",
  "enabled": true,
  "required": null,
  "ignored": null,
  "indexerId": 0,
  "tags": [
    0
  ]
}
```

<h3 id="postapiv3releaseprofile-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Created|[ReleaseProfileResource](#schemareleaseprofileresource)|
|404|Not Found|Not Found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## get/api/v3/releaseprofile/{id}

> Code samples

```bash
curl http://localhost:7878/api/v3/releaseprofile/0 \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /api/v3/releaseprofile/{id}`

<h3 id="getapiv3releaseprofileid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|none|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "name": "string",
  "enabled": true,
  "required": null,
  "ignored": null,
  "indexerId": 0,
  "tags": [
    0
  ]
}
```

<h3 id="getapiv3releaseprofileid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[ReleaseProfileResource](#schemareleaseprofileresource)|
|404|Not Found|Not Found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## put/api/v3/releaseprofile/{id}

> Code samples

```bash
curl http://localhost:7878/api/v3/releaseprofile/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}" \
  -d '{
    "id": 0,
    "name": "string",
    "enabled": true,
    "required": null,
    "ignored": null,
    "indexerId": 0,
    "tags": [
      0
    ]
  }'
```

`PUT /api/v3/releaseprofile/{id}`

> Body parameter

```json
{
  "id": 0,
  "name": "string",
  "enabled": true,
  "required": null,
  "ignored": null,
  "indexerId": 0,
  "tags": [
    0
  ]
}
```

<h3 id="putapiv3releaseprofileid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|body|body|[ReleaseProfileResource](#schemareleaseprofileresource)|false|none|
|» id|body|integer(int32)|false|none|
|» name|body|string \| null|false|none|
|» enabled|body|boolean|false|none|
|» required|body|object|false|none|
|» ignored|body|object|false|none|
|» indexerId|body|integer(int32)|false|none|
|» tags|body|[integer(int32)]|false|none|

> Example responses

> 202 Response

```json
{
  "id": 0,
  "name": "string",
  "enabled": true,
  "required": null,
  "ignored": null,
  "indexerId": 0,
  "tags": [
    0
  ]
}
```

<h3 id="putapiv3releaseprofileid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|Accepted|[ReleaseProfileResource](#schemareleaseprofileresource)|
|404|Not Found|Not Found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## delete/api/v3/releaseprofile/{id}

> Code samples

```bash
curl http://localhost:7878/api/v3/releaseprofile/0 \
  -X DELETE \
  -H "X-Api-Key: ${API_KEY}"
```

`DELETE /api/v3/releaseprofile/{id}`

<h3 id="deleteapiv3releaseprofileid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|none|

<h3 id="deleteapiv3releaseprofileid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

<h1 id="radarr-releasepush">ReleasePush</h1>

## post/api/v3/release/push

> Code samples

```bash
curl http://localhost:7878/api/v3/release/push \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}" \
  -d '{
    "id": 0,
    "guid": "string",
    "quality": {
      "quality": {
        "id": 0,
        "name": "string",
        "source": "unknown",
        "resolution": 0,
        "modifier": "none"
      },
      "revision": {
        "version": 0,
        "real": 0,
        "isRepack": true
      }
    },
    "customFormats": [
      {
        "id": 0,
        "name": "string",
        "includeCustomFormatWhenRenaming": true,
        "specifications": [
          {
            "id": 0,
            "name": "string",
            "implementation": "string",
            "implementationName": "string",
            "infoLink": "string",
            "negate": true,
            "required": true,
            "fields": [
              {
                "order": 0,
                "name": "string",
                "label": "string",
                "unit": "string",
                "helpText": "string",
                "helpTextWarning": "string",
                "helpLink": "string",
                "value": null,
                "type": "string",
                "advanced": true,
                "selectOptions": [
                  {
                    "value": 0,
                    "name": "string",
                    "order": 0,
                    "hint": "string",
                    "dividerAfter": true
                  }
                ],
                "selectOptionsProviderAction": "string",
                "section": "string",
                "hidden": "string",
                "privacy": "normal",
                "placeholder": "string",
                "isFloat": true
              }
            ],
            "presets": [
              {}
            ]
          }
        ]
      }
    ],
    "customFormatScore": 0,
    "history": {
      "grabbed": "1970-01-01T00:00:00Z",
      "failed": "1970-01-01T00:00:00Z"
    },
    "qualityWeight": 0,
    "age": 0,
    "ageHours": 0,
    "ageMinutes": 0,
    "size": 0,
    "indexerId": 0,
    "indexer": "string",
    "releaseGroup": "string",
    "subGroup": "string",
    "releaseHash": "string",
    "title": "string",
    "sceneSource": true,
    "movieTitles": [
      "string"
    ],
    "languages": [
      {
        "id": 0,
        "name": "string"
      }
    ],
    "mappedMovieId": 0,
    "approved": true,
    "temporarilyRejected": true,
    "rejected": true,
    "tmdbId": 0,
    "imdbId": 0,
    "rejections": [
      "string"
    ],
    "publishDate": "1970-01-01T00:00:00Z",
    "commentUrl": "string",
    "downloadUrl": "string",
    "infoUrl": "string",
    "movieRequested": true,
    "downloadAllowed": true,
    "releaseWeight": 0,
    "edition": "string",
    "magnetUrl": "string",
    "infoHash": "string",
    "seeders": 0,
    "leechers": 0,
    "protocol": "unknown",
    "indexerFlags": null,
    "movieId": 0,
    "downloadClientId": 0,
    "downloadClient": "string",
    "shouldOverride": true
  }'
```

`POST /api/v3/release/push`

> Body parameter

```json
{
  "id": 0,
  "guid": "string",
  "quality": {
    "quality": {
      "id": 0,
      "name": "string",
      "source": "unknown",
      "resolution": 0,
      "modifier": "none"
    },
    "revision": {
      "version": 0,
      "real": 0,
      "isRepack": true
    }
  },
  "customFormats": [
    {
      "id": 0,
      "name": "string",
      "includeCustomFormatWhenRenaming": true,
      "specifications": [
        {
          "id": 0,
          "name": "string",
          "implementation": "string",
          "implementationName": "string",
          "infoLink": "string",
          "negate": true,
          "required": true,
          "fields": [
            {
              "order": 0,
              "name": "string",
              "label": "string",
              "unit": "string",
              "helpText": "string",
              "helpTextWarning": "string",
              "helpLink": "string",
              "value": null,
              "type": "string",
              "advanced": true,
              "selectOptions": [
                {
                  "value": 0,
                  "name": "string",
                  "order": 0,
                  "hint": "string",
                  "dividerAfter": true
                }
              ],
              "selectOptionsProviderAction": "string",
              "section": "string",
              "hidden": "string",
              "privacy": "normal",
              "placeholder": "string",
              "isFloat": true
            }
          ],
          "presets": [
            {}
          ]
        }
      ]
    }
  ],
  "customFormatScore": 0,
  "history": {
    "grabbed": "1970-01-01T00:00:00Z",
    "failed": "1970-01-01T00:00:00Z"
  },
  "qualityWeight": 0,
  "age": 0,
  "ageHours": 0,
  "ageMinutes": 0,
  "size": 0,
  "indexerId": 0,
  "indexer": "string",
  "releaseGroup": "string",
  "subGroup": "string",
  "releaseHash": "string",
  "title": "string",
  "sceneSource": true,
  "movieTitles": [
    "string"
  ],
  "languages": [
    {
      "id": 0,
      "name": "string"
    }
  ],
  "mappedMovieId": 0,
  "approved": true,
  "temporarilyRejected": true,
  "rejected": true,
  "tmdbId": 0,
  "imdbId": 0,
  "rejections": [
    "string"
  ],
  "publishDate": "1970-01-01T00:00:00Z",
  "commentUrl": "string",
  "downloadUrl": "string",
  "infoUrl": "string",
  "movieRequested": true,
  "downloadAllowed": true,
  "releaseWeight": 0,
  "edition": "string",
  "magnetUrl": "string",
  "infoHash": "string",
  "seeders": 0,
  "leechers": 0,
  "protocol": "unknown",
  "indexerFlags": null,
  "movieId": 0,
  "downloadClientId": 0,
  "downloadClient": "string",
  "shouldOverride": true
}
```

<h3 id="postapiv3releasepush-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[ReleaseResource](#schemareleaseresource)|false|none|
|» id|body|integer(int32)|false|none|
|» guid|body|string \| null|false|none|
|» quality|body|[QualityModel](#schemaqualitymodel)|false|none|
|» customFormats|body|[[CustomFormatResource](#schemacustomformatresource)]|false|none|
|» customFormatScore|body|integer(int32)|false|none|
|» history|body|[ReleaseHistoryResource](#schemareleasehistoryresource)|false|none|
|» qualityWeight|body|integer(int32)|false|none|
|» age|body|integer(int32)|false|none|
|» ageHours|body|number(double)|false|none|
|» ageMinutes|body|number(double)|false|none|
|» size|body|integer(int64)|false|none|
|» indexerId|body|integer(int32)|false|none|
|» indexer|body|string \| null|false|none|
|» releaseGroup|body|string \| null|false|none|
|» subGroup|body|string \| null|false|none|
|» releaseHash|body|string \| null|false|none|
|» title|body|string \| null|false|none|
|» sceneSource|body|boolean|false|none|
|» movieTitles|body|[string]|false|none|
|» languages|body|[[Language](#schemalanguage)]|false|none|
|» mappedMovieId|body|integer(int32) \| null|false|none|
|» approved|body|boolean|false|none|
|» temporarilyRejected|body|boolean|false|none|
|» rejected|body|boolean|false|none|
|» tmdbId|body|integer(int32)|false|none|
|» imdbId|body|integer(int32)|false|none|
|» rejections|body|[string]|false|none|
|» publishDate|body|string(date-time)|false|none|
|» commentUrl|body|string \| null|false|none|
|» downloadUrl|body|string \| null|false|none|
|» infoUrl|body|string \| null|false|none|
|» movieRequested|body|boolean|false|none|
|» downloadAllowed|body|boolean|false|none|
|» releaseWeight|body|integer(int32)|false|none|
|» edition|body|string \| null|false|none|
|» magnetUrl|body|string \| null|false|none|
|» infoHash|body|string \| null|false|none|
|» seeders|body|integer(int32) \| null|false|none|
|» leechers|body|integer(int32) \| null|false|none|
|» protocol|body|[DownloadProtocol](#schemadownloadprotocol)|false|none|
|» indexerFlags|body|object|false|none|
|» movieId|body|integer(int32) \| null|false|none|
|» downloadClientId|body|integer(int32) \| null|false|none|
|» downloadClient|body|string \| null|false|none|
|» shouldOverride|body|boolean \| null|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» protocol|unknown|
|» protocol|usenet|
|» protocol|torrent|

> Example responses

> 200 Response

```json
[
  {
    "id": 0,
    "guid": "string",
    "quality": {
      "quality": {
        "id": 0,
        "name": "string",
        "source": "unknown",
        "resolution": 0,
        "modifier": "none"
      },
      "revision": {
        "version": 0,
        "real": 0,
        "isRepack": true
      }
    },
    "customFormats": [
      {
        "id": 0,
        "name": "string",
        "includeCustomFormatWhenRenaming": true,
        "specifications": [
          {
            "id": 0,
            "name": "string",
            "implementation": "string",
            "implementationName": "string",
            "infoLink": "string",
            "negate": true,
            "required": true,
            "fields": [
              {
                "order": 0,
                "name": "string",
                "label": "string",
                "unit": "string",
                "helpText": "string",
                "helpTextWarning": "string",
                "helpLink": "string",
                "value": null,
                "type": "string",
                "advanced": true,
                "selectOptions": [
                  {
                    "value": 0,
                    "name": "string",
                    "order": 0,
                    "hint": "string",
                    "dividerAfter": true
                  }
                ],
                "selectOptionsProviderAction": "string",
                "section": "string",
                "hidden": "string",
                "privacy": "normal",
                "placeholder": "string",
                "isFloat": true
              }
            ],
            "presets": [
              {}
            ]
          }
        ]
      }
    ],
    "customFormatScore": 0,
    "history": {
      "grabbed": "1970-01-01T00:00:00Z",
      "failed": "1970-01-01T00:00:00Z"
    },
    "qualityWeight": 0,
    "age": 0,
    "ageHours": 0,
    "ageMinutes": 0,
    "size": 0,
    "indexerId": 0,
    "indexer": "string",
    "releaseGroup": "string",
    "subGroup": "string",
    "releaseHash": "string",
    "title": "string",
    "sceneSource": true,
    "movieTitles": [
      "string"
    ],
    "languages": [
      {
        "id": 0,
        "name": "string"
      }
    ],
    "mappedMovieId": 0,
    "approved": true,
    "temporarilyRejected": true,
    "rejected": true,
    "tmdbId": 0,
    "imdbId": 0,
    "rejections": [
      "string"
    ],
    "publishDate": "1970-01-01T00:00:00Z",
    "commentUrl": "string",
    "downloadUrl": "string",
    "infoUrl": "string",
    "movieRequested": true,
    "downloadAllowed": true,
    "releaseWeight": 0,
    "edition": "string",
    "magnetUrl": "string",
    "infoHash": "string",
    "seeders": 0,
    "leechers": 0,
    "protocol": "unknown",
    "indexerFlags": null,
    "movieId": 0,
    "downloadClientId": 0,
    "downloadClient": "string",
    "shouldOverride": true
  }
]
```

<h3 id="postapiv3releasepush-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|None|

<h3 id="postapiv3releasepush-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[ReleaseResource](#schemareleaseresource)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

<h1 id="radarr-remotepathmapping">RemotePathMapping</h1>

## get/api/v3/remotepathmapping

> Code samples

```bash
curl http://localhost:7878/api/v3/remotepathmapping \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /api/v3/remotepathmapping`

> Example responses

> 200 Response

```json
[
  {
    "id": 0,
    "host": "string",
    "remotePath": "string",
    "localPath": "string"
  }
]
```

<h3 id="getapiv3remotepathmapping-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="getapiv3remotepathmapping-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[RemotePathMappingResource](#schemaremotepathmappingresource)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## post/api/v3/remotepathmapping

> Code samples

```bash
curl http://localhost:7878/api/v3/remotepathmapping \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}" \
  -d '{
    "id": 0,
    "host": "string",
    "remotePath": "string",
    "localPath": "string"
  }'
```

`POST /api/v3/remotepathmapping`

> Body parameter

```json
{
  "id": 0,
  "host": "string",
  "remotePath": "string",
  "localPath": "string"
}
```

<h3 id="postapiv3remotepathmapping-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[RemotePathMappingResource](#schemaremotepathmappingresource)|false|none|
|» id|body|integer(int32)|false|none|
|» host|body|string \| null|false|none|
|» remotePath|body|string \| null|false|none|
|» localPath|body|string \| null|false|none|

> Example responses

> 201 Response

```json
{
  "id": 0,
  "host": "string",
  "remotePath": "string",
  "localPath": "string"
}
```

<h3 id="postapiv3remotepathmapping-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Created|[RemotePathMappingResource](#schemaremotepathmappingresource)|
|404|Not Found|Not Found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## get/api/v3/remotepathmapping/{id}

> Code samples

```bash
curl http://localhost:7878/api/v3/remotepathmapping/0 \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /api/v3/remotepathmapping/{id}`

<h3 id="getapiv3remotepathmappingid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|none|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "host": "string",
  "remotePath": "string",
  "localPath": "string"
}
```

<h3 id="getapiv3remotepathmappingid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[RemotePathMappingResource](#schemaremotepathmappingresource)|
|404|Not Found|Not Found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## put/api/v3/remotepathmapping/{id}

> Code samples

```bash
curl http://localhost:7878/api/v3/remotepathmapping/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}" \
  -d '{
    "id": 0,
    "host": "string",
    "remotePath": "string",
    "localPath": "string"
  }'
```

`PUT /api/v3/remotepathmapping/{id}`

> Body parameter

```json
{
  "id": 0,
  "host": "string",
  "remotePath": "string",
  "localPath": "string"
}
```

<h3 id="putapiv3remotepathmappingid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|body|body|[RemotePathMappingResource](#schemaremotepathmappingresource)|false|none|
|» id|body|integer(int32)|false|none|
|» host|body|string \| null|false|none|
|» remotePath|body|string \| null|false|none|
|» localPath|body|string \| null|false|none|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "host": "string",
  "remotePath": "string",
  "localPath": "string"
}
```

<h3 id="putapiv3remotepathmappingid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[RemotePathMappingResource](#schemaremotepathmappingresource)|
|404|Not Found|Not Found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## delete/api/v3/remotepathmapping/{id}

> Code samples

```bash
curl http://localhost:7878/api/v3/remotepathmapping/0 \
  -X DELETE \
  -H "X-Api-Key: ${API_KEY}"
```

`DELETE /api/v3/remotepathmapping/{id}`

<h3 id="deleteapiv3remotepathmappingid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|none|

<h3 id="deleteapiv3remotepathmappingid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

<h1 id="radarr-renamemovie">RenameMovie</h1>

## get/api/v3/rename

> Code samples

```bash
curl http://localhost:7878/api/v3/rename \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /api/v3/rename`

<h3 id="getapiv3rename-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|movieId|query|[integer(int32)]|false|none|

> Example responses

> 200 Response

```json
[
  {
    "id": 0,
    "movieId": 0,
    "movieFileId": 0,
    "existingPath": "string",
    "newPath": "string"
  }
]
```

<h3 id="getapiv3rename-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|None|

<h3 id="getapiv3rename-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[RenameMovieResource](#schemarenamemovieresource)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

<h1 id="radarr-rootfolder">RootFolder</h1>

## get/api/v3/rootfolder

> Code samples

```bash
curl http://localhost:7878/api/v3/rootfolder \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /api/v3/rootfolder`

> Example responses

> 200 Response

```json
[
  {
    "id": 0,
    "path": "string",
    "accessible": true,
    "freeSpace": 0,
    "unmappedFolders": [
      {
        "name": "string",
        "path": "string",
        "relativePath": "string"
      }
    ]
  }
]
```

<h3 id="getapiv3rootfolder-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="getapiv3rootfolder-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[RootFolderResource](#schemarootfolderresource)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## post/api/v3/rootfolder

> Code samples

```bash
curl http://localhost:7878/api/v3/rootfolder \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}" \
  -d '{
    "id": 0,
    "path": "string",
    "accessible": true,
    "freeSpace": 0,
    "unmappedFolders": [
      {
        "name": "string",
        "path": "string",
        "relativePath": "string"
      }
    ]
  }'
```

`POST /api/v3/rootfolder`

> Body parameter

```json
{
  "id": 0,
  "path": "string",
  "accessible": true,
  "freeSpace": 0,
  "unmappedFolders": [
    {
      "name": "string",
      "path": "string",
      "relativePath": "string"
    }
  ]
}
```

<h3 id="postapiv3rootfolder-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[RootFolderResource](#schemarootfolderresource)|false|none|
|» id|body|integer(int32)|false|none|
|» path|body|string \| null|false|none|
|» accessible|body|boolean|false|none|
|» freeSpace|body|integer(int64) \| null|false|none|
|» unmappedFolders|body|[[UnmappedFolder](#schemaunmappedfolder)]|false|none|

> Example responses

> 201 Response

```json
{
  "id": 0,
  "path": "string",
  "accessible": true,
  "freeSpace": 0,
  "unmappedFolders": [
    {
      "name": "string",
      "path": "string",
      "relativePath": "string"
    }
  ]
}
```

<h3 id="postapiv3rootfolder-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Created|[RootFolderResource](#schemarootfolderresource)|
|404|Not Found|Not Found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## get/api/v3/rootfolder/{id}

> Code samples

```bash
curl http://localhost:7878/api/v3/rootfolder/0 \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /api/v3/rootfolder/{id}`

<h3 id="getapiv3rootfolderid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|none|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "path": "string",
  "accessible": true,
  "freeSpace": 0,
  "unmappedFolders": [
    {
      "name": "string",
      "path": "string",
      "relativePath": "string"
    }
  ]
}
```

<h3 id="getapiv3rootfolderid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[RootFolderResource](#schemarootfolderresource)|
|404|Not Found|Not Found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## delete/api/v3/rootfolder/{id}

> Code samples

```bash
curl http://localhost:7878/api/v3/rootfolder/0 \
  -X DELETE \
  -H "X-Api-Key: ${API_KEY}"
```

`DELETE /api/v3/rootfolder/{id}`

<h3 id="deleteapiv3rootfolderid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|none|

<h3 id="deleteapiv3rootfolderid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

<h1 id="radarr-system">System</h1>

## get/api/v3/system/status

> Code samples

```bash
curl http://localhost:7878/api/v3/system/status \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /api/v3/system/status`

> Example responses

> 200 Response

```json
{
  "appName": "string",
  "instanceName": "string",
  "version": "string",
  "buildTime": "1970-01-01T00:00:00Z",
  "isDebug": true,
  "isProduction": true,
  "isAdmin": true,
  "isUserInteractive": true,
  "startupPath": "string",
  "appData": "string",
  "osName": "string",
  "osVersion": "string",
  "isNetCore": true,
  "isLinux": true,
  "isOsx": true,
  "isWindows": true,
  "isDocker": true,
  "isContainerized": true,
  "mode": "console",
  "branch": "string",
  "databaseType": "sqLite",
  "databaseVersion": "string",
  "authentication": "none",
  "migrationVersion": 0,
  "urlBase": "string",
  "runtimeVersion": "string",
  "runtimeName": "string",
  "startTime": "1970-01-01T00:00:00Z",
  "packageVersion": "string",
  "packageAuthor": "string",
  "packageUpdateMechanism": "builtIn",
  "packageUpdateMechanismMessage": "string"
}
```

<h3 id="getapiv3systemstatus-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[SystemResource](#schemasystemresource)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## get/api/v3/system/routes

> Code samples

```bash
curl http://localhost:7878/api/v3/system/routes \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /api/v3/system/routes`

<h3 id="getapiv3systemroutes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## get/api/v3/system/routes/duplicate

> Code samples

```bash
curl http://localhost:7878/api/v3/system/routes/duplicate \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /api/v3/system/routes/duplicate`

> Example responses

> 200 Response

```json
{
  "property1": [
    "string"
  ],
  "property2": [
    "string"
  ]
}
```

<h3 id="getapiv3systemroutesduplicate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="getapiv3systemroutesduplicate-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[string]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## post/api/v3/system/shutdown

> Code samples

```bash
curl http://localhost:7878/api/v3/system/shutdown \
  -X POST \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}"
```

`POST /api/v3/system/shutdown`

> Example responses

> 200 Response

```json
{
  "shuttingDown": true
}
```

<h3 id="postapiv3systemshutdown-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[SystemShutdownResource](#schemasystemshutdownresource)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## post/api/v3/system/restart

> Code samples

```bash
curl http://localhost:7878/api/v3/system/restart \
  -X POST \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}"
```

`POST /api/v3/system/restart`

> Example responses

> 200 Response

```json
{
  "restarting": true
}
```

<h3 id="postapiv3systemrestart-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[SystemRestartResource](#schemasystemrestartresource)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

<h1 id="radarr-tag">Tag</h1>

## get/api/v3/tag

> Code samples

```bash
curl http://localhost:7878/api/v3/tag \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /api/v3/tag`

> Example responses

> 200 Response

```json
[
  {
    "id": 0,
    "label": "string"
  }
]
```

<h3 id="getapiv3tag-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="getapiv3tag-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[TagResource](#schematagresource)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## post/api/v3/tag

> Code samples

```bash
curl http://localhost:7878/api/v3/tag \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}" \
  -d '{
    "id": 0,
    "label": "string"
  }'
```

`POST /api/v3/tag`

> Body parameter

```json
{
  "id": 0,
  "label": "string"
}
```

<h3 id="postapiv3tag-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[TagResource](#schematagresource)|false|none|
|» id|body|integer(int32)|false|none|
|» label|body|string \| null|false|none|

> Example responses

> 201 Response

```json
{
  "id": 0,
  "label": "string"
}
```

<h3 id="postapiv3tag-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Created|[TagResource](#schematagresource)|
|404|Not Found|Not Found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## get/api/v3/tag/{id}

> Code samples

```bash
curl http://localhost:7878/api/v3/tag/0 \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /api/v3/tag/{id}`

<h3 id="getapiv3tagid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|none|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "label": "string"
}
```

<h3 id="getapiv3tagid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[TagResource](#schematagresource)|
|404|Not Found|Not Found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## put/api/v3/tag/{id}

> Code samples

```bash
curl http://localhost:7878/api/v3/tag/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}" \
  -d '{
    "id": 0,
    "label": "string"
  }'
```

`PUT /api/v3/tag/{id}`

> Body parameter

```json
{
  "id": 0,
  "label": "string"
}
```

<h3 id="putapiv3tagid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|body|body|[TagResource](#schematagresource)|false|none|
|» id|body|integer(int32)|false|none|
|» label|body|string \| null|false|none|

> Example responses

> 202 Response

```json
{
  "id": 0,
  "label": "string"
}
```

<h3 id="putapiv3tagid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|Accepted|[TagResource](#schematagresource)|
|404|Not Found|Not Found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## delete/api/v3/tag/{id}

> Code samples

```bash
curl http://localhost:7878/api/v3/tag/0 \
  -X DELETE \
  -H "X-Api-Key: ${API_KEY}"
```

`DELETE /api/v3/tag/{id}`

<h3 id="deleteapiv3tagid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|none|

<h3 id="deleteapiv3tagid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

<h1 id="radarr-tagdetails">TagDetails</h1>

## get/api/v3/tag/detail

> Code samples

```bash
curl http://localhost:7878/api/v3/tag/detail \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /api/v3/tag/detail`

> Example responses

> 200 Response

```json
[
  {
    "id": 0,
    "label": "string",
    "delayProfileIds": [
      0
    ],
    "importListIds": [
      0
    ],
    "notificationIds": [
      0
    ],
    "releaseProfileIds": [
      0
    ],
    "indexerIds": [
      0
    ],
    "downloadClientIds": [
      0
    ],
    "autoTagIds": [
      0
    ],
    "movieIds": [
      0
    ]
  }
]
```

<h3 id="getapiv3tagdetail-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="getapiv3tagdetail-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[TagDetailsResource](#schematagdetailsresource)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## get/api/v3/tag/detail/{id}

> Code samples

```bash
curl http://localhost:7878/api/v3/tag/detail/0 \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /api/v3/tag/detail/{id}`

<h3 id="getapiv3tagdetailid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|none|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "label": "string",
  "delayProfileIds": [
    0
  ],
  "importListIds": [
    0
  ],
  "notificationIds": [
    0
  ],
  "releaseProfileIds": [
    0
  ],
  "indexerIds": [
    0
  ],
  "downloadClientIds": [
    0
  ],
  "autoTagIds": [
    0
  ],
  "movieIds": [
    0
  ]
}
```

<h3 id="getapiv3tagdetailid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[TagDetailsResource](#schematagdetailsresource)|
|404|Not Found|Not Found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

<h1 id="radarr-task">Task</h1>

## get/api/v3/system/task

> Code samples

```bash
curl http://localhost:7878/api/v3/system/task \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /api/v3/system/task`

> Example responses

> 200 Response

```json
[
  {
    "id": 0,
    "name": "string",
    "taskName": "string",
    "interval": 0,
    "lastExecution": "1970-01-01T00:00:00Z",
    "lastStartTime": "1970-01-01T00:00:00Z",
    "nextExecution": "1970-01-01T00:00:00Z",
    "lastDuration": "string"
  }
]
```

<h3 id="getapiv3systemtask-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="getapiv3systemtask-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[TaskResource](#schemataskresource)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## get/api/v3/system/task/{id}

> Code samples

```bash
curl http://localhost:7878/api/v3/system/task/0 \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /api/v3/system/task/{id}`

<h3 id="getapiv3systemtaskid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|none|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "name": "string",
  "taskName": "string",
  "interval": 0,
  "lastExecution": "1970-01-01T00:00:00Z",
  "lastStartTime": "1970-01-01T00:00:00Z",
  "nextExecution": "1970-01-01T00:00:00Z",
  "lastDuration": "string"
}
```

<h3 id="getapiv3systemtaskid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[TaskResource](#schemataskresource)|
|404|Not Found|Not Found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

<h1 id="radarr-uiconfig">UiConfig</h1>

## get/api/v3/config/ui/{id}

> Code samples

```bash
curl http://localhost:7878/api/v3/config/ui/0 \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /api/v3/config/ui/{id}`

<h3 id="getapiv3configuiid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|none|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "firstDayOfWeek": 0,
  "calendarWeekColumnHeader": "string",
  "movieRuntimeFormat": "hoursMinutes",
  "shortDateFormat": "string",
  "longDateFormat": "string",
  "timeFormat": "string",
  "showRelativeDates": true,
  "enableColorImpairedMode": true,
  "movieInfoLanguage": 0,
  "uiLanguage": 0,
  "theme": "string"
}
```

<h3 id="getapiv3configuiid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[UiConfigResource](#schemauiconfigresource)|
|404|Not Found|Not Found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## put/api/v3/config/ui/{id}

> Code samples

```bash
curl http://localhost:7878/api/v3/config/ui/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}" \
  -d '{
    "id": 0,
    "firstDayOfWeek": 0,
    "calendarWeekColumnHeader": "string",
    "movieRuntimeFormat": "hoursMinutes",
    "shortDateFormat": "string",
    "longDateFormat": "string",
    "timeFormat": "string",
    "showRelativeDates": true,
    "enableColorImpairedMode": true,
    "movieInfoLanguage": 0,
    "uiLanguage": 0,
    "theme": "string"
  }'
```

`PUT /api/v3/config/ui/{id}`

> Body parameter

```json
{
  "id": 0,
  "firstDayOfWeek": 0,
  "calendarWeekColumnHeader": "string",
  "movieRuntimeFormat": "hoursMinutes",
  "shortDateFormat": "string",
  "longDateFormat": "string",
  "timeFormat": "string",
  "showRelativeDates": true,
  "enableColorImpairedMode": true,
  "movieInfoLanguage": 0,
  "uiLanguage": 0,
  "theme": "string"
}
```

<h3 id="putapiv3configuiid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|body|body|[UiConfigResource](#schemauiconfigresource)|false|none|
|» id|body|integer(int32)|false|none|
|» firstDayOfWeek|body|integer(int32)|false|none|
|» calendarWeekColumnHeader|body|string \| null|false|none|
|» movieRuntimeFormat|body|[MovieRuntimeFormatType](#schemamovieruntimeformattype)|false|none|
|» shortDateFormat|body|string \| null|false|none|
|» longDateFormat|body|string \| null|false|none|
|» timeFormat|body|string \| null|false|none|
|» showRelativeDates|body|boolean|false|none|
|» enableColorImpairedMode|body|boolean|false|none|
|» movieInfoLanguage|body|integer(int32)|false|none|
|» uiLanguage|body|integer(int32)|false|none|
|» theme|body|string \| null|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» movieRuntimeFormat|hoursMinutes|
|» movieRuntimeFormat|minutes|

> Example responses

> 202 Response

```json
{
  "id": 0,
  "firstDayOfWeek": 0,
  "calendarWeekColumnHeader": "string",
  "movieRuntimeFormat": "hoursMinutes",
  "shortDateFormat": "string",
  "longDateFormat": "string",
  "timeFormat": "string",
  "showRelativeDates": true,
  "enableColorImpairedMode": true,
  "movieInfoLanguage": 0,
  "uiLanguage": 0,
  "theme": "string"
}
```

<h3 id="putapiv3configuiid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|Accepted|[UiConfigResource](#schemauiconfigresource)|
|404|Not Found|Not Found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## get/api/v3/config/ui

> Code samples

```bash
curl http://localhost:7878/api/v3/config/ui \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /api/v3/config/ui`

> Example responses

> 200 Response

```json
{
  "id": 0,
  "firstDayOfWeek": 0,
  "calendarWeekColumnHeader": "string",
  "movieRuntimeFormat": "hoursMinutes",
  "shortDateFormat": "string",
  "longDateFormat": "string",
  "timeFormat": "string",
  "showRelativeDates": true,
  "enableColorImpairedMode": true,
  "movieInfoLanguage": 0,
  "uiLanguage": 0,
  "theme": "string"
}
```

<h3 id="getapiv3configui-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[UiConfigResource](#schemauiconfigresource)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

<h1 id="radarr-update">Update</h1>

## get/api/v3/update

> Code samples

```bash
curl http://localhost:7878/api/v3/update \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /api/v3/update`

> Example responses

> 200 Response

```json
[
  {
    "id": 0,
    "version": "string",
    "branch": "string",
    "releaseDate": "1970-01-01T00:00:00Z",
    "fileName": "string",
    "url": "string",
    "installed": true,
    "installedOn": "1970-01-01T00:00:00Z",
    "installable": true,
    "latest": true,
    "changes": {
      "new": [
        "string"
      ],
      "fixed": [
        "string"
      ]
    },
    "hash": "string"
  }
]
```

<h3 id="getapiv3update-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="getapiv3update-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[UpdateResource](#schemaupdateresource)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

<h1 id="radarr-updatelogfile">UpdateLogFile</h1>

## get/api/v3/log/file/update

> Code samples

```bash
curl http://localhost:7878/api/v3/log/file/update \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /api/v3/log/file/update`

> Example responses

> 200 Response

```json
[
  {
    "id": 0,
    "filename": "string",
    "lastWriteTime": "1970-01-01T00:00:00Z",
    "contentsUrl": "string",
    "downloadUrl": "string"
  }
]
```

<h3 id="getapiv3logfileupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="getapiv3logfileupdate-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[LogFileResource](#schemalogfileresource)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## get/api/v3/log/file/update/{filename}

> Code samples

```bash
curl http://localhost:7878/api/v3/log/file/update/string \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /api/v3/log/file/update/{filename}`

<h3 id="getapiv3logfileupdatefilename-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|filename|path|string|true|none|

<h3 id="getapiv3logfileupdatefilename-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|404|Not Found|Not Found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

# Schemas

<h2 id="tocS_AddMovieMethod">AddMovieMethod</h2>
<!-- backwards compatibility -->
<a id="schemaaddmoviemethod"></a>
<a id="schema_AddMovieMethod"></a>
<a id="tocSaddmoviemethod"></a>
<a id="tocsaddmoviemethod"></a>

```json
"manual"
```

<h2 id="tocS_AddMovieOptions">AddMovieOptions</h2>
<!-- backwards compatibility -->
<a id="schemaaddmovieoptions"></a>
<a id="schema_AddMovieOptions"></a>
<a id="tocSaddmovieoptions"></a>
<a id="tocsaddmovieoptions"></a>

```json
{
  "ignoreEpisodesWithFiles": true,
  "ignoreEpisodesWithoutFiles": true,
  "monitor": "movieOnly",
  "searchForMovie": true,
  "addMethod": "manual"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ignoreEpisodesWithFiles|boolean|false|none|none|
|ignoreEpisodesWithoutFiles|boolean|false|none|none|
|monitor|[MonitorTypes](#schemamonitortypes)|false|none|none|
|searchForMovie|boolean|false|none|none|
|addMethod|[AddMovieMethod](#schemaaddmoviemethod)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|monitor|movieOnly|
|monitor|movieAndCollection|
|monitor|none|
|addMethod|manual|
|addMethod|list|
|addMethod|collection|

<h2 id="tocS_AlternativeTitle">AlternativeTitle</h2>
<!-- backwards compatibility -->
<a id="schemaalternativetitle"></a>
<a id="schema_AlternativeTitle"></a>
<a id="tocSalternativetitle"></a>
<a id="tocsalternativetitle"></a>

```json
{
  "id": 0,
  "sourceType": "tmdb",
  "movieMetadataId": 0,
  "title": "string",
  "cleanTitle": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|false|none|none|
|sourceType|[SourceType](#schemasourcetype)|false|none|none|
|movieMetadataId|integer(int32)|false|none|none|
|title|string \| null|false|none|none|
|cleanTitle|string \| null|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|sourceType|tmdb|
|sourceType|mappings|
|sourceType|user|
|sourceType|indexer|

<h2 id="tocS_AlternativeTitleResource">AlternativeTitleResource</h2>
<!-- backwards compatibility -->
<a id="schemaalternativetitleresource"></a>
<a id="schema_AlternativeTitleResource"></a>
<a id="tocSalternativetitleresource"></a>
<a id="tocsalternativetitleresource"></a>

```json
{
  "id": 0,
  "sourceType": "tmdb",
  "movieMetadataId": 0,
  "title": "string",
  "cleanTitle": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|false|none|none|
|sourceType|[SourceType](#schemasourcetype)|false|none|none|
|movieMetadataId|integer(int32)|false|none|none|
|title|string \| null|false|none|none|
|cleanTitle|string \| null|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|sourceType|tmdb|
|sourceType|mappings|
|sourceType|user|
|sourceType|indexer|

<h2 id="tocS_ApiInfoResource">ApiInfoResource</h2>
<!-- backwards compatibility -->
<a id="schemaapiinforesource"></a>
<a id="schema_ApiInfoResource"></a>
<a id="tocSapiinforesource"></a>
<a id="tocsapiinforesource"></a>

```json
{
  "current": "string",
  "deprecated": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|current|string \| null|false|none|none|
|deprecated|[string]|false|none|none|

<h2 id="tocS_ApplyTags">ApplyTags</h2>
<!-- backwards compatibility -->
<a id="schemaapplytags"></a>
<a id="schema_ApplyTags"></a>
<a id="tocSapplytags"></a>
<a id="tocsapplytags"></a>

```json
"add"
```

<h2 id="tocS_AuthenticationRequiredType">AuthenticationRequiredType</h2>
<!-- backwards compatibility -->
<a id="schemaauthenticationrequiredtype"></a>
<a id="schema_AuthenticationRequiredType"></a>
<a id="tocSauthenticationrequiredtype"></a>
<a id="tocsauthenticationrequiredtype"></a>

```json
"enabled"
```

<h2 id="tocS_AuthenticationType">AuthenticationType</h2>
<!-- backwards compatibility -->
<a id="schemaauthenticationtype"></a>
<a id="schema_AuthenticationType"></a>
<a id="tocSauthenticationtype"></a>
<a id="tocsauthenticationtype"></a>

```json
"none"
```

<h2 id="tocS_AutoTaggingResource">AutoTaggingResource</h2>
<!-- backwards compatibility -->
<a id="schemaautotaggingresource"></a>
<a id="schema_AutoTaggingResource"></a>
<a id="tocSautotaggingresource"></a>
<a id="tocsautotaggingresource"></a>

```json
{
  "id": 0,
  "name": "string",
  "removeTagsAutomatically": true,
  "tags": [
    0
  ],
  "specifications": [
    {
      "id": 0,
      "name": "string",
      "implementation": "string",
      "implementationName": "string",
      "negate": true,
      "required": true,
      "fields": [
        {
          "order": 0,
          "name": "string",
          "label": "string",
          "unit": "string",
          "helpText": "string",
          "helpTextWarning": "string",
          "helpLink": "string",
          "value": null,
          "type": "string",
          "advanced": true,
          "selectOptions": [
            {
              "value": 0,
              "name": "string",
              "order": 0,
              "hint": "string",
              "dividerAfter": true
            }
          ],
          "selectOptionsProviderAction": "string",
          "section": "string",
          "hidden": "string",
          "privacy": "normal",
          "placeholder": "string",
          "isFloat": true
        }
      ]
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|false|none|none|
|name|string \| null|false|none|none|
|removeTagsAutomatically|boolean|false|none|none|
|tags|[integer(int32)]|false|none|none|
|specifications|[[AutoTaggingSpecificationSchema](#schemaautotaggingspecificationschema)]|false|none|none|

<h2 id="tocS_AutoTaggingSpecificationSchema">AutoTaggingSpecificationSchema</h2>
<!-- backwards compatibility -->
<a id="schemaautotaggingspecificationschema"></a>
<a id="schema_AutoTaggingSpecificationSchema"></a>
<a id="tocSautotaggingspecificationschema"></a>
<a id="tocsautotaggingspecificationschema"></a>

```json
{
  "id": 0,
  "name": "string",
  "implementation": "string",
  "implementationName": "string",
  "negate": true,
  "required": true,
  "fields": [
    {
      "order": 0,
      "name": "string",
      "label": "string",
      "unit": "string",
      "helpText": "string",
      "helpTextWarning": "string",
      "helpLink": "string",
      "value": null,
      "type": "string",
      "advanced": true,
      "selectOptions": [
        {
          "value": 0,
          "name": "string",
          "order": 0,
          "hint": "string",
          "dividerAfter": true
        }
      ],
      "selectOptionsProviderAction": "string",
      "section": "string",
      "hidden": "string",
      "privacy": "normal",
      "placeholder": "string",
      "isFloat": true
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|false|none|none|
|name|string \| null|false|none|none|
|implementation|string \| null|false|none|none|
|implementationName|string \| null|false|none|none|
|negate|boolean|false|none|none|
|required|boolean|false|none|none|
|fields|[[Field](#schemafield)]|false|none|none|

<h2 id="tocS_BackupResource">BackupResource</h2>
<!-- backwards compatibility -->
<a id="schemabackupresource"></a>
<a id="schema_BackupResource"></a>
<a id="tocSbackupresource"></a>
<a id="tocsbackupresource"></a>

```json
{
  "id": 0,
  "name": "string",
  "path": "string",
  "type": "scheduled",
  "size": 0,
  "time": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|false|none|none|
|name|string \| null|false|none|none|
|path|string \| null|false|none|none|
|type|[BackupType](#schemabackuptype)|false|none|none|
|size|integer(int64)|false|none|none|
|time|string(date-time)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|scheduled|
|type|manual|
|type|update|

<h2 id="tocS_BackupRestoreErrorResource">BackupRestoreErrorResource</h2>
<!-- backwards compatibility -->
<a id="schemabackuprestoreerrorresource"></a>
<a id="schema_BackupRestoreErrorResource"></a>
<a id="tocSbackuprestoreerrorresource"></a>
<a id="tocsbackuprestoreerrorresource"></a>

```json
{
  "error": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string \| null|false|none|none|

<h2 id="tocS_BackupRestoreResource">BackupRestoreResource</h2>
<!-- backwards compatibility -->
<a id="schemabackuprestoreresource"></a>
<a id="schema_BackupRestoreResource"></a>
<a id="tocSbackuprestoreresource"></a>
<a id="tocsbackuprestoreresource"></a>

```json
{
  "restartRequired": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|restartRequired|boolean|false|none|none|

<h2 id="tocS_BackupType">BackupType</h2>
<!-- backwards compatibility -->
<a id="schemabackuptype"></a>
<a id="schema_BackupType"></a>
<a id="tocSbackuptype"></a>
<a id="tocsbackuptype"></a>

```json
"scheduled"
```

<h2 id="tocS_BlocklistBulkResource">BlocklistBulkResource</h2>
<!-- backwards compatibility -->
<a id="schemablocklistbulkresource"></a>
<a id="schema_BlocklistBulkResource"></a>
<a id="tocSblocklistbulkresource"></a>
<a id="tocsblocklistbulkresource"></a>

```json
{
  "ids": [
    0
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ids|[integer(int32)]|false|none|none|

<h2 id="tocS_BlocklistResource">BlocklistResource</h2>
<!-- backwards compatibility -->
<a id="schemablocklistresource"></a>
<a id="schema_BlocklistResource"></a>
<a id="tocSblocklistresource"></a>
<a id="tocsblocklistresource"></a>

```json
{
  "id": 0,
  "movieId": 0,
  "sourceTitle": "string",
  "languages": [
    {
      "id": 0,
      "name": "string"
    }
  ],
  "quality": {
    "quality": {
      "id": 0,
      "name": "string",
      "source": "unknown",
      "resolution": 0,
      "modifier": "none"
    },
    "revision": {
      "version": 0,
      "real": 0,
      "isRepack": true
    }
  },
  "customFormats": [
    {
      "id": 0,
      "name": "string",
      "includeCustomFormatWhenRenaming": true,
      "specifications": [
        {
          "id": 0,
          "name": "string",
          "implementation": "string",
          "implementationName": "string",
          "infoLink": "string",
          "negate": true,
          "required": true,
          "fields": [
            {
              "order": 0,
              "name": "string",
              "label": "string",
              "unit": "string",
              "helpText": "string",
              "helpTextWarning": "string",
              "helpLink": "string",
              "value": null,
              "type": "string",
              "advanced": true,
              "selectOptions": [
                {
                  "value": 0,
                  "name": "string",
                  "order": 0,
                  "hint": "string",
                  "dividerAfter": true
                }
              ],
              "selectOptionsProviderAction": "string",
              "section": "string",
              "hidden": "string",
              "privacy": "normal",
              "placeholder": "string",
              "isFloat": true
            }
          ],
          "presets": [
            {}
          ]
        }
      ]
    }
  ],
  "date": "1970-01-01T00:00:00Z",
  "protocol": "unknown",
  "indexer": "string",
  "message": "string",
  "movie": {
    "id": 0,
    "title": "string",
    "originalTitle": "string",
    "originalLanguage": {
      "id": 0,
      "name": "string"
    },
    "alternateTitles": [
      {
        "id": 0,
        "sourceType": "tmdb",
        "movieMetadataId": 0,
        "title": "string",
        "cleanTitle": "string"
      }
    ],
    "secondaryYear": 0,
    "secondaryYearSourceId": 0,
    "sortTitle": "string",
    "sizeOnDisk": 0,
    "status": "tba",
    "overview": "string",
    "inCinemas": "1970-01-01T00:00:00Z",
    "physicalRelease": "1970-01-01T00:00:00Z",
    "digitalRelease": "1970-01-01T00:00:00Z",
    "releaseDate": "1970-01-01T00:00:00Z",
    "physicalReleaseNote": "string",
    "images": [
      {
        "coverType": "unknown",
        "url": "string",
        "remoteUrl": "string"
      }
    ],
    "website": "string",
    "remotePoster": "string",
    "year": 0,
    "youTubeTrailerId": "string",
    "studio": "string",
    "path": "string",
    "qualityProfileId": 0,
    "hasFile": true,
    "movieFileId": 0,
    "monitored": true,
    "minimumAvailability": "tba",
    "isAvailable": true,
    "folderName": "string",
    "runtime": 0,
    "cleanTitle": "string",
    "imdbId": "string",
    "tmdbId": 0,
    "titleSlug": "string",
    "rootFolderPath": "string",
    "folder": "string",
    "certification": "string",
    "genres": [
      "string"
    ],
    "keywords": [
      "string"
    ],
    "tags": [
      0
    ],
    "added": "1970-01-01T00:00:00Z",
    "addOptions": {
      "ignoreEpisodesWithFiles": true,
      "ignoreEpisodesWithoutFiles": true,
      "monitor": "movieOnly",
      "searchForMovie": true,
      "addMethod": "manual"
    },
    "ratings": {
      "imdb": {
        "votes": 0,
        "value": 0,
        "type": "user"
      },
      "tmdb": {
        "votes": 0,
        "value": 0,
        "type": "user"
      },
      "metacritic": {
        "votes": 0,
        "value": 0,
        "type": "user"
      },
      "rottenTomatoes": {
        "votes": 0,
        "value": 0,
        "type": "user"
      },
      "trakt": {
        "votes": 0,
        "value": 0,
        "type": "user"
      }
    },
    "movieFile": {
      "id": 0,
      "movieId": 0,
      "relativePath": "string",
      "path": "string",
      "size": 0,
      "dateAdded": "1970-01-01T00:00:00Z",
      "sceneName": "string",
      "releaseGroup": "string",
      "edition": "string",
      "languages": [
        {
          "id": 0,
          "name": "string"
        }
      ],
      "quality": {
        "quality": {
          "id": 0,
          "name": "string",
          "source": "unknown",
          "resolution": 0,
          "modifier": "none"
        },
        "revision": {
          "version": 0,
          "real": 0,
          "isRepack": true
        }
      },
      "customFormats": [
        {
          "id": 0,
          "name": "string",
          "includeCustomFormatWhenRenaming": true,
          "specifications": [
            {
              "id": 0,
              "name": "string",
              "implementation": "string",
              "implementationName": "string",
              "infoLink": "string",
              "negate": true,
              "required": true,
              "fields": [
                {
                  "order": 0,
                  "name": "string",
                  "label": "string",
                  "unit": "string",
                  "helpText": "string",
                  "helpTextWarning": "string",
                  "helpLink": "string",
                  "value": null,
                  "type": "string",
                  "advanced": true,
                  "selectOptions": [
                    {
                      "value": 0,
                      "name": "string",
                      "order": 0,
                      "hint": "string",
                      "dividerAfter": true
                    }
                  ],
                  "selectOptionsProviderAction": "string",
                  "section": "string",
                  "hidden": "string",
                  "privacy": "normal",
                  "placeholder": "string",
                  "isFloat": true
                }
              ],
              "presets": [
                {}
              ]
            }
          ]
        }
      ],
      "customFormatScore": 0,
      "indexerFlags": 0,
      "mediaInfo": {
        "id": 0,
        "audioBitrate": 0,
        "audioChannels": 0,
        "audioCodec": "string",
        "audioLanguages": "string",
        "audioStreamCount": 0,
        "videoBitDepth": 0,
        "videoBitrate": 0,
        "videoCodec": "string",
        "videoFps": 0,
        "videoDynamicRange": "string",
        "videoDynamicRangeType": "string",
        "resolution": "string",
        "runTime": "string",
        "scanType": "string",
        "subtitles": "string"
      },
      "originalFilePath": "string",
      "qualityCutoffNotMet": true
    },
    "collection": {
      "title": "string",
      "tmdbId": 0
    },
    "popularity": 0,
    "lastSearchTime": "1970-01-01T00:00:00Z",
    "statistics": {
      "movieFileCount": 0,
      "sizeOnDisk": 0,
      "releaseGroups": [
        "string"
      ],
      "movieFileQualities": [
        {
          "id": 0,
          "name": "string",
          "source": "unknown",
          "resolution": 0,
          "modifier": "none"
        }
      ]
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|false|none|none|
|movieId|integer(int32)|false|none|none|
|sourceTitle|string \| null|false|none|none|
|languages|[[Language](#schemalanguage)]|false|none|none|
|quality|[QualityModel](#schemaqualitymodel)|false|none|none|
|customFormats|[[CustomFormatResource](#schemacustomformatresource)]|false|none|none|
|date|string(date-time)|false|none|none|
|protocol|[DownloadProtocol](#schemadownloadprotocol)|false|none|none|
|indexer|string \| null|false|none|none|
|message|string \| null|false|none|none|
|movie|[MovieResource](#schemamovieresource)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|protocol|unknown|
|protocol|usenet|
|protocol|torrent|

<h2 id="tocS_BlocklistResourcePagingResource">BlocklistResourcePagingResource</h2>
<!-- backwards compatibility -->
<a id="schemablocklistresourcepagingresource"></a>
<a id="schema_BlocklistResourcePagingResource"></a>
<a id="tocSblocklistresourcepagingresource"></a>
<a id="tocsblocklistresourcepagingresource"></a>

```json
{
  "page": 0,
  "pageSize": 0,
  "sortKey": "string",
  "sortDirection": "default",
  "totalRecords": 0,
  "records": [
    {
      "id": 0,
      "movieId": 0,
      "sourceTitle": "string",
      "languages": [
        {
          "id": 0,
          "name": "string"
        }
      ],
      "quality": {
        "quality": {
          "id": 0,
          "name": "string",
          "source": "unknown",
          "resolution": 0,
          "modifier": "none"
        },
        "revision": {
          "version": 0,
          "real": 0,
          "isRepack": true
        }
      },
      "customFormats": [
        {
          "id": 0,
          "name": "string",
          "includeCustomFormatWhenRenaming": true,
          "specifications": [
            {
              "id": 0,
              "name": "string",
              "implementation": "string",
              "implementationName": "string",
              "infoLink": "string",
              "negate": true,
              "required": true,
              "fields": [
                {
                  "order": 0,
                  "name": "string",
                  "label": "string",
                  "unit": "string",
                  "helpText": "string",
                  "helpTextWarning": "string",
                  "helpLink": "string",
                  "value": null,
                  "type": "string",
                  "advanced": true,
                  "selectOptions": [
                    {
                      "value": 0,
                      "name": "string",
                      "order": 0,
                      "hint": "string",
                      "dividerAfter": true
                    }
                  ],
                  "selectOptionsProviderAction": "string",
                  "section": "string",
                  "hidden": "string",
                  "privacy": "normal",
                  "placeholder": "string",
                  "isFloat": true
                }
              ],
              "presets": [
                {}
              ]
            }
          ]
        }
      ],
      "date": "1970-01-01T00:00:00Z",
      "protocol": "unknown",
      "indexer": "string",
      "message": "string",
      "movie": {
        "id": 0,
        "title": "string",
        "originalTitle": "string",
        "originalLanguage": {
          "id": 0,
          "name": "string"
        },
        "alternateTitles": [
          {
            "id": 0,
            "sourceType": "tmdb",
            "movieMetadataId": 0,
            "title": "string",
            "cleanTitle": "string"
          }
        ],
        "secondaryYear": 0,
        "secondaryYearSourceId": 0,
        "sortTitle": "string",
        "sizeOnDisk": 0,
        "status": "tba",
        "overview": "string",
        "inCinemas": "1970-01-01T00:00:00Z",
        "physicalRelease": "1970-01-01T00:00:00Z",
        "digitalRelease": "1970-01-01T00:00:00Z",
        "releaseDate": "1970-01-01T00:00:00Z",
        "physicalReleaseNote": "string",
        "images": [
          {
            "coverType": "unknown",
            "url": "string",
            "remoteUrl": "string"
          }
        ],
        "website": "string",
        "remotePoster": "string",
        "year": 0,
        "youTubeTrailerId": "string",
        "studio": "string",
        "path": "string",
        "qualityProfileId": 0,
        "hasFile": true,
        "movieFileId": 0,
        "monitored": true,
        "minimumAvailability": "tba",
        "isAvailable": true,
        "folderName": "string",
        "runtime": 0,
        "cleanTitle": "string",
        "imdbId": "string",
        "tmdbId": 0,
        "titleSlug": "string",
        "rootFolderPath": "string",
        "folder": "string",
        "certification": "string",
        "genres": [
          "string"
        ],
        "keywords": [
          "string"
        ],
        "tags": [
          0
        ],
        "added": "1970-01-01T00:00:00Z",
        "addOptions": {
          "ignoreEpisodesWithFiles": true,
          "ignoreEpisodesWithoutFiles": true,
          "monitor": "movieOnly",
          "searchForMovie": true,
          "addMethod": "manual"
        },
        "ratings": {
          "imdb": {
            "votes": 0,
            "value": 0,
            "type": "user"
          },
          "tmdb": {
            "votes": 0,
            "value": 0,
            "type": "user"
          },
          "metacritic": {
            "votes": 0,
            "value": 0,
            "type": "user"
          },
          "rottenTomatoes": {
            "votes": 0,
            "value": 0,
            "type": "user"
          },
          "trakt": {
            "votes": 0,
            "value": 0,
            "type": "user"
          }
        },
        "movieFile": {
          "id": 0,
          "movieId": 0,
          "relativePath": "string",
          "path": "string",
          "size": 0,
          "dateAdded": "1970-01-01T00:00:00Z",
          "sceneName": "string",
          "releaseGroup": "string",
          "edition": "string",
          "languages": [
            {
              "id": 0,
              "name": "string"
            }
          ],
          "quality": {
            "quality": {
              "id": 0,
              "name": "string",
              "source": "unknown",
              "resolution": 0,
              "modifier": "none"
            },
            "revision": {
              "version": 0,
              "real": 0,
              "isRepack": true
            }
          },
          "customFormats": [
            {
              "id": 0,
              "name": "string",
              "includeCustomFormatWhenRenaming": true,
              "specifications": [
                {
                  "id": 0,
                  "name": "string",
                  "implementation": "string",
                  "implementationName": "string",
                  "infoLink": "string",
                  "negate": true,
                  "required": true,
                  "fields": [
                    {
                      "order": 0,
                      "name": "string",
                      "label": "string",
                      "unit": "string",
                      "helpText": "string",
                      "helpTextWarning": "string",
                      "helpLink": "string",
                      "value": null,
                      "type": "string",
                      "advanced": true,
                      "selectOptions": [
                        {
                          "value": 0,
                          "name": "string",
                          "order": 0,
                          "hint": "string",
                          "dividerAfter": true
                        }
                      ],
                      "selectOptionsProviderAction": "string",
                      "section": "string",
                      "hidden": "string",
                      "privacy": "normal",
                      "placeholder": "string",
                      "isFloat": true
                    }
                  ],
                  "presets": [
                    {}
                  ]
                }
              ]
            }
          ],
          "customFormatScore": 0,
          "indexerFlags": 0,
          "mediaInfo": {
            "id": 0,
            "audioBitrate": 0,
            "audioChannels": 0,
            "audioCodec": "string",
            "audioLanguages": "string",
            "audioStreamCount": 0,
            "videoBitDepth": 0,
            "videoBitrate": 0,
            "videoCodec": "string",
            "videoFps": 0,
            "videoDynamicRange": "string",
            "videoDynamicRangeType": "string",
            "resolution": "string",
            "runTime": "string",
            "scanType": "string",
            "subtitles": "string"
          },
          "originalFilePath": "string",
          "qualityCutoffNotMet": true
        },
        "collection": {
          "title": "string",
          "tmdbId": 0
        },
        "popularity": 0,
        "lastSearchTime": "1970-01-01T00:00:00Z",
        "statistics": {
          "movieFileCount": 0,
          "sizeOnDisk": 0,
          "releaseGroups": [
            "string"
          ],
          "movieFileQualities": [
            {
              "id": 0,
              "name": "string",
              "source": "unknown",
              "resolution": 0,
              "modifier": "none"
            }
          ]
        }
      }
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|page|integer(int32)|false|none|none|
|pageSize|integer(int32)|false|none|none|
|sortKey|string \| null|false|none|none|
|sortDirection|[SortDirection](#schemasortdirection)|false|none|none|
|totalRecords|integer(int32)|false|none|none|
|records|[[BlocklistResource](#schemablocklistresource)]|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|sortDirection|default|
|sortDirection|ascending|
|sortDirection|descending|

<h2 id="tocS_CalendarReleaseType">CalendarReleaseType</h2>
<!-- backwards compatibility -->
<a id="schemacalendarreleasetype"></a>
<a id="schema_CalendarReleaseType"></a>
<a id="tocScalendarreleasetype"></a>
<a id="tocscalendarreleasetype"></a>

```json
"cinemaRelease"
```

<h2 id="tocS_CertificateValidationType">CertificateValidationType</h2>
<!-- backwards compatibility -->
<a id="schemacertificatevalidationtype"></a>
<a id="schema_CertificateValidationType"></a>
<a id="tocScertificatevalidationtype"></a>
<a id="tocscertificatevalidationtype"></a>

```json
"enabled"
```

<h2 id="tocS_CollectionMovieResource">CollectionMovieResource</h2>
<!-- backwards compatibility -->
<a id="schemacollectionmovieresource"></a>
<a id="schema_CollectionMovieResource"></a>
<a id="tocScollectionmovieresource"></a>
<a id="tocscollectionmovieresource"></a>

```json
{
  "tmdbId": 0,
  "imdbId": "string",
  "title": "string",
  "cleanTitle": "string",
  "sortTitle": "string",
  "status": "tba",
  "overview": "string",
  "runtime": 0,
  "images": [
    {
      "coverType": "unknown",
      "url": "string",
      "remoteUrl": "string"
    }
  ],
  "year": 0,
  "ratings": {
    "imdb": {
      "votes": 0,
      "value": 0,
      "type": "user"
    },
    "tmdb": {
      "votes": 0,
      "value": 0,
      "type": "user"
    },
    "metacritic": {
      "votes": 0,
      "value": 0,
      "type": "user"
    },
    "rottenTomatoes": {
      "votes": 0,
      "value": 0,
      "type": "user"
    },
    "trakt": {
      "votes": 0,
      "value": 0,
      "type": "user"
    }
  },
  "genres": [
    "string"
  ],
  "folder": "string",
  "isExisting": true,
  "isExcluded": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|tmdbId|integer(int32)|false|none|none|
|imdbId|string \| null|false|none|none|
|title|string \| null|false|none|none|
|cleanTitle|string \| null|false|none|none|
|sortTitle|string \| null|false|none|none|
|status|[MovieStatusType](#schemamoviestatustype)|false|none|none|
|overview|string \| null|false|none|none|
|runtime|integer(int32)|false|none|none|
|images|[[MediaCover](#schemamediacover)]|false|none|none|
|year|integer(int32)|false|none|none|
|ratings|[Ratings](#schemaratings)|false|none|none|
|genres|[string]|false|none|none|
|folder|string \| null|false|none|none|
|isExisting|boolean|false|none|none|
|isExcluded|boolean|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|tba|
|status|announced|
|status|inCinemas|
|status|released|
|status|deleted|

<h2 id="tocS_CollectionResource">CollectionResource</h2>
<!-- backwards compatibility -->
<a id="schemacollectionresource"></a>
<a id="schema_CollectionResource"></a>
<a id="tocScollectionresource"></a>
<a id="tocscollectionresource"></a>

```json
{
  "id": 0,
  "title": "string",
  "sortTitle": "string",
  "tmdbId": 0,
  "images": [
    {
      "coverType": "unknown",
      "url": "string",
      "remoteUrl": "string"
    }
  ],
  "overview": "string",
  "monitored": true,
  "rootFolderPath": "string",
  "qualityProfileId": 0,
  "searchOnAdd": true,
  "minimumAvailability": "tba",
  "movies": [
    {
      "tmdbId": 0,
      "imdbId": "string",
      "title": "string",
      "cleanTitle": "string",
      "sortTitle": "string",
      "status": "tba",
      "overview": "string",
      "runtime": 0,
      "images": [
        {
          "coverType": "unknown",
          "url": "string",
          "remoteUrl": "string"
        }
      ],
      "year": 0,
      "ratings": {
        "imdb": {
          "votes": 0,
          "value": 0,
          "type": "user"
        },
        "tmdb": {
          "votes": 0,
          "value": 0,
          "type": "user"
        },
        "metacritic": {
          "votes": 0,
          "value": 0,
          "type": "user"
        },
        "rottenTomatoes": {
          "votes": 0,
          "value": 0,
          "type": "user"
        },
        "trakt": {
          "votes": 0,
          "value": 0,
          "type": "user"
        }
      },
      "genres": [
        "string"
      ],
      "folder": "string",
      "isExisting": true,
      "isExcluded": true
    }
  ],
  "missingMovies": 0,
  "tags": [
    0
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|false|none|none|
|title|string \| null|false|none|none|
|sortTitle|string \| null|false|none|none|
|tmdbId|integer(int32)|false|none|none|
|images|[[MediaCover](#schemamediacover)]|false|none|none|
|overview|string \| null|false|none|none|
|monitored|boolean|false|none|none|
|rootFolderPath|string \| null|false|none|none|
|qualityProfileId|integer(int32)|false|none|none|
|searchOnAdd|boolean|false|none|none|
|minimumAvailability|[MovieStatusType](#schemamoviestatustype)|false|none|none|
|movies|[[CollectionMovieResource](#schemacollectionmovieresource)]|false|none|none|
|missingMovies|integer(int32)|false|none|none|
|tags|[integer(int32)]|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|minimumAvailability|tba|
|minimumAvailability|announced|
|minimumAvailability|inCinemas|
|minimumAvailability|released|
|minimumAvailability|deleted|

<h2 id="tocS_CollectionUpdateResource">CollectionUpdateResource</h2>
<!-- backwards compatibility -->
<a id="schemacollectionupdateresource"></a>
<a id="schema_CollectionUpdateResource"></a>
<a id="tocScollectionupdateresource"></a>
<a id="tocscollectionupdateresource"></a>

```json
{
  "collectionIds": [
    0
  ],
  "monitored": true,
  "monitorMovies": true,
  "searchOnAdd": true,
  "qualityProfileId": 0,
  "rootFolderPath": "string",
  "minimumAvailability": "tba"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|collectionIds|[integer(int32)]|false|none|none|
|monitored|boolean \| null|false|none|none|
|monitorMovies|boolean \| null|false|none|none|
|searchOnAdd|boolean \| null|false|none|none|
|qualityProfileId|integer(int32) \| null|false|none|none|
|rootFolderPath|string \| null|false|none|none|
|minimumAvailability|[MovieStatusType](#schemamoviestatustype)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|minimumAvailability|tba|
|minimumAvailability|announced|
|minimumAvailability|inCinemas|
|minimumAvailability|released|
|minimumAvailability|deleted|

<h2 id="tocS_ColonReplacementFormat">ColonReplacementFormat</h2>
<!-- backwards compatibility -->
<a id="schemacolonreplacementformat"></a>
<a id="schema_ColonReplacementFormat"></a>
<a id="tocScolonreplacementformat"></a>
<a id="tocscolonreplacementformat"></a>

```json
"delete"
```

<h2 id="tocS_Command">Command</h2>
<!-- backwards compatibility -->
<a id="schemacommand"></a>
<a id="schema_Command"></a>
<a id="tocScommand"></a>
<a id="tocscommand"></a>

```json
{
  "sendUpdatesToClient": true,
  "updateScheduledTask": true,
  "completionMessage": "string",
  "requiresDiskAccess": true,
  "isExclusive": true,
  "isTypeExclusive": true,
  "isLongRunning": true,
  "name": "string",
  "lastExecutionTime": "1970-01-01T00:00:00Z",
  "lastStartTime": "1970-01-01T00:00:00Z",
  "trigger": "unspecified",
  "suppressMessages": true,
  "clientUserAgent": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|sendUpdatesToClient|boolean|false|none|none|
|updateScheduledTask|boolean|false|read-only|none|
|completionMessage|string \| null|false|read-only|none|
|requiresDiskAccess|boolean|false|read-only|none|
|isExclusive|boolean|false|read-only|none|
|isTypeExclusive|boolean|false|read-only|none|
|isLongRunning|boolean|false|read-only|none|
|name|string \| null|false|read-only|none|
|lastExecutionTime|string(date-time) \| null|false|none|none|
|lastStartTime|string(date-time) \| null|false|none|none|
|trigger|[CommandTrigger](#schemacommandtrigger)|false|none|none|
|suppressMessages|boolean|false|none|none|
|clientUserAgent|string \| null|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|trigger|unspecified|
|trigger|manual|
|trigger|scheduled|

<h2 id="tocS_CommandPriority">CommandPriority</h2>
<!-- backwards compatibility -->
<a id="schemacommandpriority"></a>
<a id="schema_CommandPriority"></a>
<a id="tocScommandpriority"></a>
<a id="tocscommandpriority"></a>

```json
"normal"
```

<h2 id="tocS_CommandResource">CommandResource</h2>
<!-- backwards compatibility -->
<a id="schemacommandresource"></a>
<a id="schema_CommandResource"></a>
<a id="tocScommandresource"></a>
<a id="tocscommandresource"></a>

```json
{
  "id": 0,
  "name": "string",
  "commandName": "string",
  "message": "string",
  "body": {
    "sendUpdatesToClient": true,
    "updateScheduledTask": true,
    "completionMessage": "string",
    "requiresDiskAccess": true,
    "isExclusive": true,
    "isTypeExclusive": true,
    "isLongRunning": true,
    "name": "string",
    "lastExecutionTime": "1970-01-01T00:00:00Z",
    "lastStartTime": "1970-01-01T00:00:00Z",
    "trigger": "unspecified",
    "suppressMessages": true,
    "clientUserAgent": "string"
  },
  "priority": "normal",
  "status": "queued",
  "result": "unknown",
  "queued": "1970-01-01T00:00:00Z",
  "started": "1970-01-01T00:00:00Z",
  "ended": "1970-01-01T00:00:00Z",
  "duration": "string",
  "exception": "string",
  "trigger": "unspecified",
  "clientUserAgent": "string",
  "stateChangeTime": "1970-01-01T00:00:00Z",
  "sendUpdatesToClient": true,
  "updateScheduledTask": true,
  "lastExecutionTime": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|false|none|none|
|name|string \| null|false|none|none|
|commandName|string \| null|false|none|none|
|message|string \| null|false|none|none|
|body|[Command](#schemacommand)|false|none|none|
|priority|[CommandPriority](#schemacommandpriority)|false|none|none|
|status|[CommandStatus](#schemacommandstatus)|false|none|none|
|result|[CommandResult](#schemacommandresult)|false|none|none|
|queued|string(date-time)|false|none|none|
|started|string(date-time) \| null|false|none|none|
|ended|string(date-time) \| null|false|none|none|
|duration|string(date-span) \| null|false|none|none|
|exception|string \| null|false|none|none|
|trigger|[CommandTrigger](#schemacommandtrigger)|false|none|none|
|clientUserAgent|string \| null|false|none|none|
|stateChangeTime|string(date-time) \| null|false|none|none|
|sendUpdatesToClient|boolean|false|none|none|
|updateScheduledTask|boolean|false|none|none|
|lastExecutionTime|string(date-time) \| null|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|priority|normal|
|priority|high|
|priority|low|
|status|queued|
|status|started|
|status|completed|
|status|failed|
|status|aborted|
|status|cancelled|
|status|orphaned|
|result|unknown|
|result|successful|
|result|unsuccessful|
|trigger|unspecified|
|trigger|manual|
|trigger|scheduled|

<h2 id="tocS_CommandResult">CommandResult</h2>
<!-- backwards compatibility -->
<a id="schemacommandresult"></a>
<a id="schema_CommandResult"></a>
<a id="tocScommandresult"></a>
<a id="tocscommandresult"></a>

```json
"unknown"
```

<h2 id="tocS_CommandStatus">CommandStatus</h2>
<!-- backwards compatibility -->
<a id="schemacommandstatus"></a>
<a id="schema_CommandStatus"></a>
<a id="tocScommandstatus"></a>
<a id="tocscommandstatus"></a>

```json
"queued"
```

<h2 id="tocS_CommandTrigger">CommandTrigger</h2>
<!-- backwards compatibility -->
<a id="schemacommandtrigger"></a>
<a id="schema_CommandTrigger"></a>
<a id="tocScommandtrigger"></a>
<a id="tocscommandtrigger"></a>

```json
"unspecified"
```

<h2 id="tocS_CreditResource">CreditResource</h2>
<!-- backwards compatibility -->
<a id="schemacreditresource"></a>
<a id="schema_CreditResource"></a>
<a id="tocScreditresource"></a>
<a id="tocscreditresource"></a>

```json
{
  "id": 0,
  "personName": "string",
  "creditTmdbId": "string",
  "personTmdbId": 0,
  "movieMetadataId": 0,
  "images": [
    {
      "coverType": "unknown",
      "url": "string",
      "remoteUrl": "string"
    }
  ],
  "department": "string",
  "job": "string",
  "character": "string",
  "order": 0,
  "type": "cast"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|false|none|none|
|personName|string \| null|false|none|none|
|creditTmdbId|string \| null|false|none|none|
|personTmdbId|integer(int32)|false|none|none|
|movieMetadataId|integer(int32)|false|none|none|
|images|[[MediaCover](#schemamediacover)]|false|none|none|
|department|string \| null|false|none|none|
|job|string \| null|false|none|none|
|character|string \| null|false|none|none|
|order|integer(int32)|false|none|none|
|type|[CreditType](#schemacredittype)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|cast|
|type|crew|

<h2 id="tocS_CreditType">CreditType</h2>
<!-- backwards compatibility -->
<a id="schemacredittype"></a>
<a id="schema_CreditType"></a>
<a id="tocScredittype"></a>
<a id="tocscredittype"></a>

```json
"cast"
```

<h2 id="tocS_CustomFilterResource">CustomFilterResource</h2>
<!-- backwards compatibility -->
<a id="schemacustomfilterresource"></a>
<a id="schema_CustomFilterResource"></a>
<a id="tocScustomfilterresource"></a>
<a id="tocscustomfilterresource"></a>

```json
{
  "id": 0,
  "type": "string",
  "label": "string",
  "filters": [
    {
      "property1": null,
      "property2": null
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|false|none|none|
|type|string \| null|false|none|none|
|label|string \| null|false|none|none|
|filters|[object]|false|none|none|

<h2 id="tocS_CustomFormatBulkResource">CustomFormatBulkResource</h2>
<!-- backwards compatibility -->
<a id="schemacustomformatbulkresource"></a>
<a id="schema_CustomFormatBulkResource"></a>
<a id="tocScustomformatbulkresource"></a>
<a id="tocscustomformatbulkresource"></a>

```json
{
  "ids": [
    0
  ],
  "includeCustomFormatWhenRenaming": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ids|[integer(int32)]|false|none|none|
|includeCustomFormatWhenRenaming|boolean \| null|false|none|none|

<h2 id="tocS_CustomFormatResource">CustomFormatResource</h2>
<!-- backwards compatibility -->
<a id="schemacustomformatresource"></a>
<a id="schema_CustomFormatResource"></a>
<a id="tocScustomformatresource"></a>
<a id="tocscustomformatresource"></a>

```json
{
  "id": 0,
  "name": "string",
  "includeCustomFormatWhenRenaming": true,
  "specifications": [
    {
      "id": 0,
      "name": "string",
      "implementation": "string",
      "implementationName": "string",
      "infoLink": "string",
      "negate": true,
      "required": true,
      "fields": [
        {
          "order": 0,
          "name": "string",
          "label": "string",
          "unit": "string",
          "helpText": "string",
          "helpTextWarning": "string",
          "helpLink": "string",
          "value": null,
          "type": "string",
          "advanced": true,
          "selectOptions": [
            {
              "value": 0,
              "name": "string",
              "order": 0,
              "hint": "string",
              "dividerAfter": true
            }
          ],
          "selectOptionsProviderAction": "string",
          "section": "string",
          "hidden": "string",
          "privacy": "normal",
          "placeholder": "string",
          "isFloat": true
        }
      ],
      "presets": [
        {}
      ]
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|false|none|none|
|name|string \| null|false|none|none|
|includeCustomFormatWhenRenaming|boolean \| null|false|none|none|
|specifications|[[CustomFormatSpecificationSchema](#schemacustomformatspecificationschema)]|false|none|none|

<h2 id="tocS_CustomFormatSpecificationSchema">CustomFormatSpecificationSchema</h2>
<!-- backwards compatibility -->
<a id="schemacustomformatspecificationschema"></a>
<a id="schema_CustomFormatSpecificationSchema"></a>
<a id="tocScustomformatspecificationschema"></a>
<a id="tocscustomformatspecificationschema"></a>

```json
{
  "id": 0,
  "name": "string",
  "implementation": "string",
  "implementationName": "string",
  "infoLink": "string",
  "negate": true,
  "required": true,
  "fields": [
    {
      "order": 0,
      "name": "string",
      "label": "string",
      "unit": "string",
      "helpText": "string",
      "helpTextWarning": "string",
      "helpLink": "string",
      "value": null,
      "type": "string",
      "advanced": true,
      "selectOptions": [
        {
          "value": 0,
          "name": "string",
          "order": 0,
          "hint": "string",
          "dividerAfter": true
        }
      ],
      "selectOptionsProviderAction": "string",
      "section": "string",
      "hidden": "string",
      "privacy": "normal",
      "placeholder": "string",
      "isFloat": true
    }
  ],
  "presets": [
    {
      "id": 0,
      "name": "string",
      "implementation": "string",
      "implementationName": "string",
      "infoLink": "string",
      "negate": true,
      "required": true,
      "fields": [
        {
          "order": 0,
          "name": "string",
          "label": "string",
          "unit": "string",
          "helpText": "string",
          "helpTextWarning": "string",
          "helpLink": "string",
          "value": null,
          "type": "string",
          "advanced": true,
          "selectOptions": [
            {
              "value": 0,
              "name": "string",
              "order": 0,
              "hint": "string",
              "dividerAfter": true
            }
          ],
          "selectOptionsProviderAction": "string",
          "section": "string",
          "hidden": "string",
          "privacy": "normal",
          "placeholder": "string",
          "isFloat": true
        }
      ],
      "presets": [
        {}
      ]
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|false|none|none|
|name|string \| null|false|none|none|
|implementation|string \| null|false|none|none|
|implementationName|string \| null|false|none|none|
|infoLink|string \| null|false|none|none|
|negate|boolean|false|none|none|
|required|boolean|false|none|none|
|fields|[[Field](#schemafield)]|false|none|none|
|presets|[[CustomFormatSpecificationSchema](#schemacustomformatspecificationschema)]|false|none|none|

<h2 id="tocS_DatabaseType">DatabaseType</h2>
<!-- backwards compatibility -->
<a id="schemadatabasetype"></a>
<a id="schema_DatabaseType"></a>
<a id="tocSdatabasetype"></a>
<a id="tocsdatabasetype"></a>

```json
"sqLite"
```

<h2 id="tocS_DelayProfileResource">DelayProfileResource</h2>
<!-- backwards compatibility -->
<a id="schemadelayprofileresource"></a>
<a id="schema_DelayProfileResource"></a>
<a id="tocSdelayprofileresource"></a>
<a id="tocsdelayprofileresource"></a>

```json
{
  "id": 0,
  "enableUsenet": true,
  "enableTorrent": true,
  "preferredProtocol": "unknown",
  "usenetDelay": 0,
  "torrentDelay": 0,
  "bypassIfHighestQuality": true,
  "bypassIfAboveCustomFormatScore": true,
  "minimumCustomFormatScore": 0,
  "order": 0,
  "tags": [
    0
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|false|none|none|
|enableUsenet|boolean|false|none|none|
|enableTorrent|boolean|false|none|none|
|preferredProtocol|[DownloadProtocol](#schemadownloadprotocol)|false|none|none|
|usenetDelay|integer(int32)|false|none|none|
|torrentDelay|integer(int32)|false|none|none|
|bypassIfHighestQuality|boolean|false|none|none|
|bypassIfAboveCustomFormatScore|boolean|false|none|none|
|minimumCustomFormatScore|integer(int32)|false|none|none|
|order|integer(int32)|false|none|none|
|tags|[integer(int32)]|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|preferredProtocol|unknown|
|preferredProtocol|usenet|
|preferredProtocol|torrent|

<h2 id="tocS_DiskSpaceResource">DiskSpaceResource</h2>
<!-- backwards compatibility -->
<a id="schemadiskspaceresource"></a>
<a id="schema_DiskSpaceResource"></a>
<a id="tocSdiskspaceresource"></a>
<a id="tocsdiskspaceresource"></a>

```json
{
  "id": 0,
  "path": "string",
  "label": "string",
  "freeSpace": 0,
  "totalSpace": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|false|none|none|
|path|string \| null|false|none|none|
|label|string \| null|false|none|none|
|freeSpace|integer(int64)|false|none|none|
|totalSpace|integer(int64)|false|none|none|

<h2 id="tocS_DownloadClientBulkResource">DownloadClientBulkResource</h2>
<!-- backwards compatibility -->
<a id="schemadownloadclientbulkresource"></a>
<a id="schema_DownloadClientBulkResource"></a>
<a id="tocSdownloadclientbulkresource"></a>
<a id="tocsdownloadclientbulkresource"></a>

```json
{
  "ids": [
    0
  ],
  "tags": [
    0
  ],
  "applyTags": "add",
  "enable": true,
  "priority": 0,
  "removeCompletedDownloads": true,
  "removeFailedDownloads": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ids|[integer(int32)]|false|none|none|
|tags|[integer(int32)]|false|none|none|
|applyTags|[ApplyTags](#schemaapplytags)|false|none|none|
|enable|boolean \| null|false|none|none|
|priority|integer(int32) \| null|false|none|none|
|removeCompletedDownloads|boolean \| null|false|none|none|
|removeFailedDownloads|boolean \| null|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|applyTags|add|
|applyTags|remove|
|applyTags|replace|

<h2 id="tocS_DownloadClientConfigResource">DownloadClientConfigResource</h2>
<!-- backwards compatibility -->
<a id="schemadownloadclientconfigresource"></a>
<a id="schema_DownloadClientConfigResource"></a>
<a id="tocSdownloadclientconfigresource"></a>
<a id="tocsdownloadclientconfigresource"></a>

```json
{
  "id": 0,
  "downloadClientWorkingFolders": "string",
  "enableCompletedDownloadHandling": true,
  "checkForFinishedDownloadInterval": 0,
  "autoRedownloadFailed": true,
  "autoRedownloadFailedFromInteractiveSearch": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|false|none|none|
|downloadClientWorkingFolders|string \| null|false|none|none|
|enableCompletedDownloadHandling|boolean|false|none|none|
|checkForFinishedDownloadInterval|integer(int32)|false|none|none|
|autoRedownloadFailed|boolean|false|none|none|
|autoRedownloadFailedFromInteractiveSearch|boolean|false|none|none|

<h2 id="tocS_DownloadClientResource">DownloadClientResource</h2>
<!-- backwards compatibility -->
<a id="schemadownloadclientresource"></a>
<a id="schema_DownloadClientResource"></a>
<a id="tocSdownloadclientresource"></a>
<a id="tocsdownloadclientresource"></a>

```json
{
  "id": 0,
  "name": "string",
  "fields": [
    {
      "order": 0,
      "name": "string",
      "label": "string",
      "unit": "string",
      "helpText": "string",
      "helpTextWarning": "string",
      "helpLink": "string",
      "value": null,
      "type": "string",
      "advanced": true,
      "selectOptions": [
        {
          "value": 0,
          "name": "string",
          "order": 0,
          "hint": "string",
          "dividerAfter": true
        }
      ],
      "selectOptionsProviderAction": "string",
      "section": "string",
      "hidden": "string",
      "privacy": "normal",
      "placeholder": "string",
      "isFloat": true
    }
  ],
  "implementationName": "string",
  "implementation": "string",
  "configContract": "string",
  "infoLink": "string",
  "message": {
    "message": "string",
    "type": "info"
  },
  "tags": [
    0
  ],
  "presets": [
    {
      "id": 0,
      "name": "string",
      "fields": [
        {
          "order": 0,
          "name": "string",
          "label": "string",
          "unit": "string",
          "helpText": "string",
          "helpTextWarning": "string",
          "helpLink": "string",
          "value": null,
          "type": "string",
          "advanced": true,
          "selectOptions": [
            {
              "value": 0,
              "name": "string",
              "order": 0,
              "hint": "string",
              "dividerAfter": true
            }
          ],
          "selectOptionsProviderAction": "string",
          "section": "string",
          "hidden": "string",
          "privacy": "normal",
          "placeholder": "string",
          "isFloat": true
        }
      ],
      "implementationName": "string",
      "implementation": "string",
      "configContract": "string",
      "infoLink": "string",
      "message": {
        "message": "string",
        "type": "info"
      },
      "tags": [
        0
      ],
      "presets": [
        {}
      ],
      "enable": true,
      "protocol": "unknown",
      "priority": 0,
      "removeCompletedDownloads": true,
      "removeFailedDownloads": true
    }
  ],
  "enable": true,
  "protocol": "unknown",
  "priority": 0,
  "removeCompletedDownloads": true,
  "removeFailedDownloads": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|false|none|none|
|name|string \| null|false|none|none|
|fields|[[Field](#schemafield)]|false|none|none|
|implementationName|string \| null|false|none|none|
|implementation|string \| null|false|none|none|
|configContract|string \| null|false|none|none|
|infoLink|string \| null|false|none|none|
|message|[ProviderMessage](#schemaprovidermessage)|false|none|none|
|tags|[integer(int32)]|false|none|none|
|presets|[[DownloadClientResource](#schemadownloadclientresource)]|false|none|none|
|enable|boolean|false|none|none|
|protocol|[DownloadProtocol](#schemadownloadprotocol)|false|none|none|
|priority|integer(int32)|false|none|none|
|removeCompletedDownloads|boolean|false|none|none|
|removeFailedDownloads|boolean|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|protocol|unknown|
|protocol|usenet|
|protocol|torrent|

<h2 id="tocS_DownloadProtocol">DownloadProtocol</h2>
<!-- backwards compatibility -->
<a id="schemadownloadprotocol"></a>
<a id="schema_DownloadProtocol"></a>
<a id="tocSdownloadprotocol"></a>
<a id="tocsdownloadprotocol"></a>

```json
"unknown"
```

<h2 id="tocS_ExtraFileResource">ExtraFileResource</h2>
<!-- backwards compatibility -->
<a id="schemaextrafileresource"></a>
<a id="schema_ExtraFileResource"></a>
<a id="tocSextrafileresource"></a>
<a id="tocsextrafileresource"></a>

```json
{
  "id": 0,
  "movieId": 0,
  "movieFileId": 0,
  "relativePath": "string",
  "extension": "string",
  "languageTags": [
    "string"
  ],
  "title": "string",
  "type": "subtitle"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|false|none|none|
|movieId|integer(int32)|false|none|none|
|movieFileId|integer(int32) \| null|false|none|none|
|relativePath|string \| null|false|none|none|
|extension|string \| null|false|none|none|
|languageTags|[string]|false|none|none|
|title|string \| null|false|none|none|
|type|[ExtraFileType](#schemaextrafiletype)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|subtitle|
|type|metadata|
|type|other|

<h2 id="tocS_ExtraFileType">ExtraFileType</h2>
<!-- backwards compatibility -->
<a id="schemaextrafiletype"></a>
<a id="schema_ExtraFileType"></a>
<a id="tocSextrafiletype"></a>
<a id="tocsextrafiletype"></a>

```json
"subtitle"
```

<h2 id="tocS_Field">Field</h2>
<!-- backwards compatibility -->
<a id="schemafield"></a>
<a id="schema_Field"></a>
<a id="tocSfield"></a>
<a id="tocsfield"></a>

```json
{
  "order": 0,
  "name": "string",
  "label": "string",
  "unit": "string",
  "helpText": "string",
  "helpTextWarning": "string",
  "helpLink": "string",
  "value": null,
  "type": "string",
  "advanced": true,
  "selectOptions": [
    {
      "value": 0,
      "name": "string",
      "order": 0,
      "hint": "string",
      "dividerAfter": true
    }
  ],
  "selectOptionsProviderAction": "string",
  "section": "string",
  "hidden": "string",
  "privacy": "normal",
  "placeholder": "string",
  "isFloat": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|order|integer(int32)|false|none|none|
|name|string \| null|false|none|none|
|label|string \| null|false|none|none|
|unit|string \| null|false|none|none|
|helpText|string \| null|false|none|none|
|helpTextWarning|string \| null|false|none|none|
|helpLink|string \| null|false|none|none|
|value|object|false|none|none|
|type|string \| null|false|none|none|
|advanced|boolean|false|none|none|
|selectOptions|[[SelectOption](#schemaselectoption)]|false|none|none|
|selectOptionsProviderAction|string \| null|false|none|none|
|section|string \| null|false|none|none|
|hidden|string \| null|false|none|none|
|privacy|[PrivacyLevel](#schemaprivacylevel)|false|none|none|
|placeholder|string \| null|false|none|none|
|isFloat|boolean|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|privacy|normal|
|privacy|password|
|privacy|apiKey|
|privacy|userName|

<h2 id="tocS_FileDateType">FileDateType</h2>
<!-- backwards compatibility -->
<a id="schemafiledatetype"></a>
<a id="schema_FileDateType"></a>
<a id="tocSfiledatetype"></a>
<a id="tocsfiledatetype"></a>

```json
"none"
```

<h2 id="tocS_FileSystemEntityType">FileSystemEntityType</h2>
<!-- backwards compatibility -->
<a id="schemafilesystementitytype"></a>
<a id="schema_FileSystemEntityType"></a>
<a id="tocSfilesystementitytype"></a>
<a id="tocsfilesystementitytype"></a>

```json
"parent"
```

<h2 id="tocS_FileSystemMediaFileResource">FileSystemMediaFileResource</h2>
<!-- backwards compatibility -->
<a id="schemafilesystemmediafileresource"></a>
<a id="schema_FileSystemMediaFileResource"></a>
<a id="tocSfilesystemmediafileresource"></a>
<a id="tocsfilesystemmediafileresource"></a>

```json
{
  "path": "string",
  "relativePath": "string",
  "name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|path|string \| null|false|none|none|
|relativePath|string \| null|false|none|none|
|name|string \| null|false|none|none|

<h2 id="tocS_FileSystemModel">FileSystemModel</h2>
<!-- backwards compatibility -->
<a id="schemafilesystemmodel"></a>
<a id="schema_FileSystemModel"></a>
<a id="tocSfilesystemmodel"></a>
<a id="tocsfilesystemmodel"></a>

```json
{
  "type": "parent",
  "name": "string",
  "path": "string",
  "extension": "string",
  "size": 0,
  "lastModified": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|[FileSystemEntityType](#schemafilesystementitytype)|false|none|none|
|name|string \| null|false|none|none|
|path|string \| null|false|none|none|
|extension|string \| null|false|none|none|
|size|integer(int64)|false|none|none|
|lastModified|string(date-time) \| null|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|parent|
|type|drive|
|type|folder|
|type|file|

<h2 id="tocS_FileSystemResult">FileSystemResult</h2>
<!-- backwards compatibility -->
<a id="schemafilesystemresult"></a>
<a id="schema_FileSystemResult"></a>
<a id="tocSfilesystemresult"></a>
<a id="tocsfilesystemresult"></a>

```json
{
  "parent": "string",
  "directories": [
    {
      "type": "parent",
      "name": "string",
      "path": "string",
      "extension": "string",
      "size": 0,
      "lastModified": "1970-01-01T00:00:00Z"
    }
  ],
  "files": [
    {
      "type": "parent",
      "name": "string",
      "path": "string",
      "extension": "string",
      "size": 0,
      "lastModified": "1970-01-01T00:00:00Z"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|parent|string \| null|false|none|none|
|directories|[[FileSystemModel](#schemafilesystemmodel)]|false|none|none|
|files|[[FileSystemModel](#schemafilesystemmodel)]|false|none|none|

<h2 id="tocS_FileSystemTypeResource">FileSystemTypeResource</h2>
<!-- backwards compatibility -->
<a id="schemafilesystemtyperesource"></a>
<a id="schema_FileSystemTypeResource"></a>
<a id="tocSfilesystemtyperesource"></a>
<a id="tocsfilesystemtyperesource"></a>

```json
{
  "type": "parent"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|[FileSystemEntityType](#schemafilesystementitytype)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|parent|
|type|drive|
|type|folder|
|type|file|

<h2 id="tocS_HealthCheckResult">HealthCheckResult</h2>
<!-- backwards compatibility -->
<a id="schemahealthcheckresult"></a>
<a id="schema_HealthCheckResult"></a>
<a id="tocShealthcheckresult"></a>
<a id="tocshealthcheckresult"></a>

```json
"ok"
```

<h2 id="tocS_HealthResource">HealthResource</h2>
<!-- backwards compatibility -->
<a id="schemahealthresource"></a>
<a id="schema_HealthResource"></a>
<a id="tocShealthresource"></a>
<a id="tocshealthresource"></a>

```json
{
  "id": 0,
  "source": "string",
  "type": "ok",
  "message": "string",
  "wikiUrl": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|false|none|none|
|source|string \| null|false|none|none|
|type|[HealthCheckResult](#schemahealthcheckresult)|false|none|none|
|message|string \| null|false|none|none|
|wikiUrl|string \| null|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|ok|
|type|notice|
|type|warning|
|type|error|

<h2 id="tocS_HistoryResource">HistoryResource</h2>
<!-- backwards compatibility -->
<a id="schemahistoryresource"></a>
<a id="schema_HistoryResource"></a>
<a id="tocShistoryresource"></a>
<a id="tocshistoryresource"></a>

```json
{
  "id": 0,
  "movieId": 0,
  "sourceTitle": "string",
  "languages": [
    {
      "id": 0,
      "name": "string"
    }
  ],
  "quality": {
    "quality": {
      "id": 0,
      "name": "string",
      "source": "unknown",
      "resolution": 0,
      "modifier": "none"
    },
    "revision": {
      "version": 0,
      "real": 0,
      "isRepack": true
    }
  },
  "customFormats": [
    {
      "id": 0,
      "name": "string",
      "includeCustomFormatWhenRenaming": true,
      "specifications": [
        {
          "id": 0,
          "name": "string",
          "implementation": "string",
          "implementationName": "string",
          "infoLink": "string",
          "negate": true,
          "required": true,
          "fields": [
            {
              "order": 0,
              "name": "string",
              "label": "string",
              "unit": "string",
              "helpText": "string",
              "helpTextWarning": "string",
              "helpLink": "string",
              "value": null,
              "type": "string",
              "advanced": true,
              "selectOptions": [
                {
                  "value": 0,
                  "name": "string",
                  "order": 0,
                  "hint": "string",
                  "dividerAfter": true
                }
              ],
              "selectOptionsProviderAction": "string",
              "section": "string",
              "hidden": "string",
              "privacy": "normal",
              "placeholder": "string",
              "isFloat": true
            }
          ],
          "presets": [
            {}
          ]
        }
      ]
    }
  ],
  "customFormatScore": 0,
  "qualityCutoffNotMet": true,
  "date": "1970-01-01T00:00:00Z",
  "downloadId": "string",
  "eventType": "unknown",
  "data": {
    "property1": "string",
    "property2": "string"
  },
  "movie": {
    "id": 0,
    "title": "string",
    "originalTitle": "string",
    "originalLanguage": {
      "id": 0,
      "name": "string"
    },
    "alternateTitles": [
      {
        "id": 0,
        "sourceType": "tmdb",
        "movieMetadataId": 0,
        "title": "string",
        "cleanTitle": "string"
      }
    ],
    "secondaryYear": 0,
    "secondaryYearSourceId": 0,
    "sortTitle": "string",
    "sizeOnDisk": 0,
    "status": "tba",
    "overview": "string",
    "inCinemas": "1970-01-01T00:00:00Z",
    "physicalRelease": "1970-01-01T00:00:00Z",
    "digitalRelease": "1970-01-01T00:00:00Z",
    "releaseDate": "1970-01-01T00:00:00Z",
    "physicalReleaseNote": "string",
    "images": [
      {
        "coverType": "unknown",
        "url": "string",
        "remoteUrl": "string"
      }
    ],
    "website": "string",
    "remotePoster": "string",
    "year": 0,
    "youTubeTrailerId": "string",
    "studio": "string",
    "path": "string",
    "qualityProfileId": 0,
    "hasFile": true,
    "movieFileId": 0,
    "monitored": true,
    "minimumAvailability": "tba",
    "isAvailable": true,
    "folderName": "string",
    "runtime": 0,
    "cleanTitle": "string",
    "imdbId": "string",
    "tmdbId": 0,
    "titleSlug": "string",
    "rootFolderPath": "string",
    "folder": "string",
    "certification": "string",
    "genres": [
      "string"
    ],
    "keywords": [
      "string"
    ],
    "tags": [
      0
    ],
    "added": "1970-01-01T00:00:00Z",
    "addOptions": {
      "ignoreEpisodesWithFiles": true,
      "ignoreEpisodesWithoutFiles": true,
      "monitor": "movieOnly",
      "searchForMovie": true,
      "addMethod": "manual"
    },
    "ratings": {
      "imdb": {
        "votes": 0,
        "value": 0,
        "type": "user"
      },
      "tmdb": {
        "votes": 0,
        "value": 0,
        "type": "user"
      },
      "metacritic": {
        "votes": 0,
        "value": 0,
        "type": "user"
      },
      "rottenTomatoes": {
        "votes": 0,
        "value": 0,
        "type": "user"
      },
      "trakt": {
        "votes": 0,
        "value": 0,
        "type": "user"
      }
    },
    "movieFile": {
      "id": 0,
      "movieId": 0,
      "relativePath": "string",
      "path": "string",
      "size": 0,
      "dateAdded": "1970-01-01T00:00:00Z",
      "sceneName": "string",
      "releaseGroup": "string",
      "edition": "string",
      "languages": [
        {
          "id": 0,
          "name": "string"
        }
      ],
      "quality": {
        "quality": {
          "id": 0,
          "name": "string",
          "source": "unknown",
          "resolution": 0,
          "modifier": "none"
        },
        "revision": {
          "version": 0,
          "real": 0,
          "isRepack": true
        }
      },
      "customFormats": [
        {
          "id": 0,
          "name": "string",
          "includeCustomFormatWhenRenaming": true,
          "specifications": [
            {
              "id": 0,
              "name": "string",
              "implementation": "string",
              "implementationName": "string",
              "infoLink": "string",
              "negate": true,
              "required": true,
              "fields": [
                {
                  "order": 0,
                  "name": "string",
                  "label": "string",
                  "unit": "string",
                  "helpText": "string",
                  "helpTextWarning": "string",
                  "helpLink": "string",
                  "value": null,
                  "type": "string",
                  "advanced": true,
                  "selectOptions": [
                    {
                      "value": 0,
                      "name": "string",
                      "order": 0,
                      "hint": "string",
                      "dividerAfter": true
                    }
                  ],
                  "selectOptionsProviderAction": "string",
                  "section": "string",
                  "hidden": "string",
                  "privacy": "normal",
                  "placeholder": "string",
                  "isFloat": true
                }
              ],
              "presets": [
                {}
              ]
            }
          ]
        }
      ],
      "customFormatScore": 0,
      "indexerFlags": 0,
      "mediaInfo": {
        "id": 0,
        "audioBitrate": 0,
        "audioChannels": 0,
        "audioCodec": "string",
        "audioLanguages": "string",
        "audioStreamCount": 0,
        "videoBitDepth": 0,
        "videoBitrate": 0,
        "videoCodec": "string",
        "videoFps": 0,
        "videoDynamicRange": "string",
        "videoDynamicRangeType": "string",
        "resolution": "string",
        "runTime": "string",
        "scanType": "string",
        "subtitles": "string"
      },
      "originalFilePath": "string",
      "qualityCutoffNotMet": true
    },
    "collection": {
      "title": "string",
      "tmdbId": 0
    },
    "popularity": 0,
    "lastSearchTime": "1970-01-01T00:00:00Z",
    "statistics": {
      "movieFileCount": 0,
      "sizeOnDisk": 0,
      "releaseGroups": [
        "string"
      ],
      "movieFileQualities": [
        {
          "id": 0,
          "name": "string",
          "source": "unknown",
          "resolution": 0,
          "modifier": "none"
        }
      ]
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|false|none|none|
|movieId|integer(int32)|false|none|none|
|sourceTitle|string \| null|false|none|none|
|languages|[[Language](#schemalanguage)]|false|none|none|
|quality|[QualityModel](#schemaqualitymodel)|false|none|none|
|customFormats|[[CustomFormatResource](#schemacustomformatresource)]|false|none|none|
|customFormatScore|integer(int32)|false|none|none|
|qualityCutoffNotMet|boolean|false|none|none|
|date|string(date-time)|false|none|none|
|downloadId|string \| null|false|none|none|
|eventType|[MovieHistoryEventType](#schemamoviehistoryeventtype)|false|none|none|
|data|object \| null|false|none|none|
|movie|[MovieResource](#schemamovieresource)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|eventType|unknown|
|eventType|grabbed|
|eventType|downloadFolderImported|
|eventType|downloadFailed|
|eventType|movieFileDeleted|
|eventType|movieFolderImported|
|eventType|movieFileRenamed|
|eventType|downloadIgnored|

<h2 id="tocS_HistoryResourcePagingResource">HistoryResourcePagingResource</h2>
<!-- backwards compatibility -->
<a id="schemahistoryresourcepagingresource"></a>
<a id="schema_HistoryResourcePagingResource"></a>
<a id="tocShistoryresourcepagingresource"></a>
<a id="tocshistoryresourcepagingresource"></a>

```json
{
  "page": 0,
  "pageSize": 0,
  "sortKey": "string",
  "sortDirection": "default",
  "totalRecords": 0,
  "records": [
    {
      "id": 0,
      "movieId": 0,
      "sourceTitle": "string",
      "languages": [
        {
          "id": 0,
          "name": "string"
        }
      ],
      "quality": {
        "quality": {
          "id": 0,
          "name": "string",
          "source": "unknown",
          "resolution": 0,
          "modifier": "none"
        },
        "revision": {
          "version": 0,
          "real": 0,
          "isRepack": true
        }
      },
      "customFormats": [
        {
          "id": 0,
          "name": "string",
          "includeCustomFormatWhenRenaming": true,
          "specifications": [
            {
              "id": 0,
              "name": "string",
              "implementation": "string",
              "implementationName": "string",
              "infoLink": "string",
              "negate": true,
              "required": true,
              "fields": [
                {
                  "order": 0,
                  "name": "string",
                  "label": "string",
                  "unit": "string",
                  "helpText": "string",
                  "helpTextWarning": "string",
                  "helpLink": "string",
                  "value": null,
                  "type": "string",
                  "advanced": true,
                  "selectOptions": [
                    {
                      "value": 0,
                      "name": "string",
                      "order": 0,
                      "hint": "string",
                      "dividerAfter": true
                    }
                  ],
                  "selectOptionsProviderAction": "string",
                  "section": "string",
                  "hidden": "string",
                  "privacy": "normal",
                  "placeholder": "string",
                  "isFloat": true
                }
              ],
              "presets": [
                {}
              ]
            }
          ]
        }
      ],
      "customFormatScore": 0,
      "qualityCutoffNotMet": true,
      "date": "1970-01-01T00:00:00Z",
      "downloadId": "string",
      "eventType": "unknown",
      "data": {
        "property1": "string",
        "property2": "string"
      },
      "movie": {
        "id": 0,
        "title": "string",
        "originalTitle": "string",
        "originalLanguage": {
          "id": 0,
          "name": "string"
        },
        "alternateTitles": [
          {
            "id": 0,
            "sourceType": "tmdb",
            "movieMetadataId": 0,
            "title": "string",
            "cleanTitle": "string"
          }
        ],
        "secondaryYear": 0,
        "secondaryYearSourceId": 0,
        "sortTitle": "string",
        "sizeOnDisk": 0,
        "status": "tba",
        "overview": "string",
        "inCinemas": "1970-01-01T00:00:00Z",
        "physicalRelease": "1970-01-01T00:00:00Z",
        "digitalRelease": "1970-01-01T00:00:00Z",
        "releaseDate": "1970-01-01T00:00:00Z",
        "physicalReleaseNote": "string",
        "images": [
          {
            "coverType": "unknown",
            "url": "string",
            "remoteUrl": "string"
          }
        ],
        "website": "string",
        "remotePoster": "string",
        "year": 0,
        "youTubeTrailerId": "string",
        "studio": "string",
        "path": "string",
        "qualityProfileId": 0,
        "hasFile": true,
        "movieFileId": 0,
        "monitored": true,
        "minimumAvailability": "tba",
        "isAvailable": true,
        "folderName": "string",
        "runtime": 0,
        "cleanTitle": "string",
        "imdbId": "string",
        "tmdbId": 0,
        "titleSlug": "string",
        "rootFolderPath": "string",
        "folder": "string",
        "certification": "string",
        "genres": [
          "string"
        ],
        "keywords": [
          "string"
        ],
        "tags": [
          0
        ],
        "added": "1970-01-01T00:00:00Z",
        "addOptions": {
          "ignoreEpisodesWithFiles": true,
          "ignoreEpisodesWithoutFiles": true,
          "monitor": "movieOnly",
          "searchForMovie": true,
          "addMethod": "manual"
        },
        "ratings": {
          "imdb": {
            "votes": 0,
            "value": 0,
            "type": "user"
          },
          "tmdb": {
            "votes": 0,
            "value": 0,
            "type": "user"
          },
          "metacritic": {
            "votes": 0,
            "value": 0,
            "type": "user"
          },
          "rottenTomatoes": {
            "votes": 0,
            "value": 0,
            "type": "user"
          },
          "trakt": {
            "votes": 0,
            "value": 0,
            "type": "user"
          }
        },
        "movieFile": {
          "id": 0,
          "movieId": 0,
          "relativePath": "string",
          "path": "string",
          "size": 0,
          "dateAdded": "1970-01-01T00:00:00Z",
          "sceneName": "string",
          "releaseGroup": "string",
          "edition": "string",
          "languages": [
            {
              "id": 0,
              "name": "string"
            }
          ],
          "quality": {
            "quality": {
              "id": 0,
              "name": "string",
              "source": "unknown",
              "resolution": 0,
              "modifier": "none"
            },
            "revision": {
              "version": 0,
              "real": 0,
              "isRepack": true
            }
          },
          "customFormats": [
            {
              "id": 0,
              "name": "string",
              "includeCustomFormatWhenRenaming": true,
              "specifications": [
                {
                  "id": 0,
                  "name": "string",
                  "implementation": "string",
                  "implementationName": "string",
                  "infoLink": "string",
                  "negate": true,
                  "required": true,
                  "fields": [
                    {
                      "order": 0,
                      "name": "string",
                      "label": "string",
                      "unit": "string",
                      "helpText": "string",
                      "helpTextWarning": "string",
                      "helpLink": "string",
                      "value": null,
                      "type": "string",
                      "advanced": true,
                      "selectOptions": [
                        {
                          "value": 0,
                          "name": "string",
                          "order": 0,
                          "hint": "string",
                          "dividerAfter": true
                        }
                      ],
                      "selectOptionsProviderAction": "string",
                      "section": "string",
                      "hidden": "string",
                      "privacy": "normal",
                      "placeholder": "string",
                      "isFloat": true
                    }
                  ],
                  "presets": [
                    {}
                  ]
                }
              ]
            }
          ],
          "customFormatScore": 0,
          "indexerFlags": 0,
          "mediaInfo": {
            "id": 0,
            "audioBitrate": 0,
            "audioChannels": 0,
            "audioCodec": "string",
            "audioLanguages": "string",
            "audioStreamCount": 0,
            "videoBitDepth": 0,
            "videoBitrate": 0,
            "videoCodec": "string",
            "videoFps": 0,
            "videoDynamicRange": "string",
            "videoDynamicRangeType": "string",
            "resolution": "string",
            "runTime": "string",
            "scanType": "string",
            "subtitles": "string"
          },
          "originalFilePath": "string",
          "qualityCutoffNotMet": true
        },
        "collection": {
          "title": "string",
          "tmdbId": 0
        },
        "popularity": 0,
        "lastSearchTime": "1970-01-01T00:00:00Z",
        "statistics": {
          "movieFileCount": 0,
          "sizeOnDisk": 0,
          "releaseGroups": [
            "string"
          ],
          "movieFileQualities": [
            {
              "id": 0,
              "name": "string",
              "source": "unknown",
              "resolution": 0,
              "modifier": "none"
            }
          ]
        }
      }
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|page|integer(int32)|false|none|none|
|pageSize|integer(int32)|false|none|none|
|sortKey|string \| null|false|none|none|
|sortDirection|[SortDirection](#schemasortdirection)|false|none|none|
|totalRecords|integer(int32)|false|none|none|
|records|[[HistoryResource](#schemahistoryresource)]|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|sortDirection|default|
|sortDirection|ascending|
|sortDirection|descending|

<h2 id="tocS_HostConfigResource">HostConfigResource</h2>
<!-- backwards compatibility -->
<a id="schemahostconfigresource"></a>
<a id="schema_HostConfigResource"></a>
<a id="tocShostconfigresource"></a>
<a id="tocshostconfigresource"></a>

```json
{
  "id": 0,
  "bindAddress": "string",
  "port": 0,
  "sslPort": 0,
  "enableSsl": true,
  "launchBrowser": true,
  "authenticationMethod": "none",
  "authenticationRequired": "enabled",
  "allowedHosts": "string",
  "analyticsEnabled": true,
  "username": "string",
  "password": "string",
  "passwordConfirmation": "string",
  "oidcAuthority": "string",
  "oidcClientId": "string",
  "oidcClientSecret": "string",
  "oidcUserIdentifier": "string",
  "oidcScopes": "string",
  "logLevel": "string",
  "logSizeLimit": 0,
  "consoleLogLevel": "string",
  "branch": "string",
  "apiKey": "string",
  "sslCertPath": "string",
  "sslKeyPath": "string",
  "sslCertPassword": "string",
  "urlBase": "string",
  "trustedNetworks": "string",
  "instanceName": "string",
  "applicationUrl": "string",
  "updateAutomatically": true,
  "updateMechanism": "builtIn",
  "updateScriptPath": "string",
  "proxyEnabled": true,
  "proxyType": "http",
  "proxyHostname": "string",
  "proxyPort": 0,
  "proxyUsername": "string",
  "proxyPassword": "string",
  "proxyBypassFilter": "string",
  "proxyBypassLocalAddresses": true,
  "certificateValidation": "enabled",
  "backupFolder": "string",
  "backupInterval": 0,
  "backupRetention": 0,
  "trustCgnatIpAddresses": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|false|none|none|
|bindAddress|string \| null|false|none|none|
|port|integer(int32)|false|none|none|
|sslPort|integer(int32)|false|none|none|
|enableSsl|boolean|false|none|none|
|launchBrowser|boolean|false|none|none|
|authenticationMethod|[AuthenticationType](#schemaauthenticationtype)|false|none|none|
|authenticationRequired|[AuthenticationRequiredType](#schemaauthenticationrequiredtype)|false|none|none|
|allowedHosts|string \| null|false|none|none|
|analyticsEnabled|boolean|false|none|none|
|username|string \| null|false|none|none|
|password|string \| null|false|none|none|
|passwordConfirmation|string \| null|false|none|none|
|oidcAuthority|string \| null|false|none|none|
|oidcClientId|string \| null|false|none|none|
|oidcClientSecret|string \| null|false|none|none|
|oidcUserIdentifier|string \| null|false|none|none|
|oidcScopes|string \| null|false|none|none|
|logLevel|string \| null|false|none|none|
|logSizeLimit|integer(int32)|false|none|none|
|consoleLogLevel|string \| null|false|none|none|
|branch|string \| null|false|none|none|
|apiKey|string \| null|false|none|none|
|sslCertPath|string \| null|false|none|none|
|sslKeyPath|string \| null|false|none|none|
|sslCertPassword|string \| null|false|none|none|
|urlBase|string \| null|false|none|none|
|trustedNetworks|string \| null|false|none|none|
|instanceName|string \| null|false|none|none|
|applicationUrl|string \| null|false|none|none|
|updateAutomatically|boolean|false|none|none|
|updateMechanism|[UpdateMechanism](#schemaupdatemechanism)|false|none|none|
|updateScriptPath|string \| null|false|none|none|
|proxyEnabled|boolean|false|none|none|
|proxyType|[ProxyType](#schemaproxytype)|false|none|none|
|proxyHostname|string \| null|false|none|none|
|proxyPort|integer(int32)|false|none|none|
|proxyUsername|string \| null|false|none|none|
|proxyPassword|string \| null|false|none|none|
|proxyBypassFilter|string \| null|false|none|none|
|proxyBypassLocalAddresses|boolean|false|none|none|
|certificateValidation|[CertificateValidationType](#schemacertificatevalidationtype)|false|none|none|
|backupFolder|string \| null|false|none|none|
|backupInterval|integer(int32)|false|none|none|
|backupRetention|integer(int32)|false|none|none|
|trustCgnatIpAddresses|boolean|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|authenticationMethod|none|
|authenticationMethod|basic|
|authenticationMethod|forms|
|authenticationMethod|external|
|authenticationMethod|oidc|
|authenticationRequired|enabled|
|authenticationRequired|disabledForLocalAddresses|
|authenticationRequired|disabledForLocalhost|
|updateMechanism|builtIn|
|updateMechanism|script|
|updateMechanism|external|
|updateMechanism|apt|
|updateMechanism|docker|
|proxyType|http|
|proxyType|socks4|
|proxyType|socks5|
|certificateValidation|enabled|
|certificateValidation|disabledForLocalAddresses|
|certificateValidation|disabled|

<h2 id="tocS_ImportListBulkResource">ImportListBulkResource</h2>
<!-- backwards compatibility -->
<a id="schemaimportlistbulkresource"></a>
<a id="schema_ImportListBulkResource"></a>
<a id="tocSimportlistbulkresource"></a>
<a id="tocsimportlistbulkresource"></a>

```json
{
  "ids": [
    0
  ],
  "tags": [
    0
  ],
  "applyTags": "add",
  "enabled": true,
  "enableAuto": true,
  "rootFolderPath": "string",
  "qualityProfileId": 0,
  "minimumAvailability": "tba"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ids|[integer(int32)]|false|none|none|
|tags|[integer(int32)]|false|none|none|
|applyTags|[ApplyTags](#schemaapplytags)|false|none|none|
|enabled|boolean \| null|false|none|none|
|enableAuto|boolean \| null|false|none|none|
|rootFolderPath|string \| null|false|none|none|
|qualityProfileId|integer(int32) \| null|false|none|none|
|minimumAvailability|[MovieStatusType](#schemamoviestatustype)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|applyTags|add|
|applyTags|remove|
|applyTags|replace|
|minimumAvailability|tba|
|minimumAvailability|announced|
|minimumAvailability|inCinemas|
|minimumAvailability|released|
|minimumAvailability|deleted|

<h2 id="tocS_ImportListConfigResource">ImportListConfigResource</h2>
<!-- backwards compatibility -->
<a id="schemaimportlistconfigresource"></a>
<a id="schema_ImportListConfigResource"></a>
<a id="tocSimportlistconfigresource"></a>
<a id="tocsimportlistconfigresource"></a>

```json
{
  "id": 0,
  "listSyncLevel": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|false|none|none|
|listSyncLevel|string \| null|false|none|none|

<h2 id="tocS_ImportListExclusionBulkResource">ImportListExclusionBulkResource</h2>
<!-- backwards compatibility -->
<a id="schemaimportlistexclusionbulkresource"></a>
<a id="schema_ImportListExclusionBulkResource"></a>
<a id="tocSimportlistexclusionbulkresource"></a>
<a id="tocsimportlistexclusionbulkresource"></a>

```json
{
  "ids": [
    0
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ids|[integer(int32)]|false|none|none|

<h2 id="tocS_ImportListExclusionResource">ImportListExclusionResource</h2>
<!-- backwards compatibility -->
<a id="schemaimportlistexclusionresource"></a>
<a id="schema_ImportListExclusionResource"></a>
<a id="tocSimportlistexclusionresource"></a>
<a id="tocsimportlistexclusionresource"></a>

```json
{
  "id": 0,
  "name": "string",
  "fields": [
    {
      "order": 0,
      "name": "string",
      "label": "string",
      "unit": "string",
      "helpText": "string",
      "helpTextWarning": "string",
      "helpLink": "string",
      "value": null,
      "type": "string",
      "advanced": true,
      "selectOptions": [
        {
          "value": 0,
          "name": "string",
          "order": 0,
          "hint": "string",
          "dividerAfter": true
        }
      ],
      "selectOptionsProviderAction": "string",
      "section": "string",
      "hidden": "string",
      "privacy": "normal",
      "placeholder": "string",
      "isFloat": true
    }
  ],
  "implementationName": "string",
  "implementation": "string",
  "configContract": "string",
  "infoLink": "string",
  "message": {
    "message": "string",
    "type": "info"
  },
  "tags": [
    0
  ],
  "presets": [
    {
      "id": 0,
      "name": "string",
      "fields": [
        {
          "order": 0,
          "name": "string",
          "label": "string",
          "unit": "string",
          "helpText": "string",
          "helpTextWarning": "string",
          "helpLink": "string",
          "value": null,
          "type": "string",
          "advanced": true,
          "selectOptions": [
            {
              "value": 0,
              "name": "string",
              "order": 0,
              "hint": "string",
              "dividerAfter": true
            }
          ],
          "selectOptionsProviderAction": "string",
          "section": "string",
          "hidden": "string",
          "privacy": "normal",
          "placeholder": "string",
          "isFloat": true
        }
      ],
      "implementationName": "string",
      "implementation": "string",
      "configContract": "string",
      "infoLink": "string",
      "message": {
        "message": "string",
        "type": "info"
      },
      "tags": [
        0
      ],
      "presets": [
        {}
      ],
      "tmdbId": 0,
      "movieTitle": "string",
      "movieYear": 0
    }
  ],
  "tmdbId": 0,
  "movieTitle": "string",
  "movieYear": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|false|none|none|
|name|string \| null|false|none|none|
|fields|[[Field](#schemafield)]|false|none|none|
|implementationName|string \| null|false|none|none|
|implementation|string \| null|false|none|none|
|configContract|string \| null|false|none|none|
|infoLink|string \| null|false|none|none|
|message|[ProviderMessage](#schemaprovidermessage)|false|none|none|
|tags|[integer(int32)]|false|none|none|
|presets|[[ImportListExclusionResource](#schemaimportlistexclusionresource)]|false|none|none|
|tmdbId|integer(int32)|false|none|none|
|movieTitle|string \| null|false|none|none|
|movieYear|integer(int32)|false|none|none|

<h2 id="tocS_ImportListExclusionResourcePagingResource">ImportListExclusionResourcePagingResource</h2>
<!-- backwards compatibility -->
<a id="schemaimportlistexclusionresourcepagingresource"></a>
<a id="schema_ImportListExclusionResourcePagingResource"></a>
<a id="tocSimportlistexclusionresourcepagingresource"></a>
<a id="tocsimportlistexclusionresourcepagingresource"></a>

```json
{
  "page": 0,
  "pageSize": 0,
  "sortKey": "string",
  "sortDirection": "default",
  "totalRecords": 0,
  "records": [
    {
      "id": 0,
      "name": "string",
      "fields": [
        {
          "order": 0,
          "name": "string",
          "label": "string",
          "unit": "string",
          "helpText": "string",
          "helpTextWarning": "string",
          "helpLink": "string",
          "value": null,
          "type": "string",
          "advanced": true,
          "selectOptions": [
            {
              "value": 0,
              "name": "string",
              "order": 0,
              "hint": "string",
              "dividerAfter": true
            }
          ],
          "selectOptionsProviderAction": "string",
          "section": "string",
          "hidden": "string",
          "privacy": "normal",
          "placeholder": "string",
          "isFloat": true
        }
      ],
      "implementationName": "string",
      "implementation": "string",
      "configContract": "string",
      "infoLink": "string",
      "message": {
        "message": "string",
        "type": "info"
      },
      "tags": [
        0
      ],
      "presets": [
        {}
      ],
      "tmdbId": 0,
      "movieTitle": "string",
      "movieYear": 0
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|page|integer(int32)|false|none|none|
|pageSize|integer(int32)|false|none|none|
|sortKey|string \| null|false|none|none|
|sortDirection|[SortDirection](#schemasortdirection)|false|none|none|
|totalRecords|integer(int32)|false|none|none|
|records|[[ImportListExclusionResource](#schemaimportlistexclusionresource)]|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|sortDirection|default|
|sortDirection|ascending|
|sortDirection|descending|

<h2 id="tocS_ImportListMoviesResource">ImportListMoviesResource</h2>
<!-- backwards compatibility -->
<a id="schemaimportlistmoviesresource"></a>
<a id="schema_ImportListMoviesResource"></a>
<a id="tocSimportlistmoviesresource"></a>
<a id="tocsimportlistmoviesresource"></a>

```json
{
  "id": 0,
  "title": "string",
  "sortTitle": "string",
  "originalLanguage": {
    "id": 0,
    "name": "string"
  },
  "status": "tba",
  "overview": "string",
  "inCinemas": "1970-01-01T00:00:00Z",
  "physicalRelease": "1970-01-01T00:00:00Z",
  "digitalRelease": "1970-01-01T00:00:00Z",
  "images": [
    {
      "coverType": "unknown",
      "url": "string",
      "remoteUrl": "string"
    }
  ],
  "website": "string",
  "remotePoster": "string",
  "year": 0,
  "youTubeTrailerId": "string",
  "studio": "string",
  "runtime": 0,
  "imdbId": "string",
  "tmdbId": 0,
  "folder": "string",
  "certification": "string",
  "popularity": 0,
  "genres": [
    "string"
  ],
  "ratings": {
    "imdb": {
      "votes": 0,
      "value": 0,
      "type": "user"
    },
    "tmdb": {
      "votes": 0,
      "value": 0,
      "type": "user"
    },
    "metacritic": {
      "votes": 0,
      "value": 0,
      "type": "user"
    },
    "rottenTomatoes": {
      "votes": 0,
      "value": 0,
      "type": "user"
    },
    "trakt": {
      "votes": 0,
      "value": 0,
      "type": "user"
    }
  },
  "collection": {
    "id": 0,
    "title": "string",
    "cleanTitle": "string",
    "sortTitle": "string",
    "tmdbId": 0,
    "overview": "string",
    "monitored": true,
    "qualityProfileId": 0,
    "rootFolderPath": "string",
    "searchOnAdd": true,
    "minimumAvailability": "tba",
    "lastInfoSync": "1970-01-01T00:00:00Z",
    "images": [
      {
        "coverType": "unknown",
        "url": "string",
        "remoteUrl": "string"
      }
    ],
    "added": "1970-01-01T00:00:00Z",
    "movies": [
      {
        "id": 0,
        "tmdbId": 0,
        "images": [
          {
            "coverType": "unknown",
            "url": "string",
            "remoteUrl": "string"
          }
        ],
        "genres": [
          "string"
        ],
        "keywords": [
          "string"
        ],
        "inCinemas": "1970-01-01T00:00:00Z",
        "physicalRelease": "1970-01-01T00:00:00Z",
        "digitalRelease": "1970-01-01T00:00:00Z",
        "certification": "string",
        "year": 0,
        "ratings": {
          "imdb": {
            "votes": 0,
            "value": 0,
            "type": "user"
          },
          "tmdb": {
            "votes": 0,
            "value": 0,
            "type": "user"
          },
          "metacritic": {
            "votes": 0,
            "value": 0,
            "type": "user"
          },
          "rottenTomatoes": {
            "votes": 0,
            "value": 0,
            "type": "user"
          },
          "trakt": {
            "votes": 0,
            "value": 0,
            "type": "user"
          }
        },
        "collectionTmdbId": 0,
        "collectionTitle": "string",
        "lastInfoSync": "1970-01-01T00:00:00Z",
        "runtime": 0,
        "website": "string",
        "imdbId": "string",
        "title": "string",
        "cleanTitle": "string",
        "sortTitle": "string",
        "status": "tba",
        "overview": "string",
        "alternativeTitles": [
          {
            "id": 0,
            "sourceType": "tmdb",
            "movieMetadataId": 0,
            "title": "string",
            "cleanTitle": "string"
          }
        ],
        "translations": [
          {
            "id": 0,
            "movieMetadataId": 0,
            "title": "string",
            "cleanTitle": "string",
            "overview": "string",
            "language": {
              "id": 0,
              "name": "string"
            }
          }
        ],
        "secondaryYear": 0,
        "youTubeTrailerId": "string",
        "studio": "string",
        "originalTitle": "string",
        "cleanOriginalTitle": "string",
        "originalLanguage": {
          "id": 0,
          "name": "string"
        },
        "recommendations": [
          0
        ],
        "popularity": 0,
        "isRecentMovie": true
      }
    ],
    "tags": [
      0
    ]
  },
  "isExcluded": true,
  "isExisting": true,
  "isTrending": true,
  "isPopular": true,
  "isRecommendation": true,
  "lists": [
    0
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|false|none|none|
|title|string \| null|false|none|none|
|sortTitle|string \| null|false|none|none|
|originalLanguage|[Language](#schemalanguage)|false|none|none|
|status|[MovieStatusType](#schemamoviestatustype)|false|none|none|
|overview|string \| null|false|none|none|
|inCinemas|string(date-time) \| null|false|none|none|
|physicalRelease|string(date-time) \| null|false|none|none|
|digitalRelease|string(date-time) \| null|false|none|none|
|images|[[MediaCover](#schemamediacover)]|false|none|none|
|website|string \| null|false|none|none|
|remotePoster|string \| null|false|none|none|
|year|integer(int32)|false|none|none|
|youTubeTrailerId|string \| null|false|none|none|
|studio|string \| null|false|none|none|
|runtime|integer(int32)|false|none|none|
|imdbId|string \| null|false|none|none|
|tmdbId|integer(int32)|false|none|none|
|folder|string \| null|false|none|none|
|certification|string \| null|false|none|none|
|popularity|number(float)|false|none|none|
|genres|[string]|false|none|none|
|ratings|[Ratings](#schemaratings)|false|none|none|
|collection|[MovieCollection](#schemamoviecollection)|false|none|none|
|isExcluded|boolean|false|none|none|
|isExisting|boolean|false|none|none|
|isTrending|boolean|false|none|none|
|isPopular|boolean|false|none|none|
|isRecommendation|boolean|false|none|none|
|lists|[integer(int32)]|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|tba|
|status|announced|
|status|inCinemas|
|status|released|
|status|deleted|

<h2 id="tocS_ImportListResource">ImportListResource</h2>
<!-- backwards compatibility -->
<a id="schemaimportlistresource"></a>
<a id="schema_ImportListResource"></a>
<a id="tocSimportlistresource"></a>
<a id="tocsimportlistresource"></a>

```json
{
  "id": 0,
  "name": "string",
  "fields": [
    {
      "order": 0,
      "name": "string",
      "label": "string",
      "unit": "string",
      "helpText": "string",
      "helpTextWarning": "string",
      "helpLink": "string",
      "value": null,
      "type": "string",
      "advanced": true,
      "selectOptions": [
        {
          "value": 0,
          "name": "string",
          "order": 0,
          "hint": "string",
          "dividerAfter": true
        }
      ],
      "selectOptionsProviderAction": "string",
      "section": "string",
      "hidden": "string",
      "privacy": "normal",
      "placeholder": "string",
      "isFloat": true
    }
  ],
  "implementationName": "string",
  "implementation": "string",
  "configContract": "string",
  "infoLink": "string",
  "message": {
    "message": "string",
    "type": "info"
  },
  "tags": [
    0
  ],
  "presets": [
    {
      "id": 0,
      "name": "string",
      "fields": [
        {
          "order": 0,
          "name": "string",
          "label": "string",
          "unit": "string",
          "helpText": "string",
          "helpTextWarning": "string",
          "helpLink": "string",
          "value": null,
          "type": "string",
          "advanced": true,
          "selectOptions": [
            {
              "value": 0,
              "name": "string",
              "order": 0,
              "hint": "string",
              "dividerAfter": true
            }
          ],
          "selectOptionsProviderAction": "string",
          "section": "string",
          "hidden": "string",
          "privacy": "normal",
          "placeholder": "string",
          "isFloat": true
        }
      ],
      "implementationName": "string",
      "implementation": "string",
      "configContract": "string",
      "infoLink": "string",
      "message": {
        "message": "string",
        "type": "info"
      },
      "tags": [
        0
      ],
      "presets": [
        {}
      ],
      "enabled": true,
      "enableAuto": true,
      "monitor": "movieOnly",
      "rootFolderPath": "string",
      "qualityProfileId": 0,
      "searchOnAdd": true,
      "minimumAvailability": "tba",
      "listType": "program",
      "listOrder": 0,
      "minRefreshInterval": "string"
    }
  ],
  "enabled": true,
  "enableAuto": true,
  "monitor": "movieOnly",
  "rootFolderPath": "string",
  "qualityProfileId": 0,
  "searchOnAdd": true,
  "minimumAvailability": "tba",
  "listType": "program",
  "listOrder": 0,
  "minRefreshInterval": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|false|none|none|
|name|string \| null|false|none|none|
|fields|[[Field](#schemafield)]|false|none|none|
|implementationName|string \| null|false|none|none|
|implementation|string \| null|false|none|none|
|configContract|string \| null|false|none|none|
|infoLink|string \| null|false|none|none|
|message|[ProviderMessage](#schemaprovidermessage)|false|none|none|
|tags|[integer(int32)]|false|none|none|
|presets|[[ImportListResource](#schemaimportlistresource)]|false|none|none|
|enabled|boolean|false|none|none|
|enableAuto|boolean|false|none|none|
|monitor|[MonitorTypes](#schemamonitortypes)|false|none|none|
|rootFolderPath|string \| null|false|none|none|
|qualityProfileId|integer(int32)|false|none|none|
|searchOnAdd|boolean|false|none|none|
|minimumAvailability|[MovieStatusType](#schemamoviestatustype)|false|none|none|
|listType|[ImportListType](#schemaimportlisttype)|false|none|none|
|listOrder|integer(int32)|false|none|none|
|minRefreshInterval|string(date-span)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|monitor|movieOnly|
|monitor|movieAndCollection|
|monitor|none|
|minimumAvailability|tba|
|minimumAvailability|announced|
|minimumAvailability|inCinemas|
|minimumAvailability|released|
|minimumAvailability|deleted|
|listType|program|
|listType|tmdb|
|listType|trakt|
|listType|plex|
|listType|simkl|
|listType|other|
|listType|advanced|

<h2 id="tocS_ImportListType">ImportListType</h2>
<!-- backwards compatibility -->
<a id="schemaimportlisttype"></a>
<a id="schema_ImportListType"></a>
<a id="tocSimportlisttype"></a>
<a id="tocsimportlisttype"></a>

```json
"program"
```

<h2 id="tocS_ImportRejectionResource">ImportRejectionResource</h2>
<!-- backwards compatibility -->
<a id="schemaimportrejectionresource"></a>
<a id="schema_ImportRejectionResource"></a>
<a id="tocSimportrejectionresource"></a>
<a id="tocsimportrejectionresource"></a>

```json
{
  "reason": "string",
  "type": "permanent"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|reason|string \| null|false|none|none|
|type|[RejectionType](#schemarejectiontype)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|permanent|
|type|temporary|

<h2 id="tocS_IndexerBulkResource">IndexerBulkResource</h2>
<!-- backwards compatibility -->
<a id="schemaindexerbulkresource"></a>
<a id="schema_IndexerBulkResource"></a>
<a id="tocSindexerbulkresource"></a>
<a id="tocsindexerbulkresource"></a>

```json
{
  "ids": [
    0
  ],
  "tags": [
    0
  ],
  "applyTags": "add",
  "enableRss": true,
  "enableAutomaticSearch": true,
  "enableInteractiveSearch": true,
  "priority": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ids|[integer(int32)]|false|none|none|
|tags|[integer(int32)]|false|none|none|
|applyTags|[ApplyTags](#schemaapplytags)|false|none|none|
|enableRss|boolean \| null|false|none|none|
|enableAutomaticSearch|boolean \| null|false|none|none|
|enableInteractiveSearch|boolean \| null|false|none|none|
|priority|integer(int32) \| null|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|applyTags|add|
|applyTags|remove|
|applyTags|replace|

<h2 id="tocS_IndexerConfigResource">IndexerConfigResource</h2>
<!-- backwards compatibility -->
<a id="schemaindexerconfigresource"></a>
<a id="schema_IndexerConfigResource"></a>
<a id="tocSindexerconfigresource"></a>
<a id="tocsindexerconfigresource"></a>

```json
{
  "id": 0,
  "minimumAge": 0,
  "maximumSize": 0,
  "retention": 0,
  "rssSyncInterval": 0,
  "preferIndexerFlags": true,
  "availabilityDelay": 0,
  "allowHardcodedSubs": true,
  "whitelistedHardcodedSubs": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|false|none|none|
|minimumAge|integer(int32)|false|none|none|
|maximumSize|integer(int32)|false|none|none|
|retention|integer(int32)|false|none|none|
|rssSyncInterval|integer(int32)|false|none|none|
|preferIndexerFlags|boolean|false|none|none|
|availabilityDelay|integer(int32)|false|none|none|
|allowHardcodedSubs|boolean|false|none|none|
|whitelistedHardcodedSubs|string \| null|false|none|none|

<h2 id="tocS_IndexerFlagResource">IndexerFlagResource</h2>
<!-- backwards compatibility -->
<a id="schemaindexerflagresource"></a>
<a id="schema_IndexerFlagResource"></a>
<a id="tocSindexerflagresource"></a>
<a id="tocsindexerflagresource"></a>

```json
{
  "id": 0,
  "name": "string",
  "nameLower": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|false|none|none|
|name|string \| null|false|none|none|
|nameLower|string \| null|false|read-only|none|

<h2 id="tocS_IndexerResource">IndexerResource</h2>
<!-- backwards compatibility -->
<a id="schemaindexerresource"></a>
<a id="schema_IndexerResource"></a>
<a id="tocSindexerresource"></a>
<a id="tocsindexerresource"></a>

```json
{
  "id": 0,
  "name": "string",
  "fields": [
    {
      "order": 0,
      "name": "string",
      "label": "string",
      "unit": "string",
      "helpText": "string",
      "helpTextWarning": "string",
      "helpLink": "string",
      "value": null,
      "type": "string",
      "advanced": true,
      "selectOptions": [
        {
          "value": 0,
          "name": "string",
          "order": 0,
          "hint": "string",
          "dividerAfter": true
        }
      ],
      "selectOptionsProviderAction": "string",
      "section": "string",
      "hidden": "string",
      "privacy": "normal",
      "placeholder": "string",
      "isFloat": true
    }
  ],
  "implementationName": "string",
  "implementation": "string",
  "configContract": "string",
  "infoLink": "string",
  "message": {
    "message": "string",
    "type": "info"
  },
  "tags": [
    0
  ],
  "presets": [
    {
      "id": 0,
      "name": "string",
      "fields": [
        {
          "order": 0,
          "name": "string",
          "label": "string",
          "unit": "string",
          "helpText": "string",
          "helpTextWarning": "string",
          "helpLink": "string",
          "value": null,
          "type": "string",
          "advanced": true,
          "selectOptions": [
            {
              "value": 0,
              "name": "string",
              "order": 0,
              "hint": "string",
              "dividerAfter": true
            }
          ],
          "selectOptionsProviderAction": "string",
          "section": "string",
          "hidden": "string",
          "privacy": "normal",
          "placeholder": "string",
          "isFloat": true
        }
      ],
      "implementationName": "string",
      "implementation": "string",
      "configContract": "string",
      "infoLink": "string",
      "message": {
        "message": "string",
        "type": "info"
      },
      "tags": [
        0
      ],
      "presets": [
        {}
      ],
      "enableRss": true,
      "enableAutomaticSearch": true,
      "enableInteractiveSearch": true,
      "supportsRss": true,
      "supportsSearch": true,
      "protocol": "unknown",
      "priority": 0,
      "downloadClientId": 0
    }
  ],
  "enableRss": true,
  "enableAutomaticSearch": true,
  "enableInteractiveSearch": true,
  "supportsRss": true,
  "supportsSearch": true,
  "protocol": "unknown",
  "priority": 0,
  "downloadClientId": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|false|none|none|
|name|string \| null|false|none|none|
|fields|[[Field](#schemafield)]|false|none|none|
|implementationName|string \| null|false|none|none|
|implementation|string \| null|false|none|none|
|configContract|string \| null|false|none|none|
|infoLink|string \| null|false|none|none|
|message|[ProviderMessage](#schemaprovidermessage)|false|none|none|
|tags|[integer(int32)]|false|none|none|
|presets|[[IndexerResource](#schemaindexerresource)]|false|none|none|
|enableRss|boolean|false|none|none|
|enableAutomaticSearch|boolean|false|none|none|
|enableInteractiveSearch|boolean|false|none|none|
|supportsRss|boolean|false|none|none|
|supportsSearch|boolean|false|none|none|
|protocol|[DownloadProtocol](#schemadownloadprotocol)|false|none|none|
|priority|integer(int32)|false|none|none|
|downloadClientId|integer(int32)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|protocol|unknown|
|protocol|usenet|
|protocol|torrent|

<h2 id="tocS_Language">Language</h2>
<!-- backwards compatibility -->
<a id="schemalanguage"></a>
<a id="schema_Language"></a>
<a id="tocSlanguage"></a>
<a id="tocslanguage"></a>

```json
{
  "id": 0,
  "name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|false|none|none|
|name|string \| null|false|none|none|

<h2 id="tocS_LanguageResource">LanguageResource</h2>
<!-- backwards compatibility -->
<a id="schemalanguageresource"></a>
<a id="schema_LanguageResource"></a>
<a id="tocSlanguageresource"></a>
<a id="tocslanguageresource"></a>

```json
{
  "id": 0,
  "name": "string",
  "nameLower": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|false|none|none|
|name|string \| null|false|none|none|
|nameLower|string \| null|false|read-only|none|

<h2 id="tocS_LocalizationLanguageResource">LocalizationLanguageResource</h2>
<!-- backwards compatibility -->
<a id="schemalocalizationlanguageresource"></a>
<a id="schema_LocalizationLanguageResource"></a>
<a id="tocSlocalizationlanguageresource"></a>
<a id="tocslocalizationlanguageresource"></a>

```json
{
  "identifier": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|identifier|string \| null|false|none|none|

<h2 id="tocS_LogFileResource">LogFileResource</h2>
<!-- backwards compatibility -->
<a id="schemalogfileresource"></a>
<a id="schema_LogFileResource"></a>
<a id="tocSlogfileresource"></a>
<a id="tocslogfileresource"></a>

```json
{
  "id": 0,
  "filename": "string",
  "lastWriteTime": "1970-01-01T00:00:00Z",
  "contentsUrl": "string",
  "downloadUrl": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|false|none|none|
|filename|string \| null|false|none|none|
|lastWriteTime|string(date-time)|false|none|none|
|contentsUrl|string \| null|false|none|none|
|downloadUrl|string \| null|false|none|none|

<h2 id="tocS_LogResource">LogResource</h2>
<!-- backwards compatibility -->
<a id="schemalogresource"></a>
<a id="schema_LogResource"></a>
<a id="tocSlogresource"></a>
<a id="tocslogresource"></a>

```json
{
  "id": 0,
  "time": "1970-01-01T00:00:00Z",
  "exception": "string",
  "exceptionType": "string",
  "level": "string",
  "logger": "string",
  "message": "string",
  "method": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|false|none|none|
|time|string(date-time)|false|none|none|
|exception|string \| null|false|none|none|
|exceptionType|string \| null|false|none|none|
|level|string \| null|false|none|none|
|logger|string \| null|false|none|none|
|message|string \| null|false|none|none|
|method|string \| null|false|none|none|

<h2 id="tocS_LogResourcePagingResource">LogResourcePagingResource</h2>
<!-- backwards compatibility -->
<a id="schemalogresourcepagingresource"></a>
<a id="schema_LogResourcePagingResource"></a>
<a id="tocSlogresourcepagingresource"></a>
<a id="tocslogresourcepagingresource"></a>

```json
{
  "page": 0,
  "pageSize": 0,
  "sortKey": "string",
  "sortDirection": "default",
  "totalRecords": 0,
  "records": [
    {
      "id": 0,
      "time": "1970-01-01T00:00:00Z",
      "exception": "string",
      "exceptionType": "string",
      "level": "string",
      "logger": "string",
      "message": "string",
      "method": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|page|integer(int32)|false|none|none|
|pageSize|integer(int32)|false|none|none|
|sortKey|string \| null|false|none|none|
|sortDirection|[SortDirection](#schemasortdirection)|false|none|none|
|totalRecords|integer(int32)|false|none|none|
|records|[[LogResource](#schemalogresource)]|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|sortDirection|default|
|sortDirection|ascending|
|sortDirection|descending|

<h2 id="tocS_ManualImportReprocessResource">ManualImportReprocessResource</h2>
<!-- backwards compatibility -->
<a id="schemamanualimportreprocessresource"></a>
<a id="schema_ManualImportReprocessResource"></a>
<a id="tocSmanualimportreprocessresource"></a>
<a id="tocsmanualimportreprocessresource"></a>

```json
{
  "id": 0,
  "path": "string",
  "movieId": 0,
  "movie": {
    "id": 0,
    "title": "string",
    "originalTitle": "string",
    "originalLanguage": {
      "id": 0,
      "name": "string"
    },
    "alternateTitles": [
      {
        "id": 0,
        "sourceType": "tmdb",
        "movieMetadataId": 0,
        "title": "string",
        "cleanTitle": "string"
      }
    ],
    "secondaryYear": 0,
    "secondaryYearSourceId": 0,
    "sortTitle": "string",
    "sizeOnDisk": 0,
    "status": "tba",
    "overview": "string",
    "inCinemas": "1970-01-01T00:00:00Z",
    "physicalRelease": "1970-01-01T00:00:00Z",
    "digitalRelease": "1970-01-01T00:00:00Z",
    "releaseDate": "1970-01-01T00:00:00Z",
    "physicalReleaseNote": "string",
    "images": [
      {
        "coverType": "unknown",
        "url": "string",
        "remoteUrl": "string"
      }
    ],
    "website": "string",
    "remotePoster": "string",
    "year": 0,
    "youTubeTrailerId": "string",
    "studio": "string",
    "path": "string",
    "qualityProfileId": 0,
    "hasFile": true,
    "movieFileId": 0,
    "monitored": true,
    "minimumAvailability": "tba",
    "isAvailable": true,
    "folderName": "string",
    "runtime": 0,
    "cleanTitle": "string",
    "imdbId": "string",
    "tmdbId": 0,
    "titleSlug": "string",
    "rootFolderPath": "string",
    "folder": "string",
    "certification": "string",
    "genres": [
      "string"
    ],
    "keywords": [
      "string"
    ],
    "tags": [
      0
    ],
    "added": "1970-01-01T00:00:00Z",
    "addOptions": {
      "ignoreEpisodesWithFiles": true,
      "ignoreEpisodesWithoutFiles": true,
      "monitor": "movieOnly",
      "searchForMovie": true,
      "addMethod": "manual"
    },
    "ratings": {
      "imdb": {
        "votes": 0,
        "value": 0,
        "type": "user"
      },
      "tmdb": {
        "votes": 0,
        "value": 0,
        "type": "user"
      },
      "metacritic": {
        "votes": 0,
        "value": 0,
        "type": "user"
      },
      "rottenTomatoes": {
        "votes": 0,
        "value": 0,
        "type": "user"
      },
      "trakt": {
        "votes": 0,
        "value": 0,
        "type": "user"
      }
    },
    "movieFile": {
      "id": 0,
      "movieId": 0,
      "relativePath": "string",
      "path": "string",
      "size": 0,
      "dateAdded": "1970-01-01T00:00:00Z",
      "sceneName": "string",
      "releaseGroup": "string",
      "edition": "string",
      "languages": [
        {
          "id": 0,
          "name": "string"
        }
      ],
      "quality": {
        "quality": {
          "id": 0,
          "name": "string",
          "source": "unknown",
          "resolution": 0,
          "modifier": "none"
        },
        "revision": {
          "version": 0,
          "real": 0,
          "isRepack": true
        }
      },
      "customFormats": [
        {
          "id": 0,
          "name": "string",
          "includeCustomFormatWhenRenaming": true,
          "specifications": [
            {
              "id": 0,
              "name": "string",
              "implementation": "string",
              "implementationName": "string",
              "infoLink": "string",
              "negate": true,
              "required": true,
              "fields": [
                {
                  "order": 0,
                  "name": "string",
                  "label": "string",
                  "unit": "string",
                  "helpText": "string",
                  "helpTextWarning": "string",
                  "helpLink": "string",
                  "value": null,
                  "type": "string",
                  "advanced": true,
                  "selectOptions": [
                    {
                      "value": 0,
                      "name": "string",
                      "order": 0,
                      "hint": "string",
                      "dividerAfter": true
                    }
                  ],
                  "selectOptionsProviderAction": "string",
                  "section": "string",
                  "hidden": "string",
                  "privacy": "normal",
                  "placeholder": "string",
                  "isFloat": true
                }
              ],
              "presets": [
                {}
              ]
            }
          ]
        }
      ],
      "customFormatScore": 0,
      "indexerFlags": 0,
      "mediaInfo": {
        "id": 0,
        "audioBitrate": 0,
        "audioChannels": 0,
        "audioCodec": "string",
        "audioLanguages": "string",
        "audioStreamCount": 0,
        "videoBitDepth": 0,
        "videoBitrate": 0,
        "videoCodec": "string",
        "videoFps": 0,
        "videoDynamicRange": "string",
        "videoDynamicRangeType": "string",
        "resolution": "string",
        "runTime": "string",
        "scanType": "string",
        "subtitles": "string"
      },
      "originalFilePath": "string",
      "qualityCutoffNotMet": true
    },
    "collection": {
      "title": "string",
      "tmdbId": 0
    },
    "popularity": 0,
    "lastSearchTime": "1970-01-01T00:00:00Z",
    "statistics": {
      "movieFileCount": 0,
      "sizeOnDisk": 0,
      "releaseGroups": [
        "string"
      ],
      "movieFileQualities": [
        {
          "id": 0,
          "name": "string",
          "source": "unknown",
          "resolution": 0,
          "modifier": "none"
        }
      ]
    }
  },
  "quality": {
    "quality": {
      "id": 0,
      "name": "string",
      "source": "unknown",
      "resolution": 0,
      "modifier": "none"
    },
    "revision": {
      "version": 0,
      "real": 0,
      "isRepack": true
    }
  },
  "languages": [
    {
      "id": 0,
      "name": "string"
    }
  ],
  "releaseGroup": "string",
  "downloadId": "string",
  "customFormats": [
    {
      "id": 0,
      "name": "string",
      "includeCustomFormatWhenRenaming": true,
      "specifications": [
        {
          "id": 0,
          "name": "string",
          "implementation": "string",
          "implementationName": "string",
          "infoLink": "string",
          "negate": true,
          "required": true,
          "fields": [
            {
              "order": 0,
              "name": "string",
              "label": "string",
              "unit": "string",
              "helpText": "string",
              "helpTextWarning": "string",
              "helpLink": "string",
              "value": null,
              "type": "string",
              "advanced": true,
              "selectOptions": [
                {
                  "value": 0,
                  "name": "string",
                  "order": 0,
                  "hint": "string",
                  "dividerAfter": true
                }
              ],
              "selectOptionsProviderAction": "string",
              "section": "string",
              "hidden": "string",
              "privacy": "normal",
              "placeholder": "string",
              "isFloat": true
            }
          ],
          "presets": [
            {}
          ]
        }
      ]
    }
  ],
  "customFormatScore": 0,
  "indexerFlags": 0,
  "rejections": [
    {
      "reason": "string",
      "type": "permanent"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|false|none|none|
|path|string \| null|false|none|none|
|movieId|integer(int32)|false|none|none|
|movie|[MovieResource](#schemamovieresource)|false|none|none|
|quality|[QualityModel](#schemaqualitymodel)|false|none|none|
|languages|[[Language](#schemalanguage)]|false|none|none|
|releaseGroup|string \| null|false|none|none|
|downloadId|string \| null|false|none|none|
|customFormats|[[CustomFormatResource](#schemacustomformatresource)]|false|none|none|
|customFormatScore|integer(int32)|false|none|none|
|indexerFlags|integer(int32)|false|none|none|
|rejections|[[ImportRejectionResource](#schemaimportrejectionresource)]|false|none|none|

<h2 id="tocS_ManualImportResource">ManualImportResource</h2>
<!-- backwards compatibility -->
<a id="schemamanualimportresource"></a>
<a id="schema_ManualImportResource"></a>
<a id="tocSmanualimportresource"></a>
<a id="tocsmanualimportresource"></a>

```json
{
  "id": 0,
  "path": "string",
  "relativePath": "string",
  "folderName": "string",
  "name": "string",
  "size": 0,
  "movie": {
    "id": 0,
    "title": "string",
    "originalTitle": "string",
    "originalLanguage": {
      "id": 0,
      "name": "string"
    },
    "alternateTitles": [
      {
        "id": 0,
        "sourceType": "tmdb",
        "movieMetadataId": 0,
        "title": "string",
        "cleanTitle": "string"
      }
    ],
    "secondaryYear": 0,
    "secondaryYearSourceId": 0,
    "sortTitle": "string",
    "sizeOnDisk": 0,
    "status": "tba",
    "overview": "string",
    "inCinemas": "1970-01-01T00:00:00Z",
    "physicalRelease": "1970-01-01T00:00:00Z",
    "digitalRelease": "1970-01-01T00:00:00Z",
    "releaseDate": "1970-01-01T00:00:00Z",
    "physicalReleaseNote": "string",
    "images": [
      {
        "coverType": "unknown",
        "url": "string",
        "remoteUrl": "string"
      }
    ],
    "website": "string",
    "remotePoster": "string",
    "year": 0,
    "youTubeTrailerId": "string",
    "studio": "string",
    "path": "string",
    "qualityProfileId": 0,
    "hasFile": true,
    "movieFileId": 0,
    "monitored": true,
    "minimumAvailability": "tba",
    "isAvailable": true,
    "folderName": "string",
    "runtime": 0,
    "cleanTitle": "string",
    "imdbId": "string",
    "tmdbId": 0,
    "titleSlug": "string",
    "rootFolderPath": "string",
    "folder": "string",
    "certification": "string",
    "genres": [
      "string"
    ],
    "keywords": [
      "string"
    ],
    "tags": [
      0
    ],
    "added": "1970-01-01T00:00:00Z",
    "addOptions": {
      "ignoreEpisodesWithFiles": true,
      "ignoreEpisodesWithoutFiles": true,
      "monitor": "movieOnly",
      "searchForMovie": true,
      "addMethod": "manual"
    },
    "ratings": {
      "imdb": {
        "votes": 0,
        "value": 0,
        "type": "user"
      },
      "tmdb": {
        "votes": 0,
        "value": 0,
        "type": "user"
      },
      "metacritic": {
        "votes": 0,
        "value": 0,
        "type": "user"
      },
      "rottenTomatoes": {
        "votes": 0,
        "value": 0,
        "type": "user"
      },
      "trakt": {
        "votes": 0,
        "value": 0,
        "type": "user"
      }
    },
    "movieFile": {
      "id": 0,
      "movieId": 0,
      "relativePath": "string",
      "path": "string",
      "size": 0,
      "dateAdded": "1970-01-01T00:00:00Z",
      "sceneName": "string",
      "releaseGroup": "string",
      "edition": "string",
      "languages": [
        {
          "id": 0,
          "name": "string"
        }
      ],
      "quality": {
        "quality": {
          "id": 0,
          "name": "string",
          "source": "unknown",
          "resolution": 0,
          "modifier": "none"
        },
        "revision": {
          "version": 0,
          "real": 0,
          "isRepack": true
        }
      },
      "customFormats": [
        {
          "id": 0,
          "name": "string",
          "includeCustomFormatWhenRenaming": true,
          "specifications": [
            {
              "id": 0,
              "name": "string",
              "implementation": "string",
              "implementationName": "string",
              "infoLink": "string",
              "negate": true,
              "required": true,
              "fields": [
                {
                  "order": 0,
                  "name": "string",
                  "label": "string",
                  "unit": "string",
                  "helpText": "string",
                  "helpTextWarning": "string",
                  "helpLink": "string",
                  "value": null,
                  "type": "string",
                  "advanced": true,
                  "selectOptions": [
                    {
                      "value": 0,
                      "name": "string",
                      "order": 0,
                      "hint": "string",
                      "dividerAfter": true
                    }
                  ],
                  "selectOptionsProviderAction": "string",
                  "section": "string",
                  "hidden": "string",
                  "privacy": "normal",
                  "placeholder": "string",
                  "isFloat": true
                }
              ],
              "presets": [
                {}
              ]
            }
          ]
        }
      ],
      "customFormatScore": 0,
      "indexerFlags": 0,
      "mediaInfo": {
        "id": 0,
        "audioBitrate": 0,
        "audioChannels": 0,
        "audioCodec": "string",
        "audioLanguages": "string",
        "audioStreamCount": 0,
        "videoBitDepth": 0,
        "videoBitrate": 0,
        "videoCodec": "string",
        "videoFps": 0,
        "videoDynamicRange": "string",
        "videoDynamicRangeType": "string",
        "resolution": "string",
        "runTime": "string",
        "scanType": "string",
        "subtitles": "string"
      },
      "originalFilePath": "string",
      "qualityCutoffNotMet": true
    },
    "collection": {
      "title": "string",
      "tmdbId": 0
    },
    "popularity": 0,
    "lastSearchTime": "1970-01-01T00:00:00Z",
    "statistics": {
      "movieFileCount": 0,
      "sizeOnDisk": 0,
      "releaseGroups": [
        "string"
      ],
      "movieFileQualities": [
        {
          "id": 0,
          "name": "string",
          "source": "unknown",
          "resolution": 0,
          "modifier": "none"
        }
      ]
    }
  },
  "movieFileId": 0,
  "releaseGroup": "string",
  "quality": {
    "quality": {
      "id": 0,
      "name": "string",
      "source": "unknown",
      "resolution": 0,
      "modifier": "none"
    },
    "revision": {
      "version": 0,
      "real": 0,
      "isRepack": true
    }
  },
  "languages": [
    {
      "id": 0,
      "name": "string"
    }
  ],
  "qualityWeight": 0,
  "downloadId": "string",
  "customFormats": [
    {
      "id": 0,
      "name": "string",
      "includeCustomFormatWhenRenaming": true,
      "specifications": [
        {
          "id": 0,
          "name": "string",
          "implementation": "string",
          "implementationName": "string",
          "infoLink": "string",
          "negate": true,
          "required": true,
          "fields": [
            {
              "order": 0,
              "name": "string",
              "label": "string",
              "unit": "string",
              "helpText": "string",
              "helpTextWarning": "string",
              "helpLink": "string",
              "value": null,
              "type": "string",
              "advanced": true,
              "selectOptions": [
                {
                  "value": 0,
                  "name": "string",
                  "order": 0,
                  "hint": "string",
                  "dividerAfter": true
                }
              ],
              "selectOptionsProviderAction": "string",
              "section": "string",
              "hidden": "string",
              "privacy": "normal",
              "placeholder": "string",
              "isFloat": true
            }
          ],
          "presets": [
            {}
          ]
        }
      ]
    }
  ],
  "customFormatScore": 0,
  "indexerFlags": 0,
  "rejections": [
    {
      "reason": "string",
      "type": "permanent"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|false|none|none|
|path|string \| null|false|none|none|
|relativePath|string \| null|false|none|none|
|folderName|string \| null|false|none|none|
|name|string \| null|false|none|none|
|size|integer(int64)|false|none|none|
|movie|[MovieResource](#schemamovieresource)|false|none|none|
|movieFileId|integer(int32) \| null|false|none|none|
|releaseGroup|string \| null|false|none|none|
|quality|[QualityModel](#schemaqualitymodel)|false|none|none|
|languages|[[Language](#schemalanguage)]|false|none|none|
|qualityWeight|integer(int32)|false|none|none|
|downloadId|string \| null|false|none|none|
|customFormats|[[CustomFormatResource](#schemacustomformatresource)]|false|none|none|
|customFormatScore|integer(int32)|false|none|none|
|indexerFlags|integer(int32)|false|none|none|
|rejections|[[ImportRejectionResource](#schemaimportrejectionresource)]|false|none|none|

<h2 id="tocS_MediaCover">MediaCover</h2>
<!-- backwards compatibility -->
<a id="schemamediacover"></a>
<a id="schema_MediaCover"></a>
<a id="tocSmediacover"></a>
<a id="tocsmediacover"></a>

```json
{
  "coverType": "unknown",
  "url": "string",
  "remoteUrl": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|coverType|[MediaCoverTypes](#schemamediacovertypes)|false|none|none|
|url|string \| null|false|none|none|
|remoteUrl|string \| null|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|coverType|unknown|
|coverType|poster|
|coverType|banner|
|coverType|fanart|
|coverType|screenshot|
|coverType|headshot|
|coverType|clearlogo|

<h2 id="tocS_MediaCoverTypes">MediaCoverTypes</h2>
<!-- backwards compatibility -->
<a id="schemamediacovertypes"></a>
<a id="schema_MediaCoverTypes"></a>
<a id="tocSmediacovertypes"></a>
<a id="tocsmediacovertypes"></a>

```json
"unknown"
```

<h2 id="tocS_MediaInfoResource">MediaInfoResource</h2>
<!-- backwards compatibility -->
<a id="schemamediainforesource"></a>
<a id="schema_MediaInfoResource"></a>
<a id="tocSmediainforesource"></a>
<a id="tocsmediainforesource"></a>

```json
{
  "id": 0,
  "audioBitrate": 0,
  "audioChannels": 0,
  "audioCodec": "string",
  "audioLanguages": "string",
  "audioStreamCount": 0,
  "videoBitDepth": 0,
  "videoBitrate": 0,
  "videoCodec": "string",
  "videoFps": 0,
  "videoDynamicRange": "string",
  "videoDynamicRangeType": "string",
  "resolution": "string",
  "runTime": "string",
  "scanType": "string",
  "subtitles": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|false|none|none|
|audioBitrate|integer(int64)|false|none|none|
|audioChannels|number(double)|false|none|none|
|audioCodec|string \| null|false|none|none|
|audioLanguages|string \| null|false|none|none|
|audioStreamCount|integer(int32)|false|none|none|
|videoBitDepth|integer(int32)|false|none|none|
|videoBitrate|integer(int64)|false|none|none|
|videoCodec|string \| null|false|none|none|
|videoFps|number(double)|false|none|none|
|videoDynamicRange|string \| null|false|none|none|
|videoDynamicRangeType|string \| null|false|none|none|
|resolution|string \| null|false|none|none|
|runTime|string \| null|false|none|none|
|scanType|string \| null|false|none|none|
|subtitles|string \| null|false|none|none|

<h2 id="tocS_MediaManagementConfigResource">MediaManagementConfigResource</h2>
<!-- backwards compatibility -->
<a id="schemamediamanagementconfigresource"></a>
<a id="schema_MediaManagementConfigResource"></a>
<a id="tocSmediamanagementconfigresource"></a>
<a id="tocsmediamanagementconfigresource"></a>

```json
{
  "id": 0,
  "autoUnmonitorPreviouslyDownloadedMovies": true,
  "recycleBin": "string",
  "recycleBinCleanupDays": 0,
  "downloadPropersAndRepacks": "preferAndUpgrade",
  "createEmptyMovieFolders": true,
  "deleteEmptyFolders": true,
  "fileDate": "none",
  "rescanAfterRefresh": "always",
  "autoRenameFolders": true,
  "pathsDefaultStatic": true,
  "setPermissionsLinux": true,
  "chmodFolder": "string",
  "chownGroup": "string",
  "skipFreeSpaceCheckWhenImporting": true,
  "minimumFreeSpaceWhenImporting": 0,
  "copyUsingHardlinks": true,
  "useScriptImport": true,
  "scriptImportPath": "string",
  "importExtraFiles": true,
  "extraFileExtensions": "string",
  "enableMediaInfo": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|false|none|none|
|autoUnmonitorPreviouslyDownloadedMovies|boolean|false|none|none|
|recycleBin|string \| null|false|none|none|
|recycleBinCleanupDays|integer(int32)|false|none|none|
|downloadPropersAndRepacks|[ProperDownloadTypes](#schemaproperdownloadtypes)|false|none|none|
|createEmptyMovieFolders|boolean|false|none|none|
|deleteEmptyFolders|boolean|false|none|none|
|fileDate|[FileDateType](#schemafiledatetype)|false|none|none|
|rescanAfterRefresh|[RescanAfterRefreshType](#schemarescanafterrefreshtype)|false|none|none|
|autoRenameFolders|boolean|false|none|none|
|pathsDefaultStatic|boolean|false|none|none|
|setPermissionsLinux|boolean|false|none|none|
|chmodFolder|string \| null|false|none|none|
|chownGroup|string \| null|false|none|none|
|skipFreeSpaceCheckWhenImporting|boolean|false|none|none|
|minimumFreeSpaceWhenImporting|integer(int32)|false|none|none|
|copyUsingHardlinks|boolean|false|none|none|
|useScriptImport|boolean|false|none|none|
|scriptImportPath|string \| null|false|none|none|
|importExtraFiles|boolean|false|none|none|
|extraFileExtensions|string \| null|false|none|none|
|enableMediaInfo|boolean|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|downloadPropersAndRepacks|preferAndUpgrade|
|downloadPropersAndRepacks|doNotUpgrade|
|downloadPropersAndRepacks|doNotPrefer|
|fileDate|none|
|fileDate|cinemas|
|fileDate|release|
|rescanAfterRefresh|always|
|rescanAfterRefresh|afterManual|
|rescanAfterRefresh|never|

<h2 id="tocS_MetadataConfigResource">MetadataConfigResource</h2>
<!-- backwards compatibility -->
<a id="schemametadataconfigresource"></a>
<a id="schema_MetadataConfigResource"></a>
<a id="tocSmetadataconfigresource"></a>
<a id="tocsmetadataconfigresource"></a>

```json
{
  "id": 0,
  "certificationCountry": "au"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|false|none|none|
|certificationCountry|[TMDbCountryCode](#schematmdbcountrycode)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|certificationCountry|au|
|certificationCountry|br|
|certificationCountry|ca|
|certificationCountry|fr|
|certificationCountry|de|
|certificationCountry|gb|
|certificationCountry|in|
|certificationCountry|ie|
|certificationCountry|it|
|certificationCountry|nz|
|certificationCountry|ro|
|certificationCountry|es|
|certificationCountry|us|

<h2 id="tocS_MetadataResource">MetadataResource</h2>
<!-- backwards compatibility -->
<a id="schemametadataresource"></a>
<a id="schema_MetadataResource"></a>
<a id="tocSmetadataresource"></a>
<a id="tocsmetadataresource"></a>

```json
{
  "id": 0,
  "name": "string",
  "fields": [
    {
      "order": 0,
      "name": "string",
      "label": "string",
      "unit": "string",
      "helpText": "string",
      "helpTextWarning": "string",
      "helpLink": "string",
      "value": null,
      "type": "string",
      "advanced": true,
      "selectOptions": [
        {
          "value": 0,
          "name": "string",
          "order": 0,
          "hint": "string",
          "dividerAfter": true
        }
      ],
      "selectOptionsProviderAction": "string",
      "section": "string",
      "hidden": "string",
      "privacy": "normal",
      "placeholder": "string",
      "isFloat": true
    }
  ],
  "implementationName": "string",
  "implementation": "string",
  "configContract": "string",
  "infoLink": "string",
  "message": {
    "message": "string",
    "type": "info"
  },
  "tags": [
    0
  ],
  "presets": [
    {
      "id": 0,
      "name": "string",
      "fields": [
        {
          "order": 0,
          "name": "string",
          "label": "string",
          "unit": "string",
          "helpText": "string",
          "helpTextWarning": "string",
          "helpLink": "string",
          "value": null,
          "type": "string",
          "advanced": true,
          "selectOptions": [
            {
              "value": 0,
              "name": "string",
              "order": 0,
              "hint": "string",
              "dividerAfter": true
            }
          ],
          "selectOptionsProviderAction": "string",
          "section": "string",
          "hidden": "string",
          "privacy": "normal",
          "placeholder": "string",
          "isFloat": true
        }
      ],
      "implementationName": "string",
      "implementation": "string",
      "configContract": "string",
      "infoLink": "string",
      "message": {
        "message": "string",
        "type": "info"
      },
      "tags": [
        0
      ],
      "presets": [
        {}
      ],
      "enable": true
    }
  ],
  "enable": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|false|none|none|
|name|string \| null|false|none|none|
|fields|[[Field](#schemafield)]|false|none|none|
|implementationName|string \| null|false|none|none|
|implementation|string \| null|false|none|none|
|configContract|string \| null|false|none|none|
|infoLink|string \| null|false|none|none|
|message|[ProviderMessage](#schemaprovidermessage)|false|none|none|
|tags|[integer(int32)]|false|none|none|
|presets|[[MetadataResource](#schemametadataresource)]|false|none|none|
|enable|boolean|false|none|none|

<h2 id="tocS_Modifier">Modifier</h2>
<!-- backwards compatibility -->
<a id="schemamodifier"></a>
<a id="schema_Modifier"></a>
<a id="tocSmodifier"></a>
<a id="tocsmodifier"></a>

```json
"none"
```

<h2 id="tocS_MonitorTypes">MonitorTypes</h2>
<!-- backwards compatibility -->
<a id="schemamonitortypes"></a>
<a id="schema_MonitorTypes"></a>
<a id="tocSmonitortypes"></a>
<a id="tocsmonitortypes"></a>

```json
"movieOnly"
```

<h2 id="tocS_MovieCollection">MovieCollection</h2>
<!-- backwards compatibility -->
<a id="schemamoviecollection"></a>
<a id="schema_MovieCollection"></a>
<a id="tocSmoviecollection"></a>
<a id="tocsmoviecollection"></a>

```json
{
  "id": 0,
  "title": "string",
  "cleanTitle": "string",
  "sortTitle": "string",
  "tmdbId": 0,
  "overview": "string",
  "monitored": true,
  "qualityProfileId": 0,
  "rootFolderPath": "string",
  "searchOnAdd": true,
  "minimumAvailability": "tba",
  "lastInfoSync": "1970-01-01T00:00:00Z",
  "images": [
    {
      "coverType": "unknown",
      "url": "string",
      "remoteUrl": "string"
    }
  ],
  "added": "1970-01-01T00:00:00Z",
  "movies": [
    {
      "id": 0,
      "tmdbId": 0,
      "images": [
        {
          "coverType": "unknown",
          "url": "string",
          "remoteUrl": "string"
        }
      ],
      "genres": [
        "string"
      ],
      "keywords": [
        "string"
      ],
      "inCinemas": "1970-01-01T00:00:00Z",
      "physicalRelease": "1970-01-01T00:00:00Z",
      "digitalRelease": "1970-01-01T00:00:00Z",
      "certification": "string",
      "year": 0,
      "ratings": {
        "imdb": {
          "votes": 0,
          "value": 0,
          "type": "user"
        },
        "tmdb": {
          "votes": 0,
          "value": 0,
          "type": "user"
        },
        "metacritic": {
          "votes": 0,
          "value": 0,
          "type": "user"
        },
        "rottenTomatoes": {
          "votes": 0,
          "value": 0,
          "type": "user"
        },
        "trakt": {
          "votes": 0,
          "value": 0,
          "type": "user"
        }
      },
      "collectionTmdbId": 0,
      "collectionTitle": "string",
      "lastInfoSync": "1970-01-01T00:00:00Z",
      "runtime": 0,
      "website": "string",
      "imdbId": "string",
      "title": "string",
      "cleanTitle": "string",
      "sortTitle": "string",
      "status": "tba",
      "overview": "string",
      "alternativeTitles": [
        {
          "id": 0,
          "sourceType": "tmdb",
          "movieMetadataId": 0,
          "title": "string",
          "cleanTitle": "string"
        }
      ],
      "translations": [
        {
          "id": 0,
          "movieMetadataId": 0,
          "title": "string",
          "cleanTitle": "string",
          "overview": "string",
          "language": {
            "id": 0,
            "name": "string"
          }
        }
      ],
      "secondaryYear": 0,
      "youTubeTrailerId": "string",
      "studio": "string",
      "originalTitle": "string",
      "cleanOriginalTitle": "string",
      "originalLanguage": {
        "id": 0,
        "name": "string"
      },
      "recommendations": [
        0
      ],
      "popularity": 0,
      "isRecentMovie": true
    }
  ],
  "tags": [
    0
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|false|none|none|
|title|string \| null|false|none|none|
|cleanTitle|string \| null|false|none|none|
|sortTitle|string \| null|false|none|none|
|tmdbId|integer(int32)|false|none|none|
|overview|string \| null|false|none|none|
|monitored|boolean|false|none|none|
|qualityProfileId|integer(int32)|false|none|none|
|rootFolderPath|string \| null|false|none|none|
|searchOnAdd|boolean|false|none|none|
|minimumAvailability|[MovieStatusType](#schemamoviestatustype)|false|none|none|
|lastInfoSync|string(date-time) \| null|false|none|none|
|images|[[MediaCover](#schemamediacover)]|false|none|none|
|added|string(date-time)|false|none|none|
|movies|[[MovieMetadata](#schemamoviemetadata)]|false|none|none|
|tags|[integer(int32)]|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|minimumAvailability|tba|
|minimumAvailability|announced|
|minimumAvailability|inCinemas|
|minimumAvailability|released|
|minimumAvailability|deleted|

<h2 id="tocS_MovieCollectionResource">MovieCollectionResource</h2>
<!-- backwards compatibility -->
<a id="schemamoviecollectionresource"></a>
<a id="schema_MovieCollectionResource"></a>
<a id="tocSmoviecollectionresource"></a>
<a id="tocsmoviecollectionresource"></a>

```json
{
  "title": "string",
  "tmdbId": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|title|string \| null|false|none|none|
|tmdbId|integer(int32)|false|none|none|

<h2 id="tocS_MovieEditorResource">MovieEditorResource</h2>
<!-- backwards compatibility -->
<a id="schemamovieeditorresource"></a>
<a id="schema_MovieEditorResource"></a>
<a id="tocSmovieeditorresource"></a>
<a id="tocsmovieeditorresource"></a>

```json
{
  "movieIds": [
    0
  ],
  "monitored": true,
  "qualityProfileId": 0,
  "minimumAvailability": "tba",
  "rootFolderPath": "string",
  "tags": [
    0
  ],
  "applyTags": "add",
  "moveFiles": true,
  "deleteFiles": true,
  "addImportExclusion": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|movieIds|[integer(int32)]|false|none|none|
|monitored|boolean \| null|false|none|none|
|qualityProfileId|integer(int32) \| null|false|none|none|
|minimumAvailability|[MovieStatusType](#schemamoviestatustype)|false|none|none|
|rootFolderPath|string \| null|false|none|none|
|tags|[integer(int32)]|false|none|none|
|applyTags|[ApplyTags](#schemaapplytags)|false|none|none|
|moveFiles|boolean|false|none|none|
|deleteFiles|boolean|false|none|none|
|addImportExclusion|boolean|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|minimumAvailability|tba|
|minimumAvailability|announced|
|minimumAvailability|inCinemas|
|minimumAvailability|released|
|minimumAvailability|deleted|
|applyTags|add|
|applyTags|remove|
|applyTags|replace|

<h2 id="tocS_MovieFileListResource">MovieFileListResource</h2>
<!-- backwards compatibility -->
<a id="schemamoviefilelistresource"></a>
<a id="schema_MovieFileListResource"></a>
<a id="tocSmoviefilelistresource"></a>
<a id="tocsmoviefilelistresource"></a>

```json
{
  "movieFileIds": [
    0
  ],
  "languages": [
    {
      "id": 0,
      "name": "string"
    }
  ],
  "quality": {
    "quality": {
      "id": 0,
      "name": "string",
      "source": "unknown",
      "resolution": 0,
      "modifier": "none"
    },
    "revision": {
      "version": 0,
      "real": 0,
      "isRepack": true
    }
  },
  "edition": "string",
  "releaseGroup": "string",
  "sceneName": "string",
  "indexerFlags": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|movieFileIds|[integer(int32)]|false|none|none|
|languages|[[Language](#schemalanguage)]|false|none|none|
|quality|[QualityModel](#schemaqualitymodel)|false|none|none|
|edition|string \| null|false|none|none|
|releaseGroup|string \| null|false|none|none|
|sceneName|string \| null|false|none|none|
|indexerFlags|integer(int32) \| null|false|none|none|

<h2 id="tocS_MovieFileResource">MovieFileResource</h2>
<!-- backwards compatibility -->
<a id="schemamoviefileresource"></a>
<a id="schema_MovieFileResource"></a>
<a id="tocSmoviefileresource"></a>
<a id="tocsmoviefileresource"></a>

```json
{
  "id": 0,
  "movieId": 0,
  "relativePath": "string",
  "path": "string",
  "size": 0,
  "dateAdded": "1970-01-01T00:00:00Z",
  "sceneName": "string",
  "releaseGroup": "string",
  "edition": "string",
  "languages": [
    {
      "id": 0,
      "name": "string"
    }
  ],
  "quality": {
    "quality": {
      "id": 0,
      "name": "string",
      "source": "unknown",
      "resolution": 0,
      "modifier": "none"
    },
    "revision": {
      "version": 0,
      "real": 0,
      "isRepack": true
    }
  },
  "customFormats": [
    {
      "id": 0,
      "name": "string",
      "includeCustomFormatWhenRenaming": true,
      "specifications": [
        {
          "id": 0,
          "name": "string",
          "implementation": "string",
          "implementationName": "string",
          "infoLink": "string",
          "negate": true,
          "required": true,
          "fields": [
            {
              "order": 0,
              "name": "string",
              "label": "string",
              "unit": "string",
              "helpText": "string",
              "helpTextWarning": "string",
              "helpLink": "string",
              "value": null,
              "type": "string",
              "advanced": true,
              "selectOptions": [
                {
                  "value": 0,
                  "name": "string",
                  "order": 0,
                  "hint": "string",
                  "dividerAfter": true
                }
              ],
              "selectOptionsProviderAction": "string",
              "section": "string",
              "hidden": "string",
              "privacy": "normal",
              "placeholder": "string",
              "isFloat": true
            }
          ],
          "presets": [
            {}
          ]
        }
      ]
    }
  ],
  "customFormatScore": 0,
  "indexerFlags": 0,
  "mediaInfo": {
    "id": 0,
    "audioBitrate": 0,
    "audioChannels": 0,
    "audioCodec": "string",
    "audioLanguages": "string",
    "audioStreamCount": 0,
    "videoBitDepth": 0,
    "videoBitrate": 0,
    "videoCodec": "string",
    "videoFps": 0,
    "videoDynamicRange": "string",
    "videoDynamicRangeType": "string",
    "resolution": "string",
    "runTime": "string",
    "scanType": "string",
    "subtitles": "string"
  },
  "originalFilePath": "string",
  "qualityCutoffNotMet": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|false|none|none|
|movieId|integer(int32)|false|none|none|
|relativePath|string \| null|false|none|none|
|path|string \| null|false|none|none|
|size|integer(int64)|false|none|none|
|dateAdded|string(date-time)|false|none|none|
|sceneName|string \| null|false|none|none|
|releaseGroup|string \| null|false|none|none|
|edition|string \| null|false|none|none|
|languages|[[Language](#schemalanguage)]|false|none|none|
|quality|[QualityModel](#schemaqualitymodel)|false|none|none|
|customFormats|[[CustomFormatResource](#schemacustomformatresource)]|false|none|none|
|customFormatScore|integer(int32) \| null|false|none|none|
|indexerFlags|integer(int32) \| null|false|none|none|
|mediaInfo|[MediaInfoResource](#schemamediainforesource)|false|none|none|
|originalFilePath|string \| null|false|none|none|
|qualityCutoffNotMet|boolean|false|none|none|

<h2 id="tocS_MovieFolderResource">MovieFolderResource</h2>
<!-- backwards compatibility -->
<a id="schemamoviefolderresource"></a>
<a id="schema_MovieFolderResource"></a>
<a id="tocSmoviefolderresource"></a>
<a id="tocsmoviefolderresource"></a>

```json
{
  "folder": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|folder|string \| null|false|none|none|

<h2 id="tocS_MovieHistoryEventType">MovieHistoryEventType</h2>
<!-- backwards compatibility -->
<a id="schemamoviehistoryeventtype"></a>
<a id="schema_MovieHistoryEventType"></a>
<a id="tocSmoviehistoryeventtype"></a>
<a id="tocsmoviehistoryeventtype"></a>

```json
"unknown"
```

<h2 id="tocS_MovieMetadata">MovieMetadata</h2>
<!-- backwards compatibility -->
<a id="schemamoviemetadata"></a>
<a id="schema_MovieMetadata"></a>
<a id="tocSmoviemetadata"></a>
<a id="tocsmoviemetadata"></a>

```json
{
  "id": 0,
  "tmdbId": 0,
  "images": [
    {
      "coverType": "unknown",
      "url": "string",
      "remoteUrl": "string"
    }
  ],
  "genres": [
    "string"
  ],
  "keywords": [
    "string"
  ],
  "inCinemas": "1970-01-01T00:00:00Z",
  "physicalRelease": "1970-01-01T00:00:00Z",
  "digitalRelease": "1970-01-01T00:00:00Z",
  "certification": "string",
  "year": 0,
  "ratings": {
    "imdb": {
      "votes": 0,
      "value": 0,
      "type": "user"
    },
    "tmdb": {
      "votes": 0,
      "value": 0,
      "type": "user"
    },
    "metacritic": {
      "votes": 0,
      "value": 0,
      "type": "user"
    },
    "rottenTomatoes": {
      "votes": 0,
      "value": 0,
      "type": "user"
    },
    "trakt": {
      "votes": 0,
      "value": 0,
      "type": "user"
    }
  },
  "collectionTmdbId": 0,
  "collectionTitle": "string",
  "lastInfoSync": "1970-01-01T00:00:00Z",
  "runtime": 0,
  "website": "string",
  "imdbId": "string",
  "title": "string",
  "cleanTitle": "string",
  "sortTitle": "string",
  "status": "tba",
  "overview": "string",
  "alternativeTitles": [
    {
      "id": 0,
      "sourceType": "tmdb",
      "movieMetadataId": 0,
      "title": "string",
      "cleanTitle": "string"
    }
  ],
  "translations": [
    {
      "id": 0,
      "movieMetadataId": 0,
      "title": "string",
      "cleanTitle": "string",
      "overview": "string",
      "language": {
        "id": 0,
        "name": "string"
      }
    }
  ],
  "secondaryYear": 0,
  "youTubeTrailerId": "string",
  "studio": "string",
  "originalTitle": "string",
  "cleanOriginalTitle": "string",
  "originalLanguage": {
    "id": 0,
    "name": "string"
  },
  "recommendations": [
    0
  ],
  "popularity": 0,
  "isRecentMovie": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|false|none|none|
|tmdbId|integer(int32)|false|none|none|
|images|[[MediaCover](#schemamediacover)]|false|none|none|
|genres|[string]|false|none|none|
|keywords|[string]|false|none|none|
|inCinemas|string(date-time) \| null|false|none|none|
|physicalRelease|string(date-time) \| null|false|none|none|
|digitalRelease|string(date-time) \| null|false|none|none|
|certification|string \| null|false|none|none|
|year|integer(int32)|false|none|none|
|ratings|[Ratings](#schemaratings)|false|none|none|
|collectionTmdbId|integer(int32)|false|none|none|
|collectionTitle|string \| null|false|none|none|
|lastInfoSync|string(date-time) \| null|false|none|none|
|runtime|integer(int32)|false|none|none|
|website|string \| null|false|none|none|
|imdbId|string \| null|false|none|none|
|title|string \| null|false|none|none|
|cleanTitle|string \| null|false|none|none|
|sortTitle|string \| null|false|none|none|
|status|[MovieStatusType](#schemamoviestatustype)|false|none|none|
|overview|string \| null|false|none|none|
|alternativeTitles|[[AlternativeTitle](#schemaalternativetitle)]|false|none|none|
|translations|[[MovieTranslation](#schemamovietranslation)]|false|none|none|
|secondaryYear|integer(int32) \| null|false|none|none|
|youTubeTrailerId|string \| null|false|none|none|
|studio|string \| null|false|none|none|
|originalTitle|string \| null|false|none|none|
|cleanOriginalTitle|string \| null|false|none|none|
|originalLanguage|[Language](#schemalanguage)|false|none|none|
|recommendations|[integer(int32)]|false|none|none|
|popularity|number(float)|false|none|none|
|isRecentMovie|boolean|false|read-only|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|tba|
|status|announced|
|status|inCinemas|
|status|released|
|status|deleted|

<h2 id="tocS_MovieResource">MovieResource</h2>
<!-- backwards compatibility -->
<a id="schemamovieresource"></a>
<a id="schema_MovieResource"></a>
<a id="tocSmovieresource"></a>
<a id="tocsmovieresource"></a>

```json
{
  "id": 0,
  "title": "string",
  "originalTitle": "string",
  "originalLanguage": {
    "id": 0,
    "name": "string"
  },
  "alternateTitles": [
    {
      "id": 0,
      "sourceType": "tmdb",
      "movieMetadataId": 0,
      "title": "string",
      "cleanTitle": "string"
    }
  ],
  "secondaryYear": 0,
  "secondaryYearSourceId": 0,
  "sortTitle": "string",
  "sizeOnDisk": 0,
  "status": "tba",
  "overview": "string",
  "inCinemas": "1970-01-01T00:00:00Z",
  "physicalRelease": "1970-01-01T00:00:00Z",
  "digitalRelease": "1970-01-01T00:00:00Z",
  "releaseDate": "1970-01-01T00:00:00Z",
  "physicalReleaseNote": "string",
  "images": [
    {
      "coverType": "unknown",
      "url": "string",
      "remoteUrl": "string"
    }
  ],
  "website": "string",
  "remotePoster": "string",
  "year": 0,
  "youTubeTrailerId": "string",
  "studio": "string",
  "path": "string",
  "qualityProfileId": 0,
  "hasFile": true,
  "movieFileId": 0,
  "monitored": true,
  "minimumAvailability": "tba",
  "isAvailable": true,
  "folderName": "string",
  "runtime": 0,
  "cleanTitle": "string",
  "imdbId": "string",
  "tmdbId": 0,
  "titleSlug": "string",
  "rootFolderPath": "string",
  "folder": "string",
  "certification": "string",
  "genres": [
    "string"
  ],
  "keywords": [
    "string"
  ],
  "tags": [
    0
  ],
  "added": "1970-01-01T00:00:00Z",
  "addOptions": {
    "ignoreEpisodesWithFiles": true,
    "ignoreEpisodesWithoutFiles": true,
    "monitor": "movieOnly",
    "searchForMovie": true,
    "addMethod": "manual"
  },
  "ratings": {
    "imdb": {
      "votes": 0,
      "value": 0,
      "type": "user"
    },
    "tmdb": {
      "votes": 0,
      "value": 0,
      "type": "user"
    },
    "metacritic": {
      "votes": 0,
      "value": 0,
      "type": "user"
    },
    "rottenTomatoes": {
      "votes": 0,
      "value": 0,
      "type": "user"
    },
    "trakt": {
      "votes": 0,
      "value": 0,
      "type": "user"
    }
  },
  "movieFile": {
    "id": 0,
    "movieId": 0,
    "relativePath": "string",
    "path": "string",
    "size": 0,
    "dateAdded": "1970-01-01T00:00:00Z",
    "sceneName": "string",
    "releaseGroup": "string",
    "edition": "string",
    "languages": [
      {
        "id": 0,
        "name": "string"
      }
    ],
    "quality": {
      "quality": {
        "id": 0,
        "name": "string",
        "source": "unknown",
        "resolution": 0,
        "modifier": "none"
      },
      "revision": {
        "version": 0,
        "real": 0,
        "isRepack": true
      }
    },
    "customFormats": [
      {
        "id": 0,
        "name": "string",
        "includeCustomFormatWhenRenaming": true,
        "specifications": [
          {
            "id": 0,
            "name": "string",
            "implementation": "string",
            "implementationName": "string",
            "infoLink": "string",
            "negate": true,
            "required": true,
            "fields": [
              {
                "order": 0,
                "name": "string",
                "label": "string",
                "unit": "string",
                "helpText": "string",
                "helpTextWarning": "string",
                "helpLink": "string",
                "value": null,
                "type": "string",
                "advanced": true,
                "selectOptions": [
                  {
                    "value": 0,
                    "name": "string",
                    "order": 0,
                    "hint": "string",
                    "dividerAfter": true
                  }
                ],
                "selectOptionsProviderAction": "string",
                "section": "string",
                "hidden": "string",
                "privacy": "normal",
                "placeholder": "string",
                "isFloat": true
              }
            ],
            "presets": [
              {}
            ]
          }
        ]
      }
    ],
    "customFormatScore": 0,
    "indexerFlags": 0,
    "mediaInfo": {
      "id": 0,
      "audioBitrate": 0,
      "audioChannels": 0,
      "audioCodec": "string",
      "audioLanguages": "string",
      "audioStreamCount": 0,
      "videoBitDepth": 0,
      "videoBitrate": 0,
      "videoCodec": "string",
      "videoFps": 0,
      "videoDynamicRange": "string",
      "videoDynamicRangeType": "string",
      "resolution": "string",
      "runTime": "string",
      "scanType": "string",
      "subtitles": "string"
    },
    "originalFilePath": "string",
    "qualityCutoffNotMet": true
  },
  "collection": {
    "title": "string",
    "tmdbId": 0
  },
  "popularity": 0,
  "lastSearchTime": "1970-01-01T00:00:00Z",
  "statistics": {
    "movieFileCount": 0,
    "sizeOnDisk": 0,
    "releaseGroups": [
      "string"
    ],
    "movieFileQualities": [
      {
        "id": 0,
        "name": "string",
        "source": "unknown",
        "resolution": 0,
        "modifier": "none"
      }
    ]
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|false|none|none|
|title|string \| null|false|none|none|
|originalTitle|string \| null|false|none|none|
|originalLanguage|[Language](#schemalanguage)|false|none|none|
|alternateTitles|[[AlternativeTitleResource](#schemaalternativetitleresource)]|false|none|none|
|secondaryYear|integer(int32) \| null|false|none|none|
|secondaryYearSourceId|integer(int32)|false|none|none|
|sortTitle|string \| null|false|none|none|
|sizeOnDisk|integer(int64) \| null|false|none|none|
|status|[MovieStatusType](#schemamoviestatustype)|false|none|none|
|overview|string \| null|false|none|none|
|inCinemas|string(date-time) \| null|false|none|none|
|physicalRelease|string(date-time) \| null|false|none|none|
|digitalRelease|string(date-time) \| null|false|none|none|
|releaseDate|string(date-time) \| null|false|none|none|
|physicalReleaseNote|string \| null|false|none|none|
|images|[[MediaCover](#schemamediacover)]|false|none|none|
|website|string \| null|false|none|none|
|remotePoster|string \| null|false|none|none|
|year|integer(int32)|false|none|none|
|youTubeTrailerId|string \| null|false|none|none|
|studio|string \| null|false|none|none|
|path|string \| null|false|none|none|
|qualityProfileId|integer(int32)|false|none|none|
|hasFile|boolean \| null|false|none|none|
|movieFileId|integer(int32)|false|none|none|
|monitored|boolean|false|none|none|
|minimumAvailability|[MovieStatusType](#schemamoviestatustype)|false|none|none|
|isAvailable|boolean|false|none|none|
|folderName|string \| null|false|none|none|
|runtime|integer(int32)|false|none|none|
|cleanTitle|string \| null|false|none|none|
|imdbId|string \| null|false|none|none|
|tmdbId|integer(int32)|false|none|none|
|titleSlug|string \| null|false|none|none|
|rootFolderPath|string \| null|false|none|none|
|folder|string \| null|false|none|none|
|certification|string \| null|false|none|none|
|genres|[string]|false|none|none|
|keywords|[string]|false|none|none|
|tags|[integer(int32)]|false|none|none|
|added|string(date-time)|false|none|none|
|addOptions|[AddMovieOptions](#schemaaddmovieoptions)|false|none|none|
|ratings|[Ratings](#schemaratings)|false|none|none|
|movieFile|[MovieFileResource](#schemamoviefileresource)|false|none|none|
|collection|[MovieCollectionResource](#schemamoviecollectionresource)|false|none|none|
|popularity|number(float)|false|none|none|
|lastSearchTime|string(date-time) \| null|false|none|none|
|statistics|[MovieStatisticsResource](#schemamoviestatisticsresource)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|tba|
|status|announced|
|status|inCinemas|
|status|released|
|status|deleted|
|minimumAvailability|tba|
|minimumAvailability|announced|
|minimumAvailability|inCinemas|
|minimumAvailability|released|
|minimumAvailability|deleted|

<h2 id="tocS_MovieResourcePagingResource">MovieResourcePagingResource</h2>
<!-- backwards compatibility -->
<a id="schemamovieresourcepagingresource"></a>
<a id="schema_MovieResourcePagingResource"></a>
<a id="tocSmovieresourcepagingresource"></a>
<a id="tocsmovieresourcepagingresource"></a>

```json
{
  "page": 0,
  "pageSize": 0,
  "sortKey": "string",
  "sortDirection": "default",
  "totalRecords": 0,
  "records": [
    {
      "id": 0,
      "title": "string",
      "originalTitle": "string",
      "originalLanguage": {
        "id": 0,
        "name": "string"
      },
      "alternateTitles": [
        {
          "id": 0,
          "sourceType": "tmdb",
          "movieMetadataId": 0,
          "title": "string",
          "cleanTitle": "string"
        }
      ],
      "secondaryYear": 0,
      "secondaryYearSourceId": 0,
      "sortTitle": "string",
      "sizeOnDisk": 0,
      "status": "tba",
      "overview": "string",
      "inCinemas": "1970-01-01T00:00:00Z",
      "physicalRelease": "1970-01-01T00:00:00Z",
      "digitalRelease": "1970-01-01T00:00:00Z",
      "releaseDate": "1970-01-01T00:00:00Z",
      "physicalReleaseNote": "string",
      "images": [
        {
          "coverType": "unknown",
          "url": "string",
          "remoteUrl": "string"
        }
      ],
      "website": "string",
      "remotePoster": "string",
      "year": 0,
      "youTubeTrailerId": "string",
      "studio": "string",
      "path": "string",
      "qualityProfileId": 0,
      "hasFile": true,
      "movieFileId": 0,
      "monitored": true,
      "minimumAvailability": "tba",
      "isAvailable": true,
      "folderName": "string",
      "runtime": 0,
      "cleanTitle": "string",
      "imdbId": "string",
      "tmdbId": 0,
      "titleSlug": "string",
      "rootFolderPath": "string",
      "folder": "string",
      "certification": "string",
      "genres": [
        "string"
      ],
      "keywords": [
        "string"
      ],
      "tags": [
        0
      ],
      "added": "1970-01-01T00:00:00Z",
      "addOptions": {
        "ignoreEpisodesWithFiles": true,
        "ignoreEpisodesWithoutFiles": true,
        "monitor": "movieOnly",
        "searchForMovie": true,
        "addMethod": "manual"
      },
      "ratings": {
        "imdb": {
          "votes": 0,
          "value": 0,
          "type": "user"
        },
        "tmdb": {
          "votes": 0,
          "value": 0,
          "type": "user"
        },
        "metacritic": {
          "votes": 0,
          "value": 0,
          "type": "user"
        },
        "rottenTomatoes": {
          "votes": 0,
          "value": 0,
          "type": "user"
        },
        "trakt": {
          "votes": 0,
          "value": 0,
          "type": "user"
        }
      },
      "movieFile": {
        "id": 0,
        "movieId": 0,
        "relativePath": "string",
        "path": "string",
        "size": 0,
        "dateAdded": "1970-01-01T00:00:00Z",
        "sceneName": "string",
        "releaseGroup": "string",
        "edition": "string",
        "languages": [
          {
            "id": 0,
            "name": "string"
          }
        ],
        "quality": {
          "quality": {
            "id": 0,
            "name": "string",
            "source": "unknown",
            "resolution": 0,
            "modifier": "none"
          },
          "revision": {
            "version": 0,
            "real": 0,
            "isRepack": true
          }
        },
        "customFormats": [
          {
            "id": 0,
            "name": "string",
            "includeCustomFormatWhenRenaming": true,
            "specifications": [
              {
                "id": 0,
                "name": "string",
                "implementation": "string",
                "implementationName": "string",
                "infoLink": "string",
                "negate": true,
                "required": true,
                "fields": [
                  {
                    "order": 0,
                    "name": "string",
                    "label": "string",
                    "unit": "string",
                    "helpText": "string",
                    "helpTextWarning": "string",
                    "helpLink": "string",
                    "value": null,
                    "type": "string",
                    "advanced": true,
                    "selectOptions": [
                      {
                        "value": 0,
                        "name": "string",
                        "order": 0,
                        "hint": "string",
                        "dividerAfter": true
                      }
                    ],
                    "selectOptionsProviderAction": "string",
                    "section": "string",
                    "hidden": "string",
                    "privacy": "normal",
                    "placeholder": "string",
                    "isFloat": true
                  }
                ],
                "presets": [
                  {}
                ]
              }
            ]
          }
        ],
        "customFormatScore": 0,
        "indexerFlags": 0,
        "mediaInfo": {
          "id": 0,
          "audioBitrate": 0,
          "audioChannels": 0,
          "audioCodec": "string",
          "audioLanguages": "string",
          "audioStreamCount": 0,
          "videoBitDepth": 0,
          "videoBitrate": 0,
          "videoCodec": "string",
          "videoFps": 0,
          "videoDynamicRange": "string",
          "videoDynamicRangeType": "string",
          "resolution": "string",
          "runTime": "string",
          "scanType": "string",
          "subtitles": "string"
        },
        "originalFilePath": "string",
        "qualityCutoffNotMet": true
      },
      "collection": {
        "title": "string",
        "tmdbId": 0
      },
      "popularity": 0,
      "lastSearchTime": "1970-01-01T00:00:00Z",
      "statistics": {
        "movieFileCount": 0,
        "sizeOnDisk": 0,
        "releaseGroups": [
          "string"
        ],
        "movieFileQualities": [
          {
            "id": 0,
            "name": "string",
            "source": "unknown",
            "resolution": 0,
            "modifier": "none"
          }
        ]
      }
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|page|integer(int32)|false|none|none|
|pageSize|integer(int32)|false|none|none|
|sortKey|string \| null|false|none|none|
|sortDirection|[SortDirection](#schemasortdirection)|false|none|none|
|totalRecords|integer(int32)|false|none|none|
|records|[[MovieResource](#schemamovieresource)]|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|sortDirection|default|
|sortDirection|ascending|
|sortDirection|descending|

<h2 id="tocS_MovieRuntimeFormatType">MovieRuntimeFormatType</h2>
<!-- backwards compatibility -->
<a id="schemamovieruntimeformattype"></a>
<a id="schema_MovieRuntimeFormatType"></a>
<a id="tocSmovieruntimeformattype"></a>
<a id="tocsmovieruntimeformattype"></a>

```json
"hoursMinutes"
```

<h2 id="tocS_MovieStatisticsResource">MovieStatisticsResource</h2>
<!-- backwards compatibility -->
<a id="schemamoviestatisticsresource"></a>
<a id="schema_MovieStatisticsResource"></a>
<a id="tocSmoviestatisticsresource"></a>
<a id="tocsmoviestatisticsresource"></a>

```json
{
  "movieFileCount": 0,
  "sizeOnDisk": 0,
  "releaseGroups": [
    "string"
  ],
  "movieFileQualities": [
    {
      "id": 0,
      "name": "string",
      "source": "unknown",
      "resolution": 0,
      "modifier": "none"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|movieFileCount|integer(int32)|false|none|none|
|sizeOnDisk|integer(int64)|false|none|none|
|releaseGroups|[string]|false|none|none|
|movieFileQualities|[[Quality](#schemaquality)]|false|none|none|

<h2 id="tocS_MovieStatusType">MovieStatusType</h2>
<!-- backwards compatibility -->
<a id="schemamoviestatustype"></a>
<a id="schema_MovieStatusType"></a>
<a id="tocSmoviestatustype"></a>
<a id="tocsmoviestatustype"></a>

```json
"tba"
```

<h2 id="tocS_MovieTranslation">MovieTranslation</h2>
<!-- backwards compatibility -->
<a id="schemamovietranslation"></a>
<a id="schema_MovieTranslation"></a>
<a id="tocSmovietranslation"></a>
<a id="tocsmovietranslation"></a>

```json
{
  "id": 0,
  "movieMetadataId": 0,
  "title": "string",
  "cleanTitle": "string",
  "overview": "string",
  "language": {
    "id": 0,
    "name": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|false|none|none|
|movieMetadataId|integer(int32)|false|none|none|
|title|string \| null|false|none|none|
|cleanTitle|string \| null|false|none|none|
|overview|string \| null|false|none|none|
|language|[Language](#schemalanguage)|false|none|none|

<h2 id="tocS_NamingConfigResource">NamingConfigResource</h2>
<!-- backwards compatibility -->
<a id="schemanamingconfigresource"></a>
<a id="schema_NamingConfigResource"></a>
<a id="tocSnamingconfigresource"></a>
<a id="tocsnamingconfigresource"></a>

```json
{
  "id": 0,
  "renameMovies": true,
  "replaceIllegalCharacters": true,
  "colonReplacementFormat": "delete",
  "standardMovieFormat": "string",
  "movieFolderFormat": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|false|none|none|
|renameMovies|boolean|false|none|none|
|replaceIllegalCharacters|boolean|false|none|none|
|colonReplacementFormat|[ColonReplacementFormat](#schemacolonreplacementformat)|false|none|none|
|standardMovieFormat|string \| null|false|none|none|
|movieFolderFormat|string \| null|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|colonReplacementFormat|delete|
|colonReplacementFormat|dash|
|colonReplacementFormat|spaceDash|
|colonReplacementFormat|spaceDashSpace|
|colonReplacementFormat|smart|

<h2 id="tocS_NamingExampleResource">NamingExampleResource</h2>
<!-- backwards compatibility -->
<a id="schemanamingexampleresource"></a>
<a id="schema_NamingExampleResource"></a>
<a id="tocSnamingexampleresource"></a>
<a id="tocsnamingexampleresource"></a>

```json
{
  "movieExample": "string",
  "movieFolderExample": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|movieExample|string \| null|false|none|none|
|movieFolderExample|string \| null|false|none|none|

<h2 id="tocS_NotificationResource">NotificationResource</h2>
<!-- backwards compatibility -->
<a id="schemanotificationresource"></a>
<a id="schema_NotificationResource"></a>
<a id="tocSnotificationresource"></a>
<a id="tocsnotificationresource"></a>

```json
{
  "id": 0,
  "name": "string",
  "fields": [
    {
      "order": 0,
      "name": "string",
      "label": "string",
      "unit": "string",
      "helpText": "string",
      "helpTextWarning": "string",
      "helpLink": "string",
      "value": null,
      "type": "string",
      "advanced": true,
      "selectOptions": [
        {
          "value": 0,
          "name": "string",
          "order": 0,
          "hint": "string",
          "dividerAfter": true
        }
      ],
      "selectOptionsProviderAction": "string",
      "section": "string",
      "hidden": "string",
      "privacy": "normal",
      "placeholder": "string",
      "isFloat": true
    }
  ],
  "implementationName": "string",
  "implementation": "string",
  "configContract": "string",
  "infoLink": "string",
  "message": {
    "message": "string",
    "type": "info"
  },
  "tags": [
    0
  ],
  "presets": [
    {
      "id": 0,
      "name": "string",
      "fields": [
        {
          "order": 0,
          "name": "string",
          "label": "string",
          "unit": "string",
          "helpText": "string",
          "helpTextWarning": "string",
          "helpLink": "string",
          "value": null,
          "type": "string",
          "advanced": true,
          "selectOptions": [
            {
              "value": 0,
              "name": "string",
              "order": 0,
              "hint": "string",
              "dividerAfter": true
            }
          ],
          "selectOptionsProviderAction": "string",
          "section": "string",
          "hidden": "string",
          "privacy": "normal",
          "placeholder": "string",
          "isFloat": true
        }
      ],
      "implementationName": "string",
      "implementation": "string",
      "configContract": "string",
      "infoLink": "string",
      "message": {
        "message": "string",
        "type": "info"
      },
      "tags": [
        0
      ],
      "presets": [
        {}
      ],
      "link": "string",
      "onGrab": true,
      "onDownload": true,
      "onUpgrade": true,
      "onRename": true,
      "onMovieAdded": true,
      "onMovieDelete": true,
      "onMovieFileDelete": true,
      "onMovieFileDeleteForUpgrade": true,
      "onHealthIssue": true,
      "includeHealthWarnings": true,
      "onHealthRestored": true,
      "onApplicationUpdate": true,
      "onManualInteractionRequired": true,
      "supportsOnGrab": true,
      "supportsOnDownload": true,
      "supportsOnUpgrade": true,
      "supportsOnRename": true,
      "supportsOnMovieAdded": true,
      "supportsOnMovieDelete": true,
      "supportsOnMovieFileDelete": true,
      "supportsOnMovieFileDeleteForUpgrade": true,
      "supportsOnHealthIssue": true,
      "supportsOnHealthRestored": true,
      "supportsOnApplicationUpdate": true,
      "supportsOnManualInteractionRequired": true,
      "testCommand": "string"
    }
  ],
  "link": "string",
  "onGrab": true,
  "onDownload": true,
  "onUpgrade": true,
  "onRename": true,
  "onMovieAdded": true,
  "onMovieDelete": true,
  "onMovieFileDelete": true,
  "onMovieFileDeleteForUpgrade": true,
  "onHealthIssue": true,
  "includeHealthWarnings": true,
  "onHealthRestored": true,
  "onApplicationUpdate": true,
  "onManualInteractionRequired": true,
  "supportsOnGrab": true,
  "supportsOnDownload": true,
  "supportsOnUpgrade": true,
  "supportsOnRename": true,
  "supportsOnMovieAdded": true,
  "supportsOnMovieDelete": true,
  "supportsOnMovieFileDelete": true,
  "supportsOnMovieFileDeleteForUpgrade": true,
  "supportsOnHealthIssue": true,
  "supportsOnHealthRestored": true,
  "supportsOnApplicationUpdate": true,
  "supportsOnManualInteractionRequired": true,
  "testCommand": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|false|none|none|
|name|string \| null|false|none|none|
|fields|[[Field](#schemafield)]|false|none|none|
|implementationName|string \| null|false|none|none|
|implementation|string \| null|false|none|none|
|configContract|string \| null|false|none|none|
|infoLink|string \| null|false|none|none|
|message|[ProviderMessage](#schemaprovidermessage)|false|none|none|
|tags|[integer(int32)]|false|none|none|
|presets|[[NotificationResource](#schemanotificationresource)]|false|none|none|
|link|string \| null|false|none|none|
|onGrab|boolean|false|none|none|
|onDownload|boolean|false|none|none|
|onUpgrade|boolean|false|none|none|
|onRename|boolean|false|none|none|
|onMovieAdded|boolean|false|none|none|
|onMovieDelete|boolean|false|none|none|
|onMovieFileDelete|boolean|false|none|none|
|onMovieFileDeleteForUpgrade|boolean|false|none|none|
|onHealthIssue|boolean|false|none|none|
|includeHealthWarnings|boolean|false|none|none|
|onHealthRestored|boolean|false|none|none|
|onApplicationUpdate|boolean|false|none|none|
|onManualInteractionRequired|boolean|false|none|none|
|supportsOnGrab|boolean|false|none|none|
|supportsOnDownload|boolean|false|none|none|
|supportsOnUpgrade|boolean|false|none|none|
|supportsOnRename|boolean|false|none|none|
|supportsOnMovieAdded|boolean|false|none|none|
|supportsOnMovieDelete|boolean|false|none|none|
|supportsOnMovieFileDelete|boolean|false|none|none|
|supportsOnMovieFileDeleteForUpgrade|boolean|false|none|none|
|supportsOnHealthIssue|boolean|false|none|none|
|supportsOnHealthRestored|boolean|false|none|none|
|supportsOnApplicationUpdate|boolean|false|none|none|
|supportsOnManualInteractionRequired|boolean|false|none|none|
|testCommand|string \| null|false|none|none|

<h2 id="tocS_ParseResource">ParseResource</h2>
<!-- backwards compatibility -->
<a id="schemaparseresource"></a>
<a id="schema_ParseResource"></a>
<a id="tocSparseresource"></a>
<a id="tocsparseresource"></a>

```json
{
  "id": 0,
  "title": "string",
  "parsedMovieInfo": {
    "movieTitles": [
      "string"
    ],
    "originalTitle": "string",
    "releaseTitle": "string",
    "simpleReleaseTitle": "string",
    "quality": {
      "quality": {
        "id": 0,
        "name": "string",
        "source": "unknown",
        "resolution": 0,
        "modifier": "none"
      },
      "revision": {
        "version": 0,
        "real": 0,
        "isRepack": true
      }
    },
    "languages": [
      {
        "id": 0,
        "name": "string"
      }
    ],
    "releaseGroup": "string",
    "releaseHash": "string",
    "edition": "string",
    "year": 0,
    "imdbId": "string",
    "tmdbId": 0,
    "hardcodedSubs": "string",
    "movieTitle": "string",
    "primaryMovieTitle": "string"
  },
  "movie": {
    "id": 0,
    "title": "string",
    "originalTitle": "string",
    "originalLanguage": {
      "id": 0,
      "name": "string"
    },
    "alternateTitles": [
      {
        "id": 0,
        "sourceType": "tmdb",
        "movieMetadataId": 0,
        "title": "string",
        "cleanTitle": "string"
      }
    ],
    "secondaryYear": 0,
    "secondaryYearSourceId": 0,
    "sortTitle": "string",
    "sizeOnDisk": 0,
    "status": "tba",
    "overview": "string",
    "inCinemas": "1970-01-01T00:00:00Z",
    "physicalRelease": "1970-01-01T00:00:00Z",
    "digitalRelease": "1970-01-01T00:00:00Z",
    "releaseDate": "1970-01-01T00:00:00Z",
    "physicalReleaseNote": "string",
    "images": [
      {
        "coverType": "unknown",
        "url": "string",
        "remoteUrl": "string"
      }
    ],
    "website": "string",
    "remotePoster": "string",
    "year": 0,
    "youTubeTrailerId": "string",
    "studio": "string",
    "path": "string",
    "qualityProfileId": 0,
    "hasFile": true,
    "movieFileId": 0,
    "monitored": true,
    "minimumAvailability": "tba",
    "isAvailable": true,
    "folderName": "string",
    "runtime": 0,
    "cleanTitle": "string",
    "imdbId": "string",
    "tmdbId": 0,
    "titleSlug": "string",
    "rootFolderPath": "string",
    "folder": "string",
    "certification": "string",
    "genres": [
      "string"
    ],
    "keywords": [
      "string"
    ],
    "tags": [
      0
    ],
    "added": "1970-01-01T00:00:00Z",
    "addOptions": {
      "ignoreEpisodesWithFiles": true,
      "ignoreEpisodesWithoutFiles": true,
      "monitor": "movieOnly",
      "searchForMovie": true,
      "addMethod": "manual"
    },
    "ratings": {
      "imdb": {
        "votes": 0,
        "value": 0,
        "type": "user"
      },
      "tmdb": {
        "votes": 0,
        "value": 0,
        "type": "user"
      },
      "metacritic": {
        "votes": 0,
        "value": 0,
        "type": "user"
      },
      "rottenTomatoes": {
        "votes": 0,
        "value": 0,
        "type": "user"
      },
      "trakt": {
        "votes": 0,
        "value": 0,
        "type": "user"
      }
    },
    "movieFile": {
      "id": 0,
      "movieId": 0,
      "relativePath": "string",
      "path": "string",
      "size": 0,
      "dateAdded": "1970-01-01T00:00:00Z",
      "sceneName": "string",
      "releaseGroup": "string",
      "edition": "string",
      "languages": [
        {
          "id": 0,
          "name": "string"
        }
      ],
      "quality": {
        "quality": {
          "id": 0,
          "name": "string",
          "source": "unknown",
          "resolution": 0,
          "modifier": "none"
        },
        "revision": {
          "version": 0,
          "real": 0,
          "isRepack": true
        }
      },
      "customFormats": [
        {
          "id": 0,
          "name": "string",
          "includeCustomFormatWhenRenaming": true,
          "specifications": [
            {
              "id": 0,
              "name": "string",
              "implementation": "string",
              "implementationName": "string",
              "infoLink": "string",
              "negate": true,
              "required": true,
              "fields": [
                {
                  "order": 0,
                  "name": "string",
                  "label": "string",
                  "unit": "string",
                  "helpText": "string",
                  "helpTextWarning": "string",
                  "helpLink": "string",
                  "value": null,
                  "type": "string",
                  "advanced": true,
                  "selectOptions": [
                    {
                      "value": 0,
                      "name": "string",
                      "order": 0,
                      "hint": "string",
                      "dividerAfter": true
                    }
                  ],
                  "selectOptionsProviderAction": "string",
                  "section": "string",
                  "hidden": "string",
                  "privacy": "normal",
                  "placeholder": "string",
                  "isFloat": true
                }
              ],
              "presets": [
                {}
              ]
            }
          ]
        }
      ],
      "customFormatScore": 0,
      "indexerFlags": 0,
      "mediaInfo": {
        "id": 0,
        "audioBitrate": 0,
        "audioChannels": 0,
        "audioCodec": "string",
        "audioLanguages": "string",
        "audioStreamCount": 0,
        "videoBitDepth": 0,
        "videoBitrate": 0,
        "videoCodec": "string",
        "videoFps": 0,
        "videoDynamicRange": "string",
        "videoDynamicRangeType": "string",
        "resolution": "string",
        "runTime": "string",
        "scanType": "string",
        "subtitles": "string"
      },
      "originalFilePath": "string",
      "qualityCutoffNotMet": true
    },
    "collection": {
      "title": "string",
      "tmdbId": 0
    },
    "popularity": 0,
    "lastSearchTime": "1970-01-01T00:00:00Z",
    "statistics": {
      "movieFileCount": 0,
      "sizeOnDisk": 0,
      "releaseGroups": [
        "string"
      ],
      "movieFileQualities": [
        {
          "id": 0,
          "name": "string",
          "source": "unknown",
          "resolution": 0,
          "modifier": "none"
        }
      ]
    }
  },
  "languages": [
    {
      "id": 0,
      "name": "string"
    }
  ],
  "customFormats": [
    {
      "id": 0,
      "name": "string",
      "includeCustomFormatWhenRenaming": true,
      "specifications": [
        {
          "id": 0,
          "name": "string",
          "implementation": "string",
          "implementationName": "string",
          "infoLink": "string",
          "negate": true,
          "required": true,
          "fields": [
            {
              "order": 0,
              "name": "string",
              "label": "string",
              "unit": "string",
              "helpText": "string",
              "helpTextWarning": "string",
              "helpLink": "string",
              "value": null,
              "type": "string",
              "advanced": true,
              "selectOptions": [
                {
                  "value": 0,
                  "name": "string",
                  "order": 0,
                  "hint": "string",
                  "dividerAfter": true
                }
              ],
              "selectOptionsProviderAction": "string",
              "section": "string",
              "hidden": "string",
              "privacy": "normal",
              "placeholder": "string",
              "isFloat": true
            }
          ],
          "presets": [
            {}
          ]
        }
      ]
    }
  ],
  "customFormatScore": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|false|none|none|
|title|string \| null|false|none|none|
|parsedMovieInfo|[ParsedMovieInfo](#schemaparsedmovieinfo)|false|none|none|
|movie|[MovieResource](#schemamovieresource)|false|none|none|
|languages|[[Language](#schemalanguage)]|false|none|none|
|customFormats|[[CustomFormatResource](#schemacustomformatresource)]|false|none|none|
|customFormatScore|integer(int32)|false|none|none|

<h2 id="tocS_ParsedMovieInfo">ParsedMovieInfo</h2>
<!-- backwards compatibility -->
<a id="schemaparsedmovieinfo"></a>
<a id="schema_ParsedMovieInfo"></a>
<a id="tocSparsedmovieinfo"></a>
<a id="tocsparsedmovieinfo"></a>

```json
{
  "movieTitles": [
    "string"
  ],
  "originalTitle": "string",
  "releaseTitle": "string",
  "simpleReleaseTitle": "string",
  "quality": {
    "quality": {
      "id": 0,
      "name": "string",
      "source": "unknown",
      "resolution": 0,
      "modifier": "none"
    },
    "revision": {
      "version": 0,
      "real": 0,
      "isRepack": true
    }
  },
  "languages": [
    {
      "id": 0,
      "name": "string"
    }
  ],
  "releaseGroup": "string",
  "releaseHash": "string",
  "edition": "string",
  "year": 0,
  "imdbId": "string",
  "tmdbId": 0,
  "hardcodedSubs": "string",
  "movieTitle": "string",
  "primaryMovieTitle": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|movieTitles|[string]|false|none|none|
|originalTitle|string \| null|false|none|none|
|releaseTitle|string \| null|false|none|none|
|simpleReleaseTitle|string \| null|false|none|none|
|quality|[QualityModel](#schemaqualitymodel)|false|none|none|
|languages|[[Language](#schemalanguage)]|false|none|none|
|releaseGroup|string \| null|false|none|none|
|releaseHash|string \| null|false|none|none|
|edition|string \| null|false|none|none|
|year|integer(int32)|false|none|none|
|imdbId|string \| null|false|none|none|
|tmdbId|integer(int32)|false|none|none|
|hardcodedSubs|string \| null|false|none|none|
|movieTitle|string \| null|false|read-only|none|
|primaryMovieTitle|string \| null|false|read-only|none|

<h2 id="tocS_PingResource">PingResource</h2>
<!-- backwards compatibility -->
<a id="schemapingresource"></a>
<a id="schema_PingResource"></a>
<a id="tocSpingresource"></a>
<a id="tocspingresource"></a>

```json
{
  "status": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|string \| null|false|none|none|

<h2 id="tocS_PrivacyLevel">PrivacyLevel</h2>
<!-- backwards compatibility -->
<a id="schemaprivacylevel"></a>
<a id="schema_PrivacyLevel"></a>
<a id="tocSprivacylevel"></a>
<a id="tocsprivacylevel"></a>

```json
"normal"
```

<h2 id="tocS_ProblemDetails">ProblemDetails</h2>
<!-- backwards compatibility -->
<a id="schemaproblemdetails"></a>
<a id="schema_ProblemDetails"></a>
<a id="tocSproblemdetails"></a>
<a id="tocsproblemdetails"></a>

```json
{
  "type": "string",
  "title": "string",
  "status": 0,
  "detail": "string",
  "instance": "string",
  "property1": null,
  "property2": null
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string \| null|false|none|none|
|title|string \| null|false|none|none|
|status|integer(int32) \| null|false|none|none|
|detail|string \| null|false|none|none|
|instance|string \| null|false|none|none|
|**additionalProperties**|object|false|none|none|

<h2 id="tocS_ProfileFormatItemResource">ProfileFormatItemResource</h2>
<!-- backwards compatibility -->
<a id="schemaprofileformatitemresource"></a>
<a id="schema_ProfileFormatItemResource"></a>
<a id="tocSprofileformatitemresource"></a>
<a id="tocsprofileformatitemresource"></a>

```json
{
  "id": 0,
  "format": 0,
  "name": "string",
  "score": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|false|none|none|
|format|integer(int32)|false|none|none|
|name|string \| null|false|none|none|
|score|integer(int32)|false|none|none|

<h2 id="tocS_ProperDownloadTypes">ProperDownloadTypes</h2>
<!-- backwards compatibility -->
<a id="schemaproperdownloadtypes"></a>
<a id="schema_ProperDownloadTypes"></a>
<a id="tocSproperdownloadtypes"></a>
<a id="tocsproperdownloadtypes"></a>

```json
"preferAndUpgrade"
```

<h2 id="tocS_ProviderMessage">ProviderMessage</h2>
<!-- backwards compatibility -->
<a id="schemaprovidermessage"></a>
<a id="schema_ProviderMessage"></a>
<a id="tocSprovidermessage"></a>
<a id="tocsprovidermessage"></a>

```json
{
  "message": "string",
  "type": "info"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string \| null|false|none|none|
|type|[ProviderMessageType](#schemaprovidermessagetype)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|info|
|type|warning|
|type|error|

<h2 id="tocS_ProviderMessageType">ProviderMessageType</h2>
<!-- backwards compatibility -->
<a id="schemaprovidermessagetype"></a>
<a id="schema_ProviderMessageType"></a>
<a id="tocSprovidermessagetype"></a>
<a id="tocsprovidermessagetype"></a>

```json
"info"
```

<h2 id="tocS_ProviderTestAllResult">ProviderTestAllResult</h2>
<!-- backwards compatibility -->
<a id="schemaprovidertestallresult"></a>
<a id="schema_ProviderTestAllResult"></a>
<a id="tocSprovidertestallresult"></a>
<a id="tocsprovidertestallresult"></a>

```json
{
  "id": 0,
  "isValid": true,
  "validationFailures": [
    {
      "propertyName": "string",
      "errorMessage": "string",
      "attemptedValue": null,
      "customState": null,
      "severity": "error",
      "errorCode": "string",
      "formattedMessageArguments": [
        null
      ],
      "formattedMessagePlaceholderValues": {
        "property1": null,
        "property2": null
      }
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|false|none|none|
|isValid|boolean|false|read-only|none|
|validationFailures|[[ValidationFailure](#schemavalidationfailure)]|false|none|none|

<h2 id="tocS_ProxyType">ProxyType</h2>
<!-- backwards compatibility -->
<a id="schemaproxytype"></a>
<a id="schema_ProxyType"></a>
<a id="tocSproxytype"></a>
<a id="tocsproxytype"></a>

```json
"http"
```

<h2 id="tocS_Quality">Quality</h2>
<!-- backwards compatibility -->
<a id="schemaquality"></a>
<a id="schema_Quality"></a>
<a id="tocSquality"></a>
<a id="tocsquality"></a>

```json
{
  "id": 0,
  "name": "string",
  "source": "unknown",
  "resolution": 0,
  "modifier": "none"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|false|none|none|
|name|string \| null|false|none|none|
|source|[QualitySource](#schemaqualitysource)|false|none|none|
|resolution|integer(int32)|false|none|none|
|modifier|[Modifier](#schemamodifier)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|source|unknown|
|source|cam|
|source|telesync|
|source|telecine|
|source|workprint|
|source|dvd|
|source|tv|
|source|webdl|
|source|webrip|
|source|bluray|
|modifier|none|
|modifier|regional|
|modifier|screener|
|modifier|rawhd|
|modifier|brdisk|
|modifier|remux|

<h2 id="tocS_QualityDefinitionLimitsResource">QualityDefinitionLimitsResource</h2>
<!-- backwards compatibility -->
<a id="schemaqualitydefinitionlimitsresource"></a>
<a id="schema_QualityDefinitionLimitsResource"></a>
<a id="tocSqualitydefinitionlimitsresource"></a>
<a id="tocsqualitydefinitionlimitsresource"></a>

```json
{
  "min": 0,
  "max": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|min|integer(int32)|false|none|none|
|max|integer(int32)|false|none|none|

<h2 id="tocS_QualityDefinitionResource">QualityDefinitionResource</h2>
<!-- backwards compatibility -->
<a id="schemaqualitydefinitionresource"></a>
<a id="schema_QualityDefinitionResource"></a>
<a id="tocSqualitydefinitionresource"></a>
<a id="tocsqualitydefinitionresource"></a>

```json
{
  "id": 0,
  "quality": {
    "id": 0,
    "name": "string",
    "source": "unknown",
    "resolution": 0,
    "modifier": "none"
  },
  "title": "string",
  "weight": 0,
  "minSize": 0,
  "maxSize": 0,
  "preferredSize": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|false|none|none|
|quality|[Quality](#schemaquality)|false|none|none|
|title|string \| null|false|none|none|
|weight|integer(int32)|false|none|none|
|minSize|number(double) \| null|false|none|none|
|maxSize|number(double) \| null|false|none|none|
|preferredSize|number(double) \| null|false|none|none|

<h2 id="tocS_QualityModel">QualityModel</h2>
<!-- backwards compatibility -->
<a id="schemaqualitymodel"></a>
<a id="schema_QualityModel"></a>
<a id="tocSqualitymodel"></a>
<a id="tocsqualitymodel"></a>

```json
{
  "quality": {
    "id": 0,
    "name": "string",
    "source": "unknown",
    "resolution": 0,
    "modifier": "none"
  },
  "revision": {
    "version": 0,
    "real": 0,
    "isRepack": true
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|quality|[Quality](#schemaquality)|false|none|none|
|revision|[Revision](#schemarevision)|false|none|none|

<h2 id="tocS_QualityProfileQualityItemResource">QualityProfileQualityItemResource</h2>
<!-- backwards compatibility -->
<a id="schemaqualityprofilequalityitemresource"></a>
<a id="schema_QualityProfileQualityItemResource"></a>
<a id="tocSqualityprofilequalityitemresource"></a>
<a id="tocsqualityprofilequalityitemresource"></a>

```json
{
  "id": 0,
  "name": "string",
  "quality": {
    "id": 0,
    "name": "string",
    "source": "unknown",
    "resolution": 0,
    "modifier": "none"
  },
  "items": [
    {
      "id": 0,
      "name": "string",
      "quality": {
        "id": 0,
        "name": "string",
        "source": "unknown",
        "resolution": 0,
        "modifier": "none"
      },
      "items": [
        {}
      ],
      "allowed": true
    }
  ],
  "allowed": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|false|none|none|
|name|string \| null|false|none|none|
|quality|[Quality](#schemaquality)|false|none|none|
|items|[[QualityProfileQualityItemResource](#schemaqualityprofilequalityitemresource)]|false|none|none|
|allowed|boolean|false|none|none|

<h2 id="tocS_QualityProfileResource">QualityProfileResource</h2>
<!-- backwards compatibility -->
<a id="schemaqualityprofileresource"></a>
<a id="schema_QualityProfileResource"></a>
<a id="tocSqualityprofileresource"></a>
<a id="tocsqualityprofileresource"></a>

```json
{
  "id": 0,
  "name": "string",
  "upgradeAllowed": true,
  "cutoff": 0,
  "items": [
    {
      "id": 0,
      "name": "string",
      "quality": {
        "id": 0,
        "name": "string",
        "source": "unknown",
        "resolution": 0,
        "modifier": "none"
      },
      "items": [
        {}
      ],
      "allowed": true
    }
  ],
  "minFormatScore": 0,
  "cutoffFormatScore": 0,
  "minUpgradeFormatScore": 0,
  "formatItems": [
    {
      "id": 0,
      "format": 0,
      "name": "string",
      "score": 0
    }
  ],
  "language": {
    "id": 0,
    "name": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|false|none|none|
|name|string \| null|false|none|none|
|upgradeAllowed|boolean|false|none|none|
|cutoff|integer(int32)|false|none|none|
|items|[[QualityProfileQualityItemResource](#schemaqualityprofilequalityitemresource)]|false|none|none|
|minFormatScore|integer(int32)|false|none|none|
|cutoffFormatScore|integer(int32)|false|none|none|
|minUpgradeFormatScore|integer(int32)|false|none|none|
|formatItems|[[ProfileFormatItemResource](#schemaprofileformatitemresource)]|false|none|none|
|language|[Language](#schemalanguage)|false|none|none|

<h2 id="tocS_QualitySource">QualitySource</h2>
<!-- backwards compatibility -->
<a id="schemaqualitysource"></a>
<a id="schema_QualitySource"></a>
<a id="tocSqualitysource"></a>
<a id="tocsqualitysource"></a>

```json
"unknown"
```

<h2 id="tocS_QueueBulkResource">QueueBulkResource</h2>
<!-- backwards compatibility -->
<a id="schemaqueuebulkresource"></a>
<a id="schema_QueueBulkResource"></a>
<a id="tocSqueuebulkresource"></a>
<a id="tocsqueuebulkresource"></a>

```json
{
  "ids": [
    0
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ids|[integer(int32)]|false|none|none|

<h2 id="tocS_QueueResource">QueueResource</h2>
<!-- backwards compatibility -->
<a id="schemaqueueresource"></a>
<a id="schema_QueueResource"></a>
<a id="tocSqueueresource"></a>
<a id="tocsqueueresource"></a>

```json
{
  "id": 0,
  "movieId": 0,
  "movie": {
    "id": 0,
    "title": "string",
    "originalTitle": "string",
    "originalLanguage": {
      "id": 0,
      "name": "string"
    },
    "alternateTitles": [
      {
        "id": 0,
        "sourceType": "tmdb",
        "movieMetadataId": 0,
        "title": "string",
        "cleanTitle": "string"
      }
    ],
    "secondaryYear": 0,
    "secondaryYearSourceId": 0,
    "sortTitle": "string",
    "sizeOnDisk": 0,
    "status": "tba",
    "overview": "string",
    "inCinemas": "1970-01-01T00:00:00Z",
    "physicalRelease": "1970-01-01T00:00:00Z",
    "digitalRelease": "1970-01-01T00:00:00Z",
    "releaseDate": "1970-01-01T00:00:00Z",
    "physicalReleaseNote": "string",
    "images": [
      {
        "coverType": "unknown",
        "url": "string",
        "remoteUrl": "string"
      }
    ],
    "website": "string",
    "remotePoster": "string",
    "year": 0,
    "youTubeTrailerId": "string",
    "studio": "string",
    "path": "string",
    "qualityProfileId": 0,
    "hasFile": true,
    "movieFileId": 0,
    "monitored": true,
    "minimumAvailability": "tba",
    "isAvailable": true,
    "folderName": "string",
    "runtime": 0,
    "cleanTitle": "string",
    "imdbId": "string",
    "tmdbId": 0,
    "titleSlug": "string",
    "rootFolderPath": "string",
    "folder": "string",
    "certification": "string",
    "genres": [
      "string"
    ],
    "keywords": [
      "string"
    ],
    "tags": [
      0
    ],
    "added": "1970-01-01T00:00:00Z",
    "addOptions": {
      "ignoreEpisodesWithFiles": true,
      "ignoreEpisodesWithoutFiles": true,
      "monitor": "movieOnly",
      "searchForMovie": true,
      "addMethod": "manual"
    },
    "ratings": {
      "imdb": {
        "votes": 0,
        "value": 0,
        "type": "user"
      },
      "tmdb": {
        "votes": 0,
        "value": 0,
        "type": "user"
      },
      "metacritic": {
        "votes": 0,
        "value": 0,
        "type": "user"
      },
      "rottenTomatoes": {
        "votes": 0,
        "value": 0,
        "type": "user"
      },
      "trakt": {
        "votes": 0,
        "value": 0,
        "type": "user"
      }
    },
    "movieFile": {
      "id": 0,
      "movieId": 0,
      "relativePath": "string",
      "path": "string",
      "size": 0,
      "dateAdded": "1970-01-01T00:00:00Z",
      "sceneName": "string",
      "releaseGroup": "string",
      "edition": "string",
      "languages": [
        {
          "id": 0,
          "name": "string"
        }
      ],
      "quality": {
        "quality": {
          "id": 0,
          "name": "string",
          "source": "unknown",
          "resolution": 0,
          "modifier": "none"
        },
        "revision": {
          "version": 0,
          "real": 0,
          "isRepack": true
        }
      },
      "customFormats": [
        {
          "id": 0,
          "name": "string",
          "includeCustomFormatWhenRenaming": true,
          "specifications": [
            {
              "id": 0,
              "name": "string",
              "implementation": "string",
              "implementationName": "string",
              "infoLink": "string",
              "negate": true,
              "required": true,
              "fields": [
                {
                  "order": 0,
                  "name": "string",
                  "label": "string",
                  "unit": "string",
                  "helpText": "string",
                  "helpTextWarning": "string",
                  "helpLink": "string",
                  "value": null,
                  "type": "string",
                  "advanced": true,
                  "selectOptions": [
                    {
                      "value": 0,
                      "name": "string",
                      "order": 0,
                      "hint": "string",
                      "dividerAfter": true
                    }
                  ],
                  "selectOptionsProviderAction": "string",
                  "section": "string",
                  "hidden": "string",
                  "privacy": "normal",
                  "placeholder": "string",
                  "isFloat": true
                }
              ],
              "presets": [
                {}
              ]
            }
          ]
        }
      ],
      "customFormatScore": 0,
      "indexerFlags": 0,
      "mediaInfo": {
        "id": 0,
        "audioBitrate": 0,
        "audioChannels": 0,
        "audioCodec": "string",
        "audioLanguages": "string",
        "audioStreamCount": 0,
        "videoBitDepth": 0,
        "videoBitrate": 0,
        "videoCodec": "string",
        "videoFps": 0,
        "videoDynamicRange": "string",
        "videoDynamicRangeType": "string",
        "resolution": "string",
        "runTime": "string",
        "scanType": "string",
        "subtitles": "string"
      },
      "originalFilePath": "string",
      "qualityCutoffNotMet": true
    },
    "collection": {
      "title": "string",
      "tmdbId": 0
    },
    "popularity": 0,
    "lastSearchTime": "1970-01-01T00:00:00Z",
    "statistics": {
      "movieFileCount": 0,
      "sizeOnDisk": 0,
      "releaseGroups": [
        "string"
      ],
      "movieFileQualities": [
        {
          "id": 0,
          "name": "string",
          "source": "unknown",
          "resolution": 0,
          "modifier": "none"
        }
      ]
    }
  },
  "languages": [
    {
      "id": 0,
      "name": "string"
    }
  ],
  "quality": {
    "quality": {
      "id": 0,
      "name": "string",
      "source": "unknown",
      "resolution": 0,
      "modifier": "none"
    },
    "revision": {
      "version": 0,
      "real": 0,
      "isRepack": true
    }
  },
  "customFormats": [
    {
      "id": 0,
      "name": "string",
      "includeCustomFormatWhenRenaming": true,
      "specifications": [
        {
          "id": 0,
          "name": "string",
          "implementation": "string",
          "implementationName": "string",
          "infoLink": "string",
          "negate": true,
          "required": true,
          "fields": [
            {
              "order": 0,
              "name": "string",
              "label": "string",
              "unit": "string",
              "helpText": "string",
              "helpTextWarning": "string",
              "helpLink": "string",
              "value": null,
              "type": "string",
              "advanced": true,
              "selectOptions": [
                {
                  "value": 0,
                  "name": "string",
                  "order": 0,
                  "hint": "string",
                  "dividerAfter": true
                }
              ],
              "selectOptionsProviderAction": "string",
              "section": "string",
              "hidden": "string",
              "privacy": "normal",
              "placeholder": "string",
              "isFloat": true
            }
          ],
          "presets": [
            {}
          ]
        }
      ]
    }
  ],
  "customFormatScore": 0,
  "size": 0,
  "title": "string",
  "estimatedCompletionTime": "1970-01-01T00:00:00Z",
  "added": "1970-01-01T00:00:00Z",
  "status": "unknown",
  "trackedDownloadStatus": "ok",
  "trackedDownloadState": "downloading",
  "statusMessages": [
    {
      "title": "string",
      "messages": [
        "string"
      ]
    }
  ],
  "errorMessage": "string",
  "downloadId": "string",
  "protocol": "unknown",
  "downloadClient": "string",
  "downloadClientHasPostImportCategory": true,
  "indexer": "string",
  "outputPath": "string",
  "sizeleft": 0,
  "timeleft": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|false|none|none|
|movieId|integer(int32) \| null|false|none|none|
|movie|[MovieResource](#schemamovieresource)|false|none|none|
|languages|[[Language](#schemalanguage)]|false|none|none|
|quality|[QualityModel](#schemaqualitymodel)|false|none|none|
|customFormats|[[CustomFormatResource](#schemacustomformatresource)]|false|none|none|
|customFormatScore|integer(int32)|false|none|none|
|size|number(double)|false|none|none|
|title|string \| null|false|none|none|
|estimatedCompletionTime|string(date-time) \| null|false|none|none|
|added|string(date-time) \| null|false|none|none|
|status|[QueueStatus](#schemaqueuestatus)|false|none|none|
|trackedDownloadStatus|[TrackedDownloadStatus](#schematrackeddownloadstatus)|false|none|none|
|trackedDownloadState|[TrackedDownloadState](#schematrackeddownloadstate)|false|none|none|
|statusMessages|[[TrackedDownloadStatusMessage](#schematrackeddownloadstatusmessage)]|false|none|none|
|errorMessage|string \| null|false|none|none|
|downloadId|string \| null|false|none|none|
|protocol|[DownloadProtocol](#schemadownloadprotocol)|false|none|none|
|downloadClient|string \| null|false|none|none|
|downloadClientHasPostImportCategory|boolean|false|none|none|
|indexer|string \| null|false|none|none|
|outputPath|string \| null|false|none|none|
|sizeleft|number(double)|false|none|**Deprecated.**|
|timeleft|string(date-span) \| null|false|none|**Deprecated.**|

#### Enumerated Values

|Property|Value|
|---|---|
|status|unknown|
|status|queued|
|status|paused|
|status|downloading|
|status|completed|
|status|failed|
|status|warning|
|status|delay|
|status|downloadClientUnavailable|
|status|fallback|
|trackedDownloadStatus|ok|
|trackedDownloadStatus|warning|
|trackedDownloadStatus|error|
|trackedDownloadState|downloading|
|trackedDownloadState|importBlocked|
|trackedDownloadState|importPending|
|trackedDownloadState|importing|
|trackedDownloadState|imported|
|trackedDownloadState|failedPending|
|trackedDownloadState|failed|
|trackedDownloadState|ignored|
|protocol|unknown|
|protocol|usenet|
|protocol|torrent|

<h2 id="tocS_QueueResourcePagingResource">QueueResourcePagingResource</h2>
<!-- backwards compatibility -->
<a id="schemaqueueresourcepagingresource"></a>
<a id="schema_QueueResourcePagingResource"></a>
<a id="tocSqueueresourcepagingresource"></a>
<a id="tocsqueueresourcepagingresource"></a>

```json
{
  "page": 0,
  "pageSize": 0,
  "sortKey": "string",
  "sortDirection": "default",
  "totalRecords": 0,
  "records": [
    {
      "id": 0,
      "movieId": 0,
      "movie": {
        "id": 0,
        "title": "string",
        "originalTitle": "string",
        "originalLanguage": {
          "id": 0,
          "name": "string"
        },
        "alternateTitles": [
          {
            "id": 0,
            "sourceType": "tmdb",
            "movieMetadataId": 0,
            "title": "string",
            "cleanTitle": "string"
          }
        ],
        "secondaryYear": 0,
        "secondaryYearSourceId": 0,
        "sortTitle": "string",
        "sizeOnDisk": 0,
        "status": "tba",
        "overview": "string",
        "inCinemas": "1970-01-01T00:00:00Z",
        "physicalRelease": "1970-01-01T00:00:00Z",
        "digitalRelease": "1970-01-01T00:00:00Z",
        "releaseDate": "1970-01-01T00:00:00Z",
        "physicalReleaseNote": "string",
        "images": [
          {
            "coverType": "unknown",
            "url": "string",
            "remoteUrl": "string"
          }
        ],
        "website": "string",
        "remotePoster": "string",
        "year": 0,
        "youTubeTrailerId": "string",
        "studio": "string",
        "path": "string",
        "qualityProfileId": 0,
        "hasFile": true,
        "movieFileId": 0,
        "monitored": true,
        "minimumAvailability": "tba",
        "isAvailable": true,
        "folderName": "string",
        "runtime": 0,
        "cleanTitle": "string",
        "imdbId": "string",
        "tmdbId": 0,
        "titleSlug": "string",
        "rootFolderPath": "string",
        "folder": "string",
        "certification": "string",
        "genres": [
          "string"
        ],
        "keywords": [
          "string"
        ],
        "tags": [
          0
        ],
        "added": "1970-01-01T00:00:00Z",
        "addOptions": {
          "ignoreEpisodesWithFiles": true,
          "ignoreEpisodesWithoutFiles": true,
          "monitor": "movieOnly",
          "searchForMovie": true,
          "addMethod": "manual"
        },
        "ratings": {
          "imdb": {
            "votes": 0,
            "value": 0,
            "type": "user"
          },
          "tmdb": {
            "votes": 0,
            "value": 0,
            "type": "user"
          },
          "metacritic": {
            "votes": 0,
            "value": 0,
            "type": "user"
          },
          "rottenTomatoes": {
            "votes": 0,
            "value": 0,
            "type": "user"
          },
          "trakt": {
            "votes": 0,
            "value": 0,
            "type": "user"
          }
        },
        "movieFile": {
          "id": 0,
          "movieId": 0,
          "relativePath": "string",
          "path": "string",
          "size": 0,
          "dateAdded": "1970-01-01T00:00:00Z",
          "sceneName": "string",
          "releaseGroup": "string",
          "edition": "string",
          "languages": [
            {
              "id": 0,
              "name": "string"
            }
          ],
          "quality": {
            "quality": {
              "id": 0,
              "name": "string",
              "source": "unknown",
              "resolution": 0,
              "modifier": "none"
            },
            "revision": {
              "version": 0,
              "real": 0,
              "isRepack": true
            }
          },
          "customFormats": [
            {
              "id": 0,
              "name": "string",
              "includeCustomFormatWhenRenaming": true,
              "specifications": [
                {
                  "id": 0,
                  "name": "string",
                  "implementation": "string",
                  "implementationName": "string",
                  "infoLink": "string",
                  "negate": true,
                  "required": true,
                  "fields": [
                    {
                      "order": 0,
                      "name": "string",
                      "label": "string",
                      "unit": "string",
                      "helpText": "string",
                      "helpTextWarning": "string",
                      "helpLink": "string",
                      "value": null,
                      "type": "string",
                      "advanced": true,
                      "selectOptions": [
                        {
                          "value": 0,
                          "name": "string",
                          "order": 0,
                          "hint": "string",
                          "dividerAfter": true
                        }
                      ],
                      "selectOptionsProviderAction": "string",
                      "section": "string",
                      "hidden": "string",
                      "privacy": "normal",
                      "placeholder": "string",
                      "isFloat": true
                    }
                  ],
                  "presets": [
                    {}
                  ]
                }
              ]
            }
          ],
          "customFormatScore": 0,
          "indexerFlags": 0,
          "mediaInfo": {
            "id": 0,
            "audioBitrate": 0,
            "audioChannels": 0,
            "audioCodec": "string",
            "audioLanguages": "string",
            "audioStreamCount": 0,
            "videoBitDepth": 0,
            "videoBitrate": 0,
            "videoCodec": "string",
            "videoFps": 0,
            "videoDynamicRange": "string",
            "videoDynamicRangeType": "string",
            "resolution": "string",
            "runTime": "string",
            "scanType": "string",
            "subtitles": "string"
          },
          "originalFilePath": "string",
          "qualityCutoffNotMet": true
        },
        "collection": {
          "title": "string",
          "tmdbId": 0
        },
        "popularity": 0,
        "lastSearchTime": "1970-01-01T00:00:00Z",
        "statistics": {
          "movieFileCount": 0,
          "sizeOnDisk": 0,
          "releaseGroups": [
            "string"
          ],
          "movieFileQualities": [
            {
              "id": 0,
              "name": "string",
              "source": "unknown",
              "resolution": 0,
              "modifier": "none"
            }
          ]
        }
      },
      "languages": [
        {
          "id": 0,
          "name": "string"
        }
      ],
      "quality": {
        "quality": {
          "id": 0,
          "name": "string",
          "source": "unknown",
          "resolution": 0,
          "modifier": "none"
        },
        "revision": {
          "version": 0,
          "real": 0,
          "isRepack": true
        }
      },
      "customFormats": [
        {
          "id": 0,
          "name": "string",
          "includeCustomFormatWhenRenaming": true,
          "specifications": [
            {
              "id": 0,
              "name": "string",
              "implementation": "string",
              "implementationName": "string",
              "infoLink": "string",
              "negate": true,
              "required": true,
              "fields": [
                {
                  "order": 0,
                  "name": "string",
                  "label": "string",
                  "unit": "string",
                  "helpText": "string",
                  "helpTextWarning": "string",
                  "helpLink": "string",
                  "value": null,
                  "type": "string",
                  "advanced": true,
                  "selectOptions": [
                    {
                      "value": 0,
                      "name": "string",
                      "order": 0,
                      "hint": "string",
                      "dividerAfter": true
                    }
                  ],
                  "selectOptionsProviderAction": "string",
                  "section": "string",
                  "hidden": "string",
                  "privacy": "normal",
                  "placeholder": "string",
                  "isFloat": true
                }
              ],
              "presets": [
                {}
              ]
            }
          ]
        }
      ],
      "customFormatScore": 0,
      "size": 0,
      "title": "string",
      "estimatedCompletionTime": "1970-01-01T00:00:00Z",
      "added": "1970-01-01T00:00:00Z",
      "status": "unknown",
      "trackedDownloadStatus": "ok",
      "trackedDownloadState": "downloading",
      "statusMessages": [
        {
          "title": "string",
          "messages": [
            "string"
          ]
        }
      ],
      "errorMessage": "string",
      "downloadId": "string",
      "protocol": "unknown",
      "downloadClient": "string",
      "downloadClientHasPostImportCategory": true,
      "indexer": "string",
      "outputPath": "string",
      "sizeleft": 0,
      "timeleft": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|page|integer(int32)|false|none|none|
|pageSize|integer(int32)|false|none|none|
|sortKey|string \| null|false|none|none|
|sortDirection|[SortDirection](#schemasortdirection)|false|none|none|
|totalRecords|integer(int32)|false|none|none|
|records|[[QueueResource](#schemaqueueresource)]|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|sortDirection|default|
|sortDirection|ascending|
|sortDirection|descending|

<h2 id="tocS_QueueStatus">QueueStatus</h2>
<!-- backwards compatibility -->
<a id="schemaqueuestatus"></a>
<a id="schema_QueueStatus"></a>
<a id="tocSqueuestatus"></a>
<a id="tocsqueuestatus"></a>

```json
"unknown"
```

<h2 id="tocS_QueueStatusResource">QueueStatusResource</h2>
<!-- backwards compatibility -->
<a id="schemaqueuestatusresource"></a>
<a id="schema_QueueStatusResource"></a>
<a id="tocSqueuestatusresource"></a>
<a id="tocsqueuestatusresource"></a>

```json
{
  "id": 0,
  "totalCount": 0,
  "count": 0,
  "unknownCount": 0,
  "errors": true,
  "warnings": true,
  "unknownErrors": true,
  "unknownWarnings": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|false|none|none|
|totalCount|integer(int32)|false|none|none|
|count|integer(int32)|false|none|none|
|unknownCount|integer(int32)|false|none|none|
|errors|boolean|false|none|none|
|warnings|boolean|false|none|none|
|unknownErrors|boolean|false|none|none|
|unknownWarnings|boolean|false|none|none|

<h2 id="tocS_RatingChild">RatingChild</h2>
<!-- backwards compatibility -->
<a id="schemaratingchild"></a>
<a id="schema_RatingChild"></a>
<a id="tocSratingchild"></a>
<a id="tocsratingchild"></a>

```json
{
  "votes": 0,
  "value": 0,
  "type": "user"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|votes|integer(int32)|false|none|none|
|value|number(double)|false|none|none|
|type|[RatingType](#schemaratingtype)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|user|
|type|critic|

<h2 id="tocS_RatingType">RatingType</h2>
<!-- backwards compatibility -->
<a id="schemaratingtype"></a>
<a id="schema_RatingType"></a>
<a id="tocSratingtype"></a>
<a id="tocsratingtype"></a>

```json
"user"
```

<h2 id="tocS_Ratings">Ratings</h2>
<!-- backwards compatibility -->
<a id="schemaratings"></a>
<a id="schema_Ratings"></a>
<a id="tocSratings"></a>
<a id="tocsratings"></a>

```json
{
  "imdb": {
    "votes": 0,
    "value": 0,
    "type": "user"
  },
  "tmdb": {
    "votes": 0,
    "value": 0,
    "type": "user"
  },
  "metacritic": {
    "votes": 0,
    "value": 0,
    "type": "user"
  },
  "rottenTomatoes": {
    "votes": 0,
    "value": 0,
    "type": "user"
  },
  "trakt": {
    "votes": 0,
    "value": 0,
    "type": "user"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|imdb|[RatingChild](#schemaratingchild)|false|none|none|
|tmdb|[RatingChild](#schemaratingchild)|false|none|none|
|metacritic|[RatingChild](#schemaratingchild)|false|none|none|
|rottenTomatoes|[RatingChild](#schemaratingchild)|false|none|none|
|trakt|[RatingChild](#schemaratingchild)|false|none|none|

<h2 id="tocS_RejectionType">RejectionType</h2>
<!-- backwards compatibility -->
<a id="schemarejectiontype"></a>
<a id="schema_RejectionType"></a>
<a id="tocSrejectiontype"></a>
<a id="tocsrejectiontype"></a>

```json
"permanent"
```

<h2 id="tocS_ReleaseHistoryResource">ReleaseHistoryResource</h2>
<!-- backwards compatibility -->
<a id="schemareleasehistoryresource"></a>
<a id="schema_ReleaseHistoryResource"></a>
<a id="tocSreleasehistoryresource"></a>
<a id="tocsreleasehistoryresource"></a>

```json
{
  "grabbed": "1970-01-01T00:00:00Z",
  "failed": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|grabbed|string(date-time) \| null|false|none|none|
|failed|string(date-time) \| null|false|none|none|

<h2 id="tocS_ReleaseProfileResource">ReleaseProfileResource</h2>
<!-- backwards compatibility -->
<a id="schemareleaseprofileresource"></a>
<a id="schema_ReleaseProfileResource"></a>
<a id="tocSreleaseprofileresource"></a>
<a id="tocsreleaseprofileresource"></a>

```json
{
  "id": 0,
  "name": "string",
  "enabled": true,
  "required": null,
  "ignored": null,
  "indexerId": 0,
  "tags": [
    0
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|false|none|none|
|name|string \| null|false|none|none|
|enabled|boolean|false|none|none|
|required|object|false|none|none|
|ignored|object|false|none|none|
|indexerId|integer(int32)|false|none|none|
|tags|[integer(int32)]|false|none|none|

<h2 id="tocS_ReleaseResource">ReleaseResource</h2>
<!-- backwards compatibility -->
<a id="schemareleaseresource"></a>
<a id="schema_ReleaseResource"></a>
<a id="tocSreleaseresource"></a>
<a id="tocsreleaseresource"></a>

```json
{
  "id": 0,
  "guid": "string",
  "quality": {
    "quality": {
      "id": 0,
      "name": "string",
      "source": "unknown",
      "resolution": 0,
      "modifier": "none"
    },
    "revision": {
      "version": 0,
      "real": 0,
      "isRepack": true
    }
  },
  "customFormats": [
    {
      "id": 0,
      "name": "string",
      "includeCustomFormatWhenRenaming": true,
      "specifications": [
        {
          "id": 0,
          "name": "string",
          "implementation": "string",
          "implementationName": "string",
          "infoLink": "string",
          "negate": true,
          "required": true,
          "fields": [
            {
              "order": 0,
              "name": "string",
              "label": "string",
              "unit": "string",
              "helpText": "string",
              "helpTextWarning": "string",
              "helpLink": "string",
              "value": null,
              "type": "string",
              "advanced": true,
              "selectOptions": [
                {
                  "value": 0,
                  "name": "string",
                  "order": 0,
                  "hint": "string",
                  "dividerAfter": true
                }
              ],
              "selectOptionsProviderAction": "string",
              "section": "string",
              "hidden": "string",
              "privacy": "normal",
              "placeholder": "string",
              "isFloat": true
            }
          ],
          "presets": [
            {}
          ]
        }
      ]
    }
  ],
  "customFormatScore": 0,
  "history": {
    "grabbed": "1970-01-01T00:00:00Z",
    "failed": "1970-01-01T00:00:00Z"
  },
  "qualityWeight": 0,
  "age": 0,
  "ageHours": 0,
  "ageMinutes": 0,
  "size": 0,
  "indexerId": 0,
  "indexer": "string",
  "releaseGroup": "string",
  "subGroup": "string",
  "releaseHash": "string",
  "title": "string",
  "sceneSource": true,
  "movieTitles": [
    "string"
  ],
  "languages": [
    {
      "id": 0,
      "name": "string"
    }
  ],
  "mappedMovieId": 0,
  "approved": true,
  "temporarilyRejected": true,
  "rejected": true,
  "tmdbId": 0,
  "imdbId": 0,
  "rejections": [
    "string"
  ],
  "publishDate": "1970-01-01T00:00:00Z",
  "commentUrl": "string",
  "downloadUrl": "string",
  "infoUrl": "string",
  "movieRequested": true,
  "downloadAllowed": true,
  "releaseWeight": 0,
  "edition": "string",
  "magnetUrl": "string",
  "infoHash": "string",
  "seeders": 0,
  "leechers": 0,
  "protocol": "unknown",
  "indexerFlags": null,
  "movieId": 0,
  "downloadClientId": 0,
  "downloadClient": "string",
  "shouldOverride": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|false|none|none|
|guid|string \| null|false|none|none|
|quality|[QualityModel](#schemaqualitymodel)|false|none|none|
|customFormats|[[CustomFormatResource](#schemacustomformatresource)]|false|none|none|
|customFormatScore|integer(int32)|false|none|none|
|history|[ReleaseHistoryResource](#schemareleasehistoryresource)|false|none|none|
|qualityWeight|integer(int32)|false|none|none|
|age|integer(int32)|false|none|none|
|ageHours|number(double)|false|none|none|
|ageMinutes|number(double)|false|none|none|
|size|integer(int64)|false|none|none|
|indexerId|integer(int32)|false|none|none|
|indexer|string \| null|false|none|none|
|releaseGroup|string \| null|false|none|none|
|subGroup|string \| null|false|none|none|
|releaseHash|string \| null|false|none|none|
|title|string \| null|false|none|none|
|sceneSource|boolean|false|none|none|
|movieTitles|[string]|false|none|none|
|languages|[[Language](#schemalanguage)]|false|none|none|
|mappedMovieId|integer(int32) \| null|false|none|none|
|approved|boolean|false|none|none|
|temporarilyRejected|boolean|false|none|none|
|rejected|boolean|false|none|none|
|tmdbId|integer(int32)|false|none|none|
|imdbId|integer(int32)|false|none|none|
|rejections|[string]|false|none|none|
|publishDate|string(date-time)|false|none|none|
|commentUrl|string \| null|false|none|none|
|downloadUrl|string \| null|false|none|none|
|infoUrl|string \| null|false|none|none|
|movieRequested|boolean|false|none|none|
|downloadAllowed|boolean|false|none|none|
|releaseWeight|integer(int32)|false|none|none|
|edition|string \| null|false|none|none|
|magnetUrl|string \| null|false|none|none|
|infoHash|string \| null|false|none|none|
|seeders|integer(int32) \| null|false|none|none|
|leechers|integer(int32) \| null|false|none|none|
|protocol|[DownloadProtocol](#schemadownloadprotocol)|false|none|none|
|indexerFlags|object|false|none|none|
|movieId|integer(int32) \| null|false|none|none|
|downloadClientId|integer(int32) \| null|false|none|none|
|downloadClient|string \| null|false|none|none|
|shouldOverride|boolean \| null|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|protocol|unknown|
|protocol|usenet|
|protocol|torrent|

<h2 id="tocS_RemotePathMappingResource">RemotePathMappingResource</h2>
<!-- backwards compatibility -->
<a id="schemaremotepathmappingresource"></a>
<a id="schema_RemotePathMappingResource"></a>
<a id="tocSremotepathmappingresource"></a>
<a id="tocsremotepathmappingresource"></a>

```json
{
  "id": 0,
  "host": "string",
  "remotePath": "string",
  "localPath": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|false|none|none|
|host|string \| null|false|none|none|
|remotePath|string \| null|false|none|none|
|localPath|string \| null|false|none|none|

<h2 id="tocS_RenameMovieResource">RenameMovieResource</h2>
<!-- backwards compatibility -->
<a id="schemarenamemovieresource"></a>
<a id="schema_RenameMovieResource"></a>
<a id="tocSrenamemovieresource"></a>
<a id="tocsrenamemovieresource"></a>

```json
{
  "id": 0,
  "movieId": 0,
  "movieFileId": 0,
  "existingPath": "string",
  "newPath": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|false|none|none|
|movieId|integer(int32)|false|none|none|
|movieFileId|integer(int32)|false|none|none|
|existingPath|string \| null|false|none|none|
|newPath|string \| null|false|none|none|

<h2 id="tocS_RescanAfterRefreshType">RescanAfterRefreshType</h2>
<!-- backwards compatibility -->
<a id="schemarescanafterrefreshtype"></a>
<a id="schema_RescanAfterRefreshType"></a>
<a id="tocSrescanafterrefreshtype"></a>
<a id="tocsrescanafterrefreshtype"></a>

```json
"always"
```

<h2 id="tocS_Revision">Revision</h2>
<!-- backwards compatibility -->
<a id="schemarevision"></a>
<a id="schema_Revision"></a>
<a id="tocSrevision"></a>
<a id="tocsrevision"></a>

```json
{
  "version": 0,
  "real": 0,
  "isRepack": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|version|integer(int32)|false|none|none|
|real|integer(int32)|false|none|none|
|isRepack|boolean|false|none|none|

<h2 id="tocS_RootFolderResource">RootFolderResource</h2>
<!-- backwards compatibility -->
<a id="schemarootfolderresource"></a>
<a id="schema_RootFolderResource"></a>
<a id="tocSrootfolderresource"></a>
<a id="tocsrootfolderresource"></a>

```json
{
  "id": 0,
  "path": "string",
  "accessible": true,
  "freeSpace": 0,
  "unmappedFolders": [
    {
      "name": "string",
      "path": "string",
      "relativePath": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|false|none|none|
|path|string \| null|false|none|none|
|accessible|boolean|false|none|none|
|freeSpace|integer(int64) \| null|false|none|none|
|unmappedFolders|[[UnmappedFolder](#schemaunmappedfolder)]|false|none|none|

<h2 id="tocS_RuntimeMode">RuntimeMode</h2>
<!-- backwards compatibility -->
<a id="schemaruntimemode"></a>
<a id="schema_RuntimeMode"></a>
<a id="tocSruntimemode"></a>
<a id="tocsruntimemode"></a>

```json
"console"
```

<h2 id="tocS_SelectOption">SelectOption</h2>
<!-- backwards compatibility -->
<a id="schemaselectoption"></a>
<a id="schema_SelectOption"></a>
<a id="tocSselectoption"></a>
<a id="tocsselectoption"></a>

```json
{
  "value": 0,
  "name": "string",
  "order": 0,
  "hint": "string",
  "dividerAfter": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|value|integer(int32)|false|none|none|
|name|string \| null|false|none|none|
|order|integer(int32)|false|none|none|
|hint|string \| null|false|none|none|
|dividerAfter|boolean|false|none|none|

<h2 id="tocS_Severity">Severity</h2>
<!-- backwards compatibility -->
<a id="schemaseverity"></a>
<a id="schema_Severity"></a>
<a id="tocSseverity"></a>
<a id="tocsseverity"></a>

```json
"error"
```

<h2 id="tocS_SortDirection">SortDirection</h2>
<!-- backwards compatibility -->
<a id="schemasortdirection"></a>
<a id="schema_SortDirection"></a>
<a id="tocSsortdirection"></a>
<a id="tocssortdirection"></a>

```json
"default"
```

<h2 id="tocS_SourceType">SourceType</h2>
<!-- backwards compatibility -->
<a id="schemasourcetype"></a>
<a id="schema_SourceType"></a>
<a id="tocSsourcetype"></a>
<a id="tocssourcetype"></a>

```json
"tmdb"
```

<h2 id="tocS_SystemResource">SystemResource</h2>
<!-- backwards compatibility -->
<a id="schemasystemresource"></a>
<a id="schema_SystemResource"></a>
<a id="tocSsystemresource"></a>
<a id="tocssystemresource"></a>

```json
{
  "appName": "string",
  "instanceName": "string",
  "version": "string",
  "buildTime": "1970-01-01T00:00:00Z",
  "isDebug": true,
  "isProduction": true,
  "isAdmin": true,
  "isUserInteractive": true,
  "startupPath": "string",
  "appData": "string",
  "osName": "string",
  "osVersion": "string",
  "isNetCore": true,
  "isLinux": true,
  "isOsx": true,
  "isWindows": true,
  "isDocker": true,
  "isContainerized": true,
  "mode": "console",
  "branch": "string",
  "databaseType": "sqLite",
  "databaseVersion": "string",
  "authentication": "none",
  "migrationVersion": 0,
  "urlBase": "string",
  "runtimeVersion": "string",
  "runtimeName": "string",
  "startTime": "1970-01-01T00:00:00Z",
  "packageVersion": "string",
  "packageAuthor": "string",
  "packageUpdateMechanism": "builtIn",
  "packageUpdateMechanismMessage": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|appName|string \| null|false|none|none|
|instanceName|string \| null|false|none|none|
|version|string \| null|false|none|none|
|buildTime|string(date-time)|false|none|none|
|isDebug|boolean|false|none|none|
|isProduction|boolean|false|none|none|
|isAdmin|boolean|false|none|none|
|isUserInteractive|boolean|false|none|none|
|startupPath|string \| null|false|none|none|
|appData|string \| null|false|none|none|
|osName|string \| null|false|none|none|
|osVersion|string \| null|false|none|none|
|isNetCore|boolean|false|none|none|
|isLinux|boolean|false|none|none|
|isOsx|boolean|false|none|none|
|isWindows|boolean|false|none|none|
|isDocker|boolean|false|none|none|
|isContainerized|boolean|false|none|none|
|mode|[RuntimeMode](#schemaruntimemode)|false|none|none|
|branch|string \| null|false|none|none|
|databaseType|[DatabaseType](#schemadatabasetype)|false|none|none|
|databaseVersion|string \| null|false|none|none|
|authentication|[AuthenticationType](#schemaauthenticationtype)|false|none|none|
|migrationVersion|integer(int32)|false|none|none|
|urlBase|string \| null|false|none|none|
|runtimeVersion|string \| null|false|none|none|
|runtimeName|string \| null|false|none|none|
|startTime|string(date-time)|false|none|none|
|packageVersion|string \| null|false|none|none|
|packageAuthor|string \| null|false|none|none|
|packageUpdateMechanism|[UpdateMechanism](#schemaupdatemechanism)|false|none|none|
|packageUpdateMechanismMessage|string \| null|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|mode|console|
|mode|service|
|mode|tray|
|databaseType|sqLite|
|databaseType|postgreSQL|
|authentication|none|
|authentication|basic|
|authentication|forms|
|authentication|external|
|authentication|oidc|
|packageUpdateMechanism|builtIn|
|packageUpdateMechanism|script|
|packageUpdateMechanism|external|
|packageUpdateMechanism|apt|
|packageUpdateMechanism|docker|

<h2 id="tocS_SystemRestartResource">SystemRestartResource</h2>
<!-- backwards compatibility -->
<a id="schemasystemrestartresource"></a>
<a id="schema_SystemRestartResource"></a>
<a id="tocSsystemrestartresource"></a>
<a id="tocssystemrestartresource"></a>

```json
{
  "restarting": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|restarting|boolean|false|none|none|

<h2 id="tocS_SystemShutdownResource">SystemShutdownResource</h2>
<!-- backwards compatibility -->
<a id="schemasystemshutdownresource"></a>
<a id="schema_SystemShutdownResource"></a>
<a id="tocSsystemshutdownresource"></a>
<a id="tocssystemshutdownresource"></a>

```json
{
  "shuttingDown": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|shuttingDown|boolean|false|none|none|

<h2 id="tocS_TMDbCountryCode">TMDbCountryCode</h2>
<!-- backwards compatibility -->
<a id="schematmdbcountrycode"></a>
<a id="schema_TMDbCountryCode"></a>
<a id="tocStmdbcountrycode"></a>
<a id="tocstmdbcountrycode"></a>

```json
"au"
```

<h2 id="tocS_TagDetailsResource">TagDetailsResource</h2>
<!-- backwards compatibility -->
<a id="schematagdetailsresource"></a>
<a id="schema_TagDetailsResource"></a>
<a id="tocStagdetailsresource"></a>
<a id="tocstagdetailsresource"></a>

```json
{
  "id": 0,
  "label": "string",
  "delayProfileIds": [
    0
  ],
  "importListIds": [
    0
  ],
  "notificationIds": [
    0
  ],
  "releaseProfileIds": [
    0
  ],
  "indexerIds": [
    0
  ],
  "downloadClientIds": [
    0
  ],
  "autoTagIds": [
    0
  ],
  "movieIds": [
    0
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|false|none|none|
|label|string \| null|false|none|none|
|delayProfileIds|[integer(int32)]|false|none|none|
|importListIds|[integer(int32)]|false|none|none|
|notificationIds|[integer(int32)]|false|none|none|
|releaseProfileIds|[integer(int32)]|false|none|none|
|indexerIds|[integer(int32)]|false|none|none|
|downloadClientIds|[integer(int32)]|false|none|none|
|autoTagIds|[integer(int32)]|false|none|none|
|movieIds|[integer(int32)]|false|none|none|

<h2 id="tocS_TagResource">TagResource</h2>
<!-- backwards compatibility -->
<a id="schematagresource"></a>
<a id="schema_TagResource"></a>
<a id="tocStagresource"></a>
<a id="tocstagresource"></a>

```json
{
  "id": 0,
  "label": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|false|none|none|
|label|string \| null|false|none|none|

<h2 id="tocS_TaskResource">TaskResource</h2>
<!-- backwards compatibility -->
<a id="schemataskresource"></a>
<a id="schema_TaskResource"></a>
<a id="tocStaskresource"></a>
<a id="tocstaskresource"></a>

```json
{
  "id": 0,
  "name": "string",
  "taskName": "string",
  "interval": 0,
  "lastExecution": "1970-01-01T00:00:00Z",
  "lastStartTime": "1970-01-01T00:00:00Z",
  "nextExecution": "1970-01-01T00:00:00Z",
  "lastDuration": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|false|none|none|
|name|string \| null|false|none|none|
|taskName|string \| null|false|none|none|
|interval|integer(int32)|false|none|none|
|lastExecution|string(date-time)|false|none|none|
|lastStartTime|string(date-time)|false|none|none|
|nextExecution|string(date-time)|false|none|none|
|lastDuration|string(date-span)|false|read-only|none|

<h2 id="tocS_TrackedDownloadState">TrackedDownloadState</h2>
<!-- backwards compatibility -->
<a id="schematrackeddownloadstate"></a>
<a id="schema_TrackedDownloadState"></a>
<a id="tocStrackeddownloadstate"></a>
<a id="tocstrackeddownloadstate"></a>

```json
"downloading"
```

<h2 id="tocS_TrackedDownloadStatus">TrackedDownloadStatus</h2>
<!-- backwards compatibility -->
<a id="schematrackeddownloadstatus"></a>
<a id="schema_TrackedDownloadStatus"></a>
<a id="tocStrackeddownloadstatus"></a>
<a id="tocstrackeddownloadstatus"></a>

```json
"ok"
```

<h2 id="tocS_TrackedDownloadStatusMessage">TrackedDownloadStatusMessage</h2>
<!-- backwards compatibility -->
<a id="schematrackeddownloadstatusmessage"></a>
<a id="schema_TrackedDownloadStatusMessage"></a>
<a id="tocStrackeddownloadstatusmessage"></a>
<a id="tocstrackeddownloadstatusmessage"></a>

```json
{
  "title": "string",
  "messages": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|title|string \| null|false|none|none|
|messages|[string]|false|none|none|

<h2 id="tocS_UiConfigResource">UiConfigResource</h2>
<!-- backwards compatibility -->
<a id="schemauiconfigresource"></a>
<a id="schema_UiConfigResource"></a>
<a id="tocSuiconfigresource"></a>
<a id="tocsuiconfigresource"></a>

```json
{
  "id": 0,
  "firstDayOfWeek": 0,
  "calendarWeekColumnHeader": "string",
  "movieRuntimeFormat": "hoursMinutes",
  "shortDateFormat": "string",
  "longDateFormat": "string",
  "timeFormat": "string",
  "showRelativeDates": true,
  "enableColorImpairedMode": true,
  "movieInfoLanguage": 0,
  "uiLanguage": 0,
  "theme": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|false|none|none|
|firstDayOfWeek|integer(int32)|false|none|none|
|calendarWeekColumnHeader|string \| null|false|none|none|
|movieRuntimeFormat|[MovieRuntimeFormatType](#schemamovieruntimeformattype)|false|none|none|
|shortDateFormat|string \| null|false|none|none|
|longDateFormat|string \| null|false|none|none|
|timeFormat|string \| null|false|none|none|
|showRelativeDates|boolean|false|none|none|
|enableColorImpairedMode|boolean|false|none|none|
|movieInfoLanguage|integer(int32)|false|none|none|
|uiLanguage|integer(int32)|false|none|none|
|theme|string \| null|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|movieRuntimeFormat|hoursMinutes|
|movieRuntimeFormat|minutes|

<h2 id="tocS_UnmappedFolder">UnmappedFolder</h2>
<!-- backwards compatibility -->
<a id="schemaunmappedfolder"></a>
<a id="schema_UnmappedFolder"></a>
<a id="tocSunmappedfolder"></a>
<a id="tocsunmappedfolder"></a>

```json
{
  "name": "string",
  "path": "string",
  "relativePath": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string \| null|false|none|none|
|path|string \| null|false|none|none|
|relativePath|string \| null|false|none|none|

<h2 id="tocS_UpdateChanges">UpdateChanges</h2>
<!-- backwards compatibility -->
<a id="schemaupdatechanges"></a>
<a id="schema_UpdateChanges"></a>
<a id="tocSupdatechanges"></a>
<a id="tocsupdatechanges"></a>

```json
{
  "new": [
    "string"
  ],
  "fixed": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|new|[string]|false|none|none|
|fixed|[string]|false|none|none|

<h2 id="tocS_UpdateMechanism">UpdateMechanism</h2>
<!-- backwards compatibility -->
<a id="schemaupdatemechanism"></a>
<a id="schema_UpdateMechanism"></a>
<a id="tocSupdatemechanism"></a>
<a id="tocsupdatemechanism"></a>

```json
"builtIn"
```

<h2 id="tocS_UpdateResource">UpdateResource</h2>
<!-- backwards compatibility -->
<a id="schemaupdateresource"></a>
<a id="schema_UpdateResource"></a>
<a id="tocSupdateresource"></a>
<a id="tocsupdateresource"></a>

```json
{
  "id": 0,
  "version": "string",
  "branch": "string",
  "releaseDate": "1970-01-01T00:00:00Z",
  "fileName": "string",
  "url": "string",
  "installed": true,
  "installedOn": "1970-01-01T00:00:00Z",
  "installable": true,
  "latest": true,
  "changes": {
    "new": [
      "string"
    ],
    "fixed": [
      "string"
    ]
  },
  "hash": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|false|none|none|
|version|string \| null|false|none|none|
|branch|string \| null|false|none|none|
|releaseDate|string(date-time)|false|none|none|
|fileName|string \| null|false|none|none|
|url|string \| null|false|none|none|
|installed|boolean|false|none|none|
|installedOn|string(date-time) \| null|false|none|none|
|installable|boolean|false|none|none|
|latest|boolean|false|none|none|
|changes|[UpdateChanges](#schemaupdatechanges)|false|none|none|
|hash|string \| null|false|none|none|

<h2 id="tocS_ValidationFailure">ValidationFailure</h2>
<!-- backwards compatibility -->
<a id="schemavalidationfailure"></a>
<a id="schema_ValidationFailure"></a>
<a id="tocSvalidationfailure"></a>
<a id="tocsvalidationfailure"></a>

```json
{
  "propertyName": "string",
  "errorMessage": "string",
  "attemptedValue": null,
  "customState": null,
  "severity": "error",
  "errorCode": "string",
  "formattedMessageArguments": [
    null
  ],
  "formattedMessagePlaceholderValues": {
    "property1": null,
    "property2": null
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|propertyName|string \| null|false|none|none|
|errorMessage|string \| null|false|none|none|
|attemptedValue|object|false|none|none|
|customState|object|false|none|none|
|severity|[Severity](#schemaseverity)|false|none|none|
|errorCode|string \| null|false|none|none|
|formattedMessageArguments|[object]|false|none|**Deprecated.**|
|formattedMessagePlaceholderValues|object \| null|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|severity|error|
|severity|warning|
|severity|info|
