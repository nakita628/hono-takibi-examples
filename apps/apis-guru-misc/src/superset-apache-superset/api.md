<h1 id="superset">Superset v1</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Superset

Base URLs:

* <a href="http://superset.apache.local">http://superset.apache.local</a>

* <a href="https://api.apis.guru/api/v1">https://api.apis.guru/api/v1</a>

# Authentication

- HTTP Authentication, scheme: bearer

- HTTP Authentication, scheme: bearer

<h1 id="superset-annotation-layers">Annotation Layers</h1>

## get/annotation_layer/

> Code samples

```bash
curl https://example.com/annotation_layer/ \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /annotation_layer/`

Get a list of Annotation layers, use Rison or JSON query parameters for filtering, sorting, pagination and for selecting specific columns and metadata.

<h3 id="getannotationlayer-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|q|query|[get_list_schema](#schemaget_list_schema)|false|none|

> Example responses

> 200 Response

```json
{
  "count": 0,
  "description_columns": {
    "column_name": "A Nice description for the column"
  },
  "ids": [
    "string"
  ],
  "label_columns": {
    "column_name": "A Nice label for the column"
  },
  "list_columns": [
    "string"
  ],
  "list_title": "List Items",
  "order_columns": [
    "string"
  ],
  "result": [
    {
      "changed_by": {
        "first_name": "string",
        "last_name": "string"
      },
      "changed_on": "1970-01-01T00:00:00Z",
      "changed_on_delta_humanized": null,
      "created_by": {
        "first_name": "string",
        "last_name": "string"
      },
      "created_on": "1970-01-01T00:00:00Z",
      "descr": "string",
      "id": 0,
      "name": "string"
    }
  ]
}
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

> 422 Response

```json
{
  "message": "string"
}
```

> 500 Response

```json
{
  "message": "string"
}
```

<h3 id="getannotationlayer-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Items from Model|Inline|
|400|Bad Request|Bad request|Inline|
|401|Unauthorized|Unauthorized|Inline|
|422|Unprocessable Entity|Could not process entity|Inline|
|500|Internal Server Error|Fatal error|Inline|

<h3 id="getannotationlayer-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|number|false|none|The total record count on the backend|
|description_columns|object|false|none|none|
|» column_name|string|false|none|The description for the column name. Will be translated by babel|
|ids|[string]|false|none|A list of item ids, useful when you don't know the column id|
|label_columns|object|false|none|none|
|» column_name|string|false|none|The label for the column name. Will be translated by babel|
|list_columns|[string]|false|none|A list of columns|
|list_title|string|false|none|A title to render. Will be translated by babel|
|order_columns|[string]|false|none|A list of allowed columns to sort|
|result|[[AnnotationLayerRestApi.get_list](#schemaannotationlayerrestapi.get_list)]|false|none|The result from the get list query|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **422**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwt
</aside>

## post/annotation_layer/

> Code samples

```bash
curl https://example.com/annotation_layer/ \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "descr": "string",
    "name": "string"
  }'
```

`POST /annotation_layer/`

Create an Annotation layer

> Body parameter

```json
{
  "descr": "string",
  "name": "string"
}
```

<h3 id="postannotationlayer-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[AnnotationLayerRestApi.post](#schemaannotationlayerrestapi.post)|true|Annotation Layer schema|
|» descr|body|string \| null|false|Give a description for this annotation layer|
|» name|body|string|false|The annotation layer name|

> Example responses

> 201 Response

```json
{
  "id": 0,
  "result": {
    "descr": "string",
    "name": "string"
  }
}
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

> 500 Response

```json
{
  "message": "string"
}
```

<h3 id="postannotationlayer-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Annotation added|Inline|
|400|Bad Request|Bad request|Inline|
|401|Unauthorized|Unauthorized|Inline|
|404|Not Found|Not found|Inline|
|500|Internal Server Error|Fatal error|Inline|

<h3 id="postannotationlayer-responseschema">Response Schema</h3>

Status Code **201**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|number|false|none|none|
|result|[AnnotationLayerRestApi.post](#schemaannotationlayerrestapi.post)|false|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwt
</aside>

## delete/annotation_layer/

> Code samples

```bash
curl https://example.com/annotation_layer/ \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /annotation_layer/`

Deletes multiple annotation layers in a bulk operation.

<h3 id="deleteannotationlayer-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|q|query|[get_delete_ids_schema](#schemaget_delete_ids_schema)|false|none|

> Example responses

> 200 Response

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

> 422 Response

```json
{
  "message": "string"
}
```

> 500 Response

```json
{
  "message": "string"
}
```

<h3 id="deleteannotationlayer-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|CSS templates bulk delete|Inline|
|401|Unauthorized|Unauthorized|Inline|
|404|Not Found|Not found|Inline|
|422|Unprocessable Entity|Could not process entity|Inline|
|500|Internal Server Error|Fatal error|Inline|

<h3 id="deleteannotationlayer-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **422**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwt
</aside>

## get/annotation_layer/_info

> Code samples

```bash
curl https://example.com/annotation_layer/_info \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /annotation_layer/_info`

Get metadata information about this API resource

<h3 id="getannotationlayerinfo-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|q|query|[get_info_schema](#schemaget_info_schema)|false|none|

> Example responses

> 200 Response

```json
{
  "add_columns": {},
  "edit_columns": {},
  "filters": {
    "column_name": [
      {
        "name": "string",
        "operator": "string"
      }
    ]
  },
  "permissions": [
    "string"
  ]
}
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

> 422 Response

```json
{
  "message": "string"
}
```

> 500 Response

```json
{
  "message": "string"
}
```

<h3 id="getannotationlayerinfo-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Item from Model|Inline|
|400|Bad Request|Bad request|Inline|
|401|Unauthorized|Unauthorized|Inline|
|422|Unprocessable Entity|Could not process entity|Inline|
|500|Internal Server Error|Fatal error|Inline|

<h3 id="getannotationlayerinfo-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|add_columns|object|false|none|none|
|edit_columns|object|false|none|none|
|filters|object|false|none|none|
|» column_name|[object]|false|none|none|
|» » name|string|false|none|The filter name. Will be translated by babel|
|» » operator|string|false|none|The filter operation key to use on list filters|
|permissions|[string]|false|none|The user permissions for this API resource|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **422**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwt
</aside>

## get/annotation_layer/related/{column_name}

> Code samples

```bash
curl https://example.com/annotation_layer/related/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /annotation_layer/related/{column_name}`

<h3 id="getannotationlayerrelatedcolumnname-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|column_name|path|string|true|none|
|q|query|[get_related_schema](#schemaget_related_schema)|false|none|

> Example responses

> 200 Response

```json
{
  "count": 0,
  "result": [
    {
      "text": "string",
      "value": 0
    }
  ]
}
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

> 500 Response

```json
{
  "message": "string"
}
```

<h3 id="getannotationlayerrelatedcolumnname-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Related column data|[RelatedResponseSchema](#schemarelatedresponseschema)|
|400|Bad Request|Bad request|Inline|
|401|Unauthorized|Unauthorized|Inline|
|404|Not Found|Not found|Inline|
|500|Internal Server Error|Fatal error|Inline|

<h3 id="getannotationlayerrelatedcolumnname-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwt
</aside>

## get/annotation_layer/{pk}

> Code samples

```bash
curl https://example.com/annotation_layer/0 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /annotation_layer/{pk}`

Get an Annotation layer

<h3 id="getannotationlayerpk-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|pk|path|integer|true|none|
|q|query|[get_item_schema](#schemaget_item_schema)|false|none|

> Example responses

> 200 Response

```json
{
  "description_columns": {
    "column_name": "A Nice description for the column"
  },
  "id": "string",
  "label_columns": {
    "column_name": "A Nice label for the column"
  },
  "result": {
    "descr": "string",
    "id": 0,
    "name": "string"
  },
  "show_columns": [
    "string"
  ],
  "show_title": "Show Item Details"
}
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

> 422 Response

```json
{
  "message": "string"
}
```

> 500 Response

```json
{
  "message": "string"
}
```

<h3 id="getannotationlayerpk-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Item from Model|Inline|
|400|Bad Request|Bad request|Inline|
|401|Unauthorized|Unauthorized|Inline|
|404|Not Found|Not found|Inline|
|422|Unprocessable Entity|Could not process entity|Inline|
|500|Internal Server Error|Fatal error|Inline|

<h3 id="getannotationlayerpk-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description_columns|object|false|none|none|
|» column_name|string|false|none|The description for the column name. Will be translated by babel|
|id|string|false|none|The item id|
|label_columns|object|false|none|none|
|» column_name|string|false|none|The label for the column name. Will be translated by babel|
|result|[AnnotationLayerRestApi.get](#schemaannotationlayerrestapi.get)|false|none|none|
|show_columns|[string]|false|none|A list of columns|
|show_title|string|false|none|A title to render. Will be translated by babel|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **422**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwt
</aside>

## put/annotation_layer/{pk}

> Code samples

```bash
curl https://example.com/annotation_layer/0 \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "descr": "string",
    "name": "string"
  }'
```

`PUT /annotation_layer/{pk}`

Update an Annotation layer

> Body parameter

```json
{
  "descr": "string",
  "name": "string"
}
```

<h3 id="putannotationlayerpk-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|pk|path|integer|true|The annotation layer pk for this annotation|
|body|body|[AnnotationLayerRestApi.put](#schemaannotationlayerrestapi.put)|true|Annotation schema|
|» descr|body|string|false|Give a description for this annotation layer|
|» name|body|string|false|The annotation layer name|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "result": {
    "descr": "string",
    "name": "string"
  }
}
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

> 500 Response

```json
{
  "message": "string"
}
```

<h3 id="putannotationlayerpk-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Annotation changed|Inline|
|400|Bad Request|Bad request|Inline|
|401|Unauthorized|Unauthorized|Inline|
|404|Not Found|Not found|Inline|
|500|Internal Server Error|Fatal error|Inline|

<h3 id="putannotationlayerpk-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|number|false|none|none|
|result|[AnnotationLayerRestApi.put](#schemaannotationlayerrestapi.put)|false|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwt
</aside>

## delete/annotation_layer/{pk}

> Code samples

```bash
curl https://example.com/annotation_layer/0 \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /annotation_layer/{pk}`

Delete Annotation layer

<h3 id="deleteannotationlayerpk-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|pk|path|integer|true|The annotation layer pk for this annotation|

> Example responses

> 200 Response

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

> 422 Response

```json
{
  "message": "string"
}
```

> 500 Response

```json
{
  "message": "string"
}
```

<h3 id="deleteannotationlayerpk-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Item deleted|Inline|
|404|Not Found|Not found|Inline|
|422|Unprocessable Entity|Could not process entity|Inline|
|500|Internal Server Error|Fatal error|Inline|

<h3 id="deleteannotationlayerpk-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **422**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwt
</aside>

## get/annotation_layer/{pk}/annotation/

> Code samples

```bash
curl https://example.com/annotation_layer/0/annotation/ \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /annotation_layer/{pk}/annotation/`

Get a list of Annotation layers, use Rison or JSON query parameters for filtering, sorting, pagination and for selecting specific columns and metadata.

<h3 id="getannotationlayerpkannotation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|pk|path|integer|true|The annotation layer id for this annotation|
|q|query|[get_list_schema](#schemaget_list_schema)|false|none|

> Example responses

> 200 Response

```json
{
  "count": 0,
  "ids": [
    "string"
  ],
  "result": [
    {
      "changed_by": {
        "first_name": "string",
        "id": 0
      },
      "changed_on_delta_humanized": null,
      "created_by": {
        "first_name": "string",
        "id": 0
      },
      "end_dttm": "1970-01-01T00:00:00Z",
      "id": 0,
      "long_descr": "string",
      "short_descr": "string",
      "start_dttm": "1970-01-01T00:00:00Z"
    }
  ]
}
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

> 422 Response

```json
{
  "message": "string"
}
```

> 500 Response

```json
{
  "message": "string"
}
```

<h3 id="getannotationlayerpkannotation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Items from Annotations|Inline|
|400|Bad Request|Bad request|Inline|
|401|Unauthorized|Unauthorized|Inline|
|422|Unprocessable Entity|Could not process entity|Inline|
|500|Internal Server Error|Fatal error|Inline|

<h3 id="getannotationlayerpkannotation-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|number|false|none|The total record count on the backend|
|ids|[string]|false|none|A list of annotation ids|
|result|[[AnnotationRestApi.get_list](#schemaannotationrestapi.get_list)]|false|none|The result from the get list query|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **422**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwt
</aside>

## post/annotation_layer/{pk}/annotation/

> Code samples

```bash
curl https://example.com/annotation_layer/0/annotation/ \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "end_dttm": "1970-01-01T00:00:00Z",
    "json_metadata": "string",
    "long_descr": "string",
    "short_descr": "string",
    "start_dttm": "1970-01-01T00:00:00Z"
  }'
```

`POST /annotation_layer/{pk}/annotation/`

Create an Annotation layer

> Body parameter

```json
{
  "end_dttm": "1970-01-01T00:00:00Z",
  "json_metadata": "string",
  "long_descr": "string",
  "short_descr": "string",
  "start_dttm": "1970-01-01T00:00:00Z"
}
```

<h3 id="postannotationlayerpkannotation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|pk|path|integer|true|The annotation layer pk for this annotation|
|body|body|[AnnotationRestApi.post](#schemaannotationrestapi.post)|true|Annotation schema|
|» end_dttm|body|string(date-time)|false|The annotation end date time|
|» json_metadata|body|string \| null|false|JSON metadata|
|» long_descr|body|string \| null|false|A long description|
|» short_descr|body|string|false|A short description|
|» start_dttm|body|string(date-time)|false|The annotation start date time|

> Example responses

> 201 Response

```json
{
  "id": 0,
  "result": {
    "end_dttm": "1970-01-01T00:00:00Z",
    "json_metadata": "string",
    "long_descr": "string",
    "short_descr": "string",
    "start_dttm": "1970-01-01T00:00:00Z"
  }
}
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

> 500 Response

```json
{
  "message": "string"
}
```

<h3 id="postannotationlayerpkannotation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Annotation added|Inline|
|400|Bad Request|Bad request|Inline|
|401|Unauthorized|Unauthorized|Inline|
|404|Not Found|Not found|Inline|
|500|Internal Server Error|Fatal error|Inline|

<h3 id="postannotationlayerpkannotation-responseschema">Response Schema</h3>

Status Code **201**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|number|false|none|none|
|result|[AnnotationRestApi.post](#schemaannotationrestapi.post)|false|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwt
</aside>

## delete/annotation_layer/{pk}/annotation/

> Code samples

```bash
curl https://example.com/annotation_layer/0/annotation/ \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /annotation_layer/{pk}/annotation/`

Deletes multiple annotation in a bulk operation.

<h3 id="deleteannotationlayerpkannotation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|pk|path|integer|true|The annotation layer pk for this annotation|
|q|query|[get_delete_ids_schema](#schemaget_delete_ids_schema)|false|none|

> Example responses

> 200 Response

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

> 422 Response

```json
{
  "message": "string"
}
```

> 500 Response

```json
{
  "message": "string"
}
```

<h3 id="deleteannotationlayerpkannotation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Annotations bulk delete|Inline|
|401|Unauthorized|Unauthorized|Inline|
|404|Not Found|Not found|Inline|
|422|Unprocessable Entity|Could not process entity|Inline|
|500|Internal Server Error|Fatal error|Inline|

<h3 id="deleteannotationlayerpkannotation-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **422**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwt
</aside>

## get/annotation_layer/{pk}/annotation/{annotation_id}

> Code samples

```bash
curl https://example.com/annotation_layer/0/annotation/0 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /annotation_layer/{pk}/annotation/{annotation_id}`

Get an Annotation layer

<h3 id="getannotationlayerpkannotationannotationid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|pk|path|integer|true|The annotation layer pk for this annotation|
|annotation_id|path|integer|true|The annotation pk|
|q|query|[get_item_schema](#schemaget_item_schema)|false|none|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "result": {
    "end_dttm": "1970-01-01T00:00:00Z",
    "id": 0,
    "json_metadata": "string",
    "layer": {
      "id": 0,
      "name": "string"
    },
    "long_descr": "string",
    "short_descr": "string",
    "start_dttm": "1970-01-01T00:00:00Z"
  }
}
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

> 422 Response

```json
{
  "message": "string"
}
```

> 500 Response

```json
{
  "message": "string"
}
```

<h3 id="getannotationlayerpkannotationannotationid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Item from Model|Inline|
|400|Bad Request|Bad request|Inline|
|401|Unauthorized|Unauthorized|Inline|
|404|Not Found|Not found|Inline|
|422|Unprocessable Entity|Could not process entity|Inline|
|500|Internal Server Error|Fatal error|Inline|

<h3 id="getannotationlayerpkannotationannotationid-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|The item id|
|result|[AnnotationRestApi.get](#schemaannotationrestapi.get)|false|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **422**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwt
</aside>

## put/annotation_layer/{pk}/annotation/{annotation_id}

> Code samples

```bash
curl https://example.com/annotation_layer/0/annotation/0 \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "end_dttm": "1970-01-01T00:00:00Z",
    "json_metadata": "string",
    "long_descr": "string",
    "short_descr": "string",
    "start_dttm": "1970-01-01T00:00:00Z"
  }'
```

`PUT /annotation_layer/{pk}/annotation/{annotation_id}`

Update an Annotation layer

> Body parameter

```json
{
  "end_dttm": "1970-01-01T00:00:00Z",
  "json_metadata": "string",
  "long_descr": "string",
  "short_descr": "string",
  "start_dttm": "1970-01-01T00:00:00Z"
}
```

<h3 id="putannotationlayerpkannotationannotationid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|pk|path|integer|true|The annotation layer pk for this annotation|
|annotation_id|path|integer|true|The annotation pk for this annotation|
|body|body|[AnnotationRestApi.put](#schemaannotationrestapi.put)|true|Annotation schema|
|» end_dttm|body|string(date-time)|false|The annotation end date time|
|» json_metadata|body|string|false|JSON metadata|
|» long_descr|body|string|false|A long description|
|» short_descr|body|string|false|A short description|
|» start_dttm|body|string(date-time)|false|The annotation start date time|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "result": {
    "end_dttm": "1970-01-01T00:00:00Z",
    "json_metadata": "string",
    "long_descr": "string",
    "short_descr": "string",
    "start_dttm": "1970-01-01T00:00:00Z"
  }
}
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

> 500 Response

```json
{
  "message": "string"
}
```

<h3 id="putannotationlayerpkannotationannotationid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Annotation changed|Inline|
|400|Bad Request|Bad request|Inline|
|401|Unauthorized|Unauthorized|Inline|
|404|Not Found|Not found|Inline|
|500|Internal Server Error|Fatal error|Inline|

<h3 id="putannotationlayerpkannotationannotationid-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|number|false|none|none|
|result|[AnnotationRestApi.put](#schemaannotationrestapi.put)|false|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwt
</aside>

## delete/annotation_layer/{pk}/annotation/{annotation_id}

> Code samples

```bash
curl https://example.com/annotation_layer/0/annotation/0 \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /annotation_layer/{pk}/annotation/{annotation_id}`

Delete Annotation layer

<h3 id="deleteannotationlayerpkannotationannotationid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|pk|path|integer|true|The annotation layer pk for this annotation|
|annotation_id|path|integer|true|The annotation pk for this annotation|

> Example responses

> 200 Response

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

> 422 Response

```json
{
  "message": "string"
}
```

> 500 Response

```json
{
  "message": "string"
}
```

<h3 id="deleteannotationlayerpkannotationannotationid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Item deleted|Inline|
|404|Not Found|Not found|Inline|
|422|Unprocessable Entity|Could not process entity|Inline|
|500|Internal Server Error|Fatal error|Inline|

<h3 id="deleteannotationlayerpkannotationannotationid-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **422**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwt
</aside>

<h1 id="superset-asynceventsrestapi">AsyncEventsRestApi</h1>

## get/async_event/

> Code samples

```bash
curl https://example.com/async_event/ \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /async_event/`

Reads off of the Redis events stream, using the user's JWT token and optional query params for last event received.

<h3 id="getasyncevent-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|last_id|query|string|false|Last ID received by the client|

> Example responses

> 200 Response

```json
{
  "result": [
    {
      "channel_id": "string",
      "errors": [
        {}
      ],
      "id": "string",
      "job_id": "string",
      "result_url": "string",
      "status": "string",
      "user_id": 0
    }
  ]
}
```

> 401 Response

```json
{
  "message": "string"
}
```

> 500 Response

```json
{
  "message": "string"
}
```

<h3 id="getasyncevent-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Async event results|Inline|
|401|Unauthorized|Unauthorized|Inline|
|500|Internal Server Error|Fatal error|Inline|

<h3 id="getasyncevent-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|result|[object]|false|none|none|
|» channel_id|string|false|none|none|
|» errors|[object]|false|none|none|
|» id|string|false|none|none|
|» job_id|string|false|none|none|
|» result_url|string|false|none|none|
|» status|string|false|none|none|
|» user_id|integer|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwt
</aside>

<h1 id="superset-cacherestapi">CacheRestApi</h1>

## post/cachekey/invalidate

> Code samples

```bash
curl https://example.com/cachekey/invalidate \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "datasource_uids": [
      "string"
    ],
    "datasources": [
      {
        "database_name": "string",
        "datasource_name": "string",
        "datasource_type": "druid",
        "schema": "string"
      }
    ]
  }'
```

`POST /cachekey/invalidate`

Takes a list of datasources, finds the associated cache records and invalidates them and removes the database records

> Body parameter

```json
{
  "datasource_uids": [
    "string"
  ],
  "datasources": [
    {
      "database_name": "string",
      "datasource_name": "string",
      "datasource_type": "druid",
      "schema": "string"
    }
  ]
}
```

<h3 id="postcachekeyinvalidate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[CacheInvalidationRequestSchema](#schemacacheinvalidationrequestschema)|true|A list of datasources uuid or the tuples of database and datasource names|
|» datasource_uids|body|[string]|false|The uid of the dataset/datasource this new chart will use. A complete datasource identification needs `datasouce_uid` |
|» datasources|body|[[Datasource](#schemadatasource)]|false|A list of the data source and database names|

> Example responses

> 400 Response

```json
{
  "message": "string"
}
```

> 500 Response

```json
{
  "message": "string"
}
```

<h3 id="postcachekeyinvalidate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|cache was successfully invalidated|None|
|400|Bad Request|Bad request|Inline|
|500|Internal Server Error|Fatal error|Inline|

<h3 id="postcachekeyinvalidate-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwt
</aside>

<h1 id="superset-charts">Charts</h1>

## get/chart/

> Code samples

```bash
curl https://example.com/chart/ \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /chart/`

Get a list of charts, use Rison or JSON query parameters for filtering, sorting, pagination and  for selecting specific columns and metadata.

<h3 id="getchart-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|q|query|[get_list_schema](#schemaget_list_schema)|false|none|

> Example responses

> 200 Response

```json
{
  "count": 0,
  "description_columns": {
    "column_name": "A Nice description for the column"
  },
  "ids": [
    "string"
  ],
  "label_columns": {
    "column_name": "A Nice label for the column"
  },
  "list_columns": [
    "string"
  ],
  "list_title": "List Items",
  "order_columns": [
    "string"
  ],
  "result": [
    {
      "cache_timeout": 0,
      "changed_by": {
        "first_name": "string",
        "last_name": "string"
      },
      "changed_by_name": null,
      "changed_by_url": null,
      "changed_on_delta_humanized": null,
      "changed_on_utc": null,
      "created_by": {
        "first_name": "string",
        "id": 0,
        "last_name": "string"
      },
      "datasource_id": 0,
      "datasource_name_text": null,
      "datasource_type": "string",
      "datasource_url": null,
      "description": "string",
      "description_markeddown": null,
      "edit_url": null,
      "id": 0,
      "owners": {
        "first_name": "string",
        "id": 0,
        "last_name": "string",
        "username": "string"
      },
      "params": "string",
      "slice_name": "string",
      "table": {
        "default_endpoint": "string",
        "table_name": "string"
      },
      "thumbnail_url": null,
      "url": null,
      "viz_type": "string"
    }
  ]
}
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

> 422 Response

```json
{
  "message": "string"
}
```

> 500 Response

```json
{
  "message": "string"
}
```

<h3 id="getchart-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Items from Model|Inline|
|400|Bad Request|Bad request|Inline|
|401|Unauthorized|Unauthorized|Inline|
|422|Unprocessable Entity|Could not process entity|Inline|
|500|Internal Server Error|Fatal error|Inline|

<h3 id="getchart-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|number|false|none|The total record count on the backend|
|description_columns|object|false|none|none|
|» column_name|string|false|none|The description for the column name. Will be translated by babel|
|ids|[string]|false|none|A list of item ids, useful when you don't know the column id|
|label_columns|object|false|none|none|
|» column_name|string|false|none|The label for the column name. Will be translated by babel|
|list_columns|[string]|false|none|A list of columns|
|list_title|string|false|none|A title to render. Will be translated by babel|
|order_columns|[string]|false|none|A list of allowed columns to sort|
|result|[[ChartRestApi.get_list](#schemachartrestapi.get_list)]|false|none|The result from the get list query|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **422**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwt
</aside>

## post/chart/

> Code samples

```bash
curl https://example.com/chart/ \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "cache_timeout": 0,
    "dashboards": [
      0
    ],
    "datasource_id": 0,
    "datasource_name": "string",
    "datasource_type": "druid",
    "description": "string",
    "owners": [
      0
    ],
    "params": "string",
    "query_context": "string",
    "slice_name": "string",
    "viz_type": [
      "bar",
      "line_multi",
      "area",
      "table"
    ]
  }'
```

`POST /chart/`

Create a new Chart.

> Body parameter

```json
{
  "cache_timeout": 0,
  "dashboards": [
    0
  ],
  "datasource_id": 0,
  "datasource_name": "string",
  "datasource_type": "druid",
  "description": "string",
  "owners": [
    0
  ],
  "params": "string",
  "query_context": "string",
  "slice_name": "string",
  "viz_type": [
    "bar",
    "line_multi",
    "area",
    "table"
  ]
}
```

<h3 id="postchart-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[ChartRestApi.post](#schemachartrestapi.post)|true|Chart schema|
|» cache_timeout|body|integer(int32) \| null|false|Duration (in seconds) of the caching timeout for this chart. Note this defaults to the datasource/table timeout if undefined.|
|» dashboards|body|[integer(int32)]|false|none|
|» datasource_id|body|integer(int32)|true|The id of the dataset/datasource this new chart will use. A complete datasource identification needs `datasouce_id` and `datasource_type`.|
|» datasource_name|body|string \| null|false|The datasource name.|
|» datasource_type|body|string|true|The type of dataset/datasource identified on `datasource_id`.|
|» description|body|string \| null|false|A description of the chart propose.|
|» owners|body|[integer(int32)]|false|none|
|» params|body|string \| null|false|Parameters are generated dynamically when clicking the save or overwrite button in the explore view. This JSON object for power users who may want to alter specific parameters.|
|» query_context|body|string \| null|false|The query context represents the queries that need to run in order to generate the data the visualization, and in what format the data should be returned.|
|» slice_name|body|string|true|The name of the chart.|
|» viz_type|body|string|false|The type of chart visualization used.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» datasource_type|druid|
|» datasource_type|table|
|» datasource_type|view|

> Example responses

> 201 Response

```json
{
  "id": 0,
  "result": {
    "cache_timeout": 0,
    "dashboards": [
      0
    ],
    "datasource_id": 0,
    "datasource_name": "string",
    "datasource_type": "druid",
    "description": "string",
    "owners": [
      0
    ],
    "params": "string",
    "query_context": "string",
    "slice_name": "string",
    "viz_type": [
      "bar",
      "line_multi",
      "area",
      "table"
    ]
  }
}
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

> 422 Response

```json
{
  "message": "string"
}
```

> 500 Response

```json
{
  "message": "string"
}
```

<h3 id="postchart-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Chart added|Inline|
|400|Bad Request|Bad request|Inline|
|401|Unauthorized|Unauthorized|Inline|
|422|Unprocessable Entity|Could not process entity|Inline|
|500|Internal Server Error|Fatal error|Inline|

<h3 id="postchart-responseschema">Response Schema</h3>

Status Code **201**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|number|false|none|none|
|result|[ChartRestApi.post](#schemachartrestapi.post)|false|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **422**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwt
</aside>

## delete/chart/

> Code samples

```bash
curl https://example.com/chart/ \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /chart/`

Deletes multiple Charts in a bulk operation.

<h3 id="deletechart-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|q|query|[get_delete_ids_schema](#schemaget_delete_ids_schema)|false|none|

> Example responses

> 200 Response

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

> 403 Response

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

> 422 Response

```json
{
  "message": "string"
}
```

> 500 Response

```json
{
  "message": "string"
}
```

<h3 id="deletechart-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Charts bulk delete|Inline|
|401|Unauthorized|Unauthorized|Inline|
|403|Forbidden|Forbidden|Inline|
|404|Not Found|Not found|Inline|
|422|Unprocessable Entity|Could not process entity|Inline|
|500|Internal Server Error|Fatal error|Inline|

<h3 id="deletechart-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **422**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwt
</aside>

## get/chart/_info

> Code samples

```bash
curl https://example.com/chart/_info \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /chart/_info`

Several metadata information about chart API endpoints.

<h3 id="getchartinfo-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|q|query|[get_info_schema](#schemaget_info_schema)|false|none|

> Example responses

> 200 Response

```json
{
  "add_columns": {},
  "edit_columns": {},
  "filters": {
    "column_name": [
      {
        "name": "string",
        "operator": "string"
      }
    ]
  },
  "permissions": [
    "string"
  ]
}
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

> 422 Response

```json
{
  "message": "string"
}
```

> 500 Response

```json
{
  "message": "string"
}
```

<h3 id="getchartinfo-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Item from Model|Inline|
|400|Bad Request|Bad request|Inline|
|401|Unauthorized|Unauthorized|Inline|
|422|Unprocessable Entity|Could not process entity|Inline|
|500|Internal Server Error|Fatal error|Inline|

<h3 id="getchartinfo-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|add_columns|object|false|none|none|
|edit_columns|object|false|none|none|
|filters|object|false|none|none|
|» column_name|[object]|false|none|none|
|» » name|string|false|none|The filter name. Will be translated by babel|
|» » operator|string|false|none|The filter operation key to use on list filters|
|permissions|[string]|false|none|The user permissions for this API resource|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **422**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwt
</aside>

## post/chart/data

> Code samples

```bash
curl https://example.com/chart/data \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "datasource": {
      "id": 0,
      "type": "druid"
    },
    "force": true,
    "queries": [
      {
        "annotation_layers": [
          {
            "annotationType": "FORMULA",
            "color": "string",
            "descriptionColumns": [
              "string"
            ],
            "hideLine": true,
            "intervalEndColumn": "string",
            "name": "string",
            "opacity": "",
            "overrides": {
              "property1": null,
              "property2": null
            },
            "show": true,
            "showMarkers": true,
            "sourceType": "",
            "style": "dashed",
            "timeColumn": "string",
            "titleColumn": "string",
            "value": null,
            "width": 0
          }
        ],
        "applied_time_extras": {
          "__time_range": "1 year ago : now"
        },
        "apply_fetch_values_predicate": true,
        "columns": [
          "string"
        ],
        "datasource": {
          "id": 0,
          "type": "druid"
        },
        "druid_time_origin": "string",
        "extras": {
          "druid_time_origin": "string",
          "having": "string",
          "having_druid": [
            {
              "col": "country",
              "op": "IN",
              "val": [
                "China",
                "France",
                "Japan"
              ]
            }
          ],
          "relative_end": "today",
          "relative_start": "today",
          "time_grain_sqla": "P1D",
          "time_range_endpoints": [
            null
          ],
          "where": "string"
        },
        "filters": [
          {
            "col": "country",
            "op": "IN",
            "val": [
              "China",
              "France",
              "Japan"
            ]
          }
        ],
        "granularity": "string",
        "granularity_sqla": "string",
        "groupby": [
          "string"
        ],
        "having": "string",
        "having_filters": [
          {
            "col": "country",
            "op": "IN",
            "val": [
              "China",
              "France",
              "Japan"
            ]
          }
        ],
        "is_rowcount": true,
        "is_timeseries": true,
        "metrics": [
          null
        ],
        "order_desc": true,
        "orderby": [
          [
            "my_col_1",
            false
          ],
          [
            "my_col_2",
            true
          ]
        ],
        "post_processing": [
          {
            "operation": "aggregate",
            "options": {
              "aggregates": {
                "age_mean": {
                  "column": "age",
                  "operator": "mean"
                },
                "age_q1": {
                  "column": "age",
                  "operator": "percentile",
                  "options": {
                    "q": 0.25
                  }
                }
              },
              "groupby": [
                "country",
                "gender"
              ]
            }
          }
        ],
        "result_type": null,
        "row_limit": 0,
        "row_offset": 0,
        "time_offsets": [
          "string"
        ],
        "time_range": "Last week",
        "time_shift": "string",
        "timeseries_limit": 0,
        "timeseries_limit_metric": null,
        "url_params": {
          "property1": "string",
          "property2": "string"
        },
        "where": "string"
      }
    ],
    "result_format": null,
    "result_type": null
  }'
```

`POST /chart/data`

Takes a query context constructed in the client and returns payload data response for the given query.

> Body parameter

```json
{
  "datasource": {
    "id": 0,
    "type": "druid"
  },
  "force": true,
  "queries": [
    {
      "annotation_layers": [
        {
          "annotationType": "FORMULA",
          "color": "string",
          "descriptionColumns": [
            "string"
          ],
          "hideLine": true,
          "intervalEndColumn": "string",
          "name": "string",
          "opacity": "",
          "overrides": {
            "property1": null,
            "property2": null
          },
          "show": true,
          "showMarkers": true,
          "sourceType": "",
          "style": "dashed",
          "timeColumn": "string",
          "titleColumn": "string",
          "value": null,
          "width": 0
        }
      ],
      "applied_time_extras": {
        "__time_range": "1 year ago : now"
      },
      "apply_fetch_values_predicate": true,
      "columns": [
        "string"
      ],
      "datasource": {
        "id": 0,
        "type": "druid"
      },
      "druid_time_origin": "string",
      "extras": {
        "druid_time_origin": "string",
        "having": "string",
        "having_druid": [
          {
            "col": "country",
            "op": "IN",
            "val": [
              "China",
              "France",
              "Japan"
            ]
          }
        ],
        "relative_end": "today",
        "relative_start": "today",
        "time_grain_sqla": "P1D",
        "time_range_endpoints": [
          null
        ],
        "where": "string"
      },
      "filters": [
        {
          "col": "country",
          "op": "IN",
          "val": [
            "China",
            "France",
            "Japan"
          ]
        }
      ],
      "granularity": "string",
      "granularity_sqla": "string",
      "groupby": [
        "string"
      ],
      "having": "string",
      "having_filters": [
        {
          "col": "country",
          "op": "IN",
          "val": [
            "China",
            "France",
            "Japan"
          ]
        }
      ],
      "is_rowcount": true,
      "is_timeseries": true,
      "metrics": [
        null
      ],
      "order_desc": true,
      "orderby": [
        [
          "my_col_1",
          false
        ],
        [
          "my_col_2",
          true
        ]
      ],
      "post_processing": [
        {
          "operation": "aggregate",
          "options": {
            "aggregates": {
              "age_mean": {
                "column": "age",
                "operator": "mean"
              },
              "age_q1": {
                "column": "age",
                "operator": "percentile",
                "options": {
                  "q": 0.25
                }
              }
            },
            "groupby": [
              "country",
              "gender"
            ]
          }
        }
      ],
      "result_type": null,
      "row_limit": 0,
      "row_offset": 0,
      "time_offsets": [
        "string"
      ],
      "time_range": "Last week",
      "time_shift": "string",
      "timeseries_limit": 0,
      "timeseries_limit_metric": null,
      "url_params": {
        "property1": "string",
        "property2": "string"
      },
      "where": "string"
    }
  ],
  "result_format": null,
  "result_type": null
}
```

<h3 id="postchartdata-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[ChartDataQueryContextSchema](#schemachartdataquerycontextschema)|true|A query context consists of a datasource from which to fetch data and one or many query objects.|
|» datasource|body|[ChartDataDatasource](#schemachartdatadatasource)|false|none|
|» force|body|boolean|false|Should the queries be forced to load from the source. Default: `false`|
|» queries|body|[[ChartDataQueryObject](#schemachartdataqueryobject)]|false|none|
|» result_format|body|object|false|none|
|» result_type|body|object|false|none|

> Example responses

> 200 Response

```json
{
  "result": [
    {
      "annotation_data": [
        {
          "property1": "string",
          "property2": "string"
        }
      ],
      "applied_filters": [
        {}
      ],
      "cache_key": "string",
      "cache_timeout": 0,
      "cached_dttm": "string",
      "data": [
        {}
      ],
      "error": "string",
      "is_cached": true,
      "query": "string",
      "rejected_filters": [
        {}
      ],
      "rowcount": 0,
      "stacktrace": "string",
      "status": "stopped"
    }
  ]
}
```

> 202 Response

```json
{
  "channel_id": "string",
  "job_id": "string",
  "result_url": "string",
  "status": "string",
  "user_id": "string"
}
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

> 500 Response

```json
{
  "message": "string"
}
```

<h3 id="postchartdata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Query result|[ChartDataResponseSchema](#schemachartdataresponseschema)|
|202|Accepted|Async job details|[ChartDataAsyncResponseSchema](#schemachartdataasyncresponseschema)|
|400|Bad Request|Bad request|Inline|
|401|Unauthorized|Unauthorized|Inline|
|500|Internal Server Error|Fatal error|Inline|

<h3 id="postchartdata-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwt
</aside>

## get/chart/data/{cache_key}

> Code samples

```bash
curl https://example.com/chart/data/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /chart/data/{cache_key}`

Takes a query context cache key and returns payload data response for the given query.

<h3 id="getchartdatacachekey-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|cache_key|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "result": [
    {
      "annotation_data": [
        {
          "property1": "string",
          "property2": "string"
        }
      ],
      "applied_filters": [
        {}
      ],
      "cache_key": "string",
      "cache_timeout": 0,
      "cached_dttm": "string",
      "data": [
        {}
      ],
      "error": "string",
      "is_cached": true,
      "query": "string",
      "rejected_filters": [
        {}
      ],
      "rowcount": 0,
      "stacktrace": "string",
      "status": "stopped"
    }
  ]
}
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

> 422 Response

```json
{
  "message": "string"
}
```

> 500 Response

```json
{
  "message": "string"
}
```

<h3 id="getchartdatacachekey-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Query result|[ChartDataResponseSchema](#schemachartdataresponseschema)|
|400|Bad Request|Bad request|Inline|
|401|Unauthorized|Unauthorized|Inline|
|404|Not Found|Not found|Inline|
|422|Unprocessable Entity|Could not process entity|Inline|
|500|Internal Server Error|Fatal error|Inline|

<h3 id="getchartdatacachekey-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **422**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwt
</aside>

## get/chart/export/

> Code samples

```bash
curl https://example.com/chart/export/ \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /chart/export/`

Exports multiple charts and downloads them as YAML files

<h3 id="getchartexport-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|q|query|[get_export_ids_schema](#schemaget_export_ids_schema)|false|none|

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

> 500 Response

```json
{
  "message": "string"
}
```

<h3 id="getchartexport-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A zip file with chart(s), dataset(s) and database(s) as YAML|Inline|
|400|Bad Request|Bad request|Inline|
|401|Unauthorized|Unauthorized|Inline|
|404|Not Found|Not found|Inline|
|500|Internal Server Error|Fatal error|Inline|

<h3 id="getchartexport-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwt
</aside>

## get/chart/favorite_status/

> Code samples

```bash
curl https://example.com/chart/favorite_status/ \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /chart/favorite_status/`

Check favorited dashboards for current user

<h3 id="getchartfavoritestatus-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|q|query|[get_fav_star_ids_schema](#schemaget_fav_star_ids_schema)|false|none|

> Example responses

> 200 Response

```json
{
  "result": [
    {
      "id": 0,
      "value": true
    }
  ]
}
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

> 500 Response

```json
{
  "message": "string"
}
```

<h3 id="getchartfavoritestatus-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|None|[GetFavStarIdsSchema](#schemagetfavstaridsschema)|
|400|Bad Request|Bad request|Inline|
|401|Unauthorized|Unauthorized|Inline|
|404|Not Found|Not found|Inline|
|500|Internal Server Error|Fatal error|Inline|

<h3 id="getchartfavoritestatus-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwt
</aside>

## post/chart/import/

> Code samples

```bash
curl https://example.com/chart/import/ \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -F 'formData=@/path/to/file' \
  -F 'overwrite=true' \
  -F 'passwords=string'
```

`POST /chart/import/`

> Body parameter

```yaml
formData: string
overwrite: true
passwords: string
```

<h3 id="postchartimport-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» formData|body|string(binary)|false|upload file (ZIP)|
|» overwrite|body|boolean|false|overwrite existing databases?|
|» passwords|body|string|false|JSON map of passwords for each file|

> Example responses

> 200 Response

```json
{
  "message": "string"
}
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

> 422 Response

```json
{
  "message": "string"
}
```

> 500 Response

```json
{
  "message": "string"
}
```

<h3 id="postchartimport-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Chart import result|Inline|
|400|Bad Request|Bad request|Inline|
|401|Unauthorized|Unauthorized|Inline|
|422|Unprocessable Entity|Could not process entity|Inline|
|500|Internal Server Error|Fatal error|Inline|

<h3 id="postchartimport-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **422**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwt
</aside>

## get/chart/related/{column_name}

> Code samples

```bash
curl https://example.com/chart/related/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /chart/related/{column_name}`

Get a list of all possible owners for a chart. Use `owners` has the `column_name` parameter

<h3 id="getchartrelatedcolumnname-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|column_name|path|string|true|none|
|q|query|[get_related_schema](#schemaget_related_schema)|false|none|

> Example responses

> 200 Response

```json
{
  "count": 0,
  "result": [
    {
      "text": "string",
      "value": 0
    }
  ]
}
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

> 500 Response

```json
{
  "message": "string"
}
```

<h3 id="getchartrelatedcolumnname-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Related column data|[RelatedResponseSchema](#schemarelatedresponseschema)|
|400|Bad Request|Bad request|Inline|
|401|Unauthorized|Unauthorized|Inline|
|404|Not Found|Not found|Inline|
|500|Internal Server Error|Fatal error|Inline|

<h3 id="getchartrelatedcolumnname-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwt
</aside>

## get/chart/{pk}

> Code samples

```bash
curl https://example.com/chart/0 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /chart/{pk}`

Get a chart detail information.

<h3 id="getchartpk-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|pk|path|integer|true|none|
|q|query|[get_item_schema](#schemaget_item_schema)|false|none|

> Example responses

> 200 Response

```json
{
  "description_columns": {
    "column_name": "A Nice description for the column"
  },
  "id": "string",
  "label_columns": {
    "column_name": "A Nice label for the column"
  },
  "result": {
    "cache_timeout": 0,
    "dashboards": {
      "dashboard_title": "string",
      "id": 0
    },
    "description": "string",
    "owners": {
      "first_name": "string",
      "id": 0,
      "last_name": "string",
      "username": "string"
    },
    "params": "string",
    "query_context": "string",
    "slice_name": "string",
    "viz_type": "string"
  },
  "show_columns": [
    "string"
  ],
  "show_title": "Show Item Details"
}
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

> 422 Response

```json
{
  "message": "string"
}
```

> 500 Response

```json
{
  "message": "string"
}
```

<h3 id="getchartpk-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Item from Model|Inline|
|400|Bad Request|Bad request|Inline|
|401|Unauthorized|Unauthorized|Inline|
|404|Not Found|Not found|Inline|
|422|Unprocessable Entity|Could not process entity|Inline|
|500|Internal Server Error|Fatal error|Inline|

<h3 id="getchartpk-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description_columns|object|false|none|none|
|» column_name|string|false|none|The description for the column name. Will be translated by babel|
|id|string|false|none|The item id|
|label_columns|object|false|none|none|
|» column_name|string|false|none|The label for the column name. Will be translated by babel|
|result|[ChartRestApi.get](#schemachartrestapi.get)|false|none|none|
|show_columns|[string]|false|none|A list of columns|
|show_title|string|false|none|A title to render. Will be translated by babel|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **422**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwt
</aside>

## put/chart/{pk}

> Code samples

```bash
curl https://example.com/chart/0 \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "cache_timeout": 0,
    "dashboards": [
      0
    ],
    "datasource_id": 0,
    "datasource_type": "druid",
    "description": "string",
    "owners": [
      0
    ],
    "params": "string",
    "query_context": "string",
    "slice_name": "string",
    "viz_type": [
      "bar",
      "line_multi",
      "area",
      "table"
    ]
  }'
```

`PUT /chart/{pk}`

Changes a Chart.

> Body parameter

```json
{
  "cache_timeout": 0,
  "dashboards": [
    0
  ],
  "datasource_id": 0,
  "datasource_type": "druid",
  "description": "string",
  "owners": [
    0
  ],
  "params": "string",
  "query_context": "string",
  "slice_name": "string",
  "viz_type": [
    "bar",
    "line_multi",
    "area",
    "table"
  ]
}
```

<h3 id="putchartpk-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|pk|path|integer|true|none|
|body|body|[ChartRestApi.put](#schemachartrestapi.put)|true|Chart schema|
|» cache_timeout|body|integer(int32) \| null|false|Duration (in seconds) of the caching timeout for this chart. Note this defaults to the datasource/table timeout if undefined.|
|» dashboards|body|[integer(int32)]|false|none|
|» datasource_id|body|integer(int32) \| null|false|The id of the dataset/datasource this new chart will use. A complete datasource identification needs `datasouce_id` and `datasource_type`.|
|» datasource_type|body|string \| null|false|The type of dataset/datasource identified on `datasource_id`.|
|» description|body|string \| null|false|A description of the chart propose.|
|» owners|body|[integer(int32)]|false|none|
|» params|body|string \| null|false|Parameters are generated dynamically when clicking the save or overwrite button in the explore view. This JSON object for power users who may want to alter specific parameters.|
|» query_context|body|string \| null|false|The query context represents the queries that need to run in order to generate the data the visualization, and in what format the data should be returned.|
|» slice_name|body|string \| null|false|The name of the chart.|
|» viz_type|body|string \| null|false|The type of chart visualization used.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» datasource_type|druid|
|» datasource_type|table|
|» datasource_type|view|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "result": {
    "cache_timeout": 0,
    "dashboards": [
      0
    ],
    "datasource_id": 0,
    "datasource_type": "druid",
    "description": "string",
    "owners": [
      0
    ],
    "params": "string",
    "query_context": "string",
    "slice_name": "string",
    "viz_type": [
      "bar",
      "line_multi",
      "area",
      "table"
    ]
  }
}
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

> 403 Response

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

> 422 Response

```json
{
  "message": "string"
}
```

> 500 Response

```json
{
  "message": "string"
}
```

<h3 id="putchartpk-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Chart changed|Inline|
|400|Bad Request|Bad request|Inline|
|401|Unauthorized|Unauthorized|Inline|
|403|Forbidden|Forbidden|Inline|
|404|Not Found|Not found|Inline|
|422|Unprocessable Entity|Could not process entity|Inline|
|500|Internal Server Error|Fatal error|Inline|

<h3 id="putchartpk-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|number|false|none|none|
|result|[ChartRestApi.put](#schemachartrestapi.put)|false|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **422**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwt
</aside>

## delete/chart/{pk}

> Code samples

```bash
curl https://example.com/chart/0 \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /chart/{pk}`

Deletes a Chart.

<h3 id="deletechartpk-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|pk|path|integer|true|none|

> Example responses

> 200 Response

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

> 403 Response

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

> 422 Response

```json
{
  "message": "string"
}
```

> 500 Response

```json
{
  "message": "string"
}
```

<h3 id="deletechartpk-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Chart delete|Inline|
|401|Unauthorized|Unauthorized|Inline|
|403|Forbidden|Forbidden|Inline|
|404|Not Found|Not found|Inline|
|422|Unprocessable Entity|Could not process entity|Inline|
|500|Internal Server Error|Fatal error|Inline|

<h3 id="deletechartpk-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **422**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwt
</aside>

## get/chart/{pk}/cache_screenshot/

> Code samples

```bash
curl https://example.com/chart/0/cache_screenshot/ \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /chart/{pk}/cache_screenshot/`

Compute and cache a screenshot.

<h3 id="getchartpkcachescreenshot-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|pk|path|integer|true|none|
|q|query|[screenshot_query_schema](#schemascreenshot_query_schema)|false|none|

> Example responses

> 200 Response

```json
{
  "cache_key": "string",
  "chart_url": "string",
  "image_url": "string"
}
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

> 500 Response

```json
{
  "message": "string"
}
```

<h3 id="getchartpkcachescreenshot-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Chart async result|[ChartCacheScreenshotResponseSchema](#schemachartcachescreenshotresponseschema)|
|302|Found|Redirects to the current digest|None|
|400|Bad Request|Bad request|Inline|
|401|Unauthorized|Unauthorized|Inline|
|404|Not Found|Not found|Inline|
|500|Internal Server Error|Fatal error|Inline|

<h3 id="getchartpkcachescreenshot-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwt
</aside>

## get/chart/{pk}/data/

> Code samples

```bash
curl https://example.com/chart/0/data/ \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /chart/{pk}/data/`

Takes a chart ID and uses the query context stored when the chart was saved to return payload data response.

<h3 id="getchartpkdata-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|pk|path|integer|true|The chart ID|
|format|query|string|false|The format in which the data should be returned|
|type|query|string|false|The type in which the data should be returned|

> Example responses

> 200 Response

```json
{
  "result": [
    {
      "annotation_data": [
        {
          "property1": "string",
          "property2": "string"
        }
      ],
      "applied_filters": [
        {}
      ],
      "cache_key": "string",
      "cache_timeout": 0,
      "cached_dttm": "string",
      "data": [
        {}
      ],
      "error": "string",
      "is_cached": true,
      "query": "string",
      "rejected_filters": [
        {}
      ],
      "rowcount": 0,
      "stacktrace": "string",
      "status": "stopped"
    }
  ]
}
```

> 202 Response

```json
{
  "channel_id": "string",
  "job_id": "string",
  "result_url": "string",
  "status": "string",
  "user_id": "string"
}
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

> 500 Response

```json
{
  "message": "string"
}
```

<h3 id="getchartpkdata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Query result|[ChartDataResponseSchema](#schemachartdataresponseschema)|
|202|Accepted|Async job details|[ChartDataAsyncResponseSchema](#schemachartdataasyncresponseschema)|
|400|Bad Request|Bad request|Inline|
|401|Unauthorized|Unauthorized|Inline|
|500|Internal Server Error|Fatal error|Inline|

<h3 id="getchartpkdata-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwt
</aside>

## get/chart/{pk}/screenshot/{digest}/

> Code samples

```bash
curl https://example.com/chart/0/screenshot/string/ \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /chart/{pk}/screenshot/{digest}/`

Get a computed screenshot from cache.

<h3 id="getchartpkscreenshotdigest-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|pk|path|integer|true|none|
|digest|path|string|true|none|

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

> 500 Response

```json
{
  "message": "string"
}
```

<h3 id="getchartpkscreenshotdigest-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Chart thumbnail image|Inline|
|302|Found|Redirects to the current digest|None|
|400|Bad Request|Bad request|Inline|
|401|Unauthorized|Unauthorized|Inline|
|404|Not Found|Not found|Inline|
|500|Internal Server Error|Fatal error|Inline|

<h3 id="getchartpkscreenshotdigest-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwt
</aside>

## get/chart/{pk}/thumbnail/{digest}/

> Code samples

```bash
curl https://example.com/chart/0/thumbnail/string/ \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /chart/{pk}/thumbnail/{digest}/`

Compute or get already computed chart thumbnail from cache.

<h3 id="getchartpkthumbnaildigest-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|pk|path|integer|true|none|
|digest|path|string|true|none|

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

> 500 Response

```json
{
  "message": "string"
}
```

<h3 id="getchartpkthumbnaildigest-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Chart thumbnail image|Inline|
|302|Found|Redirects to the current digest|None|
|400|Bad Request|Bad request|Inline|
|401|Unauthorized|Unauthorized|Inline|
|404|Not Found|Not found|Inline|
|500|Internal Server Error|Fatal error|Inline|

<h3 id="getchartpkthumbnaildigest-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwt
</aside>

<h1 id="superset-css-templates">CSS Templates</h1>

## get/css_template/

> Code samples

```bash
curl https://example.com/css_template/ \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /css_template/`

Get a list of CSS templates, use Rison or JSON query parameters for filtering, sorting, pagination and for selecting specific columns and metadata.

<h3 id="getcsstemplate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|q|query|[get_list_schema](#schemaget_list_schema)|false|none|

> Example responses

> 200 Response

```json
{
  "count": 0,
  "description_columns": {
    "column_name": "A Nice description for the column"
  },
  "ids": [
    "string"
  ],
  "label_columns": {
    "column_name": "A Nice label for the column"
  },
  "list_columns": [
    "string"
  ],
  "list_title": "List Items",
  "order_columns": [
    "string"
  ],
  "result": [
    {
      "changed_by": {
        "active": true,
        "changed_on": "1970-01-01T00:00:00Z",
        "created_on": "1970-01-01T00:00:00Z",
        "email": "string",
        "fail_login_count": 0,
        "first_name": "string",
        "id": 0,
        "last_login": "1970-01-01T00:00:00Z",
        "last_name": "string",
        "login_count": 0,
        "password": "string",
        "username": "string"
      },
      "changed_on_delta_humanized": null,
      "created_by": {
        "first_name": "string",
        "id": 0,
        "last_name": "string"
      },
      "created_on": "1970-01-01T00:00:00Z",
      "css": "string",
      "id": 0,
      "template_name": "string"
    }
  ]
}
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

> 422 Response

```json
{
  "message": "string"
}
```

> 500 Response

```json
{
  "message": "string"
}
```

<h3 id="getcsstemplate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Items from Model|Inline|
|400|Bad Request|Bad request|Inline|
|401|Unauthorized|Unauthorized|Inline|
|422|Unprocessable Entity|Could not process entity|Inline|
|500|Internal Server Error|Fatal error|Inline|

<h3 id="getcsstemplate-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|number|false|none|The total record count on the backend|
|description_columns|object|false|none|none|
|» column_name|string|false|none|The description for the column name. Will be translated by babel|
|ids|[string]|false|none|A list of item ids, useful when you don't know the column id|
|label_columns|object|false|none|none|
|» column_name|string|false|none|The label for the column name. Will be translated by babel|
|list_columns|[string]|false|none|A list of columns|
|list_title|string|false|none|A title to render. Will be translated by babel|
|order_columns|[string]|false|none|A list of allowed columns to sort|
|result|[[CssTemplateRestApi.get_list](#schemacsstemplaterestapi.get_list)]|false|none|The result from the get list query|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **422**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwt
</aside>

## post/css_template/

> Code samples

```bash
curl https://example.com/css_template/ \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "css": "string",
    "template_name": "string"
  }'
```

`POST /css_template/`

Create a CSS template

> Body parameter

```json
{
  "css": "string",
  "template_name": "string"
}
```

<h3 id="postcsstemplate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[CssTemplateRestApi.post](#schemacsstemplaterestapi.post)|true|Model schema|
|» css|body|string \| null|false|none|
|» template_name|body|string \| null|false|none|

> Example responses

> 201 Response

```json
{
  "id": "string",
  "result": {
    "css": "string",
    "template_name": "string"
  }
}
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

> 422 Response

```json
{
  "message": "string"
}
```

> 500 Response

```json
{
  "message": "string"
}
```

<h3 id="postcsstemplate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Item inserted|Inline|
|400|Bad Request|Bad request|Inline|
|401|Unauthorized|Unauthorized|Inline|
|422|Unprocessable Entity|Could not process entity|Inline|
|500|Internal Server Error|Fatal error|Inline|

<h3 id="postcsstemplate-responseschema">Response Schema</h3>

Status Code **201**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|none|
|result|[CssTemplateRestApi.post](#schemacsstemplaterestapi.post)|false|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **422**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwt
</aside>

## delete/css_template/

> Code samples

```bash
curl https://example.com/css_template/ \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /css_template/`

Deletes multiple css templates in a bulk operation.

<h3 id="deletecsstemplate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|q|query|[get_delete_ids_schema](#schemaget_delete_ids_schema)|false|none|

> Example responses

> 200 Response

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

> 422 Response

```json
{
  "message": "string"
}
```

> 500 Response

```json
{
  "message": "string"
}
```

<h3 id="deletecsstemplate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|CSS templates bulk delete|Inline|
|401|Unauthorized|Unauthorized|Inline|
|404|Not Found|Not found|Inline|
|422|Unprocessable Entity|Could not process entity|Inline|
|500|Internal Server Error|Fatal error|Inline|

<h3 id="deletecsstemplate-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **422**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwt
</aside>

## get/css_template/_info

> Code samples

```bash
curl https://example.com/css_template/_info \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /css_template/_info`

Get metadata information about this API resource

<h3 id="getcsstemplateinfo-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|q|query|[get_info_schema](#schemaget_info_schema)|false|none|

> Example responses

> 200 Response

```json
{
  "add_columns": {},
  "edit_columns": {},
  "filters": {
    "column_name": [
      {
        "name": "string",
        "operator": "string"
      }
    ]
  },
  "permissions": [
    "string"
  ]
}
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

> 422 Response

```json
{
  "message": "string"
}
```

> 500 Response

```json
{
  "message": "string"
}
```

<h3 id="getcsstemplateinfo-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Item from Model|Inline|
|400|Bad Request|Bad request|Inline|
|401|Unauthorized|Unauthorized|Inline|
|422|Unprocessable Entity|Could not process entity|Inline|
|500|Internal Server Error|Fatal error|Inline|

<h3 id="getcsstemplateinfo-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|add_columns|object|false|none|none|
|edit_columns|object|false|none|none|
|filters|object|false|none|none|
|» column_name|[object]|false|none|none|
|» » name|string|false|none|The filter name. Will be translated by babel|
|» » operator|string|false|none|The filter operation key to use on list filters|
|permissions|[string]|false|none|The user permissions for this API resource|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **422**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwt
</aside>

## get/css_template/related/{column_name}

> Code samples

```bash
curl https://example.com/css_template/related/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /css_template/related/{column_name}`

<h3 id="getcsstemplaterelatedcolumnname-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|column_name|path|string|true|none|
|q|query|[get_related_schema](#schemaget_related_schema)|false|none|

> Example responses

> 200 Response

```json
{
  "count": 0,
  "result": [
    {
      "text": "string",
      "value": 0
    }
  ]
}
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

> 500 Response

```json
{
  "message": "string"
}
```

<h3 id="getcsstemplaterelatedcolumnname-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Related column data|[RelatedResponseSchema](#schemarelatedresponseschema)|
|400|Bad Request|Bad request|Inline|
|401|Unauthorized|Unauthorized|Inline|
|404|Not Found|Not found|Inline|
|500|Internal Server Error|Fatal error|Inline|

<h3 id="getcsstemplaterelatedcolumnname-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwt
</aside>

## get/css_template/{pk}

> Code samples

```bash
curl https://example.com/css_template/0 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /css_template/{pk}`

Get a CSS template

<h3 id="getcsstemplatepk-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|pk|path|integer|true|none|
|q|query|[get_item_schema](#schemaget_item_schema)|false|none|

> Example responses

> 200 Response

```json
{
  "description_columns": {
    "column_name": "A Nice description for the column"
  },
  "id": "string",
  "label_columns": {
    "column_name": "A Nice label for the column"
  },
  "result": {
    "created_by": {
      "first_name": "string",
      "id": 0,
      "last_name": "string"
    },
    "css": "string",
    "id": 0,
    "template_name": "string"
  },
  "show_columns": [
    "string"
  ],
  "show_title": "Show Item Details"
}
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

> 422 Response

```json
{
  "message": "string"
}
```

> 500 Response

```json
{
  "message": "string"
}
```

<h3 id="getcsstemplatepk-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Item from Model|Inline|
|400|Bad Request|Bad request|Inline|
|401|Unauthorized|Unauthorized|Inline|
|404|Not Found|Not found|Inline|
|422|Unprocessable Entity|Could not process entity|Inline|
|500|Internal Server Error|Fatal error|Inline|

<h3 id="getcsstemplatepk-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description_columns|object|false|none|none|
|» column_name|string|false|none|The description for the column name. Will be translated by babel|
|id|string|false|none|The item id|
|label_columns|object|false|none|none|
|» column_name|string|false|none|The label for the column name. Will be translated by babel|
|result|[CssTemplateRestApi.get](#schemacsstemplaterestapi.get)|false|none|none|
|show_columns|[string]|false|none|A list of columns|
|show_title|string|false|none|A title to render. Will be translated by babel|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **422**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwt
</aside>

## put/css_template/{pk}

> Code samples

```bash
curl https://example.com/css_template/0 \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "css": "string",
    "template_name": "string"
  }'
```

`PUT /css_template/{pk}`

Update a CSS template

> Body parameter

```json
{
  "css": "string",
  "template_name": "string"
}
```

<h3 id="putcsstemplatepk-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|pk|path|integer|true|none|
|body|body|[CssTemplateRestApi.put](#schemacsstemplaterestapi.put)|true|Model schema|
|» css|body|string \| null|false|none|
|» template_name|body|string \| null|false|none|

> Example responses

> 200 Response

```json
{
  "result": {
    "css": "string",
    "template_name": "string"
  }
}
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

> 422 Response

```json
{
  "message": "string"
}
```

> 500 Response

```json
{
  "message": "string"
}
```

<h3 id="putcsstemplatepk-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Item changed|Inline|
|400|Bad Request|Bad request|Inline|
|401|Unauthorized|Unauthorized|Inline|
|404|Not Found|Not found|Inline|
|422|Unprocessable Entity|Could not process entity|Inline|
|500|Internal Server Error|Fatal error|Inline|

<h3 id="putcsstemplatepk-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|result|[CssTemplateRestApi.put](#schemacsstemplaterestapi.put)|false|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **422**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwt
</aside>

## delete/css_template/{pk}

> Code samples

```bash
curl https://example.com/css_template/0 \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /css_template/{pk}`

Delete CSS template

<h3 id="deletecsstemplatepk-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|pk|path|integer|true|none|

> Example responses

> 200 Response

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

> 422 Response

```json
{
  "message": "string"
}
```

> 500 Response

```json
{
  "message": "string"
}
```

<h3 id="deletecsstemplatepk-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Item deleted|Inline|
|404|Not Found|Not found|Inline|
|422|Unprocessable Entity|Could not process entity|Inline|
|500|Internal Server Error|Fatal error|Inline|

<h3 id="deletecsstemplatepk-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **422**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwt
</aside>

<h1 id="superset-dashboards">Dashboards</h1>

## get/dashboard/

> Code samples

```bash
curl https://example.com/dashboard/ \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /dashboard/`

Get a list of dashboards, use Rison or JSON query parameters for filtering, sorting, pagination and  for selecting specific columns and metadata.

<h3 id="getdashboard-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|q|query|[get_list_schema](#schemaget_list_schema)|false|none|

> Example responses

> 200 Response

```json
{
  "count": 0,
  "description_columns": {
    "column_name": "A Nice description for the column"
  },
  "ids": [
    "string"
  ],
  "label_columns": {
    "column_name": "A Nice label for the column"
  },
  "list_columns": [
    "string"
  ],
  "list_title": "List Items",
  "order_columns": [
    "string"
  ],
  "result": [
    {
      "changed_by": {
        "first_name": "string",
        "id": 0,
        "last_name": "string",
        "username": "string"
      },
      "changed_by_name": null,
      "changed_by_url": null,
      "changed_on_delta_humanized": null,
      "changed_on_utc": null,
      "created_by": {
        "first_name": "string",
        "id": 0,
        "last_name": "string"
      },
      "css": "string",
      "dashboard_title": "string",
      "id": 0,
      "json_metadata": "string",
      "owners": {
        "first_name": "string",
        "id": 0,
        "last_name": "string",
        "username": "string"
      },
      "position_json": "string",
      "published": true,
      "roles": {
        "id": 0,
        "name": "string"
      },
      "slug": "string",
      "status": null,
      "thumbnail_url": null,
      "url": null
    }
  ]
}
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

> 422 Response

```json
{
  "message": "string"
}
```

> 500 Response

```json
{
  "message": "string"
}
```

<h3 id="getdashboard-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Items from Model|Inline|
|400|Bad Request|Bad request|Inline|
|401|Unauthorized|Unauthorized|Inline|
|422|Unprocessable Entity|Could not process entity|Inline|
|500|Internal Server Error|Fatal error|Inline|

<h3 id="getdashboard-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|number|false|none|The total record count on the backend|
|description_columns|object|false|none|none|
|» column_name|string|false|none|The description for the column name. Will be translated by babel|
|ids|[string]|false|none|A list of item ids, useful when you don't know the column id|
|label_columns|object|false|none|none|
|» column_name|string|false|none|The label for the column name. Will be translated by babel|
|list_columns|[string]|false|none|A list of columns|
|list_title|string|false|none|A title to render. Will be translated by babel|
|order_columns|[string]|false|none|A list of allowed columns to sort|
|result|[[DashboardRestApi.get_list](#schemadashboardrestapi.get_list)]|false|none|The result from the get list query|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **422**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwt
</aside>

## post/dashboard/

> Code samples

```bash
curl https://example.com/dashboard/ \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "css": "string",
    "dashboard_title": "string",
    "json_metadata": "string",
    "owners": [
      0
    ],
    "position_json": "string",
    "published": true,
    "roles": [
      0
    ],
    "slug": "string"
  }'
```

`POST /dashboard/`

Create a new Dashboard.

> Body parameter

```json
{
  "css": "string",
  "dashboard_title": "string",
  "json_metadata": "string",
  "owners": [
    0
  ],
  "position_json": "string",
  "published": true,
  "roles": [
    0
  ],
  "slug": "string"
}
```

<h3 id="postdashboard-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[DashboardRestApi.post](#schemadashboardrestapi.post)|true|Dashboard schema|
|» css|body|string|false|none|
|» dashboard_title|body|string \| null|false|A title for the dashboard.|
|» json_metadata|body|string|false|This JSON object is generated dynamically when clicking the save or overwrite button in the dashboard view. It is exposed here for reference and for power users who may want to alter  specific parameters.|
|» owners|body|[integer(int32)]|false|none|
|» position_json|body|string|false|This json object describes the positioning of the widgets in the dashboard. It is dynamically generated when adjusting the widgets size and positions by using drag & drop in the dashboard view|
|» published|body|boolean|false|Determines whether or not this dashboard is visible in the list of all dashboards.|
|» roles|body|[integer(int32)]|false|none|
|» slug|body|string \| null|false|Unique identifying part for the web address of the dashboard.|

> Example responses

> 201 Response

```json
{
  "id": 0,
  "result": {
    "css": "string",
    "dashboard_title": "string",
    "json_metadata": "string",
    "owners": [
      0
    ],
    "position_json": "string",
    "published": true,
    "roles": [
      0
    ],
    "slug": "string"
  }
}
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

> 500 Response

```json
{
  "message": "string"
}
```

<h3 id="postdashboard-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Dashboard added|Inline|
|302|Found|Redirects to the current digest|None|
|400|Bad Request|Bad request|Inline|
|401|Unauthorized|Unauthorized|Inline|
|404|Not Found|Not found|Inline|
|500|Internal Server Error|Fatal error|Inline|

<h3 id="postdashboard-responseschema">Response Schema</h3>

Status Code **201**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|number|false|none|none|
|result|[DashboardRestApi.post](#schemadashboardrestapi.post)|false|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwt
</aside>

## delete/dashboard/

> Code samples

```bash
curl https://example.com/dashboard/ \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /dashboard/`

Deletes multiple Dashboards in a bulk operation.

<h3 id="deletedashboard-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|q|query|[get_delete_ids_schema](#schemaget_delete_ids_schema)|false|none|

> Example responses

> 200 Response

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

> 403 Response

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

> 422 Response

```json
{
  "message": "string"
}
```

> 500 Response

```json
{
  "message": "string"
}
```

<h3 id="deletedashboard-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Dashboard bulk delete|Inline|
|401|Unauthorized|Unauthorized|Inline|
|403|Forbidden|Forbidden|Inline|
|404|Not Found|Not found|Inline|
|422|Unprocessable Entity|Could not process entity|Inline|
|500|Internal Server Error|Fatal error|Inline|

<h3 id="deletedashboard-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **422**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwt
</aside>

## get/dashboard/_info

> Code samples

```bash
curl https://example.com/dashboard/_info \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /dashboard/_info`

Several metadata information about dashboard API endpoints.

<h3 id="getdashboardinfo-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|q|query|[get_info_schema](#schemaget_info_schema)|false|none|

> Example responses

> 200 Response

```json
{
  "add_columns": {},
  "edit_columns": {},
  "filters": {
    "column_name": [
      {
        "name": "string",
        "operator": "string"
      }
    ]
  },
  "permissions": [
    "string"
  ]
}
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

> 422 Response

```json
{
  "message": "string"
}
```

> 500 Response

```json
{
  "message": "string"
}
```

<h3 id="getdashboardinfo-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Item from Model|Inline|
|400|Bad Request|Bad request|Inline|
|401|Unauthorized|Unauthorized|Inline|
|422|Unprocessable Entity|Could not process entity|Inline|
|500|Internal Server Error|Fatal error|Inline|

<h3 id="getdashboardinfo-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|add_columns|object|false|none|none|
|edit_columns|object|false|none|none|
|filters|object|false|none|none|
|» column_name|[object]|false|none|none|
|» » name|string|false|none|The filter name. Will be translated by babel|
|» » operator|string|false|none|The filter operation key to use on list filters|
|permissions|[string]|false|none|The user permissions for this API resource|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **422**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwt
</aside>

## get/dashboard/export/

> Code samples

```bash
curl https://example.com/dashboard/export/ \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /dashboard/export/`

Exports multiple Dashboards and downloads them as YAML files.

<h3 id="getdashboardexport-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|q|query|[get_export_ids_schema](#schemaget_export_ids_schema)|false|none|

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

> 422 Response

```json
{
  "message": "string"
}
```

> 500 Response

```json
{
  "message": "string"
}
```

<h3 id="getdashboardexport-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Dashboard export|Inline|
|400|Bad Request|Bad request|Inline|
|401|Unauthorized|Unauthorized|Inline|
|404|Not Found|Not found|Inline|
|422|Unprocessable Entity|Could not process entity|Inline|
|500|Internal Server Error|Fatal error|Inline|

<h3 id="getdashboardexport-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **422**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwt
</aside>

## get/dashboard/favorite_status/

> Code samples

```bash
curl https://example.com/dashboard/favorite_status/ \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /dashboard/favorite_status/`

Check favorited dashboards for current user

<h3 id="getdashboardfavoritestatus-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|q|query|[get_fav_star_ids_schema](#schemaget_fav_star_ids_schema)|false|none|

> Example responses

> 200 Response

```json
{
  "result": [
    {
      "id": 0,
      "value": true
    }
  ]
}
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

> 500 Response

```json
{
  "message": "string"
}
```

<h3 id="getdashboardfavoritestatus-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|None|[GetFavStarIdsSchema](#schemagetfavstaridsschema)|
|400|Bad Request|Bad request|Inline|
|401|Unauthorized|Unauthorized|Inline|
|404|Not Found|Not found|Inline|
|500|Internal Server Error|Fatal error|Inline|

<h3 id="getdashboardfavoritestatus-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwt
</aside>

## post/dashboard/import/

> Code samples

```bash
curl https://example.com/dashboard/import/ \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -F 'formData=@/path/to/file' \
  -F 'overwrite=true' \
  -F 'passwords=string'
```

`POST /dashboard/import/`

> Body parameter

```yaml
formData: string
overwrite: true
passwords: string
```

<h3 id="postdashboardimport-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» formData|body|string(binary)|false|upload file (ZIP or JSON)|
|» overwrite|body|boolean|false|overwrite existing databases?|
|» passwords|body|string|false|JSON map of passwords for each file|

> Example responses

> 200 Response

```json
{
  "message": "string"
}
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

> 422 Response

```json
{
  "message": "string"
}
```

> 500 Response

```json
{
  "message": "string"
}
```

<h3 id="postdashboardimport-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Dashboard import result|Inline|
|400|Bad Request|Bad request|Inline|
|401|Unauthorized|Unauthorized|Inline|
|422|Unprocessable Entity|Could not process entity|Inline|
|500|Internal Server Error|Fatal error|Inline|

<h3 id="postdashboardimport-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **422**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwt
</aside>

## get/dashboard/related/{column_name}

> Code samples

```bash
curl https://example.com/dashboard/related/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /dashboard/related/{column_name}`

Get a list of all possible owners for a dashboard.

<h3 id="getdashboardrelatedcolumnname-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|column_name|path|string|true|none|
|q|query|[get_related_schema](#schemaget_related_schema)|false|none|

> Example responses

> 200 Response

```json
{
  "count": 0,
  "result": [
    {
      "text": "string",
      "value": 0
    }
  ]
}
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

> 500 Response

```json
{
  "message": "string"
}
```

<h3 id="getdashboardrelatedcolumnname-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Related column data|[RelatedResponseSchema](#schemarelatedresponseschema)|
|400|Bad Request|Bad request|Inline|
|401|Unauthorized|Unauthorized|Inline|
|404|Not Found|Not found|Inline|
|500|Internal Server Error|Fatal error|Inline|

<h3 id="getdashboardrelatedcolumnname-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwt
</aside>

## get/dashboard/{id_or_slug}

> Code samples

```bash
curl https://example.com/dashboard/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /dashboard/{id_or_slug}`

Get a dashboard detail information.

<h3 id="getdashboardidorslug-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id_or_slug|path|string|true|Either the id of the dashboard, or its slug|

> Example responses

> 200 Response

```json
{
  "result": {
    "changed_by": {
      "first_name": "string",
      "id": 0,
      "last_name": "string",
      "username": "string"
    },
    "changed_by_name": "string",
    "changed_by_url": "string",
    "changed_on": "1970-01-01T00:00:00Z",
    "changed_on_delta_humanized": "string",
    "charts": [
      "string"
    ],
    "css": "string",
    "dashboard_title": "string",
    "id": 0,
    "json_metadata": "string",
    "owners": [
      {
        "first_name": "string",
        "id": 0,
        "last_name": "string",
        "username": "string"
      }
    ],
    "position_json": "string",
    "published": true,
    "roles": [
      {
        "id": 0,
        "name": "string"
      }
    ],
    "slug": "string",
    "table_names": "string",
    "thumbnail_url": "string",
    "url": "string"
  }
}
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

<h3 id="getdashboardidorslug-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Dashboard|Inline|
|302|Found|Redirects to the current digest|None|
|400|Bad Request|Bad request|Inline|
|401|Unauthorized|Unauthorized|Inline|
|404|Not Found|Not found|Inline|

<h3 id="getdashboardidorslug-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|result|[DashboardGetResponseSchema](#schemadashboardgetresponseschema)|false|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwt
</aside>

## get/dashboard/{id_or_slug}/charts

> Code samples

```bash
curl https://example.com/dashboard/string/charts \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /dashboard/{id_or_slug}/charts`

Get the chart definitions for a given dashboard

<h3 id="getdashboardidorslugcharts-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id_or_slug|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "result": [
    {
      "cache_timeout": 0,
      "changed_on": "string",
      "datasource": "string",
      "description": "string",
      "description_markeddown": "string",
      "form_data": {},
      "modified": "string",
      "slice_id": 0,
      "slice_name": "string",
      "slice_url": "string"
    }
  ]
}
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

<h3 id="getdashboardidorslugcharts-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Dashboard chart definitions|Inline|
|302|Found|Redirects to the current digest|None|
|400|Bad Request|Bad request|Inline|
|401|Unauthorized|Unauthorized|Inline|
|404|Not Found|Not found|Inline|

<h3 id="getdashboardidorslugcharts-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|result|[[ChartEntityResponseSchema](#schemachartentityresponseschema)]|false|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwt
</aside>

## get/dashboard/{id_or_slug}/datasets

> Code samples

```bash
curl https://example.com/dashboard/string/datasets \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /dashboard/{id_or_slug}/datasets`

Returns a list of a dashboard's datasets. Each dataset includes only the information necessary to render the dashboard's charts.

<h3 id="getdashboardidorslugdatasets-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id_or_slug|path|string|true|Either the id of the dashboard, or its slug|

> Example responses

> 200 Response

```json
{
  "result": [
    {
      "cache_timeout": 0,
      "column_formats": {},
      "column_types": [
        0
      ],
      "columns": [
        {}
      ],
      "database": {
        "allow_multi_schema_metadata_fetch": true,
        "allows_cost_estimate": true,
        "allows_subquery": true,
        "allows_virtual_table_explore": true,
        "backend": "string",
        "explore_database_id": 0,
        "id": 0,
        "name": "string"
      },
      "datasource_name": "string",
      "default_endpoint": "string",
      "edit_url": "string",
      "fetch_values_predicate": "string",
      "filter_select": true,
      "filter_select_enabled": true,
      "granularity_sqla": [
        [
          "string"
        ]
      ],
      "health_check_message": "string",
      "id": 0,
      "is_sqllab_view": true,
      "main_dttm_col": "string",
      "metrics": [
        {}
      ],
      "name": "string",
      "offset": 0,
      "order_by_choices": [
        [
          "string"
        ]
      ],
      "owners": [
        0
      ],
      "params": "string",
      "perm": "string",
      "schema": "string",
      "select_star": "string",
      "sql": "string",
      "table_name": "string",
      "template_params": "string",
      "time_grain_sqla": [
        [
          "string"
        ]
      ],
      "type": "string",
      "uid": "string",
      "verbose_map": {
        "property1": "string",
        "property2": "string"
      }
    }
  ]
}
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

<h3 id="getdashboardidorslugdatasets-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Dashboard dataset definitions|Inline|
|302|Found|Redirects to the current digest|None|
|400|Bad Request|Bad request|Inline|
|401|Unauthorized|Unauthorized|Inline|
|404|Not Found|Not found|Inline|

<h3 id="getdashboardidorslugdatasets-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|result|[[DashboardDatasetSchema](#schemadashboarddatasetschema)]|false|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwt
</aside>

## put/dashboard/{pk}

> Code samples

```bash
curl https://example.com/dashboard/0 \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "css": "string",
    "dashboard_title": "string",
    "json_metadata": "string",
    "owners": [
      0
    ],
    "position_json": "string",
    "published": true,
    "roles": [
      0
    ],
    "slug": "string"
  }'
```

`PUT /dashboard/{pk}`

Changes a Dashboard.

> Body parameter

```json
{
  "css": "string",
  "dashboard_title": "string",
  "json_metadata": "string",
  "owners": [
    0
  ],
  "position_json": "string",
  "published": true,
  "roles": [
    0
  ],
  "slug": "string"
}
```

<h3 id="putdashboardpk-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|pk|path|integer|true|none|
|body|body|[DashboardRestApi.put](#schemadashboardrestapi.put)|true|Dashboard schema|
|» css|body|string \| null|false|Override CSS for the dashboard.|
|» dashboard_title|body|string \| null|false|A title for the dashboard.|
|» json_metadata|body|string \| null|false|This JSON object is generated dynamically when clicking the save or overwrite button in the dashboard view. It is exposed here for reference and for power users who may want to alter  specific parameters.|
|» owners|body|[integer(int32) \| null]|false|none|
|» position_json|body|string \| null|false|This json object describes the positioning of the widgets in the dashboard. It is dynamically generated when adjusting the widgets size and positions by using drag & drop in the dashboard view|
|» published|body|boolean \| null|false|Determines whether or not this dashboard is visible in the list of all dashboards.|
|» roles|body|[integer(int32) \| null]|false|none|
|» slug|body|string \| null|false|Unique identifying part for the web address of the dashboard.|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "result": {
    "css": "string",
    "dashboard_title": "string",
    "json_metadata": "string",
    "owners": [
      0
    ],
    "position_json": "string",
    "published": true,
    "roles": [
      0
    ],
    "slug": "string"
  }
}
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

> 403 Response

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

> 422 Response

```json
{
  "message": "string"
}
```

> 500 Response

```json
{
  "message": "string"
}
```

<h3 id="putdashboardpk-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Dashboard changed|Inline|
|400|Bad Request|Bad request|Inline|
|401|Unauthorized|Unauthorized|Inline|
|403|Forbidden|Forbidden|Inline|
|404|Not Found|Not found|Inline|
|422|Unprocessable Entity|Could not process entity|Inline|
|500|Internal Server Error|Fatal error|Inline|

<h3 id="putdashboardpk-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|number|false|none|none|
|result|[DashboardRestApi.put](#schemadashboardrestapi.put)|false|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **422**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwt
</aside>

## delete/dashboard/{pk}

> Code samples

```bash
curl https://example.com/dashboard/0 \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /dashboard/{pk}`

Deletes a Dashboard.

<h3 id="deletedashboardpk-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|pk|path|integer|true|none|

> Example responses

> 200 Response

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

> 403 Response

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

> 422 Response

```json
{
  "message": "string"
}
```

> 500 Response

```json
{
  "message": "string"
}
```

<h3 id="deletedashboardpk-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Dashboard deleted|Inline|
|401|Unauthorized|Unauthorized|Inline|
|403|Forbidden|Forbidden|Inline|
|404|Not Found|Not found|Inline|
|422|Unprocessable Entity|Could not process entity|Inline|
|500|Internal Server Error|Fatal error|Inline|

<h3 id="deletedashboardpk-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **422**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwt
</aside>

## get/dashboard/{pk}/thumbnail/{digest}/

> Code samples

```bash
curl https://example.com/dashboard/0/thumbnail/string/ \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /dashboard/{pk}/thumbnail/{digest}/`

Compute async or get already computed dashboard thumbnail from cache.

<h3 id="getdashboardpkthumbnaildigest-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|pk|path|integer|true|none|
|digest|path|string|true|A hex digest that makes this dashboard unique|
|q|query|[thumbnail_query_schema](#schemathumbnail_query_schema)|false|none|

> Example responses

> 202 Response

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

> 422 Response

```json
{
  "message": "string"
}
```

> 500 Response

```json
{
  "message": "string"
}
```

<h3 id="getdashboardpkthumbnaildigest-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Dashboard thumbnail image|Inline|
|202|Accepted|Thumbnail does not exist on cache, fired async to compute|Inline|
|401|Unauthorized|Unauthorized|Inline|
|404|Not Found|Not found|Inline|
|422|Unprocessable Entity|Could not process entity|Inline|
|500|Internal Server Error|Fatal error|Inline|

<h3 id="getdashboardpkthumbnaildigest-responseschema">Response Schema</h3>

Status Code **202**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **422**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwt
</aside>

<h1 id="superset-database">Database</h1>

## get/database/

> Code samples

```bash
curl https://example.com/database/ \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /database/`

Get a list of models

<h3 id="getdatabase-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|q|query|[get_list_schema](#schemaget_list_schema)|false|none|

> Example responses

> 200 Response

```json
{
  "count": 0,
  "description_columns": {
    "column_name": "A Nice description for the column"
  },
  "ids": [
    "string"
  ],
  "label_columns": {
    "column_name": "A Nice label for the column"
  },
  "list_columns": [
    "string"
  ],
  "list_title": "List Items",
  "order_columns": [
    "string"
  ],
  "result": [
    {
      "allow_csv_upload": true,
      "allow_ctas": true,
      "allow_cvas": true,
      "allow_dml": true,
      "allow_multi_schema_metadata_fetch": true,
      "allow_run_async": true,
      "allows_cost_estimate": null,
      "allows_subquery": null,
      "allows_virtual_table_explore": null,
      "backend": null,
      "changed_on": "1970-01-01T00:00:00Z",
      "changed_on_delta_humanized": null,
      "created_by": {
        "first_name": "string",
        "last_name": "string"
      },
      "database_name": "string",
      "explore_database_id": null,
      "expose_in_sqllab": true,
      "extra": "string",
      "force_ctas_schema": "string",
      "id": 0
    }
  ]
}
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

> 422 Response

```json
{
  "message": "string"
}
```

> 500 Response

```json
{
  "message": "string"
}
```

<h3 id="getdatabase-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Items from Model|Inline|
|400|Bad Request|Bad request|Inline|
|401|Unauthorized|Unauthorized|Inline|
|422|Unprocessable Entity|Could not process entity|Inline|
|500|Internal Server Error|Fatal error|Inline|

<h3 id="getdatabase-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|number|false|none|The total record count on the backend|
|description_columns|object|false|none|none|
|» column_name|string|false|none|The description for the column name. Will be translated by babel|
|ids|[string]|false|none|A list of item ids, useful when you don't know the column id|
|label_columns|object|false|none|none|
|» column_name|string|false|none|The label for the column name. Will be translated by babel|
|list_columns|[string]|false|none|A list of columns|
|list_title|string|false|none|A title to render. Will be translated by babel|
|order_columns|[string]|false|none|A list of allowed columns to sort|
|result|[[DatabaseRestApi.get_list](#schemadatabaserestapi.get_list)]|false|none|The result from the get list query|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **422**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwt
</aside>

## post/database/

> Code samples

```bash
curl https://example.com/database/ \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "allow_csv_upload": true,
    "allow_ctas": true,
    "allow_cvas": true,
    "allow_dml": true,
    "allow_multi_schema_metadata_fetch": true,
    "allow_run_async": true,
    "cache_timeout": 0,
    "configuration_method": "sqlalchemy_form",
    "database_name": "string",
    "encrypted_extra": "string",
    "engine": "string",
    "expose_in_sqllab": true,
    "extra": "string",
    "force_ctas_schema": "string",
    "impersonate_user": true,
    "parameters": {
      "property1": null,
      "property2": null
    },
    "server_cert": "string",
    "sqlalchemy_uri": "string"
  }'
```

`POST /database/`

Create a new Database.

> Body parameter

```json
{
  "allow_csv_upload": true,
  "allow_ctas": true,
  "allow_cvas": true,
  "allow_dml": true,
  "allow_multi_schema_metadata_fetch": true,
  "allow_run_async": true,
  "cache_timeout": 0,
  "configuration_method": "sqlalchemy_form",
  "database_name": "string",
  "encrypted_extra": "string",
  "engine": "string",
  "expose_in_sqllab": true,
  "extra": "string",
  "force_ctas_schema": "string",
  "impersonate_user": true,
  "parameters": {
    "property1": null,
    "property2": null
  },
  "server_cert": "string",
  "sqlalchemy_uri": "string"
}
```

<h3 id="postdatabase-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[DatabaseRestApi.post](#schemadatabaserestapi.post)|true|Database schema|
|» allow_csv_upload|body|boolean|false|Allow to upload CSV file data into this databaseIf selected, please set the schemas allowed for csv upload in Extra.|
|» allow_ctas|body|boolean|false|Allow CREATE TABLE AS option in SQL Lab|
|» allow_cvas|body|boolean|false|Allow CREATE VIEW AS option in SQL Lab|
|» allow_dml|body|boolean|false|Allow users to run non-SELECT statements (UPDATE, DELETE, CREATE, ...) in SQL Lab|
|» allow_multi_schema_metadata_fetch|body|boolean|false|Allow SQL Lab to fetch a list of all tables and all views across all database schemas. For large data warehouse with thousands of tables, this can be expensive and put strain on the system.|
|» allow_run_async|body|boolean|false|Operate the database in asynchronous mode, meaning  that the queries are executed on remote workers as opposed to on the web server itself. This assumes that you have a Celery worker setup as well as a results backend. Refer to the installation docs for more information.|
|» cache_timeout|body|integer(int32) \| null|false|Duration (in seconds) of the caching timeout for charts of this database. A timeout of 0 indicates that the cache never expires. Note this defaults to the global timeout if undefined.|
|» configuration_method|body|object|false|Configuration_method is used on the frontend to inform the backend whether to explode parameters or to provide only a sqlalchemy_uri.|
|» database_name|body|string|true|A database name to identify this connection.|
|» encrypted_extra|body|string \| null|false|<p>JSON string containing additional connection configuration.<br>This is used to provide connection information for systems like Hive, Presto, and BigQuery, which do not conform to the username:password syntax normally used by SQLAlchemy.</p>|
|» engine|body|string \| null|false|SQLAlchemy engine to use|
|» expose_in_sqllab|body|boolean|false|Expose this database to SQLLab|
|» extra|body|string|false|<p>JSON string containing extra configuration elements.<br>1. The <code>engine_params</code> object gets unpacked into the <a href="https://docs.sqlalchemy.org/en/latest/core/engines.html#sqlalchemy.create_engine">sqlalchemy.create_engine</a> call, while the <code>metadata_params</code> gets unpacked into the <a href="https://docs.sqlalchemy.org/en/rel_1_0/core/metadata.html#sqlalchemy.schema.MetaData">sqlalchemy.MetaData</a> call.<br>2. The <code>metadata_cache_timeout</code> is a cache timeout setting in seconds for metadata fetch of this database. Specify it as <strong>"metadata_cache_timeout": {"schema_cache_timeout": 600, "table_cache_timeout": 600}</strong>. If unset, cache will not be enabled for the functionality. A timeout of 0 indicates that the cache never expires.<br>3. The <code>schemas_allowed_for_csv_upload</code> is a comma separated list of schemas that CSVs are allowed to upload to. Specify it as <strong>"schemas_allowed_for_csv_upload": ["public", "csv_upload"]</strong>. If database flavor does not support schema or any schema is allowed to be accessed, just leave the list empty<br>4. the <code>version</code> field is a string specifying the this db's version. This should be used with Presto DBs so that the syntax is correct<br>5. The <code>allows_virtual_table_explore</code> field is a boolean specifying whether or not the Explore button in SQL Lab results is shown.</p>|
|» force_ctas_schema|body|string \| null|false|When allowing CREATE TABLE AS option in SQL Lab, this option forces the table to be created in this schema|
|» impersonate_user|body|boolean|false|If Presto, all the queries in SQL Lab are going to be executed as the currently logged on user who must have permission to run them.<br/>If Hive and hive.server2.enable.doAs is enabled, will run the queries as service account, but impersonate the currently logged on user via hive.server2.proxy.user property.|
|» parameters|body|object|false|DB-specific parameters for configuration|
|» » **additionalProperties**|body|object|false|none|
|» server_cert|body|string \| null|false|<p>Optional CA_BUNDLE contents to validate HTTPS requests. Only available on certain database engines.</p>|
|» sqlalchemy_uri|body|string|false|<p>Refer to the <a href="https://docs.sqlalchemy.org/en/rel_1_2/core/engines.html#database-urls">SqlAlchemy docs</a> for more information on how to structure your URI.</p>|

> Example responses

> 201 Response

```json
{
  "id": 0,
  "result": {
    "allow_csv_upload": true,
    "allow_ctas": true,
    "allow_cvas": true,
    "allow_dml": true,
    "allow_multi_schema_metadata_fetch": true,
    "allow_run_async": true,
    "cache_timeout": 0,
    "configuration_method": "sqlalchemy_form",
    "database_name": "string",
    "encrypted_extra": "string",
    "engine": "string",
    "expose_in_sqllab": true,
    "extra": "string",
    "force_ctas_schema": "string",
    "impersonate_user": true,
    "parameters": {
      "property1": null,
      "property2": null
    },
    "server_cert": "string",
    "sqlalchemy_uri": "string"
  }
}
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

> 500 Response

```json
{
  "message": "string"
}
```

<h3 id="postdatabase-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Database added|Inline|
|302|Found|Redirects to the current digest|None|
|400|Bad Request|Bad request|Inline|
|401|Unauthorized|Unauthorized|Inline|
|404|Not Found|Not found|Inline|
|500|Internal Server Error|Fatal error|Inline|

<h3 id="postdatabase-responseschema">Response Schema</h3>

Status Code **201**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|number|false|none|none|
|result|[DatabaseRestApi.post](#schemadatabaserestapi.post)|false|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwt
</aside>

## get/database/_info

> Code samples

```bash
curl https://example.com/database/_info \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /database/_info`

Get metadata information about this API resource

<h3 id="getdatabaseinfo-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|q|query|[get_info_schema](#schemaget_info_schema)|false|none|

> Example responses

> 200 Response

```json
{
  "add_columns": {},
  "edit_columns": {},
  "filters": {
    "column_name": [
      {
        "name": "string",
        "operator": "string"
      }
    ]
  },
  "permissions": [
    "string"
  ]
}
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

> 422 Response

```json
{
  "message": "string"
}
```

> 500 Response

```json
{
  "message": "string"
}
```

<h3 id="getdatabaseinfo-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Item from Model|Inline|
|400|Bad Request|Bad request|Inline|
|401|Unauthorized|Unauthorized|Inline|
|422|Unprocessable Entity|Could not process entity|Inline|
|500|Internal Server Error|Fatal error|Inline|

<h3 id="getdatabaseinfo-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|add_columns|object|false|none|none|
|edit_columns|object|false|none|none|
|filters|object|false|none|none|
|» column_name|[object]|false|none|none|
|» » name|string|false|none|The filter name. Will be translated by babel|
|» » operator|string|false|none|The filter operation key to use on list filters|
|permissions|[string]|false|none|The user permissions for this API resource|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **422**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwt
</aside>

## get/database/available/

> Code samples

```bash
curl https://example.com/database/available/ \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /database/available/`

Get names of databases currently available

> Example responses

> 200 Response

```json
[
  {
    "available_drivers": [
      "string"
    ],
    "default_driver": "string",
    "engine": "string",
    "name": "string",
    "parameters": {},
    "preferred": true,
    "sqlalchemy_uri_placeholder": "string"
  }
]
```

> 400 Response

```json
{
  "message": "string"
}
```

> 500 Response

```json
{
  "message": "string"
}
```

<h3 id="getdatabaseavailable-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Database names|Inline|
|400|Bad Request|Bad request|Inline|
|500|Internal Server Error|Fatal error|Inline|

<h3 id="getdatabaseavailable-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|
|» available_drivers|[string]|false|none|Installed drivers for the engine|
|» default_driver|string|false|none|Default driver for the engine|
|» engine|string|false|none|Name of the SQLAlchemy engine|
|» name|string|false|none|Name of the database|
|» parameters|object|false|none|JSON schema defining the needed parameters|
|» preferred|boolean|false|none|Is the database preferred?|
|» sqlalchemy_uri_placeholder|string|false|none|Example placeholder for the SQLAlchemy URI|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwt
</aside>

## get/database/export/

> Code samples

```bash
curl https://example.com/database/export/ \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /database/export/`

Download database(s) and associated dataset(s) as a zip file

<h3 id="getdatabaseexport-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|q|query|[get_export_ids_schema](#schemaget_export_ids_schema)|false|none|

> Example responses

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

> 500 Response

```json
{
  "message": "string"
}
```

<h3 id="getdatabaseexport-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A zip file with database(s) and dataset(s) as YAML|Inline|
|401|Unauthorized|Unauthorized|Inline|
|404|Not Found|Not found|Inline|
|500|Internal Server Error|Fatal error|Inline|

<h3 id="getdatabaseexport-responseschema">Response Schema</h3>

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwt
</aside>

## post/database/import/

> Code samples

```bash
curl https://example.com/database/import/ \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -F 'formData=@/path/to/file' \
  -F 'overwrite=true' \
  -F 'passwords=string'
```

`POST /database/import/`

> Body parameter

```yaml
formData: string
overwrite: true
passwords: string
```

<h3 id="postdatabaseimport-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» formData|body|string(binary)|false|upload file (ZIP)|
|» overwrite|body|boolean|false|overwrite existing databases?|
|» passwords|body|string|false|JSON map of passwords for each file|

> Example responses

> 200 Response

```json
{
  "message": "string"
}
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

> 422 Response

```json
{
  "message": "string"
}
```

> 500 Response

```json
{
  "message": "string"
}
```

<h3 id="postdatabaseimport-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Database import result|Inline|
|400|Bad Request|Bad request|Inline|
|401|Unauthorized|Unauthorized|Inline|
|422|Unprocessable Entity|Could not process entity|Inline|
|500|Internal Server Error|Fatal error|Inline|

<h3 id="postdatabaseimport-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **422**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwt
</aside>

## post/database/test_connection

> Code samples

```bash
curl https://example.com/database/test_connection \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "configuration_method": "sqlalchemy_form",
    "database_name": "string",
    "encrypted_extra": "string",
    "engine": "string",
    "extra": "string",
    "impersonate_user": true,
    "parameters": {
      "property1": null,
      "property2": null
    },
    "server_cert": "string",
    "sqlalchemy_uri": "string"
  }'
```

`POST /database/test_connection`

Tests a database connection

> Body parameter

```json
{
  "configuration_method": "sqlalchemy_form",
  "database_name": "string",
  "encrypted_extra": "string",
  "engine": "string",
  "extra": "string",
  "impersonate_user": true,
  "parameters": {
    "property1": null,
    "property2": null
  },
  "server_cert": "string",
  "sqlalchemy_uri": "string"
}
```

<h3 id="postdatabasetestconnection-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[DatabaseTestConnectionSchema](#schemadatabasetestconnectionschema)|true|Database schema|
|» configuration_method|body|object|false|Configuration_method is used on the frontend to inform the backend whether to explode parameters or to provide only a sqlalchemy_uri.|
|» database_name|body|string \| null|false|A database name to identify this connection.|
|» encrypted_extra|body|string \| null|false|<p>JSON string containing additional connection configuration.<br>This is used to provide connection information for systems like Hive, Presto, and BigQuery, which do not conform to the username:password syntax normally used by SQLAlchemy.</p>|
|» engine|body|string \| null|false|SQLAlchemy engine to use|
|» extra|body|string|false|<p>JSON string containing extra configuration elements.<br>1. The <code>engine_params</code> object gets unpacked into the <a href="https://docs.sqlalchemy.org/en/latest/core/engines.html#sqlalchemy.create_engine">sqlalchemy.create_engine</a> call, while the <code>metadata_params</code> gets unpacked into the <a href="https://docs.sqlalchemy.org/en/rel_1_0/core/metadata.html#sqlalchemy.schema.MetaData">sqlalchemy.MetaData</a> call.<br>2. The <code>metadata_cache_timeout</code> is a cache timeout setting in seconds for metadata fetch of this database. Specify it as <strong>"metadata_cache_timeout": {"schema_cache_timeout": 600, "table_cache_timeout": 600}</strong>. If unset, cache will not be enabled for the functionality. A timeout of 0 indicates that the cache never expires.<br>3. The <code>schemas_allowed_for_csv_upload</code> is a comma separated list of schemas that CSVs are allowed to upload to. Specify it as <strong>"schemas_allowed_for_csv_upload": ["public", "csv_upload"]</strong>. If database flavor does not support schema or any schema is allowed to be accessed, just leave the list empty<br>4. the <code>version</code> field is a string specifying the this db's version. This should be used with Presto DBs so that the syntax is correct<br>5. The <code>allows_virtual_table_explore</code> field is a boolean specifying whether or not the Explore button in SQL Lab results is shown.</p>|
|» impersonate_user|body|boolean|false|If Presto, all the queries in SQL Lab are going to be executed as the currently logged on user who must have permission to run them.<br/>If Hive and hive.server2.enable.doAs is enabled, will run the queries as service account, but impersonate the currently logged on user via hive.server2.proxy.user property.|
|» parameters|body|object|false|DB-specific parameters for configuration|
|» » **additionalProperties**|body|object|false|none|
|» server_cert|body|string \| null|false|<p>Optional CA_BUNDLE contents to validate HTTPS requests. Only available on certain database engines.</p>|
|» sqlalchemy_uri|body|string|false|<p>Refer to the <a href="https://docs.sqlalchemy.org/en/rel_1_2/core/engines.html#database-urls">SqlAlchemy docs</a> for more information on how to structure your URI.</p>|

> Example responses

> 200 Response

```json
{
  "message": "string"
}
```

> 400 Response

```json
{
  "message": "string"
}
```

> 422 Response

```json
{
  "message": "string"
}
```

> 500 Response

```json
{
  "message": "string"
}
```

<h3 id="postdatabasetestconnection-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Database Test Connection|Inline|
|400|Bad Request|Bad request|Inline|
|422|Unprocessable Entity|Could not process entity|Inline|
|500|Internal Server Error|Fatal error|Inline|

<h3 id="postdatabasetestconnection-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **422**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwt
</aside>

## post/database/validate_parameters

> Code samples

```bash
curl https://example.com/database/validate_parameters \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "configuration_method": null,
    "database_name": "string",
    "encrypted_extra": "string",
    "engine": "string",
    "extra": "string",
    "impersonate_user": true,
    "parameters": {
      "property1": null,
      "property2": null
    },
    "server_cert": "string"
  }'
```

`POST /database/validate_parameters`

Validates parameters used to connect to a database

> Body parameter

```json
{
  "configuration_method": null,
  "database_name": "string",
  "encrypted_extra": "string",
  "engine": "string",
  "extra": "string",
  "impersonate_user": true,
  "parameters": {
    "property1": null,
    "property2": null
  },
  "server_cert": "string"
}
```

<h3 id="postdatabasevalidateparameters-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[DatabaseValidateParametersSchema](#schemadatabasevalidateparametersschema)|true|DB-specific parameters|
|» configuration_method|body|object|true|Configuration_method is used on the frontend to inform the backend whether to explode parameters or to provide only a sqlalchemy_uri.|
|» database_name|body|string \| null|false|A database name to identify this connection.|
|» encrypted_extra|body|string \| null|false|<p>JSON string containing additional connection configuration.<br>This is used to provide connection information for systems like Hive, Presto, and BigQuery, which do not conform to the username:password syntax normally used by SQLAlchemy.</p>|
|» engine|body|string|true|SQLAlchemy engine to use|
|» extra|body|string|false|<p>JSON string containing extra configuration elements.<br>1. The <code>engine_params</code> object gets unpacked into the <a href="https://docs.sqlalchemy.org/en/latest/core/engines.html#sqlalchemy.create_engine">sqlalchemy.create_engine</a> call, while the <code>metadata_params</code> gets unpacked into the <a href="https://docs.sqlalchemy.org/en/rel_1_0/core/metadata.html#sqlalchemy.schema.MetaData">sqlalchemy.MetaData</a> call.<br>2. The <code>metadata_cache_timeout</code> is a cache timeout setting in seconds for metadata fetch of this database. Specify it as <strong>"metadata_cache_timeout": {"schema_cache_timeout": 600, "table_cache_timeout": 600}</strong>. If unset, cache will not be enabled for the functionality. A timeout of 0 indicates that the cache never expires.<br>3. The <code>schemas_allowed_for_csv_upload</code> is a comma separated list of schemas that CSVs are allowed to upload to. Specify it as <strong>"schemas_allowed_for_csv_upload": ["public", "csv_upload"]</strong>. If database flavor does not support schema or any schema is allowed to be accessed, just leave the list empty<br>4. the <code>version</code> field is a string specifying the this db's version. This should be used with Presto DBs so that the syntax is correct<br>5. The <code>allows_virtual_table_explore</code> field is a boolean specifying whether or not the Explore button in SQL Lab results is shown.</p>|
|» impersonate_user|body|boolean|false|If Presto, all the queries in SQL Lab are going to be executed as the currently logged on user who must have permission to run them.<br/>If Hive and hive.server2.enable.doAs is enabled, will run the queries as service account, but impersonate the currently logged on user via hive.server2.proxy.user property.|
|» parameters|body|object|false|DB-specific parameters for configuration|
|» » **additionalProperties**|body|object \| null|false|none|
|» server_cert|body|string \| null|false|<p>Optional CA_BUNDLE contents to validate HTTPS requests. Only available on certain database engines.</p>|

> Example responses

> 200 Response

```json
{
  "message": "string"
}
```

> 400 Response

```json
{
  "message": "string"
}
```

> 422 Response

```json
{
  "message": "string"
}
```

> 500 Response

```json
{
  "message": "string"
}
```

<h3 id="postdatabasevalidateparameters-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Database Test Connection|Inline|
|400|Bad Request|Bad request|Inline|
|422|Unprocessable Entity|Could not process entity|Inline|
|500|Internal Server Error|Fatal error|Inline|

<h3 id="postdatabasevalidateparameters-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **422**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwt
</aside>

## get/database/{pk}

> Code samples

```bash
curl https://example.com/database/0 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /database/{pk}`

Get an item model

<h3 id="getdatabasepk-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|pk|path|integer|true|none|
|q|query|[get_item_schema](#schemaget_item_schema)|false|none|

> Example responses

> 200 Response

```json
{
  "description_columns": {
    "column_name": "A Nice description for the column"
  },
  "id": "string",
  "label_columns": {
    "column_name": "A Nice label for the column"
  },
  "result": {
    "allow_csv_upload": true,
    "allow_ctas": true,
    "allow_cvas": true,
    "allow_dml": true,
    "allow_multi_schema_metadata_fetch": true,
    "allow_run_async": true,
    "backend": null,
    "cache_timeout": 0,
    "configuration_method": "string",
    "database_name": "string",
    "encrypted_extra": "string",
    "expose_in_sqllab": true,
    "extra": "string",
    "force_ctas_schema": "string",
    "id": 0,
    "impersonate_user": true,
    "parameters": null,
    "server_cert": "string",
    "sqlalchemy_uri": "string"
  },
  "show_columns": [
    "string"
  ],
  "show_title": "Show Item Details"
}
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

> 422 Response

```json
{
  "message": "string"
}
```

> 500 Response

```json
{
  "message": "string"
}
```

<h3 id="getdatabasepk-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Item from Model|Inline|
|400|Bad Request|Bad request|Inline|
|401|Unauthorized|Unauthorized|Inline|
|404|Not Found|Not found|Inline|
|422|Unprocessable Entity|Could not process entity|Inline|
|500|Internal Server Error|Fatal error|Inline|

<h3 id="getdatabasepk-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description_columns|object|false|none|none|
|» column_name|string|false|none|The description for the column name. Will be translated by babel|
|id|string|false|none|The item id|
|label_columns|object|false|none|none|
|» column_name|string|false|none|The label for the column name. Will be translated by babel|
|result|[DatabaseRestApi.get](#schemadatabaserestapi.get)|false|none|none|
|show_columns|[string]|false|none|A list of columns|
|show_title|string|false|none|A title to render. Will be translated by babel|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **422**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwt
</aside>

## put/database/{pk}

> Code samples

```bash
curl https://example.com/database/0 \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "allow_csv_upload": true,
    "allow_ctas": true,
    "allow_cvas": true,
    "allow_dml": true,
    "allow_multi_schema_metadata_fetch": true,
    "allow_run_async": true,
    "cache_timeout": 0,
    "configuration_method": "sqlalchemy_form",
    "database_name": "string",
    "encrypted_extra": "string",
    "engine": "string",
    "expose_in_sqllab": true,
    "extra": "string",
    "force_ctas_schema": "string",
    "impersonate_user": true,
    "parameters": {
      "property1": null,
      "property2": null
    },
    "server_cert": "string",
    "sqlalchemy_uri": "string"
  }'
```

`PUT /database/{pk}`

Changes a Database.

> Body parameter

```json
{
  "allow_csv_upload": true,
  "allow_ctas": true,
  "allow_cvas": true,
  "allow_dml": true,
  "allow_multi_schema_metadata_fetch": true,
  "allow_run_async": true,
  "cache_timeout": 0,
  "configuration_method": "sqlalchemy_form",
  "database_name": "string",
  "encrypted_extra": "string",
  "engine": "string",
  "expose_in_sqllab": true,
  "extra": "string",
  "force_ctas_schema": "string",
  "impersonate_user": true,
  "parameters": {
    "property1": null,
    "property2": null
  },
  "server_cert": "string",
  "sqlalchemy_uri": "string"
}
```

<h3 id="putdatabasepk-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|pk|path|integer|true|none|
|body|body|[DatabaseRestApi.put](#schemadatabaserestapi.put)|true|Database schema|
|» allow_csv_upload|body|boolean|false|Allow to upload CSV file data into this databaseIf selected, please set the schemas allowed for csv upload in Extra.|
|» allow_ctas|body|boolean|false|Allow CREATE TABLE AS option in SQL Lab|
|» allow_cvas|body|boolean|false|Allow CREATE VIEW AS option in SQL Lab|
|» allow_dml|body|boolean|false|Allow users to run non-SELECT statements (UPDATE, DELETE, CREATE, ...) in SQL Lab|
|» allow_multi_schema_metadata_fetch|body|boolean|false|Allow SQL Lab to fetch a list of all tables and all views across all database schemas. For large data warehouse with thousands of tables, this can be expensive and put strain on the system.|
|» allow_run_async|body|boolean|false|Operate the database in asynchronous mode, meaning  that the queries are executed on remote workers as opposed to on the web server itself. This assumes that you have a Celery worker setup as well as a results backend. Refer to the installation docs for more information.|
|» cache_timeout|body|integer(int32) \| null|false|Duration (in seconds) of the caching timeout for charts of this database. A timeout of 0 indicates that the cache never expires. Note this defaults to the global timeout if undefined.|
|» configuration_method|body|object|false|Configuration_method is used on the frontend to inform the backend whether to explode parameters or to provide only a sqlalchemy_uri.|
|» database_name|body|string \| null|false|A database name to identify this connection.|
|» encrypted_extra|body|string \| null|false|<p>JSON string containing additional connection configuration.<br>This is used to provide connection information for systems like Hive, Presto, and BigQuery, which do not conform to the username:password syntax normally used by SQLAlchemy.</p>|
|» engine|body|string \| null|false|SQLAlchemy engine to use|
|» expose_in_sqllab|body|boolean|false|Expose this database to SQLLab|
|» extra|body|string|false|<p>JSON string containing extra configuration elements.<br>1. The <code>engine_params</code> object gets unpacked into the <a href="https://docs.sqlalchemy.org/en/latest/core/engines.html#sqlalchemy.create_engine">sqlalchemy.create_engine</a> call, while the <code>metadata_params</code> gets unpacked into the <a href="https://docs.sqlalchemy.org/en/rel_1_0/core/metadata.html#sqlalchemy.schema.MetaData">sqlalchemy.MetaData</a> call.<br>2. The <code>metadata_cache_timeout</code> is a cache timeout setting in seconds for metadata fetch of this database. Specify it as <strong>"metadata_cache_timeout": {"schema_cache_timeout": 600, "table_cache_timeout": 600}</strong>. If unset, cache will not be enabled for the functionality. A timeout of 0 indicates that the cache never expires.<br>3. The <code>schemas_allowed_for_csv_upload</code> is a comma separated list of schemas that CSVs are allowed to upload to. Specify it as <strong>"schemas_allowed_for_csv_upload": ["public", "csv_upload"]</strong>. If database flavor does not support schema or any schema is allowed to be accessed, just leave the list empty<br>4. the <code>version</code> field is a string specifying the this db's version. This should be used with Presto DBs so that the syntax is correct<br>5. The <code>allows_virtual_table_explore</code> field is a boolean specifying whether or not the Explore button in SQL Lab results is shown.</p>|
|» force_ctas_schema|body|string \| null|false|When allowing CREATE TABLE AS option in SQL Lab, this option forces the table to be created in this schema|
|» impersonate_user|body|boolean|false|If Presto, all the queries in SQL Lab are going to be executed as the currently logged on user who must have permission to run them.<br/>If Hive and hive.server2.enable.doAs is enabled, will run the queries as service account, but impersonate the currently logged on user via hive.server2.proxy.user property.|
|» parameters|body|object|false|DB-specific parameters for configuration|
|» » **additionalProperties**|body|object|false|none|
|» server_cert|body|string \| null|false|<p>Optional CA_BUNDLE contents to validate HTTPS requests. Only available on certain database engines.</p>|
|» sqlalchemy_uri|body|string|false|<p>Refer to the <a href="https://docs.sqlalchemy.org/en/rel_1_2/core/engines.html#database-urls">SqlAlchemy docs</a> for more information on how to structure your URI.</p>|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "result": {
    "allow_csv_upload": true,
    "allow_ctas": true,
    "allow_cvas": true,
    "allow_dml": true,
    "allow_multi_schema_metadata_fetch": true,
    "allow_run_async": true,
    "cache_timeout": 0,
    "configuration_method": "sqlalchemy_form",
    "database_name": "string",
    "encrypted_extra": "string",
    "engine": "string",
    "expose_in_sqllab": true,
    "extra": "string",
    "force_ctas_schema": "string",
    "impersonate_user": true,
    "parameters": {
      "property1": null,
      "property2": null
    },
    "server_cert": "string",
    "sqlalchemy_uri": "string"
  }
}
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

> 403 Response

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

> 422 Response

```json
{
  "message": "string"
}
```

> 500 Response

```json
{
  "message": "string"
}
```

<h3 id="putdatabasepk-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Database changed|Inline|
|400|Bad Request|Bad request|Inline|
|401|Unauthorized|Unauthorized|Inline|
|403|Forbidden|Forbidden|Inline|
|404|Not Found|Not found|Inline|
|422|Unprocessable Entity|Could not process entity|Inline|
|500|Internal Server Error|Fatal error|Inline|

<h3 id="putdatabasepk-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|number|false|none|none|
|result|[DatabaseRestApi.put](#schemadatabaserestapi.put)|false|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **422**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwt
</aside>

## delete/database/{pk}

> Code samples

```bash
curl https://example.com/database/0 \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /database/{pk}`

Deletes a Database.

<h3 id="deletedatabasepk-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|pk|path|integer|true|none|

> Example responses

> 200 Response

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

> 403 Response

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

> 422 Response

```json
{
  "message": "string"
}
```

> 500 Response

```json
{
  "message": "string"
}
```

<h3 id="deletedatabasepk-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Database deleted|Inline|
|401|Unauthorized|Unauthorized|Inline|
|403|Forbidden|Forbidden|Inline|
|404|Not Found|Not found|Inline|
|422|Unprocessable Entity|Could not process entity|Inline|
|500|Internal Server Error|Fatal error|Inline|

<h3 id="deletedatabasepk-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **422**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwt
</aside>

## get/database/{pk}/function_names/

> Code samples

```bash
curl https://example.com/database/0/function_names/ \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /database/{pk}/function_names/`

Get function names supported by a database

<h3 id="getdatabasepkfunctionnames-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|pk|path|integer|true|none|

> Example responses

> 200 Response

```json
{
  "function_names": [
    "string"
  ]
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

> 500 Response

```json
{
  "message": "string"
}
```

<h3 id="getdatabasepkfunctionnames-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Query result|[DatabaseFunctionNamesResponse](#schemadatabasefunctionnamesresponse)|
|401|Unauthorized|Unauthorized|Inline|
|404|Not Found|Not found|Inline|
|500|Internal Server Error|Fatal error|Inline|

<h3 id="getdatabasepkfunctionnames-responseschema">Response Schema</h3>

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwt
</aside>

## get/database/{pk}/related_objects/

> Code samples

```bash
curl https://example.com/database/0/related_objects/ \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /database/{pk}/related_objects/`

Get charts and dashboards count associated to a database

<h3 id="getdatabasepkrelatedobjects-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|pk|path|integer|true|none|

> Example responses

> 200 Response

```json
{
  "charts": {
    "count": 0,
    "result": [
      {
        "id": 0,
        "slice_name": "string",
        "viz_type": "string"
      }
    ]
  },
  "dashboards": {
    "count": 0,
    "result": [
      {
        "id": 0,
        "json_metadata": {},
        "slug": "string",
        "title": "string"
      }
    ]
  }
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

> 500 Response

```json
{
  "message": "string"
}
```

<h3 id="getdatabasepkrelatedobjects-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Query result|[DatabaseRelatedObjectsResponse](#schemadatabaserelatedobjectsresponse)|
|401|Unauthorized|Unauthorized|Inline|
|404|Not Found|Not found|Inline|
|500|Internal Server Error|Fatal error|Inline|

<h3 id="getdatabasepkrelatedobjects-responseschema">Response Schema</h3>

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwt
</aside>

## get/database/{pk}/schemas/

> Code samples

```bash
curl https://example.com/database/0/schemas/ \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /database/{pk}/schemas/`

Get all schemas from a database

<h3 id="getdatabasepkschemas-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|pk|path|integer|true|The database id|
|q|query|[database_schemas_query_schema](#schemadatabase_schemas_query_schema)|false|none|

> Example responses

> 200 Response

```json
{
  "result": [
    "string"
  ]
}
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

> 500 Response

```json
{
  "message": "string"
}
```

<h3 id="getdatabasepkschemas-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A List of all schemas from the database|[SchemasResponseSchema](#schemaschemasresponseschema)|
|400|Bad Request|Bad request|Inline|
|401|Unauthorized|Unauthorized|Inline|
|404|Not Found|Not found|Inline|
|500|Internal Server Error|Fatal error|Inline|

<h3 id="getdatabasepkschemas-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwt
</aside>

## get/database/{pk}/select_star/{table_name}/

> Code samples

```bash
curl 'https://example.com/database/0/select_star/string/?schema_name=string' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /database/{pk}/select_star/{table_name}/`

Get database select star for table

<h3 id="getdatabasepkselectstartablename-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|pk|path|integer|true|The database id|
|table_name|path|string|true|Table name|
|schema_name|query|string|true|Table schema|

> Example responses

> 200 Response

```json
{
  "result": "string"
}
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

> 422 Response

```json
{
  "message": "string"
}
```

> 500 Response

```json
{
  "message": "string"
}
```

<h3 id="getdatabasepkselectstartablename-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|SQL statement for a select star for table|[SelectStarResponseSchema](#schemaselectstarresponseschema)|
|400|Bad Request|Bad request|Inline|
|401|Unauthorized|Unauthorized|Inline|
|404|Not Found|Not found|Inline|
|422|Unprocessable Entity|Could not process entity|Inline|
|500|Internal Server Error|Fatal error|Inline|

<h3 id="getdatabasepkselectstartablename-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **422**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwt
</aside>

## get/database/{pk}/select_star/{table_name}/{schema_name}/

> Code samples

```bash
curl https://example.com/database/0/select_star/string/string/ \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /database/{pk}/select_star/{table_name}/{schema_name}/`

Get database select star for table

<h3 id="getdatabasepkselectstartablenameschemaname-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|pk|path|integer|true|The database id|
|table_name|path|string|true|Table name|
|schema_name|path|string|true|Table schema|

> Example responses

> 200 Response

```json
{
  "result": "string"
}
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

> 422 Response

```json
{
  "message": "string"
}
```

> 500 Response

```json
{
  "message": "string"
}
```

<h3 id="getdatabasepkselectstartablenameschemaname-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|SQL statement for a select star for table|[SelectStarResponseSchema](#schemaselectstarresponseschema)|
|400|Bad Request|Bad request|Inline|
|401|Unauthorized|Unauthorized|Inline|
|404|Not Found|Not found|Inline|
|422|Unprocessable Entity|Could not process entity|Inline|
|500|Internal Server Error|Fatal error|Inline|

<h3 id="getdatabasepkselectstartablenameschemaname-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **422**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwt
</aside>

## get/database/{pk}/table/{table_name}/{schema_name}/

> Code samples

```bash
curl https://example.com/database/0/table/string/string/ \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /database/{pk}/table/{table_name}/{schema_name}/`

Get database table metadata

<h3 id="getdatabasepktabletablenameschemaname-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|pk|path|integer|true|The database id|
|table_name|path|string|true|Table name|
|schema_name|path|string|true|Table schema|

> Example responses

> 200 Response

```json
{
  "columns": [
    {
      "duplicates_constraint": "string",
      "keys": [
        "string"
      ],
      "longType": "string",
      "name": "string",
      "type": "string"
    }
  ],
  "foreignKeys": [
    {
      "column_names": [
        "string"
      ],
      "name": "string",
      "options": {
        "deferrable": true,
        "initially": true,
        "match": true,
        "ondelete": true,
        "onupdate": true
      },
      "referred_columns": [
        "string"
      ],
      "referred_schema": "string",
      "referred_table": "string",
      "type": "string"
    }
  ],
  "indexes": [
    {
      "column_names": [
        "string"
      ],
      "name": "string",
      "options": {
        "deferrable": true,
        "initially": true,
        "match": true,
        "ondelete": true,
        "onupdate": true
      },
      "referred_columns": [
        "string"
      ],
      "referred_schema": "string",
      "referred_table": "string",
      "type": "string"
    }
  ],
  "name": "string",
  "primaryKey": {
    "column_names": [
      "string"
    ],
    "name": "string",
    "type": "string"
  },
  "selectStar": "string"
}
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

> 422 Response

```json
{
  "message": "string"
}
```

> 500 Response

```json
{
  "message": "string"
}
```

<h3 id="getdatabasepktabletablenameschemaname-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Table metadata information|[TableMetadataResponseSchema](#schematablemetadataresponseschema)|
|400|Bad Request|Bad request|Inline|
|401|Unauthorized|Unauthorized|Inline|
|404|Not Found|Not found|Inline|
|422|Unprocessable Entity|Could not process entity|Inline|
|500|Internal Server Error|Fatal error|Inline|

<h3 id="getdatabasepktabletablenameschemaname-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **422**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwt
</aside>

<h1 id="superset-datasets">Datasets</h1>

## get/dataset/

> Code samples

```bash
curl https://example.com/dataset/ \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /dataset/`

Get a list of models

<h3 id="getdataset-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|q|query|[get_list_schema](#schemaget_list_schema)|false|none|

> Example responses

> 200 Response

```json
{
  "count": 0,
  "description_columns": {
    "column_name": "A Nice description for the column"
  },
  "ids": [
    "string"
  ],
  "label_columns": {
    "column_name": "A Nice label for the column"
  },
  "list_columns": [
    "string"
  ],
  "list_title": "List Items",
  "order_columns": [
    "string"
  ],
  "result": [
    {
      "changed_by": {
        "first_name": "string",
        "username": "string"
      },
      "changed_by_name": null,
      "changed_by_url": null,
      "changed_on_delta_humanized": null,
      "changed_on_utc": null,
      "database": {
        "database_name": "string",
        "id": 0
      },
      "default_endpoint": "string",
      "explore_url": null,
      "extra": "string",
      "id": 0,
      "kind": null,
      "owners": {
        "first_name": "string",
        "id": 0,
        "last_name": "string",
        "username": "string"
      },
      "schema": "string",
      "sql": "string",
      "table_name": "string"
    }
  ]
}
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

> 422 Response

```json
{
  "message": "string"
}
```

> 500 Response

```json
{
  "message": "string"
}
```

<h3 id="getdataset-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Items from Model|Inline|
|400|Bad Request|Bad request|Inline|
|401|Unauthorized|Unauthorized|Inline|
|422|Unprocessable Entity|Could not process entity|Inline|
|500|Internal Server Error|Fatal error|Inline|

<h3 id="getdataset-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|number|false|none|The total record count on the backend|
|description_columns|object|false|none|none|
|» column_name|string|false|none|The description for the column name. Will be translated by babel|
|ids|[string]|false|none|A list of item ids, useful when you don't know the column id|
|label_columns|object|false|none|none|
|» column_name|string|false|none|The label for the column name. Will be translated by babel|
|list_columns|[string]|false|none|A list of columns|
|list_title|string|false|none|A title to render. Will be translated by babel|
|order_columns|[string]|false|none|A list of allowed columns to sort|
|result|[[DatasetRestApi.get_list](#schemadatasetrestapi.get_list)]|false|none|The result from the get list query|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **422**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwt
</aside>

## post/dataset/

> Code samples

```bash
curl https://example.com/dataset/ \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "database": 0,
    "owners": [
      0
    ],
    "schema": "string",
    "table_name": "string"
  }'
```

`POST /dataset/`

Create a new Dataset

> Body parameter

```json
{
  "database": 0,
  "owners": [
    0
  ],
  "schema": "string",
  "table_name": "string"
}
```

<h3 id="postdataset-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[DatasetRestApi.post](#schemadatasetrestapi.post)|true|Dataset schema|
|» database|body|integer(int32)|true|none|
|» owners|body|[integer(int32)]|false|none|
|» schema|body|string|false|none|
|» table_name|body|string|true|none|

> Example responses

> 201 Response

```json
{
  "id": 0,
  "result": {
    "database": 0,
    "owners": [
      0
    ],
    "schema": "string",
    "table_name": "string"
  }
}
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

> 422 Response

```json
{
  "message": "string"
}
```

> 500 Response

```json
{
  "message": "string"
}
```

<h3 id="postdataset-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Dataset added|Inline|
|400|Bad Request|Bad request|Inline|
|401|Unauthorized|Unauthorized|Inline|
|422|Unprocessable Entity|Could not process entity|Inline|
|500|Internal Server Error|Fatal error|Inline|

<h3 id="postdataset-responseschema">Response Schema</h3>

Status Code **201**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|number|false|none|none|
|result|[DatasetRestApi.post](#schemadatasetrestapi.post)|false|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **422**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwt
</aside>

## delete/dataset/

> Code samples

```bash
curl https://example.com/dataset/ \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /dataset/`

Deletes multiple Datasets in a bulk operation.

<h3 id="deletedataset-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|q|query|[get_delete_ids_schema](#schemaget_delete_ids_schema)|false|none|

> Example responses

> 200 Response

```json
{
  "message": "string"
}
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

> 403 Response

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

> 422 Response

```json
{
  "message": "string"
}
```

> 500 Response

```json
{
  "message": "string"
}
```

<h3 id="deletedataset-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Dataset bulk delete|Inline|
|400|Bad Request|Bad request|Inline|
|401|Unauthorized|Unauthorized|Inline|
|403|Forbidden|Forbidden|Inline|
|404|Not Found|Not found|Inline|
|422|Unprocessable Entity|Could not process entity|Inline|
|500|Internal Server Error|Fatal error|Inline|

<h3 id="deletedataset-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **422**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwt
</aside>

## get/dataset/_info

> Code samples

```bash
curl https://example.com/dataset/_info \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /dataset/_info`

Get metadata information about this API resource

<h3 id="getdatasetinfo-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|q|query|[get_info_schema](#schemaget_info_schema)|false|none|

> Example responses

> 200 Response

```json
{
  "add_columns": {},
  "edit_columns": {},
  "filters": {
    "column_name": [
      {
        "name": "string",
        "operator": "string"
      }
    ]
  },
  "permissions": [
    "string"
  ]
}
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

> 422 Response

```json
{
  "message": "string"
}
```

> 500 Response

```json
{
  "message": "string"
}
```

<h3 id="getdatasetinfo-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Item from Model|Inline|
|400|Bad Request|Bad request|Inline|
|401|Unauthorized|Unauthorized|Inline|
|422|Unprocessable Entity|Could not process entity|Inline|
|500|Internal Server Error|Fatal error|Inline|

<h3 id="getdatasetinfo-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|add_columns|object|false|none|none|
|edit_columns|object|false|none|none|
|filters|object|false|none|none|
|» column_name|[object]|false|none|none|
|» » name|string|false|none|The filter name. Will be translated by babel|
|» » operator|string|false|none|The filter operation key to use on list filters|
|permissions|[string]|false|none|The user permissions for this API resource|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **422**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwt
</aside>

## get/dataset/distinct/{column_name}

> Code samples

```bash
curl https://example.com/dataset/distinct/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /dataset/distinct/{column_name}`

<h3 id="getdatasetdistinctcolumnname-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|column_name|path|string|true|none|
|q|query|[get_related_schema](#schemaget_related_schema)|false|none|

> Example responses

> 200 Response

```json
{
  "count": 0,
  "result": [
    {
      "text": "string"
    }
  ]
}
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

> 500 Response

```json
{
  "message": "string"
}
```

<h3 id="getdatasetdistinctcolumnname-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Distinct field data|[DistincResponseSchema](#schemadistincresponseschema)|
|400|Bad Request|Bad request|Inline|
|401|Unauthorized|Unauthorized|Inline|
|404|Not Found|Not found|Inline|
|500|Internal Server Error|Fatal error|Inline|

<h3 id="getdatasetdistinctcolumnname-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwt
</aside>

## get/dataset/export/

> Code samples

```bash
curl https://example.com/dataset/export/ \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /dataset/export/`

Exports multiple datasets and downloads them as YAML files

<h3 id="getdatasetexport-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|q|query|[get_export_ids_schema](#schemaget_export_ids_schema)|false|none|

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

> 500 Response

```json
{
  "message": "string"
}
```

<h3 id="getdatasetexport-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Dataset export|Inline|
|400|Bad Request|Bad request|Inline|
|401|Unauthorized|Unauthorized|Inline|
|404|Not Found|Not found|Inline|
|500|Internal Server Error|Fatal error|Inline|

<h3 id="getdatasetexport-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwt
</aside>

## post/dataset/import/

> Code samples

```bash
curl https://example.com/dataset/import/ \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -F 'formData=@/path/to/file' \
  -F 'overwrite=true' \
  -F 'passwords=string'
```

`POST /dataset/import/`

> Body parameter

```yaml
formData: string
overwrite: true
passwords: string
```

<h3 id="postdatasetimport-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» formData|body|string(binary)|false|upload file (ZIP or YAML)|
|» overwrite|body|boolean|false|overwrite existing datasets?|
|» passwords|body|string|false|JSON map of passwords for each file|

> Example responses

> 200 Response

```json
{
  "message": "string"
}
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

> 422 Response

```json
{
  "message": "string"
}
```

> 500 Response

```json
{
  "message": "string"
}
```

<h3 id="postdatasetimport-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Dataset import result|Inline|
|400|Bad Request|Bad request|Inline|
|401|Unauthorized|Unauthorized|Inline|
|422|Unprocessable Entity|Could not process entity|Inline|
|500|Internal Server Error|Fatal error|Inline|

<h3 id="postdatasetimport-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **422**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwt
</aside>

## get/dataset/related/{column_name}

> Code samples

```bash
curl https://example.com/dataset/related/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /dataset/related/{column_name}`

<h3 id="getdatasetrelatedcolumnname-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|column_name|path|string|true|none|
|q|query|[get_related_schema](#schemaget_related_schema)|false|none|

> Example responses

> 200 Response

```json
{
  "count": 0,
  "result": [
    {
      "text": "string",
      "value": 0
    }
  ]
}
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

> 500 Response

```json
{
  "message": "string"
}
```

<h3 id="getdatasetrelatedcolumnname-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Related column data|[RelatedResponseSchema](#schemarelatedresponseschema)|
|400|Bad Request|Bad request|Inline|
|401|Unauthorized|Unauthorized|Inline|
|404|Not Found|Not found|Inline|
|500|Internal Server Error|Fatal error|Inline|

<h3 id="getdatasetrelatedcolumnname-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwt
</aside>

## get/dataset/{pk}

> Code samples

```bash
curl https://example.com/dataset/0 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /dataset/{pk}`

Get an item model

<h3 id="getdatasetpk-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|pk|path|integer|true|none|
|q|query|[get_item_schema](#schemaget_item_schema)|false|none|

> Example responses

> 200 Response

```json
{
  "description_columns": {
    "column_name": "A Nice description for the column"
  },
  "id": "string",
  "label_columns": {
    "column_name": "A Nice label for the column"
  },
  "result": {
    "cache_timeout": 0,
    "columns": {
      "changed_on": "1970-01-01T00:00:00Z",
      "column_name": "string",
      "created_on": "1970-01-01T00:00:00Z",
      "description": "string",
      "expression": "string",
      "filterable": true,
      "groupby": true,
      "id": 0,
      "is_active": true,
      "is_dttm": true,
      "python_date_format": "string",
      "type": "string",
      "type_generic": null,
      "uuid": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "verbose_name": "string"
    },
    "database": {
      "database_name": "string",
      "id": 0
    },
    "datasource_type": null,
    "default_endpoint": "string",
    "description": "string",
    "extra": "string",
    "fetch_values_predicate": "string",
    "filter_select_enabled": true,
    "id": 0,
    "is_sqllab_view": true,
    "main_dttm_col": "string",
    "metrics": {
      "changed_on": "1970-01-01T00:00:00Z",
      "created_on": "1970-01-01T00:00:00Z",
      "d3format": "string",
      "description": "string",
      "expression": "string",
      "extra": "string",
      "id": 0,
      "metric_name": "string",
      "metric_type": "string",
      "uuid": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "verbose_name": "string",
      "warning_text": "string"
    },
    "offset": 0,
    "owners": {
      "first_name": "string",
      "id": 0,
      "last_name": "string",
      "username": "string"
    },
    "schema": "string",
    "sql": "string",
    "table_name": "string",
    "template_params": "string",
    "url": null
  },
  "show_columns": [
    "string"
  ],
  "show_title": "Show Item Details"
}
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

> 422 Response

```json
{
  "message": "string"
}
```

> 500 Response

```json
{
  "message": "string"
}
```

<h3 id="getdatasetpk-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Item from Model|Inline|
|400|Bad Request|Bad request|Inline|
|401|Unauthorized|Unauthorized|Inline|
|404|Not Found|Not found|Inline|
|422|Unprocessable Entity|Could not process entity|Inline|
|500|Internal Server Error|Fatal error|Inline|

<h3 id="getdatasetpk-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description_columns|object|false|none|none|
|» column_name|string|false|none|The description for the column name. Will be translated by babel|
|id|string|false|none|The item id|
|label_columns|object|false|none|none|
|» column_name|string|false|none|The label for the column name. Will be translated by babel|
|result|[DatasetRestApi.get](#schemadatasetrestapi.get)|false|none|none|
|show_columns|[string]|false|none|A list of columns|
|show_title|string|false|none|A title to render. Will be translated by babel|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **422**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwt
</aside>

## put/dataset/{pk}

> Code samples

```bash
curl https://example.com/dataset/0 \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "cache_timeout": 0,
    "columns": [
      {
        "column_name": "string",
        "description": "string",
        "expression": "string",
        "filterable": true,
        "groupby": true,
        "id": 0,
        "is_active": true,
        "is_dttm": true,
        "python_date_format": "string",
        "type": "string",
        "uuid": "string",
        "verbose_name": "string"
      }
    ],
    "database_id": 0,
    "default_endpoint": "string",
    "description": "string",
    "extra": "string",
    "fetch_values_predicate": "string",
    "filter_select_enabled": true,
    "is_sqllab_view": true,
    "main_dttm_col": "string",
    "metrics": [
      {
        "d3format": "string",
        "description": "string",
        "expression": "string",
        "id": 0,
        "metric_name": "string",
        "metric_type": "string",
        "warning_text": "string"
      }
    ],
    "offset": 0,
    "owners": [
      0
    ],
    "schema": "string",
    "sql": "string",
    "table_name": "string",
    "template_params": "string"
  }'
```

`PUT /dataset/{pk}`

Changes a Dataset

> Body parameter

```json
{
  "cache_timeout": 0,
  "columns": [
    {
      "column_name": "string",
      "description": "string",
      "expression": "string",
      "filterable": true,
      "groupby": true,
      "id": 0,
      "is_active": true,
      "is_dttm": true,
      "python_date_format": "string",
      "type": "string",
      "uuid": "string",
      "verbose_name": "string"
    }
  ],
  "database_id": 0,
  "default_endpoint": "string",
  "description": "string",
  "extra": "string",
  "fetch_values_predicate": "string",
  "filter_select_enabled": true,
  "is_sqllab_view": true,
  "main_dttm_col": "string",
  "metrics": [
    {
      "d3format": "string",
      "description": "string",
      "expression": "string",
      "id": 0,
      "metric_name": "string",
      "metric_type": "string",
      "warning_text": "string"
    }
  ],
  "offset": 0,
  "owners": [
    0
  ],
  "schema": "string",
  "sql": "string",
  "table_name": "string",
  "template_params": "string"
}
```

<h3 id="putdatasetpk-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|pk|path|integer|true|none|
|override_columns|query|boolean|false|none|
|body|body|[DatasetRestApi.put](#schemadatasetrestapi.put)|true|Dataset schema|
|» cache_timeout|body|integer(int32) \| null|false|none|
|» columns|body|[[DatasetColumnsPut](#schemadatasetcolumnsput)]|false|none|
|» database_id|body|integer(int32)|false|none|
|» default_endpoint|body|string \| null|false|none|
|» description|body|string \| null|false|none|
|» extra|body|string \| null|false|none|
|» fetch_values_predicate|body|string \| null|false|none|
|» filter_select_enabled|body|boolean \| null|false|none|
|» is_sqllab_view|body|boolean \| null|false|none|
|» main_dttm_col|body|string \| null|false|none|
|» metrics|body|[[DatasetMetricsPut](#schemadatasetmetricsput)]|false|none|
|» offset|body|integer(int32) \| null|false|none|
|» owners|body|[integer(int32)]|false|none|
|» schema|body|string \| null|false|none|
|» sql|body|string \| null|false|none|
|» table_name|body|string \| null|false|none|
|» template_params|body|string \| null|false|none|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "result": {
    "cache_timeout": 0,
    "columns": [
      {
        "column_name": "string",
        "description": "string",
        "expression": "string",
        "filterable": true,
        "groupby": true,
        "id": 0,
        "is_active": true,
        "is_dttm": true,
        "python_date_format": "string",
        "type": "string",
        "uuid": "string",
        "verbose_name": "string"
      }
    ],
    "database_id": 0,
    "default_endpoint": "string",
    "description": "string",
    "extra": "string",
    "fetch_values_predicate": "string",
    "filter_select_enabled": true,
    "is_sqllab_view": true,
    "main_dttm_col": "string",
    "metrics": [
      {
        "d3format": "string",
        "description": "string",
        "expression": "string",
        "id": 0,
        "metric_name": "string",
        "metric_type": "string",
        "warning_text": "string"
      }
    ],
    "offset": 0,
    "owners": [
      0
    ],
    "schema": "string",
    "sql": "string",
    "table_name": "string",
    "template_params": "string"
  }
}
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

> 403 Response

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

> 422 Response

```json
{
  "message": "string"
}
```

> 500 Response

```json
{
  "message": "string"
}
```

<h3 id="putdatasetpk-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Dataset changed|Inline|
|400|Bad Request|Bad request|Inline|
|401|Unauthorized|Unauthorized|Inline|
|403|Forbidden|Forbidden|Inline|
|404|Not Found|Not found|Inline|
|422|Unprocessable Entity|Could not process entity|Inline|
|500|Internal Server Error|Fatal error|Inline|

<h3 id="putdatasetpk-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|number|false|none|none|
|result|[DatasetRestApi.put](#schemadatasetrestapi.put)|false|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **422**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwt
</aside>

## delete/dataset/{pk}

> Code samples

```bash
curl https://example.com/dataset/0 \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /dataset/{pk}`

Deletes a Dataset

<h3 id="deletedatasetpk-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|pk|path|integer|true|none|

> Example responses

> 200 Response

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

> 403 Response

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

> 422 Response

```json
{
  "message": "string"
}
```

> 500 Response

```json
{
  "message": "string"
}
```

<h3 id="deletedatasetpk-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Dataset delete|Inline|
|401|Unauthorized|Unauthorized|Inline|
|403|Forbidden|Forbidden|Inline|
|404|Not Found|Not found|Inline|
|422|Unprocessable Entity|Could not process entity|Inline|
|500|Internal Server Error|Fatal error|Inline|

<h3 id="deletedatasetpk-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **422**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwt
</aside>

## delete/dataset/{pk}/column/{column_id}

> Code samples

```bash
curl https://example.com/dataset/0/column/0 \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /dataset/{pk}/column/{column_id}`

Delete a Dataset column

<h3 id="deletedatasetpkcolumncolumnid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|pk|path|integer|true|The dataset pk for this column|
|column_id|path|integer|true|The column id for this dataset|

> Example responses

> 200 Response

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

> 403 Response

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

> 422 Response

```json
{
  "message": "string"
}
```

> 500 Response

```json
{
  "message": "string"
}
```

<h3 id="deletedatasetpkcolumncolumnid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Column deleted|Inline|
|401|Unauthorized|Unauthorized|Inline|
|403|Forbidden|Forbidden|Inline|
|404|Not Found|Not found|Inline|
|422|Unprocessable Entity|Could not process entity|Inline|
|500|Internal Server Error|Fatal error|Inline|

<h3 id="deletedatasetpkcolumncolumnid-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **422**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwt
</aside>

## delete/dataset/{pk}/metric/{metric_id}

> Code samples

```bash
curl https://example.com/dataset/0/metric/0 \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /dataset/{pk}/metric/{metric_id}`

Delete a Dataset metric

<h3 id="deletedatasetpkmetricmetricid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|pk|path|integer|true|The dataset pk for this column|
|metric_id|path|integer|true|The metric id for this dataset|

> Example responses

> 200 Response

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

> 403 Response

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

> 422 Response

```json
{
  "message": "string"
}
```

> 500 Response

```json
{
  "message": "string"
}
```

<h3 id="deletedatasetpkmetricmetricid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Metric deleted|Inline|
|401|Unauthorized|Unauthorized|Inline|
|403|Forbidden|Forbidden|Inline|
|404|Not Found|Not found|Inline|
|422|Unprocessable Entity|Could not process entity|Inline|
|500|Internal Server Error|Fatal error|Inline|

<h3 id="deletedatasetpkmetricmetricid-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **422**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwt
</aside>

## put/dataset/{pk}/refresh

> Code samples

```bash
curl https://example.com/dataset/0/refresh \
  -X PUT \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`PUT /dataset/{pk}/refresh`

Refreshes and updates columns of a dataset

<h3 id="putdatasetpkrefresh-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|pk|path|integer|true|none|

> Example responses

> 200 Response

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

> 403 Response

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

> 422 Response

```json
{
  "message": "string"
}
```

> 500 Response

```json
{
  "message": "string"
}
```

<h3 id="putdatasetpkrefresh-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Dataset delete|Inline|
|401|Unauthorized|Unauthorized|Inline|
|403|Forbidden|Forbidden|Inline|
|404|Not Found|Not found|Inline|
|422|Unprocessable Entity|Could not process entity|Inline|
|500|Internal Server Error|Fatal error|Inline|

<h3 id="putdatasetpkrefresh-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **422**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwt
</aside>

## get/dataset/{pk}/related_objects

> Code samples

```bash
curl https://example.com/dataset/0/related_objects \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /dataset/{pk}/related_objects`

Get charts and dashboards count associated to a dataset

<h3 id="getdatasetpkrelatedobjects-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|pk|path|integer|true|none|

> Example responses

> 200 Response

```json
{
  "charts": {
    "count": 0,
    "result": [
      {
        "id": 0,
        "slice_name": "string",
        "viz_type": "string"
      }
    ]
  },
  "dashboards": {
    "count": 0,
    "result": [
      {
        "id": 0,
        "json_metadata": {},
        "slug": "string",
        "title": "string"
      }
    ]
  }
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

> 500 Response

```json
{
  "message": "string"
}
```

<h3 id="getdatasetpkrelatedobjects-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Query result|[DatasetRelatedObjectsResponse](#schemadatasetrelatedobjectsresponse)|
|401|Unauthorized|Unauthorized|Inline|
|404|Not Found|Not found|Inline|
|500|Internal Server Error|Fatal error|Inline|

<h3 id="getdatasetpkrelatedobjects-responseschema">Response Schema</h3>

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwt
</aside>

<h1 id="superset-logrestapi">LogRestApi</h1>

## get/log/

> Code samples

```bash
curl https://example.com/log/ \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /log/`

Get a list of models

<h3 id="getlog-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|q|query|[get_list_schema](#schemaget_list_schema)|false|none|

> Example responses

> 200 Response

```json
{
  "count": 0,
  "description_columns": {
    "column_name": "A Nice description for the column"
  },
  "ids": [
    "string"
  ],
  "label_columns": {
    "column_name": "A Nice label for the column"
  },
  "list_columns": [
    "string"
  ],
  "list_title": "List Items",
  "order_columns": [
    "string"
  ],
  "result": [
    {
      "action": "string",
      "dashboard_id": 0,
      "dttm": "1970-01-01T00:00:00Z",
      "duration_ms": 0,
      "json": "string",
      "referrer": "string",
      "slice_id": 0,
      "user": {
        "username": "string"
      },
      "user_id": 0
    }
  ]
}
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

> 422 Response

```json
{
  "message": "string"
}
```

> 500 Response

```json
{
  "message": "string"
}
```

<h3 id="getlog-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Items from Model|Inline|
|400|Bad Request|Bad request|Inline|
|401|Unauthorized|Unauthorized|Inline|
|422|Unprocessable Entity|Could not process entity|Inline|
|500|Internal Server Error|Fatal error|Inline|

<h3 id="getlog-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|number|false|none|The total record count on the backend|
|description_columns|object|false|none|none|
|» column_name|string|false|none|The description for the column name. Will be translated by babel|
|ids|[string]|false|none|A list of item ids, useful when you don't know the column id|
|label_columns|object|false|none|none|
|» column_name|string|false|none|The label for the column name. Will be translated by babel|
|list_columns|[string]|false|none|A list of columns|
|list_title|string|false|none|A title to render. Will be translated by babel|
|order_columns|[string]|false|none|A list of allowed columns to sort|
|result|[[LogRestApi.get_list](#schemalogrestapi.get_list)]|false|none|The result from the get list query|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **422**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwt
</aside>

## post/log/

> Code samples

```bash
curl https://example.com/log/ \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "id": 0
  }'
```

`POST /log/`

> Body parameter

```json
{
  "id": 0
}
```

<h3 id="postlog-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[LogRestApi.post](#schemalogrestapi.post)|true|Model schema|
|» id|body|integer(int32)|false|none|

> Example responses

> 201 Response

```json
{
  "id": "string",
  "result": {
    "id": 0
  }
}
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

> 422 Response

```json
{
  "message": "string"
}
```

> 500 Response

```json
{
  "message": "string"
}
```

<h3 id="postlog-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Item inserted|Inline|
|400|Bad Request|Bad request|Inline|
|401|Unauthorized|Unauthorized|Inline|
|422|Unprocessable Entity|Could not process entity|Inline|
|500|Internal Server Error|Fatal error|Inline|

<h3 id="postlog-responseschema">Response Schema</h3>

Status Code **201**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|none|
|result|[LogRestApi.post](#schemalogrestapi.post)|false|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **422**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwt
</aside>

## get/log/{pk}

> Code samples

```bash
curl https://example.com/log/0 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /log/{pk}`

Get an item model

<h3 id="getlogpk-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|pk|path|integer|true|none|
|q|query|[get_item_schema](#schemaget_item_schema)|false|none|

> Example responses

> 200 Response

```json
{
  "description_columns": {
    "column_name": "A Nice description for the column"
  },
  "id": "string",
  "label_columns": {
    "column_name": "A Nice label for the column"
  },
  "result": {
    "action": "string",
    "dashboard_id": 0,
    "dttm": "1970-01-01T00:00:00Z",
    "duration_ms": 0,
    "json": "string",
    "referrer": "string",
    "slice_id": 0,
    "user": {
      "username": "string"
    },
    "user_id": 0
  },
  "show_columns": [
    "string"
  ],
  "show_title": "Show Item Details"
}
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

> 422 Response

```json
{
  "message": "string"
}
```

> 500 Response

```json
{
  "message": "string"
}
```

<h3 id="getlogpk-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Item from Model|Inline|
|400|Bad Request|Bad request|Inline|
|401|Unauthorized|Unauthorized|Inline|
|404|Not Found|Not found|Inline|
|422|Unprocessable Entity|Could not process entity|Inline|
|500|Internal Server Error|Fatal error|Inline|

<h3 id="getlogpk-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description_columns|object|false|none|none|
|» column_name|string|false|none|The description for the column name. Will be translated by babel|
|id|string|false|none|The item id|
|label_columns|object|false|none|none|
|» column_name|string|false|none|The label for the column name. Will be translated by babel|
|result|[LogRestApi.get](#schemalogrestapi.get)|false|none|none|
|show_columns|[string]|false|none|A list of columns|
|show_title|string|false|none|A title to render. Will be translated by babel|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **422**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwt
</aside>

<h1 id="superset-menu">Menu</h1>

## get/menu/

> Code samples

```bash
curl https://example.com/menu/ \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /menu/`

Get the menu data structure. Returns a forest like structure with the menu the user has access to

> Example responses

> 200 Response

```json
{
  "result": [
    {
      "childs": [
        {}
      ],
      "icon": "string",
      "label": "string",
      "name": "string",
      "url": "string"
    }
  ]
}
```

> 401 Response

```json
{
  "message": "string"
}
```

<h3 id="getmenu-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Get menu data|Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="getmenu-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|result|[object]|false|none|Menu items in a forest like data structure|
|» childs|[object]|false|none|none|
|» icon|string|false|none|Icon name to show for this menu item|
|» label|string|false|none|Pretty name for the menu item|
|» name|string|false|none|The internal menu item name, maps to permission_name|
|» url|string|false|none|The URL for the menu item|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwt
</aside>

<h1 id="superset-openapi">OpenApi</h1>

## get/openapi/{version}/_openapi

> Code samples

```bash
curl https://example.com/openapi/string/_openapi \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /openapi/{version}/_openapi`

Get the OpenAPI spec for a specific API version

<h3 id="getopenapiversionopenapi-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|version|path|string|true|none|

> Example responses

> 200 Response

```json
{}
```

> 404 Response

```json
{
  "message": "string"
}
```

> 500 Response

```json
{
  "message": "string"
}
```

<h3 id="getopenapiversionopenapi-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The OpenAPI spec|Inline|
|404|Not Found|Not found|Inline|
|500|Internal Server Error|Fatal error|Inline|

<h3 id="getopenapiversionopenapi-responseschema">Response Schema</h3>

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwt
</aside>

<h1 id="superset-queries">Queries</h1>

## get/query/

> Code samples

```bash
curl https://example.com/query/ \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /query/`

Get a list of queries, use Rison or JSON query parameters for filtering, sorting, pagination and  for selecting specific columns and metadata.

<h3 id="getquery-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|q|query|[get_list_schema](#schemaget_list_schema)|false|none|

> Example responses

> 200 Response

```json
{
  "count": 0,
  "description_columns": {
    "column_name": "A Nice description for the column"
  },
  "ids": [
    "string"
  ],
  "label_columns": {
    "column_name": "A Nice label for the column"
  },
  "list_columns": [
    "string"
  ],
  "list_title": "List Items",
  "order_columns": [
    "string"
  ],
  "result": [
    {
      "changed_on": "1970-01-01T00:00:00Z",
      "database": {
        "database_name": "string"
      },
      "end_time": 0,
      "executed_sql": "string",
      "id": 0,
      "rows": 0,
      "schema": "string",
      "sql": "string",
      "sql_tables": null,
      "start_time": 0,
      "status": "string",
      "tab_name": "string",
      "tmp_table_name": "string",
      "tracking_url": "string",
      "user": {
        "first_name": "string",
        "id": 0,
        "last_name": "string",
        "username": "string"
      }
    }
  ]
}
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

> 422 Response

```json
{
  "message": "string"
}
```

> 500 Response

```json
{
  "message": "string"
}
```

<h3 id="getquery-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Items from Model|Inline|
|400|Bad Request|Bad request|Inline|
|401|Unauthorized|Unauthorized|Inline|
|422|Unprocessable Entity|Could not process entity|Inline|
|500|Internal Server Error|Fatal error|Inline|

<h3 id="getquery-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|number|false|none|The total record count on the backend|
|description_columns|object|false|none|none|
|» column_name|string|false|none|The description for the column name. Will be translated by babel|
|ids|[string]|false|none|A list of item ids, useful when you don't know the column id|
|label_columns|object|false|none|none|
|» column_name|string|false|none|The label for the column name. Will be translated by babel|
|list_columns|[string]|false|none|A list of columns|
|list_title|string|false|none|A title to render. Will be translated by babel|
|order_columns|[string]|false|none|A list of allowed columns to sort|
|result|[[QueryRestApi.get_list](#schemaqueryrestapi.get_list)]|false|none|The result from the get list query|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **422**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwt
</aside>

## get/query/distinct/{column_name}

> Code samples

```bash
curl https://example.com/query/distinct/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /query/distinct/{column_name}`

<h3 id="getquerydistinctcolumnname-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|column_name|path|string|true|none|
|q|query|[get_related_schema](#schemaget_related_schema)|false|none|

> Example responses

> 200 Response

```json
{
  "count": 0,
  "result": [
    {
      "text": "string"
    }
  ]
}
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

> 500 Response

```json
{
  "message": "string"
}
```

<h3 id="getquerydistinctcolumnname-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Distinct field data|[DistincResponseSchema](#schemadistincresponseschema)|
|400|Bad Request|Bad request|Inline|
|401|Unauthorized|Unauthorized|Inline|
|404|Not Found|Not found|Inline|
|500|Internal Server Error|Fatal error|Inline|

<h3 id="getquerydistinctcolumnname-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwt
</aside>

## get/query/related/{column_name}

> Code samples

```bash
curl https://example.com/query/related/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /query/related/{column_name}`

<h3 id="getqueryrelatedcolumnname-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|column_name|path|string|true|none|
|q|query|[get_related_schema](#schemaget_related_schema)|false|none|

> Example responses

> 200 Response

```json
{
  "count": 0,
  "result": [
    {
      "text": "string",
      "value": 0
    }
  ]
}
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

> 500 Response

```json
{
  "message": "string"
}
```

<h3 id="getqueryrelatedcolumnname-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Related column data|[RelatedResponseSchema](#schemarelatedresponseschema)|
|400|Bad Request|Bad request|Inline|
|401|Unauthorized|Unauthorized|Inline|
|404|Not Found|Not found|Inline|
|500|Internal Server Error|Fatal error|Inline|

<h3 id="getqueryrelatedcolumnname-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwt
</aside>

## get/query/{pk}

> Code samples

```bash
curl https://example.com/query/0 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /query/{pk}`

Get query detail information.

<h3 id="getquerypk-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|pk|path|integer|true|none|
|q|query|[get_item_schema](#schemaget_item_schema)|false|none|

> Example responses

> 200 Response

```json
{
  "description_columns": {
    "column_name": "A Nice description for the column"
  },
  "id": "string",
  "label_columns": {
    "column_name": "A Nice label for the column"
  },
  "result": {
    "changed_on": "1970-01-01T00:00:00Z",
    "client_id": "string",
    "database": {
      "id": 0
    },
    "end_result_backend_time": 0,
    "end_time": 0,
    "error_message": "string",
    "executed_sql": "string",
    "id": 0,
    "limit": 0,
    "progress": 0,
    "results_key": "string",
    "rows": 0,
    "schema": "string",
    "select_as_cta": true,
    "select_as_cta_used": true,
    "select_sql": "string",
    "sql": "string",
    "sql_editor_id": "string",
    "start_running_time": 0,
    "start_time": 0,
    "status": "string",
    "tab_name": "string",
    "tmp_schema_name": "string",
    "tmp_table_name": "string",
    "tracking_url": "string"
  },
  "show_columns": [
    "string"
  ],
  "show_title": "Show Item Details"
}
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

> 422 Response

```json
{
  "message": "string"
}
```

> 500 Response

```json
{
  "message": "string"
}
```

<h3 id="getquerypk-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Item from Model|Inline|
|400|Bad Request|Bad request|Inline|
|401|Unauthorized|Unauthorized|Inline|
|404|Not Found|Not found|Inline|
|422|Unprocessable Entity|Could not process entity|Inline|
|500|Internal Server Error|Fatal error|Inline|

<h3 id="getquerypk-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description_columns|object|false|none|none|
|» column_name|string|false|none|The description for the column name. Will be translated by babel|
|id|string|false|none|The item id|
|label_columns|object|false|none|none|
|» column_name|string|false|none|The label for the column name. Will be translated by babel|
|result|[QueryRestApi.get](#schemaqueryrestapi.get)|false|none|none|
|show_columns|[string]|false|none|A list of columns|
|show_title|string|false|none|A title to render. Will be translated by babel|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **422**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwt
</aside>

## get/saved_query/

> Code samples

```bash
curl https://example.com/saved_query/ \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /saved_query/`

Get a list of saved queries, use Rison or JSON query parameters for filtering, sorting, pagination and for selecting specific columns and metadata.

<h3 id="getsavedquery-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|q|query|[get_list_schema](#schemaget_list_schema)|false|none|

> Example responses

> 200 Response

```json
{
  "count": 0,
  "description_columns": {
    "column_name": "A Nice description for the column"
  },
  "ids": [
    "string"
  ],
  "label_columns": {
    "column_name": "A Nice label for the column"
  },
  "list_columns": [
    "string"
  ],
  "list_title": "List Items",
  "order_columns": [
    "string"
  ],
  "result": [
    {
      "changed_on_delta_humanized": null,
      "created_by": {
        "first_name": "string",
        "id": 0,
        "last_name": "string"
      },
      "created_on": "1970-01-01T00:00:00Z",
      "database": {
        "database_name": "string",
        "id": 0
      },
      "db_id": 0,
      "description": "string",
      "extra": null,
      "id": 0,
      "label": "string",
      "last_run_delta_humanized": null,
      "rows": 0,
      "schema": "string",
      "sql": "string",
      "sql_tables": null
    }
  ]
}
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

> 422 Response

```json
{
  "message": "string"
}
```

> 500 Response

```json
{
  "message": "string"
}
```

<h3 id="getsavedquery-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Items from Model|Inline|
|400|Bad Request|Bad request|Inline|
|401|Unauthorized|Unauthorized|Inline|
|422|Unprocessable Entity|Could not process entity|Inline|
|500|Internal Server Error|Fatal error|Inline|

<h3 id="getsavedquery-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|number|false|none|The total record count on the backend|
|description_columns|object|false|none|none|
|» column_name|string|false|none|The description for the column name. Will be translated by babel|
|ids|[string]|false|none|A list of item ids, useful when you don't know the column id|
|label_columns|object|false|none|none|
|» column_name|string|false|none|The label for the column name. Will be translated by babel|
|list_columns|[string]|false|none|A list of columns|
|list_title|string|false|none|A title to render. Will be translated by babel|
|order_columns|[string]|false|none|A list of allowed columns to sort|
|result|[[SavedQueryRestApi.get_list](#schemasavedqueryrestapi.get_list)]|false|none|The result from the get list query|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **422**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwt
</aside>

## post/saved_query/

> Code samples

```bash
curl https://example.com/saved_query/ \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "db_id": 0,
    "description": "string",
    "label": "string",
    "schema": "string",
    "sql": "string"
  }'
```

`POST /saved_query/`

Create a saved query

> Body parameter

```json
{
  "db_id": 0,
  "description": "string",
  "label": "string",
  "schema": "string",
  "sql": "string"
}
```

<h3 id="postsavedquery-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[SavedQueryRestApi.post](#schemasavedqueryrestapi.post)|true|Model schema|
|» db_id|body|integer(int32) \| null|false|none|
|» description|body|string \| null|false|none|
|» label|body|string \| null|false|none|
|» schema|body|string \| null|false|none|
|» sql|body|string \| null|false|none|

> Example responses

> 201 Response

```json
{
  "id": "string",
  "result": {
    "db_id": 0,
    "description": "string",
    "label": "string",
    "schema": "string",
    "sql": "string"
  }
}
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

> 422 Response

```json
{
  "message": "string"
}
```

> 500 Response

```json
{
  "message": "string"
}
```

<h3 id="postsavedquery-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Item inserted|Inline|
|400|Bad Request|Bad request|Inline|
|401|Unauthorized|Unauthorized|Inline|
|422|Unprocessable Entity|Could not process entity|Inline|
|500|Internal Server Error|Fatal error|Inline|

<h3 id="postsavedquery-responseschema">Response Schema</h3>

Status Code **201**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|none|
|result|[SavedQueryRestApi.post](#schemasavedqueryrestapi.post)|false|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **422**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwt
</aside>

## delete/saved_query/

> Code samples

```bash
curl https://example.com/saved_query/ \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /saved_query/`

Deletes multiple saved queries in a bulk operation.

<h3 id="deletesavedquery-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|q|query|[get_delete_ids_schema](#schemaget_delete_ids_schema)|false|none|

> Example responses

> 200 Response

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

> 422 Response

```json
{
  "message": "string"
}
```

> 500 Response

```json
{
  "message": "string"
}
```

<h3 id="deletesavedquery-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Saved queries bulk delete|Inline|
|401|Unauthorized|Unauthorized|Inline|
|404|Not Found|Not found|Inline|
|422|Unprocessable Entity|Could not process entity|Inline|
|500|Internal Server Error|Fatal error|Inline|

<h3 id="deletesavedquery-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **422**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwt
</aside>

## get/saved_query/_info

> Code samples

```bash
curl https://example.com/saved_query/_info \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /saved_query/_info`

Get metadata information about this API resource

<h3 id="getsavedqueryinfo-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|q|query|[get_info_schema](#schemaget_info_schema)|false|none|

> Example responses

> 200 Response

```json
{
  "add_columns": {},
  "edit_columns": {},
  "filters": {
    "column_name": [
      {
        "name": "string",
        "operator": "string"
      }
    ]
  },
  "permissions": [
    "string"
  ]
}
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

> 422 Response

```json
{
  "message": "string"
}
```

> 500 Response

```json
{
  "message": "string"
}
```

<h3 id="getsavedqueryinfo-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Item from Model|Inline|
|400|Bad Request|Bad request|Inline|
|401|Unauthorized|Unauthorized|Inline|
|422|Unprocessable Entity|Could not process entity|Inline|
|500|Internal Server Error|Fatal error|Inline|

<h3 id="getsavedqueryinfo-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|add_columns|object|false|none|none|
|edit_columns|object|false|none|none|
|filters|object|false|none|none|
|» column_name|[object]|false|none|none|
|» » name|string|false|none|The filter name. Will be translated by babel|
|» » operator|string|false|none|The filter operation key to use on list filters|
|permissions|[string]|false|none|The user permissions for this API resource|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **422**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwt
</aside>

## get/saved_query/distinct/{column_name}

> Code samples

```bash
curl https://example.com/saved_query/distinct/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /saved_query/distinct/{column_name}`

<h3 id="getsavedquerydistinctcolumnname-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|column_name|path|string|true|none|
|q|query|[get_related_schema](#schemaget_related_schema)|false|none|

> Example responses

> 200 Response

```json
{
  "count": 0,
  "result": [
    {
      "text": "string"
    }
  ]
}
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

> 500 Response

```json
{
  "message": "string"
}
```

<h3 id="getsavedquerydistinctcolumnname-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Distinct field data|[DistincResponseSchema](#schemadistincresponseschema)|
|400|Bad Request|Bad request|Inline|
|401|Unauthorized|Unauthorized|Inline|
|404|Not Found|Not found|Inline|
|500|Internal Server Error|Fatal error|Inline|

<h3 id="getsavedquerydistinctcolumnname-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwt
</aside>

## get/saved_query/export/

> Code samples

```bash
curl https://example.com/saved_query/export/ \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /saved_query/export/`

Exports multiple saved queries and downloads them as YAML files

<h3 id="getsavedqueryexport-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|q|query|[get_export_ids_schema](#schemaget_export_ids_schema)|false|none|

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

> 500 Response

```json
{
  "message": "string"
}
```

<h3 id="getsavedqueryexport-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A zip file with saved query(ies) and database(s) as YAML|Inline|
|400|Bad Request|Bad request|Inline|
|401|Unauthorized|Unauthorized|Inline|
|404|Not Found|Not found|Inline|
|500|Internal Server Error|Fatal error|Inline|

<h3 id="getsavedqueryexport-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwt
</aside>

## post/saved_query/import/

> Code samples

```bash
curl https://example.com/saved_query/import/ \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -F 'formData=@/path/to/file' \
  -F 'overwrite=true' \
  -F 'passwords=string'
```

`POST /saved_query/import/`

> Body parameter

```yaml
formData: string
overwrite: true
passwords: string
```

<h3 id="postsavedqueryimport-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» formData|body|string(binary)|false|upload file (ZIP)|
|» overwrite|body|boolean|false|overwrite existing saved queries?|
|» passwords|body|string|false|JSON map of passwords for each file|

> Example responses

> 200 Response

```json
{
  "message": "string"
}
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

> 422 Response

```json
{
  "message": "string"
}
```

> 500 Response

```json
{
  "message": "string"
}
```

<h3 id="postsavedqueryimport-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Saved Query import result|Inline|
|400|Bad Request|Bad request|Inline|
|401|Unauthorized|Unauthorized|Inline|
|422|Unprocessable Entity|Could not process entity|Inline|
|500|Internal Server Error|Fatal error|Inline|

<h3 id="postsavedqueryimport-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **422**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwt
</aside>

## get/saved_query/related/{column_name}

> Code samples

```bash
curl https://example.com/saved_query/related/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /saved_query/related/{column_name}`

<h3 id="getsavedqueryrelatedcolumnname-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|column_name|path|string|true|none|
|q|query|[get_related_schema](#schemaget_related_schema)|false|none|

> Example responses

> 200 Response

```json
{
  "count": 0,
  "result": [
    {
      "text": "string",
      "value": 0
    }
  ]
}
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

> 500 Response

```json
{
  "message": "string"
}
```

<h3 id="getsavedqueryrelatedcolumnname-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Related column data|[RelatedResponseSchema](#schemarelatedresponseschema)|
|400|Bad Request|Bad request|Inline|
|401|Unauthorized|Unauthorized|Inline|
|404|Not Found|Not found|Inline|
|500|Internal Server Error|Fatal error|Inline|

<h3 id="getsavedqueryrelatedcolumnname-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwt
</aside>

## get/saved_query/{pk}

> Code samples

```bash
curl https://example.com/saved_query/0 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /saved_query/{pk}`

Get a saved query

<h3 id="getsavedquerypk-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|pk|path|integer|true|none|
|q|query|[get_item_schema](#schemaget_item_schema)|false|none|

> Example responses

> 200 Response

```json
{
  "description_columns": {
    "column_name": "A Nice description for the column"
  },
  "id": "string",
  "label_columns": {
    "column_name": "A Nice label for the column"
  },
  "result": {
    "created_by": {
      "first_name": "string",
      "id": 0,
      "last_name": "string"
    },
    "database": {
      "database_name": "string",
      "id": 0
    },
    "description": "string",
    "id": 0,
    "label": "string",
    "schema": "string",
    "sql": "string",
    "sql_tables": null
  },
  "show_columns": [
    "string"
  ],
  "show_title": "Show Item Details"
}
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

> 422 Response

```json
{
  "message": "string"
}
```

> 500 Response

```json
{
  "message": "string"
}
```

<h3 id="getsavedquerypk-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Item from Model|Inline|
|400|Bad Request|Bad request|Inline|
|401|Unauthorized|Unauthorized|Inline|
|404|Not Found|Not found|Inline|
|422|Unprocessable Entity|Could not process entity|Inline|
|500|Internal Server Error|Fatal error|Inline|

<h3 id="getsavedquerypk-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description_columns|object|false|none|none|
|» column_name|string|false|none|The description for the column name. Will be translated by babel|
|id|string|false|none|The item id|
|label_columns|object|false|none|none|
|» column_name|string|false|none|The label for the column name. Will be translated by babel|
|result|[SavedQueryRestApi.get](#schemasavedqueryrestapi.get)|false|none|none|
|show_columns|[string]|false|none|A list of columns|
|show_title|string|false|none|A title to render. Will be translated by babel|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **422**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwt
</aside>

## put/saved_query/{pk}

> Code samples

```bash
curl https://example.com/saved_query/0 \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "db_id": 0,
    "description": "string",
    "label": "string",
    "schema": "string",
    "sql": "string"
  }'
```

`PUT /saved_query/{pk}`

Update a saved query

> Body parameter

```json
{
  "db_id": 0,
  "description": "string",
  "label": "string",
  "schema": "string",
  "sql": "string"
}
```

<h3 id="putsavedquerypk-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|pk|path|integer|true|none|
|body|body|[SavedQueryRestApi.put](#schemasavedqueryrestapi.put)|true|Model schema|
|» db_id|body|integer(int32) \| null|false|none|
|» description|body|string \| null|false|none|
|» label|body|string \| null|false|none|
|» schema|body|string \| null|false|none|
|» sql|body|string \| null|false|none|

> Example responses

> 200 Response

```json
{
  "result": {
    "db_id": 0,
    "description": "string",
    "label": "string",
    "schema": "string",
    "sql": "string"
  }
}
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

> 422 Response

```json
{
  "message": "string"
}
```

> 500 Response

```json
{
  "message": "string"
}
```

<h3 id="putsavedquerypk-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Item changed|Inline|
|400|Bad Request|Bad request|Inline|
|401|Unauthorized|Unauthorized|Inline|
|404|Not Found|Not found|Inline|
|422|Unprocessable Entity|Could not process entity|Inline|
|500|Internal Server Error|Fatal error|Inline|

<h3 id="putsavedquerypk-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|result|[SavedQueryRestApi.put](#schemasavedqueryrestapi.put)|false|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **422**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwt
</aside>

## delete/saved_query/{pk}

> Code samples

```bash
curl https://example.com/saved_query/0 \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /saved_query/{pk}`

Delete saved query

<h3 id="deletesavedquerypk-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|pk|path|integer|true|none|

> Example responses

> 200 Response

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

> 422 Response

```json
{
  "message": "string"
}
```

> 500 Response

```json
{
  "message": "string"
}
```

<h3 id="deletesavedquerypk-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Item deleted|Inline|
|404|Not Found|Not found|Inline|
|422|Unprocessable Entity|Could not process entity|Inline|
|500|Internal Server Error|Fatal error|Inline|

<h3 id="deletesavedquerypk-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **422**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwt
</aside>

<h1 id="superset-report-schedules">Report Schedules</h1>

## get/report/

> Code samples

```bash
curl https://example.com/report/ \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /report/`

Get a list of report schedules, use Rison or JSON query parameters for filtering, sorting, pagination and for selecting specific columns and metadata.

<h3 id="getreport-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|q|query|[get_list_schema](#schemaget_list_schema)|false|none|

> Example responses

> 200 Response

```json
{
  "count": 0,
  "description_columns": {
    "column_name": "A Nice description for the column"
  },
  "ids": [
    "string"
  ],
  "label_columns": {
    "column_name": "A Nice label for the column"
  },
  "list_columns": [
    "string"
  ],
  "list_title": "List Items",
  "order_columns": [
    "string"
  ],
  "result": [
    {
      "active": true,
      "changed_by": {
        "first_name": "string",
        "last_name": "string"
      },
      "changed_on": "1970-01-01T00:00:00Z",
      "changed_on_delta_humanized": null,
      "created_by": {
        "first_name": "string",
        "last_name": "string"
      },
      "created_on": "1970-01-01T00:00:00Z",
      "creation_method": "string",
      "crontab": "string",
      "crontab_humanized": null,
      "description": "string",
      "id": 0,
      "last_eval_dttm": "1970-01-01T00:00:00Z",
      "last_state": "string",
      "name": "string",
      "owners": {
        "first_name": "string",
        "id": 0,
        "last_name": "string"
      },
      "recipients": {
        "id": 0,
        "type": "string"
      },
      "timezone": "string",
      "type": "string"
    }
  ]
}
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

> 422 Response

```json
{
  "message": "string"
}
```

> 500 Response

```json
{
  "message": "string"
}
```

<h3 id="getreport-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Items from Model|Inline|
|400|Bad Request|Bad request|Inline|
|401|Unauthorized|Unauthorized|Inline|
|422|Unprocessable Entity|Could not process entity|Inline|
|500|Internal Server Error|Fatal error|Inline|

<h3 id="getreport-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|number|false|none|The total record count on the backend|
|description_columns|object|false|none|none|
|» column_name|string|false|none|The description for the column name. Will be translated by babel|
|ids|[string]|false|none|A list of item ids, useful when you don't know the column id|
|label_columns|object|false|none|none|
|» column_name|string|false|none|The label for the column name. Will be translated by babel|
|list_columns|[string]|false|none|A list of columns|
|list_title|string|false|none|A title to render. Will be translated by babel|
|order_columns|[string]|false|none|A list of allowed columns to sort|
|result|[[ReportScheduleRestApi.get_list](#schemareportschedulerestapi.get_list)]|false|none|The result from the get list query|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **422**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwt
</aside>

## post/report/

> Code samples

```bash
curl https://example.com/report/ \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "active": true,
    "chart": 0,
    "context_markdown": "string",
    "creation_method": null,
    "crontab": "*/5 * * * *",
    "dashboard": 0,
    "database": 0,
    "description": "Daily sales dashboard to marketing",
    "grace_period": 14400,
    "log_retention": 90,
    "name": "Daily dashboard email",
    "owners": [
      0
    ],
    "recipients": [
      {
        "recipient_config_json": {
          "target": "string"
        },
        "type": "Email"
      }
    ],
    "report_format": "PNG",
    "sql": "SELECT value FROM time_series_table",
    "timezone": "string",
    "type": "Alert",
    "validator_config_json": {
      "op": "<",
      "threshold": 0
    },
    "validator_type": "not null",
    "working_timeout": 3600
  }'
```

`POST /report/`

Create a report schedule

> Body parameter

```json
{
  "active": true,
  "chart": 0,
  "context_markdown": "string",
  "creation_method": null,
  "crontab": "*/5 * * * *",
  "dashboard": 0,
  "database": 0,
  "description": "Daily sales dashboard to marketing",
  "grace_period": 14400,
  "log_retention": 90,
  "name": "Daily dashboard email",
  "owners": [
    0
  ],
  "recipients": [
    {
      "recipient_config_json": {
        "target": "string"
      },
      "type": "Email"
    }
  ],
  "report_format": "PNG",
  "sql": "SELECT value FROM time_series_table",
  "timezone": "string",
  "type": "Alert",
  "validator_config_json": {
    "op": "<",
    "threshold": 0
  },
  "validator_type": "not null",
  "working_timeout": 3600
}
```

<h3 id="postreport-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[ReportScheduleRestApi.post](#schemareportschedulerestapi.post)|true|Report Schedule schema|
|» active|body|boolean|false|none|
|» chart|body|integer(int32) \| null|false|none|
|» context_markdown|body|string \| null|false|Markdown description|
|» creation_method|body|object|false|Creation method is used to inform the frontend whether the report/alert was created in the dashboard, chart, or alerts and reports UI.|
|» crontab|body|string|true|A CRON expression.[Crontab Guru](https://crontab.guru/) is a helpful resource that can help you craft a CRON expression.|
|» dashboard|body|integer(int32) \| null|false|none|
|» database|body|integer(int32)|false|none|
|» description|body|string \| null|false|Use a nice description to give context to this Alert/Report|
|» grace_period|body|integer(int32)|false|Once an alert is triggered, how long, in seconds, before Superset nags you again. (in seconds)|
|» log_retention|body|integer(int32)|false|How long to keep the logs around for this report (in days)|
|» name|body|string|true|The report schedule name.|
|» owners|body|[integer(int32)]|false|none|
|» recipients|body|[[ReportRecipient](#schemareportrecipient)]|false|none|
|» report_format|body|string|false|none|
|» sql|body|string|false|A SQL statement that defines whether the alert should get triggered or not. The query is expected to return either NULL or a number value.|
|» timezone|body|string|false|A timezone string that represents the location of the timezone.|
|» type|body|string|true|The report schedule type|
|» validator_config_json|body|[ValidatorConfigJSON](#schemavalidatorconfigjson)|false|none|
|» validator_type|body|string|false|Determines when to trigger alert based off value from alert query. Alerts will be triggered with these validator types:<br>- Not Null - When the return value is Not NULL, Empty, or 0<br>- Operator - When `sql_return_value comparison_operator threshold` is True e.g. `50 <= 75`<br>Supports the comparison operators <, <=, >, >=, ==, and !=|
|» working_timeout|body|integer(int32)|false|If an alert is staled at a working state, how long until it's state is reseted to error|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» report_format|PNG|
|» report_format|CSV|
|» report_format|TEXT|
|» type|Alert|
|» type|Report|
|» validator_type|not null|
|» validator_type|operator|

> Example responses

> 201 Response

```json
{
  "id": 0,
  "result": {
    "active": true,
    "chart": 0,
    "context_markdown": "string",
    "creation_method": null,
    "crontab": "*/5 * * * *",
    "dashboard": 0,
    "database": 0,
    "description": "Daily sales dashboard to marketing",
    "grace_period": 14400,
    "log_retention": 90,
    "name": "Daily dashboard email",
    "owners": [
      0
    ],
    "recipients": [
      {
        "recipient_config_json": {
          "target": "string"
        },
        "type": "Email"
      }
    ],
    "report_format": "PNG",
    "sql": "SELECT value FROM time_series_table",
    "timezone": "string",
    "type": "Alert",
    "validator_config_json": {
      "op": "<",
      "threshold": 0
    },
    "validator_type": "not null",
    "working_timeout": 3600
  }
}
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

> 500 Response

```json
{
  "message": "string"
}
```

<h3 id="postreport-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Report schedule added|Inline|
|400|Bad Request|Bad request|Inline|
|401|Unauthorized|Unauthorized|Inline|
|404|Not Found|Not found|Inline|
|500|Internal Server Error|Fatal error|Inline|

<h3 id="postreport-responseschema">Response Schema</h3>

Status Code **201**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|number|false|none|none|
|result|[ReportScheduleRestApi.post](#schemareportschedulerestapi.post)|false|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwt
</aside>

## delete/report/

> Code samples

```bash
curl https://example.com/report/ \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /report/`

Deletes multiple report schedules in a bulk operation.

<h3 id="deletereport-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|q|query|[get_delete_ids_schema](#schemaget_delete_ids_schema)|false|none|

> Example responses

> 200 Response

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

> 403 Response

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

> 422 Response

```json
{
  "message": "string"
}
```

> 500 Response

```json
{
  "message": "string"
}
```

<h3 id="deletereport-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Report Schedule bulk delete|Inline|
|401|Unauthorized|Unauthorized|Inline|
|403|Forbidden|Forbidden|Inline|
|404|Not Found|Not found|Inline|
|422|Unprocessable Entity|Could not process entity|Inline|
|500|Internal Server Error|Fatal error|Inline|

<h3 id="deletereport-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **422**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwt
</aside>

## get/report/_info

> Code samples

```bash
curl https://example.com/report/_info \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /report/_info`

Get metadata information about this API resource

<h3 id="getreportinfo-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|q|query|[get_info_schema](#schemaget_info_schema)|false|none|

> Example responses

> 200 Response

```json
{
  "add_columns": {},
  "edit_columns": {},
  "filters": {
    "column_name": [
      {
        "name": "string",
        "operator": "string"
      }
    ]
  },
  "permissions": [
    "string"
  ]
}
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

> 422 Response

```json
{
  "message": "string"
}
```

> 500 Response

```json
{
  "message": "string"
}
```

<h3 id="getreportinfo-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Item from Model|Inline|
|400|Bad Request|Bad request|Inline|
|401|Unauthorized|Unauthorized|Inline|
|422|Unprocessable Entity|Could not process entity|Inline|
|500|Internal Server Error|Fatal error|Inline|

<h3 id="getreportinfo-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|add_columns|object|false|none|none|
|edit_columns|object|false|none|none|
|filters|object|false|none|none|
|» column_name|[object]|false|none|none|
|» » name|string|false|none|The filter name. Will be translated by babel|
|» » operator|string|false|none|The filter operation key to use on list filters|
|permissions|[string]|false|none|The user permissions for this API resource|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **422**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwt
</aside>

## get/report/related/{column_name}

> Code samples

```bash
curl https://example.com/report/related/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /report/related/{column_name}`

<h3 id="getreportrelatedcolumnname-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|column_name|path|string|true|none|
|q|query|[get_related_schema](#schemaget_related_schema)|false|none|

> Example responses

> 200 Response

```json
{
  "count": 0,
  "result": [
    {
      "text": "string",
      "value": 0
    }
  ]
}
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

> 500 Response

```json
{
  "message": "string"
}
```

<h3 id="getreportrelatedcolumnname-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Related column data|[RelatedResponseSchema](#schemarelatedresponseschema)|
|400|Bad Request|Bad request|Inline|
|401|Unauthorized|Unauthorized|Inline|
|404|Not Found|Not found|Inline|
|500|Internal Server Error|Fatal error|Inline|

<h3 id="getreportrelatedcolumnname-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwt
</aside>

## get/report/{pk}

> Code samples

```bash
curl https://example.com/report/0 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /report/{pk}`

Get a report schedule

<h3 id="getreportpk-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|pk|path|integer|true|none|
|q|query|[get_item_schema](#schemaget_item_schema)|false|none|

> Example responses

> 200 Response

```json
{
  "description_columns": {
    "column_name": "A Nice description for the column"
  },
  "id": "string",
  "label_columns": {
    "column_name": "A Nice label for the column"
  },
  "result": {
    "active": true,
    "chart": {
      "id": 0,
      "slice_name": "string",
      "viz_type": "string"
    },
    "context_markdown": "string",
    "creation_method": "string",
    "crontab": "string",
    "dashboard": {
      "dashboard_title": "string",
      "id": 0
    },
    "database": {
      "database_name": "string",
      "id": 0
    },
    "description": "string",
    "grace_period": 0,
    "id": 0,
    "last_eval_dttm": "1970-01-01T00:00:00Z",
    "last_state": "string",
    "last_value": 0,
    "last_value_row_json": "string",
    "log_retention": 0,
    "name": "string",
    "owners": {
      "first_name": "string",
      "id": 0,
      "last_name": "string"
    },
    "recipients": {
      "id": 0,
      "recipient_config_json": "string",
      "type": "string"
    },
    "report_format": "string",
    "sql": "string",
    "timezone": "string",
    "type": "string",
    "validator_config_json": "string",
    "validator_type": "string",
    "working_timeout": 0
  },
  "show_columns": [
    "string"
  ],
  "show_title": "Show Item Details"
}
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

> 422 Response

```json
{
  "message": "string"
}
```

> 500 Response

```json
{
  "message": "string"
}
```

<h3 id="getreportpk-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Item from Model|Inline|
|400|Bad Request|Bad request|Inline|
|401|Unauthorized|Unauthorized|Inline|
|404|Not Found|Not found|Inline|
|422|Unprocessable Entity|Could not process entity|Inline|
|500|Internal Server Error|Fatal error|Inline|

<h3 id="getreportpk-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description_columns|object|false|none|none|
|» column_name|string|false|none|The description for the column name. Will be translated by babel|
|id|string|false|none|The item id|
|label_columns|object|false|none|none|
|» column_name|string|false|none|The label for the column name. Will be translated by babel|
|result|[ReportScheduleRestApi.get](#schemareportschedulerestapi.get)|false|none|none|
|show_columns|[string]|false|none|A list of columns|
|show_title|string|false|none|A title to render. Will be translated by babel|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **422**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwt
</aside>

## put/report/{pk}

> Code samples

```bash
curl https://example.com/report/0 \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "active": true,
    "chart": 0,
    "context_markdown": "string",
    "creation_method": null,
    "crontab": "string",
    "dashboard": 0,
    "database": 0,
    "description": "Daily sales dashboard to marketing",
    "grace_period": 14400,
    "log_retention": 90,
    "name": "string",
    "owners": [
      0
    ],
    "recipients": [
      {
        "recipient_config_json": {
          "target": "string"
        },
        "type": "Email"
      }
    ],
    "report_format": "PNG",
    "sql": "SELECT value FROM time_series_table",
    "timezone": "string",
    "type": "Alert",
    "validator_config_json": {
      "op": "<",
      "threshold": 0
    },
    "validator_type": "not null",
    "working_timeout": 3600
  }'
```

`PUT /report/{pk}`

Update a report schedule

> Body parameter

```json
{
  "active": true,
  "chart": 0,
  "context_markdown": "string",
  "creation_method": null,
  "crontab": "string",
  "dashboard": 0,
  "database": 0,
  "description": "Daily sales dashboard to marketing",
  "grace_period": 14400,
  "log_retention": 90,
  "name": "string",
  "owners": [
    0
  ],
  "recipients": [
    {
      "recipient_config_json": {
        "target": "string"
      },
      "type": "Email"
    }
  ],
  "report_format": "PNG",
  "sql": "SELECT value FROM time_series_table",
  "timezone": "string",
  "type": "Alert",
  "validator_config_json": {
    "op": "<",
    "threshold": 0
  },
  "validator_type": "not null",
  "working_timeout": 3600
}
```

<h3 id="putreportpk-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|pk|path|integer|true|The Report Schedule pk|
|body|body|[ReportScheduleRestApi.put](#schemareportschedulerestapi.put)|true|Report Schedule schema|
|» active|body|boolean|false|none|
|» chart|body|integer(int32) \| null|false|none|
|» context_markdown|body|string \| null|false|Markdown description|
|» creation_method|body|object \| null|false|Creation method is used to inform the frontend whether the report/alert was created in the dashboard, chart, or alerts and reports UI.|
|» crontab|body|string|false|A CRON expression.[Crontab Guru](https://crontab.guru/) is a helpful resource that can help you craft a CRON expression.|
|» dashboard|body|integer(int32) \| null|false|none|
|» database|body|integer(int32)|false|none|
|» description|body|string \| null|false|Use a nice description to give context to this Alert/Report|
|» grace_period|body|integer(int32)|false|Once an alert is triggered, how long, in seconds, before Superset nags you again. (in seconds)|
|» log_retention|body|integer(int32)|false|How long to keep the logs around for this report (in days)|
|» name|body|string|false|The report schedule name.|
|» owners|body|[integer(int32)]|false|none|
|» recipients|body|[[ReportRecipient](#schemareportrecipient)]|false|none|
|» report_format|body|string|false|none|
|» sql|body|string \| null|false|A SQL statement that defines whether the alert should get triggered or not. The query is expected to return either NULL or a number value.|
|» timezone|body|string|false|A timezone string that represents the location of the timezone.|
|» type|body|string|false|The report schedule type|
|» validator_config_json|body|[ValidatorConfigJSON](#schemavalidatorconfigjson)|false|none|
|» validator_type|body|string \| null|false|Determines when to trigger alert based off value from alert query. Alerts will be triggered with these validator types:<br>- Not Null - When the return value is Not NULL, Empty, or 0<br>- Operator - When `sql_return_value comparison_operator threshold` is True e.g. `50 <= 75`<br>Supports the comparison operators <, <=, >, >=, ==, and !=|
|» working_timeout|body|integer(int32) \| null|false|If an alert is staled at a working state, how long until it's state is reseted to error|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» report_format|PNG|
|» report_format|CSV|
|» report_format|TEXT|
|» type|Alert|
|» type|Report|
|» validator_type|not null|
|» validator_type|operator|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "result": {
    "active": true,
    "chart": 0,
    "context_markdown": "string",
    "creation_method": null,
    "crontab": "string",
    "dashboard": 0,
    "database": 0,
    "description": "Daily sales dashboard to marketing",
    "grace_period": 14400,
    "log_retention": 90,
    "name": "string",
    "owners": [
      0
    ],
    "recipients": [
      {
        "recipient_config_json": {
          "target": "string"
        },
        "type": "Email"
      }
    ],
    "report_format": "PNG",
    "sql": "SELECT value FROM time_series_table",
    "timezone": "string",
    "type": "Alert",
    "validator_config_json": {
      "op": "<",
      "threshold": 0
    },
    "validator_type": "not null",
    "working_timeout": 3600
  }
}
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

> 403 Response

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

> 500 Response

```json
{
  "message": "string"
}
```

<h3 id="putreportpk-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Report Schedule changed|Inline|
|400|Bad Request|Bad request|Inline|
|401|Unauthorized|Unauthorized|Inline|
|403|Forbidden|Forbidden|Inline|
|404|Not Found|Not found|Inline|
|500|Internal Server Error|Fatal error|Inline|

<h3 id="putreportpk-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|number|false|none|none|
|result|[ReportScheduleRestApi.put](#schemareportschedulerestapi.put)|false|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwt
</aside>

## delete/report/{pk}

> Code samples

```bash
curl https://example.com/report/0 \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /report/{pk}`

Delete a report schedule

<h3 id="deletereportpk-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|pk|path|integer|true|The report schedule pk|

> Example responses

> 200 Response

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

> 404 Response

```json
{
  "message": "string"
}
```

> 422 Response

```json
{
  "message": "string"
}
```

> 500 Response

```json
{
  "message": "string"
}
```

<h3 id="deletereportpk-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Item deleted|Inline|
|403|Forbidden|Forbidden|Inline|
|404|Not Found|Not found|Inline|
|422|Unprocessable Entity|Could not process entity|Inline|
|500|Internal Server Error|Fatal error|Inline|

<h3 id="deletereportpk-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **422**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwt
</aside>

## get/report/{pk}/log/

> Code samples

```bash
curl https://example.com/report/0/log/ \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /report/{pk}/log/`

Get a list of report schedule logs, use Rison or JSON query parameters for filtering, sorting, pagination and for selecting specific columns and metadata.

<h3 id="getreportpklog-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|pk|path|integer|true|The report schedule id for these logs|
|q|query|[get_list_schema](#schemaget_list_schema)|false|none|

> Example responses

> 200 Response

```json
{
  "count": 0,
  "ids": [
    "string"
  ],
  "result": [
    {
      "end_dttm": "1970-01-01T00:00:00Z",
      "error_message": "string",
      "id": 0,
      "scheduled_dttm": "1970-01-01T00:00:00Z",
      "start_dttm": "1970-01-01T00:00:00Z",
      "state": "string",
      "uuid": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "value": 0,
      "value_row_json": "string"
    }
  ]
}
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

> 422 Response

```json
{
  "message": "string"
}
```

> 500 Response

```json
{
  "message": "string"
}
```

<h3 id="getreportpklog-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Items from logs|Inline|
|400|Bad Request|Bad request|Inline|
|401|Unauthorized|Unauthorized|Inline|
|422|Unprocessable Entity|Could not process entity|Inline|
|500|Internal Server Error|Fatal error|Inline|

<h3 id="getreportpklog-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|number|false|none|The total record count on the backend|
|ids|[string]|false|none|A list of log ids|
|result|[[ReportExecutionLogRestApi.get_list](#schemareportexecutionlogrestapi.get_list)]|false|none|The result from the get list query|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **422**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwt
</aside>

## get/report/{pk}/log/{log_id}

> Code samples

```bash
curl https://example.com/report/0/log/0 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /report/{pk}/log/{log_id}`

Get a report schedule log

<h3 id="getreportpkloglogid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|pk|path|integer|true|The report schedule pk for log|
|log_id|path|integer|true|The log pk|
|q|query|[get_item_schema](#schemaget_item_schema)|false|none|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "result": {
    "end_dttm": "1970-01-01T00:00:00Z",
    "error_message": "string",
    "id": 0,
    "scheduled_dttm": "1970-01-01T00:00:00Z",
    "start_dttm": "1970-01-01T00:00:00Z",
    "state": "string",
    "uuid": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "value": 0,
    "value_row_json": "string"
  }
}
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

> 422 Response

```json
{
  "message": "string"
}
```

> 500 Response

```json
{
  "message": "string"
}
```

<h3 id="getreportpkloglogid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Item log|Inline|
|400|Bad Request|Bad request|Inline|
|401|Unauthorized|Unauthorized|Inline|
|404|Not Found|Not found|Inline|
|422|Unprocessable Entity|Could not process entity|Inline|
|500|Internal Server Error|Fatal error|Inline|

<h3 id="getreportpkloglogid-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|The log id|
|result|[ReportExecutionLogRestApi.get](#schemareportexecutionlogrestapi.get)|false|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **422**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwt
</aside>

<h1 id="superset-security">Security</h1>

## get/security/csrf_token/

> Code samples

```bash
curl https://example.com/security/csrf_token/ \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /security/csrf_token/`

Fetch the CSRF token

> Example responses

> 200 Response

```json
{
  "result": "string"
}
```

> 401 Response

```json
{
  "message": "string"
}
```

> 500 Response

```json
{
  "message": "string"
}
```

<h3 id="getsecuritycsrftoken-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Result contains the CSRF token|Inline|
|401|Unauthorized|Unauthorized|Inline|
|500|Internal Server Error|Fatal error|Inline|

<h3 id="getsecuritycsrftoken-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|result|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwt
</aside>

## post/security/login

> Code samples

```bash
curl https://example.com/security/login \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "password": "complex-password",
    "provider": "db",
    "refresh": true,
    "username": "admin"
  }'
```

`POST /security/login`

Authenticate and get a JWT access and refresh token

> Body parameter

```json
{
  "password": "complex-password",
  "provider": "db",
  "refresh": true,
  "username": "admin"
}
```

<h3 id="postsecuritylogin-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» password|body|string|false|The password for authentication|
|» provider|body|string|false|Choose an authentication provider|
|» refresh|body|boolean|false|If true a refresh token is provided also|
|» username|body|string|false|The username for authentication|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» provider|db|
|» provider|ldap|

> Example responses

> 200 Response

```json
{
  "access_token": "string",
  "refresh_token": "string"
}
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

> 500 Response

```json
{
  "message": "string"
}
```

<h3 id="postsecuritylogin-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Authentication Successful|Inline|
|400|Bad Request|Bad request|Inline|
|401|Unauthorized|Unauthorized|Inline|
|500|Internal Server Error|Fatal error|Inline|

<h3 id="postsecuritylogin-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|access_token|string|false|none|none|
|refresh_token|string|false|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## post/security/refresh

> Code samples

```bash
curl https://example.com/security/refresh \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /security/refresh`

Use the refresh token to get a new JWT access token

> Example responses

> 200 Response

```json
{
  "access_token": "string"
}
```

> 401 Response

```json
{
  "message": "string"
}
```

> 500 Response

```json
{
  "message": "string"
}
```

<h3 id="postsecurityrefresh-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Refresh Successful|Inline|
|401|Unauthorized|Unauthorized|Inline|
|500|Internal Server Error|Fatal error|Inline|

<h3 id="postsecurityrefresh-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|access_token|string|false|none|A new refreshed access token|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwt_refresh
</aside>

# Schemas

<h2 id="tocS_AnnotationLayer">AnnotationLayer</h2>
<!-- backwards compatibility -->
<a id="schemaannotationlayer"></a>
<a id="schema_AnnotationLayer"></a>
<a id="tocSannotationlayer"></a>
<a id="tocsannotationlayer"></a>

```json
{
  "annotationType": "FORMULA",
  "color": "string",
  "descriptionColumns": [
    "string"
  ],
  "hideLine": true,
  "intervalEndColumn": "string",
  "name": "string",
  "opacity": "",
  "overrides": {
    "property1": null,
    "property2": null
  },
  "show": true,
  "showMarkers": true,
  "sourceType": "",
  "style": "dashed",
  "timeColumn": "string",
  "titleColumn": "string",
  "value": null,
  "width": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|annotationType|string|false|none|Type of annotation layer|
|color|string \| null|false|none|Layer color|
|descriptionColumns|[string]|false|none|Columns to use as the description. If none are provided, all will be shown.|
|hideLine|boolean \| null|false|none|Should line be hidden. Only applies to line annotations|
|intervalEndColumn|string \| null|false|none|Column containing end of interval. Only applies to interval layers|
|name|string|true|none|Name of layer|
|opacity|string \| null|false|none|Opacity of layer|
|overrides|object \| null|false|none|which properties should be overridable|
|show|boolean|true|none|Should the layer be shown|
|showMarkers|boolean|true|none|Should markers be shown. Only applies to line annotations.|
|sourceType|string|false|none|Type of source for annotation data|
|style|string|false|none|Line style. Only applies to time-series annotations|
|timeColumn|string \| null|false|none|Column with event date or interval start date|
|titleColumn|string \| null|false|none|Column with title|
|value|object|true|none|For formula annotations, this contains the formula. For other types, this is the primary key of the source object.|
|width|number(float)|false|none|Width of annotation line|

#### Enumerated Values

|Property|Value|
|---|---|
|annotationType|FORMULA|
|annotationType|INTERVAL|
|annotationType|EVENT|
|annotationType|TIME_SERIES|
|opacity|""|
|opacity|opacityLow|
|opacity|opacityMedium|
|opacity|opacityHigh|
|sourceType|""|
|sourceType|line|
|sourceType|NATIVE|
|sourceType|table|
|style|dashed|
|style|dotted|
|style|solid|
|style|longDashed|

<h2 id="tocS_AnnotationLayerRestApi.get">AnnotationLayerRestApi.get</h2>
<!-- backwards compatibility -->
<a id="schemaannotationlayerrestapi.get"></a>
<a id="schema_AnnotationLayerRestApi.get"></a>
<a id="tocSannotationlayerrestapi.get"></a>
<a id="tocsannotationlayerrestapi.get"></a>

```json
{
  "descr": "string",
  "id": 0,
  "name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|descr|string \| null|false|none|none|
|id|integer(int32)|false|none|none|
|name|string \| null|false|none|none|

<h2 id="tocS_AnnotationLayerRestApi.get_list">AnnotationLayerRestApi.get_list</h2>
<!-- backwards compatibility -->
<a id="schemaannotationlayerrestapi.get_list"></a>
<a id="schema_AnnotationLayerRestApi.get_list"></a>
<a id="tocSannotationlayerrestapi.get_list"></a>
<a id="tocsannotationlayerrestapi.get_list"></a>

```json
{
  "changed_by": {
    "first_name": "string",
    "last_name": "string"
  },
  "changed_on": "1970-01-01T00:00:00Z",
  "changed_on_delta_humanized": null,
  "created_by": {
    "first_name": "string",
    "last_name": "string"
  },
  "created_on": "1970-01-01T00:00:00Z",
  "descr": "string",
  "id": 0,
  "name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|changed_by|[Meta4](#schemameta4)|false|none|none|
|changed_on|string(date-time) \| null|false|none|none|
|changed_on_delta_humanized|object|false|read-only|none|
|created_by|[Meta3](#schemameta3)|false|none|none|
|created_on|string(date-time) \| null|false|none|none|
|descr|string \| null|false|none|none|
|id|integer(int32)|false|none|none|
|name|string \| null|false|none|none|

<h2 id="tocS_AnnotationLayerRestApi.post">AnnotationLayerRestApi.post</h2>
<!-- backwards compatibility -->
<a id="schemaannotationlayerrestapi.post"></a>
<a id="schema_AnnotationLayerRestApi.post"></a>
<a id="tocSannotationlayerrestapi.post"></a>
<a id="tocsannotationlayerrestapi.post"></a>

```json
{
  "descr": "string",
  "name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|descr|string \| null|false|none|Give a description for this annotation layer|
|name|string|false|none|The annotation layer name|

<h2 id="tocS_AnnotationLayerRestApi.put">AnnotationLayerRestApi.put</h2>
<!-- backwards compatibility -->
<a id="schemaannotationlayerrestapi.put"></a>
<a id="schema_AnnotationLayerRestApi.put"></a>
<a id="tocSannotationlayerrestapi.put"></a>
<a id="tocsannotationlayerrestapi.put"></a>

```json
{
  "descr": "string",
  "name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|descr|string|false|none|Give a description for this annotation layer|
|name|string|false|none|The annotation layer name|

<h2 id="tocS_AnnotationRestApi.get">AnnotationRestApi.get</h2>
<!-- backwards compatibility -->
<a id="schemaannotationrestapi.get"></a>
<a id="schema_AnnotationRestApi.get"></a>
<a id="tocSannotationrestapi.get"></a>
<a id="tocsannotationrestapi.get"></a>

```json
{
  "end_dttm": "1970-01-01T00:00:00Z",
  "id": 0,
  "json_metadata": "string",
  "layer": {
    "id": 0,
    "name": "string"
  },
  "long_descr": "string",
  "short_descr": "string",
  "start_dttm": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|end_dttm|string(date-time) \| null|false|none|none|
|id|integer(int32)|false|none|none|
|json_metadata|string \| null|false|none|none|
|layer|[Meta2](#schemameta2)|true|none|none|
|long_descr|string \| null|false|none|none|
|short_descr|string \| null|false|none|none|
|start_dttm|string(date-time) \| null|false|none|none|

<h2 id="tocS_AnnotationRestApi.get_list">AnnotationRestApi.get_list</h2>
<!-- backwards compatibility -->
<a id="schemaannotationrestapi.get_list"></a>
<a id="schema_AnnotationRestApi.get_list"></a>
<a id="tocSannotationrestapi.get_list"></a>
<a id="tocsannotationrestapi.get_list"></a>

```json
{
  "changed_by": {
    "first_name": "string",
    "id": 0
  },
  "changed_on_delta_humanized": null,
  "created_by": {
    "first_name": "string",
    "id": 0
  },
  "end_dttm": "1970-01-01T00:00:00Z",
  "id": 0,
  "long_descr": "string",
  "short_descr": "string",
  "start_dttm": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|changed_by|[Meta1](#schemameta1)|false|none|none|
|changed_on_delta_humanized|object|false|read-only|none|
|created_by|[Meta](#schemameta)|false|none|none|
|end_dttm|string(date-time) \| null|false|none|none|
|id|integer(int32)|false|none|none|
|long_descr|string \| null|false|none|none|
|short_descr|string \| null|false|none|none|
|start_dttm|string(date-time) \| null|false|none|none|

<h2 id="tocS_AnnotationRestApi.post">AnnotationRestApi.post</h2>
<!-- backwards compatibility -->
<a id="schemaannotationrestapi.post"></a>
<a id="schema_AnnotationRestApi.post"></a>
<a id="tocSannotationrestapi.post"></a>
<a id="tocsannotationrestapi.post"></a>

```json
{
  "end_dttm": "1970-01-01T00:00:00Z",
  "json_metadata": "string",
  "long_descr": "string",
  "short_descr": "string",
  "start_dttm": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|end_dttm|string(date-time)|false|none|The annotation end date time|
|json_metadata|string \| null|false|none|JSON metadata|
|long_descr|string \| null|false|none|A long description|
|short_descr|string|false|none|A short description|
|start_dttm|string(date-time)|false|none|The annotation start date time|

<h2 id="tocS_AnnotationRestApi.put">AnnotationRestApi.put</h2>
<!-- backwards compatibility -->
<a id="schemaannotationrestapi.put"></a>
<a id="schema_AnnotationRestApi.put"></a>
<a id="tocSannotationrestapi.put"></a>
<a id="tocsannotationrestapi.put"></a>

```json
{
  "end_dttm": "1970-01-01T00:00:00Z",
  "json_metadata": "string",
  "long_descr": "string",
  "short_descr": "string",
  "start_dttm": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|end_dttm|string(date-time)|false|none|The annotation end date time|
|json_metadata|string|false|none|JSON metadata|
|long_descr|string|false|none|A long description|
|short_descr|string|false|none|A short description|
|start_dttm|string(date-time)|false|none|The annotation start date time|

<h2 id="tocS_CacheInvalidationRequestSchema">CacheInvalidationRequestSchema</h2>
<!-- backwards compatibility -->
<a id="schemacacheinvalidationrequestschema"></a>
<a id="schema_CacheInvalidationRequestSchema"></a>
<a id="tocScacheinvalidationrequestschema"></a>
<a id="tocscacheinvalidationrequestschema"></a>

```json
{
  "datasource_uids": [
    "string"
  ],
  "datasources": [
    {
      "database_name": "string",
      "datasource_name": "string",
      "datasource_type": "druid",
      "schema": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|datasource_uids|[string]|false|none|The uid of the dataset/datasource this new chart will use. A complete datasource identification needs `datasouce_uid` |
|datasources|[[Datasource](#schemadatasource)]|false|none|A list of the data source and database names|

<h2 id="tocS_CacheRestApi.get">CacheRestApi.get</h2>
<!-- backwards compatibility -->
<a id="schemacacherestapi.get"></a>
<a id="schema_CacheRestApi.get"></a>
<a id="tocScacherestapi.get"></a>
<a id="tocscacherestapi.get"></a>

```json
{
  "id": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|false|none|none|

<h2 id="tocS_CacheRestApi.get_list">CacheRestApi.get_list</h2>
<!-- backwards compatibility -->
<a id="schemacacherestapi.get_list"></a>
<a id="schema_CacheRestApi.get_list"></a>
<a id="tocScacherestapi.get_list"></a>
<a id="tocscacherestapi.get_list"></a>

```json
{
  "id": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|false|none|none|

<h2 id="tocS_CacheRestApi.post">CacheRestApi.post</h2>
<!-- backwards compatibility -->
<a id="schemacacherestapi.post"></a>
<a id="schema_CacheRestApi.post"></a>
<a id="tocScacherestapi.post"></a>
<a id="tocscacherestapi.post"></a>

```json
{
  "id": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|false|none|none|

<h2 id="tocS_CacheRestApi.put">CacheRestApi.put</h2>
<!-- backwards compatibility -->
<a id="schemacacherestapi.put"></a>
<a id="schema_CacheRestApi.put"></a>
<a id="tocScacherestapi.put"></a>
<a id="tocscacherestapi.put"></a>

```json
{
  "id": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|false|none|none|

<h2 id="tocS_ChartCacheScreenshotResponseSchema">ChartCacheScreenshotResponseSchema</h2>
<!-- backwards compatibility -->
<a id="schemachartcachescreenshotresponseschema"></a>
<a id="schema_ChartCacheScreenshotResponseSchema"></a>
<a id="tocSchartcachescreenshotresponseschema"></a>
<a id="tocschartcachescreenshotresponseschema"></a>

```json
{
  "cache_key": "string",
  "chart_url": "string",
  "image_url": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cache_key|string|false|none|The cache key|
|chart_url|string|false|none|The url to render the chart|
|image_url|string|false|none|The url to fetch the screenshot|

<h2 id="tocS_ChartDataAdhocMetricSchema">ChartDataAdhocMetricSchema</h2>
<!-- backwards compatibility -->
<a id="schemachartdataadhocmetricschema"></a>
<a id="schema_ChartDataAdhocMetricSchema"></a>
<a id="tocSchartdataadhocmetricschema"></a>
<a id="tocschartdataadhocmetricschema"></a>

```json
{
  "aggregate": "AVG",
  "column": {
    "column_name": "mycol",
    "type": "BIGINT"
  },
  "expressionType": "SQL",
  "hasCustomLabel": true,
  "label": "Weighted observations",
  "optionName": "metric_aec60732-fac0-4b17-b736-93f1a5c93e30",
  "sqlExpression": "SUM(weight * observations) / SUM(weight)"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|aggregate|string|false|none|Aggregation operator. Only required for simple expression types.|
|column|[ChartDataColumn](#schemachartdatacolumn)|false|none|none|
|expressionType|string|true|none|Simple or SQL metric|
|hasCustomLabel|boolean|false|none|When false, the label will be automatically generated based on the aggregate expression. When true, a custom label has to be specified.|
|label|string|false|none|Label for the metric. Is automatically generated unless hasCustomLabel is true, in which case label must be defined.|
|optionName|string|false|none|Unique identifier. Can be any string value, as long as all metrics have a unique identifier. If undefined, a random name will be generated.|
|sqlExpression|string|false|none|The metric as defined by a SQL aggregate expression. Only required for SQL expression type.|

#### Enumerated Values

|Property|Value|
|---|---|
|aggregate|AVG|
|aggregate|COUNT|
|aggregate|COUNT_DISTINCT|
|aggregate|MAX|
|aggregate|MIN|
|aggregate|SUM|
|expressionType|SIMPLE|
|expressionType|SQL|

<h2 id="tocS_ChartDataAggregateOptionsSchema">ChartDataAggregateOptionsSchema</h2>
<!-- backwards compatibility -->
<a id="schemachartdataaggregateoptionsschema"></a>
<a id="schema_ChartDataAggregateOptionsSchema"></a>
<a id="tocSchartdataaggregateoptionsschema"></a>
<a id="tocschartdataaggregateoptionsschema"></a>

```json
{
  "aggregates": {
    "first_quantile": {
      "column": "my_col",
      "operator": "percentile",
      "options": {
        "q": 0.25
      }
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|aggregates|object|false|none|The keys are the name of the aggregate column to be created, and the values specify the details of how to apply the aggregation. If an operator requires additional options, these can be passed here to be unpacked in the operator call. The following numpy operators are supported: average, argmin, argmax, cumsum, cumprod, max, mean, median, nansum, nanmin, nanmax, nanmean, nanmedian, min, percentile, prod, product, std, sum, var. Any options required by the operator can be passed to the `options` object.<br><br>In the example, a new column `first_quantile` is created based on values in the column `my_col` using the `percentile` operator with the `q=0.25` parameter.|

<h2 id="tocS_ChartDataAsyncResponseSchema">ChartDataAsyncResponseSchema</h2>
<!-- backwards compatibility -->
<a id="schemachartdataasyncresponseschema"></a>
<a id="schema_ChartDataAsyncResponseSchema"></a>
<a id="tocSchartdataasyncresponseschema"></a>
<a id="tocschartdataasyncresponseschema"></a>

```json
{
  "channel_id": "string",
  "job_id": "string",
  "result_url": "string",
  "status": "string",
  "user_id": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|channel_id|string|false|none|Unique session async channel ID|
|job_id|string|false|none|Unique async job ID|
|result_url|string|false|none|Unique result URL for fetching async query data|
|status|string|false|none|Status value for async job|
|user_id|string \| null|false|none|Requesting user ID|

<h2 id="tocS_ChartDataBoxplotOptionsSchema">ChartDataBoxplotOptionsSchema</h2>
<!-- backwards compatibility -->
<a id="schemachartdataboxplotoptionsschema"></a>
<a id="schema_ChartDataBoxplotOptionsSchema"></a>
<a id="tocSchartdataboxplotoptionsschema"></a>
<a id="tocschartdataboxplotoptionsschema"></a>

```json
{
  "groupby": [
    "string"
  ],
  "metrics": [
    null
  ],
  "percentiles": [
    1,
    99
  ],
  "whisker_type": "tukey"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|groupby|[string]|false|none|none|
|metrics|[object]|false|none|Aggregate expressions. Metrics can be passed as both references to datasource metrics (strings), or ad-hoc metricswhich are defined only within the query object. See `ChartDataAdhocMetricSchema` for the structure of ad-hoc metrics.|
|percentiles|object|false|none|Upper and lower percentiles for percentile whisker type.|
|whisker_type|string|true|none|Whisker type. Any numpy function will work.|

#### Enumerated Values

|Property|Value|
|---|---|
|whisker_type|tukey|
|whisker_type|min/max|
|whisker_type|percentile|

<h2 id="tocS_ChartDataColumn">ChartDataColumn</h2>
<!-- backwards compatibility -->
<a id="schemachartdatacolumn"></a>
<a id="schema_ChartDataColumn"></a>
<a id="tocSchartdatacolumn"></a>
<a id="tocschartdatacolumn"></a>

```json
{
  "column_name": "mycol",
  "type": "BIGINT"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|column_name|string|false|none|The name of the target column|
|type|string|false|none|Type of target column|

<h2 id="tocS_ChartDataContributionOptionsSchema">ChartDataContributionOptionsSchema</h2>
<!-- backwards compatibility -->
<a id="schemachartdatacontributionoptionsschema"></a>
<a id="schema_ChartDataContributionOptionsSchema"></a>
<a id="tocSchartdatacontributionoptionsschema"></a>
<a id="tocschartdatacontributionoptionsschema"></a>

```json
{
  "orientation": "row"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|orientation|string|true|none|Should cell values be calculated across the row or column.|

#### Enumerated Values

|Property|Value|
|---|---|
|orientation|row|
|orientation|column|

<h2 id="tocS_ChartDataDatasource">ChartDataDatasource</h2>
<!-- backwards compatibility -->
<a id="schemachartdatadatasource"></a>
<a id="schema_ChartDataDatasource"></a>
<a id="tocSchartdatadatasource"></a>
<a id="tocschartdatadatasource"></a>

```json
{
  "id": 0,
  "type": "druid"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|true|none|Datasource id|
|type|string|false|none|Datasource type|

#### Enumerated Values

|Property|Value|
|---|---|
|type|druid|
|type|table|

<h2 id="tocS_ChartDataExtras">ChartDataExtras</h2>
<!-- backwards compatibility -->
<a id="schemachartdataextras"></a>
<a id="schema_ChartDataExtras"></a>
<a id="tocSchartdataextras"></a>
<a id="tocschartdataextras"></a>

```json
{
  "druid_time_origin": "string",
  "having": "string",
  "having_druid": [
    {
      "col": "country",
      "op": "IN",
      "val": [
        "China",
        "France",
        "Japan"
      ]
    }
  ],
  "relative_end": "today",
  "relative_start": "today",
  "time_grain_sqla": "P1D",
  "time_range_endpoints": [
    null
  ],
  "where": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|druid_time_origin|string \| null|false|none|Starting point for time grain counting on legacy Druid datasources. Used to change e.g. Monday/Sunday first-day-of-week.|
|having|string|false|none|HAVING clause to be added to aggregate queries using AND operator.|
|having_druid|[[ChartDataFilter](#schemachartdatafilter)]|false|none|HAVING filters to be added to legacy Druid datasource queries.|
|relative_end|string|false|none|End time for relative time deltas. Default: `config["DEFAULT_RELATIVE_START_TIME"]`|
|relative_start|string|false|none|Start time for relative time deltas. Default: `config["DEFAULT_RELATIVE_START_TIME"]`|
|time_grain_sqla|string \| null|false|none|To what level of granularity should the temporal column be aggregated. Supports [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601#Durations) durations.|
|time_range_endpoints|[object]|false|none|none|
|where|string|false|none|WHERE clause to be added to queries using AND operator.|

#### Enumerated Values

|Property|Value|
|---|---|
|relative_end|today|
|relative_end|now|
|relative_start|today|
|relative_start|now|
|time_grain_sqla|PT1S|
|time_grain_sqla|PT5S|
|time_grain_sqla|PT30S|
|time_grain_sqla|PT1M|
|time_grain_sqla|PT5M|
|time_grain_sqla|PT10M|
|time_grain_sqla|PT15M|
|time_grain_sqla|PT0.5H|
|time_grain_sqla|PT1H|
|time_grain_sqla|PT6H|
|time_grain_sqla|P1D|
|time_grain_sqla|P1W|
|time_grain_sqla|P1M|
|time_grain_sqla|P0.25Y|
|time_grain_sqla|P1Y|
|time_grain_sqla|1969-12-28T00:00:00Z/P1W|
|time_grain_sqla|1969-12-29T00:00:00Z/P1W|
|time_grain_sqla|P1W/1970-01-03T00:00:00Z|
|time_grain_sqla|P1W/1970-01-04T00:00:00Z|

<h2 id="tocS_ChartDataFilter">ChartDataFilter</h2>
<!-- backwards compatibility -->
<a id="schemachartdatafilter"></a>
<a id="schema_ChartDataFilter"></a>
<a id="tocSchartdatafilter"></a>
<a id="tocschartdatafilter"></a>

```json
{
  "col": "country",
  "op": "IN",
  "val": [
    "China",
    "France",
    "Japan"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|col|string|true|none|The column to filter.|
|op|string|true|none|The comparison operator.|
|val|object|false|none|The value or values to compare against. Can be a string, integer, decimal or list, depending on the operator.|

#### Enumerated Values

|Property|Value|
|---|---|
|op|==|
|op|!=|
|op|>|
|op|<|
|op|>=|
|op|<=|
|op|LIKE|
|op|ILIKE|
|op|IS NULL|
|op|IS NOT NULL|
|op|IN|
|op|NOT IN|
|op|REGEX|
|op|IS TRUE|
|op|IS FALSE|

<h2 id="tocS_ChartDataGeodeticParseOptionsSchema">ChartDataGeodeticParseOptionsSchema</h2>
<!-- backwards compatibility -->
<a id="schemachartdatageodeticparseoptionsschema"></a>
<a id="schema_ChartDataGeodeticParseOptionsSchema"></a>
<a id="tocSchartdatageodeticparseoptionsschema"></a>
<a id="tocschartdatageodeticparseoptionsschema"></a>

```json
{
  "altitude": "string",
  "geodetic": "string",
  "latitude": "string",
  "longitude": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|altitude|string|false|none|Name of target column for decoded altitude. If omitted, altitude information in geodetic string is ignored.|
|geodetic|string|true|none|Name of source column containing geodetic point strings|
|latitude|string|true|none|Name of target column for decoded latitude|
|longitude|string|true|none|Name of target column for decoded longitude|

<h2 id="tocS_ChartDataGeohashDecodeOptionsSchema">ChartDataGeohashDecodeOptionsSchema</h2>
<!-- backwards compatibility -->
<a id="schemachartdatageohashdecodeoptionsschema"></a>
<a id="schema_ChartDataGeohashDecodeOptionsSchema"></a>
<a id="tocSchartdatageohashdecodeoptionsschema"></a>
<a id="tocschartdatageohashdecodeoptionsschema"></a>

```json
{
  "geohash": "string",
  "latitude": "string",
  "longitude": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|geohash|string|true|none|Name of source column containing geohash string|
|latitude|string|true|none|Name of target column for decoded latitude|
|longitude|string|true|none|Name of target column for decoded longitude|

<h2 id="tocS_ChartDataGeohashEncodeOptionsSchema">ChartDataGeohashEncodeOptionsSchema</h2>
<!-- backwards compatibility -->
<a id="schemachartdatageohashencodeoptionsschema"></a>
<a id="schema_ChartDataGeohashEncodeOptionsSchema"></a>
<a id="tocSchartdatageohashencodeoptionsschema"></a>
<a id="tocschartdatageohashencodeoptionsschema"></a>

```json
{
  "geohash": "string",
  "latitude": "string",
  "longitude": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|geohash|string|true|none|Name of target column for encoded geohash string|
|latitude|string|true|none|Name of source latitude column|
|longitude|string|true|none|Name of source longitude column|

<h2 id="tocS_ChartDataPivotOptionsSchema">ChartDataPivotOptionsSchema</h2>
<!-- backwards compatibility -->
<a id="schemachartdatapivotoptionsschema"></a>
<a id="schema_ChartDataPivotOptionsSchema"></a>
<a id="tocSchartdatapivotoptionsschema"></a>
<a id="tocschartdatapivotoptionsschema"></a>

```json
{
  "aggregates": {
    "first_quantile": {
      "column": "my_col",
      "operator": "percentile",
      "options": {
        "q": 0.25
      }
    }
  },
  "column_fill_value": "string",
  "columns": [
    "string"
  ],
  "drop_missing_columns": true,
  "marginal_distribution_name": "string",
  "marginal_distributions": true,
  "metric_fill_value": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|aggregates|object|false|none|The keys are the name of the aggregate column to be created, and the values specify the details of how to apply the aggregation. If an operator requires additional options, these can be passed here to be unpacked in the operator call. The following numpy operators are supported: average, argmin, argmax, cumsum, cumprod, max, mean, median, nansum, nanmin, nanmax, nanmean, nanmedian, min, percentile, prod, product, std, sum, var. Any options required by the operator can be passed to the `options` object.<br><br>In the example, a new column `first_quantile` is created based on values in the column `my_col` using the `percentile` operator with the `q=0.25` parameter.|
|column_fill_value|string|false|none|Value to replace missing pivot columns names with.|
|columns|[string]|false|none|none|
|drop_missing_columns|boolean|false|none|Do not include columns whose entries are all missing (default: `true`).|
|marginal_distribution_name|string|false|none|Name of marginal distribution row/column. (default: `All`)|
|marginal_distributions|boolean|false|none|Add totals for row/column. (default: `false`)|
|metric_fill_value|number|false|none|Value to replace missing values with in aggregate calculations.|

<h2 id="tocS_ChartDataPostProcessingOperation">ChartDataPostProcessingOperation</h2>
<!-- backwards compatibility -->
<a id="schemachartdatapostprocessingoperation"></a>
<a id="schema_ChartDataPostProcessingOperation"></a>
<a id="tocSchartdatapostprocessingoperation"></a>
<a id="tocschartdatapostprocessingoperation"></a>

```json
{
  "operation": "aggregate",
  "options": {
    "aggregates": {
      "age_mean": {
        "column": "age",
        "operator": "mean"
      },
      "age_q1": {
        "column": "age",
        "operator": "percentile",
        "options": {
          "q": 0.25
        }
      }
    },
    "groupby": [
      "country",
      "gender"
    ]
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|operation|string|true|none|Post processing operation type|
|options|object|false|none|Options specifying how to perform the operation. Please refer to the respective post processing operation option schemas. For example, `ChartDataPostProcessingOperationOptions` specifies the required options for the pivot operation.|

#### Enumerated Values

|Property|Value|
|---|---|
|operation|aggregate|
|operation|boxplot|
|operation|contribution|
|operation|cum|
|operation|geodetic_parse|
|operation|geohash_decode|
|operation|geohash_encode|
|operation|pivot|
|operation|prophet|
|operation|rolling|
|operation|select|
|operation|sort|
|operation|diff|
|operation|compare|

<h2 id="tocS_ChartDataProphetOptionsSchema">ChartDataProphetOptionsSchema</h2>
<!-- backwards compatibility -->
<a id="schemachartdataprophetoptionsschema"></a>
<a id="schema_ChartDataProphetOptionsSchema"></a>
<a id="tocSchartdataprophetoptionsschema"></a>
<a id="tocschartdataprophetoptionsschema"></a>

```json
{
  "confidence_interval": 0.8,
  "monthly_seasonality": false,
  "periods": 7,
  "time_grain": "P1D",
  "weekly_seasonality": false,
  "yearly_seasonality": false
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|confidence_interval|number(float)|true|none|Width of predicted confidence interval|
|monthly_seasonality|object|false|none|Should monthly seasonality be applied. An integer value will specify Fourier order of seasonality, `None` will automatically detect seasonality.|
|periods|integer(int32)|true|none|none|
|time_grain|string|true|none|Time grain used to specify time period increments in prediction. Supports [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601#Durations) durations.|
|weekly_seasonality|object|false|none|Should weekly seasonality be applied. An integer value will specify Fourier order of seasonality, `None` will automatically detect seasonality.|
|yearly_seasonality|object|false|none|Should yearly seasonality be applied. An integer value will specify Fourier order of seasonality, `None` will automatically detect seasonality.|

#### Enumerated Values

|Property|Value|
|---|---|
|time_grain|PT1S|
|time_grain|PT5S|
|time_grain|PT30S|
|time_grain|PT1M|
|time_grain|PT5M|
|time_grain|PT10M|
|time_grain|PT15M|
|time_grain|PT0.5H|
|time_grain|PT1H|
|time_grain|PT6H|
|time_grain|P1D|
|time_grain|P1W|
|time_grain|P1M|
|time_grain|P0.25Y|
|time_grain|P1Y|
|time_grain|1969-12-28T00:00:00Z/P1W|
|time_grain|1969-12-29T00:00:00Z/P1W|
|time_grain|P1W/1970-01-03T00:00:00Z|
|time_grain|P1W/1970-01-04T00:00:00Z|

<h2 id="tocS_ChartDataQueryContextSchema">ChartDataQueryContextSchema</h2>
<!-- backwards compatibility -->
<a id="schemachartdataquerycontextschema"></a>
<a id="schema_ChartDataQueryContextSchema"></a>
<a id="tocSchartdataquerycontextschema"></a>
<a id="tocschartdataquerycontextschema"></a>

```json
{
  "datasource": {
    "id": 0,
    "type": "druid"
  },
  "force": true,
  "queries": [
    {
      "annotation_layers": [
        {
          "annotationType": "FORMULA",
          "color": "string",
          "descriptionColumns": [
            "string"
          ],
          "hideLine": true,
          "intervalEndColumn": "string",
          "name": "string",
          "opacity": "",
          "overrides": {
            "property1": null,
            "property2": null
          },
          "show": true,
          "showMarkers": true,
          "sourceType": "",
          "style": "dashed",
          "timeColumn": "string",
          "titleColumn": "string",
          "value": null,
          "width": 0
        }
      ],
      "applied_time_extras": {
        "__time_range": "1 year ago : now"
      },
      "apply_fetch_values_predicate": true,
      "columns": [
        "string"
      ],
      "datasource": {
        "id": 0,
        "type": "druid"
      },
      "druid_time_origin": "string",
      "extras": {
        "druid_time_origin": "string",
        "having": "string",
        "having_druid": [
          {
            "col": "country",
            "op": "IN",
            "val": [
              "China",
              "France",
              "Japan"
            ]
          }
        ],
        "relative_end": "today",
        "relative_start": "today",
        "time_grain_sqla": "P1D",
        "time_range_endpoints": [
          null
        ],
        "where": "string"
      },
      "filters": [
        {
          "col": "country",
          "op": "IN",
          "val": [
            "China",
            "France",
            "Japan"
          ]
        }
      ],
      "granularity": "string",
      "granularity_sqla": "string",
      "groupby": [
        "string"
      ],
      "having": "string",
      "having_filters": [
        {
          "col": "country",
          "op": "IN",
          "val": [
            "China",
            "France",
            "Japan"
          ]
        }
      ],
      "is_rowcount": true,
      "is_timeseries": true,
      "metrics": [
        null
      ],
      "order_desc": true,
      "orderby": [
        [
          "my_col_1",
          false
        ],
        [
          "my_col_2",
          true
        ]
      ],
      "post_processing": [
        {
          "operation": "aggregate",
          "options": {
            "aggregates": {
              "age_mean": {
                "column": "age",
                "operator": "mean"
              },
              "age_q1": {
                "column": "age",
                "operator": "percentile",
                "options": {
                  "q": 0.25
                }
              }
            },
            "groupby": [
              "country",
              "gender"
            ]
          }
        }
      ],
      "result_type": null,
      "row_limit": 0,
      "row_offset": 0,
      "time_offsets": [
        "string"
      ],
      "time_range": "Last week",
      "time_shift": "string",
      "timeseries_limit": 0,
      "timeseries_limit_metric": null,
      "url_params": {
        "property1": "string",
        "property2": "string"
      },
      "where": "string"
    }
  ],
  "result_format": null,
  "result_type": null
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|datasource|[ChartDataDatasource](#schemachartdatadatasource)|false|none|none|
|force|boolean|false|none|Should the queries be forced to load from the source. Default: `false`|
|queries|[[ChartDataQueryObject](#schemachartdataqueryobject)]|false|none|none|
|result_format|object|false|none|none|
|result_type|object|false|none|none|

<h2 id="tocS_ChartDataQueryObject">ChartDataQueryObject</h2>
<!-- backwards compatibility -->
<a id="schemachartdataqueryobject"></a>
<a id="schema_ChartDataQueryObject"></a>
<a id="tocSchartdataqueryobject"></a>
<a id="tocschartdataqueryobject"></a>

```json
{
  "annotation_layers": [
    {
      "annotationType": "FORMULA",
      "color": "string",
      "descriptionColumns": [
        "string"
      ],
      "hideLine": true,
      "intervalEndColumn": "string",
      "name": "string",
      "opacity": "",
      "overrides": {
        "property1": null,
        "property2": null
      },
      "show": true,
      "showMarkers": true,
      "sourceType": "",
      "style": "dashed",
      "timeColumn": "string",
      "titleColumn": "string",
      "value": null,
      "width": 0
    }
  ],
  "applied_time_extras": {
    "__time_range": "1 year ago : now"
  },
  "apply_fetch_values_predicate": true,
  "columns": [
    "string"
  ],
  "datasource": {
    "id": 0,
    "type": "druid"
  },
  "druid_time_origin": "string",
  "extras": {
    "druid_time_origin": "string",
    "having": "string",
    "having_druid": [
      {
        "col": "country",
        "op": "IN",
        "val": [
          "China",
          "France",
          "Japan"
        ]
      }
    ],
    "relative_end": "today",
    "relative_start": "today",
    "time_grain_sqla": "P1D",
    "time_range_endpoints": [
      null
    ],
    "where": "string"
  },
  "filters": [
    {
      "col": "country",
      "op": "IN",
      "val": [
        "China",
        "France",
        "Japan"
      ]
    }
  ],
  "granularity": "string",
  "granularity_sqla": "string",
  "groupby": [
    "string"
  ],
  "having": "string",
  "having_filters": [
    {
      "col": "country",
      "op": "IN",
      "val": [
        "China",
        "France",
        "Japan"
      ]
    }
  ],
  "is_rowcount": true,
  "is_timeseries": true,
  "metrics": [
    null
  ],
  "order_desc": true,
  "orderby": [
    [
      "my_col_1",
      false
    ],
    [
      "my_col_2",
      true
    ]
  ],
  "post_processing": [
    {
      "operation": "aggregate",
      "options": {
        "aggregates": {
          "age_mean": {
            "column": "age",
            "operator": "mean"
          },
          "age_q1": {
            "column": "age",
            "operator": "percentile",
            "options": {
              "q": 0.25
            }
          }
        },
        "groupby": [
          "country",
          "gender"
        ]
      }
    }
  ],
  "result_type": null,
  "row_limit": 0,
  "row_offset": 0,
  "time_offsets": [
    "string"
  ],
  "time_range": "Last week",
  "time_shift": "string",
  "timeseries_limit": 0,
  "timeseries_limit_metric": null,
  "url_params": {
    "property1": "string",
    "property2": "string"
  },
  "where": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|annotation_layers|[[AnnotationLayer](#schemaannotationlayer)]|false|none|Annotation layers to apply to chart|
|applied_time_extras|object \| null|false|none|A mapping of temporal extras that have been applied to the query|
|apply_fetch_values_predicate|boolean \| null|false|none|Add fetch values predicate (where clause) to query if defined in datasource|
|columns|[string]|false|none|Columns which to select in the query.|
|datasource|object \| null|false|none|none|
|druid_time_origin|string \| null|false|none|Starting point for time grain counting on legacy Druid datasources. Used to change e.g. Monday/Sunday first-day-of-week. This field is deprecated and should be passed to `extras` as `druid_time_origin`.|
|extras|object \| null|false|none|Extra parameters to add to the query.|
|filters|[[ChartDataFilter](#schemachartdatafilter)]|false|none|none|
|granularity|string \| null|false|none|Name of temporal column used for time filtering. For legacy Druid datasources this defines the time grain.|
|granularity_sqla|string \| null|false|none|Name of temporal column used for time filtering for SQL datasources. This field is deprecated, use `granularity` instead.|
|groupby|[string]|false|none|none|
|having|string \| null|false|none|HAVING clause to be added to aggregate queries using AND operator. This field is deprecated and should be passed to `extras`.|
|having_filters|[[ChartDataFilter](#schemachartdatafilter)]|false|none|HAVING filters to be added to legacy Druid datasource queries. This field is deprecated and should be passed to `extras` as `having_druid`.|
|is_rowcount|boolean \| null|false|none|Should the rowcount of the actual query be returned|
|is_timeseries|boolean \| null|false|none|Is the `query_object` a timeseries.|
|metrics|[object]|false|none|Aggregate expressions. Metrics can be passed as both references to datasource metrics (strings), or ad-hoc metricswhich are defined only within the query object. See `ChartDataAdhocMetricSchema` for the structure of ad-hoc metrics.|
|order_desc|boolean \| null|false|none|Reverse order. Default: `false`|
|orderby|[object]|false|none|Expects a list of lists where the first element is the column name which to sort by, and the second element is a boolean.|
|post_processing|[object \| null]|false|none|Post processing operations to be applied to the result set. Operations are applied to the result set in sequential order.|
|result_type|object \| null|false|none|none|
|row_limit|integer(int32) \| null|false|none|Maximum row count (0=disabled). Default: `config["ROW_LIMIT"]`|
|row_offset|integer(int32) \| null|false|none|Number of rows to skip. Default: `0`|
|time_offsets|[string]|false|none|none|
|time_range|string \| null|false|none|A time rage, either expressed as a colon separated string `since : until` or human readable freeform. Valid formats for `since` and `until` are: <br>- ISO 8601<br>- X days/years/hours/day/year/weeks<br>- X days/years/hours/day/year/weeks ago<br>- X days/years/hours/day/year/weeks from now<br><br>Additionally, the following freeform can be used:<br><br>- Last day<br>- Last week<br>- Last month<br>- Last quarter<br>- Last year<br>- No filter<br>- Last X seconds/minutes/hours/days/weeks/months/years<br>- Next X seconds/minutes/hours/days/weeks/months/years<br>|
|time_shift|string \| null|false|none|A human-readable date/time string. Please refer to [parsdatetime](https://github.com/bear/parsedatetime) documentation for details on valid values.|
|timeseries_limit|integer(int32) \| null|false|none|Maximum row count for timeseries queries. Default: `0`|
|timeseries_limit_metric|object \| null|false|none|Metric used to limit timeseries queries by.|
|url_params|object \| null|false|none|Optional query parameters passed to a dashboard or Explore view|
|where|string \| null|false|none|WHERE clause to be added to queries using AND operator.This field is deprecated and should be passed to `extras`.|

<h2 id="tocS_ChartDataResponseResult">ChartDataResponseResult</h2>
<!-- backwards compatibility -->
<a id="schemachartdataresponseresult"></a>
<a id="schema_ChartDataResponseResult"></a>
<a id="tocSchartdataresponseresult"></a>
<a id="tocschartdataresponseresult"></a>

```json
{
  "annotation_data": [
    {
      "property1": "string",
      "property2": "string"
    }
  ],
  "applied_filters": [
    {}
  ],
  "cache_key": "string",
  "cache_timeout": 0,
  "cached_dttm": "string",
  "data": [
    {}
  ],
  "error": "string",
  "is_cached": true,
  "query": "string",
  "rejected_filters": [
    {}
  ],
  "rowcount": 0,
  "stacktrace": "string",
  "status": "stopped"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|annotation_data|[object]|false|none|All requested annotation data|
|applied_filters|[object]|false|none|A list with applied filters|
|cache_key|string \| null|true|none|Unique cache key for query object|
|cache_timeout|integer(int32) \| null|true|none|Cache timeout in following order: custom timeout, datasource timeout, default config timeout.|
|cached_dttm|string \| null|true|none|Cache timestamp|
|data|[object]|false|none|A list with results|
|error|string \| null|false|none|Error|
|is_cached|boolean|true|none|Is the result cached|
|query|string|true|none|The executed query statement|
|rejected_filters|[object]|false|none|A list with rejected filters|
|rowcount|integer(int32)|false|none|Amount of rows in result set|
|stacktrace|string \| null|false|none|none|
|status|string|false|none|Status of the query|

#### Enumerated Values

|Property|Value|
|---|---|
|status|stopped|
|status|failed|
|status|pending|
|status|running|
|status|scheduled|
|status|success|
|status|timed_out|

<h2 id="tocS_ChartDataResponseSchema">ChartDataResponseSchema</h2>
<!-- backwards compatibility -->
<a id="schemachartdataresponseschema"></a>
<a id="schema_ChartDataResponseSchema"></a>
<a id="tocSchartdataresponseschema"></a>
<a id="tocschartdataresponseschema"></a>

```json
{
  "result": [
    {
      "annotation_data": [
        {
          "property1": "string",
          "property2": "string"
        }
      ],
      "applied_filters": [
        {}
      ],
      "cache_key": "string",
      "cache_timeout": 0,
      "cached_dttm": "string",
      "data": [
        {}
      ],
      "error": "string",
      "is_cached": true,
      "query": "string",
      "rejected_filters": [
        {}
      ],
      "rowcount": 0,
      "stacktrace": "string",
      "status": "stopped"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|result|[[ChartDataResponseResult](#schemachartdataresponseresult)]|false|none|A list of results for each corresponding query in the request.|

<h2 id="tocS_ChartDataRollingOptionsSchema">ChartDataRollingOptionsSchema</h2>
<!-- backwards compatibility -->
<a id="schemachartdatarollingoptionsschema"></a>
<a id="schema_ChartDataRollingOptionsSchema"></a>
<a id="tocSchartdatarollingoptionsschema"></a>
<a id="tocschartdatarollingoptionsschema"></a>

```json
{
  "center": false,
  "min_periods": 7,
  "rolling_type": "percentile",
  "rolling_type_options": {},
  "win_type": "boxcar",
  "window": 7
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|center|boolean|false|none|Should the label be at the center of the window. Default: `false`|
|min_periods|integer(int32)|false|none|The minimum amount of periods required for a row to be included in the result set.|
|rolling_type|string|true|none|Type of rolling window. Any numpy function will work.|
|rolling_type_options|object|false|none|none|
|win_type|string|false|none|Type of window function. See [SciPy window functions](https://docs.scipy.org/doc/scipy/reference/signal.windows.html#module-scipy.signal.windows) for more details. Some window functions require passing additional parameters to `rolling_type_options`. For instance, to use `gaussian`, the parameter `std` needs to be provided.|
|window|integer(int32)|true|none|Size of the rolling window in days.|

#### Enumerated Values

|Property|Value|
|---|---|
|rolling_type|average|
|rolling_type|argmin|
|rolling_type|argmax|
|rolling_type|cumsum|
|rolling_type|cumprod|
|rolling_type|max|
|rolling_type|mean|
|rolling_type|median|
|rolling_type|nansum|
|rolling_type|nanmin|
|rolling_type|nanmax|
|rolling_type|nanmean|
|rolling_type|nanmedian|
|rolling_type|nanpercentile|
|rolling_type|min|
|rolling_type|percentile|
|rolling_type|prod|
|rolling_type|product|
|rolling_type|std|
|rolling_type|sum|
|rolling_type|var|
|win_type|boxcar|
|win_type|triang|
|win_type|blackman|
|win_type|hamming|
|win_type|bartlett|
|win_type|parzen|
|win_type|bohman|
|win_type|blackmanharris|
|win_type|nuttall|
|win_type|barthann|
|win_type|kaiser|
|win_type|gaussian|
|win_type|general_gaussian|
|win_type|slepian|
|win_type|exponential|

<h2 id="tocS_ChartDataSelectOptionsSchema">ChartDataSelectOptionsSchema</h2>
<!-- backwards compatibility -->
<a id="schemachartdataselectoptionsschema"></a>
<a id="schema_ChartDataSelectOptionsSchema"></a>
<a id="tocSchartdataselectoptionsschema"></a>
<a id="tocschartdataselectoptionsschema"></a>

```json
{
  "columns": [
    "country",
    "gender",
    "age"
  ],
  "exclude": [
    "my_temp_column"
  ],
  "rename": [
    {
      "age": "average_age"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|columns|[string]|false|none|Columns which to select from the input data, in the desired order. If columns are renamed, the original column name should be referenced here.|
|exclude|[string]|false|none|Columns to exclude from selection.|
|rename|[object]|false|none|columns which to rename, mapping source column to target column. For instance, `{'y': 'y2'}` will rename the column `y` to `y2`.|

<h2 id="tocS_ChartDataSortOptionsSchema">ChartDataSortOptionsSchema</h2>
<!-- backwards compatibility -->
<a id="schemachartdatasortoptionsschema"></a>
<a id="schema_ChartDataSortOptionsSchema"></a>
<a id="tocSchartdatasortoptionsschema"></a>
<a id="tocschartdatasortoptionsschema"></a>

```json
{
  "aggregates": {
    "first_quantile": {
      "column": "my_col",
      "operator": "percentile",
      "options": {
        "q": 0.25
      }
    }
  },
  "columns": {
    "country": true,
    "gender": false
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|aggregates|object|false|none|The keys are the name of the aggregate column to be created, and the values specify the details of how to apply the aggregation. If an operator requires additional options, these can be passed here to be unpacked in the operator call. The following numpy operators are supported: average, argmin, argmax, cumsum, cumprod, max, mean, median, nansum, nanmin, nanmax, nanmean, nanmedian, min, percentile, prod, product, std, sum, var. Any options required by the operator can be passed to the `options` object.<br><br>In the example, a new column `first_quantile` is created based on values in the column `my_col` using the `percentile` operator with the `q=0.25` parameter.|
|columns|object|true|none|columns by by which to sort. The key specifies the column name, value specifies if sorting in ascending order.|

<h2 id="tocS_ChartEntityResponseSchema">ChartEntityResponseSchema</h2>
<!-- backwards compatibility -->
<a id="schemachartentityresponseschema"></a>
<a id="schema_ChartEntityResponseSchema"></a>
<a id="tocSchartentityresponseschema"></a>
<a id="tocschartentityresponseschema"></a>

```json
{
  "cache_timeout": 0,
  "changed_on": "string",
  "datasource": "string",
  "description": "string",
  "description_markeddown": "string",
  "form_data": {},
  "modified": "string",
  "slice_id": 0,
  "slice_name": "string",
  "slice_url": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cache_timeout|integer(int32)|false|none|Duration (in seconds) of the caching timeout for this chart. Note this defaults to the datasource/table timeout if undefined.|
|changed_on|string|false|none|The ISO date that the chart was last changed.|
|datasource|string|false|none|The datasource name.|
|description|string|false|none|A description of the chart propose.|
|description_markeddown|string|false|none|Sanitized HTML version of the chart description.|
|form_data|object|false|none|Form data from the Explore controls used to form the chart's data query.|
|modified|string|false|none|none|
|slice_id|integer(int32)|false|none|none|
|slice_name|string|false|none|The name of the chart.|
|slice_url|string|false|none|The URL of the chart.|

<h2 id="tocS_ChartFavStarResponseResult">ChartFavStarResponseResult</h2>
<!-- backwards compatibility -->
<a id="schemachartfavstarresponseresult"></a>
<a id="schema_ChartFavStarResponseResult"></a>
<a id="tocSchartfavstarresponseresult"></a>
<a id="tocschartfavstarresponseresult"></a>

```json
{
  "id": 0,
  "value": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|false|none|The Chart id|
|value|boolean|false|none|The FaveStar value|

<h2 id="tocS_ChartGetDatasourceObjectDataResponse">ChartGetDatasourceObjectDataResponse</h2>
<!-- backwards compatibility -->
<a id="schemachartgetdatasourceobjectdataresponse"></a>
<a id="schema_ChartGetDatasourceObjectDataResponse"></a>
<a id="tocSchartgetdatasourceobjectdataresponse"></a>
<a id="tocschartgetdatasourceobjectdataresponse"></a>

```json
{
  "datasource_id": 0,
  "datasource_type": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|datasource_id|integer(int32)|false|none|The datasource identifier|
|datasource_type|integer(int32)|false|none|The datasource type|

<h2 id="tocS_ChartGetDatasourceObjectResponse">ChartGetDatasourceObjectResponse</h2>
<!-- backwards compatibility -->
<a id="schemachartgetdatasourceobjectresponse"></a>
<a id="schema_ChartGetDatasourceObjectResponse"></a>
<a id="tocSchartgetdatasourceobjectresponse"></a>
<a id="tocschartgetdatasourceobjectresponse"></a>

```json
{
  "label": "string",
  "value": {
    "datasource_id": 0,
    "datasource_type": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|label|string|false|none|The name of the datasource|
|value|[ChartGetDatasourceObjectDataResponse](#schemachartgetdatasourceobjectdataresponse)|false|none|none|

<h2 id="tocS_ChartGetDatasourceResponseSchema">ChartGetDatasourceResponseSchema</h2>
<!-- backwards compatibility -->
<a id="schemachartgetdatasourceresponseschema"></a>
<a id="schema_ChartGetDatasourceResponseSchema"></a>
<a id="tocSchartgetdatasourceresponseschema"></a>
<a id="tocschartgetdatasourceresponseschema"></a>

```json
{
  "count": 0,
  "result": {
    "label": "string",
    "value": {
      "datasource_id": 0,
      "datasource_type": 0
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|integer(int32)|false|none|The total number of datasources|
|result|[ChartGetDatasourceObjectResponse](#schemachartgetdatasourceobjectresponse)|false|none|none|

<h2 id="tocS_ChartRestApi.get">ChartRestApi.get</h2>
<!-- backwards compatibility -->
<a id="schemachartrestapi.get"></a>
<a id="schema_ChartRestApi.get"></a>
<a id="tocSchartrestapi.get"></a>
<a id="tocschartrestapi.get"></a>

```json
{
  "cache_timeout": 0,
  "dashboards": {
    "dashboard_title": "string",
    "id": 0
  },
  "description": "string",
  "owners": {
    "first_name": "string",
    "id": 0,
    "last_name": "string",
    "username": "string"
  },
  "params": "string",
  "query_context": "string",
  "slice_name": "string",
  "viz_type": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cache_timeout|integer(int32) \| null|false|none|none|
|dashboards|[Meta9](#schemameta9)|false|none|none|
|description|string \| null|false|none|none|
|owners|[Meta10](#schemameta10)|false|none|none|
|params|string \| null|false|none|none|
|query_context|string \| null|false|none|none|
|slice_name|string \| null|false|none|none|
|viz_type|string \| null|false|none|none|

<h2 id="tocS_ChartRestApi.get_list">ChartRestApi.get_list</h2>
<!-- backwards compatibility -->
<a id="schemachartrestapi.get_list"></a>
<a id="schema_ChartRestApi.get_list"></a>
<a id="tocSchartrestapi.get_list"></a>
<a id="tocschartrestapi.get_list"></a>

```json
{
  "cache_timeout": 0,
  "changed_by": {
    "first_name": "string",
    "last_name": "string"
  },
  "changed_by_name": null,
  "changed_by_url": null,
  "changed_on_delta_humanized": null,
  "changed_on_utc": null,
  "created_by": {
    "first_name": "string",
    "id": 0,
    "last_name": "string"
  },
  "datasource_id": 0,
  "datasource_name_text": null,
  "datasource_type": "string",
  "datasource_url": null,
  "description": "string",
  "description_markeddown": null,
  "edit_url": null,
  "id": 0,
  "owners": {
    "first_name": "string",
    "id": 0,
    "last_name": "string",
    "username": "string"
  },
  "params": "string",
  "slice_name": "string",
  "table": {
    "default_endpoint": "string",
    "table_name": "string"
  },
  "thumbnail_url": null,
  "url": null,
  "viz_type": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cache_timeout|integer(int32) \| null|false|none|none|
|changed_by|[Meta8](#schemameta8)|false|none|none|
|changed_by_name|object|false|read-only|none|
|changed_by_url|object|false|read-only|none|
|changed_on_delta_humanized|object|false|read-only|none|
|changed_on_utc|object|false|read-only|none|
|created_by|[Meta5](#schemameta5)|false|none|none|
|datasource_id|integer(int32) \| null|false|none|none|
|datasource_name_text|object|false|read-only|none|
|datasource_type|string \| null|false|none|none|
|datasource_url|object|false|read-only|none|
|description|string \| null|false|none|none|
|description_markeddown|object|false|read-only|none|
|edit_url|object|false|read-only|none|
|id|integer(int32)|false|none|none|
|owners|[Meta7](#schemameta7)|false|none|none|
|params|string \| null|false|none|none|
|slice_name|string \| null|false|none|none|
|table|[Meta6](#schemameta6)|false|none|none|
|thumbnail_url|object|false|read-only|none|
|url|object|false|read-only|none|
|viz_type|string \| null|false|none|none|

<h2 id="tocS_ChartRestApi.post">ChartRestApi.post</h2>
<!-- backwards compatibility -->
<a id="schemachartrestapi.post"></a>
<a id="schema_ChartRestApi.post"></a>
<a id="tocSchartrestapi.post"></a>
<a id="tocschartrestapi.post"></a>

```json
{
  "cache_timeout": 0,
  "dashboards": [
    0
  ],
  "datasource_id": 0,
  "datasource_name": "string",
  "datasource_type": "druid",
  "description": "string",
  "owners": [
    0
  ],
  "params": "string",
  "query_context": "string",
  "slice_name": "string",
  "viz_type": [
    "bar",
    "line_multi",
    "area",
    "table"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cache_timeout|integer(int32) \| null|false|none|Duration (in seconds) of the caching timeout for this chart. Note this defaults to the datasource/table timeout if undefined.|
|dashboards|[integer(int32)]|false|none|none|
|datasource_id|integer(int32)|true|none|The id of the dataset/datasource this new chart will use. A complete datasource identification needs `datasouce_id` and `datasource_type`.|
|datasource_name|string \| null|false|none|The datasource name.|
|datasource_type|string|true|none|The type of dataset/datasource identified on `datasource_id`.|
|description|string \| null|false|none|A description of the chart propose.|
|owners|[integer(int32)]|false|none|none|
|params|string \| null|false|none|Parameters are generated dynamically when clicking the save or overwrite button in the explore view. This JSON object for power users who may want to alter specific parameters.|
|query_context|string \| null|false|none|The query context represents the queries that need to run in order to generate the data the visualization, and in what format the data should be returned.|
|slice_name|string|true|none|The name of the chart.|
|viz_type|string|false|none|The type of chart visualization used.|

#### Enumerated Values

|Property|Value|
|---|---|
|datasource_type|druid|
|datasource_type|table|
|datasource_type|view|

<h2 id="tocS_ChartRestApi.put">ChartRestApi.put</h2>
<!-- backwards compatibility -->
<a id="schemachartrestapi.put"></a>
<a id="schema_ChartRestApi.put"></a>
<a id="tocSchartrestapi.put"></a>
<a id="tocschartrestapi.put"></a>

```json
{
  "cache_timeout": 0,
  "dashboards": [
    0
  ],
  "datasource_id": 0,
  "datasource_type": "druid",
  "description": "string",
  "owners": [
    0
  ],
  "params": "string",
  "query_context": "string",
  "slice_name": "string",
  "viz_type": [
    "bar",
    "line_multi",
    "area",
    "table"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cache_timeout|integer(int32) \| null|false|none|Duration (in seconds) of the caching timeout for this chart. Note this defaults to the datasource/table timeout if undefined.|
|dashboards|[integer(int32)]|false|none|none|
|datasource_id|integer(int32) \| null|false|none|The id of the dataset/datasource this new chart will use. A complete datasource identification needs `datasouce_id` and `datasource_type`.|
|datasource_type|string \| null|false|none|The type of dataset/datasource identified on `datasource_id`.|
|description|string \| null|false|none|A description of the chart propose.|
|owners|[integer(int32)]|false|none|none|
|params|string \| null|false|none|Parameters are generated dynamically when clicking the save or overwrite button in the explore view. This JSON object for power users who may want to alter specific parameters.|
|query_context|string \| null|false|none|The query context represents the queries that need to run in order to generate the data the visualization, and in what format the data should be returned.|
|slice_name|string \| null|false|none|The name of the chart.|
|viz_type|string \| null|false|none|The type of chart visualization used.|

#### Enumerated Values

|Property|Value|
|---|---|
|datasource_type|druid|
|datasource_type|table|
|datasource_type|view|

<h2 id="tocS_CssTemplateRestApi.get">CssTemplateRestApi.get</h2>
<!-- backwards compatibility -->
<a id="schemacsstemplaterestapi.get"></a>
<a id="schema_CssTemplateRestApi.get"></a>
<a id="tocScsstemplaterestapi.get"></a>
<a id="tocscsstemplaterestapi.get"></a>

```json
{
  "created_by": {
    "first_name": "string",
    "id": 0,
    "last_name": "string"
  },
  "css": "string",
  "id": 0,
  "template_name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|created_by|[Meta13](#schemameta13)|false|none|none|
|css|string \| null|false|none|none|
|id|integer(int32)|false|none|none|
|template_name|string \| null|false|none|none|

<h2 id="tocS_CssTemplateRestApi.get_list">CssTemplateRestApi.get_list</h2>
<!-- backwards compatibility -->
<a id="schemacsstemplaterestapi.get_list"></a>
<a id="schema_CssTemplateRestApi.get_list"></a>
<a id="tocScsstemplaterestapi.get_list"></a>
<a id="tocscsstemplaterestapi.get_list"></a>

```json
{
  "changed_by": {
    "active": true,
    "changed_on": "1970-01-01T00:00:00Z",
    "created_on": "1970-01-01T00:00:00Z",
    "email": "string",
    "fail_login_count": 0,
    "first_name": "string",
    "id": 0,
    "last_login": "1970-01-01T00:00:00Z",
    "last_name": "string",
    "login_count": 0,
    "password": "string",
    "username": "string"
  },
  "changed_on_delta_humanized": null,
  "created_by": {
    "first_name": "string",
    "id": 0,
    "last_name": "string"
  },
  "created_on": "1970-01-01T00:00:00Z",
  "css": "string",
  "id": 0,
  "template_name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|changed_by|[Meta12](#schemameta12)|false|none|none|
|changed_on_delta_humanized|object|false|read-only|none|
|created_by|[Meta11](#schemameta11)|false|none|none|
|created_on|string(date-time) \| null|false|none|none|
|css|string \| null|false|none|none|
|id|integer(int32)|false|none|none|
|template_name|string \| null|false|none|none|

<h2 id="tocS_CssTemplateRestApi.post">CssTemplateRestApi.post</h2>
<!-- backwards compatibility -->
<a id="schemacsstemplaterestapi.post"></a>
<a id="schema_CssTemplateRestApi.post"></a>
<a id="tocScsstemplaterestapi.post"></a>
<a id="tocscsstemplaterestapi.post"></a>

```json
{
  "css": "string",
  "template_name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|css|string \| null|false|none|none|
|template_name|string \| null|false|none|none|

<h2 id="tocS_CssTemplateRestApi.put">CssTemplateRestApi.put</h2>
<!-- backwards compatibility -->
<a id="schemacsstemplaterestapi.put"></a>
<a id="schema_CssTemplateRestApi.put"></a>
<a id="tocScsstemplaterestapi.put"></a>
<a id="tocscsstemplaterestapi.put"></a>

```json
{
  "css": "string",
  "template_name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|css|string \| null|false|none|none|
|template_name|string \| null|false|none|none|

<h2 id="tocS_DashboardDatasetSchema">DashboardDatasetSchema</h2>
<!-- backwards compatibility -->
<a id="schemadashboarddatasetschema"></a>
<a id="schema_DashboardDatasetSchema"></a>
<a id="tocSdashboarddatasetschema"></a>
<a id="tocsdashboarddatasetschema"></a>

```json
{
  "cache_timeout": 0,
  "column_formats": {},
  "column_types": [
    0
  ],
  "columns": [
    {}
  ],
  "database": {
    "allow_multi_schema_metadata_fetch": true,
    "allows_cost_estimate": true,
    "allows_subquery": true,
    "allows_virtual_table_explore": true,
    "backend": "string",
    "explore_database_id": 0,
    "id": 0,
    "name": "string"
  },
  "datasource_name": "string",
  "default_endpoint": "string",
  "edit_url": "string",
  "fetch_values_predicate": "string",
  "filter_select": true,
  "filter_select_enabled": true,
  "granularity_sqla": [
    [
      "string"
    ]
  ],
  "health_check_message": "string",
  "id": 0,
  "is_sqllab_view": true,
  "main_dttm_col": "string",
  "metrics": [
    {}
  ],
  "name": "string",
  "offset": 0,
  "order_by_choices": [
    [
      "string"
    ]
  ],
  "owners": [
    0
  ],
  "params": "string",
  "perm": "string",
  "schema": "string",
  "select_star": "string",
  "sql": "string",
  "table_name": "string",
  "template_params": "string",
  "time_grain_sqla": [
    [
      "string"
    ]
  ],
  "type": "string",
  "uid": "string",
  "verbose_map": {
    "property1": "string",
    "property2": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cache_timeout|integer(int32)|false|none|none|
|column_formats|object|false|none|none|
|column_types|[integer(int32)]|false|none|none|
|columns|[object]|false|none|none|
|database|[Database](#schemadatabase)|false|none|none|
|datasource_name|string|false|none|none|
|default_endpoint|string|false|none|none|
|edit_url|string|false|none|none|
|fetch_values_predicate|string|false|none|none|
|filter_select|boolean|false|none|none|
|filter_select_enabled|boolean|false|none|none|
|granularity_sqla|[[string]]|false|none|none|
|health_check_message|string|false|none|none|
|id|integer(int32)|false|none|none|
|is_sqllab_view|boolean|false|none|none|
|main_dttm_col|string|false|none|none|
|metrics|[object]|false|none|none|
|name|string|false|none|none|
|offset|integer(int32)|false|none|none|
|order_by_choices|[[string]]|false|none|none|
|owners|[integer(int32)]|false|none|none|
|params|string|false|none|none|
|perm|string|false|none|none|
|schema|string|false|none|none|
|select_star|string|false|none|none|
|sql|string|false|none|none|
|table_name|string|false|none|none|
|template_params|string|false|none|none|
|time_grain_sqla|[[string]]|false|none|none|
|type|string|false|none|none|
|uid|string|false|none|none|
|verbose_map|object|false|none|none|

<h2 id="tocS_DashboardGetResponseSchema">DashboardGetResponseSchema</h2>
<!-- backwards compatibility -->
<a id="schemadashboardgetresponseschema"></a>
<a id="schema_DashboardGetResponseSchema"></a>
<a id="tocSdashboardgetresponseschema"></a>
<a id="tocsdashboardgetresponseschema"></a>

```json
{
  "changed_by": {
    "first_name": "string",
    "id": 0,
    "last_name": "string",
    "username": "string"
  },
  "changed_by_name": "string",
  "changed_by_url": "string",
  "changed_on": "1970-01-01T00:00:00Z",
  "changed_on_delta_humanized": "string",
  "charts": [
    "string"
  ],
  "css": "string",
  "dashboard_title": "string",
  "id": 0,
  "json_metadata": "string",
  "owners": [
    {
      "first_name": "string",
      "id": 0,
      "last_name": "string",
      "username": "string"
    }
  ],
  "position_json": "string",
  "published": true,
  "roles": [
    {
      "id": 0,
      "name": "string"
    }
  ],
  "slug": "string",
  "table_names": "string",
  "thumbnail_url": "string",
  "url": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|changed_by|[User](#schemauser)|false|none|none|
|changed_by_name|string|false|none|none|
|changed_by_url|string|false|none|none|
|changed_on|string(date-time)|false|none|none|
|changed_on_delta_humanized|string|false|none|none|
|charts|[string]|false|none|none|
|css|string|false|none|Override CSS for the dashboard.|
|dashboard_title|string|false|none|A title for the dashboard.|
|id|integer(int32)|false|none|none|
|json_metadata|string|false|none|This JSON object is generated dynamically when clicking the save or overwrite button in the dashboard view. It is exposed here for reference and for power users who may want to alter  specific parameters.|
|owners|[[User](#schemauser)]|false|none|none|
|position_json|string|false|none|This json object describes the positioning of the widgets in the dashboard. It is dynamically generated when adjusting the widgets size and positions by using drag & drop in the dashboard view|
|published|boolean|false|none|none|
|roles|[[Roles](#schemaroles)]|false|none|none|
|slug|string|false|none|none|
|table_names|string|false|none|none|
|thumbnail_url|string|false|none|none|
|url|string|false|none|none|

<h2 id="tocS_DashboardRestApi.get">DashboardRestApi.get</h2>
<!-- backwards compatibility -->
<a id="schemadashboardrestapi.get"></a>
<a id="schema_DashboardRestApi.get"></a>
<a id="tocSdashboardrestapi.get"></a>
<a id="tocsdashboardrestapi.get"></a>

```json
{
  "id": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|false|none|none|

<h2 id="tocS_DashboardRestApi.get_list">DashboardRestApi.get_list</h2>
<!-- backwards compatibility -->
<a id="schemadashboardrestapi.get_list"></a>
<a id="schema_DashboardRestApi.get_list"></a>
<a id="tocSdashboardrestapi.get_list"></a>
<a id="tocsdashboardrestapi.get_list"></a>

```json
{
  "changed_by": {
    "first_name": "string",
    "id": 0,
    "last_name": "string",
    "username": "string"
  },
  "changed_by_name": null,
  "changed_by_url": null,
  "changed_on_delta_humanized": null,
  "changed_on_utc": null,
  "created_by": {
    "first_name": "string",
    "id": 0,
    "last_name": "string"
  },
  "css": "string",
  "dashboard_title": "string",
  "id": 0,
  "json_metadata": "string",
  "owners": {
    "first_name": "string",
    "id": 0,
    "last_name": "string",
    "username": "string"
  },
  "position_json": "string",
  "published": true,
  "roles": {
    "id": 0,
    "name": "string"
  },
  "slug": "string",
  "status": null,
  "thumbnail_url": null,
  "url": null
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|changed_by|[Meta15](#schemameta15)|false|none|none|
|changed_by_name|object|false|read-only|none|
|changed_by_url|object|false|read-only|none|
|changed_on_delta_humanized|object|false|read-only|none|
|changed_on_utc|object|false|read-only|none|
|created_by|[Meta14](#schemameta14)|false|none|none|
|css|string \| null|false|none|none|
|dashboard_title|string \| null|false|none|none|
|id|integer(int32)|false|none|none|
|json_metadata|string \| null|false|none|none|
|owners|[Meta17](#schemameta17)|false|none|none|
|position_json|string \| null|false|none|none|
|published|boolean \| null|false|none|none|
|roles|[Meta16](#schemameta16)|false|none|none|
|slug|string \| null|false|none|none|
|status|object|false|read-only|none|
|thumbnail_url|object|false|read-only|none|
|url|object|false|read-only|none|

<h2 id="tocS_DashboardRestApi.post">DashboardRestApi.post</h2>
<!-- backwards compatibility -->
<a id="schemadashboardrestapi.post"></a>
<a id="schema_DashboardRestApi.post"></a>
<a id="tocSdashboardrestapi.post"></a>
<a id="tocsdashboardrestapi.post"></a>

```json
{
  "css": "string",
  "dashboard_title": "string",
  "json_metadata": "string",
  "owners": [
    0
  ],
  "position_json": "string",
  "published": true,
  "roles": [
    0
  ],
  "slug": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|css|string|false|none|none|
|dashboard_title|string \| null|false|none|A title for the dashboard.|
|json_metadata|string|false|none|This JSON object is generated dynamically when clicking the save or overwrite button in the dashboard view. It is exposed here for reference and for power users who may want to alter  specific parameters.|
|owners|[integer(int32)]|false|none|none|
|position_json|string|false|none|This json object describes the positioning of the widgets in the dashboard. It is dynamically generated when adjusting the widgets size and positions by using drag & drop in the dashboard view|
|published|boolean|false|none|Determines whether or not this dashboard is visible in the list of all dashboards.|
|roles|[integer(int32)]|false|none|none|
|slug|string \| null|false|none|Unique identifying part for the web address of the dashboard.|

<h2 id="tocS_DashboardRestApi.put">DashboardRestApi.put</h2>
<!-- backwards compatibility -->
<a id="schemadashboardrestapi.put"></a>
<a id="schema_DashboardRestApi.put"></a>
<a id="tocSdashboardrestapi.put"></a>
<a id="tocsdashboardrestapi.put"></a>

```json
{
  "css": "string",
  "dashboard_title": "string",
  "json_metadata": "string",
  "owners": [
    0
  ],
  "position_json": "string",
  "published": true,
  "roles": [
    0
  ],
  "slug": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|css|string \| null|false|none|Override CSS for the dashboard.|
|dashboard_title|string \| null|false|none|A title for the dashboard.|
|json_metadata|string \| null|false|none|This JSON object is generated dynamically when clicking the save or overwrite button in the dashboard view. It is exposed here for reference and for power users who may want to alter  specific parameters.|
|owners|[integer(int32) \| null]|false|none|none|
|position_json|string \| null|false|none|This json object describes the positioning of the widgets in the dashboard. It is dynamically generated when adjusting the widgets size and positions by using drag & drop in the dashboard view|
|published|boolean \| null|false|none|Determines whether or not this dashboard is visible in the list of all dashboards.|
|roles|[integer(int32) \| null]|false|none|none|
|slug|string \| null|false|none|Unique identifying part for the web address of the dashboard.|

<h2 id="tocS_Database">Database</h2>
<!-- backwards compatibility -->
<a id="schemadatabase"></a>
<a id="schema_Database"></a>
<a id="tocSdatabase"></a>
<a id="tocsdatabase"></a>

```json
{
  "allow_multi_schema_metadata_fetch": true,
  "allows_cost_estimate": true,
  "allows_subquery": true,
  "allows_virtual_table_explore": true,
  "backend": "string",
  "explore_database_id": 0,
  "id": 0,
  "name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|allow_multi_schema_metadata_fetch|boolean|false|none|none|
|allows_cost_estimate|boolean|false|none|none|
|allows_subquery|boolean|false|none|none|
|allows_virtual_table_explore|boolean|false|none|none|
|backend|string|false|none|none|
|explore_database_id|integer(int32)|false|none|none|
|id|integer(int32)|false|none|none|
|name|string|false|none|none|

<h2 id="tocS_DatabaseFunctionNamesResponse">DatabaseFunctionNamesResponse</h2>
<!-- backwards compatibility -->
<a id="schemadatabasefunctionnamesresponse"></a>
<a id="schema_DatabaseFunctionNamesResponse"></a>
<a id="tocSdatabasefunctionnamesresponse"></a>
<a id="tocsdatabasefunctionnamesresponse"></a>

```json
{
  "function_names": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|function_names|[string]|false|none|none|

<h2 id="tocS_DatabaseRelatedChart">DatabaseRelatedChart</h2>
<!-- backwards compatibility -->
<a id="schemadatabaserelatedchart"></a>
<a id="schema_DatabaseRelatedChart"></a>
<a id="tocSdatabaserelatedchart"></a>
<a id="tocsdatabaserelatedchart"></a>

```json
{
  "id": 0,
  "slice_name": "string",
  "viz_type": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|false|none|none|
|slice_name|string|false|none|none|
|viz_type|string|false|none|none|

<h2 id="tocS_DatabaseRelatedCharts">DatabaseRelatedCharts</h2>
<!-- backwards compatibility -->
<a id="schemadatabaserelatedcharts"></a>
<a id="schema_DatabaseRelatedCharts"></a>
<a id="tocSdatabaserelatedcharts"></a>
<a id="tocsdatabaserelatedcharts"></a>

```json
{
  "count": 0,
  "result": [
    {
      "id": 0,
      "slice_name": "string",
      "viz_type": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|integer(int32)|false|none|Chart count|
|result|[[DatabaseRelatedChart](#schemadatabaserelatedchart)]|false|none|A list of dashboards|

<h2 id="tocS_DatabaseRelatedDashboard">DatabaseRelatedDashboard</h2>
<!-- backwards compatibility -->
<a id="schemadatabaserelateddashboard"></a>
<a id="schema_DatabaseRelatedDashboard"></a>
<a id="tocSdatabaserelateddashboard"></a>
<a id="tocsdatabaserelateddashboard"></a>

```json
{
  "id": 0,
  "json_metadata": {},
  "slug": "string",
  "title": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|false|none|none|
|json_metadata|object|false|none|none|
|slug|string|false|none|none|
|title|string|false|none|none|

<h2 id="tocS_DatabaseRelatedDashboards">DatabaseRelatedDashboards</h2>
<!-- backwards compatibility -->
<a id="schemadatabaserelateddashboards"></a>
<a id="schema_DatabaseRelatedDashboards"></a>
<a id="tocSdatabaserelateddashboards"></a>
<a id="tocsdatabaserelateddashboards"></a>

```json
{
  "count": 0,
  "result": [
    {
      "id": 0,
      "json_metadata": {},
      "slug": "string",
      "title": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|integer(int32)|false|none|Dashboard count|
|result|[[DatabaseRelatedDashboard](#schemadatabaserelateddashboard)]|false|none|A list of dashboards|

<h2 id="tocS_DatabaseRelatedObjectsResponse">DatabaseRelatedObjectsResponse</h2>
<!-- backwards compatibility -->
<a id="schemadatabaserelatedobjectsresponse"></a>
<a id="schema_DatabaseRelatedObjectsResponse"></a>
<a id="tocSdatabaserelatedobjectsresponse"></a>
<a id="tocsdatabaserelatedobjectsresponse"></a>

```json
{
  "charts": {
    "count": 0,
    "result": [
      {
        "id": 0,
        "slice_name": "string",
        "viz_type": "string"
      }
    ]
  },
  "dashboards": {
    "count": 0,
    "result": [
      {
        "id": 0,
        "json_metadata": {},
        "slug": "string",
        "title": "string"
      }
    ]
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|charts|[DatabaseRelatedCharts](#schemadatabaserelatedcharts)|false|none|none|
|dashboards|[DatabaseRelatedDashboards](#schemadatabaserelateddashboards)|false|none|none|

<h2 id="tocS_DatabaseRestApi.get">DatabaseRestApi.get</h2>
<!-- backwards compatibility -->
<a id="schemadatabaserestapi.get"></a>
<a id="schema_DatabaseRestApi.get"></a>
<a id="tocSdatabaserestapi.get"></a>
<a id="tocsdatabaserestapi.get"></a>

```json
{
  "allow_csv_upload": true,
  "allow_ctas": true,
  "allow_cvas": true,
  "allow_dml": true,
  "allow_multi_schema_metadata_fetch": true,
  "allow_run_async": true,
  "backend": null,
  "cache_timeout": 0,
  "configuration_method": "string",
  "database_name": "string",
  "encrypted_extra": "string",
  "expose_in_sqllab": true,
  "extra": "string",
  "force_ctas_schema": "string",
  "id": 0,
  "impersonate_user": true,
  "parameters": null,
  "server_cert": "string",
  "sqlalchemy_uri": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|allow_csv_upload|boolean \| null|false|none|none|
|allow_ctas|boolean \| null|false|none|none|
|allow_cvas|boolean \| null|false|none|none|
|allow_dml|boolean \| null|false|none|none|
|allow_multi_schema_metadata_fetch|boolean \| null|false|none|none|
|allow_run_async|boolean \| null|false|none|none|
|backend|object|false|read-only|none|
|cache_timeout|integer(int32) \| null|false|none|none|
|configuration_method|string \| null|false|none|none|
|database_name|string|true|none|none|
|encrypted_extra|string \| null|false|none|none|
|expose_in_sqllab|boolean \| null|false|none|none|
|extra|string \| null|false|none|none|
|force_ctas_schema|string \| null|false|none|none|
|id|integer(int32)|false|none|none|
|impersonate_user|boolean \| null|false|none|none|
|parameters|object|false|read-only|none|
|server_cert|string \| null|false|none|none|
|sqlalchemy_uri|string|true|none|none|

<h2 id="tocS_DatabaseRestApi.get_list">DatabaseRestApi.get_list</h2>
<!-- backwards compatibility -->
<a id="schemadatabaserestapi.get_list"></a>
<a id="schema_DatabaseRestApi.get_list"></a>
<a id="tocSdatabaserestapi.get_list"></a>
<a id="tocsdatabaserestapi.get_list"></a>

```json
{
  "allow_csv_upload": true,
  "allow_ctas": true,
  "allow_cvas": true,
  "allow_dml": true,
  "allow_multi_schema_metadata_fetch": true,
  "allow_run_async": true,
  "allows_cost_estimate": null,
  "allows_subquery": null,
  "allows_virtual_table_explore": null,
  "backend": null,
  "changed_on": "1970-01-01T00:00:00Z",
  "changed_on_delta_humanized": null,
  "created_by": {
    "first_name": "string",
    "last_name": "string"
  },
  "database_name": "string",
  "explore_database_id": null,
  "expose_in_sqllab": true,
  "extra": "string",
  "force_ctas_schema": "string",
  "id": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|allow_csv_upload|boolean \| null|false|none|none|
|allow_ctas|boolean \| null|false|none|none|
|allow_cvas|boolean \| null|false|none|none|
|allow_dml|boolean \| null|false|none|none|
|allow_multi_schema_metadata_fetch|boolean \| null|false|none|none|
|allow_run_async|boolean \| null|false|none|none|
|allows_cost_estimate|object|false|read-only|none|
|allows_subquery|object|false|read-only|none|
|allows_virtual_table_explore|object|false|read-only|none|
|backend|object|false|read-only|none|
|changed_on|string(date-time) \| null|false|none|none|
|changed_on_delta_humanized|object|false|read-only|none|
|created_by|[Meta18](#schemameta18)|false|none|none|
|database_name|string|true|none|none|
|explore_database_id|object|false|read-only|none|
|expose_in_sqllab|boolean \| null|false|none|none|
|extra|string \| null|false|none|none|
|force_ctas_schema|string \| null|false|none|none|
|id|integer(int32)|false|none|none|

<h2 id="tocS_DatabaseRestApi.post">DatabaseRestApi.post</h2>
<!-- backwards compatibility -->
<a id="schemadatabaserestapi.post"></a>
<a id="schema_DatabaseRestApi.post"></a>
<a id="tocSdatabaserestapi.post"></a>
<a id="tocsdatabaserestapi.post"></a>

```json
{
  "allow_csv_upload": true,
  "allow_ctas": true,
  "allow_cvas": true,
  "allow_dml": true,
  "allow_multi_schema_metadata_fetch": true,
  "allow_run_async": true,
  "cache_timeout": 0,
  "configuration_method": "sqlalchemy_form",
  "database_name": "string",
  "encrypted_extra": "string",
  "engine": "string",
  "expose_in_sqllab": true,
  "extra": "string",
  "force_ctas_schema": "string",
  "impersonate_user": true,
  "parameters": {
    "property1": null,
    "property2": null
  },
  "server_cert": "string",
  "sqlalchemy_uri": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|allow_csv_upload|boolean|false|none|Allow to upload CSV file data into this databaseIf selected, please set the schemas allowed for csv upload in Extra.|
|allow_ctas|boolean|false|none|Allow CREATE TABLE AS option in SQL Lab|
|allow_cvas|boolean|false|none|Allow CREATE VIEW AS option in SQL Lab|
|allow_dml|boolean|false|none|Allow users to run non-SELECT statements (UPDATE, DELETE, CREATE, ...) in SQL Lab|
|allow_multi_schema_metadata_fetch|boolean|false|none|Allow SQL Lab to fetch a list of all tables and all views across all database schemas. For large data warehouse with thousands of tables, this can be expensive and put strain on the system.|
|allow_run_async|boolean|false|none|Operate the database in asynchronous mode, meaning  that the queries are executed on remote workers as opposed to on the web server itself. This assumes that you have a Celery worker setup as well as a results backend. Refer to the installation docs for more information.|
|cache_timeout|integer(int32) \| null|false|none|Duration (in seconds) of the caching timeout for charts of this database. A timeout of 0 indicates that the cache never expires. Note this defaults to the global timeout if undefined.|
|configuration_method|object|false|none|Configuration_method is used on the frontend to inform the backend whether to explode parameters or to provide only a sqlalchemy_uri.|
|database_name|string|true|none|A database name to identify this connection.|
|encrypted_extra|string \| null|false|none|<p>JSON string containing additional connection configuration.<br>This is used to provide connection information for systems like Hive, Presto, and BigQuery, which do not conform to the username:password syntax normally used by SQLAlchemy.</p>|
|engine|string \| null|false|none|SQLAlchemy engine to use|
|expose_in_sqllab|boolean|false|none|Expose this database to SQLLab|
|extra|string|false|none|<p>JSON string containing extra configuration elements.<br>1. The <code>engine_params</code> object gets unpacked into the <a href="https://docs.sqlalchemy.org/en/latest/core/engines.html#sqlalchemy.create_engine">sqlalchemy.create_engine</a> call, while the <code>metadata_params</code> gets unpacked into the <a href="https://docs.sqlalchemy.org/en/rel_1_0/core/metadata.html#sqlalchemy.schema.MetaData">sqlalchemy.MetaData</a> call.<br>2. The <code>metadata_cache_timeout</code> is a cache timeout setting in seconds for metadata fetch of this database. Specify it as <strong>"metadata_cache_timeout": {"schema_cache_timeout": 600, "table_cache_timeout": 600}</strong>. If unset, cache will not be enabled for the functionality. A timeout of 0 indicates that the cache never expires.<br>3. The <code>schemas_allowed_for_csv_upload</code> is a comma separated list of schemas that CSVs are allowed to upload to. Specify it as <strong>"schemas_allowed_for_csv_upload": ["public", "csv_upload"]</strong>. If database flavor does not support schema or any schema is allowed to be accessed, just leave the list empty<br>4. the <code>version</code> field is a string specifying the this db's version. This should be used with Presto DBs so that the syntax is correct<br>5. The <code>allows_virtual_table_explore</code> field is a boolean specifying whether or not the Explore button in SQL Lab results is shown.</p>|
|force_ctas_schema|string \| null|false|none|When allowing CREATE TABLE AS option in SQL Lab, this option forces the table to be created in this schema|
|impersonate_user|boolean|false|none|If Presto, all the queries in SQL Lab are going to be executed as the currently logged on user who must have permission to run them.<br/>If Hive and hive.server2.enable.doAs is enabled, will run the queries as service account, but impersonate the currently logged on user via hive.server2.proxy.user property.|
|parameters|object|false|none|DB-specific parameters for configuration|
|server_cert|string \| null|false|none|<p>Optional CA_BUNDLE contents to validate HTTPS requests. Only available on certain database engines.</p>|
|sqlalchemy_uri|string|false|none|<p>Refer to the <a href="https://docs.sqlalchemy.org/en/rel_1_2/core/engines.html#database-urls">SqlAlchemy docs</a> for more information on how to structure your URI.</p>|

<h2 id="tocS_DatabaseRestApi.put">DatabaseRestApi.put</h2>
<!-- backwards compatibility -->
<a id="schemadatabaserestapi.put"></a>
<a id="schema_DatabaseRestApi.put"></a>
<a id="tocSdatabaserestapi.put"></a>
<a id="tocsdatabaserestapi.put"></a>

```json
{
  "allow_csv_upload": true,
  "allow_ctas": true,
  "allow_cvas": true,
  "allow_dml": true,
  "allow_multi_schema_metadata_fetch": true,
  "allow_run_async": true,
  "cache_timeout": 0,
  "configuration_method": "sqlalchemy_form",
  "database_name": "string",
  "encrypted_extra": "string",
  "engine": "string",
  "expose_in_sqllab": true,
  "extra": "string",
  "force_ctas_schema": "string",
  "impersonate_user": true,
  "parameters": {
    "property1": null,
    "property2": null
  },
  "server_cert": "string",
  "sqlalchemy_uri": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|allow_csv_upload|boolean|false|none|Allow to upload CSV file data into this databaseIf selected, please set the schemas allowed for csv upload in Extra.|
|allow_ctas|boolean|false|none|Allow CREATE TABLE AS option in SQL Lab|
|allow_cvas|boolean|false|none|Allow CREATE VIEW AS option in SQL Lab|
|allow_dml|boolean|false|none|Allow users to run non-SELECT statements (UPDATE, DELETE, CREATE, ...) in SQL Lab|
|allow_multi_schema_metadata_fetch|boolean|false|none|Allow SQL Lab to fetch a list of all tables and all views across all database schemas. For large data warehouse with thousands of tables, this can be expensive and put strain on the system.|
|allow_run_async|boolean|false|none|Operate the database in asynchronous mode, meaning  that the queries are executed on remote workers as opposed to on the web server itself. This assumes that you have a Celery worker setup as well as a results backend. Refer to the installation docs for more information.|
|cache_timeout|integer(int32) \| null|false|none|Duration (in seconds) of the caching timeout for charts of this database. A timeout of 0 indicates that the cache never expires. Note this defaults to the global timeout if undefined.|
|configuration_method|object|false|none|Configuration_method is used on the frontend to inform the backend whether to explode parameters or to provide only a sqlalchemy_uri.|
|database_name|string \| null|false|none|A database name to identify this connection.|
|encrypted_extra|string \| null|false|none|<p>JSON string containing additional connection configuration.<br>This is used to provide connection information for systems like Hive, Presto, and BigQuery, which do not conform to the username:password syntax normally used by SQLAlchemy.</p>|
|engine|string \| null|false|none|SQLAlchemy engine to use|
|expose_in_sqllab|boolean|false|none|Expose this database to SQLLab|
|extra|string|false|none|<p>JSON string containing extra configuration elements.<br>1. The <code>engine_params</code> object gets unpacked into the <a href="https://docs.sqlalchemy.org/en/latest/core/engines.html#sqlalchemy.create_engine">sqlalchemy.create_engine</a> call, while the <code>metadata_params</code> gets unpacked into the <a href="https://docs.sqlalchemy.org/en/rel_1_0/core/metadata.html#sqlalchemy.schema.MetaData">sqlalchemy.MetaData</a> call.<br>2. The <code>metadata_cache_timeout</code> is a cache timeout setting in seconds for metadata fetch of this database. Specify it as <strong>"metadata_cache_timeout": {"schema_cache_timeout": 600, "table_cache_timeout": 600}</strong>. If unset, cache will not be enabled for the functionality. A timeout of 0 indicates that the cache never expires.<br>3. The <code>schemas_allowed_for_csv_upload</code> is a comma separated list of schemas that CSVs are allowed to upload to. Specify it as <strong>"schemas_allowed_for_csv_upload": ["public", "csv_upload"]</strong>. If database flavor does not support schema or any schema is allowed to be accessed, just leave the list empty<br>4. the <code>version</code> field is a string specifying the this db's version. This should be used with Presto DBs so that the syntax is correct<br>5. The <code>allows_virtual_table_explore</code> field is a boolean specifying whether or not the Explore button in SQL Lab results is shown.</p>|
|force_ctas_schema|string \| null|false|none|When allowing CREATE TABLE AS option in SQL Lab, this option forces the table to be created in this schema|
|impersonate_user|boolean|false|none|If Presto, all the queries in SQL Lab are going to be executed as the currently logged on user who must have permission to run them.<br/>If Hive and hive.server2.enable.doAs is enabled, will run the queries as service account, but impersonate the currently logged on user via hive.server2.proxy.user property.|
|parameters|object|false|none|DB-specific parameters for configuration|
|server_cert|string \| null|false|none|<p>Optional CA_BUNDLE contents to validate HTTPS requests. Only available on certain database engines.</p>|
|sqlalchemy_uri|string|false|none|<p>Refer to the <a href="https://docs.sqlalchemy.org/en/rel_1_2/core/engines.html#database-urls">SqlAlchemy docs</a> for more information on how to structure your URI.</p>|

<h2 id="tocS_DatabaseTestConnectionSchema">DatabaseTestConnectionSchema</h2>
<!-- backwards compatibility -->
<a id="schemadatabasetestconnectionschema"></a>
<a id="schema_DatabaseTestConnectionSchema"></a>
<a id="tocSdatabasetestconnectionschema"></a>
<a id="tocsdatabasetestconnectionschema"></a>

```json
{
  "configuration_method": "sqlalchemy_form",
  "database_name": "string",
  "encrypted_extra": "string",
  "engine": "string",
  "extra": "string",
  "impersonate_user": true,
  "parameters": {
    "property1": null,
    "property2": null
  },
  "server_cert": "string",
  "sqlalchemy_uri": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|configuration_method|object|false|none|Configuration_method is used on the frontend to inform the backend whether to explode parameters or to provide only a sqlalchemy_uri.|
|database_name|string \| null|false|none|A database name to identify this connection.|
|encrypted_extra|string \| null|false|none|<p>JSON string containing additional connection configuration.<br>This is used to provide connection information for systems like Hive, Presto, and BigQuery, which do not conform to the username:password syntax normally used by SQLAlchemy.</p>|
|engine|string \| null|false|none|SQLAlchemy engine to use|
|extra|string|false|none|<p>JSON string containing extra configuration elements.<br>1. The <code>engine_params</code> object gets unpacked into the <a href="https://docs.sqlalchemy.org/en/latest/core/engines.html#sqlalchemy.create_engine">sqlalchemy.create_engine</a> call, while the <code>metadata_params</code> gets unpacked into the <a href="https://docs.sqlalchemy.org/en/rel_1_0/core/metadata.html#sqlalchemy.schema.MetaData">sqlalchemy.MetaData</a> call.<br>2. The <code>metadata_cache_timeout</code> is a cache timeout setting in seconds for metadata fetch of this database. Specify it as <strong>"metadata_cache_timeout": {"schema_cache_timeout": 600, "table_cache_timeout": 600}</strong>. If unset, cache will not be enabled for the functionality. A timeout of 0 indicates that the cache never expires.<br>3. The <code>schemas_allowed_for_csv_upload</code> is a comma separated list of schemas that CSVs are allowed to upload to. Specify it as <strong>"schemas_allowed_for_csv_upload": ["public", "csv_upload"]</strong>. If database flavor does not support schema or any schema is allowed to be accessed, just leave the list empty<br>4. the <code>version</code> field is a string specifying the this db's version. This should be used with Presto DBs so that the syntax is correct<br>5. The <code>allows_virtual_table_explore</code> field is a boolean specifying whether or not the Explore button in SQL Lab results is shown.</p>|
|impersonate_user|boolean|false|none|If Presto, all the queries in SQL Lab are going to be executed as the currently logged on user who must have permission to run them.<br/>If Hive and hive.server2.enable.doAs is enabled, will run the queries as service account, but impersonate the currently logged on user via hive.server2.proxy.user property.|
|parameters|object|false|none|DB-specific parameters for configuration|
|server_cert|string \| null|false|none|<p>Optional CA_BUNDLE contents to validate HTTPS requests. Only available on certain database engines.</p>|
|sqlalchemy_uri|string|false|none|<p>Refer to the <a href="https://docs.sqlalchemy.org/en/rel_1_2/core/engines.html#database-urls">SqlAlchemy docs</a> for more information on how to structure your URI.</p>|

<h2 id="tocS_DatabaseValidateParametersSchema">DatabaseValidateParametersSchema</h2>
<!-- backwards compatibility -->
<a id="schemadatabasevalidateparametersschema"></a>
<a id="schema_DatabaseValidateParametersSchema"></a>
<a id="tocSdatabasevalidateparametersschema"></a>
<a id="tocsdatabasevalidateparametersschema"></a>

```json
{
  "configuration_method": null,
  "database_name": "string",
  "encrypted_extra": "string",
  "engine": "string",
  "extra": "string",
  "impersonate_user": true,
  "parameters": {
    "property1": null,
    "property2": null
  },
  "server_cert": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|configuration_method|object|true|none|Configuration_method is used on the frontend to inform the backend whether to explode parameters or to provide only a sqlalchemy_uri.|
|database_name|string \| null|false|none|A database name to identify this connection.|
|encrypted_extra|string \| null|false|none|<p>JSON string containing additional connection configuration.<br>This is used to provide connection information for systems like Hive, Presto, and BigQuery, which do not conform to the username:password syntax normally used by SQLAlchemy.</p>|
|engine|string|true|none|SQLAlchemy engine to use|
|extra|string|false|none|<p>JSON string containing extra configuration elements.<br>1. The <code>engine_params</code> object gets unpacked into the <a href="https://docs.sqlalchemy.org/en/latest/core/engines.html#sqlalchemy.create_engine">sqlalchemy.create_engine</a> call, while the <code>metadata_params</code> gets unpacked into the <a href="https://docs.sqlalchemy.org/en/rel_1_0/core/metadata.html#sqlalchemy.schema.MetaData">sqlalchemy.MetaData</a> call.<br>2. The <code>metadata_cache_timeout</code> is a cache timeout setting in seconds for metadata fetch of this database. Specify it as <strong>"metadata_cache_timeout": {"schema_cache_timeout": 600, "table_cache_timeout": 600}</strong>. If unset, cache will not be enabled for the functionality. A timeout of 0 indicates that the cache never expires.<br>3. The <code>schemas_allowed_for_csv_upload</code> is a comma separated list of schemas that CSVs are allowed to upload to. Specify it as <strong>"schemas_allowed_for_csv_upload": ["public", "csv_upload"]</strong>. If database flavor does not support schema or any schema is allowed to be accessed, just leave the list empty<br>4. the <code>version</code> field is a string specifying the this db's version. This should be used with Presto DBs so that the syntax is correct<br>5. The <code>allows_virtual_table_explore</code> field is a boolean specifying whether or not the Explore button in SQL Lab results is shown.</p>|
|impersonate_user|boolean|false|none|If Presto, all the queries in SQL Lab are going to be executed as the currently logged on user who must have permission to run them.<br/>If Hive and hive.server2.enable.doAs is enabled, will run the queries as service account, but impersonate the currently logged on user via hive.server2.proxy.user property.|
|parameters|object|false|none|DB-specific parameters for configuration|
|server_cert|string \| null|false|none|<p>Optional CA_BUNDLE contents to validate HTTPS requests. Only available on certain database engines.</p>|

<h2 id="tocS_DatasetColumnsPut">DatasetColumnsPut</h2>
<!-- backwards compatibility -->
<a id="schemadatasetcolumnsput"></a>
<a id="schema_DatasetColumnsPut"></a>
<a id="tocSdatasetcolumnsput"></a>
<a id="tocsdatasetcolumnsput"></a>

```json
{
  "column_name": "string",
  "description": "string",
  "expression": "string",
  "filterable": true,
  "groupby": true,
  "id": 0,
  "is_active": true,
  "is_dttm": true,
  "python_date_format": "string",
  "type": "string",
  "uuid": "string",
  "verbose_name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|column_name|string|true|none|none|
|description|string \| null|false|none|none|
|expression|string \| null|false|none|none|
|filterable|boolean|false|none|none|
|groupby|boolean|false|none|none|
|id|integer(int32)|false|none|none|
|is_active|boolean|false|none|none|
|is_dttm|boolean|false|none|none|
|python_date_format|string \| null|false|none|none|
|type|string|false|none|none|
|uuid|string \| null|false|none|none|
|verbose_name|string \| null|false|none|none|

<h2 id="tocS_DatasetColumnsRestApi.get">DatasetColumnsRestApi.get</h2>
<!-- backwards compatibility -->
<a id="schemadatasetcolumnsrestapi.get"></a>
<a id="schema_DatasetColumnsRestApi.get"></a>
<a id="tocSdatasetcolumnsrestapi.get"></a>
<a id="tocsdatasetcolumnsrestapi.get"></a>

```json
{
  "id": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|false|none|none|

<h2 id="tocS_DatasetColumnsRestApi.get_list">DatasetColumnsRestApi.get_list</h2>
<!-- backwards compatibility -->
<a id="schemadatasetcolumnsrestapi.get_list"></a>
<a id="schema_DatasetColumnsRestApi.get_list"></a>
<a id="tocSdatasetcolumnsrestapi.get_list"></a>
<a id="tocsdatasetcolumnsrestapi.get_list"></a>

```json
{
  "id": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|false|none|none|

<h2 id="tocS_DatasetColumnsRestApi.post">DatasetColumnsRestApi.post</h2>
<!-- backwards compatibility -->
<a id="schemadatasetcolumnsrestapi.post"></a>
<a id="schema_DatasetColumnsRestApi.post"></a>
<a id="tocSdatasetcolumnsrestapi.post"></a>
<a id="tocsdatasetcolumnsrestapi.post"></a>

```json
{
  "id": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|false|none|none|

<h2 id="tocS_DatasetColumnsRestApi.put">DatasetColumnsRestApi.put</h2>
<!-- backwards compatibility -->
<a id="schemadatasetcolumnsrestapi.put"></a>
<a id="schema_DatasetColumnsRestApi.put"></a>
<a id="tocSdatasetcolumnsrestapi.put"></a>
<a id="tocsdatasetcolumnsrestapi.put"></a>

```json
{
  "id": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|false|none|none|

<h2 id="tocS_DatasetMetricRestApi.get">DatasetMetricRestApi.get</h2>
<!-- backwards compatibility -->
<a id="schemadatasetmetricrestapi.get"></a>
<a id="schema_DatasetMetricRestApi.get"></a>
<a id="tocSdatasetmetricrestapi.get"></a>
<a id="tocsdatasetmetricrestapi.get"></a>

```json
{
  "id": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|false|none|none|

<h2 id="tocS_DatasetMetricRestApi.get_list">DatasetMetricRestApi.get_list</h2>
<!-- backwards compatibility -->
<a id="schemadatasetmetricrestapi.get_list"></a>
<a id="schema_DatasetMetricRestApi.get_list"></a>
<a id="tocSdatasetmetricrestapi.get_list"></a>
<a id="tocsdatasetmetricrestapi.get_list"></a>

```json
{
  "id": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|false|none|none|

<h2 id="tocS_DatasetMetricRestApi.post">DatasetMetricRestApi.post</h2>
<!-- backwards compatibility -->
<a id="schemadatasetmetricrestapi.post"></a>
<a id="schema_DatasetMetricRestApi.post"></a>
<a id="tocSdatasetmetricrestapi.post"></a>
<a id="tocsdatasetmetricrestapi.post"></a>

```json
{
  "id": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|false|none|none|

<h2 id="tocS_DatasetMetricRestApi.put">DatasetMetricRestApi.put</h2>
<!-- backwards compatibility -->
<a id="schemadatasetmetricrestapi.put"></a>
<a id="schema_DatasetMetricRestApi.put"></a>
<a id="tocSdatasetmetricrestapi.put"></a>
<a id="tocsdatasetmetricrestapi.put"></a>

```json
{
  "id": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|false|none|none|

<h2 id="tocS_DatasetMetricsPut">DatasetMetricsPut</h2>
<!-- backwards compatibility -->
<a id="schemadatasetmetricsput"></a>
<a id="schema_DatasetMetricsPut"></a>
<a id="tocSdatasetmetricsput"></a>
<a id="tocsdatasetmetricsput"></a>

```json
{
  "d3format": "string",
  "description": "string",
  "expression": "string",
  "id": 0,
  "metric_name": "string",
  "metric_type": "string",
  "warning_text": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|d3format|string \| null|false|none|none|
|description|string \| null|false|none|none|
|expression|string|true|none|none|
|id|integer(int32)|false|none|none|
|metric_name|string|true|none|none|
|metric_type|string \| null|false|none|none|
|warning_text|string \| null|false|none|none|

<h2 id="tocS_DatasetRelatedChart">DatasetRelatedChart</h2>
<!-- backwards compatibility -->
<a id="schemadatasetrelatedchart"></a>
<a id="schema_DatasetRelatedChart"></a>
<a id="tocSdatasetrelatedchart"></a>
<a id="tocsdatasetrelatedchart"></a>

```json
{
  "id": 0,
  "slice_name": "string",
  "viz_type": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|false|none|none|
|slice_name|string|false|none|none|
|viz_type|string|false|none|none|

<h2 id="tocS_DatasetRelatedCharts">DatasetRelatedCharts</h2>
<!-- backwards compatibility -->
<a id="schemadatasetrelatedcharts"></a>
<a id="schema_DatasetRelatedCharts"></a>
<a id="tocSdatasetrelatedcharts"></a>
<a id="tocsdatasetrelatedcharts"></a>

```json
{
  "count": 0,
  "result": [
    {
      "id": 0,
      "slice_name": "string",
      "viz_type": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|integer(int32)|false|none|Chart count|
|result|[[DatasetRelatedChart](#schemadatasetrelatedchart)]|false|none|A list of dashboards|

<h2 id="tocS_DatasetRelatedDashboard">DatasetRelatedDashboard</h2>
<!-- backwards compatibility -->
<a id="schemadatasetrelateddashboard"></a>
<a id="schema_DatasetRelatedDashboard"></a>
<a id="tocSdatasetrelateddashboard"></a>
<a id="tocsdatasetrelateddashboard"></a>

```json
{
  "id": 0,
  "json_metadata": {},
  "slug": "string",
  "title": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|false|none|none|
|json_metadata|object|false|none|none|
|slug|string|false|none|none|
|title|string|false|none|none|

<h2 id="tocS_DatasetRelatedDashboards">DatasetRelatedDashboards</h2>
<!-- backwards compatibility -->
<a id="schemadatasetrelateddashboards"></a>
<a id="schema_DatasetRelatedDashboards"></a>
<a id="tocSdatasetrelateddashboards"></a>
<a id="tocsdatasetrelateddashboards"></a>

```json
{
  "count": 0,
  "result": [
    {
      "id": 0,
      "json_metadata": {},
      "slug": "string",
      "title": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|integer(int32)|false|none|Dashboard count|
|result|[[DatasetRelatedDashboard](#schemadatasetrelateddashboard)]|false|none|A list of dashboards|

<h2 id="tocS_DatasetRelatedObjectsResponse">DatasetRelatedObjectsResponse</h2>
<!-- backwards compatibility -->
<a id="schemadatasetrelatedobjectsresponse"></a>
<a id="schema_DatasetRelatedObjectsResponse"></a>
<a id="tocSdatasetrelatedobjectsresponse"></a>
<a id="tocsdatasetrelatedobjectsresponse"></a>

```json
{
  "charts": {
    "count": 0,
    "result": [
      {
        "id": 0,
        "slice_name": "string",
        "viz_type": "string"
      }
    ]
  },
  "dashboards": {
    "count": 0,
    "result": [
      {
        "id": 0,
        "json_metadata": {},
        "slug": "string",
        "title": "string"
      }
    ]
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|charts|[DatasetRelatedCharts](#schemadatasetrelatedcharts)|false|none|none|
|dashboards|[DatasetRelatedDashboards](#schemadatasetrelateddashboards)|false|none|none|

<h2 id="tocS_DatasetRestApi.get">DatasetRestApi.get</h2>
<!-- backwards compatibility -->
<a id="schemadatasetrestapi.get"></a>
<a id="schema_DatasetRestApi.get"></a>
<a id="tocSdatasetrestapi.get"></a>
<a id="tocsdatasetrestapi.get"></a>

```json
{
  "cache_timeout": 0,
  "columns": {
    "changed_on": "1970-01-01T00:00:00Z",
    "column_name": "string",
    "created_on": "1970-01-01T00:00:00Z",
    "description": "string",
    "expression": "string",
    "filterable": true,
    "groupby": true,
    "id": 0,
    "is_active": true,
    "is_dttm": true,
    "python_date_format": "string",
    "type": "string",
    "type_generic": null,
    "uuid": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "verbose_name": "string"
  },
  "database": {
    "database_name": "string",
    "id": 0
  },
  "datasource_type": null,
  "default_endpoint": "string",
  "description": "string",
  "extra": "string",
  "fetch_values_predicate": "string",
  "filter_select_enabled": true,
  "id": 0,
  "is_sqllab_view": true,
  "main_dttm_col": "string",
  "metrics": {
    "changed_on": "1970-01-01T00:00:00Z",
    "created_on": "1970-01-01T00:00:00Z",
    "d3format": "string",
    "description": "string",
    "expression": "string",
    "extra": "string",
    "id": 0,
    "metric_name": "string",
    "metric_type": "string",
    "uuid": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "verbose_name": "string",
    "warning_text": "string"
  },
  "offset": 0,
  "owners": {
    "first_name": "string",
    "id": 0,
    "last_name": "string",
    "username": "string"
  },
  "schema": "string",
  "sql": "string",
  "table_name": "string",
  "template_params": "string",
  "url": null
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cache_timeout|integer(int32) \| null|false|none|none|
|columns|[Meta22](#schemameta22)|true|none|none|
|database|[Meta23](#schemameta23)|true|none|none|
|datasource_type|object|false|read-only|none|
|default_endpoint|string \| null|false|none|none|
|description|string \| null|false|none|none|
|extra|string \| null|false|none|none|
|fetch_values_predicate|string \| null|false|none|none|
|filter_select_enabled|boolean \| null|false|none|none|
|id|integer(int32)|false|none|none|
|is_sqllab_view|boolean \| null|false|none|none|
|main_dttm_col|string \| null|false|none|none|
|metrics|[Meta25](#schemameta25)|true|none|none|
|offset|integer(int32) \| null|false|none|none|
|owners|[Meta24](#schemameta24)|false|none|none|
|schema|string \| null|false|none|none|
|sql|string \| null|false|none|none|
|table_name|string|true|none|none|
|template_params|string \| null|false|none|none|
|url|object|false|read-only|none|

<h2 id="tocS_DatasetRestApi.get_list">DatasetRestApi.get_list</h2>
<!-- backwards compatibility -->
<a id="schemadatasetrestapi.get_list"></a>
<a id="schema_DatasetRestApi.get_list"></a>
<a id="tocSdatasetrestapi.get_list"></a>
<a id="tocsdatasetrestapi.get_list"></a>

```json
{
  "changed_by": {
    "first_name": "string",
    "username": "string"
  },
  "changed_by_name": null,
  "changed_by_url": null,
  "changed_on_delta_humanized": null,
  "changed_on_utc": null,
  "database": {
    "database_name": "string",
    "id": 0
  },
  "default_endpoint": "string",
  "explore_url": null,
  "extra": "string",
  "id": 0,
  "kind": null,
  "owners": {
    "first_name": "string",
    "id": 0,
    "last_name": "string",
    "username": "string"
  },
  "schema": "string",
  "sql": "string",
  "table_name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|changed_by|[Meta19](#schemameta19)|false|none|none|
|changed_by_name|object|false|read-only|none|
|changed_by_url|object|false|read-only|none|
|changed_on_delta_humanized|object|false|read-only|none|
|changed_on_utc|object|false|read-only|none|
|database|[Meta21](#schemameta21)|true|none|none|
|default_endpoint|string \| null|false|none|none|
|explore_url|object|false|read-only|none|
|extra|string \| null|false|none|none|
|id|integer(int32)|false|none|none|
|kind|object|false|read-only|none|
|owners|[Meta20](#schemameta20)|false|none|none|
|schema|string \| null|false|none|none|
|sql|string \| null|false|none|none|
|table_name|string|true|none|none|

<h2 id="tocS_DatasetRestApi.post">DatasetRestApi.post</h2>
<!-- backwards compatibility -->
<a id="schemadatasetrestapi.post"></a>
<a id="schema_DatasetRestApi.post"></a>
<a id="tocSdatasetrestapi.post"></a>
<a id="tocsdatasetrestapi.post"></a>

```json
{
  "database": 0,
  "owners": [
    0
  ],
  "schema": "string",
  "table_name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|database|integer(int32)|true|none|none|
|owners|[integer(int32)]|false|none|none|
|schema|string|false|none|none|
|table_name|string|true|none|none|

<h2 id="tocS_DatasetRestApi.put">DatasetRestApi.put</h2>
<!-- backwards compatibility -->
<a id="schemadatasetrestapi.put"></a>
<a id="schema_DatasetRestApi.put"></a>
<a id="tocSdatasetrestapi.put"></a>
<a id="tocsdatasetrestapi.put"></a>

```json
{
  "cache_timeout": 0,
  "columns": [
    {
      "column_name": "string",
      "description": "string",
      "expression": "string",
      "filterable": true,
      "groupby": true,
      "id": 0,
      "is_active": true,
      "is_dttm": true,
      "python_date_format": "string",
      "type": "string",
      "uuid": "string",
      "verbose_name": "string"
    }
  ],
  "database_id": 0,
  "default_endpoint": "string",
  "description": "string",
  "extra": "string",
  "fetch_values_predicate": "string",
  "filter_select_enabled": true,
  "is_sqllab_view": true,
  "main_dttm_col": "string",
  "metrics": [
    {
      "d3format": "string",
      "description": "string",
      "expression": "string",
      "id": 0,
      "metric_name": "string",
      "metric_type": "string",
      "warning_text": "string"
    }
  ],
  "offset": 0,
  "owners": [
    0
  ],
  "schema": "string",
  "sql": "string",
  "table_name": "string",
  "template_params": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cache_timeout|integer(int32) \| null|false|none|none|
|columns|[[DatasetColumnsPut](#schemadatasetcolumnsput)]|false|none|none|
|database_id|integer(int32)|false|none|none|
|default_endpoint|string \| null|false|none|none|
|description|string \| null|false|none|none|
|extra|string \| null|false|none|none|
|fetch_values_predicate|string \| null|false|none|none|
|filter_select_enabled|boolean \| null|false|none|none|
|is_sqllab_view|boolean \| null|false|none|none|
|main_dttm_col|string \| null|false|none|none|
|metrics|[[DatasetMetricsPut](#schemadatasetmetricsput)]|false|none|none|
|offset|integer(int32) \| null|false|none|none|
|owners|[integer(int32)]|false|none|none|
|schema|string \| null|false|none|none|
|sql|string \| null|false|none|none|
|table_name|string \| null|false|none|none|
|template_params|string \| null|false|none|none|

<h2 id="tocS_Datasource">Datasource</h2>
<!-- backwards compatibility -->
<a id="schemadatasource"></a>
<a id="schema_Datasource"></a>
<a id="tocSdatasource"></a>
<a id="tocsdatasource"></a>

```json
{
  "database_name": "string",
  "datasource_name": "string",
  "datasource_type": "druid",
  "schema": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|database_name|string|false|none|Datasource name|
|datasource_name|string|false|none|The datasource name.|
|datasource_type|string|true|none|The type of dataset/datasource identified on `datasource_id`.|
|schema|string|false|none|Datasource schema|

#### Enumerated Values

|Property|Value|
|---|---|
|datasource_type|druid|
|datasource_type|table|
|datasource_type|view|

<h2 id="tocS_DistincResponseSchema">DistincResponseSchema</h2>
<!-- backwards compatibility -->
<a id="schemadistincresponseschema"></a>
<a id="schema_DistincResponseSchema"></a>
<a id="tocSdistincresponseschema"></a>
<a id="tocsdistincresponseschema"></a>

```json
{
  "count": 0,
  "result": [
    {
      "text": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|integer(int32)|false|none|The total number of distinct values|
|result|[[DistinctResultResponse](#schemadistinctresultresponse)]|false|none|none|

<h2 id="tocS_DistinctResultResponse">DistinctResultResponse</h2>
<!-- backwards compatibility -->
<a id="schemadistinctresultresponse"></a>
<a id="schema_DistinctResultResponse"></a>
<a id="tocSdistinctresultresponse"></a>
<a id="tocsdistinctresultresponse"></a>

```json
{
  "text": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|text|string|false|none|The distinct item|

<h2 id="tocS_GetFavStarIdsSchema">GetFavStarIdsSchema</h2>
<!-- backwards compatibility -->
<a id="schemagetfavstaridsschema"></a>
<a id="schema_GetFavStarIdsSchema"></a>
<a id="tocSgetfavstaridsschema"></a>
<a id="tocsgetfavstaridsschema"></a>

```json
{
  "result": [
    {
      "id": 0,
      "value": true
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|result|[[ChartFavStarResponseResult](#schemachartfavstarresponseresult)]|false|none|A list of results for each corresponding chart in the request|

<h2 id="tocS_LogRestApi.get">LogRestApi.get</h2>
<!-- backwards compatibility -->
<a id="schemalogrestapi.get"></a>
<a id="schema_LogRestApi.get"></a>
<a id="tocSlogrestapi.get"></a>
<a id="tocslogrestapi.get"></a>

```json
{
  "action": "string",
  "dashboard_id": 0,
  "dttm": "1970-01-01T00:00:00Z",
  "duration_ms": 0,
  "json": "string",
  "referrer": "string",
  "slice_id": 0,
  "user": {
    "username": "string"
  },
  "user_id": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action|string \| null|false|none|none|
|dashboard_id|integer(int32) \| null|false|none|none|
|dttm|string(date-time) \| null|false|none|none|
|duration_ms|integer(int32) \| null|false|none|none|
|json|string \| null|false|none|none|
|referrer|string \| null|false|none|none|
|slice_id|integer(int32) \| null|false|none|none|
|user|[Meta43](#schemameta43)|false|none|none|
|user_id|integer(int32) \| null|false|none|none|

<h2 id="tocS_LogRestApi.get_list">LogRestApi.get_list</h2>
<!-- backwards compatibility -->
<a id="schemalogrestapi.get_list"></a>
<a id="schema_LogRestApi.get_list"></a>
<a id="tocSlogrestapi.get_list"></a>
<a id="tocslogrestapi.get_list"></a>

```json
{
  "action": "string",
  "dashboard_id": 0,
  "dttm": "1970-01-01T00:00:00Z",
  "duration_ms": 0,
  "json": "string",
  "referrer": "string",
  "slice_id": 0,
  "user": {
    "username": "string"
  },
  "user_id": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action|string \| null|false|none|none|
|dashboard_id|integer(int32) \| null|false|none|none|
|dttm|string(date-time) \| null|false|none|none|
|duration_ms|integer(int32) \| null|false|none|none|
|json|string \| null|false|none|none|
|referrer|string \| null|false|none|none|
|slice_id|integer(int32) \| null|false|none|none|
|user|[Meta42](#schemameta42)|false|none|none|
|user_id|integer(int32) \| null|false|none|none|

<h2 id="tocS_LogRestApi.post">LogRestApi.post</h2>
<!-- backwards compatibility -->
<a id="schemalogrestapi.post"></a>
<a id="schema_LogRestApi.post"></a>
<a id="tocSlogrestapi.post"></a>
<a id="tocslogrestapi.post"></a>

```json
{
  "id": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|false|none|none|

<h2 id="tocS_LogRestApi.put">LogRestApi.put</h2>
<!-- backwards compatibility -->
<a id="schemalogrestapi.put"></a>
<a id="schema_LogRestApi.put"></a>
<a id="tocSlogrestapi.put"></a>
<a id="tocslogrestapi.put"></a>

```json
{
  "action": "string",
  "dttm": "1970-01-01T00:00:00Z",
  "json": "string",
  "user": null
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action|string \| null|false|none|none|
|dttm|string(date-time) \| null|false|none|none|
|json|string \| null|false|none|none|
|user|object \| null|false|none|none|

<h2 id="tocS_Meta">Meta</h2>
<!-- backwards compatibility -->
<a id="schemameta"></a>
<a id="schema_Meta"></a>
<a id="tocSmeta"></a>
<a id="tocsmeta"></a>

```json
{
  "first_name": "string",
  "id": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|first_name|string|true|none|none|
|id|integer(int32)|false|none|none|

<h2 id="tocS_Meta1">Meta1</h2>
<!-- backwards compatibility -->
<a id="schemameta1"></a>
<a id="schema_Meta1"></a>
<a id="tocSmeta1"></a>
<a id="tocsmeta1"></a>

```json
{
  "first_name": "string",
  "id": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|first_name|string|true|none|none|
|id|integer(int32)|false|none|none|

<h2 id="tocS_Meta10">Meta10</h2>
<!-- backwards compatibility -->
<a id="schemameta10"></a>
<a id="schema_Meta10"></a>
<a id="tocSmeta10"></a>
<a id="tocsmeta10"></a>

```json
{
  "first_name": "string",
  "id": 0,
  "last_name": "string",
  "username": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|first_name|string|true|none|none|
|id|integer(int32)|false|none|none|
|last_name|string|true|none|none|
|username|string|true|none|none|

<h2 id="tocS_Meta11">Meta11</h2>
<!-- backwards compatibility -->
<a id="schemameta11"></a>
<a id="schema_Meta11"></a>
<a id="tocSmeta11"></a>
<a id="tocsmeta11"></a>

```json
{
  "first_name": "string",
  "id": 0,
  "last_name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|first_name|string|true|none|none|
|id|integer(int32)|false|none|none|
|last_name|string|true|none|none|

<h2 id="tocS_Meta12">Meta12</h2>
<!-- backwards compatibility -->
<a id="schemameta12"></a>
<a id="schema_Meta12"></a>
<a id="tocSmeta12"></a>
<a id="tocsmeta12"></a>

```json
{
  "active": true,
  "changed_on": "1970-01-01T00:00:00Z",
  "created_on": "1970-01-01T00:00:00Z",
  "email": "string",
  "fail_login_count": 0,
  "first_name": "string",
  "id": 0,
  "last_login": "1970-01-01T00:00:00Z",
  "last_name": "string",
  "login_count": 0,
  "password": "string",
  "username": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|active|boolean \| null|false|none|none|
|changed_on|string(date-time) \| null|false|none|none|
|created_on|string(date-time) \| null|false|none|none|
|email|string|true|none|none|
|fail_login_count|integer(int32) \| null|false|none|none|
|first_name|string|true|none|none|
|id|integer(int32)|false|none|none|
|last_login|string(date-time) \| null|false|none|none|
|last_name|string|true|none|none|
|login_count|integer(int32) \| null|false|none|none|
|password|string \| null|false|none|none|
|username|string|true|none|none|

<h2 id="tocS_Meta13">Meta13</h2>
<!-- backwards compatibility -->
<a id="schemameta13"></a>
<a id="schema_Meta13"></a>
<a id="tocSmeta13"></a>
<a id="tocsmeta13"></a>

```json
{
  "first_name": "string",
  "id": 0,
  "last_name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|first_name|string|true|none|none|
|id|integer(int32)|false|none|none|
|last_name|string|true|none|none|

<h2 id="tocS_Meta14">Meta14</h2>
<!-- backwards compatibility -->
<a id="schemameta14"></a>
<a id="schema_Meta14"></a>
<a id="tocSmeta14"></a>
<a id="tocsmeta14"></a>

```json
{
  "first_name": "string",
  "id": 0,
  "last_name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|first_name|string|true|none|none|
|id|integer(int32)|false|none|none|
|last_name|string|true|none|none|

<h2 id="tocS_Meta15">Meta15</h2>
<!-- backwards compatibility -->
<a id="schemameta15"></a>
<a id="schema_Meta15"></a>
<a id="tocSmeta15"></a>
<a id="tocsmeta15"></a>

```json
{
  "first_name": "string",
  "id": 0,
  "last_name": "string",
  "username": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|first_name|string|true|none|none|
|id|integer(int32)|false|none|none|
|last_name|string|true|none|none|
|username|string|true|none|none|

<h2 id="tocS_Meta16">Meta16</h2>
<!-- backwards compatibility -->
<a id="schemameta16"></a>
<a id="schema_Meta16"></a>
<a id="tocSmeta16"></a>
<a id="tocsmeta16"></a>

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
|name|string|true|none|none|

<h2 id="tocS_Meta17">Meta17</h2>
<!-- backwards compatibility -->
<a id="schemameta17"></a>
<a id="schema_Meta17"></a>
<a id="tocSmeta17"></a>
<a id="tocsmeta17"></a>

```json
{
  "first_name": "string",
  "id": 0,
  "last_name": "string",
  "username": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|first_name|string|true|none|none|
|id|integer(int32)|false|none|none|
|last_name|string|true|none|none|
|username|string|true|none|none|

<h2 id="tocS_Meta18">Meta18</h2>
<!-- backwards compatibility -->
<a id="schemameta18"></a>
<a id="schema_Meta18"></a>
<a id="tocSmeta18"></a>
<a id="tocsmeta18"></a>

```json
{
  "first_name": "string",
  "last_name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|first_name|string|true|none|none|
|last_name|string|true|none|none|

<h2 id="tocS_Meta19">Meta19</h2>
<!-- backwards compatibility -->
<a id="schemameta19"></a>
<a id="schema_Meta19"></a>
<a id="tocSmeta19"></a>
<a id="tocsmeta19"></a>

```json
{
  "first_name": "string",
  "username": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|first_name|string|true|none|none|
|username|string|true|none|none|

<h2 id="tocS_Meta2">Meta2</h2>
<!-- backwards compatibility -->
<a id="schemameta2"></a>
<a id="schema_Meta2"></a>
<a id="tocSmeta2"></a>
<a id="tocsmeta2"></a>

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

<h2 id="tocS_Meta20">Meta20</h2>
<!-- backwards compatibility -->
<a id="schemameta20"></a>
<a id="schema_Meta20"></a>
<a id="tocSmeta20"></a>
<a id="tocsmeta20"></a>

```json
{
  "first_name": "string",
  "id": 0,
  "last_name": "string",
  "username": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|first_name|string|true|none|none|
|id|integer(int32)|false|none|none|
|last_name|string|true|none|none|
|username|string|true|none|none|

<h2 id="tocS_Meta21">Meta21</h2>
<!-- backwards compatibility -->
<a id="schemameta21"></a>
<a id="schema_Meta21"></a>
<a id="tocSmeta21"></a>
<a id="tocsmeta21"></a>

```json
{
  "database_name": "string",
  "id": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|database_name|string|true|none|none|
|id|integer(int32)|false|none|none|

<h2 id="tocS_Meta22">Meta22</h2>
<!-- backwards compatibility -->
<a id="schemameta22"></a>
<a id="schema_Meta22"></a>
<a id="tocSmeta22"></a>
<a id="tocsmeta22"></a>

```json
{
  "changed_on": "1970-01-01T00:00:00Z",
  "column_name": "string",
  "created_on": "1970-01-01T00:00:00Z",
  "description": "string",
  "expression": "string",
  "filterable": true,
  "groupby": true,
  "id": 0,
  "is_active": true,
  "is_dttm": true,
  "python_date_format": "string",
  "type": "string",
  "type_generic": null,
  "uuid": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "verbose_name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|changed_on|string(date-time) \| null|false|none|none|
|column_name|string|true|none|none|
|created_on|string(date-time) \| null|false|none|none|
|description|string \| null|false|none|none|
|expression|string \| null|false|none|none|
|filterable|boolean \| null|false|none|none|
|groupby|boolean \| null|false|none|none|
|id|integer(int32)|false|none|none|
|is_active|boolean \| null|false|none|none|
|is_dttm|boolean \| null|false|none|none|
|python_date_format|string \| null|false|none|none|
|type|string \| null|false|none|none|
|type_generic|object|false|read-only|none|
|uuid|string(uuid) \| null|false|none|none|
|verbose_name|string \| null|false|none|none|

<h2 id="tocS_Meta23">Meta23</h2>
<!-- backwards compatibility -->
<a id="schemameta23"></a>
<a id="schema_Meta23"></a>
<a id="tocSmeta23"></a>
<a id="tocsmeta23"></a>

```json
{
  "database_name": "string",
  "id": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|database_name|string|true|none|none|
|id|integer(int32)|false|none|none|

<h2 id="tocS_Meta24">Meta24</h2>
<!-- backwards compatibility -->
<a id="schemameta24"></a>
<a id="schema_Meta24"></a>
<a id="tocSmeta24"></a>
<a id="tocsmeta24"></a>

```json
{
  "first_name": "string",
  "id": 0,
  "last_name": "string",
  "username": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|first_name|string|true|none|none|
|id|integer(int32)|false|none|none|
|last_name|string|true|none|none|
|username|string|true|none|none|

<h2 id="tocS_Meta25">Meta25</h2>
<!-- backwards compatibility -->
<a id="schemameta25"></a>
<a id="schema_Meta25"></a>
<a id="tocSmeta25"></a>
<a id="tocsmeta25"></a>

```json
{
  "changed_on": "1970-01-01T00:00:00Z",
  "created_on": "1970-01-01T00:00:00Z",
  "d3format": "string",
  "description": "string",
  "expression": "string",
  "extra": "string",
  "id": 0,
  "metric_name": "string",
  "metric_type": "string",
  "uuid": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "verbose_name": "string",
  "warning_text": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|changed_on|string(date-time) \| null|false|none|none|
|created_on|string(date-time) \| null|false|none|none|
|d3format|string \| null|false|none|none|
|description|string \| null|false|none|none|
|expression|string|true|none|none|
|extra|string \| null|false|none|none|
|id|integer(int32)|false|none|none|
|metric_name|string|true|none|none|
|metric_type|string \| null|false|none|none|
|uuid|string(uuid) \| null|false|none|none|
|verbose_name|string \| null|false|none|none|
|warning_text|string \| null|false|none|none|

<h2 id="tocS_Meta26">Meta26</h2>
<!-- backwards compatibility -->
<a id="schemameta26"></a>
<a id="schema_Meta26"></a>
<a id="tocSmeta26"></a>
<a id="tocsmeta26"></a>

```json
{
  "first_name": "string",
  "id": 0,
  "last_name": "string",
  "username": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|first_name|string|true|none|none|
|id|integer(int32)|false|none|none|
|last_name|string|true|none|none|
|username|string|true|none|none|

<h2 id="tocS_Meta27">Meta27</h2>
<!-- backwards compatibility -->
<a id="schemameta27"></a>
<a id="schema_Meta27"></a>
<a id="tocSmeta27"></a>
<a id="tocsmeta27"></a>

```json
{
  "database_name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|database_name|string|true|none|none|

<h2 id="tocS_Meta28">Meta28</h2>
<!-- backwards compatibility -->
<a id="schemameta28"></a>
<a id="schema_Meta28"></a>
<a id="tocSmeta28"></a>
<a id="tocsmeta28"></a>

```json
{
  "id": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|false|none|none|

<h2 id="tocS_Meta29">Meta29</h2>
<!-- backwards compatibility -->
<a id="schemameta29"></a>
<a id="schema_Meta29"></a>
<a id="tocSmeta29"></a>
<a id="tocsmeta29"></a>

```json
{
  "first_name": "string",
  "id": 0,
  "last_name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|first_name|string|true|none|none|
|id|integer(int32)|false|none|none|
|last_name|string|true|none|none|

<h2 id="tocS_Meta3">Meta3</h2>
<!-- backwards compatibility -->
<a id="schemameta3"></a>
<a id="schema_Meta3"></a>
<a id="tocSmeta3"></a>
<a id="tocsmeta3"></a>

```json
{
  "first_name": "string",
  "last_name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|first_name|string|true|none|none|
|last_name|string|true|none|none|

<h2 id="tocS_Meta30">Meta30</h2>
<!-- backwards compatibility -->
<a id="schemameta30"></a>
<a id="schema_Meta30"></a>
<a id="tocSmeta30"></a>
<a id="tocsmeta30"></a>

```json
{
  "database_name": "string",
  "id": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|database_name|string|true|none|none|
|id|integer(int32)|false|none|none|

<h2 id="tocS_Meta31">Meta31</h2>
<!-- backwards compatibility -->
<a id="schemameta31"></a>
<a id="schema_Meta31"></a>
<a id="tocSmeta31"></a>
<a id="tocsmeta31"></a>

```json
{
  "first_name": "string",
  "id": 0,
  "last_name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|first_name|string|true|none|none|
|id|integer(int32)|false|none|none|
|last_name|string|true|none|none|

<h2 id="tocS_Meta32">Meta32</h2>
<!-- backwards compatibility -->
<a id="schemameta32"></a>
<a id="schema_Meta32"></a>
<a id="tocSmeta32"></a>
<a id="tocsmeta32"></a>

```json
{
  "database_name": "string",
  "id": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|database_name|string|true|none|none|
|id|integer(int32)|false|none|none|

<h2 id="tocS_Meta33">Meta33</h2>
<!-- backwards compatibility -->
<a id="schemameta33"></a>
<a id="schema_Meta33"></a>
<a id="tocSmeta33"></a>
<a id="tocsmeta33"></a>

```json
{
  "first_name": "string",
  "last_name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|first_name|string|true|none|none|
|last_name|string|true|none|none|

<h2 id="tocS_Meta34">Meta34</h2>
<!-- backwards compatibility -->
<a id="schemameta34"></a>
<a id="schema_Meta34"></a>
<a id="tocSmeta34"></a>
<a id="tocsmeta34"></a>

```json
{
  "first_name": "string",
  "last_name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|first_name|string|true|none|none|
|last_name|string|true|none|none|

<h2 id="tocS_Meta35">Meta35</h2>
<!-- backwards compatibility -->
<a id="schemameta35"></a>
<a id="schema_Meta35"></a>
<a id="tocSmeta35"></a>
<a id="tocsmeta35"></a>

```json
{
  "id": 0,
  "type": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|false|none|none|
|type|string|true|none|none|

<h2 id="tocS_Meta36">Meta36</h2>
<!-- backwards compatibility -->
<a id="schemameta36"></a>
<a id="schema_Meta36"></a>
<a id="tocSmeta36"></a>
<a id="tocsmeta36"></a>

```json
{
  "first_name": "string",
  "id": 0,
  "last_name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|first_name|string|true|none|none|
|id|integer(int32)|false|none|none|
|last_name|string|true|none|none|

<h2 id="tocS_Meta37">Meta37</h2>
<!-- backwards compatibility -->
<a id="schemameta37"></a>
<a id="schema_Meta37"></a>
<a id="tocSmeta37"></a>
<a id="tocsmeta37"></a>

```json
{
  "database_name": "string",
  "id": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|database_name|string|true|none|none|
|id|integer(int32)|false|none|none|

<h2 id="tocS_Meta38">Meta38</h2>
<!-- backwards compatibility -->
<a id="schemameta38"></a>
<a id="schema_Meta38"></a>
<a id="tocSmeta38"></a>
<a id="tocsmeta38"></a>

```json
{
  "id": 0,
  "recipient_config_json": "string",
  "type": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|false|none|none|
|recipient_config_json|string \| null|false|none|none|
|type|string|true|none|none|

<h2 id="tocS_Meta39">Meta39</h2>
<!-- backwards compatibility -->
<a id="schemameta39"></a>
<a id="schema_Meta39"></a>
<a id="tocSmeta39"></a>
<a id="tocsmeta39"></a>

```json
{
  "first_name": "string",
  "id": 0,
  "last_name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|first_name|string|true|none|none|
|id|integer(int32)|false|none|none|
|last_name|string|true|none|none|

<h2 id="tocS_Meta4">Meta4</h2>
<!-- backwards compatibility -->
<a id="schemameta4"></a>
<a id="schema_Meta4"></a>
<a id="tocSmeta4"></a>
<a id="tocsmeta4"></a>

```json
{
  "first_name": "string",
  "last_name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|first_name|string|true|none|none|
|last_name|string|true|none|none|

<h2 id="tocS_Meta40">Meta40</h2>
<!-- backwards compatibility -->
<a id="schemameta40"></a>
<a id="schema_Meta40"></a>
<a id="tocSmeta40"></a>
<a id="tocsmeta40"></a>

```json
{
  "id": 0,
  "slice_name": "string",
  "viz_type": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|false|none|none|
|slice_name|string \| null|false|none|none|
|viz_type|string \| null|false|none|none|

<h2 id="tocS_Meta41">Meta41</h2>
<!-- backwards compatibility -->
<a id="schemameta41"></a>
<a id="schema_Meta41"></a>
<a id="tocSmeta41"></a>
<a id="tocsmeta41"></a>

```json
{
  "dashboard_title": "string",
  "id": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dashboard_title|string \| null|false|none|none|
|id|integer(int32)|false|none|none|

<h2 id="tocS_Meta42">Meta42</h2>
<!-- backwards compatibility -->
<a id="schemameta42"></a>
<a id="schema_Meta42"></a>
<a id="tocSmeta42"></a>
<a id="tocsmeta42"></a>

```json
{
  "username": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|username|string|true|none|none|

<h2 id="tocS_Meta43">Meta43</h2>
<!-- backwards compatibility -->
<a id="schemameta43"></a>
<a id="schema_Meta43"></a>
<a id="tocSmeta43"></a>
<a id="tocsmeta43"></a>

```json
{
  "username": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|username|string|true|none|none|

<h2 id="tocS_Meta5">Meta5</h2>
<!-- backwards compatibility -->
<a id="schemameta5"></a>
<a id="schema_Meta5"></a>
<a id="tocSmeta5"></a>
<a id="tocsmeta5"></a>

```json
{
  "first_name": "string",
  "id": 0,
  "last_name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|first_name|string|true|none|none|
|id|integer(int32)|false|none|none|
|last_name|string|true|none|none|

<h2 id="tocS_Meta6">Meta6</h2>
<!-- backwards compatibility -->
<a id="schemameta6"></a>
<a id="schema_Meta6"></a>
<a id="tocSmeta6"></a>
<a id="tocsmeta6"></a>

```json
{
  "default_endpoint": "string",
  "table_name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|default_endpoint|string \| null|false|none|none|
|table_name|string|true|none|none|

<h2 id="tocS_Meta7">Meta7</h2>
<!-- backwards compatibility -->
<a id="schemameta7"></a>
<a id="schema_Meta7"></a>
<a id="tocSmeta7"></a>
<a id="tocsmeta7"></a>

```json
{
  "first_name": "string",
  "id": 0,
  "last_name": "string",
  "username": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|first_name|string|true|none|none|
|id|integer(int32)|false|none|none|
|last_name|string|true|none|none|
|username|string|true|none|none|

<h2 id="tocS_Meta8">Meta8</h2>
<!-- backwards compatibility -->
<a id="schemameta8"></a>
<a id="schema_Meta8"></a>
<a id="tocSmeta8"></a>
<a id="tocsmeta8"></a>

```json
{
  "first_name": "string",
  "last_name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|first_name|string|true|none|none|
|last_name|string|true|none|none|

<h2 id="tocS_Meta9">Meta9</h2>
<!-- backwards compatibility -->
<a id="schemameta9"></a>
<a id="schema_Meta9"></a>
<a id="tocSmeta9"></a>
<a id="tocsmeta9"></a>

```json
{
  "dashboard_title": "string",
  "id": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dashboard_title|string \| null|false|none|none|
|id|integer(int32)|false|none|none|

<h2 id="tocS_QueryRestApi.get">QueryRestApi.get</h2>
<!-- backwards compatibility -->
<a id="schemaqueryrestapi.get"></a>
<a id="schema_QueryRestApi.get"></a>
<a id="tocSqueryrestapi.get"></a>
<a id="tocsqueryrestapi.get"></a>

```json
{
  "changed_on": "1970-01-01T00:00:00Z",
  "client_id": "string",
  "database": {
    "id": 0
  },
  "end_result_backend_time": 0,
  "end_time": 0,
  "error_message": "string",
  "executed_sql": "string",
  "id": 0,
  "limit": 0,
  "progress": 0,
  "results_key": "string",
  "rows": 0,
  "schema": "string",
  "select_as_cta": true,
  "select_as_cta_used": true,
  "select_sql": "string",
  "sql": "string",
  "sql_editor_id": "string",
  "start_running_time": 0,
  "start_time": 0,
  "status": "string",
  "tab_name": "string",
  "tmp_schema_name": "string",
  "tmp_table_name": "string",
  "tracking_url": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|changed_on|string(date-time) \| null|false|none|none|
|client_id|string|true|none|none|
|database|[Meta28](#schemameta28)|true|none|none|
|end_result_backend_time|number \| null|false|none|none|
|end_time|number \| null|false|none|none|
|error_message|string \| null|false|none|none|
|executed_sql|string \| null|false|none|none|
|id|integer(int32)|false|none|none|
|limit|integer(int32) \| null|false|none|none|
|progress|integer(int32) \| null|false|none|none|
|results_key|string \| null|false|none|none|
|rows|integer(int32) \| null|false|none|none|
|schema|string \| null|false|none|none|
|select_as_cta|boolean \| null|false|none|none|
|select_as_cta_used|boolean \| null|false|none|none|
|select_sql|string \| null|false|none|none|
|sql|string \| null|false|none|none|
|sql_editor_id|string \| null|false|none|none|
|start_running_time|number \| null|false|none|none|
|start_time|number \| null|false|none|none|
|status|string \| null|false|none|none|
|tab_name|string \| null|false|none|none|
|tmp_schema_name|string \| null|false|none|none|
|tmp_table_name|string \| null|false|none|none|
|tracking_url|string \| null|false|none|none|

<h2 id="tocS_QueryRestApi.get_list">QueryRestApi.get_list</h2>
<!-- backwards compatibility -->
<a id="schemaqueryrestapi.get_list"></a>
<a id="schema_QueryRestApi.get_list"></a>
<a id="tocSqueryrestapi.get_list"></a>
<a id="tocsqueryrestapi.get_list"></a>

```json
{
  "changed_on": "1970-01-01T00:00:00Z",
  "database": {
    "database_name": "string"
  },
  "end_time": 0,
  "executed_sql": "string",
  "id": 0,
  "rows": 0,
  "schema": "string",
  "sql": "string",
  "sql_tables": null,
  "start_time": 0,
  "status": "string",
  "tab_name": "string",
  "tmp_table_name": "string",
  "tracking_url": "string",
  "user": {
    "first_name": "string",
    "id": 0,
    "last_name": "string",
    "username": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|changed_on|string(date-time) \| null|false|none|none|
|database|[Meta27](#schemameta27)|true|none|none|
|end_time|number \| null|false|none|none|
|executed_sql|string \| null|false|none|none|
|id|integer(int32)|false|none|none|
|rows|integer(int32) \| null|false|none|none|
|schema|string \| null|false|none|none|
|sql|string \| null|false|none|none|
|sql_tables|object|false|read-only|none|
|start_time|number \| null|false|none|none|
|status|string \| null|false|none|none|
|tab_name|string \| null|false|none|none|
|tmp_table_name|string \| null|false|none|none|
|tracking_url|string \| null|false|none|none|
|user|[Meta26](#schemameta26)|false|none|none|

<h2 id="tocS_QueryRestApi.post">QueryRestApi.post</h2>
<!-- backwards compatibility -->
<a id="schemaqueryrestapi.post"></a>
<a id="schema_QueryRestApi.post"></a>
<a id="tocSqueryrestapi.post"></a>
<a id="tocsqueryrestapi.post"></a>

```json
{
  "id": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|false|none|none|

<h2 id="tocS_QueryRestApi.put">QueryRestApi.put</h2>
<!-- backwards compatibility -->
<a id="schemaqueryrestapi.put"></a>
<a id="schema_QueryRestApi.put"></a>
<a id="tocSqueryrestapi.put"></a>
<a id="tocsqueryrestapi.put"></a>

```json
{
  "id": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|false|none|none|

<h2 id="tocS_RelatedResponseSchema">RelatedResponseSchema</h2>
<!-- backwards compatibility -->
<a id="schemarelatedresponseschema"></a>
<a id="schema_RelatedResponseSchema"></a>
<a id="tocSrelatedresponseschema"></a>
<a id="tocsrelatedresponseschema"></a>

```json
{
  "count": 0,
  "result": [
    {
      "text": "string",
      "value": 0
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|integer(int32)|false|none|The total number of related values|
|result|[[RelatedResultResponse](#schemarelatedresultresponse)]|false|none|none|

<h2 id="tocS_RelatedResultResponse">RelatedResultResponse</h2>
<!-- backwards compatibility -->
<a id="schemarelatedresultresponse"></a>
<a id="schema_RelatedResultResponse"></a>
<a id="tocSrelatedresultresponse"></a>
<a id="tocsrelatedresultresponse"></a>

```json
{
  "text": "string",
  "value": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|text|string|false|none|The related item string representation|
|value|integer(int32)|false|none|The related item identifier|

<h2 id="tocS_ReportExecutionLogRestApi.get">ReportExecutionLogRestApi.get</h2>
<!-- backwards compatibility -->
<a id="schemareportexecutionlogrestapi.get"></a>
<a id="schema_ReportExecutionLogRestApi.get"></a>
<a id="tocSreportexecutionlogrestapi.get"></a>
<a id="tocsreportexecutionlogrestapi.get"></a>

```json
{
  "end_dttm": "1970-01-01T00:00:00Z",
  "error_message": "string",
  "id": 0,
  "scheduled_dttm": "1970-01-01T00:00:00Z",
  "start_dttm": "1970-01-01T00:00:00Z",
  "state": "string",
  "uuid": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "value": 0,
  "value_row_json": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|end_dttm|string(date-time) \| null|false|none|none|
|error_message|string \| null|false|none|none|
|id|integer(int32)|false|none|none|
|scheduled_dttm|string(date-time)|true|none|none|
|start_dttm|string(date-time) \| null|false|none|none|
|state|string|true|none|none|
|uuid|string(uuid) \| null|false|none|none|
|value|number(float) \| null|false|none|none|
|value_row_json|string \| null|false|none|none|

<h2 id="tocS_ReportExecutionLogRestApi.get_list">ReportExecutionLogRestApi.get_list</h2>
<!-- backwards compatibility -->
<a id="schemareportexecutionlogrestapi.get_list"></a>
<a id="schema_ReportExecutionLogRestApi.get_list"></a>
<a id="tocSreportexecutionlogrestapi.get_list"></a>
<a id="tocsreportexecutionlogrestapi.get_list"></a>

```json
{
  "end_dttm": "1970-01-01T00:00:00Z",
  "error_message": "string",
  "id": 0,
  "scheduled_dttm": "1970-01-01T00:00:00Z",
  "start_dttm": "1970-01-01T00:00:00Z",
  "state": "string",
  "uuid": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "value": 0,
  "value_row_json": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|end_dttm|string(date-time) \| null|false|none|none|
|error_message|string \| null|false|none|none|
|id|integer(int32)|false|none|none|
|scheduled_dttm|string(date-time)|true|none|none|
|start_dttm|string(date-time) \| null|false|none|none|
|state|string|true|none|none|
|uuid|string(uuid) \| null|false|none|none|
|value|number(float) \| null|false|none|none|
|value_row_json|string \| null|false|none|none|

<h2 id="tocS_ReportExecutionLogRestApi.post">ReportExecutionLogRestApi.post</h2>
<!-- backwards compatibility -->
<a id="schemareportexecutionlogrestapi.post"></a>
<a id="schema_ReportExecutionLogRestApi.post"></a>
<a id="tocSreportexecutionlogrestapi.post"></a>
<a id="tocsreportexecutionlogrestapi.post"></a>

```json
{
  "id": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|false|none|none|

<h2 id="tocS_ReportExecutionLogRestApi.put">ReportExecutionLogRestApi.put</h2>
<!-- backwards compatibility -->
<a id="schemareportexecutionlogrestapi.put"></a>
<a id="schema_ReportExecutionLogRestApi.put"></a>
<a id="tocSreportexecutionlogrestapi.put"></a>
<a id="tocsreportexecutionlogrestapi.put"></a>

```json
{
  "id": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|false|none|none|

<h2 id="tocS_ReportRecipient">ReportRecipient</h2>
<!-- backwards compatibility -->
<a id="schemareportrecipient"></a>
<a id="schema_ReportRecipient"></a>
<a id="tocSreportrecipient"></a>
<a id="tocsreportrecipient"></a>

```json
{
  "recipient_config_json": {
    "target": "string"
  },
  "type": "Email"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|recipient_config_json|[ReportRecipientConfigJSON](#schemareportrecipientconfigjson)|false|none|none|
|type|string|true|none|The recipient type, check spec for valid options|

#### Enumerated Values

|Property|Value|
|---|---|
|type|Email|
|type|Slack|

<h2 id="tocS_ReportRecipientConfigJSON">ReportRecipientConfigJSON</h2>
<!-- backwards compatibility -->
<a id="schemareportrecipientconfigjson"></a>
<a id="schema_ReportRecipientConfigJSON"></a>
<a id="tocSreportrecipientconfigjson"></a>
<a id="tocsreportrecipientconfigjson"></a>

```json
{
  "target": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|target|string|false|none|none|

<h2 id="tocS_ReportScheduleRestApi.get">ReportScheduleRestApi.get</h2>
<!-- backwards compatibility -->
<a id="schemareportschedulerestapi.get"></a>
<a id="schema_ReportScheduleRestApi.get"></a>
<a id="tocSreportschedulerestapi.get"></a>
<a id="tocsreportschedulerestapi.get"></a>

```json
{
  "active": true,
  "chart": {
    "id": 0,
    "slice_name": "string",
    "viz_type": "string"
  },
  "context_markdown": "string",
  "creation_method": "string",
  "crontab": "string",
  "dashboard": {
    "dashboard_title": "string",
    "id": 0
  },
  "database": {
    "database_name": "string",
    "id": 0
  },
  "description": "string",
  "grace_period": 0,
  "id": 0,
  "last_eval_dttm": "1970-01-01T00:00:00Z",
  "last_state": "string",
  "last_value": 0,
  "last_value_row_json": "string",
  "log_retention": 0,
  "name": "string",
  "owners": {
    "first_name": "string",
    "id": 0,
    "last_name": "string"
  },
  "recipients": {
    "id": 0,
    "recipient_config_json": "string",
    "type": "string"
  },
  "report_format": "string",
  "sql": "string",
  "timezone": "string",
  "type": "string",
  "validator_config_json": "string",
  "validator_type": "string",
  "working_timeout": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|active|boolean \| null|false|none|none|
|chart|[Meta40](#schemameta40)|false|none|none|
|context_markdown|string \| null|false|none|none|
|creation_method|string \| null|false|none|none|
|crontab|string|true|none|none|
|dashboard|[Meta41](#schemameta41)|false|none|none|
|database|[Meta37](#schemameta37)|false|none|none|
|description|string \| null|false|none|none|
|grace_period|integer(int32) \| null|false|none|none|
|id|integer(int32)|false|none|none|
|last_eval_dttm|string(date-time) \| null|false|none|none|
|last_state|string \| null|false|none|none|
|last_value|number(float) \| null|false|none|none|
|last_value_row_json|string \| null|false|none|none|
|log_retention|integer(int32) \| null|false|none|none|
|name|string|true|none|none|
|owners|[Meta39](#schemameta39)|false|none|none|
|recipients|[Meta38](#schemameta38)|true|none|none|
|report_format|string \| null|false|none|none|
|sql|string \| null|false|none|none|
|timezone|string|false|none|none|
|type|string|true|none|none|
|validator_config_json|string \| null|false|none|none|
|validator_type|string \| null|false|none|none|
|working_timeout|integer(int32) \| null|false|none|none|

<h2 id="tocS_ReportScheduleRestApi.get_list">ReportScheduleRestApi.get_list</h2>
<!-- backwards compatibility -->
<a id="schemareportschedulerestapi.get_list"></a>
<a id="schema_ReportScheduleRestApi.get_list"></a>
<a id="tocSreportschedulerestapi.get_list"></a>
<a id="tocsreportschedulerestapi.get_list"></a>

```json
{
  "active": true,
  "changed_by": {
    "first_name": "string",
    "last_name": "string"
  },
  "changed_on": "1970-01-01T00:00:00Z",
  "changed_on_delta_humanized": null,
  "created_by": {
    "first_name": "string",
    "last_name": "string"
  },
  "created_on": "1970-01-01T00:00:00Z",
  "creation_method": "string",
  "crontab": "string",
  "crontab_humanized": null,
  "description": "string",
  "id": 0,
  "last_eval_dttm": "1970-01-01T00:00:00Z",
  "last_state": "string",
  "name": "string",
  "owners": {
    "first_name": "string",
    "id": 0,
    "last_name": "string"
  },
  "recipients": {
    "id": 0,
    "type": "string"
  },
  "timezone": "string",
  "type": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|active|boolean \| null|false|none|none|
|changed_by|[Meta34](#schemameta34)|false|none|none|
|changed_on|string(date-time) \| null|false|none|none|
|changed_on_delta_humanized|object|false|read-only|none|
|created_by|[Meta33](#schemameta33)|false|none|none|
|created_on|string(date-time) \| null|false|none|none|
|creation_method|string \| null|false|none|none|
|crontab|string|true|none|none|
|crontab_humanized|object|false|read-only|none|
|description|string \| null|false|none|none|
|id|integer(int32)|false|none|none|
|last_eval_dttm|string(date-time) \| null|false|none|none|
|last_state|string \| null|false|none|none|
|name|string|true|none|none|
|owners|[Meta36](#schemameta36)|false|none|none|
|recipients|[Meta35](#schemameta35)|true|none|none|
|timezone|string|false|none|none|
|type|string|true|none|none|

<h2 id="tocS_ReportScheduleRestApi.post">ReportScheduleRestApi.post</h2>
<!-- backwards compatibility -->
<a id="schemareportschedulerestapi.post"></a>
<a id="schema_ReportScheduleRestApi.post"></a>
<a id="tocSreportschedulerestapi.post"></a>
<a id="tocsreportschedulerestapi.post"></a>

```json
{
  "active": true,
  "chart": 0,
  "context_markdown": "string",
  "creation_method": null,
  "crontab": "*/5 * * * *",
  "dashboard": 0,
  "database": 0,
  "description": "Daily sales dashboard to marketing",
  "grace_period": 14400,
  "log_retention": 90,
  "name": "Daily dashboard email",
  "owners": [
    0
  ],
  "recipients": [
    {
      "recipient_config_json": {
        "target": "string"
      },
      "type": "Email"
    }
  ],
  "report_format": "PNG",
  "sql": "SELECT value FROM time_series_table",
  "timezone": "string",
  "type": "Alert",
  "validator_config_json": {
    "op": "<",
    "threshold": 0
  },
  "validator_type": "not null",
  "working_timeout": 3600
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|active|boolean|false|none|none|
|chart|integer(int32) \| null|false|none|none|
|context_markdown|string \| null|false|none|Markdown description|
|creation_method|object|false|none|Creation method is used to inform the frontend whether the report/alert was created in the dashboard, chart, or alerts and reports UI.|
|crontab|string|true|none|A CRON expression.[Crontab Guru](https://crontab.guru/) is a helpful resource that can help you craft a CRON expression.|
|dashboard|integer(int32) \| null|false|none|none|
|database|integer(int32)|false|none|none|
|description|string \| null|false|none|Use a nice description to give context to this Alert/Report|
|grace_period|integer(int32)|false|none|Once an alert is triggered, how long, in seconds, before Superset nags you again. (in seconds)|
|log_retention|integer(int32)|false|none|How long to keep the logs around for this report (in days)|
|name|string|true|none|The report schedule name.|
|owners|[integer(int32)]|false|none|none|
|recipients|[[ReportRecipient](#schemareportrecipient)]|false|none|none|
|report_format|string|false|none|none|
|sql|string|false|none|A SQL statement that defines whether the alert should get triggered or not. The query is expected to return either NULL or a number value.|
|timezone|string|false|none|A timezone string that represents the location of the timezone.|
|type|string|true|none|The report schedule type|
|validator_config_json|[ValidatorConfigJSON](#schemavalidatorconfigjson)|false|none|none|
|validator_type|string|false|none|Determines when to trigger alert based off value from alert query. Alerts will be triggered with these validator types:<br>- Not Null - When the return value is Not NULL, Empty, or 0<br>- Operator - When `sql_return_value comparison_operator threshold` is True e.g. `50 <= 75`<br>Supports the comparison operators <, <=, >, >=, ==, and !=|
|working_timeout|integer(int32)|false|none|If an alert is staled at a working state, how long until it's state is reseted to error|

#### Enumerated Values

|Property|Value|
|---|---|
|report_format|PNG|
|report_format|CSV|
|report_format|TEXT|
|type|Alert|
|type|Report|
|validator_type|not null|
|validator_type|operator|

<h2 id="tocS_ReportScheduleRestApi.put">ReportScheduleRestApi.put</h2>
<!-- backwards compatibility -->
<a id="schemareportschedulerestapi.put"></a>
<a id="schema_ReportScheduleRestApi.put"></a>
<a id="tocSreportschedulerestapi.put"></a>
<a id="tocsreportschedulerestapi.put"></a>

```json
{
  "active": true,
  "chart": 0,
  "context_markdown": "string",
  "creation_method": null,
  "crontab": "string",
  "dashboard": 0,
  "database": 0,
  "description": "Daily sales dashboard to marketing",
  "grace_period": 14400,
  "log_retention": 90,
  "name": "string",
  "owners": [
    0
  ],
  "recipients": [
    {
      "recipient_config_json": {
        "target": "string"
      },
      "type": "Email"
    }
  ],
  "report_format": "PNG",
  "sql": "SELECT value FROM time_series_table",
  "timezone": "string",
  "type": "Alert",
  "validator_config_json": {
    "op": "<",
    "threshold": 0
  },
  "validator_type": "not null",
  "working_timeout": 3600
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|active|boolean|false|none|none|
|chart|integer(int32) \| null|false|none|none|
|context_markdown|string \| null|false|none|Markdown description|
|creation_method|object \| null|false|none|Creation method is used to inform the frontend whether the report/alert was created in the dashboard, chart, or alerts and reports UI.|
|crontab|string|false|none|A CRON expression.[Crontab Guru](https://crontab.guru/) is a helpful resource that can help you craft a CRON expression.|
|dashboard|integer(int32) \| null|false|none|none|
|database|integer(int32)|false|none|none|
|description|string \| null|false|none|Use a nice description to give context to this Alert/Report|
|grace_period|integer(int32)|false|none|Once an alert is triggered, how long, in seconds, before Superset nags you again. (in seconds)|
|log_retention|integer(int32)|false|none|How long to keep the logs around for this report (in days)|
|name|string|false|none|The report schedule name.|
|owners|[integer(int32)]|false|none|none|
|recipients|[[ReportRecipient](#schemareportrecipient)]|false|none|none|
|report_format|string|false|none|none|
|sql|string \| null|false|none|A SQL statement that defines whether the alert should get triggered or not. The query is expected to return either NULL or a number value.|
|timezone|string|false|none|A timezone string that represents the location of the timezone.|
|type|string|false|none|The report schedule type|
|validator_config_json|[ValidatorConfigJSON](#schemavalidatorconfigjson)|false|none|none|
|validator_type|string \| null|false|none|Determines when to trigger alert based off value from alert query. Alerts will be triggered with these validator types:<br>- Not Null - When the return value is Not NULL, Empty, or 0<br>- Operator - When `sql_return_value comparison_operator threshold` is True e.g. `50 <= 75`<br>Supports the comparison operators <, <=, >, >=, ==, and !=|
|working_timeout|integer(int32) \| null|false|none|If an alert is staled at a working state, how long until it's state is reseted to error|

#### Enumerated Values

|Property|Value|
|---|---|
|report_format|PNG|
|report_format|CSV|
|report_format|TEXT|
|type|Alert|
|type|Report|
|validator_type|not null|
|validator_type|operator|

<h2 id="tocS_Roles">Roles</h2>
<!-- backwards compatibility -->
<a id="schemaroles"></a>
<a id="schema_Roles"></a>
<a id="tocSroles"></a>
<a id="tocsroles"></a>

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
|name|string|false|none|none|

<h2 id="tocS_SavedQueryRestApi.get">SavedQueryRestApi.get</h2>
<!-- backwards compatibility -->
<a id="schemasavedqueryrestapi.get"></a>
<a id="schema_SavedQueryRestApi.get"></a>
<a id="tocSsavedqueryrestapi.get"></a>
<a id="tocssavedqueryrestapi.get"></a>

```json
{
  "created_by": {
    "first_name": "string",
    "id": 0,
    "last_name": "string"
  },
  "database": {
    "database_name": "string",
    "id": 0
  },
  "description": "string",
  "id": 0,
  "label": "string",
  "schema": "string",
  "sql": "string",
  "sql_tables": null
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|created_by|[Meta31](#schemameta31)|false|none|none|
|database|[Meta32](#schemameta32)|false|none|none|
|description|string \| null|false|none|none|
|id|integer(int32)|false|none|none|
|label|string \| null|false|none|none|
|schema|string \| null|false|none|none|
|sql|string \| null|false|none|none|
|sql_tables|object|false|read-only|none|

<h2 id="tocS_SavedQueryRestApi.get_list">SavedQueryRestApi.get_list</h2>
<!-- backwards compatibility -->
<a id="schemasavedqueryrestapi.get_list"></a>
<a id="schema_SavedQueryRestApi.get_list"></a>
<a id="tocSsavedqueryrestapi.get_list"></a>
<a id="tocssavedqueryrestapi.get_list"></a>

```json
{
  "changed_on_delta_humanized": null,
  "created_by": {
    "first_name": "string",
    "id": 0,
    "last_name": "string"
  },
  "created_on": "1970-01-01T00:00:00Z",
  "database": {
    "database_name": "string",
    "id": 0
  },
  "db_id": 0,
  "description": "string",
  "extra": null,
  "id": 0,
  "label": "string",
  "last_run_delta_humanized": null,
  "rows": 0,
  "schema": "string",
  "sql": "string",
  "sql_tables": null
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|changed_on_delta_humanized|object|false|read-only|none|
|created_by|[Meta29](#schemameta29)|false|none|none|
|created_on|string(date-time) \| null|false|none|none|
|database|[Meta30](#schemameta30)|false|none|none|
|db_id|integer(int32) \| null|false|none|none|
|description|string \| null|false|none|none|
|extra|object|false|read-only|none|
|id|integer(int32)|false|none|none|
|label|string \| null|false|none|none|
|last_run_delta_humanized|object|false|read-only|none|
|rows|integer(int32) \| null|false|none|none|
|schema|string \| null|false|none|none|
|sql|string \| null|false|none|none|
|sql_tables|object|false|read-only|none|

<h2 id="tocS_SavedQueryRestApi.post">SavedQueryRestApi.post</h2>
<!-- backwards compatibility -->
<a id="schemasavedqueryrestapi.post"></a>
<a id="schema_SavedQueryRestApi.post"></a>
<a id="tocSsavedqueryrestapi.post"></a>
<a id="tocssavedqueryrestapi.post"></a>

```json
{
  "db_id": 0,
  "description": "string",
  "label": "string",
  "schema": "string",
  "sql": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|db_id|integer(int32) \| null|false|none|none|
|description|string \| null|false|none|none|
|label|string \| null|false|none|none|
|schema|string \| null|false|none|none|
|sql|string \| null|false|none|none|

<h2 id="tocS_SavedQueryRestApi.put">SavedQueryRestApi.put</h2>
<!-- backwards compatibility -->
<a id="schemasavedqueryrestapi.put"></a>
<a id="schema_SavedQueryRestApi.put"></a>
<a id="tocSsavedqueryrestapi.put"></a>
<a id="tocssavedqueryrestapi.put"></a>

```json
{
  "db_id": 0,
  "description": "string",
  "label": "string",
  "schema": "string",
  "sql": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|db_id|integer(int32) \| null|false|none|none|
|description|string \| null|false|none|none|
|label|string \| null|false|none|none|
|schema|string \| null|false|none|none|
|sql|string \| null|false|none|none|

<h2 id="tocS_SchemasResponseSchema">SchemasResponseSchema</h2>
<!-- backwards compatibility -->
<a id="schemaschemasresponseschema"></a>
<a id="schema_SchemasResponseSchema"></a>
<a id="tocSschemasresponseschema"></a>
<a id="tocsschemasresponseschema"></a>

```json
{
  "result": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|result|[string]|false|none|none|

<h2 id="tocS_SelectStarResponseSchema">SelectStarResponseSchema</h2>
<!-- backwards compatibility -->
<a id="schemaselectstarresponseschema"></a>
<a id="schema_SelectStarResponseSchema"></a>
<a id="tocSselectstarresponseschema"></a>
<a id="tocsselectstarresponseschema"></a>

```json
{
  "result": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|result|string|false|none|SQL select star|

<h2 id="tocS_TableMetadataColumnsResponse">TableMetadataColumnsResponse</h2>
<!-- backwards compatibility -->
<a id="schematablemetadatacolumnsresponse"></a>
<a id="schema_TableMetadataColumnsResponse"></a>
<a id="tocStablemetadatacolumnsresponse"></a>
<a id="tocstablemetadatacolumnsresponse"></a>

```json
{
  "duplicates_constraint": "string",
  "keys": [
    "string"
  ],
  "longType": "string",
  "name": "string",
  "type": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|duplicates_constraint|string|false|none|none|
|keys|[string]|false|none|none|
|longType|string|false|none|The actual backend long type for the column|
|name|string|false|none|The column name|
|type|string|false|none|The column type|

<h2 id="tocS_TableMetadataForeignKeysIndexesResponse">TableMetadataForeignKeysIndexesResponse</h2>
<!-- backwards compatibility -->
<a id="schematablemetadataforeignkeysindexesresponse"></a>
<a id="schema_TableMetadataForeignKeysIndexesResponse"></a>
<a id="tocStablemetadataforeignkeysindexesresponse"></a>
<a id="tocstablemetadataforeignkeysindexesresponse"></a>

```json
{
  "column_names": [
    "string"
  ],
  "name": "string",
  "options": {
    "deferrable": true,
    "initially": true,
    "match": true,
    "ondelete": true,
    "onupdate": true
  },
  "referred_columns": [
    "string"
  ],
  "referred_schema": "string",
  "referred_table": "string",
  "type": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|column_names|[string]|false|none|none|
|name|string|false|none|The name of the foreign key or index|
|options|[TableMetadataOptionsResponse](#schematablemetadataoptionsresponse)|false|none|none|
|referred_columns|[string]|false|none|none|
|referred_schema|string|false|none|none|
|referred_table|string|false|none|none|
|type|string|false|none|none|

<h2 id="tocS_TableMetadataOptionsResponse">TableMetadataOptionsResponse</h2>
<!-- backwards compatibility -->
<a id="schematablemetadataoptionsresponse"></a>
<a id="schema_TableMetadataOptionsResponse"></a>
<a id="tocStablemetadataoptionsresponse"></a>
<a id="tocstablemetadataoptionsresponse"></a>

```json
{
  "deferrable": true,
  "initially": true,
  "match": true,
  "ondelete": true,
  "onupdate": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|deferrable|boolean|false|none|none|
|initially|boolean|false|none|none|
|match|boolean|false|none|none|
|ondelete|boolean|false|none|none|
|onupdate|boolean|false|none|none|

<h2 id="tocS_TableMetadataPrimaryKeyResponse">TableMetadataPrimaryKeyResponse</h2>
<!-- backwards compatibility -->
<a id="schematablemetadataprimarykeyresponse"></a>
<a id="schema_TableMetadataPrimaryKeyResponse"></a>
<a id="tocStablemetadataprimarykeyresponse"></a>
<a id="tocstablemetadataprimarykeyresponse"></a>

```json
{
  "column_names": [
    "string"
  ],
  "name": "string",
  "type": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|column_names|[string]|false|none|none|
|name|string|false|none|The primary key index name|
|type|string|false|none|none|

<h2 id="tocS_TableMetadataResponseSchema">TableMetadataResponseSchema</h2>
<!-- backwards compatibility -->
<a id="schematablemetadataresponseschema"></a>
<a id="schema_TableMetadataResponseSchema"></a>
<a id="tocStablemetadataresponseschema"></a>
<a id="tocstablemetadataresponseschema"></a>

```json
{
  "columns": [
    {
      "duplicates_constraint": "string",
      "keys": [
        "string"
      ],
      "longType": "string",
      "name": "string",
      "type": "string"
    }
  ],
  "foreignKeys": [
    {
      "column_names": [
        "string"
      ],
      "name": "string",
      "options": {
        "deferrable": true,
        "initially": true,
        "match": true,
        "ondelete": true,
        "onupdate": true
      },
      "referred_columns": [
        "string"
      ],
      "referred_schema": "string",
      "referred_table": "string",
      "type": "string"
    }
  ],
  "indexes": [
    {
      "column_names": [
        "string"
      ],
      "name": "string",
      "options": {
        "deferrable": true,
        "initially": true,
        "match": true,
        "ondelete": true,
        "onupdate": true
      },
      "referred_columns": [
        "string"
      ],
      "referred_schema": "string",
      "referred_table": "string",
      "type": "string"
    }
  ],
  "name": "string",
  "primaryKey": {
    "column_names": [
      "string"
    ],
    "name": "string",
    "type": "string"
  },
  "selectStar": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|columns|[[TableMetadataColumnsResponse](#schematablemetadatacolumnsresponse)]|false|none|A list of columns and their metadata|
|foreignKeys|[[TableMetadataForeignKeysIndexesResponse](#schematablemetadataforeignkeysindexesresponse)]|false|none|A list of foreign keys and their metadata|
|indexes|[[TableMetadataForeignKeysIndexesResponse](#schematablemetadataforeignkeysindexesresponse)]|false|none|A list of indexes and their metadata|
|name|string|false|none|The name of the table|
|primaryKey|object|false|none|Primary keys metadata|
|selectStar|string|false|none|SQL select star|

<h2 id="tocS_User">User</h2>
<!-- backwards compatibility -->
<a id="schemauser"></a>
<a id="schema_User"></a>
<a id="tocSuser"></a>
<a id="tocsuser"></a>

```json
{
  "first_name": "string",
  "id": 0,
  "last_name": "string",
  "username": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|first_name|string|false|none|none|
|id|integer(int32)|false|none|none|
|last_name|string|false|none|none|
|username|string|false|none|none|

<h2 id="tocS_ValidatorConfigJSON">ValidatorConfigJSON</h2>
<!-- backwards compatibility -->
<a id="schemavalidatorconfigjson"></a>
<a id="schema_ValidatorConfigJSON"></a>
<a id="tocSvalidatorconfigjson"></a>
<a id="tocsvalidatorconfigjson"></a>

```json
{
  "op": "<",
  "threshold": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|op|string|false|none|The operation to compare with a threshold to apply to the SQL output<br>|
|threshold|integer(int32)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|op|<|
|op|<=|
|op|>|
|op|>=|
|op|==|
|op|!=|

<h2 id="tocS_database_schemas_query_schema">database_schemas_query_schema</h2>
<!-- backwards compatibility -->
<a id="schemadatabase_schemas_query_schema"></a>
<a id="schema_database_schemas_query_schema"></a>
<a id="tocSdatabase_schemas_query_schema"></a>
<a id="tocsdatabase_schemas_query_schema"></a>

```json
{
  "force": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|force|boolean|false|none|none|

<h2 id="tocS_get_delete_ids_schema">get_delete_ids_schema</h2>
<!-- backwards compatibility -->
<a id="schemaget_delete_ids_schema"></a>
<a id="schema_get_delete_ids_schema"></a>
<a id="tocSget_delete_ids_schema"></a>
<a id="tocsget_delete_ids_schema"></a>

```json
[
  0
]
```

<h2 id="tocS_get_export_ids_schema">get_export_ids_schema</h2>
<!-- backwards compatibility -->
<a id="schemaget_export_ids_schema"></a>
<a id="schema_get_export_ids_schema"></a>
<a id="tocSget_export_ids_schema"></a>
<a id="tocsget_export_ids_schema"></a>

```json
[
  0
]
```

<h2 id="tocS_get_fav_star_ids_schema">get_fav_star_ids_schema</h2>
<!-- backwards compatibility -->
<a id="schemaget_fav_star_ids_schema"></a>
<a id="schema_get_fav_star_ids_schema"></a>
<a id="tocSget_fav_star_ids_schema"></a>
<a id="tocsget_fav_star_ids_schema"></a>

```json
[
  0
]
```

<h2 id="tocS_get_info_schema">get_info_schema</h2>
<!-- backwards compatibility -->
<a id="schemaget_info_schema"></a>
<a id="schema_get_info_schema"></a>
<a id="tocSget_info_schema"></a>
<a id="tocsget_info_schema"></a>

```json
{
  "add_columns": {
    "property1": {
      "page": 0,
      "page_size": 0
    },
    "property2": {
      "page": 0,
      "page_size": 0
    }
  },
  "edit_columns": {
    "property1": {
      "page": 0,
      "page_size": 0
    },
    "property2": {
      "page": 0,
      "page_size": 0
    }
  },
  "keys": [
    "add_columns"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|add_columns|object|false|none|none|
|edit_columns|object|false|none|none|
|keys|[string]|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|keys|add_columns|
|keys|edit_columns|
|keys|filters|
|keys|permissions|
|keys|add_title|
|keys|edit_title|
|keys|none|

<h2 id="tocS_get_item_schema">get_item_schema</h2>
<!-- backwards compatibility -->
<a id="schemaget_item_schema"></a>
<a id="schema_get_item_schema"></a>
<a id="tocSget_item_schema"></a>
<a id="tocsget_item_schema"></a>

```json
{
  "columns": [
    "string"
  ],
  "keys": [
    "show_columns"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|columns|[string]|false|none|none|
|keys|[string]|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|keys|show_columns|
|keys|description_columns|
|keys|label_columns|
|keys|show_title|
|keys|none|

<h2 id="tocS_get_list_schema">get_list_schema</h2>
<!-- backwards compatibility -->
<a id="schemaget_list_schema"></a>
<a id="schema_get_list_schema"></a>
<a id="tocSget_list_schema"></a>
<a id="tocsget_list_schema"></a>

```json
{
  "columns": [
    "string"
  ],
  "filters": [
    {
      "col": "string",
      "opr": "string",
      "value": 0
    }
  ],
  "keys": [
    "list_columns"
  ],
  "order_column": "string",
  "order_direction": "asc",
  "page": 0,
  "page_size": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|columns|[string]|false|none|none|
|filters|[object]|false|none|none|
|keys|[string]|false|none|none|
|order_column|string|false|none|none|
|order_direction|string|false|none|none|
|page|integer|false|none|none|
|page_size|integer|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|keys|list_columns|
|keys|order_columns|
|keys|label_columns|
|keys|description_columns|
|keys|list_title|
|keys|none|
|order_direction|asc|
|order_direction|desc|

<h2 id="tocS_get_related_schema">get_related_schema</h2>
<!-- backwards compatibility -->
<a id="schemaget_related_schema"></a>
<a id="schema_get_related_schema"></a>
<a id="tocSget_related_schema"></a>
<a id="tocsget_related_schema"></a>

```json
{
  "filter": "string",
  "include_ids": [
    0
  ],
  "page": 0,
  "page_size": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|filter|string|false|none|none|
|include_ids|[integer]|false|none|none|
|page|integer|false|none|none|
|page_size|integer|false|none|none|

<h2 id="tocS_screenshot_query_schema">screenshot_query_schema</h2>
<!-- backwards compatibility -->
<a id="schemascreenshot_query_schema"></a>
<a id="schema_screenshot_query_schema"></a>
<a id="tocSscreenshot_query_schema"></a>
<a id="tocsscreenshot_query_schema"></a>

```json
{
  "force": true,
  "thumb_size": [
    0
  ],
  "window_size": [
    0
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|force|boolean|false|none|none|
|thumb_size|[integer]|false|none|none|
|window_size|[integer]|false|none|none|

<h2 id="tocS_thumbnail_query_schema">thumbnail_query_schema</h2>
<!-- backwards compatibility -->
<a id="schemathumbnail_query_schema"></a>
<a id="schema_thumbnail_query_schema"></a>
<a id="tocSthumbnail_query_schema"></a>
<a id="tocsthumbnail_query_schema"></a>

```json
{
  "force": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|force|boolean|false|none|none|
