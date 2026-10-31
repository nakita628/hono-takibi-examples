<h1 id="api">API v1.0.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Base URLs:

* <a href="https://api.apis.guru//api.ote-godaddy.com">https://api.apis.guru//api.ote-godaddy.com</a>

<h1 id="api-v1">v1</h1>

## Create a pending order for certificate

<a id="opIdcertificate_create"></a>

> Code samples

```bash
curl https://example.com/v1/certificates \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "callbackUrl": "string",
    "commonName": "string",
    "contact": {
      "email": "string",
      "jobTitle": "string",
      "nameFirst": "string",
      "nameLast": "string",
      "nameMiddle": "string",
      "phone": "string",
      "suffix": "string"
    },
    "csr": "string",
    "intelVPro": false,
    "organization": {
      "address": {
        "address1": "string",
        "address2": "string",
        "city": "string",
        "country": "AC",
        "postalCode": "string",
        "state": "string"
      },
      "assumedName": "string",
      "name": "string",
      "phone": "string",
      "registrationAgent": "string",
      "registrationNumber": "string"
    },
    "period": 0,
    "productType": "DV_SSL",
    "rootType": "STARFIELD_SHA_2",
    "slotSize": "FIVE",
    "subjectAlternativeNames": [
      "string"
    ]
  }'
```

`POST /v1/certificates`

<p>Creating a certificate order can be a long running asynchronous operation in the PKI workflow. The PKI API supports 2 options for getting the completion stateful actions for this asynchronous operations: 1) by polling operations -- see /v1/certificates/{certificateId}/actions 2) via WebHook style callback -- see '/v1/certificates/{certificateId}/callback'.</p>

> Body parameter

```json
{
  "callbackUrl": "string",
  "commonName": "string",
  "contact": {
    "email": "string",
    "jobTitle": "string",
    "nameFirst": "string",
    "nameLast": "string",
    "nameMiddle": "string",
    "phone": "string",
    "suffix": "string"
  },
  "csr": "string",
  "intelVPro": false,
  "organization": {
    "address": {
      "address1": "string",
      "address2": "string",
      "city": "string",
      "country": "AC",
      "postalCode": "string",
      "state": "string"
    },
    "assumedName": "string",
    "name": "string",
    "phone": "string",
    "registrationAgent": "string",
    "registrationNumber": "string"
  },
  "period": 0,
  "productType": "DV_SSL",
  "rootType": "STARFIELD_SHA_2",
  "slotSize": "FIVE",
  "subjectAlternativeNames": [
    "string"
  ]
}
```

<h3 id="create-a-pending-order-for-certificate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Market-Id|header|string|false|Setting locale for communications such as emails and error messages|
|body|body|[CertificateCreate](#schemacertificatecreate)|true|The certificate order information|
|» callbackUrl|body|string|false|Required if client would like to receive stateful actions via callback during certificate lifecyle|
|» commonName|body|string|false|Name to be secured in certificate. If provided, CN field in CSR will be ignored.|
|» contact|body|[CertificateContact](#schemacertificatecontact)|true|none|
|» csr|body|string|true|Certificate Signing Request|
|» intelVPro|body|boolean|false|Only used for OV|
|» organization|body|[CertificateOrganizationCreate](#schemacertificateorganizationcreate)|false|none|
|» period|body|integer|true|Number of years for certificate validity period|
|» productType|body|string|true|Type of product requesting a certificate. Only required non-renewal|
|» rootType|body|string|false|Root Type. Depending on certificate expiration date, SHA_1 not be allowed. Will default to SHA_2 if expiration date exceeds sha1 allowed date|
|» slotSize|body|string|false|Number of subject alternative names(SAN) to be included in certificate |
|» subjectAlternativeNames|body|[string]|false|Subject Alternative names. Collection of subjectAlternativeNames to be included in certificate.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» productType|DV_SSL|
|» productType|DV_WILDCARD_SSL|
|» productType|EV_SSL|
|» productType|OV_CS|
|» productType|OV_DS|
|» productType|OV_SSL|
|» productType|OV_WILDCARD_SSL|
|» productType|UCC_DV_SSL|
|» productType|UCC_EV_SSL|
|» productType|UCC_OV_SSL|
|» rootType|GODADDY_SHA_1|
|» rootType|GODADDY_SHA_2|
|» rootType|STARFIELD_SHA_1|
|» rootType|STARFIELD_SHA_2|
|» slotSize|FIVE|
|» slotSize|TEN|
|» slotSize|FIFTEEN|
|» slotSize|TWENTY|
|» slotSize|THIRTY|
|» slotSize|FOURTY|
|» slotSize|FIFTY|
|» slotSize|ONE_HUNDRED|

> Example responses

> 202 Response

```json
{
  "certificateId": "string"
}
```

> 400 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string"
    }
  ],
  "message": "string"
}
```

> 401 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string"
    }
  ],
  "message": "string"
}
```

> 403 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string"
    }
  ],
  "message": "string"
}
```

> 409 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string"
    }
  ],
  "message": "string"
}
```

> 422 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string"
    }
  ],
  "message": "string"
}
```

> 500 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string"
    }
  ],
  "message": "string"
}
```

<h3 id="create-a-pending-order-for-certificate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|Request was successful|[CertificateIdentifier](#schemacertificateidentifier)|
|400|Bad Request|Request was malformed|[Error](#schemaerror)|
|401|Unauthorized|Authentication info not sent or invalid|[Error](#schemaerror)|
|403|Forbidden|Authenticated user is not allowed access|[Error](#schemaerror)|
|409|Conflict|Certificate state does not allow renew|[Error](#schemaerror)|
|422|Unprocessable Entity|`email` is not empty<br>`csr` is invalid|[Error](#schemaerror)|
|500|Internal Server Error|Internal server error|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Validate a pending order for certificate

<a id="opIdcertificate_validate"></a>

> Code samples

```bash
curl https://example.com/v1/certificates/validate \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "callbackUrl": "string",
    "commonName": "string",
    "contact": {
      "email": "string",
      "jobTitle": "string",
      "nameFirst": "string",
      "nameLast": "string",
      "nameMiddle": "string",
      "phone": "string",
      "suffix": "string"
    },
    "csr": "string",
    "intelVPro": false,
    "organization": {
      "address": {
        "address1": "string",
        "address2": "string",
        "city": "string",
        "country": "AC",
        "postalCode": "string",
        "state": "string"
      },
      "assumedName": "string",
      "name": "string",
      "phone": "string",
      "registrationAgent": "string",
      "registrationNumber": "string"
    },
    "period": 0,
    "productType": "DV_SSL",
    "rootType": "STARFIELD_SHA_2",
    "slotSize": "FIVE",
    "subjectAlternativeNames": [
      "string"
    ]
  }'
```

`POST /v1/certificates/validate`

> Body parameter

```json
{
  "callbackUrl": "string",
  "commonName": "string",
  "contact": {
    "email": "string",
    "jobTitle": "string",
    "nameFirst": "string",
    "nameLast": "string",
    "nameMiddle": "string",
    "phone": "string",
    "suffix": "string"
  },
  "csr": "string",
  "intelVPro": false,
  "organization": {
    "address": {
      "address1": "string",
      "address2": "string",
      "city": "string",
      "country": "AC",
      "postalCode": "string",
      "state": "string"
    },
    "assumedName": "string",
    "name": "string",
    "phone": "string",
    "registrationAgent": "string",
    "registrationNumber": "string"
  },
  "period": 0,
  "productType": "DV_SSL",
  "rootType": "STARFIELD_SHA_2",
  "slotSize": "FIVE",
  "subjectAlternativeNames": [
    "string"
  ]
}
```

<h3 id="validate-a-pending-order-for-certificate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Market-Id|header|string|false|Setting locale for communications such as emails and error messages|
|body|body|[CertificateCreate](#schemacertificatecreate)|true|The certificate order info|
|» callbackUrl|body|string|false|Required if client would like to receive stateful actions via callback during certificate lifecyle|
|» commonName|body|string|false|Name to be secured in certificate. If provided, CN field in CSR will be ignored.|
|» contact|body|[CertificateContact](#schemacertificatecontact)|true|none|
|» csr|body|string|true|Certificate Signing Request|
|» intelVPro|body|boolean|false|Only used for OV|
|» organization|body|[CertificateOrganizationCreate](#schemacertificateorganizationcreate)|false|none|
|» period|body|integer|true|Number of years for certificate validity period|
|» productType|body|string|true|Type of product requesting a certificate. Only required non-renewal|
|» rootType|body|string|false|Root Type. Depending on certificate expiration date, SHA_1 not be allowed. Will default to SHA_2 if expiration date exceeds sha1 allowed date|
|» slotSize|body|string|false|Number of subject alternative names(SAN) to be included in certificate |
|» subjectAlternativeNames|body|[string]|false|Subject Alternative names. Collection of subjectAlternativeNames to be included in certificate.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» productType|DV_SSL|
|» productType|DV_WILDCARD_SSL|
|» productType|EV_SSL|
|» productType|OV_CS|
|» productType|OV_DS|
|» productType|OV_SSL|
|» productType|OV_WILDCARD_SSL|
|» productType|UCC_DV_SSL|
|» productType|UCC_EV_SSL|
|» productType|UCC_OV_SSL|
|» rootType|GODADDY_SHA_1|
|» rootType|GODADDY_SHA_2|
|» rootType|STARFIELD_SHA_1|
|» rootType|STARFIELD_SHA_2|
|» slotSize|FIVE|
|» slotSize|TEN|
|» slotSize|FIFTEEN|
|» slotSize|TWENTY|
|» slotSize|THIRTY|
|» slotSize|FOURTY|
|» slotSize|FIFTY|
|» slotSize|ONE_HUNDRED|

> Example responses

> 400 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string"
    }
  ],
  "message": "string"
}
```

> 401 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string"
    }
  ],
  "message": "string"
}
```

> 403 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string"
    }
  ],
  "message": "string"
}
```

> 409 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string"
    }
  ],
  "message": "string"
}
```

> 422 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string"
    }
  ],
  "message": "string"
}
```

> 500 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string"
    }
  ],
  "message": "string"
}
```

<h3 id="validate-a-pending-order-for-certificate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Request validated successfully|None|
|400|Bad Request|Request was malformed|[Error](#schemaerror)|
|401|Unauthorized|Authentication info not sent or invalid|[Error](#schemaerror)|
|403|Forbidden|Authenticated user is not allowed access|[Error](#schemaerror)|
|409|Conflict|Certificate state does not allow renew|[Error](#schemaerror)|
|422|Unprocessable Entity|`email` is not empty <br> `csr` is invalid|[Error](#schemaerror)|
|500|Internal Server Error|Internal server error|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Retrieve certificate details

<a id="opIdcertificate_get"></a>

> Code samples

```bash
curl https://example.com/v1/certificates/string \
  -H 'Accept: application/json'
```

`GET /v1/certificates/{certificateId}`

Once the certificate order has been created, this method can be used to check the status of the certificate. This method can also be used to retrieve details of the certificate.

<h3 id="retrieve-certificate-details-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|certificateId|path|string|true|Certificate id to lookup|

> Example responses

> 200 Response

```json
{
  "certificateId": "string",
  "commonName": "string",
  "contact": {
    "email": "string",
    "jobTitle": "string",
    "nameFirst": "string",
    "nameLast": "string",
    "nameMiddle": "string",
    "phone": "string",
    "suffix": "string"
  },
  "createdAt": "string",
  "deniedReason": "string",
  "organization": {
    "address": {
      "address1": "string",
      "address2": "string",
      "city": "string",
      "country": "AC",
      "postalCode": "string",
      "state": "string"
    },
    "assumedName": "string",
    "jurisdictionOfIncorporation": {
      "city": "string",
      "country": "string",
      "county": "string",
      "state": "string"
    },
    "name": "string",
    "phone": "string",
    "registrationAgent": "string",
    "registrationNumber": "string"
  },
  "period": 0,
  "productType": "DV_SSL",
  "progress": 0,
  "revokedAt": "string",
  "rootType": "GODADDY_SHA_1",
  "serialNumber": "string",
  "serialNumberHex": "string",
  "slotSize": "FIVE",
  "status": "PENDING_ISSUANCE",
  "subjectAlternativeNames": [
    {
      "status": "PENDING",
      "subjectAlternativeName": "string"
    }
  ],
  "validEnd": "string",
  "validStart": "string"
}
```

> 400 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string"
    }
  ],
  "message": "string"
}
```

> 401 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string"
    }
  ],
  "message": "string"
}
```

> 403 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string"
    }
  ],
  "message": "string"
}
```

> 404 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string"
    }
  ],
  "message": "string"
}
```

> 500 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string"
    }
  ],
  "message": "string"
}
```

<h3 id="retrieve-certificate-details-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Certificate details retrieved|[Certificate](#schemacertificate)|
|400|Bad Request|Request was malformed|[Error](#schemaerror)|
|401|Unauthorized|Authentication info not sent or invalid|[Error](#schemaerror)|
|403|Forbidden|Authenticated user is not allowed access|[Error](#schemaerror)|
|404|Not Found|Certificate id not found|[Error](#schemaerror)|
|500|Internal Server Error|Internal server error|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Retrieve all certificate actions

<a id="opIdcertificate_action_retrieve"></a>

> Code samples

```bash
curl https://example.com/v1/certificates/string/actions \
  -H 'Accept: application/json'
```

`GET /v1/certificates/{certificateId}/actions`

This method is used to retrieve all stateful actions relating to a certificate lifecycle.

<h3 id="retrieve-all-certificate-actions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|certificateId|path|string|true|Certificate id to register for callback|

> Example responses

> 200 Response

```json
[
  {
    "createdAt": "string",
    "type": "CERTIFICATE_ISSUED"
  }
]
```

> 400 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string"
    }
  ],
  "message": "string"
}
```

