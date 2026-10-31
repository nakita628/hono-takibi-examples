<h1 id="prowlarr">Prowlarr v1.0.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Prowlarr API docs

Base URLs:

* <a href="http://localhost:9696">http://localhost:9696</a>

License: <a href="https://github.com/Prowlarr/Prowlarr/blob/develop/LICENSE">GPL-3.0</a>

# Authentication

* API Key (X-Api-Key)
    - Parameter Name: **X-Api-Key**, in: header. Apikey passed as header

* API Key (apikey)
    - Parameter Name: **apikey**, in: query. Apikey passed as query parameter

<h1 id="prowlarr-apiinfo">ApiInfo</h1>

## get/api

> Code samples

```bash
curl http://localhost:9696/api \
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

<h1 id="prowlarr-application">Application</h1>

## get/api/v1/applications/{id}

> Code samples

```bash
curl http://localhost:9696/api/v1/applications/0 \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /api/v1/applications/{id}`

<h3 id="getapiv1applicationsid-parameters">Parameters</h3>

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
          "parentValue": 0
        }
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
  "syncLevel": "disabled",
  "testCommand": "string"
}
```

<h3 id="getapiv1applicationsid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[ApplicationResource](#schemaapplicationresource)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## put/api/v1/applications/{id}

> Code samples

```bash
curl http://localhost:9696/api/v1/applications/string \
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
            "parentValue": 0
          }
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
    "syncLevel": "disabled",
    "testCommand": "string"
  }'
```

`PUT /api/v1/applications/{id}`

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
          "parentValue": 0
        }
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
  "syncLevel": "disabled",
  "testCommand": "string"
}
```

<h3 id="putapiv1applicationsid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|forceSave|query|boolean|false|none|
|id|path|string|true|none|
|body|body|[ApplicationResource](#schemaapplicationresource)|false|none|
|» id|body|integer(int32)|false|none|
|» name|body|string \| null|false|none|
|» fields|body|[[Field](#schemafield)]|false|none|
|» implementationName|body|string \| null|false|none|
|» implementation|body|string \| null|false|none|
|» configContract|body|string \| null|false|none|
|» infoLink|body|string \| null|false|none|
|» message|body|[ProviderMessage](#schemaprovidermessage)|false|none|
|» tags|body|[integer(int32)]|false|none|
|» presets|body|[[ApplicationResource](#schemaapplicationresource)]|false|none|
|» syncLevel|body|[ApplicationSyncLevel](#schemaapplicationsynclevel)|false|none|
|» testCommand|body|string \| null|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» syncLevel|disabled|
|» syncLevel|addOnly|
|» syncLevel|fullSync|

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
          "parentValue": 0
        }
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
  "syncLevel": "disabled",
  "testCommand": "string"
}
```

<h3 id="putapiv1applicationsid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[ApplicationResource](#schemaapplicationresource)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## delete/api/v1/applications/{id}

> Code samples

```bash
curl http://localhost:9696/api/v1/applications/0 \
  -X DELETE \
  -H "X-Api-Key: ${API_KEY}"
```

`DELETE /api/v1/applications/{id}`

<h3 id="deleteapiv1applicationsid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|none|

<h3 id="deleteapiv1applicationsid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## get/api/v1/applications

> Code samples

```bash
curl http://localhost:9696/api/v1/applications \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /api/v1/applications`

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
            "parentValue": 0
          }
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
    "syncLevel": "disabled",
    "testCommand": "string"
  }
]
```

<h3 id="getapiv1applications-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="getapiv1applications-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[ApplicationResource](#schemaapplicationresource)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## post/api/v1/applications

> Code samples

```bash
curl http://localhost:9696/api/v1/applications \
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
            "parentValue": 0
          }
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
    "syncLevel": "disabled",
    "testCommand": "string"
  }'
```

`POST /api/v1/applications`

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
          "parentValue": 0
        }
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
  "syncLevel": "disabled",
  "testCommand": "string"
}
```

<h3 id="postapiv1applications-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|forceSave|query|boolean|false|none|
|body|body|[ApplicationResource](#schemaapplicationresource)|false|none|
|» id|body|integer(int32)|false|none|
|» name|body|string \| null|false|none|
|» fields|body|[[Field](#schemafield)]|false|none|
|» implementationName|body|string \| null|false|none|
|» implementation|body|string \| null|false|none|
|» configContract|body|string \| null|false|none|
|» infoLink|body|string \| null|false|none|
|» message|body|[ProviderMessage](#schemaprovidermessage)|false|none|
|» tags|body|[integer(int32)]|false|none|
|» presets|body|[[ApplicationResource](#schemaapplicationresource)]|false|none|
|» syncLevel|body|[ApplicationSyncLevel](#schemaapplicationsynclevel)|false|none|
|» testCommand|body|string \| null|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» syncLevel|disabled|
|» syncLevel|addOnly|
|» syncLevel|fullSync|

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
          "parentValue": 0
        }
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
  "syncLevel": "disabled",
  "testCommand": "string"
}
```

<h3 id="postapiv1applications-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[ApplicationResource](#schemaapplicationresource)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## put/api/v1/applications/bulk

> Code samples

```bash
curl http://localhost:9696/api/v1/applications/bulk \
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
    "syncLevel": "disabled"
  }'
```

`PUT /api/v1/applications/bulk`

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
  "syncLevel": "disabled"
}
```

<h3 id="putapiv1applicationsbulk-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[ApplicationBulkResource](#schemaapplicationbulkresource)|false|none|
|» ids|body|[integer(int32)]|false|none|
|» tags|body|[integer(int32)]|false|none|
|» applyTags|body|[ApplyTags](#schemaapplytags)|false|none|
|» syncLevel|body|[ApplicationSyncLevel](#schemaapplicationsynclevel)|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» applyTags|add|
|» applyTags|remove|
|» applyTags|replace|
|» syncLevel|disabled|
|» syncLevel|addOnly|
|» syncLevel|fullSync|

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
          "parentValue": 0
        }
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
  "syncLevel": "disabled",
  "testCommand": "string"
}
```

<h3 id="putapiv1applicationsbulk-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[ApplicationResource](#schemaapplicationresource)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## delete/api/v1/applications/bulk

> Code samples

```bash
curl http://localhost:9696/api/v1/applications/bulk \
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
    "syncLevel": "disabled"
  }'
```

`DELETE /api/v1/applications/bulk`

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
  "syncLevel": "disabled"
}
```

<h3 id="deleteapiv1applicationsbulk-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[ApplicationBulkResource](#schemaapplicationbulkresource)|false|none|
|» ids|body|[integer(int32)]|false|none|
|» tags|body|[integer(int32)]|false|none|
|» applyTags|body|[ApplyTags](#schemaapplytags)|false|none|
|» syncLevel|body|[ApplicationSyncLevel](#schemaapplicationsynclevel)|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» applyTags|add|
|» applyTags|remove|
|» applyTags|replace|
|» syncLevel|disabled|
|» syncLevel|addOnly|
|» syncLevel|fullSync|

<h3 id="deleteapiv1applicationsbulk-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## get/api/v1/applications/schema

> Code samples

```bash
curl http://localhost:9696/api/v1/applications/schema \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /api/v1/applications/schema`

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
            "parentValue": 0
          }
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
    "syncLevel": "disabled",
    "testCommand": "string"
  }
]
```

<h3 id="getapiv1applicationsschema-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="getapiv1applicationsschema-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[ApplicationResource](#schemaapplicationresource)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## post/api/v1/applications/test

> Code samples

```bash
curl http://localhost:9696/api/v1/applications/test \
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
            "parentValue": 0
          }
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
    "syncLevel": "disabled",
    "testCommand": "string"
  }'
```

`POST /api/v1/applications/test`

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
          "parentValue": 0
        }
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
  "syncLevel": "disabled",
  "testCommand": "string"
}
```

<h3 id="postapiv1applicationstest-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|forceTest|query|boolean|false|none|
|body|body|[ApplicationResource](#schemaapplicationresource)|false|none|
|» id|body|integer(int32)|false|none|
|» name|body|string \| null|false|none|
|» fields|body|[[Field](#schemafield)]|false|none|
|» implementationName|body|string \| null|false|none|
|» implementation|body|string \| null|false|none|
|» configContract|body|string \| null|false|none|
|» infoLink|body|string \| null|false|none|
|» message|body|[ProviderMessage](#schemaprovidermessage)|false|none|
|» tags|body|[integer(int32)]|false|none|
|» presets|body|[[ApplicationResource](#schemaapplicationresource)]|false|none|
|» syncLevel|body|[ApplicationSyncLevel](#schemaapplicationsynclevel)|false|none|
|» testCommand|body|string \| null|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» syncLevel|disabled|
|» syncLevel|addOnly|
|» syncLevel|fullSync|

<h3 id="postapiv1applicationstest-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## post/api/v1/applications/testall

> Code samples

```bash
curl http://localhost:9696/api/v1/applications/testall \
  -X POST \
  -H "X-Api-Key: ${API_KEY}"
```

`POST /api/v1/applications/testall`

<h3 id="postapiv1applicationstestall-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## post/api/v1/applications/action/{name}

> Code samples

```bash
curl http://localhost:9696/api/v1/applications/action/string \
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
            "parentValue": 0
          }
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
    "syncLevel": "disabled",
    "testCommand": "string"
  }'
```

`POST /api/v1/applications/action/{name}`

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
          "parentValue": 0
        }
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
  "syncLevel": "disabled",
  "testCommand": "string"
}
```

<h3 id="postapiv1applicationsactionname-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|none|
|body|body|[ApplicationResource](#schemaapplicationresource)|false|none|
|» id|body|integer(int32)|false|none|
|» name|body|string \| null|false|none|
|» fields|body|[[Field](#schemafield)]|false|none|
|» implementationName|body|string \| null|false|none|
|» implementation|body|string \| null|false|none|
|» configContract|body|string \| null|false|none|
|» infoLink|body|string \| null|false|none|
|» message|body|[ProviderMessage](#schemaprovidermessage)|false|none|
|» tags|body|[integer(int32)]|false|none|
|» presets|body|[[ApplicationResource](#schemaapplicationresource)]|false|none|
|» syncLevel|body|[ApplicationSyncLevel](#schemaapplicationsynclevel)|false|none|
|» testCommand|body|string \| null|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» syncLevel|disabled|
|» syncLevel|addOnly|
|» syncLevel|fullSync|

<h3 id="postapiv1applicationsactionname-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

<h1 id="prowlarr-appprofile">AppProfile</h1>

## get/api/v1/appprofile

> Code samples

```bash
curl http://localhost:9696/api/v1/appprofile \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /api/v1/appprofile`

> Example responses

> 200 Response

```json
[
  {
    "id": 0,
    "name": "string",
    "enableRss": true,
    "enableAutomaticSearch": true,
    "enableInteractiveSearch": true,
    "minimumSeeders": 0
  }
]
```

<h3 id="getapiv1appprofile-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="getapiv1appprofile-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[AppProfileResource](#schemaappprofileresource)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## post/api/v1/appprofile

> Code samples

```bash
curl http://localhost:9696/api/v1/appprofile \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}" \
  -d '{
    "id": 0,
    "name": "string",
    "enableRss": true,
    "enableAutomaticSearch": true,
    "enableInteractiveSearch": true,
    "minimumSeeders": 0
  }'
```

`POST /api/v1/appprofile`

> Body parameter

```json
{
  "id": 0,
  "name": "string",
  "enableRss": true,
  "enableAutomaticSearch": true,
  "enableInteractiveSearch": true,
  "minimumSeeders": 0
}
```

<h3 id="postapiv1appprofile-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[AppProfileResource](#schemaappprofileresource)|false|none|
|» id|body|integer(int32)|false|none|
|» name|body|string \| null|false|none|
|» enableRss|body|boolean|false|none|
|» enableAutomaticSearch|body|boolean|false|none|
|» enableInteractiveSearch|body|boolean|false|none|
|» minimumSeeders|body|integer(int32)|false|none|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "name": "string",
  "enableRss": true,
  "enableAutomaticSearch": true,
  "enableInteractiveSearch": true,
  "minimumSeeders": 0
}
```

<h3 id="postapiv1appprofile-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[AppProfileResource](#schemaappprofileresource)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## get/api/v1/appprofile/{id}

> Code samples

```bash
curl http://localhost:9696/api/v1/appprofile/0 \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /api/v1/appprofile/{id}`

<h3 id="getapiv1appprofileid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|none|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "name": "string",
  "enableRss": true,
  "enableAutomaticSearch": true,
  "enableInteractiveSearch": true,
  "minimumSeeders": 0
}
```

> 404 Response

```json
{
  "property1": "string",
  "property2": "string"
}
```

<h3 id="getapiv1appprofileid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[AppProfileResource](#schemaappprofileresource)|
|404|Not Found|Not Found|Inline|
|500|Internal Server Error|Internal Server Error|None|

<h3 id="getapiv1appprofileid-responseschema">Response Schema</h3>

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## put/api/v1/appprofile/{id}

> Code samples

```bash
curl http://localhost:9696/api/v1/appprofile/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}" \
  -d '{
    "id": 0,
    "name": "string",
    "enableRss": true,
    "enableAutomaticSearch": true,
    "enableInteractiveSearch": true,
    "minimumSeeders": 0
  }'
```

`PUT /api/v1/appprofile/{id}`

> Body parameter

```json
{
  "id": 0,
  "name": "string",
  "enableRss": true,
  "enableAutomaticSearch": true,
  "enableInteractiveSearch": true,
  "minimumSeeders": 0
}
```

<h3 id="putapiv1appprofileid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|body|body|[AppProfileResource](#schemaappprofileresource)|false|none|
|» id|body|integer(int32)|false|none|
|» name|body|string \| null|false|none|
|» enableRss|body|boolean|false|none|
|» enableAutomaticSearch|body|boolean|false|none|
|» enableInteractiveSearch|body|boolean|false|none|
|» minimumSeeders|body|integer(int32)|false|none|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "name": "string",
  "enableRss": true,
  "enableAutomaticSearch": true,
  "enableInteractiveSearch": true,
  "minimumSeeders": 0
}
```

<h3 id="putapiv1appprofileid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[AppProfileResource](#schemaappprofileresource)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## delete/api/v1/appprofile/{id}

> Code samples

```bash
curl http://localhost:9696/api/v1/appprofile/0 \
  -X DELETE \
  -H "X-Api-Key: ${API_KEY}"
```

`DELETE /api/v1/appprofile/{id}`

<h3 id="deleteapiv1appprofileid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|none|

<h3 id="deleteapiv1appprofileid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## get/api/v1/appprofile/schema

> Code samples

```bash
curl http://localhost:9696/api/v1/appprofile/schema \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /api/v1/appprofile/schema`

> Example responses

> 200 Response

```json
{
  "id": 0,
  "name": "string",
  "enableRss": true,
  "enableAutomaticSearch": true,
  "enableInteractiveSearch": true,
  "minimumSeeders": 0
}
```

<h3 id="getapiv1appprofileschema-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[AppProfileResource](#schemaappprofileresource)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

<h1 id="prowlarr-staticresource">StaticResource</h1>

## get/login

> Code samples

```bash
curl http://localhost:9696/login \
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

## get/content/{path}

> Code samples

```bash
curl http://localhost:9696/content/string \
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
curl http://localhost:9696/ \
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
curl http://localhost:9696/string \
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

<h1 id="prowlarr-authentication">Authentication</h1>

## post/login

> Code samples

```bash
curl http://localhost:9696/login \
  -X POST \
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

<h3 id="postlogin-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## get/logout

> Code samples

```bash
curl http://localhost:9696/logout \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /logout`

<h3 id="getlogout-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

<h1 id="prowlarr-backup">Backup</h1>

## get/api/v1/system/backup

> Code samples

```bash
curl http://localhost:9696/api/v1/system/backup \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /api/v1/system/backup`

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

<h3 id="getapiv1systembackup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="getapiv1systembackup-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[BackupResource](#schemabackupresource)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## delete/api/v1/system/backup/{id}

> Code samples

```bash
curl http://localhost:9696/api/v1/system/backup/0 \
  -X DELETE \
  -H "X-Api-Key: ${API_KEY}"
```

`DELETE /api/v1/system/backup/{id}`

<h3 id="deleteapiv1systembackupid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|none|

<h3 id="deleteapiv1systembackupid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## post/api/v1/system/backup/restore/{id}

> Code samples

```bash
curl http://localhost:9696/api/v1/system/backup/restore/0 \
  -X POST \
  -H "X-Api-Key: ${API_KEY}"
```

`POST /api/v1/system/backup/restore/{id}`

<h3 id="postapiv1systembackuprestoreid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|none|

<h3 id="postapiv1systembackuprestoreid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## post/api/v1/system/backup/restore/upload

> Code samples

```bash
curl http://localhost:9696/api/v1/system/backup/restore/upload \
  -X POST \
  -H "X-Api-Key: ${API_KEY}"
```

`POST /api/v1/system/backup/restore/upload`

<h3 id="postapiv1systembackuprestoreupload-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

<h1 id="prowlarr-command">Command</h1>

## get/api/v1/command/{id}

> Code samples

```bash
curl http://localhost:9696/api/v1/command/0 \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /api/v1/command/{id}`

<h3 id="getapiv1commandid-parameters">Parameters</h3>

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
    "name": "string",
    "lastExecutionTime": "1970-01-01T00:00:00Z",
    "lastStartTime": "1970-01-01T00:00:00Z",
    "trigger": "unspecified",
    "suppressMessages": true,
    "clientUserAgent": "string"
  },
  "priority": "normal",
  "status": "queued",
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

<h3 id="getapiv1commandid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[CommandResource](#schemacommandresource)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## delete/api/v1/command/{id}

> Code samples

```bash
curl http://localhost:9696/api/v1/command/0 \
  -X DELETE \
  -H "X-Api-Key: ${API_KEY}"
```

`DELETE /api/v1/command/{id}`

<h3 id="deleteapiv1commandid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|none|

<h3 id="deleteapiv1commandid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## get/api/v1/command

> Code samples

```bash
curl http://localhost:9696/api/v1/command \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /api/v1/command`

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
      "name": "string",
      "lastExecutionTime": "1970-01-01T00:00:00Z",
      "lastStartTime": "1970-01-01T00:00:00Z",
      "trigger": "unspecified",
      "suppressMessages": true,
      "clientUserAgent": "string"
    },
    "priority": "normal",
    "status": "queued",
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

<h3 id="getapiv1command-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="getapiv1command-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[CommandResource](#schemacommandresource)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## post/api/v1/command

> Code samples

```bash
curl http://localhost:9696/api/v1/command \
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

`POST /api/v1/command`

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

<h3 id="postapiv1command-parameters">Parameters</h3>

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
    "isTypeExclusive": true,
    "name": "string",
    "lastExecutionTime": "1970-01-01T00:00:00Z",
    "lastStartTime": "1970-01-01T00:00:00Z",
    "trigger": "unspecified",
    "suppressMessages": true,
    "clientUserAgent": "string"
  },
  "priority": "normal",
  "status": "queued",
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

<h3 id="postapiv1command-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[CommandResource](#schemacommandresource)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

<h1 id="prowlarr-customfilter">CustomFilter</h1>

## get/api/v1/customfilter/{id}

> Code samples

```bash
curl http://localhost:9696/api/v1/customfilter/0 \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /api/v1/customfilter/{id}`

<h3 id="getapiv1customfilterid-parameters">Parameters</h3>

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

<h3 id="getapiv1customfilterid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[CustomFilterResource](#schemacustomfilterresource)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## put/api/v1/customfilter/{id}

> Code samples

```bash
curl http://localhost:9696/api/v1/customfilter/string \
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

`PUT /api/v1/customfilter/{id}`

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

<h3 id="putapiv1customfilterid-parameters">Parameters</h3>

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

<h3 id="putapiv1customfilterid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[CustomFilterResource](#schemacustomfilterresource)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## delete/api/v1/customfilter/{id}

> Code samples

```bash
curl http://localhost:9696/api/v1/customfilter/0 \
  -X DELETE \
  -H "X-Api-Key: ${API_KEY}"
```

`DELETE /api/v1/customfilter/{id}`

<h3 id="deleteapiv1customfilterid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|none|

<h3 id="deleteapiv1customfilterid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## get/api/v1/customfilter

> Code samples

```bash
curl http://localhost:9696/api/v1/customfilter \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /api/v1/customfilter`

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

<h3 id="getapiv1customfilter-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="getapiv1customfilter-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[CustomFilterResource](#schemacustomfilterresource)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## post/api/v1/customfilter

> Code samples

```bash
curl http://localhost:9696/api/v1/customfilter \
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

`POST /api/v1/customfilter`

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

<h3 id="postapiv1customfilter-parameters">Parameters</h3>

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

<h3 id="postapiv1customfilter-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[CustomFilterResource](#schemacustomfilterresource)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

<h1 id="prowlarr-developmentconfig">DevelopmentConfig</h1>

## get/api/v1/config/development/{id}

> Code samples

```bash
curl http://localhost:9696/api/v1/config/development/0 \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /api/v1/config/development/{id}`

<h3 id="getapiv1configdevelopmentid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|none|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "consoleLogLevel": "string",
  "logSql": true,
  "logIndexerResponse": true,
  "logRotate": 0,
  "filterSentryEvents": true
}
```

<h3 id="getapiv1configdevelopmentid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[DevelopmentConfigResource](#schemadevelopmentconfigresource)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## put/api/v1/config/development/{id}

> Code samples

```bash
curl http://localhost:9696/api/v1/config/development/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}" \
  -d '{
    "id": 0,
    "consoleLogLevel": "string",
    "logSql": true,
    "logIndexerResponse": true,
    "logRotate": 0,
    "filterSentryEvents": true
  }'
```

`PUT /api/v1/config/development/{id}`

> Body parameter

```json
{
  "id": 0,
  "consoleLogLevel": "string",
  "logSql": true,
  "logIndexerResponse": true,
  "logRotate": 0,
  "filterSentryEvents": true
}
```

<h3 id="putapiv1configdevelopmentid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|body|body|[DevelopmentConfigResource](#schemadevelopmentconfigresource)|false|none|
|» id|body|integer(int32)|false|none|
|» consoleLogLevel|body|string \| null|false|none|
|» logSql|body|boolean|false|none|
|» logIndexerResponse|body|boolean|false|none|
|» logRotate|body|integer(int32)|false|none|
|» filterSentryEvents|body|boolean|false|none|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "consoleLogLevel": "string",
  "logSql": true,
  "logIndexerResponse": true,
  "logRotate": 0,
  "filterSentryEvents": true
}
```

<h3 id="putapiv1configdevelopmentid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[DevelopmentConfigResource](#schemadevelopmentconfigresource)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## get/api/v1/config/development

> Code samples

```bash
curl http://localhost:9696/api/v1/config/development \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /api/v1/config/development`

> Example responses

> 200 Response

```json
{
  "id": 0,
  "consoleLogLevel": "string",
  "logSql": true,
  "logIndexerResponse": true,
  "logRotate": 0,
  "filterSentryEvents": true
}
```

<h3 id="getapiv1configdevelopment-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[DevelopmentConfigResource](#schemadevelopmentconfigresource)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

<h1 id="prowlarr-downloadclient">DownloadClient</h1>

## get/api/v1/downloadclient/{id}

> Code samples

```bash
curl http://localhost:9696/api/v1/downloadclient/0 \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /api/v1/downloadclient/{id}`

<h3 id="getapiv1downloadclientid-parameters">Parameters</h3>

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
          "parentValue": 0
        }
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
  "categories": [
    {
      "clientCategory": "string",
      "categories": [
        0
      ]
    }
  ],
  "supportsCategories": true
}
```

<h3 id="getapiv1downloadclientid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[DownloadClientResource](#schemadownloadclientresource)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## put/api/v1/downloadclient/{id}

> Code samples

```bash
curl http://localhost:9696/api/v1/downloadclient/string \
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
            "parentValue": 0
          }
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
    "categories": [
      {
        "clientCategory": "string",
        "categories": [
          0
        ]
      }
    ],
    "supportsCategories": true
  }'
