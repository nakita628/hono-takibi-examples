<h1 id="session-authentication-api">Session authentication API v1</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

The Session authentication API enables you to create and manage the JSON Web Tokens (JWT) required for integrating [components](https://docs.adyen.com/platforms/components-overview).
## Authentication
We recommend that you use an API key to connect to the Session authentication API. Generate an API key in your Customer Area if you have a [platform setup](https://docs.adyen.com/platforms/manage-access/api-credentials-web-service/#generate-api-key) or [marketplace setup](https://docs.adyen.com/marketplaces/manage-access/api-credentials-web-service/#generate-api-key). If you have an Adyen Issuing integration, [generate an API key](https://docs.adyen.com/issuing/manage-access/api-credentials-web-service/#generate-api-key) in your Balance Platform Customer Area.

To connect to the Session authentication API, add an `X-API-Key` header with the API key as the value, for example:

 ```
curl
-H 'Content-Type: application/json' \
-H 'X-API-Key: YOUR_API_KEY' \
...
```

## Roles and permissions
To create a token, you must meet specific requirements. These requirements vary depending on the type of component. For more information, see the documentation for [Onboarding](https://docs.adyen.com/platforms/onboard-users/components) and [Platform Experience](https://docs.adyen.com/platforms/build-user-dashboards) components.

## Going live
To access the live endpoint, generate an API key in your live Customer Area if you have a [platform](https://docs.adyen.com/platforms/) or [marketplace setup](https://docs.adyen.com/marketplaces/). If you have an Adyen Issuing integration, [generate an API key](https://docs.adyen.com/issuing/manage-access/api-credentials-web-service/#generate-api-key) in your Balance Platform Customer Area. You can then use the API key to send requests to `https://authe-live.adyen.com/authe/api/v1`.

Base URLs:

* <a href="https://test.adyen.com/authe/api/v1">https://test.adyen.com/authe/api/v1</a> - Test Environment

* <a href="https://authe-live.adyen.com/authe/api/v1">https://authe-live.adyen.com/authe/api/v1</a> - Live Environment

<a href="https://www.adyen.com/legal/terms-and-conditions">Terms of service</a>
Web: <a href="https://github.com/Adyen/adyen-openapi">Adyen Developer Experience team</a> 

# Authentication

* API Key (ApiKeyAuth)
    - Parameter Name: **X-API-Key**, in: header.

- HTTP Authentication, scheme: basic

<h1 id="session-authentication-api-session-authentication">Session authentication</h1>

## Create a session token

<a id="opIdpost-sessions"></a>

> Code samples

```bash
curl https://test.adyen.com/authe/api/v1/sessions \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "allowOrigin": "https://www.your-website.com",
    "product": "onboarding",
    "policy": {
      "resources": [
        {
          "type": "legalEntity",
          "legalEntityId": "LE00000000000000000000001"
        }
      ],
      "roles": [
        "createTransferInstrumentComponent",
        "manageTransferInstrumentComponent"
      ]
    }
  }'
```

`POST /sessions`

Creates a session token that is required to integrate [components](https://docs.adyen.com/platforms/components-overview).

The response contains encrypted session data. The front end then uses the session data to make the required server-side calls for the component.

To create a token, you must meet specific requirements. These requirements vary depending on the type of component. For more information, see the documentation for [Onboarding](https://docs.adyen.com/platforms/onboard-users/components) and [Platform Experience](https://docs.adyen.com/platforms/build-user-dashboards) components.



> Body parameter

```json
{
  "allowOrigin": "https://www.your-website.com",
  "product": "onboarding",
  "policy": {
    "resources": [
      {
        "type": "legalEntity",
        "legalEntityId": "LE00000000000000000000001"
      }
    ],
    "roles": [
      "createTransferInstrumentComponent",
      "manageTransferInstrumentComponent"
    ]
  }
}
```

<h3 id="create-a-session-token-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[AuthenticationSessionRequest](#schemaauthenticationsessionrequest)|true|none|
|» allowOrigin|body|string|false|The URL where the component will appear. In your live environment, you must protect the URL with an SSL certificate and ensure that it starts with `https://`.<br><br>Required for creating a session for Platform Experience and Onboarding components. Omitting this parameter results in an unusable session token.|
|» policy|body|[Policy](#schemapolicy)|true|An object that contains a description of the allowed resources and roles for the requested session.|
|» product|body|[ProductType](#schemaproducttype)|true|The type of component.<br><br>For [Onboarding components](https://docs.adyen.com/platforms/onboard-users/components), set this to **onboarding**.<br><br>For [Platform Experience components](https://docs.adyen.com/platforms/build-user-dashboards), set this to **platform**.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» product|onboarding|
|» product|platform|
|» product|bank|

> Example responses

> 200 Response

```json
{
  "id": "11a1e60a-18b0-4dda-9258-e0ae29e1e2a3",
  "token": "eyJraWQiOiJwbGF0Zm9ybWNvbGRlciI..."
}
```

> 400 Response

```json
{
  "type": "https://docs.adyen.com/errors/bad-request",
  "errorCode": "00_400",
  "title": "Bad request",
  "detail": "Unable to map request body",
  "requestId": "c49d45e20aec9a0f20c908343da5ebc3",
  "status": 400,
  "invalidFields": [
    {
      "name": "product",
      "message": "Field key/value incorrect"
    }
  ]
}
```

> 401 Response

```json
{
  "type": "https://docs.adyen.com/errors/unauthorized",
  "title": "Unauthorized",
  "status": 401,
  "errorCode": "00_401"
}
```

> 403 Response

```json
{
  "type": "https://docs.adyen.com/errors/forbidden",
  "errorCode": "00_403",
  "title": "Forbidden",
  "detail": "User doesn't have access to all token policy resources",
  "requestId": "d42c493b5176df89e51516c6060cc34c",
  "status": 403
}
```

<h3 id="create-a-session-token-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|[AuthenticationSessionResponse](#schemaauthenticationsessionresponse)|
|400|Bad Request|Bad request|[DefaultErrorResponseEntity](#schemadefaulterrorresponseentity)|
|401|Unauthorized|Unauthorized|[DefaultErrorResponseEntity](#schemadefaulterrorresponseentity)|
|403|Forbidden|Forbidden|[DefaultErrorResponseEntity](#schemadefaulterrorresponseentity)|

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

<h2 id="tocS_AccountHolderResource">AccountHolderResource</h2>
<!-- backwards compatibility -->
<a id="schemaaccountholderresource"></a>
<a id="schema_AccountHolderResource"></a>
<a id="tocSaccountholderresource"></a>
<a id="tocsaccountholderresource"></a>

```json
{
  "type": "legalEntity",
  "accountHolderId": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|[ResourceType](#schemaresourcetype)|false|none|The resource type.<br><br>Possible values: **accountHolder**, **legalEntity**.<br><br>You must also include the corresponding unique identifier of the resource. For example, the account holder ID.|
|accountHolderId|string|true|none|The unique identifier of the resource connected to the component. For [Platform Experience components](https://docs.adyen.com/platforms/build-user-dashboards), this is the account holder linked to the balance account shown in the component.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|legalEntity|
|type|accountHolder|
|type|paymentInstrument|

<h2 id="tocS_AuthenticationSessionRequest">AuthenticationSessionRequest</h2>
<!-- backwards compatibility -->
<a id="schemaauthenticationsessionrequest"></a>
<a id="schema_AuthenticationSessionRequest"></a>
<a id="tocSauthenticationsessionrequest"></a>
<a id="tocsauthenticationsessionrequest"></a>

```json
{
  "allowOrigin": "string",
  "policy": {
    "resources": [
      {
        "type": "legalEntity"
      }
    ],
    "roles": [
      "string"
    ]
  },
  "product": "onboarding"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|allowOrigin|string|false|none|The URL where the component will appear. In your live environment, you must protect the URL with an SSL certificate and ensure that it starts with `https://`.<br><br>Required for creating a session for Platform Experience and Onboarding components. Omitting this parameter results in an unusable session token.|
|policy|[Policy](#schemapolicy)|true|none|An object that contains a description of the allowed resources and roles for the requested session.|
|product|[ProductType](#schemaproducttype)|true|none|The type of component.<br><br>For [Onboarding components](https://docs.adyen.com/platforms/onboard-users/components), set this to **onboarding**.<br><br>For [Platform Experience components](https://docs.adyen.com/platforms/build-user-dashboards), set this to **platform**.|

#### Enumerated Values

|Property|Value|
|---|---|
|product|onboarding|
|product|platform|
|product|bank|

<h2 id="tocS_AuthenticationSessionResponse">AuthenticationSessionResponse</h2>
<!-- backwards compatibility -->
<a id="schemaauthenticationsessionresponse"></a>
<a id="schema_AuthenticationSessionResponse"></a>
<a id="tocSauthenticationsessionresponse"></a>
<a id="tocsauthenticationsessionresponse"></a>

```json
{
  "id": "string",
  "token": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|The unique identifier of the session.|
|token|string|false|none|The session token created.|

<h2 id="tocS_DefaultErrorResponseEntity">DefaultErrorResponseEntity</h2>
<!-- backwards compatibility -->
<a id="schemadefaulterrorresponseentity"></a>
<a id="schema_DefaultErrorResponseEntity"></a>
<a id="tocSdefaulterrorresponseentity"></a>
<a id="tocsdefaulterrorresponseentity"></a>

```json
{
  "detail": "string",
  "errorCode": "string",
  "instance": "string",
  "invalidFields": [
    {
      "message": "string",
      "name": "string",
      "value": "string"
    }
  ],
  "requestId": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

Standardized error response following RFC-7807 format

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|A human-readable explanation specific to this occurrence of the problem.|
|errorCode|string|false|none|Unique business error code.|
|instance|string|false|none|A URI that identifies the specific occurrence of the problem if applicable.|
|invalidFields|[[InvalidField](#schemainvalidfield)]|false|none|Array of fields with validation errors when applicable.|
|requestId|string|false|none|The unique reference for the request.|
|status|integer(int32)|false|none|The HTTP status code.|
|title|string|false|none|A short, human-readable summary of the problem type.|
|type|string|false|none|A URI that identifies the validation error type. It points to human-readable documentation for the problem type.|

<h2 id="tocS_InvalidField">InvalidField</h2>
<!-- backwards compatibility -->
<a id="schemainvalidfield"></a>
<a id="schema_InvalidField"></a>
<a id="tocSinvalidfield"></a>
<a id="tocsinvalidfield"></a>

```json
{
  "message": "string",
  "name": "string",
  "value": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|true|none|Description of the validation error.|
|name|string|true|none|The field that has an invalid value.|
|value|string|true|none|The invalid value.|

<h2 id="tocS_LegalEntityResource">LegalEntityResource</h2>
<!-- backwards compatibility -->
<a id="schemalegalentityresource"></a>
<a id="schema_LegalEntityResource"></a>
<a id="tocSlegalentityresource"></a>
<a id="tocslegalentityresource"></a>

```json
{
  "type": "legalEntity",
  "legalEntityId": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|[ResourceType](#schemaresourcetype)|false|none|The resource type.<br><br>Possible values: **accountHolder**, **legalEntity**.<br><br>You must also include the corresponding unique identifier of the resource. For example, the account holder ID.|
|legalEntityId|string|true|none|The unique identifier of the resource connected to the component.<br>For [Onboarding components](https://docs.adyen.com/platforms/onboard-users/components), this is the legal entity that has a contractual relationship with your platform and owns the [transfer instrument](https://docs.adyen.com/api-explorer/legalentity/latest/post/transferInstruments). For sole proprietorships, this is the legal entity of the individual owner.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|legalEntity|
|type|accountHolder|
|type|paymentInstrument|

<h2 id="tocS_PaymentInstrumentResource">PaymentInstrumentResource</h2>
<!-- backwards compatibility -->
<a id="schemapaymentinstrumentresource"></a>
<a id="schema_PaymentInstrumentResource"></a>
<a id="tocSpaymentinstrumentresource"></a>
<a id="tocspaymentinstrumentresource"></a>

```json
{
  "type": "legalEntity",
  "paymentInstrumentId": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|[ResourceType](#schemaresourcetype)|false|none|The resource type.<br><br>Possible values: **accountHolder**, **legalEntity**.<br><br>You must also include the corresponding unique identifier of the resource. For example, the account holder ID.|
|paymentInstrumentId|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|legalEntity|
|type|accountHolder|
|type|paymentInstrument|

<h2 id="tocS_Policy">Policy</h2>
<!-- backwards compatibility -->
<a id="schemapolicy"></a>
<a id="schema_Policy"></a>
<a id="tocSpolicy"></a>
<a id="tocspolicy"></a>

```json
{
  "resources": [
    {
      "type": "legalEntity"
    }
  ],
  "roles": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|resources|[[Resource](#schemaresource)]|false|none|An object containing the type and the unique identifier of the user of the component.<br><br>For [Onboarding components](https://docs.adyen.com/platforms/onboard-users/components), this is the ID of the legal entity that has a contractual relationship with your platform. For sole proprietorships, use the ID of the legal entity of the individual owner.<br><br>For [Platform Experience components](https://docs.adyen.com/platforms/build-user-dashboards), this is the ID of the account holder that is associated with the balance account shown in the component.|
|roles|[string]|false|none|The name of the role required to use the component.|

<h2 id="tocS_ProductType">ProductType</h2>
<!-- backwards compatibility -->
<a id="schemaproducttype"></a>
<a id="schema_ProductType"></a>
<a id="tocSproducttype"></a>
<a id="tocsproducttype"></a>

```json
"onboarding"
```

<h2 id="tocS_Resource">Resource</h2>
<!-- backwards compatibility -->
<a id="schemaresource"></a>
<a id="schema_Resource"></a>
<a id="tocSresource"></a>
<a id="tocsresource"></a>

```json
{
  "type": "legalEntity"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|[ResourceType](#schemaresourcetype)|false|none|The resource type.<br><br>Possible values: **accountHolder**, **legalEntity**.<br><br>You must also include the corresponding unique identifier of the resource. For example, the account holder ID.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|legalEntity|
|type|accountHolder|
|type|paymentInstrument|

<h2 id="tocS_ResourceType">ResourceType</h2>
<!-- backwards compatibility -->
<a id="schemaresourcetype"></a>
<a id="schema_ResourceType"></a>
<a id="tocSresourcetype"></a>
<a id="tocsresourcetype"></a>

```json
"legalEntity"
```
