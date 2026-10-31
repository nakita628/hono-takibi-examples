<h1 id="directorate-of-information-technology-government-of-tripura-tripura">Directorate of Information Technology, Government of Tripura, Tripura v3.0.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

eDistrict Tripura (http://edistrict.tripura.gov.in/) is the online service delivery portal for TripuraState Govt. Certain documents issued by it (e.g. Income, Caste Certificates etc) can be pulled into citizens' DigiLocker accounts.

Base URLs:

* <a href="https://apisetu.gov.in/dittripura/v3">https://apisetu.gov.in/dittripura/v3</a>

<a href="https://apisetu.gov.in/terms.php">Terms of service</a>

# Authentication

* API Key (apiKey)
    - Parameter Name: **X-APISETU-APIKEY**, in: header.

* API Key (clientId)
    - Parameter Name: **X-APISETU-CLIENTID**, in: header.

<h1 id="directorate-of-information-technology-government-of-tripura-tripura-apis">APIs</h1>

## Character Certificate

<a id="opIdchcer"></a>

> Code samples

```bash
curl https://example.com/chcer/certificate \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-APISETU-APIKEY: ${API_KEY}" \
  -H "X-APISETU-CLIENTID: ${API_KEY}" \
  -d '{
    "certificateParameters": {
      "RefNo": "PRTC/2017/84891",
      "TokenNo": "B2881A75"
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

`POST /chcer/certificate`

API to verify Character Certificate.

> Body parameter

```json
{
  "certificateParameters": {
    "RefNo": "PRTC/2017/84891",
    "TokenNo": "B2881A75"
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

<h3 id="character-certificate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|Request format|
|» certificateParameters|body|object|false|none|
|» » RefNo|body|string|true|Reference No.|
|» » TokenNo|body|string|true|Token No.|
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

<h3 id="character-certificate-responses">Responses</h3>

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

<h3 id="character-certificate-responseschema">Response Schema</h3>

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

## Distance Certificate

<a id="opIddncer"></a>

> Code samples

```bash
curl https://example.com/dncer/certificate \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-APISETU-APIKEY: ${API_KEY}" \
  -H "X-APISETU-CLIENTID: ${API_KEY}" \
  -d '{
    "certificateParameters": {
      "RefNo": "PRTC/2017/84891",
      "TokenNo": "B2881A75"
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

`POST /dncer/certificate`

API to verify Distance Certificate.

> Body parameter

```json
{
  "certificateParameters": {
    "RefNo": "PRTC/2017/84891",
    "TokenNo": "B2881A75"
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

<h3 id="distance-certificate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|Request format|
|» certificateParameters|body|object|false|none|
|» » RefNo|body|string|true|Reference No.|
|» » TokenNo|body|string|true|Token No.|
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

<h3 id="distance-certificate-responses">Responses</h3>

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

<h3 id="distance-certificate-responseschema">Response Schema</h3>

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

## Dependency Certificate

<a id="opIddpcer"></a>

> Code samples

```bash
curl https://example.com/dpcer/certificate \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-APISETU-APIKEY: ${API_KEY}" \
  -H "X-APISETU-CLIENTID: ${API_KEY}" \
  -d '{
    "certificateParameters": {
      "RefNo": "PRTC/2017/84891",
      "TokenNo": "B2881A75"
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

`POST /dpcer/certificate`

API to verify Dependency Certificate.

> Body parameter

```json
{
  "certificateParameters": {
    "RefNo": "PRTC/2017/84891",
    "TokenNo": "B2881A75"
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

<h3 id="dependency-certificate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|Request format|
|» certificateParameters|body|object|false|none|
|» » RefNo|body|string|true|Reference No.|
|» » TokenNo|body|string|true|Token No.|
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

<h3 id="dependency-certificate-responses">Responses</h3>

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

<h3 id="dependency-certificate-responseschema">Response Schema</h3>

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

## Food Stuff License

<a id="opIdfslcs"></a>

> Code samples

```bash
curl https://example.com/fslcs/certificate \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-APISETU-APIKEY: ${API_KEY}" \
  -H "X-APISETU-CLIENTID: ${API_KEY}" \
  -d '{
    "certificateParameters": {
      "RefNo": "PRTC/2017/84891",
      "TokenNo": "B2881A75"
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

`POST /fslcs/certificate`

API to verify Food Stuff License.

> Body parameter

```json
{
  "certificateParameters": {
    "RefNo": "PRTC/2017/84891",
    "TokenNo": "B2881A75"
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

<h3 id="food-stuff-license-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|Request format|
|» certificateParameters|body|object|false|none|
|» » RefNo|body|string|true|Reference No.|
|» » TokenNo|body|string|true|Token No.|
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

<h3 id="food-stuff-license-responses">Responses</h3>

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

<h3 id="food-stuff-license-responseschema">Response Schema</h3>

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

## Grievance Redressal/ Registration

<a id="opIdgrred"></a>

> Code samples

```bash
curl https://example.com/grred/certificate \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-APISETU-APIKEY: ${API_KEY}" \
  -H "X-APISETU-CLIENTID: ${API_KEY}" \
  -d '{
    "certificateParameters": {
      "RefNo": "PRTC/2017/84891",
      "TokenNo": "B2881A75"
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

`POST /grred/certificate`

API to verify Grievance Redressal/ Registration.

> Body parameter

```json
{
  "certificateParameters": {
    "RefNo": "PRTC/2017/84891",
    "TokenNo": "B2881A75"
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

<h3 id="grievance-redressal-registration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|Request format|
|» certificateParameters|body|object|false|none|
|» » RefNo|body|string|true|Reference No.|
|» » TokenNo|body|string|true|Token No.|
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

<h3 id="grievance-redressal-registration-responses">Responses</h3>

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

<h3 id="grievance-redressal-registration-responseschema">Response Schema</h3>

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

## Income Certificate

<a id="opIdincer"></a>

> Code samples

```bash
curl https://example.com/incer/certificate \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-APISETU-APIKEY: ${API_KEY}" \
  -H "X-APISETU-CLIENTID: ${API_KEY}" \
  -d '{
    "certificateParameters": {
      "RefNo": "PRTC/2017/84891",
      "TokenNo": "B2881A75"
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

`POST /incer/certificate`

API to verify Income Certificate.

> Body parameter

```json
{
  "certificateParameters": {
    "RefNo": "PRTC/2017/84891",
    "TokenNo": "B2881A75"
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

<h3 id="income-certificate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|Request format|
|» certificateParameters|body|object|false|none|
|» » RefNo|body|string|true|Reference No.|
|» » TokenNo|body|string|true|Token No.|
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

<h3 id="income-certificate-responses">Responses</h3>

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

<h3 id="income-certificate-responseschema">Response Schema</h3>

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

## Issue of Arm Licence

<a id="opIdisoal"></a>

> Code samples

```bash
curl https://example.com/isoal/certificate \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-APISETU-APIKEY: ${API_KEY}" \
  -H "X-APISETU-CLIENTID: ${API_KEY}" \
  -d '{
    "certificateParameters": {
      "RefNo": "PRTC/2017/84891",
      "TokenNo": "B2881A75"
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

`POST /isoal/certificate`

API to verify Issue of Arm Licence.

> Body parameter

```json
{
  "certificateParameters": {
    "RefNo": "PRTC/2017/84891",
    "TokenNo": "B2881A75"
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

<h3 id="issue-of-arm-licence-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|Request format|
|» certificateParameters|body|object|false|none|
|» » RefNo|body|string|true|Reference No.|
|» » TokenNo|body|string|true|Token No.|
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

<h3 id="issue-of-arm-licence-responses">Responses</h3>

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

<h3 id="issue-of-arm-licence-responseschema">Response Schema</h3>

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

## Land Valuation/ Holding/ Record Certificate

<a id="opIdlvcer"></a>

> Code samples

```bash
curl https://example.com/lvcer/certificate \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-APISETU-APIKEY: ${API_KEY}" \
  -H "X-APISETU-CLIENTID: ${API_KEY}" \
  -d '{
    "certificateParameters": {
      "RefNo": "PRTC/2017/84891",
      "TokenNo": "B2881A75"
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

`POST /lvcer/certificate`

API to verify Land Valuation/ Holding/ Record Certificate.

> Body parameter

```json
{
  "certificateParameters": {
    "RefNo": "PRTC/2017/84891",
    "TokenNo": "B2881A75"
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

<h3 id="land-valuation-holding-record-certificate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|Request format|
|» certificateParameters|body|object|false|none|
|» » RefNo|body|string|true|Reference No.|
|» » TokenNo|body|string|true|Token No.|
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

<h3 id="land-valuation-holding-record-certificate-responses">Responses</h3>

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

<h3 id="land-valuation-holding-record-certificate-responseschema">Response Schema</h3>

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

## Manufacturer License

<a id="opIdmalcs"></a>

> Code samples

```bash
curl https://example.com/malcs/certificate \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-APISETU-APIKEY: ${API_KEY}" \
  -H "X-APISETU-CLIENTID: ${API_KEY}" \
  -d '{
    "certificateParameters": {
      "RefNo": "PRTC/2017/84891",
      "TokenNo": "B2881A75"
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

`POST /malcs/certificate`

API to verify Manufacturer License.

> Body parameter

```json
{
  "certificateParameters": {
    "RefNo": "PRTC/2017/84891",
    "TokenNo": "B2881A75"
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

<h3 id="manufacturer-license-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|Request format|
|» certificateParameters|body|object|false|none|
|» » RefNo|body|string|true|Reference No.|
|» » TokenNo|body|string|true|Token No.|
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

<h3 id="manufacturer-license-responses">Responses</h3>

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

<h3 id="manufacturer-license-responseschema">Response Schema</h3>

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

## Small Savings Agent License

<a id="opIdmpkby"></a>

> Code samples

```bash
curl https://example.com/mpkby/certificate \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-APISETU-APIKEY: ${API_KEY}" \
  -H "X-APISETU-CLIENTID: ${API_KEY}" \
  -d '{
    "certificateParameters": {
      "RefNo": "PRTC/2017/84891",
      "TokenNo": "B2881A75"
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

`POST /mpkby/certificate`

API to verify Small Savings Agent License.

> Body parameter

```json
{
  "certificateParameters": {
    "RefNo": "PRTC/2017/84891",
    "TokenNo": "B2881A75"
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

<h3 id="small-savings-agent-license-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|Request format|
|» certificateParameters|body|object|false|none|
|» » RefNo|body|string|true|Reference No.|
|» » TokenNo|body|string|true|Token No.|
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

<h3 id="small-savings-agent-license-responses">Responses</h3>

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

<h3 id="small-savings-agent-license-responseschema">Response Schema</h3>

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

## OBC Certificate

<a id="opIdobcer"></a>

> Code samples

```bash
curl https://example.com/obcer/certificate \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-APISETU-APIKEY: ${API_KEY}" \
  -H "X-APISETU-CLIENTID: ${API_KEY}" \
  -d '{
    "certificateParameters": {
      "RefNo": "PRTC/2017/84891",
      "TokenNo": "B2881A75"
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

`POST /obcer/certificate`

API to verify OBC Certificate.

> Body parameter

```json
{
  "certificateParameters": {
    "RefNo": "PRTC/2017/84891",
    "TokenNo": "B2881A75"
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

<h3 id="obc-certificate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|Request format|
|» certificateParameters|body|object|false|none|
|» » RefNo|body|string|true|Reference No.|
|» » TokenNo|body|string|true|Token No.|
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

<h3 id="obc-certificate-responses">Responses</h3>

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

<h3 id="obc-certificate-responseschema">Response Schema</h3>

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

## Right to Information

<a id="opIdritin"></a>

> Code samples

```bash
curl https://example.com/ritin/certificate \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-APISETU-APIKEY: ${API_KEY}" \
  -H "X-APISETU-CLIENTID: ${API_KEY}" \
  -d '{
    "certificateParameters": {
      "RefNo": "PRTC/2017/84891",
      "TokenNo": "B2881A75"
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

`POST /ritin/certificate`

API to verify Right to Information.

> Body parameter

```json
{
  "certificateParameters": {
    "RefNo": "PRTC/2017/84891",
    "TokenNo": "B2881A75"
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

<h3 id="right-to-information-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|Request format|
|» certificateParameters|body|object|false|none|
|» » RefNo|body|string|true|Reference No.|
|» » TokenNo|body|string|true|Token No.|
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

<h3 id="right-to-information-responses">Responses</h3>

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

<h3 id="right-to-information-responseschema">Response Schema</h3>

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

## Marriage Certificate

<a id="opIdrmcer"></a>

> Code samples

```bash
curl https://example.com/rmcer/certificate \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-APISETU-APIKEY: ${API_KEY}" \
  -H "X-APISETU-CLIENTID: ${API_KEY}" \
  -d '{
    "certificateParameters": {
      "RefNo": "PRTC/2017/84891",
      "TokenNo": "B2881A75"
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

`POST /rmcer/certificate`

API to verify Marriage Certificate.

> Body parameter

```json
{
  "certificateParameters": {
    "RefNo": "PRTC/2017/84891",
    "TokenNo": "B2881A75"
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

<h3 id="marriage-certificate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|Request format|
|» certificateParameters|body|object|false|none|
|» » RefNo|body|string|true|Reference No.|
|» » TokenNo|body|string|true|Token No.|
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

<h3 id="marriage-certificate-responses">Responses</h3>

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

<h3 id="marriage-certificate-responseschema">Response Schema</h3>

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

## Residence Certificate

<a id="opIdrscer"></a>

> Code samples

```bash
curl https://example.com/rscer/certificate \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-APISETU-APIKEY: ${API_KEY}" \
  -H "X-APISETU-CLIENTID: ${API_KEY}" \
  -d '{
    "certificateParameters": {
      "RefNo": "PRTC/2017/84891",
      "TokenNo": "B2881A75"
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

`POST /rscer/certificate`

API to verify Residence Certificate.

> Body parameter

```json
{
  "certificateParameters": {
    "RefNo": "PRTC/2017/84891",
    "TokenNo": "B2881A75"
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

<h3 id="residence-certificate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|Request format|
|» certificateParameters|body|object|false|none|
|» » RefNo|body|string|true|Reference No.|
|» » TokenNo|body|string|true|Token No.|
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

<h3 id="residence-certificate-responses">Responses</h3>

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

<h3 id="residence-certificate-responseschema">Response Schema</h3>

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

## SC/ST Certificate

<a id="opIdshcer"></a>

> Code samples

```bash
curl https://example.com/shcer/certificate \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-APISETU-APIKEY: ${API_KEY}" \
  -H "X-APISETU-CLIENTID: ${API_KEY}" \
  -d '{
    "certificateParameters": {
      "RefNo": "PRTC/2017/84891",
      "TokenNo": "B2881A75"
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

`POST /shcer/certificate`

API to verify SC/ST  Certificate.

> Body parameter

```json
{
  "certificateParameters": {
    "RefNo": "PRTC/2017/84891",
    "TokenNo": "B2881A75"
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

<h3 id="scst-certificate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|Request format|
|» certificateParameters|body|object|false|none|
|» » RefNo|body|string|true|Reference No.|
|» » TokenNo|body|string|true|Token No.|
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

<h3 id="scst-certificate-responses">Responses</h3>

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

<h3 id="scst-certificate-responseschema">Response Schema</h3>

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

## Surviving Member Certificate

<a id="opIdsmcer"></a>

> Code samples

```bash
curl https://example.com/smcer/certificate \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-APISETU-APIKEY: ${API_KEY}" \
  -H "X-APISETU-CLIENTID: ${API_KEY}" \
  -d '{
    "certificateParameters": {
      "RefNo": "PRTC/2017/84891",
      "TokenNo": "B2881A75"
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

`POST /smcer/certificate`

API to verify Surviving Member Certificate.

> Body parameter

```json
{
  "certificateParameters": {
    "RefNo": "PRTC/2017/84891",
    "TokenNo": "B2881A75"
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

<h3 id="surviving-member-certificate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|Request format|
|» certificateParameters|body|object|false|none|
|» » RefNo|body|string|true|Reference No.|
|» » TokenNo|body|string|true|Token No.|
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

<h3 id="surviving-member-certificate-responses">Responses</h3>

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

<h3 id="surviving-member-certificate-responseschema">Response Schema</h3>

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

## Standardized Agency Systems (SAS) Agent License

<a id="opIdsslcs"></a>

> Code samples

```bash
curl https://example.com/sslcs/certificate \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-APISETU-APIKEY: ${API_KEY}" \
  -H "X-APISETU-CLIENTID: ${API_KEY}" \
  -d '{
    "certificateParameters": {
      "RefNo": "PRTC/2017/84891",
      "TokenNo": "B2881A75"
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

`POST /sslcs/certificate`

API to verify Standardized Agency Systems (SAS) Agent License.

> Body parameter

```json
{
  "certificateParameters": {
    "RefNo": "PRTC/2017/84891",
    "TokenNo": "B2881A75"
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

<h3 id="standardized-agency-systems-sas-agent-license-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|Request format|
|» certificateParameters|body|object|false|none|
|» » RefNo|body|string|true|Reference No.|
|» » TokenNo|body|string|true|Token No.|
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

<h3 id="standardized-agency-systems-sas-agent-license-responses">Responses</h3>

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

<h3 id="standardized-agency-systems-sas-agent-license-responseschema">Response Schema</h3>

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

## License/ Verification of Weights, Measures and Instruments

<a id="opIdvrwmi"></a>

> Code samples

```bash
curl https://example.com/vrwmi/certificate \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-APISETU-APIKEY: ${API_KEY}" \
  -H "X-APISETU-CLIENTID: ${API_KEY}" \
  -d '{
    "certificateParameters": {
      "RefNo": "PRTC/2017/84891",
      "TokenNo": "B2881A75"
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

`POST /vrwmi/certificate`

API to verify License/ Verification of Weights, Measures and Instruments.

> Body parameter

```json
{
  "certificateParameters": {
    "RefNo": "PRTC/2017/84891",
    "TokenNo": "B2881A75"
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

<h3 id="license-verification-of-weights-measures-and-instruments-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|Request format|
|» certificateParameters|body|object|false|none|
|» » RefNo|body|string|true|Reference No.|
|» » TokenNo|body|string|true|Token No.|
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

<h3 id="license-verification-of-weights-measures-and-instruments-responses">Responses</h3>

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

<h3 id="license-verification-of-weights-measures-and-instruments-responseschema">Response Schema</h3>

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