> 401 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string"
    }
  ],
  "message": "string"
}
```

> 403 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string"
    }
  ],
  "message": "string"
}
```

> 404 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string"
    }
  ],
  "message": "string"
}
```

> 500 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string"
    }
  ],
  "message": "string"
}
```

<h3 id="retrieve-all-certificate-actions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Action retrieval successful|[ArrayOfCertificateAction](#schemaarrayofcertificateaction)|
|400|Bad Request|Request was malformed|[Error](#schemaerror)|
|401|Unauthorized|Authentication info not sent or invalid|[Error](#schemaerror)|
|403|Forbidden|Authenticated user is not allowed access|[Error](#schemaerror)|
|404|Not Found|Certificate not found|[Error](#schemaerror)|
|500|Internal Server Error|Internal server error|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Retrieve system stateful action callback url

<a id="opIdcertificate_callback_get"></a>

> Code samples

```bash
curl https://example.com/v1/certificates/string/callback \
  -H 'Accept: application/json'
```

`GET /v1/certificates/{certificateId}/callback`

This method is used to retrieve the registered callback url for a certificate.

<h3 id="retrieve-system-stateful-action-callback-url-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|certificateId|path|string|true|Certificate id to register for stateful action callback|

> Example responses

> 200 Response

```json
{
  "callbackUrl": "string"
}
```

> 400 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string"
    }
  ],
  "message": "string"
}
```

> 401 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string"
    }
  ],
  "message": "string"
}
```

> 403 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string"
    }
  ],
  "message": "string"
}
```

> 404 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string"
    }
  ],
  "message": "string"
}
```

> 500 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string"
    }
  ],
  "message": "string"
}
```

<h3 id="retrieve-system-stateful-action-callback-url-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Callback registered|[CertificateCallback](#schemacertificatecallback)|
|400|Bad Request|Request was malformed|[Error](#schemaerror)|
|401|Unauthorized|Authentication info not sent or invalid|[Error](#schemaerror)|
|403|Forbidden|Authenticated user is not allowed access|[Error](#schemaerror)|
|404|Not Found|Certificate id not found|[Error](#schemaerror)|
|500|Internal Server Error|Internal server error|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Register of certificate action callback

<a id="opIdcertificate_callback_replace"></a>

> Code samples

```bash
curl 'https://example.com/v1/certificates/string/callback?callbackUrl=string' \
  -X PUT \
  -H 'Accept: application/json'
```

`PUT /v1/certificates/{certificateId}/callback`

This method is used to register/replace url for callbacks for stateful actions relating to a certificate lifecycle. The callback url is a Webhook style pattern and will receive POST http requests with json body defined in the CertificateAction model definition for each certificate action.  Only one callback URL is allowed to be registered for each certificateId, so it will replace a previous registration.

<h3 id="register-of-certificate-action-callback-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|certificateId|path|string|true|Certificate id to register/replace for callback|
|callbackUrl|query|string|true|Callback url registered/replaced to receive stateful actions|

> Example responses

> 400 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string"
    }
  ],
  "message": "string"
}
```

> 401 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string"
    }
  ],
  "message": "string"
}
```

> 403 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string"
    }
  ],
  "message": "string"
}
```

> 404 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string"
    }
  ],
  "message": "string"
}
```

> 422 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string"
    }
  ],
  "message": "string"
}
```

> 500 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string"
    }
  ],
  "message": "string"
}
```

<h3 id="register-of-certificate-action-callback-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Callback replaced/registered|None|
|400|Bad Request|Request was malformed|[Error](#schemaerror)|
|401|Unauthorized|Authentication info not sent or invalid|[Error](#schemaerror)|
|403|Forbidden|Authenticated user is not allowed access|[Error](#schemaerror)|
|404|Not Found|Certificate id not found|[Error](#schemaerror)|
|422|Unprocessable Entity|Callback url is missing <br> Callback url is malformed|[Error](#schemaerror)|
|500|Internal Server Error|Internal server error|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Unregister system callback

<a id="opIdcertificate_callback_delete"></a>

> Code samples

```bash
curl https://example.com/v1/certificates/string/callback \
  -X DELETE \
  -H 'Accept: application/json'
```

`DELETE /v1/certificates/{certificateId}/callback`

Unregister the callback for a particular certificate.

<h3 id="unregister-system-callback-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|certificateId|path|string|true|Certificate id to unregister callback|

> Example responses

> 400 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string"
    }
  ],
  "message": "string"
}
```

> 401 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string"
    }
  ],
  "message": "string"
}
```

> 403 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string"
    }
  ],
  "message": "string"
}
```

> 404 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string"
    }
  ],
  "message": "string"
}
```

> 500 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string"
    }
  ],
  "message": "string"
}
```

<h3 id="unregister-system-callback-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Callback removed|None|
|400|Bad Request|Request was malformed|[Error](#schemaerror)|
|401|Unauthorized|Authentication info not sent or invalid|[Error](#schemaerror)|
|403|Forbidden|Authenticated user is not allowed access|[Error](#schemaerror)|
|404|Not Found|Certificate id not found|[Error](#schemaerror)|
|500|Internal Server Error|Internal server error|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Cancel a pending certificate

<a id="opIdcertificate_cancel"></a>

> Code samples

```bash
curl https://example.com/v1/certificates/string/cancel \
  -X POST \
  -H 'Accept: application/json'
```

`POST /v1/certificates/{certificateId}/cancel`

Use the cancel call to cancel a pending certificate order.

<h3 id="cancel-a-pending-certificate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|certificateId|path|string|true|Certificate id to cancel|

> Example responses

> 401 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string"
    }
  ],
  "message": "string"
}
```

> 403 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string"
    }
  ],
  "message": "string"
}
```

> 404 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string"
    }
  ],
  "message": "string"
}
```

> 409 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string"
    }
  ],
  "message": "string"
}
```

> 500 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string"
    }
  ],
  "message": "string"
}
```

<h3 id="cancel-a-pending-certificate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Certificate order has been canceled|None|
|401|Unauthorized|Authentication info not sent or invalid|[Error](#schemaerror)|
|403|Forbidden|Authenticated user is not allowed access|[Error](#schemaerror)|
|404|Not Found|Certificate id not found|[Error](#schemaerror)|
|409|Conflict|Certificate state does not allow cancel|[Error](#schemaerror)|
|500|Internal Server Error|Internal server error|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Download certificate

<a id="opIdcertificate_download"></a>

> Code samples

```bash
curl https://example.com/v1/certificates/string/download \
  -H 'Accept: application/json'
```

`GET /v1/certificates/{certificateId}/download`

<h3 id="download-certificate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|certificateId|path|string|true|Certificate id to download|

> Example responses

> 200 Response

```json
{
  "pems": {
    "certificate": "string",
    "cross": "string",
    "intermediate": "string",
    "root": "string"
  },
  "serialNumber": "string"
}
```

> 400 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string"
    }
  ],
  "message": "string"
}
```

> 401 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string"
    }
  ],
  "message": "string"
}
```

> 403 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string"
    }
  ],
  "message": "string"
}
```

> 404 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string"
    }
  ],
  "message": "string"
}
```

> 409 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string"
    }
  ],
  "message": "string"
}
```

> 500 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string"
    }
  ],
  "message": "string"
}
```

<h3 id="download-certificate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Certificate retrieved|[CertificateBundle](#schemacertificatebundle)|
|400|Bad Request|Request was malformed|[Error](#schemaerror)|
|401|Unauthorized|Authentication info not sent or invalid|[Error](#schemaerror)|
|403|Forbidden|Authenticated user is not allowed access|[Error](#schemaerror)|
|404|Not Found|Certificate id not found|[Error](#schemaerror)|
|409|Conflict|Certificate state does not allow download|[Error](#schemaerror)|
|500|Internal Server Error|Internal server error|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Retrieve email history

<a id="opIdcertificate_email_history"></a>

> Code samples

```bash
curl https://example.com/v1/certificates/string/email/history \
  -H 'Accept: application/json'
```

`GET /v1/certificates/{certificateId}/email/history`

This method can be used to retrieve all emails sent for a certificate.

<h3 id="retrieve-email-history-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|certificateId|path|string|true|Certificate id to retrieve email history|

> Example responses

> 200 Response

```json
{
  "accountId": 0,
  "body": "string",
  "dateEntered": "string",
  "fromType": "string",
  "id": 0,
  "recipients": "string",
  "subject": "string",
  "templateType": "string"
}
```

> 409 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string"
    }
  ],
  "message": "string"
}
```

> 500 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string"
    }
  ],
  "message": "string"
}
```

<h3 id="retrieve-email-history-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Email history retrieval successful|[CertificateEmailHistory](#schemacertificateemailhistory)|
|409|Conflict|Email history not found|[Error](#schemaerror)|
|500|Internal Server Error|Internal server error|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Add alternate email address

<a id="opIdcertificate_alternate_email_address"></a>

> Code samples

```bash
curl https://example.com/v1/certificates/string/email/resend/string \
  -X POST \
  -H 'Accept: application/json'
```

`POST /v1/certificates/{certificateId}/email/resend/{emailAddress}`

This method adds an alternate email address to a certificate order and re-sends all existing request emails to that address.

<h3 id="add-alternate-email-address-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|certificateId|path|string|true|Certificate id to resend emails|
|emailAddress|path|string|true|Specific email address to resend email|

> Example responses

> 200 Response

```json
{
  "accountId": 0,
  "body": "string",
  "dateEntered": "string",
  "fromType": "string",
  "id": 0,
  "recipients": "string",
  "subject": "string",
  "templateType": "string"
}
```

> 404 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string"
    }
  ],
  "message": "string"
}
```

> 409 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string"
    }
  ],
  "message": "string"
}
```

> 500 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string"
    }
  ],
  "message": "string"
}
```

<h3 id="add-alternate-email-address-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Alternate email address added and emails re-sent|[CertificateEmailHistory](#schemacertificateemailhistory)|
|404|Not Found|Certificate not found|[Error](#schemaerror)|
|409|Conflict|Certificate state does not allow alternate email address|[Error](#schemaerror)|
|500|Internal Server Error|Internal server error|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Resend an email

<a id="opIdcertificate_resend_email"></a>

> Code samples

```bash
curl https://example.com/v1/certificates/string/email/string/resend \
  -X POST \
  -H 'Accept: application/json'
```

`POST /v1/certificates/{certificateId}/email/{emailId}/resend`

This method can be used to resend emails by providing the certificate id and the email id

<h3 id="resend-an-email-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|certificateId|path|string|true|Certificate id to resend email|
|emailId|path|string|true|Email id for email to resend|

> Example responses

> 404 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string"
    }
  ],
  "message": "string"
}
```

> 409 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string"
    }
  ],
  "message": "string"
}
```

> 500 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string"
    }
  ],
  "message": "string"
}
```

<h3 id="resend-an-email-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Email sent successfully|None|
|404|Not Found|Certificate not found|[Error](#schemaerror)|
|409|Conflict|Email Id not found|[Error](#schemaerror)|
|500|Internal Server Error|Internal server error|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Resend email to email address

<a id="opIdcertificate_resend_email_address"></a>

> Code samples

```bash
curl https://example.com/v1/certificates/string/email/string/resend/string \
  -X POST \
  -H 'Accept: application/json'
```

`POST /v1/certificates/{certificateId}/email/{emailId}/resend/{emailAddress}`

This method can be used to resend emails by providing the certificate id, the email id, and the recipient email address

<h3 id="resend-email-to-email-address-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|certificateId|path|string|true|Certificate id to resend emails|
|emailId|path|string|true|Email id for email to resend|
|emailAddress|path|string|true|Specific email address to resend email|

> Example responses

> 404 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string"
    }
  ],
  "message": "string"
}
```

> 409 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string"
    }
  ],
  "message": "string"
}
```

> 500 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string"
    }
  ],
  "message": "string"
}
```

<h3 id="resend-email-to-email-address-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Email sent successfully|None|
|404|Not Found|Certificate not found|[Error](#schemaerror)|
|409|Conflict|Email Id not found|[Error](#schemaerror)|
|500|Internal Server Error|Internal server error|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Reissue active certificate

<a id="opIdcertificate_reissue"></a>

> Code samples

```bash
curl https://example.com/v1/certificates/string/reissue \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "callbackUrl": "string",
    "commonName": "Existing common name",
    "csr": "Existing CSR",
    "delayExistingRevoke": 72,
    "forceDomainRevetting": [
      "string"
    ],
    "rootType": "GODADDY_SHA_1",
    "subjectAlternativeNames": [
      "string"
    ]
  }'
```

`POST /v1/certificates/{certificateId}/reissue`

<p>Rekeying is the process by which the private and public key is changed for a certificate. It is a simplified reissue,where only the CSR is changed. Reissuing is the process by which domain names are added or removed from a certificate.Once a request is validated and approved, the certificate will be reissued with the new common name and sans specified. Unlimited reissues are available during the lifetime of the certificate.New names added to a certificate that do not share the base domain of the common name may take additional time to validate. If this API call is made before a previous pending reissue has been validated and issued, the previous reissue request is automatically rejected and replaced with the current request.</p>

> Body parameter

```json
{
  "callbackUrl": "string",
  "commonName": "Existing common name",
  "csr": "Existing CSR",
  "delayExistingRevoke": 72,
  "forceDomainRevetting": [
    "string"
  ],
  "rootType": "GODADDY_SHA_1",
  "subjectAlternativeNames": [
    "string"
  ]
}
```

<h3 id="reissue-active-certificate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|certificateId|path|string|true|Certificate id to reissue|
|body|body|[CertificateReissue](#schemacertificatereissue)|true|The reissue request info|
|» callbackUrl|body|string|false|Required if client would like to receive stateful action via callback during certificate lifecyle|
|» commonName|body|string|false|The common name of certificate to be secured|
|» csr|body|string|false|Certificate Signing Request.|
|» delayExistingRevoke|body|integer|false|In hours, time to delay revoking existing certificate after issuance of new certificate. If revokeExistingCertOnIssuance is enabled, this value will be ignored|
|» forceDomainRevetting|body|[string]|false|Optional field. Domain verification will be required for each domain listed here. Specify a value of * to indicate that all domains associated with the request should have their domain information reverified.|
|» rootType|body|string|false|Root Type. Depending on certificate expiration date, SHA_1 not be allowed. Will default to SHA_2 if expiration date exceeds sha1 allowed date|
|» subjectAlternativeNames|body|[string]|false|Only used for UCC products. An array of subject alternative names to include in certificate.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» rootType|GODADDY_SHA_1|
|» rootType|GODADDY_SHA_2|
|» rootType|STARFIELD_SHA_1|
|» rootType|STARFIELD_SHA_2|

> Example responses

> 400 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string"
    }
  ],
  "message": "string"
}
```

> 401 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string"
    }
  ],
  "message": "string"
}
```

