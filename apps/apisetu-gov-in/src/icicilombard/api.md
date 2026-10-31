<h1 id="icici-lombard-gic-ltd">ICICI Lombard GIC Ltd. v3.0.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Insurance policies issued by ICICI Lombard (https://www.icicilombard.com) can be fetched by Citizens into their DigiLocker accounts.

Base URLs:

* <a href="https://apisetu.gov.in/icicilombard/v3">https://apisetu.gov.in/icicilombard/v3</a>

<a href="https://apisetu.gov.in/terms.php">Terms of service</a>

# Authentication

* API Key (apiKey)
    - Parameter Name: **X-APISETU-APIKEY**, in: header.

* API Key (clientId)
    - Parameter Name: **X-APISETU-CLIENTID**, in: header.

<h1 id="icici-lombard-gic-ltd-apis">APIs</h1>

## Insurance Policy - Car

<a id="opIdcripc"></a>

> Code samples

```bash
curl https://example.com/cripc/certificate \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-APISETU-APIKEY: ${API_KEY}" \
  -H "X-APISETU-CLIENTID: ${API_KEY}" \
  -d '{
    "certificateParameters": {
      "InsuredDob": "DD/MM/YYYY",
      "PolicyNo": "3001/51962270/00/000"
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

`POST /cripc/certificate`

API to verify Insurance Policy - Car.

> Body parameter

```json
{
  "certificateParameters": {
    "InsuredDob": "DD/MM/YYYY",
    "PolicyNo": "3001/51962270/00/000"
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

<h3 id="insurance-policy---car-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|Request format|
|» certificateParameters|body|object|false|none|
|» » InsuredDob|body|string|true|Insured Date of Birth|
|» » PolicyNo|body|string|true|Policy Number|
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

<h3 id="insurance-policy---car-responses">Responses</h3>

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

<h3 id="insurance-policy---car-responseschema">Response Schema</h3>

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

## Insurance Policy - Commercial Vehicle

<a id="opIdcvipc"></a>

> Code samples

```bash
curl https://example.com/cvipc/certificate \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-APISETU-APIKEY: ${API_KEY}" \
  -H "X-APISETU-CLIENTID: ${API_KEY}" \
  -d '{
    "certificateParameters": {
      "InsuredDob": "DD/MM/YYYY",
      "PolicyNo": "3001/51962270/00/000"
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

`POST /cvipc/certificate`

API to verify Insurance Policy - Commercial Vehicle.

> Body parameter

```json
{
  "certificateParameters": {
    "InsuredDob": "DD/MM/YYYY",
    "PolicyNo": "3001/51962270/00/000"
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

<h3 id="insurance-policy---commercial-vehicle-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|Request format|
|» certificateParameters|body|object|false|none|
|» » InsuredDob|body|string|true|Insured Date of Birth|
|» » PolicyNo|body|string|true|Policy Number|
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

<h3 id="insurance-policy---commercial-vehicle-responses">Responses</h3>

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

<h3 id="insurance-policy---commercial-vehicle-responseschema">Response Schema</h3>

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

## Insurance Policy - Health

<a id="opIdhlipc"></a>

> Code samples

```bash
curl https://example.com/hlipc/certificate \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-APISETU-APIKEY: ${API_KEY}" \
  -H "X-APISETU-CLIENTID: ${API_KEY}" \
  -d '{
    "certificateParameters": {
      "InsuredDob": "DD/MM/YYYY",
      "PolicyNo": "3001/51962270/00/000"
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

`POST /hlipc/certificate`

API to verify Insurance Policy - Health.

> Body parameter

```json
{
  "certificateParameters": {
    "InsuredDob": "DD/MM/YYYY",
    "PolicyNo": "3001/51962270/00/000"
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

<h3 id="insurance-policy---health-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|Request format|
|» certificateParameters|body|object|false|none|
|» » InsuredDob|body|string|true|Insured Date of Birth|
|» » PolicyNo|body|string|true|Policy Number|
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

<h3 id="insurance-policy---health-responses">Responses</h3>

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

<h3 id="insurance-policy---health-responseschema">Response Schema</h3>

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

## Insurance Policy - Home

<a id="opIdhmipc"></a>

> Code samples

```bash
curl https://example.com/hmipc/certificate \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-APISETU-APIKEY: ${API_KEY}" \
  -H "X-APISETU-CLIENTID: ${API_KEY}" \
  -d '{
    "certificateParameters": {
      "InsuredDob": "DD/MM/YYYY",
      "PolicyNo": "3001/51962270/00/000"
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

`POST /hmipc/certificate`

API to verify Insurance Policy - Home.

> Body parameter

```json
{
  "certificateParameters": {
    "InsuredDob": "DD/MM/YYYY",
    "PolicyNo": "3001/51962270/00/000"
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

<h3 id="insurance-policy---home-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|Request format|
|» certificateParameters|body|object|false|none|
|» » InsuredDob|body|string|true|Insured Date of Birth|
|» » PolicyNo|body|string|true|Policy Number|
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

<h3 id="insurance-policy---home-responses">Responses</h3>

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

<h3 id="insurance-policy---home-responseschema">Response Schema</h3>

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

## Insurance Policy - Miscellaneous

<a id="opIdmiipc"></a>

> Code samples

```bash
curl https://example.com/miipc/certificate \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-APISETU-APIKEY: ${API_KEY}" \
  -H "X-APISETU-CLIENTID: ${API_KEY}" \
  -d '{
    "certificateParameters": {
      "InsuredDob": "DD/MM/YYYY",
      "PolicyNo": "3001/51962270/00/000"
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

`POST /miipc/certificate`

API to verify Insurance Policy - Miscellaneous.

> Body parameter

```json
{
  "certificateParameters": {
    "InsuredDob": "DD/MM/YYYY",
    "PolicyNo": "3001/51962270/00/000"
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

<h3 id="insurance-policy---miscellaneous-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|Request format|
|» certificateParameters|body|object|false|none|
|» » InsuredDob|body|string|true|Insured Date of Birth|
|» » PolicyNo|body|string|true|Policy Number|
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

<h3 id="insurance-policy---miscellaneous-responses">Responses</h3>

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

<h3 id="insurance-policy---miscellaneous-responseschema">Response Schema</h3>

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

## Insurance Policy - Travel

<a id="opIdtripc"></a>

> Code samples

```bash
curl https://example.com/tripc/certificate \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-APISETU-APIKEY: ${API_KEY}" \
  -H "X-APISETU-CLIENTID: ${API_KEY}" \
  -d '{
    "certificateParameters": {
      "InsuredDob": "DD/MM/YYYY",
      "PolicyNo": "3001/51962270/00/000"
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

`POST /tripc/certificate`

API to verify Insurance Policy - Travel.

> Body parameter

```json
{
  "certificateParameters": {
    "InsuredDob": "DD/MM/YYYY",
    "PolicyNo": "3001/51962270/00/000"
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

<h3 id="insurance-policy---travel-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|Request format|
|» certificateParameters|body|object|false|none|
|» » InsuredDob|body|string|true|Insured Date of Birth|
|» » PolicyNo|body|string|true|Policy Number|
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

<h3 id="insurance-policy---travel-responses">Responses</h3>

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

<h3 id="insurance-policy---travel-responseschema">Response Schema</h3>

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

## Insurance Policy - Two Wheeler

<a id="opIdtwipc"></a>

> Code samples

```bash
curl https://example.com/twipc/certificate \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-APISETU-APIKEY: ${API_KEY}" \
  -H "X-APISETU-CLIENTID: ${API_KEY}" \
  -d '{
    "certificateParameters": {
      "InsuredDob": "DD/MM/YYYY",
      "PolicyNo": "3001/51962270/00/000"
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

`POST /twipc/certificate`

API to verify Insurance Policy - Two Wheeler.

> Body parameter

```json
{
  "certificateParameters": {
    "InsuredDob": "DD/MM/YYYY",
    "PolicyNo": "3001/51962270/00/000"
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

<h3 id="insurance-policy---two-wheeler-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|Request format|
|» certificateParameters|body|object|false|none|
|» » InsuredDob|body|string|true|Insured Date of Birth|
|» » PolicyNo|body|string|true|Policy Number|
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

<h3 id="insurance-policy---two-wheeler-responses">Responses</h3>

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

<h3 id="insurance-policy---two-wheeler-responseschema">Response Schema</h3>

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