```

`PUT /api/v1/downloadclient/{id}`

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
          "parentValue": 0
        }
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
  "categories": [
    {
      "clientCategory": "string",
      "categories": [
        0
      ]
    }
  ],
  "supportsCategories": true
}
```

<h3 id="putapiv1downloadclientid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|forceSave|query|boolean|false|none|
|id|path|string|true|none|
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
|» categories|body|[[DownloadClientCategory](#schemadownloadclientcategory)]|false|none|
|» supportsCategories|body|boolean|false|none|

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
          "hint": "string",
          "parentValue": 0
        }
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
  "categories": [
    {
      "clientCategory": "string",
      "categories": [
        0
      ]
    }
  ],
  "supportsCategories": true
}
```

<h3 id="putapiv1downloadclientid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[DownloadClientResource](#schemadownloadclientresource)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## delete/api/v1/downloadclient/{id}

> Code samples

```bash
curl http://localhost:9696/api/v1/downloadclient/0 \
  -X DELETE \
  -H "X-Api-Key: ${API_KEY}"
```

`DELETE /api/v1/downloadclient/{id}`

<h3 id="deleteapiv1downloadclientid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|none|

<h3 id="deleteapiv1downloadclientid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## get/api/v1/downloadclient

> Code samples

```bash
curl http://localhost:9696/api/v1/downloadclient \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /api/v1/downloadclient`

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
            "parentValue": 0
          }
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
    "categories": [
      {
        "clientCategory": "string",
        "categories": [
          0
        ]
      }
    ],
    "supportsCategories": true
  }
]
```

<h3 id="getapiv1downloadclient-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="getapiv1downloadclient-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[DownloadClientResource](#schemadownloadclientresource)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## post/api/v1/downloadclient

> Code samples

```bash
curl http://localhost:9696/api/v1/downloadclient \
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
            "parentValue": 0
          }
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
    "categories": [
      {
        "clientCategory": "string",
        "categories": [
          0
        ]
      }
    ],
    "supportsCategories": true
  }'
```

`POST /api/v1/downloadclient`

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
          "parentValue": 0
        }
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
  "categories": [
    {
      "clientCategory": "string",
      "categories": [
        0
      ]
    }
  ],
  "supportsCategories": true
}
```

<h3 id="postapiv1downloadclient-parameters">Parameters</h3>

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
|» categories|body|[[DownloadClientCategory](#schemadownloadclientcategory)]|false|none|
|» supportsCategories|body|boolean|false|none|

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
          "hint": "string",
          "parentValue": 0
        }
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
  "categories": [
    {
      "clientCategory": "string",
      "categories": [
        0
      ]
    }
  ],
  "supportsCategories": true
}
```

<h3 id="postapiv1downloadclient-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[DownloadClientResource](#schemadownloadclientresource)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## put/api/v1/downloadclient/bulk

> Code samples

```bash
curl http://localhost:9696/api/v1/downloadclient/bulk \
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
    "priority": 0
  }'
```

`PUT /api/v1/downloadclient/bulk`

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
  "priority": 0
}
```

<h3 id="putapiv1downloadclientbulk-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[DownloadClientBulkResource](#schemadownloadclientbulkresource)|false|none|
|» ids|body|[integer(int32)]|false|none|
|» tags|body|[integer(int32)]|false|none|
|» applyTags|body|[ApplyTags](#schemaapplytags)|false|none|
|» enable|body|boolean \| null|false|none|
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
          "parentValue": 0
        }
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
  "categories": [
    {
      "clientCategory": "string",
      "categories": [
        0
      ]
    }
  ],
  "supportsCategories": true
}
```

<h3 id="putapiv1downloadclientbulk-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[DownloadClientResource](#schemadownloadclientresource)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## delete/api/v1/downloadclient/bulk

> Code samples

```bash
curl http://localhost:9696/api/v1/downloadclient/bulk \
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
    "priority": 0
  }'
```

`DELETE /api/v1/downloadclient/bulk`

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
  "priority": 0
}
```

<h3 id="deleteapiv1downloadclientbulk-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[DownloadClientBulkResource](#schemadownloadclientbulkresource)|false|none|
|» ids|body|[integer(int32)]|false|none|
|» tags|body|[integer(int32)]|false|none|
|» applyTags|body|[ApplyTags](#schemaapplytags)|false|none|
|» enable|body|boolean \| null|false|none|
|» priority|body|integer(int32) \| null|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» applyTags|add|
|» applyTags|remove|
|» applyTags|replace|

<h3 id="deleteapiv1downloadclientbulk-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## get/api/v1/downloadclient/schema

> Code samples

```bash
curl http://localhost:9696/api/v1/downloadclient/schema \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /api/v1/downloadclient/schema`

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
            "parentValue": 0
          }
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
    "categories": [
      {
        "clientCategory": "string",
        "categories": [
          0
        ]
      }
    ],
    "supportsCategories": true
  }
]
```

<h3 id="getapiv1downloadclientschema-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="getapiv1downloadclientschema-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[DownloadClientResource](#schemadownloadclientresource)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## post/api/v1/downloadclient/test

> Code samples

```bash
curl http://localhost:9696/api/v1/downloadclient/test \
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
            "parentValue": 0
          }
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
    "categories": [
      {
        "clientCategory": "string",
        "categories": [
          0
        ]
      }
    ],
    "supportsCategories": true
  }'
```

`POST /api/v1/downloadclient/test`

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
          "parentValue": 0
        }
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
  "categories": [
    {
      "clientCategory": "string",
      "categories": [
        0
      ]
    }
  ],
  "supportsCategories": true
}
```

<h3 id="postapiv1downloadclienttest-parameters">Parameters</h3>

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
|» categories|body|[[DownloadClientCategory](#schemadownloadclientcategory)]|false|none|
|» supportsCategories|body|boolean|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» protocol|unknown|
|» protocol|usenet|
|» protocol|torrent|

<h3 id="postapiv1downloadclienttest-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## post/api/v1/downloadclient/testall

> Code samples

```bash
curl http://localhost:9696/api/v1/downloadclient/testall \
  -X POST \
  -H "X-Api-Key: ${API_KEY}"
```

`POST /api/v1/downloadclient/testall`

<h3 id="postapiv1downloadclienttestall-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## post/api/v1/downloadclient/action/{name}

> Code samples

```bash
curl http://localhost:9696/api/v1/downloadclient/action/string \
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
            "parentValue": 0
          }
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
    "categories": [
      {
        "clientCategory": "string",
        "categories": [
          0
        ]
      }
    ],
    "supportsCategories": true
  }'
```

`POST /api/v1/downloadclient/action/{name}`

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
          "parentValue": 0
        }
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
  "categories": [
    {
      "clientCategory": "string",
      "categories": [
        0
      ]
    }
  ],
  "supportsCategories": true
}
```

<h3 id="postapiv1downloadclientactionname-parameters">Parameters</h3>

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
|» categories|body|[[DownloadClientCategory](#schemadownloadclientcategory)]|false|none|
|» supportsCategories|body|boolean|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» protocol|unknown|
|» protocol|usenet|
|» protocol|torrent|

<h3 id="postapiv1downloadclientactionname-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

<h1 id="prowlarr-downloadclientconfig">DownloadClientConfig</h1>

## get/api/v1/config/downloadclient/{id}

> Code samples

```bash
curl http://localhost:9696/api/v1/config/downloadclient/0 \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /api/v1/config/downloadclient/{id}`

<h3 id="getapiv1configdownloadclientid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|none|

> Example responses

> 200 Response

```json
{
  "id": 0
}
```

<h3 id="getapiv1configdownloadclientid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[DownloadClientConfigResource](#schemadownloadclientconfigresource)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## put/api/v1/config/downloadclient/{id}

> Code samples

```bash
curl http://localhost:9696/api/v1/config/downloadclient/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}" \
  -d '{
    "id": 0
  }'
```

`PUT /api/v1/config/downloadclient/{id}`

> Body parameter

```json
{
  "id": 0
}
```

<h3 id="putapiv1configdownloadclientid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|body|body|[DownloadClientConfigResource](#schemadownloadclientconfigresource)|false|none|
|» id|body|integer(int32)|false|none|

> Example responses

> 200 Response

```json
{
  "id": 0
}
```

<h3 id="putapiv1configdownloadclientid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[DownloadClientConfigResource](#schemadownloadclientconfigresource)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## get/api/v1/config/downloadclient

> Code samples

```bash
curl http://localhost:9696/api/v1/config/downloadclient \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /api/v1/config/downloadclient`

> Example responses

> 200 Response

```json
{
  "id": 0
}
```

<h3 id="getapiv1configdownloadclient-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[DownloadClientConfigResource](#schemadownloadclientconfigresource)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

<h1 id="prowlarr-filesystem">FileSystem</h1>

## get/api/v1/filesystem

> Code samples

```bash
curl http://localhost:9696/api/v1/filesystem \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /api/v1/filesystem`

<h3 id="getapiv1filesystem-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|path|query|string|false|none|
|includeFiles|query|boolean|false|none|
|allowFoldersWithoutTrailingSlashes|query|boolean|false|none|

<h3 id="getapiv1filesystem-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## get/api/v1/filesystem/type

> Code samples

```bash
curl http://localhost:9696/api/v1/filesystem/type \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /api/v1/filesystem/type`

<h3 id="getapiv1filesystemtype-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|path|query|string|false|none|

<h3 id="getapiv1filesystemtype-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

<h1 id="prowlarr-health">Health</h1>

## get/api/v1/health

> Code samples

```bash
curl http://localhost:9696/api/v1/health \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /api/v1/health`

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

<h3 id="getapiv1health-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="getapiv1health-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[HealthResource](#schemahealthresource)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

<h1 id="prowlarr-history">History</h1>

## get/api/v1/history

> Code samples

```bash
curl http://localhost:9696/api/v1/history \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /api/v1/history`

<h3 id="getapiv1history-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|page|query|integer(int32)|false|none|
|pageSize|query|integer(int32)|false|none|
|sortKey|query|string|false|none|
|sortDirection|query|[SortDirection](#schemasortdirection)|false|none|
|eventType|query|[integer(int32)]|false|none|
|successful|query|boolean|false|none|
|downloadId|query|string|false|none|
|indexerIds|query|[integer(int32)]|false|none|

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
      "indexerId": 0,
      "date": "1970-01-01T00:00:00Z",
      "downloadId": "string",
      "successful": true,
      "eventType": "unknown",
      "data": {
        "property1": "string",
        "property2": "string"
      }
    }
  ]
}
```

<h3 id="getapiv1history-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[HistoryResourcePagingResource](#schemahistoryresourcepagingresource)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## get/api/v1/history/since

> Code samples

```bash
curl http://localhost:9696/api/v1/history/since \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /api/v1/history/since`