> 403 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string"
    }
  ],
  "message": "string"
}
```

> 404 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string"
    }
  ],
  "message": "string"
}
```

> 409 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string"
    }
  ],
  "message": "string"
}
```

> 422 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string"
    }
  ],
  "message": "string"
}
```

> 500 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string"
    }
  ],
  "message": "string"
}
```

<h3 id="reissue-active-certificate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|Reissue request created|None|
|400|Bad Request|Request was malformed|[Error](#schemaerror)|
|401|Unauthorized|Authentication info not sent or invalid|[Error](#schemaerror)|
|403|Forbidden|Authenticated user is not allowed access|[Error](#schemaerror)|
|404|Not Found|Certificate id not found|[Error](#schemaerror)|
|409|Conflict|Certificate state does not allow reissue|[Error](#schemaerror)|
|422|Unprocessable Entity|`csr` is invalid<br>Delay revocation exceeds maximum|[Error](#schemaerror)|
|500|Internal Server Error|Internal server error|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Renew active certificate

<a id="opIdcertificate_renew"></a>

> Code samples

```bash
curl https://example.com/v1/certificates/string/renew \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "callbackUrl": "string",
    "commonName": "Existing common name",
    "csr": "Existing CSR",
    "period": 0,
    "rootType": "GODADDY_SHA_1",
    "subjectAlternativeNames": [
      "string"
    ]
  }'
```

`POST /v1/certificates/{certificateId}/renew`

Renewal is the process by which the validity of a certificate is extended. Renewal is only available 60 days prior to expiration of the previous certificate and 30 days after the expiration of the previous certificate. The renewal supports modifying a set of the original certificate order information. Once a request is validated and approved, the certificate will be issued with extended validity. Since subject alternative names can be removed during a renewal, we require that you provide the subject alternative names you expect in the renewed certificate. New names added to a certificate that do not share the base domain of the common name may take additional time to validate. </p>

> Body parameter

```json
{
  "callbackUrl": "string",
  "commonName": "Existing common name",
  "csr": "Existing CSR",
  "period": 0,
  "rootType": "GODADDY_SHA_1",
  "subjectAlternativeNames": [
    "string"
  ]
}
```

<h3 id="renew-active-certificate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|certificateId|path|string|true|Certificate id to renew|
|body|body|[CertificateRenew](#schemacertificaterenew)|true|The renew request info|
|» callbackUrl|body|string|false|Required if client would like to receive stateful actions via callback during certificate lifecyle|
|» commonName|body|string|false|The common name of certificate to be secured|
|» csr|body|string|false|Certificate Signing Request.|
|» period|body|integer|false|Number of years for certificate validity period, if different from previous certificate|
|» rootType|body|string|false|Root Type. Depending on certificate expiration date, SHA_1 not be allowed. Will default to SHA_2 if expiration date exceeds sha1 allowed date|
|» subjectAlternativeNames|body|[string]|false|Only used for UCC products. An array of subject alternative names to include in certificate. Not including a subject alternative name that was in the previous certificate will remove it from the renewed certificate.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» rootType|GODADDY_SHA_1|
|» rootType|GODADDY_SHA_2|
|» rootType|STARFIELD_SHA_1|
|» rootType|STARFIELD_SHA_2|

> Example responses

> 400 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string"
    }
  ],
  "message": "string"
}
```

> 401 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string"
    }
  ],
  "message": "string"
}
```

> 403 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string"
    }
  ],
  "message": "string"
}
```

> 404 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string"
    }
  ],
  "message": "string"
}
```

> 409 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string"
    }
  ],
  "message": "string"
}
```

> 422 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string"
    }
  ],
  "message": "string"
}
```

> 500 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string"
    }
  ],
  "message": "string"
}
```

<h3 id="renew-active-certificate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|Renew request created|None|
|400|Bad Request|Request was malformed|[Error](#schemaerror)|
|401|Unauthorized|Authentication info not sent or invalid|[Error](#schemaerror)|
|403|Forbidden|Authenticated user is not allowed access|[Error](#schemaerror)|
|404|Not Found|Certificate id not found|[Error](#schemaerror)|
|409|Conflict|Certificate state does not allow renew|[Error](#schemaerror)|
|422|Unprocessable Entity|`csr` is invalid|[Error](#schemaerror)|
|500|Internal Server Error|Internal server error|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Revoke active certificate

<a id="opIdcertificate_revoke"></a>

> Code samples

```bash
curl https://example.com/v1/certificates/string/revoke \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "reason": "AFFILIATION_CHANGED"
  }'
```

`POST /v1/certificates/{certificateId}/revoke`

Use revoke call to revoke an active certificate, if the certificate has not been issued a 404 response will be returned.

> Body parameter

```json
{
  "reason": "AFFILIATION_CHANGED"
}
```

<h3 id="revoke-active-certificate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|certificateId|path|string|true|Certificate id to revoke|
|body|body|[CertificateRevoke](#schemacertificaterevoke)|true|The certificate revocation request|
|» reason|body|string|true|Reason for revocation|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» reason|AFFILIATION_CHANGED|
|» reason|CESSATION_OF_OPERATION|
|» reason|KEY_COMPROMISE|
|» reason|PRIVILEGE_WITHDRAWN|
|» reason|SUPERSEDED|

> Example responses

> 400 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string"
    }
  ],
  "message": "string"
}
```

> 401 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string"
    }
  ],
  "message": "string"
}
```

> 403 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string"
    }
  ],
  "message": "string"
}
```

> 404 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string"
    }
  ],
  "message": "string"
}
```

> 409 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string"
    }
  ],
  "message": "string"
}
```

> 500 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string"
    }
  ],
  "message": "string"
}
```

<h3 id="revoke-active-certificate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Certificate Revoked|None|
|400|Bad Request|Request was malformed|[Error](#schemaerror)|
|401|Unauthorized|Authentication info not sent or invalid|[Error](#schemaerror)|
|403|Forbidden|Authenticated user is not allowed access|[Error](#schemaerror)|
|404|Not Found|Certificate id not found|[Error](#schemaerror)|
|409|Conflict|Certificate state does not allow revoke|[Error](#schemaerror)|
|500|Internal Server Error|Internal server error|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Get Site seal

<a id="opIdcertificate_siteseal_get"></a>

> Code samples

```bash
curl https://example.com/v1/certificates/string/siteSeal \
  -H 'Accept: application/json'
```

`GET /v1/certificates/{certificateId}/siteSeal`

<p>This method is used to obtain the site seal information for an issued certificate. A site seal is a graphic that the certificate purchaser can embed on their web site to show their visitors information about their SSL certificate. If a web site visitor clicks on the site seal image, a pop-up page is displayed that contains detailed information about the SSL certificate. The site seal token is used to link the site seal graphic image to the appropriate certificate details pop-up page display when a user clicks on the site seal. The site seal images are expected to be static images and hosted on the reseller's website, to minimize delays for customer page load times.</p>

<h3 id="get-site-seal-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|certificateId|path|string|true|Certificate id|
|theme|query|string|false|This value represents the visual theme of the seal. If seal doesn't exist, default values are used if params not present. If seal does exist, default values will not be used to update unless params present.|
|locale|query|string|false|Determine locale for text displayed in seal image and verification page. If seal doesn't exist, default values are used if params not present. If seal does exist, default values will not be used to update unless params present.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|theme|DARK|
|theme|LIGHT|

> Example responses

> 200 Response

```json
{
  "html": "string"
}
```

> 400 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string"
    }
  ],
  "message": "string"
}
```

> 401 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string"
    }
  ],
  "message": "string"
}
```

> 403 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string"
    }
  ],
  "message": "string"
}
```

> 404 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string"
    }
  ],
  "message": "string"
}
```

> 409 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string"
    }
  ],
  "message": "string"
}
```

> 422 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string"
    }
  ],
  "message": "string"
}
```

> 500 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string"
    }
  ],
  "message": "string"
}
```

<h3 id="get-site-seal-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Site seal retrieved|[CertificateSiteSeal](#schemacertificatesiteseal)|
|400|Bad Request|Request was malformed|[Error](#schemaerror)|
|401|Unauthorized|Authentication info not sent or invalid|[Error](#schemaerror)|
|403|Forbidden|Authenticated user is not allowed access|[Error](#schemaerror)|
|404|Not Found|Certificate id not found|[Error](#schemaerror)|
|409|Conflict|Certificate state does not allow seal|[Error](#schemaerror)|
|422|Unprocessable Entity|'locale' is invalid|[Error](#schemaerror)|
|500|Internal Server Error|Internal server error|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Check Domain Control

<a id="opIdcertificate_verifydomaincontrol"></a>

> Code samples

```bash
curl https://example.com/v1/certificates/string/verifyDomainControl \
  -X POST \
  -H 'Accept: application/json'
```

`POST /v1/certificates/{certificateId}/verifyDomainControl`

Domain control is a means for verifying the domain included in the certificate order. This resource is useful for resellers that control the domains for their customers, and can expedite the verification process. See https://www.godaddy.com/help/verifying-your-domain-ownership-for-ssl-certificate-requests-html-or-dns-7452

<h3 id="check-domain-control-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|certificateId|path|string|true|Certificate id to lookup|

> Example responses

> 400 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string"
    }
  ],
  "message": "string"
}
```

> 401 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string"
    }
  ],
  "message": "string"
}
```

> 403 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string"
    }
  ],
  "message": "string"
}
```

> 404 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string"
    }
  ],
  "message": "string"
}
```

> 409 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string"
    }
  ],
  "message": "string"
}
```

> 500 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string"
    }
  ],
  "message": "string"
}
```

<h3 id="check-domain-control-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Domain control was successful|None|
|400|Bad Request|Request was malformed|[Error](#schemaerror)|
|401|Unauthorized|Authentication info not sent or invalid|[Error](#schemaerror)|
|403|Forbidden|Authenticated user is not allowed access|[Error](#schemaerror)|
|404|Not Found|Certificate id not found|[Error](#schemaerror)|
|409|Conflict|Domain control was not successful <br> Certificate state does not allow domain control|[Error](#schemaerror)|
|500|Internal Server Error|Internal server error|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Search for certificate details by entitlement

<a id="opIdcertificate_get_entitlement"></a>

> Code samples

```bash
curl 'https://example.com/v2/certificates?entitlementId=string' \
  -H 'Accept: application/json'
```

`GET /v2/certificates`

Once the certificate order has been created, this method can be used to check the status of the certificate. This method can also be used to retrieve details of the certificates associated to an entitlement.

<h3 id="search-for-certificate-details-by-entitlement-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|entitlementId|query|string|true|Entitlement id to lookup|
|latest|query|boolean|false|Fetch only the most recent certificate|

> Example responses

> 200 Response

```json
[
  {
    "certificateId": "string",
    "commonName": "string",
    "contact": {
      "email": "string",
      "jobTitle": "string",
      "nameFirst": "string",
      "nameLast": "string",
      "nameMiddle": "string",
      "phone": "string",
      "suffix": "string"
    },
    "createdAt": "string",
    "deniedReason": "string",
    "organization": {
      "address": {
        "address1": "string",
        "address2": "string",
        "city": "string",
        "country": "AC",
        "postalCode": "string",
        "state": "string"
      },
      "assumedName": "string",
      "jurisdictionOfIncorporation": {
        "city": "string",
        "country": "string",
        "county": "string",
        "state": "string"
      },
      "name": "string",
      "phone": "string",
      "registrationAgent": "string",
      "registrationNumber": "string"
    },
    "period": 0,
    "productType": "DV_SSL",
    "progress": 0,
    "revokedAt": "string",
    "rootType": "GODADDY_SHA_1",
    "serialNumber": "string",
    "serialNumberHex": "string",
    "slotSize": "FIVE",
    "status": "PENDING_ISSUANCE",
    "subjectAlternativeNames": [
      {
        "status": "PENDING",
        "subjectAlternativeName": "string"
      }
    ],
    "validEnd": "string",
    "validStart": "string"
  }
]
```

> 400 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string"
    }
  ],
  "message": "string"
}
```

> 401 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string"
    }
  ],
  "message": "string"
}
```

> 403 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string"
    }
  ],
  "message": "string"
}
```

> 422 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string"
    }
  ],
  "message": "string"
}
```

> 500 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string"
    }
  ],
  "message": "string"
}
```

