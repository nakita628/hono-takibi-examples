<h1 id="doqsdev-pdf-filling-api">doqs.dev | PDF filling API v1.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Base URLs:

* <a href="https://api.doqs.dev/v1">https://api.doqs.dev/v1</a>

# Authentication

* API Key (apiKeyAuth)
    - Parameter Name: **x-api-key**, in: header.

<h1 id="doqsdev-pdf-filling-api-default">Default</h1>

## List Templates

<a id="opIdlist_templates_designer_templates__get"></a>

> Code samples

```bash
curl https://example.com/designer/templates/ \
  -H 'Accept: application/json' \
  -H "x-api-key: ${API_KEY}"
```

`GET /designer/templates/`

<h3 id="list-templates-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer|false|none|
|offset|query|integer|false|none|

> Example responses

> 200 Response

```json
{
  "results": [
    {
      "components": [
        {}
      ],
      "created_at": "1970-01-01T00:00:00Z",
      "css": "string",
      "footer_html": "string",
      "format": "a0",
      "header_html": "string",
      "id": "string",
      "name": "string",
      "orientation": "landscape",
      "preview_payload": {},
      "template_html": "string"
    }
  ]
}
```

> 4XX Response

```json
{
  "message": "string"
}
```

> 5XX Response

```json
{
  "message": "string"
}
```

