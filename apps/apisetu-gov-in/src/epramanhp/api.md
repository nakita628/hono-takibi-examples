<h1 id="himachal-pradesh-department-of-revenue-himachal-pradesh">Himachal Pradesh Department of Revenue, Himachal Pradesh v3.0.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Lok Praman Patra (http://admis.hp.nic.in/epraman/) is the online service delivery portal by Himachal Pradesh Govt. Certain documents issued by it (e.g.  Bonafide, Dogra Class, Income, Character Certificates etc.) can be pulled into citizens' DigiLocker accounts.

Base URLs:

* <a href="https://apisetu.gov.in/epramanhp/v3">https://apisetu.gov.in/epramanhp/v3</a>

<a href="https://apisetu.gov.in/terms.php">Terms of service</a>

# Authentication

* API Key (apiKey)
    - Parameter Name: **X-APISETU-APIKEY**, in: header.

* API Key (clientId)
    - Parameter Name: **X-APISETU-CLIENTID**, in: header.

<h1 id="himachal-pradesh-department-of-revenue-himachal-pradesh-apis">APIs</h1>

## Agriculture/ Agriculturist Certificate

<a id="opIdagcer"></a>

> Code samples

```bash
curl https://example.com/agcer/certificate \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-APISETU-APIKEY: ${API_KEY}" \
  -H "X-APISETU-CLIENTID: ${API_KEY}" \
  -d '{
    "certificateParameters": {
      "Name": "4 Characters of Name",
      "RefNo": "XXXX/XX/2017"
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

`POST /agcer/certificate`

API to verify Agriculture/ Agriculturist Certificate.

> Body parameter

```json
{
  "certificateParameters": {
    "Name": "4 Characters of Name",
    "RefNo": "XXXX/XX/2017"
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

<h3 id="agriculture-agriculturist-certificate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|Request format|
|» certificateParameters|body|object|false|none|
|» » Name|body|string|true|Applicant Name|
|» » RefNo|body|string|true|Certificate Id|
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

<h3 id="agriculture-agriculturist-certificate-responses">Responses</h3>

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

<h3 id="agriculture-agriculturist-certificate-responseschema">Response Schema</h3>

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

## Backward Area Certificate

<a id="opIdbacer"></a>

> Code samples

```bash
curl https://example.com/bacer/certificate \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-APISETU-APIKEY: ${API_KEY}" \
  -H "X-APISETU-CLIENTID: ${API_KEY}" \
  -d '{
    "certificateParameters": {
      "Name": "4 Characters of Name",
      "RefNo": "XXXX/XX/2017"
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

`POST /bacer/certificate`

API to verify Backward Area Certificate.

> Body parameter

```json
{
  "certificateParameters": {
    "Name": "4 Characters of Name",
    "RefNo": "XXXX/XX/2017"
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

<h3 id="backward-area-certificate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|Request format|
|» certificateParameters|body|object|false|none|
|» » Name|body|string|true|Applicant Name|
|» » RefNo|body|string|true|Certificate Id|
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

<h3 id="backward-area-certificate-responses">Responses</h3>

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

<h3 id="backward-area-certificate-responseschema">Response Schema</h3>

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

## Bonafide Certificate

<a id="opIdbhcer"></a>

> Code samples

```bash
curl https://example.com/bhcer/certificate \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-APISETU-APIKEY: ${API_KEY}" \
  -H "X-APISETU-CLIENTID: ${API_KEY}" \
  -d '{
    "certificateParameters": {
      "Name": "4 Characters of Name",
      "RefNo": "XXXX/XX/2017"
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

`POST /bhcer/certificate`

API to verify Bonafide Certificate.

> Body parameter

```json
{
  "certificateParameters": {
    "Name": "4 Characters of Name",
    "RefNo": "XXXX/XX/2017"
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

<h3 id="bonafide-certificate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|Request format|
|» certificateParameters|body|object|false|none|
|» » Name|body|string|true|Applicant Name|
|» » RefNo|body|string|true|Certificate Id|
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

<h3 id="bonafide-certificate-responses">Responses</h3>

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

<h3 id="bonafide-certificate-responseschema">Response Schema</h3>

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
      "Name": "4 Characters of Name",
      "RefNo": "XXXX/XX/2017"
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
    "Name": "4 Characters of Name",
    "RefNo": "XXXX/XX/2017"
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
|» » Name|body|string|true|Applicant Name|
|» » RefNo|body|string|true|Certificate Id|
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

## Dogra Class Certificate

<a id="opIddccer"></a>

> Code samples

```bash
curl https://example.com/dccer/certificate \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-APISETU-APIKEY: ${API_KEY}" \
  -H "X-APISETU-CLIENTID: ${API_KEY}" \
  -d '{
    "certificateParameters": {
      "Name": "4 Characters of Name",
      "RefNo": "XXXX/XX/2017"
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

`POST /dccer/certificate`

API to verify Dogra Class Certificate.

> Body parameter

```json
{
  "certificateParameters": {
    "Name": "4 Characters of Name",
    "RefNo": "XXXX/XX/2017"
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

<h3 id="dogra-class-certificate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|Request format|
|» certificateParameters|body|object|false|none|
|» » Name|body|string|true|Applicant Name|
|» » RefNo|body|string|true|Certificate Id|
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

<h3 id="dogra-class-certificate-responses">Responses</h3>

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

<h3 id="dogra-class-certificate-responseschema">Response Schema</h3>

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

## Freedom Fighter Certificate

<a id="opIdffcer"></a>

> Code samples

```bash
curl https://example.com/ffcer/certificate \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-APISETU-APIKEY: ${API_KEY}" \
  -H "X-APISETU-CLIENTID: ${API_KEY}" \
  -d '{
    "certificateParameters": {
      "Name": "4 Characters of Name",
      "RefNo": "XXXX/XX/2017"
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

`POST /ffcer/certificate`

API to verify Freedom Fighter Certificate.

> Body parameter

```json
{
  "certificateParameters": {
    "Name": "4 Characters of Name",
    "RefNo": "XXXX/XX/2017"
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

<h3 id="freedom-fighter-certificate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|Request format|
|» certificateParameters|body|object|false|none|
|» » Name|body|string|true|Applicant Name|
|» » RefNo|body|string|true|Certificate Id|
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

<h3 id="freedom-fighter-certificate-responses">Responses</h3>

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

<h3 id="freedom-fighter-certificate-responseschema">Response Schema</h3>

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
      "Name": "4 Characters of Name",
      "RefNo": "XXXX/XX/2017"
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
    "Name": "4 Characters of Name",
    "RefNo": "XXXX/XX/2017"
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
|» » Name|body|string|true|Applicant Name|
|» » RefNo|body|string|true|Certificate Id|
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

## Legal Heir Certificate

<a id="opIdlhcer"></a>

> Code samples

```bash
curl https://example.com/lhcer/certificate \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-APISETU-APIKEY: ${API_KEY}" \
  -H "X-APISETU-CLIENTID: ${API_KEY}" \
  -d '{
    "certificateParameters": {
      "Name": "4 Characters of Name",
      "RefNo": "XXXX/XX/2017"
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

`POST /lhcer/certificate`

API to verify Legal Heir Certificate.

> Body parameter

```json
{
  "certificateParameters": {
    "Name": "4 Characters of Name",
    "RefNo": "XXXX/XX/2017"
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

<h3 id="legal-heir-certificate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|Request format|
|» certificateParameters|body|object|false|none|
|» » Name|body|string|true|Applicant Name|
|» » RefNo|body|string|true|Certificate Id|
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

<h3 id="legal-heir-certificate-responses">Responses</h3>

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

<h3 id="legal-heir-certificate-responseschema">Response Schema</h3>

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

## Minority Certificate

<a id="opIdmncer"></a>

> Code samples

```bash
curl https://example.com/mncer/certificate \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-APISETU-APIKEY: ${API_KEY}" \
  -H "X-APISETU-CLIENTID: ${API_KEY}" \
  -d '{
    "certificateParameters": {
      "Name": "4 Characters of Name",
      "RefNo": "XXXX/XX/2017"
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

`POST /mncer/certificate`

API to verify Minority Certificate.

> Body parameter

```json
{
  "certificateParameters": {
    "Name": "4 Characters of Name",
    "RefNo": "XXXX/XX/2017"
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

<h3 id="minority-certificate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|Request format|
|» certificateParameters|body|object|false|none|
|» » Name|body|string|true|Applicant Name|
|» » RefNo|body|string|true|Certificate Id|
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

<h3 id="minority-certificate-responses">Responses</h3>

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

<h3 id="minority-certificate-responseschema">Response Schema</h3>

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
      "Name": "4 Characters of Name",
      "RefNo": "XXXX/XX/2017"
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
    "Name": "4 Characters of Name",
    "RefNo": "XXXX/XX/2017"
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
|» » Name|body|string|true|Applicant Name|
|» » RefNo|body|string|true|Certificate Id|
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

## Passport/ Passport Verification

<a id="opIdpsprt"></a>

> Code samples

```bash
curl https://example.com/psprt/certificate \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-APISETU-APIKEY: ${API_KEY}" \
  -H "X-APISETU-CLIENTID: ${API_KEY}" \
  -d '{
    "certificateParameters": {
      "Name": "4 Characters of Name",
      "RefNo": "XXXX/XX/2017"
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

`POST /psprt/certificate`

API to verify Passport/ Passport Verification.

> Body parameter

```json
{
  "certificateParameters": {
    "Name": "4 Characters of Name",
    "RefNo": "XXXX/XX/2017"
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

<h3 id="passport-passport-verification-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|Request format|
|» certificateParameters|body|object|false|none|
|» » Name|body|string|true|Applicant Name|
|» » RefNo|body|string|true|Certificate Id|
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

<h3 id="passport-passport-verification-responses">Responses</h3>

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

<h3 id="passport-passport-verification-responseschema">Response Schema</h3>

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

## Rural Area Certificate

<a id="opIdracer"></a>

> Code samples

```bash
curl https://example.com/racer/certificate \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-APISETU-APIKEY: ${API_KEY}" \
  -H "X-APISETU-CLIENTID: ${API_KEY}" \
  -d '{
    "certificateParameters": {
      "Name": "4 Characters of Name",
      "RefNo": "XXXX/XX/2017"
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

`POST /racer/certificate`

API to verify Rural Area Certificate.

> Body parameter

```json
{
  "certificateParameters": {
    "Name": "4 Characters of Name",
    "RefNo": "XXXX/XX/2017"
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

<h3 id="rural-area-certificate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|Request format|
|» certificateParameters|body|object|false|none|
|» » Name|body|string|true|Applicant Name|
|» » RefNo|body|string|true|Certificate Id|
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

<h3 id="rural-area-certificate-responses">Responses</h3>

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

<h3 id="rural-area-certificate-responseschema">Response Schema</h3>

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
      "Name": "4 Characters of Name",
      "RefNo": "XXXX/XX/2017"
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
    "Name": "4 Characters of Name",
    "RefNo": "XXXX/XX/2017"
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
|» » Name|body|string|true|Applicant Name|
|» » RefNo|body|string|true|Certificate Id|
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
      "Name": "4 Characters of Name",
      "RefNo": "XXXX/XX/2017"
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
    "Name": "4 Characters of Name",
    "RefNo": "XXXX/XX/2017"
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
|» » Name|body|string|true|Applicant Name|
|» » RefNo|body|string|true|Certificate Id|
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