<h3 id="getapiv1historysince-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|date|query|string(date-time)|false|none|
|eventType|query|[HistoryEventType](#schemahistoryeventtype)|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|eventType|unknown|
|eventType|releaseGrabbed|
|eventType|indexerQuery|
|eventType|indexerRss|
|eventType|indexerAuth|
|eventType|indexerInfo|

> Example responses

> 200 Response

```json
[
  {
    "id": 0,
    "indexerId": 0,
    "date": "1970-01-01T00:00:00Z",
    "downloadId": "string",
    "successful": true,
    "eventType": "unknown",
    "data": {
      "property1": "string",
      "property2": "string"
    }
  }
]
```

<h3 id="getapiv1historysince-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="getapiv1historysince-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[HistoryResource](#schemahistoryresource)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## get/api/v1/history/indexer

> Code samples

```bash
curl http://localhost:9696/api/v1/history/indexer \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /api/v1/history/indexer`

<h3 id="getapiv1historyindexer-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|indexerId|query|integer(int32)|false|none|
|eventType|query|[HistoryEventType](#schemahistoryeventtype)|false|none|
|limit|query|integer(int32)|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|eventType|unknown|
|eventType|releaseGrabbed|
|eventType|indexerQuery|
|eventType|indexerRss|
|eventType|indexerAuth|
|eventType|indexerInfo|

> Example responses

> 200 Response

```json
[
  {
    "id": 0,
    "indexerId": 0,
    "date": "1970-01-01T00:00:00Z",
    "downloadId": "string",
    "successful": true,
    "eventType": "unknown",
    "data": {
      "property1": "string",
      "property2": "string"
    }
  }
]
```

<h3 id="getapiv1historyindexer-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="getapiv1historyindexer-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[HistoryResource](#schemahistoryresource)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

<h1 id="prowlarr-hostconfig">HostConfig</h1>

## get/api/v1/config/host/{id}

> Code samples

```bash
curl http://localhost:9696/api/v1/config/host/0 \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /api/v1/config/host/{id}`

<h3 id="getapiv1confighostid-parameters">Parameters</h3>

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
  "analyticsEnabled": true,
  "username": "string",
  "password": "string",
  "passwordConfirmation": "string",
  "logLevel": "string",
  "logSizeLimit": 0,
  "consoleLogLevel": "string",
  "branch": "string",
  "apiKey": "string",
  "sslCertPath": "string",
  "sslCertPassword": "string",
  "urlBase": "string",
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
  "historyCleanupDays": 0,
  "trustCgnatIpAddresses": true
}
```

<h3 id="getapiv1confighostid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[HostConfigResource](#schemahostconfigresource)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## put/api/v1/config/host/{id}

> Code samples

```bash
curl http://localhost:9696/api/v1/config/host/string \
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
    "analyticsEnabled": true,
    "username": "string",
    "password": "string",
    "passwordConfirmation": "string",
    "logLevel": "string",
    "logSizeLimit": 0,
    "consoleLogLevel": "string",
    "branch": "string",
    "apiKey": "string",
    "sslCertPath": "string",
    "sslCertPassword": "string",
    "urlBase": "string",
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
    "historyCleanupDays": 0,
    "trustCgnatIpAddresses": true
  }'
```

`PUT /api/v1/config/host/{id}`

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
  "analyticsEnabled": true,
  "username": "string",
  "password": "string",
  "passwordConfirmation": "string",
  "logLevel": "string",
  "logSizeLimit": 0,
  "consoleLogLevel": "string",
  "branch": "string",
  "apiKey": "string",
  "sslCertPath": "string",
  "sslCertPassword": "string",
  "urlBase": "string",
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
  "historyCleanupDays": 0,
  "trustCgnatIpAddresses": true
}
```

<h3 id="putapiv1confighostid-parameters">Parameters</h3>

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
|» analyticsEnabled|body|boolean|false|none|
|» username|body|string \| null|false|none|
|» password|body|string \| null|false|none|
|» passwordConfirmation|body|string \| null|false|none|
|» logLevel|body|string \| null|false|none|
|» logSizeLimit|body|integer(int32)|false|none|
|» consoleLogLevel|body|string \| null|false|none|
|» branch|body|string \| null|false|none|
|» apiKey|body|string \| null|false|none|
|» sslCertPath|body|string \| null|false|none|
|» sslCertPassword|body|string \| null|false|none|
|» urlBase|body|string \| null|false|none|
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
|» historyCleanupDays|body|integer(int32)|false|none|
|» trustCgnatIpAddresses|body|boolean|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» authenticationMethod|none|
|» authenticationMethod|basic|
|» authenticationMethod|forms|
|» authenticationMethod|external|
|» authenticationRequired|enabled|
|» authenticationRequired|disabledForLocalAddresses|
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
  "analyticsEnabled": true,
  "username": "string",
  "password": "string",
  "passwordConfirmation": "string",
  "logLevel": "string",
  "logSizeLimit": 0,
  "consoleLogLevel": "string",
  "branch": "string",
  "apiKey": "string",
  "sslCertPath": "string",
  "sslCertPassword": "string",
  "urlBase": "string",
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
  "historyCleanupDays": 0,
  "trustCgnatIpAddresses": true
}
```

<h3 id="putapiv1confighostid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[HostConfigResource](#schemahostconfigresource)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## get/api/v1/config/host

> Code samples

```bash
curl http://localhost:9696/api/v1/config/host \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /api/v1/config/host`

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
  "analyticsEnabled": true,
  "username": "string",
  "password": "string",
  "passwordConfirmation": "string",
  "logLevel": "string",
  "logSizeLimit": 0,
  "consoleLogLevel": "string",
  "branch": "string",
  "apiKey": "string",
  "sslCertPath": "string",
  "sslCertPassword": "string",
  "urlBase": "string",
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
  "historyCleanupDays": 0,
  "trustCgnatIpAddresses": true
}
```

<h3 id="getapiv1confighost-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[HostConfigResource](#schemahostconfigresource)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

<h1 id="prowlarr-indexer">Indexer</h1>

## get/api/v1/indexer/{id}

> Code samples

```bash
curl http://localhost:9696/api/v1/indexer/0 \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /api/v1/indexer/{id}`

<h3 id="getapiv1indexerid-parameters">Parameters</h3>

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
          "parentValue": 0
        }
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
  "indexerUrls": [
    "string"
  ],
  "legacyUrls": [
    "string"
  ],
  "definitionName": "string",
  "description": "string",
  "language": "string",
  "encoding": "string",
  "enable": true,
  "redirect": true,
  "supportsRss": true,
  "supportsSearch": true,
  "supportsRedirect": true,
  "supportsPagination": true,
  "appProfileId": 0,
  "protocol": "unknown",
  "privacy": "public",
  "capabilities": {
    "id": 0,
    "limitsMax": 0,
    "limitsDefault": 0,
    "categories": [
      {}
    ],
    "supportsRawSearch": true,
    "searchParams": [
      "q"
    ],
    "tvSearchParams": [
      "q"
    ],
    "movieSearchParams": [
      "q"
    ],
    "musicSearchParams": [
      "q"
    ],
    "bookSearchParams": [
      "q"
    ]
  },
  "priority": 0,
  "downloadClientId": 0,
  "added": "1970-01-01T00:00:00Z",
  "status": {
    "id": 0,
    "indexerId": 0,
    "disabledTill": "1970-01-01T00:00:00Z",
    "mostRecentFailure": "1970-01-01T00:00:00Z",
    "initialFailure": "1970-01-01T00:00:00Z"
  },
  "sortName": "string"
}
```

<h3 id="getapiv1indexerid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[IndexerResource](#schemaindexerresource)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## put/api/v1/indexer/{id}

> Code samples

```bash
curl http://localhost:9696/api/v1/indexer/string \
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
            "parentValue": 0
          }
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
    "indexerUrls": [
      "string"
    ],
    "legacyUrls": [
      "string"
    ],
    "definitionName": "string",
    "description": "string",
    "language": "string",
    "encoding": "string",
    "enable": true,
    "redirect": true,
    "supportsRss": true,
    "supportsSearch": true,
    "supportsRedirect": true,
    "supportsPagination": true,
    "appProfileId": 0,
    "protocol": "unknown",
    "privacy": "public",
    "capabilities": {
      "id": 0,
      "limitsMax": 0,
      "limitsDefault": 0,
      "categories": [
        {}
      ],
      "supportsRawSearch": true,
      "searchParams": [
        "q"
      ],
      "tvSearchParams": [
        "q"
      ],
      "movieSearchParams": [
        "q"
      ],
      "musicSearchParams": [
        "q"
      ],
      "bookSearchParams": [
        "q"
      ]
    },
    "priority": 0,
    "downloadClientId": 0,
    "added": "1970-01-01T00:00:00Z",
    "status": {
      "id": 0,
      "indexerId": 0,
      "disabledTill": "1970-01-01T00:00:00Z",
      "mostRecentFailure": "1970-01-01T00:00:00Z",
      "initialFailure": "1970-01-01T00:00:00Z"
    },
    "sortName": "string"
  }'
```

`PUT /api/v1/indexer/{id}`

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
          "parentValue": 0
        }
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
  "indexerUrls": [
    "string"
  ],
  "legacyUrls": [
    "string"
  ],
  "definitionName": "string",
  "description": "string",
  "language": "string",
  "encoding": "string",
  "enable": true,
  "redirect": true,
  "supportsRss": true,
  "supportsSearch": true,
  "supportsRedirect": true,
  "supportsPagination": true,
  "appProfileId": 0,
  "protocol": "unknown",
  "privacy": "public",
  "capabilities": {
    "id": 0,
    "limitsMax": 0,
    "limitsDefault": 0,
    "categories": [
      {}
    ],
    "supportsRawSearch": true,
    "searchParams": [
      "q"
    ],
    "tvSearchParams": [
      "q"
    ],
    "movieSearchParams": [
      "q"
    ],
    "musicSearchParams": [
      "q"
    ],
    "bookSearchParams": [
      "q"
    ]
  },
  "priority": 0,
  "downloadClientId": 0,
  "added": "1970-01-01T00:00:00Z",
  "status": {
    "id": 0,
    "indexerId": 0,
    "disabledTill": "1970-01-01T00:00:00Z",
    "mostRecentFailure": "1970-01-01T00:00:00Z",
    "initialFailure": "1970-01-01T00:00:00Z"
  },
  "sortName": "string"
}
```

<h3 id="putapiv1indexerid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|forceSave|query|boolean|false|none|
|id|path|string|true|none|
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
|» indexerUrls|body|[string]|false|none|
|» legacyUrls|body|[string]|false|none|
|» definitionName|body|string \| null|false|none|
|» description|body|string \| null|false|none|
|» language|body|string \| null|false|none|
|» encoding|body|string \| null|false|none|
|» enable|body|boolean|false|none|
|» redirect|body|boolean|false|none|
|» supportsRss|body|boolean|false|none|
|» supportsSearch|body|boolean|false|none|
|» supportsRedirect|body|boolean|false|none|
|» supportsPagination|body|boolean|false|none|
|» appProfileId|body|integer(int32)|false|none|
|» protocol|body|[DownloadProtocol](#schemadownloadprotocol)|false|none|
|» privacy|body|[IndexerPrivacy](#schemaindexerprivacy)|false|none|
|» capabilities|body|[IndexerCapabilityResource](#schemaindexercapabilityresource)|false|none|
|» priority|body|integer(int32)|false|none|
|» downloadClientId|body|integer(int32)|false|none|
|» added|body|string(date-time)|false|none|
|» status|body|[IndexerStatusResource](#schemaindexerstatusresource)|false|none|
|» sortName|body|string \| null|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» protocol|unknown|
|» protocol|usenet|
|» protocol|torrent|
|» privacy|public|
|» privacy|semiPrivate|
|» privacy|private|

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
          "parentValue": 0
        }
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
  "indexerUrls": [
    "string"
  ],
  "legacyUrls": [
    "string"
  ],
  "definitionName": "string",
  "description": "string",
  "language": "string",
  "encoding": "string",
  "enable": true,
  "redirect": true,
  "supportsRss": true,
  "supportsSearch": true,
  "supportsRedirect": true,
  "supportsPagination": true,
  "appProfileId": 0,
  "protocol": "unknown",
  "privacy": "public",
  "capabilities": {
    "id": 0,
    "limitsMax": 0,
    "limitsDefault": 0,
    "categories": [
      {}
    ],
    "supportsRawSearch": true,
    "searchParams": [
      "q"
    ],
    "tvSearchParams": [
      "q"
    ],
    "movieSearchParams": [
      "q"
    ],
    "musicSearchParams": [
      "q"
    ],
    "bookSearchParams": [
      "q"
    ]
  },
  "priority": 0,
  "downloadClientId": 0,
  "added": "1970-01-01T00:00:00Z",
  "status": {
    "id": 0,
    "indexerId": 0,
    "disabledTill": "1970-01-01T00:00:00Z",
    "mostRecentFailure": "1970-01-01T00:00:00Z",
    "initialFailure": "1970-01-01T00:00:00Z"
  },
  "sortName": "string"
}
```

<h3 id="putapiv1indexerid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[IndexerResource](#schemaindexerresource)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## delete/api/v1/indexer/{id}

> Code samples

```bash
curl http://localhost:9696/api/v1/indexer/0 \
  -X DELETE \
  -H "X-Api-Key: ${API_KEY}"
```

`DELETE /api/v1/indexer/{id}`

<h3 id="deleteapiv1indexerid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|none|

<h3 id="deleteapiv1indexerid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## get/api/v1/indexer

> Code samples

```bash
curl http://localhost:9696/api/v1/indexer \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /api/v1/indexer`

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
            "parentValue": 0
          }
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
    "indexerUrls": [
      "string"
    ],
    "legacyUrls": [
      "string"
    ],
    "definitionName": "string",
    "description": "string",
    "language": "string",
    "encoding": "string",
    "enable": true,
    "redirect": true,
    "supportsRss": true,
    "supportsSearch": true,
    "supportsRedirect": true,
    "supportsPagination": true,
    "appProfileId": 0,
    "protocol": "unknown",
    "privacy": "public",
    "capabilities": {
      "id": 0,
      "limitsMax": 0,
      "limitsDefault": 0,
      "categories": [
        {}
      ],
      "supportsRawSearch": true,
      "searchParams": [
        "q"
      ],
      "tvSearchParams": [
        "q"
      ],
      "movieSearchParams": [
        "q"
      ],
      "musicSearchParams": [
        "q"
      ],
      "bookSearchParams": [
        "q"
      ]
    },
    "priority": 0,
    "downloadClientId": 0,
    "added": "1970-01-01T00:00:00Z",
    "status": {
      "id": 0,
      "indexerId": 0,
      "disabledTill": "1970-01-01T00:00:00Z",
      "mostRecentFailure": "1970-01-01T00:00:00Z",
      "initialFailure": "1970-01-01T00:00:00Z"
    },
    "sortName": "string"
  }
]
```

<h3 id="getapiv1indexer-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="getapiv1indexer-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[IndexerResource](#schemaindexerresource)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## post/api/v1/indexer

> Code samples

```bash
curl http://localhost:9696/api/v1/indexer \
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
            "parentValue": 0
          }
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
    "indexerUrls": [
      "string"
    ],
    "legacyUrls": [
      "string"
    ],
    "definitionName": "string",
    "description": "string",
    "language": "string",
    "encoding": "string",
    "enable": true,
    "redirect": true,
    "supportsRss": true,
    "supportsSearch": true,
    "supportsRedirect": true,
    "supportsPagination": true,
    "appProfileId": 0,
    "protocol": "unknown",
    "privacy": "public",
    "capabilities": {
      "id": 0,
      "limitsMax": 0,
      "limitsDefault": 0,
      "categories": [
        {}
      ],
      "supportsRawSearch": true,
      "searchParams": [
        "q"
      ],
      "tvSearchParams": [
        "q"
      ],
      "movieSearchParams": [
        "q"
      ],
      "musicSearchParams": [
        "q"
      ],
      "bookSearchParams": [
        "q"
      ]
    },
    "priority": 0,
    "downloadClientId": 0,
    "added": "1970-01-01T00:00:00Z",
    "status": {
      "id": 0,
      "indexerId": 0,
      "disabledTill": "1970-01-01T00:00:00Z",
      "mostRecentFailure": "1970-01-01T00:00:00Z",
      "initialFailure": "1970-01-01T00:00:00Z"
    },
    "sortName": "string"
  }'
```

`POST /api/v1/indexer`

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
          "parentValue": 0
        }
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
  "indexerUrls": [
    "string"
  ],
  "legacyUrls": [
    "string"
  ],
  "definitionName": "string",
  "description": "string",
  "language": "string",
  "encoding": "string",
  "enable": true,
  "redirect": true,
  "supportsRss": true,
  "supportsSearch": true,
  "supportsRedirect": true,
  "supportsPagination": true,
  "appProfileId": 0,
  "protocol": "unknown",
  "privacy": "public",
  "capabilities": {
    "id": 0,
    "limitsMax": 0,
    "limitsDefault": 0,
    "categories": [
      {}
    ],
    "supportsRawSearch": true,
    "searchParams": [
      "q"
    ],
    "tvSearchParams": [
      "q"
    ],
    "movieSearchParams": [
      "q"
    ],
    "musicSearchParams": [
      "q"
    ],
    "bookSearchParams": [
      "q"
    ]
  },
  "priority": 0,
  "downloadClientId": 0,
  "added": "1970-01-01T00:00:00Z",
  "status": {
    "id": 0,
    "indexerId": 0,
    "disabledTill": "1970-01-01T00:00:00Z",
    "mostRecentFailure": "1970-01-01T00:00:00Z",
    "initialFailure": "1970-01-01T00:00:00Z"
  },
  "sortName": "string"
}
```

