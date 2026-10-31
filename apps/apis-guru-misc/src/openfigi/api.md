<h1 id="openfigi-api">OpenFIGI API v1.4.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

A free & open API for FIGI discovery.

Base URLs:

* <a href="https://api.openfigi.com/v1">https://api.openfigi.com/v1</a> - Production Tier

<a href="https://openfigi.com/docs/terms-of-service">Terms of service</a>
Email: <a href="mailto:support@openfigi.com">OpenFIGI API Support</a> 
Web: <a href="https://openfigi.com/api">OpenFIGI API Support</a> 
License: <a href="https://www.apache.org/licenses/LICENSE-2.0.html">Apache 2.0</a>

# Authentication

* API Key (ApiKeyAuth)
    - Parameter Name: **X-OPENFIGI-APIKEY**, in: header.

<h1 id="openfigi-api-default">Default</h1>

## post/mapping

> Code samples

```bash
curl https://example.com/mapping \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '[
    {
      "contractSize": [
        0,
        0
      ],
      "coupon": [
        0,
        0
      ],
      "currency": "string",
      "exchCode": "string",
      "expiration": [
        "1970-01-01",
        "1970-01-01"
      ],
      "idType": "ID_ISIN",
      "idValue": "string",
      "includeUnlistedEquities": true,
      "marketSecDes": "string",
      "maturity": [
        "1970-01-01",
        "1970-01-01"
      ],
      "micCode": "string",
      "optionType": "Put",
      "securityType": "string",
      "securityType2": "string",
      "stateCode": "AB",
      "strike": [
        0,
        0
      ]
    }
  ]'
```

`POST /mapping`

Allows mapping from third-party identifiers to FIGIs.

> Body parameter

```json
[
  {
    "contractSize": [
      0,
      0
    ],
    "coupon": [
      0,
      0
    ],
    "currency": "string",
    "exchCode": "string",
    "expiration": [
      "1970-01-01",
      "1970-01-01"
    ],
    "idType": "ID_ISIN",
    "idValue": "string",
    "includeUnlistedEquities": true,
    "marketSecDes": "string",
    "maturity": [
      "1970-01-01",
      "1970-01-01"
    ],
    "micCode": "string",
    "optionType": "Put",
    "securityType": "string",
    "securityType2": "string",
    "stateCode": "AB",
    "strike": [
      0,
      0
    ]
  }
]
```

<h3 id="postmapping-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[BulkMappingJob](#schemabulkmappingjob)|false|A list of third-party identifiers and extra filters.|

> Example responses

> 200 Response

```json
[
  {
    "data": [
      {
        "compositeFIGI": "string",
        "exchCode": "string",
        "figi": "string",
        "marketSector": "string",
        "metadata": "string",
        "name": "string",
        "securityDescription": "string",
        "securityType": "string",
        "securityType2": "string",
        "shareClassFIGI": "string",
        "ticker": "string"
      }
    ]
  }
]
```

<h3 id="postmapping-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of FIGIs and their metadata.|[BulkMappingJobResult](#schemabulkmappingjobresult)|
|400|Bad Request|Invalid request (body).|Inline|
|401|Unauthorized|API Key is invalid.|Inline|
|406|Not Acceptable|Unsupported 'Accept' type.|Inline|
|413|Payload Too Large|Too many mapping jobs in request.|Inline|
|500|Internal Server Error|Internal server error.|Inline|

<aside class="warning">
Authentication is optional for this operation. To authenticate, use one of the following methods:
ApiKeyAuth
</aside>

## get/mapping/values/{key}

> Code samples

```bash
curl https://example.com/mapping/values/idType \
  -H 'Accept: application/json'
```

`GET /mapping/values/{key}`

Get values for enum-like fields.

<h3 id="getmappingvalueskey-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|key|path|string|true|Key of MappingJob for which to get possible values.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|key|idType|
|key|exchCode|
|key|micCode|
|key|currency|
|key|marketSecDes|
|key|securityType|
|key|securityType2|

> Example responses

> 200 Response

```json
{
  "values": [
    "string"
  ]
}
```

<h3 id="getmappingvalueskey-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The list of values.|Inline|
|400|Bad Request|Invalid request (key).|Inline|
|500|Internal Server Error|Internal server error.|Inline|

<h3 id="getmappingvalueskey-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|values|[string]|false|none|none|

