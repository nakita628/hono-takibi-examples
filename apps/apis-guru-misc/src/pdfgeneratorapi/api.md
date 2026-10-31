<h1 id="pdf-generator-api">PDF Generator API v3.1.1</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

# Introduction
PDF Generator API allows you easily generate transactional PDF documents and reduce the development and support costs by enabling your users to create and manage their document templates using a browser-based drag-and-drop document editor.

The PDF Generator API features a web API architecture, allowing you to code in the language of your choice. This API supports the JSON media type, and uses UTF-8 character encoding.

You can find our previous API documentation page with references to Simple and Signature authentication [here](https://docs.pdfgeneratorapi.com/legacy).

## Base URL
The base URL for all the API endpoints is `https://us1.pdfgeneratorapi.com/api/v3`

For example
* `https://us1.pdfgeneratorapi.com/api/v3/templates`
* `https://us1.pdfgeneratorapi.com/api/v3/workspaces`
* `https://us1.pdfgeneratorapi.com/api/v3/templates/123123`

## Editor
PDF Generator API comes with a powerful drag & drop editor that allows to create any kind of document templates, from barcode labels to invoices, quotes and reports. You can find tutorials and videos from our [Support Portal](https://support.pdfgeneratorapi.com).
* [Component specification](https://support.pdfgeneratorapi.com/en/category/components-1ffseaj/)
* [Expression Language documentation](https://support.pdfgeneratorapi.com/en/category/expression-language-q203pa/)
* [Frequently asked questions and answers](https://support.pdfgeneratorapi.com/en/category/qanda-1ov519d/)

## Definitions

### Organization
Organization is a group of workspaces owned by your account.

### Workspace
Workspace contains templates. Each workspace has access to their own templates and organization default templates.

### Master Workspace
Master Workspace is the main/default workspace of your Organization. The Master Workspace identifier is the email you signed up with.

### Default Template
Default template is a template that is available for all workspaces by default. You can set the template access type under Page Setup. If template has "Organization" access then your users can use them from the "New" menu in the Editor.

### Data Field
Data Field is a placeholder for the specific data in your JSON data set. In this example JSON you can access the buyer name using Data Field `{paymentDetails::buyerName}`. The separator between depth levels is :: (two colons). When designing the template you don’t have to know every Data Field, our editor automatically extracts all the available fields from your data set and provides an easy way to insert them into the template.
```
{
    "documentNumber": 1,
    "paymentDetails": {
        "method": "Credit Card",
        "buyerName": "John Smith"
    },
    "items": [
        {
            "id": 1,
            "name": "Item one"
        }
    ]
}
```

*  *  *  *  *
# Authentication
The PDF Generator API uses __JSON Web Tokens (JWT)__ to authenticate all API requests. These tokens offer a method to establish secure server-to-server authentication by transferring a compact JSON object with a signed payload of your account’s API Key and Secret.
When authenticating to the PDF Generator API, a JWT should be generated uniquely by a __server-side application__ and included as a __Bearer Token__ in the header of each request.

## Legacy Simple and Signature authentication
You can find our legacy documentation for Simple and Signature authentication [here](https://docs.pdfgeneratorapi.com/legacy).

<SecurityDefinitions />

## Accessing your API Key and Secret
You can find your __API Key__ and __API Secret__ from the __Account Settings__ page after you login to PDF Generator API [here](https://pdfgeneratorapi.com/login).

## Creating a JWT
JSON Web Tokens are composed of three sections: a header, a payload (containing a claim set), and a signature. The header and payload are JSON objects, which are serialized to UTF-8 bytes, then encoded using base64url encoding.

The JWT's header, payload, and signature are concatenated with periods (.). As a result, a JWT typically takes the following form:
```
{Base64url encoded header}.{Base64url encoded payload}.{Base64url encoded signature}
```

We recommend and support libraries provided on [jwt.io](https://jwt.io/). While other libraries can create JWT, these recommended libraries are the most robust.

### Header
Property `alg` defines which signing algorithm is being used. PDF Generator API users HS256.
Property `typ` defines the type of token and it is always JWT.
```
{
  "alg": "HS256",
  "typ": "JWT"
}
```

### Payload
The second part of the token is the payload, which contains the claims  or the pieces of information being passed about the user and any metadata required.
It is mandatory to specify the following claims:
* issuer (`iss`): Your API key
* subject (`sub`): Workspace identifier
* expiration time (`exp`): Timestamp (unix epoch time) until the token is valid. It is highly recommended to set the exp timestamp for a short period, i.e. a matter of seconds. This way, if a token is intercepted or shared, the token will only be valid for a short period of time.

```
{
  "iss": "ad54aaff89ffdfeff178bb8a8f359b29fcb20edb56250b9f584aa2cb0162ed4a",
  "sub": "demo.example@actualreports.com",
  "exp": 1586112639
}
```

### Signature
To create the signature part you have to take the encoded header, the encoded payload, a secret, the algorithm specified in the header, and sign that. The signature is used to verify the message wasn't changed along the way, and, in the case of tokens signed with a private key, it can also verify that the sender of the JWT is who it says it is.
```
HMACSHA256(
    base64UrlEncode(header) + "." +
    base64UrlEncode(payload),
    API_SECRET)
```

### Putting all together
The output is three Base64-URL strings separated by dots. The following shows a JWT that has the previous header and payload encoded, and it is signed with a secret.
```
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJhZDU0YWFmZjg5ZmZkZmVmZjE3OGJiOGE4ZjM1OWIyOWZjYjIwZWRiNTYyNTBiOWY1ODRhYTJjYjAxNjJlZDRhIiwic3ViIjoiZGVtby5leGFtcGxlQGFjdHVhbHJlcG9ydHMuY29tIn0.SxO-H7UYYYsclS8RGWO1qf0z1cB1m73wF9FLl9RCc1Q

// Base64 encoded header: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9
// Base64 encoded payload: eyJpc3MiOiJhZDU0YWFmZjg5ZmZkZmVmZjE3OGJiOGE4ZjM1OWIyOWZjYjIwZWRiNTYyNTBiOWY1ODRhYTJjYjAxNjJlZDRhIiwic3ViIjoiZGVtby5leGFtcGxlQGFjdHVhbHJlcG9ydHMuY29tIn0
// Signature: SxO-H7UYYYsclS8RGWO1qf0z1cB1m73wF9FLl9RCc1Q
```

## Testing with JWTs
You can create a temporary token in [Account Settings](https://pdfgeneratorapi.com/account/organization) page after you login to PDF Generator API. The generated token uses your email address as the subject (`sub`) value and is valid for __5 minutes__.
You can also use [jwt.io](https://jwt.io/) to generate test tokens for your API calls. These test tokens should never be used in production applications.
*  *  *  *  *

# Libraries and SDKs
## Postman Collection
We have created a [Postman](https://www.postman.com) Collection so you can easily test all the API endpoints wihtout developing and code. You can download the collection [here](https://app.getpostman.com/run-collection/329f09618ec8a957dbc4) or just click the button below.

[![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/329f09618ec8a957dbc4)

## Client Libraries
All our Client Libraries are auto-generated using [OpenAPI Generator](https://openapi-generator.tech/) which uses the OpenAPI v3 specification to automatically generate a client library in specific programming language.

* [PHP Client](https://github.com/pdfgeneratorapi/php-client)
* [Java Client](https://github.com/pdfgeneratorapi/java-client)
* [Ruby Client](https://github.com/pdfgeneratorapi/ruby-client)
* [Python Client](https://github.com/pdfgeneratorapi/python-client)
* [Javascript Client](https://github.com/pdfgeneratorapi/javascript-client)

We have validated the generated libraries, but let us know if you find any anomalies in the client code.
*  *  *  *  *

# Error codes

| Code   | Description                    |
|--------|--------------------------------|
| 401    | Unauthorized                   |
| 403    | Forbidden                      |
| 404    | Not Found                      |
| 422    | Unprocessable Entity           |
| 500    | Internal Server Error          |

## 401 - Unauthorized
| Description                                                             |
|-------------------------------------------------------------------------|
| Authentication failed: request expired                                  |
| Authentication failed: workspace missing                                |
| Authentication failed: key missing                                      |
| Authentication failed: property 'iss' (issuer) missing in JWT           |
| Authentication failed: property 'sub' (subject) missing in JWT          |
| Authentication failed: property 'exp' (expiration time) missing in JWT  |
| Authentication failed: incorrect signature                              |

## 403 - Forbidden
| Description                                                             |
|-------------------------------------------------------------------------|
| Your account has exceeded the monthly document generation limit.        |
| Access not granted: You cannot delete master workspace via API          |
| Access not granted: Template is not accessible by this organization     |
| Your session has expired, please close and reopen the editor.           |

## 404 Entity not found
| Description                                                             |
|-------------------------------------------------------------------------|
| Entity not found                                                        |
| Resource not found                                                      |
| None of the templates is available for the workspace.                   |

## 422 Unprocessable Entity
| Description                                                             |
|-------------------------------------------------------------------------|
| Unable to parse JSON, please check formatting                           |
| Required parameter missing                                              |
| Required parameter missing: template definition not defined             |
| Required parameter missing: template not defined                        |

Base URLs:

* <a href="https://us1.pdfgeneratorapi.com/api/v3">https://us1.pdfgeneratorapi.com/api/v3</a>

Email: <a href="mailto:support@pdfgeneratorapi.com">Support</a> 
Web: <a href="https://support.pdfgeneratorapi.com">Support</a> 

# Authentication

- HTTP Authentication, scheme: bearer JSON Web Token (JWT) is an open standard (RFC 7519) that defines a compact and self-contained way for securely transmitting information between parties as a JSON object. This information can be verified and trusted because it is digitally signed. JWTs can be signed using a secret (with the HMAC algorithm) or a public/private key pair using RSA or ECDSA. For more information about JSON Web Tokens check [jwt.io](https://jwt.io).

<h1 id="pdf-generator-api-templates">Templates</h1>

## Get templates

<a id="opIdgetTemplates"></a>

> Code samples

```bash
curl https://example.com/templates \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /templates`

Returns a list of templates available for the authenticated workspace

> Example responses

> 200 Response

```json
{
  "response": [
    {
      "id": 24382,
      "modified": "2017-10-21 11:49:28",
      "name": "Invoice template",
      "owner": true,
      "tags": [
        "invoice",
        "orders"
      ]
    }
  ]
}
```

> 401 Response

```json
{
  "error": "Authentication failed",
  "status": 401
}
```

> 403 Response

```json
{
  "error": "Access not granted",
  "status": 403
}
```

> 404 Response

```json
{
  "error": "Entity not found",
  "status": 404
}
```

> 422 Response

```json
{
  "error": "Incorrect parameter value",
  "status": 422
}
```

> 500 Response

```json
{
  "error": "Internal error",
  "status": 500
}
```

<h3 id="get-templates-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|An array of template objects|Inline|
|401|Unauthorized|Unauthorized|Inline|
|403|Forbidden|Forbidden|Inline|
|404|Not Found|Not Found|Inline|
|422|Unprocessable Entity|Unprocessable Entity|Inline|
|500|Internal Server Error|Internal Server Error|Inline|

<h3 id="get-templates-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|response|[[Template](#schematemplate)]|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|false|none|Error description|
|status|integer|false|none|HTTP Error code|

#### Enumerated Values

|Property|Value|
|---|---|
|error|Authentication failed: request expired|
|error|Authentication failed: signature or secret missing|
|error|Authentication failed: workspace missing|
|error|Authentication failed: key missing|
|error|Authentication failed: property 'iss' (issuer) missing in JWT|
|error|Authentication failed: property 'sub' (subject) missing in JWT|
|error|Authentication failed: property 'exp' (expiration time) missing in JWT|
|error|Authentication failed: invalid 'iss' (issuer)|
|error|Authentication failed: incorrect signature|
|error|Authentication failed|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|false|none|Error description|
|status|integer|false|none|HTTP Error code|

#### Enumerated Values

|Property|Value|
|---|---|
|error|Your account has exceeded the monthly document generation limit.|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|false|none|Error description|
|status|integer|false|none|HTTP Error code|

#### Enumerated Values

|Property|Value|
|---|---|
|error|Entity not found|
|error|Resource not found|
|error|None of the templates is available for the workspace.|

Status Code **422**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|false|none|Error description|
|status|integer|false|none|HTTP Error code|

#### Enumerated Values

|Property|Value|
|---|---|
|error|Unable to parse JSON, please check formatting|
|error|Required parameter missing|
|error|Required parameter missing: template definition not defined|
|error|Required parameter missing: template not defined|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|false|none|Error description|
|status|integer|false|none|HTTP Error code|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
JSONWebTokenAuth
</aside>

## Create template

<a id="opIdcreateTemplate"></a>

> Code samples

```bash
curl https://example.com/templates \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "isDraft": true,
    "layout": {
      "emptyLabels": 0,
      "format": "A4",
      "height": 29.7,
      "margins": {
        "bottom": 0.5,
        "left": 0.5,
        "right": 0.5,
        "top": 0.5
      },
      "orientation": "portrait",
      "repeatLayout": {
        "format": "A4",
        "height": 29.7,
        "width": 21
      },
      "rotaion": 0,
      "unit": "cm",
      "width": 21
    },
    "name": "Invoice template",
    "pages": [
      {
        "components": [
          {
            "cls": "labelComponent",
            "dataIndex": "line_items",
            "height": 1,
            "id": "component-12313",
            "left": 2.5,
            "top": 4.2,
            "value": "${price}",
            "width": 3.5,
            "zindex": 102
          }
        ],
        "height": 29.7,
        "margins": {
          "bottom": 0.5,
          "right": 0.5
        },
        "width": 21
      }
    ],
    "tags": [
      "invoice",
      "orders"
    ]
  }'
```

`POST /templates`

Creates a new template. If template configuration is not specified in the request body then an empty template is created. Template is placed to the workspace specified in authentication params. Template configuration must be sent in the request body.

> Body parameter

```json
{
  "isDraft": true,
  "layout": {
    "emptyLabels": 0,
    "format": "A4",
    "height": 29.7,
    "margins": {
      "bottom": 0.5,
      "left": 0.5,
      "right": 0.5,
      "top": 0.5
    },
    "orientation": "portrait",
    "repeatLayout": {
      "format": "A4",
      "height": 29.7,
      "width": 21
    },
    "rotaion": 0,
    "unit": "cm",
    "width": 21
  },
  "name": "Invoice template",
  "pages": [
    {
      "components": [
        {
          "cls": "labelComponent",
          "dataIndex": "line_items",
          "height": 1,
          "id": "component-12313",
          "left": 2.5,
          "top": 4.2,
          "value": "${price}",
          "width": 3.5,
          "zindex": 102
        }
      ],
      "height": 29.7,
      "margins": {
        "bottom": 0.5,
        "right": 0.5
      },
      "width": 21
    }
  ],
  "tags": [
    "invoice",
    "orders"
  ]
}
```

<h3 id="create-template-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[TemplateDefinitionNew](#schematemplatedefinitionnew)|true|Template configuration as JSON string|
|» isDraft|body|boolean|false|Indicates if the template is a draft or published.|
|» layout|body|object|false|Defines template layout (e.g page format, margins).|
|» » emptyLabels|body|integer|false|Defines how many pages or labels should be empty|
|» » format|body|string|false|Defines template page size|
|» » height|body|number|false|Page height in units|
|» » margins|body|object|false|Page margins in units|
|» » » bottom|body|number|false|none|
|» » » left|body|number|false|none|
|» » » right|body|number|false|none|
|» » » top|body|number|false|none|
|» » orientation|body|string|false|Page orientation|
|» » repeatLayout|body|object \| null|false|Defines page size if layout is repeated on the page e.g sheet labels|
|» » » format|body|string|false|Defines template page size|
|» » » height|body|number|false|Page height in units|
|» » » width|body|number|false|Page width in units|
|» » rotaion|body|integer|false|Page rotation in degrees|
|» » unit|body|string|false|Measure unit|
|» » width|body|number|false|Page width in units|
|» name|body|string|true|Template name|
|» pages|body|[object]|false|Defines page or label size, margins and components on page or label|
|» » components|body|[[Component](#schemacomponent)]|false|none|
|» » height|body|number|false|Page height in units|
|» » margins|body|object|false|none|
|» » » bottom|body|number|false|Page or label margin from bottom|
|» » » right|body|number|false|Page or label margin from right|
|» » width|body|number|false|Page width in units|
|» tags|body|[string]|false|A list of tags assigned to a template|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» » format|A4|
|» » format|letter|
|» » format|custom|
|» » orientation|portrait|
|» » orientation|landscape|
|» » » format|A4|
|» » » format|letter|
|» » » format|custom|
|» » rotaion|0|
|» » rotaion|90|
|» » rotaion|180|
|» » rotaion|270|
|» » unit|cm|
|» » unit|in|

> Example responses

> 200 Response

```json
{
  "response": {
    "dataSettings": {
      "filterBy": [
        {}
      ],
      "sortBy": [
        {}
      ]
    },
    "editor": {
      "heightMultiplier": 2
    },
    "id": 24382,
    "isDraft": true,
    "layout": {
      "emptyLabels": 0,
      "format": "A4",
      "height": 29.7,
      "margins": {
        "bottom": 0.5,
        "left": 0.5,
        "right": 0.5,
        "top": 0.5
      },
      "orientation": "portrait",
      "repeatLayout": {
        "format": "A4",
        "height": 29.7,
        "width": 21
      },
      "rotation": 0,
      "unit": "cm",
      "width": 21
    },
    "name": "Invoice template",
    "pages": [
      {
        "components": [
          {
            "cls": "labelComponent",
            "dataIndex": "line_items",
            "height": 1,
            "id": "component-12313",
            "left": 2.5,
            "top": 4.2,
            "value": "${price}",
            "width": 3.5,
            "zindex": 102
          }
        ],
        "height": 29.7,
        "margins": {
          "bottom": 0.5,
          "right": 0.5
        },
        "width": 21
      }
    ],
    "tags": [
      "invoice",
      "orders"
    ]
  }
}
```

> 401 Response

```json
{
  "error": "Authentication failed",
  "status": 401
}
```

> 403 Response

```json
{
  "error": "Access not granted",
  "status": 403
}
```

> 404 Response

```json
{
  "error": "Entity not found",
  "status": 404
}
```

> 422 Response

```json
{
  "error": "Incorrect parameter value",
  "status": 422
}
```

> 500 Response

```json
{
  "error": "Internal error",
  "status": 500
}
```

<h3 id="create-template-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Template configuration as JSON object|Inline|
|401|Unauthorized|Unauthorized|Inline|
|403|Forbidden|Forbidden|Inline|
|404|Not Found|Not Found|Inline|
|422|Unprocessable Entity|Unprocessable Entity|Inline|
|500|Internal Server Error|Internal Server Error|Inline|

<h3 id="create-template-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|response|[TemplateDefinition](#schematemplatedefinition)|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|false|none|Error description|
|status|integer|false|none|HTTP Error code|

#### Enumerated Values

|Property|Value|
|---|---|
|error|Authentication failed: request expired|
|error|Authentication failed: signature or secret missing|
|error|Authentication failed: workspace missing|
|error|Authentication failed: key missing|
|error|Authentication failed: property 'iss' (issuer) missing in JWT|
|error|Authentication failed: property 'sub' (subject) missing in JWT|
|error|Authentication failed: property 'exp' (expiration time) missing in JWT|
|error|Authentication failed: invalid 'iss' (issuer)|
|error|Authentication failed: incorrect signature|
|error|Authentication failed|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|false|none|Error description|
|status|integer|false|none|HTTP Error code|

#### Enumerated Values

|Property|Value|
|---|---|
|error|Your account has exceeded the monthly document generation limit.|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|false|none|Error description|
|status|integer|false|none|HTTP Error code|

#### Enumerated Values

|Property|Value|
|---|---|
|error|Entity not found|
|error|Resource not found|
|error|None of the templates is available for the workspace.|

Status Code **422**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|false|none|Error description|
|status|integer|false|none|HTTP Error code|

#### Enumerated Values

|Property|Value|
|---|---|
|error|Unable to parse JSON, please check formatting|
|error|Required parameter missing|
|error|Required parameter missing: template definition not defined|
|error|Required parameter missing: template not defined|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|false|none|Error description|
|status|integer|false|none|HTTP Error code|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
JSONWebTokenAuth
</aside>

## Get template

<a id="opIdgetTemplate"></a>

> Code samples

```bash
curl 'https://example.com/templates/templateId?templateId=19375' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /templates/templateId`

Returns template configuration

<h3 id="get-template-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|templateId|query|integer|true|Template unique identifier|

> Example responses

> 200 Response

```json
{
  "response": {
    "dataSettings": {
      "filterBy": [
        {}
      ],
      "sortBy": [
        {}
      ]
    },
    "editor": {
      "heightMultiplier": 2
    },
    "id": 24382,
    "isDraft": true,
    "layout": {
      "emptyLabels": 0,
      "format": "A4",
      "height": 29.7,
      "margins": {
        "bottom": 0.5,
        "left": 0.5,
        "right": 0.5,
        "top": 0.5
      },
      "orientation": "portrait",
      "repeatLayout": {
        "format": "A4",
        "height": 29.7,
        "width": 21
      },
      "rotation": 0,
      "unit": "cm",
      "width": 21
    },
    "name": "Invoice template",
    "pages": [
      {
        "components": [
          {
            "cls": "labelComponent",
            "dataIndex": "line_items",
            "height": 1,
            "id": "component-12313",
            "left": 2.5,
            "top": 4.2,
            "value": "${price}",
            "width": 3.5,
            "zindex": 102
          }
        ],
        "height": 29.7,
        "margins": {
          "bottom": 0.5,
          "right": 0.5
        },
        "width": 21
      }
    ],
    "tags": [
      "invoice",
      "orders"
    ]
  }
}
```

> 401 Response

```json
{
  "error": "Authentication failed",
  "status": 401
}
```

> 403 Response

```json
{
  "error": "Access not granted",
  "status": 403
}
```

> 404 Response

```json
{
  "error": "Entity not found",
  "status": 404
}
```

> 422 Response

```json
{
  "error": "Incorrect parameter value",
  "status": 422
}
```

> 500 Response

```json
{
  "error": "Internal error",
  "status": 500
}
```

<h3 id="get-template-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Template configuration as JSON object|Inline|
|401|Unauthorized|Unauthorized|Inline|
|403|Forbidden|Forbidden|Inline|
|404|Not Found|Not Found|Inline|
|422|Unprocessable Entity|Unprocessable Entity|Inline|
|500|Internal Server Error|Internal Server Error|Inline|

<h3 id="get-template-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|response|[TemplateDefinition](#schematemplatedefinition)|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|false|none|Error description|
|status|integer|false|none|HTTP Error code|

#### Enumerated Values

|Property|Value|
|---|---|
|error|Authentication failed: request expired|
|error|Authentication failed: signature or secret missing|
|error|Authentication failed: workspace missing|
|error|Authentication failed: key missing|
|error|Authentication failed: property 'iss' (issuer) missing in JWT|
|error|Authentication failed: property 'sub' (subject) missing in JWT|
|error|Authentication failed: property 'exp' (expiration time) missing in JWT|
|error|Authentication failed: invalid 'iss' (issuer)|
|error|Authentication failed: incorrect signature|
|error|Authentication failed|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|false|none|Error description|
|status|integer|false|none|HTTP Error code|

#### Enumerated Values

|Property|Value|
|---|---|
|error|Your account has exceeded the monthly document generation limit.|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|false|none|Error description|
|status|integer|false|none|HTTP Error code|

#### Enumerated Values

|Property|Value|
|---|---|
|error|Entity not found|
|error|Resource not found|
|error|None of the templates is available for the workspace.|

Status Code **422**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|false|none|Error description|
|status|integer|false|none|HTTP Error code|

#### Enumerated Values

|Property|Value|
|---|---|
|error|Unable to parse JSON, please check formatting|
|error|Required parameter missing|
|error|Required parameter missing: template definition not defined|
|error|Required parameter missing: template not defined|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|false|none|Error description|
|status|integer|false|none|HTTP Error code|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
JSONWebTokenAuth
</aside>

## Update template

<a id="opIdupdateTemplate"></a>

> Code samples

```bash
curl 'https://example.com/templates/templateId?templateId=19375' \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "isDraft": true,
    "layout": {
      "emptyLabels": 0,
      "format": "A4",
      "height": 29.7,
      "margins": {
        "bottom": 0.5,
        "left": 0.5,
        "right": 0.5,
        "top": 0.5
      },
      "orientation": "portrait",
      "repeatLayout": {
        "format": "A4",
        "height": 29.7,
        "width": 21
      },
      "rotaion": 0,
      "unit": "cm",
      "width": 21
    },
    "name": "Invoice template",
    "pages": [
      {
        "components": [
          {
            "cls": "labelComponent",
            "dataIndex": "line_items",
            "height": 1,
            "id": "component-12313",
            "left": 2.5,
            "top": 4.2,
            "value": "${price}",
            "width": 3.5,
            "zindex": 102
          }
        ],
        "height": 29.7,
        "margins": {
          "bottom": 0.5,
          "right": 0.5
        },
        "width": 21
      }
    ],
    "tags": [
      "invoice",
      "orders"
    ]
  }'
```

`PUT /templates/templateId`

Updates template configuration. The template configuration for pages and layout must be complete as the entire configuration is replaced and not merged.

> Body parameter

```json
{
  "isDraft": true,
  "layout": {
    "emptyLabels": 0,
    "format": "A4",
    "height": 29.7,
    "margins": {
      "bottom": 0.5,
      "left": 0.5,
      "right": 0.5,
      "top": 0.5
    },
    "orientation": "portrait",
    "repeatLayout": {
      "format": "A4",
      "height": 29.7,
      "width": 21
    },
    "rotaion": 0,
    "unit": "cm",
    "width": 21
  },
  "name": "Invoice template",
  "pages": [
    {
      "components": [
        {
          "cls": "labelComponent",
          "dataIndex": "line_items",
          "height": 1,
          "id": "component-12313",
          "left": 2.5,
          "top": 4.2,
          "value": "${price}",
          "width": 3.5,
          "zindex": 102
        }
      ],
      "height": 29.7,
      "margins": {
        "bottom": 0.5,
        "right": 0.5
      },
      "width": 21
    }
  ],
  "tags": [
    "invoice",
    "orders"
  ]
}
```

<h3 id="update-template-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|templateId|query|integer|true|Template unique identifier|
|body|body|[TemplateDefinitionNew](#schematemplatedefinitionnew)|true|Template configuration as JSON string|
|» isDraft|body|boolean|false|Indicates if the template is a draft or published.|
|» layout|body|object|false|Defines template layout (e.g page format, margins).|
|» » emptyLabels|body|integer|false|Defines how many pages or labels should be empty|
|» » format|body|string|false|Defines template page size|
|» » height|body|number|false|Page height in units|
|» » margins|body|object|false|Page margins in units|
|» » » bottom|body|number|false|none|
|» » » left|body|number|false|none|
|» » » right|body|number|false|none|
|» » » top|body|number|false|none|
|» » orientation|body|string|false|Page orientation|
|» » repeatLayout|body|object \| null|false|Defines page size if layout is repeated on the page e.g sheet labels|
|» » » format|body|string|false|Defines template page size|
|» » » height|body|number|false|Page height in units|
|» » » width|body|number|false|Page width in units|
|» » rotaion|body|integer|false|Page rotation in degrees|
|» » unit|body|string|false|Measure unit|
|» » width|body|number|false|Page width in units|
|» name|body|string|true|Template name|
|» pages|body|[object]|false|Defines page or label size, margins and components on page or label|
|» » components|body|[[Component](#schemacomponent)]|false|none|
|» » height|body|number|false|Page height in units|
|» » margins|body|object|false|none|
|» » » bottom|body|number|false|Page or label margin from bottom|
|» » » right|body|number|false|Page or label margin from right|
|» » width|body|number|false|Page width in units|
|» tags|body|[string]|false|A list of tags assigned to a template|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» » format|A4|
|» » format|letter|
|» » format|custom|
|» » orientation|portrait|
|» » orientation|landscape|
|» » » format|A4|
|» » » format|letter|
|» » » format|custom|
|» » rotaion|0|
|» » rotaion|90|
|» » rotaion|180|
|» » rotaion|270|
|» » unit|cm|
|» » unit|in|

> Example responses

> 200 Response

```json
{
  "response": {
    "dataSettings": {
      "filterBy": [
        {}
      ],
      "sortBy": [
        {}
      ]
    },
    "editor": {
      "heightMultiplier": 2
    },
    "id": 24382,
    "isDraft": true,
    "layout": {
      "emptyLabels": 0,
      "format": "A4",
      "height": 29.7,
      "margins": {
        "bottom": 0.5,
        "left": 0.5,
        "right": 0.5,
        "top": 0.5
      },
      "orientation": "portrait",
      "repeatLayout": {
        "format": "A4",
        "height": 29.7,
        "width": 21
      },
      "rotation": 0,
      "unit": "cm",
      "width": 21
    },
    "name": "Invoice template",
    "pages": [
      {
        "components": [
          {
            "cls": "labelComponent",
            "dataIndex": "line_items",
            "height": 1,
            "id": "component-12313",
            "left": 2.5,
            "top": 4.2,
            "value": "${price}",
            "width": 3.5,
            "zindex": 102
          }
        ],
        "height": 29.7,
        "margins": {
          "bottom": 0.5,
          "right": 0.5
        },
        "width": 21
      }
    ],
    "tags": [
      "invoice",
      "orders"
    ]
  }
}
```

> 401 Response

```json
{
  "error": "Authentication failed",
  "status": 401
}
```

> 403 Response

```json
{
  "error": "Access not granted",
  "status": 403
}
```

> 404 Response

```json
{
  "error": "Entity not found",
  "status": 404
}
```

> 422 Response

```json
{
  "error": "Incorrect parameter value",
  "status": 422
}
```

> 500 Response

```json
{
  "error": "Internal error",
  "status": 500
}
```

<h3 id="update-template-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Template configuration as JSON object|Inline|
|401|Unauthorized|Unauthorized|Inline|
|403|Forbidden|Forbidden|Inline|
|404|Not Found|Not Found|Inline|
|422|Unprocessable Entity|Unprocessable Entity|Inline|
|500|Internal Server Error|Internal Server Error|Inline|

<h3 id="update-template-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|response|[TemplateDefinition](#schematemplatedefinition)|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|false|none|Error description|
|status|integer|false|none|HTTP Error code|

#### Enumerated Values

|Property|Value|
|---|---|
|error|Authentication failed: request expired|
|error|Authentication failed: signature or secret missing|
|error|Authentication failed: workspace missing|
|error|Authentication failed: key missing|
|error|Authentication failed: property 'iss' (issuer) missing in JWT|
|error|Authentication failed: property 'sub' (subject) missing in JWT|
|error|Authentication failed: property 'exp' (expiration time) missing in JWT|
|error|Authentication failed: invalid 'iss' (issuer)|
|error|Authentication failed: incorrect signature|
|error|Authentication failed|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|false|none|Error description|
|status|integer|false|none|HTTP Error code|

#### Enumerated Values

|Property|Value|
|---|---|
|error|Your account has exceeded the monthly document generation limit.|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|false|none|Error description|
|status|integer|false|none|HTTP Error code|

#### Enumerated Values

|Property|Value|
|---|---|
|error|Entity not found|
|error|Resource not found|
|error|None of the templates is available for the workspace.|

Status Code **422**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|false|none|Error description|
|status|integer|false|none|HTTP Error code|

#### Enumerated Values

|Property|Value|
|---|---|
|error|Unable to parse JSON, please check formatting|
|error|Required parameter missing|
|error|Required parameter missing: template definition not defined|
|error|Required parameter missing: template not defined|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|false|none|Error description|
|status|integer|false|none|HTTP Error code|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
JSONWebTokenAuth
</aside>

## Delete template

<a id="opIddeleteTemplate"></a>

> Code samples

```bash
curl 'https://example.com/templates/templateId?templateId=19375' \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /templates/templateId`

Deletes the template from workspace

<h3 id="delete-template-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|templateId|query|integer|true|Template unique identifier|

> Example responses

> 200 Response

```json
{
  "response": {
    "success": true
  }
}
```

> 401 Response

```json
{
  "error": "Authentication failed",
  "status": 401
}
```

> 403 Response

```json
{
  "error": "Access not granted",
  "status": 403
}
```

> 404 Response

```json
{
  "error": "Entity not found",
  "status": 404
}
```

> 422 Response

```json
{
  "error": "Incorrect parameter value",
  "status": 422
}
```

> 500 Response

```json
{
  "error": "Internal error",
  "status": 500
}
```

<h3 id="delete-template-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The request was successfully executed.|Inline|
|401|Unauthorized|Unauthorized|Inline|
|403|Forbidden|Forbidden|Inline|
|404|Not Found|Not Found|Inline|
|422|Unprocessable Entity|Unprocessable Entity|Inline|
|500|Internal Server Error|Internal Server Error|Inline|

<h3 id="delete-template-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|response|object|false|none|none|
|» success|boolean|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|false|none|Error description|
|status|integer|false|none|HTTP Error code|

#### Enumerated Values

|Property|Value|
|---|---|
|error|Authentication failed: request expired|
|error|Authentication failed: signature or secret missing|
|error|Authentication failed: workspace missing|
|error|Authentication failed: key missing|
|error|Authentication failed: property 'iss' (issuer) missing in JWT|
|error|Authentication failed: property 'sub' (subject) missing in JWT|
|error|Authentication failed: property 'exp' (expiration time) missing in JWT|
|error|Authentication failed: invalid 'iss' (issuer)|
|error|Authentication failed: incorrect signature|
|error|Authentication failed|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|false|none|Error description|
|status|integer|false|none|HTTP Error code|

#### Enumerated Values

|Property|Value|
|---|---|
|error|Your account has exceeded the monthly document generation limit.|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|false|none|Error description|
|status|integer|false|none|HTTP Error code|

#### Enumerated Values

|Property|Value|
|---|---|
|error|Entity not found|
|error|Resource not found|
|error|None of the templates is available for the workspace.|

Status Code **422**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|false|none|Error description|
|status|integer|false|none|HTTP Error code|

#### Enumerated Values

|Property|Value|
|---|---|
|error|Unable to parse JSON, please check formatting|
|error|Required parameter missing|
|error|Required parameter missing: template definition not defined|
|error|Required parameter missing: template not defined|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|false|none|Error description|
|status|integer|false|none|HTTP Error code|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
JSONWebTokenAuth
</aside>

## Copy template

<a id="opIdcopyTemplate"></a>

> Code samples

```bash
curl 'https://example.com/templates/templateId/copy?templateId=19375' \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /templates/templateId/copy`

Creates a copy of a template to the workspace specified in authentication parameters.

<h3 id="copy-template-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|templateId|query|integer|true|Template unique identifier|
|name|query|string|false|Name for the copied template. If name is not specified then the original name is used.|

> Example responses

> 200 Response

```json
{
  "response": {
    "dataSettings": {
      "filterBy": [
        {}
      ],
      "sortBy": [
        {}
      ]
    },
    "editor": {
      "heightMultiplier": 2
    },
    "id": 24382,
    "isDraft": true,
    "layout": {
      "emptyLabels": 0,
      "format": "A4",
      "height": 29.7,
      "margins": {
        "bottom": 0.5,
        "left": 0.5,
        "right": 0.5,
        "top": 0.5
      },
      "orientation": "portrait",
      "repeatLayout": {
        "format": "A4",
        "height": 29.7,
        "width": 21
      },
      "rotation": 0,
      "unit": "cm",
      "width": 21
    },
    "name": "Invoice template",
    "pages": [
      {
        "components": [
          {
            "cls": "labelComponent",
            "dataIndex": "line_items",
            "height": 1,
            "id": "component-12313",
            "left": 2.5,
            "top": 4.2,
            "value": "${price}",
            "width": 3.5,
            "zindex": 102
          }
        ],
        "height": 29.7,
        "margins": {
          "bottom": 0.5,
          "right": 0.5
        },
        "width": 21
      }
    ],
    "tags": [
      "invoice",
      "orders"
    ]
  }
}
```

> 401 Response

```json
{
  "error": "Authentication failed",
  "status": 401
}
```

> 403 Response

```json
{
  "error": "Access not granted",
  "status": 403
}
```

> 404 Response

```json
{
  "error": "Entity not found",
  "status": 404
}
```

> 422 Response

```json
{
  "error": "Incorrect parameter value",
  "status": 422
}
```

> 500 Response

```json
{
  "error": "Internal error",
  "status": 500
}
```

<h3 id="copy-template-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Template configuration as JSON object|Inline|
|401|Unauthorized|Unauthorized|Inline|
|403|Forbidden|Forbidden|Inline|
|404|Not Found|Not Found|Inline|
|422|Unprocessable Entity|Unprocessable Entity|Inline|
|500|Internal Server Error|Internal Server Error|Inline|

<h3 id="copy-template-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|response|[TemplateDefinition](#schematemplatedefinition)|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|false|none|Error description|
|status|integer|false|none|HTTP Error code|

#### Enumerated Values

|Property|Value|
|---|---|
|error|Authentication failed: request expired|
|error|Authentication failed: signature or secret missing|
|error|Authentication failed: workspace missing|
|error|Authentication failed: key missing|
|error|Authentication failed: property 'iss' (issuer) missing in JWT|
|error|Authentication failed: property 'sub' (subject) missing in JWT|
|error|Authentication failed: property 'exp' (expiration time) missing in JWT|
|error|Authentication failed: invalid 'iss' (issuer)|
|error|Authentication failed: incorrect signature|
|error|Authentication failed|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|false|none|Error description|
|status|integer|false|none|HTTP Error code|

#### Enumerated Values

|Property|Value|
|---|---|
|error|Your account has exceeded the monthly document generation limit.|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|false|none|Error description|
|status|integer|false|none|HTTP Error code|

#### Enumerated Values

|Property|Value|
|---|---|
|error|Entity not found|
|error|Resource not found|
|error|None of the templates is available for the workspace.|

Status Code **422**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|false|none|Error description|
|status|integer|false|none|HTTP Error code|

#### Enumerated Values

|Property|Value|
|---|---|
|error|Unable to parse JSON, please check formatting|
|error|Required parameter missing|
|error|Required parameter missing: template definition not defined|
|error|Required parameter missing: template not defined|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|false|none|Error description|
|status|integer|false|none|HTTP Error code|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
JSONWebTokenAuth
</aside>

## Open editor

<a id="opIdgetEditorUrl"></a>

> Code samples

```bash
curl 'https://example.com/templates/templateId/editor?templateId=19375' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "id": 12312,
    "name": "Sample Data"
  }'
```

`POST /templates/templateId/editor`

Returns an unique URL which you can use to redirect your user to the editor from your application or use the generated URL as iframe source to show the editor within your application.


> Body parameter

```json
{
  "id": 12312,
  "name": "Sample Data"
}
```

<h3 id="open-editor-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|templateId|query|integer|true|Template unique identifier|
|language|query|string|false|Specify the editor UI language. Defaults to organization editor language.|
|body|body|object|true|Data used to generate the PDF. This can be JSON encoded string or a public URL to your JSON file.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|language|en|
|language|et|
|language|cs|
|language|sk|
|language|ru|

> Example responses

> 200 Response

```json
{
  "response": "https://us1.pdfgeneratorapi.com/editor/open/2ff98760d39456c4b2cf974fef005ecf"
}
```

> 401 Response

```json
{
  "error": "Authentication failed",
  "status": 401
}
```

> 403 Response

```json
{
  "error": "Access not granted",
  "status": 403
}
```

> 404 Response

```json
{
  "error": "Entity not found",
  "status": 404
}
```

> 422 Response

```json
{
  "error": "Incorrect parameter value",
  "status": 422
}
```

> 500 Response

```json
{
  "error": "Internal error",
  "status": 500
}
```

<h3 id="open-editor-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns an URL which you can use to redirect your user to the editor or use as iframe source|Inline|
|401|Unauthorized|Unauthorized|Inline|
|403|Forbidden|Forbidden|Inline|
|404|Not Found|Not Found|Inline|
|422|Unprocessable Entity|Unprocessable Entity|Inline|
|500|Internal Server Error|Internal Server Error|Inline|

<h3 id="open-editor-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|response|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|false|none|Error description|
|status|integer|false|none|HTTP Error code|

#### Enumerated Values

|Property|Value|
|---|---|
|error|Authentication failed: request expired|
|error|Authentication failed: signature or secret missing|
|error|Authentication failed: workspace missing|
|error|Authentication failed: key missing|
|error|Authentication failed: property 'iss' (issuer) missing in JWT|
|error|Authentication failed: property 'sub' (subject) missing in JWT|
|error|Authentication failed: property 'exp' (expiration time) missing in JWT|
|error|Authentication failed: invalid 'iss' (issuer)|
|error|Authentication failed: incorrect signature|
|error|Authentication failed|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|false|none|Error description|
|status|integer|false|none|HTTP Error code|

#### Enumerated Values

|Property|Value|
|---|---|
|error|Your account has exceeded the monthly document generation limit.|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|false|none|Error description|
|status|integer|false|none|HTTP Error code|

#### Enumerated Values

|Property|Value|
|---|---|
|error|Entity not found|
|error|Resource not found|
|error|None of the templates is available for the workspace.|

Status Code **422**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|false|none|Error description|
|status|integer|false|none|HTTP Error code|

#### Enumerated Values

|Property|Value|
|---|---|
|error|Unable to parse JSON, please check formatting|
|error|Required parameter missing|
|error|Required parameter missing: template definition not defined|
|error|Required parameter missing: template not defined|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|false|none|Error description|
|status|integer|false|none|HTTP Error code|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
JSONWebTokenAuth
</aside>

<h1 id="pdf-generator-api-documents">Documents</h1>

## Generate document (multiple templates)

<a id="opIdmergeTemplates"></a>

> Code samples

```bash
curl https://example.com/templates/output \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '[
    {
      "data": {
        "key": "value"
      },
      "template": 52272
    },
    {
      "data": {
        "key2": "value2"
      },
      "template": 52273
    }
  ]'
```

`POST /templates/output`

Allows to merge multiples template with data and returns base64 encoded document or public URL to a document. NB! When the public URL option is used, the document is stored for 30 days and automatically deleted.

> Body parameter

```json
[
  {
    "data": {
      "key": "value"
    },
    "template": 52272
  },
  {
    "data": {
      "key2": "value2"
    },
    "template": 52273
  }
]
```

<h3 id="generate-document-multiple-templates-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|query|string|false|Document name, returned in the meta data.|
|format|query|string|false|Document format. The zip option will return a ZIP file with PDF files.|
|output|query|string|false|Response format. With the url option, the document is stored for 30 days and automatically deleted.|
|body|body|[BatchData](#schemabatchdata)|true|Data used to specify templates and data objects which are used to merge the template|
|» data|body|[Data](#schemadata)|false|none|
|» template|body|integer|false|Template id|

#### Enumerated Values

|Parameter|Value|
|---|---|
|format|pdf|
|format|html|
|format|zip|
|format|xlsx|
|output|base64|
|output|url|
|output|I|

> Example responses

> 200 Response

```json
{
  "meta": {
    "content-type": "application/pdf",
    "display_name": "a2bd25b8921f3dc7a440fd7f427f90a4",
    "encoding": "base64",
    "name": "a2bd25b8921f3dc7a440fd7f427f90a4.pdf"
  },
  "response": "JVBERi0xLjcKJeLjz9MKNyAwIG9iago8PCAvVHlwZSA..."
}
```

> 401 Response

```json
{
  "error": "Authentication failed",
  "status": 401
}
```

> 403 Response

```json
{
  "error": "Access not granted",
  "status": 403
}
```

> 404 Response

```json
{
  "error": "Entity not found",
  "status": 404
}
```

> 422 Response

```json
{
  "error": "Incorrect parameter value",
  "status": 422
}
```

> 500 Response

```json
{
  "error": "Internal error",
  "status": 500
}
```

<h3 id="generate-document-multiple-templates-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Document data|Inline|
|401|Unauthorized|Unauthorized|Inline|
|403|Forbidden|Forbidden|Inline|
|404|Not Found|Not Found|Inline|
|422|Unprocessable Entity|Unprocessable Entity|Inline|
|500|Internal Server Error|Internal Server Error|Inline|

<h3 id="generate-document-multiple-templates-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|meta|object|false|none|none|
|» content-type|string|false|none|Document content type.|
|» display_name|string|false|none|Document name without the file extension.|
|» encoding|string|false|none|Document encoding|
|» name|string|false|none|Document name. This value is automatically generated if name attribute is not defined in request.|
|response|string|false|none|Base64 encoded document if the output=base64 is used or URL to the document when the output=url is used.|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|false|none|Error description|
|status|integer|false|none|HTTP Error code|

#### Enumerated Values

|Property|Value|
|---|---|
|error|Authentication failed: request expired|
|error|Authentication failed: signature or secret missing|
|error|Authentication failed: workspace missing|
|error|Authentication failed: key missing|
|error|Authentication failed: property 'iss' (issuer) missing in JWT|
|error|Authentication failed: property 'sub' (subject) missing in JWT|
|error|Authentication failed: property 'exp' (expiration time) missing in JWT|
|error|Authentication failed: invalid 'iss' (issuer)|
|error|Authentication failed: incorrect signature|
|error|Authentication failed|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|false|none|Error description|
|status|integer|false|none|HTTP Error code|

#### Enumerated Values

|Property|Value|
|---|---|
|error|Your account has exceeded the monthly document generation limit.|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|false|none|Error description|
|status|integer|false|none|HTTP Error code|

#### Enumerated Values

|Property|Value|
|---|---|
|error|Entity not found|
|error|Resource not found|
|error|None of the templates is available for the workspace.|

Status Code **422**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|false|none|Error description|
|status|integer|false|none|HTTP Error code|

#### Enumerated Values

|Property|Value|
|---|---|
|error|Unable to parse JSON, please check formatting|
|error|Required parameter missing|
|error|Required parameter missing: template definition not defined|
|error|Required parameter missing: template not defined|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|false|none|Error description|
|status|integer|false|none|HTTP Error code|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
JSONWebTokenAuth
</aside>

## Generate document

<a id="opIdmergeTemplate"></a>

> Code samples

```bash
curl 'https://example.com/templates/templateId/output?templateId=19375' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "id": 12312,
    "name": "Sample Data"
  }'
```

`POST /templates/templateId/output`

Merges template with data and returns base64 encoded document or a public URL to a document. You can send json encoded data in request body or a public URL to your json file as the data parameter. NB! When the public URL option is used, the document is stored for 30 days and automatically deleted.

> Body parameter

```json
{
  "id": 12312,
  "name": "Sample Data"
}
```

<h3 id="generate-document-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|templateId|query|integer|true|Template unique identifier|
|name|query|string|false|Document name, returned in the meta data.|
|format|query|string|false|Document format. The zip option will return a ZIP file with PDF files.|
|output|query|string|false|Response format. With the url option, the document is stored for 30 days and automatically deleted.|
|body|body|[Data](#schemadata)|true|Data used to generate the PDF. This can be JSON encoded string or a public URL to your JSON file.|
|» id|body|integer|false|none|
|» name|body|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|format|pdf|
|format|html|
|format|zip|
|format|xlsx|
|output|base64|
|output|url|
|output|I|

> Example responses

> 200 Response

```json
{
  "meta": {
    "content-type": "application/pdf",
    "display_name": "a2bd25b8921f3dc7a440fd7f427f90a4",
    "encoding": "base64",
    "name": "a2bd25b8921f3dc7a440fd7f427f90a4.pdf"
  },
  "response": "JVBERi0xLjcKJeLjz9MKNyAwIG9iago8PCAvVHlwZSA..."
}
```

> 401 Response

```json
{
  "error": "Authentication failed",
  "status": 401
}
```

> 403 Response

```json
{
  "error": "Access not granted",
  "status": 403
}
```

> 404 Response

```json
{
  "error": "Entity not found",
  "status": 404
}
```

> 422 Response

```json
{
  "error": "Incorrect parameter value",
  "status": 422
}
```

> 500 Response

```json
{
  "error": "Internal error",
  "status": 500
}
```

<h3 id="generate-document-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Document data|Inline|
|401|Unauthorized|Unauthorized|Inline|
|403|Forbidden|Forbidden|Inline|
|404|Not Found|Not Found|Inline|
|422|Unprocessable Entity|Unprocessable Entity|Inline|
|500|Internal Server Error|Internal Server Error|Inline|

<h3 id="generate-document-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|meta|object|false|none|none|
|» content-type|string|false|none|Document content type.|
|» display_name|string|false|none|Document name without the file extension.|
|» encoding|string|false|none|Document encoding|
|» name|string|false|none|Document name. This value is automatically generated if name attribute is not defined in request.|
|response|string|false|none|Base64 encoded document if the output=base64 is used or URL to the document when the output=url is used.|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|false|none|Error description|
|status|integer|false|none|HTTP Error code|

#### Enumerated Values

|Property|Value|
|---|---|
|error|Authentication failed: request expired|
|error|Authentication failed: signature or secret missing|
|error|Authentication failed: workspace missing|
|error|Authentication failed: key missing|
|error|Authentication failed: property 'iss' (issuer) missing in JWT|
|error|Authentication failed: property 'sub' (subject) missing in JWT|
|error|Authentication failed: property 'exp' (expiration time) missing in JWT|
|error|Authentication failed: invalid 'iss' (issuer)|
|error|Authentication failed: incorrect signature|
|error|Authentication failed|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|false|none|Error description|
|status|integer|false|none|HTTP Error code|

#### Enumerated Values

|Property|Value|
|---|---|
|error|Your account has exceeded the monthly document generation limit.|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|false|none|Error description|
|status|integer|false|none|HTTP Error code|

#### Enumerated Values

|Property|Value|
|---|---|
|error|Entity not found|
|error|Resource not found|
|error|None of the templates is available for the workspace.|

Status Code **422**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|false|none|Error description|
|status|integer|false|none|HTTP Error code|

#### Enumerated Values

|Property|Value|
|---|---|
|error|Unable to parse JSON, please check formatting|
|error|Required parameter missing|
|error|Required parameter missing: template definition not defined|
|error|Required parameter missing: template not defined|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|false|none|Error description|
|status|integer|false|none|HTTP Error code|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
JSONWebTokenAuth
</aside>

<h1 id="pdf-generator-api-workspaces">Workspaces</h1>

## Get workspace

<a id="opIdgetWorkspace"></a>

> Code samples

```bash
curl 'https://example.com/workspaces/workspaceId?workspaceId=demo.example%40actualreports.com' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /workspaces/workspaceId`

Returns workspace information

<h3 id="get-workspace-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|workspaceId|query|string|true|Workspace identifier|

> Example responses

> 200 Response

```json
{
  "response": {
    "created_at": "2020-04-01 12:03:12",
    "id": 1,
    "identifier": "demo.example@actualreports.com",
    "is_master_workspace": false
  }
}
```

> 401 Response

```json
{
  "error": "Authentication failed",
  "status": 401
}
```

> 403 Response

```json
{
  "error": "Access not granted",
  "status": 403
}
```

> 404 Response

```json
{
  "error": "Entity not found",
  "status": 404
}
```

> 422 Response

```json
{
  "error": "Incorrect parameter value",
  "status": 422
}
```

> 500 Response

```json
{
  "error": "Internal error",
  "status": 500
}
```

<h3 id="get-workspace-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Workspace information|Inline|
|401|Unauthorized|Unauthorized|Inline|
|403|Forbidden|Forbidden|Inline|
|404|Not Found|Not Found|Inline|
|422|Unprocessable Entity|Unprocessable Entity|Inline|
|500|Internal Server Error|Internal Server Error|Inline|

<h3 id="get-workspace-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|response|[Workspace](#schemaworkspace)|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|false|none|Error description|
|status|integer|false|none|HTTP Error code|

#### Enumerated Values

|Property|Value|
|---|---|
|error|Authentication failed: request expired|
|error|Authentication failed: signature or secret missing|
|error|Authentication failed: workspace missing|
|error|Authentication failed: key missing|
|error|Authentication failed: property 'iss' (issuer) missing in JWT|
|error|Authentication failed: property 'sub' (subject) missing in JWT|
|error|Authentication failed: property 'exp' (expiration time) missing in JWT|
|error|Authentication failed: invalid 'iss' (issuer)|
|error|Authentication failed: incorrect signature|
|error|Authentication failed|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|false|none|Error description|
|status|integer|false|none|HTTP Error code|

#### Enumerated Values

|Property|Value|
|---|---|
|error|Your account has exceeded the monthly document generation limit.|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|false|none|Error description|
|status|integer|false|none|HTTP Error code|

#### Enumerated Values

|Property|Value|
|---|---|
|error|Entity not found|
|error|Resource not found|
|error|None of the templates is available for the workspace.|

Status Code **422**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|false|none|Error description|
|status|integer|false|none|HTTP Error code|

#### Enumerated Values

|Property|Value|
|---|---|
|error|Unable to parse JSON, please check formatting|
|error|Required parameter missing|
|error|Required parameter missing: template definition not defined|
|error|Required parameter missing: template not defined|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|false|none|Error description|
|status|integer|false|none|HTTP Error code|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
JSONWebTokenAuth
</aside>

## Delete workspace

<a id="opIddeleteWorkspace"></a>

> Code samples

```bash
curl 'https://example.com/workspaces/workspaceId?workspaceId=demo.example%40actualreports.com' \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /workspaces/workspaceId`

Deletes the workspace

<h3 id="delete-workspace-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|workspaceId|query|string|true|Workspace identifier|

> Example responses

> 200 Response

```json
{
  "response": {
    "success": true
  }
}
```

> 401 Response

```json
{
  "error": "Authentication failed",
  "status": 401
}
```

> 403 Response

```json
{
  "error": "Access not granted",
  "status": 403
}
```

> 404 Response

```json
{
  "error": "Entity not found",
  "status": 404
}
```

> 422 Response

```json
{
  "error": "Incorrect parameter value",
  "status": 422
}
```

> 500 Response

```json
{
  "error": "Internal error",
  "status": 500
}
```

<h3 id="delete-workspace-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The request was successfully executed.|Inline|
|401|Unauthorized|Unauthorized|Inline|
|403|Forbidden|Forbidden|Inline|
|404|Not Found|Not Found|Inline|
|422|Unprocessable Entity|Unprocessable Entity|Inline|
|500|Internal Server Error|Internal Server Error|Inline|

<h3 id="delete-workspace-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|response|object|false|none|none|
|» success|boolean|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|false|none|Error description|
|status|integer|false|none|HTTP Error code|

#### Enumerated Values

|Property|Value|
|---|---|
|error|Authentication failed: request expired|
|error|Authentication failed: signature or secret missing|
|error|Authentication failed: workspace missing|
|error|Authentication failed: key missing|
|error|Authentication failed: property 'iss' (issuer) missing in JWT|
|error|Authentication failed: property 'sub' (subject) missing in JWT|
|error|Authentication failed: property 'exp' (expiration time) missing in JWT|
|error|Authentication failed: invalid 'iss' (issuer)|
|error|Authentication failed: incorrect signature|
|error|Authentication failed|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|false|none|Error description|
|status|integer|false|none|HTTP Error code|

#### Enumerated Values

|Property|Value|
|---|---|
|error|Your account has exceeded the monthly document generation limit.|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|false|none|Error description|
|status|integer|false|none|HTTP Error code|

#### Enumerated Values

|Property|Value|
|---|---|
|error|Entity not found|
|error|Resource not found|
|error|None of the templates is available for the workspace.|

Status Code **422**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|false|none|Error description|
|status|integer|false|none|HTTP Error code|

#### Enumerated Values

|Property|Value|
|---|---|
|error|Unable to parse JSON, please check formatting|
|error|Required parameter missing|
|error|Required parameter missing: template definition not defined|
|error|Required parameter missing: template not defined|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|false|none|Error description|
|status|integer|false|none|HTTP Error code|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
JSONWebTokenAuth
</aside>

# Schemas

<h2 id="tocS_BatchData">BatchData</h2>
<!-- backwards compatibility -->
<a id="schemabatchdata"></a>
<a id="schema_BatchData"></a>
<a id="tocSbatchdata"></a>
<a id="tocsbatchdata"></a>

```json
[
  {
    "data": {
      "key": "value"
    },
    "template": 52272
  },
  {
    "data": {
      "key2": "value2"
    },
    "template": 52273
  }
]
```

<h2 id="tocS_Component">Component</h2>
<!-- backwards compatibility -->
<a id="schemacomponent"></a>
<a id="schema_Component"></a>
<a id="tocScomponent"></a>
<a id="tocscomponent"></a>

```json
{
  "cls": "labelComponent",
  "dataIndex": "line_items",
  "height": 1,
  "id": "component-12313",
  "left": 2.5,
  "top": 4.2,
  "value": "${price}",
  "width": 3.5,
  "zindex": 102
}
```

Template component definition

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cls|string|false|none|Defines component class/type|
|dataIndex|string|false|none|Defines data field for Table and Container components which are used to iterate over list of items|
|height|number|false|none|Height in units|
|id|string|false|none|Component id|
|left|number|false|none|Position from the page left in units|
|top|number|false|none|Position from the page top in units|
|value|string|false|none|Component value|
|width|number|false|none|Width in units|
|zindex|integer|false|none|Defines the rendering order on page. Components with smaller zindex are rendered before|

#### Enumerated Values

|Property|Value|
|---|---|
|cls|labelComponent|
|cls|numberComponent|
|cls|textComponent|
|cls|imageComponent|
|cls|dateComponent|
|cls|hlineComponent|
|cls|vlineComponent|
|cls|tableComponent|
|cls|compositeComponent|
|cls|barcodeComponent|
|cls|qrcodeComponent|
|cls|chartComponent|
|cls|rectangleComponent|
|cls|headerComponent|
|cls|footerComponent|
|cls|checkboxComponent|
|cls|radioComponent|

<h2 id="tocS_Data">Data</h2>
<!-- backwards compatibility -->
<a id="schemadata"></a>
<a id="schema_Data"></a>
<a id="tocSdata"></a>
<a id="tocsdata"></a>

```json
{
  "id": 12312,
  "name": "Sample Data"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer|false|none|none|
|name|string|false|none|none|

<h2 id="tocS_Template">Template</h2>
<!-- backwards compatibility -->
<a id="schematemplate"></a>
<a id="schema_Template"></a>
<a id="tocStemplate"></a>
<a id="tocstemplate"></a>

```json
{
  "id": 24382,
  "modified": "2017-10-21 11:49:28",
  "name": "Invoice template",
  "owner": true,
  "tags": [
    "invoice",
    "orders"
  ]
}
```

Template object

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer|false|none|Unique identifier|
|modified|string|false|none|Timestamp when the template was modified|
|name|string|false|none|Template name|
|owner|boolean|false|none|Indicates if the workspace is the owner of the template|
|tags|[string]|false|none|A list of tags assigned to a template|

<h2 id="tocS_TemplateDefinition">TemplateDefinition</h2>
<!-- backwards compatibility -->
<a id="schematemplatedefinition"></a>
<a id="schema_TemplateDefinition"></a>
<a id="tocStemplatedefinition"></a>
<a id="tocstemplatedefinition"></a>

```json
{
  "dataSettings": {
    "filterBy": [
      {}
    ],
    "sortBy": [
      {}
    ]
  },
  "editor": {
    "heightMultiplier": 2
  },
  "id": 24382,
  "isDraft": true,
  "layout": {
    "emptyLabels": 0,
    "format": "A4",
    "height": 29.7,
    "margins": {
      "bottom": 0.5,
      "left": 0.5,
      "right": 0.5,
      "top": 0.5
    },
    "orientation": "portrait",
    "repeatLayout": {
      "format": "A4",
      "height": 29.7,
      "width": 21
    },
    "rotation": 0,
    "unit": "cm",
    "width": 21
  },
  "name": "Invoice template",
  "pages": [
    {
      "components": [
        {
          "cls": "labelComponent",
          "dataIndex": "line_items",
          "height": 1,
          "id": "component-12313",
          "left": 2.5,
          "top": 4.2,
          "value": "${price}",
          "width": 3.5,
          "zindex": 102
        }
      ],
      "height": 29.7,
      "margins": {
        "bottom": 0.5,
        "right": 0.5
      },
      "width": 21
    }
  ],
  "tags": [
    "invoice",
    "orders"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dataSettings|object|false|none|Defines filter and sort option for root data set.|
|editor|object|false|none|Configuration preferences for the editor|
|id|integer|false|none|Unique identifier|
|isDraft|boolean|false|none|Indicates if the template is a draft or published.|
|layout|object|false|none|Defines template layout (e.g page format, margins).|
|name|string|false|none|Template name|
|pages|[object]|false|none|Defines page or label size, margins and components on page or label|
|tags|[string]|false|none|A list of tags assigned to a template|

<h2 id="tocS_TemplateDefinitionNew">TemplateDefinitionNew</h2>
<!-- backwards compatibility -->
<a id="schematemplatedefinitionnew"></a>
<a id="schema_TemplateDefinitionNew"></a>
<a id="tocStemplatedefinitionnew"></a>
<a id="tocstemplatedefinitionnew"></a>

```json
{
  "isDraft": true,
  "layout": {
    "emptyLabels": 0,
    "format": "A4",
    "height": 29.7,
    "margins": {
      "bottom": 0.5,
      "left": 0.5,
      "right": 0.5,
      "top": 0.5
    },
    "orientation": "portrait",
    "repeatLayout": {
      "format": "A4",
      "height": 29.7,
      "width": 21
    },
    "rotaion": 0,
    "unit": "cm",
    "width": 21
  },
  "name": "Invoice template",
  "pages": [
    {
      "components": [
        {
          "cls": "labelComponent",
          "dataIndex": "line_items",
          "height": 1,
          "id": "component-12313",
          "left": 2.5,
          "top": 4.2,
          "value": "${price}",
          "width": 3.5,
          "zindex": 102
        }
      ],
      "height": 29.7,
      "margins": {
        "bottom": 0.5,
        "right": 0.5
      },
      "width": 21
    }
  ],
  "tags": [
    "invoice",
    "orders"
  ]
}
```

Template configuration

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|isDraft|boolean|false|none|Indicates if the template is a draft or published.|
|layout|object|false|none|Defines template layout (e.g page format, margins).|
|name|string|true|none|Template name|
|pages|[object]|false|none|Defines page or label size, margins and components on page or label|
|tags|[string]|false|none|A list of tags assigned to a template|

<h2 id="tocS_Workspace">Workspace</h2>
<!-- backwards compatibility -->
<a id="schemaworkspace"></a>
<a id="schema_Workspace"></a>
<a id="tocSworkspace"></a>
<a id="tocsworkspace"></a>

```json
{
  "created_at": "2020-04-01 12:03:12",
  "id": 1,
  "identifier": "demo.example@actualreports.com",
  "is_master_workspace": false
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|created_at|string|false|none|none|
|id|integer|false|none|Internal workspace id|
|identifier|string|false|none|The unique workspace idenfitifer specified by your application|
|is_master_workspace|boolean|false|none|True if a master workspace|