<h3 id="postapiv1indexer-parameters">Parameters</h3>

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
|» indexerUrls|body|[string]|false|none|
|» legacyUrls|body|[string]|false|none|
|» definitionName|body|string \| null|false|none|
|» description|body|string \| null|false|none|
|» language|body|string \| null|false|none|
|» encoding|body|string \| null|false|none|
|» enable|body|boolean|false|none|
|» redirect|body|boolean|false|none|
|» supportsRss|body|boolean|false|none|
|» supportsSearch|body|boolean|false|none|
|» supportsRedirect|body|boolean|false|none|
|» supportsPagination|body|boolean|false|none|
|» appProfileId|body|integer(int32)|false|none|
|» protocol|body|[DownloadProtocol](#schemadownloadprotocol)|false|none|
|» privacy|body|[IndexerPrivacy](#schemaindexerprivacy)|false|none|
|» capabilities|body|[IndexerCapabilityResource](#schemaindexercapabilityresource)|false|none|
|» priority|body|integer(int32)|false|none|
|» downloadClientId|body|integer(int32)|false|none|
|» added|body|string(date-time)|false|none|
|» status|body|[IndexerStatusResource](#schemaindexerstatusresource)|false|none|
|» sortName|body|string \| null|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» protocol|unknown|
|» protocol|usenet|
|» protocol|torrent|
|» privacy|public|
|» privacy|semiPrivate|
|» privacy|private|

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
          "parentValue": 0
        }
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
  "indexerUrls": [
    "string"
  ],
  "legacyUrls": [
    "string"
  ],
  "definitionName": "string",
  "description": "string",
  "language": "string",
  "encoding": "string",
  "enable": true,
  "redirect": true,
  "supportsRss": true,
  "supportsSearch": true,
  "supportsRedirect": true,
  "supportsPagination": true,
  "appProfileId": 0,
  "protocol": "unknown",
  "privacy": "public",
  "capabilities": {
    "id": 0,
    "limitsMax": 0,
    "limitsDefault": 0,
    "categories": [
      {}
    ],
    "supportsRawSearch": true,
    "searchParams": [
      "q"
    ],
    "tvSearchParams": [
      "q"
    ],
    "movieSearchParams": [
      "q"
    ],
    "musicSearchParams": [
      "q"
    ],
    "bookSearchParams": [
      "q"
    ]
  },
  "priority": 0,
  "downloadClientId": 0,
  "added": "1970-01-01T00:00:00Z",
  "status": {
    "id": 0,
    "indexerId": 0,
    "disabledTill": "1970-01-01T00:00:00Z",
    "mostRecentFailure": "1970-01-01T00:00:00Z",
    "initialFailure": "1970-01-01T00:00:00Z"
  },
  "sortName": "string"
}
```

<h3 id="postapiv1indexer-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[IndexerResource](#schemaindexerresource)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## put/api/v1/indexer/bulk

> Code samples

```bash
curl http://localhost:9696/api/v1/indexer/bulk \
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
    "appProfileId": 0,
    "priority": 0,
    "minimumSeeders": 0,
    "seedRatio": 0,
    "seedTime": 0,
    "packSeedTime": 0,
    "preferMagnetUrl": true
  }'
```

`PUT /api/v1/indexer/bulk`

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
  "appProfileId": 0,
  "priority": 0,
  "minimumSeeders": 0,
  "seedRatio": 0,
  "seedTime": 0,
  "packSeedTime": 0,
  "preferMagnetUrl": true
}
```

<h3 id="putapiv1indexerbulk-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[IndexerBulkResource](#schemaindexerbulkresource)|false|none|
|» ids|body|[integer(int32)]|false|none|
|» tags|body|[integer(int32)]|false|none|
|» applyTags|body|[ApplyTags](#schemaapplytags)|false|none|
|» enable|body|boolean \| null|false|none|
|» appProfileId|body|integer(int32) \| null|false|none|
|» priority|body|integer(int32) \| null|false|none|
|» minimumSeeders|body|integer(int32) \| null|false|none|
|» seedRatio|body|number(double) \| null|false|none|
|» seedTime|body|integer(int32) \| null|false|none|
|» packSeedTime|body|integer(int32) \| null|false|none|
|» preferMagnetUrl|body|boolean \| null|false|none|

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
          "hint": "string",
          "parentValue": 0
        }
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
  "indexerUrls": [
    "string"
  ],
  "legacyUrls": [
    "string"
  ],
  "definitionName": "string",
  "description": "string",
  "language": "string",
  "encoding": "string",
  "enable": true,
  "redirect": true,
  "supportsRss": true,
  "supportsSearch": true,
  "supportsRedirect": true,
  "supportsPagination": true,
  "appProfileId": 0,
  "protocol": "unknown",
  "privacy": "public",
  "capabilities": {
    "id": 0,
    "limitsMax": 0,
    "limitsDefault": 0,
    "categories": [
      {}
    ],
    "supportsRawSearch": true,
    "searchParams": [
      "q"
    ],
    "tvSearchParams": [
      "q"
    ],
    "movieSearchParams": [
      "q"
    ],
    "musicSearchParams": [
      "q"
    ],
    "bookSearchParams": [
      "q"
    ]
  },
  "priority": 0,
  "downloadClientId": 0,
  "added": "1970-01-01T00:00:00Z",
  "status": {
    "id": 0,
    "indexerId": 0,
    "disabledTill": "1970-01-01T00:00:00Z",
    "mostRecentFailure": "1970-01-01T00:00:00Z",
    "initialFailure": "1970-01-01T00:00:00Z"
  },
  "sortName": "string"
}
```

<h3 id="putapiv1indexerbulk-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[IndexerResource](#schemaindexerresource)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## delete/api/v1/indexer/bulk

> Code samples

```bash
curl http://localhost:9696/api/v1/indexer/bulk \
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
    "appProfileId": 0,
    "priority": 0,
    "minimumSeeders": 0,
    "seedRatio": 0,
    "seedTime": 0,
    "packSeedTime": 0,
    "preferMagnetUrl": true
  }'
```

`DELETE /api/v1/indexer/bulk`

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
  "appProfileId": 0,
  "priority": 0,
  "minimumSeeders": 0,
  "seedRatio": 0,
  "seedTime": 0,
  "packSeedTime": 0,
  "preferMagnetUrl": true
}
```

<h3 id="deleteapiv1indexerbulk-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[IndexerBulkResource](#schemaindexerbulkresource)|false|none|
|» ids|body|[integer(int32)]|false|none|
|» tags|body|[integer(int32)]|false|none|
|» applyTags|body|[ApplyTags](#schemaapplytags)|false|none|
|» enable|body|boolean \| null|false|none|
|» appProfileId|body|integer(int32) \| null|false|none|
|» priority|body|integer(int32) \| null|false|none|
|» minimumSeeders|body|integer(int32) \| null|false|none|
|» seedRatio|body|number(double) \| null|false|none|
|» seedTime|body|integer(int32) \| null|false|none|
|» packSeedTime|body|integer(int32) \| null|false|none|
|» preferMagnetUrl|body|boolean \| null|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» applyTags|add|
|» applyTags|remove|
|» applyTags|replace|

<h3 id="deleteapiv1indexerbulk-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## get/api/v1/indexer/schema

> Code samples

```bash
curl http://localhost:9696/api/v1/indexer/schema \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /api/v1/indexer/schema`

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
            "parentValue": 0
          }
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
    "indexerUrls": [
      "string"
    ],
    "legacyUrls": [
      "string"
    ],
    "definitionName": "string",
    "description": "string",
    "language": "string",
    "encoding": "string",
    "enable": true,
    "redirect": true,
    "supportsRss": true,
    "supportsSearch": true,
    "supportsRedirect": true,
    "supportsPagination": true,
    "appProfileId": 0,
    "protocol": "unknown",
    "privacy": "public",
    "capabilities": {
      "id": 0,
      "limitsMax": 0,
      "limitsDefault": 0,
      "categories": [
        {}
      ],
      "supportsRawSearch": true,
      "searchParams": [
        "q"
      ],
      "tvSearchParams": [
        "q"
      ],
      "movieSearchParams": [
        "q"
      ],
      "musicSearchParams": [
        "q"
      ],
      "bookSearchParams": [
        "q"
      ]
    },
    "priority": 0,
    "downloadClientId": 0,
    "added": "1970-01-01T00:00:00Z",
    "status": {
      "id": 0,
      "indexerId": 0,
      "disabledTill": "1970-01-01T00:00:00Z",
      "mostRecentFailure": "1970-01-01T00:00:00Z",
      "initialFailure": "1970-01-01T00:00:00Z"
    },
    "sortName": "string"
  }
]
```

<h3 id="getapiv1indexerschema-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="getapiv1indexerschema-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[IndexerResource](#schemaindexerresource)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## post/api/v1/indexer/test

> Code samples

```bash
curl http://localhost:9696/api/v1/indexer/test \
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
            "parentValue": 0
          }
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
    "indexerUrls": [
      "string"
    ],
    "legacyUrls": [
      "string"
    ],
    "definitionName": "string",
    "description": "string",
    "language": "string",
    "encoding": "string",
    "enable": true,
    "redirect": true,
    "supportsRss": true,
    "supportsSearch": true,
    "supportsRedirect": true,
    "supportsPagination": true,
    "appProfileId": 0,
    "protocol": "unknown",
    "privacy": "public",
    "capabilities": {
      "id": 0,
      "limitsMax": 0,
      "limitsDefault": 0,
      "categories": [
        {}
      ],
      "supportsRawSearch": true,
      "searchParams": [
        "q"
      ],
      "tvSearchParams": [
        "q"
      ],
      "movieSearchParams": [
        "q"
      ],
      "musicSearchParams": [
        "q"
      ],
      "bookSearchParams": [
        "q"
      ]
    },
    "priority": 0,
    "downloadClientId": 0,
    "added": "1970-01-01T00:00:00Z",
    "status": {
      "id": 0,
      "indexerId": 0,
      "disabledTill": "1970-01-01T00:00:00Z",
      "mostRecentFailure": "1970-01-01T00:00:00Z",
      "initialFailure": "1970-01-01T00:00:00Z"
    },
    "sortName": "string"
  }'
```

`POST /api/v1/indexer/test`

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
          "parentValue": 0
        }
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
  "indexerUrls": [
    "string"
  ],
  "legacyUrls": [
    "string"
  ],
  "definitionName": "string",
  "description": "string",
  "language": "string",
  "encoding": "string",
  "enable": true,
  "redirect": true,
  "supportsRss": true,
  "supportsSearch": true,
  "supportsRedirect": true,
  "supportsPagination": true,
  "appProfileId": 0,
  "protocol": "unknown",
  "privacy": "public",
  "capabilities": {
    "id": 0,
    "limitsMax": 0,
    "limitsDefault": 0,
    "categories": [
      {}
    ],
    "supportsRawSearch": true,
    "searchParams": [
      "q"
    ],
    "tvSearchParams": [
      "q"
    ],
    "movieSearchParams": [
      "q"
    ],
    "musicSearchParams": [
      "q"
    ],
    "bookSearchParams": [
      "q"
    ]
  },
  "priority": 0,
  "downloadClientId": 0,
  "added": "1970-01-01T00:00:00Z",
  "status": {
    "id": 0,
    "indexerId": 0,
    "disabledTill": "1970-01-01T00:00:00Z",
    "mostRecentFailure": "1970-01-01T00:00:00Z",
    "initialFailure": "1970-01-01T00:00:00Z"
  },
  "sortName": "string"
}
```

<h3 id="postapiv1indexertest-parameters">Parameters</h3>

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
|» indexerUrls|body|[string]|false|none|
|» legacyUrls|body|[string]|false|none|
|» definitionName|body|string \| null|false|none|
|» description|body|string \| null|false|none|
|» language|body|string \| null|false|none|
|» encoding|body|string \| null|false|none|
|» enable|body|boolean|false|none|
|» redirect|body|boolean|false|none|
|» supportsRss|body|boolean|false|none|
|» supportsSearch|body|boolean|false|none|
|» supportsRedirect|body|boolean|false|none|
|» supportsPagination|body|boolean|false|none|
|» appProfileId|body|integer(int32)|false|none|
|» protocol|body|[DownloadProtocol](#schemadownloadprotocol)|false|none|
|» privacy|body|[IndexerPrivacy](#schemaindexerprivacy)|false|none|
|» capabilities|body|[IndexerCapabilityResource](#schemaindexercapabilityresource)|false|none|
|» priority|body|integer(int32)|false|none|
|» downloadClientId|body|integer(int32)|false|none|
|» added|body|string(date-time)|false|none|
|» status|body|[IndexerStatusResource](#schemaindexerstatusresource)|false|none|
|» sortName|body|string \| null|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» protocol|unknown|
|» protocol|usenet|
|» protocol|torrent|
|» privacy|public|
|» privacy|semiPrivate|
|» privacy|private|

<h3 id="postapiv1indexertest-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## post/api/v1/indexer/testall

> Code samples

```bash
curl http://localhost:9696/api/v1/indexer/testall \
  -X POST \
  -H "X-Api-Key: ${API_KEY}"
```

`POST /api/v1/indexer/testall`

<h3 id="postapiv1indexertestall-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## post/api/v1/indexer/action/{name}

> Code samples

```bash
curl http://localhost:9696/api/v1/indexer/action/string \
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
            "parentValue": 0
          }
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
    "indexerUrls": [
      "string"
    ],
    "legacyUrls": [
      "string"
    ],
    "definitionName": "string",
    "description": "string",
    "language": "string",
    "encoding": "string",
    "enable": true,
    "redirect": true,
    "supportsRss": true,
    "supportsSearch": true,
    "supportsRedirect": true,
    "supportsPagination": true,
    "appProfileId": 0,
    "protocol": "unknown",
    "privacy": "public",
    "capabilities": {
      "id": 0,
      "limitsMax": 0,
      "limitsDefault": 0,
      "categories": [
        {}
      ],
      "supportsRawSearch": true,
      "searchParams": [
        "q"
      ],
      "tvSearchParams": [
        "q"
      ],
      "movieSearchParams": [
        "q"
      ],
      "musicSearchParams": [
        "q"
      ],
      "bookSearchParams": [
        "q"
      ]
    },
    "priority": 0,
    "downloadClientId": 0,
    "added": "1970-01-01T00:00:00Z",
    "status": {
      "id": 0,
      "indexerId": 0,
      "disabledTill": "1970-01-01T00:00:00Z",
      "mostRecentFailure": "1970-01-01T00:00:00Z",
      "initialFailure": "1970-01-01T00:00:00Z"
    },
    "sortName": "string"
  }'
```

`POST /api/v1/indexer/action/{name}`

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
          "parentValue": 0
        }
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
  "indexerUrls": [
    "string"
  ],
  "legacyUrls": [
    "string"
  ],
  "definitionName": "string",
  "description": "string",
  "language": "string",
  "encoding": "string",
  "enable": true,
  "redirect": true,
  "supportsRss": true,
  "supportsSearch": true,
  "supportsRedirect": true,
  "supportsPagination": true,
  "appProfileId": 0,
  "protocol": "unknown",
  "privacy": "public",
  "capabilities": {
    "id": 0,
    "limitsMax": 0,
    "limitsDefault": 0,
    "categories": [
      {}
    ],
    "supportsRawSearch": true,
    "searchParams": [
      "q"
    ],
    "tvSearchParams": [
      "q"
    ],
    "movieSearchParams": [
      "q"
    ],
    "musicSearchParams": [
      "q"
    ],
    "bookSearchParams": [
      "q"
    ]
  },
  "priority": 0,
  "downloadClientId": 0,
  "added": "1970-01-01T00:00:00Z",
  "status": {
    "id": 0,
    "indexerId": 0,
    "disabledTill": "1970-01-01T00:00:00Z",
    "mostRecentFailure": "1970-01-01T00:00:00Z",
    "initialFailure": "1970-01-01T00:00:00Z"
  },
  "sortName": "string"
}
```

<h3 id="postapiv1indexeractionname-parameters">Parameters</h3>

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
|» indexerUrls|body|[string]|false|none|
|» legacyUrls|body|[string]|false|none|
|» definitionName|body|string \| null|false|none|
|» description|body|string \| null|false|none|
|» language|body|string \| null|false|none|
|» encoding|body|string \| null|false|none|
|» enable|body|boolean|false|none|
|» redirect|body|boolean|false|none|
|» supportsRss|body|boolean|false|none|
|» supportsSearch|body|boolean|false|none|
|» supportsRedirect|body|boolean|false|none|
|» supportsPagination|body|boolean|false|none|
|» appProfileId|body|integer(int32)|false|none|
|» protocol|body|[DownloadProtocol](#schemadownloadprotocol)|false|none|
|» privacy|body|[IndexerPrivacy](#schemaindexerprivacy)|false|none|
|» capabilities|body|[IndexerCapabilityResource](#schemaindexercapabilityresource)|false|none|
|» priority|body|integer(int32)|false|none|
|» downloadClientId|body|integer(int32)|false|none|
|» added|body|string(date-time)|false|none|
|» status|body|[IndexerStatusResource](#schemaindexerstatusresource)|false|none|
|» sortName|body|string \| null|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» protocol|unknown|
|» protocol|usenet|
|» protocol|torrent|
|» privacy|public|
|» privacy|semiPrivate|
|» privacy|private|

<h3 id="postapiv1indexeractionname-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

<h1 id="prowlarr-indexerdefaultcategories">IndexerDefaultCategories</h1>

## get/api/v1/indexer/categories

> Code samples

```bash
curl http://localhost:9696/api/v1/indexer/categories \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /api/v1/indexer/categories`

> Example responses

> 200 Response

```json
[
  {
    "id": 0,
    "name": "string",
    "description": "string",
    "subCategories": [
      {}
    ]
  }
]
```

<h3 id="getapiv1indexercategories-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="getapiv1indexercategories-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[IndexerCategory](#schemaindexercategory)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

<h1 id="prowlarr-indexerproxy">IndexerProxy</h1>

## get/api/v1/indexerproxy/{id}

> Code samples

```bash
curl http://localhost:9696/api/v1/indexerproxy/0 \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /api/v1/indexerproxy/{id}`

<h3 id="getapiv1indexerproxyid-parameters">Parameters</h3>

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
          "parentValue": 0
        }
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
  "onHealthIssue": true,
  "supportsOnHealthIssue": true,
  "includeHealthWarnings": true,
  "testCommand": "string"
}
```

<h3 id="getapiv1indexerproxyid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[IndexerProxyResource](#schemaindexerproxyresource)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## put/api/v1/indexerproxy/{id}

> Code samples

```bash
curl http://localhost:9696/api/v1/indexerproxy/string \
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
            "parentValue": 0
          }
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
    "onHealthIssue": true,
    "supportsOnHealthIssue": true,
    "includeHealthWarnings": true,
    "testCommand": "string"
  }'
```

`PUT /api/v1/indexerproxy/{id}`

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
          "parentValue": 0
        }
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
  "onHealthIssue": true,
  "supportsOnHealthIssue": true,
  "includeHealthWarnings": true,
  "testCommand": "string"
}
```

<h3 id="putapiv1indexerproxyid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|forceSave|query|boolean|false|none|
|id|path|string|true|none|
|body|body|[IndexerProxyResource](#schemaindexerproxyresource)|false|none|
|» id|body|integer(int32)|false|none|
|» name|body|string \| null|false|none|
|» fields|body|[[Field](#schemafield)]|false|none|
|» implementationName|body|string \| null|false|none|
|» implementation|body|string \| null|false|none|
|» configContract|body|string \| null|false|none|
|» infoLink|body|string \| null|false|none|
|» message|body|[ProviderMessage](#schemaprovidermessage)|false|none|
|» tags|body|[integer(int32)]|false|none|
|» presets|body|[[IndexerProxyResource](#schemaindexerproxyresource)]|false|none|
|» link|body|string \| null|false|none|
|» onHealthIssue|body|boolean|false|none|
|» supportsOnHealthIssue|body|boolean|false|none|
|» includeHealthWarnings|body|boolean|false|none|
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
          "hint": "string",
          "parentValue": 0
        }
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
  "onHealthIssue": true,
  "supportsOnHealthIssue": true,
  "includeHealthWarnings": true,
  "testCommand": "string"
}
```

<h3 id="putapiv1indexerproxyid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[IndexerProxyResource](#schemaindexerproxyresource)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## delete/api/v1/indexerproxy/{id}

> Code samples

```bash
curl http://localhost:9696/api/v1/indexerproxy/0 \
  -X DELETE \
  -H "X-Api-Key: ${API_KEY}"
```

`DELETE /api/v1/indexerproxy/{id}`

<h3 id="deleteapiv1indexerproxyid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|none|

<h3 id="deleteapiv1indexerproxyid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## get/api/v1/indexerproxy

> Code samples

```bash
curl http://localhost:9696/api/v1/indexerproxy \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /api/v1/indexerproxy`

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
            "parentValue": 0
          }
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
    "onHealthIssue": true,
    "supportsOnHealthIssue": true,
    "includeHealthWarnings": true,
    "testCommand": "string"
  }
]
```

<h3 id="getapiv1indexerproxy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="getapiv1indexerproxy-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[IndexerProxyResource](#schemaindexerproxyresource)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## post/api/v1/indexerproxy

> Code samples

```bash
curl http://localhost:9696/api/v1/indexerproxy \
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
            "parentValue": 0
          }
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
    "onHealthIssue": true,
    "supportsOnHealthIssue": true,
    "includeHealthWarnings": true,
    "testCommand": "string"
  }'