<aside class="warning">
Authentication is optional for this operation. To authenticate, use one of the following methods:
ApiKeyAuth
</aside>

# Schemas

<h2 id="tocS_BulkMappingJob">BulkMappingJob</h2>
<!-- backwards compatibility -->
<a id="schemabulkmappingjob"></a>
<a id="schema_BulkMappingJob"></a>
<a id="tocSbulkmappingjob"></a>
<a id="tocsbulkmappingjob"></a>

```json
[
  {
    "contractSize": [
      0,
      0
    ],
    "coupon": [
      0,
      0
    ],
    "currency": "string",
    "exchCode": "string",
    "expiration": [
      "1970-01-01",
      "1970-01-01"
    ],
    "idType": "ID_ISIN",
    "idValue": "string",
    "includeUnlistedEquities": true,
    "marketSecDes": "string",
    "maturity": [
      "1970-01-01",
      "1970-01-01"
    ],
    "micCode": "string",
    "optionType": "Put",
    "securityType": "string",
    "securityType2": "string",
    "stateCode": "AB",
    "strike": [
      0,
      0
    ]
  }
]
```

<h2 id="tocS_BulkMappingJobResult">BulkMappingJobResult</h2>
<!-- backwards compatibility -->
<a id="schemabulkmappingjobresult"></a>
<a id="schema_BulkMappingJobResult"></a>
<a id="tocSbulkmappingjobresult"></a>
<a id="tocsbulkmappingjobresult"></a>

```json
[
  {
    "data": [
      {
        "compositeFIGI": "string",
        "exchCode": "string",
        "figi": "string",
        "marketSector": "string",
        "metadata": "string",
        "name": "string",
        "securityDescription": "string",
        "securityType": "string",
        "securityType2": "string",
        "shareClassFIGI": "string",
        "ticker": "string"
      }
    ]
  }
]
```

<h2 id="tocS_FigiResult">FigiResult</h2>
<!-- backwards compatibility -->
<a id="schemafigiresult"></a>
<a id="schema_FigiResult"></a>
<a id="tocSfigiresult"></a>
<a id="tocsfigiresult"></a>