<h3 id="search-for-certificate-details-by-entitlement-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Certificate details retrieved|Inline|
|400|Bad Request|Request was malformed|[Error](#schemaerror)|
|401|Unauthorized|Authentication info not sent or invalid|[Error](#schemaerror)|
|403|Forbidden|Authenticated user is not allowed access|[Error](#schemaerror)|
|422|Unprocessable Entity|Entitlement id not provided|[Error](#schemaerror)|
|500|Internal Server Error|Internal server error|[Error](#schemaerror)|

<h3 id="search-for-certificate-details-by-entitlement-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Certificate](#schemacertificate)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Download certificate by entitlement

<a id="opIdcertificate_download_entitlement"></a>

> Code samples

```bash
curl 'https://example.com/v2/certificates/download?entitlementId=string' \
  -H 'Accept: application/json'
```

`GET /v2/certificates/download`

<h3 id="download-certificate-by-entitlement-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|entitlementId|query|string|true|Entitlement id to download|

> Example responses

> 200 Response

```json
{
  "pems": {
    "certificate": "string",
    "cross": "string",
    "intermediate": "string",
    "root": "string"
  },
  "serialNumber": "string"
}
```

> 400 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string"
    }
  ],
  "message": "string"
}
```

> 401 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string"
    }
  ],
  "message": "string"
}
```

> 403 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string"
    }
  ],
  "message": "string"
}
```

> 404 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string"
    }
  ],
  "message": "string"
}
```

> 409 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string"
    }
  ],
  "message": "string"
}
```

> 422 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string"
    }
  ],
  "message": "string"
}
```

> 500 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string"
    }
  ],
  "message": "string"
}
```

<h3 id="download-certificate-by-entitlement-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Certificate retrieved|[CertificateBundle](#schemacertificatebundle)|
|400|Bad Request|Request was malformed|[Error](#schemaerror)|
|401|Unauthorized|Authentication info not sent or invalid|[Error](#schemaerror)|
|403|Forbidden|Authenticated user is not allowed access|[Error](#schemaerror)|
|404|Not Found|Entitlement id not found|[Error](#schemaerror)|
|409|Conflict|Certificate state does not allow download|[Error](#schemaerror)|
|422|Unprocessable Entity|Entitlement id not provided|[Error](#schemaerror)|
|500|Internal Server Error|Internal server error|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="api-v2">v2</h1>

## Retrieve customer's certificates

<a id="opIdgetCustomerCertificatesByCustomerId"></a>

> Code samples

```bash
curl https://example.com/v2/customers/string/certificates \
  -H 'Accept: application/json'
```

`GET /v2/customers/{customerId}/certificates`

This method can be used to retrieve a list of certificates for a specified customer. <ul><li>**shopperId** is **not the same** as **customerId**.  **shopperId** is a number of max length 10 digits (*ex:* 1234567890) whereas **customerId** is a UUIDv4 (*ex:* 295e3bc3-b3b9-4d95-aae5-ede41a994d13)</li></ul>

<h3 id="retrieve-customers-certificates-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|customerId|path|string|true|An identifier for a customer|
|offset|query|integer(integer-positive)|false|Number of results to skip for pagination|
|limit|query|integer(integer-positive)|false|Maximum number of items to return|

> Example responses

> 200 Response

```json
{
  "certificates": [
    {
      "certificateId": "string",
      "commonName": "string",
      "completedAt": "string",
      "createdAt": "string",
      "period": 0,
      "renewalAvailable": true,
      "revokedAt": "string",
      "serialNumber": "string",
      "slotSize": "FIVE",
      "status": "ISSUED",
      "subjectAlternativeNames": [
        "string"
      ],
      "type": "DV_SSL",
      "validEndAt": "string",
      "validStartAt": "string"
    }
  ],
  "pagination": {
    "first": "string",
    "last": "string",
    "next": "string",
    "previous": "string",
    "total": 0
  }
}
```

<h3 id="retrieve-customers-certificates-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Customer certificate information retrieved.|[CertificateSummariesV2](#schemacertificatesummariesv2)|
|401|Unauthorized|Authentication info not sent or is invalid|[Error](#schemaerror)|
|403|Forbidden|Authenticated user is not allowed access|[Error](#schemaerror)|
|422|Unprocessable Entity|Application-specific request error|[Error](#schemaerror)|
|429|Too Many Requests|Too many requests received within interval|[ErrorLimit](#schemaerrorlimit)|
|500|Internal Server Error|Internal server error|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Retrieves the external account binding for the specified customer

<a id="opIdgetAcmeExternalAccountBinding"></a>

> Code samples

```bash
curl https://example.com/v2/customers/string/certificates/acme/externalAccountBinding \
  -H 'Accept: application/json'
```

`GET /v2/customers/{customerId}/certificates/acme/externalAccountBinding`

Use this endpoint to retrieve a key identifier and Hash-based Message Authentication Code (HMAC) key for Automated Certificate Management Environment (ACME) External Account Binding (EAB). These credentials can be used with an ACME client that supports EAB (ex. CertBot) to automate the issuance request and deployment of DV SSL certificates

<h3 id="retrieves-the-external-account-binding-for-the-specified-customer-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|customerId|path|string|true|An identifier for a customer|

> Example responses

> 200 Response

```json
{
  "directoryUrl": "http://example.com",
  "hmacKey": "string",
  "keyId": "string"
}
```

<h3 id="retrieves-the-external-account-binding-for-the-specified-customer-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Acme key identifier and HMAC key for the external account binding. Directory URI is also provided for making ACME requests.|[ExternalAccountBinding](#schemaexternalaccountbinding)|
|401|Unauthorized|Authentication info not sent or is invalid|[Error](#schemaerror)|
|403|Forbidden|Authenticated user is not allowed access|[Error](#schemaerror)|
|404|Not Found|Resource not found|[Error](#schemaerror)|
|422|Unprocessable Entity|Application-specific request error|[Error](#schemaerror)|
|429|Too Many Requests|Too many requests received within interval|[ErrorLimit](#schemaerrorlimit)|
|500|Internal Server Error|Internal server error|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Retrieve individual certificate details

<a id="opIdgetCertificateDetailByCertIdentifier"></a>

> Code samples

```bash
curl https://example.com/v2/customers/string/certificates/string \
  -H 'Accept: application/json'
```

`GET /v2/customers/{customerId}/certificates/{certificateId}`

Once the certificate order has been created, this method can be used to check the status of the certificate. This method can also be used to retrieve details of the certificate. <ul><li>**shopperId** is **not the same** as **customerId**. **shopperId** is a number of max length 10 digits (*ex:* 1234567890) whereas **customerId** is a UUIDv4 (*ex:* 295e3bc3-b3b9-4d95-aae5-ede41a994d13)</li></ul>

<h3 id="retrieve-individual-certificate-details-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|customerId|path|string|true|An identifier for a customer|
|certificateId|path|string|true|Certificate id to lookup|

> Example responses

> 200 Response

```json
{
  "certificateId": "string",
  "commonName": "string",
  "completedAt": "string",
  "contact": {
    "email": "string",
    "jobTitle": "string",
    "nameFirst": "string",
    "nameLast": "string",
    "nameMiddle": "string",
    "phone": "string",
    "suffix": "string"
  },
  "createdAt": "string",
  "csr": "string",
  "deniedReason": "string",
  "organization": {
    "address": {
      "address1": "string",
      "address2": "string",
      "city": "string",
      "country": "AC",
      "postalCode": "string",
      "state": "string"
    },
    "assumedName": "string",
    "jurisdictionOfIncorporation": {
      "city": "string",
      "country": "string",
      "county": "string",
      "state": "string"
    },
    "name": "string",
    "phone": "string",
    "registrationAgent": "string",
    "registrationNumber": "string"
  },
  "period": 0,
  "progress": 0,
  "renewalAvailable": true,
  "revokedAt": "string",
  "rootType": "GODADDY_SHA_1",
  "serialNumber": "string",
  "serialNumberHex": "string",
  "slotSize": "FIVE",
  "status": "PENDING_ISSUANCE",
  "subjectAlternativeNames": [
    "string"
  ],
  "type": "DV_SSL",
  "validEndAt": "string",
  "validStartAt": "string"
}
```

<h3 id="retrieve-individual-certificate-details-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Certificate details retrieved|[CertificateDetailV2](#schemacertificatedetailv2)|
|401|Unauthorized|Authentication info not sent or is invalid|[Error](#schemaerror)|
|403|Forbidden|Authenticated user is not allowed access|[Error](#schemaerror)|
|404|Not Found|Resource not found|[Error](#schemaerror)|
|422|Unprocessable Entity|Application-specific request error|[Error](#schemaerror)|
|429|Too Many Requests|Too many requests received within interval|[ErrorLimit](#schemaerrorlimit)|
|500|Internal Server Error|Internal server error|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Retrieve domain verification status

<a id="opIdgetDomainInformationByCertificateId"></a>

> Code samples

```bash
curl https://example.com/v2/customers/string/certificates/string/domainVerifications \
  -H 'Accept: application/json'
```

`GET /v2/customers/{customerId}/certificates/{certificateId}/domainVerifications`

This method can be used to retrieve the domain verification status for a certificate request.<ul><li>**shopperId** is **not the same** as **customerId**.  **shopperId** is a number of max length 10 digits (*ex:* 1234567890) whereas **customerId** is a UUIDv4 (*ex:* 295e3bc3-b3b9-4d95-aae5-ede41a994d13)</li></ul>"

<h3 id="retrieve-domain-verification-status-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|customerId|path|string|true|An identifier for a customer|
|certificateId|path|string|true|Certificate id to lookup|

> Example responses

> 200 Response

```json
[
  {
    "createdAt": "string",
    "dceToken": "string",
    "domain": "string",
    "domainEntityId": 0,
    "modifiedAt": "string",
    "status": "COMPLETED",
    "type": "DOMAIN_CONTROL_EMAIL",
    "usage": "COMMON_NAME"
  }
]
```

<h3 id="retrieve-domain-verification-status-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Domain verification status list for specified certificateId.|Inline|
|401|Unauthorized|Authentication info not sent or is invalid|[Error](#schemaerror)|
|403|Forbidden|Authenticated user is not allowed access|[Error](#schemaerror)|
|404|Not Found|Resource not found|[Error](#schemaerror)|
|422|Unprocessable Entity|Application-specific request error|[Error](#schemaerror)|
|429|Too Many Requests|Too many requests received within interval|[ErrorLimit](#schemaerrorlimit)|
|500|Internal Server Error|Internal server error|[Error](#schemaerror)|

<h3 id="retrieve-domain-verification-status-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[DomainVerificationSummary](#schemadomainverificationsummary)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Retrieve detailed information for supplied domain

<a id="opIdgetDomainDetailsByDomain"></a>

> Code samples

```bash
curl https://example.com/v2/customers/string/certificates/string/domainVerifications/string \
  -H 'Accept: application/json'