```

`POST /api/v1/indexerproxy`

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
          "parentValue": 0
        }
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
  "onHealthIssue": true,
  "supportsOnHealthIssue": true,
  "includeHealthWarnings": true,
  "testCommand": "string"
}
```

<h3 id="postapiv1indexerproxy-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|forceSave|query|boolean|false|none|
|body|body|[IndexerProxyResource](#schemaindexerproxyresource)|false|none|
|» id|body|integer(int32)|false|none|
|» name|body|string \| null|false|none|
|» fields|body|[[Field](#schemafield)]|false|none|
|» implementationName|body|string \| null|false|none|
|» implementation|body|string \| null|false|none|
|» configContract|body|string \| null|false|none|
|» infoLink|body|string \| null|false|none|
|» message|body|[ProviderMessage](#schemaprovidermessage)|false|none|
|» tags|body|[integer(int32)]|false|none|
|» presets|body|[[IndexerProxyResource](#schemaindexerproxyresource)]|false|none|
|» link|body|string \| null|false|none|
|» onHealthIssue|body|boolean|false|none|
|» supportsOnHealthIssue|body|boolean|false|none|
|» includeHealthWarnings|body|boolean|false|none|
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
          "hint": "string",
          "parentValue": 0
        }
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
  "onHealthIssue": true,
  "supportsOnHealthIssue": true,
  "includeHealthWarnings": true,
  "testCommand": "string"
}
```

<h3 id="postapiv1indexerproxy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[IndexerProxyResource](#schemaindexerproxyresource)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## get/api/v1/indexerproxy/schema

> Code samples

```bash
curl http://localhost:9696/api/v1/indexerproxy/schema \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /api/v1/indexerproxy/schema`

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
            "parentValue": 0
          }
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
    "onHealthIssue": true,
    "supportsOnHealthIssue": true,
    "includeHealthWarnings": true,
    "testCommand": "string"
  }
]
```

<h3 id="getapiv1indexerproxyschema-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="getapiv1indexerproxyschema-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[IndexerProxyResource](#schemaindexerproxyresource)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## post/api/v1/indexerproxy/test

> Code samples

```bash
curl http://localhost:9696/api/v1/indexerproxy/test \
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
            "parentValue": 0
          }
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
    "onHealthIssue": true,
    "supportsOnHealthIssue": true,
    "includeHealthWarnings": true,
    "testCommand": "string"
  }'
```

`POST /api/v1/indexerproxy/test`

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
          "parentValue": 0
        }
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
  "onHealthIssue": true,
  "supportsOnHealthIssue": true,
  "includeHealthWarnings": true,
  "testCommand": "string"
}
```

<h3 id="postapiv1indexerproxytest-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|forceTest|query|boolean|false|none|
|body|body|[IndexerProxyResource](#schemaindexerproxyresource)|false|none|
|» id|body|integer(int32)|false|none|
|» name|body|string \| null|false|none|
|» fields|body|[[Field](#schemafield)]|false|none|
|» implementationName|body|string \| null|false|none|
|» implementation|body|string \| null|false|none|
|» configContract|body|string \| null|false|none|
|» infoLink|body|string \| null|false|none|
|» message|body|[ProviderMessage](#schemaprovidermessage)|false|none|
|» tags|body|[integer(int32)]|false|none|
|» presets|body|[[IndexerProxyResource](#schemaindexerproxyresource)]|false|none|
|» link|body|string \| null|false|none|
|» onHealthIssue|body|boolean|false|none|
|» supportsOnHealthIssue|body|boolean|false|none|
|» includeHealthWarnings|body|boolean|false|none|
|» testCommand|body|string \| null|false|none|

<h3 id="postapiv1indexerproxytest-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## post/api/v1/indexerproxy/testall

> Code samples

```bash
curl http://localhost:9696/api/v1/indexerproxy/testall \
  -X POST \
  -H "X-Api-Key: ${API_KEY}"
```

`POST /api/v1/indexerproxy/testall`

<h3 id="postapiv1indexerproxytestall-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## post/api/v1/indexerproxy/action/{name}

> Code samples

```bash
curl http://localhost:9696/api/v1/indexerproxy/action/string \
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
            "parentValue": 0
          }
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
    "onHealthIssue": true,
    "supportsOnHealthIssue": true,
    "includeHealthWarnings": true,
    "testCommand": "string"
  }'
```

`POST /api/v1/indexerproxy/action/{name}`

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
          "parentValue": 0
        }
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
  "onHealthIssue": true,
  "supportsOnHealthIssue": true,
  "includeHealthWarnings": true,
  "testCommand": "string"
}
```

<h3 id="postapiv1indexerproxyactionname-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|none|
|body|body|[IndexerProxyResource](#schemaindexerproxyresource)|false|none|
|» id|body|integer(int32)|false|none|
|» name|body|string \| null|false|none|
|» fields|body|[[Field](#schemafield)]|false|none|
|» implementationName|body|string \| null|false|none|
|» implementation|body|string \| null|false|none|
|» configContract|body|string \| null|false|none|
|» infoLink|body|string \| null|false|none|
|» message|body|[ProviderMessage](#schemaprovidermessage)|false|none|
|» tags|body|[integer(int32)]|false|none|
|» presets|body|[[IndexerProxyResource](#schemaindexerproxyresource)]|false|none|
|» link|body|string \| null|false|none|
|» onHealthIssue|body|boolean|false|none|
|» supportsOnHealthIssue|body|boolean|false|none|
|» includeHealthWarnings|body|boolean|false|none|
|» testCommand|body|string \| null|false|none|

<h3 id="postapiv1indexerproxyactionname-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

<h1 id="prowlarr-indexerstats">IndexerStats</h1>

## get/api/v1/indexerstats

> Code samples

```bash
curl http://localhost:9696/api/v1/indexerstats \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /api/v1/indexerstats`

<h3 id="getapiv1indexerstats-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|startDate|query|string(date-time)|false|none|
|endDate|query|string(date-time)|false|none|
|indexers|query|string|false|none|
|protocols|query|string|false|none|
|tags|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "indexers": [
    {
      "indexerId": 0,
      "indexerName": "string",
      "averageResponseTime": 0,
      "averageGrabResponseTime": 0,
      "numberOfQueries": 0,
      "numberOfGrabs": 0,
      "numberOfRssQueries": 0,
      "numberOfAuthQueries": 0,
      "numberOfFailedQueries": 0,
      "numberOfFailedGrabs": 0,
      "numberOfFailedRssQueries": 0,
      "numberOfFailedAuthQueries": 0
    }
  ],
  "userAgents": [
    {
      "userAgent": "string",
      "numberOfQueries": 0,
      "numberOfGrabs": 0
    }
  ],
  "hosts": [
    {
      "host": "string",
      "numberOfQueries": 0,
      "numberOfGrabs": 0
    }
  ]
}
```

<h3 id="getapiv1indexerstats-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[IndexerStatsResource](#schemaindexerstatsresource)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

<h1 id="prowlarr-indexerstatus">IndexerStatus</h1>

## get/api/v1/indexerstatus

> Code samples

```bash
curl http://localhost:9696/api/v1/indexerstatus \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /api/v1/indexerstatus`

> Example responses

> 200 Response

```json
[
  {
    "id": 0,
    "indexerId": 0,
    "disabledTill": "1970-01-01T00:00:00Z",
    "mostRecentFailure": "1970-01-01T00:00:00Z",
    "initialFailure": "1970-01-01T00:00:00Z"
  }
]
```

<h3 id="getapiv1indexerstatus-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="getapiv1indexerstatus-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[IndexerStatusResource](#schemaindexerstatusresource)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

<h1 id="prowlarr-localization">Localization</h1>

## get/api/v1/localization

> Code samples

```bash
curl http://localhost:9696/api/v1/localization \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /api/v1/localization`

<h3 id="getapiv1localization-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## get/api/v1/localization/options

> Code samples

```bash
curl http://localhost:9696/api/v1/localization/options \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /api/v1/localization/options`

> Example responses

> 200 Response

```json
[
  {
    "name": "string",
    "value": "string"
  }
]
```

<h3 id="getapiv1localizationoptions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="getapiv1localizationoptions-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[LocalizationOption](#schemalocalizationoption)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

<h1 id="prowlarr-log">Log</h1>

## get/api/v1/log

> Code samples

```bash
curl http://localhost:9696/api/v1/log \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /api/v1/log`

<h3 id="getapiv1log-parameters">Parameters</h3>

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

<h3 id="getapiv1log-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[LogResourcePagingResource](#schemalogresourcepagingresource)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

<h1 id="prowlarr-logfile">LogFile</h1>

## get/api/v1/log/file

> Code samples

```bash
curl http://localhost:9696/api/v1/log/file \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /api/v1/log/file`

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

<h3 id="getapiv1logfile-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="getapiv1logfile-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[LogFileResource](#schemalogfileresource)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## get/api/v1/log/file/{filename}

> Code samples

```bash
curl http://localhost:9696/api/v1/log/file/string \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /api/v1/log/file/{filename}`

<h3 id="getapiv1logfilefilename-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|filename|path|string|true|none|

<h3 id="getapiv1logfilefilename-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[IActionResult](#schemaiactionresult)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

<h1 id="prowlarr-newznab">Newznab</h1>

## get/api/v1/indexer/{id}/newznab

> Code samples

```bash
curl http://localhost:9696/api/v1/indexer/0/newznab \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /api/v1/indexer/{id}/newznab`

<h3 id="getapiv1indexeridnewznab-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|none|
|t|query|string|false|none|
|q|query|string|false|none|
|cat|query|string|false|none|
|imdbid|query|string|false|none|
|tmdbid|query|integer(int32)|false|none|
|extended|query|string|false|none|
|limit|query|integer(int32)|false|none|
|offset|query|integer(int32)|false|none|
|minage|query|integer(int32)|false|none|
|maxage|query|integer(int32)|false|none|
|minsize|query|integer(int64)|false|none|
|maxsize|query|integer(int64)|false|none|
|rid|query|integer(int32)|false|none|
|tvmazeid|query|integer(int32)|false|none|
|traktid|query|integer(int32)|false|none|
|tvdbid|query|integer(int32)|false|none|
|doubanid|query|integer(int32)|false|none|
|season|query|integer(int32)|false|none|
|ep|query|string|false|none|
|album|query|string|false|none|
|artist|query|string|false|none|
|label|query|string|false|none|
|track|query|string|false|none|
|year|query|integer(int32)|false|none|
|genre|query|string|false|none|
|author|query|string|false|none|
|title|query|string|false|none|
|publisher|query|string|false|none|
|configured|query|string|false|none|
|source|query|string|false|none|
|host|query|string|false|none|
|server|query|string|false|none|

<h3 id="getapiv1indexeridnewznab-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## get/{id}/api

> Code samples

```bash
curl http://localhost:9696/0/api \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /{id}/api`

<h3 id="getidapi-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|none|
|t|query|string|false|none|
|q|query|string|false|none|
|cat|query|string|false|none|
|imdbid|query|string|false|none|
|tmdbid|query|integer(int32)|false|none|
|extended|query|string|false|none|
|limit|query|integer(int32)|false|none|
|offset|query|integer(int32)|false|none|
|minage|query|integer(int32)|false|none|
|maxage|query|integer(int32)|false|none|
|minsize|query|integer(int64)|false|none|
|maxsize|query|integer(int64)|false|none|
|rid|query|integer(int32)|false|none|
|tvmazeid|query|integer(int32)|false|none|
|traktid|query|integer(int32)|false|none|
|tvdbid|query|integer(int32)|false|none|
|doubanid|query|integer(int32)|false|none|
|season|query|integer(int32)|false|none|
|ep|query|string|false|none|
|album|query|string|false|none|
|artist|query|string|false|none|
|label|query|string|false|none|
|track|query|string|false|none|
|year|query|integer(int32)|false|none|
|genre|query|string|false|none|
|author|query|string|false|none|
|title|query|string|false|none|
|publisher|query|string|false|none|
|configured|query|string|false|none|
|source|query|string|false|none|
|host|query|string|false|none|
|server|query|string|false|none|

<h3 id="getidapi-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## get/api/v1/indexer/{id}/download

> Code samples

```bash
curl http://localhost:9696/api/v1/indexer/0/download \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /api/v1/indexer/{id}/download`

<h3 id="getapiv1indexeriddownload-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|none|
|link|query|string|false|none|
|file|query|string|false|none|

<h3 id="getapiv1indexeriddownload-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## get/{id}/download

> Code samples

```bash
curl http://localhost:9696/0/download \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /{id}/download`

<h3 id="getiddownload-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|none|
|link|query|string|false|none|
|file|query|string|false|none|

<h3 id="getiddownload-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

<h1 id="prowlarr-notification">Notification</h1>

## get/api/v1/notification/{id}

> Code samples

```bash
curl http://localhost:9696/api/v1/notification/0 \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /api/v1/notification/{id}`

<h3 id="getapiv1notificationid-parameters">Parameters</h3>

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
          "parentValue": 0
        }
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
  "onHealthIssue": true,
  "onHealthRestored": true,
  "onApplicationUpdate": true,
  "supportsOnGrab": true,
  "includeManualGrabs": true,
  "supportsOnHealthIssue": true,
  "supportsOnHealthRestored": true,
  "includeHealthWarnings": true,
  "supportsOnApplicationUpdate": true,
  "testCommand": "string"
}
```

<h3 id="getapiv1notificationid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[NotificationResource](#schemanotificationresource)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## put/api/v1/notification/{id}

> Code samples

```bash
curl http://localhost:9696/api/v1/notification/string \
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
            "parentValue": 0
          }
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
    "onHealthIssue": true,
    "onHealthRestored": true,
    "onApplicationUpdate": true,
    "supportsOnGrab": true,
    "includeManualGrabs": true,
    "supportsOnHealthIssue": true,
    "supportsOnHealthRestored": true,
    "includeHealthWarnings": true,
    "supportsOnApplicationUpdate": true,
    "testCommand": "string"
  }'
```

`PUT /api/v1/notification/{id}`

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
          "parentValue": 0
        }
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
  "onHealthIssue": true,
  "onHealthRestored": true,
  "onApplicationUpdate": true,
  "supportsOnGrab": true,
  "includeManualGrabs": true,
  "supportsOnHealthIssue": true,
  "supportsOnHealthRestored": true,
  "includeHealthWarnings": true,
  "supportsOnApplicationUpdate": true,
  "testCommand": "string"
}
```

<h3 id="putapiv1notificationid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|forceSave|query|boolean|false|none|
|id|path|string|true|none|
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
|» onHealthIssue|body|boolean|false|none|
|» onHealthRestored|body|boolean|false|none|
|» onApplicationUpdate|body|boolean|false|none|
|» supportsOnGrab|body|boolean|false|none|
|» includeManualGrabs|body|boolean|false|none|
|» supportsOnHealthIssue|body|boolean|false|none|
|» supportsOnHealthRestored|body|boolean|false|none|
|» includeHealthWarnings|body|boolean|false|none|
|» supportsOnApplicationUpdate|body|boolean|false|none|
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
          "hint": "string",
          "parentValue": 0
        }
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
  "onHealthIssue": true,
  "onHealthRestored": true,
  "onApplicationUpdate": true,
  "supportsOnGrab": true,
  "includeManualGrabs": true,
  "supportsOnHealthIssue": true,
  "supportsOnHealthRestored": true,
  "includeHealthWarnings": true,
  "supportsOnApplicationUpdate": true,
  "testCommand": "string"
}
```

<h3 id="putapiv1notificationid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[NotificationResource](#schemanotificationresource)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## delete/api/v1/notification/{id}

> Code samples

```bash
curl http://localhost:9696/api/v1/notification/0 \
  -X DELETE \
  -H "X-Api-Key: ${API_KEY}"
```

`DELETE /api/v1/notification/{id}`

<h3 id="deleteapiv1notificationid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|none|

<h3 id="deleteapiv1notificationid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## get/api/v1/notification

> Code samples

```bash
curl http://localhost:9696/api/v1/notification \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /api/v1/notification`

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
            "parentValue": 0
          }
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
    "onHealthIssue": true,
    "onHealthRestored": true,
    "onApplicationUpdate": true,
    "supportsOnGrab": true,
    "includeManualGrabs": true,
    "supportsOnHealthIssue": true,
    "supportsOnHealthRestored": true,
    "includeHealthWarnings": true,
    "supportsOnApplicationUpdate": true,
    "testCommand": "string"
  }
]
```

<h3 id="getapiv1notification-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="getapiv1notification-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[NotificationResource](#schemanotificationresource)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## post/api/v1/notification

> Code samples

```bash
curl http://localhost:9696/api/v1/notification \
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
            "parentValue": 0
          }
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
    "onHealthIssue": true,
    "onHealthRestored": true,
    "onApplicationUpdate": true,
    "supportsOnGrab": true,
    "includeManualGrabs": true,
    "supportsOnHealthIssue": true,
    "supportsOnHealthRestored": true,
    "includeHealthWarnings": true,
    "supportsOnApplicationUpdate": true,
    "testCommand": "string"
  }'