```json
{
  "compositeFIGI": "string",
  "exchCode": "string",
  "figi": "string",
  "marketSector": "string",
  "metadata": "string",
  "name": "string",
  "securityDescription": "string",
  "securityType": "string",
  "securityType2": "string",
  "shareClassFIGI": "string",
  "ticker": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|compositeFIGI|string \| null|false|none|none|
|exchCode|string \| null|false|none|none|
|figi|string|false|none|none|
|marketSector|string \| null|false|none|none|
|metadata|string \| null|false|none|Exists when API is unable to show non-FIGI fields.|
|name|string \| null|false|none|none|
|securityDescription|string \| null|false|none|none|
|securityType|string \| null|false|none|none|
|securityType2|string \| null|false|none|none|
|shareClassFIGI|string \| null|false|none|none|
|ticker|string \| null|false|none|none|

<h2 id="tocS_MappingJob">MappingJob</h2>
<!-- backwards compatibility -->
<a id="schemamappingjob"></a>
<a id="schema_MappingJob"></a>
<a id="tocSmappingjob"></a>
<a id="tocsmappingjob"></a>

```json
{
  "contractSize": [
    0,
    0
  ],
  "coupon": [
    0,
    0
  ],
  "currency": "string",
  "exchCode": "string",
  "expiration": [
    "1970-01-01",
    "1970-01-01"
  ],
  "idType": "ID_ISIN",
  "idValue": "string",
  "includeUnlistedEquities": true,
  "marketSecDes": "string",
  "maturity": [
    "1970-01-01",
    "1970-01-01"
  ],
  "micCode": "string",
  "optionType": "Put",
  "securityType": "string",
  "securityType2": "string",
  "stateCode": "AB",
  "strike": [
    0,
    0
  ]
}
```

For V3: securityType2 is required when idType is BASE_TICKER or ID_EXCH_SYMBOL.  expiration is required when securityType2 is Option or Warrant.  maturity is required when securityType2 is Pool.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|contractSize|[NullableNumberInterval](#schemanullablenumberinterval)|false|none|At least one entry should be non-null.|
|coupon|[NullableNumberInterval](#schemanullablenumberinterval)|false|none|At least one entry should be non-null.|
|currency|string \| null|false|none|none|
|exchCode|string \| null|false|none|none|
|expiration|[NullableDateInterval](#schemanullabledateinterval)|false|none|At least one entry should be non-null.|
|idType|string|true|none|none|
|idValue|string \| integer|true|none|none|
|includeUnlistedEquities|boolean \| null|false|none|none|
|marketSecDes|string \| null|false|none|none|
|maturity|[NullableDateInterval](#schemanullabledateinterval)|false|none|At least one entry should be non-null.|
|micCode|string \| null|false|none|none|
|optionType|string \| null|false|none|none|
|securityType|string \| null|false|none|none|
|securityType2|string \| null|false|none|none|
|stateCode|string \| null|false|none|none|
|strike|[NullableNumberInterval](#schemanullablenumberinterval)|false|none|At least one entry should be non-null.|

#### Enumerated Values

|Property|Value|
|---|---|
|idType|ID_ISIN|
|idType|ID_BB_UNIQUE|
|idType|ID_SEDOL|
|idType|ID_COMMON|
|idType|ID_WERTPAPIER|
|idType|ID_CUSIP|
|idType|ID_BB|
|idType|ID_ITALY|
|idType|ID_EXCH_SYMBOL|
|idType|ID_FULL_EXCHANGE_SYMBOL|
|idType|COMPOSITE_ID_BB_GLOBAL|
|idType|ID_BB_GLOBAL_SHARE_CLASS_LEVEL|
|idType|ID_BB_SEC_NUM_DES|
|idType|ID_BB_GLOBAL|
|idType|TICKER|
|idType|ID_CUSIP_8_CHR|
|idType|OCC_SYMBOL|
|idType|UNIQUE_ID_FUT_OPT|
|idType|OPRA_SYMBOL|
|idType|TRADING_SYSTEM_IDENTIFIER|
|idType|ID_CINS|
|idType|ID_SHORT_CODE|
|idType|BASE_TICKER|
|idType|VENDOR_INDEX_CODE|
|optionType|Put|
|optionType|Call|
|stateCode|AB|
|stateCode|AC|
|stateCode|AC|
|stateCode|AH|
|stateCode|AK|
|stateCode|AL|
|stateCode|AM|
|stateCode|AR|
|stateCode|AS|
|stateCode|AT|
|stateCode|AZ|
|stateCode|BC|
|stateCode|BJ|
|stateCode|CA|
|stateCode|CB|
|stateCode|CO|
|stateCode|CQ|
|stateCode|CT|
|stateCode|CZ|
|stateCode|DC|
|stateCode|DE|
|stateCode|EH|
|stateCode|FH|
|stateCode|FI|
|stateCode|FJ|
|stateCode|FL|
|stateCode|FO|
|stateCode|FS|
|stateCode|GA|
|stateCode|GD|
|stateCode|GF|
|stateCode|GM|
|stateCode|GS|
|stateCode|GU|
|stateCode|GX|
|stateCode|GZ|
|stateCode|HA|
|stateCode|HB|
|stateCode|HE|
|stateCode|HG|
|stateCode|HI|
|stateCode|HI|
|stateCode|HL|
|stateCode|HN|
|stateCode|HO|
|stateCode|HS|
|stateCode|IA|
|stateCode|ID|
|stateCode|IG|
|stateCode|IK|
|stateCode|IL|
|stateCode|IN|
|stateCode|IT|
|stateCode|JL|
|stateCode|JS|
|stateCode|JX|
|stateCode|KA|
|stateCode|KC|
|stateCode|KN|
|stateCode|KO|
|stateCode|KS|
|stateCode|KT|
|stateCode|KU|
|stateCode|KY|
|stateCode|LA|
|stateCode|LN|
|stateCode|MA|
|stateCode|MB|
|stateCode|MD|
|stateCode|ME|
|stateCode|ME|
|stateCode|MG|
|stateCode|MI|
|stateCode|MN|
|stateCode|MO|
|stateCode|MS|
|stateCode|MT|
|stateCode|MZ|
|stateCode|NB|
|stateCode|NC|
|stateCode|ND|
|stateCode|NE|
|stateCode|NG|
|stateCode|NH|
|stateCode|NJ|
|stateCode|NL|
|stateCode|NM|
|stateCode|NM|
|stateCode|NN|
|stateCode|NR|
|stateCode|NS|
|stateCode|NS|
|stateCode|NS|
|stateCode|NT|
|stateCode|NU|
|stateCode|NV|
|stateCode|NW|
|stateCode|NX|
|stateCode|NY|
|stateCode|OH|
|stateCode|OK|
|stateCode|ON|
|stateCode|ON|
|stateCode|OR|
|stateCode|OS|
|stateCode|OT|
|stateCode|OT|
|stateCode|OY|
|stateCode|PA|
|stateCode|PE|
|stateCode|PR|
|stateCode|QC|
|stateCode|QH|
|stateCode|QL|
|stateCode|RI|
|stateCode|SA|
|stateCode|SA|
|stateCode|SC|
|stateCode|SC|
|stateCode|SD|
|stateCode|SD|
|stateCode|SH|
|stateCode|SI|
|stateCode|SK|
|stateCode|SN|
|stateCode|SN|
|stateCode|ST|
|stateCode|SX|
|stateCode|SZ|
|stateCode|TA|
|stateCode|TG|
|stateCode|TJ|
|stateCode|TK|
|stateCode|TN|
|stateCode|TS|
|stateCode|TT|
|stateCode|TT|
|stateCode|TX|
|stateCode|TY|
|stateCode|UT|
|stateCode|VA|
|stateCode|VI|
|stateCode|VI|
|stateCode|VT|
|stateCode|WA|
|stateCode|WA|
|stateCode|WI|
|stateCode|WK|
|stateCode|WV|
|stateCode|WY|
|stateCode|XJ|
|stateCode|XZ|
|stateCode|YA|
|stateCode|YN|
|stateCode|YN|
|stateCode|YT|
|stateCode|YU|
|stateCode|ZJ|

<h2 id="tocS_MappingJobResult">MappingJobResult</h2>
<!-- backwards compatibility -->
<a id="schemamappingjobresult"></a>
<a id="schema_MappingJobResult"></a>
<a id="tocSmappingjobresult"></a>
<a id="tocsmappingjobresult"></a>

```json
{
  "data": [
    {
      "compositeFIGI": "string",
      "exchCode": "string",
      "figi": "string",
      "marketSector": "string",
      "metadata": "string",
      "name": "string",
      "securityDescription": "string",
      "securityType": "string",
      "securityType2": "string",
      "shareClassFIGI": "string",
      "ticker": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[MappingJobResultFigiList](#schemamappingjobresultfigilist)|false|none|none|
|*oneOf*|[MappingJobResultFigiNotFound](#schemamappingjobresultfiginotfound)|false|none|none|

<h2 id="tocS_MappingJobResultFigiList">MappingJobResultFigiList</h2>
<!-- backwards compatibility -->
<a id="schemamappingjobresultfigilist"></a>
<a id="schema_MappingJobResultFigiList"></a>
<a id="tocSmappingjobresultfigilist"></a>
<a id="tocsmappingjobresultfigilist"></a>

```json
{
  "data": [
    {
      "compositeFIGI": "string",
      "exchCode": "string",
      "figi": "string",
      "marketSector": "string",
      "metadata": "string",
      "name": "string",
      "securityDescription": "string",
      "securityType": "string",
      "securityType2": "string",
      "shareClassFIGI": "string",
      "ticker": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[FigiResult](#schemafigiresult)]|false|none|none|

<h2 id="tocS_MappingJobResultFigiNotFound">MappingJobResultFigiNotFound</h2>
<!-- backwards compatibility -->
<a id="schemamappingjobresultfiginotfound"></a>
<a id="schema_MappingJobResultFigiNotFound"></a>
<a id="tocSmappingjobresultfiginotfound"></a>
<a id="tocsmappingjobresultfiginotfound"></a>

```json
{
  "warning": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|warning|string|false|none|none|

<h2 id="tocS_NullableDateInterval">NullableDateInterval</h2>
<!-- backwards compatibility -->
<a id="schemanullabledateinterval"></a>
<a id="schema_NullableDateInterval"></a>
<a id="tocSnullabledateinterval"></a>
<a id="tocsnullabledateinterval"></a>

```json
[
  "1970-01-01",
  "1970-01-01"
]
```

At least one entry should be non-null.

<h2 id="tocS_NullableNumberInterval">NullableNumberInterval</h2>
<!-- backwards compatibility -->
<a id="schemanullablenumberinterval"></a>
<a id="schema_NullableNumberInterval"></a>
<a id="tocSnullablenumberinterval"></a>
<a id="tocsnullablenumberinterval"></a>

```json
[
  0,
  0
]
```

At least one entry should be non-null.
