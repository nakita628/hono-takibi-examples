<h1 id="crediwatchs-covid-apis">Crediwatch's Covid APIs v1.3.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

An API collection for Covid 19 by Crediwatch

<h1 id="crediwatchs-covid-apis-default">Default</h1>

## Status Call

<a id="opIdstatus_call_api_v1_status_call_get"></a>

> Code samples

```bash
curl 'https://example.com/api/v1/status/call?query=string' \
  -H 'Accept: application/json'
```

`GET /api/v1/status/call`

<h3 id="status-call-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|query|query|string|true|none|

> Example responses

> 200 Response

```json
{
  "data": {
    "answered_by": "Not Available",
    "error": "Call cant be placed",
    "option_selected": [
      "Not Available"
    ],
    "phone_number": [
      "Not Available"
    ],
    "previously_verified_at": [
      "Not Available"
    ],
    "progress": "Not Available",
    "token": "Not Available"
  },
  "meta": {
    "job_id": "111111111111111111111111",
    "job_time": 24,
    "query": "string"
  }
}
```

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string"
    }
  ]
}
```

<h3 id="status-call-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[StatusCall](#schemastatuscall)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Status Sku

<a id="opIdstatus_sku_api_v1_status_sku_get"></a>

> Code samples

```bash
curl 'https://example.com/api/v1/status/sku?query=string' \
  -H 'Accept: application/json'
```

`GET /api/v1/status/sku`

<h3 id="status-sku-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|query|query|string|true|none|

> Example responses

> 200 Response

```json
{
  "data": {
    "answered_by": "Not Available",
    "error": "Call cant be placed",
    "option_selected": [
      "Not Available"
    ],
    "phone_number": [
      "Not Available"
    ],
    "previously_verified_at": [
      "Not Available"
    ],
    "progress": "Not Available",
    "token": "Not Available"
  },
  "meta": {
    "job_id": "111111111111111111111111",
    "job_time": 24,
    "query": "string"
  }
}
```

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string"
    }
  ]
}
```

<h3 id="status-sku-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[StatusCall](#schemastatuscall)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Verify Name

<a id="opIdverify_name_api_v1_verify_name_get"></a>

> Code samples

```bash
curl 'https://example.com/api/v1/verify/name?query=string' \
  -H 'Accept: application/json'
```

`GET /api/v1/verify/name`

<h3 id="verify-name-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|query|query|string|true|none|
|state|query|string|false|none|
|city|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "business_name": "Not Available",
      "city": "Not Available",
      "department_code_and_type": [],
      "entity_type": "Not Available",
      "is_gstn_verified": false,
      "nature_of_business": [],
      "pincode": 999999,
      "registration_date": "Not Available",
      "registration_type": "Not Available",
      "state": "Not Available"
    }
  ],
  "meta": {
    "job_id": "111111111111111111111111",
    "job_time": 24,
    "query": "string"
  }
}
```

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string"
    }
  ]
}
```

<h3 id="verify-name-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[VerifyName](#schemaverifyname)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Verify Business

<a id="opIdverify_business_api_v1_verify_phone_get"></a>

> Code samples

```bash
curl 'https://example.com/api/v1/verify/phone?query=string' \
  -H 'Accept: application/json'
```

`GET /api/v1/verify/phone`

<h3 id="verify-business-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|query|query|string|true|none|
|locking_period|query|object|false|none|

> Example responses

> 200 Response

```json
{
  "data": {
    "answered_by": "Not Available",
    "error": "Call cant be placed",
    "option_selected": [
      "Not Available"
    ],
    "phone_number": [
      "Not Available"
    ],
    "previously_verified_at": [
      "Not Available"
    ],
    "progress": "Not Available",
    "token": "Not Available"
  },
  "meta": {
    "job_id": "111111111111111111111111",
    "job_time": 24,
    "query": "string"
  }
}
```

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string"
    }
  ]
}
```

<h3 id="verify-business-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[VerifyPhone](#schemaverifyphone)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Verify Sku

<a id="opIdverify_sku_api_v1_verify_sku_get"></a>

> Code samples

```bash
curl 'https://example.com/api/v1/verify/sku?query=string' \
  -H 'Accept: application/json'
