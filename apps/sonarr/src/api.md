<h1 id="sonarr">Sonarr v3.0.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Sonarr API docs - The v3 API docs apply to both v3 and v4 versions of Sonarr. Some functionality may only be available in v4 of the Sonarr application.

Base URLs:

* <a href="http://localhost:8989">http://localhost:8989</a>

License: <a href="https://github.com/Sonarr/Sonarr/blob/develop/LICENSE">GPL-3.0</a>

# Authentication

* API Key (X-Api-Key)
    - Parameter Name: **X-Api-Key**, in: header. Apikey passed as header

* API Key (apikey)
    - Parameter Name: **apikey**, in: query. Apikey passed as query parameter

<h1 id="sonarr-apiinfo">ApiInfo</h1>

## get/api

> Code samples

```bash
curl http://localhost:8989/api \
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

<h1 id="sonarr-authentication">Authentication</h1>

## get/login/sso

> Code samples

```bash
curl http://localhost:8989/login/sso \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /login/sso`

<h3 id="getloginsso-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|returnUrl|query|string|false|none|
|rememberMe|query|boolean|false|none|

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
curl http://localhost:8989/login \
  -X POST \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}" \
  -F 'username=string' \
  -F 'password=string' \
  -F 'rememberMe=true'
```

`POST /login`

> Body parameter

```yaml
username: string
password: string
rememberMe: true
```

<h3 id="postlogin-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|returnUrl|query|string|false|none|
|body|body|object|false|none|
|» username|body|string|false|none|
|» password|body|string|false|none|
|» rememberMe|body|boolean|false|none|

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

## post/reset-password/request

> Code samples

```bash
curl http://localhost:8989/reset-password/request \
  -X POST \
  -H "X-Api-Key: ${API_KEY}"
```

`POST /reset-password/request`

<h3 id="postreset-passwordrequest-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|302|Found|Found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## post/reset-password

> Code samples

```bash
curl http://localhost:8989/reset-password \
  -X POST \
  -H "X-Api-Key: ${API_KEY}" \
  -F 'token=string' \
  -F 'username=string' \
  -F 'password=string' \
  -F 'passwordConfirmation=string'
```

`POST /reset-password`

> Body parameter

```yaml
token: string
username: string
password: string
passwordConfirmation: string
```

<h3 id="postreset-password-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» token|body|string|false|none|
|» username|body|string|false|none|
|» password|body|string|false|none|
|» passwordConfirmation|body|string|false|none|

<h3 id="postreset-password-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|302|Found|Found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## get/logout

> Code samples

```bash
curl http://localhost:8989/logout \
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

<h1 id="sonarr-staticresource">StaticResource</h1>

## get/login

> Code samples

```bash
curl http://localhost:8989/login \
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
curl http://localhost:8989/loggedout \
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
curl http://localhost:8989/content/string \
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
curl http://localhost:8989/ \
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
curl http://localhost:8989/string \
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

<h1 id="sonarr-autotagging">AutoTagging</h1>

## get/api/v3/autotagging

> Code samples

```bash
curl http://localhost:8989/api/v3/autotagging \
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
                "hint": "string"
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
curl http://localhost:8989/api/v3/autotagging \
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
                "hint": "string"
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
              "hint": "string"
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
              "hint": "string"
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
|200|OK|OK|[AutoTaggingResource](#schemaautotaggingresource)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## get/api/v3/autotagging/{id}

> Code samples

```bash
curl http://localhost:8989/api/v3/autotagging/0 \
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
              "hint": "string"
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
curl http://localhost:8989/api/v3/autotagging/string \
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
                "hint": "string"
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
              "hint": "string"
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
              "hint": "string"
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
|200|OK|OK|[AutoTaggingResource](#schemaautotaggingresource)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## delete/api/v3/autotagging/{id}

> Code samples

```bash
curl http://localhost:8989/api/v3/autotagging/0 \
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
curl http://localhost:8989/api/v3/autotagging/schema \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /api/v3/autotagging/schema`

<h3 id="getapiv3autotaggingschema-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

<h1 id="sonarr-backup">Backup</h1>

## get/api/v3/system/backup

> Code samples

```bash
curl http://localhost:8989/api/v3/system/backup \
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
curl http://localhost:8989/api/v3/system/backup/0 \
  -X DELETE \
  -H "X-Api-Key: ${API_KEY}"
```

`DELETE /api/v3/system/backup/{id}`

<h3 id="deleteapiv3systembackupid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|none|

<h3 id="deleteapiv3systembackupid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## post/api/v3/system/backup/restore/{id}

> Code samples

```bash
curl http://localhost:8989/api/v3/system/backup/restore/0 \
  -X POST \
  -H "X-Api-Key: ${API_KEY}"
```

`POST /api/v3/system/backup/restore/{id}`

<h3 id="postapiv3systembackuprestoreid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|none|

<h3 id="postapiv3systembackuprestoreid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## post/api/v3/system/backup/restore/upload

> Code samples

```bash
curl http://localhost:8989/api/v3/system/backup/restore/upload \
  -X POST \
  -H "X-Api-Key: ${API_KEY}"
```

`POST /api/v3/system/backup/restore/upload`

<h3 id="postapiv3systembackuprestoreupload-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

<h1 id="sonarr-blocklist">Blocklist</h1>

## get/api/v3/blocklist

> Code samples

```bash
curl http://localhost:8989/api/v3/blocklist \
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
|seriesIds|query|[integer(int32)]|false|none|
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
      "seriesId": 0,
      "episodeIds": [
        0
      ],
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
          "resolution": 0
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
                      "hint": "string"
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
      "series": {
        "id": 0,
        "title": "string",
        "alternateTitles": [
          {
            "title": "string",
            "seasonNumber": 0,
            "sceneSeasonNumber": 0,
            "sceneOrigin": "string",
            "comment": "string"
          }
        ],
        "sortTitle": "string",
        "status": "continuing",
        "ended": true,
        "profileName": "string",
        "overview": "string",
        "nextAiring": "1970-01-01T00:00:00Z",
        "previousAiring": "1970-01-01T00:00:00Z",
        "network": "string",
        "airTime": "string",
        "images": [
          {
            "coverType": "unknown",
            "url": "string",
            "remoteUrl": "string"
          }
        ],
        "language": {
          "id": 0,
          "name": "string"
        },
        "originalLanguage": {
          "id": 0,
          "name": "string"
        },
        "remotePoster": "string",
        "seasonType": "string",
        "seasons": [
          {
            "seasonNumber": 0,
            "monitored": true,
            "title": "string",
            "statistics": {
              "nextAiring": "1970-01-01T00:00:00Z",
              "previousAiring": "1970-01-01T00:00:00Z",
              "episodeFileCount": 0,
              "episodeCount": 0,
              "totalEpisodeCount": 0,
              "sizeOnDisk": 0,
              "releaseGroups": [
                "string"
              ],
              "percentOfEpisodes": 0
            },
            "images": [
              {
                "coverType": "unknown",
                "url": "string",
                "remoteUrl": "string"
              }
            ]
          }
        ],
        "seasonTypes": [
          {
            "name": "string",
            "type": "string",
            "seasonNumbers": [
              0
            ],
            "episodeCount": 0
          }
        ],
        "translations": [
          {
            "language": {
              "id": 0,
              "name": "string"
            },
            "title": "string",
            "overview": "string"
          }
        ],
        "year": 0,
        "path": "string",
        "pendingPath": "string",
        "qualityProfileId": 0,
        "seasonFolder": true,
        "monitored": true,
        "monitorNewItems": "all",
        "useSceneNumbering": true,
        "runtime": 0,
        "tvdbId": 0,
        "tvRageId": 0,
        "tvMazeId": 0,
        "tmdbId": 0,
        "firstAired": "1970-01-01T00:00:00Z",
        "lastAired": "1970-01-01T00:00:00Z",
        "seriesType": "standard",
        "cleanTitle": "string",
        "originalTitle": "string",
        "cleanOriginalTitle": "string",
        "imdbId": "string",
        "titleSlug": "string",
        "rootFolderPath": "string",
        "folder": "string",
        "folders": [
          {
            "language": {
              "id": 0,
              "name": "string"
            },
            "folder": "string"
          }
        ],
        "certification": "string",
        "genres": [
          "string"
        ],
        "tags": [
          0
        ],
        "added": "1970-01-01T00:00:00Z",
        "addOptions": {
          "ignoreEpisodesWithFiles": true,
          "ignoreEpisodesWithoutFiles": true,
          "monitor": "unknown",
          "searchForMissingEpisodes": true,
          "searchForCutoffUnmetEpisodes": true
        },
        "ratings": {
          "votes": 0,
          "value": 0
        },
        "statistics": {
          "seasonCount": 0,
          "episodeFileCount": 0,
          "episodeCount": 0,
          "totalEpisodeCount": 0,
          "sizeOnDisk": 0,
          "releaseGroups": [
            "string"
          ],
          "percentOfEpisodes": 0
        },
        "episodesChanged": true,
        "languageProfileId": 0
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

## delete/api/v3/blocklist/{id}

> Code samples

```bash
curl http://localhost:8989/api/v3/blocklist/0 \
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
curl http://localhost:8989/api/v3/blocklist/bulk \
  -X DELETE \
  -H 'Content-Type: application/json' \
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

<h3 id="deleteapiv3blocklistbulk-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

<h1 id="sonarr-calendar">Calendar</h1>

## get/api/v3/calendar

> Code samples

```bash
curl http://localhost:8989/api/v3/calendar \
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
|includeSeries|query|boolean|false|none|
|includeEpisodeFile|query|boolean|false|none|
|includeEpisodeImages|query|boolean|false|none|
|tags|query|string|false|none|

> Example responses

> 200 Response

```json
[
  {
    "id": 0,
    "seriesId": 0,
    "tvdbId": 0,
    "episodeFileId": 0,
    "seasonNumber": 0,
    "episodeNumber": 0,
    "title": "string",
    "airDate": "string",
    "airDateUtc": "1970-01-01T00:00:00Z",
    "lastSearchTime": "1970-01-01T00:00:00Z",
    "runtime": 0,
    "finaleType": "string",
    "overview": "string",
    "episodeFile": {
      "id": 0,
      "seriesId": 0,
      "seasonNumber": 0,
      "relativePath": "string",
      "path": "string",
      "size": 0,
      "dateAdded": "1970-01-01T00:00:00Z",
      "sceneName": "string",
      "releaseGroup": "string",
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
          "resolution": 0
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
                      "hint": "string"
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
      "releaseType": "unknown",
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
      "qualityCutoffNotMet": true
    },
    "hasFile": true,
    "monitored": true,
    "absoluteEpisodeNumber": 0,
    "sceneAbsoluteEpisodeNumber": 0,
    "sceneEpisodeNumber": 0,
    "sceneSeasonNumber": 0,
    "unverifiedSceneNumbering": true,
    "series": {
      "id": 0,
      "title": "string",
      "alternateTitles": [
        {
          "title": "string",
          "seasonNumber": 0,
          "sceneSeasonNumber": 0,
          "sceneOrigin": "string",
          "comment": "string"
        }
      ],
      "sortTitle": "string",
      "status": "continuing",
      "ended": true,
      "profileName": "string",
      "overview": "string",
      "nextAiring": "1970-01-01T00:00:00Z",
      "previousAiring": "1970-01-01T00:00:00Z",
      "network": "string",
      "airTime": "string",
      "images": [
        {
          "coverType": "unknown",
          "url": "string",
          "remoteUrl": "string"
        }
      ],
      "language": {
        "id": 0,
        "name": "string"
      },
      "originalLanguage": {
        "id": 0,
        "name": "string"
      },
      "remotePoster": "string",
      "seasonType": "string",
      "seasons": [
        {
          "seasonNumber": 0,
          "monitored": true,
          "title": "string",
          "statistics": {
            "nextAiring": "1970-01-01T00:00:00Z",
            "previousAiring": "1970-01-01T00:00:00Z",
            "episodeFileCount": 0,
            "episodeCount": 0,
            "totalEpisodeCount": 0,
            "sizeOnDisk": 0,
            "releaseGroups": [
              "string"
            ],
            "percentOfEpisodes": 0
          },
          "images": [
            {
              "coverType": "unknown",
              "url": "string",
              "remoteUrl": "string"
            }
          ]
        }
      ],
      "seasonTypes": [
        {
          "name": "string",
          "type": "string",
          "seasonNumbers": [
            0
          ],
          "episodeCount": 0
        }
      ],
      "translations": [
        {
          "language": {
            "id": 0,
            "name": "string"
          },
          "title": "string",
          "overview": "string"
        }
      ],
      "year": 0,
      "path": "string",
      "pendingPath": "string",
      "qualityProfileId": 0,
      "seasonFolder": true,
      "monitored": true,
      "monitorNewItems": "all",
      "useSceneNumbering": true,
      "runtime": 0,
      "tvdbId": 0,
      "tvRageId": 0,
      "tvMazeId": 0,
      "tmdbId": 0,
      "firstAired": "1970-01-01T00:00:00Z",
      "lastAired": "1970-01-01T00:00:00Z",
      "seriesType": "standard",
      "cleanTitle": "string",
      "originalTitle": "string",
      "cleanOriginalTitle": "string",
      "imdbId": "string",
      "titleSlug": "string",
      "rootFolderPath": "string",
      "folder": "string",
      "folders": [
        {
          "language": {
            "id": 0,
            "name": "string"
          },
          "folder": "string"
        }
      ],
      "certification": "string",
      "genres": [
        "string"
      ],
      "tags": [
        0
      ],
      "added": "1970-01-01T00:00:00Z",
      "addOptions": {
        "ignoreEpisodesWithFiles": true,
        "ignoreEpisodesWithoutFiles": true,
        "monitor": "unknown",
        "searchForMissingEpisodes": true,
        "searchForCutoffUnmetEpisodes": true
      },
      "ratings": {
        "votes": 0,
        "value": 0
      },
      "statistics": {
        "seasonCount": 0,
        "episodeFileCount": 0,
        "episodeCount": 0,
        "totalEpisodeCount": 0,
        "sizeOnDisk": 0,
        "releaseGroups": [
          "string"
        ],
        "percentOfEpisodes": 0
      },
      "episodesChanged": true,
      "languageProfileId": 0
    },
    "images": [
      {
        "coverType": "unknown",
        "url": "string",
        "remoteUrl": "string"
      }
    ]
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
|*anonymous*|[[EpisodeResource](#schemaepisoderesource)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## get/api/v3/calendar/{id}

> Code samples

```bash
curl http://localhost:8989/api/v3/calendar/0 \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /api/v3/calendar/{id}`

<h3 id="getapiv3calendarid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|none|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "seriesId": 0,
  "tvdbId": 0,
  "episodeFileId": 0,
  "seasonNumber": 0,
  "episodeNumber": 0,
  "title": "string",
  "airDate": "string",
  "airDateUtc": "1970-01-01T00:00:00Z",
  "lastSearchTime": "1970-01-01T00:00:00Z",
  "runtime": 0,
  "finaleType": "string",
  "overview": "string",
  "episodeFile": {
    "id": 0,
    "seriesId": 0,
    "seasonNumber": 0,
    "relativePath": "string",
    "path": "string",
    "size": 0,
    "dateAdded": "1970-01-01T00:00:00Z",
    "sceneName": "string",
    "releaseGroup": "string",
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
        "resolution": 0
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
                    "hint": "string"
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
    "releaseType": "unknown",
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
    "qualityCutoffNotMet": true
  },
  "hasFile": true,
  "monitored": true,
  "absoluteEpisodeNumber": 0,
  "sceneAbsoluteEpisodeNumber": 0,
  "sceneEpisodeNumber": 0,
  "sceneSeasonNumber": 0,
  "unverifiedSceneNumbering": true,
  "series": {
    "id": 0,
    "title": "string",
    "alternateTitles": [
      {
        "title": "string",
        "seasonNumber": 0,
        "sceneSeasonNumber": 0,
        "sceneOrigin": "string",
        "comment": "string"
      }
    ],
    "sortTitle": "string",
    "status": "continuing",
    "ended": true,
    "profileName": "string",
    "overview": "string",
    "nextAiring": "1970-01-01T00:00:00Z",
    "previousAiring": "1970-01-01T00:00:00Z",
    "network": "string",
    "airTime": "string",
    "images": [
      {
        "coverType": "unknown",
        "url": "string",
        "remoteUrl": "string"
      }
    ],
    "language": {
      "id": 0,
      "name": "string"
    },
    "originalLanguage": {
      "id": 0,
      "name": "string"
    },
    "remotePoster": "string",
    "seasonType": "string",
    "seasons": [
      {
        "seasonNumber": 0,
        "monitored": true,
        "title": "string",
        "statistics": {
          "nextAiring": "1970-01-01T00:00:00Z",
          "previousAiring": "1970-01-01T00:00:00Z",
          "episodeFileCount": 0,
          "episodeCount": 0,
          "totalEpisodeCount": 0,
          "sizeOnDisk": 0,
          "releaseGroups": [
            "string"
          ],
          "percentOfEpisodes": 0
        },
        "images": [
          {
            "coverType": "unknown",
            "url": "string",
            "remoteUrl": "string"
          }
        ]
      }
    ],
    "seasonTypes": [
      {
        "name": "string",
        "type": "string",
        "seasonNumbers": [
          0
        ],
        "episodeCount": 0
      }
    ],
    "translations": [
      {
        "language": {
          "id": 0,
          "name": "string"
        },
        "title": "string",
        "overview": "string"
      }
    ],
    "year": 0,
    "path": "string",
    "pendingPath": "string",
    "qualityProfileId": 0,
    "seasonFolder": true,
    "monitored": true,
    "monitorNewItems": "all",
    "useSceneNumbering": true,
    "runtime": 0,
    "tvdbId": 0,
    "tvRageId": 0,
    "tvMazeId": 0,
    "tmdbId": 0,
    "firstAired": "1970-01-01T00:00:00Z",
    "lastAired": "1970-01-01T00:00:00Z",
    "seriesType": "standard",
    "cleanTitle": "string",
    "originalTitle": "string",
    "cleanOriginalTitle": "string",
    "imdbId": "string",
    "titleSlug": "string",
    "rootFolderPath": "string",
    "folder": "string",
    "folders": [
      {
        "language": {
          "id": 0,
          "name": "string"
        },
        "folder": "string"
      }
    ],
    "certification": "string",
    "genres": [
      "string"
    ],
    "tags": [
      0
    ],
    "added": "1970-01-01T00:00:00Z",
    "addOptions": {
      "ignoreEpisodesWithFiles": true,
      "ignoreEpisodesWithoutFiles": true,
      "monitor": "unknown",
      "searchForMissingEpisodes": true,
      "searchForCutoffUnmetEpisodes": true
    },
    "ratings": {
      "votes": 0,
      "value": 0
    },
    "statistics": {
      "seasonCount": 0,
      "episodeFileCount": 0,
      "episodeCount": 0,
      "totalEpisodeCount": 0,
      "sizeOnDisk": 0,
      "releaseGroups": [
        "string"
      ],
      "percentOfEpisodes": 0
    },
    "episodesChanged": true,
    "languageProfileId": 0
  },
  "images": [
    {
      "coverType": "unknown",
      "url": "string",
      "remoteUrl": "string"
    }
  ]
}
```

<h3 id="getapiv3calendarid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[EpisodeResource](#schemaepisoderesource)|
|404|Not Found|Not Found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

<h1 id="sonarr-calendarfeed">CalendarFeed</h1>

## get/feed/v3/calendar/sonarr.ics

> Code samples

```bash
curl http://localhost:8989/feed/v3/calendar/sonarr.ics \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /feed/v3/calendar/sonarr.ics`

<h3 id="getfeedv3calendarsonarrics-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|pastDays|query|integer(int32)|false|none|
|futureDays|query|integer(int32)|false|none|
|tags|query|string|false|none|
|unmonitored|query|boolean|false|none|
|premieresOnly|query|boolean|false|none|
|asAllDay|query|boolean|false|none|

<h3 id="getfeedv3calendarsonarrics-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

<h1 id="sonarr-command">Command</h1>

## get/api/v3/command

> Code samples

```bash
curl http://localhost:8989/api/v3/command \
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
curl http://localhost:8989/api/v3/command \
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
|» result|indeterminate|
|» trigger|unspecified|
|» trigger|manual|
|» trigger|scheduled|

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
|200|OK|OK|[CommandResource](#schemacommandresource)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## get/api/v3/command/{id}

> Code samples

```bash
curl http://localhost:8989/api/v3/command/0 \
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
curl http://localhost:8989/api/v3/command/0 \
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

<h1 id="sonarr-customfilter">CustomFilter</h1>

## get/api/v3/customfilter

> Code samples

```bash
curl http://localhost:8989/api/v3/customfilter \
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
curl http://localhost:8989/api/v3/customfilter \
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

<h3 id="postapiv3customfilter-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[CustomFilterResource](#schemacustomfilterresource)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## get/api/v3/customfilter/{id}

> Code samples

```bash
curl http://localhost:8989/api/v3/customfilter/0 \
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
curl http://localhost:8989/api/v3/customfilter/string \
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

<h3 id="putapiv3customfilterid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[CustomFilterResource](#schemacustomfilterresource)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## delete/api/v3/customfilter/{id}

> Code samples

```bash
curl http://localhost:8989/api/v3/customfilter/0 \
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

<h1 id="sonarr-customformat">CustomFormat</h1>

## get/api/v3/customformat

> Code samples

```bash
curl http://localhost:8989/api/v3/customformat \
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
                "hint": "string"
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
curl http://localhost:8989/api/v3/customformat \
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
                "hint": "string"
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
              "hint": "string"
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
              "hint": "string"
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
|200|OK|OK|[CustomFormatResource](#schemacustomformatresource)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## get/api/v3/customformat/{id}

> Code samples

```bash
curl http://localhost:8989/api/v3/customformat/0 \
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
              "hint": "string"
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
curl http://localhost:8989/api/v3/customformat/string \
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
                "hint": "string"
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
              "hint": "string"
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
              "hint": "string"
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
|200|OK|OK|[CustomFormatResource](#schemacustomformatresource)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## delete/api/v3/customformat/{id}

> Code samples

```bash
curl http://localhost:8989/api/v3/customformat/0 \
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
curl http://localhost:8989/api/v3/customformat/bulk \
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
              "hint": "string"
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

<h3 id="putapiv3customformatbulk-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[CustomFormatResource](#schemacustomformatresource)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## delete/api/v3/customformat/bulk

> Code samples

```bash
curl http://localhost:8989/api/v3/customformat/bulk \
  -X DELETE \
  -H 'Content-Type: application/json' \
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

<h3 id="deleteapiv3customformatbulk-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## get/api/v3/customformat/schema

> Code samples

```bash
curl http://localhost:8989/api/v3/customformat/schema \
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
            "hint": "string"
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

<h1 id="sonarr-cutoff">Cutoff</h1>

## get/api/v3/wanted/cutoff

> Code samples

```bash
curl http://localhost:8989/api/v3/wanted/cutoff \
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
|includeSeries|query|boolean|false|none|
|includeEpisodeFile|query|boolean|false|none|
|includeImages|query|boolean|false|none|
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
      "seriesId": 0,
      "tvdbId": 0,
      "episodeFileId": 0,
      "seasonNumber": 0,
      "episodeNumber": 0,
      "title": "string",
      "airDate": "string",
      "airDateUtc": "1970-01-01T00:00:00Z",
      "lastSearchTime": "1970-01-01T00:00:00Z",
      "runtime": 0,
      "finaleType": "string",
      "overview": "string",
      "episodeFile": {
        "id": 0,
        "seriesId": 0,
        "seasonNumber": 0,
        "relativePath": "string",
        "path": "string",
        "size": 0,
        "dateAdded": "1970-01-01T00:00:00Z",
        "sceneName": "string",
        "releaseGroup": "string",
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
            "resolution": 0
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
                        "hint": "string"
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
        "releaseType": "unknown",
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
        "qualityCutoffNotMet": true
      },
      "hasFile": true,
      "monitored": true,
      "absoluteEpisodeNumber": 0,
      "sceneAbsoluteEpisodeNumber": 0,
      "sceneEpisodeNumber": 0,
      "sceneSeasonNumber": 0,
      "unverifiedSceneNumbering": true,
      "series": {
        "id": 0,
        "title": "string",
        "alternateTitles": [
          {
            "title": "string",
            "seasonNumber": 0,
            "sceneSeasonNumber": 0,
            "sceneOrigin": "string",
            "comment": "string"
          }
        ],
        "sortTitle": "string",
        "status": "continuing",
        "ended": true,
        "profileName": "string",
        "overview": "string",
        "nextAiring": "1970-01-01T00:00:00Z",
        "previousAiring": "1970-01-01T00:00:00Z",
        "network": "string",
        "airTime": "string",
        "images": [
          {
            "coverType": "unknown",
            "url": "string",
            "remoteUrl": "string"
          }
        ],
        "language": {
          "id": 0,
          "name": "string"
        },
        "originalLanguage": {
          "id": 0,
          "name": "string"
        },
        "remotePoster": "string",
        "seasonType": "string",
        "seasons": [
          {
            "seasonNumber": 0,
            "monitored": true,
            "title": "string",
            "statistics": {
              "nextAiring": "1970-01-01T00:00:00Z",
              "previousAiring": "1970-01-01T00:00:00Z",
              "episodeFileCount": 0,
              "episodeCount": 0,
              "totalEpisodeCount": 0,
              "sizeOnDisk": 0,
              "releaseGroups": [
                "string"
              ],
              "percentOfEpisodes": 0
            },
            "images": [
              {
                "coverType": "unknown",
                "url": "string",
                "remoteUrl": "string"
              }
            ]
          }
        ],
        "seasonTypes": [
          {
            "name": "string",
            "type": "string",
            "seasonNumbers": [
              0
            ],
            "episodeCount": 0
          }
        ],
        "translations": [
          {
            "language": {
              "id": 0,
              "name": "string"
            },
            "title": "string",
            "overview": "string"
          }
        ],
        "year": 0,
        "path": "string",
        "pendingPath": "string",
        "qualityProfileId": 0,
        "seasonFolder": true,
        "monitored": true,
        "monitorNewItems": "all",
        "useSceneNumbering": true,
        "runtime": 0,
        "tvdbId": 0,
        "tvRageId": 0,
        "tvMazeId": 0,
        "tmdbId": 0,
        "firstAired": "1970-01-01T00:00:00Z",
        "lastAired": "1970-01-01T00:00:00Z",
        "seriesType": "standard",
        "cleanTitle": "string",
        "originalTitle": "string",
        "cleanOriginalTitle": "string",
        "imdbId": "string",
        "titleSlug": "string",
        "rootFolderPath": "string",
        "folder": "string",
        "folders": [
          {
            "language": {
              "id": 0,
              "name": "string"
            },
            "folder": "string"
          }
        ],
        "certification": "string",
        "genres": [
          "string"
        ],
        "tags": [
          0
        ],
        "added": "1970-01-01T00:00:00Z",
        "addOptions": {
          "ignoreEpisodesWithFiles": true,
          "ignoreEpisodesWithoutFiles": true,
          "monitor": "unknown",
          "searchForMissingEpisodes": true,
          "searchForCutoffUnmetEpisodes": true
        },
        "ratings": {
          "votes": 0,
          "value": 0
        },
        "statistics": {
          "seasonCount": 0,
          "episodeFileCount": 0,
          "episodeCount": 0,
          "totalEpisodeCount": 0,
          "sizeOnDisk": 0,
          "releaseGroups": [
            "string"
          ],
          "percentOfEpisodes": 0
        },
        "episodesChanged": true,
        "languageProfileId": 0
      },
      "images": [
        {
          "coverType": "unknown",
          "url": "string",
          "remoteUrl": "string"
        }
      ]
    }
  ]
}
```

<h3 id="getapiv3wantedcutoff-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[EpisodeResourcePagingResource](#schemaepisoderesourcepagingresource)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## get/api/v3/wanted/cutoff/{id}

> Code samples

```bash
curl http://localhost:8989/api/v3/wanted/cutoff/0 \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /api/v3/wanted/cutoff/{id}`

<h3 id="getapiv3wantedcutoffid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|none|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "seriesId": 0,
  "tvdbId": 0,
  "episodeFileId": 0,
  "seasonNumber": 0,
  "episodeNumber": 0,
  "title": "string",
  "airDate": "string",
  "airDateUtc": "1970-01-01T00:00:00Z",
  "lastSearchTime": "1970-01-01T00:00:00Z",
  "runtime": 0,
  "finaleType": "string",
  "overview": "string",
  "episodeFile": {
    "id": 0,
    "seriesId": 0,
    "seasonNumber": 0,
    "relativePath": "string",
    "path": "string",
    "size": 0,
    "dateAdded": "1970-01-01T00:00:00Z",
    "sceneName": "string",
    "releaseGroup": "string",
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
        "resolution": 0
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
                    "hint": "string"
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
    "releaseType": "unknown",
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
    "qualityCutoffNotMet": true
  },
  "hasFile": true,
  "monitored": true,
  "absoluteEpisodeNumber": 0,
  "sceneAbsoluteEpisodeNumber": 0,
  "sceneEpisodeNumber": 0,
  "sceneSeasonNumber": 0,
  "unverifiedSceneNumbering": true,
  "series": {
    "id": 0,
    "title": "string",
    "alternateTitles": [
      {
        "title": "string",
        "seasonNumber": 0,
        "sceneSeasonNumber": 0,
        "sceneOrigin": "string",
        "comment": "string"
      }
    ],
    "sortTitle": "string",
    "status": "continuing",
    "ended": true,
    "profileName": "string",
    "overview": "string",
    "nextAiring": "1970-01-01T00:00:00Z",
    "previousAiring": "1970-01-01T00:00:00Z",
    "network": "string",
    "airTime": "string",
    "images": [
      {
        "coverType": "unknown",
        "url": "string",
        "remoteUrl": "string"
      }
    ],
    "language": {
      "id": 0,
      "name": "string"
    },
    "originalLanguage": {
      "id": 0,
      "name": "string"
    },
    "remotePoster": "string",
    "seasonType": "string",
    "seasons": [
      {
        "seasonNumber": 0,
        "monitored": true,
        "title": "string",
        "statistics": {
          "nextAiring": "1970-01-01T00:00:00Z",
          "previousAiring": "1970-01-01T00:00:00Z",
          "episodeFileCount": 0,
          "episodeCount": 0,
          "totalEpisodeCount": 0,
          "sizeOnDisk": 0,
          "releaseGroups": [
            "string"
          ],
          "percentOfEpisodes": 0
        },
        "images": [
          {
            "coverType": "unknown",
            "url": "string",
            "remoteUrl": "string"
          }
        ]
      }
    ],
    "seasonTypes": [
      {
        "name": "string",
        "type": "string",
        "seasonNumbers": [
          0
        ],
        "episodeCount": 0
      }
    ],
    "translations": [
      {
        "language": {
          "id": 0,
          "name": "string"
        },
        "title": "string",
        "overview": "string"
      }
    ],
    "year": 0,
    "path": "string",
    "pendingPath": "string",
    "qualityProfileId": 0,
    "seasonFolder": true,
    "monitored": true,
    "monitorNewItems": "all",
    "useSceneNumbering": true,
    "runtime": 0,
    "tvdbId": 0,
    "tvRageId": 0,
    "tvMazeId": 0,
    "tmdbId": 0,
    "firstAired": "1970-01-01T00:00:00Z",
    "lastAired": "1970-01-01T00:00:00Z",
    "seriesType": "standard",
    "cleanTitle": "string",
    "originalTitle": "string",
    "cleanOriginalTitle": "string",
    "imdbId": "string",
    "titleSlug": "string",
    "rootFolderPath": "string",
    "folder": "string",
    "folders": [
      {
        "language": {
          "id": 0,
          "name": "string"
        },
        "folder": "string"
      }
    ],
    "certification": "string",
    "genres": [
      "string"
    ],
    "tags": [
      0
    ],
    "added": "1970-01-01T00:00:00Z",
    "addOptions": {
      "ignoreEpisodesWithFiles": true,
      "ignoreEpisodesWithoutFiles": true,
      "monitor": "unknown",
      "searchForMissingEpisodes": true,
      "searchForCutoffUnmetEpisodes": true
    },
    "ratings": {
      "votes": 0,
      "value": 0
    },
    "statistics": {
      "seasonCount": 0,
      "episodeFileCount": 0,
      "episodeCount": 0,
      "totalEpisodeCount": 0,
      "sizeOnDisk": 0,
      "releaseGroups": [
        "string"
      ],
      "percentOfEpisodes": 0
    },
    "episodesChanged": true,
    "languageProfileId": 0
  },
  "images": [
    {
      "coverType": "unknown",
      "url": "string",
      "remoteUrl": "string"
    }
  ]
}
```

<h3 id="getapiv3wantedcutoffid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[EpisodeResource](#schemaepisoderesource)|
|404|Not Found|Not Found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

<h1 id="sonarr-delayprofile">DelayProfile</h1>

## get/api/v3/delayprofile

> Code samples

```bash
curl http://localhost:8989/api/v3/delayprofile \
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
curl http://localhost:8989/api/v3/delayprofile \
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

<h3 id="postapiv3delayprofile-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[DelayProfileResource](#schemadelayprofileresource)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## get/api/v3/delayprofile/{id}

> Code samples

```bash
curl http://localhost:8989/api/v3/delayprofile/0 \
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
curl http://localhost:8989/api/v3/delayprofile/string \
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

<h3 id="putapiv3delayprofileid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[DelayProfileResource](#schemadelayprofileresource)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## delete/api/v3/delayprofile/{id}

> Code samples

```bash
curl http://localhost:8989/api/v3/delayprofile/0 \
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
curl http://localhost:8989/api/v3/delayprofile/reorder/0 \
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

<h1 id="sonarr-diskspace">DiskSpace</h1>

## get/api/v3/diskspace

> Code samples

```bash
curl http://localhost:8989/api/v3/diskspace \
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

<h1 id="sonarr-downloadclient">DownloadClient</h1>

## get/api/v3/downloadclient

> Code samples

```bash
curl http://localhost:8989/api/v3/downloadclient \
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
            "hint": "string"
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
curl http://localhost:8989/api/v3/downloadclient \
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
            "hint": "string"
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
          "hint": "string"
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
          "hint": "string"
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
|200|OK|OK|[DownloadClientResource](#schemadownloadclientresource)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## get/api/v3/downloadclient/{id}

> Code samples

```bash
curl http://localhost:8989/api/v3/downloadclient/0 \
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
          "hint": "string"
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
curl http://localhost:8989/api/v3/downloadclient/0 \
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
            "hint": "string"
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
          "hint": "string"
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
          "hint": "string"
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
|200|OK|OK|[DownloadClientResource](#schemadownloadclientresource)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## delete/api/v3/downloadclient/{id}

> Code samples

```bash
curl http://localhost:8989/api/v3/downloadclient/0 \
  -X DELETE \
  -H "X-Api-Key: ${API_KEY}"
```

`DELETE /api/v3/downloadclient/{id}`

<h3 id="deleteapiv3downloadclientid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|none|

<h3 id="deleteapiv3downloadclientid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## put/api/v3/downloadclient/bulk

> Code samples

```bash
curl http://localhost:8989/api/v3/downloadclient/bulk \
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
          "hint": "string"
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

<h3 id="putapiv3downloadclientbulk-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[DownloadClientResource](#schemadownloadclientresource)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## delete/api/v3/downloadclient/bulk

> Code samples

```bash
curl http://localhost:8989/api/v3/downloadclient/bulk \
  -X DELETE \
  -H 'Content-Type: application/json' \
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

<h3 id="deleteapiv3downloadclientbulk-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## get/api/v3/downloadclient/schema

> Code samples

```bash
curl http://localhost:8989/api/v3/downloadclient/schema \
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
            "hint": "string"
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
curl http://localhost:8989/api/v3/downloadclient/test \
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
            "hint": "string"
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
          "hint": "string"
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
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## post/api/v3/downloadclient/testall

> Code samples

```bash
curl http://localhost:8989/api/v3/downloadclient/testall \
  -X POST \
  -H "X-Api-Key: ${API_KEY}"
```

`POST /api/v3/downloadclient/testall`

<h3 id="postapiv3downloadclienttestall-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## post/api/v3/downloadclient/action/{name}

> Code samples

```bash
curl http://localhost:8989/api/v3/downloadclient/action/string \
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
            "hint": "string"
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
          "hint": "string"
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
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

<h1 id="sonarr-downloadclientconfig">DownloadClientConfig</h1>

## get/api/v3/config/downloadclient

> Code samples

```bash
curl http://localhost:8989/api/v3/config/downloadclient \
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
curl http://localhost:8989/api/v3/config/downloadclient/0 \
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
curl http://localhost:8989/api/v3/config/downloadclient/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}" \
  -d '{
    "id": 0,
    "downloadClientWorkingFolders": "string",
    "enableCompletedDownloadHandling": true,
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
|» autoRedownloadFailed|body|boolean|false|none|
|» autoRedownloadFailedFromInteractiveSearch|body|boolean|false|none|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "downloadClientWorkingFolders": "string",
  "enableCompletedDownloadHandling": true,
  "autoRedownloadFailed": true,
  "autoRedownloadFailedFromInteractiveSearch": true
}
```

<h3 id="putapiv3configdownloadclientid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[DownloadClientConfigResource](#schemadownloadclientconfigresource)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

<h1 id="sonarr-episode">Episode</h1>

## get/api/v3/episode

> Code samples

```bash
curl http://localhost:8989/api/v3/episode \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /api/v3/episode`

<h3 id="getapiv3episode-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|seriesId|query|integer(int32)|false|none|
|seasonNumber|query|integer(int32)|false|none|
|episodeIds|query|[integer(int32)]|false|none|
|episodeFileId|query|integer(int32)|false|none|
|includeSeries|query|boolean|false|none|
|includeEpisodeFile|query|boolean|false|none|
|includeImages|query|boolean|false|none|

> Example responses

> 200 Response

```json
[
  {
    "id": 0,
    "seriesId": 0,
    "tvdbId": 0,
    "episodeFileId": 0,
    "seasonNumber": 0,
    "episodeNumber": 0,
    "title": "string",
    "airDate": "string",
    "airDateUtc": "1970-01-01T00:00:00Z",
    "lastSearchTime": "1970-01-01T00:00:00Z",
    "runtime": 0,
    "finaleType": "string",
    "overview": "string",
    "episodeFile": {
      "id": 0,
      "seriesId": 0,
      "seasonNumber": 0,
      "relativePath": "string",
      "path": "string",
      "size": 0,
      "dateAdded": "1970-01-01T00:00:00Z",
      "sceneName": "string",
      "releaseGroup": "string",
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
          "resolution": 0
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
                      "hint": "string"
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
      "releaseType": "unknown",
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
      "qualityCutoffNotMet": true
    },
    "hasFile": true,
    "monitored": true,
    "absoluteEpisodeNumber": 0,
    "sceneAbsoluteEpisodeNumber": 0,
    "sceneEpisodeNumber": 0,
    "sceneSeasonNumber": 0,
    "unverifiedSceneNumbering": true,
    "series": {
      "id": 0,
      "title": "string",
      "alternateTitles": [
        {
          "title": "string",
          "seasonNumber": 0,
          "sceneSeasonNumber": 0,
          "sceneOrigin": "string",
          "comment": "string"
        }
      ],
      "sortTitle": "string",
      "status": "continuing",
      "ended": true,
      "profileName": "string",
      "overview": "string",
      "nextAiring": "1970-01-01T00:00:00Z",
      "previousAiring": "1970-01-01T00:00:00Z",
      "network": "string",
      "airTime": "string",
      "images": [
        {
          "coverType": "unknown",
          "url": "string",
          "remoteUrl": "string"
        }
      ],
      "language": {
        "id": 0,
        "name": "string"
      },
      "originalLanguage": {
        "id": 0,
        "name": "string"
      },
      "remotePoster": "string",
      "seasonType": "string",
      "seasons": [
        {
          "seasonNumber": 0,
          "monitored": true,
          "title": "string",
          "statistics": {
            "nextAiring": "1970-01-01T00:00:00Z",
            "previousAiring": "1970-01-01T00:00:00Z",
            "episodeFileCount": 0,
            "episodeCount": 0,
            "totalEpisodeCount": 0,
            "sizeOnDisk": 0,
            "releaseGroups": [
              "string"
            ],
            "percentOfEpisodes": 0
          },
          "images": [
            {
              "coverType": "unknown",
              "url": "string",
              "remoteUrl": "string"
            }
          ]
        }
      ],
      "seasonTypes": [
        {
          "name": "string",
          "type": "string",
          "seasonNumbers": [
            0
          ],
          "episodeCount": 0
        }
      ],
      "translations": [
        {
          "language": {
            "id": 0,
            "name": "string"
          },
          "title": "string",
          "overview": "string"
        }
      ],
      "year": 0,
      "path": "string",
      "pendingPath": "string",
      "qualityProfileId": 0,
      "seasonFolder": true,
      "monitored": true,
      "monitorNewItems": "all",
      "useSceneNumbering": true,
      "runtime": 0,
      "tvdbId": 0,
      "tvRageId": 0,
      "tvMazeId": 0,
      "tmdbId": 0,
      "firstAired": "1970-01-01T00:00:00Z",
      "lastAired": "1970-01-01T00:00:00Z",
      "seriesType": "standard",
      "cleanTitle": "string",
      "originalTitle": "string",
      "cleanOriginalTitle": "string",
      "imdbId": "string",
      "titleSlug": "string",
      "rootFolderPath": "string",
      "folder": "string",
      "folders": [
        {
          "language": {
            "id": 0,
            "name": "string"
          },
          "folder": "string"
        }
      ],
      "certification": "string",
      "genres": [
        "string"
      ],
      "tags": [
        0
      ],
      "added": "1970-01-01T00:00:00Z",
      "addOptions": {
        "ignoreEpisodesWithFiles": true,
        "ignoreEpisodesWithoutFiles": true,
        "monitor": "unknown",
        "searchForMissingEpisodes": true,
        "searchForCutoffUnmetEpisodes": true
      },
      "ratings": {
        "votes": 0,
        "value": 0
      },
      "statistics": {
        "seasonCount": 0,
        "episodeFileCount": 0,
        "episodeCount": 0,
        "totalEpisodeCount": 0,
        "sizeOnDisk": 0,
        "releaseGroups": [
          "string"
        ],
        "percentOfEpisodes": 0
      },
      "episodesChanged": true,
      "languageProfileId": 0
    },
    "images": [
      {
        "coverType": "unknown",
        "url": "string",
        "remoteUrl": "string"
      }
    ]
  }
]
```

<h3 id="getapiv3episode-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="getapiv3episode-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[EpisodeResource](#schemaepisoderesource)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## get/api/v3/episode/{id}

> Code samples

```bash
curl http://localhost:8989/api/v3/episode/0 \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /api/v3/episode/{id}`

<h3 id="getapiv3episodeid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|none|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "seriesId": 0,
  "tvdbId": 0,
  "episodeFileId": 0,
  "seasonNumber": 0,
  "episodeNumber": 0,
  "title": "string",
  "airDate": "string",
  "airDateUtc": "1970-01-01T00:00:00Z",
  "lastSearchTime": "1970-01-01T00:00:00Z",
  "runtime": 0,
  "finaleType": "string",
  "overview": "string",
  "episodeFile": {
    "id": 0,
    "seriesId": 0,
    "seasonNumber": 0,
    "relativePath": "string",
    "path": "string",
    "size": 0,
    "dateAdded": "1970-01-01T00:00:00Z",
    "sceneName": "string",
    "releaseGroup": "string",
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
        "resolution": 0
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
                    "hint": "string"
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
    "releaseType": "unknown",
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
    "qualityCutoffNotMet": true
  },
  "hasFile": true,
  "monitored": true,
  "absoluteEpisodeNumber": 0,
  "sceneAbsoluteEpisodeNumber": 0,
  "sceneEpisodeNumber": 0,
  "sceneSeasonNumber": 0,
  "unverifiedSceneNumbering": true,
  "series": {
    "id": 0,
    "title": "string",
    "alternateTitles": [
      {
        "title": "string",
        "seasonNumber": 0,
        "sceneSeasonNumber": 0,
        "sceneOrigin": "string",
        "comment": "string"
      }
    ],
    "sortTitle": "string",
    "status": "continuing",
    "ended": true,
    "profileName": "string",
    "overview": "string",
    "nextAiring": "1970-01-01T00:00:00Z",
    "previousAiring": "1970-01-01T00:00:00Z",
    "network": "string",
    "airTime": "string",
    "images": [
      {
        "coverType": "unknown",
        "url": "string",
        "remoteUrl": "string"
      }
    ],
    "language": {
      "id": 0,
      "name": "string"
    },
    "originalLanguage": {
      "id": 0,
      "name": "string"
    },
    "remotePoster": "string",
    "seasonType": "string",
    "seasons": [
      {
        "seasonNumber": 0,
        "monitored": true,
        "title": "string",
        "statistics": {
          "nextAiring": "1970-01-01T00:00:00Z",
          "previousAiring": "1970-01-01T00:00:00Z",
          "episodeFileCount": 0,
          "episodeCount": 0,
          "totalEpisodeCount": 0,
          "sizeOnDisk": 0,
          "releaseGroups": [
            "string"
          ],
          "percentOfEpisodes": 0
        },
        "images": [
          {
            "coverType": "unknown",
            "url": "string",
            "remoteUrl": "string"
          }
        ]
      }
    ],
    "seasonTypes": [
      {
        "name": "string",
        "type": "string",
        "seasonNumbers": [
          0
        ],
        "episodeCount": 0
      }
    ],
    "translations": [
      {
        "language": {
          "id": 0,
          "name": "string"
        },
        "title": "string",
        "overview": "string"
      }
    ],
    "year": 0,
    "path": "string",
    "pendingPath": "string",
    "qualityProfileId": 0,
    "seasonFolder": true,
    "monitored": true,
    "monitorNewItems": "all",
    "useSceneNumbering": true,
    "runtime": 0,
    "tvdbId": 0,
    "tvRageId": 0,
    "tvMazeId": 0,
    "tmdbId": 0,
    "firstAired": "1970-01-01T00:00:00Z",
    "lastAired": "1970-01-01T00:00:00Z",
    "seriesType": "standard",
    "cleanTitle": "string",
    "originalTitle": "string",
    "cleanOriginalTitle": "string",
    "imdbId": "string",
    "titleSlug": "string",
    "rootFolderPath": "string",
    "folder": "string",
    "folders": [
      {
        "language": {
          "id": 0,
          "name": "string"
        },
        "folder": "string"
      }
    ],
    "certification": "string",
    "genres": [
      "string"
    ],
    "tags": [
      0
    ],
    "added": "1970-01-01T00:00:00Z",
    "addOptions": {
      "ignoreEpisodesWithFiles": true,
      "ignoreEpisodesWithoutFiles": true,
      "monitor": "unknown",
      "searchForMissingEpisodes": true,
      "searchForCutoffUnmetEpisodes": true
    },
    "ratings": {
      "votes": 0,
      "value": 0
    },
    "statistics": {
      "seasonCount": 0,
      "episodeFileCount": 0,
      "episodeCount": 0,
      "totalEpisodeCount": 0,
      "sizeOnDisk": 0,
      "releaseGroups": [
        "string"
      ],
      "percentOfEpisodes": 0
    },
    "episodesChanged": true,
    "languageProfileId": 0
  },
  "images": [
    {
      "coverType": "unknown",
      "url": "string",
      "remoteUrl": "string"
    }
  ]
}
```

<h3 id="getapiv3episodeid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[EpisodeResource](#schemaepisoderesource)|
|404|Not Found|Not Found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## put/api/v3/episode/{id}

> Code samples

```bash
curl http://localhost:8989/api/v3/episode/0 \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}" \
  -d '{
    "id": 0,
    "seriesId": 0,
    "tvdbId": 0,
    "episodeFileId": 0,
    "seasonNumber": 0,
    "episodeNumber": 0,
    "title": "string",
    "airDate": "string",
    "airDateUtc": "1970-01-01T00:00:00Z",
    "lastSearchTime": "1970-01-01T00:00:00Z",
    "runtime": 0,
    "finaleType": "string",
    "overview": "string",
    "episodeFile": {
      "id": 0,
      "seriesId": 0,
      "seasonNumber": 0,
      "relativePath": "string",
      "path": "string",
      "size": 0,
      "dateAdded": "1970-01-01T00:00:00Z",
      "sceneName": "string",
      "releaseGroup": "string",
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
          "resolution": 0
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
                      "hint": "string"
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
      "releaseType": "unknown",
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
      "qualityCutoffNotMet": true
    },
    "hasFile": true,
    "monitored": true,
    "absoluteEpisodeNumber": 0,
    "sceneAbsoluteEpisodeNumber": 0,
    "sceneEpisodeNumber": 0,
    "sceneSeasonNumber": 0,
    "unverifiedSceneNumbering": true,
    "series": {
      "id": 0,
      "title": "string",
      "alternateTitles": [
        {
          "title": "string",
          "seasonNumber": 0,
          "sceneSeasonNumber": 0,
          "sceneOrigin": "string",
          "comment": "string"
        }
      ],
      "sortTitle": "string",
      "status": "continuing",
      "profileName": "string",
      "overview": "string",
      "nextAiring": "1970-01-01T00:00:00Z",
      "previousAiring": "1970-01-01T00:00:00Z",
      "network": "string",
      "airTime": "string",
      "images": [
        {
          "coverType": "unknown",
          "url": "string",
          "remoteUrl": "string"
        }
      ],
      "language": {
        "id": 0,
        "name": "string"
      },
      "originalLanguage": {
        "id": 0,
        "name": "string"
      },
      "remotePoster": "string",
      "seasonType": "string",
      "seasons": [
        {
          "seasonNumber": 0,
          "monitored": true,
          "title": "string",
          "statistics": {
            "nextAiring": "1970-01-01T00:00:00Z",
            "previousAiring": "1970-01-01T00:00:00Z",
            "episodeFileCount": 0,
            "episodeCount": 0,
            "totalEpisodeCount": 0,
            "sizeOnDisk": 0,
            "releaseGroups": [
              "string"
            ]
          },
          "images": [
            {
              "coverType": "unknown",
              "url": "string",
              "remoteUrl": "string"
            }
          ]
        }
      ],
      "seasonTypes": [
        {
          "name": "string",
          "type": "string",
          "seasonNumbers": [
            0
          ],
          "episodeCount": 0
        }
      ],
      "translations": [
        {
          "language": {
            "id": 0,
            "name": "string"
          },
          "title": "string",
          "overview": "string"
        }
      ],
      "year": 0,
      "path": "string",
      "pendingPath": "string",
      "qualityProfileId": 0,
      "seasonFolder": true,
      "monitored": true,
      "monitorNewItems": "all",
      "useSceneNumbering": true,
      "runtime": 0,
      "tvdbId": 0,
      "tvRageId": 0,
      "tvMazeId": 0,
      "tmdbId": 0,
      "firstAired": "1970-01-01T00:00:00Z",
      "lastAired": "1970-01-01T00:00:00Z",
      "seriesType": "standard",
      "cleanTitle": "string",
      "originalTitle": "string",
      "cleanOriginalTitle": "string",
      "imdbId": "string",
      "titleSlug": "string",
      "rootFolderPath": "string",
      "folder": "string",
      "folders": [
        {
          "language": {
            "id": 0,
            "name": "string"
          },
          "folder": "string"
        }
      ],
      "certification": "string",
      "genres": [
        "string"
      ],
      "tags": [
        0
      ],
      "added": "1970-01-01T00:00:00Z",
      "addOptions": {
        "ignoreEpisodesWithFiles": true,
        "ignoreEpisodesWithoutFiles": true,
        "monitor": "unknown",
        "searchForMissingEpisodes": true,
        "searchForCutoffUnmetEpisodes": true
      },
      "ratings": {
        "votes": 0,
        "value": 0
      },
      "statistics": {
        "seasonCount": 0,
        "episodeFileCount": 0,
        "episodeCount": 0,
        "totalEpisodeCount": 0,
        "sizeOnDisk": 0,
        "releaseGroups": [
          "string"
        ]
      },
      "episodesChanged": true
    },
    "images": [
      {
        "coverType": "unknown",
        "url": "string",
        "remoteUrl": "string"
      }
    ]
  }'
```

`PUT /api/v3/episode/{id}`

> Body parameter

```json
{
  "id": 0,
  "seriesId": 0,
  "tvdbId": 0,
  "episodeFileId": 0,
  "seasonNumber": 0,
  "episodeNumber": 0,
  "title": "string",
  "airDate": "string",
  "airDateUtc": "1970-01-01T00:00:00Z",
  "lastSearchTime": "1970-01-01T00:00:00Z",
  "runtime": 0,
  "finaleType": "string",
  "overview": "string",
  "episodeFile": {
    "id": 0,
    "seriesId": 0,
    "seasonNumber": 0,
    "relativePath": "string",
    "path": "string",
    "size": 0,
    "dateAdded": "1970-01-01T00:00:00Z",
    "sceneName": "string",
    "releaseGroup": "string",
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
        "resolution": 0
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
                    "hint": "string"
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
    "releaseType": "unknown",
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
    "qualityCutoffNotMet": true
  },
  "hasFile": true,
  "monitored": true,
  "absoluteEpisodeNumber": 0,
  "sceneAbsoluteEpisodeNumber": 0,
  "sceneEpisodeNumber": 0,
  "sceneSeasonNumber": 0,
  "unverifiedSceneNumbering": true,
  "series": {
    "id": 0,
    "title": "string",
    "alternateTitles": [
      {
        "title": "string",
        "seasonNumber": 0,
        "sceneSeasonNumber": 0,
        "sceneOrigin": "string",
        "comment": "string"
      }
    ],
    "sortTitle": "string",
    "status": "continuing",
    "profileName": "string",
    "overview": "string",
    "nextAiring": "1970-01-01T00:00:00Z",
    "previousAiring": "1970-01-01T00:00:00Z",
    "network": "string",
    "airTime": "string",
    "images": [
      {
        "coverType": "unknown",
        "url": "string",
        "remoteUrl": "string"
      }
    ],
    "language": {
      "id": 0,
      "name": "string"
    },
    "originalLanguage": {
      "id": 0,
      "name": "string"
    },
    "remotePoster": "string",
    "seasonType": "string",
    "seasons": [
      {
        "seasonNumber": 0,
        "monitored": true,
        "title": "string",
        "statistics": {
          "nextAiring": "1970-01-01T00:00:00Z",
          "previousAiring": "1970-01-01T00:00:00Z",
          "episodeFileCount": 0,
          "episodeCount": 0,
          "totalEpisodeCount": 0,
          "sizeOnDisk": 0,
          "releaseGroups": [
            "string"
          ]
        },
        "images": [
          {
            "coverType": "unknown",
            "url": "string",
            "remoteUrl": "string"
          }
        ]
      }
    ],
    "seasonTypes": [
      {
        "name": "string",
        "type": "string",
        "seasonNumbers": [
          0
        ],
        "episodeCount": 0
      }
    ],
    "translations": [
      {
        "language": {
          "id": 0,
          "name": "string"
        },
        "title": "string",
        "overview": "string"
      }
    ],
    "year": 0,
    "path": "string",
    "pendingPath": "string",
    "qualityProfileId": 0,
    "seasonFolder": true,
    "monitored": true,
    "monitorNewItems": "all",
    "useSceneNumbering": true,
    "runtime": 0,
    "tvdbId": 0,
    "tvRageId": 0,
    "tvMazeId": 0,
    "tmdbId": 0,
    "firstAired": "1970-01-01T00:00:00Z",
    "lastAired": "1970-01-01T00:00:00Z",
    "seriesType": "standard",
    "cleanTitle": "string",
    "originalTitle": "string",
    "cleanOriginalTitle": "string",
    "imdbId": "string",
    "titleSlug": "string",
    "rootFolderPath": "string",
    "folder": "string",
    "folders": [
      {
        "language": {
          "id": 0,
          "name": "string"
        },
        "folder": "string"
      }
    ],
    "certification": "string",
    "genres": [
      "string"
    ],
    "tags": [
      0
    ],
    "added": "1970-01-01T00:00:00Z",
    "addOptions": {
      "ignoreEpisodesWithFiles": true,
      "ignoreEpisodesWithoutFiles": true,
      "monitor": "unknown",
      "searchForMissingEpisodes": true,
      "searchForCutoffUnmetEpisodes": true
    },
    "ratings": {
      "votes": 0,
      "value": 0
    },
    "statistics": {
      "seasonCount": 0,
      "episodeFileCount": 0,
      "episodeCount": 0,
      "totalEpisodeCount": 0,
      "sizeOnDisk": 0,
      "releaseGroups": [
        "string"
      ]
    },
    "episodesChanged": true
  },
  "images": [
    {
      "coverType": "unknown",
      "url": "string",
      "remoteUrl": "string"
    }
  ]
}
```

<h3 id="putapiv3episodeid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|none|
|body|body|[EpisodeResource](#schemaepisoderesource)|false|none|
|» id|body|integer(int32)|false|none|
|» seriesId|body|integer(int32)|false|none|
|» tvdbId|body|integer(int32)|false|none|
|» episodeFileId|body|integer(int32)|false|none|
|» seasonNumber|body|integer(int32)|false|none|
|» episodeNumber|body|integer(int32)|false|none|
|» title|body|string \| null|false|none|
|» airDate|body|string \| null|false|none|
|» airDateUtc|body|string(date-time) \| null|false|none|
|» lastSearchTime|body|string(date-time) \| null|false|none|
|» runtime|body|integer(int32)|false|none|
|» finaleType|body|string \| null|false|none|
|» overview|body|string \| null|false|none|
|» episodeFile|body|[EpisodeFileResource](#schemaepisodefileresource)|false|none|
|» hasFile|body|boolean|false|none|
|» monitored|body|boolean|false|none|
|» absoluteEpisodeNumber|body|integer(int32) \| null|false|none|
|» sceneAbsoluteEpisodeNumber|body|integer(int32) \| null|false|none|
|» sceneEpisodeNumber|body|integer(int32) \| null|false|none|
|» sceneSeasonNumber|body|integer(int32) \| null|false|none|
|» unverifiedSceneNumbering|body|boolean|false|none|
|» series|body|[SeriesResource](#schemaseriesresource)|false|none|
|» images|body|[[MediaCover](#schemamediacover)]|false|none|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "seriesId": 0,
  "tvdbId": 0,
  "episodeFileId": 0,
  "seasonNumber": 0,
  "episodeNumber": 0,
  "title": "string",
  "airDate": "string",
  "airDateUtc": "1970-01-01T00:00:00Z",
  "lastSearchTime": "1970-01-01T00:00:00Z",
  "runtime": 0,
  "finaleType": "string",
  "overview": "string",
  "episodeFile": {
    "id": 0,
    "seriesId": 0,
    "seasonNumber": 0,
    "relativePath": "string",
    "path": "string",
    "size": 0,
    "dateAdded": "1970-01-01T00:00:00Z",
    "sceneName": "string",
    "releaseGroup": "string",
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
        "resolution": 0
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
                    "hint": "string"
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
    "releaseType": "unknown",
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
    "qualityCutoffNotMet": true
  },
  "hasFile": true,
  "monitored": true,
  "absoluteEpisodeNumber": 0,
  "sceneAbsoluteEpisodeNumber": 0,
  "sceneEpisodeNumber": 0,
  "sceneSeasonNumber": 0,
  "unverifiedSceneNumbering": true,
  "series": {
    "id": 0,
    "title": "string",
    "alternateTitles": [
      {
        "title": "string",
        "seasonNumber": 0,
        "sceneSeasonNumber": 0,
        "sceneOrigin": "string",
        "comment": "string"
      }
    ],
    "sortTitle": "string",
    "status": "continuing",
    "ended": true,
    "profileName": "string",
    "overview": "string",
    "nextAiring": "1970-01-01T00:00:00Z",
    "previousAiring": "1970-01-01T00:00:00Z",
    "network": "string",
    "airTime": "string",
    "images": [
      {
        "coverType": "unknown",
        "url": "string",
        "remoteUrl": "string"
      }
    ],
    "language": {
      "id": 0,
      "name": "string"
    },
    "originalLanguage": {
      "id": 0,
      "name": "string"
    },
    "remotePoster": "string",
    "seasonType": "string",
    "seasons": [
      {
        "seasonNumber": 0,
        "monitored": true,
        "title": "string",
        "statistics": {
          "nextAiring": "1970-01-01T00:00:00Z",
          "previousAiring": "1970-01-01T00:00:00Z",
          "episodeFileCount": 0,
          "episodeCount": 0,
          "totalEpisodeCount": 0,
          "sizeOnDisk": 0,
          "releaseGroups": [
            "string"
          ],
          "percentOfEpisodes": 0
        },
        "images": [
          {
            "coverType": "unknown",
            "url": "string",
            "remoteUrl": "string"
          }
        ]
      }
    ],
    "seasonTypes": [
      {
        "name": "string",
        "type": "string",
        "seasonNumbers": [
          0
        ],
        "episodeCount": 0
      }
    ],
    "translations": [
      {
        "language": {
          "id": 0,
          "name": "string"
        },
        "title": "string",
        "overview": "string"
      }
    ],
    "year": 0,
    "path": "string",
    "pendingPath": "string",
    "qualityProfileId": 0,
    "seasonFolder": true,
    "monitored": true,
    "monitorNewItems": "all",
    "useSceneNumbering": true,
    "runtime": 0,
    "tvdbId": 0,
    "tvRageId": 0,
    "tvMazeId": 0,
    "tmdbId": 0,
    "firstAired": "1970-01-01T00:00:00Z",
    "lastAired": "1970-01-01T00:00:00Z",
    "seriesType": "standard",
    "cleanTitle": "string",
    "originalTitle": "string",
    "cleanOriginalTitle": "string",
    "imdbId": "string",
    "titleSlug": "string",
    "rootFolderPath": "string",
    "folder": "string",
    "folders": [
      {
        "language": {
          "id": 0,
          "name": "string"
        },
        "folder": "string"
      }
    ],
    "certification": "string",
    "genres": [
      "string"
    ],
    "tags": [
      0
    ],
    "added": "1970-01-01T00:00:00Z",
    "addOptions": {
      "ignoreEpisodesWithFiles": true,
      "ignoreEpisodesWithoutFiles": true,
      "monitor": "unknown",
      "searchForMissingEpisodes": true,
      "searchForCutoffUnmetEpisodes": true
    },
    "ratings": {
      "votes": 0,
      "value": 0
    },
    "statistics": {
      "seasonCount": 0,
      "episodeFileCount": 0,
      "episodeCount": 0,
      "totalEpisodeCount": 0,
      "sizeOnDisk": 0,
      "releaseGroups": [
        "string"
      ],
      "percentOfEpisodes": 0
    },
    "episodesChanged": true,
    "languageProfileId": 0
  },
  "images": [
    {
      "coverType": "unknown",
      "url": "string",
      "remoteUrl": "string"
    }
  ]
}
```

<h3 id="putapiv3episodeid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[EpisodeResource](#schemaepisoderesource)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## put/api/v3/episode/monitor

> Code samples

```bash
curl http://localhost:8989/api/v3/episode/monitor \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H "X-Api-Key: ${API_KEY}" \
  -d '{
    "episodeIds": [
      0
    ],
    "monitored": true
  }'
```

`PUT /api/v3/episode/monitor`

> Body parameter

```json
{
  "episodeIds": [
    0
  ],
  "monitored": true
}
```

<h3 id="putapiv3episodemonitor-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|includeImages|query|boolean|false|none|
|body|body|[EpisodesMonitoredResource](#schemaepisodesmonitoredresource)|false|none|
|» episodeIds|body|[integer(int32)]|false|none|
|» monitored|body|boolean|false|none|

<h3 id="putapiv3episodemonitor-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

<h1 id="sonarr-episodefile">EpisodeFile</h1>

## get/api/v3/episodefile

> Code samples

```bash
curl http://localhost:8989/api/v3/episodefile \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /api/v3/episodefile`

<h3 id="getapiv3episodefile-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|seriesId|query|integer(int32)|false|none|
|episodeFileIds|query|[integer(int32)]|false|none|

> Example responses

> 200 Response

```json
[
  {
    "id": 0,
    "seriesId": 0,
    "seasonNumber": 0,
    "relativePath": "string",
    "path": "string",
    "size": 0,
    "dateAdded": "1970-01-01T00:00:00Z",
    "sceneName": "string",
    "releaseGroup": "string",
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
        "resolution": 0
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
                    "hint": "string"
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
    "releaseType": "unknown",
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
    "qualityCutoffNotMet": true
  }
]
```

<h3 id="getapiv3episodefile-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="getapiv3episodefile-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[EpisodeFileResource](#schemaepisodefileresource)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## get/api/v3/episodefile/{id}

> Code samples

```bash
curl http://localhost:8989/api/v3/episodefile/0 \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /api/v3/episodefile/{id}`

<h3 id="getapiv3episodefileid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|none|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "seriesId": 0,
  "seasonNumber": 0,
  "relativePath": "string",
  "path": "string",
  "size": 0,
  "dateAdded": "1970-01-01T00:00:00Z",
  "sceneName": "string",
  "releaseGroup": "string",
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
      "resolution": 0
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
                  "hint": "string"
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
  "releaseType": "unknown",
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
  "qualityCutoffNotMet": true
}
```

<h3 id="getapiv3episodefileid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[EpisodeFileResource](#schemaepisodefileresource)|
|404|Not Found|Not Found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## put/api/v3/episodefile/{id}

> Code samples

```bash
curl http://localhost:8989/api/v3/episodefile/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}" \
  -d '{
    "id": 0,
    "seriesId": 0,
    "seasonNumber": 0,
    "relativePath": "string",
    "path": "string",
    "size": 0,
    "dateAdded": "1970-01-01T00:00:00Z",
    "sceneName": "string",
    "releaseGroup": "string",
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
        "resolution": 0
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
                    "hint": "string"
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
    "releaseType": "unknown",
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
    "qualityCutoffNotMet": true
  }'
```

`PUT /api/v3/episodefile/{id}`

> Body parameter

```json
{
  "id": 0,
  "seriesId": 0,
  "seasonNumber": 0,
  "relativePath": "string",
  "path": "string",
  "size": 0,
  "dateAdded": "1970-01-01T00:00:00Z",
  "sceneName": "string",
  "releaseGroup": "string",
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
      "resolution": 0
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
                  "hint": "string"
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
  "releaseType": "unknown",
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
  "qualityCutoffNotMet": true
}
```

<h3 id="putapiv3episodefileid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|body|body|[EpisodeFileResource](#schemaepisodefileresource)|false|none|
|» id|body|integer(int32)|false|none|
|» seriesId|body|integer(int32)|false|none|
|» seasonNumber|body|integer(int32)|false|none|
|» relativePath|body|string \| null|false|none|
|» path|body|string \| null|false|none|
|» size|body|integer(int64)|false|none|
|» dateAdded|body|string(date-time)|false|none|
|» sceneName|body|string \| null|false|none|
|» releaseGroup|body|string \| null|false|none|
|» languages|body|[[Language](#schemalanguage)]|false|none|
|» quality|body|[QualityModel](#schemaqualitymodel)|false|none|
|» customFormats|body|[[CustomFormatResource](#schemacustomformatresource)]|false|none|
|» customFormatScore|body|integer(int32)|false|none|
|» indexerFlags|body|integer(int32) \| null|false|none|
|» releaseType|body|[ReleaseType](#schemareleasetype)|false|none|
|» mediaInfo|body|[MediaInfoResource](#schemamediainforesource)|false|none|
|» qualityCutoffNotMet|body|boolean|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» releaseType|unknown|
|» releaseType|singleEpisode|
|» releaseType|multiEpisode|
|» releaseType|seasonPack|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "seriesId": 0,
  "seasonNumber": 0,
  "relativePath": "string",
  "path": "string",
  "size": 0,
  "dateAdded": "1970-01-01T00:00:00Z",
  "sceneName": "string",
  "releaseGroup": "string",
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
      "resolution": 0
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
                  "hint": "string"
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
  "releaseType": "unknown",
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
  "qualityCutoffNotMet": true
}
```

<h3 id="putapiv3episodefileid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[EpisodeFileResource](#schemaepisodefileresource)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## delete/api/v3/episodefile/{id}

> Code samples

```bash
curl http://localhost:8989/api/v3/episodefile/0 \
  -X DELETE \
  -H "X-Api-Key: ${API_KEY}"
```

`DELETE /api/v3/episodefile/{id}`

<h3 id="deleteapiv3episodefileid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|none|

<h3 id="deleteapiv3episodefileid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## put/api/v3/episodefile/editor

> Code samples

```bash
curl http://localhost:8989/api/v3/episodefile/editor \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H "X-Api-Key: ${API_KEY}" \
  -d '{
    "episodeFileIds": [
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
        "resolution": 0
      },
      "revision": {
        "version": 0,
        "real": 0,
        "isRepack": true
      }
    },
    "sceneName": "string",
    "releaseGroup": "string"
  }'
```

`PUT /api/v3/episodefile/editor`

<aside class="warning">
This operation is deprecated
</aside>

> Body parameter

```json
{
  "episodeFileIds": [
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
      "resolution": 0
    },
    "revision": {
      "version": 0,
      "real": 0,
      "isRepack": true
    }
  },
  "sceneName": "string",
  "releaseGroup": "string"
}
```

<h3 id="putapiv3episodefileeditor-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[EpisodeFileListResource](#schemaepisodefilelistresource)|false|none|
|» episodeFileIds|body|[integer(int32)]|false|none|
|» languages|body|[[Language](#schemalanguage)]|false|none|
|» quality|body|[QualityModel](#schemaqualitymodel)|false|none|
|» sceneName|body|string \| null|false|none|
|» releaseGroup|body|string \| null|false|none|

<h3 id="putapiv3episodefileeditor-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## put/api/v3/episodefile/bulk

> Code samples

```bash
curl http://localhost:8989/api/v3/episodefile/bulk \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H "X-Api-Key: ${API_KEY}" \
  -d '[
    {
      "id": 0,
      "seriesId": 0,
      "seasonNumber": 0,
      "relativePath": "string",
      "path": "string",
      "size": 0,
      "dateAdded": "1970-01-01T00:00:00Z",
      "sceneName": "string",
      "releaseGroup": "string",
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
          "resolution": 0
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
                      "hint": "string"
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
      "releaseType": "unknown",
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
      "qualityCutoffNotMet": true
    }
  ]'
```

`PUT /api/v3/episodefile/bulk`

> Body parameter

```json
[
  {
    "id": 0,
    "seriesId": 0,
    "seasonNumber": 0,
    "relativePath": "string",
    "path": "string",
    "size": 0,
    "dateAdded": "1970-01-01T00:00:00Z",
    "sceneName": "string",
    "releaseGroup": "string",
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
        "resolution": 0
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
                    "hint": "string"
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
    "releaseType": "unknown",
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
    "qualityCutoffNotMet": true
  }
]
```

<h3 id="putapiv3episodefilebulk-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[[EpisodeFileResource](#schemaepisodefileresource)]|false|none|

<h3 id="putapiv3episodefilebulk-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## delete/api/v3/episodefile/bulk

> Code samples

```bash
curl http://localhost:8989/api/v3/episodefile/bulk \
  -X DELETE \
  -H 'Content-Type: application/json' \
  -H "X-Api-Key: ${API_KEY}" \
  -d '{
    "episodeFileIds": [
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
        "resolution": 0
      },
      "revision": {
        "version": 0,
        "real": 0,
        "isRepack": true
      }
    },
    "sceneName": "string",
    "releaseGroup": "string"
  }'
```

`DELETE /api/v3/episodefile/bulk`

> Body parameter

```json
{
  "episodeFileIds": [
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
      "resolution": 0
    },
    "revision": {
      "version": 0,
      "real": 0,
      "isRepack": true
    }
  },
  "sceneName": "string",
  "releaseGroup": "string"
}
```

<h3 id="deleteapiv3episodefilebulk-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[EpisodeFileListResource](#schemaepisodefilelistresource)|false|none|
|» episodeFileIds|body|[integer(int32)]|false|none|
|» languages|body|[[Language](#schemalanguage)]|false|none|
|» quality|body|[QualityModel](#schemaqualitymodel)|false|none|
|» sceneName|body|string \| null|false|none|
|» releaseGroup|body|string \| null|false|none|

<h3 id="deleteapiv3episodefilebulk-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

<h1 id="sonarr-filesystem">FileSystem</h1>

## get/api/v3/filesystem

> Code samples

```bash
curl http://localhost:8989/api/v3/filesystem \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /api/v3/filesystem`

<h3 id="getapiv3filesystem-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|path|query|string|false|none|
|includeFiles|query|boolean|false|none|
|allowFoldersWithoutTrailingSlashes|query|boolean|false|none|

<h3 id="getapiv3filesystem-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## get/api/v3/filesystem/type

> Code samples

```bash
curl http://localhost:8989/api/v3/filesystem/type \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /api/v3/filesystem/type`

<h3 id="getapiv3filesystemtype-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|path|query|string|false|none|

<h3 id="getapiv3filesystemtype-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## get/api/v3/filesystem/mediafiles

> Code samples

```bash
curl http://localhost:8989/api/v3/filesystem/mediafiles \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /api/v3/filesystem/mediafiles`

<h3 id="getapiv3filesystemmediafiles-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|path|query|string|false|none|

<h3 id="getapiv3filesystemmediafiles-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

<h1 id="sonarr-health">Health</h1>

## get/api/v3/health

> Code samples

```bash
curl http://localhost:8989/api/v3/health \
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

<h1 id="sonarr-history">History</h1>

## get/api/v3/history

> Code samples

```bash
curl http://localhost:8989/api/v3/history \
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
|includeSeries|query|boolean|false|none|
|includeEpisode|query|boolean|false|none|
|eventType|query|[integer(int32)]|false|none|
|episodeId|query|integer(int32)|false|none|
|downloadId|query|string|false|none|
|seriesIds|query|[integer(int32)]|false|none|
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
      "episodeId": 0,
      "seriesId": 0,
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
          "resolution": 0
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
                      "hint": "string"
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
      "episode": {
        "id": 0,
        "seriesId": 0,
        "tvdbId": 0,
        "episodeFileId": 0,
        "seasonNumber": 0,
        "episodeNumber": 0,
        "title": "string",
        "airDate": "string",
        "airDateUtc": "1970-01-01T00:00:00Z",
        "lastSearchTime": "1970-01-01T00:00:00Z",
        "runtime": 0,
        "finaleType": "string",
        "overview": "string",
        "episodeFile": {
          "id": 0,
          "seriesId": 0,
          "seasonNumber": 0,
          "relativePath": "string",
          "path": "string",
          "size": 0,
          "dateAdded": "1970-01-01T00:00:00Z",
          "sceneName": "string",
          "releaseGroup": "string",
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
              "resolution": 0
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
                          "hint": "string"
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
          "releaseType": "unknown",
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
          "qualityCutoffNotMet": true
        },
        "hasFile": true,
        "monitored": true,
        "absoluteEpisodeNumber": 0,
        "sceneAbsoluteEpisodeNumber": 0,
        "sceneEpisodeNumber": 0,
        "sceneSeasonNumber": 0,
        "unverifiedSceneNumbering": true,
        "series": {
          "id": 0,
          "title": "string",
          "alternateTitles": [
            {
              "title": "string",
              "seasonNumber": 0,
              "sceneSeasonNumber": 0,
              "sceneOrigin": "string",
              "comment": "string"
            }
          ],
          "sortTitle": "string",
          "status": "continuing",
          "ended": true,
          "profileName": "string",
          "overview": "string",
          "nextAiring": "1970-01-01T00:00:00Z",
          "previousAiring": "1970-01-01T00:00:00Z",
          "network": "string",
          "airTime": "string",
          "images": [
            {
              "coverType": "unknown",
              "url": "string",
              "remoteUrl": "string"
            }
          ],
          "language": {
            "id": 0,
            "name": "string"
          },
          "originalLanguage": {
            "id": 0,
            "name": "string"
          },
          "remotePoster": "string",
          "seasonType": "string",
          "seasons": [
            {
              "seasonNumber": 0,
              "monitored": true,
              "title": "string",
              "statistics": {
                "nextAiring": "1970-01-01T00:00:00Z",
                "previousAiring": "1970-01-01T00:00:00Z",
                "episodeFileCount": 0,
                "episodeCount": 0,
                "totalEpisodeCount": 0,
                "sizeOnDisk": 0,
                "releaseGroups": [
                  "string"
                ],
                "percentOfEpisodes": 0
              },
              "images": [
                {
                  "coverType": "unknown",
                  "url": "string",
                  "remoteUrl": "string"
                }
              ]
            }
          ],
          "seasonTypes": [
            {
              "name": "string",
              "type": "string",
              "seasonNumbers": [
                0
              ],
              "episodeCount": 0
            }
          ],
          "translations": [
            {
              "language": {
                "id": 0,
                "name": "string"
              },
              "title": "string",
              "overview": "string"
            }
          ],
          "year": 0,
          "path": "string",
          "pendingPath": "string",
          "qualityProfileId": 0,
          "seasonFolder": true,
          "monitored": true,
          "monitorNewItems": "all",
          "useSceneNumbering": true,
          "runtime": 0,
          "tvdbId": 0,
          "tvRageId": 0,
          "tvMazeId": 0,
          "tmdbId": 0,
          "firstAired": "1970-01-01T00:00:00Z",
          "lastAired": "1970-01-01T00:00:00Z",
          "seriesType": "standard",
          "cleanTitle": "string",
          "originalTitle": "string",
          "cleanOriginalTitle": "string",
          "imdbId": "string",
          "titleSlug": "string",
          "rootFolderPath": "string",
          "folder": "string",
          "folders": [
            {
              "language": {
                "id": 0,
                "name": "string"
              },
              "folder": "string"
            }
          ],
          "certification": "string",
          "genres": [
            "string"
          ],
          "tags": [
            0
          ],
          "added": "1970-01-01T00:00:00Z",
          "addOptions": {
            "ignoreEpisodesWithFiles": true,
            "ignoreEpisodesWithoutFiles": true,
            "monitor": "unknown",
            "searchForMissingEpisodes": true,
            "searchForCutoffUnmetEpisodes": true
          },
          "ratings": {
            "votes": 0,
            "value": 0
          },
          "statistics": {
            "seasonCount": 0,
            "episodeFileCount": 0,
            "episodeCount": 0,
            "totalEpisodeCount": 0,
            "sizeOnDisk": 0,
            "releaseGroups": [
              "string"
            ],
            "percentOfEpisodes": 0
          },
          "episodesChanged": true,
          "languageProfileId": 0
        },
        "images": [
          {
            "coverType": "unknown",
            "url": "string",
            "remoteUrl": "string"
          }
        ]
      },
      "series": {
        "id": 0,
        "title": "string",
        "alternateTitles": [
          {
            "title": "string",
            "seasonNumber": 0,
            "sceneSeasonNumber": 0,
            "sceneOrigin": "string",
            "comment": "string"
          }
        ],
        "sortTitle": "string",
        "status": "continuing",
        "ended": true,
        "profileName": "string",
        "overview": "string",
        "nextAiring": "1970-01-01T00:00:00Z",
        "previousAiring": "1970-01-01T00:00:00Z",
        "network": "string",
        "airTime": "string",
        "images": [
          {
            "coverType": "unknown",
            "url": "string",
            "remoteUrl": "string"
          }
        ],
        "language": {
          "id": 0,
          "name": "string"
        },
        "originalLanguage": {
          "id": 0,
          "name": "string"
        },
        "remotePoster": "string",
        "seasonType": "string",
        "seasons": [
          {
            "seasonNumber": 0,
            "monitored": true,
            "title": "string",
            "statistics": {
              "nextAiring": "1970-01-01T00:00:00Z",
              "previousAiring": "1970-01-01T00:00:00Z",
              "episodeFileCount": 0,
              "episodeCount": 0,
              "totalEpisodeCount": 0,
              "sizeOnDisk": 0,
              "releaseGroups": [
                "string"
              ],
              "percentOfEpisodes": 0
            },
            "images": [
              {
                "coverType": "unknown",
                "url": "string",
                "remoteUrl": "string"
              }
            ]
          }
        ],
        "seasonTypes": [
          {
            "name": "string",
            "type": "string",
            "seasonNumbers": [
              0
            ],
            "episodeCount": 0
          }
        ],
        "translations": [
          {
            "language": {
              "id": 0,
              "name": "string"
            },
            "title": "string",
            "overview": "string"
          }
        ],
        "year": 0,
        "path": "string",
        "pendingPath": "string",
        "qualityProfileId": 0,
        "seasonFolder": true,
        "monitored": true,
        "monitorNewItems": "all",
        "useSceneNumbering": true,
        "runtime": 0,
        "tvdbId": 0,
        "tvRageId": 0,
        "tvMazeId": 0,
        "tmdbId": 0,
        "firstAired": "1970-01-01T00:00:00Z",
        "lastAired": "1970-01-01T00:00:00Z",
        "seriesType": "standard",
        "cleanTitle": "string",
        "originalTitle": "string",
        "cleanOriginalTitle": "string",
        "imdbId": "string",
        "titleSlug": "string",
        "rootFolderPath": "string",
        "folder": "string",
        "folders": [
          {
            "language": {
              "id": 0,
              "name": "string"
            },
            "folder": "string"
          }
        ],
        "certification": "string",
        "genres": [
          "string"
        ],
        "tags": [
          0
        ],
        "added": "1970-01-01T00:00:00Z",
        "addOptions": {
          "ignoreEpisodesWithFiles": true,
          "ignoreEpisodesWithoutFiles": true,
          "monitor": "unknown",
          "searchForMissingEpisodes": true,
          "searchForCutoffUnmetEpisodes": true
        },
        "ratings": {
          "votes": 0,
          "value": 0
        },
        "statistics": {
          "seasonCount": 0,
          "episodeFileCount": 0,
          "episodeCount": 0,
          "totalEpisodeCount": 0,
          "sizeOnDisk": 0,
          "releaseGroups": [
            "string"
          ],
          "percentOfEpisodes": 0
        },
        "episodesChanged": true,
        "languageProfileId": 0
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
curl http://localhost:8989/api/v3/history/since \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /api/v3/history/since`

<h3 id="getapiv3historysince-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|date|query|string(date-time)|false|none|
|eventType|query|[EpisodeHistoryEventType](#schemaepisodehistoryeventtype)|false|none|
|includeSeries|query|boolean|false|none|
|includeEpisode|query|boolean|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|eventType|unknown|
|eventType|grabbed|
|eventType|seriesFolderImported|
|eventType|downloadFolderImported|
|eventType|downloadFailed|
|eventType|episodeFileDeleted|
|eventType|episodeFileRenamed|
|eventType|downloadIgnored|

> Example responses

> 200 Response

```json
[
  {
    "id": 0,
    "episodeId": 0,
    "seriesId": 0,
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
        "resolution": 0
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
                    "hint": "string"
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
    "episode": {
      "id": 0,
      "seriesId": 0,
      "tvdbId": 0,
      "episodeFileId": 0,
      "seasonNumber": 0,
      "episodeNumber": 0,
      "title": "string",
      "airDate": "string",
      "airDateUtc": "1970-01-01T00:00:00Z",
      "lastSearchTime": "1970-01-01T00:00:00Z",
      "runtime": 0,
      "finaleType": "string",
      "overview": "string",
      "episodeFile": {
        "id": 0,
        "seriesId": 0,
        "seasonNumber": 0,
        "relativePath": "string",
        "path": "string",
        "size": 0,
        "dateAdded": "1970-01-01T00:00:00Z",
        "sceneName": "string",
        "releaseGroup": "string",
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
            "resolution": 0
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
                        "hint": "string"
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
        "releaseType": "unknown",
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
        "qualityCutoffNotMet": true
      },
      "hasFile": true,
      "monitored": true,
      "absoluteEpisodeNumber": 0,
      "sceneAbsoluteEpisodeNumber": 0,
      "sceneEpisodeNumber": 0,
      "sceneSeasonNumber": 0,
      "unverifiedSceneNumbering": true,
      "series": {
        "id": 0,
        "title": "string",
        "alternateTitles": [
          {
            "title": "string",
            "seasonNumber": 0,
            "sceneSeasonNumber": 0,
            "sceneOrigin": "string",
            "comment": "string"
          }
        ],
        "sortTitle": "string",
        "status": "continuing",
        "ended": true,
        "profileName": "string",
        "overview": "string",
        "nextAiring": "1970-01-01T00:00:00Z",
        "previousAiring": "1970-01-01T00:00:00Z",
        "network": "string",
        "airTime": "string",
        "images": [
          {
            "coverType": "unknown",
            "url": "string",
            "remoteUrl": "string"
          }
        ],
        "language": {
          "id": 0,
          "name": "string"
        },
        "originalLanguage": {
          "id": 0,
          "name": "string"
        },
        "remotePoster": "string",
        "seasonType": "string",
        "seasons": [
          {
            "seasonNumber": 0,
            "monitored": true,
            "title": "string",
            "statistics": {
              "nextAiring": "1970-01-01T00:00:00Z",
              "previousAiring": "1970-01-01T00:00:00Z",
              "episodeFileCount": 0,
              "episodeCount": 0,
              "totalEpisodeCount": 0,
              "sizeOnDisk": 0,
              "releaseGroups": [
                "string"
              ],
              "percentOfEpisodes": 0
            },
            "images": [
              {
                "coverType": "unknown",
                "url": "string",
                "remoteUrl": "string"
              }
            ]
          }
        ],
        "seasonTypes": [
          {
            "name": "string",
            "type": "string",
            "seasonNumbers": [
              0
            ],
            "episodeCount": 0
          }
        ],
        "translations": [
          {
            "language": {
              "id": 0,
              "name": "string"
            },
            "title": "string",
            "overview": "string"
          }
        ],
        "year": 0,
        "path": "string",
        "pendingPath": "string",
        "qualityProfileId": 0,
        "seasonFolder": true,
        "monitored": true,
        "monitorNewItems": "all",
        "useSceneNumbering": true,
        "runtime": 0,
        "tvdbId": 0,
        "tvRageId": 0,
        "tvMazeId": 0,
        "tmdbId": 0,
        "firstAired": "1970-01-01T00:00:00Z",
        "lastAired": "1970-01-01T00:00:00Z",
        "seriesType": "standard",
        "cleanTitle": "string",
        "originalTitle": "string",
        "cleanOriginalTitle": "string",
        "imdbId": "string",
        "titleSlug": "string",
        "rootFolderPath": "string",
        "folder": "string",
        "folders": [
          {
            "language": {
              "id": 0,
              "name": "string"
            },
            "folder": "string"
          }
        ],
        "certification": "string",
        "genres": [
          "string"
        ],
        "tags": [
          0
        ],
        "added": "1970-01-01T00:00:00Z",
        "addOptions": {
          "ignoreEpisodesWithFiles": true,
          "ignoreEpisodesWithoutFiles": true,
          "monitor": "unknown",
          "searchForMissingEpisodes": true,
          "searchForCutoffUnmetEpisodes": true
        },
        "ratings": {
          "votes": 0,
          "value": 0
        },
        "statistics": {
          "seasonCount": 0,
          "episodeFileCount": 0,
          "episodeCount": 0,
          "totalEpisodeCount": 0,
          "sizeOnDisk": 0,
          "releaseGroups": [
            "string"
          ],
          "percentOfEpisodes": 0
        },
        "episodesChanged": true,
        "languageProfileId": 0
      },
      "images": [
        {
          "coverType": "unknown",
          "url": "string",
          "remoteUrl": "string"
        }
      ]
    },
    "series": {
      "id": 0,
      "title": "string",
      "alternateTitles": [
        {
          "title": "string",
          "seasonNumber": 0,
          "sceneSeasonNumber": 0,
          "sceneOrigin": "string",
          "comment": "string"
        }
      ],
      "sortTitle": "string",
      "status": "continuing",
      "ended": true,
      "profileName": "string",
      "overview": "string",
      "nextAiring": "1970-01-01T00:00:00Z",
      "previousAiring": "1970-01-01T00:00:00Z",
      "network": "string",
      "airTime": "string",
      "images": [
        {
          "coverType": "unknown",
          "url": "string",
          "remoteUrl": "string"
        }
      ],
      "language": {
        "id": 0,
        "name": "string"
      },
      "originalLanguage": {
        "id": 0,
        "name": "string"
      },
      "remotePoster": "string",
      "seasonType": "string",
      "seasons": [
        {
          "seasonNumber": 0,
          "monitored": true,
          "title": "string",
          "statistics": {
            "nextAiring": "1970-01-01T00:00:00Z",
            "previousAiring": "1970-01-01T00:00:00Z",
            "episodeFileCount": 0,
            "episodeCount": 0,
            "totalEpisodeCount": 0,
            "sizeOnDisk": 0,
            "releaseGroups": [
              "string"
            ],
            "percentOfEpisodes": 0
          },
          "images": [
            {
              "coverType": "unknown",
              "url": "string",
              "remoteUrl": "string"
            }
          ]
        }
      ],
      "seasonTypes": [
        {
          "name": "string",
          "type": "string",
          "seasonNumbers": [
            0
          ],
          "episodeCount": 0
        }
      ],
      "translations": [
        {
          "language": {
            "id": 0,
            "name": "string"
          },
          "title": "string",
          "overview": "string"
        }
      ],
      "year": 0,
      "path": "string",
      "pendingPath": "string",
      "qualityProfileId": 0,
      "seasonFolder": true,
      "monitored": true,
      "monitorNewItems": "all",
      "useSceneNumbering": true,
      "runtime": 0,
      "tvdbId": 0,
      "tvRageId": 0,
      "tvMazeId": 0,
      "tmdbId": 0,
      "firstAired": "1970-01-01T00:00:00Z",
      "lastAired": "1970-01-01T00:00:00Z",
      "seriesType": "standard",
      "cleanTitle": "string",
      "originalTitle": "string",
      "cleanOriginalTitle": "string",
      "imdbId": "string",
      "titleSlug": "string",
      "rootFolderPath": "string",
      "folder": "string",
      "folders": [
        {
          "language": {
            "id": 0,
            "name": "string"
          },
          "folder": "string"
        }
      ],
      "certification": "string",
      "genres": [
        "string"
      ],
      "tags": [
        0
      ],
      "added": "1970-01-01T00:00:00Z",
      "addOptions": {
        "ignoreEpisodesWithFiles": true,
        "ignoreEpisodesWithoutFiles": true,
        "monitor": "unknown",
        "searchForMissingEpisodes": true,
        "searchForCutoffUnmetEpisodes": true
      },
      "ratings": {
        "votes": 0,
        "value": 0
      },
      "statistics": {
        "seasonCount": 0,
        "episodeFileCount": 0,
        "episodeCount": 0,
        "totalEpisodeCount": 0,
        "sizeOnDisk": 0,
        "releaseGroups": [
          "string"
        ],
        "percentOfEpisodes": 0
      },
      "episodesChanged": true,
      "languageProfileId": 0
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

## get/api/v3/history/series

> Code samples

```bash
curl http://localhost:8989/api/v3/history/series \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /api/v3/history/series`

<h3 id="getapiv3historyseries-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|seriesId|query|integer(int32)|false|none|
|seasonNumber|query|integer(int32)|false|none|
|eventType|query|[EpisodeHistoryEventType](#schemaepisodehistoryeventtype)|false|none|
|includeSeries|query|boolean|false|none|
|includeEpisode|query|boolean|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|eventType|unknown|
|eventType|grabbed|
|eventType|seriesFolderImported|
|eventType|downloadFolderImported|
|eventType|downloadFailed|
|eventType|episodeFileDeleted|
|eventType|episodeFileRenamed|
|eventType|downloadIgnored|

> Example responses

> 200 Response

```json
[
  {
    "id": 0,
    "episodeId": 0,
    "seriesId": 0,
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
        "resolution": 0
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
                    "hint": "string"
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
    "episode": {
      "id": 0,
      "seriesId": 0,
      "tvdbId": 0,
      "episodeFileId": 0,
      "seasonNumber": 0,
      "episodeNumber": 0,
      "title": "string",
      "airDate": "string",
      "airDateUtc": "1970-01-01T00:00:00Z",
      "lastSearchTime": "1970-01-01T00:00:00Z",
      "runtime": 0,
      "finaleType": "string",
      "overview": "string",
      "episodeFile": {
        "id": 0,
        "seriesId": 0,
        "seasonNumber": 0,
        "relativePath": "string",
        "path": "string",
        "size": 0,
        "dateAdded": "1970-01-01T00:00:00Z",
        "sceneName": "string",
        "releaseGroup": "string",
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
            "resolution": 0
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
                        "hint": "string"
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
        "releaseType": "unknown",
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
        "qualityCutoffNotMet": true
      },
      "hasFile": true,
      "monitored": true,
      "absoluteEpisodeNumber": 0,
      "sceneAbsoluteEpisodeNumber": 0,
      "sceneEpisodeNumber": 0,
      "sceneSeasonNumber": 0,
      "unverifiedSceneNumbering": true,
      "series": {
        "id": 0,
        "title": "string",
        "alternateTitles": [
          {
            "title": "string",
            "seasonNumber": 0,
            "sceneSeasonNumber": 0,
            "sceneOrigin": "string",
            "comment": "string"
          }
        ],
        "sortTitle": "string",
        "status": "continuing",
        "ended": true,
        "profileName": "string",
        "overview": "string",
        "nextAiring": "1970-01-01T00:00:00Z",
        "previousAiring": "1970-01-01T00:00:00Z",
        "network": "string",
        "airTime": "string",
        "images": [
          {
            "coverType": "unknown",
            "url": "string",
            "remoteUrl": "string"
          }
        ],
        "language": {
          "id": 0,
          "name": "string"
        },
        "originalLanguage": {
          "id": 0,
          "name": "string"
        },
        "remotePoster": "string",
        "seasonType": "string",
        "seasons": [
          {
            "seasonNumber": 0,
            "monitored": true,
            "title": "string",
            "statistics": {
              "nextAiring": "1970-01-01T00:00:00Z",
              "previousAiring": "1970-01-01T00:00:00Z",
              "episodeFileCount": 0,
              "episodeCount": 0,
              "totalEpisodeCount": 0,
              "sizeOnDisk": 0,
              "releaseGroups": [
                "string"
              ],
              "percentOfEpisodes": 0
            },
            "images": [
              {
                "coverType": "unknown",
                "url": "string",
                "remoteUrl": "string"
              }
            ]
          }
        ],
        "seasonTypes": [
          {
            "name": "string",
            "type": "string",
            "seasonNumbers": [
              0
            ],
            "episodeCount": 0
          }
        ],
        "translations": [
          {
            "language": {
              "id": 0,
              "name": "string"
            },
            "title": "string",
            "overview": "string"
          }
        ],
        "year": 0,
        "path": "string",
        "pendingPath": "string",
        "qualityProfileId": 0,
        "seasonFolder": true,
        "monitored": true,
        "monitorNewItems": "all",
        "useSceneNumbering": true,
        "runtime": 0,
        "tvdbId": 0,
        "tvRageId": 0,
        "tvMazeId": 0,
        "tmdbId": 0,
        "firstAired": "1970-01-01T00:00:00Z",
        "lastAired": "1970-01-01T00:00:00Z",
        "seriesType": "standard",
        "cleanTitle": "string",
        "originalTitle": "string",
        "cleanOriginalTitle": "string",
        "imdbId": "string",
        "titleSlug": "string",
        "rootFolderPath": "string",
        "folder": "string",
        "folders": [
          {
            "language": {
              "id": 0,
              "name": "string"
            },
            "folder": "string"
          }
        ],
        "certification": "string",
        "genres": [
          "string"
        ],
        "tags": [
          0
        ],
        "added": "1970-01-01T00:00:00Z",
        "addOptions": {
          "ignoreEpisodesWithFiles": true,
          "ignoreEpisodesWithoutFiles": true,
          "monitor": "unknown",
          "searchForMissingEpisodes": true,
          "searchForCutoffUnmetEpisodes": true
        },
        "ratings": {
          "votes": 0,
          "value": 0
        },
        "statistics": {
          "seasonCount": 0,
          "episodeFileCount": 0,
          "episodeCount": 0,
          "totalEpisodeCount": 0,
          "sizeOnDisk": 0,
          "releaseGroups": [
            "string"
          ],
          "percentOfEpisodes": 0
        },
        "episodesChanged": true,
        "languageProfileId": 0
      },
      "images": [
        {
          "coverType": "unknown",
          "url": "string",
          "remoteUrl": "string"
        }
      ]
    },
    "series": {
      "id": 0,
      "title": "string",
      "alternateTitles": [
        {
          "title": "string",
          "seasonNumber": 0,
          "sceneSeasonNumber": 0,
          "sceneOrigin": "string",
          "comment": "string"
        }
      ],
      "sortTitle": "string",
      "status": "continuing",
      "ended": true,
      "profileName": "string",
      "overview": "string",
      "nextAiring": "1970-01-01T00:00:00Z",
      "previousAiring": "1970-01-01T00:00:00Z",
      "network": "string",
      "airTime": "string",
      "images": [
        {
          "coverType": "unknown",
          "url": "string",
          "remoteUrl": "string"
        }
      ],
      "language": {
        "id": 0,
        "name": "string"
      },
      "originalLanguage": {
        "id": 0,
        "name": "string"
      },
      "remotePoster": "string",
      "seasonType": "string",
      "seasons": [
        {
          "seasonNumber": 0,
          "monitored": true,
          "title": "string",
          "statistics": {
            "nextAiring": "1970-01-01T00:00:00Z",
            "previousAiring": "1970-01-01T00:00:00Z",
            "episodeFileCount": 0,
            "episodeCount": 0,
            "totalEpisodeCount": 0,
            "sizeOnDisk": 0,
            "releaseGroups": [
              "string"
            ],
            "percentOfEpisodes": 0
          },
          "images": [
            {
              "coverType": "unknown",
              "url": "string",
              "remoteUrl": "string"
            }
          ]
        }
      ],
      "seasonTypes": [
        {
          "name": "string",
          "type": "string",
          "seasonNumbers": [
            0
          ],
          "episodeCount": 0
        }
      ],
      "translations": [
        {
          "language": {
            "id": 0,
            "name": "string"
          },
          "title": "string",
          "overview": "string"
        }
      ],
      "year": 0,
      "path": "string",
      "pendingPath": "string",
      "qualityProfileId": 0,
      "seasonFolder": true,
      "monitored": true,
      "monitorNewItems": "all",
      "useSceneNumbering": true,
      "runtime": 0,
      "tvdbId": 0,
      "tvRageId": 0,
      "tvMazeId": 0,
      "tmdbId": 0,
      "firstAired": "1970-01-01T00:00:00Z",
      "lastAired": "1970-01-01T00:00:00Z",
      "seriesType": "standard",
      "cleanTitle": "string",
      "originalTitle": "string",
      "cleanOriginalTitle": "string",
      "imdbId": "string",
      "titleSlug": "string",
      "rootFolderPath": "string",
      "folder": "string",
      "folders": [
        {
          "language": {
            "id": 0,
            "name": "string"
          },
          "folder": "string"
        }
      ],
      "certification": "string",
      "genres": [
        "string"
      ],
      "tags": [
        0
      ],
      "added": "1970-01-01T00:00:00Z",
      "addOptions": {
        "ignoreEpisodesWithFiles": true,
        "ignoreEpisodesWithoutFiles": true,
        "monitor": "unknown",
        "searchForMissingEpisodes": true,
        "searchForCutoffUnmetEpisodes": true
      },
      "ratings": {
        "votes": 0,
        "value": 0
      },
      "statistics": {
        "seasonCount": 0,
        "episodeFileCount": 0,
        "episodeCount": 0,
        "totalEpisodeCount": 0,
        "sizeOnDisk": 0,
        "releaseGroups": [
          "string"
        ],
        "percentOfEpisodes": 0
      },
      "episodesChanged": true,
      "languageProfileId": 0
    }
  }
]
```

<h3 id="getapiv3historyseries-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="getapiv3historyseries-responseschema">Response Schema</h3>

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
curl http://localhost:8989/api/v3/history/failed/0 \
  -X POST \
  -H "X-Api-Key: ${API_KEY}"
```

`POST /api/v3/history/failed/{id}`

<h3 id="postapiv3historyfailedid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|none|

<h3 id="postapiv3historyfailedid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

<h1 id="sonarr-hostconfig">HostConfig</h1>

## get/api/v3/config/host

> Code samples

```bash
curl http://localhost:8989/api/v3/config/host \
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
curl http://localhost:8989/api/v3/config/host/0 \
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
curl http://localhost:8989/api/v3/config/host/string \
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

<h3 id="putapiv3confighostid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[HostConfigResource](#schemahostconfigresource)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

<h1 id="sonarr-importlist">ImportList</h1>

## get/api/v3/importlist

> Code samples

```bash
curl http://localhost:8989/api/v3/importlist \
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
            "hint": "string"
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
    "enableAutomaticAdd": true,
    "searchForMissingEpisodes": true,
    "shouldMonitor": "unknown",
    "monitorNewItems": "all",
    "rootFolderPath": "string",
    "qualityProfileId": 0,
    "seriesType": "standard",
    "language": {
      "id": 0,
      "name": "string"
    },
    "seasonFolder": true,
    "listType": "program",
    "listOrder": 0,
    "minRefreshInterval": "string",
    "tagExisting": "none"
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
curl http://localhost:8989/api/v3/importlist \
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
            "hint": "string"
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
    "enableAutomaticAdd": true,
    "searchForMissingEpisodes": true,
    "shouldMonitor": "unknown",
    "monitorNewItems": "all",
    "rootFolderPath": "string",
    "qualityProfileId": 0,
    "seriesType": "standard",
    "language": {
      "id": 0,
      "name": "string"
    },
    "seasonFolder": true,
    "listType": "program",
    "listOrder": 0,
    "minRefreshInterval": "string",
    "tagExisting": "none"
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
          "hint": "string"
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
  "enableAutomaticAdd": true,
  "searchForMissingEpisodes": true,
  "shouldMonitor": "unknown",
  "monitorNewItems": "all",
  "rootFolderPath": "string",
  "qualityProfileId": 0,
  "seriesType": "standard",
  "language": {
    "id": 0,
    "name": "string"
  },
  "seasonFolder": true,
  "listType": "program",
  "listOrder": 0,
  "minRefreshInterval": "string",
  "tagExisting": "none"
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
|» enableAutomaticAdd|body|boolean|false|none|
|» searchForMissingEpisodes|body|boolean|false|none|
|» shouldMonitor|body|[MonitorTypes](#schemamonitortypes)|false|none|
|» monitorNewItems|body|[NewItemMonitorTypes](#schemanewitemmonitortypes)|false|none|
|» rootFolderPath|body|string \| null|false|none|
|» qualityProfileId|body|integer(int32)|false|none|
|» seriesType|body|[SeriesTypes](#schemaseriestypes)|false|none|
|» language|body|[Language](#schemalanguage)|false|none|
|» seasonFolder|body|boolean|false|none|
|» listType|body|[ImportListType](#schemaimportlisttype)|false|none|
|» listOrder|body|integer(int32)|false|none|
|» minRefreshInterval|body|string(date-span)|false|none|
|» tagExisting|body|[TagExistingType](#schematagexistingtype)|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» shouldMonitor|unknown|
|» shouldMonitor|all|
|» shouldMonitor|future|
|» shouldMonitor|missing|
|» shouldMonitor|existing|
|» shouldMonitor|firstSeason|
|» shouldMonitor|lastSeason|
|» shouldMonitor|latestSeason|
|» shouldMonitor|pilot|
|» shouldMonitor|recent|
|» shouldMonitor|monitorSpecials|
|» shouldMonitor|unmonitorSpecials|
|» shouldMonitor|none|
|» shouldMonitor|skip|
|» monitorNewItems|all|
|» monitorNewItems|none|
|» seriesType|standard|
|» seriesType|daily|
|» seriesType|anime|
|» listType|program|
|» listType|plex|
|» listType|trakt|
|» listType|simkl|
|» listType|other|
|» listType|advanced|
|» tagExisting|none|
|» tagExisting|add|
|» tagExisting|sync|

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
          "hint": "string"
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
  "enableAutomaticAdd": true,
  "searchForMissingEpisodes": true,
  "shouldMonitor": "unknown",
  "monitorNewItems": "all",
  "rootFolderPath": "string",
  "qualityProfileId": 0,
  "seriesType": "standard",
  "language": {
    "id": 0,
    "name": "string"
  },
  "seasonFolder": true,
  "listType": "program",
  "listOrder": 0,
  "minRefreshInterval": "string",
  "tagExisting": "none"
}
```

<h3 id="postapiv3importlist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[ImportListResource](#schemaimportlistresource)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## get/api/v3/importlist/{id}

> Code samples

```bash
curl http://localhost:8989/api/v3/importlist/0 \
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
          "hint": "string"
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
  "enableAutomaticAdd": true,
  "searchForMissingEpisodes": true,
  "shouldMonitor": "unknown",
  "monitorNewItems": "all",
  "rootFolderPath": "string",
  "qualityProfileId": 0,
  "seriesType": "standard",
  "language": {
    "id": 0,
    "name": "string"
  },
  "seasonFolder": true,
  "listType": "program",
  "listOrder": 0,
  "minRefreshInterval": "string",
  "tagExisting": "none"
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
curl http://localhost:8989/api/v3/importlist/0 \
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
            "hint": "string"
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
    "enableAutomaticAdd": true,
    "searchForMissingEpisodes": true,
    "shouldMonitor": "unknown",
    "monitorNewItems": "all",
    "rootFolderPath": "string",
    "qualityProfileId": 0,
    "seriesType": "standard",
    "language": {
      "id": 0,
      "name": "string"
    },
    "seasonFolder": true,
    "listType": "program",
    "listOrder": 0,
    "minRefreshInterval": "string",
    "tagExisting": "none"
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
          "hint": "string"
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
  "enableAutomaticAdd": true,
  "searchForMissingEpisodes": true,
  "shouldMonitor": "unknown",
  "monitorNewItems": "all",
  "rootFolderPath": "string",
  "qualityProfileId": 0,
  "seriesType": "standard",
  "language": {
    "id": 0,
    "name": "string"
  },
  "seasonFolder": true,
  "listType": "program",
  "listOrder": 0,
  "minRefreshInterval": "string",
  "tagExisting": "none"
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
|» enableAutomaticAdd|body|boolean|false|none|
|» searchForMissingEpisodes|body|boolean|false|none|
|» shouldMonitor|body|[MonitorTypes](#schemamonitortypes)|false|none|
|» monitorNewItems|body|[NewItemMonitorTypes](#schemanewitemmonitortypes)|false|none|
|» rootFolderPath|body|string \| null|false|none|
|» qualityProfileId|body|integer(int32)|false|none|
|» seriesType|body|[SeriesTypes](#schemaseriestypes)|false|none|
|» language|body|[Language](#schemalanguage)|false|none|
|» seasonFolder|body|boolean|false|none|
|» listType|body|[ImportListType](#schemaimportlisttype)|false|none|
|» listOrder|body|integer(int32)|false|none|
|» minRefreshInterval|body|string(date-span)|false|none|
|» tagExisting|body|[TagExistingType](#schematagexistingtype)|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» shouldMonitor|unknown|
|» shouldMonitor|all|
|» shouldMonitor|future|
|» shouldMonitor|missing|
|» shouldMonitor|existing|
|» shouldMonitor|firstSeason|
|» shouldMonitor|lastSeason|
|» shouldMonitor|latestSeason|
|» shouldMonitor|pilot|
|» shouldMonitor|recent|
|» shouldMonitor|monitorSpecials|
|» shouldMonitor|unmonitorSpecials|
|» shouldMonitor|none|
|» shouldMonitor|skip|
|» monitorNewItems|all|
|» monitorNewItems|none|
|» seriesType|standard|
|» seriesType|daily|
|» seriesType|anime|
|» listType|program|
|» listType|plex|
|» listType|trakt|
|» listType|simkl|
|» listType|other|
|» listType|advanced|
|» tagExisting|none|
|» tagExisting|add|
|» tagExisting|sync|

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
          "hint": "string"
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
  "enableAutomaticAdd": true,
  "searchForMissingEpisodes": true,
  "shouldMonitor": "unknown",
  "monitorNewItems": "all",
  "rootFolderPath": "string",
  "qualityProfileId": 0,
  "seriesType": "standard",
  "language": {
    "id": 0,
    "name": "string"
  },
  "seasonFolder": true,
  "listType": "program",
  "listOrder": 0,
  "minRefreshInterval": "string",
  "tagExisting": "none"
}
```

<h3 id="putapiv3importlistid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[ImportListResource](#schemaimportlistresource)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## delete/api/v3/importlist/{id}

> Code samples

```bash
curl http://localhost:8989/api/v3/importlist/0 \
  -X DELETE \
  -H "X-Api-Key: ${API_KEY}"
```

`DELETE /api/v3/importlist/{id}`

<h3 id="deleteapiv3importlistid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|none|

<h3 id="deleteapiv3importlistid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## put/api/v3/importlist/bulk

> Code samples

```bash
curl http://localhost:8989/api/v3/importlist/bulk \
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
    "enableAutomaticAdd": true,
    "rootFolderPath": "string",
    "qualityProfileId": 0,
    "tagExisting": "none"
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
  "enableAutomaticAdd": true,
  "rootFolderPath": "string",
  "qualityProfileId": 0,
  "tagExisting": "none"
}
```

<h3 id="putapiv3importlistbulk-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[ImportListBulkResource](#schemaimportlistbulkresource)|false|none|
|» ids|body|[integer(int32)]|false|none|
|» tags|body|[integer(int32)]|false|none|
|» applyTags|body|[ApplyTags](#schemaapplytags)|false|none|
|» enableAutomaticAdd|body|boolean \| null|false|none|
|» rootFolderPath|body|string \| null|false|none|
|» qualityProfileId|body|integer(int32) \| null|false|none|
|» tagExisting|body|[TagExistingType](#schematagexistingtype)|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» applyTags|add|
|» applyTags|remove|
|» applyTags|replace|
|» tagExisting|none|
|» tagExisting|add|
|» tagExisting|sync|

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
          "hint": "string"
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
  "enableAutomaticAdd": true,
  "searchForMissingEpisodes": true,
  "shouldMonitor": "unknown",
  "monitorNewItems": "all",
  "rootFolderPath": "string",
  "qualityProfileId": 0,
  "seriesType": "standard",
  "language": {
    "id": 0,
    "name": "string"
  },
  "seasonFolder": true,
  "listType": "program",
  "listOrder": 0,
  "minRefreshInterval": "string",
  "tagExisting": "none"
}
```

<h3 id="putapiv3importlistbulk-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[ImportListResource](#schemaimportlistresource)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## delete/api/v3/importlist/bulk

> Code samples

```bash
curl http://localhost:8989/api/v3/importlist/bulk \
  -X DELETE \
  -H 'Content-Type: application/json' \
  -H "X-Api-Key: ${API_KEY}" \
  -d '{
    "ids": [
      0
    ],
    "tags": [
      0
    ],
    "applyTags": "add",
    "enableAutomaticAdd": true,
    "rootFolderPath": "string",
    "qualityProfileId": 0,
    "tagExisting": "none"
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
  "enableAutomaticAdd": true,
  "rootFolderPath": "string",
  "qualityProfileId": 0,
  "tagExisting": "none"
}
```

<h3 id="deleteapiv3importlistbulk-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[ImportListBulkResource](#schemaimportlistbulkresource)|false|none|
|» ids|body|[integer(int32)]|false|none|
|» tags|body|[integer(int32)]|false|none|
|» applyTags|body|[ApplyTags](#schemaapplytags)|false|none|
|» enableAutomaticAdd|body|boolean \| null|false|none|
|» rootFolderPath|body|string \| null|false|none|
|» qualityProfileId|body|integer(int32) \| null|false|none|
|» tagExisting|body|[TagExistingType](#schematagexistingtype)|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» applyTags|add|
|» applyTags|remove|
|» applyTags|replace|
|» tagExisting|none|
|» tagExisting|add|
|» tagExisting|sync|

<h3 id="deleteapiv3importlistbulk-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## get/api/v3/importlist/schema

> Code samples

```bash
curl http://localhost:8989/api/v3/importlist/schema \
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
            "hint": "string"
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
    "enableAutomaticAdd": true,
    "searchForMissingEpisodes": true,
    "shouldMonitor": "unknown",
    "monitorNewItems": "all",
    "rootFolderPath": "string",
    "qualityProfileId": 0,
    "seriesType": "standard",
    "language": {
      "id": 0,
      "name": "string"
    },
    "seasonFolder": true,
    "listType": "program",
    "listOrder": 0,
    "minRefreshInterval": "string",
    "tagExisting": "none"
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
curl http://localhost:8989/api/v3/importlist/test \
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
            "hint": "string"
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
    "enableAutomaticAdd": true,
    "searchForMissingEpisodes": true,
    "shouldMonitor": "unknown",
    "monitorNewItems": "all",
    "rootFolderPath": "string",
    "qualityProfileId": 0,
    "seriesType": "standard",
    "language": {
      "id": 0,
      "name": "string"
    },
    "seasonFolder": true,
    "listType": "program",
    "listOrder": 0,
    "minRefreshInterval": "string",
    "tagExisting": "none"
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
          "hint": "string"
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
  "enableAutomaticAdd": true,
  "searchForMissingEpisodes": true,
  "shouldMonitor": "unknown",
  "monitorNewItems": "all",
  "rootFolderPath": "string",
  "qualityProfileId": 0,
  "seriesType": "standard",
  "language": {
    "id": 0,
    "name": "string"
  },
  "seasonFolder": true,
  "listType": "program",
  "listOrder": 0,
  "minRefreshInterval": "string",
  "tagExisting": "none"
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
|» enableAutomaticAdd|body|boolean|false|none|
|» searchForMissingEpisodes|body|boolean|false|none|
|» shouldMonitor|body|[MonitorTypes](#schemamonitortypes)|false|none|
|» monitorNewItems|body|[NewItemMonitorTypes](#schemanewitemmonitortypes)|false|none|
|» rootFolderPath|body|string \| null|false|none|
|» qualityProfileId|body|integer(int32)|false|none|
|» seriesType|body|[SeriesTypes](#schemaseriestypes)|false|none|
|» language|body|[Language](#schemalanguage)|false|none|
|» seasonFolder|body|boolean|false|none|
|» listType|body|[ImportListType](#schemaimportlisttype)|false|none|
|» listOrder|body|integer(int32)|false|none|
|» minRefreshInterval|body|string(date-span)|false|none|
|» tagExisting|body|[TagExistingType](#schematagexistingtype)|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» shouldMonitor|unknown|
|» shouldMonitor|all|
|» shouldMonitor|future|
|» shouldMonitor|missing|
|» shouldMonitor|existing|
|» shouldMonitor|firstSeason|
|» shouldMonitor|lastSeason|
|» shouldMonitor|latestSeason|
|» shouldMonitor|pilot|
|» shouldMonitor|recent|
|» shouldMonitor|monitorSpecials|
|» shouldMonitor|unmonitorSpecials|
|» shouldMonitor|none|
|» shouldMonitor|skip|
|» monitorNewItems|all|
|» monitorNewItems|none|
|» seriesType|standard|
|» seriesType|daily|
|» seriesType|anime|
|» listType|program|
|» listType|plex|
|» listType|trakt|
|» listType|simkl|
|» listType|other|
|» listType|advanced|
|» tagExisting|none|
|» tagExisting|add|
|» tagExisting|sync|

<h3 id="postapiv3importlisttest-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## post/api/v3/importlist/testall

> Code samples

```bash
curl http://localhost:8989/api/v3/importlist/testall \
  -X POST \
  -H "X-Api-Key: ${API_KEY}"
```

`POST /api/v3/importlist/testall`

<h3 id="postapiv3importlisttestall-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## post/api/v3/importlist/action/{name}

> Code samples

```bash
curl http://localhost:8989/api/v3/importlist/action/string \
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
            "hint": "string"
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
    "enableAutomaticAdd": true,
    "searchForMissingEpisodes": true,
    "shouldMonitor": "unknown",
    "monitorNewItems": "all",
    "rootFolderPath": "string",
    "qualityProfileId": 0,
    "seriesType": "standard",
    "language": {
      "id": 0,
      "name": "string"
    },
    "seasonFolder": true,
    "listType": "program",
    "listOrder": 0,
    "minRefreshInterval": "string",
    "tagExisting": "none"
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
          "hint": "string"
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
  "enableAutomaticAdd": true,
  "searchForMissingEpisodes": true,
  "shouldMonitor": "unknown",
  "monitorNewItems": "all",
  "rootFolderPath": "string",
  "qualityProfileId": 0,
  "seriesType": "standard",
  "language": {
    "id": 0,
    "name": "string"
  },
  "seasonFolder": true,
  "listType": "program",
  "listOrder": 0,
  "minRefreshInterval": "string",
  "tagExisting": "none"
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
|» enableAutomaticAdd|body|boolean|false|none|
|» searchForMissingEpisodes|body|boolean|false|none|
|» shouldMonitor|body|[MonitorTypes](#schemamonitortypes)|false|none|
|» monitorNewItems|body|[NewItemMonitorTypes](#schemanewitemmonitortypes)|false|none|
|» rootFolderPath|body|string \| null|false|none|
|» qualityProfileId|body|integer(int32)|false|none|
|» seriesType|body|[SeriesTypes](#schemaseriestypes)|false|none|
|» language|body|[Language](#schemalanguage)|false|none|
|» seasonFolder|body|boolean|false|none|
|» listType|body|[ImportListType](#schemaimportlisttype)|false|none|
|» listOrder|body|integer(int32)|false|none|
|» minRefreshInterval|body|string(date-span)|false|none|
|» tagExisting|body|[TagExistingType](#schematagexistingtype)|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» shouldMonitor|unknown|
|» shouldMonitor|all|
|» shouldMonitor|future|
|» shouldMonitor|missing|
|» shouldMonitor|existing|
|» shouldMonitor|firstSeason|
|» shouldMonitor|lastSeason|
|» shouldMonitor|latestSeason|
|» shouldMonitor|pilot|
|» shouldMonitor|recent|
|» shouldMonitor|monitorSpecials|
|» shouldMonitor|unmonitorSpecials|
|» shouldMonitor|none|
|» shouldMonitor|skip|
|» monitorNewItems|all|
|» monitorNewItems|none|
|» seriesType|standard|
|» seriesType|daily|
|» seriesType|anime|
|» listType|program|
|» listType|plex|
|» listType|trakt|
|» listType|simkl|
|» listType|other|
|» listType|advanced|
|» tagExisting|none|
|» tagExisting|add|
|» tagExisting|sync|

<h3 id="postapiv3importlistactionname-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

<h1 id="sonarr-importlistconfig">ImportListConfig</h1>

## get/api/v3/config/importlist

> Code samples

```bash
curl http://localhost:8989/api/v3/config/importlist \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /api/v3/config/importlist`

> Example responses

> 200 Response

```json
{
  "id": 0,
  "listSyncLevel": "disabled",
  "listSyncTag": 0
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
curl http://localhost:8989/api/v3/config/importlist/0 \
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
  "listSyncLevel": "disabled",
  "listSyncTag": 0
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
curl http://localhost:8989/api/v3/config/importlist/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}" \
  -d '{
    "id": 0,
    "listSyncLevel": "disabled",
    "listSyncTag": 0
  }'
```

`PUT /api/v3/config/importlist/{id}`

> Body parameter

```json
{
  "id": 0,
  "listSyncLevel": "disabled",
  "listSyncTag": 0
}
```

<h3 id="putapiv3configimportlistid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|body|body|[ImportListConfigResource](#schemaimportlistconfigresource)|false|none|
|» id|body|integer(int32)|false|none|
|» listSyncLevel|body|[ListSyncLevelType](#schemalistsyncleveltype)|false|none|
|» listSyncTag|body|integer(int32)|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» listSyncLevel|disabled|
|» listSyncLevel|logOnly|
|» listSyncLevel|keepAndUnmonitor|
|» listSyncLevel|keepAndTag|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "listSyncLevel": "disabled",
  "listSyncTag": 0
}
```

<h3 id="putapiv3configimportlistid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[ImportListConfigResource](#schemaimportlistconfigresource)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

<h1 id="sonarr-importlistexclusion">ImportListExclusion</h1>

## get/api/v3/importlistexclusion

> Code samples

```bash
curl http://localhost:8989/api/v3/importlistexclusion \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /api/v3/importlistexclusion`

<aside class="warning">
This operation is deprecated
</aside>

> Example responses

> 200 Response

```json
[
  {
    "id": 0,
    "tvdbId": 0,
    "title": "string"
  }
]
```

<h3 id="getapiv3importlistexclusion-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="getapiv3importlistexclusion-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[ImportListExclusionResource](#schemaimportlistexclusionresource)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## post/api/v3/importlistexclusion

> Code samples

```bash
curl http://localhost:8989/api/v3/importlistexclusion \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}" \
  -d '{
    "id": 0,
    "tvdbId": 0,
    "title": "string"
  }'
```

`POST /api/v3/importlistexclusion`

> Body parameter

```json
{
  "id": 0,
  "tvdbId": 0,
  "title": "string"
}
```

<h3 id="postapiv3importlistexclusion-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[ImportListExclusionResource](#schemaimportlistexclusionresource)|false|none|
|» id|body|integer(int32)|false|none|
|» tvdbId|body|integer(int32)|false|none|
|» title|body|string \| null|false|none|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "tvdbId": 0,
  "title": "string"
}
```

<h3 id="postapiv3importlistexclusion-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[ImportListExclusionResource](#schemaimportlistexclusionresource)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## get/api/v3/importlistexclusion/paged

> Code samples

```bash
curl http://localhost:8989/api/v3/importlistexclusion/paged \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /api/v3/importlistexclusion/paged`

<h3 id="getapiv3importlistexclusionpaged-parameters">Parameters</h3>

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
      "tvdbId": 0,
      "title": "string"
    }
  ]
}
```

<h3 id="getapiv3importlistexclusionpaged-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[ImportListExclusionResourcePagingResource](#schemaimportlistexclusionresourcepagingresource)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## get/api/v3/importlistexclusion/{id}

> Code samples

```bash
curl http://localhost:8989/api/v3/importlistexclusion/0 \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /api/v3/importlistexclusion/{id}`

<h3 id="getapiv3importlistexclusionid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|none|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "tvdbId": 0,
  "title": "string"
}
```

<h3 id="getapiv3importlistexclusionid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[ImportListExclusionResource](#schemaimportlistexclusionresource)|
|404|Not Found|Not Found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## put/api/v3/importlistexclusion/{id}

> Code samples

```bash
curl http://localhost:8989/api/v3/importlistexclusion/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}" \
  -d '{
    "id": 0,
    "tvdbId": 0,
    "title": "string"
  }'
```

`PUT /api/v3/importlistexclusion/{id}`

> Body parameter

```json
{
  "id": 0,
  "tvdbId": 0,
  "title": "string"
}
```

<h3 id="putapiv3importlistexclusionid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|body|body|[ImportListExclusionResource](#schemaimportlistexclusionresource)|false|none|
|» id|body|integer(int32)|false|none|
|» tvdbId|body|integer(int32)|false|none|
|» title|body|string \| null|false|none|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "tvdbId": 0,
  "title": "string"
}
```

<h3 id="putapiv3importlistexclusionid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[ImportListExclusionResource](#schemaimportlistexclusionresource)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## delete/api/v3/importlistexclusion/{id}

> Code samples

```bash
curl http://localhost:8989/api/v3/importlistexclusion/0 \
  -X DELETE \
  -H "X-Api-Key: ${API_KEY}"
```

`DELETE /api/v3/importlistexclusion/{id}`

<h3 id="deleteapiv3importlistexclusionid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|none|

<h3 id="deleteapiv3importlistexclusionid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## delete/api/v3/importlistexclusion/bulk

> Code samples

```bash
curl http://localhost:8989/api/v3/importlistexclusion/bulk \
  -X DELETE \
  -H 'Content-Type: application/json' \
  -H "X-Api-Key: ${API_KEY}" \
  -d '{
    "ids": [
      0
    ]
  }'
```

`DELETE /api/v3/importlistexclusion/bulk`

> Body parameter

```json
{
  "ids": [
    0
  ]
}
```

<h3 id="deleteapiv3importlistexclusionbulk-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[ImportListExclusionBulkResource](#schemaimportlistexclusionbulkresource)|false|none|
|» ids|body|[integer(int32)]|false|none|

<h3 id="deleteapiv3importlistexclusionbulk-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

<h1 id="sonarr-indexer">Indexer</h1>

## get/api/v3/indexer

> Code samples

```bash
curl http://localhost:8989/api/v3/indexer \
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
            "hint": "string"
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
    "seasonSearchMaximumSingleEpisodeAge": 0,
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
curl http://localhost:8989/api/v3/indexer \
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
            "hint": "string"
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
    "seasonSearchMaximumSingleEpisodeAge": 0,
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
          "hint": "string"
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
  "seasonSearchMaximumSingleEpisodeAge": 0,
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
|» seasonSearchMaximumSingleEpisodeAge|body|integer(int32)|false|none|
|» downloadClientId|body|integer(int32)|false|none|

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
          "hint": "string"
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
  "seasonSearchMaximumSingleEpisodeAge": 0,
  "downloadClientId": 0
}
```

<h3 id="postapiv3indexer-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[IndexerResource](#schemaindexerresource)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## get/api/v3/indexer/{id}

> Code samples

```bash
curl http://localhost:8989/api/v3/indexer/0 \
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
          "hint": "string"
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
  "seasonSearchMaximumSingleEpisodeAge": 0,
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
curl http://localhost:8989/api/v3/indexer/0 \
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
            "hint": "string"
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
    "seasonSearchMaximumSingleEpisodeAge": 0,
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
          "hint": "string"
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
  "seasonSearchMaximumSingleEpisodeAge": 0,
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
|» seasonSearchMaximumSingleEpisodeAge|body|integer(int32)|false|none|
|» downloadClientId|body|integer(int32)|false|none|

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
          "hint": "string"
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
  "seasonSearchMaximumSingleEpisodeAge": 0,
  "downloadClientId": 0
}
```

<h3 id="putapiv3indexerid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[IndexerResource](#schemaindexerresource)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## delete/api/v3/indexer/{id}

> Code samples

```bash
curl http://localhost:8989/api/v3/indexer/0 \
  -X DELETE \
  -H "X-Api-Key: ${API_KEY}"
```

`DELETE /api/v3/indexer/{id}`

<h3 id="deleteapiv3indexerid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|none|

<h3 id="deleteapiv3indexerid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## put/api/v3/indexer/bulk

> Code samples

```bash
curl http://localhost:8989/api/v3/indexer/bulk \
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
    "priority": 0,
    "seasonSearchMaximumSingleEpisodeAge": 0
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
  "priority": 0,
  "seasonSearchMaximumSingleEpisodeAge": 0
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
|» seasonSearchMaximumSingleEpisodeAge|body|integer(int32) \| null|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» applyTags|add|
|» applyTags|remove|
|» applyTags|replace|

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
          "hint": "string"
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
  "seasonSearchMaximumSingleEpisodeAge": 0,
  "downloadClientId": 0
}
```

<h3 id="putapiv3indexerbulk-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[IndexerResource](#schemaindexerresource)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## delete/api/v3/indexer/bulk

> Code samples

```bash
curl http://localhost:8989/api/v3/indexer/bulk \
  -X DELETE \
  -H 'Content-Type: application/json' \
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
    "priority": 0,
    "seasonSearchMaximumSingleEpisodeAge": 0
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
  "priority": 0,
  "seasonSearchMaximumSingleEpisodeAge": 0
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
|» seasonSearchMaximumSingleEpisodeAge|body|integer(int32) \| null|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» applyTags|add|
|» applyTags|remove|
|» applyTags|replace|

<h3 id="deleteapiv3indexerbulk-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## get/api/v3/indexer/schema

> Code samples

```bash
curl http://localhost:8989/api/v3/indexer/schema \
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
            "hint": "string"
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
    "seasonSearchMaximumSingleEpisodeAge": 0,
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
curl http://localhost:8989/api/v3/indexer/test \
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
            "hint": "string"
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
    "seasonSearchMaximumSingleEpisodeAge": 0,
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
          "hint": "string"
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
  "seasonSearchMaximumSingleEpisodeAge": 0,
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
|» seasonSearchMaximumSingleEpisodeAge|body|integer(int32)|false|none|
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
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## post/api/v3/indexer/testall

> Code samples

```bash
curl http://localhost:8989/api/v3/indexer/testall \
  -X POST \
  -H "X-Api-Key: ${API_KEY}"
```

`POST /api/v3/indexer/testall`

<h3 id="postapiv3indexertestall-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## post/api/v3/indexer/action/{name}

> Code samples

```bash
curl http://localhost:8989/api/v3/indexer/action/string \
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
            "hint": "string"
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
    "seasonSearchMaximumSingleEpisodeAge": 0,
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
          "hint": "string"
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
  "seasonSearchMaximumSingleEpisodeAge": 0,
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
|» seasonSearchMaximumSingleEpisodeAge|body|integer(int32)|false|none|
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
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

<h1 id="sonarr-indexerconfig">IndexerConfig</h1>

## get/api/v3/config/indexer

> Code samples

```bash
curl http://localhost:8989/api/v3/config/indexer \
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
  "retention": 0,
  "maximumSize": 0,
  "rssSyncInterval": 0
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
curl http://localhost:8989/api/v3/config/indexer/0 \
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
  "retention": 0,
  "maximumSize": 0,
  "rssSyncInterval": 0
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
curl http://localhost:8989/api/v3/config/indexer/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}" \
  -d '{
    "id": 0,
    "minimumAge": 0,
    "retention": 0,
    "maximumSize": 0,
    "rssSyncInterval": 0
  }'
```

`PUT /api/v3/config/indexer/{id}`

> Body parameter

```json
{
  "id": 0,
  "minimumAge": 0,
  "retention": 0,
  "maximumSize": 0,
  "rssSyncInterval": 0
}
```

<h3 id="putapiv3configindexerid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|body|body|[IndexerConfigResource](#schemaindexerconfigresource)|false|none|
|» id|body|integer(int32)|false|none|
|» minimumAge|body|integer(int32)|false|none|
|» retention|body|integer(int32)|false|none|
|» maximumSize|body|integer(int32)|false|none|
|» rssSyncInterval|body|integer(int32)|false|none|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "minimumAge": 0,
  "retention": 0,
  "maximumSize": 0,
  "rssSyncInterval": 0
}
```

<h3 id="putapiv3configindexerid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[IndexerConfigResource](#schemaindexerconfigresource)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

<h1 id="sonarr-indexerflag">IndexerFlag</h1>

## get/api/v3/indexerflag

> Code samples

```bash
curl http://localhost:8989/api/v3/indexerflag \
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

<h1 id="sonarr-language">Language</h1>

## get/api/v3/language

> Code samples

```bash
curl http://localhost:8989/api/v3/language \
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
curl http://localhost:8989/api/v3/language/0 \
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

<h1 id="sonarr-languageprofile">LanguageProfile</h1>

## get/api/v3/languageprofile

> Code samples

```bash
curl http://localhost:8989/api/v3/languageprofile \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /api/v3/languageprofile`

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
    "upgradeAllowed": true,
    "cutoff": {
      "id": 0,
      "name": "string"
    },
    "languages": [
      {
        "id": 0,
        "language": {
          "id": 0,
          "name": "string"
        },
        "allowed": true
      }
    ]
  }
]
```

<h3 id="getapiv3languageprofile-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="getapiv3languageprofile-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[LanguageProfileResource](#schemalanguageprofileresource)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## post/api/v3/languageprofile

> Code samples

```bash
curl http://localhost:8989/api/v3/languageprofile \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}" \
  -d '{
    "id": 0,
    "name": "string",
    "upgradeAllowed": true,
    "cutoff": {
      "id": 0,
      "name": "string"
    },
    "languages": [
      {
        "id": 0,
        "language": {
          "id": 0,
          "name": "string"
        },
        "allowed": true
      }
    ]
  }'
```

`POST /api/v3/languageprofile`

<aside class="warning">
This operation is deprecated
</aside>

> Body parameter

```json
{
  "id": 0,
  "name": "string",
  "upgradeAllowed": true,
  "cutoff": {
    "id": 0,
    "name": "string"
  },
  "languages": [
    {
      "id": 0,
      "language": {
        "id": 0,
        "name": "string"
      },
      "allowed": true
    }
  ]
}
```

<h3 id="postapiv3languageprofile-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[LanguageProfileResource](#schemalanguageprofileresource)|false|none|
|» id|body|integer(int32)|false|none|
|» name|body|string \| null|false|none|
|» upgradeAllowed|body|boolean|false|none|
|» cutoff|body|[Language](#schemalanguage)|false|none|
|» languages|body|[[LanguageProfileItemResource](#schemalanguageprofileitemresource)]|false|none|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "name": "string",
  "upgradeAllowed": true,
  "cutoff": {
    "id": 0,
    "name": "string"
  },
  "languages": [
    {
      "id": 0,
      "language": {
        "id": 0,
        "name": "string"
      },
      "allowed": true
    }
  ]
}
```

<h3 id="postapiv3languageprofile-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[LanguageProfileResource](#schemalanguageprofileresource)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## get/api/v3/languageprofile/{id}

> Code samples

```bash
curl http://localhost:8989/api/v3/languageprofile/0 \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /api/v3/languageprofile/{id}`

<h3 id="getapiv3languageprofileid-parameters">Parameters</h3>

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
  "cutoff": {
    "id": 0,
    "name": "string"
  },
  "languages": [
    {
      "id": 0,
      "language": {
        "id": 0,
        "name": "string"
      },
      "allowed": true
    }
  ]
}
```

<h3 id="getapiv3languageprofileid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[LanguageProfileResource](#schemalanguageprofileresource)|
|404|Not Found|Not Found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## put/api/v3/languageprofile/{id}

> Code samples

```bash
curl http://localhost:8989/api/v3/languageprofile/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}" \
  -d '{
    "id": 0,
    "name": "string",
    "upgradeAllowed": true,
    "cutoff": {
      "id": 0,
      "name": "string"
    },
    "languages": [
      {
        "id": 0,
        "language": {
          "id": 0,
          "name": "string"
        },
        "allowed": true
      }
    ]
  }'
```

`PUT /api/v3/languageprofile/{id}`

<aside class="warning">
This operation is deprecated
</aside>

> Body parameter

```json
{
  "id": 0,
  "name": "string",
  "upgradeAllowed": true,
  "cutoff": {
    "id": 0,
    "name": "string"
  },
  "languages": [
    {
      "id": 0,
      "language": {
        "id": 0,
        "name": "string"
      },
      "allowed": true
    }
  ]
}
```

<h3 id="putapiv3languageprofileid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|body|body|[LanguageProfileResource](#schemalanguageprofileresource)|false|none|
|» id|body|integer(int32)|false|none|
|» name|body|string \| null|false|none|
|» upgradeAllowed|body|boolean|false|none|
|» cutoff|body|[Language](#schemalanguage)|false|none|
|» languages|body|[[LanguageProfileItemResource](#schemalanguageprofileitemresource)]|false|none|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "name": "string",
  "upgradeAllowed": true,
  "cutoff": {
    "id": 0,
    "name": "string"
  },
  "languages": [
    {
      "id": 0,
      "language": {
        "id": 0,
        "name": "string"
      },
      "allowed": true
    }
  ]
}
```

<h3 id="putapiv3languageprofileid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[LanguageProfileResource](#schemalanguageprofileresource)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## delete/api/v3/languageprofile/{id}

> Code samples

```bash
curl http://localhost:8989/api/v3/languageprofile/0 \
  -X DELETE \
  -H "X-Api-Key: ${API_KEY}"
```

`DELETE /api/v3/languageprofile/{id}`

<aside class="warning">
This operation is deprecated
</aside>

<h3 id="deleteapiv3languageprofileid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|none|

<h3 id="deleteapiv3languageprofileid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

<h1 id="sonarr-languageprofileschema">LanguageProfileSchema</h1>

## get/api/v3/languageprofile/schema

> Code samples

```bash
curl http://localhost:8989/api/v3/languageprofile/schema \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /api/v3/languageprofile/schema`

<aside class="warning">
This operation is deprecated
</aside>

> Example responses

> 200 Response

```json
{
  "id": 0,
  "name": "string",
  "upgradeAllowed": true,
  "cutoff": {
    "id": 0,
    "name": "string"
  },
  "languages": [
    {
      "id": 0,
      "language": {
        "id": 0,
        "name": "string"
      },
      "allowed": true
    }
  ]
}
```

<h3 id="getapiv3languageprofileschema-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[LanguageProfileResource](#schemalanguageprofileresource)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

<h1 id="sonarr-localization">Localization</h1>

## get/api/v3/localization

> Code samples

```bash
curl http://localhost:8989/api/v3/localization \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /api/v3/localization`

> Example responses

> 200 Response

```json
{
  "id": 0,
  "strings": {
    "property1": "string",
    "property2": "string"
  }
}
```

<h3 id="getapiv3localization-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[LocalizationResource](#schemalocalizationresource)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## get/api/v3/localization/language

> Code samples

```bash
curl http://localhost:8989/api/v3/localization/language \
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

## get/api/v3/localization/{id}

> Code samples

```bash
curl http://localhost:8989/api/v3/localization/0 \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /api/v3/localization/{id}`

<h3 id="getapiv3localizationid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|none|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "strings": {
    "property1": "string",
    "property2": "string"
  }
}
```

<h3 id="getapiv3localizationid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[LocalizationResource](#schemalocalizationresource)|
|404|Not Found|Not Found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

<h1 id="sonarr-log">Log</h1>

## get/api/v3/log

> Code samples

```bash
curl http://localhost:8989/api/v3/log \
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

<h1 id="sonarr-logfile">LogFile</h1>

## get/api/v3/log/file

> Code samples

```bash
curl http://localhost:8989/api/v3/log/file \
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
curl http://localhost:8989/api/v3/log/file/string \
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
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

<h1 id="sonarr-manualimport">ManualImport</h1>

## get/api/v3/manualimport

> Code samples

```bash
curl http://localhost:8989/api/v3/manualimport \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /api/v3/manualimport`

<h3 id="getapiv3manualimport-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|folder|query|string|false|none|
|downloadId|query|string|false|none|
|seriesId|query|integer(int32)|false|none|
|seasonNumber|query|integer(int32)|false|none|
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
    "series": {
      "id": 0,
      "title": "string",
      "alternateTitles": [
        {
          "title": "string",
          "seasonNumber": 0,
          "sceneSeasonNumber": 0,
          "sceneOrigin": "string",
          "comment": "string"
        }
      ],
      "sortTitle": "string",
      "status": "continuing",
      "ended": true,
      "profileName": "string",
      "overview": "string",
      "nextAiring": "1970-01-01T00:00:00Z",
      "previousAiring": "1970-01-01T00:00:00Z",
      "network": "string",
      "airTime": "string",
      "images": [
        {
          "coverType": "unknown",
          "url": "string",
          "remoteUrl": "string"
        }
      ],
      "language": {
        "id": 0,
        "name": "string"
      },
      "originalLanguage": {
        "id": 0,
        "name": "string"
      },
      "remotePoster": "string",
      "seasonType": "string",
      "seasons": [
        {
          "seasonNumber": 0,
          "monitored": true,
          "title": "string",
          "statistics": {
            "nextAiring": "1970-01-01T00:00:00Z",
            "previousAiring": "1970-01-01T00:00:00Z",
            "episodeFileCount": 0,
            "episodeCount": 0,
            "totalEpisodeCount": 0,
            "sizeOnDisk": 0,
            "releaseGroups": [
              "string"
            ],
            "percentOfEpisodes": 0
          },
          "images": [
            {
              "coverType": "unknown",
              "url": "string",
              "remoteUrl": "string"
            }
          ]
        }
      ],
      "seasonTypes": [
        {
          "name": "string",
          "type": "string",
          "seasonNumbers": [
            0
          ],
          "episodeCount": 0
        }
      ],
      "translations": [
        {
          "language": {
            "id": 0,
            "name": "string"
          },
          "title": "string",
          "overview": "string"
        }
      ],
      "year": 0,
      "path": "string",
      "pendingPath": "string",
      "qualityProfileId": 0,
      "seasonFolder": true,
      "monitored": true,
      "monitorNewItems": "all",
      "useSceneNumbering": true,
      "runtime": 0,
      "tvdbId": 0,
      "tvRageId": 0,
      "tvMazeId": 0,
      "tmdbId": 0,
      "firstAired": "1970-01-01T00:00:00Z",
      "lastAired": "1970-01-01T00:00:00Z",
      "seriesType": "standard",
      "cleanTitle": "string",
      "originalTitle": "string",
      "cleanOriginalTitle": "string",
      "imdbId": "string",
      "titleSlug": "string",
      "rootFolderPath": "string",
      "folder": "string",
      "folders": [
        {
          "language": {
            "id": 0,
            "name": "string"
          },
          "folder": "string"
        }
      ],
      "certification": "string",
      "genres": [
        "string"
      ],
      "tags": [
        0
      ],
      "added": "1970-01-01T00:00:00Z",
      "addOptions": {
        "ignoreEpisodesWithFiles": true,
        "ignoreEpisodesWithoutFiles": true,
        "monitor": "unknown",
        "searchForMissingEpisodes": true,
        "searchForCutoffUnmetEpisodes": true
      },
      "ratings": {
        "votes": 0,
        "value": 0
      },
      "statistics": {
        "seasonCount": 0,
        "episodeFileCount": 0,
        "episodeCount": 0,
        "totalEpisodeCount": 0,
        "sizeOnDisk": 0,
        "releaseGroups": [
          "string"
        ],
        "percentOfEpisodes": 0
      },
      "episodesChanged": true,
      "languageProfileId": 0
    },
    "seasonNumber": 0,
    "episodes": [
      {
        "id": 0,
        "seriesId": 0,
        "tvdbId": 0,
        "episodeFileId": 0,
        "seasonNumber": 0,
        "episodeNumber": 0,
        "title": "string",
        "airDate": "string",
        "airDateUtc": "1970-01-01T00:00:00Z",
        "lastSearchTime": "1970-01-01T00:00:00Z",
        "runtime": 0,
        "finaleType": "string",
        "overview": "string",
        "episodeFile": {
          "id": 0,
          "seriesId": 0,
          "seasonNumber": 0,
          "relativePath": "string",
          "path": "string",
          "size": 0,
          "dateAdded": "1970-01-01T00:00:00Z",
          "sceneName": "string",
          "releaseGroup": "string",
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
              "resolution": 0
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
                          "hint": "string"
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
          "releaseType": "unknown",
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
          "qualityCutoffNotMet": true
        },
        "hasFile": true,
        "monitored": true,
        "absoluteEpisodeNumber": 0,
        "sceneAbsoluteEpisodeNumber": 0,
        "sceneEpisodeNumber": 0,
        "sceneSeasonNumber": 0,
        "unverifiedSceneNumbering": true,
        "series": {
          "id": 0,
          "title": "string",
          "alternateTitles": [
            {
              "title": "string",
              "seasonNumber": 0,
              "sceneSeasonNumber": 0,
              "sceneOrigin": "string",
              "comment": "string"
            }
          ],
          "sortTitle": "string",
          "status": "continuing",
          "ended": true,
          "profileName": "string",
          "overview": "string",
          "nextAiring": "1970-01-01T00:00:00Z",
          "previousAiring": "1970-01-01T00:00:00Z",
          "network": "string",
          "airTime": "string",
          "images": [
            {
              "coverType": "unknown",
              "url": "string",
              "remoteUrl": "string"
            }
          ],
          "language": {
            "id": 0,
            "name": "string"
          },
          "originalLanguage": {
            "id": 0,
            "name": "string"
          },
          "remotePoster": "string",
          "seasonType": "string",
          "seasons": [
            {
              "seasonNumber": 0,
              "monitored": true,
              "title": "string",
              "statistics": {
                "nextAiring": "1970-01-01T00:00:00Z",
                "previousAiring": "1970-01-01T00:00:00Z",
                "episodeFileCount": 0,
                "episodeCount": 0,
                "totalEpisodeCount": 0,
                "sizeOnDisk": 0,
                "releaseGroups": [
                  "string"
                ],
                "percentOfEpisodes": 0
              },
              "images": [
                {
                  "coverType": "unknown",
                  "url": "string",
                  "remoteUrl": "string"
                }
              ]
            }
          ],
          "seasonTypes": [
            {
              "name": "string",
              "type": "string",
              "seasonNumbers": [
                0
              ],
              "episodeCount": 0
            }
          ],
          "translations": [
            {
              "language": {
                "id": 0,
                "name": "string"
              },
              "title": "string",
              "overview": "string"
            }
          ],
          "year": 0,
          "path": "string",
          "pendingPath": "string",
          "qualityProfileId": 0,
          "seasonFolder": true,
          "monitored": true,
          "monitorNewItems": "all",
          "useSceneNumbering": true,
          "runtime": 0,
          "tvdbId": 0,
          "tvRageId": 0,
          "tvMazeId": 0,
          "tmdbId": 0,
          "firstAired": "1970-01-01T00:00:00Z",
          "lastAired": "1970-01-01T00:00:00Z",
          "seriesType": "standard",
          "cleanTitle": "string",
          "originalTitle": "string",
          "cleanOriginalTitle": "string",
          "imdbId": "string",
          "titleSlug": "string",
          "rootFolderPath": "string",
          "folder": "string",
          "folders": [
            {
              "language": {
                "id": 0,
                "name": "string"
              },
              "folder": "string"
            }
          ],
          "certification": "string",
          "genres": [
            "string"
          ],
          "tags": [
            0
          ],
          "added": "1970-01-01T00:00:00Z",
          "addOptions": {
            "ignoreEpisodesWithFiles": true,
            "ignoreEpisodesWithoutFiles": true,
            "monitor": "unknown",
            "searchForMissingEpisodes": true,
            "searchForCutoffUnmetEpisodes": true
          },
          "ratings": {
            "votes": 0,
            "value": 0
          },
          "statistics": {
            "seasonCount": 0,
            "episodeFileCount": 0,
            "episodeCount": 0,
            "totalEpisodeCount": 0,
            "sizeOnDisk": 0,
            "releaseGroups": [
              "string"
            ],
            "percentOfEpisodes": 0
          },
          "episodesChanged": true,
          "languageProfileId": 0
        },
        "images": [
          {
            "coverType": "unknown",
            "url": "string",
            "remoteUrl": "string"
          }
        ]
      }
    ],
    "episodeFileId": 0,
    "releaseGroup": "string",
    "quality": {
      "quality": {
        "id": 0,
        "name": "string",
        "source": "unknown",
        "resolution": 0
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
                    "hint": "string"
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
    "releaseType": "unknown",
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
curl http://localhost:8989/api/v3/manualimport \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "X-Api-Key: ${API_KEY}" \
  -d '[
    {
      "id": 0,
      "path": "string",
      "seriesId": 0,
      "seasonNumber": 0,
      "episodes": [
        {
          "id": 0,
          "seriesId": 0,
          "tvdbId": 0,
          "episodeFileId": 0,
          "seasonNumber": 0,
          "episodeNumber": 0,
          "title": "string",
          "airDate": "string",
          "airDateUtc": "1970-01-01T00:00:00Z",
          "lastSearchTime": "1970-01-01T00:00:00Z",
          "runtime": 0,
          "finaleType": "string",
          "overview": "string",
          "episodeFile": {
            "id": 0,
            "seriesId": 0,
            "seasonNumber": 0,
            "relativePath": "string",
            "path": "string",
            "size": 0,
            "dateAdded": "1970-01-01T00:00:00Z",
            "sceneName": "string",
            "releaseGroup": "string",
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
                "resolution": 0
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
                            "hint": "string"
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
            "releaseType": "unknown",
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
            "qualityCutoffNotMet": true
          },
          "hasFile": true,
          "monitored": true,
          "absoluteEpisodeNumber": 0,
          "sceneAbsoluteEpisodeNumber": 0,
          "sceneEpisodeNumber": 0,
          "sceneSeasonNumber": 0,
          "unverifiedSceneNumbering": true,
          "series": {
            "id": 0,
            "title": "string",
            "alternateTitles": [
              {
                "title": "string",
                "seasonNumber": 0,
                "sceneSeasonNumber": 0,
                "sceneOrigin": "string",
                "comment": "string"
              }
            ],
            "sortTitle": "string",
            "status": "continuing",
            "profileName": "string",
            "overview": "string",
            "nextAiring": "1970-01-01T00:00:00Z",
            "previousAiring": "1970-01-01T00:00:00Z",
            "network": "string",
            "airTime": "string",
            "images": [
              {
                "coverType": "unknown",
                "url": "string",
                "remoteUrl": "string"
              }
            ],
            "language": {
              "id": 0,
              "name": "string"
            },
            "originalLanguage": {
              "id": 0,
              "name": "string"
            },
            "remotePoster": "string",
            "seasonType": "string",
            "seasons": [
              {
                "seasonNumber": 0,
                "monitored": true,
                "title": "string",
                "statistics": {
                  "nextAiring": "1970-01-01T00:00:00Z",
                  "previousAiring": "1970-01-01T00:00:00Z",
                  "episodeFileCount": 0,
                  "episodeCount": 0,
                  "totalEpisodeCount": 0,
                  "sizeOnDisk": 0,
                  "releaseGroups": [
                    "string"
                  ]
                },
                "images": [
                  {
                    "coverType": "unknown",
                    "url": "string",
                    "remoteUrl": "string"
                  }
                ]
              }
            ],
            "seasonTypes": [
              {
                "name": "string",
                "type": "string",
                "seasonNumbers": [
                  0
                ],
                "episodeCount": 0
              }
            ],
            "translations": [
              {
                "language": {
                  "id": 0,
                  "name": "string"
                },
                "title": "string",
                "overview": "string"
              }
            ],
            "year": 0,
            "path": "string",
            "pendingPath": "string",
            "qualityProfileId": 0,
            "seasonFolder": true,
            "monitored": true,
            "monitorNewItems": "all",
            "useSceneNumbering": true,
            "runtime": 0,
            "tvdbId": 0,
            "tvRageId": 0,
            "tvMazeId": 0,
            "tmdbId": 0,
            "firstAired": "1970-01-01T00:00:00Z",
            "lastAired": "1970-01-01T00:00:00Z",
            "seriesType": "standard",
            "cleanTitle": "string",
            "originalTitle": "string",
            "cleanOriginalTitle": "string",
            "imdbId": "string",
            "titleSlug": "string",
            "rootFolderPath": "string",
            "folder": "string",
            "folders": [
              {
                "language": {
                  "id": 0,
                  "name": "string"
                },
                "folder": "string"
              }
            ],
            "certification": "string",
            "genres": [
              "string"
            ],
            "tags": [
              0
            ],
            "added": "1970-01-01T00:00:00Z",
            "addOptions": {
              "ignoreEpisodesWithFiles": true,
              "ignoreEpisodesWithoutFiles": true,
              "monitor": "unknown",
              "searchForMissingEpisodes": true,
              "searchForCutoffUnmetEpisodes": true
            },
            "ratings": {
              "votes": 0,
              "value": 0
            },
            "statistics": {
              "seasonCount": 0,
              "episodeFileCount": 0,
              "episodeCount": 0,
              "totalEpisodeCount": 0,
              "sizeOnDisk": 0,
              "releaseGroups": [
                "string"
              ]
            },
            "episodesChanged": true
          },
          "images": [
            {
              "coverType": "unknown",
              "url": "string",
              "remoteUrl": "string"
            }
          ]
        }
      ],
      "episodeIds": [
        0
      ],
      "quality": {
        "quality": {
          "id": 0,
          "name": "string",
          "source": "unknown",
          "resolution": 0
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
                      "hint": "string"
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
      "releaseType": "unknown",
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
    "seriesId": 0,
    "seasonNumber": 0,
    "episodes": [
      {
        "id": 0,
        "seriesId": 0,
        "tvdbId": 0,
        "episodeFileId": 0,
        "seasonNumber": 0,
        "episodeNumber": 0,
        "title": "string",
        "airDate": "string",
        "airDateUtc": "1970-01-01T00:00:00Z",
        "lastSearchTime": "1970-01-01T00:00:00Z",
        "runtime": 0,
        "finaleType": "string",
        "overview": "string",
        "episodeFile": {
          "id": 0,
          "seriesId": 0,
          "seasonNumber": 0,
          "relativePath": "string",
          "path": "string",
          "size": 0,
          "dateAdded": "1970-01-01T00:00:00Z",
          "sceneName": "string",
          "releaseGroup": "string",
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
              "resolution": 0
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
                          "hint": "string"
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
          "releaseType": "unknown",
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
          "qualityCutoffNotMet": true
        },
        "hasFile": true,
        "monitored": true,
        "absoluteEpisodeNumber": 0,
        "sceneAbsoluteEpisodeNumber": 0,
        "sceneEpisodeNumber": 0,
        "sceneSeasonNumber": 0,
        "unverifiedSceneNumbering": true,
        "series": {
          "id": 0,
          "title": "string",
          "alternateTitles": [
            {
              "title": "string",
              "seasonNumber": 0,
              "sceneSeasonNumber": 0,
              "sceneOrigin": "string",
              "comment": "string"
            }
          ],
          "sortTitle": "string",
          "status": "continuing",
          "profileName": "string",
          "overview": "string",
          "nextAiring": "1970-01-01T00:00:00Z",
          "previousAiring": "1970-01-01T00:00:00Z",
          "network": "string",
          "airTime": "string",
          "images": [
            {
              "coverType": "unknown",
              "url": "string",
              "remoteUrl": "string"
            }
          ],
          "language": {
            "id": 0,
            "name": "string"
          },
          "originalLanguage": {
            "id": 0,
            "name": "string"
          },
          "remotePoster": "string",
          "seasonType": "string",
          "seasons": [
            {
              "seasonNumber": 0,
              "monitored": true,
              "title": "string",
              "statistics": {
                "nextAiring": "1970-01-01T00:00:00Z",
                "previousAiring": "1970-01-01T00:00:00Z",
                "episodeFileCount": 0,
                "episodeCount": 0,
                "totalEpisodeCount": 0,
                "sizeOnDisk": 0,
                "releaseGroups": [
                  "string"
                ]
              },
              "images": [
                {
                  "coverType": "unknown",
                  "url": "string",
                  "remoteUrl": "string"
                }
              ]
            }
          ],
          "seasonTypes": [
            {
              "name": "string",
              "type": "string",
              "seasonNumbers": [
                0
              ],
              "episodeCount": 0
            }
          ],
          "translations": [
            {
              "language": {
                "id": 0,
                "name": "string"
              },
              "title": "string",
              "overview": "string"
            }
          ],
          "year": 0,
          "path": "string",
          "pendingPath": "string",
          "qualityProfileId": 0,
          "seasonFolder": true,
          "monitored": true,
          "monitorNewItems": "all",
          "useSceneNumbering": true,
          "runtime": 0,
          "tvdbId": 0,
          "tvRageId": 0,
          "tvMazeId": 0,
          "tmdbId": 0,
          "firstAired": "1970-01-01T00:00:00Z",
          "lastAired": "1970-01-01T00:00:00Z",
          "seriesType": "standard",
          "cleanTitle": "string",
          "originalTitle": "string",
          "cleanOriginalTitle": "string",
          "imdbId": "string",
          "titleSlug": "string",
          "rootFolderPath": "string",
          "folder": "string",
          "folders": [
            {
              "language": {
                "id": 0,
                "name": "string"
              },
              "folder": "string"
            }
          ],
          "certification": "string",
          "genres": [
            "string"
          ],
          "tags": [
            0
          ],
          "added": "1970-01-01T00:00:00Z",
          "addOptions": {
            "ignoreEpisodesWithFiles": true,
            "ignoreEpisodesWithoutFiles": true,
            "monitor": "unknown",
            "searchForMissingEpisodes": true,
            "searchForCutoffUnmetEpisodes": true
          },
          "ratings": {
            "votes": 0,
            "value": 0
          },
          "statistics": {
            "seasonCount": 0,
            "episodeFileCount": 0,
            "episodeCount": 0,
            "totalEpisodeCount": 0,
            "sizeOnDisk": 0,
            "releaseGroups": [
              "string"
            ]
          },
          "episodesChanged": true
        },
        "images": [
          {
            "coverType": "unknown",
            "url": "string",
            "remoteUrl": "string"
          }
        ]
      }
    ],
    "episodeIds": [
      0
    ],
    "quality": {
      "quality": {
        "id": 0,
        "name": "string",
        "source": "unknown",
        "resolution": 0
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
                    "hint": "string"
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
    "releaseType": "unknown",
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

<h3 id="postapiv3manualimport-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

<h1 id="sonarr-mediacover">MediaCover</h1>

## get/api/v3/mediacover/{seriesId}/{filename}

> Code samples

```bash
curl http://localhost:8989/api/v3/mediacover/0/string \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /api/v3/mediacover/{seriesId}/{filename}`

<h3 id="getapiv3mediacoverseriesidfilename-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|seriesId|path|integer(int32)|true|none|
|filename|path|string|true|none|

<h3 id="getapiv3mediacoverseriesidfilename-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

<h1 id="sonarr-mediamanagementconfig">MediaManagementConfig</h1>

## get/api/v3/config/mediamanagement

> Code samples

```bash
curl http://localhost:8989/api/v3/config/mediamanagement \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /api/v3/config/mediamanagement`

> Example responses

> 200 Response

```json
{
  "id": 0,
  "autoUnmonitorPreviouslyDownloadedEpisodes": true,
  "recycleBin": "string",
  "recycleBinCleanupDays": 0,
  "downloadPropersAndRepacks": "preferAndUpgrade",
  "createEmptySeriesFolders": true,
  "deleteEmptyFolders": true,
  "fileDate": "none",
  "rescanAfterRefresh": "always",
  "setPermissionsLinux": true,
  "chmodFolder": "string",
  "chownGroup": "string",
  "episodeTitleRequired": "always",
  "skipFreeSpaceCheckWhenGrabbing": true,
  "skipFreeSpaceCheckWhenImporting": true,
  "minimumFreeSpaceWhenImporting": 0,
  "copyUsingHardlinks": true,
  "useScriptImport": true,
  "scriptImportPath": "string",
  "importExtraFiles": true,
  "extraFileExtensions": "string",
  "enableMediaInfo": true,
  "userRejectedExtensions": "string",
  "seasonPackUpgrade": "all",
  "seasonPackUpgradeThreshold": 0
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
curl http://localhost:8989/api/v3/config/mediamanagement/0 \
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
  "autoUnmonitorPreviouslyDownloadedEpisodes": true,
  "recycleBin": "string",
  "recycleBinCleanupDays": 0,
  "downloadPropersAndRepacks": "preferAndUpgrade",
  "createEmptySeriesFolders": true,
  "deleteEmptyFolders": true,
  "fileDate": "none",
  "rescanAfterRefresh": "always",
  "setPermissionsLinux": true,
  "chmodFolder": "string",
  "chownGroup": "string",
  "episodeTitleRequired": "always",
  "skipFreeSpaceCheckWhenGrabbing": true,
  "skipFreeSpaceCheckWhenImporting": true,
  "minimumFreeSpaceWhenImporting": 0,
  "copyUsingHardlinks": true,
  "useScriptImport": true,
  "scriptImportPath": "string",
  "importExtraFiles": true,
  "extraFileExtensions": "string",
  "enableMediaInfo": true,
  "userRejectedExtensions": "string",
  "seasonPackUpgrade": "all",
  "seasonPackUpgradeThreshold": 0
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
curl http://localhost:8989/api/v3/config/mediamanagement/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}" \
  -d '{
    "id": 0,
    "autoUnmonitorPreviouslyDownloadedEpisodes": true,
    "recycleBin": "string",
    "recycleBinCleanupDays": 0,
    "downloadPropersAndRepacks": "preferAndUpgrade",
    "createEmptySeriesFolders": true,
    "deleteEmptyFolders": true,
    "fileDate": "none",
    "rescanAfterRefresh": "always",
    "setPermissionsLinux": true,
    "chmodFolder": "string",
    "chownGroup": "string",
    "episodeTitleRequired": "always",
    "skipFreeSpaceCheckWhenGrabbing": true,
    "skipFreeSpaceCheckWhenImporting": true,
    "minimumFreeSpaceWhenImporting": 0,
    "copyUsingHardlinks": true,
    "useScriptImport": true,
    "scriptImportPath": "string",
    "importExtraFiles": true,
    "extraFileExtensions": "string",
    "enableMediaInfo": true,
    "userRejectedExtensions": "string",
    "seasonPackUpgrade": "all",
    "seasonPackUpgradeThreshold": 0
  }'
```

`PUT /api/v3/config/mediamanagement/{id}`

> Body parameter

```json
{
  "id": 0,
  "autoUnmonitorPreviouslyDownloadedEpisodes": true,
  "recycleBin": "string",
  "recycleBinCleanupDays": 0,
  "downloadPropersAndRepacks": "preferAndUpgrade",
  "createEmptySeriesFolders": true,
  "deleteEmptyFolders": true,
  "fileDate": "none",
  "rescanAfterRefresh": "always",
  "setPermissionsLinux": true,
  "chmodFolder": "string",
  "chownGroup": "string",
  "episodeTitleRequired": "always",
  "skipFreeSpaceCheckWhenGrabbing": true,
  "skipFreeSpaceCheckWhenImporting": true,
  "minimumFreeSpaceWhenImporting": 0,
  "copyUsingHardlinks": true,
  "useScriptImport": true,
  "scriptImportPath": "string",
  "importExtraFiles": true,
  "extraFileExtensions": "string",
  "enableMediaInfo": true,
  "userRejectedExtensions": "string",
  "seasonPackUpgrade": "all",
  "seasonPackUpgradeThreshold": 0
}
```

<h3 id="putapiv3configmediamanagementid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|body|body|[MediaManagementConfigResource](#schemamediamanagementconfigresource)|false|none|
|» id|body|integer(int32)|false|none|
|» autoUnmonitorPreviouslyDownloadedEpisodes|body|boolean|false|none|
|» recycleBin|body|string \| null|false|none|
|» recycleBinCleanupDays|body|integer(int32)|false|none|
|» downloadPropersAndRepacks|body|[ProperDownloadTypes](#schemaproperdownloadtypes)|false|none|
|» createEmptySeriesFolders|body|boolean|false|none|
|» deleteEmptyFolders|body|boolean|false|none|
|» fileDate|body|[FileDateType](#schemafiledatetype)|false|none|
|» rescanAfterRefresh|body|[RescanAfterRefreshType](#schemarescanafterrefreshtype)|false|none|
|» setPermissionsLinux|body|boolean|false|none|
|» chmodFolder|body|string \| null|false|none|
|» chownGroup|body|string \| null|false|none|
|» episodeTitleRequired|body|[EpisodeTitleRequiredType](#schemaepisodetitlerequiredtype)|false|none|
|» skipFreeSpaceCheckWhenGrabbing|body|boolean|false|none|
|» skipFreeSpaceCheckWhenImporting|body|boolean|false|none|
|» minimumFreeSpaceWhenImporting|body|integer(int32)|false|none|
|» copyUsingHardlinks|body|boolean|false|none|
|» useScriptImport|body|boolean|false|none|
|» scriptImportPath|body|string \| null|false|none|
|» importExtraFiles|body|boolean|false|none|
|» extraFileExtensions|body|string \| null|false|none|
|» enableMediaInfo|body|boolean|false|none|
|» userRejectedExtensions|body|string \| null|false|none|
|» seasonPackUpgrade|body|[SeasonPackUpgradeType](#schemaseasonpackupgradetype)|false|none|
|» seasonPackUpgradeThreshold|body|number(double)|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» downloadPropersAndRepacks|preferAndUpgrade|
|» downloadPropersAndRepacks|doNotUpgrade|
|» downloadPropersAndRepacks|doNotPrefer|
|» fileDate|none|
|» fileDate|localAirDate|
|» fileDate|utcAirDate|
|» rescanAfterRefresh|always|
|» rescanAfterRefresh|afterManual|
|» rescanAfterRefresh|never|
|» episodeTitleRequired|always|
|» episodeTitleRequired|bulkSeasonReleases|
|» episodeTitleRequired|never|
|» seasonPackUpgrade|all|
|» seasonPackUpgrade|threshold|
|» seasonPackUpgrade|any|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "autoUnmonitorPreviouslyDownloadedEpisodes": true,
  "recycleBin": "string",
  "recycleBinCleanupDays": 0,
  "downloadPropersAndRepacks": "preferAndUpgrade",
  "createEmptySeriesFolders": true,
  "deleteEmptyFolders": true,
  "fileDate": "none",
  "rescanAfterRefresh": "always",
  "setPermissionsLinux": true,
  "chmodFolder": "string",
  "chownGroup": "string",
  "episodeTitleRequired": "always",
  "skipFreeSpaceCheckWhenGrabbing": true,
  "skipFreeSpaceCheckWhenImporting": true,
  "minimumFreeSpaceWhenImporting": 0,
  "copyUsingHardlinks": true,
  "useScriptImport": true,
  "scriptImportPath": "string",
  "importExtraFiles": true,
  "extraFileExtensions": "string",
  "enableMediaInfo": true,
  "userRejectedExtensions": "string",
  "seasonPackUpgrade": "all",
  "seasonPackUpgradeThreshold": 0
}
```

<h3 id="putapiv3configmediamanagementid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[MediaManagementConfigResource](#schemamediamanagementconfigresource)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

<h1 id="sonarr-metadata">Metadata</h1>

## get/api/v3/metadata

> Code samples

```bash
curl http://localhost:8989/api/v3/metadata \
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
            "hint": "string"
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
curl http://localhost:8989/api/v3/metadata \
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
            "hint": "string"
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
          "hint": "string"
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
          "hint": "string"
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
|200|OK|OK|[MetadataResource](#schemametadataresource)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## get/api/v3/metadata/{id}

> Code samples

```bash
curl http://localhost:8989/api/v3/metadata/0 \
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
          "hint": "string"
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
curl http://localhost:8989/api/v3/metadata/0 \
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
            "hint": "string"
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
          "hint": "string"
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
          "hint": "string"
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
|200|OK|OK|[MetadataResource](#schemametadataresource)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## delete/api/v3/metadata/{id}

> Code samples

```bash
curl http://localhost:8989/api/v3/metadata/0 \
  -X DELETE \
  -H "X-Api-Key: ${API_KEY}"
```

`DELETE /api/v3/metadata/{id}`

<h3 id="deleteapiv3metadataid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|none|

<h3 id="deleteapiv3metadataid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## get/api/v3/metadata/schema

> Code samples

```bash
curl http://localhost:8989/api/v3/metadata/schema \
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
            "hint": "string"
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
curl http://localhost:8989/api/v3/metadata/test \
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
            "hint": "string"
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
          "hint": "string"
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
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## post/api/v3/metadata/testall

> Code samples

```bash
curl http://localhost:8989/api/v3/metadata/testall \
  -X POST \
  -H "X-Api-Key: ${API_KEY}"
```

`POST /api/v3/metadata/testall`

<h3 id="postapiv3metadatatestall-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## post/api/v3/metadata/action/{name}

> Code samples

```bash
curl http://localhost:8989/api/v3/metadata/action/string \
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
            "hint": "string"
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
          "hint": "string"
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
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

<h1 id="sonarr-missing">Missing</h1>

## get/api/v3/wanted/missing

> Code samples

```bash
curl http://localhost:8989/api/v3/wanted/missing \
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
|includeSeries|query|boolean|false|none|
|includeImages|query|boolean|false|none|
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
      "seriesId": 0,
      "tvdbId": 0,
      "episodeFileId": 0,
      "seasonNumber": 0,
      "episodeNumber": 0,
      "title": "string",
      "airDate": "string",
      "airDateUtc": "1970-01-01T00:00:00Z",
      "lastSearchTime": "1970-01-01T00:00:00Z",
      "runtime": 0,
      "finaleType": "string",
      "overview": "string",
      "episodeFile": {
        "id": 0,
        "seriesId": 0,
        "seasonNumber": 0,
        "relativePath": "string",
        "path": "string",
        "size": 0,
        "dateAdded": "1970-01-01T00:00:00Z",
        "sceneName": "string",
        "releaseGroup": "string",
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
            "resolution": 0
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
                        "hint": "string"
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
        "releaseType": "unknown",
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
        "qualityCutoffNotMet": true
      },
      "hasFile": true,
      "monitored": true,
      "absoluteEpisodeNumber": 0,
      "sceneAbsoluteEpisodeNumber": 0,
      "sceneEpisodeNumber": 0,
      "sceneSeasonNumber": 0,
      "unverifiedSceneNumbering": true,
      "series": {
        "id": 0,
        "title": "string",
        "alternateTitles": [
          {
            "title": "string",
            "seasonNumber": 0,
            "sceneSeasonNumber": 0,
            "sceneOrigin": "string",
            "comment": "string"
          }
        ],
        "sortTitle": "string",
        "status": "continuing",
        "ended": true,
        "profileName": "string",
        "overview": "string",
        "nextAiring": "1970-01-01T00:00:00Z",
        "previousAiring": "1970-01-01T00:00:00Z",
        "network": "string",
        "airTime": "string",
        "images": [
          {
            "coverType": "unknown",
            "url": "string",
            "remoteUrl": "string"
          }
        ],
        "language": {
          "id": 0,
          "name": "string"
        },
        "originalLanguage": {
          "id": 0,
          "name": "string"
        },
        "remotePoster": "string",
        "seasonType": "string",
        "seasons": [
          {
            "seasonNumber": 0,
            "monitored": true,
            "title": "string",
            "statistics": {
              "nextAiring": "1970-01-01T00:00:00Z",
              "previousAiring": "1970-01-01T00:00:00Z",
              "episodeFileCount": 0,
              "episodeCount": 0,
              "totalEpisodeCount": 0,
              "sizeOnDisk": 0,
              "releaseGroups": [
                "string"
              ],
              "percentOfEpisodes": 0
            },
            "images": [
              {
                "coverType": "unknown",
                "url": "string",
                "remoteUrl": "string"
              }
            ]
          }
        ],
        "seasonTypes": [
          {
            "name": "string",
            "type": "string",
            "seasonNumbers": [
              0
            ],
            "episodeCount": 0
          }
        ],
        "translations": [
          {
            "language": {
              "id": 0,
              "name": "string"
            },
            "title": "string",
            "overview": "string"
          }
        ],
        "year": 0,
        "path": "string",
        "pendingPath": "string",
        "qualityProfileId": 0,
        "seasonFolder": true,
        "monitored": true,
        "monitorNewItems": "all",
        "useSceneNumbering": true,
        "runtime": 0,
        "tvdbId": 0,
        "tvRageId": 0,
        "tvMazeId": 0,
        "tmdbId": 0,
        "firstAired": "1970-01-01T00:00:00Z",
        "lastAired": "1970-01-01T00:00:00Z",
        "seriesType": "standard",
        "cleanTitle": "string",
        "originalTitle": "string",
        "cleanOriginalTitle": "string",
        "imdbId": "string",
        "titleSlug": "string",
        "rootFolderPath": "string",
        "folder": "string",
        "folders": [
          {
            "language": {
              "id": 0,
              "name": "string"
            },
            "folder": "string"
          }
        ],
        "certification": "string",
        "genres": [
          "string"
        ],
        "tags": [
          0
        ],
        "added": "1970-01-01T00:00:00Z",
        "addOptions": {
          "ignoreEpisodesWithFiles": true,
          "ignoreEpisodesWithoutFiles": true,
          "monitor": "unknown",
          "searchForMissingEpisodes": true,
          "searchForCutoffUnmetEpisodes": true
        },
        "ratings": {
          "votes": 0,
          "value": 0
        },
        "statistics": {
          "seasonCount": 0,
          "episodeFileCount": 0,
          "episodeCount": 0,
          "totalEpisodeCount": 0,
          "sizeOnDisk": 0,
          "releaseGroups": [
            "string"
          ],
          "percentOfEpisodes": 0
        },
        "episodesChanged": true,
        "languageProfileId": 0
      },
      "images": [
        {
          "coverType": "unknown",
          "url": "string",
          "remoteUrl": "string"
        }
      ]
    }
  ]
}
```

<h3 id="getapiv3wantedmissing-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[EpisodeResourcePagingResource](#schemaepisoderesourcepagingresource)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## get/api/v3/wanted/missing/{id}

> Code samples

```bash
curl http://localhost:8989/api/v3/wanted/missing/0 \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /api/v3/wanted/missing/{id}`

<h3 id="getapiv3wantedmissingid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|none|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "seriesId": 0,
  "tvdbId": 0,
  "episodeFileId": 0,
  "seasonNumber": 0,
  "episodeNumber": 0,
  "title": "string",
  "airDate": "string",
  "airDateUtc": "1970-01-01T00:00:00Z",
  "lastSearchTime": "1970-01-01T00:00:00Z",
  "runtime": 0,
  "finaleType": "string",
  "overview": "string",
  "episodeFile": {
    "id": 0,
    "seriesId": 0,
    "seasonNumber": 0,
    "relativePath": "string",
    "path": "string",
    "size": 0,
    "dateAdded": "1970-01-01T00:00:00Z",
    "sceneName": "string",
    "releaseGroup": "string",
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
        "resolution": 0
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
                    "hint": "string"
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
    "releaseType": "unknown",
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
    "qualityCutoffNotMet": true
  },
  "hasFile": true,
  "monitored": true,
  "absoluteEpisodeNumber": 0,
  "sceneAbsoluteEpisodeNumber": 0,
  "sceneEpisodeNumber": 0,
  "sceneSeasonNumber": 0,
  "unverifiedSceneNumbering": true,
  "series": {
    "id": 0,
    "title": "string",
    "alternateTitles": [
      {
        "title": "string",
        "seasonNumber": 0,
        "sceneSeasonNumber": 0,
        "sceneOrigin": "string",
        "comment": "string"
      }
    ],
    "sortTitle": "string",
    "status": "continuing",
    "ended": true,
    "profileName": "string",
    "overview": "string",
    "nextAiring": "1970-01-01T00:00:00Z",
    "previousAiring": "1970-01-01T00:00:00Z",
    "network": "string",
    "airTime": "string",
    "images": [
      {
        "coverType": "unknown",
        "url": "string",
        "remoteUrl": "string"
      }
    ],
    "language": {
      "id": 0,
      "name": "string"
    },
    "originalLanguage": {
      "id": 0,
      "name": "string"
    },
    "remotePoster": "string",
    "seasonType": "string",
    "seasons": [
      {
        "seasonNumber": 0,
        "monitored": true,
        "title": "string",
        "statistics": {
          "nextAiring": "1970-01-01T00:00:00Z",
          "previousAiring": "1970-01-01T00:00:00Z",
          "episodeFileCount": 0,
          "episodeCount": 0,
          "totalEpisodeCount": 0,
          "sizeOnDisk": 0,
          "releaseGroups": [
            "string"
          ],
          "percentOfEpisodes": 0
        },
        "images": [
          {
            "coverType": "unknown",
            "url": "string",
            "remoteUrl": "string"
          }
        ]
      }
    ],
    "seasonTypes": [
      {
        "name": "string",
        "type": "string",
        "seasonNumbers": [
          0
        ],
        "episodeCount": 0
      }
    ],
    "translations": [
      {
        "language": {
          "id": 0,
          "name": "string"
        },
        "title": "string",
        "overview": "string"
      }
    ],
    "year": 0,
    "path": "string",
    "pendingPath": "string",
    "qualityProfileId": 0,
    "seasonFolder": true,
    "monitored": true,
    "monitorNewItems": "all",
    "useSceneNumbering": true,
    "runtime": 0,
    "tvdbId": 0,
    "tvRageId": 0,
    "tvMazeId": 0,
    "tmdbId": 0,
    "firstAired": "1970-01-01T00:00:00Z",
    "lastAired": "1970-01-01T00:00:00Z",
    "seriesType": "standard",
    "cleanTitle": "string",
    "originalTitle": "string",
    "cleanOriginalTitle": "string",
    "imdbId": "string",
    "titleSlug": "string",
    "rootFolderPath": "string",
    "folder": "string",
    "folders": [
      {
        "language": {
          "id": 0,
          "name": "string"
        },
        "folder": "string"
      }
    ],
    "certification": "string",
    "genres": [
      "string"
    ],
    "tags": [
      0
    ],
    "added": "1970-01-01T00:00:00Z",
    "addOptions": {
      "ignoreEpisodesWithFiles": true,
      "ignoreEpisodesWithoutFiles": true,
      "monitor": "unknown",
      "searchForMissingEpisodes": true,
      "searchForCutoffUnmetEpisodes": true
    },
    "ratings": {
      "votes": 0,
      "value": 0
    },
    "statistics": {
      "seasonCount": 0,
      "episodeFileCount": 0,
      "episodeCount": 0,
      "totalEpisodeCount": 0,
      "sizeOnDisk": 0,
      "releaseGroups": [
        "string"
      ],
      "percentOfEpisodes": 0
    },
    "episodesChanged": true,
    "languageProfileId": 0
  },
  "images": [
    {
      "coverType": "unknown",
      "url": "string",
      "remoteUrl": "string"
    }
  ]
}
```

<h3 id="getapiv3wantedmissingid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[EpisodeResource](#schemaepisoderesource)|
|404|Not Found|Not Found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

<h1 id="sonarr-namingconfig">NamingConfig</h1>

## get/api/v3/config/naming

> Code samples

```bash
curl http://localhost:8989/api/v3/config/naming \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /api/v3/config/naming`

> Example responses

> 200 Response

```json
{
  "id": 0,
  "renameEpisodes": true,
  "replaceIllegalCharacters": true,
  "colonReplacementFormat": 0,
  "customColonReplacementFormat": "string",
  "multiEpisodeStyle": 0,
  "standardEpisodeFormat": "string",
  "dailyEpisodeFormat": "string",
  "animeEpisodeFormat": "string",
  "seriesFolderFormat": "string",
  "seasonFolderFormat": "string",
  "specialsFolderFormat": "string"
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
curl http://localhost:8989/api/v3/config/naming/0 \
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
  "renameEpisodes": true,
  "replaceIllegalCharacters": true,
  "colonReplacementFormat": 0,
  "customColonReplacementFormat": "string",
  "multiEpisodeStyle": 0,
  "standardEpisodeFormat": "string",
  "dailyEpisodeFormat": "string",
  "animeEpisodeFormat": "string",
  "seriesFolderFormat": "string",
  "seasonFolderFormat": "string",
  "specialsFolderFormat": "string"
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
curl http://localhost:8989/api/v3/config/naming/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}" \
  -d '{
    "id": 0,
    "renameEpisodes": true,
    "replaceIllegalCharacters": true,
    "colonReplacementFormat": 0,
    "customColonReplacementFormat": "string",
    "multiEpisodeStyle": 0,
    "standardEpisodeFormat": "string",
    "dailyEpisodeFormat": "string",
    "animeEpisodeFormat": "string",
    "seriesFolderFormat": "string",
    "seasonFolderFormat": "string",
    "specialsFolderFormat": "string"
  }'
```

`PUT /api/v3/config/naming/{id}`

> Body parameter

```json
{
  "id": 0,
  "renameEpisodes": true,
  "replaceIllegalCharacters": true,
  "colonReplacementFormat": 0,
  "customColonReplacementFormat": "string",
  "multiEpisodeStyle": 0,
  "standardEpisodeFormat": "string",
  "dailyEpisodeFormat": "string",
  "animeEpisodeFormat": "string",
  "seriesFolderFormat": "string",
  "seasonFolderFormat": "string",
  "specialsFolderFormat": "string"
}
```

<h3 id="putapiv3confignamingid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|body|body|[NamingConfigResource](#schemanamingconfigresource)|false|none|
|» id|body|integer(int32)|false|none|
|» renameEpisodes|body|boolean|false|none|
|» replaceIllegalCharacters|body|boolean|false|none|
|» colonReplacementFormat|body|integer(int32)|false|none|
|» customColonReplacementFormat|body|string \| null|false|none|
|» multiEpisodeStyle|body|integer(int32)|false|none|
|» standardEpisodeFormat|body|string \| null|false|none|
|» dailyEpisodeFormat|body|string \| null|false|none|
|» animeEpisodeFormat|body|string \| null|false|none|
|» seriesFolderFormat|body|string \| null|false|none|
|» seasonFolderFormat|body|string \| null|false|none|
|» specialsFolderFormat|body|string \| null|false|none|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "renameEpisodes": true,
  "replaceIllegalCharacters": true,
  "colonReplacementFormat": 0,
  "customColonReplacementFormat": "string",
  "multiEpisodeStyle": 0,
  "standardEpisodeFormat": "string",
  "dailyEpisodeFormat": "string",
  "animeEpisodeFormat": "string",
  "seriesFolderFormat": "string",
  "seasonFolderFormat": "string",
  "specialsFolderFormat": "string"
}
```

<h3 id="putapiv3confignamingid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[NamingConfigResource](#schemanamingconfigresource)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## get/api/v3/config/naming/examples

> Code samples

```bash
curl http://localhost:8989/api/v3/config/naming/examples \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /api/v3/config/naming/examples`

<h3 id="getapiv3confignamingexamples-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|renameEpisodes|query|boolean|false|none|
|replaceIllegalCharacters|query|boolean|false|none|
|colonReplacementFormat|query|integer(int32)|false|none|
|customColonReplacementFormat|query|string|false|none|
|multiEpisodeStyle|query|integer(int32)|false|none|
|standardEpisodeFormat|query|string|false|none|
|dailyEpisodeFormat|query|string|false|none|
|animeEpisodeFormat|query|string|false|none|
|seriesFolderFormat|query|string|false|none|
|seasonFolderFormat|query|string|false|none|
|specialsFolderFormat|query|string|false|none|
|id|query|integer(int32)|false|none|
|resourceName|query|string|false|none|

<h3 id="getapiv3confignamingexamples-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

<h1 id="sonarr-notification">Notification</h1>

## get/api/v3/notification

> Code samples

```bash
curl http://localhost:8989/api/v3/notification \
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
            "hint": "string"
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
    "onImportComplete": true,
    "onRename": true,
    "onSeriesAdd": true,
    "onSeriesDelete": true,
    "onEpisodeFileDelete": true,
    "onEpisodeFileDeleteForUpgrade": true,
    "onHealthIssue": true,
    "includeHealthWarnings": true,
    "onHealthRestored": true,
    "onApplicationUpdate": true,
    "onManualInteractionRequired": true,
    "supportsOnGrab": true,
    "supportsOnDownload": true,
    "supportsOnUpgrade": true,
    "supportsOnImportComplete": true,
    "supportsOnRename": true,
    "supportsOnSeriesAdd": true,
    "supportsOnSeriesDelete": true,
    "supportsOnEpisodeFileDelete": true,
    "supportsOnEpisodeFileDeleteForUpgrade": true,
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
curl http://localhost:8989/api/v3/notification \
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
            "hint": "string"
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
    "onImportComplete": true,
    "onRename": true,
    "onSeriesAdd": true,
    "onSeriesDelete": true,
    "onEpisodeFileDelete": true,
    "onEpisodeFileDeleteForUpgrade": true,
    "onHealthIssue": true,
    "includeHealthWarnings": true,
    "onHealthRestored": true,
    "onApplicationUpdate": true,
    "onManualInteractionRequired": true,
    "supportsOnGrab": true,
    "supportsOnDownload": true,
    "supportsOnUpgrade": true,
    "supportsOnImportComplete": true,
    "supportsOnRename": true,
    "supportsOnSeriesAdd": true,
    "supportsOnSeriesDelete": true,
    "supportsOnEpisodeFileDelete": true,
    "supportsOnEpisodeFileDeleteForUpgrade": true,
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
          "hint": "string"
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
  "onImportComplete": true,
  "onRename": true,
  "onSeriesAdd": true,
  "onSeriesDelete": true,
  "onEpisodeFileDelete": true,
  "onEpisodeFileDeleteForUpgrade": true,
  "onHealthIssue": true,
  "includeHealthWarnings": true,
  "onHealthRestored": true,
  "onApplicationUpdate": true,
  "onManualInteractionRequired": true,
  "supportsOnGrab": true,
  "supportsOnDownload": true,
  "supportsOnUpgrade": true,
  "supportsOnImportComplete": true,
  "supportsOnRename": true,
  "supportsOnSeriesAdd": true,
  "supportsOnSeriesDelete": true,
  "supportsOnEpisodeFileDelete": true,
  "supportsOnEpisodeFileDeleteForUpgrade": true,
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
|» onImportComplete|body|boolean|false|none|
|» onRename|body|boolean|false|none|
|» onSeriesAdd|body|boolean|false|none|
|» onSeriesDelete|body|boolean|false|none|
|» onEpisodeFileDelete|body|boolean|false|none|
|» onEpisodeFileDeleteForUpgrade|body|boolean|false|none|
|» onHealthIssue|body|boolean|false|none|
|» includeHealthWarnings|body|boolean|false|none|
|» onHealthRestored|body|boolean|false|none|
|» onApplicationUpdate|body|boolean|false|none|
|» onManualInteractionRequired|body|boolean|false|none|
|» supportsOnGrab|body|boolean|false|none|
|» supportsOnDownload|body|boolean|false|none|
|» supportsOnUpgrade|body|boolean|false|none|
|» supportsOnImportComplete|body|boolean|false|none|
|» supportsOnRename|body|boolean|false|none|
|» supportsOnSeriesAdd|body|boolean|false|none|
|» supportsOnSeriesDelete|body|boolean|false|none|
|» supportsOnEpisodeFileDelete|body|boolean|false|none|
|» supportsOnEpisodeFileDeleteForUpgrade|body|boolean|false|none|
|» supportsOnHealthIssue|body|boolean|false|none|
|» supportsOnHealthRestored|body|boolean|false|none|
|» supportsOnApplicationUpdate|body|boolean|false|none|
|» supportsOnManualInteractionRequired|body|boolean|false|none|
|» testCommand|body|string \| null|false|none|

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
          "hint": "string"
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
  "onImportComplete": true,
  "onRename": true,
  "onSeriesAdd": true,
  "onSeriesDelete": true,
  "onEpisodeFileDelete": true,
  "onEpisodeFileDeleteForUpgrade": true,
  "onHealthIssue": true,
  "includeHealthWarnings": true,
  "onHealthRestored": true,
  "onApplicationUpdate": true,
  "onManualInteractionRequired": true,
  "supportsOnGrab": true,
  "supportsOnDownload": true,
  "supportsOnUpgrade": true,
  "supportsOnImportComplete": true,
  "supportsOnRename": true,
  "supportsOnSeriesAdd": true,
  "supportsOnSeriesDelete": true,
  "supportsOnEpisodeFileDelete": true,
  "supportsOnEpisodeFileDeleteForUpgrade": true,
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
|200|OK|OK|[NotificationResource](#schemanotificationresource)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## get/api/v3/notification/{id}

> Code samples

```bash
curl http://localhost:8989/api/v3/notification/0 \
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
          "hint": "string"
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
  "onImportComplete": true,
  "onRename": true,
  "onSeriesAdd": true,
  "onSeriesDelete": true,
  "onEpisodeFileDelete": true,
  "onEpisodeFileDeleteForUpgrade": true,
  "onHealthIssue": true,
  "includeHealthWarnings": true,
  "onHealthRestored": true,
  "onApplicationUpdate": true,
  "onManualInteractionRequired": true,
  "supportsOnGrab": true,
  "supportsOnDownload": true,
  "supportsOnUpgrade": true,
  "supportsOnImportComplete": true,
  "supportsOnRename": true,
  "supportsOnSeriesAdd": true,
  "supportsOnSeriesDelete": true,
  "supportsOnEpisodeFileDelete": true,
  "supportsOnEpisodeFileDeleteForUpgrade": true,
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
curl http://localhost:8989/api/v3/notification/0 \
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
            "hint": "string"
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
    "onImportComplete": true,
    "onRename": true,
    "onSeriesAdd": true,
    "onSeriesDelete": true,
    "onEpisodeFileDelete": true,
    "onEpisodeFileDeleteForUpgrade": true,
    "onHealthIssue": true,
    "includeHealthWarnings": true,
    "onHealthRestored": true,
    "onApplicationUpdate": true,
    "onManualInteractionRequired": true,
    "supportsOnGrab": true,
    "supportsOnDownload": true,
    "supportsOnUpgrade": true,
    "supportsOnImportComplete": true,
    "supportsOnRename": true,
    "supportsOnSeriesAdd": true,
    "supportsOnSeriesDelete": true,
    "supportsOnEpisodeFileDelete": true,
    "supportsOnEpisodeFileDeleteForUpgrade": true,
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
          "hint": "string"
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
  "onImportComplete": true,
  "onRename": true,
  "onSeriesAdd": true,
  "onSeriesDelete": true,
  "onEpisodeFileDelete": true,
  "onEpisodeFileDeleteForUpgrade": true,
  "onHealthIssue": true,
  "includeHealthWarnings": true,
  "onHealthRestored": true,
  "onApplicationUpdate": true,
  "onManualInteractionRequired": true,
  "supportsOnGrab": true,
  "supportsOnDownload": true,
  "supportsOnUpgrade": true,
  "supportsOnImportComplete": true,
  "supportsOnRename": true,
  "supportsOnSeriesAdd": true,
  "supportsOnSeriesDelete": true,
  "supportsOnEpisodeFileDelete": true,
  "supportsOnEpisodeFileDeleteForUpgrade": true,
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
|» onImportComplete|body|boolean|false|none|
|» onRename|body|boolean|false|none|
|» onSeriesAdd|body|boolean|false|none|
|» onSeriesDelete|body|boolean|false|none|
|» onEpisodeFileDelete|body|boolean|false|none|
|» onEpisodeFileDeleteForUpgrade|body|boolean|false|none|
|» onHealthIssue|body|boolean|false|none|
|» includeHealthWarnings|body|boolean|false|none|
|» onHealthRestored|body|boolean|false|none|
|» onApplicationUpdate|body|boolean|false|none|
|» onManualInteractionRequired|body|boolean|false|none|
|» supportsOnGrab|body|boolean|false|none|
|» supportsOnDownload|body|boolean|false|none|
|» supportsOnUpgrade|body|boolean|false|none|
|» supportsOnImportComplete|body|boolean|false|none|
|» supportsOnRename|body|boolean|false|none|
|» supportsOnSeriesAdd|body|boolean|false|none|
|» supportsOnSeriesDelete|body|boolean|false|none|
|» supportsOnEpisodeFileDelete|body|boolean|false|none|
|» supportsOnEpisodeFileDeleteForUpgrade|body|boolean|false|none|
|» supportsOnHealthIssue|body|boolean|false|none|
|» supportsOnHealthRestored|body|boolean|false|none|
|» supportsOnApplicationUpdate|body|boolean|false|none|
|» supportsOnManualInteractionRequired|body|boolean|false|none|
|» testCommand|body|string \| null|false|none|

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
          "hint": "string"
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
  "onImportComplete": true,
  "onRename": true,
  "onSeriesAdd": true,
  "onSeriesDelete": true,
  "onEpisodeFileDelete": true,
  "onEpisodeFileDeleteForUpgrade": true,
  "onHealthIssue": true,
  "includeHealthWarnings": true,
  "onHealthRestored": true,
  "onApplicationUpdate": true,
  "onManualInteractionRequired": true,
  "supportsOnGrab": true,
  "supportsOnDownload": true,
  "supportsOnUpgrade": true,
  "supportsOnImportComplete": true,
  "supportsOnRename": true,
  "supportsOnSeriesAdd": true,
  "supportsOnSeriesDelete": true,
  "supportsOnEpisodeFileDelete": true,
  "supportsOnEpisodeFileDeleteForUpgrade": true,
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
|200|OK|OK|[NotificationResource](#schemanotificationresource)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## delete/api/v3/notification/{id}

> Code samples

```bash
curl http://localhost:8989/api/v3/notification/0 \
  -X DELETE \
  -H "X-Api-Key: ${API_KEY}"
```

`DELETE /api/v3/notification/{id}`

<h3 id="deleteapiv3notificationid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|none|

<h3 id="deleteapiv3notificationid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## get/api/v3/notification/schema

> Code samples

```bash
curl http://localhost:8989/api/v3/notification/schema \
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
            "hint": "string"
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
    "onImportComplete": true,
    "onRename": true,
    "onSeriesAdd": true,
    "onSeriesDelete": true,
    "onEpisodeFileDelete": true,
    "onEpisodeFileDeleteForUpgrade": true,
    "onHealthIssue": true,
    "includeHealthWarnings": true,
    "onHealthRestored": true,
    "onApplicationUpdate": true,
    "onManualInteractionRequired": true,
    "supportsOnGrab": true,
    "supportsOnDownload": true,
    "supportsOnUpgrade": true,
    "supportsOnImportComplete": true,
    "supportsOnRename": true,
    "supportsOnSeriesAdd": true,
    "supportsOnSeriesDelete": true,
    "supportsOnEpisodeFileDelete": true,
    "supportsOnEpisodeFileDeleteForUpgrade": true,
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
curl http://localhost:8989/api/v3/notification/test \
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
            "hint": "string"
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
    "onImportComplete": true,
    "onRename": true,
    "onSeriesAdd": true,
    "onSeriesDelete": true,
    "onEpisodeFileDelete": true,
    "onEpisodeFileDeleteForUpgrade": true,
    "onHealthIssue": true,
    "includeHealthWarnings": true,
    "onHealthRestored": true,
    "onApplicationUpdate": true,
    "onManualInteractionRequired": true,
    "supportsOnGrab": true,
    "supportsOnDownload": true,
    "supportsOnUpgrade": true,
    "supportsOnImportComplete": true,
    "supportsOnRename": true,
    "supportsOnSeriesAdd": true,
    "supportsOnSeriesDelete": true,
    "supportsOnEpisodeFileDelete": true,
    "supportsOnEpisodeFileDeleteForUpgrade": true,
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
          "hint": "string"
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
  "onImportComplete": true,
  "onRename": true,
  "onSeriesAdd": true,
  "onSeriesDelete": true,
  "onEpisodeFileDelete": true,
  "onEpisodeFileDeleteForUpgrade": true,
  "onHealthIssue": true,
  "includeHealthWarnings": true,
  "onHealthRestored": true,
  "onApplicationUpdate": true,
  "onManualInteractionRequired": true,
  "supportsOnGrab": true,
  "supportsOnDownload": true,
  "supportsOnUpgrade": true,
  "supportsOnImportComplete": true,
  "supportsOnRename": true,
  "supportsOnSeriesAdd": true,
  "supportsOnSeriesDelete": true,
  "supportsOnEpisodeFileDelete": true,
  "supportsOnEpisodeFileDeleteForUpgrade": true,
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
|» onImportComplete|body|boolean|false|none|
|» onRename|body|boolean|false|none|
|» onSeriesAdd|body|boolean|false|none|
|» onSeriesDelete|body|boolean|false|none|
|» onEpisodeFileDelete|body|boolean|false|none|
|» onEpisodeFileDeleteForUpgrade|body|boolean|false|none|
|» onHealthIssue|body|boolean|false|none|
|» includeHealthWarnings|body|boolean|false|none|
|» onHealthRestored|body|boolean|false|none|
|» onApplicationUpdate|body|boolean|false|none|
|» onManualInteractionRequired|body|boolean|false|none|
|» supportsOnGrab|body|boolean|false|none|
|» supportsOnDownload|body|boolean|false|none|
|» supportsOnUpgrade|body|boolean|false|none|
|» supportsOnImportComplete|body|boolean|false|none|
|» supportsOnRename|body|boolean|false|none|
|» supportsOnSeriesAdd|body|boolean|false|none|
|» supportsOnSeriesDelete|body|boolean|false|none|
|» supportsOnEpisodeFileDelete|body|boolean|false|none|
|» supportsOnEpisodeFileDeleteForUpgrade|body|boolean|false|none|
|» supportsOnHealthIssue|body|boolean|false|none|
|» supportsOnHealthRestored|body|boolean|false|none|
|» supportsOnApplicationUpdate|body|boolean|false|none|
|» supportsOnManualInteractionRequired|body|boolean|false|none|
|» testCommand|body|string \| null|false|none|

<h3 id="postapiv3notificationtest-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## post/api/v3/notification/testall

> Code samples

```bash
curl http://localhost:8989/api/v3/notification/testall \
  -X POST \
  -H "X-Api-Key: ${API_KEY}"
```

`POST /api/v3/notification/testall`

<h3 id="postapiv3notificationtestall-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## post/api/v3/notification/action/{name}

> Code samples

```bash
curl http://localhost:8989/api/v3/notification/action/string \
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
            "hint": "string"
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
    "onImportComplete": true,
    "onRename": true,
    "onSeriesAdd": true,
    "onSeriesDelete": true,
    "onEpisodeFileDelete": true,
    "onEpisodeFileDeleteForUpgrade": true,
    "onHealthIssue": true,
    "includeHealthWarnings": true,
    "onHealthRestored": true,
    "onApplicationUpdate": true,
    "onManualInteractionRequired": true,
    "supportsOnGrab": true,
    "supportsOnDownload": true,
    "supportsOnUpgrade": true,
    "supportsOnImportComplete": true,
    "supportsOnRename": true,
    "supportsOnSeriesAdd": true,
    "supportsOnSeriesDelete": true,
    "supportsOnEpisodeFileDelete": true,
    "supportsOnEpisodeFileDeleteForUpgrade": true,
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
          "hint": "string"
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
  "onImportComplete": true,
  "onRename": true,
  "onSeriesAdd": true,
  "onSeriesDelete": true,
  "onEpisodeFileDelete": true,
  "onEpisodeFileDeleteForUpgrade": true,
  "onHealthIssue": true,
  "includeHealthWarnings": true,
  "onHealthRestored": true,
  "onApplicationUpdate": true,
  "onManualInteractionRequired": true,
  "supportsOnGrab": true,
  "supportsOnDownload": true,
  "supportsOnUpgrade": true,
  "supportsOnImportComplete": true,
  "supportsOnRename": true,
  "supportsOnSeriesAdd": true,
  "supportsOnSeriesDelete": true,
  "supportsOnEpisodeFileDelete": true,
  "supportsOnEpisodeFileDeleteForUpgrade": true,
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
|» onImportComplete|body|boolean|false|none|
|» onRename|body|boolean|false|none|
|» onSeriesAdd|body|boolean|false|none|
|» onSeriesDelete|body|boolean|false|none|
|» onEpisodeFileDelete|body|boolean|false|none|
|» onEpisodeFileDeleteForUpgrade|body|boolean|false|none|
|» onHealthIssue|body|boolean|false|none|
|» includeHealthWarnings|body|boolean|false|none|
|» onHealthRestored|body|boolean|false|none|
|» onApplicationUpdate|body|boolean|false|none|
|» onManualInteractionRequired|body|boolean|false|none|
|» supportsOnGrab|body|boolean|false|none|
|» supportsOnDownload|body|boolean|false|none|
|» supportsOnUpgrade|body|boolean|false|none|
|» supportsOnImportComplete|body|boolean|false|none|
|» supportsOnRename|body|boolean|false|none|
|» supportsOnSeriesAdd|body|boolean|false|none|
|» supportsOnSeriesDelete|body|boolean|false|none|
|» supportsOnEpisodeFileDelete|body|boolean|false|none|
|» supportsOnEpisodeFileDeleteForUpgrade|body|boolean|false|none|
|» supportsOnHealthIssue|body|boolean|false|none|
|» supportsOnHealthRestored|body|boolean|false|none|
|» supportsOnApplicationUpdate|body|boolean|false|none|
|» supportsOnManualInteractionRequired|body|boolean|false|none|
|» testCommand|body|string \| null|false|none|

<h3 id="postapiv3notificationactionname-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

<h1 id="sonarr-parse">Parse</h1>

## get/api/v3/parse

> Code samples

```bash
curl http://localhost:8989/api/v3/parse \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /api/v3/parse`

<h3 id="getapiv3parse-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|title|query|string|false|none|
|path|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "title": "string",
  "parsedEpisodeInfo": {
    "releaseTitle": "string",
    "seriesTitle": "string",
    "seriesTitleInfo": {
      "title": "string",
      "titleWithoutYear": "string",
      "year": 0,
      "allTitles": [
        "string"
      ]
    },
    "quality": {
      "quality": {
        "id": 0,
        "name": "string",
        "source": "unknown",
        "resolution": 0
      },
      "revision": {
        "version": 0,
        "real": 0,
        "isRepack": true
      }
    },
    "seasonNumbers": [
      0
    ],
    "seasonNumber": 0,
    "episodeNumbers": [
      0
    ],
    "absoluteEpisodeNumbers": [
      0
    ],
    "specialAbsoluteEpisodeNumbers": [
      0
    ],
    "airDate": "string",
    "languages": [
      {
        "id": 0,
        "name": "string"
      }
    ],
    "fullSeason": true,
    "isPartialSeason": true,
    "isMultiSeason": true,
    "isSeasonExtra": true,
    "isSplitEpisode": true,
    "isMiniSeries": true,
    "special": true,
    "releaseGroup": "string",
    "releaseHash": "string",
    "seasonPart": 0,
    "releaseTokens": "string",
    "dailyPart": 0,
    "isDaily": true,
    "isAbsoluteNumbering": true,
    "isPossibleSpecialEpisode": true,
    "isPossibleSceneSeasonSpecial": true,
    "releaseType": "unknown"
  },
  "series": {
    "id": 0,
    "title": "string",
    "alternateTitles": [
      {
        "title": "string",
        "seasonNumber": 0,
        "sceneSeasonNumber": 0,
        "sceneOrigin": "string",
        "comment": "string"
      }
    ],
    "sortTitle": "string",
    "status": "continuing",
    "ended": true,
    "profileName": "string",
    "overview": "string",
    "nextAiring": "1970-01-01T00:00:00Z",
    "previousAiring": "1970-01-01T00:00:00Z",
    "network": "string",
    "airTime": "string",
    "images": [
      {
        "coverType": "unknown",
        "url": "string",
        "remoteUrl": "string"
      }
    ],
    "language": {
      "id": 0,
      "name": "string"
    },
    "originalLanguage": {
      "id": 0,
      "name": "string"
    },
    "remotePoster": "string",
    "seasonType": "string",
    "seasons": [
      {
        "seasonNumber": 0,
        "monitored": true,
        "title": "string",
        "statistics": {
          "nextAiring": "1970-01-01T00:00:00Z",
          "previousAiring": "1970-01-01T00:00:00Z",
          "episodeFileCount": 0,
          "episodeCount": 0,
          "totalEpisodeCount": 0,
          "sizeOnDisk": 0,
          "releaseGroups": [
            "string"
          ],
          "percentOfEpisodes": 0
        },
        "images": [
          {
            "coverType": "unknown",
            "url": "string",
            "remoteUrl": "string"
          }
        ]
      }
    ],
    "seasonTypes": [
      {
        "name": "string",
        "type": "string",
        "seasonNumbers": [
          0
        ],
        "episodeCount": 0
      }
    ],
    "translations": [
      {
        "language": {
          "id": 0,
          "name": "string"
        },
        "title": "string",
        "overview": "string"
      }
    ],
    "year": 0,
    "path": "string",
    "pendingPath": "string",
    "qualityProfileId": 0,
    "seasonFolder": true,
    "monitored": true,
    "monitorNewItems": "all",
    "useSceneNumbering": true,
    "runtime": 0,
    "tvdbId": 0,
    "tvRageId": 0,
    "tvMazeId": 0,
    "tmdbId": 0,
    "firstAired": "1970-01-01T00:00:00Z",
    "lastAired": "1970-01-01T00:00:00Z",
    "seriesType": "standard",
    "cleanTitle": "string",
    "originalTitle": "string",
    "cleanOriginalTitle": "string",
    "imdbId": "string",
    "titleSlug": "string",
    "rootFolderPath": "string",
    "folder": "string",
    "folders": [
      {
        "language": {
          "id": 0,
          "name": "string"
        },
        "folder": "string"
      }
    ],
    "certification": "string",
    "genres": [
      "string"
    ],
    "tags": [
      0
    ],
    "added": "1970-01-01T00:00:00Z",
    "addOptions": {
      "ignoreEpisodesWithFiles": true,
      "ignoreEpisodesWithoutFiles": true,
      "monitor": "unknown",
      "searchForMissingEpisodes": true,
      "searchForCutoffUnmetEpisodes": true
    },
    "ratings": {
      "votes": 0,
      "value": 0
    },
    "statistics": {
      "seasonCount": 0,
      "episodeFileCount": 0,
      "episodeCount": 0,
      "totalEpisodeCount": 0,
      "sizeOnDisk": 0,
      "releaseGroups": [
        "string"
      ],
      "percentOfEpisodes": 0
    },
    "episodesChanged": true,
    "languageProfileId": 0
  },
  "episodes": [
    {
      "id": 0,
      "seriesId": 0,
      "tvdbId": 0,
      "episodeFileId": 0,
      "seasonNumber": 0,
      "episodeNumber": 0,
      "title": "string",
      "airDate": "string",
      "airDateUtc": "1970-01-01T00:00:00Z",
      "lastSearchTime": "1970-01-01T00:00:00Z",
      "runtime": 0,
      "finaleType": "string",
      "overview": "string",
      "episodeFile": {
        "id": 0,
        "seriesId": 0,
        "seasonNumber": 0,
        "relativePath": "string",
        "path": "string",
        "size": 0,
        "dateAdded": "1970-01-01T00:00:00Z",
        "sceneName": "string",
        "releaseGroup": "string",
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
            "resolution": 0
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
                        "hint": "string"
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
        "releaseType": "unknown",
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
        "qualityCutoffNotMet": true
      },
      "hasFile": true,
      "monitored": true,
      "absoluteEpisodeNumber": 0,
      "sceneAbsoluteEpisodeNumber": 0,
      "sceneEpisodeNumber": 0,
      "sceneSeasonNumber": 0,
      "unverifiedSceneNumbering": true,
      "series": {
        "id": 0,
        "title": "string",
        "alternateTitles": [
          {
            "title": "string",
            "seasonNumber": 0,
            "sceneSeasonNumber": 0,
            "sceneOrigin": "string",
            "comment": "string"
          }
        ],
        "sortTitle": "string",
        "status": "continuing",
        "ended": true,
        "profileName": "string",
        "overview": "string",
        "nextAiring": "1970-01-01T00:00:00Z",
        "previousAiring": "1970-01-01T00:00:00Z",
        "network": "string",
        "airTime": "string",
        "images": [
          {
            "coverType": "unknown",
            "url": "string",
            "remoteUrl": "string"
          }
        ],
        "language": {
          "id": 0,
          "name": "string"
        },
        "originalLanguage": {
          "id": 0,
          "name": "string"
        },
        "remotePoster": "string",
        "seasonType": "string",
        "seasons": [
          {
            "seasonNumber": 0,
            "monitored": true,
            "title": "string",
            "statistics": {
              "nextAiring": "1970-01-01T00:00:00Z",
              "previousAiring": "1970-01-01T00:00:00Z",
              "episodeFileCount": 0,
              "episodeCount": 0,
              "totalEpisodeCount": 0,
              "sizeOnDisk": 0,
              "releaseGroups": [
                "string"
              ],
              "percentOfEpisodes": 0
            },
            "images": [
              {
                "coverType": "unknown",
                "url": "string",
                "remoteUrl": "string"
              }
            ]
          }
        ],
        "seasonTypes": [
          {
            "name": "string",
            "type": "string",
            "seasonNumbers": [
              0
            ],
            "episodeCount": 0
          }
        ],
        "translations": [
          {
            "language": {
              "id": 0,
              "name": "string"
            },
            "title": "string",
            "overview": "string"
          }
        ],
        "year": 0,
        "path": "string",
        "pendingPath": "string",
        "qualityProfileId": 0,
        "seasonFolder": true,
        "monitored": true,
        "monitorNewItems": "all",
        "useSceneNumbering": true,
        "runtime": 0,
        "tvdbId": 0,
        "tvRageId": 0,
        "tvMazeId": 0,
        "tmdbId": 0,
        "firstAired": "1970-01-01T00:00:00Z",
        "lastAired": "1970-01-01T00:00:00Z",
        "seriesType": "standard",
        "cleanTitle": "string",
        "originalTitle": "string",
        "cleanOriginalTitle": "string",
        "imdbId": "string",
        "titleSlug": "string",
        "rootFolderPath": "string",
        "folder": "string",
        "folders": [
          {
            "language": {
              "id": 0,
              "name": "string"
            },
            "folder": "string"
          }
        ],
        "certification": "string",
        "genres": [
          "string"
        ],
        "tags": [
          0
        ],
        "added": "1970-01-01T00:00:00Z",
        "addOptions": {
          "ignoreEpisodesWithFiles": true,
          "ignoreEpisodesWithoutFiles": true,
          "monitor": "unknown",
          "searchForMissingEpisodes": true,
          "searchForCutoffUnmetEpisodes": true
        },
        "ratings": {
          "votes": 0,
          "value": 0
        },
        "statistics": {
          "seasonCount": 0,
          "episodeFileCount": 0,
          "episodeCount": 0,
          "totalEpisodeCount": 0,
          "sizeOnDisk": 0,
          "releaseGroups": [
            "string"
          ],
          "percentOfEpisodes": 0
        },
        "episodesChanged": true,
        "languageProfileId": 0
      },
      "images": [
        {
          "coverType": "unknown",
          "url": "string",
          "remoteUrl": "string"
        }
      ]
    }
  ],
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
                  "hint": "string"
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

<h1 id="sonarr-ping">Ping</h1>

## get/ping

> Code samples

```bash
curl http://localhost:8989/ping \
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
curl http://localhost:8989/ping \
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

<h1 id="sonarr-qualitydefinition">QualityDefinition</h1>

## get/api/v3/qualitydefinition/{id}

> Code samples

```bash
curl http://localhost:8989/api/v3/qualitydefinition/0 \
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
    "resolution": 0
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
curl http://localhost:8989/api/v3/qualitydefinition/string \
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
      "resolution": 0
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
    "resolution": 0
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

> 200 Response

```json
{
  "id": 0,
  "quality": {
    "id": 0,
    "name": "string",
    "source": "unknown",
    "resolution": 0
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
|200|OK|OK|[QualityDefinitionResource](#schemaqualitydefinitionresource)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## get/api/v3/qualitydefinition

> Code samples

```bash
curl http://localhost:8989/api/v3/qualitydefinition \
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
      "resolution": 0
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
curl http://localhost:8989/api/v3/qualitydefinition/update \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H "X-Api-Key: ${API_KEY}" \
  -d '[
    {
      "id": 0,
      "quality": {
        "id": 0,
        "name": "string",
        "source": "unknown",
        "resolution": 0
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
      "resolution": 0
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

<h3 id="putapiv3qualitydefinitionupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## get/api/v3/qualitydefinition/limits

> Code samples

```bash
curl http://localhost:8989/api/v3/qualitydefinition/limits \
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

<h1 id="sonarr-qualityprofile">QualityProfile</h1>

## get/api/v3/qualityprofile

> Code samples

```bash
curl http://localhost:8989/api/v3/qualityprofile \
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
          "resolution": 0
        },
        "items": [
          {}
        ],
        "allowed": true,
        "minSize": 0,
        "maxSize": 0,
        "preferredSize": 0
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
    ]
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
curl http://localhost:8989/api/v3/qualityprofile \
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
          "resolution": 0
        },
        "items": [
          {}
        ],
        "allowed": true,
        "minSize": 0,
        "maxSize": 0,
        "preferredSize": 0
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
    ]
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
        "resolution": 0
      },
      "items": [
        {}
      ],
      "allowed": true,
      "minSize": 0,
      "maxSize": 0,
      "preferredSize": 0
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
  ]
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
        "resolution": 0
      },
      "items": [
        {}
      ],
      "allowed": true,
      "minSize": 0,
      "maxSize": 0,
      "preferredSize": 0
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
  ]
}
```

<h3 id="postapiv3qualityprofile-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[QualityProfileResource](#schemaqualityprofileresource)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## get/api/v3/qualityprofile/{id}

> Code samples

```bash
curl http://localhost:8989/api/v3/qualityprofile/0 \
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
        "resolution": 0
      },
      "items": [
        {}
      ],
      "allowed": true,
      "minSize": 0,
      "maxSize": 0,
      "preferredSize": 0
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
  ]
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
curl http://localhost:8989/api/v3/qualityprofile/string \
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
          "resolution": 0
        },
        "items": [
          {}
        ],
        "allowed": true,
        "minSize": 0,
        "maxSize": 0,
        "preferredSize": 0
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
    ]
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
        "resolution": 0
      },
      "items": [
        {}
      ],
      "allowed": true,
      "minSize": 0,
      "maxSize": 0,
      "preferredSize": 0
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
  ]
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
        "resolution": 0
      },
      "items": [
        {}
      ],
      "allowed": true,
      "minSize": 0,
      "maxSize": 0,
      "preferredSize": 0
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
  ]
}
```

<h3 id="putapiv3qualityprofileid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[QualityProfileResource](#schemaqualityprofileresource)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## delete/api/v3/qualityprofile/{id}

> Code samples

```bash
curl http://localhost:8989/api/v3/qualityprofile/0 \
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

<h1 id="sonarr-qualityprofileschema">QualityProfileSchema</h1>

## get/api/v3/qualityprofile/schema

> Code samples

```bash
curl http://localhost:8989/api/v3/qualityprofile/schema \
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
        "resolution": 0
      },
      "items": [
        {}
      ],
      "allowed": true,
      "minSize": 0,
      "maxSize": 0,
      "preferredSize": 0
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
  ]
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

<h1 id="sonarr-queue">Queue</h1>

## delete/api/v3/queue/{id}

> Code samples

```bash
curl http://localhost:8989/api/v3/queue/0 \
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

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## delete/api/v3/queue/bulk

> Code samples

```bash
curl http://localhost:8989/api/v3/queue/bulk \
  -X DELETE \
  -H 'Content-Type: application/json' \
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

<h3 id="deleteapiv3queuebulk-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## get/api/v3/queue

> Code samples

```bash
curl http://localhost:8989/api/v3/queue \
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
|includeUnknownSeriesItems|query|boolean|false|none|
|includeSeries|query|boolean|false|none|
|includeEpisode|query|boolean|false|none|
|seriesIds|query|[integer(int32)]|false|none|
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
      "seriesId": 0,
      "episodeId": 0,
      "seasonNumber": 0,
      "series": {
        "id": 0,
        "title": "string",
        "alternateTitles": [
          {
            "title": "string",
            "seasonNumber": 0,
            "sceneSeasonNumber": 0,
            "sceneOrigin": "string",
            "comment": "string"
          }
        ],
        "sortTitle": "string",
        "status": "continuing",
        "ended": true,
        "profileName": "string",
        "overview": "string",
        "nextAiring": "1970-01-01T00:00:00Z",
        "previousAiring": "1970-01-01T00:00:00Z",
        "network": "string",
        "airTime": "string",
        "images": [
          {
            "coverType": "unknown",
            "url": "string",
            "remoteUrl": "string"
          }
        ],
        "language": {
          "id": 0,
          "name": "string"
        },
        "originalLanguage": {
          "id": 0,
          "name": "string"
        },
        "remotePoster": "string",
        "seasonType": "string",
        "seasons": [
          {
            "seasonNumber": 0,
            "monitored": true,
            "title": "string",
            "statistics": {
              "nextAiring": "1970-01-01T00:00:00Z",
              "previousAiring": "1970-01-01T00:00:00Z",
              "episodeFileCount": 0,
              "episodeCount": 0,
              "totalEpisodeCount": 0,
              "sizeOnDisk": 0,
              "releaseGroups": [
                "string"
              ],
              "percentOfEpisodes": 0
            },
            "images": [
              {
                "coverType": "unknown",
                "url": "string",
                "remoteUrl": "string"
              }
            ]
          }
        ],
        "seasonTypes": [
          {
            "name": "string",
            "type": "string",
            "seasonNumbers": [
              0
            ],
            "episodeCount": 0
          }
        ],
        "translations": [
          {
            "language": {
              "id": 0,
              "name": "string"
            },
            "title": "string",
            "overview": "string"
          }
        ],
        "year": 0,
        "path": "string",
        "pendingPath": "string",
        "qualityProfileId": 0,
        "seasonFolder": true,
        "monitored": true,
        "monitorNewItems": "all",
        "useSceneNumbering": true,
        "runtime": 0,
        "tvdbId": 0,
        "tvRageId": 0,
        "tvMazeId": 0,
        "tmdbId": 0,
        "firstAired": "1970-01-01T00:00:00Z",
        "lastAired": "1970-01-01T00:00:00Z",
        "seriesType": "standard",
        "cleanTitle": "string",
        "originalTitle": "string",
        "cleanOriginalTitle": "string",
        "imdbId": "string",
        "titleSlug": "string",
        "rootFolderPath": "string",
        "folder": "string",
        "folders": [
          {
            "language": {
              "id": 0,
              "name": "string"
            },
            "folder": "string"
          }
        ],
        "certification": "string",
        "genres": [
          "string"
        ],
        "tags": [
          0
        ],
        "added": "1970-01-01T00:00:00Z",
        "addOptions": {
          "ignoreEpisodesWithFiles": true,
          "ignoreEpisodesWithoutFiles": true,
          "monitor": "unknown",
          "searchForMissingEpisodes": true,
          "searchForCutoffUnmetEpisodes": true
        },
        "ratings": {
          "votes": 0,
          "value": 0
        },
        "statistics": {
          "seasonCount": 0,
          "episodeFileCount": 0,
          "episodeCount": 0,
          "totalEpisodeCount": 0,
          "sizeOnDisk": 0,
          "releaseGroups": [
            "string"
          ],
          "percentOfEpisodes": 0
        },
        "episodesChanged": true,
        "languageProfileId": 0
      },
      "episode": {
        "id": 0,
        "seriesId": 0,
        "tvdbId": 0,
        "episodeFileId": 0,
        "seasonNumber": 0,
        "episodeNumber": 0,
        "title": "string",
        "airDate": "string",
        "airDateUtc": "1970-01-01T00:00:00Z",
        "lastSearchTime": "1970-01-01T00:00:00Z",
        "runtime": 0,
        "finaleType": "string",
        "overview": "string",
        "episodeFile": {
          "id": 0,
          "seriesId": 0,
          "seasonNumber": 0,
          "relativePath": "string",
          "path": "string",
          "size": 0,
          "dateAdded": "1970-01-01T00:00:00Z",
          "sceneName": "string",
          "releaseGroup": "string",
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
              "resolution": 0
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
                          "hint": "string"
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
          "releaseType": "unknown",
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
          "qualityCutoffNotMet": true
        },
        "hasFile": true,
        "monitored": true,
        "absoluteEpisodeNumber": 0,
        "sceneAbsoluteEpisodeNumber": 0,
        "sceneEpisodeNumber": 0,
        "sceneSeasonNumber": 0,
        "unverifiedSceneNumbering": true,
        "series": {
          "id": 0,
          "title": "string",
          "alternateTitles": [
            {
              "title": "string",
              "seasonNumber": 0,
              "sceneSeasonNumber": 0,
              "sceneOrigin": "string",
              "comment": "string"
            }
          ],
          "sortTitle": "string",
          "status": "continuing",
          "ended": true,
          "profileName": "string",
          "overview": "string",
          "nextAiring": "1970-01-01T00:00:00Z",
          "previousAiring": "1970-01-01T00:00:00Z",
          "network": "string",
          "airTime": "string",
          "images": [
            {
              "coverType": "unknown",
              "url": "string",
              "remoteUrl": "string"
            }
          ],
          "language": {
            "id": 0,
            "name": "string"
          },
          "originalLanguage": {
            "id": 0,
            "name": "string"
          },
          "remotePoster": "string",
          "seasonType": "string",
          "seasons": [
            {
              "seasonNumber": 0,
              "monitored": true,
              "title": "string",
              "statistics": {
                "nextAiring": "1970-01-01T00:00:00Z",
                "previousAiring": "1970-01-01T00:00:00Z",
                "episodeFileCount": 0,
                "episodeCount": 0,
                "totalEpisodeCount": 0,
                "sizeOnDisk": 0,
                "releaseGroups": [
                  "string"
                ],
                "percentOfEpisodes": 0
              },
              "images": [
                {
                  "coverType": "unknown",
                  "url": "string",
                  "remoteUrl": "string"
                }
              ]
            }
          ],
          "seasonTypes": [
            {
              "name": "string",
              "type": "string",
              "seasonNumbers": [
                0
              ],
              "episodeCount": 0
            }
          ],
          "translations": [
            {
              "language": {
                "id": 0,
                "name": "string"
              },
              "title": "string",
              "overview": "string"
            }
          ],
          "year": 0,
          "path": "string",
          "pendingPath": "string",
          "qualityProfileId": 0,
          "seasonFolder": true,
          "monitored": true,
          "monitorNewItems": "all",
          "useSceneNumbering": true,
          "runtime": 0,
          "tvdbId": 0,
          "tvRageId": 0,
          "tvMazeId": 0,
          "tmdbId": 0,
          "firstAired": "1970-01-01T00:00:00Z",
          "lastAired": "1970-01-01T00:00:00Z",
          "seriesType": "standard",
          "cleanTitle": "string",
          "originalTitle": "string",
          "cleanOriginalTitle": "string",
          "imdbId": "string",
          "titleSlug": "string",
          "rootFolderPath": "string",
          "folder": "string",
          "folders": [
            {
              "language": {
                "id": 0,
                "name": "string"
              },
              "folder": "string"
            }
          ],
          "certification": "string",
          "genres": [
            "string"
          ],
          "tags": [
            0
          ],
          "added": "1970-01-01T00:00:00Z",
          "addOptions": {
            "ignoreEpisodesWithFiles": true,
            "ignoreEpisodesWithoutFiles": true,
            "monitor": "unknown",
            "searchForMissingEpisodes": true,
            "searchForCutoffUnmetEpisodes": true
          },
          "ratings": {
            "votes": 0,
            "value": 0
          },
          "statistics": {
            "seasonCount": 0,
            "episodeFileCount": 0,
            "episodeCount": 0,
            "totalEpisodeCount": 0,
            "sizeOnDisk": 0,
            "releaseGroups": [
              "string"
            ],
            "percentOfEpisodes": 0
          },
          "episodesChanged": true,
          "languageProfileId": 0
        },
        "images": [
          {
            "coverType": "unknown",
            "url": "string",
            "remoteUrl": "string"
          }
        ]
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
          "resolution": 0
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
                      "hint": "string"
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
      "episodeHasFile": true,
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

<h1 id="sonarr-queueaction">QueueAction</h1>

## post/api/v3/queue/grab/{id}

> Code samples

```bash
curl http://localhost:8989/api/v3/queue/grab/0 \
  -X POST \
  -H "X-Api-Key: ${API_KEY}"
```

`POST /api/v3/queue/grab/{id}`

<h3 id="postapiv3queuegrabid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|none|

<h3 id="postapiv3queuegrabid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## post/api/v3/queue/grab/bulk

> Code samples

```bash
curl http://localhost:8989/api/v3/queue/grab/bulk \
  -X POST \
  -H 'Content-Type: application/json' \
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

<h3 id="postapiv3queuegrabbulk-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

<h1 id="sonarr-queuedetails">QueueDetails</h1>

## get/api/v3/queue/details

> Code samples

```bash
curl http://localhost:8989/api/v3/queue/details \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /api/v3/queue/details`

<h3 id="getapiv3queuedetails-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|seriesId|query|integer(int32)|false|none|
|episodeIds|query|[integer(int32)]|false|none|
|includeSeries|query|boolean|false|none|
|includeEpisode|query|boolean|false|none|

> Example responses

> 200 Response

```json
[
  {
    "id": 0,
    "seriesId": 0,
    "episodeId": 0,
    "seasonNumber": 0,
    "series": {
      "id": 0,
      "title": "string",
      "alternateTitles": [
        {
          "title": "string",
          "seasonNumber": 0,
          "sceneSeasonNumber": 0,
          "sceneOrigin": "string",
          "comment": "string"
        }
      ],
      "sortTitle": "string",
      "status": "continuing",
      "ended": true,
      "profileName": "string",
      "overview": "string",
      "nextAiring": "1970-01-01T00:00:00Z",
      "previousAiring": "1970-01-01T00:00:00Z",
      "network": "string",
      "airTime": "string",
      "images": [
        {
          "coverType": "unknown",
          "url": "string",
          "remoteUrl": "string"
        }
      ],
      "language": {
        "id": 0,
        "name": "string"
      },
      "originalLanguage": {
        "id": 0,
        "name": "string"
      },
      "remotePoster": "string",
      "seasonType": "string",
      "seasons": [
        {
          "seasonNumber": 0,
          "monitored": true,
          "title": "string",
          "statistics": {
            "nextAiring": "1970-01-01T00:00:00Z",
            "previousAiring": "1970-01-01T00:00:00Z",
            "episodeFileCount": 0,
            "episodeCount": 0,
            "totalEpisodeCount": 0,
            "sizeOnDisk": 0,
            "releaseGroups": [
              "string"
            ],
            "percentOfEpisodes": 0
          },
          "images": [
            {
              "coverType": "unknown",
              "url": "string",
              "remoteUrl": "string"
            }
          ]
        }
      ],
      "seasonTypes": [
        {
          "name": "string",
          "type": "string",
          "seasonNumbers": [
            0
          ],
          "episodeCount": 0
        }
      ],
      "translations": [
        {
          "language": {
            "id": 0,
            "name": "string"
          },
          "title": "string",
          "overview": "string"
        }
      ],
      "year": 0,
      "path": "string",
      "pendingPath": "string",
      "qualityProfileId": 0,
      "seasonFolder": true,
      "monitored": true,
      "monitorNewItems": "all",
      "useSceneNumbering": true,
      "runtime": 0,
      "tvdbId": 0,
      "tvRageId": 0,
      "tvMazeId": 0,
      "tmdbId": 0,
      "firstAired": "1970-01-01T00:00:00Z",
      "lastAired": "1970-01-01T00:00:00Z",
      "seriesType": "standard",
      "cleanTitle": "string",
      "originalTitle": "string",
      "cleanOriginalTitle": "string",
      "imdbId": "string",
      "titleSlug": "string",
      "rootFolderPath": "string",
      "folder": "string",
      "folders": [
        {
          "language": {
            "id": 0,
            "name": "string"
          },
          "folder": "string"
        }
      ],
      "certification": "string",
      "genres": [
        "string"
      ],
      "tags": [
        0
      ],
      "added": "1970-01-01T00:00:00Z",
      "addOptions": {
        "ignoreEpisodesWithFiles": true,
        "ignoreEpisodesWithoutFiles": true,
        "monitor": "unknown",
        "searchForMissingEpisodes": true,
        "searchForCutoffUnmetEpisodes": true
      },
      "ratings": {
        "votes": 0,
        "value": 0
      },
      "statistics": {
        "seasonCount": 0,
        "episodeFileCount": 0,
        "episodeCount": 0,
        "totalEpisodeCount": 0,
        "sizeOnDisk": 0,
        "releaseGroups": [
          "string"
        ],
        "percentOfEpisodes": 0
      },
      "episodesChanged": true,
      "languageProfileId": 0
    },
    "episode": {
      "id": 0,
      "seriesId": 0,
      "tvdbId": 0,
      "episodeFileId": 0,
      "seasonNumber": 0,
      "episodeNumber": 0,
      "title": "string",
      "airDate": "string",
      "airDateUtc": "1970-01-01T00:00:00Z",
      "lastSearchTime": "1970-01-01T00:00:00Z",
      "runtime": 0,
      "finaleType": "string",
      "overview": "string",
      "episodeFile": {
        "id": 0,
        "seriesId": 0,
        "seasonNumber": 0,
        "relativePath": "string",
        "path": "string",
        "size": 0,
        "dateAdded": "1970-01-01T00:00:00Z",
        "sceneName": "string",
        "releaseGroup": "string",
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
            "resolution": 0
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
                        "hint": "string"
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
        "releaseType": "unknown",
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
        "qualityCutoffNotMet": true
      },
      "hasFile": true,
      "monitored": true,
      "absoluteEpisodeNumber": 0,
      "sceneAbsoluteEpisodeNumber": 0,
      "sceneEpisodeNumber": 0,
      "sceneSeasonNumber": 0,
      "unverifiedSceneNumbering": true,
      "series": {
        "id": 0,
        "title": "string",
        "alternateTitles": [
          {
            "title": "string",
            "seasonNumber": 0,
            "sceneSeasonNumber": 0,
            "sceneOrigin": "string",
            "comment": "string"
          }
        ],
        "sortTitle": "string",
        "status": "continuing",
        "ended": true,
        "profileName": "string",
        "overview": "string",
        "nextAiring": "1970-01-01T00:00:00Z",
        "previousAiring": "1970-01-01T00:00:00Z",
        "network": "string",
        "airTime": "string",
        "images": [
          {
            "coverType": "unknown",
            "url": "string",
            "remoteUrl": "string"
          }
        ],
        "language": {
          "id": 0,
          "name": "string"
        },
        "originalLanguage": {
          "id": 0,
          "name": "string"
        },
        "remotePoster": "string",
        "seasonType": "string",
        "seasons": [
          {
            "seasonNumber": 0,
            "monitored": true,
            "title": "string",
            "statistics": {
              "nextAiring": "1970-01-01T00:00:00Z",
              "previousAiring": "1970-01-01T00:00:00Z",
              "episodeFileCount": 0,
              "episodeCount": 0,
              "totalEpisodeCount": 0,
              "sizeOnDisk": 0,
              "releaseGroups": [
                "string"
              ],
              "percentOfEpisodes": 0
            },
            "images": [
              {
                "coverType": "unknown",
                "url": "string",
                "remoteUrl": "string"
              }
            ]
          }
        ],
        "seasonTypes": [
          {
            "name": "string",
            "type": "string",
            "seasonNumbers": [
              0
            ],
            "episodeCount": 0
          }
        ],
        "translations": [
          {
            "language": {
              "id": 0,
              "name": "string"
            },
            "title": "string",
            "overview": "string"
          }
        ],
        "year": 0,
        "path": "string",
        "pendingPath": "string",
        "qualityProfileId": 0,
        "seasonFolder": true,
        "monitored": true,
        "monitorNewItems": "all",
        "useSceneNumbering": true,
        "runtime": 0,
        "tvdbId": 0,
        "tvRageId": 0,
        "tvMazeId": 0,
        "tmdbId": 0,
        "firstAired": "1970-01-01T00:00:00Z",
        "lastAired": "1970-01-01T00:00:00Z",
        "seriesType": "standard",
        "cleanTitle": "string",
        "originalTitle": "string",
        "cleanOriginalTitle": "string",
        "imdbId": "string",
        "titleSlug": "string",
        "rootFolderPath": "string",
        "folder": "string",
        "folders": [
          {
            "language": {
              "id": 0,
              "name": "string"
            },
            "folder": "string"
          }
        ],
        "certification": "string",
        "genres": [
          "string"
        ],
        "tags": [
          0
        ],
        "added": "1970-01-01T00:00:00Z",
        "addOptions": {
          "ignoreEpisodesWithFiles": true,
          "ignoreEpisodesWithoutFiles": true,
          "monitor": "unknown",
          "searchForMissingEpisodes": true,
          "searchForCutoffUnmetEpisodes": true
        },
        "ratings": {
          "votes": 0,
          "value": 0
        },
        "statistics": {
          "seasonCount": 0,
          "episodeFileCount": 0,
          "episodeCount": 0,
          "totalEpisodeCount": 0,
          "sizeOnDisk": 0,
          "releaseGroups": [
            "string"
          ],
          "percentOfEpisodes": 0
        },
        "episodesChanged": true,
        "languageProfileId": 0
      },
      "images": [
        {
          "coverType": "unknown",
          "url": "string",
          "remoteUrl": "string"
        }
      ]
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
        "resolution": 0
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
                    "hint": "string"
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
    "episodeHasFile": true,
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

<h1 id="sonarr-queuestatus">QueueStatus</h1>

## get/api/v3/queue/status

> Code samples

```bash
curl http://localhost:8989/api/v3/queue/status \
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

<h1 id="sonarr-release">Release</h1>

## get/api/v3/release

> Code samples

```bash
curl http://localhost:8989/api/v3/release \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /api/v3/release`

<h3 id="getapiv3release-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|seriesId|query|integer(int32)|false|none|
|episodeId|query|integer(int32)|false|none|
|seasonNumber|query|integer(int32)|false|none|

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
        "resolution": 0
      },
      "revision": {
        "version": 0,
        "real": 0,
        "isRepack": true
      }
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
    "fullSeason": true,
    "sceneSource": true,
    "seasonNumber": 0,
    "seasonNumbers": [
      0
    ],
    "languages": [
      {
        "id": 0,
        "name": "string"
      }
    ],
    "languageWeight": 0,
    "airDate": "string",
    "seriesTitle": "string",
    "episodeNumbers": [
      0
    ],
    "absoluteEpisodeNumbers": [
      0
    ],
    "mappedSeasonNumber": 0,
    "mappedEpisodeNumbers": [
      0
    ],
    "mappedAbsoluteEpisodeNumbers": [
      0
    ],
    "mappedSeriesId": 0,
    "mappedEpisodeInfo": [
      {
        "id": 0,
        "seasonNumber": 0,
        "episodeNumber": 0,
        "absoluteEpisodeNumber": 0,
        "title": "string"
      }
    ],
    "approved": true,
    "temporarilyRejected": true,
    "rejected": true,
    "tvdbId": 0,
    "tvRageId": 0,
    "imdbId": "string",
    "rejections": [
      "string"
    ],
    "publishDate": "1970-01-01T00:00:00Z",
    "commentUrl": "string",
    "downloadUrl": "string",
    "infoUrl": "string",
    "episodeRequested": true,
    "downloadAllowed": true,
    "releaseWeight": 0,
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
                    "hint": "string"
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
    "sceneMapping": {
      "title": "string",
      "seasonNumber": 0,
      "sceneSeasonNumber": 0,
      "sceneOrigin": "string",
      "comment": "string"
    },
    "magnetUrl": "string",
    "infoHash": "string",
    "seeders": 0,
    "leechers": 0,
    "protocol": "unknown",
    "indexerFlags": 0,
    "isDaily": true,
    "isAbsoluteNumbering": true,
    "isPossibleSpecialEpisode": true,
    "special": true,
    "seriesId": 0,
    "episodeId": 0,
    "episodeIds": [
      0
    ],
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
curl http://localhost:8989/api/v3/release \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "X-Api-Key: ${API_KEY}" \
  -d '{
    "id": 0,
    "guid": "string",
    "quality": {
      "quality": {
        "id": 0,
        "name": "string",
        "source": "unknown",
        "resolution": 0
      },
      "revision": {
        "version": 0,
        "real": 0,
        "isRepack": true
      }
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
    "fullSeason": true,
    "sceneSource": true,
    "seasonNumber": 0,
    "seasonNumbers": [
      0
    ],
    "languages": [
      {
        "id": 0,
        "name": "string"
      }
    ],
    "languageWeight": 0,
    "airDate": "string",
    "seriesTitle": "string",
    "episodeNumbers": [
      0
    ],
    "absoluteEpisodeNumbers": [
      0
    ],
    "mappedSeasonNumber": 0,
    "mappedEpisodeNumbers": [
      0
    ],
    "mappedAbsoluteEpisodeNumbers": [
      0
    ],
    "mappedSeriesId": 0,
    "mappedEpisodeInfo": [
      {
        "id": 0,
        "seasonNumber": 0,
        "episodeNumber": 0,
        "absoluteEpisodeNumber": 0,
        "title": "string"
      }
    ],
    "approved": true,
    "temporarilyRejected": true,
    "rejected": true,
    "tvdbId": 0,
    "tvRageId": 0,
    "imdbId": "string",
    "rejections": [
      "string"
    ],
    "publishDate": "1970-01-01T00:00:00Z",
    "commentUrl": "string",
    "downloadUrl": "string",
    "infoUrl": "string",
    "episodeRequested": true,
    "downloadAllowed": true,
    "releaseWeight": 0,
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
                    "hint": "string"
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
    "sceneMapping": {
      "title": "string",
      "seasonNumber": 0,
      "sceneSeasonNumber": 0,
      "sceneOrigin": "string",
      "comment": "string"
    },
    "magnetUrl": "string",
    "infoHash": "string",
    "seeders": 0,
    "leechers": 0,
    "protocol": "unknown",
    "indexerFlags": 0,
    "isDaily": true,
    "isAbsoluteNumbering": true,
    "isPossibleSpecialEpisode": true,
    "special": true,
    "seriesId": 0,
    "episodeId": 0,
    "episodeIds": [
      0
    ],
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
      "resolution": 0
    },
    "revision": {
      "version": 0,
      "real": 0,
      "isRepack": true
    }
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
  "fullSeason": true,
  "sceneSource": true,
  "seasonNumber": 0,
  "seasonNumbers": [
    0
  ],
  "languages": [
    {
      "id": 0,
      "name": "string"
    }
  ],
  "languageWeight": 0,
  "airDate": "string",
  "seriesTitle": "string",
  "episodeNumbers": [
    0
  ],
  "absoluteEpisodeNumbers": [
    0
  ],
  "mappedSeasonNumber": 0,
  "mappedEpisodeNumbers": [
    0
  ],
  "mappedAbsoluteEpisodeNumbers": [
    0
  ],
  "mappedSeriesId": 0,
  "mappedEpisodeInfo": [
    {
      "id": 0,
      "seasonNumber": 0,
      "episodeNumber": 0,
      "absoluteEpisodeNumber": 0,
      "title": "string"
    }
  ],
  "approved": true,
  "temporarilyRejected": true,
  "rejected": true,
  "tvdbId": 0,
  "tvRageId": 0,
  "imdbId": "string",
  "rejections": [
    "string"
  ],
  "publishDate": "1970-01-01T00:00:00Z",
  "commentUrl": "string",
  "downloadUrl": "string",
  "infoUrl": "string",
  "episodeRequested": true,
  "downloadAllowed": true,
  "releaseWeight": 0,
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
                  "hint": "string"
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
  "sceneMapping": {
    "title": "string",
    "seasonNumber": 0,
    "sceneSeasonNumber": 0,
    "sceneOrigin": "string",
    "comment": "string"
  },
  "magnetUrl": "string",
  "infoHash": "string",
  "seeders": 0,
  "leechers": 0,
  "protocol": "unknown",
  "indexerFlags": 0,
  "isDaily": true,
  "isAbsoluteNumbering": true,
  "isPossibleSpecialEpisode": true,
  "special": true,
  "seriesId": 0,
  "episodeId": 0,
  "episodeIds": [
    0
  ],
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
|» fullSeason|body|boolean|false|none|
|» sceneSource|body|boolean|false|none|
|» seasonNumber|body|integer(int32)|false|none|
|» seasonNumbers|body|[integer(int32)]|false|none|
|» languages|body|[[Language](#schemalanguage)]|false|none|
|» languageWeight|body|integer(int32)|false|none|
|» airDate|body|string \| null|false|none|
|» seriesTitle|body|string \| null|false|none|
|» episodeNumbers|body|[integer(int32)]|false|none|
|» absoluteEpisodeNumbers|body|[integer(int32)]|false|none|
|» mappedSeasonNumber|body|integer(int32) \| null|false|none|
|» mappedEpisodeNumbers|body|[integer(int32)]|false|none|
|» mappedAbsoluteEpisodeNumbers|body|[integer(int32)]|false|none|
|» mappedSeriesId|body|integer(int32) \| null|false|none|
|» mappedEpisodeInfo|body|[[ReleaseEpisodeResource](#schemareleaseepisoderesource)]|false|none|
|» approved|body|boolean|false|none|
|» temporarilyRejected|body|boolean|false|none|
|» rejected|body|boolean|false|none|
|» tvdbId|body|integer(int32)|false|none|
|» tvRageId|body|integer(int32)|false|none|
|» imdbId|body|string \| null|false|none|
|» rejections|body|[string]|false|none|
|» publishDate|body|string(date-time)|false|none|
|» commentUrl|body|string \| null|false|none|
|» downloadUrl|body|string \| null|false|none|
|» infoUrl|body|string \| null|false|none|
|» episodeRequested|body|boolean|false|none|
|» downloadAllowed|body|boolean|false|none|
|» releaseWeight|body|integer(int32)|false|none|
|» customFormats|body|[[CustomFormatResource](#schemacustomformatresource)]|false|none|
|» customFormatScore|body|integer(int32)|false|none|
|» sceneMapping|body|[AlternateTitleResource](#schemaalternatetitleresource)|false|none|
|» magnetUrl|body|string \| null|false|none|
|» infoHash|body|string \| null|false|none|
|» seeders|body|integer(int32) \| null|false|none|
|» leechers|body|integer(int32) \| null|false|none|
|» protocol|body|[DownloadProtocol](#schemadownloadprotocol)|false|none|
|» indexerFlags|body|integer(int32)|false|none|
|» isDaily|body|boolean|false|none|
|» isAbsoluteNumbering|body|boolean|false|none|
|» isPossibleSpecialEpisode|body|boolean|false|none|
|» special|body|boolean|false|none|
|» seriesId|body|integer(int32) \| null|false|none|
|» episodeId|body|integer(int32) \| null|false|none|
|» episodeIds|body|[integer(int32)]|false|none|
|» downloadClientId|body|integer(int32) \| null|false|none|
|» downloadClient|body|string \| null|false|none|
|» shouldOverride|body|boolean \| null|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» protocol|unknown|
|» protocol|usenet|
|» protocol|torrent|

<h3 id="postapiv3release-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

<h1 id="sonarr-releaseprofile">ReleaseProfile</h1>

## get/api/v3/releaseprofile

> Code samples

```bash
curl http://localhost:8989/api/v3/releaseprofile \
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
    "airDateRestriction": true,
    "airDateGracePeriod": 0,
    "allowSeasonPackWithoutAllEpisodesAired": true,
    "indexerId": 0,
    "tags": [
      0
    ],
    "excludedTags": [
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
curl http://localhost:8989/api/v3/releaseprofile \
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
    "airDateRestriction": true,
    "airDateGracePeriod": 0,
    "allowSeasonPackWithoutAllEpisodesAired": true,
    "indexerId": 0,
    "tags": [
      0
    ],
    "excludedTags": [
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
  "airDateRestriction": true,
  "airDateGracePeriod": 0,
  "allowSeasonPackWithoutAllEpisodesAired": true,
  "indexerId": 0,
  "tags": [
    0
  ],
  "excludedTags": [
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
|» airDateRestriction|body|boolean|false|none|
|» airDateGracePeriod|body|integer(int32)|false|none|
|» allowSeasonPackWithoutAllEpisodesAired|body|boolean|false|none|
|» indexerId|body|integer(int32)|false|none|
|» tags|body|[integer(int32)]|false|none|
|» excludedTags|body|[integer(int32)]|false|none|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "name": "string",
  "enabled": true,
  "required": null,
  "ignored": null,
  "airDateRestriction": true,
  "airDateGracePeriod": 0,
  "allowSeasonPackWithoutAllEpisodesAired": true,
  "indexerId": 0,
  "tags": [
    0
  ],
  "excludedTags": [
    0
  ]
}
```

<h3 id="postapiv3releaseprofile-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[ReleaseProfileResource](#schemareleaseprofileresource)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## get/api/v3/releaseprofile/{id}

> Code samples

```bash
curl http://localhost:8989/api/v3/releaseprofile/0 \
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
  "airDateRestriction": true,
  "airDateGracePeriod": 0,
  "allowSeasonPackWithoutAllEpisodesAired": true,
  "indexerId": 0,
  "tags": [
    0
  ],
  "excludedTags": [
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
curl http://localhost:8989/api/v3/releaseprofile/string \
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
    "airDateRestriction": true,
    "airDateGracePeriod": 0,
    "allowSeasonPackWithoutAllEpisodesAired": true,
    "indexerId": 0,
    "tags": [
      0
    ],
    "excludedTags": [
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
  "airDateRestriction": true,
  "airDateGracePeriod": 0,
  "allowSeasonPackWithoutAllEpisodesAired": true,
  "indexerId": 0,
  "tags": [
    0
  ],
  "excludedTags": [
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
|» airDateRestriction|body|boolean|false|none|
|» airDateGracePeriod|body|integer(int32)|false|none|
|» allowSeasonPackWithoutAllEpisodesAired|body|boolean|false|none|
|» indexerId|body|integer(int32)|false|none|
|» tags|body|[integer(int32)]|false|none|
|» excludedTags|body|[integer(int32)]|false|none|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "name": "string",
  "enabled": true,
  "required": null,
  "ignored": null,
  "airDateRestriction": true,
  "airDateGracePeriod": 0,
  "allowSeasonPackWithoutAllEpisodesAired": true,
  "indexerId": 0,
  "tags": [
    0
  ],
  "excludedTags": [
    0
  ]
}
```

<h3 id="putapiv3releaseprofileid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[ReleaseProfileResource](#schemareleaseprofileresource)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## delete/api/v3/releaseprofile/{id}

> Code samples

```bash
curl http://localhost:8989/api/v3/releaseprofile/0 \
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

<h1 id="sonarr-releasepush">ReleasePush</h1>

## post/api/v3/release/push

> Code samples

```bash
curl http://localhost:8989/api/v3/release/push \
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
        "resolution": 0
      },
      "revision": {
        "version": 0,
        "real": 0,
        "isRepack": true
      }
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
    "fullSeason": true,
    "sceneSource": true,
    "seasonNumber": 0,
    "seasonNumbers": [
      0
    ],
    "languages": [
      {
        "id": 0,
        "name": "string"
      }
    ],
    "languageWeight": 0,
    "airDate": "string",
    "seriesTitle": "string",
    "episodeNumbers": [
      0
    ],
    "absoluteEpisodeNumbers": [
      0
    ],
    "mappedSeasonNumber": 0,
    "mappedEpisodeNumbers": [
      0
    ],
    "mappedAbsoluteEpisodeNumbers": [
      0
    ],
    "mappedSeriesId": 0,
    "mappedEpisodeInfo": [
      {
        "id": 0,
        "seasonNumber": 0,
        "episodeNumber": 0,
        "absoluteEpisodeNumber": 0,
        "title": "string"
      }
    ],
    "approved": true,
    "temporarilyRejected": true,
    "rejected": true,
    "tvdbId": 0,
    "tvRageId": 0,
    "imdbId": "string",
    "rejections": [
      "string"
    ],
    "publishDate": "1970-01-01T00:00:00Z",
    "commentUrl": "string",
    "downloadUrl": "string",
    "infoUrl": "string",
    "episodeRequested": true,
    "downloadAllowed": true,
    "releaseWeight": 0,
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
                    "hint": "string"
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
    "sceneMapping": {
      "title": "string",
      "seasonNumber": 0,
      "sceneSeasonNumber": 0,
      "sceneOrigin": "string",
      "comment": "string"
    },
    "magnetUrl": "string",
    "infoHash": "string",
    "seeders": 0,
    "leechers": 0,
    "protocol": "unknown",
    "indexerFlags": 0,
    "isDaily": true,
    "isAbsoluteNumbering": true,
    "isPossibleSpecialEpisode": true,
    "special": true,
    "seriesId": 0,
    "episodeId": 0,
    "episodeIds": [
      0
    ],
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
      "resolution": 0
    },
    "revision": {
      "version": 0,
      "real": 0,
      "isRepack": true
    }
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
  "fullSeason": true,
  "sceneSource": true,
  "seasonNumber": 0,
  "seasonNumbers": [
    0
  ],
  "languages": [
    {
      "id": 0,
      "name": "string"
    }
  ],
  "languageWeight": 0,
  "airDate": "string",
  "seriesTitle": "string",
  "episodeNumbers": [
    0
  ],
  "absoluteEpisodeNumbers": [
    0
  ],
  "mappedSeasonNumber": 0,
  "mappedEpisodeNumbers": [
    0
  ],
  "mappedAbsoluteEpisodeNumbers": [
    0
  ],
  "mappedSeriesId": 0,
  "mappedEpisodeInfo": [
    {
      "id": 0,
      "seasonNumber": 0,
      "episodeNumber": 0,
      "absoluteEpisodeNumber": 0,
      "title": "string"
    }
  ],
  "approved": true,
  "temporarilyRejected": true,
  "rejected": true,
  "tvdbId": 0,
  "tvRageId": 0,
  "imdbId": "string",
  "rejections": [
    "string"
  ],
  "publishDate": "1970-01-01T00:00:00Z",
  "commentUrl": "string",
  "downloadUrl": "string",
  "infoUrl": "string",
  "episodeRequested": true,
  "downloadAllowed": true,
  "releaseWeight": 0,
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
                  "hint": "string"
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
  "sceneMapping": {
    "title": "string",
    "seasonNumber": 0,
    "sceneSeasonNumber": 0,
    "sceneOrigin": "string",
    "comment": "string"
  },
  "magnetUrl": "string",
  "infoHash": "string",
  "seeders": 0,
  "leechers": 0,
  "protocol": "unknown",
  "indexerFlags": 0,
  "isDaily": true,
  "isAbsoluteNumbering": true,
  "isPossibleSpecialEpisode": true,
  "special": true,
  "seriesId": 0,
  "episodeId": 0,
  "episodeIds": [
    0
  ],
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
|» fullSeason|body|boolean|false|none|
|» sceneSource|body|boolean|false|none|
|» seasonNumber|body|integer(int32)|false|none|
|» seasonNumbers|body|[integer(int32)]|false|none|
|» languages|body|[[Language](#schemalanguage)]|false|none|
|» languageWeight|body|integer(int32)|false|none|
|» airDate|body|string \| null|false|none|
|» seriesTitle|body|string \| null|false|none|
|» episodeNumbers|body|[integer(int32)]|false|none|
|» absoluteEpisodeNumbers|body|[integer(int32)]|false|none|
|» mappedSeasonNumber|body|integer(int32) \| null|false|none|
|» mappedEpisodeNumbers|body|[integer(int32)]|false|none|
|» mappedAbsoluteEpisodeNumbers|body|[integer(int32)]|false|none|
|» mappedSeriesId|body|integer(int32) \| null|false|none|
|» mappedEpisodeInfo|body|[[ReleaseEpisodeResource](#schemareleaseepisoderesource)]|false|none|
|» approved|body|boolean|false|none|
|» temporarilyRejected|body|boolean|false|none|
|» rejected|body|boolean|false|none|
|» tvdbId|body|integer(int32)|false|none|
|» tvRageId|body|integer(int32)|false|none|
|» imdbId|body|string \| null|false|none|
|» rejections|body|[string]|false|none|
|» publishDate|body|string(date-time)|false|none|
|» commentUrl|body|string \| null|false|none|
|» downloadUrl|body|string \| null|false|none|
|» infoUrl|body|string \| null|false|none|
|» episodeRequested|body|boolean|false|none|
|» downloadAllowed|body|boolean|false|none|
|» releaseWeight|body|integer(int32)|false|none|
|» customFormats|body|[[CustomFormatResource](#schemacustomformatresource)]|false|none|
|» customFormatScore|body|integer(int32)|false|none|
|» sceneMapping|body|[AlternateTitleResource](#schemaalternatetitleresource)|false|none|
|» magnetUrl|body|string \| null|false|none|
|» infoHash|body|string \| null|false|none|
|» seeders|body|integer(int32) \| null|false|none|
|» leechers|body|integer(int32) \| null|false|none|
|» protocol|body|[DownloadProtocol](#schemadownloadprotocol)|false|none|
|» indexerFlags|body|integer(int32)|false|none|
|» isDaily|body|boolean|false|none|
|» isAbsoluteNumbering|body|boolean|false|none|
|» isPossibleSpecialEpisode|body|boolean|false|none|
|» special|body|boolean|false|none|
|» seriesId|body|integer(int32) \| null|false|none|
|» episodeId|body|integer(int32) \| null|false|none|
|» episodeIds|body|[integer(int32)]|false|none|
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
        "resolution": 0
      },
      "revision": {
        "version": 0,
        "real": 0,
        "isRepack": true
      }
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
    "fullSeason": true,
    "sceneSource": true,
    "seasonNumber": 0,
    "seasonNumbers": [
      0
    ],
    "languages": [
      {
        "id": 0,
        "name": "string"
      }
    ],
    "languageWeight": 0,
    "airDate": "string",
    "seriesTitle": "string",
    "episodeNumbers": [
      0
    ],
    "absoluteEpisodeNumbers": [
      0
    ],
    "mappedSeasonNumber": 0,
    "mappedEpisodeNumbers": [
      0
    ],
    "mappedAbsoluteEpisodeNumbers": [
      0
    ],
    "mappedSeriesId": 0,
    "mappedEpisodeInfo": [
      {
        "id": 0,
        "seasonNumber": 0,
        "episodeNumber": 0,
        "absoluteEpisodeNumber": 0,
        "title": "string"
      }
    ],
    "approved": true,
    "temporarilyRejected": true,
    "rejected": true,
    "tvdbId": 0,
    "tvRageId": 0,
    "imdbId": "string",
    "rejections": [
      "string"
    ],
    "publishDate": "1970-01-01T00:00:00Z",
    "commentUrl": "string",
    "downloadUrl": "string",
    "infoUrl": "string",
    "episodeRequested": true,
    "downloadAllowed": true,
    "releaseWeight": 0,
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
                    "hint": "string"
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
    "sceneMapping": {
      "title": "string",
      "seasonNumber": 0,
      "sceneSeasonNumber": 0,
      "sceneOrigin": "string",
      "comment": "string"
    },
    "magnetUrl": "string",
    "infoHash": "string",
    "seeders": 0,
    "leechers": 0,
    "protocol": "unknown",
    "indexerFlags": 0,
    "isDaily": true,
    "isAbsoluteNumbering": true,
    "isPossibleSpecialEpisode": true,
    "special": true,
    "seriesId": 0,
    "episodeId": 0,
    "episodeIds": [
      0
    ],
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

<h3 id="postapiv3releasepush-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[ReleaseResource](#schemareleaseresource)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

<h1 id="sonarr-remotepathmapping">RemotePathMapping</h1>

## get/api/v3/remotepathmapping

> Code samples

```bash
curl http://localhost:8989/api/v3/remotepathmapping \
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
curl http://localhost:8989/api/v3/remotepathmapping \
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

> 200 Response

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
|200|OK|OK|[RemotePathMappingResource](#schemaremotepathmappingresource)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## get/api/v3/remotepathmapping/{id}

> Code samples

```bash
curl http://localhost:8989/api/v3/remotepathmapping/0 \
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
curl http://localhost:8989/api/v3/remotepathmapping/string \
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

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## delete/api/v3/remotepathmapping/{id}

> Code samples

```bash
curl http://localhost:8989/api/v3/remotepathmapping/0 \
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

<h1 id="sonarr-renameepisode">RenameEpisode</h1>

## get/api/v3/rename

> Code samples

```bash
curl http://localhost:8989/api/v3/rename \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /api/v3/rename`

<h3 id="getapiv3rename-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|seriesId|query|integer(int32)|false|none|
|seasonNumber|query|integer(int32)|false|none|

> Example responses

> 200 Response

```json
[
  {
    "id": 0,
    "seriesId": 0,
    "seasonNumber": 0,
    "episodeNumbers": [
      0
    ],
    "episodeFileId": 0,
    "existingPath": "string",
    "newPath": "string"
  }
]
```

<h3 id="getapiv3rename-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="getapiv3rename-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[RenameEpisodeResource](#schemarenameepisoderesource)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## get/api/v3/rename/bulk

> Code samples

```bash
curl http://localhost:8989/api/v3/rename/bulk \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /api/v3/rename/bulk`

<h3 id="getapiv3renamebulk-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|seriesIds|query|[integer(int32)]|false|none|

> Example responses

> 200 Response

```json
[
  {
    "id": 0,
    "seriesId": 0,
    "seasonNumber": 0,
    "episodeNumbers": [
      0
    ],
    "episodeFileId": 0,
    "existingPath": "string",
    "newPath": "string"
  }
]
```

<h3 id="getapiv3renamebulk-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="getapiv3renamebulk-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[RenameEpisodeResource](#schemarenameepisoderesource)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

<h1 id="sonarr-rootfolder">RootFolder</h1>

## get/api/v3/rootfolder

> Code samples

```bash
curl http://localhost:8989/api/v3/rootfolder \
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
    "totalSpace": 0,
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
curl http://localhost:8989/api/v3/rootfolder \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}" \
  -d '{
    "id": 0,
    "path": "string",
    "accessible": true,
    "freeSpace": 0,
    "totalSpace": 0,
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
  "totalSpace": 0,
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
|» totalSpace|body|integer(int64) \| null|false|none|
|» unmappedFolders|body|[[UnmappedFolder](#schemaunmappedfolder)]|false|none|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "path": "string",
  "accessible": true,
  "freeSpace": 0,
  "totalSpace": 0,
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
|200|OK|OK|[RootFolderResource](#schemarootfolderresource)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## get/api/v3/rootfolder/{id}

> Code samples

```bash
curl http://localhost:8989/api/v3/rootfolder/0 \
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
  "totalSpace": 0,
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
curl http://localhost:8989/api/v3/rootfolder/0 \
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

<h1 id="sonarr-seasonpass">SeasonPass</h1>

## post/api/v3/seasonpass

> Code samples

```bash
curl http://localhost:8989/api/v3/seasonpass \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "X-Api-Key: ${API_KEY}" \
  -d '{
    "series": [
      {
        "id": 0,
        "monitored": true,
        "seasons": [
          {
            "seasonNumber": 0,
            "monitored": true,
            "title": "string",
            "statistics": {
              "nextAiring": "1970-01-01T00:00:00Z",
              "previousAiring": "1970-01-01T00:00:00Z",
              "episodeFileCount": 0,
              "episodeCount": 0,
              "totalEpisodeCount": 0,
              "sizeOnDisk": 0,
              "releaseGroups": [
                "string"
              ]
            },
            "images": [
              {
                "coverType": "unknown",
                "url": "string",
                "remoteUrl": "string"
              }
            ]
          }
        ]
      }
    ],
    "monitoringOptions": {
      "ignoreEpisodesWithFiles": true,
      "ignoreEpisodesWithoutFiles": true,
      "monitor": "unknown"
    }
  }'
```

`POST /api/v3/seasonpass`

> Body parameter

```json
{
  "series": [
    {
      "id": 0,
      "monitored": true,
      "seasons": [
        {
          "seasonNumber": 0,
          "monitored": true,
          "title": "string",
          "statistics": {
            "nextAiring": "1970-01-01T00:00:00Z",
            "previousAiring": "1970-01-01T00:00:00Z",
            "episodeFileCount": 0,
            "episodeCount": 0,
            "totalEpisodeCount": 0,
            "sizeOnDisk": 0,
            "releaseGroups": [
              "string"
            ]
          },
          "images": [
            {
              "coverType": "unknown",
              "url": "string",
              "remoteUrl": "string"
            }
          ]
        }
      ]
    }
  ],
  "monitoringOptions": {
    "ignoreEpisodesWithFiles": true,
    "ignoreEpisodesWithoutFiles": true,
    "monitor": "unknown"
  }
}
```

<h3 id="postapiv3seasonpass-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[SeasonPassResource](#schemaseasonpassresource)|false|none|
|» series|body|[[SeasonPassSeriesResource](#schemaseasonpassseriesresource)]|false|none|
|» monitoringOptions|body|[MonitoringOptions](#schemamonitoringoptions)|false|none|

<h3 id="postapiv3seasonpass-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

<h1 id="sonarr-series">Series</h1>

## get/api/v3/series

> Code samples

```bash
curl http://localhost:8989/api/v3/series \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /api/v3/series`

<h3 id="getapiv3series-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|tvdbId|query|integer(int32)|false|none|
|includeSeasonImages|query|boolean|false|none|

> Example responses

> 200 Response

```json
[
  {
    "id": 0,
    "title": "string",
    "alternateTitles": [
      {
        "title": "string",
        "seasonNumber": 0,
        "sceneSeasonNumber": 0,
        "sceneOrigin": "string",
        "comment": "string"
      }
    ],
    "sortTitle": "string",
    "status": "continuing",
    "ended": true,
    "profileName": "string",
    "overview": "string",
    "nextAiring": "1970-01-01T00:00:00Z",
    "previousAiring": "1970-01-01T00:00:00Z",
    "network": "string",
    "airTime": "string",
    "images": [
      {
        "coverType": "unknown",
        "url": "string",
        "remoteUrl": "string"
      }
    ],
    "language": {
      "id": 0,
      "name": "string"
    },
    "originalLanguage": {
      "id": 0,
      "name": "string"
    },
    "remotePoster": "string",
    "seasonType": "string",
    "seasons": [
      {
        "seasonNumber": 0,
        "monitored": true,
        "title": "string",
        "statistics": {
          "nextAiring": "1970-01-01T00:00:00Z",
          "previousAiring": "1970-01-01T00:00:00Z",
          "episodeFileCount": 0,
          "episodeCount": 0,
          "totalEpisodeCount": 0,
          "sizeOnDisk": 0,
          "releaseGroups": [
            "string"
          ],
          "percentOfEpisodes": 0
        },
        "images": [
          {
            "coverType": "unknown",
            "url": "string",
            "remoteUrl": "string"
          }
        ]
      }
    ],
    "seasonTypes": [
      {
        "name": "string",
        "type": "string",
        "seasonNumbers": [
          0
        ],
        "episodeCount": 0
      }
    ],
    "translations": [
      {
        "language": {
          "id": 0,
          "name": "string"
        },
        "title": "string",
        "overview": "string"
      }
    ],
    "year": 0,
    "path": "string",
    "pendingPath": "string",
    "qualityProfileId": 0,
    "seasonFolder": true,
    "monitored": true,
    "monitorNewItems": "all",
    "useSceneNumbering": true,
    "runtime": 0,
    "tvdbId": 0,
    "tvRageId": 0,
    "tvMazeId": 0,
    "tmdbId": 0,
    "firstAired": "1970-01-01T00:00:00Z",
    "lastAired": "1970-01-01T00:00:00Z",
    "seriesType": "standard",
    "cleanTitle": "string",
    "originalTitle": "string",
    "cleanOriginalTitle": "string",
    "imdbId": "string",
    "titleSlug": "string",
    "rootFolderPath": "string",
    "folder": "string",
    "folders": [
      {
        "language": {
          "id": 0,
          "name": "string"
        },
        "folder": "string"
      }
    ],
    "certification": "string",
    "genres": [
      "string"
    ],
    "tags": [
      0
    ],
    "added": "1970-01-01T00:00:00Z",
    "addOptions": {
      "ignoreEpisodesWithFiles": true,
      "ignoreEpisodesWithoutFiles": true,
      "monitor": "unknown",
      "searchForMissingEpisodes": true,
      "searchForCutoffUnmetEpisodes": true
    },
    "ratings": {
      "votes": 0,
      "value": 0
    },
    "statistics": {
      "seasonCount": 0,
      "episodeFileCount": 0,
      "episodeCount": 0,
      "totalEpisodeCount": 0,
      "sizeOnDisk": 0,
      "releaseGroups": [
        "string"
      ],
      "percentOfEpisodes": 0
    },
    "episodesChanged": true,
    "languageProfileId": 0
  }
]
```

<h3 id="getapiv3series-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="getapiv3series-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[SeriesResource](#schemaseriesresource)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## post/api/v3/series

> Code samples

```bash
curl http://localhost:8989/api/v3/series \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}" \
  -d '{
    "id": 0,
    "title": "string",
    "alternateTitles": [
      {
        "title": "string",
        "seasonNumber": 0,
        "sceneSeasonNumber": 0,
        "sceneOrigin": "string",
        "comment": "string"
      }
    ],
    "sortTitle": "string",
    "status": "continuing",
    "profileName": "string",
    "overview": "string",
    "nextAiring": "1970-01-01T00:00:00Z",
    "previousAiring": "1970-01-01T00:00:00Z",
    "network": "string",
    "airTime": "string",
    "images": [
      {
        "coverType": "unknown",
        "url": "string",
        "remoteUrl": "string"
      }
    ],
    "language": {
      "id": 0,
      "name": "string"
    },
    "originalLanguage": {
      "id": 0,
      "name": "string"
    },
    "remotePoster": "string",
    "seasonType": "string",
    "seasons": [
      {
        "seasonNumber": 0,
        "monitored": true,
        "title": "string",
        "statistics": {
          "nextAiring": "1970-01-01T00:00:00Z",
          "previousAiring": "1970-01-01T00:00:00Z",
          "episodeFileCount": 0,
          "episodeCount": 0,
          "totalEpisodeCount": 0,
          "sizeOnDisk": 0,
          "releaseGroups": [
            "string"
          ]
        },
        "images": [
          {
            "coverType": "unknown",
            "url": "string",
            "remoteUrl": "string"
          }
        ]
      }
    ],
    "seasonTypes": [
      {
        "name": "string",
        "type": "string",
        "seasonNumbers": [
          0
        ],
        "episodeCount": 0
      }
    ],
    "translations": [
      {
        "language": {
          "id": 0,
          "name": "string"
        },
        "title": "string",
        "overview": "string"
      }
    ],
    "year": 0,
    "path": "string",
    "pendingPath": "string",
    "qualityProfileId": 0,
    "seasonFolder": true,
    "monitored": true,
    "monitorNewItems": "all",
    "useSceneNumbering": true,
    "runtime": 0,
    "tvdbId": 0,
    "tvRageId": 0,
    "tvMazeId": 0,
    "tmdbId": 0,
    "firstAired": "1970-01-01T00:00:00Z",
    "lastAired": "1970-01-01T00:00:00Z",
    "seriesType": "standard",
    "cleanTitle": "string",
    "originalTitle": "string",
    "cleanOriginalTitle": "string",
    "imdbId": "string",
    "titleSlug": "string",
    "rootFolderPath": "string",
    "folder": "string",
    "folders": [
      {
        "language": {
          "id": 0,
          "name": "string"
        },
        "folder": "string"
      }
    ],
    "certification": "string",
    "genres": [
      "string"
    ],
    "tags": [
      0
    ],
    "added": "1970-01-01T00:00:00Z",
    "addOptions": {
      "ignoreEpisodesWithFiles": true,
      "ignoreEpisodesWithoutFiles": true,
      "monitor": "unknown",
      "searchForMissingEpisodes": true,
      "searchForCutoffUnmetEpisodes": true
    },
    "ratings": {
      "votes": 0,
      "value": 0
    },
    "statistics": {
      "seasonCount": 0,
      "episodeFileCount": 0,
      "episodeCount": 0,
      "totalEpisodeCount": 0,
      "sizeOnDisk": 0,
      "releaseGroups": [
        "string"
      ]
    },
    "episodesChanged": true
  }'
```

`POST /api/v3/series`

> Body parameter

```json
{
  "id": 0,
  "title": "string",
  "alternateTitles": [
    {
      "title": "string",
      "seasonNumber": 0,
      "sceneSeasonNumber": 0,
      "sceneOrigin": "string",
      "comment": "string"
    }
  ],
  "sortTitle": "string",
  "status": "continuing",
  "profileName": "string",
  "overview": "string",
  "nextAiring": "1970-01-01T00:00:00Z",
  "previousAiring": "1970-01-01T00:00:00Z",
  "network": "string",
  "airTime": "string",
  "images": [
    {
      "coverType": "unknown",
      "url": "string",
      "remoteUrl": "string"
    }
  ],
  "language": {
    "id": 0,
    "name": "string"
  },
  "originalLanguage": {
    "id": 0,
    "name": "string"
  },
  "remotePoster": "string",
  "seasonType": "string",
  "seasons": [
    {
      "seasonNumber": 0,
      "monitored": true,
      "title": "string",
      "statistics": {
        "nextAiring": "1970-01-01T00:00:00Z",
        "previousAiring": "1970-01-01T00:00:00Z",
        "episodeFileCount": 0,
        "episodeCount": 0,
        "totalEpisodeCount": 0,
        "sizeOnDisk": 0,
        "releaseGroups": [
          "string"
        ]
      },
      "images": [
        {
          "coverType": "unknown",
          "url": "string",
          "remoteUrl": "string"
        }
      ]
    }
  ],
  "seasonTypes": [
    {
      "name": "string",
      "type": "string",
      "seasonNumbers": [
        0
      ],
      "episodeCount": 0
    }
  ],
  "translations": [
    {
      "language": {
        "id": 0,
        "name": "string"
      },
      "title": "string",
      "overview": "string"
    }
  ],
  "year": 0,
  "path": "string",
  "pendingPath": "string",
  "qualityProfileId": 0,
  "seasonFolder": true,
  "monitored": true,
  "monitorNewItems": "all",
  "useSceneNumbering": true,
  "runtime": 0,
  "tvdbId": 0,
  "tvRageId": 0,
  "tvMazeId": 0,
  "tmdbId": 0,
  "firstAired": "1970-01-01T00:00:00Z",
  "lastAired": "1970-01-01T00:00:00Z",
  "seriesType": "standard",
  "cleanTitle": "string",
  "originalTitle": "string",
  "cleanOriginalTitle": "string",
  "imdbId": "string",
  "titleSlug": "string",
  "rootFolderPath": "string",
  "folder": "string",
  "folders": [
    {
      "language": {
        "id": 0,
        "name": "string"
      },
      "folder": "string"
    }
  ],
  "certification": "string",
  "genres": [
    "string"
  ],
  "tags": [
    0
  ],
  "added": "1970-01-01T00:00:00Z",
  "addOptions": {
    "ignoreEpisodesWithFiles": true,
    "ignoreEpisodesWithoutFiles": true,
    "monitor": "unknown",
    "searchForMissingEpisodes": true,
    "searchForCutoffUnmetEpisodes": true
  },
  "ratings": {
    "votes": 0,
    "value": 0
  },
  "statistics": {
    "seasonCount": 0,
    "episodeFileCount": 0,
    "episodeCount": 0,
    "totalEpisodeCount": 0,
    "sizeOnDisk": 0,
    "releaseGroups": [
      "string"
    ]
  },
  "episodesChanged": true
}
```

<h3 id="postapiv3series-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[SeriesResource](#schemaseriesresource)|false|none|
|» id|body|integer(int32)|false|none|
|» title|body|string \| null|false|none|
|» alternateTitles|body|[[AlternateTitleResource](#schemaalternatetitleresource)]|false|none|
|» sortTitle|body|string \| null|false|none|
|» status|body|[SeriesStatusType](#schemaseriesstatustype)|false|none|
|» profileName|body|string \| null|false|none|
|» overview|body|string \| null|false|none|
|» nextAiring|body|string(date-time) \| null|false|none|
|» previousAiring|body|string(date-time) \| null|false|none|
|» network|body|string \| null|false|none|
|» airTime|body|string \| null|false|none|
|» images|body|[[MediaCover](#schemamediacover)]|false|none|
|» language|body|[Language](#schemalanguage)|false|none|
|» originalLanguage|body|[Language](#schemalanguage)|false|none|
|» remotePoster|body|string \| null|false|none|
|» seasonType|body|string \| null|false|none|
|» seasons|body|[[SeasonResource](#schemaseasonresource)]|false|none|
|» seasonTypes|body|[[SeasonTypeResource](#schemaseasontyperesource)]|false|none|
|» translations|body|[[SeriesTranslationResource](#schemaseriestranslationresource)]|false|none|
|» year|body|integer(int32)|false|none|
|» path|body|string \| null|false|none|
|» pendingPath|body|string \| null|false|none|
|» qualityProfileId|body|integer(int32)|false|none|
|» seasonFolder|body|boolean|false|none|
|» monitored|body|boolean|false|none|
|» monitorNewItems|body|[NewItemMonitorTypes](#schemanewitemmonitortypes)|false|none|
|» useSceneNumbering|body|boolean|false|none|
|» runtime|body|integer(int32)|false|none|
|» tvdbId|body|integer(int32)|false|none|
|» tvRageId|body|integer(int32)|false|none|
|» tvMazeId|body|integer(int32)|false|none|
|» tmdbId|body|integer(int32)|false|none|
|» firstAired|body|string(date-time) \| null|false|none|
|» lastAired|body|string(date-time) \| null|false|none|
|» seriesType|body|[SeriesTypes](#schemaseriestypes)|false|none|
|» cleanTitle|body|string \| null|false|none|
|» originalTitle|body|string \| null|false|none|
|» cleanOriginalTitle|body|string \| null|false|none|
|» imdbId|body|string \| null|false|none|
|» titleSlug|body|string \| null|false|none|
|» rootFolderPath|body|string \| null|false|none|
|» folder|body|string \| null|false|none|
|» folders|body|[[SeriesFolderResource](#schemaseriesfolderresource)]|false|none|
|» certification|body|string \| null|false|none|
|» genres|body|[string]|false|none|
|» tags|body|[integer(int32)]|false|none|
|» added|body|string(date-time)|false|none|
|» addOptions|body|[AddSeriesOptions](#schemaaddseriesoptions)|false|none|
|» ratings|body|[Ratings](#schemaratings)|false|none|
|» statistics|body|[SeriesStatisticsResource](#schemaseriesstatisticsresource)|false|none|
|» episodesChanged|body|boolean \| null|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» status|continuing|
|» status|ended|
|» status|upcoming|
|» status|deleted|
|» monitorNewItems|all|
|» monitorNewItems|none|
|» seriesType|standard|
|» seriesType|daily|
|» seriesType|anime|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "title": "string",
  "alternateTitles": [
    {
      "title": "string",
      "seasonNumber": 0,
      "sceneSeasonNumber": 0,
      "sceneOrigin": "string",
      "comment": "string"
    }
  ],
  "sortTitle": "string",
  "status": "continuing",
  "ended": true,
  "profileName": "string",
  "overview": "string",
  "nextAiring": "1970-01-01T00:00:00Z",
  "previousAiring": "1970-01-01T00:00:00Z",
  "network": "string",
  "airTime": "string",
  "images": [
    {
      "coverType": "unknown",
      "url": "string",
      "remoteUrl": "string"
    }
  ],
  "language": {
    "id": 0,
    "name": "string"
  },
  "originalLanguage": {
    "id": 0,
    "name": "string"
  },
  "remotePoster": "string",
  "seasonType": "string",
  "seasons": [
    {
      "seasonNumber": 0,
      "monitored": true,
      "title": "string",
      "statistics": {
        "nextAiring": "1970-01-01T00:00:00Z",
        "previousAiring": "1970-01-01T00:00:00Z",
        "episodeFileCount": 0,
        "episodeCount": 0,
        "totalEpisodeCount": 0,
        "sizeOnDisk": 0,
        "releaseGroups": [
          "string"
        ],
        "percentOfEpisodes": 0
      },
      "images": [
        {
          "coverType": "unknown",
          "url": "string",
          "remoteUrl": "string"
        }
      ]
    }
  ],
  "seasonTypes": [
    {
      "name": "string",
      "type": "string",
      "seasonNumbers": [
        0
      ],
      "episodeCount": 0
    }
  ],
  "translations": [
    {
      "language": {
        "id": 0,
        "name": "string"
      },
      "title": "string",
      "overview": "string"
    }
  ],
  "year": 0,
  "path": "string",
  "pendingPath": "string",
  "qualityProfileId": 0,
  "seasonFolder": true,
  "monitored": true,
  "monitorNewItems": "all",
  "useSceneNumbering": true,
  "runtime": 0,
  "tvdbId": 0,
  "tvRageId": 0,
  "tvMazeId": 0,
  "tmdbId": 0,
  "firstAired": "1970-01-01T00:00:00Z",
  "lastAired": "1970-01-01T00:00:00Z",
  "seriesType": "standard",
  "cleanTitle": "string",
  "originalTitle": "string",
  "cleanOriginalTitle": "string",
  "imdbId": "string",
  "titleSlug": "string",
  "rootFolderPath": "string",
  "folder": "string",
  "folders": [
    {
      "language": {
        "id": 0,
        "name": "string"
      },
      "folder": "string"
    }
  ],
  "certification": "string",
  "genres": [
    "string"
  ],
  "tags": [
    0
  ],
  "added": "1970-01-01T00:00:00Z",
  "addOptions": {
    "ignoreEpisodesWithFiles": true,
    "ignoreEpisodesWithoutFiles": true,
    "monitor": "unknown",
    "searchForMissingEpisodes": true,
    "searchForCutoffUnmetEpisodes": true
  },
  "ratings": {
    "votes": 0,
    "value": 0
  },
  "statistics": {
    "seasonCount": 0,
    "episodeFileCount": 0,
    "episodeCount": 0,
    "totalEpisodeCount": 0,
    "sizeOnDisk": 0,
    "releaseGroups": [
      "string"
    ],
    "percentOfEpisodes": 0
  },
  "episodesChanged": true,
  "languageProfileId": 0
}
```

<h3 id="postapiv3series-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[SeriesResource](#schemaseriesresource)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## get/api/v3/series/{id}

> Code samples

```bash
curl http://localhost:8989/api/v3/series/0 \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /api/v3/series/{id}`

<h3 id="getapiv3seriesid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|none|
|includeSeasonImages|query|boolean|false|none|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "title": "string",
  "alternateTitles": [
    {
      "title": "string",
      "seasonNumber": 0,
      "sceneSeasonNumber": 0,
      "sceneOrigin": "string",
      "comment": "string"
    }
  ],
  "sortTitle": "string",
  "status": "continuing",
  "ended": true,
  "profileName": "string",
  "overview": "string",
  "nextAiring": "1970-01-01T00:00:00Z",
  "previousAiring": "1970-01-01T00:00:00Z",
  "network": "string",
  "airTime": "string",
  "images": [
    {
      "coverType": "unknown",
      "url": "string",
      "remoteUrl": "string"
    }
  ],
  "language": {
    "id": 0,
    "name": "string"
  },
  "originalLanguage": {
    "id": 0,
    "name": "string"
  },
  "remotePoster": "string",
  "seasonType": "string",
  "seasons": [
    {
      "seasonNumber": 0,
      "monitored": true,
      "title": "string",
      "statistics": {
        "nextAiring": "1970-01-01T00:00:00Z",
        "previousAiring": "1970-01-01T00:00:00Z",
        "episodeFileCount": 0,
        "episodeCount": 0,
        "totalEpisodeCount": 0,
        "sizeOnDisk": 0,
        "releaseGroups": [
          "string"
        ],
        "percentOfEpisodes": 0
      },
      "images": [
        {
          "coverType": "unknown",
          "url": "string",
          "remoteUrl": "string"
        }
      ]
    }
  ],
  "seasonTypes": [
    {
      "name": "string",
      "type": "string",
      "seasonNumbers": [
        0
      ],
      "episodeCount": 0
    }
  ],
  "translations": [
    {
      "language": {
        "id": 0,
        "name": "string"
      },
      "title": "string",
      "overview": "string"
    }
  ],
  "year": 0,
  "path": "string",
  "pendingPath": "string",
  "qualityProfileId": 0,
  "seasonFolder": true,
  "monitored": true,
  "monitorNewItems": "all",
  "useSceneNumbering": true,
  "runtime": 0,
  "tvdbId": 0,
  "tvRageId": 0,
  "tvMazeId": 0,
  "tmdbId": 0,
  "firstAired": "1970-01-01T00:00:00Z",
  "lastAired": "1970-01-01T00:00:00Z",
  "seriesType": "standard",
  "cleanTitle": "string",
  "originalTitle": "string",
  "cleanOriginalTitle": "string",
  "imdbId": "string",
  "titleSlug": "string",
  "rootFolderPath": "string",
  "folder": "string",
  "folders": [
    {
      "language": {
        "id": 0,
        "name": "string"
      },
      "folder": "string"
    }
  ],
  "certification": "string",
  "genres": [
    "string"
  ],
  "tags": [
    0
  ],
  "added": "1970-01-01T00:00:00Z",
  "addOptions": {
    "ignoreEpisodesWithFiles": true,
    "ignoreEpisodesWithoutFiles": true,
    "monitor": "unknown",
    "searchForMissingEpisodes": true,
    "searchForCutoffUnmetEpisodes": true
  },
  "ratings": {
    "votes": 0,
    "value": 0
  },
  "statistics": {
    "seasonCount": 0,
    "episodeFileCount": 0,
    "episodeCount": 0,
    "totalEpisodeCount": 0,
    "sizeOnDisk": 0,
    "releaseGroups": [
      "string"
    ],
    "percentOfEpisodes": 0
  },
  "episodesChanged": true,
  "languageProfileId": 0
}
```

<h3 id="getapiv3seriesid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[SeriesResource](#schemaseriesresource)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## put/api/v3/series/{id}

> Code samples

```bash
curl http://localhost:8989/api/v3/series/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}" \
  -d '{
    "id": 0,
    "title": "string",
    "alternateTitles": [
      {
        "title": "string",
        "seasonNumber": 0,
        "sceneSeasonNumber": 0,
        "sceneOrigin": "string",
        "comment": "string"
      }
    ],
    "sortTitle": "string",
    "status": "continuing",
    "profileName": "string",
    "overview": "string",
    "nextAiring": "1970-01-01T00:00:00Z",
    "previousAiring": "1970-01-01T00:00:00Z",
    "network": "string",
    "airTime": "string",
    "images": [
      {
        "coverType": "unknown",
        "url": "string",
        "remoteUrl": "string"
      }
    ],
    "language": {
      "id": 0,
      "name": "string"
    },
    "originalLanguage": {
      "id": 0,
      "name": "string"
    },
    "remotePoster": "string",
    "seasonType": "string",
    "seasons": [
      {
        "seasonNumber": 0,
        "monitored": true,
        "title": "string",
        "statistics": {
          "nextAiring": "1970-01-01T00:00:00Z",
          "previousAiring": "1970-01-01T00:00:00Z",
          "episodeFileCount": 0,
          "episodeCount": 0,
          "totalEpisodeCount": 0,
          "sizeOnDisk": 0,
          "releaseGroups": [
            "string"
          ]
        },
        "images": [
          {
            "coverType": "unknown",
            "url": "string",
            "remoteUrl": "string"
          }
        ]
      }
    ],
    "seasonTypes": [
      {
        "name": "string",
        "type": "string",
        "seasonNumbers": [
          0
        ],
        "episodeCount": 0
      }
    ],
    "translations": [
      {
        "language": {
          "id": 0,
          "name": "string"
        },
        "title": "string",
        "overview": "string"
      }
    ],
    "year": 0,
    "path": "string",
    "pendingPath": "string",
    "qualityProfileId": 0,
    "seasonFolder": true,
    "monitored": true,
    "monitorNewItems": "all",
    "useSceneNumbering": true,
    "runtime": 0,
    "tvdbId": 0,
    "tvRageId": 0,
    "tvMazeId": 0,
    "tmdbId": 0,
    "firstAired": "1970-01-01T00:00:00Z",
    "lastAired": "1970-01-01T00:00:00Z",
    "seriesType": "standard",
    "cleanTitle": "string",
    "originalTitle": "string",
    "cleanOriginalTitle": "string",
    "imdbId": "string",
    "titleSlug": "string",
    "rootFolderPath": "string",
    "folder": "string",
    "folders": [
      {
        "language": {
          "id": 0,
          "name": "string"
        },
        "folder": "string"
      }
    ],
    "certification": "string",
    "genres": [
      "string"
    ],
    "tags": [
      0
    ],
    "added": "1970-01-01T00:00:00Z",
    "addOptions": {
      "ignoreEpisodesWithFiles": true,
      "ignoreEpisodesWithoutFiles": true,
      "monitor": "unknown",
      "searchForMissingEpisodes": true,
      "searchForCutoffUnmetEpisodes": true
    },
    "ratings": {
      "votes": 0,
      "value": 0
    },
    "statistics": {
      "seasonCount": 0,
      "episodeFileCount": 0,
      "episodeCount": 0,
      "totalEpisodeCount": 0,
      "sizeOnDisk": 0,
      "releaseGroups": [
        "string"
      ]
    },
    "episodesChanged": true
  }'
```

`PUT /api/v3/series/{id}`

> Body parameter

```json
{
  "id": 0,
  "title": "string",
  "alternateTitles": [
    {
      "title": "string",
      "seasonNumber": 0,
      "sceneSeasonNumber": 0,
      "sceneOrigin": "string",
      "comment": "string"
    }
  ],
  "sortTitle": "string",
  "status": "continuing",
  "profileName": "string",
  "overview": "string",
  "nextAiring": "1970-01-01T00:00:00Z",
  "previousAiring": "1970-01-01T00:00:00Z",
  "network": "string",
  "airTime": "string",
  "images": [
    {
      "coverType": "unknown",
      "url": "string",
      "remoteUrl": "string"
    }
  ],
  "language": {
    "id": 0,
    "name": "string"
  },
  "originalLanguage": {
    "id": 0,
    "name": "string"
  },
  "remotePoster": "string",
  "seasonType": "string",
  "seasons": [
    {
      "seasonNumber": 0,
      "monitored": true,
      "title": "string",
      "statistics": {
        "nextAiring": "1970-01-01T00:00:00Z",
        "previousAiring": "1970-01-01T00:00:00Z",
        "episodeFileCount": 0,
        "episodeCount": 0,
        "totalEpisodeCount": 0,
        "sizeOnDisk": 0,
        "releaseGroups": [
          "string"
        ]
      },
      "images": [
        {
          "coverType": "unknown",
          "url": "string",
          "remoteUrl": "string"
        }
      ]
    }
  ],
  "seasonTypes": [
    {
      "name": "string",
      "type": "string",
      "seasonNumbers": [
        0
      ],
      "episodeCount": 0
    }
  ],
  "translations": [
    {
      "language": {
        "id": 0,
        "name": "string"
      },
      "title": "string",
      "overview": "string"
    }
  ],
  "year": 0,
  "path": "string",
  "pendingPath": "string",
  "qualityProfileId": 0,
  "seasonFolder": true,
  "monitored": true,
  "monitorNewItems": "all",
  "useSceneNumbering": true,
  "runtime": 0,
  "tvdbId": 0,
  "tvRageId": 0,
  "tvMazeId": 0,
  "tmdbId": 0,
  "firstAired": "1970-01-01T00:00:00Z",
  "lastAired": "1970-01-01T00:00:00Z",
  "seriesType": "standard",
  "cleanTitle": "string",
  "originalTitle": "string",
  "cleanOriginalTitle": "string",
  "imdbId": "string",
  "titleSlug": "string",
  "rootFolderPath": "string",
  "folder": "string",
  "folders": [
    {
      "language": {
        "id": 0,
        "name": "string"
      },
      "folder": "string"
    }
  ],
  "certification": "string",
  "genres": [
    "string"
  ],
  "tags": [
    0
  ],
  "added": "1970-01-01T00:00:00Z",
  "addOptions": {
    "ignoreEpisodesWithFiles": true,
    "ignoreEpisodesWithoutFiles": true,
    "monitor": "unknown",
    "searchForMissingEpisodes": true,
    "searchForCutoffUnmetEpisodes": true
  },
  "ratings": {
    "votes": 0,
    "value": 0
  },
  "statistics": {
    "seasonCount": 0,
    "episodeFileCount": 0,
    "episodeCount": 0,
    "totalEpisodeCount": 0,
    "sizeOnDisk": 0,
    "releaseGroups": [
      "string"
    ]
  },
  "episodesChanged": true
}
```

<h3 id="putapiv3seriesid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|moveFiles|query|boolean|false|none|
|id|path|string|true|none|
|body|body|[SeriesResource](#schemaseriesresource)|false|none|
|» id|body|integer(int32)|false|none|
|» title|body|string \| null|false|none|
|» alternateTitles|body|[[AlternateTitleResource](#schemaalternatetitleresource)]|false|none|
|» sortTitle|body|string \| null|false|none|
|» status|body|[SeriesStatusType](#schemaseriesstatustype)|false|none|
|» profileName|body|string \| null|false|none|
|» overview|body|string \| null|false|none|
|» nextAiring|body|string(date-time) \| null|false|none|
|» previousAiring|body|string(date-time) \| null|false|none|
|» network|body|string \| null|false|none|
|» airTime|body|string \| null|false|none|
|» images|body|[[MediaCover](#schemamediacover)]|false|none|
|» language|body|[Language](#schemalanguage)|false|none|
|» originalLanguage|body|[Language](#schemalanguage)|false|none|
|» remotePoster|body|string \| null|false|none|
|» seasonType|body|string \| null|false|none|
|» seasons|body|[[SeasonResource](#schemaseasonresource)]|false|none|
|» seasonTypes|body|[[SeasonTypeResource](#schemaseasontyperesource)]|false|none|
|» translations|body|[[SeriesTranslationResource](#schemaseriestranslationresource)]|false|none|
|» year|body|integer(int32)|false|none|
|» path|body|string \| null|false|none|
|» pendingPath|body|string \| null|false|none|
|» qualityProfileId|body|integer(int32)|false|none|
|» seasonFolder|body|boolean|false|none|
|» monitored|body|boolean|false|none|
|» monitorNewItems|body|[NewItemMonitorTypes](#schemanewitemmonitortypes)|false|none|
|» useSceneNumbering|body|boolean|false|none|
|» runtime|body|integer(int32)|false|none|
|» tvdbId|body|integer(int32)|false|none|
|» tvRageId|body|integer(int32)|false|none|
|» tvMazeId|body|integer(int32)|false|none|
|» tmdbId|body|integer(int32)|false|none|
|» firstAired|body|string(date-time) \| null|false|none|
|» lastAired|body|string(date-time) \| null|false|none|
|» seriesType|body|[SeriesTypes](#schemaseriestypes)|false|none|
|» cleanTitle|body|string \| null|false|none|
|» originalTitle|body|string \| null|false|none|
|» cleanOriginalTitle|body|string \| null|false|none|
|» imdbId|body|string \| null|false|none|
|» titleSlug|body|string \| null|false|none|
|» rootFolderPath|body|string \| null|false|none|
|» folder|body|string \| null|false|none|
|» folders|body|[[SeriesFolderResource](#schemaseriesfolderresource)]|false|none|
|» certification|body|string \| null|false|none|
|» genres|body|[string]|false|none|
|» tags|body|[integer(int32)]|false|none|
|» added|body|string(date-time)|false|none|
|» addOptions|body|[AddSeriesOptions](#schemaaddseriesoptions)|false|none|
|» ratings|body|[Ratings](#schemaratings)|false|none|
|» statistics|body|[SeriesStatisticsResource](#schemaseriesstatisticsresource)|false|none|
|» episodesChanged|body|boolean \| null|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» status|continuing|
|» status|ended|
|» status|upcoming|
|» status|deleted|
|» monitorNewItems|all|
|» monitorNewItems|none|
|» seriesType|standard|
|» seriesType|daily|
|» seriesType|anime|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "title": "string",
  "alternateTitles": [
    {
      "title": "string",
      "seasonNumber": 0,
      "sceneSeasonNumber": 0,
      "sceneOrigin": "string",
      "comment": "string"
    }
  ],
  "sortTitle": "string",
  "status": "continuing",
  "ended": true,
  "profileName": "string",
  "overview": "string",
  "nextAiring": "1970-01-01T00:00:00Z",
  "previousAiring": "1970-01-01T00:00:00Z",
  "network": "string",
  "airTime": "string",
  "images": [
    {
      "coverType": "unknown",
      "url": "string",
      "remoteUrl": "string"
    }
  ],
  "language": {
    "id": 0,
    "name": "string"
  },
  "originalLanguage": {
    "id": 0,
    "name": "string"
  },
  "remotePoster": "string",
  "seasonType": "string",
  "seasons": [
    {
      "seasonNumber": 0,
      "monitored": true,
      "title": "string",
      "statistics": {
        "nextAiring": "1970-01-01T00:00:00Z",
        "previousAiring": "1970-01-01T00:00:00Z",
        "episodeFileCount": 0,
        "episodeCount": 0,
        "totalEpisodeCount": 0,
        "sizeOnDisk": 0,
        "releaseGroups": [
          "string"
        ],
        "percentOfEpisodes": 0
      },
      "images": [
        {
          "coverType": "unknown",
          "url": "string",
          "remoteUrl": "string"
        }
      ]
    }
  ],
  "seasonTypes": [
    {
      "name": "string",
      "type": "string",
      "seasonNumbers": [
        0
      ],
      "episodeCount": 0
    }
  ],
  "translations": [
    {
      "language": {
        "id": 0,
        "name": "string"
      },
      "title": "string",
      "overview": "string"
    }
  ],
  "year": 0,
  "path": "string",
  "pendingPath": "string",
  "qualityProfileId": 0,
  "seasonFolder": true,
  "monitored": true,
  "monitorNewItems": "all",
  "useSceneNumbering": true,
  "runtime": 0,
  "tvdbId": 0,
  "tvRageId": 0,
  "tvMazeId": 0,
  "tmdbId": 0,
  "firstAired": "1970-01-01T00:00:00Z",
  "lastAired": "1970-01-01T00:00:00Z",
  "seriesType": "standard",
  "cleanTitle": "string",
  "originalTitle": "string",
  "cleanOriginalTitle": "string",
  "imdbId": "string",
  "titleSlug": "string",
  "rootFolderPath": "string",
  "folder": "string",
  "folders": [
    {
      "language": {
        "id": 0,
        "name": "string"
      },
      "folder": "string"
    }
  ],
  "certification": "string",
  "genres": [
    "string"
  ],
  "tags": [
    0
  ],
  "added": "1970-01-01T00:00:00Z",
  "addOptions": {
    "ignoreEpisodesWithFiles": true,
    "ignoreEpisodesWithoutFiles": true,
    "monitor": "unknown",
    "searchForMissingEpisodes": true,
    "searchForCutoffUnmetEpisodes": true
  },
  "ratings": {
    "votes": 0,
    "value": 0
  },
  "statistics": {
    "seasonCount": 0,
    "episodeFileCount": 0,
    "episodeCount": 0,
    "totalEpisodeCount": 0,
    "sizeOnDisk": 0,
    "releaseGroups": [
      "string"
    ],
    "percentOfEpisodes": 0
  },
  "episodesChanged": true,
  "languageProfileId": 0
}
```

<h3 id="putapiv3seriesid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[SeriesResource](#schemaseriesresource)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## delete/api/v3/series/{id}

> Code samples

```bash
curl http://localhost:8989/api/v3/series/0 \
  -X DELETE \
  -H "X-Api-Key: ${API_KEY}"
```

`DELETE /api/v3/series/{id}`

<h3 id="deleteapiv3seriesid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|none|
|deleteFiles|query|boolean|false|none|
|addImportListExclusion|query|boolean|false|none|

<h3 id="deleteapiv3seriesid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

<h1 id="sonarr-serieseditor">SeriesEditor</h1>

## put/api/v3/series/editor

> Code samples

```bash
curl http://localhost:8989/api/v3/series/editor \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H "X-Api-Key: ${API_KEY}" \
  -d '{
    "seriesIds": [
      0
    ],
    "monitored": true,
    "monitorNewItems": "all",
    "qualityProfileId": 0,
    "language": {
      "id": 0,
      "name": "string"
    },
    "seriesType": "standard",
    "seasonFolder": true,
    "rootFolderPath": "string",
    "tags": [
      0
    ],
    "applyTags": "add",
    "moveFiles": true,
    "deleteFiles": true,
    "addImportListExclusion": true
  }'
```

`PUT /api/v3/series/editor`

> Body parameter

```json
{
  "seriesIds": [
    0
  ],
  "monitored": true,
  "monitorNewItems": "all",
  "qualityProfileId": 0,
  "language": {
    "id": 0,
    "name": "string"
  },
  "seriesType": "standard",
  "seasonFolder": true,
  "rootFolderPath": "string",
  "tags": [
    0
  ],
  "applyTags": "add",
  "moveFiles": true,
  "deleteFiles": true,
  "addImportListExclusion": true
}
```

<h3 id="putapiv3serieseditor-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[SeriesEditorResource](#schemaserieseditorresource)|false|none|
|» seriesIds|body|[integer(int32)]|false|none|
|» monitored|body|boolean \| null|false|none|
|» monitorNewItems|body|[NewItemMonitorTypes](#schemanewitemmonitortypes)|false|none|
|» qualityProfileId|body|integer(int32) \| null|false|none|
|» language|body|[Language](#schemalanguage)|false|none|
|» seriesType|body|[SeriesTypes](#schemaseriestypes)|false|none|
|» seasonFolder|body|boolean \| null|false|none|
|» rootFolderPath|body|string \| null|false|none|
|» tags|body|[integer(int32)]|false|none|
|» applyTags|body|[ApplyTags](#schemaapplytags)|false|none|
|» moveFiles|body|boolean|false|none|
|» deleteFiles|body|boolean|false|none|
|» addImportListExclusion|body|boolean|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» monitorNewItems|all|
|» monitorNewItems|none|
|» seriesType|standard|
|» seriesType|daily|
|» seriesType|anime|
|» applyTags|add|
|» applyTags|remove|
|» applyTags|replace|

<h3 id="putapiv3serieseditor-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## delete/api/v3/series/editor

> Code samples

```bash
curl http://localhost:8989/api/v3/series/editor \
  -X DELETE \
  -H 'Content-Type: application/json' \
  -H "X-Api-Key: ${API_KEY}" \
  -d '{
    "seriesIds": [
      0
    ],
    "monitored": true,
    "monitorNewItems": "all",
    "qualityProfileId": 0,
    "language": {
      "id": 0,
      "name": "string"
    },
    "seriesType": "standard",
    "seasonFolder": true,
    "rootFolderPath": "string",
    "tags": [
      0
    ],
    "applyTags": "add",
    "moveFiles": true,
    "deleteFiles": true,
    "addImportListExclusion": true
  }'
```

`DELETE /api/v3/series/editor`

> Body parameter

```json
{
  "seriesIds": [
    0
  ],
  "monitored": true,
  "monitorNewItems": "all",
  "qualityProfileId": 0,
  "language": {
    "id": 0,
    "name": "string"
  },
  "seriesType": "standard",
  "seasonFolder": true,
  "rootFolderPath": "string",
  "tags": [
    0
  ],
  "applyTags": "add",
  "moveFiles": true,
  "deleteFiles": true,
  "addImportListExclusion": true
}
```

<h3 id="deleteapiv3serieseditor-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[SeriesEditorResource](#schemaserieseditorresource)|false|none|
|» seriesIds|body|[integer(int32)]|false|none|
|» monitored|body|boolean \| null|false|none|
|» monitorNewItems|body|[NewItemMonitorTypes](#schemanewitemmonitortypes)|false|none|
|» qualityProfileId|body|integer(int32) \| null|false|none|
|» language|body|[Language](#schemalanguage)|false|none|
|» seriesType|body|[SeriesTypes](#schemaseriestypes)|false|none|
|» seasonFolder|body|boolean \| null|false|none|
|» rootFolderPath|body|string \| null|false|none|
|» tags|body|[integer(int32)]|false|none|
|» applyTags|body|[ApplyTags](#schemaapplytags)|false|none|
|» moveFiles|body|boolean|false|none|
|» deleteFiles|body|boolean|false|none|
|» addImportListExclusion|body|boolean|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» monitorNewItems|all|
|» monitorNewItems|none|
|» seriesType|standard|
|» seriesType|daily|
|» seriesType|anime|
|» applyTags|add|
|» applyTags|remove|
|» applyTags|replace|

<h3 id="deleteapiv3serieseditor-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

<h1 id="sonarr-seriesfolder">SeriesFolder</h1>

## get/api/v3/series/{id}/folder

> Code samples

```bash
curl http://localhost:8989/api/v3/series/0/folder \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /api/v3/series/{id}/folder`

<h3 id="getapiv3seriesidfolder-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|none|

<h3 id="getapiv3seriesidfolder-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

<h1 id="sonarr-seriesimport">SeriesImport</h1>

## post/api/v3/series/import

> Code samples

```bash
curl http://localhost:8989/api/v3/series/import \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "X-Api-Key: ${API_KEY}" \
  -d '[
    {
      "id": 0,
      "title": "string",
      "alternateTitles": [
        {
          "title": "string",
          "seasonNumber": 0,
          "sceneSeasonNumber": 0,
          "sceneOrigin": "string",
          "comment": "string"
        }
      ],
      "sortTitle": "string",
      "status": "continuing",
      "profileName": "string",
      "overview": "string",
      "nextAiring": "1970-01-01T00:00:00Z",
      "previousAiring": "1970-01-01T00:00:00Z",
      "network": "string",
      "airTime": "string",
      "images": [
        {
          "coverType": "unknown",
          "url": "string",
          "remoteUrl": "string"
        }
      ],
      "language": {
        "id": 0,
        "name": "string"
      },
      "originalLanguage": {
        "id": 0,
        "name": "string"
      },
      "remotePoster": "string",
      "seasonType": "string",
      "seasons": [
        {
          "seasonNumber": 0,
          "monitored": true,
          "title": "string",
          "statistics": {
            "nextAiring": "1970-01-01T00:00:00Z",
            "previousAiring": "1970-01-01T00:00:00Z",
            "episodeFileCount": 0,
            "episodeCount": 0,
            "totalEpisodeCount": 0,
            "sizeOnDisk": 0,
            "releaseGroups": [
              "string"
            ]
          },
          "images": [
            {
              "coverType": "unknown",
              "url": "string",
              "remoteUrl": "string"
            }
          ]
        }
      ],
      "seasonTypes": [
        {
          "name": "string",
          "type": "string",
          "seasonNumbers": [
            0
          ],
          "episodeCount": 0
        }
      ],
      "translations": [
        {
          "language": {
            "id": 0,
            "name": "string"
          },
          "title": "string",
          "overview": "string"
        }
      ],
      "year": 0,
      "path": "string",
      "pendingPath": "string",
      "qualityProfileId": 0,
      "seasonFolder": true,
      "monitored": true,
      "monitorNewItems": "all",
      "useSceneNumbering": true,
      "runtime": 0,
      "tvdbId": 0,
      "tvRageId": 0,
      "tvMazeId": 0,
      "tmdbId": 0,
      "firstAired": "1970-01-01T00:00:00Z",
      "lastAired": "1970-01-01T00:00:00Z",
      "seriesType": "standard",
      "cleanTitle": "string",
      "originalTitle": "string",
      "cleanOriginalTitle": "string",
      "imdbId": "string",
      "titleSlug": "string",
      "rootFolderPath": "string",
      "folder": "string",
      "folders": [
        {
          "language": {
            "id": 0,
            "name": "string"
          },
          "folder": "string"
        }
      ],
      "certification": "string",
      "genres": [
        "string"
      ],
      "tags": [
        0
      ],
      "added": "1970-01-01T00:00:00Z",
      "addOptions": {
        "ignoreEpisodesWithFiles": true,
        "ignoreEpisodesWithoutFiles": true,
        "monitor": "unknown",
        "searchForMissingEpisodes": true,
        "searchForCutoffUnmetEpisodes": true
      },
      "ratings": {
        "votes": 0,
        "value": 0
      },
      "statistics": {
        "seasonCount": 0,
        "episodeFileCount": 0,
        "episodeCount": 0,
        "totalEpisodeCount": 0,
        "sizeOnDisk": 0,
        "releaseGroups": [
          "string"
        ]
      },
      "episodesChanged": true
    }
  ]'
```

`POST /api/v3/series/import`

> Body parameter

```json
[
  {
    "id": 0,
    "title": "string",
    "alternateTitles": [
      {
        "title": "string",
        "seasonNumber": 0,
        "sceneSeasonNumber": 0,
        "sceneOrigin": "string",
        "comment": "string"
      }
    ],
    "sortTitle": "string",
    "status": "continuing",
    "profileName": "string",
    "overview": "string",
    "nextAiring": "1970-01-01T00:00:00Z",
    "previousAiring": "1970-01-01T00:00:00Z",
    "network": "string",
    "airTime": "string",
    "images": [
      {
        "coverType": "unknown",
        "url": "string",
        "remoteUrl": "string"
      }
    ],
    "language": {
      "id": 0,
      "name": "string"
    },
    "originalLanguage": {
      "id": 0,
      "name": "string"
    },
    "remotePoster": "string",
    "seasonType": "string",
    "seasons": [
      {
        "seasonNumber": 0,
        "monitored": true,
        "title": "string",
        "statistics": {
          "nextAiring": "1970-01-01T00:00:00Z",
          "previousAiring": "1970-01-01T00:00:00Z",
          "episodeFileCount": 0,
          "episodeCount": 0,
          "totalEpisodeCount": 0,
          "sizeOnDisk": 0,
          "releaseGroups": [
            "string"
          ]
        },
        "images": [
          {
            "coverType": "unknown",
            "url": "string",
            "remoteUrl": "string"
          }
        ]
      }
    ],
    "seasonTypes": [
      {
        "name": "string",
        "type": "string",
        "seasonNumbers": [
          0
        ],
        "episodeCount": 0
      }
    ],
    "translations": [
      {
        "language": {
          "id": 0,
          "name": "string"
        },
        "title": "string",
        "overview": "string"
      }
    ],
    "year": 0,
    "path": "string",
    "pendingPath": "string",
    "qualityProfileId": 0,
    "seasonFolder": true,
    "monitored": true,
    "monitorNewItems": "all",
    "useSceneNumbering": true,
    "runtime": 0,
    "tvdbId": 0,
    "tvRageId": 0,
    "tvMazeId": 0,
    "tmdbId": 0,
    "firstAired": "1970-01-01T00:00:00Z",
    "lastAired": "1970-01-01T00:00:00Z",
    "seriesType": "standard",
    "cleanTitle": "string",
    "originalTitle": "string",
    "cleanOriginalTitle": "string",
    "imdbId": "string",
    "titleSlug": "string",
    "rootFolderPath": "string",
    "folder": "string",
    "folders": [
      {
        "language": {
          "id": 0,
          "name": "string"
        },
        "folder": "string"
      }
    ],
    "certification": "string",
    "genres": [
      "string"
    ],
    "tags": [
      0
    ],
    "added": "1970-01-01T00:00:00Z",
    "addOptions": {
      "ignoreEpisodesWithFiles": true,
      "ignoreEpisodesWithoutFiles": true,
      "monitor": "unknown",
      "searchForMissingEpisodes": true,
      "searchForCutoffUnmetEpisodes": true
    },
    "ratings": {
      "votes": 0,
      "value": 0
    },
    "statistics": {
      "seasonCount": 0,
      "episodeFileCount": 0,
      "episodeCount": 0,
      "totalEpisodeCount": 0,
      "sizeOnDisk": 0,
      "releaseGroups": [
        "string"
      ]
    },
    "episodesChanged": true
  }
]
```

<h3 id="postapiv3seriesimport-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[[SeriesResource](#schemaseriesresource)]|false|none|

<h3 id="postapiv3seriesimport-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

<h1 id="sonarr-serieslookup">SeriesLookup</h1>

## get/api/v3/series/lookup

> Code samples

```bash
curl http://localhost:8989/api/v3/series/lookup \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /api/v3/series/lookup`

<h3 id="getapiv3serieslookup-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|term|query|string|false|none|
|language|query|integer(int32)|false|none|

> Example responses

> 200 Response

```json
[
  {
    "id": 0,
    "title": "string",
    "alternateTitles": [
      {
        "title": "string",
        "seasonNumber": 0,
        "sceneSeasonNumber": 0,
        "sceneOrigin": "string",
        "comment": "string"
      }
    ],
    "sortTitle": "string",
    "status": "continuing",
    "ended": true,
    "profileName": "string",
    "overview": "string",
    "nextAiring": "1970-01-01T00:00:00Z",
    "previousAiring": "1970-01-01T00:00:00Z",
    "network": "string",
    "airTime": "string",
    "images": [
      {
        "coverType": "unknown",
        "url": "string",
        "remoteUrl": "string"
      }
    ],
    "language": {
      "id": 0,
      "name": "string"
    },
    "originalLanguage": {
      "id": 0,
      "name": "string"
    },
    "remotePoster": "string",
    "seasonType": "string",
    "seasons": [
      {
        "seasonNumber": 0,
        "monitored": true,
        "title": "string",
        "statistics": {
          "nextAiring": "1970-01-01T00:00:00Z",
          "previousAiring": "1970-01-01T00:00:00Z",
          "episodeFileCount": 0,
          "episodeCount": 0,
          "totalEpisodeCount": 0,
          "sizeOnDisk": 0,
          "releaseGroups": [
            "string"
          ],
          "percentOfEpisodes": 0
        },
        "images": [
          {
            "coverType": "unknown",
            "url": "string",
            "remoteUrl": "string"
          }
        ]
      }
    ],
    "seasonTypes": [
      {
        "name": "string",
        "type": "string",
        "seasonNumbers": [
          0
        ],
        "episodeCount": 0
      }
    ],
    "translations": [
      {
        "language": {
          "id": 0,
          "name": "string"
        },
        "title": "string",
        "overview": "string"
      }
    ],
    "year": 0,
    "path": "string",
    "pendingPath": "string",
    "qualityProfileId": 0,
    "seasonFolder": true,
    "monitored": true,
    "monitorNewItems": "all",
    "useSceneNumbering": true,
    "runtime": 0,
    "tvdbId": 0,
    "tvRageId": 0,
    "tvMazeId": 0,
    "tmdbId": 0,
    "firstAired": "1970-01-01T00:00:00Z",
    "lastAired": "1970-01-01T00:00:00Z",
    "seriesType": "standard",
    "cleanTitle": "string",
    "originalTitle": "string",
    "cleanOriginalTitle": "string",
    "imdbId": "string",
    "titleSlug": "string",
    "rootFolderPath": "string",
    "folder": "string",
    "folders": [
      {
        "language": {
          "id": 0,
          "name": "string"
        },
        "folder": "string"
      }
    ],
    "certification": "string",
    "genres": [
      "string"
    ],
    "tags": [
      0
    ],
    "added": "1970-01-01T00:00:00Z",
    "addOptions": {
      "ignoreEpisodesWithFiles": true,
      "ignoreEpisodesWithoutFiles": true,
      "monitor": "unknown",
      "searchForMissingEpisodes": true,
      "searchForCutoffUnmetEpisodes": true
    },
    "ratings": {
      "votes": 0,
      "value": 0
    },
    "statistics": {
      "seasonCount": 0,
      "episodeFileCount": 0,
      "episodeCount": 0,
      "totalEpisodeCount": 0,
      "sizeOnDisk": 0,
      "releaseGroups": [
        "string"
      ],
      "percentOfEpisodes": 0
    },
    "episodesChanged": true,
    "languageProfileId": 0
  }
]
```

<h3 id="getapiv3serieslookup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="getapiv3serieslookup-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[SeriesResource](#schemaseriesresource)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

<h1 id="sonarr-system">System</h1>

## get/api/v3/system/status

> Code samples

```bash
curl http://localhost:8989/api/v3/system/status \
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
  "authentication": "none",
  "sqliteVersion": "string",
  "migrationVersion": 0,
  "urlBase": "string",
  "runtimeVersion": "string",
  "runtimeName": "string",
  "startTime": "1970-01-01T00:00:00Z",
  "packageVersion": "string",
  "packageAuthor": "string",
  "packageUpdateMechanism": "builtIn",
  "packageUpdateMechanismMessage": "string",
  "databaseVersion": "string",
  "databaseType": "sqLite"
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
curl http://localhost:8989/api/v3/system/routes \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /api/v3/system/routes`

<h3 id="getapiv3systemroutes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## get/api/v3/system/routes/duplicate

> Code samples

```bash
curl http://localhost:8989/api/v3/system/routes/duplicate \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /api/v3/system/routes/duplicate`

<h3 id="getapiv3systemroutesduplicate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## post/api/v3/system/shutdown

> Code samples

```bash
curl http://localhost:8989/api/v3/system/shutdown \
  -X POST \
  -H "X-Api-Key: ${API_KEY}"
```

`POST /api/v3/system/shutdown`

<h3 id="postapiv3systemshutdown-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## post/api/v3/system/restart

> Code samples

```bash
curl http://localhost:8989/api/v3/system/restart \
  -X POST \
  -H "X-Api-Key: ${API_KEY}"
```

`POST /api/v3/system/restart`

<h3 id="postapiv3systemrestart-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

<h1 id="sonarr-tag">Tag</h1>

## get/api/v3/tag

> Code samples

```bash
curl http://localhost:8989/api/v3/tag \
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
curl http://localhost:8989/api/v3/tag \
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

> 200 Response

```json
{
  "id": 0,
  "label": "string"
}
```

<h3 id="postapiv3tag-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[TagResource](#schematagresource)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## get/api/v3/tag/{id}

> Code samples

```bash
curl http://localhost:8989/api/v3/tag/0 \
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
curl http://localhost:8989/api/v3/tag/string \
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

> 200 Response

```json
{
  "id": 0,
  "label": "string"
}
```

<h3 id="putapiv3tagid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[TagResource](#schematagresource)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## delete/api/v3/tag/{id}

> Code samples

```bash
curl http://localhost:8989/api/v3/tag/0 \
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

<h1 id="sonarr-tagdetails">TagDetails</h1>

## get/api/v3/tag/detail

> Code samples

```bash
curl http://localhost:8989/api/v3/tag/detail \
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
    "restrictionIds": [
      0
    ],
    "excludedReleaseProfileIds": [
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
    "seriesIds": [
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
curl http://localhost:8989/api/v3/tag/detail/0 \
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
  "restrictionIds": [
    0
  ],
  "excludedReleaseProfileIds": [
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
  "seriesIds": [
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

<h1 id="sonarr-task">Task</h1>

## get/api/v3/system/task

> Code samples

```bash
curl http://localhost:8989/api/v3/system/task \
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
curl http://localhost:8989/api/v3/system/task/0 \
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

<h1 id="sonarr-uiconfig">UiConfig</h1>

## get/api/v3/config/ui/{id}

> Code samples

```bash
curl http://localhost:8989/api/v3/config/ui/0 \
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
  "shortDateFormat": "string",
  "longDateFormat": "string",
  "timeFormat": "string",
  "timeZone": "string",
  "showRelativeDates": true,
  "enableColorImpairedMode": true,
  "theme": "string",
  "uiLanguage": 0
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
curl http://localhost:8989/api/v3/config/ui/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}" \
  -d '{
    "id": 0,
    "firstDayOfWeek": 0,
    "calendarWeekColumnHeader": "string",
    "shortDateFormat": "string",
    "longDateFormat": "string",
    "timeFormat": "string",
    "timeZone": "string",
    "showRelativeDates": true,
    "enableColorImpairedMode": true,
    "theme": "string",
    "uiLanguage": 0
  }'
```

`PUT /api/v3/config/ui/{id}`

> Body parameter

```json
{
  "id": 0,
  "firstDayOfWeek": 0,
  "calendarWeekColumnHeader": "string",
  "shortDateFormat": "string",
  "longDateFormat": "string",
  "timeFormat": "string",
  "timeZone": "string",
  "showRelativeDates": true,
  "enableColorImpairedMode": true,
  "theme": "string",
  "uiLanguage": 0
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
|» shortDateFormat|body|string \| null|false|none|
|» longDateFormat|body|string \| null|false|none|
|» timeFormat|body|string \| null|false|none|
|» timeZone|body|string \| null|false|none|
|» showRelativeDates|body|boolean|false|none|
|» enableColorImpairedMode|body|boolean|false|none|
|» theme|body|string \| null|false|none|
|» uiLanguage|body|integer(int32)|false|none|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "firstDayOfWeek": 0,
  "calendarWeekColumnHeader": "string",
  "shortDateFormat": "string",
  "longDateFormat": "string",
  "timeFormat": "string",
  "timeZone": "string",
  "showRelativeDates": true,
  "enableColorImpairedMode": true,
  "theme": "string",
  "uiLanguage": 0
}
```

<h3 id="putapiv3configuiid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[UiConfigResource](#schemauiconfigresource)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## get/api/v3/config/ui

> Code samples

```bash
curl http://localhost:8989/api/v3/config/ui \
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
  "shortDateFormat": "string",
  "longDateFormat": "string",
  "timeFormat": "string",
  "timeZone": "string",
  "showRelativeDates": true,
  "enableColorImpairedMode": true,
  "theme": "string",
  "uiLanguage": 0
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

<h1 id="sonarr-update">Update</h1>

## get/api/v3/update

> Code samples

```bash
curl http://localhost:8989/api/v3/update \
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

<h1 id="sonarr-updatelogfile">UpdateLogFile</h1>

## get/api/v3/log/file/update

> Code samples

```bash
curl http://localhost:8989/api/v3/log/file/update \
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
curl http://localhost:8989/api/v3/log/file/update/string \
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
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

# Schemas

<h2 id="tocS_AddSeriesOptions">AddSeriesOptions</h2>
<!-- backwards compatibility -->
<a id="schemaaddseriesoptions"></a>
<a id="schema_AddSeriesOptions"></a>
<a id="tocSaddseriesoptions"></a>
<a id="tocsaddseriesoptions"></a>

```json
{
  "ignoreEpisodesWithFiles": true,
  "ignoreEpisodesWithoutFiles": true,
  "monitor": "unknown",
  "searchForMissingEpisodes": true,
  "searchForCutoffUnmetEpisodes": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ignoreEpisodesWithFiles|boolean|false|none|none|
|ignoreEpisodesWithoutFiles|boolean|false|none|none|
|monitor|[MonitorTypes](#schemamonitortypes)|false|none|none|
|searchForMissingEpisodes|boolean|false|none|none|
|searchForCutoffUnmetEpisodes|boolean|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|monitor|unknown|
|monitor|all|
|monitor|future|
|monitor|missing|
|monitor|existing|
|monitor|firstSeason|
|monitor|lastSeason|
|monitor|latestSeason|
|monitor|pilot|
|monitor|recent|
|monitor|monitorSpecials|
|monitor|unmonitorSpecials|
|monitor|none|
|monitor|skip|

<h2 id="tocS_AlternateTitleResource">AlternateTitleResource</h2>
<!-- backwards compatibility -->
<a id="schemaalternatetitleresource"></a>
<a id="schema_AlternateTitleResource"></a>
<a id="tocSalternatetitleresource"></a>
<a id="tocsalternatetitleresource"></a>

```json
{
  "title": "string",
  "seasonNumber": 0,
  "sceneSeasonNumber": 0,
  "sceneOrigin": "string",
  "comment": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|title|string \| null|false|none|none|
|seasonNumber|integer(int32) \| null|false|none|none|
|sceneSeasonNumber|integer(int32) \| null|false|none|none|
|sceneOrigin|string \| null|false|none|none|
|comment|string \| null|false|none|none|

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
              "hint": "string"
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
          "hint": "string"
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
  "seriesId": 0,
  "episodeIds": [
    0
  ],
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
      "resolution": 0
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
                  "hint": "string"
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
  "series": {
    "id": 0,
    "title": "string",
    "alternateTitles": [
      {
        "title": "string",
        "seasonNumber": 0,
        "sceneSeasonNumber": 0,
        "sceneOrigin": "string",
        "comment": "string"
      }
    ],
    "sortTitle": "string",
    "status": "continuing",
    "ended": true,
    "profileName": "string",
    "overview": "string",
    "nextAiring": "1970-01-01T00:00:00Z",
    "previousAiring": "1970-01-01T00:00:00Z",
    "network": "string",
    "airTime": "string",
    "images": [
      {
        "coverType": "unknown",
        "url": "string",
        "remoteUrl": "string"
      }
    ],
    "language": {
      "id": 0,
      "name": "string"
    },
    "originalLanguage": {
      "id": 0,
      "name": "string"
    },
    "remotePoster": "string",
    "seasonType": "string",
    "seasons": [
      {
        "seasonNumber": 0,
        "monitored": true,
        "title": "string",
        "statistics": {
          "nextAiring": "1970-01-01T00:00:00Z",
          "previousAiring": "1970-01-01T00:00:00Z",
          "episodeFileCount": 0,
          "episodeCount": 0,
          "totalEpisodeCount": 0,
          "sizeOnDisk": 0,
          "releaseGroups": [
            "string"
          ],
          "percentOfEpisodes": 0
        },
        "images": [
          {
            "coverType": "unknown",
            "url": "string",
            "remoteUrl": "string"
          }
        ]
      }
    ],
    "seasonTypes": [
      {
        "name": "string",
        "type": "string",
        "seasonNumbers": [
          0
        ],
        "episodeCount": 0
      }
    ],
    "translations": [
      {
        "language": {
          "id": 0,
          "name": "string"
        },
        "title": "string",
        "overview": "string"
      }
    ],
    "year": 0,
    "path": "string",
    "pendingPath": "string",
    "qualityProfileId": 0,
    "seasonFolder": true,
    "monitored": true,
    "monitorNewItems": "all",
    "useSceneNumbering": true,
    "runtime": 0,
    "tvdbId": 0,
    "tvRageId": 0,
    "tvMazeId": 0,
    "tmdbId": 0,
    "firstAired": "1970-01-01T00:00:00Z",
    "lastAired": "1970-01-01T00:00:00Z",
    "seriesType": "standard",
    "cleanTitle": "string",
    "originalTitle": "string",
    "cleanOriginalTitle": "string",
    "imdbId": "string",
    "titleSlug": "string",
    "rootFolderPath": "string",
    "folder": "string",
    "folders": [
      {
        "language": {
          "id": 0,
          "name": "string"
        },
        "folder": "string"
      }
    ],
    "certification": "string",
    "genres": [
      "string"
    ],
    "tags": [
      0
    ],
    "added": "1970-01-01T00:00:00Z",
    "addOptions": {
      "ignoreEpisodesWithFiles": true,
      "ignoreEpisodesWithoutFiles": true,
      "monitor": "unknown",
      "searchForMissingEpisodes": true,
      "searchForCutoffUnmetEpisodes": true
    },
    "ratings": {
      "votes": 0,
      "value": 0
    },
    "statistics": {
      "seasonCount": 0,
      "episodeFileCount": 0,
      "episodeCount": 0,
      "totalEpisodeCount": 0,
      "sizeOnDisk": 0,
      "releaseGroups": [
        "string"
      ],
      "percentOfEpisodes": 0
    },
    "episodesChanged": true,
    "languageProfileId": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|false|none|none|
|seriesId|integer(int32)|false|none|none|
|episodeIds|[integer(int32)]|false|none|none|
|sourceTitle|string \| null|false|none|none|
|languages|[[Language](#schemalanguage)]|false|none|none|
|quality|[QualityModel](#schemaqualitymodel)|false|none|none|
|customFormats|[[CustomFormatResource](#schemacustomformatresource)]|false|none|none|
|date|string(date-time)|false|none|none|
|protocol|[DownloadProtocol](#schemadownloadprotocol)|false|none|none|
|indexer|string \| null|false|none|none|
|message|string \| null|false|none|none|
|series|[SeriesResource](#schemaseriesresource)|false|none|none|

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
      "seriesId": 0,
      "episodeIds": [
        0
      ],
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
          "resolution": 0
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
                      "hint": "string"
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
      "series": {
        "id": 0,
        "title": "string",
        "alternateTitles": [
          {
            "title": "string",
            "seasonNumber": 0,
            "sceneSeasonNumber": 0,
            "sceneOrigin": "string",
            "comment": "string"
          }
        ],
        "sortTitle": "string",
        "status": "continuing",
        "ended": true,
        "profileName": "string",
        "overview": "string",
        "nextAiring": "1970-01-01T00:00:00Z",
        "previousAiring": "1970-01-01T00:00:00Z",
        "network": "string",
        "airTime": "string",
        "images": [
          {
            "coverType": "unknown",
            "url": "string",
            "remoteUrl": "string"
          }
        ],
        "language": {
          "id": 0,
          "name": "string"
        },
        "originalLanguage": {
          "id": 0,
          "name": "string"
        },
        "remotePoster": "string",
        "seasonType": "string",
        "seasons": [
          {
            "seasonNumber": 0,
            "monitored": true,
            "title": "string",
            "statistics": {
              "nextAiring": "1970-01-01T00:00:00Z",
              "previousAiring": "1970-01-01T00:00:00Z",
              "episodeFileCount": 0,
              "episodeCount": 0,
              "totalEpisodeCount": 0,
              "sizeOnDisk": 0,
              "releaseGroups": [
                "string"
              ],
              "percentOfEpisodes": 0
            },
            "images": [
              {
                "coverType": "unknown",
                "url": "string",
                "remoteUrl": "string"
              }
            ]
          }
        ],
        "seasonTypes": [
          {
            "name": "string",
            "type": "string",
            "seasonNumbers": [
              0
            ],
            "episodeCount": 0
          }
        ],
        "translations": [
          {
            "language": {
              "id": 0,
              "name": "string"
            },
            "title": "string",
            "overview": "string"
          }
        ],
        "year": 0,
        "path": "string",
        "pendingPath": "string",
        "qualityProfileId": 0,
        "seasonFolder": true,
        "monitored": true,
        "monitorNewItems": "all",
        "useSceneNumbering": true,
        "runtime": 0,
        "tvdbId": 0,
        "tvRageId": 0,
        "tvMazeId": 0,
        "tmdbId": 0,
        "firstAired": "1970-01-01T00:00:00Z",
        "lastAired": "1970-01-01T00:00:00Z",
        "seriesType": "standard",
        "cleanTitle": "string",
        "originalTitle": "string",
        "cleanOriginalTitle": "string",
        "imdbId": "string",
        "titleSlug": "string",
        "rootFolderPath": "string",
        "folder": "string",
        "folders": [
          {
            "language": {
              "id": 0,
              "name": "string"
            },
            "folder": "string"
          }
        ],
        "certification": "string",
        "genres": [
          "string"
        ],
        "tags": [
          0
        ],
        "added": "1970-01-01T00:00:00Z",
        "addOptions": {
          "ignoreEpisodesWithFiles": true,
          "ignoreEpisodesWithoutFiles": true,
          "monitor": "unknown",
          "searchForMissingEpisodes": true,
          "searchForCutoffUnmetEpisodes": true
        },
        "ratings": {
          "votes": 0,
          "value": 0
        },
        "statistics": {
          "seasonCount": 0,
          "episodeFileCount": 0,
          "episodeCount": 0,
          "totalEpisodeCount": 0,
          "sizeOnDisk": 0,
          "releaseGroups": [
            "string"
          ],
          "percentOfEpisodes": 0
        },
        "episodesChanged": true,
        "languageProfileId": 0
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

<h2 id="tocS_CertificateValidationType">CertificateValidationType</h2>
<!-- backwards compatibility -->
<a id="schemacertificatevalidationtype"></a>
<a id="schema_CertificateValidationType"></a>
<a id="tocScertificatevalidationtype"></a>
<a id="tocscertificatevalidationtype"></a>

```json
"enabled"
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
|result|indeterminate|
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
              "hint": "string"
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
          "hint": "string"
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
              "hint": "string"
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
          "hint": "string"
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
              "hint": "string"
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

<h2 id="tocS_EpisodeFileListResource">EpisodeFileListResource</h2>
<!-- backwards compatibility -->
<a id="schemaepisodefilelistresource"></a>
<a id="schema_EpisodeFileListResource"></a>
<a id="tocSepisodefilelistresource"></a>
<a id="tocsepisodefilelistresource"></a>

```json
{
  "episodeFileIds": [
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
      "resolution": 0
    },
    "revision": {
      "version": 0,
      "real": 0,
      "isRepack": true
    }
  },
  "sceneName": "string",
  "releaseGroup": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|episodeFileIds|[integer(int32)]|false|none|none|
|languages|[[Language](#schemalanguage)]|false|none|none|
|quality|[QualityModel](#schemaqualitymodel)|false|none|none|
|sceneName|string \| null|false|none|none|
|releaseGroup|string \| null|false|none|none|

<h2 id="tocS_EpisodeFileResource">EpisodeFileResource</h2>
<!-- backwards compatibility -->
<a id="schemaepisodefileresource"></a>
<a id="schema_EpisodeFileResource"></a>
<a id="tocSepisodefileresource"></a>
<a id="tocsepisodefileresource"></a>

```json
{
  "id": 0,
  "seriesId": 0,
  "seasonNumber": 0,
  "relativePath": "string",
  "path": "string",
  "size": 0,
  "dateAdded": "1970-01-01T00:00:00Z",
  "sceneName": "string",
  "releaseGroup": "string",
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
      "resolution": 0
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
                  "hint": "string"
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
  "releaseType": "unknown",
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
  "qualityCutoffNotMet": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|false|none|none|
|seriesId|integer(int32)|false|none|none|
|seasonNumber|integer(int32)|false|none|none|
|relativePath|string \| null|false|none|none|
|path|string \| null|false|none|none|
|size|integer(int64)|false|none|none|
|dateAdded|string(date-time)|false|none|none|
|sceneName|string \| null|false|none|none|
|releaseGroup|string \| null|false|none|none|
|languages|[[Language](#schemalanguage)]|false|none|none|
|quality|[QualityModel](#schemaqualitymodel)|false|none|none|
|customFormats|[[CustomFormatResource](#schemacustomformatresource)]|false|none|none|
|customFormatScore|integer(int32)|false|none|none|
|indexerFlags|integer(int32) \| null|false|none|none|
|releaseType|[ReleaseType](#schemareleasetype)|false|none|none|
|mediaInfo|[MediaInfoResource](#schemamediainforesource)|false|none|none|
|qualityCutoffNotMet|boolean|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|releaseType|unknown|
|releaseType|singleEpisode|
|releaseType|multiEpisode|
|releaseType|seasonPack|

<h2 id="tocS_EpisodeHistoryEventType">EpisodeHistoryEventType</h2>
<!-- backwards compatibility -->
<a id="schemaepisodehistoryeventtype"></a>
<a id="schema_EpisodeHistoryEventType"></a>
<a id="tocSepisodehistoryeventtype"></a>
<a id="tocsepisodehistoryeventtype"></a>

```json
"unknown"
```

<h2 id="tocS_EpisodeResource">EpisodeResource</h2>
<!-- backwards compatibility -->
<a id="schemaepisoderesource"></a>
<a id="schema_EpisodeResource"></a>
<a id="tocSepisoderesource"></a>
<a id="tocsepisoderesource"></a>

```json
{
  "id": 0,
  "seriesId": 0,
  "tvdbId": 0,
  "episodeFileId": 0,
  "seasonNumber": 0,
  "episodeNumber": 0,
  "title": "string",
  "airDate": "string",
  "airDateUtc": "1970-01-01T00:00:00Z",
  "lastSearchTime": "1970-01-01T00:00:00Z",
  "runtime": 0,
  "finaleType": "string",
  "overview": "string",
  "episodeFile": {
    "id": 0,
    "seriesId": 0,
    "seasonNumber": 0,
    "relativePath": "string",
    "path": "string",
    "size": 0,
    "dateAdded": "1970-01-01T00:00:00Z",
    "sceneName": "string",
    "releaseGroup": "string",
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
        "resolution": 0
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
                    "hint": "string"
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
    "releaseType": "unknown",
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
    "qualityCutoffNotMet": true
  },
  "hasFile": true,
  "monitored": true,
  "absoluteEpisodeNumber": 0,
  "sceneAbsoluteEpisodeNumber": 0,
  "sceneEpisodeNumber": 0,
  "sceneSeasonNumber": 0,
  "unverifiedSceneNumbering": true,
  "series": {
    "id": 0,
    "title": "string",
    "alternateTitles": [
      {
        "title": "string",
        "seasonNumber": 0,
        "sceneSeasonNumber": 0,
        "sceneOrigin": "string",
        "comment": "string"
      }
    ],
    "sortTitle": "string",
    "status": "continuing",
    "ended": true,
    "profileName": "string",
    "overview": "string",
    "nextAiring": "1970-01-01T00:00:00Z",
    "previousAiring": "1970-01-01T00:00:00Z",
    "network": "string",
    "airTime": "string",
    "images": [
      {
        "coverType": "unknown",
        "url": "string",
        "remoteUrl": "string"
      }
    ],
    "language": {
      "id": 0,
      "name": "string"
    },
    "originalLanguage": {
      "id": 0,
      "name": "string"
    },
    "remotePoster": "string",
    "seasonType": "string",
    "seasons": [
      {
        "seasonNumber": 0,
        "monitored": true,
        "title": "string",
        "statistics": {
          "nextAiring": "1970-01-01T00:00:00Z",
          "previousAiring": "1970-01-01T00:00:00Z",
          "episodeFileCount": 0,
          "episodeCount": 0,
          "totalEpisodeCount": 0,
          "sizeOnDisk": 0,
          "releaseGroups": [
            "string"
          ],
          "percentOfEpisodes": 0
        },
        "images": [
          {
            "coverType": "unknown",
            "url": "string",
            "remoteUrl": "string"
          }
        ]
      }
    ],
    "seasonTypes": [
      {
        "name": "string",
        "type": "string",
        "seasonNumbers": [
          0
        ],
        "episodeCount": 0
      }
    ],
    "translations": [
      {
        "language": {
          "id": 0,
          "name": "string"
        },
        "title": "string",
        "overview": "string"
      }
    ],
    "year": 0,
    "path": "string",
    "pendingPath": "string",
    "qualityProfileId": 0,
    "seasonFolder": true,
    "monitored": true,
    "monitorNewItems": "all",
    "useSceneNumbering": true,
    "runtime": 0,
    "tvdbId": 0,
    "tvRageId": 0,
    "tvMazeId": 0,
    "tmdbId": 0,
    "firstAired": "1970-01-01T00:00:00Z",
    "lastAired": "1970-01-01T00:00:00Z",
    "seriesType": "standard",
    "cleanTitle": "string",
    "originalTitle": "string",
    "cleanOriginalTitle": "string",
    "imdbId": "string",
    "titleSlug": "string",
    "rootFolderPath": "string",
    "folder": "string",
    "folders": [
      {
        "language": {
          "id": 0,
          "name": "string"
        },
        "folder": "string"
      }
    ],
    "certification": "string",
    "genres": [
      "string"
    ],
    "tags": [
      0
    ],
    "added": "1970-01-01T00:00:00Z",
    "addOptions": {
      "ignoreEpisodesWithFiles": true,
      "ignoreEpisodesWithoutFiles": true,
      "monitor": "unknown",
      "searchForMissingEpisodes": true,
      "searchForCutoffUnmetEpisodes": true
    },
    "ratings": {
      "votes": 0,
      "value": 0
    },
    "statistics": {
      "seasonCount": 0,
      "episodeFileCount": 0,
      "episodeCount": 0,
      "totalEpisodeCount": 0,
      "sizeOnDisk": 0,
      "releaseGroups": [
        "string"
      ],
      "percentOfEpisodes": 0
    },
    "episodesChanged": true,
    "languageProfileId": 0
  },
  "images": [
    {
      "coverType": "unknown",
      "url": "string",
      "remoteUrl": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|false|none|none|
|seriesId|integer(int32)|false|none|none|
|tvdbId|integer(int32)|false|none|none|
|episodeFileId|integer(int32)|false|none|none|
|seasonNumber|integer(int32)|false|none|none|
|episodeNumber|integer(int32)|false|none|none|
|title|string \| null|false|none|none|
|airDate|string \| null|false|none|none|
|airDateUtc|string(date-time) \| null|false|none|none|
|lastSearchTime|string(date-time) \| null|false|none|none|
|runtime|integer(int32)|false|none|none|
|finaleType|string \| null|false|none|none|
|overview|string \| null|false|none|none|
|episodeFile|[EpisodeFileResource](#schemaepisodefileresource)|false|none|none|
|hasFile|boolean|false|none|none|
|monitored|boolean|false|none|none|
|absoluteEpisodeNumber|integer(int32) \| null|false|none|none|
|sceneAbsoluteEpisodeNumber|integer(int32) \| null|false|none|none|
|sceneEpisodeNumber|integer(int32) \| null|false|none|none|
|sceneSeasonNumber|integer(int32) \| null|false|none|none|
|unverifiedSceneNumbering|boolean|false|none|none|
|series|[SeriesResource](#schemaseriesresource)|false|none|none|
|images|[[MediaCover](#schemamediacover)]|false|none|none|

<h2 id="tocS_EpisodeResourcePagingResource">EpisodeResourcePagingResource</h2>
<!-- backwards compatibility -->
<a id="schemaepisoderesourcepagingresource"></a>
<a id="schema_EpisodeResourcePagingResource"></a>
<a id="tocSepisoderesourcepagingresource"></a>
<a id="tocsepisoderesourcepagingresource"></a>

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
      "seriesId": 0,
      "tvdbId": 0,
      "episodeFileId": 0,
      "seasonNumber": 0,
      "episodeNumber": 0,
      "title": "string",
      "airDate": "string",
      "airDateUtc": "1970-01-01T00:00:00Z",
      "lastSearchTime": "1970-01-01T00:00:00Z",
      "runtime": 0,
      "finaleType": "string",
      "overview": "string",
      "episodeFile": {
        "id": 0,
        "seriesId": 0,
        "seasonNumber": 0,
        "relativePath": "string",
        "path": "string",
        "size": 0,
        "dateAdded": "1970-01-01T00:00:00Z",
        "sceneName": "string",
        "releaseGroup": "string",
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
            "resolution": 0
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
                        "hint": "string"
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
        "releaseType": "unknown",
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
        "qualityCutoffNotMet": true
      },
      "hasFile": true,
      "monitored": true,
      "absoluteEpisodeNumber": 0,
      "sceneAbsoluteEpisodeNumber": 0,
      "sceneEpisodeNumber": 0,
      "sceneSeasonNumber": 0,
      "unverifiedSceneNumbering": true,
      "series": {
        "id": 0,
        "title": "string",
        "alternateTitles": [
          {
            "title": "string",
            "seasonNumber": 0,
            "sceneSeasonNumber": 0,
            "sceneOrigin": "string",
            "comment": "string"
          }
        ],
        "sortTitle": "string",
        "status": "continuing",
        "ended": true,
        "profileName": "string",
        "overview": "string",
        "nextAiring": "1970-01-01T00:00:00Z",
        "previousAiring": "1970-01-01T00:00:00Z",
        "network": "string",
        "airTime": "string",
        "images": [
          {
            "coverType": "unknown",
            "url": "string",
            "remoteUrl": "string"
          }
        ],
        "language": {
          "id": 0,
          "name": "string"
        },
        "originalLanguage": {
          "id": 0,
          "name": "string"
        },
        "remotePoster": "string",
        "seasonType": "string",
        "seasons": [
          {
            "seasonNumber": 0,
            "monitored": true,
            "title": "string",
            "statistics": {
              "nextAiring": "1970-01-01T00:00:00Z",
              "previousAiring": "1970-01-01T00:00:00Z",
              "episodeFileCount": 0,
              "episodeCount": 0,
              "totalEpisodeCount": 0,
              "sizeOnDisk": 0,
              "releaseGroups": [
                "string"
              ],
              "percentOfEpisodes": 0
            },
            "images": [
              {
                "coverType": "unknown",
                "url": "string",
                "remoteUrl": "string"
              }
            ]
          }
        ],
        "seasonTypes": [
          {
            "name": "string",
            "type": "string",
            "seasonNumbers": [
              0
            ],
            "episodeCount": 0
          }
        ],
        "translations": [
          {
            "language": {
              "id": 0,
              "name": "string"
            },
            "title": "string",
            "overview": "string"
          }
        ],
        "year": 0,
        "path": "string",
        "pendingPath": "string",
        "qualityProfileId": 0,
        "seasonFolder": true,
        "monitored": true,
        "monitorNewItems": "all",
        "useSceneNumbering": true,
        "runtime": 0,
        "tvdbId": 0,
        "tvRageId": 0,
        "tvMazeId": 0,
        "tmdbId": 0,
        "firstAired": "1970-01-01T00:00:00Z",
        "lastAired": "1970-01-01T00:00:00Z",
        "seriesType": "standard",
        "cleanTitle": "string",
        "originalTitle": "string",
        "cleanOriginalTitle": "string",
        "imdbId": "string",
        "titleSlug": "string",
        "rootFolderPath": "string",
        "folder": "string",
        "folders": [
          {
            "language": {
              "id": 0,
              "name": "string"
            },
            "folder": "string"
          }
        ],
        "certification": "string",
        "genres": [
          "string"
        ],
        "tags": [
          0
        ],
        "added": "1970-01-01T00:00:00Z",
        "addOptions": {
          "ignoreEpisodesWithFiles": true,
          "ignoreEpisodesWithoutFiles": true,
          "monitor": "unknown",
          "searchForMissingEpisodes": true,
          "searchForCutoffUnmetEpisodes": true
        },
        "ratings": {
          "votes": 0,
          "value": 0
        },
        "statistics": {
          "seasonCount": 0,
          "episodeFileCount": 0,
          "episodeCount": 0,
          "totalEpisodeCount": 0,
          "sizeOnDisk": 0,
          "releaseGroups": [
            "string"
          ],
          "percentOfEpisodes": 0
        },
        "episodesChanged": true,
        "languageProfileId": 0
      },
      "images": [
        {
          "coverType": "unknown",
          "url": "string",
          "remoteUrl": "string"
        }
      ]
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
|records|[[EpisodeResource](#schemaepisoderesource)]|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|sortDirection|default|
|sortDirection|ascending|
|sortDirection|descending|

<h2 id="tocS_EpisodeTitleRequiredType">EpisodeTitleRequiredType</h2>
<!-- backwards compatibility -->
<a id="schemaepisodetitlerequiredtype"></a>
<a id="schema_EpisodeTitleRequiredType"></a>
<a id="tocSepisodetitlerequiredtype"></a>
<a id="tocsepisodetitlerequiredtype"></a>

```json
"always"
```

<h2 id="tocS_EpisodesMonitoredResource">EpisodesMonitoredResource</h2>
<!-- backwards compatibility -->
<a id="schemaepisodesmonitoredresource"></a>
<a id="schema_EpisodesMonitoredResource"></a>
<a id="tocSepisodesmonitoredresource"></a>
<a id="tocsepisodesmonitoredresource"></a>

```json
{
  "episodeIds": [
    0
  ],
  "monitored": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|episodeIds|[integer(int32)]|false|none|none|
|monitored|boolean|false|none|none|

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
      "hint": "string"
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
  "episodeId": 0,
  "seriesId": 0,
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
      "resolution": 0
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
                  "hint": "string"
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
  "episode": {
    "id": 0,
    "seriesId": 0,
    "tvdbId": 0,
    "episodeFileId": 0,
    "seasonNumber": 0,
    "episodeNumber": 0,
    "title": "string",
    "airDate": "string",
    "airDateUtc": "1970-01-01T00:00:00Z",
    "lastSearchTime": "1970-01-01T00:00:00Z",
    "runtime": 0,
    "finaleType": "string",
    "overview": "string",
    "episodeFile": {
      "id": 0,
      "seriesId": 0,
      "seasonNumber": 0,
      "relativePath": "string",
      "path": "string",
      "size": 0,
      "dateAdded": "1970-01-01T00:00:00Z",
      "sceneName": "string",
      "releaseGroup": "string",
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
          "resolution": 0
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
                      "hint": "string"
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
      "releaseType": "unknown",
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
      "qualityCutoffNotMet": true
    },
    "hasFile": true,
    "monitored": true,
    "absoluteEpisodeNumber": 0,
    "sceneAbsoluteEpisodeNumber": 0,
    "sceneEpisodeNumber": 0,
    "sceneSeasonNumber": 0,
    "unverifiedSceneNumbering": true,
    "series": {
      "id": 0,
      "title": "string",
      "alternateTitles": [
        {
          "title": "string",
          "seasonNumber": 0,
          "sceneSeasonNumber": 0,
          "sceneOrigin": "string",
          "comment": "string"
        }
      ],
      "sortTitle": "string",
      "status": "continuing",
      "ended": true,
      "profileName": "string",
      "overview": "string",
      "nextAiring": "1970-01-01T00:00:00Z",
      "previousAiring": "1970-01-01T00:00:00Z",
      "network": "string",
      "airTime": "string",
      "images": [
        {
          "coverType": "unknown",
          "url": "string",
          "remoteUrl": "string"
        }
      ],
      "language": {
        "id": 0,
        "name": "string"
      },
      "originalLanguage": {
        "id": 0,
        "name": "string"
      },
      "remotePoster": "string",
      "seasonType": "string",
      "seasons": [
        {
          "seasonNumber": 0,
          "monitored": true,
          "title": "string",
          "statistics": {
            "nextAiring": "1970-01-01T00:00:00Z",
            "previousAiring": "1970-01-01T00:00:00Z",
            "episodeFileCount": 0,
            "episodeCount": 0,
            "totalEpisodeCount": 0,
            "sizeOnDisk": 0,
            "releaseGroups": [
              "string"
            ],
            "percentOfEpisodes": 0
          },
          "images": [
            {
              "coverType": "unknown",
              "url": "string",
              "remoteUrl": "string"
            }
          ]
        }
      ],
      "seasonTypes": [
        {
          "name": "string",
          "type": "string",
          "seasonNumbers": [
            0
          ],
          "episodeCount": 0
        }
      ],
      "translations": [
        {
          "language": {
            "id": 0,
            "name": "string"
          },
          "title": "string",
          "overview": "string"
        }
      ],
      "year": 0,
      "path": "string",
      "pendingPath": "string",
      "qualityProfileId": 0,
      "seasonFolder": true,
      "monitored": true,
      "monitorNewItems": "all",
      "useSceneNumbering": true,
      "runtime": 0,
      "tvdbId": 0,
      "tvRageId": 0,
      "tvMazeId": 0,
      "tmdbId": 0,
      "firstAired": "1970-01-01T00:00:00Z",
      "lastAired": "1970-01-01T00:00:00Z",
      "seriesType": "standard",
      "cleanTitle": "string",
      "originalTitle": "string",
      "cleanOriginalTitle": "string",
      "imdbId": "string",
      "titleSlug": "string",
      "rootFolderPath": "string",
      "folder": "string",
      "folders": [
        {
          "language": {
            "id": 0,
            "name": "string"
          },
          "folder": "string"
        }
      ],
      "certification": "string",
      "genres": [
        "string"
      ],
      "tags": [
        0
      ],
      "added": "1970-01-01T00:00:00Z",
      "addOptions": {
        "ignoreEpisodesWithFiles": true,
        "ignoreEpisodesWithoutFiles": true,
        "monitor": "unknown",
        "searchForMissingEpisodes": true,
        "searchForCutoffUnmetEpisodes": true
      },
      "ratings": {
        "votes": 0,
        "value": 0
      },
      "statistics": {
        "seasonCount": 0,
        "episodeFileCount": 0,
        "episodeCount": 0,
        "totalEpisodeCount": 0,
        "sizeOnDisk": 0,
        "releaseGroups": [
          "string"
        ],
        "percentOfEpisodes": 0
      },
      "episodesChanged": true,
      "languageProfileId": 0
    },
    "images": [
      {
        "coverType": "unknown",
        "url": "string",
        "remoteUrl": "string"
      }
    ]
  },
  "series": {
    "id": 0,
    "title": "string",
    "alternateTitles": [
      {
        "title": "string",
        "seasonNumber": 0,
        "sceneSeasonNumber": 0,
        "sceneOrigin": "string",
        "comment": "string"
      }
    ],
    "sortTitle": "string",
    "status": "continuing",
    "ended": true,
    "profileName": "string",
    "overview": "string",
    "nextAiring": "1970-01-01T00:00:00Z",
    "previousAiring": "1970-01-01T00:00:00Z",
    "network": "string",
    "airTime": "string",
    "images": [
      {
        "coverType": "unknown",
        "url": "string",
        "remoteUrl": "string"
      }
    ],
    "language": {
      "id": 0,
      "name": "string"
    },
    "originalLanguage": {
      "id": 0,
      "name": "string"
    },
    "remotePoster": "string",
    "seasonType": "string",
    "seasons": [
      {
        "seasonNumber": 0,
        "monitored": true,
        "title": "string",
        "statistics": {
          "nextAiring": "1970-01-01T00:00:00Z",
          "previousAiring": "1970-01-01T00:00:00Z",
          "episodeFileCount": 0,
          "episodeCount": 0,
          "totalEpisodeCount": 0,
          "sizeOnDisk": 0,
          "releaseGroups": [
            "string"
          ],
          "percentOfEpisodes": 0
        },
        "images": [
          {
            "coverType": "unknown",
            "url": "string",
            "remoteUrl": "string"
          }
        ]
      }
    ],
    "seasonTypes": [
      {
        "name": "string",
        "type": "string",
        "seasonNumbers": [
          0
        ],
        "episodeCount": 0
      }
    ],
    "translations": [
      {
        "language": {
          "id": 0,
          "name": "string"
        },
        "title": "string",
        "overview": "string"
      }
    ],
    "year": 0,
    "path": "string",
    "pendingPath": "string",
    "qualityProfileId": 0,
    "seasonFolder": true,
    "monitored": true,
    "monitorNewItems": "all",
    "useSceneNumbering": true,
    "runtime": 0,
    "tvdbId": 0,
    "tvRageId": 0,
    "tvMazeId": 0,
    "tmdbId": 0,
    "firstAired": "1970-01-01T00:00:00Z",
    "lastAired": "1970-01-01T00:00:00Z",
    "seriesType": "standard",
    "cleanTitle": "string",
    "originalTitle": "string",
    "cleanOriginalTitle": "string",
    "imdbId": "string",
    "titleSlug": "string",
    "rootFolderPath": "string",
    "folder": "string",
    "folders": [
      {
        "language": {
          "id": 0,
          "name": "string"
        },
        "folder": "string"
      }
    ],
    "certification": "string",
    "genres": [
      "string"
    ],
    "tags": [
      0
    ],
    "added": "1970-01-01T00:00:00Z",
    "addOptions": {
      "ignoreEpisodesWithFiles": true,
      "ignoreEpisodesWithoutFiles": true,
      "monitor": "unknown",
      "searchForMissingEpisodes": true,
      "searchForCutoffUnmetEpisodes": true
    },
    "ratings": {
      "votes": 0,
      "value": 0
    },
    "statistics": {
      "seasonCount": 0,
      "episodeFileCount": 0,
      "episodeCount": 0,
      "totalEpisodeCount": 0,
      "sizeOnDisk": 0,
      "releaseGroups": [
        "string"
      ],
      "percentOfEpisodes": 0
    },
    "episodesChanged": true,
    "languageProfileId": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|false|none|none|
|episodeId|integer(int32)|false|none|none|
|seriesId|integer(int32)|false|none|none|
|sourceTitle|string \| null|false|none|none|
|languages|[[Language](#schemalanguage)]|false|none|none|
|quality|[QualityModel](#schemaqualitymodel)|false|none|none|
|customFormats|[[CustomFormatResource](#schemacustomformatresource)]|false|none|none|
|customFormatScore|integer(int32)|false|none|none|
|qualityCutoffNotMet|boolean|false|none|none|
|date|string(date-time)|false|none|none|
|downloadId|string \| null|false|none|none|
|eventType|[EpisodeHistoryEventType](#schemaepisodehistoryeventtype)|false|none|none|
|data|object \| null|false|none|none|
|episode|[EpisodeResource](#schemaepisoderesource)|false|none|none|
|series|[SeriesResource](#schemaseriesresource)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|eventType|unknown|
|eventType|grabbed|
|eventType|seriesFolderImported|
|eventType|downloadFolderImported|
|eventType|downloadFailed|
|eventType|episodeFileDeleted|
|eventType|episodeFileRenamed|
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
      "episodeId": 0,
      "seriesId": 0,
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
          "resolution": 0
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
                      "hint": "string"
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
      "episode": {
        "id": 0,
        "seriesId": 0,
        "tvdbId": 0,
        "episodeFileId": 0,
        "seasonNumber": 0,
        "episodeNumber": 0,
        "title": "string",
        "airDate": "string",
        "airDateUtc": "1970-01-01T00:00:00Z",
        "lastSearchTime": "1970-01-01T00:00:00Z",
        "runtime": 0,
        "finaleType": "string",
        "overview": "string",
        "episodeFile": {
          "id": 0,
          "seriesId": 0,
          "seasonNumber": 0,
          "relativePath": "string",
          "path": "string",
          "size": 0,
          "dateAdded": "1970-01-01T00:00:00Z",
          "sceneName": "string",
          "releaseGroup": "string",
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
              "resolution": 0
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
                          "hint": "string"
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
          "releaseType": "unknown",
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
          "qualityCutoffNotMet": true
        },
        "hasFile": true,
        "monitored": true,
        "absoluteEpisodeNumber": 0,
        "sceneAbsoluteEpisodeNumber": 0,
        "sceneEpisodeNumber": 0,
        "sceneSeasonNumber": 0,
        "unverifiedSceneNumbering": true,
        "series": {
          "id": 0,
          "title": "string",
          "alternateTitles": [
            {
              "title": "string",
              "seasonNumber": 0,
              "sceneSeasonNumber": 0,
              "sceneOrigin": "string",
              "comment": "string"
            }
          ],
          "sortTitle": "string",
          "status": "continuing",
          "ended": true,
          "profileName": "string",
          "overview": "string",
          "nextAiring": "1970-01-01T00:00:00Z",
          "previousAiring": "1970-01-01T00:00:00Z",
          "network": "string",
          "airTime": "string",
          "images": [
            {
              "coverType": "unknown",
              "url": "string",
              "remoteUrl": "string"
            }
          ],
          "language": {
            "id": 0,
            "name": "string"
          },
          "originalLanguage": {
            "id": 0,
            "name": "string"
          },
          "remotePoster": "string",
          "seasonType": "string",
          "seasons": [
            {
              "seasonNumber": 0,
              "monitored": true,
              "title": "string",
              "statistics": {
                "nextAiring": "1970-01-01T00:00:00Z",
                "previousAiring": "1970-01-01T00:00:00Z",
                "episodeFileCount": 0,
                "episodeCount": 0,
                "totalEpisodeCount": 0,
                "sizeOnDisk": 0,
                "releaseGroups": [
                  "string"
                ],
                "percentOfEpisodes": 0
              },
              "images": [
                {
                  "coverType": "unknown",
                  "url": "string",
                  "remoteUrl": "string"
                }
              ]
            }
          ],
          "seasonTypes": [
            {
              "name": "string",
              "type": "string",
              "seasonNumbers": [
                0
              ],
              "episodeCount": 0
            }
          ],
          "translations": [
            {
              "language": {
                "id": 0,
                "name": "string"
              },
              "title": "string",
              "overview": "string"
            }
          ],
          "year": 0,
          "path": "string",
          "pendingPath": "string",
          "qualityProfileId": 0,
          "seasonFolder": true,
          "monitored": true,
          "monitorNewItems": "all",
          "useSceneNumbering": true,
          "runtime": 0,
          "tvdbId": 0,
          "tvRageId": 0,
          "tvMazeId": 0,
          "tmdbId": 0,
          "firstAired": "1970-01-01T00:00:00Z",
          "lastAired": "1970-01-01T00:00:00Z",
          "seriesType": "standard",
          "cleanTitle": "string",
          "originalTitle": "string",
          "cleanOriginalTitle": "string",
          "imdbId": "string",
          "titleSlug": "string",
          "rootFolderPath": "string",
          "folder": "string",
          "folders": [
            {
              "language": {
                "id": 0,
                "name": "string"
              },
              "folder": "string"
            }
          ],
          "certification": "string",
          "genres": [
            "string"
          ],
          "tags": [
            0
          ],
          "added": "1970-01-01T00:00:00Z",
          "addOptions": {
            "ignoreEpisodesWithFiles": true,
            "ignoreEpisodesWithoutFiles": true,
            "monitor": "unknown",
            "searchForMissingEpisodes": true,
            "searchForCutoffUnmetEpisodes": true
          },
          "ratings": {
            "votes": 0,
            "value": 0
          },
          "statistics": {
            "seasonCount": 0,
            "episodeFileCount": 0,
            "episodeCount": 0,
            "totalEpisodeCount": 0,
            "sizeOnDisk": 0,
            "releaseGroups": [
              "string"
            ],
            "percentOfEpisodes": 0
          },
          "episodesChanged": true,
          "languageProfileId": 0
        },
        "images": [
          {
            "coverType": "unknown",
            "url": "string",
            "remoteUrl": "string"
          }
        ]
      },
      "series": {
        "id": 0,
        "title": "string",
        "alternateTitles": [
          {
            "title": "string",
            "seasonNumber": 0,
            "sceneSeasonNumber": 0,
            "sceneOrigin": "string",
            "comment": "string"
          }
        ],
        "sortTitle": "string",
        "status": "continuing",
        "ended": true,
        "profileName": "string",
        "overview": "string",
        "nextAiring": "1970-01-01T00:00:00Z",
        "previousAiring": "1970-01-01T00:00:00Z",
        "network": "string",
        "airTime": "string",
        "images": [
          {
            "coverType": "unknown",
            "url": "string",
            "remoteUrl": "string"
          }
        ],
        "language": {
          "id": 0,
          "name": "string"
        },
        "originalLanguage": {
          "id": 0,
          "name": "string"
        },
        "remotePoster": "string",
        "seasonType": "string",
        "seasons": [
          {
            "seasonNumber": 0,
            "monitored": true,
            "title": "string",
            "statistics": {
              "nextAiring": "1970-01-01T00:00:00Z",
              "previousAiring": "1970-01-01T00:00:00Z",
              "episodeFileCount": 0,
              "episodeCount": 0,
              "totalEpisodeCount": 0,
              "sizeOnDisk": 0,
              "releaseGroups": [
                "string"
              ],
              "percentOfEpisodes": 0
            },
            "images": [
              {
                "coverType": "unknown",
                "url": "string",
                "remoteUrl": "string"
              }
            ]
          }
        ],
        "seasonTypes": [
          {
            "name": "string",
            "type": "string",
            "seasonNumbers": [
              0
            ],
            "episodeCount": 0
          }
        ],
        "translations": [
          {
            "language": {
              "id": 0,
              "name": "string"
            },
            "title": "string",
            "overview": "string"
          }
        ],
        "year": 0,
        "path": "string",
        "pendingPath": "string",
        "qualityProfileId": 0,
        "seasonFolder": true,
        "monitored": true,
        "monitorNewItems": "all",
        "useSceneNumbering": true,
        "runtime": 0,
        "tvdbId": 0,
        "tvRageId": 0,
        "tvMazeId": 0,
        "tmdbId": 0,
        "firstAired": "1970-01-01T00:00:00Z",
        "lastAired": "1970-01-01T00:00:00Z",
        "seriesType": "standard",
        "cleanTitle": "string",
        "originalTitle": "string",
        "cleanOriginalTitle": "string",
        "imdbId": "string",
        "titleSlug": "string",
        "rootFolderPath": "string",
        "folder": "string",
        "folders": [
          {
            "language": {
              "id": 0,
              "name": "string"
            },
            "folder": "string"
          }
        ],
        "certification": "string",
        "genres": [
          "string"
        ],
        "tags": [
          0
        ],
        "added": "1970-01-01T00:00:00Z",
        "addOptions": {
          "ignoreEpisodesWithFiles": true,
          "ignoreEpisodesWithoutFiles": true,
          "monitor": "unknown",
          "searchForMissingEpisodes": true,
          "searchForCutoffUnmetEpisodes": true
        },
        "ratings": {
          "votes": 0,
          "value": 0
        },
        "statistics": {
          "seasonCount": 0,
          "episodeFileCount": 0,
          "episodeCount": 0,
          "totalEpisodeCount": 0,
          "sizeOnDisk": 0,
          "releaseGroups": [
            "string"
          ],
          "percentOfEpisodes": 0
        },
        "episodesChanged": true,
        "languageProfileId": 0
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
  "enableAutomaticAdd": true,
  "rootFolderPath": "string",
  "qualityProfileId": 0,
  "tagExisting": "none"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ids|[integer(int32)]|false|none|none|
|tags|[integer(int32)]|false|none|none|
|applyTags|[ApplyTags](#schemaapplytags)|false|none|none|
|enableAutomaticAdd|boolean \| null|false|none|none|
|rootFolderPath|string \| null|false|none|none|
|qualityProfileId|integer(int32) \| null|false|none|none|
|tagExisting|[TagExistingType](#schematagexistingtype)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|applyTags|add|
|applyTags|remove|
|applyTags|replace|
|tagExisting|none|
|tagExisting|add|
|tagExisting|sync|

<h2 id="tocS_ImportListConfigResource">ImportListConfigResource</h2>
<!-- backwards compatibility -->
<a id="schemaimportlistconfigresource"></a>
<a id="schema_ImportListConfigResource"></a>
<a id="tocSimportlistconfigresource"></a>
<a id="tocsimportlistconfigresource"></a>

```json
{
  "id": 0,
  "listSyncLevel": "disabled",
  "listSyncTag": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|false|none|none|
|listSyncLevel|[ListSyncLevelType](#schemalistsyncleveltype)|false|none|none|
|listSyncTag|integer(int32)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|listSyncLevel|disabled|
|listSyncLevel|logOnly|
|listSyncLevel|keepAndUnmonitor|
|listSyncLevel|keepAndTag|

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
  "tvdbId": 0,
  "title": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|false|none|none|
|tvdbId|integer(int32)|false|none|none|
|title|string \| null|false|none|none|

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
      "tvdbId": 0,
      "title": "string"
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
          "hint": "string"
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
              "hint": "string"
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
      "enableAutomaticAdd": true,
      "searchForMissingEpisodes": true,
      "shouldMonitor": "unknown",
      "monitorNewItems": "all",
      "rootFolderPath": "string",
      "qualityProfileId": 0,
      "seriesType": "standard",
      "language": {
        "id": 0,
        "name": "string"
      },
      "seasonFolder": true,
      "listType": "program",
      "listOrder": 0,
      "minRefreshInterval": "string",
      "tagExisting": "none"
    }
  ],
  "enableAutomaticAdd": true,
  "searchForMissingEpisodes": true,
  "shouldMonitor": "unknown",
  "monitorNewItems": "all",
  "rootFolderPath": "string",
  "qualityProfileId": 0,
  "seriesType": "standard",
  "language": {
    "id": 0,
    "name": "string"
  },
  "seasonFolder": true,
  "listType": "program",
  "listOrder": 0,
  "minRefreshInterval": "string",
  "tagExisting": "none"
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
|enableAutomaticAdd|boolean|false|none|none|
|searchForMissingEpisodes|boolean|false|none|none|
|shouldMonitor|[MonitorTypes](#schemamonitortypes)|false|none|none|
|monitorNewItems|[NewItemMonitorTypes](#schemanewitemmonitortypes)|false|none|none|
|rootFolderPath|string \| null|false|none|none|
|qualityProfileId|integer(int32)|false|none|none|
|seriesType|[SeriesTypes](#schemaseriestypes)|false|none|none|
|language|[Language](#schemalanguage)|false|none|none|
|seasonFolder|boolean|false|none|none|
|listType|[ImportListType](#schemaimportlisttype)|false|none|none|
|listOrder|integer(int32)|false|none|none|
|minRefreshInterval|string(date-span)|false|none|none|
|tagExisting|[TagExistingType](#schematagexistingtype)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|shouldMonitor|unknown|
|shouldMonitor|all|
|shouldMonitor|future|
|shouldMonitor|missing|
|shouldMonitor|existing|
|shouldMonitor|firstSeason|
|shouldMonitor|lastSeason|
|shouldMonitor|latestSeason|
|shouldMonitor|pilot|
|shouldMonitor|recent|
|shouldMonitor|monitorSpecials|
|shouldMonitor|unmonitorSpecials|
|shouldMonitor|none|
|shouldMonitor|skip|
|monitorNewItems|all|
|monitorNewItems|none|
|seriesType|standard|
|seriesType|daily|
|seriesType|anime|
|listType|program|
|listType|plex|
|listType|trakt|
|listType|simkl|
|listType|other|
|listType|advanced|
|tagExisting|none|
|tagExisting|add|
|tagExisting|sync|

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
  "priority": 0,
  "seasonSearchMaximumSingleEpisodeAge": 0
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
|seasonSearchMaximumSingleEpisodeAge|integer(int32) \| null|false|none|none|

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
  "retention": 0,
  "maximumSize": 0,
  "rssSyncInterval": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|false|none|none|
|minimumAge|integer(int32)|false|none|none|
|retention|integer(int32)|false|none|none|
|maximumSize|integer(int32)|false|none|none|
|rssSyncInterval|integer(int32)|false|none|none|

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
          "hint": "string"
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
              "hint": "string"
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
      "seasonSearchMaximumSingleEpisodeAge": 0,
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
  "seasonSearchMaximumSingleEpisodeAge": 0,
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
|seasonSearchMaximumSingleEpisodeAge|integer(int32)|false|none|none|
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

<h2 id="tocS_LanguageProfileItemResource">LanguageProfileItemResource</h2>
<!-- backwards compatibility -->
<a id="schemalanguageprofileitemresource"></a>
<a id="schema_LanguageProfileItemResource"></a>
<a id="tocSlanguageprofileitemresource"></a>
<a id="tocslanguageprofileitemresource"></a>

```json
{
  "id": 0,
  "language": {
    "id": 0,
    "name": "string"
  },
  "allowed": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|false|none|none|
|language|[Language](#schemalanguage)|false|none|none|
|allowed|boolean|false|none|none|

<h2 id="tocS_LanguageProfileResource">LanguageProfileResource</h2>
<!-- backwards compatibility -->
<a id="schemalanguageprofileresource"></a>
<a id="schema_LanguageProfileResource"></a>
<a id="tocSlanguageprofileresource"></a>
<a id="tocslanguageprofileresource"></a>

```json
{
  "id": 0,
  "name": "string",
  "upgradeAllowed": true,
  "cutoff": {
    "id": 0,
    "name": "string"
  },
  "languages": [
    {
      "id": 0,
      "language": {
        "id": 0,
        "name": "string"
      },
      "allowed": true
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|false|none|none|
|name|string \| null|false|none|none|
|upgradeAllowed|boolean|false|none|none|
|cutoff|[Language](#schemalanguage)|false|none|none|
|languages|[[LanguageProfileItemResource](#schemalanguageprofileitemresource)]|false|none|none|

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

<h2 id="tocS_ListSyncLevelType">ListSyncLevelType</h2>
<!-- backwards compatibility -->
<a id="schemalistsyncleveltype"></a>
<a id="schema_ListSyncLevelType"></a>
<a id="tocSlistsyncleveltype"></a>
<a id="tocslistsyncleveltype"></a>

```json
"disabled"
```

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

<h2 id="tocS_LocalizationResource">LocalizationResource</h2>
<!-- backwards compatibility -->
<a id="schemalocalizationresource"></a>
<a id="schema_LocalizationResource"></a>
<a id="tocSlocalizationresource"></a>
<a id="tocslocalizationresource"></a>

```json
{
  "id": 0,
  "strings": {
    "property1": "string",
    "property2": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|false|none|none|
|strings|object \| null|false|none|none|

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
  "seriesId": 0,
  "seasonNumber": 0,
  "episodes": [
    {
      "id": 0,
      "seriesId": 0,
      "tvdbId": 0,
      "episodeFileId": 0,
      "seasonNumber": 0,
      "episodeNumber": 0,
      "title": "string",
      "airDate": "string",
      "airDateUtc": "1970-01-01T00:00:00Z",
      "lastSearchTime": "1970-01-01T00:00:00Z",
      "runtime": 0,
      "finaleType": "string",
      "overview": "string",
      "episodeFile": {
        "id": 0,
        "seriesId": 0,
        "seasonNumber": 0,
        "relativePath": "string",
        "path": "string",
        "size": 0,
        "dateAdded": "1970-01-01T00:00:00Z",
        "sceneName": "string",
        "releaseGroup": "string",
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
            "resolution": 0
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
                        "hint": "string"
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
        "releaseType": "unknown",
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
        "qualityCutoffNotMet": true
      },
      "hasFile": true,
      "monitored": true,
      "absoluteEpisodeNumber": 0,
      "sceneAbsoluteEpisodeNumber": 0,
      "sceneEpisodeNumber": 0,
      "sceneSeasonNumber": 0,
      "unverifiedSceneNumbering": true,
      "series": {
        "id": 0,
        "title": "string",
        "alternateTitles": [
          {
            "title": "string",
            "seasonNumber": 0,
            "sceneSeasonNumber": 0,
            "sceneOrigin": "string",
            "comment": "string"
          }
        ],
        "sortTitle": "string",
        "status": "continuing",
        "ended": true,
        "profileName": "string",
        "overview": "string",
        "nextAiring": "1970-01-01T00:00:00Z",
        "previousAiring": "1970-01-01T00:00:00Z",
        "network": "string",
        "airTime": "string",
        "images": [
          {
            "coverType": "unknown",
            "url": "string",
            "remoteUrl": "string"
          }
        ],
        "language": {
          "id": 0,
          "name": "string"
        },
        "originalLanguage": {
          "id": 0,
          "name": "string"
        },
        "remotePoster": "string",
        "seasonType": "string",
        "seasons": [
          {
            "seasonNumber": 0,
            "monitored": true,
            "title": "string",
            "statistics": {
              "nextAiring": "1970-01-01T00:00:00Z",
              "previousAiring": "1970-01-01T00:00:00Z",
              "episodeFileCount": 0,
              "episodeCount": 0,
              "totalEpisodeCount": 0,
              "sizeOnDisk": 0,
              "releaseGroups": [
                "string"
              ],
              "percentOfEpisodes": 0
            },
            "images": [
              {
                "coverType": "unknown",
                "url": "string",
                "remoteUrl": "string"
              }
            ]
          }
        ],
        "seasonTypes": [
          {
            "name": "string",
            "type": "string",
            "seasonNumbers": [
              0
            ],
            "episodeCount": 0
          }
        ],
        "translations": [
          {
            "language": {
              "id": 0,
              "name": "string"
            },
            "title": "string",
            "overview": "string"
          }
        ],
        "year": 0,
        "path": "string",
        "pendingPath": "string",
        "qualityProfileId": 0,
        "seasonFolder": true,
        "monitored": true,
        "monitorNewItems": "all",
        "useSceneNumbering": true,
        "runtime": 0,
        "tvdbId": 0,
        "tvRageId": 0,
        "tvMazeId": 0,
        "tmdbId": 0,
        "firstAired": "1970-01-01T00:00:00Z",
        "lastAired": "1970-01-01T00:00:00Z",
        "seriesType": "standard",
        "cleanTitle": "string",
        "originalTitle": "string",
        "cleanOriginalTitle": "string",
        "imdbId": "string",
        "titleSlug": "string",
        "rootFolderPath": "string",
        "folder": "string",
        "folders": [
          {
            "language": {
              "id": 0,
              "name": "string"
            },
            "folder": "string"
          }
        ],
        "certification": "string",
        "genres": [
          "string"
        ],
        "tags": [
          0
        ],
        "added": "1970-01-01T00:00:00Z",
        "addOptions": {
          "ignoreEpisodesWithFiles": true,
          "ignoreEpisodesWithoutFiles": true,
          "monitor": "unknown",
          "searchForMissingEpisodes": true,
          "searchForCutoffUnmetEpisodes": true
        },
        "ratings": {
          "votes": 0,
          "value": 0
        },
        "statistics": {
          "seasonCount": 0,
          "episodeFileCount": 0,
          "episodeCount": 0,
          "totalEpisodeCount": 0,
          "sizeOnDisk": 0,
          "releaseGroups": [
            "string"
          ],
          "percentOfEpisodes": 0
        },
        "episodesChanged": true,
        "languageProfileId": 0
      },
      "images": [
        {
          "coverType": "unknown",
          "url": "string",
          "remoteUrl": "string"
        }
      ]
    }
  ],
  "episodeIds": [
    0
  ],
  "quality": {
    "quality": {
      "id": 0,
      "name": "string",
      "source": "unknown",
      "resolution": 0
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
                  "hint": "string"
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
  "releaseType": "unknown",
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
|seriesId|integer(int32)|false|none|none|
|seasonNumber|integer(int32) \| null|false|none|none|
|episodes|[[EpisodeResource](#schemaepisoderesource)]|false|none|none|
|episodeIds|[integer(int32)]|false|none|none|
|quality|[QualityModel](#schemaqualitymodel)|false|none|none|
|languages|[[Language](#schemalanguage)]|false|none|none|
|releaseGroup|string \| null|false|none|none|
|downloadId|string \| null|false|none|none|
|customFormats|[[CustomFormatResource](#schemacustomformatresource)]|false|none|none|
|customFormatScore|integer(int32)|false|none|none|
|indexerFlags|integer(int32)|false|none|none|
|releaseType|[ReleaseType](#schemareleasetype)|false|none|none|
|rejections|[[ImportRejectionResource](#schemaimportrejectionresource)]|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|releaseType|unknown|
|releaseType|singleEpisode|
|releaseType|multiEpisode|
|releaseType|seasonPack|

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
  "series": {
    "id": 0,
    "title": "string",
    "alternateTitles": [
      {
        "title": "string",
        "seasonNumber": 0,
        "sceneSeasonNumber": 0,
        "sceneOrigin": "string",
        "comment": "string"
      }
    ],
    "sortTitle": "string",
    "status": "continuing",
    "ended": true,
    "profileName": "string",
    "overview": "string",
    "nextAiring": "1970-01-01T00:00:00Z",
    "previousAiring": "1970-01-01T00:00:00Z",
    "network": "string",
    "airTime": "string",
    "images": [
      {
        "coverType": "unknown",
        "url": "string",
        "remoteUrl": "string"
      }
    ],
    "language": {
      "id": 0,
      "name": "string"
    },
    "originalLanguage": {
      "id": 0,
      "name": "string"
    },
    "remotePoster": "string",
    "seasonType": "string",
    "seasons": [
      {
        "seasonNumber": 0,
        "monitored": true,
        "title": "string",
        "statistics": {
          "nextAiring": "1970-01-01T00:00:00Z",
          "previousAiring": "1970-01-01T00:00:00Z",
          "episodeFileCount": 0,
          "episodeCount": 0,
          "totalEpisodeCount": 0,
          "sizeOnDisk": 0,
          "releaseGroups": [
            "string"
          ],
          "percentOfEpisodes": 0
        },
        "images": [
          {
            "coverType": "unknown",
            "url": "string",
            "remoteUrl": "string"
          }
        ]
      }
    ],
    "seasonTypes": [
      {
        "name": "string",
        "type": "string",
        "seasonNumbers": [
          0
        ],
        "episodeCount": 0
      }
    ],
    "translations": [
      {
        "language": {
          "id": 0,
          "name": "string"
        },
        "title": "string",
        "overview": "string"
      }
    ],
    "year": 0,
    "path": "string",
    "pendingPath": "string",
    "qualityProfileId": 0,
    "seasonFolder": true,
    "monitored": true,
    "monitorNewItems": "all",
    "useSceneNumbering": true,
    "runtime": 0,
    "tvdbId": 0,
    "tvRageId": 0,
    "tvMazeId": 0,
    "tmdbId": 0,
    "firstAired": "1970-01-01T00:00:00Z",
    "lastAired": "1970-01-01T00:00:00Z",
    "seriesType": "standard",
    "cleanTitle": "string",
    "originalTitle": "string",
    "cleanOriginalTitle": "string",
    "imdbId": "string",
    "titleSlug": "string",
    "rootFolderPath": "string",
    "folder": "string",
    "folders": [
      {
        "language": {
          "id": 0,
          "name": "string"
        },
        "folder": "string"
      }
    ],
    "certification": "string",
    "genres": [
      "string"
    ],
    "tags": [
      0
    ],
    "added": "1970-01-01T00:00:00Z",
    "addOptions": {
      "ignoreEpisodesWithFiles": true,
      "ignoreEpisodesWithoutFiles": true,
      "monitor": "unknown",
      "searchForMissingEpisodes": true,
      "searchForCutoffUnmetEpisodes": true
    },
    "ratings": {
      "votes": 0,
      "value": 0
    },
    "statistics": {
      "seasonCount": 0,
      "episodeFileCount": 0,
      "episodeCount": 0,
      "totalEpisodeCount": 0,
      "sizeOnDisk": 0,
      "releaseGroups": [
        "string"
      ],
      "percentOfEpisodes": 0
    },
    "episodesChanged": true,
    "languageProfileId": 0
  },
  "seasonNumber": 0,
  "episodes": [
    {
      "id": 0,
      "seriesId": 0,
      "tvdbId": 0,
      "episodeFileId": 0,
      "seasonNumber": 0,
      "episodeNumber": 0,
      "title": "string",
      "airDate": "string",
      "airDateUtc": "1970-01-01T00:00:00Z",
      "lastSearchTime": "1970-01-01T00:00:00Z",
      "runtime": 0,
      "finaleType": "string",
      "overview": "string",
      "episodeFile": {
        "id": 0,
        "seriesId": 0,
        "seasonNumber": 0,
        "relativePath": "string",
        "path": "string",
        "size": 0,
        "dateAdded": "1970-01-01T00:00:00Z",
        "sceneName": "string",
        "releaseGroup": "string",
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
            "resolution": 0
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
                        "hint": "string"
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
        "releaseType": "unknown",
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
        "qualityCutoffNotMet": true
      },
      "hasFile": true,
      "monitored": true,
      "absoluteEpisodeNumber": 0,
      "sceneAbsoluteEpisodeNumber": 0,
      "sceneEpisodeNumber": 0,
      "sceneSeasonNumber": 0,
      "unverifiedSceneNumbering": true,
      "series": {
        "id": 0,
        "title": "string",
        "alternateTitles": [
          {
            "title": "string",
            "seasonNumber": 0,
            "sceneSeasonNumber": 0,
            "sceneOrigin": "string",
            "comment": "string"
          }
        ],
        "sortTitle": "string",
        "status": "continuing",
        "ended": true,
        "profileName": "string",
        "overview": "string",
        "nextAiring": "1970-01-01T00:00:00Z",
        "previousAiring": "1970-01-01T00:00:00Z",
        "network": "string",
        "airTime": "string",
        "images": [
          {
            "coverType": "unknown",
            "url": "string",
            "remoteUrl": "string"
          }
        ],
        "language": {
          "id": 0,
          "name": "string"
        },
        "originalLanguage": {
          "id": 0,
          "name": "string"
        },
        "remotePoster": "string",
        "seasonType": "string",
        "seasons": [
          {
            "seasonNumber": 0,
            "monitored": true,
            "title": "string",
            "statistics": {
              "nextAiring": "1970-01-01T00:00:00Z",
              "previousAiring": "1970-01-01T00:00:00Z",
              "episodeFileCount": 0,
              "episodeCount": 0,
              "totalEpisodeCount": 0,
              "sizeOnDisk": 0,
              "releaseGroups": [
                "string"
              ],
              "percentOfEpisodes": 0
            },
            "images": [
              {
                "coverType": "unknown",
                "url": "string",
                "remoteUrl": "string"
              }
            ]
          }
        ],
        "seasonTypes": [
          {
            "name": "string",
            "type": "string",
            "seasonNumbers": [
              0
            ],
            "episodeCount": 0
          }
        ],
        "translations": [
          {
            "language": {
              "id": 0,
              "name": "string"
            },
            "title": "string",
            "overview": "string"
          }
        ],
        "year": 0,
        "path": "string",
        "pendingPath": "string",
        "qualityProfileId": 0,
        "seasonFolder": true,
        "monitored": true,
        "monitorNewItems": "all",
        "useSceneNumbering": true,
        "runtime": 0,
        "tvdbId": 0,
        "tvRageId": 0,
        "tvMazeId": 0,
        "tmdbId": 0,
        "firstAired": "1970-01-01T00:00:00Z",
        "lastAired": "1970-01-01T00:00:00Z",
        "seriesType": "standard",
        "cleanTitle": "string",
        "originalTitle": "string",
        "cleanOriginalTitle": "string",
        "imdbId": "string",
        "titleSlug": "string",
        "rootFolderPath": "string",
        "folder": "string",
        "folders": [
          {
            "language": {
              "id": 0,
              "name": "string"
            },
            "folder": "string"
          }
        ],
        "certification": "string",
        "genres": [
          "string"
        ],
        "tags": [
          0
        ],
        "added": "1970-01-01T00:00:00Z",
        "addOptions": {
          "ignoreEpisodesWithFiles": true,
          "ignoreEpisodesWithoutFiles": true,
          "monitor": "unknown",
          "searchForMissingEpisodes": true,
          "searchForCutoffUnmetEpisodes": true
        },
        "ratings": {
          "votes": 0,
          "value": 0
        },
        "statistics": {
          "seasonCount": 0,
          "episodeFileCount": 0,
          "episodeCount": 0,
          "totalEpisodeCount": 0,
          "sizeOnDisk": 0,
          "releaseGroups": [
            "string"
          ],
          "percentOfEpisodes": 0
        },
        "episodesChanged": true,
        "languageProfileId": 0
      },
      "images": [
        {
          "coverType": "unknown",
          "url": "string",
          "remoteUrl": "string"
        }
      ]
    }
  ],
  "episodeFileId": 0,
  "releaseGroup": "string",
  "quality": {
    "quality": {
      "id": 0,
      "name": "string",
      "source": "unknown",
      "resolution": 0
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
                  "hint": "string"
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
  "releaseType": "unknown",
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
|series|[SeriesResource](#schemaseriesresource)|false|none|none|
|seasonNumber|integer(int32) \| null|false|none|none|
|episodes|[[EpisodeResource](#schemaepisoderesource)]|false|none|none|
|episodeFileId|integer(int32) \| null|false|none|none|
|releaseGroup|string \| null|false|none|none|
|quality|[QualityModel](#schemaqualitymodel)|false|none|none|
|languages|[[Language](#schemalanguage)]|false|none|none|
|qualityWeight|integer(int32)|false|none|none|
|downloadId|string \| null|false|none|none|
|customFormats|[[CustomFormatResource](#schemacustomformatresource)]|false|none|none|
|customFormatScore|integer(int32)|false|none|none|
|indexerFlags|integer(int32)|false|none|none|
|releaseType|[ReleaseType](#schemareleasetype)|false|none|none|
|rejections|[[ImportRejectionResource](#schemaimportrejectionresource)]|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|releaseType|unknown|
|releaseType|singleEpisode|
|releaseType|multiEpisode|
|releaseType|seasonPack|

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
  "autoUnmonitorPreviouslyDownloadedEpisodes": true,
  "recycleBin": "string",
  "recycleBinCleanupDays": 0,
  "downloadPropersAndRepacks": "preferAndUpgrade",
  "createEmptySeriesFolders": true,
  "deleteEmptyFolders": true,
  "fileDate": "none",
  "rescanAfterRefresh": "always",
  "setPermissionsLinux": true,
  "chmodFolder": "string",
  "chownGroup": "string",
  "episodeTitleRequired": "always",
  "skipFreeSpaceCheckWhenGrabbing": true,
  "skipFreeSpaceCheckWhenImporting": true,
  "minimumFreeSpaceWhenImporting": 0,
  "copyUsingHardlinks": true,
  "useScriptImport": true,
  "scriptImportPath": "string",
  "importExtraFiles": true,
  "extraFileExtensions": "string",
  "enableMediaInfo": true,
  "userRejectedExtensions": "string",
  "seasonPackUpgrade": "all",
  "seasonPackUpgradeThreshold": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|false|none|none|
|autoUnmonitorPreviouslyDownloadedEpisodes|boolean|false|none|none|
|recycleBin|string \| null|false|none|none|
|recycleBinCleanupDays|integer(int32)|false|none|none|
|downloadPropersAndRepacks|[ProperDownloadTypes](#schemaproperdownloadtypes)|false|none|none|
|createEmptySeriesFolders|boolean|false|none|none|
|deleteEmptyFolders|boolean|false|none|none|
|fileDate|[FileDateType](#schemafiledatetype)|false|none|none|
|rescanAfterRefresh|[RescanAfterRefreshType](#schemarescanafterrefreshtype)|false|none|none|
|setPermissionsLinux|boolean|false|none|none|
|chmodFolder|string \| null|false|none|none|
|chownGroup|string \| null|false|none|none|
|episodeTitleRequired|[EpisodeTitleRequiredType](#schemaepisodetitlerequiredtype)|false|none|none|
|skipFreeSpaceCheckWhenGrabbing|boolean|false|none|none|
|skipFreeSpaceCheckWhenImporting|boolean|false|none|none|
|minimumFreeSpaceWhenImporting|integer(int32)|false|none|none|
|copyUsingHardlinks|boolean|false|none|none|
|useScriptImport|boolean|false|none|none|
|scriptImportPath|string \| null|false|none|none|
|importExtraFiles|boolean|false|none|none|
|extraFileExtensions|string \| null|false|none|none|
|enableMediaInfo|boolean|false|none|none|
|userRejectedExtensions|string \| null|false|none|none|
|seasonPackUpgrade|[SeasonPackUpgradeType](#schemaseasonpackupgradetype)|false|none|none|
|seasonPackUpgradeThreshold|number(double)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|downloadPropersAndRepacks|preferAndUpgrade|
|downloadPropersAndRepacks|doNotUpgrade|
|downloadPropersAndRepacks|doNotPrefer|
|fileDate|none|
|fileDate|localAirDate|
|fileDate|utcAirDate|
|rescanAfterRefresh|always|
|rescanAfterRefresh|afterManual|
|rescanAfterRefresh|never|
|episodeTitleRequired|always|
|episodeTitleRequired|bulkSeasonReleases|
|episodeTitleRequired|never|
|seasonPackUpgrade|all|
|seasonPackUpgrade|threshold|
|seasonPackUpgrade|any|

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
          "hint": "string"
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
              "hint": "string"
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

<h2 id="tocS_MonitorTypes">MonitorTypes</h2>
<!-- backwards compatibility -->
<a id="schemamonitortypes"></a>
<a id="schema_MonitorTypes"></a>
<a id="tocSmonitortypes"></a>
<a id="tocsmonitortypes"></a>

```json
"unknown"
```

<h2 id="tocS_MonitoringOptions">MonitoringOptions</h2>
<!-- backwards compatibility -->
<a id="schemamonitoringoptions"></a>
<a id="schema_MonitoringOptions"></a>
<a id="tocSmonitoringoptions"></a>
<a id="tocsmonitoringoptions"></a>

```json
{
  "ignoreEpisodesWithFiles": true,
  "ignoreEpisodesWithoutFiles": true,
  "monitor": "unknown"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ignoreEpisodesWithFiles|boolean|false|none|none|
|ignoreEpisodesWithoutFiles|boolean|false|none|none|
|monitor|[MonitorTypes](#schemamonitortypes)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|monitor|unknown|
|monitor|all|
|monitor|future|
|monitor|missing|
|monitor|existing|
|monitor|firstSeason|
|monitor|lastSeason|
|monitor|latestSeason|
|monitor|pilot|
|monitor|recent|
|monitor|monitorSpecials|
|monitor|unmonitorSpecials|
|monitor|none|
|monitor|skip|

<h2 id="tocS_NamingConfigResource">NamingConfigResource</h2>
<!-- backwards compatibility -->
<a id="schemanamingconfigresource"></a>
<a id="schema_NamingConfigResource"></a>
<a id="tocSnamingconfigresource"></a>
<a id="tocsnamingconfigresource"></a>

```json
{
  "id": 0,
  "renameEpisodes": true,
  "replaceIllegalCharacters": true,
  "colonReplacementFormat": 0,
  "customColonReplacementFormat": "string",
  "multiEpisodeStyle": 0,
  "standardEpisodeFormat": "string",
  "dailyEpisodeFormat": "string",
  "animeEpisodeFormat": "string",
  "seriesFolderFormat": "string",
  "seasonFolderFormat": "string",
  "specialsFolderFormat": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|false|none|none|
|renameEpisodes|boolean|false|none|none|
|replaceIllegalCharacters|boolean|false|none|none|
|colonReplacementFormat|integer(int32)|false|none|none|
|customColonReplacementFormat|string \| null|false|none|none|
|multiEpisodeStyle|integer(int32)|false|none|none|
|standardEpisodeFormat|string \| null|false|none|none|
|dailyEpisodeFormat|string \| null|false|none|none|
|animeEpisodeFormat|string \| null|false|none|none|
|seriesFolderFormat|string \| null|false|none|none|
|seasonFolderFormat|string \| null|false|none|none|
|specialsFolderFormat|string \| null|false|none|none|

<h2 id="tocS_NewItemMonitorTypes">NewItemMonitorTypes</h2>
<!-- backwards compatibility -->
<a id="schemanewitemmonitortypes"></a>
<a id="schema_NewItemMonitorTypes"></a>
<a id="tocSnewitemmonitortypes"></a>
<a id="tocsnewitemmonitortypes"></a>

```json
"all"
```

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
          "hint": "string"
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
              "hint": "string"
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
      "onImportComplete": true,
      "onRename": true,
      "onSeriesAdd": true,
      "onSeriesDelete": true,
      "onEpisodeFileDelete": true,
      "onEpisodeFileDeleteForUpgrade": true,
      "onHealthIssue": true,
      "includeHealthWarnings": true,
      "onHealthRestored": true,
      "onApplicationUpdate": true,
      "onManualInteractionRequired": true,
      "supportsOnGrab": true,
      "supportsOnDownload": true,
      "supportsOnUpgrade": true,
      "supportsOnImportComplete": true,
      "supportsOnRename": true,
      "supportsOnSeriesAdd": true,
      "supportsOnSeriesDelete": true,
      "supportsOnEpisodeFileDelete": true,
      "supportsOnEpisodeFileDeleteForUpgrade": true,
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
  "onImportComplete": true,
  "onRename": true,
  "onSeriesAdd": true,
  "onSeriesDelete": true,
  "onEpisodeFileDelete": true,
  "onEpisodeFileDeleteForUpgrade": true,
  "onHealthIssue": true,
  "includeHealthWarnings": true,
  "onHealthRestored": true,
  "onApplicationUpdate": true,
  "onManualInteractionRequired": true,
  "supportsOnGrab": true,
  "supportsOnDownload": true,
  "supportsOnUpgrade": true,
  "supportsOnImportComplete": true,
  "supportsOnRename": true,
  "supportsOnSeriesAdd": true,
  "supportsOnSeriesDelete": true,
  "supportsOnEpisodeFileDelete": true,
  "supportsOnEpisodeFileDeleteForUpgrade": true,
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
|onImportComplete|boolean|false|none|none|
|onRename|boolean|false|none|none|
|onSeriesAdd|boolean|false|none|none|
|onSeriesDelete|boolean|false|none|none|
|onEpisodeFileDelete|boolean|false|none|none|
|onEpisodeFileDeleteForUpgrade|boolean|false|none|none|
|onHealthIssue|boolean|false|none|none|
|includeHealthWarnings|boolean|false|none|none|
|onHealthRestored|boolean|false|none|none|
|onApplicationUpdate|boolean|false|none|none|
|onManualInteractionRequired|boolean|false|none|none|
|supportsOnGrab|boolean|false|none|none|
|supportsOnDownload|boolean|false|none|none|
|supportsOnUpgrade|boolean|false|none|none|
|supportsOnImportComplete|boolean|false|none|none|
|supportsOnRename|boolean|false|none|none|
|supportsOnSeriesAdd|boolean|false|none|none|
|supportsOnSeriesDelete|boolean|false|none|none|
|supportsOnEpisodeFileDelete|boolean|false|none|none|
|supportsOnEpisodeFileDeleteForUpgrade|boolean|false|none|none|
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
  "parsedEpisodeInfo": {
    "releaseTitle": "string",
    "seriesTitle": "string",
    "seriesTitleInfo": {
      "title": "string",
      "titleWithoutYear": "string",
      "year": 0,
      "allTitles": [
        "string"
      ]
    },
    "quality": {
      "quality": {
        "id": 0,
        "name": "string",
        "source": "unknown",
        "resolution": 0
      },
      "revision": {
        "version": 0,
        "real": 0,
        "isRepack": true
      }
    },
    "seasonNumbers": [
      0
    ],
    "seasonNumber": 0,
    "episodeNumbers": [
      0
    ],
    "absoluteEpisodeNumbers": [
      0
    ],
    "specialAbsoluteEpisodeNumbers": [
      0
    ],
    "airDate": "string",
    "languages": [
      {
        "id": 0,
        "name": "string"
      }
    ],
    "fullSeason": true,
    "isPartialSeason": true,
    "isMultiSeason": true,
    "isSeasonExtra": true,
    "isSplitEpisode": true,
    "isMiniSeries": true,
    "special": true,
    "releaseGroup": "string",
    "releaseHash": "string",
    "seasonPart": 0,
    "releaseTokens": "string",
    "dailyPart": 0,
    "isDaily": true,
    "isAbsoluteNumbering": true,
    "isPossibleSpecialEpisode": true,
    "isPossibleSceneSeasonSpecial": true,
    "releaseType": "unknown"
  },
  "series": {
    "id": 0,
    "title": "string",
    "alternateTitles": [
      {
        "title": "string",
        "seasonNumber": 0,
        "sceneSeasonNumber": 0,
        "sceneOrigin": "string",
        "comment": "string"
      }
    ],
    "sortTitle": "string",
    "status": "continuing",
    "ended": true,
    "profileName": "string",
    "overview": "string",
    "nextAiring": "1970-01-01T00:00:00Z",
    "previousAiring": "1970-01-01T00:00:00Z",
    "network": "string",
    "airTime": "string",
    "images": [
      {
        "coverType": "unknown",
        "url": "string",
        "remoteUrl": "string"
      }
    ],
    "language": {
      "id": 0,
      "name": "string"
    },
    "originalLanguage": {
      "id": 0,
      "name": "string"
    },
    "remotePoster": "string",
    "seasonType": "string",
    "seasons": [
      {
        "seasonNumber": 0,
        "monitored": true,
        "title": "string",
        "statistics": {
          "nextAiring": "1970-01-01T00:00:00Z",
          "previousAiring": "1970-01-01T00:00:00Z",
          "episodeFileCount": 0,
          "episodeCount": 0,
          "totalEpisodeCount": 0,
          "sizeOnDisk": 0,
          "releaseGroups": [
            "string"
          ],
          "percentOfEpisodes": 0
        },
        "images": [
          {
            "coverType": "unknown",
            "url": "string",
            "remoteUrl": "string"
          }
        ]
      }
    ],
    "seasonTypes": [
      {
        "name": "string",
        "type": "string",
        "seasonNumbers": [
          0
        ],
        "episodeCount": 0
      }
    ],
    "translations": [
      {
        "language": {
          "id": 0,
          "name": "string"
        },
        "title": "string",
        "overview": "string"
      }
    ],
    "year": 0,
    "path": "string",
    "pendingPath": "string",
    "qualityProfileId": 0,
    "seasonFolder": true,
    "monitored": true,
    "monitorNewItems": "all",
    "useSceneNumbering": true,
    "runtime": 0,
    "tvdbId": 0,
    "tvRageId": 0,
    "tvMazeId": 0,
    "tmdbId": 0,
    "firstAired": "1970-01-01T00:00:00Z",
    "lastAired": "1970-01-01T00:00:00Z",
    "seriesType": "standard",
    "cleanTitle": "string",
    "originalTitle": "string",
    "cleanOriginalTitle": "string",
    "imdbId": "string",
    "titleSlug": "string",
    "rootFolderPath": "string",
    "folder": "string",
    "folders": [
      {
        "language": {
          "id": 0,
          "name": "string"
        },
        "folder": "string"
      }
    ],
    "certification": "string",
    "genres": [
      "string"
    ],
    "tags": [
      0
    ],
    "added": "1970-01-01T00:00:00Z",
    "addOptions": {
      "ignoreEpisodesWithFiles": true,
      "ignoreEpisodesWithoutFiles": true,
      "monitor": "unknown",
      "searchForMissingEpisodes": true,
      "searchForCutoffUnmetEpisodes": true
    },
    "ratings": {
      "votes": 0,
      "value": 0
    },
    "statistics": {
      "seasonCount": 0,
      "episodeFileCount": 0,
      "episodeCount": 0,
      "totalEpisodeCount": 0,
      "sizeOnDisk": 0,
      "releaseGroups": [
        "string"
      ],
      "percentOfEpisodes": 0
    },
    "episodesChanged": true,
    "languageProfileId": 0
  },
  "episodes": [
    {
      "id": 0,
      "seriesId": 0,
      "tvdbId": 0,
      "episodeFileId": 0,
      "seasonNumber": 0,
      "episodeNumber": 0,
      "title": "string",
      "airDate": "string",
      "airDateUtc": "1970-01-01T00:00:00Z",
      "lastSearchTime": "1970-01-01T00:00:00Z",
      "runtime": 0,
      "finaleType": "string",
      "overview": "string",
      "episodeFile": {
        "id": 0,
        "seriesId": 0,
        "seasonNumber": 0,
        "relativePath": "string",
        "path": "string",
        "size": 0,
        "dateAdded": "1970-01-01T00:00:00Z",
        "sceneName": "string",
        "releaseGroup": "string",
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
            "resolution": 0
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
                        "hint": "string"
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
        "releaseType": "unknown",
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
        "qualityCutoffNotMet": true
      },
      "hasFile": true,
      "monitored": true,
      "absoluteEpisodeNumber": 0,
      "sceneAbsoluteEpisodeNumber": 0,
      "sceneEpisodeNumber": 0,
      "sceneSeasonNumber": 0,
      "unverifiedSceneNumbering": true,
      "series": {
        "id": 0,
        "title": "string",
        "alternateTitles": [
          {
            "title": "string",
            "seasonNumber": 0,
            "sceneSeasonNumber": 0,
            "sceneOrigin": "string",
            "comment": "string"
          }
        ],
        "sortTitle": "string",
        "status": "continuing",
        "ended": true,
        "profileName": "string",
        "overview": "string",
        "nextAiring": "1970-01-01T00:00:00Z",
        "previousAiring": "1970-01-01T00:00:00Z",
        "network": "string",
        "airTime": "string",
        "images": [
          {
            "coverType": "unknown",
            "url": "string",
            "remoteUrl": "string"
          }
        ],
        "language": {
          "id": 0,
          "name": "string"
        },
        "originalLanguage": {
          "id": 0,
          "name": "string"
        },
        "remotePoster": "string",
        "seasonType": "string",
        "seasons": [
          {
            "seasonNumber": 0,
            "monitored": true,
            "title": "string",
            "statistics": {
              "nextAiring": "1970-01-01T00:00:00Z",
              "previousAiring": "1970-01-01T00:00:00Z",
              "episodeFileCount": 0,
              "episodeCount": 0,
              "totalEpisodeCount": 0,
              "sizeOnDisk": 0,
              "releaseGroups": [
                "string"
              ],
              "percentOfEpisodes": 0
            },
            "images": [
              {
                "coverType": "unknown",
                "url": "string",
                "remoteUrl": "string"
              }
            ]
          }
        ],
        "seasonTypes": [
          {
            "name": "string",
            "type": "string",
            "seasonNumbers": [
              0
            ],
            "episodeCount": 0
          }
        ],
        "translations": [
          {
            "language": {
              "id": 0,
              "name": "string"
            },
            "title": "string",
            "overview": "string"
          }
        ],
        "year": 0,
        "path": "string",
        "pendingPath": "string",
        "qualityProfileId": 0,
        "seasonFolder": true,
        "monitored": true,
        "monitorNewItems": "all",
        "useSceneNumbering": true,
        "runtime": 0,
        "tvdbId": 0,
        "tvRageId": 0,
        "tvMazeId": 0,
        "tmdbId": 0,
        "firstAired": "1970-01-01T00:00:00Z",
        "lastAired": "1970-01-01T00:00:00Z",
        "seriesType": "standard",
        "cleanTitle": "string",
        "originalTitle": "string",
        "cleanOriginalTitle": "string",
        "imdbId": "string",
        "titleSlug": "string",
        "rootFolderPath": "string",
        "folder": "string",
        "folders": [
          {
            "language": {
              "id": 0,
              "name": "string"
            },
            "folder": "string"
          }
        ],
        "certification": "string",
        "genres": [
          "string"
        ],
        "tags": [
          0
        ],
        "added": "1970-01-01T00:00:00Z",
        "addOptions": {
          "ignoreEpisodesWithFiles": true,
          "ignoreEpisodesWithoutFiles": true,
          "monitor": "unknown",
          "searchForMissingEpisodes": true,
          "searchForCutoffUnmetEpisodes": true
        },
        "ratings": {
          "votes": 0,
          "value": 0
        },
        "statistics": {
          "seasonCount": 0,
          "episodeFileCount": 0,
          "episodeCount": 0,
          "totalEpisodeCount": 0,
          "sizeOnDisk": 0,
          "releaseGroups": [
            "string"
          ],
          "percentOfEpisodes": 0
        },
        "episodesChanged": true,
        "languageProfileId": 0
      },
      "images": [
        {
          "coverType": "unknown",
          "url": "string",
          "remoteUrl": "string"
        }
      ]
    }
  ],
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
                  "hint": "string"
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
|parsedEpisodeInfo|[ParsedEpisodeInfoResource](#schemaparsedepisodeinforesource)|false|none|none|
|series|[SeriesResource](#schemaseriesresource)|false|none|none|
|episodes|[[EpisodeResource](#schemaepisoderesource)]|false|none|none|
|languages|[[Language](#schemalanguage)]|false|none|none|
|customFormats|[[CustomFormatResource](#schemacustomformatresource)]|false|none|none|
|customFormatScore|integer(int32)|false|none|none|

<h2 id="tocS_ParsedEpisodeInfoResource">ParsedEpisodeInfoResource</h2>
<!-- backwards compatibility -->
<a id="schemaparsedepisodeinforesource"></a>
<a id="schema_ParsedEpisodeInfoResource"></a>
<a id="tocSparsedepisodeinforesource"></a>
<a id="tocsparsedepisodeinforesource"></a>

```json
{
  "releaseTitle": "string",
  "seriesTitle": "string",
  "seriesTitleInfo": {
    "title": "string",
    "titleWithoutYear": "string",
    "year": 0,
    "allTitles": [
      "string"
    ]
  },
  "quality": {
    "quality": {
      "id": 0,
      "name": "string",
      "source": "unknown",
      "resolution": 0
    },
    "revision": {
      "version": 0,
      "real": 0,
      "isRepack": true
    }
  },
  "seasonNumbers": [
    0
  ],
  "seasonNumber": 0,
  "episodeNumbers": [
    0
  ],
  "absoluteEpisodeNumbers": [
    0
  ],
  "specialAbsoluteEpisodeNumbers": [
    0
  ],
  "airDate": "string",
  "languages": [
    {
      "id": 0,
      "name": "string"
    }
  ],
  "fullSeason": true,
  "isPartialSeason": true,
  "isMultiSeason": true,
  "isSeasonExtra": true,
  "isSplitEpisode": true,
  "isMiniSeries": true,
  "special": true,
  "releaseGroup": "string",
  "releaseHash": "string",
  "seasonPart": 0,
  "releaseTokens": "string",
  "dailyPart": 0,
  "isDaily": true,
  "isAbsoluteNumbering": true,
  "isPossibleSpecialEpisode": true,
  "isPossibleSceneSeasonSpecial": true,
  "releaseType": "unknown"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|releaseTitle|string \| null|false|none|none|
|seriesTitle|string \| null|false|none|none|
|seriesTitleInfo|[SeriesTitleInfo](#schemaseriestitleinfo)|false|none|none|
|quality|[QualityModel](#schemaqualitymodel)|false|none|none|
|seasonNumbers|[integer(int32)]|false|none|none|
|seasonNumber|integer(int32)|false|none|none|
|episodeNumbers|[integer(int32)]|false|none|none|
|absoluteEpisodeNumbers|[integer(int32)]|false|none|none|
|specialAbsoluteEpisodeNumbers|[number(double)]|false|none|none|
|airDate|string \| null|false|none|none|
|languages|[[Language](#schemalanguage)]|false|none|none|
|fullSeason|boolean|false|none|none|
|isPartialSeason|boolean|false|none|none|
|isMultiSeason|boolean|false|none|none|
|isSeasonExtra|boolean|false|none|none|
|isSplitEpisode|boolean|false|none|none|
|isMiniSeries|boolean|false|none|none|
|special|boolean|false|none|none|
|releaseGroup|string \| null|false|none|none|
|releaseHash|string \| null|false|none|none|
|seasonPart|integer(int32)|false|none|none|
|releaseTokens|string \| null|false|none|none|
|dailyPart|integer(int32) \| null|false|none|none|
|isDaily|boolean|false|none|none|
|isAbsoluteNumbering|boolean|false|none|none|
|isPossibleSpecialEpisode|boolean|false|none|none|
|isPossibleSceneSeasonSpecial|boolean|false|none|none|
|releaseType|[ReleaseType](#schemareleasetype)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|releaseType|unknown|
|releaseType|singleEpisode|
|releaseType|multiEpisode|
|releaseType|seasonPack|

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
  "resolution": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|false|none|none|
|name|string \| null|false|none|none|
|source|[QualitySource](#schemaqualitysource)|false|none|none|
|resolution|integer(int32)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|source|unknown|
|source|television|
|source|televisionRaw|
|source|web|
|source|webRip|
|source|dvd|
|source|bluray|
|source|blurayRaw|

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
    "resolution": 0
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
    "resolution": 0
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
    "resolution": 0
  },
  "items": [
    {
      "id": 0,
      "name": "string",
      "quality": {
        "id": 0,
        "name": "string",
        "source": "unknown",
        "resolution": 0
      },
      "items": [
        {}
      ],
      "allowed": true,
      "minSize": 0,
      "maxSize": 0,
      "preferredSize": 0
    }
  ],
  "allowed": true,
  "minSize": 0,
  "maxSize": 0,
  "preferredSize": 0
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
|minSize|number(double) \| null|false|none|none|
|maxSize|number(double) \| null|false|none|none|
|preferredSize|number(double) \| null|false|none|none|

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
        "resolution": 0
      },
      "items": [
        {}
      ],
      "allowed": true,
      "minSize": 0,
      "maxSize": 0,
      "preferredSize": 0
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
  ]
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
  "seriesId": 0,
  "episodeId": 0,
  "seasonNumber": 0,
  "series": {
    "id": 0,
    "title": "string",
    "alternateTitles": [
      {
        "title": "string",
        "seasonNumber": 0,
        "sceneSeasonNumber": 0,
        "sceneOrigin": "string",
        "comment": "string"
      }
    ],
    "sortTitle": "string",
    "status": "continuing",
    "ended": true,
    "profileName": "string",
    "overview": "string",
    "nextAiring": "1970-01-01T00:00:00Z",
    "previousAiring": "1970-01-01T00:00:00Z",
    "network": "string",
    "airTime": "string",
    "images": [
      {
        "coverType": "unknown",
        "url": "string",
        "remoteUrl": "string"
      }
    ],
    "language": {
      "id": 0,
      "name": "string"
    },
    "originalLanguage": {
      "id": 0,
      "name": "string"
    },
    "remotePoster": "string",
    "seasonType": "string",
    "seasons": [
      {
        "seasonNumber": 0,
        "monitored": true,
        "title": "string",
        "statistics": {
          "nextAiring": "1970-01-01T00:00:00Z",
          "previousAiring": "1970-01-01T00:00:00Z",
          "episodeFileCount": 0,
          "episodeCount": 0,
          "totalEpisodeCount": 0,
          "sizeOnDisk": 0,
          "releaseGroups": [
            "string"
          ],
          "percentOfEpisodes": 0
        },
        "images": [
          {
            "coverType": "unknown",
            "url": "string",
            "remoteUrl": "string"
          }
        ]
      }
    ],
    "seasonTypes": [
      {
        "name": "string",
        "type": "string",
        "seasonNumbers": [
          0
        ],
        "episodeCount": 0
      }
    ],
    "translations": [
      {
        "language": {
          "id": 0,
          "name": "string"
        },
        "title": "string",
        "overview": "string"
      }
    ],
    "year": 0,
    "path": "string",
    "pendingPath": "string",
    "qualityProfileId": 0,
    "seasonFolder": true,
    "monitored": true,
    "monitorNewItems": "all",
    "useSceneNumbering": true,
    "runtime": 0,
    "tvdbId": 0,
    "tvRageId": 0,
    "tvMazeId": 0,
    "tmdbId": 0,
    "firstAired": "1970-01-01T00:00:00Z",
    "lastAired": "1970-01-01T00:00:00Z",
    "seriesType": "standard",
    "cleanTitle": "string",
    "originalTitle": "string",
    "cleanOriginalTitle": "string",
    "imdbId": "string",
    "titleSlug": "string",
    "rootFolderPath": "string",
    "folder": "string",
    "folders": [
      {
        "language": {
          "id": 0,
          "name": "string"
        },
        "folder": "string"
      }
    ],
    "certification": "string",
    "genres": [
      "string"
    ],
    "tags": [
      0
    ],
    "added": "1970-01-01T00:00:00Z",
    "addOptions": {
      "ignoreEpisodesWithFiles": true,
      "ignoreEpisodesWithoutFiles": true,
      "monitor": "unknown",
      "searchForMissingEpisodes": true,
      "searchForCutoffUnmetEpisodes": true
    },
    "ratings": {
      "votes": 0,
      "value": 0
    },
    "statistics": {
      "seasonCount": 0,
      "episodeFileCount": 0,
      "episodeCount": 0,
      "totalEpisodeCount": 0,
      "sizeOnDisk": 0,
      "releaseGroups": [
        "string"
      ],
      "percentOfEpisodes": 0
    },
    "episodesChanged": true,
    "languageProfileId": 0
  },
  "episode": {
    "id": 0,
    "seriesId": 0,
    "tvdbId": 0,
    "episodeFileId": 0,
    "seasonNumber": 0,
    "episodeNumber": 0,
    "title": "string",
    "airDate": "string",
    "airDateUtc": "1970-01-01T00:00:00Z",
    "lastSearchTime": "1970-01-01T00:00:00Z",
    "runtime": 0,
    "finaleType": "string",
    "overview": "string",
    "episodeFile": {
      "id": 0,
      "seriesId": 0,
      "seasonNumber": 0,
      "relativePath": "string",
      "path": "string",
      "size": 0,
      "dateAdded": "1970-01-01T00:00:00Z",
      "sceneName": "string",
      "releaseGroup": "string",
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
          "resolution": 0
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
                      "hint": "string"
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
      "releaseType": "unknown",
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
      "qualityCutoffNotMet": true
    },
    "hasFile": true,
    "monitored": true,
    "absoluteEpisodeNumber": 0,
    "sceneAbsoluteEpisodeNumber": 0,
    "sceneEpisodeNumber": 0,
    "sceneSeasonNumber": 0,
    "unverifiedSceneNumbering": true,
    "series": {
      "id": 0,
      "title": "string",
      "alternateTitles": [
        {
          "title": "string",
          "seasonNumber": 0,
          "sceneSeasonNumber": 0,
          "sceneOrigin": "string",
          "comment": "string"
        }
      ],
      "sortTitle": "string",
      "status": "continuing",
      "ended": true,
      "profileName": "string",
      "overview": "string",
      "nextAiring": "1970-01-01T00:00:00Z",
      "previousAiring": "1970-01-01T00:00:00Z",
      "network": "string",
      "airTime": "string",
      "images": [
        {
          "coverType": "unknown",
          "url": "string",
          "remoteUrl": "string"
        }
      ],
      "language": {
        "id": 0,
        "name": "string"
      },
      "originalLanguage": {
        "id": 0,
        "name": "string"
      },
      "remotePoster": "string",
      "seasonType": "string",
      "seasons": [
        {
          "seasonNumber": 0,
          "monitored": true,
          "title": "string",
          "statistics": {
            "nextAiring": "1970-01-01T00:00:00Z",
            "previousAiring": "1970-01-01T00:00:00Z",
            "episodeFileCount": 0,
            "episodeCount": 0,
            "totalEpisodeCount": 0,
            "sizeOnDisk": 0,
            "releaseGroups": [
              "string"
            ],
            "percentOfEpisodes": 0
          },
          "images": [
            {
              "coverType": "unknown",
              "url": "string",
              "remoteUrl": "string"
            }
          ]
        }
      ],
      "seasonTypes": [
        {
          "name": "string",
          "type": "string",
          "seasonNumbers": [
            0
          ],
          "episodeCount": 0
        }
      ],
      "translations": [
        {
          "language": {
            "id": 0,
            "name": "string"
          },
          "title": "string",
          "overview": "string"
        }
      ],
      "year": 0,
      "path": "string",
      "pendingPath": "string",
      "qualityProfileId": 0,
      "seasonFolder": true,
      "monitored": true,
      "monitorNewItems": "all",
      "useSceneNumbering": true,
      "runtime": 0,
      "tvdbId": 0,
      "tvRageId": 0,
      "tvMazeId": 0,
      "tmdbId": 0,
      "firstAired": "1970-01-01T00:00:00Z",
      "lastAired": "1970-01-01T00:00:00Z",
      "seriesType": "standard",
      "cleanTitle": "string",
      "originalTitle": "string",
      "cleanOriginalTitle": "string",
      "imdbId": "string",
      "titleSlug": "string",
      "rootFolderPath": "string",
      "folder": "string",
      "folders": [
        {
          "language": {
            "id": 0,
            "name": "string"
          },
          "folder": "string"
        }
      ],
      "certification": "string",
      "genres": [
        "string"
      ],
      "tags": [
        0
      ],
      "added": "1970-01-01T00:00:00Z",
      "addOptions": {
        "ignoreEpisodesWithFiles": true,
        "ignoreEpisodesWithoutFiles": true,
        "monitor": "unknown",
        "searchForMissingEpisodes": true,
        "searchForCutoffUnmetEpisodes": true
      },
      "ratings": {
        "votes": 0,
        "value": 0
      },
      "statistics": {
        "seasonCount": 0,
        "episodeFileCount": 0,
        "episodeCount": 0,
        "totalEpisodeCount": 0,
        "sizeOnDisk": 0,
        "releaseGroups": [
          "string"
        ],
        "percentOfEpisodes": 0
      },
      "episodesChanged": true,
      "languageProfileId": 0
    },
    "images": [
      {
        "coverType": "unknown",
        "url": "string",
        "remoteUrl": "string"
      }
    ]
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
      "resolution": 0
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
                  "hint": "string"
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
  "episodeHasFile": true,
  "sizeleft": 0,
  "timeleft": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|false|none|none|
|seriesId|integer(int32) \| null|false|none|none|
|episodeId|integer(int32) \| null|false|none|none|
|seasonNumber|integer(int32) \| null|false|none|none|
|series|[SeriesResource](#schemaseriesresource)|false|none|none|
|episode|[EpisodeResource](#schemaepisoderesource)|false|none|none|
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
|episodeHasFile|boolean|false|none|none|
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
      "seriesId": 0,
      "episodeId": 0,
      "seasonNumber": 0,
      "series": {
        "id": 0,
        "title": "string",
        "alternateTitles": [
          {
            "title": "string",
            "seasonNumber": 0,
            "sceneSeasonNumber": 0,
            "sceneOrigin": "string",
            "comment": "string"
          }
        ],
        "sortTitle": "string",
        "status": "continuing",
        "ended": true,
        "profileName": "string",
        "overview": "string",
        "nextAiring": "1970-01-01T00:00:00Z",
        "previousAiring": "1970-01-01T00:00:00Z",
        "network": "string",
        "airTime": "string",
        "images": [
          {
            "coverType": "unknown",
            "url": "string",
            "remoteUrl": "string"
          }
        ],
        "language": {
          "id": 0,
          "name": "string"
        },
        "originalLanguage": {
          "id": 0,
          "name": "string"
        },
        "remotePoster": "string",
        "seasonType": "string",
        "seasons": [
          {
            "seasonNumber": 0,
            "monitored": true,
            "title": "string",
            "statistics": {
              "nextAiring": "1970-01-01T00:00:00Z",
              "previousAiring": "1970-01-01T00:00:00Z",
              "episodeFileCount": 0,
              "episodeCount": 0,
              "totalEpisodeCount": 0,
              "sizeOnDisk": 0,
              "releaseGroups": [
                "string"
              ],
              "percentOfEpisodes": 0
            },
            "images": [
              {
                "coverType": "unknown",
                "url": "string",
                "remoteUrl": "string"
              }
            ]
          }
        ],
        "seasonTypes": [
          {
            "name": "string",
            "type": "string",
            "seasonNumbers": [
              0
            ],
            "episodeCount": 0
          }
        ],
        "translations": [
          {
            "language": {
              "id": 0,
              "name": "string"
            },
            "title": "string",
            "overview": "string"
          }
        ],
        "year": 0,
        "path": "string",
        "pendingPath": "string",
        "qualityProfileId": 0,
        "seasonFolder": true,
        "monitored": true,
        "monitorNewItems": "all",
        "useSceneNumbering": true,
        "runtime": 0,
        "tvdbId": 0,
        "tvRageId": 0,
        "tvMazeId": 0,
        "tmdbId": 0,
        "firstAired": "1970-01-01T00:00:00Z",
        "lastAired": "1970-01-01T00:00:00Z",
        "seriesType": "standard",
        "cleanTitle": "string",
        "originalTitle": "string",
        "cleanOriginalTitle": "string",
        "imdbId": "string",
        "titleSlug": "string",
        "rootFolderPath": "string",
        "folder": "string",
        "folders": [
          {
            "language": {
              "id": 0,
              "name": "string"
            },
            "folder": "string"
          }
        ],
        "certification": "string",
        "genres": [
          "string"
        ],
        "tags": [
          0
        ],
        "added": "1970-01-01T00:00:00Z",
        "addOptions": {
          "ignoreEpisodesWithFiles": true,
          "ignoreEpisodesWithoutFiles": true,
          "monitor": "unknown",
          "searchForMissingEpisodes": true,
          "searchForCutoffUnmetEpisodes": true
        },
        "ratings": {
          "votes": 0,
          "value": 0
        },
        "statistics": {
          "seasonCount": 0,
          "episodeFileCount": 0,
          "episodeCount": 0,
          "totalEpisodeCount": 0,
          "sizeOnDisk": 0,
          "releaseGroups": [
            "string"
          ],
          "percentOfEpisodes": 0
        },
        "episodesChanged": true,
        "languageProfileId": 0
      },
      "episode": {
        "id": 0,
        "seriesId": 0,
        "tvdbId": 0,
        "episodeFileId": 0,
        "seasonNumber": 0,
        "episodeNumber": 0,
        "title": "string",
        "airDate": "string",
        "airDateUtc": "1970-01-01T00:00:00Z",
        "lastSearchTime": "1970-01-01T00:00:00Z",
        "runtime": 0,
        "finaleType": "string",
        "overview": "string",
        "episodeFile": {
          "id": 0,
          "seriesId": 0,
          "seasonNumber": 0,
          "relativePath": "string",
          "path": "string",
          "size": 0,
          "dateAdded": "1970-01-01T00:00:00Z",
          "sceneName": "string",
          "releaseGroup": "string",
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
              "resolution": 0
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
                          "hint": "string"
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
          "releaseType": "unknown",
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
          "qualityCutoffNotMet": true
        },
        "hasFile": true,
        "monitored": true,
        "absoluteEpisodeNumber": 0,
        "sceneAbsoluteEpisodeNumber": 0,
        "sceneEpisodeNumber": 0,
        "sceneSeasonNumber": 0,
        "unverifiedSceneNumbering": true,
        "series": {
          "id": 0,
          "title": "string",
          "alternateTitles": [
            {
              "title": "string",
              "seasonNumber": 0,
              "sceneSeasonNumber": 0,
              "sceneOrigin": "string",
              "comment": "string"
            }
          ],
          "sortTitle": "string",
          "status": "continuing",
          "ended": true,
          "profileName": "string",
          "overview": "string",
          "nextAiring": "1970-01-01T00:00:00Z",
          "previousAiring": "1970-01-01T00:00:00Z",
          "network": "string",
          "airTime": "string",
          "images": [
            {
              "coverType": "unknown",
              "url": "string",
              "remoteUrl": "string"
            }
          ],
          "language": {
            "id": 0,
            "name": "string"
          },
          "originalLanguage": {
            "id": 0,
            "name": "string"
          },
          "remotePoster": "string",
          "seasonType": "string",
          "seasons": [
            {
              "seasonNumber": 0,
              "monitored": true,
              "title": "string",
              "statistics": {
                "nextAiring": "1970-01-01T00:00:00Z",
                "previousAiring": "1970-01-01T00:00:00Z",
                "episodeFileCount": 0,
                "episodeCount": 0,
                "totalEpisodeCount": 0,
                "sizeOnDisk": 0,
                "releaseGroups": [
                  "string"
                ],
                "percentOfEpisodes": 0
              },
              "images": [
                {
                  "coverType": "unknown",
                  "url": "string",
                  "remoteUrl": "string"
                }
              ]
            }
          ],
          "seasonTypes": [
            {
              "name": "string",
              "type": "string",
              "seasonNumbers": [
                0
              ],
              "episodeCount": 0
            }
          ],
          "translations": [
            {
              "language": {
                "id": 0,
                "name": "string"
              },
              "title": "string",
              "overview": "string"
            }
          ],
          "year": 0,
          "path": "string",
          "pendingPath": "string",
          "qualityProfileId": 0,
          "seasonFolder": true,
          "monitored": true,
          "monitorNewItems": "all",
          "useSceneNumbering": true,
          "runtime": 0,
          "tvdbId": 0,
          "tvRageId": 0,
          "tvMazeId": 0,
          "tmdbId": 0,
          "firstAired": "1970-01-01T00:00:00Z",
          "lastAired": "1970-01-01T00:00:00Z",
          "seriesType": "standard",
          "cleanTitle": "string",
          "originalTitle": "string",
          "cleanOriginalTitle": "string",
          "imdbId": "string",
          "titleSlug": "string",
          "rootFolderPath": "string",
          "folder": "string",
          "folders": [
            {
              "language": {
                "id": 0,
                "name": "string"
              },
              "folder": "string"
            }
          ],
          "certification": "string",
          "genres": [
            "string"
          ],
          "tags": [
            0
          ],
          "added": "1970-01-01T00:00:00Z",
          "addOptions": {
            "ignoreEpisodesWithFiles": true,
            "ignoreEpisodesWithoutFiles": true,
            "monitor": "unknown",
            "searchForMissingEpisodes": true,
            "searchForCutoffUnmetEpisodes": true
          },
          "ratings": {
            "votes": 0,
            "value": 0
          },
          "statistics": {
            "seasonCount": 0,
            "episodeFileCount": 0,
            "episodeCount": 0,
            "totalEpisodeCount": 0,
            "sizeOnDisk": 0,
            "releaseGroups": [
              "string"
            ],
            "percentOfEpisodes": 0
          },
          "episodesChanged": true,
          "languageProfileId": 0
        },
        "images": [
          {
            "coverType": "unknown",
            "url": "string",
            "remoteUrl": "string"
          }
        ]
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
          "resolution": 0
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
                      "hint": "string"
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
      "episodeHasFile": true,
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

<h2 id="tocS_Ratings">Ratings</h2>
<!-- backwards compatibility -->
<a id="schemaratings"></a>
<a id="schema_Ratings"></a>
<a id="tocSratings"></a>
<a id="tocsratings"></a>

```json
{
  "votes": 0,
  "value": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|votes|integer(int32)|false|none|none|
|value|number(double)|false|none|none|

<h2 id="tocS_RejectionType">RejectionType</h2>
<!-- backwards compatibility -->
<a id="schemarejectiontype"></a>
<a id="schema_RejectionType"></a>
<a id="tocSrejectiontype"></a>
<a id="tocsrejectiontype"></a>

```json
"permanent"
```

<h2 id="tocS_ReleaseEpisodeResource">ReleaseEpisodeResource</h2>
<!-- backwards compatibility -->
<a id="schemareleaseepisoderesource"></a>
<a id="schema_ReleaseEpisodeResource"></a>
<a id="tocSreleaseepisoderesource"></a>
<a id="tocsreleaseepisoderesource"></a>

```json
{
  "id": 0,
  "seasonNumber": 0,
  "episodeNumber": 0,
  "absoluteEpisodeNumber": 0,
  "title": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|false|none|none|
|seasonNumber|integer(int32)|false|none|none|
|episodeNumber|integer(int32)|false|none|none|
|absoluteEpisodeNumber|integer(int32) \| null|false|none|none|
|title|string \| null|false|none|none|

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
  "airDateRestriction": true,
  "airDateGracePeriod": 0,
  "allowSeasonPackWithoutAllEpisodesAired": true,
  "indexerId": 0,
  "tags": [
    0
  ],
  "excludedTags": [
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
|airDateRestriction|boolean|false|none|none|
|airDateGracePeriod|integer(int32)|false|none|none|
|allowSeasonPackWithoutAllEpisodesAired|boolean|false|none|none|
|indexerId|integer(int32)|false|none|none|
|tags|[integer(int32)]|false|none|none|
|excludedTags|[integer(int32)]|false|none|none|

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
      "resolution": 0
    },
    "revision": {
      "version": 0,
      "real": 0,
      "isRepack": true
    }
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
  "fullSeason": true,
  "sceneSource": true,
  "seasonNumber": 0,
  "seasonNumbers": [
    0
  ],
  "languages": [
    {
      "id": 0,
      "name": "string"
    }
  ],
  "languageWeight": 0,
  "airDate": "string",
  "seriesTitle": "string",
  "episodeNumbers": [
    0
  ],
  "absoluteEpisodeNumbers": [
    0
  ],
  "mappedSeasonNumber": 0,
  "mappedEpisodeNumbers": [
    0
  ],
  "mappedAbsoluteEpisodeNumbers": [
    0
  ],
  "mappedSeriesId": 0,
  "mappedEpisodeInfo": [
    {
      "id": 0,
      "seasonNumber": 0,
      "episodeNumber": 0,
      "absoluteEpisodeNumber": 0,
      "title": "string"
    }
  ],
  "approved": true,
  "temporarilyRejected": true,
  "rejected": true,
  "tvdbId": 0,
  "tvRageId": 0,
  "imdbId": "string",
  "rejections": [
    "string"
  ],
  "publishDate": "1970-01-01T00:00:00Z",
  "commentUrl": "string",
  "downloadUrl": "string",
  "infoUrl": "string",
  "episodeRequested": true,
  "downloadAllowed": true,
  "releaseWeight": 0,
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
                  "hint": "string"
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
  "sceneMapping": {
    "title": "string",
    "seasonNumber": 0,
    "sceneSeasonNumber": 0,
    "sceneOrigin": "string",
    "comment": "string"
  },
  "magnetUrl": "string",
  "infoHash": "string",
  "seeders": 0,
  "leechers": 0,
  "protocol": "unknown",
  "indexerFlags": 0,
  "isDaily": true,
  "isAbsoluteNumbering": true,
  "isPossibleSpecialEpisode": true,
  "special": true,
  "seriesId": 0,
  "episodeId": 0,
  "episodeIds": [
    0
  ],
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
|fullSeason|boolean|false|none|none|
|sceneSource|boolean|false|none|none|
|seasonNumber|integer(int32)|false|none|none|
|seasonNumbers|[integer(int32)]|false|none|none|
|languages|[[Language](#schemalanguage)]|false|none|none|
|languageWeight|integer(int32)|false|none|none|
|airDate|string \| null|false|none|none|
|seriesTitle|string \| null|false|none|none|
|episodeNumbers|[integer(int32)]|false|none|none|
|absoluteEpisodeNumbers|[integer(int32)]|false|none|none|
|mappedSeasonNumber|integer(int32) \| null|false|none|none|
|mappedEpisodeNumbers|[integer(int32)]|false|none|none|
|mappedAbsoluteEpisodeNumbers|[integer(int32)]|false|none|none|
|mappedSeriesId|integer(int32) \| null|false|none|none|
|mappedEpisodeInfo|[[ReleaseEpisodeResource](#schemareleaseepisoderesource)]|false|none|none|
|approved|boolean|false|none|none|
|temporarilyRejected|boolean|false|none|none|
|rejected|boolean|false|none|none|
|tvdbId|integer(int32)|false|none|none|
|tvRageId|integer(int32)|false|none|none|
|imdbId|string \| null|false|none|none|
|rejections|[string]|false|none|none|
|publishDate|string(date-time)|false|none|none|
|commentUrl|string \| null|false|none|none|
|downloadUrl|string \| null|false|none|none|
|infoUrl|string \| null|false|none|none|
|episodeRequested|boolean|false|none|none|
|downloadAllowed|boolean|false|none|none|
|releaseWeight|integer(int32)|false|none|none|
|customFormats|[[CustomFormatResource](#schemacustomformatresource)]|false|none|none|
|customFormatScore|integer(int32)|false|none|none|
|sceneMapping|[AlternateTitleResource](#schemaalternatetitleresource)|false|none|none|
|magnetUrl|string \| null|false|none|none|
|infoHash|string \| null|false|none|none|
|seeders|integer(int32) \| null|false|none|none|
|leechers|integer(int32) \| null|false|none|none|
|protocol|[DownloadProtocol](#schemadownloadprotocol)|false|none|none|
|indexerFlags|integer(int32)|false|none|none|
|isDaily|boolean|false|none|none|
|isAbsoluteNumbering|boolean|false|none|none|
|isPossibleSpecialEpisode|boolean|false|none|none|
|special|boolean|false|none|none|
|seriesId|integer(int32) \| null|false|none|none|
|episodeId|integer(int32) \| null|false|none|none|
|episodeIds|[integer(int32)]|false|none|none|
|downloadClientId|integer(int32) \| null|false|none|none|
|downloadClient|string \| null|false|none|none|
|shouldOverride|boolean \| null|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|protocol|unknown|
|protocol|usenet|
|protocol|torrent|

<h2 id="tocS_ReleaseType">ReleaseType</h2>
<!-- backwards compatibility -->
<a id="schemareleasetype"></a>
<a id="schema_ReleaseType"></a>
<a id="tocSreleasetype"></a>
<a id="tocsreleasetype"></a>

```json
"unknown"
```

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

<h2 id="tocS_RenameEpisodeResource">RenameEpisodeResource</h2>
<!-- backwards compatibility -->
<a id="schemarenameepisoderesource"></a>
<a id="schema_RenameEpisodeResource"></a>
<a id="tocSrenameepisoderesource"></a>
<a id="tocsrenameepisoderesource"></a>

```json
{
  "id": 0,
  "seriesId": 0,
  "seasonNumber": 0,
  "episodeNumbers": [
    0
  ],
  "episodeFileId": 0,
  "existingPath": "string",
  "newPath": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|false|none|none|
|seriesId|integer(int32)|false|none|none|
|seasonNumber|integer(int32)|false|none|none|
|episodeNumbers|[integer(int32)]|false|none|none|
|episodeFileId|integer(int32)|false|none|none|
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
  "totalSpace": 0,
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
|totalSpace|integer(int64) \| null|false|none|none|
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

<h2 id="tocS_SeasonPackUpgradeType">SeasonPackUpgradeType</h2>
<!-- backwards compatibility -->
<a id="schemaseasonpackupgradetype"></a>
<a id="schema_SeasonPackUpgradeType"></a>
<a id="tocSseasonpackupgradetype"></a>
<a id="tocsseasonpackupgradetype"></a>

```json
"all"
```

<h2 id="tocS_SeasonPassResource">SeasonPassResource</h2>
<!-- backwards compatibility -->
<a id="schemaseasonpassresource"></a>
<a id="schema_SeasonPassResource"></a>
<a id="tocSseasonpassresource"></a>
<a id="tocsseasonpassresource"></a>

```json
{
  "series": [
    {
      "id": 0,
      "monitored": true,
      "seasons": [
        {
          "seasonNumber": 0,
          "monitored": true,
          "title": "string",
          "statistics": {
            "nextAiring": "1970-01-01T00:00:00Z",
            "previousAiring": "1970-01-01T00:00:00Z",
            "episodeFileCount": 0,
            "episodeCount": 0,
            "totalEpisodeCount": 0,
            "sizeOnDisk": 0,
            "releaseGroups": [
              "string"
            ],
            "percentOfEpisodes": 0
          },
          "images": [
            {
              "coverType": "unknown",
              "url": "string",
              "remoteUrl": "string"
            }
          ]
        }
      ]
    }
  ],
  "monitoringOptions": {
    "ignoreEpisodesWithFiles": true,
    "ignoreEpisodesWithoutFiles": true,
    "monitor": "unknown"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|series|[[SeasonPassSeriesResource](#schemaseasonpassseriesresource)]|false|none|none|
|monitoringOptions|[MonitoringOptions](#schemamonitoringoptions)|false|none|none|

<h2 id="tocS_SeasonPassSeriesResource">SeasonPassSeriesResource</h2>
<!-- backwards compatibility -->
<a id="schemaseasonpassseriesresource"></a>
<a id="schema_SeasonPassSeriesResource"></a>
<a id="tocSseasonpassseriesresource"></a>
<a id="tocsseasonpassseriesresource"></a>

```json
{
  "id": 0,
  "monitored": true,
  "seasons": [
    {
      "seasonNumber": 0,
      "monitored": true,
      "title": "string",
      "statistics": {
        "nextAiring": "1970-01-01T00:00:00Z",
        "previousAiring": "1970-01-01T00:00:00Z",
        "episodeFileCount": 0,
        "episodeCount": 0,
        "totalEpisodeCount": 0,
        "sizeOnDisk": 0,
        "releaseGroups": [
          "string"
        ],
        "percentOfEpisodes": 0
      },
      "images": [
        {
          "coverType": "unknown",
          "url": "string",
          "remoteUrl": "string"
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
|monitored|boolean \| null|false|none|none|
|seasons|[[SeasonResource](#schemaseasonresource)]|false|none|none|

<h2 id="tocS_SeasonResource">SeasonResource</h2>
<!-- backwards compatibility -->
<a id="schemaseasonresource"></a>
<a id="schema_SeasonResource"></a>
<a id="tocSseasonresource"></a>
<a id="tocsseasonresource"></a>

```json
{
  "seasonNumber": 0,
  "monitored": true,
  "title": "string",
  "statistics": {
    "nextAiring": "1970-01-01T00:00:00Z",
    "previousAiring": "1970-01-01T00:00:00Z",
    "episodeFileCount": 0,
    "episodeCount": 0,
    "totalEpisodeCount": 0,
    "sizeOnDisk": 0,
    "releaseGroups": [
      "string"
    ],
    "percentOfEpisodes": 0
  },
  "images": [
    {
      "coverType": "unknown",
      "url": "string",
      "remoteUrl": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|seasonNumber|integer(int32)|false|none|none|
|monitored|boolean|false|none|none|
|title|string \| null|false|none|none|
|statistics|[SeasonStatisticsResource](#schemaseasonstatisticsresource)|false|none|none|
|images|[[MediaCover](#schemamediacover)]|false|none|none|

<h2 id="tocS_SeasonStatisticsResource">SeasonStatisticsResource</h2>
<!-- backwards compatibility -->
<a id="schemaseasonstatisticsresource"></a>
<a id="schema_SeasonStatisticsResource"></a>
<a id="tocSseasonstatisticsresource"></a>
<a id="tocsseasonstatisticsresource"></a>

```json
{
  "nextAiring": "1970-01-01T00:00:00Z",
  "previousAiring": "1970-01-01T00:00:00Z",
  "episodeFileCount": 0,
  "episodeCount": 0,
  "totalEpisodeCount": 0,
  "sizeOnDisk": 0,
  "releaseGroups": [
    "string"
  ],
  "percentOfEpisodes": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextAiring|string(date-time) \| null|false|none|none|
|previousAiring|string(date-time) \| null|false|none|none|
|episodeFileCount|integer(int32)|false|none|none|
|episodeCount|integer(int32)|false|none|none|
|totalEpisodeCount|integer(int32)|false|none|none|
|sizeOnDisk|integer(int64)|false|none|none|
|releaseGroups|[string]|false|none|none|
|percentOfEpisodes|number(double)|false|read-only|none|

<h2 id="tocS_SeasonTypeResource">SeasonTypeResource</h2>
<!-- backwards compatibility -->
<a id="schemaseasontyperesource"></a>
<a id="schema_SeasonTypeResource"></a>
<a id="tocSseasontyperesource"></a>
<a id="tocsseasontyperesource"></a>

```json
{
  "name": "string",
  "type": "string",
  "seasonNumbers": [
    0
  ],
  "episodeCount": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string \| null|false|none|none|
|type|string \| null|false|none|none|
|seasonNumbers|[integer(int32)]|false|none|none|
|episodeCount|integer(int32)|false|none|none|

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
  "hint": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|value|integer(int32)|false|none|none|
|name|string \| null|false|none|none|
|order|integer(int32)|false|none|none|
|hint|string \| null|false|none|none|

<h2 id="tocS_SeriesEditorResource">SeriesEditorResource</h2>
<!-- backwards compatibility -->
<a id="schemaserieseditorresource"></a>
<a id="schema_SeriesEditorResource"></a>
<a id="tocSserieseditorresource"></a>
<a id="tocsserieseditorresource"></a>

```json
{
  "seriesIds": [
    0
  ],
  "monitored": true,
  "monitorNewItems": "all",
  "qualityProfileId": 0,
  "language": {
    "id": 0,
    "name": "string"
  },
  "seriesType": "standard",
  "seasonFolder": true,
  "rootFolderPath": "string",
  "tags": [
    0
  ],
  "applyTags": "add",
  "moveFiles": true,
  "deleteFiles": true,
  "addImportListExclusion": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|seriesIds|[integer(int32)]|false|none|none|
|monitored|boolean \| null|false|none|none|
|monitorNewItems|[NewItemMonitorTypes](#schemanewitemmonitortypes)|false|none|none|
|qualityProfileId|integer(int32) \| null|false|none|none|
|language|[Language](#schemalanguage)|false|none|none|
|seriesType|[SeriesTypes](#schemaseriestypes)|false|none|none|
|seasonFolder|boolean \| null|false|none|none|
|rootFolderPath|string \| null|false|none|none|
|tags|[integer(int32)]|false|none|none|
|applyTags|[ApplyTags](#schemaapplytags)|false|none|none|
|moveFiles|boolean|false|none|none|
|deleteFiles|boolean|false|none|none|
|addImportListExclusion|boolean|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|monitorNewItems|all|
|monitorNewItems|none|
|seriesType|standard|
|seriesType|daily|
|seriesType|anime|
|applyTags|add|
|applyTags|remove|
|applyTags|replace|

<h2 id="tocS_SeriesFolderResource">SeriesFolderResource</h2>
<!-- backwards compatibility -->
<a id="schemaseriesfolderresource"></a>
<a id="schema_SeriesFolderResource"></a>
<a id="tocSseriesfolderresource"></a>
<a id="tocsseriesfolderresource"></a>

```json
{
  "language": {
    "id": 0,
    "name": "string"
  },
  "folder": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|language|[Language](#schemalanguage)|false|none|none|
|folder|string \| null|false|none|none|

<h2 id="tocS_SeriesResource">SeriesResource</h2>
<!-- backwards compatibility -->
<a id="schemaseriesresource"></a>
<a id="schema_SeriesResource"></a>
<a id="tocSseriesresource"></a>
<a id="tocsseriesresource"></a>

```json
{
  "id": 0,
  "title": "string",
  "alternateTitles": [
    {
      "title": "string",
      "seasonNumber": 0,
      "sceneSeasonNumber": 0,
      "sceneOrigin": "string",
      "comment": "string"
    }
  ],
  "sortTitle": "string",
  "status": "continuing",
  "ended": true,
  "profileName": "string",
  "overview": "string",
  "nextAiring": "1970-01-01T00:00:00Z",
  "previousAiring": "1970-01-01T00:00:00Z",
  "network": "string",
  "airTime": "string",
  "images": [
    {
      "coverType": "unknown",
      "url": "string",
      "remoteUrl": "string"
    }
  ],
  "language": {
    "id": 0,
    "name": "string"
  },
  "originalLanguage": {
    "id": 0,
    "name": "string"
  },
  "remotePoster": "string",
  "seasonType": "string",
  "seasons": [
    {
      "seasonNumber": 0,
      "monitored": true,
      "title": "string",
      "statistics": {
        "nextAiring": "1970-01-01T00:00:00Z",
        "previousAiring": "1970-01-01T00:00:00Z",
        "episodeFileCount": 0,
        "episodeCount": 0,
        "totalEpisodeCount": 0,
        "sizeOnDisk": 0,
        "releaseGroups": [
          "string"
        ],
        "percentOfEpisodes": 0
      },
      "images": [
        {
          "coverType": "unknown",
          "url": "string",
          "remoteUrl": "string"
        }
      ]
    }
  ],
  "seasonTypes": [
    {
      "name": "string",
      "type": "string",
      "seasonNumbers": [
        0
      ],
      "episodeCount": 0
    }
  ],
  "translations": [
    {
      "language": {
        "id": 0,
        "name": "string"
      },
      "title": "string",
      "overview": "string"
    }
  ],
  "year": 0,
  "path": "string",
  "pendingPath": "string",
  "qualityProfileId": 0,
  "seasonFolder": true,
  "monitored": true,
  "monitorNewItems": "all",
  "useSceneNumbering": true,
  "runtime": 0,
  "tvdbId": 0,
  "tvRageId": 0,
  "tvMazeId": 0,
  "tmdbId": 0,
  "firstAired": "1970-01-01T00:00:00Z",
  "lastAired": "1970-01-01T00:00:00Z",
  "seriesType": "standard",
  "cleanTitle": "string",
  "originalTitle": "string",
  "cleanOriginalTitle": "string",
  "imdbId": "string",
  "titleSlug": "string",
  "rootFolderPath": "string",
  "folder": "string",
  "folders": [
    {
      "language": {
        "id": 0,
        "name": "string"
      },
      "folder": "string"
    }
  ],
  "certification": "string",
  "genres": [
    "string"
  ],
  "tags": [
    0
  ],
  "added": "1970-01-01T00:00:00Z",
  "addOptions": {
    "ignoreEpisodesWithFiles": true,
    "ignoreEpisodesWithoutFiles": true,
    "monitor": "unknown",
    "searchForMissingEpisodes": true,
    "searchForCutoffUnmetEpisodes": true
  },
  "ratings": {
    "votes": 0,
    "value": 0
  },
  "statistics": {
    "seasonCount": 0,
    "episodeFileCount": 0,
    "episodeCount": 0,
    "totalEpisodeCount": 0,
    "sizeOnDisk": 0,
    "releaseGroups": [
      "string"
    ],
    "percentOfEpisodes": 0
  },
  "episodesChanged": true,
  "languageProfileId": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|false|none|none|
|title|string \| null|false|none|none|
|alternateTitles|[[AlternateTitleResource](#schemaalternatetitleresource)]|false|none|none|
|sortTitle|string \| null|false|none|none|
|status|[SeriesStatusType](#schemaseriesstatustype)|false|none|none|
|ended|boolean|false|read-only|none|
|profileName|string \| null|false|none|none|
|overview|string \| null|false|none|none|
|nextAiring|string(date-time) \| null|false|none|none|
|previousAiring|string(date-time) \| null|false|none|none|
|network|string \| null|false|none|none|
|airTime|string \| null|false|none|none|
|images|[[MediaCover](#schemamediacover)]|false|none|none|
|language|[Language](#schemalanguage)|false|none|none|
|originalLanguage|[Language](#schemalanguage)|false|none|none|
|remotePoster|string \| null|false|none|none|
|seasonType|string \| null|false|none|none|
|seasons|[[SeasonResource](#schemaseasonresource)]|false|none|none|
|seasonTypes|[[SeasonTypeResource](#schemaseasontyperesource)]|false|none|none|
|translations|[[SeriesTranslationResource](#schemaseriestranslationresource)]|false|none|none|
|year|integer(int32)|false|none|none|
|path|string \| null|false|none|none|
|pendingPath|string \| null|false|none|none|
|qualityProfileId|integer(int32)|false|none|none|
|seasonFolder|boolean|false|none|none|
|monitored|boolean|false|none|none|
|monitorNewItems|[NewItemMonitorTypes](#schemanewitemmonitortypes)|false|none|none|
|useSceneNumbering|boolean|false|none|none|
|runtime|integer(int32)|false|none|none|
|tvdbId|integer(int32)|false|none|none|
|tvRageId|integer(int32)|false|none|none|
|tvMazeId|integer(int32)|false|none|none|
|tmdbId|integer(int32)|false|none|none|
|firstAired|string(date-time) \| null|false|none|none|
|lastAired|string(date-time) \| null|false|none|none|
|seriesType|[SeriesTypes](#schemaseriestypes)|false|none|none|
|cleanTitle|string \| null|false|none|none|
|originalTitle|string \| null|false|none|none|
|cleanOriginalTitle|string \| null|false|none|none|
|imdbId|string \| null|false|none|none|
|titleSlug|string \| null|false|none|none|
|rootFolderPath|string \| null|false|none|none|
|folder|string \| null|false|none|none|
|folders|[[SeriesFolderResource](#schemaseriesfolderresource)]|false|none|none|
|certification|string \| null|false|none|none|
|genres|[string]|false|none|none|
|tags|[integer(int32)]|false|none|none|
|added|string(date-time)|false|none|none|
|addOptions|[AddSeriesOptions](#schemaaddseriesoptions)|false|none|none|
|ratings|[Ratings](#schemaratings)|false|none|none|
|statistics|[SeriesStatisticsResource](#schemaseriesstatisticsresource)|false|none|none|
|episodesChanged|boolean \| null|false|none|none|
|languageProfileId|integer(int32)|false|read-only|**Deprecated.**|

#### Enumerated Values

|Property|Value|
|---|---|
|status|continuing|
|status|ended|
|status|upcoming|
|status|deleted|
|monitorNewItems|all|
|monitorNewItems|none|
|seriesType|standard|
|seriesType|daily|
|seriesType|anime|

<h2 id="tocS_SeriesStatisticsResource">SeriesStatisticsResource</h2>
<!-- backwards compatibility -->
<a id="schemaseriesstatisticsresource"></a>
<a id="schema_SeriesStatisticsResource"></a>
<a id="tocSseriesstatisticsresource"></a>
<a id="tocsseriesstatisticsresource"></a>

```json
{
  "seasonCount": 0,
  "episodeFileCount": 0,
  "episodeCount": 0,
  "totalEpisodeCount": 0,
  "sizeOnDisk": 0,
  "releaseGroups": [
    "string"
  ],
  "percentOfEpisodes": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|seasonCount|integer(int32)|false|none|none|
|episodeFileCount|integer(int32)|false|none|none|
|episodeCount|integer(int32)|false|none|none|
|totalEpisodeCount|integer(int32)|false|none|none|
|sizeOnDisk|integer(int64)|false|none|none|
|releaseGroups|[string]|false|none|none|
|percentOfEpisodes|number(double)|false|read-only|none|

<h2 id="tocS_SeriesStatusType">SeriesStatusType</h2>
<!-- backwards compatibility -->
<a id="schemaseriesstatustype"></a>
<a id="schema_SeriesStatusType"></a>
<a id="tocSseriesstatustype"></a>
<a id="tocsseriesstatustype"></a>

```json
"continuing"
```

<h2 id="tocS_SeriesTitleInfo">SeriesTitleInfo</h2>
<!-- backwards compatibility -->
<a id="schemaseriestitleinfo"></a>
<a id="schema_SeriesTitleInfo"></a>
<a id="tocSseriestitleinfo"></a>
<a id="tocsseriestitleinfo"></a>

```json
{
  "title": "string",
  "titleWithoutYear": "string",
  "year": 0,
  "allTitles": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|title|string \| null|false|none|none|
|titleWithoutYear|string \| null|false|none|none|
|year|integer(int32)|false|none|none|
|allTitles|[string]|false|none|none|

<h2 id="tocS_SeriesTranslationResource">SeriesTranslationResource</h2>
<!-- backwards compatibility -->
<a id="schemaseriestranslationresource"></a>
<a id="schema_SeriesTranslationResource"></a>
<a id="tocSseriestranslationresource"></a>
<a id="tocsseriestranslationresource"></a>

```json
{
  "language": {
    "id": 0,
    "name": "string"
  },
  "title": "string",
  "overview": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|language|[Language](#schemalanguage)|false|none|none|
|title|string \| null|false|none|none|
|overview|string \| null|false|none|none|

<h2 id="tocS_SeriesTypes">SeriesTypes</h2>
<!-- backwards compatibility -->
<a id="schemaseriestypes"></a>
<a id="schema_SeriesTypes"></a>
<a id="tocSseriestypes"></a>
<a id="tocsseriestypes"></a>

```json
"standard"
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
  "authentication": "none",
  "sqliteVersion": "string",
  "migrationVersion": 0,
  "urlBase": "string",
  "runtimeVersion": "string",
  "runtimeName": "string",
  "startTime": "1970-01-01T00:00:00Z",
  "packageVersion": "string",
  "packageAuthor": "string",
  "packageUpdateMechanism": "builtIn",
  "packageUpdateMechanismMessage": "string",
  "databaseVersion": "string",
  "databaseType": "sqLite"
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
|authentication|[AuthenticationType](#schemaauthenticationtype)|false|none|none|
|sqliteVersion|string \| null|false|none|none|
|migrationVersion|integer(int32)|false|none|none|
|urlBase|string \| null|false|none|none|
|runtimeVersion|string \| null|false|none|none|
|runtimeName|string \| null|false|none|none|
|startTime|string(date-time)|false|none|none|
|packageVersion|string \| null|false|none|none|
|packageAuthor|string \| null|false|none|none|
|packageUpdateMechanism|[UpdateMechanism](#schemaupdatemechanism)|false|none|none|
|packageUpdateMechanismMessage|string \| null|false|none|none|
|databaseVersion|string \| null|false|none|none|
|databaseType|[DatabaseType](#schemadatabasetype)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|mode|console|
|mode|service|
|mode|tray|
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
|databaseType|sqLite|
|databaseType|postgreSQL|

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
  "restrictionIds": [
    0
  ],
  "excludedReleaseProfileIds": [
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
  "seriesIds": [
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
|restrictionIds|[integer(int32)]|false|none|none|
|excludedReleaseProfileIds|[integer(int32)]|false|none|none|
|indexerIds|[integer(int32)]|false|none|none|
|downloadClientIds|[integer(int32)]|false|none|none|
|autoTagIds|[integer(int32)]|false|none|none|
|seriesIds|[integer(int32)]|false|none|none|

<h2 id="tocS_TagExistingType">TagExistingType</h2>
<!-- backwards compatibility -->
<a id="schematagexistingtype"></a>
<a id="schema_TagExistingType"></a>
<a id="tocStagexistingtype"></a>
<a id="tocstagexistingtype"></a>

```json
"none"
```

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
  "shortDateFormat": "string",
  "longDateFormat": "string",
  "timeFormat": "string",
  "timeZone": "string",
  "showRelativeDates": true,
  "enableColorImpairedMode": true,
  "theme": "string",
  "uiLanguage": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|false|none|none|
|firstDayOfWeek|integer(int32)|false|none|none|
|calendarWeekColumnHeader|string \| null|false|none|none|
|shortDateFormat|string \| null|false|none|none|
|longDateFormat|string \| null|false|none|none|
|timeFormat|string \| null|false|none|none|
|timeZone|string \| null|false|none|none|
|showRelativeDates|boolean|false|none|none|
|enableColorImpairedMode|boolean|false|none|none|
|theme|string \| null|false|none|none|
|uiLanguage|integer(int32)|false|none|none|

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