```

`POST /api/v1/notification`

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
          "parentValue": 0
        }
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
  "onHealthIssue": true,
  "onHealthRestored": true,
  "onApplicationUpdate": true,
  "supportsOnGrab": true,
  "includeManualGrabs": true,
  "supportsOnHealthIssue": true,
  "supportsOnHealthRestored": true,
  "includeHealthWarnings": true,
  "supportsOnApplicationUpdate": true,
  "testCommand": "string"
}
```

<h3 id="postapiv1notification-parameters">Parameters</h3>

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
|» onHealthIssue|body|boolean|false|none|
|» onHealthRestored|body|boolean|false|none|
|» onApplicationUpdate|body|boolean|false|none|
|» supportsOnGrab|body|boolean|false|none|
|» includeManualGrabs|body|boolean|false|none|
|» supportsOnHealthIssue|body|boolean|false|none|
|» supportsOnHealthRestored|body|boolean|false|none|
|» includeHealthWarnings|body|boolean|false|none|
|» supportsOnApplicationUpdate|body|boolean|false|none|
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
          "hint": "string",
          "parentValue": 0
        }
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
  "onHealthIssue": true,
  "onHealthRestored": true,
  "onApplicationUpdate": true,
  "supportsOnGrab": true,
  "includeManualGrabs": true,
  "supportsOnHealthIssue": true,
  "supportsOnHealthRestored": true,
  "includeHealthWarnings": true,
  "supportsOnApplicationUpdate": true,
  "testCommand": "string"
}
```

<h3 id="postapiv1notification-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[NotificationResource](#schemanotificationresource)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## get/api/v1/notification/schema

> Code samples

```bash
curl http://localhost:9696/api/v1/notification/schema \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /api/v1/notification/schema`

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
            "parentValue": 0
          }
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
    "onHealthIssue": true,
    "onHealthRestored": true,
    "onApplicationUpdate": true,
    "supportsOnGrab": true,
    "includeManualGrabs": true,
    "supportsOnHealthIssue": true,
    "supportsOnHealthRestored": true,
    "includeHealthWarnings": true,
    "supportsOnApplicationUpdate": true,
    "testCommand": "string"
  }
]
```

<h3 id="getapiv1notificationschema-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="getapiv1notificationschema-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[NotificationResource](#schemanotificationresource)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## post/api/v1/notification/test

> Code samples

```bash
curl http://localhost:9696/api/v1/notification/test \
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
            "parentValue": 0
          }
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
    "onHealthIssue": true,
    "onHealthRestored": true,
    "onApplicationUpdate": true,
    "supportsOnGrab": true,
    "includeManualGrabs": true,
    "supportsOnHealthIssue": true,
    "supportsOnHealthRestored": true,
    "includeHealthWarnings": true,
    "supportsOnApplicationUpdate": true,
    "testCommand": "string"
  }'
```

`POST /api/v1/notification/test`

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
          "parentValue": 0
        }
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
  "onHealthIssue": true,
  "onHealthRestored": true,
  "onApplicationUpdate": true,
  "supportsOnGrab": true,
  "includeManualGrabs": true,
  "supportsOnHealthIssue": true,
  "supportsOnHealthRestored": true,
  "includeHealthWarnings": true,
  "supportsOnApplicationUpdate": true,
  "testCommand": "string"
}
```

<h3 id="postapiv1notificationtest-parameters">Parameters</h3>

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
|» onHealthIssue|body|boolean|false|none|
|» onHealthRestored|body|boolean|false|none|
|» onApplicationUpdate|body|boolean|false|none|
|» supportsOnGrab|body|boolean|false|none|
|» includeManualGrabs|body|boolean|false|none|
|» supportsOnHealthIssue|body|boolean|false|none|
|» supportsOnHealthRestored|body|boolean|false|none|
|» includeHealthWarnings|body|boolean|false|none|
|» supportsOnApplicationUpdate|body|boolean|false|none|
|» testCommand|body|string \| null|false|none|

<h3 id="postapiv1notificationtest-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## post/api/v1/notification/testall

> Code samples

```bash
curl http://localhost:9696/api/v1/notification/testall \
  -X POST \
  -H "X-Api-Key: ${API_KEY}"
```

`POST /api/v1/notification/testall`

<h3 id="postapiv1notificationtestall-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## post/api/v1/notification/action/{name}

> Code samples

```bash
curl http://localhost:9696/api/v1/notification/action/string \
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
            "parentValue": 0
          }
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
    "onHealthIssue": true,
    "onHealthRestored": true,
    "onApplicationUpdate": true,
    "supportsOnGrab": true,
    "includeManualGrabs": true,
    "supportsOnHealthIssue": true,
    "supportsOnHealthRestored": true,
    "includeHealthWarnings": true,
    "supportsOnApplicationUpdate": true,
    "testCommand": "string"
  }'
```

`POST /api/v1/notification/action/{name}`

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
          "parentValue": 0
        }
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
  "onHealthIssue": true,
  "onHealthRestored": true,
  "onApplicationUpdate": true,
  "supportsOnGrab": true,
  "includeManualGrabs": true,
  "supportsOnHealthIssue": true,
  "supportsOnHealthRestored": true,
  "includeHealthWarnings": true,
  "supportsOnApplicationUpdate": true,
  "testCommand": "string"
}
```

<h3 id="postapiv1notificationactionname-parameters">Parameters</h3>

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
|» onHealthIssue|body|boolean|false|none|
|» onHealthRestored|body|boolean|false|none|
|» onApplicationUpdate|body|boolean|false|none|
|» supportsOnGrab|body|boolean|false|none|
|» includeManualGrabs|body|boolean|false|none|
|» supportsOnHealthIssue|body|boolean|false|none|
|» supportsOnHealthRestored|body|boolean|false|none|
|» includeHealthWarnings|body|boolean|false|none|
|» supportsOnApplicationUpdate|body|boolean|false|none|
|» testCommand|body|string \| null|false|none|

<h3 id="postapiv1notificationactionname-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

<h1 id="prowlarr-ping">Ping</h1>

## get/ping

> Code samples

```bash
curl http://localhost:9696/ping \
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

<h3 id="getping-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[PingResource](#schemapingresource)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## head/ping

> Code samples

```bash
curl http://localhost:9696/ping \
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

<h3 id="headping-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[PingResource](#schemapingresource)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

<h1 id="prowlarr-search">Search</h1>

## get/api/v1/search

> Code samples

```bash
curl http://localhost:9696/api/v1/search \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /api/v1/search`

<h3 id="getapiv1search-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|query|query|string|false|none|
|type|query|string|false|none|
|indexerIds|query|[integer(int32)]|false|none|
|categories|query|[integer(int32)]|false|none|
|limit|query|integer(int32)|false|none|
|offset|query|integer(int32)|false|none|

> Example responses

> 200 Response

```json
[
  {
    "id": 0,
    "guid": "string",
    "age": 0,
    "ageHours": 0,
    "ageMinutes": 0,
    "size": 0,
    "files": 0,
    "grabs": 0,
    "indexerId": 0,
    "indexer": "string",
    "subGroup": "string",
    "releaseHash": "string",
    "title": "string",
    "sortTitle": "string",
    "imdbId": 0,
    "tmdbId": 0,
    "tvdbId": 0,
    "tvMazeId": 0,
    "publishDate": "1970-01-01T00:00:00Z",
    "commentUrl": "string",
    "downloadUrl": "string",
    "infoUrl": "string",
    "posterUrl": "string",
    "indexerFlags": [
      "string"
    ],
    "categories": [
      {
        "id": 0,
        "name": "string",
        "description": "string",
        "subCategories": [
          {}
        ]
      }
    ],
    "magnetUrl": "string",
    "infoHash": "string",
    "seeders": 0,
    "leechers": 0,
    "protocol": "unknown",
    "fileName": "string",
    "downloadClientId": 0
  }
]
```

