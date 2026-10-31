<h1 id="settings-full">settings-full v0.0.1</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Nextcloud settings

License: agpl

# Authentication

- HTTP Authentication, scheme: basic

- HTTP Authentication, scheme: bearer

<h1 id="settings-full-logsettings">log_settings</h1>

## download logfile

<a id="opIdlog_settings-download"></a>

> Code samples

```bash
curl https://cloud.example.com/index.php/settings/admin/log/download \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /index.php/settings/admin/log/download`

This endpoint requires admin access

> Example responses

> 401 Response

```json
{
  "message": "string"
}
```

> 403 Response

```json
{
  "message": "string"
}
```

<h3 id="download-logfile-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Logfile returned|Inline|
|401|Unauthorized|Current user is not logged in|Inline|
|403|Forbidden|Logged in account must be an admin|Inline|

<h3 id="download-logfile-responseschema">Response Schema</h3>

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|true|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|true|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Content-Disposition|string||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer_auth, basic_auth
</aside>

<h1 id="settings-full-declarativesettings">declarative_settings</h1>

## Sets a declarative settings value

<a id="opIddeclarative_settings-set-value"></a>

> Code samples

```bash
curl https://cloud.example.com/ocs/v2.php/settings/api/declarative/value \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'OCS-APIRequest: true' \
  -d '{
    "app": "string",
    "formId": "string",
    "fieldId": "string",
    "value": {}
  }'
```

`POST /ocs/v2.php/settings/api/declarative/value`

> Body parameter

```json
{
  "app": "string",
  "formId": "string",
  "fieldId": "string",
  "value": {}
}
```

<h3 id="sets-a-declarative-settings-value-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|OCS-APIRequest|header|boolean|true|Required to be true for the API request to pass|
|body|body|object|true|none|
|» app|body|string|true|ID of the app|
|» formId|body|string|true|ID of the form|
|» fieldId|body|string|true|ID of the field|
|» value|body|object|true|Value to be saved|

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

<h3 id="sets-a-declarative-settings-value-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Value set successfully|Inline|
|400|Bad Request|Invalid arguments to save value|Inline|
|401|Unauthorized|Current user is not logged in|Inline|
|500|Internal Server Error|Not logged in or not an admin user|Inline|

<h3 id="sets-a-declarative-settings-value-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object \| null|true|none|none|

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

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer_auth, basic_auth
</aside>

## Sets a declarative settings value. Password confirmation is required for sensitive values.

<a id="opIddeclarative_settings-set-sensitive-value"></a>

> Code samples

```bash
curl https://cloud.example.com/ocs/v2.php/settings/api/declarative/value-sensitive \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'OCS-APIRequest: true' \
  -d '{
    "app": "string",
    "formId": "string",
    "fieldId": "string",
    "value": {}
  }'
```

`POST /ocs/v2.php/settings/api/declarative/value-sensitive`

This endpoint requires password confirmation

> Body parameter

```json
{
  "app": "string",
  "formId": "string",
  "fieldId": "string",
  "value": {}
}
```

<h3 id="sets-a-declarative-settings-value-password-confirmation-is-required-for-sensitive-values-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|OCS-APIRequest|header|boolean|true|Required to be true for the API request to pass|
|body|body|object|true|none|
|» app|body|string|true|ID of the app|
|» formId|body|string|true|ID of the form|
|» fieldId|body|string|true|ID of the field|
|» value|body|object|true|Value to be saved|

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

<h3 id="sets-a-declarative-settings-value-password-confirmation-is-required-for-sensitive-values-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Value set successfully|Inline|
|400|Bad Request|Invalid arguments to save value|Inline|
|401|Unauthorized|Current user is not logged in|Inline|
|500|Internal Server Error|Not logged in or not an admin user|Inline|

<h3 id="sets-a-declarative-settings-value-password-confirmation-is-required-for-sensitive-values-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object \| null|true|none|none|

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

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer_auth, basic_auth
</aside>

## Gets all declarative forms with the values prefilled.

<a id="opIddeclarative_settings-get-forms"></a>

> Code samples

```bash
curl https://cloud.example.com/ocs/v2.php/settings/api/declarative/forms \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'OCS-APIRequest: true'
```

`GET /ocs/v2.php/settings/api/declarative/forms`

<h3 id="gets-all-declarative-forms-with-the-values-prefilled-parameters">Parameters</h3>

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
        "priority": 0,
        "section_type": "admin",
        "section_id": "string",
        "storage_type": "internal",
        "title": "string",
        "description": "string",
        "doc_url": "string",
        "app": "string",
        "fields": [
          {
            "id": "string",
            "title": "string",
            "description": "string",
            "type": "text",
            "placeholder": "string",
            "label": "string",
            "default": {},
            "options": [
              "string"
            ],
            "value": "string",
            "sensitive": true
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

<h3 id="gets-all-declarative-forms-with-the-values-prefilled-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Forms returned|Inline|
|401|Unauthorized|Current user is not logged in|Inline|
|500|Internal Server Error||Inline|

<h3 id="gets-all-declarative-forms-with-the-values-prefilled-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|[[DeclarativeForm](#schemadeclarativeform)]|true|none|none|

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

<h2 id="tocS_DeclarativeForm">DeclarativeForm</h2>
<!-- backwards compatibility -->
<a id="schemadeclarativeform"></a>
<a id="schema_DeclarativeForm"></a>
<a id="tocSdeclarativeform"></a>
<a id="tocsdeclarativeform"></a>

```json
{
  "id": "string",
  "priority": 0,
  "section_type": "admin",
  "section_id": "string",
  "storage_type": "internal",
  "title": "string",
  "description": "string",
  "doc_url": "string",
  "app": "string",
  "fields": [
    {
      "id": "string",
      "title": "string",
      "description": "string",
      "type": "text",
      "placeholder": "string",
      "label": "string",
      "default": {},
      "options": [
        "string"
      ],
      "value": "string",
      "sensitive": true
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|
|priority|integer(int64)|true|none|none|
|section_type|string|true|none|none|
|section_id|string|true|none|none|
|storage_type|string|true|none|none|
|title|string|true|none|none|
|description|string|false|none|none|
|doc_url|string|false|none|none|
|app|string|true|none|none|
|fields|[[DeclarativeFormField](#schemadeclarativeformfield)]|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|section_type|admin|
|section_type|personal|
|storage_type|internal|
|storage_type|external|

<h2 id="tocS_DeclarativeFormField">DeclarativeFormField</h2>
<!-- backwards compatibility -->
<a id="schemadeclarativeformfield"></a>
<a id="schema_DeclarativeFormField"></a>
<a id="tocSdeclarativeformfield"></a>
<a id="tocsdeclarativeformfield"></a>

```json
{
  "id": "string",
  "title": "string",
  "description": "string",
  "type": "text",
  "placeholder": "string",
  "label": "string",
  "default": {},
  "options": [
    "string"
  ],
  "value": "string",
  "sensitive": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|
|title|string|true|none|none|
|description|string|false|none|none|
|type|string|true|none|none|
|placeholder|string|false|none|none|
|label|string|false|none|none|
|default|object|true|none|none|
|options|[string \| object]|false|none|none|
|value|string \| integer(int64) \| number(double) \| boolean \| [string]|true|none|none|
|sensitive|boolean|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|text|
|type|password|
|type|email|
|type|tel|
|type|url|
|type|number|
|type|checkbox|
|type|multi-checkbox|
|type|radio|
|type|select|
|type|multi-select|

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