```

`GET /api/v1/verify/sku`

<h3 id="verify-sku-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|query|query|string|true|none|
|locking_period|query|object|false|none|

> Example responses

> 200 Response

```json
{
  "data": {
    "answered_by": "Not Available",
    "error": "Call cant be placed",
    "option_selected": [
      "Not Available"
    ],
    "phone_number": [
      "Not Available"
    ],
    "previously_verified_at": [
      "Not Available"
    ],
    "progress": "Not Available",
    "token": "Not Available"
  },
  "meta": {
    "job_id": "111111111111111111111111",
    "job_time": 24,
    "query": "string"
  }
}
```

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string"
    }
  ]
}
```

<h3 id="verify-sku-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[VerifyPhone](#schemaverifyphone)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

<h2 id="tocS_GetStatus">GetStatus</h2>
<!-- backwards compatibility -->
<a id="schemagetstatus"></a>
<a id="schema_GetStatus"></a>
<a id="tocSgetstatus"></a>
<a id="tocsgetstatus"></a>

```json
{
  "answered_by": "Not Available",
  "error": "Call cant be placed",
  "option_selected": [
    "Not Available"
  ],
  "phone_number": [
    "Not Available"
  ],
  "previously_verified_at": [
    "Not Available"
  ],
  "progress": "Not Available",
  "token": "Not Available"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|answered_by|string|false|none|none|
|error|string|false|none|none|
|option_selected|string|false|none|none|
|phone_number|string|false|none|none|
|previously_verified_at|string|false|none|none|
|progress|string|false|none|none|
|token|string|false|none|none|

<h2 id="tocS_HTTPValidationError">HTTPValidationError</h2>
<!-- backwards compatibility -->
<a id="schemahttpvalidationerror"></a>
<a id="schema_HTTPValidationError"></a>
<a id="tocShttpvalidationerror"></a>
<a id="tocshttpvalidationerror"></a>

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|[[ValidationError](#schemavalidationerror)]|false|none|none|

<h2 id="tocS_PlaceCall">PlaceCall</h2>
<!-- backwards compatibility -->
<a id="schemaplacecall"></a>
<a id="schema_PlaceCall"></a>
<a id="tocSplacecall"></a>
<a id="tocsplacecall"></a>

```json
{
  "answered_by": "Not Available",
  "error": "Call cant be placed",
  "option_selected": [
    "Not Available"
  ],
  "phone_number": [
    "Not Available"
  ],
  "previously_verified_at": [
    "Not Available"
  ],
  "progress": "Not Available",
  "token": "Not Available"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|answered_by|string|false|none|none|
|error|string|false|none|none|
|option_selected|string|false|none|none|
|phone_number|string|false|none|none|
|previously_verified_at|string|false|none|none|
|progress|string|false|none|none|
|token|string|false|none|none|

<h2 id="tocS_StatusCall">StatusCall</h2>
<!-- backwards compatibility -->
<a id="schemastatuscall"></a>
<a id="schema_StatusCall"></a>
<a id="tocSstatuscall"></a>
<a id="tocsstatuscall"></a>

```json
{
  "data": {
    "answered_by": "Not Available",
    "error": "Call cant be placed",
    "option_selected": [
      "Not Available"
    ],
    "phone_number": [
      "Not Available"
    ],
    "previously_verified_at": [
      "Not Available"
    ],
    "progress": "Not Available",
    "token": "Not Available"
  },
  "meta": {
    "job_id": "111111111111111111111111",
    "job_time": 24,
    "query": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[GetStatus](#schemagetstatus)|true|none|none|
|meta|[VerifyNameMeta](#schemaverifynamemeta)|true|none|none|

<h2 id="tocS_ValidationError">ValidationError</h2>
<!-- backwards compatibility -->
<a id="schemavalidationerror"></a>
<a id="schema_ValidationError"></a>
<a id="tocSvalidationerror"></a>
<a id="tocsvalidationerror"></a>

```json
{
  "loc": [
    "string"
  ],
  "msg": "string",
  "type": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|loc|[string]|true|none|none|
|msg|string|true|none|none|
|type|string|true|none|none|

<h2 id="tocS_VerifyName">VerifyName</h2>
<!-- backwards compatibility -->
<a id="schemaverifyname"></a>
<a id="schema_VerifyName"></a>
<a id="tocSverifyname"></a>
<a id="tocsverifyname"></a>

```json
{
  "data": [
    {
      "business_name": "Not Available",
      "city": "Not Available",
      "department_code_and_type": [],
      "entity_type": "Not Available",
      "is_gstn_verified": false,
      "nature_of_business": [],
      "pincode": 999999,
      "registration_date": "Not Available",
      "registration_type": "Not Available",
      "state": "Not Available"
    }
  ],
  "meta": {
    "job_id": "111111111111111111111111",
    "job_time": 24,
    "query": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[VerifyNameData](#schemaverifynamedata)]|true|none|none|
|meta|[VerifyNameMeta](#schemaverifynamemeta)|true|none|none|

<h2 id="tocS_VerifyNameData">VerifyNameData</h2>
<!-- backwards compatibility -->
<a id="schemaverifynamedata"></a>
<a id="schema_VerifyNameData"></a>
<a id="tocSverifynamedata"></a>
<a id="tocsverifynamedata"></a>

```json
{
  "business_name": "Not Available",
  "city": "Not Available",
  "department_code_and_type": [],
  "entity_type": "Not Available",
  "is_gstn_verified": false,
  "nature_of_business": [],
  "pincode": 999999,
  "registration_date": "Not Available",
  "registration_type": "Not Available",
  "state": "Not Available"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|business_name|string|false|none|none|
|city|string|false|none|none|
|department_code_and_type|[string]|false|none|none|
|entity_type|string|false|none|none|
|is_gstn_verified|boolean|false|none|none|
|nature_of_business|[string]|false|none|none|
|pincode|integer|false|none|none|
|registration_date|string|false|none|none|
|registration_type|string|false|none|none|
|state|string|false|none|none|

<h2 id="tocS_VerifyNameMeta">VerifyNameMeta</h2>
<!-- backwards compatibility -->
<a id="schemaverifynamemeta"></a>
<a id="schema_VerifyNameMeta"></a>
<a id="tocSverifynamemeta"></a>
<a id="tocsverifynamemeta"></a>

```json
{
  "job_id": "111111111111111111111111",
  "job_time": 24,
  "query": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|job_id|string|false|none|none|
|job_time|integer|false|none|none|
|query|string|true|none|none|

<h2 id="tocS_VerifyPhone">VerifyPhone</h2>
<!-- backwards compatibility -->
<a id="schemaverifyphone"></a>
<a id="schema_VerifyPhone"></a>
<a id="tocSverifyphone"></a>
<a id="tocsverifyphone"></a>

```json
{
  "data": {
    "answered_by": "Not Available",
    "error": "Call cant be placed",
    "option_selected": [
      "Not Available"
    ],
    "phone_number": [
      "Not Available"
    ],
    "previously_verified_at": [
      "Not Available"
    ],
    "progress": "Not Available",
    "token": "Not Available"
  },
  "meta": {
    "job_id": "111111111111111111111111",
    "job_time": 24,
    "query": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[PlaceCall](#schemaplacecall)|true|none|none|
|meta|[VerifyNameMeta](#schemaverifynamemeta)|true|none|none|