<h3 id="list-templates-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[ResponseOk_List_fillr.entities.designer_template.DesignerTemplate__](#schemaresponseok_list_fillr.entities.designer_template.designertemplate__)|
|4XX|Client Error|Client Error|[ResponseError](#schemaresponseerror)|
|5XX|Server Error|Server Error|[ResponseError](#schemaresponseerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyAuth
</aside>

## Create Template

<a id="opIdcreate_template_designer_templates__post"></a>

> Code samples

```bash
curl https://example.com/designer/templates/ \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "x-api-key: ${API_KEY}" \
  -d '{
    "components": [
      {}
    ],
    "css": "string",
    "footer_html": "string",
    "format": "a0",
    "header_html": "string",
    "name": "string",
    "orientation": "landscape",
    "preview_payload": {},
    "template_html": "string"
  }'
```

`POST /designer/templates/`

> Body parameter

```json
{
  "components": [
    {}
  ],
  "css": "string",
  "footer_html": "string",
  "format": "a0",
  "header_html": "string",
  "name": "string",
  "orientation": "landscape",
  "preview_payload": {},
  "template_html": "string"
}
```

<h3 id="create-template-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[CreateOrUpdateTemplateRequest](#schemacreateorupdatetemplaterequest)|true|none|
|» components|body|[object]|true|none|
|» css|body|string|true|none|
|» footer_html|body|string|false|none|
|» format|body|[Format](#schemaformat)|true|An enumeration.|
|» header_html|body|string|false|none|
|» name|body|string|true|none|
|» orientation|body|[Orientation](#schemaorientation)|true|An enumeration.|
|» preview_payload|body|object|true|none|
|» template_html|body|string|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» format|a0|
|» format|a1|
|» format|a2|
|» format|a3|
|» format|a4|
|» format|a5|
|» format|a6|
|» orientation|landscape|
|» orientation|portrait|

> Example responses

> 201 Response

```json
{
  "results": {
    "components": [
      {}
    ],
    "created_at": "1970-01-01T00:00:00Z",
    "css": "string",
    "footer_html": "string",
    "format": "a0",
    "header_html": "string",
    "id": "string",
    "name": "string",
    "orientation": "landscape",
    "preview_payload": {},
    "template_html": "string"
  }
}
```

> 4XX Response

```json
{
  "message": "string"
}
```

> 5XX Response

```json
{
  "message": "string"
}
```

<h3 id="create-template-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Successful Response|[ResponseOk_DesignerTemplate_](#schemaresponseok_designertemplate_)|
|4XX|Client Error|Client Error|[ResponseError](#schemaresponseerror)|
|5XX|Server Error|Server Error|[ResponseError](#schemaresponseerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyAuth
</aside>

## Preview

<a id="opIdpreview_designer_templates_preview_post"></a>

> Code samples

```bash
curl https://example.com/designer/templates/preview \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "x-api-key: ${API_KEY}" \
  -d '{
    "css": "string",
    "data": {},
    "footer_html": "string",
    "header_html": "string",
    "template_html": "string"
  }'
```

`POST /designer/templates/preview`

> Body parameter

```json
{
  "css": "string",
  "data": {},
  "footer_html": "string",
  "header_html": "string",
  "template_html": "string"
}
```

<h3 id="preview-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[PreviewModel](#schemapreviewmodel)|true|none|
|» css|body|string|true|none|
|» data|body|object|true|none|
|» footer_html|body|string|false|none|
|» header_html|body|string|false|none|
|» template_html|body|string|true|none|

> Example responses

> 200 Response

```json
{
  "results": {
    "html": "string"
  }
}
```

> 4XX Response

```json
{
  "message": "string"
}
```

> 5XX Response

```json
{
  "message": "string"
}
```

<h3 id="preview-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[ResponseOk_PreviewResponse_](#schemaresponseok_previewresponse_)|
|4XX|Client Error|Client Error|[ResponseError](#schemaresponseerror)|
|5XX|Server Error|Server Error|[ResponseError](#schemaresponseerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyAuth
</aside>

## List Templates

<a id="opIdlist_templates_designer_templates__id__get"></a>

> Code samples

```bash
curl https://example.com/designer/templates/string \
  -H 'Accept: application/json' \
  -H "x-api-key: ${API_KEY}"
```

`GET /designer/templates/{id}`

<h3 id="list-templates-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "results": {
    "components": [
      {}
    ],
    "created_at": "1970-01-01T00:00:00Z",
    "css": "string",
    "footer_html": "string",
    "format": "a0",
    "header_html": "string",
    "id": "string",
    "name": "string",
    "orientation": "landscape",
    "preview_payload": {},
    "template_html": "string"
  }
}
```

> 4XX Response

```json
{
  "message": "string"
}
```

> 5XX Response

```json
{
  "message": "string"
}
```

<h3 id="list-templates-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[ResponseOk_DesignerTemplate_](#schemaresponseok_designertemplate_)|
|4XX|Client Error|Client Error|[ResponseError](#schemaresponseerror)|
|5XX|Server Error|Server Error|[ResponseError](#schemaresponseerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyAuth
</aside>

## Update Template

<a id="opIdupdate_template_designer_templates__id__put"></a>

> Code samples

```bash
curl https://example.com/designer/templates/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "x-api-key: ${API_KEY}" \
  -d '{
    "components": [
      {}
    ],
    "css": "string",
    "footer_html": "string",
    "format": "a0",
    "header_html": "string",
    "name": "string",
    "orientation": "landscape",
    "preview_payload": {},
    "template_html": "string"
  }'
```

`PUT /designer/templates/{id}`

> Body parameter

```json
{
  "components": [
    {}
  ],
  "css": "string",
  "footer_html": "string",
  "format": "a0",
  "header_html": "string",
  "name": "string",
  "orientation": "landscape",
  "preview_payload": {},
  "template_html": "string"
}
```

<h3 id="update-template-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|body|body|[CreateOrUpdateTemplateRequest](#schemacreateorupdatetemplaterequest)|true|none|
|» components|body|[object]|true|none|
|» css|body|string|true|none|
|» footer_html|body|string|false|none|
|» format|body|[Format](#schemaformat)|true|An enumeration.|
|» header_html|body|string|false|none|
|» name|body|string|true|none|
|» orientation|body|[Orientation](#schemaorientation)|true|An enumeration.|
|» preview_payload|body|object|true|none|
|» template_html|body|string|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» format|a0|
|» format|a1|
|» format|a2|
|» format|a3|
|» format|a4|
|» format|a5|
|» format|a6|
|» orientation|landscape|
|» orientation|portrait|

> Example responses

> 200 Response

```json
{
  "results": {
    "components": [
      {}
    ],
    "created_at": "1970-01-01T00:00:00Z",
    "css": "string",
    "footer_html": "string",
    "format": "a0",
    "header_html": "string",
    "id": "string",
    "name": "string",
    "orientation": "landscape",
    "preview_payload": {},
    "template_html": "string"
  }
}
```

> 4XX Response

```json
{
  "message": "string"
}
```

> 5XX Response

```json
{
  "message": "string"
}
```

<h3 id="update-template-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[ResponseOk_DesignerTemplate_](#schemaresponseok_designertemplate_)|
|4XX|Client Error|Client Error|[ResponseError](#schemaresponseerror)|
|5XX|Server Error|Server Error|[ResponseError](#schemaresponseerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyAuth
</aside>

## Delete

<a id="opIddelete_designer_templates__id__delete"></a>

> Code samples

```bash
curl https://example.com/designer/templates/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "x-api-key: ${API_KEY}"
```

`DELETE /designer/templates/{id}`

<h3 id="delete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "results": null
}
```

> 4XX Response

```json
{
  "message": "string"
}
```

> 5XX Response

```json
{
  "message": "string"
}
```

<h3 id="delete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[ResponseOk_NoneType_](#schemaresponseok_nonetype_)|
|4XX|Client Error|Client Error|[ResponseError](#schemaresponseerror)|
|5XX|Server Error|Server Error|[ResponseError](#schemaresponseerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyAuth
</aside>

## Generate Pdf

<a id="opIdgenerate_pdf_designer_templates__id__generate_post"></a>

> Code samples

```bash
curl https://example.com/designer/templates/string/generate \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "x-api-key: ${API_KEY}" \
  -d '{
    "data": {}
  }'
```

`POST /designer/templates/{id}/generate`

> Body parameter

```json
{
  "data": {}
}
```

<h3 id="generate-pdf-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|body|body|[GeneratePDFPayload](#schemageneratepdfpayload)|true|none|
|» data|body|object|true|none|

> Example responses

> 200 Response

```json
null
```

> 4XX Response

```json
{
  "message": "string"
}
```

> 5XX Response

```json
{
  "message": "string"
}
```

<h3 id="generate-pdf-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|Inline|
|4XX|Client Error|Client Error|[ResponseError](#schemaresponseerror)|
|5XX|Server Error|Server Error|[ResponseError](#schemaresponseerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyAuth
</aside>

<h1 id="doqsdev-pdf-filling-api-templates">Templates</h1>

## List

<a id="opIdlist"></a>

> Code samples

```bash
curl https://example.com/templates \
  -H 'Accept: application/json' \
  -H "x-api-key: ${API_KEY}"
```

`GET /templates`

<h3 id="list-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer|false|none|
|offset|query|integer|false|none|

> Example responses

> 200 Response

```json
{
  "results": [
    {
      "created_at": "1970-01-01T00:00:00Z",
      "fields": [],
      "id": "string",
      "name": "string",
      "pages": 1,
      "size_bytes": 0
    }
  ]
}
```

> 4XX Response

```json
{
  "message": "string"
}
```

> 5XX Response

```json
{
  "message": "string"
}
```

<h3 id="list-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[ResponseOk_List_apps.api.routes_templates.Template__](#schemaresponseok_list_apps.api.routes_templates.template__)|
|4XX|Client Error|Client Error|[ResponseError](#schemaresponseerror)|
|5XX|Server Error|Server Error|[ResponseError](#schemaresponseerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyAuth
</aside>

## Create

<a id="opIdcreate"></a>

> Code samples

```bash
curl https://example.com/templates \
  -X POST \
  -H 'Accept: application/json' \
  -H "x-api-key: ${API_KEY}" \
  -F 'file=@/path/to/file'
```

`POST /templates`

> Body parameter

```yaml
file: string
```

<h3 id="create-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[Body_create](#schemabody_create)|true|none|
|» file|body|string(binary)|true|none|

> Example responses

> 201 Response

```json
{
  "results": {
    "created_at": "1970-01-01T00:00:00Z",
    "fields": [],
    "id": "string",
    "name": "string",
    "pages": 1,
    "size_bytes": 0
  }
}
```

> 4XX Response

```json
{
  "message": "string"
}
```

> 5XX Response

```json
{
  "message": "string"
}
```

<h3 id="create-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Successful Response|[ResponseOk_Template_](#schemaresponseok_template_)|
|4XX|Client Error|Client Error|[ResponseError](#schemaresponseerror)|
|5XX|Server Error|Server Error|[ResponseError](#schemaresponseerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyAuth
</aside>

## Get Template

<a id="opIdget"></a>

> Code samples

```bash
curl https://example.com/templates/string \
  -H 'Accept: application/json' \
  -H "x-api-key: ${API_KEY}"
```

`GET /templates/{id}`

<h3 id="get-template-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "results": {
    "created_at": "1970-01-01T00:00:00Z",
    "fields": [],
    "id": "string",
    "name": "string",
    "pages": 1,
    "size_bytes": 0
  }
}
```

> 4XX Response

```json
{
  "message": "string"
}
```

> 5XX Response

```json
{
  "message": "string"
}
```

<h3 id="get-template-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[ResponseOk_Template_](#schemaresponseok_template_)|
|4XX|Client Error|Client Error|[ResponseError](#schemaresponseerror)|
|5XX|Server Error|Server Error|[ResponseError](#schemaresponseerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyAuth
</aside>

## Update

<a id="opIdupdate"></a>

> Code samples

```bash
curl https://example.com/templates/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "x-api-key: ${API_KEY}" \
  -d '{
    "fields": [
      {
        "bbox": {
          "height": 1,
          "width": 1,
          "x": 0,
          "y": 0
        },
        "cell_count": 0,
        "cell_offset": 0,
        "cells": false,
        "color": "black",
        "font": "helvetica",
        "font_size": 10,
        "format": "string",
        "h_align": "L",
        "locale": "en_US",
        "name": "string",
        "page": 0,
        "required": true,
        "type": "date",
        "v_align": "B"
      }
    ],
    "name": "string"
  }'
```

`PUT /templates/{id}`

> Body parameter

```json
{
  "fields": [
    {
      "bbox": {
        "height": 1,
        "width": 1,
        "x": 0,
        "y": 0
      },
      "cell_count": 0,
      "cell_offset": 0,
      "cells": false,
      "color": "black",
      "font": "helvetica",
      "font_size": 10,
      "format": "string",
      "h_align": "L",
      "locale": "en_US",
      "name": "string",
      "page": 0,
      "required": true,
      "type": "date",
      "v_align": "B"
    }
  ],
  "name": "string"
}
```

<h3 id="update-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|body|body|[UpdateTemplateRequest](#schemaupdatetemplaterequest)|true|none|
|» fields|body|[[DateField](#schemadatefield) \| [TextField](#schematextfield) \| [ImageField](#schemaimagefield) \| [CheckBoxField](#schemacheckboxfield)]|true|none|
|» » *oneOf*|body|[DateField](#schemadatefield)|false|none|
|» » *oneOf*|body|[TextField](#schematextfield)|false|none|
|» » *oneOf*|body|[ImageField](#schemaimagefield)|false|none|
|» » *oneOf*|body|[CheckBoxField](#schemacheckboxfield)|false|none|
|» name|body|string|false|none|

> Example responses

> 200 Response

```json
{
  "results": {
    "created_at": "1970-01-01T00:00:00Z",
    "fields": [],
    "id": "string",
    "name": "string",
    "pages": 1,
    "size_bytes": 0
  }
}
```

> 4XX Response

```json
{
  "message": "string"
}
```

> 5XX Response

```json
{
  "message": "string"
}
```

<h3 id="update-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[ResponseOk_Template_](#schemaresponseok_template_)|
|4XX|Client Error|Client Error|[ResponseError](#schemaresponseerror)|
|5XX|Server Error|Server Error|[ResponseError](#schemaresponseerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyAuth
</aside>

## Delete

<a id="opIddelete__templates__id__delete"></a>

> Code samples

```bash
curl https://example.com/templates/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "x-api-key: ${API_KEY}"
```

`DELETE /templates/{id}`

<h3 id="delete-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "results": null
}
```

> 4XX Response

```json
{
  "message": "string"
}
```

> 5XX Response

```json
{
  "message": "string"
}
```

<h3 id="delete-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[ResponseOk_NoneType_](#schemaresponseok_nonetype_)|
|4XX|Client Error|Client Error|[ResponseError](#schemaresponseerror)|
|5XX|Server Error|Server Error|[ResponseError](#schemaresponseerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyAuth
</aside>

## Get File

<a id="opIdget_file_templates__id__file_get"></a>

> Code samples

```bash
curl https://example.com/templates/string/file \
  -H 'Accept: application/json' \
  -H "x-api-key: ${API_KEY}"
```

`GET /templates/{id}/file`

<h3 id="get-file-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "results": "http://example.com"
}
```

> 4XX Response

```json
{
  "message": "string"
}
```

> 5XX Response

```json
{
  "message": "string"
}
```

<h3 id="get-file-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[ResponseOk_HttpUrl_](#schemaresponseok_httpurl_)|
|4XX|Client Error|Client Error|[ResponseError](#schemaresponseerror)|
|5XX|Server Error|Server Error|[ResponseError](#schemaresponseerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyAuth
</aside>

## Fill

<a id="opIdfill"></a>

> Code samples

```bash
curl https://example.com/templates/string/fill \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "x-api-key: ${API_KEY}" \
  -d '{
    "data": {}
  }'
```

`POST /templates/{id}/fill`

> Body parameter

```json
{
  "data": {}
}
```

<h3 id="fill-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|body|body|[FillTemplateRequest](#schemafilltemplaterequest)|true|none|
|» data|body|object|false|none|

> Example responses

> 200 Response

```json
null
```

> 4XX Response

```json
{
  "message": "string"
}
```

> 5XX Response

```json
{
  "message": "string"
}
```

<h3 id="fill-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|Inline|
|4XX|Client Error|Client Error|[ResponseError](#schemaresponseerror)|
|5XX|Server Error|Server Error|[ResponseError](#schemaresponseerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyAuth
</aside>

# Schemas

<h2 id="tocS_Body_create">Body_create</h2>
<!-- backwards compatibility -->
<a id="schemabody_create"></a>
<a id="schema_Body_create"></a>
<a id="tocSbody_create"></a>
<a id="tocsbody_create"></a>

```json
{
  "file": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|file|string(binary)|true|none|none|

<h2 id="tocS_BoundingBox">BoundingBox</h2>
<!-- backwards compatibility -->
<a id="schemaboundingbox"></a>
<a id="schema_BoundingBox"></a>
<a id="tocSboundingbox"></a>
<a id="tocsboundingbox"></a>

```json
{
  "height": 1,
  "width": 1,
  "x": 0,
  "y": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|height|number|true|none|none|
|width|number|true|none|none|
|x|number|true|none|none|
|y|number|true|none|none|

<h2 id="tocS_CheckBoxField">CheckBoxField</h2>
<!-- backwards compatibility -->
<a id="schemacheckboxfield"></a>
<a id="schema_CheckBoxField"></a>
<a id="tocScheckboxfield"></a>
<a id="tocscheckboxfield"></a>

```json
{
  "bbox": {
    "height": 1,
    "width": 1,
    "x": 0,
    "y": 0
  },
  "eval": true,
  "name": "string",
  "page": 0,
  "required": true,
  "type": "check"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bbox|[BoundingBox](#schemaboundingbox)|true|none|none|
|eval|boolean \| string|false|none|none|
|name|string|true|none|none|
|page|integer|true|none|none|
|required|boolean|false|none|none|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|check|

<h2 id="tocS_CreateOrUpdateTemplateRequest">CreateOrUpdateTemplateRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreateorupdatetemplaterequest"></a>
<a id="schema_CreateOrUpdateTemplateRequest"></a>
<a id="tocScreateorupdatetemplaterequest"></a>
<a id="tocscreateorupdatetemplaterequest"></a>

```json
{
  "components": [
    {}
  ],
  "css": "string",
  "footer_html": "string",
  "format": "a0",
  "header_html": "string",
  "name": "string",
  "orientation": "landscape",
  "preview_payload": {},
  "template_html": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|components|[object]|true|none|none|
|css|string|true|none|none|
|footer_html|string|false|none|none|
|format|[Format](#schemaformat)|true|none|An enumeration.|
|header_html|string|false|none|none|
|name|string|true|none|none|
|orientation|[Orientation](#schemaorientation)|true|none|An enumeration.|
|preview_payload|object|true|none|none|
|template_html|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|format|a0|
|format|a1|
|format|a2|
|format|a3|
|format|a4|
|format|a5|
|format|a6|
|orientation|landscape|
|orientation|portrait|

<h2 id="tocS_DateField">DateField</h2>
<!-- backwards compatibility -->
<a id="schemadatefield"></a>
<a id="schema_DateField"></a>
<a id="tocSdatefield"></a>
<a id="tocsdatefield"></a>

```json
{
  "bbox": {
    "height": 1,
    "width": 1,
    "x": 0,
    "y": 0
  },
  "cell_count": 0,
  "cell_offset": 0,
  "cells": false,
  "color": "black",
  "font": "helvetica",
  "font_size": 10,
  "format": "string",
  "h_align": "L",
  "locale": "en_US",
  "name": "string",
  "page": 0,
  "required": true,
  "type": "date",
  "v_align": "B"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bbox|[BoundingBox](#schemaboundingbox)|true|none|none|
|cell_count|integer|false|none|none|
|cell_offset|integer|false|none|none|
|cells|boolean|false|none|none|
|color|string(color)|false|none|none|
|font|object|false|none|none|
|font_size|integer|false|none|none|
|format|string|true|none|none|
|h_align|object|false|none|none|
|locale|string|false|none|none|
|name|string|true|none|none|
|page|integer|true|none|none|
|required|boolean|false|none|none|
|type|string|true|none|none|
|v_align|object|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|date|

<h2 id="tocS_DesignerTemplate">DesignerTemplate</h2>
<!-- backwards compatibility -->
<a id="schemadesignertemplate"></a>
<a id="schema_DesignerTemplate"></a>
<a id="tocSdesignertemplate"></a>
<a id="tocsdesignertemplate"></a>

```json
{
  "components": [
    {}
  ],
  "created_at": "1970-01-01T00:00:00Z",
  "css": "string",
  "footer_html": "string",
  "format": "a0",
  "header_html": "string",
  "id": "string",
  "name": "string",
  "orientation": "landscape",
  "preview_payload": {},
  "template_html": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|components|[object]|true|none|none|
|created_at|string(date-time)|false|none|none|
|css|string|true|none|none|
|footer_html|string|false|none|none|
|format|[Format](#schemaformat)|true|none|An enumeration.|
|header_html|string|false|none|none|
|id|string|false|none|none|
|name|string|true|none|none|
|orientation|[Orientation](#schemaorientation)|true|none|An enumeration.|
|preview_payload|object|true|none|none|
|template_html|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|format|a0|
|format|a1|
|format|a2|
|format|a3|
|format|a4|
|format|a5|
|format|a6|
|orientation|landscape|
|orientation|portrait|

<h2 id="tocS_FillTemplateRequest">FillTemplateRequest</h2>
<!-- backwards compatibility -->
<a id="schemafilltemplaterequest"></a>
<a id="schema_FillTemplateRequest"></a>
<a id="tocSfilltemplaterequest"></a>
<a id="tocsfilltemplaterequest"></a>

```json
{
  "data": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|object|false|none|none|

<h2 id="tocS_Font">Font</h2>
<!-- backwards compatibility -->
<a id="schemafont"></a>
<a id="schema_Font"></a>
<a id="tocSfont"></a>
<a id="tocsfont"></a>

```json
"courier"
```

An enumeration.

<h2 id="tocS_Format">Format</h2>
<!-- backwards compatibility -->
<a id="schemaformat"></a>
<a id="schema_Format"></a>
<a id="tocSformat"></a>
<a id="tocsformat"></a>

```json
"a0"
```

An enumeration.

<h2 id="tocS_GeneratePDFPayload">GeneratePDFPayload</h2>
<!-- backwards compatibility -->
<a id="schemageneratepdfpayload"></a>
<a id="schema_GeneratePDFPayload"></a>
<a id="tocSgeneratepdfpayload"></a>
<a id="tocsgeneratepdfpayload"></a>

```json
{
  "data": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|object|true|none|none|

<h2 id="tocS_HorizontalAlign">HorizontalAlign</h2>
<!-- backwards compatibility -->
<a id="schemahorizontalalign"></a>
<a id="schema_HorizontalAlign"></a>
<a id="tocShorizontalalign"></a>
<a id="tocshorizontalalign"></a>

```json
"L"
```

An enumeration.

<h2 id="tocS_ImageAnchor">ImageAnchor</h2>
<!-- backwards compatibility -->
<a id="schemaimageanchor"></a>
<a id="schema_ImageAnchor"></a>
<a id="tocSimageanchor"></a>
<a id="tocsimageanchor"></a>

```json
"nw"
```

An enumeration.

<h2 id="tocS_ImageField">ImageField</h2>
<!-- backwards compatibility -->
<a id="schemaimagefield"></a>
<a id="schema_ImageField"></a>
<a id="tocSimagefield"></a>
<a id="tocsimagefield"></a>

```json
{
  "anchor": "c",
  "bbox": {
    "height": 1,
    "width": 1,
    "x": 0,
    "y": 0
  },
  "name": "string",
  "page": 0,
  "required": true,
  "type": "image"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|anchor|object|false|none|none|
|bbox|[BoundingBox](#schemaboundingbox)|true|none|none|
|name|string|true|none|none|
|page|integer|true|none|none|
|required|boolean|false|none|none|
|type|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|image|

<h2 id="tocS_Orientation">Orientation</h2>
<!-- backwards compatibility -->
<a id="schemaorientation"></a>
<a id="schema_Orientation"></a>
<a id="tocSorientation"></a>
<a id="tocsorientation"></a>

```json
"landscape"
```

An enumeration.

<h2 id="tocS_PreviewModel">PreviewModel</h2>
<!-- backwards compatibility -->
<a id="schemapreviewmodel"></a>
<a id="schema_PreviewModel"></a>
<a id="tocSpreviewmodel"></a>
<a id="tocspreviewmodel"></a>

```json
{
  "css": "string",
  "data": {},
  "footer_html": "string",
  "header_html": "string",
  "template_html": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|css|string|true|none|none|
|data|object|true|none|none|
|footer_html|string|false|none|none|
|header_html|string|false|none|none|
|template_html|string|true|none|none|

<h2 id="tocS_PreviewResponse">PreviewResponse</h2>
<!-- backwards compatibility -->
<a id="schemapreviewresponse"></a>
<a id="schema_PreviewResponse"></a>
<a id="tocSpreviewresponse"></a>
<a id="tocspreviewresponse"></a>

```json
{
  "html": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|html|string|true|none|none|

<h2 id="tocS_ResponseError">ResponseError</h2>
<!-- backwards compatibility -->
<a id="schemaresponseerror"></a>
<a id="schema_ResponseError"></a>
<a id="tocSresponseerror"></a>
<a id="tocsresponseerror"></a>

```json
{
  "message": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|true|none|none|

<h2 id="tocS_ResponseOk_DesignerTemplate_">ResponseOk_DesignerTemplate_</h2>
<!-- backwards compatibility -->
<a id="schemaresponseok_designertemplate_"></a>
<a id="schema_ResponseOk_DesignerTemplate_"></a>
<a id="tocSresponseok_designertemplate_"></a>
<a id="tocsresponseok_designertemplate_"></a>

```json
{
  "results": {
    "components": [
      {}
    ],
    "created_at": "1970-01-01T00:00:00Z",
    "css": "string",
    "footer_html": "string",
    "format": "a0",
    "header_html": "string",
    "id": "string",
    "name": "string",
    "orientation": "landscape",
    "preview_payload": {},
    "template_html": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|results|[DesignerTemplate](#schemadesignertemplate)|true|none|none|

<h2 id="tocS_ResponseOk_HttpUrl_">ResponseOk_HttpUrl_</h2>
<!-- backwards compatibility -->
<a id="schemaresponseok_httpurl_"></a>
<a id="schema_ResponseOk_HttpUrl_"></a>
<a id="tocSresponseok_httpurl_"></a>
<a id="tocsresponseok_httpurl_"></a>

```json
{
  "results": "http://example.com"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|results|string(uri)|true|none|none|

<h2 id="tocS_ResponseOk_List_apps.api.routes_templates.Template__">ResponseOk_List_apps.api.routes_templates.Template__</h2>
<!-- backwards compatibility -->
<a id="schemaresponseok_list_apps.api.routes_templates.template__"></a>
<a id="schema_ResponseOk_List_apps.api.routes_templates.Template__"></a>
<a id="tocSresponseok_list_apps.api.routes_templates.template__"></a>
<a id="tocsresponseok_list_apps.api.routes_templates.template__"></a>

```json
{
  "results": [
    {
      "created_at": "1970-01-01T00:00:00Z",
      "fields": [],
      "id": "string",
      "name": "string",
      "pages": 1,
      "size_bytes": 0
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|results|[[Template](#schematemplate)]|true|none|none|

<h2 id="tocS_ResponseOk_List_fillr.entities.designer_template.DesignerTemplate__">ResponseOk_List_fillr.entities.designer_template.DesignerTemplate__</h2>
<!-- backwards compatibility -->
<a id="schemaresponseok_list_fillr.entities.designer_template.designertemplate__"></a>
<a id="schema_ResponseOk_List_fillr.entities.designer_template.DesignerTemplate__"></a>
<a id="tocSresponseok_list_fillr.entities.designer_template.designertemplate__"></a>
<a id="tocsresponseok_list_fillr.entities.designer_template.designertemplate__"></a>

```json
{
  "results": [
    {
      "components": [
        {}
      ],
      "created_at": "1970-01-01T00:00:00Z",
      "css": "string",
      "footer_html": "string",
      "format": "a0",
      "header_html": "string",
      "id": "string",
      "name": "string",
      "orientation": "landscape",
      "preview_payload": {},
      "template_html": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|results|[[DesignerTemplate](#schemadesignertemplate)]|true|none|none|

<h2 id="tocS_ResponseOk_NoneType_">ResponseOk_NoneType_</h2>
<!-- backwards compatibility -->
<a id="schemaresponseok_nonetype_"></a>
<a id="schema_ResponseOk_NoneType_"></a>
<a id="tocSresponseok_nonetype_"></a>
<a id="tocsresponseok_nonetype_"></a>

```json
{
  "results": null
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|results|object \| null|true|none|none|

<h2 id="tocS_ResponseOk_PreviewResponse_">ResponseOk_PreviewResponse_</h2>
<!-- backwards compatibility -->
<a id="schemaresponseok_previewresponse_"></a>
<a id="schema_ResponseOk_PreviewResponse_"></a>
<a id="tocSresponseok_previewresponse_"></a>
<a id="tocsresponseok_previewresponse_"></a>

```json
{
  "results": {
    "html": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|results|[PreviewResponse](#schemapreviewresponse)|true|none|none|

<h2 id="tocS_ResponseOk_Template_">ResponseOk_Template_</h2>
<!-- backwards compatibility -->
<a id="schemaresponseok_template_"></a>
<a id="schema_ResponseOk_Template_"></a>
<a id="tocSresponseok_template_"></a>
<a id="tocsresponseok_template_"></a>

```json
{
  "results": {
    "created_at": "1970-01-01T00:00:00Z",
    "fields": [],
    "id": "string",
    "name": "string",
    "pages": 1,
    "size_bytes": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|results|[Template](#schematemplate)|true|none|none|

<h2 id="tocS_Template">Template</h2>
<!-- backwards compatibility -->
<a id="schematemplate"></a>
<a id="schema_Template"></a>
<a id="tocStemplate"></a>
<a id="tocstemplate"></a>

```json
{
  "created_at": "1970-01-01T00:00:00Z",
  "fields": [],
  "id": "string",
  "name": "string",
  "pages": 1,
  "size_bytes": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|created_at|string(date-time)|false|none|none|
|fields|[[DateField](#schemadatefield) \| [TextField](#schematextfield) \| [ImageField](#schemaimagefield) \| [CheckBoxField](#schemacheckboxfield)]|false|none|none|
|id|string|false|none|none|
|name|string|false|none|none|
|pages|integer|true|none|none|
|size_bytes|integer|false|none|none|

<h2 id="tocS_TextField">TextField</h2>
<!-- backwards compatibility -->
<a id="schematextfield"></a>
<a id="schema_TextField"></a>
<a id="tocStextfield"></a>
<a id="tocstextfield"></a>

```json
{
  "bbox": {
    "height": 1,
    "width": 1,
    "x": 0,
    "y": 0
  },
  "cell_count": 0,
  "cell_offset": 0,
  "cells": false,
  "color": "black",
  "font": "helvetica",
  "font_size": 10,
  "h_align": "L",
  "name": "string",
  "page": 0,
  "required": true,
  "type": "text",
  "v_align": "B"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bbox|[BoundingBox](#schemaboundingbox)|true|none|none|
|cell_count|integer|false|none|none|
|cell_offset|integer|false|none|none|
|cells|boolean|false|none|none|
|color|string(color)|false|none|none|
|font|object|false|none|none|
|font_size|integer|false|none|none|
|h_align|object|false|none|none|
|name|string|true|none|none|
|page|integer|true|none|none|
|required|boolean|false|none|none|
|type|string|true|none|none|
|v_align|object|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|text|

<h2 id="tocS_UpdateTemplateRequest">UpdateTemplateRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatetemplaterequest"></a>
<a id="schema_UpdateTemplateRequest"></a>
<a id="tocSupdatetemplaterequest"></a>
<a id="tocsupdatetemplaterequest"></a>

```json
{
  "fields": [
    {
      "bbox": {
        "height": 1,
        "width": 1,
        "x": 0,
        "y": 0
      },
      "cell_count": 0,
      "cell_offset": 0,
      "cells": false,
      "color": "black",
      "font": "helvetica",
      "font_size": 10,
      "format": "string",
      "h_align": "L",
      "locale": "en_US",
      "name": "string",
      "page": 0,
      "required": true,
      "type": "date",
      "v_align": "B"
    }
  ],
  "name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|fields|[[DateField](#schemadatefield) \| [TextField](#schematextfield) \| [ImageField](#schemaimagefield) \| [CheckBoxField](#schemacheckboxfield)]|true|none|none|
|name|string|false|none|none|

<h2 id="tocS_VerticalAlign">VerticalAlign</h2>
<!-- backwards compatibility -->
<a id="schemaverticalalign"></a>
<a id="schema_VerticalAlign"></a>
<a id="tocSverticalalign"></a>
<a id="tocsverticalalign"></a>

```json
"T"
```

An enumeration.