<h3 id="getapiv1search-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="getapiv1search-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[ReleaseResource](#schemareleaseresource)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## post/api/v1/search

> Code samples

```bash
curl http://localhost:9696/api/v1/search \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}" \
  -d '{
    "id": 0,
    "guid": "string",
    "age": 0,
    "ageHours": 0,
    "ageMinutes": 0,
    "size": 0,
    "files": 0,
    "grabs": 0,
    "indexerId": 0,
    "indexer": "string",
    "subGroup": "string",
    "releaseHash": "string",
    "title": "string",
    "sortTitle": "string",
    "imdbId": 0,
    "tmdbId": 0,
    "tvdbId": 0,
    "tvMazeId": 0,
    "publishDate": "1970-01-01T00:00:00Z",
    "commentUrl": "string",
    "downloadUrl": "string",
    "infoUrl": "string",
    "posterUrl": "string",
    "indexerFlags": [
      "string"
    ],
    "categories": [
      {
        "id": 0,
        "name": "string",
        "description": "string"
      }
    ],
    "magnetUrl": "string",
    "infoHash": "string",
    "seeders": 0,
    "leechers": 0,
    "protocol": "unknown",
    "downloadClientId": 0
  }'
```

`POST /api/v1/search`

> Body parameter

```json
{
  "id": 0,
  "guid": "string",
  "age": 0,
  "ageHours": 0,
  "ageMinutes": 0,
  "size": 0,
  "files": 0,
  "grabs": 0,
  "indexerId": 0,
  "indexer": "string",
  "subGroup": "string",
  "releaseHash": "string",
  "title": "string",
  "sortTitle": "string",
  "imdbId": 0,
  "tmdbId": 0,
  "tvdbId": 0,
  "tvMazeId": 0,
  "publishDate": "1970-01-01T00:00:00Z",
  "commentUrl": "string",
  "downloadUrl": "string",
  "infoUrl": "string",
  "posterUrl": "string",
  "indexerFlags": [
    "string"
  ],
  "categories": [
    {
      "id": 0,
      "name": "string",
      "description": "string"
    }
  ],
  "magnetUrl": "string",
  "infoHash": "string",
  "seeders": 0,
  "leechers": 0,
  "protocol": "unknown",
  "downloadClientId": 0
}
```

<h3 id="postapiv1search-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[ReleaseResource](#schemareleaseresource)|false|none|
|» id|body|integer(int32)|false|none|
|» guid|body|string \| null|false|none|
|» age|body|integer(int32)|false|none|
|» ageHours|body|number(double)|false|none|
|» ageMinutes|body|number(double)|false|none|
|» size|body|integer(int64)|false|none|
|» files|body|integer(int32) \| null|false|none|
|» grabs|body|integer(int32) \| null|false|none|
|» indexerId|body|integer(int32)|false|none|
|» indexer|body|string \| null|false|none|
|» subGroup|body|string \| null|false|none|
|» releaseHash|body|string \| null|false|none|
|» title|body|string \| null|false|none|
|» sortTitle|body|string \| null|false|none|
|» imdbId|body|integer(int32)|false|none|
|» tmdbId|body|integer(int32)|false|none|
|» tvdbId|body|integer(int32)|false|none|
|» tvMazeId|body|integer(int32)|false|none|
|» publishDate|body|string(date-time)|false|none|
|» commentUrl|body|string \| null|false|none|
|» downloadUrl|body|string \| null|false|none|
|» infoUrl|body|string \| null|false|none|
|» posterUrl|body|string \| null|false|none|
|» indexerFlags|body|[string]|false|none|
|» categories|body|[[IndexerCategory](#schemaindexercategory)]|false|none|
|» magnetUrl|body|string \| null|false|none|
|» infoHash|body|string \| null|false|none|
|» seeders|body|integer(int32) \| null|false|none|
|» leechers|body|integer(int32) \| null|false|none|
|» protocol|body|[DownloadProtocol](#schemadownloadprotocol)|false|none|
|» downloadClientId|body|integer(int32) \| null|false|none|

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
  "age": 0,
  "ageHours": 0,
  "ageMinutes": 0,
  "size": 0,
  "files": 0,
  "grabs": 0,
  "indexerId": 0,
  "indexer": "string",
  "subGroup": "string",
  "releaseHash": "string",
  "title": "string",
  "sortTitle": "string",
  "imdbId": 0,
  "tmdbId": 0,
  "tvdbId": 0,
  "tvMazeId": 0,
  "publishDate": "1970-01-01T00:00:00Z",
  "commentUrl": "string",
  "downloadUrl": "string",
  "infoUrl": "string",
  "posterUrl": "string",
  "indexerFlags": [
    "string"
  ],
  "categories": [
    {
      "id": 0,
      "name": "string",
      "description": "string",
      "subCategories": [
        {}
      ]
    }
  ],
  "magnetUrl": "string",
  "infoHash": "string",
  "seeders": 0,
  "leechers": 0,
  "protocol": "unknown",
  "fileName": "string",
  "downloadClientId": 0
}
```

<h3 id="postapiv1search-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[ReleaseResource](#schemareleaseresource)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## post/api/v1/search/bulk

> Code samples

```bash
curl http://localhost:9696/api/v1/search/bulk \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}" \
  -d '[
    {
      "id": 0,
      "guid": "string",
      "age": 0,
      "ageHours": 0,
      "ageMinutes": 0,
      "size": 0,
      "files": 0,
      "grabs": 0,
      "indexerId": 0,
      "indexer": "string",
      "subGroup": "string",
      "releaseHash": "string",
      "title": "string",
      "sortTitle": "string",
      "imdbId": 0,
      "tmdbId": 0,
      "tvdbId": 0,
      "tvMazeId": 0,
      "publishDate": "1970-01-01T00:00:00Z",
      "commentUrl": "string",
      "downloadUrl": "string",
      "infoUrl": "string",
      "posterUrl": "string",
      "indexerFlags": [
        "string"
      ],
      "categories": [
        {
          "id": 0,
          "name": "string",
          "description": "string"
        }
      ],
      "magnetUrl": "string",
      "infoHash": "string",
      "seeders": 0,
      "leechers": 0,
      "protocol": "unknown",
      "downloadClientId": 0
    }
  ]'
```

`POST /api/v1/search/bulk`

> Body parameter

```json
[
  {
    "id": 0,
    "guid": "string",
    "age": 0,
    "ageHours": 0,
    "ageMinutes": 0,
    "size": 0,
    "files": 0,
    "grabs": 0,
    "indexerId": 0,
    "indexer": "string",
    "subGroup": "string",
    "releaseHash": "string",
    "title": "string",
    "sortTitle": "string",
    "imdbId": 0,
    "tmdbId": 0,
    "tvdbId": 0,
    "tvMazeId": 0,
    "publishDate": "1970-01-01T00:00:00Z",
    "commentUrl": "string",
    "downloadUrl": "string",
    "infoUrl": "string",
    "posterUrl": "string",
    "indexerFlags": [
      "string"
    ],
    "categories": [
      {
        "id": 0,
        "name": "string",
        "description": "string"
      }
    ],
    "magnetUrl": "string",
    "infoHash": "string",
    "seeders": 0,
    "leechers": 0,
    "protocol": "unknown",
    "downloadClientId": 0
  }
]
```

<h3 id="postapiv1searchbulk-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[[ReleaseResource](#schemareleaseresource)]|false|none|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "guid": "string",
  "age": 0,
  "ageHours": 0,
  "ageMinutes": 0,
  "size": 0,
  "files": 0,
  "grabs": 0,
  "indexerId": 0,
  "indexer": "string",
  "subGroup": "string",
  "releaseHash": "string",
  "title": "string",
  "sortTitle": "string",
  "imdbId": 0,
  "tmdbId": 0,
  "tvdbId": 0,
  "tvMazeId": 0,
  "publishDate": "1970-01-01T00:00:00Z",
  "commentUrl": "string",
  "downloadUrl": "string",
  "infoUrl": "string",
  "posterUrl": "string",
  "indexerFlags": [
    "string"
  ],
  "categories": [
    {
      "id": 0,
      "name": "string",
      "description": "string",
      "subCategories": [
        {}
      ]
    }
  ],
  "magnetUrl": "string",
  "infoHash": "string",
  "seeders": 0,
  "leechers": 0,
  "protocol": "unknown",
  "fileName": "string",
  "downloadClientId": 0
}
```

<h3 id="postapiv1searchbulk-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[ReleaseResource](#schemareleaseresource)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

<h1 id="prowlarr-system">System</h1>

## get/api/v1/system/status

> Code samples

```bash
curl http://localhost:9696/api/v1/system/status \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /api/v1/system/status`

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

<h3 id="getapiv1systemstatus-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[SystemResource](#schemasystemresource)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## get/api/v1/system/routes

> Code samples

```bash
curl http://localhost:9696/api/v1/system/routes \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /api/v1/system/routes`

<h3 id="getapiv1systemroutes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## get/api/v1/system/routes/duplicate

> Code samples

```bash
curl http://localhost:9696/api/v1/system/routes/duplicate \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /api/v1/system/routes/duplicate`

<h3 id="getapiv1systemroutesduplicate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## post/api/v1/system/shutdown

> Code samples

```bash
curl http://localhost:9696/api/v1/system/shutdown \
  -X POST \
  -H "X-Api-Key: ${API_KEY}"
```

`POST /api/v1/system/shutdown`

<h3 id="postapiv1systemshutdown-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## post/api/v1/system/restart

> Code samples

```bash
curl http://localhost:9696/api/v1/system/restart \
  -X POST \
  -H "X-Api-Key: ${API_KEY}"
```

`POST /api/v1/system/restart`

<h3 id="postapiv1systemrestart-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

<h1 id="prowlarr-tag">Tag</h1>

## get/api/v1/tag/{id}

> Code samples

```bash
curl http://localhost:9696/api/v1/tag/0 \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /api/v1/tag/{id}`

<h3 id="getapiv1tagid-parameters">Parameters</h3>

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

<h3 id="getapiv1tagid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[TagResource](#schematagresource)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## put/api/v1/tag/{id}

> Code samples

```bash
curl http://localhost:9696/api/v1/tag/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}" \
  -d '{
    "id": 0,
    "label": "string"
  }'
```

`PUT /api/v1/tag/{id}`

> Body parameter

```json
{
  "id": 0,
  "label": "string"
}
```

<h3 id="putapiv1tagid-parameters">Parameters</h3>

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

<h3 id="putapiv1tagid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[TagResource](#schematagresource)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## delete/api/v1/tag/{id}

> Code samples

```bash
curl http://localhost:9696/api/v1/tag/0 \
  -X DELETE \
  -H "X-Api-Key: ${API_KEY}"
```

`DELETE /api/v1/tag/{id}`

<h3 id="deleteapiv1tagid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|none|

<h3 id="deleteapiv1tagid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## get/api/v1/tag

> Code samples

```bash
curl http://localhost:9696/api/v1/tag \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /api/v1/tag`

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

<h3 id="getapiv1tag-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="getapiv1tag-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[TagResource](#schematagresource)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## post/api/v1/tag

> Code samples

```bash
curl http://localhost:9696/api/v1/tag \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}" \
  -d '{
    "id": 0,
    "label": "string"
  }'
```

`POST /api/v1/tag`

> Body parameter

```json
{
  "id": 0,
  "label": "string"
}
```

<h3 id="postapiv1tag-parameters">Parameters</h3>

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

<h3 id="postapiv1tag-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[TagResource](#schematagresource)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

<h1 id="prowlarr-tagdetails">TagDetails</h1>

## get/api/v1/tag/detail/{id}

> Code samples

```bash
curl http://localhost:9696/api/v1/tag/detail/0 \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /api/v1/tag/detail/{id}`

<h3 id="getapiv1tagdetailid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|none|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "label": "string",
  "notificationIds": [
    0
  ],
  "indexerIds": [
    0
  ],
  "indexerProxyIds": [
    0
  ],
  "applicationIds": [
    0
  ]
}
```

<h3 id="getapiv1tagdetailid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[TagDetailsResource](#schematagdetailsresource)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## get/api/v1/tag/detail

> Code samples

```bash
curl http://localhost:9696/api/v1/tag/detail \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /api/v1/tag/detail`

> Example responses

> 200 Response

```json
[
  {
    "id": 0,
    "label": "string",
    "notificationIds": [
      0
    ],
    "indexerIds": [
      0
    ],
    "indexerProxyIds": [
      0
    ],
    "applicationIds": [
      0
    ]
  }
]
```

<h3 id="getapiv1tagdetail-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="getapiv1tagdetail-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[TagDetailsResource](#schematagdetailsresource)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

<h1 id="prowlarr-task">Task</h1>

## get/api/v1/system/task

> Code samples

```bash
curl http://localhost:9696/api/v1/system/task \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /api/v1/system/task`

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

<h3 id="getapiv1systemtask-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="getapiv1systemtask-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[TaskResource](#schemataskresource)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## get/api/v1/system/task/{id}

> Code samples

```bash
curl http://localhost:9696/api/v1/system/task/0 \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /api/v1/system/task/{id}`

<h3 id="getapiv1systemtaskid-parameters">Parameters</h3>

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

<h3 id="getapiv1systemtaskid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[TaskResource](#schemataskresource)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

<h1 id="prowlarr-uiconfig">UiConfig</h1>

## get/api/v1/config/ui/{id}

> Code samples

```bash
curl http://localhost:9696/api/v1/config/ui/0 \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /api/v1/config/ui/{id}`

<h3 id="getapiv1configuiid-parameters">Parameters</h3>

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
  "showRelativeDates": true,
  "enableColorImpairedMode": true,
  "uiLanguage": "string",
  "theme": "string"
}
```

<h3 id="getapiv1configuiid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[UiConfigResource](#schemauiconfigresource)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## put/api/v1/config/ui/{id}

> Code samples

```bash
curl http://localhost:9696/api/v1/config/ui/string \
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
    "showRelativeDates": true,
    "enableColorImpairedMode": true,
    "uiLanguage": "string",
    "theme": "string"
  }'
```

`PUT /api/v1/config/ui/{id}`

> Body parameter

```json
{
  "id": 0,
  "firstDayOfWeek": 0,
  "calendarWeekColumnHeader": "string",
  "shortDateFormat": "string",
  "longDateFormat": "string",
  "timeFormat": "string",
  "showRelativeDates": true,
  "enableColorImpairedMode": true,
  "uiLanguage": "string",
  "theme": "string"
}
```

<h3 id="putapiv1configuiid-parameters">Parameters</h3>

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
|» showRelativeDates|body|boolean|false|none|
|» enableColorImpairedMode|body|boolean|false|none|
|» uiLanguage|body|string \| null|false|none|
|» theme|body|string \| null|false|none|

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
  "showRelativeDates": true,
  "enableColorImpairedMode": true,
  "uiLanguage": "string",
  "theme": "string"
}
```

<h3 id="putapiv1configuiid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[UiConfigResource](#schemauiconfigresource)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## get/api/v1/config/ui

> Code samples

```bash
curl http://localhost:9696/api/v1/config/ui \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /api/v1/config/ui`

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
  "showRelativeDates": true,
  "enableColorImpairedMode": true,
  "uiLanguage": "string",
  "theme": "string"
}
```

<h3 id="getapiv1configui-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[UiConfigResource](#schemauiconfigresource)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

<h1 id="prowlarr-update">Update</h1>

## get/api/v1/update

> Code samples

```bash
curl http://localhost:9696/api/v1/update \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /api/v1/update`

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

<h3 id="getapiv1update-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="getapiv1update-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[UpdateResource](#schemaupdateresource)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

<h1 id="prowlarr-updatelogfile">UpdateLogFile</h1>

## get/api/v1/log/file/update

> Code samples

```bash
curl http://localhost:9696/api/v1/log/file/update \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /api/v1/log/file/update`

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

<h3 id="getapiv1logfileupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="getapiv1logfileupdate-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[LogFileResource](#schemalogfileresource)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

## get/api/v1/log/file/update/{filename}

> Code samples

```bash
curl http://localhost:9696/api/v1/log/file/update/string \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /api/v1/log/file/update/{filename}`

<h3 id="getapiv1logfileupdatefilename-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|filename|path|string|true|none|

<h3 id="getapiv1logfileupdatefilename-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[IActionResult](#schemaiactionresult)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Api-Key, apikey
</aside>

# Schemas

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

<h2 id="tocS_AppProfileResource">AppProfileResource</h2>
<!-- backwards compatibility -->
<a id="schemaappprofileresource"></a>
<a id="schema_AppProfileResource"></a>
<a id="tocSappprofileresource"></a>
<a id="tocsappprofileresource"></a>

```json
{
  "id": 0,
  "name": "string",
  "enableRss": true,
  "enableAutomaticSearch": true,
  "enableInteractiveSearch": true,
  "minimumSeeders": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|false|none|none|
|name|string \| null|false|none|none|
|enableRss|boolean|false|none|none|
|enableAutomaticSearch|boolean|false|none|none|
|enableInteractiveSearch|boolean|false|none|none|
|minimumSeeders|integer(int32)|false|none|none|

<h2 id="tocS_ApplicationBulkResource">ApplicationBulkResource</h2>
<!-- backwards compatibility -->
<a id="schemaapplicationbulkresource"></a>
<a id="schema_ApplicationBulkResource"></a>
<a id="tocSapplicationbulkresource"></a>
<a id="tocsapplicationbulkresource"></a>

```json
{
  "ids": [
    0
  ],
  "tags": [
    0
  ],
  "applyTags": "add",
  "syncLevel": "disabled"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ids|[integer(int32)]|false|none|none|
|tags|[integer(int32)]|false|none|none|
|applyTags|[ApplyTags](#schemaapplytags)|false|none|none|
|syncLevel|[ApplicationSyncLevel](#schemaapplicationsynclevel)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|applyTags|add|
|applyTags|remove|
|applyTags|replace|
|syncLevel|disabled|
|syncLevel|addOnly|
|syncLevel|fullSync|

<h2 id="tocS_ApplicationResource">ApplicationResource</h2>
<!-- backwards compatibility -->
<a id="schemaapplicationresource"></a>
<a id="schema_ApplicationResource"></a>
<a id="tocSapplicationresource"></a>
<a id="tocsapplicationresource"></a>

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
          "parentValue": 0
        }
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
              "parentValue": 0
            }
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
      "syncLevel": "disabled",
      "testCommand": "string"
    }
  ],
  "syncLevel": "disabled",
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
|presets|[[ApplicationResource](#schemaapplicationresource)]|false|none|none|
|syncLevel|[ApplicationSyncLevel](#schemaapplicationsynclevel)|false|none|none|
|testCommand|string \| null|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|syncLevel|disabled|
|syncLevel|addOnly|
|syncLevel|fullSync|

<h2 id="tocS_ApplicationSyncLevel">ApplicationSyncLevel</h2>
<!-- backwards compatibility -->
<a id="schemaapplicationsynclevel"></a>
<a id="schema_ApplicationSyncLevel"></a>
<a id="tocSapplicationsynclevel"></a>
<a id="tocsapplicationsynclevel"></a>

```json
"disabled"
```

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

<h2 id="tocS_BookSearchParam">BookSearchParam</h2>
<!-- backwards compatibility -->
<a id="schemabooksearchparam"></a>
<a id="schema_BookSearchParam"></a>
<a id="tocSbooksearchparam"></a>
<a id="tocsbooksearchparam"></a>

```json
"q"
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
    "name": "string",
    "lastExecutionTime": "1970-01-01T00:00:00Z",
    "lastStartTime": "1970-01-01T00:00:00Z",
    "trigger": "unspecified",
    "suppressMessages": true,
    "clientUserAgent": "string"
  },
  "priority": "normal",
  "status": "queued",
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
|trigger|unspecified|
|trigger|manual|
|trigger|scheduled|

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

<h2 id="tocS_DatabaseType">DatabaseType</h2>
<!-- backwards compatibility -->
<a id="schemadatabasetype"></a>
<a id="schema_DatabaseType"></a>
<a id="tocSdatabasetype"></a>
<a id="tocsdatabasetype"></a>

```json
"sqLite"
```

<h2 id="tocS_DevelopmentConfigResource">DevelopmentConfigResource</h2>
<!-- backwards compatibility -->
<a id="schemadevelopmentconfigresource"></a>
<a id="schema_DevelopmentConfigResource"></a>
<a id="tocSdevelopmentconfigresource"></a>
<a id="tocsdevelopmentconfigresource"></a>

```json
{
  "id": 0,
  "consoleLogLevel": "string",
  "logSql": true,
  "logIndexerResponse": true,
  "logRotate": 0,
  "filterSentryEvents": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|false|none|none|
|consoleLogLevel|string \| null|false|none|none|
|logSql|boolean|false|none|none|
|logIndexerResponse|boolean|false|none|none|
|logRotate|integer(int32)|false|none|none|
|filterSentryEvents|boolean|false|none|none|

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
  "priority": 0
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

#### Enumerated Values

|Property|Value|
|---|---|
|applyTags|add|
|applyTags|remove|
|applyTags|replace|

<h2 id="tocS_DownloadClientCategory">DownloadClientCategory</h2>
<!-- backwards compatibility -->
<a id="schemadownloadclientcategory"></a>
<a id="schema_DownloadClientCategory"></a>
<a id="tocSdownloadclientcategory"></a>
<a id="tocsdownloadclientcategory"></a>

```json
{
  "clientCategory": "string",
  "categories": [
    0
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|clientCategory|string \| null|false|none|none|
|categories|[integer(int32)]|false|none|none|

<h2 id="tocS_DownloadClientConfigResource">DownloadClientConfigResource</h2>
<!-- backwards compatibility -->
<a id="schemadownloadclientconfigresource"></a>
<a id="schema_DownloadClientConfigResource"></a>
<a id="tocSdownloadclientconfigresource"></a>
<a id="tocsdownloadclientconfigresource"></a>

```json
{
  "id": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|false|none|none|

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
          "parentValue": 0
        }
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
              "parentValue": 0
            }
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
      "categories": [
        {
          "clientCategory": "string",
          "categories": [
            0
          ]
        }
      ],
      "supportsCategories": true
    }
  ],
  "enable": true,
  "protocol": "unknown",
  "priority": 0,
  "categories": [
    {
      "clientCategory": "string",
      "categories": [
        0
      ]
    }
  ],
  "supportsCategories": true
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
|categories|[[DownloadClientCategory](#schemadownloadclientcategory)]|false|none|none|
|supportsCategories|boolean|false|none|none|

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
      "parentValue": 0
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
|value|object \| null|false|none|none|
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

<h2 id="tocS_HistoryEventType">HistoryEventType</h2>
<!-- backwards compatibility -->
<a id="schemahistoryeventtype"></a>
<a id="schema_HistoryEventType"></a>
<a id="tocShistoryeventtype"></a>
<a id="tocshistoryeventtype"></a>

```json
"unknown"
```

<h2 id="tocS_HistoryResource">HistoryResource</h2>
<!-- backwards compatibility -->
<a id="schemahistoryresource"></a>
<a id="schema_HistoryResource"></a>
<a id="tocShistoryresource"></a>
<a id="tocshistoryresource"></a>

```json
{
  "id": 0,
  "indexerId": 0,
  "date": "1970-01-01T00:00:00Z",
  "downloadId": "string",
  "successful": true,
  "eventType": "unknown",
  "data": {
    "property1": "string",
    "property2": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|false|none|none|
|indexerId|integer(int32)|false|none|none|
|date|string(date-time)|false|none|none|
|downloadId|string \| null|false|none|none|
|successful|boolean|false|none|none|
|eventType|[HistoryEventType](#schemahistoryeventtype)|false|none|none|
|data|object \| null|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|eventType|unknown|
|eventType|releaseGrabbed|
|eventType|indexerQuery|
|eventType|indexerRss|
|eventType|indexerAuth|
|eventType|indexerInfo|

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
      "indexerId": 0,
      "date": "1970-01-01T00:00:00Z",
      "downloadId": "string",
      "successful": true,
      "eventType": "unknown",
      "data": {
        "property1": "string",
        "property2": "string"
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
  "analyticsEnabled": true,
  "username": "string",
  "password": "string",
  "passwordConfirmation": "string",
  "logLevel": "string",
  "logSizeLimit": 0,
  "consoleLogLevel": "string",
  "branch": "string",
  "apiKey": "string",
  "sslCertPath": "string",
  "sslCertPassword": "string",
  "urlBase": "string",
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
  "historyCleanupDays": 0,
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
|analyticsEnabled|boolean|false|none|none|
|username|string \| null|false|none|none|
|password|string \| null|false|none|none|
|passwordConfirmation|string \| null|false|none|none|
|logLevel|string \| null|false|none|none|
|logSizeLimit|integer(int32)|false|none|none|
|consoleLogLevel|string \| null|false|none|none|
|branch|string \| null|false|none|none|
|apiKey|string \| null|false|none|none|
|sslCertPath|string \| null|false|none|none|
|sslCertPassword|string \| null|false|none|none|
|urlBase|string \| null|false|none|none|
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
|historyCleanupDays|integer(int32)|false|none|none|
|trustCgnatIpAddresses|boolean|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|authenticationMethod|none|
|authenticationMethod|basic|
|authenticationMethod|forms|
|authenticationMethod|external|
|authenticationRequired|enabled|
|authenticationRequired|disabledForLocalAddresses|
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

<h2 id="tocS_HostStatistics">HostStatistics</h2>
<!-- backwards compatibility -->
<a id="schemahoststatistics"></a>
<a id="schema_HostStatistics"></a>
<a id="tocShoststatistics"></a>
<a id="tocshoststatistics"></a>

```json
{
  "host": "string",
  "numberOfQueries": 0,
  "numberOfGrabs": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|host|string \| null|false|none|none|
|numberOfQueries|integer(int32)|false|none|none|
|numberOfGrabs|integer(int32)|false|none|none|

<h2 id="tocS_IActionResult">IActionResult</h2>
<!-- backwards compatibility -->
<a id="schemaiactionresult"></a>
<a id="schema_IActionResult"></a>
<a id="tocSiactionresult"></a>
<a id="tocsiactionresult"></a>

```json
{}
```

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
  "enable": true,
  "appProfileId": 0,
  "priority": 0,
  "minimumSeeders": 0,
  "seedRatio": 0,
  "seedTime": 0,
  "packSeedTime": 0,
  "preferMagnetUrl": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ids|[integer(int32)]|false|none|none|
|tags|[integer(int32)]|false|none|none|
|applyTags|[ApplyTags](#schemaapplytags)|false|none|none|
|enable|boolean \| null|false|none|none|
|appProfileId|integer(int32) \| null|false|none|none|
|priority|integer(int32) \| null|false|none|none|
|minimumSeeders|integer(int32) \| null|false|none|none|
|seedRatio|number(double) \| null|false|none|none|
|seedTime|integer(int32) \| null|false|none|none|
|packSeedTime|integer(int32) \| null|false|none|none|
|preferMagnetUrl|boolean \| null|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|applyTags|add|
|applyTags|remove|
|applyTags|replace|

<h2 id="tocS_IndexerCapabilityResource">IndexerCapabilityResource</h2>
<!-- backwards compatibility -->
<a id="schemaindexercapabilityresource"></a>
<a id="schema_IndexerCapabilityResource"></a>
<a id="tocSindexercapabilityresource"></a>
<a id="tocsindexercapabilityresource"></a>

```json
{
  "id": 0,
  "limitsMax": 0,
  "limitsDefault": 0,
  "categories": [
    {
      "id": 0,
      "name": "string",
      "description": "string",
      "subCategories": [
        {}
      ]
    }
  ],
  "supportsRawSearch": true,
  "searchParams": [
    "q"
  ],
  "tvSearchParams": [
    "q"
  ],
  "movieSearchParams": [
    "q"
  ],
  "musicSearchParams": [
    "q"
  ],
  "bookSearchParams": [
    "q"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|false|none|none|
|limitsMax|integer(int32) \| null|false|none|none|
|limitsDefault|integer(int32) \| null|false|none|none|
|categories|[[IndexerCategory](#schemaindexercategory)]|false|none|none|
|supportsRawSearch|boolean|false|none|none|
|searchParams|[[SearchParam](#schemasearchparam)]|false|none|none|
|tvSearchParams|[[TvSearchParam](#schematvsearchparam)]|false|none|none|
|movieSearchParams|[[MovieSearchParam](#schemamoviesearchparam)]|false|none|none|
|musicSearchParams|[[MusicSearchParam](#schemamusicsearchparam)]|false|none|none|
|bookSearchParams|[[BookSearchParam](#schemabooksearchparam)]|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|searchParams|q|
|tvSearchParams|q|
|tvSearchParams|season|
|tvSearchParams|ep|
|tvSearchParams|imdbId|
|tvSearchParams|tvdbId|
|tvSearchParams|rId|
|tvSearchParams|tvMazeId|
|tvSearchParams|traktId|
|tvSearchParams|tmdbId|
|tvSearchParams|doubanId|
|tvSearchParams|genre|
|tvSearchParams|year|
|movieSearchParams|q|
|movieSearchParams|imdbId|
|movieSearchParams|tmdbId|
|movieSearchParams|imdbTitle|
|movieSearchParams|imdbYear|
|movieSearchParams|traktId|
|movieSearchParams|genre|
|movieSearchParams|doubanId|
|movieSearchParams|year|
|musicSearchParams|q|
|musicSearchParams|album|
|musicSearchParams|artist|
|musicSearchParams|label|
|musicSearchParams|year|
|musicSearchParams|genre|
|musicSearchParams|track|
|bookSearchParams|q|
|bookSearchParams|title|
|bookSearchParams|author|
|bookSearchParams|publisher|
|bookSearchParams|genre|
|bookSearchParams|year|

<h2 id="tocS_IndexerCategory">IndexerCategory</h2>
<!-- backwards compatibility -->
<a id="schemaindexercategory"></a>
<a id="schema_IndexerCategory"></a>
<a id="tocSindexercategory"></a>
<a id="tocsindexercategory"></a>

```json
{
  "id": 0,
  "name": "string",
  "description": "string",
  "subCategories": [
    {
      "id": 0,
      "name": "string",
      "description": "string",
      "subCategories": [
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
|description|string \| null|false|none|none|
|subCategories|[[IndexerCategory](#schemaindexercategory)]|false|read-only|none|

<h2 id="tocS_IndexerPrivacy">IndexerPrivacy</h2>
<!-- backwards compatibility -->
<a id="schemaindexerprivacy"></a>
<a id="schema_IndexerPrivacy"></a>
<a id="tocSindexerprivacy"></a>
<a id="tocsindexerprivacy"></a>

```json
"public"
```

<h2 id="tocS_IndexerProxyResource">IndexerProxyResource</h2>
<!-- backwards compatibility -->
<a id="schemaindexerproxyresource"></a>
<a id="schema_IndexerProxyResource"></a>
<a id="tocSindexerproxyresource"></a>
<a id="tocsindexerproxyresource"></a>

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
          "parentValue": 0
        }
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
              "parentValue": 0
            }
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
      "onHealthIssue": true,
      "supportsOnHealthIssue": true,
      "includeHealthWarnings": true,
      "testCommand": "string"
    }
  ],
  "link": "string",
  "onHealthIssue": true,
  "supportsOnHealthIssue": true,
  "includeHealthWarnings": true,
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
|presets|[[IndexerProxyResource](#schemaindexerproxyresource)]|false|none|none|
|link|string \| null|false|none|none|
|onHealthIssue|boolean|false|none|none|
|supportsOnHealthIssue|boolean|false|none|none|
|includeHealthWarnings|boolean|false|none|none|
|testCommand|string \| null|false|none|none|

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
          "parentValue": 0
        }
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
              "parentValue": 0
            }
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
      "indexerUrls": [
        "string"
      ],
      "legacyUrls": [
        "string"
      ],
      "definitionName": "string",
      "description": "string",
      "language": "string",
      "encoding": "string",
      "enable": true,
      "redirect": true,
      "supportsRss": true,
      "supportsSearch": true,
      "supportsRedirect": true,
      "supportsPagination": true,
      "appProfileId": 0,
      "protocol": "unknown",
      "privacy": "public",
      "capabilities": {
        "id": 0,
        "limitsMax": 0,
        "limitsDefault": 0,
        "categories": [
          {}
        ],
        "supportsRawSearch": true,
        "searchParams": [
          "q"
        ],
        "tvSearchParams": [
          "q"
        ],
        "movieSearchParams": [
          "q"
        ],
        "musicSearchParams": [
          "q"
        ],
        "bookSearchParams": [
          "q"
        ]
      },
      "priority": 0,
      "downloadClientId": 0,
      "added": "1970-01-01T00:00:00Z",
      "status": {
        "id": 0,
        "indexerId": 0,
        "disabledTill": "1970-01-01T00:00:00Z",
        "mostRecentFailure": "1970-01-01T00:00:00Z",
        "initialFailure": "1970-01-01T00:00:00Z"
      },
      "sortName": "string"
    }
  ],
  "indexerUrls": [
    "string"
  ],
  "legacyUrls": [
    "string"
  ],
  "definitionName": "string",
  "description": "string",
  "language": "string",
  "encoding": "string",
  "enable": true,
  "redirect": true,
  "supportsRss": true,
  "supportsSearch": true,
  "supportsRedirect": true,
  "supportsPagination": true,
  "appProfileId": 0,
  "protocol": "unknown",
  "privacy": "public",
  "capabilities": {
    "id": 0,
    "limitsMax": 0,
    "limitsDefault": 0,
    "categories": [
      {
        "id": 0,
        "name": "string",
        "description": "string",
        "subCategories": [
          {}
        ]
      }
    ],
    "supportsRawSearch": true,
    "searchParams": [
      "q"
    ],
    "tvSearchParams": [
      "q"
    ],
    "movieSearchParams": [
      "q"
    ],
    "musicSearchParams": [
      "q"
    ],
    "bookSearchParams": [
      "q"
    ]
  },
  "priority": 0,
  "downloadClientId": 0,
  "added": "1970-01-01T00:00:00Z",
  "status": {
    "id": 0,
    "indexerId": 0,
    "disabledTill": "1970-01-01T00:00:00Z",
    "mostRecentFailure": "1970-01-01T00:00:00Z",
    "initialFailure": "1970-01-01T00:00:00Z"
  },
  "sortName": "string"
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
|indexerUrls|[string]|false|none|none|
|legacyUrls|[string]|false|none|none|
|definitionName|string \| null|false|none|none|
|description|string \| null|false|none|none|
|language|string \| null|false|none|none|
|encoding|string \| null|false|none|none|
|enable|boolean|false|none|none|
|redirect|boolean|false|none|none|
|supportsRss|boolean|false|none|none|
|supportsSearch|boolean|false|none|none|
|supportsRedirect|boolean|false|none|none|
|supportsPagination|boolean|false|none|none|
|appProfileId|integer(int32)|false|none|none|
|protocol|[DownloadProtocol](#schemadownloadprotocol)|false|none|none|
|privacy|[IndexerPrivacy](#schemaindexerprivacy)|false|none|none|
|capabilities|[IndexerCapabilityResource](#schemaindexercapabilityresource)|false|none|none|
|priority|integer(int32)|false|none|none|
|downloadClientId|integer(int32)|false|none|none|
|added|string(date-time)|false|none|none|
|status|[IndexerStatusResource](#schemaindexerstatusresource)|false|none|none|
|sortName|string \| null|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|protocol|unknown|
|protocol|usenet|
|protocol|torrent|
|privacy|public|
|privacy|semiPrivate|
|privacy|private|

<h2 id="tocS_IndexerStatistics">IndexerStatistics</h2>
<!-- backwards compatibility -->
<a id="schemaindexerstatistics"></a>
<a id="schema_IndexerStatistics"></a>
<a id="tocSindexerstatistics"></a>
<a id="tocsindexerstatistics"></a>

```json
{
  "indexerId": 0,
  "indexerName": "string",
  "averageResponseTime": 0,
  "averageGrabResponseTime": 0,
  "numberOfQueries": 0,
  "numberOfGrabs": 0,
  "numberOfRssQueries": 0,
  "numberOfAuthQueries": 0,
  "numberOfFailedQueries": 0,
  "numberOfFailedGrabs": 0,
  "numberOfFailedRssQueries": 0,
  "numberOfFailedAuthQueries": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|indexerId|integer(int32)|false|none|none|
|indexerName|string \| null|false|none|none|
|averageResponseTime|integer(int32)|false|none|none|
|averageGrabResponseTime|integer(int32)|false|none|none|
|numberOfQueries|integer(int32)|false|none|none|
|numberOfGrabs|integer(int32)|false|none|none|
|numberOfRssQueries|integer(int32)|false|none|none|
|numberOfAuthQueries|integer(int32)|false|none|none|
|numberOfFailedQueries|integer(int32)|false|none|none|
|numberOfFailedGrabs|integer(int32)|false|none|none|
|numberOfFailedRssQueries|integer(int32)|false|none|none|
|numberOfFailedAuthQueries|integer(int32)|false|none|none|

<h2 id="tocS_IndexerStatsResource">IndexerStatsResource</h2>
<!-- backwards compatibility -->
<a id="schemaindexerstatsresource"></a>
<a id="schema_IndexerStatsResource"></a>
<a id="tocSindexerstatsresource"></a>
<a id="tocsindexerstatsresource"></a>

```json
{
  "id": 0,
  "indexers": [
    {
      "indexerId": 0,
      "indexerName": "string",
      "averageResponseTime": 0,
      "averageGrabResponseTime": 0,
      "numberOfQueries": 0,
      "numberOfGrabs": 0,
      "numberOfRssQueries": 0,
      "numberOfAuthQueries": 0,
      "numberOfFailedQueries": 0,
      "numberOfFailedGrabs": 0,
      "numberOfFailedRssQueries": 0,
      "numberOfFailedAuthQueries": 0
    }
  ],
  "userAgents": [
    {
      "userAgent": "string",
      "numberOfQueries": 0,
      "numberOfGrabs": 0
    }
  ],
  "hosts": [
    {
      "host": "string",
      "numberOfQueries": 0,
      "numberOfGrabs": 0
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|false|none|none|
|indexers|[[IndexerStatistics](#schemaindexerstatistics)]|false|none|none|
|userAgents|[[UserAgentStatistics](#schemauseragentstatistics)]|false|none|none|
|hosts|[[HostStatistics](#schemahoststatistics)]|false|none|none|

<h2 id="tocS_IndexerStatusResource">IndexerStatusResource</h2>
<!-- backwards compatibility -->
<a id="schemaindexerstatusresource"></a>
<a id="schema_IndexerStatusResource"></a>
<a id="tocSindexerstatusresource"></a>
<a id="tocsindexerstatusresource"></a>

```json
{
  "id": 0,
  "indexerId": 0,
  "disabledTill": "1970-01-01T00:00:00Z",
  "mostRecentFailure": "1970-01-01T00:00:00Z",
  "initialFailure": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|false|none|none|
|indexerId|integer(int32)|false|none|none|
|disabledTill|string(date-time) \| null|false|none|none|
|mostRecentFailure|string(date-time) \| null|false|none|none|
|initialFailure|string(date-time) \| null|false|none|none|

<h2 id="tocS_LocalizationOption">LocalizationOption</h2>
<!-- backwards compatibility -->
<a id="schemalocalizationoption"></a>
<a id="schema_LocalizationOption"></a>
<a id="tocSlocalizationoption"></a>
<a id="tocslocalizationoption"></a>

```json
{
  "name": "string",
  "value": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string \| null|false|none|none|
|value|string \| null|false|none|none|

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

<h2 id="tocS_MovieSearchParam">MovieSearchParam</h2>
<!-- backwards compatibility -->
<a id="schemamoviesearchparam"></a>
<a id="schema_MovieSearchParam"></a>
<a id="tocSmoviesearchparam"></a>
<a id="tocsmoviesearchparam"></a>

```json
"q"
```

<h2 id="tocS_MusicSearchParam">MusicSearchParam</h2>
<!-- backwards compatibility -->
<a id="schemamusicsearchparam"></a>
<a id="schema_MusicSearchParam"></a>
<a id="tocSmusicsearchparam"></a>
<a id="tocsmusicsearchparam"></a>

```json
"q"
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
          "hint": "string",
          "parentValue": 0
        }
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
              "parentValue": 0
            }
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
      "onHealthIssue": true,
      "onHealthRestored": true,
      "onApplicationUpdate": true,
      "supportsOnGrab": true,
      "includeManualGrabs": true,
      "supportsOnHealthIssue": true,
      "supportsOnHealthRestored": true,
      "includeHealthWarnings": true,
      "supportsOnApplicationUpdate": true,
      "testCommand": "string"
    }
  ],
  "link": "string",
  "onGrab": true,
  "onHealthIssue": true,
  "onHealthRestored": true,
  "onApplicationUpdate": true,
  "supportsOnGrab": true,
  "includeManualGrabs": true,
  "supportsOnHealthIssue": true,
  "supportsOnHealthRestored": true,
  "includeHealthWarnings": true,
  "supportsOnApplicationUpdate": true,
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
|onHealthIssue|boolean|false|none|none|
|onHealthRestored|boolean|false|none|none|
|onApplicationUpdate|boolean|false|none|none|
|supportsOnGrab|boolean|false|none|none|
|includeManualGrabs|boolean|false|none|none|
|supportsOnHealthIssue|boolean|false|none|none|
|supportsOnHealthRestored|boolean|false|none|none|
|includeHealthWarnings|boolean|false|none|none|
|supportsOnApplicationUpdate|boolean|false|none|none|
|testCommand|string \| null|false|none|none|

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
  "age": 0,
  "ageHours": 0,
  "ageMinutes": 0,
  "size": 0,
  "files": 0,
  "grabs": 0,
  "indexerId": 0,
  "indexer": "string",
  "subGroup": "string",
  "releaseHash": "string",
  "title": "string",
  "sortTitle": "string",
  "imdbId": 0,
  "tmdbId": 0,
  "tvdbId": 0,
  "tvMazeId": 0,
  "publishDate": "1970-01-01T00:00:00Z",
  "commentUrl": "string",
  "downloadUrl": "string",
  "infoUrl": "string",
  "posterUrl": "string",
  "indexerFlags": [
    "string"
  ],
  "categories": [
    {
      "id": 0,
      "name": "string",
      "description": "string",
      "subCategories": [
        {}
      ]
    }
  ],
  "magnetUrl": "string",
  "infoHash": "string",
  "seeders": 0,
  "leechers": 0,
  "protocol": "unknown",
  "fileName": "string",
  "downloadClientId": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|false|none|none|
|guid|string \| null|false|none|none|
|age|integer(int32)|false|none|none|
|ageHours|number(double)|false|none|none|
|ageMinutes|number(double)|false|none|none|
|size|integer(int64)|false|none|none|
|files|integer(int32) \| null|false|none|none|
|grabs|integer(int32) \| null|false|none|none|
|indexerId|integer(int32)|false|none|none|
|indexer|string \| null|false|none|none|
|subGroup|string \| null|false|none|none|
|releaseHash|string \| null|false|none|none|
|title|string \| null|false|none|none|
|sortTitle|string \| null|false|none|none|
|imdbId|integer(int32)|false|none|none|
|tmdbId|integer(int32)|false|none|none|
|tvdbId|integer(int32)|false|none|none|
|tvMazeId|integer(int32)|false|none|none|
|publishDate|string(date-time)|false|none|none|
|commentUrl|string \| null|false|none|none|
|downloadUrl|string \| null|false|none|none|
|infoUrl|string \| null|false|none|none|
|posterUrl|string \| null|false|none|none|
|indexerFlags|[string]|false|none|none|
|categories|[[IndexerCategory](#schemaindexercategory)]|false|none|none|
|magnetUrl|string \| null|false|none|none|
|infoHash|string \| null|false|none|none|
|seeders|integer(int32) \| null|false|none|none|
|leechers|integer(int32) \| null|false|none|none|
|protocol|[DownloadProtocol](#schemadownloadprotocol)|false|none|none|
|fileName|string \| null|false|read-only|none|
|downloadClientId|integer(int32) \| null|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|protocol|unknown|
|protocol|usenet|
|protocol|torrent|

<h2 id="tocS_RuntimeMode">RuntimeMode</h2>
<!-- backwards compatibility -->
<a id="schemaruntimemode"></a>
<a id="schema_RuntimeMode"></a>
<a id="tocSruntimemode"></a>
<a id="tocsruntimemode"></a>

```json
"console"
```

<h2 id="tocS_SearchParam">SearchParam</h2>
<!-- backwards compatibility -->
<a id="schemasearchparam"></a>
<a id="schema_SearchParam"></a>
<a id="tocSsearchparam"></a>
<a id="tocssearchparam"></a>

```json
"q"
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
  "parentValue": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|value|integer(int32)|false|none|none|
|name|string \| null|false|none|none|
|order|integer(int32)|false|none|none|
|hint|string \| null|false|none|none|
|parentValue|integer(int32) \| null|false|none|none|

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
|packageUpdateMechanism|builtIn|
|packageUpdateMechanism|script|
|packageUpdateMechanism|external|
|packageUpdateMechanism|apt|
|packageUpdateMechanism|docker|

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
  "notificationIds": [
    0
  ],
  "indexerIds": [
    0
  ],
  "indexerProxyIds": [
    0
  ],
  "applicationIds": [
    0
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|false|none|none|
|label|string \| null|false|none|none|
|notificationIds|[integer(int32)]|false|none|none|
|indexerIds|[integer(int32)]|false|none|none|
|indexerProxyIds|[integer(int32)]|false|none|none|
|applicationIds|[integer(int32)]|false|none|none|

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

<h2 id="tocS_TvSearchParam">TvSearchParam</h2>
<!-- backwards compatibility -->
<a id="schematvsearchparam"></a>
<a id="schema_TvSearchParam"></a>
<a id="tocStvsearchparam"></a>
<a id="tocstvsearchparam"></a>

```json
"q"
```

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
  "showRelativeDates": true,
  "enableColorImpairedMode": true,
  "uiLanguage": "string",
  "theme": "string"
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
|showRelativeDates|boolean|false|none|none|
|enableColorImpairedMode|boolean|false|none|none|
|uiLanguage|string \| null|false|none|none|
|theme|string \| null|false|none|none|

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

<h2 id="tocS_UserAgentStatistics">UserAgentStatistics</h2>
<!-- backwards compatibility -->
<a id="schemauseragentstatistics"></a>
<a id="schema_UserAgentStatistics"></a>
<a id="tocSuseragentstatistics"></a>
<a id="tocsuseragentstatistics"></a>

```json
{
  "userAgent": "string",
  "numberOfQueries": 0,
  "numberOfGrabs": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|userAgent|string \| null|false|none|none|
|numberOfQueries|integer(int32)|false|none|none|
|numberOfGrabs|integer(int32)|false|none|none|