```

`GET /v2/customers/{customerId}/certificates/{certificateId}/domainVerifications/{domain}`

Retrieve detailed information for supplied domain, including domain verification details and Certificate Authority Authorization (CAA) verification details. <ul><li>**shopperId** is **not the same** as **customerId**.  **shopperId** is a number of max length 10 digits (*ex:* 1234567890) whereas **customerId** is a UUIDv4 (*ex:* 295e3bc3-b3b9-4d95-aae5-ede41a994d13)</li></ul>

<h3 id="retrieve-detailed-information-for-supplied-domain-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|customerId|path|string|true|An identifier for a customer|
|certificateId|path|string|true|Certificate id to lookup|
|domain|path|string(domain)|true|A valid domain name in the certificate request|

> Example responses

> 200 Response

```json
{
  "createdAt": "string",
  "dceToken": "string",
  "domain": "string",
  "domainEntityId": 0,
  "modifiedAt": "string",
  "status": "COMPLETED",
  "type": "DOMAIN_CONTROL_EMAIL",
  "usage": "COMMON_NAME",
  "certificateAuthorityAuthorization": {
    "completedAt": "string",
    "queryPaths": [
      "string"
    ],
    "recommendations": [
      "ADD_CA_TO_CAA"
    ],
    "status": "PENDING"
  }
}
```

<h3 id="retrieve-detailed-information-for-supplied-domain-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Retrieve detailed information for supplied domain, including domain verification details and Certificate Authority Authorization (CAA) verification details.|[DomainVerificationDetail](#schemadomainverificationdetail)|
|401|Unauthorized|Authentication info not sent or is invalid|[Error](#schemaerror)|
|403|Forbidden|Authenticated user is not allowed access|[Error](#schemaerror)|
|404|Not Found|Resource not found|[Error](#schemaerror)|
|422|Unprocessable Entity|Application-specific request error|[Error](#schemaerror)|
|429|Too Many Requests|Too many requests received within interval|[ErrorLimit](#schemaerrorlimit)|
|500|Internal Server Error|Internal server error|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

<h2 id="tocS_ArrayOfCertificateAction">ArrayOfCertificateAction</h2>
<!-- backwards compatibility -->
<a id="schemaarrayofcertificateaction"></a>
<a id="schema_ArrayOfCertificateAction"></a>
<a id="tocSarrayofcertificateaction"></a>
<a id="tocsarrayofcertificateaction"></a>

```json
[
  {
    "createdAt": "string",
    "type": "CERTIFICATE_ISSUED"
  }
]
```

<h2 id="tocS_Certificate">Certificate</h2>
<!-- backwards compatibility -->
<a id="schemacertificate"></a>
<a id="schema_Certificate"></a>
<a id="tocScertificate"></a>
<a id="tocscertificate"></a>

```json
{
  "certificateId": "string",
  "commonName": "string",
  "contact": {
    "email": "string",
    "jobTitle": "string",
    "nameFirst": "string",
    "nameLast": "string",
    "nameMiddle": "string",
    "phone": "string",
    "suffix": "string"
  },
  "createdAt": "string",
  "deniedReason": "string",
  "organization": {
    "address": {
      "address1": "string",
      "address2": "string",
      "city": "string",
      "country": "AC",
      "postalCode": "string",
      "state": "string"
    },
    "assumedName": "string",
    "jurisdictionOfIncorporation": {
      "city": "string",
      "country": "string",
      "county": "string",
      "state": "string"
    },
    "name": "string",
    "phone": "string",
    "registrationAgent": "string",
    "registrationNumber": "string"
  },
  "period": 0,
  "productType": "DV_SSL",
  "progress": 0,
  "revokedAt": "string",
  "rootType": "GODADDY_SHA_1",
  "serialNumber": "string",
  "serialNumberHex": "string",
  "slotSize": "FIVE",
  "status": "PENDING_ISSUANCE",
  "subjectAlternativeNames": [
    {
      "status": "PENDING",
      "subjectAlternativeName": "string"
    }
  ],
  "validEnd": "string",
  "validStart": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|certificateId|string|true|none|The unique identifier of the certificate request. Only present if no errors returned|
|commonName|string|false|none|Common name of certificate|
|contact|[CertificateContact](#schemacertificatecontact)|true|none|none|
|createdAt|string(iso-datetime)|true|none|The date the certificate was ordered.|
|deniedReason|string|false|none|Only present if certificate order has been denied|
|organization|[CertificateOrganization](#schemacertificateorganization)|false|none|none|
|period|integer|true|none|Validity period of order. Specified in years|
|productType|string|true|none|Certificate product type|
|progress|integer|false|none|Percentage of completion for certificate vetting|
|revokedAt|string(iso-datetime)|false|none|The revocation date of certificate (if revoked).|
|rootType|string|false|none|Root Type|
|serialNumber|string|false|none|Serial number of certificate (if issued or revoked)|
|serialNumberHex|string|false|none|Hexadecmial format for Serial number of certificate(if issued or revoked)|
|slotSize|string|false|none|Number of subject alternative names(SAN) to be included in certificate |
|status|string|true|none|Status of certificate|
|subjectAlternativeNames|[[SubjectAlternativeNameDetails](#schemasubjectalternativenamedetails)]|false|none|Contains subject alternative names set|
|validEnd|string(iso-datetime)|false|none|The end date of the certificate's validity (if issued or revoked).|
|validStart|string(iso-datetime)|false|none|The start date of the certificate's validity (if issued or revoked).|

#### Enumerated Values

|Property|Value|
|---|---|
|productType|DV_SSL|
|productType|DV_WILDCARD_SSL|
|productType|EV_SSL|
|productType|OV_CS|
|productType|OV_DS|
|productType|OV_SSL|
|productType|OV_WILDCARD_SSL|
|productType|UCC_DV_SSL|
|productType|UCC_EV_SSL|
|productType|UCC_OV_SSL|
|rootType|GODADDY_SHA_1|
|rootType|GODADDY_SHA_2|
|rootType|STARFIELD_SHA_1|
|rootType|STARFIELD_SHA_2|
|slotSize|FIVE|
|slotSize|TEN|
|slotSize|FIFTEEN|
|slotSize|TWENTY|
|slotSize|THIRTY|
|slotSize|FOURTY|
|slotSize|FIFTY|
|slotSize|ONE_HUNDRED|
|status|PENDING_ISSUANCE|
|status|ISSUED|
|status|REVOKED|
|status|CANCELED|
|status|DENIED|
|status|PENDING_REVOCATION|
|status|PENDING_REKEY|
|status|UNUSED|
|status|EXPIRED|

<h2 id="tocS_CertificateAction">CertificateAction</h2>
<!-- backwards compatibility -->
<a id="schemacertificateaction"></a>
<a id="schema_CertificateAction"></a>
<a id="tocScertificateaction"></a>
<a id="tocscertificateaction"></a>

```json
{
  "createdAt": "string",
  "type": "CERTIFICATE_ISSUED"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createdAt|string(iso-datetime)|true|none|Date action created|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|CERTIFICATE_ISSUED|
|type|CERTIFICATE_ORDER_CANCELED|
|type|CERTIFICATE_ORDER_CREATED|
|type|CERTIFICATE_REVOKED|
|type|DOMAIN_VALIDATION_COMPLETE|
|type|FRAUD_DETECTED|
|type|ORG_NAME_CHANGE|
|type|ORG_VALIDATION_COMPLETE|
|type|SAN_DROP|

<h2 id="tocS_CertificateAddress">CertificateAddress</h2>
<!-- backwards compatibility -->
<a id="schemacertificateaddress"></a>
<a id="schema_CertificateAddress"></a>
<a id="tocScertificateaddress"></a>
<a id="tocscertificateaddress"></a>

```json
{
  "address1": "string",
  "address2": "string",
  "city": "string",
  "country": "AC",
  "postalCode": "string",
  "state": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|address1|string|true|none|Address line 1 of organization address|
|address2|string|false|none|Address line 2 of organization address|
|city|string|false|none|City/Locality of organization address|
|country|string(iso-country-code)|true|none|Two character country code of organization|
|postalCode|string|false|none|Postal code of organization address|
|state|string|false|none|Full name of State/Province/Territory of organization address|

#### Enumerated Values

|Property|Value|
|---|---|
|country|AC|
|country|AD|
|country|AE|
|country|AF|
|country|AG|
|country|AI|
|country|AL|
|country|AM|
|country|AN|
|country|AO|
|country|AQ|
|country|AR|
|country|AS|
|country|AT|
|country|AU|
|country|AW|
|country|AZ|
|country|BA|
|country|BB|
|country|BD|
|country|BE|
|country|BF|
|country|BG|
|country|BH|
|country|BI|
|country|BJ|
|country|BM|
|country|BN|
|country|BO|
|country|BR|
|country|BS|
|country|BT|
|country|BV|
|country|BW|
|country|BY|
|country|BZ|
|country|CA|
|country|CC|
|country|CD|
|country|CF|
|country|CG|
|country|CH|
|country|CI|
|country|CK|
|country|CL|
|country|CM|
|country|CN|
|country|CO|
|country|CR|
|country|CV|
|country|CX|
|country|CY|
|country|CZ|
|country|DE|
|country|DJ|
|country|DK|
|country|DM|
|country|DO|
|country|DZ|
|country|EC|
|country|EE|
|country|EG|
|country|EH|
|country|ER|
|country|ES|
|country|ET|
|country|FI|
|country|FJ|
|country|FK|
|country|FM|
|country|FO|
|country|FR|
|country|GA|
|country|GB|
|country|GD|
|country|GE|
|country|GF|
|country|GG|
|country|GH|
|country|GI|
|country|GL|
|country|GM|
|country|GN|
|country|GP|
|country|GQ|
|country|GR|
|country|GS|
|country|GT|
|country|GU|
|country|GW|
|country|GY|
|country|HK|
|country|HM|
|country|HN|
|country|HR|
|country|HT|
|country|HU|
|country|ID|
|country|IE|
|country|IL|
|country|IM|
|country|IN|
|country|IO|
|country|IQ|
|country|IS|
|country|IT|
|country|JE|
|country|JM|
|country|JO|
|country|JP|
|country|KE|
|country|KG|
|country|KH|
|country|KI|
|country|KM|
|country|KN|
|country|KR|
|country|KW|
|country|KY|
|country|KZ|
|country|LA|
|country|LB|
|country|LC|
|country|LI|
|country|LK|
|country|LR|
|country|LS|
|country|LT|
|country|LU|
|country|LV|
|country|LY|
|country|MA|
|country|MC|
|country|MD|
|country|ME|
|country|MG|
|country|MH|
|country|ML|
|country|MM|
|country|MN|
|country|MO|
|country|MP|
|country|MQ|
|country|MR|
|country|MS|
|country|MT|
|country|MU|
|country|MV|
|country|MW|
|country|MX|
|country|MY|
|country|MZ|
|country|NA|
|country|NC|
|country|NE|
|country|NF|
|country|NG|
|country|NI|
|country|NL|
|country|NO|
|country|NP|
|country|NR|
|country|NU|
|country|NZ|
|country|OM|
|country|PA|
|country|PE|
|country|PF|
|country|PG|
|country|PH|
|country|PK|
|country|PL|
|country|PM|
|country|PN|
|country|PR|
|country|PS|
|country|PT|
|country|PW|
|country|PY|
|country|QA|
|country|RE|
|country|RO|
|country|RS|
|country|RU|
|country|RW|
|country|SA|
|country|SB|
|country|SC|
|country|SE|
|country|SG|
|country|SH|
|country|SI|
|country|SJ|
|country|SK|
|country|SL|
|country|SM|
|country|SN|
|country|SO|
|country|SR|
|country|ST|
|country|SV|
|country|SZ|
|country|TC|
|country|TD|
|country|TF|
|country|TG|
|country|TH|
|country|TJ|
|country|TK|
|country|TL|
|country|TM|
|country|TN|
|country|TO|
|country|TP|
|country|TR|
|country|TT|
|country|TV|
|country|TW|
|country|TZ|
|country|UA|
|country|UG|
|country|UM|
|country|US|
|country|UY|
|country|UZ|
|country|VA|
|country|VC|
|country|VE|
|country|VG|
|country|VI|
|country|VN|
|country|VU|
|country|WF|
|country|WS|
|country|YE|
|country|YT|
|country|YU|
|country|ZA|
|country|ZM|
|country|ZW|

<h2 id="tocS_CertificateBundle">CertificateBundle</h2>
<!-- backwards compatibility -->
<a id="schemacertificatebundle"></a>
<a id="schema_CertificateBundle"></a>
<a id="tocScertificatebundle"></a>
<a id="tocscertificatebundle"></a>

```json
{
  "pems": {
    "certificate": "string",
    "cross": "string",
    "intermediate": "string",
    "root": "string"
  },
  "serialNumber": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|pems|[PEMCertificates](#schemapemcertificates)|true|none|none|
|serialNumber|string|true|none|Serial number of certificate requested|

<h2 id="tocS_CertificateCallback">CertificateCallback</h2>
<!-- backwards compatibility -->
<a id="schemacertificatecallback"></a>
<a id="schema_CertificateCallback"></a>
<a id="tocScertificatecallback"></a>
<a id="tocscertificatecallback"></a>

```json
{
  "callbackUrl": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|callbackUrl|string|true|none|Callback url registered to receive stateful actions|

<h2 id="tocS_CertificateContact">CertificateContact</h2>
<!-- backwards compatibility -->
<a id="schemacertificatecontact"></a>
<a id="schema_CertificateContact"></a>
<a id="tocScertificatecontact"></a>
<a id="tocscertificatecontact"></a>

```json
{
  "email": "string",
  "jobTitle": "string",
  "nameFirst": "string",
  "nameLast": "string",
  "nameMiddle": "string",
  "phone": "string",
  "suffix": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|email|string|true|none|Email address of requestor contact|
|jobTitle|string|false|none|Only used for EVSSL. Job title of requestor contact|
|nameFirst|string|true|none|First name of requestor contact|
|nameLast|string|true|none|Last name of requestor contact|
|nameMiddle|string|false|none|Middle initial of requestor contact|
|phone|string|true|none|Phone number for requestor contact|
|suffix|string|false|none|Suffix of requestor contact|

<h2 id="tocS_CertificateCreate">CertificateCreate</h2>
<!-- backwards compatibility -->
<a id="schemacertificatecreate"></a>
<a id="schema_CertificateCreate"></a>
<a id="tocScertificatecreate"></a>
<a id="tocscertificatecreate"></a>

```json
{
  "callbackUrl": "string",
  "commonName": "string",
  "contact": {
    "email": "string",
    "jobTitle": "string",
    "nameFirst": "string",
    "nameLast": "string",
    "nameMiddle": "string",
    "phone": "string",
    "suffix": "string"
  },
  "csr": "string",
  "intelVPro": false,
  "organization": {
    "address": {
      "address1": "string",
      "address2": "string",
      "city": "string",
      "country": "AC",
      "postalCode": "string",
      "state": "string"
    },
    "assumedName": "string",
    "name": "string",
    "phone": "string",
    "registrationAgent": "string",
    "registrationNumber": "string"
  },
  "period": 0,
  "productType": "DV_SSL",
  "rootType": "STARFIELD_SHA_2",
  "slotSize": "FIVE",
  "subjectAlternativeNames": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|callbackUrl|string|false|none|Required if client would like to receive stateful actions via callback during certificate lifecyle|
|commonName|string|false|none|Name to be secured in certificate. If provided, CN field in CSR will be ignored.|
|contact|[CertificateContact](#schemacertificatecontact)|true|none|none|
|csr|string|true|none|Certificate Signing Request|
|intelVPro|boolean|false|none|Only used for OV|
|organization|[CertificateOrganizationCreate](#schemacertificateorganizationcreate)|false|none|none|
|period|integer|true|none|Number of years for certificate validity period|
|productType|string|true|none|Type of product requesting a certificate. Only required non-renewal|
|rootType|string|false|none|Root Type. Depending on certificate expiration date, SHA_1 not be allowed. Will default to SHA_2 if expiration date exceeds sha1 allowed date|
|slotSize|string|false|none|Number of subject alternative names(SAN) to be included in certificate |
|subjectAlternativeNames|[string]|false|none|Subject Alternative names. Collection of subjectAlternativeNames to be included in certificate.|

#### Enumerated Values

|Property|Value|
|---|---|
|productType|DV_SSL|
|productType|DV_WILDCARD_SSL|
|productType|EV_SSL|
|productType|OV_CS|
|productType|OV_DS|
|productType|OV_SSL|
|productType|OV_WILDCARD_SSL|
|productType|UCC_DV_SSL|
|productType|UCC_EV_SSL|
|productType|UCC_OV_SSL|
|rootType|GODADDY_SHA_1|
|rootType|GODADDY_SHA_2|
|rootType|STARFIELD_SHA_1|
|rootType|STARFIELD_SHA_2|
|slotSize|FIVE|
|slotSize|TEN|
|slotSize|FIFTEEN|
|slotSize|TWENTY|
|slotSize|THIRTY|
|slotSize|FOURTY|
|slotSize|FIFTY|
|slotSize|ONE_HUNDRED|

<h2 id="tocS_CertificateDetailV2">CertificateDetailV2</h2>
<!-- backwards compatibility -->
<a id="schemacertificatedetailv2"></a>
<a id="schema_CertificateDetailV2"></a>
<a id="tocScertificatedetailv2"></a>
<a id="tocscertificatedetailv2"></a>

```json
{
  "certificateId": "string",
  "commonName": "string",
  "completedAt": "string",
  "contact": {
    "email": "string",
    "jobTitle": "string",
    "nameFirst": "string",
    "nameLast": "string",
    "nameMiddle": "string",
    "phone": "string",
    "suffix": "string"
  },
  "createdAt": "string",
  "csr": "string",
  "deniedReason": "string",
  "organization": {
    "address": {
      "address1": "string",
      "address2": "string",
      "city": "string",
      "country": "AC",
      "postalCode": "string",
      "state": "string"
    },
    "assumedName": "string",
    "jurisdictionOfIncorporation": {
      "city": "string",
      "country": "string",
      "county": "string",
      "state": "string"
    },
    "name": "string",
    "phone": "string",
    "registrationAgent": "string",
    "registrationNumber": "string"
  },
  "period": 0,
  "progress": 0,
  "renewalAvailable": true,
  "revokedAt": "string",
  "rootType": "GODADDY_SHA_1",
  "serialNumber": "string",
  "serialNumberHex": "string",
  "slotSize": "FIVE",
  "status": "PENDING_ISSUANCE",
  "subjectAlternativeNames": [
    "string"
  ],
  "type": "DV_SSL",
  "validEndAt": "string",
  "validStartAt": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|certificateId|string|true|none|The unique identifier of the certificate request. Only present if no errors returned|
|commonName|string(domain)|true|none|Common name of certificate|
|completedAt|string(iso-datetime)|false|none|The date the certificate request completed processing.|
|contact|[CertificateContact](#schemacertificatecontact)|true|none|none|
|createdAt|string(iso-datetime)|true|none|The date the certificate was ordered.|
|csr|string|false|none|Certificate signing request (if present) in PEM format|
|deniedReason|string|false|none|Only present if certificate order has been denied|
|organization|[CertificateOrganization](#schemacertificateorganization)|false|none|none|
|period|integer|true|none|Validity period of order. Specified in years|
|progress|integer|false|none|Percentage of completion for certificate vetting|
|renewalAvailable|boolean|false|none|Only returned when a renewal is available.|
|revokedAt|string(iso-datetime)|false|none|The revocation date of certificate (if revoked).|
|rootType|string|false|none|Root type: <br>  * `GODADDY_SHA_1` - GoDaddy (Secure Hash Algorithm 1) SHA-1 root type<br>  * `GODADDY_SHA_2` - GoDaddy (Secure Hash Algorithm 2) SHA-2 root type<br>  * `STARFIELD_SHA_1` - Starfield SHA-1 root type<br>  * `STARFIELD_SHA_2` - Starfield SHA-2 root type<br>|
|serialNumber|string|false|none|Serial number of certificate (if issued or revoked)|
|serialNumberHex|string|false|none|Hexadecmial format for Serial number of certificate(if issued or revoked)|
|slotSize|string|false|none|Number of subject alternative names (SAN) to be included in certificate (if UCC): <br>  * `FIVE` - Five slot UCC request<br>  * `TEN` - Ten slot UCC request<br>  * `FIFTEEN` - Fifteen slot UCC request<br>  * `TWENTY` - Twenty slot UCC request<br>  * `THIRTY` - Thirty slot UCC request<br>  * `FOURTY` - Fourty slot UCC request<br>  * `FIFTY` - Fifty slot UCC request<br>  * `ONE_HUNDRED` - One hundred slot UCC request<br>|
|status|string|true|none|Certificate status (if issued or revoked): <br>  * `CANCELED` - Certificate request was canceled by customer<br>  * `DENIED` - Certificate request was denied by customer\n  * `EXPIRED` - Issued certificate has exceeded the valid end date<br>  * `ISSUED` - Certificate has been issued and is within validity period<br>  * `PENDING_ISSUANCE` - Certificate request has completed domain verification and is in the process of being issued<br>  * `PENDING_REKEY` - Previously issued certificate was rekeyed by customer and is in the process of being reissued<br>  * `PENDING_REVOCATION` - Previously issued certificate is in the process of being revoked<br>  * `REVOKED` - Issued certificate has been revoked\n  * `UNUSED` - Certificate in an error state<br>|
|subjectAlternativeNames|[string(domain)]|false|none|Subject Alternative names. Collection of subjectAlternativeNames to be included in certificate.|
|type|string|true|none|Certificate type: <br>  * `DV_SSL` - (Domain Validated Secure Sockets Layer) SSL certificate validated using domain name only<br>  * `DV_WILDCARD_SSL` - SSL certificate containing subdomains which is validated using domain name only<br>  * `EV_SSL` - (Extended Validation) SSL certificate validated using organization information, domain name, business legal status, and other factors<br>  * `OV_CODE_SIGNING` - Code signing SSL certificate used by software developers to digitally sign apps. Validated using organization information<br>  * `OV_DRIVER_SIGNING` - Driver signing SSL certificate request used by software developers to digitally sign secure code for Windows hardware drivers. Validated using organization information<br>  * `OV_SSL` - SSL certificate validated using organization information and domain name<br>  * `OV_WILDCARD_SSL` - SSL certificate containing subdomains which is validated using organization information and domain name<br>  * `UCC_DV_SSL` - (Unified Communication Certificate) Multi domain SSL certificate validated using domain name only<br>  * `UCC_EV_SSL` - Multi domain SSL certificate validated using organization information, domain name, business legal status, and other factors<br>  * `UCC_OV_SSL` - Multi domain SSL certificate validated using organization information and domain name<br>|
|validEndAt|string(iso-datetime)|false|none|The end date of the certificate's validity (if issued or revoked).|
|validStartAt|string(iso-datetime)|false|none|The start date of the certificate's validity (if issued or revoked).|

#### Enumerated Values

|Property|Value|
|---|---|
|rootType|GODADDY_SHA_1|
|rootType|GODADDY_SHA_2|
|rootType|STARFIELD_SHA_1|
|rootType|STARFIELD_SHA_2|
|slotSize|FIVE|
|slotSize|TEN|
|slotSize|FIFTEEN|
|slotSize|TWENTY|
|slotSize|THIRTY|
|slotSize|FOURTY|
|slotSize|FIFTY|
|slotSize|ONE_HUNDRED|
|status|PENDING_ISSUANCE|
|status|ISSUED|
|status|REVOKED|
|status|CANCELED|
|status|DENIED|
|status|PENDING_REVOCATION|
|status|PENDING_REKEY|
|status|UNUSED|
|status|EXPIRED|
|type|DV_SSL|
|type|DV_WILDCARD_SSL|
|type|EV_SSL|
|type|OV_CODE_SIGNING|
|type|OV_DRIVER_SIGNING|
|type|OV_SSL|
|type|OV_WILDCARD_SSL|
|type|UCC_DV_SSL|
|type|UCC_EV_SSL|
|type|UCC_OV_SSL|

<h2 id="tocS_CertificateEmailHistory">CertificateEmailHistory</h2>
<!-- backwards compatibility -->
<a id="schemacertificateemailhistory"></a>
<a id="schema_CertificateEmailHistory"></a>
<a id="tocScertificateemailhistory"></a>
<a id="tocscertificateemailhistory"></a>

```json
{
  "accountId": 0,
  "body": "string",
  "dateEntered": "string",
  "fromType": "string",
  "id": 0,
  "recipients": "string",
  "subject": "string",
  "templateType": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountId|integer|true|none|Shopper Id requested certificate|
|body|string|true|none|Email message|
|dateEntered|string(iso-datetime)|true|none|Date email sent|
|fromType|string|true|none|Email from address|
|id|integer|true|none|Email Id|
|recipients|string|true|none|Email address email was sent|
|subject|string|true|none|Email subject|
|templateType|string|true|none|Email template type name|

<h2 id="tocS_CertificateIdentifier">CertificateIdentifier</h2>
<!-- backwards compatibility -->
<a id="schemacertificateidentifier"></a>
<a id="schema_CertificateIdentifier"></a>
<a id="tocScertificateidentifier"></a>
<a id="tocscertificateidentifier"></a>

```json
{
  "certificateId": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|certificateId|string|true|none|The unique identifier of the certificate request. Only present if verified.|

<h2 id="tocS_CertificateOrganization">CertificateOrganization</h2>
<!-- backwards compatibility -->
<a id="schemacertificateorganization"></a>
<a id="schema_CertificateOrganization"></a>
<a id="tocScertificateorganization"></a>
<a id="tocscertificateorganization"></a>

```json
{
  "address": {
    "address1": "string",
    "address2": "string",
    "city": "string",
    "country": "AC",
    "postalCode": "string",
    "state": "string"
  },
  "assumedName": "string",
  "jurisdictionOfIncorporation": {
    "city": "string",
    "country": "string",
    "county": "string",
    "state": "string"
  },
  "name": "string",
  "phone": "string",
  "registrationAgent": "string",
  "registrationNumber": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|address|[CertificateAddress](#schemacertificateaddress)|true|none|none|
|assumedName|string|false|none|Only for EVSSL. The DBA(does business as) name for the organization.|
|jurisdictionOfIncorporation|[JurisdictionOfIncorporation](#schemajurisdictionofincorporation)|false|none|none|
|name|string|true|none|Name of organization that owns common name|
|phone|string|true|none|Phone number for organization|
|registrationAgent|string|false|none|Only for EVSSL.|
|registrationNumber|string|false|none|Only for EVSSL.|

<h2 id="tocS_CertificateOrganizationCreate">CertificateOrganizationCreate</h2>
<!-- backwards compatibility -->
<a id="schemacertificateorganizationcreate"></a>
<a id="schema_CertificateOrganizationCreate"></a>
<a id="tocScertificateorganizationcreate"></a>
<a id="tocscertificateorganizationcreate"></a>

```json
{
  "address": {
    "address1": "string",
    "address2": "string",
    "city": "string",
    "country": "AC",
    "postalCode": "string",
    "state": "string"
  },
  "assumedName": "string",
  "name": "string",
  "phone": "string",
  "registrationAgent": "string",
  "registrationNumber": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|address|[CertificateAddress](#schemacertificateaddress)|false|none|none|
|assumedName|string|false|none|Only for EVSSL. The DBA(does business as) name for the organization.|
|name|string|true|none|Name of organization that owns common name|
|phone|string|true|none|Phone number for organization|
|registrationAgent|string|false|none|Only for EVSSL.|
|registrationNumber|string|false|none|Only for EVSSL.|

<h2 id="tocS_CertificateReissue">CertificateReissue</h2>
<!-- backwards compatibility -->
<a id="schemacertificatereissue"></a>
<a id="schema_CertificateReissue"></a>
<a id="tocScertificatereissue"></a>
<a id="tocscertificatereissue"></a>

```json
{
  "callbackUrl": "string",
  "commonName": "Existing common name",
  "csr": "Existing CSR",
  "delayExistingRevoke": 72,
  "forceDomainRevetting": [
    "string"
  ],
  "rootType": "GODADDY_SHA_1",
  "subjectAlternativeNames": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|callbackUrl|string|false|none|Required if client would like to receive stateful action via callback during certificate lifecyle|
|commonName|string|false|none|The common name of certificate to be secured|
|csr|string|false|none|Certificate Signing Request.|
|delayExistingRevoke|integer|false|none|In hours, time to delay revoking existing certificate after issuance of new certificate. If revokeExistingCertOnIssuance is enabled, this value will be ignored|
|forceDomainRevetting|[string]|false|none|Optional field. Domain verification will be required for each domain listed here. Specify a value of * to indicate that all domains associated with the request should have their domain information reverified.|
|rootType|string|false|none|Root Type. Depending on certificate expiration date, SHA_1 not be allowed. Will default to SHA_2 if expiration date exceeds sha1 allowed date|
|subjectAlternativeNames|[string]|false|none|Only used for UCC products. An array of subject alternative names to include in certificate.|

#### Enumerated Values

|Property|Value|
|---|---|
|rootType|GODADDY_SHA_1|
|rootType|GODADDY_SHA_2|
|rootType|STARFIELD_SHA_1|
|rootType|STARFIELD_SHA_2|

<h2 id="tocS_CertificateRenew">CertificateRenew</h2>
<!-- backwards compatibility -->
<a id="schemacertificaterenew"></a>
<a id="schema_CertificateRenew"></a>
<a id="tocScertificaterenew"></a>
<a id="tocscertificaterenew"></a>

```json
{
  "callbackUrl": "string",
  "commonName": "Existing common name",
  "csr": "Existing CSR",
  "period": 0,
  "rootType": "GODADDY_SHA_1",
  "subjectAlternativeNames": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|callbackUrl|string|false|none|Required if client would like to receive stateful actions via callback during certificate lifecyle|
|commonName|string|false|none|The common name of certificate to be secured|
|csr|string|false|none|Certificate Signing Request.|
|period|integer|false|none|Number of years for certificate validity period, if different from previous certificate|
|rootType|string|false|none|Root Type. Depending on certificate expiration date, SHA_1 not be allowed. Will default to SHA_2 if expiration date exceeds sha1 allowed date|
|subjectAlternativeNames|[string]|false|none|Only used for UCC products. An array of subject alternative names to include in certificate. Not including a subject alternative name that was in the previous certificate will remove it from the renewed certificate.|

#### Enumerated Values

|Property|Value|
|---|---|
|rootType|GODADDY_SHA_1|
|rootType|GODADDY_SHA_2|
|rootType|STARFIELD_SHA_1|
|rootType|STARFIELD_SHA_2|

<h2 id="tocS_CertificateRevoke">CertificateRevoke</h2>
<!-- backwards compatibility -->
<a id="schemacertificaterevoke"></a>
<a id="schema_CertificateRevoke"></a>
<a id="tocScertificaterevoke"></a>
<a id="tocscertificaterevoke"></a>

```json
{
  "reason": "AFFILIATION_CHANGED"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|reason|string|true|none|Reason for revocation|

#### Enumerated Values

|Property|Value|
|---|---|
|reason|AFFILIATION_CHANGED|
|reason|CESSATION_OF_OPERATION|
|reason|KEY_COMPROMISE|
|reason|PRIVILEGE_WITHDRAWN|
|reason|SUPERSEDED|

<h2 id="tocS_CertificateSiteSeal">CertificateSiteSeal</h2>
<!-- backwards compatibility -->
<a id="schemacertificatesiteseal"></a>
<a id="schema_CertificateSiteSeal"></a>
<a id="tocScertificatesiteseal"></a>
<a id="tocscertificatesiteseal"></a>

```json
{
  "html": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|html|string|true|none|Certificate Seal HTML|

<h2 id="tocS_CertificateSummariesV2">CertificateSummariesV2</h2>
<!-- backwards compatibility -->
<a id="schemacertificatesummariesv2"></a>
<a id="schema_CertificateSummariesV2"></a>
<a id="tocScertificatesummariesv2"></a>
<a id="tocscertificatesummariesv2"></a>

```json
{
  "certificates": [
    {
      "certificateId": "string",
      "commonName": "string",
      "completedAt": "string",
      "createdAt": "string",
      "period": 0,
      "renewalAvailable": true,
      "revokedAt": "string",
      "serialNumber": "string",
      "slotSize": "FIVE",
      "status": "ISSUED",
      "subjectAlternativeNames": [
        "string"
      ],
      "type": "DV_SSL",
      "validEndAt": "string",
      "validStartAt": "string"
    }
  ],
  "pagination": {
    "first": "string",
    "last": "string",
    "next": "string",
    "previous": "string",
    "total": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|certificates|[[CertificateSummaryV2](#schemacertificatesummaryv2)]|true|none|List of certificates for a specified customer.|
|pagination|[Pagination](#schemapagination)|true|none|none|

<h2 id="tocS_CertificateSummaryV2">CertificateSummaryV2</h2>
<!-- backwards compatibility -->
<a id="schemacertificatesummaryv2"></a>
<a id="schema_CertificateSummaryV2"></a>
<a id="tocScertificatesummaryv2"></a>
<a id="tocscertificatesummaryv2"></a>

```json
{
  "certificateId": "string",
  "commonName": "string",
  "completedAt": "string",
  "createdAt": "string",
  "period": 0,
  "renewalAvailable": true,
  "revokedAt": "string",
  "serialNumber": "string",
  "slotSize": "FIVE",
  "status": "ISSUED",
  "subjectAlternativeNames": [
    "string"
  ],
  "type": "DV_SSL",
  "validEndAt": "string",
  "validStartAt": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|certificateId|string|true|none|The unique identifier of the certificate request.|
|commonName|string(domain)|true|none|Common name for the certificate request.|
|completedAt|string(iso-datetime)|false|none|The date the certificate request completed processing (if issued or revoked).|
|createdAt|string(iso-datetime)|true|none|Date that the certificate request was received.|
|period|integer|true|none|Validity period of order. Specified in years.|
|renewalAvailable|boolean|false|none|Only returned when a renewal is available.|
|revokedAt|string(iso-datetime)|false|none|The revocation date of certificate (if revoked).|
|serialNumber|string|false|none|Serial number of certificate (if issued or revoked).|
|slotSize|string|false|none|Number of subject alternative names (SAN) to be included in certificate (if UCC): <br>  * `FIVE` - Five slot UCC request<br>  * `TEN` - Ten slot UCC request<br>  * `FIFTEEN` - Fifteen slot UCC request<br>  * `TWENTY` - Twenty slot UCC request<br>  * `THIRTY` - Thirty slot UCC request<br>  * `FOURTY` - Fourty slot UCC request<br>  * `FIFTY` - Fifty slot UCC request<br>  * `ONE_HUNDRED` - One hundred slot UCC request<br>|
|status|string|true|none|Certificate status (if issued or revoked): <br>  * `CANCELED` - Certificate request was canceled by customer<br>  * `DENIED` - Certificate request was denied by customer<br>  * `EXPIRED` - Issued certificate has exceeded the valid end date<br>  * `ISSUED` - Certificate has been issued and is within validity period<br>  * `PENDING_ISSUANCE` - Certificate request has completed domain verification and is in the process of being issued<br>  * `PENDING_REKEY` - Previously issued certificate was rekeyed by customer and is in the process of being reissued<br>  * `PENDING_REVOCATION` - Previously issued certificate is in the process of being revoked<br>  * `REVOKED` - Issued certificate has been revoked<br>  * `UNUSED` - Certificate in an error state<br>|
|subjectAlternativeNames|[string]|false|none|Subject Alternative names (if UCC). Collection of subjectAlternativeNames to be included in certificate.|
|type|string|true|none|Certificate type: <br>  * `DV_SSL` - (Domain Validated Secure Sockets Layer) SSL certificate validated using domain name only<br>  * `DV_WILDCARD_SSL` - SSL certificate containing subdomains which is validated using domain name only<br>  * `EV_SSL` - (Extended Validation) SSL certificate validated using organization information, domain name, business legal status, and other factors<br>  * `OV_CODE_SIGNING` - Code signing SSL certificate used by software developers to digitally sign apps. Validated using organization information<br>  * `OV_DRIVER_SIGNING` - Driver signing SSL certificate request used by software developers to digitally sign secure code for Windows hardware drivers. Validated using organization information<br>  * `OV_SSL` - SSL certificate validated using organization information and domain name<br>  * `OV_WILDCARD_SSL` - SSL certificate containing subdomains which is validated using organization information and domain name<br>  * `UCC_DV_SSL` - (Unified Communication Certificate) Multi domain SSL certificate validated using domain name only<br>  * `UCC_EV_SSL` - Multi domain SSL certificate validated using organization information, domain name, business legal status, and other factors<br>  * `UCC_OV_SSL` - Multi domain SSL certificate validated using organization information and domain name<br>|
|validEndAt|string(iso-datetime)|false|none|The end date of the certificate's validity (if issued or revoked).|
|validStartAt|string(iso-datetime)|false|none|The start date of the certificate's validity (if issued or revoked).|

#### Enumerated Values

|Property|Value|
|---|---|
|slotSize|FIVE|
|slotSize|TEN|
|slotSize|FIFTEEN|
|slotSize|TWENTY|
|slotSize|THIRTY|
|slotSize|FOURTY|
|slotSize|FIFTY|
|slotSize|ONE_HUNDRED|
|status|ISSUED|
|status|CANCELED|
|status|DENIED|
|status|EXPIRED|
|status|PENDING_ISSUANCE|
|status|PENDING_REKEY|
|status|PENDING_REVOCATION|
|status|REVOKED|
|status|UNUSED|
|type|DV_SSL|
|type|DV_WILDCARD_SSL|
|type|EV_SSL|
|type|OV_CODE_SIGNING|
|type|OV_DRIVER_SIGNING|
|type|OV_SSL|
|type|OV_WILDCARD_SSL|
|type|UCC_DV_SSL|
|type|UCC_EV_SSL|
|type|UCC_OV_SSL|

<h2 id="tocS_DomainVerificationDetail">DomainVerificationDetail</h2>
<!-- backwards compatibility -->
<a id="schemadomainverificationdetail"></a>
<a id="schema_DomainVerificationDetail"></a>
<a id="tocSdomainverificationdetail"></a>
<a id="tocsdomainverificationdetail"></a>

```json
{
  "createdAt": "string",
  "dceToken": "string",
  "domain": "string",
  "domainEntityId": 0,
  "modifiedAt": "string",
  "status": "COMPLETED",
  "type": "DOMAIN_CONTROL_EMAIL",
  "usage": "COMMON_NAME",
  "certificateAuthorityAuthorization": {
    "completedAt": "string",
    "queryPaths": [
      "string"
    ],
    "recommendations": [
      "ADD_CA_TO_CAA"
    ],
    "status": "PENDING"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createdAt|string(iso-datetime)|true|none|Timestamp indicating when the domain verification process was started|
|dceToken|string|false|none|DCE verification type token (if DCE verification type).|
|domain|string(domain)|true|none|Domain name|
|domainEntityId|integer|true|none|A unique identifier that can be leveraged for retrieving domain verification related information. Primarily used when troubleshooting a request|
|modifiedAt|string(iso-datetime)|true|none|Timestamp indicating when the domain verification process was last updated|
|status|string|true|none|Domain verification status: <br>  * `AWAITING` - Verification pending customer input<br>  * `INVALID` - SAN connected to a cancelled request<br>  * `COMPLETED` - Verification completed<br>  * `FAILED_VERIFICATION` - Verification failed<br>  * `PENDING_POSSIBLE_FRAUD` - Flagged for a system level fraud review<br>  * `VERIFIED_POSSIBLE_FRAUD` - Fraud detection reviewed but verified<br>  * `DROPPED` - SAN dropped from request<br>  * `REVOKED_CERT` - Certificate revoked<br>  * `DROPPED_GOOGLE_SAFE_BROWSING` - SAN dropped from request due to Google Safe Browsing check<br>  * `DROPPED_CERTIFICATE_AUTHORITY_AUTHORIZATION` - SAN dropped from request due to Certificate Authorization Authority DNS record check<br>|
|type|string|true|none|Domain verification type: <br>  * `AUTO_GENERATED_DOMAIN_ACCESS_EMAIL_ADMIN` - Domain verified using domain control verification email sent to admin@<your.domain.com><br>  * `AUTO_GENERATED_DOMAIN_ACCESS_EMAIL_ADMINSTRATOR` - Domain verified using domain control verification email sent to administrator@<your.domain.com><br>  * `AUTO_GENERATED_DOMAIN_ACCESS_EMAIL_HOST_MASTER` - Domain verified using domain control verification email sent to hostmaster@<your.domain.com><br>  * `AUTO_GENERATED_DOMAIN_ACCESS_EMAIL_POST_MASTER` - Domain verified using domain control verification email sent to postmaster@<your.domain.com><br>  * `AUTO_GENERATED_DOMAIN_ACCESS_EMAIL_WEB_MASTER` - Domain verified using domain control verification email sent to webmaster@<your.domain.com><br>  * `DOMAIN_ACCESS_EMAIL` - Domain verified using a domain access email<br>  * `DOMAIN_ACCESS_LETTER` - Customer completed a domain access letter which was used for domain verification<br>  * `DOMAIN_CONTROL_EMAIL` - Domain verified using HTML file or DNS zone file text value<br>  * `DOMAIN_ZONE_CONTROL` - DNS zone file containing a pre-generated text value used for domain verification<br>  * `MANUAL_DOMAIN_ACCESS_EMAIL` - DAE sent to an email address manually entered by a rep<br>  * `PREVIOUS_DOMAIN_ACCESS_EMAIL` - Customers domain access email for a prior certificate request was used for domain verification<br>  * `REGISTRATION_AUTHORITY_DOMAIN_ACCESS_LETTER` - Representative reviewed a customer provided domain access letter and verified domain<br>  * `REGISTRATION_AUTHORITY_DOMAIN_ZONE_CONTROL` - Representative verified domain using a manual domain zone control check<br>  * `REGISTRATION_AUTHORITY_OVERRIDE` - Representative verified domain using alternative methods<br>  * `REGISTRATION_AUTHORITY_WEBSITE_CONTROL` - Representative verified domain using a manual website control check<br>  * `CUSTOMER_OWNED` - Validated customer account information used for domain control verification<br>  * `WEBSITE_CONTROL` - HTML file in root website directory containing pre-generated value used for domain control verification<br>|
|usage|string|true|none|Type of domain name used for domain verification|
|certificateAuthorityAuthorization|object|false|none|Contains information about the last Certificate Authority Authorization (CAA) Lookup details for the specified domain.<br><br>In order for a domain to be eligible to be included in the certificate, the entire domain hierarchy must be scanned for DNS CAA records, as outlined by RFC 6844.<br><br>The absence of any CAA records found in the domain hierarchy indicates that the domain may be included in the certificate. Alternatively, if CAA records are found when scanning the domain hierarchy, the domain may be included in the certificate as long as `godaddy.com` or `starfieldtech.com` is found in the DNS record value. However, if CAA records are found, yet `godaddy.com` or `starfieldtech.com` is not found in any CAA record's value, then we must drop the domain from the certificate request.<br><br>In the case where there are repeated DNS errors when scanning the domain hierarchy for CAA records, thus ending in an unsuccessful scan, then the domain can still be included in the certificate provided the primary domain is not setup with DNSSEC. Conversely, if DNSSEC is found to be setup on the primary domain when scanning following repeated CAA failures, the domain must be dropped from the certificate request. Finally, if DNS errors persist to the point where a successful DNSSEC query could not be obtained, then the domain must be dropped from the certificate request.<br>|

#### Enumerated Values

|Property|Value|
|---|---|
|status|COMPLETED|
|status|FAILED_VERIFICATION|
|status|VERIFIED_POSSIBLE_FRAUD|
|status|DROPPED|
|status|DROPPED_CERTIFICATE_AUTHORITY_AUTHORIZATION|
|status|DROPPED_GOOGLE_SAFE_BROWSING|
|status|INVALID|
|status|AWAITING|
|status|PENDING_POSSIBLE_FRAUD|
|status|REVOKED_CERTIFICATE|
|type|DOMAIN_CONTROL_EMAIL|
|type|AUTO_GENERATED_DOMAIN_ACCESS_EMAIL_ADMIN|
|type|AUTO_GENERATED_DOMAIN_ACCESS_EMAIL_ADMINSTRATOR|
|type|AUTO_GENERATED_DOMAIN_ACCESS_EMAIL_HOST_MASTER|
|type|AUTO_GENERATED_DOMAIN_ACCESS_EMAIL_POST_MASTER|
|type|AUTO_GENERATED_DOMAIN_ACCESS_EMAIL_WEB_MASTER|
|type|DOMAIN_ACCESS_EMAIL|
|type|DOMAIN_ACCESS_LETTER|
|type|DOMAIN_ZONE_CONTROL|
|type|MANUAL_DOMAIN_ACCESS_EMAIL|
|type|PREVIOUS_DOMAIN_ACCESS_EMAIL|
|type|REGISTRATION_AUTHORITY_DOMAIN_ACCESS_LETTER|
|type|REGISTRATION_AUTHORITY_DOMAIN_ZONE_CONTROL|
|type|REGISTRATION_AUTHORITY_OVERRIDE|
|type|REGISTRATION_AUTHORITY_WEBSITE_CONTROL|
|type|CUSTOMER_OWNED|
|type|WEBSITE_CONTROL|
|usage|COMMON_NAME|
|usage|SUBJECT_ALTERNATIVE_NAME|

<h2 id="tocS_DomainVerificationSummary">DomainVerificationSummary</h2>
<!-- backwards compatibility -->
<a id="schemadomainverificationsummary"></a>
<a id="schema_DomainVerificationSummary"></a>
<a id="tocSdomainverificationsummary"></a>
<a id="tocsdomainverificationsummary"></a>

```json
{
  "createdAt": "string",
  "dceToken": "string",
  "domain": "string",
  "domainEntityId": 0,
  "modifiedAt": "string",
  "status": "COMPLETED",
  "type": "DOMAIN_CONTROL_EMAIL",
  "usage": "COMMON_NAME"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createdAt|string(iso-datetime)|true|none|Timestamp indicating when the domain verification process was started|
|dceToken|string|false|none|DCE verification type token (if DCE verification type).|
|domain|string(domain)|true|none|Domain name|
|domainEntityId|integer|true|none|A unique identifier that can be leveraged for retrieving domain verification related information. Primarily used when troubleshooting a request|
|modifiedAt|string(iso-datetime)|true|none|Timestamp indicating when the domain verification process was last updated|
|status|string|true|none|Domain verification status: <br>  * `AWAITING` - Verification pending customer input<br>  * `INVALID` - SAN connected to a cancelled request<br>  * `COMPLETED` - Verification completed<br>  * `FAILED_VERIFICATION` - Verification failed<br>  * `PENDING_POSSIBLE_FRAUD` - Flagged for a system level fraud review<br>  * `VERIFIED_POSSIBLE_FRAUD` - Fraud detection reviewed but verified<br>  * `DROPPED` - SAN dropped from request<br>  * `REVOKED_CERT` - Certificate revoked<br>  * `DROPPED_GOOGLE_SAFE_BROWSING` - SAN dropped from request due to Google Safe Browsing check<br>  * `DROPPED_CERTIFICATE_AUTHORITY_AUTHORIZATION` - SAN dropped from request due to Certificate Authorization Authority DNS record check<br>|
|type|string|true|none|Domain verification type: <br>  * `AUTO_GENERATED_DOMAIN_ACCESS_EMAIL_ADMIN` - Domain verified using domain control verification email sent to admin@<your.domain.com><br>  * `AUTO_GENERATED_DOMAIN_ACCESS_EMAIL_ADMINSTRATOR` - Domain verified using domain control verification email sent to administrator@<your.domain.com><br>  * `AUTO_GENERATED_DOMAIN_ACCESS_EMAIL_HOST_MASTER` - Domain verified using domain control verification email sent to hostmaster@<your.domain.com><br>  * `AUTO_GENERATED_DOMAIN_ACCESS_EMAIL_POST_MASTER` - Domain verified using domain control verification email sent to postmaster@<your.domain.com><br>  * `AUTO_GENERATED_DOMAIN_ACCESS_EMAIL_WEB_MASTER` - Domain verified using domain control verification email sent to webmaster@<your.domain.com><br>  * `DOMAIN_ACCESS_EMAIL` - Domain verified using a domain access email<br>  * `DOMAIN_ACCESS_LETTER` - Customer completed a domain access letter which was used for domain verification<br>  * `DOMAIN_CONTROL_EMAIL` - Domain verified using HTML file or DNS zone file text value<br>  * `DOMAIN_ZONE_CONTROL` - DNS zone file containing a pre-generated text value used for domain verification<br>  * `MANUAL_DOMAIN_ACCESS_EMAIL` - DAE sent to an email address manually entered by a rep<br>  * `PREVIOUS_DOMAIN_ACCESS_EMAIL` - Customers domain access email for a prior certificate request was used for domain verification<br>  * `REGISTRATION_AUTHORITY_DOMAIN_ACCESS_LETTER` - Representative reviewed a customer provided domain access letter and verified domain<br>  * `REGISTRATION_AUTHORITY_DOMAIN_ZONE_CONTROL` - Representative verified domain using a manual domain zone control check<br>  * `REGISTRATION_AUTHORITY_OVERRIDE` - Representative verified domain using alternative methods<br>  * `REGISTRATION_AUTHORITY_WEBSITE_CONTROL` - Representative verified domain using a manual website control check<br>  * `CUSTOMER_OWNED` - Validated customer account information used for domain control verification<br>  * `WEBSITE_CONTROL` - HTML file in root website directory containing pre-generated value used for domain control verification<br>|
|usage|string|true|none|Type of domain name used for domain verification|

#### Enumerated Values

|Property|Value|
|---|---|
|status|COMPLETED|
|status|FAILED_VERIFICATION|
|status|VERIFIED_POSSIBLE_FRAUD|
|status|DROPPED|
|status|DROPPED_CERTIFICATE_AUTHORITY_AUTHORIZATION|
|status|DROPPED_GOOGLE_SAFE_BROWSING|
|status|INVALID|
|status|AWAITING|
|status|PENDING_POSSIBLE_FRAUD|
|status|REVOKED_CERTIFICATE|
|type|DOMAIN_CONTROL_EMAIL|
|type|AUTO_GENERATED_DOMAIN_ACCESS_EMAIL_ADMIN|
|type|AUTO_GENERATED_DOMAIN_ACCESS_EMAIL_ADMINSTRATOR|
|type|AUTO_GENERATED_DOMAIN_ACCESS_EMAIL_HOST_MASTER|
|type|AUTO_GENERATED_DOMAIN_ACCESS_EMAIL_POST_MASTER|
|type|AUTO_GENERATED_DOMAIN_ACCESS_EMAIL_WEB_MASTER|
|type|DOMAIN_ACCESS_EMAIL|
|type|DOMAIN_ACCESS_LETTER|
|type|DOMAIN_ZONE_CONTROL|
|type|MANUAL_DOMAIN_ACCESS_EMAIL|
|type|PREVIOUS_DOMAIN_ACCESS_EMAIL|
|type|REGISTRATION_AUTHORITY_DOMAIN_ACCESS_LETTER|
|type|REGISTRATION_AUTHORITY_DOMAIN_ZONE_CONTROL|
|type|REGISTRATION_AUTHORITY_OVERRIDE|
|type|REGISTRATION_AUTHORITY_WEBSITE_CONTROL|
|type|CUSTOMER_OWNED|
|type|WEBSITE_CONTROL|
|usage|COMMON_NAME|
|usage|SUBJECT_ALTERNATIVE_NAME|

<h2 id="tocS_Error">Error</h2>
<!-- backwards compatibility -->
<a id="schemaerror"></a>
<a id="schema_Error"></a>
<a id="tocSerror"></a>
<a id="tocserror"></a>

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string"
    }
  ],
  "message": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string(constant)|true|none|Short identifier for the error, suitable for indicating the specific error within client code|
|fields|[[ErrorField](#schemaerrorfield)]|false|none|List of the specific fields, and the errors found with their contents|
|message|string|false|none|Description of the error|

<h2 id="tocS_ErrorField">ErrorField</h2>
<!-- backwards compatibility -->
<a id="schemaerrorfield"></a>
<a id="schema_ErrorField"></a>
<a id="tocSerrorfield"></a>
<a id="tocserrorfield"></a>

```json
{
  "code": "string",
  "message": "string",
  "path": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string(constant)|true|none|Short identifier for the error, suitable for indicating the specific error within client code|
|message|string|false|none|Description of the problem with the contents of the field|
|path|string(json-path)|true|none|JSONPath referring to the field within the submitted data containing an error|

<h2 id="tocS_ErrorLimit">ErrorLimit</h2>
<!-- backwards compatibility -->
<a id="schemaerrorlimit"></a>
<a id="schema_ErrorLimit"></a>
<a id="tocSerrorlimit"></a>
<a id="tocserrorlimit"></a>

```json
{
  "retryAfterSec": 0,
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string"
    }
  ],
  "message": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|retryAfterSec|integer(integer-positive)|true|none|Number of seconds to wait before attempting a similar request|
|code|string(constant)|true|none|Short identifier for the error, suitable for indicating the specific error within client code|
|fields|[[ErrorField](#schemaerrorfield)]|false|none|List of the specific fields, and the errors found with their contents|
|message|string|false|none|Description of the error|

<h2 id="tocS_ExternalAccountBinding">ExternalAccountBinding</h2>
<!-- backwards compatibility -->
<a id="schemaexternalaccountbinding"></a>
<a id="schema_ExternalAccountBinding"></a>
<a id="tocSexternalaccountbinding"></a>
<a id="tocsexternalaccountbinding"></a>

```json
{
  "directoryUrl": "http://example.com",
  "hmacKey": "string",
  "keyId": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|directoryUrl|string(url)|true|none|ACME directory resource URL.|
|hmacKey|string|true|none|EAB HMAC key for the ACME account|
|keyId|string|true|none|EAB key identifier for the ACME account.|

<h2 id="tocS_JurisdictionOfIncorporation">JurisdictionOfIncorporation</h2>
<!-- backwards compatibility -->
<a id="schemajurisdictionofincorporation"></a>
<a id="schema_JurisdictionOfIncorporation"></a>
<a id="tocSjurisdictionofincorporation"></a>
<a id="tocsjurisdictionofincorporation"></a>

```json
{
  "city": "string",
  "country": "string",
  "county": "string",
  "state": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|city|string|false|none|none|
|country|string(iso-country-code)|true|none|none|
|county|string|false|none|none|
|state|string|false|none|none|

<h2 id="tocS_PEMCertificates">PEMCertificates</h2>
<!-- backwards compatibility -->
<a id="schemapemcertificates"></a>
<a id="schema_PEMCertificates"></a>
<a id="tocSpemcertificates"></a>
<a id="tocspemcertificates"></a>

```json
{
  "certificate": "string",
  "cross": "string",
  "intermediate": "string",
  "root": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|certificate|string|true|none|End entity certificate in PEM format|
|cross|string|false|none|CA Cross Intermediate certificate in PEM format|
|intermediate|string|false|none|CA Signing Intermediate certificate in PEM format|
|root|string|false|none|CA Root certificate in PEM format|

<h2 id="tocS_Pagination">Pagination</h2>
<!-- backwards compatibility -->
<a id="schemapagination"></a>
<a id="schema_Pagination"></a>
<a id="tocSpagination"></a>
<a id="tocspagination"></a>

```json
{
  "first": "string",
  "last": "string",
  "next": "string",
  "previous": "string",
  "total": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|first|string|false|none|URI to access the first page|
|last|string|false|none|URI to access the last page|
|next|string|false|none|URI to access the next page|
|previous|string|false|none|URI to access the previous page|
|total|integer|false|none|Number of records available|

<h2 id="tocS_SubjectAlternativeNameDetails">SubjectAlternativeNameDetails</h2>
<!-- backwards compatibility -->
<a id="schemasubjectalternativenamedetails"></a>
<a id="schema_SubjectAlternativeNameDetails"></a>
<a id="tocSsubjectalternativenamedetails"></a>
<a id="tocssubjectalternativenamedetails"></a>

```json
{
  "status": "PENDING",
  "subjectAlternativeName": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|string|true|none|Total number of page results|
|subjectAlternativeName|string|true|none|Subject alternative name to be included in certificate|

#### Enumerated Values

|Property|Value|
|---|---|
|status|PENDING|
|status|INVALID|
|status|COMPLETED|
|status|FRAUD|
