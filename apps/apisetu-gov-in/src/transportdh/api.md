<h1 id="transport-department-dadra-nagar-haveli">Transport Department, Dadra &amp; Nagar Haveli v3.0.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Driving License (DL) and Vehicle Registration Certificate (RC) of the State, as available on Parivahan Sewa (http://parivahan.co.in/) of Ministry of Road Transport and Highways, are available on DigiLocker. Citizens can pull these documents into their DigiLocker accounts.

Base URLs:

* <a href="https://apisetu.gov.in/transportdh/v3">https://apisetu.gov.in/transportdh/v3</a>

<a href="https://apisetu.gov.in/terms.php">Terms of service</a>

# Authentication

* API Key (apiKey)
    - Parameter Name: **X-APISETU-APIKEY**, in: header.

* API Key (clientId)
    - Parameter Name: **X-APISETU-CLIENTID**, in: header.

<h1 id="transport-department-dadra-nagar-haveli-apis">APIs</h1>

## Driving License

<a id="opIddrvlc"></a>

> Code samples

```bash
curl https://example.com/drvlc/certificate \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-APISETU-APIKEY: ${API_KEY}" \
  -H "X-APISETU-CLIENTID: ${API_KEY}" \
  -d '{
    "certificateParameters": {
      "DOB": "31-12-1980",
      "FullName": "Sunil Kumar",
      "UID": "123412341234",
      "dlno": "Ex. JH02/2009/236543"
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
    "format": "xml",
    "txnId": "f7f1469c-29b0-4325-9dfc-c567200a70f7"
  }'
```

`POST /drvlc/certificate`

API to verify Driving License.

> Body parameter

```json
{
  "certificateParameters": {
    "DOB": "31-12-1980",
    "FullName": "Sunil Kumar",
    "UID": "123412341234",
    "dlno": "Ex. JH02/2009/236543"
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
  "format": "xml",
  "txnId": "f7f1469c-29b0-4325-9dfc-c567200a70f7"
}
```

<h3 id="driving-license-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|Request format|
|» certificateParameters|body|object|false|none|
|» » DOB|body|string|true|Date of birth in DD-MM-YYYY format|
|» » FullName|body|string|true|Full name|
|» » UID|body|string|true|Aadhaar number|
|» » dlno|body|string|true|DL No|
|» consentArtifact|body|[ConsentArtifactSchema](#schemaconsentartifactschema)|false|none|
|» format|body|string|true|The format of the certificate in response.|
|» txnId|body|string(uuid)|true|A unique transaction id for this request in UUID format. It is used for tracking the request.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» format|xml|
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

<h3 id="driving-license-responses">Responses</h3>

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

<h3 id="driving-license-responseschema">Response Schema</h3>

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

## Registration of Vehicles

<a id="opIdrvcer"></a>

> Code samples

```bash
curl https://example.com/rvcer/certificate \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-APISETU-APIKEY: ${API_KEY}" \
  -H "X-APISETU-CLIENTID: ${API_KEY}" \
  -d '{
    "certificateParameters": {
      "FullName": "Sunil Kumar",
      "UID": "123412341234",
      "chasis_no": "MBLKC12EFBGJ08420",
      "reg_no": "DL01AA0101 As per your Vehicle Registration Certificate"
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
    "format": "xml",
    "txnId": "f7f1469c-29b0-4325-9dfc-c567200a70f7"
  }'
```

`POST /rvcer/certificate`

API to verify Registration of Vehicles.

> Body parameter

```json
{
  "certificateParameters": {
    "FullName": "Sunil Kumar",
    "UID": "123412341234",
    "chasis_no": "MBLKC12EFBGJ08420",
    "reg_no": "DL01AA0101 As per your Vehicle Registration Certificate"
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
  "format": "xml",
  "txnId": "f7f1469c-29b0-4325-9dfc-c567200a70f7"
}
```

<h3 id="registration-of-vehicles-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|Request format|
|» certificateParameters|body|object|false|none|
|» » FullName|body|string|true|Full name|
|» » UID|body|string|true|Aadhaar number|
|» » chasis_no|body|string|true|Chassis No|
|» » reg_no|body|string|true|Vehicle Registration No|
|» consentArtifact|body|[ConsentArtifactSchema](#schemaconsentartifactschema)|false|none|
|» format|body|string|true|The format of the certificate in response.|
|» txnId|body|string(uuid)|true|A unique transaction id for this request in UUID format. It is used for tracking the request.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» format|xml|
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

<h3 id="registration-of-vehicles-responses">Responses</h3>

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

<h3 id="registration-of-vehicles-responseschema">Response Schema</h3>

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

<h2 id="tocS_DrivingLicenseSchema">DrivingLicenseSchema</h2>
<!-- backwards compatibility -->
<a id="schemadrivinglicenseschema"></a>
<a id="schema_DrivingLicenseSchema"></a>
<a id="tocSdrivinglicenseschema"></a>
<a id="tocsdrivinglicenseschema"></a>

```json
{
  "CertificateData": {
    "DrivingLicense": {
      "abbreviation": "MCWG",
      "code": "NT",
      "description": "Motor Cycle with Gear(Non Transport)",
      "endorseDate": "01-01-1990",
      "issueDate": "string"
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
        "type": "present",
        "vtc": ""
      },
      "code": "",
      "name": "",
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
      "dob": "01-10-1988",
      "email": "",
      "gender": "M",
      "maritalStatus": "",
      "name": "ANAND KUMAR",
      "phone": "",
      "religion": "",
      "swd": "PRAMOD KUMAR",
      "swdIndicator": "S",
      "title": "",
      "uid": ""
    }
  },
  "expiryDate": "31-12-2010",
  "issueDate": "01-01-1990",
  "issuedAt": "New Delhi",
  "language": 99,
  "name": "Driving License",
  "number": "DL012345678",
  "prevNumber": 1234,
  "status": "A",
  "type": "DRVLC",
  "validFromDate": "01-01-1990"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CertificateData|object|true|none|none|
|IssuedBy|object|true|none|none|
|IssuedTo|object|true|none|none|
|expiryDate|string|false|none|none|
|issueDate|string|true|none|none|
|issuedAt|string|true|none|none|
|language|string|true|none|none|
|name|string|true|none|none|
|number|integer|true|none|none|
|prevNumber|integer|false|none|none|
|status|string|true|none|none|
|type|string|true|none|none|
|validFromDate|string|true|none|none|

<h2 id="tocS_VehicleRegistrationSchema">VehicleRegistrationSchema</h2>
<!-- backwards compatibility -->
<a id="schemavehicleregistrationschema"></a>
<a id="schema_VehicleRegistrationSchema"></a>
<a id="tocSvehicleregistrationschema"></a>
<a id="tocsvehicleregistrationschema"></a>

```json
{
  "CertificateData": {
    "VehicleRegistration": {
      "Insurance": {
        "companyName": "",
        "policyNo": "string",
        "validTill": ""
      },
      "Vehicle": {
        "chasisNo": "string",
        "class": {},
        "color": "",
        "cubicCapacity": {},
        "cylinder": {},
        "engineNo": "",
        "fitTill": {},
        "fuelDesc": {},
        "make": {},
        "mfgDate": {},
        "model": "string",
        "seatCapacity": "string",
        "sleeperCapacity": "string",
        "standingCapacity": {},
        "unladenWeight": "string",
        "wheelbase": {}
      },
      "financer": "string",
      "normsDesc": "SSCER",
      "statusDate": "string"
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
      "name": "",
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
      "dob": "01-10-1988",
      "email": "",
      "gender": "",
      "maritalStatus": "",
      "name": "ANAND KUMAR",
      "phone": "",
      "religion": "",
      "swd": "PRAMOD KUMAR",
      "swdIndicator": "S",
      "title": "",
      "uid": ""
    }
  },
  "expiryDate": " ",
  "issueDate": "01-01-1980",
  "issuedAt": "New Delhi",
  "language": 99,
  "name": "Vehicle Registration",
  "number": "DL01AB1234",
  "status": "A",
  "type": "RVCER",
  "validFromDate": " "
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CertificateData|object|true|none|none|
|IssuedBy|object|true|none|none|
|IssuedTo|object|true|none|none|
|expiryDate|string|false|none|none|
|issueDate|string|true|none|none|
|issuedAt|string|true|none|none|
|language|string|true|none|none|
|name|string|true|none|none|
|number|integer|true|none|none|
|status|string|true|none|none|
|type|string|true|none|none|
|validFromDate|string|true|none|none|
