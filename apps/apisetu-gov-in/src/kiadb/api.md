<h1 id="karnataka-industrial-areas-development-board-karnataka">Karnataka Industrial Areas Development Board, Karnataka v3.0.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

KIADB, AP (http://en.kiadb.in/) is the online s for Karnataka State Govt. Certain documents issued by it (e.g. Allotment Letter,Building Plan, Water Supply Connection, NOC For Banks etc) are made available in citizens' DigiLocker accounts.

Base URLs:

* <a href="https://apisetu.gov.in/kiadb/v3">https://apisetu.gov.in/kiadb/v3</a>

<a href="https://apisetu.gov.in/terms.php">Terms of service</a>

# Authentication

* API Key (apiKey)
    - Parameter Name: **X-APISETU-APIKEY**, in: header.

* API Key (clientId)
    - Parameter Name: **X-APISETU-CLIENTID**, in: header.

<h1 id="karnataka-industrial-areas-development-board-karnataka-apis">APIs</h1>

## Allotment Letter

<a id="opIdalltr"></a>

> Code samples

```bash
curl https://example.com/alltr/certificate \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-APISETU-APIKEY: ${API_KEY}" \
  -H "X-APISETU-CLIENTID: ${API_KEY}" \
  -d '{
    "certificateParameters": {
      "DOB": "31-12-1980",
      "FullName": "Sunil Kumar",
      "RegNum": "KIADB2019AL0001",
      "UID": "123412341234"
    },
    "consentArtifact": {
      "consent": {
        "consentId": "ea9c43aa-7f5a-4bf3-a0be-e1caa24737ba",
        "data": {
          "id": "string"
        },
        "dataConsumer": {
          "id": "string"
        },
        "dataProvider": {
          "id": "string"
        },
        "permission": {
          "access": "string",
          "dateRange": {
            "from": "1970-01-01T00:00:00Z",
            "to": "1970-01-01T00:00:00Z"
          },
          "frequency": {
            "repeats": 0,
            "unit": "string",
            "value": 0
          }
        },
        "purpose": {
          "description": "string"
        },
        "timestamp": "1970-01-01T00:00:00Z",
        "user": {
          "email": "string",
          "idNumber": "string",
          "idType": "string",
          "mobile": "string"
        }
      },
      "signature": {
        "signature": "string"
      }
    },
    "format": "pdf",
    "txnId": "f7f1469c-29b0-4325-9dfc-c567200a70f7"
  }'
```

`POST /alltr/certificate`

API to verify Allotment Letter.

> Body parameter

```json
{
  "certificateParameters": {
    "DOB": "31-12-1980",
    "FullName": "Sunil Kumar",
    "RegNum": "KIADB2019AL0001",
    "UID": "123412341234"
  },
  "consentArtifact": {
    "consent": {
      "consentId": "ea9c43aa-7f5a-4bf3-a0be-e1caa24737ba",
      "data": {
        "id": "string"
      },
      "dataConsumer": {
        "id": "string"
      },
      "dataProvider": {
        "id": "string"
      },
      "permission": {
        "access": "string",
        "dateRange": {
          "from": "1970-01-01T00:00:00Z",
          "to": "1970-01-01T00:00:00Z"
        },
        "frequency": {
          "repeats": 0,
          "unit": "string",
          "value": 0
        }
      },
      "purpose": {
        "description": "string"
      },
      "timestamp": "1970-01-01T00:00:00Z",
      "user": {
        "email": "string",
        "idNumber": "string",
        "idType": "string",
        "mobile": "string"
      }
    },
    "signature": {
      "signature": "string"
    }
  },
  "format": "pdf",
  "txnId": "f7f1469c-29b0-4325-9dfc-c567200a70f7"
}
```

<h3 id="allotment-letter-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|Request format|
|» certificateParameters|body|object|false|none|
|» » DOB|body|string|true|Date of birth in DD-MM-YYYY format|
|» » FullName|body|string|true|Full name|
|» » RegNum|body|string|true|Registration Number|
|» » UID|body|string|true|Aadhaar number|
|» consentArtifact|body|[ConsentArtifactSchema](#schemaconsentartifactschema)|false|none|
|» format|body|string|true|The format of the certificate in response.|
|» txnId|body|string(uuid)|true|A unique transaction id for this request in UUID format. It is used for tracking the request.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» format|pdf|

> Example responses

> 200 Response

```text
Response body contains contents of the certificate in PDF format.
```

> 400 Response

```json
{
  "error": "missing_parameter",
  "errorDescription": "Please provide all mandatory parameters"
}
```

> 401 Response

```json
{
  "error": "invalid_authentication",
  "errorDescription": "Authentication failed"
}
```

> 404 Response

```json
{
  "error": "record_not_found",
  "errorDescription": "No record found"
}
```

> 500 Response

```json
{
  "error": "internal_server_error",
  "errorDescription": "Internal server error"
}
```

> 502 Response

```json
{
  "error": "bad_gatewy",
  "errorDescription": "Publisher service returned an invalid response"
}
```

> 503 Response

```json
{
  "error": "service_unavailable",
  "errorDescription": "Publisher service is temporarily unavailable"
}
```

> 504 Response

```json
{
  "error": "gateway_timeout",
  "errorDescription": "Publisher service did not respond in time"
}
```

<h3 id="allotment-letter-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The certificate data in response body in PDF, XML or JSON format as requested in format parameter.|None|
|400|Bad Request|Bad request|Inline|
|401|Unauthorized|Unauthorized access|Inline|
|404|Not Found|No record found|Inline|
|500|Internal Server Error|Internal server error|Inline|
|502|Bad Gateway|Bad gateway|Inline|
|503|Service Unavailable|Service unavailable|Inline|
|504|Gateway Timeout|Gateway timeout|Inline|

<h3 id="allotment-letter-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|false|none|none|
|errorDescription|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|error|missing_parameter|
|error|invalid_parameter|
|error|invalid_format|
|error|invalid_txnid|
|error|invalid_consentid|
|errorDescription|Please provide all mandatory parameters|
|errorDescription|Bad request|
|errorDescription|The format parameter is invalid|
|errorDescription|The txnId parameter must be in UUID format|
|errorDescription|The consentId parameter must be in UUID format|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|false|none|none|
|errorDescription|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|error|invalid_authentication|
|error|invalid_authorization|
|errorDescription|Authentication failed|
|errorDescription|You are not authorized to use this API|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|false|none|none|
|errorDescription|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|error|record_not_found|
|error|url_not_found|
|errorDescription|No record found|
|errorDescription|Your API url or path is incorrect|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|false|none|none|
|errorDescription|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|error|internal_server_error|
|errorDescription|Internal server error|

Status Code **502**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|false|none|none|
|errorDescription|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|error|bad_gatewy|
|errorDescription|Publisher service returned an invalid response|

Status Code **503**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|false|none|none|
|errorDescription|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|error|service_unavailable|
|errorDescription|Publisher service is temporarily unavailable|

Status Code **504**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|false|none|none|
|errorDescription|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|error|gateway_timeout|
|errorDescription|Publisher service did not respond in time|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey & clientId
</aside>

## NOC For Banks

<a id="opIdbknoc"></a>

> Code samples

```bash
curl https://example.com/bknoc/certificate \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-APISETU-APIKEY: ${API_KEY}" \
  -H "X-APISETU-CLIENTID: ${API_KEY}" \
  -d '{
    "certificateParameters": {
      "DOB": "31-12-1980",
      "FullName": "Sunil Kumar",
      "RegNum": "KIADB2019AL0001",
      "UID": "123412341234"
    },
    "consentArtifact": {
      "consent": {
        "consentId": "ea9c43aa-7f5a-4bf3-a0be-e1caa24737ba",
        "data": {
          "id": "string"
        },
        "dataConsumer": {
          "id": "string"
        },
        "dataProvider": {
          "id": "string"
        },
        "permission": {
          "access": "string",
          "dateRange": {
            "from": "1970-01-01T00:00:00Z",
            "to": "1970-01-01T00:00:00Z"
          },
          "frequency": {
            "repeats": 0,
            "unit": "string",
            "value": 0
          }
        },
        "purpose": {
          "description": "string"
        },
        "timestamp": "1970-01-01T00:00:00Z",
        "user": {
          "email": "string",
          "idNumber": "string",
          "idType": "string",
          "mobile": "string"
        }
      },
      "signature": {
        "signature": "string"
      }
    },
    "format": "pdf",
    "txnId": "f7f1469c-29b0-4325-9dfc-c567200a70f7"
  }'
```

`POST /bknoc/certificate`

API to verify NOC For Banks.

> Body parameter

```json
{
  "certificateParameters": {
    "DOB": "31-12-1980",
    "FullName": "Sunil Kumar",
    "RegNum": "KIADB2019AL0001",
    "UID": "123412341234"
  },
  "consentArtifact": {
    "consent": {
      "consentId": "ea9c43aa-7f5a-4bf3-a0be-e1caa24737ba",
      "data": {
        "id": "string"
      },
      "dataConsumer": {
        "id": "string"
      },
      "dataProvider": {
        "id": "string"
      },
      "permission": {
        "access": "string",
        "dateRange": {
          "from": "1970-01-01T00:00:00Z",
          "to": "1970-01-01T00:00:00Z"
        },
        "frequency": {
          "repeats": 0,
          "unit": "string",
          "value": 0
        }
      },
      "purpose": {
        "description": "string"
      },
      "timestamp": "1970-01-01T00:00:00Z",
      "user": {
        "email": "string",
        "idNumber": "string",
        "idType": "string",
        "mobile": "string"
      }
    },
    "signature": {
      "signature": "string"
    }
  },
  "format": "pdf",
  "txnId": "f7f1469c-29b0-4325-9dfc-c567200a70f7"
}
```

<h3 id="noc-for-banks-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|Request format|
|» certificateParameters|body|object|false|none|
|» » DOB|body|string|true|Date of birth in DD-MM-YYYY format|
|» » FullName|body|string|true|Full name|
|» » RegNum|body|string|true|Registration Number|
|» » UID|body|string|true|Aadhaar number|
|» consentArtifact|body|[ConsentArtifactSchema](#schemaconsentartifactschema)|false|none|
|» format|body|string|true|The format of the certificate in response.|
|» txnId|body|string(uuid)|true|A unique transaction id for this request in UUID format. It is used for tracking the request.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» format|pdf|

> Example responses

> 200 Response

```text
Response body contains contents of the certificate in PDF format.
```

> 400 Response

```json
{
  "error": "missing_parameter",
  "errorDescription": "Please provide all mandatory parameters"
}
```

> 401 Response

```json
{
  "error": "invalid_authentication",
  "errorDescription": "Authentication failed"
}
```

> 404 Response

```json
{
  "error": "record_not_found",
  "errorDescription": "No record found"
}
```

> 500 Response

```json
{
  "error": "internal_server_error",
  "errorDescription": "Internal server error"
}
```

> 502 Response

```json
{
  "error": "bad_gatewy",
  "errorDescription": "Publisher service returned an invalid response"
}
```

> 503 Response

```json
{
  "error": "service_unavailable",
  "errorDescription": "Publisher service is temporarily unavailable"
}
```

> 504 Response

```json
{
  "error": "gateway_timeout",
  "errorDescription": "Publisher service did not respond in time"
}
```

<h3 id="noc-for-banks-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The certificate data in response body in PDF, XML or JSON format as requested in format parameter.|None|
|400|Bad Request|Bad request|Inline|
|401|Unauthorized|Unauthorized access|Inline|
|404|Not Found|No record found|Inline|
|500|Internal Server Error|Internal server error|Inline|
|502|Bad Gateway|Bad gateway|Inline|
|503|Service Unavailable|Service unavailable|Inline|
|504|Gateway Timeout|Gateway timeout|Inline|

<h3 id="noc-for-banks-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|false|none|none|
|errorDescription|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|error|missing_parameter|
|error|invalid_parameter|
|error|invalid_format|
|error|invalid_txnid|
|error|invalid_consentid|
|errorDescription|Please provide all mandatory parameters|
|errorDescription|Bad request|
|errorDescription|The format parameter is invalid|
|errorDescription|The txnId parameter must be in UUID format|
|errorDescription|The consentId parameter must be in UUID format|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|false|none|none|
|errorDescription|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|error|invalid_authentication|
|error|invalid_authorization|
|errorDescription|Authentication failed|
|errorDescription|You are not authorized to use this API|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|false|none|none|
|errorDescription|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|error|record_not_found|
|error|url_not_found|
|errorDescription|No record found|
|errorDescription|Your API url or path is incorrect|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|false|none|none|
|errorDescription|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|error|internal_server_error|
|errorDescription|Internal server error|

Status Code **502**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|false|none|none|
|errorDescription|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|error|bad_gatewy|
|errorDescription|Publisher service returned an invalid response|

Status Code **503**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|false|none|none|
|errorDescription|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|error|service_unavailable|
|errorDescription|Publisher service is temporarily unavailable|

Status Code **504**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|false|none|none|
|errorDescription|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|error|gateway_timeout|
|errorDescription|Publisher service did not respond in time|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey & clientId
</aside>

## Building Plan

<a id="opIdbpcer"></a>

> Code samples

```bash
curl https://example.com/bpcer/certificate \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-APISETU-APIKEY: ${API_KEY}" \
  -H "X-APISETU-CLIENTID: ${API_KEY}" \
  -d '{
    "certificateParameters": {
      "DOB": "31-12-1980",
      "FullName": "Sunil Kumar",
      "RegNum": "KIADB2019AL0001",
      "UID": "123412341234"
    },
    "consentArtifact": {
      "consent": {
        "consentId": "ea9c43aa-7f5a-4bf3-a0be-e1caa24737ba",
        "data": {
          "id": "string"
        },
        "dataConsumer": {
          "id": "string"
        },
        "dataProvider": {
          "id": "string"
        },
        "permission": {
          "access": "string",
          "dateRange": {
            "from": "1970-01-01T00:00:00Z",
            "to": "1970-01-01T00:00:00Z"
          },
          "frequency": {
            "repeats": 0,
            "unit": "string",
            "value": 0
          }
        },
        "purpose": {
          "description": "string"
        },
        "timestamp": "1970-01-01T00:00:00Z",
        "user": {
          "email": "string",
          "idNumber": "string",
          "idType": "string",
          "mobile": "string"
        }
      },
      "signature": {
        "signature": "string"
      }
    },
    "format": "pdf",
    "txnId": "f7f1469c-29b0-4325-9dfc-c567200a70f7"
  }'
```

`POST /bpcer/certificate`

API to verify Building Plan.

> Body parameter

```json
{
  "certificateParameters": {
    "DOB": "31-12-1980",
    "FullName": "Sunil Kumar",
    "RegNum": "KIADB2019AL0001",
    "UID": "123412341234"
  },
  "consentArtifact": {
    "consent": {
      "consentId": "ea9c43aa-7f5a-4bf3-a0be-e1caa24737ba",
      "data": {
        "id": "string"
      },
      "dataConsumer": {
        "id": "string"
      },
      "dataProvider": {
        "id": "string"
      },
      "permission": {
        "access": "string",
        "dateRange": {
          "from": "1970-01-01T00:00:00Z",
          "to": "1970-01-01T00:00:00Z"
        },
        "frequency": {
          "repeats": 0,
          "unit": "string",
          "value": 0
        }
      },
      "purpose": {
        "description": "string"
      },
      "timestamp": "1970-01-01T00:00:00Z",
      "user": {
        "email": "string",
        "idNumber": "string",
        "idType": "string",
        "mobile": "string"
      }
    },
    "signature": {
      "signature": "string"
    }
  },
  "format": "pdf",
  "txnId": "f7f1469c-29b0-4325-9dfc-c567200a70f7"
}
```

<h3 id="building-plan-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|Request format|
|» certificateParameters|body|object|false|none|
|» » DOB|body|string|true|Date of birth in DD-MM-YYYY format|
|» » FullName|body|string|true|Full name|
|» » RegNum|body|string|true|Registration Number|
|» » UID|body|string|true|Aadhaar number|
|» consentArtifact|body|[ConsentArtifactSchema](#schemaconsentartifactschema)|false|none|
|» format|body|string|true|The format of the certificate in response.|
|» txnId|body|string(uuid)|true|A unique transaction id for this request in UUID format. It is used for tracking the request.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» format|pdf|

> Example responses

> 200 Response

```text
Response body contains contents of the certificate in PDF format.
```

> 400 Response

```json
{
  "error": "missing_parameter",
  "errorDescription": "Please provide all mandatory parameters"
}
```

> 401 Response

```json
{
  "error": "invalid_authentication",
  "errorDescription": "Authentication failed"
}
```

> 404 Response

```json
{
  "error": "record_not_found",
  "errorDescription": "No record found"
}
```

> 500 Response

```json
{
  "error": "internal_server_error",
  "errorDescription": "Internal server error"
}
```

> 502 Response

```json
{
  "error": "bad_gatewy",
  "errorDescription": "Publisher service returned an invalid response"
}
```

> 503 Response

```json
{
  "error": "service_unavailable",
  "errorDescription": "Publisher service is temporarily unavailable"
}
```

> 504 Response

```json
{
  "error": "gateway_timeout",
  "errorDescription": "Publisher service did not respond in time"
}
```

<h3 id="building-plan-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The certificate data in response body in PDF, XML or JSON format as requested in format parameter.|None|
|400|Bad Request|Bad request|Inline|
|401|Unauthorized|Unauthorized access|Inline|
|404|Not Found|No record found|Inline|
|500|Internal Server Error|Internal server error|Inline|
|502|Bad Gateway|Bad gateway|Inline|
|503|Service Unavailable|Service unavailable|Inline|
|504|Gateway Timeout|Gateway timeout|Inline|

<h3 id="building-plan-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|false|none|none|
|errorDescription|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|error|missing_parameter|
|error|invalid_parameter|
|error|invalid_format|
|error|invalid_txnid|
|error|invalid_consentid|
|errorDescription|Please provide all mandatory parameters|
|errorDescription|Bad request|
|errorDescription|The format parameter is invalid|
|errorDescription|The txnId parameter must be in UUID format|
|errorDescription|The consentId parameter must be in UUID format|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|false|none|none|
|errorDescription|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|error|invalid_authentication|
|error|invalid_authorization|
|errorDescription|Authentication failed|
|errorDescription|You are not authorized to use this API|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|false|none|none|
|errorDescription|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|error|record_not_found|
|error|url_not_found|
|errorDescription|No record found|
|errorDescription|Your API url or path is incorrect|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|false|none|none|
|errorDescription|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|error|internal_server_error|
|errorDescription|Internal server error|

Status Code **502**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|false|none|none|
|errorDescription|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|error|bad_gatewy|
|errorDescription|Publisher service returned an invalid response|

Status Code **503**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|false|none|none|
|errorDescription|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|error|service_unavailable|
|errorDescription|Publisher service is temporarily unavailable|

Status Code **504**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|false|none|none|
|errorDescription|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|error|gateway_timeout|
|errorDescription|Publisher service did not respond in time|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey & clientId
</aside>

## Confirmatory Letter

<a id="opIdcfltr"></a>

> Code samples

```bash
curl https://example.com/cfltr/certificate \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-APISETU-APIKEY: ${API_KEY}" \
  -H "X-APISETU-CLIENTID: ${API_KEY}" \
  -d '{
    "certificateParameters": {
      "DOB": "31-12-1980",
      "FullName": "Sunil Kumar",
      "RegNum": "KIADB2019AL0001",
      "UID": "123412341234"
    },
    "consentArtifact": {
      "consent": {
        "consentId": "ea9c43aa-7f5a-4bf3-a0be-e1caa24737ba",
        "data": {
          "id": "string"
        },
        "dataConsumer": {
          "id": "string"
        },
        "dataProvider": {
          "id": "string"
        },
        "permission": {
          "access": "string",
          "dateRange": {
            "from": "1970-01-01T00:00:00Z",
            "to": "1970-01-01T00:00:00Z"
          },
          "frequency": {
            "repeats": 0,
            "unit": "string",
            "value": 0
          }
        },
        "purpose": {
          "description": "string"
        },
        "timestamp": "1970-01-01T00:00:00Z",
        "user": {
          "email": "string",
          "idNumber": "string",
          "idType": "string",
          "mobile": "string"
        }
      },
      "signature": {
        "signature": "string"
      }
    },
    "format": "pdf",
    "txnId": "f7f1469c-29b0-4325-9dfc-c567200a70f7"
  }'
```

`POST /cfltr/certificate`

API to verify Confirmatory Letter.

> Body parameter

```json
{
  "certificateParameters": {
    "DOB": "31-12-1980",
    "FullName": "Sunil Kumar",
    "RegNum": "KIADB2019AL0001",
    "UID": "123412341234"
  },
  "consentArtifact": {
    "consent": {
      "consentId": "ea9c43aa-7f5a-4bf3-a0be-e1caa24737ba",
      "data": {
        "id": "string"
      },
      "dataConsumer": {
        "id": "string"
      },
      "dataProvider": {
        "id": "string"
      },
      "permission": {
        "access": "string",
        "dateRange": {
          "from": "1970-01-01T00:00:00Z",
          "to": "1970-01-01T00:00:00Z"
        },
        "frequency": {
          "repeats": 0,
          "unit": "string",
          "value": 0
        }
      },
      "purpose": {
        "description": "string"
      },
      "timestamp": "1970-01-01T00:00:00Z",
      "user": {
        "email": "string",
        "idNumber": "string",
        "idType": "string",
        "mobile": "string"
      }
    },
    "signature": {
      "signature": "string"
    }
  },
  "format": "pdf",
  "txnId": "f7f1469c-29b0-4325-9dfc-c567200a70f7"
}
```

<h3 id="confirmatory-letter-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|Request format|
|» certificateParameters|body|object|false|none|
|» » DOB|body|string|true|Date of birth in DD-MM-YYYY format|
|» » FullName|body|string|true|Full name|
|» » RegNum|body|string|true|Registration Number|
|» » UID|body|string|true|Aadhaar number|
|» consentArtifact|body|[ConsentArtifactSchema](#schemaconsentartifactschema)|false|none|
|» format|body|string|true|The format of the certificate in response.|
|» txnId|body|string(uuid)|true|A unique transaction id for this request in UUID format. It is used for tracking the request.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» format|pdf|

> Example responses

> 200 Response

```text
Response body contains contents of the certificate in PDF format.
```

> 400 Response

```json
{
  "error": "missing_parameter",
  "errorDescription": "Please provide all mandatory parameters"
}
```

> 401 Response

```json
{
  "error": "invalid_authentication",
  "errorDescription": "Authentication failed"
}
```

> 404 Response

```json
{
  "error": "record_not_found",
  "errorDescription": "No record found"
}
```

> 500 Response

```json
{
  "error": "internal_server_error",
  "errorDescription": "Internal server error"
}
```

> 502 Response

```json
{
  "error": "bad_gatewy",
  "errorDescription": "Publisher service returned an invalid response"
}
```

> 503 Response

```json
{
  "error": "service_unavailable",
  "errorDescription": "Publisher service is temporarily unavailable"
}
```

> 504 Response

```json
{
  "error": "gateway_timeout",
  "errorDescription": "Publisher service did not respond in time"
}
```

<h3 id="confirmatory-letter-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The certificate data in response body in PDF, XML or JSON format as requested in format parameter.|None|
|400|Bad Request|Bad request|Inline|
|401|Unauthorized|Unauthorized access|Inline|
|404|Not Found|No record found|Inline|
|500|Internal Server Error|Internal server error|Inline|
|502|Bad Gateway|Bad gateway|Inline|
|503|Service Unavailable|Service unavailable|Inline|
|504|Gateway Timeout|Gateway timeout|Inline|

<h3 id="confirmatory-letter-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|false|none|none|
|errorDescription|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|error|missing_parameter|
|error|invalid_parameter|
|error|invalid_format|
|error|invalid_txnid|
|error|invalid_consentid|
|errorDescription|Please provide all mandatory parameters|
|errorDescription|Bad request|
|errorDescription|The format parameter is invalid|
|errorDescription|The txnId parameter must be in UUID format|
|errorDescription|The consentId parameter must be in UUID format|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|false|none|none|
|errorDescription|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|error|invalid_authentication|
|error|invalid_authorization|
|errorDescription|Authentication failed|
|errorDescription|You are not authorized to use this API|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|false|none|none|
|errorDescription|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|error|record_not_found|
|error|url_not_found|
|errorDescription|No record found|
|errorDescription|Your API url or path is incorrect|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|false|none|none|
|errorDescription|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|error|internal_server_error|
|errorDescription|Internal server error|

Status Code **502**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|false|none|none|
|errorDescription|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|error|bad_gatewy|
|errorDescription|Publisher service returned an invalid response|

Status Code **503**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|false|none|none|
|errorDescription|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|error|service_unavailable|
|errorDescription|Publisher service is temporarily unavailable|

Status Code **504**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|false|none|none|
|errorDescription|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|error|gateway_timeout|
|errorDescription|Publisher service did not respond in time|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey & clientId
</aside>

## Lease cum Sale Agreement

<a id="opIdlcsag"></a>

> Code samples

```bash
curl https://example.com/lcsag/certificate \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-APISETU-APIKEY: ${API_KEY}" \
  -H "X-APISETU-CLIENTID: ${API_KEY}" \
  -d '{
    "certificateParameters": {
      "DOB": "31-12-1980",
      "FullName": "Sunil Kumar",
      "RegNum": "KIADB2019AL0001",
      "UID": "123412341234"
    },
    "consentArtifact": {
      "consent": {
        "consentId": "ea9c43aa-7f5a-4bf3-a0be-e1caa24737ba",
        "data": {
          "id": "string"
        },
        "dataConsumer": {
          "id": "string"
        },
        "dataProvider": {
          "id": "string"
        },
        "permission": {
          "access": "string",
          "dateRange": {
            "from": "1970-01-01T00:00:00Z",
            "to": "1970-01-01T00:00:00Z"
          },
          "frequency": {
            "repeats": 0,
            "unit": "string",
            "value": 0
          }
        },
        "purpose": {
          "description": "string"
        },
        "timestamp": "1970-01-01T00:00:00Z",
        "user": {
          "email": "string",
          "idNumber": "string",
          "idType": "string",
          "mobile": "string"
        }
      },
      "signature": {
        "signature": "string"
      }
    },
    "format": "pdf",
    "txnId": "f7f1469c-29b0-4325-9dfc-c567200a70f7"
  }'
```

`POST /lcsag/certificate`

API to verify Lease cum Sale Agreement.

> Body parameter

```json
{
  "certificateParameters": {
    "DOB": "31-12-1980",
    "FullName": "Sunil Kumar",
    "RegNum": "KIADB2019AL0001",
    "UID": "123412341234"
  },
  "consentArtifact": {
    "consent": {
      "consentId": "ea9c43aa-7f5a-4bf3-a0be-e1caa24737ba",
      "data": {
        "id": "string"
      },
      "dataConsumer": {
        "id": "string"
      },
      "dataProvider": {
        "id": "string"
      },
      "permission": {
        "access": "string",
        "dateRange": {
          "from": "1970-01-01T00:00:00Z",
          "to": "1970-01-01T00:00:00Z"
        },
        "frequency": {
          "repeats": 0,
          "unit": "string",
          "value": 0
        }
      },
      "purpose": {
        "description": "string"
      },
      "timestamp": "1970-01-01T00:00:00Z",
      "user": {
        "email": "string",
        "idNumber": "string",
        "idType": "string",
        "mobile": "string"
      }
    },
    "signature": {
      "signature": "string"
    }
  },
  "format": "pdf",
  "txnId": "f7f1469c-29b0-4325-9dfc-c567200a70f7"
}
```

<h3 id="lease-cum-sale-agreement-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|Request format|
|» certificateParameters|body|object|false|none|
|» » DOB|body|string|true|Date of birth in DD-MM-YYYY format|
|» » FullName|body|string|true|Full name|
|» » RegNum|body|string|true|Registration Number|
|» » UID|body|string|true|Aadhaar number|
|» consentArtifact|body|[ConsentArtifactSchema](#schemaconsentartifactschema)|false|none|
|» format|body|string|true|The format of the certificate in response.|
|» txnId|body|string(uuid)|true|A unique transaction id for this request in UUID format. It is used for tracking the request.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» format|pdf|

> Example responses

> 200 Response

```text
Response body contains contents of the certificate in PDF format.
```

> 400 Response

```json
{
  "error": "missing_parameter",
  "errorDescription": "Please provide all mandatory parameters"
}
```

> 401 Response

```json
{
  "error": "invalid_authentication",
  "errorDescription": "Authentication failed"
}
```

> 404 Response

```json
{
  "error": "record_not_found",
  "errorDescription": "No record found"
}
```

> 500 Response

```json
{
  "error": "internal_server_error",
  "errorDescription": "Internal server error"
}
```

> 502 Response

```json
{
  "error": "bad_gatewy",
  "errorDescription": "Publisher service returned an invalid response"
}
```

> 503 Response

```json
{
  "error": "service_unavailable",
  "errorDescription": "Publisher service is temporarily unavailable"
}
```

> 504 Response

```json
{
  "error": "gateway_timeout",
  "errorDescription": "Publisher service did not respond in time"
}
```

<h3 id="lease-cum-sale-agreement-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The certificate data in response body in PDF, XML or JSON format as requested in format parameter.|None|
|400|Bad Request|Bad request|Inline|
|401|Unauthorized|Unauthorized access|Inline|
|404|Not Found|No record found|Inline|
|500|Internal Server Error|Internal server error|Inline|
|502|Bad Gateway|Bad gateway|Inline|
|503|Service Unavailable|Service unavailable|Inline|
|504|Gateway Timeout|Gateway timeout|Inline|

<h3 id="lease-cum-sale-agreement-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|false|none|none|
|errorDescription|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|error|missing_parameter|
|error|invalid_parameter|
|error|invalid_format|
|error|invalid_txnid|
|error|invalid_consentid|
|errorDescription|Please provide all mandatory parameters|
|errorDescription|Bad request|
|errorDescription|The format parameter is invalid|
|errorDescription|The txnId parameter must be in UUID format|
|errorDescription|The consentId parameter must be in UUID format|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|false|none|none|
|errorDescription|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|error|invalid_authentication|
|error|invalid_authorization|
|errorDescription|Authentication failed|
|errorDescription|You are not authorized to use this API|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|false|none|none|
|errorDescription|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|error|record_not_found|
|error|url_not_found|
|errorDescription|No record found|
|errorDescription|Your API url or path is incorrect|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|false|none|none|
|errorDescription|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|error|internal_server_error|
|errorDescription|Internal server error|

Status Code **502**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|false|none|none|
|errorDescription|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|error|bad_gatewy|
|errorDescription|Publisher service returned an invalid response|

Status Code **503**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|false|none|none|
|errorDescription|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|error|service_unavailable|
|errorDescription|Publisher service is temporarily unavailable|

Status Code **504**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|false|none|none|
|errorDescription|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|error|gateway_timeout|
|errorDescription|Publisher service did not respond in time|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey & clientId
</aside>

## Possession Certificate

<a id="opIdpscer"></a>

> Code samples

```bash
curl https://example.com/pscer/certificate \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-APISETU-APIKEY: ${API_KEY}" \
  -H "X-APISETU-CLIENTID: ${API_KEY}" \
  -d '{
    "certificateParameters": {
      "DOB": "31-12-1980",
      "FullName": "Sunil Kumar",
      "RegNum": "KIADB2019AL0001",
      "UID": "123412341234"
    },
    "consentArtifact": {
      "consent": {
        "consentId": "ea9c43aa-7f5a-4bf3-a0be-e1caa24737ba",
        "data": {
          "id": "string"
        },
        "dataConsumer": {
          "id": "string"
        },
        "dataProvider": {
          "id": "string"
        },
        "permission": {
          "access": "string",
          "dateRange": {
            "from": "1970-01-01T00:00:00Z",
            "to": "1970-01-01T00:00:00Z"
          },
          "frequency": {
            "repeats": 0,
            "unit": "string",
            "value": 0
          }
        },
        "purpose": {
          "description": "string"
        },
        "timestamp": "1970-01-01T00:00:00Z",
        "user": {
          "email": "string",
          "idNumber": "string",
          "idType": "string",
          "mobile": "string"
        }
      },
      "signature": {
        "signature": "string"
      }
    },
    "format": "pdf",
    "txnId": "f7f1469c-29b0-4325-9dfc-c567200a70f7"
  }'
```

`POST /pscer/certificate`

API to verify Possession Certificate.

> Body parameter

```json
{
  "certificateParameters": {
    "DOB": "31-12-1980",
    "FullName": "Sunil Kumar",
    "RegNum": "KIADB2019AL0001",
    "UID": "123412341234"
  },
  "consentArtifact": {
    "consent": {
      "consentId": "ea9c43aa-7f5a-4bf3-a0be-e1caa24737ba",
      "data": {
        "id": "string"
      },
      "dataConsumer": {
        "id": "string"
      },
      "dataProvider": {
        "id": "string"
      },
      "permission": {
        "access": "string",
        "dateRange": {
          "from": "1970-01-01T00:00:00Z",
          "to": "1970-01-01T00:00:00Z"
        },
        "frequency": {
          "repeats": 0,
          "unit": "string",
          "value": 0
        }
      },
      "purpose": {
        "description": "string"
      },
      "timestamp": "1970-01-01T00:00:00Z",
      "user": {
        "email": "string",
        "idNumber": "string",
        "idType": "string",
        "mobile": "string"
      }
    },
    "signature": {
      "signature": "string"
    }
  },
  "format": "pdf",
  "txnId": "f7f1469c-29b0-4325-9dfc-c567200a70f7"
}
```

<h3 id="possession-certificate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|Request format|
|» certificateParameters|body|object|false|none|
|» » DOB|body|string|true|Date of birth in DD-MM-YYYY format|
|» » FullName|body|string|true|Full name|
|» » RegNum|body|string|true|Registration Number|
|» » UID|body|string|true|Aadhaar number|
|» consentArtifact|body|[ConsentArtifactSchema](#schemaconsentartifactschema)|false|none|
|» format|body|string|true|The format of the certificate in response.|
|» txnId|body|string(uuid)|true|A unique transaction id for this request in UUID format. It is used for tracking the request.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» format|pdf|

> Example responses

> 200 Response

```text
Response body contains contents of the certificate in PDF format.
```

> 400 Response

```json
{
  "error": "missing_parameter",
  "errorDescription": "Please provide all mandatory parameters"
}
```

> 401 Response

```json
{
  "error": "invalid_authentication",
  "errorDescription": "Authentication failed"
}
```

> 404 Response

```json
{
  "error": "record_not_found",
  "errorDescription": "No record found"
}
```

> 500 Response

```json
{
  "error": "internal_server_error",
  "errorDescription": "Internal server error"
}
```

> 502 Response

```json
{
  "error": "bad_gatewy",
  "errorDescription": "Publisher service returned an invalid response"
}
```

> 503 Response

```json
{
  "error": "service_unavailable",
  "errorDescription": "Publisher service is temporarily unavailable"
}
```

> 504 Response

```json
{
  "error": "gateway_timeout",
  "errorDescription": "Publisher service did not respond in time"
}
```

<h3 id="possession-certificate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The certificate data in response body in PDF, XML or JSON format as requested in format parameter.|None|
|400|Bad Request|Bad request|Inline|
|401|Unauthorized|Unauthorized access|Inline|
|404|Not Found|No record found|Inline|
|500|Internal Server Error|Internal server error|Inline|
|502|Bad Gateway|Bad gateway|Inline|
|503|Service Unavailable|Service unavailable|Inline|
|504|Gateway Timeout|Gateway timeout|Inline|

<h3 id="possession-certificate-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|false|none|none|
|errorDescription|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|error|missing_parameter|
|error|invalid_parameter|
|error|invalid_format|
|error|invalid_txnid|
|error|invalid_consentid|
|errorDescription|Please provide all mandatory parameters|
|errorDescription|Bad request|
|errorDescription|The format parameter is invalid|
|errorDescription|The txnId parameter must be in UUID format|
|errorDescription|The consentId parameter must be in UUID format|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|false|none|none|
|errorDescription|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|error|invalid_authentication|
|error|invalid_authorization|
|errorDescription|Authentication failed|
|errorDescription|You are not authorized to use this API|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|false|none|none|
|errorDescription|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|error|record_not_found|
|error|url_not_found|
|errorDescription|No record found|
|errorDescription|Your API url or path is incorrect|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|false|none|none|
|errorDescription|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|error|internal_server_error|
|errorDescription|Internal server error|

Status Code **502**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|false|none|none|
|errorDescription|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|error|bad_gatewy|
|errorDescription|Publisher service returned an invalid response|

Status Code **503**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|false|none|none|
|errorDescription|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|error|service_unavailable|
|errorDescription|Publisher service is temporarily unavailable|

Status Code **504**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|false|none|none|
|errorDescription|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|error|gateway_timeout|
|errorDescription|Publisher service did not respond in time|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey & clientId
</aside>

## NOC for New Power Supply

<a id="opIdpsnoc"></a>

> Code samples

```bash
curl https://example.com/psnoc/certificate \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-APISETU-APIKEY: ${API_KEY}" \
  -H "X-APISETU-CLIENTID: ${API_KEY}" \
  -d '{
    "certificateParameters": {
      "DOB": "31-12-1980",
      "FullName": "Sunil Kumar",
      "RegNum": "KIADB2019AL0001",
      "UID": "123412341234"
    },
    "consentArtifact": {
      "consent": {
        "consentId": "ea9c43aa-7f5a-4bf3-a0be-e1caa24737ba",
        "data": {
          "id": "string"
        },
        "dataConsumer": {
          "id": "string"
        },
        "dataProvider": {
          "id": "string"
        },
        "permission": {
          "access": "string",
          "dateRange": {
            "from": "1970-01-01T00:00:00Z",
            "to": "1970-01-01T00:00:00Z"
          },
          "frequency": {
            "repeats": 0,
            "unit": "string",
            "value": 0
          }
        },
        "purpose": {
          "description": "string"
        },
        "timestamp": "1970-01-01T00:00:00Z",
        "user": {
          "email": "string",
          "idNumber": "string",
          "idType": "string",
          "mobile": "string"
        }
      },
      "signature": {
        "signature": "string"
      }
    },
    "format": "pdf",
    "txnId": "f7f1469c-29b0-4325-9dfc-c567200a70f7"
  }'
```

`POST /psnoc/certificate`

API to verify NOC for New Power Supply.

> Body parameter

```json
{
  "certificateParameters": {
    "DOB": "31-12-1980",
    "FullName": "Sunil Kumar",
    "RegNum": "KIADB2019AL0001",
    "UID": "123412341234"
  },
  "consentArtifact": {
    "consent": {
      "consentId": "ea9c43aa-7f5a-4bf3-a0be-e1caa24737ba",
      "data": {
        "id": "string"
      },
      "dataConsumer": {
        "id": "string"
      },
      "dataProvider": {
        "id": "string"
      },
      "permission": {
        "access": "string",
        "dateRange": {
          "from": "1970-01-01T00:00:00Z",
          "to": "1970-01-01T00:00:00Z"
        },
        "frequency": {
          "repeats": 0,
          "unit": "string",
          "value": 0
        }
      },
      "purpose": {
        "description": "string"
      },
      "timestamp": "1970-01-01T00:00:00Z",
      "user": {
        "email": "string",
        "idNumber": "string",
        "idType": "string",
        "mobile": "string"
      }
    },
    "signature": {
      "signature": "string"
    }
  },
  "format": "pdf",
  "txnId": "f7f1469c-29b0-4325-9dfc-c567200a70f7"
}
```

<h3 id="noc-for-new-power-supply-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|Request format|
|» certificateParameters|body|object|false|none|
|» » DOB|body|string|true|Date of birth in DD-MM-YYYY format|
|» » FullName|body|string|true|Full name|
|» » RegNum|body|string|true|Registration Number|
|» » UID|body|string|true|Aadhaar number|
|» consentArtifact|body|[ConsentArtifactSchema](#schemaconsentartifactschema)|false|none|
|» format|body|string|true|The format of the certificate in response.|
|» txnId|body|string(uuid)|true|A unique transaction id for this request in UUID format. It is used for tracking the request.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» format|pdf|

> Example responses

> 200 Response

```text
Response body contains contents of the certificate in PDF format.
```

> 400 Response

```json
{
  "error": "missing_parameter",
  "errorDescription": "Please provide all mandatory parameters"
}
```

> 401 Response

```json
{
  "error": "invalid_authentication",
  "errorDescription": "Authentication failed"
}
```

> 404 Response

```json
{
  "error": "record_not_found",
  "errorDescription": "No record found"
}
```

> 500 Response

```json
{
  "error": "internal_server_error",
  "errorDescription": "Internal server error"
}
```

> 502 Response

```json
{
  "error": "bad_gatewy",
  "errorDescription": "Publisher service returned an invalid response"
}
```

> 503 Response

```json
{
  "error": "service_unavailable",
  "errorDescription": "Publisher service is temporarily unavailable"
}
```

> 504 Response

```json
{
  "error": "gateway_timeout",
  "errorDescription": "Publisher service did not respond in time"
}
```

<h3 id="noc-for-new-power-supply-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The certificate data in response body in PDF, XML or JSON format as requested in format parameter.|None|
|400|Bad Request|Bad request|Inline|
|401|Unauthorized|Unauthorized access|Inline|
|404|Not Found|No record found|Inline|
|500|Internal Server Error|Internal server error|Inline|
|502|Bad Gateway|Bad gateway|Inline|
|503|Service Unavailable|Service unavailable|Inline|
|504|Gateway Timeout|Gateway timeout|Inline|

<h3 id="noc-for-new-power-supply-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|false|none|none|
|errorDescription|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|error|missing_parameter|
|error|invalid_parameter|
|error|invalid_format|
|error|invalid_txnid|
|error|invalid_consentid|
|errorDescription|Please provide all mandatory parameters|
|errorDescription|Bad request|
|errorDescription|The format parameter is invalid|
|errorDescription|The txnId parameter must be in UUID format|
|errorDescription|The consentId parameter must be in UUID format|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|false|none|none|
|errorDescription|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|error|invalid_authentication|
|error|invalid_authorization|
|errorDescription|Authentication failed|
|errorDescription|You are not authorized to use this API|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|false|none|none|
|errorDescription|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|error|record_not_found|
|error|url_not_found|
|errorDescription|No record found|
|errorDescription|Your API url or path is incorrect|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|false|none|none|
|errorDescription|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|error|internal_server_error|
|errorDescription|Internal server error|

Status Code **502**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|false|none|none|
|errorDescription|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|error|bad_gatewy|
|errorDescription|Publisher service returned an invalid response|

Status Code **503**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|false|none|none|
|errorDescription|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|error|service_unavailable|
|errorDescription|Publisher service is temporarily unavailable|

Status Code **504**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|false|none|none|
|errorDescription|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|error|gateway_timeout|
|errorDescription|Publisher service did not respond in time|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey & clientId
</aside>

## Water Bill/ Connection

<a id="opIdwtrbl"></a>

> Code samples

```bash
curl https://example.com/wtrbl/certificate \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-APISETU-APIKEY: ${API_KEY}" \
  -H "X-APISETU-CLIENTID: ${API_KEY}" \
  -d '{
    "certificateParameters": {
      "DOB": "31-12-1980",
      "FullName": "Sunil Kumar",
      "RegNum": "KIADB2019AL0001",
      "UID": "123412341234"
    },
    "consentArtifact": {
      "consent": {
        "consentId": "ea9c43aa-7f5a-4bf3-a0be-e1caa24737ba",
        "data": {
          "id": "string"
        },
        "dataConsumer": {
          "id": "string"
        },
        "dataProvider": {
          "id": "string"
        },
        "permission": {
          "access": "string",
          "dateRange": {
            "from": "1970-01-01T00:00:00Z",
            "to": "1970-01-01T00:00:00Z"
          },
          "frequency": {
            "repeats": 0,
            "unit": "string",
            "value": 0
          }
        },
        "purpose": {
          "description": "string"
        },
        "timestamp": "1970-01-01T00:00:00Z",
        "user": {
          "email": "string",
          "idNumber": "string",
          "idType": "string",
          "mobile": "string"
        }
      },
      "signature": {
        "signature": "string"
      }
    },
    "format": "pdf",
    "txnId": "f7f1469c-29b0-4325-9dfc-c567200a70f7"
  }'
```

`POST /wtrbl/certificate`

API to verify Water Bill/ Connection.

> Body parameter

```json
{
  "certificateParameters": {
    "DOB": "31-12-1980",
    "FullName": "Sunil Kumar",
    "RegNum": "KIADB2019AL0001",
    "UID": "123412341234"
  },
  "consentArtifact": {
    "consent": {
      "consentId": "ea9c43aa-7f5a-4bf3-a0be-e1caa24737ba",
      "data": {
        "id": "string"
      },
      "dataConsumer": {
        "id": "string"
      },
      "dataProvider": {
        "id": "string"
      },
      "permission": {
        "access": "string",
        "dateRange": {
          "from": "1970-01-01T00:00:00Z",
          "to": "1970-01-01T00:00:00Z"
        },
        "frequency": {
          "repeats": 0,
          "unit": "string",
          "value": 0
        }
      },
      "purpose": {
        "description": "string"
      },
      "timestamp": "1970-01-01T00:00:00Z",
      "user": {
        "email": "string",
        "idNumber": "string",
        "idType": "string",
        "mobile": "string"
      }
    },
    "signature": {
      "signature": "string"
    }
  },
  "format": "pdf",
  "txnId": "f7f1469c-29b0-4325-9dfc-c567200a70f7"
}
```

<h3 id="water-bill-connection-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|Request format|
|» certificateParameters|body|object|false|none|
|» » DOB|body|string|true|Date of birth in DD-MM-YYYY format|
|» » FullName|body|string|true|Full name|
|» » RegNum|body|string|true|Registration Number|
|» » UID|body|string|true|Aadhaar number|
|» consentArtifact|body|[ConsentArtifactSchema](#schemaconsentartifactschema)|false|none|
|» format|body|string|true|The format of the certificate in response.|
|» txnId|body|string(uuid)|true|A unique transaction id for this request in UUID format. It is used for tracking the request.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» format|pdf|

> Example responses

> 200 Response

```text
Response body contains contents of the certificate in PDF format.
```

> 400 Response

```json
{
  "error": "missing_parameter",
  "errorDescription": "Please provide all mandatory parameters"
}
```

> 401 Response

```json
{
  "error": "invalid_authentication",
  "errorDescription": "Authentication failed"
}
```

> 404 Response

```json
{
  "error": "record_not_found",
  "errorDescription": "No record found"
}
```

> 500 Response

```json
{
  "error": "internal_server_error",
  "errorDescription": "Internal server error"
}
```

> 502 Response

```json
{
  "error": "bad_gatewy",
  "errorDescription": "Publisher service returned an invalid response"
}
```

> 503 Response

```json
{
  "error": "service_unavailable",
  "errorDescription": "Publisher service is temporarily unavailable"
}
```

> 504 Response

```json
{
  "error": "gateway_timeout",
  "errorDescription": "Publisher service did not respond in time"
}
```

<h3 id="water-bill-connection-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The certificate data in response body in PDF, XML or JSON format as requested in format parameter.|None|
|400|Bad Request|Bad request|Inline|
|401|Unauthorized|Unauthorized access|Inline|
|404|Not Found|No record found|Inline|
|500|Internal Server Error|Internal server error|Inline|
|502|Bad Gateway|Bad gateway|Inline|
|503|Service Unavailable|Service unavailable|Inline|
|504|Gateway Timeout|Gateway timeout|Inline|

<h3 id="water-bill-connection-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|false|none|none|
|errorDescription|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|error|missing_parameter|
|error|invalid_parameter|
|error|invalid_format|
|error|invalid_txnid|
|error|invalid_consentid|
|errorDescription|Please provide all mandatory parameters|
|errorDescription|Bad request|
|errorDescription|The format parameter is invalid|
|errorDescription|The txnId parameter must be in UUID format|
|errorDescription|The consentId parameter must be in UUID format|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|false|none|none|
|errorDescription|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|error|invalid_authentication|
|error|invalid_authorization|
|errorDescription|Authentication failed|
|errorDescription|You are not authorized to use this API|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|false|none|none|
|errorDescription|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|error|record_not_found|
|error|url_not_found|
|errorDescription|No record found|
|errorDescription|Your API url or path is incorrect|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|false|none|none|
|errorDescription|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|error|internal_server_error|
|errorDescription|Internal server error|

Status Code **502**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|false|none|none|
|errorDescription|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|error|bad_gatewy|
|errorDescription|Publisher service returned an invalid response|

Status Code **503**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|false|none|none|
|errorDescription|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|error|service_unavailable|
|errorDescription|Publisher service is temporarily unavailable|

Status Code **504**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|false|none|none|
|errorDescription|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|error|gateway_timeout|
|errorDescription|Publisher service did not respond in time|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey & clientId
</aside>

# Schemas

<h2 id="tocS_AcademicCertificateSchema">AcademicCertificateSchema</h2>
<!-- backwards compatibility -->
<a id="schemaacademiccertificateschema"></a>
<a id="schema_AcademicCertificateSchema"></a>
<a id="tocSacademiccertificateschema"></a>
<a id="tocsacademiccertificateschema"></a>

```json
{
  "CertificateData": {
    "Examination": {
      "month": "MARCH",
      "name": "SENION SCHOOL CERTIFICATE EXAMINATION",
      "year": 2019
    },
    "Performance": {
      "Subjects": [
        {
          "code": 30,
          "gp": "",
          "gpMax": "",
          "grade": "A2",
          "marksMax": "",
          "marksMaxPractical": "",
          "marksMaxTheory": "",
          "marksPractical": 17,
          "marksTheory": 70,
          "marksTotal": 87,
          "name": "ECONOMICS"
        }
      ],
      "cgpa": "",
      "cgpaMax": "",
      "grade": "",
      "marksMax": "",
      "marksTotal": "",
      "percentage": "",
      "result": "PASS",
      "resultDate": "02-05-2019",
      "updateDate": ""
    },
    "School": {
      "code": 20020,
      "name": "DELHI PUBLIC SCHOOL GURGAON"
    }
  },
  "IssuedBy": {
    "Organization": {
      "Address": {
        "country": "IN",
        "district": "",
        "house": "",
        "landmark": "",
        "line1": "",
        "line2": "",
        "locality": "",
        "pin": "",
        "state": "",
        "type": "",
        "vtc": ""
      },
      "code": "",
      "name": "Central Board of Secondary Education",
      "tin": "",
      "type": "CG",
      "uid": ""
    }
  },
  "IssuedTo": {
    "Person": {
      "Address": {
        "country": "IN",
        "district": "",
        "house": "",
        "landmark": null,
        "line1": "",
        "line2": "",
        "locality": "",
        "pin": "",
        "state": "",
        "type": "permanent",
        "vtc": ""
      },
      "Photo": {
        "format": "string"
      },
      "category": "SC",
      "disabilityStatus": "",
      "dob": "01-10-1988",
      "email": "",
      "gender": "",
      "maritalStatus": "",
      "motherName": "SUNITA DEVI",
      "name": "ANAND KUMAR",
      "phone": "",
      "religion": "",
      "swd": "PRAMOD KUMAR",
      "swdIndicator": "S",
      "title": "",
      "uid": ""
    }
  },
  "issueDate": " ",
  "issuedAt": "",
  "language": 99,
  "name": "Secondary School Certificate",
  "number": 1100044,
  "status": "A",
  "type": "SSCER",
  "validFromDate": " "
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CertificateData|object|true|none|none|
|IssuedBy|object|true|none|none|
|IssuedTo|object|true|none|none|
|issueDate|string|true|none|none|
|issuedAt|string|true|none|none|
|language|string|true|none|none|
|name|string|true|none|none|
|number|integer|true|none|none|
|status|string|true|none|none|
|type|string|true|none|none|
|validFromDate|string|true|none|none|

<h2 id="tocS_ConsentArtifactSchema">ConsentArtifactSchema</h2>
<!-- backwards compatibility -->
<a id="schemaconsentartifactschema"></a>
<a id="schema_ConsentArtifactSchema"></a>
<a id="tocSconsentartifactschema"></a>
<a id="tocsconsentartifactschema"></a>

```json
{
  "consent": {
    "consentId": "ea9c43aa-7f5a-4bf3-a0be-e1caa24737ba",
    "data": {
      "id": "string"
    },
    "dataConsumer": {
      "id": "string"
    },
    "dataProvider": {
      "id": "string"
    },
    "permission": {
      "access": "string",
      "dateRange": {
        "from": "1970-01-01T00:00:00Z",
        "to": "1970-01-01T00:00:00Z"
      },
      "frequency": {
        "repeats": 0,
        "unit": "string",
        "value": 0
      }
    },
    "purpose": {
      "description": "string"
    },
    "timestamp": "1970-01-01T00:00:00Z",
    "user": {
      "email": "string",
      "idNumber": "string",
      "idType": "string",
      "mobile": "string"
    }
  },
  "signature": {
    "signature": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|consent|object|true|none|none|
|signature|object|true|none|none|
